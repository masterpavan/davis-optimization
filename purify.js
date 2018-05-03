const purify = require("purify-css");

var content = ['public/assets/*.js', 'public/index.html'];
var css = ['public/assets/*.css'];

var options = {
    // Will write purified CSS to this file.
    output: 'public/assets/purified.css',
    // Will minify CSS code in addition to purify.
    minify: true,

    // Logs out removed selectors.
    rejected: true
};

purify(content, css, options);