<template>
   <article v-if="type == 'notice'" class="o-notice--post" data-aos="fade-down">
      <Photo :src="'resources/img/' + image" :alt="alt" />
      <Content :title="title" :content="content" :path="path.slug" :urlname="path.page" />
      <AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
   </article>

   <article v-else class="o-blog--post" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <Photo :src="'resources/img/' + image" :alt="alt" :path="path.slug" :urlname="path.page" />
      <Content :title="title" :content="content" :path="path.slug" :urlname="path.page" />
      <AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
   </article>
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
