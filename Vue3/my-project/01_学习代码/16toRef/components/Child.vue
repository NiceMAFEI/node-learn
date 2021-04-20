<template>
  <h2>Child子级组件</h2>
  <h3>age: {{ age }}</h3>
  <h3>length: {{ length }}</h3>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";
function UseGetLength(value: Ref) {
  return computed(() => {
    return value.value.toString().length;
  });
}
export default defineComponent({
  name: "Child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const length = UseGetLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>

<style></style>
