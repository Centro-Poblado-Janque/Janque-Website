<template>
   <article v-if="type == 'notice'" class="o-notice--post u-radius:4" data-aos="fade-down">
      <div class="img-container">
         <Photo :src="'resources/img/' + image" :alt="alt" />
      </div>
      <Content :title="title" :content="content" :path="path.slug" :urlname="path.page" />
      <AuthorAbout :src="'resources/img/' + post.avatar" :time="post.time" :date="post.date" />
   </article>

   <article v-else :class="`o-blog--post u-radius:3 ly-grid ${principal && 'principal'}`" data-aos="fade-up">
      <div class="img-container post-img">
         <Photo
            :src="'resources/img/' + image"
            :alt="alt"
            :path="path.slug"
            :urlname="path.page"
            :container="true"
         />
      </div>
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
      principal: {
         type: Boolean,
         default: false,
      },
   },
}
</script>
