<template>
    <section class="blog-post-container ly_grid ly_grid_10">
        <article class="blog-content lg_grid_7 card-template pg-4">
            <slot></slot>

        </article>
        <section class="aside-content lg_grid_3">
            <article class="autor-content card-template top-blue pg-3">
                <slot name="autor-content"></slot>

            </article>
            <aside class="others-blogs card-template top-blue pg-3">
                <slot name="items-view"></slot>

            </aside>
        </section>
    </section>
</template>

<script>
export default {
    name: 'ArticleViews'
}
</script>