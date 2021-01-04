<template>
  <div class="nav_items">
    <Container class="reset">
        <div class="nav_links">
            <NuxtLink to="/" data-action="home"><span class="fas fa-home size"></span>Inicio</NuxtLink>
            <NuxtLink to="/costumbres" data-action="customs"><span class="fab fa-accusoft size"></span>Costumbres</NuxtLink>
            <NuxtLink to="/historia" data-action="history"><span class="fas fa-monument size"></span>Historia</NuxtLink>
            <NuxtLink to="/about" data-action="about"><span class="fas fa-align-center size"></span>Sobre Janque</NuxtLink>
            <NuxtLink to="/blog" data-action="blog"><span class="fas fa-blog size"></span>Blog</NuxtLink>
        </div>
        <!-- <form class="nav_search">
            <input class="nav-input-search" type="text" placeholder="Que desea buscar">
            <input type="submit" value="" id="send" hidden="">
            <label for="send" class="send-search">
                <i class="fas fa-search" aria-hidden="true"></i>
            </label>
        </form> -->
    </Container>
  </div>
</template>

<script>
import Container from '../container/Container.vue'
export default {
  components: { Container },
    name: 'NavigationLinks'
}
</script>

<style lang="scss" scoped>
@import './../../static/libs/theme';
.nav_items{
    background-color: rgba(0,0,0,.9);
    height: calc(100vh - 64px);
    height: -webkit-calc(100vh - 64px);
    width: 100%;
    margin-left: -100%;
    transition: all .25s ease-in;
    @media screen and(min-width: $desktop_breakpoints){
        height: 80px;
        background-color:  transparent;
        margin: 0;
    }
}
.nav_items.is_active{
    margin: 0;
}
.reset{
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
        border: solid .5px #303030;
        border-top: none;
        color: #B8B8B8;
        &:hover{
            color: var(--dark-light);
        }
    }
    .size{
        margin-right: .5rem;
        width: 40px;
        text-align: center;
        color: #6b6b6b;
    }
    @media screen and(min-width: $desktop_breakpoints){
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        a{
            background-color: transparent;
            text-transform: capitalize;
            border: none;
        }
    }
}

@media screen and (min-width: $desktop_breakpoints) {
    .bg_dark{
        background-color: #121514;
        height: 64px;
        border-bottom: .5px solid #494949;
    }
}

</style>