<template>
   <section class="history-section">
	   <header class="history-head">
	      <slot name="header"> </slot>
	   </header>
      
	   <div class="history-main">
	      <div class="container md-grid md-grid-3 with-full-gap">
	         <slot> </slot>
	      </div>
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

	&-head {
	   min-height: 100vh;
	}
}
</style>
