<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h2>欢迎光临</h2>
  <div>请选择一位服务</div>
  <div>
    <button v-for="(item,index) in man" :key="index"  @click="selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>你选择了【{{ selectMan }}】为你服务</div>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';


export default defineComponent({
  name: 'App',
  setup(){
    const man = ref(['天','地','人'])
    const selectMan = ref("")
    const selectGirlFun = (index: number)=>{
      selectMan.value = man.value[index]
    }

    return {
      man,
      selectMan,
      selectGirlFun
    }
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
