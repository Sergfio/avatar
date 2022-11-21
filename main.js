// import { WebGL1Renderer } from "three";

// import { Scene } from './node_modules/three/src/scenes/Scene.js';
import * as THREE from 'three'

const scene = new THREE.Scene();

//NOTE - The 'renderer'
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//NOTE - The camera
var aspect_ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

const flat = {
    flatShading: true,

};
var light = new THREE.AmbientLight('white', 0.8);
scene.add(light);


// NOTE - AVATAR CREATE
    var shape = new THREE.SphereGeometry(150, 50, 55, 20);
    var cover = new THREE.MeshNormalMaterial(flat);
    var avatar = new THREE.Mesh(shape, cover);
    avatar.position.set(0, 0, 0)
    scene.add(avatar);

    // NOTE - AVATAR hand right
    var shape = new THREE.CylinderGeometry(10, 10, 150);
    var cover = new THREE.MeshNormalMaterial(flat);
    var handRight = new THREE.Mesh(shape, cover);
    handRight.position.set(-150, 100, 90);
    handRight.rotation.set(0.5,0.5,0.5);
    avatar.add(handRight);

    // NOTE - AVATAR hand left
    var shape = new THREE.CylinderGeometry(10, 10, 150);
    var cover = new THREE.MeshNormalMaterial(flat);
    var handLeft = new THREE.Mesh(shape, cover);
    handLeft.position.set(150, 100, 70);
    handLeft.rotation.set(5.5,5.5,8.5);
    avatar.add(handLeft);

     // NOTE - AVATAR hals
    var shape = new THREE.CylinderGeometry(30, 30, 100, 100);
    var cover = new THREE.MeshNormalMaterial(flat);
    var hals = new THREE.Mesh(shape, cover);
    hals.position.set(0, 100, 80, 150);
    avatar.add(hals);

     // NOTE - AVATAR kopf
    var shape = new THREE.SphereGeometry(70, 70, 55);
    var cover = new THREE.MeshNormalMaterial(flat);
    var head = new THREE.Mesh(shape, cover);
    head.position.set(0, 230, 0)
    avatar.add(head);

     // NOTE - AVATAR bein right
    var shape = new THREE.CylinderGeometry(10, 10, 150);
    var cover = new THREE.MeshNormalMaterial(flat);
    var beinRight = new THREE.Mesh(shape, cover);
    beinRight.position.set(-150, -100, 100 );
    beinRight.rotation.set(1, 1 ,1);
    avatar.add(beinRight);

       // NOTE - AVATAR bein left
    var shape = new THREE.CylinderGeometry(10, 10, 150);
    var cover = new THREE.MeshNormalMaterial(flat);
    var beinLeft = new THREE.Mesh(shape, cover);
    beinLeft.position.set(150, -100, 100 );
    beinLeft.rotation.set(29.1, 1 ,1);
    avatar.add(beinLeft);



var clock = new THREE.Clock();
var isCartwheeling = true;
function animate() {
    requestAnimationFrame(animate);
    if(isCartwheeling) {avatar.rotation.z = avatar.rotation.z + 0.01;}
    var t = clock.getElapsedTime();


    renderer.render(scene, camera);
}
animate();

