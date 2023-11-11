<template>
  <nav class="nav">
    <div class="container">
      <router-link to="/" class="logo"><span>Co</span>ooking</router-link>

      <ul class="nav__list" :class="{'active': burger}">
        <li class="nav__item" >
          <router-link to="/" class="nav__link" @click="burger = !burger">Home</router-link>
        </li>
        <li class="nav__item" >
          <router-link to="/about" class="nav__link" @click="burger = !burger">About</router-link>
        </li>
        <li class="nav__item" >
          <router-link to="/contact" class="nav__link" @click="burger = !burger">Contact</router-link>
        </li>
      </ul>

      <div class="nav__burger" @click="burger = !burger" :class="{'active': burger}">
        <span class="line1 line"></span>
        <span v-show="!burger" class="line2 line"></span>
        <span class="line3 line"></span>
      </div>

    </div>
  </nav>

  <Header />


  <router-view />
</template>

<script>
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  data() {
    return {
      burger: false
    };
  },
  components: {
    Header,
  },
};
</script>
