<template>
   <div class="a-date" v-if="with_icon == true">
      <FontAwesone :icon="faCalendar" class="bg-teal" />
      <time>{{ date }}</time>
   </div>
   <div class="a-date" v-else>
      <time>{{ date }}</time>
   </div>
</template>

<script>
import { faCalendar } from '@/components/utils/icons/faCalendar'

export default {
   props: {
      date: String,
   },
   components: {
      FontAwesone: () => import('@/components/atoms/FontAwesone/FontAwesone.vue'),
   },
   data: () => ({
      faCalendar,
      with_icon: true,
   }),
}
</script>
