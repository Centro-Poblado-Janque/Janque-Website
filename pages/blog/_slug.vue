<template> 
    <MainContent class="post-main">
        <header class="post-head">
            <img :src="'https://cp-janque.com/blog-img/' + article.img" :alt="article.slug" class="img-background">
            <Container class="container-reset">
                <div class="post-metadates">
                    <h1 class="article-title">{{ article.title }}</h1>
                    <span class="read-time">
                        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.009 512.009" class="svg-icon s-mr-05 fill"><path d="M272.392,249.22l-0.009-132.207c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383L239.626,256c0,4.349,1.731,8.511,4.801,11.59l85.765,85.765c3.204,3.195,7.393,4.792,11.59,4.792c4.189,0,8.378-1.589,11.573-4.792c6.399-6.399,6.399-16.764,0-23.172L272.392,249.22z"></path><path d="M512.009,256.009c0-0.079-0.011-0.155-0.012-0.234C511.87,114.712,397.083,0.009,256,0.009c-141.161,0-256,114.839-256,256S114.839,512,256,512c141.083,0,255.87-114.695,255.997-255.757C511.998,256.164,512.009,256.088,512.009,256.009z M272.383,478.64v-25.471c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383v25.471c-110.061-8.023-198.227-96.196-206.248-206.257h25.471c9.052,0,16.383-7.322,16.383-16.374c0-9.052-7.331-16.383-16.383-16.383H33.368c8.018-110.065,96.185-198.235,206.249-206.257v25.471c0,9.043,7.339,16.383,16.383,16.383c9.052,0,16.383-7.339,16.383-16.383V33.369c110.068,8.022,198.227,96.195,206.249,206.257h-25.462c-9.052,0-16.392,7.322-16.392,16.374c0,9.052,7.339,16.383,16.392,16.383h25.462C470.615,382.448,382.454,470.619,272.383,478.64z"></path></svg></i>
                        Lectura de {{ article.time  }} minutos
                    </span>
                    <span class="current-time">
                        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" class="svg-icon s-mr-05 fill"><rect x="7" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="14" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="21" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="7" y="12" width="2" height="2" rx="1"></rect><rect x="21" y="12" width="2" height="2" rx="1"></rect><rect x="14" y="12" width="2" height="2" rx="1"></rect><rect x="7" y="17" width="2" height="2" rx="1"></rect><rect x="21" y="17" width="2" height="2" rx="1"></rect><rect x="14" y="17" width="2" height="2" rx="1"></rect><rect x="7" y="22" width="2" height="2" rx="1"></rect><rect x="21" y="22" width="2" height="2" rx="1"></rect><rect x="14" y="22" width="2" height="2" rx="1"></rect><rect x="0.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="27.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="29.5" y="28.5" width="2" height="29" rx="1" transform="rotate(90 29.5 28.5)"></rect><rect x="29.5" y="3.5" width="2" height="29" rx="1" transform="rotate(90 29.5 3.5)"></rect></svg></i>
                        {{ article.date  }}
                    </span>
                </div>
            </Container>
        </header>
        <section class="blog-post">
            <Container>
                <div class="redirect_links">
                    <NuxtLink to="/"><FontAwesomeIcon :icon="faHome" /></NuxtLink>
                    <NuxtLink class="after" :to="`./../blog`">Blog</NuxtLink> 
                    <NuxtLink class="after" :to="article.slug">{{ article.title }}</NuxtLink>
                </div>
                <ArticleViews>
                    <template>
                        <NuxtContent :document="article" />
                    </template>

                    <template #autor-content>
                        <img class="avatar-model" :src="'./../avatar-img/' + article.avatar" :alt="article.alt">
                        <span class="author-dates">
                            <p class="blog-author">{{ article.author }}</p>
                            <a class="blog-contact" :href="'https://twitter.com/' + article.twitter" rel="noopeper" target="_blank">
                                <FontAwesomeIcon :icon="faTwitter" class="blue-color"/>
                                {{ article.twitter }}
                            </a>
                        </span>
                    </template>

                    <template #items-view>
                        <ul>
                            <li v-for="ids of id" :key="ids.id">
                                <a :href="`#${ ids.id }`" class="content_item">
                                    {{ ids.text }}
                                </a>
                            </li>
                        </ul>
                    </template>

                </ArticleViews>
                <div id="disqus_thread" class="disqus-comment"></div>
            </Container>
        </section>
    </MainContent>
</template>

<script>
import ArticleViews from '../../components/blog/ArticleView.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
export default {
    components: { 
        ArticleViews,
        FontAwesomeIcon
    },
    head () {
        return{
            title: this.article.title,
            script: [
                { src: 'http://localhost:3000/disqus.js' },
            ],
        }
    },
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch();
        const id = article.toc;
        return { article, id }
    },
    data: () => ({
        faHome, faTwitter
    })
}
</script>
<style lang="scss">
.post-main{
    width: 100%;
}
.post-head{
    position: relative;
    top: 0;
    height: 80vh;
    .img-background{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        object-fit: cover;
        filter: brightness(0.5);
        width: 100%;
        height: 100%;
    }
}
.redirect_links{
    position: relative;
    padding: .5rem;
    margin-bottom: 1rem;
    a{
        color: var(--grey-200);
        &::after{
            display: none;
        }
    }
    .after::before{
        content: "\2192";
        font-family: Lucida Grande,Lucida Sans Unicode,Arial,Helvetica,sans-serif;
        color: #a9a9a9;
        display: inline-block;
        margin: 0 9px 0 7px;
    }
}
.post-metadates{
    color: var(--dark-light-100);
    position: absolute;
    padding: .5rem;
    bottom: 10%;
    .article-title{
        font-family: var(--blog-title-font);
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--blog-title-color-white);
        margin-bottom: 1rem;
    }
    .svg-icon{
        width: .9rem;
        height: .9rem;
        fill: var(--dark-light-100);
        margin-right: 4px;
    }
    .read-time{

    }
    .current-time{
        padding-left: 10px;
    }
}
.blog-post{
    padding-top: 3rem;
    margin-bottom: 3rem;
    font-family: var(--blog-font);
    h2{
        font-family: var(--blog-title-font);
        font-size: 1.5rem;
        padding: 15px 5px;
        font-weight: bold;
        color: var(--blog-title-color);
        position: relative;
        &:nth-child(1){
            padding-top: 0;
            padding-bottom: calc(5px + 1rem);
        }
    }
    p{
        line-height: 1.8;
        font-size: 1rem;
        padding-bottom: 1.5rem;
    }
    @media screen and (min-width: 1024px){
        p{
            font-size: 1.1rem;
        }
        h2{
           font-size: 2rem; 
        }
    }
}
.avatar-model{
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    object-position: 50% 50%;
    margin-right: 1rem;
}
.author-dates{
    text-align: center;
    line-height: 1;
    font-family: var(--noto-font);
    p{
        padding: 0;
    }
    .blog-author{
        text-transform: capitalize;
        font-weight: bold;
        color: var(--blue-depth);

    }
    .blog-contact{
        font-size: .85rem;
        color: var(--dark-light-200);
        i{
            padding-right: 4px;
            color: var(--blue-depth-200);
        }
    }
}
.content_item{
    display: block;
    color: var(--blue-depth);
    line-height: 1.5;
    margin-bottom: .5rem;
    padding: .25rem 1rem;
    &:hover{
        background-color: #2a3b47;
        border-radius: .25rem;
        color: silver;
    }
}
.blue-color{
    color: var(--blue-depth-200)
}
.disqus-comment{
    padding-top: 4rem;
    padding: 1rem;
    
}
</style>
