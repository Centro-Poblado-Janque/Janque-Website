<template>
	<article class="o-blog--post">
		<Photo :src="'resources/img/' + image" :alt="alt" :path="path" />
		<Content :title="title" :content="content" :path="path" />
		<AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
	</article>
</template>

<script>
export default {
	components: {
		Photo: () => import('@/components/molecules/Photo/Photo.vue'),
		Content: () => import('@/components/molecules/Content/Content.vue'),
		AuthorAbout: () => import('@/components/molecules/AuthorAbout/AuthorAbout.vue'),
	},
	props: {
		content: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
		post: {
			type: Object,
			required: true,
		},
		path: String,
	},
}
</script>
<style lang="scss">
.o-blog--post {
	border: 2px solid silver;
	border-radius: 2px;
	padding: 0.5rem;
}
</style>
