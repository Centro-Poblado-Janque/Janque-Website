<template>
    <button class="redirect_btn" role="button">
        <NuxtLink to="/">
            REGRESAME A MI CAMINO
        </NuxtLink>
    </button>
</template>

<script>
export default {
    name: 'BtnHelp'
}
</script>

<style lang="scss" scoped>
.redirect_btn{
    border: none;
    outline: none;
    background-color: var(--bg-error);
    border-radius: 2px;
    padding: 1.25rem;
    transition: all .5s ease-in-out;
    text-align: center;
    &:hover{
        transform: scale(1.05);
    }
    a{
        color: var(--light-primary);
        font-weight: 600;
        font-size: 1rem;
    }
}
</style>