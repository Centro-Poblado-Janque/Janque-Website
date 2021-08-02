<template>
   <footer class="m-about--author ly-flex fl-center">
      <Img :src="src" alt="no alt" class="author-img u-radius-circle" />
      <div class="ly-flex">
         <Time :time="`${time} minutos`" />
         <Date :date="formatDate(date)" :icon="true" css="left" />
      </div>
   </footer>
</template>

<script>
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
   methods: {
      formatDate(date) {
         const options = { year: 'numeric', month: 'short', day: 'numeric' }
         return new Date(date).toLocaleDateString('es', options)
      },
   },
}

import './_author-about.scss'
</script>
