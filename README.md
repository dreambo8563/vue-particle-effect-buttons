# vue-particle-effect-button ([demo](https://dreambo8563.github.io/vue-particle-effect-buttons/))

> Bursting particle effect buttons for Vue.

This library is a Vue portal of an awesome [Codrops Article](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/) by [Luis Manuel](https://tympanus.net/codrops/author/luis/) (original [source](https://github.com/codrops/ParticleEffectsButtons/)).

## Install

```bash
npm install --save vue-particle-effect-buttons
```

## Usage

Check out the [Demo](https://dreambo8563.github.io/vue-particle-effect-buttons/) to see it in action.

```js
<template>
    <ParticleBtn
      :visible.sync="btnOps.visible"
      :animating.sync="btnOps.animating"
      :options="btnOps"
      cls="btn-cls"
    >hello eveybody!</ParticleBtn>
    <h2>animating:{{btnOps.animating}}</h2>
    <h2>visible:{{btnOps.visible}}</h2>
    <button @click="btnOps.visible=!btnOps.visible">toggle</button>
  </div>
</template>

<script>
import ParticleEffectButton from "vue-particle-effect-buttons"

export default {
  data() {
    return {
      btnOps: {
        type: "triangle",
        easing: "easeOutQuart",
        size: 6,
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: function () {
          return Math.random() < 0.5 ? "#000000" : "#ffffff";
        },
        onComplete: () => {
          console.log("complete");
        },
        onBegin: () => {
          console.log("begin");
        },
        visible: true,
        animating: false
      },
    }
  },
  components: {
    ParticleEffectButton
  }
};
</script>
```

Note that `children` can be anything, The `children` should represent the button's contents.

You change the `visible` boolean prop to kick-off an animation, typically as a result of a click on the button's contents. If `visible` changes to `false`, the button will perform a disintegrating animation. If `visible` changes to `true`, it will reverse and reintegrate the original content.

## Props

| Property                     | Type                | Default          | Description                                                                                                |
| :--------------------------- | :------------------ | :--------------- | :--------------------------------------------------------------------------------------------------------- |
| `visible`                    | boolean             | true             | Whether button should be hidden or visible. Changing this prop starts an animation. support .sync modifier |
| `animating`                  | boolean             | false            | Get the current status of animating or end of the animation. support .sync modifier                        |  |
| `cls`                        | string/Object/Arrar | noop             | The class to change the default button styles                                                              |
| `duration`                   | number              | 1000             | Animation duration in milliseconds.                                                                        |
| `easing`                     | string              | 'easeInOutCubic' | Animation easing.                                                                                          |
| `type`                       | string              | circle           | 'circle' or 'rectangle' or 'triangle'                                                                      |
| `style`                      | string              | fill             | 'fill' or 'stroke'                                                                                         |
| `direction`                  | string              | 'left'           | 'left' or 'right' or 'top' or 'bottom'                                                                     |
| `canvasPadding`              | number              | 150              | Amount of extra padding to add to the canvas since the animation will overflow the content's bounds        |
| `size`                       | number              | func             | random(4)                                                                                                  | Particle size. May be a static number or a function which returns numbers. |
| `speed`                      | number              | func             | random(4)                                                                                                  | Particle speed. May be a static number or a function which returns numbers. |
| `particlesAmountCoefficient` | number              | 3                | Increases or decreases the relative number of particles                                                    |
| `oscillationCoefficient`     | number              | 20               | Increases or decreases the relative curvature of particles                                                 |
| `onBegin`                    | func                | noop             | Callback to be notified once an animation starts.                                                          |
| `onComplete`                 | func                | noop             | Callback to be notified once an animation completes.                                                       |

I tried to keep the properties exactly the same as in the original codrops version.

## Solts

| Property  | Type | Default                 | Description               |
| :-------- | :--- | :---------------------- | :------------------------ |
| `default` | slot | the string of 'content' | the content of the button |

## Related

- [anime.js](http://animejs.com/) - Underlying animation engine.
- [ParticleEffectsButtons](https://github.com/codrops/ParticleEffectsButtons/) - Original source this library is based on.
- [Codrops Article](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/) - Original article this library is based on.
