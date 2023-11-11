<template>
  <section class="mealPage">
    <div class="container">
      <div class="mealPage__about">
        <div class="mealPage__main">
          <img :src="mealId?.strMealThumb" alt="" class="mealPage__img" />

          <div class="mealPage__info">
            <h2 class="mealPage__title">{{ mealId?.strMeal }}</h2>
            <p class="mealPage__inst">
              <span>Category:</span>
              <router-link
              :to="`/category/${mealId?.strCategory}`"
              class="mealPage__category"
              @click="$store.commit('setCategory', mealId?.strCategory)"
              > {{ mealId?.strCategory }}</router-link
            >
            </p>
            <p class="mealPage__inst">
              <span>Area:</span>
              <router-link
              :to="`/area/${mealId?.strArea}`"
              class="mealPage__area"
              @click="$store.commit('setArea', mealId?.strArea)"
              > {{ mealId?.strArea }}</router-link
            >
            </p>
            <!-- <router-link
              :to="`/area/${mealId?.strArea}`"
              class="meals__area"
              @click="$store.commit('setArea', mealId?.strArea)"
              ><span>Category:</span> {{ mealId?.strArea }}</router-link
            > -->
            <p class="mealPage__cook">
              How to cook <span>{{ mealId?.strMeal }}</span
              >?
            </p>
            <p class="mealPage__txt">{{ mealId?.strInstructions }}</p>
          </div>
        </div>

        <div class="mealPage__more">
          <ul class="mealPage__ingredients">
            <li class="mealPage__ingredients-intro">Ingredients</li>
            <li class="mealPage__ingredient" v-for="(item, index) in 20">
              <span
                v-if="
                  mealId[`strMeasure${index + 1}`] &&
                  mealId[`strIngredient${index + 1}`]
                "
              >
                ◾️ <b>{{ mealId[`strIngredient${index + 1}`] }}:</b>
                {{ mealId[`strMeasure${index + 1}`] }}
              </span>
            </li>
          </ul>

          <p class="mealPage__YT">
            Can't cook for yourself? Then watch the
            <a :href="mealId?.strYoutube" target="_blank">YouTube video</a> and
            try again!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapState(["mealId"]),
  },
};
</script>
