(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"923c":function(t,e,s){},d78c:function(t,e,s){"use strict";var a=s("923c"),n=s.n(a);n.a},e255:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",[t.balance&&t.balance.total_balance_sum?s("div",{staticClass:"text-center q-pt-sm"},[s("div",{staticClass:"text-center text-h5 q-pb-sm"},[t._v(t._s(t.$t("With this you can")))]),s("services-list"),s("q-separator",{staticClass:"q-mt-lg q-mb-lg"}),s("div",{staticClass:"text-center text-h5 q-pb-xs"},[t._v(t._s(t.$t("or send to someone else")))]),s("q-form",{staticClass:"q-pb-lg",on:{submit:t.onSendToAddress}},[s("q-input",{staticClass:"q-pt-md",attrs:{clearable:"",outlined:"",label:t.$t("Tx address"),hint:t.$t("Insert recipient wallet address")},scopedSlots:t._u([{key:"after",fn:function(){return[s("q-btn",{attrs:{type:"submit",disabled:!t.checkAddress(),color:"teal",round:"",icon:"send"},on:{click:t.onSendToAddress}})]},proxy:!0}],null,!1,2664207529),model:{value:t.sendAddress,callback:function(e){t.sendAddress=e},expression:"sendAddress"}})],1),t.shareTest()?s("div",{staticClass:"q-pt-md"},[s("q-btn",{attrs:{color:"positive",icon:"share",label:t.$t("Save link")},on:{click:function(e){return t.saveLink()}}})],1):t._e()],1):t._e()])])},n=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("456d"),s("c47a")),o=s.n(r),c=(s("a481"),s("6b54"),s("06db"),s("28a5"),s("b06b")),i=s("2f62"),l=s("29c9"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-4 col-xs-6"},[s("div",{staticClass:"card-app"},[s("q-btn",{attrs:{to:"/gift/biptophone","no-caps":""}},[s("q-avatar",{attrs:{color:"red",size:"3.5em","text-color":"white"}},[s("q-icon",{attrs:{name:"phone_iphone",size:"1.2em"}})],1),s("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("Top up phone balance")))])],1)],1)]),s("div",{staticClass:"col-sm-4 col-xs-6"},[s("div",{staticClass:"card-app"},[s("q-btn",{staticClass:"card-app",attrs:{"no-caps":""},on:{click:t.createWallet}},[s("q-avatar",{attrs:{color:"red",size:"3.5em","text-color":"white"}},[s("q-icon",{attrs:{name:"account_balance_wallet",size:"1.2em"}})],1),s("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("Create wallet")))])],1)],1)]),s("div",{staticClass:"col-sm-4 col-xs-6"},[s("div",{staticClass:"card-app"},[s("q-btn",{staticClass:"card-app",attrs:{disabled:!0,"no-caps":""}},[s("q-avatar",{attrs:{color:"grey",size:"3.5em","text-color":"white"}},[s("q-icon",{attrs:{name:"fastfood",size:"1.2em"}})],1),s("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("Buy eda.yandex")))])],1)],1)]),s("div",{staticClass:"col-sm-4 col-xs-6"},[s("div",{staticClass:"card-app"},[s("q-btn",{staticClass:"card-app",attrs:{disabled:!0,"no-caps":""}},[s("q-avatar",{attrs:{color:"grey",size:"3.5em","text-color":"white"}},[s("q-icon",{attrs:{name:"credit_card",size:"1.2em"}})],1),s("div",{staticClass:"q-pt-sm"},[t._v(t._s(t.$t("Card transfer")))])],1)],1)])]),s("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.soonDialog,callback:function(e){t.soonDialog=e},expression:"soonDialog"}},[s("q-card",{staticClass:"dialog-min300 text-center q-pt-lg q-pb-lg"},[s("div",{staticClass:"text-h4"},[t._v("SOON")])])],1)],1)},d=[];function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"Apps",components:{},data:function(){return{biptophone:!1,soonDialog:!1}},methods:{createWallet:function(){Object(c["a"])("https://cp002.cloudp.group/?#/hello?key="+this.urlKey)}},computed:b({},Object(i["b"])({urlKey:function(t){return t.wallet.urlKey},currency:function(t){return t.api.currency},balance:function(t){return t.api.balance},balanceJSON:function(t){return t.api.balanceJSON}}))},m=f,h=(s("d78c"),s("2877")),g=s("eebe"),v=s.n(g),y=s("9c40"),O=s("cb32"),q=s("0016"),_=s("24e8"),w=s("f09f"),j=Object(h["a"])(m,u,d,!1,null,null,null),x=j.exports;v()(j,"components",{QBtn:y["a"],QAvatar:O["a"],QIcon:q["a"],QDialog:_["a"],QCard:w["a"]});var $=s("9dcd"),C=s.n($),S=s("158a"),A=s("6ff6"),k=s("a2dc");function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var D={name:"Index",components:{"services-list":x},data:function(){return{sendAddress:null,isPassword:!1,total_balance_sum:null,total_balance_sum_usd:null,total_balance_sum_rub:null}},created:function(){if(this.$route.query.username&&""!==this.$route.query.username&&(this.username=this.$route.query.username),this.$route.query.from&&""!==this.$route.query.from&&(this.from=this.$route.query.from),this.$route.query.message&&""!==this.$route.query.message&&(this.message=this.$route.query.message),this.$route.query.key&&""!==this.$route.query.key){var t=this.$route.query.key.split(".").map((function(t){return l["wordlists"].english[t]})).join(" ");if(Object(k["b"])(t)){var e=Object(k["c"])(t);this.$store.commit("SAVE_WALLET",{mnemonic:t,address:e.getAddressString(),privateKey:e.getPrivateKeyString()}),this.$store.dispatch("FETCH_BALANCE")}}},methods:{clickLink:function(t){Object(c["a"])(t)},prettyNumber:function(t,e){var s=parseFloat(parseFloat(t).toFixed(e)),a=s.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),a.join(".")},shareTest:function(){return!!navigator.share},saveLink:function(){navigator.share({title:"Подарочный кошелек c бонусом",text:"Переходи для получения",url:document.location.href}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))},checkAddress:function(){return this.sendAddress&&42===this.sendAddress.length&&C()(this.balance.total_balance_sum).gte(.5)},onSendToAddress:function(){var t=this;if(!this.checkAddress)return!1;var e=Object(S["a"])(A["b"],{payload:""}),s=C()(this.balance.balances[0].amount).minus(e);s.gte(500)&&(s=C()(499.6));var a={txAction:"SendTxParams",coinSymbol:this.balance.balances[0].coin,feeCoinSymbol:this.balance.balances[0].coin,amount:s.toString(),address:this.sendAddress,message:""};this.$store.dispatch("SENDER",a).then((function(e){console.log(e),t.txReady=!0}))}},computed:E({},Object(i["b"])({username:function(t){return t.app.username},from:function(t){return t.app.from},message:function(t){return t.app.message},currency:function(t){return t.api.currency},language:function(t){return t.app.language},sending:function(t){return t.wallet.sending},txReady:function(t){return t.wallet.txReady},balance:function(t){return t.api.balance}}),{txReady:{get:function(){return this.$store.state.wallet.txReady},set:function(t){this.$store.commit("SET_TXREADY",t)}},sending:{get:function(){return this.$store.state.wallet.sending},set:function(t){this.$store.commit("SET_SENDING",t)}},language:{get:function(){return this.$store.state.app.language},set:function(t){this.$store.commit("SET_LANG",t)}}}),watch:{language:function(t){this.$i18n.locale=t}}},T=D,Q=s("9989"),N=s("eb85"),z=s("0378"),L=s("27f9"),R=Object(h["a"])(T,a,n,!1,null,null,null);e["default"]=R.exports;v()(R,"components",{QPage:Q["a"],QSeparator:N["a"],QForm:z["a"],QInput:L["a"],QBtn:y["a"]})}}]);