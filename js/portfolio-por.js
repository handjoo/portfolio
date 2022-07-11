$("document").ready(function(){
    if(localStorage.getItem('value')){
        var lastData = localStorage.getItem('value')
    }

    if(!lastData){
        $(".header .right i").eq(1).addClass("fa-regular")
    }else{
        $(".header .right i").eq(1).toggleClass("fa-solid color")
        
    }
       
    $(".header .right i").eq(1).click(function(){
        $(this).toggleClass("fa-solid color")
        localStorage.setItem('value','fa-solid color');
        if(!$(this).hasClass("fa-solid color")){
            localStorage.removeItem('value');
        }
    })


    $('.mockup').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.box '
    });
    $('.box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mockup',
    });

    
})