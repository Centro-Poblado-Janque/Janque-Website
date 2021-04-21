<template>
   <NuxtLink :to="path" :class="$style.link">
      <FontAwesomeIcon :icon="icon" :class="$style.link__icon" />
      <span :class="$style.link__content">{{ content }}</span>
   </NuxtLink>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
   name: 'NextLink',
   components: {
      FontAwesomeIcon,
   },
   props: {
      path: String,
      content: String,
      icon: Object,
   },
}
</script>

<style lang="scss" module>
.link {
   display: inline-block;
   color: var(--nav-color);
   padding: 0.25rem;
   &__icon {
      color: var(--nav-icon-color);
      margin-right: 0.5rem;
   }
   &__content {
      color: inherit;
      font-weight: normal;
      @media screen and(min-width: 1000px) {
         font-weight: 600;
      }
   }
}
</style>
