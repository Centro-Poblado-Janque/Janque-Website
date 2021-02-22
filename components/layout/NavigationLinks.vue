<template>

    <nav class="nav_items">
        <Container class="override">
            <SimpleGrid Columns="2fr 8fr" RowGap="0" ColumnGap="0">
                <div class="logo_contain">
                    <Logo />
                </div>
                <div class="nav_links ly-flex">
                    <form class="nav_search nav_item">
                        <input class="nav-input-search" type="text" placeholder="Que desea buscar"/>
                        <input type="submit" value="" id="send" />
                        <label for="send" class="send-search">
                            <FontAwesomeIcon :icon="faSearch" />
                        </label>
                    </form>
                    <NuxtLink to="/" data-action="home" class="nav_item" >
                        <FontAwesomeIcon class="size" :icon="faHome" />
                        <span>Inicio</span>
                    </NuxtLink>
                    <NuxtLink to="/costumbres" data-action="customs" class="nav_item" >
                        <FontAwesomeIcon class="size" :icon="faSlidersH" />
                        <span>Costumbres</span>
                    </NuxtLink>
                    <NuxtLink to="/historia" data-action="history" class="nav_item" >
                        <FontAwesomeIcon class="size" :icon="faLandmark" />
                        <span>Historia</span>
                    </NuxtLink>
                    <NuxtLink to="/about" data-action="about" class="nav_item" >
                        <BrandIconSvg class="size svg-inline--fa fa-w-16"/>
                        <span>Sobre Janque</span>
                    </NuxtLink>
                    <NuxtLink to="/blog" data-action="blog" class="nav_item" >
                        <FontAwesomeIcon class="size" :icon="faBlog" />
                        <span>Blog</span>
                    </NuxtLink>
                </div>
            </SimpleGrid>
        </Container>
    </nav>
</template>

<script>
import Container from '../container/Container.vue'
import Logo from '../utils/Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faLandmark, faBlog, faBreadSlice, faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons'
import BrandIconSvg from '../utils/brand-icon.svg.vue'
import { SimpleGrid } from '../container/Grid'

export default {
    name: 'NavigationLinks',
    components: {
        Container,
        Logo,
        FontAwesomeIcon,
        BrandIconSvg,
        SimpleGrid,
    },
    data: () => ({
        faHome,
        faBreadSlice,
        faBlog,
        faLandmark,
        faSlidersH,
        faSearch
    }),
}
</script>

<style lang="scss">
@import './../../assets/styles/theme';
.nav_items {
    height: calc(100vh - 64px);
    height: -webkit-calc(100vh - 64px);
    width: 100%;
    position: relative;
    z-index: 3;
    top: 80px;
    transition: all .25s ease-in-out;
    @media screen and(min-width: $desktop_breakpoints) {
        top: 0;
        height: 100px;
        transform: translateX(0);
    }
    &.is_active {
        transform: translateX(0);
    }
}
.container_s.override {
    height: 100%;
}
.nav_links {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    a {
        display: block;
        font-size: 1.6rem;
        text-transform: uppercase;
        padding: 1.25rem;
        font-weight: 500;
        transform: translateX(-100px);
        opacity: 0;
        font-family: 'Viga', sans-serif;
        position: relative;
        color: var(--nav-color);
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
    .nav_search{
        padding: .75rem;
        width: 90%;
        margin: .5rem auto;
        transform: translateX(-100px);
        opacity: 0;
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
            transform: translateX(0);
            opacity: 1;
            font-family: var(--nav-font);
            text-align: left;
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
        .nav_search{
            display: none;
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
    background-color: var(--bg-input-primary);
    padding: .5rem;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-input-search{
        background-color: transparent;
    }
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
        &.nav_item span {
            color: var(--dark-light-100)
        }
    }
}
</style>
