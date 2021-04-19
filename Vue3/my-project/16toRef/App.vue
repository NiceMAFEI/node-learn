<template>
  <h2>toRef的使用及其特点</h2>
  <h3>state: {{ state }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>money: {{ money }}</h3>
  <hr />
  <button @click="update">更新数据</button>
  <child :age="age"></child>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 10,
    });
    const age = toRef(state, "age");
    const money = ref(state.money);
    console.log(age);
    console.log(money);

    const update = () => {
      console.log("hahah");
      // state.age += 2
      age.value += 2;
      money.value += 10;
    };
    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>

<style></style>
