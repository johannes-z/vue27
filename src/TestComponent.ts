import { inject } from "vue";
import { provide } from "vue";
import { onBeforeMount } from "vue";
import { h, ref, defineComponent } from "vue";
import { ChildComponent } from "./ChildComponent";
import { INJECT_KEY } from "./symbols";

function getSlots () {
  const value = inject(INJECT_KEY) as string
  return {
    test: () => h('div', value)
  }
}

export const TestComponent = defineComponent({
  setup () {
    provide(INJECT_KEY, 'injected value')
  },

  render () {
    return h(ChildComponent, {
      scopedSlots: getSlots()
    })
  }
})