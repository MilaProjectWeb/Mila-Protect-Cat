let slideIndex = 1;
showSlides(slideIndex);

// Next/Prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Click thumbnail
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const thumbs = document.getElementsByClassName("thumbnail");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.remove("active-thumb");
  }

  slides[slideIndex-1].classList.add("active-slide");
  thumbs[slideIndex-1].classList.add("active-thumb");
}

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.icon');

            // Toggle mở/đóng nội dung
            content.classList.toggle('show');
            this.classList.toggle('active');

            // Đổi icon +/-
            if (content.classList.contains('show')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar ul a');
    const brandLinks = document.querySelectorAll('.navbar .brand a');
    const btn = document.querySelector('.navbar .btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const isScrolled = window.scrollY > 50;

    // Toggle class cho navbar
    navbar.classList.toggle('scrolled', isScrolled);

    // Toggle class cho links
    links.forEach(link => link.classList.toggle('scrolled', isScrolled));

    // Toggle class cho brand links
    brandLinks.forEach(link => link.classList.toggle('scrolled', isScrolled));

    // Toggle class cho button
    if (btn) {
        btn.classList.toggle('scrolled', isScrolled);
    }

    // Toggle class cho menu-toggle
    if (menuToggle) {
        menuToggle.classList.toggle('scrolled', isScrolled);
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar ul');
const links = document.querySelectorAll('.navbar ul li a');
const btn = document.querySelector('.navbar .btn');

menuToggle.addEventListener('click', () => {
    // Toggle class 'active' cho danh sách navbar
    navLinks.classList.toggle('active');

    // Kiểm tra xem navbar có đang ở trạng thái active không
    if (navLinks.classList.contains('active')) {
        // Khi mở navbar, thay đổi màu
        links.forEach(link => {
            link.style.color = "white"; // Màu chữ của các link
        });

        btn.style.backgroundColor = "var(--primary-color)"; // Màu nền của nút
        menuToggle.style.color = "white"; // Màu của menu toggle
    } else {
        // Khi đóng navbar, quay lại màu cũ
        links.forEach(link => {
            link.style.color = "black"; // Quay lại màu ban đầu của các link
        });

        btn.style.backgroundColor = "black"; // Quay lại màu ban đầu của nút
        menuToggle.style.color = "black"; // Quay lại màu ban đầu của menu toggle
    }
});
