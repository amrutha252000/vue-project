<template>
    <div>
      <h1 style="color:rgb(129, 81, 251);text-align:center;padding-bottom: 20px;">Cricket Updates</h1>
      <div class="post" v-for="item in this.posts" :key="this.posts">
        <h2>{{item.author }}</h2>
        <p>{{item.content }}</p></div>
    </div>
  </template>
  
  <script>
  import getPosts from "./../api/get-posts"
  export default {
    name: 'Cricket',
    data() {
      return{
        posts: getPosts(7)
      }
    },
  mounted () {
  this.websocket = new WebSocket('ws://localhost:8081/cricket/');

  this.websocket.onopen = () => {
    console.log('WebSocket connected for cricket page');
  };

  this.websocket.onmessage = (event) => {
      console.log("New event")
      console.log(event.data);
      this.posts.push(JSON.parse(event.data))
      console.log(this.posts)
      if (this.posts.length > 10)  {
        this.posts.shift();
      }
    };
  },
  
beforeUnmount() {
  if (this.websocket) {
      this.websocket.close();
      console.log("cricket socket closed")
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


