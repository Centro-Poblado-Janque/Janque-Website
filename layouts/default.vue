<template>
    <Fragment>
        <PageLoader />
        <AppNavigation />
        <main id="main-app-wrapper">
            <Nuxt />
        </main>
        <AppFooter />
        <script id="dsq-count-scr" src="//cp-janque-com.disqus.com/count.js" async></script>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import icon from './../static/logo.svg'
import './../static/styles/normalize.css'
import AppFooter from '../components/layout/AppFooter.vue'
import AppNavigation from '../components/layout/AppNavigation.vue'
import PageLoader from '../components/utils/PageLoader.vue'
export default {
    components: {
        Fragment,
        AppNavigation,
        AppFooter,
        PageLoader,
    },
    head: () => ({
        link: [
            { hid: 'favicon', rel: 'icon', href: icon }
        ],
    })
}
</script>

<style lang="scss" global>
@import './../assets/styles/';
#__layout{
    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
}

</style>

