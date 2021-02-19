module.exports = (config) => {
    // specify folders to be copied to the output folder
    config.addPassthroughCopy('./src/js/');
    config.addPassthroughCopy('./src/css/');

    return {
        pathPrefix: '/tgif/',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',    // default: '.'
            output: 'public' // default: '_site'
        }
    }
};
