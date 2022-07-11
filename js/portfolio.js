






$("document").ready(function(){


    const random = Math.floor(Math.random() * 5);
    
    setTimeout(function(){
        $(".loading")    .fadeOut()
        AOS.init();
    }, random+"000")
    
    


    let typed = new Typed("#search-txt",{
        stringsElement: "#search-wrap",
        typeSpeed: 100,
        loop: true,
        backSpeed: 100,
        cursorChar: ""
    })

    // const $heart =  $(".header .right a:nth-child(2)")

    // $heart.click(function(){

    // })

    if(localStorage.getItem('value')){
        var lastData = localStorage.getItem('value')
    }

    if(!lastData){
        $(".header .right i").eq(1).addClass("fa-regular")
    }else{
        $(".header .right i").eq(1).toggleClass("fa-solid color")
        
    }


        // localStorage.removeItem('value');
    $(".header .right i").eq(1).click(function(){
        $(this).toggleClass("fa-solid color")
        localStorage.setItem('value','fa-solid color');
        if(!$(this).hasClass("fa-solid color")){
            localStorage.removeItem('value');
        }
    })



    $(".main .left .photo, .header .right i:nth-child(3)").click(function(){
        $(".window").fadeIn()
        $(".window .window-wrap").fadeIn()
    })

    $(".window .window-wrap .me p").click(function(){
        $(".window").fadeOut()
        $(".window .window-wrap").fadeOut()
    })

    // const $story = $(".main .main-wrap .right .right-wrap .skill .story")
    // const $story_img_1 = $(".main .main-wrap .right .right-wrap .skill .story img:nth-child(1)")
    // const $story_img_2 = $(".main .main-wrap .right .right-wrap .skill .story img:nth-child(2)")

    // $story.click(function(){
    //     let i = $(this).index();
    //     $story.removeClass("on").eq(i).addClass("on");
    //     $story_img_1.eq(i).css("opacity", 0);
    //     $story_img_2.eq(i).css("opacity", 1);

    
    //     // $(".window").fadeIn()
        
    //     // $story.click(function(){
    //     //     $story.removeClass("on");
    //     // })
    // })


    $(".header .right i:nth-child(1)").click(function(){
        if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark","false");
            $(this).attr("class","fa-solid fa-moon");
        
        }else{
            $("html *").attr("data-dark","true");
            $(this).attr("class","fa-solid fa-sun");
        }


    })




    $(".nav .nav-wrap p").mouseover(function(){
        let i = $(this).index();
        $(".line").css("left", 220*i+"px")
    })




})