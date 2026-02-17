kiss.global.trackCurrentRouteInAnalytics = function () {
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
