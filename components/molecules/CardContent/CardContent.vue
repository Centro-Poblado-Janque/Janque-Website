<template>
   <div class="m-card-content pd-especial md-radius:3" v-if="document">
      <NuxtContent :document="article" />
   </div>
   <div class="m-card-content pd-1 line" v-else>
      <slot></slot>
   </div>
</template>

<script>
import './_card-content.scss'
export default {
   name: 'CardContent',
   props: {
      article: Object,
      document: Boolean,
   },
}
</script>
