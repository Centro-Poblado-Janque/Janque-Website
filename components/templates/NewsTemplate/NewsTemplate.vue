<template>
   <section class="news-section">
      <header class="news-head ">
         <div class="container">
            <slot name="header"> </slot>
         </div>
      </header>

      <div class="news-main">
         <div class="container md-grid md-grid-3 gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="news-footer">
         <div class="container md-grid">
            <slot name="footer"> </slot>
         </div>
      </aside>
   </section>
</template>

<script>
export default {
   name: 'NewsTemplate',
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.news {
   &-head {
      min-height: 60vh;
      padding-top: var(--desktop-nav-size);
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
.news-header {
   height: 45vh;
   @include image-gradient('~/assets/img/janque-day.png');
}
</style>
