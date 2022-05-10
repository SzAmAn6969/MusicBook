<template>
  <div class="container">
    <SidebarLeft class="left-sidebar" />
    
    <MainContent class="main-content" />

    <SidebarRight class="right-sidebar" />

  </div>
</template>
<script>
import SidebarLeft from '@/components/SidebarLeft.vue'
import SidebarRight from '@/components/SidebarRight.vue'
import MainContent from '@/components/MainContent.vue'


export default {
components: {
    SidebarLeft,
    SidebarRight,
    MainContent
  },
data () {
  return {
      // logo: 'logo.png'
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 13px 5%;
  border-radius: 4px;
}
.right-sidebar{
  background-color: #ffffff;
}
.left-sidebar{
}
.left-sidebar, .right-sidebar{
  flex-basis: 20%;
  padding: 20px;
}
.main-content {
  flex-basis: 57%;
}
.main-content, .left-sidebar, .right-sidebar{
  border-radius: 4px;
  top: 70px;
  align-self: flex-start;
  position: sticky;
}
</style>