<template name="template home__page">
	<MainContent class="p-page" data-page="home">
		<HomeTemplate>
			<template #header>
				<Carousel></Carousel>
			</template>
		</HomeTemplate>
		<section></section>
	</MainContent>
</template>

<script>
import Carousel from '@/components/utils/widgets/Carousel.vue'
export default {
	components: {
		Carousel,
		HomeTemplate: () => import('@/components/templates/HomeTemplate/HomeTemplate.vue'),
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
</style>
