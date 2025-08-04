kiss.app.defineView({
    id: "contact",
    meta: {
        url: {
            en: "https://pickaform.fr/en/contact",
            fr: "https://pickaform.fr/fr/contact",
            es: "https://pickaform.fr/es/contact"
        },
        title: {
            en: "Contact & FAQ | Pickaform",
            fr: "Contact & FAQ | Pickaform",
            es: "Contacto y FAQ | Pickaform"
        },
        description: {
            en: `Request a demo or check the Frequently Asked Questions.`,
            fr: `Demandez une démo ou jetez un oeil aux Questions Fréquentes.`,
            es: `Solicite una demostración o consulte las Preguntas Frecuentes.`
        }
    },    
    renderer: function (id, target) {
        const t = defineTexts(id, {
            title: {
                en: "Let's keep in touch",
                fr: "Prenons contact",
                es: "Mantengámonos en contacto"
            },
            subtitle: {
                en: `Tell us about your project,<br>we show you<span class="text-highlight" style="background-color: #00aaee">in 20 minutes</span> how to make it happen.`,
                fr: `Expliquez-nous votre projet,<br>nous vous montrons<span class="text-highlight" style="background-color: #00aaee">en 20mn</span> comment le réaliser.`,
                es: `Cuéntenos sobre su proyecto,<br>le mostramos<span class="text-highlight" style="background-color: #00aaee">en 20 minutos</span> cómo hacerlo realidad.`
            },
            submit: {
                en: "submit",
                fr: "envoyer",
                es: "enviar"
            },
            thanks: {
                en: `Thank you!
                <br>Your request has been sent 🚀
                <br>We will contact you very soon.`,
                fr: `Merci !
                <br>Votre demande a bien été envoyée 🚀
                <br>Nous allons prendre contact avec vous très rapidement.`,
                es: `¡Gracias!
                <br>Su solicitud ha sido enviada 🚀
                <br>Nos pondremos en contacto con usted muy pronto.`
            }
        })

        return createBlock({
            id,
            target,
            layout: "vertical",
            alignItems: "center",
            class: "wave-3",

            items: [
                // TITLE / SUBTITLE
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle")
                }),

                // CONTACT FORM
                {
                    id: "contactForm",
                    type: "panel",
                    header: false,
                    width: () => (kiss.screen.current.width < 600) ? kiss.screen.current.width - 40 : 600,
                    autoSize: true,
                    margin: "10vh 0 20vh 0",
                    layout: "vertical",

                    defaultConfig: {
                        labelPosition: "top"
                    },

                    items: [
                        // Name
                        {
                            id: "name",
                            type: "text",
                            label: "Name",
                            required: true
                        },
                        // Email
                        {
                            id: "email",
                            type: "text",
                            label: "Email",
                            validationType: "email",
                            required: true
                        },
                        // Telephone
                        {
                            id: "telephone",
                            type: "text",
                            label: "Telephone",
                            required: true
                        },
                        // Language
                        {
                            id: "language",
                            type: "select",
                            label: "Language",
                            options: ["English", "Français"],
                            value: (kiss.language.current == "fr") ? "Français" : "English",
                            required: true
                        },
                        // Company
                        {
                            id: "company",
                            type: "text",
                            label: "Company",
                            required: true
                        },
                        // Company size
                        {
                            id: "companySize",
                            type: "select",
                            label: "Company size",
                            required: true,
                            options: [
                                {
                                    "value": "1 - 10",
                                    "color": "#FFAA00"
                                },
                                {
                                    "value": "11 - 20",
                                    "color": "#55CC00"
                                },
                                {
                                    "value": "21 - 50",
                                    "color": "#0075FF"
                                },
                                {
                                    "value": "51 - 100",
                                    "color": "#ED3757"
                                },
                                {
                                    "value": "100+",
                                    "color": "#8833EE"
                                }
                            ]                            
                        },                        
                        // Project
                        {
                            id: "project",
                            type: "textarea",
                            label: "Project",
                            rows: 10,
                            required: true
                        },
                        // Submit button
                        {
                            type: "button",
                            text: t("submit"),
                            height: 40,
                            backgroundColor: "#00aaee",
                            color: "#ffffff",
                            iconColor: "#ffffff",
                            action: async function () {
                                const form = this.closest("a-panel")
                                if (!form.validate()) return

                                let formData = form.getData({
                                    useLabels: true
                                })
                                formData.useLabels = true

                                await kiss.ajax.request({
                                    url: kiss.global.pathPickaform + "/command/publicForm/post/" + kiss.global.contactModelId,
                                    method: "post",
                                    body: JSON.stringify(formData)
                                })

                                $("contactForm").hide()
                                $("thankYou").show()
                            }
                        }
                    ]
                },

                // THANK YOU
                {
                    hidden: true,
                    id: "thankYou",
                    type: "html",
                    class: "thank-you",
                    html: t("thanks"),
                    animation: {
                        name: "rotateIn",
                        speed: "fast"
                    }
                }                
            ],

            methods: {
                load() {
                    animateElements()
                },
                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo
            }
        })
    }
})

;