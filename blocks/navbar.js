kiss.templates.navbar = function (items, orientation) {
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

;