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
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
         .sortBy('createdAt', 'asc')
         .fetch()
      return {
         notices,
      }
   },
   mounted() {
      console.log(this.notices)
   },
}
</script>
