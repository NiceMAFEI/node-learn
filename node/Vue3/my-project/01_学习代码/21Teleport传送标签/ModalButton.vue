<template>
  <button @click="ModalOpen = true">打开一个对话框</button>
  <Teleport to='body'>
    <div v-if="ModalOpen">
      <div>
        这是对话框 <button @click="ModalOpen = false">关闭对话框</button>
      </div>
    </div></Teleport
  >
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModalButton",
  setup() {
    // 控制对话框，显示或者隐藏
    const ModalOpen = ref(false);
    return {
      ModalOpen,
    };
  },
});
</script>

<style></style>
