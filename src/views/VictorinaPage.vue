<template>
  <div>
    <Header/>
    <div class="wrapper flex">
      <router-link class="btn" to="/"><svg width="20px" height="20px" viewBox="0 0 21.91 21.91" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.0002191" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <path id="arrow-back" class="cls-1" d="M1452.89,149H1438a5,5,0,0,0,0,10h7.89l-1.74-2.582a0.874,0.874,0,0,1,.41-1.3,1.207,1.207,0,0,1,1.51.348l2.54,3.762a0.165,0.165,0,0,1,.04.046,1.108,1.108,0,0,1,.22.256h0a0.831,0.831,0,0,1,.11.372v0.016a0.046,0.046,0,0,1,.01.034c0,0.016.01,0.03,0.01,0.046s-0.01.031-.01,0.046a0.045,0.045,0,0,1-.01.034v0.029a1.131,1.131,0,0,1-.05.259c-0.02.036-.04,0.064-0.06,0.1a0.855,0.855,0,0,1-.13.192,0.63,0.63,0,0,1-.11.082l-2.56,3.793a1.205,1.205,0,0,1-1.51.348,0.873,0.873,0,0,1-.41-1.3l1.74-2.583H1438a7,7,0,0,1,0-14h5v2h9.89Z" transform="translate(-1431 -147)"></path> </g></svg>На главную</router-link>
      <p class="number">{{ question?.id }}/{{ countQues }}</p>
    </div>
    <form @submit.prevent="checkAnswer(answer)" class="form flex" action="">
      <p class="form__text">{{ question?.question }}</p>
      <label for="answer1" class="form__label">
        <input id="answer1" type="radio" name="answer" v-model="answer" :value="question?.ans1.res"  class="form__input">
        {{ question?.ans1.text }} 
      </label>
      <label for="answer2" class="form__label">
        <input id="answer2" type="radio" name="answer" v-model="answer" :value="question?.ans2.res" class="form__input">
        {{ question?.ans2.text }} 
      </label>
      <label for="answer3" class="form__label">
        <input id="answer3" type="radio" name="answer" v-model="answer" :value="question?.ans3.res" class="form__input">
        {{ question?.ans3.text }}     
      </label>
      <input class="btn btn-bg" type="submit" value="Ответить">
      <p v-if="errorToggle" class="error">Не-а, неправильно. Попробуй ещё раз</p>
      <p v-if="pass" class="error">Правильно, умничка)</p>
      <router-link v-if="pass && question?.id != countQues" class="btn btn-bg btn-route" :to="'/question/' + (question?.id + 1)">Далее <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
      <router-link v-if="pass && question?.id == countQues" class="btn btn-bg btn-route" :to="'/answer'">Далее <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </form>
  </div>
</template>

<script lang="ts">
import Header from '@/components/header.vue';
import { defineComponent } from 'vue';
import questions from '@/store/DB';
import { questionInt } from '@/interface.dto';

export default defineComponent({
  data() {
    const question: any = questions.find(q => q.id === Number(this.$route.params.id)) || null;

    console.log(question)
    return {
      question,
      answer: false,
      errorToggle: false,
      pass: false,
      countQues: questions.length,
    }
  },

  components: {
    Header
  },
  
  methods: {
    checkAnswer(answer: boolean) {
      if(answer === true) {
        this.errorToggle = false;
        this.pass = true;
        console.log("правильно")
        
      } else {
        this.errorToggle = true;
        this.pass = false;
        console.log("Не правильно")
      }
    }
  }
});
</script>

<style scoped>

.flex {
  display: flex;
}

.number {
  color: white;
  text-align: left;
}

.wrapper {
  align-items: center;
  margin-bottom: 30px;
}

.wrapper .btn {
  margin-right: 15px;
}

.btn {
  border: none;
  border-radius: 15px;
  background: #B757F1;
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 15px;
  text-decoration: none;
}

.btn-bg {
  border: 2px solid white;
  margin-bottom: 20px;
} 
.btn-route {
  align-self: flex-end;
}
.error {
  color: white;
}
.form {
  border-radius: 30px;
  background: #B757F1;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 30px;
  padding-bottom: 100px;
}

.form__label {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 15px;
}

.form__text {
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
  text-align: left;
}
</style>