<template>
  <div class="edit-cinema-container">
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-editCinemaConfirm" @ok="onModalOk">
      <template v-slot:modal-title>
        <div v-if="cinema">
          <template>Confirming...</template>
        </div>
      </template>
      <div class>Are you sure you want to edit this cinema?</div>
    </b-modal>

    <b-modal id="modal-moviesList">
      <template v-slot:modal-title>
        <div>
          <template>Movies:</template>
        </div>
      </template>
      <form v-if="movies">
        <div v-for="movie in movies" :key="movie._id">
          <input
            type="checkbox"
            :id="movie.name"
            :value="movie._id"
            v-model="movieArray"
            class="mr-2"
          />
          <label :for="movie.name">{{movie.name}}</label>
        </div>
      </form>
    </b-modal>

    <div class="container" v-if="cinema">
      <h3 class="text-center mt-4 title">Editing...</h3>
      <div class="row mt-4">
        <div class="col-lg-10 mx-auto text-center position-relative">
          <form @submit.prevent>
            <div class="form-group">
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Name"
                v-model="editCinema.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="address"
                class="form-control"
                placeholder="Address"
                v-model="editCinema.address"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="province"
                class="form-control"
                placeholder="Province"
                v-model="editCinema.province"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="searchTerm"
                class="form-control"
                placeholder="SearchTerm"
                v-model="editCinema.searchTerm"
              />
            </div>
            <div class="form-group d-flex justify-content-between">
              <input type="text" id="movie" class="form-control input-movies" placeholder="Movies" />
              <div class="btn-movies m-1" v-b-modal="`modal-moviesList`">
                <b-icon icon="plus-square" aria-hidden="true" class="h4"></b-icon>
              </div>
            </div>
          </form>
          <button class="btn btn-success btn-edit" v-b-modal="`modal-editCinemaConfirm`">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";
import NavbarAdmin from "../../../../components/NavbarAdmin";

export default {
  components: {
    Loader,
    NavbarAdmin
  },
  data() {
    return {
      movieArray: [],
      editCinema: {
        name: "",
        address: "",
        searchTerm: "",
        province: ""
      }
    };
  },
  created() {
    this.$store.dispatch("fetchCinemaById", this.$route.params.id);
    this.$store.dispatch("fetchListMoviesByStatus", "showing");
  },
  computed: {
    cinema() {
      return this.$store.state.cinemas.data;
    },
    loading() {
      return this.$store.state.cinemas.loading;
    },
    movies() {
      return this.$store.state.movies.data;
    }
  },
  methods: {
    onModalOk() {
      this.editCinema.movieId = this.movieArray;
      this.$store.dispatch("fetchEditCinema", {
        _id: this.$route.params.id,
        cinema: this.editCinema
      });
    }
  },
  watch: {
    cinema(value) {
      if (value) {
        this.editCinema = value;
        this.movieArray = value.movieId;
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.edit-cinema-container {
  font-family: "Lato", sans-serif;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 10px;
}

.input-movies {
  width: 85%;
}

.btn-movies {
  width: 10%;
  cursor: pointer;
  outline: none;
  border: none;
}

@media (max-width: 667px) {
  .title {
    font-size: 35px;
  }

  form {
    grid-template-columns: repeat(1, 100%);
  }

  .btn-edit {
    right: 10%;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 30px;
  }
}

@media (max-width: 450px) {
  .title {
    font-size: 28px;
  }
}

@media (max-width: 320px) {
  .title {
    font-size: 24px;
  }
}
</style>