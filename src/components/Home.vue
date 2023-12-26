<template>
    <div class="home">
      <div class="main_intro">
        
        <div class="lobby_img">
          <img class="lobby" src="../assets/lobby.JPG" alt="Lobby">
        </div>
        <input type="button" name="" value="圖片變小" @click="small_img()">
        <input type="button" value="當你想跟使用者斷掉資料更新的時候點選他 ex遊戲結束" @click="$destory()">
        <div class="brand_spec">
          <div class="title">
            <h1>品牌特色</h1>
          </div>
          <div class="spec_group">
            <div class="spec">
              <div class="circle_img">
                <img src="../assets/Product_1.JPG" :alt="img_alt" :title="img_title">
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
      img_alt: 'test',
      img_title: 'wha',
      is_login: false,
      is_small_img: false,
    };
  },
  methods: {
    login() {
      this.is_login = true;
    },
    logout() {
      this.is_login = false;
    },
    small_img() {
     // document.getElementsByClassName 返回的是一个 HTMLCollection，要array 取值
     var small_img_class = document.getElementsByClassName('lobby')[0];

    // 使用 style 属性设置样式，而不是 stytle
    small_img_class.style.transform = 'scale(0.5)';
    small_img_class.style.marginBottom = '10px';
    small_img_class.style.transition = '0.3s';
    },
  }
};
</script>

  
  <style scoped lang="scss">
  .main_intro {
    position: relative;
    width: 100%; /* 修正拼寫錯誤 */
    height: 100vh;
    background: #f2f2f2;
  
  
    .lobby_img {
        margin: 0 auto;
        display: block;
        width: 36rem;
        height: 32rem;

        .lobby {
            margin: 10px;
            overflow: hidden;
            object-fit: contain;
            width: 100%;
            height: 100%;
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