/*! PROJECT_NAME - v0.1.0 - 2013-04-24
* http://PROJECT_WEBSITE/
* Copyright (c) 2013 YOUR_NAME; Licensed MIT */
/*!
 * VERSION: beta 1.9.4
 * DATE: 2013-04-18
 * JavaScript 
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.9.4",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};var I,J,K,L,M,N,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/^(rgb|hsl)/,s=/([A-Z])/g,t=/-([a-z])/gi,u=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,v=function(a,b){return b.toUpperCase()},w=/(?:Left|Right|Width)/i,x=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,y=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,z=/,(?=[^\)]*(?:\(|$))/gi,A=Math.PI/180,B=180/Math.PI,C={},D=document,E=D.createElement("div"),F=D.createElement("img"),G=c._internals={_specialProps:h},H=navigator.userAgent,O=function(){var c,a=H.indexOf("Android"),b=D.createElement("div");return K=-1!==H.indexOf("Safari")&&-1===H.indexOf("Chrome")&&(-1===a||Number(H.substr(a+8,1))>3),M=K&&6>Number(H.substr(H.indexOf("Version/")+8,1)),L=-1!==H.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H),N=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),P=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},Q=function(a){window.console&&console.log(a)},R="",S="",T=function(a,b){b=b||E;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(S=3===e?"ms":d[e],R="-"+S.toLowerCase()+"-",S+a):null},U=D.defaultView?D.defaultView.getComputedStyle:function(){},V=c.getStyle=function(a,b,c,d,e){var f;return O||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||U(a,null))?(a=c.getPropertyValue(b.replace(s,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):P(a)},W=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=w.test(b),g=a,h=E.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||D.body,h[f?"width":"height"]=c+d),g.appendChild(E),j=parseFloat(E[f?"offsetWidth":"offsetHeight"]),g.removeChild(E),0!==j||e||(j=W(a,b,c,d,!0))),i?-j:j},X=function(a,b,c){if("absolute"!==V(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=V(a,"margin"+d,c);return a["offset"+d]-(W(a,b,parseFloat(e),e.replace(n,""))||0)},Y=function(a,b){var d,e,c={};if(b=b||U(a,null))if(d=b.length)for(;--d>-1;)c[b[d].replace(t,v)]=b.getPropertyValue(b[d]);else for(d in b)c[d]=b[d];else if(b=a.currentStyle||a.style)for(d in b)c[d.replace(t,v)]=b[d];return O||(c.opacity=P(a)),e=zb(a,b,!1),c.rotation=e.rotation*B,c.skewX=e.skewX*B,c.scaleX=e.scaleX,c.scaleY=e.scaleY,c.x=e.x,c.y=e.y,yb&&(c.z=e.z,c.rotationX=e.rotationX*B,c.rotationY=e.rotationY*B,c.scaleZ=e.scaleZ),c.filters&&delete c.filters,c},Z=function(a,b,c,d,e){var h,i,j,f={},g=a.style;for(i in c)"cssText"!==i&&"length"!==i&&isNaN(i)&&(b[i]!==(h=c[i])||e&&e[i])&&-1===i.indexOf("Origin")&&("number"==typeof h||"string"==typeof h)&&(f[i]="auto"!==h||"left"!==i&&"top"!==i?""!==h&&"auto"!==h&&"none"!==h||"string"!=typeof b[i]||""===b[i].replace(m,"")?h:0:X(a,i),void 0!==g[i]&&(j=new mb(g,i,g[i],j)));if(d)for(i in d)"className"!==i&&(f[i]=d[i]);return{difs:f,firstMPT:j}},$={width:["Left","Right"],height:["Top","Bottom"]},_=["marginLeft","marginRight","marginTop","marginBottom"],ab=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=$[b],f=e.length;for(c=c||U(a,null);--f>-1;)d-=parseFloat(V(a,"padding"+e[f],c,!0))||0,d-=parseFloat(V(a,"border"+e[f]+"Width",c,!0))||0;return d},bb=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},cb=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},db=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},eb=function(a,b,c,d){var f,g,h,i,j,e=1e-6;return null==a?j=b:"number"==typeof a?j=a*A:(f=2*Math.PI,g=a.split("_"),h=Number(g[0].replace(m,""))*(-1===a.indexOf("rad")?A:1)-("="===a.charAt(1)?0:b),i=g[1],i&&d&&(d[c]=b+h),"short"===i?(h%=f,h!==h%(f/2)&&(h=0>h?h+f:h-f)):"cw"===i&&0>h?h=(h+9999999999*f)%f-(0|h/f)*f:"ccw"===i&&h>0&&(h=(h-9999999999*f)%f-(0|h/f)*f),j=b+h),e>j&&j>-e&&(j=0),j},fb={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},gb=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,0|255*(1>6*a?b+6*(c-b)*a:.5>a?c:2>3*a?b+6*(c-b)*(2/3-a):b)+.5},hb=function(a){var b,c,d,e,f,g;return a&&""!==a?"number"==typeof a?[a>>16,255&a>>8,255&a]:(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),fb[a]?fb[a]:"#"===a.charAt(0)?(4===a.length&&(b=a.charAt(1),c=a.charAt(2),d=a.charAt(3),a="#"+b+b+c+c+d+d),a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]):"hsl"===a.substr(0,3)?(a=a.match(j),e=Number(a[0])%360/360,f=Number(a[1])/100,g=Number(a[2])/100,c=.5>=g?g*(f+1):g+f-g*f,b=2*g-c,a.length>3&&(a[3]=Number(a[3])),a[0]=gb(e+1/3,b,c),a[1]=gb(e,b,c),a[2]=gb(e-1/3,b,c),a):(a=a.match(j)||fb.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a)):fb.black},ib="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(i in fb)ib+="|"+i+"\\b";ib=RegExp(ib+")","gi");var jb=function(a,b,c,d){if(null==a)return function(a){return a};var n,e=b?(a.match(ib)||[""])[0]:"",f=a.split(e).join("").match(l)||[],g=a.substr(0,a.indexOf(f[0])),h=")"===a.charAt(a.length-1)?")":"",i=-1!==a.indexOf(" ")?" ":",",k=f.length,m=k>0?f[0].replace(j,""):"";return k?n=b?function(a){var b,j,o,p;if("number"==typeof a)a+=m;else if(d&&z.test(a)){for(p=a.replace(z,"|").split("|"),o=0;p.length>o;o++)p[o]=n(p[o]);return p.join(",")}if(b=(a.match(ib)||[e])[0],j=a.split(b).join("").match(l)||[],o=j.length,k>o--)for(;k>++o;)j[o]=c?j[(o-1)/2>>0]:f[o];return g+j.join(i)+i+b+h+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,e,j;if("number"==typeof a)a+=m;else if(d&&z.test(a)){for(e=a.replace(z,"|").split("|"),j=0;e.length>j;j++)e[j]=n(e[j]);return e.join(",")}if(b=a.match(l)||[],j=b.length,k>j--)for(;k>++j;)b[j]=c?b[(j-1)/2>>0]:f[j];return g+b.join(i)+h}:function(a){return a}},kb=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},mb=(G._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ob=(G._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=C;for(c._transform=null,C=b,d=p=c.parse(a,b,d,e),C=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new mb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new mb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},G.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof ob||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),pb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new ob(a,b,0,0,g,l?2:1,null,!1,h,c,d),d+="";var q,s,t,u,v,w,x,y,A,B,C,D,m=c.split(", ").join(",").split(" "),n=d.split(", ").join(",").split(" "),o=m.length,p=I!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(m=m.join(" ").replace(z,", ").split(" "),n=n.join(" ").replace(z,", ").split(" "),o=m.length),o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(u=m[q],v=n[q],y=parseFloat(u),y||0===y)g.appendXtra("",y,cb(v,y),v.replace(k,""),p&&-1!==v.indexOf("px"),!0);else if(e&&("#"===u.charAt(0)||fb[u]||r.test(u)))D=","===v.charAt(v.length-1)?"),":")",u=hb(u),v=hb(v),A=u.length+v.length>6,A&&!O&&0===v[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(O||(A=!1),g.appendXtra(A?"rgba(":"rgb(",u[0],v[0]-u[0],",",!0,!0).appendXtra("",u[1],v[1]-u[1],",",!0).appendXtra("",u[2],v[2]-u[2],A?",":D,!0),A&&(u=4>u.length?1:u[3],g.appendXtra("",u,(4>v.length?1:v[3])-u,D,!1)));else if(w=u.match(j)){if(x=v.match(k),!x||x.length!==w.length)return g;for(t=0,s=0;w.length>s;s++)C=w[s],B=u.indexOf(C,t),g.appendXtra(u.substr(t,B-t),Number(C),cb(x[s],C),"",p&&"px"===u.substr(B+C.length,2),0===s),t=B+C.length;g["xs"+g.l]+=u.substr(t)}else g["xs"+g.l]+=g.l?" "+u:u;if(-1!==d.indexOf("=")&&g.data){for(D=g.xs0+g.data.s,q=1;g.l>q;q++)D+=g["xs"+q]+g.data["xn"+q];g.e=D+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},qb=9;for(i=ob.prototype,i.l=i.pr=0;--qb>0;)i["xn"+qb]=0,i["xs"+qb]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ob(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var rb=function(a,b){b=b||{},this.p=b.prefix?T(a)||a:a,h[a]=h[this.p]=this,this.format=b.formatter||jb(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},sb=G._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var f,g,d=a.split(","),e=b.defaultValue;for(c=c||[e],f=0;d.length>f;f++)b.prefix=0===f&&b.prefix,b.defaultValue=c[f]||e,g=new rb(d[f],b)},tb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";sb(a,{parser:function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(Q("Error: "+b+" js file not loaded."),f)}})}};i=rb.prototype,i.parseComplex=function(a,b,c,d,e,f){var h,i,j,k,l,m,g=this.keyword;if(this.multi&&(z.test(c)||z.test(b)?(i=b.replace(z,"|").split("|"),j=c.replace(z,"|").split("|")):g&&(i=[b],j=[c])),j){for(k=j.length>i.length?j.length:i.length,h=0;k>h;h++)b=i[h]=i[h]||this.dflt,c=j[h]=j[h]||this.dflt,g&&(l=b.indexOf(g),m=c.indexOf(g),l!==m&&(c=-1===m?j:i,c[h]+=" "+g));b=i.join(", "),c=j.join(", ")}return pb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(V(a,this.p,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){sb(a,{parser:function(a,d,e,f,g,h){var j=new ob(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})};var ub="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),vb=T("transform"),wb=R+"transform",xb=T("transformOrigin"),yb=null!==T("perspective"),zb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,w,y,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=yb?parseFloat(V(a,xb,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(vb?l=V(a,wb,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(x),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(p=o-(o|=0))?(0|p*h+(0>p?-.5:.5))/h+o:o;if(16===m.length){var z=m[8],A=m[9],B=m[10],C=m[12],D=m[13],E=m[14];if(e.zOrigin&&(E=-e.zOrigin,C=z*E-m[12],D=A*E-m[13],E=B*E+e.zOrigin-m[14]),!d||C!==e.x||D!==e.y||E!==e.z){var Q,R,S,T,U,W,X,Y,F=m[0],G=m[1],H=m[2],I=m[3],J=m[4],K=m[5],L=m[6],M=m[7],N=m[11],O=e.rotationX=Math.atan2(L,B),P=i>O||O>j;O&&(U=Math.cos(-O),W=Math.sin(-O),Q=J*U+z*W,R=K*U+A*W,S=L*U+B*W,T=M*U+N*W,z=J*-W+z*U,A=K*-W+A*U,B=L*-W+B*U,N=M*-W+N*U,J=Q,K=R,L=S),O=e.rotationY=Math.atan2(z,F),O&&(X=i>O||O>j,U=Math.cos(-O),W=Math.sin(-O),Q=F*U-z*W,R=G*U-A*W,S=H*U-B*W,T=I*U-N*W,A=G*W+A*U,B=H*W+B*U,N=I*W+N*U,F=Q,G=R,H=S),O=e.rotation=Math.atan2(G,K),O&&(Y=i>O||O>j,U=Math.cos(-O),W=Math.sin(-O),F=F*U+J*W,R=G*U+K*W,K=G*-W+K*U,L=H*-W+L*U,G=R),Y&&P?e.rotation=e.rotationX=0:Y&&X?e.rotation=e.rotationY=0:X&&P&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(F*F+G*G)*h+.5>>0)/h,e.scaleY=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(L*L+B*B)*h+.5>>0)/h,e.skewX=0,e.perspective=N?1/(0>N?-N:N):0,e.x=C,e.y=D,e.z=E}}else if(!(yb&&0!==m.length&&e.x===m[4]&&e.y===m[5]&&(e.rotationX||e.rotationY)||void 0!==e.x&&"none"===V(a,"display",b))){var Z=m.length>=6,$=Z?m[0]:1,_=m[1]||0,ab=m[2]||0,bb=Z?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,q=Math.sqrt($*$+_*_),r=Math.sqrt(bb*bb+ab*ab),s=$||_?Math.atan2(_,$):e.rotation||0,t=ab||bb?Math.atan2(ab,bb)+s:e.skewX||0,u=q-Math.abs(e.scaleX||0),v=r-Math.abs(e.scaleY||0),Math.abs(t)>Math.PI/2&&Math.abs(t)<1.5*Math.PI&&(f?(q*=-1,t+=0>=s?Math.PI:-Math.PI,s+=0>=s?Math.PI:-Math.PI):(r*=-1,t+=0>=t?Math.PI:-Math.PI)),w=(s-e.rotation)%Math.PI,y=(t-e.skewX)%Math.PI,(void 0===e.skewX||u>g||-g>u||v>g||-g>v||w>i&&j>w&&0!==w*h>>0||y>i&&j>y&&0!==y*h>>0)&&(e.scaleX=q,e.scaleY=r,e.rotation=s,e.skewX=t),yb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},Ab=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,x=8>N?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),qb=0;4>qb;qb++)A=_[qb],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):W(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>qb?-b.ieOffsetX:-b.ieOffsetY:2>qb?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===qb||2===qb?1:x)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(y,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},Bb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;L&&(D=c.top?"top":c.bottom?"bottom":parseFloat(V(this.t,"top",null,!1))?"bottom":"top",z=V(this.t,D,null,!1),E=parseFloat(z)||0,F=z.substr((E+"").length)||"px",b._ffFix=!b._ffFix,c[D]=(b._ffFix?E+.05:E-.05)+F),(t||b.skewX)&&(z=e*Math.cos(t),A=j*Math.sin(t),t-=b.skewX,f=e*-Math.sin(t),j*=Math.cos(t),e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h=(z=(h+=b.x)-(h|=0))?(0|z*w+(0>z?-.5:.5))/w+h:h,l=(z=(l+=b.y)-(l|=0))?(0|z*w+(0>z?-.5:.5))/w+l:l,p=(z=(p+=b.z)-(p|=0))?(0|z*w+(0>z?-.5:.5))/w+p:p,c[vb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+h+v+l+v+p+v+(d?1+-p/d:1)+")"},Cb=function(){var e,f,g,h,i,j,k,l,m,b=this.data,c=this.t,d=c.style;L&&(e=d.top?"top":d.bottom?"bottom":parseFloat(V(c,"top",null,!1))?"bottom":"top",f=V(c,e,null,!1),g=parseFloat(f)||0,h=f.substr((g+"").length)||"px",b._ffFix=!b._ffFix,d[e]=(b._ffFix?g+.05:g-.05)+h),b.rotation||b.skewX?(i=b.rotation,j=i-b.skewX,k=1e5,l=b.scaleX*k,m=b.scaleY*k,d[vb]="matrix("+(Math.cos(i)*l>>0)/k+","+(Math.sin(i)*l>>0)/k+","+(Math.sin(j)*-m>>0)/k+","+(Math.cos(j)*m>>0)/k+","+b.x+","+b.y+")"):d[vb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};sb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(a,b,c,d,e,g,h){if(d._transform)return e;var o,p,q,r,s,t,u,i=d._transform=zb(a,f,!0),j=a.style,k=1e-6,l=ub.length,m=h,n={};if("string"==typeof m.transform&&vb)q=j.cssText,j[vb]=m.transform,j.display="block",o=zb(a,null,!1),j.cssText=q;else if("object"==typeof m){if(o={scaleX:db(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:db(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:db(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:db(m.x,i.x),y:db(m.y,i.y),z:db(m.z,i.z),perspective:db(m.transformPerspective,i.perspective)},u=m.directionalRotation,null!=u)if("object"==typeof u)for(q in u)m[q]=u[q];else m.rotation=u;o.rotation=eb("rotation"in m?m.rotation:"shortRotation"in m?m.shortRotation+"_short":"rotationZ"in m?m.rotationZ:i.rotation*B,i.rotation,"rotation",n),yb&&(o.rotationX=eb("rotationX"in m?m.rotationX:"shortRotationX"in m?m.shortRotationX+"_short":i.rotationX*B||0,i.rotationX,"rotationX",n),o.rotationY=eb("rotationY"in m?m.rotationY:"shortRotationY"in m?m.shortRotationY+"_short":i.rotationY*B||0,i.rotationY,"rotationY",n)),o.skewX=null==m.skewX?i.skewX:eb(m.skewX,i.skewX),o.skewY=null==m.skewY?i.skewY:eb(m.skewY,i.skewY),(p=o.skewY-i.skewY)&&(o.skewX+=p,o.rotation+=p)}for(s=i.z||i.rotationX||i.rotationY||o.z||o.rotationX||o.rotationY||o.perspective,s||null==m.scale||(o.scaleZ=1);--l>-1;)c=ub[l],r=o[c]-i[c],(r>k||-k>r||null!=C[c])&&(t=!0,e=new ob(i,c,i[c],r,e),c in n&&(e.e=n[c]),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return r=m.transformOrigin,(r||yb&&s&&i.zOrigin)&&(vb?(t=!0,r=(r||V(a,c,f,!1,"50% 50%"))+"",c=xb,e=new ob(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,yb?(q=i.zOrigin,r=r.split(" "),i.zOrigin=(r.length>2?parseFloat(r[2]):q)||0,e.xs0=e.e=j[c]=r[0]+" "+(r[1]||"50%")+" 0px",e=new ob(i,"zOrigin",0,0,e,-1,e.n),e.b=q,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=r):bb(r+"",i)),t&&(d._transformType=s||3===this._transformType?3:2),e},prefix:!0}),sb("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),sb("borderRadius",{defaultValue:"0px",parser:function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=T(i[l])),o=n=V(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=W(a,"borderLeft",q,v),y=W(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=W(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=pb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},prefix:!0,formatter:jb("0px 0px 0px 0px",!1,!0)}),sb("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,e,g){var l,m,n,o,p,q,h="background-position",i=f||U(a,null),j=this.format((i?N?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))&&(q=V(a,"backgroundImage").replace(u,""),q&&"none"!==q)){for(l=j.split(" "),m=k.split(" "),F.setAttribute("src",q),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-F.width:a.offsetHeight-F.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},formatter:bb}),sb("backgroundSize",{defaultValue:"0 0",formatter:bb}),sb("perspective",{defaultValue:"0px",prefix:!0}),sb("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),sb("transformStyle",{prefix:!0}),sb("backfaceVisibility",{prefix:!0}),sb("margin",{parser:kb("marginTop,marginRight,marginBottom,marginLeft")}),sb("padding",{parser:kb("paddingTop,paddingRight,paddingBottom,paddingLeft")}),sb("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,e,g){var h,i,j;return 9>N?(i=a.currentStyle,j=8>N?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(V(a,this.p,f,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,e,g)}}),sb("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),sb("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),sb("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(V(a,"borderTopWidth",f,!1,"0px")+" "+V(a,"borderTopStyle",f,!1,"solid")+" "+V(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ib)||["#000"])[0]}}),sb("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ob(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Db=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!V(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};sb("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,e,g){var j,h=parseFloat(V(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=V(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new ob(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),O?e=new ob(i,"opacity",h,b-h,e):(e=new ob(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Db),e}});var Eb=function(a,b){b&&(a.removeProperty?a.removeProperty(b.replace(s,"-$1").toLowerCase()):a.removeAttribute(b))},Fb=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.className=0===a?this.b:this.e;for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Eb(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};sb("className",{parser:function(a,b,c,e,g,h,i){var l,m,n,o,p,j=a.className,k=a.style.cssText;if(g=e._classNamePT=new ob(a,c,0,0,g,2),g.setRatio=Fb,g.pr=-11,d=!0,g.b=j,m=Y(a,f),n=a._gsClassPT){for(o={},p=n.data;p;)o[p.p]=1,p=p._next;n.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:j.replace(RegExp("\\s*\\b"+b.substr(2)+"\\b"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),e._tween._duration&&(a.className=g.e,l=Z(a,m,Y(a),i,o),a.className=j,g.data=l.firstMPT,a.style.cssText=k,g=g.xfirst=e.parse(a,l.difs,g,h)),g}});var Gb=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration)for(var g,b="all"===this.e,c=this.t.style,d=b?c.cssText.split(";"):this.e.split(","),e=d.length,f=h.transform.parse;--e>-1;)g=d[e],b&&(g=g.substr(0,g.indexOf(":")).split(" ").join("")),h[g]&&(g=h[g].parse===f?vb:h[g].p),Eb(c,g)};for(sb("clearProps",{parser:function(a,b,c,e,f){return f=new ob(a,c,0,0,f,2),f.setRatio=Gb,f.e=b,f.pr=-10,f.data=e._tween,d=!0,f}}),i="bezier,throwProps,physicsProps,physics2D".split(","),qb=i.length;qb--;)tb(i[qb]);i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,I=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=U(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(J&&""===i.zIndex&&(j=V(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=Y(a,f),i.cssText=m+";"+b,j=Z(a,j,Y(a)).difs,!O&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,vb?K&&(J=!0,""===i.zIndex&&(q=V(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),M&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new ob(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&yb?Bb:vb?Cb:Ab,r.data=this._transform||zb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,o,p,q,s,t,g=a.style;for(i in b)o=b[i],j=h[i],j?c=j.parse(a,o,i,this,c,d,b):(m=V(a,i,f)+"",s="string"==typeof o,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||s&&r.test(o)?(s||(o=hb(o),o=(o.length>3?"rgba(":"rgb(")+o.join(",")+")"),c=pb(g,i,m,o,!0,"transparent",c,0,d)):!s||-1===o.indexOf(" ")&&-1===o.indexOf(",")?(k=parseFloat(m),p=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=ab(a,i,f),p="px"):"left"===i||"top"===i?(k=X(a,i,f),p="px"):(k="opacity"!==i?0:1,p="")),t=s&&"="===o.charAt(1),t?(l=parseInt(o.charAt(0)+"1",10),o=o.substr(2),l*=parseFloat(o),q=o.replace(n,"")):(l=parseFloat(o),q=s?o.substr((l+"").length)||"":""),""===q&&(q=e[i]||p),o=l||0===l?(t?l+k:l)+q:b[i],p!==q&&""!==q&&(l||0===l)&&(k||0===k)&&(k=W(a,i,k,p),"%"===q?(k/=W(a,i,100,"%")/100,k>100&&(k=100),b.strictUnits!==!0&&(m=k+"%")):"em"===q?k/=W(a,i,1,"em"):(l=W(a,i,l,q),q="px"),t&&(l||0===l)&&(o=l+k+q)),t&&(l+=k),!k&&0!==k||!l&&0!==l?o||"NaN"!=o+""&&null!=o?(c=new ob(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,o),c.xs0="none"!==o||"display"!==i&&-1===i.indexOf("Style")?o:m):Q("invalid "+i+" tween value: "+b[i]):(c=new ob(g,i,k,l-k,c,0,"css_"+i,I!==!1&&("px"===q||"zIndex"===i),0,m,o),c.xs0=q)):c=pb(g,i,m,o,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var d,e,f,c=b;if(b.css_autoAlpha||b.css_alpha){c={};for(e in b)c[e]=b[e];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(d=this._classNamePT)&&(f=d.xfirst,f&&f._prev?this._linkCSSP(f._prev,d._next,f._prev._prev):f===this._firstPT&&(this._firstPT=d._next),d._next&&this._linkCSSP(d._next,d._next._next,f._prev),this._classNamePT=null),a.prototype._kill.call(this,c)};var Hb=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Hb(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(Y(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Hb(f,b,c)};return c.cascadeTo=function(a,c,d){var k,l,m,e=b.to(a,c,d),f=[e],g=[],h=[],i=[],j=b._internals.reservedProps;for(a=e._targets||e.target,Hb(a,g,i),e.render(c,!0),Hb(a,h),e.render(0,!0),e._enabled(!0),k=i.length;--k>-1;)if(l=Z(i[k],g[k],h[k]),l.firstMPT){l=l.difs;for(m in d)j[m]&&(l[m]=d[m]);f.push(b.to(i[k],c,l))}return f},a.activate([c]),c},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(a){var o,p,q,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},k=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},l=i("Back",k("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),k("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),k("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),m=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),n=m.prototype=new a;return n.constructor=m,n.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},m.ease=new m(.7,.7),n.config=m.config=function(a,b,c){return new m(a,b,c)},o=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),n=o.prototype=new a,n.constructor=o,n.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},n.config=o.config=function(a){return new o(a)},p=f("easing.RoughEase",function(b){b=b||{};for(var m,n,o,p,q,r,c=b.taper||"none",d=[],e=0,f=0|(b.points||20),g=f,h=b.randomize!==!1,i=b.clamp===!0,k=b.template instanceof a?b.template:null,l="number"==typeof b.strength?.4*b.strength:.4;--g>-1;)m=h?Math.random():1/f*g,n=k?k.getRatio(m):m,"none"===c?o=l:"out"===c?(p=1-m,o=p*p*l):"in"===c?o=m*m*l:.5>m?(p=2*m,o=.5*p*p*l):(p=2*(1-m),o=.5*p*p*l),h?n+=Math.random()*o-.5*o:g%2?n+=.5*o:n-=.5*o,i&&(n>1?n=1:0>n&&(n=0)),d[e++]={x:m,y:n};for(d.sort(function(a,b){return a.x-b.x}),r=new j(1,1,null),g=f;--g>-1;)q=d[g],r=new j(q.x,q.y,r);this._prev=new j(0,0,0!==r.t?r:r.next)},!0),n=p.prototype=new a,n.constructor=p,n.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&b.t>=a;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},n.config=function(a){return new p(a)},p.ease=new p,i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),q=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",q("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),q("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),q("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(p,"RoughEase","ease,"),h(o,"SteppedEase","ease,"),l},!0)}),window._gsDefine&&window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.4
 * DATE: 2013-04-18
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(a){"use strict";var f,g,h,i,j,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),e=function(){},k={},l=function(d,e,f,g){this.sc=k[d]?k[d].sc:[],k[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(i){for(var n,o,p,q,j=e.length,m=j;--j>-1;)(n=k[e[j]]||new l(e[j],[])).gsClass?(h[j]=n.gsClass,m--):i&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),j=0;this.sc.length>j;j++)this.sc[j].check()},this.check(!0)},m=a._gsDefine=function(a,b,c,d){return new l(a,b,c,d)},n=d._class=function(a,b,c){return b=b||function(){},m(a,[],function(){return b},c),b};m.globals=b;var o=[0,0,1,1],p=[],q=n("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?o.concat(b):o},!0),r=q.map={},s=q.register=function(a,b,c,e){for(var i,j,k,l,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?n("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)l=h[k],r[j+"."+l]=r[l+j]=i[l]=a.getRatio?a:a[l]||new a};for(h=q.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,s(new q(null,null,1,g),h,"easeOut",!0),s(new q(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),s(new q(null,null,3,g),h,"easeInOut");r.linear=d.easing.Linear.easeIn,r.swing=d.easing.Quad.easeInOut;var t=n("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=t.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var h,k,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),k=f.length;--k>-1;)h=f[k],h.c===b&&h.s===c?f.splice(k,1):0===g&&e>h.pr&&(g=k+1);f.splice(g,0,{c:b,s:c,up:d,pr:e}),this!==i||j||i.wake()},h.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},h.dispatchEvent=function(a){var c,d,e,b=this._listeners[a];if(b)for(c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var u=a.requestAnimationFrame,v=a.cancelAnimationFrame,w=Date.now||function(){return(new Date).getTime()};for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!u;)u=a[f[g]+"RequestAnimationFrame"],v=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];n("Ticker",function(a,b){var g,h,k,l,m,c=this,d=w(),f=b!==!1&&u,n=function(a){c.time=(w()-d)/1e3,(!g||c.time>=m||a===!0)&&(c.frame++,m=c.time+l,c.dispatchEvent("tick")),a!==!0&&(k=h(n))};t.call(c),this.time=this.frame=0,this.tick=function(){n(!0)},this.sleep=function(){null!=k&&(f&&v?v(k):clearTimeout(k),h=e,k=null,c===i&&(j=!1))},this.wake=function(){k&&c.sleep(),h=0===g?e:f&&u?u:function(a){return setTimeout(a,1e3*l)},c===i&&(j=!0),n()},this.fps=function(a){return arguments.length?(g=a,l=1/(g||60),m=this.time+l,c.wake(),void 0):g},this.useRAF=function(a){return arguments.length?(f=a,c.fps(g),void 0):f},c.fps(a),setTimeout(function(){f&&!k&&c.useRAF(!1)},1e3)}),h=d.Ticker.prototype=new d.events.EventDispatcher,h.constructor=d.Ticker;var x=n("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,K){j||i.wake();var c=this.vars.useFrames?J:K;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=x.ticker=new d.Ticker,h=x.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1,h.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(){},h.invalidate=function(){return this},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){var f,e=this.vars;if(1===arguments.length)return e[a];if(null==b)delete e[a];else if(e[a]=b,e[a+"Params"]=c,e[a+"Scope"]=d,c)for(f=c.length;--f>-1;)"{self}"===c[f]&&(c=e[a+"Params"]=c.concat(),c[f]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),!e._active)for(;e._timeline;)e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;if(a!=this._paused&&this._timeline){j||a||i.wake();var b=this._timeline.rawTime(),c=b-this._pauseTime;!a&&this._timeline.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=!a&&this._totalTime>0&&this._totalTime<this._totalDuration,a||0===c||0===this._duration||this.render(this._totalTime,!0,!0)}return this._gc&&!a&&this._enabled(!0,!1),this};var y=n("core.SimpleTimeline",function(a){x.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=y.prototype=new x,h.constructor=y,h.kill()._gc=!1,h._first=h._last=null,h._sortChildren=!1,h.add=h.insert=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=e},h.rawTime=function(){return j||i.wake(),this._totalTime};var z=n("TweenLite",function(a,b,c){if(x.call(this,b,c),null==a)throw"Cannot tween a null target.";this.target=a="string"!=typeof a?a:z.selector(a)||a;var f,g,h,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style,e=this.vars.overwrite;if(this._overwrite=e=null==e?I[z.defaultOverwrite]:"number"==typeof e?e>>0:I[e],(d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=h=d&&!a.slice?B(a):a.slice(0),this._propLookup=[],this._siblings=[],f=0;h.length>f;f++)g=h[f],g?"string"!=typeof g?"function"==typeof g.each&&g[0]&&g[0].nodeType&&g[0].style?(h.splice(f--,1),this._targets=h=h.concat(B(g))):(this._siblings[f]=L(g,this,!1),1===e&&this._siblings[f].length>1&&M(g,this,null,1,this._siblings[f])):(g=h[f--]=z.selector(g),"string"==typeof g&&h.splice(f+1,1)):h.splice(f--,1);else this._propLookup={},this._siblings=L(a,this,!1),1===e&&this._siblings.length>1&&M(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),A=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},B=function(a){var b=[];return a.each(function(){b.push(this)}),b},C=function(a,b){var d,c={};for(d in a)H[d]||d in b&&"x"!==d&&"y"!==d&&"width"!==d&&"height"!==d&&"className"!==d||!(!E[d]||E[d]&&E[d]._autoCSS)||(c[d]=a[d],delete a[d]);a.css=c};h=z.prototype=new x,h.constructor=z,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=!1,z.version="1.9.4",z.defaultEase=h._ease=new q(null,null,1,1),z.defaultOverwrite="auto",z.ticker=i,z.autoSleep=!0,z.selector=a.$||a.jQuery||function(b){return a.$?(z.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var D=z._internals={},E=z._plugins={},F=z._tweenLookup={},G=0,H=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},I={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},J=x._rootFramesTimeline=new y,K=x._rootTimeline=new y;K._startTime=i.time,J._startTime=i.frame,K._active=J._active=!0,x._updateRoot=function(){if(K.render((i.time-K._startTime)*K._timeScale,!1,!1),J.render((i.frame-J._startTime)*J._timeScale,!1,!1),!(i.frame%120)){var a,b,c;for(c in F){for(b=F[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete F[c]}if(c=K._first,(!c||c._paused)&&z.autoSleep&&!J._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",x._updateRoot);var L=function(a,b,c){var e,f,d=a._gsTweenID;if(F[d||(a._gsTweenID=d="t"+G++)]||(F[d]={target:a,tweens:[]}),b&&(e=F[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return F[d].tweens},M=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||N(b,0,m),0===N(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},N=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};h._init=function(){var e,f,g,h,a=this.vars,b=this._overwrittenProps,c=this._duration,d=a.ease;if(a.startAt){if(a.startAt.overwrite=0,a.startAt.immediateRender=!0,this._startAt=z.to(this.target,0,a.startAt),a.immediateRender&&(this._startAt=null,0===this._time&&0!==c))return}else if(a.runBackwards&&a.immediateRender&&0!==c)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){g={};for(h in a)H[h]&&"autoCSS"!==h||(g[h]=a[h]);return g.overwrite=0,this._startAt=z.to(this.target,0,g),void 0}if(this._ease=d?d instanceof q?a.easeParams instanceof Array?d.config.apply(d,a.easeParams):d:"function"==typeof d?new q(d,a.easeParams):r[d]||z.defaultEase:z.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(e=this._targets.length;--e>-1;)this._initProps(this._targets[e],this._propLookup[e]={},this._siblings[e],b?b[e]:null)&&(f=!0);else f=this._initProps(this.target,this._propLookup,this._siblings,b);if(f&&z._onPluginEvent("_onInitAllProps",this),b&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(g=this._firstPT;g;)g.s+=g.c,g.c=-g.c,g=g._next;this._onUpdate=a.onUpdate,this._initted=!0},h._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&E.css&&this.vars.autoCSS!==!1&&C(this.vars,a);for(e in this.vars){if(H[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(E[e]&&(h=new E[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&M(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},h.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!e?this.ratio=this._ease.getRatio(this._time/this._duration):e&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===d&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||p))),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||p)),f&&(this._gc||(0>a&&this._startAt&&!this._onUpdate&&this._startAt.render(a,b,c),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||p)))}},h._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:z.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||A(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1);this._firstPT||this._enabled(!1,!1)}}return h},h.invalidate=function(){return this._notifyPluginsOfEnabled&&z._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var d,c=this._targets;if(c)for(d=c.length;--d>-1;)this._siblings[d]=L(c[d],this,!0);else this._siblings=L(this.target,this,!0)}return x.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?z._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},z.to=function(a,b,c){return new z(a,b,c)},z.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new z(a,b,c)},z.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new z(a,b,d)},z.delayedCall=function(a,b,c,d,e){return new z(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},z.set=function(a,b){return new z(a,0,b)},z.killTweensOf=z.killDelayedCallsTo=function(a,b){for(var c=z.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},z.getTweensOf=function(a){if(null==a)return[];a="string"!=typeof a?a:z.selector(a)||a;var b,c,d,e;if((a instanceof Array||A(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(z.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=L(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c};var O=n("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=O.prototype},!0);if(h=O.prototype,O.version="1.9.1",O.API=2,h._firstPT=null,h._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},h.setRatio=function(a){for(var d,b=this._firstPT,c=1e-6;b;)d=b.c*a+b.s,b.r?d=d+(d>0?.5:-.5)>>0:c>d&&d>-c&&(d=0),b.f?b.t[b.p](d):b.t[b.p]=d,b=b._next},h._kill=function(a){var d,b=this._overwriteProps,c=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(d=b.length;--d>-1;)null!=a[b[d]]&&b.splice(d,1);for(;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},h._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},z._onPluginEvent=function(a,b){var d,e,f,g,h,c=b._firstPT;if("_onInitAllProps"===a){for(;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},O.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===O.API&&(E[(new a[b])._propName]=a[b]);return!0},m.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var h,b=a.propName,c=a.priority||0,d=a.overwriteProps,e={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},f=n("plugins."+b.charAt(0).toUpperCase()+b.substr(1)+"Plugin",function(){O.call(this,b,c),this._overwriteProps=d||[]},a.global===!0),g=f.prototype=new O(b);g.constructor=f,f.API=a.API;for(h in e)"function"==typeof a[h]&&(g[e[h]]=a[h]);return f.version=a.version,O.activate([f]),f},f=a._gsQueue){for(g=0;f.length>g;g++)f[g]();for(h in k)k[h].func||a.console.log("GSAP encountered missing dependency: com.greensock."+h)}j=!1})(window);
/*!
 * VERSION: beta 1.9.4
 * DATE: 2013-04-18
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin, plugins.BezierPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},e=function(a){return a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},f=function(a){var b=[];return a.each(function(){b.push(this)}),b},g=d.prototype=c.to({},.1,{}),h=[];d.version="1.9.4",g.constructor=d,g.kill()._gc=!1,d.killTweensOf=d.killDelayedCallsTo=c.killTweensOf,d.getTweensOf=c.getTweensOf,d.ticker=c.ticker,g.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},g.updateTo=function(a,b){var e,d=this.ratio;b&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(e in a)this.vars[e]=a[e];if(this._initted)if(b)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var f=this._time;this.render(0,!0,!1),this._initted=!1,this.render(f,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var i,g=1/(1-d),h=this._firstPT;h;)i=h.s+h.c,h.c*=g,h.s=i-h.c,h=h._next}return this},g.render=function(a,b,c){var i,j,k,l,m,n,o,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,f=this._totalTime,g=this._cycle;if(a>=d?(this._totalTime=d,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(i=!0,j="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(j="onReverseComplete",i=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(l=this._duration+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(m=this._time/this._duration,n=this._easeType,o=this._easePower,(1===n||3===n&&m>=.5)&&(m=1-m),3===n&&(m*=2),1===o?m*=m:2===o?m*=m*m:3===o?m*=m*m*m:4===o&&(m*=m*m*m*m),this.ratio=1===n?1-m:2===n?m:.5>this._time/this._duration?m/2:1-m/2):this.ratio=this._ease.getRatio(this._time/this._duration)),e===this._time&&!c)return f!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!i?this.ratio=this._ease.getRatio(this._time/this._duration):i&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===f&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):j||(j="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||h))),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),this._cycle!==g&&(b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||h)),j&&(this._gc||(0>a&&this._startAt&&!this._onUpdate&&this._startAt.render(a,b,c),i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this.vars[j].apply(this.vars[j+"Scope"]||this,this.vars[j+"Params"]||h)))},d.to=function(a,b,c){return new d(a,b,c)},d.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new d(a,b,c)},d.fromTo=function(a,b,c,e){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,new d(a,b,e)},d.staggerTo=d.allTo=function(a,b,g,i,j,k,l){i=i||0;var p,q,r,s,m=g.delay||0,n=[],o=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,g.onCompleteParams||h),j.apply(l||this,k||h)};for(a instanceof Array||("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a))),p=a.length,r=0;p>r;r++){q={};for(s in g)q[s]=g[s];q.delay=m,r===p-1&&j&&(q.onComplete=o),n[r]=new d(a[r],b,q),m+=i}return n},d.staggerFrom=d.allFrom=function(a,b,c,e,f,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,d.staggerTo(a,b,c,e,f,g,h)},d.staggerFromTo=d.allFromTo=function(a,b,c,e,f,g,h,i){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,d.staggerTo(a,b,e,f,g,h,i)},d.delayedCall=function(a,b,c,e,f){return new d(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:e,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:e,immediateRender:!1,useFrames:f,overwrite:0})},d.set=function(a,b){return new d(a,0,b)},d.isTweening=function(a){for(var e,b=c.getTweensOf(a),d=b.length;--d>-1;)if(e=b[d],e._active||e._startTime===e._timeline._time&&e._timeline._active)return!0;return!1};var i=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(i(f,b)),e=d.length),f=f._next;return d},j=d.getAllTweens=function(b){return i(a._rootTimeline,b).concat(i(a._rootFramesTimeline,b))};d.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var i,k,l,f=j(0!=e),g=f.length,h=c&&d&&e;for(l=0;g>l;l++)k=f[l],(h||k instanceof b||(i=k.target===k.vars.onComplete)&&d||c&&!i)&&(a?k.totalTime(k.totalDuration()):k._enabled(!1,!1))},d.killChildTweensOf=function(a,b){if(null!=a){var h,i,j,k,l,g=c._tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a)),a instanceof Array)for(k=a.length;--k>-1;)d.killChildTweensOf(a[k],b);else{h=[];for(j in g)for(i=g[j].target.parentNode;i;)i===a&&(h=h.concat(g[j].tweens)),i=i.parentNode;for(l=h.length,k=0;l>k;k++)b&&h[k].totalTime(h[k].totalDuration()),h[k]._enabled(!1,!1)}}};var k=function(a,d,e,f){void 0===d&&(d=!0),void 0===e&&(e=!0);for(var k,l,g=j(f),h=d&&e&&f,i=g.length;--i>-1;)l=g[i],(h||l instanceof b||(k=l instanceof c&&l.target===l.vars.onComplete)&&e||d&&!k)&&l.paused(a)};return d.pauseAll=function(a,b,c){k(!0,a,b,c)},d.resumeAll=function(a,b,c){k(!1,a,b,c)},g.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},g.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},g.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},g.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},g.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},g.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},g.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},d},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var f,g,c=this.vars,d=e.length;--d>-1;)if(g=c[e[d]])for(f=g.length;--f>-1;)"{self}"===g[f]&&(g=c[e[d]]=g.concat(),g[f]=this);c.tweens instanceof Array&&this.add(c.tweens,0,c.align,c.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.9.4",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var m,n,l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});for("string"==typeof a&&(a=c.selector(a)||a),!(a instanceof Array)&&"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style&&(n=[],a.each(function(){n.push(this)}),a=n),f=f||0,m=0;a.length>m;m++)e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var g,h,e=new d(a),f=e._timeline;for(null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){var i,j,k,l,m;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array){for(g=g||"normal",h=h||0,i=f,j=e.length,k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline: it is neither a tween, timeline, function, nor a string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,b){return this.play(a,b)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,n,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&this._first&&(n=!0)),this._rawPrevTime=a,a=d+1e-6):1e-7>a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(n=!0)):this._initted||(n=!0),this._rawPrevTime=a):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e&&this._first||c||n){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>=e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var f,d=this._first,e=this._labels;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(f in e)e[f]>=c&&(e[f]+=a);return this._uncache(!0)},h._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._last,d=999999999999;c;)e=c._prev,c._dirty&&c.totalDuration(),c._startTime>d&&this._sortChildren&&!c._paused?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&!c._paused&&(b-=c._startTime,this._timeline.smoothChildTiming&&(this._startTime+=c._startTime/this._timeScale),this.shiftChildren(-c._startTime,!1,-9999999999),d=0),f=c._startTime+c._totalDuration/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=[],f=new c(null,null,1,0),g=function(a){for(;a;){if(a._paused)return!0;a=a._timeline}return!1},h=d.prototype=new a;return h.constructor=d,h.kill()._gc=!1,d.version="1.9.4",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},h.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},h.removeCallback=function(a,b){if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},h.tweenTo=function(a,c){c=c||{};var g,h,d={ease:f,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(g in c)d[g]=c[g];return d.time=this._parseTimeOrLabel(a),h=new b(this,Math.abs(Number(d.time)-this._time)/this._timeScale||.001,d),d.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||h,c.onStartParams||e)},h},h.tweenFromTo=function(a,b,c){c=c||{},c.startAt={time:this._parseTimeOrLabel(a)};var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-d.vars.startAt.time)/this._timeScale||.001)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var n,o,p,q,r,s,d=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,g=this._time,h=this._totalTime,i=this._startTime,j=this._timeScale,k=this._rawPrevTime,l=this._paused,m=this._cycle;if(a>=d?(this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(o=!0,q="onComplete",0===f&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&this._first&&(r=!0)),this._rawPrevTime=a,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=f,a=f+1e-6)):1e-7>a?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==g||0===f&&this._rawPrevTime>0&&!this._locked)&&(q="onReverseComplete",o=this._reversed),0>a?(this._active=!1,0===f&&this._rawPrevTime>=0&&this._first&&(r=!0)):this._initted||(r=!0),this._rawPrevTime=a,a=0):(this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(s=f+this._repeatDelay,this._cycle=this._totalTime/s>>0,0!==this._cycle&&this._cycle===this._totalTime/s&&this._cycle--,this._time=this._totalTime-this._cycle*s,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,a=f+1e-6):0>this._time?this._time=a=0:a=this._time))),this._cycle!==m&&!this._locked){var t=this._yoyo&&0!==(1&m),u=t===(this._yoyo&&0!==(1&this._cycle)),v=this._totalTime,w=this._cycle,x=this._rawPrevTime,y=this._time;this._totalTime=m*f,m>this._cycle?t=!t:this._totalTime+=f,this._time=g,this._rawPrevTime=0===f?k-1e-5:k,this._cycle=m,this._locked=!0,g=t?0:f,this.render(g,b,0===f),b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||e),u&&(g=t?f+1e-6:-1e-6,this.render(g,!0,!1)),this._time=y,this._totalTime=v,this._cycle=w,this._rawPrevTime=x,this._locked=!1}if(!(this._time!==g&&this._first||c||r))return h!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),void 0;if(this._initted||(this._initted=!0),0===h&&this.vars.onStart&&0!==this._totalTime&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||e)),this._time>=g)for(n=this._first;n&&(p=n._next,!this._paused||l);)(n._active||n._startTime<=this._time&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(a-n._startTime)*n._timeScale,b,c):n.render((a-n._startTime)*n._timeScale,b,c)),n=p;else for(n=this._last;n&&(p=n._prev,!this._paused||l);)(n._active||g>=n._startTime&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(a-n._startTime)*n._timeScale,b,c):n.render((a-n._startTime)*n._timeScale,b,c)),n=p;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),q&&(this._locked||this._gc||(i===this._startTime||j!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(o&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[q]&&this.vars[q].apply(this.vars[q+"Scope"]||this,this.vars[q+"Params"]||e)))},h.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var i,j,d=[],e=this.getChildren(a,b,c),f=0,h=e.length;for(i=0;h>i;i++)j=e[i],j._paused||j._timeline._time>=j._startTime&&j._timeline._time<j._startTime+j._totalDuration/j._timeScale&&(g(j._timeline)||(d[f++]=j));return d},h.getLabelAfter=function(a){a||0!==a&&(a=this._time);var d,b=this.getLabelsArray(),c=b.length;for(d=0;c>d;d++)if(b[d].time>a)return b[d].name;return null},h.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(a>b[c].time)return b[c].name;return null},h.getLabelsArray=function(){var c,a=[],b=0;for(c in this._labels)a[b++]={time:this._labels[c],name:c};return a.sort(function(a,b){return a.time-b.time}),a},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},h.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},h.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},h.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},h.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},h.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=Math.PI/180,c=[],d=[],e=[],f={},g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,b,f,g,h){var m,n,o,p,q,r,s,t,u,v,w,x,y,j=a.length-1,k=0,l=a[0].a;for(m=0;j>m;m++)q=a[k],n=q.a,o=q.d,p=a[k+1].d,h?(w=c[m],x=d[m],y=.25*(x+w)*b/(g?.5:e[m]||.5),r=o-(o-n)*(g?.5*b:0!==w?y/w:0),s=o+(p-o)*(g?.5*b:0!==x?y/x:0),t=o-(r+((s-r)*(3*w/(w+x)+.5)/4||0))):(r=o-.5*(o-n)*b,s=o+.5*(p-o)*b,t=o-(r+s)/2),r+=t,s+=t,q.c=u=r,q.b=0!==m?l:l=q.a+.6*(q.c-q.a),q.da=o-n,q.ca=u-n,q.ba=l-n,f?(v=i(n,l,u,o),a.splice(k,1,v[0],v[1],v[2],v[3]),k+=4):k++,l=s;q=a[k],q.b=l,q.c=l+.4*(q.d-l),q.da=q.d-q.a,q.ca=q.c-q.a,q.ba=l-q.a,f&&(v=i(q.a,l,q.c,q.d),a.splice(k,1,v[0],v[1],v[2],v[3]))},k=function(a,b,e,f){var i,j,k,l,m,n,h=[];if(f)for(a=[f].concat(a),j=a.length;--j>-1;)"string"==typeof(n=a[j][b])&&"="===n.charAt(1)&&(a[j][b]=f[b]+Number(n.charAt(0)+n.substr(2)));if(i=a.length-2,0>i)return h[0]=new g(a[0][b],0,0,a[-1>i?0:1][b]),h;for(j=0;i>j;j++)k=a[j][b],l=a[j+1][b],h[j]=new g(k,0,0,l),e&&(m=a[j+2][b],c[j]=(c[j]||0)+(l-k)*(l-k),d[j]=(d[j]||0)+(m-l)*(m-l));return h[j]=new g(a[j][b],0,0,a[j+1][b]),h},l=function(a,b,g,i,l,m){var q,r,s,t,u,v,w,x,n={},o=[],p=m||a[0];l="string"==typeof l?","+l+",":h,null==b&&(b=1);for(r in a[0])o.push(r);if(a.length>1){for(x=a[a.length-1],w=!0,q=o.length;--q>-1;)if(r=o[q],Math.abs(p[r]-x[r])>.05){w=!1;break}w&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(c.length=d.length=e.length=0,q=o.length;--q>-1;)r=o[q],f[r]=-1!==l.indexOf(","+r+","),n[r]=k(a,r,f[r],m);for(q=c.length;--q>-1;)c[q]=Math.sqrt(c[q]),d[q]=Math.sqrt(d[q]);if(!i){for(q=o.length;--q>-1;)if(f[r])for(s=n[o[q]],v=s.length-1,t=0;v>t;t++)u=s[t+1].da/d[t]+s[t].da/c[t],e[t]=(e[t]||0)+u*u;for(q=e.length;--q>-1;)e[q]=Math.sqrt(e[q])}for(q=o.length,t=g?4:1;--q>-1;)r=o[q],s=n[r],j(s,b,g,i,f[r]),w&&(s.splice(0,t),s.splice(s.length-t,t));return n},m=function(a,b,c){b=b||"soft";var i,j,k,l,m,n,o,p,q,r,s,d={},e="cubic"===b?3:2,f="soft"===b,h=[];if(f&&c&&(a=[c].concat(a)),null==a||e+1>a.length)throw"invalid Bezier data";for(q in a[0])h.push(q);for(n=h.length;--n>-1;){for(q=h[n],d[q]=m=[],r=0,p=a.length,o=0;p>o;o++)i=null==c?a[o][q]:"string"==typeof(s=a[o][q])&&"="===s.charAt(1)?c[q]+Number(s.charAt(0)+s.substr(2)):Number(s),f&&o>1&&p-1>o&&(m[r++]=(i+m[r-2])/2),m[r++]=i;for(p=r-e+1,r=0,o=0;p>o;o+=e)i=m[o],j=m[o+1],k=m[o+2],l=2===e?0:m[o+3],m[r++]=s=3===e?new g(i,j,k,l):new g(i,(2*j+i)/3,(2*j+k)/3,k);m.length=r}return d},n=function(a,b,c){for(var f,g,h,i,j,k,l,m,n,o,p,d=1/c,e=a.length;--e>-1;)for(o=a[e],h=o.a,i=o.d-h,j=o.c-h,k=o.b-h,f=g=0,m=1;c>=m;m++)l=d*m,n=1-l,f=g-(g=(l*l*i+3*n*(l*j+n*k))*l),p=e*c+m-1,b[p]=(b[p]||0)+f*f},o=function(a,b){b=b>>0||6;var j,k,l,m,c=[],d=[],e=0,f=0,g=b-1,h=[],i=[];for(j in a)n(a[j],c,b);for(l=c.length,k=0;l>k;k++)e+=Math.sqrt(c[k]),m=k%b,i[m]=e,m===g&&(f+=e,m=k/b>>0,h[m]=i,d[m]=f,e=0,i=[]);return{length:f,lengths:d,segments:h}},p=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var h,i,j,k,n,d=b.values||[],e={},f=d[0],g=b.autoRotate||c.vars.orientToBezier;this._autoRotate=g?g instanceof Array?g:[["x","y","rotation",g===!0?0:Number(g)||0]]:null;for(h in f)this._props.push(h);for(j=this._props.length;--j>-1;)h=this._props[j],this._overwriteProps.push(h),i=this._func[h]="function"==typeof a[h],e[h]=i?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]():parseFloat(a[h]),n||e[h]!==d[0][h]&&(n=e);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(d,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,n):m(d,b.type,e),this._segCount=this._beziers[h].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(g=this._autoRotate)for(g[0]instanceof Array||(this._autoRotate=g=[g]),j=g.length;--j>-1;)for(k=0;3>k;k++)h=g[j][k],this._func[h]="function"==typeof a[h]?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]:!1;return!0},set:function(b){var f,g,h,i,j,k,l,m,n,o,c=this._segCount,d=this._func,e=this._target;if(this._timeRes){if(n=this._lengths,o=this._curSeg,b*=this._length,h=this._li,b>this._l2&&c-1>h){for(m=c-1;m>h&&b>=(this._l2=n[++h]););this._l1=n[h-1],this._li=h,this._curSeg=o=this._segments[h],this._s2=o[this._s1=this._si=0]}else if(this._l1>b&&h>0){for(;h>0&&(this._l1=n[--h])>=b;);0===h&&this._l1>b?this._l1=0:h++,this._l2=n[h],this._li=h,this._curSeg=o=this._segments[h],this._s1=o[(this._si=o.length-1)-1]||0,this._s2=o[this._si]}if(f=h,b-=this._l1,h=this._si,b>this._s2&&o.length-1>h){for(m=o.length-1;m>h&&b>=(this._s2=o[++h]););this._s1=o[h-1],this._si=h}else if(this._s1>b&&h>0){for(;h>0&&(this._s1=o[--h])>=b;);0===h&&this._s1>b?this._s1=0:h++,this._s2=o[h],this._si=h}k=(h+(b-this._s1)/(this._s2-this._s1))*this._prec}else f=0>b?0:b>=1?c-1:c*b>>0,k=(b-f*(1/c))*c;for(g=1-k,h=this._props.length;--h>-1;)i=this._props[h],j=this._beziers[i][f],l=(k*k*j.da+3*g*(k*j.ca+g*j.ba))*k+j.a,this._round[i]&&(l=l+(l>0?.5:-.5)>>0),d[i]?e[i](l):e[i]=l;if(this._autoRotate){var q,r,s,t,u,v,w,p=this._autoRotate;for(h=p.length;--h>-1;)i=p[h][2],v=p[h][3]||0,w=p[h][4]===!0?1:a,j=this._beziers[p[h][0]][f],q=this._beziers[p[h][1]][f],r=j.a+(j.b-j.a)*k,t=j.b+(j.c-j.b)*k,r+=(t-r)*k,t+=(j.c+(j.d-j.c)*k-t)*k,s=q.a+(q.b-q.a)*k,u=q.b+(q.c-q.b)*k,s+=(u-s)*k,u+=(q.c+(q.d-q.c)*k-u)*k,l=Math.atan2(u-s,t-r)*w+v,d[i]?e[i](l):e[i]=l}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=window._gsDefine.globals.CSSPlugin;if(a){var c=a._internals,d=c._parseToProxy,e=c._setPluginRatio,f=c.CSSPropTween;c._registerComplexSpecialProp("bezier",{parser:function(a,c,g,h,i,j){c instanceof Array&&(c={values:c}),j=new p;var o,q,r,k=c.values,l=k.length-1,m=[],n={};if(0>l)return i;for(o=0;l>=o;o++)r=d(a,k[o],h,i,j,l!==o),m[o]=r.end;for(q in c)n[q]=c[q];return n.values=m,i=new f(a,"bezier",0,0,r.pt,2),i.data=r,i.plugin=j,i.setRatio=e,0===n.autoRotate&&(n.autoRotate=!0),!n.autoRotate||n.autoRotate instanceof Array||(o=n.autoRotate===!0?0:Number(n.autoRotate)*b,n.autoRotate=null!=r.end.left?[["left","top","rotation",o,!0]]:null!=r.end.x?[["x","y","rotation",o,!0]]:!1),n.autoRotate&&(h._transform||h._enableTransforms(!1),r.autoRotate=h._target._gsTransform),j._onInitTween(r.proxy,n,h._tween),i}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var c,d,b=this._props;for(c in this._beziers)if(c in a)for(delete this._beziers[c],delete this._func[c],d=b.length;--d>-1;)b[d]===c&&b.splice(d,1);return this._super._kill.call(this,a)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.9.4",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};var I,J,K,L,M,N,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/^(rgb|hsl)/,s=/([A-Z])/g,t=/-([a-z])/gi,u=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,v=function(a,b){return b.toUpperCase()
},w=/(?:Left|Right|Width)/i,x=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,y=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,z=/,(?=[^\)]*(?:\(|$))/gi,A=Math.PI/180,B=180/Math.PI,C={},D=document,E=D.createElement("div"),F=D.createElement("img"),G=c._internals={_specialProps:h},H=navigator.userAgent,O=function(){var c,a=H.indexOf("Android"),b=D.createElement("div");return K=-1!==H.indexOf("Safari")&&-1===H.indexOf("Chrome")&&(-1===a||Number(H.substr(a+8,1))>3),M=K&&6>Number(H.substr(H.indexOf("Version/")+8,1)),L=-1!==H.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H),N=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),P=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},Q=function(a){window.console&&console.log(a)},R="",S="",T=function(a,b){b=b||E;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(S=3===e?"ms":d[e],R="-"+S.toLowerCase()+"-",S+a):null},U=D.defaultView?D.defaultView.getComputedStyle:function(){},V=c.getStyle=function(a,b,c,d,e){var f;return O||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||U(a,null))?(a=c.getPropertyValue(b.replace(s,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):P(a)},W=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=w.test(b),g=a,h=E.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||D.body,h[f?"width":"height"]=c+d),g.appendChild(E),j=parseFloat(E[f?"offsetWidth":"offsetHeight"]),g.removeChild(E),0!==j||e||(j=W(a,b,c,d,!0))),i?-j:j},X=function(a,b,c){if("absolute"!==V(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=V(a,"margin"+d,c);return a["offset"+d]-(W(a,b,parseFloat(e),e.replace(n,""))||0)},Y=function(a,b){var d,e,c={};if(b=b||U(a,null))if(d=b.length)for(;--d>-1;)c[b[d].replace(t,v)]=b.getPropertyValue(b[d]);else for(d in b)c[d]=b[d];else if(b=a.currentStyle||a.style)for(d in b)c[d.replace(t,v)]=b[d];return O||(c.opacity=P(a)),e=zb(a,b,!1),c.rotation=e.rotation*B,c.skewX=e.skewX*B,c.scaleX=e.scaleX,c.scaleY=e.scaleY,c.x=e.x,c.y=e.y,yb&&(c.z=e.z,c.rotationX=e.rotationX*B,c.rotationY=e.rotationY*B,c.scaleZ=e.scaleZ),c.filters&&delete c.filters,c},Z=function(a,b,c,d,e){var h,i,j,f={},g=a.style;for(i in c)"cssText"!==i&&"length"!==i&&isNaN(i)&&(b[i]!==(h=c[i])||e&&e[i])&&-1===i.indexOf("Origin")&&("number"==typeof h||"string"==typeof h)&&(f[i]="auto"!==h||"left"!==i&&"top"!==i?""!==h&&"auto"!==h&&"none"!==h||"string"!=typeof b[i]||""===b[i].replace(m,"")?h:0:X(a,i),void 0!==g[i]&&(j=new mb(g,i,g[i],j)));if(d)for(i in d)"className"!==i&&(f[i]=d[i]);return{difs:f,firstMPT:j}},$={width:["Left","Right"],height:["Top","Bottom"]},_=["marginLeft","marginRight","marginTop","marginBottom"],ab=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=$[b],f=e.length;for(c=c||U(a,null);--f>-1;)d-=parseFloat(V(a,"padding"+e[f],c,!0))||0,d-=parseFloat(V(a,"border"+e[f]+"Width",c,!0))||0;return d},bb=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},cb=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},db=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},eb=function(a,b,c,d){var f,g,h,i,j,e=1e-6;return null==a?j=b:"number"==typeof a?j=a*A:(f=2*Math.PI,g=a.split("_"),h=Number(g[0].replace(m,""))*(-1===a.indexOf("rad")?A:1)-("="===a.charAt(1)?0:b),i=g[1],i&&d&&(d[c]=b+h),"short"===i?(h%=f,h!==h%(f/2)&&(h=0>h?h+f:h-f)):"cw"===i&&0>h?h=(h+9999999999*f)%f-(0|h/f)*f:"ccw"===i&&h>0&&(h=(h-9999999999*f)%f-(0|h/f)*f),j=b+h),e>j&&j>-e&&(j=0),j},fb={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},gb=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,0|255*(1>6*a?b+6*(c-b)*a:.5>a?c:2>3*a?b+6*(c-b)*(2/3-a):b)+.5},hb=function(a){var b,c,d,e,f,g;return a&&""!==a?"number"==typeof a?[a>>16,255&a>>8,255&a]:(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),fb[a]?fb[a]:"#"===a.charAt(0)?(4===a.length&&(b=a.charAt(1),c=a.charAt(2),d=a.charAt(3),a="#"+b+b+c+c+d+d),a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]):"hsl"===a.substr(0,3)?(a=a.match(j),e=Number(a[0])%360/360,f=Number(a[1])/100,g=Number(a[2])/100,c=.5>=g?g*(f+1):g+f-g*f,b=2*g-c,a.length>3&&(a[3]=Number(a[3])),a[0]=gb(e+1/3,b,c),a[1]=gb(e,b,c),a[2]=gb(e-1/3,b,c),a):(a=a.match(j)||fb.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a)):fb.black},ib="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(i in fb)ib+="|"+i+"\\b";ib=RegExp(ib+")","gi");var jb=function(a,b,c,d){if(null==a)return function(a){return a};var n,e=b?(a.match(ib)||[""])[0]:"",f=a.split(e).join("").match(l)||[],g=a.substr(0,a.indexOf(f[0])),h=")"===a.charAt(a.length-1)?")":"",i=-1!==a.indexOf(" ")?" ":",",k=f.length,m=k>0?f[0].replace(j,""):"";return k?n=b?function(a){var b,j,o,p;if("number"==typeof a)a+=m;else if(d&&z.test(a)){for(p=a.replace(z,"|").split("|"),o=0;p.length>o;o++)p[o]=n(p[o]);return p.join(",")}if(b=(a.match(ib)||[e])[0],j=a.split(b).join("").match(l)||[],o=j.length,k>o--)for(;k>++o;)j[o]=c?j[(o-1)/2>>0]:f[o];return g+j.join(i)+i+b+h+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,e,j;if("number"==typeof a)a+=m;else if(d&&z.test(a)){for(e=a.replace(z,"|").split("|"),j=0;e.length>j;j++)e[j]=n(e[j]);return e.join(",")}if(b=a.match(l)||[],j=b.length,k>j--)for(;k>++j;)b[j]=c?b[(j-1)/2>>0]:f[j];return g+b.join(i)+h}:function(a){return a}},kb=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},mb=(G._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ob=(G._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=C;for(c._transform=null,C=b,d=p=c.parse(a,b,d,e),C=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new mb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new mb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},G.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof ob||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),pb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new ob(a,b,0,0,g,l?2:1,null,!1,h,c,d),d+="";var q,s,t,u,v,w,x,y,A,B,C,D,m=c.split(", ").join(",").split(" "),n=d.split(", ").join(",").split(" "),o=m.length,p=I!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(m=m.join(" ").replace(z,", ").split(" "),n=n.join(" ").replace(z,", ").split(" "),o=m.length),o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(u=m[q],v=n[q],y=parseFloat(u),y||0===y)g.appendXtra("",y,cb(v,y),v.replace(k,""),p&&-1!==v.indexOf("px"),!0);else if(e&&("#"===u.charAt(0)||fb[u]||r.test(u)))D=","===v.charAt(v.length-1)?"),":")",u=hb(u),v=hb(v),A=u.length+v.length>6,A&&!O&&0===v[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(O||(A=!1),g.appendXtra(A?"rgba(":"rgb(",u[0],v[0]-u[0],",",!0,!0).appendXtra("",u[1],v[1]-u[1],",",!0).appendXtra("",u[2],v[2]-u[2],A?",":D,!0),A&&(u=4>u.length?1:u[3],g.appendXtra("",u,(4>v.length?1:v[3])-u,D,!1)));else if(w=u.match(j)){if(x=v.match(k),!x||x.length!==w.length)return g;for(t=0,s=0;w.length>s;s++)C=w[s],B=u.indexOf(C,t),g.appendXtra(u.substr(t,B-t),Number(C),cb(x[s],C),"",p&&"px"===u.substr(B+C.length,2),0===s),t=B+C.length;g["xs"+g.l]+=u.substr(t)}else g["xs"+g.l]+=g.l?" "+u:u;if(-1!==d.indexOf("=")&&g.data){for(D=g.xs0+g.data.s,q=1;g.l>q;q++)D+=g["xs"+q]+g.data["xn"+q];g.e=D+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},qb=9;for(i=ob.prototype,i.l=i.pr=0;--qb>0;)i["xn"+qb]=0,i["xs"+qb]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ob(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var rb=function(a,b){b=b||{},this.p=b.prefix?T(a)||a:a,h[a]=h[this.p]=this,this.format=b.formatter||jb(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},sb=G._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var f,g,d=a.split(","),e=b.defaultValue;for(c=c||[e],f=0;d.length>f;f++)b.prefix=0===f&&b.prefix,b.defaultValue=c[f]||e,g=new rb(d[f],b)},tb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";sb(a,{parser:function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(Q("Error: "+b+" js file not loaded."),f)}})}};i=rb.prototype,i.parseComplex=function(a,b,c,d,e,f){var h,i,j,k,l,m,g=this.keyword;if(this.multi&&(z.test(c)||z.test(b)?(i=b.replace(z,"|").split("|"),j=c.replace(z,"|").split("|")):g&&(i=[b],j=[c])),j){for(k=j.length>i.length?j.length:i.length,h=0;k>h;h++)b=i[h]=i[h]||this.dflt,c=j[h]=j[h]||this.dflt,g&&(l=b.indexOf(g),m=c.indexOf(g),l!==m&&(c=-1===m?j:i,c[h]+=" "+g));b=i.join(", "),c=j.join(", ")}return pb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(V(a,this.p,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){sb(a,{parser:function(a,d,e,f,g,h){var j=new ob(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})};var ub="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),vb=T("transform"),wb=R+"transform",xb=T("transformOrigin"),yb=null!==T("perspective"),zb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,w,y,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=yb?parseFloat(V(a,xb,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(vb?l=V(a,wb,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(x),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(p=o-(o|=0))?(0|p*h+(0>p?-.5:.5))/h+o:o;if(16===m.length){var z=m[8],A=m[9],B=m[10],C=m[12],D=m[13],E=m[14];if(e.zOrigin&&(E=-e.zOrigin,C=z*E-m[12],D=A*E-m[13],E=B*E+e.zOrigin-m[14]),!d||C!==e.x||D!==e.y||E!==e.z){var Q,R,S,T,U,W,X,Y,F=m[0],G=m[1],H=m[2],I=m[3],J=m[4],K=m[5],L=m[6],M=m[7],N=m[11],O=e.rotationX=Math.atan2(L,B),P=i>O||O>j;O&&(U=Math.cos(-O),W=Math.sin(-O),Q=J*U+z*W,R=K*U+A*W,S=L*U+B*W,T=M*U+N*W,z=J*-W+z*U,A=K*-W+A*U,B=L*-W+B*U,N=M*-W+N*U,J=Q,K=R,L=S),O=e.rotationY=Math.atan2(z,F),O&&(X=i>O||O>j,U=Math.cos(-O),W=Math.sin(-O),Q=F*U-z*W,R=G*U-A*W,S=H*U-B*W,T=I*U-N*W,A=G*W+A*U,B=H*W+B*U,N=I*W+N*U,F=Q,G=R,H=S),O=e.rotation=Math.atan2(G,K),O&&(Y=i>O||O>j,U=Math.cos(-O),W=Math.sin(-O),F=F*U+J*W,R=G*U+K*W,K=G*-W+K*U,L=H*-W+L*U,G=R),Y&&P?e.rotation=e.rotationX=0:Y&&X?e.rotation=e.rotationY=0:X&&P&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(F*F+G*G)*h+.5>>0)/h,e.scaleY=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(L*L+B*B)*h+.5>>0)/h,e.skewX=0,e.perspective=N?1/(0>N?-N:N):0,e.x=C,e.y=D,e.z=E}}else if(!(yb&&0!==m.length&&e.x===m[4]&&e.y===m[5]&&(e.rotationX||e.rotationY)||void 0!==e.x&&"none"===V(a,"display",b))){var Z=m.length>=6,$=Z?m[0]:1,_=m[1]||0,ab=m[2]||0,bb=Z?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,q=Math.sqrt($*$+_*_),r=Math.sqrt(bb*bb+ab*ab),s=$||_?Math.atan2(_,$):e.rotation||0,t=ab||bb?Math.atan2(ab,bb)+s:e.skewX||0,u=q-Math.abs(e.scaleX||0),v=r-Math.abs(e.scaleY||0),Math.abs(t)>Math.PI/2&&Math.abs(t)<1.5*Math.PI&&(f?(q*=-1,t+=0>=s?Math.PI:-Math.PI,s+=0>=s?Math.PI:-Math.PI):(r*=-1,t+=0>=t?Math.PI:-Math.PI)),w=(s-e.rotation)%Math.PI,y=(t-e.skewX)%Math.PI,(void 0===e.skewX||u>g||-g>u||v>g||-g>v||w>i&&j>w&&0!==w*h>>0||y>i&&j>y&&0!==y*h>>0)&&(e.scaleX=q,e.scaleY=r,e.rotation=s,e.skewX=t),yb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},Ab=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,x=8>N?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),qb=0;4>qb;qb++)A=_[qb],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):W(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>qb?-b.ieOffsetX:-b.ieOffsetY:2>qb?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===qb||2===qb?1:x)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(y,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},Bb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;L&&(D=c.top?"top":c.bottom?"bottom":parseFloat(V(this.t,"top",null,!1))?"bottom":"top",z=V(this.t,D,null,!1),E=parseFloat(z)||0,F=z.substr((E+"").length)||"px",b._ffFix=!b._ffFix,c[D]=(b._ffFix?E+.05:E-.05)+F),(t||b.skewX)&&(z=e*Math.cos(t),A=j*Math.sin(t),t-=b.skewX,f=e*-Math.sin(t),j*=Math.cos(t),e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h=(z=(h+=b.x)-(h|=0))?(0|z*w+(0>z?-.5:.5))/w+h:h,l=(z=(l+=b.y)-(l|=0))?(0|z*w+(0>z?-.5:.5))/w+l:l,p=(z=(p+=b.z)-(p|=0))?(0|z*w+(0>z?-.5:.5))/w+p:p,c[vb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+h+v+l+v+p+v+(d?1+-p/d:1)+")"},Cb=function(){var e,f,g,h,i,j,k,l,m,b=this.data,c=this.t,d=c.style;L&&(e=d.top?"top":d.bottom?"bottom":parseFloat(V(c,"top",null,!1))?"bottom":"top",f=V(c,e,null,!1),g=parseFloat(f)||0,h=f.substr((g+"").length)||"px",b._ffFix=!b._ffFix,d[e]=(b._ffFix?g+.05:g-.05)+h),b.rotation||b.skewX?(i=b.rotation,j=i-b.skewX,k=1e5,l=b.scaleX*k,m=b.scaleY*k,d[vb]="matrix("+(Math.cos(i)*l>>0)/k+","+(Math.sin(i)*l>>0)/k+","+(Math.sin(j)*-m>>0)/k+","+(Math.cos(j)*m>>0)/k+","+b.x+","+b.y+")"):d[vb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};sb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(a,b,c,d,e,g,h){if(d._transform)return e;var o,p,q,r,s,t,u,i=d._transform=zb(a,f,!0),j=a.style,k=1e-6,l=ub.length,m=h,n={};if("string"==typeof m.transform&&vb)q=j.cssText,j[vb]=m.transform,j.display="block",o=zb(a,null,!1),j.cssText=q;else if("object"==typeof m){if(o={scaleX:db(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:db(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:db(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:db(m.x,i.x),y:db(m.y,i.y),z:db(m.z,i.z),perspective:db(m.transformPerspective,i.perspective)},u=m.directionalRotation,null!=u)if("object"==typeof u)for(q in u)m[q]=u[q];else m.rotation=u;o.rotation=eb("rotation"in m?m.rotation:"shortRotation"in m?m.shortRotation+"_short":"rotationZ"in m?m.rotationZ:i.rotation*B,i.rotation,"rotation",n),yb&&(o.rotationX=eb("rotationX"in m?m.rotationX:"shortRotationX"in m?m.shortRotationX+"_short":i.rotationX*B||0,i.rotationX,"rotationX",n),o.rotationY=eb("rotationY"in m?m.rotationY:"shortRotationY"in m?m.shortRotationY+"_short":i.rotationY*B||0,i.rotationY,"rotationY",n)),o.skewX=null==m.skewX?i.skewX:eb(m.skewX,i.skewX),o.skewY=null==m.skewY?i.skewY:eb(m.skewY,i.skewY),(p=o.skewY-i.skewY)&&(o.skewX+=p,o.rotation+=p)}for(s=i.z||i.rotationX||i.rotationY||o.z||o.rotationX||o.rotationY||o.perspective,s||null==m.scale||(o.scaleZ=1);--l>-1;)c=ub[l],r=o[c]-i[c],(r>k||-k>r||null!=C[c])&&(t=!0,e=new ob(i,c,i[c],r,e),c in n&&(e.e=n[c]),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return r=m.transformOrigin,(r||yb&&s&&i.zOrigin)&&(vb?(t=!0,r=(r||V(a,c,f,!1,"50% 50%"))+"",c=xb,e=new ob(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,yb?(q=i.zOrigin,r=r.split(" "),i.zOrigin=(r.length>2?parseFloat(r[2]):q)||0,e.xs0=e.e=j[c]=r[0]+" "+(r[1]||"50%")+" 0px",e=new ob(i,"zOrigin",0,0,e,-1,e.n),e.b=q,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=r):bb(r+"",i)),t&&(d._transformType=s||3===this._transformType?3:2),e},prefix:!0}),sb("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),sb("borderRadius",{defaultValue:"0px",parser:function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=T(i[l])),o=n=V(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=W(a,"borderLeft",q,v),y=W(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=W(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=pb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},prefix:!0,formatter:jb("0px 0px 0px 0px",!1,!0)}),sb("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,e,g){var l,m,n,o,p,q,h="background-position",i=f||U(a,null),j=this.format((i?N?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))&&(q=V(a,"backgroundImage").replace(u,""),q&&"none"!==q)){for(l=j.split(" "),m=k.split(" "),F.setAttribute("src",q),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-F.width:a.offsetHeight-F.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},formatter:bb}),sb("backgroundSize",{defaultValue:"0 0",formatter:bb}),sb("perspective",{defaultValue:"0px",prefix:!0}),sb("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),sb("transformStyle",{prefix:!0}),sb("backfaceVisibility",{prefix:!0}),sb("margin",{parser:kb("marginTop,marginRight,marginBottom,marginLeft")}),sb("padding",{parser:kb("paddingTop,paddingRight,paddingBottom,paddingLeft")}),sb("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,e,g){var h,i,j;return 9>N?(i=a.currentStyle,j=8>N?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(V(a,this.p,f,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,e,g)}}),sb("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),sb("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),sb("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(V(a,"borderTopWidth",f,!1,"0px")+" "+V(a,"borderTopStyle",f,!1,"solid")+" "+V(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ib)||["#000"])[0]}}),sb("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ob(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Db=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!V(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};sb("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,e,g){var j,h=parseFloat(V(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=V(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new ob(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),O?e=new ob(i,"opacity",h,b-h,e):(e=new ob(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Db),e}});var Eb=function(a,b){b&&(a.removeProperty?a.removeProperty(b.replace(s,"-$1").toLowerCase()):a.removeAttribute(b))},Fb=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.className=0===a?this.b:this.e;for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Eb(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};sb("className",{parser:function(a,b,c,e,g,h,i){var l,m,n,o,p,j=a.className,k=a.style.cssText;if(g=e._classNamePT=new ob(a,c,0,0,g,2),g.setRatio=Fb,g.pr=-11,d=!0,g.b=j,m=Y(a,f),n=a._gsClassPT){for(o={},p=n.data;p;)o[p.p]=1,p=p._next;n.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:j.replace(RegExp("\\s*\\b"+b.substr(2)+"\\b"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),e._tween._duration&&(a.className=g.e,l=Z(a,m,Y(a),i,o),a.className=j,g.data=l.firstMPT,a.style.cssText=k,g=g.xfirst=e.parse(a,l.difs,g,h)),g}});var Gb=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration)for(var g,b="all"===this.e,c=this.t.style,d=b?c.cssText.split(";"):this.e.split(","),e=d.length,f=h.transform.parse;--e>-1;)g=d[e],b&&(g=g.substr(0,g.indexOf(":")).split(" ").join("")),h[g]&&(g=h[g].parse===f?vb:h[g].p),Eb(c,g)};for(sb("clearProps",{parser:function(a,b,c,e,f){return f=new ob(a,c,0,0,f,2),f.setRatio=Gb,f.e=b,f.pr=-10,f.data=e._tween,d=!0,f}}),i="bezier,throwProps,physicsProps,physics2D".split(","),qb=i.length;qb--;)tb(i[qb]);i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,I=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=U(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(J&&""===i.zIndex&&(j=V(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=Y(a,f),i.cssText=m+";"+b,j=Z(a,j,Y(a)).difs,!O&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,vb?K&&(J=!0,""===i.zIndex&&(q=V(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),M&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new ob(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&yb?Bb:vb?Cb:Ab,r.data=this._transform||zb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,o,p,q,s,t,g=a.style;for(i in b)o=b[i],j=h[i],j?c=j.parse(a,o,i,this,c,d,b):(m=V(a,i,f)+"",s="string"==typeof o,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||s&&r.test(o)?(s||(o=hb(o),o=(o.length>3?"rgba(":"rgb(")+o.join(",")+")"),c=pb(g,i,m,o,!0,"transparent",c,0,d)):!s||-1===o.indexOf(" ")&&-1===o.indexOf(",")?(k=parseFloat(m),p=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=ab(a,i,f),p="px"):"left"===i||"top"===i?(k=X(a,i,f),p="px"):(k="opacity"!==i?0:1,p="")),t=s&&"="===o.charAt(1),t?(l=parseInt(o.charAt(0)+"1",10),o=o.substr(2),l*=parseFloat(o),q=o.replace(n,"")):(l=parseFloat(o),q=s?o.substr((l+"").length)||"":""),""===q&&(q=e[i]||p),o=l||0===l?(t?l+k:l)+q:b[i],p!==q&&""!==q&&(l||0===l)&&(k||0===k)&&(k=W(a,i,k,p),"%"===q?(k/=W(a,i,100,"%")/100,k>100&&(k=100),b.strictUnits!==!0&&(m=k+"%")):"em"===q?k/=W(a,i,1,"em"):(l=W(a,i,l,q),q="px"),t&&(l||0===l)&&(o=l+k+q)),t&&(l+=k),!k&&0!==k||!l&&0!==l?o||"NaN"!=o+""&&null!=o?(c=new ob(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,o),c.xs0="none"!==o||"display"!==i&&-1===i.indexOf("Style")?o:m):Q("invalid "+i+" tween value: "+b[i]):(c=new ob(g,i,k,l-k,c,0,"css_"+i,I!==!1&&("px"===q||"zIndex"===i),0,m,o),c.xs0=q)):c=pb(g,i,m,o,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var d,e,f,c=b;if(b.css_autoAlpha||b.css_alpha){c={};for(e in b)c[e]=b[e];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(d=this._classNamePT)&&(f=d.xfirst,f&&f._prev?this._linkCSSP(f._prev,d._next,f._prev._prev):f===this._firstPT&&(this._firstPT=d._next),d._next&&this._linkCSSP(d._next,d._next._next,f._prev),this._classNamePT=null),a.prototype._kill.call(this,c)};var Hb=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Hb(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(Y(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Hb(f,b,c)};return c.cascadeTo=function(a,c,d){var k,l,m,e=b.to(a,c,d),f=[e],g=[],h=[],i=[],j=b._internals.reservedProps;for(a=e._targets||e.target,Hb(a,g,i),e.render(c,!0),Hb(a,h),e.render(0,!0),e._enabled(!0),k=i.length;--k>-1;)if(l=Z(i[k],g[k],h[k]),l.firstMPT){l=l.difs;for(m in d)j[m]&&(l[m]=d[m]);f.push(b.to(i[k],c,l))}return f},a.activate([c]),c},!0),function(){var a=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=a.prototype;b._onInitAllProps=function(){for(var f,g,h,a=this._tween,b=a.vars.roundProps instanceof Array?a.vars.roundProps:a.vars.roundProps.split(","),c=b.length,d={},e=a._propLookup.roundProps;--c>-1;)d[b[c]]=1;for(c=b.length;--c>-1;)for(f=b[c],g=a._firstPT;g;)h=g._next,g.pg?g.t._roundProps(d,!0):g.n===f&&(this._add(g.t,f,g.s,g.c),h&&(h._prev=g._prev),g._prev?g._prev._next=h:a._firstPT===g&&(a._firstPT=h),g._next=g._prev=null,a._propLookup[f]=e),g=h;return!1},b._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(a,b){var d;if("function"!=typeof a.setAttribute)return!1;this._target=a,this._proxy={};for(d in b)this._addTween(this._proxy,d,parseFloat(a.getAttribute(d)),b[d],d),this._overwriteProps.push(d);return!0},set:function(a){this._super.setRatio.call(this,a);for(var d,b=this._overwriteProps,c=b.length;--c>-1;)d=b[c],this._target.setAttribute(d,this._proxy[d]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(a,b){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k,d=b.useRadians===!0?2*Math.PI:360;for(e in b)"useRadians"!==e&&(j=(b[e]+"").split("_"),f=j[0],k=j[1],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,"short"===k?(i%=d,i!==i%(d/2)&&(i=0>i?i+d:i-d)):"cw"===k&&0>i?i=(i+9999999999*d)%d-(0|i/d)*d:"ccw"===k&&i>0&&(i=(i-9999999999*d)%d-(0|i/d)*d),this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(a){var o,p,q,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);
return h(g,a),g},j=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},k=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},l=i("Back",k("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),k("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),k("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),m=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),n=m.prototype=new a;return n.constructor=m,n.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},m.ease=new m(.7,.7),n.config=m.config=function(a,b,c){return new m(a,b,c)},o=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),n=o.prototype=new a,n.constructor=o,n.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},n.config=o.config=function(a){return new o(a)},p=f("easing.RoughEase",function(b){b=b||{};for(var m,n,o,p,q,r,c=b.taper||"none",d=[],e=0,f=0|(b.points||20),g=f,h=b.randomize!==!1,i=b.clamp===!0,k=b.template instanceof a?b.template:null,l="number"==typeof b.strength?.4*b.strength:.4;--g>-1;)m=h?Math.random():1/f*g,n=k?k.getRatio(m):m,"none"===c?o=l:"out"===c?(p=1-m,o=p*p*l):"in"===c?o=m*m*l:.5>m?(p=2*m,o=.5*p*p*l):(p=2*(1-m),o=.5*p*p*l),h?n+=Math.random()*o-.5*o:g%2?n+=.5*o:n-=.5*o,i&&(n>1?n=1:0>n&&(n=0)),d[e++]={x:m,y:n};for(d.sort(function(a,b){return a.x-b.x}),r=new j(1,1,null),g=f;--g>-1;)q=d[g],r=new j(q.x,q.y,r);this._prev=new j(0,0,0!==r.t?r:r.next)},!0),n=p.prototype=new a,n.constructor=p,n.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&b.t>=a;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},n.config=function(a){return new p(a)},p.ease=new p,i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),q=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",q("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),q("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),q("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(p,"RoughEase","ease,"),h(o,"SteppedEase","ease,"),l},!0)}),function(a){"use strict";var f,g,h,i,j,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),e=function(){},k={},l=function(d,e,f,g){this.sc=k[d]?k[d].sc:[],k[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(i){for(var n,o,p,q,j=e.length,m=j;--j>-1;)(n=k[e[j]]||new l(e[j],[])).gsClass?(h[j]=n.gsClass,m--):i&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),j=0;this.sc.length>j;j++)this.sc[j].check()},this.check(!0)},m=a._gsDefine=function(a,b,c,d){return new l(a,b,c,d)},n=d._class=function(a,b,c){return b=b||function(){},m(a,[],function(){return b},c),b};m.globals=b;var o=[0,0,1,1],p=[],q=n("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?o.concat(b):o},!0),r=q.map={},s=q.register=function(a,b,c,e){for(var i,j,k,l,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?n("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)l=h[k],r[j+"."+l]=r[l+j]=i[l]=a.getRatio?a:a[l]||new a};for(h=q.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,s(new q(null,null,1,g),h,"easeOut",!0),s(new q(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),s(new q(null,null,3,g),h,"easeInOut");r.linear=d.easing.Linear.easeIn,r.swing=d.easing.Quad.easeInOut;var t=n("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=t.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var h,k,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),k=f.length;--k>-1;)h=f[k],h.c===b&&h.s===c?f.splice(k,1):0===g&&e>h.pr&&(g=k+1);f.splice(g,0,{c:b,s:c,up:d,pr:e}),this!==i||j||i.wake()},h.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},h.dispatchEvent=function(a){var c,d,e,b=this._listeners[a];if(b)for(c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var u=a.requestAnimationFrame,v=a.cancelAnimationFrame,w=Date.now||function(){return(new Date).getTime()};for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!u;)u=a[f[g]+"RequestAnimationFrame"],v=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];n("Ticker",function(a,b){var g,h,k,l,m,c=this,d=w(),f=b!==!1&&u,n=function(a){c.time=(w()-d)/1e3,(!g||c.time>=m||a===!0)&&(c.frame++,m=c.time+l,c.dispatchEvent("tick")),a!==!0&&(k=h(n))};t.call(c),this.time=this.frame=0,this.tick=function(){n(!0)},this.sleep=function(){null!=k&&(f&&v?v(k):clearTimeout(k),h=e,k=null,c===i&&(j=!1))},this.wake=function(){k&&c.sleep(),h=0===g?e:f&&u?u:function(a){return setTimeout(a,1e3*l)},c===i&&(j=!0),n()},this.fps=function(a){return arguments.length?(g=a,l=1/(g||60),m=this.time+l,c.wake(),void 0):g},this.useRAF=function(a){return arguments.length?(f=a,c.fps(g),void 0):f},c.fps(a),setTimeout(function(){f&&!k&&c.useRAF(!1)},1e3)}),h=d.Ticker.prototype=new d.events.EventDispatcher,h.constructor=d.Ticker;var x=n("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,K){j||i.wake();var c=this.vars.useFrames?J:K;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=x.ticker=new d.Ticker,h=x.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1,h.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(){},h.invalidate=function(){return this},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){var f,e=this.vars;if(1===arguments.length)return e[a];if(null==b)delete e[a];else if(e[a]=b,e[a+"Params"]=c,e[a+"Scope"]=d,c)for(f=c.length;--f>-1;)"{self}"===c[f]&&(c=e[a+"Params"]=c.concat(),c[f]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),!e._active)for(;e._timeline;)e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;if(a!=this._paused&&this._timeline){j||a||i.wake();var b=this._timeline.rawTime(),c=b-this._pauseTime;!a&&this._timeline.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=!a&&this._totalTime>0&&this._totalTime<this._totalDuration,a||0===c||0===this._duration||this.render(this._totalTime,!0,!0)}return this._gc&&!a&&this._enabled(!0,!1),this};var y=n("core.SimpleTimeline",function(a){x.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=y.prototype=new x,h.constructor=y,h.kill()._gc=!1,h._first=h._last=null,h._sortChildren=!1,h.add=h.insert=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=e},h.rawTime=function(){return j||i.wake(),this._totalTime};var z=n("TweenLite",function(a,b,c){if(x.call(this,b,c),null==a)throw"Cannot tween a null target.";this.target=a="string"!=typeof a?a:z.selector(a)||a;var f,g,h,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style,e=this.vars.overwrite;if(this._overwrite=e=null==e?I[z.defaultOverwrite]:"number"==typeof e?e>>0:I[e],(d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=h=d&&!a.slice?B(a):a.slice(0),this._propLookup=[],this._siblings=[],f=0;h.length>f;f++)g=h[f],g?"string"!=typeof g?"function"==typeof g.each&&g[0]&&g[0].nodeType&&g[0].style?(h.splice(f--,1),this._targets=h=h.concat(B(g))):(this._siblings[f]=L(g,this,!1),1===e&&this._siblings[f].length>1&&M(g,this,null,1,this._siblings[f])):(g=h[f--]=z.selector(g),"string"==typeof g&&h.splice(f+1,1)):h.splice(f--,1);else this._propLookup={},this._siblings=L(a,this,!1),1===e&&this._siblings.length>1&&M(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),A=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},B=function(a){var b=[];return a.each(function(){b.push(this)}),b},C=function(a,b){var d,c={};for(d in a)H[d]||d in b&&"x"!==d&&"y"!==d&&"width"!==d&&"height"!==d&&"className"!==d||!(!E[d]||E[d]&&E[d]._autoCSS)||(c[d]=a[d],delete a[d]);a.css=c};h=z.prototype=new x,h.constructor=z,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=!1,z.version="1.9.4",z.defaultEase=h._ease=new q(null,null,1,1),z.defaultOverwrite="auto",z.ticker=i,z.autoSleep=!0,z.selector=a.$||a.jQuery||function(b){return a.$?(z.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var D=z._internals={},E=z._plugins={},F=z._tweenLookup={},G=0,H=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},I={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},J=x._rootFramesTimeline=new y,K=x._rootTimeline=new y;K._startTime=i.time,J._startTime=i.frame,K._active=J._active=!0,x._updateRoot=function(){if(K.render((i.time-K._startTime)*K._timeScale,!1,!1),J.render((i.frame-J._startTime)*J._timeScale,!1,!1),!(i.frame%120)){var a,b,c;for(c in F){for(b=F[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete F[c]}if(c=K._first,(!c||c._paused)&&z.autoSleep&&!J._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",x._updateRoot);var L=function(a,b,c){var e,f,d=a._gsTweenID;if(F[d||(a._gsTweenID=d="t"+G++)]||(F[d]={target:a,tweens:[]}),b&&(e=F[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return F[d].tweens},M=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||N(b,0,m),0===N(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},N=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};h._init=function(){var e,f,g,h,a=this.vars,b=this._overwrittenProps,c=this._duration,d=a.ease;if(a.startAt){if(a.startAt.overwrite=0,a.startAt.immediateRender=!0,this._startAt=z.to(this.target,0,a.startAt),a.immediateRender&&(this._startAt=null,0===this._time&&0!==c))return}else if(a.runBackwards&&a.immediateRender&&0!==c)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){g={};for(h in a)H[h]&&"autoCSS"!==h||(g[h]=a[h]);return g.overwrite=0,this._startAt=z.to(this.target,0,g),void 0}if(this._ease=d?d instanceof q?a.easeParams instanceof Array?d.config.apply(d,a.easeParams):d:"function"==typeof d?new q(d,a.easeParams):r[d]||z.defaultEase:z.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(e=this._targets.length;--e>-1;)this._initProps(this._targets[e],this._propLookup[e]={},this._siblings[e],b?b[e]:null)&&(f=!0);else f=this._initProps(this.target,this._propLookup,this._siblings,b);if(f&&z._onPluginEvent("_onInitAllProps",this),b&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(g=this._firstPT;g;)g.s+=g.c,g.c=-g.c,g=g._next;this._onUpdate=a.onUpdate,this._initted=!0},h._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&E.css&&this.vars.autoCSS!==!1&&C(this.vars,a);for(e in this.vars){if(H[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(E[e]&&(h=new E[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&M(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},h.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!e?this.ratio=this._ease.getRatio(this._time/this._duration):e&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||this._paused||(this._active=!0),0===d&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||p))),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||p)),f&&(this._gc||(0>a&&this._startAt&&!this._onUpdate&&this._startAt.render(a,b,c),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||p)))}},h._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:z.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||A(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1);this._firstPT||this._enabled(!1,!1)}}return h},h.invalidate=function(){return this._notifyPluginsOfEnabled&&z._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var d,c=this._targets;if(c)for(d=c.length;--d>-1;)this._siblings[d]=L(c[d],this,!0);else this._siblings=L(this.target,this,!0)}return x.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?z._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},z.to=function(a,b,c){return new z(a,b,c)},z.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new z(a,b,c)},z.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new z(a,b,d)},z.delayedCall=function(a,b,c,d,e){return new z(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},z.set=function(a,b){return new z(a,0,b)},z.killTweensOf=z.killDelayedCallsTo=function(a,b){for(var c=z.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},z.getTweensOf=function(a){if(null==a)return[];a="string"!=typeof a?a:z.selector(a)||a;var b,c,d,e;if((a instanceof Array||A(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(z.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=L(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c};var O=n("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=O.prototype},!0);if(h=O.prototype,O.version="1.9.1",O.API=2,h._firstPT=null,h._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},h.setRatio=function(a){for(var d,b=this._firstPT,c=1e-6;b;)d=b.c*a+b.s,b.r?d=d+(d>0?.5:-.5)>>0:c>d&&d>-c&&(d=0),b.f?b.t[b.p](d):b.t[b.p]=d,b=b._next},h._kill=function(a){var d,b=this._overwriteProps,c=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(d=b.length;--d>-1;)null!=a[b[d]]&&b.splice(d,1);for(;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},h._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},z._onPluginEvent=function(a,b){var d,e,f,g,h,c=b._firstPT;if("_onInitAllProps"===a){for(;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},O.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===O.API&&(E[(new a[b])._propName]=a[b]);return!0},m.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var h,b=a.propName,c=a.priority||0,d=a.overwriteProps,e={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},f=n("plugins."+b.charAt(0).toUpperCase()+b.substr(1)+"Plugin",function(){O.call(this,b,c),this._overwriteProps=d||[]},a.global===!0),g=f.prototype=new O(b);g.constructor=f,f.API=a.API;for(h in e)"function"==typeof a[h]&&(g[e[h]]=a[h]);return f.version=a.version,O.activate([f]),f},f=a._gsQueue){for(g=0;f.length>g;g++)f[g]();for(h in k)k[h].func||a.console.log("GSAP encountered missing dependency: com.greensock."+h)}j=!1}(window);
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
/*!
 * VERSION: 0.1.6
 * DATE: 2013-02-13
 * JavaScript
 * UPDATES AND DOCS AT: http://www.greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin. For staggerTo(), staggerFrom(), and staggerFromTo(), it also
 * requires TimelineLite. If TweenMax or TimelineMax is loaded, they will be preferred over TweenLite and TimelineLite internally
 * so that you get the most features possible (like repeat, yoyo, repeatDelay, etc.)
 *
 * @license Copyright (c) 2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(a){"use strict";var e,f,g,b=a.fn.animate,c=a.fn.stop,d=!0,h=function(a,b){"function"==typeof a&&this.each(a),b()},i=function(a,b,c,d,e){e="function"==typeof e?e:null,b="function"==typeof b?b:null,(b||e)&&(d[a]=e?h:c.each,d[a+"Scope"]=c,d[a+"Params"]=e?[b,e]:[b])},j={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},k=function(a,b){for(var c in j)j[c]&&void 0!==a[c]&&(b[c]=a[c])},l=function(a){return function(b){return a.getRatio(b)}},m={},n=function(){var c,d,h,b=window.GreenSockGlobals||window;if(e=b.TweenMax||b.TweenLite,e&&(c=(e.version+".0.0").split("."),d=!(Number(c[0])>0&&Number(c[1])>7),b=b.com.greensock,f=b.plugins.CSSPlugin,m=b.easing.Ease.map||{}),!e||!f||d)return e=null,!g&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(d?" Version "+c.join(".")+" is too old.":"")),g=!0),void 0;if(a.easing){for(h in m)a.easing[h]=l(m[h]);n=!1}};a.fn.animate=function(c,g,h,j){if(c=c||{},n&&(n(),!e||!f))return b.call(this,c,g,h,j);if(!d||c.skipGSAP===!0||"object"==typeof g&&"function"==typeof g.step||null!=c.scrollTop||null!=c.scrollLeft)return b.call(this,c,g,h,j);var r,s,t,u,l=a.speed(g,h,j),o={ease:m[l.easing]||(l.easing===!1?m.linear:m.swing)},p=this,q="object"==typeof g?g.specialEasing:null;for(s in c){if(r=c[s],r instanceof Array&&m[r[1]]&&(q=q||{},q[s]=r[1],r=r[0]),"toggle"===r||"hide"===r||"show"===r)return b.call(this,c,g,h,j);o[-1===s.indexOf("-")?s:a.camelCase(s)]=r}if(q){u=[];for(s in q)r=u[u.length]={},k(o,r),r.ease=m[q[s]]||o.ease,-1!==s.indexOf("-")&&(s=a.camelCase(s)),r[s]=o[s];0===u.length&&(u=null)}return t=function(b){if(u)for(var c=u.length;--c>-1;)e.to(p,a.fx.off?0:l.duration/1e3,u[c]);i("onComplete",l.old,p,o,b),e.to(p,a.fx.off?0:l.duration/1e3,o)},l.queue!==!1?p.queue(l.queue,t):t(),p},a.fn.stop=function(a,b){if(c.call(this,a,b),e){if(b)for(var g,d=e.getTweensOf(this),f=d.length;--f>-1;)g=d[f].totalTime()/d[f].totalDuration(),g>0&&1>g&&d[f].seek(d[f].totalDuration());e.killTweensOf(this)}return this},a.gsap={enabled:function(a){d=a},version:"0.1.6"}})(jQuery);
/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
(function( window, undefined ) {
var
	// A central reference to the root jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,
	navigator = window.navigator,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// Save a reference to some core methods
	core_push = Array.prototype.push,
	core_slice = Array.prototype.slice,
	core_indexOf = Array.prototype.indexOf,
	core_toString = Object.prototype.toString,
	core_hasOwn = Object.prototype.hasOwnProperty,
	core_trim = String.prototype.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,

	// Used for detecting and trimming whitespace
	core_rnotwhite = /\S/,
	core_rspace = /\s+/,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// The ready event handler and self cleanup method
	DOMContentLoaded = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
			jQuery.ready();
		} else if ( document.readyState === "complete" ) {
			// we're here because readyState === "complete" in oldIE
			// which is good enough for us to call the dom ready!
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	},

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context && context.nodeType ? context.ownerDocument || context : document );

					// scripts is true for back-compat
					selector = jQuery.parseHTML( match[1], doc, true );
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						this.attr.call( selector, context, true );
					}

					return jQuery.merge( this, selector );

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.8.2",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ),
			"slice", core_slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready, 1 );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ core_toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// scripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, scripts ) {
		var parsed;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			scripts = context;
			context = 0;
		}
		context = context || document;

		// Single tag
		if ( (parsed = rsingleTag.exec( data )) ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts ? null : [] );
		return jQuery.merge( [],
			(parsed.cacheable ? jQuery.clone( parsed.fragment ) : parsed.fragment).childNodes );
	},

	parseJSON: function( data ) {
		if ( !data || typeof data !== "string") {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && core_rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var name,
			i = 0,
			length = obj.length,
			isObj = length === undefined || jQuery.isFunction( obj );

		if ( args ) {
			if ( isObj ) {
				for ( name in obj ) {
					if ( callback.apply( obj[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( obj[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in obj ) {
					if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var type,
			ret = results || [];

		if ( arr != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			type = jQuery.type( arr );

			if ( arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( arr ) ) {
				core_push.call( ret, arr );
			} else {
				jQuery.merge( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key,
			ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, pass ) {
		var exec,
			bulk = key == null,
			i = 0,
			length = elems.length;

		// Sets many values
		if ( key && typeof key === "object" ) {
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );
			}
			chainable = 1;

		// Sets one value
		} else if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = pass === undefined && jQuery.isFunction( value );

			if ( bulk ) {
				// Bulk operations only iterate when executing function values
				if ( exec ) {
					exec = fn;
					fn = function( elem, key, value ) {
						return exec.call( jQuery( elem ), value );
					};

				// Otherwise they run against the entire set
				} else {
					fn.call( elems, value );
					fn = null;
				}
			}

			if ( fn ) {
				for (; i < length; i++ ) {
					fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
				}
			}

			chainable = 1;
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready, 1 );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.split( core_rspace ), function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" && ( !options.unique || !self.has( arg ) ) ) {
								list.push( arg );
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				return jQuery.inArray( fn, list ) > -1;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ]( jQuery.isFunction( fn ) ?
								function() {
									var returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								} :
								newDefer[ action ]
							);
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ] = list.fire
			deferred[ tuple[0] ] = list.fire;
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		fragment,
		eventName,
		i,
		isSupported,
		clickFn,
		div = document.createElement("div");

	// Preliminary tests
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	a.style.cssText = "top:1px;float:left;opacity:.5";

	// Can't get basic test support
	if ( !all || !all.length ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: ( document.compatMode === "CSS1Compat" ),

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", clickFn = function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent("onclick");
		div.detachEvent( "onclick", clickFn );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	input.setAttribute( "checked", "checked" );

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "name", "t" );

	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for ( i in {
			submit: true,
			change: true,
			focusin: true
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, div, tds, marginDiv,
			divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// NOTE: To any future maintainer, we've window.getComputedStyle
		// because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. For more
			// info see bug #3333
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = document.createElement("div");
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			div.appendChild( marginDiv );
			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "block";
			div.style.overflow = "visible";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			container.style.zoom = 1;
		}

		// Null elements to avoid leaks in IE
		body.removeChild( container );
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	fragment.removeChild( div );
	all = a = select = opt = input = fragment = div = null;

	return support;
})();
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	deletedIds: [],

	// Remove at next major release (1.9/2.0)
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = jQuery.deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split(" ");
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}

		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );

		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
			delete cache[ id ];

		// When all else fails, null
		} else {
			cache[ id ] = null;
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, part, attr, name, l,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attr = elem.attributes;
					for ( l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split( ".", 2 );
		parts[1] = parts[1] ? "." + parts[1] : "";
		part = parts[1] + "!";

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				data = this.triggerHandler( "getData" + part, [ parts[0] ] );

				// Try to fetch any internally stored data first
				if ( data === undefined && elem ) {
					data = jQuery.data( elem, key );
					data = dataAttr( elem, key, data );
				}

				return data === undefined && parts[1] ?
					this.data( parts[0] ) :
					data;
			}

			parts[1] = value;
			this.each(function() {
				var self = jQuery( this );

				self.triggerHandler( "setData" + part, parts );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + part, parts );
			});
		}, null, value, arguments.length > 1, null, false );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				// Only convert to a number if it doesn't change the string
				+data + "" === data ? +data :
				rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery.removeData( elem, type + "queue", true );
				jQuery.removeData( elem, key, true );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook, fixSpecified,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea|)$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( core_rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( setClass.indexOf( " " + classNames[ c ] + " " ) < 0 ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var removes, className, elem, c, cl, i, l;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}
		if ( (value && typeof value === "string") || value === undefined ) {
			removes = ( value || "" ).split( core_rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];
				if ( elem.nodeType === 1 && elem.className ) {

					className = (" " + elem.className + " ").replace( rclass, " " );

					// loop over each item in the removal list
					for ( c = 0, cl = removes.length; c < cl; c++ ) {
						// Remove until there is nothing to remove,
						while ( className.indexOf(" " + removes[ c ] + " ") >= 0 ) {
							className = className.replace( " " + removes[ c ] + " " , " " );
						}
					}
					elem.className = value ? jQuery.trim( className ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( core_rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	// Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
	attrFn: {},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && jQuery.isFunction( jQuery.fn[ name ] ) ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, isBool,
			i = 0;

		if ( value && elem.nodeType === 1 ) {

			attrNames = value.split( core_rspace );

			for ( ; i < attrNames.length; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;
					isBool = rboolean.test( name );

					// See #9699 for explanation of this approach (setting first, then removal)
					// Do not do this for boolean attributes (see #10870)
					if ( !isBool ) {
						jQuery.attr( elem, name, "" );
					}
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( isBool && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true,
		coords: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.value = value + "" );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var t, tns, type, origType, namespaces, origCount,
			j, events, special, eventType, handleObj,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, "events", true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,
			type = event.type || event,
			namespaces = [];

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			for ( old = elem; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old === (elem.ownerDocument || document) ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,
			handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = core_slice.call( arguments ),
			run_all = !event.exclusive && !event.namespace,
			special = jQuery.event.special[ event.type ] || {},
			handlerQueue = [];

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers that should run if there are delegated events
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !(event.button && event.type === "click") ) {

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

				// Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					selMatch = {};
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];
						sel = handleObj.selector;

						if ( selMatch[ sel ] === undefined ) {
							selMatch[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( selMatch[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, matches: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
		event.metaKey = !!event.metaKey;

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8 –
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "_submit_attached" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "_submit_attached", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "_change_attached" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "_change_attached", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) { // && selector != null
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var cachedruns,
	assertGetIdNotName,
	Expr,
	getText,
	isXML,
	contains,
	compile,
	sortOrder,
	hasDuplicate,
	outermostContext,

	baseHasDuplicate = true,
	strundefined = "undefined",

	expando = ( "sizcache" + Math.random() ).replace( ".", "" ),

	Token = String,
	document = window.document,
	docElem = document.documentElement,
	dirruns = 0,
	done = 0,
	pop = [].pop,
	push = [].push,
	slice = [].slice,
	// Use a stripped-down indexOf if a native one is unavailable
	indexOf = [].indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	// Augment a function for special use by Sizzle
	markFunction = function( fn, value ) {
		fn[ expando ] = value == null || value;
		return fn;
	},

	createCache = function() {
		var cache = {},
			keys = [];

		return markFunction(function( key, value ) {
			// Only keep the most recent entries
			if ( keys.push( key ) > Expr.cacheLength ) {
				delete cache[ keys.shift() ];
			}

			return (cache[ key ] = value);
		}, cache );
	},

	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// Regex

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments not in parens/brackets,
	//   then attribute selectors and non-pseudos (denoted by :),
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

	// For matchExpr.POS and matchExpr.needsContext
	pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
		"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

	rnot = /^:not/,
	rsibling = /[\x20\t\r\n\f]*[+~]/,
	rendsWithNot = /:not\($/,

	rheader = /h\d/i,
	rinputs = /input|select|textarea|button/i,

	rbackslash = /\\(?!\\)/g,

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"POS": new RegExp( pos, "i" ),
		"CHILD": new RegExp( "^:(only|nth|first|last)-child(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|" + pos, "i" )
	},

	// Support

	// Used for testing something on an element
	assert = function( fn ) {
		var div = document.createElement("div");

		try {
			return fn( div );
		} catch (e) {
			return false;
		} finally {
			// release memory in IE
			div = null;
		}
	},

	// Check if getElementsByTagName("*") returns only elements
	assertTagNameNoComments = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	}),

	// Check if getAttribute returns normalized href attributes
	assertHrefNotNormalized = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}),

	// Check if attributes should be retrieved by attribute nodes
	assertAttributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	}),

	// Check if getElementsByClassName can be trusted
	assertUsableClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	}),

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	assertUsableName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = document.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			document.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			document.getElementsByName( expando + 0 ).length;
		assertGetIdNotName = !document.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

// If slice is not available, provide a backup
try {
	slice.call( docElem.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		for ( ; (elem = this[i]); i++ ) {
			results.push( elem );
		}
		return results;
	};
}

function Sizzle( selector, context, results, seed ) {
	results = results || [];
	context = context || document;
	var match, elem, xml, m,
		nodeType = context.nodeType;

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( nodeType !== 1 && nodeType !== 9 ) {
		return [];
	}

	xml = isXML( context );

	if ( !xml && !seed ) {
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && assertUsableClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed, xml );
}

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	return Sizzle( expr, null, null, [ elem ] ).length > 0;
};

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (see #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	} else {

		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	}
	return ret;
};

isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Element contains another
contains = Sizzle.contains = docElem.contains ?
	function( a, b ) {
		var adown = a.nodeType === 9 ? a.documentElement : a,
			bup = b && b.parentNode;
		return a === bup || !!( bup && bup.nodeType === 1 && adown.contains && adown.contains(bup) );
	} :
	docElem.compareDocumentPosition ?
	function( a, b ) {
		return b && !!( a.compareDocumentPosition( b ) & 16 );
	} :
	function( a, b ) {
		while ( (b = b.parentNode) ) {
			if ( b === a ) {
				return true;
			}
		}
		return false;
	};

Sizzle.attr = function( elem, name ) {
	var val,
		xml = isXML( elem );

	if ( !xml ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( xml || assertAttributes ) {
		return elem.getAttribute( name );
	}
	val = elem.getAttributeNode( name );
	return val ?
		typeof elem[ name ] === "boolean" ?
			elem[ name ] ? name : null :
			val.specified ? val.value : null :
		null;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	// IE6/7 return a modified href
	attrHandle: assertHrefNotNormalized ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		},

	find: {
		"ID": assertGetIdNotName ?
			function( id, context, xml ) {
				if ( typeof context.getElementById !== strundefined && !xml ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [m] : [];
				}
			} :
			function( id, context, xml ) {
				if ( typeof context.getElementById !== strundefined && !xml ) {
					var m = context.getElementById( id );

					return m ?
						m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
							[m] :
							undefined :
						[];
				}
			},

		"TAG": assertTagNameNoComments ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== strundefined ) {
					return context.getElementsByTagName( tag );
				}
			} :
			function( tag, context ) {
				var results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					var elem,
						tmp = [],
						i = 0;

					for ( ; (elem = results[i]); i++ ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			},

		"NAME": assertUsableName && function( tag, context ) {
			if ( typeof context.getElementsByName !== strundefined ) {
				return context.getElementsByName( name );
			}
		},

		"CLASS": assertUsableClassName && function( className, context, xml ) {
			if ( typeof context.getElementsByClassName !== strundefined && !xml ) {
				return context.getElementsByClassName( className );
			}
		}
	},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( rbackslash, "" );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( rbackslash, "" );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				3 xn-component of xn+y argument ([+-]?\d*n|)
				4 sign of xn-component
				5 x of xn-component
				6 sign of y-component
				7 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1] === "nth" ) {
				// nth-child requires argument
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[3] = +( match[3] ? match[4] + (match[5] || 1) : 2 * ( match[2] === "even" || match[2] === "odd" ) );
				match[4] = +( ( match[6] + match[7] ) || match[2] === "odd" );

			// other types prohibit arguments
			} else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var unquoted, excess;
			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			if ( match[3] ) {
				match[2] = match[3];
			} else if ( (unquoted = match[4]) ) {
				// Only check arguments that contain a pseudo
				if ( rpseudo.test(unquoted) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					unquoted = unquoted.slice( 0, excess );
					match[0] = match[0].slice( 0, excess );
				}
				match[2] = unquoted;
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {
		"ID": assertGetIdNotName ?
			function( id ) {
				id = id.replace( rbackslash, "" );
				return function( elem ) {
					return elem.getAttribute("id") === id;
				};
			} :
			function( id ) {
				id = id.replace( rbackslash, "" );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
					return node && node.value === id;
				};
			},

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}
			nodeName = nodeName.replace( rbackslash, "" ).toLowerCase();

			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ expando ][ className ];
			if ( !pattern ) {
				pattern = classCache( className, new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)") );
			}
			return function( elem ) {
				return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
			};
		},

		"ATTR": function( name, operator, check ) {
			return function( elem, context ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.substr( result.length - check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, argument, first, last ) {

			if ( type === "nth" ) {
				return function( elem ) {
					var node, diff,
						parent = elem.parentNode;

					if ( first === 1 && last === 0 ) {
						return true;
					}

					if ( parent ) {
						diff = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								diff++;
								if ( elem === node ) {
									break;
								}
							}
						}
					}

					// Incorporate the offset (or cast to NaN), then check against cycle size
					diff -= last;
					return diff === first || ( diff % first === 0 && diff / first >= 0 );
				};
			}

			return function( elem ) {
				var node = elem;

				switch ( type ) {
					case "only":
					case "first":
						while ( (node = node.previousSibling) ) {
							if ( node.nodeType === 1 ) {
								return false;
							}
						}

						if ( type === "first" ) {
							return true;
						}

						node = elem;

						/* falls through */
					case "last":
						while ( (node = node.nextSibling) ) {
							if ( node.nodeType === 1 ) {
								return false;
							}
						}

						return true;
				}
			};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			var nodeType;
			elem = elem.firstChild;
			while ( elem ) {
				if ( elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4 ) {
					return false;
				}
				elem = elem.nextSibling;
			}
			return true;
		},

		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"text": function( elem ) {
			var type, attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				(type = elem.type) === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type );
		},

		// Input types
		"radio": createInputPseudo("radio"),
		"checkbox": createInputPseudo("checkbox"),
		"file": createInputPseudo("file"),
		"password": createInputPseudo("password"),
		"image": createInputPseudo("image"),

		"submit": createButtonPseudo("submit"),
		"reset": createButtonPseudo("reset"),

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"focus": function( elem ) {
			var doc = elem.ownerDocument;
			return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href);
		},

		"active": function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		},

		// Positional types
		"first": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = 0; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = 1; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			for ( var i = argument < 0 ? argument + length : argument; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

function siblingCheck( a, b, ret ) {
	if ( a === b ) {
		return ret;
	}

	var cur = a.nextSibling;

	while ( cur ) {
		if ( cur === b ) {
			return -1;
		}

		cur = cur.nextSibling;
	}

	return 1;
}

sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		return ( !a.compareDocumentPosition || !b.compareDocumentPosition ?
			a.compareDocumentPosition :
			a.compareDocumentPosition(b) & 4
		) ? -1 : 1;
	} :
	function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
[0, 0].sort( sortOrder );
baseHasDuplicate = !hasDuplicate;

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		i = 1;

	hasDuplicate = baseHasDuplicate;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				results.splice( i--, 1 );
			}
		}
	}

	return results;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type, soFar, groups, preFilters,
		cached = tokenCache[ expando ][ selector ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				soFar = soFar.slice( match[0].length );
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			tokens.push( matched = new Token( match.shift() ) );
			soFar = soFar.slice( matched.length );

			// Cast descendant combinators to space
			matched.type = match[0].replace( rtrim, " " );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				// The last two arguments here are (context, xml) for backCompat
				(match = preFilters[ type ]( match, document, true ))) ) {

				tokens.push( matched = new Token( match.shift() ) );
				soFar = soFar.slice( matched.length );
				matched.type = type;
				matched.matches = match;
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && combinator.dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( checkNonElements || elem.nodeType === 1  ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( !xml ) {
				var cache,
					dirkey = dirruns + " " + doneName + " ",
					cachedkey = dirkey + cachedruns;
				while ( (elem = elem[ dir ]) ) {
					if ( checkNonElements || elem.nodeType === 1 ) {
						if ( (cache = elem[ expando ]) === cachedkey ) {
							return elem.sizset;
						} else if ( typeof cache === "string" && cache.indexOf(dirkey) === 0 ) {
							if ( elem.sizset ) {
								return elem;
							}
						} else {
							elem[ expando ] = cachedkey;
							if ( matcher( elem, context, xml ) ) {
								elem.sizset = true;
								return elem;
							}
							elem.sizset = false;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( checkNonElements || elem.nodeType === 1 ) {
						if ( matcher( elem, context, xml ) ) {
							return elem;
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		// Positional selectors apply to seed elements, so it is invalid to follow them with relative ones
		if ( seed && postFinder ) {
			return;
		}

		var i, elem, postFilterIn,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [], seed ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			postFilterIn = condense( matcherOut, postMap );
			postFilter( postFilterIn, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = postFilterIn.length;
			while ( i-- ) {
				if ( (elem = postFilterIn[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		// Keep seed and results synchronized
		if ( seed ) {
			// Ignore postFinder because it can't coexist with seed
			i = preFilter && matcherOut.length;
			while ( i-- ) {
				if ( (elem = matcherOut[i]) ) {
					seed[ preMap[i] ] = !(results[ preMap[i] ] = elem);
				}
			}
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			// The concatenated values are (context, xml) for backCompat
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && tokens.slice( 0, i - 1 ).join("").replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && tokens.join("")
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Nested matchers should use non-integer dirruns
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = superMatcher.el;
			}

			// Add elements passing elementMatchers directly to results
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++superMatcher.el;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				for ( j = 0; (matcher = setMatchers[j]); j++ ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	superMatcher.el = 0;
	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ expando ][ selector ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results, seed ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results, seed );
	}
	return results;
}

function select( selector, context, results, seed, xml ) {
	var i, tokens, token, type, find,
		match = tokenize( selector ),
		j = match.length;

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !xml &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( rbackslash, "" ), context, xml )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().length );
			}

			// Fetch a seed set for right-to-left matching
			for ( i = matchExpr["POS"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( rbackslash, "" ),
						rsibling.test( tokens[0].type ) && context.parentNode || context,
						xml
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && tokens.join("");
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		xml,
		results,
		rsibling.test( selector )
	);
	return results;
}

if ( document.querySelectorAll ) {
	(function() {
		var disconnectedMatch,
			oldSelect = select,
			rescape = /'|\\/g,
			rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

			// qSa(:focus) reports false when true (Chrome 21),
			// A support test would require too much code (would include document ready)
			rbuggyQSA = [":focus"],

			// matchesSelector(:focus) reports false when true (Chrome 21),
			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			// A support test would require too much code (would include document ready)
			// just skip matchesSelector for :active
			rbuggyMatches = [ ":active", ":focus" ],
			matches = docElem.matchesSelector ||
				docElem.mozMatchesSelector ||
				docElem.webkitMatchesSelector ||
				docElem.oMatchesSelector ||
				docElem.msMatchesSelector;

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here (do not put tests after this one)
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE9 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<p test=''></p>";
			if ( div.querySelectorAll("[test^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here (do not put tests after this one)
			div.innerHTML = "<input type='hidden'/>";
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push(":enabled", ":disabled");
			}
		});

		// rbuggyQSA always contains :focus, so no need for a length check
		rbuggyQSA = /* rbuggyQSA.length && */ new RegExp( rbuggyQSA.join("|") );

		select = function( selector, context, results, seed, xml ) {
			// Only use querySelectorAll when not filtering,
			// when this is not xml,
			// and when no QSA bugs apply
			if ( !seed && !xml && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				var groups, i,
					old = true,
					nid = expando,
					newContext = context,
					newSelector = context.nodeType === 9 && selector;

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );

					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";

					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + groups[i].join("");
					}
					newContext = rsibling.test( selector ) && context.parentNode || context;
					newSelector = groups.join(",");
				}

				if ( newSelector ) {
					try {
						push.apply( results, slice.call( newContext.querySelectorAll(
							newSelector
						), 0 ) );
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}

			return oldSelect( selector, context, results, seed, xml );
		};

		if ( matches ) {
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				try {
					matches.call( div, "[test!='']:sizzle" );
					rbuggyMatches.push( "!=", pseudos );
				} catch ( e ) {}
			});

			// rbuggyMatches always contains :active and :focus, so no need for a length check
			rbuggyMatches = /* rbuggyMatches.length && */ new RegExp( rbuggyMatches.join("|") );

			Sizzle.matchesSelector = function( elem, expr ) {
				// Make sure that attribute selectors are quoted
				expr = expr.replace( rattributeQuotes, "='$1']" );

				// rbuggyMatches always contains :active, so no need for an existence check
				if ( !isXML( elem ) && !rbuggyMatches.test( expr ) && (!rbuggyQSA || !rbuggyQSA.test( expr )) ) {
					try {
						var ret = matches.call( elem, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9
								elem.document && elem.document.nodeType !== 11 ) {
							return ret;
						}
					} catch(e) {}
				}

				return Sizzle( expr, null, null, [ elem ] ).length > 0;
			};
		}
	})();
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Back-compat
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, l, length, n, r, ret,
			self = this;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		ret = this.pushStack( "", "find", selector );

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, core_slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rcheckableType = /^(?:checkbox|radio)$/,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "X<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( !isDisconnected( this[0] ) ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		}

		if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			return this.pushStack( jQuery.merge( set, this ), "before", this.selector );
		}
	},

	after: function() {
		if ( !isDisconnected( this[0] ) ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		}

		if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			return this.pushStack( jQuery.merge( this, set ), "after", this.selector );
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( elem.getElementsByTagName( "*" ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		if ( !isDisconnected( this[0] ) ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		}

		return this.length ?
			this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
			this;
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = [].concat.apply( [], args );

		var results, first, fragment, iNoClone,
			i = 0,
			value = args[0],
			scripts = [],
			l = this.length;

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call( this, i, table ? self.html() : undefined );
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			results = jQuery.buildFragment( args, this, scripts );
			fragment = results.fragment;
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				// Fragments from the fragment cache must always be cloned and never used in place.
				for ( iNoClone = results.cacheable || l - 1; i < l; i++ ) {
					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						i === iNoClone ?
							fragment :
							jQuery.clone( fragment, true, true )
					);
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;

			if ( scripts.length ) {
				jQuery.each( scripts, function( i, elem ) {
					if ( elem.src ) {
						if ( jQuery.ajax ) {
							jQuery.ajax({
								url: elem.src,
								type: "GET",
								dataType: "script",
								async: false,
								global: false,
								"throws": true
							});
						} else {
							jQuery.error("no ajax");
						}
					} else {
						jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "" ) );
					}

					if ( elem.parentNode ) {
						elem.parentNode.removeChild( elem );
					}
				});
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	if ( nodeName === "object" ) {
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML)) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;

	// IE blanks contents when cloning scripts
	} else if ( nodeName === "script" && dest.text !== src.text ) {
		dest.text = src.text;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, context, scripts ) {
	var fragment, cacheable, cachehit,
		first = args[ 0 ];

	// Set context from what may come in as undefined or a jQuery collection or a node
	// Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
	// also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
	context = context || document;
	context = !context.nodeType && context[0] || context;
	context = context.ownerDocument || context;

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		// Mark cacheable and look for a hit
		cacheable = true;
		fragment = jQuery.fragments[ first ];
		cachehit = fragment !== undefined;
	}

	if ( !fragment ) {
		fragment = context.createDocumentFragment();
		jQuery.clean( args, context, fragment, scripts );

		// Update the cache, but only store false
		// unless this is a second parsing of the same content
		if ( cacheable ) {
			jQuery.fragments[ first ] = cachehit && fragment;
		}
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			l = insert.length,
			parent = this.length === 1 && this[0].parentNode;

		if ( (parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1 ) {
			insert[ original ]( this[0] );
			return this;
		} else {
			for ( ; i < l; i++ ) {
				elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			clone;

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
			safe = context === document && safeFragment,
			ret = [];

		// Ensure that context is a document
		if ( !context || typeof context.createDocumentFragment === "undefined" ) {
			context = document;
		}

		// Use the already-created safe fragment if context permits
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Ensure a safe container in which to render the html
					safe = safe || createSafeFragment( context );
					div = context.createElement("div");
					safe.appendChild( div );

					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Go to html and back, then peel off extra wrappers
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					depth = wrap[0];
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						hasBody = rtbody.test(elem);
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;

					// Take out of fragment container (we need a fresh div each time)
					div.parentNode.removeChild( div );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				jQuery.merge( ret, elem );
			}
		}

		// Fix #11356: Clear elements from safeFragment
		if ( div ) {
			elem = div = safe = null;
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
					fixDefaultChecked( elem );
				} else if ( typeof elem.getElementsByTagName !== "undefined" ) {
					jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
				}
			}
		}

		// Append elements to a provided document fragment
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var data, id, elem, type,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( elem.removeAttribute ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						jQuery.deletedIds.push( id );
					}
				}
			}
		}
	}
});
// Limit scope pollution from any deprecated API
(function() {

var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
	browser[ matched.browser ] = true;
	browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
	browser.webkit = true;
} else if ( browser.webkit ) {
	browser.safari = true;
}

jQuery.browser = browser;

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	return jQuerySub;
};

})();
var curCSS, iframe, iframeDoc,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([-+])=(" + core_pnum + ")", "i" ),
	elemdisplay = {},

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],

	eventsToggle = jQuery.fn.toggle;

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var elem, display,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		values[ index ] = jQuery._data( elem, "olddisplay" );
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && elem.style.display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {
			display = curCSS( elem, "display" );

			if ( !values[ index ] && display !== "none" ) {
				jQuery._data( elem, "olddisplay", display );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state, fn2 ) {
		var bool = typeof state === "boolean";

		if ( jQuery.isFunction( state ) && jQuery.isFunction( fn2 ) ) {
			return eventsToggle.apply( this, arguments );
		}

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;

				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, numeric, extra ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( numeric || extra !== undefined ) {
			num = parseFloat( val );
			return numeric || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: To any future maintainer, we've window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	curCSS = function( elem, name ) {
		var ret, width, minWidth, maxWidth,
			computed = window.getComputedStyle( elem, null ),
			style = elem.style;

		if ( computed ) {

			ret = computed[ name ];
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	curCSS = function( elem, name ) {
		var left, rsLeft,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			// we use jQuery.css instead of curCSS here
			// because of the reliableMarginRight CSS hook!
			val += jQuery.css( elem, extra + cssExpand[ i ], true );
		}

		// From this point on we use curCSS for maximum performance (relevant in animations)
		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		valueIsBorderBox = true,
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox
		)
	) + "px";
}


// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	if ( elemdisplay[ nodeName ] ) {
		return elemdisplay[ nodeName ];
	}

	var elem = jQuery( "<" + nodeName + ">" ).appendTo( document.body ),
		display = elem.css("display");
	elem.remove();

	// If the simple way fails,
	// get element's real default display by attaching it to a temp iframe
	if ( display === "none" || display === "" ) {
		// Use the already-created iframe if possible
		iframe = document.body.appendChild(
			iframe || jQuery.extend( document.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			})
		);

		// Create a cacheable copy of the iframe document on first call.
		// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
		// document to it; WebKit & Firefox won't allow reusing the iframe document.
		if ( !iframeDoc || !iframe.createElement ) {
			iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
			iframeDoc.write("<!doctype html><html><body>");
			iframeDoc.close();
		}

		elem = iframeDoc.body.appendChild( iframeDoc.createElement(nodeName) );

		display = curCSS( elem, "display" );
		document.body.removeChild( iframe );
	}

	// Store the correct default display
	elemdisplay[ nodeName ] = display;

	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				if ( elem.offsetWidth === 0 && rdisplayswap.test( curCSS( elem, "display" ) ) ) {
					return jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					});
				} else {
					return getWidthOrHeight( elem, name, extra );
				}
			}
		},

		set: function( elem, value, extra ) {
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box"
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
				style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						return curCSS( elem, "marginRight" );
					}
				});
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						var ret = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( ret ) ? jQuery( elem ).position()[ prop ] + "px" : ret;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i,

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ],
				expanded = {};

			for ( i = 0; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	rselectTextarea = /^(?:select|textarea)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType, list, placeBefore,
			dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),
			i = 0,
			length = dataTypes.length;

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var selection,
		list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters );

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	// Don't do a request if no elements are being requested
	if ( !this.length ) {
		return this;
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// Request the remote document
	jQuery.ajax({
		url: url,

		// if "type" variable is undefined, then "GET" method will be used
		type: type,
		dataType: "html",
		data: params,
		complete: function( jqXHR, status ) {
			if ( callback ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			}
		}
	}).done(function( responseText ) {

		// Save response for use in complete callback
		response = arguments;

		// See if a selector was specified
		self.html( selector ?

			// Create a dummy div to hold the results
			jQuery("<div>")

				// inject the contents of the document in, removing the scripts
				// to avoid any 'Permission Denied' errors in IE
				.append( responseText.replace( rscript, "" ) )

				// Locate the specified elements
				.find( selector ) :

			// If not, just inject the full result
			responseText );

	});

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // ifModified key
			ifModifiedKey,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || strAbort;
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ ifModifiedKey ] = modified;
					}
					modified = jqXHR.getResponseHeader("Etag");
					if ( modified ) {
						jQuery.etag[ ifModifiedKey ] = modified;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.always( tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() ) || false;
			s.crossDomain = parts && ( parts.join(":") + ( parts[ 3 ] ? "" : parts[ 1 ] === "http:" ? 80 : 443 ) ) !==
				( ajaxLocParts.join(":") + ( ajaxLocParts[ 3 ] ? "" : ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) );
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();

		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	var conv, conv2, current, tmp,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ],
		converters = {},
		i = 0;

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
var oldCallbacks = [],
	rquestion = /\?/,
	rjsonp = /(=)\?(?=&|$)|\?\?/,
	nonce = jQuery.now();

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		data = s.data,
		url = s.url,
		hasCallback = s.jsonp !== false,
		replaceInUrl = hasCallback && rjsonp.test( url ),
		replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&
			!( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&
			rjsonp.test( data );

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;
		overwritten = window[ callbackName ];

		// Insert callback into url or form data
		if ( replaceInUrl ) {
			s.url = url.replace( rjsonp, "$1" + callbackName );
		} else if ( replaceInData ) {
			s.data = data.replace( rjsonp, "$1" + callbackName );
		} else if ( hasCallback ) {
			s.url += ( rquestion.test( url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});
var xhrCallbacks,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									try {
										responses.text = xhr.responseText;
									} catch( _ ) {
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback, 0 );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	}, 0 );
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		index = 0,
		tweenerIndex = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				percent = 1 - ( remaining / animation.duration || 0 ),
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end, easing ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			anim: animation,
			queue: animation.opts.queue,
			elem: elem
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	var index, prop, value, length, dataShow, tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.done(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery.removeData( elem, "fxshow", true );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing any value as a 4th parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, false, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ||
			// special check for .toggle( handler, handler, ... )
			( !i && jQuery.isFunction( speed ) && jQuery.isFunction( easing ) ) ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations resolve immediately
				if ( empty ) {
					anim.stop( true );
				}
			};

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) && !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.interval = 13;

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
var rroot = /^(?:body|html)$/i;

jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	if ( (body = doc.body) === elem ) {
		return jQuery.offset.bodyOffset( elem );
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== "undefined" ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	clientTop  = docElem.clientTop  || body.clientTop  || 0;
	clientLeft = docElem.clientLeft || body.clientLeft || 0;
	scrollTop  = win.pageYOffset || docElem.scrollTop;
	scrollLeft = win.pageXOffset || docElem.scrollLeft;
	return {
		top: box.top  + scrollTop  - clientTop,
		left: box.left + scrollLeft - clientLeft
	};
};

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.body;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					 top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, value, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

})( window );
// App Start
(function(){

///////////////////////////////////////////////////////////////////////////
//
// Define Classes ...
//
///////////////////////////////////////////////////////////////////////////

window.App = {
	Models: {},
	Views: {},
	Collections: {},
	Helpers: {}
};

App.Helpers.templte = function( id ) {
	return _.template( $('#'+ id).html() );
}

App.Models.Person = Backbone.Model.extend( {

	defaults: {
		name: 'Somebody',
		age: 0,
		occupation: 'free',
		edit: false
	},

	validate: function(attrs) {
		if( attrs.name === undefined || !$.trim(attrs.name) ) {
			return 'Every peron must have a name.';
		}
	},

	initialize: function() {
		this.on('invalid', function(model, error){
			console.log(error);
		});
	}

});

App.Collections.Person = Backbone.Collection.extend({
	model: App.Models.Person,
});

App.Views.Person = Backbone.View.extend({

	tagName: 'li',

	id: 'person-',

	//template: _.template('<%= name %> (<%= age %>)'),
	template: 'personTemplate',
	edit_template: 'edit-personTemplate',

	events: {

		// edit when double click
		'dblclick': 'doEditable',
		// change when unfocus on view
		'blur': 'noEditable',
		// change when clicking the update button
		'click .update': 'noEditable',
		// remove model
		'click .delete': 'onRemove'

	},


	initialize: function() {
		//console.log( this );
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.onModelDestory, this)
		this.$el.attr('id', this.id + this.model.cid );
		this.render();
	},

	render: function() {
		//this.$el.html( this.template( this.model.toJSON() ) );
		//var template = App.Helpers.templte(this.template);
		if ( this.model.get('edit') ) {
			this.$el.html( App.Helpers.templte(this.edit_template)( this.model.toJSON() ) );
		}else{
			this.$el.html( App.Helpers.templte(this.template)( this.model.toJSON() ) );
		}
		// console.log('Person View render.');
		return this;
	},

	showAlert: function() {
		alert( this.model.get('name') );
	},

	doEditable: function() {
		//this.$el.attr('contenteditable', true);
		this.model.set('edit',true);
	},

	noEditable: function() {
		//console.log(this.$el);

		// console.log( this.$el.find('.name').val() );
		// this.model.set('name', this.$el.find('.name').val() );
		// this.model.set('age', this.$el.find('.age').val() );
		// this.model.set('edit',false);

		var msg = this.model.set({

			name: $.trim( this.$el.find('.name').val() ),
			age: $.trim( this.$el.find('.age').val() ),
			edit: false

		});

		console.log( msg );

		//this.$el.attr('contenteditable', false);
	},

	onModelDestory: function() {
		this.remove();
	},

	onRemove: function() {
		// model destroy
		this.model.destroy();
	}

});

App.Views.People = Backbone.View.extend({

	tagName: 'ul',

	target: '#peopleView',

	initialize: function() {
		// 
		this.collection.on('add', this.addOne, this);
		this.render();
	},

	render: function() {

		// console.log( this.collection );

		this.$el.html('');

		// each function 帶入第二個參數將改變 this 的指向
		// 預設 this 為 global window object
		this.collection.each( this.addOne, this);

		//$(this.target).html()
		//$(this.target).html( this.el );

		return this;

	},

	addOne: function( person ) {
		// console.log( person instanceof Backbone.Model  );
		this.$el.append( new App.Views.Person({ model: person }).el );
	}

});

App.Views.AddPerson = Backbone.View.extend({

	el: '#tool-panel',

	events: {
		'click #addPeople': 'addPerson'
	},

	addPerson: function() {
		this.collection.add( new App.Models.Person({ 
			name: $.trim( this.$el.find('#name').val() ),
			age: $.trim( this.$el.find('#age').val() )
		}) );

		this.$el.find('#name').val('');
		this.$el.find('#age').val('');
		// console.log( this.collection );
	}

});

var customEvent = _.extend({}, Backbone.Events);

App.Views.CustomEvent = Backbone.View.extend({
	el: '#customEvent',
	isRunning: true,
	// actionStart: 'Start Binding',
	// actionStop: 'Stop Binding',

	events: {
		'click .action': 'doAction'
	},

	initialize: function() {
		// console.log( customEvent );
		customEvent.bind("start", this.startBinding, this);
		customEvent.bind("stop", this.stopBinding, this);
		this.render();
	},
	render: function() {
		//var template = _.template( this.$el.html() );
		this.checkStatus();
		return this;
	},
	doAction: function() {
		this.isRunning = !this.isRunning;
		this.render();
	},
	checkStatus: function() {
		// console.log( this.isRunning );
		if ( this.isRunning ) {
			// if customEvent binding is running
			customEvent.trigger("start");
		}else{
			customEvent.trigger("stop");
		}
	},
	startBinding: function() {
		// console.log('start binding...');
		this.$el.find('button.action').html('Stop Binding');
		this.$el.find('span.status').html('is binding... now');
		// this.isRunning = true;
	},
	stopBinding: function() {
		// console.log('stop binding...');
		this.$el.find('button.action').html('Start Binding');
		this.$el.find('span.status').html('not bind yet.');
		// this.isRunning = false;
	}
});

new App.Views.CustomEvent;


///////////////////////////////////////////////////////////////////////////
// 
///////////////////////////////////////////////////////////////////////////



})();
// App End

var person = new App.Models.Person( {
	name: 'Starck Lin',
	age: 30
} );

var person2 = new App.Models.Person({
	name: 'Jessie Wang',
	age: 30
});

var personView = new App.Views.Person({ model: person });
//var personView2 = new App.Views.Person({ model: new App.Models.Person({ name: 'Jessie Wang', age: 30 }) });

var personCol = new App.Collections.Person([
	person,
	person2,
	{
		name: 'Test',
		age: 27
	},
	{
		name: 'Test2',
		age: 33
	}
]);

var viewCol = new Backbone.Collection();

var peopleView = new App.Views.People({ collection: personCol });

$('#peopleList').append( peopleView.el );

var addPersonView = new App.Views.AddPerson({ collection: personCol });
// $('#tool-panel').append( new App.Views.AddPerson({ collection: personCol }).el )

// $(document.body).append( personView.el );
// $(document.body).append( personView2.el );

// personCol.each( function( modelData ) {
// 	// console.log(modelData);
// 	//var view = new PersonView( { model: modelData } );
// 	var modelView = new App.Views.Person({ model: modelData });
// 	//viewCol.add( new PersonView({ model: modelData }) );
// 	viewCol.add({ model: modelData, view: modelView});

// 	//$(document.body).append( view.el );

// });

// // console.log( viewCol );

// viewCol.each( function(data){
// 	$(document.body).append( data.get('view').el );
// });


//

var oriHeight = $('#ani-target').css('height');

$('button#slide').click(function(){

	// if($('#ani-target').is(':hidden')) {
	// 	$('#ani-target').slideDown(1000);
	// }else{
	// 	$('#ani-target').slideUp(600);
	// }
	// console.log( $('#ani-target').animate );
	console.log(oriHeight);
	var target = $('#ani-target');
	// target.css('position','relative');
	// target.css('overflow','hidden');

	// if ( parseInt(target.css('height'),10) >= parseInt(oriHeight,10) ) {
	// 	target.animate({height:'0px'}, 500);
	// }else{
	// 	target.animate( { height: oriHeight }, 500);
	// }

	// TweenLite()
	if ( target.hasClass('close') ) {
		TweenLite.to( target, .2, {
			className:"-=close",
			top: 0,
			height: '16px'
		});
		// TweenLite.to( target, .2, {className:"-=mtop10"} );
	}else{
		// TweenLite.to( target, .2, {className:"+=close"} );
		// TweenLite.to( target, .2, {className:"+=mtop10"} );
		TweenLite.to( target, .2, {
			className:"+=close",
			top: '-10px',
			height: '0px'
		});
	}

	// if ( target.hasClass('mtop10') ) {
		
	// }else{
		
	// }
	


});








//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.4.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return arguments.length > 2 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (_.isFunction(method) ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // with specific `key:value` pairs.
  _.where = function(obj, attrs) {
    if (_.isEmpty(attrs)) return [];
    return _.filter(obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (obj.length === +obj.length) return slice.call(obj);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) {
          result = func.apply(context, args);
        }
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        throttling = true;
        result = func.apply(context, args);
      }
      whenDone();
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return _.isNumber(obj) && isFinite(obj);
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + (0 | Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });
      source +=
        escape ? "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" :
        interpolate ? "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" :
        evaluate ? "';\n" + evaluate + "\n__p+='" : '';
      index = offset + match.length;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);