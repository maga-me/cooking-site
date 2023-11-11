<template>
  <section class="Category">
    <div class="container">
      <h2 class="category__name title">{{ category[1] }}</h2>

      <div class="meals__cards">
        <div class="meals__card" v-for="(meal, idx) in category[0]" :key="idx">
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
              @click="$store.commit('setId', meal)"
              >More</router-link
            >

            <!-- can't find mealPage ing. (store. 73-79) -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { mapState } from "vuex";


export default {
  name: "Category",
  computed: {
    ...mapState(["category"]),
  },
};
</script>
