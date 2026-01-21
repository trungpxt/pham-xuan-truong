document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiệu ứng reveal section khi scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: chỉ observe 1 lần (tăng hiệu suất)
                // revealObserver.unobserve(entry.target);
            }
            // Nếu muốn ẩn lại khi scroll ra (tùy chọn)
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.10,          // hiện khi 15% section vào viewport
        rootMargin: "0px 0px -80px 0px" // trừ chiều cao navbar ~6vw
    });

    reveals.forEach(section => {
        revealObserver.observe(section);
    });

    // 2. Optional: Smooth scroll khi click menu (rất mượt, khuyến khích thêm)
    document.querySelectorAll('.item-head').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // trừ chiều cao header
                    behavior: 'smooth'
                });
            }
        });
    });
});

