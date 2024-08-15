/**
 * Forms
 */
var Forms = {

    init: function () {
        this.initJoinUsDubai();
        this.initDropzone();
        this.initFormPopupOpen();
    },

    initJoinUsDubai: function () {
        $('.dubai .f_join-us').on('click', function () {
            console.log(123);
            $('.f_join-us-dubai-container').show();
        });
    },

    initDropzone: function () {
        let $fileDropzone = $('.js-file-dropzone');
        $fileDropzone.on('dragover', function () {
            $(this).addClass('hover');
        });

        $fileDropzone.on('dragleave', function () {
            $(this).removeClass('hover');
        });

        $fileDropzone.find('input').on('change', function (e) {
            var file = this.files[0];

            $fileDropzone.removeClass('hover');

            if (this.accept && $.inArray(file.type, this.accept.split(/, ?/)) == -1) {
                return alert('File type not allowed.');
            }

            $fileDropzone.addClass('dropped');
            $fileDropzone.find('img').remove();

            if ((/^image\/(gif|png|jpeg)$/i).test(file.type)) {
                var reader = new FileReader(file);

                reader.readAsDataURL(file);

                reader.onload = function (e) {
                    var data = e.target.result,
                        $img = $('<img />').attr('src', data).fadeIn();
                    $fileDropzone.find('div').html($img);
                };
            } else {
                //<span class="x-icon js--clean-input-file"></span>
                var $successEl = $('<span class="is-success"></span><span class="success-text">' + $fileDropzone.attr('data-success-text') + '</span>');
                $fileDropzone.find('div').html($successEl);
            }
        });
    },

    initFormPopupOpen: function () {
        if (window.location.hash) {
            let $formEl = $(window.location.hash);
            if ($formEl.length > 0 && $formEl.is('form')) {
                let $parentEl = $formEl.parents('.f_modal-form-container');
                if ($parentEl.length > 0) {
                    $parentEl.addClass('is_active');
                }
            } else {
                if (window.location.hash.indexOf('#joinusDesign') === 0) {
                    $('.f_join-us-design-container').addClass('is_active');
                } else if (window.location.hash.indexOf('#joinUsDubai') === 0) {
                    $('.f_join-us-dubai-container').addClass('is_active');
                } else if (window.location.hash.indexOf('#contact') === 0) {
                    $('.f_join-us-container').addClass('is_active');
                }
            }
        }
    }

};
