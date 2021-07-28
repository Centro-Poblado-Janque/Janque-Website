<template>
   <div class="post-metadates">
      <Title :text="info.title" class="a-title" />
      <span class="read-time">
         <FontAwesone :icon="faClock" />
         {{ info.time }} minutos
      </span>
      <span class="current-time">
         <FontAwesone :icon="faCalendar" css="m8-calendar" />
         {{ info.date }}
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
}
</script>

<style></style>
