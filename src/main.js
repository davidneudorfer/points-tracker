import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from '@/firebase.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    created() {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    },
    render: h => h(App),
  })
  unsubscribe()
})
