<template>
  <section class="m-carousel is-full-size" role="carousel">
      <input v-for="(el, index ) in imgs" class="null"
         :key="index" :checked="index == 0 ? '' : false"
         :id="'slide-'+ (index + 1)"
         type="radio" name="slides"
      />
      <ViewBox class="m-carousel__slides">
        <div v-for="img, index in imgs" class="slide" :key="index">
           <img :src="img" alt="carousel-img">
        </div>
      </ViewBox>
      <ViewBox class="m-carousel__dots">
         <label v-for="(el, index ) in imgs" 
            :key="index" class="a-dot" 
            :id="'dot-' + (index + 1)"
            :for="'slide-'+ (index + 1)"
         />
      </ViewBox>
  </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
   setup(){
      const imgs = [
         require('./../../assets/img/history-head.jpg'), 
         require('./../../assets/img/banner_1.png')
      ];

      return { imgs }
   }
})
</script>