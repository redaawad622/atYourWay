(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{547:function(t,e,o){var content=o(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("1e31d2a9",content,!0,{sourceMap:!1})},548:function(t,e,o){var content=o(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("34539941",content,!0,{sourceMap:!1})},549:function(t,e,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("5939d713",content,!0,{sourceMap:!1})},550:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=n},551:function(t,e,o){"use strict";o(547)},552:function(t,e,o){var n=o(11)(!1);n.push([t.i,".speedBtn{box-shadow:0 2px 6px 0 rgba(0,0,0,.06);border-color:#aaa!important}.speedBtn:hover{background:var(--v-primary-base)!important;border-color:var(--v-primary-base)!important}.speedBtn:hover .v-icon{color:#fff!important}",""]),t.exports=n},553:function(t,e,o){"use strict";o(548)},554:function(t,e,o){var n=o(11)(!1);n.push([t.i,".prodTitle[data-v-0ab6d038]{font-size:1rem}.prodTitle[data-v-0ab6d038]:hover{color:var(--v-primary-base)!important;cursor:pointer}.prodAttr[data-v-0ab6d038]{transition:all .6s ease}.over[data-v-0ab6d038]{background:transparent;width:100%;height:100%}",""]),t.exports=n},557:function(t,e,o){"use strict";o.r(e);o(19),o(4),o(131);var n={components:{imgSlot:o(254).default},name:"productItem",props:{product:{type:Object,required:!0},module:{type:String},isList:{type:[Boolean,Number],default:!1}},data:function(){return{hover:!1,attributes:{}}},computed:{price:function(){var t=this,e=Object.keys(this.product.attributes);return Object.values(this.product.attributes).reduce((function(a,i,o){return t.attributes[e[o]]=i[0].id,+i[0].price+a}),+this.product.sale_price)}},methods:{toggleFav:function(){this.$store.commit("".concat(this.module,"/toggleFav"),this.product)},quickview:function(){this.hover=!1,this.$store.commit("product/setQuickview",this.product)},addToCart:function(){this.$store.commit("product/addToCart",{product:this.product,quantity:1,attributes:this.attributes})}}},r=(o(551),o(553),o(29)),l=o(31),c=o.n(l),d=o(517),v=o(239),h=o(77),f=o(147),m=o(190),_=o(579),x=o(532),y=o(600),w=o(601),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{class:{"mx-auto":!0},attrs:{"max-width":t.isList?"100%":t.$vuetify.breakpoint.smAndDown?320:260,flat:"",tile:""},on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/"+t.product.slug)},mouseleave:function(e){t.hover=!1},mouseover:function(e){t.hover=!0}}},[o("v-row",{staticClass:"ma-0",class:{"justify-center":t.$vuetify.breakpoint.xs}},[o("v-img",{attrs:{eager:"",src:t.$getUrl(t.product.images[0]?t.product.images[t.hover&&t.product.images.length>1?1:0].full:""),contain:!!t.product.images[0]&&Boolean(t.product.images[t.hover&&t.product.images.length>1?1:0].auto),"aspect-ratio":t.product.images[0]?t.product.images[t.hover&&t.product.images.length>1?1:0].aspect_ratio:.8,"min-height":"340px","min-width":"272px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[o("img-slot")]},proxy:!0}])},[t._v(" "),o("div",{staticClass:"over",on:{click:function(e){return t.$router.push("/"+t.product.slug)}}}),t._v(" "),t.isList?t._e():o("v-speed-dial",{staticStyle:{right:"36px"},attrs:{value:!!t.$vuetify.breakpoint.xs||t.hover,direction:"bottom",right:"",top:"",absolute:"",transition:"scale-transition"}},[o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t.product.isFav?o("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")])],1):o("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.toggleFav()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,2575880786)},[t._v(" "),o("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.addToCart()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-cart-plus")])],1)]}}],null,!1,3614178842)},[t._v(" "),o("span",[t._v("add to cart")])]),t._v(" "),o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,2753707616)},[t._v(" "),o("span",[t._v("add to compare")])]),t._v(" "),o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"speedBtn",attrs:{elevation:"0",fab:"",small:"",color:"white"},on:{click:function(e){return t.quickview()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,909429238)},[t._v(" "),o("span",[t._v("quickview")])])],1)],1),t._v(" "),o("div",{staticStyle:{flex:"1"}},[o("v-card-title",{staticClass:"prodTitle secondary--text",attrs:{title:t.product.title},on:{click:function(e){return t.$router.push("/"+t.product.slug)}}},[t._v(t._s(t.$subStr(t.product.title)))]),t._v(" "),o("v-card-text",[o("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[o("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),o("div",{staticClass:"grey--text ms-4"},[t._v("4.5 (413)")])],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.hover&&Object.keys(t.product.attributes).length>0,expression:"hover && Object.keys(product.attributes).length > 0"}],staticClass:"my-4 text-subtitle-1 grey--text prodAttr"},t._l(Object.values(t.product.attributes)[0],(function(e,n){return o("span",{key:n+"attri"},[t._v("\n            "+t._s(e.value)+"\n            "),n+1!=Object.values(t.product.attributes)[0].length?[t._v("/")]:t._e()],2)})),0),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!hover"}],staticClass:"my-4 text-subtitle-1 primary--text"},[t._v("\n          "+t._s(t.price)+" EGP\n        ")]),t._v(" "),t.isList?o("p",[t._v(t._s(t.product.description))]):t._e(),t._v(" "),t.isList?o("div",[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t.product.isFav?o("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"red",small:""}},[t._v("mdi-heart")])],1):o("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.toggleFav()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666",small:""}},[t._v("mdi-heart-outline")])],1)]}}],null,!1,126168594)},[t._v(" "),o("span",[t._v(t._s(t.product.isFav?"remove from with list":"add to wish list"))])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-compare-horizontal")])],1)]}}],null,!1,774629934)},[t._v(" "),o("span",[t._v("add to compare")])]),t._v(" "),o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"speedBtn pa-0 mt-2",attrs:{small:"",height:"40",width:"40","min-width":"40",tile:"",outlined:""},on:{click:function(e){return t.quickview()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{color:"#666"}},[t._v("mdi-magnify-plus-outline")])],1)]}}],null,!1,3476783608)},[t._v(" "),o("span",[t._v("quickview")])]),t._v(" "),o("v-btn",{staticClass:"speedBtn white--text mt-2",attrs:{tile:"",elevation:"0",color:"black",height:"40"},on:{click:function(e){return t.addToCart()}}},[t._v("\n            add to cart\n          ")])],1):t._e()],1)],1)],1)],1)}),[],!1,null,"0ab6d038",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:h.c,VCardTitle:h.d,VIcon:f.a,VImg:m.a,VRating:_.a,VRow:x.a,VSpeedDial:y.a,VTooltip:w.a})},560:function(t,e,o){var content=o(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("e6b013ca",content,!0,{sourceMap:!1})},561:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=n},562:function(t,e,o){var content=o(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("dc0628f2",content,!0,{sourceMap:!1})},563:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=n},579:function(t,e,o){"use strict";o(19),o(255),o(46),o(549);var n=o(36),r=o(16),l=o(158),c=o(114),d=o(546),v=o(15),h=o(0),f=o(3);e.a=Object(f.a)(r.a,l.a,d.a,c.a,v.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,o=t.large,n=t.light,r=t.medium,small=t.small;return{dark:e,large:o,light:n,medium:r,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var o=t.genHoverIndex(e,i);t.clearable&&t.internalValue===o?t.internalValue=0:t.internalValue=o}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,o=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:o?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var o={click:e.click};return this.hover&&(o.mouseenter=function(e){return t.onMouseEnter(e,i)},o.mouseleave=this.onMouseLeave,this.halfIncrements&&(o.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(n.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:o}),[this.getIconName(e)])}},render:function(t){var e=this,o=Object(h.g)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},o)}})},600:function(t,e,o){"use strict";var n=o(1),r=(o(32),o(133),o(46),o(30),o(560),o(37)),l=o(88),c=o(256),d=o(106),v=o(3);e.a=Object(v.a)(l.a,r.a,c.a).extend({name:"v-speed-dial",directives:{ClickOutside:d.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(n.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(n.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,o=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var n=0;o=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(n++,t("div",{style:{transitionDelay:.05*n+"s"},key:i},[b]))}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},o);return t("div",data,[this.$slots.activator,r])}})},601:function(t,e,o){"use strict";var n=o(1),r=(o(19),o(562),o(113)),l=o(16),c=o(158),d=o(105),v=o(197),h=o(37),f=o(0),m=o(5),_=o(3);e.a=Object(_.a)(l.a,c.a,d.a,v.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||o?r=n+e.width/2-content.width/2:(this.left||this.right)&&(r=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=o+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=o+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.f)(this.maxWidth),minWidth:Object(f.f)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.p)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.s.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n.a)(t,this.contentClass,!0),Object(n.a)(t,"menuable__content__active",this.isActive),Object(n.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},617:function(t,e,o){var content=o(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("444df2f4",content,!0,{sourceMap:!1})},654:function(t,e,o){"use strict";o(617)},655:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-slide-group__next .v-icon,.v-slide-group__prev .v-icon{height:35px;width:70px;background-color:rgba(51,51,51,.3);border-color:rgba(51,51,51,.3);color:#fff}.v-slide-group__next .v-icon:hover,.v-slide-group__prev .v-icon:hover{background-color:var(--v-primary-base)!important}",""]),t.exports=n},670:function(t,e,o){"use strict";o.r(e);var n={components:{ProductItem:o(557).default},name:"suggProducts",computed:{products:function(){return this.$store.getters["product/suggProducts"]}}},r=(o(654),o(29)),l=o(31),c=o.n(l),d=o(77),v=o(71),h=o(518),f=o(545),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.products.length>0?o("v-sheet",{staticClass:"mt-8"},[o("v-card-title",{staticClass:"justify-center secondary--text font-weight-bold",class:{"display-1":!t.$vuetify.breakpoint.xs,headline:!t.$vuetify.breakpoint.xs}},[t._v("other products in the same categories")]),t._v(" "),o("v-slide-group",{attrs:{"center-active":"","show-arrows":!t.$vuetify.breakpoint.xs}},t._l(t.products,(function(e,n){return o("v-slide-item",{key:e.sku+e.name+n+"sugg",scopedSlots:t._u([{key:"default",fn:function(t){var n=t.toggle;return[o("div",{staticClass:"mx-4"},[o("product-item",{attrs:{product:e,module:"products"},on:{click:n}})],1)]}}],null,!0)})})),1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCardTitle:d.d,VSheet:v.a,VSlideGroup:h.b,VSlideItem:f.a})}}]);