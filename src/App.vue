<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from "./components/Header.vue"
export default{
  name: "App",
  components:{
    Header,
}
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Poppins', sans-serif;
}

/* #172026
 #5fcdd9
 #027373
 #048fad
 #04bf9d

 */
</style>
