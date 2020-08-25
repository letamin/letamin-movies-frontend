<template>
  <div class="background">
    <Carousel :listPosters="listPosters" />
    <NavbarHome />
    <Movies :listMovies="listMovies" />
    <router-view />
  </div>
</template>

<script>
import Carousel from "../../components/Carousel";
import NavbarHome from "../../components/NavbarHome";
import Movies from "../../components/Movies";

export default {
  components: {
    Carousel,
    NavbarHome,
    Movies
  },
  data() {
    return {
      listPosters: null,
      listMovies: null
    };
  },
  created() {
    this.$store.dispatch("fetchListPosters");
    this.$store.dispatch("fetchListMoviesByStatus", "showing");
  },
  computed: {
    posters() {
      return this.$store.state.posters.data;
    },
    movies() {
      return this.$store.state.movies.data;
    }
  },
  watch: {
    posters(value) {
      this.listPosters = value;
    },
    movies(value) {
      this.listMovies = value;
    }
  }
};
</script>

<style scoped>
.background {
  background: #faedcb;
}
</style>
