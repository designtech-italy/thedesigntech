var Masks = {
  init: function () {
    this.initCursorFilter();
    this.initTabsContainer();
    this.initScrollToContent();
    this.initThemestageTitleTextCarousel();
    this.initCriteriaOpen();
    this.initCardTextOpen();
    this.initDownloadLinks();
  },

  initDownloadLinks: function () {
    $.each($('.f_download-links:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).on('click', function() {
          var links = JSON.parse($(this).data('links'));

          links.forEach(function(link) {
            var a = $('<a style="display:none;"></a>').attr({
              href: link,
              download: link.split('/').pop() // Use the last part of the URL as the filename
            });

            $('body').append(a);
            a[0].click();
            a.remove();
          });
        });
      }
    });
  },

  initCardTextOpen: function () {
    $.each($('.f_card-text-list:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).find('.f_card-text-header-box').each(function () {
          $(this).on('click', function () {
            $(this).closest('.f_card-text-item').siblings().removeClass('is_active');

            $(this).closest('.f_card-text-item').toggleClass('is_active');
          });
        });
      }
    });
  },

  initCriteriaOpen: function () {
    $.each($('.f_criteria-list:not(.is-initiated)'), function () {
      if (!$(this).hasClass('is-initiated')) {
        $(this).addClass('is-initiated');

        $(this).find('.f_criteria-header-box').each(function () {
          $(this).on('click', function () {
            $(this).closest('.f_criteria-item').siblings().removeClass('is_active');

            $(this).closest('.f_criteria-item').toggleClass('is_active');
          });
        });
      }
    });
  },

  initThemestageTitleTextCarousel: function () {
    $.each($('.f_themestage-word-carousel:not(.is-initiated)'), function () {
      $(this).addClass('is-initiated');

      var elements              = $(this).find('em'),
          elements_length       = elements.length,
          visible_element_index = 0,
          visible_element       = $(elements[visible_element_index]),
          isStopped             = false;

      visible_element.addClass("is_active");

      var showhide = function() {
        visible_element.removeClass("is_active");
        visible_element_index += 1;
        visible_element_index = visible_element_index == elements_length ? 0 : visible_element_index;
        visible_element = $(elements[visible_element_index]).addClass("is_active");
      };

      if($('showhide_element')){
        var interval = setInterval(showhide, 1500);
      }

    });
  },

  initCursorFilter: function () {
    var cursor_main = document.getElementById("cursor-main");
    var cursor_inner = document.getElementById("cursor-inner");
    var cursor_inner_border = document.getElementById("cursor-inner-border");

    if(!cursor_main) {
      return;
    }

    document.querySelector(".f_themestage-item").addEventListener("mousemove", function (e) {
        cursor_main.style.left = e.clientX + "px",
        cursor_main.style.top = e.clientY + "px";

        cursor_inner.style.left = e.clientX + "px",
        cursor_inner.style.top = e.clientY + "px";

        cursor_inner_border.style.left = e.clientX + "px",
        cursor_inner_border.style.top = e.clientY + "px";
    });

    const $hoverables = document.querySelectorAll('.is_hoverable');

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', function (e) {
        cursor_main.classList.add("is_hovered");
        cursor_inner.classList.add("is_hovered");
        cursor_inner_border.classList.add("is_hovered");
      });
      $hoverables[i].addEventListener('mouseleave', function (e) {
        cursor_main.classList.remove("is_hovered");
        cursor_inner.classList.remove("is_hovered");
        cursor_inner_border.classList.remove("is_hovered");
      });
    }
  },

  initTabsContainer: function () {
    const tabs = document.querySelectorAll('[data-tab-target]');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        const parentContainer = target.closest('.f_text-table-element');
        const tabContents = parentContainer.querySelectorAll('[data-tab-content]')
        const tabs = parentContainer.querySelectorAll('[data-tab-target]');

        tabContents.forEach(tabContent => {
          tabContent.classList.remove('is_active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('is_active')
        })
        tab.classList.add('is_active')
        target.classList.add('is_active')
      })
    })
  },

  initScrollToContent: function () {
    $('.f_qr-title').on('click', function () {
      Helper._scrollToElem($('#f_qr-list').offset().top);
    });
  },
};
