// 复制功能实现
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async () => {
        const sectionId = button.getAttribute('data-section');
        const content = document.querySelector(`#${sectionId} .doc-content`).textContent;
        
        try {
            await navigator.clipboard.writeText(content);
            button.innerHTML = '<i class="fas fa-check"></i> 已复制';
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-copy"></i> 复制内容';
            }, 2000);
        } catch (err) {
            console.error('复制失败:', err);
            button.innerHTML = '<i class="fas fa-times"></i> 复制失败';
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 