(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{530:function(t,e,r){var content=r(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("555be74e",content,!0,{sourceMap:!1})},546:function(t,e,r){"use strict";r(530)},547:function(t,e,r){var o=r(11)(!1);o.push([t.i,'.vuejs-countdown{padding:0!important;margin:0}.vuejs-countdown li{display:inline-block;margin:0 2px;text-align:center;position:relative}.vuejs-countdown li p{margin:0}.vuejs-countdown li:first-of-type{margin-left:0}.vuejs-countdown li:last-of-type{margin-right:0}.vuejs-countdown li:last-of-type:after{content:""}.vuejs-countdown .digit{color:var(--v-primary-base);font-size:24px;overflow:hidden;position:static;width:64px;height:64px;line-height:68px;background:#fff;border-radius:100%;margin-bottom:15px;box-shadow:0 2px 6px 0 rgb(0 0 0/6%)}.vuejs-countdown .digit,.vuejs-countdown .text{display:block;text-align:center;font-weight:600}.vuejs-countdown .text{font-size:12px;width:100%;color:#666;padding:0;text-transform:uppercase;line-height:1}',""]),t.exports=o},548:function(t,e,r){var content=r(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6bc069ed",content,!0,{sourceMap:!1})},549:function(t,e,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("d7f2f31a",content,!0,{sourceMap:!1})},552:function(t,e,r){"use strict";r.r(e);r(545),r(29),r(71),r(51),r(21),r(65);var o=null,n={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");o=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(o),this.$emit("finish"))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(o)}},c=(r(546),r(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"vuejs-countdown"},[t.days>0?r("li",[r("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),r("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),t._v(" "),r("li",[r("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),r("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),t._v(" "),r("li",[r("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),r("p",{staticClass:"text"},[t._v("min")])]),t._v(" "),r("li",[r("p",{staticClass:"digit secondary--text"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),r("p",{staticClass:"text"},[t._v("Sec")])])])}),[],!1,null,null,null);e.default=component.exports},555:function(t,e,r){"use strict";r(548)},556:function(t,e,r){var o=r(11)(!1);o.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06)}.speedBtn:hover{background:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=o},557:function(t,e,r){"use strict";r(549)},558:function(t,e,r){var o=r(11)(!1);o.push([t.i,".prodTitle[data-v-3cc851e8]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-3cc851e8]{transition:all .6s ease}.over[data-v-3cc851e8]{background:transparent;width:100%;height:100%}.lblProd[data-v-3cc851e8]{font-size:12px;padding:3px 10px;width:50px;display:block}",""]),t.exports=o},572:function(t,e,r){var content=r(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("44949c0e",content,!0,{sourceMap:!1})},575:function(t,e,r){"use strict";r.r(e);r(21),r(65),r(5),r(150);var o={components:{countDown:r(552).default},name:"productItemInDetails",props:{product:{type:Object,required:!0},module:{type:String}},data:function(){return{hover:!1,attributes:{},endTime:!1}},computed:{isNew:function(){var t=new Date(this.product.created_at);return t.setDate(t.getDate()+2),t>=new Date},getDeadLine:function(){return new Date(new Date(this.product.startDate+" UTC").getTime()+6e4*this.product.duration).toString()},price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,r){return t.attributes[e[r]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},n=(r(555),r(557),r(45)),c=r(50),d=r.n(c),l=r(496),v=r(235),f=r(149),h=r(510),_=r(183),m=r(550),x=r(516),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"my-16",attrs:{flat:"",tile:"",color:"transparent"},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)}}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-img",{class:{"ms-auto":!t.$vuetify.breakpoint.xs,"mx-auto":t.$vuetify.breakpoint.xs},attrs:{eager:"",src:t.$getUrl(t.product.images[t.hover&&t.product.images.length>1?1:0].full),"min-height":t.$vuetify.breakpoint.xs?"auto":"410px","max-height":t.$vuetify.breakpoint.xs?"410px":"450px","max-width":t.$vuetify.breakpoint.xs?"auto":"350px"},on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[r("div",{staticStyle:{top:"30px",position:"relative"}},[r("div",{staticClass:"mb-3"},[r("span",{staticClass:"primary white--text lblProd"},[t._v(t._s(t.product.discount)+"%")])]),t._v(" "),t.isNew?r("div",[r("span",{staticClass:"secondary white--text lblProd"},[t._v("New")])]):t._e()])])],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("div",{class:{"ms-auto":!t.$vuetify.breakpoint.xs,"mx-auto":t.$vuetify.breakpoint.xs}},[r("div",{staticClass:"secondary--text display-3 mb-2 font-weight-black"},[t._v("\n          Save up to\n        ")]),t._v(" "),r("div",{staticClass:"secondary--text display-3 font-weight-black text-uppercase"},[r("span",{staticClass:"primary--text"},[t._v(t._s(t.product.discount)+"%")]),t._v(" off\n        ")]),t._v(" "),r("v-card-title",{staticClass:"prodTitle headline",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.product.title))]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("div",{staticClass:"grey--text text-decoration-line-through body-1"},[t._v("\n              "+t._s(t.price)+" EGP\n            ")]),t._v(" "),r("div",{staticClass:"display-1 font-weight-bold ms-3 primary--text"},[t._v("\n              "+t._s(t.price-t.price*(t.product.discount/100))+" EGP\n            ")])]),t._v(" "),t.endTime?t._e():r("v-btn",{staticClass:"text-capitalize my-4",attrs:{color:"#000",dark:"",width:"155px",height:"40px",elevation:"0",tile:""},on:{click:t.addToCart}},[t._v("Add To Cart")]),t._v(" "),t.endTime?r("div",{staticClass:"text-uppercase red--text title mt-3"},[t._v("\n            offer is over 😞\n          ")]):r("div",{staticClass:"text-uppercase mt-3"},[t._v("\n            hurry up! offer ends in\n          ")]),t._v(" "),r("count-down",{attrs:{deadline:t.getDeadLine},on:{finish:function(e){t.endTime=!0}}})],1)],1)])],1)],1)}),[],!1,null,"3cc851e8",null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:v.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VImg:_.a,VRating:m.a,VRow:x.a})},599:function(t,e,r){"use strict";r(572)},600:function(t,e,r){var o=r(11)(!1);o.push([t.i,".v-slide-group__next .v-icon,.v-slide-group__prev .v-icon{height:35px;width:70px;background-color:rgba(51,51,51,.3);border-color:rgba(51,51,51,.3);color:#fff}.v-slide-group__next .v-icon:hover,.v-slide-group__prev .v-icon:hover{background-color:var(--v-primary-base)!important}",""]),t.exports=o},618:function(t,e,r){"use strict";r.r(e);var o={components:{ProductItemInDetails:r(575).default},name:"sliderProducts",computed:{products:function(){return this.$store.getters["home/sliderProducts"]}}},n=(r(599),r(45)),c=r(50),d=r.n(c),l=r(496),v=r(591),f=r(592),h=r(524),_=r(140),m=r(70),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products.length>0?r("v-sheet",{staticClass:"mt-8",attrs:{color:"back"}},[r("v-container",[r("v-carousel",{attrs:{height:"auto","hide-delimiter-background":"","hide-delimiters":t.$vuetify.breakpoint.xs,"show-arrows-on-hover":"",cycle:""},scopedSlots:t._u([{key:"prev",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"elevation-0 btnHover",attrs:{color:"#3333335c",tile:"",width:"80px",height:"35px"}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-chevron-left")])],1)]}},{key:"next",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"elevation-0 btnHover",attrs:{tile:"",color:"#3333335c",width:"80px",height:"35px"}},"v-btn",n,!1),o),[r("v-icon",[t._v("mdi-chevron-right")])],1)]}}],null,!1,1211451748)},[t._v(" "),t._v(" "),t._l(t.products,(function(t,i){return r("v-carousel-item",{key:i+"slideItemDis"},[r("product-item-in-details",{attrs:{product:t,module:"home"}})],1)}))],2)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:l.a,VCarousel:v.a,VCarouselItem:f.a,VContainer:h.a,VIcon:_.a,VSheet:m.a})}}]);