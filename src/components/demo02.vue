<template>
  <div id="demo02" class="demo">
    <h2>父容器的值：{{ msg }}</h2>
    <comp-2 v-for="i in 2" :key="i" v-model="msg" :value="i"> </comp-2>
  </div>
</template>


<script>
import comp2 from "@/components/comp2";
export default {
  components: {
    comp2,
  },
  name: "demo02",
  data() {
    return {
      msg: `玛卡巴卡！`,
    };
  },
};
</script>

<style scoped>
</style>