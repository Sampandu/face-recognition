(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/face.42e95c95.png"},function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),r=a.n(s),o=(a(18),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),p=a(9),h=a.n(p),d=function(e){var t=e.onRouteChange;return e.isSignin?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 pa3 link underline black dim pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 pa3 link underline black dim pointer"},"Signin"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 pa3 link underline black dim pointer"},"Register"))},b=a(6),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onSigninSubmit=function(){fetch("https://still-forest-54612.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.onRouteChange("home"),a.props.loadUser(e))}).catch(function(e){return console.log(e)})},a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br2 ba br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"},i.a.createElement("main",{className:"pa4 black-80 center"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onInputChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onInputChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSigninSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f5 link dim black db pointer"},"Register")))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onInputChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onRegisterSubmit=function(){fetch("https://still-forest-54612.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}).catch(function(e){return console.log(e)})},a.state={name:"",email:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br2 ba br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"},i.a.createElement("main",{className:"pa4 black-80 center"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{onChange:this.onInputChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onInputChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onInputChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onRegisterSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(n.Component),w=a(10),v=a.n(w),E=(a(20),a(11)),N=a.n(E),y=function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(v.a,{className:"Tilt br2 shadow-3",options:{max:45},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"},i.a.createElement("img",{alt:"Logo",src:N.a}))))},C=function(e){var t=e.user;return i.a.createElement("div",null,""!==t.id?i.a.createElement("div",null,i.a.createElement("div",{className:"f3 white"},"".concat(t.name,", your current rank is ...")),i.a.createElement("div",{className:"f2 white"},"".concat(t.submition))):i.a.createElement("div",{className:"f3 white"},"Hi, welcome to monkey face recognition"))},k=(a(22),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"The monkey will look for faces in your images, give it a shot."),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"pa4 br3 shadow-3 form center"},i.a.createElement("input",{className:"f4 pa2 w-70 br2",type:"text",onChange:t}),i.a.createElement("button",{className:"f4 pa2 w-30 br2 grow link ph3 pv2 pointer bg-light-purple dib white",onClick:a},"Detect"))))}),S=(a(24),function(e){var t=e.imageUrl,a=e.faceBoxes;return i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"absolute mt3"},i.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),a.map(function(e,t){return i.a.createElement("div",{key:t,className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})})))}),j=(a(26),a(28),{particles:{number:{value:100,density:{enable:!0,value_area:1e3}}}}),O={input:"",imageUrl:"",faceBoxes:[],route:"home",isSignin:!1,user:{id:"",name:"",email:"",submition:0,join:""}},R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions,a=document.getElementById("inputImage"),n=Number(a.width),i=Number(a.height);if(0!==t.length){for(var s=[],r=0;r<t.length;r++){var o=t[r].region_info.bounding_box,l={leftCol:o.left_col*n,topRow:o.top_row*i,rightCol:(1-o.right_col)*n,bottomRow:(1-o.bottom_row)*i};s.push(l)}return s}},e.displayFaceBoxes=function(t){e.setState({faceBoxes:t})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://still-forest-54612.herokuapp.com/imageurl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then(function(e){return e.json()}).then(function(t){t&&fetch("https://still-forest-54612.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){return e.setState({user:Object.assign(e.state.user,{submition:t})})}).catch(function(e){return console.log(e)}),e.displayFaceBoxes(e.calculateFaceLocation(t))}).catch(function(e){return console.err})},e.onRouteChange=function(t){"home"===t?e.setState({isSignin:!0}):"signin"===t&&e.setState(O),e.setState({route:t})},e.loadUser=function(t){e.setState({user:Object.assign(e.state.user,t)})},e.state=O,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.route,a=e.isSignin,n=e.user;return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{className:"particles",params:j}),i.a.createElement(d,{onRouteChange:this.onRouteChange,isSignin:a}),"home"===t?i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(C,{user:n}),i.a.createElement(k,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(S,{imageUrl:this.state.imageUrl,faceBoxes:this.state.faceBoxes})):"signin"===t?i.a.createElement(g,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):i.a.createElement(f,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.9d958747.chunk.js.map