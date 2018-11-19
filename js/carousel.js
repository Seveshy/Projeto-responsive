function Carousel(config){
    this.container = (typeof config.container === 'string') ?
    document.querySelector(config.container): config.container

    this.container = (typeof config.itens === 'string') ?
    document.container.querySelectorAll(config.itens): config.itens

    this.container = (typeof config.btnPrev === 'string') ?
    document.container.querySelector(config.btnPrev): config.btnPrev
    
    this.container = (typeof config.btnNext === 'string') ?
    document.container.querySelector(config.btnNext): config.btnNext

    var _this = this;
    var _currentSlide = 0

    init()

    function init(){
        var _show = _this.container.querySelectorAll('.show')

      Array.prototype.forEach.call(_show, function(sh){
        sh.classList.remove('show')
      })
      _this.itens[0].classList.add('show')
      _this.btnNext.removeAttribute('style')
      _this.btnPrev.removeAttribute('style')

      addListener()
    }

    function addListener(){
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }
    function showPrevSlide(){
        _currentSlide--;
        showSlide()
    }
    function showSlide(){
        var qtd = _this.itens.length;
        var slide = _currentSlide % qtd;
        console.log(slide)
    }

}