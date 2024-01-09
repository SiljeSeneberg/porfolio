window.onload = function (){
 
    const menu_btn = document.querySelector('.burger');
    const mobil_menu = document.querySelector('.mobil_nav');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobil_menu.classList.toggle('is-active');
    });

    document.addEventListener('scroll', function(){
        const header = document.querySelector('header')

        if(window.scrollY>0){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled')
        }

    })
}
