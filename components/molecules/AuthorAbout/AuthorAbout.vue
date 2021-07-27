<template>
   <footer class="m-about--author ly-flex fl-center">
      <Img :src="src" alt="no alt" class="author-img u-radius-circle" />
      <Time :time="`${time} minutos`" />
      <Date :date="formatDate" :icon="true" />
   </footer>
</template>

<script>
import { format } from '@/lib/dateFormatter.js'
export default {
   components: {
      Img: () => import('@/components/atoms/Image/Image.vue'),
      Time: () => import('@/components/atoms/Time/Time.vue'),
      Date: () => import('@/components/atoms/Date/Date.vue'),
   },
   props: {
      src: String,
      time: Number,
      date: String,
   },

   mounted() {
      this.formatDate = format(this.date) || '20 de ener. 2010'
   },
   data() {
      return {
         formatDate: '',
      }
   },
}

import './_author-about.scss'
</script>
