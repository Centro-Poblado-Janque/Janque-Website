<template>
   <article class="article--slide u-radius:6">
      <Title :text="content.title" />
      <Typography :content="content.description" />
   </article>
</template>

<script>
export default {
   props: {
      content: Object,
   },
}
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.article--slide {
   display: inline-block;
   padding: 2rem;
   -webkit-backdrop-filter: blur(20px);
   backdrop-filter: blur(20px);
   background-color: rgba(0, 0, 0, 0.404);
   // text style
   .normal {
      color: silver;
   }
   .a-title {
      font-size: 2rem;
   }

   @include media-from($lg) {
      .a-title {
         font-size: 2.5rem;
      }
   }
}
</style>
