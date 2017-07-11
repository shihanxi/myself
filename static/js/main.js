/**
 * Created by Ascend on 2016/6/11.
 */
$(function () {
    /*导航*/
    $(window).scroll(function () {
        var tp = $(window).scrollTop();
        /*导航添加背景*/
        var tp60 = tp + 60;
        if ($('#home').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(0).addClass('nav_li_bg');
        }
        if ($('#services').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(1).addClass('nav_li_bg');
        }
        if ($('#web').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(2).addClass('nav_li_bg');
        }
        if ($('#app').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(3).addClass('nav_li_bg');
        }

        if ($('#about').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(4).addClass('nav_li_bg')
        }
        if ($('#contact').offset().top <= tp60) {
            $('.nav_li').removeClass('nav_li_bg');
            $('.nav_li').eq(5).addClass('nav_li_bg')
        }

        /*992以上滚动时导航变化*/
        if ($(window).width() >= 992) {
            if (tp >= 60) {
                $('#nav').addClass('navNewStyle');
                $('#nav').css({'padding-top': '0', 'background-color': '#ffffff'});
                $('.nav_li a').css({
                    "color": '#444'
                });
                $('.resumeBtn').css({'color':'#1cbbb4'});
                $('.navBtn_bar img').attr('src','static/images/moreBtn.png')
            } else {
                $('#nav').removeClass('navNewStyle');
                $('#nav').css({'padding-top': '20px', 'background-color': 'transparent'});

                $('.nav_li a').css({
                    "color": '#ffffff'
                });
                $('.nav_li').removeClass('nav_li_bg');
                $('.resumeBtn').css('color','#ffffff')
            }
        }
        if ($(window).width() < 992) {
            if (tp >= 60) {
                $('#nav').addClass('navNewStyle');
                $('#nav').css({'padding-top': '0', 'background-color': '#ffffff'});

                $('.resumeBtn').css({'color':'#1cbbb4'});
                $('.navBtn_bar img').attr('src','static/images/moreBtn.png')
            } else {
                $('#nav').removeClass('navNewStyle');
                $('#nav').css({'padding-top': '20px', 'background-color': 'transparent'});
                $('.resumeBtn').css('color','#ffffff');
                $('.navBtn_bar img').attr('src','static/images/navBtn.png')
            }
        }

    });


    /*简历*/
    $('.resumeBtn').click(function(){
        $('#resume').css({'top':'0'});
        $('.experienceProgressTime').animate({'width':'66%'},1500);

     $('.closeIcon').on('click',function(){
     $('#resume').css({'top':'-1200px'})
     });
     var H=$(window).height();
     $('#resume').outerHeight(H);

     setTimeout(function(){
     $('.rt').css({'transform':'rotate(90deg)'});
     },600);
     setTimeout(function(){
     $('.rb').css({'transform':'rotate(90deg)'});
     },900);
     setTimeout(function(){
     $('.lb').css({'transform':'rotate(90deg)'});
     },1200);
     setTimeout(function(){
     $('.lt').css({'transform':'rotate(54deg)'});
     },1500);


     setTimeout(function(){
     $('.di').eq(2).find('.lb').css({'transform':'rotate(90deg)'});
     },1200);

     setTimeout(function(){
     $('.di').eq(2).find('.lt').css({'transform':'rotate(0deg)'});
     },1500);

     setTimeout(function(){
     $('.di').eq(3).find('.lb').css({'transform':'rotate(90deg)'});
     },1200);

     setTimeout(function(){
     $('.di').eq(3).find('.lt').css({'transform':'rotate(0deg)'});
     },1500);


     setTimeout(function(){
     $('.di').eq(4).find('.lb').css({'transform':'rotate(90deg)'});
     },1200);

     setTimeout(function(){
     $('.di').eq(4).find('.lt').css({'transform':'rotate(0deg)'});
     },1500);

     setTimeout(function(){
     $('.di').eq(5).find('.lb').css({'transform':'rotate(90deg)'});
     },1200);

     setTimeout(function(){
     $('.di').eq(5).find('.lt').css({'transform':'rotate(0deg)'});
     },1500);

  });




    /*992 以下导航设置*/
    if ($(window).width() < 992) {
        $('.nav_li').click(function () {
            $('.change_navBar').animate({left: '-200px'}, 300);

        });

        $('.navBtn').click(function () {
            $('.change_navBar').animate({left: '0'}, 300);

        });

        $('.navBar').css({'padding-top': '20px'})

    }


    /*$('.nav_li').each(function () {
     $(this).click(function () {
     $('.nav_li a').removeClass('navBar_active');
     $(this).find('a').css('color','#1cbbb4');

     })
     });*/


    /*home高度设置*/
    if ($(window).width() >= 992) {
        var Height = $(window).height();
        $('#home').outerHeight(Height);
    }
    if ($(window).width() < 992 || $(window).width() >= 768) {
        $('#home').outerHeight(760);
    }
    if ($(window).width() < 768) {
        $('#home').outerHeight(440);
    }

    /*contact*/
    $('.contactWay').each(function () {
        $(this).click(function () {
            $(this).find('.code').css({'opacity': '1'})
        })
    })


});