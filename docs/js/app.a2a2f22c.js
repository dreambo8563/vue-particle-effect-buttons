(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],f=0,h=[];f<o.length;f++)a=o[f],s[a]&&h.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-particle-effect-buttons/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1368:function(t,e,i){"use strict";var n=i("3f74"),s=i.n(n);s.a},"3f74":function(t,e,i){var n=i("63e9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("7f2c023a",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"grid"},t._l(t.config,function(e,n){return i("div",{key:n,class:t.getCls(n)},[e.visible||e.animating?t._e():i("button",{staticStyle:{position:"absolute",top:"1em",right:"1em",background:"rgb(50, 186, 250)",color:"rgb(255, 255, 255)",border:"0px","border-radius":"4px","font-size":"1em",padding:"0.7em 1.2em",cursor:"pointer",outline:"none"},on:{click:function(e){return t.toggle(n)}}},[t._v("\n        Reset\n      ")]),i("Test",{ref:t.getRef(n),refInFor:!0,attrs:{cls:"abc",animating:t.config[n].animating,visible:t.config[n].visible,options:e},on:{"update:animating":function(e){return t.$set(t.config[n],"animating",e)},"update:visible":function(e){return t.$set(t.config[n],"visible",e)}}},[i("span",[t._v(t._s(e.label))])])],1)}),0)])},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-particle-effect-button"},[i("div",{staticClass:"particles"},[i("div",{staticClass:"particles-wrapper",style:t.wrapperStyl},[t.$slots.default?i("div",{ref:"btn",staticClass:"particles-button",class:t.cls,style:t.slotStyl,on:{click:t.disintegrate}},[t._t("default",[i("button",[t._v("content")])])],2):t._e()]),i("canvas",{ref:"canvas",staticClass:"particles-canvas",style:t.canvasStyl})])])},o=[],l=i("1209");function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){u(t,e,i[e])})}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={arr:function(t){return Array.isArray(t)},str:function(t){return"string"===typeof t},fnc:function(t){return"function"===typeof t}};function h(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function p(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(h(e))||"0"}function d(t){return Math.random()*t-t/2}var g={type:"circle",style:"fill",canvasPadding:150,duration:1e3,easing:"easeInOutCubic",direction:"left",size:function(){return Math.floor(3*Math.random()+1)},speed:function(){return d(4)},particlesAmountCoefficient:3,oscillationCoefficient:20},m={props:{options:{type:Object,default:function(){return g}},visible:{type:Boolean,default:!0},animating:{type:Boolean,default:!0},cls:{type:[String,Array,Object],default:""}},data:function(){return{mergedOps:c({},g,this.options),particles:[],frame:null,buttonVisible:!this.visible,wrapperVisible:"visible",wrapperTransform:"",btnTransform:"",canvasStyl:{display:"none"}}},methods:{init:function(){this.disintegrating=!1,this.lastProgress=0,this.rect={width:0,height:0},this.height=0,this.width=0,this.ctx={}},disintegrate:function(t){var e=this;!this.isAnimating&&this.buttonVisible&&(this.$emit("update:animating",!0),f.fnc(this.mergedOps.onBegin)&&this.mergedOps.onBegin(),this.disintegrating=!0,this.lastProgress=0,this.setup(t),this.animate(function(t){var i=t.animatables[0].target.value;e.addTransforms(i),e.mergedOps.duration&&e.addParticles(e.rect,i/100,!0)}),this.buttonVisible=!1,this.visible&&this.$emit("update:visible",!1))},setup:function(t){this.mergedOps=c({},this.mergedOps,t),this.wrapperVisible=this.visible?"visible":"hidden",this.mergedOps.duration&&(this.rect=this.$refs["btn"].getBoundingClientRect(),this.width=this.$refs["canvas"].width=this.mergedOps.width||this.rect.width+2*this.mergedOps.canvasPadding,this.height=this.$refs["canvas"].height=this.mergedOps.height||this.rect.height+2*this.mergedOps.canvasPadding)},animate:function(t){var e=this;Object(l["a"])({targets:{value:this.disintegrating?0:101},value:this.disintegrating?101:0,duration:this.mergedOps.duration,easing:this.mergedOps.easing,begin:this.mergedOps.begin,update:t,complete:function(){e.disintegrating&&(e.wrapperVisible="hidden")}})},addTransforms:function(t){var e=this.isHorizontal?"translateX":"translateY",i="left"===this.mergedOps.direction||"top"===this.mergedOps.direction?t:-t;this.wrapperTransform=e+"("+i+"%)",this.btnTransform=e+"("+-i+"%)"},addParticles:function(t,e){var i=this.disintegrating?e-this.lastProgress:this.lastProgress-e;this.lastProgress=e;var n=this.mergedOps.canvasPadding,s=this.mergedOps.canvasPadding,r=(this.isHorizontal?t.width:t.height)*e+i*(this.disintegrating?100:220);this.isHorizontal?n+="left"===this.mergedOps.direction?r:t.width-r:s+="top"===this.mergedOps.direction?r:t.height-r;var a=Math.floor(this.mergedOps.particlesAmountCoefficient*(100*i+1));if(a=Math.max(1,a),a>0)while(a--)this.addParticle({x:n+(this.isHorizontal?0:t.width*Math.random()),y:s+(this.isHorizontal?t.height*Math.random():0)});this.isAnimating||(this.canvasStyl.display="block",this.play())},addParticle:function(t){var e=60*this.mergedOps.duration/1e3,i=f.fnc(this.mergedOps.speed)?this.mergedOps.speed():this.mergedOps.speed,n=f.fnc(this.mergedOps.color)?this.mergedOps.color():this.mergedOps.color;this.particles.push({startX:t.x,startY:t.y,x:this.disintegrating?0:i*-e,y:0,color:n,angle:d(360),counter:this.disintegrating?0:e,increase:2*Math.PI/100,life:0,death:this.disintegrating?e-20+40*Math.random():e,speed:i,size:f.fnc(this.mergedOps.size)?this.mergedOps.size():this.mergedOps.size})},play:function(){this.animating||this.$emit("update:animating",!0),this.frame=requestAnimationFrame(this.loop)},loop:function(){this.updateParticles(),this.renderParticles(),this.isAnimating&&(this.animating||this.$emit("update:animating",!0),this.frame=requestAnimationFrame(this.loop))},integrate:function(t){var e=this;this.isAnimating||(this.animating||this.$emit("update:animating",!0),f.fnc(this.mergedOps.onBegin)&&this.mergedOps.onBegin(),this.disintegrating=!1,this.lastProgress=1,this.setup(t),this.animate(function(t){var i=t.animatables[0].target.value;setTimeout(function(){e.addTransforms(i)},e.mergedOps.duration),e.mergedOps.duration&&e.addParticles(e.rect,i/100,!0)}),this.buttonVisible=!0,this.$emit("update:visible",!0))},updateParticles:function(){for(var t=0;t<this.particles.length;t++){var e=this.particles[t];e.life>e.death?this.particles.splice(t,1):(e.x+=e.speed,e.y=this.mergedOps.oscillationCoefficient*Math.sin(e.counter*e.increase),e.life++,e.counter+=this.disintegrating?1:-1)}this.particles.length||(this.pause(),this.canvasStyl.display="none",f.fnc(this.mergedOps.onComplete)&&this.mergedOps.onComplete())},pause:function(){cancelAnimationFrame(this.frame),this.$emit("update:animating",!1),this.frame=null},renderParticles:function(){this.ctx.clearRect(0,0,this.width,this.height);for(var t=0;t<this.particles.length;t++){var e=this.particles[t];e.life<e.death&&(this.ctx.translate(e.startX,e.startY),this.ctx.rotate(e.angle*Math.PI/180),this.ctx.globalAlpha=this.disintegrating?1-e.life/e.death:e.life/e.death,this.ctx.fillStyle=this.ctx.strokeStyle=e.color,this.ctx.beginPath(),"circle"===this.mergedOps.type?this.ctx.arc(e.x,e.y,e.size,0,2*Math.PI):"triangle"===this.mergedOps.type?(this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(e.x+e.size,e.y+e.size),this.ctx.lineTo(e.x+e.size,e.y-e.size)):"rectangle"===this.mergedOps.type&&this.ctx.rect(e.x,e.y,e.size,e.size),"fill"===this.mergedOps.style?this.ctx.fill():"stroke"===this.mergedOps.style&&(this.ctx.closePath(),this.ctx.stroke()),this.ctx.globalAlpha=1,this.ctx.rotate(-e.angle*Math.PI/180),this.ctx.translate(-e.startX,-e.startY))}},visibleChange:function(t,e){!!t!=!!e&&(t?this.integrate():this.disintegrate())}},computed:{isAnimating:function(){return!!this.frame},wrapperStyl:function(){return{visibility:this.wrapperVisible,transform:this.wrapperTransform}},slotStyl:function(){return{transform:this.btnTransform}},isHorizontal:function(){return"left"===this.mergedOps.direction||"right"===this.mergedOps.direction}},mounted:function(){this.$slots.default&&(this.init(),this.$set(this.mergedOps,"color",p(this.$refs["btn"],"background-color")),this.ctx=this.$refs["canvas"].getContext("2d"),this.$watch("visible",this.visibleChange),this.visible||this.addTransforms(101),this.$emit("update:animating",!1),this.buttonVisible=this.visible)}},b=m,v=(i("1368"),i("2877")),y=Object(v["a"])(b,a,o,!1,null,null,null),O=y.exports;function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){x(t,e,i[e])})}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var P=[{label:"Send"},{type:"triangle",easing:"easeOutQuart",size:6,particlesAmountCoefficient:4,oscillationCoefficient:2,color:function(){return Math.random()<.5?"#000000":"#ffffff"},label:"Upload"},{type:"rectangle",duration:500,easing:"easeOutQuad",color:"#091388",direction:"top",size:8,label:"Delete"},{direction:"right",size:4,speed:1,color:"#e85577",particlesAmountCoefficient:1.5,oscillationCoefficient:1,label:"Submit"},{duration:1300,easing:"easeInExpo",size:3,speed:1,particlesAmountCoefficient:10,oscillationCoefficient:1,label:"Refresh"},{direction:"bottom",duration:1e3,easing:"easeInExpo",label:"Bookmark"},{type:"rectangle",style:"stroke",size:15,color:"#e87084",duration:600,easing:"cubicBezier(0.2, 1, 0.7, 1)",oscillationCoefficient:5,particlesAmountCoefficient:2,direction:"right",label:"Subscribe"},{type:"triangle",style:"stroke",size:5,color:"blue",duration:1400,speed:1.5,oscillationCoefficient:15,direction:"right",label:"Logout"},{duration:500,easing:"easeOutQuad",speed:.1,particlesAmountCoefficient:10,oscillationCoefficient:80,label:"Add to cart"},{direction:"right",size:4,color:"#969696",duration:1200,easing:"easeInCubic",particlesAmountCoefficient:8,speed:.4,oscillationCoefficient:1,label:"Pause"},{style:"stroke",color:"#1b81ea",direction:"bottom",duration:1200,easing:"easeOutSine",speed:.7,oscillationCoefficient:5,label:"Register"},{type:"triangle",easing:"easeOutSine",size:3,duration:800,particlesAmountCoefficient:7,speed:3,oscillationCoefficient:1,label:"Export"}],C={data:function(){return{config:[]}},name:"app",components:{Test:O},methods:{toggle:function(t){this.$set(this.config,t,w({},this.config[t],{visible:!this.config[t].visible}))},getCls:function(t){var e="theme-".concat(t+1);return x({grid__item:!0},e,!0)},getRef:function(t){var e="p".concat(t);return e}},mounted:function(){var t=this;P.forEach(function(e,i){t.$set(t.config,i,w({},e,{complete:function(){t.config[i].animating=!1},visible:i%2==0,animating:!1}))})}},z=C,k=(i("5c0b"),Object(v["a"])(z,s,r,!1,null,null,null)),S=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("e959"),s=i.n(n);s.a},"63e9":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".vue-particle-effect-button{display:inline-block}.vue-particle-effect-button .particles{position:relative}.vue-particle-effect-button .particles-canvas{position:absolute;pointer-events:none;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.vue-particle-effect-button .particles-wrapper{position:relative;display:inline-block;overflow:hidden;will-change:transform}.vue-particle-effect-button .particles-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;cursor:pointer;position:relative;border-radius:5px;background:#121019;color:#fff;border:0;margin:0;padding:1.5rem 3rem;will-change:transform}.vue-particle-effect-button .particles-button:focus{outline:none}",""])},a33e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}#app .abc{background:#00f}",""])},e959:function(t,e,i){var n=i("a33e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("6f19147e",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.a2a2f22c.js.map