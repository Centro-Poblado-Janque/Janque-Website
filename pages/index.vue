<template name="template home__page">
   <MainContent class="page:home" data-page="home">
      <header class="home-head">
         <div class="home-header">
            <p>Janque</p>
         </div>
      </header>
      <div class="demo">

      </div>
   </MainContent>
</template>

<script>
export default {

}
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
      background-image: url('~/assets/img/principal.png');
      transition: all 0.1s ease-in-out;
      z-index: -1;
      filter: brightness(0.5);
      @include normalize_img; @include absolute_position;
   }
}
.home-header{
   position: absolute;
   top: 40%;
   height: 20px;

}
</style>
