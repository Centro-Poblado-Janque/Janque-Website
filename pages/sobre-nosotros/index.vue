<template>
   <MainContent class="p-page about-page">
      <SocialMediaSEO
         title="Sobre Nosotros - Centro Poblado Janque"
         description="Hablemos un poco de Janque"
         url="about"
      />
      <AboutUsTemplate>
         <template #header>
            <div class="skew-img grid--col-5">
               <figure class="skew-a">
                  <img src="~/assets/img/vista-carretera.jpg" alt="" />
               </figure>
               <figure class="skew-b">
                  <img src="~/assets/img/history.png" alt="" />
               </figure>
            </div>
            <div class="grid--col-5 l-center l-main-center p-1">
               <Title text="Que es Janque" big_text="true" />
               <Typography
                  type="sumarry"
                  content="Janque es un centro poblado del distrito de Incahuasi, ubicado en la region Lambayeque, al norte del Perú."
               />
               <Typography
                  type="sumarry"
                  content="Es uno de los centros poblados mas grandes actualmente de Incahuasi; con una rica cultura y una gastronomía muy diversa. 
                  Cuya población aun preserva ideologías de sus ancestros, tanto descendientes de los indígenas como de los españoles."
               />
            </div>
         </template>

         <template #grid-7>
            <Title text="Ubicación" />
            <MapsLocation />
         </template>
      </AboutUsTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: {
      name: 'fade',
      mode: 'out-in',
   },
   components: {
      MapsLocation: () => import('@/components/utils/GoogleMaps.vue'),
      AboutUsTemplate: () => import('@/components/templates/AboutUsTemplate/AboutUsTemplate.vue'),
   },
}
</script>
