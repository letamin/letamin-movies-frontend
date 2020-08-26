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
.background {
  min-height: 100vh;
  background: url("../../../assets/background-cinema.jpg");
  background-position: center;
  background-size: cover;
}
</style>