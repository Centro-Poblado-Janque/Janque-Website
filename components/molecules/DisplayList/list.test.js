import Displaylist from '@/components/molecules/DisplayList/Display.vue'

import { mount, shallowMount } from '@vue/test-utils'

const wrapper = null

beforeEach(() => {
    wrapper = shallowMount(Displaylist, {
        propsData: {
            list: [
                { data: 'example', text: 'mounted' },
                { data: 'example', text: 'mounted' },
            ],
            property: ['data', 'array'],
        },
    })
})

afterEach(() => {
    wrapper.destroy()
})

describe('Displaying List', () => {
    it('render the list', () => {
        const list = wrapper.findAll('li')
        expect(list.length).toBe(2)
    })
})
