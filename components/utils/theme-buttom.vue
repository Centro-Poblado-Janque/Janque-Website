<template>
    <div :class="`${$style.switch} grid`" v-css:module>
        <input type="checkbox" name="" id="theme__toggle" :class="$style.checkbox" hidden v-model="checked" checked="false"/>
        <label for="theme__toggle" :class="$style.dot">       
        </label>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
export default {
    name: 'ThemeButton',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            faSun,
            faMoon,
            checked: false,
            getTheme: ''
        }
    },
    head() {
        return {
            htmlAttrs: {
                'data-theme': this.getContext(),
            },
        }
    },
    mounted () {
        this.getContext()
    },
    methods: {
        getContext() {
            if (this.checked) {
                return 'dark';
            } else {
                return 'light'
            }
        },
    }
}
</script>

<style lang="scss" module>
.switch{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 110;
    padding: 1rem;
}
.dot{
    display: inline-block;
    border-radius: 50px;
    background-color: var(--grey-dark);
    width: 64px;
    position: relative;
    border: 2px solid #47646c;
    height: 34px;
    cursor: pointer;
    &::after {
        content: "";
        width: 25px;
        transition: all 0.5s;
        height: 24px;
        display: block;
        border-radius: 50px;
        background-color: #47646c;
        position: absolute;
        top: 3px;
        left: 3px;
    }
}
.checkbox:checked + .dot{
    background: #25454d;
    &::after{
        left: 33px;
    }
}
</style>
