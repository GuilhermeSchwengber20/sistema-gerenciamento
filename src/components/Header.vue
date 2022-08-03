<template>
  <div class="container-page">
    <div class="containerHeader">
      <div class="containerLogo">
        <span>Logo</span>
      </div>
      <nav>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/Gerenciar">GERENCIAR</router-link></li>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-page{
  width: 100%;
  height: 7vh;
  background:  #172026;
  color: #5fcdd9;

}

.containerHeader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

nav{
  display: flex;
  flex-direction: row;
}

nav li{
  list-style: none;
  margin-right: 20px;

}

nav li a{
  text-decoration: none;
  color: #5fcdd9;

}


/* 
 #172026
 #5fcdd9
 #027373
 #048fad
 #04bf9d */
</style>
