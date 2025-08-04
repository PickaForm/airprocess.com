kiss.templates.whoCanUse = function(title, description)  {
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
