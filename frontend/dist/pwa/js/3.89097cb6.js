(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3f51":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-red-10 q-mt-md q-mb-md"},[n("q-btn",{staticClass:"full-width",attrs:{to:{name:"recive",params:{amount:t.amount}},color:"orange-14",label:t.$t("Top up balance by ")+t.amount+" bip"}})],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),c=n.n(a),i=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"NotEnough",props:["amount"],data:function(){return{}},computed:u({},Object(i["c"])({balanceJSON:function(t){return t.api.balanceJSON}}))},p=l,m=n("2877"),h=n("eebe"),b=n.n(h),d=n("9c40"),f=Object(m["a"])(p,o,r,!1,null,null,null);e["a"]=f.exports;b()(f,"components",{QBtn:d["a"]})},ee33:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"text-h5 text-center full-width q-mb-md q-mt-md text-indigo-10"},[t._v(t._s(t.$t("Top up phone balance")))]),n("q-form",{staticClass:"q-pb-lg"},[n("q-input",{staticClass:"q-mb-md",attrs:{type:"number",step:"any",outlined:"",clearable:"","clear-icon":"close",debounce:"250",error:t.amountIsError,"error-message":t.amountErrorMsg,label:t.$t("Amount"),hint:"Min 10 bip, max 500 bip"},scopedSlots:t._u([{key:"after",fn:function(){return[n("q-btn",{attrs:{round:"",push:"","no-caps":"",label:"Max"},on:{click:function(e){return t.maxAmountSend()}}})]},proxy:!0}]),model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),t.amountIsError&&t.amount&&t.amount<=500&&t.amount>=10?n("not-enough",{attrs:{amount:t.amountNotEnough}}):t._e(),n("q-input",{attrs:{outlined:"","bottom-slots":"",color:"tale",clearable:"","clear-icon":"close",label:t.$t("Enter phone number"),mask:"+# (###) ### - ####",hint:"Example: +7 (900) 000 - 0000"},scopedSlots:t._u([{key:"after",fn:function(){return[n("q-btn",{attrs:{color:"indigo",round:"",icon:"shopping_cart"},on:{click:t.pay}})]},proxy:!0}]),model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("q-separator",{staticClass:"q-mb-lg"}),n("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Money will be sent to the entered phone in 10 seconds"))+".")])],1),n("q-dialog",{attrs:{size:"md",position:"bottom"},model:{value:t.txReady,callback:function(e){t.txReady=e},expression:"txReady"}},[n("q-card",{staticClass:"dialog-min300 text-center"},[n("q-card-section",[n("div",[n("q-icon",{attrs:{color:"secondary",name:"done",size:"5em"}})],1),n("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Payment was successful!")))])])],1)],1)],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("c47a")),c=n.n(a),i=(n("a481"),n("6b54"),n("06db"),n("2f62")),s=n("9dcd"),u=n.n(s),l=n("158a"),p=n("6ff6"),m=n("b862"),h=n("3f51");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"ServiceBiptophone",components:{"not-enough":h["a"]},data:function(){return{phone:null,amount:null,amountNotEnough:null,amountErrorMsg:null,amountIsError:!1,sendFee:Object(l["e"])(p["a"].SEND,{payload:"03esf0"}),checkFee:Object(l["e"])(p["a"].REDEEM_CHECK),txReady:!1}},created:function(){},methods:{checkBalance:function(){if(this.amountErrorMsg=null,this.amountIsError=!1,this.amountNotEnough=null,!this.amount||""===this.amount)return this.amountIsError=!0,this.amountErrorMsg="Min 10 bip",!1;if(u()(this.amount).gte(500))return this.amountIsError=!0,this.amountErrorMsg="Max 500 bip",!1;if(u()(this.amount).lt(10))return this.amountIsError=!0,this.amountErrorMsg="Min 10 bip",!1;var t=u()(this.balanceBIP).minus(this.sendFee).minus(this.checkFee);return""!==this.amount&&(!!t.gte(this.amount)||(this.amountIsError=!0,this.amountNotEnough=u()(this.amount).minus(t).toString(),this.amountErrorMsg=this.$t("Not enough ")+this.amountNotEnough+" bip",!1))},maxAmountSend:function(){var t=u()(this.balanceBIP).minus(this.sendFee).minus(this.checkFee);this.amount=t.toString()},checkPhone:function(){if(!this.phone)return!1;var t=this.phone.replace(/\D+/g,"");return!(!t||11!==t.length)},validate:function(){return!(!this.checkPhone()||!this.checkBalance())},pay:function(){var t=this;if(this.validate()){var e=this.phone.replace(/\D+/g,""),n=u()(this.amount).minus(this.checkFee),o=(new Date).getTime()-158248e7,r=Object(m["c"])({privateKey:this.privateKey,password:"pass",nonce:o,chainId:1,coin:"BIP",value:n.toString(),dueBlock:999999999}),a={check:r,meta:{phone:e}};this.$store.commit("SET_SENDING",!0),this.$store.dispatch("REEF_API",["biptophone","pay",a]).then((function(e){t.$store.commit("SET_SENDING",!1),t.$store.dispatch("FETCH_BALANCE"),t.txReady=!0,console.log(e)})).catch((function(e){t.$store.dispatch("FETCH_BALANCE"),t.$store.commit("SET_SENDING",!1),t.$store.commit("SET_TXERROR",e)}))}}},computed:d({},Object(i["c"])({privateKey:function(t){return t.wallet.privateKey},currency:function(t){return t.api.currency},balance:function(t){return t.api.balance},balanceBIP:function(t){return t.api.balanceBIP}})),watch:{amount:function(){this.checkBalance()}}},g=f,y=n("2877"),E=n("eebe"),O=n.n(E),v=n("9989"),j=n("0378"),w=n("27f9"),P=n("9c40"),x=n("eb85"),S=n("24e8"),k=n("f09f"),_=n("a370"),q=n("0016"),I=Object(y["a"])(g,o,r,!1,null,null,null);e["default"]=I.exports;O()(I,"components",{QPage:v["a"],QForm:j["a"],QInput:w["a"],QBtn:P["a"],QSeparator:x["a"],QDialog:S["a"],QCard:k["a"],QCardSection:_["a"],QIcon:q["a"]})}}]);