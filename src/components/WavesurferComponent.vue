<template>
  <div>
    <h1>{{ store.state.zagrywki[obecnaZagrywka].name }}</h1>
    <br>
    {{ store.state.zagrywki[obecnaZagrywka].tag }}
    <div ref="waveform1"></div>
    <div ref="waveform2"></div>
    <button @click="playHarp" class="playharp">PLAY HARP</button>
    <button @click="playGuitar" class="playguitar">PLAY GUITAR</button>
    <button @click="playAll" class="playall">PLAY ALL</button>

  </div>
</template>

<script>
import store from '../store'
import WaveSurfer from 'wavesurfer.js'

var zagrywki = store.state.zagrywki
var obecnaZagrywka = store.state.obecnaZagrywka


export default {
  data () {
    return {
    trigger: true,
    store,
    obecnaZagrywka

    }
  },
  methods: {
    playHarp () {
    this.wavesurfer1.playPause()
    },
    playGuitar () {
    this.wavesurfer2.playPause()
    },
    playAll () {
    this.wavesurfer1.playPause()
    this.wavesurfer2.playPause()
    },
  
    seekAndSetPosition (ws1, ws2, position) {
      if (this.trigger){
        this.trigger = false
        var currentTime = position * ws1.getDuration()
        ws2.seekTo(position)
        console.log(currentTime)
      }
    },

    // seek1: this.wavesurfer1.on('seek', function (position) {
    //   this.seekAndSetPosition(this.wavesurfer1,this.wavesurfer2,position)
    // })



  },
  mounted () {
    this.$nextTick(() => {
      this.wavesurfer1 = WaveSurfer.create({
          container: this.$refs.waveform1,
          waveColor: 'black',
          progressColor: 'purple',
          hideScrollbar: true,
          backend: 'MediaElement'
      })
      this.wavesurfer1.load(zagrywki[0].harmonicaSrc);

      this.wavesurfer2 = WaveSurfer.create({
          container: this.$refs.waveform2,
          waveColor: 'black',
          progressColor: 'purple',
          hideScrollbar: true,
          backend: 'MediaElement'
      })
      this.wavesurfer2.load(zagrywki[0].backingTrackSrc);
    })
  },
}

</script>

<style scoped>


</style>
