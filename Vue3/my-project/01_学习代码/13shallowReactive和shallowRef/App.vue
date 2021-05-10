<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  shallowReactive,
  shallowRef,
  ref,
} from "vue";

export default defineComponent({
  /**
   * shallowReactiv: 只处理了对象内最外层属性的响应式(浅响应式)
   * shallowRef: 只处理了value的响应式，不进行对象的reactive处理
   * 时机：
   *  - 一般情况下使用  ref 和 reactive
   *  - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shallowReactive
   *  - 如果有一个对象数据，后面会产生新的对来替换 ===> shallowRef
   */
  name: "App",
  setup() {
    const update = () => {
      // 更改m1 -----reactive
      // m1.name +='=='
      // m1.cars.name +='=='
      // 更改m2 -----shallowReactive
      // m2.cars.name += '=='
      // 更改m3 -----ref
      // m3.value.name += '==='
      // m3.value.cars.name += '==='
      // 更改m4 -----shallowRef
      // m4.value.name += '=='
      console.log(m3, m4);
    }
    // 深度劫持
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      cars: {
        name: "benz",
        color: "rwd",
      },
    });
    // shallowReactive ----> 浅监视
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      cars: {
        name: "benz",
        color: "rwd",
      },
    });
    // 深度劫持 ----> 做了reacitve处理
    const m3 = ref({
      name: "鸣人",
      age: 20,
      cars: {
        name: "benz",
        color: "rwd",
      },
    });
    // 浅劫持 
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      cars: {
        name: "benz",
        color: "rwd",
      },
    });
    return {
      m1,
      m2,
      m3,
      m4,
      update
    };
  },
});
</script>

<style></style>
