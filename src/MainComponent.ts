import { inject } from "vue";
import { provide } from "vue";
import { onBeforeMount } from "vue";
import { h, ref, defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  render () {
    console.log(this.$scopedSlots);
    return h(ChildComponent, {
      scopedSlots: {
        ...this.$scopedSlots,
        customSlot: () => h('b', 'Slot From MainComponent')
      }
    })
  }
})