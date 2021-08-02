<template>
   <div class="post-metadates">
      <Title :text="info.title" class="txt-big" />
      <span class="read-time">
         <FontAwesone :icon="faClock" />
         {{ info.time }} minutos
      </span>
      <span class="current-time">
         <FontAwesone :icon="faCalendar" css="m8-calendar" />
         {{ formatDate(info.createdAt) }}
      </span>
   </div>
</template>

<script>
import { faClock } from '@/components/utils/icons/faClock'
import { faCalendar } from '@/components/utils/icons/faCalendar'
export default {
   components: {
      FontAwesone: () => import('@/components/atoms/FontAwesone/FontAwesone.vue'),
   },
   props: {
      info: Object,
   },
   data() {
      return {
         faClock,
         faCalendar,
      }
   },
   methods: {
      formatDate(date) {
         const options = { year: 'numeric', month: 'long', day: 'numeric' }
         return new Date(date).toLocaleDateString('es', options)
      },
   },
}
</script>

<style lang="scss">
.txt-big {
   font-size: 2.5rem;
   padding: 1rem 0;
}
</style>
