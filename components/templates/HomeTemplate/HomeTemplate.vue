<template>
   <section class="home-section">
      <header class="home-head">
         <slot name="header"> </slot>
      </header>

      <div class="home-main">
         <div class="container md-grid md-grid-3 with-full-gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="home-footer">
         <div class="container md-grid">
            <slot name="footer"> </slot>
         </div>
      </aside>
   </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.home {
   &-section {
      display: block;
   }

   &-head {
      min-height: 100vh;
   }
}
</style>
