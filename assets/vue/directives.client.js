import Vue from 'vue'
import frag from 'vue-frag'

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f, { passive: true })
    },
})

Vue.directive('resize', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('resize', f)
            }
        }
        window.addEventListener('resize', f)
    },
})

/**
 * @temporally
 * @Vue {directive: frag}
 *  Move this script when upgrading to Nuxt3 and remove the root nodes of each component that uses them
 *  Delete this dependencie when upgrading to Nuxt3
 */

Vue.directive('frag', frag)
