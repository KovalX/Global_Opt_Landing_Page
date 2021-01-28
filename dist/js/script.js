window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });


    // Carousel

    const prev = document.querySelector('.reviews__carousel-prev'),
          next = document.querySelector('.reviews__carousel-next'),
          slidesWrapper = document.querySelector('.reviews__carousel-wrapper'),
          slidesField = document.querySelector('.reviews__carousel-inner'),
          slides = document.querySelectorAll('.reviews__item');

    let slideIndex = 1;
    let offset = 0;

    slidesWrapper.style.overflow = 'hidden';

    next.addEventListener('click', () => {
        if (offset == 370 * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += 370;
        }

        slidesField.style.transform = `translateX(-${offset}px)`
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = 370 * (slides.length - 1);
        } else {
            offset -= 370;
        }

        slidesField.style.transform = `translateX(-${offset}px)`
    });
})