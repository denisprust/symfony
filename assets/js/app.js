/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.scss in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
var $ = require('jquery');
require('popper.js');
require('../../vendor/twbs/bootstrap/dist/js/bootstrap.min');
require('sweetalert2');

$(document).ready(function () {
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('[name=year],[name=model_year]').mask('0000');
    var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('.phone').mask(SPMaskBehavior, spOptions);
});

// CommonJS
const Swal = require('sweetalert2');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
