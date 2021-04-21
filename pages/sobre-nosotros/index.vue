<template>
   <MainContent class="p-page about-page">
      <SocialMediaSEO
         title="Sobre Nosotros - Centro Poblado Janque"
         description="Hablemos un poco de Janque"
         url="about"
      />
      <header class="about-head">
         <Container> </Container>
      </header>
      <section class="about_content"></section>
      <ViewBox class="name"> </ViewBox>
      <MapsLocation />
   </MainContent>
</template>

<script>
import MapsLocation from '@/components/utils/GoogleMaps.vue'
export default {
   transition: 'slide-bottom',
   name: 'About',
   components: {
      MapsLocation,
   },
}
</script>

<style lang="scss">
.about-head {
   background: linear-gradient(29deg, #061e1c 0%, #443d1b 53%, #371a25 100%);
   min-height: 100vh;
   padding-top: 80px;
   position: relative;
   transition: all 0.1s ease-in-out;
}
.about_data {
   padding: 2rem 0;
}</style
>>
