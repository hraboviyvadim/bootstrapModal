My way for fixing bug with Bootstrap Modals and fullwidth fixed elements
========================================================================

There is a bug with Bootstrap Modals and fullwidth fixed elements

Requires
========
`jQuery` - bootstrap requires jQuery lib;


How to use
=============

1) **if you are using ES6 modules:**
    just copy file `src/js/helpers/bootstrapModalFix.js` into your project and import it like this:
    
    `import bootstrapModalFix from './helpers/bootstrapModalFix';`
    
2) **if you are not using ES6 modules:**
    a) export jQuery object to global context: `window.jQuery = jQuery;`
    
    b) copy function bootstrapModal() to your project after(!) jQuery and Bootstrap Modal include and call it with jquery selector you need.