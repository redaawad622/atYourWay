(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4],{574:function(t,e,r){"use strict";r.r(e);var c={props:{cat:{type:Object,require:!0}}},n=r(45),l=r(50),o=r.n(l),d=r(496),m=r(235),v=r(149),f=r(183),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",width:"100%",height:"100%",to:"/categories/"+t.cat.slug}},[r("v-img",{staticClass:"align-center",attrs:{"max-height":"100%","aspect-ratio":"2",src:t.$getUrl(t.cat.image)}},[r("v-card-text",[r("v-card-title",{staticClass:"text-uppercase secondary--text font-weight-bold"},[t._v(t._s(t.cat.name))]),t._v(" "),t.cat.description?r("v-card-subtitle",{staticClass:"text-capitalize secondary--text font-weight-normal"},[t._v(t._s(t.cat.description)+"\n      ")]):t._e(),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"primary",small:""}},[t._v(" Shop now")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VCard:m.a,VCardSubtitle:v.a,VCardText:v.b,VCardTitle:v.c,VImg:f.a})},615:function(t,e,r){"use strict";r.r(e);var c={components:{catItemSlide:r(574).default},name:"featuredCategoriesSlide",computed:{categories:function(){return this.$store.getters["home/featuredCategories"]}}},n=r(45),l=r(50),o=r.n(l),d=r(510),m=r(524),v=r(516),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categories&&t.categories.length>0?r("v-container",{staticClass:"mt-8",attrs:{fluid:""}},[r("v-row",t._l(t.categories,(function(t,e){return r("v-col",{key:t.id+t.name+e,attrs:{cols:"12",sm:"4"}},[r("cat-item-slide",{attrs:{cat:t}})],1)})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCol:d.a,VContainer:m.a,VRow:v.a})}}]);