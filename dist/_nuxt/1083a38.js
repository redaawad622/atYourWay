(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{524:function(t,e,r){var content=r(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1e31d2a9",content,!0,{sourceMap:!1})},525:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("063979d7",content,!0,{sourceMap:!1})},528:function(t,e,r){"use strict";r(524)},529:function(t,e,r){var o=r(13)(!1);o.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06);border-color:#aaa!important}.speedBtn:hover{background:var(--v-primary-base)!important;border-color:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=o},530:function(t,e,r){"use strict";r(525)},531:function(t,e,r){var o=r(13)(!1);o.push([t.i,".prodTitle[data-v-02e121a4]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-02e121a4]{transition:all .6s ease}.over[data-v-02e121a4]{background:transparent;width:100%;height:100%}",""]),t.exports=o},547:function(t,e,r){"use strict";r.r(e);r(19),r(5),r(185);var o={name:"productItem",props:{product:{type:Object,required:!0},module:{type:String},isList:{type:[Boolean,Number],default:!1}},data:function(){return{hover:!1,attributes:{}}},computed:{price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,r){return t.attributes[e[r]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},n=(r(528),r(530),r(45)),c=r(50),l=r.n(c),v=r(492),d=r(233),m=r(149),h=r(140),_=r(182),f=r(546),y=r(512),w=r(559),k=r(560),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{"mx-auto":!0},attrs:{"max-width":t.isList?"100%":t.$vuetify.breakpoint.smAndDown?320:260,flat:"",tile:""},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)},mouseleave:function(e){t.hover=!1},mouseover:function(e){t.hover=!0}}},[r("v-row",{staticClass:"ma-0",class:{"justify-center":t.$vuetify.breakpoint.xs}},[r("v-img",{attrs:{eager:"",contain:"",src:t.$getUrl(t.product.images[t.hover&&t.product.images.length>1?1:0].full),height:"350px","max-width":t.isList?t.$vuetify.breakpoint.smAndDown?300:260:"100%"}},[r("div",{staticClass:"over",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}}),t._v(" "),t.isList?t._e():r("v-speed-dial",{staticStyle:{right:"36px"},attrs:{value:!!t.$vuetify.breakpoint.xs||t.hover,direction:"bottom",right:"",top:"",absolute:"",transition:"scale-transition"}},[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,2575880786)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.addToCart()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-cart-plus")])],1)]}}],null,!1,3614178842)},[t._v(" "),r("span",[t._v("add to cart")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,2753707616)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,909429238)},[t._v(" "),r("span",[t._v("quickview")])])],1)],1),t._v(" "),r("div",{staticStyle:{flex:"1"}},[r("v-card-title",{staticClass:"prodTitle secondary--text",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.product.title))]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.hover&&Object.keys(t.product.attributes).length>0,expression:"hover && Object.keys(product.attributes).length > 0"}],staticClass:"my-4 text-subtitle-1 grey--text prodAttr"},t._l(Object.values(t.product.attributes)[0],(function(e,o){return r("span",{key:o+"attri"},[t._v("\n            "+t._s(e.value)+"\n            "),o+1!=Object.values(t.product.attributes)[0].length?[t._v("/")]:t._e()],2)})),0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!hover"}],staticClass:"my-4 text-subtitle-1 primary--text"},[t._v("\n          "+t._s(t.price)+" EGP\n        ")]),t._v(" "),t.isList?r("p",[t._v(t._s(t.product.description))]):t._e(),t._v(" "),t.isList?r("div",[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666",small:""}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,126168594)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,774629934)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,3476783608)},[t._v(" "),r("span",[t._v("quickview")])]),t._v(" "),r("v-btn",{staticClass:"speedBtn white--text mt-2",attrs:{tile:"",elevation:"0",color:"black",height:"40"},on:{click:function(e){return t.addToCart()}}},[t._v("\n            add to cart\n          ")])],1):t._e()],1)],1)],1)],1)}),[],!1,null,"02e121a4",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:m.b,VCardTitle:m.c,VIcon:h.a,VImg:_.a,VRating:f.a,VRow:y.a,VSpeedDial:w.a,VTooltip:k.a})},601:function(t,e,r){"use strict";r.r(e);r(5),r(8),r(11),r(7),r(12);var o=r(1),n=r(27);r(28),r(6),r(53),r(85);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{ProductItem:r(547).default},data:function(){return{isList:0,options:{sort:"relevance",page:1}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("category/getCategory",l({id:t.$route.params.categoryId},t.options));case 2:case"end":return e.stop()}}),e)})))()},computed:{category:function(){return this.$store.getters["category/category"]},products:function(){return this.$store.getters["category/products"]},meta:function(){return this.$store.getters["category/meta"]}},head:function(){return{title:this.category?this.category.name:"category",meta:[{hid:"description",name:"description",content:this.category?this.category.description:"category description"}]}},watch:{options:{handler:function(t){this.$store.dispatch("category/getCategory",l({id:this.$route.params.categoryId},t))},deep:!0}},destroyed:function(){this.$store.commit("category/setCategory",{category:null,products:[]})}},d=r(45),m=r(50),h=r.n(m),_=r(492),f=r(596),y=r(233),w=r(149),k=r(229),x=r(597),C=r(506),O=r(520),j=r(140),$=r(598),V=r(512),B=r(70),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.category?r("v-card",{staticClass:"pb-6 mt-3 px-3",attrs:{flat:""}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-card-title",{staticClass:"px-0 secondary--text"},[t._v(t._s(t.category.name))]),t._v(" "),r("v-card-subtitle",{staticClass:"px-0"},[t._v(t._s(t.category.description))]),t._v(" "),t.category.children.length>0?r("v-card-subtitle",{staticClass:"pa-0"},[t._v("sub categories")]):t._e(),t._v(" "),r("v-chip-group",{attrs:{"active-class":"primary--text"}},t._l(t.category.children,(function(e){return r("v-chip",{key:e.id+"subCats",attrs:{to:"/categories/"+e.slug}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1),t._v(" "),r("v-sheet",{staticClass:"d-flex justify-space-between py-4"},[r("v-btn-toggle",{attrs:{color:"primary",dense:"",group:""},model:{value:t.isList,callback:function(e){t.isList=e},expression:"isList"}},[r("v-btn",{attrs:{value:0,icon:""}},[r("v-icon",[t._v("mdi-dots-grid ")])],1),t._v(" "),r("v-btn",{attrs:{value:1,icon:""}},[r("v-icon",[t._v("mdi-format-list-bulleted-square ")])],1)],1),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.options.sort,expression:"options.sort"}],staticClass:"nativeSelect",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.options,"sort",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"relevance"}},[t._v("Relevance")]),t._v(" "),r("option",{attrs:{value:"atoz"}},[t._v("Name, A to Z")]),t._v(" "),r("option",{attrs:{value:"ztoa"}},[t._v("Name, Z to A")]),t._v(" "),r("option",{attrs:{value:"low"}},[t._v("Price, low to high")]),t._v(" "),r("option",{attrs:{value:"high"}},[t._v("Price, high to low")])])],1),t._v(" "),r("v-row",t._l(t.products,(function(e,o){return r("v-col",{key:e.title+e.id+o+"cat",attrs:{cols:"12",sm:t.isList?12:6,md:t.isList?12:4,lg:t.isList?6:3,xl:t.isList?4:2}},[r("product-item",{attrs:{isList:!t.$vuetify.breakpoint.xs&&t.isList,product:e,module:"category"}})],1)})),1),t._v(" "),t.meta.last_page?r("v-pagination",{attrs:{length:t.meta.last_page,circle:""},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}}):t._e()],1)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:_.a,VBtnToggle:f.a,VCard:y.a,VCardSubtitle:w.a,VCardTitle:w.c,VChip:k.a,VChipGroup:x.a,VCol:C.a,VContainer:O.a,VIcon:j.a,VPagination:$.a,VRow:V.a,VSheet:B.a})}}]);