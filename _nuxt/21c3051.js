(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{530:function(t,e,r){var content=r(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1e31d2a9",content,!0,{sourceMap:!1})},531:function(t,e,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("053a5c76",content,!0,{sourceMap:!1})},534:function(t,e,r){"use strict";r(530)},535:function(t,e,r){var o=r(11)(!1);o.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06);border-color:#aaa!important}.speedBtn:hover{background:var(--v-primary-base)!important;border-color:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=o},536:function(t,e,r){"use strict";r(531)},537:function(t,e,r){var o=r(11)(!1);o.push([t.i,".prodTitle[data-v-b18d26a4]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-b18d26a4]{transition:all .6s ease}.over[data-v-b18d26a4]{background:transparent;width:100%;height:100%}",""]),t.exports=o},543:function(t,e,r){"use strict";r.r(e);r(19),r(5),r(151);var o={name:"productItem",props:{product:{type:Object,required:!0},module:{type:String},isList:{type:[Boolean,Number],default:!1}},data:function(){return{hover:!1,attributes:{}}},computed:{price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,r){return t.attributes[e[r]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},n=(r(534),r(536),r(45)),c=r(50),l=r.n(c),d=r(501),v=r(236),m=r(150),f=r(141),h=r(184),_=r(546),x=r(520),y=r(560),w=r(561),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{"mx-auto":!0},attrs:{"max-width":t.isList?"100%":t.$vuetify.breakpoint.smAndDown?320:260,flat:"",tile:""},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)},mouseleave:function(e){t.hover=!1},mouseover:function(e){t.hover=!0}}},[r("v-row",{staticClass:"ma-0",class:{"justify-center":t.$vuetify.breakpoint.xs}},[r("v-img",{attrs:{eager:"",src:t.$getUrl(t.product.images[0]?t.product.images[t.hover&&t.product.images.length>1?1:0].full:""),"aspect-ratio":.8,"min-height":"340px","min-width":"272px"}},[r("div",{staticClass:"over",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}}),t._v(" "),t.isList?t._e():r("v-speed-dial",{staticStyle:{right:"36px"},attrs:{value:!!t.$vuetify.breakpoint.xs||t.hover,direction:"bottom",right:"",top:"",absolute:"",transition:"scale-transition"}},[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,2575880786)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.addToCart()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-cart-plus")])],1)]}}],null,!1,3614178842)},[t._v(" "),r("span",[t._v("add to cart")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,2753707616)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,909429238)},[t._v(" "),r("span",[t._v("quickview")])])],1)],1),t._v(" "),r("div",{staticStyle:{flex:"1"}},[r("v-card-title",{staticClass:"prodTitle secondary--text",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.product.title))]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.hover&&Object.keys(t.product.attributes).length>0,expression:"hover && Object.keys(product.attributes).length > 0"}],staticClass:"my-4 text-subtitle-1 grey--text prodAttr"},t._l(Object.values(t.product.attributes)[0],(function(e,o){return r("span",{key:o+"attri"},[t._v("\n            "+t._s(e.value)+"\n            "),o+1!=Object.values(t.product.attributes)[0].length?[t._v("/")]:t._e()],2)})),0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!hover"}],staticClass:"my-4 text-subtitle-1 primary--text"},[t._v("\n          "+t._s(t.price)+" EGP\n        ")]),t._v(" "),t.isList?r("p",[t._v(t._s(t.product.description))]):t._e(),t._v(" "),t.isList?r("div",[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666",small:""}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,126168594)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,774629934)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,3476783608)},[t._v(" "),r("span",[t._v("quickview")])]),t._v(" "),r("v-btn",{staticClass:"speedBtn white--text mt-2",attrs:{tile:"",elevation:"0",color:"black",height:"40"},on:{click:function(e){return t.addToCart()}}},[t._v("\n            add to cart\n          ")])],1):t._e()],1)],1)],1)],1)}),[],!1,null,"b18d26a4",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:m.b,VCardTitle:m.c,VIcon:f.a,VImg:h.a,VRating:_.a,VRow:x.a,VSpeedDial:y.a,VTooltip:w.a})},548:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("444df2f4",content,!0,{sourceMap:!1})},566:function(t,e,r){"use strict";r(548)},567:function(t,e,r){var o=r(11)(!1);o.push([t.i,".v-slide-group__next .v-icon,.v-slide-group__prev .v-icon{height:35px;width:70px;background-color:rgba(51,51,51,.3);border-color:rgba(51,51,51,.3);color:#fff}.v-slide-group__next .v-icon:hover,.v-slide-group__prev .v-icon:hover{background-color:var(--v-primary-base)!important}",""]),t.exports=o},578:function(t,e,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("da92293a",content,!0,{sourceMap:!1})},586:function(t,e,r){"use strict";r.r(e);var o={components:{ProductItem:r(543).default},name:"suggProducts",computed:{products:function(){return this.$store.getters["product/suggProducts"]}}},n=(r(566),r(45)),c=r(50),l=r.n(c),d=r(150),v=r(70),m=r(502),f=r(529),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.products.length>0?r("v-sheet",{staticClass:"mt-8"},[r("v-card-title",{staticClass:"justify-center secondary--text font-weight-bold",class:{"display-1":!t.$vuetify.breakpoint.xs,headline:!t.$vuetify.breakpoint.xs}},[t._v("other products in the same categories")]),t._v(" "),r("v-slide-group",{attrs:{"center-active":"","show-arrows":!t.$vuetify.breakpoint.xs}},t._l(t.products,(function(e,o){return r("v-slide-item",{key:e.sku+e.name+o+"sugg",scopedSlots:t._u([{key:"default",fn:function(t){var o=t.toggle;return[r("div",{staticClass:"mx-4"},[r("product-item",{attrs:{product:e,module:"products"},on:{click:o}})],1)]}}],null,!0)})})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCardTitle:d.c,VSheet:v.a,VSlideGroup:m.b,VSlideItem:f.a})},600:function(t,e,r){"use strict";r(578)},601:function(t,e,r){var o=r(11)(!1);o.push([t.i,".inputPrice input[type=number]{-moz-appearance:textfield}.inputPrice input::-webkit-inner-spin-button,.inputPrice input::-webkit-outer-spin-button{-webkit-appearance:none}.imageBorder{border-radius:3px;border:1px solid #fff;opacity:.9;transition:all .4s ease}.selected{opacity:1;border:1px solid var(--v-primary-base)}.nativeSelect{width:200px;box-shadow:0 0 0;border:1px solid #ebebeb;height:40px;-webkit-appearance:none;background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAPklEQVR4Ae3TwREAEBQD0V/6do4SXPZg7EsBhsQ8IEmSMOsiuEfg3gL3oXC7wK0bd1G4o8X9F4yIkyQfSrIByQBjp7QuND8AAAAASUVORK5CYII=) no-repeat scroll right .5rem center/1.25rem 1.25rem;padding:0 .5rem}.nativeSelect:focus{outline:1px solid var(--v-primary-base)}#quaInputQuickView{text-align:center}",""]),t.exports=o},630:function(t,e,r){"use strict";r.r(e);var o=r(27),n=(r(6),r(53),r(46),r(5),r(81),r(151),r(87),{components:{suggProducts:r(586).default},name:"productPage",data:function(){return{attributes:{},selectedImage:0,quantity:1,sale_price:0,tab:null,rate:0}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("product/getProduct",t.$route.params.productId);case 2:case"end":return e.stop()}}),e)})))()},computed:{product:function(){return this.$store.getters["product/product"]},contentClass:function(){return this.$vuetify.breakpoint.smAndDown?"mx-2":""}},head:function(){return{title:this.product?this.product.metaTitle||this.product.title:"product",meta:[{hid:"description",name:"description",content:this.product?this.product.metaDescription||this.product.description:"product"}]}},methods:{openImage:function(t){this.$store.commit("product/setSelectedImage",t),this.$store.commit("product/selectedProduct",this.product)},price:function(){var t=this;if(this.product){var e=Object.keys(this.attributes).map((function(e){return t.product.attributes[e].find((function(r){return r.id===t.attributes[e]}))}));this.sale_price=Object.values(e).reduce((function(a,i){return+i.price+a}),+this.product.sale_price)}},setItem:function(t,e){var r=this;this.$nextTick((function(){r.$set(r.attributes,e,+t.target.value),r.price(),r.$forceUpdate()}))},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:this.quantity,attributes:this.attributes})},quickview:function(){this.$store.commit("product/setQuickview",null)},setVal:function(t,e,r){0===e&&(this.attributes[t]=r)}},destroyed:function(){this.$store.commit("product/setProduct",{data:null})},watch:{product:function(t){if(this.attributes={},t)for(var e in t.attributes)this.attributes[e]=t.attributes[e][0].id},attributes:{deep:!0,handler:function(){this.price()}},quantity:function(t){t<1&&(this.quantity=1)}}}),c=(r(600),r(45)),l=r(50),d=r.n(l),v=r(501),m=r(236),f=r(150),h=r(514),_=r(528),x=r(184),y=r(546),w=r(520),k=r(70),C=r(502),V=r(529),$=r(623),A=r(624),I=r(637),S=r(604),T=r(94),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("v-card",{staticClass:"pb-6 mt-3",class:{"px-16":t.$vuetify.breakpoint.mdAndUp,"px-8":t.$vuetify.breakpoint.sm,"px-2":t.$vuetify.breakpoint.xs},attrs:{flat:""}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-row",[r("v-col",{staticClass:"px-1",attrs:{cols:"12"}},[r("v-img",{staticClass:"mx-2",attrs:{"max-height":"650px","max-width":"520px","aspect-ratio":.8,src:t.$getUrl(t.product.images[t.selectedImage].full)},on:{click:function(e){return t.openImage(t.selectedImage)}}})],1),t._v(" "),t.product.images.length>0?r("v-col",{staticClass:"px-2",attrs:{cols:"12"}},[r("v-slide-group",{attrs:{mandatory:"","show-arrows":!t.$vuetify.breakpoint.xs}},t._l(t.product.images,(function(e,o){return r("v-slide-item",{key:"quickImage"+o},[r("v-img",{staticClass:"mb-3 imageBorder mx-1",class:{selected:o==t.selectedImage},attrs:{src:t.$getUrl(e.full),height:"100px","max-width":"80px"},on:{click:function(e){t.selectedImage=o}}})],1)})),1)],1):t._e()],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card-title",{staticClass:"pa-0 display-1"},[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"mt-4 headline primary--text"},[t._v(t._s(t.sale_price)+" EGP")]),t._v(" "),t._l(t.product.attributes,(function(e,o){return r("div",{key:"attri"+o},[r("v-card-title",{staticClass:"px-0 secondary--text"},[t._v(t._s(e[0].attribute.name))]),t._v(" "),r("select",{staticClass:"nativeSelect",domProps:{value:t.attributes[o]},on:{change:function(e){return t.setItem(e,o)}}},t._l(e,(function(e){return r("option",{key:"attriItem"+e.id,domProps:{value:e.id}},[t._v("\n              "+t._s(e.value)+"\n            ")])})),0),+e.find((function(e){return e.id==t.attributes[o]})).price?r("span",{staticClass:"mx-2"},[t._v("+"+t._s(+e.find((function(e){return e.id==t.attributes[o]})).price))]):t._e()],1)})),t._v(" "),r("div",[r("v-card-title",{staticClass:"px-0 secondary--text"},[t._v("Quantity")]),t._v(" "),r("v-sheet",{staticClass:"d-flex"},[r("v-text-field",{staticClass:"inputPrice",staticStyle:{flex:"unset !important","border-radius":"0",width:"120px"},attrs:{"append-icon":"mdi-plus","prepend-inner-icon":"mdi-minus","hide-details":"",height:"40px",type:"number",outlined:"",id:"quaInputQuickView",dense:""},on:{"click:append":function(e){t.quantity++},"click:prepend-inner":function(e){t.quantity--}},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t._v(" "),r("v-btn",{staticClass:"text-capitalize mx-3",attrs:{color:"#000",dark:"",width:"155px",height:"40px",elevation:"0",tile:""},on:{click:t.addToCart}},[t._v("Add To Cart")])],1)],1)],2)],1)],1),t._v(" "),r("v-tabs",{staticClass:"mt-12",attrs:{color:"secondary","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{staticClass:"px-0 me-4 text-capitalize fornt-weight-bold headline"},[t._v("\n      Description\n    ")]),t._v(" "),r("v-tab",{staticClass:"px-0 me-4 text-capitalize fornt-weight-bold headline"},[t._v("\n      Product Details\n    ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[t._v(t._s(t.product.description))])],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",t._l(t.product.options,(function(e){return r("div",{key:e.name+"op",staticClass:"mb-2"},[r("span",{staticClass:"secondary--text subtitle-1 font-weight-bold"},[t._v(t._s(e.name))]),t._v(" "),r("span",{staticClass:"textGrey--text"},[t._v(t._s(e.value))])])})),0)],1)],1)],1),t._v(" "),r("v-card-title",{staticClass:"headline secondary--text text-capitalize px-0"},[t._v("review")]),t._v(" "),r("v-btn",{staticClass:"text-capitalize mb-4",attrs:{outlined:""}},[t._v("write a customer review\n  ")]),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:5,color:"amber",hover:"",readonly:"",clearable:"",size:"30"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("5 (413)")])],1),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4,color:"amber",hover:"",readonly:"",clearable:"",size:"30"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("4 (413)")])],1),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:3,color:"amber",hover:"",readonly:"",clearable:"",size:"30"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("3 (413)")])],1),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:2,color:"amber",hover:"",readonly:"",clearable:"",size:"30"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("2 (413)")])],1),t._v(" "),r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:1,color:"amber",hover:"",readonly:"",clearable:"",size:"30"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("1 (413)")])],1),t._v(" "),r("sugg-products")],1):t._e()}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VContainer:_.a,VImg:x.a,VRating:y.a,VRow:w.a,VSheet:k.a,VSlideGroup:C.b,VSlideItem:V.a,VTab:$.a,VTabItem:A.a,VTabs:I.a,VTabsItems:S.a,VTextField:T.a})}}]);