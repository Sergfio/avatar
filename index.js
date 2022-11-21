import { Scene } from './node_modules/three/src/scenes/Scene.js';
// import { WebGLRenderTarget } from 'three';


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const aspect_ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

var light = new THREE.HemisphereLight('white', 'grey', 0.5);
  scene.add( light );


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.IcosahedronGeometry( 200, 1);
var material = new THREE.MeshBasicMaterial( {
    color: 'goldenrod',
    shininess: 20,
    specular: 'lightgrey',
    side: THREE.DoubleSide,
	flatShading: true
     } );


    var mesh = new THREE.Object3D();
    mesh.add(new THREE.Mesh(geometry, material));
    scene.add(mesh);



animate();
function animate() {
  requestAnimationFrame(animate);
  var t = Date.now() * 0.0001;

  /*** (4) PLAY with the numbers!! ***/
  mesh.rotation.x = 0.1*t;
  mesh.rotation.y = 1*t;

  renderer.render(scene, camera);
}

var light = new THREE.PointLight('white', 0.75);
  light.position.set(400, 400, 600);
  scene.add( light );

 // Highlight the lines in the shape
 mesh.add(
    new THREE.LineSegments(
        geometry,
        new THREE.LineBasicMaterial({
            transparent: true,
            opacity: 0.5
        })
    )
  );