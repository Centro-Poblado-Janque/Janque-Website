<template>
   <MainContent class="p-page about-page">
      <SocialMediaSEO
         title="Sobre Nosotros - Centro Poblado Janque"
         description="Hablemos un poco de Janque"
         url="about"
      />
      <AboutUsTemplate>
         <template #header>
            <img src="~/assets/img/blog_background.jpg" alt="" />
         </template>
         <template #grid-7>
            <h2>Ubicacion de Janque</h2>
            <MapsLocation />
         </template>
      </AboutUsTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: 'slide-bottom',
   components: {
      MapsLocation: () => import('@/components/utils/GoogleMaps.vue'),
      AboutUsTemplate: () => import('@/components/templates/AboutUsTemplate/AboutUsTemplate.vue'),
   },
   mounted() {
      console.log(this.$route)
   },
}
</script>
