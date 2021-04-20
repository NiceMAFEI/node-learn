<template>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" ref="inputRef">
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: 'App',
  // 需求：
  // 当页面加载完毕后，页面中的文本框可以自动获取焦点
  setup() {
    // 默认为空，页面加载完毕，说明组件已经存在，获取文本框元素
  const inputRef = ref<HTMLElement | null>(null)
  onMounted(() => {
    inputRef.value && inputRef.value.focus()
  })
    return {
      inputRef
    }
  }
})
</script>

<style>

</style>