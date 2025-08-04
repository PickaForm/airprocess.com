kiss.app.defineView({
    id: "navbar",
    renderer: function (id, target) {
        const nextLanguage = getNextLanguage()

        const t = defineTexts(id, {
            "Home": {
                en: "Home",
                fr: "Accueil",
                es: "Inicio"
            },
            "Product": {
                en: "Product",
                fr: "Produit",
                es: "Producto"
            },
            "Examples": {
                en: "Examples",
                fr: "Exemples",
                es: "Ejemplos"
            },
            "Pricing": {
                en: "Pricing",
                fr: "Tarifs",
                es: "Precios"
            },
            "Templates": {
                en: "Templates",
                fr: "Modèles",
                es: "Plantillas"
            },
            "Login": {
                en: "Login",
                fr: "Connexion",
                es: "Iniciar sesión"
            },
            "Get started": {
                en: "Get started",
                fr: "Inscription",
                es: "Registro"
            }
        })

        const navItems = [
            // HOME
            {
                text: t("Home"),
                href: `${kiss.global.path}/${kiss.language.current}/landing`,
                target: "_self",
                view: "landing",
            },
            // PRODUCT
            {
                text: t("Product"),
                href: `${kiss.global.path}/${kiss.language.current}/product`,
                target: "_self",
                view: "product"
            },
            // USE CASES
            {
                text: t("Examples"),
                href: `${kiss.global.path}/${kiss.language.current}/cases`,
                target: "_self",
                view: "cases"
            },
            // CONTACT
            // {
            //     text: "Contact",
            //     href: `${kiss.global.path}/${kiss.language.current}/contact`,
            //     target: "_self",
            //     view: "contact"
            // },
            // PRICING
            {
                text: t("Pricing"),
                href: `${kiss.global.path}/${kiss.language.current}/pricing`,
                target: "_self",
                view: "pricing"
            },
            // BLOG
            {
                text: "Blog",
                href: `https://blog.pickaform.com/${kiss.language.current}`,
                target: "_new",
                view: ""
            },
            // TEMPLATES
            {
                hidden: kiss.screen.isMobile,
                text: t("Templates"),
                href: kiss.global.pathPickaform + `/client/pickaform/demo.html#ui=templates-list&language=${kiss.language.current}`,
                target: "_new",
                view: ""
            },
            // REGISTER
            {
                hidden: kiss.screen.isMobile,
                text: t("Get started"),
                href: kiss.global.pathPickaform + "/client/pickaform/index.html#ui=authentication-register",
                target: "_new",
                view: ""
            },
            // LOGIN
            {
                // hidden: kiss.screen.isMobile,
                text: t("Login"),
                href: kiss.global.pathPickaform + "/client/pickaform/index.html#ui=authentication-login",
                target: "_new",
                view: ""
            }
        ]

        const options = [
            // LANGUAGE
            {
                id: "language",
                class: "button-flag",
                type: "html",
                html: `<img id="language-img" width=16 height=12 src="${kiss.global.pathImg}/flag-${nextLanguage}.svg" alt="switch to language ${nextLanguage}">`,
                subscriptions: {
                    EVT_LANGUAGE: function (msgData) {
                        const flagImage = this.querySelector("img")
                        const newFlag = `${kiss.global.pathImg}/flag-${msgData.language}.svg`
                        flagImage.src = newFlag
                    }
                }
            },
            // CONTRAST
            {
                id: "mode",
                class: "button-mode",
                type: "html",
                html: "◐"
            }
        ]

        let buttons = [{
                type: "html",
                html: kiss.templates.navbar(navItems, "row")
            },
            ...options
        ]

        let menu = [{
                type: "html",
                html: kiss.templates.navbar(navItems, "column")
            },
            ...options
        ]

        return createBlock({
            id,
            target,
            layout: "horizontal",
            alignItems: "center",
            minHeight: 60,
            maxHeight: 60,
            styles: {
                this: "user-select: none;"
            },
            items: [
                // LOGO
                {
                    type: "image",
                    alt: "pickaform logo",
                    src: "./resources/img/pickaform.webp",
                    width: 256,
                    height: 60
                },
                {
                    type: "spacer",
                    flex: 1
                },
                // MENU
                {
                    id: "topbar-buttons",
                    items: buttons
                }
            ],

            events: {
                /**
                 * Intercepts the navbar click event to prevent direct navigation with href.
                 * This allows to *not reload* the page and leverage the SPA behavior of KissJS when opening views.
                 */
                click: (event) => $(id)._handleClick(event)
            },

            subscriptions: {
                EVT_WINDOW_RESIZED: function (msgData) {
                    if (!this.isConnected) return
                    this.adjustDisplayMode(msgData.current.width)
                }
            },

            methods: {
                load() {
                    if (kiss.tools.isMobile()) {
                        this.adjustDisplayMode(kiss.screen.current.width)
                    }
                },

                // Translation
                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo,

                // Clicked on a menu item
                _handleClick(event) {
                    event.preventDefault()
                    let element = event.target

                    if (element.id.includes("language")) {
                        translate()
                        return
                    }

                    // Dark and Light mode
                    if (element.id == "mode") {
                        if (kiss.theme.currentColor == "dark") {
                            kiss.theme.set({
                                color: "light"
                            })
                        } else {
                            kiss.theme.set({
                                color: "dark"
                            })
                        }
                        return
                    }

                    // Manage client-side navigation
                    if (element.tagName == "SPAN") element = element.closest("a")
                    if (element.tagName == "LI") element = element.querySelector("a")

                    if (element.tagName == "A") {
                        const view = element.getAttribute("view")
                        const target = element.getAttribute("target")

                        if (element.innerHTML.includes("Blog")) {
                            // BLOG
                            window.open(`https://blog.pickaform.com/${kiss.language.current}/`, "_new")
                        } else if (element.innerHTML.includes("Templates") || element.innerHTML.includes("Modèles")) {
                            // TEMPLATES
                            window.open(kiss.global.pathPickaform + `/client/pickaform/demo.html#ui=templates-list&language=${kiss.language.current}`, "_new")
                        } else if (view) {
                            kiss.router.navigateTo({
                                content: view
                            })
                        } else {
                            window.open(element.href, target)
                        }
                    }
                },

                // Responsiveness
                adjustDisplayMode(width) {
                    if (width < 900) {
                        if (this.mode == "narrow") return
                        this.mode = "narrow"
                        this.displayMenuVertically()
                    } else {
                        if (this.mode == "wide") return
                        this.mode = "wide"
                        this.displayMenuHorizontally()
                    }
                },

                // Horizontal menu
                displayMenuHorizontally() {
                    $("topbar-buttons")
                        .setItems(buttons)
                        .setAnimation({
                            name: "slideInDown",
                            speed: "faster"
                        })
                },

                // Vertical menu
                displayMenuVertically() {
                    const verticalMenu = {
                        type: "button",
                        text: "☰",
                        padding: "0 6px",
                        fontSize: 20,
                        fontWeight: 900,
                        margin: "0 20px 0 0",
                        action: (event) => {
                            event.stop()
                            if ($("vertical-menu")) return $("vertical-menu").show()

                            createPanel({
                                id: "vertical-menu",
                                header: false,
                                modal: true,
                                width: "100%",
                                height: "100%",
                                layout: "vertical",
                                items: menu,
                                closeMethod: "hide",
                                background: "var(--background-blue)",
                                events: {
                                    click: function (event) {
                                        $(id)._handleClick(event)
                                        this.close()
                                    }
                                }
                            }).render()
                        }
                    }

                    $("topbar-buttons").setItems([verticalMenu])
                }
            }
        })
    }
})

;