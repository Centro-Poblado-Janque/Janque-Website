<template>
   <div id="__layout">
      <VHeader />
      <Nuxt />
      <VFooter />
      <PageLoader />
   </div>
</template>

<script>
import VFooter from '@/components/organisms/Footer/Footer.vue'
import VHeader from '@/components/organisms/Header/Header.vue'
import PageLoader from '../components/utils/PageLoader.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
   name: 'MainLayout',
   components: {
      VHeader,
      VFooter,
      PageLoader,
   },
   methods: {
      setDiscusThread() {
         document.getElementById('__nuxt').replaceChild(this.$el, document.querySelectorAll('#__layout')[0])
         const d = document.createElement('script')
         d.async = true
         d.src = '//cp-janque-com.disqus.com/count.js'
         d.id = 'dsq-count-scr'
         document.getElementById('__nuxt').insertAdjacentElement('afterend', d)
      },
   },
   mounted() {
      AOS.init({
         easing: 'ease-out-back',
         duration: 1000,
      })
      this.setDiscusThread()
   },
}
</script>

<style lang="scss" global>
@import '~/assets/scss/customs/settings';
.homepage--dots {
   position: absolute;
   z-index: -1;
   top: 0;
   width: 100%;
   height: 100%;
   background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' style='enable-background:new 0 0 16 16' xml:space='preserve'%3E%3Crect width='16' fill='none' height='16'/%3E%3Crect x='0' y='0' fill='white' width='1' height='1'/%3E%3C/svg%3E");
   background-size: 16px;
   opacity: 0.35;
}
</style>
