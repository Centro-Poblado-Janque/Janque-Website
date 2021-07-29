import { resolve } from 'path'
import MetaConfig from './meta.config'

export default {
    head: MetaConfig,
    modules: ['@nuxt/content', '@nuxtjs/dotenv'],
    buildModules: ['@nuxtjs/composition-api'],
    plugins: ['~/assets/vue/directives.client.js', '~/components/global'],
    css: ['~/assets/scss/index.scss'],
    srcDir: './',
    env: {
        baseURL: process.env.NODE_ENV == 'dev' ? `http://localhost:3000` : 'https://cp-janque.com',
    },
    loadingIndicator: '~/components/utils/loading.vue',
    loading: {
        color: 'teal',
        height: '2px',
        continue: true,
    },
    alias: {
        'blog-img': resolve(__dirname, './assets/img/blog-img'),
        'blog-autor': resolve(__dirname, './assets/img/avatar'),
    },
    target: 'static',
    generate: {
        fallback: '404.html',
    },
    server: {
        host: '0.0.0.0',
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
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                removeComments: true,
            },
        },
        loaders: {
            cssModules: {
                modules: {
                    localIdentName: 'mod-[local]--[hash:base64:4]',
                },
            },
        },
    },
}
