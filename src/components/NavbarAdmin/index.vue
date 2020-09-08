<template>
  <div class="custom-container">
    <div class="container">
      <b-navbar toggleable="lg" type="light">
        <div class="brand-container">
          <b-navbar-brand href="/" class="nav-brand">
            Movies
            <b-icon icon="film" aria-hidden="true"></b-icon>
          </b-navbar-brand>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/admin/movies">Movies</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/admin/cinemas">Cinemas</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/admin/promotions">Promotions</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/admin/contacts">Contacts</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      event.target.parentElement.classList.remove("show");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.brand-container {
  width: 30%;
}

.nav-brand {
  font-weight: 500;
  font-size: 2em;
  letter-spacing: 2.5px;
  font-family: "Lobster", sans-serif;
  display: inline;
}

.nav-brand:hover {
  background: #f4a261;
}

.custom-container {
  z-index: 100;
  background: #f4a261;
}

em {
  color: black;
  font-weight: 500;
  transition: all 0.4s;
}

ul {
  width: 100%;
  justify-content: space-around;
}

li {
  font-size: 16px;
  letter-spacing: 1.5px;
  text-align: center;
}

a {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  list-style: none;
  text-decoration: none;
}

a:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}
</style>
