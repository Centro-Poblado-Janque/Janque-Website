<template>
    <div id="embeddedmap-canvas">
        <Container>
            <iframe title="janque location" frameborder="0" class="map-canvas"
                src="https://www.google.com/maps/embed/v1/place?q=cp+janque+incahuasi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
        </Container>
    </div>
</template>

<script>
import Container from '../container/Container.vue'
export default {
    name: 'MapsLocations',
    components: { 
      Container 
    },
}
</script>
<style lang="scss">
.map-canvas{
    width: 100%;
    height: 100%;
}
</style>le