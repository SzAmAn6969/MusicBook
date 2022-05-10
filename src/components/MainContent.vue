<template>
  <div class="main-content">
    <WavesurferComponent :key="key"/>
    <br/>
    <br/>
    `<ExplanationComponent />
  </div>
</template>
<script>
import WavesurferComponent from '@/components/WavesurferComponent.vue'
import ExplanationComponent from '@/components/ExplanationComponent.vue'


export default {
  components: {
    WavesurferComponent,
    ExplanationComponent
  }
}
</script>
<style scoped>

.main-content{
  padding: 50px;
}
</style>