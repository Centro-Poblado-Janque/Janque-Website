<template>
   <NuxtLink class="m-blog--img" :to="{ name: 'blog-slug', params: { slug: path } }">
      <Img :src="src" :alt="alt" />
   </NuxtLink>
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
   },
}
</script>

<style lang="scss">
.m-blog--img {
   width: 40%;
}
</style>
