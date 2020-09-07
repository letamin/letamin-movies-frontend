<template>
  <div class>
    <Loader v-if="loading" />

    <div class="container">
      <h1 class="text-center mt-4 title">Contacts</h1>
      <div class="table-responsive">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact._id">
              <td>
                <span class="font-weight-bold">{{contact.name}}</span>
              </td>
              <td>{{contact.subject}}</td>
              <td>
                <router-link
                  class="btn btn-success"
                  :to="`/admin/contacts/details/${contact._id}`"
                >Details</router-link>
                <router-link
                  class="btn btn-danger ml-2 btn-delete"
                  :to="`/admin/contacts/delete/${contact._id}`"
                >Delete</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../../../components/Loader";

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchGetAllContacts");
  },
  computed: {
    contacts() {
      return this.$store.state.contacts.data;
    },
    loading() {
      return this.$store.state.contacts.loading;
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