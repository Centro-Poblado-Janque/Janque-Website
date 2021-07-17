<template>
   <section class="main-swiper">
      <section :style="slide" ref="slideContainer">
         <div class="slide-section">
            <div v-for="x in slides" :key="x" :class="'slide--item i-' + x">{{ x }}</div>
         </div>
      </section>
      <div class="control-section">
         <button class="btn prev" @click="prevSlide">&#10094;</button>
         <button class="btn next" @click="nextSlide">&#10095;</button>
      </div>
   </section>
</template>

<script>
export default {
   methods: {
      prevSlide() {
         this.data--
      },
      nextSlide() {
         if (this.data > this.slides - 1) {
            this.data = 1
         }
         this.data++
      },
      getSize() {
         this.x = this.$refs.slideContainer.clientWidth
         this.y = this.$refs.slideContainer.clientHeight
      },
   },
   computed: {
      slide() {
         return {
            transition: 'all .5s ease-in-out',
            transform: `translateX(-${100 * this.data}vw)`,
         }
      },
   },
   data() {
      return {
         data: 1,
         slides: 6,
         x: 0,
         y: 0,
      }
   },
   mounted() {
      this.getSize()
      console.log(this.x, this.y)
   },
}
</script>

<style lang="scss">
.main-swiper {
   position: relative;
   width: 100vw;
   height: 500px;
   background-color: #454545;
}
.btn {
   background-color: teal;
   position: absolute;
   top: 210px;
   &.prev {
      left: 10px;
   }
   &.next {
      right: 20px;
   }
}

@for $i from 1 through 10 {
   .i-#{$i} {
      background-color: rgba(28 + ($i * 5), 28 + ($i * 5), 28 + ($i * 5));
      height: 100%;
   }
}
.slide-section {
   display: flex;
   flex-direction: row;
}
.slide--item {
   height: 500px;
   min-width: 100vw;
}
</style>
