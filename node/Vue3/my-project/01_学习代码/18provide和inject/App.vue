<template>
  <h2>provide和inject</h2>
  <p>当前的颜色: {{ color }}</p>
  <hr />
  <button @click="color = 'red'">红色</button>
  <button @click="color = 'yellow'">黄色</button>
  <button @click="color = 'green'">绿色</button>
  <hr />
  <son></son>
</template>

<script lang="ts">
/**
 * provide  inject
 * 注入依赖
 * 实现跨层级
 */
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  components: { Son },
  name: "App",
  setup() {
    // 响应式的数据
    const color = ref("red");
    // 提供一个数据
    provide("color", color);
    return {
      color,
    };
  },
});
</script>

<style></style>
