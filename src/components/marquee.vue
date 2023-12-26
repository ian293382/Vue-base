<template>
    <div class="marquee">
      <div class="marquee_overflow">
        <!-- 要超過我的頁面ex 5000px -->
        <div v-for="(marquee_sentence, index) in marquee_sentences" :key="index" class="marquee-sentence">
          {{ marquee_sentence }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        marquee_sentences: [
          '你知道嗎我要catttac金克拉畝產一千八這是第一行',
          '我不知道不要我要吃飯飯這是第二行',
        ],
      };
    },
  };
  </script>
  
  <style scoped lang="scss">
  $rethink_lightgreen: #B6FFC5;
  
  .marquee {
    position: fixed;
    width: 200%;
    height: 40px;
    bottom: 0;
    background: $rethink_lightgreen;
    overflow: hidden;
  }
  
  .marquee_overflow {
    white-space: nowrap;
    width: auto;
    animation: marqueeAnimation 30s linear infinite;
  
    @keyframes marqueeAnimation {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
  
  .marquee-sentence {
    position: relative;
    display: inline-block;
    margin: 13px 5%; 
    width: auto;
  }
  </style>