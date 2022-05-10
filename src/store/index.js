import { createStore } from 'vuex'

export default createStore({
  state: {
    zagrywki: [
      {
        id: 1,
        name: 'Zagrywka 1',
        tag: 'Blues',
        harmonicaSrc: require('../assets/zagrywka-1-harmonijka.wav'),
        backingTrackSrc: require('../assets/zagrywka-1-pianino.wav'),
        tabSrc: require('../assets/tab-zagrywka-1.jpeg')
      },
      {
        id: 2,
        name: 'Zagrywka 2',
        tag: 'Jazz',
        harmonicaSrc: require('../assets/zagrywka-1-harmonijka.wav'),
        backingTrackSrc: require('../assets/zagrywka-1-pianino.wav'),
        tabSrc: require('../assets/tab-zagrywka-2.jpeg')
      },
      {
        id: 3,
        name: 'Zagrywka 3',
        tag: 'Rock',
        harmonicaSrc: require('../assets/zagrywka-1-harmonijka.wav'),
        backingTrackSrc: require('../assets/zagrywka-1-pianino.wav'),
        tabSrc: require('../assets/tab-zagrywka-3.jpeg')
      },
      {
        id: 4,
        name: 'Zagrywka 4',
        tag: 'Disco Polo',
        harmonicaSrc: require('../assets/zagrywka-1-harmonijka.wav'),
        backingTrackSrc: require('../assets/zagrywka-1-pianino.wav'),
        tabSrc: require('../assets/tab-zagrywka-3.jpeg')
      }
    ],

    naglowki: ['Lekcja', 'Reklama', "Czat"],

    obecnaZagrywka: 2,
    key: 0

  },
  getters: {
  },
  mutations: {
    zmienNumerZagrywki (state, numerZagrywki) {
      state.obecnaZagrywka = numerZagrywki;
    },
    zmienKey(state){
      state.key++
    }
  },
  actions: {
  },
  modules: {
  }
})
