var Sliders = {
  init: function () {
    this.initSliders();
    this.initTeamSlider();
    this.initUspsSlider();
    this.initTableSlider();
    this.initVideoSlider();
    this.initZoomListSlider();
    this.initJuriListSlider();
    this.initSpeakersSlider();
    this.initImageTextSlider();
    this.initImageTextLabsSlider();
    this.initCarouselImageSlider();
    this.initLandingPageBannerSlider();
  },

  initUspsSlider: function () {
    var usps = $('.f_usps-list');

    for (var i = 0; i < usps.length; i++) {
      var uspsItem = usps[i];

      var $sliderWrapper = $(uspsItem).closest('.f_slider-wrapper');

      var slider = tns({
        container: uspsItem,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          950: {
            items: 3,
          },
          580: {
            items: 2,
          }
        },
      });
    }
  },

  initLandingPageBannerSlider: function () {
    var video = $('.f_landing-page-banner-slider-inner');

    for (var i = 0; i < video.length; i++) {

      var item = video[i];
      // var $sliderWrapper = $(item).closest('.f_slider-wrapper');
      var $sliderWrapper = $(item).closest(`.f_landing-page-banner-slider`);
      var slideTimeout = $(item).attr(`data-slideTimeout`);

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0]: false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 1,
        loop: true,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        autoplay: true,
        autoplayTimeout: slideTimeout,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto'
      });

      item.classList.add('is_init');
    }
  },

  initVideoSlider: function () {
    var video = $('.f_video-list');

    for (var i = 0; i < video.length; i++) {

      var item = video[i];
      // var $sliderWrapper = $(item).closest('.f_slider-wrapper');
      var $sliderWrapper = $(item).closest(`.f_video-list-inner-${i}`);

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0]: false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 3,
        nav: false,
        loop: false,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          950: {
            items: 4,
          }
        },
      });
    }
  },

  initImageTextSlider: function () {
    var imageLists = $('.f_image-list');

    for (var i = 0; i < imageLists.length; i++) {
      var item = imageLists[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var prevButton = false;
      var nextButton = false;

      if ( $sliderWrapper.length) {
        prevButton = $sliderWrapper.find('.f_cursor-left').length ? $sliderWrapper.find('.f_cursor-left')[0] : false;
        nextButton = $sliderWrapper.find('.f_cursor-right').length ? $sliderWrapper.find('.f_cursor-right')[0] : false;
      }

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: true,
        controls: true,
        mouseDrag: true,
        swipeAngle: false,
        prevButton: prevButton,
        nextButton: nextButton,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initImageTextLabsSlider: function () {
    var imageListsLabs = $('.f_image-text-slider-list');

    for (var i = 0; i < imageListsLabs.length; i++) {
      var item = imageListsLabs[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initZoomListSlider: function () {
    var zoomList = $('.f_zoom-list');

    for (var i = 0; i < zoomList.length; i++) {
      var item = zoomList[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initJuriListSlider: function () {
    var zoomList = $('.f_juri-list');

    for (var i = 0; i < zoomList.length; i++) {
      var item = zoomList[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        responsive: {
          1200: {
            items: 5,
          },
          950: {
            items: 4,
          },
          768: {
            items: 3,
          },
        },
      });
    }
  },

  initTeamSlider: function () {
    var imageListsLabs = $('.f_team-list');

    for (var i = 0; i < imageListsLabs.length; i++) {
      var item = imageListsLabs[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        center : true,
        controls: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initCarouselImageSlider: function () {
    var carouselImages = $('.f_image-list-carousel');

    for (var i = 0; i < carouselImages.length; i++) {
      var item = carouselImages[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: false,
        loop: true,
        controls: false,
        autoplay: true,
        mouseDrag: true,
        swipeAngle: false,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initSpeakersSlider: function () {
    var speakers = $('.f_speakers-list');

    for (var i = 0; i < speakers.length; i++) {
      var item = speakers[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initTableSlider: function () {
    var tables = $('.f_table-list');

    for (var i = 0; i < tables.length; i++) {
      var item = tables[i];
      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
      });
    }
  },

  initSliders: function () {
    var sliders = $('.f_slider-list');

    for (var i = 0; i < sliders.length; i++) {
      var item = sliders[i];

      var sliderNav = item.parentNode.querySelector('.f_slider-nav');

      var $sliderWrapper = $(item).closest('.f_slider-wrapper');

      var slider = tns({
        container: item,
        items: 1,
        nav: true,
        loop: false,
        controls: false,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom',
        preventScrollOnTouch: 'auto',
        navContainer: sliderNav,
      });

      slider.events.on('indexChanged', function (data) {
        var active_item_dom = $sliderWrapper.find('.f_slider-item')[data.displayIndex-1];
        var active_item = $(active_item_dom);

        if(!(active_item.hasClass("is_active"))) {
          $('.f_slider-list.is_active').removeClass("is_active");
          active_item.addClass("is_active");
        }
      });
    }
  }
};
