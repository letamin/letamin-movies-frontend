<template>
  <div class="background">
    <NavbarHome />
    <div class="container">
      <Loader v-if="loading" />
      <b-nav-form class="mt-4">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchTerm"></b-form-input>
      </b-nav-form>
      <table class="table table-hover m-4">
        <thead class>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Province</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cinema in filteredCinema" :key="cinema._id">
            <td>
              <span class="font-weight-bold">{{cinema.name}}</span>
            </td>
            <td>{{cinema.address}}</td>
            <td>{{cinema.province}}</td>
            <td>
              <button class="btn btn-success">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/Loader";
import NavbarHome from "../../../components/NavbarHome";

export default {
  components: {
    Loader,
    NavbarHome
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
.background {
  min-height: 100vh;
  background: url("../../../assets/background-cinema.jpg");
  background-position: center;
  background-size: cover;
}

tr {
  color: #fff;
}

.table-hover tbody tr:hover {
  color: #fff;
}

.form-inline {
  justify-content: flex-end;
}
</style>