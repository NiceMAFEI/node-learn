<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script lang="ts">
import { customRef, defineComponent, ref } from "vue";
/**
 * hook防抖函数
 * @param { T } value
 * @param { Number }delay, 防抖时间
 */
function useDebouncedRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      // 返回数据
      get() {
        // 告诉vue追踪数据
        track();
        return value;
      },
      // 设置数据
      set(newValue: T) {
        // 清理定时器
        clearTimeout(timeOutId);
        // 定时器
        timeOutId = setTimeout(() => {
          value = newValue;
          // 告诉vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    // const keyWord = ref('abc')
    const keyWord = useDebouncedRef("abc", 500);
    return {
      keyWord,
    };
  },
});
</script>

<style></style>
