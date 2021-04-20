<template name="template__page-history">
   <MainContent class="p-page history-page">
      <SocialMediaSEO
         title="Conoce nuestra historia | Centro Poblado Janque"
         description="No hay una mejor manera de conocer un lugar, sino sabiendo su historia. El poblado de Janque sus raices tienen mucho que decir"
         url="historia"
      />
      <header class="history-head">
         <Container> </Container>
      </header>
      <article class="history-body">
         <Container>
            <h2>Como nació Janque</h2>
            <p>Janque es una de los Centros Poblados mas grandes del Distrito de Incahuasi</p>
            <h2>Etimilogia</h2>
            <p>Hay muchas hipotesis de como pudo haber nacido la palabra janque.</p>
            <p>Una de ellas es</p>
         </Container>
      </article>
   </MainContent>
</template>

<script>
export default {}
</script>

<style lang="scss">
.history-head {
   min-height: 80vh;
   padding-top: 80px;
   position: relative;
   &::after {
      content: '';
      display: block;
      background-image: url('~/assets/img/history-head.jpg');
      transition: all 0.1s ease-in-out;
      z-index: -1;
      filter: brightness(0.45);
   }
}
.history-body {
   margin: 2rem auto;
}</style
>>
