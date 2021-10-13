(function(){/*
    https://github.com/w3c/webappsec-trusted-types
    Version 2.0.0
    Copyright 2017 Google Inc. All Rights Reserved.
    Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
     https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
   */
   function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(){da=function(){};ca.Symbol||(ca.Symbol=ea)}function fa(a,b){this.a=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
   fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
   var ka="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={u:!0},oa={};try{oa.__proto__=na;ma=oa.u;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
   function qa(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.M=b.prototype}function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
   function v(a,b){if(b){var c=ca;a=a.split(".");for(var e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
   v("WeakMap",function(a){function b(g){this.a=(m+=Math.random()+1).toString();if(g){g=n(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}function c(){}function e(g){if(!u(g,f)){var k=new c;ba(g,f,{value:k})}}function d(g){var k=Object[g];k&&(Object[g]=function(r){if(r instanceof c)return r;e(r);return k(r)})}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),r=new a([[g,2],[k,3]]);if(2!=r.get(g)||3!=r.get(k))return!1;r.delete(g);r.set(k,4);return!r.has(g)&&
   4==r.get(k)}catch(U){return!1}}())return a;var f="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var m=0;b.prototype.set=function(g,k){e(g);if(!u(g,f))throw Error("WeakMap key fail: "+g);g[f][this.a]=k;return this};b.prototype.get=function(g){return u(g,f)?g[f][this.a]:void 0};b.prototype.has=function(g){return u(g,f)&&u(g[f],this.a)};b.prototype.delete=function(g){return u(g,f)&&u(g[f],this.a)?delete g[f][this.a]:!1};return b});
   var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var d in e)u(e,d)&&(a[d]=e[d])}return a};v("Object.assign",function(a){return a||ra});v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
   v("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var d=e.length;c=c||0;for(0>c&&(c=Math.max(c+d,0));c<d;c++){var f=e[c];if(f===b||Object.is(f,b))return!0}return!1}});v("Object.entries",function(a){return a?a:function(b){var c=[],e;for(e in b)u(b,e)&&c.push([e,b[e]]);return c}});var sa="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
   function ta(){if("undefined"!==typeof window){var a=[],b;for(b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return sa};var ua="undefined"!==typeof window;function va(){throw new TypeError("undefined conversion");}function wa(){return null}var xa=String.prototype,ya=xa.toLowerCase,za=xa.toUpperCase;function Aa(){throw new TypeError("Illegal constructor");}function Ba(){throw new TypeError("Illegal constructor");}
   var Ha=function(){function a(h){return e.apply(this,arguments)||this}function b(h){return e.apply(this,arguments)||this}function c(h){return e.apply(this,arguments)||this}function e(h,l){if(h!==V)throw Error("cannot call the constructor");N(this,"policyName",{value:l,enumerable:!0})}function d(h){var l=ia.get(h);void 0===l&&(l=G(null),ia.set(h,l));return l}function f(h){var l=Ca(h);if(null==l||Ca(l)!==Da)throw Error();l=n(ja(l));for(var q=l.next();!q.done;q=l.next())q=q.value,N(h,q,{value:h[q]});
   return h}function m(h,l){B(h.prototype);delete h.name;N(h,"name",{value:l})}function g(h){return function(l){return l instanceof h&&ia.has(l)}}function k(h,l){function q(W,O){var hb=l[O]||("default"==h?wa:va),ib=B(new W(V,h));W={};O=(W[O]=function(jb,Cb){for(var y=[],H=1;H<arguments.length;++H)y[H-1]=arguments[H];y=hb.apply(null,[""+jb].concat(y instanceof Array?y:ha(n(y))));if(void 0===y||null===y){if("default"==h)return y;y=""}y=""+y;H=B(G(ib));d(H).v=y;return H},W)[O];return B(O)}for(var p=G(Aa.prototype),
   t=n(ja(X)),I=t.next();!I.done;I=t.next())I=I.value,p[I]=q(X[I],I);N(p,"name",{value:h,writable:!1,configurable:!1,enumerable:!0});return B(p)}function r(h,l,q,p,t){p=void 0===p?"":p;t=void 0===t?"":t;h=za.apply(String(h));(p=t?t:p)||(p="http://www.w3.org/1999/xhtml");if(p=P.apply(z,[p])?z[p]:null){if(P.apply(p,[h])&&p[h]&&P.apply(p[h][l],[q])&&p[h][l][q])return p[h][l][q];if(P.apply(p,["*"])&&P.apply(p["*"][l],[q])&&p["*"][l][q])return p["*"][l][q]}}function U(){return Q}var w=Object,kb=w.assign,
   G=w.create,N=w.defineProperty,B=w.freeze,ja=w.getOwnPropertyNames,Ca=w.getPrototypeOf,Da=w.prototype,P=Da.hasOwnProperty;w=Array.prototype;var lb=w.forEach,mb=w.push;da();var V=Symbol(),ia=f(new WeakMap),R=f([]),Y=f([]),Ea=!0,Q=null,Z=!1;e.prototype.toString=function(){return d(this).v};e.prototype.toJSON=function(){return d(this).v};e.prototype.valueOf=function(){return d(this).v};qa(c,e);m(c,"TrustedScriptURL");qa(b,e);m(b,"TrustedHTML");qa(a,e);m(a,"TrustedScript");m(e,"TrustedType");w=B(G(new b(V,
   "")));d(w).v="";var Fa=B(G(new a(V,"")));d(Fa).v="";var x={},z=(x["http://www.w3.org/1999/xhtml"]={EMBED:{attributes:{src:c.name}},IFRAME:{attributes:{srcdoc:b.name}},OBJECT:{attributes:{data:c.name,codebase:c.name}},SCRIPT:{attributes:{src:c.name,text:a.name},properties:{innerText:a.name,textContent:a.name,text:a.name}},"*":{attributes:{},properties:{innerHTML:b.name,outerHTML:b.name}}},x["http://www.w3.org/2000/svg"]={"*":{attributes:{},properties:{}}},x);x={codebase:"codeBase",formaction:"formAction"};
   !ua||"srcdoc"in HTMLIFrameElement.prototype||delete z["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(var C=n(Object.keys(z["http://www.w3.org/1999/xhtml"])),D=C.next();!D.done;D=C.next()){D=D.value;z["http://www.w3.org/1999/xhtml"][D].properties||(z["http://www.w3.org/1999/xhtml"][D].properties={});for(var Ga=n(Object.keys(z["http://www.w3.org/1999/xhtml"][D].attributes)),E=Ga.next();!E.done;E=Ga.next())E=E.value,z["http://www.w3.org/1999/xhtml"][D].properties[x[E]?x[E]:E]=z["http://www.w3.org/1999/xhtml"][D].attributes[E]}x=
   n(ta());for(C=x.next();!C.done;C=x.next())C=C.value,z["http://www.w3.org/1999/xhtml"]["*"].attributes[C]="TrustedScript",z["http://www.w3.org/2000/svg"]["*"].attributes[C]="TrustedScript";var X={createHTML:b,createScriptURL:c,createScript:a},nb=X.hasOwnProperty;x=G(Ba.prototype);kb(x,{createPolicy:function(h,l){if(!h.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+h+" contains invalid characters.");if(Z&&-1===Y.indexOf(h)&&-1===Y.indexOf("*"))throw new TypeError("Policy "+h+" disallowed.");
   if("default"===h&&Q)throw new TypeError("Policy "+h+" already exists.");if(Z&&!Ea&&-1!==R.indexOf(h))throw new TypeError("Policy "+h+" exists.");R.push(h);var q=G(null);if(l&&"object"===typeof l)for(var p=n(ja(l)),t=p.next();!t.done;t=p.next())t=t.value,nb.call(X,t)&&(q[t]=l[t]);else console.warn("trustedTypes.createPolicy "+h+" was given an empty policy");B(q);l=k(h,q);"default"===h&&(Q=l);return l},o:g(b),s:g(c),h:g(a),i:function(h,l,q,p){q=void 0===q?"":q;p=void 0===p?"":p;l=ya.apply(String(l));
   return r(h,"attributes",l,q,p)||null},B:function(h,l,q){return r(h,"properties",String(l),void 0===q?"":q)||null},m:function(h){h=void 0===h?"":h;if(!h)try{h=document.documentElement.namespaceURI}catch(l){h="http://www.w3.org/1999/xhtml"}return(h=z[h])?JSON.parse(JSON.stringify(h)):{}},w:w,A:Fa,J:Q,TrustedHTML:b,TrustedScriptURL:c,TrustedScript:a});N(x,"defaultPolicy",{get:U,set:function(){}});return{H:B(x),G:function(h,l){Z=!0;Y.length=0;lb.call(h,function(q){mb.call(Y,""+q)});Ea=l;R.length=0},I:function(){Z=
   !1},K:U,L:function(){Q=null;R.splice(R.indexOf("default"),1)}}}(),A=Ha.H,Ia=Ha.G;if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Ja=Object.create(Ba.prototype);Object.assign(Ja,{isHTML:A.o,isScriptURL:A.s,isScript:A.h,createPolicy:A.createPolicy,getAttributeType:A.i,getPropertyType:A.B,getTypeMapping:A.m,emptyHTML:A.w,emptyScript:A.A,_isPolyfill_:!0});Object.defineProperty(Ja,"defaultPolicy",Object.getOwnPropertyDescriptor(A,"defaultPolicy")||
   {});window.trustedTypes=Object.freeze(Ja);window.TrustedHTML=A.TrustedHTML;window.TrustedScriptURL=A.TrustedScriptURL;window.TrustedScript=A.TrustedScript;window.TrustedTypePolicy=Aa;window.TrustedTypePolicyFactory=Ba};function Ka(a,b,c,e,d){this.b=a;this.a=b;this.f=c;this.c=e;this.g=void 0===d?null:d}function La(a){var b=/\s+/;return a.trim().split(/\s*;\s*/).map(function(c){return c.split(b)}).reduce(function(c,e){e[0]&&(c[e[0]]=e.slice(1).map(function(d){return d}).sort());return c},{})}
   function Ma(){var a=Na,b=La(a),c="require-trusted-types-for"in b&&b["require-trusted-types-for"].includes("'script'"),e=["*"],d=!0;"trusted-types"in b&&(e=b["trusted-types"].filter(function(f){return"'"!==f.charAt(0)}),d=b["trusted-types"].includes("'allow-duplicates'"),1==b["trusted-types"].length&&"'none'"==b["trusted-types"][0]&&(e=[]));return new Ka(!0,c,e,d,a)};var Oa=Object.defineProperty;function Pa(a,b,c){Oa(a,b,{value:c})};for(var F=Reflect.apply,Qa=Object,Ra=Qa.getOwnPropertyNames,Sa=Qa.getOwnPropertyDescriptor,Ta=Qa.getPrototypeOf,Ua=Object.prototype.hasOwnProperty,Va=String.prototype.slice,Wa,J=A.m("http://www.w3.org/1999/xhtml"),K={TrustedHTML:A.TrustedHTML,TrustedScript:A.TrustedScript,TrustedScriptURL:A.TrustedScriptURL},Xa=n(Object.keys(J)),Ya=Xa.next();!Ya.done;Ya=Xa.next())for(var Za=J[Ya.value].properties,$a=n(Object.entries(Za)),ab=$a.next();!ab.done;ab=$a.next()){var bb=n(ab.value),cb=bb.next().value,db=
   bb.next().value;Za[cb]=K[db]}var eb={TrustedHTML:A.o,TrustedScriptURL:A.s,TrustedScript:A.h},fb={TrustedHTML:"createHTML",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};
   function L(){this.b=gb;this.c={};this.a="undefined"!==typeof window?window:null;if(!ob(this))throw Error("The polyfill expects a global `window` object or emulated `window-like` object passed to the enforcer as second argument");this.g=function(a){return F(Ua,a.Element.prototype,["insertAdjacentHTML"])?a.Element.prototype:a.HTMLElement.prototype}(this.a);this.l=this.a.document.createElement("div").constructor.name?function(a){return a.name}:function(a){return(""+a).match(/^\[object (\S+)\]$/)[1]}}
   function ob(a){var b=a.a;a=["Element","HTMLElement","Document","Node","document"];return!!b&&"object"===typeof b&&a.every(function(c){return c in b})}function M(a,b,c){a=a.a[c];return!!a&&b instanceof a}
   function pb(){var a=new L;Ia(a.b.f,a.b.c);if(a.b.a||a.b.b)"ShadowRoot"in a.a&&qb(a,a.a.ShadowRoot.prototype,"innerHTML",A.TrustedHTML),Wa=function(b){return b.createRange?0==b.createRange().createContextualFragment({toString:function(){return"<div></div>"}}).childNodes.length:!1}(a.a.document),a.a.Range&&S(a,a.a.Range.prototype,"createContextualFragment",A.TrustedHTML,0),a.g&&S(a,a.g,"insertAdjacentHTML",A.TrustedHTML,1),Sa(a.a.Document.prototype,"write")?S(a,a.a.Document.prototype,"write",A.TrustedHTML,
   0):a.a.HTMLDocument&&Sa(a.a.HTMLDocument.prototype,"write")&&S(a,a.a.HTMLDocument.prototype,"write",A.TrustedHTML,0),"DOMParser"in a.a&&S(a,a.a.DOMParser.prototype,"parseFromString",A.TrustedHTML,0),a.a.hasOwnProperty("setInterval")&&S(a,a.a,"setInterval",A.TrustedScript,0),a.a.hasOwnProperty("setTimeout")&&S(a,a.a,"setTimeout",A.TrustedScript,0),rb(a),sb(a),tb(a)}
   function sb(a){["appendChild","insertBefore","replaceChild"].forEach(function(b){T(a,a.a.Node.prototype,b,function(c,e){for(var d=[],f=1;f<arguments.length;++f)d[f-1]=arguments[f];return a.j.bind(a,this,!1,c).apply(a,d)})});a.g&&T(a,a.g,"insertAdjacentText",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.C.bind(a,this,b).apply(a,e)});["after","before","replaceWith"].forEach(function(b){b in a.a.Element.prototype&&T(a,a.a.Element.prototype,b,function(c,e){for(var d=
   [],f=1;f<arguments.length;++f)d[f-1]=arguments[f];return a.j.bind(a,this,!0,c).apply(a,d)})});["append","prepend"].forEach(function(b){b in a.a.Element.prototype&&T(a,a.a.Element.prototype,b,function(c,e){for(var d=[],f=1;f<arguments.length;++f)d[f-1]=arguments[f];return a.j.bind(a,this,!1,c).apply(a,d)})})}
   function tb(a){for(var b=n(Ra(J)),c=b.next();!c.done;c=b.next()){c=c.value;for(var e=n(Ra(J[c].properties)),d=e.next();!d.done;d=e.next()){d=d.value;var f="*"==c?"HTMLElement":a.l(a.a.document.createElement(c).constructor);null!=f&&a.a[f]&&qb(a,a.a[f].prototype,d,J[c].properties[d])}}}
   function rb(a){T(a,a.a.Element.prototype,"setAttribute",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.F.bind(a,this,b).apply(a,e)});T(a,a.a.Element.prototype,"setAttributeNS",function(b,c){for(var e=[],d=1;d<arguments.length;++d)e[d-1]=arguments[d];return a.D.bind(a,this,b).apply(a,e)})}
   L.prototype.F=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];return null!==a.constructor&&M(this,a,"Element")&&(d=(e[0]=String(e[0])).toLowerCase(),(d=A.i(a.tagName,d,a.namespaceURI))&&F(Ua,K,[d]))?this.f(a,"setAttribute",K[d],b,1,e):F(b,a,e)};
   L.prototype.D=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];if(null!==a.constructor&&M(this,a,"Element")){d=e[0]?String(e[0]):null;e[0]=d;var f=(e[1]=String(e[1])).toLowerCase();if((d=A.i(a.tagName,f,a.namespaceURI,d))&&F(Ua,K,[d]))return this.f(a,"setAttributeNS",K[d],b,2,e)}return F(b,a,e)};
   L.prototype.j=function(a,b,c,e){for(var d=[],f=3;f<arguments.length;++f)d[f-3]=arguments[f];if(M(this,b?a.parentNode:a,"HTMLScriptElement")&&0<d.length)for(f=0;f<d.length;f++){var m=d[f];if(!M(this,m,"Node")||m.nodeType===this.a.Node.TEXT_NODE){if(M(this,m,"Node")&&m.nodeType==this.a.Node.TEXT_NODE)m=m.textContent;else if(A.h(m)){d[f]=this.a.document.createTextNode(""+m);continue}var g=ub("TrustedScript",""+m,"HTMLScriptElement text");null===g||void 0===g?vb(this,a,c.name,A.TrustedScript,m):m=g;d[f]=
   this.a.document.createTextNode(""+m)}}return F(c,a,d)};
   L.prototype.C=function(a,b,c){for(var e=[],d=2;d<arguments.length;++d)e[d-2]=arguments[d];d=["beforebegin","afterend"];if(M(this,a,"Element")&&M(this,a.parentElement,"HTMLScriptElement")&&1<e.length&&d.includes(e[0])&&!A.h(e[1])){e[1]=""+e[1];var f=ub("TrustedScript",e[1],"HTMLScriptElement text");null===f||void 0===f?vb(this,a,"insertAdjacentText",A.TrustedScript,e[1]):e[1]=f;f=this.a.document.createTextNode(""+e[1]);var m=this.c[wb(this.a.Node.prototype,"insertBefore")];switch(e[0]){case d[0]:F(m,
   a.parentElement,[f,a]);break;case d[1]:F(m,a.parentElement,[f,a.nextSibling])}}else F(b,a,e)};function S(a,b,c,e,d){T(a,b,c,function(f,m){for(var g=[],k=1;k<arguments.length;++k)g[k-1]=arguments[k];return a.f.call(a,this,c,e,f,d,g)})}
   function T(a,b,c,e){var d=Sa(b,c),f=d?d.value:null;if(!(f instanceof Function))throw new TypeError("Property "+c+" on object"+b+" is not a function");d=wb(b,c);if(a.c[d])throw Error("TrustedTypesEnforcer: Double installation detected: "+d+" "+c);Pa(b,c,function(m){for(var g=[],k=0;k<arguments.length;++k)g[k]=arguments[k];return e.bind(this,f).apply(this,g)});a.c[d]=f}
   function qb(a,b,c,e){var d=b,f,m,g=Ta(a.a.Node.prototype);do(m=(f=Sa(d,c))?f.set:null)||(d=Ta(d)||g);while(!m&&d!==g&&d);if(m instanceof Function){g=wb(b,c);if(a.c[g])throw Error("TrustedTypesEnforcer: Double installation detected: "+g+" "+c);var k=function(r){a.f.call(a,this,c,e,m,0,[r])};d===b?Oa(b,c,{set:k}):Oa(b,c,{set:k,get:f.get,configurable:!0});a.c[g]=m}else a.b.b&&console.warn("No setter for property "+c+" on object"+b)}
   function wb(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}function ub(a,b,c){c=void 0===c?"":c;var e=A.defaultPolicy;return e&&eb.hasOwnProperty(a)?e[fb[a]](b,a,c):null}
   L.prototype.f=function(a,b,c,e,d,f){var m=f[d],g=c.name;if(eb.hasOwnProperty(g)&&eb[g](m))return Wa&&"createContextualFragment"==b&&(f[d]=f[d].toString()),F(e,a,f);if(c===A.TrustedScript){var k="setAttribute"==b||"setAttributeNS"===b||"on"===F(Va,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||k)&&"function"===typeof m||k&&null===m)return F(e,a,f)}f[d]=""+m;k=this.l(a?a.constructor:window.constructor);["innerHTML","setAttribute","setAttributeNS"].includes(b)&&(k="Element");g=ub(g,m,k+" "+b);null===
   g||void 0===g?vb(this,a,b,c,m):f[d]=g;return F(e,a,f)};
   function vb(a,b,c,e,d){var f=a.l(b.constructor)||""+b,m="Failed to set "+c+" on "+f+": "+("This property requires "+e.name+".");a.b.b&&console.warn(m,c,b,e,d);var g=a.a.SecurityPolicyViolationEvent||null;if("function"===typeof g){var k="";if(e===A.TrustedScriptURL){k=a.a;e="function"==typeof k.URL?k.URL.prototype.constructor:null;try{var r=new e(d,k.document.baseURI||void 0)}catch(U){r=null}if(k=r||"")k=k.href}d=F(Va,d,[0,40]);c=new g("securitypolicyviolation",{bubbles:!0,blockedURI:k,disposition:a.b.a?
   "enforce":"report",documentURI:a.a.document.location.href,effectiveDirective:"require-trusted-types-for",originalPolicy:a.b.g,statusCode:0,violatedDirective:"require-trusted-types-for",sample:f+"."+c+" "+d});M(a,b,"Node")&&b.isConnected?b.dispatchEvent(c):a.a.document.dispatchEvent(c)}if(a.b.a)throw new TypeError(m);};function xb(){try{var a;if(!(a=document.currentScript)){var b=document.getElementsByTagName("script");a=b[b.length-1]}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;var c=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(c)return c.content.trim()}catch(e){}return null}var yb;
   a:{for(var zb=n(["trustedTypes","TrustedTypes"]),Ab=zb.next();!Ab.done;Ab=zb.next()){var Bb=Ab.value;if(window[Bb]&&!window[Bb]._isPolyfill_){yb=!1;break a}}yb=!0}if(yb){var Na=xb(),gb=Na?Ma():new Ka(!1,!1,[],!0);pb()};}).call(this);
