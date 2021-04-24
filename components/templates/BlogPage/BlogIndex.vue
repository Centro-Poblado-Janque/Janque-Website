<template>
   <div class="blog-section">
      <header class="blog-head dark-gradient-bg">
         <slot name="header"> </slot>
      </header>
      <div class="blog-main">
         <slot> </slot>
      </div>
      <slot name="footer"> </slot>
   </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.blog {
   &-head {
      min-height: 60vh;
      padding-top: 80px;
      position: relative;
      transition: all 0.1s ease-in-out;
   }
   &-main {
      margin-top: 3rem;
      margin-bottom: 3rem;
   }
}
</style>
