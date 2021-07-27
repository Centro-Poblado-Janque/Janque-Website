<template>
   <div class="a-date" v-if="with_icon == true">
      <FontAwesomeIcon :icon="faClock" />
      <time>{{ time }}</time>
   </div>
   <div class="a-date" v-else>
      <time>{{ time }}</time>
   </div>
</template>

<script>
import { faClock } from '@/components/utils/icons/faClock'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
   components: {
      FontAwesomeIcon,
   },
   props: {
      time: String,
   },
   data: () => ({
      faClock,
      with_icon: true,
   }),
}
</script>
