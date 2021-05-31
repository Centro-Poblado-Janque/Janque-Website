<template>
   <div class="m-content">
      <Title :text="title" :isLink="true" :path="{ name: urlname, params: { slug: path } }" />
      <p class="m-text">{{ content }}</p>
   </div>
</template>

<script>
import './_content.scss'
export default {
   components: {
      Title: () => import('@/components/atoms/Title/Title.vue'),
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
