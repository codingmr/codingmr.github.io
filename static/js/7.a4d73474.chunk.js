(this["webpackJsonpcodingmr.github.io"]=this["webpackJsonpcodingmr.github.io"]||[]).push([[7],{81:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(6),c=a(7),o=a(10),i=a(8),r=a(9),s=a(1),m=a.n(s),l=a(3),u=a(5),d=(a(81),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).submitForm=c.submitForm.bind(Object(o.a)(c)),c.state={status:""},c}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.status;return m.a.createElement(u.Element,{id:"contact-view"},m.a.createElement("div",{id:"contact-body"},m.a.createElement("div",{id:"contact-text"},m.a.createElement("h2",{id:"about-title"},"Contact me"),m.a.createElement("p",{id:"contact-description"},"Feel free to contact me at codingmroberts@gmail.com, or leave your email with me using the form below and I will contact you as soon as I am available.")),m.a.createElement(l.d,{id:"contact-form",onSubmit:this.submitForm,action:"https://formspree.io/mgelwver",method:"POST"},m.a.createElement(l.e,{id:"contact-email"},m.a.createElement(l.g,{for:"exampleEmail"},"Your email:"),m.a.createElement(l.f,{type:"email",placeholder:"example@gmail.com",id:"exampleEmail",name:"email"})),m.a.createElement(l.e,{id:"contact-message"},m.a.createElement(l.g,{for:"exampleText"},"Message [optional]:"),m.a.createElement(l.f,{type:"textarea",name:"text",id:"exampleText"})),m.a.createElement(l.e,{id:"contact-submit-group"},"SUCCESS"===e?m.a.createElement("p",{id:"contact-response-success"},"\u2714 Successfully sent message."):m.a.createElement(l.b,{color:"info",id:"contact-submit"},"Submit"),"ERROR"===e&&m.a.createElement("p",{id:"contact-response-fail"},"\u2717 Message failed to send.")))))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),c=new XMLHttpRequest;c.open(a.method,a.action),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){c.readyState===XMLHttpRequest.DONE&&(200===c.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},c.send(n)}}]),a}(m.a.Component))}}]);
//# sourceMappingURL=7.a4d73474.chunk.js.map