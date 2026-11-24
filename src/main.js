import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const canvas = document.getElementById('game');
const hud = document.getElementById('hud');
const nightText = document.getElementById('nightText');
const phaseIcon = document.getElementById('phaseIcon');
const healthText = document.getElementById('healthText');
const healthFill = document.getElementById('healthFill');
const joystickZone = document.getElementById('joystickZone');
const joystickBase = document.getElementById('joystickBase');
const joystickKnob = document.getElementById('joystickKnob');
const lookZone = document.getElementById('lookZone');
const jumpBtn = document.getElementById('jumpBtn');
const undragBtn = document.getElementById('undragBtn');
const storeBtn = document.getElementById('storeBtn');
const unstoreBtn = document.getElementById('unstoreBtn');
const eatBtn = document.getElementById('eatBtn');
const grinderBtn = document.getElementById('grinderBtn');
const fireBtn = document.getElementById('fireBtn');
const plantBtn = document.getElementById('plantBtn');
const woodText = document.getElementById('woodText');
const saplingText = document.getElementById('saplingText');
const berryText = document.getElementById('berryText');
const ironText = document.getElementById('ironText');
const mapExpandedNotice = document.getElementById('mapExpandedNotice');
const startHint = document.getElementById('startHint');
const dragLabel = document.getElementById('dragLabel');
const dragName = document.getElementById('dragName');
const dragFlames = document.getElementById('dragFlames');
const sackCounter = document.getElementById('sackCounter');
const fireFlash = document.getElementById('fireFlash');
const benchPrompt = document.getElementById('benchPrompt');
const placeBtn = document.getElementById('placeBtn');
const hungerText = document.getElementById('hungerText');
const hungerFill = document.getElementById('hungerFill');
const fireWarning = document.getElementById('fireWarning');
const touchDebugEl = document.getElementById('touchDebug');
const deathBanner = document.getElementById('deathBanner');
const toastEl = document.getElementById('toast');
const hitMeterEl = document.getElementById('hitMeter');
const hitMeterText = document.getElementById('hitMeterText');
const hitMeterFill = document.getElementById('hitMeterFill');
const darkness = document.getElementById('darkness');
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
const axeSlot = document.getElementById('axeSlot');
const backpackSlot = document.getElementById('backpackSlot');
const pickaxeSlot = document.getElementById('pickaxeSlot');
const torchSlot = document.getElementById('torchSlot');
const ironSwordSlot = document.getElementById('ironSwordSlot');
const axeLabel = document.getElementById('axeLabel');
const backpackLabel = document.getElementById('backpackLabel');
const pickaxeLabel = document.getElementById('pickaxeLabel');
const torchLabel = document.getElementById('torchLabel');
const ironSwordLabel = document.getElementById('ironSwordLabel');
const backpackBadge = document.getElementById('backpackBadge');
const inventoryPanel = document.getElementById('inventoryPanel');
const inventoryList = document.getElementById('inventoryList');
const inventoryCapacity = document.getElementById('inventoryCapacity');
const closeInventoryBtn = document.getElementById('closeInventoryBtn');
const unequipBtn = document.getElementById('unequipBtn');
const craftPanel = document.getElementById('craftPanel');
const craftGrid = document.getElementById('craftGrid');
const closeCraftBtn = document.getElementById('closeCraftBtn');
const craftTierLabel = document.getElementById('craftTierLabel');
const craftWoodStock = document.getElementById('craftWoodStock');
const craftIronStock = document.getElementById('craftIronStock');
const craftDetailIcon = document.getElementById('craftDetailIcon');
const craftDetailName = document.getElementById('craftDetailName');
const craftDetailDesc = document.getElementById('craftDetailDesc');
const craftDetailCost = document.getElementById('craftDetailCost');
const craftDetailBadge = document.getElementById('craftDetailBadge');
const craftButton = document.getElementById('craftButton');
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

const camera = new THREE.PerspectiveCamera(67, window.innerWidth / window.innerHeight, 0.1, 1400);
camera.rotation.order = 'YXZ';

const clock = new THREE.Clock();
const world = new THREE.Group();
scene.add(world);

const BENCH_POSITION = new THREE.Vector3(5.6, 0, 5.4);
const GRINDER_POSITION = new THREE.Vector3(7.6, 0, 1.9);
const WELL_POSITION = new THREE.Vector3(-8.2, 0, 4.6);
const POND_POSITION = new THREE.Vector3(6.8, 0, -8.8);
const NOTICE_POSITION = new THREE.Vector3(-5.6, 0, -7.4);
const CAMP_PROP_LAYOUT = [
  { x: BENCH_POSITION.x, z: BENCH_POSITION.z, r: 2.4 },
  { x: GRINDER_POSITION.x, z: GRINDER_POSITION.z, r: 1.8 },
  { x: WELL_POSITION.x, z: WELL_POSITION.z, r: 2.4 },
  { x: POND_POSITION.x, z: POND_POSITION.z, r: 3.6 },
  { x: NOTICE_POSITION.x, z: NOTICE_POSITION.z, r: 1.8 }
];

function nearCampProp(x, z, padding = 0) {
  for (const prop of CAMP_PROP_LAYOUT) {
    if (Math.hypot(x - prop.x, z - prop.z) < prop.r + padding) return true;
  }
  return false;
}
const IRON_ROCK_HITS = 13;
const solidProps = [];
const TREE_HITS_BASE = 13;
// One hit per swing: resource damage is gated by a short cooldown of its own so
// rapid taps cannot stack several hits into the same arm swing.
const RESOURCE_SWING_COOLDOWN = 0.5;
const HIT_METER_HIDE_TIME = 5;

// ---------- Camera / view constants ----------
const CAMERA_EYE_HEIGHT = 1.6;
const THIRD_PERSON_DISTANCE = 4;
const THIRD_CAMERA_HEIGHT = 0.45;
const THIRD_FOV = 67;
const FIRST_FOV = 75;
const PITCH_LIMIT = THREE.MathUtils.degToRad(80);
const CAMERA_LOOK_SENSITIVITY_X = 0.0037;
const CAMERA_LOOK_SENSITIVITY_Y = 0.0022;
const TAP_REACH = 4;
const TAP_MAX_MOVE = 15;
const TAP_MAX_TIME = 300;

// ---------- Third-person armed pose ----------
// The shoulder pose is pure pitch about the arm's left-right (local X) axis:
// the arm swings forward in the direction the character faces, never sideways.
// A small wrist/elbow bend tips the fist forward so it sits in front of the
// chest, a little to the right.
const ARMED_ARM_RAISE = -1.05;
const ARMED_ELBOW_BEND = -0.34;
// Handle angle measured from vertical: 75 deg = 15 deg above horizontal.
const ARMED_HANDLE_PITCH = 1.309;
// Cancels the arm + elbow pitch so the handle points where the face looks.
const ARMED_TOOL_PITCH = ARMED_HANDLE_PITCH - (ARMED_ARM_RAISE + ARMED_ELBOW_BEND);
// Roll the tool about its own handle so the head stays in the forward plane
// instead of jutting out to the character's side.
const ARMED_TOOL_ROLL = -Math.PI / 2;
const ARMED_WALK_FACTOR = 0.34;

// Gentle rolling ground keeps the campfire clearing flat while giving the player
// broad, easy-to-climb slopes farther out in the forest.
function getGroundHeight(x, z) {
  const radius = Math.hypot(x, z);
  const flatCenter = Math.min(Math.max((radius - 14) / 8, 0), 1);
  const waves = Math.sin(x * 0.11 + 0.7) * Math.cos(z * 0.1 - 0.35) * 0.55
    + Math.sin((x + z) * 0.055 - 0.6) * 0.35
    + Math.sin(x * 0.024 - z * 0.019) * 0.22;
  return waves * flatCenter;
}

// The whole 850 m map exists from the start; fog and the wall keep the far
// forest hidden until the campfire pushes the boundary outward.
const groundGeometry = new THREE.PlaneGeometry(1780, 1780, 150, 150);
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

const campfireVisual = new THREE.Group();
campfire.add(campfireVisual);

const emberBed = new THREE.Mesh(
  new THREE.CylinderGeometry(0.74, 0.92, 0.12, 12),
  new THREE.MeshStandardMaterial({
    color: 0x2a1b14,
    emissive: 0x7a2c08,
    emissiveIntensity: 0.55,
    roughness: 1
  })
);
emberBed.position.y = 0.06;
emberBed.receiveShadow = true;
campfire.add(emberBed);

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

for (let i = 0; i < 18; i += 1) {
  let placed = false;
  for (let attempt = 0; attempt < 40 && !placed; attempt += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 9 + Math.random() * 5.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (Math.abs(x) < 5 && Math.abs(z) < 5) continue;
    if (nearCampProp(x, z, 1.4)) continue;
    if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 2.1)) continue;
    createTree(x, z, 0.8 + Math.random());
    placed = true;
  }
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
for (let i = 0; i < 140; i += 1) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.16, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x173627, roughness: 1 })
  );
  const angle = Math.random() * Math.PI * 2;
  const radius = 5 + Math.random() * 41;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  if (nearCampProp(x, z, 1.2)) continue;
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
rightHand.position.set(0, 0, 0);
// The fist pivot sits exactly at the fist centre (0.41 below the arm mesh
// centre) and hangs off the arm mesh, so the hand and every tool follow the
// right arm while the grip stays in the palm.
const rightHandPivot = new THREE.Group();
rightHandPivot.position.set(0, -0.41, 0.01);
rightHandPivot.rotation.set(ARMED_ELBOW_BEND, 0, 0);
rightArmMesh.add(rightHandPivot);
rightHandPivot.add(rightHand);

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

// Tool pivots sit at the fist so each model follows the right arm and its animations.
const axe = new THREE.Group();
axe.position.set(0, 0, 0);
axe.rotation.set(ARMED_TOOL_PITCH, ARMED_TOOL_ROLL, 0);
rightHandPivot.add(axe);

const axeHandle = new THREE.Mesh(
  new THREE.CylinderGeometry(0.038, 0.048, 0.95, 6),
  new THREE.MeshStandardMaterial({ color: 0x7b4a27, roughness: 0.82, metalness: 0.02 })
);
axeHandle.position.y = 0.475;
axeHandle.castShadow = true;
axe.add(axeHandle);

const axeGrip = new THREE.Mesh(
  new THREE.CylinderGeometry(0.052, 0.052, 0.22, 6),
  new THREE.MeshStandardMaterial({ color: 0x3b2413, roughness: 0.95 })
);
axeGrip.position.y = 0;
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
axeHead.position.set(0.11, 0.72, 0);
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
axeBlade.position.set(0.27, 0.72, 0);
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
  handle.position.y = length * 0.5;
  handle.castShadow = true;
  group.add(handle);
  const grip = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.28, radius * 1.28, 0.2, 6),
    new THREE.MeshStandardMaterial({ color: 0x362012, roughness: 0.95 })
  );
  grip.position.y = 0;
  grip.castShadow = true;
  group.add(grip);
}

function createHeldPickaxe() {
  const pickaxe = new THREE.Group();
  addToolHandle(pickaxe, 0.92, 0.038);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.13, 0.13), ironToolMaterial);
  head.position.set(0.02, 0.76, 0);
  head.castShadow = true;
  pickaxe.add(head);

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.31, 4), ironEdgeMaterial);
  tip.position.set(0.42, 0.76, 0);
  tip.rotation.z = -Math.PI / 2;
  tip.castShadow = true;
  pickaxe.add(tip);

  const backTip = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.23, 4), ironToolMaterial);
  backTip.position.set(-0.35, 0.76, 0);
  backTip.rotation.z = Math.PI / 2;
  backTip.castShadow = true;
  pickaxe.add(backTip);

  return pickaxe;
}

function createHeldIronAxe() {
  const ironAxe = new THREE.Group();
  addToolHandle(ironAxe, 0.96, 0.045);

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.11), ironToolMaterial);
  head.position.set(0.11, 0.775, 0);
  head.castShadow = true;
  ironAxe.add(head);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.075), ironEdgeMaterial);
  blade.position.set(0.29, 0.775, 0);
  blade.rotation.z = -0.06;
  blade.castShadow = true;
  ironAxe.add(blade);

  const rivet = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.028, 0.13, 6),
    brassToolMaterial
  );
  rivet.rotation.x = Math.PI / 2;
  rivet.position.set(0.11, 0.775, 0.04);
  ironAxe.add(rivet);

  return ironAxe;
}

function createHeldIronSword() {
  const sword = new THREE.Group();
  addToolHandle(sword, 0.55, 0.035);

  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.08, 0.11), brassToolMaterial);
  guard.position.y = 0.3835;
  guard.castShadow = true;
  sword.add(guard);

  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.9, 0.055), ironEdgeMaterial);
  blade.position.y = 0.8835;
  blade.castShadow = true;
  sword.add(blade);

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.099, 0.24, 4), ironEdgeMaterial);
  tip.position.y = 1.4335;
  tip.castShadow = true;
  sword.add(tip);

  const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), brassToolMaterial);
  pommel.position.y = 0.0835;
  sword.add(pommel);

  return sword;
}

function createHeldTorch() {
  const torch = new THREE.Group();
  addToolHandle(torch, 0.52, 0.036);
  const wrap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.075, 0.06, 0.18, 7),
    new THREE.MeshStandardMaterial({ color: 0x3a2414, roughness: 0.95 })
  );
  wrap.position.y = 0.5;
  torch.add(wrap);
  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.11, 0.3, 6),
    new THREE.MeshBasicMaterial({
      color: 0xffa53a,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  flame.position.y = 0.72;
  torch.add(flame);
  return torch;
}

const heldPickaxe = createHeldPickaxe();
const heldIronAxe = createHeldIronAxe();
const heldIronSword = createHeldIronSword();
const heldTorch = createHeldTorch();
for (const [tool, group] of [
  ['pickaxe', heldPickaxe],
  ['torch', heldTorch],
  ['ironAxe', heldIronAxe],
  ['ironSword', heldIronSword]
]) {
  group.position.set(0, 0, 0);
  group.rotation.set(ARMED_TOOL_PITCH, ARMED_TOOL_ROLL, 0);
  group.visible = false;
  group.userData.baseY = group.position.y;
  group.userData.tool = tool;
  rightHandPivot.add(group);
}

const backpackMat = new THREE.MeshStandardMaterial({ color: 0x7c4a2a, roughness: 0.78, metalness: 0.02 });
const backpackTrimMat = new THREE.MeshStandardMaterial({ color: 0x4e2c18, roughness: 0.86 });
const backpackBuckleMat = new THREE.MeshStandardMaterial({ color: 0xe0b260, roughness: 0.42, metalness: 0.5 });

function createBackpackModel(scale = 1) {
  const bag = new THREE.Group();

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.27, 10, 8), backpackMat);
  body.scale.set(1, 1.12, 0.8);
  body.position.y = -0.04;
  body.castShadow = true;
  body.receiveShadow = true;
  bag.add(body);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.17, 0.2, 8), backpackTrimMat);
  neck.position.y = 0.27;
  neck.castShadow = true;
  bag.add(neck);

  const tie = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.025, 5, 10), backpackBuckleMat);
  tie.rotation.x = Math.PI / 2;
  tie.position.y = 0.3;
  bag.add(tie);

  const patch = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.12, 0.035, 2, 0.02), backpackTrimMat);
  patch.position.set(0, -0.08, 0.215);
  patch.castShadow = true;
  bag.add(patch);

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
  torch: heldTorch.clone(true),
  ironAxe: heldIronAxe.clone(true),
  ironSword: heldIronSword.clone(true)
};
const fpGripOffsets = { axe: 0.3, pickaxe: 0.34, torch: 0.2, ironAxe: 0.36, ironSword: 0.2 };
for (const [key, model] of Object.entries(fpToolModels)) {
  // The tool model origin is at the hand mount; lift each tool so the bottom
  // handle grip sits in the first-person hand instead of below it.
  model.position.set(0, fpGripOffsets[key], 0);
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
  if (nearCampProp(x, z, 1.8)) continue;
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
let heldItem = null;
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
    if (nearCampProp(x, z, 2.2)) continue;
    if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 2.1)) continue;
    if (berryBushes.some((bush) => Math.hypot(bush.x - x, bush.z - z) < 3.2)) continue;
    addBerryBush(x, z);
    placed = true;
  }
}

// Guarantee a few harvestable bushes in the small opening arena even when the
// random scatter happens to land most of them beyond the wall.
const arenaBushSpots = [
  [-12.5, 6.8],
  [12.8, -7.4],
  [-6.0, 12.5]
];
for (const [spotX, spotZ] of arenaBushSpots) {
  let placed = false;
  for (let attempt = 0; attempt < 12 && !placed; attempt += 1) {
    const x = spotX + (Math.random() - 0.5) * 1.6;
    const z = spotZ + (Math.random() - 0.5) * 1.6;
    if (Math.hypot(x, z) > 15.5) continue;
    if (nearCampProp(x, z, 1.4)) continue;
    if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 1.8)) continue;
    if (berryBushes.some((bush) => Math.hypot(bush.x - x, bush.z - z) < 2.4)) continue;
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
  if (nearCampProp(x, z, 2 * scale)) return false;
  if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 1.9 * scale)) return false;
  if (berryBushes.some((bush) => Math.hypot(bush.x - x, bush.z - z) < 2 * scale)) return false;
  if (ironRocks.some((rock) => Math.hypot(rock.x - x, rock.z - z) < 2.2 * scale)) return false;
  return true;
}

// Keep the starting ring's iron inside the 16 m camp footprint so the first
// arena has every listed resource without crowding the 20 m wall.
const rockClusters = [
  [11.8, -5.2], [-12.6, -4.2], [7.8, 10.8], [-8.4, -10.2]
];
for (const [clusterX, clusterZ] of rockClusters) {
  let placed = 0;
  for (let attempt = 0; attempt < 26 && placed < 2; attempt += 1) {
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

// A handful of plain gray stones break up the grass between the landmarks.
const arenaStoneMaterial = new THREE.MeshStandardMaterial({
  color: 0x6a7472,
  roughness: 0.98,
  flatShading: true
});
const arenaStoneSpots = [
  [10.5, 7.5, 1.15],
  [-12.2, 2.2, 0.95],
  [-3.8, 12.3, 1.05],
  [2.0, -13.5, 0.85],
  [-10.8, -8.0, 0.78]
];
for (const [x, z, scale] of arenaStoneSpots) {
  if (nearCampProp(x, z, 1.0)) continue;
  if (treeData.some((tree) => Math.hypot(tree.position.x - x, tree.position.z - z) < 1.5)) continue;
  if (ironRocks.some((rock) => Math.hypot(rock.x - x, rock.z - z) < 1.8)) continue;
  const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.52 * scale, 0), arenaStoneMaterial);
  stone.position.set(x, getGroundHeight(x, z) + 0.25 * scale, z);
  stone.scale.set(1.15, 0.62, 0.95);
  stone.rotation.set(Math.random() * 0.35, Math.random() * Math.PI, Math.random() * 0.25);
  stone.castShadow = true;
  stone.receiveShadow = true;
  world.add(stone);
  solidProps.push({ x, z, radius: 0.44 * scale, type: 'stone' });
}

// ---------- Crafting bench & grinder ----------

const bench = new THREE.Group();
const benchParts = {};
const benchTier2Group = new THREE.Group();
const benchTier3Group = new THREE.Group();

const benchWoodMaterial = new THREE.MeshStandardMaterial({ color: 0x8a5a2e, roughness: 0.85, metalness: 0.04 });
const benchWoodDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x5c3a1d, roughness: 0.9 });
const benchMetalMaterial = new THREE.MeshStandardMaterial({ color: 0x8d9aa1, roughness: 0.4, metalness: 0.68 });
const benchMetalDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x566169, roughness: 0.46, metalness: 0.6 });

function drawStockSign(kind, value, bright) {
  const canvasEl = document.createElement('canvas');
  canvasEl.width = 192;
  canvasEl.height = 112;
  const g = canvasEl.getContext('2d');

  const paint = (amount) => {
    g.clearRect(0, 0, 192, 112);
    g.fillStyle = kind === 'wood' ? '#6b4322' : '#545d63';
    g.fillRect(0, 0, 192, 112);
    g.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    g.lineWidth = 8;
    g.strokeRect(4, 4, 184, 104);
    g.fillStyle = 'rgba(255, 255, 255, 0.08)';
    g.fillRect(6, 6, 180, 18);

    if (kind === 'wood') {
      g.fillStyle = '#d79a58';
      g.fillRect(18, 44, 52, 26);
      g.fillStyle = '#b87a3d';
      g.beginPath();
      g.arc(18, 57, 13, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#8a5526';
      g.lineWidth = 3;
      g.beginPath();
      g.arc(18, 57, 6, 0, Math.PI * 2);
      g.stroke();
    } else {
      g.fillStyle = '#dfe9ee';
      g.beginPath();
      g.moveTo(46, 36);
      g.lineTo(24, 60);
      g.lineTo(40, 60);
      g.lineTo(32, 82);
      g.lineTo(56, 54);
      g.lineTo(40, 54);
      g.closePath();
      g.fill();
    }

    g.fillStyle = bright ? '#fff6cf' : '#ffe1a8';
    g.font = 'bold 58px system-ui, sans-serif';
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    g.fillText(String(amount), 176, 62);
  };

  paint(value);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return {
    mesh: null,
    pop: 0,
    setValue(amount, bright) {
      paint(amount);
      texture.needsUpdate = true;
      if (this.mesh) this.pop = 1;
    },
    texture
  };
}

function createBenchSign(kind, x, bright) {
  const sign = drawStockSign(kind, 0, bright);
  const material = new THREE.MeshBasicMaterial({ map: sign.texture, transparent: true });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.42), material);
  mesh.position.set(x, 0.66, 0.515);
  sign.mesh = mesh;
  return sign;
}

{
  const tabletop = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.17, 1.0), benchWoodMaterial);
  tabletop.position.y = 0.94;
  tabletop.castShadow = true;
  tabletop.receiveShadow = true;
  bench.add(tabletop);

  const apron = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.16, 0.16), benchWoodDarkMaterial);
  apron.position.set(0, 0.8, 0.42);
  bench.add(apron);
  const apronBack = apron.clone();
  apronBack.position.z = -0.42;
  bench.add(apronBack);

  for (const [lx, lz] of [[-1.08, -0.36], [1.08, -0.36], [-1.08, 0.36], [1.08, 0.36]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.92, 0.2), benchWoodDarkMaterial);
    leg.position.set(lx, 0.46, lz);
    leg.castShadow = true;
    bench.add(leg);

    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.1, 0.28), benchMetalMaterial);
    bracket.position.set(lx * 0.94, 0.86, lz * 0.94);
    bracket.castShadow = true;
    bench.add(bracket);
    const bracketLow = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.24), benchMetalDarkMaterial);
    bracketLow.position.set(lx * 0.94, 0.14, lz * 0.94);
    bench.add(bracketLow);
  }

  const brace = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.78), benchWoodDarkMaterial);
  brace.position.set(0, 0.42, 0);
  bench.add(brace);

  const hammerHandle = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, 0.62), benchWoodMaterial);
  hammerHandle.position.set(-0.72, 1.05, 0.02);
  hammerHandle.rotation.y = 0.36;
  bench.add(hammerHandle);
  const hammerHead = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.13, 0.14), benchMetalDarkMaterial);
  hammerHead.position.set(-0.55, 1.07, -0.16);
  hammerHead.rotation.y = 0.36;
  hammerHead.castShadow = true;
  bench.add(hammerHead);

  const sawBlade = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.035, 0.2), benchMetalMaterial);
  sawBlade.position.set(0.62, 1.05, -0.12);
  sawBlade.rotation.y = -0.22;
  bench.add(sawBlade);
  const sawHandle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 0.15), benchWoodDarkMaterial);
  sawHandle.position.set(1.14, 1.06, -0.02);
  sawHandle.rotation.y = -0.22;
  bench.add(sawHandle);
  for (let i = 0; i < 7; i += 1) {
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.07, 3), benchMetalMaterial);
    tooth.position.set(0.62 + (i - 3) * 0.11, 1.02, -0.22);
    tooth.rotation.x = Math.PI / 2;
    bench.add(tooth);
  }

  benchParts.woodSign = createBenchSign('wood', -0.62, false);
  benchParts.ironSign = createBenchSign('iron', 0.62, false);
  bench.add(benchParts.woodSign.mesh);
  bench.add(benchParts.ironSign.mesh);

  {
    const viseBase = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.28), benchMetalDarkMaterial);
    viseBase.position.set(-1.06, 1.1, 0.22);
    benchTier2Group.add(viseBase);
    const viseJaw = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.16, 0.08), benchMetalMaterial);
    viseJaw.position.set(-1.06, 1.18, 0.34);
    benchTier2Group.add(viseJaw);
    const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 6), benchMetalMaterial);
    screw.rotation.z = Math.PI / 2;
    screw.position.set(-1.06, 1.1, 0.44);
    benchTier2Group.add(screw);

    const lampPost = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.55, 6), benchMetalDarkMaterial);
    lampPost.position.set(1.2, 1.72, -0.42);
    benchTier2Group.add(lampPost);
    const lampArm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.06), benchMetalDarkMaterial);
    lampArm.position.set(0.98, 2.46, -0.42);
    benchTier2Group.add(lampArm);
    const lamp = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.22, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a2b1a, emissive: 0xffb04a, emissiveIntensity: 0.55, roughness: 0.6 })
    );
    lamp.position.set(0.74, 2.34, -0.42);
    benchTier2Group.add(lamp);
    const lampLight = new THREE.PointLight(0xffbe6a, 0.9, 5.5, 2);
    lampLight.position.set(0.74, 2.2, -0.42);
    benchTier2Group.add(lampLight);
  }

  {
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 1.5, 6), benchMetalDarkMaterial);
      post.position.set(side * 1.05, 1.7, -0.72);
      benchTier3Group.add(post);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 0.08), benchMetalMaterial);
    rail.position.set(0, 2.38, -0.72);
    benchTier3Group.add(rail);
    for (let i = 0; i < 4; i += 1) {
      const hook = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.2, 0.04), benchMetalMaterial);
      hook.position.set(-0.75 + i * 0.5, 2.26, -0.72);
      benchTier3Group.add(hook);
      const tool = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.5, 0.12), benchMetalDarkMaterial);
      tool.position.set(-0.75 + i * 0.5, 1.98, -0.72);
      benchTier3Group.add(tool);
    }
  }

  benchTier2Group.visible = false;
  benchTier3Group.visible = false;
  bench.add(benchTier2Group, benchTier3Group);

  const hitbox = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 2.2, 1.5),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false })
  );
  hitbox.position.y = 1.1;
  bench.add(hitbox);
}

bench.position.set(BENCH_POSITION.x, getGroundHeight(BENCH_POSITION.x, BENCH_POSITION.z), BENCH_POSITION.z);
bench.rotation.y = Math.atan2(-BENCH_POSITION.x, -BENCH_POSITION.z);
bench.userData.benchRef = true;
world.add(bench);
solidProps.push({ x: BENCH_POSITION.x, z: BENCH_POSITION.z, radius: 1.32, type: 'bench' });

const grinder = new THREE.Group();
const grinderParts = {};
{
  const redMaterial = new THREE.MeshStandardMaterial({ color: 0x9b2f2a, roughness: 0.62, metalness: 0.18 });
  const redDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x6c1d1a, roughness: 0.7, metalness: 0.15 });
  const hopperMaterial = new THREE.MeshStandardMaterial({ color: 0x7d8a91, roughness: 0.4, metalness: 0.72, side: THREE.DoubleSide });

  const base = new THREE.Mesh(new RoundedBoxGeometry(1.18, 0.28, 0.86, 2, 0.05), redMaterial);
  base.position.y = 0.3;
  base.castShadow = true;
  base.receiveShadow = true;
  grinder.add(base);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.04, 0.08, 0.72), redDarkMaterial);
  deck.position.y = 0.48;
  grinder.add(deck);

  grinderParts.wheels = [];
  for (const [wx, wz] of [[-0.45, -0.33], [0.45, -0.33], [-0.45, 0.33], [0.45, 0.33]]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.1, 10), benchMetalDarkMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, 0.16, wz);
    wheel.castShadow = true;
    grinder.add(wheel);
    grinderParts.wheels.push(wheel);
  }

  const shakeGroup = new THREE.Group();
  grinder.add(shakeGroup);
  grinderParts.shakeGroup = shakeGroup;

  const hopper = new THREE.Mesh(
    new THREE.CylinderGeometry(0.66, 0.34, 0.88, 4, 1, true),
    hopperMaterial
  );
  hopper.position.y = 1.02;
  hopper.rotation.y = Math.PI / 4;
  hopper.castShadow = true;
  shakeGroup.add(hopper);
  grinderParts.hopper = hopper;

  const rim = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.09, 0.98), benchMetalDarkMaterial);
  rim.position.y = 1.46;
  rim.rotation.y = Math.PI / 4;
  rim.castShadow = true;
  shakeGroup.add(rim);

  const throat = new THREE.Mesh(
    new THREE.BoxGeometry(0.52, 0.14, 0.52),
    new THREE.MeshStandardMaterial({ color: 0x11181b, roughness: 1 })
  );
  throat.position.y = 1.4;
  throat.rotation.y = Math.PI / 4;
  shakeGroup.add(throat);

  const chute = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.34, 0.12), hopperMaterial);
  chute.position.set(0, 0.64, 0.46);
  grinder.add(chute);

  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.42, 6), benchMetalMaterial);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(-0.7, 0.72, 0.05);
  grinder.add(handle);
}

grinder.position.set(GRINDER_POSITION.x, getGroundHeight(GRINDER_POSITION.x, GRINDER_POSITION.z), GRINDER_POSITION.z);
grinder.rotation.y = Math.atan2(-GRINDER_POSITION.x, -GRINDER_POSITION.z);
grinder.userData.grinderRef = true;
world.add(grinder);
solidProps.push({ x: GRINDER_POSITION.x, z: GRINDER_POSITION.z, radius: 0.72, type: 'grinder' });

// ---------- Arena landmarks ----------

const wellStoneMaterial = new THREE.MeshStandardMaterial({ color: 0x626b6d, roughness: 0.96, flatShading: true });
const wellWaterMaterial = new THREE.MeshStandardMaterial({
  color: 0x153c46,
  roughness: 0.22,
  metalness: 0.18,
  transparent: true,
  opacity: 0.92
});
const wellWoodMaterial = new THREE.MeshStandardMaterial({ color: 0x6a4828, roughness: 0.9 });
const wellRoofMaterial = new THREE.MeshStandardMaterial({ color: 0x4a3320, roughness: 0.92 });

const well = new THREE.Group();
{
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.25, 1.35, 12, 1, true), wellStoneMaterial);
  ring.position.y = 0.68;
  ring.castShadow = true;
  ring.receiveShadow = true;
  well.add(ring);

  const lip = new THREE.Mesh(new THREE.TorusGeometry(1.19, 0.11, 5, 14), wellStoneMaterial);
  lip.rotation.x = Math.PI / 2;
  lip.position.y = 1.35;
  lip.castShadow = true;
  well.add(lip);

  const water = new THREE.Mesh(new THREE.CircleGeometry(1.06, 18), wellWaterMaterial);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.72;
  well.add(water);

  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.13, 2.65, 0.13), wellWoodMaterial);
    post.position.set(side * 0.95, 2.2, 0);
    post.castShadow = true;
    well.add(post);
  }

  const beam = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.13, 0.13), wellWoodMaterial);
  beam.position.y = 3.2;
  beam.castShadow = true;
  well.add(beam);

  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.72, 1.1, 4), wellRoofMaterial);
  roof.position.y = 3.9;
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  well.add(roof);

  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.95, 5), wellWoodMaterial);
  rope.position.set(0, 2.68, 0);
  well.add(rope);

  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.24, 8, 1, true), wellWoodMaterial);
  bucket.position.set(0, 2.12, 0);
  bucket.castShadow = true;
  well.add(bucket);
}
well.position.set(WELL_POSITION.x, getGroundHeight(WELL_POSITION.x, WELL_POSITION.z), WELL_POSITION.z);
well.rotation.y = Math.atan2(-WELL_POSITION.x, -WELL_POSITION.z);
world.add(well);
solidProps.push({ x: WELL_POSITION.x, z: WELL_POSITION.z, radius: 1.38, type: 'well' });

const pondWaterMaterial = new THREE.MeshStandardMaterial({
  color: 0x173f49,
  roughness: 0.18,
  metalness: 0.25,
  transparent: true,
  opacity: 0.92
});
const pond = new THREE.Group();
{
  const water = new THREE.Mesh(new THREE.CircleGeometry(2.55, 24), pondWaterMaterial);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.055;
  pond.add(water);

  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x4b5654, roughness: 0.98, flatShading: true });
  for (let i = 0; i < 14; i += 1) {
    const angle = (i / 14) * Math.PI * 2;
    const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26 + Math.random() * 0.13, 0), edgeMaterial);
    stone.position.set(Math.cos(angle) * 2.65, 0.12, Math.sin(angle) * 2.65);
    stone.scale.y = 0.6;
    stone.rotation.y = Math.random() * Math.PI;
    stone.castShadow = true;
    stone.receiveShadow = true;
    pond.add(stone);
  }
}
pond.position.set(POND_POSITION.x, getGroundHeight(POND_POSITION.x, POND_POSITION.z), POND_POSITION.z);
world.add(pond);

function createNoticeTexture() {
  const canvasEl = document.createElement('canvas');
  canvasEl.width = 640;
  canvasEl.height = 420;
  const g = canvasEl.getContext('2d');

  g.fillStyle = '#b48450';
  g.fillRect(0, 0, 640, 420);
  g.strokeStyle = '#6f4c2a';
  g.lineWidth = 14;
  g.strokeRect(7, 7, 626, 406);
  g.strokeStyle = 'rgba(82, 52, 25, 0.35)';
  g.lineWidth = 2;
  for (let i = 0; i < 9; i += 1) {
    g.beginPath();
    g.moveTo(28 + i * 14, 20);
    g.lineTo(-20 + i * 14, 400);
    g.stroke();
  }

  g.fillStyle = '#2b1f16';
  g.textAlign = 'center';
  g.font = "700 44px 'Patrick Hand', 'Comic Sans MS', cursive";
  g.fillText('MISSING KID', 320, 80);
  g.fillText('LOCATIONS', 320, 126);

  for (let i = 0; i < 3; i += 1) {
    const x = 70 + i * 172;
    g.fillStyle = 'rgba(238, 213, 167, 0.28)';
    g.fillRect(x, 168, 156, 196);
    g.strokeStyle = '#5a3c22';
    g.lineWidth = 5;
    g.strokeRect(x, 168, 156, 196);
    g.fillStyle = 'rgba(62, 43, 27, 0.42)';
    g.font = "400 24px 'Patrick Hand', 'Comic Sans MS', cursive";
    g.fillText('empty', x + 78, 346);
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 2;
  return texture;
}

const noticeBoard = new THREE.Group();
{
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.2, 0.14), wellWoodMaterial);
    post.position.set(side * 0.92, 1.1, -0.08);
    post.castShadow = true;
    noticeBoard.add(post);
  }

  const board = new THREE.Mesh(new THREE.BoxGeometry(2.25, 1.48, 0.12), wellWoodMaterial);
  board.position.y = 1.72;
  board.castShadow = true;
  board.receiveShadow = true;
  noticeBoard.add(board);

  const face = new THREE.Mesh(
    new THREE.PlaneGeometry(2.12, 1.39),
    new THREE.MeshBasicMaterial({ map: createNoticeTexture() })
  );
  face.position.set(0, 1.72, 0.066);
  noticeBoard.add(face);

  const cap = new THREE.Mesh(new THREE.BoxGeometry(2.48, 0.13, 0.35), wellRoofMaterial);
  cap.position.y = 2.51;
  cap.rotation.z = 0.035;
  cap.castShadow = true;
  noticeBoard.add(cap);
}
noticeBoard.position.set(NOTICE_POSITION.x, getGroundHeight(NOTICE_POSITION.x, NOTICE_POSITION.z), NOTICE_POSITION.z);
noticeBoard.rotation.y = Math.atan2(-NOTICE_POSITION.x, -NOTICE_POSITION.z);
world.add(noticeBoard);
solidProps.push({ x: NOTICE_POSITION.x, z: NOTICE_POSITION.z, radius: 0.92, type: 'notice' });

const benchState = {
  stock: { wood: 0, iron: 0 },
  tier: 1,
  crafted: new Set(),
  signPop: { wood: 0, iron: 0 }
};

const grinderDrops = [];

function updateBenchSigns(popKind = '') {
  if (benchParts.woodSign) benchParts.woodSign.setValue(benchState.stock.wood, benchState.tier >= 3);
  if (benchParts.ironSign) benchParts.ironSign.setValue(benchState.stock.iron, benchState.tier >= 3);
  if (popKind) benchState.signPop[popKind] = 1;
}

function updateBenchVisuals() {
  benchTier2Group.visible = benchState.tier >= 2;
  benchTier3Group.visible = benchState.tier >= 3;
  updateBenchSigns();
}

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

const FIRE_FEED_RANGE = 4;
const GRINDER_RANGE = 3;
const SACK_FIRE_RANGE = 6;
const SACK_GRINDER_RANGE = 4;
const BENCH_PROMPT_RANGE = 4;
const BENCH_INTERACT_RANGE = 4;
const TREE_INTERACT_RANGE = 2.5;
const FIRE_LEVEL_MAX = 5;
const FIRE_LEVELUP_RESET = 50;
const ARENA_RADIUS_START = 20;
const ARENA_RADIUS_BY_LEVEL = { 1: 20, 2: 220, 3: 420, 4: 620, 5: 820 };
const FIRE_GAIN_PER_LOG = { 1: 30, 2: 12, 3: 5, 4: 3, 5: 2 };
const FIRE_DRAIN_PER_MINUTE = { 1: 10, 2: 4, 3: 2, 4: 1.2, 5: 0.8 };
const FIRE_SAFE_RADII = { 1: 8, 2: 12, 3: 16, 4: 20, 5: 26 };
const FIRE_FLAME_HEIGHTS = { 1: 1, 2: 2, 3: 2.5, 4: 3, 5: 4 };
const TREE_SHAKE_TIME = 0.36;
const TREE_FALL_TIME = 1.15;
const SAPLING_GROW_TIME = 120;
const SAPLING_STAGE_SCALES = [0.35, 0.58, 0.82, 1.06];
const ATTACK_DURATION = 0.34;
const DAY_LENGTH = 180;
const NIGHT_LENGTH = 120;
const CYCLE_LENGTH = DAY_LENGTH + NIGHT_LENGTH;
const DUSK_LENGTH = 16;
const DAWN_LENGTH = 14;
const MAX_ENEMIES = 30;
const PICKUP_RANGE = 3.35;
const CARRY_LIMIT = 1;
const DEFAULT_BACKPACK_CAPACITY = 5;
const GOOD_SACK_CAPACITY = 10;
const HUNGER_DRAIN_PER_SECOND = 0.42;
const BERRY_HUNGER = 18;
const EQUIP_TIME = 0.3;
const STACK_LIMIT = 20;
const MAX_BEAR_TRAPS = 8;
const IRON_REGROW_MIN = 28;
const IRON_REGROW_MAX = 44;
const ITEM_NAMES = {
  wood: 'Wood log',
  sapling: 'Sapling',
  berry: 'Berry',
  iron: 'Iron piece',
  axe: 'Old Axe',
  pickaxe: 'Pickaxe',
  torch: 'Torch',
  ironAxe: 'Good Axe',
  ironSword: 'Iron Sword',
  ironWall: 'Iron Wall',
  logWall: 'Log Wall',
  bearTrap: 'Bear Trap'
};
const DRAG_NAMES = {
  wood: 'Log',
  sapling: 'Sapling',
  berry: 'Berries',
  iron: 'Iron'
};
// Burnable dragged items advertise how many times the current per-log fire
// progress they would add. Logs use one flame; two-flame fuel can be added later.
const ITEM_FLAMES = { wood: 1 };
const FIRE_FUEL_TYPES = new Set(['wood']);
const TOOL_STATS = {
  axe: { cooldown: 0.58, damage: 1, treePower: 1, rockPower: 0, range: 3.3, reach: 2.5 },
  pickaxe: { cooldown: 0.5, damage: 1, treePower: 0, rockPower: 1, range: 3, reach: 2.5 },
  torch: { cooldown: 0.6, damage: 1, treePower: 0, rockPower: 0, range: 2.4, reach: 2.2 },
  ironAxe: { cooldown: 0.4, damage: 2, treePower: 2, rockPower: 0, range: 3.5, reach: 2.8 },
  ironSword: { cooldown: 0.42, damage: 3, treePower: 0, rockPower: 0, range: 3.6, reach: 2.8 }
};
const TOOL_ORDER = ['axe', 'backpack', 'pickaxe', 'torch', 'ironSword'];

// Crafting recipes. `tier` is the bench level required (1 = no heading).
const RECIPES = [
  { id: 'pickaxe', tier: 1, name: 'Pickaxe', icon: '⛏', cost: { wood: 4, iron: 1 }, desc: 'Mine iron rocks at the forest edge.', kind: 'tool', repeatable: true },
  { id: 'torch', tier: 1, name: 'Torch', icon: '🔥', cost: { wood: 2, iron: 1 }, desc: 'A warm light to carry into the dark.', kind: 'tool', repeatable: true },
  { id: 'bench2', tier: 1, name: 'Crafting Bench 2', icon: '🛠', cost: { wood: 8, iron: 6 }, desc: 'Upgrade the bench to unlock tier 2 gear.', kind: 'bench', oneTime: true, benchTier: 2 },
  { id: 'ironAxe', tier: 2, name: 'Good Axe', icon: '🪓', cost: { wood: 6, iron: 3 }, desc: 'Chops faster and hits harder. Replaces the Old Axe.', kind: 'tool', oneTime: true },
  { id: 'goodSack', tier: 2, name: 'Good Sack', icon: '🎒', cost: { wood: 6, iron: 5 }, desc: 'Sack capacity grows from 5 to 10.', kind: 'sack', oneTime: true },
  { id: 'logWall', tier: 2, name: 'Log Wall', icon: '🪵', cost: { wood: 12 }, desc: 'A sturdy wooden wall. Craft it, then place it.', kind: 'placeable', placeType: 'logWall', repeatable: true },
  { id: 'bearTrap', tier: 2, name: 'Bear Trap', icon: '⚙', cost: { iron: 3 }, desc: 'Damages and stuns a monster that steps on it.', kind: 'placeable', placeType: 'bearTrap', repeatable: true, trap: true },
  { id: 'bench3', tier: 2, name: 'Crafting Bench 3', icon: '🛠', cost: { wood: 15, iron: 10 }, desc: 'Upgrade the bench to unlock tier 3 gear.', kind: 'bench', oneTime: true, benchTier: 3 },
  { id: 'ironSword', tier: 3, name: 'Iron Sword', icon: '🗡', cost: { wood: 5, iron: 5 }, desc: 'A strong melee blade for monsters.', kind: 'tool', repeatable: true },
  { id: 'ironWall', tier: 3, name: 'Iron Wall', icon: '🛡', cost: { wood: 8, iron: 6 }, desc: 'A sturdy metal wall. Craft it, then place it.', kind: 'placeable', placeType: 'ironWall', repeatable: true },
  { id: 'bench4', tier: 4, name: 'Crafting Bench 4', icon: '?', cost: {}, desc: 'Coming soon.', kind: 'locked' }
];
const RECIPE_BY_ID = new Map(RECIPES.map((recipe) => [recipe.id, recipe]));
let interactPrompt = 'INTERACT';
let toastTimer = 0;
let touchDebugTimer = 0;
let lastInventorySignature = '';


function getCampfireDistance() {
  return Math.hypot(
    player.position.x - campfire.position.x,
    player.position.z - campfire.position.z
  );
}

function getBenchDistance() {
  return Math.hypot(
    player.position.x - BENCH_POSITION.x,
    player.position.z - BENCH_POSITION.z
  );
}

function getGrinderDistance() {
  return Math.hypot(
    player.position.x - GRINDER_POSITION.x,
    player.position.z - GRINDER_POSITION.z
  );
}

function getFireScareRadius() {
  return state.fireOut ? 0 : (FIRE_SAFE_RADII[state.fireLevel] || 8);
}

function getCampfireSafeRadius() {
  return FIRE_SAFE_RADII[state.fireLevel] || 8;
}

function isToolType(tool) {
  return tool === 'axe' || tool === 'pickaxe' || tool === 'torch' || tool === 'ironAxe' || tool === 'ironSword';
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
  state.grinderInReach = state.started && getGrinderDistance() <= GRINDER_RANGE;
  state.benchInReach = state.started && getBenchDistance() <= BENCH_PROMPT_RANGE;
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

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('visible');
  toastTimer = 1.5;
}

let mapNoticeTimeout = 0;
function showMapExpansionNotice() {
  mapExpandedNotice.classList.remove('visible');
  void mapExpandedNotice.offsetWidth;
  mapExpandedNotice.classList.add('visible');
  clearTimeout(mapNoticeTimeout);
  mapNoticeTimeout = setTimeout(() => {
    mapExpandedNotice.classList.remove('visible');
  }, 9300);
}

// ---------- Resource hit meter ----------
// One small bar follows the tree or rock most recently hit. It shows how many
// of the required hits landed and hides after five seconds without a new hit.
const hitMeterState = { kind: null, target: null, timer: 0 };
const hitMeterAnchor = new THREE.Vector3();

function hideHitMeter() {
  hitMeterState.kind = null;
  hitMeterState.target = null;
  hitMeterState.timer = 0;
  hitMeterEl.classList.remove('visible');
}

function registerResourceHit(kind, target) {
  const data = kind === 'tree' ? target.userData : target;
  const total = data.hitsMax || (kind === 'tree' ? TREE_HITS_BASE : IRON_ROCK_HITS);
  const done = clamp(total - Math.max(0, data.hits), 0, total);
  hitMeterState.kind = kind;
  hitMeterState.target = target;
  hitMeterState.timer = HIT_METER_HIDE_TIME;
  hitMeterText.textContent = `${done}/${total}`;
  hitMeterFill.style.width = `${(done / total) * 100}%`;
  hitMeterEl.classList.add('visible');
}

function updateHitMeter(delta) {
  const { kind, target } = hitMeterState;
  if (!target) return;
  if (!state.started || state.gameOver || state.falling > 0) {
    hideHitMeter();
    return;
  }
  if (kind === 'tree') {
    if (!target.visible || target.userData.falling || !target.userData.choppable) {
      hideHitMeter();
      return;
    }
  } else if (target.broken) {
    hideHitMeter();
    return;
  }

  hitMeterState.timer -= delta;
  if (hitMeterState.timer <= 0) {
    hideHitMeter();
    return;
  }

  if (kind === 'tree') {
    const scale = target.userData.scale || 1;
    hitMeterAnchor.set(target.position.x, target.position.y + 2.7 * scale, target.position.z);
  } else {
    hitMeterAnchor.set(target.x, getGroundHeight(target.x, target.z) + 1.5 * target.scale, target.z);
  }
  hitMeterAnchor.project(camera);
  if (hitMeterAnchor.z > 1) {
    hitMeterEl.classList.remove('visible');
    return;
  }

  const px = clamp((hitMeterAnchor.x * 0.5 + 0.5) * window.innerWidth, 54, window.innerWidth - 54);
  const py = Math.max(112, (-hitMeterAnchor.y * 0.5 + 0.5) * window.innerHeight);
  hitMeterEl.style.left = `${px}px`;
  hitMeterEl.style.top = `${py}px`;
  hitMeterEl.classList.add('visible');
}

function showTouchDebug(label) {
  touchDebugEl.textContent = label;
  touchDebugEl.classList.add('visible');
  touchDebugTimer = 2;
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
  if (heldItem === item) heldItem = null;
  world.remove(item.mesh);
}

function popGroundItem(item) {
  if (!item || item.popping > 0) return;
  if (heldItem === item) heldItem = null;
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
  { x: GRINDER_POSITION.x - 1.5, z: GRINDER_POSITION.z - 1.2 },
  { x: GRINDER_POSITION.x - 1.1, z: GRINDER_POSITION.z + 1.4 },
  { x: BENCH_POSITION.x - 2.0, z: BENCH_POSITION.z - 0.6 },
  { x: BENCH_POSITION.x + 0.4, z: BENCH_POSITION.z + 1.8 }
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
  for (const item of groundItems) {
    item.carried = false;
    item.popping = 0;
    world.remove(item.mesh);
  }
  groundItems.length = 0;
  heldItem = null;
  regrowBerries();
  spawnStarterIron();
  updateHud();
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
  return state.backpack[type] + (heldItem?.type === type ? 1 : 0);
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
  if (backpackCount() >= state.backpackCapacity) {
    showToast('Backpack is full');
    return false;
  }
  state.backpack[item.type] += 1;
  state.sackOrder.push(item.type);
  popGroundItem(item);
  updateHud();
  backpackSlot.classList.remove('pop');
  void backpackSlot.offsetWidth;
  backpackSlot.classList.add('pop');
  playPickupSound();
  showToast(`+1 ${ITEM_NAMES[item.type]}`);
  return true;
}

function pickUpItem(item) {
  if (!item || item.carried || item.popping > 0) return false;
  if (heldItem) {
    showToast('Hands full');
    return false;
  }
  item.carried = true;
  item.landed = true;
  item.pickupDelay = 0;
  heldItem = item;
  // Place the item on the camera-facing side immediately; subsequent camera
  // turns use the damped follow in updateGroundItems.
  const yaw = state.cameraYaw;
  item.mesh.position.set(
    player.position.x - Math.cos(yaw) * 0.98 + Math.sin(yaw) * 0.22,
    player.position.y + 1.0,
    player.position.z + Math.sin(yaw) * 0.98 + Math.cos(yaw) * 0.22
  );
  updateHud();
  playPickupSound();
  showToast(`Picked up ${DRAG_NAMES[item.type] || ITEM_NAMES[item.type]}`);
  return true;
}

function undragItem() {
  if (!state.started || state.gameOver || state.falling || state.paused
    || state.craftOpen || state.settingsOpen || state.dropCooldown > 0 || !heldItem) return;

  const item = heldItem;
  heldItem = null;
  item.carried = false;
  const x = player.position.x;
  const z = player.position.z;
  item.x = x;
  item.z = z;
  item.groundY = getGroundHeight(x, z);
  item.velocityY = 0.9;
  item.landed = false;
  item.pickupDelay = 0.3;
  item.mesh.position.set(x, player.position.y + 1.05, z);
  state.dropCooldown = 0.3;
  updateHud();
  showToast('Released item');
}

function sackFreeSpace() {
  return Math.max(0, state.backpackCapacity - backpackCount());
}

function removeLastSackItem(type) {
  const index = state.sackOrder.lastIndexOf(type);
  if (index < 0) return false;
  state.sackOrder.splice(index, 1);
  return true;
}

function takeLastFromSack() {
  if (!state.sackOrder.length) return null;
  const type = state.sackOrder.pop();
  if (state.backpack[type] > 0) state.backpack[type] -= 1;
  sackCounter.classList.remove('pop');
  void sackCounter.offsetWidth;
  sackCounter.classList.add('pop');
  backpackSlot.classList.remove('pop');
  void backpackSlot.offsetWidth;
  backpackSlot.classList.add('pop');
  return type;
}

function storeDraggedItem() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  if (!isBackpackEquipped() || !heldItem) return;
  if (sackFreeSpace() <= 0) {
    showToast('Sack full');
    return;
  }
  const item = heldItem;
  heldItem = null;
  state.backpack[item.type] = (state.backpack[item.type] || 0) + 1;
  state.sackOrder.push(item.type);
  popGroundItem(item);
  backpackSlot.classList.remove('pop');
  void backpackSlot.offsetWidth;
  backpackSlot.classList.add('pop');
  sackCounter.classList.remove('pop');
  void sackCounter.offsetWidth;
  sackCounter.classList.add('pop');
  playPickupSound();
  showToast(`Stored ${DRAG_NAMES[item.type] || ITEM_NAMES[item.type]}`);
  updateHud();
}

function unstoreLastItem() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  if (!isBackpackEquipped() || !state.sackOrder.length) return;
  if (heldItem) {
    showToast('Hands full');
    return;
  }

  const lastType = state.sackOrder[state.sackOrder.length - 1];
  if (lastType === 'wood' && getCampfireDistance() <= SACK_FIRE_RANGE) {
    takeLastFromSack();
    updateHud();
    spawnFlyingItem(lastType, new THREE.Vector3(
      campfire.position.x,
      campfire.position.y + 0.8,
      campfire.position.z
    ), () => {
      const gain = FIRE_GAIN_PER_LOG[state.fireLevel] || 2;
      addFireProgress(gain);
      showToast(`Log added (+${gain})`);
    });
    return;
  }

  if (getGrinderDistance() <= SACK_GRINDER_RANGE && (lastType === 'wood' || lastType === 'iron')) {
    takeLastFromSack();
    updateHud();
    spawnFlyingItem(lastType, new THREE.Vector3(
      grinder.position.x,
      grinder.position.y + 1.45,
      grinder.position.z
    ), () => {
      benchState.stock[lastType] += 1;
      spawnGrinderDrop(lastType);
      playGrinderSound();
      grinderParts.shake = 0.5;
      refreshCraftUi(lastType);
      updateHud();
      showToast(`+1 ${lastType} to the bench`);
    });
    return;
  }

  const type = takeLastFromSack();
  const item = spawnGroundItem(type, player.position.x, player.position.z, {
    startY: player.position.y + 1.05,
    velocityY: 0.35,
    pickupDelay: 0
  });
  item.landed = true;
  pickUpItem(item);
  updateHud();
}

function eatDraggedItem() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  if (!heldItem || heldItem.type !== 'berry') return;
  const item = heldItem;
  heldItem = null;
  popGroundItem(item);
  state.hunger = clamp(state.hunger + BERRY_HUNGER, 0, 100);
  playPickupSound();
  showToast(`Ate berries (+${BERRY_HUNGER} hunger)`);
  updateHud();
}

function addFireProgress(amount) {
  if (!state.started || state.gameOver) return;
  const wasOut = state.fireOut;
  if (state.fireOut) {
    state.fireOut = false;
    state.fireDarken = 0;
    state.fireFlare = 0.8;
    fireWarning.classList.remove('visible');
  }
  state.fireEverLit = true;
  triggerLogBurst();
  if (wasOut) playFireIgnite();
  if (state.fireLevel >= FIRE_LEVEL_MAX) {
    state.fireProgress = 100;
    updateHud();
    return;
  }
  state.fireFlare = Math.max(state.fireFlare, 0.55);
  const overflow = state.fireProgress + amount - 100;
  state.fireProgress = clamp(state.fireProgress + amount, 0, 100);
  if (state.fireProgress >= 70) ensureForestRingQueued(state.fireLevel + 1);
  if (overflow >= 0) {
    levelUpCampfire(Math.max(0, overflow));
  } else {
    updateHud();
  }
}

function levelUpCampfire(overflow = 0) {
  if (state.fireLevel >= FIRE_LEVEL_MAX) {
    state.fireProgress = 100;
    updateHud();
    return;
  }
  state.fireLevel += 1;
  // A log that lands exactly on 100 leaves no overflow. Keep a tiny spark so
  // the celebration is not immediately replaced by "The fire is out!".
  const carried = state.fireLevel >= FIRE_LEVEL_MAX ? 100 : Math.max(2, overflow);
  state.fireProgress = clamp(carried, 0, 100);
  state.fireOut = false;
  state.fireEverLit = true;
  state.fireDarken = 0;
  state.fireFlare = 1;
  state.fireBarMessageTimer = 9;
  buildCampfireLevel(state.fireLevel);
  triggerFireFlash();
  playFireLevelChime();
  playRumble();
  showMapExpansionNotice();
  ensureForestRingQueued(state.fireLevel);
  beginWallExpansion(state.fireLevel);
  updateHud();
}

function putLogInFire() {
  if (!heldItem || heldItem.type !== 'wood') {
    showToast('Only logs burn');
    return;
  }
  const gain = FIRE_GAIN_PER_LOG[state.fireLevel] || 2;
  popGroundItem(heldItem);
  addFireProgress(gain);
  showToast(`Log added (+${gain})`);
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
  if (!tree || state.swingCooldown > 0) return;
  const data = tree.userData;
  state.swingCooldown = RESOURCE_SWING_COOLDOWN;
  data.shake = TREE_SHAKE_TIME;
  state.chopTimer = 0.3;
  player.rotation.y = Math.atan2(
    tree.position.x - player.position.x,
    tree.position.z - player.position.z
  );

  data.hits -= power;
  playTreeThud();
  registerResourceHit('tree', tree);
  if (data.hits <= 0) {
    fellTree(tree);
    hideHitMeter();
  }
}

function mineIronRock(rock, power = 1) {
  if (!rock || rock.broken || state.swingCooldown > 0) return;
  if (!canMineTool(state.equippedTool)) {
    showToast('Use the Pickaxe');
    return;
  }

  state.swingCooldown = RESOURCE_SWING_COOLDOWN;
  player.rotation.y = Math.atan2(rock.x - player.position.x, rock.z - player.position.z);
  state.chopTimer = 0.3;
  rock.hits -= power;
  rock.shake = 0.3;
  playRockClink();
  registerResourceHit('rock', rock);

  if (rock.hits > 0) return;

  rock.broken = true;
  rock.regrow = IRON_REGROW_MIN + Math.random() * (IRON_REGROW_MAX - IRON_REGROW_MIN);
  rock.group.visible = false;
  hideHitMeter();
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

// ---------- Crafting bench UI ----------

let craftCards = new Map();
let craftGridBuilt = false;

function recipeLocked(recipe) {
  return recipe.kind === 'locked' || recipe.tier > benchState.tier;
}

function recipeSoldOut(recipe) {
  if (recipe.oneTime && benchState.crafted.has(recipe.id)) return true;
  if (recipe.trap && placedTraps.length >= MAX_BEAR_TRAPS) return true;
  return false;
}

function canAffordRecipe(recipe) {
  return (benchState.stock.wood >= (recipe.cost.wood || 0))
    && (benchState.stock.iron >= (recipe.cost.iron || 0));
}

function costText(recipe) {
  const parts = [];
  if (recipe.cost.wood) parts.push(`${recipe.cost.wood}W`);
  if (recipe.cost.iron) parts.push(`${recipe.cost.iron}I`);
  return parts.join(' · ') || 'FREE';
}

function updateCraftStock(popKind = '') {
  craftWoodStock.textContent = String(benchState.stock.wood);
  craftIronStock.textContent = String(benchState.stock.iron);
  if (popKind) {
    const target = popKind === 'wood' ? craftWoodStock : craftIronStock;
    target.classList.remove('pop');
    void target.offsetWidth;
    target.classList.add('pop');
  }
}

function buildCraftGrid() {
  if (craftGridBuilt) return;
  craftGridBuilt = true;
  craftGrid.innerHTML = '';
  craftCards = new Map();

  let lastTier = 1;
  for (const recipe of RECIPES) {
    if (recipe.tier !== lastTier) {
      lastTier = recipe.tier;
      const heading = document.createElement('div');
      heading.className = 'craft-tier-label';
      heading.textContent = `NEEDS CRAFTING BENCH ${recipe.tier}`;
      craftGrid.appendChild(heading);
    }

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'craft-card';
    card.dataset.recipe = recipe.id;

    const icon = document.createElement('span');
    icon.className = 'craft-card-icon';
    icon.textContent = recipe.icon;

    const name = document.createElement('span');
    name.className = 'craft-card-name';
    name.textContent = recipe.name;

    const cost = document.createElement('span');
    cost.className = 'craft-card-cost';
    cost.textContent = costText(recipe);

    const badge = document.createElement('span');
    badge.className = 'craft-card-badge';

    card.append(icon, name, cost, badge);
    card.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      selectRecipe(recipe.id);
    });
    craftGrid.appendChild(card);
    craftCards.set(recipe.id, card);
  }
}

function updateCraftGrid() {
  for (const [id, card] of craftCards) {
    const recipe = RECIPE_BY_ID.get(id);
    if (!recipe) continue;
    const locked = recipeLocked(recipe);
    const soldOut = recipeSoldOut(recipe);
    card.classList.toggle('locked', locked);
    card.classList.toggle('soldout', soldOut);
    card.classList.toggle('selected', state.craftSelected === id);

    const badge = card.querySelector('.craft-card-badge');
    let badgeText = '';
    if (soldOut) badgeText = 'SOLD OUT';
    else if (locked) badgeText = '🔒';
    else if (recipe.trap) badgeText = `x${MAX_BEAR_TRAPS}`;
    else if (recipe.repeatable) badgeText = '∞';
    badge.textContent = badgeText;
    badge.style.display = badgeText ? '' : 'none';
  }
}

function selectRecipe(id) {
  const recipe = RECIPE_BY_ID.get(id);
  if (!recipe) return;
  state.craftSelected = id;
  updateCraftGrid();
  updateCraftDetail();
  playEquipClick();
}

function updateCraftDetail() {
  craftTierLabel.textContent = `BENCH ${benchState.tier}`;
  updateCraftStock();

  let recipe = RECIPE_BY_ID.get(state.craftSelected);
  if (!recipe) {
    recipe = RECIPES[0];
    state.craftSelected = recipe.id;
  }

  const locked = recipeLocked(recipe);
  const soldOut = recipeSoldOut(recipe);

  craftDetailIcon.textContent = recipe.icon;
  craftDetailName.textContent = recipe.name;
  craftDetailDesc.textContent = locked
    ? `Requires Crafting Bench ${recipe.tier}.`
    : recipe.desc;

  craftDetailCost.innerHTML = '';
  const costKinds = ['wood', 'iron'];
  let hasCost = false;
  for (const kind of costKinds) {
    const amount = recipe.cost[kind] || 0;
    if (!amount) continue;
    hasCost = true;
    const chip = document.createElement('span');
    chip.className = 'cost-chip';
    chip.textContent = `${amount} ${kind}`;
    if (benchState.stock[kind] < amount) chip.classList.add('missing');
    craftDetailCost.appendChild(chip);
  }
  if (!hasCost) {
    const chip = document.createElement('span');
    chip.className = 'cost-chip';
    chip.textContent = locked ? 'NOT AVAILABLE' : 'NO COST';
    craftDetailCost.appendChild(chip);
  }

  let badge = '';
  if (soldOut) badge = 'SOLD OUT';
  else if (locked) badge = recipe.tier === 4 ? 'COMING SOON' : `LOCKED · NEEDS BENCH ${recipe.tier}`;
  else if (recipe.trap) badge = `MAX ${MAX_BEAR_TRAPS} PLACED`;
  else if (recipe.repeatable) badge = '∞ REPEATABLE';
  craftDetailBadge.textContent = badge;

  craftButton.disabled = locked || soldOut;
  craftButton.textContent = soldOut ? 'SOLD OUT' : 'CRAFT';
}

function refreshCraftUi(popKind = '') {
  updateBenchSigns(popKind);
  if (!state.craftOpen) return;
  updateCraftStock(popKind);
  updateCraftGrid();
  updateCraftDetail();
  updateHotbarLabels();
}

function openCraftPanel() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  state.craftOpen = true;
  setInventoryOpen(false);
  setSettingsOpen(false);
  releaseJoystick();
  activePointers.clear();
  state.look.active = false;
  state.pinchDistance = 0;
  buildCraftGrid();
  updateCraftGrid();
  updateCraftDetail();
  craftPanel.classList.remove('hidden');
  updateToolUi();
  playEquipClick();
}

function closeCraftPanel() {
  state.craftOpen = false;
  craftPanel.classList.add('hidden');
  updateToolUi();
}

function updateHotbarLabels() {
  axeLabel.textContent = state.ownedTools.ironAxe ? 'Good Axe' : 'Old Axe';
  backpackLabel.textContent = state.goodSack ? 'Good Sack' : 'Old Sack';
  pickaxeLabel.textContent = 'Pickaxe';
  torchLabel.textContent = 'Torch';
  ironSwordLabel.textContent = 'Iron Sword';
}

function deliverRecipe(recipe) {
  if (recipe.kind === 'tool') {
    state.ownedTools[recipe.id] = true;
    if (recipe.id === 'ironAxe') state.goodAxe = true;
    updateHotbarLabels();
    updateToolUi();
    showToast(`${recipe.name} added to the hotbar`);
  } else if (recipe.kind === 'sack') {
    state.goodSack = true;
    state.backpackCapacity = GOOD_SACK_CAPACITY;
    updateHotbarLabels();
    updateHud();
    showToast(`Good Sack: capacity ${GOOD_SACK_CAPACITY}`);
  } else if (recipe.kind === 'bench') {
    benchState.tier = recipe.benchTier;
    updateBenchVisuals();
    showToast(`Crafting Bench ${benchState.tier} unlocked`);
  } else if (recipe.kind === 'placeable') {
    state.carriedPlaceable = recipe.placeType;
    updatePlaceButton();
    showToast(`${recipe.name} ready — tap Place`);
  }
}

function craftSelectedRecipe() {
  if (!state.started || state.gameOver || state.falling) return;
  const recipe = RECIPE_BY_ID.get(state.craftSelected);
  if (!recipe) return;
  if (recipeLocked(recipe)) {
    showToast(`Needs Crafting Bench ${recipe.tier}`);
    return;
  }
  if (recipeSoldOut(recipe)) {
    showToast(recipe.trap ? 'All bear traps are placed' : 'Sold out');
    return;
  }
  if (!canAffordRecipe(recipe)) {
    const missing = [];
    if (benchState.stock.wood < (recipe.cost.wood || 0)) missing.push('wood');
    if (benchState.stock.iron < (recipe.cost.iron || 0)) missing.push('iron');
    showToast(`Not enough ${missing.join(' or ')} in the bench`);
    playErrorTone();
    return;
  }

  benchState.stock.wood -= recipe.cost.wood || 0;
  benchState.stock.iron -= recipe.cost.iron || 0;
  if (recipe.oneTime) benchState.crafted.add(recipe.id);

  deliverRecipe(recipe);
  playUpgradeDing();
  refreshCraftUi();
  updateCraftGrid();
  updateCraftDetail();
  updateHud();
}

function updatePlaceButton() {
  updateActionButtons();
}

function spawnWall(kind, x, z, rotation) {
  const group = new THREE.Group();
  if (kind === 'logWall') {
    const barkMaterial = new THREE.MeshStandardMaterial({ color: 0x7a4c25, roughness: 0.9 });
    const barkDark = new THREE.MeshStandardMaterial({ color: 0x4f2f16, roughness: 0.95 });
    for (let i = 0; i < 3; i += 1) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.16, 1.8, 7), barkMaterial);
      log.rotation.z = Math.PI / 2;
      log.position.set(0, 0.3 + i * 0.32, 0);
      log.castShadow = true;
      group.add(log);
    }
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.15, 6), barkDark);
      post.position.set(side * 0.82, 0.58, 0.12);
      post.castShadow = true;
      group.add(post);
    }
  } else {
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
  }

  group.position.set(x, getGroundHeight(x, z), z);
  group.rotation.y = rotation;
  world.add(group);
  placedWalls.push({ group, x, z, rotation, width: 1.9, depth: 0.34, kind });
}

const placedTraps = [];
const trapMaterial = new THREE.MeshStandardMaterial({ color: 0x7c878d, roughness: 0.42, metalness: 0.7 });
const trapDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x3f484d, roughness: 0.5, metalness: 0.62 });

function spawnBearTrap(x, z, rotation) {
  const group = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.045, 6, 14), trapDarkMaterial);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.06;
  group.add(ring);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.07, 10), trapDarkMaterial);
  base.position.y = 0.05;
  group.add(base);

  const jaws = new THREE.Group();
  jaws.position.y = 0.08;
  for (let i = 0; i < 6; i += 1) {
    const angle = (i / 6) * Math.PI * 2;
    const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.2, 4), trapMaterial);
    tooth.position.set(Math.cos(angle) * 0.36, 0.09, Math.sin(angle) * 0.36);
    tooth.rotation.z = Math.cos(angle) * 0.5;
    tooth.rotation.x = Math.sin(angle) * 0.5;
    jaws.add(tooth);
  }
  group.add(jaws);

  group.position.set(x, getGroundHeight(x, z), z);
  group.rotation.y = rotation;
  world.add(group);
  placedTraps.push({ group, jaws, x, z, rotation, sprung: false, anim: 0 });
}

function resetBearTraps() {
  for (const trap of placedTraps) world.remove(trap.group);
  placedTraps.length = 0;
}



function updateBearTraps(delta) {
  for (const trap of placedTraps) {
    if (trap.sprung) {
      trap.anim = Math.min(1, trap.anim + delta * 5);
      const close = trap.anim;
      trap.jaws.scale.y = 1 + close * 0.8;
      trap.jaws.position.y = 0.08 + close * 0.1;
      continue;
    }

    for (const enemy of enemies) {
      if (!enemy.visible || enemy.userData.fading || enemy.userData.dead) continue;
      if (Math.hypot(enemy.position.x - trap.x, enemy.position.z - trap.z) > 0.82) continue;
      trap.sprung = true;
      trap.anim = 0;
      const data = enemy.userData;
      data.health -= 2;
      data.hitTimer = 0.3;
      data.bodyMat.emissive.setHex(0xff2f1a);
      data.bodyMat.emissiveIntensity = 1.2;
      data.stunTimer = 1.6;
      if (data.health <= 0) {
        data.health = 0;
        data.dead = true;
        startEnemyFade(enemy, 4);
      }
      playMeleeHit();
      showToast('Bear trap snapped!');
      break;
    }
  }
}

function placeCarried() {
  if (!state.started || state.gameOver || state.falling || state.paused) return;
  const type = state.carriedPlaceable;
  if (!type) return;

  const yaw = state.cameraYaw;
  const x = player.position.x + Math.sin(yaw) * 2.1;
  const z = player.position.z + Math.cos(yaw) * 2.1;
  const rotation = yaw;

  if (type === 'bearTrap') {
    if (placedTraps.length >= MAX_BEAR_TRAPS) {
      showToast(`Only ${MAX_BEAR_TRAPS} traps can be placed`);
      return;
    }
    spawnBearTrap(x, z, rotation);
    showToast('Bear trap placed');
  } else {
    spawnWall(type, x, z, rotation);
    showToast(`${ITEM_NAMES[type] || 'Wall'} placed`);
  }

  state.carriedPlaceable = null;
  updatePlaceButton();
  playLandSound();
  updateHud();
}

// ---------- Grinder ----------

function spawnGrinderDrop(type) {
  const material = type === 'wood'
    ? new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.9 })
    : new THREE.MeshStandardMaterial({ color: 0x9aa7ad, roughness: 0.4, metalness: 0.6 });
  const mesh = new THREE.Mesh(
    type === 'wood' ? new THREE.CylinderGeometry(0.09, 0.1, 0.32, 6) : new THREE.BoxGeometry(0.2, 0.2, 0.2),
    material
  );
  mesh.position.set(grinder.position.x, grinder.position.y + 2.0, grinder.position.z);
  world.add(mesh);
  grinderDrops.push({ mesh, t: 0 });
}

function putInGrinder() {
  if (!heldItem) return;
  const type = heldItem.type;
  if (type !== 'wood' && type !== 'iron') {
    showToast("Can't grind this");
    return;
  }
  const item = heldItem;
  popGroundItem(item);
  benchState.stock[type] += 1;
  spawnGrinderDrop(type);
  playGrinderSound();
  grinderParts.shake = 0.5;
  refreshCraftUi(type);
  updateHud();
  showToast(`+1 ${type} to the bench (${benchState.stock[type]})`);
}

function updateGrinder(delta) {
  const t = performance.now() * 0.001;
  grinderParts.shake = Math.max(0, (grinderParts.shake || 0) - delta);
  const shake = grinderParts.shake > 0
    ? Math.sin(t * 58) * 0.035 * (grinderParts.shake / 0.5)
    : 0;
  if (grinderParts.shakeGroup) {
    grinderParts.shakeGroup.rotation.z = shake;
    grinderParts.shakeGroup.position.y = Math.abs(shake) * 0.2;
  }
  if (grinderParts.wheels && grinderParts.shake > 0) {
    for (const wheel of grinderParts.wheels) wheel.rotation.x += delta * 14;
  }

  for (let i = grinderDrops.length - 1; i >= 0; i -= 1) {
    const drop = grinderDrops[i];
    drop.t += delta;
    const p = drop.t / 0.4;
    drop.mesh.position.y = grinder.position.y + 2.0 - p * 0.65;
    drop.mesh.rotation.x += delta * 7;
    drop.mesh.scale.setScalar(Math.max(0.05, 1 - p * 0.85));
    if (p >= 1) {
      world.remove(drop.mesh);
      grinderDrops.splice(i, 1);
    }
  }

  for (const kind of ['wood', 'iron']) {
    const sign = kind === 'wood' ? benchParts.woodSign : benchParts.ironSign;
    if (!sign || !sign.mesh) continue;
    sign.pop = Math.max(0, (sign.pop || 0) - delta * 3.2);
    sign.mesh.scale.setScalar(1 + sign.pop * 0.35);
  }
}


const flyingItems = [];

function spawnFlyingItem(type, target, onArrive) {
  const mesh = makeGroundItemMesh(type);
  const start = new THREE.Vector3(
    player.position.x,
    player.position.y + 1.1,
    player.position.z
  );
  mesh.position.copy(start);
  mesh.scale.setScalar(0.9);
  world.add(mesh);
  flyingItems.push({
    mesh,
    start,
    target: target.clone(),
    t: 0,
    duration: 0.45,
    onArrive
  });
  playPickupSound();
}

function updateFlyingItems(delta) {
  for (let i = flyingItems.length - 1; i >= 0; i -= 1) {
    const flight = flyingItems[i];
    flight.t += delta;
    const p = clamp(flight.t / flight.duration, 0, 1);
    const eased = p * p * (3 - 2 * p);
    flight.mesh.position.lerpVectors(flight.start, flight.target, eased);
    flight.mesh.position.y += Math.sin(p * Math.PI) * 0.75;
    flight.mesh.rotation.y += delta * 8;
    flight.mesh.scale.setScalar(0.9 - p * 0.5);
    if (p >= 1) {
      world.remove(flight.mesh);
      flyingItems.splice(i, 1);
      if (flight.onArrive) flight.onArrive();
    }
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
      if (heldItem !== item) {
        item.carried = false;
        continue;
      }
      // Keep the dragged item on the camera's right side as it orbits the player.
      const yaw = state.cameraYaw;
      const forwardX = Math.sin(yaw);
      const forwardZ = Math.cos(yaw);
      const rightX = -Math.cos(yaw);
      const rightZ = Math.sin(yaw);
      const bob = Math.sin(now * 0.003) * 0.05;
      const targetX = player.position.x + rightX * 0.98 + forwardX * 0.22;
      const targetZ = player.position.z + rightZ * 0.98 + forwardZ * 0.22;
      const targetY = player.position.y + 1.0 + bob;
      const damping = 1 - Math.exp(-10 * delta);
      item.mesh.position.x += (targetX - item.mesh.position.x) * damping;
      item.mesh.position.y += (targetY - item.mesh.position.y) * damping;
      item.mesh.position.z += (targetZ - item.mesh.position.z) * damping;
      // Keep the carried model outside the character while its lagging anchor
      // swings around during quick camera turns.
      const fromPlayerX = item.mesh.position.x - player.position.x;
      const fromPlayerZ = item.mesh.position.z - player.position.z;
      const horizontalDistance = Math.hypot(fromPlayerX, fromPlayerZ);
      const minCarryDistance = 0.82;
      if (horizontalDistance < minCarryDistance) {
        const scale = minCarryDistance / Math.max(horizontalDistance, 0.001);
        item.mesh.position.x = player.position.x + fromPlayerX * scale;
        item.mesh.position.z = player.position.z + fromPlayerZ * scale;
      }
      item.mesh.rotation.y += delta * 0.8;
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
    || state.craftOpen || state.settingsOpen || state.plantCooldown > 0) return;
  if (!heldItem || heldItem.type !== 'sapling') {
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

  const item = heldItem;
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
    // Growth happens in four visible stages across the two-minute lifecycle.
    const stage = Math.min(
      SAPLING_STAGE_SCALES.length - 1,
      Math.floor(ratio * SAPLING_STAGE_SCALES.length)
    );
    const targetScale = SAPLING_STAGE_SCALES[stage];
    const growRate = 1 - Math.exp(-6 * delta);
    const scale = sapling.mesh.scale.x + (targetScale - sapling.mesh.scale.x) * growRate;
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
const SPARK_COUNT = 54;
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

function updateSparks(delta, ratio, level = 1) {
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
  const density = clamp(0.16 + ratio * 0.42 + level * 0.075, 0, 1);
  sparkGeometry.setDrawRange(0, Math.max(6, Math.floor(SPARK_COUNT * density)));
}

const smokePuffs = [];
const smokeMaterial = new THREE.MeshBasicMaterial({ color: 0x9ca9a2, transparent: true, opacity: 0.08 });
for (let i = 0; i < 4; i += 1) {
  const puff = new THREE.Mesh(new THREE.SphereGeometry(0.11 + i * 0.015, 6, 6), smokeMaterial.clone());
  puff.position.y = 1.55 + i * 0.42;
  // Smoke is nearly invisible decoration; it must not swallow taps meant for empty space.
  puff.userData.tapIgnore = true;
  campfire.add(puff);
  smokePuffs.push(puff);
}

// ---------- World-space campfire bar ----------

const fireBarCanvas = document.createElement('canvas');
fireBarCanvas.width = 1024;
fireBarCanvas.height = 256;
const fireBarCtx = fireBarCanvas.getContext('2d');
const fireBarTexture = new THREE.CanvasTexture(fireBarCanvas);
fireBarTexture.colorSpace = THREE.SRGBColorSpace;
fireBarTexture.anisotropy = 2;
const fireBarMaterial = new THREE.SpriteMaterial({
  map: fireBarTexture,
  transparent: true,
  depthWrite: false,
  depthTest: true
});
const fireBar = new THREE.Sprite(fireBarMaterial);
fireBar.scale.set(4.5, 1.12, 1);
fireBar.visible = false;
fireBar.renderOrder = 5;
campfire.add(fireBar);

let fireBarDirty = true;
let fireBarLastProgress = -1;
let fireBarLastLevel = -1;
let fireBarLastMessage = false;

function fireBarColorFor(progress) {
  const stops = [
    { v: 0, c: [222, 58, 48] },
    { v: 34, c: [235, 78, 42] },
    { v: 35, c: [244, 132, 42] },
    { v: 59, c: [249, 184, 50] },
    { v: 60, c: [205, 230, 62] },
    { v: 99, c: [166, 236, 70] },
    { v: 100, c: [76, 255, 126] }
  ];
  const p = clamp(progress, 0, 100);
  for (let i = 1; i < stops.length; i += 1) {
    if (p <= stops[i].v) {
      const a = stops[i - 1];
      const b = stops[i];
      const t = (p - a.v) / Math.max(0.0001, b.v - a.v);
      return `rgb(${Math.round(a.c[0] + (b.c[0] - a.c[0]) * t)}, ${Math.round(a.c[1] + (b.c[1] - a.c[1]) * t)}, ${Math.round(a.c[2] + (b.c[2] - a.c[2]) * t)})`;
    }
  }
  return 'rgb(76, 255, 126)';
}

function fireBarRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawFireBar() {
  const ctx = fireBarCtx;
  const messageActive = state.fireBarMessageTimer > 0;
  const level = state.fireLevel;
  const progress = clamp(state.fireProgress, 0, 100);
  const maxed = level >= FIRE_LEVEL_MAX && progress >= 99.95;
  const barProgress = messageActive ? 100 : progress;
  const message = messageActive
    ? `FIRE LEVEL ${level}. MAP EXPANDED`
    : (maxed ? `level ${level} progress: MAX` : `level ${level} progress: ${Math.round(progress)}/100`);

  ctx.clearRect(0, 0, fireBarCanvas.width, fireBarCanvas.height);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${messageActive ? 52 : 55}px 'Patrick Hand', 'Comic Sans MS', cursive`;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#050505';
  ctx.lineWidth = 10;
  ctx.strokeText(message, 512, 108);
  ctx.fillStyle = '#ffffff';
  ctx.fillText(message, 512, 108);

  const x = 26;
  const y = 164;
  const width = 972;
  const height = 58;
  fireBarRoundRect(ctx, x, y, width, height, 12);
  ctx.fillStyle = '#050807';
  ctx.fill();
  ctx.strokeStyle = 'rgba(242, 255, 242, 0.62)';
  ctx.lineWidth = 3;
  ctx.stroke();

  if (barProgress > 0) {
    const innerX = x + 7;
    const innerY = y + 7;
    const innerW = width - 14;
    const innerH = height - 14;
    const fillW = innerW * (barProgress / 100);
    const color = messageActive || barProgress >= 100
      ? 'rgb(76, 255, 126)'
      : fireBarColorFor(barProgress);
    const gradient = ctx.createLinearGradient(innerX, 0, innerX + Math.max(1, fillW), 0);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, messageActive || barProgress >= 100 ? '#c4ffcf' : color);
    ctx.save();
    if (messageActive || barProgress >= 100) {
      ctx.shadowColor = 'rgba(112, 255, 150, 0.9)';
      ctx.shadowBlur = 16;
    }
    fireBarRoundRect(ctx, innerX, innerY, Math.max(4, fillW), innerH, 7);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  fireBarTexture.needsUpdate = true;
  fireBarDirty = false;
  fireBarLastProgress = Math.round(progress);
  fireBarLastLevel = level;
  fireBarLastMessage = messageActive;
}

function updateFireBar(delta) {
  if (state.fireBarMessageTimer > 0) {
    state.fireBarMessageTimer = Math.max(0, state.fireBarMessageTimer - delta);
    if (state.fireBarMessageTimer <= 0) fireBarDirty = true;
  }

  const visible = state.started && !state.gameOver && !state.fireOut;
  fireBar.visible = visible;
  if (!visible) return;

  const flameHeight = FIRE_FLAME_HEIGHTS[state.fireLevel] || 1;
  // Keep the bar a few metres above the flame without letting the huge level-5
  // bonfire push its text off the top of a normal third-person view.
  fireBar.position.set(0, Math.min(2.55 + flameHeight, 6.05), 0);

  if (state.fireBarMessageTimer <= 0 && fireBarLastProgress !== Math.round(state.fireProgress)) {
    fireBarDirty = true;
  }
  if (fireBarDirty
    || fireBarLastLevel !== state.fireLevel
    || fireBarLastMessage !== (state.fireBarMessageTimer > 0)) {
    drawFireBar();
  }
}

// A short yellow-green burst marks every log, with the first one igniting the fire.
const LOG_BURST_COUNT = 46;
const logBurstPositions = new Float32Array(LOG_BURST_COUNT * 3);
const logBurstVelocities = new Float32Array(LOG_BURST_COUNT * 3);
const logBurstLife = new Float32Array(LOG_BURST_COUNT);
const logBurstGeometry = new THREE.BufferGeometry();
const logBurstAttribute = new THREE.BufferAttribute(logBurstPositions, 3);
logBurstGeometry.setAttribute('position', logBurstAttribute);
const logBurstMaterial = new THREE.PointsMaterial({
  color: 0xd8ff63,
  size: 0.11,
  map: createSparkTexture(),
  transparent: true,
  opacity: 0.95,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  sizeAttenuation: true
});
const logBurst = new THREE.Points(logBurstGeometry, logBurstMaterial);
logBurst.visible = false;
logBurst.frustumCulled = false;
campfire.add(logBurst);

function triggerLogBurst() {
  for (let i = 0; i < LOG_BURST_COUNT; i += 1) {
    const i3 = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.55;
    logBurstPositions[i3] = Math.cos(angle) * radius;
    logBurstPositions[i3 + 1] = 0.55 + Math.random() * 0.45;
    logBurstPositions[i3 + 2] = Math.sin(angle) * radius;
    const speed = 1.1 + Math.random() * 2.2;
    logBurstVelocities[i3] = Math.cos(angle) * speed * 0.7;
    logBurstVelocities[i3 + 1] = 1.2 + Math.random() * 2.4;
    logBurstVelocities[i3 + 2] = Math.sin(angle) * speed * 0.7;
    logBurstLife[i] = 0.45 + Math.random() * 0.55;
  }
  logBurst.visible = true;
  logBurstAttribute.needsUpdate = true;
}

function updateLogBurst(delta) {
  if (!logBurst.visible) return;
  let alive = 0;
  for (let i = 0; i < LOG_BURST_COUNT; i += 1) {
    if (logBurstLife[i] <= 0) continue;
    logBurstLife[i] -= delta;
    if (logBurstLife[i] <= 0) continue;
    alive += 1;
    const i3 = i * 3;
    logBurstPositions[i3] += logBurstVelocities[i3] * delta;
    logBurstPositions[i3 + 1] += logBurstVelocities[i3 + 1] * delta;
    logBurstPositions[i3 + 2] += logBurstVelocities[i3 + 2] * delta;
    logBurstVelocities[i3 + 1] -= delta * 2.8;
  }
  logBurstAttribute.needsUpdate = true;
  logBurstMaterial.opacity = clamp(alive / LOG_BURST_COUNT, 0, 1) * 0.95;
  if (alive === 0) {
    logBurst.visible = false;
  }
}

// ---------- Campfire levels ----------

const campfireLogMaterial = new THREE.MeshStandardMaterial({ color: 0x6a3d1d, roughness: 0.92 });
const campfireLogUnlitMaterial = new THREE.MeshStandardMaterial({ color: 0x2f2118, roughness: 1 });
const campfireLogDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x46280f, roughness: 0.95 });
const campfireStoneMaterial = new THREE.MeshStandardMaterial({ color: 0x6c7377, roughness: 0.95 });
const campfireIronMaterial = new THREE.MeshStandardMaterial({ color: 0x3a4145, roughness: 0.5, metalness: 0.7 });
const campfireEmberMaterial = new THREE.MeshStandardMaterial({
  color: 0x41190a,
  emissive: 0xff5a12,
  emissiveIntensity: 1.4,
  roughness: 0.8
});

let safeRing = null;
const WALL_HEIGHT = 60;
const WALL_THICKNESS = 10;

function createArenaWallTexture() {
  const canvasEl = document.createElement('canvas');
  canvasEl.width = 128;
  canvasEl.height = 512;
  const g = canvasEl.getContext('2d');

  g.fillStyle = '#eceeec';
  g.fillRect(0, 0, 128, 512);

  // Broad weathered patches keep a pale wall from reading as flat sky.
  for (let i = 0; i < 34; i += 1) {
    const x = Math.random() * 128;
    const y = Math.random() * 512;
    const w = 18 + Math.random() * 52;
    const h = 26 + Math.random() * 120;
    g.fillStyle = `rgba(${120 + Math.random() * 40}, ${128 + Math.random() * 36}, ${126 + Math.random() * 34}, ${0.05 + Math.random() * 0.07})`;
    g.beginPath();
    g.ellipse(x, y, w, h, Math.random() * 0.5, 0, Math.PI * 2);
    g.fill();
  }

  // One seam per texture tile; the tile repeats around the circumference so
  // the wall reads as a built structure rather than fog.
  g.fillStyle = 'rgba(96, 104, 102, 0.22)';
  g.fillRect(0, 0, 4, 512);
  g.fillStyle = 'rgba(255, 255, 255, 0.2)';
  g.fillRect(4, 0, 2, 512);

  // Faint horizontal courses.
  for (let y = 96; y < 512; y += 96) {
    g.fillStyle = 'rgba(108, 116, 114, 0.08)';
    g.fillRect(0, y, 128, 2);
  }

  // A darker footing where the wall meets the grass.
  const footing = g.createLinearGradient(0, 448, 0, 512);
  footing.addColorStop(0, 'rgba(92, 100, 97, 0)');
  footing.addColorStop(1, 'rgba(92, 100, 97, 0.34)');
  g.fillStyle = footing;
  g.fillRect(0, 448, 128, 64);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 2;
  return texture;
}

const arenaWallTexture = createArenaWallTexture();
const arenaWallMaterial = new THREE.MeshStandardMaterial({
  color: 0xc3c8c6,
  map: arenaWallTexture,
  roughness: 0.93,
  metalness: 0.0,
  side: THREE.DoubleSide
});
const arenaWallInnerMaterial = arenaWallMaterial.clone();
arenaWallInnerMaterial.color.setHex(0xb4bbb8);
const arenaWallBaseMaterial = new THREE.MeshStandardMaterial({
  color: 0x8e9693,
  roughness: 0.97,
  metalness: 0.0,
  side: THREE.DoubleSide
});

// The wall is 60 m tall, but its top must read as lost in the sky even after
// the map opens up and the fog thins. A soft vertical wash handles that
// independently of camera distance.
function createWallTopFadeTexture() {
  const canvasEl = document.createElement('canvas');
  canvasEl.width = 8;
  canvasEl.height = 256;
  const g = canvasEl.getContext('2d');
  const gradient = g.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.42, 'rgba(255, 255, 255, 0.82)');
  gradient.addColorStop(0.72, 'rgba(255, 255, 255, 0.34)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  g.fillStyle = gradient;
  g.fillRect(0, 0, 8, 256);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
const wallTopFadeMaterial = new THREE.MeshBasicMaterial({
  map: createWallTopFadeTexture(),
  color: 0x87a9a5,
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide,
  fog: false
});
const wallTopFadeInner = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 96, 1, true),
  wallTopFadeMaterial
);
const wallTopFadeOuter = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 96, 1, true),
  wallTopFadeMaterial
);
wallTopFadeInner.renderOrder = 3;
wallTopFadeOuter.renderOrder = 3;

const arenaWall = new THREE.Group();
const arenaWallInner = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 96, 1, true),
  arenaWallInnerMaterial
);
const arenaWallOuter = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 96, 1, true),
  arenaWallMaterial
);
const arenaWallBase = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 1, 96, 1, true),
  arenaWallBaseMaterial
);
arenaWallInner.position.y = WALL_HEIGHT / 2;
arenaWallOuter.position.y = WALL_HEIGHT / 2;
arenaWallInner.receiveShadow = true;
arenaWallOuter.receiveShadow = true;
arenaWallBase.receiveShadow = true;
wallTopFadeInner.position.y = WALL_HEIGHT * 0.68;
wallTopFadeOuter.position.y = WALL_HEIGHT * 0.68;
arenaWall.add(arenaWallInner, arenaWallOuter, arenaWallBase, wallTopFadeInner, wallTopFadeOuter);
world.add(arenaWall);

let arenaWallRadius = ARENA_RADIUS_START;
let wallExpansion = null;
let wallShake = 0;

const WALL_DUST_COUNT = 160;
const wallDustPositions = new Float32Array(WALL_DUST_COUNT * 3);
const wallDustSeed = new Float32Array(WALL_DUST_COUNT * 3);
const wallDustGeometry = new THREE.BufferGeometry();
const wallDustAttribute = new THREE.BufferAttribute(wallDustPositions, 3);
wallDustGeometry.setAttribute('position', wallDustAttribute);
const wallDustMaterial = new THREE.PointsMaterial({
  color: 0xd8d0be,
  size: 0.58,
  map: createSparkTexture(),
  transparent: true,
  opacity: 0.34,
  depthWrite: false,
  sizeAttenuation: true
});
const wallDust = new THREE.Points(wallDustGeometry, wallDustMaterial);
wallDust.visible = false;
wallDust.frustumCulled = false;
scene.add(wallDust);
const wallDustLife = new Float32Array(WALL_DUST_COUNT);

function resetWallDustParticle(index) {
  const i3 = index * 3;
  const angle = Math.random() * Math.PI * 2;
  const radius = arenaWallRadius + Math.random() * 1.2;
  wallDustSeed[i3] = angle;
  wallDustSeed[i3 + 1] = 0.15 + Math.random() * 4.6;
  wallDustSeed[i3 + 2] = (Math.random() - 0.5) * 0.45;
  wallDustPositions[i3] = Math.cos(angle) * radius;
  wallDustPositions[i3 + 1] = wallDustSeed[i3 + 1];
  wallDustPositions[i3 + 2] = Math.sin(angle) * radius;
  wallDustLife[index] = 0.55 + Math.random() * 1.5;
}

function beginWallExpansion(level) {
  const target = ARENA_RADIUS_BY_LEVEL[level] || ARENA_RADIUS_START;
  wallExpansion = {
    from: arenaWallRadius,
    to: target,
    elapsed: 0,
    duration: 8
  };
  wallShake = 0.11;
  wallDust.visible = true;
  for (let i = 0; i < WALL_DUST_COUNT; i += 1) resetWallDustParticle(i);
  wallDustAttribute.needsUpdate = true;
  ensureForestRingQueued(level);
}

function updateWallVisual() {
  arenaWallInner.scale.set(arenaWallRadius, WALL_HEIGHT, arenaWallRadius);
  arenaWallOuter.scale.set(arenaWallRadius + WALL_THICKNESS, WALL_HEIGHT, arenaWallRadius + WALL_THICKNESS);
  arenaWallBase.scale.set(arenaWallRadius - 0.04, 2.6, arenaWallRadius - 0.04);
  arenaWallBase.position.y = 1.3;
  const fadeHeight = WALL_HEIGHT * 0.64;
  wallTopFadeInner.scale.set(arenaWallRadius - 0.06, fadeHeight, arenaWallRadius - 0.06);
  wallTopFadeOuter.scale.set(
    arenaWallRadius + WALL_THICKNESS + 0.06,
    fadeHeight,
    arenaWallRadius + WALL_THICKNESS + 0.06
  );
  wallTopFadeInner.position.y = WALL_HEIGHT * 0.68;
  wallTopFadeOuter.position.y = WALL_HEIGHT * 0.68;
  arenaWallTexture.repeat.x = Math.max(24, Math.round(arenaWallRadius * 0.62));
}

function updateArenaWall(delta) {
  if (wallExpansion) {
    wallExpansion.elapsed += delta;
    const t = clamp(wallExpansion.elapsed / wallExpansion.duration, 0, 1);
    const eased = t * t * (3 - 2 * t);
    arenaWallRadius = THREE.MathUtils.lerp(wallExpansion.from, wallExpansion.to, eased);
    updateWallVisual();
    if (t >= 1) wallExpansion = null;
  }

  if (wallExpansion) {
    // Ease the initial jolt down to a gentle tremor that lasts for the whole
    // eight-second slide instead of stopping after the first couple of seconds.
    wallShake = Math.max(0.06, wallShake - delta * 0.018);
  } else {
    wallShake = Math.max(0, wallShake - delta * 0.055);
  }

  if (wallDust.visible) {
    let alive = 0;
    for (let i = 0; i < WALL_DUST_COUNT; i += 1) {
      wallDustLife[i] -= delta;
      if (wallDustLife[i] <= 0) {
        if (wallExpansion) resetWallDustParticle(i);
        else continue;
      }
      alive += 1;
      const i3 = i * 3;
      const age = 1.5 - wallDustLife[i];
      const angle = wallDustSeed[i3];
      const radius = arenaWallRadius + 0.2 + age * 0.55;
      wallDustPositions[i3] = Math.cos(angle) * radius + Math.cos(angle + 1.3) * age * 0.18;
      wallDustPositions[i3 + 1] = wallDustSeed[i3 + 1] + age * 0.55;
      wallDustPositions[i3 + 2] = Math.sin(angle) * radius + Math.sin(angle + 1.3) * age * 0.18;
    }
    wallDustAttribute.needsUpdate = true;
    wallDustMaterial.opacity = wallExpansion ? 0.3 : Math.max(0, wallDustMaterial.opacity - delta * 0.22);
    if (!wallExpansion && alive === 0) {
      wallDust.visible = false;
      wallDustMaterial.opacity = 0.34;
    }
  }
}

function clampToArena(position, margin = 1) {
  const radius = Math.hypot(position.x, position.z);
  const limit = arenaWallRadius - margin;
  if (radius > limit) {
    const scale = limit / radius;
    position.x *= scale;
    position.z *= scale;
  }
}

// ---------- Chunked forest expansion ----------

const generatedForestGroup = new THREE.Group();
generatedForestGroup.name = 'generated-forest';
world.add(generatedForestGroup);

const forestQueue = [];
const forestRingsQueued = new Set();
const forestStats = { chunks: 0, trees: 0, rocks: 0, ironRocks: 0, bushes: 0, ponds: 0, children: 0 };
const forestDummy = new THREE.Object3D();
const forestColor = new THREE.Color();

const forestTrunkGeometry = new THREE.BoxGeometry(1, 1, 1);
const forestCanopyGeometry = new THREE.BoxGeometry(1, 1, 1);
const forestRockGeometry = new THREE.DodecahedronGeometry(0.72, 0);
const forestBushGeometry = new THREE.IcosahedronGeometry(0.62, 0);
const forestTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x3a2820, roughness: 1 });
const forestCanopyMaterial = new THREE.MeshStandardMaterial({ color: 0x1b3526, roughness: 1, flatShading: true });
const forestRockMaterial = new THREE.MeshStandardMaterial({ color: 0x596260, roughness: 0.98, flatShading: true });
const forestIronMaterial = new THREE.MeshStandardMaterial({ color: 0x4d5a60, roughness: 0.92, metalness: 0.08, flatShading: true });
const forestOreMaterial = new THREE.MeshStandardMaterial({
  color: 0xc47837,
  emissive: 0x6b2408,
  emissiveIntensity: 0.65,
  roughness: 0.55,
  metalness: 0.3
});
const forestBushMaterial = new THREE.MeshStandardMaterial({ color: 0x245038, roughness: 1, flatShading: true });
const lostChildCoatMaterial = new THREE.MeshStandardMaterial({ color: 0xd9c47d, roughness: 0.95 });
const lostChildScarfMaterial = new THREE.MeshStandardMaterial({ color: 0xa83b34, roughness: 0.9 });
const lostChildSkinMaterial = new THREE.MeshStandardMaterial({ color: 0xf0c9a2, roughness: 0.8 });

function ensureForestRingQueued(level) {
  if (level < 2 || level > FIRE_LEVEL_MAX || forestRingsQueued.has(level)) return;
  forestRingsQueued.add(level);

  const inner = (ARENA_RADIUS_BY_LEVEL[level - 1] || ARENA_RADIUS_START) + 8;
  const outer = (ARENA_RADIUS_BY_LEVEL[level] || ARENA_RADIUS_START) - 8;
  if (outer <= inner) return;

  const bands = level >= 4 ? 3 : 2;
  // Six wide sectors keep the instanced forest to a handful of draw calls per
  // ring while still letting the renderer cull what is behind the camera.
  const sectors = 6;
  for (let band = 0; band < bands; band += 1) {
    const rMin = inner + ((outer - inner) * band) / bands;
    const rMax = inner + ((outer - inner) * (band + 1)) / bands;
    for (let sector = 0; sector < sectors; sector += 1) {
      const a0 = (sector / sectors) * Math.PI * 2;
      const a1 = ((sector + 1) / sectors) * Math.PI * 2;
      forestQueue.push({ level, rMin, rMax, a0, a1 });
    }
  }
}

function forestSpot(rMin, rMax, a0, a1) {
  const angle = a0 + Math.random() * (a1 - a0);
  const radius = Math.sqrt(rMin * rMin + Math.random() * (rMax * rMax - rMin * rMin));
  return { x: Math.cos(angle) * radius, z: Math.sin(angle) * radius, radius };
}

function addLostChild(parent, x, z) {
  const child = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.54, 0.22), lostChildCoatMaterial);
  body.position.y = 0.42;
  body.castShadow = true;
  child.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 7, 6), lostChildSkinMaterial);
  head.position.y = 0.84;
  head.castShadow = true;
  child.add(head);

  const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.25), lostChildScarfMaterial);
  scarf.position.y = 0.7;
  child.add(scarf);

  child.position.set(x, getGroundHeight(x, z), z);
  child.rotation.y = Math.random() * Math.PI * 2;
  child.traverse((part) => { part.userData.tapIgnore = true; });
  child.userData.lostChild = true;
  parent.add(child);
  forestStats.children += 1;
}

function addForestPond(parent, x, z, radius) {
  const water = new THREE.Mesh(new THREE.CircleGeometry(radius, 20), pondWaterMaterial);
  water.rotation.x = -Math.PI / 2;
  water.position.set(x, getGroundHeight(x, z) + 0.045, z);
  parent.add(water);

  const edge = new THREE.Mesh(
    new THREE.TorusGeometry(radius + 0.12, 0.16, 4, 20),
    forestRockMaterial
  );
  edge.rotation.x = Math.PI / 2;
  edge.position.set(x, getGroundHeight(x, z) + 0.06, z);
  edge.scale.z = 0.45;
  parent.add(edge);
  forestStats.ponds += 1;
}

function buildForestChunk(job) {
  const chunk = new THREE.Group();
  const angularWidth = job.a1 - job.a0;
  const area = 0.5 * (job.rMax * job.rMax - job.rMin * job.rMin) * angularWidth;
  const densityDivisor = 150 - (job.level - 2) * 18;
  const treeCount = Math.min(220, Math.max(10, Math.floor(area / densityDivisor)));

  const pondCount = job.level >= 2 && Math.random() < 0.5 ? 1 : 0;
  const pondSpots = [];
  for (let i = 0; i < pondCount; i += 1) {
    const spot = forestSpot(job.rMin + 8, job.rMax - 8, job.a0, job.a1);
    const radius = 1.8 + Math.random() * 2.2;
    pondSpots.push({ x: spot.x, z: spot.z, radius });
    addForestPond(chunk, spot.x, spot.z, radius);
  }

  const trunks = new THREE.InstancedMesh(forestTrunkGeometry, forestTrunkMaterial, treeCount);
  const canopies = new THREE.InstancedMesh(forestCanopyGeometry, forestCanopyMaterial, treeCount);
  const crowns = new THREE.InstancedMesh(forestCanopyGeometry, forestCanopyMaterial, treeCount);
  trunks.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  canopies.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  crowns.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  trunks.frustumCulled = true;
  canopies.frustumCulled = true;
  crowns.frustumCulled = true;

  let placedTrees = 0;
  for (let i = 0; i < treeCount * 3 && placedTrees < treeCount; i += 1) {
    const spot = forestSpot(job.rMin + 2, job.rMax - 2, job.a0, job.a1);
    let blocked = false;
    for (const pond of pondSpots) {
      if (Math.hypot(spot.x - pond.x, spot.z - pond.z) < pond.radius + 1.4) {
        blocked = true;
        break;
      }
    }
    if (blocked) continue;

    const farFactor = clamp(spot.radius / 850, 0, 1);
    const scale = (0.92 + Math.random() * 0.72) * (1 + farFactor * 0.55);
    const trunkHeight = (2.1 + Math.random() * 1.1) * scale;
    const trunkWidth = (0.24 + Math.random() * 0.1) * scale;
    const y = getGroundHeight(spot.x, spot.z);
    const yaw = Math.random() * Math.PI * 2;

    forestDummy.position.set(spot.x, y + trunkHeight / 2, spot.z);
    forestDummy.rotation.set(0, yaw, 0);
    forestDummy.scale.set(trunkWidth, trunkHeight, trunkWidth);
    forestDummy.updateMatrix();
    trunks.setMatrixAt(placedTrees, forestDummy.matrix);
    forestColor.setHSL(0.08 + Math.random() * 0.03, 0.3, 0.16 + Math.random() * 0.08);
    trunks.setColorAt(placedTrees, forestColor);

    const canopyWidth = (1.55 + Math.random() * 0.65) * scale;
    const canopyHeight = (1.7 + Math.random() * 0.7) * scale;
    forestDummy.position.set(spot.x, y + trunkHeight + canopyHeight * 0.34, spot.z);
    forestDummy.rotation.set(0, yaw + Math.random() * 0.3, 0);
    forestDummy.scale.set(canopyWidth, canopyHeight, canopyWidth);
    forestDummy.updateMatrix();
    canopies.setMatrixAt(placedTrees, forestDummy.matrix);
    forestColor.setHSL(0.31 + Math.random() * 0.055, 0.38, 0.13 + Math.random() * 0.07);
    canopies.setColorAt(placedTrees, forestColor);

    const crownWidth = canopyWidth * (0.54 + Math.random() * 0.18);
    const crownHeight = canopyHeight * (0.7 + Math.random() * 0.22);
    forestDummy.position.set(spot.x, y + trunkHeight + canopyHeight * 0.94, spot.z);
    forestDummy.rotation.set(0, yaw + Math.random() * 0.45, 0);
    forestDummy.scale.set(crownWidth, crownHeight, crownWidth);
    forestDummy.updateMatrix();
    crowns.setMatrixAt(placedTrees, forestDummy.matrix);
    forestColor.setHSL(0.32 + Math.random() * 0.05, 0.4, 0.16 + Math.random() * 0.08);
    crowns.setColorAt(placedTrees, forestColor);
    placedTrees += 1;
  }

  trunks.count = placedTrees;
  canopies.count = placedTrees;
  crowns.count = placedTrees;
  trunks.instanceMatrix.needsUpdate = true;
  canopies.instanceMatrix.needsUpdate = true;
  crowns.instanceMatrix.needsUpdate = true;
  if (trunks.instanceColor) trunks.instanceColor.needsUpdate = true;
  if (canopies.instanceColor) canopies.instanceColor.needsUpdate = true;
  if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
  chunk.add(trunks, canopies, crowns);
  forestStats.trees += placedTrees;

  const rockCount = Math.min(40, Math.max(1, Math.floor(area / 1100)));
  const rocks = new THREE.InstancedMesh(forestRockGeometry, forestRockMaterial, rockCount);
  let placedRocks = 0;
  for (let i = 0; i < rockCount * 2 && placedRocks < rockCount; i += 1) {
    const spot = forestSpot(job.rMin + 2, job.rMax - 2, job.a0, job.a1);
    const scale = 0.65 + Math.random() * 1.05;
    forestDummy.position.set(spot.x, getGroundHeight(spot.x, spot.z) + 0.28 * scale, spot.z);
    forestDummy.rotation.set(Math.random() * 0.4, Math.random() * Math.PI, Math.random() * 0.4);
    forestDummy.scale.set(scale, scale * 0.58, scale);
    forestDummy.updateMatrix();
    rocks.setMatrixAt(placedRocks, forestDummy.matrix);
    placedRocks += 1;
  }
  rocks.count = placedRocks;
  rocks.instanceMatrix.needsUpdate = true;
  chunk.add(rocks);
  forestStats.rocks += placedRocks;

  const ironCount = Math.min(14, Math.max(0, Math.floor(area / 2600)));
  if (ironCount > 0) {
    const ironRocks = new THREE.InstancedMesh(forestRockGeometry, forestIronMaterial, ironCount);
    const oreBits = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.12, 0), forestOreMaterial, ironCount * 3);
    let placedIron = 0;
    let placedOre = 0;
    for (let i = 0; i < ironCount * 2 && placedIron < ironCount; i += 1) {
      const spot = forestSpot(job.rMin + 3, job.rMax - 3, job.a0, job.a1);
      const scale = 0.9 + Math.random() * 0.8;
      const y = getGroundHeight(spot.x, spot.z);
      forestDummy.position.set(spot.x, y + 0.42 * scale, spot.z);
      forestDummy.rotation.set(0, Math.random() * Math.PI, 0);
      forestDummy.scale.set(scale, scale * 0.72, scale);
      forestDummy.updateMatrix();
      ironRocks.setMatrixAt(placedIron, forestDummy.matrix);
      for (let ore = 0; ore < 3; ore += 1) {
        const angle = Math.random() * Math.PI * 2;
        const oreScale = 0.8 + Math.random() * 0.6;
        forestDummy.position.set(
          spot.x + Math.cos(angle) * 0.5 * scale,
          y + (0.48 + Math.random() * 0.25) * scale,
          spot.z + Math.sin(angle) * 0.5 * scale
        );
        forestDummy.rotation.set(Math.random(), Math.random(), Math.random());
        forestDummy.scale.setScalar(oreScale);
        forestDummy.updateMatrix();
        oreBits.setMatrixAt(placedOre, forestDummy.matrix);
        placedOre += 1;
      }
      placedIron += 1;
    }
    ironRocks.count = placedIron;
    oreBits.count = placedOre;
    ironRocks.instanceMatrix.needsUpdate = true;
    oreBits.instanceMatrix.needsUpdate = true;
    chunk.add(ironRocks, oreBits);
    forestStats.ironRocks += placedIron;
  }

  const bushCount = Math.min(48, Math.max(1, Math.floor(area / 1600)));
  const bushes = new THREE.InstancedMesh(forestBushGeometry, forestBushMaterial, bushCount);
  let placedBushes = 0;
  for (let i = 0; i < bushCount * 2 && placedBushes < bushCount; i += 1) {
    const spot = forestSpot(job.rMin + 2, job.rMax - 2, job.a0, job.a1);
    const scale = 0.65 + Math.random() * 0.7;
    forestDummy.position.set(spot.x, getGroundHeight(spot.x, spot.z) + 0.35 * scale, spot.z);
    forestDummy.rotation.set(0, Math.random() * Math.PI, 0);
    forestDummy.scale.set(scale, scale * 0.72, scale);
    forestDummy.updateMatrix();
    bushes.setMatrixAt(placedBushes, forestDummy.matrix);
    placedBushes += 1;
  }
  bushes.count = placedBushes;
  bushes.instanceMatrix.needsUpdate = true;
  chunk.add(bushes);
  forestStats.bushes += placedBushes;

  const childChance = 0.22 + (job.level - 2) * 0.05;
  if (Math.random() < childChance) {
    const spot = forestSpot(job.rMin + 6, job.rMax - 6, job.a0, job.a1);
    addLostChild(chunk, spot.x, spot.z);
  }

  generatedForestGroup.add(chunk);
  forestStats.chunks += 1;
}

function processForestQueue() {
  if (!forestQueue.length) return;
  const start = performance.now();
  while (forestQueue.length && performance.now() - start < 2.8) {
    buildForestChunk(forestQueue.shift());
  }
}

function resetForestExpansion() {
  forestQueue.length = 0;
  forestRingsQueued.clear();
  generatedForestGroup.clear();
  forestStats.chunks = 0;
  forestStats.trees = 0;
  forestStats.rocks = 0;
  forestStats.ironRocks = 0;
  forestStats.bushes = 0;
  forestStats.ponds = 0;
  forestStats.children = 0;
}

updateWallVisual();

const fireUp = new THREE.Vector3(0, 1, 0);

function addFireLog(group, base, apex, radius, material) {
  const direction = apex.clone().sub(base);
  const length = direction.length();
  if (length < 0.001) return;
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.85, radius, length, 6), material);
  mesh.position.copy(base).add(apex).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(fireUp, direction.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
}

function buildCampfireLevel(level) {
  while (campfireVisual.children.length > 0) {
    const child = campfireVisual.children.pop();
    if (child.geometry) child.geometry.dispose();
  }

  // Level 1 is deliberately just three dark logs; it only becomes a teepee
  // once the player feeds it the first log.
  if (level === 1) {
    for (let i = 0; i < 3; i += 1) {
      const angle = (i / 3) * Math.PI * 2 + 0.45;
      addFireLog(
        campfireVisual,
        new THREE.Vector3(Math.cos(angle) * 0.46, 0.08, Math.sin(angle) * 0.46),
        new THREE.Vector3(Math.cos(angle) * 0.07, 0.92, Math.sin(angle) * 0.07),
        0.115,
        campfireLogUnlitMaterial
      );
    }
  } else {
    const logCount = level === 2 ? 6 : level === 3 ? 7 : level === 4 ? 9 : 12;
    const leanRadius = level === 2 ? 0.72 : level === 3 ? 0.86 : level === 4 ? 1.0 : 1.2;
    const apexHeight = level === 2 ? 1.45 : level === 3 ? 1.7 : level === 4 ? 2.0 : 2.35;
    const thickness = level === 2 ? 0.14 : 0.115 + level * 0.009;
    for (let i = 0; i < logCount; i += 1) {
      const angle = (i / logCount) * Math.PI * 2 + 0.35;
      addFireLog(
        campfireVisual,
        new THREE.Vector3(Math.cos(angle) * leanRadius, 0.1, Math.sin(angle) * leanRadius),
        new THREE.Vector3(Math.cos(angle) * 0.08, apexHeight, Math.sin(angle) * 0.08),
        thickness,
        i % 2 === 0 ? campfireLogMaterial : campfireLogDarkMaterial
      );
    }
  }

  if (level >= 2) {
    for (const side of [-1, 1]) {
      const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 1.65, 7), campfireLogMaterial);
      seat.rotation.z = Math.PI / 2;
      seat.rotation.y = side * 0.28;
      seat.position.set(side * 1.5, 0.22, side * 0.35);
      seat.castShadow = true;
      seat.receiveShadow = true;
      campfireVisual.add(seat);
    }
  }

  if (level >= 3) {
    const ringRadius = level >= 4 ? 1.95 : 1.45;
    const stoneCount = level >= 4 ? 12 : 9;
    for (let i = 0; i < stoneCount; i += 1) {
      const angle = (i / stoneCount) * Math.PI * 2;
      const scale = 0.85 + Math.random() * 0.35;
      const stone = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2 * scale, 0), campfireStoneMaterial);
      stone.position.set(Math.cos(angle) * ringRadius, 0.15 * scale, Math.sin(angle) * ringRadius);
      stone.rotation.set(Math.random(), Math.random(), Math.random());
      stone.castShadow = true;
      stone.receiveShadow = true;
      campfireVisual.add(stone);
    }
  }

  if (level >= 4) {
    // A low crib of horizontal logs turns the teepee into a bigger pile.
    for (let layer = 0; layer < 2; layer += 1) {
      for (const side of [-1, 1]) {
        const log = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 1.8 - layer * 0.2, 7), campfireLogMaterial);
        log.rotation.z = Math.PI / 2;
        log.rotation.y = layer === 0 ? 0 : Math.PI / 2;
        log.position.set(layer === 0 ? 0 : side * 0.42, 0.25 + layer * 0.3, layer === 0 ? side * 0.42 : 0);
        log.castShadow = true;
        campfireVisual.add(log);
      }
    }
    for (let i = 0; i < 14; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 1.35;
      const ember = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.045, 0.11), campfireEmberMaterial);
      ember.position.set(Math.cos(angle) * radius, 0.05, Math.sin(angle) * radius);
      ember.rotation.y = Math.random() * Math.PI;
      campfireVisual.add(ember);
    }
  }

  if (level >= 5) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.18, 0.085, 6, 22), campfireIronMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    ring.castShadow = true;
    campfireVisual.add(ring);
    for (let i = 0; i < 6; i += 1) {
      const angle = (i / 6) * Math.PI * 2 + 0.4;
      const brace = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.58, 0.12), campfireIronMaterial);
      brace.position.set(Math.cos(angle) * 2.18, 0.32, Math.sin(angle) * 2.18);
      brace.rotation.y = -angle;
      campfireVisual.add(brace);
    }
    for (let i = 0; i < 5; i += 1) {
      const angle = (i / 5) * Math.PI * 2 + 0.1;
      addFireLog(
        campfireVisual,
        new THREE.Vector3(Math.cos(angle) * 2.05, 0.12, Math.sin(angle) * 2.05),
        new THREE.Vector3(Math.cos(angle) * 0.35, 1.5, Math.sin(angle) * 0.35),
        0.17,
        campfireLogDarkMaterial
      );
    }
  }

  campfireVisual.scale.setScalar(level === 1 ? 0.7 : 0.56);
  state.fireGrow = 0;

  if (fireFlameInner && fireFlameInner.material) {
    fireFlameInner.material.color.setHex(level >= 5 ? 0xd8f4ff : 0xffe28a);
  }
  if (fireFlame && fireFlame.material) {
    fireFlame.material.color.setHex(level >= 5 ? 0xff9a3a : 0xff7b22);
    fireFlame.material.opacity = level >= 5 ? 0.72 : 0.58;
  }
  if (fireCore && fireCore.material) {
    fireCore.material.color.setHex(level >= 5 ? 0xd7f5ff : 0xff8a2a);
    fireCore.material.emissive.setHex(level >= 5 ? 0x6fc8ff : 0xff6b18);
  }

  const radius = FIRE_SAFE_RADII[level] || 8;
  updateSafeRing(radius);
  if (safeRing) safeRing.visible = false;

  const lit = !state.fireOut;
  fireCore.visible = lit;
  fireFlame.visible = lit;
  fireFlameInner.visible = lit;
  fireSparks.visible = lit;
  if (!lit) {
    fireGlow.intensity = 0;
    warmLight.intensity = 0;
    sparkGeometry.setDrawRange(0, 0);
    smokePuffs.forEach((puff) => { puff.material.opacity = 0; });
  }
  emberBed.material.emissiveIntensity = lit ? 0.55 : (state.fireEverLit ? 0.58 : 0.02);
  fireBarDirty = true;
}

function updateSafeRing(radius) {
  if (safeRing) {
    world.remove(safeRing);
    safeRing.geometry.dispose();
    safeRing.material.dispose();
    safeRing = null;
  }
  if (!radius || radius <= 0) return;
  const points = [];
  const segments = 96;
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0.05, Math.sin(angle) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineDashedMaterial({
    color: 0xdce8e2,
    transparent: true,
    opacity: 0.23,
    dashSize: 0.46,
    gapSize: 0.4,
    depthWrite: false
  });
  safeRing = new THREE.LineLoop(geometry, material);
  safeRing.computeLineDistances();
  safeRing.position.copy(campfire.position);
  safeRing.renderOrder = 1;
  world.add(safeRing);
}

function triggerFireFlash() {
  fireFlash.classList.remove('flash');
  void fireFlash.offsetWidth;
  fireFlash.classList.add('flash');
}

function showStartHint() {
  state.startHintTimer = 8;
  startHint.classList.add('visible');
}

const sky = new THREE.Mesh(
  new THREE.SphereGeometry(1150, 24, 24),
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
  sackOrder: [],
  backpackCapacity: DEFAULT_BACKPACK_CAPACITY,
  goodSack: false,
  goodAxe: false,
  ownedTools: { axe: true, pickaxe: false, torch: false, ironAxe: false, ironSword: false },
  equippedTool: null,
  equipTimer: 0,
  inventoryOpen: false,
  craftOpen: false,
  settingsOpen: false,
  grinderInReach: false,
  benchInReach: false,
  fireLevel: 1,
  fireProgress: 0,
  fireGrow: 0,
  fireDarken: 0,
  startHintTimer: 0,
  craftSelected: 'pickaxe',
  carriedPlaceable: null,
  dropCooldown: 0,
  starveTimer: 0,
  portrait: false,
  paused: false,
  fireOut: true,
  fireEverLit: false,
  fireBarMessageTimer: 0,
  fireFlare: 0,
  fireInReach: false,
  chopTimer: 0,
  plantCooldown: 0,
  swingCooldown: 0,
  targetTree: null,
  targetRock: null,
  falling: 0,
  invuln: 0,
  hitEffectTimer: 0,
};

// Camera controls and the camera view are session-only. Remove any values saved
// by older builds so they cannot flip the controls or startup view.
try {
  window.localStorage.removeItem('nights.invertHorizontalLook');
  window.localStorage.removeItem('nights.cameraView');
} catch (error) {
  // Storage can be blocked; the in-memory defaults still apply.
}

// Console-only startup check: a +50 px horizontal drag must turn the view right.
function runLookSelfTest() {
  const savedYaw = state.cameraYaw;
  const savedPitch = state.cameraPitch;
  const forwardX = Math.sin(savedYaw);
  const forwardZ = Math.cos(savedYaw);
  const rightX = -forwardZ;
  const rightZ = forwardX;

  applyLookDelta(50, 0);
  const turned = (Math.sin(state.cameraYaw) - forwardX) * rightX
    + (Math.cos(state.cameraYaw) - forwardZ) * rightZ;
  const looksRight = turned > 0;

  applyLookDelta(0, -50);
  const looksUp = state.cameraPitch > savedPitch;

  state.cameraYaw = savedYaw;
  state.cameraPitch = savedPitch;

  if (!looksRight) {
    console.error('[camera self-test] FAILED: +50 px right drag turned the view left');
  }
  if (!looksUp) {
    console.error('[camera self-test] FAILED: upward drag did not look up');
  }
  if (looksRight && looksUp) {
    console.info('[camera self-test] passed: drag right looks right, drag up looks up');
  }
}

runLookSelfTest();

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

  updateActionButtons();
  updateHotbarLabels();
  updatePlaceButton();

  const fireIsOut = state.started && state.fireEverLit && state.fireOut;
  fireWarning.classList.toggle('visible', fireIsOut);

  backpackBadge.textContent = `${backpackCount()}/${state.backpackCapacity}`;
  inventoryCapacity.textContent = `${backpackCount()} / ${state.backpackCapacity}`;
  updateToolUi();
  renderInventory();
}

const CONTEXT_SLOTS = ['slot-a', 'slot-b', 'slot-c', 'slot-d', 'slot-e', 'slot-f'];
const contextButtons = [placeBtn, plantBtn, eatBtn, storeBtn, unstoreBtn, grinderBtn, fireBtn];

function updateActionButtons() {
  const dragging = !!heldItem;
  const type = heldItem?.type;
  const sackEquipped = isBackpackEquipped();
  const canUnstore = sackEquipped && state.sackOrder.length > 0;
  const nearGrinder = dragging && (type === 'wood' || type === 'iron')
    && getGrinderDistance() <= GRINDER_RANGE;
  const nearFire = dragging && getCampfireDistance() <= FIRE_FEED_RANGE;

  undragBtn.classList.toggle('available', dragging);

  const visible = [];
  if (nearGrinder) visible.push(grinderBtn);
  if (nearFire) visible.push(fireBtn);
  if (dragging && sackEquipped) visible.push(storeBtn);
  if (dragging && type === 'sapling') visible.push(plantBtn);
  if (dragging && type === 'berry') visible.push(eatBtn);
  if (canUnstore) visible.push(unstoreBtn);
  if (state.carriedPlaceable) visible.push(placeBtn);

  for (const button of contextButtons) {
    button.classList.remove('available', ...CONTEXT_SLOTS);
  }
  visible.forEach((button, index) => {
    button.classList.add('available', CONTEXT_SLOTS[index] || CONTEXT_SLOTS[CONTEXT_SLOTS.length - 1]);
  });

  const handsFull = dragging;
  unstoreBtn.disabled = handsFull;
  const unstoreLabel = unstoreBtn.querySelector('span');
  if (unstoreLabel) unstoreLabel.textContent = handsFull ? 'HANDS FULL' : 'UNSTORE';
}

function updateToolUi() {
  const slots = [
    ['axe', axeSlot],
    ['backpack', backpackSlot],
    ['pickaxe', pickaxeSlot],
    ['torch', torchSlot],
    ['ironSword', ironSwordSlot]
  ];

  for (const [tool, slot] of slots) {
    const owned = tool === 'backpack' || !!state.ownedTools[tool];
    const equipped = tool === 'axe'
      ? state.equippedTool === 'axe' || state.equippedTool === 'ironAxe'
      : state.equippedTool === tool;
    slot.classList.toggle('hidden', !owned);
    slot.classList.toggle('equipped', equipped);
    slot.setAttribute('aria-pressed', String(equipped));
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
    closeCraftPanel();
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
  removeLastSackItem(type);
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
  removeLastSackItem('berry');
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

  if (tool === state.equippedTool) {
    state.equippedTool = null;
  } else {
    state.equippedTool = tool;
  }

  closeCraftPanel();
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
  closeCraftPanel();
  playEquipClick();
  updateHud();
  updateToolModels();
}

function getHeldToolModel() {
  switch (state.equippedTool) {
    case 'axe': return axe;
    case 'backpack': return handBackpack;
    case 'pickaxe': return heldPickaxe;
    case 'torch': return heldTorch;
    case 'ironAxe': return heldIronAxe;
    case 'ironSword': return heldIronSword;
    default: return null;
  }
}

function updateToolModels() {
  axe.visible = state.equippedTool === 'axe';
  handBackpack.visible = state.equippedTool === 'backpack';
  heldPickaxe.visible = state.equippedTool === 'pickaxe';
  heldTorch.visible = state.equippedTool === 'torch';
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

// DO NOT CHANGE THE SIGN: dragging the finger right turns the view right; dragging left turns it left.
function applyLookDelta(dx, dy) {
  // Forward is (sin(yaw), 0, cos(yaw)); screen-right is (-cos(yaw), 0, sin(yaw)).
  // Decreasing yaw therefore turns the view toward screen-right, and increasing
  // pitch looks up. Both camera modes read the same yaw/pitch.
  state.cameraYaw -= dx * CAMERA_LOOK_SENSITIVITY_X;
  state.cameraPitch = clamp(
    state.cameraPitch - dy * CAMERA_LOOK_SENSITIVITY_Y,
    -PITCH_LIMIT,
    PITCH_LIMIT
  );
}

// Unified pointer handling: a short, still touch is a tap interaction; movement
// past the slop becomes a camera drag. Input from either half can tap, but only
// drags that start on the right half rotate the camera.
const activePointers = new Map();

function isUiTarget(target) {
  return !!(target && target.closest && target.closest(
    'button, #inventoryPanel, #craftPanel, #settingsPanel, #startOverlay, '
    + '#rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone'
  ));
}

function isOverHud(clientX, clientY) {
  if (!hud) return false;
  const rect = hud.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right
    && clientY >= rect.top && clientY <= rect.bottom;
}

function interactionBlocked() {
  return !state.started || state.gameOver || state.falling || state.portrait
    || state.inventoryOpen || state.craftOpen || state.settingsOpen;
}

window.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  if (isUiTarget(event.target) || isOverHud(event.clientX, event.clientY)) return;
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

  // Drag right = look right, drag left = look left. Both first-person and
  // third-person views share this same yaw and pitch.
  applyLookDelta(dx, dy);
});

function endPointer(event) {
  const track = activePointers.get(event.pointerId);
  if (!track) return;
  activePointers.delete(event.pointerId);

  const elapsed = performance.now() - track.startTime;
  const isTap = !track.dragging
    && track.moved <= TAP_MAX_MOVE
    && elapsed <= TAP_MAX_TIME;

  showTouchDebug(isTap ? 'TAP' : 'DRAG');
  if (event.type === 'pointercancel' || !isTap) return;
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
  state.swingCooldown = 0;
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
  state.sackOrder = [];
  state.ownedTools.axe = true;
  state.ownedTools.pickaxe = false;
  state.ownedTools.torch = false;
  state.ownedTools.ironAxe = false;
  state.ownedTools.ironSword = false;
  state.goodSack = false;
  state.goodAxe = false;
  state.backpackCapacity = DEFAULT_BACKPACK_CAPACITY;
  state.equippedTool = null;
  state.equipTimer = 0;
  state.inventoryOpen = false;
  state.craftOpen = false;
  state.settingsOpen = false;
  state.benchInReach = false;
  state.fireLevel = 1;
  state.fireProgress = 0;
  state.fireGrow = 0;
  state.fireDarken = 0;
  state.startHintTimer = 8;
  state.fireOut = true;
  state.fireEverLit = false;
  state.fireBarMessageTimer = 0;
  state.fireGrow = 0;
  arenaWallRadius = ARENA_RADIUS_START;
  updateWallVisual();
  wallExpansion = null;
  wallShake = 0;
  wallDust.visible = false;
  resetForestExpansion();
  state.carriedPlaceable = null;
  state.targetRock = null;
  state.dropCooldown = 0;
  state.starveTimer = 0;
  state.fireFlare = 0;
  state.chopTimer = 0;
  state.plantCooldown = 0;
  state.targetTree = null;
  state.falling = 0;
  state.invuln = 0;
  state.hitEffectTimer = 0;
  toastTimer = 0;
  toastEl.classList.remove('visible');
  clearTimeout(mapNoticeTimeout);
  mapExpandedNotice.classList.remove('visible');
  fireBarDirty = true;
  hideHitMeter();
  setInventoryOpen(false);
  closeCraftPanel();
  setSettingsOpen(false);

  benchState.stock.wood = 0;
  benchState.stock.iron = 0;
  benchState.tier = 1;
  benchState.crafted.clear();
  updateBenchVisuals();
  resetBearTraps();
  updatePlaceButton();
  buildCampfireLevel(1);
  updateSafeRing(getCampfireSafeRadius());
  state.craftSelected = 'pickaxe';

  resetPlacedWalls();
  resetIronRocks();
  // Spawn slightly to the side of the fire so the unlit log pile is clearly
  // visible instead of being hidden behind the character's back.
  player.position.set(3.1, getGroundHeight(3.1, -4.2), -4.2);
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
  benchPrompt.classList.add('hidden');
  fireFlash.classList.remove('flash');
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
  updateHotbarLabels();
  updateHud();
  showStartHint();
  showToast('Tap a tool · loose iron by the bench');
}

startBtn.addEventListener('click', startGame);

const blockedKeys = new Set([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright']);
const jumpKeys = new Set(['shift', 'j']);
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (blockedKeys.has(key)) event.preventDefault();
  if (key === 'q' && !event.repeat) plantSapling();
  if (key === 'f' && !event.repeat) undragItem();
  if (key === 'e' && !event.repeat) eatDraggedItem();
  if (key === '1' && !event.repeat) equipTool(state.ownedTools.ironAxe ? 'ironAxe' : 'axe');
  if (key === '2' && !event.repeat) equipTool('backpack');
  if (key === '3' && !event.repeat) equipTool('pickaxe');
  if (key === '4' && !event.repeat) equipTool('torch');
  if (key === '5' && !event.repeat) equipTool('ironSword');
  if (key === 'escape' && !event.repeat) {
    closeCraftPanel();
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

undragBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  undragItem();
});

storeBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  storeDraggedItem();
});

unstoreBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  unstoreLastItem();
});

eatBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  eatDraggedItem();
});

grinderBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  putInGrinder();
});

fireBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  putLogInFire();
});

plantBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  plantSapling();
});

axeSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool(state.ownedTools.ironAxe ? 'ironAxe' : 'axe');
});

backpackSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('backpack');
});

pickaxeSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('pickaxe');
});

torchSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('torch');
});

ironSwordSlot.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  equipTool('ironSword');
});

closeCraftBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  closeCraftPanel();
});

craftButton.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  craftSelectedRecipe();
});

placeBtn.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
  placeCarried();
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
    if (data.benchRef) return { kind: 'bench' };
    if (data.grinderRef) return { kind: 'grinder' };
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

  const hits = tapRaycaster.intersectObjects(world.children, true);
  for (const hit of hits) {
    if (!hit.object.isMesh || hit.object.userData.tapIgnore) continue;
    const owner = resolveTapOwner(hit.object);
    if (!owner) break;
    if (owner.kind === 'enemy') {
      applyTapInteraction(owner);
      return;
    }
    if (owner.kind === 'campfire') {
      // Tapping the fire is intentionally inert; feeding happens with the
      // contextual Put in fire button.
      return;
    }
    // A short tap always swings the held tool, even when the ray lands on scenery.
    attack();
    applyTapInteraction(owner);
    return;
  }
  attack();
  tapNearbyResource();
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
        showToast('Use the Pickaxe');
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
        showToast('Use the Axe');
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
    case 'bench': {
      if (getBenchDistance() > TAP_REACH) return tooFar();
      if (getBenchDistance() > BENCH_INTERACT_RANGE) {
        showToast('Move closer to the bench');
        return;
      }
      flashOutline(bench);
      openCraftPanel();
      return;
    }
    case 'grinder': {
      if (getGrinderDistance() > TAP_REACH) return tooFar();
      flashOutline(grinder);
      showToast('Drag a log or iron and press Put in grinder');
      return;
    }
    case 'campfire': {
      return;
    }
    default:
      break;
  }
}

// Tapping empty scenery with the right tool still swings at the nearest tree
// or iron rock standing within reach in front of the player.
const NEARBY_RESOURCE_RANGE = 3;

function tapNearbyResource() {
  if (interactionBlocked()) return;
  const canTree = canChopTool(state.equippedTool);
  const canRock = canMineTool(state.equippedTool);
  if (!canTree && !canRock) return;

  const fx = Math.sin(state.cameraYaw);
  const fz = Math.cos(state.cameraYaw);
  let best = null;
  const consider = (kind, x, z, ref) => {
    const dx = x - player.position.x;
    const dz = z - player.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance < 0.001 || distance > NEARBY_RESOURCE_RANGE) return;
    if ((dx * fx + dz * fz) / distance < 0.2) return;
    if (!best || distance < best.distance) best = { kind, ref, distance };
  };
  if (canTree) {
    for (const tree of treeData) {
      if (!tree.userData.choppable || tree.userData.falling || !tree.visible) continue;
      consider('tree', tree.position.x, tree.position.z, tree);
    }
  }
  if (canRock) {
    for (const rock of ironRocks) {
      if (rock.broken) continue;
      consider('rock', rock.x, rock.z, rock);
    }
  }
  if (!best) return;
  if (best.kind === 'tree') {
    chopTree(best.ref, TOOL_STATS[state.equippedTool]?.treePower ?? 1);
  } else {
    mineIronRock(best.ref);
  }
}

function harvestBerryBush(bush) {
  const now = performance.now();
  if (now < (bush.nextHarvest || 0)) {
    showToast('The bush needs a moment');
    return;
  }
  bush.nextHarvest = now + 4500;

  if (heldItem) {
    showToast('Hands full');
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
  // The fire is fed only through the contextual Put in fire action.
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
  closeCraftPanel();
  setSettingsOpen(false);
  state.equippedTool = null;
  state.equipTimer = 0;
  updateToolModels();
  updateHud();
  darkness.style.opacity = '0';
}

function attack(targetEnemy = null) {
  if (!state.started || state.gameOver || state.falling || state.paused || state.craftOpen || state.settingsOpen) return;
  if (state.attackCooldown > 0) return;
  const stats = TOOL_STATS[state.equippedTool];
  if (!['axe', 'ironAxe', 'ironSword'].includes(state.equippedTool) || !stats) return;

  if (targetEnemy) {
    player.rotation.y = Math.atan2(
      targetEnemy.position.x - player.position.x,
      targetEnemy.position.z - player.position.z
    );
  } else {
    // Empty-space strikes follow the shared camera yaw in either view.
    player.rotation.y = state.cameraYaw;
  }

  state.attackCooldown = stats.cooldown;
  state.attackTimer = ATTACK_DURATION;
  strikeArc.visible = true;
  strikeArc.scale.setScalar(0.7);
  playerGlow.intensity = 1.8;
  playAxeWhoosh();

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
    if (distance > 3 || distance < 0.01) continue;
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
  closeCraftPanel();
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
  state.swingCooldown = 0;
  player.position.set(3.1, getGroundHeight(3.1, -4.2), -4.2);
  player.rotation.y = 0;
  leftArm.rotation.set(0, 0, 0);
  rightArm.rotation.set(0, 0, 0);
  leftLeg.rotation.set(0, 0, 0);
  rightLeg.rotation.set(0, 0, 0);
  deathBanner.classList.remove('visible');
  hideHitMeter();

  state.cycleTime = DAY_LENGTH;
  state.nightActive = true;
  spawnNightWave();
  updateHud();
}

function spawnNightWave() {
  state.nightActive = true;
  if (state.night <= 1) {
    for (const enemy of enemies) {
      enemy.visible = false;
      enemy.position.set(0, -40, 0);
    }
    return;
  }
  const count = Math.min(state.night + 1 + (state.fireLevel - 1) * 2, MAX_ENEMIES);
  const spawnCenter = Math.min(arenaWallRadius - 8, 30 + (state.fireLevel - 1) * 16);

  for (let i = 0; i < enemies.length; i += 1) {
    const enemy = enemies[i];
    if (i >= count) {
      enemy.visible = false;
      enemy.position.set(0, -40, 0);
      continue;
    }

    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const radius = Math.max(18, spawnCenter - 5 + Math.random() * 8);
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
    || state.craftOpen || state.settingsOpen || state.inventoryOpen) return;
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
  clampToArena(player.position, 0.9);
}

// A two-phase chop: lift the arm up from the armed pose, then bring the tool
// down in front of the character before easing back to the pose.
function armedSwingAngle(progress) {
  const p = clamp(progress, 0, 1);
  if (p < 0.35) {
    const t = p / 0.35;
    return -1.05 * (t * t * (3 - 2 * t));
  }
  if (p < 0.72) {
    const t = (p - 0.35) / 0.37;
    return -1.05 + 1.85 * (t * t * (3 - 2 * t));
  }
  const t = (p - 0.72) / 0.28;
  return 0.8 - 0.8 * (t * t * (3 - 2 * t));
}

function updateAvatar(delta) {
  state.idleTime += delta;
  const armed = isToolType(state.equippedTool);

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
    if (armed) {
      rightArmX = ARMED_ARM_RAISE + (state.velocityY > 0.25 ? -0.12 : 0.08);
      rightArmZ = 0;
    }
    leftLegX = 0.12;
    rightLegX = -0.12;
  } else if (state.attackTimer > 0) {
    const progress = 1 - state.attackTimer / ATTACK_DURATION;
    const swing = Math.sin(clamp(progress, 0, 1) * Math.PI);
    leftArmX = 0.22 * swing;
    if (armed) {
      rightArmX = ARMED_ARM_RAISE + armedSwingAngle(progress);
    } else {
      rightArmX = -0.45 - 2.25 * swing;
      rightArmZ = 0.34 * swing;
    }
    leftLegX = 0.08 * swing;
    rightLegX = -0.08 * swing;
  } else if (state.chopTimer > 0) {
    const progress = 1 - state.chopTimer / 0.3;
    const swing = Math.sin(clamp(progress, 0, 1) * Math.PI);
    leftArmX = -0.4 * swing;
    if (armed) {
      rightArmX = ARMED_ARM_RAISE + armedSwingAngle(progress);
    } else {
      rightArmX = -2.2 * swing;
      rightArmZ = 0.12 * swing;
    }
  } else if (state.equipTimer > 0) {
    const progress = 1 - state.equipTimer / EQUIP_TIME;
    const lift = Math.sin(clamp(progress, 0, 1) * Math.PI);
    if (armed) {
      rightArmX = ARMED_ARM_RAISE - 0.2 * lift;
    } else {
      rightArmX = -1.15 * lift;
      rightArmZ = 0.22 * lift;
    }
    leftArmX = 0.18 * lift;
  } else if (state.moveSpeed > 0.1) {
    state.walkPhase += delta * (5 + state.moveSpeed);
    const swing = Math.sin(state.walkPhase) * 0.72;
    leftArmX = swing;
    rightArmX = armed ? ARMED_ARM_RAISE - swing * ARMED_WALK_FACTOR : -swing;
    leftLegX = -swing;
    rightLegX = swing;
  } else {
    const sway = Math.sin(state.idleTime * 1.9) * 0.05;
    leftArmX = sway;
    if (armed) {
      rightArmX = ARMED_ARM_RAISE - sway * 0.4;
    } else {
      rightArmX = -sway;
    }
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

  const fireStrong = !state.fireOut;

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

    let stunned = false;
    if (data.stunTimer > 0) {
      data.stunTimer = Math.max(0, data.stunTimer - delta);
      stunned = true;
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

    if (targetDistance > 0.35 && !stunned) {
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

    enemy.position.x = nextX;
    enemy.position.z = nextZ;
    resolveWorldPropCollisions(enemy, 0.36);
    clampToArena(enemy.position, 1.2);
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
    if (!stunned && touchDistance < 1.45 && Math.abs(player.position.y - enemy.position.y) < 2.2) {
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
  if (state.started && !state.gameOver && !state.fireOut) {
    const drainPerSecond = (FIRE_DRAIN_PER_MINUTE[state.fireLevel] || 1) / 60;
    state.fireProgress = Math.max(0, state.fireProgress - drainPerSecond * delta);
    if (state.fireProgress <= 0) {
      state.fireProgress = 0;
      state.fireOut = true;
      state.fireFlare = 0;
      state.fireBarMessageTimer = 0;
      fireBarDirty = true;
      fireWarning.classList.add('visible');
      showToast('The fire is out!');
      playFireOutTone();
    }
  }

  state.fireFlare = Math.max(0, state.fireFlare - delta * 1.6);
  updateLogBurst(delta);

  const burning = !state.fireOut;
  const ratio = clamp(state.fireProgress / 100, 0, 1);
  const safe = state.started && !state.gameOver && !state.fireOut && getCampfireInfluence() > 0;
  state.nearFire = safe;
  if (safe && !state.falling) {
    state.health = clamp(state.health + delta * 3, 0, 100);
  }

  const nightFactor = 1 - state.daylight;
  if (state.started && state.fireOut && nightFactor > 0.5) {
    state.fireDarken = Math.min(1, state.fireDarken + delta * 0.045);
  } else {
    state.fireDarken = Math.max(0, state.fireDarken - delta * 0.6);
  }

  spawnBurst.visible = spawnBurst.visible && spawnBurst.intensity > 0.1;
  if (spawnBurst.visible) {
    spawnBurst.intensity *= 0.96;
  }

  const t = performance.now() * 0.001;
  const flicker = 0.85 + Math.sin(t * 17.3) * 0.12 + Math.sin(t * 29.7 + 0.7) * 0.08;
  const growRate = 1 - Math.exp(-7 * delta);
  state.fireGrow = Math.min(1, state.fireGrow + growRate * 1.4);
  const growBase = state.fireLevel === 1 ? 0.7 : 0.56;
  const growScale = growBase + state.fireGrow * (1 - growBase);
  campfireVisual.scale.setScalar(growScale);

  fireCore.visible = burning;
  fireFlame.visible = burning;
  fireFlameInner.visible = burning;
  fireSparks.visible = burning;

  const emberGlow = state.fireEverLit ? 0.58 + Math.sin(t * 3) * 0.12 : 0.02;
  emberBed.material.emissiveIntensity = burning ? 0.25 + ratio * 0.55 : emberGlow;

  if (safeRing) {
    safeRing.visible = burning && state.started;
    if (safeRing.material) {
      safeRing.material.opacity = burning ? 0.2 + Math.sin(t * 1.6) * 0.035 : 0;
    }
  }

  if (burning) {
    const height = FIRE_FLAME_HEIGHTS[state.fireLevel] || 1;
    const width = 0.42 + height * 0.27;
    const sway = Math.sin(t * 9) * 0.06;
    const flare = state.fireFlare;
    const levelScale = 0.82 + state.fireLevel * 0.1;

    fireCore.scale.setScalar(((0.7 + ratio * 0.35) * (1 + Math.sin(t * 12) * 0.08) + flare * 0.4) * levelScale);
    fireCore.position.y = 0.42 + Math.sin(t * 6) * 0.04;
    fireCore.rotation.y += delta * 2.4;

    const scaleY = (height / 1.5) * (0.95 + Math.sin(t * 8.5) * 0.08 + flare * 0.35);
    fireFlame.scale.set(width * (0.92 + Math.sin(t * 7.7) * 0.06), scaleY, width * (0.92 + Math.cos(t * 7.1) * 0.06));
    fireFlame.position.y = 0.2 + height * 0.5 + Math.sin(t * 8.5) * 0.05;
    fireFlame.rotation.y += delta * 1.9;
    fireFlame.rotation.z = sway;

    const innerScaleY = (height / 1.5) * (0.88 + Math.sin(t * 14) * 0.09 + flare * 0.3);
    fireFlameInner.scale.set(width * 0.5, innerScaleY, width * 0.5);
    fireFlameInner.position.y = 0.18 + height * 0.44 + Math.sin(t * 10 + 1) * 0.04;
    fireFlameInner.rotation.z = -sway * 0.8;

    fireGlow.intensity = (0.7 + height * 0.72 + ratio * 0.7) * flicker + flare * 4;
    fireGlow.distance = 8 + height * 4;
    warmLight.intensity = (0.28 + height * 0.28 + ratio * 0.45) * flicker + flare * 2.2;
    warmLight.distance = 12 + height * 3.6;
    sparkMaterial.size = 0.055 + (state.fireLevel - 1) * 0.01;
    sparkMaterial.opacity = 0.5 + ratio * 0.28 + Math.sin(t * 13) * 0.1;
    updateSparks(delta, clamp(0.2 + ratio, 0, 1), state.fireLevel);

    if (state.fireLevel >= 5) {
      smokePuffs.forEach((puff, i) => {
        const phase = (t * 0.3 + i / smokePuffs.length) % 1;
        puff.position.set(Math.sin(t * 0.8 + i) * 0.12, 1.7 + phase * 4.2, Math.cos(t * 0.7 + i) * 0.12);
        puff.scale.setScalar(0.9 + phase * 2.2);
        puff.material.opacity = 0.11 * (1 - phase);
      });
    }
  } else {
    fireGlow.intensity = 0;
    warmLight.intensity = 0;
    sparkGeometry.setDrawRange(0, 0);
    smokePuffs.forEach((puff) => { puff.material.opacity = 0; });
  }

  if (burning) {
    const smokeRate = state.fireLevel >= 5 ? 0.75 : 1;
    for (let i = 0; i < smokePuffs.length; i += 1) {
      const puff = smokePuffs[i];
      const phase = (t * 0.42 + i / smokePuffs.length) % 1;
      puff.position.set(Math.sin(t * 1.4 + i) * 0.14, 1.5 + phase * 1.8, Math.cos(t * 1.2 + i) * 0.12);
      puff.scale.setScalar(0.6 + phase * 1.05);
      puff.material.opacity = 0.09 * (1 - phase) * smokeRate;
    }
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
  wallTopFadeMaterial.color.copy(workColorB);
  // Keep the starting arena cloaked, then let the daytime view reach farther
  // as the wall retreats so the player can actually watch it slide outward.
  // Night stays deliberately close and murky at every level.
  const fogScale = Math.pow(ARENA_RADIUS_START / Math.max(ARENA_RADIUS_START, arenaWallRadius), 0.62);
  scene.fog.density = 0.014 * fogScale + nightFactor * 0.042;

  ambient.color.copy(ambientDayColor).lerp(ambientNightColor, nightFactor);
  ambient.intensity = 1.0 - nightFactor * 0.45;
  moonLight.color.copy(sunDayColor).lerp(moonNightColor, nightFactor);
  moonLight.intensity = 1.25 - nightFactor * 0.55;

  phaseIcon.classList.toggle('night', nightFactor > 0.5);

  const fireOutExtra = state.started && state.fireEverLit && state.fireOut
    ? 0.1 + state.fireDarken * 0.4
    : 0;
  darkness.style.opacity = String(clamp(nightFactor * 0.3 + fireOutExtra, 0, 0.9));
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
  if (Math.hypot(bench.position.x - cameraPivot.x, bench.position.z - cameraPivot.z) < broadRadius) {
    cameraCandidates.push(bench);
  }
  if (Math.hypot(grinder.position.x - cameraPivot.x, grinder.position.z - cameraPivot.z) < broadRadius) {
    cameraCandidates.push(grinder);
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
  clampToArena(camera.position, 0.45);

  // Third-person looks at the head pivot; first-person looks straight ahead.
  cameraLookTarget.copy(cameraPivot).lerp(
    cameraLookForward.copy(cameraPivot).addScaledVector(cameraForward, 10),
    blend
  );
  camera.lookAt(cameraLookTarget);

  if (wallShake > 0) {
    const shakeTime = performance.now() * 0.001;
    const amount = wallShake * 0.13;
    camera.position.x += Math.sin(shakeTime * 43.7) * amount;
    camera.position.y += Math.sin(shakeTime * 51.3 + 1.7) * amount * 0.6;
    camera.position.z += Math.cos(shakeTime * 47.1 + 0.4) * amount;
  }

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

// ---------- World-space HUD prompts ----------

const promptVec = new THREE.Vector3();

function projectPrompt(element, worldPos) {
  promptVec.copy(worldPos).project(camera);
  if (promptVec.z > 1) return false;
  const x = (promptVec.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-promptVec.y * 0.5 + 0.5) * window.innerHeight;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  return true;
}

const handLabelVec = new THREE.Vector3();

function updateHandLabels() {
  const showLabels = state.started && !state.gameOver && !state.portrait;
  const dragging = showLabels && !!heldItem && heldItem.popping <= 0;

  dragLabel.classList.toggle('visible', dragging);
  if (dragging) {
    const type = heldItem.type;
    dragName.textContent = DRAG_NAMES[type] || ITEM_NAMES[type] || 'Item';

    const flameCount = ITEM_FLAMES[type] || 0;
    if (dragFlames.dataset.count !== String(flameCount)) {
      dragFlames.dataset.count = String(flameCount);
      dragFlames.replaceChildren();
      for (let i = 0; i < flameCount; i += 1) {
        const flame = document.createElement('span');
        flame.className = 'drag-flame';
        dragFlames.appendChild(flame);
      }
    }

    // The label floats just above the dragged item and always faces the camera
    // because it is screen-space HTML layered over the 3D scene.
    handLabelVec.copy(heldItem.mesh.position);
    handLabelVec.y += 0.62;
    if (!projectPrompt(dragLabel, handLabelVec)) dragLabel.classList.remove('visible');
  }

  const showSack = showLabels && isBackpackEquipped() && !state.firstPerson;
  sackCounter.classList.toggle('visible', showSack);
  if (showSack) {
    sackCounter.textContent = `${backpackCount()}/${state.backpackCapacity}`;
    handLabelVec.copy(player.position);
    handLabelVec.y += 2.4;
    if (!projectPrompt(sackCounter, handLabelVec)) sackCounter.classList.remove('visible');
  }
}

function updateWorldPrompts(delta) {
  if (state.startHintTimer > 0) {
    state.startHintTimer = Math.max(0, state.startHintTimer - delta);
    if (state.startHintTimer <= 0) startHint.classList.remove('visible');
  }

  camera.updateMatrixWorld();

  const showBench = state.started && !state.gameOver && !state.portrait
    && !state.craftOpen && getBenchDistance() <= BENCH_PROMPT_RANGE;
  benchPrompt.classList.toggle('hidden', !showBench);
  if (showBench) {
    const target = new THREE.Vector3(bench.position.x, bench.position.y + 1.75, bench.position.z);
    if (!projectPrompt(benchPrompt, target)) benchPrompt.classList.add('hidden');
  }

  updateHandLabels();
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

function playGrinderSound() {
  playNoise(0.34, 0.065, 'lowpass', 520, 150, 0.7);
  playTone(150, 82, 0.32, 'sawtooth', 0.03);
  playTone(76, 52, 0.28, 'square', 0.022, 0.03);
}

function playErrorTone() {
  playTone(240, 150, 0.16, 'square', 0.03);
}

function playFireLevelChime() {
  const notes = [392, 523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    playTone(freq, freq, 0.5, 'triangle', 0.042, index * 0.09);
    playTone(freq * 2, freq * 2, 0.3, 'sine', 0.012, index * 0.09 + 0.01);
  });
}

function playFireOutTone() {
  playTone(320, 180, 0.5, 'sine', 0.04);
  playTone(180, 90, 0.7, 'triangle', 0.03, 0.08);
  playNoise(0.5, 0.03, 'lowpass', 500, 120);
}

function playFireIgnite() {
  playNoise(0.65, 0.075, 'bandpass', 700, 220, 0.9);
  playTone(160, 520, 0.42, 'sawtooth', 0.032);
  playTone(392, 784, 0.34, 'triangle', 0.025, 0.05);
}

function playRumble() {
  playTone(58, 29, 1.5, 'sine', 0.075, 0.02, 0.03);
  playTone(92, 42, 1.1, 'triangle', 0.035, 0.12, 0.04);
  playNoise(1.35, 0.085, 'lowpass', 190, 46, 0.8);
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

function playFireCrackle(proximity, level = 1) {
  const gain = (0.008 + proximity * 0.03) * (1 + (level - 1) * 0.3);
  playNoise(
    0.025 + Math.random() * 0.045,
    gain,
    'highpass',
    900 + Math.random() * 1400,
    0,
    0.9
  );
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
    closeCraftPanel();
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
  const fireRatio = clamp(state.fireProgress / 100, 0, 1);
  const levelBoost = 1 + (state.fireLevel - 1) * 0.32;
  audio.fireGain.gain.setTargetAtTime(
    fireBurning ? (0.004 + fireProximity * 0.042) * (0.45 + fireRatio * 0.55) * levelBoost : 0.0001,
    now,
    0.35
  );

  if (fireBurning && !state.paused && fireProximity > 0.04) {
    audio.fireCrackleTimer -= delta;
    if (audio.fireCrackleTimer <= 0) {
      playFireCrackle(fireProximity, state.fireLevel);
      audio.fireCrackleTimer = 0.13 + Math.random() * 0.42 + (1 - fireProximity) * 0.55
        - (state.fireLevel - 1) * 0.035;
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
    state.chopTimer = Math.max(0, state.chopTimer - delta);
    state.swingCooldown = Math.max(0, state.swingCooldown - delta);
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

    if (touchDebugTimer > 0) {
      touchDebugTimer = Math.max(0, touchDebugTimer - rawDelta);
      if (touchDebugTimer <= 0) touchDebugEl.classList.remove('visible');
    }

    if (state.started && !state.gameOver) {
      updateDayNight(delta);
      if (state.falling > 0) {
        state.falling = Math.max(0, state.falling - delta);
        if (state.falling <= 0) respawnAtCamp();
      } else {
        movePlayer(delta);
      }
      updateArenaWall(Math.min(rawDelta, 0.2));
      processForestQueue();
      clampToArena(player.position);
      updatePlayerVertical(delta);
      updateEnemies(delta);
      updateVitals(delta);
      updateInteractionTarget();
      updateTrees(delta);
      updateGroundItems(delta);
      updateFlyingItems(delta);
      updatePlantedSaplings(delta);
      updateCampfire(delta);
      updateGrinder(delta);
      updateBearTraps(delta);
      updateIronRocks(delta);
      updateHud();
    } else {
      state.moveSpeed = 0;
      updatePlayerVertical(delta);
      updateInteractionTarget();
      updateTrees(delta);
      updateGroundItems(delta);
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

  updateFireBar(Math.min(rawDelta, 0.2));
  updateAudio(delta);
  applyDayNightVisuals();
  updateCamera(delta);
  sky.position.copy(camera.position);
  updateWorldPrompts(delta);
  updateHitMeter(delta);
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

regrowBerries();
spawnStarterIron();
buildCampfireLevel(1);
if (safeRing) safeRing.visible = false;
updateHotbarLabels();
updateHud();
applyDayNightVisuals();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => { fireBarDirty = true; });
}
if (import.meta.env.DEV) {
  window.__nightsDebug = {
    state,
    enemies,
    player,
    campfire,
    campfireVisual,
    safeRing: () => safeRing,
    camera,
    canvas,
    axe,
    handBackpack,
    lantern,
    treeData,
    groundItems,
    flyingItems,
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
    attack,
    pickUpItem,
    undragItem,
    heldItem: () => heldItem,
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
    solidProps,
    bench,
    grinder,
    benchState,
    RECIPES,
    placedWalls,
    placedTraps,
    mineIronRock,
    updateGrinder,
    updateBearTraps,
    updateIronRocks,
    openCraftPanel,
    closeCraftPanel,
    craftSelectedRecipe,
    selectRecipe,
    placeCarried,
    spawnWall,
    spawnBearTrap,
    putInGrinder,
    putLogInFire,
    addFireProgress,
    levelUpCampfire,
    buildCampfireLevel,
    updateCampfire,
    fireBar,
    fireBarCanvas,
    fireBarColorFor,
    drawFireBar,
    arenaWall,
    arenaWallRadius: () => arenaWallRadius,
    wallExpansion: () => wallExpansion,
    wallShake: () => wallShake,
    clampToArena,
    beginWallExpansion,
    ensureForestRingQueued,
    processForestQueue,
    buildForestChunk,
    forestStats,
    forestQueue,
    generatedForestGroup,
    resetForestExpansion,
    well,
    pond,
    noticeBoard,
    mapExpandedNotice,
    scene,
    renderer,
    updateArenaWall,
    ARENA_RADIUS_BY_LEVEL,
    FIRE_SAFE_RADII,
    getFireScareRadius,
    getCampfireSafeRadius,
    setSettingsOpen,
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
