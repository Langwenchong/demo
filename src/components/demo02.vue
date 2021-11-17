<template>
  <div id="demo02" ref="demo02">
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
  activated() {
    this.$emit("updateScale", this.scale);
  },
  name: "demo02",
  data() {
    return {
      scale: 1,
      msg: `玛卡巴卡！`,
    };
  },
  methods: {
    setScale(s) {
      this.$refs.demo02.style.transform = `scale(${s})`;
      this.scale = s;
    },
  },
};
</script>

<style scoped>
</style>