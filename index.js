// Load styles
kiss.loader.loadStyles([
    "https://kissjs.net/resources/lib/kissjs/kissjs",
    "styles"
])

window.onload = async function () {
    await kiss.loader.loadScript("./build.min")

    await kiss.app.init({
        debug: false,
        name: "pickaform.com",
        mode: "memory",
        startRoute: {
            ui: "start",
            content: "landing"
        }
    })    
};