(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{586:function(e,t,n){},661:function(e,t,n){"use strict";n(586)},696:function(e,t,n){"use strict";n.r(t);n(103);var s=n(660),a=n.n(s),l={name:"flex",data:function(){return{containerStyle:{"flex-direction":"row","flex-wrap":"nowrap","justify-content":"flex-start","align-items":"flex-start","align-content":"flex-start"},itemStyles:[{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"}],choosenItemIndex:-1,choosenItem:{},hideTop:!1,flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around"],flexGrow:[0,1],flexShrink:[0,1],alignSelf:["auto","flex-start","flex-end","center","baseline"]}},watch:{containerStyle:{handler:function(){this.setContainerStyleStr()},deep:!0}},computed:{order:function(){for(var e=[],t=0;t<this.itemStyles.length;t++)e.push(t);return e}},methods:{styleToString:function(e){var t="";for(var n in e)t+="".concat(n,": ").concat(e[n],";\n");return t},setContainerStyleStr:function(){this.$refs.flexContainer.innerHTML=a.a.highlight(this.styleToString(this.containerStyle),a.a.languages.css)},changeItemCss:function(e,t){this.$refs.flexItem.innerHTML=a.a.highlight(this.styleToString(e),a.a.languages.css),this.choosenItem=e,this.choosenItemIndex=t}},mounted:function(){this.setContainerStyleStr()}},i=(n(661),n(2)),o=Object(i.a)(l,(function(){var e=this,t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"live-flex"},[s("p",{staticClass:"tip"},[t._v("click item to change stlye")]),t._v(" "),s("div",{staticClass:"flex-container",style:t.containerStyle},t._l(t.itemStyles,(function(e,n){return s("div",{key:n,staticClass:"flex-item",style:e,on:{click:function(s){return t.changeItemCss(e,n)}}},[t._v("item-"+t._s(n+1)+"\n    ")])})),0),t._v(" "),s("p",{staticClass:"title"},[s("span",[t._v("style of container")]),t._v(" "),s("span",{staticClass:"tip hide-btn",on:{click:function(){return e.hideTop=!e.hideTop}}},[s("i",{class:t.hideTop?"el-icon-arrow-up":"el-icon-arrow-down"}),t._v(" "+t._s(t.hideTop?"show":"hide"))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideTop,expression:"!hideTop"}],staticClass:"bottom-border"},[s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"flexContainer"})])]),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("flex-direction:")]),t._v(" "),t._l(t.flexDirection,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-direction"],callback:function(e){t.$set(t.containerStyle,"flex-direction",e)},expression:"containerStyle['flex-direction']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("flex-wrap:")]),t._v(" "),t._l(t.flexWrap,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-wrap"],callback:function(e){t.$set(t.containerStyle,"flex-wrap",e)},expression:"containerStyle['flex-wrap']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("justify-content:")]),t._v(" "),t._l(t.justifyContent,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["justify-content"],callback:function(e){t.$set(t.containerStyle,"justify-content",e)},expression:"containerStyle['justify-content']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("align-items:")]),t._v(" "),t._l(t.alignItems,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-items"],callback:function(e){t.$set(t.containerStyle,"align-items",e)},expression:"containerStyle['align-items']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("align-content:")]),t._v(" "),t._l(t.alignContent,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-content"],callback:function(e){t.$set(t.containerStyle,"align-content",e)},expression:"containerStyle['align-content']"}})}))],2)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:-1!=t.choosenItemIndex,expression:"choosenItemIndex != -1"}],staticClass:"bottom-border"},[s("p",{staticClass:"title"},[t._v("style of item-"+t._s(t.choosenItemIndex+1))]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{staticClass:"language-css"},[s("code",{ref:"flexItem"})])]),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("order:")]),t._v(" "),t._l(t.order,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem.order,callback:function(e){t.$set(t.choosenItem,"order",e)},expression:"choosenItem['order']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("flex-grow:")]),t._v(" "),t._l(t.flexGrow,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-grow"],callback:function(e){t.$set(t.choosenItem,"flex-grow",e)},expression:"choosenItem['flex-grow']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("flex-shrink:")]),t._v(" "),t._l(t.flexShrink,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-shrink"],callback:function(e){t.$set(t.choosenItem,"flex-shrink",e)},expression:"choosenItem['flex-shrink']"}})}))],2),t._v(" "),s("div",{staticClass:"key-value"},[s("span",{staticClass:"key"},[t._v("align-self:")]),t._v(" "),t._l(t.alignSelf,(function(e,n){return s("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["align-self"],callback:function(e){t.$set(t.choosenItem,"align-self",e)},expression:"choosenItem['align-self']"}})}))],2)])])}),[],!1,null,"ebb295ae",null);t.default=o.exports}}]);