import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter)
  })
})
