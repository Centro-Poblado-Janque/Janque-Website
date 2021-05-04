<template>
	<div class="m-content">
		<Title :text="title" :isLink="true" :path="{ name: urlname, params: { slug: path } }" />
		<p class="m-text">{{ content }}</p>
	</div>
</template>

<script>
export default {
	components: {
		Title: () => import('@/components/atoms/Title/Title.vue'),
		Link: () => import('@/components/atoms/Link/Link.vue'),
	},
	props: {
		title: String,
		content: String,
		path: String,
		urlname: String,
	},
}
</script>

<style lang="scss">
.m-content {
	padding: 1rem;
}
.m-text {
	height: 80px;
	color: wheat;
}
</style>
