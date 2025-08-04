// Load application scripts
kiss.loader.loadScripts([
    "utils/init",
    "utils/localization",
    "utils/animations",

    // Views
    "views/start",
    "views/navbar",
    "views/footer",
    "views/landing",
    "views/product",
    "views/cases",
    "views/pricing",
    "views/blog",
    "views/blogPost",
    "views/contact",
    "views/artworks",
    "views/whoCanUse",

    // Templates
    "blocks/navbar",
    "blocks/title",
    "blocks/screenshot",
    "blocks/buttonCTA",
    "blocks/footer",
    "blocks/pricing",
    "blocks/blogPost",
    "blocks/blogPostEntry",
    "blocks/feature",
    "blocks/featureDetails",
    "blocks/pager",
    "blocks/whoCanUse"
])

// Load styles
kiss.loader.loadStyles([
    // "https://kissjs.net/resources/lib/kissjs/kissjs",
    "./resources/lib/kissjs/kissjs",
    "./resources/lib/kissjs/webfonts/fontawesome-all.min",
    "styles"
])

window.onload = async function () {
    await kiss.app.init({
        debug: true,
        name: "pickaform.com",
        mode: "memory",
        startRoute: {
            ui: "start",
            content: "landing"
        }
    })
};