let scene, camera, renderer, sphere;
let isUserInteracting = false, onPointerDownMouseX = 0, onPointerDownMouseY = 0, lon = 180, onPointerDownLon = 0, lat = 0, onPointerDownLat = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const rumorLoc = urlParams.get('loc');

let panoSrc;

init();
animate();

function init() {
  const container = document.body;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
  camera.target = new THREE.Vector3(0, 0, 0);

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  // Invert the sphere to view from inside
  geometry.scale(-1, 1, 1);

  switch (rumorLoc) {
    default:
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/york.jpg";
      break;
    case "regan":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/regan.jpg";
      break;
    case "wildwood":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/wildwood.jpg";
      break;
    case "target1":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/target_1.jpg";
      break;
    case "target2":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/target_2.jpg";
      break;
    case "target3":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/target_3.jpg";
      break;
    case "michaels":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/michaels.jpg";
      break;
    case "3rdave1":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/ave3_1.jpeg";
      break;
    case "3rdave2":
      panoSrc = "https://burlingtonemperor.github.io/building_photos_archive/panorama/ave3_2.jpeg";
      break;
  }

  const texture = new THREE.TextureLoader().load(panoSrc); // Replace with your image
  const material = new THREE.MeshBasicMaterial({ map: texture });

  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  container.addEventListener('mousedown', onPointerDown, false);
  container.addEventListener('mousemove', onPointerMove, false);
  container.addEventListener('mouseup', onPointerUp, false);
  container.addEventListener('wheel', onDocumentMouseWheel, false);

  container.addEventListener('touchstart', onPointerDown, false);
  container.addEventListener('touchmove', onPointerMove, false);
  container.addEventListener('touchend', onPointerUp, false);

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerDown(event) {
  isUserInteracting = true;
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;

  onPointerDownMouseX = clientX;
  onPointerDownMouseY = clientY;
  onPointerDownLon = lon;
  onPointerDownLat = lat;
}

function onPointerMove(event) {
  if (isUserInteracting) {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    lon = onPointerDownLon + (onPointerDownMouseX - clientX) * 0.1;
    lat = onPointerDownLat + (clientY - onPointerDownMouseY) * 0.1;
  }
}

function onPointerUp() {
  isUserInteracting = false;
}

function onDocumentMouseWheel(event) {
  camera.fov += event.deltaY * 0.05;
  camera.fov = Math.max(30, Math.min(100, camera.fov));
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  update();
}

function update() {
  lat = Math.max(-85, Math.min(85, lat));
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon);

  camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
  camera.target.y = 500 * Math.cos(phi);
  camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
  camera.lookAt(camera.target);

  renderer.render(scene, camera);
}