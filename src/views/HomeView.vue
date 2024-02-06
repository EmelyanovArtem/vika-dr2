<template>
  <div class="home">
    <Header/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="flex wrapper">
      <svg class="wrapper__img"  xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
        <path d="M9.00001 3.60001C6.01766 3.60001 3.60001 6.01766 3.60001 9.00001V36C3.60001 43.9528 10.0471 50.4 18 50.4V46.8C12.0353 46.8 7.20001 41.9648 7.20001 36V25.2H19.8C22.7824 25.2 25.2 22.7824 25.2 19.8V9.00001C25.2 6.01766 22.7824 3.60001 19.8 3.60001H9.00001Z" fill="#DB9FFF"/>
        <path d="M34.2 3.60001C31.2177 3.60001 28.8 6.01766 28.8 9.00001V36C28.8 43.9528 35.2471 50.4 43.2 50.4V46.8C37.2352 46.8 32.4 41.9648 32.4 36V25.2H45C47.9822 25.2 50.4 22.7824 50.4 19.8V9.00001C50.4 6.01766 47.9822 3.60001 45 3.60001H34.2Z" fill="#DB9FFF"/>
      </svg>
      <span class="wrapper__text">Любимая, сегодня у тебя день рождения, и я хочу поздравить тебя и пожелать...</span>
    </div>
    <SwiperMain/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SwiperMain from '@/components/SwiperMain.vue'; // @ is an alias to /src
import Header from '@/components/header.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
    SwiperMain,
    Header
  },
});
</script>

<style scoped>
.flex {
  display: flex;
}

.wrapper {
  justify-content: center;
  margin-bottom: 30px;
}

.wrapper__img {
  width: 54px;
  margin-right: 47px;
}

.wrapper__text {
  color: #FFF;
  font-family: 'Comfortaa', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 420px;
  text-align: left;
}
</style>