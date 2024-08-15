var Helper = {
    _scrollToElem: function (scrollPos) {
        $('html, body').animate({
            scrollTop: scrollPos
        }, 200);
    },
}