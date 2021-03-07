<template>
    <MainWrapperApp>
        <PageLoader />
        <VHeader />
            <Nuxt/>
        <VFooter />
    </MainWrapperApp>
</template>

<script>
import { Fragment } from 'vue-fragment'
import VFooter from '../components/layout/VFooter.vue'
import VHeader from '../components/layout/MainHeader.vue'
import PageLoader from '../components/utils/PageLoader.vue'
export default {
    name: 'MainLayout',
    components: {
        VHeader,
        VFooter,
        PageLoader,
        MainWrapperApp: Fragment,
    },
    methods: {
        setDiscusThread () {
            const d = document.createElement('script');
            d.async = true;
            d.src = '//cp-janque-com.disqus.com/count.js'
            d.id = 'dsq-count-scr';
            document.body.appendChild(d)
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
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
    transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
    opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
    transform-origin: top;
    animation: bounce-in 0.8s;
}
.bounce-leave-active {
    transform-origin: top;
    animation: bounce-out 0.5s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(0);
    }
}
</style>