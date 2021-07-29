<template>
   <article class="o-tiny--post mb-1 ly-relative" data-aos="fade-down">
      <Photo :src="'resources/img/' + image" :alt="alt" class="tiny-background" />
      <Date :date="date" css="atention" :icon="true" />
      <Title :text="title" :isLink="true" :path="{ name: path.page, params: { slug: path.slug } }" />
   </article>
</template>

<script>
import './_post.scss'
export default {
   components: {
      Date: () => import('@/components/atoms/Date/Date.vue'),
      Photo: () => import('@/components/molecules/Photo/Photo.vue'),
   },
   props: {
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
      date: {
         type: String,
         required: true,
      },
      path: {
         type: Object,
         required: true,
      },
   },
}
</script>
