<template>
  <div class="background">
    <NavbarHome />
    <router-view />
  </div>
</template>

<script>
import NavbarHome from "../../../components/NavbarHome";

export default {
  components: {
    NavbarHome
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

.background {
  min-height: 100vh;
  background: #faedcb;
  font-family: "Raleway", sans-serif;
}
</style>