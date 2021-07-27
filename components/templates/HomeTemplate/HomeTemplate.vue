<template>
   <section data-detch="home" v-frag>
      <header class="home-head">
         <slot name="header"> </slot>
      </header>

      <div class="home-partial section-teal section--decorate">
         <div class="l-section ly-grid ly-grid:lg-2">
            <slot name="first-section"> </slot>
         </div>
      </div>

      <div class="home-partial bg-primary section-img-desc full-wide">
         <div class="l-section ly-grid ly-grid-2">
            <slot name="second-section"> </slot>
         </div>
      </div>
   </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.home {
   &-head {
      min-height: 100vh;
   }
}
.section-teal {
   background-color: #02b69e;
}
.home-partial {
   --padding: 6rem;
   padding-bottom: var(--padding);
   padding-top: var(--padding);
}
.section-img-desc {
   @include image('~/assets/img/home-ilustracion.jpg');
}
</style>
