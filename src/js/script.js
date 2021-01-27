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
          slidesFiels = document.querySelector('.reviews__carousel-inner');
})