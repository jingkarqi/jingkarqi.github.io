// 初始化内容动画
const initContentAnimation = () => {
    const sections = document.querySelectorAll('.section');
    
    const checkVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    checkVisibility();
};

if(document.querySelector('.section')) {
    initContentAnimation();
}