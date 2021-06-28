<template>
   <div :class="$style['container']">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'Container',
}
</script>

<style lang="scss" module>
@import '~/assets/scss/customs/mixin';
.container_s,
.container,
.Container {
   width: 100%;
   margin: 0 auto;
   padding-left: 10px;
   padding-right: 10px;
   @media screen and(min-width: $xl) {
      max-width: var(--max-width-xl);
      width: 80%;
   }
   @media screen and(min-width: $xxl) {
      max-width: var(--max-width);
   }
   @media screen and(min-width: $md) {
      width: 95%;
   }
}
</style>
<style lang="scss">
@import '~/assets/scss/customs/mixin';
.container_s,
.container,
.Container {
   width: 100%;
   margin: 0 auto;
   padding-left: 10px;
   padding-right: 10px;
   @media screen and(min-width: $xl) {
      max-width: var(--max-width-xl);
      width: 80%;
   }
   @media screen and(min-width: $xxl) {
      max-width: var(--max-width);
   }
   @media screen and(min-width: $md) {
      width: 95%;
   }
}
</style>
