<template>
  <div>
    <div class="left-sidebar">
      <div class="links">
        <a href="#"> <img :src="require('./images/news.png')"> Latest News</a>
        <a href="#"> <img :src="require('./images/news.png')"> Latest News</a>
        <a href="#"> <img :src="require('./images/news.png')"> Latest News</a>
      </div>
    </div>
    
    <div class="main-content">
      
    </div>

    <div class="right-sidebar">
      
    </div>
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

.left-sidebar, .right-sidebar, .main-content{
  position: sticky;
  top: 70px;
  align-self: flex-start;
  border-radius: 4px;
  height: 300vh;
}
.left-sidebar, .right-sidebar {
  background: rgba(253, 255, 255, 0.709);
  flex-basis: 25%;
}
.main-content {
  background: rgba(253, 255, 255, 0.957);
  flex-basis: 47%;
}
.nav-left ul li{
  display: flex;
  list-style: none;
  display: inline-block;
  cursor: pointer;
}
.nav-left ul li img{
  height: 20px;
  margin: 0 15px;
}
.logo{
  height: 40px;
  cursor: pointer;
}
.navusericon{
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 30px;
}
.searchbox{
  background: rgb(239, 238, 238);
  border-radius: 25px;
  width: 350px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.searchbox img{
  width: 18px;
}
.searchbox input {
  width: 100%;
  background: transparent;
  padding: 10px;
  outline: none;
  border: none;
}
.online {
  position: relative;
}
.online::after{
  content: '';
  width: 7px;
  height: 7px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: rgb(0, 255, 76);
  position: absolute;
  top: 0;
  right: 0;
}

</style>