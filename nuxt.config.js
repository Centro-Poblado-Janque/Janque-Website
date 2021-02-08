
const description = 'La localidad de Janque es uno de los Centros Poblados mas grandes de Incahuasi y alberga una poblacion de mas de 200 habitantes. Se caracteriza principalmente por sus costumbres y la acogida de su gente, y, en mayor proporcion, por la historia que le antecede como Centro Poblado y por albergar la hacienda mas grande de Incahuasi '

export default {
    modules: ['@nuxt/content'],
    srcDir: './',
    loadingIndicator: {
        name: 'fading-circle',
        color: 'teal',
        background: 'white',
    },
    target: 'static',
    generate: {
        fallback: '404.html',
    },
    content: {
        liveEdit: false,
    },
    build: {
        extractCSS: true,
        html: {
            minify: {
                collapseBooleanAttributes: false,
                decodeEntities: false,
                minifyCSS: false,
                minifyJS: false,
                processConditionalComments: false,
                removeEmptyAttributes: true,
                removeRedundantAttributes: false,
                trimCustomFragments: true,
                useShortDoctype: false,
            },
        },
    },
    head: {
        htmlAttrs: {
            lang: 'es',
            class: 'dark_mode',
        },
        title: 'Centro Poblado Janque - Inicio',
        link: [
            { rel: 'autor', content: 'Alex Segundo' },
            { rel: 'publiher', href: "<a href='https://segundoalex.com/about'></a>",
            },
            { rel: 'stylesheet', href: '/styles/normalize.css' },
            {
                href:
                    'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&family=Nunito:ital,wght@0,200;0,300;0,400;1,300&family=Open+Sans:ital,wght@0,300;0,400;1,400&family=Roboto:wght@100;300;400&display=swap',
                rel: 'stylesheet',
            },
        ],
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
            },
            { hid: 'description', name: 'description', content: description },
            { name: 'mobile-wep-app-capable', content: 'yes' },
            { name: 'keywords', content: 'Yanque Janque Janque.com Centro Poblado de Janque Incahuasi-Janque',
            },

            //----Twitter Support------>
            { name: 'twitter:card', content: '' },
            { name: 'twitter:site', content: '' },
            { name: 'twitter:title', content: '' },
            { name: 'twitter:description', content: description },
            { name: 'twitter:creator', content: '' },
            { name: 'twitter:image:src', content: '' },

            //----Open Graph------>
            { property: 'og:title', content: 'Centro Poblado Janque' },
            { property: 'og:type', content: 'Website' },
            { property: 'og:url', content: 'https://cp-janque.com' },
            { property: 'og:image', content: 'https://example.com/img.png' },
            { property: 'og:description', content: description },
            { property: 'og:site_name', content: 'Centro Poblado de Janque' },
            { property: 'website:publish_time', content: '20/12/2020' },
        ],
        script: [
            {
                src: 'https://kit.fontawesome.com/c5e61bb352.js',
                crossorigin: 'anonymous',
            },
            { src: '/disqus.js' },
        ],
    },
}
