<template>
  <header>
    <div class="logo">
      <img @click="$router.push('/')" src="../assets/logo.svg" />
    </div>
    <label class="modeSwitch">
      <input type="checkbox" :checked="isDarkMode" @change="modeSwitch" />
      <span class="slider round"></span>
    </label>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LayoutHeader",
  methods: {
    ...mapActions(["modeCheck", "modeSwitch"]),
  },
  computed: mapGetters(["isDarkMode"]),
  created() {
    this.modeCheck();
  },
  /* data() {
    return {
      modeSwitch: false,
    };
  },
  watch: {
    modeSwitch(newValue) {
      if (newValue) {
        document.querySelector("body").classList.add("darkMode");
      } else {
        document.querySelector("body").classList.remove("darkMode");
      }
    },
  }, */
};
</script>

<style scoped>
#app header {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#app header .logo {
  margin-top: 10px;
  cursor: pointer;
}
#app header .modeSwitch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  margin-right: 28px;
}
#app header .modeSwitch:before {
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: -36px;
  transform: translateY(-50%);
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/icon-sun.svg") no-repeat center center;
}
#app header .modeSwitch:after {
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: -32px;
  transform: translateY(-50%);
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/icon-moon.svg") no-repeat center center;
}
#app header .modeSwitch input {
  opacity: 0;
  width: 0;
  height: 0;
}
#app header .modeSwitch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-secondary-white);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
#app header .modeSwitch .slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 5px;
  bottom: 5px;
  background-color: var(--color-primary-violet);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
#app header .modeSwitch:hover .slider:before {
  background-color: var(--color-primary-light-violet);
}
#app header .modeSwitch input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}
#app header .modeSwitch .slider.round {
  border-radius: 12px;
}
#app header .modeSwitch .slider.round:before {
  border-radius: 50%;
}
</style>