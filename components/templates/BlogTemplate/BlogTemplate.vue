<template>
   <section class="blog-section  page--gradient">
      <header class="blog-head  l-section ly-grid l-section ly-grid-9 grid-center">
         <div class="grid--col-3 ly-sticky">
            <slot name="header-content"> </slot>
         </div>
         <div class="grid--col-6">
            <slot name="header-img"> </slot>
         </div>
      </header>

      <div class="blog-main  l-section ly-grid l-section ly-grid-8 gap">
         <section class="grid--col-5">
            <slot name="principal"> </slot>
         </section>
         <section class="grid--col-3 ly-flex dir:column">
            <Title text="Ultimas Entradas" class="mb-1" />
            <slot name="recent"></slot>
         </section>
      </div>

      <div class="blog-main  l-section ly-grid l-section ly-grid-3 gap ly-grid:lg-2">
         <slot></slot>
      </div>

      <aside class="blog-footer pb-2">
         <div class=" l-section ly-grid">
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
      margin-top: 4rem;
      margin-bottom: 3rem;
   }
   &-footer {
      width: 100%;
   }
}

.description {
   display: inline-block;
   margin-top: 1rem;
   font-size: 1.5rem;
   line-height: 1.75rem;
   color: #6b6a7c;
}
</style>
