(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    /*adicionar menu*/
    var $btnMenu = document.querySelector('.header__btnMenu');
    $btnMenu.removeAttribute('style')

    var menu = new Menu({
        container:'.header__nav',
        toggleBtn:'.header__btnMenu',
        widthEnable: 1024
    })

    //Carousel de imagens
   var carouselImgs = new Carousel({
       container: '.laptop-slider .slideshow',
       itens: 'figure',
       btnPrev: '.prev',
       btnNext: '.next'
   })

})()