<template>
	<section class="news-section">
		<header class="news-head dark-gradient-bg">
			<slot name="header"> </slot>
		</header>

		<ViewBox class="news-main">
			<div class="container md-grid md-grid-3 with-full-gap auto-row-500">
				<slot> </slot>
			</div>
		</ViewBox>

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
@import '~/assets/scss/customs/mixin';
.news {
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
	&-footer {
		width: 100%;
	}
}
</style>
