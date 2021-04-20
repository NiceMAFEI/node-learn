<template>
  <h2>App父级组件：Suspense组件的使用</h2>
  <suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <async-component></async-component> -->
      <async-address></async-address>
    </template>
    <template v-slot:fallback>
        <!-- loading内容 -->
        <h2>loading......</h2>
    </template>
  </suspense>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";
// 引入组件: 静态引入

// Vue2 动态映入: 在vue3中该写法不行
// const AsyncComponent = () => import('./AsyncCompoent')
// Vue3： 动态引入
// const AsyncComponent = defineAsyncComponent(() => import("./AsyncCompoent"));
// 静态引入
// import AsyncComponent from './AsyncCompoent.vue'

import AsyncAddress from './AsyncAddress.vue'
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
