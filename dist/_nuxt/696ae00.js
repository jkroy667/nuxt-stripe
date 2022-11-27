(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{315:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("343e02fe",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n(315)},320:function(t,e,n){var l=n(108)(!1);l.push([t.i,".planWrapper[data-v-7ef72a92]{background-color:#fff;border-radius:10px;width:80%;height:600px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.heading[data-v-7ef72a92]{text-align:center;margin-top:20px;height:10%}.outer[data-v-7ef72a92]{width:90%;height:70%;display:flex;flex-direction:row;justify-content:center;align-items:center}.left[data-v-7ef72a92]{width:30%;height:100%}.right[data-v-7ef72a92]{width:70%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.plan[data-v-7ef72a92]{width:25%;height:100%}.b1[data-v-7ef72a92]{height:25%;flex-direction:row;font-size:1.1rem}.b1[data-v-7ef72a92],.b2[data-v-7ef72a92],.b3[data-v-7ef72a92],.b4[data-v-7ef72a92]{display:flex;justify-content:center;align-items:center}.b2[data-v-7ef72a92],.b3[data-v-7ef72a92],.b4[data-v-7ef72a92]{height:10%;border-bottom:1px solid #acaaaa}.b2[data-v-7ef72a92],.b3[data-v-7ef72a92],.b4[data-v-7ef72a92],.b5[data-v-7ef72a92]{flex-direction:column}.b5[data-v-7ef72a92]{height:45%;display:flex;justify-content:space-evenly;align-items:center}.lastPrompt[data-v-7ef72a92]{justify-content:flex-start;margin-top:10px}.btnWrapper[data-v-7ef72a92]{border-radius:40px;width:auto;height:60%;padding:15px;background-color:#1e4c90;display:flex;flex-direction:row;justify-content:center;align-items:center}.planToggleBtn[data-v-7ef72a92]{border:none;background:none;color:#fff;padding:10px;min-width:100px}.selectedToggleBtn[data-v-7ef72a92]{border-radius:40px;background-color:#fff;color:#1e4c90}.planBtn[data-v-7ef72a92]{background-color:#7893bc;border:none;height:80%;width:80%;color:#fff}.selectedPlanBtn[data-v-7ef72a92]{background-color:#1e4c90}.selectedPlanText[data-v-7ef72a92]{color:#1e4c90;font-weight:600}.lastBtn[data-v-7ef72a92]{width:40%;height:10%;padding:10px;background-color:#1e4c90;color:#fff;font-weight:600;border:none;border-radius:10px;margin-bottom:20px}.lastBtnDisabled[data-v-7ef72a92]{background-color:#7893bc}",""]),t.exports=l},321:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("01de736a",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n.r(e);var l={props:["userDetails"],data:function(){return{monthlySelected:!0,planSelected:""}},methods:{getPlan:function(){try{var t=this.monthlySelected?"monthly":"yearly";this.$fire.firestore.collection("plans").doc(this.userDetails.uid).set({timePeriod:t,type:this.planSelected,createdOn:Date.now()})}catch(t){alert(t)}this.$emit("planUpdate")}},computed:{isDisabled:function(){return 0==this.planSelected.length}}},o=(n(319),n(66)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"planWrapper"},[e("h4",{staticClass:"heading"},[t._v("Choose the right plan for you")]),t._v(" "),e("div",{staticClass:"outer"},[e("div",{staticClass:"left"},[e("div",{staticClass:"b1"},[e("div",{staticClass:"btnWrapper"},[e("button",{staticClass:"planToggleBtn",class:{selectedToggleBtn:t.monthlySelected},on:{click:function(e){t.monthlySelected=!0}}},[t._v("\n            Monthly\n          ")]),t._v(" "),e("button",{staticClass:"planToggleBtn",class:{selectedToggleBtn:!t.monthlySelected},on:{click:function(e){t.monthlySelected=!1}}},[t._v("\n            Yearly\n          ")])])]),t._v(" "),e("div",{staticClass:"b2"},[t._v("Monthly Price")]),t._v(" "),e("div",{staticClass:"b3"},[t._v("Video Quality")]),t._v(" "),e("div",{staticClass:"b4"},[t._v("Resolution")]),t._v(" "),e("div",{staticClass:"b5 lastPrompt"},[t._v("Devices you can use to watch")])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"plan"},[e("div",{staticClass:"b1"},[e("button",{staticClass:"planBtn",class:{selectedPlanBtn:"mobile"==t.planSelected},on:{click:function(e){t.planSelected="mobile"}}},[t._v("\n            Mobile\n          ")])]),t._v(" "),t.monthlySelected?e("div",{staticClass:"b2",class:{selectedPlanText:"mobile"==t.planSelected}},[t._v("\n          100\n        ")]):e("div",{staticClass:"b2",class:{selectedPlanText:"mobile"==t.planSelected}},[t._v("\n          1000\n        ")]),t._v(" "),e("div",{staticClass:"b3",class:{selectedPlanText:"mobile"==t.planSelected}},[t._v("\n          Good\n        ")]),t._v(" "),e("div",{staticClass:"b4",class:{selectedPlanText:"mobile"==t.planSelected}},[t._v("\n          480p\n        ")]),t._v(" "),e("div",{staticClass:"b5",class:{selectedPlanText:"mobile"==t.planSelected}},[e("p",[t._v("Phone")]),t._v(" "),e("p",[t._v("Tablet")]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("p",[t._v(" ")])])]),t._v(" "),e("div",{staticClass:"plan"},[e("div",{staticClass:"b1"},[e("button",{staticClass:"planBtn",class:{selectedPlanBtn:"basic"==t.planSelected},on:{click:function(e){t.planSelected="basic"}}},[t._v("\n            Basic\n          ")])]),t._v(" "),t.monthlySelected?e("div",{staticClass:"b2",class:{selectedPlanText:"basic"==t.planSelected}},[t._v("\n          200\n        ")]):e("div",{staticClass:"b2",class:{selectedPlanText:"basic"==t.planSelected}},[t._v("\n          2000\n        ")]),t._v(" "),e("div",{staticClass:"b3",class:{selectedPlanText:"basic"==t.planSelected}},[t._v("\n          Good\n        ")]),t._v(" "),e("div",{staticClass:"b4",class:{selectedPlanText:"basic"==t.planSelected}},[t._v("\n          480p\n        ")]),t._v(" "),e("div",{staticClass:"b5",class:{selectedPlanText:"basic"==t.planSelected}},[e("p",[t._v("Phone")]),t._v(" "),e("p",[t._v("Tablet")]),t._v(" "),e("p",[t._v("Computer")]),t._v(" "),e("p",[t._v("TV")])])]),t._v(" "),e("div",{staticClass:"plan"},[e("div",{staticClass:"b1"},[e("button",{staticClass:"planBtn",class:{selectedPlanBtn:"standard"==t.planSelected},on:{click:function(e){t.planSelected="standard"}}},[t._v("\n            Standard\n          ")])]),t._v(" "),t.monthlySelected?e("div",{staticClass:"b2",class:{selectedPlanText:"standard"==t.planSelected}},[t._v("\n          500\n        ")]):e("div",{staticClass:"b2",class:{selectedPlanText:"standard"==t.planSelected}},[t._v("\n          5000\n        ")]),t._v(" "),e("div",{staticClass:"b3",class:{selectedPlanText:"standard"==t.planSelected}},[t._v("\n          Better\n        ")]),t._v(" "),e("div",{staticClass:"b4",class:{selectedPlanText:"standard"==t.planSelected}},[t._v("\n          1080p\n        ")]),t._v(" "),e("div",{staticClass:"b5",class:{selectedPlanText:"standard"==t.planSelected}},[e("p",[t._v("Phone")]),t._v(" "),e("p",[t._v("Tablet")]),t._v(" "),e("p",[t._v("Computer")]),t._v(" "),e("p",[t._v("TV")])])]),t._v(" "),e("div",{staticClass:"plan"},[e("div",{staticClass:"b1"},[e("button",{staticClass:"planBtn",class:{selectedPlanBtn:"premium"==t.planSelected},on:{click:function(e){t.planSelected="premium"}}},[t._v("\n            Premium\n          ")])]),t._v(" "),t.monthlySelected?e("div",{staticClass:"b2",class:{selectedPlanText:"premium"==t.planSelected}},[t._v("\n          700\n        ")]):e("div",{staticClass:"b2",class:{selectedPlanText:"premium"==t.planSelected}},[t._v("\n          7000\n        ")]),t._v(" "),e("div",{staticClass:"b3",class:{selectedPlanText:"premium"==t.planSelected}},[t._v("\n          Best\n        ")]),t._v(" "),e("div",{staticClass:"b4",class:{selectedPlanText:"premium"==t.planSelected}},[t._v("\n          4K+HDR\n        ")]),t._v(" "),e("div",{staticClass:"b5",class:{selectedPlanText:"premium"==t.planSelected}},[e("p",[t._v("Phone")]),t._v(" "),e("p",[t._v("Tablet")]),t._v(" "),e("p",[t._v("Computer")]),t._v(" "),e("p",[t._v("TV")])])])])]),t._v(" "),e("button",{staticClass:"lastBtn",class:{lastBtnDisabled:t.isDisabled},attrs:{disabled:t.isDisabled},on:{click:t.getPlan}},[t._v("Next")])])}),[],!1,null,"7ef72a92",null);e.default=component.exports},324:function(t,e,n){"use strict";n(321)},325:function(t,e,n){var l=n(108)(!1);l.push([t.i,".wrapper[data-v-094ae200]{background-color:#1e4c90;min-height:100vh;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center}.cardWrapper[data-v-094ae200]{background-color:#fff;padding:30px;position:fixed;width:80%;height:auto;top:50%;left:50%;transform:translate(-50%,-50%);max-width:400px;border-radius:10px}.switch[data-v-094ae200]{background:none;border:none;color:#1e4c90}.submitForm[data-v-094ae200]{width:100%;border-radius:8px;background-color:#1e4c90;color:#fff;padding-top:10px;padding-bottom:10px}.bottomText[data-v-094ae200]{margin-top:20px;padding:auto}.bottomText[data-v-094ae200],.formHeading[data-v-094ae200]{text-align:center}.logoutBtn[data-v-094ae200]{position:fixed;top:10px;right:10px}.planWrapper[data-v-094ae200]{padding:15px}.planHeading[data-v-094ae200]{font-size:1.1rem;font-weight:500}.headingPrompt[data-v-094ae200]{font-size:.7rem;padding:4px 8px;border-radius:8px}.text-primary[data-v-094ae200]{background:#b6d2fb}.text-danger[data-v-094ae200]{background:#f0aeae}.price[data-v-094ae200]{font-weight:600}.planBtn[data-v-094ae200]{background-color:#fff;border:2px solid #87b1f1;border-radius:4px;color:#1e4c90;padding:4px 10px;font-size:.9rem;margin:15px auto}.activationPrompt[data-v-094ae200]{background-color:#f1efef;padding:5px;font-size:.8rem;font-weight:500}.cancelBtn[data-v-094ae200]{position:absolute;top:20px;right:10px;color:#1e4c90;background:none;border:none;font-size:.9rem;font-weight:500}",""]),t.exports=l},336:function(t,e,n){"use strict";n.r(e);n(28),n(19);var l=n(0);n(1),n(38),n(3),n(5),n(4),n(2),n(6),n(7);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var r={name:"IndexPage",computed:{activationDate:function(){if(!this.plan)return"";var t=Date(this.plan.createdOn.toString());return new Date(t)},renewDate:function(){if(!this.plan)return"";var t=this.activationDate;return"yearly"==this.plan.timePeriod?t.setFullYear(this.activationDate.getFullYear()+1):t.setMonth(this.activationDate.getMonth()+1),t}},data:function(){return{form:{name:"",email:"",password:""},user:null,signInForm:!0,signUpForm:!1,plan:null,isPlanActive:!0,mapping:{monthly:{mobile:100,basic:200,standard:500,premium:700},yearly:{mobile:1e3,basic:2e3,standard:5e3,premium:7e3}},monthMapping:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},methods:{signUp:function(t){var e=this;t.preventDefault(),this.$fire.auth.createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(t){var n=t.user;console.log("User signed In!"),e.user=n,e.fetchData()})).catch((function(t){var e=t.message;console.log(e)}))},signIn:function(t){var e=this;t.preventDefault(),this.$fire.auth.signInWithEmailAndPassword(this.form.email,this.form.password).then((function(t){var n=t.user;console.log("User signed in!"),e.signInForm=!1,e.fetchData(),e.user=n})).catch((function(t){var e=t.message;alert(e),console.log(e)}))},signOut:function(){this.plan=null,this.isPlanActive=!0,console.log("signing out"),this.$fire.auth.signOut(),this.user=null,this.signInForm=!0,this.reset()},showSignUp:function(t){t.preventDefault(),this.signInForm=!1,this.signUpForm=!0},showSignIn:function(t){t.preventDefault(),this.signInForm=!0,this.signUpForm=!1},reset:function(){this.form={name:"",email:"",password:""}},fetchData:function(){var t=this;this.$fire.firestore.collection("plans").get().then((function(e){e.forEach((function(e){e.id==t.user.uid&&(t.plan=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},e.data())),console.log(t.plan)}))}))}}},c=r,d=(n(324),n(66)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[t.user?e("b-button",{staticClass:"logoutBtn",attrs:{variant:"danger"},on:{click:t.signOut}},[t._v("Log Out")]):e("div",{staticClass:"cardWrapper"},[t.signInForm?e("b-form",{on:{submit:t.signIn}},[e("h5",{staticClass:"formHeading"},[t._v("Login to your account")]),t._v(" "),e("br"),t._v(" "),e("b-form-group",{attrs:{id:"input-group-1",label:"Email","label-for":"input-1",description:""}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),e("label",{attrs:{for:"text-password"}},[t._v("Password")]),t._v(" "),e("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),e("br"),t._v(" "),e("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.ariaDescribedby;return[e("b-form-checkbox-group",{attrs:{id:"checkboxes-4","aria-describedby":l},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Remember Me")])],1)]}}],null,!1,1139554907)}),t._v(" "),e("button",{staticClass:"submitForm",attrs:{type:"submit"}},[t._v("Sign In")]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"bottomText"},[t._v("\n        New to MyApp?"),e("button",{staticClass:"switch",on:{click:t.showSignUp}},[t._v("\n          Sign Up\n        ")])])],1):t.signUpForm?e("b-form",{on:{submit:t.signUp}},[e("h5",{staticClass:"formHeading"},[t._v("Create Account")]),t._v(" "),e("br"),t._v(" "),e("b-form-group",{attrs:{id:"input-group-2",label:"Name","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",placeholder:"Enter name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"input-group-1",label:"Email","label-for":"input-1",description:""}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),e("label",{attrs:{for:"text-password"}},[t._v("Password")]),t._v(" "),e("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),e("br"),t._v(" "),e("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.ariaDescribedby;return[e("b-form-checkbox-group",{attrs:{id:"checkboxes-4","aria-describedby":l},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[e("b-form-checkbox",{attrs:{value:"me"}},[t._v("Remember Me")])],1)]}}],null,!1,1139554907)}),t._v(" "),e("button",{staticClass:"submitForm",attrs:{type:"submit"}},[t._v("Sign Up")]),t._v(" "),e("p",{staticClass:"bottomText"},[t._v("\n        Already have an account?"),e("button",{staticClass:"switch",on:{click:t.showSignIn}},[t._v("\n          Login\n        ")])])],1):t._e()],1),t._v(" "),t.plan?e("div",{staticClass:"cardWrapper planWrapper"},[t.isPlanActive?e("button",{staticClass:"cancelBtn",on:{click:function(e){t.isPlanActive=!1}}},[t._v("Cancel")]):t._e(),t._v(" "),e("p",[e("span",{staticClass:"planHeading"},[t._v("Current Plan Details")]),t._v(" "),t.isPlanActive?e("span",{staticClass:"text-primary headingPrompt"},[t._v("Active")]):e("span",{staticClass:"text-danger headingPrompt"},[t._v("Cancelled")])]),t._v(" "),e("h6",[t._v(t._s(t.plan.type.charAt(0).toUpperCase()+t.plan.type.slice(1)))]),t._v(" "),e("h4",[e("span",{staticClass:"price"},[t._v(t._s(t.mapping[t.plan.timePeriod][t.plan.type]))]),t._v("/"+t._s("yearly"==t.plan.timePeriod?"yr":"mo")+"\n    ")]),t._v(" "),e("button",{staticClass:"planBtn",on:{click:function(e){t.plan=null,t.isPlanActive=!0}}},[t._v("Change Plan")]),t._v(" "),e("div",{staticClass:"activationPrompt"},[t._v("\n      Your subscription has started on\n      "+t._s(t.monthMapping[t.activationDate.getMonth()])+" "+t._s(t.activationDate.getDate())+", "+t._s(t.activationDate.getFullYear())+" and will auto renew on\n      "+t._s(t.monthMapping[t.renewDate.getMonth()])+" "+t._s(t.renewDate.getDate())+", "+t._s(t.renewDate.getFullYear())+".\n    ")])]):t._e(),t._v(" "),t.user&&!t.plan?e("Tutorial",{attrs:{userDetails:t.user},on:{planUpdate:t.fetchData}}):t._e()],1)}),[],!1,null,"094ae200",null);e.default=component.exports;installComponents(component,{Tutorial:n(323).default})}}]);