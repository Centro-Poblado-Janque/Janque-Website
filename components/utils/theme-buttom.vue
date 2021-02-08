<template>
    <span class="lg_fixed position_right_top center_by_hg_60 right-20">
        <input type="checkbox" id="theme__toggle" v-model="checked" hidden/>
        <label for="theme__toggle" class="rounded-toggle">
            <div class="after">
                <FontAwesomeIcon class="fill-content" :icon="checked === true ? faMoon : faSun" />
            </div>
            <!--  -->
        </label>
    </span>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export default {
    name: 'ThemeButton',
    components:{
        FontAwesomeIcon
    },
    data () {
        return{
            faSun, faMoon, checked: false
        }
    },
    head () {
        return{
            htmlAttrs:{
                class: this.getContext()
            }
        }
    },
    methods: {
        getContext () {
        if(this.checked){
            return 'dark_mode'
        }
        else{
            return ''
        }
        }
    }
}
</script>

<style lang="scss">
.rounded-toggle{
    display: inline-block;
    border: 1.5px solid var(--grey-border);
    border-radius: 2px;
    background-color: var(--grey-dark);
    width: 4rem;
    height: 2rem;
    .after{
        color: var(--light-primary);
        width: 50%;
        transition: all .5s ;
        height: 80%;
        margin: 5%;
        text-align: center;
        display: block;
        border-radius: 2px;
        background-color: var(--dark-light);
    }
}
.right-20{
    left: 15px;
    @media screen and(min-width: 1200px) {
        right: 20px !important;
        left: auto
    }
}
.fill-content{
    width: 100%;
    height: 100%;
}
.fa-sun{
    color: #0e7face1;
}
.fa-moon{
    color: #c4b003;
}
#theme__toggle{
    &:checked ~ .rounded-toggle .after{
        transform: translateX(75%);
    }
}
</style>
