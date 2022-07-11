$("document").ready(function(){
    AOS.init();

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

    $(".skill-box .left-side ul li").click(function(){
        let i = $(this).index();
        $(".skill-box .left-side ul li").removeClass("active").eq(i).addClass("active")
        $(".right-side > div").removeClass("active").eq(i).addClass("active")
        $(".border .line").css("margin-top", i*60+"px")
    })

  
})