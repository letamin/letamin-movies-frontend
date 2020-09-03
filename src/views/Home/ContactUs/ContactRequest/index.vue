<template>
  <div class="container mt-4">
    <Loader v-if="loading" />
    <h3 class="contact-title">Contact Us</h3>
    <h5 class="text-center mb-4 font-italic">Dont be shy, drop us a line!</h5>
    <div class="row">
      <div class="col-lg-9">
        <div class="alert alert-danger text-center" v-if="errors">
          <div class v-for="(error, index) in errors" :key="index">{{ error }}</div>
        </div>
        <form @submit.prevent>
          <div class="form-group">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <input
              type="phone"
              name="phone"
              id="phone"
              class="form-control"
              placeholder="Phone"
              v-model="phone"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="subject"
              id="subject"
              class="form-control"
              placeholder="Subject"
              v-model="subject"
            />
          </div>
          <div class="form-group p-1">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              class="contact-text-area"
              v-model="message"
            ></textarea>
          </div>
        </form>
        <div class="ml-auto">
          <button class="btn btn-danger btn-send" @click="handleContactSubmitForm">Send</button>
        </div>
      </div>
      <div class="col-lg-3 contact-information">
        <div class="m-1">
          <b-icon icon="geo-alt" aria-hidden="true"></b-icon>
          <h3 class="d-inline ml-3 mb-2 contact-information-title">Location</h3>
          <p class="mt-2">123, District 1, HCM city</p>
        </div>
        <div class="m-1">
          <b-icon icon="telephone-fill" aria-hidden="true"></b-icon>
          <h3 class="d-inline ml-3 mb-2 contact-information-title">Phone</h3>
          <p class="mt-2">(+84) 132 564 798</p>
        </div>
        <div class="m-1">
          <b-icon icon="envelope" aria-hidden="true"></b-icon>
          <h3 class="d-inline ml-3 mb-2 contact-information-title">Email</h3>
          <p class="mt-2">lethanhminh0901@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22702.22744502486!2d11.113366067229226!3d44.662878362361056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fc3eca9065c15%3A0x12ec8a03aadae866!2s40019+Sant&#39;Agata+Bolognese+BO%2C+Italy!5e0!3m2!1sen!2sin!4v1451281303075"
        allowfullscreen
      ></iframe>
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
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: ""
    };
  },
  computed: {
    loading() {
      return this.$store.state.contact.loading;
    },
    errors() {
      return this.$store.state.contact.err;
    }
  },
  methods: {
    handleContactSubmitForm() {
      if (!this.$store.state.login.token) {
        this.$router.replace("/login");
      }

      const formObj = {
        email: this.email,
        name: this.name,
        subject: this.subject,
        message: this.message,
        phone: this.phone || 0
      };

      this.$store.dispatch("fetchContactForm", formObj);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.contact-title {
  font-size: 56px;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  font-family: "Lato", sans-serif;
  line-height: 1.1;
}

.contact-text-area {
  width: 200%;
  border: none;
  resize: none;
  outline: none;
  padding: 0.8em;
  height: 12em;
  margin-top: 1em;
  letter-spacing: 1px;
  font-size: 14px;
}

.form-group:not(:last-child) {
  padding: 0.5em;
  background: transparent;
  border: none;
  color: #000;
  outline: none;
  letter-spacing: 1px;
  font-size: 14px;
}

form {
  display: grid;
  grid-template-columns: repeat(2, 45%);
}

.contact-information-title {
  margin-bottom: 10px;
  color: #00cdc1;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-send {
  padding: 12px 50px;
  outline: none;
  margin-top: 1em;
  color: #fff;
  border: none;
  letter-spacing: 1px;
  font-size: 16px;
  transition: all 0.5s ease;
  border-radius: 0;
}

.map-section iframe {
  width: 100%;
  height: 350px;
  border: 5px solid #fafafa;
  margin-top: 50px;
}

@media (max-width: 1080px) {
  .contact-title {
    font-size: 51px;
  }
}

@media (max-width: 991px) {
  .map-section iframe {
    height: 320px;
  }
  .contact-information {
    margin-top: 30px;
  }
}

@media (max-width: 800px) {
  .contact-title {
    font-size: 48px;
  }
}

@media (max-width: 667px) {
  .contact-title {
    font-size: 43px;
  }
}

@media (max-width: 568px) {
  .map-section iframe {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .map-section iframe {
    height: 250px;
  }

  .contact-title {
    font-size: 40px;
  }

  form {
    grid-template-columns: repeat(1, 100%);
  }

  .form-group {
    margin-bottom: 0.2rem;
  }

  .contact-text-area {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .contact-title {
    font-size: 35px;
  }
}

@media (max-width: 320px) {
  .map-section iframe {
    height: 200px;
  }
  .contact-title {
    font-size: 32px;
  }
}
</style>