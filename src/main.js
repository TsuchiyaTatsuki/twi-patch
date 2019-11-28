import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import './assets/sass/style.scss'
// test
// const dialog = require('electron').dialog;

// const OauthTwitter = require('electron-oauth-twitter');

// const twitter = new OauthTwitter({
//   key: "cWCUJKmseFc3ee5yIJjJigc7A",
//   secret: "yPEzWmBreqAlcYnL2UYTXlr2p4wrLNZBLZBUWrfZJOD0gQc3td",
// });

// twitter.startRequest()
//   .then((result) => {
//     dialog.showErrorBox('Status', 'Token: ' + result.oauth_access_token + '\nSecret: ' + result.oauth_access_token_secret);
//   }).catch((error) => {
//     console.error(error, error.stack);
//   });
// test

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
const firebaseApp = firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  user = user ? user : {};
  store.commit('onAuthStateChanged', user);
  store.commit('onUserStatusChanged', user.uid ? true : false);
});
firebase.auth().getRedirectResult().then(function (result) {
  if (result.user) {
    var user = result.user
    var userName = result.additionalUserInfo.username
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    writeUserData(user, userName, token, secret)
  }
}).catch(function (error) {
  console.log(error)
});
function writeUserData(user, userName, token, secret) {
  var database = firebaseApp.firestore();
  database.collection('users').doc(userName).set({
    id: user.uid,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    token: token,
    secret: secret
  });
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
