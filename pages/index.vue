<template name="template home__page">
   <MainContent>
      <HomeTemplate>
         <template #header>
            <Carousel></Carousel>
         </template>

         <template #first-section>
            <div class="ly-flex dir:column">
               <Title text="Buscas un lugar en donde pasar las vacaciones" big_text="true" center="true" />
               <Typography type="sumarry" content="Visita Janque y descubre las marravillas que tiene" />
            </div>
            <ImgContainer>
               <img src="~/assets/img/janque-first.jpg" class="u-radius:6" />
            </ImgContainer>
         </template>
      </HomeTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: {
      name: 'fade',
      mode: 'out-in',
   },
   components: {
      Carousel: () => import('@/components/utils/widgets/Carousel.vue'),
      HomeTemplate: () => import('@/components/templates/HomeTemplate/HomeTemplate.vue'),
      ImgContainer: () => import('@/components/atoms/Image/Image.vue'),
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
