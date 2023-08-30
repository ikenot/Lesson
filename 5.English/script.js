$(function() {
  $('.main__image').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
  });

  $( ".header__hamberger--cross" ).click(function() {
    $( ".header__hamberger--list" ).fadeToggle( function() {
      $('.header__hamberger--line:nth-child(1)').toggleClass('cross__animation--one');
      $('.header__hamberger--line:nth-child(2)').toggleClass('cross__animation--two');
      $('.header__hamberger--line:nth-child(3)').toggleClass('cross__animation--three');      
    });
  });


  $( ".header__hamberger--child, .header__hamberger--link" ).click(function() {
    $( ".header__hamberger--list" ).fadeOut( function() {
      $('.header__hamberger--line:nth-child(1)').removeClass('cross__animation--one');
      $('.header__hamberger--line:nth-child(2)').removeClass('cross__animation--two');
      $('.header__hamberger--line:nth-child(3)').removeClass('cross__animation--three');      
      });
      $('.header__logo--image').attr('src', 'img/logo-r.svg');
  
    });  
  // fadeIn
  $(window).scroll(function () {
      var targetElement = $('.reason__content--left').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $('.reason__content--left').addClass('scrollin__left');
      }
    });
    $(window).scroll(function () {
      var targetElement = $('.reason__content--right').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $('.reason__content--right').addClass('scrollin__right');
      }
    });
    $(window).scroll(function () {

      $('.voice__item--left, .voice__item--right').each(function() {
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 150) {
          $(this).addClass('zoomin');
        }
      });
    });
  });   

