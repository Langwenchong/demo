<template>
  <div id="demo01" ref="demo01">
    <h2>你好！{{ name }}先生😋！</h2>
    <comp-1 v-model="name"></comp-1>
  </div>
</template>


<script>
import comp1 from "@/components/comp1";
export default {
  components: {
    comp1,
  },
  name: "demo01",
  activated() {
    this.$emit("updateScale", this.scale);
  },
  data() {
    return {
      name: `langwenchong`,
      scale: 1,
    };
  },
  methods: {
    setScale(s) {
      this.$refs.demo01.style.transform = `scale(${s})`;
      this.scale = s;
    },
  },
};
</script>

<style scoped>
</style>