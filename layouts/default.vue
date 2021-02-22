<template>
    <MainWrapperApp>
        <PageLoader />
        <AppNavigation />
            <Nuxt/>
        <AppFooter />
        <script id="dsq-count-scr" src="//cp-janque-com.disqus.com/count.js" async></script>
    </MainWrapperApp>
</template>

<script>
import { Fragment } from 'vue-fragment'
import icon from './../static/logo.svg'
import './../static/styles/normalize.css'
import AppFooter from '../components/layout/AppFooter.vue'
import AppNavigation from '../components/layout/AppNavigation.vue'
import PageLoader from '../components/utils/PageLoader.vue'
export default {
    name: 'MainLayout',
    components: {
        AppNavigation,
        AppFooter,
        PageLoader,
        MainWrapperApp: Fragment,
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