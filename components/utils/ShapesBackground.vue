<template>
   <div :class="$style.static_bg">
      <svg
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         :class="$style.shapes"
      >
         <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 366"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            class="waves"
         >
            <path
               opacity="0.2"
               d="M1440 239.5L1380 239.5C1320 239.5 1200 239.5 1080 253.093C954 267.367 840 293.874 720 321.061C600 348.249 480 375.436 360 361.842C240 348.249 120 293.874 60 266.687L1.10116e-05 239.5"
               stroke="white"
               stroke-width="0.576"
            ></path>
            <path
               opacity="0.2"
               d="M0 86.7582L60 64.1142C120 41.8094 240 -3.98749 360 0.846624C480 5.3415 600 59.6193 720 82.2633C840 104.568 960 96.0872 1080 100.328C1200 104.568 1320 123.226 1380 131.961L1440 141.036"
               stroke="white"
               stroke-width="0.576"
            ></path>
            <path
               opacity="0.2"
               d="M0 100.172L60 135.308C120 170.822 240 240.53 360 250.892C480 261.254 600 210.386 720 195.596C840 180.242 960 200.966 1080 220.748C1200 240.53 1320 261.254 1380 270.956L1440 281.036"
               stroke="white"
               stroke-width="0.576"
            ></path>
            <path
               opacity="0.2"
               d="M1440 85.5L1380 73.2312C1320 60.732 1200 36.54 1080 30.204C960 23.868 840 36.54 720 48.636C600 60.732 480 73.404 360 70.1208C240 67.068 120 48.636 60 39.42L0 30.204"
               stroke="white"
               stroke-width="0.576"
            ></path>
         </svg>
         <svg width="100%" height="100%" fill="none" preserveAspectRatio="xMidYMid meet" class="dots">
            <circle cx="10%" cy="30%" r="5.6" fill="white" opacity="0.8"></circle>
            <circle cx="15%" cy="80%" r="4.0" fill="white" opacity="0.8"></circle>
            <circle cx="17%" cy="55%" r="3.2" fill="white" opacity="0.2"></circle>
            <circle cx="25%" cy="25%" r="3.2" fill="white" opacity="0.2"></circle>
            <circle cx="20%" cy="22%" r="4.0" fill="white" opacity="0.2"></circle>
            <circle cx="40%" cy="85%" r="3.2" fill="white" opacity="0.2"></circle>
            <circle cx="60%" cy="30%" r="4.0" fill="white" opacity="0.8"></circle>
            <circle cx="70%" cy="70%" r="5.6" fill="white" opacity="0.2"></circle>
            <circle cx="80%" cy="40%" r="4.0" fill="white" opacity="0.2"></circle>
            <circle cx="85%" cy="22%" r="5.6" fill="white" opacity="0.8"></circle>
            <circle cx="85%" cy="75%" r="4.0" fill="white" opacity="0.8"></circle>
            <circle cx="95%" cy="60%" r="3.2" fill="white" opacity="0.8"></circle>
         </svg>
      </svg>
   </div>
</template>

<script>
export default {
   name: 'ShapesBg',
}
</script>

<style lang="scss" module>
.static_bg {
   position: absolute;
   top: 60px;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 1;
}
.shapes {
   width: 100%;
   height: 100%;
}
</style>
