var THREE = require('three');
var scene = new THREE.Scene();
var camera=new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,1000
);

var renderer=new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// var geometry = new THREE.SphereGeometry( 5, 32, 32 );
var geometry=new THREE.BoxGeometry(1,1,1);

var material=new THREE.MeshBasicMaterial( { color: 0xffff00 })
var cube=new THREE.Mesh(geometry,material);
scene.add( cube );

camera.position.z = 5;

var render=function() {
  requestAnimationFrame( render );
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  renderer.render( scene, camera );
}
render();