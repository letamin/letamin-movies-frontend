<template>
  <div class="container">
    <Loader v-if="loading" />

    <div class="mt-4 d-flex justify-content-center">
      <b-form-input
        size="sm"
        class="mr-sm-2 w-25 search-box"
        placeholder="Search"
        v-model="searchTerm"
      ></b-form-input>
      <a href="/admin/cinemas/add">
        <button class="btn btn-success btn-add">Add</button>
      </a>
    </div>

    <h1 class="text-center mt-4 title">Cinemas</h1>
    <div class="table-responsive">
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Province</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cinema in filteredCinema" :key="cinema._id">
            <td>
              <span class="font-weight-bold">{{ cinema.name }}</span>
            </td>
            <td>{{ cinema.province }}</td>
            <td>
              <router-link
                class="btn btn-success"
                :to="`/admin/cinemas/edit/${cinema._id}`"
                >Edit</router-link
              >
              <router-link
                class="btn btn-danger ml-2 btn-delete"
                :to="`/admin/cinemas/delete/${cinema._id}`"
                >Delete</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/Loader";

export default {
  components: {
    Loader
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  created() {
    this.$store.dispatch("fetchListCinemas");
  },
  computed: {
    loading() {
      return this.$store.state.cinemas.loading;
    },
    cinemas() {
      return this.$store.state.cinemas.data;
    },
    filteredCinema() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, "gi");
        return this.cinemas.filter(cinema =>
          (cinema.name + cinema.address + cinema.searchTerm).match(regexp)
        );
      }
      return this.cinemas;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.title {
  font-family: "Lato", sans-serif;
  font-size: 56px;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  line-height: 1.1;
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

  .search-box {
    width: 50% !important;
  }

  .btn-add {
    margin-left: 20px;
  }
}

@media (max-width: 667px) {
  .title {
    font-size: 43px;
  }
}

@media (max-width: 525px) {
  .btn-delete {
    margin-top: 10px;
    margin-left: 0px !important;
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
