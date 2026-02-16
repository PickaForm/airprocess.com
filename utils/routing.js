// Shared router mapping for pathname mode (dev + prod)
kiss.global.supportedLanguages = ["en", "fr", "es"]
kiss.global.contentBySegment = {
    landing: "landing",
    product: "product",
    cases: "cases",
    contact: "contact",
    pricing: "pricing",
    blog: "blog"
}

kiss.global.getValidLanguage = function (language) {
    if (kiss.global.supportedLanguages.includes(language)) return language
    return "en"
}

kiss.global.pathnameToRoute = function (pathname) {
    const parts = pathname.split("/").filter(Boolean)
    const language = kiss.global.getValidLanguage(parts[0])
    const firstSegment = parts[1]

    // /:language
    if (parts.length === 1 && kiss.global.supportedLanguages.includes(parts[0])) {
        return {
            ui: "start",
            content: "landing",
            language
        }
    }

    // /:language/blog/:postId
    if (firstSegment === "blog" && parts[2] && parts[2] !== "search") {
        return {
            ui: "start",
            content: "blogPost",
            language,
            postId: decodeURIComponent(parts[2])
        }
    }

    // /:language/blog/search/:category
    if (firstSegment === "blog" && parts[2] === "search" && parts[3]) {
        return {
            ui: "start",
            content: "blog",
            language,
            category: decodeURIComponent(parts[3])
        }
    }

    // /:language/:content
    if (kiss.global.supportedLanguages.includes(parts[0]) && kiss.global.contentBySegment[firstSegment]) {
        return {
            ui: "start",
            content: kiss.global.contentBySegment[firstSegment],
            language
        }
    }

    // / or unknown path => default landing
    return {
        ui: "start",
        content: "landing",
        language
    }
}

kiss.global.routeToPathname = function (route = {}) {
    if (route.ui !== "start") return window.location.pathname || "/"

    const language = kiss.global.getValidLanguage(route.language)
    const content = route.content || "landing"

    if (content === "blogPost" && route.postId) {
        return `/${language}/blog/${encodeURIComponent(route.postId)}`
    }

    if (content === "blog" && route.category) {
        return `/${language}/blog/search/${encodeURIComponent(route.category)}`
    }

    if (content === "blog") {
        return `/${language}/blog`
    }

    if (kiss.global.contentBySegment[content]) {
        return `/${language}/${content}`
    }

    return `/${language}/landing`
}
