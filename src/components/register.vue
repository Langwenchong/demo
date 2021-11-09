<template>
  <div id="register">
    <div class="header">
      <span>注册</span>
      <router-link :to="{ name: 'login' }" class="link"
        >已有账号！现在登录</router-link
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
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号类型">
          <el-select
            class="select"
            v-model="value"
            placeholder="请选择注册账号类型"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "register",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (value.length < 6) {
          callback(new Error("密码长度至少为6位"));
        }
        if (value != "" && value.length >= 6) {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
      options: [
        {
          value: "student",
          label: "学生",
        },
        {
          value: "teacher",
          label: "教师",
        },
      ],
      value: "student",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var username = this.ruleForm.username;
          var password = this.ruleForm.pass;
          var type = this.value;
          let data = {
            username: username,
            password: password,
            type: type,
          };
          const url = `/registerValidation/`;
          this.axios.post(url, data).then((res) => {
            if (res.data.status === 0) {
              this.$notify({
                title: "注册成功✔️",
                message: "您的账号已经创建成功，赶快登录吧！",
              });
            } else {
              this.$notify.error({
                title: "注册失败❌",
                message: "可恶~账号已经被别人抢先注册过了！",
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
#register {
  width: 100%;
  height: 100%;
  /* background: red; */
  padding: 64px 70px 48px;
  box-sizing: border-box;
  overflow: hidden;
}
#register .header {
  width: 100%;
  height: 40px;
  /* background:teal; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
#register .header span:first-child {
  font-size: 1.514rem;
  color: #40485b;
  font-weight: bold;
}
#register .header .link {
  color: #40485b;
  transition: 0.5s;
  font-size: 14px;
  text-decoration: none;
}
#register .header .link:hover {
  color: #ff7675;
}
.form-control {
  padding: 10px;
}
#register .wrapper .select {
  width: 100%;
  margin-bottom: 30px;
}
</style>