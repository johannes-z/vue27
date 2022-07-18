import { h, ref, defineComponent } from "vue";

export const ChildComponent = defineComponent({
  render () {
    return h('div', this.$scopedSlots.test({}))
  }
})