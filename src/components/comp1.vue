<template>
  <div id="comp1">
   <b>请输入值：</b><input
      placeholder="请输入内容"
      :value="value"
      class="input"
      @input="$emit('update:value', $event.target.value)"
    >
    </input>
  </div>
</template>

<script>
export default {
  name: "comp1",
  props: ["value"],
  model: {
    prop: "value",
    event: "update:value",
  },
};
</script>

<style scoped>
.input {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 40px;
  background-color: #fff;
  background-image: none;
  box-sizing: border-box;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
}
</style>