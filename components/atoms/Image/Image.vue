<template>
	<img :src="src" :alt="alt" :class="$style.image" />
</template>

<script>
export default {
	props: {
		src: String,
		alt: String,
	},
}
</script>

<style lang="scss" module>
.image {
	object-fit: cover;
	object-position: 50% 50%;
}
</style>
