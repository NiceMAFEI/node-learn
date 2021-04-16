// 引入axios
import axios from "axios";
// 引入ref
import { ref } from "vue";
// 发送ajax
export default function <T>(url: string) {
  // 加载状态
  const loading = ref(true);
  // 成功的数据
  const data = ref<T | null>(null);
  // 错误信息
  const errorMsg = ref("");
  // axios请求
  axios
    // get 请求
    .get(url)
    // 请求成功
    .then((res) => {
      // 改变加载状态
      loading.value = false;
      // 赋值数据
      data.value = res.data;
    })
    // 请求失败
    .catch((err) => {
      // 改变加载状态
      loading.value = false;
      // 错误提示
      errorMsg.value = err.message || "未知错误";
    });
  return {
    loading,
    data,
    errorMsg,
  };
}
