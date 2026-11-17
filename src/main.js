import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const canvas = document.getElementById('game');
const nightText = document.getElementById('nightText');
const phaseIcon = document.getElementById('phaseIcon');
const healthText = document.getElementById('healthText');
const healthFill = document.getElementById('healthFill');
const statusText = document.getElementById('statusText');
const joystickZone = document.getElementById('joystickZone');
const joystickBase = document.getElementById('joystickBase');
const joystickKnob = document.getElementById('joystickKnob');
const lookZone = document.getElementById('lookZone');
const attackBtn = document.getElementById('attackBtn');
const attackLabel = document.getElementById('attackLabel');
const jumpBtn = document.getElementById('jumpBtn');
const interactBtn = document.getElementById('interactBtn');
const interactLabel = document.getElementById('interactLabel');
const dropBtn = document.getElementById('dropBtn');
const woodText = document.getElementById('woodText');
const saplingText = document.getElementById('saplingText');
const berryText = document.getElementById('berryText');
const fuelText = document.getElementById('fuelText');
const fuelFill = document.getElementById('fuelFill');
const hungerText = document.getElementById('hungerText');
const hungerFill = document.getElementById('hungerFill');
const fireWarning = document.getElementById('fireWarning');
const deathBanner = document.getElementById('deathBanner');
const toastEl = document.getElementById('toast');
const darkness = document.getElementById('darkness');
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
const axeSlot = document.getElementById('axeSlot');
const backpackSlot = document.getElementById('backpackSlot');
const backpackBadge = document.getElementById('backpackBadge');
const inventoryPanel = document.getElementById('inventoryPanel');
const inventoryList = document.getElementById('inventoryList');
const inventoryCapacity = document.getElementById('inventoryCapacity');
const closeInventoryBtn = document.getElementById('closeInventoryBtn');
const unequipBtn = document.getElementById('unequipBtn');

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
  new THREE.SphereGeometry(0.22, 10, 10),
  new THREE.MeshStandardMaterial({
    color: 0xff8a2a,
    emissive: 0xff6b18,
    emissiveIntensity: 1.8,
    roughness: 0.55,
    metalness: 0.1
  })
);
fireCore.position.y = 0.55;
fireCore.castShadow = false;
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
  tree.userData.trunk = trunk;
  tree.userData.foliage = foliage;
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

// Only a share of the forest can be chopped. The closest trees are always
// choppable so there is wood within a short walk of the campfire.
const choppableTrees = new Set(
  [...treeData]
    .sort((a, b) => Math.hypot(a.position.x, a.position.z) - Math.hypot(b.position.x, b.position.z))
    .slice(0, 8)
);
for (let i = 0; i < treeData.length; i += 4) choppableTrees.add(treeData[i]);
for (const tree of choppableTrees) {
  const data = tree.userData;
  data.choppable = true;
  data.baseChoppable = true;
  data.hits = 3;
  data.hitsMax = 3;
  data.shake = 0;
  data.highlight = 0;
  data.trunk.material = data.trunk.material.clone();
  data.trunk.material.emissive = new THREE.Color(0xffb15a);
  data.trunk.material.emissiveIntensity = 0;
}

const saplingStemMaterial = new THREE.MeshStandardMaterial({ color: 0x6b4424, roughness: 0.9 });
const saplingLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x2f7a45, roughness: 0.92 });

function createSaplingMesh(scale = 1) {
  const sapling = new THREE.Group();
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 0.5, 5), saplingStemMaterial);
  stem.position.y = 0.25;
  stem.castShadow = true;
  sapling.add(stem);

  const lower = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.55, 6), saplingLeafMaterial);
  lower.position.y = 0.55;
  lower.castShadow = true;
  sapling.add(lower);

  const upper = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.42, 6), saplingLeafMaterial);
  upper.position.y = 0.84;
  upper.castShadow = true;
  sapling.add(upper);

  sapling.scale.setScalar(scale);
  return sapling;
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
const leftHand = makeAvatarPart(0.2, 0.16, 0.26, skinMaterial, 0.05);
leftHand.position.set(0, -0.8, 0.01);
leftArm.add(leftHand);

const rightArm = new THREE.Group();
rightArm.position.set(0.54, 1.64, 0);
avatar.add(rightArm);
const rightArmMesh = makeAvatarPart(0.22, 0.78, 0.3, skinMaterial, 0.06);
rightArmMesh.position.y = -0.39;
rightArm.add(rightArmMesh);
const rightHand = makeAvatarPart(0.2, 0.16, 0.26, skinMaterial, 0.05);
rightHand.position.set(0, -0.8, 0.01);
rightArm.add(rightHand);

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

// A low-poly axe held in the right hand. It rides with the arm swing so the
// whole character animates the strike instead of the axe floating separately.
const axe = new THREE.Group();
axe.position.set(0.12, -0.62, 0.1);
axe.rotation.set(0.12, 0.08, -0.42);
rightArm.add(axe);

const axeHandle = new THREE.Mesh(
  new THREE.CylinderGeometry(0.038, 0.048, 0.95, 6),
  new THREE.MeshStandardMaterial({ color: 0x7b4a27, roughness: 0.82, metalness: 0.02 })
);
axeHandle.position.y = 0.06;
axeHandle.castShadow = true;
axe.add(axeHandle);

const axeGrip = new THREE.Mesh(
  new THREE.CylinderGeometry(0.052, 0.052, 0.22, 6),
  new THREE.MeshStandardMaterial({ color: 0x3b2413, roughness: 0.95 })
);
axeGrip.position.y = -0.3;
axeGrip.castShadow = true;
axe.add(axeGrip);

const axeHead = new THREE.Mesh(
  new THREE.BoxGeometry(0.34, 0.2, 0.1),
  new THREE.MeshStandardMaterial({
    color: 0xb9c6ce,
    emissive: 0x24313a,
    emissiveIntensity: 0.4,
    roughness: 0.3,
    metalness: 0.65
  })
);
axeHead.position.set(0.11, 0.42, 0);
axeHead.castShadow = true;
axe.add(axeHead);

const axeBlade = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.3, 0.07),
  new THREE.MeshStandardMaterial({
    color: 0xe8f1f5,
    emissive: 0x2f3f49,
    emissiveIntensity: 0.45,
    roughness: 0.24,
    metalness: 0.55
  })
);
axeBlade.position.set(0.27, 0.42, 0);
axeBlade.castShadow = true;
axe.add(axeBlade);
axe.visible = false;

const backpackMat = new THREE.MeshStandardMaterial({ color: 0x7c4a2a, roughness: 0.78, metalness: 0.02 });
const backpackTrimMat = new THREE.MeshStandardMaterial({ color: 0x4e2c18, roughness: 0.86 });
const backpackBuckleMat = new THREE.MeshStandardMaterial({ color: 0xe0b260, roughness: 0.42, metalness: 0.5 });

function createBackpackModel(scale = 1) {
  const bag = new THREE.Group();

  const body = new THREE.Mesh(new RoundedBoxGeometry(0.38, 0.44, 0.24, 3, 0.055), backpackMat);
  body.castShadow = true;
  body.receiveShadow = true;
  bag.add(body);

  const flap = new THREE.Mesh(new RoundedBoxGeometry(0.37, 0.2, 0.25, 2, 0.04), backpackTrimMat);
  flap.position.set(0, 0.16, 0.004);
  flap.rotation.x = -0.06;
  flap.castShadow = true;
  bag.add(flap);

  const pocket = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.13, 0.06, 2, 0.025), backpackTrimMat);
  pocket.position.set(0, -0.1, 0.145);
  pocket.castShadow = true;
  bag.add(pocket);

  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.06, 0.035), backpackBuckleMat);
  buckle.position.set(0, 0.09, 0.135);
  bag.add(buckle);

  for (const side of [-1, 1]) {
    const strap = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.41, 0.035), backpackTrimMat);
    strap.position.set(side * 0.12, 0, -0.145);
    strap.castShadow = true;
    bag.add(strap);

    const sidePocket = new THREE.Mesh(new RoundedBoxGeometry(0.055, 0.16, 0.15, 2, 0.02), backpackTrimMat);
    sidePocket.position.set(side * 0.215, -0.08, 0);
    bag.add(sidePocket);
  }

  bag.scale.setScalar(scale);
  return bag;
}

const handBackpack = createBackpackModel(1);
handBackpack.position.set(0.09, -0.96, 0.2);
handBackpack.rotation.set(0.08, Math.PI - 0.25, 0.05);
handBackpack.visible = false;
rightArm.add(handBackpack);

const AXE_BASE_Y = axe.position.y;
const BACKPACK_BASE_Y = handBackpack.position.y;

const playerGlow = new THREE.PointLight(0xffc071, 0.8, 14, 2);
playerGlow.position.set(0, 1.9, 0);
player.add(playerGlow);

const strikeArc = new THREE.Mesh(
  new THREE.TorusGeometry(1.05, 0.055, 5, 24),
  new THREE.MeshBasicMaterial({ color: 0xffe0a0, transparent: true, opacity: 0.8 })
);
strikeArc.rotation.x = Math.PI / 2;
strikeArc.position.set(0, 0.9, 0.85);
strikeArc.visible = false;
player.add(strikeArc);

const hitEffect = new THREE.Mesh(
  new THREE.IcosahedronGeometry(0.42, 1),
  new THREE.MeshBasicMaterial({
    color: 0xffd27a,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    wireframe: true
  })
);
hitEffect.visible = false;
scene.add(hitEffect);

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

const plantedSaplings = [];
const groundItems = [];
const carriedItems = [];
const berryBushes = [];
const logGeometry = new THREE.CylinderGeometry(0.15, 0.17, 0.72, 7);
const logMaterial = new THREE.MeshStandardMaterial({
  color: 0x9a6338,
  emissive: 0x2b1609,
  emissiveIntensity: 0.45,
  roughness: 0.85,
  metalness: 0.02
});

const berryMaterial = new THREE.MeshStandardMaterial({
  color: 0xd83a4b,
  emissive: 0x3d0509,
  emissiveIntensity: 0.45,
  roughness: 0.62
});
const berryLeafMaterial = new THREE.MeshStandardMaterial({ color: 0x3f9a53, roughness: 0.88 });
const berryGeometry = new THREE.SphereGeometry(0.09, 6, 5);
const bushMaterial = new THREE.MeshStandardMaterial({ color: 0x24523a, roughness: 0.98 });
const bushDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x183b29, roughness: 0.98 });

function createBerryMesh(scale = 1) {
  const berry = new THREE.Group();
  const offsets = [
    [0, 0.1, 0],
    [0.1, 0.04, 0.03],
    [-0.09, 0.03, 0.05],
    [0.02, 0.02, -0.09]
  ];
  for (const [ox, oy, oz] of offsets) {
    const piece = new THREE.Mesh(berryGeometry, berryMaterial);
    piece.position.set(ox, oy, oz);
    piece.castShadow = true;
    berry.add(piece);
  }
  const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.16, 5), berryLeafMaterial);
  leaf.position.set(0.03, 0.2, -0.02);
  leaf.rotation.z = 0.4;
  leaf.castShadow = true;
  berry.add(leaf);
  berry.scale.setScalar(scale);
  return berry;
}

function addBerryBush(x, z) {
  const bush = new THREE.Group();
  const base = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 0), bushMaterial);
  base.position.y = 0.34;
  base.scale.set(1.1, 0.7, 1.05);
  base.castShadow = true;
  base.receiveShadow = true;
  bush.add(base);

  const top = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), bushDarkMaterial);
  top.position.set(0.26, 0.54, -0.12);
  top.scale.set(1, 0.75, 1);
  top.castShadow = true;
  bush.add(top);

  bush.position.set(x, getGroundHeight(x, z), z);
  bush.rotation.y = Math.random() * Math.PI * 2;
  world.add(bush);
  berryBushes.push({ x, z, mesh: bush });
}

for (let i = 0; i < 15; i += 1) {
  let placed = false;
  for (let attempt = 0; attempt < 24 && !placed; attempt += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 8.5 + Math.random() * 22;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (Math.hypot(x, z) < 8) continue;
    if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 2.1)) continue;
    if (berryBushes.some((bush) => Math.hypot(bush.x - x, bush.z - z) < 3.2)) continue;
    addBerryBush(x, z);
    placed = true;
  }
}

const FIRE_FEED_RANGE = 3.8;
const TREE_INTERACT_RANGE = 2.5;
const FUEL_DRAIN_PER_SECOND = 0.8;
const LOG_FUEL_VALUE = 25;
const TREE_SHAKE_TIME = 0.36;
const TREE_FALL_TIME = 1.15;
const SAPLING_GROW_TIME = 45;
const ATTACK_DURATION = 0.34;
const FIRE_SCARE_RADIUS = 6;
const FIRE_STRONG_FUEL = 50;
const DAY_LENGTH = 180;
const NIGHT_LENGTH = 120;
const CYCLE_LENGTH = DAY_LENGTH + NIGHT_LENGTH;
const DUSK_LENGTH = 16;
const DAWN_LENGTH = 14;
const MAX_ENEMIES = 30;
const PICKUP_RANGE = 3.35;
const CARRY_LIMIT = 3;
const BACKPACK_CAPACITY = 20;
const HUNGER_DRAIN_PER_SECOND = 0.42;
const BERRY_HUNGER = 18;
const EQUIP_TIME = 0.3;
const STACK_LIMIT = 20;
const ITEM_NAMES = { wood: 'Wood log', sapling: 'Sapling', berry: 'Berry' };
const FUEL_VALUES = { wood: LOG_FUEL_VALUE, sapling: 12, berry: 5 };
let interactPrompt = 'INTERACT';
let toastTimer = 0;
let lastInventorySignature = '';


function getCampfireDistance() {
  return Math.hypot(
    player.position.x - campfire.position.x,
    player.position.z - campfire.position.z
  );
}

function updateInteractionTarget() {
  state.fireInReach = getCampfireDistance() <= FIRE_FEED_RANGE;
  state.targetTree = null;
  if (!state.started || state.gameOver) return;

  let closest = TREE_INTERACT_RANGE * TREE_INTERACT_RANGE;
  for (const tree of treeData) {
    if (!tree.userData.choppable || tree.userData.falling || !tree.visible) continue;
    const dx = player.position.x - tree.position.x;
    const dz = player.position.z - tree.position.z;
    const distanceSq = dx * dx + dz * dz;
    if (distanceSq < closest) {
      closest = distanceSq;
      state.targetTree = tree;
    }
  }
}

function updateInteractPrompt() {
  let label = 'INTERACT';
  if (state.started && !state.gameOver && !state.falling) {
    const nearbyItem = findNearestGroundItem(PICKUP_RANGE);
    const fuelLow = state.fuel < 99.5;
    if (state.fireInReach && carriedItems.length > 0 && fuelLow) {
      label = 'THROW IN FIRE';
    } else if (nearbyItem) {
      label = 'PICK UP';
    } else if (carriedItems.some((item) => item.type === 'sapling')) {
      label = 'PLANT SAPLING';
    } else if (state.fireInReach && backpackCount() > 0) {
      label = fuelLow ? 'FEED FIRE' : 'FIRE FULL';
    } else if (state.equippedTool === 'axe' && state.targetTree) {
      label = 'CHOP';
    } else if (state.fireInReach && carriedItems.length > 0) {
      label = 'FIRE FULL';
    }
  }

  if (label !== interactPrompt) {
    interactPrompt = label;
    interactLabel.textContent = label;
    interactBtn.classList.toggle('ready', label !== 'INTERACT' && label !== 'FIRE FULL');
  }
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('visible');
  toastTimer = 1.5;
}

function makeGroundItemMesh(type) {
  let mesh;
  if (type === 'wood') {
    mesh = new THREE.Mesh(logGeometry, logMaterial);
    mesh.rotation.set(0, Math.random() * Math.PI * 2, Math.PI / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  } else if (type === 'sapling') {
    mesh = createSaplingMesh(0.72);
    mesh.rotation.y = Math.random() * Math.PI * 2;
  } else {
    mesh = createBerryMesh(1);
    mesh.rotation.y = Math.random() * Math.PI * 2;
  }
  return mesh;
}

function spawnGroundItem(type, x, z, options = {}) {
  const mesh = makeGroundItemMesh(type);
  const groundY = getGroundHeight(x, z);
  const restY = type === 'wood' ? 0.17 : type === 'berry' ? 0.14 : 0.02;
  const baseScale = type === 'sapling' ? 0.72 : 1;
  const startY = options.startY ?? (groundY + restY + 0.45);

  mesh.position.set(x, startY, z);
  world.add(mesh);

  const item = {
    type,
    mesh,
    x,
    z,
    groundY,
    restY,
    baseScale,
    velocityY: options.velocityY ?? (type === 'wood' ? 2.2 : 2.6),
    landed: false,
    pickupDelay: options.pickupDelay ?? 0.35,
    carried: false,
    popping: 0,
    popDuration: 0.24
  };
  mesh.traverse((part) => {
    part.userData.itemRef = item;
  });
  groundItems.push(item);

  if (groundItems.length > 80) {
    for (let i = 0; i < groundItems.length; i += 1) {
      const old = groundItems[i];
      if (!old.carried && old.popping <= 0) {
        removeGroundItem(old);
        break;
      }
    }
  }

  return item;
}

function removeGroundItem(item) {
  const itemIndex = groundItems.indexOf(item);
  if (itemIndex >= 0) groundItems.splice(itemIndex, 1);
  const carriedIndex = carriedItems.indexOf(item);
  if (carriedIndex >= 0) carriedItems.splice(carriedIndex, 1);
  world.remove(item.mesh);
}

function popGroundItem(item) {
  if (!item || item.popping > 0) return;
  const carriedIndex = carriedItems.indexOf(item);
  if (carriedIndex >= 0) carriedItems.splice(carriedIndex, 1);
  item.carried = false;
  item.popping = item.popDuration;
}

function dropLog(tree, index = 0) {
  const dx = player.position.x - tree.position.x;
  const dz = player.position.z - tree.position.z;
  const baseAngle = Math.atan2(dx, dz);
  const angle = baseAngle + (index - 1) * 0.62 + (Math.random() - 0.5) * 0.32;
  const offset = tree.userData.scale * 0.35 + 0.7 + Math.random() * 0.45;
  spawnGroundItem(
    'wood',
    tree.position.x + Math.sin(angle) * offset,
    tree.position.z + Math.cos(angle) * offset,
    { startY: tree.position.y + 0.9, velocityY: 2.2 + Math.random() * 0.5, pickupDelay: 0.4 }
  );
}

function dropSapling(tree) {
  const angle = Math.atan2(
    player.position.x - tree.position.x,
    player.position.z - tree.position.z
  ) + (Math.random() - 0.5) * 1.2;
  const offset = tree.userData.scale * 0.3 + 0.95;
  spawnGroundItem(
    'sapling',
    tree.position.x + Math.sin(angle) * offset,
    tree.position.z + Math.cos(angle) * offset,
    { startY: tree.position.y + 0.8, velocityY: 2.6, pickupDelay: 0.45 }
  );
}

function regrowBerries() {
  for (const bush of berryBushes) {
    const existing = groundItems.filter((item) => (
      item.type === 'berry'
      && !item.carried
      && item.popping <= 0
      && Math.hypot(item.x - bush.x, item.z - bush.z) < 2.1
    )).length;
    for (let i = existing; i < 3; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.35 + Math.random() * 0.45;
      const x = bush.x + Math.cos(angle) * radius;
      const z = bush.z + Math.sin(angle) * radius;
      spawnGroundItem('berry', x, z, {
        startY: getGroundHeight(x, z) + 0.55,
        velocityY: 1.8,
        pickupDelay: 0.6
      });
    }
  }
}

function resetGroundItems() {
  for (const item of groundItems) world.remove(item.mesh);
  groundItems.length = 0;
  carriedItems.length = 0;
  regrowBerries();
}

function findNearestGroundItem(range, filter = null) {
  let closest = range * range;
  let found = null;
  for (const item of groundItems) {
    if (item.carried || item.popping > 0) continue;
    if (filter && !filter(item)) continue;
    const dx = player.position.x - item.x;
    const dz = player.position.z - item.z;
    const distanceSq = dx * dx + dz * dz;
    if (distanceSq < closest) {
      closest = distanceSq;
      found = item;
    }
  }
  return found;
}

function backpackCount() {
  return state.backpack.wood + state.backpack.sapling + state.backpack.berry;
}

function ownedCount(type) {
  return state.backpack[type] + carriedItems.filter((item) => item.type === type).length;
}

function isBackpackEquipped() {
  return state.equippedTool === 'backpack';
}

function addItemToBackpack(item) {
  if (!item || item.popping > 0) return false;
  if (backpackCount() >= BACKPACK_CAPACITY) {
    showToast('Backpack is full');
    return false;
  }
  state.backpack[item.type] += 1;
  popGroundItem(item);
  updateHud();
  backpackSlot.classList.remove('pop');
  void backpackSlot.offsetWidth;
  backpackSlot.classList.add('pop');
  showToast(`+1 ${ITEM_NAMES[item.type]}`);
  return true;
}

function pickUpItem(item) {
  if (!item || item.carried || item.popping > 0) return false;
  if (isBackpackEquipped()) {
    return addItemToBackpack(item);
  }
  if (carriedItems.length >= CARRY_LIMIT) {
    showToast('Hands full - 3 items max');
    return false;
  }
  item.carried = true;
  item.landed = true;
  item.pickupDelay = 0;
  carriedItems.push(item);
  updateHud();
  showToast(`Picked up ${ITEM_NAMES[item.type]}`);
  return true;
}

function dropCarriedItems() {
  if (!state.started || state.gameOver || state.falling || state.dropCooldown > 0) return;

  if (carriedItems.length > 0) {
    const items = carriedItems.splice(0, carriedItems.length);
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      item.carried = false;
      const angle = player.rotation.y + (i - (items.length - 1) / 2) * 0.5;
      const distance = 1.15 + i * 0.15;
      const x = player.position.x + Math.sin(angle) * distance;
      const z = player.position.z + Math.cos(angle) * distance;
      item.x = x;
      item.z = z;
      item.groundY = getGroundHeight(x, z);
      item.velocityY = 1.3;
      item.landed = false;
      item.pickupDelay = 0.3;
      item.mesh.position.set(x, player.position.y + 0.8, z);
    }
    state.dropCooldown = 0.35;
    updateHud();
    showToast(items.length === 1 ? 'Dropped item' : `Dropped ${items.length} items`);
    return;
  }

  const type = ['wood', 'sapling', 'berry'].find((candidate) => state.backpack[candidate] > 0);
  if (!type) {
    showToast('Nothing to drop');
    return;
  }

  state.backpack[type] -= 1;
  const x = player.position.x + Math.sin(player.rotation.y) * 1.35;
  const z = player.position.z + Math.cos(player.rotation.y) * 1.35;
  spawnGroundItem(type, x, z, { velocityY: 2.2, pickupDelay: 0.35 });
  state.dropCooldown = 0.35;
  updateHud();
  showToast(`Took out ${ITEM_NAMES[type].toLowerCase()}`);
}

function throwCarriedIntoFire() {
  if (carriedItems.length === 0) return;
  const items = carriedItems.slice();
  let fuel = 0;
  for (const item of items) {
    fuel += FUEL_VALUES[item.type] || 5;
    popGroundItem(item);
  }
  state.fuel = clamp(state.fuel + fuel, 0, 100);
  state.fireOut = false;
  state.fireFlare = 1;
  state.interactCooldown = 0.45;
  updateHud();
  showToast(`Fire +${Math.round(fuel)}%`);
}

function feedFireFromBackpack() {
  const type = ['wood', 'sapling', 'berry'].find((candidate) => state.backpack[candidate] > 0);
  if (!type) return;
  state.backpack[type] -= 1;
  state.fuel = clamp(state.fuel + (FUEL_VALUES[type] || 5), 0, 100);
  state.fireOut = false;
  state.fireFlare = 1;
  state.interactCooldown = 0.4;
  updateHud();
  showToast(`Fed the fire with ${ITEM_NAMES[type].toLowerCase()}`);
}

function fellTree(tree) {
  const data = tree.userData;
  const dx = tree.position.x - player.position.x;
  const dz = tree.position.z - player.position.z;
  const length = Math.hypot(dx, dz) || 1;
  const dirX = dx / length;
  const dirZ = dz / length;

  data.choppable = false;
  data.falling = true;
  data.fallProgress = 0;
  data.lootDropped = false;
  data.fallAxis = new THREE.Vector3(dirZ, 0, -dirX).normalize();
  data.hits = data.hitsMax;
  data.shake = 0;
}

function chopTree(tree) {
  const data = tree.userData;
  data.shake = TREE_SHAKE_TIME;
  state.chopTimer = 0.3;
  state.interactCooldown = 0.34;
  player.rotation.y = Math.atan2(
    tree.position.x - player.position.x,
    tree.position.z - player.position.z
  );

  data.hits -= 1;
  if (data.hits <= 0) fellTree(tree);
}

function interact() {
  if (!state.started || state.gameOver || state.falling || state.interactCooldown > 0) return;

  if (state.fireInReach && carriedItems.length > 0 && state.fuel < 99.5) {
    throwCarriedIntoFire();
    return;
  }

  const nearbyItem = findNearestGroundItem(PICKUP_RANGE);
  if (nearbyItem) {
    if (pickUpItem(nearbyItem)) state.interactCooldown = 0.32;
    return;
  }

  if (carriedItems.some((item) => item.type === 'sapling')) {
    plantSapling();
    return;
  }

  if (state.fireInReach && backpackCount() > 0 && state.fuel < 99.5) {
    feedFireFromBackpack();
    return;
  }

  if (state.equippedTool === 'axe' && state.targetTree) {
    chopTree(state.targetTree);
    return;
  }

  if (state.fireInReach && state.fuel >= 99.5 && (carriedItems.length > 0 || backpackCount() > 0)) {
    showToast('The fire is already full');
  }
}

function updateGroundItems(delta) {
  const now = performance.now();

  for (let i = groundItems.length - 1; i >= 0; i -= 1) {
    const item = groundItems[i];

    if (item.popping > 0) {
      item.popping = Math.max(0, item.popping - delta);
      const progress = 1 - item.popping / item.popDuration;
      item.mesh.scale.setScalar(item.baseScale * (1 + progress * 1.1));
      item.mesh.position.y += delta * 1.35;
      if (item.popping <= 0) removeGroundItem(item);
      continue;
    }

    if (item.carried) {
      const index = carriedItems.indexOf(item);
      const spread = (index - (carriedItems.length - 1) / 2) * 0.62;
      const angle = player.rotation.y + Math.PI + spread + Math.sin(now * 0.0012) * 0.05;
      const distance = 0.78;
      const targetX = player.position.x + Math.sin(angle) * distance;
      const targetZ = player.position.z + Math.cos(angle) * distance;
      const targetY = player.position.y + 1.62 + index * 0.16
        + Math.sin(now * 0.003 + index) * 0.05;
      const damping = 1 - Math.exp(-8 * delta);
      item.mesh.position.x += (targetX - item.mesh.position.x) * damping;
      item.mesh.position.y += (targetY - item.mesh.position.y) * damping;
      item.mesh.position.z += (targetZ - item.mesh.position.z) * damping;
      item.mesh.rotation.y += delta * 1.25;
      continue;
    }

    item.pickupDelay = Math.max(0, item.pickupDelay - delta);

    if (!item.landed) {
      item.velocityY -= 13 * delta;
      item.mesh.position.y += item.velocityY * delta;
      if (item.type === 'wood') item.mesh.rotation.y += delta * 3.2;
      if (item.type === 'sapling') item.mesh.rotation.y += delta * 2.4;
      const restY = item.groundY + item.restY;
      if (item.mesh.position.y <= restY) {
        item.mesh.position.y = restY;
        item.landed = true;
      }
    } else {
      item.mesh.position.y = item.groundY + item.restY
        + Math.abs(Math.sin(now * 0.0028 + item.mesh.id)) * (item.type === 'berry' ? 0.025 : 0.018);
      if (item.type === 'sapling') item.mesh.rotation.y += delta * 0.4;
      if (item.type === 'berry') item.mesh.rotation.y += delta * 0.35;
    }
  }
}


function markChoppable(tree) {
  const data = tree.userData;
  data.choppable = true;
  data.baseChoppable = true;
  data.falling = false;
  data.fallProgress = 0;
  data.lootDropped = false;
  data.hits = 3;
  data.hitsMax = 3;
  data.shake = 0;
  data.highlight = 0;
  tree.visible = true;
  tree.quaternion.identity();
  data.trunk.material = data.trunk.material.clone();
  data.trunk.material.emissive = new THREE.Color(0xffb15a);
  data.trunk.material.emissiveIntensity = 0;
}

function plantSapling() {
  if (!state.started || state.gameOver || state.falling || state.plantCooldown > 0) return;
  const carriedIndex = carriedItems.findIndex((item) => item.type === 'sapling');
  if (carriedIndex < 0) {
    showToast('Carry a sapling to plant it');
    return;
  }

  const forward = new THREE.Vector3(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));
  const x = player.position.x + forward.x * 1.75;
  const z = player.position.z + forward.z * 1.75;
  if (Math.hypot(x - campfire.position.x, z - campfire.position.z) < 1.6) {
    showToast('Too close to the campfire');
    return;
  }

  const item = carriedItems[carriedIndex];
  removeGroundItem(item);
  state.plantCooldown = 0.45;
  const mesh = createSaplingMesh(0.35);
  mesh.position.set(x, getGroundHeight(x, z), z);
  mesh.rotation.y = Math.random() * Math.PI * 2;
  world.add(mesh);
  plantedSaplings.push({
    mesh,
    x,
    z,
    growth: 0,
    sway: Math.random() * Math.PI * 2
  });
  updateHud();
  showToast('Planted a sapling');
}

function updatePlantedSaplings(delta) {
  for (let i = plantedSaplings.length - 1; i >= 0; i -= 1) {
    const sapling = plantedSaplings[i];
    sapling.growth += delta;
    const ratio = clamp(sapling.growth / SAPLING_GROW_TIME, 0, 1);
    const scale = 0.35 + ratio * ratio * 0.95;
    sapling.mesh.scale.setScalar(scale);
    sapling.mesh.rotation.z = Math.sin(performance.now() * 0.0016 + sapling.sway) * 0.035;

    if (ratio >= 1) {
      world.remove(sapling.mesh);
      plantedSaplings.splice(i, 1);
      const tree = createTree(sapling.x, sapling.z, 0.9 + Math.random() * 0.35);
      tree.userData.planted = true;
      markChoppable(tree);
    }
  }
}

function updateTrees(delta) {
  const t = performance.now() * 0.001;
  const damping = 1 - Math.exp(-10 * delta);
  for (const tree of treeData) {
    if (!tree.visible) continue;
    const data = tree.userData;

    if (data.falling) {
      data.fallProgress = Math.min(1, data.fallProgress + delta / TREE_FALL_TIME);
      const angle = data.fallProgress * data.fallProgress * Math.PI * 0.5;
      tree.quaternion.setFromAxisAngle(data.fallAxis, angle);
      if (data.fallProgress >= 1 && !data.lootDropped) {
        data.lootDropped = true;
        for (let i = 0; i < 3; i += 1) dropLog(tree, i);
        dropSapling(tree);
      }
      if (data.fallProgress >= 1) tree.visible = false;
      continue;
    }

    if (!data.choppable) continue;
    const highlighted = tree === state.targetTree ? 1 : 0;
    data.highlight += (highlighted - data.highlight) * damping;

    const material = data.trunk.material;
    material.emissiveIntensity = data.highlight * (0.45 + Math.sin(t * 7) * 0.16);

    if (data.shake > 0) {
      data.shake = Math.max(0, data.shake - delta);
      const strength = data.shake / TREE_SHAKE_TIME;
      tree.rotation.z = Math.sin(t * 55) * 0.055 * strength;
      tree.rotation.x = Math.cos(t * 43) * 0.03 * strength;
    } else if (tree.rotation.z !== 0 || tree.rotation.x !== 0) {
      tree.rotation.z = 0;
      tree.rotation.x = 0;
    }
  }
}

const enemies = [];

function makeEnemy() {
  const enemy = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x10151d,
    roughness: 0.96,
    metalness: 0.04,
    flatShading: true
  });
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff7a33 });

  const bodyGroup = new THREE.Group();
  enemy.add(bodyGroup);

  const torso = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 0), bodyMat);
  torso.position.y = 1.12;
  torso.scale.set(1.05, 1.2, 0.72);
  torso.castShadow = true;
  bodyGroup.add(torso);

  const hips = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.6, 5), bodyMat);
  hips.position.y = 0.68;
  hips.rotation.y = Math.PI / 5;
  hips.castShadow = true;
  bodyGroup.add(hips);

  const head = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), bodyMat);
  head.position.y = 1.82;
  head.scale.set(1, 1.12, 0.9);
  head.castShadow = true;
  bodyGroup.add(head);

  const hornGeometry = new THREE.ConeGeometry(0.055, 0.28, 4);
  const leftHorn = new THREE.Mesh(hornGeometry, bodyMat);
  leftHorn.position.set(-0.17, 2.05, 0);
  leftHorn.rotation.z = 0.32;
  leftHorn.castShadow = true;
  bodyGroup.add(leftHorn);
  const rightHorn = new THREE.Mesh(hornGeometry, bodyMat);
  rightHorn.position.set(0.17, 2.05, 0);
  rightHorn.rotation.z = -0.32;
  rightHorn.castShadow = true;
  bodyGroup.add(rightHorn);

  const eyeGeometry = new THREE.SphereGeometry(0.055, 6, 5);
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMat);
  leftEye.position.set(-0.11, 1.86, 0.255);
  bodyGroup.add(leftEye);
  const rightEye = new THREE.Mesh(eyeGeometry, eyeMat);
  rightEye.position.set(0.11, 1.86, 0.255);
  bodyGroup.add(rightEye);

  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.5, 1.48, 0);
    const armMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.11, 0.78, 5), bodyMat);
    armMesh.position.y = -0.38;
    armMesh.castShadow = true;
    arm.add(armMesh);
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.24, 4), bodyMat);
    claw.position.y = -0.82;
    claw.rotation.x = Math.PI;
    claw.castShadow = true;
    arm.add(claw);
    bodyGroup.add(arm);
    arms.push(arm);
  }

  const legs = [];
  for (const side of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.18, 0.72, 0);
    const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.7, 5), bodyMat);
    legMesh.position.y = -0.35;
    legMesh.castShadow = true;
    leg.add(legMesh);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.1, 0.27), bodyMat);
    foot.position.set(0, -0.73, 0.07);
    foot.castShadow = true;
    leg.add(foot);
    enemy.add(leg);
    legs.push(leg);
  }

  enemy.position.set(0, -40, 0);
  enemy.visible = false;
  enemy.userData = {
    bodyMat,
    eyeMat,
    bodyGroup,
    arms,
    legs,
    speed: 1.2,
    damage: 7,
    health: 2,
    maxHealth: 2,
    hitTimer: 0,
    attackCooldown: 0,
    phase: Math.random() * Math.PI * 2,
    knockback: new THREE.Vector3(),
    fading: false,
    fade: 1,
    targetCamp: false,
    circleDir: Math.random() < 0.5 ? 1 : -1
  };
  scene.add(enemy);
  enemies.push(enemy);
  return enemy;
}

for (let i = 0; i < MAX_ENEMIES; i += 1) makeEnemy();

function resetEnemyAppearance(enemy) {
  const data = enemy.userData;
  data.fading = false;
  data.fade = 1;
  data.hitTimer = 0;
  data.attackCooldown = 0.6 + Math.random() * 0.6;
  data.knockback.set(0, 0, 0);
  data.bodyMat.transparent = false;
  data.bodyMat.opacity = 1;
  data.bodyMat.emissive.setHex(0x000000);
  data.bodyMat.emissiveIntensity = 1;
  data.eyeMat.transparent = false;
  data.eyeMat.opacity = 1;
  enemy.scale.setScalar(1);
  enemy.visible = true;
}

// A warm pool of light and a trail of smoke make the home point visible through the fog.
const fireFlame = new THREE.Mesh(
  new THREE.ConeGeometry(0.36, 1.5, 7),
  new THREE.MeshBasicMaterial({
    color: 0xff7b22,
    transparent: true,
    opacity: 0.58,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
);
fireFlame.position.set(0, 1.15, 0);
campfire.add(fireFlame);

const fireFlameInner = new THREE.Mesh(
  new THREE.ConeGeometry(0.2, 1.05, 6),
  new THREE.MeshBasicMaterial({
    color: 0xffe28a,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
);
fireFlameInner.position.set(0, 0.92, 0);
campfire.add(fireFlameInner);

// A small pool of embers that drift up from the flame.
const SPARK_COUNT = 30;
const sparkPositions = new Float32Array(SPARK_COUNT * 3);
const sparkVelocities = new Float32Array(SPARK_COUNT * 3);
const sparkLife = new Float32Array(SPARK_COUNT);
const sparkMaxLife = new Float32Array(SPARK_COUNT);
const sparkGeometry = new THREE.BufferGeometry();
const sparkAttribute = new THREE.BufferAttribute(sparkPositions, 3);
sparkGeometry.setAttribute('position', sparkAttribute);
const sparkMaterial = new THREE.PointsMaterial({
  color: 0xffc36b,
  size: 0.065,
  transparent: true,
  opacity: 0.9,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true
});
const fireSparks = new THREE.Points(sparkGeometry, sparkMaterial);
fireSparks.frustumCulled = false;
campfire.add(fireSparks);

function resetSpark(index) {
  const i3 = index * 3;
  sparkPositions[i3] = (Math.random() - 0.5) * 0.38;
  sparkPositions[i3 + 1] = 0.9 + Math.random() * 0.3;
  sparkPositions[i3 + 2] = (Math.random() - 0.5) * 0.38;
  sparkVelocities[i3] = (Math.random() - 0.5) * 0.45;
  sparkVelocities[i3 + 1] = 0.75 + Math.random() * 1.25;
  sparkVelocities[i3 + 2] = (Math.random() - 0.5) * 0.45;
  sparkMaxLife[index] = 0.7 + Math.random() * 0.9;
  sparkLife[index] = sparkMaxLife[index];
}

for (let i = 0; i < SPARK_COUNT; i += 1) resetSpark(i);
sparkAttribute.needsUpdate = true;

function updateSparks(delta, ratio) {
  for (let i = 0; i < SPARK_COUNT; i += 1) {
    sparkLife[i] -= delta;
    if (sparkLife[i] <= 0) resetSpark(i);
    const i3 = i * 3;
    sparkPositions[i3] += sparkVelocities[i3] * delta;
    sparkPositions[i3 + 1] += sparkVelocities[i3 + 1] * delta;
    sparkPositions[i3 + 2] += sparkVelocities[i3 + 2] * delta;
    sparkVelocities[i3 + 1] -= delta * 0.55;
  }
  sparkAttribute.needsUpdate = true;
  sparkGeometry.setDrawRange(0, Math.max(5, Math.floor(SPARK_COUNT * (0.4 + ratio * 0.6))));
}

const smokePuffs = [];
const smokeMaterial = new THREE.MeshBasicMaterial({ color: 0x9ca9a2, transparent: true, opacity: 0.08 });
for (let i = 0; i < 4; i += 1) {
  const puff = new THREE.Mesh(new THREE.SphereGeometry(0.11 + i * 0.015, 6, 6), smokeMaterial.clone());
  puff.position.y = 1.55 + i * 0.42;
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
  hunger: 100,
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
  cycleTime: 0,
  daylight: 1,
  nightActive: false,
  gameOver: false,
  pointerId: null,
  victory: false,
  velocityY: 0,
  grounded: true,
  jumpHeld: false,
  walkPhase: 0,
  idleTime: 0,
  moveSpeed: 0,
  backpack: { wood: 0, sapling: 0, berry: 0 },
  equippedTool: null,
  equipTimer: 0,
  inventoryOpen: false,
  dropCooldown: 0,
  starveTimer: 0,
  portrait: false,
  paused: false,
  fuel: 100,
  fireOut: false,
  fireFlare: 0,
  fireInReach: false,
  interactCooldown: 0,
  chopTimer: 0,
  plantCooldown: 0,
  targetTree: null,
  falling: 0,
  invuln: 0,
  hitEffectTimer: 0,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function updateHud() {
  nightText.textContent = `${state.night} / ${state.maxNight}`;
  woodText.textContent = String(ownedCount('wood'));
  saplingText.textContent = String(ownedCount('sapling'));
  berryText.textContent = String(ownedCount('berry'));
  healthText.textContent = String(Math.max(0, Math.ceil(state.health)));
  hungerText.textContent = String(Math.max(0, Math.ceil(state.hunger)));

  const healthPercent = clamp(state.health, 0, 100);
  healthFill.style.width = `${healthPercent}%`;
  healthFill.classList.toggle('low', healthPercent <= 55 && healthPercent > 25);
  healthFill.classList.toggle('critical', healthPercent <= 25);

  const hungerPercent = clamp(state.hunger, 0, 100);
  hungerFill.style.width = `${hungerPercent}%`;
  hungerFill.classList.toggle('low', hungerPercent <= 30);

  const fuel = clamp(state.fuel, 0, 100);
  const fuelPercent = Math.round(fuel);
  fuelFill.style.width = `${fuel}%`;
  fuelFill.classList.toggle('low', fuel <= 55 && fuel > 25);
  fuelFill.classList.toggle('critical', fuel <= 25);
  fuelText.textContent = `${fuelPercent}%`;

  if (state.fireOut) {
    statusText.textContent = 'The fire is out!';
    statusText.style.color = '#ff5d5d';
  } else if (fuel <= 25) {
    statusText.textContent = 'Fire almost out';
    statusText.style.color = '#ff5d5d';
  } else if (fuel <= 55) {
    statusText.textContent = 'Fire is low';
    statusText.style.color = '#ffba58';
  } else {
    statusText.textContent = 'Fire is strong';
    statusText.style.color = '#8aec9b';
  }

  const fireIsOut = state.started && state.fireOut;
  fireWarning.classList.toggle('visible', fireIsOut);

  backpackBadge.textContent = `${backpackCount()}/${BACKPACK_CAPACITY}`;
  inventoryCapacity.textContent = `${backpackCount()} / ${BACKPACK_CAPACITY}`;
  updateToolUi();
  renderInventory();
}

function updateToolUi() {
  const axeEquipped = state.equippedTool === 'axe';
  const backpackEquipped = state.equippedTool === 'backpack';
  axeSlot.classList.toggle('equipped', axeEquipped);
  backpackSlot.classList.toggle('equipped', backpackEquipped);
  axeSlot.setAttribute('aria-pressed', String(axeEquipped));
  backpackSlot.setAttribute('aria-pressed', String(backpackEquipped));

  const showAttack = axeEquipped && state.started && !state.gameOver && !state.falling;
  attackBtn.classList.toggle('visible', showAttack);
  if (state.targetTree && axeEquipped) {
    attackLabel.textContent = 'CHOP';
  } else {
    attackLabel.textContent = 'ATTACK';
  }
}

function renderInventory() {
  if (!state.inventoryOpen) return;
  const signature = `${state.backpack.wood}|${state.backpack.sapling}|${state.backpack.berry}`;
  if (signature === lastInventorySignature) return;
  lastInventorySignature = signature;

  inventoryList.innerHTML = '';
  const entries = [
    ['wood', 'Wood log'],
    ['sapling', 'Sapling'],
    ['berry', 'Berry']
  ];
  let hasItems = false;

  for (const [type, name] of entries) {
    const count = state.backpack[type];
    if (count <= 0) continue;
    hasItems = true;

    const row = document.createElement('div');
    row.className = 'inventory-row';

    const icon = document.createElement('span');
    icon.className = `inv-icon ${type}`;

    const label = document.createElement('span');
    label.className = 'inv-name';
    label.textContent = name;

    const amount = document.createElement('span');
    amount.className = 'inv-count';
    amount.textContent = `×${count}`;

    const take = document.createElement('button');
    take.className = 'inv-btn take';
    take.textContent = 'TAKE';
    take.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      takeOutItem(type);
    });

    row.append(icon, label, amount, take);

    if (type === 'berry') {
      const eat = document.createElement('button');
      eat.className = 'inv-btn eat';
      eat.textContent = 'EAT';
      eat.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        eatBackpackBerry();
      });
      row.append(eat);
    }

    inventoryList.appendChild(row);
  }

  if (!hasItems) {
    const empty = document.createElement('div');
    empty.className = 'inventory-empty';
    empty.textContent = 'Your backpack is empty.';
    inventoryList.appendChild(empty);
  }
}

function setInventoryOpen(open) {
  state.inventoryOpen = open;
  inventoryPanel.classList.toggle('hidden', !open);
  if (open) {
    toastTimer = 0;
    toastEl.classList.remove('visible');
    lastInventorySignature = '';
    renderInventory();
  }
}

function takeOutItem(type) {
  if (!state.started || state.gameOver || state.falling) return;
  if (state.backpack[type] <= 0) return;
  state.backpack[type] -= 1;
  const x = player.position.x + Math.sin(player.rotation.y) * 1.35;
  const z = player.position.z + Math.cos(player.rotation.y) * 1.35;
  spawnGroundItem(type, x, z, { velocityY: 2.2, pickupDelay: 0.3 });
  state.dropCooldown = 0.25;
  updateHud();
  showToast(`Took out ${ITEM_NAMES[type].toLowerCase()}`);
}

function eatBackpackBerry() {
  if (!state.started || state.gameOver || state.falling) return;
  if (state.backpack.berry <= 0) return;
  state.backpack.berry -= 1;
  state.hunger = clamp(state.hunger + BERRY_HUNGER, 0, 100);
  updateHud();
  showToast(`Ate a berry (+${BERRY_HUNGER} hunger)`);
}

function equipTool(tool) {
  if (!state.started || state.gameOver || state.falling) return;

  if (tool === 'backpack' && state.equippedTool === 'backpack') {
    setInventoryOpen(!state.inventoryOpen);
    return;
  }

  if (tool === state.equippedTool) {
    state.equippedTool = null;
  } else {
    state.equippedTool = tool;
  }

  if (state.equippedTool !== 'backpack') setInventoryOpen(false);
  state.equipTimer = state.equippedTool ? EQUIP_TIME : 0;
  updateHud();
  updateToolModels();
}

function unequipTool() {
  state.equippedTool = null;
  state.equipTimer = 0;
  setInventoryOpen(false);
  updateHud();
  updateToolModels();
}

function updateToolModels() {
  const axeEquipped = state.equippedTool === 'axe';
  const backpackEquipped = state.equippedTool === 'backpack';
  axe.visible = axeEquipped;
  handBackpack.visible = backpackEquipped;
  lantern.visible = !state.equippedTool;
}

function updateEquippedTool(delta) {
  state.equipTimer = Math.max(0, state.equipTimer - delta);
  const tool = state.equippedTool === 'axe' ? axe : state.equippedTool === 'backpack' ? handBackpack : null;
  if (!tool) return;

  if (state.equipTimer > 0) {
    const progress = 1 - state.equipTimer / EQUIP_TIME;
    const eased = 1 - (1 - progress) * (1 - progress);
    const baseY = tool === axe ? AXE_BASE_Y : BACKPACK_BASE_Y;
    tool.scale.setScalar(0.55 + eased * 0.45);
    tool.position.y = baseY - (1 - eased) * 0.26;
  } else {
    tool.scale.setScalar(tool === axe ? 1 : 0.92);
    tool.position.y = tool === axe ? AXE_BASE_Y : BACKPACK_BASE_Y;
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
  if (!state.started || state.inventoryOpen) return;
  event.preventDefault();
  lookPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  state.look.active = true;
  state.pinchDistance = getPinchDistance();
  lookZone.setPointerCapture(event.pointerId);
});

lookZone.addEventListener('pointermove', (event) => {
  if (!state.started || state.inventoryOpen) return;
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

function isPortraitViewport() {
  return window.innerHeight > window.innerWidth;
}

async function requestLandscape() {
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  if (!coarsePointer) return;
  try {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    // Fullscreen can be blocked by the browser; the rotate overlay still works.
  }
  try {
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock('landscape');
    }
  } catch (error) {
    // Orientation lock is best-effort on browsers that do not support it.
  }
}

function startGame() {
  if (isPortraitViewport()) return;
  requestLandscape();

  state.started = true;
  state.victory = false;
  state.gameOver = false;
  state.paused = false;
  overlay.classList.add('hidden');
  state.health = 100;
  state.hunger = 100;
  state.night = 1;
  state.cycleTime = 0;
  state.daylight = 1;
  state.nightActive = false;
  state.attackCooldown = 0;
  state.attackTimer = 0;
  state.damageFlash = 0;
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
  state.backpack.wood = 0;
  state.backpack.sapling = 0;
  state.backpack.berry = 0;
  state.equippedTool = null;
  state.equipTimer = 0;
  state.inventoryOpen = false;
  state.dropCooldown = 0;
  state.starveTimer = 0;
  state.fuel = 100;
  state.fireOut = false;
  state.fireFlare = 0;
  state.interactCooldown = 0;
  state.chopTimer = 0;
  state.plantCooldown = 0;
  state.targetTree = null;
  state.falling = 0;
  state.invuln = 0;
  state.hitEffectTimer = 0;
  toastTimer = 0;
  toastEl.classList.remove('visible');
  setInventoryOpen(false);
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

  for (const sapling of plantedSaplings) world.remove(sapling.mesh);
  plantedSaplings.length = 0;
  resetGroundItems();

  for (let i = treeData.length - 1; i >= 0; i -= 1) {
    const tree = treeData[i];
    if (tree.userData.planted) {
      world.remove(tree);
      treeData.splice(i, 1);
      continue;
    }
    tree.visible = true;
    tree.rotation.set(0, 0, 0);
    tree.quaternion.identity();
    if (tree.userData.baseChoppable) {
      markChoppable(tree);
    }
  }

  fireWarning.classList.remove('visible');
  deathBanner.classList.remove('visible');
  darkness.style.opacity = '0';
  for (const enemy of enemies) {
    enemy.visible = false;
    enemy.position.set(0, -40, 0);
    resetEnemyAppearance(enemy);
    enemy.visible = false;
  }
  strikeArc.visible = false;
  hitEffect.visible = false;
  updateToolModels();
  updateHud();
  showToast('Tap a hotbar slot to equip a tool');
}

startBtn.addEventListener('click', startGame);

const blockedKeys = new Set([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright']);
const jumpKeys = new Set(['shift', 'j']);
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (blockedKeys.has(key)) event.preventDefault();
  if (key === ' ' && !event.repeat) attack();
  if (key === 'e' && !event.repeat) interact();
  if (key === 'q' && !event.repeat) plantSapling();
  if (key === 'f' && !event.repeat) dropCarriedItems();
  if (key === '1' && !event.repeat) equipTool('axe');
  if (key === '2' && !event.repeat) equipTool('backpack');
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

interactBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  interact();
});

dropBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  dropCarriedItems();
});

axeSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('axe');
});

backpackSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('backpack');
});

closeInventoryBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  setInventoryOpen(false);
});

unequipBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  unequipTool();
});

// Tapping a world item picks it up. Track short taps so camera drags are ignored.
let worldTap = null;
window.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (event.target.closest('button, #inventoryPanel, #startOverlay, #rotateOverlay')) return;
  if (event.target.closest('#joystickZone, #hotbar, #actionCluster')) return;
  worldTap = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    time: performance.now()
  };
});

window.addEventListener('pointerup', (event) => {
  if (!worldTap || worldTap.id !== event.pointerId) return;
  const tap = worldTap;
  worldTap = null;
  if (!state.started || state.gameOver || state.falling || state.inventoryOpen || state.portrait) return;
  const moved = Math.hypot(event.clientX - tap.x, event.clientY - tap.y);
  if (moved > 12 || performance.now() - tap.time > 420) return;
  handleWorldTap(event.clientX, event.clientY);
});

const tapRaycaster = new THREE.Raycaster();
const tapPointer = new THREE.Vector2();

function handleWorldTap(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  tapPointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  tapPointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  tapRaycaster.setFromCamera(tapPointer, camera);

  const candidates = [];
  for (const item of groundItems) {
    if (item.carried || item.popping > 0) continue;
    const dx = player.position.x - item.x;
    const dz = player.position.z - item.z;
    if (dx * dx + dz * dz > (PICKUP_RANGE + 0.6) * (PICKUP_RANGE + 0.6)) continue;
    candidates.push(item.mesh);
  }
  if (candidates.length === 0) return;

  const hits = tapRaycaster.intersectObjects(candidates, true);
  if (hits.length === 0) return;

  let object = hits[0].object;
  while (object) {
    if (object.userData.itemRef) {
      pickUpItem(object.userData.itemRef);
      return;
    }
    object = object.parent;
  }
}

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
  fireWarning.classList.remove('visible');
  deathBanner.classList.remove('visible');
  toastEl.classList.remove('visible');
  setInventoryOpen(false);
  state.equippedTool = null;
  state.equipTimer = 0;
  updateToolModels();
  updateHud();
  darkness.style.opacity = '0';
}

function attack() {
  if (!state.started || state.gameOver || state.falling || state.attackCooldown > 0) return;
  if (state.equippedTool !== 'axe') {
    showToast('Equip the axe to attack');
    return;
  }

  state.attackCooldown = 0.58;
  state.attackTimer = ATTACK_DURATION;
  strikeArc.visible = true;
  strikeArc.scale.setScalar(0.7);
  playerGlow.intensity = 1.8;

  if (state.targetTree) {
    chopTree(state.targetTree);
  }

  const forward = new THREE.Vector3(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));
  for (const enemy of enemies) {
    if (!enemy.visible || enemy.userData.fading) continue;
    const offset = enemy.position.clone().sub(player.position);
    offset.y = 0;
    const distance = offset.length();
    if (distance > 3.3 || distance < 0.01) continue;
    offset.normalize();
    if (forward.dot(offset) < 0.2) continue;

    const data = enemy.userData;
    data.health -= 1;
    data.hitTimer = 0.22;
    data.bodyMat.emissive.setHex(0xff2f1a);
    data.bodyMat.emissiveIntensity = 1.1;
    data.knockback.addScaledVector(forward, 4.2);

    hitEffect.position.copy(enemy.position);
    hitEffect.position.y += 1.15;
    hitEffect.scale.setScalar(0.8);
    hitEffect.material.opacity = 0.95;
    hitEffect.visible = true;
    state.hitEffectTimer = 0.22;

    if (data.health <= 0) {
      data.health = 0;
      data.dead = true;
      data.attackCooldown = 0;
      startEnemyFade(enemy, 4);
    }
  }
}

function startEnemyFade(enemy, rate) {
  const data = enemy.userData;
  if (!enemy.visible) return;
  data.fading = true;
  data.fade = 1;
  data.fadeRate = rate;
  data.bodyMat.transparent = true;
  data.eyeMat.transparent = true;
}

function damagePlayer(amount) {
  if (!state.started || state.gameOver || state.falling || state.invuln > 0) return;
  state.health = Math.max(0, state.health - amount);
  state.damageFlash = 1;
  updateHud();
  if (state.health <= 0) beginFalling();
}

function beginFalling() {
  if (state.falling > 0) return;
  state.falling = 2.4;
  state.health = 0;
  state.attackTimer = 0;
  strikeArc.visible = false;
  setInventoryOpen(false);
  deathBanner.classList.add('visible');
  updateHud();
}

function respawnAtCamp() {
  state.falling = 0;
  state.health = 100;
  state.hunger = Math.max(state.hunger, 55);
  state.invuln = 2;
  state.damageFlash = 0;
  state.velocityY = 0;
  state.grounded = true;
  state.attackCooldown = 0;
  state.attackTimer = 0;
  player.position.set(0, getGroundHeight(0, 3.6), 3.6);
  player.rotation.y = 0;
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);
  deathBanner.classList.remove('visible');

  state.cycleTime = DAY_LENGTH;
  state.nightActive = true;
  spawnNightWave();
  updateHud();
}

function spawnNightWave() {
  state.nightActive = true;
  const count = Math.min(state.night + 1, MAX_ENEMIES);

  for (let i = 0; i < enemies.length; i += 1) {
    const enemy = enemies[i];
    if (i >= count) {
      enemy.visible = false;
      enemy.position.set(0, -40, 0);
      continue;
    }

    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const radius = 33 + Math.random() * 6;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    resetEnemyAppearance(enemy);
    enemy.position.set(x, getGroundHeight(x, z), z);
    enemy.rotation.y = Math.atan2(-x, -z);

    const data = enemy.userData;
    data.dead = false;
    data.health = Math.min(8, 2 + Math.floor((state.night - 1) / 12));
    data.maxHealth = data.health;
    data.speed = Math.min(3.5, 1.15 + state.night * 0.045 + Math.random() * 0.22);
    data.damage = Math.min(22, 6 + state.night * 0.3);
    data.targetCamp = i % 4 === 0;
    data.circleDir = Math.random() < 0.5 ? 1 : -1;
    data.phase = Math.random() * Math.PI * 2;
  }

  spawnBurst.visible = true;
  spawnBurst.position.copy(player.position);
  spawnBurst.position.y = 1.4;
  spawnBurst.intensity = 2.6;
}

function getCampfireInfluence() {
  const dx = player.position.x - campfire.position.x;
  const dz = player.position.z - campfire.position.z;
  return dx * dx + dz * dz < 7 * 7 ? 1 : 0;
}

const PLAYER_SPEED = 6;
const PLAYER_RADIUS = 0.32;
const JUMP_SPEED = 7.4;
const GRAVITY = 17.5;

function tryJump() {
  if (!state.started || state.gameOver || state.falling || !state.grounded) return;
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
    if (!tree.visible || tree.userData.falling) continue;
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
  if (!state.started || state.gameOver || state.falling) return;
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
  } else if (state.attackTimer > 0) {
    const progress = 1 - state.attackTimer / ATTACK_DURATION;
    const swing = Math.sin(clamp(progress, 0, 1) * Math.PI);
    leftArmX = 0.22 * swing;
    rightArmX = -0.45 - 2.25 * swing;
    rightArmZ = 0.34 * swing;
    leftLegX = 0.08 * swing;
    rightLegX = -0.08 * swing;
  } else if (state.chopTimer > 0) {
    const progress = 1 - state.chopTimer / 0.3;
    const swing = Math.sin(clamp(progress, 0, 1) * Math.PI);
    leftArmX = -0.4 * swing;
    rightArmX = -2.2 * swing;
    rightArmZ = 0.12 * swing;
  } else if (state.equipTimer > 0) {
    const progress = 1 - state.equipTimer / EQUIP_TIME;
    const lift = Math.sin(clamp(progress, 0, 1) * Math.PI);
    rightArmX = -1.15 * lift;
    rightArmZ = 0.22 * lift;
    leftArmX = 0.18 * lift;
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

  const fireStrong = !state.fireOut && state.fuel > FIRE_STRONG_FUEL;

  for (const enemy of enemies) {
    const data = enemy.userData;
    if (!enemy.visible) continue;

    if (data.fading) {
      data.fade = Math.max(0, data.fade - delta * (data.fadeRate || 1));
      const fade = data.fade;
      data.bodyMat.opacity = fade;
      data.eyeMat.opacity = fade;
      enemy.scale.setScalar(0.4 + fade * 0.6);
      if (fade <= 0) {
        enemy.visible = false;
        data.fading = false;
        data.dead = true;
        enemy.position.set(0, -40, 0);
      }
      continue;
    }

    if (state.falling > 0) continue;

    if (data.hitTimer > 0) {
      data.hitTimer -= delta;
      if (data.hitTimer <= 0) {
        data.bodyMat.emissive.setHex(0x000000);
        data.bodyMat.emissiveIntensity = 1;
      }
    }

    if (data.knockback.lengthSq() > 0.0004) {
      enemy.position.addScaledVector(data.knockback, delta);
      data.knockback.multiplyScalar(Math.exp(-9 * delta));
    }

    const playerDistance = Math.hypot(
      player.position.x - enemy.position.x,
      player.position.z - enemy.position.z
    );

    let targetX = player.position.x;
    let targetZ = player.position.z;
    if (data.targetCamp && playerDistance > 10 && !state.fireOut) {
      targetX = campfire.position.x;
      targetZ = campfire.position.z;
    }

    let dx = targetX - enemy.position.x;
    let dz = targetZ - enemy.position.z;
    const targetDistance = Math.hypot(dx, dz);
    let stepX = 0;
    let stepZ = 0;
    let walking = false;

    if (targetDistance > 0.35) {
      stepX = (dx / targetDistance) * data.speed * delta;
      stepZ = (dz / targetDistance) * data.speed * delta;
      walking = true;
    }

    if (fireStrong) {
      const fx = enemy.position.x - campfire.position.x;
      const fz = enemy.position.z - campfire.position.z;
      const fireDistance = Math.hypot(fx, fz) || 1;
      const nx = fx / fireDistance;
      const nz = fz / fireDistance;

      if (fireDistance < FIRE_SCARE_RADIUS + 1.2) {
        stepX += -nz * data.circleDir * data.speed * delta * 0.5;
        stepZ += nx * data.circleDir * data.speed * delta * 0.5;
      }
    }

    let nextX = enemy.position.x + stepX;
    let nextZ = enemy.position.z + stepZ;

    if (fireStrong) {
      const outX = enemy.position.x - campfire.position.x;
      const outZ = enemy.position.z - campfire.position.z;
      const outDistance = Math.hypot(outX, outZ) || 1;
      if (outDistance < FIRE_SCARE_RADIUS - 0.05) {
        nextX = campfire.position.x + (outX / outDistance) * FIRE_SCARE_RADIUS;
        nextZ = campfire.position.z + (outZ / outDistance) * FIRE_SCARE_RADIUS;
      }

      const nextOutX = nextX - campfire.position.x;
      const nextOutZ = nextZ - campfire.position.z;
      const nextOutDistance = Math.hypot(nextOutX, nextOutZ) || 1;
      if (nextOutDistance < FIRE_SCARE_RADIUS) {
        const keepX = enemy.position.x - campfire.position.x;
        const keepZ = enemy.position.z - campfire.position.z;
        const keepDistance = Math.hypot(keepX, keepZ) || 1;
        nextX = campfire.position.x + (keepX / keepDistance) * FIRE_SCARE_RADIUS;
        nextZ = campfire.position.z + (keepZ / keepDistance) * FIRE_SCARE_RADIUS;
      }
    }

    enemy.position.x = clamp(nextX, -46, 46);
    enemy.position.z = clamp(nextZ, -46, 46);
    enemy.position.y = getGroundHeight(enemy.position.x, enemy.position.z);

    const faceX = targetX - enemy.position.x;
    const faceZ = targetZ - enemy.position.z;
    if (Math.hypot(faceX, faceZ) > 0.01) {
      enemy.rotation.y = Math.atan2(faceX, faceZ);
    }

    const stride = walking ? 0.58 : 0.1;
    data.phase += delta * (3.4 + data.speed * 1.5) * (walking ? 1 : 0.3);
    const swing = Math.sin(data.phase);
    data.legs[0].rotation.x = swing * stride;
    data.legs[1].rotation.x = -swing * stride;
    data.arms[0].rotation.x = -swing * stride * 0.8;
    data.arms[1].rotation.x = swing * stride * 0.8;
    data.bodyGroup.position.y = Math.abs(swing) * 0.035;

    data.attackCooldown = Math.max(0, data.attackCooldown - delta);
    const touchDistance = Math.hypot(
      player.position.x - enemy.position.x,
      player.position.z - enemy.position.z
    );
    if (touchDistance < 1.45 && Math.abs(player.position.y - enemy.position.y) < 2.2) {
      if (data.attackCooldown <= 0 && state.invuln <= 0) {
        damagePlayer(data.damage);
        data.attackCooldown = 1.05;
      }
    }
  }
}

function updateVitals(delta) {
  if (!state.started || state.gameOver || state.falling) return;

  state.hunger = Math.max(0, state.hunger - delta * HUNGER_DRAIN_PER_SECOND);
  if (state.hunger <= 0) {
    state.starveTimer += delta;
    if (state.starveTimer >= 1) {
      state.starveTimer -= 1;
      state.health = Math.max(0, state.health - 2);
      state.damageFlash = Math.max(state.damageFlash, 0.45);
      updateHud();
      if (state.health <= 0) beginFalling();
    }
  } else {
    state.starveTimer = 0;
  }
}

function updateCampfire(delta) {
  if (state.started && !state.gameOver) {
    state.fuel = Math.max(0, state.fuel - delta * FUEL_DRAIN_PER_SECOND);
    state.fireFlare = Math.max(0, state.fireFlare - delta * 1.8);
    if (state.fuel <= 0) state.fireOut = true;
  }

  const ratio = clamp(state.fuel / 100, 0, 1);
  const safe = getCampfireInfluence() > 0;
  state.nearFire = safe;
  if (safe && state.started && !state.gameOver && !state.falling && !state.fireOut) {
    state.health = clamp(state.health + delta * 3, 0, 100);
  }

  spawnBurst.visible = spawnBurst.visible && spawnBurst.intensity > 0.1;
  if (spawnBurst.visible) {
    spawnBurst.intensity *= 0.96;
  }

  const t = performance.now() * 0.001;
  const flicker = 0.85 + Math.sin(t * 17.3) * 0.12 + Math.sin(t * 29.7 + 0.7) * 0.08;
  const burning = !state.fireOut;

  fireCore.visible = burning;
  fireFlame.visible = burning;
  fireFlameInner.visible = burning;
  fireSparks.visible = burning;

  if (burning) {
    const size = 0.55 + ratio * 0.45;
    fireCore.scale.setScalar((0.8 + ratio * 0.45) * (1 + Math.sin(t * 12) * 0.08));
    fireCore.position.y = 0.55 + Math.sin(t * 6) * 0.04;
    fireCore.rotation.y += delta * 2.4;

    const flameHeight = 1.5 * size;
    fireFlame.scale.setScalar(size * (0.9 + Math.sin(t * 9) * 0.1));
    fireFlame.position.y = 0.4 + flameHeight * 0.5 + Math.sin(t * 8.5) * 0.04;
    fireFlame.rotation.y += delta * 1.9;
    fireFlame.rotation.z = Math.sin(t * 3.1) * 0.08;

    const innerHeight = 1.05 * size;
    fireFlameInner.scale.setScalar(size * (0.92 + Math.sin(t * 14) * 0.1));
    fireFlameInner.position.y = 0.42 + innerHeight * 0.5 + Math.sin(t * 10 + 1) * 0.03;
    fireFlameInner.rotation.z = Math.sin(t * 4.7 + 1) * 0.07;

    fireGlow.intensity = (2 + ratio * 1.8) * flicker + state.fireFlare * 3.2;
    warmLight.intensity = (0.6 + ratio * 0.8) * flicker + state.fireFlare * 1.8;
    sparkMaterial.opacity = 0.55 + ratio * 0.3 + Math.sin(t * 13) * 0.1;
    updateSparks(delta, ratio);
  } else {
    fireGlow.intensity = 0;
    warmLight.intensity = 0;
    sparkGeometry.setDrawRange(0, 0);
  }

  for (let i = 0; i < smokePuffs.length; i += 1) {
    const puff = smokePuffs[i];
    const phase = (t * 0.42 + i / smokePuffs.length) % 1;
    puff.position.set(Math.sin(t * 1.4 + i) * 0.14, 1.5 + phase * 1.8, Math.cos(t * 1.2 + i) * 0.12);
    puff.scale.setScalar(0.6 + phase * 1.05);
    puff.material.opacity = burning ? 0.09 * (1 - phase) : 0;
  }

  if (state.started && !state.gameOver && state.health > 0) {
    const playerGlowPulse = 0.48 + Math.sin(t * 14) * 0.2;
    playerGlow.intensity = playerGlowPulse;
  }
}

const skyDayColor = new THREE.Color(0x6f9aa4);
const skyNightColor = new THREE.Color(0x020a0f);
const fogDayColor = new THREE.Color(0x87a9a5);
const fogNightColor = new THREE.Color(0x071922);
const ambientDayColor = new THREE.Color(0xdff1ff);
const ambientNightColor = new THREE.Color(0x8fb4e8);
const sunDayColor = new THREE.Color(0xfff2d0);
const moonNightColor = new THREE.Color(0xa8c6ff);
const damageColor = new THREE.Color(0x4a0806);
const workColor = new THREE.Color();
const workColorB = new THREE.Color();

function applyDayNightVisuals() {
  const nightFactor = 1 - state.daylight;

  workColor.copy(skyDayColor).lerp(skyNightColor, nightFactor);
  if (state.damageFlash > 0) workColor.lerp(damageColor, state.damageFlash * 0.34);
  scene.background.copy(workColor);
  sky.material.color.copy(workColor);

  workColorB.copy(fogDayColor).lerp(fogNightColor, nightFactor);
  scene.fog.color.copy(workColorB);
  scene.fog.density = 0.018 + nightFactor * 0.04;

  ambient.color.copy(ambientDayColor).lerp(ambientNightColor, nightFactor);
  ambient.intensity = 1.0 - nightFactor * 0.45;
  moonLight.color.copy(sunDayColor).lerp(moonNightColor, nightFactor);
  moonLight.intensity = 1.25 - nightFactor * 0.55;

  phaseIcon.classList.toggle('night', nightFactor > 0.5);

  const fireOutExtra = state.started && state.fireOut ? 0.1 : 0;
  darkness.style.opacity = String(clamp(nightFactor * 0.3 + fireOutExtra, 0, 0.85));
}

function updateDayNight(delta) {
  const previousTime = state.cycleTime;
  state.cycleTime += delta;
  let wrapped = false;
  if (state.cycleTime >= CYCLE_LENGTH) {
    state.cycleTime -= CYCLE_LENGTH;
    wrapped = true;
  }
  const t = state.cycleTime;

  if (t < DAY_LENGTH - DUSK_LENGTH) {
    state.daylight = 1;
  } else if (t < DAY_LENGTH) {
    state.daylight = 1 - smoothstep((t - (DAY_LENGTH - DUSK_LENGTH)) / DUSK_LENGTH);
  } else if (t < CYCLE_LENGTH - DAWN_LENGTH) {
    state.daylight = 0;
  } else {
    state.daylight = smoothstep((t - (CYCLE_LENGTH - DAWN_LENGTH)) / DAWN_LENGTH);
  }

  if (previousTime < DAY_LENGTH && t >= DAY_LENGTH && !state.nightActive) {
    spawnNightWave();
  }

  if (previousTime < CYCLE_LENGTH - DAWN_LENGTH && t >= CYCLE_LENGTH - DAWN_LENGTH) {
    for (const enemy of enemies) {
      if (enemy.visible && !enemy.userData.fading && !enemy.userData.dead) {
        startEnemyFade(enemy, 0.3);
      }
    }
  }

  if (wrapped) {
    state.nightActive = false;
    regrowBerries();
    if (state.night >= state.maxNight) {
      state.victory = true;
      state.started = false;
      state.gameOver = true;
      resetToMenu('You Survived', '99 nights survived. The camp still burns.', 'Tap to begin a new run.', 'Play Again');
      return;
    }
    state.night += 1;
    updateHud();
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
    if (!tree.visible) continue;
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

function animate() {
  requestAnimationFrame(animate);
  const rawDelta = clock.getDelta();
  const delta = Math.min(rawDelta, 0.033);

  const portrait = isPortraitViewport();
  if (portrait !== state.portrait) {
    state.portrait = portrait;
    document.body.classList.toggle('portrait', portrait);
    if (portrait) {
      releaseJoystick();
      lookPointers.clear();
      state.look.active = false;
      state.pinchDistance = 0;
      state.keys.clear();
      state.jumpHeld = false;
    }
  }
  state.paused = portrait;

  if (!portrait) {
    state.attackCooldown = Math.max(0, state.attackCooldown - delta);
    state.attackTimer = Math.max(0, state.attackTimer - delta);
    state.interactCooldown = Math.max(0, state.interactCooldown - delta);
    state.chopTimer = Math.max(0, state.chopTimer - delta);
    state.plantCooldown = Math.max(0, state.plantCooldown - delta);
    state.dropCooldown = Math.max(0, state.dropCooldown - delta);
    state.invuln = Math.max(0, state.invuln - delta);
    updateEquippedTool(delta);

    strikeArc.visible = state.attackTimer > 0;
    if (state.attackTimer > 0) {
      const progress = 1 - state.attackTimer / ATTACK_DURATION;
      strikeArc.scale.setScalar(0.7 + progress * 0.6);
      strikeArc.material.opacity = 0.8 * (1 - progress);
      strikeArc.rotation.z = progress * 0.55;
    }

    if (state.hitEffectTimer > 0) {
      state.hitEffectTimer = Math.max(0, state.hitEffectTimer - delta);
      hitEffect.visible = true;
      hitEffect.scale.setScalar(0.8 + (1 - state.hitEffectTimer / 0.22) * 1.5);
      hitEffect.material.opacity = state.hitEffectTimer / 0.22;
      hitEffect.rotation.y += delta * 10;
    } else {
      hitEffect.visible = false;
    }

    if (toastTimer > 0) {
      toastTimer = Math.max(0, toastTimer - rawDelta);
      if (toastTimer <= 0) toastEl.classList.remove('visible');
    }

    if (state.started && !state.gameOver) {
      updateDayNight(delta);
      if (state.falling > 0) {
        state.falling = Math.max(0, state.falling - delta);
        if (state.falling <= 0) respawnAtCamp();
      } else {
        movePlayer(delta);
      }
      updatePlayerVertical(delta);
      updateEnemies(delta);
      updateVitals(delta);
      updateInteractionTarget();
      updateTrees(delta);
      updateGroundItems(delta);
      updatePlantedSaplings(delta);
      updateCampfire(delta);
      updateHud();
      updateInteractPrompt();
    } else {
      state.moveSpeed = 0;
      updatePlayerVertical(delta);
      updateInteractionTarget();
      updateTrees(delta);
      updateGroundItems(delta);
      updateInteractPrompt();
      updateHud();
    }

    updateAvatar(delta);

    if (state.damageFlash > 0) {
      state.damageFlash = Math.max(0, state.damageFlash - delta * 1.5);
    }
  }

  if (state.victory && !state.started) {
    overlay.classList.remove('hidden');
  }

  applyDayNightVisuals();
  updateCamera();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

regrowBerries();
updateHud();
applyDayNightVisuals();
if (import.meta.env.DEV) {
  window.__nightsDebug = {
    state,
    enemies,
    player,
    campfire,
    camera,
    canvas,
    axe,
    handBackpack,
    lantern,
    treeData,
    groundItems,
    carriedItems,
    berryBushes,
    plantedSaplings,
    spawnGroundItem,
    resetGroundItems,
    removeGroundItem,
    popGroundItem,
    findNearestGroundItem,
    spawnNightWave,
    startEnemyFade,
    plantSapling,
    interact,
    attack,
    dropCarriedItems,
    pickUpItem,
    addItemToBackpack,
    equipTool,
    unequipTool,
    setInventoryOpen,
    takeOutItem,
    eatBackpackBerry,
    updateHud,
    updateToolModels,
    handleWorldTap,
    isPortraitViewport,
    requestLandscape,
    chopTree,
    fellTree,
    getGroundHeight,
    startGame,
    showToast
  };
}
animate();
