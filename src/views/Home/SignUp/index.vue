<template>
  <div class="signup-container">
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

<style>
.signup-container {
  height: 100vh;
  background: url("../../../assets/background-login.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
