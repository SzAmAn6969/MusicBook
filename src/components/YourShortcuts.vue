<template>
  <div class="your-shortcuts">
    <p>Ostatnio odwiedzane</p>
    <a href="#"><img :src="require('./images/shortcut-1.png')">Minor Swing</a>
    <a href="#"><img :src="require('./images/shortcut-2.png')">All the things you are</a>
    <a href="#"><img :src="require('./images/shortcut-3.png')">Django's Tiger</a>
    <a href="#"><img :src="require('./images/shortcut-4.png')">Interwały</a>
  </div>
</template>

<script>

export default {
data () {
  return {
      // logo: 'logo.png'
    }
  }
}
</script>
<style scoped>
.your-shortcuts a{
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #787878;
  width: 100%;
}
.your-shortcuts img {
  width: 30px;
  margin: 15px;
  border-radius: 5%;
}
.your-shortcuts p {
  margin: 25px 0;
  color: #626262;
  font-weight: 500;
}
</style>