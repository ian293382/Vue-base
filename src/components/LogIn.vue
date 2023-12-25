<template>
    <div class="LogIn">
        Account <input v-model="user_name" type="text" value="">
        <div class="">{{ user_name }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogIn',
    data() {
      return {
        user_name: '123qwe'
      };
    },
  };
  </script>
  
  <style scoped lang="scss">

  .LogIn {
    padding-top:  7.375rem;
  }

  </style>