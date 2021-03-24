<template>
    <div id="__layout" data-target="main-app">
        <VHeader />
            <Nuxt/>
        <VFooter />
        <PageLoader />
    </div>
</template>

<script>
import VFooter from '../components/layout/MainFooter.vue'
import VHeader from '../components/layout/MainHeader.vue'
import PageLoader from '../components/utils/PageLoader.vue'
export default {
    name: 'MainLayout',
    components: {
        VHeader,
        VFooter,
        PageLoader
    },
    methods: {
        setDiscusThread () {
            document.getElementById('__nuxt').replaceChild(this.$el, document.querySelectorAll('#__layout')[0])
            const d = document.createElement('script');
            d.async = true;
            d.src = '//cp-janque-com.disqus.com/count.js'
            d.id = 'dsq-count-scr';
            document.getElementById('__nuxt').insertAdjacentElement('afterend', d)
        }
    },
    mounted () {
        this.setDiscusThread();
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/mixin';
#__layout{
    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
}
</style>