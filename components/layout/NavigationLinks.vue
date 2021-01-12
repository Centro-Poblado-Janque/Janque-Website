<template>
  <div class="nav_items">
    <Container class="container_reset">
        <GridView>
            <div class="logo_contain">
                <Logo />
            </div>
            <div class="nav_links">
                <NuxtLink to="/" data-action="home"><span class="fas fa-home size"></span>Inicio</NuxtLink>
                <NuxtLink to="/costumbres" data-action="customs"><span class="fab fa-accusoft size"></span>Costumbres</NuxtLink>
                <NuxtLink to="/historia" data-action="history"><span class="fas fa-monument size"></span>Historia</NuxtLink>
                <NuxtLink to="/about" data-action="about"><span class="fas fa-align-center size"></span>Sobre Janque</NuxtLink>
                <NuxtLink to="/blog" data-action="blog"><span class="fas fa-blog size"></span>Blog</NuxtLink>
            </div>
            <form class="nav_search">
                <input class="nav-input-search" type="text" placeholder="Que desea buscar">
                <input type="submit" value="" id="send" hidden="">
                <label for="send" class="send-search">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </label>
            </form> 
        </GridView>
    </Container>
  </div>
</template>

<script>
import Container from '../container/Container.vue';
import styled from 'vue-styled-components';
import Logo from '../utils/Logo.vue';

const GridView = styled.div`
    width: 100%;
    display: grid;
    align-content: center;
    height: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 1fr;
    @media screen and (min-width: 1200px){
        grid-template-columns: 2fr 8fr;
    }
`;

export default {
    components: { 
        Container,
        GridView,
        Logo
    },
    name: 'NavigationLinks'
}
</script>

<style lang="scss" scoped>
@import './../../static/libs/theme';
.nav_items{
    background-color: var(--bg-opacity);
    height: calc(100vh - 64px);
    height: -webkit-calc(100vh - 64px);
    width: 100%;
    margin-left: -100%;
    transition: all .25s ease-in;
    @media screen and(min-width: $desktop_breakpoints){
        height: 100px;
        background-color: transparent;
        margin: 0;
    }
    &.is_active{
        margin: 0;
    }
}
.container_reset{
    padding: 0;
    height: 100%;
}
.nav_links{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    a{
        font-family: 'Noto Sans JP', 'Roboto', sans-serif;
        display: block;
        background-color: rgba(82, 82, 82, 0.314);
        font-size: 1.25rem;
        text-transform: uppercase;
        padding: 1.25rem;
        transition: all .25s;
        font-weight: 500;
        border: solid .5px var(--dark-300);
        border-top: none;
        color: var(--dark-light-100);
        &:hover{
            background-color: transparent;
        }
    }
    .size{
        margin-right: .5rem;
        width: 40px;
        text-align: center;
        color: var(--dark-light-200);
    }
    @media screen and(min-width: $desktop_breakpoints){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        a{
            background-color: transparent;
            text-transform: capitalize;
            border: none;
            font-size: 1.1rem;
            color: var(--dark-primary);
            &:hover{
                color: var(--dark-light);
                transform: translateY(-4px);
            }
        }
    }
}
.nuxt-link-exact-active{
    position: relative;
    background-color: transparent !important;
    @media screen and (min-width: $desktop_breakpoints) {
        &::after{
            position: absolute;
            content: '';
            width: 90%;
            margin: 0 auto;
            left: 20px;
            bottom: 0;
            height: 1px;
            background-color: var(--dark-active-link);
        }
    }
}
.logo_contain{
    display: none;
    @media screen and (min-width: $desktop_breakpoints) {
        display: block;
        width: 100%;
        height: 100%;
    }  
}
.nav_search{
    display: none;
}
@media screen and (min-width: $desktop_breakpoints) {
    .bg_dark{
        background-color: var(--light-second);
        height: 64px;
        border-bottom: 1px solid var(--light-border-1);
        .logo_contain{
            height: 100%;
            width: 80%;
        }
    }
}

</style>