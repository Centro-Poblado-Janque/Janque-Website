<template>
   <section></section>
</template>

<script>
import './_post.scss'
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
