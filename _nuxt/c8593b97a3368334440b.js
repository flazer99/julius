(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{219:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6773369d",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";var o=n(219);n.n(o).a},239:function(t,e,n){(e=n(21)(!1)).push([t.i,".container[data-v-ce7b9b4a]{padding-bottom:5rem}.center[data-v-ce7b9b4a]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-height:75vh}.panel[data-v-ce7b9b4a]{width:50%;margin-top:2rem}.level[data-v-ce7b9b4a]{width:100%}.level-right[data-v-ce7b9b4a]{-webkit-box-pack:start;justify-content:flex-start}.panel-block[data-v-ce7b9b4a]{padding:1.25rem 1rem}.main-subtitle[data-v-ce7b9b4a]{padding-bottom:0}.capitalize[data-v-ce7b9b4a]{text-transform:capitalize}",""]),t.exports=e},255:function(t,e,n){"use strict";n.r(e);var o=n(35),c={layout:"student",middleware:"auth",data:function(){return{confirmed:!1,delUser:!1}},methods:{confirmation:function(){this.delUser=!0,this.$modal.show("delconfirm")},cancel:function(){this.$modal.hide("delconfirm"),this.delUser=!1},deleteUser:function(){var t=this;this.confirmed=!0,o.a.currentUser.delete().then((function(){var e=t.$store.state.user.data.email;o.b.collection("users").doc(e).delete().then((function(){console.log("User info wiped successfully!")})).catch((function(t){console.log("There was an error wiping database:",t)})),t.$router.push("/")})).catch((function(e){(t.confirmed=!1,console.log("Error deleting user:",e),"auth/requires-recent-login"==e.code)?confirm("This action requires you to reauthenticate")?t.$router.push("/auth/login"):t.cancel():alert("Oh no: ",e.message)}))}}},l=(n(238),n(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero has-navbar-fixed-top has-navbar-fixed-bottom"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"container is-fluid center"},[n("h1",{staticClass:"main-title is-size-1 has-text-left capitalize"},[t._v("Hi, "+t._s(this.$store.state.user.data.name.split(" ")[0])+"! ")]),t._v(" "),n("div",{staticClass:"panel"},t._l(this.$store.state.user.data,(function(e,o){return n("div",{key:o,staticClass:"panel-block"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left capitalize main-subtitle is-size-6 has-text-weight-bold"},[t._v(t._s(o)+":")]),t._v(" "),n("div",{staticClass:"level-right has-text-centered"},[t._v(t._s(e))])])])})),0),t._v(" "),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button is-info is-rounded is-light"},[t._v("Edit Details")]),t._v(" "),n("div",{staticClass:"button is-danger is-outlined is-rounded",class:{"is-loading":t.delUser},on:{click:t.confirmation}},[t._v("Delete Account")])])])])])]),t._v(" "),n("modal",{attrs:{name:"delconfirm",classes:"modal is-active"},on:{"before-close":function(e){t.delUser=!1}}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"section"},[n("h3",{staticClass:"title has-text-white"},[t._v("Confirmation")]),t._v(" "),n("p",{staticClass:"subtitle is-size-4 has-text-white"},[t._v("Are you sure you want to delete your account? This action cannot be undone!")]),t._v(" "),n("div",{staticClass:"buttons"},[n("button",{staticClass:"button is-danger is-rounded",class:{"is-loading":t.confirmed},on:{click:t.deleteUser}},[t._v("Yes,\n            delete")]),t._v(" "),n("button",{staticClass:"button is-success is-rounded",on:{click:t.cancel}},[t._v("Nope, cancel")])])])])])],1)}),[],!1,null,"ce7b9b4a",null);e.default=component.exports}}]);