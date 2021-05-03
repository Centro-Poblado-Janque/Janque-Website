<template>
	<div>
		<NuxtContent :document="notices" />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const notices = await $content('notices', params.slug).fetch()
		return { notices, id: notices.toc }
	},
}
</script>

<style></style>
