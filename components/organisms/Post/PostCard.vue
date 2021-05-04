<template>
	<article v-if="type == 'notice'" class="o-notice--post">
		<Photo :src="'resources/img/' + image" :alt="alt" />
		<Content :title="title" :content="content" :path="path.slug" :urlname="path.page" />
		<AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
	</article>

	<article v-else class="o-blog--post">
		<Photo :src="'resources/img/' + image" :alt="alt" :path="path.slug" :urlname="path.page" />
		<Content :title="title" :content="content" :path="path.slug" :urlname="path.page" />
		<AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
	</article>
</template>

<script>
export default {
	transition: 'slide-bottom',
	components: {
		Photo: () => import('@/components/molecules/Photo/Photo.vue'),
		Content: () => import('@/components/molecules/Content/Content.vue'),
		AuthorAbout: () => import('@/components/molecules/AuthorAbout/AuthorAbout.vue'),
	},
	props: {
		type: String,
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
		path: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style lang="scss">
.o-blog--post {
	border: thin solid #dfe9ec;
	position: relative;
	border-radius: 2px;
	box-shadow: 0 2px 4px rgb(174 190 205 / 30%);
}
.o-notice--post {
	position: relative;
	overflow: hidden;
	box-shadow: 0 19px 38px rgba(#000, 0.3), 0 15px 12px rgba(#000, 0.2);
	&:hover {
		img {
			transition: all 0.5s ease;
			transform: scale(1.1);
		}
		.m-content {
			transform: translateY(0);
		}
	}
	.m-content {
		position: absolute;
		bottom: 1rem;
		width: 100%;
		transform: translateY(calc(90px + 1em));
		transition: transform 0.3s;
	}
}
</style>
