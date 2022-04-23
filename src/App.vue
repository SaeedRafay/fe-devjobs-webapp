<template>
  <div class="container">
    <LayoutHeader />
    <LayoutMain />
  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutMain from "./components/LayoutMain.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    LayoutMain,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

:root {
  --font-family: "Kumbh Sans", sans-serif;
  --font-body: 400 16px/26px;
  --font-h1: 700 28px/34px;
  --font-h2: 700 24px/29px;
  --font-h3: 700 20px/24px;
  --font-h4: 700 14px/18px;
  --font-button: 700 16px/16px;
  --color-primary-violet: #5964e0;
  --color-primary-light-violet: #939bf4;
  --color-primary-dark-blue: #19202d;
  --color-primary-midnight: #121721;
  --color-secondary-white: #ffffff;
  --color-secondary-light-grey: #f4f6f8;
  --color-secondary-grey: #9daec2;
  --color-secondary-dark-grey: #6e8098;
}
body {
  margin: 0;
  background: var(--color-secondary-light-grey);
  font: var(--font-body) var(--font-family);
  color: var(--color-primary-dark-blue);
}
body::before {
  content: " ";
  background: url("./assets/bg-pattern-header.svg") no-repeat;
  width: 100%;
  min-height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
body::after {
  content: " ";
  background: #5964e0;
  width: 50%;
  min-height: 160px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
}
#app .container {
  width: 1110px;
  margin: 0 auto;
}
#app h1,
#app h2,
#app h3,
#app h4 {
  margin: 0;
}
#app h1 {
  font: var(--font-h1) var(--font-family);
}
#app h2 {
  font: var(--font-h2) var(--font-family);
}
#app h3 {
  font: var(--font-h3) var(--font-family);
}
#app h4 {
  font: var(--font-h4) var(--font-family);
}
#app button {
  padding: 16px 30px;
  border: none;
  font: var(--font-button) var(--font-family);
  color: var(--color-secondary-white);
  cursor: pointer;
  background: var(--color-primary-violet);
  border-radius: 5px;
  transition: background-color 0.5s ease;
}
#app button:hover {
  background: var(--color-primary-light-violet);
}
</style>
