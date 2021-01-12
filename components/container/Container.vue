<template>
    <div class="container_s">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style lang="scss" scoped>
@import './../../static/libs/theme';
.container_s{
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    @media screen and(min-width: $desktop_breakpoints) {
        width: 80%;
        padding: 0;
    }
    @media screen and(min-width: $tablet_breakpoints) {
        padding: 0;
        width: 90%;
    }
}
</style>