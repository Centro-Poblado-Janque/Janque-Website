<template>
    <div class="page-loader-md5" v-if="!isloaded">
        <div class="cube-md5">J</div>
        <div class="cube-md5">A</div>
        <div class="cube-md5">N</div>
        <div class="cube-md5">Q</div>
        <div class="cube-md5">U</div>
        <div class="cube-md5">E</div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isloaded: false
    }),
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == 'complete') {
                this.isloaded = true
            }
        }
        setTimeout(() => {
            this.isloaded = true
        }, 6000);
    },
}
</script>

<style lang="scss">
$colors: #8cc271, #69beeb, #f5aa39, #e9643b, #408f77, #043746;
// -----------------------------------------------------
.page-loader-md5 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-color-primary);
    z-index: 1200;
}
// -----------------------------------------------------
.cube-md5 {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color: currentColor;
    justify-content: center;
    margin-right: 10px;
    @for $i from 1 through length($colors) {
        &:nth-child(#{$i}) {
            background-color: nth($colors, $i);
        }
    }
    &:first-child {
        animation: left 1s infinite;
    }
    &:last-child {
        animation: right 1s infinite 0.5s;
    }
}
// -----------------------------------------------------
@keyframes left {
    40% {
        transform: translateX(-60px);
    }
    50% {
        transform: translateX(0);
    }
}
@keyframes right {
    40% {
        transform: translateX(60px);
    }
    50% {
        transform: translateX(0);
    }
}
</style>
