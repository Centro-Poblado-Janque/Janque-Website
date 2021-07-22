<template name="template home__page">
   <MainContent class="p-page" data-page="home">
      <HomeTemplate>
         <template #header>
            <Carousel class="full"></Carousel>
         </template>
      </HomeTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: 'slide-bottom',
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
}
</script>
