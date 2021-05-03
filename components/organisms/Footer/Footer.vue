<template>
	<footer id="main-footer" class="m-footer">
		<Container>
			<ViewBox>
				<h3 class="a-title is-small">Sobre el sitio</h3>
				<div class="footer_info">
					<span>Logo</span>
					<ul class="address--declarations">
						<li>Centro Poblado de Janque</li>
						<li>Incahuasi - Lambayeque</li>
						<li>Lambayeque - Peru</li>
					</ul>
				</div>
			</ViewBox>
			<ViewBox>
				<h3 class="a-title is-small">Cultura</h3>
				<div class="footer_info">
					<span>logo</span>
					<ul class="address--declarations">
						<li>Hacienda Janque</li>
						<li>Cultura Mochica</li>
						<li>Misterios</li>
					</ul>
				</div>
			</ViewBox>
			<FollowIcons />
		</Container>
	</footer>
</template>

<script>
export default {
	name: 'MainFooter',
	components: {
		FollowIcons: () => import('@/components/utils/FollowIcons.vue'),
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';

.footer_info {
	padding: 0.5rem;
	display: flex;
	ul {
		position: relative;
		padding-left: 0.5em;
		list-style: none;
		&::before {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: currentColor;
			left: 0;
		}
	}
}
.svg-icon {
	height: 1em;
	width: 1em;
	margin-right: 0.5rem;
	display: inline-block;
	fill: currentcolor;
}
</style>
