<template>
    <NuxtLink :to="{ name: 'blog-slug', params: { slug: slug } }" class="blog-item">
        <img :src="img" :alt="alt" class="img"/>
        <div class="blog-card-caption">
            <div class="blog-metadates">
                <span class="read-time">
                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.009 512.009" class="svg-icon s-mr-05 fill"><path d="M272.392,249.22l-0.009-132.207c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383L239.626,256c0,4.349,1.731,8.511,4.801,11.59l85.765,85.765c3.204,3.195,7.393,4.792,11.59,4.792c4.189,0,8.378-1.589,11.573-4.792c6.399-6.399,6.399-16.764,0-23.172L272.392,249.22z"></path><path d="M512.009,256.009c0-0.079-0.011-0.155-0.012-0.234C511.87,114.712,397.083,0.009,256,0.009c-141.161,0-256,114.839-256,256S114.839,512,256,512c141.083,0,255.87-114.695,255.997-255.757C511.998,256.164,512.009,256.088,512.009,256.009z M272.383,478.64v-25.471c0-9.052-7.339-16.383-16.383-16.383s-16.383,7.331-16.383,16.383v25.471c-110.061-8.023-198.227-96.196-206.248-206.257h25.471c9.052,0,16.383-7.322,16.383-16.374c0-9.052-7.331-16.383-16.383-16.383H33.368c8.018-110.065,96.185-198.235,206.249-206.257v25.471c0,9.043,7.339,16.383,16.383,16.383c9.052,0,16.383-7.339,16.383-16.383V33.369c110.068,8.022,198.227,96.195,206.249,206.257h-25.462c-9.052,0-16.392,7.322-16.392,16.374c0,9.052,7.339,16.383,16.392,16.383h25.462C470.615,382.448,382.454,470.619,272.383,478.64z"></path></svg></i>
                    {{ time  }} minutos
                </span>
                <span class="current-time">
                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" class="svg-icon s-mr-05 fill"><rect x="7" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="14" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="21" y="0.5" width="2" height="7.5" rx="1"></rect><rect x="7" y="12" width="2" height="2" rx="1"></rect><rect x="21" y="12" width="2" height="2" rx="1"></rect><rect x="14" y="12" width="2" height="2" rx="1"></rect><rect x="7" y="17" width="2" height="2" rx="1"></rect><rect x="21" y="17" width="2" height="2" rx="1"></rect><rect x="14" y="17" width="2" height="2" rx="1"></rect><rect x="7" y="22" width="2" height="2" rx="1"></rect><rect x="21" y="22" width="2" height="2" rx="1"></rect><rect x="14" y="22" width="2" height="2" rx="1"></rect><rect x="0.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="27.5" y="3.5" width="2" height="27" rx="1"></rect><rect x="29.5" y="28.5" width="2" height="29" rx="1" transform="rotate(90 29.5 28.5)"></rect><rect x="29.5" y="3.5" width="2" height="29" rx="1" transform="rotate(90 29.5 3.5)"></rect></svg></i>
                    {{ date  }}
                </span>
            </div>
            <hr>
            <h2>{{ title }}</h2>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'BlogViews',
    props:{
        slug: String,
        img: String,
        alt: String,
        title: String,
        time: Number,
        date: String
    }
}
</script>

<style lang="scss">
.blog-item{
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 3px;
    display: inline-block;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 3px;
    object-position: 50% 50%;   
}
.blog-card-caption{
    width: 100%;
    padding: .5rem;
    h2{
        color: var(--dark-primary);
        padding: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
    }
    hr{
        box-sizing: content-box;
        height: 0;
        border: 0;
        border-top: 1px solid var(--v-grey-100) ;
    }
}
.blog-metadates{
    color: var(--dark-light-100);
    left: 0;
    padding: .5rem;
    display: flex;
    position: absolute;
    align-items: center;
    i{
        padding: 0 .15rem ;
    }
    .svg-icon{
        width: .85rem;
        height: .85rem;
        fill: var(--blue-depth-200);
    }
    .read-time{

    }
    .current-time{
        padding-left: 10px;
    }
}
</style>