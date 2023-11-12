<template>
    <div class="scrolling-component" ref="scrollComponent">
      <batminton
        v-for='(post,index) in posts'
        :post="post" 
        :key="index"/>
    </div>
  </template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Batminton from './Batminton.vue'
import Cricket from './Cricket.vue'
import Tennis from './Tennis.vue'
export default{
  components: {
    Batminton, Cricket, Tennis
},
async function() {
    const posts = await fetch('/getposts')
    return {
      posts,
    }
  }
}
</script>
