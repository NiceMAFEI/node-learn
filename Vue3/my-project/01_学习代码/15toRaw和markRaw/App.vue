<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr />
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "hahah",
      age: 20,
    });
    const testToRaw = () => {
      console.log("hahah");
      // 把代理对象变成了普通对象
      const user = toRaw(state);
      user.name += "===";
    };
    const testMarkRaw = () => {
      // state.likes = ['吃', '喝']
      // state.likes[0] += '=='
      const likes = ["吃", "喝"];
      // markRaw 标记的对象数据，从此以后不能再称为代理对象了
      state.likes = markRaw(likes);
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += "==";
          console.log('定时器');
          
        }
      }, 1000);
      console.log("xixixiix");
    };
    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>

<style></style>
