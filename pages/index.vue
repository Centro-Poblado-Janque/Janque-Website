<template name="template home__page">
   <MainContent class="p-page" data-page="home">
      <HomeTemplate>
         <template #header>
            <Carousel></Carousel>
         </template>
      </HomeTemplate>
   </MainContent>
</template>

<script>
export default {
   components: {
      Carousel: () => import('@/components/utils/widgets/Carousel.vue'),
      HomeTemplate: () => import('@/components/templates/HomeTemplate/HomeTemplate.vue'),
   },
}
</script>
