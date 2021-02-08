<template>
    <div class="page home-page">
        <header class="home-head">
            <Container>
                <Caption title="Bienvenido a la pagina web de Janque" />
            </Container>
        </header>

    </div>
</template>

<script>
import Container from '../components/container/Container.vue'
import Caption from '../components/styled/Caption.vue'

export default {
    components: { 
        Container,
        Caption
    }
    
}
</script>

<style lang="scss">
@import './../assets/styles/theme';
.home-page{
    color: var(--text-body);
}
.home-head{
    min-height: 100vh;
    padding-top: 80px;
    position: relative;
    &::after{
        content: '';
        display: block;
        background-image: url('./../assets/img/error_bg.jpg');
        @include normalize_img; @include absolute_position;
        transition: all .1s ease-in-out;
        z-index: -1;
        animation: change_banner 14s infinite linear; 
        filter: brightness(0.45);
    } 
}
@keyframes change_banner {
    0%{
       background-image: url('./../assets/img/banner_1.png'); 
    }
    32%{
        background-image: url('./../assets/img/banner_1.png')
    }

    33%{
       background-image: url('./../assets/img/banner_2.jpg'); 
    }
    65%{
        background-image: url('./../assets/img/banner_2.jpg')
    }

    66%{
       background-image: url('./../assets/img/banner_3.png'); 
    }
    100%{
        background-image: url('./../assets/img/banner_3.png')
    }
}
</style>>
