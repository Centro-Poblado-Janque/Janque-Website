<template>
   <section class="about-section">
      <header class="about-head">
         <div class=" l-section ly-grid l-section ly-grid-10 gap">
            <slot name="header"> </slot>
         </div>
      </header>

      <section class="about-main  l-section ly-grid l-section ly-grid-10">
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
      padding-top: var(--desktop-nav-size);
      position: relative;
   }
   &-main {
      margin-top: 3rem;
      margin-bottom: 3rem;
   }
}
.skew-img {
   position: relative;
   img {
      border-radius: 6px;
      box-shadow: 0px 0px 3px rgba($color: #000000, $alpha: 0.5);
   }
   .skew-a {
      margin-right: 15%;
      //animation: translate-skew ease-in-out 4s 1s infinite alternate;
   }
   .skew-b {
      top: 50%;
      left: 15%;
      position: absolute;
      animation: translate-img ease-in-out 4s 1s infinite alternate;
   }
}
</style>
