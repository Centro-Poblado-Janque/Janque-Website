<template>
    <section class="blog-page">
        <header class="top_home">
            <Container>
                <Caption title="Welcome to Blog Center" />
            </Container>
        </header>
        <div class="blog-center">
            <Container class="container-reset">
                <h1 class="blog-caption">Tenemos muchos articulos para usted</h1>
                <ul class="blog-card-container">
                    <li v-for="article of articles" :key="article.slug" class="blog-card">
                        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <img :src="article.img" :alt="article.slug"/>
                        <div class="blog-card-caption">
                            <h2>{{ article.title }}</h2>
                            <p>{{ article.description }}</p>
                            <div class="blog-metadates">
                                <span class="read-time">
                                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.009 512.009" class="svg-icon s-mr-05 fill"><path d="M272.392,249.22l-0.009-132.207c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383L239.626,256c0,4.349,1.731,8.511,4.801,11.59l85.765,85.765c3.204,3.195,7.393,4.792,11.59,4.792c4.189,0,8.378-1.589,11.573-4.792c6.399-6.399,6.399-16.764,0-23.172L272.392,249.22z"></path><path d="M512.009,256.009c0-0.079-0.011-0.155-0.012-0.234C511.87,114.712,397.083,0.009,256,0.009c-141.161,0-256,114.839-256,256S114.839,512,256,512c141.083,0,255.87-114.695,255.997-255.757C511.998,256.164,512.009,256.088,512.009,256.009z M272.383,478.64v-25.471c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383v25.471c-110.061-8.023-198.227-96.196-206.248-206.257h25.471c9.052,0,16.383-7.322,16.383-16.374c0-9.052-7.331-16.383-16.383-16.383H33.368c8.018-110.065,96.185-198.235,206.249-206.257v25.471c0,9.043,7.339,16.383,16.383,16.383c9.052,0,16.383-7.339,16.383-16.383V33.369c110.068,8.022,198.227,96.195,206.249,206.257h-25.462c-9.052,0-16.392,7.322-16.392,16.374c0,9.052,7.339,16.383,16.392,16.383h25.462C470.615,382.448,382.454,470.619,272.383,478.64z"></path></svg></i>
                                    lectura de {{ article.time  }} minutos
                                </span>
                                <span class="current-time">
                                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" class="svg-icon s-mr-05 fill"><rect x="7" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="14" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="21" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="7" y="12" width="2" height="2" rx="1"></rect><rect x="21" y="12" width="2" height="2" rx="1"></rect><rect x="14" y="12" width="2" height="2" rx="1"></rect><rect x="7" y="17" width="2" height="2" rx="1"></rect><rect x="21" y="17" width="2" height="2" rx="1"></rect><rect x="14" y="17" width="2" height="2" rx="1"></rect><rect x="7" y="22" width="2" height="2" rx="1"></rect><rect x="21" y="22" width="2" height="2" rx="1"></rect><rect x="14" y="22" width="2" height="2" rx="1"></rect><rect x="0.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="27.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="29.5" y="28.5" width="2" height="29" rx="1" transform="rotate(90 29.5 28.5)"></rect><rect x="29.5" y="3.5" width="2" height="29" rx="1" transform="rotate(90 29.5 3.5)"></rect></svg></i>
                                    {{ article.date  }}
                                </span>
                            </div>
                        </div>
                        </NuxtLink>
                    </li>
                </ul>
            </Container>
        </div>
    </section>
</template>

<script>
import Container from './../../components/container/Container.vue'
import Caption from './../../components/styled/Caption.vue'

export default {
    head: () => ({
        title: 'Janque - Blog',
    }),
    components: {
        Container,
        Caption
    },
    async asyncData({ $content, params }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'img', 'slug', 'author', 'date', 'time'])
            .sortBy('createdAt', 'asc')
            .fetch()
            console.log(articles)
        return {
            articles
        }
    },
}
</script>

<style lang="scss" scoped>
@import './../../static/libs/theme';
.top_home {
    background-color: #c7c4ac;
    min-height: 80vh;
    padding-top: 80px;
    position: relative;
    transition: all 0.1s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    /*  animation: change_banner 14s infinite linear;  */
}
@keyframes change_banner {
    0% {
        background-image: url('./../../assets/img/banner_1.png');
    }
    32% {
        background-image: url('./../../assets/img/banner_1.png');
    }

    33% {
        background-image: url('./../../assets/img/banner_2.jpg');
    }
    65% {
        background-image: url('./../../assets/img/banner_2.jpg');
    }

    66% {
        background-image: url('./../../assets/img/banner_3.png');
    }
    100% {
        background-image: url('./../../assets/img/banner_3.png');
    }
}

.blog-center{
    padding: 3rem 0;
}
.container-reset{
    padding: .5rem;
}
.blog-card-container{
    display: grid;
    padding: .5rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
    grid-gap: 8px;
    @media screen and(min-width: $desktop_breakpoints) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 450px);
    }
}
.blog-card{
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: -5px 1px 13px 2px rgba(100,96,96,0.75);
    -webkit-box-shadow: -5px 1px 13px 2px rgba(100,96,96,0.75);
    -moz-box-shadow: -5px 1px 13px 2px rgba(100,96,96,0.75);
    @media screen and(min-width: $desktop_breakpoints) {
        &:nth-child(1){
            grid-column: 1 / span 2;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    &:hover{
        p{
            height: auto;
            opacity: 1; 
        }
    }
}
.blog-card-caption{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    padding: .5rem;
    h2{
        color: var(--dark-light-100);
        padding: 4px 0;
    }
    p{
        color: var(--dark-light-200);
        height: 0;
        opacity: 0;
        padding: 4px 0;
        transition: all .25s ease-in;
    }
}
.blog-metadates{
    color: var(--dark-light-100);
    left: 0;
    padding: .5rem;
    .svg-icon{
        width: .9rem;
        height: .9rem;
        fill: var(--dark-light-100);
    }
    .read-time{

    }
    .current-time{
        padding-left: 10px;
    }
}
.blog-caption{
    font-family: var(--blog-title-font);
    color: var(--blog-title-color);
    font-size: 3em;
}
</style>
