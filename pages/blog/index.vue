<template>
   <MainContent class="p-page blog-page">
      <SocialMediaSEO
         title="Blogs | Centro Poblado Janque"
         description="Janque es mucho mas que un Centro Poblado, es cultura y tradición, la amabilidad de su gente. Conocelo a travez de su blog"
         url="blog"
      />

      <header class="blog-head dark-gradient-bg">
         <ShapesBg />
      </header>

      <section class="blog-center px-2">
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
      </section>
   </MainContent>
</template>

<script>
import ShapesBg from '@/components/utils/ShapesBackground.vue'

export default {
   components: {
      ShapesBg,
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

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.blog-head {
   min-height: 60vh;
   padding-top: 80px;
   position: relative;
   transition: all 0.1s ease-in-out;
}
</style>
