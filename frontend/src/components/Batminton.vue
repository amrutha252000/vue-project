<template>
    <div>
      <h5>batminton page</h5>
        <div class="post" v-for="item in post">
        <h2>{{item.author }}</h2>
        <p>{{item.content }}</p></div>
    </div>
</template>
  
<script>
import getPosts from "./../api/get-posts"
  export default {
    name: 'Batminton',
    computed: {
      post() {
        console.log(getPosts(10))
        return getPosts(100)
      }
    },
    methods: {
      someMethod(){
        getPosts(10)
      }
    }
  }
</script>
  
<style scoped>
  .post {
   background: #fff;
   padding: 1.5em;
  }

  .post:not(:last-child) {
   border-bottom: 1px solid #ddd;
  }

  .post h2 {
   font-size: 1.3em;
   padding-bottom: 0.25rem;
  }

  .post p {
   color: #888;
  }
</style>


