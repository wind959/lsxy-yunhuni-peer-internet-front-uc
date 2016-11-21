var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e){return Array.prototype.map.call(e.childNodes,function(e){return 3==e.nodeType?N.useBR?e.nodeValue.replace(/\n/g,""):e.nodeValue:"br"==t(e)?"\n":n(e)}).join("")}function a(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^language-/,"")}),t.filter(function(e){return v(e)||"no-highlight"==e})[0]}function i(e,t){var r={};for(var n in e)r[n]=e[n];if(t)for(var n in t)r[n]=t[n];return r}function c(e){var r=[];return function n(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:"br"==t(i)?a+=1:1==i.nodeType&&(r.push({event:"start",offset:a,node:i}),a=n(i,a),r.push({event:"stop",offset:a,node:i}));return a}(e,0),r}function s(r,n,a){function i(){return r.length&&n.length?r[0].offset!=n[0].offset?r[0].offset<n[0].offset?r:n:"start"==n[0].event?r:n:r.length?r:n}function c(r){function n(t){return" "+t.nodeName+'="'+e(t.value)+'"'}l+="<"+t(r)+Array.prototype.map.call(r.attributes,n).join("")+">"}function s(e){l+="</"+t(e)+">"}function o(e){("start"==e.event?c:s)(e.node)}for(var u=0,l="",f=[];r.length||n.length;){var h=i();if(l+=e(a.substr(u,h[0].offset-u)),u=h[0].offset,h==r){f.reverse().forEach(s);do o(h.splice(0,1)[0]),h=i();while(h==r&&h.length&&h[0].offset==u);f.reverse().forEach(c)}else"start"==h[0].event?f.push(h[0].node):f.pop(),o(h.splice(0,1)[0])}return l+e(a.substr(u))}function o(e){function t(e){return e&&e.source||e}function r(r,n){return RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(a,c){function s(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");o[r[0]]=[t,r[1]?Number(r[1]):1]})}if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={};"string"==typeof a.k?s("keyword",a.k):Object.keys(a.k).forEach(function(e){s(e,a.k[e])}),a.k=o}a.lR=r(a.l||/\b[A-Za-z0-9_]+\b/,!0),c&&(a.bK&&(a.b=a.bK.split(" ").join("|")),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=t(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=r(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(i(e,t))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,c);var l=a.c.map(function(e){return e.bK?"\\.?\\b("+e.b+")\\b\\.?":e.b}).concat([a.tE]).concat([a.i]).map(t).filter(Boolean);a.t=l.length?r(l.join("|"),!0):{exec:function(e){return null}},a.continuation={}}}n(e)}function u(t,n,a,i){function c(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function s(e,t){return r(e.eR,t)?e:e.eW?s(e.parent,t):void 0}function f(e,t){return!a&&r(t.iR,e)}function h(e,t){var r=R.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function b(e,t,r,n){var a=n?"":N.classPrefix,i='<span class="'+a,c=r?"":"</span>";return i+=e+'">',i+t+c}function g(){var t=e(M);if(!w.k)return t;var r="",n=0;w.lR.lastIndex=0;for(var a=w.lR.exec(t);a;){r+=t.substr(n,a.index-n);var i=h(w,a);i?(x+=i[1],r+=b(i[0],a[0])):r+=a[0],n=w.lR.lastIndex,a=w.lR.exec(t)}return r+t.substr(n)}function p(){if(w.sL&&!E[w.sL])return e(M);var t=w.sL?u(w.sL,M,!0,w.continuation.top):l(M);return w.r>0&&(x+=t.r),"continuous"==w.subLanguageMode&&(w.continuation.top=t.top),b(t.language,t.value,!1,!0)}function d(){return void 0!==w.sL?p():g()}function m(t,r){var n=t.cN?b(t.cN,"",!0):"";t.rB?(L+=n,M=""):t.eB?(L+=e(r)+n,M=""):(L+=n,M=r),w=Object.create(t,{parent:{value:w}})}function y(t,r){if(M+=t,void 0===r)return L+=d(),0;var n=c(r,w);if(n)return L+=d(),m(n,r),n.rB?0:r.length;var a=s(w,r);if(a){var i=w;i.rE||i.eE||(M+=r),L+=d();do w.cN&&(L+="</span>"),x+=w.r,w=w.parent;while(w!=a.parent);return i.eE&&(L+=e(r)),M="",a.starts&&m(a.starts,""),i.rE?0:r.length}if(f(r,w))throw new Error('Illegal lexeme "'+r+'" for mode "'+(w.cN||"<unnamed>")+'"');return M+=r,r.length||1}var R=v(t);if(!R)throw new Error('Unknown language: "'+t+'"');o(R);for(var w=i||R,L="",C=w;C!=R;C=C.parent)C.cN&&(L=b(C.cN,L,!0));var M="",x=0;try{for(var A,k,B=0;;){if(w.t.lastIndex=B,A=w.t.exec(n),!A)break;k=y(n.substr(B,A.index-B),A[0]),B=A.index+k}y(n.substr(B));for(var C=w;C.parent;C=C.parent)C.cN&&(L+="</span>");return{r:x,value:L,language:t,top:w}}catch(I){if(I.message.indexOf("Illegal")!=-1)return{r:0,value:e(n)};throw I}}function l(t,r){r=r||N.languages||Object.keys(E);var n={r:0,value:e(t)},a=n;return r.forEach(function(e){if(v(e)){var r=u(e,t,!1);r.language=e,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function f(e){return N.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t,r,n){return t.replace(/\t/g,N.tabReplace)})),N.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e){var t=n(e),r=a(e);if("no-highlight"!=r){var i=r?u(r,t,!0):l(t),o=c(e);if(o.length){var h=document.createElementNS("http://www.w3.org/1999/xhtml","pre");h.innerHTML=i.value,i.value=s(o,c(h),t)}i.value=f(i.value),e.innerHTML=i.value,e.className+=" hljs "+(!r&&i.language||""),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r})}}function b(e){N=i(N,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,h)}}function p(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function d(e,t){var r=E[e]=t(this);r.aliases&&r.aliases.forEach(function(t){m[t]=e})}function v(e){return E[e]||E[m[e]]}var N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},E={},m={};this.highlight=u,this.highlightAuto=l,this.fixMarkup=f,this.highlightBlock=h,this.configure=b,this.initHighlighting=g,this.initHighlightingOnLoad=p,this.registerLanguage=d,this.getLanguage=v,this.inherit=i,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.CLCM={cN:"comment",b:"//",e:"$"},this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"},this.HCM={cN:"comment",b:"#",e:"$"},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},n={cN:"string",b:/'/,e:/'/};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,r,n,t]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},e.ASM,e.QSM,e.CLCM,e.CBLCLM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBLCLM,e.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},n={eW:!0,i:/</,r:0,c:[r,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},r,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},n]}]}});