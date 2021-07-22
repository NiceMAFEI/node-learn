import { onBeforeUnmount, onMounted, ref } from "vue";
export default function() {
  const x = ref(0);
  const y = ref(0);
  //   点击事件回调
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  // 页面加载完毕，进行点击操作
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
