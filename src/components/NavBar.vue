<script>
import "../assets/navStyle/navStyle.css";
export default {
  props: ["Theme", "toogleThemes"],
  data() {},
  emits: ["theme"],
};
</script>

<template>
  <div class="nav-cx">
    <h1>[Repo]List</h1>
    <nav>
      <div class="router-cx">
        <RouterLink class="route" to="/">Home</RouterLink>
        <RouterLink class="route" to="/about">About</RouterLink>
      </div>

      <div class="toggle-icon pointer-cur imgs" :class="toogleThemes ? Theme.darkTheme.moon : Theme.lightTheme.sun" @click="$emit('theme')">
       
        <!-- <img src="../assets/icon-moon.svg" alt="moon" :class="toogleThemes ? Theme.darkTheme.moon : Theme.lightTheme.sun"  /> -->
      </div>
    </nav>
    
  
  </div>
  <RouterView></RouterView>
</template>


<style  scoped></style>
