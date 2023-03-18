<script setup>
import { ref } from 'vue';
import NavBar from "./components/NavBar.vue";

const toogleThemes = ref('')


let Theme = ref({
  darkTheme: {
    moon:'moon',
    todomainStyles:'todo-mains',
    todoDisplaydarkMain:'todo-display-dark-main',
    todoDisplayDarkToolBox:'todo-display-dark-tool-box',
    inputDark:'input-dark',
    activeDark:'active-dark',

  },
  lightTheme: {
    sun:'sun',
    todomainStyles:'light-todo-mains',
    todoDisplayLightMain:'todo-display-light-main',
    todoDisplayLightToolBox:'todo-display-light-tool-box',
  inputLight:'input-light',
  activeLight:'active-light'
  },
})

const themeToggle = () => {

if(toogleThemes.value===true){
  toogleThemes.value=false
}
else

  toogleThemes.value=true

};
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavBar @theme ='themeToggle' :Theme="Theme"  :toogleThemes="toogleThemes"/>
<RouterView></RouterView>
  </header>
  
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  background-image: url(./assets/bg-desktop-light.jpg);
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: 200px cover;
border: solid red;
  /* height: 700%; */
}
</style>
