(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lu="167",d0=0,Gh=1,f0=2,Nf=1,Ff=2,si=3,Di=0,Ke=1,dn=2,Ri=0,cs=1,Ui=2,Vh=3,Wh=4,p0=5,er=100,m0=101,g0=102,_0=103,x0=104,v0=200,M0=201,y0=202,S0=203,Ll=204,Il=205,w0=206,E0=207,T0=208,b0=209,A0=210,C0=211,R0=212,P0=213,L0=214,I0=0,D0=1,U0=2,Fa=3,N0=4,F0=5,O0=6,B0=7,Of=0,z0=1,k0=2,Pi=0,H0=1,G0=2,V0=3,W0=4,X0=5,Y0=6,q0=7,Bf=300,gs=301,_s=302,Dl=303,Ul=304,Ja=306,Oa=1e3,bi=1001,Nl=1002,rn=1003,$0=1004,Uo=1005,Rn=1006,Hc=1007,rr=1008,di=1009,zf=1010,kf=1011,ao=1012,Iu=1013,hr=1014,kn=1015,vo=1016,Du=1017,Uu=1018,xs=1020,Hf=35902,Gf=1021,Vf=1022,In=1023,Wf=1024,Xf=1025,ls=1026,vs=1027,Nu=1028,Fu=1029,Yf=1030,Ou=1031,Bu=1033,Ma=33776,ya=33777,Sa=33778,wa=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,kl=36196,Hl=37492,Gl=37496,Vl=37808,Wl=37809,Xl=37810,Yl=37811,ql=37812,$l=37813,Kl=37814,Zl=37815,jl=37816,Jl=37817,Ql=37818,tu=37819,eu=37820,nu=37821,Ea=36492,iu=36494,ru=36495,qf=36283,su=36284,ou=36285,au=36286,K0=3200,Z0=3201,$f=0,j0=1,Ti="",Ye="srgb",Oi="srgb-linear",zu="display-p3",Qa="display-p3-linear",Ba="linear",me="srgb",za="rec709",ka="p3",Ar=7680,Xh=519,J0=512,Q0=513,tg=514,Kf=515,eg=516,ng=517,ig=518,rg=519,us=35044,Yh="300 es",li=2e3,Ha=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qh=1234567;const io=Math.PI/180,co=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function ku(n,t){return(n%t+t)%t}function sg(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function og(n,t,e){return n!==t?(e-n)/(t-n):0}function ro(n,t,e){return(1-e)*n+e*t}function ag(n,t,e,i){return ro(n,t,1-Math.exp(-e*i))}function cg(n,t=1){return t-Math.abs(ku(n,t*2)-t)}function lg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ug(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dg(n,t){return n+Math.random()*(t-n)}function fg(n){return n*(.5-Math.random())}function pg(n){n!==void 0&&(qh=n);let t=qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(n){return n*io}function gg(n){return n*co}function _g(n){return(n&n-1)===0&&n!==0}function xg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mg(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),p=o((t-i)/2),g=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*g,a*l);break;case"YXY":n.set(c*g,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zf={DEG2RAD:io,RAD2DEG:co,generateUUID:ui,clamp:Qe,euclideanModulo:ku,mapLinear:sg,inverseLerp:og,lerp:ro,damp:ag,pingpong:cg,smoothstep:lg,smootherstep:ug,randInt:hg,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:Mg,normalize:ce,denormalize:Pn};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,r,s,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],g=i[5],_=i[8],x=r[0],m=r[3],f=r[6],y=r[1],S=r[4],T=r[7],I=r[2],b=r[5],A=r[8];return s[0]=o*x+a*y+c*I,s[3]=o*m+a*S+c*b,s[6]=o*f+a*T+c*A,s[1]=l*x+h*y+d*I,s[4]=l*m+h*S+d*b,s[7]=l*f+h*T+d*A,s[2]=p*x+g*y+_*I,s[5]=p*m+g*S+_*b,s[8]=p*f+g*T+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,p=a*c-h*s,g=l*s-o*c,_=e*d+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*l-h*i)*x,t[2]=(a*i-r*o)*x,t[3]=p*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=g*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Ht;function jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yg(){const n=Ga("canvas");return n.style.display="block",n}const $h={};function hs(n){n in $h||($h[n]=!0,console.warn(n))}function Sg(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Kh=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[Oi]:{transfer:Ba,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ye]:{transfer:me,primaries:za,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qa]:{transfer:Ba,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(Kh)},[zu]:{transfer:me,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zh),fromReference:n=>n.applyMatrix3(Kh).convertLinearToSRGB()}},wg=new Set([Oi,Qa]),oe={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Os[t].toReference,r=Os[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Os[n].primaries},getTransfer:function(n){return n===Ti?Ba:Os[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Os[t].luminanceCoefficients)}};function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cr;class Eg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cr===void 0&&(Cr=Ga("canvas")),Cr.width=t.width,Cr.height=t.height;const i=Cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ds(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ds(e[i]/255)*255):e[i]=ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tg=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bg=0;class Ze extends Cs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=bi,r=bi,s=Rn,o=rr,a=In,c=di,l=Ze.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ui(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oa:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oa:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Bf;Ze.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],g=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(g+1)/2,I=(f+1)/2,b=(h+p)/4,A=(d+x)/4,D=(_+m)/4;return S>T&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=A/i):T>I?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-x)/y,this.z=(p-h)/y,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ag extends Cs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ze(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Ag{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qf extends Ze{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cg extends Ze{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const p=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=x;return}if(d!==x||c!==p||l!==g||h!==_){let m=1-a;const f=c*p+l*g+h*_+d*x,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const I=Math.sqrt(S),b=Math.atan2(I,f*y);m=Math.sin(m*b)/I,a=Math.sin(a*b)/I}const T=a*y;if(c=c*m+p*T,l=l*m+g*T,h=h*m+_*T,d=d*m+x*T,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[o],p=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+h*d+c*g-l*p,t[e+1]=c*_+h*p+l*d-a*g,t[e+2]=l*_+h*g+a*p-c*d,t[e+3]=h*_-a*d-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),d=a(s/2),p=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"YXZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"ZXY":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"ZYX":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"YZX":this._x=p*h*d+l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d-p*g*_;break;case"XZY":this._x=p*h*d-l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=i+a+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new R,jh=new Mo;class vr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Fo.subVectors(this.max,Bs),Rr.subVectors(t.a,Bs),Pr.subVectors(t.b,Bs),Lr.subVectors(t.c,Bs),gi.subVectors(Pr,Rr),_i.subVectors(Lr,Pr),Vi.subVectors(Rr,Lr);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Vi.z,Vi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Vi.z,0,-Vi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Vi.y,Vi.x,0];return!Yc(e,Rr,Pr,Lr,Fo)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Rr,Pr,Lr,Fo))?!1:(Oo.crossVectors(gi,_i),e=[Oo.x,Oo.y,Oo.z],Yc(e,Rr,Pr,Lr,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,No=new vr,Rr=new R,Pr=new R,Lr=new R,gi=new R,_i=new R,Vi=new R,Bs=new R,Fo=new R,Oo=new R,Wi=new R;function Yc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wi.fromArray(n,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),c=t.dot(Wi),l=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rg=new vr,zs=new R,qc=new R;class Mr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Rg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(zs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(qc)),this.expandByPoint(zs.copy(t.center).sub(qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new R,$c=new R,Bo=new R,xi=new R,Kc=new R,zo=new R,Zc=new R;class tc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){$c.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),xi.copy(this.origin).sub($c);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=xi.dot(this.direction),c=-xi.dot(Bo),l=xi.lengthSq(),h=Math.abs(1-o*o);let d,p,g,_;if(h>0)if(d=o*c-a,p=o*a-c,_=s*h,d>=0)if(p>=-_)if(p<=_){const x=1/h;d*=x,p*=x,g=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($c).addScaledVector(Bo,p),g}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,r,s){Kc.subVectors(e,t),zo.subVectors(i,t),Zc.crossVectors(Kc,zo);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);const c=a*this.direction.dot(zo.crossVectors(xi,zo));if(c<0)return null;const l=a*this.direction.dot(Kc.cross(xi));if(l<0||c+l>o)return null;const h=-a*xi.dot(Zc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m)}set(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=g,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ir.setFromMatrixColumn(t,0).length(),s=1/Ir.setFromMatrixColumn(t,1).length(),o=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=o*h,g=o*d,_=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=g+_*l,e[5]=p-x*l,e[9]=-a*c,e[2]=x-p*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*d,_=l*h,x=l*d;e[0]=p+x*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=x+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*d,_=l*h,x=l*d;e[0]=p-x*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=x-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*d,_=a*h,x=a*d;e[0]=c*h,e[4]=_*l-g,e[8]=p*l+x,e[1]=c*d,e[5]=x*l+p,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-p*d,e[8]=_*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*d+_,e[10]=p-x*d}else if(t.order==="XZY"){const p=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+x,e[5]=o*h,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*h,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pg,t,Lg)}lookAt(t,e,i){const r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(i,cn),vi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(i,cn)),vi.normalize(),ko.crossVectors(cn,vi),r[0]=vi.x,r[4]=ko.x,r[8]=cn.x,r[1]=vi.y,r[5]=ko.y,r[9]=cn.y,r[2]=vi.z,r[6]=ko.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],g=i[13],_=i[2],x=i[6],m=i[10],f=i[14],y=i[3],S=i[7],T=i[11],I=i[15],b=r[0],A=r[4],D=r[8],E=r[12],v=r[1],P=r[5],z=r[9],B=r[13],W=r[2],$=r[6],Y=r[10],j=r[14],X=r[3],ht=r[7],mt=r[11],Mt=r[15];return s[0]=o*b+a*v+c*W+l*X,s[4]=o*A+a*P+c*$+l*ht,s[8]=o*D+a*z+c*Y+l*mt,s[12]=o*E+a*B+c*j+l*Mt,s[1]=h*b+d*v+p*W+g*X,s[5]=h*A+d*P+p*$+g*ht,s[9]=h*D+d*z+p*Y+g*mt,s[13]=h*E+d*B+p*j+g*Mt,s[2]=_*b+x*v+m*W+f*X,s[6]=_*A+x*P+m*$+f*ht,s[10]=_*D+x*z+m*Y+f*mt,s[14]=_*E+x*B+m*j+f*Mt,s[3]=y*b+S*v+T*W+I*X,s[7]=y*A+S*P+T*$+I*ht,s[11]=y*D+S*z+T*Y+I*mt,s[15]=y*E+S*B+T*j+I*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],g=t[14],_=t[3],x=t[7],m=t[11],f=t[15];return _*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*g-i*c*g)+x*(+e*c*g-e*l*p+s*o*p-r*o*g+r*l*h-s*c*h)+m*(+e*l*d-e*a*g-s*o*d+i*o*g+s*a*h-i*l*h)+f*(-r*a*h-e*c*d+e*a*p+r*o*d-i*o*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],g=t[11],_=t[12],x=t[13],m=t[14],f=t[15],y=d*m*l-x*p*l+x*c*g-a*m*g-d*c*f+a*p*f,S=_*p*l-h*m*l-_*c*g+o*m*g+h*c*f-o*p*f,T=h*x*l-_*d*l+_*a*g-o*x*g-h*a*f+o*d*f,I=_*d*c-h*x*c-_*a*p+o*x*p+h*a*m-o*d*m,b=e*y+i*S+r*T+s*I;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(x*p*s-d*m*s-x*r*g+i*m*g+d*r*f-i*p*f)*A,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*f+i*c*f)*A,t[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*g-i*c*g)*A,t[4]=S*A,t[5]=(h*m*s-_*p*s+_*r*g-e*m*g-h*r*f+e*p*f)*A,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*f-e*c*f)*A,t[7]=(o*p*s-h*c*s+h*r*l-e*p*l-o*r*g+e*c*g)*A,t[8]=T*A,t[9]=(_*d*s-h*x*s-_*i*g+e*x*g+h*i*f-e*d*f)*A,t[10]=(o*x*s-_*a*s+_*i*l-e*x*l-o*i*f+e*a*f)*A,t[11]=(h*a*s-o*d*s-h*i*l+e*d*l+o*i*g-e*a*g)*A,t[12]=I*A,t[13]=(h*x*r-_*d*r+_*i*p-e*x*p-h*i*m+e*d*m)*A,t[14]=(_*a*r-o*x*r-_*i*c+e*x*c+o*i*m-e*a*m)*A,t[15]=(o*d*r-h*a*r+h*i*c-e*d*c-o*i*p+e*a*p)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,p=s*l,g=s*h,_=s*d,x=o*h,m=o*d,f=a*d,y=c*l,S=c*h,T=c*d,I=i.x,b=i.y,A=i.z;return r[0]=(1-(x+f))*I,r[1]=(g+T)*I,r[2]=(_-S)*I,r[3]=0,r[4]=(g-T)*b,r[5]=(1-(p+f))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(_+S)*A,r[9]=(m-y)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const l=1/s,h=1/o,d=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,e.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=li){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(a===li)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ha)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=li){const c=this.elements,l=1/(e-t),h=1/(i-r),d=1/(o-s),p=(e+t)*l,g=(i+r)*h;let _,x;if(a===li)_=(o+s)*d,x=-2*d;else if(a===Ha)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ir=new R,bn=new ue,Pg=new R(0,0,0),Lg=new R(1,1,1),vi=new R,ko=new R,cn=new R,Jh=new ue,Qh=new Mo;class $n{constructor(t=0,e=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ig=0;const td=new R,Dr=new Mo,ti=new ue,Ho=new R,ks=new R,Dg=new R,Ug=new Mo,ed=new R(1,0,0),nd=new R(0,1,0),id=new R(0,0,1),rd={type:"added"},Ng={type:"removed"},Ur={type:"childadded",child:null},jc={type:"childremoved",child:null};class Ee extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new R,e=new $n,i=new Mo,r=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ht}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ho.copy(t):Ho.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(ks,Ho,this.up):ti.lookAt(Ho,ks,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ti),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ng),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new R(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new R,ei=new R,Jc=new R,ni=new R,Nr=new R,Fr=new R,sd=new R,Qc=new R,tl=new R,el=new R;class Ln{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),An.subVectors(t,e),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){An.subVectors(r,e),ei.subVectors(i,e),Jc.subVectors(t,e);const o=An.dot(An),a=An.dot(ei),c=An.dot(Jc),l=ei.dot(ei),h=ei.dot(Jc),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,g=(l*c-a*h)*p,_=(o*h-a*c)*p;return s.set(1-g-_,_,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static isFrontFacing(t,e,i,r){return An.subVectors(i,e),ei.subVectors(t,e),An.cross(ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),An.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ln.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Nr.subVectors(r,i),Fr.subVectors(s,i),Qc.subVectors(t,i);const c=Nr.dot(Qc),l=Fr.dot(Qc);if(c<=0&&l<=0)return e.copy(i);tl.subVectors(t,r);const h=Nr.dot(tl),d=Fr.dot(tl);if(h>=0&&d<=h)return e.copy(r);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Nr,o);el.subVectors(t,s);const g=Nr.dot(el),_=Fr.dot(el);if(_>=0&&g<=_)return e.copy(s);const x=g*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Fr,a);const m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return sd.subVectors(s,r),a=(d-h)/(d-h+(g-_)),e.copy(r).addScaledVector(sd,a);const f=1/(m+x+p);return o=x*f,a=p*f,e.copy(i).addScaledVector(Nr,o).addScaledVector(Fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function nl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=oe.workingColorSpace){if(t=ku(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=nl(o,s,t+1/3),this.g=nl(o,s,t),this.b=nl(o,s,t-1/3)}return oe.toWorkingColorSpace(this,r),this}setStyle(t,e=Ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=tp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=Vc(t.r),this.g=Vc(t.g),this.b=Vc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return oe.fromWorkingColorSpace(We.copy(this),t),Math.round(Qe(We.r*255,0,255))*65536+Math.round(Qe(We.g*255,0,255))*256+Math.round(Qe(We.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(We.copy(this),e);const i=We.r,r=We.g,s=We.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ye){oe.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,r=We.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Go);const i=ro(Mi.h,Go.h,e),r=ro(Mi.s,Go.s,e),s=ro(Mi.l,Go.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Et;Et.NAMES=tp;let Fg=0;class Bi extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=cs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class en extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new R,Vo=new Pt;class tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=us,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return hs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vo.fromBufferAttribute(this,e),Vo.applyMatrix3(t),this.setXY(e,Vo.x,Vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==us&&(t.usage=this.usage),t}}class ep extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class np extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Og=0;const gn=new ue,il=new Ee,Or=new R,ln=new vr,Hs=new vr,Be=new R;class Oe extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?np:ep)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return il.lookAt(t),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,Hs.min),ln.expandByPoint(Be),Be.addVectors(ln.max,Hs.max),ln.expandByPoint(Be)):(ln.expandByPoint(Hs.min),ln.expandByPoint(Hs.max))}ln.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Or.fromBufferAttribute(t,l),Be.add(Or)),r=Math.max(r,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new R,c[D]=new R;const l=new R,h=new R,d=new R,p=new Pt,g=new Pt,_=new Pt,x=new R,m=new R;function f(D,E,v){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,v),p.fromBufferAttribute(s,D),g.fromBufferAttribute(s,E),_.fromBufferAttribute(s,v),h.sub(l),d.sub(l),g.sub(p),_.sub(p);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(P),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(P),a[D].add(x),a[E].add(x),a[v].add(x),c[D].add(m),c[E].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,E=y.length;D<E;++D){const v=y[D],P=v.start,z=v.count;for(let B=P,W=P+z;B<W;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new R,T=new R,I=new R,b=new R;function A(D){I.fromBufferAttribute(r,D),b.copy(I);const E=a[D];S.copy(E),S.sub(I.multiplyScalar(I.dot(E))).normalize(),T.crossVectors(b,E);const P=T.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,E=y.length;D<E;++D){const v=y[D],P=v.start,z=v.count;for(let B=P,W=P+z;B<W;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let g=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?g=c[x]*a.data.stride+a.offset:g=c[x]*h;for(let f=0;f<h;f++)p[_++]=l[g++]}return new tn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],g=t(p,i);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const g=l[d];h.push(g.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new ue,Xi=new tc,Wo=new Mr,ad=new R,Br=new R,zr=new R,kr=new R,rl=new R,Xo=new R,Yo=new Pt,qo=new Pt,$o=new Pt,cd=new R,ld=new R,ud=new R,Ko=new R,Zo=new R;class O extends Ee{constructor(t=new Oe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Xo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(rl.fromBufferAttribute(d,t),o?Xo.addScaledVector(rl,h):Xo.addScaledVector(rl.sub(e),h))}e.add(Xo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Xi.copy(t.ray).recast(t.near),!(Wo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Wo,ad)===null||Xi.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(od.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(od),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let T=y,I=S;T<I;T+=3){const b=a.getX(T),A=a.getX(T+1),D=a.getX(T+2);r=jo(this,f,t,i,l,h,d,b,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const y=a.getX(m),S=a.getX(m+1),T=a.getX(m+2);r=jo(this,o,t,i,l,h,d,y,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let T=y,I=S;T<I;T+=3){const b=T,A=T+1,D=T+2;r=jo(this,f,t,i,l,h,d,b,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const y=m,S=m+1,T=m+2;r=jo(this,o,t,i,l,h,d,y,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Bg(n,t,e,i,r,s,o,a){let c;if(t.side===Ke?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Di,a),c===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Zo);return l<e.near||l>e.far?null:{distance:l,point:Zo.clone(),object:n}}function jo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Br),n.getVertexPosition(c,zr),n.getVertexPosition(l,kr);const h=Bg(n,t,e,i,Br,zr,kr,Ko);if(h){r&&(Yo.fromBufferAttribute(r,a),qo.fromBufferAttribute(r,c),$o.fromBufferAttribute(r,l),h.uv=Ln.getInterpolation(Ko,Br,zr,kr,Yo,qo,$o,new Pt)),s&&(Yo.fromBufferAttribute(s,a),qo.fromBufferAttribute(s,c),$o.fromBufferAttribute(s,l),h.uv1=Ln.getInterpolation(Ko,Br,zr,kr,Yo,qo,$o,new Pt)),o&&(cd.fromBufferAttribute(o,a),ld.fromBufferAttribute(o,c),ud.fromBufferAttribute(o,l),h.normal=Ln.getInterpolation(Ko,Br,zr,kr,cd,ld,ud,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Ln.getNormal(Br,zr,kr,d.normal),h.face=d}return h}class wt extends Oe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let p=0,g=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function _(x,m,f,y,S,T,I,b,A,D,E){const v=T/A,P=I/D,z=T/2,B=I/2,W=b/2,$=A+1,Y=D+1;let j=0,X=0;const ht=new R;for(let mt=0;mt<Y;mt++){const Mt=mt*P-B;for(let Zt=0;Zt<$;Zt++){const he=Zt*v-z;ht[x]=he*y,ht[m]=Mt*S,ht[f]=W,l.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[f]=b>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Zt/A),d.push(1-mt/D),j+=1}}for(let mt=0;mt<D;mt++)for(let Mt=0;Mt<A;Mt++){const Zt=p+Mt+$*mt,he=p+Mt+$*(mt+1),q=p+(Mt+1)+$*(mt+1),et=p+(Mt+1)+$*mt;c.push(Zt,he,et),c.push(he,q,et),X+=6}a.addGroup(g,X,E),g+=X,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=Ms(n[e]);for(const r in i)t[r]=i[r]}return t}function zg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ip(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const kg={clone:Ms,merge:Je};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rp extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,hd=new Pt,dd=new Pt;class hn extends rp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,hd,dd),e.subVectors(dd,hd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hr=-90,Gr=1;class Vg extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Hr,Gr,t,e);r.layers=this.layers,this.add(r);const s=new hn(Hr,Gr,t,e);s.layers=this.layers,this.add(s);const o=new hn(Hr,Gr,t,e);o.layers=this.layers,this.add(o);const a=new hn(Hr,Gr,t,e);a.layers=this.layers,this.add(a);const c=new hn(Hr,Gr,t,e);c.layers=this.layers,this.add(c);const l=new hn(Hr,Gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(d,p,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sp extends Ze{constructor(t,e,i,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wg extends dr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new sp(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Ri});s.uniforms.tEquirect.value=e;const o=new O(r,s),a=e.minFilter;return e.minFilter===rr&&(e.minFilter=Rn),new Vg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const sl=new R,Xg=new R,Yg=new Ht;class ji{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=sl.subVectors(i,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yg.getNormalMatrix(t),r=this.coplanarPoint(sl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Mr,Jo=new R;class Gu{constructor(t=new ji,e=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],x=r[10],m=r[11],f=r[12],y=r[13],S=r[14],T=r[15];if(i[0].setComponents(c-s,p-l,m-g,T-f).normalize(),i[1].setComponents(c+s,p+l,m+g,T+f).normalize(),i[2].setComponents(c+o,p+h,m+_,T+y).normalize(),i[3].setComponents(c-o,p-h,m-_,T-y).normalize(),i[4].setComponents(c-a,p-d,m-x,T-S).normalize(),e===li)i[5].setComponents(c+a,p+d,m+x,T+S).normalize();else if(e===Ha)i[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Jo.x=r.normal.x>0?t.max.x:t.min.x,Jo.y=r.normal.y>0?t.max.y:t.min.y,Jo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function qg(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c._updateRange,p=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&p.length===0&&n.bufferSubData(l,0,h),p.length!==0){for(let g=0,_=p.length;g<_;g++){const x=p[g];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class yr extends Oe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,d=t/a,p=e/c,g=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const y=f*p-o;for(let S=0;S<l;S++){const T=S*d-s;_.push(T,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const S=y+l*f,T=y+l*(f+1),I=y+1+l*(f+1),b=y+1+l*f;g.push(S,T,b),g.push(T,I,b)}this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
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
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,__=`#define PI 3.141592653589793
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
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`
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
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
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
}`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
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
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,q_=`
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ix=`#if defined( USE_POINTS_UV )
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
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
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
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,nv=`#define DISTANCE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,uv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,dv=`#define MATCAP
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
}`,fv=`#define NORMAL
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
}`,pv=`#define NORMAL
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
}`,mv=`#define PHONG
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
}`,gv=`#define PHONG
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
}`,_v=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,vv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Ev=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,bv=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:$g,alphahash_pars_fragment:Kg,alphamap_fragment:Zg,alphamap_pars_fragment:jg,alphatest_fragment:Jg,alphatest_pars_fragment:Qg,aomap_fragment:t_,aomap_pars_fragment:e_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:c_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:d_,color_fragment:f_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:__,cube_uv_reflection_fragment:x_,defaultnormal_vertex:v_,displacementmap_pars_vertex:M_,displacementmap_vertex:y_,emissivemap_fragment:S_,emissivemap_pars_fragment:w_,colorspace_fragment:E_,colorspace_pars_fragment:T_,envmap_fragment:b_,envmap_common_pars_fragment:A_,envmap_pars_fragment:C_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:k_,envmap_vertex:P_,fog_vertex:L_,fog_pars_vertex:I_,fog_fragment:D_,fog_pars_fragment:U_,gradientmap_pars_fragment:N_,lightmap_pars_fragment:F_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:B_,lights_pars_begin:z_,lights_toon_fragment:H_,lights_toon_pars_fragment:G_,lights_phong_fragment:V_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:Y_,lights_fragment_begin:q_,lights_fragment_maps:$_,lights_fragment_end:K_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:J_,logdepthbuf_vertex:Q_,map_fragment:tx,map_pars_fragment:ex,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:rx,metalnessmap_pars_fragment:sx,morphinstance_vertex:ox,morphcolor_vertex:ax,morphnormal_vertex:cx,morphtarget_pars_vertex:lx,morphtarget_vertex:ux,normal_fragment_begin:hx,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:xx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:Mx,opaque_fragment:yx,packing:Sx,premultiplied_alpha_fragment:wx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:bx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Px,shadowmap_vertex:Lx,shadowmask_pars_fragment:Ix,skinbase_vertex:Dx,skinning_pars_vertex:Ux,skinning_vertex:Nx,skinnormal_vertex:Fx,specularmap_fragment:Ox,specularmap_pars_fragment:Bx,tonemapping_fragment:zx,tonemapping_pars_fragment:kx,transmission_fragment:Hx,transmission_pars_fragment:Gx,uv_pars_fragment:Vx,uv_pars_vertex:Wx,uv_vertex:Xx,worldpos_vertex:Yx,background_vert:qx,background_frag:$x,backgroundCube_vert:Kx,backgroundCube_frag:Zx,cube_vert:jx,cube_frag:Jx,depth_vert:Qx,depth_frag:tv,distanceRGBA_vert:ev,distanceRGBA_frag:nv,equirect_vert:iv,equirect_frag:rv,linedashed_vert:sv,linedashed_frag:ov,meshbasic_vert:av,meshbasic_frag:cv,meshlambert_vert:lv,meshlambert_frag:uv,meshmatcap_vert:hv,meshmatcap_frag:dv,meshnormal_vert:fv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:_v,meshphysical_frag:xv,meshtoon_vert:vv,meshtoon_frag:Mv,points_vert:yv,points_frag:Sv,shadow_vert:wv,shadow_frag:Ev,sprite_vert:Tv,sprite_frag:bv},ct={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Bn={basic:{uniforms:Je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Et(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Je([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Je([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Je([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Et(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Je([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Je([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Je([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Je([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Je([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Je([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Je([ct.lights,ct.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Bn.physical={uniforms:Je([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Qo={r:0,b:0,g:0},qi=new $n,Av=new ue;function Cv(n,t,e,i,r,s,o){const a=new Et(0);let c=s===!0?0:1,l,h,d=null,p=0,g=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const T=_(y);T===null?f(a,c):T&&T.isColor&&(f(T,1),S=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===Ja)?(h===void 0&&(h=new O(new wt(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qi.copy(S.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(qi)),h.material.toneMapped=oe.getTransfer(T.colorSpace)!==me,(d!==T||p!==T.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new O(new yr(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=oe.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,S){y.getRGB(Qo,ip(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:x,addToRenderList:m}}function Rv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(v,P,z,B,W){let $=!1;const Y=d(B,z,P);s!==Y&&(s=Y,l(s.object)),$=g(v,B,z,W),$&&_(v,B,z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(v,P,z,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,P,z){const B=z.wireframe===!0;let W=i[v.id];W===void 0&&(W={},i[v.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let Y=$[B];return Y===void 0&&(Y=p(c()),$[B]=Y),Y}function p(v){const P=[],z=[],B=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:B,object:v,attributes:{},index:null}}function g(v,P,z,B){const W=s.attributes,$=P.attributes;let Y=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){const mt=W[X];let Mt=$[X];if(Mt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function _(v,P,z,B){const W={},$=P.attributes;let Y=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){let mt=$[X];mt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),W[X]=Mt,Y++}s.attributes=W,s.attributesNum=Y,s.index=B}function x(){const v=s.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){const z=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;z[v]=1,B[v]===0&&(n.enableVertexAttribArray(v),B[v]=1),W[v]!==P&&(n.vertexAttribDivisor(v,P),W[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let z=0,B=P.length;z<B;z++)P[z]!==v[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function S(v,P,z,B,W,$,Y){Y===!0?n.vertexAttribIPointer(v,P,z,W,$):n.vertexAttribPointer(v,P,z,B,W,$)}function T(v,P,z,B){x();const W=B.attributes,$=z.getAttributes(),Y=P.defaultAttributeValues;for(const j in $){const X=$[j];if(X.location>=0){let ht=W[j];if(ht===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const mt=ht.normalized,Mt=ht.itemSize,Zt=t.get(ht);if(Zt===void 0)continue;const he=Zt.buffer,q=Zt.type,et=Zt.bytesPerElement,_t=q===n.INT||q===n.UNSIGNED_INT||ht.gpuType===Iu;if(ht.isInterleavedBufferAttribute){const ft=ht.data,Ft=ft.stride,Vt=ht.offset;if(ft.isInstancedInterleavedBuffer){for(let qt=0;qt<X.locationSize;qt++)f(X.location+qt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let qt=0;qt<X.locationSize;qt++)m(X.location+qt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let qt=0;qt<X.locationSize;qt++)S(X.location+qt,Mt/X.locationSize,q,mt,Ft*et,(Vt+Mt/X.locationSize*qt)*et,_t)}else{if(ht.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)f(X.location+ft,ht.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<X.locationSize;ft++)m(X.location+ft);n.bindBuffer(n.ARRAY_BUFFER,he);for(let ft=0;ft<X.locationSize;ft++)S(X.location+ft,Mt/X.locationSize,q,mt,Mt*et,Mt/X.locationSize*ft*et,_t)}}else if(Y!==void 0){const mt=Y[j];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(X.location,mt);break;case 3:n.vertexAttrib3fv(X.location,mt);break;case 4:n.vertexAttrib4fv(X.location,mt);break;default:n.vertexAttrib1fv(X.location,mt)}}}}y()}function I(){D();for(const v in i){const P=i[v];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}delete i[v]}}function b(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}delete i[v.id]}function A(v){for(const P in i){const z=i[P];if(z[v.id]===void 0)continue;const B=z[v.id];for(const W in B)h(B[W].object),delete B[W];delete z[v.id]}}function D(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Pv(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,i,1)}function c(l,h,d,p){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];for(let x=0;x<p.length;x++)e.update(_,i,p[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==In&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==di&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==kn&&!A)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:T,maxSamples:I}}function Iv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ji,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||r;return r=p,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,g){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const y=s?0:i,S=y*4;let T=f.clippingState||null;c.value=T,T=h(_,p,S,g);for(let I=0;I!==S;++I)T[I]=e[I];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,p,g,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=g+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,T=g;S!==x;++S,T+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Dv(n){let t=new WeakMap;function e(o,a){return a===Dl?o.mapping=gs:a===Ul&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dl||a===Ul)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Wg(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ap extends rp{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const es=4,fd=[.125,.215,.35,.446,.526,.582],nr=20,ol=new ap,pd=new Et;let al=null,cl=0,ll=0,ul=!1;const Ji=(1+Math.sqrt(5))/2,Vr=1/Ji,md=[new R(-Ji,Vr,0),new R(Ji,Vr,0),new R(-Vr,0,Ji),new R(Vr,0,Ji),new R(0,Ji,-Vr),new R(0,Ji,Vr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class gd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,cl,ll),this._renderer.xr.enabled=ul,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:vo,format:In,colorSpace:Oi,depthBuffer:!1},r=_d(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=Nv(s,t,e)}return r}_compileMaterial(t){const e=new O(this._lodPlanes[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,i,r){const a=new hn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(pd),h.toneMapping=Pi,h.autoClear=!1;const g=new en({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),_=new O(new wt,g);let x=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,x=!0):(g.color.copy(pd),x=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;ta(r,y*S,f>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===gs||t.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ta(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ol)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=md[(r-s-1)%md.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new O(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*nr-1),x=s/_,m=isFinite(s)?1+Math.floor(h*x):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const f=[];let y=0;for(let A=0;A<nr;++A){const D=A/x,E=Math.exp(-D*D/2);f.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-i;const T=this._sizeLods[r],I=3*T*(r>S-es?r-S+es:0),b=4*(this._cubeSize-T);ta(e,I,b,3*T,2*T),c.setRenderTarget(e),c.render(d,ol)}}function Uv(n){const t=[],e=[],i=[];let r=n;const s=n-es+1+fd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-es?c=fd[o-n+es-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,x=3,m=2,f=1,y=new Float32Array(x*_*g),S=new Float32Array(m*_*g),T=new Float32Array(f*_*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,D=b>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(E,x*_*b),S.set(p,m*_*b);const v=[b,b,b,b,b,b];T.set(v,f*_*b)}const I=new Oe;I.setAttribute("position",new tn(y,x)),I.setAttribute("uv",new tn(S,m)),I.setAttribute("faceIndex",new tn(T,f)),t.push(I),r>es&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _d(n,t,e){const i=new dr(n,t,e);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Nv(n,t,e){const i=new Float32Array(nr),r=new R(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xd(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vd(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function Fv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Dl||c===Ul,h=c===gs||c===_s;if(l||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new gd(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&r(g)?(e===null&&(e=new gd(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Ov(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&hs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bv(n,t,e,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(d){const p=[],g=d.index,_=d.attributes.position;let x=0;if(g!==null){const y=g.array;x=g.version;for(let S=0,T=y.length;S<T;S+=3){const I=y[S+0],b=y[S+1],A=y[S+2];p.push(I,b,b,A,A,I)}}else if(_!==void 0){const y=_.array;x=_.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const I=S+0,b=S+1,A=S+2;p.push(I,b,b,A,A,I)}}else return;const m=new(jf(p)?np:ep)(p,1);m.version=x;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function zv(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,g){n.drawElements(i,g,s,p*o),e.update(g,i,1)}function l(p,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,p*o,_),e.update(g,i,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=g[f];e.update(m,i,1)}function d(p,g,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,g[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,x,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];for(let y=0;y<x.length;y++)e.update(f,i,x[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Hv(n,t,e){const i=new WeakMap,r=new ge;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let v=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var g=v;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let I=a.attributes.position.count*T,b=1;I>t.maxTextureSize&&(b=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*b*4*d),D=new Qf(A,I,b,d);D.type=kn,D.needsUpdate=!0;const E=T*4;for(let P=0;P<d;P++){const z=f[P],B=y[P],W=S[P],$=I*b*4*P;for(let Y=0;Y<z.count;Y++){const j=Y*E;_===!0&&(r.fromBufferAttribute(z,Y),A[$+j+0]=r.x,A[$+j+1]=r.y,A[$+j+2]=r.z,A[$+j+3]=0),x===!0&&(r.fromBufferAttribute(B,Y),A[$+j+4]=r.x,A[$+j+5]=r.y,A[$+j+6]=r.z,A[$+j+7]=0),m===!0&&(r.fromBufferAttribute(W,Y),A[$+j+8]=r.x,A[$+j+9]=r.y,A[$+j+10]=r.z,A[$+j+11]=W.itemSize===4?r.w:1)}}p={count:d,texture:D,size:new Pt(I,b)},i.set(a,p),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Gv(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class cp extends Ze{constructor(t,e,i,r,s,o,a,c,l,h=ls){if(h!==ls&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ls&&(i=hr),i===void 0&&h===vs&&(i=xs),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lp=new Ze,Md=new cp(1,1),up=new Qf,hp=new Cg,dp=new sp,yd=[],Sd=[],wd=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Rs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=yd[r];if(s===void 0&&(s=new Float32Array(r),yd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ec(n,t){let e=Sd[t];e===void 0&&(e=new Int32Array(t),Sd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function qv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Td.set(i),n.uniformMatrix2fv(this.addr,!1,Td),Ne(e,i)}}function $v(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Ed.set(i),n.uniformMatrix3fv(this.addr,!1,Ed),Ne(e,i)}}function Kv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;wd.set(i),n.uniformMatrix4fv(this.addr,!1,wd),Ne(e,i)}}function Zv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function Jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function Qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function tM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function eM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function nM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function iM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function rM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Md.compareFunction=Kf,s=Md):s=lp,e.setTexture2D(t||s,r)}function sM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hp,r)}function oM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||dp,r)}function aM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||up,r)}function cM(n){switch(n){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return Yv;case 35674:return qv;case 35675:return $v;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return jv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return tM;case 36294:return eM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(n,t){n.uniform1fv(this.addr,t)}function uM(n,t){const e=Rs(t,this.size,2);n.uniform2fv(this.addr,e)}function hM(n,t){const e=Rs(t,this.size,3);n.uniform3fv(this.addr,e)}function dM(n,t){const e=Rs(t,this.size,4);n.uniform4fv(this.addr,e)}function fM(n,t){const e=Rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pM(n,t){const e=Rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mM(n,t){const e=Rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gM(n,t){n.uniform1iv(this.addr,t)}function _M(n,t){n.uniform2iv(this.addr,t)}function xM(n,t){n.uniform3iv(this.addr,t)}function vM(n,t){n.uniform4iv(this.addr,t)}function MM(n,t){n.uniform1uiv(this.addr,t)}function yM(n,t){n.uniform2uiv(this.addr,t)}function SM(n,t){n.uniform3uiv(this.addr,t)}function wM(n,t){n.uniform4uiv(this.addr,t)}function EM(n,t,e){const i=this.cache,r=t.length,s=ec(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||lp,s[o])}function TM(n,t,e){const i=this.cache,r=t.length,s=ec(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hp,s[o])}function bM(n,t,e){const i=this.cache,r=t.length,s=ec(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||dp,s[o])}function AM(n,t,e){const i=this.cache,r=t.length,s=ec(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||up,s[o])}function CM(n){switch(n){case 5126:return lM;case 35664:return uM;case 35665:return hM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return vM;case 5125:return MM;case 36294:return yM;case 36295:return SM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return AM}}class RM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}}class PM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CM(e.type)}}class LM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function bd(n,t){n.seq.push(t),n.map[t.id]=t}function IM(n,t,e){const i=n.name,r=i.length;for(hl.lastIndex=0;;){const s=hl.exec(i),o=hl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){bd(e,l===void 0?new RM(a,n,t):new PM(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new LM(a),bd(e,d)),e=d}}}class Ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);IM(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ad(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const DM=37297;let UM=0;function NM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function FM(n){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(n);let i;switch(t===e?i="":t===ka&&e===za?i="LinearDisplayP3ToLinearSRGB":t===za&&e===ka&&(i="LinearSRGBToLinearDisplayP3"),n){case Oi:case Qa:return[i,"LinearTransferOETF"];case Ye:case zu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+NM(n.getShaderSource(t),o)}else return r}function OM(n,t){const e=FM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function BM(n,t){let e;switch(t){case H0:e="Linear";break;case G0:e="Reinhard";break;case V0:e="OptimizedCineon";break;case W0:e="ACESFilmic";break;case Y0:e="AgX";break;case q0:e="Neutral";break;case X0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new R;function zM(){oe.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function HM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function GM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Js(n){return n!==""}function Rd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(n){return n.replace(VM,XM)}const WM=new Map;function XM(n,t){let e=kt[t];if(e===void 0){const i=WM.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return cu(e)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(n){return n.replace(YM,qM)}function qM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Id(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $M(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function KM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ZM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function jM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case z0:t="ENVMAP_BLENDING_MIX";break;case k0:t="ENVMAP_BLENDING_ADD";break}return t}function JM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function QM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$M(e),l=KM(e),h=ZM(e),d=jM(e),p=JM(e),g=kM(e),_=HM(s),x=r.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(m=[Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[Id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Pi?BM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,OM("linearToOutputTexel",e.outputColorSpace),zM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=cu(o),o=Rd(o,e),o=Pd(o,e),a=cu(a),a=Rd(a,e),a=Pd(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+o,T=y+f+a,I=Ad(r,r.VERTEX_SHADER,S),b=Ad(r,r.FRAGMENT_SHADER,T);r.attachShader(x,I),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(I).trim(),W=r.getShaderInfoLog(b).trim();let $=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,b);else{const j=Cd(r,I,"vertex"),X=Cd(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+j+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:$,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(I),r.deleteShader(b),D=new Ta(r,x),E=GM(r,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,DM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=b,this}let ty=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ny(t),e.set(t,i)),i}}class ny{constructor(t){this.id=ty++,this.code=t,this.usedTimes=0}}function iy(n,t,e,i,r,s,o){const a=new Hu,c=new ey,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,z,B){const W=z.fog,$=B.geometry,Y=E.isMeshStandardMaterial?z.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||Y),X=j&&j.mapping===Ja?j.image.height:null,ht=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let Zt=0;$.morphAttributes.position!==void 0&&(Zt=1),$.morphAttributes.normal!==void 0&&(Zt=2),$.morphAttributes.color!==void 0&&(Zt=3);let he,q,et,_t;if(ht){const ne=Bn[ht];he=ne.vertexShader,q=ne.fragmentShader}else he=E.vertexShader,q=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const ft=n.getRenderTarget(),Ft=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,qt=!!E.map,Me=!!E.matcap,L=!!j,Te=!!E.aoMap,ae=!!E.lightMap,de=!!E.bumpMap,St=!!E.normalMap,be=!!E.displacementMap,Ut=!!E.emissiveMap,Ot=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,Q=E.dispersion>0,tt=E.iridescence>0,J=E.sheen>0,Tt=E.transmission>0,lt=M&&!!E.anisotropyMap,pt=G&&!!E.clearcoatMap,zt=G&&!!E.clearcoatNormalMap,it=G&&!!E.clearcoatRoughnessMap,dt=tt&&!!E.iridescenceMap,jt=tt&&!!E.iridescenceThicknessMap,It=J&&!!E.sheenColorMap,gt=J&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Wt=!!E.specularColorMap,_e=!!E.specularIntensityMap,U=Tt&&!!E.transmissionMap,rt=Tt&&!!E.thicknessMap,K=!!E.gradientMap,Z=!!E.alphaMap,ot=E.alphaTest>0,Ct=!!E.alphaHash,te=!!E.extensions;let Ae=Pi;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const ke={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:he,fragmentShader:q,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Oi,alphaToCoverage:!!E.alphaToCoverage,map:qt,matcap:Me,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:X,aoMap:Te,lightMap:ae,bumpMap:de,normalMap:St,displacementMap:p&&be,emissiveMap:Ut,normalMapObjectSpace:St&&E.normalMapType===j0,normalMapTangentSpace:St&&E.normalMapType===$f,metalnessMap:Ot,roughnessMap:C,anisotropy:M,anisotropyMap:lt,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:zt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:tt,iridescenceMap:dt,iridescenceThicknessMap:jt,sheen:J,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Nt,specularColorMap:Wt,specularIntensityMap:_e,transmission:Tt,transmissionMap:U,thicknessMap:rt,gradientMap:K,opaque:E.transparent===!1&&E.blending===cs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ot,alphaHash:Ct,combine:E.combine,mapUv:qt&&x(E.map.channel),aoMapUv:Te&&x(E.aoMap.channel),lightMapUv:ae&&x(E.lightMap.channel),bumpMapUv:de&&x(E.bumpMap.channel),normalMapUv:St&&x(E.normalMap.channel),displacementMapUv:be&&x(E.displacementMap.channel),emissiveMapUv:Ut&&x(E.emissiveMap.channel),metalnessMapUv:Ot&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:pt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(E.sheenRoughnessMap.channel),specularMapUv:Nt&&x(E.specularMap.channel),specularColorMapUv:Wt&&x(E.specularColorMap.channel),specularIntensityMapUv:_e&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:rt&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(St||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(qt||Z),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Zt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:qt&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===Ke,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:te&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&E.extensions.multiDraw===!0||Vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function f(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(v,E),S(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function y(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),E.push(a.mask)}function T(E){const v=_[E.type];let P;if(v){const z=Bn[v];P=kg.clone(z.uniforms)}else P=E.uniforms;return P}function I(E,v){let P;for(let z=0,B=h.length;z<B;z++){const W=h[z];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new QM(n,v,E,s),h.push(P)),P}function b(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:I,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:D}}function ry(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function sy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Dd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ud(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,p,g,_,x,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,p,g,_,x,m){const f=o(d,p,g,_,x,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):e.push(f)}function c(d,p,g,_,x,m){const f=o(d,p,g,_,x,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||sy),i.length>1&&i.sort(p||Dd),r.length>1&&r.sort(p||Dd)}function h(){for(let d=t,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function oy(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ud,n.set(i,[o])):r>=s.length?(o=new Ud,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ay(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function cy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ly=0;function uy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function hy(n){const t=new ay,e=cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const r=new R,s=new ue,o=new ue;function a(l){let h=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,_=0,x=0,m=0,f=0,y=0,S=0,T=0,I=0,b=0,A=0;l.sort(uy);for(let E=0,v=l.length;E<v;E++){const P=l[E],z=P.color,B=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*B,d+=z.g*B,p+=z.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],B);A++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,X=e.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=P.shadow.matrix,y++}i.directional[g]=Y,g++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(z).multiplyScalar(B),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const j=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=j.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=$,T++}x++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(z).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const j=P.shadow,X=e.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==g||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==T||D.numSpotMaps!==I||D.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+I-b,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,D.directionalLength=g,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=T,D.numSpotMaps=I,D.numLightProbes=A,i.version=ly++)}function c(l,h){let d=0,p=0,g=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const S=l[f];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Nd(n){const t=new hy(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function dy(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Nd(n),t.set(r,[a])):s>=o.length?(a=new Nd(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class fy extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class py extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`;function _y(n,t,e){let i=new Gu;const r=new Pt,s=new Pt,o=new ge,a=new fy({depthPacking:Z0}),c=new py,l={},h=e.maxTextureSize,d={[Di]:Ke,[Ke]:Di,[dn]:dn},p=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:my,fragmentShader:gy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new O(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf;let f=this.type;this.render=function(b,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==si&&this.type===si,W=f===si&&this.type!==si;for(let $=0,Y=b.length;$<Y;$++){const j=b[$],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ht=X.getFrameExtents();if(r.multiply(ht),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ht.x),r.x=s.x*ht.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ht.y),r.y=s.y*ht.y,X.mapSize.y=s.y)),X.map===null||B===!0||W===!0){const Mt=this.type!==si?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new dr(r.x,r.y,Mt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const mt=X.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const Zt=X.getViewport(Mt);o.set(s.x*Zt.x,s.y*Zt.y,s.x*Zt.z,s.y*Zt.w),z.viewport(o),X.updateMatrices(j,Mt),i=X.getFrustum(),T(A,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===si&&y(X,D),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,P)};function y(b,A){const D=t.update(x);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new dr(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,D,p,x,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,D,g,x,null)}function S(b,A,D,E){let v=null;const P=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=v.uuid,B=A.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let $=W[B];$===void 0&&($=v.clone(),W[B]=$,A.addEventListener("dispose",I)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,E===si?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=n.properties.get(v);z.light=D}return v}function T(b,A,D,E,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const B=t.update(b),W=b.material;if(Array.isArray(W)){const $=B.groups;for(let Y=0,j=$.length;Y<j;Y++){const X=$[Y],ht=W[X.materialIndex];if(ht&&ht.visible){const mt=S(b,ht,E,v);b.onBeforeShadow(n,b,A,D,B,mt,X),n.renderBufferDirect(D,null,B,mt,b,X),b.onAfterShadow(n,b,A,D,B,mt,X)}}}else if(W.visible){const $=S(b,W,E,v);b.onBeforeShadow(n,b,A,D,B,$,null),n.renderBufferDirect(D,null,B,$,b,null),b.onAfterShadow(n,b,A,D,B,$,null)}}const z=b.children;for(let B=0,W=z.length;B<W;B++)T(z[B],A,D,E,v)}function I(b){b.target.removeEventListener("dispose",I);for(const D in l){const E=l[D],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function xy(n){function t(){let U=!1;const rt=new ge;let K=null;const Z=new ge(0,0,0,0);return{setMask:function(ot){K!==ot&&!U&&(n.colorMask(ot,ot,ot,ot),K=ot)},setLocked:function(ot){U=ot},setClear:function(ot,Ct,te,Ae,ke){ke===!0&&(ot*=Ae,Ct*=Ae,te*=Ae),rt.set(ot,Ct,te,Ae),Z.equals(rt)===!1&&(n.clearColor(ot,Ct,te,Ae),Z.copy(rt))},reset:function(){U=!1,K=null,Z.set(-1,0,0,0)}}}function e(){let U=!1,rt=null,K=null,Z=null;return{setTest:function(ot){ot?_t(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(ot){rt!==ot&&!U&&(n.depthMask(ot),rt=ot)},setFunc:function(ot){if(K!==ot){switch(ot){case I0:n.depthFunc(n.NEVER);break;case D0:n.depthFunc(n.ALWAYS);break;case U0:n.depthFunc(n.LESS);break;case Fa:n.depthFunc(n.LEQUAL);break;case N0:n.depthFunc(n.EQUAL);break;case F0:n.depthFunc(n.GEQUAL);break;case O0:n.depthFunc(n.GREATER);break;case B0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ot}},setLocked:function(ot){U=ot},setClear:function(ot){Z!==ot&&(n.clearDepth(ot),Z=ot)},reset:function(){U=!1,rt=null,K=null,Z=null}}}function i(){let U=!1,rt=null,K=null,Z=null,ot=null,Ct=null,te=null,Ae=null,ke=null;return{setTest:function(ne){U||(ne?_t(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!U&&(n.stencilMask(ne),rt=ne)},setFunc:function(ne,jn,Fn){(K!==ne||Z!==jn||ot!==Fn)&&(n.stencilFunc(ne,jn,Fn),K=ne,Z=jn,ot=Fn)},setOp:function(ne,jn,Fn){(Ct!==ne||te!==jn||Ae!==Fn)&&(n.stencilOp(ne,jn,Fn),Ct=ne,te=jn,Ae=Fn)},setLocked:function(ne){U=ne},setClear:function(ne){ke!==ne&&(n.clearStencil(ne),ke=ne)},reset:function(){U=!1,rt=null,K=null,Z=null,ot=null,Ct=null,te=null,Ae=null,ke=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],g=null,_=!1,x=null,m=null,f=null,y=null,S=null,T=null,I=null,b=new Et(0,0,0),A=0,D=!1,E=null,v=null,P=null,z=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=Y>=2);let X=null,ht={};const mt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Zt=new ge().fromArray(mt),he=new ge().fromArray(Mt);function q(U,rt,K,Z){const ot=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(U,Ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<K;te++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(rt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return Ct}const et={};et[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),s.setFunc(Fa),de(!1),St(Gh),_t(n.CULL_FACE),Te(Ri);function _t(U){l[U]!==!0&&(n.enable(U),l[U]=!0)}function ft(U){l[U]!==!1&&(n.disable(U),l[U]=!1)}function Ft(U,rt){return h[U]!==rt?(n.bindFramebuffer(U,rt),h[U]=rt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Vt(U,rt){let K=p,Z=!1;if(U){K=d.get(rt),K===void 0&&(K=[],d.set(rt,K));const ot=U.textures;if(K.length!==ot.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,te=ot.length;Ct<te;Ct++)K[Ct]=n.COLOR_ATTACHMENT0+Ct;K.length=ot.length,Z=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Z=!0);Z&&n.drawBuffers(K)}function qt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Me={[er]:n.FUNC_ADD,[m0]:n.FUNC_SUBTRACT,[g0]:n.FUNC_REVERSE_SUBTRACT};Me[_0]=n.MIN,Me[x0]=n.MAX;const L={[v0]:n.ZERO,[M0]:n.ONE,[y0]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[A0]:n.SRC_ALPHA_SATURATE,[T0]:n.DST_COLOR,[w0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[b0]:n.ONE_MINUS_DST_COLOR,[E0]:n.ONE_MINUS_DST_ALPHA,[C0]:n.CONSTANT_COLOR,[R0]:n.ONE_MINUS_CONSTANT_COLOR,[P0]:n.CONSTANT_ALPHA,[L0]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(U,rt,K,Z,ot,Ct,te,Ae,ke,ne){if(U===Ri){_===!0&&(ft(n.BLEND),_=!1);return}if(_===!1&&(_t(n.BLEND),_=!0),U!==p0){if(U!==x||ne!==D){if((m!==er||S!==er)&&(n.blendEquation(n.FUNC_ADD),m=er,S=er),ne)switch(U){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.ONE,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,y=null,T=null,I=null,b.set(0,0,0),A=0,x=U,D=ne}return}ot=ot||rt,Ct=Ct||K,te=te||Z,(rt!==m||ot!==S)&&(n.blendEquationSeparate(Me[rt],Me[ot]),m=rt,S=ot),(K!==f||Z!==y||Ct!==T||te!==I)&&(n.blendFuncSeparate(L[K],L[Z],L[Ct],L[te]),f=K,y=Z,T=Ct,I=te),(Ae.equals(b)===!1||ke!==A)&&(n.blendColor(Ae.r,Ae.g,Ae.b,ke),b.copy(Ae),A=ke),x=U,D=!1}function ae(U,rt){U.side===dn?ft(n.CULL_FACE):_t(n.CULL_FACE);let K=U.side===Ke;rt&&(K=!K),de(K),U.blending===cs&&U.transparent===!1?Te(Ri):Te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function St(U){U!==d0?(_t(n.CULL_FACE),U!==v&&(U===Gh?n.cullFace(n.BACK):U===f0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),v=U}function be(U){U!==P&&($&&n.lineWidth(U),P=U)}function Ut(U,rt,K){U?(_t(n.POLYGON_OFFSET_FILL),(z!==rt||B!==K)&&(n.polygonOffset(rt,K),z=rt,B=K)):ft(n.POLYGON_OFFSET_FILL)}function Ot(U){U?_t(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+W-1),X!==U&&(n.activeTexture(U),X=U)}function M(U,rt,K){K===void 0&&(X===null?K=n.TEXTURE0+W-1:K=X);let Z=ht[K];Z===void 0&&(Z={type:void 0,texture:void 0},ht[K]=Z),(Z.type!==U||Z.texture!==rt)&&(X!==K&&(n.activeTexture(K),X=K),n.bindTexture(U,rt||et[U]),Z.type=U,Z.texture=rt)}function G(){const U=ht[X];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function jt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){Zt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Zt.copy(U))}function gt(U){he.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function Nt(U,rt){let K=c.get(rt);K===void 0&&(K=new WeakMap,c.set(rt,K));let Z=K.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(rt,U.name),K.set(U,Z))}function Wt(U,rt){const Z=c.get(rt).get(U);a.get(rt)!==Z&&(n.uniformBlockBinding(rt,Z,U.__bindingPointIndex),a.set(rt,Z))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},X=null,ht={},h={},d=new WeakMap,p=[],g=null,_=!1,x=null,m=null,f=null,y=null,S=null,T=null,I=null,b=new Et(0,0,0),A=0,D=!1,E=null,v=null,P=null,z=null,B=null,Zt.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_t,disable:ft,bindFramebuffer:Ft,drawBuffers:Vt,useProgram:qt,setBlending:Te,setMaterial:ae,setFlipSided:de,setCullFace:St,setLineWidth:be,setPolygonOffset:Ut,setScissorTest:Ot,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:dt,texImage3D:jt,updateUBOMapping:Nt,uniformBlockBinding:Wt,texStorage2D:zt,texStorage3D:it,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:_e}}function Fd(n,t,e,i){const r=vy(i);switch(e){case Gf:return n*t;case Wf:return n*t;case Xf:return n*t*2;case Nu:return n*t/r.components*r.byteLength;case Fu:return n*t/r.components*r.byteLength;case Yf:return n*t*2/r.components*r.byteLength;case Ou:return n*t*2/r.components*r.byteLength;case Vf:return n*t*3/r.components*r.byteLength;case In:return n*t*4/r.components*r.byteLength;case Bu:return n*t*4/r.components*r.byteLength;case Ma:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:case zl:return Math.max(n,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(n,8)*Math.max(t,8)/2;case kl:case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case iu:case ru:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qf:case su:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ou:case au:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vy(n){switch(n){case di:case zf:return{byteLength:1,components:1};case ao:case kf:case vo:return{byteLength:2,components:1};case Du:case Uu:return{byteLength:2,components:4};case hr:case Iu:case kn:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function My(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):Ga("canvas")}function x(C,M,G){let Q=1;const tt=Ot(C);if((tt.width>G||tt.height>G)&&(Q=G/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*tt.width),Tt=Math.floor(Q*tt.height);d===void 0&&(d=_(J,Tt));const lt=M?_(J,Tt):d;return lt.width=J,lt.height=Tt,lt.getContext("2d").drawImage(C,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Tt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==rn&&C.minFilter!==Rn}function f(C){n.generateMipmap(C)}function y(C,M,G,Q,tt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),M===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Tt=tt?Ba:oe.getTransfer(Q);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Tt===me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,M){let G;return C?M===null||M===hr||M===xs?G=n.DEPTH24_STENCIL8:M===kn?G=n.DEPTH32F_STENCIL8:M===ao&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hr||M===xs?G=n.DEPTH_COMPONENT24:M===kn?G=n.DEPTH_COMPONENT32F:M===ao&&(G=n.DEPTH_COMPONENT16),G}function T(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){const M=C.target;M.removeEventListener("dispose",I),A(M),M.isVideoTexture&&h.delete(M)}function b(C){const M=C.target;M.removeEventListener("dispose",b),E(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,Q=p.get(G);if(Q){const tt=Q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(C),Object.keys(Q).length===0&&p.delete(G)}i.remove(C)}function D(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const G=C.source,Q=p.get(G);delete Q[M.__cacheKey],o.memory.textures--}function E(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let tt=0;tt<M.__webglFramebuffer[Q].length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[Q][tt]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,tt=G.length;Q<tt;Q++){const J=i.get(G[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(C)}let v=0;function P(){v=0}function z(){const C=v;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),v+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const G=i.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(G,C,M);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function $(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function Y(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function j(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){q(G,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const X={[Oa]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Nl]:n.MIRRORED_REPEAT},ht={[rn]:n.NEAREST,[$0]:n.NEAREST_MIPMAP_NEAREST,[Uo]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Hc]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},mt={[J0]:n.NEVER,[rg]:n.ALWAYS,[Q0]:n.LESS,[Kf]:n.LEQUAL,[tg]:n.EQUAL,[ig]:n.GEQUAL,[eg]:n.GREATER,[ng]:n.NOTEQUAL};function Mt(C,M){if(M.type===kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Rn||M.magFilter===Hc||M.magFilter===Uo||M.magFilter===rr||M.minFilter===Rn||M.minFilter===Hc||M.minFilter===Uo||M.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,X[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ht[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==Uo&&M.minFilter!==rr||M.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const Q=M.source;let tt=p.get(Q);tt===void 0&&(tt={},p.set(Q,tt));const J=B(M);if(J!==C.__cacheKey){tt[J]===void 0&&(tt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[J].usedTimes++;const Tt=tt[C.__cacheKey];Tt!==void 0&&(tt[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&D(M)),C.__cacheKey=J,C.__webglTexture=tt[J].texture}return G}function he(C,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const tt=Zt(C,M),J=M.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+G);const Tt=i.get(J);if(J.version!==Tt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const lt=oe.getPrimaries(oe.workingColorSpace),pt=M.colorSpace===Ti?null:oe.getPrimaries(M.colorSpace),zt=M.colorSpace===Ti||lt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=x(M.image,!1,r.maxTextureSize);it=Ut(M,it);const dt=s.convert(M.format,M.colorSpace),jt=s.convert(M.type);let It=y(M.internalFormat,dt,jt,M.colorSpace,M.isVideoTexture);Mt(Q,M);let gt;const Nt=M.mipmaps,Wt=M.isVideoTexture!==!0,_e=Tt.__version===void 0||tt===!0,U=J.dataReady,rt=T(M,it);if(M.isDepthTexture)It=S(M.format===vs,M.type),_e&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,It,it.width,it.height,0,dt,jt,null));else if(M.isDataTexture)if(Nt.length>0){Wt&&_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],Wt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,jt,gt.data):e.texImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,dt,jt,gt.data);M.generateMipmaps=!1}else Wt?(_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,dt,jt,it.data)):e.texImage2D(n.TEXTURE_2D,0,It,it.width,it.height,0,dt,jt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,It,Nt[0].width,Nt[0].height,it.depth);for(let K=0,Z=Nt.length;K<Z;K++)if(gt=Nt[K],M.format!==In)if(dt!==null)if(Wt){if(U)if(M.layerUpdates.size>0){const ot=Fd(gt.width,gt.height,M.format,M.type);for(const Ct of M.layerUpdates){const te=gt.data.subarray(Ct*ot/gt.data.BYTES_PER_ELEMENT,(Ct+1)*ot/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ct,gt.width,gt.height,1,dt,te,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,it.depth,dt,gt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,it.depth,dt,jt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,it.depth,0,dt,jt,gt.data)}else{Wt&&_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],M.format!==In?dt!==null?Wt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,jt,gt.data):e.texImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,dt,jt,gt.data)}else if(M.isDataArrayTexture)if(Wt){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,It,it.width,it.height,it.depth),U)if(M.layerUpdates.size>0){const K=Fd(it.width,it.height,M.format,M.type);for(const Z of M.layerUpdates){const ot=it.data.subarray(Z*K/it.data.BYTES_PER_ELEMENT,(Z+1)*K/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,dt,jt,ot)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,jt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,dt,jt,it.data);else if(M.isData3DTexture)Wt?(_e&&e.texStorage3D(n.TEXTURE_3D,rt,It,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,jt,it.data)):e.texImage3D(n.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,dt,jt,it.data);else if(M.isFramebufferTexture){if(_e)if(Wt)e.texStorage2D(n.TEXTURE_2D,rt,It,it.width,it.height);else{let K=it.width,Z=it.height;for(let ot=0;ot<rt;ot++)e.texImage2D(n.TEXTURE_2D,ot,It,K,Z,0,dt,jt,null),K>>=1,Z>>=1}}else if(Nt.length>0){if(Wt&&_e){const K=Ot(Nt[0]);e.texStorage2D(n.TEXTURE_2D,rt,It,K.width,K.height)}for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],Wt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,dt,jt,gt):e.texImage2D(n.TEXTURE_2D,K,It,dt,jt,gt);M.generateMipmaps=!1}else if(Wt){if(_e){const K=Ot(it);e.texStorage2D(n.TEXTURE_2D,rt,It,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,jt,it)}else e.texImage2D(n.TEXTURE_2D,0,It,dt,jt,it);m(M)&&f(Q),Tt.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,G){if(M.image.length!==6)return;const Q=Zt(C,M),tt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const J=i.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);const Tt=oe.getPrimaries(oe.workingColorSpace),lt=M.colorSpace===Ti?null:oe.getPrimaries(M.colorSpace),pt=M.colorSpace===Ti||Tt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const zt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!zt&&!it?dt[Z]=x(M.image[Z],!0,r.maxCubemapSize):dt[Z]=it?M.image[Z].image:M.image[Z],dt[Z]=Ut(M,dt[Z]);const jt=dt[0],It=s.convert(M.format,M.colorSpace),gt=s.convert(M.type),Nt=y(M.internalFormat,It,gt,M.colorSpace),Wt=M.isVideoTexture!==!0,_e=J.__version===void 0||Q===!0,U=tt.dataReady;let rt=T(M,jt);Mt(n.TEXTURE_CUBE_MAP,M);let K;if(zt){Wt&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Nt,jt.width,jt.height);for(let Z=0;Z<6;Z++){K=dt[Z].mipmaps;for(let ot=0;ot<K.length;ot++){const Ct=K[ot];M.format!==In?It!==null?Wt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ct.width,Ct.height,It,gt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Nt,Ct.width,Ct.height,0,It,gt,Ct.data)}}}else{if(K=M.mipmaps,Wt&&_e){K.length>0&&rt++;const Z=Ot(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,It,gt,dt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,dt[Z].width,dt[Z].height,0,It,gt,dt[Z].data);for(let ot=0;ot<K.length;ot++){const te=K[ot].image[Z].image;Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,te.width,te.height,It,gt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Nt,te.width,te.height,0,It,gt,te.data)}}else{Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,gt,dt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,It,gt,dt[Z]);for(let ot=0;ot<K.length;ot++){const Ct=K[ot];Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,It,gt,Ct.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Nt,It,gt,Ct.image[Z])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function et(C,M,G,Q,tt,J){const Tt=s.convert(G.format,G.colorSpace),lt=s.convert(G.type),pt=y(G.internalFormat,Tt,lt,G.colorSpace);if(!i.get(M).__hasExternalTextures){const it=Math.max(1,M.width>>J),dt=Math.max(1,M.height>>J);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,pt,it,dt,M.depth,0,Tt,lt,null):e.texImage2D(tt,J,pt,it,dt,0,Tt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,tt,i.get(G).__webglTexture,0,de(M)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,tt,i.get(G).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(C,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=S(M.stencilBuffer,tt),Tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=de(M);St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,J,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,C)}else{const Q=M.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],Tt=s.convert(J.format,J.colorSpace),lt=s.convert(J.type),pt=y(J.internalFormat,Tt,lt,J.colorSpace),zt=de(M);G&&St(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,pt,M.width,M.height):St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,pt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,tt=de(M);if(M.depthTexture.format===ls)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===vs)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ft(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=n.createRenderbuffer(),_t(M.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),_t(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(C,M,G){const Q=i.get(C);M!==void 0&&et(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ft(C)}function qt(C){const M=C.texture,G=i.get(C),Q=i.get(M);C.addEventListener("dispose",b);const tt=C.textures,J=C.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let pt=0;pt<M.mipmaps.length;pt++)G.__webglFramebuffer[lt][pt]=n.createFramebuffer()}else G.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)G.__webglFramebuffer[lt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let lt=0,pt=tt.length;lt<pt;lt++){const zt=i.get(tt[lt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];G.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const zt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),dt=y(pt.internalFormat,zt,it,pt.colorSpace,C.isXRRenderTarget===!0),jt=de(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)et(G.__webglFramebuffer[lt][pt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else et(G.__webglFramebuffer[lt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,pt=tt.length;lt<pt;lt++){const zt=tt[lt],it=i.get(zt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Mt(n.TEXTURE_2D,zt),et(G.__webglFramebuffer,C,zt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(zt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,Q.__webglTexture),Mt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)et(G.__webglFramebuffer[pt],C,M,n.COLOR_ATTACHMENT0,lt,pt);else et(G.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,lt,0);m(M)&&f(lt),e.unbindTexture()}C.depthBuffer&&Ft(C)}function Me(C){const M=C.textures;for(let G=0,Q=M.length;G<Q;G++){const tt=M[G];if(m(tt)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Tt=i.get(tt).__webglTexture;e.bindTexture(J,Tt),f(J),e.unbindTexture()}}}const L=[],Te=[];function ae(C){if(C.samples>0){if(St(C)===!1){const M=C.textures,G=C.width,Q=C.height;let tt=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(C),lt=M.length>1;if(lt)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const zt=i.get(M[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,tt,n.NEAREST),c===!0&&(L.length=0,Te.length=0,L.push(n.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(J),Te.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const zt=i.get(M[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(C){return Math.min(r.maxSamples,C.samples)}function St(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ut(C,M){const G=C.colorSpace,Q=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Oi&&G!==Ti&&(oe.getTransfer(G)===me?(Q!==In||tt!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=St}function yy(n,t){function e(i,r=Ti){let s;const o=oe.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===kf)return n.SHORT;if(i===ao)return n.UNSIGNED_SHORT;if(i===Iu)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===vo)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===In)return n.RGBA;if(i===Wf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===ls)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===Nu)return n.RED;if(i===Fu)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===Ou)return n.RG_INTEGER;if(i===Bu)return n.RGBA_INTEGER;if(i===Ma||i===ya||i===Sa||i===wa)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Ol||i===Bl||i===zl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===Hl||i===Gl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kl||i===Hl)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vl||i===Wl||i===Xl||i===Yl||i===ql||i===$l||i===Kl||i===Zl||i===jl||i===Jl||i===Ql||i===tu||i===eu||i===nu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===iu||i===ru)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===su||i===ou||i===au)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ou)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Sy extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wy={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`;class by{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ze,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ni({vertexShader:Ey,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ay extends Cs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,g=null,_=null;const x=new by,m=e.getContextAttributes();let f=null,y=null;const S=[],T=[],I=new Pt;let b=null;const A=new hn;A.layers.enable(1),A.viewport=new ge;const D=new hn;D.layers.enable(2),D.viewport=new ge;const E=[A,D],v=new Sy;v.layers.enable(1),v.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new dl,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new dl,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new dl,S[q]=et),et.getHandSpace()};function B(q){const et=T.indexOf(q.inputSource);if(et===-1)return;const _t=S[et];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let q=0;q<S.length;q++){const et=T[q];et!==null&&(T[q]=null,S[q].disconnect(et))}P=null,z=null,x.reset(),t.setRenderTarget(f),g=null,p=null,d=null,r=null,y=null,he.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new dr(g.framebufferWidth,g.framebufferHeight,{format:In,type:di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?vs:ls,_t=m.stencil?xs:hr);const Ft={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(Ft),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new dr(p.textureWidth,p.textureHeight,{format:In,type:di,depthTexture:new cp(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let et=0;et<q.removed.length;et++){const _t=q.removed[et],ft=T.indexOf(_t);ft>=0&&(T[ft]=null,S[ft].disconnect(_t))}for(let et=0;et<q.added.length;et++){const _t=q.added[et];let ft=T.indexOf(_t);if(ft===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=T.length){T.push(_t),ft=Vt;break}else if(T[Vt]===null){T[Vt]=_t,ft=Vt;break}if(ft===-1)break}const Ft=S[ft];Ft&&Ft.connect(_t)}}const Y=new R,j=new R;function X(q,et,_t){Y.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ft=Y.distanceTo(j),Ft=et.projectionMatrix.elements,Vt=_t.projectionMatrix.elements,qt=Ft[14]/(Ft[10]-1),Me=Ft[14]/(Ft[10]+1),L=(Ft[9]+1)/Ft[5],Te=(Ft[9]-1)/Ft[5],ae=(Ft[8]-1)/Ft[0],de=(Vt[8]+1)/Vt[0],St=qt*ae,be=qt*de,Ut=ft/(-ae+de),Ot=Ut*-ae;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=qt+Ut,M=Me+Ut,G=St-Ot,Q=be+(ft-Ot),tt=L*Me/M*C,J=Te*Me/M*C;q.projectionMatrix.makePerspective(G,Q,tt,J,C,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ht(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),v.near=D.near=A.near=q.near,v.far=D.far=A.far=q.far,(P!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,z=v.far,A.near=P,A.far=z,D.near=P,D.far=z,A.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());const et=q.parent,_t=v.cameras;ht(v,et);for(let ft=0;ft<_t.length;ft++)ht(_t[ft],et);_t.length===2?X(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),mt(q,v,et)};function mt(q,et,_t){_t===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=co*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Mt=null;function Zt(q,et){if(h=et.getViewerPose(l||o),_=et,h!==null){const _t=h.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let ft=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Vt=0;Vt<_t.length;Vt++){const qt=_t[Vt];let Me=null;if(g!==null)Me=g.getViewport(qt);else{const Te=d.getViewSubImage(p,qt);Me=Te.viewport,Vt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,p.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let L=E[Vt];L===void 0&&(L=new hn,L.layers.enable(Vt),L.viewport=new ge,E[Vt]=L),L.matrix.fromArray(qt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(qt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Me.x,Me.y,Me.width,Me.height),Vt===0&&(v.matrix.copy(L.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(L)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Vt=d.getDepthInformation(_t[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,r.renderState)}}for(let _t=0;_t<S.length;_t++){const ft=T[_t],Ft=S[_t];ft!==null&&Ft!==void 0&&Ft.update(ft,et,l||o)}Mt&&Mt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const he=new op;he.setAnimationLoop(Zt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const $i=new $n,Cy=new ue;function Ry(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ip(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),S=y.envMap,T=y.envMapRotation;S&&(m.envMap.value=S,$i.copy(T),$i.x*=-1,$i.y*=-1,$i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler($i)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Py(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function l(y,S){let T=r[y.id];T===void 0&&(_(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(y,I);const b=t.render.frame;s[y.id]!==b&&(p(y),s[y.id]=b)}function h(y){const S=d();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=r[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=T.length;b<A;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let E=0,v=D.length;E<v;E++){const P=D[E];if(g(P,b,E,I)===!0){const z=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<B.length;$++){const Y=B[$],j=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,z+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(y,S,T,I){const b=y.value,A=S+"_"+T;if(I[A]===void 0)return typeof b=="number"||typeof b=="boolean"?I[A]=b:I[A]=b.clone(),!0;{const D=I[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return I[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(y){const S=y.uniforms;let T=0;const I=16;for(let A=0,D=S.length;A<D;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,P=E.length;v<P;v++){const z=E[v],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=B.length;W<$;W++){const Y=B[W],j=x(Y),X=T%I,ht=X%j.boundary,mt=X+ht;T+=ht,mt!==0&&I-mt<j.storage&&(T+=I-mt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=j.storage}}}const b=T%I;return b>0&&(T+=I-b),y.__size=T,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class Ly{constructor(t={}){const{canvas:e=yg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Pi,this.toneMappingExposure=1;const S=this;let T=!1,I=0,b=0,A=null,D=-1,E=null;const v=new ge,P=new ge;let z=null;const B=new Et(0);let W=0,$=e.width,Y=e.height,j=1,X=null,ht=null;const mt=new ge(0,0,$,Y),Mt=new ge(0,0,$,Y);let Zt=!1;const he=new Gu;let q=!1,et=!1;const _t=new ue,ft=new R,Ft=new ge,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Me(){return A===null?j:1}let L=i;function Te(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lu}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const N="webgl2";if(L=Te(N,w),L===null)throw Te(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,de,St,be,Ut,Ot,C,M,G,Q,tt,J,Tt,lt,pt,zt,it,dt,jt,It,gt,Nt,Wt,_e;function U(){ae=new Ov(L),ae.init(),Nt=new yy(L,ae),de=new Lv(L,ae,t,Nt),St=new xy(L),be=new kv(L),Ut=new ry,Ot=new My(L,ae,St,Ut,de,Nt,be),C=new Dv(S),M=new Fv(S),G=new qg(L),Wt=new Rv(L,G),Q=new Bv(L,G,be,Wt),tt=new Gv(L,Q,G,be),jt=new Hv(L,de,Ot),zt=new Iv(Ut),J=new iy(S,C,M,ae,de,Wt,zt),Tt=new Ry(S,Ut),lt=new oy,pt=new dy(ae),dt=new Cv(S,C,M,St,tt,p,c),it=new _y(S,tt,de),_e=new Py(L,be,de,St),It=new Pv(L,ae,be),gt=new zv(L,ae,be),be.programs=J.programs,S.capabilities=de,S.extensions=ae,S.properties=Ut,S.renderLists=lt,S.shadowMap=it,S.state=St,S.info=be}U();const rt=new Ay(S,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize($,Y,!1))},this.getSize=function(w){return w.set($,Y)},this.setSize=function(w,N,k=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,Y=N,e.width=Math.floor(w*j),e.height=Math.floor(N*j),k===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*j,Y*j).floor()},this.setDrawingBufferSize=function(w,N,k){$=w,Y=N,j=k,e.width=Math.floor(w*k),e.height=Math.floor(N*k),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,N,k,H){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,N,k,H),St.viewport(v.copy(mt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(Mt)},this.setScissor=function(w,N,k,H){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,N,k,H),St.scissor(P.copy(Mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){St.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(w=!0,N=!0,k=!0){let H=0;if(w){let F=!1;if(A!==null){const st=A.texture.format;F=st===Bu||st===Ou||st===Fu}if(F){const st=A.texture.type,ut=st===di||st===hr||st===ao||st===xs||st===Du||st===Uu,xt=dt.getClearColor(),vt=dt.getClearAlpha(),Rt=xt.r,Lt=xt.g,bt=xt.b;ut?(g[0]=Rt,g[1]=Lt,g[2]=bt,g[3]=vt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Rt,_[1]=Lt,_[2]=bt,_[3]=vt,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),lt.dispose(),pt.dispose(),Ut.dispose(),C.dispose(),M.dispose(),tt.dispose(),Wt.dispose(),_e.dispose(),J.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Fn),rt.removeEventListener("sessionend",Nh),Gi.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=be.autoReset,N=it.enabled,k=it.autoUpdate,H=it.needsUpdate,F=it.type;U(),be.autoReset=w,it.enabled=N,it.autoUpdate=k,it.needsUpdate=H,it.type=F}function ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const N=w.target;N.removeEventListener("dispose",Ct),te(N)}function te(w){Ae(w),Ut.remove(w)}function Ae(w){const N=Ut.get(w).programs;N!==void 0&&(N.forEach(function(k){J.releaseProgram(k)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,k,H,F,st){N===null&&(N=Vt);const ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=c0(w,N,k,H,F);St.setMaterial(H,ut);let vt=k.index,Rt=1;if(H.wireframe===!0){if(vt=Q.getWireframeAttribute(k),vt===void 0)return;Rt=2}const Lt=k.drawRange,bt=k.attributes.position;let ie=Lt.start*Rt,ye=(Lt.start+Lt.count)*Rt;st!==null&&(ie=Math.max(ie,st.start*Rt),ye=Math.min(ye,(st.start+st.count)*Rt)),vt!==null?(ie=Math.max(ie,0),ye=Math.min(ye,vt.count)):bt!=null&&(ie=Math.max(ie,0),ye=Math.min(ye,bt.count));const Se=ye-ie;if(Se<0||Se===1/0)return;Wt.setup(F,H,xt,k,vt);let on,re=It;if(vt!==null&&(on=G.get(vt),re=gt,re.setIndex(on)),F.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Me()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(F.isLine){let yt=H.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*Me()),F.isLineSegments?re.setMode(L.LINES):F.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else F.isPoints?re.setMode(L.POINTS):F.isSprite&&re.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,He=F._multiDrawCounts,se=F._multiDrawCount,En=vt?G.get(vt).bytesPerElement:1,br=Ut.get(H).currentProgram.getUniforms();for(let an=0;an<se;an++)br.setValue(L,"_gl_DrawID",an),re.render(yt[an]/En,He[an])}else if(F.isInstancedMesh)re.renderInstances(ie,Se,F.count);else if(k.isInstancedBufferGeometry){const yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,He=Math.min(k.instanceCount,yt);re.renderInstances(ie,Se,He)}else re.render(ie,Se)};function ke(w,N,k){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=Ke,w.needsUpdate=!0,Do(w,N,k),w.side=Di,w.needsUpdate=!0,Do(w,N,k),w.side=dn):Do(w,N,k)}this.compile=function(w,N,k=null){k===null&&(k=w),m=pt.get(k),m.init(N),y.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return w.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const xt=st[ut];ke(xt,k,F),H.add(xt)}else ke(st,k,F),H.add(st)}),y.pop(),m=null,H},this.compileAsync=function(w,N,k=null){const H=this.compile(w,N,k);return new Promise(F=>{function st(){if(H.forEach(function(ut){Ut.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){F(w);return}setTimeout(st,10)}ae.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ne=null;function jn(w){ne&&ne(w)}function Fn(){Gi.stop()}function Nh(){Gi.start()}const Gi=new op;Gi.setAnimationLoop(jn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){ne=w,rt.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},rt.addEventListener("sessionstart",Fn),rt.addEventListener("sessionend",Nh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,N,A),m=pt.get(w,y.length),m.init(N),y.push(m),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),he.setFromProjectionMatrix(_t),et=this.localClippingEnabled,q=zt.init(this.clippingPlanes,et),x=lt.get(w,f.length),x.init(),f.push(x),rt.enabled===!0&&rt.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Oc(st,N,-1/0,S.sortObjects)}Oc(w,N,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(X,ht),qt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,qt&&dt.addToRenderList(x,w),this.info.render.frame++,q===!0&&zt.beginShadows();const k=m.state.shadowsArray;it.render(k,w,N),q===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,F=x.transmissive;if(m.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let ut=0,xt=st.length;ut<xt;ut++){const vt=st[ut];Oh(H,F,w,vt)}qt&&dt.render(w);for(let ut=0,xt=st.length;ut<xt;ut++){const vt=st[ut];Fh(x,w,vt,vt.viewport)}}else F.length>0&&Oh(H,F,w,N),qt&&dt.render(w),Fh(x,w,N);A!==null&&(Ot.updateMultisampleRenderTarget(A),Ot.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(S,w,N),Wt.resetDefaultState(),D=-1,E=null,y.pop(),y.length>0?(m=y[y.length-1],q===!0&&zt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Oc(w,N,k,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){H&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const ut=tt.update(w),xt=w.material;xt.visible&&x.push(w,ut,xt,k,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const ut=tt.update(w),xt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ft.copy(ut.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(xt)){const vt=ut.groups;for(let Rt=0,Lt=vt.length;Rt<Lt;Rt++){const bt=vt[Rt],ie=xt[bt.materialIndex];ie&&ie.visible&&x.push(w,ut,ie,k,Ft.z,bt)}}else xt.visible&&x.push(w,ut,xt,k,Ft.z,null)}}const st=w.children;for(let ut=0,xt=st.length;ut<xt;ut++)Oc(st[ut],N,k,H)}function Fh(w,N,k,H){const F=w.opaque,st=w.transmissive,ut=w.transparent;m.setupLightsView(k),q===!0&&zt.setGlobalState(S.clippingPlanes,k),H&&St.viewport(v.copy(H)),F.length>0&&Io(F,N,k),st.length>0&&Io(st,N,k),ut.length>0&&Io(ut,N,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Oh(w,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new dr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?vo:di,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const st=m.state.transmissionRenderTarget[H.id],ut=H.viewport||v;st.setSize(ut.z,ut.w);const xt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),qt&&dt.render(k);const vt=S.toneMapping;S.toneMapping=Pi;const Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&zt.setGlobalState(S.clippingPlanes,H),Io(w,k,H),Ot.updateMultisampleRenderTarget(st),Ot.updateRenderTargetMipmap(st),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let bt=0,ie=N.length;bt<ie;bt++){const ye=N[bt],Se=ye.object,on=ye.geometry,re=ye.material,yt=ye.group;if(re.side===dn&&Se.layers.test(H.layers)){const He=re.side;re.side=Ke,re.needsUpdate=!0,Bh(Se,k,H,on,re,yt),re.side=He,re.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(st),Ot.updateRenderTargetMipmap(st))}S.setRenderTarget(xt),S.setClearColor(B,W),Rt!==void 0&&(H.viewport=Rt),S.toneMapping=vt}function Io(w,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=w.length;F<st;F++){const ut=w[F],xt=ut.object,vt=ut.geometry,Rt=H===null?ut.material:H,Lt=ut.group;xt.layers.test(k.layers)&&Bh(xt,N,k,vt,Rt,Lt)}}function Bh(w,N,k,H,F,st){w.onBeforeRender(S,N,k,H,F,st),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.transparent===!0&&F.side===dn&&F.forceSinglePass===!1?(F.side=Ke,F.needsUpdate=!0,S.renderBufferDirect(k,N,H,F,w,st),F.side=Di,F.needsUpdate=!0,S.renderBufferDirect(k,N,H,F,w,st),F.side=dn):S.renderBufferDirect(k,N,H,F,w,st),w.onAfterRender(S,N,k,H,F,st)}function Do(w,N,k){N.isScene!==!0&&(N=Vt);const H=Ut.get(w),F=m.state.lights,st=m.state.shadowsArray,ut=F.state.version,xt=J.getParameters(w,F.state,st,N,k),vt=J.getProgramCacheKey(xt);let Rt=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?M:C).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Ct),Rt=new Map,H.programs=Rt);let Lt=Rt.get(vt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ut)return kh(w,xt),Lt}else xt.uniforms=J.getUniforms(w),w.onBeforeCompile(xt,S),Lt=J.acquireProgram(xt,vt),Rt.set(vt,Lt),H.uniforms=xt.uniforms;const bt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=zt.uniform),kh(w,xt),H.needsLights=u0(w),H.lightsStateVersion=ut,H.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.directionalShadowMap.value=F.state.directionalShadowMap,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotShadowMap.value=F.state.spotShadowMap,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMap.value=F.state.pointShadowMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function zh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ta.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function kh(w,N){const k=Ut.get(w);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function c0(w,N,k,H,F){N.isScene!==!0&&(N=Vt),Ot.resetTextureUnits();const st=N.fog,ut=H.isMeshStandardMaterial?N.environment:null,xt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Oi,vt=(H.isMeshStandardMaterial?M:C).get(H.envMap||ut),Rt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,ye=!!k.morphAttributes.color;let Se=Pi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=S.toneMapping);const on=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=on!==void 0?on.length:0,yt=Ut.get(H),He=m.state.lights;if(q===!0&&(et===!0||w!==E)){const mn=w===E&&H.id===D;zt.setState(H,w,mn)}let se=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==He.state.version||yt.outputColorSpace!==xt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==vt||H.fog===!0&&yt.fog!==st||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==zt.numPlanes||yt.numIntersection!==zt.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Lt||yt.morphTargets!==bt||yt.morphNormals!==ie||yt.morphColors!==ye||yt.toneMapping!==Se||yt.morphTargetsCount!==re)&&(se=!0):(se=!0,yt.__version=H.version);let En=yt.currentProgram;se===!0&&(En=Do(H,N,F));let br=!1,an=!1,Bc=!1;const Ce=En.getUniforms(),mi=yt.uniforms;if(St.useProgram(En.program)&&(br=!0,an=!0,Bc=!0),H.id!==D&&(D=H.id,an=!0),br||E!==w){Ce.setValue(L,"projectionMatrix",w.projectionMatrix),Ce.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=Ce.map.cameraPosition;mn!==void 0&&mn.setValue(L,ft.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,an=!0,Bc=!0)}if(F.isSkinnedMesh){Ce.setOptional(L,F,"bindMatrix"),Ce.setOptional(L,F,"bindMatrixInverse");const mn=F.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ce.setValue(L,"boneTexture",mn.boneTexture,Ot))}F.isBatchedMesh&&(Ce.setOptional(L,F,"batchingTexture"),Ce.setValue(L,"batchingTexture",F._matricesTexture,Ot),Ce.setOptional(L,F,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",F._indirectTexture,Ot),Ce.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",F._colorsTexture,Ot));const zc=k.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0)&&jt.update(F,k,En),(an||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,Ce.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(mi.envMap.value=vt,mi.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(mi.envMapIntensity.value=N.environmentIntensity),an&&(Ce.setValue(L,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&l0(mi,Bc),st&&H.fog===!0&&Tt.refreshFogUniforms(mi,st),Tt.refreshMaterialUniforms(mi,H,j,Y,m.state.transmissionRenderTarget[w.id]),Ta.upload(L,zh(yt),mi,Ot)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ta.upload(L,zh(yt),mi,Ot),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(L,"center",F.center),Ce.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(L,"normalMatrix",F.normalMatrix),Ce.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const mn=H.uniformsGroups;for(let kc=0,h0=mn.length;kc<h0;kc++){const Hh=mn[kc];_e.update(Hh,En),_e.bind(Hh,En)}}return En}function l0(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function u0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,k){Ut.get(w.texture).__webglTexture=N,Ut.get(w.depthTexture).__webglTexture=k;const H=Ut.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const k=Ut.get(w);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,k=0){A=w,I=N,b=k;let H=!0,F=null,st=!1,ut=!1;if(w){const vt=Ut.get(w);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):vt.__webglFramebuffer===void 0?Ot.setupRenderTarget(w):vt.__hasExternalTextures&&Ot.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const Lt=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?F=Lt[N][k]:F=Lt[N],st=!0):w.samples>0&&Ot.useMultisampledRTT(w)===!1?F=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[k]:F=Lt,v.copy(w.viewport),P.copy(w.scissor),z=w.scissorTest}else v.copy(mt).multiplyScalar(j).floor(),P.copy(Mt).multiplyScalar(j).floor(),z=Zt;if(St.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&St.drawBuffers(w,F),St.viewport(v),St.scissor(P),St.setScissorTest(z),st){const vt=Ut.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,k)}else if(ut){const vt=Ut.get(w.texture),Rt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.__webglTexture,k||0,Rt)}D=-1},this.readRenderTargetPixels=function(w,N,k,H,F,st,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(L.FRAMEBUFFER,xt);try{const vt=w.texture,Rt=vt.format,Lt=vt.type;if(!de.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F&&L.readPixels(N,k,H,F,Nt.convert(Rt),Nt.convert(Lt),st)}finally{const vt=A!==null?Ut.get(A).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,N,k,H,F,st,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(L.FRAMEBUFFER,xt);try{const vt=w.texture,Rt=vt.format,Lt=vt.type;if(!de.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&k>=0&&k<=w.height-F){const bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(N,k,H,F,Nt.convert(Rt),Nt.convert(Lt),0),L.flush();const ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Sg(L,ie,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st)}finally{L.deleteBuffer(bt),L.deleteSync(ie)}return st}}finally{const vt=A!==null?Ut.get(A).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(w,N=null,k=0){w.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(w.image.width*H),st=Math.floor(w.image.height*H),ut=N!==null?N.x:0,xt=N!==null?N.y:0;Ot.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ut,xt,F,st),St.unbindTexture()},this.copyTextureToTexture=function(w,N,k=null,H=null,F=0){w.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let st,ut,xt,vt,Rt,Lt;k!==null?(st=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.min.x,vt=k.min.y):(st=w.image.width,ut=w.image.height,xt=0,vt=0),H!==null?(Rt=H.x,Lt=H.y):(Rt=0,Lt=0);const bt=Nt.convert(N.format),ie=Nt.convert(N.type);Ot.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ye=L.getParameter(L.UNPACK_ROW_LENGTH),Se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),re=L.getParameter(L.UNPACK_SKIP_ROWS),yt=L.getParameter(L.UNPACK_SKIP_IMAGES),He=w.isCompressedTexture?w.mipmaps[F]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,He.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,He.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,vt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Rt,Lt,st,ut,bt,ie,He.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Rt,Lt,He.width,He.height,bt,He.data):L.texSubImage2D(L.TEXTURE_2D,F,Rt,Lt,st,ut,bt,ie,He),L.pixelStorei(L.UNPACK_ROW_LENGTH,ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yt),F===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(w,N,k=null,H=null,F=0){w.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0);let st,ut,xt,vt,Rt,Lt,bt,ie,ye;const Se=w.isCompressedTexture?w.mipmaps[F]:w.image;k!==null?(st=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.max.z-k.min.z,vt=k.min.x,Rt=k.min.y,Lt=k.min.z):(st=Se.width,ut=Se.height,xt=Se.depth,vt=0,Rt=0,Lt=0),H!==null?(bt=H.x,ie=H.y,ye=H.z):(bt=0,ie=0,ye=0);const on=Nt.convert(N.format),re=Nt.convert(N.type);let yt;if(N.isData3DTexture)Ot.setTexture3D(N,0),yt=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ot.setTexture2DArray(N,0),yt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const He=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),br=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,F,bt,ie,ye,st,ut,xt,on,re,Se.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,F,bt,ie,ye,st,ut,xt,on,Se.data):L.texSubImage3D(yt,F,bt,ie,ye,st,ut,xt,on,re,Se),L.pixelStorei(L.UNPACK_ROW_LENGTH,He),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,br),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),F===0&&N.generateMipmaps&&L.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&Ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ot.setTextureCube(w,0):w.isData3DTexture?Ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ot.setTexture2DArray(w,0):Ot.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){I=0,b=0,A=null,St.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zu?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Qa?"display-p3":"srgb"}}class Wu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new Wu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Iy extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=us,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return hs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new R;class Va{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fp extends Bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wr;const Gs=new R,Xr=new R,Yr=new R,qr=new Pt,Vs=new Pt,pp=new ue,na=new R,Ws=new R,ia=new R,Od=new Pt,fl=new Pt,Bd=new Pt;class Uy extends Ee{constructor(t=new fp){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dy(e,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Va(i,3,0,!1)),Wr.setAttribute("uv",new Va(i,2,3,!1))}this.geometry=Wr,this.material=t,this.center=new Pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-Yr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ra(na.set(-.5,-.5,0),Yr,o,Xr,r,s),ra(Ws.set(.5,-.5,0),Yr,o,Xr,r,s),ra(ia.set(.5,.5,0),Yr,o,Xr,r,s),Od.set(0,0),fl.set(1,0),Bd.set(1,1);let a=t.ray.intersectTriangle(na,Ws,ia,!1,Gs);if(a===null&&(ra(Ws.set(-.5,.5,0),Yr,o,Xr,r,s),fl.set(0,1),a=t.ray.intersectTriangle(na,ia,Ws,!1,Gs),a===null))return;const c=t.ray.origin.distanceTo(Gs);c<t.near||c>t.far||e.push({distance:c,point:Gs.clone(),uv:Ln.getInterpolation(Gs,na,Ws,ia,Od,fl,Bd,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ra(n,t,e,i,r,s){qr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Vs.x=s*qr.x-r*qr.y,Vs.y=r*qr.x+s*qr.y):Vs.copy(qr),n.copy(t),n.x+=Vs.x,n.y+=Vs.y,n.applyMatrix4(pp)}class Ny extends Ze{constructor(t=null,e=1,i=1,r,s,o,a,c,l=rn,h=rn,d,p){super(null,o,a,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zd extends tn{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $r=new ue,kd=new ue,sa=[],Hd=new vr,Fy=new ue,Xs=new O,Ys=new Mr;class Ki extends O{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Fy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$r),Hd.copy(t.boundingBox).applyMatrix4($r),this.boundingBox.union(Hd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$r),Ys.copy(t.boundingSphere).applyMatrix4($r),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),t.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,$r),kd.multiplyMatrices(i,$r),Xs.matrixWorld=kd,Xs.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){const c=sa[o];c.instanceId=s,c.object=this,e.push(c)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ny(new Float32Array(r*this.count),r,this.count,Nu,kn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mp extends Bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wa=new R,Xa=new R,Gd=new ue,qs=new tc,oa=new Mr,pl=new R,Vd=new R;class Oy extends Ee{constructor(t=new Oe,e=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Wa.fromBufferAttribute(e,r-1),Xa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Gd.copy(r).invert(),qs.copy(t.ray).applyMatrix4(Gd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=l){const f=h.getX(x),y=h.getX(x+1),S=aa(this,t,qs,c,f,y);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(g),f=aa(this,t,qs,c,x,m);f&&e.push(f)}}else{const g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=l){const f=aa(this,t,qs,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=aa(this,t,qs,c,_-1,g);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(n,t,e,i,r,s){const o=n.geometry.attributes.position;if(Wa.fromBufferAttribute(o,r),Xa.fromBufferAttribute(o,s),e.distanceSqToSegment(Wa,Xa,pl,Vd)>i)return;pl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pl);if(!(c<t.near||c>t.far))return{distance:c,point:Vd.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class By extends Oy{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nc extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wd=new ue,lu=new tc,ca=new Mr,la=new R;class Xu extends Ee{constructor(t=new Oe,e=new nc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,t.ray.intersectsSphere(ca)===!1)return;Wd.copy(r).invert(),lu.copy(t.ray).applyMatrix4(Wd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=p,x=g;_<x;_++){const m=l.getX(_);la.fromBufferAttribute(d,m),Xd(la,m,c,r,t,e,this)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,x=g;_<x;_++)la.fromBufferAttribute(d,_),Xd(la,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xd(n,t,e,i,r,s,o){const a=lu.distanceSqToPoint(n);if(a<e){const c=new R;lu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Ps extends Ze{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends Oe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new R,h=new Pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const g=i+d/e*r;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends Oe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],g=[];let _=0;const x=[],m=i/2;let f=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(p,3)),this.setAttribute("uv",new ve(g,2));function y(){const T=new R,I=new R;let b=0;const A=(e-t)/i;for(let D=0;D<=s;D++){const E=[],v=D/s,P=v*(e-t)+t;for(let z=0;z<=r;z++){const B=z/r,W=B*c+a,$=Math.sin(W),Y=Math.cos(W);I.x=P*$,I.y=-v*i+m,I.z=P*Y,d.push(I.x,I.y,I.z),T.set($,A,Y).normalize(),p.push(T.x,T.y,T.z),g.push(B,1-v),E.push(_++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const v=x[E][D],P=x[E+1][D],z=x[E+1][D+1],B=x[E][D+1];h.push(v,P,B),h.push(P,z,B),b+=6}l.addGroup(f,b,0),f+=b}function S(T){const I=_,b=new Pt,A=new R;let D=0;const E=T===!0?t:e,v=T===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*v,0),p.push(0,v,0),g.push(.5,.5),_++;const P=_;for(let z=0;z<=r;z++){const W=z/r*c+a,$=Math.cos(W),Y=Math.sin(W);A.x=E*Y,A.y=m*v,A.z=E*$,d.push(A.x,A.y,A.z),p.push(0,v,0),b.x=$*.5+.5,b.y=Y*.5*v+.5,g.push(b.x,b.y),_++}for(let z=0;z<r;z++){const B=I+z,W=P+z;T===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}l.addGroup(f,D,T===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends Xt{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class So extends Oe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new R,T=new R,I=new R;for(let b=0;b<e.length;b+=3)g(e[b+0],S),g(e[b+1],T),g(e[b+2],I),c(S,T,I,y)}function c(y,S,T,I){const b=I+1,A=[];for(let D=0;D<=b;D++){A[D]=[];const E=y.clone().lerp(T,D/b),v=S.clone().lerp(T,D/b),P=b-D;for(let z=0;z<=P;z++)z===0&&D===b?A[D][z]=E:A[D][z]=E.clone().lerp(v,z/P)}for(let D=0;D<b;D++)for(let E=0;E<2*(b-D)-1;E++){const v=Math.floor(E/2);E%2===0?(p(A[D][v+1]),p(A[D+1][v]),p(A[D][v])):(p(A[D][v+1]),p(A[D+1][v+1]),p(A[D+1][v]))}}function l(y){const S=new R;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(y),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const y=new R;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const T=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;o.push(T,1-I)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){const S=o[y+0],T=o[y+2],I=o[y+4],b=Math.max(S,T,I),A=Math.min(S,T,I);b>.9&&A<.1&&(S<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function p(y){s.push(y.x,y.y,y.z)}function g(y,S){const T=y*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const y=new R,S=new R,T=new R,I=new R,b=new Pt,A=new Pt,D=new Pt;for(let E=0,v=0;E<s.length;E+=9,v+=6){y.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),T.set(s[E+6],s[E+7],s[E+8]),b.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),I.copy(y).add(S).add(T).divideScalar(3);const P=m(I);x(b,v+0,y,P),x(A,v+2,S,P),x(D,v+4,T,P)}}function x(y,S,T,I){I<0&&y.x===1&&(o[S]=y.x-1),T.x===0&&T.z===0&&(o[S]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.vertices,t.indices,t.radius,t.details)}}class Sn extends So{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sn(t.radius,t.detail)}}class Fi extends So{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fi(t.radius,t.detail)}}class ic extends So{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ic(t.radius,t.detail)}}class Nn extends Oe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,p=new R,g=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const y=[],S=f/i;let T=0;f===0&&o===0?T=.5/e:f===i&&c===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){const b=I/e;d.x=-t*Math.cos(r+b*s)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(r+b*s)*Math.sin(o+S*a),_.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(b+T,1-S),y.push(l++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const S=h[f][y+1],T=h[f][y],I=h[f+1][y],b=h[f+1][y+1];(f!==0||o>0)&&g.push(S,T,b),(f!==i-1||c<Math.PI)&&g.push(T,I,b)}this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fi extends Oe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new R,d=new R,p=new R;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const x=_/r*s,m=g/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const x=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,f=(r+1)*(g-1)+_,y=(r+1)*g+_;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class at extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zy extends mp{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Yu extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ky extends Yu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ml=new ue,Yd=new R,qd=new R;class gp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yd),qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qd),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $d=new ue,$s=new R,gl=new R;class Hy extends gp{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),$s.setFromMatrixPosition(t.matrixWorld),i.position.copy($s),gl.copy(i.position),gl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(gl),i.updateMatrixWorld(),r.makeTranslation(-$s.x,-$s.y,-$s.z),$d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}}class wo extends Yu{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gy extends gp{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vy extends Yu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Gy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kd(){return(typeof performance>"u"?Date:performance).now()}const Zd=new ue;class _p{constructor(t,e,i=0,r=1/0){this.ray=new tc(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zd),this}intersectObject(t,e=!0,i=[]){return uu(t,this,i,e),i.sort(jd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)uu(t[r],this,i,e);return i.sort(jd),i}}function jd(n,t){return n.distance-t.distance}function uu(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)uu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);const Ks=new R;function _n(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Ks.copy(t),Ks[i]=0,Ks.normalize();const l=.5*o/(o+a),h=1-Ks.angleTo(n)/c;return Math.sign(Ks[e])===1?h*l:a/(o+a)+l+l*(1-h)}class rc extends wt{constructor(t=1,e=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,c=new R,l=new R(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,_=new R,x=.5/r;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*s,h[m+1]=l.y*Math.sign(a.y)+c.y*s,h[m+2]=l.z*Math.sign(a.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[f+0]=_n(_,c,"z","y",s,i),p[f+1]=1-_n(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[f+0]=1-_n(_,c,"z","y",s,i),p[f+1]=1-_n(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[f+0]=1-_n(_,c,"x","z",s,t),p[f+1]=_n(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[f+0]=1-_n(_,c,"x","z",s,t),p[f+1]=1-_n(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[f+0]=1-_n(_,c,"x","y",s,t),p[f+1]=1-_n(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[f+0]=_n(_,c,"x","y",s,t),p[f+1]=1-_n(_,c,"y","x",s,e);break}}}const xp=document.getElementById("game"),Jd=document.getElementById("hud"),Xy=document.getElementById("nightText"),Yy=document.getElementById("phaseIcon"),qy=document.getElementById("healthText"),_l=document.getElementById("healthFill"),ys=document.getElementById("joystickZone");document.getElementById("joystickBase");const lo=document.getElementById("joystickKnob");document.getElementById("lookZone");const uo=document.getElementById("jumpBtn"),vp=document.getElementById("undragBtn"),qu=document.getElementById("storeBtn"),so=document.getElementById("unstoreBtn"),$u=document.getElementById("eatBtn"),Ku=document.getElementById("grinderBtn"),Zu=document.getElementById("fireBtn"),ju=document.getElementById("plantBtn"),$y=document.getElementById("woodText"),Ky=document.getElementById("saplingText"),Zy=document.getElementById("berryText"),jy=document.getElementById("ironText"),Qs=document.getElementById("mapExpandedNotice"),Mp=document.getElementById("startHint"),xl=document.getElementById("dragLabel"),Jy=document.getElementById("dragName"),ua=document.getElementById("dragFlames"),Hn=document.getElementById("sackCounter"),ba=document.getElementById("fireFlash"),Aa=document.getElementById("benchPrompt"),Ju=document.getElementById("placeBtn"),Qy=document.getElementById("hungerText"),Qd=document.getElementById("hungerFill"),Eo=document.getElementById("fireWarning"),hu=document.getElementById("touchDebug"),sc=document.getElementById("deathBanner"),ho=document.getElementById("toast"),ns=document.getElementById("hitMeter"),tS=document.getElementById("hitMeterText"),eS=document.getElementById("hitMeterFill"),Qu=document.getElementById("darkness"),ai=document.getElementById("startOverlay"),nS=document.getElementById("startBtn"),yp=document.getElementById("axeSlot"),Li=document.getElementById("backpackSlot"),Sp=document.getElementById("pickaxeSlot"),wp=document.getElementById("torchSlot"),Ep=document.getElementById("ironSwordSlot"),iS=document.getElementById("axeLabel"),rS=document.getElementById("backpackLabel"),sS=document.getElementById("pickaxeLabel"),oS=document.getElementById("torchLabel"),aS=document.getElementById("ironSwordLabel"),cS=document.getElementById("backpackBadge"),lS=document.getElementById("inventoryPanel"),vl=document.getElementById("inventoryList"),uS=document.getElementById("inventoryCapacity"),hS=document.getElementById("closeInventoryBtn"),dS=document.getElementById("unequipBtn"),Tp=document.getElementById("craftPanel"),Ml=document.getElementById("craftGrid"),fS=document.getElementById("closeCraftBtn"),pS=document.getElementById("craftTierLabel"),tf=document.getElementById("craftWoodStock"),ef=document.getElementById("craftIronStock"),mS=document.getElementById("craftDetailIcon"),gS=document.getElementById("craftDetailName"),_S=document.getElementById("craftDetailDesc"),yl=document.getElementById("craftDetailCost"),xS=document.getElementById("craftDetailBadge"),du=document.getElementById("craftButton"),Ca=document.getElementById("audioToggle"),to=document.getElementById("cameraBtn"),bp=document.getElementById("settingsBtn"),vS=document.getElementById("settingsPanel"),MS=document.getElementById("closeSettingsBtn"),nf=document.getElementById("volumeSlider"),yS=document.getElementById("volumeValue"),Ls=new Ly({canvas:xp,antialias:!0,alpha:!1,powerPreference:"high-performance"});Ls.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ls.setSize(window.innerWidth,window.innerHeight);Ls.shadowMap.enabled=!0;Ls.shadowMap.type=Ff;const Ge=new Iy;Ge.background=new Et(133647);Ge.fog=new Wu(465186,.045);const pe=new hn(67,window.innerWidth/window.innerHeight,.1,1400);pe.rotation.order="YXZ";const SS=new Wy,Qt=new At;Ge.add(Qt);const qe=new R(5.6,0,5.4),$e=new R(7.6,0,1.9),Gn=new R(-8.2,0,4.6),is=new R(6.8,0,-8.8),Vn=new R(-5.6,0,-7.4),wS=[{x:qe.x,z:qe.z,r:2.4},{x:$e.x,z:$e.z,r:1.8},{x:Gn.x,z:Gn.z,r:2.4},{x:is.x,z:is.z,r:3.6},{x:Vn.x,z:Vn.z,r:1.8}];function Sr(n,t,e=0){for(const i of wS)if(Math.hypot(n-i.x,t-i.z)<i.r+e)return!0;return!1}const fu=13,wr=[],fo=13,Ap=.5,ES=5,TS=1.6,th=4,bS=.45,rf=67,AS=75,sf=Zf.degToRad(80),CS=.0037,RS=.0022,Ra=4,Cp=15,PS=300,Qi=-1.05,Rp=-.34,LS=1.309,Pp=LS-(Qi+Rp),Lp=-Math.PI/2,IS=.34;function Bt(n,t){const e=Math.hypot(n,t),i=Math.min(Math.max((e-14)/8,0),1);return(Math.sin(n*.11+.7)*Math.cos(t*.1-.35)*.55+Math.sin((n+t)*.055-.6)*.35+Math.sin(n*.024-t*.019)*.22)*i}const oc=new yr(1780,1780,150,150);oc.rotateX(-Math.PI/2);const ha=oc.attributes.position;for(let n=0;n<ha.count;n+=1)ha.setY(n,Bt(ha.getX(n),ha.getZ(n)));oc.computeVertexNormals();const Ip=new O(oc,new at({color:1058079,roughness:1,metalness:0}));Ip.receiveShadow=!0;Qt.add(Ip);const $t=new At;$t.userData.campfireRef=!0;Qt.add($t);const nn=new At;$t.add(nn);const To=new O(new Xt(.74,.92,.12,12),new at({color:2759444,emissive:8006664,emissiveIntensity:.55,roughness:1}));To.position.y=.06;To.receiveShadow=!0;$t.add(To);const xn=new O(new Nn(.22,10,10),new at({color:16747050,emissive:16739096,emissiveIntensity:1.8,roughness:.55,metalness:.1}));xn.position.y=.55;xn.castShadow=!1;$t.add(xn);const fs=new wo(16748092,2.2,15,2.1);fs.position.set(0,1.3,0);$t.add(fs);const ps=new wo(16765597,.85,20,2);ps.position.set(0,1.2,0);Ge.add(ps);const pu=new ky(9815807,988441,.9);Ge.add(pu);const Un=new Vy(12244991,.9);Un.position.set(-8,12,6);Un.castShadow=!0;Un.shadow.mapSize.width=1024;Un.shadow.mapSize.height=1024;Un.shadow.camera.left=-35;Un.shadow.camera.right=35;Un.shadow.camera.top=35;Un.shadow.camera.bottom=-35;Ge.add(Un);const De=[],DS=new at({color:3876643,roughness:1}),US=new at({color:1714719,roughness:1});function Dp(n,t,e=1){const i=new At,r=new O(new Xt(.18*e,.28*e,1.7*e,6),DS);r.position.y=.85*e,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const s=new O(new Ie(.8*e,2.2*e,6),US);return s.position.y=2.4*e,s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.position.set(n,Bt(n,t),t),i.userData.scale=e,i.userData.cameraMeshes=[r,s],i.userData.trunk=r,i.userData.foliage=s,i.userData.treeRef=i,Qt.add(i),De.push(i),i}for(let n=0;n<18;n+=1){let t=!1;for(let e=0;e<40&&!t;e+=1){const i=Math.random()*Math.PI*2,r=9+Math.random()*5.2,s=Math.cos(i)*r,o=Math.sin(i)*r;Math.abs(s)<5&&Math.abs(o)<5||Sr(s,o,1.4)||De.some(a=>Math.hypot(a.position.x-s,a.position.z-o)<2.1)||(Dp(s,o,.8+Math.random()),t=!0)}}const Up=new Set([...De].sort((n,t)=>Math.hypot(n.position.x,n.position.z)-Math.hypot(t.position.x,t.position.z)).slice(0,8));for(let n=0;n<De.length;n+=4)Up.add(De[n]);for(const n of Up){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.hits=fo,t.hitsMax=fo,t.shake=0,t.highlight=0,t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Et(16757082),t.trunk.material.emissiveIntensity=0}const NS=new at({color:7029796,roughness:.9}),of=new at({color:3111493,roughness:.92});function Np(n=1){const t=new At,e=new O(new Xt(.035,.055,.5,5),NS);e.position.y=.25,e.castShadow=!0,t.add(e);const i=new O(new Ie(.28,.55,6),of);i.position.y=.55,i.castShadow=!0,t.add(i);const r=new O(new Ie(.19,.42,6),of);return r.position.y=.84,r.castShadow=!0,t.add(r),t.scale.setScalar(n),t}for(let n=0;n<140;n+=1){const t=new O(new wt(.12,.16,.12),new at({color:1521191,roughness:1})),e=Math.random()*Math.PI*2,i=5+Math.random()*41,r=Math.cos(e)*i,s=Math.sin(e)*i;Sr(r,s,1.2)||(t.position.set(r,Bt(r,s)+.08,s),t.castShadow=!0,t.receiveShadow=!0,Qt.add(t))}const V=new At;Ge.add(V);const wn=new At;wn.position.y=.01;V.add(wn);const Er=new at({color:16766527,emissive:3877120,emissiveIntensity:.38,roughness:.38,metalness:.03}),FS=new at({color:3108818,roughness:.4,metalness:.03}),Fp=new at({color:3709259,roughness:.42,metalness:.03}),eh=new at({color:1185048,roughness:.5,metalness:0});function Kn(n,t,e,i,r=.035){const s=new O(new rc(n,t,e,2,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}const Op=Kn(.84,.86,.44,FS,.045);Op.position.y=1.27;wn.add(Op);const Is=new At;Is.position.y=2;wn.add(Is);const OS=Kn(.6,.6,.6,Er,.055);Is.add(OS);const Bp=new rc(.075,.105,.025,1,.01),zp=new O(Bp,eh);zp.position.set(-.135,.085,.301);Is.add(zp);const kp=new O(Bp,eh);kp.position.set(.135,.085,.301);Is.add(kp);const nh=new O(new fi(.115,.021,4,14,Math.PI),eh);nh.rotation.z=Math.PI;nh.position.set(0,-.075,.303);Is.add(nh);const Wn=new At;Wn.position.set(-.54,1.64,0);wn.add(Wn);const Hp=Kn(.22,.78,.3,Er,.06);Hp.position.y=-.39;Wn.add(Hp);const Gp=Kn(.2,.16,.26,Er,.05);Gp.position.set(0,-.8,.01);Wn.add(Gp);const Dn=new At;Dn.position.set(.54,1.64,0);wn.add(Dn);const ih=Kn(.22,.78,.3,Er,.06);ih.position.y=-.39;Dn.add(ih);const Vp=Kn(.2,.16,.26,Er,.05);Vp.position.set(0,0,0);const Ds=new At;Ds.position.set(0,-.41,.01);Ds.rotation.set(Rp,0,0);ih.add(Ds);Ds.add(Vp);const fr=new At;fr.position.set(-.2,.84,0);wn.add(fr);const Wp=Kn(.3,.82,.36,Fp,.045);Wp.position.y=-.41;fr.add(Wp);const pr=new At;pr.position.set(.2,.84,0);wn.add(pr);const Xp=Kn(.3,.82,.36,Fp,.045);Xp.position.y=-.41;pr.add(Xp);const ac=new O(new Nn(.15,8,8),new at({color:16762478,emissive:16747046,emissiveIntensity:2.1,roughness:.4}));ac.position.set(.02,-.68,.2);ac.castShadow=!0;Dn.add(ac);const sn=new At;sn.position.set(0,0,0);sn.rotation.set(Pp,Lp,0);Ds.add(sn);const rh=new O(new Xt(.038,.048,.95,6),new at({color:8079911,roughness:.82,metalness:.02}));rh.position.y=.475;rh.castShadow=!0;sn.add(rh);const sh=new O(new Xt(.052,.052,.22,6),new at({color:3875859,roughness:.95}));sh.position.y=0;sh.castShadow=!0;sn.add(sh);const oh=new O(new wt(.34,.2,.1),new at({color:12175054,emissive:2371898,emissiveIntensity:.4,roughness:.3,metalness:.65}));oh.position.set(.11,.72,0);oh.castShadow=!0;sn.add(oh);const ah=new O(new wt(.2,.3,.07),new at({color:15266293,emissive:3096393,emissiveIntensity:.45,roughness:.24,metalness:.55}));ah.position.set(.27,.72,0);ah.castShadow=!0;sn.add(ah);sn.visible=!1;const mu=new at({color:11188417,emissive:1778988,emissiveIntensity:.36,roughness:.3,metalness:.68}),Ya=new at({color:14477550,emissive:3490893,emissiveIntensity:.4,roughness:.24,metalness:.64}),BS=new at({color:7422755,roughness:.84,metalness:.02}),gu=new at({color:14725728,roughness:.42,metalness:.5});function cc(n,t,e=.042){const i=new O(new Xt(e,e*1.2,t,6),BS);i.position.y=t*.5,i.castShadow=!0,n.add(i);const r=new O(new Xt(e*1.28,e*1.28,.2,6),new at({color:3547154,roughness:.95}));r.position.y=0,r.castShadow=!0,n.add(r)}function Yp(){const n=new At;cc(n,.92,.038);const t=new O(new wt(.72,.13,.13),mu);t.position.set(.02,.76,0),t.castShadow=!0,n.add(t);const e=new O(new Ie(.105,.31,4),Ya);e.position.set(.42,.76,0),e.rotation.z=-Math.PI/2,e.castShadow=!0,n.add(e);const i=new O(new Ie(.09,.23,4),mu);return i.position.set(-.35,.76,0),i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i),n}function qp(){const n=new At;cc(n,.96,.045);const t=new O(new wt(.36,.22,.11),mu);t.position.set(.11,.775,0),t.castShadow=!0,n.add(t);const e=new O(new wt(.22,.34,.075),Ya);e.position.set(.29,.775,0),e.rotation.z=-.06,e.castShadow=!0,n.add(e);const i=new O(new Xt(.028,.028,.13,6),gu);return i.rotation.x=Math.PI/2,i.position.set(.11,.775,.04),n.add(i),n}function $p(){const n=new At;cc(n,.55,.035);const t=new O(new wt(.44,.08,.11),gu);t.position.y=.3835,t.castShadow=!0,n.add(t);const e=new O(new wt(.14,.9,.055),Ya);e.position.y=.8835,e.castShadow=!0,n.add(e);const i=new O(new Ie(.099,.24,4),Ya);i.position.y=1.4335,i.castShadow=!0,n.add(i);const r=new O(new Nn(.07,6,5),gu);return r.position.y=.0835,n.add(r),n}function zS(){const n=new At;cc(n,.52,.036);const t=new O(new Xt(.075,.06,.18,7),new at({color:3810324,roughness:.95}));t.position.y=.5,n.add(t);const e=new O(new Ie(.11,.3,6),new en({color:16753978,transparent:!0,opacity:.9,blending:Ui,depthWrite:!1}));return e.position.y=.72,n.add(e),n}const lc=Yp(),uc=qp(),hc=$p(),dc=zS();for(const[n,t]of[["pickaxe",lc],["torch",dc],["ironAxe",uc],["ironSword",hc]])t.position.set(0,0,0),t.rotation.set(Pp,Lp,0),t.visible=!1,t.userData.baseY=t.position.y,t.userData.tool=n,Ds.add(t);const kS=new at({color:8145450,roughness:.78,metalness:.02}),af=new at({color:5123096,roughness:.86}),HS=new at({color:14725728,roughness:.42,metalness:.5});function GS(n=1){const t=new At,e=new O(new Nn(.27,10,8),kS);e.scale.set(1,1.12,.8),e.position.y=-.04,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const i=new O(new Xt(.1,.17,.2,8),af);i.position.y=.27,i.castShadow=!0,t.add(i);const r=new O(new fi(.11,.025,5,10),HS);r.rotation.x=Math.PI/2,r.position.y=.3,t.add(r);const s=new O(new rc(.16,.12,.035,2,.02),af);return s.position.set(0,-.08,.215),s.castShadow=!0,t.add(s),t.scale.setScalar(n),t}const Zn=GS(1);Zn.position.set(.09,-.96,.2);Zn.rotation.set(.08,Math.PI-.25,.05);Zn.visible=!1;Dn.add(Zn);const VS=sn.position.y,WS=Zn.position.y;sn.userData.baseY=VS;sn.userData.tool="axe";Zn.userData.baseY=WS;Zn.userData.tool="backpack";Ge.add(pe);const bo=new At;bo.visible=!1;pe.add(bo);const xe=new At;xe.position.set(.47,-.7,-.8);xe.rotation.set(-.2,.14,.24);xe.scale.setScalar(.78);bo.add(xe);const ch=Kn(.17,.5,.19,Er,.05);ch.position.set(0,.22,0);ch.castShadow=!1;xe.add(ch);const lh=Kn(.2,.18,.22,Er,.045);lh.position.set(0,.49,.01);lh.castShadow=!1;xe.add(lh);const uh=new At;uh.position.set(0,.5,.02);xe.add(uh);const Kp={axe:sn.clone(!0),pickaxe:lc.clone(!0),torch:dc.clone(!0),ironAxe:uc.clone(!0),ironSword:hc.clone(!0)},XS={axe:.3,pickaxe:.34,torch:.2,ironAxe:.36,ironSword:.2};for(const[n,t]of Object.entries(Kp))t.position.set(0,XS[n],0),t.rotation.set(-.15,.12,.26),t.scale.setScalar(.9),t.visible=!1,t.userData.fpTool=n,t.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),uh.add(t);const Kr={x:xe.position.x,y:xe.position.y,z:xe.position.z,rx:xe.rotation.x,ry:xe.rotation.y,rz:xe.rotation.z},fc=new wo(16760945,.8,14,2);fc.position.set(0,1.9,0);V.add(fc);const pn=new O(new fi(1.05,.055,5,24),new en({color:16769184,transparent:!0,opacity:.8}));pn.rotation.x=Math.PI/2;pn.position.set(0,.9,.85);pn.visible=!1;V.add(pn);const fn=new O(new Fi(.42,1),new en({color:16765562,transparent:!0,opacity:0,blending:Ui,depthWrite:!1,wireframe:!0}));fn.visible=!1;Ge.add(fn);V.position.set(0,Bt(0,4),4);const hh=[],YS=new Sn(.55,0),qS=new at({color:4608078,roughness:.95,metalness:.02});for(let n=0;n<8;n+=1){const t=Math.random()*Math.PI*2,e=10+Math.random()*20,i=Math.cos(t)*e,r=Math.sin(t)*e;if(Sr(i,r,1.8)||De.some(c=>Math.hypot(c.position.x-i,c.position.z-r)<1.6))continue;const s=.8+Math.random()*.55,o=Bt(i,r),a=new O(YS,qS);a.position.set(i,o+.3025*s,r),a.scale.set(s,s*.55,s),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,Qt.add(a),hh.push({x:i,z:r,radius:.52*s,top:o+.605*s,mesh:a})}const ms=[],yn=[];let Gt=null;const _u=1.2,rs=.7,dh=1.15,$S=.42,Ao=[],KS=new Xt(.15,.17,.72,7),ZS=new at({color:10117944,emissive:2823689,emissiveIntensity:.45,roughness:.85,metalness:.02}),jS=new at({color:14170699,emissive:3998985,emissiveIntensity:.45,roughness:.62}),JS=new at({color:4168275,roughness:.88}),QS=new Nn(.09,6,5),t1=new at({color:2380346,roughness:.98}),e1=new at({color:1588009,roughness:.98});function cf(n=1){const t=new At,e=[[0,.1,0],[.1,.04,.03],[-.09,.03,.05],[.02,.02,-.09]];for(const[r,s,o]of e){const a=new O(QS,jS);a.position.set(r,s,o),a.castShadow=!0,t.add(a)}const i=new O(new Ie(.1,.16,5),JS);return i.position.set(.03,.2,-.02),i.rotation.z=.4,i.castShadow=!0,t.add(i),t.scale.setScalar(n),t}function Zp(n,t){const e=new At,i=new O(new Fi(.62,0),t1);i.position.y=.34,i.scale.set(1.1,.7,1.05),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new O(new Fi(.42,0),e1);r.position.set(.26,.54,-.12),r.scale.set(1,.75,1),r.castShadow=!0,e.add(r),e.position.set(n,Bt(n,t),t),e.rotation.y=Math.random()*Math.PI*2,Qt.add(e);const s={x:n,z:t,mesh:e,nextHarvest:0};e.userData.berryBushRef=s,Ao.push(s)}for(let n=0;n<15;n+=1){let t=!1;for(let e=0;e<24&&!t;e+=1){const i=Math.random()*Math.PI*2,r=8.5+Math.random()*22,s=Math.cos(i)*r,o=Math.sin(i)*r;Math.hypot(s,o)<8||Sr(s,o,2.2)||De.some(a=>Math.hypot(a.position.x-s,a.position.z-o)<2.1)||Ao.some(a=>Math.hypot(a.x-s,a.z-o)<3.2)||(Zp(s,o),t=!0)}}const n1=[[-12.5,6.8],[12.8,-7.4],[-6,12.5]];for(const[n,t]of n1){let e=!1;for(let i=0;i<12&&!e;i+=1){const r=n+(Math.random()-.5)*1.6,s=t+(Math.random()-.5)*1.6;Math.hypot(r,s)>15.5||Sr(r,s,1.4)||De.some(o=>Math.hypot(o.position.x-r,o.position.z-s)<1.8)||Ao.some(o=>Math.hypot(o.x-r,o.z-s)<2.4)||(Zp(r,s),e=!0)}}const zi=[],xu=new at({color:5858667,roughness:.92,metalness:.08,flatShading:!0}),jp=new at({color:7635336,roughness:.86,metalness:.12,flatShading:!0}),Jp=new at({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.32}),Qp=new ic(.095,0);function i1(n,t,e=1){const i=new At,r={group:i,x:n,z:t,scale:e,hits:fu,hitsMax:fu,broken:!1,regrow:0,shake:0,sway:Math.random()*Math.PI*2},s=new O(new Sn(.76,0),xu);s.position.y=.5,s.scale.set(1.05,.82,.92),s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,i.add(s);const o=new O(new Sn(.42,0),jp);o.position.set(.48,.26,.2),o.scale.set(1,.75,.9),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new O(new Sn(.3,0),xu);a.position.set(-.46,.2,-.26),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,i.add(a);const c=[[-.33,.53,.63,1.5,1.1,.62,.2,.25,.45],[.18,.62,.66,1.2,.9,.55,-.15,.4,-.35],[.63,.44,.25,.62,1.15,1.3,.3,-.2,.25],[-.12,.35,.69,1.35,.85,.55,.4,.1,.2],[.38,.5,-.62,1.2,1,.7,-.25,.3,-.3]];for(const[l,h,d,p,g,_,x,m,f]of c){const y=new O(Qp,Jp);y.position.set(l,h,d),y.scale.set(p,g,_),y.rotation.set(x,m,f),y.castShadow=!0,i.add(y)}return i.position.set(n,Bt(n,t),t),i.rotation.y=Math.random()*Math.PI*2,i.scale.setScalar(e),i.traverse(l=>{l.userData.rockRef=r}),Qt.add(i),zi.push(r),wr.push({x:n,z:t,radius:.56*e,rock:r}),r}function r1(n,t,e){return!(Math.hypot(n,t)<10.5||Sr(n,t,2*e)||De.some(i=>Math.hypot(i.position.x-n,i.position.z-t)<1.9*e)||Ao.some(i=>Math.hypot(i.x-n,i.z-t)<2*e)||zi.some(i=>Math.hypot(i.x-n,i.z-t)<2.2*e))}const s1=[[11.8,-5.2],[-12.6,-4.2],[7.8,10.8],[-8.4,-10.2]];for(const[n,t]of s1){let e=0;for(let i=0;i<26&&e<2;i+=1){const r=Math.random()*Math.PI*2,s=Math.random()*2.7,o=n+Math.cos(r)*s,a=t+Math.sin(r)*s,c=.88+Math.random()*.38;r1(o,a,c)&&(i1(o,a,c),e+=1)}}const o1=new at({color:6976626,roughness:.98,flatShading:!0}),a1=[[10.5,7.5,1.15],[-12.2,2.2,.95],[-3.8,12.3,1.05],[2,-13.5,.85],[-10.8,-8,.78]];for(const[n,t,e]of a1){if(Sr(n,t,1)||De.some(r=>Math.hypot(r.position.x-n,r.position.z-t)<1.5)||zi.some(r=>Math.hypot(r.x-n,r.z-t)<1.8))continue;const i=new O(new Sn(.52*e,0),o1);i.position.set(n,Bt(n,t)+.25*e,t),i.scale.set(1.15,.62,.95),i.rotation.set(Math.random()*.35,Math.random()*Math.PI,Math.random()*.25),i.castShadow=!0,i.receiveShadow=!0,Qt.add(i),wr.push({x:n,z:t,radius:.44*e,type:"stone"})}const fe=new At,Xn={},On=new At,tr=new At,lf=new at({color:9067054,roughness:.85,metalness:.04}),da=new at({color:6044189,roughness:.9}),wi=new at({color:9280161,roughness:.4,metalness:.68}),oi=new at({color:5661033,roughness:.46,metalness:.6});function c1(n,t,e){const i=document.createElement("canvas");i.width=192,i.height=112;const r=i.getContext("2d"),s=a=>{r.clearRect(0,0,192,112),r.fillStyle=n==="wood"?"#6b4322":"#545d63",r.fillRect(0,0,192,112),r.strokeStyle="rgba(0, 0, 0, 0.5)",r.lineWidth=8,r.strokeRect(4,4,184,104),r.fillStyle="rgba(255, 255, 255, 0.08)",r.fillRect(6,6,180,18),n==="wood"?(r.fillStyle="#d79a58",r.fillRect(18,44,52,26),r.fillStyle="#b87a3d",r.beginPath(),r.arc(18,57,13,0,Math.PI*2),r.fill(),r.strokeStyle="#8a5526",r.lineWidth=3,r.beginPath(),r.arc(18,57,6,0,Math.PI*2),r.stroke()):(r.fillStyle="#dfe9ee",r.beginPath(),r.moveTo(46,36),r.lineTo(24,60),r.lineTo(40,60),r.lineTo(32,82),r.lineTo(56,54),r.lineTo(40,54),r.closePath(),r.fill()),r.fillStyle="#ffe1a8",r.font="bold 58px system-ui, sans-serif",r.textAlign="right",r.textBaseline="middle",r.fillText(String(a),176,62)};s(t);const o=new Ps(i);return o.colorSpace=Ye,{mesh:null,pop:0,setValue(a,c){s(a),o.needsUpdate=!0,this.mesh&&(this.pop=1)},texture:o}}function uf(n,t,e){const i=c1(n,0),r=new en({map:i.texture,transparent:!0}),s=new O(new yr(.72,.42),r);return s.position.set(t,.66,.515),i.mesh=s,i}{const n=new O(new wt(2.55,.17,1),lf);n.position.y=.94,n.castShadow=!0,n.receiveShadow=!0,fe.add(n);const t=new O(new wt(2.45,.16,.16),da);t.position.set(0,.8,.42),fe.add(t);const e=t.clone();e.position.z=-.42,fe.add(e);for(const[l,h]of[[-1.08,-.36],[1.08,-.36],[-1.08,.36],[1.08,.36]]){const d=new O(new wt(.2,.92,.2),da);d.position.set(l,.46,h),d.castShadow=!0,fe.add(d);const p=new O(new wt(.28,.1,.28),wi);p.position.set(l*.94,.86,h*.94),p.castShadow=!0,fe.add(p);const g=new O(new wt(.24,.08,.24),oi);g.position.set(l*.94,.14,h*.94),fe.add(g)}const i=new O(new wt(.14,.1,.78),da);i.position.set(0,.42,0),fe.add(i);const r=new O(new wt(.07,.06,.62),lf);r.position.set(-.72,1.05,.02),r.rotation.y=.36,fe.add(r);const s=new O(new wt(.3,.13,.14),oi);s.position.set(-.55,1.07,-.16),s.rotation.y=.36,s.castShadow=!0,fe.add(s);const o=new O(new wt(.9,.035,.2),wi);o.position.set(.62,1.05,-.12),o.rotation.y=-.22,fe.add(o);const a=new O(new wt(.22,.09,.15),da);a.position.set(1.14,1.06,-.02),a.rotation.y=-.22,fe.add(a);for(let l=0;l<7;l+=1){const h=new O(new Ie(.03,.07,3),wi);h.position.set(.62+(l-3)*.11,1.02,-.22),h.rotation.x=Math.PI/2,fe.add(h)}Xn.woodSign=uf("wood",-.62),Xn.ironSign=uf("iron",.62),fe.add(Xn.woodSign.mesh),fe.add(Xn.ironSign.mesh);{const l=new O(new wt(.3,.18,.28),oi);l.position.set(-1.06,1.1,.22),On.add(l);const h=new O(new wt(.24,.16,.08),wi);h.position.set(-1.06,1.18,.34),On.add(h);const d=new O(new Xt(.03,.03,.3,6),wi);d.rotation.z=Math.PI/2,d.position.set(-1.06,1.1,.44),On.add(d);const p=new O(new Xt(.035,.045,1.55,6),oi);p.position.set(1.2,1.72,-.42),On.add(p);const g=new O(new wt(.5,.06,.06),oi);g.position.set(.98,2.46,-.42),On.add(g);const _=new O(new Ie(.18,.22,8),new at({color:3812122,emissive:16756810,emissiveIntensity:.55,roughness:.6}));_.position.set(.74,2.34,-.42),On.add(_);const x=new wo(16760426,.9,5.5,2);x.position.set(.74,2.2,-.42),On.add(x)}{for(const h of[-1,1]){const d=new O(new Xt(.045,.05,1.5,6),oi);d.position.set(h*1.05,1.7,-.72),tr.add(d)}const l=new O(new wt(2.2,.08,.08),wi);l.position.set(0,2.38,-.72),tr.add(l);for(let h=0;h<4;h+=1){const d=new O(new wt(.04,.2,.04),wi);d.position.set(-.75+h*.5,2.26,-.72),tr.add(d);const p=new O(new wt(.05,.5,.12),oi);p.position.set(-.75+h*.5,1.98,-.72),tr.add(p)}}On.visible=!1,tr.visible=!1,fe.add(On,tr);const c=new O(new wt(2.8,2.2,1.5),new en({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));c.position.y=1.1,fe.add(c)}fe.position.set(qe.x,Bt(qe.x,qe.z),qe.z);fe.rotation.y=Math.atan2(-qe.x,-qe.z);fe.userData.benchRef=!0;Qt.add(fe);wr.push({x:qe.x,z:qe.z,radius:1.32,type:"bench"});const we=new At,Xe={};{const n=new at({color:10170154,roughness:.62,metalness:.18}),t=new at({color:7085338,roughness:.7,metalness:.15}),e=new at({color:8227473,roughness:.4,metalness:.72,side:dn}),i=new O(new rc(1.18,.28,.86,2,.05),n);i.position.y=.3,i.castShadow=!0,i.receiveShadow=!0,we.add(i);const r=new O(new wt(1.04,.08,.72),t);r.position.y=.48,we.add(r),Xe.wheels=[];for(const[d,p]of[[-.45,-.33],[.45,-.33],[-.45,.33],[.45,.33]]){const g=new O(new Xt(.17,.17,.1,10),oi);g.rotation.z=Math.PI/2,g.position.set(d,.16,p),g.castShadow=!0,we.add(g),Xe.wheels.push(g)}const s=new At;we.add(s),Xe.shakeGroup=s;const o=new O(new Xt(.66,.34,.88,4,1,!0),e);o.position.y=1.02,o.rotation.y=Math.PI/4,o.castShadow=!0,s.add(o),Xe.hopper=o;const a=new O(new wt(.98,.09,.98),oi);a.position.y=1.46,a.rotation.y=Math.PI/4,a.castShadow=!0,s.add(a);const c=new O(new wt(.52,.14,.52),new at({color:1120283,roughness:1}));c.position.y=1.4,c.rotation.y=Math.PI/4,s.add(c);const l=new O(new wt(.4,.34,.12),e);l.position.set(0,.64,.46),we.add(l);const h=new O(new Xt(.035,.035,.42,6),wi);h.rotation.z=Math.PI/2,h.position.set(-.7,.72,.05),we.add(h)}we.position.set($e.x,Bt($e.x,$e.z),$e.z);we.rotation.y=Math.atan2(-$e.x,-$e.z);we.userData.grinderRef=!0;Qt.add(we);wr.push({x:$e.x,z:$e.z,radius:.72,type:"grinder"});const hf=new at({color:6450029,roughness:.96,flatShading:!0}),l1=new at({color:1391686,roughness:.22,metalness:.18,transparent:!0,opacity:.92}),ss=new at({color:6965288,roughness:.9}),tm=new at({color:4862752,roughness:.92}),Cn=new At;{const n=new O(new Xt(1.15,1.25,1.35,12,1,!0),hf);n.position.y=.68,n.castShadow=!0,n.receiveShadow=!0,Cn.add(n);const t=new O(new fi(1.19,.11,5,14),hf);t.rotation.x=Math.PI/2,t.position.y=1.35,t.castShadow=!0,Cn.add(t);const e=new O(new yo(1.06,18),l1);e.rotation.x=-Math.PI/2,e.position.y=.72,Cn.add(e);for(const a of[-1,1]){const c=new O(new wt(.13,2.65,.13),ss);c.position.set(a*.95,2.2,0),c.castShadow=!0,Cn.add(c)}const i=new O(new wt(2.1,.13,.13),ss);i.position.y=3.2,i.castShadow=!0,Cn.add(i);const r=new O(new Ie(1.72,1.1,4),tm);r.position.y=3.9,r.rotation.y=Math.PI/4,r.castShadow=!0,Cn.add(r);const s=new O(new Xt(.018,.018,.95,5),ss);s.position.set(0,2.68,0),Cn.add(s);const o=new O(new Xt(.18,.15,.24,8,1,!0),ss);o.position.set(0,2.12,0),o.castShadow=!0,Cn.add(o)}Cn.position.set(Gn.x,Bt(Gn.x,Gn.z),Gn.z);Cn.rotation.y=Math.atan2(-Gn.x,-Gn.z);Qt.add(Cn);wr.push({x:Gn.x,z:Gn.z,radius:1.38,type:"well"});const em=new at({color:1523529,roughness:.18,metalness:.25,transparent:!0,opacity:.92}),qa=new At;{const n=new O(new yo(2.55,24),em);n.rotation.x=-Math.PI/2,n.position.y=.055,qa.add(n);const t=new at({color:4937300,roughness:.98,flatShading:!0});for(let e=0;e<14;e+=1){const i=e/14*Math.PI*2,r=new O(new Sn(.26+Math.random()*.13,0),t);r.position.set(Math.cos(i)*2.65,.12,Math.sin(i)*2.65),r.scale.y=.6,r.rotation.y=Math.random()*Math.PI,r.castShadow=!0,r.receiveShadow=!0,qa.add(r)}}qa.position.set(is.x,Bt(is.x,is.z),is.z);Qt.add(qa);function u1(){const n=document.createElement("canvas");n.width=640,n.height=420;const t=n.getContext("2d");t.fillStyle="#b48450",t.fillRect(0,0,640,420),t.strokeStyle="#6f4c2a",t.lineWidth=14,t.strokeRect(7,7,626,406),t.strokeStyle="rgba(82, 52, 25, 0.35)",t.lineWidth=2;for(let i=0;i<9;i+=1)t.beginPath(),t.moveTo(28+i*14,20),t.lineTo(-20+i*14,400),t.stroke();t.fillStyle="#2b1f16",t.textAlign="center",t.font="700 44px 'Patrick Hand', 'Comic Sans MS', cursive",t.fillText("MISSING KID",320,80),t.fillText("LOCATIONS",320,126);for(let i=0;i<3;i+=1){const r=70+i*172;t.fillStyle="rgba(238, 213, 167, 0.28)",t.fillRect(r,168,156,196),t.strokeStyle="#5a3c22",t.lineWidth=5,t.strokeRect(r,168,156,196),t.fillStyle="rgba(62, 43, 27, 0.42)",t.font="400 24px 'Patrick Hand', 'Comic Sans MS', cursive",t.fillText("empty",r+78,346)}const e=new Ps(n);return e.colorSpace=Ye,e.anisotropy=2,e}const sr=new At;{for(const i of[-1,1]){const r=new O(new wt(.14,2.2,.14),ss);r.position.set(i*.92,1.1,-.08),r.castShadow=!0,sr.add(r)}const n=new O(new wt(2.25,1.48,.12),ss);n.position.y=1.72,n.castShadow=!0,n.receiveShadow=!0,sr.add(n);const t=new O(new yr(2.12,1.39),new en({map:u1()}));t.position.set(0,1.72,.066),sr.add(t);const e=new O(new wt(2.48,.13,.35),tm);e.position.y=2.51,e.rotation.z=.035,e.castShadow=!0,sr.add(e)}sr.position.set(Vn.x,Bt(Vn.x,Vn.z),Vn.z);sr.rotation.y=Math.atan2(-Vn.x,-Vn.z);Qt.add(sr);wr.push({x:Vn.x,z:Vn.z,radius:.92,type:"notice"});const le={stock:{wood:0,iron:0},tier:1,crafted:new Set,signPop:{wood:0,iron:0}},Pa=[];function nm(n=""){Xn.woodSign&&Xn.woodSign.setValue(le.stock.wood,le.tier>=3),Xn.ironSign&&Xn.ironSign.setValue(le.stock.iron,le.tier>=3),n&&(le.signPop[n]=1)}function im(){On.visible=le.tier>=2,tr.visible=le.tier>=3,nm()}const po=[],rm=new at({color:6714492,roughness:.42,metalness:.62}),vu=new at({color:10135985,roughness:.34,metalness:.7});function h1(){for(const n of po)Qt.remove(n.group);po.length=0}function d1(){for(const n of zi)n.broken=!1,n.hits=n.hitsMax,n.regrow=0,n.shake=0,n.group.visible=!0,n.group.scale.setScalar(n.scale),n.group.rotation.z=0}const sm=4,om=3,f1=6,p1=4,am=4,m1=4,fa=2.5,mo=5,mr=20,Mu={1:20,2:220,3:420,4:620,5:820},cm={1:30,2:12,3:5,4:3,5:2},g1={1:10,2:4,3:2,4:1.2,5:.8},fh={1:8,2:12,3:16,4:20,5:26},lm={1:1,2:2,3:2.5,4:3,5:4},um=.36,_1=1.15,x1=120,Sl=[.35,.58,.82,1.06],pc=.34,ir=180,v1=120,Zr=ir+v1,wl=16,Zs=14,hm=30,dm=5,df=15,M1=.42,$a=18,mc=.3,go=8,ff=28,y1=44,Us={wood:"Wood log",sapling:"Sapling",berry:"Berry",iron:"Iron piece",axe:"Old Axe",pickaxe:"Pickaxe",torch:"Torch",ironAxe:"Good Axe",ironSword:"Iron Sword",ironWall:"Iron Wall",logWall:"Log Wall",bearTrap:"Bear Trap"},ph={wood:"Log",sapling:"Sapling",berry:"Berries",iron:"Iron"},S1={wood:1},Co={axe:{cooldown:.58,damage:1,treePower:1,rockPower:0,range:3.3,reach:2.5},pickaxe:{cooldown:.5,damage:1,treePower:0,rockPower:1,range:3,reach:2.5},torch:{cooldown:.6,damage:1,treePower:0,rockPower:0,range:2.4,reach:2.2},ironAxe:{cooldown:.4,damage:2,treePower:2,rockPower:0,range:3.5,reach:2.8},ironSword:{cooldown:.42,damage:3,treePower:0,rockPower:0,range:3.6,reach:2.8}},mh=[{id:"pickaxe",tier:1,name:"Pickaxe",icon:"⛏",cost:{wood:4,iron:1},desc:"Mine iron rocks at the forest edge.",kind:"tool",repeatable:!0},{id:"torch",tier:1,name:"Torch",icon:"🔥",cost:{wood:2,iron:1},desc:"A warm light to carry into the dark.",kind:"tool",repeatable:!0},{id:"bench2",tier:1,name:"Crafting Bench 2",icon:"🛠",cost:{wood:8,iron:6},desc:"Upgrade the bench to unlock tier 2 gear.",kind:"bench",oneTime:!0,benchTier:2},{id:"ironAxe",tier:2,name:"Good Axe",icon:"🪓",cost:{wood:6,iron:3},desc:"Chops faster and hits harder. Replaces the Old Axe.",kind:"tool",oneTime:!0},{id:"goodSack",tier:2,name:"Good Sack",icon:"🎒",cost:{wood:6,iron:5},desc:"Sack capacity grows from 5 to 15.",kind:"sack",oneTime:!0},{id:"logWall",tier:2,name:"Log Wall",icon:"🪵",cost:{wood:12},desc:"A sturdy wooden wall. Craft it, then place it.",kind:"placeable",placeType:"logWall",repeatable:!0},{id:"bearTrap",tier:2,name:"Bear Trap",icon:"⚙",cost:{iron:3},desc:"Damages and stuns a monster that steps on it.",kind:"placeable",placeType:"bearTrap",repeatable:!0,trap:!0},{id:"bench3",tier:2,name:"Crafting Bench 3",icon:"🛠",cost:{wood:15,iron:10},desc:"Upgrade the bench to unlock tier 3 gear.",kind:"bench",oneTime:!0,benchTier:3},{id:"ironSword",tier:3,name:"Iron Sword",icon:"🗡",cost:{wood:5,iron:5},desc:"A strong melee blade for monsters.",kind:"tool",repeatable:!0},{id:"ironWall",tier:3,name:"Iron Wall",icon:"🛡",cost:{wood:8,iron:6},desc:"A sturdy metal wall. Craft it, then place it.",kind:"placeable",placeType:"ironWall",repeatable:!0},{id:"bench4",tier:4,name:"Crafting Bench 4",icon:"?",cost:{},desc:"Coming soon.",kind:"locked"}],gc=new Map(mh.map(n=>[n.id,n]));let os=0,eo=0,pf="";function _c(){return Math.hypot(V.position.x-$t.position.x,V.position.z-$t.position.z)}function Ka(){return Math.hypot(V.position.x-qe.x,V.position.z-qe.z)}function xc(){return Math.hypot(V.position.x-$e.x,V.position.z-$e.z)}function Zi(){return u.fireOut?0:fh[u.fireLevel]||8}function fm(){return fh[u.fireLevel]||8}function w1(n){return n==="axe"||n==="pickaxe"||n==="torch"||n==="ironAxe"||n==="ironSword"}function pm(n){const t=Co[n];return!!t&&t.treePower>0}function gh(n){const t=Co[n];return!!t&&t.rockPower>0}function mf(){if(u.fireInReach=_c()<=sm,u.grinderInReach=u.started&&xc()<=om,u.benchInReach=u.started&&Ka()<=am,u.targetTree=null,u.targetRock=null,!u.started||u.gameOver)return;let n=fa*fa;for(const e of De){if(!e.userData.choppable||e.userData.falling||!e.visible)continue;const i=V.position.x-e.position.x,r=V.position.z-e.position.z,s=i*i+r*r;s<n&&(n=s,u.targetTree=e)}let t=fa*fa;for(const e of zi){if(e.broken)continue;const i=V.position.x-e.x,r=V.position.z-e.z,s=i*i+r*r;s<t&&(t=s,u.targetRock=e)}}function Dt(n){ho.textContent=n,ho.classList.add("visible"),os=1.5}let yu=0;function E1(){Qs.classList.remove("visible"),Qs.offsetWidth,Qs.classList.add("visible"),clearTimeout(yu),yu=setTimeout(()=>{Qs.classList.remove("visible")},9300)}const hi={kind:null,target:null,timer:0},jr=new R;function Ai(){hi.kind=null,hi.target=null,hi.timer=0,ns.classList.remove("visible")}function mm(n,t){const e=n==="tree"?t.userData:t,i=e.hitsMax||(n==="tree"?fo:fu),r=Yt(i-Math.max(0,e.hits),0,i);hi.kind=n,hi.target=t,hi.timer=ES,tS.textContent=`${r}/${i}`,eS.style.width=`${r/i*100}%`,ns.classList.add("visible")}function T1(n){const{kind:t,target:e}=hi;if(!e)return;if(!u.started||u.gameOver||u.falling>0){Ai();return}if(t==="tree"){if(!e.visible||e.userData.falling||!e.userData.choppable){Ai();return}}else if(e.broken){Ai();return}if(hi.timer-=n,hi.timer<=0){Ai();return}if(t==="tree"){const s=e.userData.scale||1;jr.set(e.position.x,e.position.y+2.7*s,e.position.z)}else jr.set(e.x,Bt(e.x,e.z)+1.5*e.scale,e.z);if(jr.project(pe),jr.z>1){ns.classList.remove("visible");return}const i=Yt((jr.x*.5+.5)*window.innerWidth,54,window.innerWidth-54),r=Math.max(112,(-jr.y*.5+.5)*window.innerHeight);ns.style.left=`${i}px`,ns.style.top=`${r}px`,ns.classList.add("visible")}function b1(n){hu.textContent=n,hu.classList.add("visible"),eo=2}function A1(n=1){const t=new At,e=new O(new Sn(.17,0),jp);e.scale.set(1.15,.8,.9),e.castShadow=!0,t.add(e);const i=new O(new Sn(.11,0),xu);i.position.set(.12,.02,.09),i.castShadow=!0,t.add(i);const r=new O(Qp,Jp);return r.scale.set(1.35,.92,.55),r.position.set(-.035,.055,.12),r.rotation.set(.3,.25,.4),t.add(r),t.scale.setScalar(n),t}function C1(){const n=new At;for(let t=0;t<3;t+=1){const e=new O(new wt(.34,.68,.09),rm);e.position.set((t-1)*.35,.35,0),e.castShadow=!0,n.add(e);const i=new O(new wt(.32,.07,.11),vu);i.position.set((t-1)*.35,.58,0),n.add(i)}return n}function gm(n){let t;return n==="wood"?(t=new O(KS,ZS),t.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2),t.castShadow=!0,t.receiveShadow=!0):n==="sapling"?(t=Np(.72),t.rotation.y=Math.random()*Math.PI*2):n==="berry"?(t=cf(1),t.rotation.y=Math.random()*Math.PI*2):n==="iron"?(t=A1(1.2),t.rotation.y=Math.random()*Math.PI*2):n==="pickaxe"?(t=Yp(),t.scale.setScalar(.78),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironAxe"?(t=qp(),t.scale.setScalar(.8),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironSword"?(t=$p(),t.scale.setScalar(.68),t.rotation.set(.05,Math.random()*Math.PI*2,.04)):n==="ironWall"?(t=C1(),t.rotation.y=Math.random()*Math.PI*2):t=cf(1),t}function ki(n,t,e,i={}){const r=gm(n),s=Bt(t,e),a=n==="wood"?.17:n==="berry"?.14:n==="iron"?.13:n==="pickaxe"||n==="ironAxe"||n==="ironSword"?.5:.02,c=n==="sapling"?.72:1,l=i.startY??s+a+.45;r.position.set(t,l,e),Qt.add(r);const h={type:n,mesh:r,x:t,z:e,groundY:s,restY:a,baseScale:c,velocityY:i.velocityY??(n==="wood"?2.2:2.6),landed:!1,pickupDelay:i.pickupDelay??.35,carried:!1,popping:0,popDuration:.24};if(r.traverse(d=>{d.userData.itemRef=h}),yn.push(h),yn.length>80)for(let d=0;d<yn.length;d+=1){const p=yn[d];if(!p.carried&&p.popping<=0){_h(p);break}}return h}function _h(n){const t=yn.indexOf(n);t>=0&&yn.splice(t,1),Gt===n&&(Gt=null),Qt.remove(n.mesh)}function vc(n){!n||n.popping>0||(Gt===n&&(Gt=null),n.carried=!1,n.popping=n.popDuration)}function R1(n,t=0){const e=V.position.x-n.position.x,i=V.position.z-n.position.z,s=Math.atan2(e,i)+(t-1)*.62+(Math.random()-.5)*.32,o=n.userData.scale*.35+.7+Math.random()*.45;ki("wood",n.position.x+Math.sin(s)*o,n.position.z+Math.cos(s)*o,{startY:n.position.y+.9,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}function P1(n){const t=Math.atan2(V.position.x-n.position.x,V.position.z-n.position.z)+(Math.random()-.5)*1.2,e=n.userData.scale*.3+.95;ki("sapling",n.position.x+Math.sin(t)*e,n.position.z+Math.cos(t)*e,{startY:n.position.y+.8,velocityY:2.6,pickupDelay:.45})}function xh(){for(const n of Ao){const t=yn.filter(e=>e.type==="berry"&&!e.carried&&e.popping<=0&&Math.hypot(e.x-n.x,e.z-n.z)<2.1).length;for(let e=t;e<3;e+=1){const i=Math.random()*Math.PI*2,r=.35+Math.random()*.45,s=n.x+Math.cos(i)*r,o=n.z+Math.sin(i)*r;ki("berry",s,o,{startY:Bt(s,o)+.55,velocityY:1.8,pickupDelay:.6})}}}const L1=[{x:$e.x-1.5,z:$e.z-1.2},{x:$e.x-1.1,z:$e.z+1.4},{x:qe.x-2,z:qe.z-.6},{x:qe.x+.4,z:qe.z+1.8}];function _m(){for(const n of L1){const t=n.x,e=n.z;yn.some(r=>r.type==="iron"&&!r.carried&&r.popping<=0&&Math.hypot(r.x-t,r.z-e)<.7)||ki("iron",t,e,{startY:Bt(t,e)+.45,velocityY:1.4,pickupDelay:.25})}}function I1(){for(const n of yn)n.carried=!1,n.popping=0,Qt.remove(n.mesh);yn.length=0,Gt=null,xh(),_m(),ee()}function Za(){return u.backpack.wood+u.backpack.sapling+u.backpack.berry+u.backpack.iron}function pa(n){return u.backpack[n]+((Gt==null?void 0:Gt.type)===n?1:0)}function Mc(){return u.equippedTool==="backpack"}function vh(n){if(!n||n.carried||n.popping>0)return!1;if(Gt)return Dt("Hands full"),!1;n.carried=!0,n.landed=!0,n.pickupDelay=0,Gt=n;const t=u.cameraYaw,e=Math.sin(t),i=Math.cos(t),r=wu(e,i,_u),s=V.position.x+e*r,o=V.position.z+i*r;return n.mesh.position.set(s,Math.max(V.position.y+dh,Bt(s,o)+.46),o),n.lastCarryPlayerX=V.position.x,n.lastCarryPlayerZ=V.position.z,ee(),Fc(),Dt(`Picked up ${ph[n.type]||Us[n.type]}`),!0}function xm(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.dropCooldown>0||!Gt)return;const n=Gt;Gt=null,n.carried=!1;const t=V.position.x,e=V.position.z;n.x=t,n.z=e,n.groundY=Bt(t,e),n.velocityY=.9,n.landed=!1,n.pickupDelay=.3,n.mesh.position.set(t,V.position.y+1.05,e),u.dropCooldown=.3,ee(),Dt("Released item")}function D1(){return Math.max(0,u.backpackCapacity-Za())}function vm(n){const t=u.sackOrder.lastIndexOf(n);return t<0?!1:(u.sackOrder.splice(t,1),!0)}function El(){if(!u.sackOrder.length)return null;const n=u.sackOrder.pop();return u.backpack[n]>0&&(u.backpack[n]-=1),Hn.classList.remove("pop"),Hn.offsetWidth,Hn.classList.add("pop"),Li.classList.remove("pop"),Li.offsetWidth,Li.classList.add("pop"),n}function U1(){if(!u.started||u.gameOver||u.falling||u.paused||!Mc()||!Gt)return;if(D1()<=0){Dt("Sack full");return}const n=Gt;Gt=null,u.backpack[n.type]=(u.backpack[n.type]||0)+1,u.sackOrder.push(n.type),vc(n),Li.classList.remove("pop"),Li.offsetWidth,Li.classList.add("pop"),Hn.classList.remove("pop"),Hn.offsetWidth,Hn.classList.add("pop"),Fc(),Dt(`Stored ${ph[n.type]||Us[n.type]}`),ee()}function N1(){if(!u.started||u.gameOver||u.falling||u.paused||!Mc()||!u.sackOrder.length)return;if(Gt){Dt("Hands full");return}const n=u.sackOrder[u.sackOrder.length-1];if(n==="wood"&&_c()<=f1){El(),ee(),xf(n,new R($t.position.x,$t.position.y+.8,$t.position.z),()=>{const i=cm[u.fireLevel]||2;ym(i),Dt(`Log added (+${i})`)});return}if(xc()<=p1&&(n==="wood"||n==="iron")){El(),ee(),xf(n,new R(we.position.x,we.position.y+1.45,we.position.z),()=>{le.stock[n]+=1,Tm(n),t0(),Xe.shake=.5,Sh(n),ee(),Dt(`+1 ${n} to the bench`)});return}const t=El(),e=ki(t,V.position.x,V.position.z,{startY:V.position.y+1.05,velocityY:.35,pickupDelay:0});e.landed=!0,vh(e),ee()}function Mm(){if(!u.started||u.gameOver||u.falling||u.paused||!Gt||Gt.type!=="berry")return;const n=Gt;Gt=null,vc(n),u.hunger=Yt(u.hunger+$a,0,100),Fc(),Dt(`Ate berries (+${$a} hunger)`),ee()}function ym(n){if(!u.started||u.gameOver)return;const t=u.fireOut;if(u.fireOut&&(u.fireOut=!1,u.fireDarken=0,u.fireFlare=.8,Eo.classList.remove("visible")),u.fireEverLit=!0,hw(),t&&GE(),u.fireLevel>=mo){u.fireProgress=100,ee();return}u.fireFlare=Math.max(u.fireFlare,.55);const e=u.fireProgress+n-100;u.fireProgress=Yt(u.fireProgress+n,0,100),u.fireProgress>=70&&Rh(u.fireLevel+1),e>=0?F1(Math.max(0,e)):ee()}function F1(n=0){if(u.fireLevel>=mo){u.fireProgress=100,ee();return}u.fireLevel+=1;const t=u.fireLevel>=mo?100:Math.max(2,n);u.fireProgress=Yt(t,0,100),u.fireOut=!1,u.fireEverLit=!0,u.fireDarken=0,u.fireFlare=1,u.fireBarMessageTimer=9,Ph(u.fireLevel),Fw(),kE(),VE(),E1(),Rh(u.fireLevel),vw(u.fireLevel),ee()}function O1(){if(!Gt||Gt.type!=="wood"){Dt("Only logs burn");return}const n=cm[u.fireLevel]||2;vc(Gt),ym(n),Dt(`Log added (+${n})`)}function B1(n){const t=n.userData,e=n.position.x-V.position.x,i=n.position.z-V.position.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r;t.choppable=!1,t.falling=!0,t.fallProgress=0,t.lootDropped=!1,t.fallAxis=new R(o,0,-s).normalize(),t.hits=t.hitsMax,t.shake=0}function Sm(n,t=1){if(!n||u.swingCooldown>0)return;const e=n.userData;u.swingCooldown=Ap,e.shake=um,u.chopTimer=.3,V.rotation.y=Math.atan2(n.position.x-V.position.x,n.position.z-V.position.z),e.hits-=t,qE(),mm("tree",n),e.hits<=0&&(B1(n),Ai())}function wm(n,t=1){if(!n||n.broken||u.swingCooldown>0)return;if(!gh(u.equippedTool)){Dt("Use the Pickaxe");return}if(u.swingCooldown=Ap,V.rotation.y=Math.atan2(n.x-V.position.x,n.z-V.position.z),u.chopTimer=.3,n.hits-=t,n.shake=.3,e0(),mm("rock",n),n.hits>0)return;n.broken=!0,n.regrow=ff+Math.random()*(y1-ff),n.group.visible=!1,Ai(),KE();const e=2+Math.floor(Math.random()*2);for(let i=0;i<e;i+=1){const r=Math.random()*Math.PI*2,s=.55+Math.random()*.55,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s;ki("iron",o,a,{startY:Bt(o,a)+.5,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}ee(),Dt(`Mined ${e} iron`)}function z1(n){for(const t of zi){if(t.broken){t.regrow=Math.max(0,t.regrow-n),t.regrow<=0&&(t.broken=!1,t.hits=t.hitsMax,t.group.visible=!0,t.group.scale.setScalar(t.scale*.6),Dt("An iron rock has regrown"));continue}if(t.shake>0){t.shake=Math.max(0,t.shake-n);const r=t.shake/.3,s=performance.now()*.001;t.group.rotation.z=Math.sin(s*48)*.04*r}else t.group.rotation.z=0;const e=.82+t.hits/t.hitsMax*.18,i=t.scale*e;t.group.scale.x<i?t.group.scale.setScalar(Math.min(i,t.group.scale.x+n*1.6)):t.group.scale.x>i&&t.group.scale.setScalar(Math.max(i,t.group.scale.x-n*1.6))}}let Su=new Map,gf=!1;function Mh(n){return n.kind==="locked"||n.tier>le.tier}function yh(n){return!!(n.oneTime&&le.crafted.has(n.id)||n.trap&&ws.length>=go)}function k1(n){return le.stock.wood>=(n.cost.wood||0)&&le.stock.iron>=(n.cost.iron||0)}function H1(n){const t=[];return n.cost.wood&&t.push(`${n.cost.wood}W`),n.cost.iron&&t.push(`${n.cost.iron}I`),t.join(" · ")||"FREE"}function Em(n=""){if(tf.textContent=String(le.stock.wood),ef.textContent=String(le.stock.iron),n){const t=n==="wood"?tf:ef;t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop")}}function G1(){if(gf)return;gf=!0,Ml.innerHTML="",Su=new Map;let n=1;for(const t of mh){if(t.tier!==n){n=t.tier;const a=document.createElement("div");a.className="craft-tier-label",a.textContent=`NEEDS CRAFTING BENCH ${t.tier}`,Ml.appendChild(a)}const e=document.createElement("button");e.type="button",e.className="craft-card",e.dataset.recipe=t.id;const i=document.createElement("span");i.className="craft-card-icon",i.textContent=t.icon;const r=document.createElement("span");r.className="craft-card-name",r.textContent=t.name;const s=document.createElement("span");s.className="craft-card-cost",s.textContent=H1(t);const o=document.createElement("span");o.className="craft-card-badge",e.append(i,r,s,o),e.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),V1(t.id)}),Ml.appendChild(e),Su.set(t.id,e)}}function yc(){for(const[n,t]of Su){const e=gc.get(n);if(!e)continue;const i=Mh(e),r=yh(e);t.classList.toggle("locked",i),t.classList.toggle("soldout",r),t.classList.toggle("selected",u.craftSelected===n);const s=t.querySelector(".craft-card-badge");let o="";r?o="SOLD OUT":i?o="🔒":e.trap?o=`x${go}`:e.repeatable&&(o="∞"),s.textContent=o,s.style.display=o?"":"none"}}function V1(n){gc.get(n)&&(u.craftSelected=n,yc(),Sc(),Fs())}function Sc(){pS.textContent=`BENCH ${le.tier}`,Em();let n=gc.get(u.craftSelected);n||(n=mh[0],u.craftSelected=n.id);const t=Mh(n),e=yh(n);mS.textContent=n.icon,gS.textContent=n.name,_S.textContent=t?`Requires Crafting Bench ${n.tier}.`:n.desc,yl.innerHTML="";const i=["wood","iron"];let r=!1;for(const o of i){const a=n.cost[o]||0;if(!a)continue;r=!0;const c=document.createElement("span");c.className="cost-chip",c.textContent=`${a} ${o}`,le.stock[o]<a&&c.classList.add("missing"),yl.appendChild(c)}if(!r){const o=document.createElement("span");o.className="cost-chip",o.textContent=t?"NOT AVAILABLE":"NO COST",yl.appendChild(o)}let s="";e?s="SOLD OUT":t?s=n.tier===4?"COMING SOON":`LOCKED · NEEDS BENCH ${n.tier}`:n.trap?s=`MAX ${go} PLACED`:n.repeatable&&(s="∞ REPEATABLE"),xS.textContent=s,du.disabled=t||e,du.textContent=e?"SOLD OUT":"CRAFT"}function Sh(n=""){nm(n),u.craftOpen&&(Em(n),yc(),Sc(),Ss())}function W1(){!u.started||u.gameOver||u.falling||u.paused||(u.craftOpen=!0,pi(!1),Tr(!1),Lc(),xr.clear(),u.look.active=!1,u.pinchDistance=0,G1(),yc(),Sc(),Tp.classList.remove("hidden"),Ns(),Fs())}function Hi(){u.craftOpen=!1,Tp.classList.add("hidden"),Ns()}function Ss(){iS.textContent=u.ownedTools.ironAxe?"Good Axe":"Old Axe",rS.textContent=u.goodSack?"Good Sack":"Old Sack",sS.textContent="Pickaxe",oS.textContent="Torch",aS.textContent="Iron Sword"}function X1(n){n.kind==="tool"?(u.ownedTools[n.id]=!0,n.id==="ironAxe"&&(u.goodAxe=!0),Ss(),Ns(),Dt(`${n.name} added to the hotbar`)):n.kind==="sack"?(u.goodSack=!0,u.backpackCapacity=df,Ss(),ee(),Dt(`Good Sack: capacity ${df}`)):n.kind==="bench"?(le.tier=n.benchTier,im(),Dt(`Crafting Bench ${le.tier} unlocked`)):n.kind==="placeable"&&(u.carriedPlaceable=n.placeType,wc(),Dt(`${n.name} ready — tap Place`))}function Y1(){if(!u.started||u.gameOver||u.falling)return;const n=gc.get(u.craftSelected);if(n){if(Mh(n)){Dt(`Needs Crafting Bench ${n.tier}`);return}if(yh(n)){Dt(n.trap?"All bear traps are placed":"Sold out");return}if(!k1(n)){const t=[];le.stock.wood<(n.cost.wood||0)&&t.push("wood"),le.stock.iron<(n.cost.iron||0)&&t.push("iron"),Dt(`Not enough ${t.join(" or ")} in the bench`),zE();return}le.stock.wood-=n.cost.wood||0,le.stock.iron-=n.cost.iron||0,n.oneTime&&le.crafted.add(n.id),X1(n),BE(),Sh(),yc(),Sc(),ee()}}function wc(){Wm()}function q1(n,t,e,i){const r=new At;if(n==="logWall"){const s=new at({color:8014885,roughness:.9}),o=new at({color:5189398,roughness:.95});for(let a=0;a<3;a+=1){const c=new O(new Xt(.15,.16,1.8,7),s);c.rotation.z=Math.PI/2,c.position.set(0,.3+a*.32,0),c.castShadow=!0,r.add(c)}for(const a of[-1,1]){const c=new O(new Xt(.1,.12,1.15,6),o);c.position.set(a*.82,.58,.12),c.castShadow=!0,r.add(c)}}else{for(let s=0;s<3;s+=1){const o=new O(new wt(.52,1.02,.16),rm);o.position.set((s-1)*.54,.54,0),o.castShadow=!0,o.receiveShadow=!0,r.add(o);const a=new O(new wt(.48,.1,.19),vu);a.position.set((s-1)*.54,.88,0),a.castShadow=!0,r.add(a)}for(const s of[-1,1]){const o=new O(new wt(.14,1.2,.24),vu);o.position.set(s*.88,.6,0),o.castShadow=!0,r.add(o)}}r.position.set(t,Bt(t,e),e),r.rotation.y=i,Qt.add(r),po.push({group:r,x:t,z:e,rotation:i,width:1.9,depth:.34,kind:n})}const ws=[],$1=new at({color:8161165,roughness:.42,metalness:.7}),_f=new at({color:4147277,roughness:.5,metalness:.62});function K1(n,t,e){const i=new At,r=new O(new fi(.42,.045,6,14),_f);r.rotation.x=Math.PI/2,r.position.y=.06,i.add(r);const s=new O(new Xt(.3,.34,.07,10),_f);s.position.y=.05,i.add(s);const o=new At;o.position.y=.08;for(let a=0;a<6;a+=1){const c=a/6*Math.PI*2,l=new O(new Ie(.045,.2,4),$1);l.position.set(Math.cos(c)*.36,.09,Math.sin(c)*.36),l.rotation.z=Math.cos(c)*.5,l.rotation.x=Math.sin(c)*.5,o.add(l)}i.add(o),i.position.set(n,Bt(n,t),t),i.rotation.y=e,Qt.add(i),ws.push({group:i,jaws:o,x:n,z:t,rotation:e,sprung:!1,anim:0})}function Z1(){for(const n of ws)Qt.remove(n.group);ws.length=0}function j1(n){for(const t of ws){if(t.sprung){t.anim=Math.min(1,t.anim+n*5);const e=t.anim;t.jaws.scale.y=1+e*.8,t.jaws.position.y=.08+e*.1;continue}for(const e of qn){if(!e.visible||e.userData.fading||e.userData.dead||Math.hypot(e.position.x-t.x,e.position.z-t.z)>.82)continue;t.sprung=!0,t.anim=0;const i=e.userData;i.health-=2,i.hitTimer=.3,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.2,i.stunTimer=1.6,i.health<=0&&(i.health=0,i.dead=!0,Ih(e,4)),n0(),Dt("Bear trap snapped!");break}}}function J1(){if(!u.started||u.gameOver||u.falling||u.paused)return;const n=u.carriedPlaceable;if(!n)return;const t=u.cameraYaw,e=V.position.x+Math.sin(t)*2.1,i=V.position.z+Math.cos(t)*2.1,r=t;if(n==="bearTrap"){if(ws.length>=go){Dt(`Only ${go} traps can be placed`);return}K1(e,i,r),Dt("Bear trap placed")}else q1(n,e,i,r),Dt(`${Us[n]||"Wall"} placed`);u.carriedPlaceable=null,wc(),i0(),ee()}function Tm(n){const t=n==="wood"?new at({color:9132587,roughness:.9}):new at({color:10135469,roughness:.4,metalness:.6}),e=new O(n==="wood"?new Xt(.09,.1,.32,6):new wt(.2,.2,.2),t);e.position.set(we.position.x,we.position.y+2,we.position.z),Qt.add(e),Pa.push({mesh:e,t:0})}function Q1(){if(!Gt)return;const n=Gt.type;if(n!=="wood"&&n!=="iron"){Dt("Can't grind this");return}vc(Gt),le.stock[n]+=1,Tm(n),t0(),Xe.shake=.5,Sh(n),ee(),Dt(`+1 ${n} to the bench (${le.stock[n]})`)}function tw(n){const t=performance.now()*.001;Xe.shake=Math.max(0,(Xe.shake||0)-n);const e=Xe.shake>0?Math.sin(t*58)*.035*(Xe.shake/.5):0;if(Xe.shakeGroup&&(Xe.shakeGroup.rotation.z=e,Xe.shakeGroup.position.y=Math.abs(e)*.2),Xe.wheels&&Xe.shake>0)for(const i of Xe.wheels)i.rotation.x+=n*14;for(let i=Pa.length-1;i>=0;i-=1){const r=Pa[i];r.t+=n;const s=r.t/.4;r.mesh.position.y=we.position.y+2-s*.65,r.mesh.rotation.x+=n*7,r.mesh.scale.setScalar(Math.max(.05,1-s*.85)),s>=1&&(Qt.remove(r.mesh),Pa.splice(i,1))}for(const i of["wood","iron"]){const r=i==="wood"?Xn.woodSign:Xn.ironSign;!r||!r.mesh||(r.pop=Math.max(0,(r.pop||0)-n*3.2),r.mesh.scale.setScalar(1+r.pop*.35))}}const La=[];function xf(n,t,e){const i=gm(n),r=new R(V.position.x,V.position.y+1.1,V.position.z);i.position.copy(r),i.scale.setScalar(.9),Qt.add(i),La.push({mesh:i,start:r,target:t.clone(),t:0,duration:.45,onArrive:e}),Fc()}function ew(n){for(let t=La.length-1;t>=0;t-=1){const e=La[t];e.t+=n;const i=Yt(e.t/e.duration,0,1),r=i*i*(3-2*i);e.mesh.position.lerpVectors(e.start,e.target,r),e.mesh.position.y+=Math.sin(i*Math.PI)*.75,e.mesh.rotation.y+=n*8,e.mesh.scale.setScalar(.9-i*.5),i>=1&&(Qt.remove(e.mesh),La.splice(t,1),e.onArrive&&e.onArrive())}}function wu(n,t,e){const i=V.position.x,r=V.position.z;let s=e;for(const l of De){if(!l.visible||l.userData.falling)continue;const h=l.position.x-i,d=l.position.z-r,p=h*n+d*t;if(p<=0||p>e+2.2)continue;const g=h*h+d*d-p*p,_=l.userData.scale*.3+$S;if(g>=_*_)continue;const x=Math.sqrt(_*_-g);s=Math.min(s,p-x)}const o=V.position.y+dh,a=Math.min(e,Math.max(rs,s));let c=rs;for(let l=a;l>=rs;l-=.08){const h=i+n*l,d=r+t*l;if(Bt(h,d)+.46<=o){c=l;break}}return Yt(Math.min(e,s,c),rs,e)}function vf(n){const t=performance.now();for(let e=yn.length-1;e>=0;e-=1){const i=yn[e];if(i.popping>0){i.popping=Math.max(0,i.popping-n);const r=1-i.popping/i.popDuration;i.mesh.scale.setScalar(i.baseScale*(1+r*1.1)),i.mesh.position.y+=n*1.35,i.popping<=0&&_h(i);continue}if(i.carried){if(Gt!==i){i.carried=!1;continue}const r=u.cameraYaw,s=Math.sin(r),o=Math.cos(r),a=wu(s,o,_u);i.lastCarryPlayerX!==void 0&&(i.mesh.position.x+=V.position.x-i.lastCarryPlayerX,i.mesh.position.z+=V.position.z-i.lastCarryPlayerZ),i.lastCarryPlayerX=V.position.x,i.lastCarryPlayerZ=V.position.z;const c=Math.sin(t*.003)*.05,l=V.position.x+s*a,h=V.position.z+o*a,d=Math.max(V.position.y+dh+c,Bt(l,h)+.46),p=1-Math.exp(-10*n);let g=i.mesh.position.x-V.position.x,_=i.mesh.position.z-V.position.z;g+=(s*a-g)*p,_+=(o*a-_)*p;const x=Math.hypot(g,_);if(x>1e-4){const f=a/x;g*=f,_*=f}i.mesh.position.x=V.position.x+g,i.mesh.position.z=V.position.z+_,i.mesh.position.y+=(d-i.mesh.position.y)*p;let m=Math.hypot(g,_);if(m>.001){const f=wu(g/m,_/m,_u);if(m>f){const y=f/m;i.mesh.position.x=V.position.x+g*y,i.mesh.position.z=V.position.z+_*y,g*=y,_*=y,m=f}}if(m<rs){const f=rs/Math.max(m,.001);i.mesh.position.x=V.position.x+g*f,i.mesh.position.z=V.position.z+_*f}i.mesh.position.y=Math.max(i.mesh.position.y,Bt(i.mesh.position.x,i.mesh.position.z)+.4),i.mesh.rotation.y+=n*.8;continue}if(i.pickupDelay=Math.max(0,i.pickupDelay-n),i.landed)i.mesh.position.y=i.groundY+i.restY+Math.abs(Math.sin(t*.0028+i.mesh.id))*(i.type==="berry"?.025:.018),i.type==="sapling"&&(i.mesh.rotation.y+=n*.4),i.type==="berry"&&(i.mesh.rotation.y+=n*.35);else{i.velocityY-=13*n,i.mesh.position.y+=i.velocityY*n,i.type==="wood"&&(i.mesh.rotation.y+=n*3.2),i.type==="sapling"&&(i.mesh.rotation.y+=n*2.4);const r=i.groundY+i.restY;i.mesh.position.y<=r&&(i.mesh.position.y=r,i.landed=!0)}}}function bm(n){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.falling=!1,t.fallProgress=0,t.lootDropped=!1,t.hits=fo,t.hitsMax=fo,t.shake=0,t.highlight=0,n.visible=!0,n.quaternion.identity(),t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Et(16757082),t.trunk.material.emissiveIntensity=0}function Am(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.plantCooldown>0)return;if(!Gt||Gt.type!=="sapling"){Dt("Carry a sapling to plant it");return}const n=new R(Math.sin(V.rotation.y),0,Math.cos(V.rotation.y)),t=V.position.x+n.x*1.75,e=V.position.z+n.z*1.75;if(Math.hypot(t-$t.position.x,e-$t.position.z)<1.6){Dt("Too close to the campfire");return}_h(Gt),u.plantCooldown=.45;const r=Np(.35);r.position.set(t,Bt(t,e),e),r.rotation.y=Math.random()*Math.PI*2,Qt.add(r);const s={mesh:r,x:t,z:e,growth:0,sway:Math.random()*Math.PI*2};r.userData.saplingRef=s,ms.push(s),ee(),Dt("Planted a sapling")}function nw(n){for(let t=ms.length-1;t>=0;t-=1){const e=ms[t];e.growth+=n;const i=Yt(e.growth/x1,0,1),r=Math.min(Sl.length-1,Math.floor(i*Sl.length)),s=Sl[r],o=1-Math.exp(-6*n),a=e.mesh.scale.x+(s-e.mesh.scale.x)*o;if(e.mesh.scale.setScalar(a),e.mesh.rotation.z=Math.sin(performance.now()*.0016+e.sway)*.035,i>=1){Qt.remove(e.mesh),ms.splice(t,1);const c=Dp(e.x,e.z,.9+Math.random()*.35);c.userData.planted=!0,bm(c)}}}function Mf(n){const t=performance.now()*.001,e=1-Math.exp(-10*n);for(const i of De){if(!i.visible)continue;const r=i.userData;if(r.falling){r.fallProgress=Math.min(1,r.fallProgress+n/_1);const a=r.fallProgress*r.fallProgress*Math.PI*.5;if(i.quaternion.setFromAxisAngle(r.fallAxis,a),r.fallProgress>=1&&!r.lootDropped){r.lootDropped=!0,$E();for(let c=0;c<3;c+=1)R1(i,c);P1(i)}r.fallProgress>=1&&(i.visible=!1);continue}if(!r.choppable)continue;const s=i===u.targetTree?1:0;r.highlight+=(s-r.highlight)*e;const o=r.trunk.material;if(o.emissiveIntensity=r.highlight*(.45+Math.sin(t*7)*.16),r.shake>0){r.shake=Math.max(0,r.shake-n);const a=r.shake/um;i.rotation.z=Math.sin(t*55)*.055*a,i.rotation.x=Math.cos(t*43)*.03*a}else(i.rotation.z!==0||i.rotation.x!==0)&&(i.rotation.z=0,i.rotation.x=0)}}const qn=[];function iw(){const n=new At,t=new at({color:1053981,roughness:.96,metalness:.04,flatShading:!0}),e=new en({color:16742963}),i=new At;n.add(i);const r=new O(new Fi(.48,0),t);r.position.y=1.12,r.scale.set(1.05,1.2,.72),r.castShadow=!0,i.add(r);const s=new O(new Ie(.32,.6,5),t);s.position.y=.68,s.rotation.y=Math.PI/5,s.castShadow=!0,i.add(s);const o=new O(new Sn(.3,0),t);o.position.y=1.82,o.scale.set(1,1.12,.9),o.castShadow=!0,i.add(o);const a=new Ie(.055,.28,4),c=new O(a,t);c.position.set(-.17,2.05,0),c.rotation.z=.32,c.castShadow=!0,i.add(c);const l=new O(a,t);l.position.set(.17,2.05,0),l.rotation.z=-.32,l.castShadow=!0,i.add(l);const h=new Nn(.055,6,5),d=new O(h,e);d.position.set(-.11,1.86,.255),i.add(d);const p=new O(h,e);p.position.set(.11,1.86,.255),i.add(p);const g=[];for(const x of[-1,1]){const m=new At;m.position.set(x*.5,1.48,0);const f=new O(new Xt(.075,.11,.78,5),t);f.position.y=-.38,f.castShadow=!0,m.add(f);const y=new O(new Ie(.09,.24,4),t);y.position.y=-.82,y.rotation.x=Math.PI,y.castShadow=!0,m.add(y),i.add(m),g.push(m)}const _=[];for(const x of[-1,1]){const m=new At;m.position.set(x*.18,.72,0);const f=new O(new Xt(.09,.12,.7,5),t);f.position.y=-.35,f.castShadow=!0,m.add(f);const y=new O(new wt(.17,.1,.27),t);y.position.set(0,-.73,.07),y.castShadow=!0,m.add(y),n.add(m),_.push(m)}return n.position.set(0,-40,0),n.visible=!1,n.userData={bodyMat:t,eyeMat:e,bodyGroup:i,arms:g,legs:_,speed:1.2,damage:7,health:2,maxHealth:2,hitTimer:0,attackCooldown:0,phase:Math.random()*Math.PI*2,knockback:new R,fading:!1,fade:1,targetCamp:!1,circleDir:Math.random()<.5?1:-1},Ge.add(n),n.userData.enemyRef=n,qn.push(n),n}for(let n=0;n<hm;n+=1)iw();function Cm(n){const t=n.userData;t.fading=!1,t.fade=1,t.hitTimer=0,t.attackCooldown=.6+Math.random()*.6,t.knockback.set(0,0,0),t.bodyMat.transparent=!1,t.bodyMat.opacity=1,t.bodyMat.emissive.setHex(0),t.bodyMat.emissiveIntensity=1,t.eyeMat.transparent=!1,t.eyeMat.opacity=1,n.scale.setScalar(1),n.visible=!0}const vn=new O(new Ie(.36,1.5,7),new en({color:16743202,transparent:!0,opacity:.58,blending:Ui,depthWrite:!1}));vn.position.set(0,1.15,0);$t.add(vn);const Yn=new O(new Ie(.2,1.05,6),new en({color:16769674,transparent:!0,opacity:.8,blending:Ui,depthWrite:!1}));Yn.position.set(0,.92,0);$t.add(Yn);const gr=54,cr=new Float32Array(gr*3),or=new Float32Array(gr*3),Eu=new Float32Array(gr),yf=new Float32Array(gr),Ro=new Oe,wh=new tn(cr,3);Ro.setAttribute("position",wh);function Eh(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(32/2,32/2,0,32/2,32/2,32/2);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 224, 160, 0.95)"),i.addColorStop(.7,"rgba(255, 168, 66, 0.45)"),i.addColorStop(1,"rgba(255, 140, 40, 0)"),e.fillStyle=i,e.fillRect(0,0,32,32);const r=new Ps(t);return r.colorSpace=Ye,r}const Tu=new nc({color:16761707,size:.065,map:Eh(),transparent:!0,opacity:.9,depthWrite:!1,blending:Ui,sizeAttenuation:!0}),Ec=new Xu(Ro,Tu);Ec.frustumCulled=!1;$t.add(Ec);function Rm(n){const t=n*3;cr[t]=(Math.random()-.5)*.38,cr[t+1]=.9+Math.random()*.3,cr[t+2]=(Math.random()-.5)*.38,or[t]=(Math.random()-.5)*.45,or[t+1]=.75+Math.random()*1.25,or[t+2]=(Math.random()-.5)*.45,yf[n]=.7+Math.random()*.9,Eu[n]=yf[n]}for(let n=0;n<gr;n+=1)Rm(n);wh.needsUpdate=!0;function rw(n,t,e=1){for(let r=0;r<gr;r+=1){Eu[r]-=n,Eu[r]<=0&&Rm(r);const s=r*3;cr[s]+=or[s]*n,cr[s+1]+=or[s+1]*n,cr[s+2]+=or[s+2]*n,or[s+1]-=n*.55}wh.needsUpdate=!0;const i=Yt(.16+t*.42+e*.075,0,1);Ro.setDrawRange(0,Math.max(6,Math.floor(gr*i)))}const Ei=[],sw=new en({color:10267042,transparent:!0,opacity:.08});for(let n=0;n<4;n+=1){const t=new O(new Nn(.11+n*.015,6,6),sw.clone());t.position.y=1.55+n*.42,t.userData.tapIgnore=!0,$t.add(t),Ei.push(t)}const Es=document.createElement("canvas");Es.width=1024;Es.height=256;const ow=Es.getContext("2d"),Tc=new Ps(Es);Tc.colorSpace=Ye;Tc.anisotropy=2;const aw=new fp({map:Tc,transparent:!0,depthWrite:!1,depthTest:!0}),Ts=new Uy(aw);Ts.scale.set(4.5,1.12,1);Ts.visible=!1;Ts.renderOrder=5;$t.add(Ts);let Ii=!0,Pm=-1,Lm=-1,Im=!1;function cw(n){const t=[{v:0,c:[222,58,48]},{v:34,c:[229,62,45]},{v:35,c:[244,128,40]},{v:52,c:[247,158,44]},{v:53,c:[250,206,53]},{v:62,c:[248,222,57]},{v:63,c:[208,230,62]},{v:74,c:[188,234,66]},{v:75,c:[160,236,72]},{v:99,c:[134,238,90]},{v:100,c:[76,255,126]}],e=Yt(n,0,100);for(let i=1;i<t.length;i+=1)if(e<=t[i].v){const r=t[i-1],s=t[i],o=(e-r.v)/Math.max(1e-4,s.v-r.v);return`rgb(${Math.round(r.c[0]+(s.c[0]-r.c[0])*o)}, ${Math.round(r.c[1]+(s.c[1]-r.c[1])*o)}, ${Math.round(r.c[2]+(s.c[2]-r.c[2])*o)})`}return"rgb(76, 255, 126)"}function Sf(n,t,e,i,r,s){const o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(t+o,e),n.lineTo(t+i-o,e),n.quadraticCurveTo(t+i,e,t+i,e+o),n.lineTo(t+i,e+r-o),n.quadraticCurveTo(t+i,e+r,t+i-o,e+r),n.lineTo(t+o,e+r),n.quadraticCurveTo(t,e+r,t,e+r-o),n.lineTo(t,e+o),n.quadraticCurveTo(t,e,t+o,e),n.closePath()}function lw(){const n=ow,t=u.fireBarMessageTimer>0,e=u.fireLevel,i=Yt(u.fireProgress,0,100),r=e>=mo&&i>=99.95,s=t?100:i,o=t?`FIRE LEVEL ${e}. MAP EXPANDED`:r?`level ${e} progress: MAX`:`level ${e} progress: ${Math.round(i)}/100`;n.clearRect(0,0,Es.width,Es.height),n.textAlign="center",n.textBaseline="middle",n.font=`${t?52:55}px 'Patrick Hand', 'Comic Sans MS', cursive`,n.lineJoin="round",n.strokeStyle="#050505",n.lineWidth=10,n.strokeText(o,512,108),n.fillStyle="#ffffff",n.fillText(o,512,108);const a=26,c=164,l=972,h=58;if(Sf(n,a,c,l,h,12),n.fillStyle="#050807",n.fill(),n.strokeStyle="rgba(242, 255, 242, 0.62)",n.lineWidth=3,n.stroke(),s>0){const d=a+7,p=c+7,g=l-14,_=h-14,x=g*(s/100),m=t||s>=100?"rgb(76, 255, 126)":cw(s),f=n.createLinearGradient(d,0,d+Math.max(1,x),0);f.addColorStop(0,m),f.addColorStop(1,t||s>=100?"#c4ffcf":m),n.save(),(t||s>=100)&&(n.shadowColor="rgba(112, 255, 150, 0.9)",n.shadowBlur=16),Sf(n,d,p,Math.max(4,x),_,7),n.fillStyle=f,n.fill(),n.restore()}Tc.needsUpdate=!0,Ii=!1,Pm=Math.round(i),Lm=e,Im=t}function uw(n){u.fireBarMessageTimer>0&&(u.fireBarMessageTimer=Math.max(0,u.fireBarMessageTimer-n),u.fireBarMessageTimer<=0&&(Ii=!0));const t=u.started&&!u.gameOver&&!u.fireOut;if(Ts.visible=t,!t)return;const e=lm[u.fireLevel]||1;Ts.position.set(0,Math.min(2.55+e,6.05),0),u.fireBarMessageTimer<=0&&Pm!==Math.round(u.fireProgress)&&(Ii=!0),(Ii||Lm!==u.fireLevel||Im!==u.fireBarMessageTimer>0)&&lw()}const bs=46,lr=new Float32Array(bs*3),ar=new Float32Array(bs*3),Ia=new Float32Array(bs),Dm=new Oe,Th=new tn(lr,3);Dm.setAttribute("position",Th);const Um=new nc({color:14221155,size:.11,map:Eh(),transparent:!0,opacity:.95,depthWrite:!1,blending:Ui,sizeAttenuation:!0}),As=new Xu(Dm,Um);As.visible=!1;As.frustumCulled=!1;$t.add(As);function hw(){for(let n=0;n<bs;n+=1){const t=n*3,e=Math.random()*Math.PI*2,i=Math.random()*.55;lr[t]=Math.cos(e)*i,lr[t+1]=.55+Math.random()*.45,lr[t+2]=Math.sin(e)*i;const r=1.1+Math.random()*2.2;ar[t]=Math.cos(e)*r*.7,ar[t+1]=1.2+Math.random()*2.4,ar[t+2]=Math.sin(e)*r*.7,Ia[n]=.45+Math.random()*.55}As.visible=!0,Th.needsUpdate=!0}function dw(n){if(!As.visible)return;let t=0;for(let e=0;e<bs;e+=1){if(Ia[e]<=0||(Ia[e]-=n,Ia[e]<=0))continue;t+=1;const i=e*3;lr[i]+=ar[i]*n,lr[i+1]+=ar[i+1]*n,lr[i+2]+=ar[i+2]*n,ar[i+1]-=n*2.8}Th.needsUpdate=!0,Um.opacity=Yt(t/bs,0,1)*.95,t===0&&(As.visible=!1)}const Tl=new at({color:6962461,roughness:.92}),fw=new at({color:3088664,roughness:1}),wf=new at({color:4597775,roughness:.95}),pw=new at({color:7107447,roughness:.95}),Ef=new at({color:3817797,roughness:.5,metalness:.7}),mw=new at({color:4266250,emissive:16734738,emissiveIntensity:1.4,roughness:.8});let ze=null;const ci=60,ma=10;function gw(){const n=document.createElement("canvas");n.width=128,n.height=512;const t=n.getContext("2d");t.fillStyle="#eceeec",t.fillRect(0,0,128,512);for(let r=0;r<34;r+=1){const s=Math.random()*128,o=Math.random()*512,a=18+Math.random()*52,c=26+Math.random()*120;t.fillStyle=`rgba(${120+Math.random()*40}, ${128+Math.random()*36}, ${126+Math.random()*34}, ${.05+Math.random()*.07})`,t.beginPath(),t.ellipse(s,o,a,c,Math.random()*.5,0,Math.PI*2),t.fill()}t.fillStyle="rgba(96, 104, 102, 0.22)",t.fillRect(0,0,4,512),t.fillStyle="rgba(255, 255, 255, 0.2)",t.fillRect(4,0,2,512);for(let r=96;r<512;r+=96)t.fillStyle="rgba(108, 116, 114, 0.08)",t.fillRect(0,r,128,2);const e=t.createLinearGradient(0,448,0,512);e.addColorStop(0,"rgba(92, 100, 97, 0)"),e.addColorStop(1,"rgba(92, 100, 97, 0.34)"),t.fillStyle=e,t.fillRect(0,448,128,64);const i=new Ps(n);return i.wrapS=Oa,i.wrapT=bi,i.colorSpace=Ye,i.anisotropy=2,i}const Nm=gw(),Fm=new at({color:12830918,map:Nm,roughness:.93,metalness:0,side:dn}),Om=Fm.clone();Om.color.setHex(11844536);const _w=new at({color:9344659,roughness:.97,metalness:0,side:dn});function xw(){const n=document.createElement("canvas");n.width=8,n.height=256;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(255, 255, 255, 1)"),e.addColorStop(.42,"rgba(255, 255, 255, 0.82)"),e.addColorStop(.72,"rgba(255, 255, 255, 0.34)"),e.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=e,t.fillRect(0,0,8,256);const i=new Ps(n);return i.colorSpace=Ye,i}const bh=new en({map:xw(),color:8890789,transparent:!0,depthWrite:!1,side:dn,fog:!1}),_o=new O(new Xt(1,1,1,96,1,!0),bh),xo=new O(new Xt(1,1,1,96,1,!0),bh);_o.renderOrder=3;xo.renderOrder=3;const Bm=new At,bc=new O(new Xt(1,1,1,96,1,!0),Om),Ac=new O(new Xt(1,1,1,96,1,!0),Fm),ja=new O(new Xt(1,1,1,96,1,!0),_w);bc.position.y=ci/2;Ac.position.y=ci/2;bc.receiveShadow=!0;Ac.receiveShadow=!0;ja.receiveShadow=!0;_o.position.y=ci*.68;xo.position.y=ci*.68;Bm.add(bc,Ac,ja,_o,xo);Qt.add(Bm);let Le=mr,un=null,Ci=0;const Po=160,ur=new Float32Array(Po*3),as=new Float32Array(Po*3),zm=new Oe,Ah=new tn(ur,3);zm.setAttribute("position",Ah);const Da=new nc({color:14209214,size:.58,map:Eh(),transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),_r=new Xu(zm,Da);_r.visible=!1;_r.frustumCulled=!1;Ge.add(_r);const Ua=new Float32Array(Po);function km(n){const t=n*3,e=Math.random()*Math.PI*2,i=Le+Math.random()*1.2;as[t]=e,as[t+1]=.15+Math.random()*4.6,as[t+2]=(Math.random()-.5)*.45,ur[t]=Math.cos(e)*i,ur[t+1]=as[t+1],ur[t+2]=Math.sin(e)*i,Ua[n]=.55+Math.random()*1.5}function vw(n){const t=Mu[n]||mr;un={from:Le,to:t,elapsed:0,duration:8},Ci=.11,_r.visible=!0;for(let e=0;e<Po;e+=1)km(e);Ah.needsUpdate=!0,Rh(n)}function Ch(){bc.scale.set(Le,ci,Le),Ac.scale.set(Le+ma,ci,Le+ma),ja.scale.set(Le-.04,2.6,Le-.04),ja.position.y=1.3;const n=ci*.64;_o.scale.set(Le-.06,n,Le-.06),xo.scale.set(Le+ma+.06,n,Le+ma+.06),_o.position.y=ci*.68,xo.position.y=ci*.68,Nm.repeat.x=Math.max(24,Math.round(Le*.62))}function Mw(n){if(un){un.elapsed+=n;const t=Yt(un.elapsed/un.duration,0,1),e=t*t*(3-2*t);Le=Zf.lerp(un.from,un.to,e),Ch(),t>=1&&(un=null)}if(un?Ci=Math.max(.06,Ci-n*.018):Ci=Math.max(0,Ci-n*.055),_r.visible){let t=0;for(let e=0;e<Po;e+=1){if(Ua[e]-=n,Ua[e]<=0)if(un)km(e);else continue;t+=1;const i=e*3,r=1.5-Ua[e],s=as[i],o=Le+.2+r*.55;ur[i]=Math.cos(s)*o+Math.cos(s+1.3)*r*.18,ur[i+1]=as[i+1]+r*.55,ur[i+2]=Math.sin(s)*o+Math.sin(s+1.3)*r*.18}Ah.needsUpdate=!0,Da.opacity=un?.3:Math.max(0,Da.opacity-n*.22),!un&&t===0&&(_r.visible=!1,Da.opacity=.34)}}function Cc(n,t=1){const e=Math.hypot(n.x,n.z),i=Le-t;if(e>i){const r=i/e;n.x*=r,n.z*=r}}const Rc=new At;Rc.name="generated-forest";Qt.add(Rc);const oo=[],bu=new Set,Kt=new Ee,Jr=new Et,yw=new wt(1,1,1),Tf=new wt(1,1,1),bf=new Sn(.72,0),Sw=new Fi(.62,0),ww=new at({color:3811360,roughness:1}),Af=new at({color:1783078,roughness:1,flatShading:!0}),Hm=new at({color:5857888,roughness:.98,flatShading:!0}),Ew=new at({color:5069408,roughness:.92,metalness:.08,flatShading:!0}),Tw=new at({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.3}),bw=new at({color:2379832,roughness:1,flatShading:!0}),Aw=new at({color:14271613,roughness:.95}),Cw=new at({color:11025204,roughness:.9}),Rw=new at({color:15780258,roughness:.8});function Rh(n){if(n<2||n>mo||bu.has(n))return;bu.add(n);const t=(Mu[n-1]||mr)+8,e=(Mu[n]||mr)-8;if(e<=t)return;const i=n>=4?3:2,r=6;for(let s=0;s<i;s+=1){const o=t+(e-t)*s/i,a=t+(e-t)*(s+1)/i;for(let c=0;c<r;c+=1){const l=c/r*Math.PI*2,h=(c+1)/r*Math.PI*2;oo.push({level:n,rMin:o,rMax:a,a0:l,a1:h})}}}function Qr(n,t,e,i){const r=e+Math.random()*(i-e),s=Math.sqrt(n*n+Math.random()*(t*t-n*n));return{x:Math.cos(r)*s,z:Math.sin(r)*s,radius:s}}function Pw(n,t,e){const i=new At,r=new O(new wt(.34,.54,.22),Aw);r.position.y=.42,r.castShadow=!0,i.add(r);const s=new O(new Nn(.17,7,6),Rw);s.position.y=.84,s.castShadow=!0,i.add(s);const o=new O(new wt(.3,.08,.25),Cw);o.position.y=.7,i.add(o),i.position.set(t,Bt(t,e),e),i.rotation.y=Math.random()*Math.PI*2,i.traverse(a=>{a.userData.tapIgnore=!0}),i.userData.lostChild=!0,n.add(i)}function Lw(n,t,e,i){const r=new O(new yo(i,20),em);r.rotation.x=-Math.PI/2,r.position.set(t,Bt(t,e)+.045,e),n.add(r);const s=new O(new fi(i+.12,.16,4,20),Hm);s.rotation.x=Math.PI/2,s.position.set(t,Bt(t,e)+.06,e),s.scale.z=.45,n.add(s)}function Iw(n){const t=new At,e=n.a1-n.a0,i=.5*(n.rMax*n.rMax-n.rMin*n.rMin)*e,r=150-(n.level-2)*18,s=Math.min(220,Math.max(10,Math.floor(i/r))),o=n.level>=2&&Math.random()<.5?1:0,a=[];for(let T=0;T<o;T+=1){const I=Qr(n.rMin+8,n.rMax-8,n.a0,n.a1),b=1.8+Math.random()*2.2;a.push({x:I.x,z:I.z,radius:b}),Lw(t,I.x,I.z,b)}const c=new Ki(yw,ww,s),l=new Ki(Tf,Af,s),h=new Ki(Tf,Af,s);c.instanceMatrix.setUsage(us),l.instanceMatrix.setUsage(us),h.instanceMatrix.setUsage(us),c.frustumCulled=!0,l.frustumCulled=!0,h.frustumCulled=!0;let d=0;for(let T=0;T<s*3&&d<s;T+=1){const I=Qr(n.rMin+2,n.rMax-2,n.a0,n.a1);let b=!1;for(const j of a)if(Math.hypot(I.x-j.x,I.z-j.z)<j.radius+1.4){b=!0;break}if(b)continue;const A=Yt(I.radius/850,0,1),D=(.92+Math.random()*.72)*(1+A*.55),E=(2.1+Math.random()*1.1)*D,v=(.24+Math.random()*.1)*D,P=Bt(I.x,I.z),z=Math.random()*Math.PI*2;Kt.position.set(I.x,P+E/2,I.z),Kt.rotation.set(0,z,0),Kt.scale.set(v,E,v),Kt.updateMatrix(),c.setMatrixAt(d,Kt.matrix),Jr.setHSL(.08+Math.random()*.03,.3,.16+Math.random()*.08),c.setColorAt(d,Jr);const B=(1.55+Math.random()*.65)*D,W=(1.7+Math.random()*.7)*D;Kt.position.set(I.x,P+E+W*.34,I.z),Kt.rotation.set(0,z+Math.random()*.3,0),Kt.scale.set(B,W,B),Kt.updateMatrix(),l.setMatrixAt(d,Kt.matrix),Jr.setHSL(.31+Math.random()*.055,.38,.13+Math.random()*.07),l.setColorAt(d,Jr);const $=B*(.54+Math.random()*.18),Y=W*(.7+Math.random()*.22);Kt.position.set(I.x,P+E+W*.94,I.z),Kt.rotation.set(0,z+Math.random()*.45,0),Kt.scale.set($,Y,$),Kt.updateMatrix(),h.setMatrixAt(d,Kt.matrix),Jr.setHSL(.32+Math.random()*.05,.4,.16+Math.random()*.08),h.setColorAt(d,Jr),d+=1}c.count=d,l.count=d,h.count=d,c.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),l.instanceColor&&(l.instanceColor.needsUpdate=!0),h.instanceColor&&(h.instanceColor.needsUpdate=!0),t.add(c,l,h);const p=Math.min(40,Math.max(1,Math.floor(i/1100))),g=new Ki(bf,Hm,p);let _=0;for(let T=0;T<p*2&&_<p;T+=1){const I=Qr(n.rMin+2,n.rMax-2,n.a0,n.a1),b=.65+Math.random()*1.05;Kt.position.set(I.x,Bt(I.x,I.z)+.28*b,I.z),Kt.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),Kt.scale.set(b,b*.58,b),Kt.updateMatrix(),g.setMatrixAt(_,Kt.matrix),_+=1}g.count=_,g.instanceMatrix.needsUpdate=!0,t.add(g);const x=Math.min(14,Math.max(0,Math.floor(i/2600)));if(x>0){const T=new Ki(bf,Ew,x),I=new Ki(new ic(.12,0),Tw,x*3);let b=0,A=0;for(let D=0;D<x*2&&b<x;D+=1){const E=Qr(n.rMin+3,n.rMax-3,n.a0,n.a1),v=.9+Math.random()*.8,P=Bt(E.x,E.z);Kt.position.set(E.x,P+.42*v,E.z),Kt.rotation.set(0,Math.random()*Math.PI,0),Kt.scale.set(v,v*.72,v),Kt.updateMatrix(),T.setMatrixAt(b,Kt.matrix);for(let z=0;z<3;z+=1){const B=Math.random()*Math.PI*2,W=.8+Math.random()*.6;Kt.position.set(E.x+Math.cos(B)*.5*v,P+(.48+Math.random()*.25)*v,E.z+Math.sin(B)*.5*v),Kt.rotation.set(Math.random(),Math.random(),Math.random()),Kt.scale.setScalar(W),Kt.updateMatrix(),I.setMatrixAt(A,Kt.matrix),A+=1}b+=1}T.count=b,I.count=A,T.instanceMatrix.needsUpdate=!0,I.instanceMatrix.needsUpdate=!0,t.add(T,I)}const m=Math.min(48,Math.max(1,Math.floor(i/1600))),f=new Ki(Sw,bw,m);let y=0;for(let T=0;T<m*2&&y<m;T+=1){const I=Qr(n.rMin+2,n.rMax-2,n.a0,n.a1),b=.65+Math.random()*.7;Kt.position.set(I.x,Bt(I.x,I.z)+.35*b,I.z),Kt.rotation.set(0,Math.random()*Math.PI,0),Kt.scale.set(b,b*.72,b),Kt.updateMatrix(),f.setMatrixAt(y,Kt.matrix),y+=1}f.count=y,f.instanceMatrix.needsUpdate=!0,t.add(f);const S=.22+(n.level-2)*.05;if(Math.random()<S){const T=Qr(n.rMin+6,n.rMax-6,n.a0,n.a1);Pw(t,T.x,T.z)}Rc.add(t)}function Dw(){if(!oo.length)return;const n=performance.now();for(;oo.length&&performance.now()-n<2.8;)Iw(oo.shift())}function Uw(){oo.length=0,bu.clear(),Rc.clear()}Ch();const Nw=new R(0,1,0);function bl(n,t,e,i,r){const s=e.clone().sub(t),o=s.length();if(o<.001)return;const a=new O(new Xt(i*.85,i,o,6),r);a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(Nw,s.normalize()),a.castShadow=!0,a.receiveShadow=!0,n.add(a)}function Ph(n){for(;nn.children.length>0;){const i=nn.children.pop();i.geometry&&i.geometry.dispose()}if(n===1)for(let i=0;i<3;i+=1){const r=i/3*Math.PI*2+.45;bl(nn,new R(Math.cos(r)*.46,.08,Math.sin(r)*.46),new R(Math.cos(r)*.07,.92,Math.sin(r)*.07),.115,fw)}else{const i=n===2?6:n===3?7:n===4?9:12,r=n===2?.72:n===3?.86:n===4?1:1.2,s=n===2?1.45:n===3?1.7:n===4?2:2.35,o=n===2?.14:.115+n*.009;for(let a=0;a<i;a+=1){const c=a/i*Math.PI*2+.35;bl(nn,new R(Math.cos(c)*r,.1,Math.sin(c)*r),new R(Math.cos(c)*.08,s,Math.sin(c)*.08),o,a%2===0?Tl:wf)}}if(n>=2)for(const i of[-1,1]){const r=new O(new Xt(.2,.22,1.65,7),Tl);r.rotation.z=Math.PI/2,r.rotation.y=i*.28,r.position.set(i*1.5,.22,i*.35),r.castShadow=!0,r.receiveShadow=!0,nn.add(r)}if(n>=3){const i=n>=4?1.95:1.45,r=n>=4?12:9;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2,a=.85+Math.random()*.35,c=new O(new Fi(.2*a,0),pw);c.position.set(Math.cos(o)*i,.15*a,Math.sin(o)*i),c.rotation.set(Math.random(),Math.random(),Math.random()),c.castShadow=!0,c.receiveShadow=!0,nn.add(c)}}if(n>=4){for(let i=0;i<2;i+=1)for(const r of[-1,1]){const s=new O(new Xt(.15,.17,1.8-i*.2,7),Tl);s.rotation.z=Math.PI/2,s.rotation.y=i===0?0:Math.PI/2,s.position.set(i===0?0:r*.42,.25+i*.3,i===0?r*.42:0),s.castShadow=!0,nn.add(s)}for(let i=0;i<14;i+=1){const r=Math.random()*Math.PI*2,s=.5+Math.random()*1.35,o=new O(new wt(.11,.045,.11),mw);o.position.set(Math.cos(r)*s,.05,Math.sin(r)*s),o.rotation.y=Math.random()*Math.PI,nn.add(o)}}if(n>=5){const i=new O(new fi(2.18,.085,6,22),Ef);i.rotation.x=Math.PI/2,i.position.y=.1,i.castShadow=!0,nn.add(i);for(let r=0;r<6;r+=1){const s=r/6*Math.PI*2+.4,o=new O(new wt(.12,.58,.12),Ef);o.position.set(Math.cos(s)*2.18,.32,Math.sin(s)*2.18),o.rotation.y=-s,nn.add(o)}for(let r=0;r<5;r+=1){const s=r/5*Math.PI*2+.1;bl(nn,new R(Math.cos(s)*2.05,.12,Math.sin(s)*2.05),new R(Math.cos(s)*.35,1.5,Math.sin(s)*.35),.17,wf)}}nn.scale.setScalar(n===1?.7:.56),u.fireGrow=0,Yn&&Yn.material&&Yn.material.color.setHex(n>=5?14218495:16769674),vn&&vn.material&&(vn.material.color.setHex(n>=5?16751162:16743202),vn.material.opacity=n>=5?.72:.58),xn&&xn.material&&(xn.material.color.setHex(n>=5?14153215:16747050),xn.material.emissive.setHex(n>=5?7325951:16739096));const t=fh[n]||8;Gm(t),ze&&(ze.visible=!1);const e=!u.fireOut;xn.visible=e,vn.visible=e,Yn.visible=e,Ec.visible=e,e||(fs.intensity=0,ps.intensity=0,Ro.setDrawRange(0,0),Ei.forEach(i=>{i.material.opacity=0})),To.material.emissiveIntensity=e?.55:u.fireEverLit?.58:.02,Ii=!0}function Gm(n){if(ze&&(Qt.remove(ze),ze.geometry.dispose(),ze.material.dispose(),ze=null),!n||n<=0)return;const t=[],e=96;for(let s=0;s<e;s+=1){const o=s/e*Math.PI*2;t.push(new R(Math.cos(o)*n,.05,Math.sin(o)*n))}const i=new Oe().setFromPoints(t),r=new zy({color:14477538,transparent:!0,opacity:.23,dashSize:.46,gapSize:.4,depthWrite:!1});ze=new By(i,r),ze.computeLineDistances(),ze.position.copy($t.position),ze.renderOrder=1,Qt.add(ze)}function Fw(){ba.classList.remove("flash"),ba.offsetWidth,ba.classList.add("flash")}function Ow(){u.startHintTimer=8,Mp.classList.add("visible")}const Lh=new O(new Nn(1150,24,24),new en({color:399393,side:Ke,fog:!1}));Ge.add(Lh);const Mn=new wo(16752970,2.2,12,2);Mn.position.set(0,1.2,0);Mn.visible=!1;Ge.add(Mn);const u={started:!1,night:1,maxNight:99,health:100,hunger:100,damageFlash:0,attackCooldown:0,attackTimer:0,nearFire:!0,keys:new Set,joystick:{x:0,y:0,active:!1},look:{active:!1},pinchDistance:0,cameraYaw:0,cameraPitch:0,cameraDistance:th,firstPerson:!1,viewBlend:0,cameraInitialized:!1,cycleTime:0,daylight:1,nightActive:!1,gameOver:!1,pointerId:null,victory:!1,velocityY:0,grounded:!0,jumpHeld:!1,walkPhase:0,idleTime:0,moveSpeed:0,backpack:{wood:0,sapling:0,berry:0,iron:0},sackOrder:[],backpackCapacity:dm,goodSack:!1,goodAxe:!1,ownedTools:{axe:!0,pickaxe:!1,torch:!1,ironAxe:!1,ironSword:!1},equippedTool:null,equipTimer:0,inventoryOpen:!1,craftOpen:!1,settingsOpen:!1,grinderInReach:!1,benchInReach:!1,fireLevel:1,fireProgress:0,fireGrow:0,fireDarken:0,startHintTimer:0,craftSelected:"pickaxe",carriedPlaceable:null,dropCooldown:0,starveTimer:0,portrait:!1,paused:!1,fireOut:!0,fireEverLit:!1,fireBarMessageTimer:0,fireFlare:0,fireInReach:!1,chopTimer:0,plantCooldown:0,swingCooldown:0,targetTree:null,targetRock:null,falling:0,invuln:0,hitEffectTimer:0};try{window.localStorage.removeItem("nights.invertHorizontalLook"),window.localStorage.removeItem("nights.cameraView")}catch{}function Bw(){const n=u.cameraYaw,t=u.cameraPitch,e=Math.sin(n),i=Math.cos(n),r=-i,s=e;Cu(50,0);const a=(Math.sin(u.cameraYaw)-e)*r+(Math.cos(u.cameraYaw)-i)*s>0;Cu(0,-50);const c=u.cameraPitch>t;u.cameraYaw=n,u.cameraPitch=t,a||console.error("[camera self-test] FAILED: +50 px right drag turned the view left"),c||console.error("[camera self-test] FAILED: upward drag did not look up"),a&&c&&console.info("[camera self-test] passed: drag right looks right, drag up looks up")}Bw();function Vm(n,t=!0){u.firstPerson=!!n,to&&(to.classList.toggle("first-person",u.firstPerson),to.setAttribute("aria-pressed",String(u.firstPerson)),to.setAttribute("aria-label",u.firstPerson?"Switch to third-person view":"Switch to first-person view")),t&&Dt(u.firstPerson?"First-person view":"Third-person view")}function zw(){Vm(!u.firstPerson),Fs()}function Yt(n,t,e){return Math.min(Math.max(n,t),e)}function Au(n){const t=Yt(n,0,1);return t*t*(3-2*t)}function kw(n,t,e){let i=t-n;return i=Math.atan2(Math.sin(i),Math.cos(i)),n+i*e}function ee(){Xy.textContent=`${u.night} / ${u.maxNight}`,$y.textContent=String(pa("wood")),Ky.textContent=String(pa("sapling")),Zy.textContent=String(pa("berry")),jy.textContent=String(pa("iron")),qy.textContent=String(Math.max(0,Math.ceil(u.health))),Qy.textContent=String(Math.max(0,Math.ceil(u.hunger)));const n=Yt(u.health,0,100);_l.style.width=`${n}%`,_l.classList.toggle("low",n<=55&&n>25),_l.classList.toggle("critical",n<=25);const t=Yt(u.hunger,0,100);Qd.style.width=`${t}%`,Qd.classList.toggle("low",t<=30),Wm(),Ss(),wc();const e=u.started&&u.fireEverLit&&u.fireOut;Eo.classList.toggle("visible",e),cS.textContent=`${Za()}/${u.backpackCapacity}`,uS.textContent=`${Za()} / ${u.backpackCapacity}`,Ns(),Gw()}const ga=["slot-a","slot-b","slot-c","slot-d","slot-e","slot-f"],Hw=[Ju,ju,$u,qu,so,Ku,Zu];function Wm(){const n=!!Gt,t=Gt==null?void 0:Gt.type,e=Mc(),i=e&&u.sackOrder.length>0,r=n&&(t==="wood"||t==="iron")&&xc()<=om,s=n&&_c()<=sm;vp.classList.toggle("available",n);const o=[];r&&o.push(Ku),s&&o.push(Zu),n&&e&&o.push(qu),n&&t==="sapling"&&o.push(ju),n&&t==="berry"&&o.push($u),i&&o.push(so),u.carriedPlaceable&&o.push(Ju);for(const l of Hw)l.classList.remove("available",...ga);o.forEach((l,h)=>{l.classList.add("available",ga[h]||ga[ga.length-1])});const a=n;so.disabled=a;const c=so.querySelector("span");c&&(c.textContent=a?"HANDS FULL":"UNSTORE")}function Ns(){const n=[["axe",yp],["backpack",Li],["pickaxe",Sp],["torch",wp],["ironSword",Ep]];for(const[t,e]of n){const i=t==="backpack"||!!u.ownedTools[t],r=t==="axe"?u.equippedTool==="axe"||u.equippedTool==="ironAxe":u.equippedTool===t;e.classList.toggle("hidden",!i),e.classList.toggle("equipped",r),e.setAttribute("aria-pressed",String(r))}}function Gw(){if(!u.inventoryOpen)return;const n=`${u.backpack.wood}|${u.backpack.sapling}|${u.backpack.berry}|${u.backpack.iron}`;if(n===pf)return;pf=n,vl.innerHTML="";const t=[["wood","Wood log"],["sapling","Sapling"],["berry","Berry"],["iron","Iron piece"]];let e=!1;for(const[i,r]of t){const s=u.backpack[i];if(s<=0)continue;e=!0;const o=document.createElement("div");o.className="inventory-row";const a=document.createElement("span");a.className=`inv-icon ${i}`;const c=document.createElement("span");c.className="inv-name",c.textContent=r;const l=document.createElement("span");l.className="inv-count",l.textContent=`×${s}`;const h=document.createElement("button");if(h.className="inv-btn take",h.textContent="TAKE",h.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),Vw(i)}),o.append(a,c,l,h),i==="berry"){const d=document.createElement("button");d.className="inv-btn eat",d.textContent="EAT",d.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Ww()}),o.append(d)}vl.appendChild(o)}if(!e){const i=document.createElement("div");i.className="inventory-empty",i.textContent="Your backpack is empty.",vl.appendChild(i)}}function pi(n){u.inventoryOpen=n,lS.classList.toggle("hidden",!n),Ns()}function Vw(n){if(!u.started||u.gameOver||u.falling||u.backpack[n]<=0)return;vm(n),u.backpack[n]-=1;const t=V.position.x+Math.sin(V.rotation.y)*1.35,e=V.position.z+Math.cos(V.rotation.y)*1.35;ki(n,t,e,{velocityY:2.2,pickupDelay:.3}),u.dropCooldown=.25,ee(),Dt(`Took out ${Us[n].toLowerCase()}`)}function Ww(){!u.started||u.gameOver||u.falling||u.backpack.berry<=0||(vm("berry"),u.backpack.berry-=1,u.hunger=Yt(u.hunger+$a,0,100),ee(),Dt(`Ate a berry (+${$a} hunger)`))}function zn(n){if(!(!u.started||u.gameOver||u.falling||u.paused)){if(n!=="backpack"&&!u.ownedTools[n]){Dt(`Craft the ${Us[n]||"tool"} first`);return}n===u.equippedTool?u.equippedTool=null:u.equippedTool=n,Hi(),Tr(!1),u.equippedTool!=="backpack"&&pi(!1),u.equipTimer=u.equippedTool?mc:0,Fs(),ee(),Pc()}}function Xw(){u.equippedTool=null,u.equipTimer=0,pi(!1),Hi(),Fs(),ee(),Pc()}function Yw(){switch(u.equippedTool){case"axe":return sn;case"backpack":return Zn;case"pickaxe":return lc;case"torch":return dc;case"ironAxe":return uc;case"ironSword":return hc;default:return null}}function Pc(){sn.visible=u.equippedTool==="axe",Zn.visible=u.equippedTool==="backpack",lc.visible=u.equippedTool==="pickaxe",dc.visible=u.equippedTool==="torch",uc.visible=u.equippedTool==="ironAxe",hc.visible=u.equippedTool==="ironSword",ac.visible=!u.equippedTool}function qw(n){u.equipTimer=Math.max(0,u.equipTimer-n);const t=Yw();if(!t)return;const e=t.userData.baseY??t.position.y,i=t===Zn?.92:1;if(u.equipTimer>0){const r=1-u.equipTimer/mc,s=1-(1-r)*(1-r);t.scale.setScalar((.55+s*.45)*i),t.position.y=e-(1-s)*.26}else t.scale.setScalar(i),t.position.y=e}function $w(n){for(const[t,e]of Object.entries(Kp))e.visible=n&&u.equippedTool===t}function Kw(n){if(!bo.visible)return;let t=0;if(u.attackTimer>0){const a=1-u.attackTimer/pc;t=Math.sin(Yt(a,0,1)*Math.PI)}else if(u.chopTimer>0){const a=1-u.chopTimer/.3;t=Math.sin(Yt(a,0,1)*Math.PI)*.85}else if(u.equipTimer>0){const a=1-u.equipTimer/mc;t=-Math.sin(Yt(a,0,1)*Math.PI)*.3}const e=u.moveSpeed>.1&&u.grounded,i=u.walkPhase,r=e?Math.sin(i)*.018:Math.sin(u.idleTime*1.7)*.006,s=e?Math.abs(Math.cos(i))*.012:Math.sin(u.idleTime*1.5)*.004,o=1-Math.exp(-18*n);xe.position.x+=(Kr.x+r-xe.position.x)*o,xe.position.y+=(Kr.y+s-xe.position.y)*o,xe.position.z=Kr.z,xe.rotation.x+=(Kr.rx-t*1.35-xe.rotation.x)*o,xe.rotation.y=Kr.ry,xe.rotation.z+=(Kr.rz+t*.55-xe.rotation.z)*o}function Zw(){lo.style.transform="translate(-50%, -50%)"}function jw(n,t){const e=ys.getBoundingClientRect(),i=e.left+e.width/2,r=e.top+e.height/2,s=n-i,o=t-r,a=e.width*.31,c=Math.min(Math.hypot(s,o),a),l=Math.atan2(o,s),h=Math.cos(l)*c,d=Math.sin(l)*c;u.joystick.x=h/a,u.joystick.y=d/a,u.joystick.active=!0,lo.style.left=`${50+h/a*30}%`,lo.style.top=`${50+d/a*30}%`}function Xm(n){n.preventDefault(),u.joystick.active=!0,jw(n.clientX,n.clientY)}ys.addEventListener("pointerdown",n=>{u.pointerId=n.pointerId,Xm(n),ys.setPointerCapture(n.pointerId)});ys.addEventListener("pointermove",n=>{!u.joystick.active||n.pointerId!==u.pointerId||Xm(n)});function Lc(){u.pointerId=null,u.joystick.x=0,u.joystick.y=0,u.joystick.active=!1,lo.style.left="50%",lo.style.top="50%",Zw()}ys.addEventListener("pointerup",Lc);ys.addEventListener("pointercancel",Lc);function Cu(n,t){u.cameraYaw-=n*CS,u.cameraPitch=Yt(u.cameraPitch-t*RS,-sf,sf)}const xr=new Map;function Jw(n){return!!(n&&n.closest&&n.closest("button, #inventoryPanel, #craftPanel, #settingsPanel, #startOverlay, #rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone"))}function Qw(n,t){if(!Jd)return!1;const e=Jd.getBoundingClientRect();return n>=e.left&&n<=e.right&&t>=e.top&&t<=e.bottom}function Ic(){return!u.started||u.gameOver||u.falling||u.portrait||u.inventoryOpen||u.craftOpen||u.settingsOpen}window.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||Jw(n.target)||Qw(n.clientX,n.clientY)||!u.started||u.gameOver||u.falling||u.portrait||xr.set(n.pointerId,{startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,startTime:performance.now(),moved:0,dragging:!1,canLook:n.clientX>=window.innerWidth*.5})});window.addEventListener("pointermove",n=>{const t=xr.get(n.pointerId);if(!t)return;const e=n.clientX-t.lastX,i=n.clientY-t.lastY;t.lastX=n.clientX,t.lastY=n.clientY,t.moved=Math.max(t.moved,Math.hypot(n.clientX-t.startX,n.clientY-t.startY)),!t.dragging&&t.moved>Cp&&(t.dragging=!0),!(!t.dragging||!t.canLook||Ic())&&Cu(e,i)});function Ym(n){const t=xr.get(n.pointerId);if(!t)return;xr.delete(n.pointerId);const e=performance.now()-t.startTime,i=!t.dragging&&t.moved<=Cp&&e<=PS;b1(i?"TAP":"DRAG"),!(n.type==="pointercancel"||!i)&&(Ic()||oE(t.startX,t.startY))}window.addEventListener("pointerup",Ym);window.addEventListener("pointercancel",Ym);function qm(){return window.innerHeight>window.innerWidth}async function tE(){if(window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function $m(){if(!qm()){tE(),u.started=!0,u.victory=!1,u.gameOver=!1,u.paused=!1,ai.classList.add("hidden"),u.health=100,u.hunger=100,u.night=1,u.cycleTime=0,u.daylight=1,u.nightActive=!1,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,u.damageFlash=0,u.nearFire=!0,u.keys.clear(),u.cameraYaw=0,u.cameraPitch=0,u.cameraDistance=th,u.velocityY=0,u.grounded=!0,u.jumpHeld=!1,u.walkPhase=0,u.idleTime=0,u.moveSpeed=0,u.backpack.wood=0,u.backpack.sapling=0,u.backpack.berry=0,u.backpack.iron=0,u.sackOrder=[],u.ownedTools.axe=!0,u.ownedTools.pickaxe=!1,u.ownedTools.torch=!1,u.ownedTools.ironAxe=!1,u.ownedTools.ironSword=!1,u.goodSack=!1,u.goodAxe=!1,u.backpackCapacity=dm,u.equippedTool=null,u.equipTimer=0,u.inventoryOpen=!1,u.craftOpen=!1,u.settingsOpen=!1,u.benchInReach=!1,u.fireLevel=1,u.fireProgress=0,u.fireGrow=0,u.fireDarken=0,u.startHintTimer=8,u.fireOut=!0,u.fireEverLit=!1,u.fireBarMessageTimer=0,u.fireGrow=0,Le=mr,Ch(),un=null,Ci=0,_r.visible=!1,Uw(),u.carriedPlaceable=null,u.targetRock=null,u.dropCooldown=0,u.starveTimer=0,u.fireFlare=0,u.chopTimer=0,u.plantCooldown=0,u.targetTree=null,u.falling=0,u.invuln=0,u.hitEffectTimer=0,os=0,ho.classList.remove("visible"),clearTimeout(yu),Qs.classList.remove("visible"),Ii=!0,Ai(),pi(!1),Hi(),Tr(!1),le.stock.wood=0,le.stock.iron=0,le.tier=1,le.crafted.clear(),im(),Z1(),wc(),Ph(1),Gm(fm()),u.craftSelected="pickaxe",h1(),d1(),V.position.set(3.1,Bt(3.1,-4.2),-4.2),V.rotation.y=0,u.cameraInitialized=!1,Wn.rotation.set(0,0,0),Dn.rotation.set(0,0,0),fr.rotation.set(0,0,0),pr.rotation.set(0,0,0),wn.position.y=.01,xr.clear(),u.look.active=!1,u.pinchDistance=0;for(const n of ms)Qt.remove(n.mesh);ms.length=0,I1();for(let n=De.length-1;n>=0;n-=1){const t=De[n];if(t.userData.planted){Qt.remove(t),De.splice(n,1);continue}t.visible=!0,t.rotation.set(0,0,0),t.quaternion.identity(),t.userData.baseChoppable&&bm(t)}Eo.classList.remove("visible"),sc.classList.remove("visible"),Aa.classList.add("hidden"),ba.classList.remove("flash"),Qu.style.opacity="0";for(const n of qn)n.visible=!1,n.position.set(0,-40,0),Cm(n),n.visible=!1;pn.visible=!1,fn.visible=!1,Pc(),Ss(),ee(),Ow(),Dt("Tap a tool · loose iron by the bench")}}nS.addEventListener("click",$m);const eE=new Set([" ","arrowup","arrowdown","arrowleft","arrowright"]),Km=new Set(["shift","j"]);window.addEventListener("keydown",n=>{const t=n.key.toLowerCase();eE.has(t)&&n.preventDefault(),t==="q"&&!n.repeat&&Am(),t==="f"&&!n.repeat&&xm(),t==="e"&&!n.repeat&&Mm(),t==="1"&&!n.repeat&&zn(u.ownedTools.ironAxe?"ironAxe":"axe"),t==="2"&&!n.repeat&&zn("backpack"),t==="3"&&!n.repeat&&zn("pickaxe"),t==="4"&&!n.repeat&&zn("torch"),t==="5"&&!n.repeat&&zn("ironSword"),t==="escape"&&!n.repeat&&(Hi(),Tr(!1),pi(!1)),Km.has(t)&&(u.jumpHeld=!0,n.repeat||Uc()),u.keys.add(t)});window.addEventListener("keyup",n=>{const t=n.key.toLowerCase();u.keys.delete(t),Km.has(t)&&(u.jumpHeld=!1)});window.addEventListener("blur",()=>{u.keys.clear(),u.jumpHeld=!1});vp.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),xm()});qu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),U1()});so.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),N1()});$u.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Mm()});Ku.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Q1()});Zu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),O1()});ju.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Am()});yp.addEventListener("pointerdown",n=>{n.preventDefault(),zn(u.ownedTools.ironAxe?"ironAxe":"axe")});Li.addEventListener("pointerdown",n=>{n.preventDefault(),zn("backpack")});Sp.addEventListener("pointerdown",n=>{n.preventDefault(),zn("pickaxe")});wp.addEventListener("pointerdown",n=>{n.preventDefault(),zn("torch")});Ep.addEventListener("pointerdown",n=>{n.preventDefault(),zn("ironSword")});fS.addEventListener("pointerdown",n=>{n.preventDefault(),Hi()});du.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Y1()});Ju.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),J1()});hS.addEventListener("pointerdown",n=>{n.preventDefault(),pi(!1)});dS.addEventListener("pointerdown",n=>{n.preventDefault(),Xw()});const Cf=new _p,Al=new Pt,nE=.3,iE=new en({color:16777215,side:Ke,transparent:!0,opacity:.9,depthWrite:!1}),no=[];function Si(n){if(!n)return;const t=[];if(n.traverse(i=>{!i.isMesh||!i.geometry||i.userData.outlineShell||t.push(i)}),t.length===0)return;const e=[];for(const i of t){const r=new O(i.geometry,iE);r.scale.setScalar(1.05),r.renderOrder=3,r.userData.outlineShell=!0,i.add(r),e.push({node:i,shell:r})}no.push({shells:e,until:performance.now()+nE*1e3})}function rE(){if(no.length===0)return;const n=performance.now();for(let t=no.length-1;t>=0;t-=1){const e=no[t];if(!(n<e.until)){for(const{node:i,shell:r}of e.shells)i.remove(r);no.splice(t,1)}}}function sE(n){let t=n;for(;t;){const e=t.userData;if(e.itemRef)return{kind:"item",item:e.itemRef,mesh:t};if(e.rockRef)return{kind:"rock",rock:e.rockRef};if(e.treeRef)return{kind:"tree",tree:e.treeRef};if(e.enemyRef)return{kind:"enemy",enemy:e.enemyRef};if(e.saplingRef)return{kind:"sapling",sapling:e.saplingRef};if(e.berryBushRef)return{kind:"berry",bush:e.berryBushRef};if(e.benchRef)return{kind:"bench"};if(e.grinderRef)return{kind:"grinder"};if(e.campfireRef)return{kind:"campfire"};t=t.parent}return null}function oE(n,t){if(Ic())return;const e=xp.getBoundingClientRect();Al.x=(n-e.left)/e.width*2-1,Al.y=-((t-e.top)/e.height)*2+1,Cf.setFromCamera(Al,pe);const i=Cf.intersectObjects(Qt.children,!0);for(const r of i){if(!r.object.isMesh||r.object.userData.tapIgnore)continue;const s=sE(r.object);if(!s)break;if(s.kind==="enemy"){Rf(s);return}if(s.kind==="campfire")return;Ru(),Rf(s);return}Ru(),cE()}function Rf(n){var s;const t=V.position.x,e=V.position.z,i=(o,a)=>Math.hypot(t-o,e-a)<=Ra,r=()=>Dt("Too far");switch(n.kind){case"item":{const o=n.item;if(!i(o.x,o.z))return r();Si(o.mesh),vh(o);return}case"rock":{const o=n.rock;if(!i(o.x,o.z))return r();if(Si(o.group),!gh(u.equippedTool)){Dt("Use the Pickaxe");return}wm(o);return}case"tree":{const o=n.tree;if(!i(o.position.x,o.position.z))return r();if(Si(o),!pm(u.equippedTool)){Dt("Use the Axe");return}Sm(o,((s=Co[u.equippedTool])==null?void 0:s.treePower)??1);return}case"enemy":{const o=n.enemy;if(!i(o.position.x,o.position.z))return r();Si(o),Ru(o);return}case"sapling":{if(!i(n.sapling.x,n.sapling.z))return r();Si(n.sapling.mesh),Dt("The sapling is still growing");return}case"berry":{const o=n.bush;if(!i(o.x,o.z))return r();Si(o.mesh),lE(o);return}case"bench":{if(Ka()>Ra)return r();if(Ka()>m1){Dt("Move closer to the bench");return}Si(fe),W1();return}case"grinder":{if(xc()>Ra)return r();Si(we),Dt("Drag a log or iron and press Put in grinder");return}case"campfire":return}}const aE=3;function cE(){var o;if(Ic())return;const n=pm(u.equippedTool),t=gh(u.equippedTool);if(!n&&!t)return;const e=Math.sin(u.cameraYaw),i=Math.cos(u.cameraYaw);let r=null;const s=(a,c,l,h)=>{const d=c-V.position.x,p=l-V.position.z,g=Math.hypot(d,p);g<.001||g>aE||(d*e+p*i)/g<.2||(!r||g<r.distance)&&(r={kind:a,ref:h,distance:g})};if(n)for(const a of De)!a.userData.choppable||a.userData.falling||!a.visible||s("tree",a.position.x,a.position.z,a);if(t)for(const a of zi)a.broken||s("rock",a.x,a.z,a);r&&(r.kind==="tree"?Sm(r.ref,((o=Co[u.equippedTool])==null?void 0:o.treePower)??1):wm(r.ref))}function lE(n){const t=performance.now();if(t<(n.nextHarvest||0)){Dt("The bush needs a moment");return}if(n.nextHarvest=t+4500,Gt){Dt("Hands full");return}const e=ki("berry",V.position.x,V.position.z,{startY:Bt(V.position.x,V.position.z)+.5,velocityY:1.2,pickupDelay:0});vh(e)}function Dc(n){u.jumpHeld=n,n&&Uc()}uo.addEventListener("pointerdown",n=>{n.preventDefault(),uo.setPointerCapture(n.pointerId),Dc(!0)});uo.addEventListener("pointerup",()=>Dc(!1));uo.addEventListener("pointercancel",()=>Dc(!1));uo.addEventListener("lostpointercapture",()=>Dc(!1));ai.addEventListener("pointerdown",n=>{!u.started&&n.target===ai&&$m()});function uE(n,t,e,i){ai.classList.remove("hidden"),ai.querySelector(".title").textContent=n,ai.querySelector(".subtitle").textContent=t,ai.querySelector(".hint").textContent=e,ai.querySelector("button").textContent=i,Eo.classList.remove("visible"),sc.classList.remove("visible"),ho.classList.remove("visible"),pi(!1),Hi(),Tr(!1),u.equippedTool=null,u.equipTimer=0,Pc(),ee(),Qu.style.opacity="0"}function Ru(n=null){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.attackCooldown>0)return;const t=Co[u.equippedTool];if(!["axe","ironAxe","ironSword"].includes(u.equippedTool)||!t)return;n?V.rotation.y=Math.atan2(n.position.x-V.position.x,n.position.z-V.position.z):V.rotation.y=u.cameraYaw,u.attackCooldown=t.cooldown,u.attackTimer=pc,pn.visible=!0,pn.scale.setScalar(.7),fc.intensity=1.8,YE();const e=new R(Math.sin(V.rotation.y),0,Math.cos(V.rotation.y));if(n){if(n.visible&&!n.userData.fading){const i=n.position.clone().sub(V.position);i.y=0,i.length()<=Ra&&Pf(n,t,e)}return}for(const i of qn){if(!i.visible||i.userData.fading)continue;const r=i.position.clone().sub(V.position);r.y=0;const s=r.length();s>3||s<.01||(r.normalize(),!(e.dot(r)<.2)&&Pf(i,t,e))}}function Pf(n,t,e){const i=n.userData;i.health-=t.damage,i.hitTimer=.22,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.1,i.knockback.addScaledVector(e,4.2+t.damage*.6),n0(),fn.position.copy(n.position),fn.position.y+=1.15,fn.scale.setScalar(.8),fn.material.opacity=.95,fn.visible=!0,u.hitEffectTimer=.22,i.health<=0&&(i.health=0,i.dead=!0,i.attackCooldown=0,Ih(n,4))}function Ih(n,t){const e=n.userData;n.visible&&(e.fading=!0,e.fade=1,e.fadeRate=t,e.bodyMat.transparent=!0,e.eyeMat.transparent=!0)}function hE(n){!u.started||u.gameOver||u.falling||u.invuln>0||(u.health=Math.max(0,u.health-n),u.damageFlash=1,ee(),u.health<=0&&Zm())}function Zm(){u.falling>0||(u.falling=2.4,u.health=0,u.attackTimer=0,pn.visible=!1,pi(!1),Hi(),sc.classList.add("visible"),XE(),ee())}function dE(){u.falling=0,u.health=100,u.hunger=Math.max(u.hunger,55),u.invuln=2,u.damageFlash=0,u.velocityY=0,u.grounded=!0,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,V.position.set(3.1,Bt(3.1,-4.2),-4.2),V.rotation.y=0,Wn.rotation.set(0,0,0),Dn.rotation.set(0,0,0),fr.rotation.set(0,0,0),pr.rotation.set(0,0,0),sc.classList.remove("visible"),Ai(),u.cycleTime=ir,u.nightActive=!0,jm(),ee()}function jm(){if(u.nightActive=!0,u.night<=1){for(const e of qn)e.visible=!1,e.position.set(0,-40,0);return}const n=Math.min(u.night+1+(u.fireLevel-1)*2,hm),t=Math.min(Le-8,30+(u.fireLevel-1)*16);for(let e=0;e<qn.length;e+=1){const i=qn[e];if(e>=n){i.visible=!1,i.position.set(0,-40,0);continue}const r=e/n*Math.PI*2+(Math.random()-.5)*.5,s=Math.max(18,t-5+Math.random()*8),o=Math.cos(r)*s,a=Math.sin(r)*s;Cm(i),i.position.set(o,Bt(o,a),a),i.rotation.y=Math.atan2(-o,-a);const c=i.userData;c.dead=!1,c.health=Math.min(8,2+Math.floor((u.night-1)/12)),c.maxHealth=c.health,c.speed=Math.min(3.5,1.15+u.night*.045+Math.random()*.22),c.damage=Math.min(22,6+u.night*.3),c.targetCamp=e%4===0,c.circleDir=Math.random()<.5?1:-1,c.phase=Math.random()*Math.PI*2}Mn.visible=!0,Mn.position.copy(V.position),Mn.position.y=1.4,Mn.intensity=2.6}function fE(){const n=V.position.x-$t.position.x,t=V.position.z-$t.position.z,e=fm();return n*n+t*t<e*e?1:0}const Na=6,Dh=.32,pE=7.4,mE=17.5;function Uc(){!u.started||u.gameOver||u.falling||!u.grounded||u.craftOpen||u.settingsOpen||u.inventoryOpen||(u.velocityY=pE,u.grounded=!1,ZE())}function Lf(n){const t=Bt(V.position.x,V.position.z);if(!u.started||u.gameOver){u.velocityY=0,u.grounded=!0,V.position.y=t;return}if(u.grounded){V.position.y=t,u.jumpHeld&&Uc();return}const e=u.velocityY;u.velocityY-=mE*n,V.position.y+=u.velocityY*n,V.position.y<=t&&(V.position.y=t,u.velocityY=0,u.grounded=!0,e<-2.4&&i0())}function gE(){for(const n of De){if(!n.visible||n.userData.falling)continue;const t=V.position.x-n.position.x,e=V.position.z-n.position.z,i=n.userData.scale*.3+Dh,r=t*t+e*e;if(r>=i*i||r<1e-4)continue;const s=Math.sqrt(r),o=i-s;V.position.x+=t/s*o,V.position.z+=e/s*o}}function Jm(n,t=Dh){for(const e of wr){if(e.rock&&e.rock.broken)continue;const i=n.position.x-e.x,r=n.position.z-e.z,s=e.radius+t,o=i*i+r*r;if(o>=s*s)continue;if(o<1e-4){n.position.x=e.x+s;continue}const a=Math.sqrt(o),c=s-a;n.position.x+=i/a*c,n.position.z+=r/a*c}for(const e of po){const i=n.position.x-e.x,r=n.position.z-e.z,s=Math.cos(e.rotation),o=Math.sin(e.rotation);let a=i*s-r*o,c=i*o+r*s;const l=e.width/2+t,h=e.depth/2+t;if(Math.abs(a)>=l||Math.abs(c)>=h)continue;const d=l-Math.abs(a),p=h-Math.abs(c);d<p?a=Math.sign(a||1)*l:c=Math.sign(c||1)*h,n.position.x=e.x+a*s+c*o,n.position.z=e.z-a*o+c*s}}function _E(n,t,e){if(u.grounded)for(const i of hh){if(i.rock&&i.rock.broken)continue;const r=n-i.x,s=t-i.z,o=i.radius+Dh+.12;if(r*r+s*s>o*o)continue;const a=i.x-n,c=i.z-t;if(!(e.x*a+e.z*c<=0)&&i.top-V.position.y<=.95){Uc();return}}}function xE(n){if(!u.started||u.gameOver||u.falling)return;const t=u.keys,e=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),i=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),r=Yt(u.joystick.x+e,-1,1),s=Yt(-u.joystick.y+i,-1,1);if(Math.abs(r)+Math.abs(s)<.02){u.moveSpeed=0;return}const o=new R(Math.sin(u.cameraYaw),0,Math.cos(u.cameraYaw)),a=new R(-Math.cos(u.cameraYaw),0,Math.sin(u.cameraYaw)),c=new R;c.addScaledVector(o,s),c.addScaledVector(a,r),c.normalize(),u.moveSpeed=Na;const l=Math.atan2(c.x,c.z),h=1-Math.exp(-15*n);V.rotation.y=kw(V.rotation.y,l,h);const d=V.position.x+c.x*n*Na,p=V.position.z+c.z*n*Na;_E(d,p,c),V.position.x=d,V.position.z=p,gE(),Jm(V),Cc(V.position,.9)}function If(n){const t=Yt(n,0,1);if(t<.35){const i=t/.35;return-1.05*(i*i*(3-2*i))}if(t<.72){const i=(t-.35)/.37;return-1.05+1.85*(i*i*(3-2*i))}const e=(t-.72)/.28;return .8-.8*(e*e*(3-2*e))}function vE(n){u.idleTime+=n;const t=w1(u.equippedTool);let e=0,i=0,r=0,s=0,o=0,a=0;if(!u.grounded)u.velocityY>.25?(e=-2.55,i=-2.55,r=-.18,s=.18):(e=-.2,i=-.2,r=-1.35,s=1.35),t&&(i=Qi+(u.velocityY>.25?-.12:.08),s=0),o=.12,a=-.12;else if(u.attackTimer>0){const h=1-u.attackTimer/pc,d=Math.sin(Yt(h,0,1)*Math.PI);e=.22*d,t?i=Qi+If(h):(i=-.45-2.25*d,s=.34*d),o=.08*d,a=-.08*d}else if(u.chopTimer>0){const h=1-u.chopTimer/.3,d=Math.sin(Yt(h,0,1)*Math.PI);e=-.4*d,t?i=Qi+If(h):(i=-2.2*d,s=.12*d)}else if(u.equipTimer>0){const h=1-u.equipTimer/mc,d=Math.sin(Yt(h,0,1)*Math.PI);t?i=Qi-.2*d:(i=-1.15*d,s=.22*d),e=.18*d}else if(u.moveSpeed>.1){u.walkPhase+=n*(5+u.moveSpeed);const h=Math.sin(u.walkPhase)*.72;e=h,i=t?Qi-h*IS:-h,o=-h,a=h}else{const h=Math.sin(u.idleTime*1.9)*.05;e=h,t?i=Qi-h*.4:i=-h}const c=1-Math.exp(-14*n);Wn.rotation.x+=(e-Wn.rotation.x)*c,Dn.rotation.x+=(i-Dn.rotation.x)*c,Wn.rotation.z+=(r-Wn.rotation.z)*c,Dn.rotation.z+=(s-Dn.rotation.z)*c,fr.rotation.x+=(o-fr.rotation.x)*c,pr.rotation.x+=(a-pr.rotation.x)*c;const l=u.grounded&&u.moveSpeed>.1?Math.abs(Math.sin(u.walkPhase))*.02:0;wn.position.y+=(.01+l-wn.position.y)*c}function ME(n){if(!u.started||u.gameOver)return;const t=!u.fireOut;for(const e of qn){const i=e.userData;if(!e.visible)continue;if(i.fading){i.fade=Math.max(0,i.fade-n*(i.fadeRate||1));const I=i.fade;i.bodyMat.opacity=I,i.eyeMat.opacity=I,e.scale.setScalar(.4+I*.6),I<=0&&(e.visible=!1,i.fading=!1,i.dead=!0,e.position.set(0,-40,0));continue}if(u.falling>0)continue;i.hitTimer>0&&(i.hitTimer-=n,i.hitTimer<=0&&(i.bodyMat.emissive.setHex(0),i.bodyMat.emissiveIntensity=1)),i.knockback.lengthSq()>4e-4&&(e.position.addScaledVector(i.knockback,n),i.knockback.multiplyScalar(Math.exp(-9*n)));let r=!1;i.stunTimer>0&&(i.stunTimer=Math.max(0,i.stunTimer-n),r=!0);const s=Math.hypot(V.position.x-e.position.x,V.position.z-e.position.z);let o=V.position.x,a=V.position.z;i.targetCamp&&s>10&&!u.fireOut&&(o=$t.position.x,a=$t.position.z);let c=o-e.position.x,l=a-e.position.z;const h=Math.hypot(c,l);let d=0,p=0,g=!1;if(h>.35&&!r&&(d=c/h*i.speed*n,p=l/h*i.speed*n,g=!0),t){const I=e.position.x-$t.position.x,b=e.position.z-$t.position.z,A=Math.hypot(I,b)||1,D=I/A,E=b/A;A<Zi()+1.2&&(d+=-E*i.circleDir*i.speed*n*.5,p+=D*i.circleDir*i.speed*n*.5)}let _=e.position.x+d,x=e.position.z+p;if(t){const I=e.position.x-$t.position.x,b=e.position.z-$t.position.z,A=Math.hypot(I,b)||1;A<Zi()-.05&&(_=$t.position.x+I/A*Zi(),x=$t.position.z+b/A*Zi());const D=_-$t.position.x,E=x-$t.position.z;if((Math.hypot(D,E)||1)<Zi()){const P=e.position.x-$t.position.x,z=e.position.z-$t.position.z,B=Math.hypot(P,z)||1;_=$t.position.x+P/B*Zi(),x=$t.position.z+z/B*Zi()}}e.position.x=_,e.position.z=x,Jm(e,.36),Cc(e.position,1.2),e.position.y=Bt(e.position.x,e.position.z);const m=o-e.position.x,f=a-e.position.z;Math.hypot(m,f)>.01&&(e.rotation.y=Math.atan2(m,f));const y=g?.58:.1;i.phase+=n*(3.4+i.speed*1.5)*(g?1:.3);const S=Math.sin(i.phase);i.legs[0].rotation.x=S*y,i.legs[1].rotation.x=-S*y,i.arms[0].rotation.x=-S*y*.8,i.arms[1].rotation.x=S*y*.8,i.bodyGroup.position.y=Math.abs(S)*.035,i.attackCooldown=Math.max(0,i.attackCooldown-n);const T=Math.hypot(V.position.x-e.position.x,V.position.z-e.position.z);!r&&T<1.45&&Math.abs(V.position.y-e.position.y)<2.2&&i.attackCooldown<=0&&u.invuln<=0&&(hE(i.damage),i.attackCooldown=1.05)}}function yE(n){!u.started||u.gameOver||u.falling||(u.hunger=Math.max(0,u.hunger-n*M1),u.hunger<=0?(u.starveTimer+=n,u.starveTimer>=1&&(u.starveTimer-=1,u.health=Math.max(0,u.health-2),u.damageFlash=Math.max(u.damageFlash,.45),ee(),u.health<=0&&Zm())):u.starveTimer=0)}function SE(n){if(u.started&&!u.gameOver&&!u.fireOut){const d=(g1[u.fireLevel]||1)/60;u.fireProgress=Math.max(0,u.fireProgress-d*n),u.fireProgress<=0&&(u.fireProgress=0,u.fireOut=!0,u.fireFlare=0,u.fireBarMessageTimer=0,Ii=!0,Eo.classList.add("visible"),Dt("The fire is out!"),HE())}u.fireFlare=Math.max(0,u.fireFlare-n*1.6),dw(n);const t=!u.fireOut,e=Yt(u.fireProgress/100,0,1),i=u.started&&!u.gameOver&&!u.fireOut&&fE()>0;u.nearFire=i,i&&!u.falling&&(u.health=Yt(u.health+n*3,0,100));const r=1-u.daylight;u.started&&u.fireOut&&r>.5?u.fireDarken=Math.min(1,u.fireDarken+n*.045):u.fireDarken=Math.max(0,u.fireDarken-n*.6),Mn.visible=Mn.visible&&Mn.intensity>.1,Mn.visible&&(Mn.intensity*=.96);const s=performance.now()*.001,o=.85+Math.sin(s*17.3)*.12+Math.sin(s*29.7+.7)*.08,a=1-Math.exp(-7*n);u.fireGrow=Math.min(1,u.fireGrow+a*1.4);const c=u.fireLevel===1?.7:.56,l=c+u.fireGrow*(1-c);nn.scale.setScalar(l),xn.visible=t,vn.visible=t,Yn.visible=t,Ec.visible=t;const h=u.fireEverLit?.58+Math.sin(s*3)*.12:.02;if(To.material.emissiveIntensity=t?.25+e*.55:h,ze&&(ze.visible=t&&u.started,ze.material&&(ze.material.opacity=t?.2+Math.sin(s*1.6)*.035:0)),t){const d=lm[u.fireLevel]||1,p=.42+d*.27,g=Math.sin(s*9)*.06,_=u.fireFlare,x=.82+u.fireLevel*.1;xn.scale.setScalar(((.7+e*.35)*(1+Math.sin(s*12)*.08)+_*.4)*x),xn.position.y=.42+Math.sin(s*6)*.04,xn.rotation.y+=n*2.4;const m=d/1.5*(.95+Math.sin(s*8.5)*.08+_*.35);vn.scale.set(p*(.92+Math.sin(s*7.7)*.06),m,p*(.92+Math.cos(s*7.1)*.06)),vn.position.y=.2+d*.5+Math.sin(s*8.5)*.05,vn.rotation.y+=n*1.9,vn.rotation.z=g;const f=d/1.5*(.88+Math.sin(s*14)*.09+_*.3);Yn.scale.set(p*.5,f,p*.5),Yn.position.y=.18+d*.44+Math.sin(s*10+1)*.04,Yn.rotation.z=-g*.8,fs.intensity=(.7+d*.72+e*.7)*o+_*4,fs.distance=8+d*4,ps.intensity=(.28+d*.28+e*.45)*o+_*2.2,ps.distance=12+d*3.6,Tu.size=.055+(u.fireLevel-1)*.01,Tu.opacity=.5+e*.28+Math.sin(s*13)*.1,rw(n,Yt(.2+e,0,1),u.fireLevel),u.fireLevel>=5&&Ei.forEach((y,S)=>{const T=(s*.3+S/Ei.length)%1;y.position.set(Math.sin(s*.8+S)*.12,1.7+T*4.2,Math.cos(s*.7+S)*.12),y.scale.setScalar(.9+T*2.2),y.material.opacity=.11*(1-T)})}else fs.intensity=0,ps.intensity=0,Ro.setDrawRange(0,0),Ei.forEach(d=>{d.material.opacity=0});if(t){const d=u.fireLevel>=5?.75:1;for(let p=0;p<Ei.length;p+=1){const g=Ei[p],_=(s*.42+p/Ei.length)%1;g.position.set(Math.sin(s*1.4+p)*.14,1.5+_*1.8,Math.cos(s*1.2+p)*.12),g.scale.setScalar(.6+_*1.05),g.material.opacity=.09*(1-_)*d}}if(u.started&&!u.gameOver&&u.health>0){const d=.48+Math.sin(s*14)*.2;fc.intensity=d}}const wE=new Et(7314084),EE=new Et(133647),TE=new Et(8890789),bE=new Et(465186),AE=new Et(14676479),CE=new Et(9417960),RE=new Et(16773840),PE=new Et(11060991),LE=new Et(4851718),_a=new Et,Cl=new Et;function Qm(){const n=1-u.daylight;_a.copy(wE).lerp(EE,n),u.damageFlash>0&&_a.lerp(LE,u.damageFlash*.34),Ge.background.copy(_a),Lh.material.color.copy(_a),Cl.copy(TE).lerp(bE,n),Ge.fog.color.copy(Cl),bh.color.copy(Cl);const t=Math.pow(mr/Math.max(mr,Le),.62);Ge.fog.density=.014*t+n*.042,pu.color.copy(AE).lerp(CE,n),pu.intensity=1-n*.45,Un.color.copy(RE).lerp(PE,n),Un.intensity=1.25-n*.55,Yy.classList.toggle("night",n>.5);const e=u.started&&u.fireEverLit&&u.fireOut?.1+u.fireDarken*.4:0;Qu.style.opacity=String(Yt(n*.3+e,0,.9))}function IE(n){const t=u.cycleTime;u.cycleTime+=n;let e=!1;u.cycleTime>=Zr&&(u.cycleTime-=Zr,e=!0);const i=u.cycleTime;if(i<ir-wl?u.daylight=1:i<ir?u.daylight=1-Au((i-(ir-wl))/wl):i<Zr-Zs?u.daylight=0:u.daylight=Au((i-(Zr-Zs))/Zs),t<ir&&i>=ir&&!u.nightActive&&jm(),t<Zr-Zs&&i>=Zr-Zs)for(const r of qn)r.visible&&!r.userData.fading&&!r.userData.dead&&Ih(r,.3);if(e){if(u.nightActive=!1,xh(),WE(),Dt("You survived the night"),u.night>=u.maxNight){u.victory=!0,u.started=!1,u.gameOver=!0,uE("You Survived","99 nights survived. The camp still burns.","Tap to begin a new run.","Play Again");return}u.night+=1,ee()}}const Rl=new _p,Pe=new R,Pl=new R,ii=new R,Df=new R,xa=new R,Uf=new R,DE=new R,js=new R,ri=[];function UE(n=.016){const t=u.cameraYaw,e=u.cameraPitch,i=Math.cos(e),r=Math.sin(e);Pe.set(V.position.x,V.position.y+TS,V.position.z),Pl.set(Math.sin(t)*i,r,Math.cos(t)*i);const s=u.cameraDistance||th;ii.copy(Pe).addScaledVector(Pl,-s),ii.y+=bS,js.copy(ii).sub(Pe);const o=js.length();o>1e-4&&js.normalize(),ri.length=0;const a=s+3.2;for(const f of De){if(!f.visible)continue;const y=f.position.x-Pe.x,S=f.position.z-Pe.z;y*y+S*S<a*a&&ri.push(f.userData.cameraMeshes[0],f.userData.cameraMeshes[1])}for(const f of zi)f.broken||Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.group);for(const f of hh)Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.mesh);for(const f of po)Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.group);Math.hypot(fe.position.x-Pe.x,fe.position.z-Pe.z)<a&&ri.push(fe),Math.hypot(we.position.x-Pe.x,we.position.z-Pe.z)<a&&ri.push(we);let c=o;if(ri.length>0){Rl.set(Pe,js),Rl.far=o;const f=Rl.intersectObjects(ri,!0);f.length>0&&(c=Math.max(.85,f[0].distance-.24))}ii.copy(Pe).addScaledVector(js,c);const l=Bt(ii.x,ii.z)+.35;ii.y<l&&(ii.y=l),Df.copy(Pe);const h=u.firstPerson?1:0,d=1-Math.exp(-13*n);u.viewBlend+=(h-u.viewBlend)*d,Math.abs(u.viewBlend-h)<.0015&&(u.viewBlend=h);const p=Au(Yt(u.viewBlend,0,1));xa.lerpVectors(ii,Df,p);const g=c<o-.01;if(!u.cameraInitialized)pe.position.copy(xa),u.cameraInitialized=!0;else if(p>.92)pe.position.copy(xa);else{const f=g?Math.min(1,d*3.4):Math.min(1,d*.95);pe.position.lerp(xa,Math.max(.12,f))}const _=Bt(pe.position.x,pe.position.z)+.28;if(pe.position.y<_&&(pe.position.y=_),Cc(pe.position,.45),Uf.copy(Pe).lerp(DE.copy(Pe).addScaledVector(Pl,10),p),pe.lookAt(Uf),Ci>0){const f=performance.now()*.001,y=Ci*.13;pe.position.x+=Math.sin(f*43.7)*y,pe.position.y+=Math.sin(f*51.3+1.7)*y*.6,pe.position.z+=Math.cos(f*47.1+.4)*y}const x=rf+(AS-rf)*p;Math.abs(pe.fov-x)>.01&&(pe.fov=x,pe.updateProjectionMatrix());const m=p>.5;wn.visible=!m,bo.visible=m,$w(m),m&&(pn.visible=!1)}const va=new R;function Pu(n,t){if(va.copy(t).project(pe),va.z>1)return!1;const e=(va.x*.5+.5)*window.innerWidth,i=(-va.y*.5+.5)*window.innerHeight;return n.style.left=`${e}px`,n.style.top=`${i}px`,!0}const ts=new R;function NE(){const n=u.started&&!u.gameOver&&!u.portrait,t=n&&!!Gt&&Gt.popping<=0;if(xl.classList.toggle("visible",t),t){const i=Gt.type;Jy.textContent=ph[i]||Us[i]||"Item";const r=S1[i]||0;if(ua.dataset.count!==String(r)){ua.dataset.count=String(r),ua.replaceChildren();for(let s=0;s<r;s+=1){const o=document.createElement("span");o.className="drag-flame",ua.appendChild(o)}}ts.copy(Gt.mesh.position),ts.y+=.62,Pu(xl,ts)||xl.classList.remove("visible")}const e=n&&Mc()&&!u.firstPerson;Hn.classList.toggle("visible",e),e&&(Hn.textContent=`${Za()}/${u.backpackCapacity}`,ts.copy(V.position),ts.y+=2.4,Pu(Hn,ts)||Hn.classList.remove("visible"))}function FE(n){u.startHintTimer>0&&(u.startHintTimer=Math.max(0,u.startHintTimer-n),u.startHintTimer<=0&&Mp.classList.remove("visible")),pe.updateMatrixWorld();const t=u.started&&!u.gameOver&&!u.portrait&&!u.craftOpen&&Ka()<=am;if(Aa.classList.toggle("hidden",!t),t){const e=new R(fe.position.x,fe.position.y+1.75,fe.position.z);Pu(Aa,e)||Aa.classList.add("hidden")}NE()}const nt={ctx:null,master:null,noiseBuffer:null,started:!1,volume:.7,muted:!1,windGain:null,cricketGain:null,fireGain:null,stepTimer:.22,fireCrackleTimer:.2,birdTimer:2.5,growlTimer:1.8,monsterStepTimer:.5,heartbeatTimer:0};function Nc(){return!!nt.ctx&&nt.started}function Lo(){return nt.ctx?nt.ctx.currentTime:0}function OE(n){const t=Math.floor(n.sampleRate*2),e=n.createBuffer(1,t,n.sampleRate),i=e.getChannelData(0);let r=0;for(let s=0;s<t;s+=1){const o=Math.random()*2-1;r=r*.72+o*.28,i[s]=r*1.15}return e}function Uh(){const n=window.AudioContext||window.webkitAudioContext;if(n)try{if(!nt.ctx){const t=new n;nt.ctx=t,nt.master=t.createGain(),nt.master.gain.value=nt.muted?0:nt.volume,nt.master.connect(t.destination),nt.noiseBuffer=OE(t);const e=t.createBufferSource();e.buffer=nt.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=460,i.Q.value=.55,nt.windGain=t.createGain(),nt.windGain.gain.value=.012,e.connect(i).connect(nt.windGain).connect(nt.master),e.start();const r=t.createBufferSource();r.buffer=nt.noiseBuffer,r.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=4300,s.Q.value=7,nt.cricketGain=t.createGain(),nt.cricketGain.gain.value=1e-4;const o=t.createOscillator();o.type="sine",o.frequency.value=5.1;const a=t.createGain();a.gain.value=.006,o.connect(a).connect(nt.cricketGain.gain),r.connect(s).connect(nt.cricketGain).connect(nt.master),r.start(),o.start();const c=t.createBufferSource();c.buffer=nt.noiseBuffer,c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=760,l.Q.value=.6,nt.fireGain=t.createGain(),nt.fireGain.gain.value=1e-4,c.connect(l).connect(nt.fireGain).connect(nt.master),c.start()}nt.started=!0,nt.ctx.state==="suspended"&&nt.ctx.resume()}catch{nt.started=!1}}function Jt(n,t,e,i="sine",r=.04,s=0,o=.008){if(!Nc())return;const a=nt.ctx,c=Lo()+Math.max(0,s),l=a.createOscillator(),h=a.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(20,n),c),t&&t!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+e),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(r,c+o),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h).connect(nt.master),l.start(c),l.stop(c+e+.04)}function Fe(n,t,e="lowpass",i=900,r=0,s=.8,o=0){if(!Nc())return;const a=nt.ctx,c=Lo()+Math.max(0,o),l=a.createBufferSource();l.buffer=nt.noiseBuffer;const h=a.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(Math.max(40,i),c),r&&h.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+n),h.Q.value=s;const d=a.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+.006),d.gain.exponentialRampToValueAtTime(1e-4,c+n),l.connect(h).connect(d).connect(nt.master),l.start(c,Math.random()*1.2,n+.04)}function Fc(){Jt(520,760,.08,"sine",.045),Jt(880,980,.06,"triangle",.024,.055)}function Fs(){Fe(.035,.025,"highpass",1900,0,.8),Jt(300,220,.055,"square",.018)}function BE(){Jt(1046.5,1046.5,.7,"sine",.055),Jt(1568,1568,.55,"sine",.028,.02),Jt(2093,2093,.4,"triangle",.014,.03)}function t0(){Fe(.34,.065,"lowpass",520,150,.7),Jt(150,82,.32,"sawtooth",.03),Jt(76,52,.28,"square",.022,.03)}function zE(){Jt(240,150,.16,"square",.03)}function kE(){[392,523.25,659.25,783.99,1046.5].forEach((t,e)=>{Jt(t,t,.5,"triangle",.042,e*.09),Jt(t*2,t*2,.3,"sine",.012,e*.09+.01)})}function HE(){Jt(320,180,.5,"sine",.04),Jt(180,90,.7,"triangle",.03,.08),Fe(.5,.03,"lowpass",500,120)}function GE(){Fe(.65,.075,"bandpass",700,220,.9),Jt(160,520,.42,"sawtooth",.032),Jt(392,784,.34,"triangle",.025,.05)}function VE(){Jt(58,29,1.5,"sine",.075,.02,.03),Jt(92,42,1.1,"triangle",.035,.12,.04),Fe(1.35,.085,"lowpass",190,46,.8)}function WE(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{Jt(t,t,.62,"triangle",.045,e*.1),Jt(t*1.5,t*1.5,.34,"sine",.012,e*.1+.01)})}function XE(){Jt(330,120,1.1,"sawtooth",.045,0,.02),Jt(220,82,1.3,"sine",.05,.04,.02),Fe(.9,.025,"lowpass",420,110)}function YE(){Fe(.18,.055,"bandpass",950,260,1.1)}function qE(){Jt(132,52,.18,"sine",.11),Fe(.14,.055,"lowpass",320,130)}function $E(){Fe(.85,.09,"lowpass",950,120,.7),Jt(90,38,.63,"sine",.08,.04),Fe(.35,.04,"bandpass",1800,700,1.4,.08)}function e0(){Jt(1850,1450,.075,"triangle",.038),Jt(2650,2100,.055,"sine",.02,.012),Fe(.045,.025,"highpass",2400,0,.9)}function KE(){e0(),Fe(.38,.08,"lowpass",720,140,.8),Jt(190,60,.34,"sine",.06,.02)}function n0(){Jt(170,70,.14,"sine",.075),Fe(.1,.045,"bandpass",680,250,.9)}function ZE(){Jt(220,360,.15,"sine",.03),Fe(.11,.022,"highpass",900,0)}function i0(){Jt(115,52,.17,"sine",.075),Fe(.12,.04,"lowpass",360,130)}function jE(){const n=72+Math.random()*28;Jt(n,n*.7,.075,"sine",.028),Fe(.075,.022,"lowpass",480+Math.random()*180,0,.7)}function JE(n,t=1){const e=(.008+n*.03)*(1+(t-1)*.3);Fe(.025+Math.random()*.045,e,"highpass",900+Math.random()*1400,0,.9)}function QE(){const n=2100+Math.random()*900,t=2+Math.floor(Math.random()*2);for(let e=0;e<t;e+=1)Jt(n+Math.random()*250,n+700+Math.random()*500,.085,"sine",.018,e*.11,.012)}function tT(n){if(!Nc())return;const t=nt.ctx,e=Lo(),i=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(76,e),i.frequency.exponentialRampToValueAtTime(44,e+.75),r.type="lowpass",r.frequency.value=190,r.Q.value=1.2,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.012+n*.045,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+.78),i.connect(r).connect(s).connect(nt.master),i.start(e),i.stop(e+.82),Fe(.5,.008+n*.018,"lowpass",260,90)}function eT(n){const t=.01+n*.045;Jt(62,34,.12,"sine",t),Fe(.1,t*.55,"lowpass",250,100)}function nT(n){const t=.018+n*.055;Jt(58,44,.1,"sine",t),Jt(52,38,.12,"sine",t*.7,.16)}function r0(){Ca.classList.toggle("muted",nt.muted),Ca.setAttribute("aria-pressed",String(nt.muted)),Ca.setAttribute("aria-label",nt.muted?"Unmute sound":"Mute sound")}function s0(){if(!nt.master)return;const n=Lo(),t=nt.muted?0:nt.volume;nt.master.gain.cancelScheduledValues(n),nt.master.gain.setValueAtTime(nt.master.gain.value,n),nt.master.gain.linearRampToValueAtTime(t,n+.06)}function o0(n){nt.volume=Yt(n,0,1),s0(),yS.textContent=`${Math.round(nt.volume*100)}%`}function iT(){Uh(),nt.muted=!nt.muted,s0(),r0(),Fs()}function Tr(n){u.settingsOpen=n,vS.classList.toggle("hidden",!n),bp.setAttribute("aria-expanded",String(n)),n&&(Hi(),pi(!1)),Ns()}function rT(n){if(!Nc())return;const t=Lo(),e=1-u.daylight,i=u.started&&!u.gameOver&&!u.paused,r=!u.started||u.gameOver||u.paused;nt.windGain.gain.setTargetAtTime(r?.007:.007+u.daylight*.03+e*.012,t,.7),nt.cricketGain.gain.setTargetAtTime(r?1e-4:e*.017,t,.85);const s=_c(),o=Yt(1-s/18,0,1),a=u.started&&!u.fireOut&&!u.gameOver,c=Yt(u.fireProgress/100,0,1),l=1+(u.fireLevel-1)*.32;nt.fireGain.gain.setTargetAtTime(a?(.004+o*.042)*(.45+c*.55)*l:1e-4,t,.35),a&&!u.paused&&o>.04&&(nt.fireCrackleTimer-=n,nt.fireCrackleTimer<=0&&(JE(o,u.fireLevel),nt.fireCrackleTimer=.13+Math.random()*.42+(1-o)*.55-(u.fireLevel-1)*.035)),i&&u.daylight>.55?(nt.birdTimer-=n*(.7+u.daylight*.7),nt.birdTimer<=0&&(QE(),nt.birdTimer=3+Math.random()*6)):nt.birdTimer=Math.max(nt.birdTimer,1.5),i&&u.grounded&&u.moveSpeed>.1&&u.falling<=0?(nt.stepTimer-=n*(.8+u.moveSpeed/Na*.8),nt.stepTimer<=0&&(jE(),nt.stepTimer=.31)):nt.stepTimer=Math.min(nt.stepTimer,.16);let h=null,d=1/0;if(i)for(const p of qn){if(!p.visible||p.userData.fading)continue;const g=Math.hypot(V.position.x-p.position.x,V.position.z-p.position.z);g<d&&(d=g,h=p)}if(h&&d<21){const p=Yt(1-d/21,0,1);nt.growlTimer-=n*(1+p*2.2),nt.growlTimer<=0&&(tT(p),nt.growlTimer=2.8+Math.random()*4.5),nt.monsterStepTimer-=n*(1+p*.8),nt.monsterStepTimer<=0&&(eT(p),nt.monsterStepTimer=.45+Math.random()*.35),d<15?(nt.heartbeatTimer-=n,nt.heartbeatTimer<=0&&(nT(p),nt.heartbeatTimer=1.15-p*.72+Math.random()*.08)):nt.heartbeatTimer=0}else nt.growlTimer=Math.max(nt.growlTimer,1.4),nt.monsterStepTimer=Math.max(nt.monsterStepTimer,.4),nt.heartbeatTimer=0}window.addEventListener("pointerdown",Uh,{capture:!0,passive:!0});window.addEventListener("keydown",Uh,{capture:!0});Ca.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),iT()});to.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),zw()});bp.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Tr(!u.settingsOpen)});MS.addEventListener("pointerdown",n=>{n.preventDefault(),Tr(!1)});nf.addEventListener("input",()=>{o0(Number(nf.value)/100)});o0(nt.volume);r0();Vm(u.firstPerson,!1);function a0(){requestAnimationFrame(a0);const n=SS.getDelta(),t=Math.min(n,.033),e=qm();if(e!==u.portrait&&(u.portrait=e,document.body.classList.toggle("portrait",e),e&&(Lc(),xr.clear(),u.look.active=!1,u.pinchDistance=0,u.keys.clear(),u.jumpHeld=!1)),u.paused=e,!e){if(u.attackCooldown=Math.max(0,u.attackCooldown-t),u.attackTimer=Math.max(0,u.attackTimer-t),u.chopTimer=Math.max(0,u.chopTimer-t),u.swingCooldown=Math.max(0,u.swingCooldown-t),u.plantCooldown=Math.max(0,u.plantCooldown-t),u.dropCooldown=Math.max(0,u.dropCooldown-t),u.invuln=Math.max(0,u.invuln-t),qw(t),pn.visible=u.attackTimer>0,u.attackTimer>0){const i=1-u.attackTimer/pc;pn.scale.setScalar(.7+i*.6),pn.material.opacity=.8*(1-i),pn.rotation.z=i*.55}u.hitEffectTimer>0?(u.hitEffectTimer=Math.max(0,u.hitEffectTimer-t),fn.visible=!0,fn.scale.setScalar(.8+(1-u.hitEffectTimer/.22)*1.5),fn.material.opacity=u.hitEffectTimer/.22,fn.rotation.y+=t*10):fn.visible=!1,os>0&&(os=Math.max(0,os-n),os<=0&&ho.classList.remove("visible")),eo>0&&(eo=Math.max(0,eo-n),eo<=0&&hu.classList.remove("visible")),u.started&&!u.gameOver?(IE(t),u.falling>0?(u.falling=Math.max(0,u.falling-t),u.falling<=0&&dE()):xE(t),Mw(Math.min(n,.2)),Dw(),Cc(V.position),Lf(t),ME(t),yE(t),mf(),Mf(t),vf(t),ew(t),nw(t),SE(t),tw(t),j1(t),z1(t),ee()):(u.moveSpeed=0,Lf(t),mf(),Mf(t),vf(t),ee()),vE(t),Kw(t),rE(),u.damageFlash>0&&(u.damageFlash=Math.max(0,u.damageFlash-t*1.5))}u.victory&&!u.started&&ai.classList.remove("hidden"),uw(Math.min(n,.2)),rT(t),Qm(),UE(t),Lh.position.copy(pe.position),FE(t),T1(t),Ls.render(Ge,pe)}window.addEventListener("resize",()=>{pe.aspect=window.innerWidth/window.innerHeight,pe.updateProjectionMatrix(),Ls.setSize(window.innerWidth,window.innerHeight)});xh();_m();Ph(1);ze&&(ze.visible=!1);Ss();ee();Qm();document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{Ii=!0});a0();
