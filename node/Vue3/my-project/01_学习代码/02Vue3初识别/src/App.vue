<template>
  <div>哈哈哈哈</div>
  <!-- <h1>{{ num }}</h1> -->
</template>

<script lang="ts">
// 这里可以使用ts代码
// defineComponent函数，目的是定义一个组件，可以传入一个配置对象
import { defineComponent } from "vue";

// 暴露出去一个定义好的组件
export default defineComponent({
  // 组件名
  name: "App",
  // 测试代码
  // setup() {
  //   const num = 10
  //   return {
  //     num,
  //   };
  // },
});
</script>

<style></style>
