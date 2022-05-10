<template>
  <div>
    <div class="left-sidebar">
      <LinksComponent />
      <YourShortcuts />
    </div>
  </div>
</template>

<script>
import LinksComponent from '@/components/LinksComponent.vue'
import YourShortcuts from '@/components/YourShortcuts.vue'

export default {
name: 'SidebarLeft',
components: {
  LinksComponent,
  YourShortcuts
},
data () {
  return {
      // logo: 'logo.png'
    }
  }
}
</script>
<style scoped>

.left-sidebar{
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

}
</style>