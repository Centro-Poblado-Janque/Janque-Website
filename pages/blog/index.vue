<template>
	<MainContent class="p-page blog-page">
		<SocialMediaSEO
			title="Blogs | Centro Poblado Janque"
			description="Janque es mucho mas que un Centro Poblado, es cultura y tradición, la amabilidad de su gente. Conocelo a travez de su blog"
			url="blog"
		/>

		<BlogTemplate>
			<template #header>
				<ShapesBg />
			</template>
			<template>
				<PostCard
					v-for="articles of articles"
					:key="articles.slug"
					:content="articles.description"
					:image="articles.img"
					:title="articles.title"
					:alt="articles.slug"
					:path="articles.slug"
					:post="{ avatar: articles.avatar, time: articles.time, date: articles.date }"
				/>
			</template>
			<template #footer>
				<p>Footer</p>
			</template>
		</BlogTemplate>
	</MainContent>
</template>

<script>
export default {
	components: {
		ShapesBg: () => import('@/components/utils/ShapesBackground.vue'),
		BlogTemplate: () => import('@/components/templates/BlogTemplate/BlogTemplate.vue'),
		PostCard: () => import('@/components/organisms/Post/PostCard.vue'),
	},
	async asyncData({ $content, params }) {
		const articles = await $content('articles', params.slug)
			.only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar'])
			.sortBy('createdAt', 'asc')
			.fetch()
		return {
			articles,
		}
	},
}
</script>

<style lang="scss"></style>
