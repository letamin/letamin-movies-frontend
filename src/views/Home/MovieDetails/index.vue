<template>
  <div class="background">
    <NavbarHome />
    <div class="container mt-5">
      <Loader v-if="loading" />
      <div class="row container-movie-details" v-else>
        <div class="col-sm-12">
          <b-card
            no-body
            class="overflow-hidden mx-auto"
            style="max-width: 540px;"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="movie.poster"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="movie.name">
                  <b-card-text>
                    <span class="font-weight-bold">Genre:</span>
                    {{ movie.genre }}
                  </b-card-text>
                  <b-card-text>
                    <span class="font-weight-bold">Language:</span>
                    {{ movie.language }}
                  </b-card-text>
                  <b-card-text>
                    <span class="font-weight-bold">Time:</span>
                    {{ movie.time }} minutes
                  </b-card-text>
                  <b-card-text>
                    <span class="font-weight-bold">Rate:</span>
                    {{ movie.rated }}
                  </b-card-text>
                  <a
                    class="btn btn-trailer"
                    :href="movie.trailer"
                    target="_blank"
                    :class="{
                      'btn-trailer-only': movie.status == `coming-soon`
                    }"
                    >Trailer</a
                  >
                  <b-link
                    class="btn btn-buy"
                    v-if="movie.status == `showing`"
                    :to="`/cinemas/movie/${movie._id}`"
                    >Buy Ticket</b-link
                  >
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <p class="mt-5 movie-description">{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from "../../../components/NavbarHome";
import Loader from "../../../components/Loader";

export default {
  components: {
    Loader,
    NavbarHome
  },
  created() {
    this.$store.dispatch("fetchMoviesById", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.movies.loading;
    },
    movie() {
      return this.$store.state.movies.data;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-buy,
.btn-trailer {
  font-family: "Lato", sans-serif;
  position: absolute;
  bottom: 10%;
  color: #fff;
  display: block;
}

.btn-buy {
  background: #2a9d8f;
  left: 15%;
}

.btn-trailer {
  background: #e76f51;
  right: 15%;
}

.btn-buy:hover,
.btn-trailer:hover {
  color: #fff;
  opacity: 0.9;
}

.background {
  min-height: 100vh;
  position: relative;
  background: url("../../../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.btn-trailer-only {
  right: 35%;
}

.movie-description {
  font-family: "Lato", sans-serif;
  font-weight: 400;
}

@media (max-width: 768px) {
  .card-body {
    min-height: 250px;
    padding-bottom: 0.5em;
  }
  .card-text {
    margin-bottom: 0.5em;
  }
  .btn-buy,
  .btn-trailer {
    bottom: 7%;
  }
  .movie-description {
    font-size: 1em;
  }
  .card {
    width: 400px;
  }
  img {
    height: 500px;
  }
  .movie-description {
    margin-top: 30px !important;
  }
}

@media (max-width: 425px) {
  .card {
    width: 300px;
  }
  img {
    height: 400px;
  }
}
</style>
