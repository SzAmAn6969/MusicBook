<template>
    <div class="sidebar-title">
      <h4>{{ naglowki }}</h4>
      <a href="#">Link</a>
    </div>

</template>

<script>
export default {
  props: ['naglowki'],


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

</style>