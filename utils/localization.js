/**
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

function getLanguageFromRoute(route = {}) {
    const routeLanguage = route.language
    if (languages.includes(routeLanguage)) return routeLanguage
    return null
}

function getLanguageFromStorage() {
    const storedLanguage = localStorage.getItem("config-language")
    if (languages.includes(storedLanguage)) return storedLanguage
    return null
}

function applyLanguage(language) {
    if (!languages.includes(language)) language = "en"
    kiss.language.current = language
    localStorage.setItem("config-language", language)
}

/**
 * Router guard:
 * Keep language synchronized with URL route before rendering views.
 * Must return true to let routing continue.
 */
function syncLanguageWithRoute(route = {}) {
    const routeLanguage = getLanguageFromRoute(route)
    if (routeLanguage) {
        applyLanguage(routeLanguage)
        return true
    }

    const storedLanguage = getLanguageFromStorage()
    if (storedLanguage) {
        applyLanguage(storedLanguage)
        return true
    }

    applyLanguage("en")
    return true
}

/**
 * Translate navbar, content, footer
 */
async function translate() {
    const currentRoute = kiss.router.getRoute()
    const currentLanguage = getLanguageFromRoute(currentRoute) || kiss.language.current || "en"
    const newLanguage = getNextLanguage(currentLanguage)

    const nextRoute = {
        ...currentRoute,
        ui: currentRoute.ui || "start",
        content: currentRoute.content || "landing",
        language: newLanguage
    }

    await kiss.router.navigateTo(nextRoute, true)
    applyLanguage(newLanguage)

    // Keep instant UI feedback without full page reload
    $("navbar")?.translateTo(newLanguage)
    $("footer")?.translateTo(newLanguage)
    $(nextRoute.content)?.translateTo(newLanguage)

    publish("EVT_LANGUAGE", {
        language: getNextLanguage(newLanguage)
    })
}

/**
 * Get the next available language
 */
function getNextLanguage(currentLanguage = kiss.language.current) {
    const currentIndex = languages.indexOf(currentLanguage)
    const nextIndex = (currentIndex + 1) % languages.length
    return languages[nextIndex]
}

;
