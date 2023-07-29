(function ($) {

  "use strict";





  window.addEventListener("load", (event) => {
    //isotope
    $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry'
    });



    // Initialize Isotope
    var $container = $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry'
    });


    // init jarallax parallax
    var initJarallax = function () {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-keep-img"), {
        keepImg: true,
      });
    }


    var initScrollNav = function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('.navbar').addClass("bg-light");
        } else {
          $('.navbar').removeClass("bg-light");
        }
      });
    }

    // init Chocolat light box
    var initChocolat = function () {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      })
    }

    //search pop

    var searchPopup = function () {
      // open search box
      $('#header-nav').on('click', '.search-button', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $(".search-popup-trigger").on("click", function (b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
          setTimeout(function () {
            $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
        $(".search-popup").on("click", function (b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
            $(this).removeClass("is-visible"))
        }),
        $(document).keyup(function (b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
        })
    }


    $(document).ready(function () {

      //active button
      $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
      });


      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

      initScrollNav();
      searchPopup();
      initChocolat();
      initJarallax();


    });

  });







})(jQuery);
