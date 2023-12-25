<template>
    <div class="home">
      <div class="main_intro">
        <div class="nav_bar">
          <img class="logo" src="../assets/logo_icon.png" alt="">
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
        <div class="lobby_img">
          <img class="lobby" src="../assets/lobby.JPG" alt="Lobby">
          <input type="button" name="" value="Click me" v-on:click="show(2)">
        </div>
        <div class="brand_spec">
          <div class="title">
            <h1>品牌特色</h1>
          </div>
          <div class="spec_group">
            <div class="spec">
              <div class="circle_img">
                <img src="../assets/Product_1.JPG" alt="">
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div class="spec">
              <div class="circle_img">
                <img src="../assets/Product_2.JPG" alt="">
              </div>
              <div class="text">
                s sunt debitis sit reprehenderit fugit quas sapiente
              </div>
            </div>
            <div class="spec">
              <div class="circle_img">
                <img src="../assets/Product_3.JPG" alt="">
              </div>
              <div class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus alias sunt debitis sit reprehenderit fugit quas sapiente
                consectetur, adipisicing elit. Doloribus alias sunt debitis sit reprehenderit fugit quas sapiente
              </div>
            </div>
          </div>
          <div class="know_more">
            瞭解更多 >
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      is_login: false
    };
  },
  methods: {
    login() {
      this.is_login = true;
     
    },
    logout(){
        this.is_login = false;
    },

    show(string) {
      alert(string);
    }
  }
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
  
    .lobby_img {
      margin: 0 auto;
      display: block;
      width: 40rem;
      height: 36rem;
      .lobby {
        margin: 40px;
        width: 100%; /* 添加寬度設置 */
        height: 75%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;

        
      }
    }
  }

  .brand_spec {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    text-align: center;

    .title{
        h1 {
        font-size: 36px;
        }
    }
   
    .spec_group {
        margin-top: 100px;
        .spec {
            display: inline-block;
            // width: 9.375rem;
            // height: 9.375rem;
            // background: blue;
            width: 16rem;
            margin: 0 8rem;
            // 向上對齊
            vertical-align: top;

            .circle_img{
                width: 15.375rem; /* 150px / 16px = 9.375rem */
                height: 15.375rem;
                border-radius: 50%;
                background: #555;

                overflow: hidden;
                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }

            .text {
                // background: red;
                width: 100%;
                font-size: 16px;
                line-height: 24px;
                margin-top: 2rem;
                
            }
        }

    }

    .know_more{
        position: absolute;
        right: 6rem;
        margin-top: 100px;
        font-size: 32px;
        color: lightgray;
    }
  }  


  </style>