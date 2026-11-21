(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="167",ef=0,vl=1,nf=2,Ku=1,$u=2,Fn=3,ri=0,Fe=1,On=2,ni=0,hr=1,mr=2,xl=3,Ml=4,rf=5,yi=100,sf=101,of=102,af=103,cf=104,lf=200,uf=201,hf=202,df=203,Pa=204,La=205,ff=206,pf=207,mf=208,gf=209,_f=210,vf=211,xf=212,Mf=213,Sf=214,yf=0,Ef=1,wf=2,lo=3,Tf=4,bf=5,Af=6,Rf=7,ju=0,Cf=1,Pf=2,ii=0,Lf=1,If=2,Df=3,Uf=4,Nf=5,Ff=6,Of=7,Zu=300,gr=301,_r=302,Ia=303,Da=304,So=306,Ua=1e3,bi=1001,Na=1002,on=1003,Bf=1004,Ss=1005,pn=1006,Ko=1007,Ai=1008,Gn=1009,Ju=1010,Qu=1011,rs=1012,bc=1013,Di=1014,zn=1015,cs=1016,Ac=1017,Rc=1018,vr=1020,th=35902,eh=1021,nh=1022,gn=1023,ih=1024,rh=1025,dr=1026,xr=1027,sh=1028,Cc=1029,oh=1030,Pc=1031,Lc=1033,Js=33776,Qs=33777,to=33778,eo=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Ga=37496,Va=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Ka=37813,$a=37814,ja=37815,Za=37816,Ja=37817,Qa=37818,tc=37819,ec=37820,nc=37821,no=36492,ic=36494,rc=36495,ah=36283,sc=36284,oc=36285,ac=36286,zf=3200,kf=3201,ch=0,Hf=1,ei="",fn="srgb",ci="srgb-linear",Ic="display-p3",yo="display-p3-linear",uo="linear",ae="srgb",ho="rec709",fo="p3",Gi=7680,Sl=519,Gf=512,Vf=513,Wf=514,lh=515,Xf=516,qf=517,Yf=518,Kf=519,yl=35044,El="300 es",kn=2e3,po=2001;class Cr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const ts=Math.PI/180,ss=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function $f(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function jf(n,t,e){return n!==t?(e-n)/(t-n):0}function es(n,t,e){return(1-e)*n+e*t}function Zf(n,t,e,i){return es(n,t,1-Math.exp(-e*i))}function Jf(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function Qf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function tp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ep(n,t){return n+Math.floor(Math.random()*(t-n+1))}function np(n,t){return n+Math.random()*(t-n)}function ip(n){return n*(.5-Math.random())}function rp(n){n!==void 0&&(wl=n);let t=wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sp(n){return n*ts}function op(n){return n*ss}function ap(n){return(n&n-1)===0&&n!==0}function cp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function up(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),f=o((t-i)/2),g=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*_,c*g,a*l);break;case"YXY":n.set(c*g,a*u,c*_,a*l);break;case"ZYZ":n.set(c*_,c*g,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hp={DEG2RAD:ts,RAD2DEG:ss,generateUUID:Pr,clamp:He,euclideanModulo:Dc,mapLinear:$f,inverseLerp:jf,lerp:es,damp:Zf,pingpong:Jf,smoothstep:Qf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:rp,degToRad:sp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:cp,floorPowerOfTwo:lp,setQuaternionFromProperEuler:up,normalize:ze,denormalize:cr};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,r,s,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],g=i[5],_=i[8],M=r[0],m=r[3],h=r[6],E=r[1],y=r[4],T=r[7],N=r[2],A=r[5],R=r[8];return s[0]=o*M+a*E+c*N,s[3]=o*m+a*y+c*A,s[6]=o*h+a*T+c*R,s[1]=l*M+u*E+d*N,s[4]=l*m+u*y+d*A,s[7]=l*h+u*T+d*R,s[2]=f*M+g*E+_*N,s[5]=f*m+g*y+_*A,s[8]=f*h+g*T+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*s,g=l*s-o*c,_=e*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(r*l-u*i)*M,t[2]=(a*i-r*o)*M,t[3]=f*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-a*e)*M,t[6]=g*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Bt;function uh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){const n=mo("canvas");return n.style.display="block",n}const Tl={};function ns(n){n in Tl||(Tl[n]=!0,console.warn(n))}function fp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const bl=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[ci]:{transfer:uo,primaries:ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[fn]:{transfer:ae,primaries:ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yo]:{transfer:uo,primaries:fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Al),fromReference:n=>n.applyMatrix3(bl)},[Ic]:{transfer:ae,primaries:fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Al),fromReference:n=>n.applyMatrix3(bl).convertLinearToSRGB()}},pp=new Set([ci,yo]),te={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=zr[t].toReference,r=zr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return zr[n].primaries},getTransfer:function(n){return n===ei?uo:zr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(zr[t].luminanceCoefficients)}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=mo("canvas")),Vi.width=t.width,Vi.height=t.height;const i=Vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fr(e[i]/255)*255):e[i]=fr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gp=0;class hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zo(r[o].image)):s.push(Zo(r[o]))}else s=Zo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class Ge extends Cr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=bi,r=bi,s=pn,o=Ai,a=gn,c=Gn,l=Ge.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Pr(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Zu;Ge.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],g=c[5],_=c[9],M=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,T=(g+1)/2,N=(h+1)/2,A=(u+f)/4,R=(d+M)/4,I=(_+m)/4;return y>T&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=R/i):T>N?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=A/r,s=I/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=I/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-M)/E,this.z=(f-u)/E,this.w=Math.acos((l+g+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vp extends Cr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ge(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends vp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class dh extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],_=s[o+2],M=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=M;return}if(d!==M||c!==f||l!==g||u!==_){let m=1-a;const h=c*f+l*g+u*_+d*M,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const N=Math.sqrt(y),A=Math.atan2(N,h*E);m=Math.sin(m*A)/N,a=Math.sin(a*A)/N}const T=a*E;if(c=c*m+f*T,l=l*m+g*T,u=u*m+_*T,d=d*m+M*T,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+u*d+c*g-l*f,t[e+1]=c*_+u*f+l*d-a*g,t[e+2]=l*_+u*g+a*f-c*d,t[e+3]=u*_-a*d-c*f-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*g*_,this._y=l*g*d-f*u*_,this._z=l*u*_+f*g*d,this._w=l*u*d-f*g*_;break;case"YXZ":this._x=f*u*d+l*g*_,this._y=l*g*d-f*u*_,this._z=l*u*_-f*g*d,this._w=l*u*d+f*g*_;break;case"ZXY":this._x=f*u*d-l*g*_,this._y=l*g*d+f*u*_,this._z=l*u*_+f*g*d,this._w=l*u*d-f*g*_;break;case"ZYX":this._x=f*u*d-l*g*_,this._y=l*g*d+f*u*_,this._z=l*u*_-f*g*d,this._w=l*u*d+f*g*_;break;case"YZX":this._x=f*u*d+l*g*_,this._y=l*g*d+f*u*_,this._z=l*u*_-f*g*d,this._w=l*u*d-f*g*_;break;case"XZY":this._x=f*u*d-l*g*_,this._y=l*g*d-f*u*_,this._z=l*u*_+f*g*d,this._w=l*u*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(u-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new L,Rl=new ls;class us{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(s,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Es.subVectors(this.max,kr),Wi.subVectors(t.a,kr),Xi.subVectors(t.b,kr),qi.subVectors(t.c,kr),Xn.subVectors(Xi,Wi),qn.subVectors(qi,Xi),di.subVectors(Wi,qi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!Qo(e,Wi,Xi,qi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,Wi,Xi,qi,Es))?!1:(ws.crossVectors(Xn,qn),e=[ws.x,ws.y,ws.z],Qo(e,Wi,Xi,qi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new L,new L,new L,new L,new L,new L,new L,new L],un=new L,ys=new us,Wi=new L,Xi=new L,qi=new L,Xn=new L,qn=new L,di=new L,kr=new L,Es=new L,ws=new L,fi=new L;function Qo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){fi.fromArray(n,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),u=i.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Mp=new us,Hr=new L,ta=new L;class Eo{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Mp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Hr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(ta)),this.expandByPoint(Hr.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new L,ea=new L,Ts=new L,Yn=new L,na=new L,bs=new L,ia=new L;class Uc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ea.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(ea);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=Yn.dot(this.direction),c=-Yn.dot(Ts),l=Yn.lengthSq(),u=Math.abs(1-o*o);let d,f,g,_;if(u>0)if(d=o*c-a,f=o*a-c,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,g=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ea).addScaledVector(Ts,f),g}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,r,s){na.subVectors(e,t),bs.subVectors(i,t),ia.crossVectors(na,bs);let o=this.direction.dot(ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const c=a*this.direction.dot(bs.crossVectors(Yn,bs));if(c<0)return null;const l=a*this.direction.dot(na.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot(ia);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,r,s,o,a,c,l,u,d,f,g,_,M,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,f,g,_,M,m)}set(t,e,i,r,s,o,a,c,l,u,d,f,g,_,M,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=g,h[7]=_,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Yi.setFromMatrixColumn(t,0).length(),s=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*u,g=o*d,_=a*u,M=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=g+_*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,g=c*d,_=l*u,M=l*d;e[0]=f+M*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=g*a-_,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,g=c*d,_=l*u,M=l*d;e[0]=f-M*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*u,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,g=o*d,_=a*u,M=a*d;e[0]=c*u,e[4]=_*l-g,e[8]=f*l+M,e[1]=c*d,e[5]=M*l+f,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,g=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=M-f*d,e[8]=_*d+g,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=g*d+_,e[10]=f-M*d}else if(t.order==="XZY"){const f=o*c,g=o*l,_=a*c,M=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+M,e[5]=o*u,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*u,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,yp)}lookAt(t,e,i){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Kn.crossVectors(i,Ke),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Kn.crossVectors(i,Ke)),Kn.normalize(),As.crossVectors(Ke,Kn),r[0]=Kn.x,r[4]=As.x,r[8]=Ke.x,r[1]=Kn.y,r[5]=As.y,r[9]=Ke.y,r[2]=Kn.z,r[6]=As.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],g=i[13],_=i[2],M=i[6],m=i[10],h=i[14],E=i[3],y=i[7],T=i[11],N=i[15],A=r[0],R=r[4],I=r[8],w=r[12],v=r[1],P=r[5],z=r[9],k=r[13],W=r[2],Y=r[6],V=r[10],j=r[14],G=r[3],ut=r[7],pt=r[11],Mt=r[15];return s[0]=o*A+a*v+c*W+l*G,s[4]=o*R+a*P+c*Y+l*ut,s[8]=o*I+a*z+c*V+l*pt,s[12]=o*w+a*k+c*j+l*Mt,s[1]=u*A+d*v+f*W+g*G,s[5]=u*R+d*P+f*Y+g*ut,s[9]=u*I+d*z+f*V+g*pt,s[13]=u*w+d*k+f*j+g*Mt,s[2]=_*A+M*v+m*W+h*G,s[6]=_*R+M*P+m*Y+h*ut,s[10]=_*I+M*z+m*V+h*pt,s[14]=_*w+M*k+m*j+h*Mt,s[3]=E*A+y*v+T*W+N*G,s[7]=E*R+y*P+T*Y+N*ut,s[11]=E*I+y*z+T*V+N*pt,s[15]=E*w+y*k+T*j+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],g=t[14],_=t[3],M=t[7],m=t[11],h=t[15];return _*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*g-i*c*g)+M*(+e*c*g-e*l*f+s*o*f-r*o*g+r*l*u-s*c*u)+m*(+e*l*d-e*a*g-s*o*d+i*o*g+s*a*u-i*l*u)+h*(-r*a*u-e*c*d+e*a*f+r*o*d-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],g=t[11],_=t[12],M=t[13],m=t[14],h=t[15],E=d*m*l-M*f*l+M*c*g-a*m*g-d*c*h+a*f*h,y=_*f*l-u*m*l-_*c*g+o*m*g+u*c*h-o*f*h,T=u*M*l-_*d*l+_*a*g-o*M*g-u*a*h+o*d*h,N=_*d*c-u*M*c-_*a*f+o*M*f+u*a*m-o*d*m,A=e*E+i*y+r*T+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(M*f*s-d*m*s-M*r*g+i*m*g+d*r*h-i*f*h)*R,t[2]=(a*m*s-M*c*s+M*r*l-i*m*l-a*r*h+i*c*h)*R,t[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*g-i*c*g)*R,t[4]=y*R,t[5]=(u*m*s-_*f*s+_*r*g-e*m*g-u*r*h+e*f*h)*R,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*h-e*c*h)*R,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*g+e*c*g)*R,t[8]=T*R,t[9]=(_*d*s-u*M*s-_*i*g+e*M*g+u*i*h-e*d*h)*R,t[10]=(o*M*s-_*a*s+_*i*l-e*M*l-o*i*h+e*a*h)*R,t[11]=(u*a*s-o*d*s-u*i*l+e*d*l+o*i*g-e*a*g)*R,t[12]=N*R,t[13]=(u*M*r-_*d*r+_*i*f-e*M*f-u*i*m+e*d*m)*R,t[14]=(_*a*r-o*M*r-_*i*c+e*M*c+o*i*m-e*a*m)*R,t[15]=(o*d*r-u*a*r+u*i*c-e*d*c-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,f=s*l,g=s*u,_=s*d,M=o*u,m=o*d,h=a*d,E=c*l,y=c*u,T=c*d,N=i.x,A=i.y,R=i.z;return r[0]=(1-(M+h))*N,r[1]=(g+T)*N,r[2]=(_-y)*N,r[3]=0,r[4]=(g-T)*A,r[5]=(1-(f+h))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(_+y)*R,r[9]=(m-E)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const l=1/s,u=1/o,d=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=kn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),f=(i+r)/(i-r);let g,_;if(a===kn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===po)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=kn){const c=this.elements,l=1/(e-t),u=1/(i-r),d=1/(o-s),f=(e+t)*l,g=(i+r)*u;let _,M;if(a===kn)_=(o+s)*d,M=-2*d;else if(a===po)_=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yi=new L,hn=new he,Sp=new L(0,0,0),yp=new L(1,1,1),Kn=new L,As=new L,Ke=new L,Cl=new he,Pl=new ls;class Tn{constructor(t=0,e=0,i=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ep=0;const Ll=new L,Ki=new ls,In=new he,Rs=new L,Gr=new L,wp=new L,Tp=new ls,Il=new L(1,0,0),Dl=new L(0,1,0),Ul=new L(0,0,1),Nl={type:"added"},bp={type:"removed"},$i={type:"childadded",child:null},ra={type:"childremoved",child:null};class Le extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new L,e=new Tn,i=new ls,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new Bt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Ul,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Ul,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rs.copy(t):Rs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Gr,Rs,this.up):In.lookAt(Rs,Gr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(In),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,Dn=new L,sa=new L,Un=new L,ji=new L,Zi=new L,Fl=new L,oa=new L,aa=new L,ca=new L;class En{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){dn.subVectors(r,e),Dn.subVectors(i,e),sa.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Dn),c=dn.dot(sa),l=Dn.dot(Dn),u=Dn.dot(sa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,g=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-g-_,_,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static isFrontFacing(t,e,i,r){return dn.subVectors(i,e),Dn.subVectors(t,e),dn.cross(Dn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),dn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),Zi.subVectors(s,i),oa.subVectors(t,i);const c=ji.dot(oa),l=Zi.dot(oa);if(c<=0&&l<=0)return e.copy(i);aa.subVectors(t,r);const u=ji.dot(aa),d=Zi.dot(aa);if(u>=0&&d<=u)return e.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ji,o);ca.subVectors(t,s);const g=ji.dot(ca),_=Zi.dot(ca);if(_>=0&&g<=_)return e.copy(s);const M=g*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Zi,a);const m=u*_-g*d;if(m<=0&&d-u>=0&&g-_>=0)return Fl.subVectors(s,r),a=(d-u)/(d-u+(g-_)),e.copy(r).addScaledVector(Fl,a);const h=1/(m+M+f);return o=M*h,a=f*h,e.copy(i).addScaledVector(ji,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function la(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Dc(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=la(o,s,t+1/3),this.g=la(o,s,t),this.b=la(o,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const i=fh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=jo(t.r),this.g=jo(t.g),this.b=jo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return te.fromWorkingColorSpace(Ne.copy(this),t),Math.round(He(Ne.r*255,0,255))*65536+Math.round(He(Ne.g*255,0,255))*256+Math.round(He(Ne.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=fn){te.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Cs);const i=es($n.h,Cs.h,e),r=es($n.s,Cs.s,e),s=es($n.l,Cs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Tt;Tt.NAMES=fh;let Ap=0;class Lr extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=hr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==La&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class cn extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,Ps=new zt;class vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ns("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}}class ph extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class mh extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Rp=0;const nn=new he,ua=new Le,Ji=new L,$e=new us,Vr=new us,Ae=new L;class tn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?mh:ph)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors($e.min,Vr.min),$e.expandByPoint(Ae),Ae.addVectors($e.max,Vr.max),$e.expandByPoint(Ae)):($e.expandByPoint(Vr.min),$e.expandByPoint(Vr.max))}$e.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ae.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(t,l),Ae.add(Ji)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new L,c[I]=new L;const l=new L,u=new L,d=new L,f=new zt,g=new zt,_=new zt,M=new L,m=new L;function h(I,w,v){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,v),f.fromBufferAttribute(s,I),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,v),u.sub(l),d.sub(l),g.sub(f),_.sub(f);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(P),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(P),a[I].add(M),a[w].add(M),a[v].add(M),c[I].add(m),c[w].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,w=E.length;I<w;++I){const v=E[I],P=v.start,z=v.count;for(let k=P,W=P+z;k<W;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new L,T=new L,N=new L,A=new L;function R(I){N.fromBufferAttribute(r,I),A.copy(N);const w=a[I];y.copy(w),y.sub(N.multiplyScalar(N.dot(w))).normalize(),T.crossVectors(A,w);const P=T.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,w=E.length;I<w;++I){const v=E[I],P=v.start,z=v.count;for(let k=P,W=P+z;k<W;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,g=e.count;f<g;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let g=0,_=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?g=c[M]*a.data.stride+a.offset:g=c[M]*u;for(let h=0;h<u;h++)f[_++]=l[g++]}return new vn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],g=t(f,i);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const g=l[d];u.push(g.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new he,pi=new Uc,Ls=new Eo,Bl=new L,Qi=new L,tr=new L,er=new L,ha=new L,Is=new L,Ds=new zt,Us=new zt,Ns=new zt,zl=new L,kl=new L,Hl=new L,Fs=new L,Os=new L;class Q extends Le{constructor(t=new tn,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(ha.fromBufferAttribute(d,t),o?Is.addScaledVector(ha,u):Is.addScaledVector(ha.sub(e),u))}e.add(Is)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(Ls.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Ls,Bl)===null||pi.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(Ol.copy(s).invert(),pi.copy(t.ray).applyMatrix4(Ol),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),y=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,N=y;T<N;T+=3){const A=a.getX(T),R=a.getX(T+1),I=a.getX(T+2);r=Bs(this,h,t,i,l,u,d,A,R,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let m=_,h=M;m<h;m+=3){const E=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);r=Bs(this,o,t,i,l,u,d,E,y,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const m=f[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),y=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,N=y;T<N;T+=3){const A=T,R=T+1,I=T+2;r=Bs(this,h,t,i,l,u,d,A,R,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let m=_,h=M;m<h;m+=3){const E=m,y=m+1,T=m+2;r=Bs(this,o,t,i,l,u,d,E,y,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Cp(n,t,e,i,r,s,o,a){let c;if(t.side===Fe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===ri,a),c===null)return null;Os.copy(a),Os.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:n}}function Bs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Qi),n.getVertexPosition(c,tr),n.getVertexPosition(l,er);const u=Cp(n,t,e,i,Qi,tr,er,Fs);if(u){r&&(Ds.fromBufferAttribute(r,a),Us.fromBufferAttribute(r,c),Ns.fromBufferAttribute(r,l),u.uv=En.getInterpolation(Fs,Qi,tr,er,Ds,Us,Ns,new zt)),s&&(Ds.fromBufferAttribute(s,a),Us.fromBufferAttribute(s,c),Ns.fromBufferAttribute(s,l),u.uv1=En.getInterpolation(Fs,Qi,tr,er,Ds,Us,Ns,new zt)),o&&(zl.fromBufferAttribute(o,a),kl.fromBufferAttribute(o,c),Hl.fromBufferAttribute(o,l),u.normal=En.getInterpolation(Fs,Qi,tr,er,zl,kl,Hl,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};En.getNormal(Qi,tr,er,d.normal),u.face=d}return u}class re extends tn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(d,2));function _(M,m,h,E,y,T,N,A,R,I,w){const v=T/R,P=N/I,z=T/2,k=N/2,W=A/2,Y=R+1,V=I+1;let j=0,G=0;const ut=new L;for(let pt=0;pt<V;pt++){const Mt=pt*P-k;for(let Wt=0;Wt<Y;Wt++){const ne=Wt*v-z;ut[M]=ne*E,ut[m]=Mt*y,ut[h]=W,l.push(ut.x,ut.y,ut.z),ut[M]=0,ut[m]=0,ut[h]=A>0?1:-1,u.push(ut.x,ut.y,ut.z),d.push(Wt/R),d.push(1-pt/I),j+=1}}for(let pt=0;pt<I;pt++)for(let Mt=0;Mt<R;Mt++){const Wt=f+Mt+Y*pt,ne=f+Mt+Y*(pt+1),X=f+(Mt+1)+Y*(pt+1),nt=f+(Mt+1)+Y*pt;c.push(Wt,ne,nt),c.push(ne,X,nt),G+=6}a.addGroup(g,G,w),g+=G,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ke(n){const t={};for(let e=0;e<n.length;e++){const i=Mr(n[e]);for(const r in i)t[r]=i[r]}return t}function Pp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Lp={clone:Mr,merge:ke};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _h extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new L,Gl=new zt,Vl=new zt;class je extends _h{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Vl),e.subVectors(Vl,Gl)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const nr=-90,ir=1;class Up extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(nr,ir,t,e);r.layers=this.layers,this.add(r);const s=new je(nr,ir,t,e);s.layers=this.layers,this.add(s);const o=new je(nr,ir,t,e);o.layers=this.layers,this.add(o);const a=new je(nr,ir,t,e);a.layers=this.layers,this.add(a);const c=new je(nr,ir,t,e);c.layers=this.layers,this.add(c);const l=new je(nr,ir,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,f,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class vh extends Ge{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:gr,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Np extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new vh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new re(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:ni});s.uniforms.tEquirect.value=e;const o=new Q(r,s),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=pn),new Up(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const da=new L,Fp=new L,Op=new Bt;class xi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=da.subVectors(i,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Op.getNormalMatrix(t),r=this.coplanarPoint(da).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Eo,zs=new L;class Fc{constructor(t=new xi,e=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],M=r[10],m=r[11],h=r[12],E=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-s,f-l,m-g,T-h).normalize(),i[1].setComponents(c+s,f+l,m+g,T+h).normalize(),i[2].setComponents(c+o,f+u,m+_,T+E).normalize(),i[3].setComponents(c-o,f-u,m-_,T-E).normalize(),i[4].setComponents(c-a,f-d,m-M,T-y).normalize(),e===kn)i[5].setComponents(c+a,f+d,m+M,T+y).normalize();else if(e===po)i[5].setComponents(a,d,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(zs.x=r.normal.x>0?t.max.x:t.min.x,zs.y=r.normal.y>0?t.max.y:t.min.y,zs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Bp(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let g=0,_=f.length;g<_;g++){const M=f[g];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class hs extends tn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,f=e/c,g=[],_=[],M=[],m=[];for(let h=0;h<u;h++){const E=h*f-o;for(let y=0;y<l;y++){const T=y*d-s;_.push(T,-E,0),M.push(0,0,1),m.push(y/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<a;E++){const y=E+l*h,T=E+l*(h+1),N=E+1+l*(h+1),A=E+1+l*h;g.push(y,T,A),g.push(T,N,A)}this.setIndex(g),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(M,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,og=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:zp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:Kp,begin_vertex:$p,beginnormal_vertex:jp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:om,color_vertex:am,common:cm,cube_uv_reflection_fragment:lm,defaultnormal_vertex:um,displacementmap_pars_vertex:hm,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:vm,envmap_pars_fragment:xm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:Sm,fog_vertex:ym,fog_pars_vertex:Em,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Pm,lights_toon_fragment:Im,lights_toon_pars_fragment:Dm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:km,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Km,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:r0,normal_pars_vertex:s0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:_0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:S0,shadowmap_vertex:y0,shadowmask_pars_fragment:E0,skinbase_vertex:w0,skinning_pars_vertex:T0,skinning_vertex:b0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:I0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:F0,worldpos_vertex:O0,background_vert:B0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:K0,equirect_frag:$0,linedashed_vert:j0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:cg,meshphysical_frag:lg,meshtoon_vert:ug,meshtoon_frag:hg,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:_g},at={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yn={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};yn.physical={uniforms:ke([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ks={r:0,b:0,g:0},gi=new Tn,vg=new he;function xg(n,t,e,i,r,s,o){const a=new Tt(0);let c=s===!0?0:1,l,u,d=null,f=0,g=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function M(E){let y=!1;const T=_(E);T===null?h(a,c):T&&T.isColor&&(h(T,1),y=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const T=_(y);T&&(T.isCubeTexture||T.mapping===So)?(u===void 0&&(u=new Q(new re(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Mr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(gi)),u.material.toneMapped=te.getTransfer(T.colorSpace)!==ae,(d!==T||f!==T.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,g=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Q(new hs(2,2),new si({name:"BackgroundMaterial",uniforms:Mr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=te.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,g=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,y){E.getRGB(ks,gh(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(a,c)},render:M,addToRenderList:m}}function Mg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(v,P,z,k,W){let Y=!1;const V=d(k,z,P);s!==V&&(s=V,l(s.object)),Y=g(v,k,z,W),Y&&_(v,k,z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,T(v,P,z,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,P,z){const k=z.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let V=Y[k];return V===void 0&&(V=f(c()),Y[k]=V),V}function f(v){const P=[],z=[],k=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function g(v,P,z,k){const W=s.attributes,Y=P.attributes;let V=0;const j=z.getAttributes();for(const G in j)if(j[G].location>=0){const pt=W[G];let Mt=Y[G];if(Mt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function _(v,P,z,k){const W={},Y=P.attributes;let V=0;const j=z.getAttributes();for(const G in j)if(j[G].location>=0){let pt=Y[G];pt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),W[G]=Mt,V++}s.attributes=W,s.attributesNum=V,s.index=k}function M(){const v=s.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function m(v){h(v,0)}function h(v,P){const z=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;z[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),W[v]!==P&&(n.vertexAttribDivisor(v,P),W[v]=P)}function E(){const v=s.newAttributes,P=s.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==v[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function y(v,P,z,k,W,Y,V){V===!0?n.vertexAttribIPointer(v,P,z,W,Y):n.vertexAttribPointer(v,P,z,k,W,Y)}function T(v,P,z,k){M();const W=k.attributes,Y=z.getAttributes(),V=P.defaultAttributeValues;for(const j in Y){const G=Y[j];if(G.location>=0){let ut=W[j];if(ut===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const pt=ut.normalized,Mt=ut.itemSize,Wt=t.get(ut);if(Wt===void 0)continue;const ne=Wt.buffer,X=Wt.type,nt=Wt.bytesPerElement,gt=X===n.INT||X===n.UNSIGNED_INT||ut.gpuType===bc;if(ut.isInterleavedBufferAttribute){const dt=ut.data,Ut=dt.stride,kt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)h(G.location+Gt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let Gt=0;Gt<G.locationSize;Gt++)y(G.location+Gt,Mt/G.locationSize,X,pt,Ut*nt,(kt+Mt/G.locationSize*Gt)*nt,gt)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)h(G.location+dt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt);n.bindBuffer(n.ARRAY_BUFFER,ne);for(let dt=0;dt<G.locationSize;dt++)y(G.location+dt,Mt/G.locationSize,X,pt,Mt*nt,Mt/G.locationSize*dt*nt,gt)}}else if(V!==void 0){const pt=V[j];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(G.location,pt);break;case 3:n.vertexAttrib3fv(G.location,pt);break;case 4:n.vertexAttrib4fv(G.location,pt);break;default:n.vertexAttrib1fv(G.location,pt)}}}}E()}function N(){I();for(const v in i){const P=i[v];for(const z in P){const k=P[z];for(const W in k)u(k[W].object),delete k[W];delete P[z]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const z in P){const k=P[z];for(const W in k)u(k[W].object),delete k[W];delete P[z]}delete i[v.id]}function R(v){for(const P in i){const z=i[P];if(z[v.id]===void 0)continue;const k=z[v.id];for(const W in k)u(k[W].object),delete k[W];delete z[v.id]}}function I(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function Sg(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,i,1)}function c(l,u,d,f){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=u[M];for(let M=0;M<f.length;M++)e.update(_,i,f[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yg(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Gn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:h,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:T,maxSamples:N}}function Eg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new xi,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,g){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,y=E*4;let T=h.clippingState||null;c.value=T,T=u(_,f,y,g);for(let N=0;N!==y;++N)T[N]=e[N];h.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,g,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const h=g+M*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,T=g;y!==M;++y,T+=4)o.copy(d[y]).applyMatrix4(E,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function wg(n){let t=new WeakMap;function e(o,a){return a===Ia?o.mapping=gr:a===Da&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ia||a===Da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Np(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Mh extends _h{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lr=4,Wl=[.125,.215,.35,.446,.526,.582],Ei=20,fa=new Mh,Xl=new Tt;let pa=null,ma=0,ga=0,_a=!1;const Mi=(1+Math.sqrt(5))/2,rr=1/Mi,ql=[new L(-Mi,rr,0),new L(Mi,rr,0),new L(-rr,0,Mi),new L(rr,0,Mi),new L(0,Mi,-rr),new L(0,Mi,rr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:cs,format:gn,colorSpace:ci,depthBuffer:!1},r=Kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=bg(s,t,e)}return r}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,i,r){const a=new je(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Xl),u.toneMapping=ii,u.autoClear=!1;const g=new cn({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new Q(new re,g);let M=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,M=!0):(g.color.copy(Xl),M=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):E===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const y=this._cubeSize;Hs(r,E*y,h>2?y:0,y,y),u.setRenderTarget(r),M&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===gr||t.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Hs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,fa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ql[(r-s-1)%ql.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Q(this._lodPlanes[r],l),f=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ei-1),M=s/_,m=isFinite(s)?1+Math.floor(u*M):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const h=[];let E=0;for(let R=0;R<Ei;++R){const I=R/M,w=Math.exp(-I*I/2);h.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const T=this._sizeLods[r],N=3*T*(r>y-lr?r-y+lr:0),A=4*(this._cubeSize-T);Hs(e,N,A,3*T,2*T),c.setRenderTarget(e),c.render(d,fa)}}function Tg(n){const t=[],e=[],i=[];let r=n;const s=n-lr+1+Wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-lr?c=Wl[o-n+lr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,_=6,M=3,m=2,h=1,E=new Float32Array(M*_*g),y=new Float32Array(m*_*g),T=new Float32Array(h*_*g);for(let A=0;A<g;A++){const R=A%3*2/3-1,I=A>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(w,M*_*A),y.set(f,m*_*A);const v=[A,A,A,A,A,A];T.set(v,h*_*A)}const N=new tn;N.setAttribute("position",new vn(E,M)),N.setAttribute("uv",new vn(y,m)),N.setAttribute("faceIndex",new vn(T,h)),t.push(N),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kl(n,t,e){const i=new Ui(n,t,e);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function bg(n,t,e){const i=new Float32Array(Ei),r=new L(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $l(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function jl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ag(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ia||c===Da,u=c===gr||c===_r;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Yl(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return l&&g&&g.height>0||u&&g&&r(g)?(e===null&&(e=new Yl(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Rg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cg(n,t,e,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let m=0,h=M.length;m<h;m++)t.remove(M[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(t.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const M=g[_];for(let m=0,h=M.length;m<h;m++)t.update(M[m],n.ARRAY_BUFFER)}}function l(d){const f=[],g=d.index,_=d.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let y=0,T=E.length;y<T;y+=3){const N=E[y+0],A=E[y+1],R=E[y+2];f.push(N,A,A,R,R,N)}}else if(_!==void 0){const E=_.array;M=_.version;for(let y=0,T=E.length/3-1;y<T;y+=3){const N=y+0,A=y+1,R=y+2;f.push(N,A,A,R,R,N)}}else return;const m=new(uh(f)?mh:ph)(f,1);m.version=M;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Pg(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,g){n.drawElements(i,g,s,f*o),e.update(g,i,1)}function l(f,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,f*o,_),e.update(g,i,_))}function u(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=g[h];e.update(m,i,1)}function d(f,g,_,M){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,g[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,M,0,_);let h=0;for(let E=0;E<_;E++)h+=g[E];for(let E=0;E<M.length;E++)e.update(h,i,M[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Lg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Ig(n,t,e){const i=new WeakMap,r=new le;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let v=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var g=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),M===!0&&(T=2),m===!0&&(T=3);let N=a.attributes.position.count*T,A=1;N>t.maxTextureSize&&(A=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*A*4*d),I=new dh(R,N,A,d);I.type=zn,I.needsUpdate=!0;const w=T*4;for(let P=0;P<d;P++){const z=h[P],k=E[P],W=y[P],Y=N*A*4*P;for(let V=0;V<z.count;V++){const j=V*w;_===!0&&(r.fromBufferAttribute(z,V),R[Y+j+0]=r.x,R[Y+j+1]=r.y,R[Y+j+2]=r.z,R[Y+j+3]=0),M===!0&&(r.fromBufferAttribute(k,V),R[Y+j+4]=r.x,R[Y+j+5]=r.y,R[Y+j+6]=r.z,R[Y+j+7]=0),m===!0&&(r.fromBufferAttribute(W,V),R[Y+j+8]=r.x,R[Y+j+9]=r.y,R[Y+j+10]=r.z,R[Y+j+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new zt(N,A)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Dg(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Sh extends Ge{constructor(t,e,i,r,s,o,a,c,l,u=dr){if(u!==dr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===dr&&(i=Di),i===void 0&&u===xr&&(i=vr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yh=new Ge,Zl=new Sh(1,1),Eh=new dh,wh=new xp,Th=new vh,Jl=[],Ql=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);function Ir(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Jl[r];if(s===void 0&&(s=new Float32Array(r),Jl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wo(n,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ug(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function Fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Og(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function Bg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),Te(e,i)}}function zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),Te(e,i)}}function kg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;tu.set(i),n.uniformMatrix4fv(this.addr,!1,tu),Te(e,i)}}function Hg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function Xg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function $g(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Zl.compareFunction=lh,s=Zl):s=yh,e.setTexture2D(t||s,r)}function jg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||wh,r)}function Zg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Th,r)}function Jg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Eh,r)}function Qg(n){switch(n){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function t_(n,t){n.uniform1fv(this.addr,t)}function e_(n,t){const e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function n_(n,t){const e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function i_(n,t){const e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function r_(n,t){const e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function s_(n,t){const e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function o_(n,t){const e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function a_(n,t){n.uniform1iv(this.addr,t)}function c_(n,t){n.uniform2iv(this.addr,t)}function l_(n,t){n.uniform3iv(this.addr,t)}function u_(n,t){n.uniform4iv(this.addr,t)}function h_(n,t){n.uniform1uiv(this.addr,t)}function d_(n,t){n.uniform2uiv(this.addr,t)}function f_(n,t){n.uniform3uiv(this.addr,t)}function p_(n,t){n.uniform4uiv(this.addr,t)}function m_(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yh,s[o])}function g_(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||wh,s[o])}function __(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Th,s[o])}function v_(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Eh,s[o])}function x_(n){switch(n){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return r_;case 35675:return s_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return c_;case 35668:case 35672:return l_;case 35669:case 35673:return u_;case 5125:return h_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class S_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function iu(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){const i=n.name,r=i.length;for(va.lastIndex=0;;){const s=va.exec(i),o=va.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){iu(e,l===void 0?new M_(a,n,t):new S_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new y_(a),iu(e,d)),e=d}}}class io{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);E_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ru(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const w_=37297;let T_=0;function b_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function A_(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===fo&&e===ho?i="LinearDisplayP3ToLinearSRGB":t===ho&&e===fo&&(i="LinearSRGBToLinearDisplayP3"),n){case ci:case yo:return[i,"LinearTransferOETF"];case fn:case Ic:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function su(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+b_(n.getShaderSource(t),o)}else return r}function R_(n,t){const e=A_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C_(n,t){let e;switch(t){case Lf:e="Linear";break;case If:e="Reinhard";break;case Df:e="OptimizedCineon";break;case Uf:e="ACESFilmic";break;case Ff:e="AgX";break;case Of:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new L;function P_(){te.getLuminanceCoefficients(Gs);const n=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function I_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function D_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Kr(n){return n!==""}function ou(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(U_,F_)}const N_=new Map;function F_(n,t){let e=Ot[t];if(e===void 0){const i=N_.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(n){return n.replace(O_,B_)}function B_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function k_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ju:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function V_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function W_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=z_(e),l=k_(e),u=H_(e),d=G_(e),f=V_(e),g=L_(e),_=I_(s),M=r.createProgram();let m,h,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),h.length>0&&(h+=`
`)):(m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),h=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ot.tonemapping_pars_fragment:"",e.toneMapping!==ii?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=cc(o),o=ou(o,e),o=au(o,e),a=cc(a),a=ou(a,e),a=au(a,e),o=cu(o),a=cu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+m+o,T=E+h+a,N=ru(r,r.VERTEX_SHADER,y),A=ru(r,r.FRAGMENT_SHADER,T);r.attachShader(M,N),r.attachShader(M,A),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(P){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(M).trim(),k=r.getShaderInfoLog(N).trim(),W=r.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,N,A);else{const j=su(r,N,"vertex"),G=su(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+j+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(N),r.deleteShader(A),I=new io(r,M),w=D_(r,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,w_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=A,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Y_(t),e.set(t,i)),i}}class Y_{constructor(t){this.id=X_++,this.code=t,this.usedTimes=0}}function K_(n,t,e,i,r,s,o){const a=new Nc,c=new q_,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,P,z,k){const W=z.fog,Y=k.geometry,V=w.isMeshStandardMaterial?z.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),G=j&&j.mapping===So?j.image.height:null,ut=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=pt!==void 0?pt.length:0;let Wt=0;Y.morphAttributes.position!==void 0&&(Wt=1),Y.morphAttributes.normal!==void 0&&(Wt=2),Y.morphAttributes.color!==void 0&&(Wt=3);let ne,X,nt,gt;if(ut){const jt=yn[ut];ne=jt.vertexShader,X=jt.fragmentShader}else ne=w.vertexShader,X=w.fragmentShader,c.update(w),nt=c.getVertexShaderID(w),gt=c.getFragmentShaderID(w);const dt=n.getRenderTarget(),Ut=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,Gt=!!w.map,pe=!!w.matcap,C=!!j,_e=!!w.aoMap,ee=!!w.lightMap,ie=!!w.bumpMap,yt=!!w.normalMap,ve=!!w.displacementMap,Pt=!!w.emissiveMap,Nt=!!w.metalnessMap,b=!!w.roughnessMap,x=w.anisotropy>0,H=w.clearcoat>0,tt=w.dispersion>0,et=w.iridescence>0,Z=w.sheen>0,Et=w.transmission>0,ct=x&&!!w.anisotropyMap,ft=H&&!!w.clearcoatMap,Ft=H&&!!w.clearcoatNormalMap,it=H&&!!w.clearcoatRoughnessMap,ht=et&&!!w.iridescenceMap,Xt=et&&!!w.iridescenceThicknessMap,Ct=Z&&!!w.sheenColorMap,mt=Z&&!!w.sheenRoughnessMap,Lt=!!w.specularMap,Ht=!!w.specularColorMap,de=!!w.specularIntensityMap,D=Et&&!!w.transmissionMap,rt=Et&&!!w.thicknessMap,q=!!w.gradientMap,K=!!w.alphaMap,ot=w.alphaTest>0,bt=!!w.alphaHash,Kt=!!w.extensions;let xe=ii;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ie={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:X,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ci,alphaToCoverage:!!w.alphaToCoverage,map:Gt,matcap:pe,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:G,aoMap:_e,lightMap:ee,bumpMap:ie,normalMap:yt,displacementMap:f&&ve,emissiveMap:Pt,normalMapObjectSpace:yt&&w.normalMapType===Hf,normalMapTangentSpace:yt&&w.normalMapType===ch,metalnessMap:Nt,roughnessMap:b,anisotropy:x,anisotropyMap:ct,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:Ft,clearcoatRoughnessMap:it,dispersion:tt,iridescence:et,iridescenceMap:ht,iridescenceThicknessMap:Xt,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Lt,specularColorMap:Ht,specularIntensityMap:de,transmission:Et,transmissionMap:D,thicknessMap:rt,gradientMap:q,opaque:w.transparent===!1&&w.blending===hr&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:ot,alphaHash:bt,combine:w.combine,mapUv:Gt&&M(w.map.channel),aoMapUv:_e&&M(w.aoMap.channel),lightMapUv:ee&&M(w.lightMap.channel),bumpMapUv:ie&&M(w.bumpMap.channel),normalMapUv:yt&&M(w.normalMap.channel),displacementMapUv:ve&&M(w.displacementMap.channel),emissiveMapUv:Pt&&M(w.emissiveMap.channel),metalnessMapUv:Nt&&M(w.metalnessMap.channel),roughnessMapUv:b&&M(w.roughnessMap.channel),anisotropyMapUv:ct&&M(w.anisotropyMap.channel),clearcoatMapUv:ft&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&M(w.sheenRoughnessMap.channel),specularMapUv:Lt&&M(w.specularMap.channel),specularColorMapUv:Ht&&M(w.specularColorMap.channel),specularIntensityMapUv:de&&M(w.specularIntensityMap.channel),transmissionMapUv:D&&M(w.transmissionMap.channel),thicknessMapUv:rt&&M(w.thicknessMap.channel),alphaMapUv:K&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Gt||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Wt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Gt&&w.map.isVideoTexture===!0&&te.getTransfer(w.map.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===On,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Kt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&w.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function h(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(E(v,w),y(v,w),v.push(n.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function E(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function y(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),w.push(a.mask)}function T(w){const v=_[w.type];let P;if(v){const z=yn[v];P=Lp.clone(z.uniforms)}else P=w.uniforms;return P}function N(w,v){let P;for(let z=0,k=u.length;z<k;z++){const W=u[z];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new W_(n,v,w,s),u.push(P)),P}function A(w){if(--w.usedTimes===0){const v=u.indexOf(w);u[v]=u[u.length-1],u.pop(),w.destroy()}}function R(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:T,acquireProgram:N,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:I}}function $_(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function j_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function hu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,f,g,_,M,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:M,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=g,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=M,h.group=m),t++,h}function a(d,f,g,_,M,m){const h=o(d,f,g,_,M,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):e.push(h)}function c(d,f,g,_,M,m){const h=o(d,f,g,_,M,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||j_),i.length>1&&i.sort(f||uu),r.length>1&&r.sort(f||uu)}function u(){for(let d=t,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Z_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new hu,n.set(i,[o])):r>=s.length?(o=new hu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function J_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Q_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tv=0;function ev(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function nv(n){const t=new J_,e=Q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const r=new L,s=new he,o=new he;function a(l){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,_=0,M=0,m=0,h=0,E=0,y=0,T=0,N=0,A=0,R=0;l.sort(ev);for(let w=0,v=l.length;w<v;w++){const P=l[w],z=P.color,k=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=z.r*k,d+=z.g*k,f+=z.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],k);R++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=P.shadow.matrix,E++}i.directional[g]=V,g++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(k),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[M]=V;const j=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[M]=j.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=Y,T++}M++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(z).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=P.shadow.matrix,y++}i.point[_]=V,_++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[h]=V,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==g||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==m||I.hemiLength!==h||I.numDirectionalShadows!==E||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==N||I.numLightProbes!==R)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.directionalLength=g,I.pointLength=_,I.spotLength=M,I.rectAreaLength=m,I.hemiLength=h,I.numDirectionalShadows=E,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=N,I.numLightProbes=R,i.version=tv++)}function c(l,u){let d=0,f=0,g=0,_=0,M=0;const m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const y=l[h];if(y.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const T=i.hemi[M];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:i}}function du(n){const t=new nv(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function iv(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new du(n),t.set(r,[a])):s>=o.length?(a=new du(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class rv extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sv extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(n,t,e){let i=new Fc;const r=new zt,s=new zt,o=new le,a=new rv({depthPacking:kf}),c=new sv,l={},u=e.maxTextureSize,d={[ri]:Fe,[Fe]:ri,[On]:On},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ov,fragmentShader:av}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Q(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let h=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=h!==Fn&&this.type===Fn,W=h===Fn&&this.type!==Fn;for(let Y=0,V=A.length;Y<V;Y++){const j=A[Y],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ut=G.getFrameExtents();if(r.multiply(ut),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ut.x),r.x=s.x*ut.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ut.y),r.y=s.y*ut.y,G.mapSize.y=s.y)),G.map===null||k===!0||W===!0){const Mt=this.type!==Fn?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new Ui(r.x,r.y,Mt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const pt=G.getViewportCount();for(let Mt=0;Mt<pt;Mt++){const Wt=G.getViewport(Mt);o.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),z.viewport(o),G.updateMatrices(j,Mt),i=G.getFrustum(),T(R,I,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Fn&&E(G,I),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,v,P)};function E(A,R){const I=t.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,M,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,I,g,M,null)}function y(A,R,I,w){let v=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=v.uuid,k=R.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Y=W[k];Y===void 0&&(Y=v.clone(),W[k]=Y,R.addEventListener("dispose",N)),v=Y}if(v.visible=R.visible,v.wireframe=R.wireframe,w===Fn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=n.properties.get(v);z.light=I}return v}function T(A,R,I,w,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const Y=k.groups;for(let V=0,j=Y.length;V<j;V++){const G=Y[V],ut=W[G.materialIndex];if(ut&&ut.visible){const pt=y(A,ut,w,v);A.onBeforeShadow(n,A,R,I,k,pt,G),n.renderBufferDirect(I,null,k,pt,A,G),A.onAfterShadow(n,A,R,I,k,pt,G)}}}else if(W.visible){const Y=y(A,W,w,v);A.onBeforeShadow(n,A,R,I,k,Y,null),n.renderBufferDirect(I,null,k,Y,A,null),A.onAfterShadow(n,A,R,I,k,Y,null)}}const z=A.children;for(let k=0,W=z.length;k<W;k++)T(z[k],R,I,w,v)}function N(A){A.target.removeEventListener("dispose",N);for(const I in l){const w=l[I],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}function lv(n){function t(){let D=!1;const rt=new le;let q=null;const K=new le(0,0,0,0);return{setMask:function(ot){q!==ot&&!D&&(n.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){D=ot},setClear:function(ot,bt,Kt,xe,Ie){Ie===!0&&(ot*=xe,bt*=xe,Kt*=xe),rt.set(ot,bt,Kt,xe),K.equals(rt)===!1&&(n.clearColor(ot,bt,Kt,xe),K.copy(rt))},reset:function(){D=!1,q=null,K.set(-1,0,0,0)}}}function e(){let D=!1,rt=null,q=null,K=null;return{setTest:function(ot){ot?gt(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(ot){rt!==ot&&!D&&(n.depthMask(ot),rt=ot)},setFunc:function(ot){if(q!==ot){switch(ot){case yf:n.depthFunc(n.NEVER);break;case Ef:n.depthFunc(n.ALWAYS);break;case wf:n.depthFunc(n.LESS);break;case lo:n.depthFunc(n.LEQUAL);break;case Tf:n.depthFunc(n.EQUAL);break;case bf:n.depthFunc(n.GEQUAL);break;case Af:n.depthFunc(n.GREATER);break;case Rf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ot}},setLocked:function(ot){D=ot},setClear:function(ot){K!==ot&&(n.clearDepth(ot),K=ot)},reset:function(){D=!1,rt=null,q=null,K=null}}}function i(){let D=!1,rt=null,q=null,K=null,ot=null,bt=null,Kt=null,xe=null,Ie=null;return{setTest:function(jt){D||(jt?gt(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(jt){rt!==jt&&!D&&(n.stencilMask(jt),rt=jt)},setFunc:function(jt,Cn,Sn){(q!==jt||K!==Cn||ot!==Sn)&&(n.stencilFunc(jt,Cn,Sn),q=jt,K=Cn,ot=Sn)},setOp:function(jt,Cn,Sn){(bt!==jt||Kt!==Cn||xe!==Sn)&&(n.stencilOp(jt,Cn,Sn),bt=jt,Kt=Cn,xe=Sn)},setLocked:function(jt){D=jt},setClear:function(jt){Ie!==jt&&(n.clearStencil(jt),Ie=jt)},reset:function(){D=!1,rt=null,q=null,K=null,ot=null,bt=null,Kt=null,xe=null,Ie=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],g=null,_=!1,M=null,m=null,h=null,E=null,y=null,T=null,N=null,A=new Tt(0,0,0),R=0,I=!1,w=null,v=null,P=null,z=null,k=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=V>=2);let G=null,ut={};const pt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Wt=new le().fromArray(pt),ne=new le().fromArray(Mt);function X(D,rt,q,K){const ot=new Uint8Array(4),bt=n.createTexture();n.bindTexture(D,bt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<q;Kt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(rt+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return bt}const nt={};nt[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),s.setFunc(lo),ie(!1),yt(vl),gt(n.CULL_FACE),_e(ni);function gt(D){l[D]!==!0&&(n.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(n.disable(D),l[D]=!1)}function Ut(D,rt){return u[D]!==rt?(n.bindFramebuffer(D,rt),u[D]=rt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=rt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function kt(D,rt){let q=f,K=!1;if(D){q=d.get(rt),q===void 0&&(q=[],d.set(rt,q));const ot=D.textures;if(q.length!==ot.length||q[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Kt=ot.length;bt<Kt;bt++)q[bt]=n.COLOR_ATTACHMENT0+bt;q.length=ot.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function Gt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const pe={[yi]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[of]:n.FUNC_REVERSE_SUBTRACT};pe[af]=n.MIN,pe[cf]=n.MAX;const C={[lf]:n.ZERO,[uf]:n.ONE,[hf]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[_f]:n.SRC_ALPHA_SATURATE,[mf]:n.DST_COLOR,[ff]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[La]:n.ONE_MINUS_SRC_ALPHA,[gf]:n.ONE_MINUS_DST_COLOR,[pf]:n.ONE_MINUS_DST_ALPHA,[vf]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[Sf]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(D,rt,q,K,ot,bt,Kt,xe,Ie,jt){if(D===ni){_===!0&&(dt(n.BLEND),_=!1);return}if(_===!1&&(gt(n.BLEND),_=!0),D!==rf){if(D!==M||jt!==I){if((m!==yi||y!==yi)&&(n.blendEquation(n.FUNC_ADD),m=yi,y=yi),jt)switch(D){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,E=null,T=null,N=null,A.set(0,0,0),R=0,M=D,I=jt}return}ot=ot||rt,bt=bt||q,Kt=Kt||K,(rt!==m||ot!==y)&&(n.blendEquationSeparate(pe[rt],pe[ot]),m=rt,y=ot),(q!==h||K!==E||bt!==T||Kt!==N)&&(n.blendFuncSeparate(C[q],C[K],C[bt],C[Kt]),h=q,E=K,T=bt,N=Kt),(xe.equals(A)===!1||Ie!==R)&&(n.blendColor(xe.r,xe.g,xe.b,Ie),A.copy(xe),R=Ie),M=D,I=!1}function ee(D,rt){D.side===On?dt(n.CULL_FACE):gt(n.CULL_FACE);let q=D.side===Fe;rt&&(q=!q),ie(q),D.blending===hr&&D.transparent===!1?_e(ni):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(D){w!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),w=D)}function yt(D){D!==ef?(gt(n.CULL_FACE),D!==v&&(D===vl?n.cullFace(n.BACK):D===nf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),v=D}function ve(D){D!==P&&(Y&&n.lineWidth(D),P=D)}function Pt(D,rt,q){D?(gt(n.POLYGON_OFFSET_FILL),(z!==rt||k!==q)&&(n.polygonOffset(rt,q),z=rt,k=q)):dt(n.POLYGON_OFFSET_FILL)}function Nt(D){D?gt(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function b(D){D===void 0&&(D=n.TEXTURE0+W-1),G!==D&&(n.activeTexture(D),G=D)}function x(D,rt,q){q===void 0&&(G===null?q=n.TEXTURE0+W-1:q=G);let K=ut[q];K===void 0&&(K={type:void 0,texture:void 0},ut[q]=K),(K.type!==D||K.texture!==rt)&&(G!==q&&(n.activeTexture(q),G=q),n.bindTexture(D,rt||nt[D]),K.type=D,K.texture=rt)}function H(){const D=ut[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){Wt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function mt(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Lt(D,rt){let q=c.get(rt);q===void 0&&(q=new WeakMap,c.set(rt,q));let K=q.get(D);K===void 0&&(K=n.getUniformBlockIndex(rt,D.name),q.set(D,K))}function Ht(D,rt){const K=c.get(rt).get(D);a.get(rt)!==K&&(n.uniformBlockBinding(rt,K,D.__bindingPointIndex),a.set(rt,K))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,ut={},u={},d=new WeakMap,f=[],g=null,_=!1,M=null,m=null,h=null,E=null,y=null,T=null,N=null,A=new Tt(0,0,0),R=0,I=!1,w=null,v=null,P=null,z=null,k=null,Wt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:gt,disable:dt,bindFramebuffer:Ut,drawBuffers:kt,useProgram:Gt,setBlending:_e,setMaterial:ee,setFlipSided:ie,setCullFace:yt,setLineWidth:ve,setPolygonOffset:Pt,setScissorTest:Nt,activeTexture:b,bindTexture:x,unbindTexture:H,compressedTexImage2D:tt,compressedTexImage3D:et,texImage2D:ht,texImage3D:Xt,updateUBOMapping:Lt,uniformBlockBinding:Ht,texStorage2D:Ft,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:de}}function fu(n,t,e,i){const r=uv(i);switch(e){case eh:return n*t;case ih:return n*t;case rh:return n*t*2;case sh:return n*t/r.components*r.byteLength;case Cc:return n*t/r.components*r.byteLength;case oh:return n*t*2/r.components*r.byteLength;case Pc:return n*t*2/r.components*r.byteLength;case nh:return n*t*3/r.components*r.byteLength;case gn:return n*t*4/r.components*r.byteLength;case Lc:return n*t*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(n,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case no:case ic:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ah:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uv(n){switch(n){case Gn:case Ju:return{byteLength:1,components:1};case rs:case Qu:case cs:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Di:case bc:case zn:return{byteLength:4,components:1};case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hv(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,u=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return g?new OffscreenCanvas(b,x):mo("canvas")}function M(b,x,H){let tt=1;const et=Nt(b);if((et.width>H||et.height>H)&&(tt=H/Math.max(et.width,et.height)),tt<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(tt*et.width),Et=Math.floor(tt*et.height);d===void 0&&(d=_(Z,Et));const ct=x?_(Z,Et):d;return ct.width=Z,ct.height=Et,ct.getContext("2d").drawImage(b,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Et+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==on&&b.minFilter!==pn}function h(b){n.generateMipmap(b)}function E(b,x,H,tt,et=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),x===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const Et=et?uo:te.getTransfer(tt);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=Et===ae?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(b,x){let H;return b?x===null||x===Di||x===vr?H=n.DEPTH24_STENCIL8:x===zn?H=n.DEPTH32F_STENCIL8:x===rs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===vr?H=n.DEPTH_COMPONENT24:x===zn?H=n.DEPTH_COMPONENT32F:x===rs&&(H=n.DEPTH_COMPONENT16),H}function T(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==on&&b.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function N(b){const x=b.target;x.removeEventListener("dispose",N),R(x),x.isVideoTexture&&u.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),w(x)}function R(b){const x=i.get(b);if(x.__webglInit===void 0)return;const H=b.source,tt=f.get(H);if(tt){const et=tt[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(b),Object.keys(tt).length===0&&f.delete(H)}i.remove(b)}function I(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const H=b.source,tt=f.get(H);delete tt[x.__cacheKey],o.memory.textures--}function w(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let et=0;et<x.__webglFramebuffer[tt].length;et++)n.deleteFramebuffer(x.__webglFramebuffer[tt][et]);else n.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[tt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=b.textures;for(let tt=0,et=H.length;tt<et;tt++){const Z=i.get(H[tt]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(H[tt])}i.remove(b)}let v=0;function P(){v=0}function z(){const b=v;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),v+=1,b}function k(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function W(b,x){const H=i.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const tt=b.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,b,x);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function Y(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ne(H,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function V(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ne(H,b,x);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function j(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){X(H,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const G={[Ua]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},ut={[on]:n.NEAREST,[Bf]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},pt={[Gf]:n.NEVER,[Kf]:n.ALWAYS,[Vf]:n.LESS,[lh]:n.LEQUAL,[Wf]:n.EQUAL,[Yf]:n.GEQUAL,[Xf]:n.GREATER,[qf]:n.NOTEQUAL};function Mt(b,x){if(x.type===zn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===Ko||x.magFilter===Ss||x.magFilter===Ai||x.minFilter===pn||x.minFilter===Ko||x.minFilter===Ss||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,G[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,G[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,G[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ut[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Ss&&x.minFilter!==Ai||x.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(b,x){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N));const tt=x.source;let et=f.get(tt);et===void 0&&(et={},f.set(tt,et));const Z=k(x);if(Z!==b.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[Z].usedTimes++;const Et=et[b.__cacheKey];Et!==void 0&&(et[b.__cacheKey].usedTimes--,Et.usedTimes===0&&I(x)),b.__cacheKey=Z,b.__webglTexture=et[Z].texture}return H}function ne(b,x,H){let tt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=n.TEXTURE_3D);const et=Wt(b,x),Z=x.source;e.bindTexture(tt,b.__webglTexture,n.TEXTURE0+H);const Et=i.get(Z);if(Z.version!==Et.__version||et===!0){e.activeTexture(n.TEXTURE0+H);const ct=te.getPrimaries(te.workingColorSpace),ft=x.colorSpace===ei?null:te.getPrimaries(x.colorSpace),Ft=x.colorSpace===ei||ct===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let it=M(x.image,!1,r.maxTextureSize);it=Pt(x,it);const ht=s.convert(x.format,x.colorSpace),Xt=s.convert(x.type);let Ct=E(x.internalFormat,ht,Xt,x.colorSpace,x.isVideoTexture);Mt(tt,x);let mt;const Lt=x.mipmaps,Ht=x.isVideoTexture!==!0,de=Et.__version===void 0||et===!0,D=Z.dataReady,rt=T(x,it);if(x.isDepthTexture)Ct=y(x.format===xr,x.type),de&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Ct,it.width,it.height,0,ht,Xt,null));else if(x.isDataTexture)if(Lt.length>0){Ht&&de&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,Lt[0].width,Lt[0].height);for(let q=0,K=Lt.length;q<K;q++)mt=Lt[q],Ht?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,Xt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Ct,mt.width,mt.height,0,ht,Xt,mt.data);x.generateMipmaps=!1}else Ht?(de&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,it.width,it.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,ht,Xt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,it.width,it.height,0,ht,Xt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ct,Lt[0].width,Lt[0].height,it.depth);for(let q=0,K=Lt.length;q<K;q++)if(mt=Lt[q],x.format!==gn)if(ht!==null)if(Ht){if(D)if(x.layerUpdates.size>0){const ot=fu(mt.width,mt.height,x.format,x.type);for(const bt of x.layerUpdates){const Kt=mt.data.subarray(bt*ot/mt.data.BYTES_PER_ELEMENT,(bt+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,bt,mt.width,mt.height,1,ht,Kt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,ht,mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ct,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,ht,Xt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ct,mt.width,mt.height,it.depth,0,ht,Xt,mt.data)}else{Ht&&de&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,Lt[0].width,Lt[0].height);for(let q=0,K=Lt.length;q<K;q++)mt=Lt[q],x.format!==gn?ht!==null?Ht?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,Xt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Ct,mt.width,mt.height,0,ht,Xt,mt.data)}else if(x.isDataArrayTexture)if(Ht){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ct,it.width,it.height,it.depth),D)if(x.layerUpdates.size>0){const q=fu(it.width,it.height,x.format,x.type);for(const K of x.layerUpdates){const ot=it.data.subarray(K*q/it.data.BYTES_PER_ELEMENT,(K+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ht,Xt,ot)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,Xt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,ht,Xt,it.data);else if(x.isData3DTexture)Ht?(de&&e.texStorage3D(n.TEXTURE_3D,rt,Ct,it.width,it.height,it.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,Xt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,ht,Xt,it.data);else if(x.isFramebufferTexture){if(de)if(Ht)e.texStorage2D(n.TEXTURE_2D,rt,Ct,it.width,it.height);else{let q=it.width,K=it.height;for(let ot=0;ot<rt;ot++)e.texImage2D(n.TEXTURE_2D,ot,Ct,q,K,0,ht,Xt,null),q>>=1,K>>=1}}else if(Lt.length>0){if(Ht&&de){const q=Nt(Lt[0]);e.texStorage2D(n.TEXTURE_2D,rt,Ct,q.width,q.height)}for(let q=0,K=Lt.length;q<K;q++)mt=Lt[q],Ht?D&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,ht,Xt,mt):e.texImage2D(n.TEXTURE_2D,q,Ct,ht,Xt,mt);x.generateMipmaps=!1}else if(Ht){if(de){const q=Nt(it);e.texStorage2D(n.TEXTURE_2D,rt,Ct,q.width,q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Xt,it)}else e.texImage2D(n.TEXTURE_2D,0,Ct,ht,Xt,it);m(x)&&h(tt),Et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,H){if(x.image.length!==6)return;const tt=Wt(b,x),et=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const Z=i.get(et);if(et.version!==Z.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const Et=te.getPrimaries(te.workingColorSpace),ct=x.colorSpace===ei?null:te.getPrimaries(x.colorSpace),ft=x.colorSpace===ei||Et===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!Ft&&!it?ht[K]=M(x.image[K],!0,r.maxCubemapSize):ht[K]=it?x.image[K].image:x.image[K],ht[K]=Pt(x,ht[K]);const Xt=ht[0],Ct=s.convert(x.format,x.colorSpace),mt=s.convert(x.type),Lt=E(x.internalFormat,Ct,mt,x.colorSpace),Ht=x.isVideoTexture!==!0,de=Z.__version===void 0||tt===!0,D=et.dataReady;let rt=T(x,Xt);Mt(n.TEXTURE_CUBE_MAP,x);let q;if(Ft){Ht&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Lt,Xt.width,Xt.height);for(let K=0;K<6;K++){q=ht[K].mipmaps;for(let ot=0;ot<q.length;ot++){const bt=q[ot];x.format!==gn?Ct!==null?Ht?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,0,0,bt.width,bt.height,Ct,mt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot,Lt,bt.width,bt.height,0,Ct,mt,bt.data)}}}else{if(q=x.mipmaps,Ht&&de){q.length>0&&rt++;const K=Nt(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Lt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ht?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Ct,mt,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,ht[K].width,ht[K].height,0,Ct,mt,ht[K].data);for(let ot=0;ot<q.length;ot++){const Kt=q[ot].image[K].image;Ht?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Kt.width,Kt.height,Ct,mt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,Lt,Kt.width,Kt.height,0,Ct,mt,Kt.data)}}else{Ht?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,mt,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,Ct,mt,ht[K]);for(let ot=0;ot<q.length;ot++){const bt=q[ot];Ht?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,0,0,Ct,mt,bt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ot+1,Lt,Ct,mt,bt.image[K])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),Z.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function nt(b,x,H,tt,et,Z){const Et=s.convert(H.format,H.colorSpace),ct=s.convert(H.type),ft=E(H.internalFormat,Et,ct,H.colorSpace);if(!i.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>Z),ht=Math.max(1,x.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,ft,it,ht,x.depth,0,Et,ct,null):e.texImage2D(et,Z,ft,it,ht,0,Et,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),yt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,et,i.get(H).__webglTexture,0,ie(x)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,et,i.get(H).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(b,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const tt=x.depthTexture,et=tt&&tt.isDepthTexture?tt.type:null,Z=y(x.stencilBuffer,et),Et=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=ie(x);yt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Z,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,b)}else{const tt=x.textures;for(let et=0;et<tt.length;et++){const Z=tt[et],Et=s.convert(Z.format,Z.colorSpace),ct=s.convert(Z.type),ft=E(Z.internalFormat,Et,ct,Z.colorSpace),Ft=ie(x);H&&yt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,ft,x.width,x.height):yt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const tt=i.get(x.depthTexture).__webglTexture,et=ie(x);if(x.depthTexture.format===dr)yt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===xr)yt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ut(b){const x=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,b)}else if(H){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]=n.createRenderbuffer(),gt(x.__webglDepthbuffer[tt],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),gt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(b,x,H){const tt=i.get(b);x!==void 0&&nt(tt.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ut(b)}function Gt(b){const x=b.texture,H=i.get(b),tt=i.get(x);b.addEventListener("dispose",A);const et=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=x.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let ft=0;ft<x.mipmaps.length;ft++)H.__webglFramebuffer[ct][ft]=n.createFramebuffer()}else H.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)H.__webglFramebuffer[ct]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ct=0,ft=et.length;ct<ft;ct++){const Ft=i.get(et[ct]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&yt(b)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const ft=et[ct];H.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const Ft=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),ht=E(ft.internalFormat,Ft,it,ft.colorSpace,b.isXRRenderTarget===!0),Xt=ie(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)nt(H.__webglFramebuffer[ct][ft],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else nt(H.__webglFramebuffer[ct],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,ft=et.length;ct<ft;ct++){const Ft=et[ct],it=i.get(Ft);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Mt(n.TEXTURE_2D,Ft),nt(H.__webglFramebuffer,b,Ft,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Ft)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),Mt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)nt(H.__webglFramebuffer[ft],b,x,n.COLOR_ATTACHMENT0,ct,ft);else nt(H.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ct,0);m(x)&&h(ct),e.unbindTexture()}b.depthBuffer&&Ut(b)}function pe(b){const x=b.textures;for(let H=0,tt=x.length;H<tt;H++){const et=x[H];if(m(et)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Et=i.get(et).__webglTexture;e.bindTexture(Z,Et),h(Z),e.unbindTexture()}}}const C=[],_e=[];function ee(b){if(b.samples>0){if(yt(b)===!1){const x=b.textures,H=b.width,tt=b.height;let et=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(b),ct=x.length>1;if(ct)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Ft=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,H,tt,0,0,H,tt,et,n.NEAREST),c===!0&&(C.length=0,_e.length=0,C.push(n.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(C.push(Z),_e.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Ft=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ie(b){return Math.min(r.maxSamples,b.samples)}function yt(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Pt(b,x){const H=b.colorSpace,tt=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==ci&&H!==ei&&(te.getTransfer(H)===ae?(tt!==gn||et!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=yt}function dv(n,t){function e(i,r=ei){let s;const o=te.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===rs)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===cs)return n.HALF_FLOAT;if(i===eh)return n.ALPHA;if(i===nh)return n.RGB;if(i===gn)return n.RGBA;if(i===ih)return n.LUMINANCE;if(i===rh)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===Cc)return n.RED_INTEGER;if(i===oh)return n.RG;if(i===Pc)return n.RG_INTEGER;if(i===Lc)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===to||i===eo)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ka||i===Ha||i===Ga)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ka||i===Ha)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ga)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===ja||i===Za||i===Ja||i===Qa||i===tc||i===ec||i===nc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Va)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ka)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$a)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===ic||i===rc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===no)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ah||i===sc||i===oc||i===ac)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class fv extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),h=this._getHandJoint(l,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,_=.005;l.inputState.pinching&&f>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new si({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vv extends Cr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,g=null,_=null;const M=new _v,m=e.getContextAttributes();let h=null,E=null;const y=[],T=[],N=new zt;let A=null;const R=new je;R.layers.enable(1),R.viewport=new le;const I=new je;I.layers.enable(2),I.viewport=new le;const w=[R,I],v=new fv;v.layers.enable(1),v.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=y[X];return nt===void 0&&(nt=new xa,y[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=y[X];return nt===void 0&&(nt=new xa,y[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=y[X];return nt===void 0&&(nt=new xa,y[X]=nt),nt.getHandSpace()};function k(X){const nt=T.indexOf(X.inputSource);if(nt===-1)return;const gt=y[nt];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<y.length;X++){const nt=T[X];nt!==null&&(T[X]=null,y[X].disconnect(nt))}P=null,z=null,M.reset(),t.setRenderTarget(h),g=null,f=null,d=null,r=null,E=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ui(g.framebufferWidth,g.framebufferHeight,{format:gn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,gt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?xr:dr,gt=m.stencil?vr:Di);const Ut={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Ut),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ui(f.textureWidth,f.textureHeight,{format:gn,type:Gn,depthTexture:new Sh(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(X){for(let nt=0;nt<X.removed.length;nt++){const gt=X.removed[nt],dt=T.indexOf(gt);dt>=0&&(T[dt]=null,y[dt].disconnect(gt))}for(let nt=0;nt<X.added.length;nt++){const gt=X.added[nt];let dt=T.indexOf(gt);if(dt===-1){for(let kt=0;kt<y.length;kt++)if(kt>=T.length){T.push(gt),dt=kt;break}else if(T[kt]===null){T[kt]=gt,dt=kt;break}if(dt===-1)break}const Ut=y[dt];Ut&&Ut.connect(gt)}}const V=new L,j=new L;function G(X,nt,gt){V.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const dt=V.distanceTo(j),Ut=nt.projectionMatrix.elements,kt=gt.projectionMatrix.elements,Gt=Ut[14]/(Ut[10]-1),pe=Ut[14]/(Ut[10]+1),C=(Ut[9]+1)/Ut[5],_e=(Ut[9]-1)/Ut[5],ee=(Ut[8]-1)/Ut[0],ie=(kt[8]+1)/kt[0],yt=Gt*ee,ve=Gt*ie,Pt=dt/(-ee+ie),Nt=Pt*-ee;nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(Pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=Gt+Pt,x=pe+Pt,H=yt-Nt,tt=ve+(dt-Nt),et=C*pe/x*b,Z=_e*pe/x*b;X.projectionMatrix.makePerspective(H,tt,et,Z,b,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ut(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.texture!==null&&(X.near=M.depthNear,X.far=M.depthFar),v.near=I.near=R.near=X.near,v.far=I.far=R.far=X.far,(P!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,z=v.far,R.near=P,R.far=z,I.near=P,I.far=z,R.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const nt=X.parent,gt=v.cameras;ut(v,nt);for(let dt=0;dt<gt.length;dt++)ut(gt[dt],nt);gt.length===2?G(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),pt(X,v,nt)};function pt(X,nt,gt){gt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ss*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let Mt=null;function Wt(X,nt){if(u=nt.getViewerPose(l||o),_=nt,u!==null){const gt=u.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let dt=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let kt=0;kt<gt.length;kt++){const Gt=gt[kt];let pe=null;if(g!==null)pe=g.getViewport(Gt);else{const _e=d.getViewSubImage(f,Gt);pe=_e.viewport,kt===0&&(t.setRenderTargetTextures(E,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(E))}let C=w[kt];C===void 0&&(C=new je,C.layers.enable(kt),C.viewport=new le,w[kt]=C),C.matrix.fromArray(Gt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Gt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(pe.x,pe.y,pe.width,pe.height),kt===0&&(v.matrix.copy(C.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(C)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const kt=d.getDepthInformation(gt[0]);kt&&kt.isValid&&kt.texture&&M.init(t,kt,r.renderState)}}for(let gt=0;gt<y.length;gt++){const dt=T[gt],Ut=y[gt];dt!==null&&Ut!==void 0&&Ut.update(dt,nt,l||o)}Mt&&Mt(X,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}const ne=new xh;ne.setAnimationLoop(Wt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}}const _i=new Tn,xv=new he;function Mv(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,gh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,y,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&g(m,h,T)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),M(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,E,y):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fe&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fe&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=t.get(h),y=E.envMap,T=E.envMapRotation;y&&(m.envMap.value=y,_i.copy(T),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=y*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fe&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const E=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sv(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const T=y.program;i.uniformBlockBinding(E,T)}function l(E,y){let T=r[E.id];T===void 0&&(_(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",m));const N=y.program;i.updateUBOMapping(E,N);const A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const y=d();E.__bindingPointIndex=y;const T=n.createBuffer(),N=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,N,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=r[E.id],T=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=T.length;A<R;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let w=0,v=I.length;w<v;w++){const P=I[w];if(g(P,A,w,N)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<k.length;Y++){const V=k[Y],j=M(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,y,T,N){const A=E.value,R=y+"_"+T;if(N[R]===void 0)return typeof A=="number"||typeof A=="boolean"?N[R]=A:N[R]=A.clone(),!0;{const I=N[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return N[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(E){const y=E.uniforms;let T=0;const N=16;for(let R=0,I=y.length;R<I;R++){const w=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,P=w.length;v<P;v++){const z=w[v],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=k.length;W<Y;W++){const V=k[W],j=M(V),G=T%N,ut=G%j.boundary,pt=G+ut;T+=ut,pt!==0&&N-pt<j.storage&&(T+=N-pt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=j.storage}}}const A=T%N;return A>0&&(T+=N-A),E.__size=T,E.__cache={},this}function M(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class yv{constructor(t={}){const{canvas:e=dp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const h=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let T=!1,N=0,A=0,R=null,I=-1,w=null;const v=new le,P=new le;let z=null;const k=new Tt(0);let W=0,Y=e.width,V=e.height,j=1,G=null,ut=null;const pt=new le(0,0,Y,V),Mt=new le(0,0,Y,V);let Wt=!1;const ne=new Fc;let X=!1,nt=!1;const gt=new he,dt=new L,Ut=new le,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function pe(){return R===null?j:1}let C=i;function _e(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",ot,!1),C===null){const U="webgl2";if(C=_e(U,S),C===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ee,ie,yt,ve,Pt,Nt,b,x,H,tt,et,Z,Et,ct,ft,Ft,it,ht,Xt,Ct,mt,Lt,Ht,de;function D(){ee=new Rg(C),ee.init(),Lt=new dv(C,ee),ie=new yg(C,ee,t,Lt),yt=new lv(C),ve=new Lg(C),Pt=new $_,Nt=new hv(C,ee,yt,Pt,ie,Lt,ve),b=new wg(y),x=new Ag(y),H=new Bp(C),Ht=new Mg(C,H),tt=new Cg(C,H,ve,Ht),et=new Dg(C,tt,H,ve),Xt=new Ig(C,ie,Nt),Ft=new Eg(Pt),Z=new K_(y,b,x,ee,ie,Ht,Ft),Et=new Mv(y,Pt),ct=new Z_,ft=new iv(ee),ht=new xg(y,b,x,yt,et,f,c),it=new cv(y,et,ie),de=new Sv(C,ve,ie,yt),Ct=new Sg(C,ee,ve),mt=new Pg(C,ee,ve),ve.programs=Z.programs,y.capabilities=ie,y.extensions=ee,y.properties=Pt,y.renderLists=ct,y.shadowMap=it,y.state=yt,y.info=ve}D();const rt=new vv(y,C);this.xr=rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(Y,V,!1))},this.getSize=function(S){return S.set(Y,V)},this.setSize=function(S,U,O=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,V=U,e.width=Math.floor(S*j),e.height=Math.floor(U*j),O===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*j,V*j).floor()},this.setDrawingBufferSize=function(S,U,O){Y=S,V=U,j=O,e.width=Math.floor(S*O),e.height=Math.floor(U*O),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,O,B){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,O,B),yt.viewport(v.copy(pt).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Mt)},this.setScissor=function(S,U,O,B){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,U,O,B),yt.scissor(P.copy(Mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(S){yt.setScissorTest(Wt=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(S=!0,U=!0,O=!0){let B=0;if(S){let F=!1;if(R!==null){const st=R.texture.format;F=st===Lc||st===Pc||st===Cc}if(F){const st=R.texture.type,lt=st===Gn||st===Di||st===rs||st===vr||st===Ac||st===Rc,_t=ht.getClearColor(),vt=ht.getClearAlpha(),At=_t.r,Rt=_t.g,wt=_t.b;lt?(g[0]=At,g[1]=Rt,g[2]=wt,g[3]=vt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=At,_[1]=Rt,_[2]=wt,_[3]=vt,C.clearBufferiv(C.COLOR,0,_))}else B|=C.COLOR_BUFFER_BIT}U&&(B|=C.DEPTH_BUFFER_BIT),O&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ct.dispose(),ft.dispose(),Pt.dispose(),b.dispose(),x.dispose(),et.dispose(),Ht.dispose(),de.dispose(),Z.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Sn),rt.removeEventListener("sessionend",hl),hi.stop()};function q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ve.autoReset,U=it.enabled,O=it.autoUpdate,B=it.needsUpdate,F=it.type;D(),ve.autoReset=S,it.enabled=U,it.autoUpdate=O,it.needsUpdate=B,it.type=F}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function bt(S){const U=S.target;U.removeEventListener("dispose",bt),Kt(U)}function Kt(S){xe(S),Pt.remove(S)}function xe(S){const U=Pt.get(S).programs;U!==void 0&&(U.forEach(function(O){Z.releaseProgram(O)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,O,B,F,st){U===null&&(U=kt);const lt=F.isMesh&&F.matrixWorld.determinant()<0,_t=Zd(S,U,O,B,F);yt.setMaterial(B,lt);let vt=O.index,At=1;if(B.wireframe===!0){if(vt=tt.getWireframeAttribute(O),vt===void 0)return;At=2}const Rt=O.drawRange,wt=O.attributes.position;let Zt=Rt.start*At,me=(Rt.start+Rt.count)*At;st!==null&&(Zt=Math.max(Zt,st.start*At),me=Math.min(me,(st.start+st.count)*At)),vt!==null?(Zt=Math.max(Zt,0),me=Math.min(me,vt.count)):wt!=null&&(Zt=Math.max(Zt,0),me=Math.min(me,wt.count));const ge=me-Zt;if(ge<0||ge===1/0)return;Ht.setup(F,B,_t,O,vt);let qe,Jt=Ct;if(vt!==null&&(qe=H.get(vt),Jt=mt,Jt.setIndex(qe)),F.isMesh)B.wireframe===!0?(yt.setLineWidth(B.wireframeLinewidth*pe()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(F.isLine){let St=B.linewidth;St===void 0&&(St=1),yt.setLineWidth(St*pe()),F.isLineSegments?Jt.setMode(C.LINES):F.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else F.isPoints?Jt.setMode(C.POINTS):F.isSprite&&Jt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,De=F._multiDrawCounts,Qt=F._multiDrawCount,ln=vt?H.get(vt).bytesPerElement:1,Hi=Pt.get(B).currentProgram.getUniforms();for(let Ye=0;Ye<Qt;Ye++)Hi.setValue(C,"_gl_DrawID",Ye),Jt.render(St[Ye]/ln,De[Ye])}else if(F.isInstancedMesh)Jt.renderInstances(Zt,ge,F.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,De=Math.min(O.instanceCount,St);Jt.renderInstances(Zt,ge,De)}else Jt.render(Zt,ge)};function Ie(S,U,O){S.transparent===!0&&S.side===On&&S.forceSinglePass===!1?(S.side=Fe,S.needsUpdate=!0,Ms(S,U,O),S.side=ri,S.needsUpdate=!0,Ms(S,U,O),S.side=On):Ms(S,U,O)}this.compile=function(S,U,O=null){O===null&&(O=S),m=ft.get(O),m.init(U),E.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==O&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const B=new Set;return S.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let lt=0;lt<st.length;lt++){const _t=st[lt];Ie(_t,O,F),B.add(_t)}else Ie(st,O,F),B.add(st)}),E.pop(),m=null,B},this.compileAsync=function(S,U,O=null){const B=this.compile(S,U,O);return new Promise(F=>{function st(){if(B.forEach(function(lt){Pt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){F(S);return}setTimeout(st,10)}ee.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let jt=null;function Cn(S){jt&&jt(S)}function Sn(){hi.stop()}function hl(){hi.start()}const hi=new xh;hi.setAnimationLoop(Cn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){jt=S,rt.setAnimationLoop(S),S===null?hi.stop():hi.start()},rt.addEventListener("sessionstart",Sn),rt.addEventListener("sessionend",hl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,R),m=ft.get(S,E.length),m.init(U),E.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(gt),nt=this.localClippingEnabled,X=Ft.init(this.clippingPlanes,nt),M=ct.get(S,h.length),M.init(),h.push(M),rt.enabled===!0&&rt.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&Wo(st,U,-1/0,y.sortObjects)}Wo(S,U,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(G,ut),Gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Gt&&ht.addToRenderList(M,S),this.info.render.frame++,X===!0&&Ft.beginShadows();const O=m.state.shadowsArray;it.render(O,S,U),X===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=M.opaque,F=M.transmissive;if(m.setupLights(),U.isArrayCamera){const st=U.cameras;if(F.length>0)for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];fl(B,F,S,vt)}Gt&&ht.render(S);for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];dl(M,S,vt,vt.viewport)}}else F.length>0&&fl(B,F,S,U),Gt&&ht.render(S),dl(M,S,U);R!==null&&(Nt.updateMultisampleRenderTarget(R),Nt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,U),Ht.resetDefaultState(),I=-1,w=null,E.pop(),E.length>0?(m=E[E.length-1],X===!0&&Ft.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?M=h[h.length-1]:M=null};function Wo(S,U,O,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){B&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const lt=et.update(S),_t=S.material;_t.visible&&M.push(S,lt,_t,O,Ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const lt=et.update(S),_t=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ut.copy(lt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(_t)){const vt=lt.groups;for(let At=0,Rt=vt.length;At<Rt;At++){const wt=vt[At],Zt=_t[wt.materialIndex];Zt&&Zt.visible&&M.push(S,lt,Zt,O,Ut.z,wt)}}else _t.visible&&M.push(S,lt,_t,O,Ut.z,null)}}const st=S.children;for(let lt=0,_t=st.length;lt<_t;lt++)Wo(st[lt],U,O,B)}function dl(S,U,O,B){const F=S.opaque,st=S.transmissive,lt=S.transparent;m.setupLightsView(O),X===!0&&Ft.setGlobalState(y.clippingPlanes,O),B&&yt.viewport(v.copy(B)),F.length>0&&xs(F,U,O),st.length>0&&xs(st,U,O),lt.length>0&&xs(lt,U,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function fl(S,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Ui(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?cs:Gn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const st=m.state.transmissionRenderTarget[B.id],lt=B.viewport||v;st.setSize(lt.z,lt.w);const _t=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(k),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&ht.render(O);const vt=y.toneMapping;y.toneMapping=ii;const At=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&Ft.setGlobalState(y.clippingPlanes,B),xs(S,O,B),Nt.updateMultisampleRenderTarget(st),Nt.updateRenderTargetMipmap(st),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let wt=0,Zt=U.length;wt<Zt;wt++){const me=U[wt],ge=me.object,qe=me.geometry,Jt=me.material,St=me.group;if(Jt.side===On&&ge.layers.test(B.layers)){const De=Jt.side;Jt.side=Fe,Jt.needsUpdate=!0,pl(ge,O,B,qe,Jt,St),Jt.side=De,Jt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Nt.updateMultisampleRenderTarget(st),Nt.updateRenderTargetMipmap(st))}y.setRenderTarget(_t),y.setClearColor(k,W),At!==void 0&&(B.viewport=At),y.toneMapping=vt}function xs(S,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,st=S.length;F<st;F++){const lt=S[F],_t=lt.object,vt=lt.geometry,At=B===null?lt.material:B,Rt=lt.group;_t.layers.test(O.layers)&&pl(_t,U,O,vt,At,Rt)}}function pl(S,U,O,B,F,st){S.onBeforeRender(y,U,O,B,F,st),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,y.renderBufferDirect(O,U,B,F,S,st),F.side=ri,F.needsUpdate=!0,y.renderBufferDirect(O,U,B,F,S,st),F.side=On):y.renderBufferDirect(O,U,B,F,S,st),S.onAfterRender(y,U,O,B,F,st)}function Ms(S,U,O){U.isScene!==!0&&(U=kt);const B=Pt.get(S),F=m.state.lights,st=m.state.shadowsArray,lt=F.state.version,_t=Z.getParameters(S,F.state,st,U,O),vt=Z.getProgramCacheKey(_t);let At=B.programs;B.environment=S.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(S.isMeshStandardMaterial?x:b).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,At===void 0&&(S.addEventListener("dispose",bt),At=new Map,B.programs=At);let Rt=At.get(vt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===lt)return gl(S,_t),Rt}else _t.uniforms=Z.getUniforms(S),S.onBeforeCompile(_t,y),Rt=Z.acquireProgram(_t,vt),At.set(vt,Rt),B.uniforms=_t.uniforms;const wt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(wt.clippingPlanes=Ft.uniform),gl(S,_t),B.needsLights=Qd(S),B.lightsStateVersion=lt,B.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function ml(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=io.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function gl(S,U){const O=Pt.get(S);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Zd(S,U,O,B,F){U.isScene!==!0&&(U=kt),Nt.resetTextureUnits();const st=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,_t=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ci,vt=(B.isMeshStandardMaterial?x:b).get(B.envMap||lt),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Rt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!O.morphAttributes.position,Zt=!!O.morphAttributes.normal,me=!!O.morphAttributes.color;let ge=ii;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=y.toneMapping);const qe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Jt=qe!==void 0?qe.length:0,St=Pt.get(B),De=m.state.lights;if(X===!0&&(nt===!0||S!==w)){const en=S===w&&B.id===I;Ft.setState(B,S,en)}let Qt=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==De.state.version||St.outputColorSpace!==_t||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==vt||B.fog===!0&&St.fog!==st||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Ft.numPlanes||St.numIntersection!==Ft.numIntersection)||St.vertexAlphas!==At||St.vertexTangents!==Rt||St.morphTargets!==wt||St.morphNormals!==Zt||St.morphColors!==me||St.toneMapping!==ge||St.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,St.__version=B.version);let ln=St.currentProgram;Qt===!0&&(ln=Ms(B,U,F));let Hi=!1,Ye=!1,Xo=!1;const Me=ln.getUniforms(),Wn=St.uniforms;if(yt.useProgram(ln.program)&&(Hi=!0,Ye=!0,Xo=!0),B.id!==I&&(I=B.id,Ye=!0),Hi||w!==S){Me.setValue(C,"projectionMatrix",S.projectionMatrix),Me.setValue(C,"viewMatrix",S.matrixWorldInverse);const en=Me.map.cameraPosition;en!==void 0&&en.setValue(C,dt.setFromMatrixPosition(S.matrixWorld)),ie.logarithmicDepthBuffer&&Me.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Me.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,Ye=!0,Xo=!0)}if(F.isSkinnedMesh){Me.setOptional(C,F,"bindMatrix"),Me.setOptional(C,F,"bindMatrixInverse");const en=F.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Me.setValue(C,"boneTexture",en.boneTexture,Nt))}F.isBatchedMesh&&(Me.setOptional(C,F,"batchingTexture"),Me.setValue(C,"batchingTexture",F._matricesTexture,Nt),Me.setOptional(C,F,"batchingIdTexture"),Me.setValue(C,"batchingIdTexture",F._indirectTexture,Nt),Me.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Me.setValue(C,"batchingColorTexture",F._colorsTexture,Nt));const qo=O.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0)&&Xt.update(F,O,ln),(Ye||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,Me.setValue(C,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Wn.envMap.value=vt,Wn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Wn.envMapIntensity.value=U.environmentIntensity),Ye&&(Me.setValue(C,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&Jd(Wn,Xo),st&&B.fog===!0&&Et.refreshFogUniforms(Wn,st),Et.refreshMaterialUniforms(Wn,B,j,V,m.state.transmissionRenderTarget[S.id]),io.upload(C,ml(St),Wn,Nt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(io.upload(C,ml(St),Wn,Nt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Me.setValue(C,"center",F.center),Me.setValue(C,"modelViewMatrix",F.modelViewMatrix),Me.setValue(C,"normalMatrix",F.normalMatrix),Me.setValue(C,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const en=B.uniformsGroups;for(let Yo=0,tf=en.length;Yo<tf;Yo++){const _l=en[Yo];de.update(_l,ln),de.bind(_l,ln)}}return ln}function Jd(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,O){Pt.get(S.texture).__webglTexture=U,Pt.get(S.depthTexture).__webglTexture=O;const B=Pt.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const O=Pt.get(S);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,O=0){R=S,N=U,A=O;let B=!0,F=null,st=!1,lt=!1;if(S){const vt=Pt.get(S);vt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):vt.__webglFramebuffer===void 0?Nt.setupRenderTarget(S):vt.__hasExternalTextures&&Nt.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);const At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const Rt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?F=Rt[U][O]:F=Rt[U],st=!0):S.samples>0&&Nt.useMultisampledRTT(S)===!1?F=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[O]:F=Rt,v.copy(S.viewport),P.copy(S.scissor),z=S.scissorTest}else v.copy(pt).multiplyScalar(j).floor(),P.copy(Mt).multiplyScalar(j).floor(),z=Wt;if(yt.bindFramebuffer(C.FRAMEBUFFER,F)&&B&&yt.drawBuffers(S,F),yt.viewport(v),yt.scissor(P),yt.setScissorTest(z),st){const vt=Pt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,O)}else if(lt){const vt=Pt.get(S.texture),At=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,O||0,At)}I=-1},this.readRenderTargetPixels=function(S,U,O,B,F,st,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){yt.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=S.texture,At=vt.format,Rt=vt.type;if(!ie.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&O>=0&&O<=S.height-F&&C.readPixels(U,O,B,F,Lt.convert(At),Lt.convert(Rt),st)}finally{const vt=R!==null?Pt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,U,O,B,F,st,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){yt.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=S.texture,At=vt.format,Rt=vt.type;if(!ie.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-B&&O>=0&&O<=S.height-F){const wt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,O,B,F,Lt.convert(At),Lt.convert(Rt),0),C.flush();const Zt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await fp(C,Zt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st)}finally{C.deleteBuffer(wt),C.deleteSync(Zt)}return st}}finally{const vt=R!==null?Pt.get(R).__webglFramebuffer:null;yt.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(S,U=null,O=0){S.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-O),F=Math.floor(S.image.width*B),st=Math.floor(S.image.height*B),lt=U!==null?U.x:0,_t=U!==null?U.y:0;Nt.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,lt,_t,F,st),yt.unbindTexture()},this.copyTextureToTexture=function(S,U,O=null,B=null,F=0){S.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let st,lt,_t,vt,At,Rt;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.min.x,vt=O.min.y):(st=S.image.width,lt=S.image.height,_t=0,vt=0),B!==null?(At=B.x,Rt=B.y):(At=0,Rt=0);const wt=Lt.convert(U.format),Zt=Lt.convert(U.type);Nt.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const me=C.getParameter(C.UNPACK_ROW_LENGTH),ge=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qe=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),De=S.isCompressedTexture?S.mipmaps[F]:S.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,De.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,De.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,At,Rt,st,lt,wt,Zt,De.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,At,Rt,De.width,De.height,wt,De.data):C.texSubImage2D(C.TEXTURE_2D,F,At,Rt,st,lt,wt,Zt,De),C.pixelStorei(C.UNPACK_ROW_LENGTH,me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),F===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,O=null,B=null,F=0){S.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0);let st,lt,_t,vt,At,Rt,wt,Zt,me;const ge=S.isCompressedTexture?S.mipmaps[F]:S.image;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.max.z-O.min.z,vt=O.min.x,At=O.min.y,Rt=O.min.z):(st=ge.width,lt=ge.height,_t=ge.depth,vt=0,At=0,Rt=0),B!==null?(wt=B.x,Zt=B.y,me=B.z):(wt=0,Zt=0,me=0);const qe=Lt.convert(U.format),Jt=Lt.convert(U.type);let St;if(U.isData3DTexture)Nt.setTexture3D(U,0),St=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Nt.setTexture2DArray(U,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const De=C.getParameter(C.UNPACK_ROW_LENGTH),Qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ln=C.getParameter(C.UNPACK_SKIP_PIXELS),Hi=C.getParameter(C.UNPACK_SKIP_ROWS),Ye=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,At),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rt),S.isDataTexture||S.isData3DTexture?C.texSubImage3D(St,F,wt,Zt,me,st,lt,_t,qe,Jt,ge.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(St,F,wt,Zt,me,st,lt,_t,qe,ge.data):C.texSubImage3D(St,F,wt,Zt,me,st,lt,_t,qe,Jt,ge),C.pixelStorei(C.UNPACK_ROW_LENGTH,De),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,Hi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ye),F===0&&U.generateMipmaps&&C.generateMipmap(St),yt.unbindTexture()},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&Nt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Nt.setTextureCube(S,0):S.isData3DTexture?Nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Nt.setTexture2DArray(S,0):Nt.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){N=0,A=0,R=null,yt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ic?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===yo?"display-p3":"srgb"}}class Bc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new Bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ev extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bh extends Lr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pu=new he,lc=new Uc,Vs=new Eo,Ws=new L;class wv extends Le{constructor(t=new tn,e=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,t.ray.intersectsSphere(Vs)===!1)return;pu.copy(r).invert(),lc.copy(t.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=f,M=g;_<M;_++){const m=l.getX(_);Ws.fromBufferAttribute(d,m),mu(Ws,m,c,r,t,e,this)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,M=g;_<M;_++)Ws.fromBufferAttribute(d,_),mu(Ws,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mu(n,t,e,i,r,s,o){const a=lc.distanceSqToPoint(n);if(a<e){const c=new L;lc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Tv extends Ge{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ye extends tn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],g=[];let _=0;const M=[],m=i/2;let h=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(g,2));function E(){const T=new L,N=new L;let A=0;const R=(e-t)/i;for(let I=0;I<=s;I++){const w=[],v=I/s,P=v*(e-t)+t;for(let z=0;z<=r;z++){const k=z/r,W=k*c+a,Y=Math.sin(W),V=Math.cos(W);N.x=P*Y,N.y=-v*i+m,N.z=P*V,d.push(N.x,N.y,N.z),T.set(Y,R,V).normalize(),f.push(T.x,T.y,T.z),g.push(k,1-v),w.push(_++)}M.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){const v=M[w][I],P=M[w+1][I],z=M[w+1][I+1],k=M[w][I+1];u.push(v,P,k),u.push(P,z,k),A+=6}l.addGroup(h,A,0),h+=A}function y(T){const N=_,A=new zt,R=new L;let I=0;const w=T===!0?t:e,v=T===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*v,0),f.push(0,v,0),g.push(.5,.5),_++;const P=_;for(let z=0;z<=r;z++){const W=z/r*c+a,Y=Math.cos(W),V=Math.sin(W);R.x=w*V,R.y=m*v,R.z=w*Y,d.push(R.x,R.y,R.z),f.push(0,v,0),A.x=Y*.5+.5,A.y=V*.5*v+.5,g.push(A.x,A.y),_++}for(let z=0;z<r;z++){const k=N+z,W=P+z;T===!0?u.push(W,W+1,k):u.push(W+1,W,k),I+=3}l.addGroup(h,I,T===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ve extends ye{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ve(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends tn{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(s.slice(),3)),this.setAttribute("uv",new Ee(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new L,T=new L,N=new L;for(let A=0;A<e.length;A+=3)g(e[A+0],y),g(e[A+1],T),g(e[A+2],N),c(y,T,N,E)}function c(E,y,T,N){const A=N+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const w=E.clone().lerp(T,I/A),v=y.clone().lerp(T,I/A),P=A-I;for(let z=0;z<=P;z++)z===0&&I===A?R[I][z]=w:R[I][z]=w.clone().lerp(v,z/P)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const v=Math.floor(w/2);w%2===0?(f(R[I][v+1]),f(R[I+1][v]),f(R[I][v])):(f(R[I][v+1]),f(R[I+1][v+1]),f(R[I+1][v]))}}function l(E){const y=new L;for(let T=0;T<s.length;T+=3)y.x=s[T+0],y.y=s[T+1],y.z=s[T+2],y.normalize().multiplyScalar(E),s[T+0]=y.x,s[T+1]=y.y,s[T+2]=y.z}function u(){const E=new L;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const T=m(E)/2/Math.PI+.5,N=h(E)/Math.PI+.5;o.push(T,1-N)}_(),d()}function d(){for(let E=0;E<o.length;E+=6){const y=o[E+0],T=o[E+2],N=o[E+4],A=Math.max(y,T,N),R=Math.min(y,T,N);A>.9&&R<.1&&(y<.2&&(o[E+0]+=1),T<.2&&(o[E+2]+=1),N<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function g(E,y){const T=E*3;y.x=t[T+0],y.y=t[T+1],y.z=t[T+2]}function _(){const E=new L,y=new L,T=new L,N=new L,A=new zt,R=new zt,I=new zt;for(let w=0,v=0;w<s.length;w+=9,v+=6){E.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),T.set(s[w+6],s[w+7],s[w+8]),A.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),N.copy(E).add(y).add(T).divideScalar(3);const P=m(N);M(A,v+0,E,P),M(R,v+2,y,P),M(I,v+4,T,P)}}function M(E,y,T,N){N<0&&E.x===1&&(o[y]=E.x-1),T.x===0&&T.z===0&&(o[y]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.vertices,t.indices,t.radius,t.details)}}class Hn extends ds{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hn(t.radius,t.detail)}}class Sr extends ds{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sr(t.radius,t.detail)}}class zc extends ds{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zc(t.radius,t.detail)}}class Mn extends tn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,f=new L,g=[],_=[],M=[],m=[];for(let h=0;h<=i;h++){const E=[],y=h/i;let T=0;h===0&&o===0?T=.5/e:h===i&&c===Math.PI&&(T=-.5/e);for(let N=0;N<=e;N++){const A=N/e;d.x=-t*Math.cos(r+A*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(r+A*s)*Math.sin(o+y*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(A+T,1-y),E.push(l++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<e;E++){const y=u[h][E+1],T=u[h][E],N=u[h+1][E],A=u[h+1][E+1];(h!==0||o>0)&&g.push(y,T,A),(h!==i-1||c<Math.PI)&&g.push(T,N,A)}this.setIndex(g),this.setAttribute("position",new Ee(_,3)),this.setAttribute("normal",new Ee(M,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class To extends tn{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new L,d=new L,f=new L;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const M=_/r*s,m=g/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(_/r),l.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const M=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,h=(r+1)*(g-1)+_,E=(r+1)*g+_;o.push(M,m,E),o.push(m,h,E)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kc extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bv extends kc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new he,gu=new L,_u=new L;class Ah{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),_u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_u),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vu=new he,Wr=new L,Sa=new L;class Av extends Ah{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wr),Sa.copy(i.position),Sa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Sa),i.updateMatrixWorld(),r.makeTranslation(-Wr.x,-Wr.y,-Wr.z),vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class fs extends kc{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Av}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rv extends Ah{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cv extends kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Rv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xu(){return(typeof performance>"u"?Date:performance).now()}const Mu=new he;class Rh{constructor(t,e,i=0,r=1/0){this.ray=new Uc(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mu),this}intersectObject(t,e=!0,i=[]){return uc(t,this,i,e),i.sort(Su),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)uc(t[r],this,i,e);return i.sort(Su),i}}function Su(n,t){return n.distance-t.distance}function uc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)uc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const Xr=new L;function rn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Xr.copy(t),Xr[i]=0,Xr.normalize();const l=.5*o/(o+a),u=1-Xr.angleTo(n)/c;return Math.sign(Xr[e])===1?u*l:a/(o+a)+l+l*(1-u)}class Ri extends re{constructor(t=1,e=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,c=new L,l=new L(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new L,M=.5/r;for(let m=0,h=0;m<u.length;m+=3,h+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*M,c.y-=Math.sign(c.y)*M,c.z-=Math.sign(c.z)*M,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*s,u[m+1]=l.y*Math.sign(a.y)+c.y*s,u[m+2]=l.z*Math.sign(a.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[h+0]=rn(_,c,"z","y",s,i),f[h+1]=1-rn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),f[h+0]=1-rn(_,c,"z","y",s,i),f[h+1]=1-rn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),f[h+0]=1-rn(_,c,"x","z",s,t),f[h+1]=rn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),f[h+0]=1-rn(_,c,"x","z",s,t),f[h+1]=1-rn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),f[h+0]=1-rn(_,c,"x","y",s,t),f[h+1]=1-rn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),f[h+0]=rn(_,c,"x","y",s,t),f[h+1]=1-rn(_,c,"y","x",s,e);break}}}const Ch=document.getElementById("game"),yu=document.getElementById("hud"),Lv=document.getElementById("nightText"),Iv=document.getElementById("phaseIcon"),Dv=document.getElementById("healthText"),ya=document.getElementById("healthFill"),Zn=document.getElementById("statusText"),yr=document.getElementById("joystickZone");document.getElementById("joystickBase");const os=document.getElementById("joystickKnob");document.getElementById("lookZone");const as=document.getElementById("jumpBtn"),Ph=document.getElementById("dropBtn"),Lh=document.getElementById("plantBtn"),Uv=document.getElementById("woodText"),Nv=document.getElementById("saplingText"),Fv=document.getElementById("berryText"),Ov=document.getElementById("ironText"),Bv=document.getElementById("fuelText"),Ea=document.getElementById("fuelFill"),zv=document.getElementById("hungerText"),Eu=document.getElementById("hungerFill"),Hc=document.getElementById("fireWarning"),hc=document.getElementById("touchDebug"),bo=document.getElementById("deathBanner"),Er=document.getElementById("toast"),Gc=document.getElementById("darkness"),Bn=document.getElementById("startOverlay"),kv=document.getElementById("startBtn"),Ih=document.getElementById("axeSlot"),is=document.getElementById("backpackSlot"),Dh=document.getElementById("pickaxeSlot"),Uh=document.getElementById("ironAxeSlot"),Nh=document.getElementById("ironSwordSlot"),Hv=document.getElementById("backpackBadge"),Gv=document.getElementById("inventoryPanel"),wa=document.getElementById("inventoryList"),Vv=document.getElementById("inventoryCapacity"),Wv=document.getElementById("closeInventoryBtn"),Xv=document.getElementById("unequipBtn"),Fh=document.getElementById("upgradePanel"),dc=document.getElementById("upgradeGrid"),qv=document.getElementById("closeUpgradeBtn"),Jn=document.getElementById("machineStatus"),Yv=document.getElementById("machineFuelText"),Kv=document.getElementById("machineFuelFill"),$v=document.getElementById("machineFeedBtn"),wu=document.getElementById("machineJob"),jv=document.getElementById("machineJobName"),Zv=document.getElementById("machineJobTime"),Tu=document.getElementById("machineJobFill"),ro=document.getElementById("audioToggle"),$r=document.getElementById("cameraBtn"),Oh=document.getElementById("settingsBtn"),Jv=document.getElementById("settingsPanel"),Qv=document.getElementById("closeSettingsBtn"),bu=document.getElementById("volumeSlider"),tx=document.getElementById("volumeValue"),fc=document.getElementById("invertHorizontalLook"),Dr=new yv({canvas:Ch,antialias:!0,alpha:!1,powerPreference:"high-performance"});Dr.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Dr.setSize(window.innerWidth,window.innerHeight);Dr.shadowMap.enabled=!0;Dr.shadowMap.type=$u;const Oe=new Ev;Oe.background=new Tt(133647);Oe.fog=new Bc(465186,.045);const Ce=new je(67,window.innerWidth/window.innerHeight,.1,200);Ce.rotation.order="YXZ";const ex=new Pv,be=new Vt;Oe.add(be);const Pe=new L(3.4,0,-1),Au=2,Vc=[],go=3,nx=1.6,Wc=4,ix=.45,Ru=67,rx=75,Cu=hp.degToRad(80),sx=.0037,ox=.0022,so=4,Bh="nights.cameraView",zh="nights.invertHorizontalLook",kh=15,ax=300,Si=-1.22,sr=.08,Hh=-.34,cx=1.22,Gh=cx-(Si+Hh),lx=.36;function ue(n,t){const e=Math.hypot(n,t),i=Math.min(Math.max((e-8)/10,0),1),r=Math.min(Math.max((62-e)/8,0),1);return(Math.sin(n*.11+.7)*Math.cos(t*.1-.35)*.55+Math.sin((n+t)*.055-.6)*.35)*i*r}const Ao=new hs(130,130,56,56);Ao.rotateX(-Math.PI/2);const Xs=Ao.attributes.position;for(let n=0;n<Xs.count;n+=1)Xs.setY(n,ue(Xs.getX(n),Xs.getZ(n)));Ao.computeVertexNormals();const Vh=new Q(Ao,new It({color:1058079,roughness:1,metalness:0}));Vh.receiveShadow=!0;be.add(Vh);const qt=new Vt;qt.userData.campfireRef=!0;be.add(qt);const Ro=new Q(new ye(1.1,1.5,.45,8),new It({color:3548702,roughness:.9}));Ro.position.y=.2;Ro.castShadow=!0;Ro.receiveShadow=!0;qt.add(Ro);const Ci=new Q(new Mn(.22,10,10),new It({color:16747050,emissive:16739096,emissiveIntensity:1.8,roughness:.55,metalness:.1}));Ci.position.y=.55;Ci.castShadow=!1;qt.add(Ci);const wr=new fs(16748092,2.2,15,2.1);wr.position.set(0,1.3,0);qt.add(wr);const Tr=new fs(16765597,.85,20,2);Tr.position.set(0,1.2,0);Oe.add(Tr);const pc=new bv(9815807,988441,.9);Oe.add(pc);const xn=new Cv(12244991,.9);xn.position.set(-8,12,6);xn.castShadow=!0;xn.shadow.mapSize.width=1024;xn.shadow.mapSize.height=1024;xn.shadow.camera.left=-35;xn.shadow.camera.right=35;xn.shadow.camera.top=35;xn.shadow.camera.bottom=-35;Oe.add(xn);const We=[],ux=new It({color:3876643,roughness:1}),hx=new It({color:1714719,roughness:1});function Wh(n,t,e=1){const i=new Vt,r=new Q(new ye(.18*e,.28*e,1.7*e,6),ux);r.position.y=.85*e,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const s=new Q(new Ve(.8*e,2.2*e,6),hx);return s.position.y=2.4*e,s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.position.set(n,ue(n,t),t),i.userData.scale=e,i.userData.cameraMeshes=[r,s],i.userData.trunk=r,i.userData.foliage=s,i.userData.treeRef=i,be.add(i),We.push(i),i}for(let n=0;n<90;n+=1){const t=Math.random()*Math.PI*2,e=12+Math.random()*42,i=Math.cos(t)*e,r=Math.sin(t)*e;Math.abs(i)<6&&Math.abs(r)<6||Wh(i,r,.8+Math.random()*1.2)}const Xh=new Set([...We].sort((n,t)=>Math.hypot(n.position.x,n.position.z)-Math.hypot(t.position.x,t.position.z)).slice(0,8));for(let n=0;n<We.length;n+=4)Xh.add(We[n]);for(const n of Xh){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.hits=go,t.hitsMax=go,t.shake=0,t.highlight=0,t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}const dx=new It({color:7029796,roughness:.9}),Pu=new It({color:3111493,roughness:.92});function qh(n=1){const t=new Vt,e=new Q(new ye(.035,.055,.5,5),dx);e.position.y=.25,e.castShadow=!0,t.add(e);const i=new Q(new Ve(.28,.55,6),Pu);i.position.y=.55,i.castShadow=!0,t.add(i);const r=new Q(new Ve(.19,.42,6),Pu);return r.position.y=.84,r.castShadow=!0,t.add(r),t.scale.setScalar(n),t}for(let n=0;n<120;n+=1){const t=new Q(new re(.12,.16,.12),new It({color:1521191,roughness:1})),e=(Math.random()-.5)*90,i=(Math.random()-.5)*90;t.position.set(e,ue(e,i)+.08,i),t.castShadow=!0,t.receiveShadow=!0,be.add(t)}const J=new Vt;Oe.add(J);const an=new Vt;an.position.y=.01;J.add(an);const zi=new It({color:16766527,emissive:3877120,emissiveIntensity:.38,roughness:.38,metalness:.03}),fx=new It({color:3108818,roughness:.4,metalness:.03}),Yh=new It({color:3709259,roughness:.42,metalness:.03}),Xc=new It({color:1185048,roughness:.5,metalness:0});function An(n,t,e,i,r=.035){const s=new Q(new Ri(n,t,e,2,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}const Kh=An(.84,.86,.44,fx,.045);Kh.position.y=1.27;an.add(Kh);const Ur=new Vt;Ur.position.y=2;an.add(Ur);const px=An(.6,.6,.6,zi,.055);Ur.add(px);const $h=new Ri(.075,.105,.025,1,.01),jh=new Q($h,Xc);jh.position.set(-.135,.085,.301);Ur.add(jh);const Zh=new Q($h,Xc);Zh.position.set(.135,.085,.301);Ur.add(Zh);const qc=new Q(new To(.115,.021,4,14,Math.PI),Xc);qc.rotation.z=Math.PI;qc.position.set(0,-.075,.303);Ur.add(qc);const wn=new Vt;wn.position.set(-.54,1.64,0);an.add(wn);const Jh=An(.22,.78,.3,zi,.06);Jh.position.y=-.39;wn.add(Jh);const Qh=An(.2,.16,.26,zi,.05);Qh.position.set(0,-.8,.01);wn.add(Qh);const _n=new Vt;_n.position.set(.54,1.64,0);an.add(_n);const Yc=An(.22,.78,.3,zi,.06);Yc.position.y=-.39;_n.add(Yc);const td=An(.2,.16,.26,zi,.05);td.position.set(0,0,0);const Nr=new Vt;Nr.position.set(0,-.41,.01);Nr.rotation.set(Hh,0,0);Yc.add(Nr);Nr.add(td);const Ni=new Vt;Ni.position.set(-.2,.84,0);an.add(Ni);const ed=An(.3,.82,.36,Yh,.045);ed.position.y=-.41;Ni.add(ed);const Fi=new Vt;Fi.position.set(.2,.84,0);an.add(Fi);const nd=An(.3,.82,.36,Yh,.045);nd.position.y=-.41;Fi.add(nd);const Co=new Q(new Mn(.15,8,8),new It({color:16762478,emissive:16747046,emissiveIntensity:2.1,roughness:.4}));Co.position.set(.02,-.68,.2);Co.castShadow=!0;_n.add(Co);const Xe=new Vt;Xe.position.set(0,0,0);Xe.rotation.set(Gh,0,0);Nr.add(Xe);const Kc=new Q(new ye(.038,.048,.95,6),new It({color:8079911,roughness:.82,metalness:.02}));Kc.position.y=.475;Kc.castShadow=!0;Xe.add(Kc);const $c=new Q(new ye(.052,.052,.22,6),new It({color:3875859,roughness:.95}));$c.position.y=0;$c.castShadow=!0;Xe.add($c);const jc=new Q(new re(.34,.2,.1),new It({color:12175054,emissive:2371898,emissiveIntensity:.4,roughness:.3,metalness:.65}));jc.position.set(.11,.72,0);jc.castShadow=!0;Xe.add(jc);const Zc=new Q(new re(.2,.3,.07),new It({color:15266293,emissive:3096393,emissiveIntensity:.45,roughness:.24,metalness:.55}));Zc.position.set(.27,.72,0);Zc.castShadow=!0;Xe.add(Zc);Xe.visible=!1;const mc=new It({color:11188417,emissive:1778988,emissiveIntensity:.36,roughness:.3,metalness:.68}),_o=new It({color:14477550,emissive:3490893,emissiveIntensity:.4,roughness:.24,metalness:.64}),mx=new It({color:7422755,roughness:.84,metalness:.02}),gc=new It({color:14725728,roughness:.42,metalness:.5});function Jc(n,t,e=.042){const i=new Q(new ye(e,e*1.2,t,6),mx);i.position.y=t*.5,i.castShadow=!0,n.add(i);const r=new Q(new ye(e*1.28,e*1.28,.2,6),new It({color:3547154,roughness:.95}));r.position.y=0,r.castShadow=!0,n.add(r)}function id(){const n=new Vt;Jc(n,.92,.038);const t=new Q(new re(.72,.13,.13),mc);t.position.set(.02,.76,0),t.castShadow=!0,n.add(t);const e=new Q(new Ve(.105,.31,4),_o);e.position.set(.42,.76,0),e.rotation.z=-Math.PI/2,e.castShadow=!0,n.add(e);const i=new Q(new Ve(.09,.23,4),mc);return i.position.set(-.35,.76,0),i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i),n}function rd(){const n=new Vt;Jc(n,.96,.045);const t=new Q(new re(.36,.22,.11),mc);t.position.set(.11,.775,0),t.castShadow=!0,n.add(t);const e=new Q(new re(.22,.34,.075),_o);e.position.set(.29,.775,0),e.rotation.z=-.06,e.castShadow=!0,n.add(e);const i=new Q(new ye(.028,.028,.13,6),gc);return i.rotation.x=Math.PI/2,i.position.set(.11,.775,.04),n.add(i),n}function sd(){const n=new Vt;Jc(n,.55,.035);const t=new Q(new re(.44,.08,.11),gc);t.position.y=.3835,t.castShadow=!0,n.add(t);const e=new Q(new re(.14,.9,.055),_o);e.position.y=.8835,e.castShadow=!0,n.add(e);const i=new Q(new Ve(.099,.24,4),_o);i.position.y=1.4335,i.castShadow=!0,n.add(i);const r=new Q(new Mn(.07,6,5),gc);return r.position.y=.0835,n.add(r),n}const Po=id(),Lo=rd(),Io=sd();for(const[n,t]of[["pickaxe",Po],["ironAxe",Lo],["ironSword",Io]])t.position.set(0,0,0),t.rotation.set(Gh,0,0),t.visible=!1,t.userData.baseY=t.position.y,t.userData.tool=n,Nr.add(t);const gx=new It({color:8145450,roughness:.78,metalness:.02}),qs=new It({color:5123096,roughness:.86}),_x=new It({color:14725728,roughness:.42,metalness:.5});function vx(n=1){const t=new Vt,e=new Q(new Ri(.38,.44,.24,3,.055),gx);e.castShadow=!0,e.receiveShadow=!0,t.add(e);const i=new Q(new Ri(.37,.2,.25,2,.04),qs);i.position.set(0,.16,.004),i.rotation.x=-.06,i.castShadow=!0,t.add(i);const r=new Q(new Ri(.22,.13,.06,2,.025),qs);r.position.set(0,-.1,.145),r.castShadow=!0,t.add(r);const s=new Q(new re(.075,.06,.035),_x);s.position.set(0,.09,.135),t.add(s);for(const o of[-1,1]){const a=new Q(new re(.055,.41,.035),qs);a.position.set(o*.12,0,-.145),a.castShadow=!0,t.add(a);const c=new Q(new Ri(.055,.16,.15,2,.02),qs);c.position.set(o*.215,-.08,0),t.add(c)}return t.scale.setScalar(n),t}const Rn=vx(1);Rn.position.set(.09,-.96,.2);Rn.rotation.set(.08,Math.PI-.25,.05);Rn.visible=!1;_n.add(Rn);const xx=Xe.position.y,Mx=Rn.position.y;Xe.userData.baseY=xx;Xe.userData.tool="axe";Rn.userData.baseY=Mx;Rn.userData.tool="backpack";Oe.add(Ce);const ps=new Vt;ps.visible=!1;Ce.add(ps);const fe=new Vt;fe.position.set(.47,-.7,-.8);fe.rotation.set(-.2,.14,.24);fe.scale.setScalar(.78);ps.add(fe);const Qc=An(.17,.5,.19,zi,.05);Qc.position.set(0,.22,0);Qc.castShadow=!1;fe.add(Qc);const tl=An(.2,.18,.22,zi,.045);tl.position.set(0,.49,.01);tl.castShadow=!1;fe.add(tl);const el=new Vt;el.position.set(0,.5,.02);fe.add(el);const od={axe:Xe.clone(!0),pickaxe:Po.clone(!0),ironAxe:Lo.clone(!0),ironSword:Io.clone(!0)},Sx={axe:.3,pickaxe:.34,ironAxe:.36,ironSword:.2};for(const[n,t]of Object.entries(od))t.position.set(0,Sx[n],0),t.rotation.set(-.15,.12,.26),t.scale.setScalar(.9),t.visible=!1,t.userData.fpTool=n,t.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),el.add(t);const or={x:fe.position.x,y:fe.position.y,z:fe.position.z,rx:fe.rotation.x,ry:fe.rotation.y,rz:fe.rotation.z},Do=new fs(16760945,.8,14,2);Do.position.set(0,1.9,0);J.add(Do);const Je=new Q(new To(1.05,.055,5,24),new cn({color:16769184,transparent:!0,opacity:.8}));Je.rotation.x=Math.PI/2;Je.position.set(0,.9,.85);Je.visible=!1;J.add(Je);const Ze=new Q(new Sr(.42,1),new cn({color:16765562,transparent:!0,opacity:0,blending:mr,depthWrite:!1,wireframe:!0}));Ze.visible=!1;Oe.add(Ze);J.position.set(0,ue(0,4),4);const nl=[],yx=new Hn(.55,0),Ex=new It({color:4608078,roughness:.95,metalness:.02});for(let n=0;n<8;n+=1){const t=Math.random()*Math.PI*2,e=10+Math.random()*20,i=Math.cos(t)*e,r=Math.sin(t)*e;if(We.some(c=>Math.hypot(c.position.x-i,c.position.z-r)<1.6))continue;const s=.8+Math.random()*.55,o=ue(i,r),a=new Q(yx,Ex);a.position.set(i,o+.3025*s,r),a.scale.set(s,s*.55,s),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,be.add(a),nl.push({x:i,z:r,radius:.52*s,top:o+.605*s,mesh:a})}const pr=[],Qe=[];let $t=null;const Uo=[],ad=new ye(.15,.17,.72,7),cd=new It({color:10117944,emissive:2823689,emissiveIntensity:.45,roughness:.85,metalness:.02}),wx=new It({color:14170699,emissive:3998985,emissiveIntensity:.45,roughness:.62}),Tx=new It({color:4168275,roughness:.88}),bx=new Mn(.09,6,5),Ax=new It({color:2380346,roughness:.98}),Rx=new It({color:1588009,roughness:.98});function Lu(n=1){const t=new Vt,e=[[0,.1,0],[.1,.04,.03],[-.09,.03,.05],[.02,.02,-.09]];for(const[r,s,o]of e){const a=new Q(bx,wx);a.position.set(r,s,o),a.castShadow=!0,t.add(a)}const i=new Q(new Ve(.1,.16,5),Tx);return i.position.set(.03,.2,-.02),i.rotation.z=.4,i.castShadow=!0,t.add(i),t.scale.setScalar(n),t}function Cx(n,t){const e=new Vt,i=new Q(new Sr(.62,0),Ax);i.position.y=.34,i.scale.set(1.1,.7,1.05),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new Q(new Sr(.42,0),Rx);r.position.set(.26,.54,-.12),r.scale.set(1,.75,1),r.castShadow=!0,e.add(r),e.position.set(n,ue(n,t),t),e.rotation.y=Math.random()*Math.PI*2,be.add(e);const s={x:n,z:t,mesh:e,nextHarvest:0};e.userData.berryBushRef=s,Uo.push(s)}for(let n=0;n<15;n+=1){let t=!1;for(let e=0;e<24&&!t;e+=1){const i=Math.random()*Math.PI*2,r=8.5+Math.random()*22,s=Math.cos(i)*r,o=Math.sin(i)*r;Math.hypot(s,o)<8||We.some(a=>Math.hypot(a.position.x-s,a.position.z-o)<2.1)||Uo.some(a=>Math.hypot(a.x-s,a.z-o)<3.2)||(Cx(s,o),t=!0)}}const Fr=[],_c=new It({color:5858667,roughness:.92,metalness:.08,flatShading:!0}),ld=new It({color:7635336,roughness:.86,metalness:.12,flatShading:!0}),ud=new It({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.32}),hd=new zc(.095,0);function Px(n,t,e=1){const i=new Vt,r={group:i,x:n,z:t,scale:e,hits:Au,hitsMax:Au,broken:!1,regrow:0,shake:0,sway:Math.random()*Math.PI*2},s=new Q(new Hn(.76,0),_c);s.position.y=.5,s.scale.set(1.05,.82,.92),s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,i.add(s);const o=new Q(new Hn(.42,0),ld);o.position.set(.48,.26,.2),o.scale.set(1,.75,.9),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new Q(new Hn(.3,0),_c);a.position.set(-.46,.2,-.26),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,i.add(a);const c=[[-.33,.53,.63,1.5,1.1,.62,.2,.25,.45],[.18,.62,.66,1.2,.9,.55,-.15,.4,-.35],[.63,.44,.25,.62,1.15,1.3,.3,-.2,.25],[-.12,.35,.69,1.35,.85,.55,.4,.1,.2],[.38,.5,-.62,1.2,1,.7,-.25,.3,-.3]];for(const[l,u,d,f,g,_,M,m,h]of c){const E=new Q(hd,ud);E.position.set(l,u,d),E.scale.set(f,g,_),E.rotation.set(M,m,h),E.castShadow=!0,i.add(E)}return i.position.set(n,ue(n,t),t),i.rotation.y=Math.random()*Math.PI*2,i.scale.setScalar(e),i.traverse(l=>{l.userData.rockRef=r}),be.add(i),Fr.push(r),Vc.push({x:n,z:t,radius:.56*e,rock:r}),r}function Lx(n,t,e){return!(Math.hypot(n,t)<10.5||We.some(i=>Math.hypot(i.position.x-n,i.position.z-t)<1.9*e)||Uo.some(i=>Math.hypot(i.x-n,i.z-t)<2*e)||Fr.some(i=>Math.hypot(i.x-n,i.z-t)<2.2*e))}const Ix=[[17,-8],[-19,12],[10,24],[-25,-16],[26,14],[-13,-24]];for(const[n,t]of Ix){let e=0;for(let i=0;i<18&&e<2;i+=1){const r=Math.random()*Math.PI*2,s=Math.random()*2.7,o=n+Math.cos(r)*s,a=t+Math.sin(r)*s,c=.88+Math.random()*.38;Lx(o,a,c)&&(Px(o,a,c),e+=1)}}const ce=new Vt,jr={},oo=[],vc=[],Ys=new It({color:6714749,emissive:1515814,emissiveIntensity:.32,roughness:.46,metalness:.5}),Ks=new It({color:4016721,emissive:1055262,emissiveIntensity:.3,roughness:.5,metalness:.48}),Dx=new It({color:8606759,emissive:2363908,emissiveIntensity:.28,roughness:.84,metalness:.03}),Ux=new It({color:6109210,emissive:1773060,emissiveIntensity:.25,roughness:.9}),dd=new It({color:3350547,emissive:16742941,emissiveIntensity:.7,roughness:.4,metalness:.25});{const n=new Q(new Ri(1.5,1.4,1.14,2,.07),Ys);n.position.y=.85,n.castShadow=!0,n.receiveShadow=!0,ce.add(n);const t=new Q(new re(1.72,.22,1.3),Ks);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0,ce.add(t);const e=new Q(new re(1.56,.1,1.2),Ks);e.position.y=1.56,e.castShadow=!0,ce.add(e);const i=new Q(new ye(.64,.34,.68,4),Dx);i.position.y=1.88,i.rotation.y=Math.PI/4,i.castShadow=!0,i.receiveShadow=!0,ce.add(i);const r=new Q(new re(.98,.1,.98),Ux);r.position.y=2.22,r.rotation.y=Math.PI/4,r.castShadow=!0,ce.add(r);const s=new Q(new re(.66,.03,.66),new It({color:1182984,roughness:1}));s.position.y=2.27,s.rotation.y=Math.PI/4,ce.add(s);const o=new Q(new ye(.11,.15,.86,6),Ks);o.position.set(.66,2.4,-.4),o.castShadow=!0,ce.add(o);const a=new Q(new ye(.18,.13,.12,6),Ys);a.position.set(.66,2.86,-.4),a.castShadow=!0,ce.add(a);const c=new Q(new re(.72,.66,.08),Ks);c.position.set(0,.9,.59),ce.add(c);const l=new Q(new re(.58,.5,.045),dd);l.position.set(0,.9,.64),ce.add(l);for(const d of[-1,1]){const f=new Q(new ye(.035,.035,.075,6),Ys);f.rotation.x=Math.PI/2,f.position.set(d*.28,1.18,.665),ce.add(f);const g=f.clone();g.position.y=.62,ce.add(g)}for(const[d,f]of[[0,-1],[1,1]]){const g=new Q(new ye(.22,.22,.08,8),Ys);g.rotation.z=Math.PI/2,g.position.set(f*.8,.72+d*.32,.12),g.castShadow=!0,ce.add(g),vc.push(g)}const u=new fs(16747310,.95,8.5,2);u.position.set(0,1.2,.95),ce.add(u);for(let d=0;d<6;d+=1){const f=new Q(new Mn(.1+d*.012,5,4),new cn({color:12898251,transparent:!0,opacity:0,depthWrite:!1}));f.position.set(.66,2.98+d*.28,-.4),ce.add(f),oo.push(f)}jr.body=n,jr.panel=l,jr.glow=u,jr.hopper=i}ce.position.set(Pe.x,ue(Pe.x,Pe.z),Pe.z);ce.rotation.y=-1.28;ce.traverse(n=>{n.userData.machineRef=!0});be.add(ce);Vc.push({x:Pe.x,z:Pe.z,radius:.96,type:"machine"});const xt={fuel:0,working:null,progress:0,stalled:!1,statusTimer:0,gearAngle:0,clankTimer:0},br=[],fd=new It({color:6714492,roughness:.42,metalness:.62}),xc=new It({color:10135985,roughness:.34,metalness:.7});function Nx(n){const t=[-1.2,.85,2.65,-2.5,.18,3.6,-.2,1.9],e=t[n%t.length],i=3.15,r=qt.position.x+Math.sin(e)*i,s=qt.position.z+Math.cos(e)*i,o=new Vt;for(let a=0;a<3;a+=1){const c=new Q(new re(.52,1.02,.16),fd);c.position.set((a-1)*.54,.54,0),c.castShadow=!0,c.receiveShadow=!0,o.add(c);const l=new Q(new re(.48,.1,.19),xc);l.position.set((a-1)*.54,.88,0),l.castShadow=!0,o.add(l)}for(const a of[-1,1]){const c=new Q(new re(.14,1.2,.24),xc);c.position.set(a*.88,.6,0),c.castShadow=!0,o.add(c)}o.position.set(r,ue(r,s),s),o.rotation.y=e+Math.PI/2,be.add(o),br.push({group:o,x:r,z:s,rotation:o.rotation.y,width:1.95,depth:.3})}function Fx(){for(const n of br)be.remove(n.group);br.length=0}function Ox(){for(const n of Fr)n.broken=!1,n.hits=n.hitsMax,n.regrow=0,n.shake=0,n.group.visible=!0,n.group.scale.setScalar(n.scale),n.group.rotation.z=0}const Bx=3.8,$s=2.5,zx=.8,kx=25,pd=.36,Hx=1.15,Gx=120,Ta=[.35,.58,.82,1.06],No=.34,Vx=6,Wx=50,wi=180,Xx=120,ar=wi+Xx,ba=16,qr=14,md=30,vo=20,qx=.42,Iu=18,Fo=.3,gd=2.7,Yx=100,Du=25,Kx=4,Uu=28,$x=44,Or={wood:"Wood log",sapling:"Sapling",berry:"Berry",iron:"Iron piece",pickaxe:"Pickaxe",ironAxe:"Iron Axe",ironSword:"Iron Sword",ironWall:"Iron Wall",biggerCampfire:"Bigger Campfire"},_d={wood:kx,sapling:12,berry:5},vd=new Set(["wood","sapling","berry"]),jx=["ironAxe","pickaxe","ironSword","ironWall","biggerCampfire"],Ar={ironAxe:{name:"Iron Axe",cost:{wood:6,iron:3},time:10,desc:"Chops faster and hits harder."},pickaxe:{name:"Pickaxe",cost:{wood:4,iron:1},time:10,desc:"Mine iron rocks at the forest edge."},ironSword:{name:"Iron Sword",cost:{wood:5,iron:5},time:10,desc:"Strong melee blade for monsters."},ironWall:{name:"Iron Wall",cost:{wood:8,iron:6},time:10,desc:"Places a sturdy wall by the campfire."},biggerCampfire:{name:"Bigger Campfire",cost:{wood:10,iron:5},time:10,desc:"Wider light and scare radius."}},Oo={axe:{cooldown:.58,damage:1,treePower:1,rockPower:0,range:3.3,reach:2.5},pickaxe:{cooldown:.5,damage:1,treePower:0,rockPower:1,range:3,reach:2.5},ironAxe:{cooldown:.4,damage:2,treePower:2,rockPower:0,range:3.5,reach:2.8},ironSword:{cooldown:.42,damage:3,treePower:0,rockPower:0,range:3.6,reach:2.8}};let Pi=0,Zr=0,Mc="";function il(){return Math.hypot(J.position.x-qt.position.x,J.position.z-qt.position.z)}function Sc(){return Math.hypot(J.position.x-Pe.x,J.position.z-Pe.z)}function vi(){return Vx+p.fireLevel*2.4}function Zx(){return 7+p.fireLevel*1.5}function Jx(n){return n==="pickaxe"||n==="ironAxe"||n==="ironSword"||n==="ironWall"||n==="biggerCampfire"}function Bo(n){return n==="axe"||n==="pickaxe"||n==="ironAxe"||n==="ironSword"}function Qx(n){const t=Oo[n];return!!t&&t.treePower>0}function xd(n){const t=Oo[n];return!!t&&t.rockPower>0}function Nu(){if(p.fireInReach=il()<=Bx,p.machineInReach=p.started&&Sc()<=gd,p.targetTree=null,p.targetRock=null,!p.started||p.gameOver)return;let n=$s*$s;for(const e of We){if(!e.userData.choppable||e.userData.falling||!e.visible)continue;const i=J.position.x-e.position.x,r=J.position.z-e.position.z,s=i*i+r*r;s<n&&(n=s,p.targetTree=e)}let t=$s*$s;for(const e of Fr){if(e.broken)continue;const i=J.position.x-e.x,r=J.position.z-e.z,s=i*i+r*r;s<t&&(t=s,p.targetRock=e)}}function Dt(n){Er.textContent=n,Er.classList.add("visible"),Pi=1.5}function tM(n){hc.textContent=n,hc.classList.add("visible"),Zr=2}function eM(n=1){const t=new Vt,e=new Q(new Hn(.17,0),ld);e.scale.set(1.15,.8,.9),e.castShadow=!0,t.add(e);const i=new Q(new Hn(.11,0),_c);i.position.set(.12,.02,.09),i.castShadow=!0,t.add(i);const r=new Q(hd,ud);return r.scale.set(1.35,.92,.55),r.position.set(-.035,.055,.12),r.rotation.set(.3,.25,.4),t.add(r),t.scale.setScalar(n),t}function nM(){const n=new Vt;for(let t=0;t<3;t+=1){const e=new Q(new re(.34,.68,.09),fd);e.position.set((t-1)*.35,.35,0),e.castShadow=!0,n.add(e);const i=new Q(new re(.32,.07,.11),xc);i.position.set((t-1)*.35,.58,0),n.add(i)}return n}function iM(){const n=new Vt;for(let e=0;e<4;e+=1){const i=new Q(ad,cd);i.scale.setScalar(.7),i.rotation.z=Math.PI/2,i.rotation.y=e/4*Math.PI,i.position.y=.1,i.castShadow=!0,n.add(i)}const t=new Q(new Mn(.13,6,5),new cn({color:16751164}));return t.position.y=.22,n.add(t),n}function rM(n){let t;return n==="wood"?(t=new Q(ad,cd),t.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2),t.castShadow=!0,t.receiveShadow=!0):n==="sapling"?(t=qh(.72),t.rotation.y=Math.random()*Math.PI*2):n==="berry"?(t=Lu(1),t.rotation.y=Math.random()*Math.PI*2):n==="iron"?(t=eM(1.2),t.rotation.y=Math.random()*Math.PI*2):n==="pickaxe"?(t=id(),t.scale.setScalar(.78),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironAxe"?(t=rd(),t.scale.setScalar(.8),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironSword"?(t=sd(),t.scale.setScalar(.68),t.rotation.set(.05,Math.random()*Math.PI*2,.04)):n==="ironWall"?(t=nM(),t.rotation.y=Math.random()*Math.PI*2):n==="biggerCampfire"?(t=iM(),t.rotation.y=Math.random()*Math.PI*2):t=Lu(1),t}function li(n,t,e,i={}){const r=rM(n),s=ue(t,e),a=n==="wood"?.17:n==="berry"?.14:n==="iron"?.13:n==="pickaxe"||n==="ironAxe"||n==="ironSword"?.5:.02,c=n==="sapling"?.72:1,l=i.startY??s+a+.45;r.position.set(t,l,e),be.add(r);const u={type:n,mesh:r,x:t,z:e,groundY:s,restY:a,baseScale:c,velocityY:i.velocityY??(n==="wood"?2.2:2.6),landed:!1,pickupDelay:i.pickupDelay??.35,carried:!1,popping:0,popDuration:.24};if(r.traverse(d=>{d.userData.itemRef=u}),Qe.push(u),Qe.length>80)for(let d=0;d<Qe.length;d+=1){const f=Qe[d];if(!f.carried&&f.popping<=0){rl(f);break}}return u}function rl(n){const t=Qe.indexOf(n);t>=0&&Qe.splice(t,1),$t===n&&($t=null),be.remove(n.mesh)}function Rr(n){!n||n.popping>0||($t===n&&($t=null),n.carried=!1,n.popping=n.popDuration)}function sM(n,t=0){const e=J.position.x-n.position.x,i=J.position.z-n.position.z,s=Math.atan2(e,i)+(t-1)*.62+(Math.random()-.5)*.32,o=n.userData.scale*.35+.7+Math.random()*.45;li("wood",n.position.x+Math.sin(s)*o,n.position.z+Math.cos(s)*o,{startY:n.position.y+.9,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}function oM(n){const t=Math.atan2(J.position.x-n.position.x,J.position.z-n.position.z)+(Math.random()-.5)*1.2,e=n.userData.scale*.3+.95;li("sapling",n.position.x+Math.sin(t)*e,n.position.z+Math.cos(t)*e,{startY:n.position.y+.8,velocityY:2.6,pickupDelay:.45})}function sl(){for(const n of Uo){const t=Qe.filter(e=>e.type==="berry"&&!e.carried&&e.popping<=0&&Math.hypot(e.x-n.x,e.z-n.z)<2.1).length;for(let e=t;e<3;e+=1){const i=Math.random()*Math.PI*2,r=.35+Math.random()*.45,s=n.x+Math.cos(i)*r,o=n.z+Math.sin(i)*r;li("berry",s,o,{startY:ue(s,o)+.55,velocityY:1.8,pickupDelay:.6})}}}const aM=[{x:Pe.x-1.55,z:Pe.z-1.15},{x:Pe.x-1.25,z:Pe.z+1.35},{x:Pe.x+1.75,z:Pe.z-1.35},{x:Pe.x+1.95,z:Pe.z+.9}];function Md(){for(const n of aM){const t=n.x,e=n.z;Qe.some(r=>r.type==="iron"&&!r.carried&&r.popping<=0&&Math.hypot(r.x-t,r.z-e)<.7)||li("iron",t,e,{startY:ue(t,e)+.45,velocityY:1.4,pickupDelay:.25})}}function cM(){for(const n of Qe)n.carried=!1,n.popping=0,be.remove(n.mesh);Qe.length=0,$t=null,sl(),Md(),se()}function lM(n,t=null){let e=n*n,i=null;for(const r of Qe){if(r.carried||r.popping>0||t&&!t(r))continue;const s=J.position.x-r.x,o=J.position.z-r.z,a=s*s+o*o;a<e&&(e=a,i=r)}return i}function xo(){return p.backpack.wood+p.backpack.sapling+p.backpack.berry+p.backpack.iron}function uM(){return p.backpack.wood+p.backpack.sapling+p.backpack.berry}function Jr(n){return p.backpack[n]+(($t==null?void 0:$t.type)===n?1:0)}function Mo(n){return Jr(n)}function Sd(){return p.equippedTool==="backpack"}function hM(n){return!n||n.popping>0||!Object.prototype.hasOwnProperty.call(p.backpack,n.type)?!1:xo()>=vo?(Dt("Backpack is full"),!1):(p.backpack[n.type]+=1,Rr(n),se(),is.classList.remove("pop"),is.offsetWidth,is.classList.add("pop"),_s(),Dt(`+1 ${Or[n.type]}`),!0)}function dM(){p.fireLevel+=1;const n=1+Math.min(p.fireLevel,5)*.14;qt.scale.setScalar(n),wr.distance=15+p.fireLevel*4.5,Tr.distance=20+p.fireLevel*5,Dt("The campfire grows brighter"),Wd()}function fM(n){if(!n||n.popping>0)return!1;const t=n.type;if(Rr(n),t==="ironWall")Nx(br.length),Dt("Iron Wall placed by the campfire");else if(t==="biggerCampfire")dM();else if(Bo(t))return p.ownedTools[t]=!0,se(),ki(),Dt(`Collected ${Or[t]}`),Wd(),mn(t),!0;return se(),_s(),!0}function yd(n){return!n||n.carried||n.popping>0?!1:Jx(n.type)?fM(n):Sd()?hM(n):$t?(Dt("Hands full"),!1):(n.carried=!0,n.landed=!0,n.pickupDelay=0,$t=n,se(),_s(),Dt(`Picked up ${Or[n.type]}`),!0)}function Ed(){if(!p.started||p.gameOver||p.falling||p.paused||p.machineOpen||p.settingsOpen||p.dropCooldown>0||!$t)return;const n=$t;$t=null,n.carried=!1;const t=J.rotation.y,e=J.position.x+Math.sin(t)*1.15,i=J.position.z+Math.cos(t)*1.15;n.x=e,n.z=i,n.groundY=ue(e,i),n.velocityY=1.3,n.landed=!1,n.pickupDelay=.3,n.mesh.position.set(e,J.position.y+.8,i),p.dropCooldown=.35,se(),Dt("Dropped item")}function pM(){if(!$t||!vd.has($t.type))return;const n=$t,t=_d[n.type]||5;Rr(n),p.fuel=Yt(p.fuel+t,0,100),p.fireOut=!1,p.fireFlare=1,se(),Dt(`Fire +${Math.round(t)}%`)}function mM(){const n=["wood","sapling","berry"].find(t=>p.backpack[t]>0);n&&(p.backpack[n]-=1,p.fuel=Yt(p.fuel+(_d[n]||5),0,100),p.fireOut=!1,p.fireFlare=1,se(),Dt(`Fed the fire with ${Or[n].toLowerCase()}`))}function gM(n){const t=n.userData,e=n.position.x-J.position.x,i=n.position.z-J.position.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r;t.choppable=!1,t.falling=!0,t.fallProgress=0,t.lootDropped=!1,t.fallAxis=new L(o,0,-s).normalize(),t.hits=t.hitsMax,t.shake=0}function _M(n,t=1){const e=n.userData;e.shake=pd,p.chopTimer=.3,J.rotation.y=Math.atan2(n.position.x-J.position.x,n.position.z-J.position.z),e.hits-=t,CS(),e.hits<=0&&gM(n)}function vM(n,t=1){if(!n||n.broken)return;if(!xd(p.equippedTool)){Dt("Equip the pickaxe to mine iron");return}if(J.rotation.y=Math.atan2(n.x-J.position.x,n.z-J.position.z),p.chopTimer=.3,n.hits-=t,n.shake=.3,n.hits>0){Xd(),Dt("The rock cracks");return}n.broken=!0,n.regrow=Uu+Math.random()*($x-Uu),n.group.visible=!1,LS();const e=2+Math.floor(Math.random()*2);for(let i=0;i<e;i+=1){const r=Math.random()*Math.PI*2,s=.55+Math.random()*.55,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s;li("iron",o,a,{startY:ue(o,a)+.5,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}se(),Dt(`Mined ${e} iron`)}function xM(n){for(const t of Fr){if(t.broken){t.regrow=Math.max(0,t.regrow-n),t.regrow<=0&&(t.broken=!1,t.hits=t.hitsMax,t.group.visible=!0,t.group.scale.setScalar(t.scale*.6),Dt("An iron rock has regrown"));continue}if(t.shake>0){t.shake=Math.max(0,t.shake-n);const r=t.shake/.3,s=performance.now()*.001;t.group.rotation.z=Math.sin(s*48)*.04*r}else t.group.rotation.z=0;const e=.82+t.hits/t.hitsMax*.18,i=t.scale*e;t.group.scale.x<i?t.group.scale.setScalar(Math.min(i,t.group.scale.x+n*1.6)):t.group.scale.x>i&&t.group.scale.setScalar(Math.max(i,t.group.scale.x-n*1.6))}}function wd(n){return Mo("wood")>=n.cost.wood&&Mo("iron")>=n.cost.iron}function Td(n){const t=[],e=Mo("wood"),i=Mo("iron");return e<n.cost.wood&&t.push(`${n.cost.wood-e} wood`),i<n.cost.iron&&t.push(`${n.cost.iron-i} iron`),t.join(" + ")}function Fu(n,t){let e=t;const i=Math.min(p.backpack[n],e);for(p.backpack[n]-=i,e-=i;e>0&&!(!$t||$t.type!==n);)Rr($t),e-=1;return t-e}function MM(){if(!(dc.childElementCount>0))for(const n of jx){const t=Ar[n],e=document.createElement("button");e.type="button",e.className="upgrade-card",e.dataset.upgrade=n;const i=document.createElement("span");i.className="upgrade-name",i.textContent=t.name;const r=document.createElement("span");r.className="upgrade-cost",r.dataset.cost=`${t.cost.wood} wood · ${t.cost.iron} iron`;const s=document.createElement("span");s.className="upgrade-desc",s.textContent=t.desc,e.append(i,r,s),e.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),yM(n)}),dc.appendChild(e)}}function ms(){const n=xt.working?Ar[xt.working]:null,t=Math.round(xt.fuel);if(Yv.textContent=`${t}%`,Kv.style.width=`${t}%`,Jn.classList.remove("working","stalled","ready"),n){wu.classList.remove("hidden"),jv.textContent=n.name;const e=Math.max(0,n.time-xt.progress);Zv.textContent=xt.stalled?"OUT OF FUEL":`${e.toFixed(1)}s`,Tu.style.width=`${Yt(xt.progress/n.time,0,1)*100}%`,xt.stalled?(Jn.textContent="Out of fuel - add wood",Jn.classList.add("stalled")):(Jn.textContent=`${n.name} working`,Jn.classList.add("working"))}else wu.classList.add("hidden"),Tu.style.width="0%",xt.statusTimer>0?(Jn.textContent=xt.statusText||"Idle",(xt.statusText||"").includes("ready")&&Jn.classList.add("ready")):Jn.textContent=xt.fuel>0?"Ready for a new upgrade":"Add wood to start";for(const e of dc.children){const i=e.dataset.upgrade,r=Ar[i];if(!r)continue;const s=Bo(i)&&p.ownedTools[i],o=wd(r);e.classList.toggle("owned",s),e.classList.toggle("unaffordable",!s&&!o),e.classList.toggle("working",xt.working===i);const a=e.querySelector(".upgrade-cost");s?(a.textContent="OWNED",a.classList.remove("missing")):(a.textContent=o?a.dataset.cost:`${a.dataset.cost} · need ${Td(r)}`,a.classList.toggle("missing",!o))}}function SM(){!p.started||p.gameOver||p.falling||p.paused||(p.machineOpen=!0,bn(!1),ui(!1),Ho(),Bi.clear(),p.look.active=!1,p.pinchDistance=0,MM(),ms(),Fh.classList.remove("hidden"),ki(),Br())}function Vn(){p.machineOpen=!1,Fh.classList.add("hidden"),ki()}function yM(n){if(!p.started||p.gameOver||p.falling)return;const t=Ar[n];if(t){if(xt.working){Dt("The machine is already working");return}if(Bo(n)&&p.ownedTools[n]){Dt(`You already own the ${t.name}`);return}if(!wd(t)){Dt(`Missing ${Td(t)}`);return}if(xt.fuel<=0){Dt("Add wood to fuel the machine");return}Fu("wood",t.cost.wood),Fu("iron",t.cost.iron),xt.working=n,xt.progress=0,xt.stalled=!1,xt.statusTimer=0,xt.clankTimer=.2,se(),ms(),qd(),Br(),Dt(`${t.name} started`)}}function EM(){if(!p.started||p.gameOver||p.falling)return;let n="";if(p.backpack.wood>0)p.backpack.wood-=1,n="backpack";else if($t&&$t.type==="wood")Rr($t),n="hands";else{const t=lM(4.5,e=>e.type==="wood");t&&(Rr(t),n="ground")}if(!n){Dt("No wood to feed the machine");return}xt.fuel=Yt(xt.fuel+Du,0,Yx),xt.working&&xt.stalled&&(xt.stalled=!1,qd()),se(),ms(),_s(),Dt(`Machine fuel +${Du}%`)}function wM(){const n=xt.working;if(!n)return;const t=Ar[n];xt.working=null,xt.progress=0,xt.stalled=!1,xt.statusText=`${t.name} ready!`,xt.statusTimer=6,vs(),TS();const e=Math.sin(ce.rotation.y),i=Math.cos(ce.rotation.y),r=Pe.x+e*1.35,s=Pe.z+i*1.35;li(n,r,s,{startY:ue(r,s)+1.15,velocityY:2.4,pickupDelay:.65}),Dt(`${t.name} is ready to collect`),se(),ms()}function TM(n){const t=xt.working?Ar[xt.working]:null,e=!!t&&xt.fuel>0&&!xt.stalled;t&&!xt.stalled&&xt.fuel>0&&(xt.fuel=Math.max(0,xt.fuel-n*Kx),xt.progress+=n,xt.clankTimer-=n,xt.clankTimer<=0&&(HS(),xt.clankTimer=.42+Math.random()*.38),xt.fuel<=0&&xt.progress<t.time?(xt.stalled=!0,xt.statusText="Out of fuel",xt.statusTimer=3,vs(),Dt("Machine is out of fuel - add wood")):xt.progress>=t.time&&wM()),xt.statusTimer>0&&(xt.statusTimer=Math.max(0,xt.statusTimer-n));const i=performance.now()*.001;dd.emissiveIntensity=e?1.15+Math.sin(i*11)*.25:.62+Math.sin(i*2.2)*.1,jr.glow.intensity=e?1.8+Math.sin(i*13)*.35:.8+Math.sin(i*2.4)*.1,e&&(xt.gearAngle+=n*2.6,vc[0].rotation.x=xt.gearAngle,vc[1].rotation.x=-xt.gearAngle*.7);for(let r=0;r<oo.length;r+=1){const s=oo[r];if(e){const o=(i*.32+r/oo.length)%1;s.position.set(.66+Math.sin(i*1.1+r)*.1,2.9+o*1.55,-.4+Math.cos(i*1.3+r)*.1),s.scale.setScalar(.85+o*1.65),s.material.opacity=.24*(1-o)}else s.material.opacity=Math.max(0,s.material.opacity-n*.25)}p.machineOpen&&ms()}function Ou(n){const t=performance.now();for(let e=Qe.length-1;e>=0;e-=1){const i=Qe[e];if(i.popping>0){i.popping=Math.max(0,i.popping-n);const r=1-i.popping/i.popDuration;i.mesh.scale.setScalar(i.baseScale*(1+r*1.1)),i.mesh.position.y+=n*1.35,i.popping<=0&&rl(i);continue}if(i.carried){if($t!==i){i.carried=!1;continue}const r=J.rotation.y+Math.PI+Math.sin(t*.0012)*.05,s=.95,o=J.position.x+Math.sin(r)*s,a=J.position.z+Math.cos(r)*s,c=ue(o,a)+.52+Math.sin(t*.003)*.04,l=1-Math.exp(-8*n);i.mesh.position.x+=(o-i.mesh.position.x)*l,i.mesh.position.y+=(c-i.mesh.position.y)*l,i.mesh.position.z+=(a-i.mesh.position.z)*l,i.mesh.rotation.y+=n*1.25;continue}if(i.pickupDelay=Math.max(0,i.pickupDelay-n),i.landed)i.mesh.position.y=i.groundY+i.restY+Math.abs(Math.sin(t*.0028+i.mesh.id))*(i.type==="berry"?.025:.018),i.type==="sapling"&&(i.mesh.rotation.y+=n*.4),i.type==="berry"&&(i.mesh.rotation.y+=n*.35);else{i.velocityY-=13*n,i.mesh.position.y+=i.velocityY*n,i.type==="wood"&&(i.mesh.rotation.y+=n*3.2),i.type==="sapling"&&(i.mesh.rotation.y+=n*2.4);const r=i.groundY+i.restY;i.mesh.position.y<=r&&(i.mesh.position.y=r,i.landed=!0)}}}function bd(n){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.falling=!1,t.fallProgress=0,t.lootDropped=!1,t.hits=go,t.hitsMax=go,t.shake=0,t.highlight=0,n.visible=!0,n.quaternion.identity(),t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}function Ad(){if(!p.started||p.gameOver||p.falling||p.paused||p.machineOpen||p.settingsOpen||p.plantCooldown>0)return;if(!$t||$t.type!=="sapling"){Dt("Carry a sapling to plant it");return}const n=new L(Math.sin(J.rotation.y),0,Math.cos(J.rotation.y)),t=J.position.x+n.x*1.75,e=J.position.z+n.z*1.75;if(Math.hypot(t-qt.position.x,e-qt.position.z)<1.6){Dt("Too close to the campfire");return}rl($t),p.plantCooldown=.45;const r=qh(.35);r.position.set(t,ue(t,e),e),r.rotation.y=Math.random()*Math.PI*2,be.add(r);const s={mesh:r,x:t,z:e,growth:0,sway:Math.random()*Math.PI*2};r.userData.saplingRef=s,pr.push(s),se(),Dt("Planted a sapling")}function bM(n){for(let t=pr.length-1;t>=0;t-=1){const e=pr[t];e.growth+=n;const i=Yt(e.growth/Gx,0,1),r=Math.min(Ta.length-1,Math.floor(i*Ta.length)),s=Ta[r],o=1-Math.exp(-6*n),a=e.mesh.scale.x+(s-e.mesh.scale.x)*o;if(e.mesh.scale.setScalar(a),e.mesh.rotation.z=Math.sin(performance.now()*.0016+e.sway)*.035,i>=1){be.remove(e.mesh),pr.splice(t,1);const c=Wh(e.x,e.z,.9+Math.random()*.35);c.userData.planted=!0,bd(c)}}}function Bu(n){const t=performance.now()*.001,e=1-Math.exp(-10*n);for(const i of We){if(!i.visible)continue;const r=i.userData;if(r.falling){r.fallProgress=Math.min(1,r.fallProgress+n/Hx);const a=r.fallProgress*r.fallProgress*Math.PI*.5;if(i.quaternion.setFromAxisAngle(r.fallAxis,a),r.fallProgress>=1&&!r.lootDropped){r.lootDropped=!0,PS();for(let c=0;c<3;c+=1)sM(i,c);oM(i)}r.fallProgress>=1&&(i.visible=!1);continue}if(!r.choppable)continue;const s=i===p.targetTree?1:0;r.highlight+=(s-r.highlight)*e;const o=r.trunk.material;if(o.emissiveIntensity=r.highlight*(.45+Math.sin(t*7)*.16),r.shake>0){r.shake=Math.max(0,r.shake-n);const a=r.shake/pd;i.rotation.z=Math.sin(t*55)*.055*a,i.rotation.x=Math.cos(t*43)*.03*a}else(i.rotation.z!==0||i.rotation.x!==0)&&(i.rotation.z=0,i.rotation.x=0)}}const oi=[];function AM(){const n=new Vt,t=new It({color:1053981,roughness:.96,metalness:.04,flatShading:!0}),e=new cn({color:16742963}),i=new Vt;n.add(i);const r=new Q(new Sr(.48,0),t);r.position.y=1.12,r.scale.set(1.05,1.2,.72),r.castShadow=!0,i.add(r);const s=new Q(new Ve(.32,.6,5),t);s.position.y=.68,s.rotation.y=Math.PI/5,s.castShadow=!0,i.add(s);const o=new Q(new Hn(.3,0),t);o.position.y=1.82,o.scale.set(1,1.12,.9),o.castShadow=!0,i.add(o);const a=new Ve(.055,.28,4),c=new Q(a,t);c.position.set(-.17,2.05,0),c.rotation.z=.32,c.castShadow=!0,i.add(c);const l=new Q(a,t);l.position.set(.17,2.05,0),l.rotation.z=-.32,l.castShadow=!0,i.add(l);const u=new Mn(.055,6,5),d=new Q(u,e);d.position.set(-.11,1.86,.255),i.add(d);const f=new Q(u,e);f.position.set(.11,1.86,.255),i.add(f);const g=[];for(const M of[-1,1]){const m=new Vt;m.position.set(M*.5,1.48,0);const h=new Q(new ye(.075,.11,.78,5),t);h.position.y=-.38,h.castShadow=!0,m.add(h);const E=new Q(new Ve(.09,.24,4),t);E.position.y=-.82,E.rotation.x=Math.PI,E.castShadow=!0,m.add(E),i.add(m),g.push(m)}const _=[];for(const M of[-1,1]){const m=new Vt;m.position.set(M*.18,.72,0);const h=new Q(new ye(.09,.12,.7,5),t);h.position.y=-.35,h.castShadow=!0,m.add(h);const E=new Q(new re(.17,.1,.27),t);E.position.set(0,-.73,.07),E.castShadow=!0,m.add(E),n.add(m),_.push(m)}return n.position.set(0,-40,0),n.visible=!1,n.userData={bodyMat:t,eyeMat:e,bodyGroup:i,arms:g,legs:_,speed:1.2,damage:7,health:2,maxHealth:2,hitTimer:0,attackCooldown:0,phase:Math.random()*Math.PI*2,knockback:new L,fading:!1,fade:1,targetCamp:!1,circleDir:Math.random()<.5?1:-1},Oe.add(n),n.userData.enemyRef=n,oi.push(n),n}for(let n=0;n<md;n+=1)AM();function Rd(n){const t=n.userData;t.fading=!1,t.fade=1,t.hitTimer=0,t.attackCooldown=.6+Math.random()*.6,t.knockback.set(0,0,0),t.bodyMat.transparent=!1,t.bodyMat.opacity=1,t.bodyMat.emissive.setHex(0),t.bodyMat.emissiveIntensity=1,t.eyeMat.transparent=!1,t.eyeMat.opacity=1,n.scale.setScalar(1),n.visible=!0}const Ti=new Q(new Ve(.36,1.5,7),new cn({color:16743202,transparent:!0,opacity:.58,blending:mr,depthWrite:!1}));Ti.position.set(0,1.15,0);qt.add(Ti);const ur=new Q(new Ve(.2,1.05,6),new cn({color:16769674,transparent:!0,opacity:.8,blending:mr,depthWrite:!1}));ur.position.set(0,.92,0);qt.add(ur);const Oi=30,Ii=new Float32Array(Oi*3),Li=new Float32Array(Oi*3),yc=new Float32Array(Oi),zu=new Float32Array(Oi),zo=new tn,ol=new vn(Ii,3);zo.setAttribute("position",ol);function RM(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(32/2,32/2,0,32/2,32/2,32/2);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 224, 160, 0.95)"),i.addColorStop(.7,"rgba(255, 168, 66, 0.45)"),i.addColorStop(1,"rgba(255, 140, 40, 0)"),e.fillStyle=i,e.fillRect(0,0,32,32);const r=new Tv(t);return r.colorSpace=fn,r}const Cd=new bh({color:16761707,size:.065,map:RM(),transparent:!0,opacity:.9,depthWrite:!1,blending:mr,sizeAttenuation:!0}),al=new wv(zo,Cd);al.frustumCulled=!1;qt.add(al);function Pd(n){const t=n*3;Ii[t]=(Math.random()-.5)*.38,Ii[t+1]=.9+Math.random()*.3,Ii[t+2]=(Math.random()-.5)*.38,Li[t]=(Math.random()-.5)*.45,Li[t+1]=.75+Math.random()*1.25,Li[t+2]=(Math.random()-.5)*.45,zu[n]=.7+Math.random()*.9,yc[n]=zu[n]}for(let n=0;n<Oi;n+=1)Pd(n);ol.needsUpdate=!0;function CM(n,t){for(let e=0;e<Oi;e+=1){yc[e]-=n,yc[e]<=0&&Pd(e);const i=e*3;Ii[i]+=Li[i]*n,Ii[i+1]+=Li[i+1]*n,Ii[i+2]+=Li[i+2]*n,Li[i+1]-=n*.55}ol.needsUpdate=!0,zo.setDrawRange(0,Math.max(5,Math.floor(Oi*(.4+t*.6))))}const ao=[],PM=new cn({color:10267042,transparent:!0,opacity:.08});for(let n=0;n<4;n+=1){const t=new Q(new Mn(.11+n*.015,6,6),PM.clone());t.position.y=1.55+n*.42,t.userData.tapIgnore=!0,qt.add(t),ao.push(t)}const Ld=new Q(new Mn(110,24,24),new cn({color:399393,side:Fe,fog:!1}));Oe.add(Ld);const sn=new fs(16752970,2.2,12,2);sn.position.set(0,1.2,0);sn.visible=!1;Oe.add(sn);const p={started:!1,lastTime:0,night:1,maxNight:99,health:100,hunger:100,damageFlash:0,attackCooldown:0,attackTimer:0,nearFire:!0,keys:new Set,joystick:{x:0,y:0,active:!1},look:{active:!1,lastX:0,lastY:0},pinchDistance:0,cameraYaw:0,cameraPitch:0,invertHorizontalLook:!0,cameraDistance:Wc,firstPerson:!1,viewBlend:0,cameraInitialized:!1,cycleTime:0,daylight:1,nightActive:!1,gameOver:!1,pointerId:null,victory:!1,velocityY:0,grounded:!0,jumpHeld:!1,walkPhase:0,idleTime:0,moveSpeed:0,backpack:{wood:0,sapling:0,berry:0,iron:0},ownedTools:{axe:!0,pickaxe:!1,ironAxe:!1,ironSword:!1},equippedTool:null,equipTimer:0,inventoryOpen:!1,machineOpen:!1,settingsOpen:!1,machineInReach:!1,fireLevel:0,dropCooldown:0,starveTimer:0,portrait:!1,paused:!1,fuel:100,fireOut:!1,fireFlare:0,fireInReach:!1,chopTimer:0,plantCooldown:0,targetTree:null,targetRock:null,falling:0,invuln:0,hitEffectTimer:0};try{window.localStorage.getItem(Bh)==="first"&&(p.firstPerson=!0,p.viewBlend=1),p.invertHorizontalLook=window.localStorage.getItem(zh)!=="false"}catch{}function Id(n,t=!0){p.firstPerson=!!n,$r&&($r.classList.toggle("first-person",p.firstPerson),$r.setAttribute("aria-pressed",String(p.firstPerson)),$r.setAttribute("aria-label",p.firstPerson?"Switch to third-person view":"Switch to first-person view"));try{window.localStorage.setItem(Bh,p.firstPerson?"first":"third")}catch{}t&&Dt(p.firstPerson?"First-person view":"Third-person view")}function LM(){Id(!p.firstPerson),Br()}function Yt(n,t,e){return Math.min(Math.max(n,t),e)}function Ec(n){const t=Yt(n,0,1);return t*t*(3-2*t)}function IM(n,t,e){let i=t-n;return i=Math.atan2(Math.sin(i),Math.cos(i)),n+i*e}function se(){Lv.textContent=`${p.night} / ${p.maxNight}`,Uv.textContent=String(Jr("wood")),Nv.textContent=String(Jr("sapling")),Fv.textContent=String(Jr("berry")),Ov.textContent=String(Jr("iron")),Dv.textContent=String(Math.max(0,Math.ceil(p.health))),zv.textContent=String(Math.max(0,Math.ceil(p.hunger)));const n=Yt(p.health,0,100);ya.style.width=`${n}%`,ya.classList.toggle("low",n<=55&&n>25),ya.classList.toggle("critical",n<=25);const t=Yt(p.hunger,0,100);Eu.style.width=`${t}%`,Eu.classList.toggle("low",t<=30),Ph.style.display=$t?"flex":"none",Lh.style.display=$t&&$t.type==="sapling"?"flex":"none";const e=Yt(p.fuel,0,100),i=Math.round(e);Ea.style.width=`${e}%`,Ea.classList.toggle("low",e<=55&&e>25),Ea.classList.toggle("critical",e<=25),Bv.textContent=`${i}%`,p.fireOut?(Zn.textContent="The fire is out!",Zn.style.color="#ff5d5d"):e<=25?(Zn.textContent="Fire almost out",Zn.style.color="#ff5d5d"):e<=55?(Zn.textContent="Fire is low",Zn.style.color="#ffba58"):(Zn.textContent="Fire is strong",Zn.style.color="#8aec9b");const r=p.started&&p.fireOut;Hc.classList.toggle("visible",r),Hv.textContent=`${xo()}/${vo}`,Vv.textContent=`${xo()} / ${vo}`,ki(),Dd()}function ki(){const n=[["axe",Ih],["backpack",is],["pickaxe",Dh],["ironAxe",Uh],["ironSword",Nh]];for(const[t,e]of n){const i=t==="backpack"||!!p.ownedTools[t],r=p.equippedTool===t;e.classList.toggle("hidden",!i),e.classList.toggle("equipped",r),e.setAttribute("aria-pressed",String(r))}}function Dd(){if(!p.inventoryOpen)return;const n=`${p.backpack.wood}|${p.backpack.sapling}|${p.backpack.berry}|${p.backpack.iron}`;if(n===Mc)return;Mc=n,wa.innerHTML="";const t=[["wood","Wood log"],["sapling","Sapling"],["berry","Berry"],["iron","Iron piece"]];let e=!1;for(const[i,r]of t){const s=p.backpack[i];if(s<=0)continue;e=!0;const o=document.createElement("div");o.className="inventory-row";const a=document.createElement("span");a.className=`inv-icon ${i}`;const c=document.createElement("span");c.className="inv-name",c.textContent=r;const l=document.createElement("span");l.className="inv-count",l.textContent=`×${s}`;const u=document.createElement("button");if(u.className="inv-btn take",u.textContent="TAKE",u.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),DM(i)}),o.append(a,c,l,u),i==="berry"){const d=document.createElement("button");d.className="inv-btn eat",d.textContent="EAT",d.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),UM()}),o.append(d)}wa.appendChild(o)}if(!e){const i=document.createElement("div");i.className="inventory-empty",i.textContent="Your backpack is empty.",wa.appendChild(i)}}function bn(n){p.inventoryOpen=n,Gv.classList.toggle("hidden",!n),n&&(Vn(),ui(!1),Pi=0,Er.classList.remove("visible"),Mc="",Dd()),ki()}function DM(n){if(!p.started||p.gameOver||p.falling||p.backpack[n]<=0)return;p.backpack[n]-=1;const t=J.position.x+Math.sin(J.rotation.y)*1.35,e=J.position.z+Math.cos(J.rotation.y)*1.35;li(n,t,e,{velocityY:2.2,pickupDelay:.3}),p.dropCooldown=.25,se(),Dt(`Took out ${Or[n].toLowerCase()}`)}function UM(){!p.started||p.gameOver||p.falling||p.backpack.berry<=0||(p.backpack.berry-=1,p.hunger=Yt(p.hunger+Iu,0,100),se(),Dt(`Ate a berry (+${Iu} hunger)`))}function mn(n){if(!(!p.started||p.gameOver||p.falling||p.paused)){if(n!=="backpack"&&!p.ownedTools[n]){Dt(`Craft the ${Or[n]||"tool"} first`);return}if(n==="backpack"&&p.equippedTool==="backpack"){bn(!p.inventoryOpen),ki();return}n===p.equippedTool?p.equippedTool=null:p.equippedTool=n,Vn(),ui(!1),p.equippedTool!=="backpack"&&bn(!1),p.equipTimer=p.equippedTool?Fo:0,Br(),se(),ko()}}function NM(){p.equippedTool=null,p.equipTimer=0,bn(!1),Vn(),Br(),se(),ko()}function FM(){switch(p.equippedTool){case"axe":return Xe;case"backpack":return Rn;case"pickaxe":return Po;case"ironAxe":return Lo;case"ironSword":return Io;default:return null}}function ko(){Xe.visible=p.equippedTool==="axe",Rn.visible=p.equippedTool==="backpack",Po.visible=p.equippedTool==="pickaxe",Lo.visible=p.equippedTool==="ironAxe",Io.visible=p.equippedTool==="ironSword",Co.visible=!p.equippedTool}function OM(n){p.equipTimer=Math.max(0,p.equipTimer-n);const t=FM();if(!t)return;const e=t.userData.baseY??t.position.y,i=t===Rn?.92:1;if(p.equipTimer>0){const r=1-p.equipTimer/Fo,s=1-(1-r)*(1-r);t.scale.setScalar((.55+s*.45)*i),t.position.y=e-(1-s)*.26}else t.scale.setScalar(i),t.position.y=e}function BM(n){for(const[t,e]of Object.entries(od))e.visible=n&&p.equippedTool===t}function zM(n){if(!ps.visible)return;let t=0;if(p.attackTimer>0){const a=1-p.attackTimer/No;t=Math.sin(Yt(a,0,1)*Math.PI)}else if(p.chopTimer>0){const a=1-p.chopTimer/.3;t=Math.sin(Yt(a,0,1)*Math.PI)*.85}else if(p.equipTimer>0){const a=1-p.equipTimer/Fo;t=-Math.sin(Yt(a,0,1)*Math.PI)*.3}const e=p.moveSpeed>.1&&p.grounded,i=p.walkPhase,r=e?Math.sin(i)*.018:Math.sin(p.idleTime*1.7)*.006,s=e?Math.abs(Math.cos(i))*.012:Math.sin(p.idleTime*1.5)*.004,o=1-Math.exp(-18*n);fe.position.x+=(or.x+r-fe.position.x)*o,fe.position.y+=(or.y+s-fe.position.y)*o,fe.position.z=or.z,fe.rotation.x+=(or.rx-t*1.35-fe.rotation.x)*o,fe.rotation.y=or.ry,fe.rotation.z+=(or.rz+t*.55-fe.rotation.z)*o}function kM(){os.style.transform="translate(-50%, -50%)"}function HM(n,t){const e=yr.getBoundingClientRect(),i=e.left+e.width/2,r=e.top+e.height/2,s=n-i,o=t-r,a=e.width*.31,c=Math.min(Math.hypot(s,o),a),l=Math.atan2(o,s),u=Math.cos(l)*c,d=Math.sin(l)*c;p.joystick.x=u/a,p.joystick.y=d/a,p.joystick.active=!0,os.style.left=`${50+u/a*30}%`,os.style.top=`${50+d/a*30}%`}function Ud(n){n.preventDefault(),p.joystick.active=!0,HM(n.clientX,n.clientY)}yr.addEventListener("pointerdown",n=>{p.pointerId=n.pointerId,Ud(n),yr.setPointerCapture(n.pointerId)});yr.addEventListener("pointermove",n=>{!p.joystick.active||n.pointerId!==p.pointerId||Ud(n)});function Ho(){p.pointerId=null,p.joystick.x=0,p.joystick.y=0,p.joystick.active=!1,os.style.left="50%",os.style.top="50%",kM()}yr.addEventListener("pointerup",Ho);yr.addEventListener("pointercancel",Ho);const Bi=new Map;function GM(n){return!!(n&&n.closest&&n.closest("button, #inventoryPanel, #upgradePanel, #settingsPanel, #startOverlay, #rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone"))}function VM(n,t){if(!yu)return!1;const e=yu.getBoundingClientRect();return n>=e.left&&n<=e.right&&t>=e.top&&t<=e.bottom}function cl(){return!p.started||p.gameOver||p.falling||p.portrait||p.inventoryOpen||p.machineOpen||p.settingsOpen}window.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||GM(n.target)||VM(n.clientX,n.clientY)||!p.started||p.gameOver||p.falling||p.portrait||Bi.set(n.pointerId,{startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,startTime:performance.now(),moved:0,dragging:!1,canLook:n.clientX>=window.innerWidth*.5})});window.addEventListener("pointermove",n=>{const t=Bi.get(n.pointerId);if(!t)return;const e=n.clientX-t.lastX,i=n.clientY-t.lastY;if(t.lastX=n.clientX,t.lastY=n.clientY,t.moved=Math.max(t.moved,Math.hypot(n.clientX-t.startX,n.clientY-t.startY)),!t.dragging&&t.moved>kh&&(t.dragging=!0),!t.dragging||!t.canLook||cl())return;const r=p.invertHorizontalLook?1:-1;p.cameraYaw+=e*sx*r,p.cameraPitch=Yt(p.cameraPitch-i*ox,-Cu,Cu)});function Nd(n){const t=Bi.get(n.pointerId);if(!t)return;Bi.delete(n.pointerId);const e=performance.now()-t.startTime,i=!t.dragging&&t.moved<=kh&&e<=ax;tM(i?"TAP":"DRAG"),!(n.type==="pointercancel"||!i)&&(cl()||jM(t.startX,t.startY))}window.addEventListener("pointerup",Nd);window.addEventListener("pointercancel",Nd);function Fd(){return window.innerHeight>window.innerWidth}async function WM(){if(window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function Od(){if(!Fd()){WM(),p.started=!0,p.victory=!1,p.gameOver=!1,p.paused=!1,Bn.classList.add("hidden"),p.health=100,p.hunger=100,p.night=1,p.cycleTime=0,p.daylight=1,p.nightActive=!1,p.attackCooldown=0,p.attackTimer=0,p.damageFlash=0,p.nearFire=!0,p.keys.clear(),p.cameraYaw=0,p.cameraPitch=0,p.cameraDistance=Wc,p.velocityY=0,p.grounded=!0,p.jumpHeld=!1,p.walkPhase=0,p.idleTime=0,p.moveSpeed=0,p.backpack.wood=0,p.backpack.sapling=0,p.backpack.berry=0,p.backpack.iron=0,p.ownedTools.axe=!0,p.ownedTools.pickaxe=!1,p.ownedTools.ironAxe=!1,p.ownedTools.ironSword=!1,p.equippedTool=null,p.equipTimer=0,p.inventoryOpen=!1,p.machineOpen=!1,p.settingsOpen=!1,p.machineInReach=!1,p.fireLevel=0,p.targetRock=null,p.dropCooldown=0,p.starveTimer=0,p.fuel=100,p.fireOut=!1,p.fireFlare=0,p.chopTimer=0,p.plantCooldown=0,p.targetTree=null,p.falling=0,p.invuln=0,p.hitEffectTimer=0,Pi=0,Er.classList.remove("visible"),bn(!1),Vn(),ui(!1),qt.scale.setScalar(1),wr.distance=15,Tr.distance=20,xt.fuel=0,xt.working=null,xt.progress=0,xt.stalled=!1,xt.statusTimer=0,xt.statusText="",vs(),Fx(),Ox(),J.position.set(0,ue(0,-3.5),-3.5),J.rotation.y=0,p.cameraInitialized=!1,wn.rotation.set(0,0,0),_n.rotation.set(0,0,0),Ni.rotation.set(0,0,0),Fi.rotation.set(0,0,0),an.position.y=.01,Bi.clear(),p.look.active=!1,p.pinchDistance=0;for(const n of pr)be.remove(n.mesh);pr.length=0,cM();for(let n=We.length-1;n>=0;n-=1){const t=We[n];if(t.userData.planted){be.remove(t),We.splice(n,1);continue}t.visible=!0,t.rotation.set(0,0,0),t.quaternion.identity(),t.userData.baseChoppable&&bd(t)}Hc.classList.remove("visible"),bo.classList.remove("visible"),Gc.style.opacity="0";for(const n of oi)n.visible=!1,n.position.set(0,-40,0),Rd(n),n.visible=!1;Je.visible=!1,Ze.visible=!1,ko(),se(),Dt("Tap a tool · loose iron by the machine")}}kv.addEventListener("click",Od);const XM=new Set([" ","arrowup","arrowdown","arrowleft","arrowright"]),Bd=new Set(["shift","j"]);window.addEventListener("keydown",n=>{const t=n.key.toLowerCase();XM.has(t)&&n.preventDefault(),t==="q"&&!n.repeat&&Ad(),t==="f"&&!n.repeat&&Ed(),t==="1"&&!n.repeat&&mn("axe"),t==="2"&&!n.repeat&&mn("backpack"),t==="3"&&!n.repeat&&mn("pickaxe"),t==="4"&&!n.repeat&&mn("ironAxe"),t==="5"&&!n.repeat&&mn("ironSword"),t==="escape"&&!n.repeat&&(Vn(),ui(!1),bn(!1)),Bd.has(t)&&(p.jumpHeld=!0,n.repeat||Vo()),p.keys.add(t)});window.addEventListener("keyup",n=>{const t=n.key.toLowerCase();p.keys.delete(t),Bd.has(t)&&(p.jumpHeld=!1)});window.addEventListener("blur",()=>{p.keys.clear(),p.jumpHeld=!1});Ph.addEventListener("pointerdown",n=>{n.preventDefault(),Ed()});Lh.addEventListener("pointerdown",n=>{n.preventDefault(),Ad()});Ih.addEventListener("pointerdown",n=>{n.preventDefault(),mn("axe")});is.addEventListener("pointerdown",n=>{n.preventDefault(),mn("backpack")});Dh.addEventListener("pointerdown",n=>{n.preventDefault(),mn("pickaxe")});Uh.addEventListener("pointerdown",n=>{n.preventDefault(),mn("ironAxe")});Nh.addEventListener("pointerdown",n=>{n.preventDefault(),mn("ironSword")});qv.addEventListener("pointerdown",n=>{n.preventDefault(),Vn()});$v.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),EM()});Wv.addEventListener("pointerdown",n=>{n.preventDefault(),bn(!1)});Xv.addEventListener("pointerdown",n=>{n.preventDefault(),NM()});const ku=new Rh,Aa=new zt,qM=.3,YM=new cn({color:16777215,side:Fe,transparent:!0,opacity:.9,depthWrite:!1}),Qr=[];function Qn(n){if(!n)return;const t=[];if(n.traverse(i=>{!i.isMesh||!i.geometry||i.userData.outlineShell||t.push(i)}),t.length===0)return;const e=[];for(const i of t){const r=new Q(i.geometry,YM);r.scale.setScalar(1.05),r.renderOrder=3,r.userData.outlineShell=!0,i.add(r),e.push({node:i,shell:r})}Qr.push({shells:e,until:performance.now()+qM*1e3})}function KM(){if(Qr.length===0)return;const n=performance.now();for(let t=Qr.length-1;t>=0;t-=1){const e=Qr[t];if(!(n<e.until)){for(const{node:i,shell:r}of e.shells)i.remove(r);Qr.splice(t,1)}}}function $M(n){let t=n;for(;t;){const e=t.userData;if(e.itemRef)return{kind:"item",item:e.itemRef,mesh:t};if(e.rockRef)return{kind:"rock",rock:e.rockRef};if(e.treeRef)return{kind:"tree",tree:e.treeRef};if(e.enemyRef)return{kind:"enemy",enemy:e.enemyRef};if(e.saplingRef)return{kind:"sapling",sapling:e.saplingRef};if(e.berryBushRef)return{kind:"berry",bush:e.berryBushRef};if(e.machineRef)return{kind:"machine"};if(e.campfireRef)return{kind:"campfire"};t=t.parent}return null}function jM(n,t){if(cl())return;const e=Ch.getBoundingClientRect();Aa.x=(n-e.left)/e.width*2-1,Aa.y=-((t-e.top)/e.height)*2+1,ku.setFromCamera(Aa,Ce);const i=ku.intersectObjects(be.children,!0);for(const r of i){if(!r.object.isMesh||r.object.userData.tapIgnore)continue;const s=$M(r.object);if(!s)break;if(s.kind==="enemy"){Hu(s);return}wc(),Hu(s);return}wc()}function Hu(n){var s;const t=J.position.x,e=J.position.z,i=(o,a)=>Math.hypot(t-o,e-a)<=so,r=()=>Dt("Too far");switch(n.kind){case"item":{const o=n.item;if(!i(o.x,o.z))return r();Qn(o.mesh),yd(o);return}case"rock":{const o=n.rock;if(!i(o.x,o.z))return r();if(Qn(o.group),!xd(p.equippedTool)){Dt("Equip the pickaxe to mine iron");return}vM(o);return}case"tree":{const o=n.tree;if(!i(o.position.x,o.position.z))return r();if(Qn(o),!Qx(p.equippedTool)){Dt("Equip the axe to chop");return}_M(o,((s=Oo[p.equippedTool])==null?void 0:s.treePower)??1);return}case"enemy":{const o=n.enemy;if(!i(o.position.x,o.position.z))return r();Qn(o),wc(o);return}case"sapling":{if(!i(n.sapling.x,n.sapling.z))return r();Qn(n.sapling.mesh),Dt("The sapling is still growing");return}case"berry":{const o=n.bush;if(!i(o.x,o.z))return r();Qn(o.mesh),ZM(o);return}case"machine":{if(Sc()>so)return r();if(Sc()>gd){Dt("Move closer to the machine");return}Qn(ce),SM();return}case"campfire":{if(il()>so)return r();Qn(qt),JM();return}}}function ZM(n){const t=performance.now();if(t<(n.nextHarvest||0)){Dt("The bush needs a moment");return}if(n.nextHarvest=t+4500,Sd()){if(xo()>=vo){Dt("Backpack is full");return}p.backpack.berry+=1,se(),_s(),Dt("+1 berry");return}if($t){Dt("Hands full");return}const e=li("berry",J.position.x,J.position.z,{startY:ue(J.position.x,J.position.z)+.5,velocityY:1.2,pickupDelay:0});yd(e)}function JM(){if($t&&vd.has($t.type)){pM();return}if(uM()>0){mM();return}Dt(p.fuel>=99.5?"The fire is already full":"Add wood to feed the fire")}function Go(n){p.jumpHeld=n,n&&Vo()}as.addEventListener("pointerdown",n=>{n.preventDefault(),as.setPointerCapture(n.pointerId),Go(!0)});as.addEventListener("pointerup",()=>Go(!1));as.addEventListener("pointercancel",()=>Go(!1));as.addEventListener("lostpointercapture",()=>Go(!1));Bn.addEventListener("pointerdown",n=>{!p.started&&n.target===Bn&&Od()});function QM(n,t,e,i){Bn.classList.remove("hidden"),Bn.querySelector(".title").textContent=n,Bn.querySelector(".subtitle").textContent=t,Bn.querySelector(".hint").textContent=e,Bn.querySelector("button").textContent=i,Hc.classList.remove("visible"),bo.classList.remove("visible"),Er.classList.remove("visible"),bn(!1),Vn(),ui(!1),vs(),p.equippedTool=null,p.equipTimer=0,ko(),se(),Gc.style.opacity="0"}function wc(n=null){if(!p.started||p.gameOver||p.falling||p.paused||p.machineOpen||p.settingsOpen||p.attackCooldown>0)return;const t=Oo[p.equippedTool];if(!["axe","ironAxe","ironSword"].includes(p.equippedTool)||!t)return;n?J.rotation.y=Math.atan2(n.position.x-J.position.x,n.position.z-J.position.z):J.rotation.y=p.cameraYaw,p.attackCooldown=t.cooldown,p.attackTimer=No,Je.visible=!0,Je.scale.setScalar(.7),Do.intensity=1.8,RS();const e=new L(Math.sin(J.rotation.y),0,Math.cos(J.rotation.y));if(n){if(n.visible&&!n.userData.fading){const i=n.position.clone().sub(J.position);i.y=0,i.length()<=so&&Gu(n,t,e)}return}for(const i of oi){if(!i.visible||i.userData.fading)continue;const r=i.position.clone().sub(J.position);r.y=0;const s=r.length();s>3||s<.01||(r.normalize(),!(e.dot(r)<.2)&&Gu(i,t,e))}}function Gu(n,t,e){const i=n.userData;i.health-=t.damage,i.hitTimer=.22,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.1,i.knockback.addScaledVector(e,4.2+t.damage*.6),IS(),Ze.position.copy(n.position),Ze.position.y+=1.15,Ze.scale.setScalar(.8),Ze.material.opacity=.95,Ze.visible=!0,p.hitEffectTimer=.22,i.health<=0&&(i.health=0,i.dead=!0,i.attackCooldown=0,zd(n,4))}function zd(n,t){const e=n.userData;n.visible&&(e.fading=!0,e.fade=1,e.fadeRate=t,e.bodyMat.transparent=!0,e.eyeMat.transparent=!0)}function tS(n){!p.started||p.gameOver||p.falling||p.invuln>0||(p.health=Math.max(0,p.health-n),p.damageFlash=1,se(),p.health<=0&&kd())}function kd(){p.falling>0||(p.falling=2.4,p.health=0,p.attackTimer=0,Je.visible=!1,bn(!1),Vn(),bo.classList.add("visible"),AS(),se())}function eS(){p.falling=0,p.health=100,p.hunger=Math.max(p.hunger,55),p.invuln=2,p.damageFlash=0,p.velocityY=0,p.grounded=!0,p.attackCooldown=0,p.attackTimer=0,J.position.set(0,ue(0,3.6),3.6),J.rotation.y=0,wn.rotation.set(0,0,0),_n.rotation.set(0,0,0),Ni.rotation.set(0,0,0),Fi.rotation.set(0,0,0),bo.classList.remove("visible"),p.cycleTime=wi,p.nightActive=!0,Hd(),se()}function Hd(){p.nightActive=!0;const n=Math.min(p.night+1,md);for(let t=0;t<oi.length;t+=1){const e=oi[t];if(t>=n){e.visible=!1,e.position.set(0,-40,0);continue}const i=t/n*Math.PI*2+(Math.random()-.5)*.5,r=33+Math.random()*6,s=Math.cos(i)*r,o=Math.sin(i)*r;Rd(e),e.position.set(s,ue(s,o),o),e.rotation.y=Math.atan2(-s,-o);const a=e.userData;a.dead=!1,a.health=Math.min(8,2+Math.floor((p.night-1)/12)),a.maxHealth=a.health,a.speed=Math.min(3.5,1.15+p.night*.045+Math.random()*.22),a.damage=Math.min(22,6+p.night*.3),a.targetCamp=t%4===0,a.circleDir=Math.random()<.5?1:-1,a.phase=Math.random()*Math.PI*2}sn.visible=!0,sn.position.copy(J.position),sn.position.y=1.4,sn.intensity=2.6}function nS(){const n=J.position.x-qt.position.x,t=J.position.z-qt.position.z,e=Zx();return n*n+t*t<e*e?1:0}const co=6,ll=.32,iS=7.4,rS=17.5;function Vo(){!p.started||p.gameOver||p.falling||!p.grounded||p.machineOpen||p.settingsOpen||p.inventoryOpen||(p.velocityY=iS,p.grounded=!1,DS())}function Vu(n){const t=ue(J.position.x,J.position.z);if(!p.started||p.gameOver){p.velocityY=0,p.grounded=!0,J.position.y=t;return}if(p.grounded){J.position.y=t,p.jumpHeld&&Vo();return}const e=p.velocityY;p.velocityY-=rS*n,J.position.y+=p.velocityY*n,J.position.y<=t&&(J.position.y=t,p.velocityY=0,p.grounded=!0,e<-2.4&&US())}function sS(){for(const n of We){if(!n.visible||n.userData.falling)continue;const t=J.position.x-n.position.x,e=J.position.z-n.position.z,i=n.userData.scale*.3+ll,r=t*t+e*e;if(r>=i*i||r<1e-4)continue;const s=Math.sqrt(r),o=i-s;J.position.x+=t/s*o,J.position.z+=e/s*o}}function Gd(n,t=ll){for(const e of Vc){if(e.rock&&e.rock.broken)continue;const i=n.position.x-e.x,r=n.position.z-e.z,s=e.radius+t,o=i*i+r*r;if(o>=s*s)continue;if(o<1e-4){n.position.x=e.x+s;continue}const a=Math.sqrt(o),c=s-a;n.position.x+=i/a*c,n.position.z+=r/a*c}for(const e of br){const i=n.position.x-e.x,r=n.position.z-e.z,s=Math.cos(e.rotation),o=Math.sin(e.rotation);let a=i*s-r*o,c=i*o+r*s;const l=e.width/2+t,u=e.depth/2+t;if(Math.abs(a)>=l||Math.abs(c)>=u)continue;const d=l-Math.abs(a),f=u-Math.abs(c);d<f?a=Math.sign(a||1)*l:c=Math.sign(c||1)*u,n.position.x=e.x+a*s+c*o,n.position.z=e.z-a*o+c*s}}function oS(n,t,e){if(p.grounded)for(const i of nl){if(i.rock&&i.rock.broken)continue;const r=n-i.x,s=t-i.z,o=i.radius+ll+.12;if(r*r+s*s>o*o)continue;const a=i.x-n,c=i.z-t;if(!(e.x*a+e.z*c<=0)&&i.top-J.position.y<=.95){Vo();return}}}function aS(n){if(!p.started||p.gameOver||p.falling)return;const t=p.keys,e=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),i=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),r=Yt(p.joystick.x+e,-1,1),s=Yt(-p.joystick.y+i,-1,1);if(Math.abs(r)+Math.abs(s)<.02){p.moveSpeed=0;return}const o=new L(Math.sin(p.cameraYaw),0,Math.cos(p.cameraYaw)),a=new L(-Math.cos(p.cameraYaw),0,Math.sin(p.cameraYaw)),c=new L;c.addScaledVector(o,s),c.addScaledVector(a,r),c.normalize(),p.moveSpeed=co;const l=Math.atan2(c.x,c.z),u=1-Math.exp(-15*n);J.rotation.y=IM(J.rotation.y,l,u);const d=J.position.x+c.x*n*co,f=J.position.z+c.z*n*co;oS(d,f,c),J.position.x=d,J.position.z=f,sS(),Gd(J),J.position.x=Yt(J.position.x,-30,30),J.position.z=Yt(J.position.z,-30,30)}function Wu(n){const t=Yt(n,0,1);if(t<.35){const i=t/.35;return-1.05*(i*i*(3-2*i))}if(t<.72){const i=(t-.35)/.37;return-1.05+1.85*(i*i*(3-2*i))}const e=(t-.72)/.28;return .8-.8*(e*e*(3-2*e))}function cS(n){p.idleTime+=n;const t=Bo(p.equippedTool);let e=0,i=0,r=0,s=0,o=0,a=0;if(!p.grounded)p.velocityY>.25?(e=-2.55,i=-2.55,r=-.18,s=.18):(e=-.2,i=-.2,r=-1.35,s=1.35),t&&(i=Si+(p.velocityY>.25?-.18:.12),s=sr),o=.12,a=-.12;else if(p.attackTimer>0){const u=1-p.attackTimer/No,d=Math.sin(Yt(u,0,1)*Math.PI);e=.22*d,t?(i=Si+Wu(u),s=sr+.1*d):(i=-.45-2.25*d,s=.34*d),o=.08*d,a=-.08*d}else if(p.chopTimer>0){const u=1-p.chopTimer/.3,d=Math.sin(Yt(u,0,1)*Math.PI);e=-.4*d,t?(i=Si+Wu(u),s=sr+.08*d):(i=-2.2*d,s=.12*d)}else if(p.equipTimer>0){const u=1-p.equipTimer/Fo,d=Math.sin(Yt(u,0,1)*Math.PI);t?(i=Si-.45*d,s=sr+.12*d):(i=-1.15*d,s=.22*d),e=.18*d}else if(p.moveSpeed>.1){p.walkPhase+=n*(5+p.moveSpeed);const u=Math.sin(p.walkPhase)*.72;e=u,i=t?Si-u*lx:-u,t&&(s=sr),o=-u,a=u}else{const u=Math.sin(p.idleTime*1.9)*.05;e=u,t?(i=Si-u*.4,s=sr):i=-u}const c=1-Math.exp(-14*n);wn.rotation.x+=(e-wn.rotation.x)*c,_n.rotation.x+=(i-_n.rotation.x)*c,wn.rotation.z+=(r-wn.rotation.z)*c,_n.rotation.z+=(s-_n.rotation.z)*c,Ni.rotation.x+=(o-Ni.rotation.x)*c,Fi.rotation.x+=(a-Fi.rotation.x)*c;const l=p.grounded&&p.moveSpeed>.1?Math.abs(Math.sin(p.walkPhase))*.02:0;an.position.y+=(.01+l-an.position.y)*c}function lS(n){if(!p.started||p.gameOver)return;const t=!p.fireOut&&p.fuel>Wx;for(const e of oi){const i=e.userData;if(!e.visible)continue;if(i.fading){i.fade=Math.max(0,i.fade-n*(i.fadeRate||1));const T=i.fade;i.bodyMat.opacity=T,i.eyeMat.opacity=T,e.scale.setScalar(.4+T*.6),T<=0&&(e.visible=!1,i.fading=!1,i.dead=!0,e.position.set(0,-40,0));continue}if(p.falling>0)continue;i.hitTimer>0&&(i.hitTimer-=n,i.hitTimer<=0&&(i.bodyMat.emissive.setHex(0),i.bodyMat.emissiveIntensity=1)),i.knockback.lengthSq()>4e-4&&(e.position.addScaledVector(i.knockback,n),i.knockback.multiplyScalar(Math.exp(-9*n)));const r=Math.hypot(J.position.x-e.position.x,J.position.z-e.position.z);let s=J.position.x,o=J.position.z;i.targetCamp&&r>10&&!p.fireOut&&(s=qt.position.x,o=qt.position.z);let a=s-e.position.x,c=o-e.position.z;const l=Math.hypot(a,c);let u=0,d=0,f=!1;if(l>.35&&(u=a/l*i.speed*n,d=c/l*i.speed*n,f=!0),t){const T=e.position.x-qt.position.x,N=e.position.z-qt.position.z,A=Math.hypot(T,N)||1,R=T/A,I=N/A;A<vi()+1.2&&(u+=-I*i.circleDir*i.speed*n*.5,d+=R*i.circleDir*i.speed*n*.5)}let g=e.position.x+u,_=e.position.z+d;if(t){const T=e.position.x-qt.position.x,N=e.position.z-qt.position.z,A=Math.hypot(T,N)||1;A<vi()-.05&&(g=qt.position.x+T/A*vi(),_=qt.position.z+N/A*vi());const R=g-qt.position.x,I=_-qt.position.z;if((Math.hypot(R,I)||1)<vi()){const v=e.position.x-qt.position.x,P=e.position.z-qt.position.z,z=Math.hypot(v,P)||1;g=qt.position.x+v/z*vi(),_=qt.position.z+P/z*vi()}}e.position.x=Yt(g,-46,46),e.position.z=Yt(_,-46,46),Gd(e,.36),e.position.x=Yt(e.position.x,-46,46),e.position.z=Yt(e.position.z,-46,46),e.position.y=ue(e.position.x,e.position.z);const M=s-e.position.x,m=o-e.position.z;Math.hypot(M,m)>.01&&(e.rotation.y=Math.atan2(M,m));const h=f?.58:.1;i.phase+=n*(3.4+i.speed*1.5)*(f?1:.3);const E=Math.sin(i.phase);i.legs[0].rotation.x=E*h,i.legs[1].rotation.x=-E*h,i.arms[0].rotation.x=-E*h*.8,i.arms[1].rotation.x=E*h*.8,i.bodyGroup.position.y=Math.abs(E)*.035,i.attackCooldown=Math.max(0,i.attackCooldown-n),Math.hypot(J.position.x-e.position.x,J.position.z-e.position.z)<1.45&&Math.abs(J.position.y-e.position.y)<2.2&&i.attackCooldown<=0&&p.invuln<=0&&(tS(i.damage),i.attackCooldown=1.05)}}function uS(n){!p.started||p.gameOver||p.falling||(p.hunger=Math.max(0,p.hunger-n*qx),p.hunger<=0?(p.starveTimer+=n,p.starveTimer>=1&&(p.starveTimer-=1,p.health=Math.max(0,p.health-2),p.damageFlash=Math.max(p.damageFlash,.45),se(),p.health<=0&&kd())):p.starveTimer=0)}function hS(n){p.started&&!p.gameOver&&(p.fuel=Math.max(0,p.fuel-n*zx),p.fireFlare=Math.max(0,p.fireFlare-n*1.8),p.fuel<=0&&(p.fireOut=!0));const t=Yt(p.fuel/100,0,1),e=nS()>0;p.nearFire=e,e&&p.started&&!p.gameOver&&!p.falling&&!p.fireOut&&(p.health=Yt(p.health+n*3,0,100)),sn.visible=sn.visible&&sn.intensity>.1,sn.visible&&(sn.intensity*=.96);const i=performance.now()*.001,r=.85+Math.sin(i*17.3)*.12+Math.sin(i*29.7+.7)*.08,s=!p.fireOut;if(Ci.visible=s,Ti.visible=s,ur.visible=s,al.visible=s,s){const o=.55+t*.45;Ci.scale.setScalar((.8+t*.45)*(1+Math.sin(i*12)*.08)),Ci.position.y=.55+Math.sin(i*6)*.04,Ci.rotation.y+=n*2.4;const a=1.5*o;Ti.scale.setScalar(o*(.9+Math.sin(i*9)*.1)),Ti.position.y=.4+a*.5+Math.sin(i*8.5)*.04,Ti.rotation.y+=n*1.9,Ti.rotation.z=Math.sin(i*3.1)*.08;const c=1.05*o;ur.scale.setScalar(o*(.92+Math.sin(i*14)*.1)),ur.position.y=.42+c*.5+Math.sin(i*10+1)*.03,ur.rotation.z=Math.sin(i*4.7+1)*.07,wr.intensity=(2+t*1.8+p.fireLevel*.55)*r+p.fireFlare*3.2,Tr.intensity=(.6+t*.8+p.fireLevel*.28)*r+p.fireFlare*1.8,Cd.opacity=.55+t*.3+Math.sin(i*13)*.1,CM(n,t)}else wr.intensity=0,Tr.intensity=0,zo.setDrawRange(0,0);for(let o=0;o<ao.length;o+=1){const a=ao[o],c=(i*.42+o/ao.length)%1;a.position.set(Math.sin(i*1.4+o)*.14,1.5+c*1.8,Math.cos(i*1.2+o)*.12),a.scale.setScalar(.6+c*1.05),a.material.opacity=s?.09*(1-c):0}if(p.started&&!p.gameOver&&p.health>0){const o=.48+Math.sin(i*14)*.2;Do.intensity=o}}const dS=new Tt(7314084),fS=new Tt(133647),pS=new Tt(8890789),mS=new Tt(465186),gS=new Tt(14676479),_S=new Tt(9417960),vS=new Tt(16773840),xS=new Tt(11060991),MS=new Tt(4851718),js=new Tt,Xu=new Tt;function Vd(){const n=1-p.daylight;js.copy(dS).lerp(fS,n),p.damageFlash>0&&js.lerp(MS,p.damageFlash*.34),Oe.background.copy(js),Ld.material.color.copy(js),Xu.copy(pS).lerp(mS,n),Oe.fog.color.copy(Xu),Oe.fog.density=.018+n*.04,pc.color.copy(gS).lerp(_S,n),pc.intensity=1-n*.45,xn.color.copy(vS).lerp(xS,n),xn.intensity=1.25-n*.55,Iv.classList.toggle("night",n>.5);const t=p.started&&p.fireOut?.1:0;Gc.style.opacity=String(Yt(n*.3+t,0,.85))}function SS(n){const t=p.cycleTime;p.cycleTime+=n;let e=!1;p.cycleTime>=ar&&(p.cycleTime-=ar,e=!0);const i=p.cycleTime;if(i<wi-ba?p.daylight=1:i<wi?p.daylight=1-Ec((i-(wi-ba))/ba):i<ar-qr?p.daylight=0:p.daylight=Ec((i-(ar-qr))/qr),t<wi&&i>=wi&&!p.nightActive&&Hd(),t<ar-qr&&i>=ar-qr)for(const r of oi)r.visible&&!r.userData.fading&&!r.userData.dead&&zd(r,.3);if(e){if(p.nightActive=!1,sl(),bS(),Dt("You survived the night"),p.night>=p.maxNight){p.victory=!0,p.started=!1,p.gameOver=!0,QM("You Survived","99 nights survived. The camp still burns.","Tap to begin a new run.","Play Again");return}p.night+=1,se()}}const Ra=new Rh,Re=new L,Ca=new L,Nn=new L,qu=new L,Zs=new L,Yu=new L,yS=new L,Yr=new L,ti=[];function ES(n=.016){const t=p.cameraYaw,e=p.cameraPitch,i=Math.cos(e),r=Math.sin(e);Re.set(J.position.x,J.position.y+nx,J.position.z),Ca.set(Math.sin(t)*i,r,Math.cos(t)*i);const s=p.cameraDistance||Wc;Nn.copy(Re).addScaledVector(Ca,-s),Nn.y+=ix,Yr.copy(Nn).sub(Re);const o=Yr.length();o>1e-4&&Yr.normalize(),ti.length=0;const a=s+3.2;for(const h of We){if(!h.visible)continue;const E=h.position.x-Re.x,y=h.position.z-Re.z;E*E+y*y<a*a&&ti.push(h.userData.cameraMeshes[0],h.userData.cameraMeshes[1])}for(const h of Fr)h.broken||Math.hypot(h.x-Re.x,h.z-Re.z)<a&&ti.push(h.group);for(const h of nl)Math.hypot(h.x-Re.x,h.z-Re.z)<a&&ti.push(h.mesh);for(const h of br)Math.hypot(h.x-Re.x,h.z-Re.z)<a&&ti.push(h.group);Math.hypot(ce.position.x-Re.x,ce.position.z-Re.z)<a&&ti.push(ce);let c=o;if(ti.length>0){Ra.set(Re,Yr),Ra.far=o;const h=Ra.intersectObjects(ti,!0);h.length>0&&(c=Math.max(.85,h[0].distance-.24))}Nn.copy(Re).addScaledVector(Yr,c);const l=ue(Nn.x,Nn.z)+.35;Nn.y<l&&(Nn.y=l),qu.copy(Re);const u=p.firstPerson?1:0,d=1-Math.exp(-13*n);p.viewBlend+=(u-p.viewBlend)*d,Math.abs(p.viewBlend-u)<.0015&&(p.viewBlend=u);const f=Ec(Yt(p.viewBlend,0,1));Zs.lerpVectors(Nn,qu,f);const g=c<o-.01;if(!p.cameraInitialized)Ce.position.copy(Zs),p.cameraInitialized=!0;else if(f>.92)Ce.position.copy(Zs);else{const h=g?Math.min(1,d*3.4):Math.min(1,d*.95);Ce.position.lerp(Zs,Math.max(.12,h))}const _=ue(Ce.position.x,Ce.position.z)+.28;Ce.position.y<_&&(Ce.position.y=_),Yu.copy(Re).lerp(yS.copy(Re).addScaledVector(Ca,10),f),Ce.lookAt(Yu);const M=Ru+(rx-Ru)*f;Math.abs(Ce.fov-M)>.01&&(Ce.fov=M,Ce.updateProjectionMatrix());const m=f>.5;an.visible=!m,ps.visible=m,BM(m),m&&(Je.visible=!1)}const $={ctx:null,master:null,noiseBuffer:null,started:!1,volume:.7,muted:!1,windGain:null,cricketGain:null,fireGain:null,stepTimer:.22,fireCrackleTimer:.2,birdTimer:2.5,growlTimer:1.8,monsterStepTimer:.5,heartbeatTimer:0,machineRunning:!1,machineOsc:null,machineOsc2:null,machineGain:null};function gs(){return!!$.ctx&&$.started}function ai(){return $.ctx?$.ctx.currentTime:0}function wS(n){const t=Math.floor(n.sampleRate*2),e=n.createBuffer(1,t,n.sampleRate),i=e.getChannelData(0);let r=0;for(let s=0;s<t;s+=1){const o=Math.random()*2-1;r=r*.72+o*.28,i[s]=r*1.15}return e}function ul(){const n=window.AudioContext||window.webkitAudioContext;if(n)try{if(!$.ctx){const t=new n;$.ctx=t,$.master=t.createGain(),$.master.gain.value=$.muted?0:$.volume,$.master.connect(t.destination),$.noiseBuffer=wS(t);const e=t.createBufferSource();e.buffer=$.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=460,i.Q.value=.55,$.windGain=t.createGain(),$.windGain.gain.value=.012,e.connect(i).connect($.windGain).connect($.master),e.start();const r=t.createBufferSource();r.buffer=$.noiseBuffer,r.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=4300,s.Q.value=7,$.cricketGain=t.createGain(),$.cricketGain.gain.value=1e-4;const o=t.createOscillator();o.type="sine",o.frequency.value=5.1;const a=t.createGain();a.gain.value=.006,o.connect(a).connect($.cricketGain.gain),r.connect(s).connect($.cricketGain).connect($.master),r.start(),o.start();const c=t.createBufferSource();c.buffer=$.noiseBuffer,c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=760,l.Q.value=.6,$.fireGain=t.createGain(),$.fireGain.gain.value=1e-4,c.connect(l).connect($.fireGain).connect($.master),c.start()}$.started=!0,$.ctx.state==="suspended"&&$.ctx.resume()}catch{$.started=!1}}function oe(n,t,e,i="sine",r=.04,s=0,o=.008){if(!gs())return;const a=$.ctx,c=ai()+Math.max(0,s),l=a.createOscillator(),u=a.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(20,n),c),t&&t!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+e),u.gain.setValueAtTime(1e-4,c),u.gain.linearRampToValueAtTime(r,c+o),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect($.master),l.start(c),l.stop(c+e+.04)}function Be(n,t,e="lowpass",i=900,r=0,s=.8,o=0){if(!gs())return;const a=$.ctx,c=ai()+Math.max(0,o),l=a.createBufferSource();l.buffer=$.noiseBuffer;const u=a.createBiquadFilter();u.type=e,u.frequency.setValueAtTime(Math.max(40,i),c),r&&u.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+n),u.Q.value=s;const d=a.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+.006),d.gain.exponentialRampToValueAtTime(1e-4,c+n),l.connect(u).connect(d).connect($.master),l.start(c,Math.random()*1.2,n+.04)}function _s(){oe(520,760,.08,"sine",.045),oe(880,980,.06,"triangle",.024,.055)}function Br(){Be(.035,.025,"highpass",1900,0,.8),oe(300,220,.055,"square",.018)}function Wd(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>{oe(t,t,.52,"triangle",.04,e*.085),oe(t*2,t*2,.32,"sine",.014,e*.085+.008)})}function TS(){oe(1046.5,1046.5,.7,"sine",.055),oe(1568,1568,.55,"sine",.028,.02),oe(2093,2093,.4,"triangle",.014,.03)}function bS(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{oe(t,t,.62,"triangle",.045,e*.1),oe(t*1.5,t*1.5,.34,"sine",.012,e*.1+.01)})}function AS(){oe(330,120,1.1,"sawtooth",.045,0,.02),oe(220,82,1.3,"sine",.05,.04,.02),Be(.9,.025,"lowpass",420,110)}function RS(){Be(.18,.055,"bandpass",950,260,1.1)}function CS(){oe(132,52,.18,"sine",.11),Be(.14,.055,"lowpass",320,130)}function PS(){Be(.85,.09,"lowpass",950,120,.7),oe(90,38,.63,"sine",.08,.04),Be(.35,.04,"bandpass",1800,700,1.4,.08)}function Xd(){oe(1850,1450,.075,"triangle",.038),oe(2650,2100,.055,"sine",.02,.012),Be(.045,.025,"highpass",2400,0,.9)}function LS(){Xd(),Be(.38,.08,"lowpass",720,140,.8),oe(190,60,.34,"sine",.06,.02)}function IS(){oe(170,70,.14,"sine",.075),Be(.1,.045,"bandpass",680,250,.9)}function DS(){oe(220,360,.15,"sine",.03),Be(.11,.022,"highpass",900,0)}function US(){oe(115,52,.17,"sine",.075),Be(.12,.04,"lowpass",360,130)}function NS(){const n=72+Math.random()*28;oe(n,n*.7,.075,"sine",.028),Be(.075,.022,"lowpass",480+Math.random()*180,0,.7)}function FS(n){const t=.008+n*.03;Be(.025+Math.random()*.04,t,"highpass",900+Math.random()*1400,0,.9)}function OS(){const n=2100+Math.random()*900,t=2+Math.floor(Math.random()*2);for(let e=0;e<t;e+=1)oe(n+Math.random()*250,n+700+Math.random()*500,.085,"sine",.018,e*.11,.012)}function BS(n){if(!gs())return;const t=$.ctx,e=ai(),i=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(76,e),i.frequency.exponentialRampToValueAtTime(44,e+.75),r.type="lowpass",r.frequency.value=190,r.Q.value=1.2,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.012+n*.045,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+.78),i.connect(r).connect(s).connect($.master),i.start(e),i.stop(e+.82),Be(.5,.008+n*.018,"lowpass",260,90)}function zS(n){const t=.01+n*.045;oe(62,34,.12,"sine",t),Be(.1,t*.55,"lowpass",250,100)}function kS(n){const t=.018+n*.055;oe(58,44,.1,"sine",t),oe(52,38,.12,"sine",t*.7,.16)}function HS(){Be(.04,.02,"highpass",1700,0,1.2),oe(390,330,.06,"square",.012)}function qd(){if(!(!gs()||$.machineRunning))try{const n=$.ctx,t=n.createOscillator(),e=n.createOscillator(),i=n.createBiquadFilter(),r=n.createGain();t.type="sawtooth",t.frequency.value=55,e.type="square",e.frequency.value=82.5,i.type="lowpass",i.frequency.value=230,i.Q.value=.7,r.gain.setValueAtTime(1e-4,ai()),r.gain.linearRampToValueAtTime(.018,ai()+.18),t.connect(i),e.connect(i),i.connect(r).connect($.master),t.start(),e.start(),$.machineOsc=t,$.machineOsc2=e,$.machineGain=r,$.machineRunning=!0}catch{$.machineRunning=!1}}function vs(){if($.machineRunning){$.machineRunning=!1;try{const n=ai();$.machineGain.gain.cancelScheduledValues(n),$.machineGain.gain.setValueAtTime(Math.max(1e-4,$.machineGain.gain.value),n),$.machineGain.gain.exponentialRampToValueAtTime(1e-4,n+.16),$.machineOsc.stop(n+.2),$.machineOsc2.stop(n+.2)}catch{}$.machineOsc=null,$.machineOsc2=null,$.machineGain=null}}function Yd(){ro.classList.toggle("muted",$.muted),ro.setAttribute("aria-pressed",String($.muted)),ro.setAttribute("aria-label",$.muted?"Unmute sound":"Mute sound")}function Kd(){if(!$.master)return;const n=ai(),t=$.muted?0:$.volume;$.master.gain.cancelScheduledValues(n),$.master.gain.setValueAtTime($.master.gain.value,n),$.master.gain.linearRampToValueAtTime(t,n+.06)}function $d(n){$.volume=Yt(n,0,1),Kd(),tx.textContent=`${Math.round($.volume*100)}%`}function GS(){ul(),$.muted=!$.muted,Kd(),Yd(),Br()}function ui(n){p.settingsOpen=n,Jv.classList.toggle("hidden",!n),Oh.setAttribute("aria-expanded",String(n)),n&&(Vn(),bn(!1)),ki()}function VS(n){if(!gs())return;const t=ai(),e=1-p.daylight,i=p.started&&!p.gameOver&&!p.paused,r=!p.started||p.gameOver||p.paused;$.windGain.gain.setTargetAtTime(r?.007:.007+p.daylight*.03+e*.012,t,.7),$.cricketGain.gain.setTargetAtTime(r?1e-4:e*.017,t,.85);const s=il(),o=Yt(1-s/18,0,1),a=p.started&&!p.fireOut&&!p.gameOver,c=Yt(p.fuel/100,0,1);$.fireGain.gain.setTargetAtTime(a?(.004+o*.042)*(.45+c*.55):1e-4,t,.35),a&&!p.paused&&o>.04&&($.fireCrackleTimer-=n,$.fireCrackleTimer<=0&&(FS(o),$.fireCrackleTimer=.13+Math.random()*.42+(1-o)*.55)),i&&p.daylight>.55?($.birdTimer-=n*(.7+p.daylight*.7),$.birdTimer<=0&&(OS(),$.birdTimer=3+Math.random()*6)):$.birdTimer=Math.max($.birdTimer,1.5),i&&p.grounded&&p.moveSpeed>.1&&p.falling<=0?($.stepTimer-=n*(.8+p.moveSpeed/co*.8),$.stepTimer<=0&&(NS(),$.stepTimer=.31)):$.stepTimer=Math.min($.stepTimer,.16);let l=null,u=1/0;if(i)for(const d of oi){if(!d.visible||d.userData.fading)continue;const f=Math.hypot(J.position.x-d.position.x,J.position.z-d.position.z);f<u&&(u=f,l=d)}if(l&&u<21){const d=Yt(1-u/21,0,1);$.growlTimer-=n*(1+d*2.2),$.growlTimer<=0&&(BS(d),$.growlTimer=2.8+Math.random()*4.5),$.monsterStepTimer-=n*(1+d*.8),$.monsterStepTimer<=0&&(zS(d),$.monsterStepTimer=.45+Math.random()*.35),u<15?($.heartbeatTimer-=n,$.heartbeatTimer<=0&&(kS(d),$.heartbeatTimer=1.15-d*.72+Math.random()*.08)):$.heartbeatTimer=0}else $.growlTimer=Math.max($.growlTimer,1.4),$.monsterStepTimer=Math.max($.monsterStepTimer,.4),$.heartbeatTimer=0;(!i||p.falling>0)&&$.machineRunning&&vs()}window.addEventListener("pointerdown",ul,{capture:!0,passive:!0});window.addEventListener("keydown",ul,{capture:!0});ro.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),GS()});$r.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),LM()});Oh.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),ui(!p.settingsOpen)});fc.checked=p.invertHorizontalLook;fc.addEventListener("change",()=>{p.invertHorizontalLook=fc.checked;try{window.localStorage.setItem(zh,String(p.invertHorizontalLook))}catch{}});Qv.addEventListener("pointerdown",n=>{n.preventDefault(),ui(!1)});bu.addEventListener("input",()=>{$d(Number(bu.value)/100)});$d($.volume);Yd();Id(p.firstPerson,!1);function jd(){requestAnimationFrame(jd);const n=ex.getDelta(),t=Math.min(n,.033),e=Fd();if(e!==p.portrait&&(p.portrait=e,document.body.classList.toggle("portrait",e),e&&(Ho(),Bi.clear(),p.look.active=!1,p.pinchDistance=0,p.keys.clear(),p.jumpHeld=!1)),p.paused=e,!e){if(p.attackCooldown=Math.max(0,p.attackCooldown-t),p.attackTimer=Math.max(0,p.attackTimer-t),p.chopTimer=Math.max(0,p.chopTimer-t),p.plantCooldown=Math.max(0,p.plantCooldown-t),p.dropCooldown=Math.max(0,p.dropCooldown-t),p.invuln=Math.max(0,p.invuln-t),OM(t),Je.visible=p.attackTimer>0,p.attackTimer>0){const i=1-p.attackTimer/No;Je.scale.setScalar(.7+i*.6),Je.material.opacity=.8*(1-i),Je.rotation.z=i*.55}p.hitEffectTimer>0?(p.hitEffectTimer=Math.max(0,p.hitEffectTimer-t),Ze.visible=!0,Ze.scale.setScalar(.8+(1-p.hitEffectTimer/.22)*1.5),Ze.material.opacity=p.hitEffectTimer/.22,Ze.rotation.y+=t*10):Ze.visible=!1,Pi>0&&(Pi=Math.max(0,Pi-n),Pi<=0&&Er.classList.remove("visible")),Zr>0&&(Zr=Math.max(0,Zr-n),Zr<=0&&hc.classList.remove("visible")),p.started&&!p.gameOver?(SS(t),p.falling>0?(p.falling=Math.max(0,p.falling-t),p.falling<=0&&eS()):aS(t),Vu(t),lS(t),uS(t),Nu(),Bu(t),Ou(t),bM(t),hS(t),TM(t),xM(t),se()):(p.moveSpeed=0,Vu(t),Nu(),Bu(t),Ou(t),se()),cS(t),zM(t),KM(),p.damageFlash>0&&(p.damageFlash=Math.max(0,p.damageFlash-t*1.5))}p.victory&&!p.started&&Bn.classList.remove("hidden"),VS(t),Vd(),ES(t),Dr.render(Oe,Ce)}window.addEventListener("resize",()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),Dr.setSize(window.innerWidth,window.innerHeight)});sl();Md();se();Vd();jd();
