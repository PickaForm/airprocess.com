kiss.app.defineView({
    id: "footer",
    renderer: function (id, target) {
        const blogUrl = kiss.global.path + "/" + kiss.language.current + "/blog"

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
                fr: "Pricing",
                es: "Precios"
            },
            "Privacy": {
                en: "privacy policy",
                fr: "politique de confidentialité",
                es: "política de privacidad"
            },
            "Terms": {
                en: `terms of services`,
                fr: `mentions légales`,
                es: `términos de servicio`
            },
            "Technology": {
                en: `technology`,
                fr: `technologie`,
                es: `tecnología`
            },
            "AI Art": {
                en: "Midjourney integration",
                fr: "Intégration Midjourney",
                es: "Integración Midjourney"
            }
        })

        const entries = [
            // PRODUCT
            {
                title: "Site",
                items: [{
                        label: t("Home"),
                        action: () => kiss.router.navigateTo({
                            content: "landing"
                        })
                    },
                    {
                        label: t("Product"),
                        action: () => kiss.router.navigateTo({
                            content: "product"
                        })
                    },
                    {
                        label: t("Examples"),
                        action: () => kiss.router.navigateTo({
                            content: "cases"
                        })
                    },
                    {
                        label: "Contact",
                        action: () => kiss.router.navigateTo({
                            content: "contact"
                        })
                    },
                    {
                        label: "Blog",
                        // action: () => kiss.router.navigateTo({
                        //     content: "blog"
                        // })
                        action: () => window.open(`https://blog.pickaform.com/${kiss.language.current}/`, "_new")
                    },
                    {
                        label: t("Pricing"),
                        action: () => kiss.router.navigateTo({
                            content: "pricing"
                        })
                    }
                ]
            },
            // LINKS
            {
                title: "Social",
                items: [{
                        label: "LinkedIn",
                        action: () => window.open("https://www.linkedin.com/company/pickaform-cloud/", "_new")
                    }, {
                        label: "YouTube",
                        action: () => window.open("https://www.youtube.com/@pickaform", "_new")
                    },
                    {
                        label: "Facebook",
                        action: () => window.open("https://www.facebook.com/pickaform.applications", "_new")
                    },
                    {
                        label: "Twitter",
                        action: () => window.open("https://twitter.com/PickaForm", "_new")
                    }
                ]
            },
            // TECH
            {
                title: t("Technology"),
                items: [{
                        label: "Powered by KissJS",
                        action: () => window.open("https://kissjs.net", "_new")
                    },
                    {
                        label: t("AI Art"),
                        action: () => kiss.router.navigateTo({
                            content: "artworks"
                        })
                    }
                ]
            },
            // ARCHIVES
            {
                title: "Archives",
                items: [{
                        label: "Blog (English)",
                        action: () => window.open("https://blog.pickaform.com/en/", "_new")
                    },
                    {
                        label: "Blog (Français)",
                        action: () => window.open("https://blog.pickaform.com/fr/", "_new")
                    }
                ]
            },
            // LEGAL
            {
                title: "Legal",
                items: [{
                    label: t("Privacy"),
                    action: () => window.open(blogUrl + "/politique-de-confidentialite", "_new")
                }, {
                    label: t("Terms"),
                    action: () => window.open(blogUrl + "/mentions-legales", "_new")
                }]
            }
        ]

        const blocks = entries.map(entry => kiss.templates.footerBlock({
            title: entry.title,
            entries: entry.items
        }))

        return createBlock({
            id,
            target,
            class: "footer",
            items: blocks,

            methods: {
                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo
            }
        })
    }
})

;