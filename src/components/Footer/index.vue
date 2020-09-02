<template>
  <footer class="footer-container mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <b-link href="/" class="footer-brand">
            Movies
            <b-icon icon="film" aria-hidden="true"></b-icon>
          </b-link>
          <p>Letamin Movies is the largest multiplex cinema chain in South Korea and also has branches in China, Indonesia, Myanmar, Turkey, Vietnam and United State!</p>
        </div>
        <div class="col-md-4 col-lg-4 offset-lg-1 footer-contact">
          <h3 class="footer-header">Contact</h3>
          <div class="mt-1">
            <b-icon icon="geo-alt" aria-hidden="true"></b-icon>
            <span class="ml-2">Location: 123, District 1, HCM city</span>
          </div>
          <div class="mt-1">
            <b-icon icon="telephone-fill" aria-hidden="true"></b-icon>
            <span class="ml-2">Telephone: (+84) 132 564 798</span>
          </div>
          <div class="mt-1">
            <b-icon icon="envelope" aria-hidden="true"></b-icon>
            <span class="ml-2">Email: lethanhminh0901@gmail.com</span>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 footer-follow">
          <h3 class="footer-header">Follow us</h3>
          <div class="d-flex">
            <div class="footer-icon">
              <a href="https://www.facebook.com" target="_blank">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="2x" />
              </a>
            </div>
            <div class="footer-icon">
              <a href="https://twitter.com" target="_blank">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="2x" />
              </a>
            </div>
            <div class="footer-icon">
              <a href="https://www.instagram.com" target="_blank">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.footer-container {
  background: #f4a261;
  padding: 30px 0;
}

a {
  text-decoration: none;
}

.footer-brand,
.footer-header {
  color: black;
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 2.5px;
  font-family: "Lobster", sans-serif;
  display: inline;
}

.footer-header {
  text-align: center;
}

svg {
  color: black;
}

.footer-icon {
  margin: 10px 20px 20px 0;
}

.footer-icon:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-follow {
    margin-top: 20px;
  }
}
</style>
