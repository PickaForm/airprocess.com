/**
 * Assigns an animation to an element when it is in the viewport
 * 
 * @param {string} className 
 * @param {string} animationName 
 */
function animate(className, animationName) {
    const animatedElements = document.querySelectorAll('.' + className)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__' + animationName)
            entry.target.style.visibility = "visible"
            observer.unobserve(entry.target)
        }
        })
    }, {
        threshold: 0.1 // % of the element that needs to be in the viewport
    })

    animatedElements.forEach(el => {
        observer.observe(el)
    })
}

function animateElements() {
    animate("title", "fadeInUp")
    animate("subtitle", "fadeInUp")
    animate("screenshot", "zoomIn")

    // Features
    animate("feature-title", "fadeInUp")
    animate("feature-description", "fadeInUp")

    animate("feature-screenshot-right", "slideInLeft")
    animate("feature-screenshot-left", "slideInRight")

    // Feature details
    animate("feature-details-screenshot", "zoomIn")
    animate("feature-details-description", "fadeInUp")

    // Pricing
    animate("pricing-plan", "zoomIn")
    animate("pricing-faq", "fadeInUp")
}

;// Kiss init
kiss.db.mode = "memory"
kiss.language.get()

// Dark theme between 22h and 6h
// kiss.theme.set({
//     color: (new Date().getHours() <= 6 || new Date().getHours() >= 22) ? "dark" : "light"
// })
kiss.theme.set({
    color: "dark"
})

// Paths
kiss.global.path = `https://${window.location.host}`
kiss.global.pathImg = "./resources/img"
kiss.global.pathPickaform = `https://app.pickaform.com`

// Blog
kiss.global.blogEndPoint = "https://app.pickaform.com/command/blog"
kiss.global.blogModelId = "0187ed51-d3a5-70ea-869c-6c538d786fb7"
kiss.global.blogPostTitle = "y9yVRPEQ"
kiss.global.blogPostDescription = "BedquzD8"
kiss.global.blogPostPublicationDate = "floopJiS"
kiss.global.blogPostPublished = "rhI4E1iH"

// Contact
kiss.global.contactModelId = "0187b40b-0061-7f65-af86-982a361afcf3"

// AI Art
kiss.global.artEndPoint = "https://beta.pickaform.com/command/product"
kiss.global.artModelId = "01889cf0-5878-7352-93b5-3a0fb88c852f"
kiss.global.artTitle = "pJZ5QvWL"
kiss.global.artPulished = "DgllE0KD"

;/**
 * Global functions for translation
 */

// Temporary fix for non EN-FR-ES languages
const languages = ["en", "fr", "es"]
if (!languages.includes(kiss.language.current)) kiss.language.current = "en"

const t = (textId) => `<span class="localized" id="${textId}">${txtTitleCase(textId)}</span>`
const translateByPage = (textId, id = "") => `<span class="localized" id="${id + "-" + textId}">${txtTitleCase(id + "-" + textId)}</span>`

/**
 * Define texts for a specific page
 * 
 * @param {string} pageId 
 * @param {object[]} texts 
 * @returns 
 */
const defineTexts = (pageId, texts) => {
    let mappedTexts = {}
    Object.keys(texts).forEach(key => mappedTexts[pageId + "-" + key] = texts[key])
    kiss.app.defineTexts(mappedTexts)

    const closure = (pageId) => {
        return (textId) => {
            return translateByPage(textId, pageId)
        }
    }
    return closure(pageId)
}

/**
 * Translate all localized elements of a page
 * 
 * @param {string} language 
 */
function translateTo(language) {
    kiss.language.current = language
    const itemsToTranslate = this.querySelectorAll(".localized")
    
    itemsToTranslate.forEach(item => {
        const textId = item.getAttribute("id")
        const newText = txtTitleCase(textId)
        item.innerHTML = newText
    })
}

/**
 * Translate navbar, content, footer
 */
function translate() {
    let newLanguage = getNextLanguage()
    kiss.language.current = newLanguage
    localStorage.setItem("config-language", newLanguage)

    // Translate navbar, footer, content
    $("navbar").translateTo(newLanguage)
    $("footer").translateTo(newLanguage)
    const currentContent = kiss.router.getRoute().content
    $(currentContent).translateTo(newLanguage)

    publish("EVT_LANGUAGE", {
        language: getNextLanguage()
    })    
}

/**
 * Get the next available language
 */
function getNextLanguage() {
    const currentIndex = languages.indexOf(kiss.language.current)
    const nextIndex = (currentIndex + 1) % languages.length
    return languages[nextIndex]
}

;kiss.app.defineView({
    id: "artworks",
    meta: {
        url: {
            en: "https://pickaform.fr/en/artworks",
            fr: "https://pickaform.fr/fr/artworks",
            es: "https://pickaform.fr/es/artworks",
        },
        title: {
            en: "Pickaform | Midjourney integration",
            fr: "Pickaform | Integration Midjourney",
            es: "Pickaform | Integración Midjourney"
        },
        description: {
            en: `Get Inspired by our AI Art Collection.`,
            fr: `Laissez-vous inspirer par notre collection d'art IA.`,
            es: `Déjate inspirar por nuestra colección de arte de IA.`
        }
    },    
    renderer: function (id, target) {

        const t = defineTexts(id, {
            title: {
                en: `Get Inspired by our AI Art Collection`,
                fr: `Laissez-vous inspirer par notre collection d'art IA`,
                es: `Déjate inspirar por nuestra colección de arte de IA`
            },
            subtitle: {
                en: "We used pickaform to streamline the process of creating Midjourney images",
                fr: "Nous avons utilisé pickaform pour rationaliser le processus de création d'images Midjourney",
                es: "Utilizamos pickaform para agilizar el proceso de creación de imágenes de Midjourney"
            },
            titleArtworks: {
                en: "Midjourney ++",
                fr: "Midjourney ++",
                es: "Midjourney ++"
            },
            descriptionArtworks: {
                en: `You can prompt your images from Pickaform.
                    The images are directly stored in a database.
                    You can find all your original prompts and your images are classified and searchable as in a real database.`,
                fr: `Vous pouvez prompter vos images depuis Pickaform.
                    Les images sont directement stockées dans une base de données.
                    Vous pouvez retrouver tous vos prompts d'origine et vos images sont classées et recherchables comme avec une vraie base de données.`,
                es: `Puede solicitar sus imágenes desde Pickaform.
                    Las imágenes se almacenan directamente en una base de datos.
                    Puede encontrar todos sus prompts originales y sus imágenes están clasificadas y son buscables como en una base de datos real.`
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demo`
            },
            searchTerm: {
                en: `Search`,
                fr: `Rechercher`,
                es: `Buscar`
            }
        })

        return createBlock({
            id: id,
            target,
            layout: "vertical",
            alignItems: "center",
            overflowY: "auto",

            items: [
                // Header
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle")
                }),

                // Screenshot
                kiss.templates.feature({
                    title: t("titleArtworks"),
                    description: t("descriptionArtworks"),
                    screenshot: "example - midjourney collection - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                // Search field
                {
                    type: "text",
                    width: "256px",
                    fieldWidth: "100%",
                    fieldHeight: "4vh",
                    fontSize: "2vh",
                    label: t("searchTerm"),
                    events: {
                        change() {
                            $(id).search(this.getValue())
                        }
                    }
                },
                // Pager
                {
                    id: "artworks-pager",
                    class: "blog-pager"
                },
                // List of artworks
                {
                    id: "artworks-list",
                    class: "artworks-list"
                }
            ],

            events: {
                click: (event) => {
                    if (kiss.tools.isMobile()) return // Don't zoom on mobile phones
                    
                    let div = event.target.closest("div")
                    if (!div) return

                    if (div.classList.contains("artwork")) {
                        const filename = event.target.src.replace(".256x256", "")
                        const tags = event.target.alt

                        createPanel({
                            modal: true,
                            header: false,
                            width: "calc(100% - 20px)",
                            maxWidth: 1350,
                            height: "calc(100% - 20px)",
                            align: "center",
                            verticalAlign: "center",
                            layout: "vertical",
                            backgroundColor: "var(--body-alt)",
                            classes: {
                                "panel-body": "wave-2"
                            },
                            items: [{
                                type: "html",
                                html: /*html*/ `
                                <img class="artwork-image-preview" src="${filename}"/>
                                <h2 class="artwork-title">${tags}</h2>
                                `
                            }],
                            events: {
                                click: function () {
                                    this.close()
                                }
                            }
                        }).render()
                    }
                }
            },

            methods: {
                async load() {
                    this.getArtworks(0, 10)
                },

                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo,

                async getArtworks(skip, limit) {
                    const response = await kiss.ajax.request({
                        url: kiss.global.artEndPoint + "/list",
                        method: "post",
                        body: JSON.stringify({
                            modelId: kiss.global.artModelId,
                            filterSyntax: "mongo",
                            filter: {
                                [kiss.global.artPulished]: true
                            },
                            sortSyntax: "mongo",
                            sort: {
                                createdAt: -1 // Sort by creation date
                            },
                            skip,
                            limit
                        })
                    })

                    $("artworks-list").setInnerHtml($(id).toHtml(response))
                    $(id).createPager(response.totalCount, skip, response.limit)
                },

                async search(term, skip = 0, limit = 6) {
                    const response = await kiss.ajax.request({
                        url: kiss.global.artEndPoint + "/list",
                        method: "post",
                        showLoading: true,
                        body: JSON.stringify({
                            modelId: kiss.global.artModelId,
                            skip,
                            limit,
                            sortSyntax: "mongo",
                            sort: {
                                createdAt: -1 // Sort by publication date
                            },
                            filterSyntax: "normalized",
                            filter: {
                                type: "group",
                                operator: "or",
                                filters: [
                                    // Search in title
                                    {
                                        type: "filter",
                                        fieldId: kiss.global.artTitle,
                                        operator: "contains",
                                        value: term
                                    }
                                ]
                            }
                        })
                    })

                    $("artworks-list").setInnerHtml($(id).toHtml(response))
                    $(id).createPager(response.totalCount, response.skip, response.limit, term)
                },

                toHtml(response) {
                    let items = response.products
                        .filter(product => product.published !== false)
                        .map(artwork => {
                            return artwork.images.map(image => {
                                const imageId = (image.filename.split("-").pop()).split(".")[0]
                                return {
                                    id: artwork.id + "-" + imageId,
                                    title: artwork.title,
                                    description: artwork.description,
                                    tags: artwork.tags.join(", "),
                                    image: image.thumbnails.m.path //image.path
                                }
                            })
                        }).flat()
                    return items.map($(id).renderArtwork).join("")
                },

                renderArtwork(artwork) {
                    return `
                    <div id="${artwork.id}" class="artwork">
                        <img loading="lazy" class="artwork-image" src="${artwork.image}" alt="${artwork.tags}"></img>
                        <p class="artwork-tags">${artwork.tags}</p>
                    </div>`
                },

                createPager(count, skip, limit, searchTerm) {
                    const searchFunction = $(id).search
                    const getItemsFunction = $(id).getArtworks
                    const pagerButtons = kiss.templates.pager(count, skip, limit, searchTerm, searchFunction, getItemsFunction)
                    $("artworks-pager").setItems(pagerButtons)
                }
            }
        })
    }
})

;kiss.app.defineView({
    id: "blog",
    renderer: function (id, target) {
        const postEndpoint = kiss.global.blogEndPoint + "/list"

        const t = defineTexts(id, {
            title: {
                en: `Your resources to
                <span class="text-highlight" style="background-color: #00aaee">save time</span>`,
                fr: `Vos ressources pour
                <br><span class="text-highlight" style="background-color: #00aaee">gagner du temps</span>`,
                es: `Sus recursos para
                <br><span class="text-highlight" style="background-color: #00aaee">ahorrar tiempo</span>`
            },
            subtitle: {
                en: "News, stories and tips on project management, collaboration & productivity",
                fr: "News et conseils sur la gestion de projet, la collaboration et la productivité",
                es: "Noticias, historias y consejos sobre gestión de proyectos, colaboración y productividad"
            }
        })

        return createBlock({
            id: id,
            target,
            layout: "vertical",
            alignItems: "center",
            overflowY: "auto",

            items: [
                // Blog header
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle")
                }),
                // Search field
                {
                    type: "text",
                    width: "256px",
                    fieldWidth: "100%",
                    fieldHeight: "4vh",
                    fontSize: "2vh",
                    placeholder: "Search",
                    events: {
                        change() {
                            $(id).search(this.getValue())
                        }
                    }
                },
                // List of posts
                {
                    id: "blog-content",
                    class: "blog-content"
                },
                // Pager
                {
                    id: "blog-pager",
                    class: "blog-pager"
                }
            ],

            methods: {
                async load() {
                    this.getPosts(0, 6)
                },

                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo,

                async getPosts(skip, limit) {
                    const response = await kiss.ajax.request({
                        url: postEndpoint,
                        method: "post",
                        body: JSON.stringify({
                            modelId: kiss.global.blogModelId,
                            filterSyntax: "mongo",
                            filter: {
                                [kiss.global.blogPostPublished]: true
                            },
                            sortSyntax: "mongo",
                            sort: {
                                [kiss.global.blogPostPublicationDate]: -1
                            }, // Sort by publication date
                            skip,
                            limit
                        })
                    })

                    const items = response.posts.map(kiss.templates.blogPostEntry)

                    $("blog-content").setItems(items)
                    $(id).createPager(response.totalCount, skip, response.limit)
                },

                async search(term, skip = 0, limit = 6) {
                    const response = await kiss.ajax.request({
                        url: postEndpoint,
                        method: "post",
                        showLoading: true,
                        body: JSON.stringify({
                            modelId: kiss.global.blogModelId,
                            skip,
                            limit,
                            sortSyntax: "mongo",
                            sort: {
                                [kiss.global.blogPostPublicationDate]: -1
                            }, // Sort by publication date
                            filterSyntax: "normalized",
                            filter: {
                                type: "group",
                                operator: "or",
                                filters: [
                                    // Search in title
                                    {
                                        type: "filter",
                                        fieldId: kiss.global.blogPostTitle,
                                        operator: "contains",
                                        value: term
                                    },
                                    // Search in description
                                    {
                                        type: "filter",
                                        fieldId: kiss.global.blogPostDescription,
                                        operator: "contains",
                                        value: term
                                    }
                                ]
                            }
                        })
                    })

                    const items = response.posts.map(kiss.templates.blogPostEntry)

                    $("blog-content").setItems(items)
                    $(id).createPager(response.totalCount, response.skip, response.limit, term)
                },

                createPager(count, skip, limit, searchTerm) {
                    const searchFunction = $(id).search
                    const getItemsFunction = $(id).getPosts
                    const pagerButtons = kiss.templates.pager(count, skip, limit, searchTerm, searchFunction, getItemsFunction)
                    $("blog-pager").setItems(pagerButtons)
                }
            }
        })
    }
})

;kiss.app.defineView({
    id: "blogPost",
    renderer: function (id, target) {
        const postEndpoint = kiss.global.blogEndPoint + "/get"

        return createBlock({
            id: id,
            target,
            layout: "vertical",
            alignItems: "center",
            overflowY: "auto",

            items: [{
                    id: "blog-post-banner",
                    class: "blog-post-banner",
                },
                {
                    id: "blog-post-content",
                    class: "blog-post-content",
                    layout: "vertical",
                    alignItems: "center"
                }
            ],

            methods: {
                async load() {
                    const postId = kiss.context.postId
                    const post = await kiss.ajax.request({
                        url: postEndpoint,
                        method: "post",
                        body: JSON.stringify({
                            modelId: kiss.global.blogModelId,
                            postId
                        })
                    })

                    // Load marked prior to parsing post's body
                    await kiss.loader.loadScript("./resources/lib/marked/marked.min")
                    post.Body = marked(post.Body)

                    $("blog-post-banner").setItems([kiss.templates.blogPostBanner(post)])
                    $("blog-post-content").setItems([kiss.templates.blogPost(post)])
                }
            }
        })
    }
})

;kiss.app.defineView({
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

;kiss.app.defineView({
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

;kiss.app.defineView({
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

;kiss.app.defineView({
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

;kiss.app.defineView({
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

;kiss.app.defineView({
    id: "pricing",
    meta: {
        url: {
            en: "https://pickaform.fr/en/pricing",
            fr: "https://pickaform.fr/fr/pricing",
            es: "https://pickaform.fr/es/pricing"
        },
        title: {
            en: "Pricing | Pickaform",
            fr: "Tarifs | Pickaform",
            es: "Precios | Pickaform"
        },
        description: {
            en: `Get the Right Plan for Your Business Needs.`,
            fr: `Sélectionnez le plan adapté à vos besoins.`,
            es: `Elige el plan adecuado para tus necesidades empresariales.`
        }
    },    
    renderer: function (id, target) {
        const t = defineTexts(id, {
            title: {
                en: "Get the Right Plan for<br>Your Business Needs",
                fr: "Sélectionnez le plan<br>adapté à vos besoins",
                es: "Elige el plan adecuado<br>para tus necesidades empresariales"
            },
            subtitle: {
                en: "Register and start your 14 days free trial.",
                fr: "Enregistrez vous et démarrez l'essai de 14 jours.",
                es: "Regístrate y comienza tu prueba gratuita de 14 días."
            },
            nocoders: {
                en: `<br>
                <br>
                You are a <span class="text-highlight" style="background-color: #00aaee">Freelance NoCoder</span> or a <span class="text-highlight" style="background-color: #a1ed00">NoCode Agency</span>?
                <br>Claim your special offer by scheduling an appointment <a href="https://calendly.com/pickaform/pickaform-live-demo">here</a>`,
                fr: `<br>
                <br>
                Vous êtes un <span class="text-highlight" style="background-color: #00aaee">NoCodeur Freelance</span> ou une <span class="text-highlight" style="background-color: #a1ed00">Agence NoCode</span> ?
                <br>Demandez votre offre spéciale en prenant RDV <a href="https://calendly.com/pickaform/pickaform-live-demo">ici</a>`,
                es: `<br>
                <br>
                ¿Eres un <span class="text-highlight" style="background-color: #00aaee">NoCoder Freelance</span> o una <span class="text-highlight" style="background-color: #a1ed00">Agencia NoCode</span>?
                <br>Reclama tu oferta especial programando una cita <a href="https://calendly.com/pickaform/pickaform-live-demo">aquí</a>`
            },
            unlimitedForms: {
                en: "unlimited forms",
                fr: "formulaires illimités",
                es: "formularios ilimitados"
            },
            unlimitedWorkflows: {
                en: "unlimited workflows",
                fr: "workflows illimités",
                es: "flujos de trabajo ilimitados"
            },
            userPerMonth: {
                en: "user /<br>month",
                fr: "utilisateur /<br>mois",
                es: "usuario /<br>mes"
            },
            "Get started": {
                en: "Get started",
                fr: "Inscription",
                es: "Inscripción"
            },
            enterprisePlan: {
                en: `We have many other plans beyond that + on-premise versions beyond 100 users + a legacy HCL Domino version.
                <br>
                Please contact us for more informations: contact@pickaform.com`,
                fr: `Nous avons des offres au-delà + des versions on-premise à partir de 100 utilisateurs + une version compatible HCL Domino.
                <br>
                Contactez-nous pour plus d'informations : contact@pickaform.com`,
                es: `Tenemos muchas otras ofertas más allá de eso + versiones on-premise a partir de 100 usuarios + una versión HCL Domino heredada.
                <br>
                Contáctenos para obtener más información: contact@pickaform.`
            },
            contactUs: {
                en: "Contact us",
                fr: "Contactez-nous",
                es: "Contáctenos"
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demo`
            },
            faq0: {
                en: "Why choose pickaform?",
                fr: "Pourquoi choisir pickaform ?",
                es: "¿Por qué elegir pickaform?"
            },
            answer0: {
                en: `Pickaform is not a cloud software born from a simple idea and created quickly to surf the wave of no-code.
                The story begins in 2009, long before "no-code" existed, and the design of the platform was 100% guided by the use of its users.
                In 2019, ten years after the very first version, the platform is dedicated "IBM CHAMPION" in the category of Collaboration software.
                From the outset, the platform has kept the same philosophy:
                <br>• easy-to-make forms
                <br>• a la carte functionalities integrated into forms
                <br>• flexible and quick-to-implement workflow feature
                <br>• simplicity
                <br>Today, large companies use Pickaform on a daily basis for all types of use, and 95% of our users who adopt the platform use it for several years, guaranteeing maximum ROI.`,
                fr: `Pickaform n'est pas un logiciel cloud issu d'une simple idée et créé rapidement pour surfer sur la vague du no-code.
                L'histoire commence en 2009, bien avant que le "no-code" existe, et la conception de la plateforme a été guidée à 100% par l'usage de ses utilisateurs.
                En 2019, soit dix ans après la toute première version, la plateforme est consacrée "IBM CHAMPION" dans la categorie des logiciels de Collaboration.
                Depuis l'origine, la plateforme a conservé la même philosophie :
                <br>• formulaires simples à fabriquer
                <br>• fonctionnalités à la carte intégrées aux formulaires
                <br>• fonctionnalité de workflow flexible et rapide à mettre en place
                <br>• simplicité
                <br>Aujourd'hui, de grandes entreprises utilisent Pickaform au quotidien pour tous types d'usages, et 95% de nos utilisateurs qui adoptent la plateforme l'utilisent plusieurs années, garantissant un ROI maximal.`,
                es: `Pickaform no es un software en la nube nacido de una idea simple y creado rápidamente para surfear la ola del no-code.
                La historia comienza en 2009, mucho antes de que existiera el "no-code", y el diseño de la plataforma fue 100% guiado por el uso de sus usuarios.
                En 2019, diez años después de la primera versión, la plataforma es consagrada "IBM CHAMPION" en la categoría de software de colaboración.
                Desde el principio, la plataforma ha mantenido la misma filosofía:
                <br>• formularios fáciles de hacer
                <br>• funcionalidades a la carta integradas en los formularios
                <br>• característica de flujo de trabajo flexible y rápida de implementar
                <br>• simplicidad
                <br>Hoy en día, grandes empresas utilizan Pickaform a diario para todo tipo de usos, y el 95% de nuestros usuarios que adoptan la plataforma la utilizan durante varios años, garantizando un ROI máximo`
            },
            faq1: {
                en: "Who uses Pickaform?",
                fr: "A qui s'adresse Pickaform ?",
                es: "¿Quién usa Pickaform?"
            },
            answer1: {
                en: `Pickaform is made for: companies, associations, the public sector, digital companies who want to accelerate their projects and deliver faster, no-coders & makers who are looking to work with larger clients.
                More generally, pickaform is useful for any person or organization wishing to organize their data and/or set up business processes to streamline collaboration.`,
                fr: `Pickaform est fait pour : les entreprises, les associations, le secteur public, les entreprises du numérique qui veulent accélérer leurs projets et livrer plus vite, les no-coders & makers qui cherchent à travailler avec des clients plus gros.
                Plus généralement, pickaform est utile à toute personne ou organisation souhaitant organiser ses données et/ou mettre en place des processus métier pour fluidifier la collaboration.`,
                es: `Pickaform está hecho para: empresas, asociaciones, el sector público, empresas digitales que desean acelerar sus proyectos y entregar más rápido, no-coders y makers que buscan trabajar con clientes más grandes.
                Más generalmente, pickaform es útil para cualquier persona u organización que desee organizar sus datos y/o establecer procesos comerciales para agilizar la colaboración.`
            },
            faq2: {
                en: "How can I take a subscription?",
                fr: "Comment puis-je prendre un abonnement ?",
                es: "¿Cómo puedo suscribirme?"
            },
            answer2: {
                en: `First, sign up and enjoy your free trial including up to 20 users!
                If you need to upgrade before the end of your free period, you'll do it directly from your Pickaform account management.`,
                fr: `Inscrivez-vous et profitez d'abord de votre période d'essai, incluant jusqu'à 20 utilisateurs !
                Si vous souhaitez changer d'offre avant la fin de votre essai, vous pourrez le faire directement dans Pickaform depuis votre rubrique "Compte".`,
                es: `Primero, regístrese y disfrute de su período de prueba gratuito, incluyendo hasta 20 usuarios.
                Si necesita actualizar antes de que finalice su período gratuito, lo hará directamente desde la gestión de su cuenta de Pickaform.`
            },
            faq3: {
                en: "When will I be able to stop my subscription?",
                fr: "Quand pourrai-je stopper mon abonnement ?",
                es: "¿Cuándo podré cancelar mi suscripción?"
            },
            answer3: {
                en: `There is no constraint. You can stop at anytime.`,
                fr: `Il n'y a aucun engagement de durée. Vous pouvez stopper votre abonnement à tout moment.`,
                es: `No hay compromiso de duración. Puede cancelar su suscripción en cualquier momento.`
            },
            faq4: {
                en: "What will happen if I exceed a quota?",
                fr: "Que se passera-t-il si je dépasse un quota ?",
                es: "¿Qué sucederá si excedo un límite?"
            },
            answer4: {
                en: `You'll have a message in the application, inviting you to upgrade or to clean your unused data or inactive users.`,
                fr: `Vous serez averti par un message dans l'application, vous invitant soit à prendre une offre supérieure, soit à faire un peu de ménage pour supprimer les utilisateurs inactifs.`,
                es: `Recibirá un mensaje en la aplicación, invitándole a actualizar o a limpiar sus datos no utilizados o usuarios inactivos.`
            },
            faq5: {
                en: "Will my data be secured?",
                fr: "Mes données seront-elles en sécurité ?",
                es: "¿Mis datos estarán seguros?"
            },
            answer5: {
                en: `Security and confidentiality is our major concern.
                We host data exclusively in France and not in the USA.
                The protocol https ensures that nobody can steal or exploit your data between your office and our servers, but you have to secure your password on your side!`,
                fr: `La sécurité et la confidentialité de vos données sont nos préoccupations majeures.  
                Nous hébergeons vos données exclusivement en France et non aux Etats-Unis.  
                Le protocole https garantit qu'aucune donnée ne peut être exploitée entre chez vous et nos serveurs.`,
                es: `La seguridad y la confidencialidad de sus datos son nuestras principales preocupaciones.
                Alojamos los datos exclusivamente en Francia y no en los Estados Unidos.
                El protocolo https garantiza que nadie pueda robar o explotar sus datos entre su oficina y nuestros servidores, ¡pero debe asegurar su contraseña de su lado!`
            },
            faq6: {
                en: "Who can see my data?",
                fr: "Qui peut voir mes données ?",
                es: "¿Quién puede ver mis datos?"
            },
            answer6: {
                en: `Only you.
                Each application you create generates a brand new database on our server, 100% dedicated to you, in order to have the best  possible separation between you and other customers. We are nearly alone to do this in a multi-tenancy architecture!
                Even the members of our team can't access your applications. No statistics are collected on your usage.`,
                fr: `Seulement vous.  
                Chacune de vos applications crée une nouvelle base de données qui vous est 100% dédiée, afin de garantir un cloisonnement et une étanchéité absolue avec les autres clients.  
                Même les membres de notre équipe ne peuvent pas accéder au contenu de vos applications. Aucune statistique n'est collectée sur votre usage.`,
                es: `Solo tú.
                Cada aplicación que creas genera una nueva base de datos en nuestro servidor, 100% dedicada a ti, para tener la mejor separación posible entre tú y otros clientes. ¡Casi somos los únicos en hacer esto en una arquitectura de multiinquilino!
                Incluso los miembros de nuestro equipo no pueden acceder a tus aplicaciones. No se recopilan estadísticas sobre tu uso.`,
            },
            faq7: {
                en: "It's expensive, isn't it?",
                fr: "C'est cher, non ?",
                es: "¿Es caro, no?"
            },
            answer7: {
                en: `On the contrary, it's not!
                First, you don't pay anything until you are convinced.
                On one hand, we perfectly know that on this kind of platform, very rich of many features, it takes time to evaluate everything we can do with it!
                On the other hand, our serious competitors sell their solution around 24€/user/month and up to 60€/user/month, where we can go down to 1€/user/month.
                To be clear, we have better prices if we are compared to product with similar features.`,
                fr: `Bien au contraire !  
                D'une part, vous ne payez rien tant que vous n'êtes pas convaincu.
                Nous savons parfaitement que sur ce type de plateforme riche en fonctionnalités, il faut un peu de temps avant de prendre la mesure de tout ce que l'on peut faire avec !
                D'autre part, nos concurrents sérieux proposent leur solution en moyenne à 24€/user/mois et jusqu'à 60€/user/mois, alors que notre tarif est dégressif jusqu'à 1€/user/mois.
                En clair, nous sommes imbattables sur le prix lorsque l'on est comparé à des produits de fonctionnalités similaires.`,
                es: `¡Al contrario, no lo es!
                En primer lugar, no pagas nada hasta que estés convencido.
                Por un lado, sabemos perfectamente que en este tipo de plataforma, muy rica en muchas características, se necesita tiempo para evaluar todo lo que podemos hacer con ella.
                Por otro lado, nuestros competidores serios venden su solución alrededor de 24€/usuario/mes y hasta 60€/usuario/mes, donde nosotros podemos bajar hasta 1€/usuario/mes.
                Para ser claros, tenemos mejores precios si nos comparamos con productos con características similares.`
            },
            faq8: {
                en: "How much data can I store on Pickaform?",
                fr: "A quel volume de données ai-je le droit ?",
                es: "¿Cuántos datos puedo almacenar en Pickaform?"
            },
            answer8: {
                en: `Pickaform allows you to attach files to your form data, but its goal is not to replace a file management or a virtual drive (like Google Drive, One Drive, DropBox ...), so, we calculated that an average volume of 100MB of attachments per user was sufficient for standard use of our platform. For example, this represents 2GB of data for 20 users.
                Contact us if you think your needs will exceed this usage. In that case, there is an option to connect your own storage compatible with S3 and store without any limit.`,
                fr: `Pickaform vous permet bien de joindre des fichiers à vos données de formulaire, mais sa fonction n'est pas de venir en remplacement d'une gestion de fichiers ou d'un drive (Google Drive, One Drive, DropBox...), aussi, nous avons calculé qu'un volume moyen de 100Mo de pièces jointes par utilisateur était suffisant pour un usage standard de notre plateforme. Cela représente 2Go de données pour 20 utilisateurs.
                Nous consulter si vous pensez que vos besoins dépasseront cet usage, vous pouvez connecter votre propre stockage compatible S3 et stocker sans aucune limite.`,
                es: `Pickaform le permite adjuntar archivos a sus datos de formulario, pero su objetivo no es reemplazar una gestión de archivos o una unidad virtual (como Google Drive, One Drive, DropBox ...), por lo que calculamos que un volumen promedio de 100 MB de archivos adjuntos por usuario era suficiente para el uso estándar de nuestra plataforma. Por ejemplo, esto representa 2 GB de datos para 20 usuarios.
                Contáctenos si cree que sus necesidades superarán este uso. En ese caso, hay una opción para conectar su propio almacenamiento compatible con S3 y almacenar sin ningún límite.`
            }
        })

        const plans = [{
                name: "Silver",
                users: 10,
                apps: 3,
                price: "15€",
                storage: "10 GB Storage",
                color: "#00aaee"
            },
            {
                name: "Gold",
                users: 20,
                apps: 5,
                price: "13€",
                storage: "20 GB Storage",
                color: "#8833ee"
            },
            {
                name: "Platinum",
                users: 50,
                apps: 10,
                price: "11€",
                storage: "50 GB Storage",
                color: "#ed3757"
            }
        ]

        return createBlock({
            id,
            target,
            layout: "vertical",
            alignItems: "center",

            items: [
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle") + t("nocoders"),
                }),

                // PRICING TABLE
                {
                    type: "html",
                    class: "pricing-table",
                    html: kiss.templates.pricingTable(plans, t)
                },

                // ENTERPRISE PLAN
                {
                    type: "html",
                    class: "pricing-enterprise",
                    html: t("enterprisePlan")
                },

                // CONTACT
                kiss.templates.buttonCTA(t("bookDemo"), "booking"),

                // FAQ
                {
                    class: "feature-top-separator"
                },
                {
                    class: "pricing-faq-container",
                    items: [
                        {
                            type: "html",
                            class: "pricing-faq-title",
                            html: "FAQ"
                        },
                        kiss.templates.pricingFAQ(t("faq0"), t("answer0")),
                        kiss.templates.pricingFAQ(t("faq1"), t("answer1")),
                        kiss.templates.pricingFAQ(t("faq2"), t("answer2")),
                        kiss.templates.pricingFAQ(t("faq3"), t("answer3")),
                        kiss.templates.pricingFAQ(t("faq4"), t("answer4")),
                        kiss.templates.pricingFAQ(t("faq5"), t("answer5")),
                        kiss.templates.pricingFAQ(t("faq6"), t("answer6")),
                        kiss.templates.pricingFAQ(t("faq7"), t("answer7")),
                        kiss.templates.pricingFAQ(t("faq8"), t("answer8"))
                    ]
                }
            ],

            events: {
                click: (event) => {
                    const target = event.target.closest("div")
                    if (target && target.classList.contains("pricing-plan-CTA")) {
                        document.location = kiss.global.pathPickaform + "/client/pickaform/index.html#ui=authentication-register"
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

;kiss.app.defineView({
    id: "product",
    meta: {
        url: {
            en: "https://pickaform.fr/en/product",
            fr: "https://pickaform.fr/fr/product",
            es: "https://pickaform.fr/es/product"
        },
        title: {
            en: "Product features | Pickaform",
            fr: "Fonctionnalités du produit | Pickaform",
            es: "Características del producto | Pickaform"
        },
        description: {
            en: `The full list of Pickaform product features. Combine no-code, workflows and AI to build the most flexible tools for your company!`,
            fr: `Liste des fonctionnalités du produit Pickaform. Combinez no-code, workflows et IA pour créer les outils les plus flexibles pour votre entreprise !`,
            es: `Lista completa de las características del producto Pickaform. ¡Combine no-code, flujos de trabajo e IA para crear las herramientas más flexibles para su empresa!`
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
                es: `Reservo una demo`
            },
            title: {
                en: `Super <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Really <span class="text-highlight" style="background-color: #a1ed00">powerful</span>`,
                fr: `Super <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Vraiment <span class="text-highlight" style="background-color: #a1ed00">puissant</span>`,
                es: `Súper <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Realmente <span class="text-highlight" style="background-color: #a1ed00">poderoso</span>`
            },
            subtitle: {
                en: "Create your own business tool and start saving time.",
                fr: "Créez votre outil métier sur mesure et commencez à gagner du temps.",
                es: "Cree su propia herramienta de negocio y comience a ahorrar tiempo."
            },
            titleForms: {
                en: "Flexible forms",
                fr: "Des formulaires flexibles",
                es: "Formularios flexibles"
            },
            descriptionForms: {
                en: "With our forms, you can collect simple or complex information and process it efficiently with your personalized workflows.",
                fr: "Avec nos formulaires, vous pouvez collecter des informations simples ou complexes et les traiter efficacement avec vos workflows personnalisés.",
                es: "Con nuestros formularios, puede recopilar información simple o compleja y procesarla de manera eficiente con sus flujos de trabajo personalizados."
            },
            titleViews: {
                en: "Define your views",
                fr: "Définissez vos vues",
                es: "Defina sus vistas"
            },
            descriptionViews: {
                en: "Configure how you want to see your data: choose your columns, filters, sort, group and create as many views as needed.",
                fr: "Configurez la façon dont vous souhaitez voir vos données : choisissez vos colonnes, filtres, triez, regroupez et créez autant de vues que nécessaire.",
                es: "Configure cómo desea ver sus datos: elija sus columnas, filtros, ordene, agrupe y cree tantas vistas como sea necesario."
            },
            titleWorkflows: {
                en: "Customize your workflows to fit your needs",
                fr: "Personnalisez vos workflows pour vos besoins",
                es: "Personalice sus flujos de trabajo para sus necesidades"
            },
            descriptionWorkflows: {
                en: "In a few minutes, you define the steps of the workflow, the actors and the possible decisions, and go!",
                fr: "En quelques minutes, vous définissez les étapes du workflow, les acteurs et les décisions possibles, et c'est parti !",
                es: "En unos minutos, define los pasos del flujo de trabajo, los actores y las decisiones posibles, ¡y listo!"
            },
            titleFormDesigner: {
                en: "Integrated form designer",
                fr: "Editeur de formulaire intégré",
                es: "Diseñador de formularios integrado"
            },
            descriptionFormDesigner: {
                en: "Directly improve the layout of your forms in a few clicks and drag&drop.",
                fr: "Améliorez directement la mise en page de vos formulaires en quelques clics et drag&drop.",
                es: "Mejore directamente el diseño de sus formularios en unos pocos clics y arrastrar y soltar."
            },
            titleFormFeatures: {
                en: "A la carte form features",
                fr: "Fonctionnalités à la carte",
                es: "Funcionalidades a la carta"
            },
            descriptionFormFeatures: {
                en: "Keep ergonomics simplified by activating only the features your users need.",
                fr: "Gardez une ergonomie simplifée en activant seulement les fonctionnalités dont vos utilisateurs ont besoin.",
                es: "Mantenga la ergonomía simplificada activando solo las funciones que necesitan sus usuarios."
            },
            titleCustomViews: {
                en: "Organize your work",
                fr: "Organisez votre travail",
                es: "Organice su trabajo"
            },
            descriptionCustomViews: {
                en: "Thanks to the custom views, you will be able to create your own structure to organize all your work in the best possible way.",
                fr: "Grâce aux vues personnalisées, vous pourrez créer votre propre structure pour organiser l'ensemble de votre travail de la meilleure façon possible.",
                es: "Gracias a las vistas personalizadas, podrá crear su propia estructura para organizar todo su trabajo de la mejor manera posible."
            },
            titleLeftNavigation: {
                en: "All data just a click away",
                fr: "Toutes les données à portée de clic",
                es: "Todos los datos a un clic de distancia"
            },
            descriptionLeftNavigation: {
                en: "The side navigation bar effectively condenses all the information you need, and each user only sees what is relevant to them.",
                fr: "La barre de navigation latérale condense efficacement toute l'information dont vous avez besoin, et chaque utilisateur ne voit que ce qui le concerne.",
                es: "La barra de navegación lateral condensa eficazmente toda la información que necesita, y cada usuario solo ve lo que le concierne."
            },
            titleTabsNavigation: {
                en: "Unless you like tabs?",
                fr: "A moins que vous aimiez les onglets ?",
                es: "¿A menos que te gusten las pestañas?"
            },
            descriptionTabsNavigation: {
                en: "We never impose your way of working: if you prefer the tabbed presentation, you just need 1 click.",
                fr: "On ne vous impose jamais votre manière de travailler : si vous préférez la présentation en onglet, c'est juste un clic.",
                es: "Nunca imponemos su forma de trabajar: si prefiere la presentación en pestañas, solo necesita 1 clic."
            },
            titleBookDemo: {
                en: `Not convinced?`,
                fr: `Pas convaincu ?`,
                es: `¿No estás convencido?`
            },
            subtitleBookDemo: {
                en: `Tell us about your project,<br>we show you<span class="text-highlight" style="background-color: #00aaee">in 20 minutes</span> how to make it happen.`,
                fr: `Expliquez-nous votre projet,<br>nous vous montrons<span class="text-highlight" style="background-color: #00aaee">en 20mn</span> comment le réaliser.`,
                es: `Cuéntenos sobre su proyecto,<br>le mostramos<span class="text-highlight" style="background-color: #00aaee">en 20 minutos</span> cómo hacerlo realidad.`
            },

            // Field types
            titleFieldTypes: {
                en: "24 field types to build your forms",
                fr: "24 types de champs pour vos formulaires",
                es: "24 tipos de campos para construir sus formularios"
            },
            descriptionFieldTypes: {
                en: "Creating rich forms requires a variety of field types.<br>We've got you covered!",
                fr: "La création de formulaires riches nécessite des types de champs variés.<br>Nous vous couvrons !",
                es: "Crear formularios ricos requiere una variedad de tipos de campos.<br>¡Te tenemos cubierto!"
            },
            // View features
            titleViewCreation: {
                en: "Many ways to organize your data",
                fr: "Plein de manières d'organiser vos données",
                es: "Muchas formas de organizar sus datos"
            },
            subtitleViewCreation: {
                en: "Creating views is a simple yet extremely powerful process for organizing all your data.",
                fr: "La création des vues est un processus simple mais extrêmement puissant pour organiser toutes vos données.",
                es: "Crear vistas es un proceso simple pero extremadamente poderoso para organizar todos sus datos."
            },

            // Field types
            text: {
                en: "text",
                fr: "texte",
                es: "texto"
            },
            textDescription: {
                en: "Add a short text to any element. The Text field is used for simple fields such as a name, a title, etc...",
                fr: "Ajoutez un court texte à n'importe quel élément. Le champ Texte est utilisé pour des champs simples comme un nom, un titre, etc...",
                es: "Agregue un texto corto a cualquier elemento. El campo de texto se utiliza para campos simples como un nombre, un título, etc..."
            },
            number: {
                en: "number",
                fr: "nombre",
                es: "número"
            },
            numberDescription: {
                en: "The Number field allows you to process numeric information such as amounts, and you can also choose the units.",
                fr: "Le champ Nombre permet de traiter les informations numériques telles que des montants, et vous pouvez également choisir les unités.",
                es: "El campo Número le permite procesar información numérica como cantidades, y también puede elegir las unidades."
            },
            date: {
                en: "date",
                fr: "date",
                es: "fecha"
            },
            dateDescription: {
                en: "The Date field allows you to select a date in a calendar, for example to set an appointment, a deadline...",
                fr: "Le champ Date vous permet de sélectionner une date dans un calendrier, par exemple pour fixer un RDV, une deadline, une échéance...",
                es: "El campo Fecha le permite seleccionar una fecha en un calendario, por ejemplo para programar una cita, una fecha límite..."
            },
            time: {
                en: "time",
                fr: "heure",
                es: "hora"
            },
            timeDescription: {
                en: "The Time control offers a drop-down list of time slots whose increment can be configured (every 5 minutes for example).",
                fr: "Le champ Heure propose une liste déroulante de créneaux horaires dont l'incrément est paramétrable (par exemple toutes les 5mn).",
                es: "El control de Tiempo ofrece una lista desplegable de franjas horarias cuyo incremento se puede configurar (cada 5 minutos por ejemplo)."
            },
            paragraph: {
                en: "paragraph",
                fr: "paragraphe",
                es: "párrafo"
            },
            paragraphDescription: {
                en: "The Paragraph field allows you to enter longer and multi-line texts, for example to add comments, descriptions, etc...",
                fr: "Le champ Paragraphe permet de saisir des textes plus longs et multi-lignes, par exemple pour ajouter des commentaires, des descriptions, etc...",
                es: "El campo Párrafo le permite ingresar textos más largos y de varias líneas, por ejemplo para agregar comentarios, descripciones, etc..."
            },
            aiParagraph: {
                en: "AI paragraph",
                fr: "paragraphe IA",
                es: "párrafo IA"
            },
            aiParagraphDescription: {
                en: "The AI Paragraph field allows you to automatically generate the content of the field according to your instructions, thanks to OpenAI's AI.",
                fr: "Le champ Paragraphe AI permet de générer automatiquement le contenu du champ selon vos instructions, grâce à l'IA de OpenAI.",
                es: "El campo Párrafo IA le permite generar automáticamente el contenido del campo según sus instrucciones, gracias a la IA de OpenAI."
            },
            select: {
                en: "dropdown list",
                fr: "liste déroulante",
                es: "lista desplegable"
            },
            selectDescription: {
                en: "The Drop-down List control offers to choose from a list of values possibly associated with a color.",
                fr: "Le champ Liste déroulante propose de choisir parmi une liste de valeurs éventuellement associées à une couleur.",
                es: "El control de Lista desplegable ofrece elegir entre una lista de valores posiblemente asociados con un color"
            },
            multipleSelect: {
                en: "multiple select",
                fr: "sélection multiple",
                es: "selección múltiple"
            },
            multipleSelectDescription: {
                en: "Drop-down lists can, if necessary, receive several values and act as tags.",
                fr: "Les listes déroulantes peuvent si nécessaire recevoir plusieurs valeurs et agir comme des tags.",
                es: "Las listas desplegables pueden, si es necesario, recibir varios valores y actuar como etiquetas."
            },
            checkbox: {
                en: "checkbox",
                fr: "case à cocher",
                es: "casilla de verificación"
            },
            checkboxDescription: {
                en: "The Check box field allows you to create checklists or to switch the state of a record easily.",
                fr: "Le champ Case à cocher permet d'élaborer des checklists ou bien de basculer l'état d'une fiche facilement.",
                es: "El campo de Casilla de verificación le permite crear listas de verificación o cambiar fácilmente el estado de un registro."
            },
            progressBar: {
                en: "progress bar",
                fr: "barre de progression",
                es: "barra de progreso"
            },
            progressBarDescription: {
                en: "The Progress Bar field is useful for visually displaying the progress of a task or project.",
                fr: "Le champ Barre de progression est utile pour afficher l'avancement d'une tâche ou d'un projet de manière visuelle.",
                es: "El campo de Barra de progreso es útil para mostrar visualmente el progreso de una tarea o proyecto."
            },
            rating: {
                en: "rating",
                fr: "notation",
                es: "calificación"
            },
            ratingDescription: {
                en: "The Rating field is useful for rating items from 1 to 10, and you can also choose its symbol.",
                fr: "Le champ Notation est utile pour évaluer des objets de 1 à 10, et vous pouvez aussi choisir son symbole.",
                es: "El campo de Calificación es útil para calificar elementos de 1 a 10, y también puede elegir su símbolo."
            },
            attachment: {
                en: "attachment",
                fr: "fichiers attachés",
                es: "archivos adjuntos"
            },
            attachmentDescription: {
                en: "The Attached Files field is used to embed one or more attachments to your data, and images can be previewed directly.",
                fr: "Le champ Fichiers attachés est utilisé pour intégrer une ou plusieurs pièces jointes à vos données, et les images peuvent être prévisualisées directement.",
                es: "El campo de Archivos adjuntos se utiliza para incrustar uno o varios archivos adjuntos en sus datos, y las imágenes se pueden previsualizar directamente."
            },
            selectColumn: {
                en: "column selection",
                fr: "sélection de colonne",
                es: "selección de columna"
            },
            selectColumnDescription: {
                en: "This type of field dynamically generates a drop-down list of values by retrieving information from a column in your views.",
                fr: "Ce type champ génère dynamiquement une liste déroulante de valeurs en récupérant les informations dans une colonne de vos vues.", 
                es: "Este tipo de campo genera dinámicamente una lista desplegable de valores recuperando información de una columna en sus vistas."
            },
            selectView: {
                en: "selection inside a view",
                fr: "sélection dans une vue",
                es: "selección dentro de una vista"
            },
            selectViewDescription: {
                en: "This type of field allows you to simultaneously retrieve several values from another record by selecting it in a view.",
                fr: "Ce type de champ permet de récupérer simultanément plusieurs valeurs d'une autre fiche en la sélectionnant dans une vue.",
                es: "Este tipo de campo le permite recuperar simultáneamente varios valores de otro registro seleccionándolo en una vista."
            },
            collaborators: {
                en: "collaborators",
                fr: "collaborateurs",
                es: "colaboradores"
            },
            collaboratorsDescription: {
                en: "The Collaborators field displays in a drop-down list the address book of users and groups in your organization.",
                fr: "Le champ Collaborateurs affiche dans une liste déroulante le carnet d'adresses des utilisateurs et des groupes de votre organisation.",
                es: "El campo de Colaboradores muestra en una lista desplegable el libro de direcciones de usuarios y grupos de su organización."
            },
            color: {
                en: "color",
                fr: "couleur",
                es: "color"
            },
            colorDescription: {
                en: "The Color field is used to assign a color to a data item by selecting it from a palette.",
                fr: "Le champ Couleur permet d'attribuer une couleur à une donnée en la sélectionnant dans une palette.", 
                es: "El campo de Color se utiliza para asignar un color a un elemento de datos seleccionándolo en una paleta."
            },
            icon: {
                en: "icon",
                fr: "icône", 
                es: "icono"
            },
            iconDescription: {
                en: "The Icon control allows you to associate an icon to an object from a palette of more than 1000 icons.",
                fr: "Le champ Icône vous permet d'associer une icône à un objet à partir d'une palette de plus de 1000 icônes.",
                es: "El control de Icono le permite asociar un icono a un objeto de una paleta de más de 1000 iconos."
            },
            password: {
                en: "password",
                fr: "mot de passe",
                es: "contraseña"
            },
            passwordDescription: {
                en: "The Password field is a text field whose characters are masked in order to keep certain data confidential.",
                fr: "Le champ Mot de passe est un champ texte dont les caractères sont masqués afin de garder la confidentialité de certaines données.",
                es: "El campo de Contraseña es un campo de texto cuyos caracteres están enmascarados para mantener confidencial ciertos datos."
            },
            link: {
                en: "link to another table",
                fr: "liaison vers une autre table",
                es: "enlace a otra tabla"
            },
            linkDescription: {
                en: "The Link field is very powerful because it allows you to connect your records to each other and navigate between them by hyper-link.",
                fr: "Le champ de Liaison est très puissant car il permet de connecter vos données entre elles et de naviguer entre données par hyper-lien.",
                es: "El campo de Enlace es muy potente porque le permite conectar sus registros entre sí y navegar entre ellos mediante hipervínculo."
            },
            lookup: {
                en: "lookup a value on linked records",
                fr: "valeur d'une fiche liée",
                es: "buscar un valor en registros vinculados"
            },
            lookupDescription: {
                en: "This type of field is used to automatically retrieve a value in a record linked by a Link field.",
                fr: "Ce type de champ permet de récupérer automatiquement une valeur dans une fiche liée par un champ de liaison.",
                es: "Este tipo de campo se utiliza para recuperar automáticamente un valor en un registro vinculado por un campo de enlace."
            },
            summary: {
                en: "summarize data from linked records",
                fr: "calcul à partir de fiches liées",
                es: "resumir datos de registros vinculados"
            },
            summaryDescription: {
                en: "This type of field is used to perform a calculation (ex: sum, average) from all the records linked by a Link field.",
                fr: "Ce type de champ permet d'effectuer un calcul (de type somme, moyenne) à partir de toutes les fiches liées par un champ de liaison.",
                es: "Este tipo de campo se utiliza para realizar un cálculo (por ejemplo: suma, promedio) de todos los registros vinculados por un campo de enlace."
            },
            iaImage: {
                en: "AI image",
                fr: "image IA",
                es: "imagen IA"
            },
            iaImageDescription: {
                en: "generate an image via AI directly from this field and the image file will be stored as an attachment",
                fr: "générez une image via l'IA directement depuis ce champ et le fichier de l'image sera stocké comme pièce jointe",
                es: "genere una imagen a través de la IA directamente desde este campo y el archivo de imagen se almacenará como un archivo adjunto"
            },
            map: {
                en: "map",
                fr: "carte",
                es: "mapa"
            },
            mapDescription: {
                en: "The Map field allows you to display a location on a map and interact with it.",
                fr: "Le champ Carte permet d'afficher une localisation sur une carte et d'interagir avec elle.",
                es: "El campo de Mapa le permite mostrar una ubicación en un mapa e interactuar con ella."
            },
            richtext: {
                en: "rich text",
                fr: "texte enrichi",
                es: "texto enriquecido"
            },
            richtextDescription: {
                en: "Rich text allows you to manage formatted text with common features (titles, bold, italic, underline, color, etc...)",
                fr: "Le texte enrichi vous permet de gérer du texte mise en forme avec les fonctionnalités courantes (titres, gras, italique, souligné, couleur, etc...)",
                es: "El texto enriquecido le permite gestionar texto con formato con funciones comunes (títulos, negrita, cursiva, subrayado, color, etc...)"
            },            

            // Views
            columnSelection: {
                en: "choose your columns",
                fr: "choix des colonnes",
                es: "elige tus columnas"
            },
            columnSelectionDescription: {
                en: "Select the columns most relevant to your way of working.",
                fr: "Sélectionnez les colonnes les plus pertinentes pour votre façon de travailler.",
                es: "Seleccione las columnas más relevantes para su forma de trabajar."
            },
            sorting: {
                en: "Multi-column sorting",
                fr: "Tri multi-colonnes",
                es: "Ordenación de varias columnas"
            },
            sortingDescription: {
                en: "Sort your columns easily on several levels. Quickly change your sorting criteria.",
                fr: "Triez vos colonnes facilement sur plusieurs niveaux. Modifiez rapidement vos critères de tri.",
                es: "Ordene sus columnas fácilmente en varios niveles. Cambie rápidamente sus criterios de ordenación."
            },
            filtering: {
                en: "simple of complex filters",
                fr: "filtres simples ou complexes",
                es: "filtros simples o complejos"
            },
            filteringDescription: {
                en: "Filter your data with simple or complex logic by nesting 'AND' and 'OR' operations.",
                fr: "Filtrez vos données avec une logique simple ou complexe en imbriquant des opérations 'ET' et 'OU'.",
                es: "Filtre sus datos con lógica simple o compleja anidando operaciones 'Y' y 'O'."
            },
            grouping: {
                en: "grouping",
                fr: "regroupement",
                es: "agrupamiento"
            },
            groupingDescription: {
                en: "This type of field is used to perform a calculation (ex: sum, average) from all the records linked by a Link field.",
                fr: "En un seul clic, regroupez les données sur le critère de votre choix pour une meilleure vue d'ensemble.",
                es: "Con un solo clic, agrupe los datos según el criterio que elija para una mejor visión general."
            },
            multiGrouping: {
                en: "multi-level grouping",
                fr: "regroupement multi-niveaux",
                es: "agrupamiento multinivel"
            },
            multiGroupingDescription: {
                en: "By grouping your data on several levels, you can instantly have a more detailed view of your data.",
                fr: "En regroupant vos données sur plusieurs niveaux, vous pouvez en un instant avoir une vision plus fine de vos données.",
                es: "Al agrupar sus datos en varios niveles, puede tener al instante una vista más detallada de sus datos."
            },
            aggregations: {
                en: "aggregations",
                fr: "aggrégations",
                es: "agregaciones"
            },
            aggregationsDescription: {
                en: "When a view is grouped on one or more fields, you can automatically calculate aggregations for each level.",
                fr: "Lorsqu'une vue est groupée sur un ou plusieurs champs, vous pouvez automatiquement calculer des aggrégations pour chaque niveau.",
                es: "Cuando una vista está agrupada en uno o varios campos, puede calcular automáticamente agregaciones para cada nivel."
            },
            calendar: {
                en: "calendar view",
                fr: "vue calendrier"
            },
            calendarDescription: {
                en: "The Calendar view allows you to display your data in a calendar format and interact with it. The calendar offers a monthly or weekly view and allows filters and the choice of fields to display.",
                fr: "La vue Calendrier permet d'afficher vos données sous forme de calendrier et d'interagir avec elles. Le calendrier propose une vision mensuelle ou par semaine et autorise les filtres et le choix des champs à afficher.",
                es: "La vista de Calendario le permite mostrar sus datos en formato de calendario e interactuar con ellos. El calendario ofrece una vista mensual o semanal y permite filtros y la elección de campos para mostrar."
            },
            kanban: {
                en: "kanban view",
                fr: "vue kanban",
                es: "vista kanban"
            },
            kanbanDescription: {
                en: "The Kanban view allows you to organize your data in columns and move them easily from one column to another. It is particularly useful for managing small projects or daily tasks.",
                fr: "La vue Kanban permet d'organiser vos données en colonnes et de les déplacer facilement d'une colonne à l'autre. C'est particulièrement utile pour gérer les petits projets ou les tâches quotidiennes.",
                es: "La vista Kanban le permite organizar sus datos en columnas y moverlos fácilmente de una columna a otra. Es particularmente útil para gestionar pequeños proyectos o tareas diarias."
            },
            timeline: {
                en: "timeline view",
                fr: "vue chronologie",
                es: "vista de línea de tiempo"
            },
            timelineDescription: {
                en: "The Timeline view allows you to display your data in a temporal format by adjusting the zoom levels. In addition, it allows you to group data and filters as with other views.",
                fr: "La vue Chronologie permet d'afficher vos données sous forme temporelle en ajustant les niveaux de zoom. De plus, elle permet en plus d'effectuer des regroupements de données et des filtres comme avec les autres vues.",
                es: "La vista de Línea de tiempo le permite mostrar sus datos en un formato temporal ajustando los niveles de zoom. Además, le permite agrupar datos y filtros como con otras vistas."
            },
            gallery: {
                en: "gallery view",
                fr: "vue galerie",
                es: "vista de galería"
            },
            galleryDescription: {
                en: "The Gallery view allows you to display your data in a visually appealing way, with images and cards. It is ideal for showcasing products or creative content.",
                fr: "La vue Galerie permet d'afficher vos données de manière visuellement attrayante, avec des images et des cartes. Elle est idéale pour mettre en valeur des produits ou du contenu créatif.",
                es: "La vista de Galería le permite mostrar sus datos de una manera visualmente atractiva, con imágenes y tarjetas. Es ideal para mostrar productos o contenido creativo."
            },
            map: {
                en: "map view",
                fr: "vue carte",
                es: "vista de mapa"
            },
            mapDescription: {
                en: "The Map view allows you to display your data on a map, which is particularly useful for location-based information.",
                fr: "La vue Carte permet d'afficher vos données sur une carte, ce qui est particulièrement utile pour les informations basées sur la localisation.",
                es: "La vista de Mapa le permite mostrar sus datos en un mapa, lo que es particularmente útil para la información basada en la ubicación."
            },
            dashboard: {
                en: "dashboard view",
                fr: "vue tableau de bord",
                es: "vista de tablero"
            },
            dashboardDescription: {
                en: "The Dashboard view allows you to create a personalized dashboard with widgets to visualize your data in a dynamic way.",
                fr: "La vue Tableau de bord permet de créer un tableau de bord personnalisé avec des widgets pour visualiser vos données de manière dynamique.",
                es: "La vista de Tablero le permite crear un tablero personalizado con widgets para visualizar sus datos de manera dinámica."
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
                kiss.templates.screenshot("dashboard - incidents - pickaform.webp"),

                // FORMS
                kiss.templates.feature({
                    title: t("titleForms"),
                    description: t("descriptionForms"),
                    screenshot: "forms-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // VIEWS
                kiss.templates.feature({
                    title: t("titleViews"),
                    description: t("descriptionViews"),
                    screenshot: "business contract management - flexible views - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // WORKFLOWS
                kiss.templates.feature({
                    title: t("titleWorkflows"),
                    description: t("descriptionWorkflows"),
                    screenshot: "workflows-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // FORM DESIGN
                kiss.templates.feature({
                    title: t("titleFormDesigner"),
                    description: t("descriptionFormDesigner"),
                    screenshot: "integrated simple and powerful form designer - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // FORM FEATURES
                kiss.templates.feature({
                    title: t("titleFormFeatures"),
                    description: t("descriptionFormFeatures"),
                    screenshot: "a la carte form features - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // NAVIGATOR
                kiss.templates.feature({
                    title: t("titleCustomViews"),
                    description: t("descriptionCustomViews"),
                    screenshot: "views-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // LEFT PANE NAVIGATION
                kiss.templates.feature({
                    title: t("titleLeftNavigation"),
                    description: t("descriptionLeftNavigation"),
                    screenshot: "navigate through your data with left pane - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // TABS NAVIGATOR
                kiss.templates.feature({
                    title: t("titleTabsNavigation"),
                    description: t("descriptionTabsNavigation"),
                    screenshot: "navigate through your data with tabs - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // FIELD TYPES
                kiss.templates.title({
                    title: t("titleFieldTypes"),
                    subtitle: t("descriptionFieldTypes")
                }),

                {
                    class: "feature-top-separator"
                },

                // Block containing all field types
                {
                    class: "feature-details-container",
                    items: [{
                        class: "feature-details-container-column",
                        items: [
                            // Text
                            kiss.templates.featureDetails({
                                title: t("text"),
                                description: t("textDescription"),
                                screenshot: "field type - text - pickaform.webp"
                            }),
                            // Number
                            kiss.templates.featureDetails({
                                title: t("number"),
                                description: t("numberDescription"),
                                screenshot: "field type - number - pickaform.webp"
                            }),
                            // Date
                            kiss.templates.featureDetails({
                                title: t("date"),
                                description: t("dateDescription"),
                                screenshot: "field type - date - pickaform.webp"
                            }),
                            // Time
                            kiss.templates.featureDetails({
                                title: t("time"),
                                description: t("timeDescription"),
                                screenshot: "field type - time - pickaform.webp"
                            }),
                            // Paragraph
                            kiss.templates.featureDetails({
                                title: t("paragraph"),
                                description: t("paragraphDescription"),
                                screenshot: "field type - paragraph - pickaform.webp"
                            }),
                            // AI paragraph
                            kiss.templates.featureDetails({
                                title: t("aiParagraph"),
                                description: t("aiParagraphDescription"),
                                screenshot: "field type - AI paragraph - pickaform.webp"
                            }),
                            // Select
                            kiss.templates.featureDetails({
                                title: t("select"),
                                description: t("selectDescription"),
                                screenshot: "field type - select - pickaform.webp"
                            }),
                            // Multiple select
                            kiss.templates.featureDetails({
                                title: t("multipleSelect"),
                                description: t("multipleSelectDescription"),
                                screenshot: "field type - multiple select - pickaform.webp"
                            }),
                            // Checkbox
                            kiss.templates.featureDetails({
                                title: t("checkbox"),
                                description: t("checkboxDescription"),
                                screenshot: "field type - checkbox - pickaform.webp"
                            }),
                            // Progress bar
                            kiss.templates.featureDetails({
                                title: t("progressBar"),
                                description: t("progressBarDescription"),
                                screenshot: "field type - progress bar - pickaform.webp"
                            }),
                            // Rating
                            kiss.templates.featureDetails({
                                title: t("rating"),
                                description: t("ratingDescription"),
                                screenshot: "field type - ranking - pickaform.webp"
                            }),
                            // Attachment
                            kiss.templates.featureDetails({
                                title: t("attachment"),
                                description: t("attachmentDescription"),
                                screenshot: "field type - attachment - pickaform.webp"
                            }),
                            // Select from view column
                            kiss.templates.featureDetails({
                                title: t("selectColumn"),
                                description: t("selectColumnDescription"),
                                screenshot: "field type - select from column - pickaform.webp"
                            }),
                            // Select from view
                            kiss.templates.featureDetails({
                                title: t("selectView"),
                                description: t("selectViewDescription"),
                                screenshot: "field type - select from view - pickaform.webp"
                            }),
                            // Collaborators
                            kiss.templates.featureDetails({
                                title: t("collaborators"),
                                description: t("collaboratorsDescription"),
                                screenshot: "field type - collaborators - pickaform.webp"
                            }),
                            // Color
                            kiss.templates.featureDetails({
                                title: t("color"),
                                description: t("colorDescription"),
                                screenshot: "field type - color - pickaform.webp"
                            }),
                            // Icon
                            kiss.templates.featureDetails({
                                title: t("icon"),
                                description: t("iconDescription"),
                                screenshot: "field type - icon - pickaform.webp"
                            }),
                            // Password
                            kiss.templates.featureDetails({
                                title: t("password"),
                                description: t("passwordDescription"),
                                screenshot: "field type - password - pickaform.webp"
                            }),
                            // Link
                            kiss.templates.featureDetails({
                                title: t("link"),
                                description: t("linkDescription"),
                                screenshot: "field type - link - pickaform.webp"
                            }),
                            // Lookup
                            kiss.templates.featureDetails({
                                title: t("lookup"),
                                description: t("lookupDescription"),
                                screenshot: "field type - lookup - pickaform.webp"
                            }),
                            // Summary
                            kiss.templates.featureDetails({
                                title: t("summary"),
                                description: t("summaryDescription"),
                                screenshot: "field type - summary - pickaform.webp"
                            }),
                            // IA image
                            kiss.templates.featureDetails({
                                title: t("iaImage"),
                                description: t("iaImageDescription"),
                                screenshot: "field type - aiImage - pickaform.webp"
                            }),
                            // Map
                            kiss.templates.featureDetails({
                                title: t("map"),
                                description: t("mapDescription"),
                                screenshot: "field type - map - pickaform.webp"
                            }),
                            // Rich text field
                            kiss.templates.featureDetails({
                                title: t("richtext"),
                                description: t("richtextDescription"),
                                screenshot: "field type - richtext - pickaform.webp"
                            })
                        ]
                    }]
                },

                // WORKING WITH VIEWS
                kiss.templates.title({
                    title: t("titleViewCreation"),
                    subtitle: t("subtitleViewCreation")
                }),

                {
                    class: "feature-top-separator"
                },

                // Block containing view demo
                {
                    class: "feature-details-container",
                    items: [{
                        class: "feature-details-container-column",
                        items: [
                            // Column selection
                            kiss.templates.featureDetails({
                                title: t("columnSelection"),
                                description: t("columnSelectionDescription"),
                                screenshot: "views - select columns - pickaform.webp"
                            }),
                            // Sorting
                            kiss.templates.featureDetails({
                                title: t("sorting"),
                                description: t("sortingDescription"),
                                screenshot: "views - multi-column sorting - pickaform.webp"
                            }),
                            // Filtering
                            kiss.templates.featureDetails({
                                title: t("filtering"),
                                description: t("filteringDescription"),
                                screenshot: "views - filter data - pickaform.webp"
                            }),
                            // One level grouping
                            kiss.templates.featureDetails({
                                title: t("grouping"),
                                description: t("groupingDescription"),
                                screenshot: "views - group data - pickaform.webp"
                            }),
                            // Multi-level grouping
                            kiss.templates.featureDetails({
                                title: t("multiGrouping"),
                                description: t("multiGroupingDescription"),
                                screenshot: "views - multi-level grouping data - pickaform.webp"
                            }),
                            // Aggregations
                            kiss.templates.featureDetails({
                                title: t("aggregations"),
                                description: t("aggregationsDescription"),
                                screenshot: "views - data aggregation - pickaform.webp"
                            }),
                            // Calendar
                            kiss.templates.featureDetails({
                                title: t("calendar"),
                                description: t("calendarDescription"),
                                screenshot: "views - calendar - pickaform.webp"
                            }),                        
                            // Kanban
                            kiss.templates.featureDetails({
                                title: t("kanban"),
                                description: t("kanbanDescription"),
                                screenshot: "views - kanban - pickaform.webp"
                            }),
                            // Timeline
                            kiss.templates.featureDetails({
                                title: t("timeline"),
                                description: t("timelineDescription"),
                                screenshot: "views - timeline - pickaform.webp"
                            }),
                            // Gallery
                            kiss.templates.featureDetails({
                                title: t("gallery"),
                                description: t("galleryDescription"),
                                screenshot: "views - gallery - pickaform.webp"
                            }),
                            // Map
                            kiss.templates.featureDetails({
                                title: t("map"),
                                description: t("mapDescription"),
                                screenshot: "views - map - pickaform.webp"
                            }),
                            // Dashboard
                            kiss.templates.featureDetails({
                                title: t("dashboard"),
                                description: t("dashboardDescription"),
                                screenshot: "views - dashboard - pickaform.webp"
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

;kiss.app.defineView({
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

;kiss.app.defineView({
    id: "whoCanUse",
    meta: {
        url: {
            en: "https://pickaform.fr/en/whoCanUse",
            fr: "https://pickaform.fr/fr/whoCanUse",
            es: "https://pickaform.fr/es/whoCanUse"
        },
        title: {
            en: "Who can use | Pickaform",
            fr: "Qui peut utiliser | Pickaform",
            es: "Quién puede usar | Pickaform"
        },
        description: {
            en: `Pickaform is great for enterprises, public sector, associations, IT companies and no-coders.`,
            fr: `Pickaform est pour les entreprises, le secteur public, les associations, les ESN et les no-coders.`,
            es: `Pickaform es ideal para empresas, sector público, asociaciones, empresas de servicios de TI y no-coders.`
        }
    },
    renderer: function (id, target) {
        const t = defineTexts(id, {
            getStarted: {
                en: "Get started",
                fr: "Démarrez maintenant",
                es: "Empezar"
            },
            title: {
                en: `<span class="text-highlight" style="background-color: #00aaee">Who</span> can use pickaform?`,
                fr: `<span class="text-highlight" style="background-color: #00aaee">Qui</span> peut utiliser pickaform ?`,
                es: `<span class="text-highlight" style="background-color: #00aaee">Quién</span> puede usar pickaform ?`
            },
            subtitle: {
                en: "No-code is for everyone, but everyone finds their own benefits.",
                fr: "Le no-code est pour tout le monde, mais chacun y trouve ses propres avantages.",
                es: "No-code es para todos, pero cada uno encuentra sus propios beneficios."
            },
            titleB2C: {
                en: "Companies, public sector, associations",
                fr: "Entreprises, secteur public, associations",
                es: "Empresas, sector público, asociaciones"
            },
            descriptionB2C: {
                en: `Pickaform allows you to create your tailor-made applications, without coding.
                <br>You can start from an existing application template, an Excel file, or the blank page.
                <br>You go from idea to prototype during the day, and then refine your application for use.
                <br>Pickaform allows you to create all types of applications to manage your activity, and excels in the implementation of your business processes (file monitoring, business monitoring, monitoring of internal or external requests, etc.)
                <br>To go even faster, we support you in the implementation by transforming your needs into concrete and testable applications very quickly (within a day).
                <br>Finally, pickaform is very transversal, so you can use it for a wide variety of needs to ensure a maximum return on investment.`,
                fr: `Pickaform vous permet de créer vos applications sur mesure, sans coder.
                <br>Vous pouvez partir d'un modèle d'application existant, d'un fichier Excel, ou de la page blanche.
                <br>Vous passez de l'idée au prototype dans la journée, et vous affinez ensuite votre application à l'usage.
                <br>Pickaform vous permet de créer tous types d'applications pour gérer votre activité, et excèle dans la mise en oeuvre de vos processus métier (suivi de dossiers, suivi d'affaires, suivi des demandes internes ou externes…)
                <br>Pour aller encore plus vite, nous vous accompagnons dans la mise oeuvre en transformant vos besoins en applications concrètes et testables très rapidement (dans la journée).
                <br>Enfin, pickaform est très transversal, donc vous pourrez l'utiliser pour des besoins très variés afin d'assurer un retour sur l'investissement maximal.
                `,
                es: `Pickaform le permite crear sus aplicaciones a medida, sin codificación.
                <br>Puede partir de una plantilla de aplicación existente, de un archivo de Excel, o de la página en blanco.
                <br>Pasa de la idea al prototipo durante el día, y luego perfecciona su aplicación para su uso.
                <br>Pickaform le permite crear todo tipo de aplicaciones para gestionar su actividad, y destaca en la implementación de sus procesos comerciales (seguimiento de archivos, seguimiento de negocios, seguimiento de solicitudes internas o externas, etc.)
                <br>Para ir aún más rápido, le apoyamos en la implementación transformando sus necesidades en aplicaciones concretas y testables muy rápidamente (en un día).
                <br>Por último, pickaform es muy transversal, por lo que puede utilizarlo para una amplia variedad de necesidades para garantizar un retorno de la inversión máximo.
                `
            },
            titleB2B2C: {
                en: "IT Services Companies",
                fr: "Entreprises de Services du Numérique (ESN)",
                es: "Empresas de Servicios de TI"
            },
            descriptionB2B2C: {
                en: `Do you need to go faster than your competitors on certain projects?
                <br>Pickaform brings you 80% of the standard needs of a back office on an integrated platform: database, authentication, security, forms, views, workflows, PDF generation, API, etc…
                <br>By building your solution on pickaform, you multiply your productivity by 2, 3, 5 or even 10 compared to specific development.
                <br>Finally, in 2024, we are already planning a version of pickaform dedicated to IT Services Companies so that you can host applications for your clients yourself, with an applications supervisor similar to the one that webmasters have to manage their client's websites.`,
                fr: `Vous avez besoin d'aller plus vite que vos concurrents sur certains projets ?
                <br>Pickaform vous apporte 80% des besoins standards d'un back-office sur une plateforme intégrée : base de données, authentification, sécurité, formulaires, vues, workflows, génération de PDF, API, etc…
                <br>En construisant votre solution sur pickaform, vous multipliez votre productivité par 2, 3, 5 voire 10 par rapport au développement spécifique.
                <br>Enfin, en 2024, nous prévoyons déjà une version de pickaform dédiée aux ESN pour que vous puissiez héberger vous-même les applications pour vos clients, avec un superviseur d'applications similaire à celui qu'ont les webmasters pour gérer les sites Internet de leurs clients.
                `,
                es: `¿Necesita ir más rápido que sus competidores en ciertos proyectos?
                <br>Pickaform le ofrece el 80% de las necesidades estándar de un back office en una plataforma integrada: base de datos, autenticación, seguridad, formularios, vistas, flujos de trabajo, generación de PDF, API, etc...
                <br>Al construir su solución en pickaform, multiplica su productividad por 2, 3, 5 o incluso 10 en comparación con el desarrollo específico.
                <br>Por último, en 2024, ya estamos planeando una versión de pickaform dedicada a las Empresas de Servicios de TI para que pueda alojar aplicaciones para sus clientes usted mismo, con un supervisor de aplicaciones similar al que tienen los webmasters para administrar los sitios web de sus clientes.
                `
            },
            titleB2M2C: {
                en: "No-coders / makers / webmasters",
                fr: "No-coders / makers / webmasters",
                es: "No-coders / makers / webmasters"
            },
            descriptionB2M2C: {
                en: `You already know no-code tools and you have already used them to create MVPs, business tools for VSEs or small SMEs, and you really like the Freemium model but you realize that these tools will be too limiting for creating large applications in production with larger customers.
                <br>With pickaform, you can create real business applications, turnkey, with structured forms, fine security, and above all the key component requested by all companies of a certain size: the workflow engine (BPM).
                <br>Pickaform has already been deployed within entities of BNP PARIBAS, GROUPAMA, GROUPE SAUR, GROUPE HEINEKEN, ORANGE, CANAL+, and you can confidently consider approaching customers with greater potential for the growth of your business.`,
                fr: `Vous connaissez déjà les outils no-code et vous les avez déjà utilisés pour créer des MVP, des outils métiers pour des TPE ou petites PME, et vous aimez beaucoup le modèle Freemium mais vous réalisez que ces outils seront trop limitatifs pour créer de grosses applications en production chez clients d'une taille plus importante.
                <br>Avec pickaform, vous pouvez créer de vraies applications métier, clé-en-main, avec des formulaires structurés, une sécurité fine, et surtout le composant clé demandé par toutes les entreprises d'une certaine taille : le moteur de workflow (BPM).
                <br>Pickaform a déjà été déployé au sein d'entités des groupes BNP PARIBAS, GROUPAMA, GROUPE SAUR, GROUPE HEINEKEN, ORANGE, CANAL+, et vous pouvez sereinement envisager de démarcher des clients à plus fort potentiel pour la croissance de votre entreprise.
                `,
                es: `Ya conoces las herramientas no-code y ya las has utilizado para crear MVP, herramientas comerciales para VSEs o pequeñas PYMEs, y realmente te gusta el modelo Freemium pero te das cuenta de que estas herramientas serán demasiado limitadas para crear grandes aplicaciones en producción con clientes más grandes.
                <br>Con pickaform, puedes crear aplicaciones comerciales reales, llave en mano, con formularios estructurados, seguridad fina, y sobre todo el componente clave solicitado por todas las empresas de cierto tamaño: el motor de flujo de trabajo (BPM).
                <br>Pickaform ya ha sido desplegado dentro de entidades de BNP PARIBAS, GROUPAMA, GROUPE SAUR, GROUPE HEINEKEN, ORANGE, CANAL+, y puedes considerar con confianza acercarte a clientes con un mayor potencial para el crecimiento de tu negocio.
                `
            },
            titleBookDemo: {
                en: `Not convinced?`,
                fr: `Pas convaincu ?`,
                es: `¿No estás convencido?`
            },
            subtitleBookDemo: {
                en: `Tell us about your project, and we'll show you how to make it happen in <span class="text-highlight" style="background-color: #00aaee">20 minutes!</span>`,
                fr: `Expliquez-nous votre projet, et on vous montre en <span class="text-highlight" style="background-color: #00aaee">20 minutes</span> comment le réaliser !`,
                es: `¡Cuéntanos sobre tu proyecto, y te mostraremos cómo hacerlo realidad en <span class="text-highlight" style="background-color: #00aaee">20 minutos!</span>`
            },
            bookDemo: {
                en: `OK, I'll get in touch`,
                fr: `OK, je prends contact`,
                es: `OK, me pongo en contacto`
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
                kiss.templates.buttonCTA(t("getStarted")),

                {
                    class: "feature-top-separator"
                },

                kiss.templates.whoCanUse(t("titleB2C"), t("descriptionB2C")),
                kiss.templates.whoCanUse(t("titleB2B2C"), t("descriptionB2B2C")),
                kiss.templates.whoCanUse(t("titleB2M2C"), t("descriptionB2M2C")),

                // BOOK A DEMO
                kiss.templates.title({
                    title: t("titleBookDemo"),
                    subtitle: t("subtitleBookDemo")
                }),

                // CONTACT BUTTON
                kiss.templates.buttonCTA(t("bookDemo"), "contact"),

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
                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo
            }
        })
    }
})

;kiss.templates.blogPostBanner = function (post) {
    return {
        type: "html",
        html: `<img class="blog-post-banner-image" src="${post.Image[0].path}">`
    }
}

kiss.templates.blogPost = function (post) {
    return {
        layout: "vertical",
        items: [
            {
                type: "html",
                html: kiss.templates.breadcrumb(post)
            },
            {
                type: "html",
                html: `
                    <h1 class="blog-post-title">${post.Title}</h1>
                    <p class="blog-post-description">${post.Description}</p>
                    <p class="blog-post-body">${post.Body}</p>
                `
            },
            ...post.Sections.map(section => {
                return {
                    type: "html",
                    html: `
                        <h2 class="blog-post-title">${section.Title}</h2>
                        <p class="blog-post-body">${section.Body.replaceAll("\n", "<br>")}</p>
                    `
                }
            })
        ]
    }
}

kiss.templates.breadcrumb = function(post) {
    const blogUrl = kiss.global.path + "/" + kiss.language.current + "/blog"

    return /*html*/`
        <nav aria-label="breadcrumb">
            <div itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList" class="breadcrumb">
                <div class="container">
                    <span itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem" class="breadcrumb-item">
                        <a href="${blogUrl}" itemprop="item">
                            <span itemprop="name">Blog</span>
                            <meta itemprop="position" content="1">
                        </a>
                    </span>
                    ➤
                    <span itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem" class="breadcrumb-item">
                        <a href="${blogUrl}/search/${post.Category}" itemprop="item">
                            <span itemprop="name">${post.Category}</span>
                            <meta itemprop="position" content="2">
                        </a>
                    </span>
                    ➤
                    <span itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem" class="breadcrumb-item  active">
                        <a href="${blogUrl}/${post.Slug}" itemprop="item">
                            <span itemprop="name">${post.Title}</span>
                            <meta itemprop="position" content="3">
                        </a>
                    </span>
                </div>
            </div>
        </nav>`
}

;kiss.templates.blogPostEntry = function (post) {
    const postUrl = kiss.global.path + "/" + kiss.language.current + "/blog/" + post.slug
    const image = (post.image && Array.isArray(post.image) && post.image.length > 0) ? post.image[0] : ""
    const tags = post.tags.map(tag => `<span class="blog-entry-tag">${tag}</span>`).join("")

    return {
        id: post.slug,
        layout: "vertical",
        class: "blog-entry",
        items: [{
            type: "html",
            html:
                `
                <a href="${postUrl}" class="no-underline">
                    <img loading="lazy" class="blog-entry-banner-image" src="${image.path}"></img>
                    <span class="blog-entry-category">${post.category}</span>
                    ${tags}
                    <h3 class="blog-entry-title no-underline">${post.title}</h3>
                    <p class="blog-entry-description">${post.description}</p>
                </a>`
        }]
    }
}

;/**
 * Generate a CTA button
 * 
 * @param {string} text 
 * @param {string} [page] - "contact" | "booking" 
 */
kiss.templates.buttonCTA = function (text, page) {
    return {
        text: text + " &nbsp;&nbsp; ➔",
        action: () => {
            if (page == "contact") {
                kiss.router.navigateTo({
                    content: "contact"
                })
            }
            else if (page == "booking") {
                const link = "https://calendly.com/pickaform/pickaform-live-demo"
                window.open(link, "_new")
            }
            else {
                const link = "https://app.pickaform.com/client/pickaform/index.html#ui=authentication-register&language=" + (kiss.language.current || "en")
                window.open(link, "_new")
            }
        },

        type: "button",
        backgroundColor: "#00aaee",
        backgroundColorHover: "#a1ed00",
        boxShadowHover: "0 0 32px #a1ed00",
        color: "#ffffff",
        colorHover: "#000000",
        fontSize: "2vh",
        borderRadius: 10,
        borderWidth: 0,
        padding: "1vh 2vh",
        margin: "0 0 2vh 0"
    }
}

;kiss.templates.feature = function ({
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

;kiss.templates.featureDetails = function ({
    title,
    description,
    screenshot
}) {
    const id = kiss.tools.shortUid()
    const src = kiss.global.pathImg + "/" + screenshot
    const alt = screenshot.split(".")[0]

    return {
        id,
        class: "feature-details",
        items: [
            {
                class: "feature-details-screenshot",
                flex: 1,
                items: [
                    {
                        type: "html",
                        html: `<img src="${src}" alt="${alt}" class="feature-details-screenshot-img">`,
                        events: {
                            click: () => {
                                if (kiss.tools.isMobile()) return // Don't zoom on mobile phones
                                kiss.templates.screenshotPreview(src)
                            }
                        }
                    }
                ]
            },
            {
                type: "html",
                padding: "1vh",
                flex: 1,
                maxWidth: () => (kiss.screen.current.width > 500) ? 430 : kiss.screen.current.width - 10,
                html: /*html*/ `
                    <h4 class="feature-details-title">${title}</h4>
                    <p class="feature-details-description">${description}</p>`
            }
        ]     
    }
}

kiss.templates.featureVideo = function ({
    title,
    description,
    screenshot,
    video
}) {
    const id = kiss.tools.shortUid()
    const src = kiss.global.pathImg + "/" + screenshot
    const alt = screenshot.split(".")[0]

    return {
        id,
        class: "feature-details",
        items: [
            {
                class: "feature-details-video",
                items: [
                    {
                        type: "html",
                        html: `<img src="${src}" alt="${alt}" class="feature-details-screenshot-img">`
                    },
                    {
                        type: "html",
                        html: `<div class="feature-play-button">▷</div>`
                    }
                ]
            },
            {
                type: "html",
                padding: "1vh",
                flex: 1,
                maxWidth: () => (kiss.screen.current.width > 500) ? 430 : kiss.screen.current.width - 10,
                html: /*html*/ `
                    <h4 class="feature-details-title">${title}</h4>
                    <p class="feature-details-description">${description}</p>`
            }
        ],
        events: {
            click: () => {
                window.open(video)
            }
        }
    }
}

;/**
 * FOOTER BLOCK
 */
kiss.templates.footerBlock = function ({
    title,
    entries
}) {
    return {
        class: "footer-column",
        layout: "vertical",
        alignItems: "center",
        margin: "0 0 20px 0",
        items: [{
                type: "html",
                html: `<div class="footer-title">${title}</div>`
            },
            ...entries.map(entry => {
                return {
                    type: "html",
                    html: `<div class="footer-link">${entry.label}</div>`,
                    events: {
                        click: entry.action
                    }
                }
            })
        ]
    }
}

;kiss.templates.navbar = function (items, orientation) {
    return /*html*/ `
        <div class="nav-wrapper">
            <nav>
                <ul style="display: flex; flex-flow: ${orientation}; padding: 0">
                    ${kiss.templates.navbarItems(items)}
                </ul>
            </nav>
        </div>
    `
}

kiss.templates.navbarItems = function (items) {
    return items.map(item => {
        if (item.hidden) return ""
        
        return /*html*/`
            <li class="navbar-item">
                <a href="${item.href}" view="${item.view}" target="${item.target}">${item.text}</a>
            </li>
        `
    }).join("")
}

;kiss.templates.pager = function (count, skip, limit, searchTerm, searchFunction, getItemsFunction) {
    const rest = count % limit
    const numberOfPages = Math.floor(count / limit) + ((rest == 0) ? 0 : 1)
    const pageNumber = skip / limit

    kiss.router.updateUrlHash({
        page: pageNumber + 1
    })

    let pagerButtons = []

    for (let i = 0; i < numberOfPages; i++) {
        let newButton = {
            type: "button",
            text: i + 1 + "",
            color: (i == pageNumber) ? "#ffffff" : "",
            backgroundColor: (i == pageNumber) ? "#00aaee" : "",
            fontSize: "1.5vh !important",
            width: "4vh",
            height: "4vh",
            borderRadius: "10vh",
            margin: "5px",
            action: () => {
                const newSkip = i * limit
                if (searchTerm) {
                    searchFunction(searchTerm, newSkip, limit)
                } else {
                    getItemsFunction(newSkip, limit)
                }
            }
        }
        pagerButtons.push(newButton)
    }

    return pagerButtons
}
kiss.templates.pricingTable = function (plans, t) {
    return /*html*/ `
        <div class="pricing-table">
            ${plans.map(plan => kiss.templates.pricingPlan(plan, t))}
        </div>
    `
}

kiss.templates.pricingPlan = function (plan, t) {
    const gradient = kiss.tools.CSSGradient(plan.color, 135, -0.6)
    const lightColor = kiss.tools.adjustColor(plan.color, 1)
    const check = `<span style="color:${lightColor}" class="pricing-plan-check">✓</span>`

    return /*html*/ `
        <div class="pricing-plan" style="background:${gradient}; box-shadow: 0 0 16vh ${lightColor};">
            <div class="pricing-plan-title">${plan.name}</div>
            <div class="pricing-plan-data">${check + plan.users} Users</div>
            <div class="pricing-plan-data">${check + plan.apps} Applications</div>
            <div class="pricing-plan-data">${check + plan.storage}</div>
            <div class="pricing-plan-data">${check} ${t("unlimitedForms")}</div>
            <div class="pricing-plan-data">${check} ${t("unlimitedWorkflows")}</div>
            <div style="display: flex; flex-flow: row; align-items: center; justify-content: center;">
                <div class="pricing-plan-price">
                    ${plan.price}
                </div>
                <div>
                    ${t("userPerMonth")}
                </div>
            </div>
            <div class="pricing-plan-CTA" style="border-color: ${lightColor}">${t("Get started")}</div>
        </div>
    `
}

kiss.templates.pricingFAQ = function(question, answer)  {
    return {
        class: "pricing-faq",
        items: [
            {
                type: "html",
                html: /*html*/ `
                    <h4 class="pricing-faq-title">${question}</h4>
                    <p class="pricing-faq-description">${answer}</p>`
            }
        ]     
    }
}

;kiss.templates.screenshot = function (src, lazy) {
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

;kiss.templates.title = function ({
    title,
    subtitle
}) {
    return {
        type: "html",
        width: "100%",
        html: /*html*/ `
            <h1 class="title">${title}</h1>
            <h2 class="subtitle">${subtitle}</h2>`
    }
}

;kiss.templates.whoCanUse = function(title, description)  {
    return {
        class: "who-can-use",
        items: [
            {
                type: "html",
                html: /*html*/ `
                    <h4 class="who-can-use-title">${title}</h4>
                    <p class="who-can-use-description">${description}</p>`
            }
        ]     
    }
}
