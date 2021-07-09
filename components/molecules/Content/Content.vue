<template>
   <div class="m-content">
      <p class="m-text">{{ content }}</p>
      <Title :text="title" :isLink="true" :path="{ name: urlname, params: { slug: path } }" />
   </div>
</template>

<script>
import './_content.scss'
export default {
   components: {
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
