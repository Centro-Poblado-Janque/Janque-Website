<template>
   <NuxtLink v-if="path" class="m-blog--img" :to="{ name: urlname, params: { slug: path } }">
      <Img :src="src" :alt="alt" class="bg-image" :class="className" />
   </NuxtLink>

   <div v-else-if="container" class="img-container">
      <NuxtLink class="m-blog--img" :to="{ name: urlname, params: { slug: path } }">
         <Img :src="src" :alt="alt" class="bg-image" :class="className" />
      </NuxtLink>
   </div>

   <Img v-else :src="src" :alt="alt" class="bg-image" />
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
      className: String,
      container: Boolean,
   },
}
import './_photo.scss'
</script>
