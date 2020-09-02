<template>
  <div class="background">
    <NavbarHome />

    <div class="container mt-4">
      <h3 class="about-title">About us</h3>
      <div class="row">
        <div class="col-lg-6">
          <div class="about-img"></div>
        </div>
        <div class="col-lg-6 about-text-col">
          <h5 class="about-intro">
            A few words about
            <span style="color: #ff3535;">Letamin movies</span>
          </h5>
          <p
            class="about-text"
          >Masagni dolores eoquie int Basmodi temporant, ut laboreas dolore magnam aliquam kuytase uaeraquis autem vel eum iure reprehend.Unicmquam eius, Basmodi temurer sehsMunim.</p>
          <ul>
            <li>
              <b-icon icon="check2" aria-hidden="true" class="icon"></b-icon>Masagni dolores
            </li>
            <li>
              <b-icon icon="check2" aria-hidden="true" class="icon"></b-icon>Dolores
            </li>
            <li>
              <b-icon icon="check2" aria-hidden="true" class="icon"></b-icon>Eoquies
            </li>
            <li>
              <b-icon icon="check2" aria-hidden="true" class="icon"></b-icon>Basmodi
            </li>
          </ul>
          <button class="btn-contact">Contact Us</button>
        </div>
      </div>
      <h3 class="about-title mt-5">Gallery</h3>
      <div class="gallery mt-3 pb-5">
        <div class="gallery-1 gallery-img"></div>
        <div class="gallery-2 gallery-img"></div>
        <div class="gallery-3 gallery-img"></div>
        <div class="gallery-4 gallery-img"></div>
        <div class="gallery-5 gallery-img"></div>
        <div class="gallery-6 gallery-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from "../../../components/NavbarHome";

export default {
  components: {
    NavbarHome
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

img {
  max-width: 100%;
}

.background {
  min-height: 100vh;
  background: #faedcb;
}

.about-img {
  height: 405px;
  background: url("../../../assets/background-about.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-title {
  font-size: 56px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 0.8em;
  font-style: italic;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.18);
  font-family: "Lato", sans-serif;
  line-height: 1.1;
}

.about-intro {
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: #333;
}

.about-text {
  color: #545151;
  margin: 16px 0 25px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1px;
  font-size: 15px;
  line-height: 1.9em;
}

ul {
  list-style: none;
}

li {
  font-size: 14px;
  line-height: 1.9em;
  margin-top: 10px;
  letter-spacing: 1px;
  list-style: none;
  font-family: "Raleway", sans-serif;
  color: #545151;
}

.icon {
  color: red;
  margin-right: 10px;
}

.b-icon.bi {
  vertical-align: 0px;
}

.btn-contact {
  color: #fff;
  padding: 12px 30px;
  letter-spacing: 1px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 2px;
  transition: all 0.5s ease;
  background: #00cdc1;
  font-family: "Raleway", sans-serif;
}

.btn-contact:hover {
  background: black;
}

.gallery-1 {
  background: url("../../../assets/background-g1.jpg");
}

.gallery-2 {
  background: url("../../../assets/background-g2.jpg");
}

.gallery-3 {
  background: url("../../../assets/background-g3.jpg");
}

.gallery-4 {
  background: url("../../../assets/background-g4.jpg");
}

.gallery-5 {
  background: url("../../../assets/background-g5.jpg");
}

.gallery-6 {
  background: url("../../../assets/background-g6.jpg");
}

.gallery-img {
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.gallery {
  transition: all 0.4s;
  display: grid;
  grid-template-columns: repeat(3, auto);
}

@media (max-width: 1080px) {
  .about-title {
    font-size: 51px;
  }

  .about-text {
    font-size: 14px;
  }

  .about-intro {
    font-size: 27px;
  }
}

@media (max-width: 990px) {
  .about-text-col {
    margin-top: 20px;
  }
}

@media (max-width: 800px) {
  .about-title {
    font-size: 48px;
  }

  .btn-contact {
    padding: 11px 25px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 667px) {
  .about-title {
    font-size: 43px;
  }
}

@media (max-width: 480px) {
  .about-title {
    font-size: 40px;
  }

  .about-text {
    font-size: 13px;
  }

  .about-intro {
    font-size: 25px;
  }
}

@media (max-width: 450px) {
  .about-title {
    font-size: 35px;
  }

  .about-img {
    height: 280px;
  }

  .about-text {
    font-size: 12px;
  }

  li {
    font-size: 13px;
  }

  .about-intro {
    font-size: 23px;
  }

  .btn-contact {
    font-size: 13px;
    padding: 11px 20px;
  }

  .gallery {
    grid-template-columns: repeat(1, auto);
  }
}

@media (max-width: 320px) {
  .about-title {
    font-size: 32px;
  }

  .about-intro {
    font-size: 20px;
  }
}
</style>