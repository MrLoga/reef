(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3f51":function(t,e,r){"use strict";var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-red-10 q-mt-md q-mb-md"},[r("q-btn",{staticClass:"full-width",attrs:{to:{name:"recive",params:{amount:t.amount}},color:"orange-14",label:t.$t("Top up balance by ")+t.amount+" bip"}})],1)},a=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),o=r.n(i),s=r("2f62");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"NotEnough",props:["amount"],data:function(){return{}},computed:u({},Object(s["c"])({balanceJSON:function(t){return t.api.balanceJSON}}))},d=l,p=r("2877"),m=r("eebe"),f=r.n(m),b=r("9c40"),h=Object(p["a"])(d,c,a,!1,null,null,null);e["a"]=h.exports;f()(h,"components",{QBtn:b["a"]})},c190:function(t,e,r){"use strict";r.r(e);var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{attrs:{padding:""}},[t.products?r("div",[r("div",{staticClass:"text-h5 text-center full-width q-mb-md q-mt-md text-indigo-10"},[t._v(t._s(t.product.title))]),t.product.image_url?r("q-img",{staticStyle:{width:"100%","max-height":"250px"},attrs:{contain:"",src:"http://"+t.product.image_url,"spinner-color":"primary","spinner-size":"82px"}}):t._e(),r("div",{staticClass:"q-mt-md text-subtitle2",domProps:{innerHTML:t._s(t.product.brief)}}),r("q-separator",{staticClass:"q-mt-md",attrs:{color:"indigo"}}),r("div",{staticClass:"q-mt-md q-mb-lg"},[r("div",{staticClass:"text-h5 text-center full-width q-mb-md text-indigo-10"},[t._v(t._s(t.$t("Buy certificate")))]),r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"col-sm-8 col-xs-12"},[r("q-select",{staticClass:"product__select",attrs:{outlined:"",options:t.product.faces,label:t.$t("Choose certificate"),error:t.amountIsError&&t.amountNotEnough>0,"error-message":t.amountErrorMsg,"display-value":t.selectFaces?t.selectFaces+" rub":""},scopedSlots:t._u([{key:"option",fn:function(e){return[e.opt>0?r("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[r("q-item-section",[r("q-item-label",[r("b",[t._v(t._s(e.opt)+" rub")]),t._v("  =  "),r("span",[t._v(t._s(t.bipPrice(e.opt))+" bip")])])],1)],1):t._e()]}},{key:"after",fn:function(){return[r("q-btn",{attrs:{size:"md",disabled:t.amountIsError,color:"indigo",stack:"",icon:"shopping_cart",label:t.$t("Buy for ")+t.bipPrice(t.selectFaces)+" bip"},on:{click:function(e){return t.buy()}}})]},proxy:!0}],null,!1,1401391618),model:{value:t.selectFaces,callback:function(e){t.selectFaces=e},expression:"selectFaces"}})],1)]),t.amountIsError&&t.amountNotEnough>0?r("not-enough",{attrs:{amount:t.amountNotEnough}}):t._e()],1),r("q-separator",{staticClass:"q-mt-lg q-mb-lg",attrs:{color:"indigo-10"}}),r("div",{staticClass:"text-center"},[r("q-btn",{attrs:{push:"",label:t.$t("Disclaimer")},on:{click:function(e){t.dialogDisclaimer=!0}}})],1),r("q-dialog",{model:{value:t.dialogDisclaimer,callback:function(e){t.dialogDisclaimer=e},expression:"dialogDisclaimer"}},[r("q-card",{staticClass:"dialog-min300"},[r("q-card-section",[r("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Disclaimer")))])]),r("q-card-section",[r("div",{domProps:{innerHTML:t._s(t.product.disclaimer)}})]),r("q-card-actions",{attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),r("q-dialog",{attrs:{size:"md",position:"bottom"},model:{value:t.txReady,callback:function(e){t.txReady=e},expression:"txReady"}},[r("q-card",{staticClass:"dialog-min300 text-center"},[r("q-card-section",[r("div",[r("q-icon",{attrs:{color:"secondary",name:"done",size:"5em"}})],1),r("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Payment was successful!")))]),r("div",{staticClass:"text-subtitle1"},[t._v(t._s(t.$t("After a few seconds, the certificate will be ready")))])])],1)],1),r("q-dialog",{model:{value:t.certificateDialog,callback:function(e){t.certificateDialog=e},expression:"certificateDialog"}},[r("q-card",{staticClass:"dialog-min300 text-center"},[r("q-card-section",[r("div",[r("q-icon",{attrs:{color:"secondary",name:"done",size:"5em"}})],1),r("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Your certificate is ready")))]),r("q-btn",{staticClass:"full-width q-mt-md",attrs:{type:"a",target:"_blank",href:t.reefApi+"certificate/"+t.certificateHash+".pdf",color:"positive",label:t.$t("Open certificate"),size:"1.2em"}})],1)],1)],1),r("br"),r("br")],1):t._e()])},a=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("456d"),r("c47a")),o=r.n(i),s=(r("6b54"),r("06db"),r("2f62")),n=r("b862"),u=r("6ff6"),l=r("158a"),d=r("9dcd"),p=r.n(d),m=r("3f51");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"Settings",components:{"not-enough":m["a"]},data:function(){return{certificateDialog:!1,email:null,certificateHash:null,selectFaces:null,dialogDisclaimer:!1,productId:null,product:null,amountIsError:!0,amountNotEnough:0,amountErrorMsg:null,checkFee:Object(l["e"])(u["a"].REDEEM_CHECK),txReady:!1}},created:function(){this.$route.params.productId&&""!==this.$route.params.productId&&(this.productId=this.$route.params.productId,this.products&&(this.product=this.getProduct(this.productId)))},methods:{checkBuy:function(){if(this.amountIsError=!1,this.amountNotEnough=0,this.selectFaces&&this.selectFaces>0){if(p()(this.balanceRUB).gte(this.selectFaces))return!0;this.amountIsError=!0;var t=p()(this.selectFaces).div(this.currency.biptorub).minus(this.balanceBIP).plus(this.checkFee);return this.amountNotEnough=t.round(1,3).toString(),this.amountErrorMsg=this.$t("Not enough ")+this.amountNotEnough+" bip",!1}return!1},bipRub:function(t){if(t){var e=p()(t).times(this.currency.biptorub).round(2);return e.toString()}return 0},bipPrice:function(t){if(t){var e=p()(t).div(this.currency.biptorub).round();return e.toString()}return"0"},buy:function(){var t=this;if(this.checkBuy()){var e=new p.a(this.selectFaces).div(this.currency.biptorub).round(),r=(new Date).getTime()-158248e7,c=Object(n["c"])({privateKey:this.privateKey,password:"pass",nonce:r,chainId:1,coin:"BIP",value:e.toString(),dueBlock:999999999}),a={check:c,strategy:"giftery",product:{merchantId:this.productId,name:this.product.title,face:this.selectFaces}};this.selectFaces=null,this.$store.commit("SET_SENDING",!0),this.$store.dispatch("REEF_API",["giftery","pay",a]).then((function(e){t.$store.commit("SET_SENDING",!1),t.txReady=!0,t.$store.commit("ADD_SERTIFICATES",{hash:e.orderHash,name:t.product.title,face:a.face}),t.$store.dispatch("FETCH_BALANCE"),t.$store.dispatch("LOAD_SERTIFICATE",e.orderHash).then((function(r){t.certificateHash=e.orderHash,t.txReady=!1,t.certificateDialog=!0})).catch((function(e){t.$store.commit("SET_TXERROR",e),console.log(e)}))})).catch((function(e){t.$store.dispatch("FETCH_BALANCE"),t.$store.commit("SET_SENDING",!1),t.$store.commit("SET_TXERROR",e)}))}}},computed:b({},Object(s["c"])({currency:function(t){return t.api.currency},balance:function(t){return t.api.balance},balanceBIP:function(t){return t.api.balanceBIP},balanceRUB:function(t){return t.api.balanceRUB},reefApi:function(t){return t.api.reefApi},products:function(t){return t.api.products},privateKey:function(t){return t.wallet.privateKey},address:function(t){return t.wallet.address}}),{},Object(s["b"])(["getProduct"])),watch:{products:function(t){t&&t.length&&this.productId&&(this.product=this.getProduct(this.productId))},selectFaces:function(t){this.checkBuy()}}},g=h,y=r("2877"),v=r("eebe"),E=r.n(v),O=r("9989"),_=r("068f"),q=r("eb85"),I=r("27f9"),w=r("ddd8"),C=r("66e5"),P=r("4074"),x=r("0170"),j=r("9c40"),D=r("24e8"),S=r("f09f"),$=r("a370"),F=r("4b7e"),k=r("0016"),N=r("7f67"),R=Object(y["a"])(g,c,a,!1,null,null,null);e["default"]=R.exports;E()(R,"components",{QPage:O["a"],QImg:_["a"],QSeparator:q["a"],QInput:I["a"],QSelect:w["a"],QItem:C["a"],QItemSection:P["a"],QItemLabel:x["a"],QBtn:j["a"],QDialog:D["a"],QCard:S["a"],QCardSection:$["a"],QCardActions:F["a"],QIcon:k["a"]}),E()(R,"directives",{ClosePopup:N["a"]})}}]);