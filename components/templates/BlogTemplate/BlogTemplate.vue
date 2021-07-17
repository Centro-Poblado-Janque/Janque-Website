<template>
   <section class="blog-section">
      <header class="blog-head dark-gradient-bg">
         <h2 class="container">Y si... Aún hay mucho por ver</h2>
         <slot name="header"> </slot>
      </header>

      <ViewBox class="blog-main container md-grid md-grid-3 f-gap auto-row-500 xl-md-grid-2">
         <slot> </slot>
      </ViewBox>

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
@import '~/assets/scss/customs/mixin';
.blog {
   &-head {
      min-height: 48vh;
      padding-top: 80px;
      position: relative;
      transition: all 0.1s ease-in-out;
      h2 {
         color: #e1e1e1;
         margin-top: 10%;
         text-shadow: 2px 3px 7px #e1e1e198;
         //text-align: center;
         font-size: 3.2rem;
         font-family: var(--nunito-sans-font);
      }
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
