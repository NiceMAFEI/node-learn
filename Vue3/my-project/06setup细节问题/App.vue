<template>
  <h2>App父级组件</h2>
  <h2>{{ msg }}</h2>
  <button @click="msg += '==='">更新</button>
  <h2>{{ count }}</h2>
  <Child :msg="msg"/>
</template>

<script lang="ts">
import Child from "./components/Child.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  components: {
    Child,
  },
  setup() {
    const showMsg2 = () => {
      console.log('App中setup的showMsg2方法');
      
    }
    const msg = ref('你好啊！')
    return {
      msg,
      showMsg2
    }
  },
  data() {
    return {
      count: 10
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    showMsg1() {
      console.log('App中methods的showMsg1方法');
    }
  }
});
</script>

<style></style>
