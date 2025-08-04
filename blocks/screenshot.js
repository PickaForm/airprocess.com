kiss.templates.screenshot = function (src, lazy) {
    const alt = src.split(".")[0]
    src = kiss.global.pathImg + "/" + src

    return {
        type: "html",
        classes: {
            this: "wave-2 screenshot-container"
        },
        width: "100%",
        html: `<img ${(lazy === false) ? "" : "loading=\"lazy\""} class="screenshot" src="${src}" alt="${alt}" width="100%" height="100%">`,
        events: {
            click: () => {
                if (kiss.tools.isMobile()) return // Don't zoom on mobile phones
                kiss.templates.screenshotPreview(src)
            }
        }
    }
}

kiss.templates.screenshotPreview = function (src) {
    const alt = src.split(".")[0]
    createPanel({
        header: false,
        modal: true,
        
        width: () => kiss.screen.current.width - 40,
        height: () => kiss.screen.current.height - 40,
        
        display: "flex",
        align: "center",
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background-3)",

        items: [{
            type: "html",
            display: "flex",
            html: `<img class="screenshot-preview" loading="lazy" src="${src}" alt="${alt}" width="100%" height="100%" style="object-fit: contain;">`
        }],
        
        events: {
            click: function() {
                this.close()
            }
        }
    }).render()
}

;