kiss.app.defineView({
    id: "pricing",
    meta: {
        url: {
            en: "https://pickaform.fr/en/pricing",
            fr: "https://pickaform.fr/fr/pricing",
            es: "https://pickaform.fr/es/pricing"
        },
        title: {
            en: "Pricing | Pickaform",
            fr: "Tarifs | Pickaform",
            es: "Precios | Pickaform"
        },
        description: {
            en: `Get the Right Plan for Your Business Needs.`,
            fr: `Sélectionnez le plan adapté à vos besoins.`,
            es: `Elige el plan adecuado para tus necesidades empresariales.`
        }
    },    
    renderer: function (id, target) {
        const t = defineTexts(id, {
            title: {
                en: "Get the Right Plan for<br>Your Business Needs",
                fr: "Sélectionnez le plan<br>adapté à vos besoins",
                es: "Elige el plan adecuado<br>para tus necesidades empresariales"
            },
            subtitle: {
                en: "Register and start your 14 days free trial.",
                fr: "Enregistrez vous et démarrez l'essai de 14 jours.",
                es: "Regístrate y comienza tu prueba gratuita de 14 días."
            },
            nocoders: {
                en: `<br>
                <br>
                You are a <span class="text-highlight" style="background-color: #00aaee">Freelance NoCoder</span> or a <span class="text-highlight" style="background-color: #a1ed00">NoCode Agency</span>?
                <br>Claim your special offer by scheduling an appointment <a href="https://calendly.com/pickaform/pickaform-live-demo">here</a>`,
                fr: `<br>
                <br>
                Vous êtes un <span class="text-highlight" style="background-color: #00aaee">NoCodeur Freelance</span> ou une <span class="text-highlight" style="background-color: #a1ed00">Agence NoCode</span> ?
                <br>Demandez votre offre spéciale en prenant RDV <a href="https://calendly.com/pickaform/pickaform-live-demo">ici</a>`,
                es: `<br>
                <br>
                ¿Eres un <span class="text-highlight" style="background-color: #00aaee">NoCoder Freelance</span> o una <span class="text-highlight" style="background-color: #a1ed00">Agencia NoCode</span>?
                <br>Reclama tu oferta especial programando una cita <a href="https://calendly.com/pickaform/pickaform-live-demo">aquí</a>`
            },
            unlimitedForms: {
                en: "unlimited forms",
                fr: "formulaires illimités",
                es: "formularios ilimitados"
            },
            unlimitedWorkflows: {
                en: "unlimited workflows",
                fr: "workflows illimités",
                es: "flujos de trabajo ilimitados"
            },
            userPerMonth: {
                en: "user /<br>month",
                fr: "utilisateur /<br>mois",
                es: "usuario /<br>mes"
            },
            "Get started": {
                en: "Get started",
                fr: "Inscription",
                es: "Inscripción"
            },
            enterprisePlan: {
                en: `We have many other plans beyond that + on-premise versions beyond 100 users + a legacy HCL Domino version.
                <br>
                Please contact us for more informations: contact@pickaform.com`,
                fr: `Nous avons des offres au-delà + des versions on-premise à partir de 100 utilisateurs + une version compatible HCL Domino.
                <br>
                Contactez-nous pour plus d'informations : contact@pickaform.com`,
                es: `Tenemos muchas otras ofertas más allá de eso + versiones on-premise a partir de 100 usuarios + una versión HCL Domino heredada.
                <br>
                Contáctenos para obtener más información: contact@pickaform.`
            },
            contactUs: {
                en: "Contact us",
                fr: "Contactez-nous",
                es: "Contáctenos"
            },
            bookDemo: {
                en: `I book a demo`,
                fr: `Je réserve une démo`,
                es: `Reservo una demo`
            },
            faq0: {
                en: "Why choose pickaform?",
                fr: "Pourquoi choisir pickaform ?",
                es: "¿Por qué elegir pickaform?"
            },
            answer0: {
                en: `Pickaform is not a cloud software born from a simple idea and created quickly to surf the wave of no-code.
                The story begins in 2009, long before "no-code" existed, and the design of the platform was 100% guided by the use of its users.
                In 2019, ten years after the very first version, the platform is dedicated "IBM CHAMPION" in the category of Collaboration software.
                From the outset, the platform has kept the same philosophy:
                <br>• easy-to-make forms
                <br>• a la carte functionalities integrated into forms
                <br>• flexible and quick-to-implement workflow feature
                <br>• simplicity
                <br>Today, large companies use Pickaform on a daily basis for all types of use, and 95% of our users who adopt the platform use it for several years, guaranteeing maximum ROI.`,
                fr: `Pickaform n'est pas un logiciel cloud issu d'une simple idée et créé rapidement pour surfer sur la vague du no-code.
                L'histoire commence en 2009, bien avant que le "no-code" existe, et la conception de la plateforme a été guidée à 100% par l'usage de ses utilisateurs.
                En 2019, soit dix ans après la toute première version, la plateforme est consacrée "IBM CHAMPION" dans la categorie des logiciels de Collaboration.
                Depuis l'origine, la plateforme a conservé la même philosophie :
                <br>• formulaires simples à fabriquer
                <br>• fonctionnalités à la carte intégrées aux formulaires
                <br>• fonctionnalité de workflow flexible et rapide à mettre en place
                <br>• simplicité
                <br>Aujourd'hui, de grandes entreprises utilisent Pickaform au quotidien pour tous types d'usages, et 95% de nos utilisateurs qui adoptent la plateforme l'utilisent plusieurs années, garantissant un ROI maximal.`,
                es: `Pickaform no es un software en la nube nacido de una idea simple y creado rápidamente para surfear la ola del no-code.
                La historia comienza en 2009, mucho antes de que existiera el "no-code", y el diseño de la plataforma fue 100% guiado por el uso de sus usuarios.
                En 2019, diez años después de la primera versión, la plataforma es consagrada "IBM CHAMPION" en la categoría de software de colaboración.
                Desde el principio, la plataforma ha mantenido la misma filosofía:
                <br>• formularios fáciles de hacer
                <br>• funcionalidades a la carta integradas en los formularios
                <br>• característica de flujo de trabajo flexible y rápida de implementar
                <br>• simplicidad
                <br>Hoy en día, grandes empresas utilizan Pickaform a diario para todo tipo de usos, y el 95% de nuestros usuarios que adoptan la plataforma la utilizan durante varios años, garantizando un ROI máximo`
            },
            faq1: {
                en: "Who uses Pickaform?",
                fr: "A qui s'adresse Pickaform ?",
                es: "¿Quién usa Pickaform?"
            },
            answer1: {
                en: `Pickaform is made for: companies, associations, the public sector, digital companies who want to accelerate their projects and deliver faster, no-coders & makers who are looking to work with larger clients.
                More generally, pickaform is useful for any person or organization wishing to organize their data and/or set up business processes to streamline collaboration.`,
                fr: `Pickaform est fait pour : les entreprises, les associations, le secteur public, les entreprises du numérique qui veulent accélérer leurs projets et livrer plus vite, les no-coders & makers qui cherchent à travailler avec des clients plus gros.
                Plus généralement, pickaform est utile à toute personne ou organisation souhaitant organiser ses données et/ou mettre en place des processus métier pour fluidifier la collaboration.`,
                es: `Pickaform está hecho para: empresas, asociaciones, el sector público, empresas digitales que desean acelerar sus proyectos y entregar más rápido, no-coders y makers que buscan trabajar con clientes más grandes.
                Más generalmente, pickaform es útil para cualquier persona u organización que desee organizar sus datos y/o establecer procesos comerciales para agilizar la colaboración.`
            },
            faq2: {
                en: "How can I take a subscription?",
                fr: "Comment puis-je prendre un abonnement ?",
                es: "¿Cómo puedo suscribirme?"
            },
            answer2: {
                en: `First, sign up and enjoy your free trial including up to 20 users!
                If you need to upgrade before the end of your free period, you'll do it directly from your Pickaform account management.`,
                fr: `Inscrivez-vous et profitez d'abord de votre période d'essai, incluant jusqu'à 20 utilisateurs !
                Si vous souhaitez changer d'offre avant la fin de votre essai, vous pourrez le faire directement dans Pickaform depuis votre rubrique "Compte".`,
                es: `Primero, regístrese y disfrute de su período de prueba gratuito, incluyendo hasta 20 usuarios.
                Si necesita actualizar antes de que finalice su período gratuito, lo hará directamente desde la gestión de su cuenta de Pickaform.`
            },
            faq3: {
                en: "When will I be able to stop my subscription?",
                fr: "Quand pourrai-je stopper mon abonnement ?",
                es: "¿Cuándo podré cancelar mi suscripción?"
            },
            answer3: {
                en: `There is no constraint. You can stop at anytime.`,
                fr: `Il n'y a aucun engagement de durée. Vous pouvez stopper votre abonnement à tout moment.`,
                es: `No hay compromiso de duración. Puede cancelar su suscripción en cualquier momento.`
            },
            faq4: {
                en: "What will happen if I exceed a quota?",
                fr: "Que se passera-t-il si je dépasse un quota ?",
                es: "¿Qué sucederá si excedo un límite?"
            },
            answer4: {
                en: `You'll have a message in the application, inviting you to upgrade or to clean your unused data or inactive users.`,
                fr: `Vous serez averti par un message dans l'application, vous invitant soit à prendre une offre supérieure, soit à faire un peu de ménage pour supprimer les utilisateurs inactifs.`,
                es: `Recibirá un mensaje en la aplicación, invitándole a actualizar o a limpiar sus datos no utilizados o usuarios inactivos.`
            },
            faq5: {
                en: "Will my data be secured?",
                fr: "Mes données seront-elles en sécurité ?",
                es: "¿Mis datos estarán seguros?"
            },
            answer5: {
                en: `Security and confidentiality is our major concern.
                We host data exclusively in France and not in the USA.
                The protocol https ensures that nobody can steal or exploit your data between your office and our servers, but you have to secure your password on your side!`,
                fr: `La sécurité et la confidentialité de vos données sont nos préoccupations majeures.  
                Nous hébergeons vos données exclusivement en France et non aux Etats-Unis.  
                Le protocole https garantit qu'aucune donnée ne peut être exploitée entre chez vous et nos serveurs.`,
                es: `La seguridad y la confidencialidad de sus datos son nuestras principales preocupaciones.
                Alojamos los datos exclusivamente en Francia y no en los Estados Unidos.
                El protocolo https garantiza que nadie pueda robar o explotar sus datos entre su oficina y nuestros servidores, ¡pero debe asegurar su contraseña de su lado!`
            },
            faq6: {
                en: "Who can see my data?",
                fr: "Qui peut voir mes données ?",
                es: "¿Quién puede ver mis datos?"
            },
            answer6: {
                en: `Only you.
                Each application you create generates a brand new database on our server, 100% dedicated to you, in order to have the best  possible separation between you and other customers. We are nearly alone to do this in a multi-tenancy architecture!
                Even the members of our team can't access your applications. No statistics are collected on your usage.`,
                fr: `Seulement vous.  
                Chacune de vos applications crée une nouvelle base de données qui vous est 100% dédiée, afin de garantir un cloisonnement et une étanchéité absolue avec les autres clients.  
                Même les membres de notre équipe ne peuvent pas accéder au contenu de vos applications. Aucune statistique n'est collectée sur votre usage.`,
                es: `Solo tú.
                Cada aplicación que creas genera una nueva base de datos en nuestro servidor, 100% dedicada a ti, para tener la mejor separación posible entre tú y otros clientes. ¡Casi somos los únicos en hacer esto en una arquitectura de multiinquilino!
                Incluso los miembros de nuestro equipo no pueden acceder a tus aplicaciones. No se recopilan estadísticas sobre tu uso.`,
            },
            faq7: {
                en: "It's expensive, isn't it?",
                fr: "C'est cher, non ?",
                es: "¿Es caro, no?"
            },
            answer7: {
                en: `On the contrary, it's not!
                First, you don't pay anything until you are convinced.
                On one hand, we perfectly know that on this kind of platform, very rich of many features, it takes time to evaluate everything we can do with it!
                On the other hand, our serious competitors sell their solution around 24€/user/month and up to 60€/user/month, where we can go down to 1€/user/month.
                To be clear, we have better prices if we are compared to product with similar features.`,
                fr: `Bien au contraire !  
                D'une part, vous ne payez rien tant que vous n'êtes pas convaincu.
                Nous savons parfaitement que sur ce type de plateforme riche en fonctionnalités, il faut un peu de temps avant de prendre la mesure de tout ce que l'on peut faire avec !
                D'autre part, nos concurrents sérieux proposent leur solution en moyenne à 24€/user/mois et jusqu'à 60€/user/mois, alors que notre tarif est dégressif jusqu'à 1€/user/mois.
                En clair, nous sommes imbattables sur le prix lorsque l'on est comparé à des produits de fonctionnalités similaires.`,
                es: `¡Al contrario, no lo es!
                En primer lugar, no pagas nada hasta que estés convencido.
                Por un lado, sabemos perfectamente que en este tipo de plataforma, muy rica en muchas características, se necesita tiempo para evaluar todo lo que podemos hacer con ella.
                Por otro lado, nuestros competidores serios venden su solución alrededor de 24€/usuario/mes y hasta 60€/usuario/mes, donde nosotros podemos bajar hasta 1€/usuario/mes.
                Para ser claros, tenemos mejores precios si nos comparamos con productos con características similares.`
            },
            faq8: {
                en: "How much data can I store on Pickaform?",
                fr: "A quel volume de données ai-je le droit ?",
                es: "¿Cuántos datos puedo almacenar en Pickaform?"
            },
            answer8: {
                en: `Pickaform allows you to attach files to your form data, but its goal is not to replace a file management or a virtual drive (like Google Drive, One Drive, DropBox ...), so, we calculated that an average volume of 100MB of attachments per user was sufficient for standard use of our platform. For example, this represents 2GB of data for 20 users.
                Contact us if you think your needs will exceed this usage. In that case, there is an option to connect your own storage compatible with S3 and store without any limit.`,
                fr: `Pickaform vous permet bien de joindre des fichiers à vos données de formulaire, mais sa fonction n'est pas de venir en remplacement d'une gestion de fichiers ou d'un drive (Google Drive, One Drive, DropBox...), aussi, nous avons calculé qu'un volume moyen de 100Mo de pièces jointes par utilisateur était suffisant pour un usage standard de notre plateforme. Cela représente 2Go de données pour 20 utilisateurs.
                Nous consulter si vous pensez que vos besoins dépasseront cet usage, vous pouvez connecter votre propre stockage compatible S3 et stocker sans aucune limite.`,
                es: `Pickaform le permite adjuntar archivos a sus datos de formulario, pero su objetivo no es reemplazar una gestión de archivos o una unidad virtual (como Google Drive, One Drive, DropBox ...), por lo que calculamos que un volumen promedio de 100 MB de archivos adjuntos por usuario era suficiente para el uso estándar de nuestra plataforma. Por ejemplo, esto representa 2 GB de datos para 20 usuarios.
                Contáctenos si cree que sus necesidades superarán este uso. En ese caso, hay una opción para conectar su propio almacenamiento compatible con S3 y almacenar sin ningún límite.`
            }
        })

        const plans = [{
                name: "Silver",
                users: 10,
                apps: 3,
                price: "15€",
                storage: "10 GB Storage",
                color: "#00aaee"
            },
            {
                name: "Gold",
                users: 20,
                apps: 5,
                price: "13€",
                storage: "20 GB Storage",
                color: "#8833ee"
            },
            {
                name: "Platinum",
                users: 50,
                apps: 10,
                price: "11€",
                storage: "50 GB Storage",
                color: "#ed3757"
            }
        ]

        return createBlock({
            id,
            target,
            layout: "vertical",
            alignItems: "center",

            items: [
                kiss.templates.title({
                    title: t("title"),
                    subtitle: t("subtitle") + t("nocoders"),
                }),

                // PRICING TABLE
                {
                    type: "html",
                    class: "pricing-table",
                    html: kiss.templates.pricingTable(plans, t)
                },

                // ENTERPRISE PLAN
                {
                    type: "html",
                    class: "pricing-enterprise",
                    html: t("enterprisePlan")
                },

                // CONTACT
                kiss.templates.buttonCTA(t("bookDemo"), "booking"),

                // FAQ
                {
                    class: "feature-top-separator"
                },
                {
                    class: "pricing-faq-container",
                    items: [
                        {
                            type: "html",
                            class: "pricing-faq-title",
                            html: "FAQ"
                        },
                        kiss.templates.pricingFAQ(t("faq0"), t("answer0")),
                        kiss.templates.pricingFAQ(t("faq1"), t("answer1")),
                        kiss.templates.pricingFAQ(t("faq2"), t("answer2")),
                        kiss.templates.pricingFAQ(t("faq3"), t("answer3")),
                        kiss.templates.pricingFAQ(t("faq4"), t("answer4")),
                        kiss.templates.pricingFAQ(t("faq5"), t("answer5")),
                        kiss.templates.pricingFAQ(t("faq6"), t("answer6")),
                        kiss.templates.pricingFAQ(t("faq7"), t("answer7")),
                        kiss.templates.pricingFAQ(t("faq8"), t("answer8"))
                    ]
                }
            ],

            events: {
                click: (event) => {
                    const target = event.target.closest("div")
                    if (target && target.classList.contains("pricing-plan-CTA")) {
                        document.location = kiss.global.pathPickaform + "/client/pickaform/index.html#ui=authentication-register"
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