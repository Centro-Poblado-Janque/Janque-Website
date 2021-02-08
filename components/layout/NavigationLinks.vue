<template>
    <div class="nav_items">
        <Container class="container_reset">
            <GridView>
                <div class="logo_contain">
                    <Logo />
                </div>
                <div class="nav_links ly-flex">
                    <NuxtLink to="/" data-action="home">
                        <FontAwesomeIcon class="size" :icon="faHome" />
                        <span>Inicio</span>
                    </NuxtLink>
                    <NuxtLink to="/costumbres" data-action="customs">
                        <FontAwesomeIcon class="size" :icon="faSlidersH" />
                        <span>Costumbres</span>
                    </NuxtLink>
                    <NuxtLink to="/historia" data-action="history">
                        <FontAwesomeIcon class="size" :icon="faLandmark" />
                        <span>Historia</span>
                    </NuxtLink>
                    <NuxtLink to="/about" data-action="about">
                        <BrandIconSvg class="size svg-inline--fa fa-w-16"/>
                        <span>Sobre Janque</span>
                    </NuxtLink>
                    <NuxtLink to="/blog" data-action="blog">
                        <FontAwesomeIcon class="size" :icon="faBlog" />
                        <span>Blog</span>
                    </NuxtLink>
                </div>
                <form class="nav_search">
                    <input
                        class="nav-input-search"
                        type="text"
                        placeholder="Que desea buscar"
                    />
                    <input type="submit" value="" id="send" hidden="" />
                    <label for="send" class="send-search">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </label>
                </form>
            </GridView>
        </Container>
    </div>
</template>

<script>
import Container from '../container/Container.vue'
import styled from 'vue-styled-components'
import Logo from '../utils/Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faLandmark, faBlog, faBreadSlice, faSlidersH } from '@fortawesome/free-solid-svg-icons'
import BrandIconSvg from '../utils/brand-icon.svg.vue'

const GridView = styled.div`
    width: 100%;
    display: grid;
    align-content: center;
    height: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 1fr;
    @media screen and (min-width: 1200px) {
        grid-template-columns: 2fr 8fr;
    }
`

export default {
    name: 'NavigationLinks',
    components: {
        Container,
        GridView,
        Logo,
        FontAwesomeIcon,
        BrandIconSvg,
    },
    data: () => ({
        faHome,
        faBreadSlice,
        faBlog,
        faLandmark,
        faSlidersH,
    }),
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.nav_items {
    background-color: var(--bg-opacity);
    height: calc(100vh - 64px);
    height: -webkit-calc(100vh - 64px);
    width: 100%;
    margin-left: -100%;
    transition: all 0.25s ease-in;
    @media screen and(min-width: $desktop_breakpoints) {
        height: 100px;
        background-color: transparent;
        margin: 0;
    }
    &.is_active {
        margin: 0;
    }
}
.container_reset {
    padding: 0;
    height: 100%;
}
.nav_links {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    a {
        display: block;
        background-color: rgba(76, 79, 80, 0.314);
        font-size: 1.25rem;
        text-transform: uppercase;
        font-family: var(--nav-font);
        padding: 1.25rem;
        transition: all 0.25s;
        font-weight: 500;
        border: solid 0.5px var(--nav-border);
        border-top: none;
        position: relative;
        transition: all .5s ease;
        color: var(--dark-light-100);
        &:hover {
            background-color: transparent;
            &::after {
                position: absolute;
                content: '';
                padding: .5rem;
                width: 90%;
                margin: 17px auto;
                left: 20px;
                bottom: 0;
                height: 30px;
                border-radius: 3px;
                background-color: var(--dark-active-link);
            }
        }
    }
    .size {
        margin-right: 0.5rem;
        width: 40px;
        text-align: center;
        color: var(--dark-light-200);
    }
    @media screen and(min-width: $desktop_breakpoints) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        a {
            background-color: transparent;
            text-transform: capitalize;
            border: none;
            position: relative;
            font-size: 1.1rem;
            color: var(--dark-primary);
            &::before {
                content: '';
                display: block;
                opacity: 0.1;
                position: absolute;
                right: 0;
                top: 0;
                left: 0;
                transform: scale3d(0, 0, 0);
                width: 100%;
                height: 100%;
                border-radius: 3px;
                background-color: currentColor;
                transition: 0.1s;
            }
        }
    }
}
.nuxt-link-exact-active {
    position: relative;
    background-color: transparent !important;
    @media screen and (min-width: $desktop_breakpoints) {
        &::after {
            position: absolute;
            content: '';
            padding: .5rem;
            width: 90%;
            margin: 17px auto;
            left: 20px;
            bottom: 0;
            height: 30px;
            border-radius: 3px;
            background-color: var(--dark-active-link);
        }
    }
}
.logo_contain {
    display: none;
    @media screen and (min-width: $desktop_breakpoints) {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.nav_search {
    display: none;
}
@media screen and (min-width: $desktop_breakpoints) {
    .bg_dark {
        background-color: var(--light-second);
        height: 64px;
        border-bottom: 1px solid var(--grey-border);
        .logo_contain {
            height: 100%;
            width: 80%;
        }
    }
}
</style>
