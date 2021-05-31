<template>
   <NuxtLink :to="path" class="link">
      <FontAwesomeIcon :icon="icon" class="link__icon" />
      <span class="link__content">{{ content }}</span>
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
