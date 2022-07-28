<template>
  <div>
    <div>{{ label }}</div>
    <div><slot name="rootSlot" :value="label" /></div>
    <div><slot name="customSlot" :value="label" /></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup (props, { slots }) {
    console.log(slots);
    const label = ref('test')
    return {
      label
    }
  }
})
</script>