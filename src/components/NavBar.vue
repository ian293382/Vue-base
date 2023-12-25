<template>

<div class="main_intro" id="nav_bar">
    <div class="nav_bar">
        <a href="/">
            <img class="logo" src="../assets/logo_icon.png" alt="">
        </a>
       
        <div class="button_group">
        <div class="btn">了解計畫</div>
        <div class="btn">參與辦法</div>

        <div v-if="is_login" class="btn" @click="logout()">
            登出
        </div>

        <div v-else class="btn" @click="login()">
            <router-link to="LogIn">登入</router-link>
        </div>
        </div>
    </div>
</div>

  </template>

<script>
export default {
  name: 'NavBar',
};
</script>

  
  <style scoped lang="scss">
  .main_intro {
    position: relative;
    width: 100%; /* 修正拼寫錯誤 */
    height: 100vh;
    background: #f2f2f2;
    .nav_bar {
      height: 5rem;
      text-align: left;
      .logo {
        width: 5rem;
        height: 70px;
        margin: 30px 50px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .button_group {
        display: inline-block;
        position: absolute;
        right: 30px;
        top: 30px;
        .btn {
          display: inline-block;
          margin: 0 15px;
        //   background: blue;
          font-size: 18px;
        }
      }
    }

  }


  </style>