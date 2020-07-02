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

// var mySwiper = new Swiper ('#indexfive', {
//     allowTouchMove: false,
//     loop: true, // 循环模式选项
//     autoplay: false,
    
//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// })
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