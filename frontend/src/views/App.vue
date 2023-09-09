<template>
  <main id="app">
     <router-view></router-view>
  </main>
</template>

<script>
import SportsPage from '../components/SportsPage.vue'

export default {
  name: 'App',
  components: {
    SportsPage
  },
  data (){
    return {
      sports:[
        {
          id   : 1,
          title: 'Batminton',
          color: 'green',
          bgtext: 'SP',
          src: require('../assets/batminton.jpeg')
        },
        {
          id   : 2,
          title: 'Cricket',
          color: 'blue',
          bgtext: 'OR',
          src: require('../assets/cricket.jpg')
        },
        {
          id   : 3,
          title: 'Tennis',
          color: 'pink',
          bgtext: 'TS',
          src: require('../assets/tennis.jpeg')
        }
      ]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montseratt', sans-serif;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: 25px;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sports {
  display: flex;
  max-width: 1280px;
  padding: 15px;
  margin: 0 auto;
}

</style>