<template>
    <NuxtLink :to="to" :class="[css, $style.NextLink]">
        <slot>
            <FontAwesomeIcon :icon="icon" class="size"/>
            <span :class="$style.link">{{ content }}</span>
        </slot>
    </NuxtLink>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'NextLink',
    components:{
        FontAwesomeIcon
    },
    props: {
        to: String,
        css: String,
        content: String,
        icon: Object
    }
}
</script>

<style lang="scss" module>
.NextLink{
    display: inline-block;
}
.link{
    color: inherit
}
</style>