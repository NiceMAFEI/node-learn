<template>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" ref="inputRef">
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'App',
  setup() {
  const inputRef = ref<HTMLElement | null>(null)
    return {
      inputRef
    }
  }
})
</script>

<style>

</style>