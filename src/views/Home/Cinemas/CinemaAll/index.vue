<template>
  <div class="container">
    <Loader v-if="loading" />
    <b-nav-form class="mt-4">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
        v-model="searchTerm"
      ></b-form-input>
    </b-nav-form>
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
                :to="`/cinemas/details/${cinema._id}`"
                >Details</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Loader from "../../../../components/Loader";

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
tr {
  color: #fff;
}

.table-hover tbody tr:hover {
  color: #fff;
}

.form-inline {
  justify-content: flex-end;
}

.table {
  width: auto;
  margin: 0 auto;
}
</style>
