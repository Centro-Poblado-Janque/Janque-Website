<template>
   <div class="brand-logo-container">
      <MovilBrand v-if="isMovil"></MovilBrand>
      <DesktopBrand v-else></DesktopBrand>
   </div>
</template>

<script>
import MovilBrand from '@/components/utils/LogoJanque.vue'
import DesktopBrand from '@/components/utils/Logo.vue'
export default {
   name: 'LogotypeLogic',
   components: {
      MovilBrand,
      DesktopBrand,
   },
   methods: {
      MovilChange() {
         return matchMedia('(max-width: 1200px)').addListener(mql =>
            mql.matches ? (this.isMovil = true) : (this.isMovil = false)
         )
      },
   },
   data() {
      return {
         isMovil: true,
      }
   },
   mounted() {
      this.MovilChange()
   },
}
</script>
