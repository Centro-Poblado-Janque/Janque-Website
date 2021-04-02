<template>
    <MainContent class="p-page about-page">
        <SocialMediaSEO 
            title="Sobre Nosotros - Centro Poblado Janque"
            description="Hablemos un poco de Janque"
            url="about"
        />
        <header class="about-head">
            <Container>
                <Caption title="Conoce un poco mas de que trata C.P Janque" />
            </Container>
        </header>
        <section class="about_content">
            <Grid :Rows="10">
                <ViewBox class="lg_grid_7">
                    <p>Hablemos un poco de janque y nos sentamos a tomsar un poco de aguardiente</p>
                </ViewBox>
                <ViewBox class="lg_grid_3">
                    <p>Distrito de Incahuasi</p>
                </ViewBox>
            </Grid>
        </section>
        <ViewBox class="name">

        </ViewBox>
        <MapsLocation/>
    </MainContent>
</template>

<script>
import { Grid } from '@/components/container/Grid'
import MapsLocation from '@/components/utils/GoogleMaps.vue'
import Caption from '@/components/styled/Caption.vue'
export default {
    transition: 'slide-bottom',
    name: 'About',
    components: { 
        Caption,
        MapsLocation,
        Grid
    },
}
</script>

<style lang="scss">
.about-head{
    background: linear-gradient(29deg, #061e1c 0%, #443d1b 53%, #371a25 100%);
    min-height: 100vh;
    padding-top: 80px;
    position: relative;
    transition: all .1s ease-in-out;
}
.about_data{
    padding: 2rem 0;
}
</style>>