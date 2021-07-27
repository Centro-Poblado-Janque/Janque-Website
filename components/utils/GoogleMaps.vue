<template>
   <div id="map-canvas">
      <iframe
         title="janque location"
         frameborder="0"
         class="map-canvas"
         src="https://maps.google.com/maps?amp;hl=en&amp;q=CP%20JANQUE+(Centro%20Poblado%20Janque)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
      </iframe>
   </div>
</template>

<script>
export default {
   name: 'MapsLocations',
}
</script>
<style lang="scss">
.map-canvas {
   width: 100%;
   min-height: inherit;
}
#map-canvas {
   min-height: 400px;
}
</style>
