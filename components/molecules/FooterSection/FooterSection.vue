<template>
   <section>
      <Title :text="title" class="f-title" />
      <div class="footer--section">
         <FontAwesomeIcon :icon="icon" class="f-icon" />
         <ul class="address--declarations">
            <Item v-for="(item, index) in items" :key="index">{{ item }}</Item>
         </ul>
      </div>
   </section>
</template>

<script>
import './_footer-section.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
   components: {
      FontAwesomeIcon,
      Title: () => import('@/components/atoms/Title/Title.vue'),
   },
   props: {
      title: String,
      icon: Object,
      items: Object,
   },
}
</script>
