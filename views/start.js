kiss.app.defineView({
    id: "start",
    renderer: function (id, target) {
        return createBlock({
            id,
            target,
            layout: "vertical",
            fullscreen: true,

            items: [
                // NAVBAR
                {
                    type: "view",
                    id: "navbar",
                },
                {
                    id: "content-container",
                    overflowY: "auto",
                    items: [
                        // CONTENT
                        {
                            id: "content",
                            layout: "vertical",
                            items: [{
                                type: "view",
                                id: "landing"
                            }]
                        },
                        // FOOTER
                        {
                            type: "view",
                            id: "footer"
                        }
                    ]
                }
            ],

            subscriptions: {
                "EVT_ROUTE_UPDATED": (route) => {
                    const view = kiss.views.show(route.content, "content", true)
                    
                    if (!kiss.tools.isMobile()) {
                        view.setAnimation({
                            name: "fadeIn",
                            speed: "slower"
                        })
                    }

                    $("content-container").scrollTop = 0
                }
            }
        })
    }
})

;