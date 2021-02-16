

$( document ).ready(function() {
    
    $(".menu-icon").click(function(){
        $(".header_mobile_wrapper").toggleClass('active');
    });

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop(); 
        var headerHeight = $(".header_mobile_wrapper").outerHeight();
        if (currentScroll >= headerHeight) {    
            $(".header_mobile_wrapper").css({                      
                position: 'fixed'
            });
        }    
        else {
            $(".header_mobile_wrapper").css({                      
                position: 'absolute'
            });
        }
    });
    
    $(".level__switch").click(function(){
        $(".level__switch").removeClass('level__switch--activ');
        $(this).addClass("level__switch--activ");
        var curIndex = $(this).attr('data-index');
        if($(window).width() > 1024){
            if(curIndex > 1){
                var leftSpace = ((curIndex-1) * -107)+ '%';
            }
            else {
                var leftSpace = 0 + '%';
            }
        }
        else {
            if(curIndex > 1){
                var leftSpace = ((curIndex-1) * -100)+ '%';
            }
            else {
                var leftSpace = 0 + '%';
            }
        }
       
        $(".how-it-works__slider_content").css("left", leftSpace);
    });

});