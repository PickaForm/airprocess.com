kiss.app.defineView({
    id: "landing",
    meta: {
        url: {
            en: "https://pickaform.fr/en/landing",
            fr: "https://pickaform.fr/fr/landing",
            es: "https://pickaform.fr/es/landing"
        },
        title: {
            en: "Pickaform | Best no-code platform for your processes",
            fr: "Pickaform | Meilleure plateforme no-code pour vos process",
            es: "Pickaform | Mejor plataforma no-code para sus procesos"
        },
        description: {
            en: `Boost all your business processes by combining no-code, forms, workflows and AI.`,
            fr: `Boostez tous vos processus métier en combinant no-code, formulaires, workflows et IA.`,
            es: `Impulse todos sus procesos de negocio combinando no-code, formularios, flujos de trabajo y IA.`
        }
    },
    renderer: function (id, target) {
        const t = defineTexts(id, {
            titlePitchline: {
                en: `Best <span class="text-highlight" style="background-color: #00aaee">no-code</span> platform
                <br>
                for your <span class="text-highlight" style="background-color: #a1ed00">processes</span>`,
                fr: `La meilleure plateforme <span class="text-highlight" style="background-color: #00aaee">no-code</span>
                <br>
                pour vos <span class="text-highlight" style="background-color: #a1ed00">process</span>`,
                es: `La mejor plataforma <span class="text-highlight" style="background-color: #00aaee">no-code</span>
                <br>
                para sus <span class="text-highlight" style="background-color: #a1ed00">procesos</span>`
            },
            subtitlePitchline: {
                en: "Build your processes in minutes.<br>Collaborate instantly.",
                fr: "Créez vos process en quelques minutes.<br>Collaborez instantanément.",
                es: "Construya sus procesos en minutos.<br>Colabore al instante."
            },
            titleNocodeWorkflow: {
                en: `no-code
                <br>+ Business Process Management
                <br>
                = <span class="text-highlight" style="background-color: #ed3757">superpowers</span>`,
                fr: `no-code
                <br>+ Business Process Management
                <br>
                = <span class="text-highlight" style="background-color: #ed3757">super pouvoirs</span>`,
                es: `no-code
                <br>+ Business Process Management
                <br>
                = <span class="text-highlight" style="background-color: #ed3757">superpoderes</span>`
            },
            subtitleNocodeWorkflow: {
                en: "Pick a form or build one.<br>Connect your process.",
                fr: "Choisissez un formulaire.<br>Connectez votre process.",
                es: "Elija un formulario o construya uno.<br>Conecte su proceso."
            },
            titleForms: {
                en: `Incredible <span class="text-highlight" style="background-color: #00aaee">forms</span>
                <br>in minutes`,
                fr: `Des <span class="text-highlight" style="background-color: #00aaee">formulaires</span>
                <br>incroyables en quelques minutes`,
                es: `Formularios <span class="text-highlight" style="background-color: #00aaee">increíbles</span>
                <br>en minutos`
            },
            subtitleForms: {
                en: "Create your own business tool.<br>Start saving time.",
                fr: "Créez votre outil métier.<br>Commencez à gagner du temps.",
                es: "Cree su propia herramienta de negocio.<br>Comience a ahorrar tiempo."
            },
            titleDashboard: {
                en: `Clear and impactful
                <br><span class="text-highlight" style="background-color:rgb(163, 0, 238)">dashboards</span>`,
                fr: `Des <span class="text-highlight" style="background-color:rgb(163, 0, 238)">tableaux de bord</span>
                <br>clairs et impactants`,
                es: `<span class="text-highlight" style="background-color:rgb(163, 0, 238)">Tableros de control</span>
                <br>claros e impactantes`
            },
            subtitleDashboard: {
                en: "Create your dashboards by yourself.<br>Get visual and intuitive answers.",
                fr: "Créez vos tableaux de bord en toute autonomie.<br>Obtenez des réponses visuelles et intuitives.",
                es: "Cree sus propios tableros de control.<br>Obtenga respuestas visuales e intuitivas."
            },            
            titleGenerativeAI: {
                en: `Generative <span class="text-highlight" style="background-color: #00aaee">AI</span>
                <br>for your apps`,
                fr: `IA <span class="text-highlight" style="background-color: #00aaee">générative</span>
                <br>pour vos applications`,
                es: `IA <span class="text-highlight" style="background-color: #00aaee">generativa</span>
                <br>para sus aplicaciones`
            },
            subtitleGenerativeAI: {
                en: "Explain simply what you want.<br>It's like magic.",
                fr: "Expliquez simplement ce que vous voulez.<br>C'est comme de la magie.",
                es: "Explique simplemente lo que quiere.<br>Es como magia."
            },
            titleFlexibility: {
                en: `no-code
                = <span class="text-highlight" style="background-color: #ed3757">flexibility</span>`,
                fr: `no-code
                = <span class="text-highlight" style="background-color: #ed3757">flexibilité</span>`,
                es: `no-code
                = <span class="text-highlight" style="background-color: #ed3757">flexibilidad</span>`
            },
            subtitleFlexibility: {
                en: "One tool.<br>An infinity of use cases.",
                fr: "Un seul outil.<br>Des usages infinis.",
                es: "Una herramienta.<br>Un sinfín de casos de uso."
            },
            titleExperience: {
                en: `+25 years of expertise in
                <br>
                process <span class="text-highlight" style="background-color: #ed3757">optimization</span>`,
                fr: `+25 ans d'expertise en
                <br>
                <span class="text-highlight" style="background-color: #ed3757">optimisation</span> des process métier`,
                es: `+25 años de experiencia en
                <br>
                <span class="text-highlight" style="background-color: #ed3757">optimización</span> de procesos`
            },
            subtitleExperience: {
                en: "Our customers save time.<br>Do you want to know how?",
                fr: "Nos clients gagnent du temps.<br>Vous voulez savoir comment ?",
                es: "Nuestros clientes ahorran tiempo.<br>¿Quiere saber cómo?"
            },
            getStarted: {
                en: "Get started",
                fr: "Démarrez maintenant",
                es: "Comience ahora"
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demo`
            },
            getInTouch: {
                en: `OK, I'll get in touch`,
                fr: `OK, je prends contact`,
                es: `OK, me pondré en contacto`
            },
            offer: {
                en:
                `<h1>Special offer <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 16px;">NoCode Summit 2024</span></h1>
                <h2>Come see us on October 16 and 17 in Paris, Station F</h2>
                <h2>If you purchase a subscription before October 30, 2024</h2>
                <h2>✔ discount of <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 5px;">30%</span> on our services</span h2>
                <h2>✔ we build your prototype with you</h2>
                <h2>✔ we coach you on our methodology to create your processes</h2>
                <h2>✔ we coach you on NoCode design best practices</h2>

                <center>
                    <a href="https://calendly.com/pickaform/pickaform-live-demo">
                        <div class="a-button button-booking">Book your private demo now to benefit from this unique offer!</div>
                    </a>
                </center>`,
                fr:
                `<h1>Offre spéciale <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 16px;">NoCode Summit 2024</span></h1>
                <h2>Venez nous voir les 16 et 17 octobre à Paris, Station F</h2>
                <h2>Si vous souscrivez un abonnement avant le 30 octobre 2024</h2>
                <h2>✔ remise de <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 5px;">30%</span> sur nos prestations d'accompagnement.</h2>
                <h2>✔ nous construisons votre prototype avec vous</h2>
                <h2>✔ nous vous coachons sur notre méthodologie pour créer vos process</h2>
                <h2>✔ nous vous coachons sur les best practices de la conception NoCode</h2>
                              
                <center>
                    <a href="https://calendly.com/pickaform/pickaform-live-demo">
                        <div class="a-button button-booking">Réservez votre démo privée dès maintenant pour bénéficier de cette offre unique !</div>
                    </a>
                </center>`,
                es:
                `<h1>Oferta especial <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 16px;">NoCode Summit 2024</span></h1>
                <h2>Venga a vernos el 16 y 17 de octubre en París, Station F</h2>
                <h2>Si compra una suscripción antes del 30 de octubre de 2024</h2>
                <h2>✔ descuento del <span class="text-highlight" style="color: black; background-color: #ffffff; padding: 5px;">30%</span> en nuestros servicios</h2>
                <h2>✔ construimos su prototipo con usted</h2>
                <h2>✔ le asesoramos sobre nuestra metodología para crear sus procesos</h2>
                <h2>✔ le asesoramos sobre las mejores prácticas de diseño NoCode</h2>

                <center>
                    <a href="https://calendly.com/pickaform/pickaform-live-demo">
                        <div class="a-button button-booking">¡Reserve su demostración privada ahora para beneficiarse de esta oferta única!</div>
                    </a>
                </center>`
            },
            titleWhy: {
                en: `Why Pickaform?`,
                fr: `Pourquoi Pickaform ?`,
                es: `¿Por qué Pickaform?`
            },
            subtitleWhy: {
                en: `Simply the no-code solution best suited for
                    <br><span class="text-highlight" style="background-color: #00aaee">enterprises</span>`,
                fr: `Simplement la solution no-code la plus adaptée aux
                    <br><span class="text-highlight" style="background-color: #00aaee">entreprises</span>`,
                es: `Simplemente la solución no-code más adecuada para
                    <br><span class="text-highlight" style="background-color: #00aaee">empresas</span>`
            },
            compareTo: {
                en: `Compare to`,
                fr: `Comparer à`,
                es: `Comparar con`
            },
            pickaform: {
                en: `
                    <br>✅ Cloud and on-premise
                    <br>✅ Security model with precise access control
                    <br>✅ Rich form layout
                    <br>✅ Integrated workflow engine (BPM)
                    <br>✅ Integrated PDF generation
                    <br>✅ Very fast and stable
                    <br>✅ Hosted in France
                    <br>✅ GDPR
                    <br>✅ Simple and competitive pricing
                    <br>✅ English, French, Spanish & more coming
                    <hr>✅ Perfect for all company sizes and budgets
                    `,
                fr: `
                    <br>✅ Cloud et on-premise
                    <br>✅ Modèle de sécurité avec contrôle précis des accès
                    <br>✅ Mise en page de formulaire riche
                    <br>✅ Moteur de workflow intégré (BPM)
                    <br>✅ Génération de PDF intégrée
                    <br>✅ Très rapide et très stable
                    <br>✅ Hébergé en France
                    <br>✅ RGPD
                    <br>✅ Tarification simple et compétitive
                    <br>✅ Anglais, Français, Espagnol et plus à venir
                    <hr>✅ Parfait pour toutes les tailles d'entreprises et de budgets
                `,
                es: `
                    <br>✅ Cloud y on-premise
                    <br>✅ Modelo de seguridad con control preciso de accesos
                    <br>✅ Diseño de formulario rico
                    <br>✅ Motor de flujo de trabajo integrado (BPM)
                    <br>✅ Generación de PDF integrada
                    <br>✅ Muy rápido y muy estable
                    <br>✅ Alojado en Francia
                    <br>✅ RGPD
                    <br>✅ Precios simples y competitivos
                    <br>✅ Inglés, Francés, Español y más por venir
                    <hr>✅ Perfecto para todas las tallas de empresas y presupuestos
                `
            },
            airtable: {
                en: `
                    <br>❌ Cloud only
                    <br>❌ Security model to be strengthened
                    <br>❌ Basic form layout
                    <br>❌ No sections, no columns
                    <br>❌ No workflow engine (BPM)
                    <br>❌ No native PDF generation
                    <br>❌ Low row limits, even at the enterprise level
                    <br>❌ Expensive for large teams
                    <br>❌ English interface only
                    <hr>✅ Good for companies with a substantial budget
                    `,
                fr: `
                    <br>❌ Cloud uniquement
                    <br>❌ Modèle de sécurité à renforcer
                    <br>❌ Mise en page basique des formulaires
                    <br>❌ Pas de sections, pas de colonnes
                    <br>❌ Pas de moteur de workflow (BPM)
                    <br>❌ Pas de génération native de PDF
                    <br>❌ Limitations sur la quantité de données
                    <br>❌ Budget conséquent pour les grandes équipes
                    <br>❌ Interface en Anglais uniquement
                    <hr>✅ Bon pour les entreprises avec un budget conséquent
                `,
                es: `
                    <br>❌ Solo en la nube
                    <br>❌ Modelo de seguridad a fortalecer
                    <br>❌ Diseño básico de formularios
                    <br>❌ Sin secciones, sin columnas
                    <br>❌ Sin motor de flujo de trabajo (BPM)
                    <br>❌ Sin generación nativa de PDF
                    <br>❌ Límites de filas bajos, incluso a nivel empresarial
                    <br>❌ Costoso para equipos grandes
                    <br>❌ Interfaz en inglés solamente
                    <hr>✅ Bueno para empresas con un presupuesto sustancial
                `
            },
            baserow: {
                en: `
                    <br>❌ Airtable clone with inferior UI/UX
                    <br>❌ Security model to be strengthened
                    <br>❌ Basic form layout, no sections, no columns
                    <br>❌ No workflow engine (BPM)
                    <br>❌ No native PDF generation
                    <br>❌ Not so intuitive for non-technical users
                    <br>❌ Difficult data aggregations
                    <br>❌ English interface only
                    <hr>✅ Good for basic projects and small teams
                    `,
                fr: `
                    <br>❌ Clone de Airtable avec une UI/UX inférieure
                    <br>❌ Modèle de sécurité à renforcer
                    <br>❌ Mise en page basique des formulaires
                    <br>❌ Pas de sections, pas de colonnes
                    <br>❌ Pas de moteur de workflow (BPM)
                    <br>❌ Pas de génération native de PDF
                    <br>❌ Pas intuitif pour les utilisateurs non techniques
                    <br>❌ Agrégations de données difficiles
                    <br>❌ Interface en Anglais uniquement
                    <hr>✅ Bon pour les projets basiques et les petites équipes
                `,
                es: `
                    <br>❌ Clon de Airtable con una UI/UX inferior
                    <br>❌ Modelo de seguridad a fortalecer
                    <br>❌ Diseño básico de formularios, sin secciones, sin columnas
                    <br>❌ Sin motor de flujo de trabajo (BPM)
                    <br>❌ Sin generación nativa de PDF
                    <br>❌ No tan intuitivo para usuarios no técnicos
                    <br>❌ Difícil agregación de datos
                    <br>❌ Interfaz en inglés solamente
                    <hr>✅ Bueno para proyectos básicos y equipos pequeños
                `
            },
            nocodb: {
                en: `
                    <br>❌ Airtable clone with inferior UI/UX
                    <br>❌ Very slow UI when navigating datasets
                    <br>❌ Basic form layout, no sections, no columns
                    <br>❌ No workflow engine (BPM)
                    <br>❌ No native PDF generation
                    <br>❌ Designed for technical audiences
                    <br>❌ Lacks collaborative features for teams
                    <br>❌ English interface only
                    <hr>✅ Good for technical teams
                    `,
                fr: `
                    <br>❌ Clone de Airtable avec une UI/UX inférieure
                    <br>❌ UI lente lors de la navigation dans les données
                    <br>❌ Mise en page basique des formulaires
                    <br>❌ Pas de sections, pas de colonnes
                    <br>❌ Pas de moteur de workflow (BPM)
                    <br>❌ Pas de génération native de PDF
                    <br>❌ Conçu pour les audiences techniques
                    <br>❌ Manque de fonctionnalités collaboratives
                    <br>❌ Interface en Anglais uniquement
                    <hr>✅ Bon pour les équipes techniques
                `,
                es: `
                    <br>❌ Clon de Airtable con una UI/UX inferior
                    <br>❌ UI muy lenta al navegar por los conjuntos de datos
                    <br>❌ Diseño básico de formularios, sin secciones, sin columnas
                    <br>❌ Sin motor de flujo de trabajo (BPM)
                    <br>❌ Sin generación nativa de PDF
                    <br>❌ Diseñado para audiencias técnicas
                    <br>❌ Carece de funciones colaborativas para equipos
                    <br>❌ Interfaz en inglés solamente
                    <hr>✅ Bueno para equipos técnicos
                `
            },            
            googlesheets: {
                en: `
                    <br>❌ Cloud only
                    <br>❌ Not suited to build enterprise apps
                    <br>❌ Impossible to fine-tune security
                    <br>❌ No forms at all
                    <br>❌ No relational/linking abilities
                    <br>❌ No workflow engine (BPM)
                    <br>❌ No native PDF generation
                    <br>❌ Lacks collaborative features for teams
                    <br>❌ Long history of privacy and security concerns
                    <hr>✅ Great for spreadsheet work and calculations
                    `,
                fr: `
                    <br>❌ Cloud uniquement
                    <br>❌ Pas adapté pour des applications d'entreprise
                    <br>❌ Impossible d'avoir une sécurité fine
                    <br>❌ Pas de formulaires du tout
                    <br>❌ Aucune capacité de relation / liaison
                    <br>❌ Pas de moteur de workflow (BPM)
                    <br>❌ Pas de génération native de PDF
                    <br>❌ Manque de fonctionnalités collaboratives
                    <br>❌ Préoccupations en matière de confidentialité
                    <hr>✅ Idéal comme tableur et pour les calculs
                `,
                es: `
                    <br>❌ Solo en la nube
                    <br>❌ No apto para construir aplicaciones empresariales
                    <br>❌ Imposible afinar la seguridad
                    <br>❌ Sin formularios en absoluto
                    <br>❌ Sin habilidades de relación / vinculación
                    <br>❌ Sin motor de flujo de trabajo (BPM)
                    <br>❌ Sin generación nativa de PDF
                    <br>❌ Carece de funciones colaborativas para equipos
                    <br>❌ Larga historia de preocupaciones de privacidad y seguridad
                    <hr>✅ Ideal para trabajos de hojas de cálculo y cálculos
                `
            },
            excelsheets: {
                en: `
                    <br>❌ Not suited to build enterprise apps
                    <br>❌ Impossible to fine-tune security
                    <br>❌ No relational/linking abilities
                    <br>❌ No workflow engine (BPM)
                    <br>❌ No native PDF generation
                    <br>❌ Lacks collaborative features for teams
                    <hr>✅ Great for spreadsheet work and calculations
                    `,
                fr: `
                    <br>❌ Pas adapté pour des applications d'entreprise
                    <br>❌ Impossible d'avoir une sécurité fine
                    <br>❌ Pas de capacité de relation / liaison
                    <br>❌ Pas de moteur de workflow (BPM)
                    <br>❌ Pas de génération native de PDF
                    <br>❌ Manque de fonctionnalités collaboratives
                    <hr>✅ Idéal comme tableur et pour les calculs
                `,
                es: `
                    <br>❌ No apto para construir aplicaciones empresariales
                    <br>❌ Imposible afinar la seguridad
                    <br>❌ Sin habilidades de relación / vinculación
                    <br>❌ Sin motor de flujo de trabajo (BPM)
                    <br>❌ Sin generación nativa de PDF
                    <br>❌ Carece de funciones colaborativas para equipos
                    <hr>✅ Ideal para trabajos de hojas de cálculo y cálculos
                `
            }           
        })

        return createBlock({
            id,
            target,
            layout: "vertical",
            alignItems: "center",
            items: [
                // STRIP - Best NoCode platform for your workflows
                kiss.templates.title({
                    title: t("titlePitchline"),
                    subtitle: t("subtitlePitchline")
                }),

                kiss.templates.buttonCTA(t("bookDemo"), "booking"),
                kiss.templates.screenshot("workflow - nocode.webp", false),

                // EVENTS & ANNOUNCENMENTS
                // {
                //     type: "html",
                //     class: "offer",
                //     html: t("offer")
                // },

                // STRIP - NoCode + Business Process Management = Superpowers
                kiss.templates.title({
                    title: t("titleNocodeWorkflow"),
                    subtitle: t("subtitleNocodeWorkflow")
                }),
                kiss.templates.screenshot("workflow - business contracts - pickaform.webp"),

                // STRIP - Incredible forms in minutes
                kiss.templates.title({
                    title: t("titleForms"),
                    subtitle: t("subtitleForms")
                }),
                kiss.templates.screenshot("incredible forms out-of-the-box - pickaform.webp"),

                // STRIP - Beautiful dashboards for your data
                kiss.templates.title({
                    title: t("titleDashboard"),
                    subtitle: t("subtitleDashboard")
                }),
                kiss.templates.screenshot("example - dashboard - pickaform.webp"),

                // STRIP - Generative AI for your apps
                kiss.templates.title({
                    title: t("titleGenerativeAI"),
                    subtitle: t("subtitleGenerativeAI")
                }),
                kiss.templates.screenshot("generative ai to build applications - pickaform.webp"),

                // STRIP - NoCode = Flexibility
                kiss.templates.title({
                    title: t("titleFlexibility"),
                    subtitle: t("subtitleFlexibility")
                }),
                kiss.templates.screenshot("ai art gallery - gallery view - pickaform.webp"),

                // STRIP - Comparison with competitors
                kiss.templates.title({
                    title: t("titleWhy"),
                    subtitle: t("subtitleWhy")
                }),

                {
                    class: "vs-container",
                    items: [
                        {
                            layout: "vertical",
                            class: "vs-content",
                            items: [
                                {
                                    type: "html",
                                    html: `<img src="./resources/img/pickaform.webp" alt="pickaform logo" class="image-content" loading="lazy" style="width: 256px; height: 60px;">`
                                },
                                {
                                    type: "html",
                                    html: t("pickaform")
                                }
                            ]
                        },
                        {
                            type: "html",
                            html: "<div class='vs'>VS</div>"
                        },
                        {
                            layout: "vertical",
                            class: "vs-content",
                            items: [
                                {
                                    type: "select",
                                    class: "vs-select",
                                    label: t("compareTo"),
                                    labelPosition: "top",
                                    fieldWidth: "100%",
                                    labelWidth: "100%",
                                    value: "airtable",
                                    autocomplete: "off",
                                    options: [
                                        {
                                            label: "Airtable",
                                            value: "airtable",
                                            color: "#39CAFF"
                                        },
                                        {
                                            label: "Nocodb",
                                            value: "nocodb",
                                            color: "#322EBA"
                                        },
                                        {
                                            label: "Baserow",
                                            value: "baserow",
                                            color: "#5186D7"
                                        },
                                        {
                                            label: "Google Sheets",
                                            value: "googlesheets",
                                            color: "#34A853"
                                        },
                                        {
                                            label: "Microsoft Excel",
                                            value: "excelsheets",
                                            color: "#107C41"
                                        }
                                    ],
                                    events: {
                                        change: function() {
                                            const value = this.getValue()
                                            const targetProduct = document.getElementById("target-product")
                                            targetProduct.innerHTML = t(value)
                                        }
                                    }
                                },                        
                                {
                                    id: "target-product",
                                    type: "html",
                                    html: t("airtable")
                                }                                
                            ]
                        }
                    ]
                },

                // STRIP - Experience
                kiss.templates.title({
                    title: t("titleExperience"),
                    subtitle: t("subtitleExperience")
                }),
                kiss.templates.buttonCTA(t("bookDemo"), "booking"),

                // CUSTOMERS
                kiss.templates.screenshot("customer references - pickaform.webp"),
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