(this["webpackJsonpcodingmr.github.io"]=this["webpackJsonpcodingmr.github.io"]||[]).push([[0],{27:function(e,t,n){e.exports=n(44)},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(4),i=n.n(o),c=n(6),r=n(7),s=n(8),u=n(9),m=n(10),d=n(3),h=n(5),b=(n(41),n(42),n(21)),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).listenToScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=Math.round(e/t*100);n>20?(a.setState({isVisible:!0}),n>"97"?a.setState({theposition:"Top"}):a.setState({theposition:n+"%"})):a.setState({isVisible:!1})},a.toggle=a.toggle.bind(Object(m.a)(a)),a.state={isOpen:!1,theposition:0,isVisible:!1},a}return Object(r.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"gotoTop",value:function(){this.state.isOpen&&this.setState({isOpen:!1}),h.scroller.scrollTo("landing-view",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoAbout",value:function(){this.state.isOpen&&this.setState({isOpen:!1}),h.scroller.scrollTo("about-view",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoShowcase",value:function(){this.state.isOpen&&this.setState({isOpen:!1}),h.scroller.scrollTo("showcase-view",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoContact",value:function(){this.state.isOpen&&this.setState({isOpen:!1}),h.scroller.scrollTo("contact-view",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"gotoSkills",value:function(){this.state.isOpen&&this.setState({isOpen:!1}),h.scroller.scrollTo("skills-view",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.isVisible?l.a.createElement(d.j,{color:"none",dark:!0,expand:"md",fixed:"top",id:"navbar-hidden"},l.a.createElement(d.k,{id:"hamburger",onClick:this.toggle}),l.a.createElement(d.c,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(d.h,{className:"ml-auto",navbar:!0},l.a.createElement(d.i,{id:"nav-item-home",className:"nav-item"},l.a.createElement(d.b,{id:"home",color:"link",onClick:function(){return e.gotoTop()}},"Home")),l.a.createElement(d.i,{id:"nav-item-about",className:"nav-item"},l.a.createElement(d.b,{id:"about",color:"link",onClick:function(){return e.gotoAbout()}},"About")),l.a.createElement(d.i,{id:"nav-item-skills",className:"nav-item"},l.a.createElement(d.b,{id:"skills",color:"link",onClick:function(){return e.gotoSkills()}},"Skills")),l.a.createElement(d.i,{id:"nav-item-showcase",className:"nav-item"},l.a.createElement(d.b,{id:"showcase",color:"link",onClick:function(){return e.gotoShowcase()}},"Showcase")),l.a.createElement(d.i,{id:"nav-item-contact",className:"nav-item"},l.a.createElement(d.b,{id:"contact",color:"link",onClick:function(){return e.gotoContact()}},"Contact"))))):l.a.createElement(d.j,{color:"none",dark:!0,expand:"md",fixed:"top",id:"navbar-visible"},l.a.createElement(d.k,{id:"hamburger",onClick:this.toggle}),l.a.createElement(d.c,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(d.h,{className:"ml-auto",navbar:!0},l.a.createElement(d.i,{id:"nav-item-home",className:"nav-item"},l.a.createElement(d.b,{id:"home",color:"link",onClick:function(){return e.gotoTop()}},"Home")),l.a.createElement(d.i,{id:"nav-item-about",className:"nav-item"},l.a.createElement(d.b,{id:"about",color:"link",onClick:function(){return e.gotoAbout()}},"About")),l.a.createElement(d.i,{id:"nav-item-skills",className:"nav-item"},l.a.createElement(d.b,{id:"skills",color:"link",onClick:function(){return e.gotoSkills()}},"Skills")),l.a.createElement(d.i,{id:"nav-item-showcase",className:"nav-item"},l.a.createElement(d.b,{id:"showcase",color:"link",onClick:function(){return e.gotoShowcase()}},"Showcase")),l.a.createElement(d.i,{id:"nav-item-contact",className:"nav-item"},l.a.createElement(d.b,{id:"contact",color:"link",onClick:function(){return e.gotoContact()}},"Contact"))))),l.a.createElement("div",{id:"scroll-button-body"},this.state.isVisible?l.a.createElement(d.b,{id:"scroll-button-visible",onClick:function(){return e.gotoTop()}},l.a.createElement("div",null,l.a.createElement(b.a,null)),l.a.createElement(d.a,{id:"scroll-percentage",color:"secondary"},this.state.theposition)):l.a.createElement(d.b,{id:"scroll-button-hidden"},l.a.createElement("div",null,l.a.createElement(b.a,null)),l.a.createElement(d.a,{id:"scroll-percentage",color:"secondary"},this.state.theposition))))}}]),n}(l.a.Component),E=l.a.lazy((function(){return n.e(6).then(n.bind(null,83))})),k=l.a.lazy((function(){return n.e(5).then(n.bind(null,84))})),p=l.a.lazy((function(){return n.e(3).then(n.bind(null,88))})),f=l.a.lazy((function(){return n.e(4).then(n.bind(null,85))})),g=l.a.lazy((function(){return n.e(7).then(n.bind(null,86))})),O=l.a.lazy((function(){return n.e(8).then(n.bind(null,87))})),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(v,null)),l.a.createElement(E,null),l.a.createElement(k,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement("footer",null,l.a.createElement(O,null))))}}]),n}(a.Component);n(43);i.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7d7d44fe.chunk.js.map