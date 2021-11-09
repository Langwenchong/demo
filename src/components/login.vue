<template>
  <div id="login">
    <div class="header">
      <span>登录</span>
      <router-link :to="{ name: 'register' }" class="link"
        >没有帐号？ 点此注册</router-link
      >
    </div>
    <div class="wrapper">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入用户姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入账号密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="success" id="visitor">游客登录</el-button>
        </el-form-item>
      </el-form>
      <router-link :to="{ name: 'forget' }" class="link" id="forget"
        >已有帐号，忘记密码？</router-link
      >
      <div class="innerBox-bg">
        <img src="../../static/images/tju.png" />
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          var username = this.ruleForm.username;
          var password = this.ruleForm.pass;
          let data = {
            username: username,
            password: password,
          };
          const url = `/loginValidation/`;
          this.axios.post(url, data).then((res) => {
            if (res.data.status === 0) {
              var date = new Date();
              var s = "日一二三四五六";
              const h = this.$createElement;
              this.$notify({
                title: "登陆成功✔️",
                message: h(
                  "b",
                  { style: "color: #333" },
                  "您好！" +
                    username +
                    "，欢迎登陆Mathless云平台，现在是北京时间" +
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    " 星期" +
                    s[date.getDay()] +
                    "。"
                ),
              });
            } else {
              this.$notify.error({
                title: "登陆失败❌",
                message: "登陆失败，请检查账号是否存在或者密码是否正确！",
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
#login {
  width: 100%;
  height: 100%;
  /* background: red; */
  padding: 64px 70px 48px;
  box-sizing: border-box;
  overflow: hidden;
}
#login .header {
  width: 100%;
  height: 40px;
  /* background:teal; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
#login .header span:first-child {
  font-size: 1.514rem;
  color: #40485b;
  font-weight: bold;
}
#login .link {
  color: #40485b;
  transition: 0.5s;
  font-size: 14px;
  text-decoration: none;
}
#login .link:hover {
  color: #ff7675;
}
#login .wrapper #forget {
  color: #40485b;
  transition: 0.5s;
  font-size: 14px;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
#login .wrapper #forget:hover {
  color: #ff7675;
}
#login .innerBox-bg {
  width: 100%;
  overflow: hidden;
}
#login .innerBox-bg img {
  width: 100%;
  opacity: 0.7;
  /* transform: translateY(-30px); */
}
</style>