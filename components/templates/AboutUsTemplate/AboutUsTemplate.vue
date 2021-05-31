<template>
   <section class="about-section">
      <header class="about-head">
         <div class="container md-grid md-grid-10 with-full-gap">
            <slot name="header"> </slot>
         </div>
      </header>

      <section class="about-main container md-grid md-grid-10 with-full-gap">
         <div class="lg-grid-7">
            <slot name="grid-7"> </slot>
         </div>
         <div class="lg-grid-3">
            <slot name="grid-3"></slot>
         </div>
      </section>
   </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.about {
   &-head {
      min-height: 100vh;
      padding-top: 80px;
      position: relative;
   }
   &-main {
      margin-top: 3rem;
      margin-bottom: 3rem;
   }
}
</style>
