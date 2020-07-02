import '../css/index.min.css'; // 该页样式
import '../css/public.min.css'; // 公共样式
import Swiper from './swiper.min.js'; // 轮播图js
import '../css/swiper.min.css'; // 轮播图css

var mySwiper = new Swiper ('#indexone', {
    loop: true, // 循环模式选项
    autoplay:  {
        disableOnInteraction: false,
      },
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: 'my-bullet-active',
    },
    
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
var gallerySwiper = new Swiper('#gallery',{
    loop: true, // 循环模式选项
    spaceBetween: 6,
    allowTouchMove: false,
    thumbs: {
        swiper: {
            el: '#thumbs',
            spaceBetween: 6,
            slidesPerView: 6,
            watchSlidesVisibility: true, /* 避免出现bug */
            allowTouchMove: false,
        },
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

$(function(){
    var header = $("header"); //得到导航对象
    if(document.documentElement.scrollTop > 0){
        $(header).css('background','#ffffff');
    } else {
        $(header).css('background','none');
    }
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();  //滚动高度
        console.log(scroH)

        if(scroH > 0){
            header.css('background','#ffffff');
        } else {
            header.css('background','none');
        }
    })
})

$('.index .nrthree a').hover(function(){
    var num = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).siblings().find('span').removeClass();
    $(this).find('span').addClass('box' + (++num) + 'a');
})
$('.index .nrfour .lunbobutton .botton a').click(function(){
    var num = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().siblings('.lunbo').children('div').removeClass('active');
    $(this).parent().parent().siblings('.lunbo').children('div:nth-child(' + (++num) + ')').addClass('active');// 获取标签
    // 点击时重新加载图片高度，top，bottom
    var box = document.getElementById('box');
    var pic = $('.index .nrfour .active #pic').eq(0)[0];
    var top = $('.index .nrfour .active #top').eq(0)[0];
    var bottom = $('.index .nrfour .active #bottom').eq(0)[0];
    var height = $('.index .nrfour .active #pic').height();
    var intervalId, num = 0;
    top.onmouseover = function(){
        clearInterval(intervalId);
        intervalId = setInterval(function(){
            if(num < 0){
                num += 10;
                pic.style.top = num + "px";
            }
        },20);
    };
    top.onmouseout = function() {
        clearInterval(intervalId);
    }
    bottom.onmouseover = function(){
        clearInterval(intervalId);
        intervalId = setInterval(function(){
            if(num > -height+831){
                num -= 10;
                pic.style.top = num + "px";
            }
        },20);
    };
    bottom.onmouseout = function() {
        clearInterval(intervalId);
    };
})
window.onload = function() { // 第一次加载第一个图片
    var pic = $('.index .nrfour .active #pic').eq(0)[0];
    var top = $('.index .nrfour .active #top').eq(0)[0];
    var bottom = $('.index .nrfour .active #bottom').eq(0)[0];
    var height = $('.index .nrfour .active #pic').height();
    // alert(height)
    var intervalId, num = 0;
    // 鼠标进入上半部分
    top.onmouseover = function(){
        clearInterval(intervalId);
        // 设置定时器
        intervalId = setInterval(function(){
            if(num < 0){
                num += 10;
                pic.style.top = num + "px";
            }
        },20);
    };
     // 鼠标移出上半部分
    top.onmouseout = function() {
        clearInterval(intervalId);
    }
    // 鼠标进入下半部分
    bottom.onmouseover = function(){
        clearInterval(intervalId);
        // 设置定时器
        intervalId = setInterval(function(){
            if(num > -height+831){
                num -= 10;
                pic.style.top = num + "px";
            }
        },20);
    };
    // 鼠标移出下半部分
    bottom.onmouseout = function() {
        clearInterval(intervalId);
    };

    

    var thumbs = $('.index .nrfive .lunbo #thumbs')
    if ($(thumbs).children('div').children('div').hasClass('swiper-slide-thumb-active')) {
        // var num = $(this).index();
        // alert(num);
        // $(thumbs).find('.swiper-slide-thumb-active>a>img').attr('src','img/' + (num+2) + 'a.png');
    }
    $(thumbs).children('div').children('div').click(function(){
        if ($(thumbs).children('div').children('div').hasClass('swiper-slide-thumb-active')) {
            var num = $(this).index();
            // alert(num);
            $(this).siblings().children('a').children('span').children('span').removeClass();
            $(this).children('a').children('span').children('span').addClass('button' + ++num + 'a');
        }
    })
    $(gallery).find('#prev').click(function(){
        var active = $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active');
        var num = $(active).index();
        $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active').siblings().children('a').children('span').children('span').removeClass();
        $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active').children('a').children('span').children('span').addClass('button' + ++num + 'a');
    })
    $(gallery).find('#next').click(function(){
        var active = $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active');
        var num = $(active).index();
        $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active').siblings().children('a').children('span').children('span').removeClass();
        $(this).parent().parent().children('.thumbs').find('.swiper-slide-thumb-active').children('a').children('span').children('span').addClass('button' + ++num + 'a');
    })
}