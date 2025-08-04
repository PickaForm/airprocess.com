kiss.app.defineView({
    id: "product",
    meta: {
        url: {
            en: "https://pickaform.fr/en/product",
            fr: "https://pickaform.fr/fr/product",
            es: "https://pickaform.fr/es/product"
        },
        title: {
            en: "Product features | Pickaform",
            fr: "Fonctionnalités du produit | Pickaform",
            es: "Características del producto | Pickaform"
        },
        description: {
            en: `The full list of Pickaform product features. Combine no-code, workflows and AI to build the most flexible tools for your company!`,
            fr: `Liste des fonctionnalités du produit Pickaform. Combinez no-code, workflows et IA pour créer les outils les plus flexibles pour votre entreprise !`,
            es: `Lista completa de las características del producto Pickaform. ¡Combine no-code, flujos de trabajo e IA para crear las herramientas más flexibles para su empresa!`
        }
    },
    renderer: function (id, target) {
        const t = defineTexts(id, {
            getStarted: {
                en: "Get started",
                fr: "Démarrez maintenant",
                es: "Empezar"
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demo`
            },
            title: {
                en: `Super <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Really <span class="text-highlight" style="background-color: #a1ed00">powerful</span>`,
                fr: `Super <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Vraiment <span class="text-highlight" style="background-color: #a1ed00">puissant</span>`,
                es: `Súper <span class="text-highlight" style="background-color: #00aaee">simple</span>
                <br>
                Realmente <span class="text-highlight" style="background-color: #a1ed00">poderoso</span>`
            },
            subtitle: {
                en: "Create your own business tool and start saving time.",
                fr: "Créez votre outil métier sur mesure et commencez à gagner du temps.",
                es: "Cree su propia herramienta de negocio y comience a ahorrar tiempo."
            },
            titleForms: {
                en: "Flexible forms",
                fr: "Des formulaires flexibles",
                es: "Formularios flexibles"
            },
            descriptionForms: {
                en: "With our forms, you can collect simple or complex information and process it efficiently with your personalized workflows.",
                fr: "Avec nos formulaires, vous pouvez collecter des informations simples ou complexes et les traiter efficacement avec vos workflows personnalisés.",
                es: "Con nuestros formularios, puede recopilar información simple o compleja y procesarla de manera eficiente con sus flujos de trabajo personalizados."
            },
            titleViews: {
                en: "Define your views",
                fr: "Définissez vos vues",
                es: "Defina sus vistas"
            },
            descriptionViews: {
                en: "Configure how you want to see your data: choose your columns, filters, sort, group and create as many views as needed.",
                fr: "Configurez la façon dont vous souhaitez voir vos données : choisissez vos colonnes, filtres, triez, regroupez et créez autant de vues que nécessaire.",
                es: "Configure cómo desea ver sus datos: elija sus columnas, filtros, ordene, agrupe y cree tantas vistas como sea necesario."
            },
            titleWorkflows: {
                en: "Customize your workflows to fit your needs",
                fr: "Personnalisez vos workflows pour vos besoins",
                es: "Personalice sus flujos de trabajo para sus necesidades"
            },
            descriptionWorkflows: {
                en: "In a few minutes, you define the steps of the workflow, the actors and the possible decisions, and go!",
                fr: "En quelques minutes, vous définissez les étapes du workflow, les acteurs et les décisions possibles, et c'est parti !",
                es: "En unos minutos, define los pasos del flujo de trabajo, los actores y las decisiones posibles, ¡y listo!"
            },
            titleFormDesigner: {
                en: "Integrated form designer",
                fr: "Editeur de formulaire intégré",
                es: "Diseñador de formularios integrado"
            },
            descriptionFormDesigner: {
                en: "Directly improve the layout of your forms in a few clicks and drag&drop.",
                fr: "Améliorez directement la mise en page de vos formulaires en quelques clics et drag&drop.",
                es: "Mejore directamente el diseño de sus formularios en unos pocos clics y arrastrar y soltar."
            },
            titleFormFeatures: {
                en: "A la carte form features",
                fr: "Fonctionnalités à la carte",
                es: "Funcionalidades a la carta"
            },
            descriptionFormFeatures: {
                en: "Keep ergonomics simplified by activating only the features your users need.",
                fr: "Gardez une ergonomie simplifée en activant seulement les fonctionnalités dont vos utilisateurs ont besoin.",
                es: "Mantenga la ergonomía simplificada activando solo las funciones que necesitan sus usuarios."
            },
            titleCustomViews: {
                en: "Organize your work",
                fr: "Organisez votre travail",
                es: "Organice su trabajo"
            },
            descriptionCustomViews: {
                en: "Thanks to the custom views, you will be able to create your own structure to organize all your work in the best possible way.",
                fr: "Grâce aux vues personnalisées, vous pourrez créer votre propre structure pour organiser l'ensemble de votre travail de la meilleure façon possible.",
                es: "Gracias a las vistas personalizadas, podrá crear su propia estructura para organizar todo su trabajo de la mejor manera posible."
            },
            titleLeftNavigation: {
                en: "All data just a click away",
                fr: "Toutes les données à portée de clic",
                es: "Todos los datos a un clic de distancia"
            },
            descriptionLeftNavigation: {
                en: "The side navigation bar effectively condenses all the information you need, and each user only sees what is relevant to them.",
                fr: "La barre de navigation latérale condense efficacement toute l'information dont vous avez besoin, et chaque utilisateur ne voit que ce qui le concerne.",
                es: "La barra de navegación lateral condensa eficazmente toda la información que necesita, y cada usuario solo ve lo que le concierne."
            },
            titleTabsNavigation: {
                en: "Unless you like tabs?",
                fr: "A moins que vous aimiez les onglets ?",
                es: "¿A menos que te gusten las pestañas?"
            },
            descriptionTabsNavigation: {
                en: "We never impose your way of working: if you prefer the tabbed presentation, you just need 1 click.",
                fr: "On ne vous impose jamais votre manière de travailler : si vous préférez la présentation en onglet, c'est juste un clic.",
                es: "Nunca imponemos su forma de trabajar: si prefiere la presentación en pestañas, solo necesita 1 clic."
            },
            titleBookDemo: {
                en: `Not convinced?`,
                fr: `Pas convaincu ?`,
                es: `¿No estás convencido?`
            },
            subtitleBookDemo: {
                en: `Tell us about your project,<br>we show you<span class="text-highlight" style="background-color: #00aaee">in 20 minutes</span> how to make it happen.`,
                fr: `Expliquez-nous votre projet,<br>nous vous montrons<span class="text-highlight" style="background-color: #00aaee">en 20mn</span> comment le réaliser.`,
                es: `Cuéntenos sobre su proyecto,<br>le mostramos<span class="text-highlight" style="background-color: #00aaee">en 20 minutos</span> cómo hacerlo realidad.`
            },

            // Field types
            titleFieldTypes: {
                en: "24 field types to build your forms",
                fr: "24 types de champs pour vos formulaires",
                es: "24 tipos de campos para construir sus formularios"
            },
            descriptionFieldTypes: {
                en: "Creating rich forms requires a variety of field types.<br>We've got you covered!",
                fr: "La création de formulaires riches nécessite des types de champs variés.<br>Nous vous couvrons !",
                es: "Crear formularios ricos requiere una variedad de tipos de campos.<br>¡Te tenemos cubierto!"
            },
            // View features
            titleViewCreation: {
                en: "Many ways to organize your data",
                fr: "Plein de manières d'organiser vos données",
                es: "Muchas formas de organizar sus datos"
            },
            subtitleViewCreation: {
                en: "Creating views is a simple yet extremely powerful process for organizing all your data.",
                fr: "La création des vues est un processus simple mais extrêmement puissant pour organiser toutes vos données.",
                es: "Crear vistas es un proceso simple pero extremadamente poderoso para organizar todos sus datos."
            },

            // Field types
            text: {
                en: "text",
                fr: "texte",
                es: "texto"
            },
            textDescription: {
                en: "Add a short text to any element. The Text field is used for simple fields such as a name, a title, etc...",
                fr: "Ajoutez un court texte à n'importe quel élément. Le champ Texte est utilisé pour des champs simples comme un nom, un titre, etc...",
                es: "Agregue un texto corto a cualquier elemento. El campo de texto se utiliza para campos simples como un nombre, un título, etc..."
            },
            number: {
                en: "number",
                fr: "nombre",
                es: "número"
            },
            numberDescription: {
                en: "The Number field allows you to process numeric information such as amounts, and you can also choose the units.",
                fr: "Le champ Nombre permet de traiter les informations numériques telles que des montants, et vous pouvez également choisir les unités.",
                es: "El campo Número le permite procesar información numérica como cantidades, y también puede elegir las unidades."
            },
            date: {
                en: "date",
                fr: "date",
                es: "fecha"
            },
            dateDescription: {
                en: "The Date field allows you to select a date in a calendar, for example to set an appointment, a deadline...",
                fr: "Le champ Date vous permet de sélectionner une date dans un calendrier, par exemple pour fixer un RDV, une deadline, une échéance...",
                es: "El campo Fecha le permite seleccionar una fecha en un calendario, por ejemplo para programar una cita, una fecha límite..."
            },
            time: {
                en: "time",
                fr: "heure",
                es: "hora"
            },
            timeDescription: {
                en: "The Time control offers a drop-down list of time slots whose increment can be configured (every 5 minutes for example).",
                fr: "Le champ Heure propose une liste déroulante de créneaux horaires dont l'incrément est paramétrable (par exemple toutes les 5mn).",
                es: "El control de Tiempo ofrece una lista desplegable de franjas horarias cuyo incremento se puede configurar (cada 5 minutos por ejemplo)."
            },
            paragraph: {
                en: "paragraph",
                fr: "paragraphe",
                es: "párrafo"
            },
            paragraphDescription: {
                en: "The Paragraph field allows you to enter longer and multi-line texts, for example to add comments, descriptions, etc...",
                fr: "Le champ Paragraphe permet de saisir des textes plus longs et multi-lignes, par exemple pour ajouter des commentaires, des descriptions, etc...",
                es: "El campo Párrafo le permite ingresar textos más largos y de varias líneas, por ejemplo para agregar comentarios, descripciones, etc..."
            },
            aiParagraph: {
                en: "AI paragraph",
                fr: "paragraphe IA",
                es: "párrafo IA"
            },
            aiParagraphDescription: {
                en: "The AI Paragraph field allows you to automatically generate the content of the field according to your instructions, thanks to OpenAI's AI.",
                fr: "Le champ Paragraphe AI permet de générer automatiquement le contenu du champ selon vos instructions, grâce à l'IA de OpenAI.",
                es: "El campo Párrafo IA le permite generar automáticamente el contenido del campo según sus instrucciones, gracias a la IA de OpenAI."
            },
            select: {
                en: "dropdown list",
                fr: "liste déroulante",
                es: "lista desplegable"
            },
            selectDescription: {
                en: "The Drop-down List control offers to choose from a list of values possibly associated with a color.",
                fr: "Le champ Liste déroulante propose de choisir parmi une liste de valeurs éventuellement associées à une couleur.",
                es: "El control de Lista desplegable ofrece elegir entre una lista de valores posiblemente asociados con un color"
            },
            multipleSelect: {
                en: "multiple select",
                fr: "sélection multiple",
                es: "selección múltiple"
            },
            multipleSelectDescription: {
                en: "Drop-down lists can, if necessary, receive several values and act as tags.",
                fr: "Les listes déroulantes peuvent si nécessaire recevoir plusieurs valeurs et agir comme des tags.",
                es: "Las listas desplegables pueden, si es necesario, recibir varios valores y actuar como etiquetas."
            },
            checkbox: {
                en: "checkbox",
                fr: "case à cocher",
                es: "casilla de verificación"
            },
            checkboxDescription: {
                en: "The Check box field allows you to create checklists or to switch the state of a record easily.",
                fr: "Le champ Case à cocher permet d'élaborer des checklists ou bien de basculer l'état d'une fiche facilement.",
                es: "El campo de Casilla de verificación le permite crear listas de verificación o cambiar fácilmente el estado de un registro."
            },
            progressBar: {
                en: "progress bar",
                fr: "barre de progression",
                es: "barra de progreso"
            },
            progressBarDescription: {
                en: "The Progress Bar field is useful for visually displaying the progress of a task or project.",
                fr: "Le champ Barre de progression est utile pour afficher l'avancement d'une tâche ou d'un projet de manière visuelle.",
                es: "El campo de Barra de progreso es útil para mostrar visualmente el progreso de una tarea o proyecto."
            },
            rating: {
                en: "rating",
                fr: "notation",
                es: "calificación"
            },
            ratingDescription: {
                en: "The Rating field is useful for rating items from 1 to 10, and you can also choose its symbol.",
                fr: "Le champ Notation est utile pour évaluer des objets de 1 à 10, et vous pouvez aussi choisir son symbole.",
                es: "El campo de Calificación es útil para calificar elementos de 1 a 10, y también puede elegir su símbolo."
            },
            attachment: {
                en: "attachment",
                fr: "fichiers attachés",
                es: "archivos adjuntos"
            },
            attachmentDescription: {
                en: "The Attached Files field is used to embed one or more attachments to your data, and images can be previewed directly.",
                fr: "Le champ Fichiers attachés est utilisé pour intégrer une ou plusieurs pièces jointes à vos données, et les images peuvent être prévisualisées directement.",
                es: "El campo de Archivos adjuntos se utiliza para incrustar uno o varios archivos adjuntos en sus datos, y las imágenes se pueden previsualizar directamente."
            },
            selectColumn: {
                en: "column selection",
                fr: "sélection de colonne",
                es: "selección de columna"
            },
            selectColumnDescription: {
                en: "This type of field dynamically generates a drop-down list of values by retrieving information from a column in your views.",
                fr: "Ce type champ génère dynamiquement une liste déroulante de valeurs en récupérant les informations dans une colonne de vos vues.", 
                es: "Este tipo de campo genera dinámicamente una lista desplegable de valores recuperando información de una columna en sus vistas."
            },
            selectView: {
                en: "selection inside a view",
                fr: "sélection dans une vue",
                es: "selección dentro de una vista"
            },
            selectViewDescription: {
                en: "This type of field allows you to simultaneously retrieve several values from another record by selecting it in a view.",
                fr: "Ce type de champ permet de récupérer simultanément plusieurs valeurs d'une autre fiche en la sélectionnant dans une vue.",
                es: "Este tipo de campo le permite recuperar simultáneamente varios valores de otro registro seleccionándolo en una vista."
            },
            collaborators: {
                en: "collaborators",
                fr: "collaborateurs",
                es: "colaboradores"
            },
            collaboratorsDescription: {
                en: "The Collaborators field displays in a drop-down list the address book of users and groups in your organization.",
                fr: "Le champ Collaborateurs affiche dans une liste déroulante le carnet d'adresses des utilisateurs et des groupes de votre organisation.",
                es: "El campo de Colaboradores muestra en una lista desplegable el libro de direcciones de usuarios y grupos de su organización."
            },
            color: {
                en: "color",
                fr: "couleur",
                es: "color"
            },
            colorDescription: {
                en: "The Color field is used to assign a color to a data item by selecting it from a palette.",
                fr: "Le champ Couleur permet d'attribuer une couleur à une donnée en la sélectionnant dans une palette.", 
                es: "El campo de Color se utiliza para asignar un color a un elemento de datos seleccionándolo en una paleta."
            },
            icon: {
                en: "icon",
                fr: "icône", 
                es: "icono"
            },
            iconDescription: {
                en: "The Icon control allows you to associate an icon to an object from a palette of more than 1000 icons.",
                fr: "Le champ Icône vous permet d'associer une icône à un objet à partir d'une palette de plus de 1000 icônes.",
                es: "El control de Icono le permite asociar un icono a un objeto de una paleta de más de 1000 iconos."
            },
            password: {
                en: "password",
                fr: "mot de passe",
                es: "contraseña"
            },
            passwordDescription: {
                en: "The Password field is a text field whose characters are masked in order to keep certain data confidential.",
                fr: "Le champ Mot de passe est un champ texte dont les caractères sont masqués afin de garder la confidentialité de certaines données.",
                es: "El campo de Contraseña es un campo de texto cuyos caracteres están enmascarados para mantener confidencial ciertos datos."
            },
            link: {
                en: "link to another table",
                fr: "liaison vers une autre table",
                es: "enlace a otra tabla"
            },
            linkDescription: {
                en: "The Link field is very powerful because it allows you to connect your records to each other and navigate between them by hyper-link.",
                fr: "Le champ de Liaison est très puissant car il permet de connecter vos données entre elles et de naviguer entre données par hyper-lien.",
                es: "El campo de Enlace es muy potente porque le permite conectar sus registros entre sí y navegar entre ellos mediante hipervínculo."
            },
            lookup: {
                en: "lookup a value on linked records",
                fr: "valeur d'une fiche liée",
                es: "buscar un valor en registros vinculados"
            },
            lookupDescription: {
                en: "This type of field is used to automatically retrieve a value in a record linked by a Link field.",
                fr: "Ce type de champ permet de récupérer automatiquement une valeur dans une fiche liée par un champ de liaison.",
                es: "Este tipo de campo se utiliza para recuperar automáticamente un valor en un registro vinculado por un campo de enlace."
            },
            summary: {
                en: "summarize data from linked records",
                fr: "calcul à partir de fiches liées",
                es: "resumir datos de registros vinculados"
            },
            summaryDescription: {
                en: "This type of field is used to perform a calculation (ex: sum, average) from all the records linked by a Link field.",
                fr: "Ce type de champ permet d'effectuer un calcul (de type somme, moyenne) à partir de toutes les fiches liées par un champ de liaison.",
                es: "Este tipo de campo se utiliza para realizar un cálculo (por ejemplo: suma, promedio) de todos los registros vinculados por un campo de enlace."
            },
            iaImage: {
                en: "AI image",
                fr: "image IA",
                es: "imagen IA"
            },
            iaImageDescription: {
                en: "generate an image via AI directly from this field and the image file will be stored as an attachment",
                fr: "générez une image via l'IA directement depuis ce champ et le fichier de l'image sera stocké comme pièce jointe",
                es: "genere una imagen a través de la IA directamente desde este campo y el archivo de imagen se almacenará como un archivo adjunto"
            },
            map: {
                en: "map",
                fr: "carte",
                es: "mapa"
            },
            mapDescription: {
                en: "The Map field allows you to display a location on a map and interact with it.",
                fr: "Le champ Carte permet d'afficher une localisation sur une carte et d'interagir avec elle.",
                es: "El campo de Mapa le permite mostrar una ubicación en un mapa e interactuar con ella."
            },
            richtext: {
                en: "rich text",
                fr: "texte enrichi",
                es: "texto enriquecido"
            },
            richtextDescription: {
                en: "Rich text allows you to manage formatted text with common features (titles, bold, italic, underline, color, etc...)",
                fr: "Le texte enrichi vous permet de gérer du texte mise en forme avec les fonctionnalités courantes (titres, gras, italique, souligné, couleur, etc...)",
                es: "El texto enriquecido le permite gestionar texto con formato con funciones comunes (títulos, negrita, cursiva, subrayado, color, etc...)"
            },            

            // Views
            columnSelection: {
                en: "choose your columns",
                fr: "choix des colonnes",
                es: "elige tus columnas"
            },
            columnSelectionDescription: {
                en: "Select the columns most relevant to your way of working.",
                fr: "Sélectionnez les colonnes les plus pertinentes pour votre façon de travailler.",
                es: "Seleccione las columnas más relevantes para su forma de trabajar."
            },
            sorting: {
                en: "Multi-column sorting",
                fr: "Tri multi-colonnes",
                es: "Ordenación de varias columnas"
            },
            sortingDescription: {
                en: "Sort your columns easily on several levels. Quickly change your sorting criteria.",
                fr: "Triez vos colonnes facilement sur plusieurs niveaux. Modifiez rapidement vos critères de tri.",
                es: "Ordene sus columnas fácilmente en varios niveles. Cambie rápidamente sus criterios de ordenación."
            },
            filtering: {
                en: "simple of complex filters",
                fr: "filtres simples ou complexes",
                es: "filtros simples o complejos"
            },
            filteringDescription: {
                en: "Filter your data with simple or complex logic by nesting 'AND' and 'OR' operations.",
                fr: "Filtrez vos données avec une logique simple ou complexe en imbriquant des opérations 'ET' et 'OU'.",
                es: "Filtre sus datos con lógica simple o compleja anidando operaciones 'Y' y 'O'."
            },
            grouping: {
                en: "grouping",
                fr: "regroupement",
                es: "agrupamiento"
            },
            groupingDescription: {
                en: "This type of field is used to perform a calculation (ex: sum, average) from all the records linked by a Link field.",
                fr: "En un seul clic, regroupez les données sur le critère de votre choix pour une meilleure vue d'ensemble.",
                es: "Con un solo clic, agrupe los datos según el criterio que elija para una mejor visión general."
            },
            multiGrouping: {
                en: "multi-level grouping",
                fr: "regroupement multi-niveaux",
                es: "agrupamiento multinivel"
            },
            multiGroupingDescription: {
                en: "By grouping your data on several levels, you can instantly have a more detailed view of your data.",
                fr: "En regroupant vos données sur plusieurs niveaux, vous pouvez en un instant avoir une vision plus fine de vos données.",
                es: "Al agrupar sus datos en varios niveles, puede tener al instante una vista más detallada de sus datos."
            },
            aggregations: {
                en: "aggregations",
                fr: "aggrégations",
                es: "agregaciones"
            },
            aggregationsDescription: {
                en: "When a view is grouped on one or more fields, you can automatically calculate aggregations for each level.",
                fr: "Lorsqu'une vue est groupée sur un ou plusieurs champs, vous pouvez automatiquement calculer des aggrégations pour chaque niveau.",
                es: "Cuando una vista está agrupada en uno o varios campos, puede calcular automáticamente agregaciones para cada nivel."
            },
            calendar: {
                en: "calendar view",
                fr: "vue calendrier"
            },
            calendarDescription: {
                en: "The Calendar view allows you to display your data in a calendar format and interact with it. The calendar offers a monthly or weekly view and allows filters and the choice of fields to display.",
                fr: "La vue Calendrier permet d'afficher vos données sous forme de calendrier et d'interagir avec elles. Le calendrier propose une vision mensuelle ou par semaine et autorise les filtres et le choix des champs à afficher.",
                es: "La vista de Calendario le permite mostrar sus datos en formato de calendario e interactuar con ellos. El calendario ofrece una vista mensual o semanal y permite filtros y la elección de campos para mostrar."
            },
            kanban: {
                en: "kanban view",
                fr: "vue kanban",
                es: "vista kanban"
            },
            kanbanDescription: {
                en: "The Kanban view allows you to organize your data in columns and move them easily from one column to another. It is particularly useful for managing small projects or daily tasks.",
                fr: "La vue Kanban permet d'organiser vos données en colonnes et de les déplacer facilement d'une colonne à l'autre. C'est particulièrement utile pour gérer les petits projets ou les tâches quotidiennes.",
                es: "La vista Kanban le permite organizar sus datos en columnas y moverlos fácilmente de una columna a otra. Es particularmente útil para gestionar pequeños proyectos o tareas diarias."
            },
            timeline: {
                en: "timeline view",
                fr: "vue chronologie",
                es: "vista de línea de tiempo"
            },
            timelineDescription: {
                en: "The Timeline view allows you to display your data in a temporal format by adjusting the zoom levels. In addition, it allows you to group data and filters as with other views.",
                fr: "La vue Chronologie permet d'afficher vos données sous forme temporelle en ajustant les niveaux de zoom. De plus, elle permet en plus d'effectuer des regroupements de données et des filtres comme avec les autres vues.",
                es: "La vista de Línea de tiempo le permite mostrar sus datos en un formato temporal ajustando los niveles de zoom. Además, le permite agrupar datos y filtros como con otras vistas."
            },
            gallery: {
                en: "gallery view",
                fr: "vue galerie",
                es: "vista de galería"
            },
            galleryDescription: {
                en: "The Gallery view allows you to display your data in a visually appealing way, with images and cards. It is ideal for showcasing products or creative content.",
                fr: "La vue Galerie permet d'afficher vos données de manière visuellement attrayante, avec des images et des cartes. Elle est idéale pour mettre en valeur des produits ou du contenu créatif.",
                es: "La vista de Galería le permite mostrar sus datos de una manera visualmente atractiva, con imágenes y tarjetas. Es ideal para mostrar productos o contenido creativo."
            },
            map: {
                en: "map view",
                fr: "vue carte",
                es: "vista de mapa"
            },
            mapDescription: {
                en: "The Map view allows you to display your data on a map, which is particularly useful for location-based information.",
                fr: "La vue Carte permet d'afficher vos données sur une carte, ce qui est particulièrement utile pour les informations basées sur la localisation.",
                es: "La vista de Mapa le permite mostrar sus datos en un mapa, lo que es particularmente útil para la información basada en la ubicación."
            },
            dashboard: {
                en: "dashboard view",
                fr: "vue tableau de bord",
                es: "vista de tablero"
            },
            dashboardDescription: {
                en: "The Dashboard view allows you to create a personalized dashboard with widgets to visualize your data in a dynamic way.",
                fr: "La vue Tableau de bord permet de créer un tableau de bord personnalisé avec des widgets pour visualiser vos données de manière dynamique.",
                es: "La vista de Tablero le permite crear un tablero personalizado con widgets para visualizar sus datos de manera dinámica."
            }
        })

        return createBlock({
            id: id,
            target,
            layout: "vertical",
            alignItems: "center",

            items: [
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle")
                }),
                kiss.templates.screenshot("dashboard - incidents - pickaform.webp"),

                // FORMS
                kiss.templates.feature({
                    title: t("titleForms"),
                    description: t("descriptionForms"),
                    screenshot: "forms-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // VIEWS
                kiss.templates.feature({
                    title: t("titleViews"),
                    description: t("descriptionViews"),
                    screenshot: "business contract management - flexible views - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // WORKFLOWS
                kiss.templates.feature({
                    title: t("titleWorkflows"),
                    description: t("descriptionWorkflows"),
                    screenshot: "workflows-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // FORM DESIGN
                kiss.templates.feature({
                    title: t("titleFormDesigner"),
                    description: t("descriptionFormDesigner"),
                    screenshot: "integrated simple and powerful form designer - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // FORM FEATURES
                kiss.templates.feature({
                    title: t("titleFormFeatures"),
                    description: t("descriptionFormFeatures"),
                    screenshot: "a la carte form features - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // NAVIGATOR
                kiss.templates.feature({
                    title: t("titleCustomViews"),
                    description: t("descriptionCustomViews"),
                    screenshot: "views-thumbnail.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // LEFT PANE NAVIGATION
                kiss.templates.feature({
                    title: t("titleLeftNavigation"),
                    description: t("descriptionLeftNavigation"),
                    screenshot: "navigate through your data with left pane - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "left"
                }),

                {
                    class: "feature-top-separator"
                },

                // TABS NAVIGATOR
                kiss.templates.feature({
                    title: t("titleTabsNavigation"),
                    description: t("descriptionTabsNavigation"),
                    screenshot: "navigate through your data with tabs - pickaform.webp",
                    CTA: t("bookDemo"),
                    textPosition: "right",
                    color: "#555555",
                    backgroundColor: "var(--feature-background)"
                }),

                // FIELD TYPES
                kiss.templates.title({
                    title: t("titleFieldTypes"),
                    subtitle: t("descriptionFieldTypes")
                }),

                {
                    class: "feature-top-separator"
                },

                // Block containing all field types
                {
                    class: "feature-details-container",
                    items: [{
                        class: "feature-details-container-column",
                        items: [
                            // Text
                            kiss.templates.featureDetails({
                                title: t("text"),
                                description: t("textDescription"),
                                screenshot: "field type - text - pickaform.webp"
                            }),
                            // Number
                            kiss.templates.featureDetails({
                                title: t("number"),
                                description: t("numberDescription"),
                                screenshot: "field type - number - pickaform.webp"
                            }),
                            // Date
                            kiss.templates.featureDetails({
                                title: t("date"),
                                description: t("dateDescription"),
                                screenshot: "field type - date - pickaform.webp"
                            }),
                            // Time
                            kiss.templates.featureDetails({
                                title: t("time"),
                                description: t("timeDescription"),
                                screenshot: "field type - time - pickaform.webp"
                            }),
                            // Paragraph
                            kiss.templates.featureDetails({
                                title: t("paragraph"),
                                description: t("paragraphDescription"),
                                screenshot: "field type - paragraph - pickaform.webp"
                            }),
                            // AI paragraph
                            kiss.templates.featureDetails({
                                title: t("aiParagraph"),
                                description: t("aiParagraphDescription"),
                                screenshot: "field type - AI paragraph - pickaform.webp"
                            }),
                            // Select
                            kiss.templates.featureDetails({
                                title: t("select"),
                                description: t("selectDescription"),
                                screenshot: "field type - select - pickaform.webp"
                            }),
                            // Multiple select
                            kiss.templates.featureDetails({
                                title: t("multipleSelect"),
                                description: t("multipleSelectDescription"),
                                screenshot: "field type - multiple select - pickaform.webp"
                            }),
                            // Checkbox
                            kiss.templates.featureDetails({
                                title: t("checkbox"),
                                description: t("checkboxDescription"),
                                screenshot: "field type - checkbox - pickaform.webp"
                            }),
                            // Progress bar
                            kiss.templates.featureDetails({
                                title: t("progressBar"),
                                description: t("progressBarDescription"),
                                screenshot: "field type - progress bar - pickaform.webp"
                            }),
                            // Rating
                            kiss.templates.featureDetails({
                                title: t("rating"),
                                description: t("ratingDescription"),
                                screenshot: "field type - ranking - pickaform.webp"
                            }),
                            // Attachment
                            kiss.templates.featureDetails({
                                title: t("attachment"),
                                description: t("attachmentDescription"),
                                screenshot: "field type - attachment - pickaform.webp"
                            }),
                            // Select from view column
                            kiss.templates.featureDetails({
                                title: t("selectColumn"),
                                description: t("selectColumnDescription"),
                                screenshot: "field type - select from column - pickaform.webp"
                            }),
                            // Select from view
                            kiss.templates.featureDetails({
                                title: t("selectView"),
                                description: t("selectViewDescription"),
                                screenshot: "field type - select from view - pickaform.webp"
                            }),
                            // Collaborators
                            kiss.templates.featureDetails({
                                title: t("collaborators"),
                                description: t("collaboratorsDescription"),
                                screenshot: "field type - collaborators - pickaform.webp"
                            }),
                            // Color
                            kiss.templates.featureDetails({
                                title: t("color"),
                                description: t("colorDescription"),
                                screenshot: "field type - color - pickaform.webp"
                            }),
                            // Icon
                            kiss.templates.featureDetails({
                                title: t("icon"),
                                description: t("iconDescription"),
                                screenshot: "field type - icon - pickaform.webp"
                            }),
                            // Password
                            kiss.templates.featureDetails({
                                title: t("password"),
                                description: t("passwordDescription"),
                                screenshot: "field type - password - pickaform.webp"
                            }),
                            // Link
                            kiss.templates.featureDetails({
                                title: t("link"),
                                description: t("linkDescription"),
                                screenshot: "field type - link - pickaform.webp"
                            }),
                            // Lookup
                            kiss.templates.featureDetails({
                                title: t("lookup"),
                                description: t("lookupDescription"),
                                screenshot: "field type - lookup - pickaform.webp"
                            }),
                            // Summary
                            kiss.templates.featureDetails({
                                title: t("summary"),
                                description: t("summaryDescription"),
                                screenshot: "field type - summary - pickaform.webp"
                            }),
                            // IA image
                            kiss.templates.featureDetails({
                                title: t("iaImage"),
                                description: t("iaImageDescription"),
                                screenshot: "field type - aiImage - pickaform.webp"
                            }),
                            // Map
                            kiss.templates.featureDetails({
                                title: t("map"),
                                description: t("mapDescription"),
                                screenshot: "field type - map - pickaform.webp"
                            }),
                            // Rich text field
                            kiss.templates.featureDetails({
                                title: t("richtext"),
                                description: t("richtextDescription"),
                                screenshot: "field type - richtext - pickaform.webp"
                            })
                        ]
                    }]
                },

                // WORKING WITH VIEWS
                kiss.templates.title({
                    title: t("titleViewCreation"),
                    subtitle: t("subtitleViewCreation")
                }),

                {
                    class: "feature-top-separator"
                },

                // Block containing view demo
                {
                    class: "feature-details-container",
                    items: [{
                        class: "feature-details-container-column",
                        items: [
                            // Column selection
                            kiss.templates.featureDetails({
                                title: t("columnSelection"),
                                description: t("columnSelectionDescription"),
                                screenshot: "views - select columns - pickaform.webp"
                            }),
                            // Sorting
                            kiss.templates.featureDetails({
                                title: t("sorting"),
                                description: t("sortingDescription"),
                                screenshot: "views - multi-column sorting - pickaform.webp"
                            }),
                            // Filtering
                            kiss.templates.featureDetails({
                                title: t("filtering"),
                                description: t("filteringDescription"),
                                screenshot: "views - filter data - pickaform.webp"
                            }),
                            // One level grouping
                            kiss.templates.featureDetails({
                                title: t("grouping"),
                                description: t("groupingDescription"),
                                screenshot: "views - group data - pickaform.webp"
                            }),
                            // Multi-level grouping
                            kiss.templates.featureDetails({
                                title: t("multiGrouping"),
                                description: t("multiGroupingDescription"),
                                screenshot: "views - multi-level grouping data - pickaform.webp"
                            }),
                            // Aggregations
                            kiss.templates.featureDetails({
                                title: t("aggregations"),
                                description: t("aggregationsDescription"),
                                screenshot: "views - data aggregation - pickaform.webp"
                            }),
                            // Calendar
                            kiss.templates.featureDetails({
                                title: t("calendar"),
                                description: t("calendarDescription"),
                                screenshot: "views - calendar - pickaform.webp"
                            }),                        
                            // Kanban
                            kiss.templates.featureDetails({
                                title: t("kanban"),
                                description: t("kanbanDescription"),
                                screenshot: "views - kanban - pickaform.webp"
                            }),
                            // Timeline
                            kiss.templates.featureDetails({
                                title: t("timeline"),
                                description: t("timelineDescription"),
                                screenshot: "views - timeline - pickaform.webp"
                            }),
                            // Gallery
                            kiss.templates.featureDetails({
                                title: t("gallery"),
                                description: t("galleryDescription"),
                                screenshot: "views - gallery - pickaform.webp"
                            }),
                            // Map
                            kiss.templates.featureDetails({
                                title: t("map"),
                                description: t("mapDescription"),
                                screenshot: "views - map - pickaform.webp"
                            }),
                            // Dashboard
                            kiss.templates.featureDetails({
                                title: t("dashboard"),
                                description: t("dashboardDescription"),
                                screenshot: "views - dashboard - pickaform.webp"
                            })
                        ]
                    }]
                },

                // BOOK A DEMO
                kiss.templates.title({
                    title: t("titleBookDemo"),
                    subtitle: t("subtitleBookDemo")
                }),

                // CONTACT BUTTON
                kiss.templates.buttonCTA(t("bookDemo"), "booking"),

                {
                    class: "feature-top-separator",
                    margin: "10vh 0 0 0"
                }
            ],

            events: {
                click: (event) => {
                    if (event.target.parentNode.classList.contains("feature-CTA")) {
                        log("CTA")
                    }
                }
            },

            methods: {
                load() {
                    animateElements()
                },
                _afterConnected() {
                    this.translateTo(kiss.language.current)
                },
                translateTo
            }
        })
    }
})

;