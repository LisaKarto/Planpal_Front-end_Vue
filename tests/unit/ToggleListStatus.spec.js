import { shallowMount, mount } from '@vue/test-utils'
import ListManageComponent from '@/components/Lists/ListManageComponent'
import NewListFormModal from '@/components/Lists/modal/NewListFormModal'

describe('ListManageComponent', () => {

  // test 1

  // wrap component
  // check if toggle button exists in component

  const list = {
    idList: 1,
    listName: "MyTestList",
    listType: "Todo-list",
    isDone: 1,
    uid: "myUID"
  }

  it('correct list prop gets rendered', () => {

    const wrapper = shallowMount(ListManageComponent, {
      mocks: {
        $route: {
          params: {
            idList: list.idList
          }
        }
      }
    })

    const button = wrapper.get('[data-test="status-btn"]')
    expect(button.exists()).toBe(true);
  })


  // test 2
  // send list prop to component
  // see if component renders correct list prop


  // it('correct list prop gets rendered', () => {

  //   const wrapper = shallowMount(ListManageComponent, {
  //     mocks: {
  //       $route: {
  //         params: {
  //           idList: list.idList
  //         }
  //       }
  //     },
  //     propsData: {
  //       res: [{
  //         idList: 1,
  //         listName: "MyTestList",
  //         listType: "Todo-list",
  //         isDone: 1,
  //         uid: "myUID"
  //       }]
  //     }
  //   })

  //   expect(wrapper.html()).toContain("hwehhjjhwdhjh");
  // })



  // it('correct list prop gets rendered', () => {

  //   const wrapper = shallowMount(ListManageComponent, {
  //     mocks: {
  //       $route: {
  //         params: {
  //           idList: list.idList
  //         }
  //       }
  //     },
  //     propsData: {
  //       res: [list]
  //     }
  //   })

  //   expect(wrapper.html()).toContain("hwehhjjhwdhjh");
  // })




  // test 3

  //wrap component
  // give component list prop with an undone status
  // check if button status matches prop status

  //   it('flips list status', () => {
  //     const wrapper = mount(ListManageComponent);
  //     const statusBtn = wrapper.get('[data-test="status-btn"]');
  //     expect(statusBtn.text()).toBe("✔");
  //   })
})



