<template>


  <div class="right-sidebar">
    
    <HeaderComponent :naglowki="store.state.naglowki[0]" />

    <LessonTile :zagrywki="store.state.zagrywki"/>
  
    <HeaderComponent :naglowki="store.state.naglowki[1]" />
    
    <img :src="require('./images/advertisement.png')" class="sidebar-ads">
   
    <HeaderComponent :naglowki="store.state.naglowki[2]" />
    <ConversationsComponent />


  </div>

</template>

<script>
import LessonTile from '@/components/LessonTile.vue'
import ConversationsComponent from '@/components/ConversationsComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'


import store from '../store'

console.log(store.state.naglowki)

export default {
components: {
  LessonTile,
  ConversationsComponent,
  HeaderComponent
},
data () {
  return {
      store
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.right-sidebar{
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

}
.sidebar-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.sidebar-title h4 {
  font-weight: 600;
  font-size: 16px;
}
.sidebar-title a {
  text-decoration: none;
  color: #1876f2;
  font-size: 12px;
}


.sidebar-ads{
  width:100%;
  margin-bottom: 20px;
  border-radius: 4px;
}

</style>