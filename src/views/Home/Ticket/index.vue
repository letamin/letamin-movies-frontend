<template>
  <div class="ticket-container">
    <NavbarHome />
    <router-view />
  </div>
</template>

<script>
import NavbarHome from "../../../components/NavbarHome";

export default {
  components: {
    NavbarHome
  },
  created() {
    if (!this.$store.state.login.token) {
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
.ticket-container {
  min-height: 100vh;
  background: url("../../../assets/background-ticket.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
