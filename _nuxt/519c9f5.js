(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{531:function(t,e,r){"use strict";r.r(e);var n={props:{cat:{type:Object,require:!0}}},c=r(66),o=r(71),l=r.n(o),d=r(473),f=r(228),v=r(181),m=r(178),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",width:"100%",height:"100%",to:"/categories/"+t.cat.slug}},[r("v-img",{staticClass:"align-center",attrs:{"max-height":"100%","aspect-ratio":"2",src:t.$getUrl(t.cat.image)}},[r("v-card-text",[r("v-card-title",{staticClass:"text-uppercase secondary--text font-weight-bold"},[t._v(t._s(t.cat.name))]),t._v(" "),t.cat.description?r("v-card-subtitle",{staticClass:"text-capitalize secondary--text font-weight-normal"},[t._v(t._s(t.cat.description)+"\n      ")]):t._e(),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"primary",small:""}},[t._v(" Shop now")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardSubtitle:v.a,VCardText:v.b,VCardTitle:v.c,VImg:m.a})},534:function(t,e,r){"use strict";r(9),r(8),r(79),r(27),r(307),r(240),r(72),r(100);var n=r(2);var c,o=r(42);e.a=(c="container",n.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},554:function(t,e,r){"use strict";r.r(e);var n={components:{catItemSlide:r(531).default},name:"featuredCategoriesSlide",computed:{categories:function(){return this.$store.getters["home/featuredCategories"]}}},c=r(66),o=r(71),l=r.n(o),d=r(488),f=r(534),v=r(490),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categories&&t.categories.length>0?r("v-container",{staticClass:"mt-8",attrs:{fluid:""}},[r("v-row",t._l(t.categories,(function(t,e){return r("v-col",{key:t.id+t.name+e,attrs:{cols:"12",sm:"4"}},[r("cat-item-slide",{attrs:{cat:t}})],1)})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VRow:v.a})}}]);