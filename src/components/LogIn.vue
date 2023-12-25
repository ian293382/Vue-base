<template>
    <div class="LogIn">
      <div class="data_input">
        Account <input v-model="user.user_name" type="text">
      </div>
      <div class="data_input">
        Password <input v-model="user.password" type="password">
      </div>
  
      <div class="data_input">
        興趣：
        <div v-for="(hobby, index) in user.habbits" :key="index">
          <input v-model="user.habbits[index]" type="text">
          <button @click="deleteHobby(index)">刪除</button>
        </div>
        <button @click="addHobby">新增興趣</button>
      </div>
  
      <div class="data_store">
        資料情況: <br>
        帳號: {{ user.user_name }} <br>
        密碼: {{ user.password }} <br>
        電話：{{ user.tel }} <br>
        興趣: 
        <span v-for="hobby in user.habbits">
          {{ hobby }} {{ index < user.habbits.length - 1 ? ', ' : '' }}
        </span><br>
     
        年齡: {{ user.age }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogIn',
    data() {
      return {
        user: {
          user_name: '',
          password: '',
          age: 18,
          tel: '0912345678',
          photo: '404.jpg',
          habbits: ['蘿莉控', '看書', '寫程式'],
          history: {
            graduated: 'NTU',
            heightschool: 'TFG',
          },
        },
        click: 24,
        link: 'https:ian293382.com',
      };
    },
    methods: {
      addHobby() {
        this.user.habbits.push('');
      },
      deleteHobby(index) {
        this.user.habbits.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">

  .LogIn {
    padding-top:  7.375rem;
    .data_input{
        padding: 20px;
    }
    .data_store{
        font-size: 16px ;
        line-height: 24px;   
     }
  }

  </style>