<script setup>
import NavBar from './components/NavBar.vue';

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
<NavBar/>
    
  </header>

 
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;



background-image: url(./assets/bg-desktop-light.jpg);
    /* linear-gradient(hsl(192, 77%, 19%), hsl(270, 2%, 24%)); */
background-repeat: no-repeat;
background-position-y: 0;
background-size: 20px cover;

/* height: 100%; */


}

</style>
