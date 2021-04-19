<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state: {{ state }}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>

<script>
import { defineComponent, readonly, reactive, shallowReadonly } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'haha',
      age: 20,
      cars: {
        name: 'benz',
        color: 'black'
      }
    })
    // 只读属性 ----> 深度只读
    // const state2 = readonly(state)
    // shallowReadonly -----> 浅只读
    const state2 = shallowReadonly(state)
    const update = () => {
      state2.cars.name += '=='
      console.log('hahha');
    }
    return {
      state,
      update,
      state2
    }
  }
});
</script>

<style></style>
