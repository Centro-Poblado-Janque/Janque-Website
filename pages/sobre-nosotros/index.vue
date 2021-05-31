<template>
   <MainContent class="p-page about-page">
      <SocialMediaSEO
         title="Sobre Nosotros - Centro Poblado Janque"
         description="Hablemos un poco de Janque"
         url="about"
      />
      <AboutUsTemplate>
         <template name="header"> </template>
         <template #grid-7>
            <h2>Location of Janque Center Town</h2>
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
