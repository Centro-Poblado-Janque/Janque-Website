<template>
    <button :class="$style.redirect_btn" role="button">
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

<style lang="scss" module>
.redirect_btn{
    border: 2px solid #b43e0f;
    background: none;
    border-radius: 2px;
    padding: 1rem;
    transition: all .25s ease-in-out;
    text-align: center;
    &:hover{
        transform: scale(1.05);
        background-color: #b43e0f;
    }
    a{
        color: silver;
        font-weight: 600;
        font-size: 1rem;
    }
}
</style>