<template>
  <div class>
    <NavbarAdmin />
    <Loader v-if="loading" />

    <b-modal id="modal-deleteContactConfirm" @ok="onModalOk" v-if="contact">
      <template v-slot:modal-title>
        <div>
          <template>Confirming...</template>
        </div>
      </template>
      <div>Are you sure you want to DELETE this contact?</div>
    </b-modal>

    <div class="contact-container container mt-4 mb-4 position-relative" v-if="contact">
      <div class="contact-title-container">
        <h1 class="contact-title contact-subject">{{contact.subject}}</h1>
      </div>
      <div class="contact-body-container">
        <div class="contact-info-container">
          <div class>
            <span class="font-weight-bold contact-title">From:</span>
            {{contact.name}}
          </div>
          <div class>
            <span class="font-weight-bold contact-title">Email:</span>
            {{contact.email}}
          </div>
        </div>
        <p class="mt-3">
          <span class="font-weight-bold contact-title">Message:</span>
          <br />
          {{contact.message}}
        </p>
      </div>

      <button class="btn btn-danger btn-delete mt-2" v-b-modal="`modal-deleteContactConfirm`">Delete</button>
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
  created() {
    this.$store.dispatch("fetchContactById", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.contacts.loading;
    },
    contact() {
      return this.$store.state.contacts.data;
    }
  },
  methods: {
    onModalOk() {
      this.$store.dispatch("fetchDeleteContact", this.$route.params.id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.contact-info-container {
  display: flex;
  justify-content: space-around;
}

.contact-container {
  padding: 20px;
  font-family: "Lato", sans-serif;
}

.contact-title {
  letter-spacing: 2px;
}

.btn-delete {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

a {
  text-decoration: none;
  color: white;
}

.contact-title-container {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #264653;
  color: white;
  border-radius: 5px;
}

.contact-body-container {
  background: #a8dadc;
  border-radius: 5px;
  padding: 20px;
}

@media (max-width: 525px) {
  .contact-info-container {
    flex-direction: column;
  }

  .contact-subject {
    font-size: 28px;
  }

  .contact-title-container {
    padding: 15px;
  }
}
</style>