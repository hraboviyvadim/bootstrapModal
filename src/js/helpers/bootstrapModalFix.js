'use strict';
global.jQuery = require('jquery');
const $ = require('jquery');

const bootstrapModal = require('bootstrap/js/modal.js');

let bootstrapModalFix = function (element) {
    var modal = $.fn.modal.Constructor;

    modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10);
        var elementPad = parseInt(($(element).css('padding-right') || 0), 10);
        this.originalBodyPad = document.body.style.paddingRight || '';
        if (this.bodyIsOverflowing) {
            this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
            $(element).css('padding-right', elementPad + this.scrollbarWidth);
        }
    };
    modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad);
        $(element).css('padding-right', '');
    };
};

export default bootstrapModalFix;