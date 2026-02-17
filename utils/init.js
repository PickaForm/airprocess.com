// Kiss init
kiss.db.mode = "memory"
kiss.language.get()

// Dark theme between 22h and 6h
// kiss.theme.set({
//     color: (new Date().getHours() <= 6 || new Date().getHours() >= 22) ? "dark" : "light"
// })
kiss.theme.set({
    color: "dark"
})

// Paths
kiss.global.path = `https://${window.location.host}`
kiss.global.pathImg = "/resources/img"
kiss.global.pathAirProcess = `https://app.airprocess.com`

// Contact
kiss.global.contactModelId = "0187b40b-0061-7f65-af86-982a361afcf3"

// AI Art
kiss.global.artEndPoint = "https://app.airprocess.com/command/product"
kiss.global.artModelId = "01889cf0-5878-7352-93b5-3a0fb88c852f"
kiss.global.artTitle = "pJZ5QvWL"
kiss.global.artPulished = "DgllE0KD"

;
