/**
 * Menu
 */
var Menu = {

    init: function () {
        this.modalFormPopup();
        // this.registerMenuLinkEvents();
    },

    // registerMenuLinkEvents: function () {
    //     let self = this;
    //     let headerMenu = $('.f_header-main');
    //     let $topHeaderEl = headerMenu.find('.f_header-box');
    //
    //     $topHeaderEl.find('.f_noLink').on('click', function () {
    //         let targetContentUid = $(this).attr('data-target-uid');
    //         let $targetContentEl = $('#c' + targetContentUid);
    //         if ($targetContentEl.length) {
    //             let scrollPos = $targetContentEl.offset().top - $topHeaderEl.outerHeight();
    //             Helper._scrollToElem(scrollPos);
    //             return false;
    //         }
    //     });
    // },

    modalFormPopup: function () {
        $('.f_modal-form-open-btn').on('click', function () {
            let formItem = $(".f_" + $(this).attr("data-modal-form-btn") + "-container");

            formItem.toggleClass("is_active")
        });
        $('.f_modal-form-close').on('click', function () {
            $(this).parents(".f_modal-form-container").toggleClass("is_active");
        });
    },
};
