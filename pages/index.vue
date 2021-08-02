<template name="template home__page">
   <MainContent>
      <HomeTemplate>
         <template #header>
            <SlideShow />
         </template>

         <template #first-section>
            <div class="ly-flex dir:column l-center l-main-center">
               <Title
                  text="Quieres descubrir nuevas culturas y conocer mas el Perú"
                  big_text="true"
                  center="true"
               />
               <Typography
                  type="sumarry"
                  content="Descubre la cultura janqueña y sorprendete de lo que puede ofrecerte"
               />
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
      SlideShow: () => import('@/components/utils/widgets/SliderHome.vue'),
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
