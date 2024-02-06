<template> 
 <swiper-container class="s-conteiner" pagination="true" space-between="30">
  <swiper-slide class="s-slide">
    <img class="s-img" src="../assets/emojibest_com_AnimatedSticker.gif" alt="">
    <p class="s-text">Не забывай отдыхать. У тебя сейчас очень непростой период жизни, когда ты работаешь в поте лица. Не забывай уделять время себе, периодически отдыхай и кушай. Позволь себе отвлечься от учёбы.</p>
  </swiper-slide>
  <swiper-slide class="s-slide">
    <img class="s-img" src="../assets/emojibest_com_rabota.gif" alt="">
    <p class="s-text">В жизни не всегда всё получается с первого раза. Иногда возникают мысли всё бросить, и думаешь “а надо ли оно мне?”, “это не моё”, - твоё. Никогда не сдавайся и не опускай руки. Я в тебя верю &lt;3</p>
  </swiper-slide>
  <swiper-slide class="s-slide">
    <img class="s-img" src="../assets/emojibest_com_love.gif" alt="">
    <p class="s-text">Ты - самое лучшее, что у меня есть. Я очень рад твоему дню рождения и искренне поздравляю. Помни, что 18 - это не цифра в паспорте и не бутылка вина в магазине. Теперь ты стала совсем взрослой, ты сама можешь строить свою жизнь. Но я предлагаю нам строить наши жизни вместе)</p>
  </swiper-slide>
  <swiper-slide class="s-slide">
    <img class="s-img" src="../assets/emojibest_com_podarok.gif" alt="">
    <p class="s-text">Я вижу, что тебе уже не терпится открыть подарок, но подожди ещё немного. Чтобы получить код, тебе нужно пройти небольшую викторину)
      Удачи - <router-link :to="'/question/' + 1">Ссылка</router-link></p>
  </swiper-slide>
</swiper-container>
</template>

<style scoped>
.s-conteiner {
  width: 410px;
  margin: 0 auto;
}

.s-slide {
  max-width: 350px;
  height: 610px;
  padding: 30px;
  background-color: #B757F1;
  border-radius: 30px;
}

.s-img {
  width: 125px;
  height: 125px;
  margin-bottom: 48px;
}

.s-text {
  text-align: left;
  color: #FFF;
  font-family: 'Comfortaa', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 345px;
}
.swiper-button-prev, .swiper-rtl .swiper-button-next  {
  left: -100px;
}
</style>

