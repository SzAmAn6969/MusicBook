<template>
  <div class="home">
    <NavBar />
    <ContainerBox />
  
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContainerBox from '@/components/ContainerBox.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ContainerBox
  }
}
</script>
<style scoped>
</style>