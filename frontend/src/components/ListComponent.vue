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
export default{
  components: {
    Batminton
},
  setup () {
    const posts = ref(getPosts(10))
    return {
      posts,
    }
  }
}
</script>

