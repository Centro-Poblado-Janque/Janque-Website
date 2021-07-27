<template>
   <section class="about-section">
      <header class="about-head">
         <div class=" l-section ly-grid l-section ly-grid-10 with-full-gap">
            <slot name="header"> </slot>
         </div>
      </header>

      <section class="about-main  l-section ly-grid l-section ly-grid-10 with-full-gap">
         <div class="grid--col-7">
            <slot name="grid-7"> </slot>
         </div>
         <div class="grid--col-3">
            <slot name="grid-3"></slot>
         </div>
      </section>
   </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
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
