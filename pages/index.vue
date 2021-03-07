<template name="template home__page">
   <MainContent class="page:home" data-page="home">
      <header class="home-head">
         <Container> </Container>
      </header>
   </MainContent>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/styles/mixin';
.page\:home {
   color: var(--text-body);
}
.home-head {
   min-height: 100vh;
   padding-top: 80px;
   position: relative;
   &::after {
      content: '';
      display: block;
      background-image: url('./../assets/img/error_bg.jpg');
      transition: all 0.1s ease-in-out;
      z-index: -1;
      animation: change_banner 14s infinite linear;
      filter: brightness(0.45);
      @include normalize_img; @include absolute_position;
   }
}
@keyframes change_banner {
   0% {
      background-image: url('./../assets/img/banner_1.png');
   }
   32% {
      background-image: url('./../assets/img/banner_1.png');
   }

   33% {
      background-image: url('./../assets/img/banner_2.jpg');
   }
   65% {
      background-image: url('./../assets/img/banner_2.jpg');
   }

   66% {
      background-image: url('./../assets/img/banner_3.png');
   }
   100% {
      background-image: url('./../assets/img/banner_3.png');
   }
}
</style>
