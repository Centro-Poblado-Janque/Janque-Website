<template>
	<NuxtLink v-if="path" class="m-blog--img" :to="{ name: urlname, params: { slug: path } }">
		<Img :src="src" :alt="alt" class="bg-image a-Image is-abs-full-size" />
	</NuxtLink>

	<Img v-else :src="src" :alt="alt" class="bg-image a-Image is-abs-full-size" />
</template>

<script>
export default {
	components: {
		Img: () => import('@/components/atoms/Image/Image.vue'),
	},
	props: {
		alt: String,
		src: String,
		path: String,
		urlname: String,
	},
}
</script>

<style lang="scss">
.m-blog--img {
	width: 40%;
}
.bg-image {
	z-index: -1;
}
</style>
