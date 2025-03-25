// 这是一个用于网页主题切换（暗色/亮色模式）的功能模块

// 定义初始化主题切换的函数
const initThemeToggle = () => {
    // 获取页面上的主题切换按钮元素
    // 这个按钮必须在HTML中有一个id为'theme-toggle'的元素
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // 从浏览器的本地存储中读取之前保存的主题设置
    // 如果没有保存过主题设置，则默认使用暗色主题'dark'
    // localStorage是浏览器提供的本地存储功能，可以保存用户的偏好设置
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // 将主题设置应用到整个网页
    // 通过设置HTML根元素的data-theme属性来切换主题
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 根据当前主题设置切换按钮显示的图标
    // 如果是暗色模式，显示太阳☀️图标；如果是亮色模式，显示月亮🌙图标
    themeToggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    // 定义主题切换的具体执行函数
    const toggleTheme = () => {
        // 获取当前的主题设置
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // 切换到相反的主题：如果当前是暗色就切换到亮色，反之亦然
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // 将新的主题设置应用到网页
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // 将新的主题设置保存到浏览器的本地存储中，以便下次访问时保持相同的主题
        localStorage.setItem('theme', newTheme);
        
        // 更新切换按钮的图标，与当前主题对应
        themeToggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    };
    
    // 为主题切换按钮添加点击事件监听器
    // 当用户点击按钮时，会执行toggleTheme函数来切换主题
    themeToggleButton.addEventListener('click', toggleTheme);
};

// 当网页的DOM内容加载完成后，执行主题切换的初始化函数
// 这确保了在所有HTML元素都准备就绪后才开始设置主题
document.addEventListener('DOMContentLoaded', initThemeToggle);