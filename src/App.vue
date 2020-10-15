<template>
  <!-- <div>
    <h3>您选择了{{data.selectGirl}}小姐姐</h3>
    <button
      v-for="(item,index) in data.girls"
      :key="index"
      @click="data.selectGirlFun(index)"
    >{{index}}:{{item}}</button>
  </div>-->
  <div>
    <h3>您选择了{{selectGirl}}小姐姐</h3>
    <button
      v-for="(item,index) in girls"
      :key="index"
      @click="selectGirlFun(index)"
    >{{index}}:{{item}}</button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // const girls = ref(["大脚", "刘英", "小红"]);
    // const selectGirl = ref("");
    // const selectGirlFun = (index: number) => {
    //   selectGirl.value = girls.value[index];
    // };
    // return {
    //   girls,
    //   selectGirl,
    //   selectGirlFun
    // };
    // 用reactive来优化上面代码

    interface DataProps {
      girls: string[];
      selectGirl: string;
      selectGirlFun: (index: number) => void;
    }

    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "小红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      }
    });
    // return {
    //   data
    // };

    //解决template要多写data的问题
    const refData = toRefs(data);
    console.log("最先执行setup生命周期");

    // 演示生命周期案例
    onBeforeMount(() => {
      console.log("onBeforeMount生命周期");
    });
    onMounted(() => {
      console.log("onMounted生命周期");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate生命周期");
    });
    onUpdated(() => {
      console.log("onUpdated生命周期");
    });

    return {
      ...refData
    };
  },
  // 以前的生命周期
  mounted() {
    console.log("旧的mounted生命周期");
  },
  updated() {
    console.log("旧的updated生命周期");
  }
});
</script>
