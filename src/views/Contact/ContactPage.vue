<template>
  <div class="contact">
    <div class="container">
      <h2 class="contact__title title">Contact us</h2>

      <div class="contact__cards">
        <div class="contact__meet contact__card">
          <h3 class="contact__meet-title contact__title">Meet us</h3>

          <div class="contact__meet-con">
            <a :href="'tel:' + info.phoneNum" class="contact__meet-cellphone"
              ><telephone /> {{ info.phoneNum }}
            </a>

            <a :href="'mailto:' + info.mail" class="contact__meet-mail"
              ><At /> {{ info.mail }}
            </a>
          </div>
        </div>

        <div class="contact__find contact__card">

          <h3 class="contact__find-title contact__title">You can find us On...</h3>

            <ul class="contact__find-list">
                <li class="contact__find-item" v-for="(social, idx) in socials" :key="idx">
                  <img :src="social.icon" alt="" class="contact__icon">
                  <a :href="social.src" target="_blank" class="contact__link">{{ social.name }}</a>
                </li>
            </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import At from "@/assets/img/at.vue";
import telephone from "@/assets/img/telephone.vue";
import { mapState } from "vuex";

export default {
  name: "Contact",
  components: {
    telephone,
    At,
  },
  computed: {
    ...mapState(['info', 'socials']),
  },
};
</script>
