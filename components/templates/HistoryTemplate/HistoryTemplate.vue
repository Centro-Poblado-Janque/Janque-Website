<template>
   <section class="history-section">
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
@import '~/assets/scss/customs/mixin';
.history {
   &-section {
      display: block;
   }
}
</style>
