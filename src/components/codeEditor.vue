<template>
  <div id="codeEditor">
    <div class="codeEditBox">
      <editor
        v-model="code"
        @init="editorInit"
        @input="codeChange"
        lang="c_cpp"
        :options="editorOptions"
        theme="dracula"
      ></editor>
    </div>
  </div>
</template>

<script>
import Editor from "vue2-ace-editor";
export default {
  name: "codeEditor",
  components: {
    Editor,
  },
  props: {
    content: String,
  },
  watch: {
    content(n, o) {
      this.code = n;
    },
  },
  data() {
    return {
      code: this.content,
      // 双向绑定的编辑器内容值属性
      editorOptions: {
        // 设置代码编辑器的样式
        enableBasicAutocompletion: true, //启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, //启用实时自动完成
        tabSize: 2, //标签大小
        fontSize: 14, //设置字号
        showPrintMargin: false, //去除编辑器里的竖线
      },
    };
  },
  methods: {
    // 编辑内容改变时触发
    codeChange(val) {
      val;
      console.log(val);
      // alert(val);
      //   this.$emit("updateCode", val);
    },
    editorInit() {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/theme/dracula");
      require("brace/mode/c_cpp");
      require("brace/mode/html");
      require("brace/mode/css");
      require("brace/mode/javascript");
      // require("brace/snippets/c_cpp");
      require("brace/snippets/html");
      require("brace/snippets/javascript");
      require("brace/mode/css");
      require("brace/snippets/css")
    },
  },
};
</script>

<style scoped>
#codeEditor {
  width: 100%;
  /* background: pink; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100%;
}
.codeEditBox {
  width: 95%;
  max-width: 1062px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px;
}
</style>