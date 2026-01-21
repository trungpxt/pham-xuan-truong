const circle = document.querySelector('.circle');

document.addEventListener('mousemove', function(e) {
    const x = e.clientX; 
    const y = e.clientY;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // Chiều cao trình duyệt
      var elementTop = reveals[i].getBoundingClientRect().top; // Vị trí phần tử so với đỉnh
      var elementVisible = 150; // Khoảng cách đệm (xuất hiện sớm hay muộn)
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  // Lắng nghe sự kiện cuộn chuột
  window.addEventListener("scroll", reveal);
  
  // Gọi hàm ngay khi load trang để kiểm tra các phần tử ở ngay đầu trang
  reveal();

  console.log("js oke")