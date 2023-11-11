import axios from 'axios';
import { createStore } from 'vuex'
import createPersistedState from "vuex-plugin-persistedstate";


export default createStore({
  state: {
    meals: null,
    mealId: null,
    info: {
      phoneNum: '+998900929477',
      mail: "salohiddinov.mm@gmail.com",
    },
    socials: {
      telegram: {
        name: "Telegram",
        src: "https://telegram.me/maga_me",
        icon: require("@/assets/img/telegram.svg")
      },
      tiktok: {
        name: "TikTok",
        src: "https://www.tiktok.com/",
        icon: require("@/assets/img/tiktok.svg")
      },
      youtube: {
        name: "YouTube",
        src: "https://www.youtube.com/watch?v=_1YwHbjELJI",
        icon: require("@/assets/img/youtube.svg")
      },
      instagram: {
        name: "Instagram",
        src: "https://www.instagram.com/",
        icon: require("@/assets/img/instagram.svg")
      },
      
    },
    letter: 's',
    alphabets: [
      { letter: "a" },
      { letter: "b" },
      { letter: "c" },
      { letter: "d" },
      { letter: "e" },
      { letter: "f" },
      { letter: "g" },
      { letter: "h" },
      { letter: "i" },
      { letter: "j" },
      { letter: "k" },
      { letter: "l" },
      { letter: "m" },
      { letter: "n" },
      { letter: "o" },
      { letter: "p" },
      { letter: "q" },
      { letter: "r" },
      { letter: "s" },
      { letter: "t" },
      { letter: "u" },
      { letter: "v" },
      { letter: "w" },
      { letter: "x" },
      { letter: "y" },
      { letter: "z" },
    ],
    area: [],
    category: [],
    loadingStatus: false
  },
  getters: {},
  mutations: {
    setMeals(state, meal) {
      state.meals = meal;
    },
    setId(state, id) {
        state.mealId = id;
        
        // let www = state.meals.filter((item) => item.idMeal == id.idMeal)
        
        // state.mealId = www
    },
    setLetter(state, letter) {
      state.letter = letter 
    },
    setArea(state, areaName) {
      let areaGroup = state.meals?.filter(item => item?.strArea == areaName)
      
      if (state.area.length) {
        state.area = []
        state.area.push(areaGroup, areaName)
      } else {
        state.area.push(areaGroup, areaName)
      }
    },
    setCategory(state, categoryName) {
      let categoryGroup = state.meals?.filter(item => item?.strCategory == categoryName)
      
      if (state.category.length) {
        state.category = []
        state.category.push(categoryGroup, categoryName)
      } else {
        state.category.push(categoryGroup, categoryName)
      }
    },
    loadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus
    }
  },
  actions: {
    async getMeals({ commit, state }, meal) {
      commit('loadingStatus', true)

      try {
        let letterChange = state.letter
        let mealList = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letterChange}`)
        let meals = mealList.data.meals
        commit("setMeals", meals);
        commit('loadingStatus', false)

      } catch (error) {
        console.error("Error", error);
      }
    },
  },
  modules: {},
  plugins: [createPersistedState()]
});
