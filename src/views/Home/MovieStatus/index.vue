<template>
  <div class="background">
    <NavbarHome />
    <Movies :listMovies="listMovies" :status="status" />
  </div>
</template>

<script>
import Movies from "../../../components/Movies";
import NavbarHome from "../../../components/NavbarHome";

export default {
  components: {
    Movies,
    NavbarHome
  },
  data() {
    return {
      listMovies: null
    };
  },
  created() {
    this.$store.dispatch("fetchListMoviesByStatus", this.$route.params.status);
  },
  computed: {
    movies() {
      return this.$store.state.movies.data;
    },
    status() {
      if (this.$route.params.status == "showing") return "Now Showing";
      else return "Coming Soon";
    }
  },
  watch: {
    movies(value) {
      this.listMovies = value;
    },
    $route() {
      this.$store.dispatch(
        "fetchListMoviesByStatus",
        this.$route.params.status
      );
    }
  }
};
</script>

<style scoped>
.background {
  min-height: 100vh;
  background: url("../../../assets/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
