import { inject } from "vue";
import { provide } from "vue";
import { onBeforeMount } from "vue";
import { h, ref, defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  setup (props, { slots }) {
    console.log({ slots });
    return () => h(ChildComponent, {
      scopedSlots: {
        ...slots,
        customSlot: () => h('b', 'scopedSlot from MainComponent')
      }
    })
  }
})