import Vue from 'vue'
import MainContent from '@/components/global/vue/MainContent.vue'
import SocialMedia from '@/components/utils/SocialMedia.vue'

Vue.component('SocialMediaSEO', SocialMedia)
Vue.component('MainContent', MainContent)
Vue.component('NextLink', () => import('@/components/atoms/Link/link-with-icon.vue'))
Vue.component('Item', () => import('@/components/atoms/Item/Item.vue'))
Vue.component('Title', () => import('@/components/atoms/Title/Title.vue'))
