<template>
   <section class="history-section">
<<<<<<< HEAD
      <header style="background: var(--bg-color-acent); height: 400px" class="history-head">
         <div class="cross-center">History of Janque</div>
         <slot name="header"> </slot>
      </header>

      <div class="container">
         <div style="border: 2px solid teal; height: 400px" class="cross-center">Towns of Janque</div>
         <slot> </slot>
      </div>

      <aside class="history-footer">
         <div class="container md-grid">
=======
      <header class="history-head">
         <slot name="header"> </slot>
      </header>

      <div class="history-main">
         <div class=" l-section ly-grid l-section ly-grid-3 gap">
            <slot> </slot>
         </div>
      </div>

      <aside class="history-footer">
         <div class=" l-section ly-grid">
>>>>>>> dev-master
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
<<<<<<< HEAD
=======

   &-head {
      min-height: 100vh;
      @include image-gradient('~/assets/img/history-bg.jpg');
   }
>>>>>>> dev-master
}
</style>
