(window.webpackJsonp=window.webpackJsonp||[]).push([[27,11],{547:function(t,e,r){var content=r(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1e31d2a9",content,!0,{sourceMap:!1})},548:function(t,e,r){var content=r(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("34539941",content,!0,{sourceMap:!1})},551:function(t,e,r){"use strict";r(547)},552:function(t,e,r){var o=r(11)(!1);o.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06);border-color:#aaa!important}.speedBtn:hover{background:var(--v-primary-base)!important;border-color:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=o},553:function(t,e,r){"use strict";r(548)},554:function(t,e,r){var o=r(11)(!1);o.push([t.i,".prodTitle[data-v-0ab6d038]{font-size:1rem}.prodTitle[data-v-0ab6d038]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-0ab6d038]{transition:all .6s ease}.over[data-v-0ab6d038]{background:transparent;width:100%;height:100%}",""]),t.exports=o},557:function(t,e,r){"use strict";r.r(e);r(19),r(4),r(131);var o={components:{imgSlot:r(254).default},name:"productItem",props:{product:{type:Object,required:!0},module:{type:String},isList:{type:[Boolean,Number],default:!1}},data:function(){return{hover:!1,attributes:{}}},computed:{price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,r){return t.attributes[e[r]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},n=(r(551),r(553),r(29)),c=r(31),l=r.n(c),v=r(517),d=r(239),h=r(77),f=r(147),m=r(190),_=r(579),y=r(532),x=r(600),w=r(601),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:{"mx-auto":!0},attrs:{"max-width":t.isList?"100%":t.$vuetify.breakpoint.smAndDown?320:260,flat:"",tile:""},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)},mouseleave:function(e){t.hover=!1},mouseover:function(e){t.hover=!0}}},[r("v-row",{staticClass:"ma-0",class:{"justify-center":t.$vuetify.breakpoint.xs}},[r("v-img",{attrs:{eager:"",src:t.$getUrl(t.product.images[0]?t.product.images[t.hover&&t.product.images.length>1?1:0].full:""),contain:!!t.product.images[0]&&Boolean(t.product.images[t.hover&&t.product.images.length>1?1:0].auto),"aspect-ratio":t.product.images[0]?t.product.images[t.hover&&t.product.images.length>1?1:0].aspect_ratio:.8,"min-height":"340px","min-width":"272px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("img-slot")]},proxy:!0}])},[t._v(" "),r("div",{staticClass:"over",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}}),t._v(" "),t.isList?t._e():r("v-speed-dial",{staticStyle:{right:"36px"},attrs:{value:!!t.$vuetify.breakpoint.xs||t.hover,direction:"bottom",right:"",top:"",absolute:"",transition:"scale-transition"}},[r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,2575880786)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.addToCart()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-cart-plus")])],1)]}}],null,!1,3614178842)},[t._v(" "),r("span",[t._v("add to cart")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,2753707616)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,909429238)},[t._v(" "),r("span",[t._v("quickview")])])],1)],1),t._v(" "),r("div",{staticStyle:{flex:"1"}},[r("v-card-title",{staticClass:"prodTitle secondary--text",attrs:{title:t.product.title},on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.$subStr(t.product.title)))]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.hover&&Object.keys(t.product.attributes).length>0,expression:"hover && Object.keys(product.attributes).length > 0"}],staticClass:"my-4 text-subtitle-1 grey--text prodAttr"},t._l(Object.values(t.product.attributes)[0],(function(e,o){return r("span",{key:o+"attri"},[t._v("\n            "+t._s(e.value)+"\n            "),o+1!=Object.values(t.product.attributes)[0].length?[t._v("/")]:t._e()],2)})),0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!hover"}],staticClass:"my-4 text-subtitle-1 primary--text"},[t._v("\n          "+t._s(t.price)+" EGP\n        ")]),t._v(" "),t.isList?r("p",[t._v(t._s(t.product.description))]):t._e(),t._v(" "),t.isList?r("div",[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.product.isFav?r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-heart")])],1):r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666",small:""}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,126168594)},[t._v(" "),r("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,774629934)},[t._v(" "),r("span",[t._v("add to compare")])]),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.quickview()}}},"v-btn",n,!1),o),[r("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,3476783608)},[t._v(" "),r("span",[t._v("quickview")])]),t._v(" "),r("v-btn",{staticClass:"speedBtn white--text mt-2",attrs:{tile:"",elevation:"0",color:"black",height:"40"},on:{click:function(e){return t.addToCart()}}},[t._v("\n            add to cart\n          ")])],1):t._e()],1)],1)],1)],1)}),[],!1,null,"0ab6d038",null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:h.c,VCardTitle:h.d,VIcon:f.a,VImg:m.a,VRating:_.a,VRow:y.a,VSpeedDial:x.a,VTooltip:w.a})},602:function(t,e,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3c0eddd7",content,!0,{sourceMap:!1})},603:function(t,e,r){var o=r(11)(!1);o.push([t.i,".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}",""]),t.exports=o},615:function(t,e,r){var content=r(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("b7baac86",content,!0,{sourceMap:!1})},616:function(t,e,r){var content=r(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("32d9221a",content,!0,{sourceMap:!1})},624:function(t,e,r){"use strict";r.r(e);r(9);var o={data:function(){return{selectedPrice:0,priceList:[{txt:"any price",min:"",max:""},{txt:"up to 10EGP",min:0,max:10},{txt:"10EGP to 25EGP",min:10,max:25},{txt:"25EGP to 50EGP",min:25,max:50},{txt:"50EGP to 100EGP",min:50,max:100},{txt:"100EGP & above",min:100,max:""}],filter:{min:"",max:""},neighborhoods:[1]}},methods:{updateFilter:function(){this.$emit("setFilter",this.filter)}},watch:{selectedPrice:function(t){var e=this.priceList[t];this.filter.min=e.min,this.filter.max=e.max,this.updateFilter()}}},n=r(29),c=r(31),l=r.n(c),v=r(517),d=r(239),h=r(77),f=r(241),m=r(649),_=r(147),y=r(71),x=r(97),w=r(89),k=r(0),C=Object(k.h)("v-toolbar__title"),O=Object(k.h)("v-toolbar__items"),component=(w.a,Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{flat:"",color:"secondary",dark:""}},[r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[t.$vuetify.breakpoint.mdAndUp?t._e():r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Filter results")])],1),t._v(" "),r("v-card-text",[r("h2",{staticClass:"text-h6 mb-2"},[t._v("Price")]),t._v(" "),r("v-chip-group",{attrs:{column:""},model:{value:t.selectedPrice,callback:function(e){t.selectedPrice=e},expression:"selectedPrice"}},t._l(t.priceList,(function(e){return r("v-chip",{key:e.txt,attrs:{filter:"","active-class":"accent"}},[t._v("\n        "+t._s(e.txt)+"\n      ")])})),1),t._v(" "),r("v-sheet",{staticClass:"d-flex"},[r("v-text-field",{staticClass:"me-2",attrs:{type:"number",suffix:"egp",height:30,outlined:"",dense:"",placeholder:"min"},model:{value:t.filter.min,callback:function(e){t.$set(t.filter,"min",t._n(e))},expression:"filter.min"}}),t._v(" "),r("v-text-field",{staticClass:"me-2",attrs:{type:"number",suffix:"egp",height:30,outlined:"",dense:"",placeholder:"max"},model:{value:t.filter.max,callback:function(e){t.$set(t.filter,"max",t._n(e))},expression:"filter.max"}}),t._v(" "),r("v-btn",{staticClass:"btn",attrs:{elevation:"0","max-height":"30px","max-width":"34px","min-width":"34px"},on:{click:function(e){return t.updateFilter()}}},[t._v("go")])],1)],1),t._v(" "),r("v-card-text",[r("h2",{staticClass:"text-h6 mb-2"},[t._v("test")]),t._v(" "),r("v-chip-group",{attrs:{column:"",multiple:""},model:{value:t.neighborhoods,callback:function(e){t.neighborhoods=e},expression:"neighborhoods"}},[r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Snowy Rock Place ")]),t._v(" "),r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Honeylane Circle ")]),t._v(" "),r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Donna Drive ")]),t._v(" "),r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Elaine Street ")]),t._v(" "),r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Court Street ")]),t._v(" "),r("v-chip",{attrs:{filter:"",outlined:""}},[t._v(" Kennedy Park ")])],1)],1)],1)}),[],!1,null,null,null));e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:h.c,VChip:f.a,VChipGroup:m.a,VIcon:_.a,VSheet:y.a,VTextField:x.a,VToolbar:w.a,VToolbarTitle:C})},649:function(t,e,r){"use strict";r(4),r(7),r(9),r(13),r(6),r(14);var o=r(1),n=(r(602),r(518)),c=r(16),l=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(n.a,c.a).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return d(d({},n.a.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,d({},n.a.options.methods.genData.call(this)))}}})},650:function(t,e,r){"use strict";r(615)},651:function(t,e,r){var o=r(11)(!1);o.push([t.i,"input[type=number][data-v-29142a8e]{-moz-appearance:textfield}input[data-v-29142a8e]::-webkit-inner-spin-button,input[data-v-29142a8e]::-webkit-outer-spin-button{-webkit-appearance:none}",""]),t.exports=o},652:function(t,e,r){"use strict";r(616)},653:function(t,e,r){var o=r(11)(!1);o.push([t.i,".v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:auto!important}",""]),t.exports=o},684:function(t,e,r){"use strict";r.r(e);r(4),r(13),r(6),r(14);var o=r(1),n=r(26),c=(r(30),r(7),r(54),r(9),r(85),r(624));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={auth:!1,components:{ProductItem:r(557).default,FilterList:c.default},data:function(){return{isList:0,options:{sort:"relevance",page:1},filterSheet:!1,filter:{min:"",max:""}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("category/getCategory",v({id:t.$route.params.categoryId},t.options));case 2:case"end":return e.stop()}}),e)})))()},computed:{category:function(){return this.$store.getters["category/category"]},products:function(){return this.$store.getters["category/products"]},meta:function(){return this.$store.getters["category/meta"]}},head:function(){return{title:this.category?this.category.name:"category",meta:[{hid:"description",name:"description",content:this.category?this.category.description:"category description"}]}},methods:{setFilter:function(filter){this.filter=filter,this.makeFilter()},makeFilter:function(){this.$store.dispatch("category/getCategory",v(v({id:this.$route.params.categoryId},this.options),this.filter))}},watch:{options:{handler:function(){this.makeFilter()},deep:!0}},destroyed:function(){this.$store.commit("category/setCategory",{category:null,products:[]})}},h=(r(650),r(652),r(29)),f=r(31),m=r.n(f),_=r(517),y=r(676),x=r(239),w=r(77),k=r(241),C=r(649),O=r(530),j=r(544),P=r(147),V=r(677),$=r(532),S=r(71),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.category?r("v-card",{staticClass:"pb-6 mt-3 px-3",attrs:{flat:""}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r(t.$vuetify.breakpoint.mdAndUp?"v-sheet":"v-bottom-sheet",{tag:"component",model:{value:t.filterSheet,callback:function(e){t.filterSheet=e},expression:"filterSheet"}},[r("filter-list",{on:{close:function(e){t.filterSheet=!1},setFilter:t.setFilter}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-card-title",{staticClass:"px-0 secondary--text"},[t._v(t._s(t.category.name))]),t._v(" "),r("v-card-subtitle",{staticClass:"px-0"},[t._v(t._s(t.category.description))]),t._v(" "),t.category.children.length>0?r("v-card-subtitle",{staticClass:"pa-0"},[t._v("sub categories")]):t._e(),t._v(" "),r("v-chip-group",{attrs:{"active-class":"primary--text"}},t._l(t.category.children,(function(e){return r("v-chip",{key:e.id+"subCats",attrs:{to:"/categories/"+e.slug}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1),t._v(" "),r("v-sheet",{staticClass:"d-flex justify-space-between py-4"},[r("v-btn-toggle",{attrs:{color:"primary",dense:"",group:""},model:{value:t.isList,callback:function(e){t.isList=e},expression:"isList"}},[r("v-btn",{attrs:{value:0,icon:""}},[r("v-icon",[t._v("mdi-dots-grid ")])],1),t._v(" "),r("v-btn",{attrs:{value:1,icon:""}},[r("v-icon",[t._v("mdi-format-list-bulleted-square ")])],1)],1),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.options.sort,expression:"options.sort"}],staticClass:"nativeSelect",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.options,"sort",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"relevance"}},[t._v("Relevance")]),t._v(" "),r("option",{attrs:{value:"atoz"}},[t._v("Name, A to Z")]),t._v(" "),r("option",{attrs:{value:"ztoa"}},[t._v("Name, Z to A")]),t._v(" "),r("option",{attrs:{value:"low"}},[t._v("Price, low to high")]),t._v(" "),r("option",{attrs:{value:"high"}},[t._v("Price, high to low")])]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?t._e():r("v-btn",{attrs:{icon:""},on:{click:function(e){t.filterSheet=!0}}},[r("v-icon",[t._v("mdi-filter-outline")])],1)],1),t._v(" "),r("v-row",t._l(t.products,(function(e,o){return r("v-col",{key:e.title+e.id+o+"cat",attrs:{cols:"12",sm:t.isList?12:6,md:t.isList?12:6,lg:t.isList?6:4,xl:t.isList?4:2}},[r("product-item",{attrs:{isList:!t.$vuetify.breakpoint.xs&&t.isList,product:e,module:"category"}})],1)})),1),t._v(" "),t.meta.last_page?r("v-pagination",{attrs:{length:t.meta.last_page,circle:""},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}}):t._e()],1)],1)],1)],1):t._e()}),[],!1,null,"29142a8e",null);e.default=component.exports;m()(component,{VBtn:_.a,VBtnToggle:y.a,VCard:x.a,VCardSubtitle:w.b,VCardTitle:w.d,VChip:k.a,VChipGroup:C.a,VCol:O.a,VContainer:j.a,VIcon:P.a,VPagination:V.a,VRow:$.a,VSheet:S.a})}}]);