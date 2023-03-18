<script setup>
// import { ref } from 'vue';
import NavBar from "./components/NavBar.vue";

// const toogleThemes = ref('')

// const themeToggle = () => {

// if(toogleThemes.value===true){
//   toogleThemes.value=false
// }
// else

//   toogleThemes.value=true

// };
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavBar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  background-image: url(./assets/bg-desktop-light.jpg);
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: 20px cover;

  /* height: 100%; */
}
</style>
