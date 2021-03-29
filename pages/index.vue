<template name="template home__page">
   <MainContent class="p-page" data-page="home">
      <Carousel></Carousel>ev
      <div class="demo">

      </div>
   </MainContent>
</template>

<script>
import Carousel from '../components/widgets/Carousel.vue'
export default {
   components: { 
      Carousel 
   },

}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
</style>
