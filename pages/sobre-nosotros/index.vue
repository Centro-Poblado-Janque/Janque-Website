<template>
	<MainContent class="p-page about-page">
		<SocialMediaSEO
			title="Sobre Nosotros - Centro Poblado Janque"
			description="Hablemos un poco de Janque"
			url="about"
		/>
		<AboutUsTemplate>
			<template #footer>
				<MapsLocation />
			</template>
		</AboutUsTemplate>
	</MainContent>
</template>

<script>
export default {
	transition: 'slide-bottom',
	components: {
		MapsLocation: () => import('@/components/utils/GoogleMaps.vue'),
		AboutUsTemplate: () => import('@/components/templates/AboutUsTemplate/AboutUsTemplate.vue'),
	},
}
</script>

<style lang="scss">
.about-head {
	background: linear-gradient(29deg, #061e1c 0%, #443d1b 53%, #371a25 100%);
	min-height: 100vh;
	padding-top: 80px;
	position: relative;
	transition: all 0.1s ease-in-out;
}
.about_data {
	padding: 2rem 0;
}</style
>>
