kiss.app.defineView({
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

;