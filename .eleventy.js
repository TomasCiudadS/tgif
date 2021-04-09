const CleanCSS = require("clean-css");

module.exports = (config) => {
    config.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy('src/img');

    return {
        pathPrefix: '/tgif/',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',    // default: '.'
            output: 'public' // default: '_site'
        },
        passthroughFileCopy: true
    }
};
