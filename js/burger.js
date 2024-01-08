window.onload = function (){
 
    const menu_btn = document.querySelector('.burger');
    const mobil_menu = document.querySelector('.mobil_nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobil_menu.classList.toggle('is-active');
    });
}
