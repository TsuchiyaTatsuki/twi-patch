<template>
  <div id="movie">
    <div class="my-2">
      <v-btn text small @click="demo()">test</v-btn>
    </div>
  </div>
</template>

<script>
import TwiService from "../server/TwiService";
export default {
  methods: {
      demo() {
        TwiService.getTimeline(this.$store.getters.user)
      }
  }
};
</script>

<style>
</style>