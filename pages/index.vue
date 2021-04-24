<template name="template home__page">
   <MainContent class="p-page" data-page="home">
      <Carousel></Carousel>
      <header class="m-welcome-index">
         <ViewBox class="container">
            <h1>Municipalidad del Centro Poblado de Janque</h1>
            <p>
               Bienvenidos a la Web del Centro Poblado de Janque. Esperemos que disfrute su estadía en esta
               web, de lo contrario le estaremos deviendo patatas con queso
            </p>
            <button class="a-Button a-Button--info">Quiero saber mas</button>
         </ViewBox>
      </header>
      <section></section>
   </MainContent>
</template>

<script>
import Carousel from '@/components/utils/widgets/Carousel.vue'
export default {
   components: {
      Carousel,
   },
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
</style>
