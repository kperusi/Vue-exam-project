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
</script>

<template>
  <main class="top-cx">
  thtjktjktjktjk
    <div class="main-cx">
      <div v-for="(eachRepo, index) in reposData" :key="index">
        <div class="main" v-if="eachRepo.name === this.$route.params.name">
          <div class="col-1 border-rx-8 margin-left">
            <div style="display: flex">
              <img
                src="../assets/date(2).svg"
                alt="dateicon"
                width="80"
                height="80"
              />
              <!-- <h3 class="margin-bt border-rx-8 text-align-ct ft-size-m ht-s">Dates</h3> -->
            </div>
            <div class="border-top wt-max">
              <div class="flex-rw margin-bt-5">
                <p>Created at:</p>
                <p class="bg-red margin-left-auto pad-lt-rt-3 border-rx-8">
                  {{
                    eachRepo.created_at.substring(
                      0,
                      eachRepo.updated_at.indexOf("T")
                    )
                  }}
                </p>
              </div>

              <div class="flex-rw">
                <p>Updated at:</p>
                <p class="bg-red margin-left-auto pad-lt-rt-3 border-rx-8">
                  {{
                    eachRepo.updated_at.substring(
                      0,
                      eachRepo.updated_at.indexOf("T")
                    )
                  }}
                </p>
              </div>

              <div class="flex-rw">
                <p>Pushedat:</p>
                <p class="bg-red margin-left-auto pad-lt-rt-3 border-rx-8">
                  {{
                    eachRepo.pushed_at.substring(
                      0,
                      eachRepo.pushed_at.indexOf("T")
                    )
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="header border-rx-8">
            <div class="name-cx border-top-8">
              <h2 class="name">{{ eachRepo.name }}</h2>
            </div>
            <div class="img-cx margin-left margin-bt-20">
              <img
                :src="eachRepo.owner.avatar_url"
                alt=""
                width="90"
                class="avatar"
              />
            </div>
            <div class="margin-left flex-rw mb-mg-lft">
              <h2
                style="
                  border: 2px solid purple;
                  border-radius: 8px;
                  padding: 10px;
                "
              >
                {{ eachRepo.owner.login }}
              </h2>
              <h3 
                style="
                  border: 2px solid rgb(145, 9, 242);
                  border-radius: 8px;
                  padding: 10px;
                  margin-left: 2px;
                  background: rgb(145, 9, 242);
                  color: aliceblue;
                  text-align: center;
                "
              >
                {{ eachRepo.owner.id }}
              </h3>
            </div>
            <div class="flex-rw margin-left margin-tp-10 rw-3">
              <p
                class="ht-l ft-size-a text-ct text-col-wh border-white border-rx-8 padding"
              >
                {{ eachRepo.id }}
              </p>
              <p
                class="ht-l ft-size-a text-ct bg-white border-rx-8 wt-l padding"
              >
                {{ eachRepo.default_branch }}
              </p>
              <p
                class="ht-l ft-size-a text-ct bg-white border-rx-8 wt-l padding"
              >
                {{ eachRepo.visibility }}
              </p>
            </div>
          </div>

          <div class="col-1 col-3 border-rx-8">
            <div>
              <img src="../assets/url.svg" alt="" width="45" height="45" />
            </div>

            <div class="border-rx-8">
              <div class="flex-col margin-bt-5">
                <p class="bg-red border-rx-8 pad-lt-rt-3 wt-s pad-bt-tp-5">
                  Repo's Url:
                </p>
                <p class="margin-left-auto pad-lt-rt-3 border-rx-8">
                  {{ eachRepo.url }}
                </p>
                <button class="url-btn margin-left-auto wt-s"></button>
              </div>
            </div>

            <div class="border-rx-8 flex-col">
              <div class="flex-col margin-bt-5">
                <p class="bg-red border-rx-8 pad-lt-rt-3 wt-m pad-bt-tp-5">
                  Deployment Url:
                </p>
                <p class="pad-lt-rt-3 border-rx-8">
                  {{ eachRepo.deployments_url }}
                </p>
                <button class="url-btn margin-left-auto wt-s"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer"></div>
  </main>
  <!-- <RouterView></RouterView> -->
</template>
<style>

.main {
  display: flex;
  flex-direction: row;
  height: 480px;
  margin: 90px auto;
}
.border-rx-8 {
  border-radius: 8px;
}
.header {
  width: 500px;
  margin: 0 10px 0 10px;
  box-shadow: 2px 3px 10px 2px rgb(205, 198, 198);
  height: 500px;
}
.border-top-8 {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.name-cx {
  background-color: rebeccapurple;
  background-image: url(../assets/Purpink.png);
  width: 100%;
  margin: 0px auto;
  color: white;
  font-size: 2.5em;
  padding: 20px;
}
.name {
  width: 350px;
  line-height: 0.8;
  /* border: solid red; */
}
.img-cx {
  margin-top: -10px;
  width: 90px;
  height: 90px;
}
.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: solid rgb(145, 9, 242);
}

.col-1 {
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  background-image: url(../assets/Purpink.png);
  padding: 10px;
  padding-right: 20px;
  color: white;
  height: 300px;
  box-shadow: 2px 3px 10px 2px rgb(205, 198, 198);
}
.col-3 {
  width: 400px;
  box-shadow: 2px 3px 10px 2px rgb(205, 198, 198);
  margin-left: 10px;
  height: 400px;
  margin-top: 140px;
  padding-bottom: 5px;
  border: solid white;
}
.margin-left {
  margin-left: 10px;
}
.margin-bt-5 {
  margin-bottom: 10px;
}
.margin-bt-20 {
  margin-bottom: 20px;
}
.margin-tp-10 {
  margin-top: 10px;
}
.ht-m {
  height: 200px;
}
.ht-s {
  height: 80px;
}
.ht-l {
  height: 60px;
}
.text-ct {
  text-align: center;
}
.ft-size-m {
  font-size: medium;
}
.ft-size-a {
  font-size: 1.3em;
}
.border-top {
  border-top: 2px solid white;
}
.wt-max {
  width: 100%;
}
.bg-red {
  background-color: tomato;
}
.flex-rw {
  display: flex;
  padding-top: 10px;
}
.margin-left-auto {
  margin-left: auto;
}
.pad-lt-rt-3 {
  padding-left: 3px;
  padding-right: 3px;
}
.padding {
  padding: 5px;
}
.bg-white {
  background-color: white;
}
.wt-s {
  width: 150px;
}
.wt-m {
  width: 300px;
}
.wt-l {
  width: 80px;
}
.pad-bt-tp-5 {
  padding-top: 5px;
  padding-bottom: 5px;
}
.margin-rt-auto {
  margin-right: auto;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.url-btn {
  background-image: url(../assets/arrow-right.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  height: 40px;
  width: 60px;
  outline: none;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgb(144, 4, 219);
}
.text-col-wh {
  color: white;
}
.rw-3 {
  justify-content: space-evenly;
  border-radius: 8px;
  border: 2px solid rgb(102, 4, 107);
  padding: 10px;
  height: 130px;
  background-image: linear-gradient(
    46deg,
    rgb(102, 12, 175),
    rgb(104, 4, 104),
    rgb(182, 14, 212)
  );
}

.border-white {
  border: 1px solid white;
}
@media (min-width: 180px) and (max-width: 780px) {
  .main {
    flex-direction: column;
    padding: 0;
  }
  .header {
    margin-top: -300px;
    margin-left: 0;
    margin-right: 0;
    /* border: solid red; */
    width: 100%;
  }
  .name {
    width: 350px;
    line-height: 0.8;
    font-size: 1.1em;
  }
  .name-cx {
    width: 100%;
    margin: 0px auto;
    color: white;
   
    padding: 30px;
  }
  .margin-left{
    margin-left: 0;
  }
  .rw-3{
    width: 100%;
  }

  .col-1{
    position: relative;
    top: 370px;
    /* margin-top: 300px; */
  }
  .col-3{
    width: 100%;
    margin-left: 0;
    margin-top: -135px;

  }
  .mb-mg-lft{
    margin-left: 20px;
  }

  .footer {
    display: none;
  }
}
</style>
