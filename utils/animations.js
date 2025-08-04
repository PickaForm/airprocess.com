/**
 * Assigns an animation to an element when it is in the viewport
 * 
 * @param {string} className 
 * @param {string} animationName 
 */
function animate(className, animationName) {
    const animatedElements = document.querySelectorAll('.' + className)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__' + animationName)
            entry.target.style.visibility = "visible"
            observer.unobserve(entry.target)
        }
        })
    }, {
        threshold: 0.1 // % of the element that needs to be in the viewport
    })

    animatedElements.forEach(el => {
        observer.observe(el)
    })
}

function animateElements() {
    animate("title", "fadeInUp")
    animate("subtitle", "fadeInUp")
    animate("screenshot", "zoomIn")

    // Features
    animate("feature-title", "fadeInUp")
    animate("feature-description", "fadeInUp")

    animate("feature-screenshot-right", "slideInLeft")
    animate("feature-screenshot-left", "slideInRight")

    // Feature details
    animate("feature-details-screenshot", "zoomIn")
    animate("feature-details-description", "fadeInUp")

    // Pricing
    animate("pricing-plan", "zoomIn")
    animate("pricing-faq", "fadeInUp")
}

;