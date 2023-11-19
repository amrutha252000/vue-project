<template>
    <div >
      <h1 style="color:rgb(48, 182, 249);text-align:center;padding-bottom: 20px;">Badminton Updates</h1>
      <div  class="post" v-for="item in this.posts" :key="this.posts">
      <h2>{{item.Headline }}</h2>
      <p>{{item.Content }}</p></div>
    </div>
</template>

<script>
import getPosts from "./../api/get-posts"
import axios from 'axios'
  export default {
    name: 'Batminton',
    data() {
      var posts =[]
      return {
        posts:posts
      }
    }, 
    created(){
      axios.post("http://127.0.0.1:3000/getposts", {'sportName': 'batminton'})
      .then((data)=>{
        this.posts = data.data.posts
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    mounted () {
    this.websocket = new WebSocket('ws://localhost:8081/batminton/');
    this.websocket.onopen = () => {
      console.log('WebSocket connected for batminton');
    };

    this.websocket.onmessage = (event) => {
      console.log(event.data);
      this.posts.push(JSON.parse(event.data))
      console.log(this.posts)
      if (this.posts.length > 7)  {
        this.posts.shift();
      }
    };
  },
    beforeUnmount() {
    if (this.websocket) {
        this.websocket.close();
        console.log("baminton socket closed")
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


