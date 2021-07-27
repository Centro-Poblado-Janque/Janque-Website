<template>
   <span :class="[$style['date'], $style[css]]" v-if="icon">
      <FontAwesone :icon="faCalendar" css="m8-calendar" />
      <time>{{ date }}</time>
   </span>
   <span :class="$style['date']" v-else>
      <time>{{ date }}</time>
   </span>
</template>

<script>
import { faCalendar } from '@/components/utils/icons/faCalendar'
export default {
   components: {
      FontAwesone: () => import('@/components/atoms/FontAwesone/FontAwesone.vue'),
   },
   props: {
      date: String,
      icon: Boolean,
      css: String,
   },
   data: () => ({
      faCalendar,
   }),
}
</script>

<style lang="scss" module>
.date {
   &.atention {
      display: inline-flex;
      padding: 0.5rem;
      align-items: center;
      background-color: var(--bg-atention);
      border-radius: 4px;
      color: white;
   }
   time {
      margin-left: 0.5rem;
   }
}
</style>
