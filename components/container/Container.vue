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

<style lang="scss" global>
@import './../../assets/styles/theme';
.container_s, .container{
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    @media screen and(min-width: $desktop_breakpoints) {
        width: 80%;
    }
    @media screen and(min-width: $tablet_breakpoints) {
        width: 90%;
    }
}
</style>