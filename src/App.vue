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
  <header :class="toogleThemes?Theme.darkTheme.todomainStyles:Theme.lightTheme.todomainStyles">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <NavBar @theme ='themeToggle' :Theme="Theme"  :toogleThemes="toogleThemes"/>
<RouterView></RouterView>
  </header>
  
</template>

<style scoped>
:root{
  --VeryLightGray: hsl(0, 0%, 98%);
  --VeryLightGray: hsl(0, 0%, 98%);
 --VeryLightGrayishBlue: hsl(236, 33%, 92%);
 --LightGrayishBlue: hsl(233, 11%, 84%);
 --DarkGrayishBlue: hsl(236, 9%, 61%);
 --VeryDarkGrayishBlue: hsl(235, 19%, 35%);
 
 --DarkBlue:  hsl(235, 21%, 11%);
    --DarkDesaturatedBlue: hsl(235, 24%, 19%) ;
    --LightGrayishBlue:  hsl(234, 39%, 85%);
    --LightGrayishBluehover: hsl(236, 33%, 92%);
    --DarkGrayishBlue: hsl(234, 11%, 52%);
    ----VeryDarkGrayishBlue: hsl(233, 14%, 35%);
    --VeryDarkGrayishBlue2: hsl(237, 14%, 26%);
}


header {
  display: flex;
  flex-direction: column;
  background-image: url(./assets/bg-desktop-light.jpg);
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: 200px cover;
/* border: solid red; */
  /* height: 700px; */
}
.todo-mains{
  background-image: url(./assets/bg-desktop-dark.jpg);
  background-color:hsl(235, 21%, 11%);
}
.light-todo-mains{
  background-image: url(./assets/bg-desktop-light.jpg);
background-color: var(--VeryLightGray);
}
@media (min-width: 180px) and (max-width: 780px) {
  header{
    width: 100%;
    /* border: solid red; */
  }
}
</style>
