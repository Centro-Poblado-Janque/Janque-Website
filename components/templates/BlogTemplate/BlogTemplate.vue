<template>
   <section class="blog-section">
      <header class="blog-head container">
         <slot name="header"> </slot>
      </header>

      <div class="blog-main container md-grid md-grid-6 gap">
         <section class="lg-grid-4">
            <slot name="principal"> </slot>
         </section>
         <section class="lg-grid-2">
            <slot name="recent"></slot>
         </section>
      </div>

      <div class="blog-main container md-grid md-grid-3 gap">
         <slot></slot>
      </div>

      <aside class="blog-footer">
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
.blog {
   &-head {
      min-height: 48vh;
      padding-top: 80px;
      position: relative;
      transition: all 0.1s ease-in-out;
   }
   &-main {
      margin-top: 3rem;
      margin-bottom: 3rem;
   }
   &-footer {
      width: 100%;
   }
}
</style>
