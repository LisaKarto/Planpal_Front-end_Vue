import { shallowMount } from '@vue/test-utils'
import ListViewAllComponent from '@/components/Lists/ListViewAllComponent.vue'
import { getlistsFromUser } from '@/services/lists/listService'


describe('getlistsFromUser', () => {
  it('get lists from user2', () => {
    // trigger an event when the 'Clear Weather Data' button is clicked
    wrapper.findAll('b-button').at(0).trigger('click')

    // check that 1 occurrence of the event has been emitted
    expect(wrapper.emitted('clear-weather-data')).toBeTruthy()
    expect(wrapper.emitted('clear-weather-data').length).toBe(1)
  })
})


