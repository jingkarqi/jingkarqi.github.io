// 创建一个新的Three.js场景，这是所有3D对象存在的空间容器
const scene = new THREE.Scene();
// 创建一个透视相机，参数分别是:
// 75: 视野角度(FOV)
// window.innerWidth / window.innerHeight: 屏幕宽高比
// 0.1: 近裁剪面(最近能看到的距离)
// 1000: 远裁剪面(最远能看到的距离)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 创建WebGL渲染器，设置抗锯齿(antialias)和透明背景(alpha)
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// 设置渲染器的尺寸为窗口大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 将渲染器的画布添加到HTML中id为'background-card'的元素内
document.getElementById('background-card').appendChild(renderer.domElement);

// 定义着色器代码，包含顶点着色器和片元着色器
const shaderCode = {
    // 顶点着色器：处理每个顶点的位置和UV坐标
    vertex: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    // 片元着色器：处理每个像素的颜色，创建渐变和动画效果
    fragment: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
            // 创建一个随机噪声效果
            float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233)) + time) * 43758.5453);
            // 混合两种颜色，并添加基于时间的动画效果
            vec3 color = mix(color1, color2, vUv.x + sin(time * 0.5 + vUv.y * 3.14) * 0.3);
            // 添加一点噪声到颜色中
            color += noise * 0.03;
            // 设置最终颜色，alpha值为0.8(半透明)
            gl_FragColor = vec4(color, 0.8);
        }
    `
};

// 创建立方体面的材质的函数，接收两个颜色参数
const createFaceMaterial = (color1, color2) => {
    return new THREE.ShaderMaterial({
        // 传递给着色器的统一变量
        uniforms: {
            time: { value: 0 },  // 时间变量，用于动画
            color1: { value: new THREE.Color(color1) },  // 第一个颜色
            color2: { value: new THREE.Color(color2) }   // 第二个颜色
        },
        vertexShader: shaderCode.vertex,    // 使用上面定义的顶点着色器
        fragmentShader: shaderCode.fragment, // 使用上面定义的片元着色器
        transparent: true,  // 启用透明效果
        side: THREE.DoubleSide  // 使材质的两面都可见
    });
};

// 定义立方体六个面的颜色对，每个面都是一个渐变效果
const colors = [
    ['#6366F1', '#A855F7'],  // 面1的渐变色
    ['#8B5CF6', '#D946EF'],  // 面2的渐变色
    ['#3B82F6', '#6366F6'],  // 面3的渐变色
    ['#A855F7', '#EC4899'],  // 面4的渐变色
    ['#6366F1', '#8B5CF6'],  // 面5的渐变色
    ['#A855F7', '#3B82F6']   // 面6的渐变色
];

// 创建一个立方体网格
// BoxGeometry(20, 20, 20)创建一个20x20x20的立方体
// 使用colors数组中的颜色对为每个面创建材质
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    colors.map(([c1, c2]) => createFaceMaterial(c1, c2))
);
// 将立方体添加到场景中
scene.add(cube);
// 设置相机位置，z=50表示相机在z轴正方向50个单位处
camera.position.z = 50;

// 动画循环函数
const animate = () => {
    // 请求下一帧动画
    requestAnimationFrame(animate);
    // 获取当前时间（秒）
    const time = performance.now() * 0.001;
    
    // 更新所有材质的时间uniform变量
    cube.material.forEach(material => material.uniforms.time.value = time);
    // 设置立方体的旋转
    cube.rotation.x = time * 0.2;  // 绕X轴旋转
    cube.rotation.y = time * 0.3;  // 绕Y轴旋转
    cube.rotation.z = Math.sin(time * 0.1) * 0.2;  // 绕Z轴做正弦运动
    // 立方体在Z轴上做正弦运动
    cube.position.z = Math.sin(time * 0.2) * 3;

    // 渲染场景
    renderer.render(scene, camera);
};

// 窗口大小改变时的处理函数
const onResize = () => {
    // 更新相机的宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新相机的投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器的尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
};

// 监听窗口大小改变事件
window.addEventListener('resize', onResize);

// 开始动画循环
animate();