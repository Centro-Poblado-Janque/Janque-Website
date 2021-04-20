<template>
   <li :class="css">
      <NuxtLink :to="to" :class="$style.NextLink">
         <FontAwesomeIcon :icon="icon" :class="$style.icon" />
         <span :class="$style.link">{{ content }}</span>
      </NuxtLink>
   </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
   name: 'NextLink',
   components: {
      FontAwesomeIcon,
   },
   props: {
      to: String,
      css: String,
      content: String,
      icon: Object,
   },
}
</script>

<style lang="scss" module>
.NextLink {
   display: inline-block;
   color: var(--nav-color);
}
.link {
   color: inherit;
   font-weight: normal;
   @media screen and(min-width: 1000px) {
      font-weight: 600;
   }
}
.icon {
   color: var(--nav-icon-color);
   margin-right: 0.5rem;
}
</style>
