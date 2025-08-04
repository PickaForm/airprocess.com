kiss.app.defineView({
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

;