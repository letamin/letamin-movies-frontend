<template>
  <div class>
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-deleteCinemaConfirm" @ok="onModalOk" v-if="cinema">
      <template v-slot:modal-title>
        <div>
          <template>Confirming...</template>
        </div>
      </template>
      <div>Are you sure you want to DELETE this cinema?</div>
    </b-modal>

    <div class="container">
      <div class="table-responsive" v-if="cinema">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Province</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="font-weight-bold">{{ cinema.name }}</span>
              </td>
              <td>{{ cinema.province }}</td>
              <td>
                <button class="btn btn-danger ml-2" v-b-modal="`modal-deleteCinemaConfirm`">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  beforeCreate() {
    if (!this.$store.state.login.token) {
      this.$router.replace("/");
    }
  },
  created() {
    this.$store.dispatch("fetchCinemaById", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.cinemas.loading;
    },
    cinema() {
      return this.$store.state.cinemas.data;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchDeleteCinema", this.$route.params.id);
    }
  }
};
</script>

<style></style>
