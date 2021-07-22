<template>
  <h2>App父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <hr>
  <Child v-if="isShow"/>
</template>

<script lang="ts">
import Child from './components/Child.vue'
import { defineComponent, ref } from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  components: {
    Child
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    };
  },
});
</script>

<style></style>
