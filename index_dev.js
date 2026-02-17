// Load application scripts
kiss.loader.loadScripts([
    "./utils/init",
    "./utils/routing",
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
    "./views/blog",
    "./views/blogPost",
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
    "./blocks/blogPost",
    "./blocks/blogPostEntry",
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

function trackCurrentRouteInAnalytics() {
    if (typeof window.gtag !== "function") return

    const route = kiss.router.getRoute() || {}
    const routePath = kiss.global.routeToPathname(route) || "/"
    const pagePath = `${routePath}${window.location.search || ""}`
    const origin = (window.location.origin && window.location.origin !== "null") ? window.location.origin : "https://airprocess.com"
    const pageLocation = `${origin}${pagePath}`

    window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: pageLocation,
        page_path: pagePath
    })
}

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
        routerActions: [trackCurrentRouteInAnalytics],
        startRoute: {
            ui: "start",
            content: "landing"
        }
    })
};
