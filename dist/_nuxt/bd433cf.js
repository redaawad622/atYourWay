(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8],{529:function(t,e,n){var content=n(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5939d713",content,!0,{sourceMap:!1})},530:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=r},533:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("555be74e",content,!0,{sourceMap:!1})},549:function(t,e,n){var r=n(10),o=Math.ceil,l=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?l:o)(t)}})},550:function(t,e,n){"use strict";n(533)},551:function(t,e,n){var r=n(11)(!1);r.push([t.i,'.vuejs-countdown{padding:0!important;margin:0}.vuejs-countdown li{display:inline-block;margin:0 2px;text-align:center;position:relative}.vuejs-countdown li p{margin:0}.vuejs-countdown li:first-of-type{margin-left:0}.vuejs-countdown li:last-of-type{margin-right:0}.vuejs-countdown li:last-of-type:after{content:""}.vuejs-countdown .digit{color:var(--v-primary-base);font-size:24px;overflow:hidden;position:static;width:64px;height:64px;line-height:68px;background:#fff;border-radius:100%;margin-bottom:15px;box-shadow:0 2px 6px 0 rgb(0 0 0/6%)}.vuejs-countdown .digit,.vuejs-countdown .text{display:block;text-align:center;font-weight:600}.vuejs-countdown .text{font-size:12px;width:100%;color:#666;padding:0;text-transform:uppercase;line-height:1}',""]),t.exports=r},552:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6bc069ed",content,!0,{sourceMap:!1})},553:function(t,e,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("d7f2f31a",content,!0,{sourceMap:!1})},554:function(t,e,n){"use strict";n(19),n(245),n(45),n(529);var r=n(42),o=n(16),l=n(149),c=n(109),d=n(60),v=n(2).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),h=n(15),f=n(0),m=n(3);e.a=Object(m.a)(o.a,l.a,v,c.a,h.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,r=t.light,o=t.medium,small=t.small;return{dark:e,large:n,light:r,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(f.g)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},556:function(t,e,n){"use strict";n.r(e);n(549),n(30),n(69),n(46),n(21),n(63);var r=null,o={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");r=setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(r),this.$emit("finish"))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(r)}},l=(n(550),n(44)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("min")])]),t._v(" "),n("li",[n("p",{staticClass:"digit secondary--text"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("Sec")])])])}),[],!1,null,null,null);e.default=component.exports},560:function(t,e,n){"use strict";n(552)},561:function(t,e,n){var r=n(11)(!1);r.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06)}.speedBtn:hover{background:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=r},562:function(t,e,n){"use strict";n(553)},563:function(t,e,n){var r=n(11)(!1);r.push([t.i,".prodTitle[data-v-3cc851e8]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-3cc851e8]{transition:all .6s ease}.over[data-v-3cc851e8]{background:transparent;width:100%;height:100%}.lblProd[data-v-3cc851e8]{font-size:12px;padding:3px 10px;width:50px;display:block}",""]),t.exports=r},582:function(t,e,n){"use strict";n.r(e);n(21),n(63),n(5),n(148);var r={components:{countDown:n(556).default},name:"productItemInDetails",props:{product:{type:Object,required:!0},module:{type:String}},data:function(){return{hover:!1,attributes:{},endTime:!1}},computed:{isNew:function(){var t=new Date(this.product.created_at);return t.setDate(t.getDate()+2),t>=new Date},getDeadLine:function(){return new Date(new Date(this.product.startDate+" UTC").getTime()+6e4*this.product.duration).toString()},price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,n){return t.attributes[e[n]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},o=(n(560),n(562),n(44)),l=n(51),c=n.n(l),d=n(500),v=n(233),h=n(147),f=n(513),m=n(181),x=n(554),y=n(519),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-16",attrs:{flat:"",tile:"",color:"transparent"},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)}}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-img",{class:{"ms-auto":!t.$vuetify.breakpoint.xs,"mx-auto":t.$vuetify.breakpoint.xs},attrs:{eager:"",src:t.$getUrl(t.product.images[t.hover&&t.product.images.length>1?1:0].full),"min-height":t.$vuetify.breakpoint.xs?"auto":"410px","max-height":t.$vuetify.breakpoint.xs?"410px":"450px","max-width":t.$vuetify.breakpoint.xs?"auto":"350px"},on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[n("div",{staticStyle:{top:"30px",position:"relative"}},[n("div",{staticClass:"mb-3"},[n("span",{staticClass:"primary white--text lblProd"},[t._v(t._s(t.product.discount)+"%")])]),t._v(" "),t.isNew?n("div",[n("span",{staticClass:"secondary white--text lblProd"},[t._v("New")])]):t._e()])])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("div",{class:{"ms-auto":!t.$vuetify.breakpoint.xs,"mx-auto":t.$vuetify.breakpoint.xs}},[n("div",{staticClass:"secondary--text display-3 mb-2 font-weight-black"},[t._v("\n          Save up to\n        ")]),t._v(" "),n("div",{staticClass:"secondary--text display-3 font-weight-black text-uppercase"},[n("span",{staticClass:"primary--text"},[t._v(t._s(t.product.discount)+"%")]),t._v(" off\n        ")]),t._v(" "),n("v-card-title",{staticClass:"prodTitle headline",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.product.title))]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),n("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("div",{staticClass:"grey--text text-decoration-line-through body-1"},[t._v("\n              "+t._s(t.price)+" EGP\n            ")]),t._v(" "),n("div",{staticClass:"display-1 font-weight-bold ms-3 primary--text"},[t._v("\n              "+t._s(t.price-t.price*(t.product.discount/100))+" EGP\n            ")])]),t._v(" "),t.endTime?t._e():n("v-btn",{staticClass:"text-capitalize my-4",attrs:{color:"#000",dark:"",width:"155px",height:"40px",elevation:"0",tile:""},on:{click:t.addToCart}},[t._v("Add To Cart")]),t._v(" "),t.endTime?n("div",{staticClass:"text-uppercase red--text title mt-3"},[t._v("\n            offer is over 😞\n          ")]):n("div",{staticClass:"text-uppercase mt-3"},[t._v("\n            hurry up! offer ends in\n          ")]),t._v(" "),n("count-down",{attrs:{deadline:t.getDeadLine},on:{finish:function(e){t.endTime=!0}}})],1)],1)])],1)],1)}),[],!1,null,"3cc851e8",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VImg:m.a,VRating:x.a,VRow:y.a})}}]);