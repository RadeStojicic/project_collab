<template>
  <div>
    <nav>
      <div class="nav-container"> 
        <div class="left">
          <i class="fas fa-bars"></i>
        </div>
        <div class="right">
          <i class="far fa-user"></i>
          <i class="fas fa-cart-plus"></i>
          <i class="fas fa-search"></i>
          <h1>AAAAA</h1>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 60px;
  background-color: #006DE9;
  display: flex;
  align-items: center;
}

.nav-container  {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.left i {
  color: white;
  font-size: 1.5em;
  flex: 1;
}

.right i {
  color: white;
  font-size: 1.5em;
  flex: 1;
  margin-left: 40px;
}
</style>
