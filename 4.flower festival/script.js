$(function (){

//humbergerMenu 
  $( document ).ready(function() {
    $( ".header__hamberger--list" ).hide();
    $( ".p-hamburger" ).click(function() {
      $( ".header__hamberger--list" ).slideToggle( function() {
        $('.p-hamburger-line:nth-child(1)').toggleClass('cross__animation--one');
        $('.p-hamburger-line:nth-child(2)').toggleClass('cross__animation--two');
        $('.p-hamburger-line:nth-child(3)').toggleClass('cross__animation--three');      
      });
    });
    $( ".header__hamberger--child" ).click(function() {
      $( ".header__hamberger--list" ).slideToggle( function() {
        $('.p-hamburger-line:nth-child(1)').removeClass('cross__animation--one');
        $('.p-hamburger-line:nth-child(2)').removeClass('cross__animation--two');
        $('.p-hamburger-line:nth-child(3)').removeClass('cross__animation--three');      

      });
    });  
  });

  // fadeIn
  $(window).scroll(function () {
    $('.title__headline, .class__title--fadein, .information__en, .information__place, .information__jp, .gallery__list--leftchild, .gallery__list--rightchild').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  })   

  // hambergerFadein
  $(window).scroll(function () {
      var scrollH = $(window).scrollTop();
      var windowHeightH = 400;
      if (scrollH > windowHeightH) {
        $('.header__logo--anchor, .p-hamburger-line').addClass('scrollin__header');
      } else {
        $('.header__logo--anchor, .p-hamburger-line').removeClass('scrollin__header');
      }
  });   
  $('.header__hamberger--child').click(function () {
    $(this).removeClass('scrollin__header');
  })

  // navigationFadeIn
  $(window).scroll(function () {
    var scrollH = $(window).scrollTop();
    var windowHeightH = 600;
    var targetSectionOffset = $('#center__image--section').offset().top;
    if (targetSectionOffset > scrollH + 500 && scrollH > windowHeightH) {
      $('.navigation__container--parent').addClass('scrollin__navigation');
    } else {
      $('.navigation__container--parent').removeClass('scrollin__navigation');
    }
  });  

// contactMouseOver
  $('.contact__link--first, .contact__link--second').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
    $(this).find('.contact__link--arrow').animate({
      left: '10px',
    }, 200);
  });
  $('.contact__link--first, .contact__link--second').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
    }, 100);
    $(this).find('.contact__link--arrow').animate({
      left: '0',
    }, 200);
  });

  // smoothBack
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let target;
    if (href == '#') {
      target = $('html');
    } else {
      target = $(href);
    }
    const position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

// centerBackgroundfadeIn
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var targetSectionOffset = $('#center__image--section').offset().top;
    var windowHeight = $(window).height();

    if (scrollPos < targetSectionOffset && scrollPos > targetSectionOffset - windowHeight + 500) {
      $('.center__image').css('opacity', '1');
    } else {
      $('.center__image').css('opacity', '0');
    }
  });

// mainImage
  // $(window).scroll(function () {
  //   var scrollY = $(window).scrollTop();
  //   var bgSize = 100 + (scrollY / 5);
  //   var centerX = 50 + (scrollY / 10);
  //   var sideX = 50 - (scrollY / 10);
  //   if (bgSize < 210) {
  //     $('#main__image--center').css('background-size', bgSize + '%');
  //     $('#main__image--center').css('left', centerX + '%');
  //     $('#main__image--left, #main__image--right').css('width', sideX + '%');
  //   } 
  //   if (scrollY === 0) {
  //     $('#main__image--center').css({
  //       'background-size': '100%',
  //       'left': '50%',
  //       'width': '100%'       
  //     });
  //   }
  // });
  // mainImage
  // $(window).scroll(function () {
  //   var scrollY = $(window).scrollTop();
  //   var bgSize = (100 / 3) + (scrollY / 5);
  //   if (bgSize < 210) {
  //     $('.main__image--item').css('width', bgSize + '%');
  //   }
  // });

  $(function() {
    if (window.matchMedia("(max-width: 899px)").matches) {
      $(window).scroll(function () {
        var scrollY = $(window).scrollTop();
        var bgSize = 100 - (scrollY / 5);
        var centerX = 50 + (scrollY / 10);
        var sideX = 50 - (scrollY / 10);
        if (bgSize < 34) {
          $('.main__image--item').css('width', '34%');
        } else {
          $('.main__image--item').css('width', bgSize + '%');
        }
      });
    } else {
      $(window).scroll(function () {
        var scrollY = $(window).scrollTop();
        var bgSize = (100 / 3) + (scrollY / 5);
        if (bgSize < 210) {
          $('.main__image--item').css('width', bgSize + '%');
        }
      });
    };
  });

});