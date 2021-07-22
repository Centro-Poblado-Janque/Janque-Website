<template>
   <MainContent class="p-page blog-page">
      <SocialMediaSEO
         title="Blogs | Centro Poblado Janque"
         description="Janque es mucho mas que un Centro Poblado, es cultura y tradición, la amabilidad de su gente. Conocelo a travez de su blog"
         url="blog"
      />

      <BlogTemplate>
         <template #header>
            <Ilustration />
         </template>

         <template #principal>
            <PostCard
               :content="articles[1].description"
               :image="articles[1].img"
               :title="articles[1].title"
               :alt="articles[1].slug"
               :path="{ slug: articles[1].slug, page: 'blog-slug' }"
               :post="{ avatar: articles[1].avatar, time: articles[1].time, date: articles[1].date }"
            />
         </template>

         <template>
            <PostCard
               v-for="articles of articles"
               :key="articles.slug"
               :content="articles.description"
               :image="articles.img"
               :title="articles.title"
               :alt="articles.slug"
               :path="{ slug: articles.slug, page: 'blog-slug' }"
               :post="{ avatar: articles.avatar, time: articles.time, date: articles.date }"
            />
         </template>

         <template #footer>
            <button @click="getPosts">PRINT</button>
         </template>
      </BlogTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: 'slide-bottom',
   components: {
      Ilustration: () => import('@/components/utils/design/blog.image.vue'),
      BlogTemplate: () => import('@/components/templates/BlogTemplate/BlogTemplate.vue'),
      PostCard: () => import('@/components/organisms/Post/PostCard.vue'),
   },
   methods: {
      async getPosts() {
         this.data = await this.$content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar'])
            .sortBy('createdAt', 'asc')
            .fetch()
         console.log(this.data)
      },
   },
   async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar'])
         .sortBy('createdAt', 'asc')
         .fetch()
      return {
         articles,
      }
   },
   data() {
      return {
         data: [],
      }
   },
}
</script>
