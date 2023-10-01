<template>
    <div class="sports">
        <div :class="'sports-inner ' + sports?.color">
            <div class="sports-text-wrap">
                <h2 class="bg-text">{{sports?.bgtext}}</h2>
            </div>
            <div class="product-image-wrap">
                <img :src="sports?.src" class="image" />
            </div>
        </div>
        <button class="sports-detail" @click="navigateToPage">
            {{sports?.title}} 
        </button>
    </div>
</template>
<script>
export default {
    name: 'SportsCard',
    props: ['sports'],
    methods: {
      navigateToPage() {
        //console.log("🚀 ~ file: SportsCard.vue:25 ~ navigateToPage ~ this.sports.title.toLowerCase():", this.sports.title.toLowerCase())
        
        // Use this.$router.push to navigate to the corresponding route
        this.$router.push({ name: this.sports.title });
      },
    },
}
</script>
 
<style>
.sports {
    flex: 0 ;
    width: 100%;
    padding: 25px;
}

.sports-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}

.sports-inner.green {
    background-image: linear-gradient(to bottom right, #1168D4, #F444A4);
}

.sports-inner.blue {
    background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
}

.sports-inner.pink {
    background-image: linear-gradient(to bottom right, #F444A4, #1168D4);
}

.sports-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
}

.sports-text-wrap h2 {
    color: #313131;
    font-size: 220px;
    font-weight: 900;
    opacity: 0.5;
    transform-origin: center;
}

sports-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
}

.sports-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
}

.sports-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin-top: 35px;
}
</style>
