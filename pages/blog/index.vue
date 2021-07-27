<template>
   <MainContent class="p-page blog-page">
      <SocialMediaSEO
         title="Blogs | Centro Poblado Janque"
         description="Janque es mucho mas que un Centro Poblado, es cultura y tradición, la amabilidad de su gente. Conocelo a travez de su blog"
         url="blog"
      />

      <BlogTemplate>
         <template #header-content>
            <Title text="Sigue descubriendo mas contenido" big_text="true" class="mb-1 mt-1" />
            <p class="description">
               Descubre articulos que te dejarán con ganas de conocer mas de Janque
            </p>
         </template>
         <template #header-img>
            <Ilustration #header-img />
         </template>

         <template #principal>
            <PostCard
               :content="articles[0].description"
               :image="articles[0].img"
               :title="articles[0].title"
               :alt="articles[0].slug"
               :path="{ slug: articles[0].slug, page: 'blog-slug' }"
               :post="{ avatar: articles[0].avatar, time: articles[0].time, date: articles[0].createdAt }"
            />
         </template>

         <template #recent>
            <TinyCard
               v-for="articles of recentArticles"
               :key="articles.slug"
               :image="articles.img"
               :title="articles.title"
               :alt="articles.slug"
               :path="{ slug: articles.slug, page: 'blog-slug' }"
               :date="articles.createdAt"
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
               :post="{ avatar: articles.avatar, time: articles.time, date: articles.createdAt }"
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
   transition: {
      name: 'fade',
      mode: 'out-in',
   },
   components: {
      Ilustration: () => import('@/components/utils/design/blog.image.vue'),
      BlogTemplate: () => import('@/components/templates/BlogTemplate/BlogTemplate.vue'),
      PostCard: () => import('@/components/organisms/Post/PostCard.vue'),
      TinyCard: () => import('@/components/organisms/Post/TinyCard.vue'),
   },
   methods: {
      async getPosts() {
         this.data = await this.$content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar', 'createdAt'])
            .sortBy('createdAt', 'asc')
            .fetch()
         console.log(this.data)
         this.$store.dispatch('suma')
         console.log(this.$store.getters['getCounter'])
      },
   },
   async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar', 'createdAt'])
         .sortBy('createdAt', 'desc')
         .fetch()
      const recentArticles = await $content('articles', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'avatar', 'createdAt'])
         .sortBy('createdAt', 'asc')
         .limit(3)
         .fetch()
      return {
         articles,
         recentArticles,
      }
   },
   data() {
      return {
         data: [],
      }
   },
   computed: {
      counter() {
         return this.$store.getters['getCounter']
      },
   },
}
</script>
