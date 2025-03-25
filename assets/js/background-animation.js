// 初始化Three.js场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-card').appendChild(renderer.domElement);

const shaderCode = {
    vertex: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragment: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
            float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233)) + time) * 43758.5453);
            vec3 color = mix(color1, color2, vUv.x + sin(time * 0.5 + vUv.y * 3.14) * 0.3);
            color += noise * 0.03;
            gl_FragColor = vec4(color, 0.8);
        }
    `
};

const createFaceMaterial = (color1, color2) => {
    return new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 },
            color1: { value: new THREE.Color(color1) },
            color2: { value: new THREE.Color(color2) }
        },
        vertexShader: shaderCode.vertex,
        fragmentShader: shaderCode.fragment,
        transparent: true,
        side: THREE.DoubleSide
    });
};

const colors = [
    ['#6366F1', '#A855F7'],
    ['#8B5CF6', '#D946EF'],
    ['#3B82F6', '#6366F6'],
    ['#A855F7', '#EC4899'],
    ['#6366F1', '#8B5CF6'],
    ['#A855F7', '#3B82F6']
];

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    colors.map(([c1, c2]) => createFaceMaterial(c1, c2))
);
scene.add(cube);
camera.position.z = 50;

const animate = () => {
    requestAnimationFrame(animate);
    const time = performance.now() * 0.001;
    
    cube.material.forEach(material => material.uniforms.time.value = time);
    cube.rotation.x = time * 0.2;
    cube.rotation.y = time * 0.3;
    cube.rotation.z = Math.sin(time * 0.1) * 0.2;
    cube.position.z = Math.sin(time * 0.2) * 3;

    renderer.render(scene, camera);
};

const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onResize);

animate();