<template>
  <h2>App父级组件</h2>
  <h2>{{ msg }}</h2>
  <button @click="msg += '==='">更新</button>
  <h2>{{ count }}</h2>
  <Child :msg="msg" msg2="真相" @xxx="xxx"/>
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

    function xxx(txt: string) {
      msg.value += txt
    }
    return {
      msg,
      showMsg2,
      xxx
    }
  },
});
</script>

<style></style>
