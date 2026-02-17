// Load styles
kiss.loader.loadStyles([
    "/resources/lib/kissjs/kissjs",
    "/resources/lib/kissjs/webfonts/fontawesome-all.min",
    "/styles"
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
    await kiss.loader.loadScript("/build.min")

    await kiss.app.init({
        debug: false,
        name: "airprocess.com",
        mode: "memory",
        routerMode: "pathname",
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
