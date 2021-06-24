<template>
   <section class="m-swiper" ref="swiper">
      <!--       <input
         v-for="(el, index) in imgs"
         class="null"
         :key="index"
         :checked="index == 0 ? '' : false"
         :id="'slide-' + (index + 1)"
         type="radio"
         name="slides"
      />
      <ViewBox class="m-carousel__slides">
         <div v-for="(img, index) in imgs" class="slide" :key="index">
            <img :src="img" alt="carousel-img" />
         </div>
      </ViewBox>
      <ViewBox class="m-carousel__dots">
         <label
            v-for="(el, index) in imgs"
            :key="index"
            class="a-dot"
            :id="'dot-' + (index + 1)"
            :for="'slide-' + (index + 1)"
         />
      </ViewBox> -->
      <ViewBox class="slides" ref="slides">
         <div v-for="(img, index) in imgs" class="slide" :key="index">
            <img :src="img" alt="carousel-img" />
         </div>
      </ViewBox>
      <button ref="next">next</button>
      <button ref="prev">prev</button>
   </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
   components: {
      Button: () => import('@/components/atoms/Button/Button.vue'),
   },
   setup() {
      const imgs = [require('~/assets/img/index.jpg'), require('~/assets/img/index-home.jpg')]
      return { imgs }
   },
   methods: {
      useSlider({ nodeSlides, wrapper, items, prev, next }) {
         let posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100
         const slides = document.querySelectorAll(nodeSlides)
         const slidesLength = slides.length
         const slideSize = document.querySelectorAll(nodeSlides)[0].offsetWidth
         const firstSlide = slides[0]
         const lastSlide = slides[slidesLength - 1]
         const cloneFirst = firstSlide.cloneNode(true)
         const cloneLast = lastSlide.cloneNode(true)
         let index = 0
         let allowShift = true

         // Clone first and last slide
         items.appendChild(cloneFirst)
         items.insertBefore(cloneLast, firstSlide)
         wrapper.classList.add('loaded')

         // Mouse events
         items.onmousedown = dragStart

         // Touch events
         items.addEventListener('touchstart', dragStart)
         items.addEventListener('touchend', dragEnd)
         items.addEventListener('touchmove', dragAction)

         // Click events
         prev.addEventListener('click', function() {
            shiftSlide(-1)
         })
         next.addEventListener('click', function() {
            shiftSlide(1)
         })

         // Transition events
         items.addEventListener('transitionend', checkIndex)

         function dragStart(e) {
            e = e || window.event
            e.preventDefault()
            posInitial = items.offsetLeft

            if (e.type == 'touchstart') {
               posX1 = e.touches[0].clientX
            } else {
               posX1 = e.clientX
               document.onmouseup = dragEnd
               document.onmousemove = dragAction
            }
         }

         function dragAction(e) {
            e = e || window.event

            if (e.type == 'touchmove') {
               posX2 = posX1 - e.touches[0].clientX
               posX1 = e.touches[0].clientX
            } else {
               posX2 = posX1 - e.clientX
               posX1 = e.clientX
            }
            items.style.left = items.offsetLeft - posX2 + 'px'
         }

         function dragEnd(e) {
            posFinal = items.offsetLeft
            if (posFinal - posInitial < -threshold) {
               shiftSlide(1, 'drag')
            } else if (posFinal - posInitial > threshold) {
               shiftSlide(-1, 'drag')
            } else {
               items.style.left = posInitial + 'px'
            }

            document.onmouseup = null
            document.onmousemove = null
         }

         function shiftSlide(dir, action) {
            items.classList.add('shifting')

            if (allowShift) {
               if (!action) {
                  posInitial = items.offsetLeft
               }

               if (dir == 1) {
                  items.style.left = posInitial - slideSize + 'px'
                  index++
               } else if (dir == -1) {
                  items.style.left = posInitial + slideSize + 'px'
                  index--
               }
            }

            allowShift = false
         }

         function checkIndex() {
            items.classList.remove('shifting')

            if (index == -1) {
               items.style.left = -(slidesLength * slideSize) + 'px'
               index = slidesLength - 1
            }

            if (index == slidesLength) {
               items.style.left = -(1 * slideSize) + 'px'
               index = 0
            }

            allowShift = true
         }
      },
   },
   mounted() {
      this.useSlider({
         nodeSlides: '.slide',
         wrapper: this.$refs.swiper,
         items: this.$refs.slides.$el,
         prev: this.$refs.prev,
         next: this.$refs.next,
      })
      console.log(this.$refs.swiper, this.$refs.slides.$el, this.$refs.prev, this.$refs.next)
   },
})
</script>

<style lang="scss">
.m-swiper {
   margin: 0;
}
</style>
