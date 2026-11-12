import * as THREE from 'three';

const canvas = document.getElementById('game');
const nightText = document.getElementById('nightText');
const healthText = document.getElementById('healthText');
const statusText = document.getElementById('statusText');
const joystickZone = document.getElementById('joystickZone');
const joystickBase = document.getElementById('joystickBase');
const joystickKnob = document.getElementById('joystickKnob');
const lookZone = document.getElementById('lookZone');
const attackBtn = document.getElementById('attackBtn');
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
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

const plane = new THREE.Mesh(
  new THREE.CircleGeometry(65, 48),
  new THREE.MeshStandardMaterial({ color: 0x10251f, roughness: 1, metalness: 0 })
);
plane.rotation.x = -Math.PI / 2;
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

  tree.position.set(x, 0, z);
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
  mesh.position.set((Math.random() - 0.5) * 90, 0.08, (Math.random() - 0.5) * 90);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  world.add(mesh);
  grassTufts.push(mesh);
}

const player = new THREE.Group();
scene.add(player);

const playerBody = new THREE.Mesh(
  new THREE.CapsuleGeometry(0.42, 1.2, 4, 8),
  new THREE.MeshStandardMaterial({ color: 0x8faec4, roughness: 0.75, metalness: 0.1 })
);
playerBody.position.y = 1.1;
playerBody.castShadow = true;
player.add(playerBody);

const lantern = new THREE.Mesh(
  new THREE.SphereGeometry(0.17, 8, 8),
  new THREE.MeshStandardMaterial({ color: 0xffc66e, emissive: 0xff8a26, emissiveIntensity: 2.1, roughness: 0.4 })
);
lantern.position.set(0.48, 1.05, 0.34);
player.add(lantern);

const playerGlow = new THREE.PointLight(0xffc071, 0.8, 14, 2);
playerGlow.position.set(0, 1.5, 0);
player.add(playerGlow);

const strikeArc = new THREE.Mesh(
  new THREE.TorusGeometry(1.05, 0.055, 5, 24),
  new THREE.MeshBasicMaterial({ color: 0xffc66e, transparent: true, opacity: 0.8 })
);
strikeArc.rotation.x = Math.PI / 2;
strikeArc.position.set(0, 0.9, 0.85);
strikeArc.visible = false;
player.add(strikeArc);

playerBody.scale.set(0.78, 0.78, 0.78);
player.position.set(0, 0, 4);

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

  enemy.position.set(
    (Math.random() - 0.5) * 75,
    0,
    (Math.random() - 0.5) * 75
  );
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
  look: { active: false, x: 0, y: 0, lastX: 0, lastY: 0 },
  cameraYaw: 0,
  cameraPitch: 0,
  nightTimer: 0,
  gameOver: false,
  pointerId: null,
  victory: false,
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

lookZone.addEventListener('pointerdown', (event) => {
  if (!state.started) return;
  state.look.active = true;
  state.look.lastX = event.clientX;
  state.look.lastY = event.clientY;
  lookZone.setPointerCapture(event.pointerId);
});

lookZone.addEventListener('pointermove', (event) => {
  if (!state.look.active || !state.started) return;
  const dx = event.clientX - state.look.lastX;
  const dy = event.clientY - state.look.lastY;
  state.look.lastX = event.clientX;
  state.look.lastY = event.clientY;
  state.cameraYaw -= dx * 0.0037;
  state.cameraPitch = clamp(state.cameraPitch - dy * 0.0022, -0.7, 0.45);
});

lookZone.addEventListener('pointerup', () => {
  state.look.active = false;
});

lookZone.addEventListener('pointercancel', () => {
  state.look.active = false;
});

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
  player.position.set(0, 0, -3.5);
  for (const enemy of enemies) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 22;
    enemy.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
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
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (blockedKeys.has(key)) event.preventDefault();
  if (key === ' ' && !event.repeat) attack();
  state.keys.add(key);
});
window.addEventListener('keyup', (event) => state.keys.delete(event.key.toLowerCase()));
window.addEventListener('blur', () => state.keys.clear());

attackBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  attack();
});

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
    enemy.position.set(x, 0, z);
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
  const toPlayer = player.position.clone().sub(campfire.position);
  return toPlayer.lengthSq() < 10 * 10 ? 1 : 0;
}

function movePlayer(delta) {
  if (!state.started || state.gameOver) return;
  const keys = state.keys;
  const keyX = (keys.has('d') || keys.has('arrowright') ? 1 : 0) - (keys.has('a') || keys.has('arrowleft') ? 1 : 0);
  const keyY = (keys.has('w') || keys.has('arrowup') ? 1 : 0) - (keys.has('s') || keys.has('arrowdown') ? 1 : 0);
  const moveX = clamp(state.joystick.x + keyX, -1, 1);
  const moveY = clamp(-state.joystick.y + keyY, -1, 1);
  if (Math.abs(moveX) + Math.abs(moveY) < 0.02) return;

  const forward = new THREE.Vector3(Math.sin(state.cameraYaw), 0, Math.cos(state.cameraYaw));
  const right = new THREE.Vector3(Math.cos(state.cameraYaw), 0, -Math.sin(state.cameraYaw));
  const moveDir = new THREE.Vector3();
  moveDir.addScaledVector(forward, moveY);
  moveDir.addScaledVector(right, moveX);

  const lenSq = moveDir.lengthSq();
  if (lenSq > 0) {
    moveDir.normalize();
    player.rotation.y = Math.atan2(moveDir.x, moveDir.z);
    player.position.addScaledVector(moveDir, delta * 5.8);
  }

  player.position.x = clamp(player.position.x, -30, 30);
  player.position.z = clamp(player.position.z, -30, 30);
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
        enemy.position.set(player.position.x + Math.cos(angle) * radius, 0, player.position.z + Math.sin(angle) * radius);
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

function updateCamera() {
  const targetPos = player.position.clone();
  const offset = new THREE.Vector3(0, 2.7 + state.cameraPitch * 2.2, -5.7);
  offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), state.cameraYaw);
  const cameraPos = targetPos.clone().add(offset);
  camera.position.lerp(cameraPos, 0.12);

  const lookTarget = targetPos.clone().add(new THREE.Vector3(0, 1.2, 0));
  const lookDir = new THREE.Vector3(Math.sin(state.cameraYaw), state.cameraPitch, Math.cos(state.cameraYaw));
  lookTarget.add(lookDir.multiplyScalar(6));
  camera.lookAt(lookTarget);
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
    updateEnemies(delta);
    updateCampfire(delta);
    updateNight(delta);
    updateHud();
    updateOnGameOver();
  }

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
