<template>
    <section class="page history-page">
        <header class="history-head">
            <Container>
                <Caption title="Nuestra Historia" />
            </Container>
        </header>
    </section>
</template>

<script>
import Container from './../../components/container/Container.vue'
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Janque - Conoce su historia'
    }),
    components: { 
        Container,
        Caption
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

</style>>
