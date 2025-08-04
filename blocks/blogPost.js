kiss.templates.blogPostBanner = function (post) {
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

;