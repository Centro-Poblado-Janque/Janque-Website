<template>
   <div class="page-loader-md5" v-if="!isloaded">
      <div class="spinner">
         <div class="double-bounce1"></div>
         <div class="double-bounce2"></div>
      </div>
      <div>
         <div class="cube-md5">J</div>
         <div class="cube-md5">A</div>
         <div class="cube-md5">N</div>
         <div class="cube-md5">Q</div>
         <div class="cube-md5">U</div>
         <div class="cube-md5">E</div>
      </div>
   </div>
</template>

<script>
export default {
   data: () => ({
      isloaded: false,
   }),
   methods: {
      executeInit() {
         document.onreadystatechange = () => {
            if (document.readyState == 'complete') {
               this.isloaded = true
            }
         }
         window.addEventListener('DOMContentLoaded', () => {
            this.isloaded = true
         })
         window.addEventListener('load', () => {
            this.isloaded = true
         })
      },
   },
   mounted() {
      this.$nextTick(() => {
         this.$nuxt.$loading.start()
         setTimeout(() => {
            this.isloaded = true
            this.$nuxt.$loading.finish()
         }, 500)
      })
   },
   beforeDestroy() {
      window.removeEventListener('load')
      window.removeEventListener('DOMContentLoaded')
   },
}
</script>

<style lang="scss">
$colors: #8cc271, #69beeb, #f5aa39, #e9643b, #408f77, #043746;
// -----------------------------------------------------
.page-loader-md5 {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: #02b69e;
   z-index: 1200;
   transition: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
// -----------------------------------------------------
.cube-md5 {
   width: 40px;
   height: 40px;
   display: inline-flex;
   align-items: center;
   font-weight: 600;
   color: currentColor;
   justify-content: center;
   margin-right: 10px;
   @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
         background-color: nth($colors, $i);
      }
   }
   &:first-child {
      animation: left 1s infinite;
   }
   &:last-child {
      animation: right 1s infinite 0.5s;
   }
}
// -----------------------------------------------------
@keyframes left {
   40% {
      transform: translateX(-60px);
   }
   50% {
      transform: translateX(0);
   }
}
@keyframes right {
   40% {
      transform: translateX(60px);
   }
   50% {
      transform: translateX(0);
   }
}
.spinner {
   width: 40px;
   height: 40px;

   position: relative;
   margin: 3rem auto;
   margin-top: -3rem;
}

.double-bounce1,
.double-bounce2 {
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: #333;
   opacity: 0.6;
   position: absolute;
   top: 0;
   left: 0;

   -webkit-animation: sk-bounce 2s infinite ease-in-out;
   animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
   -webkit-animation-delay: -1s;
   animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
   0%,
   100% {
      -webkit-transform: scale(0);
   }
   50% {
      -webkit-transform: scale(1);
   }
}

@keyframes sk-bounce {
   0%,
   100% {
      transform: scale(0);
      -webkit-transform: scale(0);
   }
   50% {
      transform: scale(1);
      -webkit-transform: scale(1);
   }
}
</style>
