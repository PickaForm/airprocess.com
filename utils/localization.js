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

/**
 * Translate navbar, content, footer
 */
function translate() {
    let newLanguage = getNextLanguage()
    kiss.language.current = newLanguage
    localStorage.setItem("config-language", newLanguage)

    // Translate navbar, footer, content
    $("navbar").translateTo(newLanguage)
    $("footer").translateTo(newLanguage)
    const currentContent = kiss.router.getRoute().content
    $(currentContent).translateTo(newLanguage)

    publish("EVT_LANGUAGE", {
        language: getNextLanguage()
    })    
}

/**
 * Get the next available language
 */
function getNextLanguage() {
    const currentIndex = languages.indexOf(kiss.language.current)
    const nextIndex = (currentIndex + 1) % languages.length
    return languages[nextIndex]
}

;