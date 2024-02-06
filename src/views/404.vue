<template>
  <div class="wrapper">
    <h1>Ошибка 404</h1>
    <span>Солнце, такой страницы не существует. Как ты вообще попала сюда? Давай вернёмся... <br><br><br>  <router-link class="btn" to="/">На главную</router-link></span>
    
  </div>
</template>

<style scoped>
.wrapper {
  text-align: left;
}

h1 {
  color:white;
  font-size: 30px;
  margin-bottom: 50px;
}

span {
  color: white
}

.btn {
  border: none;
  border-radius: 15px;
  background: #B757F1;
  color: #FFF;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 15px;
  text-decoration: none;
}
</style>