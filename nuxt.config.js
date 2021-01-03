let data = 'Alex Segundo';
export default{
    target: 'static',
    srcDir: './',
    head: {
        title: 'Centro Poblado Janque - Inicio',
        link: [
            { rel: 'autor', content:'Alex Segundo' },
            { rel: 'publisher', href: "<a href='https://segundoalex.com/about'></a>" },
            { href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&amp;family=Roboto:wght@100;300;400;500&amp;family=Noto+Sans+JP:wght@300;400;500&amp;display=swap", rel:"stylesheet"}
        ],
        meta: [
            { charset: 'UTF-8' },
            { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" },
            { name: 'description', content: 'Janque development site whit nuxt' },
            { name: 'mobile-wep-app-capable', content: 'yes' },
            { name: 'keywords', content: 'Yanque, Janque, Janque.com, Centro Poblado de Janque, Incahuasi-Janque'},

            //----Twitter Support------>
            { name: 'twitter:card', content: data },
            { name: 'twitter:site', content: ''},
            { name: 'twitter:title', content: ''},
            { name: 'twitter:description', content: ''},
            { name: 'twitter:creator', content: ''},
            { name: 'twitter:image:src', content: ''},

            //----Open Graph------>
            { property: 'og:title', content: 'Hola mundo' },
            { property: 'og:type', content: 'Website' },
            { property: 'og:url', content: 'https://cp-janque.com' },
            { property: 'og:image', content: 'https://example.com/img.png' },
            { property: 'og:description', content: 'Janque Website Made With Love' },
            { property: 'og:site_name', content: 'Centro Poblado de Janque' },
            { property: 'website:publish_time', content: '20/12/2020' }
        ],
        script: [
            { src:"https://kit.fontawesome.com/c5e61bb352.js", crossorigin:"anonymous" }
        ]
    },
}