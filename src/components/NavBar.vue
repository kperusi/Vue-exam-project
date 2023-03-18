<script>
import "../assets/navStyle/navStyle.css";
export default {
  data() {},
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

      <div class="toggle-icon">
        <img src="../assets/icon-moon.svg" alt="moon" />
      </div>
    </nav>
  </div>

  <RouterView />
</template>

//
<style lang="scss" scoped>
//     .nav{
//         border: 2px  red;

//     }
//
</style>
