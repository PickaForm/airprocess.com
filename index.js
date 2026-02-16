// Load styles
kiss.loader.loadStyles([
    "https://kissjs.net/resources/lib/kissjs/kissjs",
    "styles"
])

window.onload = async function () {
    await kiss.loader.loadScript("./build.min")

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
