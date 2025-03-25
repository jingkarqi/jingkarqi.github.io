// 主题切换逻辑
const initThemeToggle = () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // 加载保存的主题
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    
    // 主题切换函数
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    };
    
    // 添加点击事件监听器
    themeToggleButton.addEventListener('click', toggleTheme);
};

// 在DOM加载完成后初始化主题切换
document.addEventListener('DOMContentLoaded', initThemeToggle);