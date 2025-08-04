kiss.templates.pricingTable = function (plans, t) {
    return /*html*/ `
        <div class="pricing-table">
            ${plans.map(plan => kiss.templates.pricingPlan(plan, t))}
        </div>
    `
}

kiss.templates.pricingPlan = function (plan, t) {
    const gradient = kiss.tools.CSSGradient(plan.color, 135, -0.6)
    const lightColor = kiss.tools.adjustColor(plan.color, 1)
    const check = `<span style="color:${lightColor}" class="pricing-plan-check">✓</span>`

    return /*html*/ `
        <div class="pricing-plan" style="background:${gradient}; box-shadow: 0 0 16vh ${lightColor};">
            <div class="pricing-plan-title">${plan.name}</div>
            <div class="pricing-plan-data">${check + plan.users} Users</div>
            <div class="pricing-plan-data">${check + plan.apps} Applications</div>
            <div class="pricing-plan-data">${check + plan.storage}</div>
            <div class="pricing-plan-data">${check} ${t("unlimitedForms")}</div>
            <div class="pricing-plan-data">${check} ${t("unlimitedWorkflows")}</div>
            <div style="display: flex; flex-flow: row; align-items: center; justify-content: center;">
                <div class="pricing-plan-price">
                    ${plan.price}
                </div>
                <div>
                    ${t("userPerMonth")}
                </div>
            </div>
            <div class="pricing-plan-CTA" style="border-color: ${lightColor}">${t("Get started")}</div>
        </div>
    `
}

kiss.templates.pricingFAQ = function(question, answer)  {
    return {
        class: "pricing-faq",
        items: [
            {
                type: "html",
                html: /*html*/ `
                    <h4 class="pricing-faq-title">${question}</h4>
                    <p class="pricing-faq-description">${answer}</p>`
            }
        ]     
    }
}

;