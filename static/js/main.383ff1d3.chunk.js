(this.webpackJsonpformikandyup=this.webpackJsonpformikandyup||[]).push([[0],{132:function(e,a,r){},133:function(e,a,r){},134:function(e,a,r){},241:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),s=r(35),i=r.n(s),o=(r(132),r(133),r(279)),l=(r(134),r(280)),c=r(282),d=r(117),u=r(66),h=r(283),m=r(284),p=r(2);var b=function(){var e=u.a({email:u.b("Enter your email").max(40,"Email can be at least 40 characters long").email("Enter a valid email").trim("There should not be a single space").required("Email is required"),password:u.b("Enter your password").min(8,"Password should be 8 characters long").max(17,"Password can not be more then 17 characters").trim("There should not be a single space").required("Password is required")}),a=Object(d.a)({validationSchema:e,initialValues:{email:"",password:""},onSubmit:function(e){alert(JSON.stringify(e))}});return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{className:"parentBox",children:Object(p.jsx)(m.a,{className:"parentPaper",elevation:3,children:Object(p.jsxs)("form",{sx:{m:4},onSubmit:a.handleSubmit,children:[Object(p.jsx)(c.a,{variant:"h4",children:"Login"}),Object(p.jsx)(o.a,{sx:{mt:2},fullWidth:!0,type:"email",label:"Email",placeholder:"Type Your Email",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(p.jsx)(o.a,{fullWidth:!0,type:"password",label:"Password",placeholder:"Type Your Password",sx:{my:2},name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(p.jsx)(l.a,{type:"submit",variant:"contained",children:"Submit"})]})})})})};var j=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(b,{})})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,285)).then((function(a){var r=a.getCLS,n=a.getFID,t=a.getFCP,s=a.getLCP,i=a.getTTFB;r(e),n(e),t(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(t.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),x()}},[[241,1,2]]]);
//# sourceMappingURL=main.383ff1d3.chunk.js.map