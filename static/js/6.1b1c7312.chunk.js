(this["webpackJsonpcodingmr.github.io"]=this["webpackJsonpcodingmr.github.io"]||[]).push([[6],{45:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var s=Math.log(n),r=(Math.log(o)-s)/(i-t);return Math.exp(s+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+h)+"{"+e+"}",i=p[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),p[e]=h,""+v+h++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=r=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,v=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(d,1500),a||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},46:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(1)),r=n(i(48));e.exports=t.default},47:function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,r=t.down,a=t.top,d=t.bottom,u=t.big,c=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(a||r?4:0)|(d||s?8:0)|(c?16:0)|(p?32:0)|(e?64:0)|(u?128:0));if(h.hasOwnProperty(f))return h[f];var v=n||o||s||r||a||d,m=void 0,y=void 0;if(v){if(!c!=!(e&&p)){var b=[o,n,d,a,r,s];n=b[0],o=b[1],a=b[2],d=b[3],s=b[4],r=b[5]}var w=i||(u?"2000px":"100%");m=n?"-"+w:o?w:"0",y=r||a?"-"+w:s||d?w:"0"}return h[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),r=e.timeout,a=e.duration,d=void 0===a?l.defaults.duration:a,c=e.delay,h=void 0===c?l.defaults.delay:c,p=e.count,f=void 0===p?l.defaults.count:p,v=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?d:r,delay:h,forever:s,count:f,style:{animationFillMode:"both"},reverse:v.left};return t?(0,u.default)(v,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var r,a=i(0),l=i(45),d=i(46),u=(r=d)&&r.__esModule?r:{default:r},c={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},h={};s.propTypes=c,t.default=s,e.exports=t.default},48:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(1),d=(n=l)&&n.__esModule?n:{default:n},u=i(0),c=i(45),h=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:h.isRequired,outEffect:(0,u.oneOfType)([h,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,c.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,r=i.delay,a=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(a+(t?a:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,r=void 0;if(t.collapseOnly)s=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;s=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,a=n.reverse,l=i.length,u=2*s;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),s=u/2);var h=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?d.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(a?h--:h++,0,l,s,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,a=n.children,l=this.props.disabled?s:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),u=r({},o,{opacity:1})):u=this.props.disabled?o:r({},o,this.state.style);var h=r({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=d.default.cloneElement(t,h,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(c.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},49:function(e,t,i){e.exports=i.p+"static/media/ic_github.3064612e.svg"},51:function(e,t,i){},83:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return f}));var n=i(6),o=i(7),s=i(8),r=i(9),a=i(1),l=i.n(a),d=(i(51),i(49)),u=i.n(d),c=i(5),h=i(47),p=i.n(h),f=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Element,{id:"landing-view"},l.a.createElement("div",{id:"align-center"},l.a.createElement("h1",{id:"title"},"Matt Roberts"),l.a.createElement("h2",{id:"subtitle"},"Software Developer"),l.a.createElement("hr",{id:"line-breaker"}),l.a.createElement(p.a,{bottom:!0,delay:250},l.a.createElement("div",{id:"welcome-info-body"},l.a.createElement("p",{id:"welcome-info-text"},"Welcome to my portfolio!"),l.a.createElement("p",{id:"welcome-info-text-italic"},"Pizza, coffee, a pinch of magic and imagination becomes reality"))),l.a.createElement(p.a,{duration:2e3,delay:1100},l.a.createElement("a",{id:"connect-button",href:"https://github.com/codingmr",color:"info"},l.a.createElement("img",{id:"icon_welcome_img",src:u.a,alt:"Github Icon",loading:"lazy",width:"150",height:"150"}))))),l.a.createElement("div",{id:"background-overlay"}))}}]),i}(l.a.Component)}}]);
//# sourceMappingURL=6.1b1c7312.chunk.js.map