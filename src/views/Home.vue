<template>
  <v-app id="home">
    <AppBar/>
    <v-content style="background-color: #F0F0F0">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          {{user}}
          <router-view/>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "../components/assists/AppBar";
import firebase from "firebase";
import TwiService from "../server/TwiService";
export default {
  name: "Home",
  components: {
    AppBar,
  },
  data: () => ({
    user: {},
    overlay: false
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {};
      if (!user) {
        this.$router.push({ path: "/" });
      }
    });
  },
  methods: {
    // async login() {
    //   this.overlay = true;
    //   const provider = new firebase.auth.TwitterAuthProvider();
    //   await firebase.auth().signInWithPopup(provider);
    //   this.overlay = false;
    //   this.$router.push({ path: "/Home" });
    // }
  }
};
</script>
<style>
#home {
  font-family: "tanuki", "ヒラギノ丸ゴ Pro W4", "ヒラギノ丸ゴ Pro",
    "Hiragino Maru Gothic Pro", "ヒラギノ角ゴ Pro W3",
    "Hiragino Kaku Gothic Pro", "HG丸ｺﾞｼｯｸM-PRO", "HGMaruGothicMPRO";
  /* font-size: 50px; */
}
</style>