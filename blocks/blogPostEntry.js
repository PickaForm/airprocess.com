kiss.templates.blogPostEntry = function (post) {
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

;