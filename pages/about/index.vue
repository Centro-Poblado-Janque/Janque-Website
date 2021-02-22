<template>
    <MainContent class="page about-page">
        <header class="about-head">
            <Container>
                <Caption title="Conoce un poco mas de que trata C.P Janque" />
            </Container>
        </header>
        <section class="about_content">
            <Grid :grids="10">
                <div class="lg_grid_7">
                    <p>Hablemos un poco de janque y nos sentamos a tomsar un poco de aguardiente</p>
                </div>
                <div class="lg_grid_3">
                    <p>Distrito de Incahuasi</p>
                </div>
            </Grid>
        </section>
        <MapsLocation/>
    </MainContent>
</template>

<script>
import { Grid } from './../../components/container/Grid'
import MapsLocation from '../../components/utils/GoogleMaps.vue'
import Container from './../../components/container/Container.vue'
import Caption from './../../components/styled/Caption.vue'
import MainContent from '../../components/layout/MainContent.vue'

export default {
    head: () => ({
        title: 'Sobre Nosotros | Centro Poblado Janque'
    }),
    name: 'Home',
    components: { 
        Container,
        Caption,
        MapsLocation,
        Grid,
        MainContent
    },
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.about-page{
    color: var(--text-body);
}
.about-head{
    background: linear-gradient(29deg, #061e1c 0%, #443d1b 53%, #371a25 100%);
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all .1s ease-in-out;
}
.about_data{
    padding: 2rem 0;
}
</style>>