// Initialize the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define the geometry (hand gesture model)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xFFA500 }); // Orange color for hand gesture
const handGesture = new THREE.Mesh(geometry, material);
scene.add(handGesture);

// Define the speech bubble
const bubbleGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0xADD8E6 }); // Light blue color for speech bubble
const speechBubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
speechBubble.position.set(1.5, 0, 0); // Position the speech bubble to the right of the hand gesture
scene.add(speechBubble);

// Render the scene
function animate() {
    requestAnimationFrame(animate);

    handGesture.rotation.x += 0.01;
    handGesture.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();