<template>
<div class="rep">
    <div v-for="(eachRepo, index) in reposData" :key="index">
        <div class="main" v-if="eachRepo.name === $route.params.name">
          <p>{{ eachRepo.name }}</p>
          </div>
    </div>

    <div>GitHub List</div>
    <div>GitHub List</div>
    <div>GitHub List</div>
    <div>GitHub List</div>
</div>
   
</template>

<script setup>
import { ref } from "vue";
const reposData = ref([]);
const loading = ref(true);
const getRepo = () => {
  let url = " https://api.github.com/users/kperusi/repos";
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      reposData.value = data;
      console.log(".....", data);
    })
    .catch((error) => {
      this.error = error;
    })
    .finally(() => {
      loading.value = false;
    });
};
getRepo();


// export default {
//     data(){
//         return{
            
//         }
//     }

// }
</script>


<style scoped>
.rep{
    display: flex;
    flex-direction: column;
    border: solid rgb(13, 205, 39);
}
</style>