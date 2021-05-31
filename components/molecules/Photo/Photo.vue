<template>
   <NuxtLink v-if="path" class="m-blog--img" :to="{ name: urlname, params: { slug: path } }">
      <Img :src="src" :alt="alt" class="bg-image f-size" />
   </NuxtLink>

   <Img v-else :src="src" :alt="alt" class="bg-image f-size" />
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
import './_photo.scss'
</script>
