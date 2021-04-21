import Vue from 'vue'

import Container from './vue/Container.vue'
import MainContent from '@/components/global/vue/MainContent.vue'
import SocialMedia from '@/components/utils/SocialMedia.vue'
import ViewUI from './vue/View.vue'
import NavLink from '@/components/atoms/Link/link-with-icon.vue'
import Item from '@/components/atoms/Item/Item.vue'

Vue.component('Container', Container);

Vue.component('SocialMediaSEO', SocialMedia);

Vue.component('MainContent', MainContent);

Vue.component('ViewBox', ViewUI);

Vue.component('NextLink', NavLink)

Vue.component('Item', Item)
