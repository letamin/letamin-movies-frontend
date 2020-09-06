<template>
  <div class>
    <NavbarAdmin />
    <router-view />
  </div>
</template>

<script>
import NavbarAdmin from "../../components/NavbarAdmin";

export default {
  components: {
    NavbarAdmin
  },
  beforeCreate() {
    if (!this.$store.state.login.token) {
      this.$router.replace("/login");
    }
  }
};
</script>

<style></style>
