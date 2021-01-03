<template>
    <Fragment>
        <AppNavigation />
        <main class="center-app">
            <nuxt/>
        </main>
        <AppFooter />
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import AppFooter from '../components/layout/AppFooter.vue'
import AppNavigation from '../components/layout/AppNavigation.vue'
export default {
    components: {
        Fragment,
        AppNavigation,
        AppFooter
    }
}
</script>

<style lang="scss" >
@import './../static/libs/theme';

html{
  background-color: $background_primary;
  height: 100%;
} 
*,
*::before,
*::after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
} 
::-webkit-scrollbar{
  width: 8px;
  height: 8px;
  background-color: grey;
  border-radius: 3px;
  &-thumb{
    background-color: #f1f1f1;
    border-radius: 3px;
  }   
}

body{
  -webkit-font-smoothing: antialiased;
  color: $color_text_base;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-rendering: optimizeLegibility;
}   
main{
  width: 100vw;
}
a{
  color: $color_link;
  text-decoration: none;
  outline: none;
  transition: color .2s;
}
li{
  list-style: none;
}
img{
  height: auto;
  max-width: 100%;
}
button{
  outline: none;
  border: none;
  display: inline-block;
}
input{
  outline: none;
  border: none;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
}
[role~="button"]{
  cursor: pointer;
}
</style>>