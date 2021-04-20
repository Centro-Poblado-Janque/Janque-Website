<template>
   <MainContent class="p-page costumer-page">
      <SocialMediaSEO
         title="Noticias | Centro Poblado Janque"
         description="La hacienda Janque es una localidad llena de costumbres y tradiciones. '!Descubrelo'"
         url="costumbres"
      />
      <div :style="{ paddingTop: '100px' }">
         <NuxtLink
            v-for="(news, index) in notices"
            :key="index"
            class="o-card"
            :to="{ name: 'noticias-slug', params: { slug: news.slug } }"
         >
            {{ news.title }}
         </NuxtLink>
      </div>
   </MainContent>
</template>

<script>
export default {
   components: {},
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug)
         .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
         .sortBy('createdAt', 'asc')
         .fetch()
      console.log(notices)
      return {
         notices,
      }
   },
}
</script>

<style lang="scss">
.costumer-head {
   background-color: var(--grey-300);
   min-height: 80vh;
   padding-top: 80px;
   position: relative;
   transition: all 0.1s ease-in-out;
   background-size: cover;
   background-repeat: no-repeat;
}
</style>
