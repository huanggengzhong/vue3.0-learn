<template>
  <div class="app-box">
    <img src="./assets/logo.png" />
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
    <button
      v-for="(item,index) in girls"
      :key="index"
      @click="selectGirlFun(index)"
    >{{index}}:{{item}}</button>
    <div v-if="selectGirl">你选择了{{selectGirl}}为您服务</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["大脚", "刘英", "小红"]); //用ref包裹一下
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    return {
      girls,
      selectGirl,
      selectGirlFun
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
