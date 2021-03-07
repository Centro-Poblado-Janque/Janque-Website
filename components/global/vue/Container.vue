<template>
    <div :class="$style.Container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style lang="scss" module>
@import '~/assets/styles/mixin';
.container_s, .container, .Container{
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