<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{ state.name }}</h3>
  <h3>age: {{ state.age }}</h3> -->
  <hr />
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>name1: {{ name1 }}</h3>
  <h3>age1: {{ age1 }}</h3>
</template>

<script lang="ts">
/**
 * toRefs 
 *  - 把一个响应式对象转换成普通的对象， 该普通对象的每个property 都是一个ref
 *  - 应用：
 *      当从合成函数返回响应式对象时，torefs非常有用，
 *      这样消费组件就可以在不丢失响应式的情况下
 *      对返回的对象进行对象分解使用
 *  - 问题：reactive对象取出的所有属性值都是非响应式的
 *  - 解决：利用toRefs可以将一个响应式 reactive 对象的所有原始属性转换为响应式的ref
 */
import { defineComponent, reactive, toRefs } from "vue";
function useFX() {
  const user = {
    name1: '123321',
    age1: 123
  }
  return {
    ...toRefs(user)
  }
}
export default defineComponent({
  // 组件名
  name: "App",
  setup() {
    const state = reactive({
      name: "hhaha",
      age: 90,
    });
    /**
     * toRefs可以把一个响应式对象，转成普通对象，该普通对象的每一个 property都是一个ref
     */
    // const state2 = toRefs(state)

    const { name, age } = toRefs(state)

    const { name1, age1 } = useFX()
    // 定时器
    setInterval(() => {
      // state2.name.value += "==";
      name.value +='=='
    }, 2000);
    return {
      // state
      // { name: 'hhaha', age: 90 }
      // ...state,
      // ...state2
      name,
      age,
      name1,
      age1
    };
  },
});
</script>

<style></style>
