<template>
   <section class="history-section">
      <header class="history-head bg-img-center">
         <slot name="header"> </slot>
      </header>

      <div class="history-main">
         <div class=" l-section ly-grid l-section ly-grid-3 gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="history-footer">
         <div class=" l-section ly-grid">
            <slot name="footer"> </slot>
         </div>
      </aside>
   </section>
</template>

<script>
export default {
   name: 'HistoryTemplate',
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.history {
   &-section {
      display: block;
   }
   &-head {
      min-height: 100vh;
      @include image-gradient('~/assets/img/history-bg.jpg');
   }
}
</style>
