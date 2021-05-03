<template>
	<div class="m-content">
		<p>{{ content }}</p>
		<Title :text="title" :isLink="true" :path="{ name: 'blog-slug', params: { slug: path } }" />
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
	},
}
</script>

<style lang="scss">
.m-content {
	display: block;
}
</style>
