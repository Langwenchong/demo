<template>
  <div id="demo01" class="demo">
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
  data() {
    return {
      name: `langwenchong`,
    };
  },
};
</script>

<style scoped>
</style>