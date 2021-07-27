<template>
   <section v-frag>
      <header class="news-head">
         <div class="l-section">
            <slot name="header"> </slot>
         </div>
      </header>

      <div class="news-main">
         <div class=" l-section ly-grid l-section ly-grid-3 gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="news-footer">
         <div class=" l-section ly-grid">
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
