<template>
   <MainContent class="p-page blog-page">
      <SocialMediaSEO
         title="Blogs | Centro Poblado Janque"
         description="Janque es mucho mas que un Centro Poblado, es cultura y tradición, la amabilidad de su gente. Conocelo a travez de su blog"
         url="blog"
      />

      <BlogIndex>
         <template #header>
            <ShapesBg />
         </template>
         <template>
            <Container class="container-reset">
               <ul class="md-grid md-grid-3 auto-row-400 with-full-gap">
                  <li v-for="article of articles" :key="article.slug" class="m-card with-gradient">
                     <div
                        :slug="article.slug"
                        :img="article.img"
                        :alt="article.slug"
                        :title="article.title"
                        :time="article.time"
                        :date="article.date"
                     />
                  </li>
               </ul>
            </Container>
         </template>
      </BlogIndex>
   </MainContent>
</template>

<script>
export default {
   components: {
      ShapesBg: () => import('@/components/utils/ShapesBackground.vue'),
      BlogIndex: () => import('@/components/templates/BlogPage/BlogIndex.vue'),
   },
   async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
         .sortBy('createdAt', 'asc')
         .fetch()
      return {
         articles,
      }
   },
}
</script>

<style lang="scss"></style>
