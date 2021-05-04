<template>
	<section class="about-section">
		<header class="about-head">
			<slot name="header"> </slot>
		</header>

		<ViewBox class="about-main">
			<div class="container md-grid md-grid-3 with-full-gap">
				<slot> </slot>
			</div>
		</ViewBox>

		<aside class="about-footer">
			<div class="container">
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
.about {
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
