kiss.app.defineView({
    id: "cases",
    meta: {
        url: {
            en: "https://pickaform.fr/en/cases",
            fr: "https://pickaform.fr/fr/cases",
            es: "https://pickaform.fr/es/cases"
        },
        title: {
            en: "Case studies | Pickaform",
            fr: "Etudes de cas | Pickaform",
            es: "Casos de estudio | Pickaform"
        },
        description: {
            en: `With no-code, combine your custom forms and workflows to create an infinite number of different tools.`,
            fr: `Avec le no-code, combinez vos formulaires et workflows sur mesure pour créer une infinité d'outils différents.`,
            es: `Con no-code, combine sus formularios y flujos de trabajo personalizados para crear una cantidad infinita de herramientas diferentes.`
        }
    },
    renderer: function (id, target) {
        const t = defineTexts(id, {
            getStarted: {
                en: "Get started",
                fr: "Démarrez maintenant",
                es: "Empezar"
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demostración`
            },
            title: {
                en: `What you can <span class="text-highlight" style="background-color: #00aaee">build</span>
                <br>
                is up to your <span class="text-highlight" style="background-color: #a1ed00">imagination</span>`,
                fr: `Ce que vous pouvez <span class="text-highlight" style="background-color: #00aaee">créer</span>
                <br>
                dépend de votre <span class="text-highlight" style="background-color: #a1ed00">imagination</span>`,
                es: `Lo que puedes <span class="text-highlight" style="background-color: #00aaee">construir</span>
                <br>
                depende de tu <span class="text-highlight" style="background-color: #a1ed00">imaginación</span>`
            },
            subtitle: {
                en: "With no-code, combine your custom forms and workflows to create an infinite number of different tools.",
                fr: "Avec le no-code, combinez vos formulaires et workflows sur mesure pour créer une infinité d'outils différents.",
                es: "Con no-code, combine sus formularios y flujos de trabajo personalizados para crear una cantidad infinita de herramientas diferentes."
            },
            descriptionCRM: {
                en: `Build your custom CRM with all the fields and all the indicators that interest you for your business.
                    <br>Define your own sales pipeline with your custom workflow.`,
                fr: `Construisez votre CRM sur mesure avec tous les champs et tous les indicateurs qui vous intéressent pour votre métier.
                    <br>Définissez votre propre pipeline de ventes avec votre workflow personnalisé.`,
                es: `Construya su CRM personalizado con todos los campos y todos los indicadores que le interesan para su negocio.
                    <br>Defina su propio embudo de ventas con su flujo de trabajo personalizado.`
            },
            titleHR: {
                en: "Human Resources",
                fr: "Ressources Humaines",
                es: "Recursos Humanos"
            },
            descriptionHR: {
                en: "Create a tool in the image of your company for your recruitment process, onboarding, training, contractual documents, or regulatory deadlines.",
                fr: "Créez un outil à l'image de votre entreprise pour vos processus de recrutement, formations, documents contractuels, ou échéances règlementaires.",
                es: "Cree una herramienta a la imagen de su empresa para sus procesos de reclutamiento, integración, formaciones, documentos contractuales, o plazos reglamentarios."
            },
            titleProjects: {
                en: "Project follow-up",
                fr: "Suivi de projets",
                es: "Seguimiento de proyectos"
            },
            descriptionProjects: {
                en: `Manage your projects and their associated tasks by integrating all the parameters specific to your activity.
                    <br>Integrate your specifications, documentation, and deliverables into a simple and centralized tool.`,
                fr: `Gérez vos projets et leurs tâches associées en intégrant tous les paramètres spécifiques à votre activité.
                    <br>Intégrez vos cahiers des charges, documentations, et livrables dans un outil simple et centralisé.`,
                es: `Gestione sus proyectos y sus tareas asociadas integrando todos los parámetros específicos de su actividad.
                    <br>Integre sus especificaciones, documentación y entregables en una herramienta simple y centralizada.`
            },
            titleLegal: {
                en: "Legal",
                fr: "Légal",
                es: "Legal"
            },
            descriptionLegal: {
                en: "Manage the life cycle of your contracts, monitor their deadlines, their renewals, and follow in a workflow the evolutions to be brought in a collaborative way.",
                fr: "Gérez le cycle de vie de vos contrats, surveillez leurs échéances, leurs renouvellements, et suivez dans un workflow les évolutions à apporter de manière collaborative.",
                es: "Gestione el ciclo de vida de sus contratos, controle sus plazos, sus renovaciones, y siga en un flujo de trabajo las evoluciones a aportar de manera colaborativa."
            },
            titlePhone: {
                en: "Phone call tracking",
                fr: "Suivi des appels téléphoniques",
                es: "Seguimiento de llamadas telefónicas"
            },
            descriptionPhone: {
                en: "Does your company have to deal with customer requests over the phone? Not a problem, many of our clients already track their calls and their handling status via custom workflows.",
                fr: "Votre société doit traiter des demandes clients par téléphone ? Pas problème, plusieurs de nos clients suivent déjà leurs appels et leur état de traitement via des workflows sur mesure.",
                es: "¿Su empresa tiene que tratar las solicitudes de los clientes por teléfono? No hay problema, muchos de nuestros clientes ya siguen sus llamadas y su estado de tratamiento a través de flujos de trabajo personalizados."
            },
            titleRequests: {
                en: "Follow-up of requests",
                fr: "Suivi des demandes",
                es: "Seguimiento de solicitudes"
            },
            descriptionRequests: {
                en: "Purchasing requests, intervention requests, authorization requests, leave requests, requests for... whatever you want! Track all your internal requests through one simple tool.",
                fr: "Demandes d'achats, demandes d'interventions, demandes d'habilitation, demandes de congés, demandes de... ce que vous voulez ! Suivez toutes vos demandes internes via un seul outil simple.",
                es: "Solicitudes de compra, solicitudes de intervención, solicitudes de autorización, solicitudes de permiso, solicitudes de... ¡lo que quieras! Siga todas sus solicitudes internas a través de una sola herramienta simple."
            },
            titleSupport: {
                en: "Support, ticketing system",
                fr: "Support, gestion de tickets",
                es: "Soporte, sistema de tickets"
            },
            descriptionSupport: {
                en: "There are many support and ticket management applications on the market, but none will allow you as much flexibility as a custom design for your business.",
                fr: "Les applications de support et gestion de tickets sont nombreuses sur le marché, mais aucune ne vous permettra autant de flexibilité qu'une conception sur mesure pour votre métier.",
                es: "Hay muchas aplicaciones de soporte y gestión de tickets en el mercado, pero ninguna le permitirá tanta flexibilidad como un diseño personalizado para su negocio."
            },
            titleRecovery: {
                en: "amicable negotiation, litigation, recovery",
                fr: "négociation amiable, contentieux, recouvrement",
                es: "negociación amistosa, litigio, recuperación"
            },
            descriptionRecovery: {
                en: "Some of our clients use pickaform to manage their amicable negotiation, litigation and recovery workflows in order to have a cross-sectional view of all the files in progress.",
                fr: "Certains de nos clients utilisent pickaform pour gérer leurs workflows de négociation amiable, contentieux, et recouvrement afin d'avoir une vision transversale de tous les dossiers en cours.",
                es: "Algunos de nuestros clientes utilizan pickaform para gestionar sus flujos de trabajo de negociación amistosa, litigio y recuperación con el fin de tener una visión transversal de todos los expedientes en curso."
            },
            titleProduct: {
                en: "Product design",
                fr: "Conception de produit",
                es: "Diseño de producto"
            },
            descriptionProduct: {
                en: "If you design products, you have to collaborate with your teams on many different aspects, from design to marketing. Pickaform allows you to federate and share all the information you need.",
                fr: "Si vous concevez des produits, vous devez collaborer avec vos équipes sur plein d'aspects différents, du design jusqu'au marketing. Pickaform vous permet de féréder et partager toutes les informations dont vous avez besoin.",
                es: "Si diseña productos, debe colaborar con sus equipos en muchos aspectos diferentes, desde el diseño hasta el marketing. Pickaform le permite federar y compartir toda la información que necesita."
            },
            titleInventory: {
                en: "Inventory management",
                fr: "Gestion de l'inventaire",
                es: "Gestión de inventario"
            },
            descriptionInventory: {
                en: "Whether you manage a computer park, construction equipment, or something else, pickaform allows you to build a simple and tailor-made solution to track all your equipment.",
                fr: "Que vous gériez un parc informatique, du matériel de chantier, ou autre chose, pickaform permet de construire une solution simple et sur mesure pour traquer tous vos matériels.",
                es: "Ya sea que gestione un parque informático, equipos de construcción, u otra cosa, pickaform le permite construir una solución simple y a medida para rastrear todo su equipo."
            },
            titleDonation: {
                en: "Donation management",
                fr: "Gestion des dons",
                es: "Gestión de donaciones"
            },
            descriptionDonation: {
                en: "You are a large association and you need to organize yourself to monitor the donations collected and their allocation? We got you covered!",
                fr: "Vous êtes une association de taille importante et vous avez besoin de vous organiser pour suivre les dons collectés et leur attribution ? Nous vous couvrons !",
                es: "¿Es una asociación grande y necesita organizarse para hacer un seguimiento de las donaciones recogidas y su asignación? ¡Nosotros le cubrimos!"
            },
            titleAnything: {
                en: "Management of...",
                fr: "Gestion de...",
                es: "Gestión de..."
            },
            descriptionAnything: {
                en: "The examples above are given as an example, but you manage exactly what you want with pickaform, and the only limit is your imagination!",
                fr: "Les exemples ci-dessus sont donnés à titre d'exemple, mais vous gérez exactement ce que vous voulez avec pickaform, et la seule limite est votre imagination !",
                es: "Los ejemplos anteriores se dan a modo de ejemplo, pero usted gestiona exactamente lo que desea con pickaform, ¡y el único límite es su imaginación!"
            },
            titleBookDemo: {
                en: `Not convinced?`,
                fr: `Pas convaincu ?`,
                es: `¿No estás convencido?`
            },
            subtitleBookDemo: {
                en: `Tell us about your project, and we'll show you how to make it happen in <span class="text-highlight" style="background-color: #00aaee">20 minutes!</span>`,
                fr: `Expliquez-nous votre projet, et on vous montre en <span class="text-highlight" style="background-color: #00aaee">20 minutes</span> comment le réaliser !`,
                es: `¡Cuéntenos sobre su proyecto, y le mostraremos cómo hacerlo realidad en <span class="text-highlight" style="background-color: #00aaee">20 minutos!</span>`
            },
            titleVideos: {
                en: `Pickaform in action`,
                fr: `Pickaform en action`,
                es: `Pickaform en acción`
            },
            subtitleVideos: {
                en: `See directly how to build and use applications with workflows, without coding`,
                fr: `Voyez directement comment construire et utiliser des applications avec workflows, sans coder`,
                es: `Vea directamente cómo construir y utilizar aplicaciones con flujos de trabajo, sin codificación`
            },
            titleAppFromTemplate: {
                en: "Creating an application from a template",
                fr: "Créer une application à partir d'un modèle",
                es: "Crear una aplicación a partir de una plantilla"
            },
            descriptionAppFromTemplate: {
                en: "Download an application in 1 click to your workspace and then modify it at will to adapt it to your needs!",
                fr: "Téléchargez une application en 1 clic sur votre espace de travail et modifiez-là ensuite à volonté pour l'adapter à vos besoins !",
                es: "¡Descargue una aplicación en 1 clic en su espacio de trabajo y luego modifíquela a voluntad para adaptarla a sus necesidades!"
            },
            titleAppFromXLS: {
                en: "Creating an application from an XLS file",
                fr: "Créer une application à partir d'un fichier XLS",
                es: "Crear una aplicación a partir de un archivo XLS"
            },
            descriptionAppFromXLS: {
                en: "Import your Excel or CSV file and instantly transform it into a collaborative and secure application.",
                fr: "Importez votre fichier Excel ou CSV et transformez-le instantanément en application collaborative et sécurisée.",
                es: "Importe su archivo Excel o CSV y transformelo instantáneamente en una aplicación colaborativa y segura."
            },
            titleFormDesigner: {
                en: "Discovering the form designer",
                fr: "Découvrir l'éditeur de formulaire",
                es: "Descubrir el editor de formularios"
            },
            descriptionFormDesigner: {
                en: "Modify your forms, give them an ergonomic and efficient layout, and make your users happy!",
                fr: "Modifiez vos formulaires, offrez leur une mise en page ergonomique et efficace, et rendez vos utilisateurs heureux !",
                es: "¡Modifique sus formularios, déles un diseño ergonómico y eficiente, y haga felices a sus usuarios!"
            },
            titleWorkflow: {
                en: "Discovering the workflow",
                fr: "Découvrir le workflow",
                es: "Descubrir el flujo de trabajo"
            },
            descriptionWorkflow: {
                en: "Save your employees time by streamlining the processing of your files, business, projects, recruitment, expense reports, purchase requests, etc.",
                fr: "Faites gagner du temps à vos collaborateurs en fluidifiant le traitement de vos dossiers, affaires, projets, recrutements, notes de frais, demandes d'achats, etc...",
                es: "Ahorre tiempo a sus empleados agilizando el tratamiento de sus expedientes, negocios, proyectos, reclutamientos, notas de gastos, solicitudes de compra, etc."
            },
            titleWorkflow3mn: {
                en: "Creating a workflow in 3 minutes",
                fr: "Créer un workflow en 3 minutes",
                es: "Crear un flujo de trabajo en 3 minutos"
            },
            descriptionWorkflow3mn: {
                en: "Pickaform is the simplest platform in the world for creating your personalized workflows: guaranteed return on investment!",
                fr: "Pickaform est la plateforme la plus simple au monde pour créer vos workflows personnalisés: retour sur investissement garanti !",
                es: "Pickaform es la plataforma más simple del mundo para crear sus flujos de trabajo personalizados: ¡retorno de inversión garantizado!"
            },
            titleView: {
                en: "Creating a view for your data",
                fr: "Créer une vue pour vos données",
                es: "Crear una vista para sus datos"
            },
            descriptionView: {
                en: "Organize your data as you see fit thanks to pickaform's ergonomic views: sort, filter, group, and aggregate in just a few clicks!",
                fr: "Organisez vos données comme bon vous semble grâce aux vues ergonomiques de pickaform: triez, filtrez, regroupez, et aggrégez en quelques clics !",
                es: "¡Organice sus datos como desee gracias a las vistas ergonómicas de pickaform: ordene, filtre, agrupe y agregue en solo unos clics!"
            }
        })

        return createBlock({
            id: id,
            target,
            layout: "vertical",
            alignItems: "center",

            items: [
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle")
                }),
                kiss.templates.screenshot("workflow - contrat - pickaform.webp"),

                // CRM
                kiss.templates.feature({
                    title: "CRM",
                    description: t("descriptionCRM"),
                    screenshot: "example - CRM - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // HR
                kiss.templates.feature({
                    title: t("titleHR"),
                    description: t("descriptionHR"),
                    screenshot: "example - HR onboarding - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // PROJECTS
                kiss.templates.feature({
                    title: t("titleProjects"),
                    description: t("descriptionProjects"),
                    screenshot: "example - project management - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // LEGAL
                kiss.templates.feature({
                    title: t("titleLegal"),
                    description: t("descriptionLegal"),
                    screenshot: "example - Legal contract - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // PHONE
                kiss.templates.feature({
                    title: t("titlePhone"),
                    description: t("descriptionPhone"),
                    screenshot: "workflows-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // REQUESTS
                kiss.templates.feature({
                    title: t("titleRequests"),
                    description: t("descriptionRequests"),
                    screenshot: "example - purchase request - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // SUPPORT
                kiss.templates.feature({
                    title: t("titleSupport"),
                    description: t("descriptionSupport"),
                    screenshot: "a la carte form features - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // RECOVERY
                kiss.templates.feature({
                    title: t("titleRecovery"),
                    description: t("descriptionRecovery"),
                    screenshot: "navigate through your data with tabs - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // INVENTORY
                kiss.templates.feature({
                    title: t("titleInventory"),
                    description: t("descriptionInventory"),
                    screenshot: "example - inventory - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // PRODUCT
                kiss.templates.feature({
                    title: t("titleProduct"),
                    description: t("descriptionProduct"),
                    screenshot: "example - product design - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // DONATION
                kiss.templates.feature({
                    title: t("titleDonation"),
                    description: t("descriptionDonation"),
                    screenshot: "example - donation - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // ANYTHING
                kiss.templates.feature({
                    title: t("titleAnything"),
                    description: t("descriptionAnything"),
                    screenshot: "example - midjourney collection - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),


                // SAMPLES VIDEOS
                kiss.templates.title({
                    title: t("titleVideos"),
                    subtitle: t("subtitleVideos")
                }),

                {
                    class: "feature-top-separator"
                },

                // Block containing videos
                {
                    class: "feature-details-container",
                    items: [{
                        class: "feature-details-container-column",
                        items: [
                            // Creating an app from a template
                            kiss.templates.featureVideo({
                                title: t("titleAppFromTemplate"),
                                description: t("descriptionAppFromTemplate"),
                                screenshot: "creating an application from a template - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=3joHKZOH_zA"
                            }),
                            // Creating an app from a template
                            kiss.templates.featureVideo({
                                title: t("titleAppFromXLS"),
                                description: t("descriptionAppFromXLS"),
                                screenshot: "creating an application from an XLS file - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=KS7nOiDW9eE"
                            }),
                            // Discovering the form designer
                            kiss.templates.featureVideo({
                                title: t("titleFormDesigner"),
                                description: t("descriptionFormDesigner"),
                                screenshot: "discovering the form designer - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=T992n1m_bII"
                            }),
                            // Discovering the workflow
                            kiss.templates.featureVideo({
                                title: t("titleWorkflow"),
                                description: t("descriptionWorkflow"),
                                screenshot: "discovering the workflow - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=As992YkHbu8"
                            }),
                            // Creating a workflow in 3mn
                            kiss.templates.featureVideo({
                                title: t("titleWorkflow3mn"),
                                description: t("descriptionWorkflow3mn"),
                                screenshot: "creating a workflow - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=hCZ5gbu7gMs"
                            }),
                            // Creating a view
                            kiss.templates.featureVideo({
                                title: t("titleView"),
                                description: t("descriptionView"),
                                screenshot: "creating a view - pickaform.webp",
                                video: "https://www.youtube.com/watch?v=3ALIi2OS5eQ"
                            })
                        ]
                    }]
                },                

                // BOOK A DEMO
                kiss.templates.title({
                    title: t("titleBookDemo"),
                    subtitle: t("subtitleBookDemo")
                }),

                // CONTACT BUTTON
                kiss.templates.buttonCTA(t("bookDemo"), "booking"),

                {
                    class: "feature-top-separator",
                    margin: "10vh 0 0 0"
                }
            ],

            events: {
                click: (event) => {
                    if (event.target.parentNode.classList.contains("feature-CTA")) {
                        log("CTA")
                    }
                }
            },

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