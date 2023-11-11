<template>
  <Loader v-if="loadingStatus"/>

  <section v-else class="meals">
    <h1 class="meals__title title" v-show="noFound">Meals...</h1>

    <div class="container">
      <a href="#f" class="meals__browse" v-show="noFound">
        Browse by name
      </a>

      <p class="meals__search" v-show="!noFound">no dishes found</p>

      <div class="meals__cards">
        <div class="meals__card card" v-for="(meal, idx) in meals" :key="idx">
          <img :src="meal?.strMealThumb" alt="" class="meals__img" />
          <div class="meals__about">
            <h3 class="meals__name">{{ meal?.strMeal }}</h3>
            <div class="meals__tags">
              <router-link
                :to="`/area/${meal?.strArea}`"
                class="meals__tag"
                @click="$store.commit('setArea', meal?.strArea)"
                >#{{ meal?.strArea }}</router-link
              >

              <router-link
                :to="`/category/${meal?.strCategory}`"
                class="meals__tag"
                @click="$store.commit('setCategory', meal?.strCategory)"
                >#{{ meal?.strCategory }}</router-link
              >
            </div>
            <router-link
              :to="`/meals/${meal?.strMeal}`"
              class="meals__more"
              @click="$store.commit('setId', meals[idx])"
              >More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <Browse />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Browse from "@/components/browse/Browse.vue";
import Loader from "@/components/Loader/Loader.vue";

export default {
  name: "Home",
  components: {
    Browse,
    Loader,
  },
  methods: {
    ...mapActions(["getMeals"]),
  },
  computed: {
    ...mapState(["meals", "mealId", "alphabets", "loadingStatus"]),
    noFound() {
      if (this.meals?.length) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getMeals();
  },
};
</script>
