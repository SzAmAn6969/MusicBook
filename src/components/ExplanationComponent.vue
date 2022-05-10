<template>
  <div>
    <h1>Lekcja</h1>

    <img :src="store.state.zagrywki[0].tabSrc">
  </div>
</template>

<script>
import store from '../store';

export default {

  data () {
    return {
      store
    }
  }
}
</script>

<style scoped>


</style>
