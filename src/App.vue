<template>
  <div id="app">
    <div class="grid">
      <div v-for="(v, i) of config" :key="i" :class="getCls(i)">
        <button
          v-if="!v.visible && !v.animating"
          @click="toggle(i)"
          style="position: absolute; top: 1em; right: 1em; background: rgb(50, 186, 250); color: rgb(255, 255, 255); border: 0px; border-radius: 4px; font-size: 1em; padding: 0.7em 1.2em; cursor: pointer; outline: none;"
        >
          Reset
        </button>
        <Test
          :animating.sync="config[i].animating"
          :visible.sync="config[i].visible"
          :ref="getRef(i)"
          :options="v"
        >
          <span>{{ v.label }}</span>
        </Test>
      </div>
    </div>
  </div>
</template>

<script>
import ParticleBtn from "./index.vue";
const demoArr = [
  {
    label: "Send"
  },
  {
    type: "triangle",
    easing: "easeOutQuart",
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2,
    color: function() {
      return Math.random() < 0.5 ? "#000000" : "#ffffff";
    },
    label: "Upload"
  },
  {
    type: "rectangle",
    duration: 500,
    easing: "easeOutQuad",
    color: "#091388",
    direction: "top",
    size: 8,
    label: "Delete"
  },
  {
    direction: "right",
    size: 4,
    speed: 1,
    color: "#e85577",
    particlesAmountCoefficient: 1.5,
    oscillationCoefficient: 1,
    label: "Submit"
  },
  {
    duration: 1300,
    easing: "easeInExpo",
    size: 3,
    speed: 1,
    particlesAmountCoefficient: 10,
    oscillationCoefficient: 1,
    label: "Refresh"
  },
  {
    direction: "bottom",
    duration: 1000,
    easing: "easeInExpo",
    label: "Bookmark"
  },
  {
    type: "rectangle",
    style: "stroke",
    size: 15,
    color: "#e87084",
    duration: 600,
    easing: "cubicBezier(0.2, 1, 0.7, 1)",
    oscillationCoefficient: 5,
    particlesAmountCoefficient: 2,
    direction: "right",
    label: "Subscribe"
  },
  {
    type: "triangle",
    style: "stroke",
    size: 5,
    color: "blue",
    duration: 1400,
    speed: 1.5,
    oscillationCoefficient: 15,
    direction: "right",
    label: "Logout"
  },
  {
    duration: 500,
    easing: "easeOutQuad",
    speed: 0.1,
    particlesAmountCoefficient: 10,
    oscillationCoefficient: 80,
    label: "Add to cart"
  },
  {
    direction: "right",
    size: 4,
    color: "#969696",
    duration: 1200,
    easing: "easeInCubic",
    particlesAmountCoefficient: 8,
    speed: 0.4,
    oscillationCoefficient: 1,
    label: "Pause"
  },
  {
    style: "stroke",
    color: "#1b81ea",
    direction: "bottom",
    duration: 1200,
    easing: "easeOutSine",
    speed: 0.7,
    oscillationCoefficient: 5,
    label: "Register"
  },
  {
    type: "triangle",
    easing: "easeOutSine",
    size: 3,
    duration: 800,
    particlesAmountCoefficient: 7,
    speed: 3,
    oscillationCoefficient: 1,
    label: "Export"
  }
];
export default {
  data() {
    return {
      config: []
    };
  },
  name: "app",
  components: {
    Test: ParticleBtn
  },
  methods: {
    toggle(index) {
      this.$set(this.config, index, {
        ...this.config[index],
        visible: !this.config[index].visible
      });
    },
    getCls(i) {
      const name = `theme-${i + 1}`;
      return {
        grid__item: true,
        [name]: true
      };
    },
    getRef(i) {
      const name = `p${i}`;
      return name;
    }
  },
  mounted() {
    demoArr.forEach((v, i) => {
      this.$set(this.config, i, {
        ...v,
        complete: () => {
          this.config[i].animating = false;
        },
        visible: i % 2 == 0,
        animating: false
      });
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
