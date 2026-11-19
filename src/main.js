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
const ironText = document.getElementById('ironText');
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
const pickaxeSlot = document.getElementById('pickaxeSlot');
const ironAxeSlot = document.getElementById('ironAxeSlot');
const ironSwordSlot = document.getElementById('ironSwordSlot');
const backpackBadge = document.getElementById('backpackBadge');
const inventoryPanel = document.getElementById('inventoryPanel');
const inventoryList = document.getElementById('inventoryList');
const inventoryCapacity = document.getElementById('inventoryCapacity');
const closeInventoryBtn = document.getElementById('closeInventoryBtn');
const unequipBtn = document.getElementById('unequipBtn');
const upgradePanel = document.getElementById('upgradePanel');
const upgradeGrid = document.getElementById('upgradeGrid');
const closeUpgradeBtn = document.getElementById('closeUpgradeBtn');
const machineStatus = document.getElementById('machineStatus');
const machineFuelText = document.getElementById('machineFuelText');
const machineFuelFill = document.getElementById('machineFuelFill');
const machineFeedBtn = document.getElementById('machineFeedBtn');
const machineJob = document.getElementById('machineJob');
const machineJobName = document.getElementById('machineJobName');
const machineJobTime = document.getElementById('machineJobTime');
const machineJobFill = document.getElementById('machineJobFill');
const audioToggle = document.getElementById('audioToggle');
const cameraBtn = document.getElementById('cameraBtn');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

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

const MACHINE_POSITION = new THREE.Vector3(3.4, 0, -1);
const IRON_ROCK_HITS = 2;
const solidProps = [];
const TREE_HITS_BASE = 3;

// ---------- Camera / view constants ----------
const CAMERA_EYE_HEIGHT = 1.6;
const THIRD_PERSON_DISTANCE = 4;
const THIRD_CAMERA_HEIGHT = 0.45;
const THIRD_FOV = 67;
const FIRST_FOV = 75;
const PITCH_LIMIT = THREE.MathUtils.degToRad(80);
const CAMERA_LOOK_SENSITIVITY_X = 0.0037;
const CAMERA_LOOK_SENSITIVITY_Y = 0.0022;
const TAP_MAX_MOVE = 10;
const TAP_MAX_TIME = 360;
const TAP_REACH = 4;
const CAMERA_VIEW_STORAGE_KEY = 'nights.cameraView';

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
campfire.userData.campfireRef = true;
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
  tree.userData.treeRef = tree;
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
  data.hits = TREE_HITS_BASE;
  data.hitsMax = TREE_HITS_BASE;
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

const ironToolMaterial = new THREE.MeshStandardMaterial({
  color: 0xaab8c1,
  emissive: 0x1b252c,
  emissiveIntensity: 0.36,
  roughness: 0.3,
  metalness: 0.68
});
const ironEdgeMaterial = new THREE.MeshStandardMaterial({
  color: 0xdce8ee,
  emissive: 0x35444d,
  emissiveIntensity: 0.4,
  roughness: 0.24,
  metalness: 0.64
});
const toolHandleMaterial = new THREE.MeshStandardMaterial({ color: 0x714323, roughness: 0.84, metalness: 0.02 });
const brassToolMaterial = new THREE.MeshStandardMaterial({ color: 0xe0b260, roughness: 0.42, metalness: 0.5 });

function addToolHandle(group, length, radius = 0.042) {
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.2, length, 6), toolHandleMaterial);
  handle.position.y = length * 0.06;
  handle.castShadow = true;
  group.add(handle);
  const grip = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.28, radius * 1.28, 0.2, 6),
    new THREE.MeshStandardMaterial({ color: 0x362012, roughness: 0.95 })
  );
  grip.position.y = -length * 0.37;
  grip.castShadow = true;
  group.add(grip);
}

function createHeldPickaxe() {
  const pickaxe = new THREE.Group();
  addToolHandle(pickaxe, 0.92, 0.038);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.13, 0.13), ironToolMaterial);
  head.position.set(0.02, 0.42, 0);
  head.castShadow = true;
  pickaxe.add(head);

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.31, 4), ironEdgeMaterial);
  tip.position.set(0.42, 0.42, 0);
  tip.rotation.z = -Math.PI / 2;
  tip.castShadow = true;
  pickaxe.add(tip);

  const backTip = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.23, 4), ironToolMaterial);
  backTip.position.set(-0.35, 0.42, 0);
  backTip.rotation.z = Math.PI / 2;
  backTip.castShadow = true;
  pickaxe.add(backTip);

  return pickaxe;
}

function createHeldIronAxe() {
  const ironAxe = new THREE.Group();
  addToolHandle(ironAxe, 0.96, 0.045);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.11), ironToolMaterial);
  head.position.set(0.11, 0.42, 0);
  head.castShadow = true;
  ironAxe.add(head);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.075), ironEdgeMaterial);
  blade.position.set(0.29, 0.42, 0);
  blade.rotation.z = -0.06;
  blade.castShadow = true;
  ironAxe.add(blade);

  const rivet = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.028, 0.13, 6),
    brassToolMaterial
  );
  rivet.rotation.x = Math.PI / 2;
  rivet.position.set(0.11, 0.42, 0.04);
  ironAxe.add(rivet);

  return ironAxe;
}

function createHeldIronSword() {
  const sword = new THREE.Group();
  addToolHandle(sword, 0.55, 0.035);

  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.08, 0.11), brassToolMaterial);
  guard.position.y = 0.18;
  guard.castShadow = true;
  sword.add(guard);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.9, 0.055), ironEdgeMaterial);
  blade.position.y = 0.68;
  blade.castShadow = true;
  sword.add(blade);

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.099, 0.24, 4), ironEdgeMaterial);
  tip.position.y = 1.23;
  tip.castShadow = true;
  sword.add(tip);

  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), brassToolMaterial);
  pommel.position.y = -0.12;
  sword.add(pommel);

  return sword;
}

const heldPickaxe = createHeldPickaxe();
const heldIronAxe = createHeldIronAxe();
const heldIronSword = createHeldIronSword();
for (const [tool, group, bob] of [
  ['pickaxe', heldPickaxe, 0.04],
  ['ironAxe', heldIronAxe, 0.02],
  ['ironSword', heldIronSword, 0.08]
]) {
  group.position.set(0.12, -0.62 + bob, 0.1);
  group.rotation.set(0.12, 0.08, tool === 'ironSword' ? -0.1 : -0.38);
  group.visible = false;
  group.userData.baseY = group.position.y;
  group.userData.tool = tool;
  rightArm.add(group);
}

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
axe.userData.baseY = AXE_BASE_Y;
axe.userData.tool = 'axe';
handBackpack.userData.baseY = BACKPACK_BASE_Y;
handBackpack.userData.tool = 'backpack';

// ---------- First-person viewmodel ----------
// Rendered by the camera itself so only the right arm and equipped tool show.
scene.add(camera);

const fpViewmodel = new THREE.Group();
fpViewmodel.visible = false;
camera.add(fpViewmodel);

const fpArmPivot = new THREE.Group();
fpArmPivot.position.set(0.47, -0.7, -0.8);
fpArmPivot.rotation.set(-0.2, 0.14, 0.24);
fpArmPivot.scale.setScalar(0.78);
fpViewmodel.add(fpArmPivot);

const fpArmMesh = makeAvatarPart(0.17, 0.5, 0.19, skinMaterial, 0.05);
fpArmMesh.position.set(0, 0.22, 0);
fpArmMesh.castShadow = false;
fpArmPivot.add(fpArmMesh);

const fpHandMesh = makeAvatarPart(0.2, 0.18, 0.22, skinMaterial, 0.045);
fpHandMesh.position.set(0, 0.49, 0.01);
fpHandMesh.castShadow = false;
fpArmPivot.add(fpHandMesh);

const fpToolMount = new THREE.Group();
fpToolMount.position.set(0, 0.5, 0.02);
fpArmPivot.add(fpToolMount);

const fpToolModels = {
  axe: axe.clone(true),
  pickaxe: heldPickaxe.clone(true),
  ironAxe: heldIronAxe.clone(true),
  ironSword: heldIronSword.clone(true)
};
for (const [key, model] of Object.entries(fpToolModels)) {
  model.position.set(0, 0, 0);
  model.rotation.set(-0.15, 0.12, 0.26);
  model.scale.setScalar(0.9);
  model.visible = false;
  model.userData.fpTool = key;
  model.traverse((part) => {
    if (part.isMesh) part.castShadow = false;
  });
  fpToolMount.add(model);
}

const FP_ARM_BASE = {
  x: fpArmPivot.position.x,
  y: fpArmPivot.position.y,
  z: fpArmPivot.position.z,
  rx: fpArmPivot.rotation.x,
  ry: fpArmPivot.rotation.y,
  rz: fpArmPivot.rotation.z
};

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
  lowObstacles.push({ x, z, radius: 0.52 * scale, top: groundY + 0.605 * scale, mesh: rock });
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
  const entry = { x, z, mesh: bush, nextHarvest: 0 };
  bush.userData.berryBushRef = entry;
  berryBushes.push(entry);
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

// ---------- Iron rocks ----------

const ironRocks = [];
const ironRockMaterial = new THREE.MeshStandardMaterial({ color: 0x59656b, roughness: 0.92, metalness: 0.08, flatShading: true });
const ironRockLightMaterial = new THREE.MeshStandardMaterial({ color: 0x748188, roughness: 0.86, metalness: 0.12, flatShading: true });
const ironStreakMaterial = new THREE.MeshStandardMaterial({
  color: 0xc47837,
  emissive: 0x6b2408,
  emissiveIntensity: 0.65,
  roughness: 0.55,
  metalness: 0.32
});
const ironOreGeometry = new THREE.OctahedronGeometry(0.095, 0);

function createIronRock(x, z, scale = 1) {
  const group = new THREE.Group();
  const rock = {
    group,
    x,
    z,
    scale,
    hits: IRON_ROCK_HITS,
    hitsMax: IRON_ROCK_HITS,
    broken: false,
    regrow: 0,
    shake: 0,
    sway: Math.random() * Math.PI * 2
  };

  const main = new THREE.Mesh(new THREE.DodecahedronGeometry(0.76, 0), ironRockMaterial);
  main.position.y = 0.5;
  main.scale.set(1.05, 0.82, 0.92);
  main.rotation.y = Math.random() * Math.PI;
  main.castShadow = true;
  main.receiveShadow = true;
  group.add(main);

  const chunk = new THREE.Mesh(new THREE.DodecahedronGeometry(0.42, 0), ironRockLightMaterial);
  chunk.position.set(0.48, 0.26, 0.2);
  chunk.scale.set(1, 0.75, 0.9);
  chunk.rotation.y = Math.random() * Math.PI;
  chunk.castShadow = true;
  chunk.receiveShadow = true;
  group.add(chunk);

  const chunk2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.3, 0), ironRockMaterial);
  chunk2.position.set(-0.46, 0.2, -0.26);
  chunk2.rotation.y = Math.random() * Math.PI;
  chunk2.castShadow = true;
  group.add(chunk2);

  const oreSpots = [
    [-0.33, 0.53, 0.63, 1.5, 1.1, 0.62, 0.2, 0.25, 0.45],
    [0.18, 0.62, 0.66, 1.2, 0.9, 0.55, -0.15, 0.4, -0.35],
    [0.63, 0.44, 0.25, 0.62, 1.15, 1.3, 0.3, -0.2, 0.25],
    [-0.12, 0.35, 0.69, 1.35, 0.85, 0.55, 0.4, 0.1, 0.2],
    [0.38, 0.5, -0.62, 1.2, 1, 0.7, -0.25, 0.3, -0.3]
  ];
  for (const [x, y, z, sx, sy, sz, rx, ry, rz] of oreSpots) {
    const ore = new THREE.Mesh(ironOreGeometry, ironStreakMaterial);
    ore.position.set(x, y, z);
    ore.scale.set(sx, sy, sz);
    ore.rotation.set(rx, ry, rz);
    ore.castShadow = true;
    group.add(ore);
  }

  group.position.set(x, getGroundHeight(x, z), z);
  group.rotation.y = Math.random() * Math.PI * 2;
  group.scale.setScalar(scale);
  group.traverse((part) => { part.userData.rockRef = rock; });
  world.add(group);
  ironRocks.push(rock);
  solidProps.push({ x, z, radius: 0.56 * scale, rock });
  return rock;
}

function findRockSpot(x, z, scale) {
  if (Math.hypot(x, z) < 10.5) return false;
  if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 1.9 * scale)) return false;
  if (berryBushes.some((bush) => Math.hypot(bush.x - x, bush.z - z) < 2 * scale)) return false;
  if (ironRocks.some((rock) => Math.hypot(rock.x - x, rock.z - z) < 2.2 * scale)) return false;
  return true;
}

const rockClusters = [
  [17, -8], [-19, 12], [10, 24], [-25, -16], [26, 14], [-13, -24]
];
for (const [clusterX, clusterZ] of rockClusters) {
  let placed = 0;
  for (let attempt = 0; attempt < 18 && placed < 2; attempt += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 2.7;
    const x = clusterX + Math.cos(angle) * radius;
    const z = clusterZ + Math.sin(angle) * radius;
    const scale = 0.88 + Math.random() * 0.38;
    if (!findRockSpot(x, z, scale)) continue;
    createIronRock(x, z, scale);
    placed += 1;
  }
}

// ---------- Upgrade machine ----------

const machine = new THREE.Group();
const machineParts = {};
const machineSmokePuffs = [];
const machineGears = [];

const machineBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x66757d, emissive: 0x172126, emissiveIntensity: 0.32, roughness: 0.46, metalness: 0.5 });
const machineDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x3d4a51, emissive: 0x101a1e, emissiveIntensity: 0.3, roughness: 0.5, metalness: 0.48 });
const machineWoodMaterial = new THREE.MeshStandardMaterial({ color: 0x835427, emissive: 0x241204, emissiveIntensity: 0.28, roughness: 0.84, metalness: 0.03 });
const machineWoodDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x5d381a, emissive: 0x1b0e04, emissiveIntensity: 0.25, roughness: 0.9 });
const machinePanelMaterial = new THREE.MeshStandardMaterial({
  color: 0x332013,
  emissive: 0xff7a1d,
  emissiveIntensity: 0.7,
  roughness: 0.4,
  metalness: 0.25
});

{
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.5, 1.4, 1.14, 2, 0.07), machineBodyMaterial);
  body.position.y = 0.85;
  body.castShadow = true;
  body.receiveShadow = true;
  machine.add(body);

  const base = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.22, 1.3), machineDarkMaterial);
  base.position.y = 0.12;
  base.castShadow = true;
  base.receiveShadow = true;
  machine.add(base);

  const rim = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.1, 1.2), machineDarkMaterial);
  rim.position.y = 1.56;
  rim.castShadow = true;
  machine.add(rim);

  const hopper = new THREE.Mesh(new THREE.CylinderGeometry(0.64, 0.34, 0.68, 4), machineWoodMaterial);
  hopper.position.y = 1.88;
  hopper.rotation.y = Math.PI / 4;
  hopper.castShadow = true;
  hopper.receiveShadow = true;
  machine.add(hopper);

  const hopperRim = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.1, 0.98), machineWoodDarkMaterial);
  hopperRim.position.y = 2.22;
  hopperRim.rotation.y = Math.PI / 4;
  hopperRim.castShadow = true;
  machine.add(hopperRim);

  const hopperHole = new THREE.Mesh(
    new THREE.BoxGeometry(0.66, 0.03, 0.66),
    new THREE.MeshStandardMaterial({ color: 0x120d08, roughness: 1 })
  );
  hopperHole.position.y = 2.27;
  hopperHole.rotation.y = Math.PI / 4;
  machine.add(hopperHole);

  const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.15, 0.86, 6), machineDarkMaterial);
  chimney.position.set(0.66, 2.4, -0.4);
  chimney.castShadow = true;
  machine.add(chimney);

  const chimneyCap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.12, 6), machineBodyMaterial);
  chimneyCap.position.set(0.66, 2.86, -0.4);
  chimneyCap.castShadow = true;
  machine.add(chimneyCap);

  const panelBack = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.66, 0.08), machineDarkMaterial);
  panelBack.position.set(0, 0.9, 0.59);
  machine.add(panelBack);

  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.5, 0.045), machinePanelMaterial);
  panel.position.set(0, 0.9, 0.64);
  machine.add(panel);

  for (const side of [-1, 1]) {
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.075, 6), machineBodyMaterial);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(side * 0.28, 1.18, 0.665);
    machine.add(bolt);
    const boltLow = bolt.clone();
    boltLow.position.y = 0.62;
    machine.add(boltLow);
  }

  for (const [index, side] of [[0, -1], [1, 1]]) {
    const gear = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 8), machineBodyMaterial);
    gear.rotation.z = Math.PI / 2;
    gear.position.set(side * 0.8, 0.72 + index * 0.32, 0.12);
    gear.castShadow = true;
    machine.add(gear);
    machineGears.push(gear);
  }

  const glow = new THREE.PointLight(0xff8b2e, 0.95, 8.5, 2);
  glow.position.set(0, 1.2, 0.95);
  machine.add(glow);

  for (let i = 0; i < 6; i += 1) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.1 + i * 0.012, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0xc4cfcb, transparent: true, opacity: 0, depthWrite: false })
    );
    puff.position.set(0.66, 2.98 + i * 0.28, -0.4);
    machine.add(puff);
    machineSmokePuffs.push(puff);
  }

  machineParts.body = body;
  machineParts.panel = panel;
  machineParts.glow = glow;
  machineParts.hopper = hopper;
}

machine.position.set(MACHINE_POSITION.x, getGroundHeight(MACHINE_POSITION.x, MACHINE_POSITION.z), MACHINE_POSITION.z);
machine.rotation.y = -1.28;
machine.traverse((part) => { part.userData.machineRef = true; });
world.add(machine);
solidProps.push({ x: MACHINE_POSITION.x, z: MACHINE_POSITION.z, radius: 0.96, type: 'machine' });

const machineState = {
  fuel: 0,
  working: null,
  progress: 0,
  stalled: false,
  statusTimer: 0,
  smokeTimer: 0,
  gearAngle: 0,
  clankTimer: 0
};

// ---------- Iron walls ----------

const placedWalls = [];
const ironWallMaterial = new THREE.MeshStandardMaterial({ color: 0x66747c, roughness: 0.42, metalness: 0.62 });
const ironWallEdgeMaterial = new THREE.MeshStandardMaterial({ color: 0x9aa9b1, roughness: 0.34, metalness: 0.7 });

function createIronWall(index) {
  const angles = [-1.2, 0.85, 2.65, -2.5, 0.18, 3.6, -0.2, 1.9];
  const angle = angles[index % angles.length];
  const radius = 3.15;
  const x = campfire.position.x + Math.sin(angle) * radius;
  const z = campfire.position.z + Math.cos(angle) * radius;

  const group = new THREE.Group();
  for (let i = 0; i < 3; i += 1) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.52, 1.02, 0.16), ironWallMaterial);
    panel.position.set((i - 1) * 0.54, 0.54, 0);
    panel.castShadow = true;
    panel.receiveShadow = true;
    group.add(panel);

    const band = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.1, 0.19), ironWallEdgeMaterial);
    band.position.set((i - 1) * 0.54, 0.88, 0);
    band.castShadow = true;
    group.add(band);
  }

  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.2, 0.24), ironWallEdgeMaterial);
    post.position.set(side * 0.88, 0.6, 0);
    post.castShadow = true;
    group.add(post);
  }

  group.position.set(x, getGroundHeight(x, z), z);
  group.rotation.y = angle + Math.PI / 2;
  world.add(group);
  placedWalls.push({ group, x, z, rotation: group.rotation.y, width: 1.95, depth: 0.3 });
}

function resetPlacedWalls() {
  for (const wall of placedWalls) world.remove(wall.group);
  placedWalls.length = 0;
}

function resetIronRocks() {
  for (const rock of ironRocks) {
    rock.broken = false;
    rock.hits = rock.hitsMax;
    rock.regrow = 0;
    rock.shake = 0;
    rock.group.visible = true;
    rock.group.scale.setScalar(rock.scale);
    rock.group.rotation.z = 0;
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
const MACHINE_INTERACT_RANGE = 2.7;
const MACHINE_CLOSE_ITEM_RANGE = 1.45;
const MACHINE_FUEL_MAX = 100;
const MACHINE_WOOD_FUEL = 25;
const MACHINE_FUEL_DRAIN = 4;
const IRON_REGROW_MIN = 28;
const IRON_REGROW_MAX = 44;
const ITEM_NAMES = {
  wood: 'Wood log',
  sapling: 'Sapling',
  berry: 'Berry',
  iron: 'Iron piece',
  pickaxe: 'Pickaxe',
  ironAxe: 'Iron Axe',
  ironSword: 'Iron Sword',
  ironWall: 'Iron Wall',
  biggerCampfire: 'Bigger Campfire'
};
const FUEL_VALUES = { wood: LOG_FUEL_VALUE, sapling: 12, berry: 5 };
const FIRE_FUEL_TYPES = new Set(['wood', 'sapling', 'berry']);
const UPGRADE_ORDER = ['ironAxe', 'pickaxe', 'ironSword', 'ironWall', 'biggerCampfire'];
const UPGRADES = {
  ironAxe: {
    name: 'Iron Axe',
    cost: { wood: 6, iron: 3 },
    time: 10,
    desc: 'Chops faster and hits harder.'
  },
  pickaxe: {
    name: 'Pickaxe',
    cost: { wood: 4, iron: 1 },
    time: 10,
    desc: 'Mine iron rocks at the forest edge.'
  },
  ironSword: {
    name: 'Iron Sword',
    cost: { wood: 5, iron: 5 },
    time: 10,
    desc: 'Strong melee blade for monsters.'
  },
  ironWall: {
    name: 'Iron Wall',
    cost: { wood: 8, iron: 6 },
    time: 10,
    desc: 'Places a sturdy wall by the campfire.'
  },
  biggerCampfire: {
    name: 'Bigger Campfire',
    cost: { wood: 10, iron: 5 },
    time: 10,
    desc: 'Wider light and scare radius.'
  }
};
const TOOL_STATS = {
  axe: { cooldown: 0.58, damage: 1, treePower: 1, rockPower: 0, range: 3.3, reach: 2.5 },
  pickaxe: { cooldown: 0.5, damage: 1, treePower: 0, rockPower: 1, range: 3, reach: 2.5 },
  ironAxe: { cooldown: 0.4, damage: 2, treePower: 2, rockPower: 0, range: 3.5, reach: 2.8 },
  ironSword: { cooldown: 0.42, damage: 3, treePower: 0, rockPower: 0, range: 3.6, reach: 2.8 }
};
const TOOL_ORDER = ['axe', 'backpack', 'pickaxe', 'ironAxe', 'ironSword'];
let interactPrompt = 'INTERACT';
let toastTimer = 0;
let lastInventorySignature = '';


function getCampfireDistance() {
  return Math.hypot(
    player.position.x - campfire.position.x,
    player.position.z - campfire.position.z
  );
}

function getMachineDistance() {
  return Math.hypot(
    player.position.x - MACHINE_POSITION.x,
    player.position.z - MACHINE_POSITION.z
  );
}

function getFireScareRadius() {
  return FIRE_SCARE_RADIUS + state.fireLevel * 2.4;
}

function getCampfireSafeRadius() {
  return 7 + state.fireLevel * 1.5;
}

function isUpgradeType(type) {
  return type === 'pickaxe' || type === 'ironAxe' || type === 'ironSword'
    || type === 'ironWall' || type === 'biggerCampfire';
}

function isToolType(tool) {
  return tool === 'axe' || tool === 'pickaxe' || tool === 'ironAxe' || tool === 'ironSword';
}

function canChopTool(tool) {
  const stats = TOOL_STATS[tool];
  return !!stats && stats.treePower > 0;
}

function canMineTool(tool) {
  const stats = TOOL_STATS[tool];
  return !!stats && stats.rockPower > 0;
}

function updateInteractionTarget() {
  state.fireInReach = getCampfireDistance() <= FIRE_FEED_RANGE;
  state.machineInReach = state.started && getMachineDistance() <= MACHINE_INTERACT_RANGE;
  state.targetTree = null;
  state.targetRock = null;
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

  let rockClosest = TREE_INTERACT_RANGE * TREE_INTERACT_RANGE;
  for (const rock of ironRocks) {
    if (rock.broken) continue;
    const dx = player.position.x - rock.x;
    const dz = player.position.z - rock.z;
    const distanceSq = dx * dx + dz * dz;
    if (distanceSq < rockClosest) {
      rockClosest = distanceSq;
      state.targetRock = rock;
    }
  }
}

function getInteractAction() {
  if (!state.started || state.gameOver || state.falling || state.paused) return null;

  const nearbyItem = findNearestGroundItem(PICKUP_RANGE);
  const closeItem = findNearestGroundItem(MACHINE_CLOSE_ITEM_RANGE);
  const fuelLow = state.fuel < 99.5;
  const carriedFuel = carriedItems.some((item) => FIRE_FUEL_TYPES.has(item.type));

  const itemAction = (item) => ({
    type: 'pickup',
    label: isUpgradeType(item.type) ? 'COLLECT' : 'PICK UP',
    item
  });

  if (state.fireInReach && carriedFuel && fuelLow && !state.machineInReach) {
    return { type: 'fireThrow', label: 'THROW IN FIRE' };
  }
  if (closeItem) {
    return itemAction(closeItem);
  }
  if (state.machineInReach) {
    return { type: 'machine', label: 'USE MACHINE' };
  }
  if (nearbyItem) {
    return itemAction(nearbyItem);
  }
  if (carriedItems.some((item) => item.type === 'sapling')) {
    return { type: 'plant', label: 'PLANT SAPLING' };
  }
  if (canMineTool(state.equippedTool) && state.targetRock) {
    return { type: 'mine', label: 'MINE IRON', rock: state.targetRock };
  }
  if (canChopTool(state.equippedTool) && state.targetTree) {
    return { type: 'chop', label: 'CHOP', tree: state.targetTree };
  }
  if (state.fireInReach && backpackFuelCount() > 0) {
    return { type: fuelLow ? 'fireFeed' : 'fireFull', label: fuelLow ? 'FEED FIRE' : 'FIRE FULL' };
  }
  if (state.fireInReach && carriedFuel) {
    return { type: 'fireFull', label: 'FIRE FULL' };
  }
  return null;
}

function updateInteractPrompt() {
  const action = getInteractAction();
  const label = action ? action.label : 'INTERACT';

  if (label !== interactPrompt) {
    interactPrompt = label;
    interactLabel.textContent = label;
    const ready = !!action && action.type !== 'fireFull' && action.type !== 'machine';
    const machineReady = !!action && action.type === 'machine';
    interactBtn.classList.toggle('ready', ready);
    interactBtn.classList.toggle('machine', machineReady);
  }
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('visible');
  toastTimer = 1.5;
}

function createIronPieceMesh(scale = 1) {
  const piece = new THREE.Group();
  const chunk = new THREE.Mesh(new THREE.DodecahedronGeometry(0.17, 0), ironRockLightMaterial);
  chunk.scale.set(1.15, 0.8, 0.9);
  chunk.castShadow = true;
  piece.add(chunk);

  const chunk2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.11, 0), ironRockMaterial);
  chunk2.position.set(0.12, 0.02, 0.09);
  chunk2.castShadow = true;
  piece.add(chunk2);

  const ore = new THREE.Mesh(ironOreGeometry, ironStreakMaterial);
  ore.scale.set(1.35, 0.92, 0.55);
  ore.position.set(-0.035, 0.055, 0.12);
  ore.rotation.set(0.3, 0.25, 0.4);
  piece.add(ore);

  piece.scale.setScalar(scale);
  return piece;
}

function createIronWallItemMesh() {
  const wall = new THREE.Group();
  for (let i = 0; i < 3; i += 1) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.68, 0.09), ironWallMaterial);
    panel.position.set((i - 1) * 0.35, 0.35, 0);
    panel.castShadow = true;
    wall.add(panel);
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.07, 0.11), ironWallEdgeMaterial);
    band.position.set((i - 1) * 0.35, 0.58, 0);
    wall.add(band);
  }
  return wall;
}

function createBiggerCampfireItemMesh() {
  const upgrade = new THREE.Group();
  for (let i = 0; i < 4; i += 1) {
    const log = new THREE.Mesh(logGeometry, logMaterial);
    log.scale.setScalar(0.7);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = (i / 4) * Math.PI;
    log.position.y = 0.1;
    log.castShadow = true;
    upgrade.add(log);
  }
  const ember = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 6, 5),
    new THREE.MeshBasicMaterial({ color: 0xff9a3c })
  );
  ember.position.y = 0.22;
  upgrade.add(ember);
  return upgrade;
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
  } else if (type === 'berry') {
    mesh = createBerryMesh(1);
    mesh.rotation.y = Math.random() * Math.PI * 2;
  } else if (type === 'iron') {
    mesh = createIronPieceMesh(1.2);
    mesh.rotation.y = Math.random() * Math.PI * 2;
  } else if (type === 'pickaxe') {
    mesh = createHeldPickaxe();
    mesh.scale.setScalar(0.78);
    mesh.rotation.set(0.08, Math.random() * Math.PI * 2, -0.06);
  } else if (type === 'ironAxe') {
    mesh = createHeldIronAxe();
    mesh.scale.setScalar(0.8);
    mesh.rotation.set(0.08, Math.random() * Math.PI * 2, -0.06);
  } else if (type === 'ironSword') {
    mesh = createHeldIronSword();
    mesh.scale.setScalar(0.68);
    mesh.rotation.set(0.05, Math.random() * Math.PI * 2, 0.04);
  } else if (type === 'ironWall') {
    mesh = createIronWallItemMesh();
    mesh.rotation.y = Math.random() * Math.PI * 2;
  } else if (type === 'biggerCampfire') {
    mesh = createBiggerCampfireItemMesh();
    mesh.rotation.y = Math.random() * Math.PI * 2;
  } else {
    mesh = createBerryMesh(1);
  }
  return mesh;
}

function spawnGroundItem(type, x, z, options = {}) {
  const mesh = makeGroundItemMesh(type);
  const groundY = getGroundHeight(x, z);
  const isHeldUpgrade = type === 'pickaxe' || type === 'ironAxe' || type === 'ironSword';
  const restY = type === 'wood'
    ? 0.17
    : type === 'berry'
      ? 0.14
      : type === 'iron'
        ? 0.13
        : isHeldUpgrade
          ? 0.5
          : 0.02;
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

const STARTER_IRON_SPOTS = [
  { x: MACHINE_POSITION.x - 1.55, z: MACHINE_POSITION.z - 1.15 },
  { x: MACHINE_POSITION.x - 1.25, z: MACHINE_POSITION.z + 1.35 },
  { x: MACHINE_POSITION.x + 1.75, z: MACHINE_POSITION.z - 1.35 },
  { x: MACHINE_POSITION.x + 1.95, z: MACHINE_POSITION.z + 0.9 }
];

function spawnStarterIron() {
  for (const spot of STARTER_IRON_SPOTS) {
    const x = spot.x;
    const z = spot.z;
    const alreadyThere = groundItems.some((item) => (
      item.type === 'iron'
      && !item.carried
      && item.popping <= 0
      && Math.hypot(item.x - x, item.z - z) < 0.7
    ));
    if (alreadyThere) continue;
    spawnGroundItem('iron', x, z, {
      startY: getGroundHeight(x, z) + 0.45,
      velocityY: 1.4,
      pickupDelay: 0.25
    });
  }
}

function resetGroundItems() {
  for (const item of groundItems) world.remove(item.mesh);
  groundItems.length = 0;
  carriedItems.length = 0;
  regrowBerries();
  spawnStarterIron();
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
  return state.backpack.wood + state.backpack.sapling + state.backpack.berry + state.backpack.iron;
}

function backpackFuelCount() {
  return state.backpack.wood + state.backpack.sapling + state.backpack.berry;
}

function ownedCount(type) {
  return state.backpack[type] + carriedItems.filter((item) => item.type === type).length;
}

function availableCount(type) {
  return ownedCount(type);
}

function isBackpackEquipped() {
  return state.equippedTool === 'backpack';
}

function addItemToBackpack(item) {
  if (!item || item.popping > 0) return false;
  if (!Object.prototype.hasOwnProperty.call(state.backpack, item.type)) return false;
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
  playPickupSound();
  showToast(`+1 ${ITEM_NAMES[item.type]}`);
  return true;
}

function applyBiggerCampfire() {
  state.fireLevel += 1;
  const scale = 1 + Math.min(state.fireLevel, 5) * 0.14;
  campfire.scale.setScalar(scale);
  fireGlow.distance = 15 + state.fireLevel * 4.5;
  warmLight.distance = 20 + state.fireLevel * 5;
  showToast('The campfire grows brighter');
  playUpgradeChime();
}

function collectUpgradeItem(item) {
  if (!item || item.popping > 0) return false;
  const type = item.type;
  popGroundItem(item);

  if (type === 'ironWall') {
    createIronWall(placedWalls.length);
    showToast('Iron Wall placed by the campfire');
  } else if (type === 'biggerCampfire') {
    applyBiggerCampfire();
  } else if (isToolType(type)) {
    state.ownedTools[type] = true;
    updateHud();
    updateToolUi();
    showToast(`Collected ${ITEM_NAMES[type]}`);
    playUpgradeChime();
    equipTool(type);
    return true;
  }

  updateHud();
  playPickupSound();
  return true;
}

function pickUpItem(item) {
  if (!item || item.carried || item.popping > 0) return false;
  if (isUpgradeType(item.type)) {
    return collectUpgradeItem(item);
  }
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
  playPickupSound();
  showToast(`Picked up ${ITEM_NAMES[item.type]}`);
  return true;
}

function dropCarriedItems() {
  if (!state.started || state.gameOver || state.falling || state.paused
    || state.machineOpen || state.settingsOpen || state.dropCooldown > 0) return;

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

  const type = ['wood', 'sapling', 'berry', 'iron'].find((candidate) => state.backpack[candidate] > 0);
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
  const items = carriedItems.filter((item) => FIRE_FUEL_TYPES.has(item.type));
  if (items.length === 0) return;
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

function chopTree(tree, power = 1) {
  const data = tree.userData;
  data.shake = TREE_SHAKE_TIME;
  state.chopTimer = 0.3;
  state.interactCooldown = 0.34;
  player.rotation.y = Math.atan2(
    tree.position.x - player.position.x,
    tree.position.z - player.position.z
  );

  data.hits -= power;
  playTreeThud();
  if (data.hits <= 0) fellTree(tree);
}

function mineIronRock(rock, power = 1) {
  if (!rock || rock.broken) return;
  if (!canMineTool(state.equippedTool)) {
    showToast('Equip the pickaxe to mine iron');
    return;
  }

  player.rotation.y = Math.atan2(rock.x - player.position.x, rock.z - player.position.z);
  state.chopTimer = 0.3;
  state.interactCooldown = 0.34;
  rock.hits -= power;
  rock.shake = 0.3;

  if (rock.hits > 0) {
    playRockClink();
    showToast('The rock cracks');
    return;
  }

  rock.broken = true;
  rock.regrow = IRON_REGROW_MIN + Math.random() * (IRON_REGROW_MAX - IRON_REGROW_MIN);
  rock.group.visible = false;
  playRockBreak();

  const dropCount = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < dropCount; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 0.55 + Math.random() * 0.55;
    const x = rock.x + Math.cos(angle) * distance;
    const z = rock.z + Math.sin(angle) * distance;
    spawnGroundItem('iron', x, z, {
      startY: getGroundHeight(x, z) + 0.5,
      velocityY: 2.2 + Math.random() * 0.5,
      pickupDelay: 0.4
    });
  }
  updateHud();
  showToast(`Mined ${dropCount} iron`);
}

function updateIronRocks(delta) {
  for (const rock of ironRocks) {
    if (rock.broken) {
      rock.regrow = Math.max(0, rock.regrow - delta);
      if (rock.regrow <= 0) {
        rock.broken = false;
        rock.hits = rock.hitsMax;
        rock.group.visible = true;
        rock.group.scale.setScalar(rock.scale * 0.6);
        showToast('An iron rock has regrown');
      }
      continue;
    }

    if (rock.shake > 0) {
      rock.shake = Math.max(0, rock.shake - delta);
      const strength = rock.shake / 0.3;
      const t = performance.now() * 0.001;
      rock.group.rotation.z = Math.sin(t * 48) * 0.04 * strength;
    } else {
      rock.group.rotation.z = 0;
    }

    const damageScale = 0.82 + (rock.hits / rock.hitsMax) * 0.18;
    const targetScale = rock.scale * damageScale;
    if (rock.group.scale.x < targetScale) {
      rock.group.scale.setScalar(Math.min(targetScale, rock.group.scale.x + delta * 1.6));
    } else if (rock.group.scale.x > targetScale) {
      rock.group.scale.setScalar(Math.max(targetScale, rock.group.scale.x - delta * 1.6));
    }
  }
}

// ---------- Upgrade machine ----------

function canAffordUpgrade(upgrade) {
  return availableCount('wood') >= upgrade.cost.wood && availableCount('iron') >= upgrade.cost.iron;
}

function missingUpgradeText(upgrade) {
  const missing = [];
  const wood = availableCount('wood');
  const iron = availableCount('iron');
  if (wood < upgrade.cost.wood) {
    missing.push(`${upgrade.cost.wood - wood} wood`);
  }
  if (iron < upgrade.cost.iron) {
    missing.push(`${upgrade.cost.iron - iron} iron`);
  }
  return missing.join(' + ');
}

function spendResource(type, amount) {
  let remaining = amount;
  const fromBackpack = Math.min(state.backpack[type], remaining);
  state.backpack[type] -= fromBackpack;
  remaining -= fromBackpack;
  while (remaining > 0) {
    const carriedIndex = carriedItems.findIndex((item) => item.type === type);
    if (carriedIndex < 0) break;
    popGroundItem(carriedItems[carriedIndex]);
    remaining -= 1;
  }
  return amount - remaining;
}

function buildUpgradeOptions() {
  if (upgradeGrid.childElementCount > 0) return;
  for (const key of UPGRADE_ORDER) {
    const upgrade = UPGRADES[key];
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'upgrade-card';
    card.dataset.upgrade = key;

    const name = document.createElement('span');
    name.className = 'upgrade-name';
    name.textContent = upgrade.name;

    const cost = document.createElement('span');
    cost.className = 'upgrade-cost';
    cost.dataset.cost = `${upgrade.cost.wood} wood · ${upgrade.cost.iron} iron`;

    const desc = document.createElement('span');
    desc.className = 'upgrade-desc';
    desc.textContent = upgrade.desc;

    card.append(name, cost, desc);
    card.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      startUpgrade(key);
    });
    upgradeGrid.appendChild(card);
  }
}

function updateMachinePanel() {
  const job = machineState.working ? UPGRADES[machineState.working] : null;
  const fuelPercent = Math.round(machineState.fuel);
  machineFuelText.textContent = `${fuelPercent}%`;
  machineFuelFill.style.width = `${fuelPercent}%`;

  machineStatus.classList.remove('working', 'stalled', 'ready');
  if (job) {
    machineJob.classList.remove('hidden');
    machineJobName.textContent = job.name;
    const remaining = Math.max(0, job.time - machineState.progress);
    machineJobTime.textContent = machineState.stalled ? 'OUT OF FUEL' : `${remaining.toFixed(1)}s`;
    machineJobFill.style.width = `${clamp(machineState.progress / job.time, 0, 1) * 100}%`;
    if (machineState.stalled) {
      machineStatus.textContent = 'Out of fuel - add wood';
      machineStatus.classList.add('stalled');
    } else {
      machineStatus.textContent = `${job.name} working`;
      machineStatus.classList.add('working');
    }
  } else {
    machineJob.classList.add('hidden');
    machineJobFill.style.width = '0%';
    if (machineState.statusTimer > 0) {
      machineStatus.textContent = machineState.statusText || 'Idle';
      if ((machineState.statusText || '').includes('ready')) machineStatus.classList.add('ready');
    } else {
      machineStatus.textContent = machineState.fuel > 0 ? 'Ready for a new upgrade' : 'Add wood to start';
    }
  }

  for (const card of upgradeGrid.children) {
    const key = card.dataset.upgrade;
    const upgrade = UPGRADES[key];
    if (!upgrade) continue;
    const owned = isToolType(key) && state.ownedTools[key];
    const affordable = canAffordUpgrade(upgrade);
    card.classList.toggle('owned', owned);
    card.classList.toggle('unaffordable', !owned && !affordable);
    card.classList.toggle('working', machineState.working === key);
    const cost = card.querySelector('.upgrade-cost');
    if (owned) {
      cost.textContent = 'OWNED';
      cost.classList.remove('missing');
    } else {
      cost.textContent = affordable
        ? cost.dataset.cost
        : `${cost.dataset.cost} · need ${missingUpgradeText(upgrade)}`;
      cost.classList.toggle('missing', !affordable);
    }
  }
}

function openMachinePanel() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  state.machineOpen = true;
  setInventoryOpen(false);
  setSettingsOpen(false);
  releaseJoystick();
  activePointers.clear();
  state.look.active = false;
  state.pinchDistance = 0;
  buildUpgradeOptions();
  updateMachinePanel();
  upgradePanel.classList.remove('hidden');
  updateToolUi();
  playEquipClick();
}

function closeMachinePanel() {
  state.machineOpen = false;
  upgradePanel.classList.add('hidden');
  updateToolUi();
}

function startUpgrade(key) {
  if (!state.started || state.gameOver || state.falling) return;
  const upgrade = UPGRADES[key];
  if (!upgrade) return;
  if (machineState.working) {
    showToast('The machine is already working');
    return;
  }
  if (isToolType(key) && state.ownedTools[key]) {
    showToast(`You already own the ${upgrade.name}`);
    return;
  }
  if (!canAffordUpgrade(upgrade)) {
    showToast(`Missing ${missingUpgradeText(upgrade)}`);
    return;
  }
  if (machineState.fuel <= 0) {
    showToast('Add wood to fuel the machine');
    return;
  }

  spendResource('wood', upgrade.cost.wood);
  spendResource('iron', upgrade.cost.iron);
  machineState.working = key;
  machineState.progress = 0;
  machineState.stalled = false;
  machineState.statusTimer = 0;
  machineState.clankTimer = 0.2;
  updateHud();
  updateMachinePanel();
  startMachineSound();
  playEquipClick();
  showToast(`${upgrade.name} started`);
}

function addMachineFuel() {
  if (!state.started || state.gameOver || state.falling) return;
  let source = '';

  if (state.backpack.wood > 0) {
    state.backpack.wood -= 1;
    source = 'backpack';
  } else {
    const carriedIndex = carriedItems.findIndex((item) => item.type === 'wood');
    if (carriedIndex >= 0) {
      popGroundItem(carriedItems[carriedIndex]);
      source = 'hands';
    } else {
      const nearbyWood = findNearestGroundItem(4.5, (item) => item.type === 'wood');
      if (nearbyWood) {
        popGroundItem(nearbyWood);
        source = 'ground';
      }
    }
  }

  if (!source) {
    showToast('No wood to feed the machine');
    return;
  }

  machineState.fuel = clamp(machineState.fuel + MACHINE_WOOD_FUEL, 0, MACHINE_FUEL_MAX);
  if (machineState.working && machineState.stalled) {
    machineState.stalled = false;
    startMachineSound();
  }
  updateHud();
  updateMachinePanel();
  playPickupSound();
  showToast(`Machine fuel +${MACHINE_WOOD_FUEL}%`);
}

function completeUpgrade() {
  const key = machineState.working;
  if (!key) return;
  const upgrade = UPGRADES[key];
  machineState.working = null;
  machineState.progress = 0;
  machineState.stalled = false;
  machineState.statusText = `${upgrade.name} ready!`;
  machineState.statusTimer = 6;
  stopMachineSound();
  playUpgradeDing();

  const forwardX = Math.sin(machine.rotation.y);
  const forwardZ = Math.cos(machine.rotation.y);
  const x = MACHINE_POSITION.x + forwardX * 1.35;
  const z = MACHINE_POSITION.z + forwardZ * 1.35;
  spawnGroundItem(key, x, z, {
    startY: getGroundHeight(x, z) + 1.15,
    velocityY: 2.4,
    pickupDelay: 0.65
  });
  showToast(`${upgrade.name} is ready to collect`);
  updateHud();
  updateMachinePanel();
}

function updateMachine(delta) {
  const job = machineState.working ? UPGRADES[machineState.working] : null;
  const burning = !!job && machineState.fuel > 0 && !machineState.stalled;

  if (job && !machineState.stalled) {
    if (machineState.fuel > 0) {
      machineState.fuel = Math.max(0, machineState.fuel - delta * MACHINE_FUEL_DRAIN);
      machineState.progress += delta;
      machineState.clankTimer -= delta;
      if (machineState.clankTimer <= 0) {
        playMachineClank();
        machineState.clankTimer = 0.42 + Math.random() * 0.38;
      }

      if (machineState.fuel <= 0 && machineState.progress < job.time) {
        machineState.stalled = true;
        machineState.statusText = 'Out of fuel';
        machineState.statusTimer = 3;
        stopMachineSound();
        showToast('Machine is out of fuel - add wood');
      } else if (machineState.progress >= job.time) {
        completeUpgrade();
      }
    }
  }

  if (machineState.statusTimer > 0) {
    machineState.statusTimer = Math.max(0, machineState.statusTimer - delta);
  }

  const t = performance.now() * 0.001;
  machinePanelMaterial.emissiveIntensity = burning
    ? 1.15 + Math.sin(t * 11) * 0.25
    : 0.62 + Math.sin(t * 2.2) * 0.1;
  machineParts.glow.intensity = burning
    ? 1.8 + Math.sin(t * 13) * 0.35
    : 0.8 + Math.sin(t * 2.4) * 0.1;

  if (burning) {
    machineState.gearAngle += delta * 2.6;
    machineGears[0].rotation.x = machineState.gearAngle;
    machineGears[1].rotation.x = -machineState.gearAngle * 0.7;
  }

  for (let i = 0; i < machineSmokePuffs.length; i += 1) {
    const puff = machineSmokePuffs[i];
    if (burning) {
      const phase = (t * 0.32 + i / machineSmokePuffs.length) % 1;
      puff.position.set(
        0.66 + Math.sin(t * 1.1 + i) * 0.1,
        2.9 + phase * 1.55,
        -0.4 + Math.cos(t * 1.3 + i) * 0.1
      );
      puff.scale.setScalar(0.85 + phase * 1.65);
      puff.material.opacity = 0.24 * (1 - phase);
    } else {
      puff.material.opacity = Math.max(0, puff.material.opacity - delta * 0.25);
    }
  }

  if (state.machineOpen) updateMachinePanel();
}

// ---------- Interaction ----------

function interact() {
  if (!state.started || state.gameOver || state.falling || state.paused
    || state.machineOpen || state.settingsOpen || state.interactCooldown > 0) return;

  const action = getInteractAction();
  if (!action) return;

  switch (action.type) {
    case 'fireThrow':
      throwCarriedIntoFire();
      break;
    case 'pickup':
      if (pickUpItem(action.item)) state.interactCooldown = 0.32;
      break;
    case 'machine':
      openMachinePanel();
      break;
    case 'plant':
      plantSapling();
      break;
    case 'mine':
      mineIronRock(action.rock);
      state.interactCooldown = 0.34;
      break;
    case 'chop':
      chopTree(action.tree, TOOL_STATS[state.equippedTool]?.treePower ?? 1);
      break;
    case 'fireFeed':
      feedFireFromBackpack();
      break;
    case 'fireFull':
      showToast('The fire is already full');
      break;
    default:
      break;
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
      const distance = 0.95;
      const targetX = player.position.x + Math.sin(angle) * distance;
      const targetZ = player.position.z + Math.cos(angle) * distance;
      const targetY = getGroundHeight(targetX, targetZ) + 0.52 + index * 0.06
        + Math.sin(now * 0.003 + index) * 0.04;
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
  data.hits = TREE_HITS_BASE;
  data.hitsMax = TREE_HITS_BASE;
  data.shake = 0;
  data.highlight = 0;
  tree.visible = true;
  tree.quaternion.identity();
  data.trunk.material = data.trunk.material.clone();
  data.trunk.material.emissive = new THREE.Color(0xffb15a);
  data.trunk.material.emissiveIntensity = 0;
}

function plantSapling() {
  if (!state.started || state.gameOver || state.falling || state.paused
    || state.machineOpen || state.settingsOpen || state.plantCooldown > 0) return;
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
  const sapling = {
    mesh,
    x,
    z,
    growth: 0,
    sway: Math.random() * Math.PI * 2
  };
  mesh.userData.saplingRef = sapling;
  plantedSaplings.push(sapling);
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
        playTreeCrash();
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
  enemy.userData.enemyRef = enemy;
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
// Soft round ember sprite so points never read as hard squares up close.
function createSparkTexture() {
  const size = 32;
  const canvasEl = document.createElement('canvas');
  canvasEl.width = size;
  canvasEl.height = size;
  const ctx = canvasEl.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.35, 'rgba(255, 224, 160, 0.95)');
  gradient.addColorStop(0.7, 'rgba(255, 168, 66, 0.45)');
  gradient.addColorStop(1, 'rgba(255, 140, 40, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const sparkMaterial = new THREE.PointsMaterial({
  color: 0xffc36b,
  size: 0.065,
  map: createSparkTexture(),
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
  cameraDistance: THIRD_PERSON_DISTANCE,
  firstPerson: false,
  viewBlend: 0,
  cameraInitialized: false,
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
  backpack: { wood: 0, sapling: 0, berry: 0, iron: 0 },
  ownedTools: { axe: true, pickaxe: false, ironAxe: false, ironSword: false },
  equippedTool: null,
  equipTimer: 0,
  inventoryOpen: false,
  machineOpen: false,
  settingsOpen: false,
  machineInReach: false,
  fireLevel: 0,
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
  targetRock: null,
  falling: 0,
  invuln: 0,
  hitEffectTimer: 0,
};

// Restore the player's last camera choice. A fresh game starts in third-person.
try {
  const savedView = window.localStorage.getItem(CAMERA_VIEW_STORAGE_KEY);
  if (savedView === 'first') {
    state.firstPerson = true;
    state.viewBlend = 1;
  }
} catch (error) {
  // Storage can be blocked; third-person remains the default.
}

function setFirstPerson(first, announce = true) {
  state.firstPerson = !!first;
  if (cameraBtn) {
    cameraBtn.classList.toggle('first-person', state.firstPerson);
    cameraBtn.setAttribute('aria-pressed', String(state.firstPerson));
    cameraBtn.setAttribute(
      'aria-label',
      state.firstPerson ? 'Switch to third-person view' : 'Switch to first-person view'
    );
  }
  try {
    window.localStorage.setItem(CAMERA_VIEW_STORAGE_KEY, state.firstPerson ? 'first' : 'third');
  } catch (error) {
    // Ignore storage failures.
  }
  if (announce) showToast(state.firstPerson ? 'First-person view' : 'Third-person view');
}

function toggleCameraView() {
  setFirstPerson(!state.firstPerson);
  playEquipClick();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function lerpAngle(current, target, amount) {
  let delta = target - current;
  delta = Math.atan2(Math.sin(delta), Math.cos(delta));
  return current + delta * amount;
}

function updateHud() {
  nightText.textContent = `${state.night} / ${state.maxNight}`;
  woodText.textContent = String(ownedCount('wood'));
  saplingText.textContent = String(ownedCount('sapling'));
  berryText.textContent = String(ownedCount('berry'));
  ironText.textContent = String(ownedCount('iron'));
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
  const slots = [
    ['axe', axeSlot],
    ['backpack', backpackSlot],
    ['pickaxe', pickaxeSlot],
    ['ironAxe', ironAxeSlot],
    ['ironSword', ironSwordSlot]
  ];

  for (const [tool, slot] of slots) {
    const owned = tool === 'backpack' || !!state.ownedTools[tool];
    const equipped = state.equippedTool === tool;
    slot.classList.toggle('hidden', !owned);
    slot.classList.toggle('equipped', equipped);
    slot.setAttribute('aria-pressed', String(equipped));
  }

  const stats = TOOL_STATS[state.equippedTool];
  const showAttack = !!stats && state.started && !state.gameOver && !state.falling
    && !state.machineOpen && !state.settingsOpen && !state.inventoryOpen;
  attackBtn.classList.toggle('visible', showAttack);
  if (canMineTool(state.equippedTool) && state.targetRock) {
    attackLabel.textContent = 'MINE';
  } else if (canChopTool(state.equippedTool) && state.targetTree) {
    attackLabel.textContent = 'CHOP';
  } else {
    attackLabel.textContent = 'ATTACK';
  }
}

function renderInventory() {
  if (!state.inventoryOpen) return;
  const signature = `${state.backpack.wood}|${state.backpack.sapling}|${state.backpack.berry}|${state.backpack.iron}`;
  if (signature === lastInventorySignature) return;
  lastInventorySignature = signature;

  inventoryList.innerHTML = '';
  const entries = [
    ['wood', 'Wood log'],
    ['sapling', 'Sapling'],
    ['berry', 'Berry'],
    ['iron', 'Iron piece']
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
    closeMachinePanel();
    setSettingsOpen(false);
    toastTimer = 0;
    toastEl.classList.remove('visible');
    lastInventorySignature = '';
    renderInventory();
  }
  updateToolUi();
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
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  if (tool !== 'backpack' && !state.ownedTools[tool]) {
    showToast(`Craft the ${ITEM_NAMES[tool] || 'tool'} first`);
    return;
  }

  if (tool === 'backpack' && state.equippedTool === 'backpack') {
    setInventoryOpen(!state.inventoryOpen);
    updateToolUi();
    return;
  }

  if (tool === state.equippedTool) {
    state.equippedTool = null;
  } else {
    state.equippedTool = tool;
  }

  closeMachinePanel();
  setSettingsOpen(false);
  if (state.equippedTool !== 'backpack') setInventoryOpen(false);
  state.equipTimer = state.equippedTool ? EQUIP_TIME : 0;
  playEquipClick();
  updateHud();
  updateToolModels();
}

function unequipTool() {
  state.equippedTool = null;
  state.equipTimer = 0;
  setInventoryOpen(false);
  closeMachinePanel();
  playEquipClick();
  updateHud();
  updateToolModels();
}

function getHeldToolModel() {
  switch (state.equippedTool) {
    case 'axe': return axe;
    case 'backpack': return handBackpack;
    case 'pickaxe': return heldPickaxe;
    case 'ironAxe': return heldIronAxe;
    case 'ironSword': return heldIronSword;
    default: return null;
  }
}

function updateToolModels() {
  axe.visible = state.equippedTool === 'axe';
  handBackpack.visible = state.equippedTool === 'backpack';
  heldPickaxe.visible = state.equippedTool === 'pickaxe';
  heldIronAxe.visible = state.equippedTool === 'ironAxe';
  heldIronSword.visible = state.equippedTool === 'ironSword';
  lantern.visible = !state.equippedTool;
}

function updateEquippedTool(delta) {
  state.equipTimer = Math.max(0, state.equipTimer - delta);
  const tool = getHeldToolModel();
  if (!tool) return;

  const baseY = tool.userData.baseY ?? tool.position.y;
  const baseScale = tool === handBackpack ? 0.92 : 1;
  if (state.equipTimer > 0) {
    const progress = 1 - state.equipTimer / EQUIP_TIME;
    const eased = 1 - (1 - progress) * (1 - progress);
    tool.scale.setScalar((0.55 + eased * 0.45) * baseScale);
    tool.position.y = baseY - (1 - eased) * 0.26;
  } else {
    tool.scale.setScalar(baseScale);
    tool.position.y = baseY;
  }
}

function updateFpToolVisibility(firstPersonActive) {
  for (const [key, model] of Object.entries(fpToolModels)) {
    model.visible = firstPersonActive && state.equippedTool === key;
  }
}

function updateFpViewmodel(delta) {
  if (!fpViewmodel.visible) return;

  let swing = 0;
  if (state.attackTimer > 0) {
    const progress = 1 - state.attackTimer / ATTACK_DURATION;
    swing = Math.sin(clamp(progress, 0, 1) * Math.PI);
  } else if (state.chopTimer > 0) {
    const progress = 1 - state.chopTimer / 0.3;
    swing = Math.sin(clamp(progress, 0, 1) * Math.PI) * 0.85;
  } else if (state.equipTimer > 0) {
    const progress = 1 - state.equipTimer / EQUIP_TIME;
    swing = -Math.sin(clamp(progress, 0, 1) * Math.PI) * 0.3;
  }

  const moving = state.moveSpeed > 0.1 && state.grounded;
  const bobSpeed = state.walkPhase;
  const swayX = moving ? Math.sin(bobSpeed) * 0.018 : Math.sin(state.idleTime * 1.7) * 0.006;
  const bobY = moving ? Math.abs(Math.cos(bobSpeed)) * 0.012 : Math.sin(state.idleTime * 1.5) * 0.004;

  const damping = 1 - Math.exp(-18 * delta);
  fpArmPivot.position.x += (FP_ARM_BASE.x + swayX - fpArmPivot.position.x) * damping;
  fpArmPivot.position.y += (FP_ARM_BASE.y + bobY - fpArmPivot.position.y) * damping;
  fpArmPivot.position.z = FP_ARM_BASE.z;
  fpArmPivot.rotation.x += (FP_ARM_BASE.rx - swing * 1.35 - fpArmPivot.rotation.x) * damping;
  fpArmPivot.rotation.y = FP_ARM_BASE.ry;
  fpArmPivot.rotation.z += (FP_ARM_BASE.rz + swing * 0.55 - fpArmPivot.rotation.z) * damping;
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

// Unified pointer handling: a short, still touch is a tap interaction; movement
// past the slop becomes a camera drag. Input from either half can tap, but only
// drags that start on the right half rotate the camera.
const activePointers = new Map();

function isUiTarget(target) {
  return !!(target && target.closest && target.closest(
    'button, #inventoryPanel, #upgradePanel, #settingsPanel, #startOverlay, '
    + '#rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone'
  ));
}

function interactionBlocked() {
  return !state.started || state.gameOver || state.falling || state.portrait
    || state.inventoryOpen || state.machineOpen || state.settingsOpen;
}

window.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (isUiTarget(event.target)) return;
  if (!state.started || state.gameOver || state.falling || state.portrait) return;

  activePointers.set(event.pointerId, {
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    lastY: event.clientY,
    startTime: performance.now(),
    moved: 0,
    dragging: false,
    canLook: event.clientX >= window.innerWidth * 0.5
  });
});

window.addEventListener('pointermove', (event) => {
  const track = activePointers.get(event.pointerId);
  if (!track) return;

  const dx = event.clientX - track.lastX;
  const dy = event.clientY - track.lastY;
  track.lastX = event.clientX;
  track.lastY = event.clientY;
  track.moved = Math.max(
    track.moved,
    Math.hypot(event.clientX - track.startX, event.clientY - track.startY)
  );

  if (!track.dragging && track.moved > TAP_MAX_MOVE) track.dragging = true;
  if (!track.dragging || !track.canLook || interactionBlocked()) return;

  // Drag right = look right, drag up = look up.
  state.cameraYaw += dx * CAMERA_LOOK_SENSITIVITY_X;
  state.cameraPitch = clamp(
    state.cameraPitch - dy * CAMERA_LOOK_SENSITIVITY_Y,
    -PITCH_LIMIT,
    PITCH_LIMIT
  );
});

function endPointer(event) {
  const track = activePointers.get(event.pointerId);
  if (!track) return;
  activePointers.delete(event.pointerId);

  if (event.type === 'pointercancel') return;
  if (track.dragging || track.moved > TAP_MAX_MOVE) return;
  if (performance.now() - track.startTime > TAP_MAX_TIME) return;
  if (interactionBlocked()) return;
  handleWorldTap(track.startX, track.startY);
}

window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);

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
  state.cameraDistance = THIRD_PERSON_DISTANCE;
  state.velocityY = 0;
  state.grounded = true;
  state.jumpHeld = false;
  state.walkPhase = 0;
  state.idleTime = 0;
  state.moveSpeed = 0;
  state.backpack.wood = 0;
  state.backpack.sapling = 0;
  state.backpack.berry = 0;
  state.backpack.iron = 0;
  state.ownedTools.axe = true;
  state.ownedTools.pickaxe = false;
  state.ownedTools.ironAxe = false;
  state.ownedTools.ironSword = false;
  state.equippedTool = null;
  state.equipTimer = 0;
  state.inventoryOpen = false;
  state.machineOpen = false;
  state.settingsOpen = false;
  state.machineInReach = false;
  state.fireLevel = 0;
  state.targetRock = null;
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
  closeMachinePanel();
  setSettingsOpen(false);
  campfire.scale.setScalar(1);
  fireGlow.distance = 15;
  warmLight.distance = 20;
  machineState.fuel = 0;
  machineState.working = null;
  machineState.progress = 0;
  machineState.stalled = false;
  machineState.statusTimer = 0;
  machineState.statusText = '';
  stopMachineSound();
  resetPlacedWalls();
  resetIronRocks();
  player.position.set(0, getGroundHeight(0, -3.5), -3.5);
  player.rotation.y = 0;
  state.cameraInitialized = false;
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);
  avatar.position.y = 0.01;
  activePointers.clear();
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
  showToast('Tap a tool · loose iron by the machine');
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
  if (key === '3' && !event.repeat) equipTool('pickaxe');
  if (key === '4' && !event.repeat) equipTool('ironAxe');
  if (key === '5' && !event.repeat) equipTool('ironSword');
  if (key === 'escape' && !event.repeat) {
    closeMachinePanel();
    setSettingsOpen(false);
    setInventoryOpen(false);
  }
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

pickaxeSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('pickaxe');
});

ironAxeSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('ironAxe');
});

ironSwordSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('ironSword');
});

closeUpgradeBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  closeMachinePanel();
});

machineFeedBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  addMachineFuel();
});

closeInventoryBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  setInventoryOpen(false);
});

unequipBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  unequipTool();
});

// ---------- Direct touch interaction ----------
const tapRaycaster = new THREE.Raycaster();
const tapPointer = new THREE.Vector2();

const OUTLINE_TIME = 0.3;
const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.BackSide,
  transparent: true,
  opacity: 0.9,
  depthWrite: false
});
const outlineEffects = [];

function flashOutline(root) {
  if (!root) return;
  // Collect first: adding shells while traversing would recurse forever.
  const targets = [];
  root.traverse((node) => {
    if (!node.isMesh || !node.geometry || node.userData.outlineShell) return;
    targets.push(node);
  });
  if (targets.length === 0) return;
  const shells = [];
  for (const node of targets) {
    const shell = new THREE.Mesh(node.geometry, outlineMaterial);
    shell.scale.setScalar(1.05);
    shell.renderOrder = 3;
    shell.userData.outlineShell = true;
    node.add(shell);
    shells.push({ node, shell });
  }
  outlineEffects.push({ shells, until: performance.now() + OUTLINE_TIME * 1000 });
}

function updateOutlines() {
  if (outlineEffects.length === 0) return;
  const now = performance.now();
  for (let i = outlineEffects.length - 1; i >= 0; i -= 1) {
    const effect = outlineEffects[i];
    if (now < effect.until) continue;
    for (const { node, shell } of effect.shells) node.remove(shell);
    outlineEffects.splice(i, 1);
  }
}

function resolveTapOwner(object) {
  let node = object;
  while (node) {
    const data = node.userData;
    if (data.itemRef) return { kind: 'item', item: data.itemRef, mesh: node };
    if (data.rockRef) return { kind: 'rock', rock: data.rockRef };
    if (data.treeRef) return { kind: 'tree', tree: data.treeRef };
    if (data.enemyRef) return { kind: 'enemy', enemy: data.enemyRef };
    if (data.saplingRef) return { kind: 'sapling', sapling: data.saplingRef };
    if (data.berryBushRef) return { kind: 'berry', bush: data.berryBushRef };
    if (data.machineRef) return { kind: 'machine' };
    if (data.campfireRef) return { kind: 'campfire' };
    node = node.parent;
  }
  return null;
}

function handleWorldTap(clientX, clientY) {
  if (interactionBlocked()) return;
  const rect = canvas.getBoundingClientRect();
  tapPointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  tapPointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  tapRaycaster.setFromCamera(tapPointer, camera);

  const candidates = [];
  for (const item of groundItems) {
    if (item.carried || item.popping > 0) continue;
    candidates.push(item.mesh);
  }
  for (const rock of ironRocks) {
    if (!rock.broken) candidates.push(rock.group);
  }
  for (const tree of treeData) {
    if (tree.visible && tree.userData.choppable && !tree.userData.falling) candidates.push(tree);
  }
  for (const enemy of enemies) {
    if (enemy.visible && !enemy.userData.fading && !enemy.userData.dead) candidates.push(enemy);
  }
  for (const sapling of plantedSaplings) candidates.push(sapling.mesh);
  for (const bush of berryBushes) candidates.push(bush.mesh);
  candidates.push(machine, campfire);

  if (candidates.length === 0) return;

  const hits = tapRaycaster.intersectObjects(candidates, true);
  for (const hit of hits) {
    // Particle systems (sparks, smoke) can intersect anywhere along the ray and
    // would otherwise swallow taps aimed at the world behind them.
    if (!hit.object.isMesh) continue;
    const owner = resolveTapOwner(hit.object);
    if (owner) {
      applyTapInteraction(owner);
      return;
    }
  }
}

function applyTapInteraction(owner) {
  const px = player.position.x;
  const pz = player.position.z;
  const withinReach = (x, z) => Math.hypot(px - x, pz - z) <= TAP_REACH;
  const tooFar = () => showToast('Too far');

  switch (owner.kind) {
    case 'item': {
      const item = owner.item;
      if (!withinReach(item.x, item.z)) return tooFar();
      flashOutline(item.mesh);
      pickUpItem(item);
      return;
    }
    case 'rock': {
      const rock = owner.rock;
      if (!withinReach(rock.x, rock.z)) return tooFar();
      flashOutline(rock.group);
      if (!canMineTool(state.equippedTool)) {
        showToast('Equip the pickaxe to mine iron');
        return;
      }
      mineIronRock(rock);
      return;
    }
    case 'tree': {
      const tree = owner.tree;
      if (!withinReach(tree.position.x, tree.position.z)) return tooFar();
      flashOutline(tree);
      if (!canChopTool(state.equippedTool)) {
        showToast('Equip the axe to chop');
        return;
      }
      chopTree(tree, TOOL_STATS[state.equippedTool]?.treePower ?? 1);
      return;
    }
    case 'enemy': {
      const enemy = owner.enemy;
      if (!withinReach(enemy.position.x, enemy.position.z)) return tooFar();
      flashOutline(enemy);
      attack(enemy);
      return;
    }
    case 'sapling': {
      if (!withinReach(owner.sapling.x, owner.sapling.z)) return tooFar();
      flashOutline(owner.sapling.mesh);
      showToast('The sapling is still growing');
      return;
    }
    case 'berry': {
      const bush = owner.bush;
      if (!withinReach(bush.x, bush.z)) return tooFar();
      flashOutline(bush.mesh);
      harvestBerryBush(bush);
      return;
    }
    case 'machine': {
      if (getMachineDistance() > TAP_REACH) return tooFar();
      if (getMachineDistance() > MACHINE_INTERACT_RANGE) {
        showToast('Move closer to the machine');
        return;
      }
      flashOutline(machine);
      openMachinePanel();
      return;
    }
    case 'campfire': {
      if (getCampfireDistance() > TAP_REACH) return tooFar();
      flashOutline(campfire);
      tapCampfire();
      return;
    }
    default:
      break;
  }
}

function harvestBerryBush(bush) {
  const now = performance.now();
  if (now < (bush.nextHarvest || 0)) {
    showToast('The bush needs a moment');
    return;
  }
  bush.nextHarvest = now + 4500;

  if (isBackpackEquipped()) {
    if (backpackCount() >= BACKPACK_CAPACITY) {
      showToast('Backpack is full');
      return;
    }
    state.backpack.berry += 1;
    updateHud();
    playPickupSound();
    showToast('+1 berry');
    return;
  }

  if (carriedItems.length >= CARRY_LIMIT) {
    showToast('Hands full - 3 items max');
    return;
  }
  const item = spawnGroundItem('berry', player.position.x, player.position.z, {
    startY: getGroundHeight(player.position.x, player.position.z) + 0.5,
    velocityY: 1.2,
    pickupDelay: 0
  });
  pickUpItem(item);
}

function tapCampfire() {
  const carriedFuel = carriedItems.some((item) => FIRE_FUEL_TYPES.has(item.type));
  if (carriedFuel) {
    throwCarriedIntoFire();
    return;
  }
  if (backpackFuelCount() > 0) {
    feedFireFromBackpack();
    return;
  }
  showToast(state.fuel >= 99.5 ? 'The fire is already full' : 'Add wood to feed the fire');
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
  closeMachinePanel();
  setSettingsOpen(false);
  stopMachineSound();
  state.equippedTool = null;
  state.equipTimer = 0;
  updateToolModels();
  updateHud();
  darkness.style.opacity = '0';
}

function attack(targetEnemy = null) {
  if (!state.started || state.gameOver || state.falling || state.paused || state.machineOpen || state.settingsOpen) return;
  if (state.attackCooldown > 0) return;
  const stats = TOOL_STATS[state.equippedTool];
  if (!stats) {
    showToast(state.equippedTool === 'backpack' ? 'Unequip the backpack to fight' : 'Equip a tool to attack');
    return;
  }

  if (targetEnemy) {
    player.rotation.y = Math.atan2(
      targetEnemy.position.x - player.position.x,
      targetEnemy.position.z - player.position.z
    );
  } else if (state.firstPerson) {
    // In first-person, strikes follow where the camera looks.
    player.rotation.y = state.cameraYaw;
  }

  state.attackCooldown = stats.cooldown;
  state.attackTimer = ATTACK_DURATION;
  strikeArc.visible = true;
  strikeArc.scale.setScalar(0.7);
  playerGlow.intensity = 1.8;
  playAxeWhoosh();

  if (!targetEnemy) {
    if (state.targetRock && stats.rockPower > 0) {
      mineIronRock(state.targetRock, stats.rockPower);
    } else if (state.targetTree && stats.treePower > 0) {
      chopTree(state.targetTree, stats.treePower);
    }
  }

  const forward = new THREE.Vector3(Math.sin(player.rotation.y), 0, Math.cos(player.rotation.y));

  if (targetEnemy) {
    if (targetEnemy.visible && !targetEnemy.userData.fading) {
      const offset = targetEnemy.position.clone().sub(player.position);
      offset.y = 0;
      if (offset.length() <= TAP_REACH) damageEnemy(targetEnemy, stats, forward);
    }
    return;
  }

  for (const enemy of enemies) {
    if (!enemy.visible || enemy.userData.fading) continue;
    const offset = enemy.position.clone().sub(player.position);
    offset.y = 0;
    const distance = offset.length();
    if (distance > stats.range || distance < 0.01) continue;
    offset.normalize();
    if (forward.dot(offset) < 0.2) continue;
    damageEnemy(enemy, stats, forward);
  }
}

function damageEnemy(enemy, stats, forward) {
  const data = enemy.userData;
  data.health -= stats.damage;
  data.hitTimer = 0.22;
  data.bodyMat.emissive.setHex(0xff2f1a);
  data.bodyMat.emissiveIntensity = 1.1;
  data.knockback.addScaledVector(forward, 4.2 + stats.damage * 0.6);
  playMeleeHit();

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
  closeMachinePanel();
  deathBanner.classList.add('visible');
  playSadTone();
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
  const radius = getCampfireSafeRadius();
  return dx * dx + dz * dz < radius * radius ? 1 : 0;
}

const PLAYER_SPEED = 6;
const PLAYER_RADIUS = 0.32;
const JUMP_SPEED = 7.4;
const GRAVITY = 17.5;

function tryJump() {
  if (!state.started || state.gameOver || state.falling || !state.grounded
    || state.machineOpen || state.settingsOpen || state.inventoryOpen) return;
  state.velocityY = JUMP_SPEED;
  state.grounded = false;
  playJumpSound();
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

  const fallSpeed = state.velocityY;
  state.velocityY -= GRAVITY * delta;
  player.position.y += state.velocityY * delta;
  if (player.position.y <= groundY) {
    player.position.y = groundY;
    state.velocityY = 0;
    state.grounded = true;
    if (fallSpeed < -2.4) playLandSound();
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

function resolveWorldPropCollisions(entity, entityRadius = PLAYER_RADIUS) {
  for (const prop of solidProps) {
    if (prop.rock && prop.rock.broken) continue;
    const dx = entity.position.x - prop.x;
    const dz = entity.position.z - prop.z;
    const radius = prop.radius + entityRadius;
    const distanceSq = dx * dx + dz * dz;
    if (distanceSq >= radius * radius) continue;
    if (distanceSq < 0.0001) {
      // Exactly on the prop: pick a deterministic direction to escape.
      entity.position.x = prop.x + radius;
      continue;
    }
    const distance = Math.sqrt(distanceSq);
    const push = radius - distance;
    entity.position.x += (dx / distance) * push;
    entity.position.z += (dz / distance) * push;
  }

  for (const wall of placedWalls) {
    const dx = entity.position.x - wall.x;
    const dz = entity.position.z - wall.z;
    const cos = Math.cos(wall.rotation);
    const sin = Math.sin(wall.rotation);
    let localX = dx * cos - dz * sin;
    let localZ = dx * sin + dz * cos;
    const halfWidth = wall.width / 2 + entityRadius;
    const halfDepth = wall.depth / 2 + entityRadius;
    if (Math.abs(localX) >= halfWidth || Math.abs(localZ) >= halfDepth) continue;

    const pushX = halfWidth - Math.abs(localX);
    const pushZ = halfDepth - Math.abs(localZ);
    if (pushX < pushZ) {
      localX = Math.sign(localX || 1) * halfWidth;
    } else {
      localZ = Math.sign(localZ || 1) * halfDepth;
    }

    entity.position.x = wall.x + localX * cos + localZ * sin;
    entity.position.z = wall.z - localX * sin + localZ * cos;
  }
}

function checkAutoJump(nextX, nextZ, moveDir) {
  if (!state.grounded) return;
  for (const obstacle of lowObstacles) {
    if (obstacle.rock && obstacle.rock.broken) continue;
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
  const targetYaw = Math.atan2(moveDir.x, moveDir.z);
  const turn = 1 - Math.exp(-15 * delta);
  player.rotation.y = lerpAngle(player.rotation.y, targetYaw, turn);

  const nextX = player.position.x + moveDir.x * delta * PLAYER_SPEED;
  const nextZ = player.position.z + moveDir.z * delta * PLAYER_SPEED;
  checkAutoJump(nextX, nextZ, moveDir);

  player.position.x = nextX;
  player.position.z = nextZ;
  resolveTreeCollisions();
  resolveWorldPropCollisions(player);
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

      if (fireDistance < getFireScareRadius() + 1.2) {
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
      if (outDistance < getFireScareRadius() - 0.05) {
        nextX = campfire.position.x + (outX / outDistance) * getFireScareRadius();
        nextZ = campfire.position.z + (outZ / outDistance) * getFireScareRadius();
      }

      const nextOutX = nextX - campfire.position.x;
      const nextOutZ = nextZ - campfire.position.z;
      const nextOutDistance = Math.hypot(nextOutX, nextOutZ) || 1;
      if (nextOutDistance < getFireScareRadius()) {
        const keepX = enemy.position.x - campfire.position.x;
        const keepZ = enemy.position.z - campfire.position.z;
        const keepDistance = Math.hypot(keepX, keepZ) || 1;
        nextX = campfire.position.x + (keepX / keepDistance) * getFireScareRadius();
        nextZ = campfire.position.z + (keepZ / keepDistance) * getFireScareRadius();
      }
    }

    enemy.position.x = clamp(nextX, -46, 46);
    enemy.position.z = clamp(nextZ, -46, 46);
    resolveWorldPropCollisions(enemy, 0.36);
    enemy.position.x = clamp(enemy.position.x, -46, 46);
    enemy.position.z = clamp(enemy.position.z, -46, 46);
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

    fireGlow.intensity = (2 + ratio * 1.8 + state.fireLevel * 0.55) * flicker + state.fireFlare * 3.2;
    warmLight.intensity = (0.6 + ratio * 0.8 + state.fireLevel * 0.28) * flicker + state.fireFlare * 1.8;
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
    playNightSurvivedChime();
    showToast('You survived the night');
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
const cameraPivot = new THREE.Vector3();
const cameraForward = new THREE.Vector3();
const thirdPersonPos = new THREE.Vector3();
const firstPersonPos = new THREE.Vector3();
const cameraDesired = new THREE.Vector3();
const cameraLookTarget = new THREE.Vector3();
const cameraLookForward = new THREE.Vector3();
const cameraRayDirection = new THREE.Vector3();
const cameraCandidates = [];

function updateCamera(delta = 0.016) {
  const yaw = state.cameraYaw;
  const pitch = state.cameraPitch;
  const cosPitch = Math.cos(pitch);
  const sinPitch = Math.sin(pitch);

  // Pivot sits at the character's eye height, so the camera rotates around the head.
  cameraPivot.set(
    player.position.x,
    player.position.y + CAMERA_EYE_HEIGHT,
    player.position.z
  );
  cameraForward.set(
    Math.sin(yaw) * cosPitch,
    sinPitch,
    Math.cos(yaw) * cosPitch
  );

  // Third-person: orbit the pivot from slightly above and behind.
  const desiredDistance = state.cameraDistance || THIRD_PERSON_DISTANCE;
  thirdPersonPos.copy(cameraPivot).addScaledVector(cameraForward, -desiredDistance);
  thirdPersonPos.y += THIRD_CAMERA_HEIGHT;

  cameraRayDirection.copy(thirdPersonPos).sub(cameraPivot);
  const fullDistance = cameraRayDirection.length();
  if (fullDistance > 0.0001) cameraRayDirection.normalize();

  cameraCandidates.length = 0;
  const broadRadius = desiredDistance + 3.2;
  for (const tree of treeData) {
    if (!tree.visible) continue;
    const dx = tree.position.x - cameraPivot.x;
    const dz = tree.position.z - cameraPivot.z;
    if (dx * dx + dz * dz < broadRadius * broadRadius) {
      cameraCandidates.push(tree.userData.cameraMeshes[0], tree.userData.cameraMeshes[1]);
    }
  }
  for (const rock of ironRocks) {
    if (rock.broken) continue;
    if (Math.hypot(rock.x - cameraPivot.x, rock.z - cameraPivot.z) < broadRadius) {
      cameraCandidates.push(rock.group);
    }
  }
  for (const obstacle of lowObstacles) {
    if (Math.hypot(obstacle.x - cameraPivot.x, obstacle.z - cameraPivot.z) < broadRadius) {
      cameraCandidates.push(obstacle.mesh);
    }
  }
  for (const wall of placedWalls) {
    if (Math.hypot(wall.x - cameraPivot.x, wall.z - cameraPivot.z) < broadRadius) {
      cameraCandidates.push(wall.group);
    }
  }
  if (Math.hypot(machine.position.x - cameraPivot.x, machine.position.z - cameraPivot.z) < broadRadius) {
    cameraCandidates.push(machine);
  }

  let distance = fullDistance;
  if (cameraCandidates.length > 0) {
    cameraRaycaster.set(cameraPivot, cameraRayDirection);
    cameraRaycaster.far = fullDistance;
    const hits = cameraRaycaster.intersectObjects(cameraCandidates, true);
    if (hits.length > 0) distance = Math.max(0.85, hits[0].distance - 0.24);
  }

  thirdPersonPos.copy(cameraPivot).addScaledVector(cameraRayDirection, distance);

  // Never sink into the terrain.
  const groundClearance = getGroundHeight(thirdPersonPos.x, thirdPersonPos.z) + 0.35;
  if (thirdPersonPos.y < groundClearance) thirdPersonPos.y = groundClearance;

  firstPersonPos.copy(cameraPivot);

  // Ease between the two views.
  const targetBlend = state.firstPerson ? 1 : 0;
  const blendRate = 1 - Math.exp(-13 * delta);
  state.viewBlend += (targetBlend - state.viewBlend) * blendRate;
  if (Math.abs(state.viewBlend - targetBlend) < 0.0015) state.viewBlend = targetBlend;
  const blend = smoothstep(clamp(state.viewBlend, 0, 1));

  cameraDesired.lerpVectors(thirdPersonPos, firstPersonPos, blend);

  const obstructed = distance < fullDistance - 0.01;
  if (!state.cameraInitialized) {
    camera.position.copy(cameraDesired);
    state.cameraInitialized = true;
  } else if (blend > 0.92) {
    // Locked to the eye in first-person so movement never causes camera lag.
    camera.position.copy(cameraDesired);
  } else {
    const follow = obstructed ? Math.min(1, blendRate * 3.4) : Math.min(1, blendRate * 0.95);
    camera.position.lerp(cameraDesired, Math.max(0.12, follow));
  }
  const floor = getGroundHeight(camera.position.x, camera.position.z) + 0.28;
  if (camera.position.y < floor) camera.position.y = floor;

  // Third-person looks at the head pivot; first-person looks straight ahead.
  cameraLookTarget.copy(cameraPivot).lerp(
    cameraLookForward.copy(cameraPivot).addScaledVector(cameraForward, 10),
    blend
  );
  camera.lookAt(cameraLookTarget);

  const fov = THIRD_FOV + (FIRST_FOV - THIRD_FOV) * blend;
  if (Math.abs(camera.fov - fov) > 0.01) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }

  const firstPersonActive = blend > 0.5;
  avatar.visible = !firstPersonActive;
  fpViewmodel.visible = firstPersonActive;
  updateFpToolVisibility(firstPersonActive);
  if (firstPersonActive) strikeArc.visible = false;
}

// ---------- Generated audio ----------

const audio = {
  ctx: null,
  master: null,
  noiseBuffer: null,
  started: false,
  volume: 0.7,
  muted: false,
  windGain: null,
  cricketGain: null,
  fireGain: null,
  stepTimer: 0.22,
  fireCrackleTimer: 0.2,
  birdTimer: 2.5,
  growlTimer: 1.8,
  monsterStepTimer: 0.5,
  heartbeatTimer: 0,
  machineRunning: false,
  machineOsc: null,
  machineOsc2: null,
  machineGain: null
};

function audioReady() {
  return !!audio.ctx && audio.started;
}

function audioNow() {
  return audio.ctx ? audio.ctx.currentTime : 0;
}

function makeNoiseBuffer(ctx) {
  const length = Math.floor(ctx.sampleRate * 2);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = last * 0.72 + white * 0.28;
    data[i] = last * 1.15;
  }
  return buffer;
}

function initAudio() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  try {
    if (!audio.ctx) {
      const ctx = new Ctx();
      audio.ctx = ctx;
      audio.master = ctx.createGain();
      audio.master.gain.value = audio.muted ? 0 : audio.volume;
      audio.master.connect(ctx.destination);
      audio.noiseBuffer = makeNoiseBuffer(ctx);

      const wind = ctx.createBufferSource();
      wind.buffer = audio.noiseBuffer;
      wind.loop = true;
      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.value = 460;
      windFilter.Q.value = 0.55;
      audio.windGain = ctx.createGain();
      audio.windGain.gain.value = 0.012;
      wind.connect(windFilter).connect(audio.windGain).connect(audio.master);
      wind.start();

      const crickets = ctx.createBufferSource();
      crickets.buffer = audio.noiseBuffer;
      crickets.loop = true;
      const cricketFilter = ctx.createBiquadFilter();
      cricketFilter.type = 'bandpass';
      cricketFilter.frequency.value = 4300;
      cricketFilter.Q.value = 7;
      audio.cricketGain = ctx.createGain();
      audio.cricketGain.gain.value = 0.0001;
      const cricketLfo = ctx.createOscillator();
      cricketLfo.type = 'sine';
      cricketLfo.frequency.value = 5.1;
      const cricketLfoGain = ctx.createGain();
      cricketLfoGain.gain.value = 0.006;
      cricketLfo.connect(cricketLfoGain).connect(audio.cricketGain.gain);
      crickets.connect(cricketFilter).connect(audio.cricketGain).connect(audio.master);
      crickets.start();
      cricketLfo.start();

      const fire = ctx.createBufferSource();
      fire.buffer = audio.noiseBuffer;
      fire.loop = true;
      const fireFilter = ctx.createBiquadFilter();
      fireFilter.type = 'bandpass';
      fireFilter.frequency.value = 760;
      fireFilter.Q.value = 0.6;
      audio.fireGain = ctx.createGain();
      audio.fireGain.gain.value = 0.0001;
      fire.connect(fireFilter).connect(audio.fireGain).connect(audio.master);
      fire.start();
    }

    audio.started = true;
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
  } catch (error) {
    audio.started = false;
  }
}

function playTone(freq, endFreq, duration, type = 'sine', gain = 0.04, when = 0, attack = 0.008) {
  if (!audioReady()) return;
  const ctx = audio.ctx;
  const start = audioNow() + Math.max(0, when);
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(Math.max(20, freq), start);
  if (endFreq && endFreq !== freq) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), start + duration);
  }
  env.gain.setValueAtTime(0.0001, start);
  env.gain.linearRampToValueAtTime(gain, start + attack);
  env.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(env).connect(audio.master);
  osc.start(start);
  osc.stop(start + duration + 0.04);
}

function playNoise(duration, gain, filterType = 'lowpass', freq = 900, freqEnd = 0, Q = 0.8, when = 0) {
  if (!audioReady()) return;
  const ctx = audio.ctx;
  const start = audioNow() + Math.max(0, when);
  const source = ctx.createBufferSource();
  source.buffer = audio.noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(Math.max(40, freq), start);
  if (freqEnd) filter.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), start + duration);
  filter.Q.value = Q;
  const env = ctx.createGain();
  env.gain.setValueAtTime(0.0001, start);
  env.gain.linearRampToValueAtTime(gain, start + 0.006);
  env.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(filter).connect(env).connect(audio.master);
  source.start(start, Math.random() * 1.2, duration + 0.04);
}

function playPickupSound() {
  playTone(520, 760, 0.08, 'sine', 0.045);
  playTone(880, 980, 0.06, 'triangle', 0.024, 0.055);
}

function playEquipClick() {
  playNoise(0.035, 0.025, 'highpass', 1900, 0, 0.8);
  playTone(300, 220, 0.055, 'square', 0.018);
}

function playUpgradeChime() {
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    playTone(freq, freq, 0.52, 'triangle', 0.04, index * 0.085);
    playTone(freq * 2, freq * 2, 0.32, 'sine', 0.014, index * 0.085 + 0.008);
  });
}

function playUpgradeDing() {
  playTone(1046.5, 1046.5, 0.7, 'sine', 0.055);
  playTone(1568, 1568, 0.55, 'sine', 0.028, 0.02);
  playTone(2093, 2093, 0.4, 'triangle', 0.014, 0.03);
}

function playNightSurvivedChime() {
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
  notes.forEach((freq, index) => {
    playTone(freq, freq, 0.62, 'triangle', 0.045, index * 0.1);
    playTone(freq * 1.5, freq * 1.5, 0.34, 'sine', 0.012, index * 0.1 + 0.01);
  });
}

function playSadTone() {
  playTone(330, 120, 1.1, 'sawtooth', 0.045, 0, 0.02);
  playTone(220, 82, 1.3, 'sine', 0.05, 0.04, 0.02);
  playNoise(0.9, 0.025, 'lowpass', 420, 110);
}

function playAxeWhoosh() {
  playNoise(0.18, 0.055, 'bandpass', 950, 260, 1.1);
}

function playTreeThud() {
  playTone(132, 52, 0.18, 'sine', 0.11);
  playNoise(0.14, 0.055, 'lowpass', 320, 130);
}

function playTreeCrash() {
  playNoise(0.85, 0.09, 'lowpass', 950, 120, 0.7);
  playTone(90, 38, 0.63, 'sine', 0.08, 0.04);
  playNoise(0.35, 0.04, 'bandpass', 1800, 700, 1.4, 0.08);
}

function playRockClink() {
  playTone(1850, 1450, 0.075, 'triangle', 0.038);
  playTone(2650, 2100, 0.055, 'sine', 0.02, 0.012);
  playNoise(0.045, 0.025, 'highpass', 2400, 0, 0.9);
}

function playRockBreak() {
  playRockClink();
  playNoise(0.38, 0.08, 'lowpass', 720, 140, 0.8);
  playTone(190, 60, 0.34, 'sine', 0.06, 0.02);
}

function playMeleeHit() {
  playTone(170, 70, 0.14, 'sine', 0.075);
  playNoise(0.1, 0.045, 'bandpass', 680, 250, 0.9);
}

function playJumpSound() {
  playTone(220, 360, 0.15, 'sine', 0.03);
  playNoise(0.11, 0.022, 'highpass', 900, 0);
}

function playLandSound() {
  playTone(115, 52, 0.17, 'sine', 0.075);
  playNoise(0.12, 0.04, 'lowpass', 360, 130);
}

function playFootstep() {
  const pitch = 72 + Math.random() * 28;
  playTone(pitch, pitch * 0.7, 0.075, 'sine', 0.028);
  playNoise(0.075, 0.022, 'lowpass', 480 + Math.random() * 180, 0, 0.7);
}

function playFireCrackle(proximity) {
  const gain = 0.008 + proximity * 0.03;
  playNoise(0.025 + Math.random() * 0.04, gain, 'highpass', 900 + Math.random() * 1400, 0, 0.9);
}

function playBirdChirp() {
  const base = 2100 + Math.random() * 900;
  const count = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i += 1) {
    playTone(base + Math.random() * 250, base + 700 + Math.random() * 500, 0.085, 'sine', 0.018, i * 0.11, 0.012);
  }
}

function playGrowl(proximity) {
  if (!audioReady()) return;
  const ctx = audio.ctx;
  const start = audioNow();
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const env = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(76, start);
  osc.frequency.exponentialRampToValueAtTime(44, start + 0.75);
  filter.type = 'lowpass';
  filter.frequency.value = 190;
  filter.Q.value = 1.2;
  env.gain.setValueAtTime(0.0001, start);
  env.gain.linearRampToValueAtTime(0.012 + proximity * 0.045, start + 0.08);
  env.gain.exponentialRampToValueAtTime(0.0001, start + 0.78);
  osc.connect(filter).connect(env).connect(audio.master);
  osc.start(start);
  osc.stop(start + 0.82);
  playNoise(0.5, 0.008 + proximity * 0.018, 'lowpass', 260, 90);
}

function playMonsterStep(proximity) {
  const gain = 0.01 + proximity * 0.045;
  playTone(62, 34, 0.12, 'sine', gain);
  playNoise(0.1, gain * 0.55, 'lowpass', 250, 100);
}

function playHeartbeat(proximity) {
  const gain = 0.018 + proximity * 0.055;
  playTone(58, 44, 0.1, 'sine', gain);
  playTone(52, 38, 0.12, 'sine', gain * 0.7, 0.16);
}

function playMachineClank() {
  playNoise(0.04, 0.02, 'highpass', 1700, 0, 1.2);
  playTone(390, 330, 0.06, 'square', 0.012);
}

function startMachineSound() {
  if (!audioReady() || audio.machineRunning) return;
  try {
    const ctx = audio.ctx;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.value = 55;
    osc2.type = 'square';
    osc2.frequency.value = 82.5;
    filter.type = 'lowpass';
    filter.frequency.value = 230;
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.0001, audioNow());
    gain.gain.linearRampToValueAtTime(0.018, audioNow() + 0.18);
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain).connect(audio.master);
    osc.start();
    osc2.start();
    audio.machineOsc = osc;
    audio.machineOsc2 = osc2;
    audio.machineGain = gain;
    audio.machineRunning = true;
  } catch (error) {
    audio.machineRunning = false;
  }
}

function stopMachineSound() {
  if (!audio.machineRunning) return;
  audio.machineRunning = false;
  try {
    const now = audioNow();
    audio.machineGain.gain.cancelScheduledValues(now);
    audio.machineGain.gain.setValueAtTime(Math.max(0.0001, audio.machineGain.gain.value), now);
    audio.machineGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
    audio.machineOsc.stop(now + 0.2);
    audio.machineOsc2.stop(now + 0.2);
  } catch (error) {
    // The machine oscillators may already have stopped; ignore cleanup errors.
  }
  audio.machineOsc = null;
  audio.machineOsc2 = null;
  audio.machineGain = null;
}

function updateAudioToggleUi() {
  audioToggle.classList.toggle('muted', audio.muted);
  audioToggle.setAttribute('aria-pressed', String(audio.muted));
  audioToggle.setAttribute('aria-label', audio.muted ? 'Unmute sound' : 'Mute sound');
}

function applyMasterGain() {
  if (!audio.master) return;
  const now = audioNow();
  const target = audio.muted ? 0 : audio.volume;
  audio.master.gain.cancelScheduledValues(now);
  audio.master.gain.setValueAtTime(audio.master.gain.value, now);
  audio.master.gain.linearRampToValueAtTime(target, now + 0.06);
}

function setAudioVolume(value) {
  audio.volume = clamp(value, 0, 1);
  applyMasterGain();
  volumeValue.textContent = `${Math.round(audio.volume * 100)}%`;
}

function toggleAudioMute() {
  initAudio();
  audio.muted = !audio.muted;
  applyMasterGain();
  updateAudioToggleUi();
  playEquipClick();
}

function setSettingsOpen(open) {
  state.settingsOpen = open;
  settingsPanel.classList.toggle('hidden', !open);
  settingsBtn.setAttribute('aria-expanded', String(open));
  if (open) {
    closeMachinePanel();
    setInventoryOpen(false);
  }
  updateToolUi();
}

function updateAudio(delta) {
  if (!audioReady()) return;
  const now = audioNow();
  const night = 1 - state.daylight;
  const running = state.started && !state.gameOver && !state.paused;
  const peace = !state.started || state.gameOver || state.paused;

  audio.windGain.gain.setTargetAtTime(
    peace ? 0.007 : 0.007 + state.daylight * 0.03 + night * 0.012,
    now,
    0.7
  );
  audio.cricketGain.gain.setTargetAtTime(peace ? 0.0001 : night * 0.017, now, 0.85);

  const fireDistance = getCampfireDistance();
  const fireProximity = clamp(1 - fireDistance / 18, 0, 1);
  const fireBurning = state.started && !state.fireOut && !state.gameOver;
  const fireRatio = clamp(state.fuel / 100, 0, 1);
  audio.fireGain.gain.setTargetAtTime(
    fireBurning ? (0.004 + fireProximity * 0.042) * (0.45 + fireRatio * 0.55) : 0.0001,
    now,
    0.35
  );

  if (fireBurning && !state.paused && fireProximity > 0.04) {
    audio.fireCrackleTimer -= delta;
    if (audio.fireCrackleTimer <= 0) {
      playFireCrackle(fireProximity);
      audio.fireCrackleTimer = 0.13 + Math.random() * 0.42 + (1 - fireProximity) * 0.55;
    }
  }

  if (running && state.daylight > 0.55) {
    audio.birdTimer -= delta * (0.7 + state.daylight * 0.7);
    if (audio.birdTimer <= 0) {
      playBirdChirp();
      audio.birdTimer = 3 + Math.random() * 6;
    }
  } else {
    audio.birdTimer = Math.max(audio.birdTimer, 1.5);
  }

  if (running && state.grounded && state.moveSpeed > 0.1 && state.falling <= 0) {
    audio.stepTimer -= delta * (0.8 + (state.moveSpeed / PLAYER_SPEED) * 0.8);
    if (audio.stepTimer <= 0) {
      playFootstep();
      audio.stepTimer = 0.31;
    }
  } else {
    audio.stepTimer = Math.min(audio.stepTimer, 0.16);
  }

  let nearest = null;
  let nearestDistance = Infinity;
  if (running) {
    for (const enemy of enemies) {
      if (!enemy.visible || enemy.userData.fading) continue;
      const distance = Math.hypot(
        player.position.x - enemy.position.x,
        player.position.z - enemy.position.z
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = enemy;
      }
    }
  }

  if (nearest && nearestDistance < 21) {
    const proximity = clamp(1 - nearestDistance / 21, 0, 1);
    audio.growlTimer -= delta * (1 + proximity * 2.2);
    if (audio.growlTimer <= 0) {
      playGrowl(proximity);
      audio.growlTimer = 2.8 + Math.random() * 4.5;
    }

    audio.monsterStepTimer -= delta * (1 + proximity * 0.8);
    if (audio.monsterStepTimer <= 0) {
      playMonsterStep(proximity);
      audio.monsterStepTimer = 0.45 + Math.random() * 0.35;
    }

    if (nearestDistance < 15) {
      audio.heartbeatTimer -= delta;
      if (audio.heartbeatTimer <= 0) {
        playHeartbeat(proximity);
        audio.heartbeatTimer = 1.15 - proximity * 0.72 + Math.random() * 0.08;
      }
    } else {
      audio.heartbeatTimer = 0;
    }
  } else {
    audio.growlTimer = Math.max(audio.growlTimer, 1.4);
    audio.monsterStepTimer = Math.max(audio.monsterStepTimer, 0.4);
    audio.heartbeatTimer = 0;
  }

  if ((!running || state.falling > 0) && audio.machineRunning) stopMachineSound();
}

window.addEventListener('pointerdown', initAudio, { capture: true, passive: true });
window.addEventListener('keydown', initAudio, { capture: true });

audioToggle.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  toggleAudioMute();
});

cameraBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  toggleCameraView();
});

settingsBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  setSettingsOpen(!state.settingsOpen);
});

closeSettingsBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  setSettingsOpen(false);
});

volumeSlider.addEventListener('input', () => {
  setAudioVolume(Number(volumeSlider.value) / 100);
});

setAudioVolume(audio.volume);
updateAudioToggleUi();
setFirstPerson(state.firstPerson, false);

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
      activePointers.clear();
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
      updateMachine(delta);
      updateIronRocks(delta);
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
    updateFpViewmodel(delta);
    updateOutlines();

    if (state.damageFlash > 0) {
      state.damageFlash = Math.max(0, state.damageFlash - delta * 1.5);
    }
  }

  if (state.victory && !state.started) {
    overlay.classList.remove('hidden');
  }

  updateAudio(delta);
  applyDayNightVisuals();
  updateCamera(delta);
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

regrowBerries();
spawnStarterIron();
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
    showToast,
    ironRocks,
    machine,
    machineState,
    placedWalls,
    UPGRADES,
    startUpgrade,
    addMachineFuel,
    mineIronRock,
    updateMachine,
    updateMachinePanel,
    updateIronRocks,
    openMachinePanel,
    closeMachinePanel,
    setSettingsOpen,
    applyBiggerCampfire,
    createIronWall,
    resolveWorldPropCollisions,
    audio,
    initAudio,
    setAudioVolume,
    toggleAudioMute,
    setFirstPerson,
    toggleCameraView,
    updateCamera,
    updateFpViewmodel,
    flashOutline,
    tapRaycaster,
    resolveTapOwner,
    TAP_REACH,
    CAMERA_EYE_HEIGHT
  };
}
animate();
