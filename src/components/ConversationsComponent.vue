<template>
  
    <div class="online-list">
      
      <div class="online">
        <img :src="require('./images/member-1.png')">
      </div>
      <p>Alison Mina</p>
    
    </div>

    <div class="online-list">
    
      <div class="online">
        <img :src="require('./images/member-2.png')">
      </div>
      <p>John Doe</p>
    
    </div>

    <div class="online-list">
      <div class="online">
        <img :src="require('./images/member-3.png')">
      </div>
      <p>Lauren Hill</p>
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
*{
  box-sizing: border-box;
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
  bottom:5px;
  right: 0;
}
.online-list {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.online-list .online img {
  width:40px;
  border-radius: 50%;
}
.online-list .online {
  width:40px;
  border-radius: 50%;
  margin-right: 20px;

}
</style>