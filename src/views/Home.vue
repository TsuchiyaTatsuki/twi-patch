<template>
  <v-app id="home">
    <AppBar @logout="logout" />
    <v-content style="background-color: #F0F0F0">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "../components/assists/AppBar";
import firebase from "firebase";
export default {
  name: "Home",
  components: {
    AppBar
  },
  data: () => ({
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  // created() {

  // },
  methods: {
    async logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log('signout')
        })
        .catch(function(error) {
          console.log(error)
        });
    }
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