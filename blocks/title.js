kiss.templates.title = function ({
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

;