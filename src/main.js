import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import './assets/sass/style.scss'

var config = {
  apiKey: "AIzaSyCu5UzHKp13c_1nM7i1HhxZRtZ6XWOuq0k",
  authDomain: "twi-patch.firebaseapp.com",
  databaseURL: "https://twi-patch.firebaseio.com",
  projectId: "twi-patch",
  storageBucket: "twi-patch.appspot.com",
  messagingSenderId: "689705787436",
  appId: "1:689705787436:web:f95bb0e641338b9ffc7189",
  measurementId: "G-YL5TM232K0"
}
firebase.initializeApp(config)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
