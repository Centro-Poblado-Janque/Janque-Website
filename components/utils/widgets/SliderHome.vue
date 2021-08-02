<template>
   <VueAgile :initial-slide="3" :autoplay="true" :speed="400">
      <div v-for="(slides, index) in slidesData" :key="index" class="slide ">
         <img :src="slides.img" alt="carousel-img" class="slide--img" />
         <div class="slide--content ly-flex fl-center">
            <article class="l-section ly-flex fl-center">
               <CardSlide :content="slides" />
            </article>
         </div>
      </div>
      <template slot="prevButton">
         <FontAwesomeIcon :icon="faChevronLeft" />
      </template>
      <template slot="nextButton">
         <FontAwesomeIcon :icon="faChevronRight" />
      </template>
   </VueAgile>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { VueAgile } from 'vue-agile'
export default defineComponent({
   components: {
      FontAwesomeIcon,
      VueAgile,
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
.agile__nav-button {
   padding: 1rem;
   display: inline-block;
   font-size: 2rem;
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

.agile__slide--active .slide--content {
   animation: to-top 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}
:root {
   --top-chevron: 80%;
}
@include media-from($md) {
   :root {
      --top-chevron: 45%;
   }
   .m-swiper {
      --chevron-left: 2rem;
      --chevron-right: 2.5rem;
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
.agile__list {
   user-select: none;
   min-height: 100vh;
   .slide {
      height: 100vh;
      cursor: grab;
   }
}
.agile__actions {
   padding: 1rem;
   width: 100%;
   position: absolute;
   z-index: 4;
   top: var(--top-chevron);
}
</style>
