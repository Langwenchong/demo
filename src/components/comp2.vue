<template>
  <div id="comp2">
    <p style="font-weight:bold">组件{{value}}的值：{{msg}}</p>
   <b>请输入值：</b>
   <input
      placeholder="请输入内容"
      :value="msg"
      class="input"
      @input="$emit('update:msg', $event.target.value)"
    >
    </input>
  </div>
</template>

<script>
export default {
  name: "comp2",
  props: ["msg", "value"],
  model: {
    prop: "msg",
    event: "update:msg",
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