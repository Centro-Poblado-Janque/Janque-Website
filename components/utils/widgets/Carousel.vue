<template>
   <section class="m-swiper p-relative" ref="swiper">
      <ViewBox class="slides" ref="slides">
         <div v-for="(img, index) in imgs" class="slide" :key="index">
            <img :src="img" alt="carousel-img" class="slide--img" />
         </div>
      </ViewBox>
      <FontAwesomeIcon @click="nextSlide" role="button" class="chevron up" :icon="faChevronUp" />
      <FontAwesomeIcon @click="prevSlide" role="button" class="chevron down" :icon="faChevronDown" />
   </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default defineComponent({
   components: {
      FontAwesomeIcon,
   },
   setup() {
      const imgs = [require('~/assets/img/index.jpg'), require('~/assets/img/index-home.jpg')]
      return { imgs, faChevronUp, faChevronDown }
   },
   methods: {
      update() {},
      nextSlide() {
         const el = document.querySelectorAll('.slides')[0]
         const elements = document.querySelectorAll('slide')
      },
      prevSlide() {},
   },
   mounted() {},
})
</script>

<style lang="scss">
@import '~/assets/scss/customs/mixin';
.m-swiper {
   margin: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
}
.chevron {
   position: absolute;
   font-size: 1.5rem;
   right: 1.5rem;
   transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.up {
   top: 40%;
   &:hover {
      top: 39%;
   }
}
.down {
   top: 50%;
   &:hover {
      top: 51%;
   }
}
.slide {
   position: relative;
   top: 0;
   width: 100%;
}
.full .slides {
   height: 100vh;
   .slide {
      height: 100vh;
   }
}
.slide--img {
   width: 100vw;
   height: 100vh;
   object-fit: cover;
   object-position: 75% 50%;
   @include absolute_position;
}
</style>
