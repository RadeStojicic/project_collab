<template>
    <div class="hero_div">
        <div class="container"> 
        <div class="div1">
       <h1 class="main-text"><span style="color:#DE003C">25%</span> NA SVE <br><span style="font-size: 2.5rem">PROIZVODE </span></h1>
       </div>
       <div class="div2">

       </div>
        </div>
    </div>
</template>



<script>
export default {
  
}
</script>

<style scoped>
.hero_div {
    height: 70vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.685), rgba(0, 0, 0, 0.76)), url("./hero_image.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.div1 {
    text-align: center;
    margin-top: 5em;
}
.div1 h1 {
    font-size: 3.5rem;
}
.main-text {
    color: rgb(15, 166, 172);
    background-color: rgb(37, 57, 75);

}
</style>