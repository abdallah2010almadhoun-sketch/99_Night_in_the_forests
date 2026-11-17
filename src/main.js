import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const canvas = document.getElementById('game');
const nightText = document.getElementById('nightText');
const healthText = document.getElementById('healthText');
const statusText = document.getElementById('statusText');
const joystickZone = document.getElementById('joystickZone');
const joystickBase = document.getElementById('joystickBase');
const joystickKnob = document.getElementById('joystickKnob');
const lookZone = document.getElementById('lookZone');
const attackBtn = document.getElementById('attackBtn');
const jumpBtn = document.getElementById('jumpBtn');
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020a0f);
scene.fog = new THREE.FogExp2(0x071922, 0.045);

const camera = new THREE.PerspectiveCamera(67, window.innerWidth / window.innerHeight, 0.1, 200);
camera.rotation.order = 'YXZ';

const clock = new THREE.Clock();
const world = new THREE.Group();
scene.add(world);

// Gentle rolling ground keeps the campfire clearing flat while giving the player
// broad, easy-to-climb slopes farther out in the forest.
function getGroundHeight(x, z) {
  const radius = Math.hypot(x, z);
  const inner = Math.min(Math.max((radius - 8) / 10, 0), 1);
  const outer = Math.min(Math.max((62 - radius) / 8, 0), 1);
  const waves = Math.sin(x * 0.11 + 0.7) * Math.cos(z * 0.1 - 0.35) * 0.55
    + Math.sin((x + z) * 0.055 - 0.6) * 0.35;
  return waves * inner * outer;
}

const groundGeometry = new THREE.PlaneGeometry(130, 130, 56, 56);
groundGeometry.rotateX(-Math.PI / 2);
const groundPositions = groundGeometry.attributes.position;
for (let i = 0; i < groundPositions.count; i += 1) {
  groundPositions.setY(i, getGroundHeight(groundPositions.getX(i), groundPositions.getZ(i)));
}
groundGeometry.computeVertexNormals();

const plane = new THREE.Mesh(
  groundGeometry,
  new THREE.MeshStandardMaterial({ color: 0x10251f, roughness: 1, metalness: 0 })
);
plane.receiveShadow = true;
world.add(plane);

const campfire = new THREE.Group();
world.add(campfire);

const campfireBase = new THREE.Mesh(
  new THREE.CylinderGeometry(1.1, 1.5, 0.45, 8),
  new THREE.MeshStandardMaterial({ color: 0x36261e, roughness: 0.9 })
);
campfireBase.position.y = 0.2;
campfireBase.castShadow = true;
campfireBase.receiveShadow = true;
campfire.add(campfireBase);

const fireCore = new THREE.Mesh(
  new THREE.SphereGeometry(0.38, 10, 10),
  new THREE.MeshStandardMaterial({
    color: 0xff9d43,
    emissive: 0xff8a2a,
    emissiveIntensity: 2.4,
    roughness: 0.55,
    metalness: 0.1
  })
);
fireCore.position.y = 0.85;
fireCore.castShadow = true;
campfire.add(fireCore);

const fireGlow = new THREE.PointLight(0xff8e3c, 2.2, 15, 2.1);
fireGlow.position.set(0, 1.3, 0);
campfire.add(fireGlow);

const warmLight = new THREE.PointLight(0xffd29d, 0.85, 20, 2);
warmLight.position.set(0, 1.2, 0);
scene.add(warmLight);

const ambient = new THREE.HemisphereLight(0x95c6ff, 0x0f1519, 0.9);
scene.add(ambient);

const moonLight = new THREE.DirectionalLight(0xbad7ff, 0.9);
moonLight.position.set(-8, 12, 6);
moonLight.castShadow = true;
moonLight.shadow.mapSize.width = 1024;
moonLight.shadow.mapSize.height = 1024;
moonLight.shadow.camera.left = -35;
moonLight.shadow.camera.right = 35;
moonLight.shadow.camera.top = 35;
moonLight.shadow.camera.bottom = -35;
scene.add(moonLight);

const treeData = [];
const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3b2723, roughness: 1 });
const foliageMat = new THREE.MeshStandardMaterial({ color: 0x1a2a1f, roughness: 1 });

function createTree(x, z, scale = 1) {
  const tree = new THREE.Group();

  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18 * scale, 0.28 * scale, 1.7 * scale, 6),
    trunkMat
  );
  trunk.position.y = 0.85 * scale;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  tree.add(trunk);

  const foliage = new THREE.Mesh(
    new THREE.ConeGeometry(0.8 * scale, 2.2 * scale, 6),
    foliageMat
  );
  foliage.position.y = 2.4 * scale;
  foliage.castShadow = true;
  foliage.receiveShadow = true;
  tree.add(foliage);

  tree.position.set(x, getGroundHeight(x, z), z);
  tree.userData.scale = scale;
  tree.userData.cameraMeshes = [trunk, foliage];
  world.add(tree);
  treeData.push(tree);
  return tree;
}

for (let i = 0; i < 90; i += 1) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 12 + Math.random() * 42;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  if (Math.abs(x) < 6 && Math.abs(z) < 6) continue;
  createTree(x, z, 0.8 + Math.random() * 1.2);
}

const grassTufts = [];
for (let i = 0; i < 120; i += 1) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.16, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x173627, roughness: 1 })
  );
  const x = (Math.random() - 0.5) * 90;
  const z = (Math.random() - 0.5) * 90;
  mesh.position.set(x, getGroundHeight(x, z) + 0.08, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  world.add(mesh);
  grassTufts.push(mesh);
}

const player = new THREE.Group();
scene.add(player);

const avatar = new THREE.Group();
avatar.position.y = 0.01;
player.add(avatar);

const skinMaterial = new THREE.MeshStandardMaterial({
  color: 0xffd63f,
  emissive: 0x3b2900,
  emissiveIntensity: 0.38,
  roughness: 0.38,
  metalness: 0.03
});
const shirtMaterial = new THREE.MeshStandardMaterial({ color: 0x2f6fd2, roughness: 0.4, metalness: 0.03 });
const pantsMaterial = new THREE.MeshStandardMaterial({ color: 0x38994b, roughness: 0.42, metalness: 0.03 });
const faceMaterial = new THREE.MeshStandardMaterial({ color: 0x121518, roughness: 0.5, metalness: 0 });

function makeAvatarPart(width, height, depth, material, radius = 0.035) {
  const mesh = new THREE.Mesh(
    new RoundedBoxGeometry(width, height, depth, 2, radius),
    material
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

const torso = makeAvatarPart(0.84, 0.86, 0.44, shirtMaterial, 0.045);
torso.position.y = 1.27;
avatar.add(torso);

const headGroup = new THREE.Group();
headGroup.position.y = 2;
avatar.add(headGroup);

const head = makeAvatarPart(0.6, 0.6, 0.6, skinMaterial, 0.055);
headGroup.add(head);

const eyeGeometry = new RoundedBoxGeometry(0.075, 0.105, 0.025, 1, 0.01);
const leftEye = new THREE.Mesh(eyeGeometry, faceMaterial);
leftEye.position.set(-0.135, 0.085, 0.301);
headGroup.add(leftEye);
const rightEye = new THREE.Mesh(eyeGeometry, faceMaterial);
rightEye.position.set(0.135, 0.085, 0.301);
headGroup.add(rightEye);

const smile = new THREE.Mesh(
  new THREE.TorusGeometry(0.115, 0.021, 4, 14, Math.PI),
  faceMaterial
);
smile.rotation.z = Math.PI;
smile.position.set(0, -0.075, 0.303);
headGroup.add(smile);

const leftArm = new THREE.Group();
leftArm.position.set(-0.54, 1.64, 0);
avatar.add(leftArm);
const leftArmMesh = makeAvatarPart(0.22, 0.78, 0.3, skinMaterial, 0.06);
leftArmMesh.position.y = -0.39;
leftArm.add(leftArmMesh);

const rightArm = new THREE.Group();
rightArm.position.set(0.54, 1.64, 0);
avatar.add(rightArm);
const rightArmMesh = makeAvatarPart(0.22, 0.78, 0.3, skinMaterial, 0.06);
rightArmMesh.position.y = -0.39;
rightArm.add(rightArmMesh);

const leftLeg = new THREE.Group();
leftLeg.position.set(-0.2, 0.84, 0);
avatar.add(leftLeg);
const leftLegMesh = makeAvatarPart(0.3, 0.82, 0.36, pantsMaterial, 0.045);
leftLegMesh.position.y = -0.41;
leftLeg.add(leftLegMesh);

const rightLeg = new THREE.Group();
rightLeg.position.set(0.2, 0.84, 0);
avatar.add(rightLeg);
const rightLegMesh = makeAvatarPart(0.3, 0.82, 0.36, pantsMaterial, 0.045);
rightLegMesh.position.y = -0.41;
rightLeg.add(rightLegMesh);

const lantern = new THREE.Mesh(
  new THREE.SphereGeometry(0.15, 8, 8),
  new THREE.MeshStandardMaterial({ color: 0xffc66e, emissive: 0xff8a26, emissiveIntensity: 2.1, roughness: 0.4 })
);
lantern.position.set(0.02, -0.68, 0.2);
lantern.castShadow = true;
rightArm.add(lantern);

const playerGlow = new THREE.PointLight(0xffc071, 0.8, 14, 2);
playerGlow.position.set(0, 1.9, 0);
player.add(playerGlow);

const strikeArc = new THREE.Mesh(
  new THREE.TorusGeometry(1.05, 0.055, 5, 24),
  new THREE.MeshBasicMaterial({ color: 0xffc66e, transparent: true, opacity: 0.8 })
);
strikeArc.rotation.x = Math.PI / 2;
strikeArc.position.set(0, 0.9, 0.85);
strikeArc.visible = false;
player.add(strikeArc);

player.position.set(0, getGroundHeight(0, 4), 4);

// A handful of low rocks give the character something small to auto-jump over.
const lowObstacles = [];
const rockGeometry = new THREE.DodecahedronGeometry(0.55, 0);
const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x46504e, roughness: 0.95, metalness: 0.02 });
for (let i = 0; i < 8; i += 1) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 10 + Math.random() * 20;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 1.6)) continue;
  const scale = 0.8 + Math.random() * 0.55;
  const groundY = getGroundHeight(x, z);
  const rock = new THREE.Mesh(rockGeometry, rockMaterial);
  rock.position.set(x, groundY + 0.3025 * scale, z);
  rock.scale.set(scale, scale * 0.55, scale);
  rock.rotation.y = Math.random() * Math.PI;
  rock.castShadow = true;
  rock.receiveShadow = true;
  world.add(rock);
  lowObstacles.push({ x, z, radius: 0.52 * scale, top: groundY + 0.605 * scale });
}

const enemies = [];
const enemyMat = new THREE.MeshStandardMaterial({ color: 0x2a343f, roughness: 0.9, metalness: 0.1 });

function makeEnemy() {
  const enemy = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.37, 1.15, 4, 7), enemyMat.clone());
  body.position.y = 1.1;
  body.castShadow = true;
  enemy.add(body);

  const eye = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.12, 0.16),
    new THREE.MeshStandardMaterial({ color: 0xff7b54, emissive: 0xff5b39, emissiveIntensity: 0.8 })
  );
  eye.position.set(0, 1.45, 0.28);
  enemy.add(eye);

  const enemyX = (Math.random() - 0.5) * 75;
  const enemyZ = (Math.random() - 0.5) * 75;
  enemy.position.set(enemyX, getGroundHeight(enemyX, enemyZ), enemyZ);
  enemy.userData = {
    body,
    speed: 1.1 + Math.random() * 0.8,
    attackCooldown: 0,
    health: 2,
    hitTimer: 0,
    respawnTimer: 0,
    phase: Math.random() * Math.PI * 2
  };
  scene.add(enemy);
  enemies.push(enemy);
  return enemy;
}

for (let i = 0; i < 8; i += 1) makeEnemy();

// A warm pool of light and a trail of smoke make the home point visible through the fog.
const fireFlame = new THREE.Mesh(
  new THREE.ConeGeometry(0.3, 0.9, 7),
  new THREE.MeshBasicMaterial({ color: 0xffb44d })
);
fireFlame.position.set(0, 1.1, 0);
campfire.add(fireFlame);

const smokePuffs = [];
const smokeMaterial = new THREE.MeshBasicMaterial({ color: 0x9ca9a2, transparent: true, opacity: 0.15 });
for (let i = 0; i < 4; i += 1) {
  const puff = new THREE.Mesh(new THREE.SphereGeometry(0.18 + i * 0.025, 6, 6), smokeMaterial.clone());
  puff.position.y = 1.6 + i * 0.45;
  campfire.add(puff);
  smokePuffs.push(puff);
}

const sky = new THREE.Mesh(
  new THREE.SphereGeometry(110, 24, 24),
  new THREE.MeshBasicMaterial({
    color: 0x061821,
    side: THREE.BackSide,
    fog: false
  })
);
scene.add(sky);

const spawnBurst = new THREE.PointLight(0xffa14a, 2.2, 12, 2);
spawnBurst.position.set(0, 1.2, 0);
spawnBurst.visible = false;
scene.add(spawnBurst);

const state = {
  started: false,
  lastTime: 0,
  night: 1,
  maxNight: 99,
  health: 100,
  damageFlash: 0,
  attackCooldown: 0,
  attackTimer: 0,
  nearFire: true,
  keys: new Set(),
  joystick: { x: 0, y: 0, active: false },
  look: { active: false, lastX: 0, lastY: 0 },
  pinchDistance: 0,
  cameraYaw: 0,
  cameraPitch: 0,
  cameraDistance: 5.7,
  nightTimer: 0,
  gameOver: false,
  pointerId: null,
  victory: false,
  velocityY: 0,
  grounded: true,
  jumpHeld: false,
  walkPhase: 0,
  idleTime: 0,
  moveSpeed: 0,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateHud() {
  nightText.textContent = String(state.night);
  healthText.textContent = String(Math.max(0, Math.ceil(state.health)));
  const healthPanel = healthText.closest('.panel');
  healthPanel?.style.setProperty('--health-ratio', `${clamp(state.health, 0, 100)}%`);

  if (state.health <= 25) {
    statusText.textContent = 'Fading fast';
    statusText.style.color = '#ff5d5d';
  } else if (state.health <= 60) {
    statusText.textContent = 'Under attack';
    statusText.style.color = '#ffba58';
  } else if (state.nearFire) {
    statusText.textContent = 'Safe by the fire';
    statusText.style.color = '#8aec9b';
  } else {
    statusText.textContent = 'Stay near the fire';
    statusText.style.color = '#ffba58';
  }
}

function resetJoystickVisual() {
  joystickKnob.style.transform = 'translate(-50%, -50%)';
}

function setJoystickFromPointer(clientX, clientY) {
  const rect = joystickZone.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = clientX - cx;
  const dy = clientY - cy;
  const maxRadius = rect.width * 0.31;
  const distance = Math.min(Math.hypot(dx, dy), maxRadius);
  const angle = Math.atan2(dy, dx);
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  state.joystick.x = x / maxRadius;
  state.joystick.y = y / maxRadius;
  state.joystick.active = true;
  joystickKnob.style.left = `${50 + (x / maxRadius) * 30}%`;
  joystickKnob.style.top = `${50 + (y / maxRadius) * 30}%`;
}

function handleJoystickPointer(e) {
  e.preventDefault();
  state.joystick.active = true;
  setJoystickFromPointer(e.clientX, e.clientY);
}

joystickZone.addEventListener('pointerdown', (event) => {
  state.pointerId = event.pointerId;
  handleJoystickPointer(event);
  joystickZone.setPointerCapture(event.pointerId);
});

joystickZone.addEventListener('pointermove', (event) => {
  if (!state.joystick.active || event.pointerId !== state.pointerId) return;
  handleJoystickPointer(event);
});

function releaseJoystick() {
  state.pointerId = null;
  state.joystick.x = 0;
  state.joystick.y = 0;
  state.joystick.active = false;
  joystickKnob.style.left = '50%';
  joystickKnob.style.top = '50%';
  resetJoystickVisual();
}

joystickZone.addEventListener('pointerup', releaseJoystick);
joystickZone.addEventListener('pointercancel', releaseJoystick);

const lookPointers = new Map();

function getPinchDistance() {
  const points = [...lookPointers.values()];
  if (points.length < 2) return 0;
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

lookZone.addEventListener('pointerdown', (event) => {
  if (!state.started) return;
  event.preventDefault();
  lookPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  state.look.active = true;
  state.pinchDistance = getPinchDistance();
  lookZone.setPointerCapture(event.pointerId);
});

lookZone.addEventListener('pointermove', (event) => {
  if (!state.started) return;
  const previous = lookPointers.get(event.pointerId);
  if (!previous) return;
  event.preventDefault();
  lookPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (lookPointers.size === 1) {
    const dx = event.clientX - previous.x;
    const dy = event.clientY - previous.y;
    state.cameraYaw -= dx * 0.0037;
    state.cameraPitch = clamp(state.cameraPitch - dy * 0.0022, -0.7, 0.45);
    return;
  }

  const distance = getPinchDistance();
  if (state.pinchDistance > 0 && distance > 0) {
    state.cameraDistance = clamp(state.cameraDistance * (state.pinchDistance / distance), 3, 8.5);
  }
  state.pinchDistance = distance;
});

function releaseLookPointer(event) {
  lookPointers.delete(event.pointerId);
  state.pinchDistance = lookPointers.size >= 2 ? getPinchDistance() : 0;
  if (lookPointers.size === 0) state.look.active = false;
}

lookZone.addEventListener('pointerup', releaseLookPointer);
lookZone.addEventListener('pointercancel', releaseLookPointer);

function startGame() {
  state.started = true;
  state.victory = false;
  state.gameOver = false;
  overlay.classList.add('hidden');
  state.health = 100;
  state.night = 1;
  state.nightTimer = 0;
  state.attackCooldown = 0;
  state.attackTimer = 0;
  state.nearFire = true;
  state.keys.clear();
  state.cameraYaw = 0;
  state.cameraPitch = 0;
  state.cameraDistance = 5.7;
  state.velocityY = 0;
  state.grounded = true;
  state.jumpHeld = false;
  state.walkPhase = 0;
  state.idleTime = 0;
  state.moveSpeed = 0;
  player.position.set(0, getGroundHeight(0, -3.5), -3.5);
  player.rotation.y = 0;
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);
  avatar.position.y = 0.01;
  lookPointers.clear();
  state.look.active = false;
  state.pinchDistance = 0;
  for (const enemy of enemies) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 22;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    enemy.position.set(x, getGroundHeight(x, z), z);
    enemy.visible = true;
    enemy.userData.attackCooldown = 0;
    enemy.userData.health = 2;
    enemy.userData.hitTimer = 0;
    enemy.userData.respawnTimer = 0;
    enemy.userData.body.material.color.setHex(0x2a343f);
  }
  strikeArc.visible = false;
  updateHud();
}

startBtn.addEventListener('click', startGame);

const blockedKeys = new Set([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright']);
const jumpKeys = new Set(['shift', 'j']);
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (blockedKeys.has(key)) event.preventDefault();
  if (key === ' ' && !event.repeat) attack();
  if (jumpKeys.has(key)) {
    state.jumpHeld = true;
    if (!event.repeat) tryJump();
  }
  state.keys.add(key);
});
window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase();
  state.keys.delete(key);
  if (jumpKeys.has(key)) state.jumpHeld = false;
});
window.addEventListener('blur', () => {
  state.keys.clear();
  state.jumpHeld = false;
});

attackBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  attack();
});

function setJumpHeld(held) {
  state.jumpHeld = held;
  if (held) tryJump();
}

jumpBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  jumpBtn.setPointerCapture(event.pointerId);
  setJumpHeld(true);
});
jumpBtn.addEventListener('pointerup', () => setJumpHeld(false));
jumpBtn.addEventListener('pointercancel', () => setJumpHeld(false));
jumpBtn.addEventListener('lostpointercapture', () => setJumpHeld(false));

overlay.addEventListener('pointerdown', (event) => {
  if (!state.started && event.target === overlay) startGame();
});

function resetToMenu(title, subtitle, hint, buttonText) {
  overlay.classList.remove('hidden');
  overlay.querySelector('.title').textContent = title;
  overlay.querySelector('.subtitle').textContent = subtitle;
  overlay.querySelector('.hint').textContent = hint;
  overlay.querySelector('button').textContent = buttonText;
}

function attack() {
  if (!state.started || state.gameOver || state.attackCooldown > 0) return;

  state.attackCooldown = 0.62;
  state.attackTimer = 0.24;
  strikeArc.visible = true;
  strikeArc.scale.setScalar(0.7);
  playerGlow.intensity = 1.8;

  const forward = new THREE.Vector3(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));
  for (const enemy of enemies) {
    if (!enemy.visible) continue;
    const offset = enemy.position.clone().sub(player.position);
    const distance = offset.length();
    if (distance > 3.6 || distance < 0.01) continue;
    offset.normalize();
    if (forward.dot(offset) < 0.28) continue;

    const data = enemy.userData;
    data.health -= 1;
    data.hitTimer = 0.2;
    data.body.material.color.setHex(0xff8a55);
    enemy.position.addScaledVector(forward, 0.2);
    if (data.health <= 0) {
      enemy.visible = false;
      data.respawnTimer = 5;
      data.attackCooldown = 0;
    }
  }
}

function spawnNightWave() {
  const currentCount = Math.min(8 + state.night * 2, 28);
  while (enemies.length < currentCount) makeEnemy();

  for (const enemy of enemies) {
    const radius = 18 + Math.random() * 28;
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    enemy.position.set(x, getGroundHeight(x, z), z);
    enemy.visible = true;
    enemy.userData.health = 2;
    enemy.userData.hitTimer = 0;
    enemy.userData.respawnTimer = 0;
    enemy.userData.body.material.color.setHex(0x2a343f);
    enemy.userData.speed = 1.1 + Math.random() * 0.9 + state.night * 0.06;
  }

  spawnBurst.visible = true;
  spawnBurst.position.copy(player.position);
  spawnBurst.position.y = 1.4;
  spawnBurst.intensity = 2.6;
}

function getCampfireInfluence() {
  const dx = player.position.x - campfire.position.x;
  const dz = player.position.z - campfire.position.z;
  return dx * dx + dz * dz < 10 * 10 ? 1 : 0;
}

const PLAYER_SPEED = 6;
const PLAYER_RADIUS = 0.32;
const JUMP_SPEED = 7.4;
const GRAVITY = 17.5;

function tryJump() {
  if (!state.started || state.gameOver || !state.grounded) return;
  state.velocityY = JUMP_SPEED;
  state.grounded = false;
}

function updatePlayerVertical(delta) {
  const groundY = getGroundHeight(player.position.x, player.position.z);
  if (!state.started || state.gameOver) {
    state.velocityY = 0;
    state.grounded = true;
    player.position.y = groundY;
    return;
  }

  if (state.grounded) {
    player.position.y = groundY;
    if (state.jumpHeld) tryJump();
    return;
  }

  state.velocityY -= GRAVITY * delta;
  player.position.y += state.velocityY * delta;
  if (player.position.y <= groundY) {
    player.position.y = groundY;
    state.velocityY = 0;
    state.grounded = true;
  }
}

function resolveTreeCollisions() {
  for (const tree of treeData) {
    const dx = player.position.x - tree.position.x;
    const dz = player.position.z - tree.position.z;
    const radius = tree.userData.scale * 0.3 + PLAYER_RADIUS;
    const distanceSq = dx * dx + dz * dz;
    if (distanceSq >= radius * radius || distanceSq < 0.0001) continue;
    const distance = Math.sqrt(distanceSq);
    const push = radius - distance;
    player.position.x += (dx / distance) * push;
    player.position.z += (dz / distance) * push;
  }
}

function checkAutoJump(nextX, nextZ, moveDir) {
  if (!state.grounded) return;
  for (const obstacle of lowObstacles) {
    const dx = nextX - obstacle.x;
    const dz = nextZ - obstacle.z;
    const reach = obstacle.radius + PLAYER_RADIUS + 0.12;
    if (dx * dx + dz * dz > reach * reach) continue;
    const towardX = obstacle.x - nextX;
    const towardZ = obstacle.z - nextZ;
    if (moveDir.x * towardX + moveDir.z * towardZ <= 0) continue;
    if (obstacle.top - player.position.y <= 0.95) {
      tryJump();
      return;
    }
  }
}

function movePlayer(delta) {
  if (!state.started || state.gameOver) return;
  const keys = state.keys;
  const keyX = (keys.has('d') || keys.has('arrowright') ? 1 : 0) - (keys.has('a') || keys.has('arrowleft') ? 1 : 0);
  const keyY = (keys.has('w') || keys.has('arrowup') ? 1 : 0) - (keys.has('s') || keys.has('arrowdown') ? 1 : 0);
  const moveX = clamp(state.joystick.x + keyX, -1, 1);
  const moveY = clamp(-state.joystick.y + keyY, -1, 1);
  if (Math.abs(moveX) + Math.abs(moveY) < 0.02) {
    state.moveSpeed = 0;
    return;
  }

  const forward = new THREE.Vector3(Math.sin(state.cameraYaw), 0, Math.cos(state.cameraYaw));
  const right = new THREE.Vector3(-Math.cos(state.cameraYaw), 0, Math.sin(state.cameraYaw));
  const moveDir = new THREE.Vector3();
  moveDir.addScaledVector(forward, moveY);
  moveDir.addScaledVector(right, moveX);
  moveDir.normalize();

  state.moveSpeed = PLAYER_SPEED;
  player.rotation.y = Math.atan2(moveDir.x, moveDir.z);

  const nextX = player.position.x + moveDir.x * delta * PLAYER_SPEED;
  const nextZ = player.position.z + moveDir.z * delta * PLAYER_SPEED;
  checkAutoJump(nextX, nextZ, moveDir);

  player.position.x = nextX;
  player.position.z = nextZ;
  resolveTreeCollisions();
  player.position.x = clamp(player.position.x, -30, 30);
  player.position.z = clamp(player.position.z, -30, 30);
}

function updateAvatar(delta) {
  state.idleTime += delta;

  let leftArmX = 0;
  let rightArmX = 0;
  let leftArmZ = 0;
  let rightArmZ = 0;
  let leftLegX = 0;
  let rightLegX = 0;

  if (!state.grounded) {
    if (state.velocityY > 0.25) {
      leftArmX = -2.55;
      rightArmX = -2.55;
      leftArmZ = -0.18;
      rightArmZ = 0.18;
    } else {
      leftArmX = -0.2;
      rightArmX = -0.2;
      leftArmZ = -1.35;
      rightArmZ = 1.35;
    }
    leftLegX = 0.12;
    rightLegX = -0.12;
  } else if (state.moveSpeed > 0.1) {
    state.walkPhase += delta * (5 + state.moveSpeed);
    const swing = Math.sin(state.walkPhase) * 0.72;
    leftArmX = swing;
    rightArmX = -swing;
    leftLegX = -swing;
    rightLegX = swing;
  } else {
    const sway = Math.sin(state.idleTime * 1.9) * 0.05;
    leftArmX = sway;
    rightArmX = -sway;
  }

  const damping = 1 - Math.exp(-14 * delta);
  leftArm.rotation.x += (leftArmX - leftArm.rotation.x) * damping;
  rightArm.rotation.x += (rightArmX - rightArm.rotation.x) * damping;
  leftArm.rotation.z += (leftArmZ - leftArm.rotation.z) * damping;
  rightArm.rotation.z += (rightArmZ - rightArm.rotation.z) * damping;
  leftLeg.rotation.x += (leftLegX - leftLeg.rotation.x) * damping;
  rightLeg.rotation.x += (rightLegX - rightLeg.rotation.x) * damping;

  const bob = state.grounded && state.moveSpeed > 0.1
    ? Math.abs(Math.sin(state.walkPhase)) * 0.02
    : 0;
  avatar.position.y += (0.01 + bob - avatar.position.y) * damping;
}

function updateEnemies(delta) {
  if (!state.started || state.gameOver) return;

  for (const enemy of enemies) {
    const data = enemy.userData;
    if (!enemy.visible) {
      data.respawnTimer -= delta;
      if (data.respawnTimer <= 0) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 20 + Math.random() * 18;
        const x = player.position.x + Math.cos(angle) * radius;
        const z = player.position.z + Math.sin(angle) * radius;
        enemy.position.set(x, getGroundHeight(x, z), z);
        data.health = 2;
        data.hitTimer = 0;
        enemy.visible = true;
      }
      continue;
    }

    if (data.hitTimer > 0) {
      data.hitTimer -= delta;
      if (data.hitTimer <= 0) data.body.material.color.setHex(0x2a343f);
    }

    const toPlayer = player.position.clone().sub(enemy.position);
    const dist = toPlayer.length();

    if (dist > 0.01) {
      toPlayer.normalize();
      enemy.position.addScaledVector(toPlayer, data.speed * delta);
    }

    enemy.position.y = getGroundHeight(enemy.position.x, enemy.position.z);
    enemy.rotation.y = Math.atan2(toPlayer.x, toPlayer.z);

    if (dist < 1.3) {
      data.attackCooldown -= delta;
      if (data.attackCooldown <= 0) {
        state.health -= 7 + state.night * 0.25;
        data.attackCooldown = 1.1;
        state.damageFlash = 1;
        updateHud();
      }
    } else {
      data.attackCooldown = Math.max(0, data.attackCooldown - delta * 0.5);
    }
  }
}

function updateCampfire(delta) {
  const safe = getCampfireInfluence() > 0;
  state.nearFire = safe;
  if (safe) {
    state.health = clamp(state.health + delta * 5.5, 0, 100);
    statusText.textContent = 'Campfire holds';
  }

  fireCore.scale.setScalar(1 + Math.sin(performance.now() * 0.012) * 0.1);
  fireGlow.intensity = 2.1 + Math.sin(performance.now() * 0.016) * 0.9;
  spawnBurst.visible = spawnBurst.visible && spawnBurst.intensity > 0.1;
  if (spawnBurst.visible) {
    spawnBurst.intensity *= 0.96;
  }

  const t = performance.now() * 0.001;
  fireCore.position.y = 0.84 + Math.sin(t * 6) * 0.09;
  fireCore.rotation.y += delta * 2.4;
  fireFlame.scale.set(0.82 + Math.sin(t * 11) * 0.14, 0.85 + Math.sin(t * 8) * 0.18, 0.82 + Math.sin(t * 9) * 0.14);
  for (let i = 0; i < smokePuffs.length; i += 1) {
    const puff = smokePuffs[i];
    const phase = (t * 0.42 + i / smokePuffs.length) % 1;
    puff.position.set(Math.sin(t * 1.4 + i) * 0.14, 1.45 + phase * 2.1, Math.cos(t * 1.2 + i) * 0.12);
    puff.scale.setScalar(0.7 + phase * 1.4);
    puff.material.opacity = 0.18 * (1 - phase);
  }

  if (state.started && !state.gameOver && state.health > 0) {
    const playerGlowPulse = 0.48 + Math.sin(t * 14) * 0.2;
    playerGlow.intensity = playerGlowPulse;
  }
}

function updateNight(delta) {
  state.nightTimer += delta;
  if (state.nightTimer >= 18) {
    state.nightTimer -= 18;
    state.night += 1;
    if (state.night > state.maxNight) {
      state.night = state.maxNight;
      state.victory = true;
      state.started = false;
      state.gameOver = true;
      resetToMenu('You Survived', '99 nights survived. The camp still burns.', 'Tap to begin a new run.', 'Play Again');
      return;
    }
    spawnNightWave();
  }
}

const cameraRaycaster = new THREE.Raycaster();
const cameraTarget = new THREE.Vector3();
const cameraDesired = new THREE.Vector3();
const cameraRayDirection = new THREE.Vector3();
const cameraCandidates = [];

function updateCamera() {
  const yaw = state.cameraYaw;
  const desiredDistance = state.cameraDistance;
  const height = Math.max(0.45, 1.5 + state.cameraPitch * 2.1);

  cameraTarget.copy(player.position);
  cameraTarget.y += 1.35;

  cameraDesired.set(
    cameraTarget.x - Math.sin(yaw) * desiredDistance,
    cameraTarget.y + height,
    cameraTarget.z - Math.cos(yaw) * desiredDistance
  );

  cameraRayDirection.copy(cameraDesired).sub(cameraTarget);
  const fullDistance = cameraRayDirection.length();
  cameraRayDirection.normalize();

  cameraCandidates.length = 0;
  const broadRadius = desiredDistance + 4;
  for (const tree of treeData) {
    const dx = tree.position.x - cameraTarget.x;
    const dz = tree.position.z - cameraTarget.z;
    if (dx * dx + dz * dz < broadRadius * broadRadius) {
      cameraCandidates.push(tree.userData.cameraMeshes[0], tree.userData.cameraMeshes[1]);
    }
  }

  let distance = fullDistance;
  if (cameraCandidates.length > 0) {
    cameraRaycaster.set(cameraTarget, cameraRayDirection);
    cameraRaycaster.far = fullDistance;
    const hits = cameraRaycaster.intersectObjects(cameraCandidates, false);
    if (hits.length > 0) distance = Math.max(1.4, hits[0].distance - 0.28);
  }

  cameraDesired.copy(cameraTarget).addScaledVector(cameraRayDirection, distance);
  const groundClearance = getGroundHeight(cameraDesired.x, cameraDesired.z) + 0.35;
  if (cameraDesired.y < groundClearance) cameraDesired.y = groundClearance;

  const obstructed = distance < fullDistance - 0.01;
  camera.position.lerp(cameraDesired, obstructed ? 0.55 : 0.16);
  const smoothedGround = getGroundHeight(camera.position.x, camera.position.z) + 0.3;
  if (camera.position.y < smoothedGround) camera.position.y = smoothedGround;

  cameraTarget.x += Math.sin(yaw) * 6;
  cameraTarget.y += state.cameraPitch * 6;
  cameraTarget.z += Math.cos(yaw) * 6;
  camera.lookAt(cameraTarget);
}

function updateOnGameOver() {
  if (state.health <= 0) {
    state.gameOver = true;
    state.started = false;
    resetToMenu('Night Lost', `Survived ${state.night} nights.`, 'Tap to return to the fire and try again.', 'Try Again');
  }
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.033);

  state.attackCooldown = Math.max(0, state.attackCooldown - delta);
  state.attackTimer = Math.max(0, state.attackTimer - delta);
  strikeArc.visible = state.attackTimer > 0;
  if (state.attackTimer > 0) {
    const progress = 1 - state.attackTimer / 0.24;
    strikeArc.scale.setScalar(0.7 + progress * 0.55);
    strikeArc.material.opacity = 0.8 * (1 - progress);
  }

  if (state.started && !state.gameOver) {
    movePlayer(delta);
    updatePlayerVertical(delta);
    updateEnemies(delta);
    updateCampfire(delta);
    updateNight(delta);
    updateHud();
    updateOnGameOver();
  } else {
    state.moveSpeed = 0;
    updatePlayerVertical(delta);
  }

  updateAvatar(delta);

  if (state.victory && !state.started) {
    overlay.classList.remove('hidden');
  }

  if (state.damageFlash > 0) {
    state.damageFlash = Math.max(0, state.damageFlash - delta * 1.5);
  }

  const flash = 0.25 + state.damageFlash * 0.7;
  renderer.setClearColor(new THREE.Color().setHSL(0.57, 0.72, 0.05 + flash * 0.08), 1);
  updateCamera();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

updateHud();
animate();
