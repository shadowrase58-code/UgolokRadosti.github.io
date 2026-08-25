const header = document.getElementById('header');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

// ===== БУРГЕР-МЕНЮ =====
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    const isOpen = nav.classList.contains('active');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Закрытие при клике на ссылку
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header') && nav.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// ===== ПЛАВАЮЩИЙ ХЕДЕР =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== ПЛАВНАЯ ПРОКРУТКА =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== ОБРАБОТЧИКИ КНОПОК =====
document.querySelectorAll('.btn--dark, .btn--header').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    });
});

const viewAllBtn = document.querySelector('.btn--view-all');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        alert('Здесь будет каталог всех товаров');
    });
}

// ===== ПАУЗА КАРУСЕЛИ =====
const carousel = document.querySelector('.carousel__track');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
}