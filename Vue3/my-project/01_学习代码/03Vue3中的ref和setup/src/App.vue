<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="upDataCount"></button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  // setup是组合Api的入口函数
  setup() {
    // 变量, 基本数据类型使用ref定义
    const count = ref(0)
    
    // 方法
    function upDataCount() {
      console.log("=-=-==-");
      // 基本数据对象需要.value来操作值
      count.value++;
    }
    return {
      count,
      upDataCount,
    };
  },
});
</script>

<style></style>
