<template>
	<div class="blog-section">
		<header class="blog-head dark-gradient-bg">
			<slot name="header"> </slot>
		</header>

		<div class="blog-main">
			<div class="container md-grid md-grid-3 with-full-gap">
				<slot> </slot>
			</div>
		</div>

		<aside class="blog-footer">
			<div class="container md-grid">
				<slot name="footer"> </slot>
			</div>
		</aside>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.blog {
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
