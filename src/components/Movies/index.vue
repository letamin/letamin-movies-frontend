<template>
  <div class="container position-relative">
    <h1 class="text-center m-4 title text-light" v-if="status">{{status}}</h1>
    <h1 class="text-center m-4 title" v-else>Welcome</h1>
    <Loader v-if="loading" />
    <div class="row" v-else>
      <div class="col-lg-3 col-md-6" v-for="movie in listMovies" :key="movie._id">
        <b-card
          overlay
          :img-src="movie.poster"
          img-alt="Image"
          img-top
          style="max-width: 15rem;"
          class="mb-4 position-relative"
        >
          <b-link
            class="btn btn-details"
            :to="`/details/${movie._id}`"
            :class="{'btn-details-only': movie.status==`coming-soon` }"
          >Details</b-link>
          <b-link class="btn btn-buy" v-if="movie.status==`showing`">Buy Ticket</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../Loader";

export default {
  props: ["listMovies", "status"],
  components: {
    Loader
  },
  computed: {
    loading() {
      return this.$store.state.movies.loading;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.card {
  margin: 0 auto;
}

.card-img-top {
  max-width: 100%;
  height: 355px;
  width: 240px;
}

.title {
  font-family: "Lato", sans-serif;
  font-size: 56px;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  line-height: 1.1;
}

.card-title {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
}

.card-body {
  text-align: center;
  padding: 1rem;
}

.btn-details,
.btn-buy {
  outline: none;
  border: none;
  background: #e76f51;
  margin: 0.2em;
  color: #fff;
  position: absolute;
  bottom: 7%;
  display: none;
}

.card-body:hover .btn-details,
.card-body:hover .btn-buy {
  display: block;
}

.btn-buy {
  background: #2a9d8f;
  right: 10%;
}

.btn-details {
  left: 10%;
}

.btn-details-only {
  left: 35%;
}

.btn-details:hover,
.btn-buy:hover {
  opacity: 0.9;
}

.container {
  min-height: 200px;
}

@media (max-width: 1080px) {
  .title {
    font-size: 51px;
  }
}

@media (max-width: 800px) {
  .title {
    font-size: 48px;
  }
}

@media (max-width: 667px) {
  .title {
    font-size: 43px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 40px;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 35px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 32px;
  }
}
</style>