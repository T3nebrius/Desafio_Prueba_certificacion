<template>
  <NavBarComponente />
  <router-view/>
</template>

<script>
import NavBarComponente from "./components/NavBarComponente.vue";

export default {
  components: { NavBarComponente },
  async mounted(){
    await this.$store.dispatch("fetchTodaFauna")
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
