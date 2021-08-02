<template>
   <MainContent class="p-page news-page">
      <SocialMediaSEO
         title="Noticias | Centro Poblado Janque"
         description="Bienvenidos a la section de noticias de Janque. Sepa que cosas estan ocurriendo en Janque"
         url="noticias"
      />
      <NewsTemplate>
         <div
            slot="header"
            class="principal-notice u-radius:6"
            :style="{ backgroundImage: `url(${require('~/assets/img/principal-notice.jpg')})` }"
         >
            <Title text="Una nueva imagen para la educaion Janqueña" />
         </div>

         <template #news-types>
            <DisplayCategory :items="tag" :property="['type', 'type']" path="noticias" />
         </template>

         <template>
            <PostCard
               type="notice"
               v-for="news of noticesByTag"
               :key="news.slug"
               :content="news.description"
               :image="news.img"
               :title="news.title"
               :alt="news.slug"
               :path="{ slug: news.slug, page: 'noticias-slug' }"
               :post="{ avatar: news.avatar, time: news.time, date: news.createdAt }"
            />
         </template>
         <template #footer> </template>
      </NewsTemplate>
   </MainContent>
</template>

<script>
export default {
   transition: {
      name: 'fade',
      mode: 'out-in',
   },
   components: {
      NewsTemplate: () => import('@/components/templates/NewsTemplate/NewsTemplate.vue'),
      PostCard: () => import('@/components/organisms/Post/PostCard.vue'),
      Swiper: () => import('@/components/utils/Swiper.vue'),
      DisplayCategory: () => import('@/components/organisms/TabSection/tab-section.vue'),
   },
   watch: {
      '$route.query.tags': {
         immediate: true,
         async handler(tags) {
            this.noticesByTag = await this.$content('notices')
               .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'createdAt', 'avatar'])
               .where({ type: { $eq: tags || 'cultural' } })
               .fetch()
         },
      },
   },
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time', 'createdAt', 'avatar'])
         .sortBy('createdAt', 'asc')
         .fetch()
      const tags = await $content('notices', params.slug)
         .only(['type'])
         .fetch()
      const hash = {}
      const filtered = tags.filter(function(current) {
         let exists = !hash[current.type]
         hash[current.type] = true
         return exists
      })
      return {
         notices,
         tag: filtered,
      }
   },
   data() {
      return {
         query: '',
         noticesByTag: [],
      }
   },
}
</script>
