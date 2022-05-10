<template>
<nav class="nav">
  <div class="nav-left">
    <img :src="require('./images/logo.png')" class="logo"/>
    <ul>
      <li><img :src="require('./images/notification.png')"></li>
      <li><img :src="require('./images/inbox.png')"></li>
      <li><img :src="require('./images/video.png')"></li>
    </ul>
  </div>

  <div class="nav-right">
    <div class="searchbox">
      <img :src="require('./images/notification.png')">
      <input type="text" placeholder="Search" class="searchbar">
    </div>
    <div class="online">
      <img :src="require('./images/profile-pic.png')" class="navusericon">
    </div>
  </div>
</nav>
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
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(42, 106, 255);
  padding: 5px 5%;
  border-radius: 4px;
  position: sticky;
  top:0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

}
.nav-left, .nav-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
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