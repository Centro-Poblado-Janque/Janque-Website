import Vue from 'vue'

import Container from './vue/Container.vue'
import MainContent from '@/components/layout/MainContent.vue'
import SocialMedia from '@/components/utils/SocialMedia.vue'
import ViewUI from './vue/View.vue'
import ViewText from './vue/Text.vue'
import NavLink from './vue/Link.vue'

Vue.component('Container', Container);

Vue.component('SocialMediaSEO', SocialMedia);

Vue.component('MainContent', MainContent);

Vue.component('ViewBox', ViewUI);
Vue.component('ViewText', ViewText);

Vue.component('NextLink', NavLink)