(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{ee33:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("q-btn",{directives:[{name:"go-back",rawName:"v-go-back",value:"/gift",expression:"'/gift'"}],attrs:{flat:"",label:"Back",color:"primary",icon:"keyboard_backspace"}}),n("div",{staticClass:"text-center text-h6 q-pb-lg"},[e._v(e._s(e.$t("Top up phone balance")))]),n("q-form",{staticClass:"q-pb-lg text-white",on:{submit:e.onSend}},[n("q-input",{attrs:{outlined:"","bottom-slots":"",color:"tale",clearable:"","clear-icon":"close",label:e.$t("Enter phone number"),mask:"+# (###) ### - ####"},scopedSlots:e._u([{key:"hint",fn:function(){return[n("div",{},[e._v("Example: +7 (900) 000 - 0000")])]},proxy:!0},{key:"after",fn:function(){return[n("q-btn",{attrs:{type:"submit",disabled:!e.checkPhone(),color:"teal",round:"",icon:"send"},on:{click:e.onSend}})]},proxy:!0}]),model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("q-separator",{staticClass:"q-mb-lg"}),n("div",{staticClass:"text-grey-6"},[e._v(e._s(e.$t("Money will be sent to the entered phone in 10 seconds"))+".")])],1)])},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("c47a")),c=n.n(a),i=(n("6b54"),n("06db"),n("a481"),n("2f62")),s=n("9dcd"),l=n.n(s),p=n("158a"),u=n("6ff6");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"ServiceBiptophone",data:function(){return{phone:null,maximum:500}},methods:{checkPhone:function(){if(null===this.phone)return!1;var e=this.phone.replace(/\D+/g,"");return!(!e||11!==e.length)||void 0},onSend:function(){var e=this;if(!this.checkPhone())return!1;var t=this.phone.replace(/\D+/g,"");this.$store.dispatch("BIPTOPHONE_VALIDATE",{phone:t}).then((function(t){t&&"1"===t.isvalid&&e.$store.dispatch("BIPTOPHONE_CODE",{phone:t.phone}).then((function(t){if(console.log(t),t&&t.keyword){var n=Object(p["a"])(u["b"],{payload:t.keyword}),o=l()(e.balanceJSON["BIP"]).minus(n);o.gte(500)&&(o=l()(499.6));var r={txAction:"SendTxParams",coinSymbol:"BIP",feeCoinSymbol:"BIP",amount:o.toString(),address:"Mx403b763ab039134459448ca7875c548cd5e80f77",message:t.keyword};e.$store.dispatch("SENDER",r).then((function(t){console.log(t),e.$parent.biptophone=!1}))}}))}))}},created:function(){},computed:d({},Object(i["b"])({currency:function(e){return e.api.currency},balance:function(e){return e.api.balance},balanceJSON:function(e){return e.api.balanceJSON}}))},h=f,m=n("2877"),y=n("eebe"),O=n.n(y),v=n("9989"),g=n("9c40"),k=n("0378"),P=n("27f9"),w=n("eb85"),S=n("2eeb"),j=Object(m["a"])(h,o,r,!1,null,null,null);t["default"]=j.exports;O()(j,"components",{QPage:v["a"],QBtn:g["a"],QForm:k["a"],QInput:P["a"],QSeparator:w["a"]}),O()(j,"directives",{GoBack:S["a"]})}}]);