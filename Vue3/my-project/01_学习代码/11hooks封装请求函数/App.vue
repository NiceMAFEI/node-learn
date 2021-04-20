<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{ x }}, y: {{ y }}</h2>
  <h3 v-if="loading">正在加载中</h3>
  <h3 v-else-if="errorMsg">错误信息： {{ errorMsg }}</h3>
  <ul v-else>
    <li>id: {{ data.id }}</li>
    <li>address: {{ data.address }}</li>
    <li>distance: {{ data.distance }}</li>
  </ul>
  <hr />
  <ul v-for="(item, index) in data" :key="index">
    <li>id: {{ item.id }}</li>
    <li>title: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import userMousePostion from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
interface IAddressData {
  id: number;
  address: string;
  distance: string;
}
interface IProductsData {
  id: string;
  title: string;
  price: number;
}
export default defineComponent({
  // 组件名
  name: "App",
  // 发送用户点击为值的横纵坐标
  setup() {
    const { x, y } = userMousePostion();
    // 发送请求
    // const { loading, data, errorMsg } = useRequest<IAddressData>("/data/address.json");
    const { loading, data, errorMsg } = useRequest<IProductsData[]>(
      "/data/products.json"
    );
    // 监听
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>

<style></style>
