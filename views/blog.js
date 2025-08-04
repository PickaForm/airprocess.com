kiss.app.defineView({
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

;