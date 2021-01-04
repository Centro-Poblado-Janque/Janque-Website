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
import icon from './../static/logo.svg'
import AppFooter from '../components/layout/AppFooter.vue'
import AppNavigation from '../components/layout/AppNavigation.vue'
export default {
    components: {
        Fragment,
        AppNavigation,
        AppFooter
    },
    head(){
      return {
        link: [ { rel:'icon', href: icon }]
      }
    }
}
</script>

<style lang="scss" >
@import './../static/libs/theme';
@media screen and (min-width: $desktop_breakpoints) {
::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  background-color: #1b272f;
  border-radius: 5px;
  &-thumb{
    background-color:#1b272f;
    border-radius: 5px;
  } 
  &-track {
    background: #566169;
    }  
  }
}
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

body{
  -webkit-font-smoothing: antialiased;
  color: $color_text_base;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  display: flex;
  overflow-x: hidden;
  flex-wrap: nowrap;
  flex-direction: column;
  text-rendering: optimizeLegibility;
}   
main{
  width: 100vw;
  overflow-x: hidden;
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