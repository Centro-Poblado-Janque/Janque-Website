<template>
   <section class="m-swiper ly-relative full-wide" ref="swiper">
      <div class="slides ly-flex" ref="slides">
         <div
            v-for="(slides, index) in slidesData"
            :class="{ 'active-slide': index == count }"
            :key="index"
            class="slide--item ly-relative"
         >
            <img :src="slides.img" alt="carousel-img" class="slide--img" />
            <div class="slide--content ly-flex fl-center">
               <article class="l-section ly-flex fl-center">
                  <CardSlide :content="slides" />
               </article>
            </div>
         </div>
      </div>
      <button @click="prevSlide" class="chevron left">
         <FontAwesomeIcon :icon="faChevronLeft" />
      </button>
      <button @click="nextSlide" class="chevron right">
         <FontAwesomeIcon :icon="faChevronRight" />
      </button>
   </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default defineComponent({
   components: {
      FontAwesomeIcon,
      CardSlide: () => import('@/components/molecules/CardSlider/card-slider.vue'),
   },
   setup() {
      const slidesData = [
         {
            img: require('~/assets/img/index.jpg'),
            title: 'La Naturaleza Janqueña es Magica',
            description: 'Despues de terminar el invierno, es cuando la naturaleza muestra su belleza',
         },
         {
            img: require('~/assets/img/index-home.jpg'),
            title: 'Una mezcla de culturas',
            description: 'Janque es un mundo en un poblado, su cultura, su gente... ',
         },
         {
            img: require('~/assets/img/subida-lanchipampa.jpg'),
            title: 'Un poblado que se instruye con valores',
            description:
               'La población Janqueña es humilde por definción, y eso lo adquirieron de sus ancestros',
         },
      ]

      return { slidesData, faChevronLeft, faChevronRight }
   },
   methods: {
      update() {},
      nextSlide() {
         this.count > this.slidesData.length - 2 ? (this.count = 0) : this.count++
      },
      prevSlide() {
         this.count <= 0 ? (this.count = this.slidesData.length - 1) : this.count--
      },
   },
   data() {
      return {
         count: 0,
      }
   },
})
</script>

<style lang="scss">
@import '~/assets/scss/customs/settings';
.m-swiper {
   --chevron-left: 1rem;
   --chevron-right: 1rem;
   --top-chevron: 80%;
   margin: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
}
.chevron {
   position: absolute;
   padding: 1rem;
   z-index: 3;
   display: inline-block;
   font-size: 2rem;
   top: var(--top-chevron);
   color: rgb(179, 179, 179);
   transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.left {
   left: var(--chevron-left);
   &:hover {
      margin-left: -1rem;
   }
}
.right {
   right: var(--chevron-right);
   &:hover {
      margin-right: -1rem;
   }
}
.full-wide .slides {
   min-height: 100vh;
   .slide {
      height: 100vh;
   }
}
.slide--img {
   z-index: 0;
   position: absolute;
   width: 100vw;
   height: 100vh;
   object-fit: cover;
   object-position: 75% 50%;
}

.slide--content {
   position: absolute;
   width: 100vw;
   bottom: var(--desktop-nav-size);
   z-index: 2;
   top: var(--desktop-nav-size);
}

.active-slide .slide--content {
   animation: to-top 0.75s cubic-bezier(0.215, 0.61, 0.355, 1);
}

@include media-from($md) {
   .m-swiper {
      --chevron-left: 2rem;
      --chevron-right: 2.5rem;
      --top-chevron: 45%;
   }
}

.slide--item {
   opacity: 0.5;
   max-width: 0;
   min-height: 100%;
   transition: all 0.5s ease-in-out;
   &.active-slide {
      opacity: 1;
      max-width: 100%;
      min-width: 100%;
   }
}
</style>
