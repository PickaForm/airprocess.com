kiss.templates.feature = function ({
    title,
    description,
    screenshot,
    CTA,
    textPosition,
    color,
    backgroundColor
}) {
    const id = kiss.tools.shortUid()
    const src = kiss.global.pathImg + "/" + screenshot
    const alt = screenshot.split(".")[0]

    return {
        id,
        display: "flex",
        flexFlow: (textPosition == "right") ? "row-reverse" : "row",
        class: (textPosition == "right") ? "feature-right" : "feature-left",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        items: [
            {
                type: "html",
                padding: "0 5vh",
                flex: 1,
                maxWidth: 580,
                styles: {
                    this: `color: ${color}`
                },
                html: /*html*/ `
                    <div class="feature-title">
                        <h1>${title}</h1>
                    </div>
                    <div class="feature-description">
                        <p>${description}</p>
                    </div>
                    <div class="feature-CTA">
                        <p>
                            <a class="feature-CTA" href='https://calendly.com/pickaform/pickaform-live-demo'>
                                ${CTA}
                            </a>
                        </p>
                    </div>
                    `
            },
            {
                class: "feature-screenshot",
                flex: 1,
                maxWidth: 580,
                items: [
                    {
                        type: "html",
                        class: "feature-screenshot-container-" + textPosition,
                        html: `<img src="${src}" alt="${alt}" class="feature-screenshot-img feature-screenshot-${textPosition}">`,
                        events: {
                            click: () => {
                                if (kiss.tools.isMobile()) return // Don't zoom on mobile phones
                                kiss.templates.screenshotPreview(src)
                            }
                        }
                    }
                ]
            }
        ],

        subscriptions: {
            EVT_WINDOW_RESIZED: function (msgData) {
                if (!this.isConnected) return
                this.adjustDisplayMode(msgData.current.width)
            }
        },

        methods: {
            load() {
                this.adjustDisplayMode(kiss.screen.current.width)
            },

            adjustDisplayMode(width) {
                if (width < 900) {
                    if (this.mode == "narrow") return
                    this.mode = "narrow"
                    this.displayAsColumn()
                } else {
                    if (this.mode == "wide") return
                    this.mode = "wide"
                    this.displayAsRow()
                }
            },

            displayAsRow() {
                $(id).style.flexFlow = (textPosition == "left") ? "row" : "row-reverse"
            },

            displayAsColumn() {
                $(id).style.flexFlow = "column"
            }
        }        
    }
}

;