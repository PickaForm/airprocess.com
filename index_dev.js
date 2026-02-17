// Load application scripts
kiss.loader.loadScripts([
    "./utils/init",
    "./utils/routing",
    "./utils/analytics",
    "./utils/localization",
    "./utils/animations",

    // Views
    "./views/start",
    "./views/navbar",
    "./views/footer",
    "./views/landing",
    "./views/product",
    "./views/cases",
    "./views/pricing",
    "./views/contact",
    "./views/artworks",
    "./views/whoCanUse",

    // Templates
    "./blocks/navbar",
    "./blocks/title",
    "./blocks/screenshot",
    "./blocks/buttonCTA",
    "./blocks/footer",
    "./blocks/pricing",
    "./blocks/feature",
    "./blocks/featureDetails",
    "./blocks/pager",
    "./blocks/whoCanUse"
])

// Load styles
kiss.loader.loadStyles([
    "./resources/lib/kissjs/kissjs",
    "./resources/lib/kissjs/webfonts/fontawesome-all.min",
    "./styles"
])

window.onload = async function () {
    // Dev local file:// mode: force relative image base path
    kiss.global.pathImg = "./resources/img"

    await kiss.app.init({
        debug: true,
        name: "airprocess.com",
        mode: "memory",
        routerMode: "hash",
        pathnameToRoute: kiss.global.pathnameToRoute,
        routeToPathname: kiss.global.routeToPathname,
        routerGuards: [syncLanguageWithRoute],
        routerActions: [kiss.global.trackCurrentRouteInAnalytics],
        startRoute: {
            ui: "start",
            content: "landing"
        }
    })
};
