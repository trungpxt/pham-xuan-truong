window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        // Kiểm tra nếu section hiển thị ít nhất 80% trong viewport
        if (section.getBoundingClientRect().top < window.innerHeight * 0.8) {
            section.classList.add('visible');
        } else {
            // (Tùy chọn) Nếu muốn hiệu ứng chạy lại, xóa class khi scroll ra ngoài
            // section.classList.remove('visible');
        }
    });
});
