# vue-particle-effect-buttons ([demo](https://dreambo8563.github.io/vue-particle-effect-buttons/))

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9b0f0d5882e1417e8cb42b7e507bff05)](https://app.codacy.com/app/dreambo8563/vue-particle-effect-buttons?utm_source=github.com&utm_medium=referral&utm_content=dreambo8563/vue-particle-effect-buttons&utm_campaign=Badge_Grade_Dashboard)
[![Greenkeeper badge](https://badges.greenkeeper.io/dreambo8563/vue-particle-effect-buttons.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/dreambo8563/vue-particle-effect-buttons.svg?branch=master)](https://travis-ci.org/dreambo8563/vue-particle-effect-buttons)
[![Known Vulnerabilities](https://snyk.io/test/github/dreambo8563/vue-particle-effect-buttons/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dreambo8563/vue-particle-effect-buttons?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/dt/vue-particle-effect-buttons.svg?style=flat)

> Bursting particle effect buttons for Vue.

This library is a Vue portal of an awesome [Codrops Article](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/) by [Luis Manuel](https://tympanus.net/codrops/author/luis/) (original [source](https://github.com/codrops/ParticleEffectsButtons/)).

## Install

```bash
npm install --save animejs vue-particle-effect-buttons
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
    >
    hello eveybody!
    </ParticleBtn>
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

## Slots

| Property  | Type | Default                 | Description               |
| :-------- | :--- | :---------------------- | :------------------------ |
| `default` | slot | the string of 'content' | the content of the button |

## Related

- [anime.js](http://animejs.com/) - Underlying animation engine.
- [ParticleEffectsButtons](https://github.com/codrops/ParticleEffectsButtons/) - Original source this library is based on.
- [Codrops Article](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/) - Original article this library is based on.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://dreambo8563.github.io/"><img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub></a><br /><a href="https://github.com/dreambo8563/vue-particle-effect-buttons/commits?author=dreambo8563" title="Code">💻</a> <a href="https://github.com/dreambo8563/vue-particle-effect-buttons/commits?author=dreambo8563" title="Documentation">📖</a> <a href="#infra-dreambo8563" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
