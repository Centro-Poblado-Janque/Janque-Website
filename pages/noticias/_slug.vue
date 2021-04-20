<template>
   <div>
      <NuxtContent :document="article" />
   </div>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const article = await $content('notices', params.slug).fetch()
      return { article, id: article.toc }
   },
}
</script>

<style></style>
