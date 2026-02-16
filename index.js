// Load styles
kiss.loader.loadStyles([
    "/resources/lib/kissjs/kissjs",
    "/resources/lib/kissjs/webfonts/fontawesome-all.min",
    "/styles"
])

window.onload = async function () {
    await kiss.loader.loadScript("/build.min")

    await kiss.app.init({
        debug: false,
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
