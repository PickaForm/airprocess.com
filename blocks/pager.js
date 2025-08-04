kiss.templates.pager = function (count, skip, limit, searchTerm, searchFunction, getItemsFunction) {
    const rest = count % limit
    const numberOfPages = Math.floor(count / limit) + ((rest == 0) ? 0 : 1)
    const pageNumber = skip / limit

    kiss.router.updateUrlHash({
        page: pageNumber + 1
    })

    let pagerButtons = []

    for (let i = 0; i < numberOfPages; i++) {
        let newButton = {
            type: "button",
            text: i + 1 + "",
            color: (i == pageNumber) ? "#ffffff" : "",
            backgroundColor: (i == pageNumber) ? "#00aaee" : "",
            fontSize: "1.5vh !important",
            width: "4vh",
            height: "4vh",
            borderRadius: "10vh",
            margin: "5px",
            action: () => {
                const newSkip = i * limit
                if (searchTerm) {
                    searchFunction(searchTerm, newSkip, limit)
                } else {
                    getItemsFunction(newSkip, limit)
                }
            }
        }
        pagerButtons.push(newButton)
    }

    return pagerButtons
}
