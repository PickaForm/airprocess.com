// Load application scripts
kiss.loader.loadScripts([
    "/utils/init",
    "/utils/routing",
    "/utils/localization",
    "/utils/animations",

    // Views
    "/views/start",
    "/views/navbar",
    "/views/footer",
    "/views/landing",
    "/views/product",
    "/views/cases",
    "/views/pricing",
    "/views/blog",
    "/views/blogPost",
    "/views/contact",
    "/views/artworks",
    "/views/whoCanUse",

    // Templates
    "/blocks/navbar",
    "/blocks/title",
    "/blocks/screenshot",
    "/blocks/buttonCTA",
    "/blocks/footer",
    "/blocks/pricing",
    "/blocks/blogPost",
    "/blocks/blogPostEntry",
    "/blocks/feature",
    "/blocks/featureDetails",
    "/blocks/pager",
    "/blocks/whoCanUse"
])

// Load styles
kiss.loader.loadStyles([
    "/resources/lib/kissjs/kissjs",
    "/resources/lib/kissjs/webfonts/fontawesome-all.min",
    "/styles"
])

window.onload = async function () {
    await kiss.app.init({
        debug: true,
        name: "airprocess.com",
        mode: "memory",
        routerMode: "pathname",
        pathnameToRoute: kiss.global.pathnameToRoute,
        routeToPathname: kiss.global.routeToPathname,
        startRoute: {
            ui: "start",
            content: "landing"
        }
    })
};
