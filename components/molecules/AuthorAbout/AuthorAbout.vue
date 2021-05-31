<template>
   <footer class="m-about--author md-flex flex--center">
      <Img :src="src" alt="no alt" class="md-sz-20 md-rd" />
      <Time :time="`lectura de ${time} minutos`" />
      <Date :date="date" />
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
}

import './_author-about.scss'
</script>
