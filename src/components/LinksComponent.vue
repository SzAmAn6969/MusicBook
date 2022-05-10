<template>
  <div class="links">
    <a href="#"> <img :src="require('./images/news.png')">Gitara</a>
    <a href="#"> <img :src="require('./images/friends.png')">Harmonijka</a>
    <a href="#"> <img :src="require('./images/group.png')">Teoria Muzyki</a>
    <a href="#"> <img :src="require('./images/marketplace.png')">Sample-Shop</a>
    <a href="#"> <img :src="require('./images/watch.png')">O nas</a>
    <a href="#">See More</a>
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
.links{
  border-bottom: 1px solid rgb(201, 201, 201);
}
.links a{
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #787878;
  width: 100%;
}
.links a img {
  width: 30px;
  margin: 15px;
  border-radius: 5%;
}
.links a:last-child{
  color: #1876f2;
  margin-left: 13px;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>