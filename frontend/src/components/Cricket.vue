<template>
    <div>
      <div class="post" v-for="item in post">
        <h2>{{item.author }}</h2>
        <p>{{item.content }}</p></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TennisCard'
  }
  </script>  