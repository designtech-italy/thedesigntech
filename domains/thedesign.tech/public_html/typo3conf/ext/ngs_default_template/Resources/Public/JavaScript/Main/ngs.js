/**
 * NGS main
 */
var NgsMain = {
    init: function () {
        Sliders.init();
        Masks.init();
        Menu.init();
        Forms.init();
    }
};

$(function () {
    NgsMain.init();
});
