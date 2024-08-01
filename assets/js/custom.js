/*
        hero section slider js
        ============================*/
// $('.hero-carousel').slick({
//   dots: false,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   loop: true,
//   autoplay: true,
//   infinite: true,
//   speed: 1500,

//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 2,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         variableWidth: false,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         variableWidth: false,
//       },
//     },
//   ],
// })

/*
        Hero Gallery Slider
        ============================*/
$('.hero-gallery-slider').slick({
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  draggable: true,
  arrows: true,
  prevArrow:
    '<button class="slick-arrow btn-prev"><i class="fa-solid fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-arrow btn-next"><i class="fa-solid fa-chevron-right"></i></button>',
  slidesToScroll: 1,
  variableWidth: true,
  loop: true,
  dots: false,
  speed: 1500,
  rtl: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      },
    },
  ],
})

/*
        blog section slider js
        ============================*/
$('.blog-carousel').slick({
  dots: false,
  loop: true,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})

$('.section-blog .carousel-left-control').on('click', function (e) {
  e.preventDefault()
  console.log('prev-btn')
  $('.section-blog .slick-prev').trigger('click')
})
$('.section-blog .carousel-right-control').on('click', function (e) {
  e.preventDefault()
  console.log('next-btn')
  $('.section-blog .slick-next').trigger('click')
})

/*
        testimonial section slider js
        ============================*/
$('.testimonial-carousel').slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})

$('#testimonial_one_prev_btn').on('click', function (e) {
  e.preventDefault()
  console.log('prev-btn')
  $('.section-testimonial .slick-prev').trigger('click')
})
$('#testimonial_one_next_btn').on('click', function (e) {
  e.preventDefault()
  console.log('next-btn')
  $('.section-testimonial .slick-next').trigger('click')
})

/*
        Counter Js
        ============================*/
$('.counter').counterUp({
  delay: 10,
  time: 1000,
})

/*
        Stikey Js
        ============================*/
$(document).ready(function () {
  const body = document.body
  const html = document.documentElement
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )

  if (100 < $(window).scrollTop()) {
    $('.header-menu-area.sticky-header').addClass('sticky_menu')
  }

  if (height > 1400) {
    const nav = $('.header-menu-area.sticky-header')
    let scrolled = false

    $(window).scroll(function () {
      if (100 < $(window).scrollTop() && !scrolled) {
        nav
          .addClass('sticky_menu animated fadeIn')
          .animate({ 'margin-top': '0px' }, 300) // 300 milliseconds for smooth scroll
        scrolled = true
      }

      if (100 > $(window).scrollTop() && scrolled) {
        nav.removeClass('sticky_menu animated fadeIn').css('margin-top', '0px')
        scrolled = false
      }
    })
  }
})

/*
       Magnific Popup
       ============================*/
$('.video-play').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
})
