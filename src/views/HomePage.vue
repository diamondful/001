<template>
  <div>
    <div id="logo">学生登录平台</div>
    <div id="login">
      <el-card class="box-card">
        <div id="form">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          <el-button @click="ComponentLogin" type="success" round>登录</el-button>
          <el-button @click="RegisterPage" type="info" round>注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
/*import IndexPage from "/src/views/IndexPage.vue";*/
export default {
  name: 'HomePage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ComponentLogin() {
      // 在这里进行用户名和密码的验证逻辑
      if (this.username === '123' && this.password === '123') {
        this.$router.push('/IndexPage');
        /*   window.location.href ='/src/views/IndexPage.vue';*/
      } else {
        alert('用户名或密码不正确');
      }
    },
    RegisterPage(){
      this.$router.push('/RegisterPage');
    }
  }
}
</script>

<style>
#login {
  position: absolute;
  top: 30%;
  left: 38%
}

.el-card {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
}

#form {
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
