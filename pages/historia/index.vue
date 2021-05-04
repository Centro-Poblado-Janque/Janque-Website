<template name="template__page-history">
	<MainContent class="p-page history-page">
		<SocialMediaSEO
			title="Conoce nuestra historia | Centro Poblado Janque"
			description="No hay una mejor manera de conocer un lugar, sino sabiendo su historia. El poblado de Janque sus raices tienen mucho que decir"
			url="historia"
		/>
		<HistoryTemplate>
			
		</HistoryTemplate>
	</MainContent>
</template>

<script>
export default {
	transition: 'slide-top',
	components: {
		HistoryTemplate: () => import('@/components/templates/HistoryTemplate/HistoryTemplate.vue'),
	},
}
</script>

<style lang="scss">
.history-head {
	min-height: 80vh;
	padding-top: 80px;
	position: relative;
	&::after {
		content: '';
		display: block;
		background-image: url('~/assets/img/history-head.jpg');
		transition: all 0.1s ease-in-out;
		z-index: -1;
		filter: brightness(0.45);
	}
}
.history-body {
	margin: 2rem auto;
}
</style>
