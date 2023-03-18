<script>
import "../assets/style/style.css";
export default {
  data() {
    return {
      reposData: [],
      dataPerPage: 4,
      currentPage: 1,
      error: "",
      loading: true,
      randomColors:0
    };
  },
  methods: {
    getRepo() {
      let url = " https://api.github.com/users/kperusi/repos";
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          this.reposData = data;
          console.log(".....", data);
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextHandler() {
      if (this.currentPage != this.NumberOfPages) {
        this.currentPage++;
      }
    },
    previouHandler() {
      if (this.currentPage > 1) this.currentPage--;
    },
    spliter(eachRepo){
      let i =  eachRepo.name.indexOf('-')
      let s = eachRepo.name.substring(0,i)
      let first = s.substring(0,1).toUpperCase()
      let t = eachRepo.name.substring(i+1).toUpperCase()
      let second = t.substring(0,1).toUpperCase()

return first+ second

},
  }, //end of method

  computed: {
    pagination() {
      console.log(this.reposData.length);
      let lastIndex = this.currentPage * this.dataPerPage;
      let startIndex = lastIndex - this.dataPerPage;

      return this.reposData.slice(startIndex, lastIndex);
    }, //----------------------------------------------------------

    NumberOfPages() {
      return Math.ceil(this.reposData.length / this.dataPerPage);
    }, //---------------------------------------------------

    color() {
      return Math.ceil(Math.random()*10);
    },
   
  }, //endofComputed

  mounted() {
    this.getRepo();
    this.loading = true;
    console.log(this.color)
  },
};
</script>

<template>
  <main>
    <div class="loading repo-list-xn list-cx" v-if="loading">Loading Please Wait</div>
    <div class="loading" v-else-if="error">{{ error }}</div>
    <div v-else class="repo-list-xn" >
      <main class="list-cx">
        <div class="git-cx">
      <img class="img"
            src="../assets/GitHub-Mark.png"
            alt="gitimage"
            width="180"
            height="180"
          />
         <div class="flex-col fg-color-white">
          <h2>List of Github Repo</h2>
          <p class="align-ct no-mg-top">Click to See Details</p>
          </div>
         
        </div>

        <div class="list" :style="{borderBottom:`2px solid #${index*7}${index}${index+5}`}" v-for="(eachRepo, index) in pagination" :key="index">
          <div
            class="list-rw"
            @click="this.$router.push(`about/${eachRepo.name}`)"
          >
            <h3 class="initials" :style="{backgroundColor:`#${index*7}${index}${index+5}`}">
              {{ spliter(eachRepo) }}
            </h3>
            
            <p>{{ eachRepo.name }}</p>

         
            <img
              class="arrow"
              src="../assets/arrow-right.svg"
              alt="arrow"
              width="20"
              height="20"
              :style="{ borderRadius: '50px' }"
            />
          </div>

          <div class="detail-rw">
            <p class="branch-txt">{{ eachRepo.default_branch}}</p>
            <p class="branch-txt">{{ eachRepo.id }}</p>
          <p class="updated-txt">update at</p>
          <p class="updated-at">{{ eachRepo.updated_at.substring(0,eachRepo.updated_at.indexOf('T')) }}</p>
          </div>
        </div>
      </main>

      <div class="btn-wrap">
        <button class="prv" @click="previouHandler">Prev</button>

        <div
          class="btn-cx"
          v-for="(btnNumber, index) in this.NumberOfPages"
          :key="index"
        >
          <button
            class="btn"
            type="button"
            @click="this.currentPage = btnNumber"
          >
            {{ btnNumber }}
          </button>
        </div>
        <button class="nxt" @click="nextHandler">Next</button>
      </div>

      <div>
        <p>Page {{ this.currentPage }} of {{ NumberOfPages }} Pages</p>
      </div>
    </div>
  </main>
</template>
