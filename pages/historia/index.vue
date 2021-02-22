<template name="template__page-history">
    <MainContent class="page history-page">
        <header class="history-head">
            <Container>
                <Caption title="Nuestra Historia" />
            </Container>
        </header>
        <article class="history-body">
            <Container>
                <h2>Como nació Janque</h2>
                <p>Janque es una de los Centros Poblados mas grandes del Distrito de Incahuasi</p>
                <h2>Etimilogia</h2>
                <p>Hay muchas hipotesis de como pudo haber nacido la palabra janque.</p>
                <p>Una de ellas es </p>
            </Container>
        </article>
    </MainContent>
</template>

<script>
import MainContent from '../../components/layout/MainContent.vue'
import Container from './../../components/container/Container.vue'
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Conoce nuestra historia | Centro Poblado Janque'
    }),
    components: { 
        Container,
        Caption,
        MainContent
    }
    
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.history-page{
    color: var(--text-body);
}
.history-head{
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    &::after{
        content: '';
        display: block;
        background-image: url('./../../assets/img/history-head.jpg');
        @include normalize_img; @include absolute_position;
        transition: all .1s ease-in-out;
        z-index: -1;
        filter: brightness(0.45);
    } 
}
.history-body{
    margin: 2rem auto;
}

</style>>
