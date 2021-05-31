<template>
	<div class="brand-logo-container">
		<MovilBrand v-if="isMovil"></MovilBrand>
		<DesktopBrand v-else></DesktopBrand>
	</div>
</template>

<script>
export default {
	name: 'LogotypeLogic',
	components: {
		MovilBrand: () => import('@/components/utils/MovilBrand.vue'),
		DesktopBrand: () => import('@/components/utils/DesktopBrand.vue'),
	},
	methods: {
		MovilChange() {
			return matchMedia('(max-width: 1200px)').addListener(mql =>
				mql.matches ? (this.isMovil = true) : (this.isMovil = false)
			)
		},
	},
	data() {
		return {
			isMovil: true,
		}
	},
	mounted() {
		this.MovilChange()
	},
}
</script>
