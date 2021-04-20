<template>
  <h2>reactive和ref的细节问题</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m1:{{ m2 }}</h3>
  <h3>m1:{{ m3 }}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  // 组件名
  name: "App",
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    // ref是否可以传入对象
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    /**
     * 如果ref中放入了一个对象，那么他的value就会被转化为Proxy对象
     * ref操作，在js中需要.value; html模板中不需要，因为内部解析会自动处理
     */
    const update = () => {
      console.log(m3);

      m1.value += "===";
      m2.wife.name += "===";
      m3.value.wife.name += "===";
      console.log(m3.value.wife);
      
    };
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>

<style></style>
