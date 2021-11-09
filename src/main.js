// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//animate.css
import 'animate.css';

//elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//axios
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

//moack.js
import Mock from 'mockjs'


Mock.mock('/loginValidation/', 'post',
  req => {
    const {
      username,
      password
    } = JSON.parse(req.body);
    console.log(username, password);
    if (username === "admin" && password === "123456") {
      return {
        status: 0,
      }
    } else {
      return {
        status: 1,
      }
    }
  }
)

Mock.mock('/registerValidation/', 'post',
  req => {
    const {
      username,
      password,
      type
    } = JSON.parse(req.body);
    console.log(username, password, type);
    if (username === "admin" && password === "123456" && type === "student") {
      return {
        status: 1,
      }
    } else {
      return {
        status: 0,
      }
    }
  }
)
