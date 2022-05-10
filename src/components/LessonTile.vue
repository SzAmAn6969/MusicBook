<template>
  <a href="#" @click="zmienZagrywke(zagrywka.id)" v-for="zagrywka in zagrywki" :key="zagrywka.id">
    <div class="event">
      <div class="left-event">
        <h3>{{ zagrywka.id }}</h3>
        <span>Zagrywka</span>
      </div>
      <div class="right-event">
        <h4>{{ zagrywka.name }}</h4>
        <p> {{ zagrywka.tag }}</p>
      </div>
    </div>
  </a>

  <!-- <div v-for="item in items" :key="zagrywka.id"> XXXXX</div> -->


</template>
<script>
import store from '../store'

export default {
props: ['zagrywki'],
methods: {
  zmienZagrywke (numer) {
    store.commit('zmienNumerZagrywki', numer-1)
    store.commit('zmienKey')
    console.log(store.state.key)
  },
data () {
  return {
      // logo: 'logo.png'
    }
  }
}
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.event{
  display: flex;
  height: 70px;
  font-size: 12px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

}
.left-event{
  border-radius: 10px;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  padding-top: 5px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  top: 15px;
}
.left-event h3{
  margin-top: 0px;
  font-size:20px;
  font-weight: bold;
}
.left-event span{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1876f2;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 5%;
}
.event{
  background-color: rgb(240, 249, 252);
  padding: 0 20px;
  border-radius: 10%;
}
.event p, a {
  font-size: 10px;
}
.event a {
  text-decoration: none;
  color: #1876f2;
}
.right-event p{

}
</style>