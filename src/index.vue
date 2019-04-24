<template>
  <div class="vue-particle-effect-button">
    <div class="particles">
      <div :style="wrapperStyl" class="particles-wrapper">
        <div
          :style="slotStyl"
          ref="btn"
          @click="btnClick"
          v-if="$slots.default"
          class="particles-button"
        >
          <slot>
            <button>Send</button>
          </slot>
        </div>
      </div>
      <canvas
        :style="canvasStyl"
        ref="canvas"
        class="particles-canvas"
      ></canvas>
    </div>
  </div>
</template>
<script>
import anime from "animejs/lib/anime.es.js";
const is = {
  arr: function(a) {
    return Array.isArray(a);
  },
  str: function(a) {
    return typeof a === "string";
  },
  fnc: function(a) {
    return typeof a === "function";
  }
};
function stringToHyphens(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function getCSSValue(el, prop) {
  if (prop in el.style) {
    return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || "0";
  }
}

function rand(value) {
  return Math.random() * value - value / 2;
}
const defaultConf = {
  type: "circle",
  style: "fill",
  canvasPadding: 150,
  duration: 1000,
  easing: "easeInOutCubic",
  direction: "left",
  size: function() {
    return Math.floor(Math.random() * 3 + 1);
  },
  speed: function() {
    return rand(4);
  },
  particlesAmountCoefficient: 3,
  oscillationCoefficient: 20
};
export default {
  props: {
    config: {
      type: Object,
      default: () => defaultConf
    }
  },

  data() {
    return {
      mergedOps: { ...defaultConf, ...this.config },
      particles: [],
      frame: null,
      buttonVisible: true, // just a flag
      disintegrating: false,
      lastProgress: 0,
      rect: {
        width: 0,
        height: 0
      },
      height: 0,
      width: 0,
      wrapperVisible: "visible",
      wrapperTransform: "",
      btnTransform: "",
      canvasStyl: {
        display: "none"
      },
      ctx: {}
    };
  },
  methods: {
    btnClick() {
      if (!this.isAnimating && this.buttonVisible) {
        this.disintegrate();
        this.buttonVisible = !this.buttonVisible;
      }
    },
    disintegrate(options) {
      if (!this.isAnimating) {
        this.disintegrating = true;
        this.lastProgress = 0;

        this.setup(options);
        this.animate(anim => {
          const value = anim.animatables[0].target.value;
          this.addTransforms(value);
          if (this.mergedOps.duration) {
            this.addParticles(this.rect, value / 100, true);
          }
        });
      }
    },
    setup(options) {
      this.mergedOps = { ...this.mergedOps, ...options };
      this.wrapperVisible = "visible";
      if (this.mergedOps.duration) {
        this.rect = this.$refs["btn"].getBoundingClientRect();

        this.width = this.$refs["canvas"].width =
          this.mergedOps.width ||
          this.rect.width + this.mergedOps.canvasPadding * 2;

        this.height = this.$refs["canvas"].height =
          this.mergedOps.height ||
          this.rect.height + this.mergedOps.canvasPadding * 2;
      }
    },
    animate(update) {
      anime({
        targets: { value: this.disintegrating ? 0 : 101 },
        value: this.disintegrating ? 101 : 0,
        duration: this.mergedOps.duration,
        easing: this.mergedOps.easing,
        begin: this.mergedOps.begin,
        update: update,
        complete: () => {
          if (this.disintegrating) {
            this.wrapperVisible = "hidden";
          }
        }
      });
    },
    addTransforms(value) {
      const translateProperty = this.isHorizontal ? "translateX" : "translateY";
      const translateValue =
        this.mergedOps.direction === "left" ||
        this.mergedOps.direction === "top"
          ? value
          : -value;
      this.wrapperTransform = translateProperty + "(" + translateValue + "%)";
      this.btnTransform = translateProperty + "(" + -translateValue + "%)";
    },
    addParticles(rect, progress) {
      const progressDiff = this.disintegrating
        ? progress - this.lastProgress
        : this.lastProgress - progress;
      this.lastProgress = progress;
      let x = this.mergedOps.canvasPadding;
      let y = this.mergedOps.canvasPadding;
      const progressValue =
        (this.isHorizontal ? rect.width : rect.height) * progress +
        progressDiff * (this.disintegrating ? 100 : 220);
      if (this.isHorizontal) {
        x +=
          this.mergedOps.direction === "left"
            ? progressValue
            : rect.width - progressValue;
      } else {
        y +=
          this.mergedOps.direction === "top"
            ? progressValue
            : rect.height - progressValue;
      }
      let i = Math.floor(
        this.mergedOps.particlesAmountCoefficient * (progressDiff * 100 + 1)
      );
      if (i > 0) {
        while (i--) {
          this.addParticle({
            x: x + (this.isHorizontal ? 0 : rect.width * Math.random()),
            y: y + (this.isHorizontal ? rect.height * Math.random() : 0)
          });
        }
      }
      if (!this.isAnimating) {
        this.canvasStyl.display = "block";
        this.play();
      }
    },
    addParticle(options) {
      const frames = (this.mergedOps.duration * 60) / 1000;
      const speed = is.fnc(this.mergedOps.speed)
        ? this.mergedOps.speed()
        : this.mergedOps.speed;
      const color = is.fnc(this.mergedOps.color)
        ? this.mergedOps.color()
        : this.mergedOps.color;
      this.particles.push({
        startX: options.x,
        startY: options.y,
        x: this.disintegrating ? 0 : speed * -frames,
        y: 0,
        color: color,
        angle: rand(360),
        counter: this.disintegrating ? 0 : frames,
        increase: (Math.PI * 2) / 100,
        life: 0,
        death: this.disintegrating ? frames - 20 + Math.random() * 40 : frames,
        speed: speed,
        size: is.fnc(this.mergedOps.size)
          ? this.mergedOps.size()
          : this.mergedOps.size
      });
    },
    play() {
      this.frame = requestAnimationFrame(this.loop);
    },
    loop() {
      this.updateParticles();
      this.renderParticles();
      if (this.isAnimating) {
        this.frame = requestAnimationFrame(this.loop);
      }
    },
    integrate(options) {
      if (!this.isAnimating) {
        this.disintegrating = false;
        this.lastProgress = 1;
        this.setup(options);
        this.animate(anim => {
          const value = anim.animatables[0].target.value;
          setTimeout(() => {
            this.addTransforms(value);
            this.buttonVisible = !this.buttonVisible;
            this.wrapperTransform = "";
            this.btnTransform = "";
            // this.canvasStyl.display = "none"
          }, this.mergedOps.duration);

          if (this.mergedOps.duration) {
            this.addParticles(this.rect, value / 100, true);
          }
        });
      }
    },

    updateParticles() {
      for (let i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];
        if (p.life > p.death) {
          this.particles.splice(i, 1);
        } else {
          p.x += p.speed;
          p.y =
            this.mergedOps.oscillationCoefficient *
            Math.sin(p.counter * p.increase);
          p.life++;
          p.counter += this.disintegrating ? 1 : -1;
        }
      }
      if (!this.particles.length) {
        this.pause();

        this.canvasStyl.display = "none";
        if (is.fnc(this.mergedOps.complete)) {
          console.log(this.mergedOps.complete);
          this.mergedOps.complete();
          //   console.log("complete");
        }
      }
    },
    pause() {
      cancelAnimationFrame(this.frame);
      this.frame = null;
    },
    renderParticles() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];

        if (p.life < p.death) {
          this.ctx.translate(p.startX, p.startY);
          this.ctx.rotate((p.angle * Math.PI) / 180);
          this.ctx.globalAlpha = this.disintegrating
            ? 1 - p.life / p.death
            : p.life / p.death;
          this.ctx.fillStyle = this.ctx.strokeStyle = p.color;
          this.ctx.beginPath();

          if (this.mergedOps.type === "circle") {
            this.ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
          } else if (this.mergedOps.type === "triangle") {
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + p.size, p.y + p.size);
            this.ctx.lineTo(p.x + p.size, p.y - p.size);
          } else if (this.mergedOps.type === "rectangle") {
            this.ctx.rect(p.x, p.y, p.size, p.size);
          }

          if (this.mergedOps.style === "fill") {
            this.ctx.fill();
          } else if (this.mergedOps.style === "stroke") {
            this.ctx.closePath();
            this.ctx.stroke();
          }

          this.ctx.globalAlpha = 1;
          this.ctx.rotate((-p.angle * Math.PI) / 180);
          this.ctx.translate(-p.startX, -p.startY);
        }
      }
    }
  },
  computed: {
    isAnimating() {
      return !!this.frame;
    },
    wrapperStyl() {
      return {
        visibility: this.wrapperVisible,
        transform: this.wrapperTransform
      };
    },
    slotStyl() {
      return {
        transform: this.btnTransform
      };
    },
    isHorizontal() {
      return (
        this.mergedOps.direction === "left" ||
        this.mergedOps.direction === "right"
      );
    }
  },
  mounted() {
    if (this.$slots.default) {
      this.$set(
        this.mergedOps,
        "color",
        getCSSValue(this.$refs["btn"], "background-color")
      );
      this.ctx = this.$refs["canvas"].getContext("2d");
    }
  }
};
</script>
<style lang="scss">
.particles {
  position: relative;
  grid-area: 1 / 1 / 2 / 2;
}

.particles-canvas {
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.particles-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
  will-change: transform;
}

.particles-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  border-radius: 5px;
  border-radius: var(--radius-button);
  background: var(--color-button-bg);
  color: var(--color-button-text);
  border: 0;
  border: var(--border-button);
  margin: 0;
  padding: 1.5rem 3rem;
  padding: var(--button-padding);
  will-change: transform;
}

.particles-button:focus {
  outline: none;
}
</style>
