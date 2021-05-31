<template>
   <MainContent class="post-main p-page">
      <SocialMediaSEO
         :title="notices.title"
         :description="notices.description"
         :url="'blog/' + notices.slug"
      />
      <NuxtContent :document="notices" />
   </MainContent>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const notices = await $content('notices', params.slug).fetch()
      return { notices, id: notices.toc }
   },
}
</script>
