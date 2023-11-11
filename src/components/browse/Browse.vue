<template>
  <section class="alphabets" id="f">
    <h3 class="alphabets__title title">Browse By Name</h3>

    <ul class="alphabets__list">
      <li
        class="alphabets__item"
        v-for="(letter, index) in alphabets"
        :key="index"
        @click="$store.commit('setLetter', alphabets[index].letter)"
      >
        <form>
          <button class="alphabets__link">
            {{ letter.letter }}
          </button>
        </form>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Browse",
  computed: {
    ...mapState(["meals", "alphabets"]),
    noFound() {
      if (this.meals.length) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
