import "./styles.css"
import * as THREE from "three"
import {Planet} from "./engine/planet"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earth = new Planet(5, 0x2244ff);
scene.add(earth.mesh);

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(10, 0, 0);
scene.add(sun);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  sun.position.set(Math.cos(Date.now() * 0.0001) * 10, 0, Math.sin(Date.now() * 0.0001) * 10)

  renderer.render(scene, camera);
}

animate();