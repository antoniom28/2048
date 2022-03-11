<template>
  <div id="app">
    <Header @newGame = "newGame()"/>

    <Main :restart = "restart"/>

   <!-- <Footer /> -->
  </div>
</template>

<script>
//import axios from "axios";
import Main from "./components/macro/Main.vue";
import Footer from "./components/macro/Footer.vue";
import Header from "./components/macro/Header.vue";

export default {
  name: "App",
  data() {
    return {
      inputText: "a caso",
      restart: false,
    };
  },
  methods: {
      newGame(){
        this.restart = true;
        setTimeout(() => {
          this.restart = false;
        }, 0);
      },
  },
  components: {
    Main,
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/style/globals.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
