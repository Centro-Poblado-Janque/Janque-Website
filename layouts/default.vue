<template>
   <div v-frag>
      <VHeader />
      <Nuxt />
      <VFooter />
      <PageLoader visible="setVisible" />
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
   transitions: {
      name: 'fade',
      mode: 'in-out',
   },
   components: {
      VHeader,
      VFooter,
      PageLoader,
   },
   methods: {
      setDiscusThread() {
         const d = document.createElement('script')
         d.async = true
         d.src = '//cp-janque-com.disqus.com/count.js'
         d.id = 'dsq-count-scr'
         document.getElementById('__nuxt').insertAdjacentElement('afterend', d)
      },
   },
   computed: {
      setVisible() {},
   },
   mounted() {
      AOS.init({
         easing: 'ease-out-back',
         once: true,
         duration: 1000,
      })
      console.log(process.env.baseURL)
      this.setDiscusThread()
   },
}
</script>

<style lang="scss" global>
@import '~/assets/scss/customs/settings';
#__layout {
   position: relative;
   min-height: 100vh;
}
#__layout > * {
   flex-grow: 0;
}
</style>
