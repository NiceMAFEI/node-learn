<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{ x }}, y: {{ y }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userMousePostion from './hooks/useMousePosition'
export default defineComponent({
  // 组件名
  name: "App",
  // 发送用户点击为值的横纵坐标
  setup() {
    const { x, y } = userMousePostion()
    return {
      x,
      y
    };
  },
});
</script>

<style></style>
