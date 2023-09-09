<template>
  <main id="app">
    <section class="sports">
        <div class="row">
      <SportsCard
      v-for="sportsItem in sports"
      :key = "sportsItem.id"
      :sports="sportsItem"/>
    
    </div>

    </section>
  </main>
</template>

<script>
import SportsCard from '../components/SportsCard.vue' 

export default {
  name: 'SportsPage',
  components: {
    SportsCard
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