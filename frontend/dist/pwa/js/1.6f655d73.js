(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{8041:function(t,e,a){"use strict";var n=a("af78"),s=a.n(n);s.a},"8b24":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",[a("q-header",{staticClass:"bg-white text-primary",attrs:{bordered:""}},[a("q-toolbar",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{staticClass:"desktop-only",attrs:{color:"white","text-color":"white",size:"60px"}},[a("img",{attrs:{src:"statics/rif.png"}})]),a("q-avatar",{staticClass:"mobile-only",attrs:{color:"white","text-color":"white",size:"44px"}},[a("img",{attrs:{src:"statics/rif.png"}})])],1),a("q-item-section",[a("div",{staticClass:"text-h4 desktop-only"},[t._v("REEF Push")]),a("div",{staticClass:"text-h6 mobile-only"},[t._v("REEF Push")]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Easy way to send a value")))])],1)],1),a("q-toolbar-title",{staticClass:"text-center"}),a("q-btn",{attrs:{round:"",color:"teal",label:t.language.substr(0,2)},on:{click:function(e){t.alertLang=!0}}})],1)],1),a("q-dialog",{model:{value:t.alertLang,callback:function(e){t.alertLang=e},expression:"alertLang"}},[a("q-card",{staticClass:"dialog-min300"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Choose a language")))])]),a("q-card-section",[a("q-list",t._l(t.languageList,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.value,attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-radio",{attrs:{val:e.value,color:"teal"},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))])],1)],1)})),1)],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("q-stepper",{staticClass:"q-mt-none",staticStyle:{"min-width":"360px"},attrs:{vertical:"",color:"primary",animated:"","header-nav":""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("q-step",{attrs:{name:1,title:"1. "+t.$t("Your message"),icon:"supervisor_account"}},[a("div",{staticClass:"q-pt-md"},[a("q-input",{attrs:{clearable:"",outlined:"",label:t.$t("Receiver name")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("q-input",{staticClass:"q-pt-md",attrs:{clearable:"",outlined:"",label:t.$t("Sender name")},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),a("q-input",{staticClass:"q-pt-md",attrs:{clearable:"",outlined:"",label:t.$t("Message")},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),a("div",{staticClass:"text-grey-6 q-pb-sm q-pt-md"},[t._v(t._s(t.$t("Fields are optional")))]),a("q-separator"),a("q-stepper-navigation",{staticClass:"q-pt-md"},[a("q-btn",{attrs:{color:"primary",label:t.$t("Continue")},on:{click:function(e){t.step=2}}})],1)],1),a("q-step",{attrs:{name:2,title:"2. "+t.$t("Send coins"),icon:"card_giftcard","active-icon":"card_giftcard"}},[a("q-tabs",{staticClass:"bg-primary text-white shadow-2 q-mt-sm",attrs:{dense:"","inline-label":"",align:"justify"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"address",label:t.$t("Address")}}),t._v("\n          "+t._s(t.$t("or"))+"\n          "),a("q-tab",{attrs:{name:"qrcode",label:"QRCode"},on:{click:function(e){return t.actionWallet()}}})],1),a("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-right","transition-next":"jump-left"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"address"}},[a("div",{staticStyle:{height:"226px"}},[a("div",{staticClass:"text-subtitle1 q-pb-sm"},[t._v(t._s(t.$t("Send coins to address")))]),a("q-input",{attrs:{outlined:"",label:t.$t("Copy address"),"stack-label":"",readonly:""},on:{click:function(e){return t.copyAddress()}},scopedSlots:t._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{icon:"file_copy",flat:"",round:""},on:{click:function(e){return t.copyAddress()}}})]},proxy:!0}]),model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),a("div",{staticClass:"q-pt-sm desktop-only"},[a("div",{staticClass:"text-subtitle1 q-pb-sm"},[t._v(t._s(t.$t("Use web wallet")))]),a("q-btn",{attrs:{type:"a",color:"purple",target:"_blank",icon:"account_balance_wallet",href:"https://wallet.bip.to/send",label:"Open wallet.bip.to"}}),a("br"),a("q-btn",{staticClass:"q-mt-sm",attrs:{type:"a",color:"deep-orange-8",target:"_blank",icon:"account_balance_wallet",href:"https://console.minter.network/",label:"Open console.minter"}})],1),a("div",{staticClass:"q-pt-lg mobile-only"},[a("div",{staticClass:"text-subtitle1 q-pb-sm"},[t._v(t._s(t.$t("Or use DeepLink")))]),a("q-btn",{attrs:{type:"a",color:"purple",target:"_blank",icon:"account_balance_wallet",href:t.deepLink,label:"Open BIP Wallet"},on:{click:function(e){return t.actionWallet()}}})],1)],1)]),a("q-tab-panel",{staticStyle:{"padding-left":"0","padding-right":"0"},attrs:{name:"qrcode"}},[a("div",{staticStyle:{height:"226px"}},[a("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.qrImage}})])])],1),a("q-separator"),a("q-stepper-navigation",[a("q-item",{staticClass:"q-pt-none q-pb-none"},[a("q-item-section",{attrs:{avatar:""}},[t.balance&&parseFloat(t.balance.total_balance_sum)>0?a("q-btn",{attrs:{loading:t.balanceUpdateLoading,size:"12px",color:"secondary",round:""},on:{click:function(e){return t.checkBalance()}},scopedSlots:t._u([{key:"loading",fn:function(){return[a("q-spinner-facebook")]},proxy:!0}],null,!1,4102112682)},[a("q-icon",{attrs:{name:"autorenew",size:"24px"}})],1):a("q-spinner-ios",{attrs:{color:"grey-8",size:"30px"}})],1),t.balance&&parseFloat(t.balance.total_balance_sum)>0?a("q-item-section",[a("div",{staticClass:"text-grey-8"},[t._v(t._s(t.$t("Update balance")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Balance"))+": "+t._s(t.balance&&parseFloat(t.balance.total_balance_sum)>0?t.prettyNumber(t.balance.total_balance_sum,3):0)+" Bip")])],1):a("q-item-section",[a("div",{staticClass:"text-grey-8"},[t._v(t._s(t.$t("Waiting for coins")))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.$t("Balance"))+": 0 Bip")])],1)],1)],1)],1),a("q-step",{attrs:{name:3,title:"3. "+t.$t("Share link"),icon:"done","active-icon":"done","header-nav":t.balance&&parseFloat(t.balance.total_balance_sum)>0}},[a("div",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.$t("Gift balance"))+"\n          "),a("span",{staticClass:"text-subtitle1 text-grey-6"},[t._v("("+t._s(t.address.substr(0,4)+"..."+t.address.substr(-4))+")")])]),a("div",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.balance&&parseFloat(t.balance.total_balance_sum)>0?t.prettyNumber(t.balance.total_balance_sum,3):0)+" BIP\n          "),a("span",{staticClass:"text-grey-6"},[t._v("(~ "+t._s(t.balance&&parseFloat(t.balance.total_balance_sum)>0?t.prettyNumber(t.balance.total_balance_sum_usd,2):0)+" usd)")])]),a("div",{staticClass:"text-subtitle1 q-pb-sm q-pt-md"},[t._v(t._s(t.$t("Send this link to your friend")))]),a("q-input",{attrs:{outlined:"",label:t.$t("Copy link"),"stack-label":"",readonly:""},on:{click:function(e){return t.copyLink()}},scopedSlots:t._u([{key:"after",fn:function(){return[a("q-btn",{attrs:{icon:"file_copy",flat:"",round:""},on:{click:function(e){return t.copyLink()}}})]},proxy:!0}]),model:{value:t.resultLink,callback:function(e){t.resultLink=e},expression:"resultLink"}}),t.shareTest()?a("div",{staticClass:"q-pt-md"},[a("q-btn",{attrs:{color:"positive",icon:"share",label:"Share"},on:{click:function(e){return t.share(t.resultLink)}}})],1):t._e()],1)],1)],1)])},s=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("456d"),a("c47a")),l=a.n(i),o=(a("6b54"),a("06db"),a("28a5"),a("a481"),a("2f62")),r=a("29c9"),c=a("b862"),u=a("d055"),p=a.n(u),d=a("a2dc"),b=a("cdde");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"Index",data:function(){return{tab:"address",alertLang:!1,languageList:[{label:"English",value:"en-us"},{label:"Russian",value:"ru"}],mnemonic:null,step:1,username:null,from:null,message:null,isPassword:!1,mnemonicKey:null,isActionWallet:!1,wallet:null,balance:null,balanceUpdateLoading:!1,address:null,qrImage:null,deepLink:null,resultLink:null}},created:function(){var t=this;this.mnemonic=Object(d["a"])(),this.wallet=Object(d["c"])(this.mnemonic),this.address=this.wallet.getAddressString();var e={errorCorrectionLevel:"H",type:"image/png",width:220},a={type:c["f"].SEND,data:{to:this.address,value:10,coin:"BIP"}},n=Object(c["g"])(a,"minter://");this.deepLink=n.replace("https://minter://","minter://"),p.a.toDataURL(this.deepLink,e).then((function(e){t.qrImage=e})).catch((function(e){t.$q.notify({message:e,color:"purple"})})),this.generateLink()},methods:{openLink:function(t){var e=window.open(t,"_blank");e.focus()},copyToClipboard:function(t){Object(b["a"])(t)},copyAddress:function(){Object(b["a"])(this.address),this.$q.notify({message:this.$t("Address copied"),color:"purple",position:"bottom",timeout:400}),this.actionWallet()},prettyNumber:function(t,e){var a=parseFloat(parseFloat(t).toFixed(e)),n=a.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),n.join(".")},copyLink:function(){Object(b["a"])(this.resultLink),this.$q.notify({message:this.$t("Link copied"),color:"purple",position:"bottom",timeout:400})},actionWallet:function(){this.isActionWallet||(setTimeout(this.checkBalance,8e3),this.isActionWallet=!0)},shareTest:function(){return!!navigator.share},share:function(){navigator.share({title:"Подарочный кошелек c бонусом",text:"Переходи для получения",url:this.resultLink}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))},checkBalance:function(){var t=this;this.balanceUpdateLoading=!0,this.$axios.get("https://explorer-api.minter.network/api/v1/addresses/".concat(this.address,"?withSum=true")).then((function(e){setTimeout((function(){t.balanceUpdateLoading=!1}),350),e&&e.data&&e.data.data&&parseFloat(e.data.data.total_balance_sum)>0?(t.balance=e.data.data,t.step=3):null===t.balance&&setTimeout(t.checkBalance,4e3)})).catch((function(t){console.log(t)}))},generateLink:function(){this.mnemonicKey=this.mnemonic.split(" ").map((function(t){return r["wordlists"].english.indexOf(t)})).join("."),this.isPassword;var t=this.username?"&username="+encodeURIComponent(this.username):"",e=this.from?"&from="+encodeURIComponent(this.from):"",a=this.message?"&message="+encodeURIComponent(this.message):"";"localhost"===location.hostname?this.resultLink="http://localhost:8080/#/gift?key="+encodeURIComponent(this.mnemonicKey)+t+e+a:this.resultLink="http://push.reef.mn/#/gift?key="+encodeURIComponent(this.mnemonicKey)+t+e+a}},computed:f({},Object(o["b"])({language:function(t){return t.app.language}}),{language:{get:function(){return this.$store.state.app.language},set:function(t){this.$store.commit("SET_LANG",t)}}}),watch:{step:function(t){3===t&&this.generateLink()},language:function(t){this.$i18n.locale=t}}},h=g,v=(a("8041"),a("2877")),q=a("eebe"),_=a.n(q),y=a("9989"),k=a("e359"),x=a("65c6"),C=a("66e5"),w=a("4074"),L=a("cb32"),$=a("0170"),O=a("6ac5"),S=a("9c40"),Q=a("24e8"),j=a("f09f"),P=a("a370"),I=a("1c1c"),F=a("3786"),T=a("4b7e"),B=a("0016"),R=a("f531"),A=a("87fe"),E=a("27f9"),U=a("eb85"),N=a("b19c"),W=a("429bb"),D=a("7460"),z=a("adad"),K=a("823b"),H=a("d9b2"),G=a("e669"),J=a("9149"),M=a("714f"),Y=a("7f67"),V=Object(v["a"])(h,n,s,!1,null,null,null);e["default"]=V.exports;_()(V,"components",{QPage:y["a"],QHeader:k["a"],QToolbar:x["a"],QItem:C["a"],QItemSection:w["a"],QAvatar:L["a"],QItemLabel:$["a"],QToolbarTitle:O["a"],QBtn:S["a"],QDialog:Q["a"],QCard:j["a"],QCardSection:P["a"],QList:I["a"],QRadio:F["a"],QCardActions:T["a"],QIcon:B["a"],QStepper:R["a"],QStep:A["a"],QInput:E["a"],QSeparator:U["a"],QStepperNavigation:N["a"],QTabs:W["a"],QTab:D["a"],QTabPanels:z["a"],QTabPanel:K["a"],QSpinnerIos:H["a"],QSpinnerFacebook:G["a"],QSpinnerHourglass:J["a"]}),_()(V,"directives",{Ripple:M["a"],ClosePopup:Y["a"]})},af78:function(t,e,a){}}]);