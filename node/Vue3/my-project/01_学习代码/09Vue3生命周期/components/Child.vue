<template>
  <h2>Child子级组件</h2>
  <h2>{{ msg }}</h2>
  <button @click="update">update</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "Child",
  // Vue2.x中的生命周期钩子
  beforeCreate() {
    console.log("2.x beforeCreate");
  },
  created() {
    console.log("2.x created");
  },
  beforeMount() {
    console.log("2.x beforeMount");
  },
  mounted() {
    console.log("2.x mounted");
  },
  beforeUpdate() {
    console.log("2.x beforeUpdate");
  },
  updated() {
    console.log("2.x updated");
  },
  beforeUnmount() {
    console.log("2.x beforeDestroy");
  },
  unmounted() {
    console.log("2.x destroyed");
  },
  setup() {
    onBeforeMount(() => {
      console.log("3.0 onBeforeMount");
    });
    onMounted(() => {
      console.log("3.0 onMounted");
    });
    onBeforeUpdate(() => {
      console.log("3.0 beforeUpdate");
    });
    onUpdated(() => {
      console.log("3.0 onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("3.0 onBeforeUnmount");
    });
    onUnmounted(() => {
        console.log("3,0 onUnmounted");
        
    })
    const msg = ref("adb");
    const update = () => {
      msg.value += "==";
    };
    return {
      msg,
      update,
    };
  },
});
</script>

<style></style>
