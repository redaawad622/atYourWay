(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{558:function(t,e,r){"use strict";r.r(e);r(6),r(46),r(4),r(78),r(128);var n={props:["shipping"],computed:{cart:function(){return this.$store.getters["product/cart"]},cartLen:function(){return this.cart.reduce((function(a,t){return a+t.quantity}),0)},price:function(){var t=this,p=0;return this.cart&&this.cart.forEach((function(e){var r=Object.keys(e.attributes).map((function(t){return e.product.attributes[t].find((function(r){return r.id===e.attributes[t]}))})),n=Object.values(r).reduce((function(a,i){return+i.price+a}),+e.product.sale_price);p+=(n-n*t.discount(e)/100)*e.quantity})),Math.round(p)},total:function(){return this.price+(this.shipping||0)}},methods:{removeFromCart:function(t){this.$store.commit("product/removeFromCart",t)},getDeadLine:function(t,e){return new Date(new Date(t+" UTC").getTime()+6e4*e)},discount:function(t){var e,r;if(t.product.discount&&t.product.startDate&&(new Date).getTime()<this.getDeadLine(t.product.startDate,t.product.duration).getTime())return null!==(r=t.product.discount)&&void 0!==r?r:0;return null!==(e=t.product.permanentDiscount)&&void 0!==e?e:0}}},c=r(40),o=r(45),l=r.n(o),d=r(510),v=r(237),f=r(238),h=r(525),_=r(70),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-sheet",{staticClass:"pa-5"},[r("div",{staticClass:"d-flex justify-space-between"},[r("span",{staticClass:"text-capitalize subtitle-1"},[t._v(t._s(t.cartLen)+" item")]),t._v(" "),r("span",{staticClass:"text-capitalize subtitle-1"},[t._v(t._s(t.price)+" EGP")])]),t._v(" "),r("div",{staticClass:"d-flex justify-space-between"},[r("span",{staticClass:"text-capitalize subtitle-1"},[t._v("shipping")]),t._v(" "),r("span",{staticClass:"text-capitalize subtitle-1"},[t._v(t._s(t.shipping)+" EGP")])])]),t._v(" "),r("v-divider"),t._v(" "),r("v-sheet",{staticClass:"pa-5"},[r("div",{staticClass:"d-flex justify-space-between"},[r("span",{staticClass:"text-capitalize subtitle-1"},[t._v("total")]),t._v(" "),r("span",{staticClass:"text-capitalize subtitle-1"},[t._v(t._s(t.total)+" EGP")])])]),t._v(" "),"/cart"==t.$route.path?[r("v-divider"),t._v(" "),r("v-sheet",{staticClass:"pa-5"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-btn",{staticClass:"btnHoverSecondary my-3",attrs:{color:"primary",to:"/checkout",width:"250px",tile:"",elevation:"0"}},[t._v("checkout")])],1)],1)]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VDivider:f.a,VRow:h.a,VSheet:_.a})}}]);