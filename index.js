// Load styles
kiss.loader.loadStyles([
    "/resources/lib/kissjs/kissjs",
    "/resources/lib/kissjs/webfonts/fontawesome-all.min",
    "/styles"
])

window.onload = async function () {
    await kiss.loader.loadScript("/build.min")
    await kiss.loader.loadScript("/utils/analytics")

    await kiss.app.init({
        debug: false,
        name: "airprocess.com",
        mode: "memory",
        routerMode: "pathname",
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
