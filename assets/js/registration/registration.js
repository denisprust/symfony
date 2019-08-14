var $ = require('jquery');
require('jquery');

Registration = {
    init: function() {
        $(document).on('change', '#form-registration input', function () {

        })
    },
    validationPasswordConfirmation: function() {
        let password = $('#form-registration #password');
        let password_repeat = $('#form-registration #password_repear');

        if(password.val() != password_repeat.val()) {
            $('#form-registration #btn-submit').addClass('disabled').attr('disabled', true);
        } else {
            $('#form-registration #btn-submit').addClass('disabled').attr('disabled', true);
        }
    },
    setTextValidation: function(message, status) {
        $('#form-registration #message-validation').html(message).removeClass('text-*')
    }
};

Registration.init();