
import { resolve } from "path";
import MetaConfig from './meta.config';

export default {
    head: MetaConfig,
    modules: ['@nuxt/content', '@nuxtjs/composition-api'],
    plugins: ['~/assets/vue/directives.client.js', '~/components/global'],
    css: ['~/assets/styles/index.scss'],
    srcDir: './',
    loadingIndicator: {
        name: 'fading-circle',
        color: 'teal',
        background: 'white',
    },
    loading: {
        color: 'teal',
        height: '2px',
        continue: true,
    },
    alias: {
        'blog-img': resolve(__dirname, './assets/img/blog-img'),
        'blog-autor': resolve(__dirname, './assets/img/avatar')
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
                    localIdentName: 'md--[local]-[hash:base32:6]',
                },
            },
        },
        postcss: [
            require('autoprefixer')({
                browsers: ['> 2%']
            })
        ]
    }
}
