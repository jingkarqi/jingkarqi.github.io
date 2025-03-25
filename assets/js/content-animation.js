// 初始化内容动画的主函数
const initContentAnimation = () => {
    // 获取页面中所有class为'section'的元素
    // querySelectorAll返回一个NodeList，包含所有匹配的元素
    const sections = document.querySelectorAll('.section');
    
    // 定义检查元素可见性的函数
    const checkVisibility = () => {
        // 遍历所有section元素
        sections.forEach(section => {
            // 获取当前section元素距离视窗顶部的距离
            // getBoundingClientRect()返回元素的大小及其相对于视窗的位置
            const sectionTop = section.getBoundingClientRect().top;
            
            // 判断元素是否进入视窗的可见区域
            // window.innerHeight * 0.8表示视窗高度的80%位置
            // 当元素顶部进入视窗80%位置时触发动画
            if (sectionTop < window.innerHeight * 0.8) {
                // 给元素添加'visible'类名，触发CSS动画
                section.classList.add('visible');
            }
        });
    };

    // 监听页面滚动事件，当用户滚动页面时检查元素可见性
    window.addEventListener('scroll', checkVisibility);
    // 监听窗口大小改变事件，当用户调整浏览器窗口大小时检查元素可见性
    window.addEventListener('resize', checkVisibility);
    
    // 页面加载完成后立即执行一次检查
    checkVisibility();
};

// 只有当页面中存在class为'section'的元素时才初始化动画
if(document.querySelector('.section')) {
    initContentAnimation();
}