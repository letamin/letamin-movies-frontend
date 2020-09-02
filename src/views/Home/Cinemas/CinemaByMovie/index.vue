<template>
  <div class="container text-center">
    <Loader v-if="loading" />
    <div class="row m-5" v-if="cinemas && movie">
      <div class="text-center col-sm-6">
        <h3 class="text-light">{{movie.name}}</h3>
        <div class>
          <img :src="movie.poster" alt="movie poster" />
        </div>
      </div>
      <div class="col-sm-6">
        <h3 class="text-light">Available at:</h3>
        <div class="d-flex justify-content-center align-items-center">
          <template v-for="cinema in cinemas">
            <b-link
              class="btn-cinema m-2"
              :key="cinema._id"
              :to="`/cinemas/details/${cinema._id}`"
            >{{cinema.name}}</b-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchCinemasByMovie", this.$route.params.id);
    this.$store.dispatch("fetchMoviesById", this.$route.params.id);
  },
  computed: {
    cinemas() {
      return this.$store.state.cinemas.data;
    },
    loading() {
      return this.$store.state.cinemas.loading;
    },
    movie() {
      return this.$store.state.movies.data;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.btn-cinema {
  background: #fdfcf0;
  border-radius: 4px;
  color: black;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
}

.btn-cinema:hover {
  opacity: 0.8;
}
</style>