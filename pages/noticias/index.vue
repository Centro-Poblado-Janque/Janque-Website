<template>
   <MainContent class="p-page news-page">
      <SocialMediaSEO
         title="Noticias | Centro Poblado Janque"
         description="Bienvenidos a la section de noticias de Janque. Sepa que cosas estan ocurriendo en Janque"
         url="noticias"
      />
      <NewsTemplate>
         <template #header>
            <div class="news-header u-radius:6">Hola Mundo</div>
         </template>
         <template>
            <PostCard
               type="notice"
               v-for="articles of notices"
               :key="articles.slug"
               :content="articles.description"
               :image="articles.img"
               :title="articles.title"
               :alt="articles.slug"
               :path="{ slug: articles.slug, page: 'noticias-slug' }"
               :post="{ avatar: articles.avatar, time: articles.time, date: articles.date }"
            />
         </template>
         <template #footer>
            <p>Footer</p>
         </template>
      </NewsTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: {
      name: 'fade',
      mode: 'out-in',
      beforeEnter(el) {
         console.log(el)
      },
      enter(el, done) {
         done()
         console.log(el)
      },
      beforeLeave(el) {
         console.log(el)
      },
   },
   components: {
      NewsTemplate: () => import('@/components/templates/NewsTemplate/NewsTemplate.vue'),
      PostCard: () => import('@/components/organisms/Post/PostCard.vue'),
      Swiper: () => import('@/components/utils/Swiper.vue'),
   },
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
         .sortBy('createdAt', 'asc')
         .fetch()
      return {
         notices,
      }
   },
}
</script>
