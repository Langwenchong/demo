<template>
  <div id="TestModel">
    <div class="container">
      <div id="header" class="animate__animated animate__flipInX">
        <div class="left">
          <i
            class="fas fa-cog fa-spin animated"
            style="font-size: 32px; color: #64ba93"
          ></i>
          <div class="menu">
            <div
              v-for="(option, i) in options"
              :key="i"
              :class="active == i ? 'active item' : 'item'"
              @click="pick(i)"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div class="right">
          <div class="active item">演示区</div>
        </div>
      </div>
      <div id="main">
        <div class="left animate__animated animate__fadeInRight">
          <code-editor :content="text"></code-editor>
        </div>
        <div class="right animate__animated animate__fadeInLeft">
          <!-- <transition mode="out-in">
            <router-view />
          </transition> -->
          <transition mode="out-in">
            <keep-alive>
              <component
                :is="comp"
                ref="demo"
                @updateScale="updateScale"
              ></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <div id="footer" class="animate__animated animate__flipInX">
        <div class="menu">
          <div
            v-for="(scale, j) in scales"
            :key="j"
            :class="choose == j ? 'active item' : 'item'"
            @click="transform(j)"
          >
            {{ scale }} ×
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import demo01 from "@/components/demo01";
import demo02 from "@/components/demo02";
import codeEditor from "@/components/codeEditor";
export default {
  name: "TestModel",
  components: {
    codeEditor,
    demo01,
    demo02,
  },
  data() {
    return {
      comp: `demo01`,
      text: `<!--demo01.vue(父容器) -->\n<template>\n <div id="demo01">\n <h2>你好！{{name}}先生😋！</h2>\n <comp-1 v-model="name"></comp-1>\n </div>\n</template>\n\n\n<js>\nimport comp1 from "@/components/comp1";\nexport default{\n components:{\n comp1,\n},\n name:"demo01",\n data(){\n return{\n name:'langwenchong',\n};\n},\n};\n</js>\n\n<style scoped>\n</style>\n\n<!--comp1.vue(子组件) -->\n<template>\n <div id="comp1">\n <b>您的名字是：</b><input\n placeholder="请输入内容"\n:value="value"\n class="input"\n @input="$emit('update:value',$event.target.value)"\n >\n </input>\n </div>\n</template>\n\n<js>\nexport default{\n name:"comp1",\n props:["value"],\n model:{\n prop:"value",\n event:"update:value",\n},\n};\n</js>\n\n<style scoped>\n.input{\n border-radius:4px;\n border:1px solid #dcdfe6;\n height:40px;\n background-color:#fff;\n background-image:none;\n box-sizing:border-box;\n line-height:40px;\n outline:none;\n padding:0 15px;\n}\n</style>\n`,
      options: ["父子组件传值", "兄弟组件传值"],
      active: 0,
      choose: 0,
      scales: [1, 0.75, 0.5, 0.25],
    };
  },
  methods: {
    pick(i) {
      this.active = i;
      if (i === 0) {
        this.comp = `demo01`;
        this.text = `<!--demo01.vue(父容器) -->\n<template>\n <div id="demo01">\n <h2>你好！{{name}}先生😋！</h2>\n <comp-1 v-model="name"></comp-1>\n </div>\n</template>\n\n\n<js>\nimport comp1 from "@/components/comp1";\nexport default{\n components:{\n comp1,\n},\n name:"demo01",\n data(){\n return{\n name:'langwenchong',\n};\n},\n};\n</js>\n\n<style scoped>\n</style>\n\n<!--comp1.vue(子组件) -->\n<template>\n <div id="comp1">\n <b>您的名字是：</b><input\n placeholder="请输入内容"\n:value="value"\n class="input"\n @input="$emit('update:value',$event.target.value)"\n >\n </input>\n </div>\n</template>\n\n<js>\nexport default{\n name:"comp1",\n props:["value"],\n model:{\n prop:"value",\n event:"update:value",\n},\n};\n</js>\n\n<style scoped>\n.input{\n border-radius:4px;\n border:1px solid #dcdfe6;\n height:40px;\n background-color:#fff;\n background-image:none;\n box-sizing:border-box;\n line-height:40px;\n outline:none;\n padding:0 15px;\n}\n</style>\n`;
      } else if (i === 1) {
        this.comp = `demo02`;
        this.text = `<!-- demo02.vue(父容器) -->\n<template>\n <div id="demo01">\n <h2>父容器的值：{{msg}}</h2>\n <comp-2 \n v-for="i in 2" \n:key="i" \n v-model="msg" \n:value="i"> </comp-2>\n </div>\n</template>\n\n\n<js>\nimport comp2 from "@/components/comp2";\nexport default{\n components:{\n comp2,\n},\n name:"demo02",\n data(){\n return{\n msg:'玛卡巴卡！',\n};\n},\n};\n</js>\n\n<style scoped>\n</style>\n\n<!-- comp2.vue(子元素) -->\n<template>\n <div id="comp2">\n <p style="font-weight:bold">\n 组件{{value}}的值：{{msg}}\n </p>\n <b>请输入值：</b>\n <input\n placeholder="请输入内容"\n:value="msg"\n class="input"\n @input="$emit('update:msg',$event.target.value)"\n >\n </input>\n </div>\n</template>\n\n<js>\nexport default{\n name:"comp2",\n props:["msg","value"],\n model:{\n prop:"msg",\n event:"update:msg",\n},\n};\n</js>\n<style scoped>\n.input{\n border-radius:4px;\n border:1px solid #dcdfe6;\n height:40px;\n background-color:#fff;\n background-image:none;\n box-sizing:border-box;\n line-height:40px;\n outline:none;\n padding:0 15px;\n}\n</style>\n`;
      }
    },
    updateScale(s) {
      this.choose = this.scales.indexOf(s);
    },
    transform(j) {
      this.choose = j;
      // this.$refs.demo.style.transform="scale(" + this.scales[j] + ")";
      // document.getElementById("demo01").style.transform =
      //   "scale(" + this.scales[j] + ")";
      // var demos = document.getElementsByClassName("demo");
      // demos[0].style.transform = "scale(" + this.scales[this.choose] + ")";
      // console.log(this.$refs.demo);
      this.$refs.demo.setScale(this.scales[this.choose]);
    },
  },
};
</script>

<style scoped>
#TestModel {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#TestModel .container {
  width: 80%;
  height: 80vh;
  border: 1px solid #c6c6c6;
}
#TestModel .container #header {
  width: 100%;
  height: 58px;
  background: #fdfdfd;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  display: flex;
}
#TestModel .container #header .left,
#TestModel .container #header .right {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  padding-left: 8px;
  /* background: pink; */
}
#TestModel .container .active {
  background: #d6d6d6 !important;
  box-shadow: inset 0px 3px #64ba93;
}
#TestModel .container #header .left .menu {
  height: 100%;
  display: flex;
  align-items: center;
}
#TestModel .container .item {
  transition: 0.5s;
  font-size: 13px;
  color: #000000;
  background-color: #ebebeb;
  padding: 10px 16px;
  margin-left: 8px;
}

#TestModel .container #main {
  justify-content: space-around;
  align-items: center;
  display: flex;
  width: 100%;
  height: calc(100% - 58px - 48px);
  background: 0% 0% / auto repeat rgb(171, 184, 195);
  /* background: yellow; */
}
#TestModel .container #main .left,
#TestModel .container #main .right {
  position: relative;
  width: 49%;
  height: 95%;
  box-sizing: border-box;
  /* background: yellow; */
}
#TestModel .container #main .right {
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 16px;
  overflow: auto;
  border: 1px solid #eee;
  border-radius: 8px;
}
#TestModel .container #footer {
  width: 100%;
  height: 48px;
  background: #fdfdfd;
  box-sizing: border-box;
  border-top: 1px solid #c6c6c6;
  box-shadow: 0 -1px 3px rgb(0 0 0 / 30%);
}
#TestModel .container #footer .menu {
  box-sizing: border-box;
  padding-left: 50%;
  height: 100%;
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
}
#TestModel .container #footer .menu .item {
  border-radius: 4px;
}
.v-leave-to,
.v-enter {
  opacity: 0;
  transform: translateY(5px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>