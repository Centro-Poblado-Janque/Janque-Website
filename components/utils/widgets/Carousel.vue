<template>
   <section class="m-swiper ly-relative" ref="swiper">
      <div class="slides" ref="slides">
         <div v-for="(img, index) in imgs" :class="currentIndex" :key="index">
            <img :src="img" alt="carousel-img" class="slide--img" />
         </div>
      </div>
      <FontAwesomeIcon @click="prevSlide" role="button" class="chevron left" :icon="faChevronLeft" />
      <FontAwesomeIcon @click="nextSlide" role="button" class="chevron right" :icon="faChevronRight" />
   </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default defineComponent({
   components: {
      FontAwesomeIcon,
   },
   setup() {
      const imgs = [require('~/assets/img/index.jpg'), require('~/assets/img/index-home.jpg')]

      return { imgs, faChevronLeft, faChevronRight }
   },
   methods: {
      update() {},
      nextSlide() {
         this.count > this.imgs.length - 2 ? (this.count = 0) : this.count++
      },
      prevSlide() {
         this.count <= 0 ? (this.count = this.imgs.length - 1) : this.count--
      },
   },
   computed: {
      currentIndex() {
         return {
            'slide-item active': this.count,
         }
      },
   },
   data() {
      return {
         count: 0,
         elements: document.querySelectorAll('.slide--item'),
      }
   },
   mounted() {
      console.log(this.count)
   },
})
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.m-swiper {
   --chevron-left: 1rem;
   --chevron-right: 1rem;
   margin: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
}
.chevron {
   position: absolute;
   font-size: 1.5rem;
   top: 45%;
   color: rgb(179, 179, 179);
   transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.left {
   left: var(--chevron-left);
   &:hover {
      margin-left: -0.5rem;
   }
}
.right {
   right: var(--chevron-right);
   &:hover {
      margin-right: -0.5rem;
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
.slide--item {
   display: none;
   &.active {
      display: block;
   }
}
.slide--img {
   width: 100vw;
   height: 100vh;
   object-fit: cover;
   object-position: 75% 50%;
}

@include media-from($md) {
   .m-swiper {
      --chevron-left: 2rem;
      --chevron-right: 2.5rem;
   }
}
</style>
