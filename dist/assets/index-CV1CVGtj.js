(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="167",e0=0,Lh=1,n0=2,bf=1,Af=2,si=3,Ri=0,qe=1,Tn=2,bi=0,ns=1,Pi=2,Ih=3,Dh=4,i0=5,Zi=100,r0=101,s0=102,o0=103,a0=104,c0=200,l0=201,u0=202,h0=203,wl=204,El=205,d0=206,f0=207,p0=208,m0=209,g0=210,_0=211,x0=212,v0=213,M0=214,y0=0,S0=1,w0=2,Ca=3,E0=4,T0=5,b0=6,A0=7,Cf=0,C0=1,R0=2,Ai=0,P0=1,L0=2,I0=3,D0=4,U0=5,N0=6,F0=7,Rf=300,us=301,hs=302,Tl=303,bl=304,Va=306,Al=1e3,Qi=1001,Cl=1002,en=1003,O0=1004,Co=1005,bn=1006,Uc=1007,tr=1008,hi=1009,Pf=1010,Lf=1011,no=1012,wu=1013,cr=1014,zn=1015,fo=1016,Eu=1017,Tu=1018,ds=1020,If=35902,Df=1021,Uf=1022,Pn=1023,Nf=1024,Ff=1025,is=1026,fs=1027,bu=1028,Au=1029,Of=1030,Cu=1031,Ru=1033,fa=33776,pa=33777,ma=33778,ga=33779,Rl=35840,Pl=35841,Ll=35842,Il=35843,Dl=36196,Ul=37492,Nl=37496,Fl=37808,Ol=37809,Bl=37810,kl=37811,zl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,$l=37820,Kl=37821,_a=36492,Zl=36494,jl=36495,Bf=36283,Jl=36284,Ql=36285,tu=36286,B0=3200,k0=3201,kf=0,z0=1,Ei="",tn="srgb",Di="srgb-linear",Pu="display-p3",Wa="display-p3-linear",Ra="linear",me="srgb",Pa="rec709",La="p3",Sr=7680,Uh=519,H0=512,G0=513,V0=514,zf=515,W0=516,X0=517,q0=518,Y0=519,rs=35044,Nh="300 es",ci=2e3,Ia=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const Js=Math.PI/180,io=180/Math.PI;function li(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Ze(n,t,e){return Math.max(t,Math.min(e,n))}function Lu(n,t){return(n%t+t)%t}function $0(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function K0(n,t,e){return n!==t?(e-n)/(t-n):0}function Qs(n,t,e){return(1-e)*n+e*t}function Z0(n,t,e,i){return Qs(n,t,1-Math.exp(-e*i))}function j0(n,t=1){return t-Math.abs(Lu(n,t*2)-t)}function J0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Q0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function tg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function eg(n,t){return n+Math.random()*(t-n)}function ng(n){return n*(.5-Math.random())}function ig(n){n!==void 0&&(Fh=n);let t=Fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rg(n){return n*Js}function sg(n){return n*io}function og(n){return(n&n-1)===0&&n!==0}function ag(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lg(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),p=o((t-i)/2),g=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*g,a*l);break;case"YXY":n.set(c*g,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hf={DEG2RAD:Js,RAD2DEG:io,generateUUID:li,clamp:Ze,euclideanModulo:Lu,mapLinear:$0,inverseLerp:K0,lerp:Qs,damp:Z0,pingpong:j0,smoothstep:J0,smootherstep:Q0,randInt:tg,randFloat:eg,randFloatSpread:ng,seededRandom:ig,degToRad:rg,radToDeg:sg,isPowerOfTwo:og,ceilPowerOfTwo:ag,floorPowerOfTwo:cg,setQuaternionFromProperEuler:lg,normalize:ce,denormalize:An};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,r,s,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],p=i[2],g=i[5],_=i[8],x=r[0],m=r[3],f=r[6],y=r[1],S=r[4],T=r[7],I=r[2],b=r[5],A=r[8];return s[0]=o*x+a*y+c*I,s[3]=o*m+a*S+c*b,s[6]=o*f+a*T+c*A,s[1]=l*x+h*y+d*I,s[4]=l*m+h*S+d*b,s[7]=l*f+h*T+d*A,s[2]=p*x+g*y+_*I,s[5]=p*m+g*S+_*b,s[8]=p*f+g*T+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,p=a*c-h*s,g=l*s-o*c,_=e*d+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=d*x,t[1]=(r*l-h*i)*x,t[2]=(a*i-r*o)*x,t[3]=p*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-a*e)*x,t[6]=g*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new zt;function Gf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ug(){const n=Da("canvas");return n.style.display="block",n}const Oh={};function ss(n){n in Oh||(Oh[n]=!0,console.warn(n))}function hg(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Bh=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[Di]:{transfer:Ra,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[tn]:{transfer:me,primaries:Pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wa]:{transfer:Ra,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Bh)},[Pu]:{transfer:me,primaries:La,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(kh),fromReference:n=>n.applyMatrix3(Bh).convertLinearToSRGB()}},dg=new Set([Di,Wa]),oe={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Is[t].toReference,r=Is[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Is[n].primaries},getTransfer:function(n){return n===Ei?Ra:Is[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Is[t].luminanceCoefficients)}};function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wr;class fg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wr===void 0&&(wr=Da("canvas")),wr.width=t.width,wr.height=t.height;const i=wr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Da("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(os(e[i]/255)*255):e[i]=os(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pg=0;class Vf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oc(r[o].image)):s.push(Oc(r[o]))}else s=Oc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mg=0;class Ye extends ws{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Qi,r=Qi,s=bn,o=tr,a=Pn,c=hi,l=Ye.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=li(),this.name="",this.source=new Vf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Rf;Ye.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,r=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],g=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(g+1)/2,I=(f+1)/2,b=(h+p)/4,A=(d+x)/4,D=(_+m)/4;return S>T&&S>I?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=A/i):T>I?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=D/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-x)/y,this.z=(p-h)/y,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gg extends ws{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ye(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends gg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wf extends Ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends Ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const p=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=x;return}if(d!==x||c!==p||l!==g||h!==_){let m=1-a;const f=c*p+l*g+h*_+d*x,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const I=Math.sqrt(S),b=Math.atan2(I,f*y);m=Math.sin(m*b)/I,a=Math.sin(a*b)/I}const T=a*y;if(c=c*m+p*T,l=l*m+g*T,h=h*m+_*T,d=d*m+x*T,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[o],p=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+h*d+c*g-l*p,t[e+1]=c*_+h*p+l*d-a*g,t[e+2]=l*_+h*g+a*p-c*d,t[e+3]=h*_-a*d-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),d=a(s/2),p=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"YXZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"ZXY":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"ZYX":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"YZX":this._x=p*h*d+l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d-p*g*_;break;case"XZY":this._x=p*h*d-l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=i+a+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-s*d,this.z=r+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new R,zh=new po;class mr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Po.subVectors(this.max,Ds),Er.subVectors(t.a,Ds),Tr.subVectors(t.b,Ds),br.subVectors(t.c,Ds),mi.subVectors(Tr,Er),gi.subVectors(br,Tr),Bi.subVectors(Er,br);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!kc(e,Er,Tr,br,Po)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,Er,Tr,br,Po))?!1:(Lo.crossVectors(mi,gi),e=[Lo.x,Lo.y,Lo.z],kc(e,Er,Tr,br,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,Ro=new mr,Er=new R,Tr=new R,br=new R,mi=new R,gi=new R,Bi=new R,Ds=new R,Po=new R,Lo=new R,ki=new R;function kc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ki.fromArray(n,s);const a=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const xg=new mr,Us=new R,zc=new R;class gr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xg.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(zc)),this.expandByPoint(Us.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new R,Hc=new R,Io=new R,_i=new R,Gc=new R,Do=new R,Vc=new R;class Xa{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Hc.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Hc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=_i.dot(this.direction),c=-_i.dot(Io),l=_i.lengthSq(),h=Math.abs(1-o*o);let d,p,g,_;if(h>0)if(d=o*c-a,p=o*a-c,_=s*h,d>=0)if(p>=-_)if(p<=_){const x=1/h;d*=x,p*=x,g=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hc).addScaledVector(Io,p),g}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,r,s){Gc.subVectors(e,t),Do.subVectors(i,t),Vc.crossVectors(Gc,Do);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);const c=a*this.direction.dot(Do.crossVectors(_i,Do));if(c<0)return null;const l=a*this.direction.dot(Gc.cross(_i));if(l<0||c+l>o)return null;const h=-a*_i.dot(Vc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m)}set(t,e,i,r,s,o,a,c,l,h,d,p,g,_,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=g,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ar.setFromMatrixColumn(t,0).length(),s=1/Ar.setFromMatrixColumn(t,1).length(),o=1/Ar.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=o*h,g=o*d,_=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=g+_*l,e[5]=p-x*l,e[9]=-a*c,e[2]=x-p*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*d,_=l*h,x=l*d;e[0]=p+x*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=x+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*d,_=l*h,x=l*d;e[0]=p-x*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=x-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*d,_=a*h,x=a*d;e[0]=c*h,e[4]=_*l-g,e[8]=p*l+x,e[1]=c*d,e[5]=x*l+p,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-p*d,e[8]=_*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*d+_,e[10]=p-x*d}else if(t.order==="XZY"){const p=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+x,e[5]=o*h,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*h,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vg,t,Mg)}lookAt(t,e,i){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(i,an),xi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(i,an)),xi.normalize(),Uo.crossVectors(an,xi),r[0]=xi.x,r[4]=Uo.x,r[8]=an.x,r[1]=xi.y,r[5]=Uo.y,r[9]=an.y,r[2]=xi.z,r[6]=Uo.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],p=i[9],g=i[13],_=i[2],x=i[6],m=i[10],f=i[14],y=i[3],S=i[7],T=i[11],I=i[15],b=r[0],A=r[4],D=r[8],E=r[12],v=r[1],P=r[5],k=r[9],O=r[13],V=r[2],$=r[6],X=r[10],j=r[14],W=r[3],ht=r[7],mt=r[11],Mt=r[15];return s[0]=o*b+a*v+c*V+l*W,s[4]=o*A+a*P+c*$+l*ht,s[8]=o*D+a*k+c*X+l*mt,s[12]=o*E+a*O+c*j+l*Mt,s[1]=h*b+d*v+p*V+g*W,s[5]=h*A+d*P+p*$+g*ht,s[9]=h*D+d*k+p*X+g*mt,s[13]=h*E+d*O+p*j+g*Mt,s[2]=_*b+x*v+m*V+f*W,s[6]=_*A+x*P+m*$+f*ht,s[10]=_*D+x*k+m*X+f*mt,s[14]=_*E+x*O+m*j+f*Mt,s[3]=y*b+S*v+T*V+I*W,s[7]=y*A+S*P+T*$+I*ht,s[11]=y*D+S*k+T*X+I*mt,s[15]=y*E+S*O+T*j+I*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],g=t[14],_=t[3],x=t[7],m=t[11],f=t[15];return _*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*g-i*c*g)+x*(+e*c*g-e*l*p+s*o*p-r*o*g+r*l*h-s*c*h)+m*(+e*l*d-e*a*g-s*o*d+i*o*g+s*a*h-i*l*h)+f*(-r*a*h-e*c*d+e*a*p+r*o*d-i*o*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],g=t[11],_=t[12],x=t[13],m=t[14],f=t[15],y=d*m*l-x*p*l+x*c*g-a*m*g-d*c*f+a*p*f,S=_*p*l-h*m*l-_*c*g+o*m*g+h*c*f-o*p*f,T=h*x*l-_*d*l+_*a*g-o*x*g-h*a*f+o*d*f,I=_*d*c-h*x*c-_*a*p+o*x*p+h*a*m-o*d*m,b=e*y+i*S+r*T+s*I;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(x*p*s-d*m*s-x*r*g+i*m*g+d*r*f-i*p*f)*A,t[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*f+i*c*f)*A,t[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*g-i*c*g)*A,t[4]=S*A,t[5]=(h*m*s-_*p*s+_*r*g-e*m*g-h*r*f+e*p*f)*A,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*f-e*c*f)*A,t[7]=(o*p*s-h*c*s+h*r*l-e*p*l-o*r*g+e*c*g)*A,t[8]=T*A,t[9]=(_*d*s-h*x*s-_*i*g+e*x*g+h*i*f-e*d*f)*A,t[10]=(o*x*s-_*a*s+_*i*l-e*x*l-o*i*f+e*a*f)*A,t[11]=(h*a*s-o*d*s-h*i*l+e*d*l+o*i*g-e*a*g)*A,t[12]=I*A,t[13]=(h*x*r-_*d*r+_*i*p-e*x*p-h*i*m+e*d*m)*A,t[14]=(_*a*r-o*x*r-_*i*c+e*x*c+o*i*m-e*a*m)*A,t[15]=(o*d*r-h*a*r+h*i*c-e*d*c-o*i*p+e*a*p)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,p=s*l,g=s*h,_=s*d,x=o*h,m=o*d,f=a*d,y=c*l,S=c*h,T=c*d,I=i.x,b=i.y,A=i.z;return r[0]=(1-(x+f))*I,r[1]=(g+T)*I,r[2]=(_-S)*I,r[3]=0,r[4]=(g-T)*b,r[5]=(1-(p+f))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(_+S)*A,r[9]=(m-y)*A,r[10]=(1-(p+x))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const o=Ar.set(r[4],r[5],r[6]).length(),a=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const l=1/s,h=1/o,d=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ci){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(a===ci)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ia)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ci){const c=this.elements,l=1/(e-t),h=1/(i-r),d=1/(o-s),p=(e+t)*l,g=(i+r)*h;let _,x;if(a===ci)_=(o+s)*d,x=-2*d;else if(a===Ia)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ar=new R,Sn=new ue,vg=new R(0,0,0),Mg=new R(1,1,1),xi=new R,Uo=new R,an=new R,Hh=new ue,Gh=new po;class $n{constructor(t=0,e=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yg=0;const Vh=new R,Cr=new po,ti=new ue,No=new R,Ns=new R,Sg=new R,wg=new po,Wh=new R(1,0,0),Xh=new R(0,1,0),qh=new R(0,0,1),Yh={type:"added"},Eg={type:"removed"},Rr={type:"childadded",child:null},Wc={type:"childremoved",child:null};class Ee extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new R,e=new $n,i=new po,r=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ns,No,this.up):ti.lookAt(No,Ns,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(ti),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Sg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ee.DEFAULT_UP=new R(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new R,ei=new R,Xc=new R,ni=new R,Pr=new R,Lr=new R,$h=new R,qc=new R,Yc=new R,$c=new R;class Cn{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),wn.subVectors(t,e),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){wn.subVectors(r,e),ei.subVectors(i,e),Xc.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(ei),c=wn.dot(Xc),l=ei.dot(ei),h=ei.dot(Xc),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,g=(l*c-a*h)*p,_=(o*h-a*c)*p;return s.set(1-g-_,_,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static isFrontFacing(t,e,i,r){return wn.subVectors(i,e),ei.subVectors(t,e),wn.cross(ei).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),wn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,i),Lr.subVectors(s,i),qc.subVectors(t,i);const c=Pr.dot(qc),l=Lr.dot(qc);if(c<=0&&l<=0)return e.copy(i);Yc.subVectors(t,r);const h=Pr.dot(Yc),d=Lr.dot(Yc);if(h>=0&&d<=h)return e.copy(r);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Pr,o);$c.subVectors(t,s);const g=Pr.dot($c),_=Lr.dot($c);if(_>=0&&g<=_)return e.copy(s);const x=g*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Lr,a);const m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return $h.subVectors(s,r),a=(d-h)/(d-h+(g-_)),e.copy(r).addScaledVector($h,a);const f=1/(m+x+p);return o=x*f,a=p*f,e.copy(i).addScaledVector(Pr,o).addScaledVector(Lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Kc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=oe.workingColorSpace){if(t=Lu(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Kc(o,s,t+1/3),this.g=Kc(o,s,t),this.b=Kc(o,s,t-1/3)}return oe.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const i=Xf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Fc(t.r),this.g=Fc(t.g),this.b=Fc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return oe.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ze(Ge.r*255,0,255))*65536+Math.round(Ze(Ge.g*255,0,255))*256+Math.round(Ze(Ge.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,r=Ge.g,s=Ge.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=tn){oe.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,r=Ge.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Fo);const i=Qs(vi.h,Fo.h,e),r=Qs(vi.s,Fo.s,e),s=Qs(vi.l,Fo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Et;Et.NAMES=Xf;let Tg=0;class Ui extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ns,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=El,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class nn extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new R,Oo=new Pt;class je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ss("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rs&&(t.usage=this.usage),t}}class qf extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yf extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let bg=0;const fn=new ue,Zc=new Ee,Ir=new R,cn=new mr,Fs=new mr,Fe=new R;class Ne extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?Yf:qf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(cn.min,Fs.min),cn.expandByPoint(Fe),Fe.addVectors(cn.max,Fs.max),cn.expandByPoint(Fe)):(cn.expandByPoint(Fs.min),cn.expandByPoint(Fs.max))}cn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Ir.fromBufferAttribute(t,l),Fe.add(Ir)),r=Math.max(r,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new R,c[D]=new R;const l=new R,h=new R,d=new R,p=new Pt,g=new Pt,_=new Pt,x=new R,m=new R;function f(D,E,v){l.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,v),p.fromBufferAttribute(s,D),g.fromBufferAttribute(s,E),_.fromBufferAttribute(s,v),h.sub(l),d.sub(l),g.sub(p),_.sub(p);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(P),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(P),a[D].add(x),a[E].add(x),a[v].add(x),c[D].add(m),c[E].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,E=y.length;D<E;++D){const v=y[D],P=v.start,k=v.count;for(let O=P,V=P+k;O<V;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new R,T=new R,I=new R,b=new R;function A(D){I.fromBufferAttribute(r,D),b.copy(I);const E=a[D];S.copy(E),S.sub(I.multiplyScalar(I.dot(E))).normalize(),T.crossVectors(b,E);const P=T.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,E=y.length;D<E;++D){const v=y[D],P=v.start,k=v.count;for(let O=P,V=P+k;O<V;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let g=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?g=c[x]*a.data.stride+a.offset:g=c[x]*h;for(let f=0;f<h;f++)p[_++]=l[g++]}return new je(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],g=t(p,i);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const g=l[d];h.push(g.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new ue,zi=new Xa,Bo=new gr,Zh=new R,Dr=new R,Ur=new R,Nr=new R,jc=new R,ko=new R,zo=new Pt,Ho=new Pt,Go=new Pt,jh=new R,Jh=new R,Qh=new R,Vo=new R,Wo=new R;class B extends Ee{constructor(t=new Ne,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(jc.fromBufferAttribute(d,t),o?ko.addScaledVector(jc,h):ko.addScaledVector(jc.sub(e),h))}e.add(ko)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),zi.copy(t.ray).recast(t.near),!(Bo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Bo,Zh)===null||zi.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Kh.copy(s).invert(),zi.copy(t.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let T=y,I=S;T<I;T+=3){const b=a.getX(T),A=a.getX(T+1),D=a.getX(T+2);r=Xo(this,f,t,i,l,h,d,b,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const y=a.getX(m),S=a.getX(m+1),T=a.getX(m+2);r=Xo(this,o,t,i,l,h,d,y,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),S=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let T=y,I=S;T<I;T+=3){const b=T,A=T+1,D=T+2;r=Xo(this,f,t,i,l,h,d,b,A,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const y=m,S=m+1,T=m+2;r=Xo(this,o,t,i,l,h,d,y,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Ag(n,t,e,i,r,s,o,a){let c;if(t.side===qe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Ri,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wo);return l<e.near||l>e.far?null:{distance:l,point:Wo.clone(),object:n}}function Xo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Dr),n.getVertexPosition(c,Ur),n.getVertexPosition(l,Nr);const h=Ag(n,t,e,i,Dr,Ur,Nr,Vo);if(h){r&&(zo.fromBufferAttribute(r,a),Ho.fromBufferAttribute(r,c),Go.fromBufferAttribute(r,l),h.uv=Cn.getInterpolation(Vo,Dr,Ur,Nr,zo,Ho,Go,new Pt)),s&&(zo.fromBufferAttribute(s,a),Ho.fromBufferAttribute(s,c),Go.fromBufferAttribute(s,l),h.uv1=Cn.getInterpolation(Vo,Dr,Ur,Nr,zo,Ho,Go,new Pt)),o&&(jh.fromBufferAttribute(o,a),Jh.fromBufferAttribute(o,c),Qh.fromBufferAttribute(o,l),h.normal=Cn.getInterpolation(Vo,Dr,Ur,Nr,jh,Jh,Qh,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Cn.getNormal(Dr,Ur,Nr,d.normal),h.face=d}return h}class wt extends Ne{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let p=0,g=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(d,2));function _(x,m,f,y,S,T,I,b,A,D,E){const v=T/A,P=I/D,k=T/2,O=I/2,V=b/2,$=A+1,X=D+1;let j=0,W=0;const ht=new R;for(let mt=0;mt<X;mt++){const Mt=mt*P-O;for(let Kt=0;Kt<$;Kt++){const he=Kt*v-k;ht[x]=he*y,ht[m]=Mt*S,ht[f]=V,l.push(ht.x,ht.y,ht.z),ht[x]=0,ht[m]=0,ht[f]=b>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Kt/A),d.push(1-mt/D),j+=1}}for(let mt=0;mt<D;mt++)for(let Mt=0;Mt<A;Mt++){const Kt=p+Mt+$*mt,he=p+Mt+$*(mt+1),q=p+(Mt+1)+$*(mt+1),et=p+(Mt+1)+$*mt;c.push(Kt,he,et),c.push(he,q,et),W+=6}a.addGroup(g,W,E),g+=W,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=ps(n[e]);for(const r in i)t[r]=i[r]}return t}function Cg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $f(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Rg={clone:ps,merge:Ke};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kf extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new R,td=new Pt,ed=new Pt;class ln extends Kf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,td,ed),e.subVectors(ed,td)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fr=-90,Or=1;class Ig extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Fr,Or,t,e);r.layers=this.layers,this.add(r);const s=new ln(Fr,Or,t,e);s.layers=this.layers,this.add(s);const o=new ln(Fr,Or,t,e);o.layers=this.layers,this.add(o);const a=new ln(Fr,Or,t,e);a.layers=this.layers,this.add(a);const c=new ln(Fr,Or,t,e);c.layers=this.layers,this.add(c);const l=new ln(Fr,Or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(d,p,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zf extends Ye{constructor(t,e,i,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends lr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Zf(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:bi});s.uniforms.tEquirect.value=e;const o=new B(r,s),a=e.minFilter;return e.minFilter===tr&&(e.minFilter=bn),new Ig(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Jc=new R,Ug=new R,Ng=new zt;class qi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Jc.subVectors(i,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ng.getNormalMatrix(t),r=this.coplanarPoint(Jc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new gr,qo=new R;class Du{constructor(t=new qi,e=new qi,i=new qi,r=new qi,s=new qi,o=new qi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],x=r[10],m=r[11],f=r[12],y=r[13],S=r[14],T=r[15];if(i[0].setComponents(c-s,p-l,m-g,T-f).normalize(),i[1].setComponents(c+s,p+l,m+g,T+f).normalize(),i[2].setComponents(c+o,p+h,m+_,T+y).normalize(),i[3].setComponents(c-o,p-h,m-_,T-y).normalize(),i[4].setComponents(c-a,p-d,m-x,T-S).normalize(),e===ci)i[5].setComponents(c+a,p+d,m+x,T+S).normalize();else if(e===Ia)i[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(qo.x=r.normal.x>0?t.max.x:t.min.x,qo.y=r.normal.y>0?t.max.y:t.min.y,qo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Fg(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c._updateRange,p=c.updateRanges;if(n.bindBuffer(l,a),d.count===-1&&p.length===0&&n.bufferSubData(l,0,h),p.length!==0){for(let g=0,_=p.length;g<_;g++){const x=p[g];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class _r extends Ne{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,d=t/a,p=e/c,g=[],_=[],x=[],m=[];for(let f=0;f<h;f++){const y=f*p-o;for(let S=0;S<l;S++){const T=S*d-s;_.push(T,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const S=y+l*f,T=y+l*(f+1),I=y+1+l*(f+1),b=y+1+l*f;g.push(S,T,b),g.push(T,I,b)}this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c_=`vec3 transformedNormal = objectNormal;
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
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",p_=`
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
}`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
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
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
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
#endif`,N_=`struct PhysicalMaterial {
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
}`,F_=`
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Vx=`#if DEPTH_PACKING == 3200
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,Qx=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,ev=`#define MATCAP
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
}`,nv=`#define NORMAL
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
}`,iv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,sv=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,av=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,lv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,hv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,pv=`uniform float rotation;
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
}`,mv=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:kg,alphamap_pars_fragment:zg,alphatest_fragment:Hg,alphatest_pars_fragment:Gg,aomap_fragment:Vg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:$g,bsdfs:Kg,iridescence_fragment:Zg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:t_,clipping_planes_vertex:e_,color_fragment:n_,color_pars_fragment:i_,color_pars_vertex:r_,color_vertex:s_,common:o_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:c_,displacementmap_pars_vertex:l_,displacementmap_vertex:u_,emissivemap_fragment:h_,emissivemap_pars_fragment:d_,colorspace_fragment:f_,colorspace_pars_fragment:p_,envmap_fragment:m_,envmap_common_pars_fragment:g_,envmap_pars_fragment:__,envmap_pars_vertex:x_,envmap_physical_pars_fragment:R_,envmap_vertex:v_,fog_vertex:M_,fog_pars_vertex:y_,fog_fragment:S_,fog_pars_fragment:w_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:T_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:A_,lights_pars_begin:C_,lights_toon_fragment:P_,lights_toon_pars_fragment:L_,lights_phong_fragment:I_,lights_phong_pars_fragment:D_,lights_physical_fragment:U_,lights_physical_pars_fragment:N_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:B_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:H_,logdepthbuf_vertex:G_,map_fragment:V_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:$_,morphinstance_vertex:K_,morphcolor_vertex:Z_,morphnormal_vertex:j_,morphtarget_pars_vertex:J_,morphtarget_vertex:Q_,normal_fragment_begin:tx,normal_fragment_maps:ex,normal_pars_fragment:nx,normal_pars_vertex:ix,normal_vertex:rx,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:cx,iridescence_pars_fragment:lx,opaque_fragment:ux,packing:hx,premultiplied_alpha_fragment:dx,project_vertex:fx,dithering_fragment:px,dithering_pars_fragment:mx,roughnessmap_fragment:gx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:vx,shadowmap_vertex:Mx,shadowmask_pars_fragment:yx,skinbase_vertex:Sx,skinning_pars_vertex:wx,skinning_vertex:Ex,skinnormal_vertex:Tx,specularmap_fragment:bx,specularmap_pars_fragment:Ax,tonemapping_fragment:Cx,tonemapping_pars_fragment:Rx,transmission_fragment:Px,transmission_pars_fragment:Lx,uv_pars_fragment:Ix,uv_pars_vertex:Dx,uv_vertex:Ux,worldpos_vertex:Nx,background_vert:Fx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:kx,cube_vert:zx,cube_frag:Hx,depth_vert:Gx,depth_frag:Vx,distanceRGBA_vert:Wx,distanceRGBA_frag:Xx,equirect_vert:qx,equirect_frag:Yx,linedashed_vert:$x,linedashed_frag:Kx,meshbasic_vert:Zx,meshbasic_frag:jx,meshlambert_vert:Jx,meshlambert_frag:Qx,meshmatcap_vert:tv,meshmatcap_frag:ev,meshnormal_vert:nv,meshnormal_frag:iv,meshphong_vert:rv,meshphong_frag:sv,meshphysical_vert:ov,meshphysical_frag:av,meshtoon_vert:cv,meshtoon_frag:lv,points_vert:uv,points_frag:hv,shadow_vert:dv,shadow_frag:fv,sprite_vert:pv,sprite_frag:mv},at={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Et(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ke([at.points,at.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ke([at.common,at.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ke([at.sprite,at.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ke([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ke([at.lights,at.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Bn.physical={uniforms:Ke([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Yo={r:0,b:0,g:0},Gi=new $n,gv=new ue;function _v(n,t,e,i,r,s,o){const a=new Et(0);let c=s===!0?0:1,l,h,d=null,p=0,g=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const T=_(y);T===null?f(a,c):T&&T.isColor&&(f(T,1),S=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===Va)?(h===void 0&&(h=new B(new wt(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:ps(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Gi.copy(S.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gv.makeRotationFromEuler(Gi)),h.material.toneMapped=oe.getTransfer(T.colorSpace)!==me,(d!==T||p!==T.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new B(new _r(2,2),new Li({name:"BackgroundMaterial",uniforms:ps(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=oe.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,p=T.version,g=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,S){y.getRGB(Yo,$f(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:x,addToRenderList:m}}function xv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(v,P,k,O,V){let $=!1;const X=d(O,k,P);s!==X&&(s=X,l(s.object)),$=g(v,O,k,V),$&&_(v,O,k,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(v,P,k,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,P,k){const O=k.wireframe===!0;let V=i[v.id];V===void 0&&(V={},i[v.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let X=$[O];return X===void 0&&(X=p(c()),$[O]=X),X}function p(v){const P=[],k=[],O=[];for(let V=0;V<e;V++)P[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:v,attributes:{},index:null}}function g(v,P,k,O){const V=s.attributes,$=P.attributes;let X=0;const j=k.getAttributes();for(const W in j)if(j[W].location>=0){const mt=V[W];let Mt=$[W];if(Mt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function _(v,P,k,O){const V={},$=P.attributes;let X=0;const j=k.getAttributes();for(const W in j)if(j[W].location>=0){let mt=$[W];mt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),V[W]=Mt,X++}s.attributes=V,s.attributesNum=X,s.index=O}function x(){const v=s.newAttributes;for(let P=0,k=v.length;P<k;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){const k=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;k[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),V[v]!==P&&(n.vertexAttribDivisor(v,P),V[v]=P)}function y(){const v=s.newAttributes,P=s.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==v[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function S(v,P,k,O,V,$,X){X===!0?n.vertexAttribIPointer(v,P,k,V,$):n.vertexAttribPointer(v,P,k,O,V,$)}function T(v,P,k,O){x();const V=O.attributes,$=k.getAttributes(),X=P.defaultAttributeValues;for(const j in $){const W=$[j];if(W.location>=0){let ht=V[j];if(ht===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const mt=ht.normalized,Mt=ht.itemSize,Kt=t.get(ht);if(Kt===void 0)continue;const he=Kt.buffer,q=Kt.type,et=Kt.bytesPerElement,_t=q===n.INT||q===n.UNSIGNED_INT||ht.gpuType===wu;if(ht.isInterleavedBufferAttribute){const ft=ht.data,Ft=ft.stride,Gt=ht.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)f(W.location+Wt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)m(W.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Wt=0;Wt<W.locationSize;Wt++)S(W.location+Wt,Mt/W.locationSize,q,mt,Ft*et,(Gt+Mt/W.locationSize*Wt)*et,_t)}else{if(ht.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)f(W.location+ft,ht.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft);n.bindBuffer(n.ARRAY_BUFFER,he);for(let ft=0;ft<W.locationSize;ft++)S(W.location+ft,Mt/W.locationSize,q,mt,Mt*et,Mt/W.locationSize*ft*et,_t)}}else if(X!==void 0){const mt=X[j];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(W.location,mt);break;case 3:n.vertexAttrib3fv(W.location,mt);break;case 4:n.vertexAttrib4fv(W.location,mt);break;default:n.vertexAttrib1fv(W.location,mt)}}}}y()}function I(){D();for(const v in i){const P=i[v];for(const k in P){const O=P[k];for(const V in O)h(O[V].object),delete O[V];delete P[k]}delete i[v]}}function b(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const k in P){const O=P[k];for(const V in O)h(O[V].object),delete O[V];delete P[k]}delete i[v.id]}function A(v){for(const P in i){const k=i[P];if(k[v.id]===void 0)continue;const O=k[v.id];for(const V in O)h(O[V].object),delete O[V];delete k[v.id]}}function D(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function vv(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,i,1)}function c(l,h,d,p){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];for(let x=0;x<p.length;x++)e.update(_,i,p[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Pn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==hi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==zn&&!A)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:T,maxSamples:I}}function yv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new qi,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||r;return r=p,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,g){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const y=s?0:i,S=y*4;let T=f.clippingState||null;c.value=T,T=h(_,p,S,g);for(let I=0;I!==S;++I)T[I]=e[I];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,p,g,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=g+x*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,T=g;S!==x;++S,T+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Sv(n){let t=new WeakMap;function e(o,a){return a===Tl?o.mapping=us:a===bl&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tl||a===bl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dg(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Jf extends Kf{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zr=4,nd=[.125,.215,.35,.446,.526,.582],ji=20,Qc=new Jf,id=new Et;let tl=null,el=0,nl=0,il=!1;const Yi=(1+Math.sqrt(5))/2,Br=1/Yi,rd=[new R(-Yi,Br,0),new R(Yi,Br,0),new R(-Br,0,Yi),new R(Br,0,Yi),new R(0,Yi,-Br),new R(0,Yi,Br),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class sd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:fo,format:Pn,colorSpace:Di,depthBuffer:!1},r=od(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(s)),this._blurMaterial=Ev(s,t,e)}return r}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,Qc)}_sceneToCubeUV(t,e,i,r){const a=new ln(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(id),h.toneMapping=Ai,h.autoClear=!1;const g=new nn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new B(new wt,g);let x=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,x=!0):(g.color.copy(id),x=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;$o(r,y*S,f>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===us||t.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;$o(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Qc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rd[(r-s-1)%rd.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new B(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ji-1),x=s/_,m=isFinite(s)?1+Math.floor(h*x):ji;m>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const f=[];let y=0;for(let A=0;A<ji;++A){const D=A/x,E=Math.exp(-D*D/2);f.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-i;const T=this._sizeLods[r],I=3*T*(r>S-Zr?r-S+Zr:0),b=4*(this._cubeSize-T);$o(e,I,b,3*T,2*T),c.setRenderTarget(e),c.render(d,Qc)}}function wv(n){const t=[],e=[],i=[];let r=n;const s=n-Zr+1+nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Zr?c=nd[o-n+Zr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,x=3,m=2,f=1,y=new Float32Array(x*_*g),S=new Float32Array(m*_*g),T=new Float32Array(f*_*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,D=b>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(E,x*_*b),S.set(p,m*_*b);const v=[b,b,b,b,b,b];T.set(v,f*_*b)}const I=new Ne;I.setAttribute("position",new je(y,x)),I.setAttribute("uv",new je(S,m)),I.setAttribute("faceIndex",new je(T,f)),t.push(I),r>Zr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function od(n,t,e){const i=new lr(n,t,e);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Ev(n,t,e){const i=new Float32Array(ji),r=new R(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ad(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cd(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}function Tv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Tl||c===bl,h=c===us||c===hs;if(l||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new sd(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&r(g)?(e===null&&(e=new sd(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Av(n,t,e,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],n.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,f=x.length;m<f;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(d){const p=[],g=d.index,_=d.attributes.position;let x=0;if(g!==null){const y=g.array;x=g.version;for(let S=0,T=y.length;S<T;S+=3){const I=y[S+0],b=y[S+1],A=y[S+2];p.push(I,b,b,A,A,I)}}else if(_!==void 0){const y=_.array;x=_.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const I=S+0,b=S+1,A=S+2;p.push(I,b,b,A,A,I)}}else return;const m=new(Gf(p)?Yf:qf)(p,1);m.version=x;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Cv(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,g){n.drawElements(i,g,s,p*o),e.update(g,i,1)}function l(p,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,p*o,_),e.update(g,i,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=g[f];e.update(m,i,1)}function d(p,g,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,g[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,x,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y];for(let y=0;y<x.length;y++)e.update(f,i,x[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Pv(n,t,e){const i=new WeakMap,r=new ge;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let v=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var g=v;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let I=a.attributes.position.count*T,b=1;I>t.maxTextureSize&&(b=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const A=new Float32Array(I*b*4*d),D=new Wf(A,I,b,d);D.type=zn,D.needsUpdate=!0;const E=T*4;for(let P=0;P<d;P++){const k=f[P],O=y[P],V=S[P],$=I*b*4*P;for(let X=0;X<k.count;X++){const j=X*E;_===!0&&(r.fromBufferAttribute(k,X),A[$+j+0]=r.x,A[$+j+1]=r.y,A[$+j+2]=r.z,A[$+j+3]=0),x===!0&&(r.fromBufferAttribute(O,X),A[$+j+4]=r.x,A[$+j+5]=r.y,A[$+j+6]=r.z,A[$+j+7]=0),m===!0&&(r.fromBufferAttribute(V,X),A[$+j+8]=r.x,A[$+j+9]=r.y,A[$+j+10]=r.z,A[$+j+11]=V.itemSize===4?r.w:1)}}p={count:d,texture:D,size:new Pt(I,b)},i.set(a,p),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Lv(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Qf extends Ye{constructor(t,e,i,r,s,o,a,c,l,h=is){if(h!==is&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===is&&(i=cr),i===void 0&&h===fs&&(i=ds),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tp=new Ye,ld=new Qf(1,1),ep=new Wf,np=new _g,ip=new Zf,ud=[],hd=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ud[r];if(s===void 0&&(s=new Float32Array(r),ud[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Iv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;pd.set(i),n.uniformMatrix2fv(this.addr,!1,pd),De(e,i)}}function Ov(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),De(e,i)}}function Bv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;dd.set(i),n.uniformMatrix4fv(this.addr,!1,dd),De(e,i)}}function kv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Vv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Yv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ld.compareFunction=zf,s=ld):s=tp,e.setTexture2D(t||s,r)}function $v(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||np,r)}function Kv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ip,r)}function Zv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ep,r)}function jv(n){switch(n){case 5126:return Iv;case 35664:return Dv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Jv(n,t){n.uniform1fv(this.addr,t)}function Qv(n,t){const e=Es(t,this.size,2);n.uniform2fv(this.addr,e)}function tM(n,t){const e=Es(t,this.size,3);n.uniform3fv(this.addr,e)}function eM(n,t){const e=Es(t,this.size,4);n.uniform4fv(this.addr,e)}function nM(n,t){const e=Es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function iM(n,t){const e=Es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rM(n,t){const e=Es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sM(n,t){n.uniform1iv(this.addr,t)}function oM(n,t){n.uniform2iv(this.addr,t)}function aM(n,t){n.uniform3iv(this.addr,t)}function cM(n,t){n.uniform4iv(this.addr,t)}function lM(n,t){n.uniform1uiv(this.addr,t)}function uM(n,t){n.uniform2uiv(this.addr,t)}function hM(n,t){n.uniform3uiv(this.addr,t)}function dM(n,t){n.uniform4uiv(this.addr,t)}function fM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||tp,s[o])}function pM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||np,s[o])}function mM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ip,s[o])}function gM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ie(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ep,s[o])}function _M(n){switch(n){case 5126:return Jv;case 35664:return Qv;case 35665:return tM;case 35666:return eM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return cM;case 5125:return lM;case 36294:return uM;case 36295:return hM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}class xM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jv(e.type)}}class vM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_M(e.type)}}class MM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function md(n,t){n.seq.push(t),n.map[t.id]=t}function yM(n,t,e){const i=n.name,r=i.length;for(rl.lastIndex=0;;){const s=rl.exec(i),o=rl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){md(e,l===void 0?new xM(a,n,t):new vM(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new MM(a),md(e,d)),e=d}}}class xa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);yM(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function gd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const SM=37297;let wM=0;function EM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function TM(n){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(n);let i;switch(t===e?i="":t===La&&e===Pa?i="LinearDisplayP3ToLinearSRGB":t===Pa&&e===La&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Wa:return[i,"LinearTransferOETF"];case tn:case Pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function _d(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+EM(n.getShaderSource(t),o)}else return r}function bM(n,t){const e=TM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function AM(n,t){let e;switch(t){case P0:e="Linear";break;case L0:e="Reinhard";break;case I0:e="OptimizedCineon";break;case D0:e="ACESFilmic";break;case N0:e="AgX";break;case F0:e="Neutral";break;case U0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ko=new R;function CM(){oe.getLuminanceCoefficients(Ko);const n=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function PM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function LM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ys(n){return n!==""}function xd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(IM,UM)}const DM=new Map;function UM(n,t){let e=kt[t];if(e===void 0){const i=DM.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return eu(e)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(NM,FM)}function FM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function OM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Af?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function BM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function zM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cf:t="ENVMAP_BLENDING_MULTIPLY";break;case C0:t="ENVMAP_BLENDING_MIX";break;case R0:t="ENVMAP_BLENDING_ADD";break}return t}function HM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function GM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=OM(e),l=BM(e),h=kM(e),d=zM(e),p=HM(e),g=RM(e),_=PM(s),x=r.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ys).join(`
`),f.length>0&&(f+=`
`)):(m=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),f=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?AM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,bM("linearToOutputTexel",e.outputColorSpace),CM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),o=eu(o),o=xd(o,e),o=vd(o,e),a=eu(a),a=xd(a,e),a=vd(a,e),o=Md(o),a=Md(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+o,T=y+f+a,I=gd(r,r.VERTEX_SHADER,S),b=gd(r,r.FRAGMENT_SHADER,T);r.attachShader(x,I),r.attachShader(x,b),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(I).trim(),V=r.getShaderInfoLog(b).trim();let $=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,b);else{const j=_d(r,I,"vertex"),W=_d(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(I),r.deleteShader(b),D=new xa(r,x),E=LM(r,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,SM)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=b,this}let VM=0;class WM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new XM(t),e.set(t,i)),i}}class XM{constructor(t){this.id=VM++,this.code=t,this.usedTimes=0}}function qM(n,t,e,i,r,s,o){const a=new Iu,c=new WM,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,P,k,O){const V=k.fog,$=O.geometry,X=E.isMeshStandardMaterial?k.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),W=j&&j.mapping===Va?j.image.height:null,ht=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let Kt=0;$.morphAttributes.position!==void 0&&(Kt=1),$.morphAttributes.normal!==void 0&&(Kt=2),$.morphAttributes.color!==void 0&&(Kt=3);let he,q,et,_t;if(ht){const ne=Bn[ht];he=ne.vertexShader,q=ne.fragmentShader}else he=E.vertexShader,q=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const ft=n.getRenderTarget(),Ft=O.isInstancedMesh===!0,Gt=O.isBatchedMesh===!0,Wt=!!E.map,Me=!!E.matcap,L=!!j,Te=!!E.aoMap,ae=!!E.lightMap,de=!!E.bumpMap,St=!!E.normalMap,be=!!E.displacementMap,Ut=!!E.emissiveMap,Ot=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,Q=E.dispersion>0,tt=E.iridescence>0,J=E.sheen>0,Tt=E.transmission>0,lt=M&&!!E.anisotropyMap,pt=G&&!!E.clearcoatMap,Bt=G&&!!E.clearcoatNormalMap,it=G&&!!E.clearcoatRoughnessMap,dt=tt&&!!E.iridescenceMap,Zt=tt&&!!E.iridescenceThicknessMap,It=J&&!!E.sheenColorMap,gt=J&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Vt=!!E.specularColorMap,_e=!!E.specularIntensityMap,U=Tt&&!!E.transmissionMap,rt=Tt&&!!E.thicknessMap,K=!!E.gradientMap,Z=!!E.alphaMap,ot=E.alphaTest>0,Ct=!!E.alphaHash,Qt=!!E.extensions;let Ae=Ai;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const Be={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:he,fragmentShader:q,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Di,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:Me,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:W,aoMap:Te,lightMap:ae,bumpMap:de,normalMap:St,displacementMap:p&&be,emissiveMap:Ut,normalMapObjectSpace:St&&E.normalMapType===z0,normalMapTangentSpace:St&&E.normalMapType===kf,metalnessMap:Ot,roughnessMap:C,anisotropy:M,anisotropyMap:lt,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:tt,iridescenceMap:dt,iridescenceThicknessMap:Zt,sheen:J,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Nt,specularColorMap:Vt,specularIntensityMap:_e,transmission:Tt,transmissionMap:U,thicknessMap:rt,gradientMap:K,opaque:E.transparent===!1&&E.blending===ns&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ot,alphaHash:Ct,combine:E.combine,mapUv:Wt&&x(E.map.channel),aoMapUv:Te&&x(E.aoMap.channel),lightMapUv:ae&&x(E.lightMap.channel),bumpMapUv:de&&x(E.bumpMap.channel),normalMapUv:St&&x(E.normalMap.channel),displacementMapUv:be&&x(E.displacementMap.channel),emissiveMapUv:Ut&&x(E.emissiveMap.channel),metalnessMapUv:Ot&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:lt&&x(E.anisotropyMap.channel),clearcoatMapUv:pt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(E.sheenRoughnessMap.channel),specularMapUv:Nt&&x(E.specularMap.channel),specularColorMapUv:Vt&&x(E.specularColorMap.channel),specularIntensityMapUv:_e&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:rt&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(St||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Wt||Z),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Kt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&E.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function f(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)v.push(P),v.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(v,E),S(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function y(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function S(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),E.push(a.mask)}function T(E){const v=_[E.type];let P;if(v){const k=Bn[v];P=Rg.clone(k.uniforms)}else P=E.uniforms;return P}function I(E,v){let P;for(let k=0,O=h.length;k<O;k++){const V=h[k];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new GM(n,v,E,s),h.push(P)),P}function b(E){if(--E.usedTimes===0){const v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:I,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:D}}function YM(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function $M(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,p,g,_,x,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,p,g,_,x,m){const f=o(d,p,g,_,x,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):e.push(f)}function c(d,p,g,_,x,m){const f=o(d,p,g,_,x,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||$M),i.length>1&&i.sort(p||Sd),r.length>1&&r.sort(p||Sd)}function h(){for(let d=t,p=n.length;d<p;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function KM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new wd,n.set(i,[o])):r>=s.length?(o=new wd,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function ZM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function jM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let JM=0;function QM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ty(n){const t=new ZM,e=jM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);const r=new R,s=new ue,o=new ue;function a(l){let h=0,d=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,_=0,x=0,m=0,f=0,y=0,S=0,T=0,I=0,b=0,A=0;l.sort(QM);for(let E=0,v=l.length;E<v;E++){const P=l[E],k=P.color,O=P.intensity,V=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*O,d+=k.g*O,p+=k.b*O;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],O);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=P.shadow.matrix,y++}i.directional[g]=X,g++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const j=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,j.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=j.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=$,T++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(k).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,W=e.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=X,_++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(O),X.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==g||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==T||D.numSpotMaps!==I||D.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+I-b,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,D.directionalLength=g,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=T,D.numSpotMaps=I,D.numLightProbes=A,i.version=JM++)}function c(l,h){let d=0,p=0,g=0,_=0,x=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const S=l[f];if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Ed(n){const t=new ty(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ey(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ed(n),t.set(r,[a])):s>=o.length?(a=new Ed(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ny extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iy extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`;function oy(n,t,e){let i=new Du;const r=new Pt,s=new Pt,o=new ge,a=new ny({depthPacking:k0}),c=new iy,l={},h=e.maxTextureSize,d={[Ri]:qe,[qe]:Ri,[Tn]:Tn},p=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:ry,fragmentShader:sy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ne;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new B(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let f=this.type;this.render=function(b,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(bi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==si&&this.type===si,V=f===si&&this.type!==si;for(let $=0,X=b.length;$<X;$++){const j=b[$],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ht=W.getFrameExtents();if(r.multiply(ht),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ht.x),r.x=s.x*ht.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ht.y),r.y=s.y*ht.y,W.mapSize.y=s.y)),W.map===null||O===!0||V===!0){const Mt=this.type!==si?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new lr(r.x,r.y,Mt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const mt=W.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const Kt=W.getViewport(Mt);o.set(s.x*Kt.x,s.y*Kt.y,s.x*Kt.z,s.y*Kt.w),k.viewport(o),W.updateMatrices(j,Mt),i=W.getFrustum(),T(A,D,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===si&&y(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,v,P)};function y(b,A){const D=t.update(x);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new lr(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,D,p,x,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,D,g,x,null)}function S(b,A,D,E){let v=null;const P=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=v.uuid,O=A.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let $=V[O];$===void 0&&($=v.clone(),V[O]=$,A.addEventListener("dispose",I)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,E===si?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=n.properties.get(v);k.light=D}return v}function T(b,A,D,E,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const O=t.update(b),V=b.material;if(Array.isArray(V)){const $=O.groups;for(let X=0,j=$.length;X<j;X++){const W=$[X],ht=V[W.materialIndex];if(ht&&ht.visible){const mt=S(b,ht,E,v);b.onBeforeShadow(n,b,A,D,O,mt,W),n.renderBufferDirect(D,null,O,mt,b,W),b.onAfterShadow(n,b,A,D,O,mt,W)}}}else if(V.visible){const $=S(b,V,E,v);b.onBeforeShadow(n,b,A,D,O,$,null),n.renderBufferDirect(D,null,O,$,b,null),b.onAfterShadow(n,b,A,D,O,$,null)}}const k=b.children;for(let O=0,V=k.length;O<V;O++)T(k[O],A,D,E,v)}function I(b){b.target.removeEventListener("dispose",I);for(const D in l){const E=l[D],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function ay(n){function t(){let U=!1;const rt=new ge;let K=null;const Z=new ge(0,0,0,0);return{setMask:function(ot){K!==ot&&!U&&(n.colorMask(ot,ot,ot,ot),K=ot)},setLocked:function(ot){U=ot},setClear:function(ot,Ct,Qt,Ae,Be){Be===!0&&(ot*=Ae,Ct*=Ae,Qt*=Ae),rt.set(ot,Ct,Qt,Ae),Z.equals(rt)===!1&&(n.clearColor(ot,Ct,Qt,Ae),Z.copy(rt))},reset:function(){U=!1,K=null,Z.set(-1,0,0,0)}}}function e(){let U=!1,rt=null,K=null,Z=null;return{setTest:function(ot){ot?_t(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(ot){rt!==ot&&!U&&(n.depthMask(ot),rt=ot)},setFunc:function(ot){if(K!==ot){switch(ot){case y0:n.depthFunc(n.NEVER);break;case S0:n.depthFunc(n.ALWAYS);break;case w0:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case E0:n.depthFunc(n.EQUAL);break;case T0:n.depthFunc(n.GEQUAL);break;case b0:n.depthFunc(n.GREATER);break;case A0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ot}},setLocked:function(ot){U=ot},setClear:function(ot){Z!==ot&&(n.clearDepth(ot),Z=ot)},reset:function(){U=!1,rt=null,K=null,Z=null}}}function i(){let U=!1,rt=null,K=null,Z=null,ot=null,Ct=null,Qt=null,Ae=null,Be=null;return{setTest:function(ne){U||(ne?_t(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!U&&(n.stencilMask(ne),rt=ne)},setFunc:function(ne,jn,Fn){(K!==ne||Z!==jn||ot!==Fn)&&(n.stencilFunc(ne,jn,Fn),K=ne,Z=jn,ot=Fn)},setOp:function(ne,jn,Fn){(Ct!==ne||Qt!==jn||Ae!==Fn)&&(n.stencilOp(ne,jn,Fn),Ct=ne,Qt=jn,Ae=Fn)},setLocked:function(ne){U=ne},setClear:function(ne){Be!==ne&&(n.clearStencil(ne),Be=ne)},reset:function(){U=!1,rt=null,K=null,Z=null,ot=null,Ct=null,Qt=null,Ae=null,Be=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],g=null,_=!1,x=null,m=null,f=null,y=null,S=null,T=null,I=null,b=new Et(0,0,0),A=0,D=!1,E=null,v=null,P=null,k=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=X>=2);let W=null,ht={};const mt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Kt=new ge().fromArray(mt),he=new ge().fromArray(Mt);function q(U,rt,K,Z){const ot=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(U,Ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<K;Qt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(rt+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return Ct}const et={};et[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_t(n.DEPTH_TEST),s.setFunc(Ca),de(!1),St(Lh),_t(n.CULL_FACE),Te(bi);function _t(U){l[U]!==!0&&(n.enable(U),l[U]=!0)}function ft(U){l[U]!==!1&&(n.disable(U),l[U]=!1)}function Ft(U,rt){return h[U]!==rt?(n.bindFramebuffer(U,rt),h[U]=rt,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Gt(U,rt){let K=p,Z=!1;if(U){K=d.get(rt),K===void 0&&(K=[],d.set(rt,K));const ot=U.textures;if(K.length!==ot.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Qt=ot.length;Ct<Qt;Ct++)K[Ct]=n.COLOR_ATTACHMENT0+Ct;K.length=ot.length,Z=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Z=!0);Z&&n.drawBuffers(K)}function Wt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Me={[Zi]:n.FUNC_ADD,[r0]:n.FUNC_SUBTRACT,[s0]:n.FUNC_REVERSE_SUBTRACT};Me[o0]=n.MIN,Me[a0]=n.MAX;const L={[c0]:n.ZERO,[l0]:n.ONE,[u0]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[h0]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[_0]:n.CONSTANT_COLOR,[x0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[M0]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(U,rt,K,Z,ot,Ct,Qt,Ae,Be,ne){if(U===bi){_===!0&&(ft(n.BLEND),_=!1);return}if(_===!1&&(_t(n.BLEND),_=!0),U!==i0){if(U!==x||ne!==D){if((m!==Zi||S!==Zi)&&(n.blendEquation(n.FUNC_ADD),m=Zi,S=Zi),ne)switch(U){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pi:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,y=null,T=null,I=null,b.set(0,0,0),A=0,x=U,D=ne}return}ot=ot||rt,Ct=Ct||K,Qt=Qt||Z,(rt!==m||ot!==S)&&(n.blendEquationSeparate(Me[rt],Me[ot]),m=rt,S=ot),(K!==f||Z!==y||Ct!==T||Qt!==I)&&(n.blendFuncSeparate(L[K],L[Z],L[Ct],L[Qt]),f=K,y=Z,T=Ct,I=Qt),(Ae.equals(b)===!1||Be!==A)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Be),b.copy(Ae),A=Be),x=U,D=!1}function ae(U,rt){U.side===Tn?ft(n.CULL_FACE):_t(n.CULL_FACE);let K=U.side===qe;rt&&(K=!K),de(K),U.blending===ns&&U.transparent===!1?Te(bi):Te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function St(U){U!==e0?(_t(n.CULL_FACE),U!==v&&(U===Lh?n.cullFace(n.BACK):U===n0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),v=U}function be(U){U!==P&&($&&n.lineWidth(U),P=U)}function Ut(U,rt,K){U?(_t(n.POLYGON_OFFSET_FILL),(k!==rt||O!==K)&&(n.polygonOffset(rt,K),k=rt,O=K)):ft(n.POLYGON_OFFSET_FILL)}function Ot(U){U?_t(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+V-1),W!==U&&(n.activeTexture(U),W=U)}function M(U,rt,K){K===void 0&&(W===null?K=n.TEXTURE0+V-1:K=W);let Z=ht[K];Z===void 0&&(Z={type:void 0,texture:void 0},ht[K]=Z),(Z.type!==U||Z.texture!==rt)&&(W!==K&&(n.activeTexture(K),W=K),n.bindTexture(U,rt||et[U]),Z.type=U,Z.texture=rt)}function G(){const U=ht[W];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Zt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){Kt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Kt.copy(U))}function gt(U){he.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),he.copy(U))}function Nt(U,rt){let K=c.get(rt);K===void 0&&(K=new WeakMap,c.set(rt,K));let Z=K.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(rt,U.name),K.set(U,Z))}function Vt(U,rt){const Z=c.get(rt).get(U);a.get(rt)!==Z&&(n.uniformBlockBinding(rt,Z,U.__bindingPointIndex),a.set(rt,Z))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},W=null,ht={},h={},d=new WeakMap,p=[],g=null,_=!1,x=null,m=null,f=null,y=null,S=null,T=null,I=null,b=new Et(0,0,0),A=0,D=!1,E=null,v=null,P=null,k=null,O=null,Kt.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_t,disable:ft,bindFramebuffer:Ft,drawBuffers:Gt,useProgram:Wt,setBlending:Te,setMaterial:ae,setFlipSided:de,setCullFace:St,setLineWidth:be,setPolygonOffset:Ut,setScissorTest:Ot,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:dt,texImage3D:Zt,updateUBOMapping:Nt,uniformBlockBinding:Vt,texStorage2D:Bt,texStorage3D:it,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:_e}}function Td(n,t,e,i){const r=cy(i);switch(e){case Df:return n*t;case Nf:return n*t;case Ff:return n*t*2;case bu:return n*t/r.components*r.byteLength;case Au:return n*t/r.components*r.byteLength;case Of:return n*t*2/r.components*r.byteLength;case Cu:return n*t*2/r.components*r.byteLength;case Uf:return n*t*3/r.components*r.byteLength;case Pn:return n*t*4/r.components*r.byteLength;case Ru:return n*t*4/r.components*r.byteLength;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Il:return Math.max(n,16)*Math.max(t,8)/4;case Rl:case Ll:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _a:case Zl:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bf:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ql:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cy(n){switch(n){case hi:case Pf:return{byteLength:1,components:1};case no:case Lf:case fo:return{byteLength:2,components:1};case Eu:case Tu:return{byteLength:2,components:4};case cr:case wu:case zn:return{byteLength:4,components:1};case If:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ly(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pt,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return g?new OffscreenCanvas(C,M):Da("canvas")}function x(C,M,G){let Q=1;const tt=Ot(C);if((tt.width>G||tt.height>G)&&(Q=G/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*tt.width),Tt=Math.floor(Q*tt.height);d===void 0&&(d=_(J,Tt));const lt=M?_(J,Tt):d;return lt.width=J,lt.height=Tt,lt.getContext("2d").drawImage(C,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Tt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==en&&C.minFilter!==bn}function f(C){n.generateMipmap(C)}function y(C,M,G,Q,tt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),M===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Tt=tt?Ra:oe.getTransfer(Q);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Tt===me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,M){let G;return C?M===null||M===cr||M===ds?G=n.DEPTH24_STENCIL8:M===zn?G=n.DEPTH32F_STENCIL8:M===no&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cr||M===ds?G=n.DEPTH_COMPONENT24:M===zn?G=n.DEPTH_COMPONENT32F:M===no&&(G=n.DEPTH_COMPONENT16),G}function T(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){const M=C.target;M.removeEventListener("dispose",I),A(M),M.isVideoTexture&&h.delete(M)}function b(C){const M=C.target;M.removeEventListener("dispose",b),E(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,Q=p.get(G);if(Q){const tt=Q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(C),Object.keys(Q).length===0&&p.delete(G)}i.remove(C)}function D(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const G=C.source,Q=p.get(G);delete Q[M.__cacheKey],o.memory.textures--}function E(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let tt=0;tt<M.__webglFramebuffer[Q].length;tt++)n.deleteFramebuffer(M.__webglFramebuffer[Q][tt]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,tt=G.length;Q<tt;Q++){const J=i.get(G[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(C)}let v=0;function P(){v=0}function k(){const C=v;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),v+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function V(C,M){const G=i.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(G,C,M);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function $(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function X(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){he(G,C,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function j(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){q(G,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const W={[Al]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Cl]:n.MIRRORED_REPEAT},ht={[en]:n.NEAREST,[O0]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Uc]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},mt={[H0]:n.NEVER,[Y0]:n.ALWAYS,[G0]:n.LESS,[zf]:n.LEQUAL,[V0]:n.EQUAL,[q0]:n.GEQUAL,[W0]:n.GREATER,[X0]:n.NOTEQUAL};function Mt(C,M){if(M.type===zn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===Uc||M.magFilter===Co||M.magFilter===tr||M.minFilter===bn||M.minFilter===Uc||M.minFilter===Co||M.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,W[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ht[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Co&&M.minFilter!==tr||M.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const Q=M.source;let tt=p.get(Q);tt===void 0&&(tt={},p.set(Q,tt));const J=O(M);if(J!==C.__cacheKey){tt[J]===void 0&&(tt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[J].usedTimes++;const Tt=tt[C.__cacheKey];Tt!==void 0&&(tt[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&D(M)),C.__cacheKey=J,C.__webglTexture=tt[J].texture}return G}function he(C,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const tt=Kt(C,M),J=M.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+G);const Tt=i.get(J);if(J.version!==Tt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const lt=oe.getPrimaries(oe.workingColorSpace),pt=M.colorSpace===Ei?null:oe.getPrimaries(M.colorSpace),Bt=M.colorSpace===Ei||lt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let it=x(M.image,!1,r.maxTextureSize);it=Ut(M,it);const dt=s.convert(M.format,M.colorSpace),Zt=s.convert(M.type);let It=y(M.internalFormat,dt,Zt,M.colorSpace,M.isVideoTexture);Mt(Q,M);let gt;const Nt=M.mipmaps,Vt=M.isVideoTexture!==!0,_e=Tt.__version===void 0||tt===!0,U=J.dataReady,rt=T(M,it);if(M.isDepthTexture)It=S(M.format===fs,M.type),_e&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,It,it.width,it.height,0,dt,Zt,null));else if(M.isDataTexture)if(Nt.length>0){Vt&&_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],Vt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,Zt,gt.data):e.texImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,dt,Zt,gt.data);M.generateMipmaps=!1}else Vt?(_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,it.width,it.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,dt,Zt,it.data)):e.texImage2D(n.TEXTURE_2D,0,It,it.width,it.height,0,dt,Zt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,It,Nt[0].width,Nt[0].height,it.depth);for(let K=0,Z=Nt.length;K<Z;K++)if(gt=Nt[K],M.format!==Pn)if(dt!==null)if(Vt){if(U)if(M.layerUpdates.size>0){const ot=Td(gt.width,gt.height,M.format,M.type);for(const Ct of M.layerUpdates){const Qt=gt.data.subarray(Ct*ot/gt.data.BYTES_PER_ELEMENT,(Ct+1)*ot/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ct,gt.width,gt.height,1,dt,Qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,it.depth,dt,gt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,it.depth,dt,Zt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,It,gt.width,gt.height,it.depth,0,dt,Zt,gt.data)}else{Vt&&_e&&e.texStorage2D(n.TEXTURE_2D,rt,It,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],M.format!==Pn?dt!==null?Vt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,gt.width,gt.height,dt,Zt,gt.data):e.texImage2D(n.TEXTURE_2D,K,It,gt.width,gt.height,0,dt,Zt,gt.data)}else if(M.isDataArrayTexture)if(Vt){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,It,it.width,it.height,it.depth),U)if(M.layerUpdates.size>0){const K=Td(it.width,it.height,M.format,M.type);for(const Z of M.layerUpdates){const ot=it.data.subarray(Z*K/it.data.BYTES_PER_ELEMENT,(Z+1)*K/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,dt,Zt,ot)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,Zt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,dt,Zt,it.data);else if(M.isData3DTexture)Vt?(_e&&e.texStorage3D(n.TEXTURE_3D,rt,It,it.width,it.height,it.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,Zt,it.data)):e.texImage3D(n.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,dt,Zt,it.data);else if(M.isFramebufferTexture){if(_e)if(Vt)e.texStorage2D(n.TEXTURE_2D,rt,It,it.width,it.height);else{let K=it.width,Z=it.height;for(let ot=0;ot<rt;ot++)e.texImage2D(n.TEXTURE_2D,ot,It,K,Z,0,dt,Zt,null),K>>=1,Z>>=1}}else if(Nt.length>0){if(Vt&&_e){const K=Ot(Nt[0]);e.texStorage2D(n.TEXTURE_2D,rt,It,K.width,K.height)}for(let K=0,Z=Nt.length;K<Z;K++)gt=Nt[K],Vt?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,dt,Zt,gt):e.texImage2D(n.TEXTURE_2D,K,It,dt,Zt,gt);M.generateMipmaps=!1}else if(Vt){if(_e){const K=Ot(it);e.texStorage2D(n.TEXTURE_2D,rt,It,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Zt,it)}else e.texImage2D(n.TEXTURE_2D,0,It,dt,Zt,it);m(M)&&f(Q),Tt.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,G){if(M.image.length!==6)return;const Q=Kt(C,M),tt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const J=i.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);const Tt=oe.getPrimaries(oe.workingColorSpace),lt=M.colorSpace===Ei?null:oe.getPrimaries(M.colorSpace),pt=M.colorSpace===Ei||Tt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Bt&&!it?dt[Z]=x(M.image[Z],!0,r.maxCubemapSize):dt[Z]=it?M.image[Z].image:M.image[Z],dt[Z]=Ut(M,dt[Z]);const Zt=dt[0],It=s.convert(M.format,M.colorSpace),gt=s.convert(M.type),Nt=y(M.internalFormat,It,gt,M.colorSpace),Vt=M.isVideoTexture!==!0,_e=J.__version===void 0||Q===!0,U=tt.dataReady;let rt=T(M,Zt);Mt(n.TEXTURE_CUBE_MAP,M);let K;if(Bt){Vt&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Nt,Zt.width,Zt.height);for(let Z=0;Z<6;Z++){K=dt[Z].mipmaps;for(let ot=0;ot<K.length;ot++){const Ct=K[ot];M.format!==Pn?It!==null?Vt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ct.width,Ct.height,It,gt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Nt,Ct.width,Ct.height,0,It,gt,Ct.data)}}}else{if(K=M.mipmaps,Vt&&_e){K.length>0&&rt++;const Z=Ot(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Vt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,It,gt,dt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,dt[Z].width,dt[Z].height,0,It,gt,dt[Z].data);for(let ot=0;ot<K.length;ot++){const Qt=K[ot].image[Z].image;Vt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,Qt.width,Qt.height,It,gt,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Nt,Qt.width,Qt.height,0,It,gt,Qt.data)}}else{Vt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,gt,dt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,It,gt,dt[Z]);for(let ot=0;ot<K.length;ot++){const Ct=K[ot];Vt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,It,gt,Ct.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Nt,It,gt,Ct.image[Z])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function et(C,M,G,Q,tt,J){const Tt=s.convert(G.format,G.colorSpace),lt=s.convert(G.type),pt=y(G.internalFormat,Tt,lt,G.colorSpace);if(!i.get(M).__hasExternalTextures){const it=Math.max(1,M.width>>J),dt=Math.max(1,M.height>>J);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,pt,it,dt,M.depth,0,Tt,lt,null):e.texImage2D(tt,J,pt,it,dt,0,Tt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,tt,i.get(G).__webglTexture,0,de(M)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,tt,i.get(G).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(C,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=S(M.stencilBuffer,tt),Tt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=de(M);St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,J,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,C)}else{const Q=M.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],Tt=s.convert(J.format,J.colorSpace),lt=s.convert(J.type),pt=y(J.internalFormat,Tt,lt,J.colorSpace),Bt=de(M);G&&St(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,pt,M.width,M.height):St(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,pt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,tt=de(M);if(M.depthTexture.format===is)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===fs)St(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ft(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=n.createRenderbuffer(),_t(M.__webglDepthbuffer[Q],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),_t(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(C,M,G){const Q=i.get(C);M!==void 0&&et(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ft(C)}function Wt(C){const M=C.texture,G=i.get(C),Q=i.get(M);C.addEventListener("dispose",b);const tt=C.textures,J=C.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let pt=0;pt<M.mipmaps.length;pt++)G.__webglFramebuffer[lt][pt]=n.createFramebuffer()}else G.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)G.__webglFramebuffer[lt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let lt=0,pt=tt.length;lt<pt;lt++){const Bt=i.get(tt[lt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&St(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];G.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const Bt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),dt=y(pt.internalFormat,Bt,it,pt.colorSpace,C.isXRRenderTarget===!0),Zt=de(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,dt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)et(G.__webglFramebuffer[lt][pt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else et(G.__webglFramebuffer[lt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,pt=tt.length;lt<pt;lt++){const Bt=tt[lt],it=i.get(Bt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Mt(n.TEXTURE_2D,Bt),et(G.__webglFramebuffer,C,Bt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Bt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,Q.__webglTexture),Mt(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)et(G.__webglFramebuffer[pt],C,M,n.COLOR_ATTACHMENT0,lt,pt);else et(G.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,lt,0);m(M)&&f(lt),e.unbindTexture()}C.depthBuffer&&Ft(C)}function Me(C){const M=C.textures;for(let G=0,Q=M.length;G<Q;G++){const tt=M[G];if(m(tt)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Tt=i.get(tt).__webglTexture;e.bindTexture(J,Tt),f(J),e.unbindTexture()}}}const L=[],Te=[];function ae(C){if(C.samples>0){if(St(C)===!1){const M=C.textures,G=C.width,Q=C.height;let tt=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(C),lt=M.length>1;if(lt)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Bt=i.get(M[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,tt,n.NEAREST),c===!0&&(L.length=0,Te.length=0,L.push(n.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(J),Te.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Bt=i.get(M[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(C){return Math.min(r.maxSamples,C.samples)}function St(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ut(C,M){const G=C.colorSpace,Q=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Di&&G!==Ei&&(oe.getTransfer(G)===me?(Q!==Pn||tt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Gt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=St}function uy(n,t){function e(i,r=Ei){let s;const o=oe.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===Eu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.BYTE;if(i===Lf)return n.SHORT;if(i===no)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===cr)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===fo)return n.HALF_FLOAT;if(i===Df)return n.ALPHA;if(i===Uf)return n.RGB;if(i===Pn)return n.RGBA;if(i===Nf)return n.LUMINANCE;if(i===Ff)return n.LUMINANCE_ALPHA;if(i===is)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===bu)return n.RED;if(i===Au)return n.RED_INTEGER;if(i===Of)return n.RG;if(i===Cu)return n.RG_INTEGER;if(i===Ru)return n.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Pl||i===Ll||i===Il)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ul||i===Nl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dl||i===Ul)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kl)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_a||i===Zl||i===jl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===_a)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bf||i===Jl||i===Ql||i===tu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===_a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class hy extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dy={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
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

}`;class my{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Li({vertexShader:fy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gy extends ws{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,g=null,_=null;const x=new my,m=e.getContextAttributes();let f=null,y=null;const S=[],T=[],I=new Pt;let b=null;const A=new ln;A.layers.enable(1),A.viewport=new ge;const D=new ln;D.layers.enable(2),D.viewport=new ge;const E=[A,D],v=new hy;v.layers.enable(1),v.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new sl,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new sl,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new sl,S[q]=et),et.getHandSpace()};function O(q){const et=T.indexOf(q.inputSource);if(et===-1)return;const _t=S[et];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let q=0;q<S.length;q++){const et=T[q];et!==null&&(T[q]=null,S[q].disconnect(et))}P=null,k=null,x.reset(),t.setRenderTarget(f),g=null,p=null,d=null,r=null,y=null,he.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new lr(g.framebufferWidth,g.framebufferHeight,{format:Pn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?fs:is,_t=m.stencil?ds:cr);const Ft={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(Ft),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new lr(p.textureWidth,p.textureHeight,{format:Pn,type:hi,depthTexture:new Qf(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let et=0;et<q.removed.length;et++){const _t=q.removed[et],ft=T.indexOf(_t);ft>=0&&(T[ft]=null,S[ft].disconnect(_t))}for(let et=0;et<q.added.length;et++){const _t=q.added[et];let ft=T.indexOf(_t);if(ft===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=T.length){T.push(_t),ft=Gt;break}else if(T[Gt]===null){T[Gt]=_t,ft=Gt;break}if(ft===-1)break}const Ft=S[ft];Ft&&Ft.connect(_t)}}const X=new R,j=new R;function W(q,et,_t){X.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const ft=X.distanceTo(j),Ft=et.projectionMatrix.elements,Gt=_t.projectionMatrix.elements,Wt=Ft[14]/(Ft[10]-1),Me=Ft[14]/(Ft[10]+1),L=(Ft[9]+1)/Ft[5],Te=(Ft[9]-1)/Ft[5],ae=(Ft[8]-1)/Ft[0],de=(Gt[8]+1)/Gt[0],St=Wt*ae,be=Wt*de,Ut=ft/(-ae+de),Ot=Ut*-ae;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(Ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=Wt+Ut,M=Me+Ut,G=St-Ot,Q=be+(ft-Ot),tt=L*Me/M*C,J=Te*Me/M*C;q.projectionMatrix.makePerspective(G,Q,tt,J,C,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ht(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),v.near=D.near=A.near=q.near,v.far=D.far=A.far=q.far,(P!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,k=v.far,A.near=P,A.far=k,D.near=P,D.far=k,A.updateProjectionMatrix(),D.updateProjectionMatrix(),q.updateProjectionMatrix());const et=q.parent,_t=v.cameras;ht(v,et);for(let ft=0;ft<_t.length;ft++)ht(_t[ft],et);_t.length===2?W(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),mt(q,v,et)};function mt(q,et,_t){_t===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=io*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Mt=null;function Kt(q,et){if(h=et.getViewerPose(l||o),_=et,h!==null){const _t=h.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let ft=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Gt=0;Gt<_t.length;Gt++){const Wt=_t[Gt];let Me=null;if(g!==null)Me=g.getViewport(Wt);else{const Te=d.getViewSubImage(p,Wt);Me=Te.viewport,Gt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,p.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let L=E[Gt];L===void 0&&(L=new ln,L.layers.enable(Gt),L.viewport=new ge,E[Gt]=L),L.matrix.fromArray(Wt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Wt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Me.x,Me.y,Me.width,Me.height),Gt===0&&(v.matrix.copy(L.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(L)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Gt=d.getDepthInformation(_t[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,r.renderState)}}for(let _t=0;_t<S.length;_t++){const ft=T[_t],Ft=S[_t];ft!==null&&Ft!==void 0&&Ft.update(ft,et,l||o)}Mt&&Mt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const he=new jf;he.setAnimationLoop(Kt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const Vi=new $n,_y=new ue;function xy(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,$f(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,S,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),S=y.envMap,T=y.envMapRotation;S&&(m.envMap.value=S,Vi.copy(T),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Vi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vy(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function l(y,S){let T=r[y.id];T===void 0&&(_(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(y,I);const b=t.render.frame;s[y.id]!==b&&(p(y),s[y.id]=b)}function h(y){const S=d();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=r[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=T.length;b<A;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let E=0,v=D.length;E<v;E++){const P=D[E];if(g(P,b,E,I)===!0){const k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<O.length;$++){const X=O[$],j=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+V,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(y,S,T,I){const b=y.value,A=S+"_"+T;if(I[A]===void 0)return typeof b=="number"||typeof b=="boolean"?I[A]=b:I[A]=b.clone(),!0;{const D=I[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return I[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(y){const S=y.uniforms;let T=0;const I=16;for(let A=0,D=S.length;A<D;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,P=E.length;v<P;v++){const k=E[v],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,$=O.length;V<$;V++){const X=O[V],j=x(X),W=T%I,ht=W%j.boundary,mt=W+ht;T+=ht,mt!==0&&I-mt<j.storage&&(T+=I-mt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=j.storage}}}const b=T%I;return b>0&&(T+=I-b),y.__size=T,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class My{constructor(t={}){const{canvas:e=ug(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Ai,this.toneMappingExposure=1;const S=this;let T=!1,I=0,b=0,A=null,D=-1,E=null;const v=new ge,P=new ge;let k=null;const O=new Et(0);let V=0,$=e.width,X=e.height,j=1,W=null,ht=null;const mt=new ge(0,0,$,X),Mt=new ge(0,0,$,X);let Kt=!1;const he=new Du;let q=!1,et=!1;const _t=new ue,ft=new R,Ft=new ge,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Me(){return A===null?j:1}let L=i;function Te(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Su}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const N="webgl2";if(L=Te(N,w),L===null)throw Te(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ae,de,St,be,Ut,Ot,C,M,G,Q,tt,J,Tt,lt,pt,Bt,it,dt,Zt,It,gt,Nt,Vt,_e;function U(){ae=new bv(L),ae.init(),Nt=new uy(L,ae),de=new Mv(L,ae,t,Nt),St=new ay(L),be=new Rv(L),Ut=new YM,Ot=new ly(L,ae,St,Ut,de,Nt,be),C=new Sv(S),M=new Tv(S),G=new Fg(L),Vt=new xv(L,G),Q=new Av(L,G,be,Vt),tt=new Lv(L,Q,G,be),Zt=new Pv(L,de,Ot),Bt=new yv(Ut),J=new qM(S,C,M,ae,de,Vt,Bt),Tt=new xy(S,Ut),lt=new KM,pt=new ey(ae),dt=new _v(S,C,M,St,tt,p,c),it=new oy(S,tt,de),_e=new vy(L,be,de,St),It=new vv(L,ae,be),gt=new Cv(L,ae,be),be.programs=J.programs,S.capabilities=de,S.extensions=ae,S.properties=Ut,S.renderLists=lt,S.shadowMap=it,S.state=St,S.info=be}U();const rt=new gy(S,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize($,X,!1))},this.getSize=function(w){return w.set($,X)},this.setSize=function(w,N,z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,X=N,e.width=Math.floor(w*j),e.height=Math.floor(N*j),z===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*j,X*j).floor()},this.setDrawingBufferSize=function(w,N,z){$=w,X=N,j=z,e.width=Math.floor(w*z),e.height=Math.floor(N*z),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,N,z,H){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,N,z,H),St.viewport(v.copy(mt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(Mt)},this.setScissor=function(w,N,z,H){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,N,z,H),St.scissor(P.copy(Mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){St.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(w=!0,N=!0,z=!0){let H=0;if(w){let F=!1;if(A!==null){const st=A.texture.format;F=st===Ru||st===Cu||st===Au}if(F){const st=A.texture.type,ut=st===hi||st===cr||st===no||st===ds||st===Eu||st===Tu,xt=dt.getClearColor(),vt=dt.getClearAlpha(),Rt=xt.r,Lt=xt.g,bt=xt.b;ut?(g[0]=Rt,g[1]=Lt,g[2]=bt,g[3]=vt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Rt,_[1]=Lt,_[2]=bt,_[3]=vt,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),lt.dispose(),pt.dispose(),Ut.dispose(),C.dispose(),M.dispose(),tt.dispose(),Vt.dispose(),_e.dispose(),J.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Fn),rt.removeEventListener("sessionend",Eh),Oi.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=be.autoReset,N=it.enabled,z=it.autoUpdate,H=it.needsUpdate,F=it.type;U(),be.autoReset=w,it.enabled=N,it.autoUpdate=z,it.needsUpdate=H,it.type=F}function ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const N=w.target;N.removeEventListener("dispose",Ct),Qt(N)}function Qt(w){Ae(w),Ut.remove(w)}function Ae(w){const N=Ut.get(w).programs;N!==void 0&&(N.forEach(function(z){J.releaseProgram(z)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,z,H,F,st){N===null&&(N=Gt);const ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=jm(w,N,z,H,F);St.setMaterial(H,ut);let vt=z.index,Rt=1;if(H.wireframe===!0){if(vt=Q.getWireframeAttribute(z),vt===void 0)return;Rt=2}const Lt=z.drawRange,bt=z.attributes.position;let ie=Lt.start*Rt,ye=(Lt.start+Lt.count)*Rt;st!==null&&(ie=Math.max(ie,st.start*Rt),ye=Math.min(ye,(st.start+st.count)*Rt)),vt!==null?(ie=Math.max(ie,0),ye=Math.min(ye,vt.count)):bt!=null&&(ie=Math.max(ie,0),ye=Math.min(ye,bt.count));const Se=ye-ie;if(Se<0||Se===1/0)return;Vt.setup(F,H,xt,z,vt);let sn,re=It;if(vt!==null&&(sn=G.get(vt),re=gt,re.setIndex(sn)),F.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Me()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(F.isLine){let yt=H.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*Me()),F.isLineSegments?re.setMode(L.LINES):F.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else F.isPoints?re.setMode(L.POINTS):F.isSprite&&re.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,ke=F._multiDrawCounts,se=F._multiDrawCount,Mn=vt?G.get(vt).bytesPerElement:1,yr=Ut.get(H).currentProgram.getUniforms();for(let on=0;on<se;on++)yr.setValue(L,"_gl_DrawID",on),re.render(yt[on]/Mn,ke[on])}else if(F.isInstancedMesh)re.renderInstances(ie,Se,F.count);else if(z.isInstancedBufferGeometry){const yt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ke=Math.min(z.instanceCount,yt);re.renderInstances(ie,Se,ke)}else re.render(ie,Se)};function Be(w,N,z){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,Ao(w,N,z),w.side=Ri,w.needsUpdate=!0,Ao(w,N,z),w.side=Tn):Ao(w,N,z)}this.compile=function(w,N,z=null){z===null&&(z=w),m=pt.get(z),m.init(N),y.push(m),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return w.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const xt=st[ut];Be(xt,z,F),H.add(xt)}else Be(st,z,F),H.add(st)}),y.pop(),m=null,H},this.compileAsync=function(w,N,z=null){const H=this.compile(w,N,z);return new Promise(F=>{function st(){if(H.forEach(function(ut){Ut.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){F(w);return}setTimeout(st,10)}ae.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ne=null;function jn(w){ne&&ne(w)}function Fn(){Oi.stop()}function Eh(){Oi.start()}const Oi=new jf;Oi.setAnimationLoop(jn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){ne=w,rt.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},rt.addEventListener("sessionstart",Fn),rt.addEventListener("sessionend",Eh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,N,A),m=pt.get(w,y.length),m.init(N),y.push(m),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),he.setFromProjectionMatrix(_t),et=this.localClippingEnabled,q=Bt.init(this.clippingPlanes,et),x=lt.get(w,f.length),x.init(),f.push(x),rt.enabled===!0&&rt.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Pc(st,N,-1/0,S.sortObjects)}Pc(w,N,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(W,ht),Wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Wt&&dt.addToRenderList(x,w),this.info.render.frame++,q===!0&&Bt.beginShadows();const z=m.state.shadowsArray;it.render(z,w,N),q===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,F=x.transmissive;if(m.setupLights(),N.isArrayCamera){const st=N.cameras;if(F.length>0)for(let ut=0,xt=st.length;ut<xt;ut++){const vt=st[ut];bh(H,F,w,vt)}Wt&&dt.render(w);for(let ut=0,xt=st.length;ut<xt;ut++){const vt=st[ut];Th(x,w,vt,vt.viewport)}}else F.length>0&&bh(H,F,w,N),Wt&&dt.render(w),Th(x,w,N);A!==null&&(Ot.updateMultisampleRenderTarget(A),Ot.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(S,w,N),Vt.resetDefaultState(),D=-1,E=null,y.pop(),y.length>0?(m=y[y.length-1],q===!0&&Bt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Pc(w,N,z,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){H&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);const ut=tt.update(w),xt=w.material;xt.visible&&x.push(w,ut,xt,z,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const ut=tt.update(w),xt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ft.copy(ut.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(xt)){const vt=ut.groups;for(let Rt=0,Lt=vt.length;Rt<Lt;Rt++){const bt=vt[Rt],ie=xt[bt.materialIndex];ie&&ie.visible&&x.push(w,ut,ie,z,Ft.z,bt)}}else xt.visible&&x.push(w,ut,xt,z,Ft.z,null)}}const st=w.children;for(let ut=0,xt=st.length;ut<xt;ut++)Pc(st[ut],N,z,H)}function Th(w,N,z,H){const F=w.opaque,st=w.transmissive,ut=w.transparent;m.setupLightsView(z),q===!0&&Bt.setGlobalState(S.clippingPlanes,z),H&&St.viewport(v.copy(H)),F.length>0&&bo(F,N,z),st.length>0&&bo(st,N,z),ut.length>0&&bo(ut,N,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function bh(w,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new lr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?fo:hi,minFilter:tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const st=m.state.transmissionRenderTarget[H.id],ut=H.viewport||v;st.setSize(ut.z,ut.w);const xt=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(O),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&dt.render(z);const vt=S.toneMapping;S.toneMapping=Ai;const Rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&Bt.setGlobalState(S.clippingPlanes,H),bo(w,z,H),Ot.updateMultisampleRenderTarget(st),Ot.updateRenderTargetMipmap(st),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let bt=0,ie=N.length;bt<ie;bt++){const ye=N[bt],Se=ye.object,sn=ye.geometry,re=ye.material,yt=ye.group;if(re.side===Tn&&Se.layers.test(H.layers)){const ke=re.side;re.side=qe,re.needsUpdate=!0,Ah(Se,z,H,sn,re,yt),re.side=ke,re.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(st),Ot.updateRenderTargetMipmap(st))}S.setRenderTarget(xt),S.setClearColor(O,V),Rt!==void 0&&(H.viewport=Rt),S.toneMapping=vt}function bo(w,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=w.length;F<st;F++){const ut=w[F],xt=ut.object,vt=ut.geometry,Rt=H===null?ut.material:H,Lt=ut.group;xt.layers.test(z.layers)&&Ah(xt,N,z,vt,Rt,Lt)}}function Ah(w,N,z,H,F,st){w.onBeforeRender(S,N,z,H,F,st),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,S.renderBufferDirect(z,N,H,F,w,st),F.side=Ri,F.needsUpdate=!0,S.renderBufferDirect(z,N,H,F,w,st),F.side=Tn):S.renderBufferDirect(z,N,H,F,w,st),w.onAfterRender(S,N,z,H,F,st)}function Ao(w,N,z){N.isScene!==!0&&(N=Gt);const H=Ut.get(w),F=m.state.lights,st=m.state.shadowsArray,ut=F.state.version,xt=J.getParameters(w,F.state,st,N,z),vt=J.getProgramCacheKey(xt);let Rt=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?M:C).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Rt===void 0&&(w.addEventListener("dispose",Ct),Rt=new Map,H.programs=Rt);let Lt=Rt.get(vt);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ut)return Rh(w,xt),Lt}else xt.uniforms=J.getUniforms(w),w.onBeforeCompile(xt,S),Lt=J.acquireProgram(xt,vt),Rt.set(vt,Lt),H.uniforms=xt.uniforms;const bt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=Bt.uniform),Rh(w,xt),H.needsLights=Qm(w),H.lightsStateVersion=ut,H.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.directionalShadowMap.value=F.state.directionalShadowMap,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotShadowMap.value=F.state.spotShadowMap,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMap.value=F.state.pointShadowMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function Ch(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=xa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Rh(w,N){const z=Ut.get(w);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function jm(w,N,z,H,F){N.isScene!==!0&&(N=Gt),Ot.resetTextureUnits();const st=N.fog,ut=H.isMeshStandardMaterial?N.environment:null,xt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,vt=(H.isMeshStandardMaterial?M:C).get(H.envMap||ut),Rt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!z.morphAttributes.position,ie=!!z.morphAttributes.normal,ye=!!z.morphAttributes.color;let Se=Ai;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=S.toneMapping);const sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=sn!==void 0?sn.length:0,yt=Ut.get(H),ke=m.state.lights;if(q===!0&&(et===!0||w!==E)){const dn=w===E&&H.id===D;Bt.setState(H,w,dn)}let se=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ke.state.version||yt.outputColorSpace!==xt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==vt||H.fog===!0&&yt.fog!==st||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Bt.numPlanes||yt.numIntersection!==Bt.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Lt||yt.morphTargets!==bt||yt.morphNormals!==ie||yt.morphColors!==ye||yt.toneMapping!==Se||yt.morphTargetsCount!==re)&&(se=!0):(se=!0,yt.__version=H.version);let Mn=yt.currentProgram;se===!0&&(Mn=Ao(H,N,F));let yr=!1,on=!1,Lc=!1;const Ce=Mn.getUniforms(),pi=yt.uniforms;if(St.useProgram(Mn.program)&&(yr=!0,on=!0,Lc=!0),H.id!==D&&(D=H.id,on=!0),yr||E!==w){Ce.setValue(L,"projectionMatrix",w.projectionMatrix),Ce.setValue(L,"viewMatrix",w.matrixWorldInverse);const dn=Ce.map.cameraPosition;dn!==void 0&&dn.setValue(L,ft.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,on=!0,Lc=!0)}if(F.isSkinnedMesh){Ce.setOptional(L,F,"bindMatrix"),Ce.setOptional(L,F,"bindMatrixInverse");const dn=F.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ce.setValue(L,"boneTexture",dn.boneTexture,Ot))}F.isBatchedMesh&&(Ce.setOptional(L,F,"batchingTexture"),Ce.setValue(L,"batchingTexture",F._matricesTexture,Ot),Ce.setOptional(L,F,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",F._indirectTexture,Ot),Ce.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",F._colorsTexture,Ot));const Ic=z.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0)&&Zt.update(F,z,Mn),(on||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,Ce.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(pi.envMap.value=vt,pi.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(pi.envMapIntensity.value=N.environmentIntensity),on&&(Ce.setValue(L,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&Jm(pi,Lc),st&&H.fog===!0&&Tt.refreshFogUniforms(pi,st),Tt.refreshMaterialUniforms(pi,H,j,X,m.state.transmissionRenderTarget[w.id]),xa.upload(L,Ch(yt),pi,Ot)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xa.upload(L,Ch(yt),pi,Ot),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(L,"center",F.center),Ce.setValue(L,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(L,"normalMatrix",F.normalMatrix),Ce.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const dn=H.uniformsGroups;for(let Dc=0,t0=dn.length;Dc<t0;Dc++){const Ph=dn[Dc];_e.update(Ph,Mn),_e.bind(Ph,Mn)}}return Mn}function Jm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Qm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,z){Ut.get(w.texture).__webglTexture=N,Ut.get(w.depthTexture).__webglTexture=z;const H=Ut.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const z=Ut.get(w);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,z=0){A=w,I=N,b=z;let H=!0,F=null,st=!1,ut=!1;if(w){const vt=Ut.get(w);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):vt.__webglFramebuffer===void 0?Ot.setupRenderTarget(w):vt.__hasExternalTextures&&Ot.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const Lt=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?F=Lt[N][z]:F=Lt[N],st=!0):w.samples>0&&Ot.useMultisampledRTT(w)===!1?F=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[z]:F=Lt,v.copy(w.viewport),P.copy(w.scissor),k=w.scissorTest}else v.copy(mt).multiplyScalar(j).floor(),P.copy(Mt).multiplyScalar(j).floor(),k=Kt;if(St.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&St.drawBuffers(w,F),St.viewport(v),St.scissor(P),St.setScissorTest(k),st){const vt=Ut.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,z)}else if(ut){const vt=Ut.get(w.texture),Rt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.__webglTexture,z||0,Rt)}D=-1},this.readRenderTargetPixels=function(w,N,z,H,F,st,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(L.FRAMEBUFFER,xt);try{const vt=w.texture,Rt=vt.format,Lt=vt.type;if(!de.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&z>=0&&z<=w.height-F&&L.readPixels(N,z,H,F,Nt.convert(Rt),Nt.convert(Lt),st)}finally{const vt=A!==null?Ut.get(A).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,N,z,H,F,st,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){St.bindFramebuffer(L.FRAMEBUFFER,xt);try{const vt=w.texture,Rt=vt.format,Lt=vt.type;if(!de.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&z>=0&&z<=w.height-F){const bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),L.readPixels(N,z,H,F,Nt.convert(Rt),Nt.convert(Lt),0),L.flush();const ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await hg(L,ie,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st)}finally{L.deleteBuffer(bt),L.deleteSync(ie)}return st}}finally{const vt=A!==null?Ut.get(A).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(w,N=null,z=0){w.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(w.image.width*H),st=Math.floor(w.image.height*H),ut=N!==null?N.x:0,xt=N!==null?N.y:0;Ot.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ut,xt,F,st),St.unbindTexture()},this.copyTextureToTexture=function(w,N,z=null,H=null,F=0){w.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let st,ut,xt,vt,Rt,Lt;z!==null?(st=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.min.x,vt=z.min.y):(st=w.image.width,ut=w.image.height,xt=0,vt=0),H!==null?(Rt=H.x,Lt=H.y):(Rt=0,Lt=0);const bt=Nt.convert(N.format),ie=Nt.convert(N.type);Ot.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ye=L.getParameter(L.UNPACK_ROW_LENGTH),Se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),re=L.getParameter(L.UNPACK_SKIP_ROWS),yt=L.getParameter(L.UNPACK_SKIP_IMAGES),ke=w.isCompressedTexture?w.mipmaps[F]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ke.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,vt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Rt,Lt,st,ut,bt,ie,ke.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Rt,Lt,ke.width,ke.height,bt,ke.data):L.texSubImage2D(L.TEXTURE_2D,F,Rt,Lt,st,ut,bt,ie,ke),L.pixelStorei(L.UNPACK_ROW_LENGTH,ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yt),F===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(w,N,z=null,H=null,F=0){w.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0);let st,ut,xt,vt,Rt,Lt,bt,ie,ye;const Se=w.isCompressedTexture?w.mipmaps[F]:w.image;z!==null?(st=z.max.x-z.min.x,ut=z.max.y-z.min.y,xt=z.max.z-z.min.z,vt=z.min.x,Rt=z.min.y,Lt=z.min.z):(st=Se.width,ut=Se.height,xt=Se.depth,vt=0,Rt=0,Lt=0),H!==null?(bt=H.x,ie=H.y,ye=H.z):(bt=0,ie=0,ye=0);const sn=Nt.convert(N.format),re=Nt.convert(N.type);let yt;if(N.isData3DTexture)Ot.setTexture3D(N,0),yt=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ot.setTexture2DArray(N,0),yt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const ke=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Mn=L.getParameter(L.UNPACK_SKIP_PIXELS),yr=L.getParameter(L.UNPACK_SKIP_ROWS),on=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,F,bt,ie,ye,st,ut,xt,sn,re,Se.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,F,bt,ie,ye,st,ut,xt,sn,Se.data):L.texSubImage3D(yt,F,bt,ie,ye,st,ut,xt,sn,re,Se),L.pixelStorei(L.UNPACK_ROW_LENGTH,ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,yr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,on),F===0&&N.generateMipmaps&&L.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&Ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ot.setTextureCube(w,0):w.isData3DTexture?Ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ot.setTexture2DArray(w,0):Ot.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){I=0,b=0,A=null,St.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Pu?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Wa?"display-p3":"srgb"}}class Nu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new Nu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yy extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ss("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new R;class Ua{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),r=ce(r,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rp extends Ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kr;const Os=new R,zr=new R,Hr=new R,Gr=new Pt,Bs=new Pt,sp=new ue,Zo=new R,ks=new R,jo=new R,bd=new Pt,ol=new Pt,Ad=new Pt;class wy extends Ee{constructor(t=new rp){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sy(e,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new Ua(i,3,0,!1)),kr.setAttribute("uv",new Ua(i,2,3,!1))}this.geometry=kr,this.material=t,this.center=new Pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Jo(Zo.set(-.5,-.5,0),Hr,o,zr,r,s),Jo(ks.set(.5,-.5,0),Hr,o,zr,r,s),Jo(jo.set(.5,.5,0),Hr,o,zr,r,s),bd.set(0,0),ol.set(1,0),Ad.set(1,1);let a=t.ray.intersectTriangle(Zo,ks,jo,!1,Os);if(a===null&&(Jo(ks.set(-.5,.5,0),Hr,o,zr,r,s),ol.set(0,1),a=t.ray.intersectTriangle(Zo,jo,ks,!1,Os),a===null))return;const c=t.ray.origin.distanceTo(Os);c<t.near||c>t.far||e.push({distance:c,point:Os.clone(),uv:Cn.getInterpolation(Os,Zo,ks,jo,bd,ol,Ad,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jo(n,t,e,i,r,s){Gr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Bs.x=s*Gr.x-r*Gr.y,Bs.y=r*Gr.x+s*Gr.y):Bs.copy(Gr),n.copy(t),n.x+=Bs.x,n.y+=Bs.y,n.applyMatrix4(sp)}class Ey extends Ye{constructor(t=null,e=1,i=1,r,s,o,a,c,l=en,h=en,d,p){super(null,o,a,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cd extends je{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vr=new ue,Rd=new ue,Qo=[],Pd=new mr,Ty=new ue,zs=new B,Hs=new gr;class Wi extends B{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ty)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vr),Pd.copy(t.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Pd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vr),Hs.copy(t.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),t.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),Rd.multiplyMatrices(i,Vr),zs.matrixWorld=Rd,zs.raycast(t,Qo);for(let o=0,a=Qo.length;o<a;o++){const c=Qo[o];c.instanceId=s,c.object=this,e.push(c)}Qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ey(new Float32Array(r*this.count),r,this.count,bu,zn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class op extends Ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new R,Fa=new R,Ld=new ue,Gs=new Xa,ta=new gr,al=new R,Id=new R;class by extends Ee{constructor(t=new Ne,e=new op){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Na.fromBufferAttribute(e,r-1),Fa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Na.distanceTo(Fa);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),ta.radius+=s,t.ray.intersectsSphere(ta)===!1)return;Ld.copy(r).invert(),Gs.copy(t.ray).applyMatrix4(Ld);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=l){const f=h.getX(x),y=h.getX(x+1),S=ea(this,t,Gs,c,f,y);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(_-1),m=h.getX(g),f=ea(this,t,Gs,c,x,m);f&&e.push(f)}}else{const g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let x=g,m=_-1;x<m;x+=l){const f=ea(this,t,Gs,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=ea(this,t,Gs,c,_-1,g);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ea(n,t,e,i,r,s){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,s),e.distanceSqToSegment(Na,Fa,al,Id)>i)return;al.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(al);if(!(c<t.near||c>t.far))return{distance:c,point:Id.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class Ay extends by{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ya extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Dd=new ue,nu=new Xa,na=new gr,ia=new R;class Fu extends Ee{constructor(t=new Ne,e=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=s,t.ray.intersectsSphere(na)===!1)return;Dd.copy(r).invert(),nu.copy(t.ray).applyMatrix4(Dd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=p,x=g;_<x;_++){const m=l.getX(_);ia.fromBufferAttribute(d,m),Ud(ia,m,c,r,t,e,this)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,x=g;_<x;_++)ia.fromBufferAttribute(d,_),Ud(ia,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ud(n,t,e,i,r,s,o){const a=nu.distanceSqToPoint(n);if(a<e){const c=new R;nu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class $a extends Ye{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Ne{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new R,h=new Pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const g=i+d/e*r;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends Ne{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],g=[];let _=0;const x=[],m=i/2;let f=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(p,3)),this.setAttribute("uv",new ve(g,2));function y(){const T=new R,I=new R;let b=0;const A=(e-t)/i;for(let D=0;D<=s;D++){const E=[],v=D/s,P=v*(e-t)+t;for(let k=0;k<=r;k++){const O=k/r,V=O*c+a,$=Math.sin(V),X=Math.cos(V);I.x=P*$,I.y=-v*i+m,I.z=P*X,d.push(I.x,I.y,I.z),T.set($,A,X).normalize(),p.push(T.x,T.y,T.z),g.push(O,1-v),E.push(_++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const v=x[E][D],P=x[E+1][D],k=x[E+1][D+1],O=x[E][D+1];h.push(v,P,O),h.push(P,k,O),b+=6}l.addGroup(f,b,0),f+=b}function S(T){const I=_,b=new Pt,A=new R;let D=0;const E=T===!0?t:e,v=T===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,m*v,0),p.push(0,v,0),g.push(.5,.5),_++;const P=_;for(let k=0;k<=r;k++){const V=k/r*c+a,$=Math.cos(V),X=Math.sin(V);A.x=E*X,A.y=m*v,A.z=E*$,d.push(A.x,A.y,A.z),p.push(0,v,0),b.x=$*.5+.5,b.y=X*.5*v+.5,g.push(b.x,b.y),_++}for(let k=0;k<r;k++){const O=I+k,V=P+k;T===!0?h.push(V,V+1,O):h.push(V+1,V,O),D+=3}l.addGroup(f,D,T===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends jt{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class go extends Ne{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new R,T=new R,I=new R;for(let b=0;b<e.length;b+=3)g(e[b+0],S),g(e[b+1],T),g(e[b+2],I),c(S,T,I,y)}function c(y,S,T,I){const b=I+1,A=[];for(let D=0;D<=b;D++){A[D]=[];const E=y.clone().lerp(T,D/b),v=S.clone().lerp(T,D/b),P=b-D;for(let k=0;k<=P;k++)k===0&&D===b?A[D][k]=E:A[D][k]=E.clone().lerp(v,k/P)}for(let D=0;D<b;D++)for(let E=0;E<2*(b-D)-1;E++){const v=Math.floor(E/2);E%2===0?(p(A[D][v+1]),p(A[D+1][v]),p(A[D][v])):(p(A[D][v+1]),p(A[D+1][v+1]),p(A[D+1][v]))}}function l(y){const S=new R;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(y),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const y=new R;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const T=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;o.push(T,1-I)}_(),d()}function d(){for(let y=0;y<o.length;y+=6){const S=o[y+0],T=o[y+2],I=o[y+4],b=Math.max(S,T,I),A=Math.min(S,T,I);b>.9&&A<.1&&(S<.2&&(o[y+0]+=1),T<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function p(y){s.push(y.x,y.y,y.z)}function g(y,S){const T=y*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const y=new R,S=new R,T=new R,I=new R,b=new Pt,A=new Pt,D=new Pt;for(let E=0,v=0;E<s.length;E+=9,v+=6){y.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),T.set(s[E+6],s[E+7],s[E+8]),b.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),I.copy(y).add(S).add(T).divideScalar(3);const P=m(I);x(b,v+0,y,P),x(A,v+2,S,P),x(D,v+4,T,P)}}function x(y,S,T,I){I<0&&y.x===1&&(o[S]=y.x-1),T.x===0&&T.z===0&&(o[S]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.vertices,t.indices,t.radius,t.details)}}class Dn extends go{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dn(t.radius,t.detail)}}class Ii extends go{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ii(t.radius,t.detail)}}class Ka extends go{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ka(t.radius,t.detail)}}class Nn extends Ne{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,p=new R,g=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const y=[],S=f/i;let T=0;f===0&&o===0?T=.5/e:f===i&&c===Math.PI&&(T=-.5/e);for(let I=0;I<=e;I++){const b=I/e;d.x=-t*Math.cos(r+b*s)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(r+b*s)*Math.sin(o+S*a),_.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),m.push(b+T,1-S),y.push(l++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const S=h[f][y+1],T=h[f][y],I=h[f+1][y],b=h[f+1][y+1];(f!==0||o>0)&&g.push(S,T,b),(f!==i-1||c<Math.PI)&&g.push(T,I,b)}this.setIndex(g),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class di extends Ne{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new R,d=new R,p=new R;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const x=_/r*s,m=g/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const x=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,f=(r+1)*(g-1)+_,y=(r+1)*g+_;o.push(x,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ct extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cy extends op{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Ou extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ry extends Ou{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cl=new ue,Nd=new R,Fd=new R;class ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Du,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nd),Fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fd),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Od=new ue,Vs=new R,ll=new R;class Py extends ap{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),ll.copy(i.position),ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ll),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od)}}class _o extends Ou{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Py}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ly extends ap{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iy extends Ou{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Ly}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bd(){return(typeof performance>"u"?Date:performance).now()}const kd=new ue;class cp{constructor(t,e,i=0,r=1/0){this.ray=new Xa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(t,e=!0,i=[]){return iu(t,this,i,e),i.sort(zd),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)iu(t[r],this,i,e);return i.sort(zd),i}}function zd(n,t){return n.distance-t.distance}function iu(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)iu(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const Ws=new R;function pn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Ws.copy(t),Ws[i]=0,Ws.normalize();const l=.5*o/(o+a),h=1-Ws.angleTo(n)/c;return Math.sign(Ws[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Za extends wt{constructor(t=1,e=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,c=new R,l=new R(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,_=new R,x=.5/r;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*s,h[m+1]=l.y*Math.sign(a.y)+c.y*s,h[m+2]=l.z*Math.sign(a.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[f+0]=pn(_,c,"z","y",s,i),p[f+1]=1-pn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[f+0]=1-pn(_,c,"z","y",s,i),p[f+1]=1-pn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[f+0]=1-pn(_,c,"x","z",s,t),p[f+1]=pn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[f+0]=1-pn(_,c,"x","z",s,t),p[f+1]=1-pn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[f+0]=1-pn(_,c,"x","y",s,t),p[f+1]=1-pn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[f+0]=pn(_,c,"x","y",s,t),p[f+1]=1-pn(_,c,"y","x",s,e);break}}}const lp=document.getElementById("game"),Hd=document.getElementById("hud"),Uy=document.getElementById("nightText"),Ny=document.getElementById("phaseIcon"),Fy=document.getElementById("healthText"),ul=document.getElementById("healthFill"),ms=document.getElementById("joystickZone");document.getElementById("joystickBase");const ro=document.getElementById("joystickKnob");document.getElementById("lookZone");const so=document.getElementById("jumpBtn"),up=document.getElementById("undragBtn"),Bu=document.getElementById("storeBtn"),to=document.getElementById("unstoreBtn"),ku=document.getElementById("eatBtn"),zu=document.getElementById("grinderBtn"),Hu=document.getElementById("fireBtn"),Gu=document.getElementById("plantBtn"),Oy=document.getElementById("woodText"),By=document.getElementById("saplingText"),ky=document.getElementById("berryText"),zy=document.getElementById("ironText"),$s=document.getElementById("mapExpandedNotice"),hp=document.getElementById("startHint"),hl=document.getElementById("dragLabel"),Hy=document.getElementById("dragName"),ra=document.getElementById("dragFlames"),Hn=document.getElementById("sackCounter"),va=document.getElementById("fireFlash"),Ma=document.getElementById("benchPrompt"),Vu=document.getElementById("placeBtn"),Gy=document.getElementById("hungerText"),Gd=document.getElementById("hungerFill"),xo=document.getElementById("fireWarning"),ru=document.getElementById("touchDebug"),ja=document.getElementById("deathBanner"),oo=document.getElementById("toast"),jr=document.getElementById("hitMeter"),Vy=document.getElementById("hitMeterText"),Wy=document.getElementById("hitMeterFill"),Wu=document.getElementById("darkness"),ai=document.getElementById("startOverlay"),Xy=document.getElementById("startBtn"),dp=document.getElementById("axeSlot"),Ci=document.getElementById("backpackSlot"),fp=document.getElementById("pickaxeSlot"),pp=document.getElementById("torchSlot"),mp=document.getElementById("ironSwordSlot"),qy=document.getElementById("axeLabel"),Yy=document.getElementById("backpackLabel"),$y=document.getElementById("pickaxeLabel"),Ky=document.getElementById("torchLabel"),Zy=document.getElementById("ironSwordLabel"),jy=document.getElementById("backpackBadge"),Jy=document.getElementById("inventoryPanel"),dl=document.getElementById("inventoryList"),Qy=document.getElementById("inventoryCapacity"),tS=document.getElementById("closeInventoryBtn"),eS=document.getElementById("unequipBtn"),gp=document.getElementById("craftPanel"),fl=document.getElementById("craftGrid"),nS=document.getElementById("closeCraftBtn"),iS=document.getElementById("craftTierLabel"),Vd=document.getElementById("craftWoodStock"),Wd=document.getElementById("craftIronStock"),rS=document.getElementById("craftDetailIcon"),sS=document.getElementById("craftDetailName"),oS=document.getElementById("craftDetailDesc"),pl=document.getElementById("craftDetailCost"),aS=document.getElementById("craftDetailBadge"),su=document.getElementById("craftButton"),ya=document.getElementById("audioToggle"),Ks=document.getElementById("cameraBtn"),_p=document.getElementById("settingsBtn"),cS=document.getElementById("settingsPanel"),lS=document.getElementById("closeSettingsBtn"),Xd=document.getElementById("volumeSlider"),uS=document.getElementById("volumeValue"),Ts=new My({canvas:lp,antialias:!0,alpha:!1,powerPreference:"high-performance"});Ts.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Ts.setSize(window.innerWidth,window.innerHeight);Ts.shadowMap.enabled=!0;Ts.shadowMap.type=Af;const ze=new yy;ze.background=new Et(133647);ze.fog=new Nu(465186,.045);const pe=new ln(67,window.innerWidth/window.innerHeight,.1,1400);pe.rotation.order="YXZ";const hS=new Dy,ee=new At;ze.add(ee);const We=new R(9.6,0,10.2),Xe=new R(13.8,0,5),Gn=new R(-10.5,0,6.2),Jr=new R(8,0,-11),Vn=new R(-6.5,0,-8.2),dS=[{x:We.x,z:We.z,r:3.4},{x:Xe.x,z:Xe.z,r:2.8},{x:Gn.x,z:Gn.z,r:3.6},{x:Jr.x,z:Jr.z,r:5.2},{x:Vn.x,z:Vn.z,r:2.8}];function vo(n,t,e=0){for(const i of dS)if(Math.hypot(n-i.x,t-i.z)<i.r+e)return!0;return!1}const ou=13,bs=[],ao=13,xp=.5,fS=5,pS=1.6,Xu=4,mS=.45,qd=67,gS=75,Yd=Hf.degToRad(80),_S=.0037,xS=.0022,Sa=4,vp=15,vS=300,$i=-1.05,Mp=-.34,MS=1.309,yp=MS-($i+Mp),Sp=-Math.PI/2,yS=.34;function qt(n,t){const e=Math.hypot(n,t),i=Math.min(Math.max((e-7)/11,0),1);return(Math.sin(n*.11+.7)*Math.cos(t*.1-.35)*.55+Math.sin((n+t)*.055-.6)*.35+Math.sin(n*.024-t*.019)*.22)*i}const Ja=new _r(1780,1780,110,110);Ja.rotateX(-Math.PI/2);const sa=Ja.attributes.position;for(let n=0;n<sa.count;n+=1)sa.setY(n,qt(sa.getX(n),sa.getZ(n)));Ja.computeVertexNormals();const wp=new B(Ja,new ct({color:1058079,roughness:1,metalness:0}));wp.receiveShadow=!0;ee.add(wp);const Xt=new At;Xt.userData.campfireRef=!0;ee.add(Xt);const Qe=new At;Xt.add(Qe);const Mo=new B(new jt(.74,.92,.12,12),new ct({color:2759444,emissive:8006664,emissiveIntensity:.55,roughness:1}));Mo.position.y=.06;Mo.receiveShadow=!0;Xt.add(Mo);const gn=new B(new Nn(.22,10,10),new ct({color:16747050,emissive:16739096,emissiveIntensity:1.8,roughness:.55,metalness:.1}));gn.position.y=.55;gn.castShadow=!1;Xt.add(gn);const as=new _o(16748092,2.2,15,2.1);as.position.set(0,1.3,0);Xt.add(as);const cs=new _o(16765597,.85,20,2);cs.position.set(0,1.2,0);ze.add(cs);const au=new Ry(9815807,988441,.9);ze.add(au);const Un=new Iy(12244991,.9);Un.position.set(-8,12,6);Un.castShadow=!0;Un.shadow.mapSize.width=1024;Un.shadow.mapSize.height=1024;Un.shadow.camera.left=-35;Un.shadow.camera.right=35;Un.shadow.camera.top=35;Un.shadow.camera.bottom=-35;ze.add(Un);const Je=[],SS=new ct({color:3876643,roughness:1}),wS=new ct({color:1714719,roughness:1});function Ep(n,t,e=1){const i=new At,r=new B(new jt(.18*e,.28*e,1.7*e,6),SS);r.position.y=.85*e,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const s=new B(new Le(.8*e,2.2*e,6),wS);return s.position.y=2.4*e,s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.position.set(n,qt(n,t),t),i.userData.scale=e,i.userData.cameraMeshes=[r,s],i.userData.trunk=r,i.userData.foliage=s,i.userData.treeRef=i,ee.add(i),Je.push(i),i}for(let n=0;n<90;n+=1){const t=Math.random()*Math.PI*2,e=12+Math.random()*34,i=Math.cos(t)*e,r=Math.sin(t)*e;Math.abs(i)<6&&Math.abs(r)<6||vo(i,r,2.4)||Ep(i,r,.8+Math.random()*1.2)}const Tp=new Set([...Je].sort((n,t)=>Math.hypot(n.position.x,n.position.z)-Math.hypot(t.position.x,t.position.z)).slice(0,8));for(let n=0;n<Je.length;n+=4)Tp.add(Je[n]);for(const n of Tp){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.hits=ao,t.hitsMax=ao,t.shake=0,t.highlight=0,t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Et(16757082),t.trunk.material.emissiveIntensity=0}const ES=new ct({color:7029796,roughness:.9}),$d=new ct({color:3111493,roughness:.92});function bp(n=1){const t=new At,e=new B(new jt(.035,.055,.5,5),ES);e.position.y=.25,e.castShadow=!0,t.add(e);const i=new B(new Le(.28,.55,6),$d);i.position.y=.55,i.castShadow=!0,t.add(i);const r=new B(new Le(.19,.42,6),$d);return r.position.y=.84,r.castShadow=!0,t.add(r),t.scale.setScalar(n),t}for(let n=0;n<140;n+=1){const t=new B(new wt(.12,.16,.12),new ct({color:1521191,roughness:1})),e=Math.random()*Math.PI*2,i=5+Math.random()*41,r=Math.cos(e)*i,s=Math.sin(e)*i;vo(r,s,1.2)||(t.position.set(r,qt(r,s)+.08,s),t.castShadow=!0,t.receiveShadow=!0,ee.add(t))}const Y=new At;ze.add(Y);const vn=new At;vn.position.y=.01;Y.add(vn);const xr=new ct({color:16766527,emissive:3877120,emissiveIntensity:.38,roughness:.38,metalness:.03}),TS=new ct({color:3108818,roughness:.4,metalness:.03}),Ap=new ct({color:3709259,roughness:.42,metalness:.03}),qu=new ct({color:1185048,roughness:.5,metalness:0});function Kn(n,t,e,i,r=.035){const s=new B(new Za(n,t,e,2,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}const Cp=Kn(.84,.86,.44,TS,.045);Cp.position.y=1.27;vn.add(Cp);const As=new At;As.position.y=2;vn.add(As);const bS=Kn(.6,.6,.6,xr,.055);As.add(bS);const Rp=new Za(.075,.105,.025,1,.01),Pp=new B(Rp,qu);Pp.position.set(-.135,.085,.301);As.add(Pp);const Lp=new B(Rp,qu);Lp.position.set(.135,.085,.301);As.add(Lp);const Yu=new B(new di(.115,.021,4,14,Math.PI),qu);Yu.rotation.z=Math.PI;Yu.position.set(0,-.075,.303);As.add(Yu);const Wn=new At;Wn.position.set(-.54,1.64,0);vn.add(Wn);const Ip=Kn(.22,.78,.3,xr,.06);Ip.position.y=-.39;Wn.add(Ip);const Dp=Kn(.2,.16,.26,xr,.05);Dp.position.set(0,-.8,.01);Wn.add(Dp);const Ln=new At;Ln.position.set(.54,1.64,0);vn.add(Ln);const $u=Kn(.22,.78,.3,xr,.06);$u.position.y=-.39;Ln.add($u);const Up=Kn(.2,.16,.26,xr,.05);Up.position.set(0,0,0);const Cs=new At;Cs.position.set(0,-.41,.01);Cs.rotation.set(Mp,0,0);$u.add(Cs);Cs.add(Up);const ur=new At;ur.position.set(-.2,.84,0);vn.add(ur);const Np=Kn(.3,.82,.36,Ap,.045);Np.position.y=-.41;ur.add(Np);const hr=new At;hr.position.set(.2,.84,0);vn.add(hr);const Fp=Kn(.3,.82,.36,Ap,.045);Fp.position.y=-.41;hr.add(Fp);const Qa=new B(new Nn(.15,8,8),new ct({color:16762478,emissive:16747046,emissiveIntensity:2.1,roughness:.4}));Qa.position.set(.02,-.68,.2);Qa.castShadow=!0;Ln.add(Qa);const rn=new At;rn.position.set(0,0,0);rn.rotation.set(yp,Sp,0);Cs.add(rn);const Ku=new B(new jt(.038,.048,.95,6),new ct({color:8079911,roughness:.82,metalness:.02}));Ku.position.y=.475;Ku.castShadow=!0;rn.add(Ku);const Zu=new B(new jt(.052,.052,.22,6),new ct({color:3875859,roughness:.95}));Zu.position.y=0;Zu.castShadow=!0;rn.add(Zu);const ju=new B(new wt(.34,.2,.1),new ct({color:12175054,emissive:2371898,emissiveIntensity:.4,roughness:.3,metalness:.65}));ju.position.set(.11,.72,0);ju.castShadow=!0;rn.add(ju);const Ju=new B(new wt(.2,.3,.07),new ct({color:15266293,emissive:3096393,emissiveIntensity:.45,roughness:.24,metalness:.55}));Ju.position.set(.27,.72,0);Ju.castShadow=!0;rn.add(Ju);rn.visible=!1;const cu=new ct({color:11188417,emissive:1778988,emissiveIntensity:.36,roughness:.3,metalness:.68}),Oa=new ct({color:14477550,emissive:3490893,emissiveIntensity:.4,roughness:.24,metalness:.64}),AS=new ct({color:7422755,roughness:.84,metalness:.02}),lu=new ct({color:14725728,roughness:.42,metalness:.5});function tc(n,t,e=.042){const i=new B(new jt(e,e*1.2,t,6),AS);i.position.y=t*.5,i.castShadow=!0,n.add(i);const r=new B(new jt(e*1.28,e*1.28,.2,6),new ct({color:3547154,roughness:.95}));r.position.y=0,r.castShadow=!0,n.add(r)}function Op(){const n=new At;tc(n,.92,.038);const t=new B(new wt(.72,.13,.13),cu);t.position.set(.02,.76,0),t.castShadow=!0,n.add(t);const e=new B(new Le(.105,.31,4),Oa);e.position.set(.42,.76,0),e.rotation.z=-Math.PI/2,e.castShadow=!0,n.add(e);const i=new B(new Le(.09,.23,4),cu);return i.position.set(-.35,.76,0),i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i),n}function Bp(){const n=new At;tc(n,.96,.045);const t=new B(new wt(.36,.22,.11),cu);t.position.set(.11,.775,0),t.castShadow=!0,n.add(t);const e=new B(new wt(.22,.34,.075),Oa);e.position.set(.29,.775,0),e.rotation.z=-.06,e.castShadow=!0,n.add(e);const i=new B(new jt(.028,.028,.13,6),lu);return i.rotation.x=Math.PI/2,i.position.set(.11,.775,.04),n.add(i),n}function kp(){const n=new At;tc(n,.55,.035);const t=new B(new wt(.44,.08,.11),lu);t.position.y=.3835,t.castShadow=!0,n.add(t);const e=new B(new wt(.14,.9,.055),Oa);e.position.y=.8835,e.castShadow=!0,n.add(e);const i=new B(new Le(.099,.24,4),Oa);i.position.y=1.4335,i.castShadow=!0,n.add(i);const r=new B(new Nn(.07,6,5),lu);return r.position.y=.0835,n.add(r),n}function CS(){const n=new At;tc(n,.52,.036);const t=new B(new jt(.075,.06,.18,7),new ct({color:3810324,roughness:.95}));t.position.y=.5,n.add(t);const e=new B(new Le(.11,.3,6),new nn({color:16753978,transparent:!0,opacity:.9,blending:Pi,depthWrite:!1}));return e.position.y=.72,n.add(e),n}const ec=Op(),nc=Bp(),ic=kp(),rc=CS();for(const[n,t]of[["pickaxe",ec],["torch",rc],["ironAxe",nc],["ironSword",ic]])t.position.set(0,0,0),t.rotation.set(yp,Sp,0),t.visible=!1,t.userData.baseY=t.position.y,t.userData.tool=n,Cs.add(t);const RS=new ct({color:8145450,roughness:.78,metalness:.02}),Kd=new ct({color:5123096,roughness:.86}),PS=new ct({color:14725728,roughness:.42,metalness:.5});function LS(n=1){const t=new At,e=new B(new Nn(.27,10,8),RS);e.scale.set(1,1.12,.8),e.position.y=-.04,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const i=new B(new jt(.1,.17,.2,8),Kd);i.position.y=.27,i.castShadow=!0,t.add(i);const r=new B(new di(.11,.025,5,10),PS);r.rotation.x=Math.PI/2,r.position.y=.3,t.add(r);const s=new B(new Za(.16,.12,.035,2,.02),Kd);return s.position.set(0,-.08,.215),s.castShadow=!0,t.add(s),t.scale.setScalar(n),t}const Zn=LS(1);Zn.position.set(.09,-.96,.2);Zn.rotation.set(.08,Math.PI-.25,.05);Zn.visible=!1;Ln.add(Zn);const IS=rn.position.y,DS=Zn.position.y;rn.userData.baseY=IS;rn.userData.tool="axe";Zn.userData.baseY=DS;Zn.userData.tool="backpack";ze.add(pe);const yo=new At;yo.visible=!1;pe.add(yo);const xe=new At;xe.position.set(.47,-.7,-.8);xe.rotation.set(-.2,.14,.24);xe.scale.setScalar(.78);yo.add(xe);const Qu=Kn(.17,.5,.19,xr,.05);Qu.position.set(0,.22,0);Qu.castShadow=!1;xe.add(Qu);const th=Kn(.2,.18,.22,xr,.045);th.position.set(0,.49,.01);th.castShadow=!1;xe.add(th);const eh=new At;eh.position.set(0,.5,.02);xe.add(eh);const zp={axe:rn.clone(!0),pickaxe:ec.clone(!0),torch:rc.clone(!0),ironAxe:nc.clone(!0),ironSword:ic.clone(!0)},US={axe:.3,pickaxe:.34,torch:.2,ironAxe:.36,ironSword:.2};for(const[n,t]of Object.entries(zp))t.position.set(0,US[n],0),t.rotation.set(-.15,.12,.26),t.scale.setScalar(.9),t.visible=!1,t.userData.fpTool=n,t.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),eh.add(t);const Wr={x:xe.position.x,y:xe.position.y,z:xe.position.z,rx:xe.rotation.x,ry:xe.rotation.y,rz:xe.rotation.z},sc=new _o(16760945,.8,14,2);sc.position.set(0,1.9,0);Y.add(sc);const hn=new B(new di(1.05,.055,5,24),new nn({color:16769184,transparent:!0,opacity:.8}));hn.rotation.x=Math.PI/2;hn.position.set(0,.9,.85);hn.visible=!1;Y.add(hn);const un=new B(new Ii(.42,1),new nn({color:16765562,transparent:!0,opacity:0,blending:Pi,depthWrite:!1,wireframe:!0}));un.visible=!1;ze.add(un);Y.position.set(0,qt(0,4),4);const nh=[],NS=new Dn(.55,0),FS=new ct({color:4608078,roughness:.95,metalness:.02});for(let n=0;n<8;n+=1){const t=Math.random()*Math.PI*2,e=10+Math.random()*20,i=Math.cos(t)*e,r=Math.sin(t)*e;if(vo(i,r,1.8)||Je.some(c=>Math.hypot(c.position.x-i,c.position.z-r)<1.6))continue;const s=.8+Math.random()*.55,o=qt(i,r),a=new B(NS,FS);a.position.set(i,o+.3025*s,r),a.scale.set(s,s*.55,s),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,ee.add(a),nh.push({x:i,z:r,radius:.52*s,top:o+.605*s,mesh:a})}const ls=[],xn=[];let Ht=null;const oc=[],OS=new jt(.15,.17,.72,7),BS=new ct({color:10117944,emissive:2823689,emissiveIntensity:.45,roughness:.85,metalness:.02}),kS=new ct({color:14170699,emissive:3998985,emissiveIntensity:.45,roughness:.62}),zS=new ct({color:4168275,roughness:.88}),HS=new Nn(.09,6,5),GS=new ct({color:2380346,roughness:.98}),VS=new ct({color:1588009,roughness:.98});function Zd(n=1){const t=new At,e=[[0,.1,0],[.1,.04,.03],[-.09,.03,.05],[.02,.02,-.09]];for(const[r,s,o]of e){const a=new B(HS,kS);a.position.set(r,s,o),a.castShadow=!0,t.add(a)}const i=new B(new Le(.1,.16,5),zS);return i.position.set(.03,.2,-.02),i.rotation.z=.4,i.castShadow=!0,t.add(i),t.scale.setScalar(n),t}function WS(n,t){const e=new At,i=new B(new Ii(.62,0),GS);i.position.y=.34,i.scale.set(1.1,.7,1.05),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new B(new Ii(.42,0),VS);r.position.set(.26,.54,-.12),r.scale.set(1,.75,1),r.castShadow=!0,e.add(r),e.position.set(n,qt(n,t),t),e.rotation.y=Math.random()*Math.PI*2,ee.add(e);const s={x:n,z:t,mesh:e,nextHarvest:0};e.userData.berryBushRef=s,oc.push(s)}for(let n=0;n<15;n+=1){let t=!1;for(let e=0;e<24&&!t;e+=1){const i=Math.random()*Math.PI*2,r=8.5+Math.random()*22,s=Math.cos(i)*r,o=Math.sin(i)*r;Math.hypot(s,o)<8||vo(s,o,2.2)||Je.some(a=>Math.hypot(a.position.x-s,a.position.z-o)<2.1)||oc.some(a=>Math.hypot(a.x-s,a.z-o)<3.2)||(WS(s,o),t=!0)}}const vr=[],uu=new ct({color:5858667,roughness:.92,metalness:.08,flatShading:!0}),Hp=new ct({color:7635336,roughness:.86,metalness:.12,flatShading:!0}),Gp=new ct({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.32}),Vp=new Ka(.095,0);function XS(n,t,e=1){const i=new At,r={group:i,x:n,z:t,scale:e,hits:ou,hitsMax:ou,broken:!1,regrow:0,shake:0,sway:Math.random()*Math.PI*2},s=new B(new Dn(.76,0),uu);s.position.y=.5,s.scale.set(1.05,.82,.92),s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,i.add(s);const o=new B(new Dn(.42,0),Hp);o.position.set(.48,.26,.2),o.scale.set(1,.75,.9),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new B(new Dn(.3,0),uu);a.position.set(-.46,.2,-.26),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,i.add(a);const c=[[-.33,.53,.63,1.5,1.1,.62,.2,.25,.45],[.18,.62,.66,1.2,.9,.55,-.15,.4,-.35],[.63,.44,.25,.62,1.15,1.3,.3,-.2,.25],[-.12,.35,.69,1.35,.85,.55,.4,.1,.2],[.38,.5,-.62,1.2,1,.7,-.25,.3,-.3]];for(const[l,h,d,p,g,_,x,m,f]of c){const y=new B(Vp,Gp);y.position.set(l,h,d),y.scale.set(p,g,_),y.rotation.set(x,m,f),y.castShadow=!0,i.add(y)}return i.position.set(n,qt(n,t),t),i.rotation.y=Math.random()*Math.PI*2,i.scale.setScalar(e),i.traverse(l=>{l.userData.rockRef=r}),ee.add(i),vr.push(r),bs.push({x:n,z:t,radius:.56*e,rock:r}),r}function qS(n,t,e){return!(Math.hypot(n,t)<10.5||vo(n,t,2*e)||Je.some(i=>Math.hypot(i.position.x-n,i.position.z-t)<1.9*e)||oc.some(i=>Math.hypot(i.x-n,i.z-t)<2*e)||vr.some(i=>Math.hypot(i.x-n,i.z-t)<2.2*e))}const YS=[[17,-8],[-19,12],[10,24],[-25,-16],[26,14],[-13,-24]];for(const[n,t]of YS){let e=0;for(let i=0;i<18&&e<2;i+=1){const r=Math.random()*Math.PI*2,s=Math.random()*2.7,o=n+Math.cos(r)*s,a=t+Math.sin(r)*s,c=.88+Math.random()*.38;qS(o,a,c)&&(XS(o,a,c),e+=1)}}const fe=new At,Xn={},On=new At,Ki=new At,jd=new ct({color:9067054,roughness:.85,metalness:.04}),oa=new ct({color:6044189,roughness:.9}),Si=new ct({color:9280161,roughness:.4,metalness:.68}),oi=new ct({color:5661033,roughness:.46,metalness:.6});function $S(n,t,e){const i=document.createElement("canvas");i.width=192,i.height=112;const r=i.getContext("2d"),s=a=>{r.clearRect(0,0,192,112),r.fillStyle=n==="wood"?"#6b4322":"#545d63",r.fillRect(0,0,192,112),r.strokeStyle="rgba(0, 0, 0, 0.5)",r.lineWidth=8,r.strokeRect(4,4,184,104),r.fillStyle="rgba(255, 255, 255, 0.08)",r.fillRect(6,6,180,18),n==="wood"?(r.fillStyle="#d79a58",r.fillRect(18,44,52,26),r.fillStyle="#b87a3d",r.beginPath(),r.arc(18,57,13,0,Math.PI*2),r.fill(),r.strokeStyle="#8a5526",r.lineWidth=3,r.beginPath(),r.arc(18,57,6,0,Math.PI*2),r.stroke()):(r.fillStyle="#dfe9ee",r.beginPath(),r.moveTo(46,36),r.lineTo(24,60),r.lineTo(40,60),r.lineTo(32,82),r.lineTo(56,54),r.lineTo(40,54),r.closePath(),r.fill()),r.fillStyle="#ffe1a8",r.font="bold 58px system-ui, sans-serif",r.textAlign="right",r.textBaseline="middle",r.fillText(String(a),176,62)};s(t);const o=new $a(i);return o.colorSpace=tn,{mesh:null,pop:0,setValue(a,c){s(a),o.needsUpdate=!0,this.mesh&&(this.pop=1)},texture:o}}function Jd(n,t,e){const i=$S(n,0),r=new nn({map:i.texture,transparent:!0}),s=new B(new _r(.72,.42),r);return s.position.set(t,.66,.515),i.mesh=s,i}{const n=new B(new wt(2.55,.17,1),jd);n.position.y=.94,n.castShadow=!0,n.receiveShadow=!0,fe.add(n);const t=new B(new wt(2.45,.16,.16),oa);t.position.set(0,.8,.42),fe.add(t);const e=t.clone();e.position.z=-.42,fe.add(e);for(const[l,h]of[[-1.08,-.36],[1.08,-.36],[-1.08,.36],[1.08,.36]]){const d=new B(new wt(.2,.92,.2),oa);d.position.set(l,.46,h),d.castShadow=!0,fe.add(d);const p=new B(new wt(.28,.1,.28),Si);p.position.set(l*.94,.86,h*.94),p.castShadow=!0,fe.add(p);const g=new B(new wt(.24,.08,.24),oi);g.position.set(l*.94,.14,h*.94),fe.add(g)}const i=new B(new wt(.14,.1,.78),oa);i.position.set(0,.42,0),fe.add(i);const r=new B(new wt(.07,.06,.62),jd);r.position.set(-.72,1.05,.02),r.rotation.y=.36,fe.add(r);const s=new B(new wt(.3,.13,.14),oi);s.position.set(-.55,1.07,-.16),s.rotation.y=.36,s.castShadow=!0,fe.add(s);const o=new B(new wt(.9,.035,.2),Si);o.position.set(.62,1.05,-.12),o.rotation.y=-.22,fe.add(o);const a=new B(new wt(.22,.09,.15),oa);a.position.set(1.14,1.06,-.02),a.rotation.y=-.22,fe.add(a);for(let l=0;l<7;l+=1){const h=new B(new Le(.03,.07,3),Si);h.position.set(.62+(l-3)*.11,1.02,-.22),h.rotation.x=Math.PI/2,fe.add(h)}Xn.woodSign=Jd("wood",-.62),Xn.ironSign=Jd("iron",.62),fe.add(Xn.woodSign.mesh),fe.add(Xn.ironSign.mesh);{const l=new B(new wt(.3,.18,.28),oi);l.position.set(-1.06,1.1,.22),On.add(l);const h=new B(new wt(.24,.16,.08),Si);h.position.set(-1.06,1.18,.34),On.add(h);const d=new B(new jt(.03,.03,.3,6),Si);d.rotation.z=Math.PI/2,d.position.set(-1.06,1.1,.44),On.add(d);const p=new B(new jt(.035,.045,1.55,6),oi);p.position.set(1.2,1.72,-.42),On.add(p);const g=new B(new wt(.5,.06,.06),oi);g.position.set(.98,2.46,-.42),On.add(g);const _=new B(new Le(.18,.22,8),new ct({color:3812122,emissive:16756810,emissiveIntensity:.55,roughness:.6}));_.position.set(.74,2.34,-.42),On.add(_);const x=new _o(16760426,.9,5.5,2);x.position.set(.74,2.2,-.42),On.add(x)}{for(const h of[-1,1]){const d=new B(new jt(.045,.05,1.5,6),oi);d.position.set(h*1.05,1.7,-.72),Ki.add(d)}const l=new B(new wt(2.2,.08,.08),Si);l.position.set(0,2.38,-.72),Ki.add(l);for(let h=0;h<4;h+=1){const d=new B(new wt(.04,.2,.04),Si);d.position.set(-.75+h*.5,2.26,-.72),Ki.add(d);const p=new B(new wt(.05,.5,.12),oi);p.position.set(-.75+h*.5,1.98,-.72),Ki.add(p)}}On.visible=!1,Ki.visible=!1,fe.add(On,Ki);const c=new B(new wt(2.8,2.2,1.5),new nn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));c.position.y=1.1,fe.add(c)}fe.position.set(We.x,qt(We.x,We.z),We.z);fe.rotation.y=Math.atan2(-We.x,-We.z);fe.userData.benchRef=!0;ee.add(fe);bs.push({x:We.x,z:We.z,radius:1.32,type:"bench"});const we=new At,Ve={};{const n=new ct({color:10170154,roughness:.62,metalness:.18}),t=new ct({color:7085338,roughness:.7,metalness:.15}),e=new ct({color:8227473,roughness:.4,metalness:.72,side:Tn}),i=new B(new Za(1.18,.28,.86,2,.05),n);i.position.y=.3,i.castShadow=!0,i.receiveShadow=!0,we.add(i);const r=new B(new wt(1.04,.08,.72),t);r.position.y=.48,we.add(r),Ve.wheels=[];for(const[d,p]of[[-.45,-.33],[.45,-.33],[-.45,.33],[.45,.33]]){const g=new B(new jt(.17,.17,.1,10),oi);g.rotation.z=Math.PI/2,g.position.set(d,.16,p),g.castShadow=!0,we.add(g),Ve.wheels.push(g)}const s=new At;we.add(s),Ve.shakeGroup=s;const o=new B(new jt(.66,.34,.88,4,1,!0),e);o.position.y=1.02,o.rotation.y=Math.PI/4,o.castShadow=!0,s.add(o),Ve.hopper=o;const a=new B(new wt(.98,.09,.98),oi);a.position.y=1.46,a.rotation.y=Math.PI/4,a.castShadow=!0,s.add(a);const c=new B(new wt(.52,.14,.52),new ct({color:1120283,roughness:1}));c.position.y=1.4,c.rotation.y=Math.PI/4,s.add(c);const l=new B(new wt(.4,.34,.12),e);l.position.set(0,.64,.46),we.add(l);const h=new B(new jt(.035,.035,.42,6),Si);h.rotation.z=Math.PI/2,h.position.set(-.7,.72,.05),we.add(h)}we.position.set(Xe.x,qt(Xe.x,Xe.z),Xe.z);we.rotation.y=Math.atan2(-Xe.x,-Xe.z);we.userData.grinderRef=!0;ee.add(we);bs.push({x:Xe.x,z:Xe.z,radius:.72,type:"grinder"});const Qd=new ct({color:6450029,roughness:.96,flatShading:!0}),KS=new ct({color:1391686,roughness:.22,metalness:.18,transparent:!0,opacity:.92}),Qr=new ct({color:6965288,roughness:.9}),Wp=new ct({color:4862752,roughness:.92}),En=new At;{const n=new B(new jt(1.15,1.25,1.35,12,1,!0),Qd);n.position.y=.68,n.castShadow=!0,n.receiveShadow=!0,En.add(n);const t=new B(new di(1.19,.11,5,14),Qd);t.rotation.x=Math.PI/2,t.position.y=1.35,t.castShadow=!0,En.add(t);const e=new B(new mo(1.06,18),KS);e.rotation.x=-Math.PI/2,e.position.y=.72,En.add(e);for(const a of[-1,1]){const c=new B(new wt(.13,2.65,.13),Qr);c.position.set(a*.95,2.2,0),c.castShadow=!0,En.add(c)}const i=new B(new wt(2.1,.13,.13),Qr);i.position.y=3.2,i.castShadow=!0,En.add(i);const r=new B(new Le(1.72,1.1,4),Wp);r.position.y=3.9,r.rotation.y=Math.PI/4,r.castShadow=!0,En.add(r);const s=new B(new jt(.018,.018,.95,5),Qr);s.position.set(0,2.68,0),En.add(s);const o=new B(new jt(.18,.15,.24,8,1,!0),Qr);o.position.set(0,2.12,0),o.castShadow=!0,En.add(o)}En.position.set(Gn.x,qt(Gn.x,Gn.z),Gn.z);En.rotation.y=Math.atan2(-Gn.x,-Gn.z);ee.add(En);bs.push({x:Gn.x,z:Gn.z,radius:1.38,type:"well"});const Xp=new ct({color:1523529,roughness:.18,metalness:.25,transparent:!0,opacity:.92}),Ba=new At;{const n=new B(new mo(2.55,24),Xp);n.rotation.x=-Math.PI/2,n.position.y=.055,Ba.add(n);const t=new ct({color:4937300,roughness:.98,flatShading:!0});for(let e=0;e<14;e+=1){const i=e/14*Math.PI*2,r=new B(new Dn(.26+Math.random()*.13,0),t);r.position.set(Math.cos(i)*2.65,.12,Math.sin(i)*2.65),r.scale.y=.6,r.rotation.y=Math.random()*Math.PI,r.castShadow=!0,r.receiveShadow=!0,Ba.add(r)}}Ba.position.set(Jr.x,qt(Jr.x,Jr.z),Jr.z);ee.add(Ba);function ZS(){const n=document.createElement("canvas");n.width=640,n.height=420;const t=n.getContext("2d");t.fillStyle="#b48450",t.fillRect(0,0,640,420),t.strokeStyle="#6f4c2a",t.lineWidth=14,t.strokeRect(7,7,626,406),t.strokeStyle="rgba(82, 52, 25, 0.35)",t.lineWidth=2;for(let i=0;i<9;i+=1)t.beginPath(),t.moveTo(28+i*14,20),t.lineTo(-20+i*14,400),t.stroke();t.fillStyle="#2b1f16",t.textAlign="center",t.font="700 44px 'Patrick Hand', 'Comic Sans MS', cursive",t.fillText("MISSING KID",320,80),t.fillText("LOCATIONS",320,126);for(let i=0;i<3;i+=1){const r=70+i*172;t.fillStyle="rgba(238, 213, 167, 0.28)",t.fillRect(r,168,156,196),t.strokeStyle="#5a3c22",t.lineWidth=5,t.strokeRect(r,168,156,196),t.fillStyle="rgba(62, 43, 27, 0.42)",t.font="400 24px 'Patrick Hand', 'Comic Sans MS', cursive",t.fillText("empty",r+78,346)}const e=new $a(n);return e.colorSpace=tn,e.anisotropy=2,e}const er=new At;{for(const i of[-1,1]){const r=new B(new wt(.14,2.2,.14),Qr);r.position.set(i*.92,1.1,-.08),r.castShadow=!0,er.add(r)}const n=new B(new wt(2.25,1.48,.12),Qr);n.position.y=1.72,n.castShadow=!0,n.receiveShadow=!0,er.add(n);const t=new B(new _r(2.12,1.39),new nn({map:ZS()}));t.position.set(0,1.72,.066),er.add(t);const e=new B(new wt(2.48,.13,.35),Wp);e.position.y=2.51,e.rotation.z=.035,e.castShadow=!0,er.add(e)}er.position.set(Vn.x,qt(Vn.x,Vn.z),Vn.z);er.rotation.y=Math.atan2(-Vn.x,-Vn.z);ee.add(er);bs.push({x:Vn.x,z:Vn.z,radius:.92,type:"notice"});const le={stock:{wood:0,iron:0},tier:1,crafted:new Set,signPop:{wood:0,iron:0}},wa=[];function qp(n=""){Xn.woodSign&&Xn.woodSign.setValue(le.stock.wood,le.tier>=3),Xn.ironSign&&Xn.ironSign.setValue(le.stock.iron,le.tier>=3),n&&(le.signPop[n]=1)}function Yp(){On.visible=le.tier>=2,Ki.visible=le.tier>=3,qp()}const co=[],$p=new ct({color:6714492,roughness:.42,metalness:.62}),hu=new ct({color:10135985,roughness:.34,metalness:.7});function jS(){for(const n of co)ee.remove(n.group);co.length=0}function JS(){for(const n of vr)n.broken=!1,n.hits=n.hitsMax,n.regrow=0,n.shake=0,n.group.visible=!0,n.group.scale.setScalar(n.scale),n.group.rotation.z=0}const Kp=4,Zp=3,QS=6,t1=4,jp=4,e1=4,aa=2.5,lo=5,uo=50,du={1:50,2:250,3:450,4:650,5:850},Jp={1:30,2:12,3:5,4:3,5:2},n1={1:10,2:4,3:2,4:1.2,5:.8},ih={1:8,2:12,3:16,4:20,5:26},Qp={1:1,2:2,3:2.5,4:3,5:4},tm=.36,i1=1.15,r1=120,ml=[.35,.58,.82,1.06],ac=.34,Ji=180,s1=120,Xr=Ji+s1,gl=16,Xs=14,em=30,nm=5,tf=10,o1=.42,ka=18,cc=.3,ho=8,ef=28,a1=44,Rs={wood:"Wood log",sapling:"Sapling",berry:"Berry",iron:"Iron piece",axe:"Old Axe",pickaxe:"Pickaxe",torch:"Torch",ironAxe:"Good Axe",ironSword:"Iron Sword",ironWall:"Iron Wall",logWall:"Log Wall",bearTrap:"Bear Trap"},rh={wood:"Log",sapling:"Sapling",berry:"Berries",iron:"Iron"},c1={wood:1},So={axe:{cooldown:.58,damage:1,treePower:1,rockPower:0,range:3.3,reach:2.5},pickaxe:{cooldown:.5,damage:1,treePower:0,rockPower:1,range:3,reach:2.5},torch:{cooldown:.6,damage:1,treePower:0,rockPower:0,range:2.4,reach:2.2},ironAxe:{cooldown:.4,damage:2,treePower:2,rockPower:0,range:3.5,reach:2.8},ironSword:{cooldown:.42,damage:3,treePower:0,rockPower:0,range:3.6,reach:2.8}},sh=[{id:"pickaxe",tier:1,name:"Pickaxe",icon:"⛏",cost:{wood:4,iron:1},desc:"Mine iron rocks at the forest edge.",kind:"tool",repeatable:!0},{id:"torch",tier:1,name:"Torch",icon:"🔥",cost:{wood:2,iron:1},desc:"A warm light to carry into the dark.",kind:"tool",repeatable:!0},{id:"bench2",tier:1,name:"Crafting Bench 2",icon:"🛠",cost:{wood:8,iron:6},desc:"Upgrade the bench to unlock tier 2 gear.",kind:"bench",oneTime:!0,benchTier:2},{id:"ironAxe",tier:2,name:"Good Axe",icon:"🪓",cost:{wood:6,iron:3},desc:"Chops faster and hits harder. Replaces the Old Axe.",kind:"tool",oneTime:!0},{id:"goodSack",tier:2,name:"Good Sack",icon:"🎒",cost:{wood:6,iron:5},desc:"Sack capacity grows from 5 to 10.",kind:"sack",oneTime:!0},{id:"logWall",tier:2,name:"Log Wall",icon:"🪵",cost:{wood:12},desc:"A sturdy wooden wall. Craft it, then place it.",kind:"placeable",placeType:"logWall",repeatable:!0},{id:"bearTrap",tier:2,name:"Bear Trap",icon:"⚙",cost:{iron:3},desc:"Damages and stuns a monster that steps on it.",kind:"placeable",placeType:"bearTrap",repeatable:!0,trap:!0},{id:"bench3",tier:2,name:"Crafting Bench 3",icon:"🛠",cost:{wood:15,iron:10},desc:"Upgrade the bench to unlock tier 3 gear.",kind:"bench",oneTime:!0,benchTier:3},{id:"ironSword",tier:3,name:"Iron Sword",icon:"🗡",cost:{wood:5,iron:5},desc:"A strong melee blade for monsters.",kind:"tool",repeatable:!0},{id:"ironWall",tier:3,name:"Iron Wall",icon:"🛡",cost:{wood:8,iron:6},desc:"A sturdy metal wall. Craft it, then place it.",kind:"placeable",placeType:"ironWall",repeatable:!0},{id:"bench4",tier:4,name:"Crafting Bench 4",icon:"?",cost:{},desc:"Coming soon.",kind:"locked"}],lc=new Map(sh.map(n=>[n.id,n]));let ts=0,Zs=0,nf="";function uc(){return Math.hypot(Y.position.x-Xt.position.x,Y.position.z-Xt.position.z)}function za(){return Math.hypot(Y.position.x-We.x,Y.position.z-We.z)}function hc(){return Math.hypot(Y.position.x-Xe.x,Y.position.z-Xe.z)}function Xi(){return u.fireOut?0:ih[u.fireLevel]||8}function im(){return ih[u.fireLevel]||8}function l1(n){return n==="axe"||n==="pickaxe"||n==="torch"||n==="ironAxe"||n==="ironSword"}function rm(n){const t=So[n];return!!t&&t.treePower>0}function oh(n){const t=So[n];return!!t&&t.rockPower>0}function rf(){if(u.fireInReach=uc()<=Kp,u.grinderInReach=u.started&&hc()<=Zp,u.benchInReach=u.started&&za()<=jp,u.targetTree=null,u.targetRock=null,!u.started||u.gameOver)return;let n=aa*aa;for(const e of Je){if(!e.userData.choppable||e.userData.falling||!e.visible)continue;const i=Y.position.x-e.position.x,r=Y.position.z-e.position.z,s=i*i+r*r;s<n&&(n=s,u.targetTree=e)}let t=aa*aa;for(const e of vr){if(e.broken)continue;const i=Y.position.x-e.x,r=Y.position.z-e.z,s=i*i+r*r;s<t&&(t=s,u.targetRock=e)}}function Dt(n){oo.textContent=n,oo.classList.add("visible"),ts=1.5}let fu=0;function u1(){$s.classList.remove("visible"),$s.offsetWidth,$s.classList.add("visible"),clearTimeout(fu),fu=setTimeout(()=>{$s.classList.remove("visible")},9300)}const ui={kind:null,target:null,timer:0},qr=new R;function Ti(){ui.kind=null,ui.target=null,ui.timer=0,jr.classList.remove("visible")}function sm(n,t){const e=n==="tree"?t.userData:t,i=e.hitsMax||(n==="tree"?ao:ou),r=$t(i-Math.max(0,e.hits),0,i);ui.kind=n,ui.target=t,ui.timer=fS,Vy.textContent=`${r}/${i}`,Wy.style.width=`${r/i*100}%`,jr.classList.add("visible")}function h1(n){const{kind:t,target:e}=ui;if(!e)return;if(!u.started||u.gameOver||u.falling>0){Ti();return}if(t==="tree"){if(!e.visible||e.userData.falling||!e.userData.choppable){Ti();return}}else if(e.broken){Ti();return}if(ui.timer-=n,ui.timer<=0){Ti();return}if(t==="tree"){const s=e.userData.scale||1;qr.set(e.position.x,e.position.y+2.7*s,e.position.z)}else qr.set(e.x,qt(e.x,e.z)+1.5*e.scale,e.z);if(qr.project(pe),qr.z>1){jr.classList.remove("visible");return}const i=$t((qr.x*.5+.5)*window.innerWidth,54,window.innerWidth-54),r=Math.max(112,(-qr.y*.5+.5)*window.innerHeight);jr.style.left=`${i}px`,jr.style.top=`${r}px`,jr.classList.add("visible")}function d1(n){ru.textContent=n,ru.classList.add("visible"),Zs=2}function f1(n=1){const t=new At,e=new B(new Dn(.17,0),Hp);e.scale.set(1.15,.8,.9),e.castShadow=!0,t.add(e);const i=new B(new Dn(.11,0),uu);i.position.set(.12,.02,.09),i.castShadow=!0,t.add(i);const r=new B(Vp,Gp);return r.scale.set(1.35,.92,.55),r.position.set(-.035,.055,.12),r.rotation.set(.3,.25,.4),t.add(r),t.scale.setScalar(n),t}function p1(){const n=new At;for(let t=0;t<3;t+=1){const e=new B(new wt(.34,.68,.09),$p);e.position.set((t-1)*.35,.35,0),e.castShadow=!0,n.add(e);const i=new B(new wt(.32,.07,.11),hu);i.position.set((t-1)*.35,.58,0),n.add(i)}return n}function om(n){let t;return n==="wood"?(t=new B(OS,BS),t.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2),t.castShadow=!0,t.receiveShadow=!0):n==="sapling"?(t=bp(.72),t.rotation.y=Math.random()*Math.PI*2):n==="berry"?(t=Zd(1),t.rotation.y=Math.random()*Math.PI*2):n==="iron"?(t=f1(1.2),t.rotation.y=Math.random()*Math.PI*2):n==="pickaxe"?(t=Op(),t.scale.setScalar(.78),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironAxe"?(t=Bp(),t.scale.setScalar(.8),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironSword"?(t=kp(),t.scale.setScalar(.68),t.rotation.set(.05,Math.random()*Math.PI*2,.04)):n==="ironWall"?(t=p1(),t.rotation.y=Math.random()*Math.PI*2):t=Zd(1),t}function Ni(n,t,e,i={}){const r=om(n),s=qt(t,e),a=n==="wood"?.17:n==="berry"?.14:n==="iron"?.13:n==="pickaxe"||n==="ironAxe"||n==="ironSword"?.5:.02,c=n==="sapling"?.72:1,l=i.startY??s+a+.45;r.position.set(t,l,e),ee.add(r);const h={type:n,mesh:r,x:t,z:e,groundY:s,restY:a,baseScale:c,velocityY:i.velocityY??(n==="wood"?2.2:2.6),landed:!1,pickupDelay:i.pickupDelay??.35,carried:!1,popping:0,popDuration:.24};if(r.traverse(d=>{d.userData.itemRef=h}),xn.push(h),xn.length>80)for(let d=0;d<xn.length;d+=1){const p=xn[d];if(!p.carried&&p.popping<=0){ah(p);break}}return h}function ah(n){const t=xn.indexOf(n);t>=0&&xn.splice(t,1),Ht===n&&(Ht=null),ee.remove(n.mesh)}function dc(n){!n||n.popping>0||(Ht===n&&(Ht=null),n.carried=!1,n.popping=n.popDuration)}function m1(n,t=0){const e=Y.position.x-n.position.x,i=Y.position.z-n.position.z,s=Math.atan2(e,i)+(t-1)*.62+(Math.random()-.5)*.32,o=n.userData.scale*.35+.7+Math.random()*.45;Ni("wood",n.position.x+Math.sin(s)*o,n.position.z+Math.cos(s)*o,{startY:n.position.y+.9,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}function g1(n){const t=Math.atan2(Y.position.x-n.position.x,Y.position.z-n.position.z)+(Math.random()-.5)*1.2,e=n.userData.scale*.3+.95;Ni("sapling",n.position.x+Math.sin(t)*e,n.position.z+Math.cos(t)*e,{startY:n.position.y+.8,velocityY:2.6,pickupDelay:.45})}function ch(){for(const n of oc){const t=xn.filter(e=>e.type==="berry"&&!e.carried&&e.popping<=0&&Math.hypot(e.x-n.x,e.z-n.z)<2.1).length;for(let e=t;e<3;e+=1){const i=Math.random()*Math.PI*2,r=.35+Math.random()*.45,s=n.x+Math.cos(i)*r,o=n.z+Math.sin(i)*r;Ni("berry",s,o,{startY:qt(s,o)+.55,velocityY:1.8,pickupDelay:.6})}}}const _1=[{x:Xe.x-1.5,z:Xe.z-1.2},{x:Xe.x-1.1,z:Xe.z+1.4},{x:We.x-2,z:We.z-.6},{x:We.x+.4,z:We.z+1.8}];function am(){for(const n of _1){const t=n.x,e=n.z;xn.some(r=>r.type==="iron"&&!r.carried&&r.popping<=0&&Math.hypot(r.x-t,r.z-e)<.7)||Ni("iron",t,e,{startY:qt(t,e)+.45,velocityY:1.4,pickupDelay:.25})}}function x1(){for(const n of xn)n.carried=!1,n.popping=0,ee.remove(n.mesh);xn.length=0,Ht=null,ch(),am(),te()}function Ha(){return u.backpack.wood+u.backpack.sapling+u.backpack.berry+u.backpack.iron}function ca(n){return u.backpack[n]+((Ht==null?void 0:Ht.type)===n?1:0)}function fc(){return u.equippedTool==="backpack"}function lh(n){if(!n||n.carried||n.popping>0)return!1;if(Ht)return Dt("Hands full"),!1;n.carried=!0,n.landed=!0,n.pickupDelay=0,Ht=n;const t=u.cameraYaw;return n.mesh.position.set(Y.position.x-Math.cos(t)*.98+Math.sin(t)*.22,Y.position.y+1,Y.position.z+Math.sin(t)*.98+Math.cos(t)*.22),te(),Rc(),Dt(`Picked up ${rh[n.type]||Rs[n.type]}`),!0}function cm(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.dropCooldown>0||!Ht)return;const n=Ht;Ht=null,n.carried=!1;const t=Y.position.x,e=Y.position.z;n.x=t,n.z=e,n.groundY=qt(t,e),n.velocityY=.9,n.landed=!1,n.pickupDelay=.3,n.mesh.position.set(t,Y.position.y+1.05,e),u.dropCooldown=.3,te(),Dt("Released item")}function v1(){return Math.max(0,u.backpackCapacity-Ha())}function lm(n){const t=u.sackOrder.lastIndexOf(n);return t<0?!1:(u.sackOrder.splice(t,1),!0)}function _l(){if(!u.sackOrder.length)return null;const n=u.sackOrder.pop();return u.backpack[n]>0&&(u.backpack[n]-=1),Hn.classList.remove("pop"),Hn.offsetWidth,Hn.classList.add("pop"),Ci.classList.remove("pop"),Ci.offsetWidth,Ci.classList.add("pop"),n}function M1(){if(!u.started||u.gameOver||u.falling||u.paused||!fc()||!Ht)return;if(v1()<=0){Dt("Sack full");return}const n=Ht;Ht=null,u.backpack[n.type]=(u.backpack[n.type]||0)+1,u.sackOrder.push(n.type),dc(n),Ci.classList.remove("pop"),Ci.offsetWidth,Ci.classList.add("pop"),Hn.classList.remove("pop"),Hn.offsetWidth,Hn.classList.add("pop"),Rc(),Dt(`Stored ${rh[n.type]||Rs[n.type]}`),te()}function y1(){if(!u.started||u.gameOver||u.falling||u.paused||!fc()||!u.sackOrder.length)return;if(Ht){Dt("Hands full");return}const n=u.sackOrder[u.sackOrder.length-1];if(n==="wood"&&uc()<=QS){_l(),te(),af(n,new R(Xt.position.x,Xt.position.y+.8,Xt.position.z),()=>{const i=Jp[u.fireLevel]||2;hm(i),Dt(`Log added (+${i})`)});return}if(hc()<=t1&&(n==="wood"||n==="iron")){_l(),te(),af(n,new R(we.position.x,we.position.y+1.45,we.position.z),()=>{le.stock[n]+=1,mm(n),Vm(),Ve.shake=.5,dh(n),te(),Dt(`+1 ${n} to the bench`)});return}const t=_l(),e=Ni(t,Y.position.x,Y.position.z,{startY:Y.position.y+1.05,velocityY:.35,pickupDelay:0});e.landed=!0,lh(e),te()}function um(){if(!u.started||u.gameOver||u.falling||u.paused||!Ht||Ht.type!=="berry")return;const n=Ht;Ht=null,dc(n),u.hunger=$t(u.hunger+ka,0,100),Rc(),Dt(`Ate berries (+${ka} hunger)`),te()}function hm(n){if(!u.started||u.gameOver)return;const t=u.fireOut;if(u.fireOut&&(u.fireOut=!1,u.fireDarken=0,u.fireFlare=.8,xo.classList.remove("visible")),u.fireEverLit=!0,j1(),t&&TE(),u.fireLevel>=lo){u.fireProgress=100,te();return}u.fireFlare=Math.max(u.fireFlare,.55);const e=u.fireProgress+n-100;u.fireProgress=$t(u.fireProgress+n,0,100),u.fireProgress>=70&&xh(u.fireLevel+1),e>=0?S1(Math.max(0,e)):te()}function S1(n=0){if(u.fireLevel>=lo){u.fireProgress=100,te();return}u.fireLevel+=1,u.fireProgress=u.fireLevel>=lo?100:$t(n,0,100),u.fireOut=!1,u.fireEverLit=!0,u.fireDarken=0,u.fireFlare=1,u.fireBarMessageTimer=9,vh(u.fireLevel),vw(),wE(),bE(),u1(),xh(u.fireLevel),nw(u.fireLevel),te()}function w1(){if(!Ht||Ht.type!=="wood"){Dt("Only logs burn");return}const n=Jp[u.fireLevel]||2;dc(Ht),hm(n),Dt(`Log added (+${n})`)}function E1(n){const t=n.userData,e=n.position.x-Y.position.x,i=n.position.z-Y.position.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r;t.choppable=!1,t.falling=!0,t.fallProgress=0,t.lootDropped=!1,t.fallAxis=new R(o,0,-s).normalize(),t.hits=t.hitsMax,t.shake=0}function dm(n,t=1){if(!n||u.swingCooldown>0)return;const e=n.userData;u.swingCooldown=xp,e.shake=tm,u.chopTimer=.3,Y.rotation.y=Math.atan2(n.position.x-Y.position.x,n.position.z-Y.position.z),e.hits-=t,PE(),sm("tree",n),e.hits<=0&&(E1(n),Ti())}function fm(n,t=1){if(!n||n.broken||u.swingCooldown>0)return;if(!oh(u.equippedTool)){Dt("Use the Pickaxe");return}if(u.swingCooldown=xp,Y.rotation.y=Math.atan2(n.x-Y.position.x,n.z-Y.position.z),u.chopTimer=.3,n.hits-=t,n.shake=.3,Wm(),sm("rock",n),n.hits>0)return;n.broken=!0,n.regrow=ef+Math.random()*(a1-ef),n.group.visible=!1,Ti(),IE();const e=2+Math.floor(Math.random()*2);for(let i=0;i<e;i+=1){const r=Math.random()*Math.PI*2,s=.55+Math.random()*.55,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s;Ni("iron",o,a,{startY:qt(o,a)+.5,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}te(),Dt(`Mined ${e} iron`)}function T1(n){for(const t of vr){if(t.broken){t.regrow=Math.max(0,t.regrow-n),t.regrow<=0&&(t.broken=!1,t.hits=t.hitsMax,t.group.visible=!0,t.group.scale.setScalar(t.scale*.6),Dt("An iron rock has regrown"));continue}if(t.shake>0){t.shake=Math.max(0,t.shake-n);const r=t.shake/.3,s=performance.now()*.001;t.group.rotation.z=Math.sin(s*48)*.04*r}else t.group.rotation.z=0;const e=.82+t.hits/t.hitsMax*.18,i=t.scale*e;t.group.scale.x<i?t.group.scale.setScalar(Math.min(i,t.group.scale.x+n*1.6)):t.group.scale.x>i&&t.group.scale.setScalar(Math.max(i,t.group.scale.x-n*1.6))}}let pu=new Map,sf=!1;function uh(n){return n.kind==="locked"||n.tier>le.tier}function hh(n){return!!(n.oneTime&&le.crafted.has(n.id)||n.trap&&_s.length>=ho)}function b1(n){return le.stock.wood>=(n.cost.wood||0)&&le.stock.iron>=(n.cost.iron||0)}function A1(n){const t=[];return n.cost.wood&&t.push(`${n.cost.wood}W`),n.cost.iron&&t.push(`${n.cost.iron}I`),t.join(" · ")||"FREE"}function pm(n=""){if(Vd.textContent=String(le.stock.wood),Wd.textContent=String(le.stock.iron),n){const t=n==="wood"?Vd:Wd;t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop")}}function C1(){if(sf)return;sf=!0,fl.innerHTML="",pu=new Map;let n=1;for(const t of sh){if(t.tier!==n){n=t.tier;const a=document.createElement("div");a.className="craft-tier-label",a.textContent=`NEEDS CRAFTING BENCH ${t.tier}`,fl.appendChild(a)}const e=document.createElement("button");e.type="button",e.className="craft-card",e.dataset.recipe=t.id;const i=document.createElement("span");i.className="craft-card-icon",i.textContent=t.icon;const r=document.createElement("span");r.className="craft-card-name",r.textContent=t.name;const s=document.createElement("span");s.className="craft-card-cost",s.textContent=A1(t);const o=document.createElement("span");o.className="craft-card-badge",e.append(i,r,s,o),e.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),R1(t.id)}),fl.appendChild(e),pu.set(t.id,e)}}function pc(){for(const[n,t]of pu){const e=lc.get(n);if(!e)continue;const i=uh(e),r=hh(e);t.classList.toggle("locked",i),t.classList.toggle("soldout",r),t.classList.toggle("selected",u.craftSelected===n);const s=t.querySelector(".craft-card-badge");let o="";r?o="SOLD OUT":i?o="🔒":e.trap?o=`x${ho}`:e.repeatable&&(o="∞"),s.textContent=o,s.style.display=o?"":"none"}}function R1(n){lc.get(n)&&(u.craftSelected=n,pc(),mc(),Ls())}function mc(){iS.textContent=`BENCH ${le.tier}`,pm();let n=lc.get(u.craftSelected);n||(n=sh[0],u.craftSelected=n.id);const t=uh(n),e=hh(n);rS.textContent=n.icon,sS.textContent=n.name,oS.textContent=t?`Requires Crafting Bench ${n.tier}.`:n.desc,pl.innerHTML="";const i=["wood","iron"];let r=!1;for(const o of i){const a=n.cost[o]||0;if(!a)continue;r=!0;const c=document.createElement("span");c.className="cost-chip",c.textContent=`${a} ${o}`,le.stock[o]<a&&c.classList.add("missing"),pl.appendChild(c)}if(!r){const o=document.createElement("span");o.className="cost-chip",o.textContent=t?"NOT AVAILABLE":"NO COST",pl.appendChild(o)}let s="";e?s="SOLD OUT":t?s=n.tier===4?"COMING SOON":`LOCKED · NEEDS BENCH ${n.tier}`:n.trap?s=`MAX ${ho} PLACED`:n.repeatable&&(s="∞ REPEATABLE"),aS.textContent=s,su.disabled=t||e,su.textContent=e?"SOLD OUT":"CRAFT"}function dh(n=""){qp(n),u.craftOpen&&(pm(n),pc(),mc(),gs())}function P1(){!u.started||u.gameOver||u.falling||u.paused||(u.craftOpen=!0,fi(!1),Mr(!1),Ec(),pr.clear(),u.look.active=!1,u.pinchDistance=0,C1(),pc(),mc(),gp.classList.remove("hidden"),Ps(),Ls())}function Fi(){u.craftOpen=!1,gp.classList.add("hidden"),Ps()}function gs(){qy.textContent=u.ownedTools.ironAxe?"Good Axe":"Old Axe",Yy.textContent=u.goodSack?"Good Sack":"Old Sack",$y.textContent="Pickaxe",Ky.textContent="Torch",Zy.textContent="Iron Sword"}function L1(n){n.kind==="tool"?(u.ownedTools[n.id]=!0,n.id==="ironAxe"&&(u.goodAxe=!0),gs(),Ps(),Dt(`${n.name} added to the hotbar`)):n.kind==="sack"?(u.goodSack=!0,u.backpackCapacity=tf,gs(),te(),Dt(`Good Sack: capacity ${tf}`)):n.kind==="bench"?(le.tier=n.benchTier,Yp(),Dt(`Crafting Bench ${le.tier} unlocked`)):n.kind==="placeable"&&(u.carriedPlaceable=n.placeType,gc(),Dt(`${n.name} ready — tap Place`))}function I1(){if(!u.started||u.gameOver||u.falling)return;const n=lc.get(u.craftSelected);if(n){if(uh(n)){Dt(`Needs Crafting Bench ${n.tier}`);return}if(hh(n)){Dt(n.trap?"All bear traps are placed":"Sold out");return}if(!b1(n)){const t=[];le.stock.wood<(n.cost.wood||0)&&t.push("wood"),le.stock.iron<(n.cost.iron||0)&&t.push("iron"),Dt(`Not enough ${t.join(" or ")} in the bench`),SE();return}le.stock.wood-=n.cost.wood||0,le.stock.iron-=n.cost.iron||0,n.oneTime&&le.crafted.add(n.id),L1(n),yE(),dh(),pc(),mc(),te()}}function gc(){Dm()}function D1(n,t,e,i){const r=new At;if(n==="logWall"){const s=new ct({color:8014885,roughness:.9}),o=new ct({color:5189398,roughness:.95});for(let a=0;a<3;a+=1){const c=new B(new jt(.15,.16,1.8,7),s);c.rotation.z=Math.PI/2,c.position.set(0,.3+a*.32,0),c.castShadow=!0,r.add(c)}for(const a of[-1,1]){const c=new B(new jt(.1,.12,1.15,6),o);c.position.set(a*.82,.58,.12),c.castShadow=!0,r.add(c)}}else{for(let s=0;s<3;s+=1){const o=new B(new wt(.52,1.02,.16),$p);o.position.set((s-1)*.54,.54,0),o.castShadow=!0,o.receiveShadow=!0,r.add(o);const a=new B(new wt(.48,.1,.19),hu);a.position.set((s-1)*.54,.88,0),a.castShadow=!0,r.add(a)}for(const s of[-1,1]){const o=new B(new wt(.14,1.2,.24),hu);o.position.set(s*.88,.6,0),o.castShadow=!0,r.add(o)}}r.position.set(t,qt(t,e),e),r.rotation.y=i,ee.add(r),co.push({group:r,x:t,z:e,rotation:i,width:1.9,depth:.34,kind:n})}const _s=[],U1=new ct({color:8161165,roughness:.42,metalness:.7}),of=new ct({color:4147277,roughness:.5,metalness:.62});function N1(n,t,e){const i=new At,r=new B(new di(.42,.045,6,14),of);r.rotation.x=Math.PI/2,r.position.y=.06,i.add(r);const s=new B(new jt(.3,.34,.07,10),of);s.position.y=.05,i.add(s);const o=new At;o.position.y=.08;for(let a=0;a<6;a+=1){const c=a/6*Math.PI*2,l=new B(new Le(.045,.2,4),U1);l.position.set(Math.cos(c)*.36,.09,Math.sin(c)*.36),l.rotation.z=Math.cos(c)*.5,l.rotation.x=Math.sin(c)*.5,o.add(l)}i.add(o),i.position.set(n,qt(n,t),t),i.rotation.y=e,ee.add(i),_s.push({group:i,jaws:o,x:n,z:t,rotation:e,sprung:!1,anim:0})}function F1(){for(const n of _s)ee.remove(n.group);_s.length=0}function O1(n){for(const t of _s){if(t.sprung){t.anim=Math.min(1,t.anim+n*5);const e=t.anim;t.jaws.scale.y=1+e*.8,t.jaws.position.y=.08+e*.1;continue}for(const e of Yn){if(!e.visible||e.userData.fading||e.userData.dead||Math.hypot(e.position.x-t.x,e.position.z-t.z)>.82)continue;t.sprung=!0,t.anim=0;const i=e.userData;i.health-=2,i.hitTimer=.3,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.2,i.stunTimer=1.6,i.health<=0&&(i.health=0,i.dead=!0,yh(e,4)),Xm(),Dt("Bear trap snapped!");break}}}function B1(){if(!u.started||u.gameOver||u.falling||u.paused)return;const n=u.carriedPlaceable;if(!n)return;const t=u.cameraYaw,e=Y.position.x+Math.sin(t)*2.1,i=Y.position.z+Math.cos(t)*2.1,r=t;if(n==="bearTrap"){if(_s.length>=ho){Dt(`Only ${ho} traps can be placed`);return}N1(e,i,r),Dt("Bear trap placed")}else D1(n,e,i,r),Dt(`${Rs[n]||"Wall"} placed`);u.carriedPlaceable=null,gc(),qm(),te()}function mm(n){const t=n==="wood"?new ct({color:9132587,roughness:.9}):new ct({color:10135469,roughness:.4,metalness:.6}),e=new B(n==="wood"?new jt(.09,.1,.32,6):new wt(.2,.2,.2),t);e.position.set(we.position.x,we.position.y+2,we.position.z),ee.add(e),wa.push({mesh:e,t:0})}function k1(){if(!Ht)return;const n=Ht.type;if(n!=="wood"&&n!=="iron"){Dt("Can't grind this");return}dc(Ht),le.stock[n]+=1,mm(n),Vm(),Ve.shake=.5,dh(n),te(),Dt(`+1 ${n} to the bench (${le.stock[n]})`)}function z1(n){const t=performance.now()*.001;Ve.shake=Math.max(0,(Ve.shake||0)-n);const e=Ve.shake>0?Math.sin(t*58)*.035*(Ve.shake/.5):0;if(Ve.shakeGroup&&(Ve.shakeGroup.rotation.z=e,Ve.shakeGroup.position.y=Math.abs(e)*.2),Ve.wheels&&Ve.shake>0)for(const i of Ve.wheels)i.rotation.x+=n*14;for(let i=wa.length-1;i>=0;i-=1){const r=wa[i];r.t+=n;const s=r.t/.4;r.mesh.position.y=we.position.y+2-s*.65,r.mesh.rotation.x+=n*7,r.mesh.scale.setScalar(Math.max(.05,1-s*.85)),s>=1&&(ee.remove(r.mesh),wa.splice(i,1))}for(const i of["wood","iron"]){const r=i==="wood"?Xn.woodSign:Xn.ironSign;!r||!r.mesh||(r.pop=Math.max(0,(r.pop||0)-n*3.2),r.mesh.scale.setScalar(1+r.pop*.35))}}const H1=[];function af(n,t,e){const i=om(n),r=new R(Y.position.x,Y.position.y+1.1,Y.position.z);i.position.copy(r),i.scale.setScalar(.9),ee.add(i),H1.push({mesh:i,start:r,target:t.clone(),t:0,duration:.45,onArrive:e}),Rc()}function cf(n){const t=performance.now();for(let e=xn.length-1;e>=0;e-=1){const i=xn[e];if(i.popping>0){i.popping=Math.max(0,i.popping-n);const r=1-i.popping/i.popDuration;i.mesh.scale.setScalar(i.baseScale*(1+r*1.1)),i.mesh.position.y+=n*1.35,i.popping<=0&&ah(i);continue}if(i.carried){if(Ht!==i){i.carried=!1;continue}const r=u.cameraYaw,s=Math.sin(r),o=Math.cos(r),a=-Math.cos(r),c=Math.sin(r),l=Math.sin(t*.003)*.05,h=Y.position.x+a*.98+s*.22,d=Y.position.z+c*.98+o*.22,p=Y.position.y+1+l,g=1-Math.exp(-10*n);i.mesh.position.x+=(h-i.mesh.position.x)*g,i.mesh.position.y+=(p-i.mesh.position.y)*g,i.mesh.position.z+=(d-i.mesh.position.z)*g;const _=i.mesh.position.x-Y.position.x,x=i.mesh.position.z-Y.position.z,m=Math.hypot(_,x),f=.82;if(m<f){const y=f/Math.max(m,.001);i.mesh.position.x=Y.position.x+_*y,i.mesh.position.z=Y.position.z+x*y}i.mesh.rotation.y+=n*.8;continue}if(i.pickupDelay=Math.max(0,i.pickupDelay-n),i.landed)i.mesh.position.y=i.groundY+i.restY+Math.abs(Math.sin(t*.0028+i.mesh.id))*(i.type==="berry"?.025:.018),i.type==="sapling"&&(i.mesh.rotation.y+=n*.4),i.type==="berry"&&(i.mesh.rotation.y+=n*.35);else{i.velocityY-=13*n,i.mesh.position.y+=i.velocityY*n,i.type==="wood"&&(i.mesh.rotation.y+=n*3.2),i.type==="sapling"&&(i.mesh.rotation.y+=n*2.4);const r=i.groundY+i.restY;i.mesh.position.y<=r&&(i.mesh.position.y=r,i.landed=!0)}}}function gm(n){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.falling=!1,t.fallProgress=0,t.lootDropped=!1,t.hits=ao,t.hitsMax=ao,t.shake=0,t.highlight=0,n.visible=!0,n.quaternion.identity(),t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Et(16757082),t.trunk.material.emissiveIntensity=0}function _m(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.plantCooldown>0)return;if(!Ht||Ht.type!=="sapling"){Dt("Carry a sapling to plant it");return}const n=new R(Math.sin(Y.rotation.y),0,Math.cos(Y.rotation.y)),t=Y.position.x+n.x*1.75,e=Y.position.z+n.z*1.75;if(Math.hypot(t-Xt.position.x,e-Xt.position.z)<1.6){Dt("Too close to the campfire");return}ah(Ht),u.plantCooldown=.45;const r=bp(.35);r.position.set(t,qt(t,e),e),r.rotation.y=Math.random()*Math.PI*2,ee.add(r);const s={mesh:r,x:t,z:e,growth:0,sway:Math.random()*Math.PI*2};r.userData.saplingRef=s,ls.push(s),te(),Dt("Planted a sapling")}function G1(n){for(let t=ls.length-1;t>=0;t-=1){const e=ls[t];e.growth+=n;const i=$t(e.growth/r1,0,1),r=Math.min(ml.length-1,Math.floor(i*ml.length)),s=ml[r],o=1-Math.exp(-6*n),a=e.mesh.scale.x+(s-e.mesh.scale.x)*o;if(e.mesh.scale.setScalar(a),e.mesh.rotation.z=Math.sin(performance.now()*.0016+e.sway)*.035,i>=1){ee.remove(e.mesh),ls.splice(t,1);const c=Ep(e.x,e.z,.9+Math.random()*.35);c.userData.planted=!0,gm(c)}}}function lf(n){const t=performance.now()*.001,e=1-Math.exp(-10*n);for(const i of Je){if(!i.visible)continue;const r=i.userData;if(r.falling){r.fallProgress=Math.min(1,r.fallProgress+n/i1);const a=r.fallProgress*r.fallProgress*Math.PI*.5;if(i.quaternion.setFromAxisAngle(r.fallAxis,a),r.fallProgress>=1&&!r.lootDropped){r.lootDropped=!0,LE();for(let c=0;c<3;c+=1)m1(i,c);g1(i)}r.fallProgress>=1&&(i.visible=!1);continue}if(!r.choppable)continue;const s=i===u.targetTree?1:0;r.highlight+=(s-r.highlight)*e;const o=r.trunk.material;if(o.emissiveIntensity=r.highlight*(.45+Math.sin(t*7)*.16),r.shake>0){r.shake=Math.max(0,r.shake-n);const a=r.shake/tm;i.rotation.z=Math.sin(t*55)*.055*a,i.rotation.x=Math.cos(t*43)*.03*a}else(i.rotation.z!==0||i.rotation.x!==0)&&(i.rotation.z=0,i.rotation.x=0)}}const Yn=[];function V1(){const n=new At,t=new ct({color:1053981,roughness:.96,metalness:.04,flatShading:!0}),e=new nn({color:16742963}),i=new At;n.add(i);const r=new B(new Ii(.48,0),t);r.position.y=1.12,r.scale.set(1.05,1.2,.72),r.castShadow=!0,i.add(r);const s=new B(new Le(.32,.6,5),t);s.position.y=.68,s.rotation.y=Math.PI/5,s.castShadow=!0,i.add(s);const o=new B(new Dn(.3,0),t);o.position.y=1.82,o.scale.set(1,1.12,.9),o.castShadow=!0,i.add(o);const a=new Le(.055,.28,4),c=new B(a,t);c.position.set(-.17,2.05,0),c.rotation.z=.32,c.castShadow=!0,i.add(c);const l=new B(a,t);l.position.set(.17,2.05,0),l.rotation.z=-.32,l.castShadow=!0,i.add(l);const h=new Nn(.055,6,5),d=new B(h,e);d.position.set(-.11,1.86,.255),i.add(d);const p=new B(h,e);p.position.set(.11,1.86,.255),i.add(p);const g=[];for(const x of[-1,1]){const m=new At;m.position.set(x*.5,1.48,0);const f=new B(new jt(.075,.11,.78,5),t);f.position.y=-.38,f.castShadow=!0,m.add(f);const y=new B(new Le(.09,.24,4),t);y.position.y=-.82,y.rotation.x=Math.PI,y.castShadow=!0,m.add(y),i.add(m),g.push(m)}const _=[];for(const x of[-1,1]){const m=new At;m.position.set(x*.18,.72,0);const f=new B(new jt(.09,.12,.7,5),t);f.position.y=-.35,f.castShadow=!0,m.add(f);const y=new B(new wt(.17,.1,.27),t);y.position.set(0,-.73,.07),y.castShadow=!0,m.add(y),n.add(m),_.push(m)}return n.position.set(0,-40,0),n.visible=!1,n.userData={bodyMat:t,eyeMat:e,bodyGroup:i,arms:g,legs:_,speed:1.2,damage:7,health:2,maxHealth:2,hitTimer:0,attackCooldown:0,phase:Math.random()*Math.PI*2,knockback:new R,fading:!1,fade:1,targetCamp:!1,circleDir:Math.random()<.5?1:-1},ze.add(n),n.userData.enemyRef=n,Yn.push(n),n}for(let n=0;n<em;n+=1)V1();function xm(n){const t=n.userData;t.fading=!1,t.fade=1,t.hitTimer=0,t.attackCooldown=.6+Math.random()*.6,t.knockback.set(0,0,0),t.bodyMat.transparent=!1,t.bodyMat.opacity=1,t.bodyMat.emissive.setHex(0),t.bodyMat.emissiveIntensity=1,t.eyeMat.transparent=!1,t.eyeMat.opacity=1,n.scale.setScalar(1),n.visible=!0}const Rn=new B(new Le(.36,1.5,7),new nn({color:16743202,transparent:!0,opacity:.58,blending:Pi,depthWrite:!1}));Rn.position.set(0,1.15,0);Xt.add(Rn);const qn=new B(new Le(.2,1.05,6),new nn({color:16769674,transparent:!0,opacity:.8,blending:Pi,depthWrite:!1}));qn.position.set(0,.92,0);Xt.add(qn);const dr=54,rr=new Float32Array(dr*3),nr=new Float32Array(dr*3),mu=new Float32Array(dr),uf=new Float32Array(dr),wo=new Ne,fh=new je(rr,3);wo.setAttribute("position",fh);function ph(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(32/2,32/2,0,32/2,32/2,32/2);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 224, 160, 0.95)"),i.addColorStop(.7,"rgba(255, 168, 66, 0.45)"),i.addColorStop(1,"rgba(255, 140, 40, 0)"),e.fillStyle=i,e.fillRect(0,0,32,32);const r=new $a(t);return r.colorSpace=tn,r}const gu=new Ya({color:16761707,size:.065,map:ph(),transparent:!0,opacity:.9,depthWrite:!1,blending:Pi,sizeAttenuation:!0}),_c=new Fu(wo,gu);_c.frustumCulled=!1;Xt.add(_c);function vm(n){const t=n*3;rr[t]=(Math.random()-.5)*.38,rr[t+1]=.9+Math.random()*.3,rr[t+2]=(Math.random()-.5)*.38,nr[t]=(Math.random()-.5)*.45,nr[t+1]=.75+Math.random()*1.25,nr[t+2]=(Math.random()-.5)*.45,uf[n]=.7+Math.random()*.9,mu[n]=uf[n]}for(let n=0;n<dr;n+=1)vm(n);fh.needsUpdate=!0;function W1(n,t,e=1){for(let r=0;r<dr;r+=1){mu[r]-=n,mu[r]<=0&&vm(r);const s=r*3;rr[s]+=nr[s]*n,rr[s+1]+=nr[s+1]*n,rr[s+2]+=nr[s+2]*n,nr[s+1]-=n*.55}fh.needsUpdate=!0;const i=$t(.16+t*.42+e*.075,0,1);wo.setDrawRange(0,Math.max(6,Math.floor(dr*i)))}const wi=[],X1=new nn({color:10267042,transparent:!0,opacity:.08});for(let n=0;n<4;n+=1){const t=new B(new Nn(.11+n*.015,6,6),X1.clone());t.position.y=1.55+n*.42,t.userData.tapIgnore=!0,Xt.add(t),wi.push(t)}const xs=document.createElement("canvas");xs.width=1024;xs.height=256;const q1=xs.getContext("2d"),xc=new $a(xs);xc.colorSpace=tn;xc.anisotropy=2;const Y1=new rp({map:xc,transparent:!0,depthWrite:!1,depthTest:!0}),vs=new wy(Y1);vs.scale.set(4.5,1.12,1);vs.visible=!1;vs.renderOrder=5;Xt.add(vs);let sr=!0,Mm=-1,ym=-1,Sm=!1;function $1(n){const t=[{v:0,c:[222,58,48]},{v:34,c:[235,78,42]},{v:35,c:[244,132,42]},{v:59,c:[249,184,50]},{v:60,c:[205,230,62]},{v:99,c:[166,236,70]},{v:100,c:[76,255,126]}],e=$t(n,0,100);for(let i=1;i<t.length;i+=1)if(e<=t[i].v){const r=t[i-1],s=t[i],o=(e-r.v)/Math.max(1e-4,s.v-r.v);return`rgb(${Math.round(r.c[0]+(s.c[0]-r.c[0])*o)}, ${Math.round(r.c[1]+(s.c[1]-r.c[1])*o)}, ${Math.round(r.c[2]+(s.c[2]-r.c[2])*o)})`}return"rgb(76, 255, 126)"}function hf(n,t,e,i,r,s){const o=Math.min(s,i/2,r/2);n.beginPath(),n.moveTo(t+o,e),n.lineTo(t+i-o,e),n.quadraticCurveTo(t+i,e,t+i,e+o),n.lineTo(t+i,e+r-o),n.quadraticCurveTo(t+i,e+r,t+i-o,e+r),n.lineTo(t+o,e+r),n.quadraticCurveTo(t,e+r,t,e+r-o),n.lineTo(t,e+o),n.quadraticCurveTo(t,e,t+o,e),n.closePath()}function K1(){const n=q1,t=u.fireBarMessageTimer>0,e=u.fireLevel,i=$t(u.fireProgress,0,100),r=e>=lo&&i>=99.95,s=t?100:i,o=t?`FIRE LEVEL ${e}. MAP EXPANDED`:r?`level ${e} progress: MAX`:`level ${e} progress: ${Math.round(i)}/100`;n.clearRect(0,0,xs.width,xs.height),n.textAlign="center",n.textBaseline="middle",n.font=`${t?52:55}px 'Patrick Hand', 'Comic Sans MS', cursive`,n.lineJoin="round",n.strokeStyle="#050505",n.lineWidth=10,n.strokeText(o,512,108),n.fillStyle="#ffffff",n.fillText(o,512,108);const a=26,c=164,l=972,h=58;if(hf(n,a,c,l,h,12),n.fillStyle="#050807",n.fill(),n.strokeStyle="rgba(242, 255, 242, 0.62)",n.lineWidth=3,n.stroke(),s>0){const d=a+7,p=c+7,g=l-14,_=h-14,x=g*(s/100),m=t||s>=100?"rgb(76, 255, 126)":$1(s),f=n.createLinearGradient(d,0,d+Math.max(1,x),0);f.addColorStop(0,m),f.addColorStop(1,t||s>=100?"#c4ffcf":m),n.save(),(t||s>=100)&&(n.shadowColor="rgba(112, 255, 150, 0.9)",n.shadowBlur=16),hf(n,d,p,Math.max(4,x),_,7),n.fillStyle=f,n.fill(),n.restore()}xc.needsUpdate=!0,sr=!1,Mm=Math.round(i),ym=e,Sm=t}function Z1(n){u.fireBarMessageTimer>0&&(u.fireBarMessageTimer=Math.max(0,u.fireBarMessageTimer-n),u.fireBarMessageTimer<=0&&(sr=!0));const t=u.started&&!u.gameOver&&!u.fireOut;if(vs.visible=t,!t)return;const e=Qp[u.fireLevel]||1;vs.position.set(0,2.55+e,0),u.fireBarMessageTimer<=0&&Mm!==Math.round(u.fireProgress)&&(sr=!0),(sr||ym!==u.fireLevel||Sm!==u.fireBarMessageTimer>0)&&K1()}const Ms=46,or=new Float32Array(Ms*3),ir=new Float32Array(Ms*3),Ea=new Float32Array(Ms),wm=new Ne,mh=new je(or,3);wm.setAttribute("position",mh);const Em=new Ya({color:14221155,size:.11,map:ph(),transparent:!0,opacity:.95,depthWrite:!1,blending:Pi,sizeAttenuation:!0}),ys=new Fu(wm,Em);ys.visible=!1;ys.frustumCulled=!1;Xt.add(ys);function j1(){for(let n=0;n<Ms;n+=1){const t=n*3,e=Math.random()*Math.PI*2,i=Math.random()*.55;or[t]=Math.cos(e)*i,or[t+1]=.55+Math.random()*.45,or[t+2]=Math.sin(e)*i;const r=1.1+Math.random()*2.2;ir[t]=Math.cos(e)*r*.7,ir[t+1]=1.2+Math.random()*2.4,ir[t+2]=Math.sin(e)*r*.7,Ea[n]=.45+Math.random()*.55}ys.visible=!0,mh.needsUpdate=!0}function J1(n){if(!ys.visible)return;let t=0;for(let e=0;e<Ms;e+=1){if(Ea[e]<=0||(Ea[e]-=n,Ea[e]<=0))continue;t+=1;const i=e*3;or[i]+=ir[i]*n,or[i+1]+=ir[i+1]*n,or[i+2]+=ir[i+2]*n,ir[i+1]-=n*2.8}mh.needsUpdate=!0,Em.opacity=$t(t/Ms,0,1)*.95,t===0&&(ys.visible=!1)}const xl=new ct({color:6962461,roughness:.92}),Q1=new ct({color:3088664,roughness:1}),df=new ct({color:4597775,roughness:.95}),tw=new ct({color:7107447,roughness:.95}),ff=new ct({color:3817797,roughness:.5,metalness:.7}),ew=new ct({color:4266250,emissive:16734738,emissiveIntensity:1.4,roughness:.8});let Oe=null;const Ga=60,pf=10,Tm=new ct({color:13817300,roughness:.9,metalness:.015,side:Tn}),bm=Tm.clone();bm.color.setHex(12830919);const Am=new At,vc=new B(new jt(1,1,1,96,1,!0),bm),Mc=new B(new jt(1,1,1,96,1,!0),Tm);vc.position.y=Ga/2;Mc.position.y=Ga/2;vc.receiveShadow=!0;Mc.receiveShadow=!0;Am.add(vc,Mc);ee.add(Am);let In=uo,mn=null,Ss=0;const Eo=130,ar=new Float32Array(Eo*3),es=new Float32Array(Eo*3),Cm=new Ne,gh=new je(ar,3);Cm.setAttribute("position",gh);const Ta=new Ya({color:14209214,size:.42,map:ph(),transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),fr=new Fu(Cm,Ta);fr.visible=!1;fr.frustumCulled=!1;ze.add(fr);const ba=new Float32Array(Eo);function Rm(n){const t=n*3,e=Math.random()*Math.PI*2,i=In+Math.random()*1.2;es[t]=e,es[t+1]=.15+Math.random()*2.2,es[t+2]=(Math.random()-.5)*.45,ar[t]=Math.cos(e)*i,ar[t+1]=es[t+1],ar[t+2]=Math.sin(e)*i,ba[n]=.55+Math.random()*1.5}function nw(n){const t=du[n]||uo;mn={from:In,to:t,elapsed:0,duration:8},Ss=.11,fr.visible=!0;for(let e=0;e<Eo;e+=1)Rm(e);gh.needsUpdate=!0,xh(n)}function _h(){vc.scale.set(In,Ga,In),Mc.scale.set(In+pf,Ga,In+pf)}function iw(n){if(mn){mn.elapsed+=n;const t=$t(mn.elapsed/mn.duration,0,1),e=t*t*(3-2*t);In=Hf.lerp(mn.from,mn.to,e),_h(),t>=1&&(mn=null)}if(Ss=Math.max(0,Ss-n*.055),fr.visible){let t=0;for(let e=0;e<Eo;e+=1){if(ba[e]-=n,ba[e]<=0)if(mn)Rm(e);else continue;t+=1;const i=e*3,r=1.5-ba[e],s=es[i],o=In+.2+r*.55;ar[i]=Math.cos(s)*o+Math.cos(s+1.3)*r*.18,ar[i+1]=es[i+1]+r*.55,ar[i+2]=Math.sin(s)*o+Math.sin(s+1.3)*r*.18}gh.needsUpdate=!0,Ta.opacity=mn?.3:Math.max(0,Ta.opacity-n*.22),!mn&&t===0&&(fr.visible=!1,Ta.opacity=.34)}}function yc(n,t=1){const e=Math.hypot(n.x,n.z),i=In-t;if(e>i){const r=i/e;n.x*=r,n.z*=r}}const Sc=new At;Sc.name="generated-forest";ee.add(Sc);const eo=[],_u=new Set,Yt=new Ee,Yr=new Et,rw=new wt(1,1,1),mf=new wt(1,1,1),gf=new Dn(.72,0),sw=new Ii(.62,0),ow=new ct({color:3811360,roughness:1}),_f=new ct({color:1783078,roughness:1,flatShading:!0}),Pm=new ct({color:5857888,roughness:.98,flatShading:!0}),aw=new ct({color:5069408,roughness:.92,metalness:.08,flatShading:!0}),cw=new ct({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.3}),lw=new ct({color:2379832,roughness:1,flatShading:!0}),uw=new ct({color:14271613,roughness:.95}),hw=new ct({color:11025204,roughness:.9}),dw=new ct({color:15780258,roughness:.8});function xh(n){if(n<2||n>lo||_u.has(n))return;_u.add(n);const t=(du[n-1]||uo)+8,e=(du[n]||uo)-8;if(e<=t)return;const i=n>=4?3:2,r=10;for(let s=0;s<i;s+=1){const o=t+(e-t)*s/i,a=t+(e-t)*(s+1)/i;for(let c=0;c<r;c+=1){const l=c/r*Math.PI*2,h=(c+1)/r*Math.PI*2;eo.push({level:n,rMin:o,rMax:a,a0:l,a1:h})}}}function $r(n,t,e,i){const r=e+Math.random()*(i-e),s=Math.sqrt(n*n+Math.random()*(t*t-n*n));return{x:Math.cos(r)*s,z:Math.sin(r)*s,radius:s}}function fw(n,t,e){const i=new At,r=new B(new wt(.34,.54,.22),uw);r.position.y=.42,r.castShadow=!0,i.add(r);const s=new B(new Nn(.17,7,6),dw);s.position.y=.84,s.castShadow=!0,i.add(s);const o=new B(new wt(.3,.08,.25),hw);o.position.y=.7,i.add(o),i.position.set(t,qt(t,e),e),i.rotation.y=Math.random()*Math.PI*2,i.traverse(a=>{a.userData.tapIgnore=!0}),i.userData.lostChild=!0,n.add(i)}function pw(n,t,e,i){const r=new B(new mo(i,20),Xp);r.rotation.x=-Math.PI/2,r.position.set(t,qt(t,e)+.045,e),n.add(r);const s=new B(new di(i+.12,.16,4,20),Pm);s.rotation.x=Math.PI/2,s.position.set(t,qt(t,e)+.06,e),s.scale.z=.45,n.add(s)}function mw(n){const t=new At,e=n.a1-n.a0,i=.5*(n.rMax*n.rMax-n.rMin*n.rMin)*e,r=135-(n.level-2)*20,s=Math.min(260,Math.max(10,Math.floor(i/r))),o=n.level>=2&&Math.random()<.34?1:0,a=[];for(let T=0;T<o;T+=1){const I=$r(n.rMin+8,n.rMax-8,n.a0,n.a1),b=1.8+Math.random()*2.2;a.push({x:I.x,z:I.z,radius:b}),pw(t,I.x,I.z,b)}const c=new Wi(rw,ow,s),l=new Wi(mf,_f,s),h=new Wi(mf,_f,s);c.instanceMatrix.setUsage(rs),l.instanceMatrix.setUsage(rs),h.instanceMatrix.setUsage(rs),c.frustumCulled=!0,l.frustumCulled=!0,h.frustumCulled=!0;let d=0;for(let T=0;T<s*3&&d<s;T+=1){const I=$r(n.rMin+2,n.rMax-2,n.a0,n.a1);let b=!1;for(const j of a)if(Math.hypot(I.x-j.x,I.z-j.z)<j.radius+1.4){b=!0;break}if(b)continue;const A=$t(I.radius/850,0,1),D=(.92+Math.random()*.72)*(1+A*.55),E=(2.1+Math.random()*1.1)*D,v=(.24+Math.random()*.1)*D,P=qt(I.x,I.z),k=Math.random()*Math.PI*2;Yt.position.set(I.x,P+E/2,I.z),Yt.rotation.set(0,k,0),Yt.scale.set(v,E,v),Yt.updateMatrix(),c.setMatrixAt(d,Yt.matrix),Yr.setHSL(.08+Math.random()*.03,.3,.16+Math.random()*.08),c.setColorAt(d,Yr);const O=(1.55+Math.random()*.65)*D,V=(1.7+Math.random()*.7)*D;Yt.position.set(I.x,P+E+V*.34,I.z),Yt.rotation.set(0,k+Math.random()*.3,0),Yt.scale.set(O,V,O),Yt.updateMatrix(),l.setMatrixAt(d,Yt.matrix),Yr.setHSL(.31+Math.random()*.055,.38,.13+Math.random()*.07),l.setColorAt(d,Yr);const $=O*(.54+Math.random()*.18),X=V*(.7+Math.random()*.22);Yt.position.set(I.x,P+E+V*.94,I.z),Yt.rotation.set(0,k+Math.random()*.45,0),Yt.scale.set($,X,$),Yt.updateMatrix(),h.setMatrixAt(d,Yt.matrix),Yr.setHSL(.32+Math.random()*.05,.4,.16+Math.random()*.08),h.setColorAt(d,Yr),d+=1}c.count=d,l.count=d,h.count=d,c.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0),l.instanceColor&&(l.instanceColor.needsUpdate=!0),h.instanceColor&&(h.instanceColor.needsUpdate=!0),t.add(c,l,h);const p=Math.min(28,Math.max(1,Math.floor(i/2400))),g=new Wi(gf,Pm,p);let _=0;for(let T=0;T<p*2&&_<p;T+=1){const I=$r(n.rMin+2,n.rMax-2,n.a0,n.a1),b=.65+Math.random()*1.05;Yt.position.set(I.x,qt(I.x,I.z)+.28*b,I.z),Yt.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),Yt.scale.set(b,b*.58,b),Yt.updateMatrix(),g.setMatrixAt(_,Yt.matrix),_+=1}g.count=_,g.instanceMatrix.needsUpdate=!0,t.add(g);const x=Math.min(9,Math.max(0,Math.floor(i/13500)));if(x>0){const T=new Wi(gf,aw,x),I=new Wi(new Ka(.12,0),cw,x*3);let b=0,A=0;for(let D=0;D<x*2&&b<x;D+=1){const E=$r(n.rMin+3,n.rMax-3,n.a0,n.a1),v=.9+Math.random()*.8,P=qt(E.x,E.z);Yt.position.set(E.x,P+.42*v,E.z),Yt.rotation.set(0,Math.random()*Math.PI,0),Yt.scale.set(v,v*.72,v),Yt.updateMatrix(),T.setMatrixAt(b,Yt.matrix);for(let k=0;k<3;k+=1){const O=Math.random()*Math.PI*2,V=.8+Math.random()*.6;Yt.position.set(E.x+Math.cos(O)*.5*v,P+(.48+Math.random()*.25)*v,E.z+Math.sin(O)*.5*v),Yt.rotation.set(Math.random(),Math.random(),Math.random()),Yt.scale.setScalar(V),Yt.updateMatrix(),I.setMatrixAt(A,Yt.matrix),A+=1}b+=1}T.count=b,I.count=A,T.instanceMatrix.needsUpdate=!0,I.instanceMatrix.needsUpdate=!0,t.add(T,I)}const m=Math.min(34,Math.max(1,Math.floor(i/3900))),f=new Wi(sw,lw,m);let y=0;for(let T=0;T<m*2&&y<m;T+=1){const I=$r(n.rMin+2,n.rMax-2,n.a0,n.a1),b=.65+Math.random()*.7;Yt.position.set(I.x,qt(I.x,I.z)+.35*b,I.z),Yt.rotation.set(0,Math.random()*Math.PI,0),Yt.scale.set(b,b*.72,b),Yt.updateMatrix(),f.setMatrixAt(y,Yt.matrix),y+=1}f.count=y,f.instanceMatrix.needsUpdate=!0,t.add(f);const S=.14+(n.level-2)*.045;if(Math.random()<S){const T=$r(n.rMin+6,n.rMax-6,n.a0,n.a1);fw(t,T.x,T.z)}Sc.add(t)}function gw(){if(!eo.length)return;const n=performance.now();for(;eo.length&&performance.now()-n<2.8;)mw(eo.shift())}function _w(){eo.length=0,_u.clear(),Sc.clear()}_h();const xw=new R(0,1,0);function vl(n,t,e,i,r){const s=e.clone().sub(t),o=s.length();if(o<.001)return;const a=new B(new jt(i*.85,i,o,6),r);a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(xw,s.normalize()),a.castShadow=!0,a.receiveShadow=!0,n.add(a)}function vh(n){for(;Qe.children.length>0;){const i=Qe.children.pop();i.geometry&&i.geometry.dispose()}if(n===1)for(let i=0;i<3;i+=1){const r=i/3*Math.PI*2+.45;vl(Qe,new R(Math.cos(r)*.46,.08,Math.sin(r)*.46),new R(Math.cos(r)*.07,.92,Math.sin(r)*.07),.115,Q1)}else{const i=n===2?6:n===3?7:n===4?9:12,r=n===2?.72:n===3?.86:n===4?1:1.2,s=n===2?1.45:n===3?1.7:n===4?2:2.35,o=n===2?.14:.115+n*.009;for(let a=0;a<i;a+=1){const c=a/i*Math.PI*2+.35;vl(Qe,new R(Math.cos(c)*r,.1,Math.sin(c)*r),new R(Math.cos(c)*.08,s,Math.sin(c)*.08),o,a%2===0?xl:df)}}if(n>=2)for(const i of[-1,1]){const r=new B(new jt(.2,.22,1.65,7),xl);r.rotation.z=Math.PI/2,r.rotation.y=i*.28,r.position.set(i*1.5,.22,i*.35),r.castShadow=!0,r.receiveShadow=!0,Qe.add(r)}if(n>=3){const i=n>=4?1.95:1.45,r=n>=4?12:9;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2,a=.85+Math.random()*.35,c=new B(new Ii(.2*a,0),tw);c.position.set(Math.cos(o)*i,.15*a,Math.sin(o)*i),c.rotation.set(Math.random(),Math.random(),Math.random()),c.castShadow=!0,c.receiveShadow=!0,Qe.add(c)}}if(n>=4){for(let i=0;i<2;i+=1)for(const r of[-1,1]){const s=new B(new jt(.15,.17,1.8-i*.2,7),xl);s.rotation.z=Math.PI/2,s.rotation.y=i===0?0:Math.PI/2,s.position.set(i===0?0:r*.42,.25+i*.3,i===0?r*.42:0),s.castShadow=!0,Qe.add(s)}for(let i=0;i<14;i+=1){const r=Math.random()*Math.PI*2,s=.5+Math.random()*1.35,o=new B(new wt(.11,.045,.11),ew);o.position.set(Math.cos(r)*s,.05,Math.sin(r)*s),o.rotation.y=Math.random()*Math.PI,Qe.add(o)}}if(n>=5){const i=new B(new di(2.18,.085,6,22),ff);i.rotation.x=Math.PI/2,i.position.y=.1,i.castShadow=!0,Qe.add(i);for(let r=0;r<6;r+=1){const s=r/6*Math.PI*2+.4,o=new B(new wt(.12,.58,.12),ff);o.position.set(Math.cos(s)*2.18,.32,Math.sin(s)*2.18),o.rotation.y=-s,Qe.add(o)}for(let r=0;r<5;r+=1){const s=r/5*Math.PI*2+.1;vl(Qe,new R(Math.cos(s)*2.05,.12,Math.sin(s)*2.05),new R(Math.cos(s)*.35,1.5,Math.sin(s)*.35),.17,df)}}Qe.scale.setScalar(n===1?.7:.56),u.fireGrow=0,qn&&qn.material&&qn.material.color.setHex(n>=5?14218495:16769674),Rn&&Rn.material&&Rn.material.color.setHex(n>=5?8309759:16743202),gn&&gn.material&&(gn.material.color.setHex(n>=5?14153215:16747050),gn.material.emissive.setHex(n>=5?7325951:16739096));const t=ih[n]||8;Lm(t),Oe&&(Oe.visible=!1);const e=!u.fireOut;gn.visible=e,Rn.visible=e,qn.visible=e,_c.visible=e,e||(as.intensity=0,cs.intensity=0,wo.setDrawRange(0,0),wi.forEach(i=>{i.material.opacity=0})),Mo.material.emissiveIntensity=e?.55:u.fireEverLit?.58:.02,sr=!0}function Lm(n){if(Oe&&(ee.remove(Oe),Oe.geometry.dispose(),Oe.material.dispose(),Oe=null),!n||n<=0)return;const t=[],e=96;for(let s=0;s<e;s+=1){const o=s/e*Math.PI*2;t.push(new R(Math.cos(o)*n,.05,Math.sin(o)*n))}const i=new Ne().setFromPoints(t),r=new Cy({color:14477538,transparent:!0,opacity:.23,dashSize:.46,gapSize:.4,depthWrite:!1});Oe=new Ay(i,r),Oe.computeLineDistances(),Oe.position.copy(Xt.position),Oe.renderOrder=1,ee.add(Oe)}function vw(){va.classList.remove("flash"),va.offsetWidth,va.classList.add("flash")}function Mw(){u.startHintTimer=8,hp.classList.add("visible")}const Mh=new B(new Nn(1150,24,24),new nn({color:399393,side:qe,fog:!1}));ze.add(Mh);const _n=new _o(16752970,2.2,12,2);_n.position.set(0,1.2,0);_n.visible=!1;ze.add(_n);const u={started:!1,night:1,maxNight:99,health:100,hunger:100,damageFlash:0,attackCooldown:0,attackTimer:0,nearFire:!0,keys:new Set,joystick:{x:0,y:0,active:!1},look:{active:!1},pinchDistance:0,cameraYaw:0,cameraPitch:0,cameraDistance:Xu,firstPerson:!1,viewBlend:0,cameraInitialized:!1,cycleTime:0,daylight:1,nightActive:!1,gameOver:!1,pointerId:null,victory:!1,velocityY:0,grounded:!0,jumpHeld:!1,walkPhase:0,idleTime:0,moveSpeed:0,backpack:{wood:0,sapling:0,berry:0,iron:0},sackOrder:[],backpackCapacity:nm,goodSack:!1,goodAxe:!1,ownedTools:{axe:!0,pickaxe:!1,torch:!1,ironAxe:!1,ironSword:!1},equippedTool:null,equipTimer:0,inventoryOpen:!1,craftOpen:!1,settingsOpen:!1,grinderInReach:!1,benchInReach:!1,fireLevel:1,fireProgress:0,fireGrow:0,fireDarken:0,startHintTimer:0,craftSelected:"pickaxe",carriedPlaceable:null,dropCooldown:0,starveTimer:0,portrait:!1,paused:!1,fireOut:!0,fireEverLit:!1,fireBarMessageTimer:0,fireFlare:0,fireInReach:!1,chopTimer:0,plantCooldown:0,swingCooldown:0,targetTree:null,targetRock:null,falling:0,invuln:0,hitEffectTimer:0};try{window.localStorage.removeItem("nights.invertHorizontalLook"),window.localStorage.removeItem("nights.cameraView")}catch{}function yw(){const n=u.cameraYaw,t=u.cameraPitch,e=Math.sin(n),i=Math.cos(n),r=-i,s=e;vu(50,0);const a=(Math.sin(u.cameraYaw)-e)*r+(Math.cos(u.cameraYaw)-i)*s>0;vu(0,-50);const c=u.cameraPitch>t;u.cameraYaw=n,u.cameraPitch=t,a||console.error("[camera self-test] FAILED: +50 px right drag turned the view left"),c||console.error("[camera self-test] FAILED: upward drag did not look up"),a&&c&&console.info("[camera self-test] passed: drag right looks right, drag up looks up")}yw();function Im(n,t=!0){u.firstPerson=!!n,Ks&&(Ks.classList.toggle("first-person",u.firstPerson),Ks.setAttribute("aria-pressed",String(u.firstPerson)),Ks.setAttribute("aria-label",u.firstPerson?"Switch to third-person view":"Switch to first-person view")),t&&Dt(u.firstPerson?"First-person view":"Third-person view")}function Sw(){Im(!u.firstPerson),Ls()}function $t(n,t,e){return Math.min(Math.max(n,t),e)}function xu(n){const t=$t(n,0,1);return t*t*(3-2*t)}function ww(n,t,e){let i=t-n;return i=Math.atan2(Math.sin(i),Math.cos(i)),n+i*e}function te(){Uy.textContent=`${u.night} / ${u.maxNight}`,Oy.textContent=String(ca("wood")),By.textContent=String(ca("sapling")),ky.textContent=String(ca("berry")),zy.textContent=String(ca("iron")),Fy.textContent=String(Math.max(0,Math.ceil(u.health))),Gy.textContent=String(Math.max(0,Math.ceil(u.hunger)));const n=$t(u.health,0,100);ul.style.width=`${n}%`,ul.classList.toggle("low",n<=55&&n>25),ul.classList.toggle("critical",n<=25);const t=$t(u.hunger,0,100);Gd.style.width=`${t}%`,Gd.classList.toggle("low",t<=30),Dm(),gs(),gc();const e=u.started&&u.fireOut;xo.classList.toggle("visible",e),jy.textContent=`${Ha()}/${u.backpackCapacity}`,Qy.textContent=`${Ha()} / ${u.backpackCapacity}`,Ps(),Tw()}const la=["slot-a","slot-b","slot-c","slot-d","slot-e","slot-f"],Ew=[Vu,Gu,ku,Bu,to,zu,Hu];function Dm(){const n=!!Ht,t=Ht==null?void 0:Ht.type,e=fc(),i=e&&u.sackOrder.length>0,r=n&&(t==="wood"||t==="iron")&&hc()<=Zp,s=n&&uc()<=Kp;up.classList.toggle("available",n);const o=[];r&&o.push(zu),s&&o.push(Hu),n&&e&&o.push(Bu),n&&t==="sapling"&&o.push(Gu),n&&t==="berry"&&o.push(ku),i&&o.push(to),u.carriedPlaceable&&o.push(Vu);for(const l of Ew)l.classList.remove("available",...la);o.forEach((l,h)=>{l.classList.add("available",la[h]||la[la.length-1])});const a=n;to.disabled=a;const c=to.querySelector("span");c&&(c.textContent=a?"HANDS FULL":"UNSTORE")}function Ps(){const n=[["axe",dp],["backpack",Ci],["pickaxe",fp],["torch",pp],["ironSword",mp]];for(const[t,e]of n){const i=t==="backpack"||!!u.ownedTools[t],r=t==="axe"?u.equippedTool==="axe"||u.equippedTool==="ironAxe":u.equippedTool===t;e.classList.toggle("hidden",!i),e.classList.toggle("equipped",r),e.setAttribute("aria-pressed",String(r))}}function Tw(){if(!u.inventoryOpen)return;const n=`${u.backpack.wood}|${u.backpack.sapling}|${u.backpack.berry}|${u.backpack.iron}`;if(n===nf)return;nf=n,dl.innerHTML="";const t=[["wood","Wood log"],["sapling","Sapling"],["berry","Berry"],["iron","Iron piece"]];let e=!1;for(const[i,r]of t){const s=u.backpack[i];if(s<=0)continue;e=!0;const o=document.createElement("div");o.className="inventory-row";const a=document.createElement("span");a.className=`inv-icon ${i}`;const c=document.createElement("span");c.className="inv-name",c.textContent=r;const l=document.createElement("span");l.className="inv-count",l.textContent=`×${s}`;const h=document.createElement("button");if(h.className="inv-btn take",h.textContent="TAKE",h.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),bw(i)}),o.append(a,c,l,h),i==="berry"){const d=document.createElement("button");d.className="inv-btn eat",d.textContent="EAT",d.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Aw()}),o.append(d)}dl.appendChild(o)}if(!e){const i=document.createElement("div");i.className="inventory-empty",i.textContent="Your backpack is empty.",dl.appendChild(i)}}function fi(n){u.inventoryOpen=n,Jy.classList.toggle("hidden",!n),Ps()}function bw(n){if(!u.started||u.gameOver||u.falling||u.backpack[n]<=0)return;lm(n),u.backpack[n]-=1;const t=Y.position.x+Math.sin(Y.rotation.y)*1.35,e=Y.position.z+Math.cos(Y.rotation.y)*1.35;Ni(n,t,e,{velocityY:2.2,pickupDelay:.3}),u.dropCooldown=.25,te(),Dt(`Took out ${Rs[n].toLowerCase()}`)}function Aw(){!u.started||u.gameOver||u.falling||u.backpack.berry<=0||(lm("berry"),u.backpack.berry-=1,u.hunger=$t(u.hunger+ka,0,100),te(),Dt(`Ate a berry (+${ka} hunger)`))}function kn(n){if(!(!u.started||u.gameOver||u.falling||u.paused)){if(n!=="backpack"&&!u.ownedTools[n]){Dt(`Craft the ${Rs[n]||"tool"} first`);return}n===u.equippedTool?u.equippedTool=null:u.equippedTool=n,Fi(),Mr(!1),u.equippedTool!=="backpack"&&fi(!1),u.equipTimer=u.equippedTool?cc:0,Ls(),te(),wc()}}function Cw(){u.equippedTool=null,u.equipTimer=0,fi(!1),Fi(),Ls(),te(),wc()}function Rw(){switch(u.equippedTool){case"axe":return rn;case"backpack":return Zn;case"pickaxe":return ec;case"torch":return rc;case"ironAxe":return nc;case"ironSword":return ic;default:return null}}function wc(){rn.visible=u.equippedTool==="axe",Zn.visible=u.equippedTool==="backpack",ec.visible=u.equippedTool==="pickaxe",rc.visible=u.equippedTool==="torch",nc.visible=u.equippedTool==="ironAxe",ic.visible=u.equippedTool==="ironSword",Qa.visible=!u.equippedTool}function Pw(n){u.equipTimer=Math.max(0,u.equipTimer-n);const t=Rw();if(!t)return;const e=t.userData.baseY??t.position.y,i=t===Zn?.92:1;if(u.equipTimer>0){const r=1-u.equipTimer/cc,s=1-(1-r)*(1-r);t.scale.setScalar((.55+s*.45)*i),t.position.y=e-(1-s)*.26}else t.scale.setScalar(i),t.position.y=e}function Lw(n){for(const[t,e]of Object.entries(zp))e.visible=n&&u.equippedTool===t}function Iw(n){if(!yo.visible)return;let t=0;if(u.attackTimer>0){const a=1-u.attackTimer/ac;t=Math.sin($t(a,0,1)*Math.PI)}else if(u.chopTimer>0){const a=1-u.chopTimer/.3;t=Math.sin($t(a,0,1)*Math.PI)*.85}else if(u.equipTimer>0){const a=1-u.equipTimer/cc;t=-Math.sin($t(a,0,1)*Math.PI)*.3}const e=u.moveSpeed>.1&&u.grounded,i=u.walkPhase,r=e?Math.sin(i)*.018:Math.sin(u.idleTime*1.7)*.006,s=e?Math.abs(Math.cos(i))*.012:Math.sin(u.idleTime*1.5)*.004,o=1-Math.exp(-18*n);xe.position.x+=(Wr.x+r-xe.position.x)*o,xe.position.y+=(Wr.y+s-xe.position.y)*o,xe.position.z=Wr.z,xe.rotation.x+=(Wr.rx-t*1.35-xe.rotation.x)*o,xe.rotation.y=Wr.ry,xe.rotation.z+=(Wr.rz+t*.55-xe.rotation.z)*o}function Dw(){ro.style.transform="translate(-50%, -50%)"}function Uw(n,t){const e=ms.getBoundingClientRect(),i=e.left+e.width/2,r=e.top+e.height/2,s=n-i,o=t-r,a=e.width*.31,c=Math.min(Math.hypot(s,o),a),l=Math.atan2(o,s),h=Math.cos(l)*c,d=Math.sin(l)*c;u.joystick.x=h/a,u.joystick.y=d/a,u.joystick.active=!0,ro.style.left=`${50+h/a*30}%`,ro.style.top=`${50+d/a*30}%`}function Um(n){n.preventDefault(),u.joystick.active=!0,Uw(n.clientX,n.clientY)}ms.addEventListener("pointerdown",n=>{u.pointerId=n.pointerId,Um(n),ms.setPointerCapture(n.pointerId)});ms.addEventListener("pointermove",n=>{!u.joystick.active||n.pointerId!==u.pointerId||Um(n)});function Ec(){u.pointerId=null,u.joystick.x=0,u.joystick.y=0,u.joystick.active=!1,ro.style.left="50%",ro.style.top="50%",Dw()}ms.addEventListener("pointerup",Ec);ms.addEventListener("pointercancel",Ec);function vu(n,t){u.cameraYaw-=n*_S,u.cameraPitch=$t(u.cameraPitch-t*xS,-Yd,Yd)}const pr=new Map;function Nw(n){return!!(n&&n.closest&&n.closest("button, #inventoryPanel, #craftPanel, #settingsPanel, #startOverlay, #rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone"))}function Fw(n,t){if(!Hd)return!1;const e=Hd.getBoundingClientRect();return n>=e.left&&n<=e.right&&t>=e.top&&t<=e.bottom}function Tc(){return!u.started||u.gameOver||u.falling||u.portrait||u.inventoryOpen||u.craftOpen||u.settingsOpen}window.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||Nw(n.target)||Fw(n.clientX,n.clientY)||!u.started||u.gameOver||u.falling||u.portrait||pr.set(n.pointerId,{startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,startTime:performance.now(),moved:0,dragging:!1,canLook:n.clientX>=window.innerWidth*.5})});window.addEventListener("pointermove",n=>{const t=pr.get(n.pointerId);if(!t)return;const e=n.clientX-t.lastX,i=n.clientY-t.lastY;t.lastX=n.clientX,t.lastY=n.clientY,t.moved=Math.max(t.moved,Math.hypot(n.clientX-t.startX,n.clientY-t.startY)),!t.dragging&&t.moved>vp&&(t.dragging=!0),!(!t.dragging||!t.canLook||Tc())&&vu(e,i)});function Nm(n){const t=pr.get(n.pointerId);if(!t)return;pr.delete(n.pointerId);const e=performance.now()-t.startTime,i=!t.dragging&&t.moved<=vp&&e<=vS;d1(i?"TAP":"DRAG"),!(n.type==="pointercancel"||!i)&&(Tc()||Vw(t.startX,t.startY))}window.addEventListener("pointerup",Nm);window.addEventListener("pointercancel",Nm);function Fm(){return window.innerHeight>window.innerWidth}async function Ow(){if(window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function Om(){if(!Fm()){Ow(),u.started=!0,u.victory=!1,u.gameOver=!1,u.paused=!1,ai.classList.add("hidden"),u.health=100,u.hunger=100,u.night=1,u.cycleTime=0,u.daylight=1,u.nightActive=!1,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,u.damageFlash=0,u.nearFire=!0,u.keys.clear(),u.cameraYaw=0,u.cameraPitch=0,u.cameraDistance=Xu,u.velocityY=0,u.grounded=!0,u.jumpHeld=!1,u.walkPhase=0,u.idleTime=0,u.moveSpeed=0,u.backpack.wood=0,u.backpack.sapling=0,u.backpack.berry=0,u.backpack.iron=0,u.sackOrder=[],u.ownedTools.axe=!0,u.ownedTools.pickaxe=!1,u.ownedTools.torch=!1,u.ownedTools.ironAxe=!1,u.ownedTools.ironSword=!1,u.goodSack=!1,u.goodAxe=!1,u.backpackCapacity=nm,u.equippedTool=null,u.equipTimer=0,u.inventoryOpen=!1,u.craftOpen=!1,u.settingsOpen=!1,u.benchInReach=!1,u.fireLevel=1,u.fireProgress=0,u.fireGrow=0,u.fireDarken=0,u.startHintTimer=8,u.fireOut=!0,u.fireEverLit=!1,u.fireBarMessageTimer=0,u.fireGrow=0,In=uo,_h(),mn=null,Ss=0,fr.visible=!1,_w(),u.carriedPlaceable=null,u.targetRock=null,u.dropCooldown=0,u.starveTimer=0,u.fireFlare=0,u.chopTimer=0,u.plantCooldown=0,u.targetTree=null,u.falling=0,u.invuln=0,u.hitEffectTimer=0,ts=0,oo.classList.remove("visible"),clearTimeout(fu),$s.classList.remove("visible"),sr=!0,Ti(),fi(!1),Fi(),Mr(!1),le.stock.wood=0,le.stock.iron=0,le.tier=1,le.crafted.clear(),Yp(),F1(),gc(),vh(1),Lm(im()),u.craftSelected="pickaxe",jS(),JS(),Y.position.set(0,qt(0,-3.5),-3.5),Y.rotation.y=0,u.cameraInitialized=!1,Wn.rotation.set(0,0,0),Ln.rotation.set(0,0,0),ur.rotation.set(0,0,0),hr.rotation.set(0,0,0),vn.position.y=.01,pr.clear(),u.look.active=!1,u.pinchDistance=0;for(const n of ls)ee.remove(n.mesh);ls.length=0,x1();for(let n=Je.length-1;n>=0;n-=1){const t=Je[n];if(t.userData.planted){ee.remove(t),Je.splice(n,1);continue}t.visible=!0,t.rotation.set(0,0,0),t.quaternion.identity(),t.userData.baseChoppable&&gm(t)}xo.classList.remove("visible"),ja.classList.remove("visible"),Ma.classList.add("hidden"),va.classList.remove("flash"),Wu.style.opacity="0";for(const n of Yn)n.visible=!1,n.position.set(0,-40,0),xm(n),n.visible=!1;hn.visible=!1,un.visible=!1,wc(),gs(),te(),Mw(),Dt("Tap a tool · loose iron by the bench")}}Xy.addEventListener("click",Om);const Bw=new Set([" ","arrowup","arrowdown","arrowleft","arrowright"]),Bm=new Set(["shift","j"]);window.addEventListener("keydown",n=>{const t=n.key.toLowerCase();Bw.has(t)&&n.preventDefault(),t==="q"&&!n.repeat&&_m(),t==="f"&&!n.repeat&&cm(),t==="e"&&!n.repeat&&um(),t==="1"&&!n.repeat&&kn(u.ownedTools.ironAxe?"ironAxe":"axe"),t==="2"&&!n.repeat&&kn("backpack"),t==="3"&&!n.repeat&&kn("pickaxe"),t==="4"&&!n.repeat&&kn("torch"),t==="5"&&!n.repeat&&kn("ironSword"),t==="escape"&&!n.repeat&&(Fi(),Mr(!1),fi(!1)),Bm.has(t)&&(u.jumpHeld=!0,n.repeat||Ac()),u.keys.add(t)});window.addEventListener("keyup",n=>{const t=n.key.toLowerCase();u.keys.delete(t),Bm.has(t)&&(u.jumpHeld=!1)});window.addEventListener("blur",()=>{u.keys.clear(),u.jumpHeld=!1});up.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),cm()});Bu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),M1()});to.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),y1()});ku.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),um()});zu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),k1()});Hu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),w1()});Gu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),_m()});dp.addEventListener("pointerdown",n=>{n.preventDefault(),kn(u.ownedTools.ironAxe?"ironAxe":"axe")});Ci.addEventListener("pointerdown",n=>{n.preventDefault(),kn("backpack")});fp.addEventListener("pointerdown",n=>{n.preventDefault(),kn("pickaxe")});pp.addEventListener("pointerdown",n=>{n.preventDefault(),kn("torch")});mp.addEventListener("pointerdown",n=>{n.preventDefault(),kn("ironSword")});nS.addEventListener("pointerdown",n=>{n.preventDefault(),Fi()});su.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),I1()});Vu.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),B1()});tS.addEventListener("pointerdown",n=>{n.preventDefault(),fi(!1)});eS.addEventListener("pointerdown",n=>{n.preventDefault(),Cw()});const xf=new cp,Ml=new Pt,kw=.3,zw=new nn({color:16777215,side:qe,transparent:!0,opacity:.9,depthWrite:!1}),js=[];function yi(n){if(!n)return;const t=[];if(n.traverse(i=>{!i.isMesh||!i.geometry||i.userData.outlineShell||t.push(i)}),t.length===0)return;const e=[];for(const i of t){const r=new B(i.geometry,zw);r.scale.setScalar(1.05),r.renderOrder=3,r.userData.outlineShell=!0,i.add(r),e.push({node:i,shell:r})}js.push({shells:e,until:performance.now()+kw*1e3})}function Hw(){if(js.length===0)return;const n=performance.now();for(let t=js.length-1;t>=0;t-=1){const e=js[t];if(!(n<e.until)){for(const{node:i,shell:r}of e.shells)i.remove(r);js.splice(t,1)}}}function Gw(n){let t=n;for(;t;){const e=t.userData;if(e.itemRef)return{kind:"item",item:e.itemRef,mesh:t};if(e.rockRef)return{kind:"rock",rock:e.rockRef};if(e.treeRef)return{kind:"tree",tree:e.treeRef};if(e.enemyRef)return{kind:"enemy",enemy:e.enemyRef};if(e.saplingRef)return{kind:"sapling",sapling:e.saplingRef};if(e.berryBushRef)return{kind:"berry",bush:e.berryBushRef};if(e.benchRef)return{kind:"bench"};if(e.grinderRef)return{kind:"grinder"};if(e.campfireRef)return{kind:"campfire"};t=t.parent}return null}function Vw(n,t){if(Tc())return;const e=lp.getBoundingClientRect();Ml.x=(n-e.left)/e.width*2-1,Ml.y=-((t-e.top)/e.height)*2+1,xf.setFromCamera(Ml,pe);const i=xf.intersectObjects(ee.children,!0);for(const r of i){if(!r.object.isMesh||r.object.userData.tapIgnore)continue;const s=Gw(r.object);if(!s)break;if(s.kind==="enemy"){vf(s);return}if(s.kind==="campfire")return;Mu(),vf(s);return}Mu(),Xw()}function vf(n){var s;const t=Y.position.x,e=Y.position.z,i=(o,a)=>Math.hypot(t-o,e-a)<=Sa,r=()=>Dt("Too far");switch(n.kind){case"item":{const o=n.item;if(!i(o.x,o.z))return r();yi(o.mesh),lh(o);return}case"rock":{const o=n.rock;if(!i(o.x,o.z))return r();if(yi(o.group),!oh(u.equippedTool)){Dt("Use the Pickaxe");return}fm(o);return}case"tree":{const o=n.tree;if(!i(o.position.x,o.position.z))return r();if(yi(o),!rm(u.equippedTool)){Dt("Use the Axe");return}dm(o,((s=So[u.equippedTool])==null?void 0:s.treePower)??1);return}case"enemy":{const o=n.enemy;if(!i(o.position.x,o.position.z))return r();yi(o),Mu(o);return}case"sapling":{if(!i(n.sapling.x,n.sapling.z))return r();yi(n.sapling.mesh),Dt("The sapling is still growing");return}case"berry":{const o=n.bush;if(!i(o.x,o.z))return r();yi(o.mesh),qw(o);return}case"bench":{if(za()>Sa)return r();if(za()>e1){Dt("Move closer to the bench");return}yi(fe),P1();return}case"grinder":{if(hc()>Sa)return r();yi(we),Dt("Drag a log or iron and press Put in grinder");return}case"campfire":return}}const Ww=3;function Xw(){var o;if(Tc())return;const n=rm(u.equippedTool),t=oh(u.equippedTool);if(!n&&!t)return;const e=Math.sin(u.cameraYaw),i=Math.cos(u.cameraYaw);let r=null;const s=(a,c,l,h)=>{const d=c-Y.position.x,p=l-Y.position.z,g=Math.hypot(d,p);g<.001||g>Ww||(d*e+p*i)/g<.2||(!r||g<r.distance)&&(r={kind:a,ref:h,distance:g})};if(n)for(const a of Je)!a.userData.choppable||a.userData.falling||!a.visible||s("tree",a.position.x,a.position.z,a);if(t)for(const a of vr)a.broken||s("rock",a.x,a.z,a);r&&(r.kind==="tree"?dm(r.ref,((o=So[u.equippedTool])==null?void 0:o.treePower)??1):fm(r.ref))}function qw(n){const t=performance.now();if(t<(n.nextHarvest||0)){Dt("The bush needs a moment");return}if(n.nextHarvest=t+4500,Ht){Dt("Hands full");return}const e=Ni("berry",Y.position.x,Y.position.z,{startY:qt(Y.position.x,Y.position.z)+.5,velocityY:1.2,pickupDelay:0});lh(e)}function bc(n){u.jumpHeld=n,n&&Ac()}so.addEventListener("pointerdown",n=>{n.preventDefault(),so.setPointerCapture(n.pointerId),bc(!0)});so.addEventListener("pointerup",()=>bc(!1));so.addEventListener("pointercancel",()=>bc(!1));so.addEventListener("lostpointercapture",()=>bc(!1));ai.addEventListener("pointerdown",n=>{!u.started&&n.target===ai&&Om()});function Yw(n,t,e,i){ai.classList.remove("hidden"),ai.querySelector(".title").textContent=n,ai.querySelector(".subtitle").textContent=t,ai.querySelector(".hint").textContent=e,ai.querySelector("button").textContent=i,xo.classList.remove("visible"),ja.classList.remove("visible"),oo.classList.remove("visible"),fi(!1),Fi(),Mr(!1),u.equippedTool=null,u.equipTimer=0,wc(),te(),Wu.style.opacity="0"}function Mu(n=null){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.attackCooldown>0)return;const t=So[u.equippedTool];if(!["axe","ironAxe","ironSword"].includes(u.equippedTool)||!t)return;n?Y.rotation.y=Math.atan2(n.position.x-Y.position.x,n.position.z-Y.position.z):Y.rotation.y=u.cameraYaw,u.attackCooldown=t.cooldown,u.attackTimer=ac,hn.visible=!0,hn.scale.setScalar(.7),sc.intensity=1.8,RE();const e=new R(Math.sin(Y.rotation.y),0,Math.cos(Y.rotation.y));if(n){if(n.visible&&!n.userData.fading){const i=n.position.clone().sub(Y.position);i.y=0,i.length()<=Sa&&Mf(n,t,e)}return}for(const i of Yn){if(!i.visible||i.userData.fading)continue;const r=i.position.clone().sub(Y.position);r.y=0;const s=r.length();s>3||s<.01||(r.normalize(),!(e.dot(r)<.2)&&Mf(i,t,e))}}function Mf(n,t,e){const i=n.userData;i.health-=t.damage,i.hitTimer=.22,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.1,i.knockback.addScaledVector(e,4.2+t.damage*.6),Xm(),un.position.copy(n.position),un.position.y+=1.15,un.scale.setScalar(.8),un.material.opacity=.95,un.visible=!0,u.hitEffectTimer=.22,i.health<=0&&(i.health=0,i.dead=!0,i.attackCooldown=0,yh(n,4))}function yh(n,t){const e=n.userData;n.visible&&(e.fading=!0,e.fade=1,e.fadeRate=t,e.bodyMat.transparent=!0,e.eyeMat.transparent=!0)}function $w(n){!u.started||u.gameOver||u.falling||u.invuln>0||(u.health=Math.max(0,u.health-n),u.damageFlash=1,te(),u.health<=0&&km())}function km(){u.falling>0||(u.falling=2.4,u.health=0,u.attackTimer=0,hn.visible=!1,fi(!1),Fi(),ja.classList.add("visible"),CE(),te())}function Kw(){u.falling=0,u.health=100,u.hunger=Math.max(u.hunger,55),u.invuln=2,u.damageFlash=0,u.velocityY=0,u.grounded=!0,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,Y.position.set(0,qt(0,3.6),3.6),Y.rotation.y=0,Wn.rotation.set(0,0,0),Ln.rotation.set(0,0,0),ur.rotation.set(0,0,0),hr.rotation.set(0,0,0),ja.classList.remove("visible"),Ti(),u.cycleTime=Ji,u.nightActive=!0,zm(),te()}function zm(){if(u.nightActive=!0,u.night<=1){for(const e of Yn)e.visible=!1,e.position.set(0,-40,0);return}const n=Math.min(u.night+1+(u.fireLevel-1)*2,em),t=Math.min(In-8,30+(u.fireLevel-1)*16);for(let e=0;e<Yn.length;e+=1){const i=Yn[e];if(e>=n){i.visible=!1,i.position.set(0,-40,0);continue}const r=e/n*Math.PI*2+(Math.random()-.5)*.5,s=Math.max(18,t-5+Math.random()*8),o=Math.cos(r)*s,a=Math.sin(r)*s;xm(i),i.position.set(o,qt(o,a),a),i.rotation.y=Math.atan2(-o,-a);const c=i.userData;c.dead=!1,c.health=Math.min(8,2+Math.floor((u.night-1)/12)),c.maxHealth=c.health,c.speed=Math.min(3.5,1.15+u.night*.045+Math.random()*.22),c.damage=Math.min(22,6+u.night*.3),c.targetCamp=e%4===0,c.circleDir=Math.random()<.5?1:-1,c.phase=Math.random()*Math.PI*2}_n.visible=!0,_n.position.copy(Y.position),_n.position.y=1.4,_n.intensity=2.6}function Zw(){const n=Y.position.x-Xt.position.x,t=Y.position.z-Xt.position.z,e=im();return n*n+t*t<e*e?1:0}const Aa=6,Sh=.32,jw=7.4,Jw=17.5;function Ac(){!u.started||u.gameOver||u.falling||!u.grounded||u.craftOpen||u.settingsOpen||u.inventoryOpen||(u.velocityY=jw,u.grounded=!1,DE())}function yf(n){const t=qt(Y.position.x,Y.position.z);if(!u.started||u.gameOver){u.velocityY=0,u.grounded=!0,Y.position.y=t;return}if(u.grounded){Y.position.y=t,u.jumpHeld&&Ac();return}const e=u.velocityY;u.velocityY-=Jw*n,Y.position.y+=u.velocityY*n,Y.position.y<=t&&(Y.position.y=t,u.velocityY=0,u.grounded=!0,e<-2.4&&qm())}function Qw(){for(const n of Je){if(!n.visible||n.userData.falling)continue;const t=Y.position.x-n.position.x,e=Y.position.z-n.position.z,i=n.userData.scale*.3+Sh,r=t*t+e*e;if(r>=i*i||r<1e-4)continue;const s=Math.sqrt(r),o=i-s;Y.position.x+=t/s*o,Y.position.z+=e/s*o}}function Hm(n,t=Sh){for(const e of bs){if(e.rock&&e.rock.broken)continue;const i=n.position.x-e.x,r=n.position.z-e.z,s=e.radius+t,o=i*i+r*r;if(o>=s*s)continue;if(o<1e-4){n.position.x=e.x+s;continue}const a=Math.sqrt(o),c=s-a;n.position.x+=i/a*c,n.position.z+=r/a*c}for(const e of co){const i=n.position.x-e.x,r=n.position.z-e.z,s=Math.cos(e.rotation),o=Math.sin(e.rotation);let a=i*s-r*o,c=i*o+r*s;const l=e.width/2+t,h=e.depth/2+t;if(Math.abs(a)>=l||Math.abs(c)>=h)continue;const d=l-Math.abs(a),p=h-Math.abs(c);d<p?a=Math.sign(a||1)*l:c=Math.sign(c||1)*h,n.position.x=e.x+a*s+c*o,n.position.z=e.z-a*o+c*s}}function tE(n,t,e){if(u.grounded)for(const i of nh){if(i.rock&&i.rock.broken)continue;const r=n-i.x,s=t-i.z,o=i.radius+Sh+.12;if(r*r+s*s>o*o)continue;const a=i.x-n,c=i.z-t;if(!(e.x*a+e.z*c<=0)&&i.top-Y.position.y<=.95){Ac();return}}}function eE(n){if(!u.started||u.gameOver||u.falling)return;const t=u.keys,e=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),i=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),r=$t(u.joystick.x+e,-1,1),s=$t(-u.joystick.y+i,-1,1);if(Math.abs(r)+Math.abs(s)<.02){u.moveSpeed=0;return}const o=new R(Math.sin(u.cameraYaw),0,Math.cos(u.cameraYaw)),a=new R(-Math.cos(u.cameraYaw),0,Math.sin(u.cameraYaw)),c=new R;c.addScaledVector(o,s),c.addScaledVector(a,r),c.normalize(),u.moveSpeed=Aa;const l=Math.atan2(c.x,c.z),h=1-Math.exp(-15*n);Y.rotation.y=ww(Y.rotation.y,l,h);const d=Y.position.x+c.x*n*Aa,p=Y.position.z+c.z*n*Aa;tE(d,p,c),Y.position.x=d,Y.position.z=p,Qw(),Hm(Y),yc(Y.position,.9)}function Sf(n){const t=$t(n,0,1);if(t<.35){const i=t/.35;return-1.05*(i*i*(3-2*i))}if(t<.72){const i=(t-.35)/.37;return-1.05+1.85*(i*i*(3-2*i))}const e=(t-.72)/.28;return .8-.8*(e*e*(3-2*e))}function nE(n){u.idleTime+=n;const t=l1(u.equippedTool);let e=0,i=0,r=0,s=0,o=0,a=0;if(!u.grounded)u.velocityY>.25?(e=-2.55,i=-2.55,r=-.18,s=.18):(e=-.2,i=-.2,r=-1.35,s=1.35),t&&(i=$i+(u.velocityY>.25?-.12:.08),s=0),o=.12,a=-.12;else if(u.attackTimer>0){const h=1-u.attackTimer/ac,d=Math.sin($t(h,0,1)*Math.PI);e=.22*d,t?i=$i+Sf(h):(i=-.45-2.25*d,s=.34*d),o=.08*d,a=-.08*d}else if(u.chopTimer>0){const h=1-u.chopTimer/.3,d=Math.sin($t(h,0,1)*Math.PI);e=-.4*d,t?i=$i+Sf(h):(i=-2.2*d,s=.12*d)}else if(u.equipTimer>0){const h=1-u.equipTimer/cc,d=Math.sin($t(h,0,1)*Math.PI);t?i=$i-.2*d:(i=-1.15*d,s=.22*d),e=.18*d}else if(u.moveSpeed>.1){u.walkPhase+=n*(5+u.moveSpeed);const h=Math.sin(u.walkPhase)*.72;e=h,i=t?$i-h*yS:-h,o=-h,a=h}else{const h=Math.sin(u.idleTime*1.9)*.05;e=h,t?i=$i-h*.4:i=-h}const c=1-Math.exp(-14*n);Wn.rotation.x+=(e-Wn.rotation.x)*c,Ln.rotation.x+=(i-Ln.rotation.x)*c,Wn.rotation.z+=(r-Wn.rotation.z)*c,Ln.rotation.z+=(s-Ln.rotation.z)*c,ur.rotation.x+=(o-ur.rotation.x)*c,hr.rotation.x+=(a-hr.rotation.x)*c;const l=u.grounded&&u.moveSpeed>.1?Math.abs(Math.sin(u.walkPhase))*.02:0;vn.position.y+=(.01+l-vn.position.y)*c}function iE(n){if(!u.started||u.gameOver)return;const t=!u.fireOut;for(const e of Yn){const i=e.userData;if(!e.visible)continue;if(i.fading){i.fade=Math.max(0,i.fade-n*(i.fadeRate||1));const I=i.fade;i.bodyMat.opacity=I,i.eyeMat.opacity=I,e.scale.setScalar(.4+I*.6),I<=0&&(e.visible=!1,i.fading=!1,i.dead=!0,e.position.set(0,-40,0));continue}if(u.falling>0)continue;i.hitTimer>0&&(i.hitTimer-=n,i.hitTimer<=0&&(i.bodyMat.emissive.setHex(0),i.bodyMat.emissiveIntensity=1)),i.knockback.lengthSq()>4e-4&&(e.position.addScaledVector(i.knockback,n),i.knockback.multiplyScalar(Math.exp(-9*n)));let r=!1;i.stunTimer>0&&(i.stunTimer=Math.max(0,i.stunTimer-n),r=!0);const s=Math.hypot(Y.position.x-e.position.x,Y.position.z-e.position.z);let o=Y.position.x,a=Y.position.z;i.targetCamp&&s>10&&!u.fireOut&&(o=Xt.position.x,a=Xt.position.z);let c=o-e.position.x,l=a-e.position.z;const h=Math.hypot(c,l);let d=0,p=0,g=!1;if(h>.35&&!r&&(d=c/h*i.speed*n,p=l/h*i.speed*n,g=!0),t){const I=e.position.x-Xt.position.x,b=e.position.z-Xt.position.z,A=Math.hypot(I,b)||1,D=I/A,E=b/A;A<Xi()+1.2&&(d+=-E*i.circleDir*i.speed*n*.5,p+=D*i.circleDir*i.speed*n*.5)}let _=e.position.x+d,x=e.position.z+p;if(t){const I=e.position.x-Xt.position.x,b=e.position.z-Xt.position.z,A=Math.hypot(I,b)||1;A<Xi()-.05&&(_=Xt.position.x+I/A*Xi(),x=Xt.position.z+b/A*Xi());const D=_-Xt.position.x,E=x-Xt.position.z;if((Math.hypot(D,E)||1)<Xi()){const P=e.position.x-Xt.position.x,k=e.position.z-Xt.position.z,O=Math.hypot(P,k)||1;_=Xt.position.x+P/O*Xi(),x=Xt.position.z+k/O*Xi()}}e.position.x=_,e.position.z=x,Hm(e,.36),yc(e.position,1.2),e.position.y=qt(e.position.x,e.position.z);const m=o-e.position.x,f=a-e.position.z;Math.hypot(m,f)>.01&&(e.rotation.y=Math.atan2(m,f));const y=g?.58:.1;i.phase+=n*(3.4+i.speed*1.5)*(g?1:.3);const S=Math.sin(i.phase);i.legs[0].rotation.x=S*y,i.legs[1].rotation.x=-S*y,i.arms[0].rotation.x=-S*y*.8,i.arms[1].rotation.x=S*y*.8,i.bodyGroup.position.y=Math.abs(S)*.035,i.attackCooldown=Math.max(0,i.attackCooldown-n);const T=Math.hypot(Y.position.x-e.position.x,Y.position.z-e.position.z);!r&&T<1.45&&Math.abs(Y.position.y-e.position.y)<2.2&&i.attackCooldown<=0&&u.invuln<=0&&($w(i.damage),i.attackCooldown=1.05)}}function rE(n){!u.started||u.gameOver||u.falling||(u.hunger=Math.max(0,u.hunger-n*o1),u.hunger<=0?(u.starveTimer+=n,u.starveTimer>=1&&(u.starveTimer-=1,u.health=Math.max(0,u.health-2),u.damageFlash=Math.max(u.damageFlash,.45),te(),u.health<=0&&km())):u.starveTimer=0)}function sE(n){if(u.started&&!u.gameOver&&!u.fireOut){const d=(n1[u.fireLevel]||1)/60;u.fireProgress=Math.max(0,u.fireProgress-d*n),u.fireProgress<=0&&(u.fireProgress=0,u.fireOut=!0,u.fireFlare=0,u.fireBarMessageTimer=0,sr=!0,xo.classList.add("visible"),Dt("The fire is out!"),EE())}u.fireFlare=Math.max(0,u.fireFlare-n*1.6),J1(n);const t=!u.fireOut,e=$t(u.fireProgress/100,0,1),i=u.started&&!u.gameOver&&!u.fireOut&&Zw()>0;u.nearFire=i,i&&!u.falling&&(u.health=$t(u.health+n*3,0,100));const r=1-u.daylight;u.started&&u.fireOut&&r>.5?u.fireDarken=Math.min(1,u.fireDarken+n*.045):u.fireDarken=Math.max(0,u.fireDarken-n*.6),_n.visible=_n.visible&&_n.intensity>.1,_n.visible&&(_n.intensity*=.96);const s=performance.now()*.001,o=.85+Math.sin(s*17.3)*.12+Math.sin(s*29.7+.7)*.08,a=1-Math.exp(-7*n);u.fireGrow=Math.min(1,u.fireGrow+a*1.4);const c=u.fireLevel===1?.7:.56,l=c+u.fireGrow*(1-c);Qe.scale.setScalar(l),gn.visible=t,Rn.visible=t,qn.visible=t,_c.visible=t;const h=u.fireEverLit?.58+Math.sin(s*3)*.12:.02;if(Mo.material.emissiveIntensity=t?.25+e*.55:h,Oe&&(Oe.visible=t&&u.started,Oe.material&&(Oe.material.opacity=t?.2+Math.sin(s*1.6)*.035:0)),t){const d=Qp[u.fireLevel]||1,p=.42+d*.24,g=Math.sin(s*9)*.06,_=u.fireFlare,x=.82+u.fireLevel*.1;gn.scale.setScalar(((.7+e*.35)*(1+Math.sin(s*12)*.08)+_*.4)*x),gn.position.y=.42+Math.sin(s*6)*.04,gn.rotation.y+=n*2.4;const m=d/1.5*(.95+Math.sin(s*8.5)*.08+_*.35);Rn.scale.set(p*(.92+Math.sin(s*7.7)*.06),m,p*(.92+Math.cos(s*7.1)*.06)),Rn.position.y=.2+d*.5+Math.sin(s*8.5)*.05,Rn.rotation.y+=n*1.9,Rn.rotation.z=g;const f=d/1.5*(.88+Math.sin(s*14)*.09+_*.3);qn.scale.set(p*.5,f,p*.5),qn.position.y=.18+d*.44+Math.sin(s*10+1)*.04,qn.rotation.z=-g*.8,as.intensity=(.7+d*.72+e*.7)*o+_*4,as.distance=8+d*4,cs.intensity=(.28+d*.28+e*.45)*o+_*2.2,cs.distance=12+d*3.6,gu.size=.055+(u.fireLevel-1)*.01,gu.opacity=.5+e*.28+Math.sin(s*13)*.1,W1(n,$t(.2+e,0,1),u.fireLevel),u.fireLevel>=5&&wi.forEach((y,S)=>{const T=(s*.3+S/wi.length)%1;y.position.set(Math.sin(s*.8+S)*.12,1.7+T*4.2,Math.cos(s*.7+S)*.12),y.scale.setScalar(.9+T*2.2),y.material.opacity=.11*(1-T)})}else as.intensity=0,cs.intensity=0,wo.setDrawRange(0,0),wi.forEach(d=>{d.material.opacity=0});if(t&&u.fireLevel<5)for(let d=0;d<wi.length;d+=1){const p=wi[d],g=(s*.42+d/wi.length)%1;p.position.set(Math.sin(s*1.4+d)*.14,1.5+g*1.8,Math.cos(s*1.2+d)*.12),p.scale.setScalar(.6+g*1.05),p.material.opacity=.09*(1-g)}if(u.started&&!u.gameOver&&u.health>0){const d=.48+Math.sin(s*14)*.2;sc.intensity=d}}const oE=new Et(7314084),aE=new Et(133647),cE=new Et(8890789),lE=new Et(465186),uE=new Et(14676479),hE=new Et(9417960),dE=new Et(16773840),fE=new Et(11060991),pE=new Et(4851718),ua=new Et,wf=new Et;function Gm(){const n=1-u.daylight;ua.copy(oE).lerp(aE,n),u.damageFlash>0&&ua.lerp(pE,u.damageFlash*.34),ze.background.copy(ua),Mh.material.color.copy(ua),wf.copy(cE).lerp(lE,n),ze.fog.color.copy(wf),ze.fog.density=.018+n*.04,au.color.copy(uE).lerp(hE,n),au.intensity=1-n*.45,Un.color.copy(dE).lerp(fE,n),Un.intensity=1.25-n*.55,Ny.classList.toggle("night",n>.5);const t=u.started&&u.fireOut?.1+u.fireDarken*.4:0;Wu.style.opacity=String($t(n*.3+t,0,.9))}function mE(n){const t=u.cycleTime;u.cycleTime+=n;let e=!1;u.cycleTime>=Xr&&(u.cycleTime-=Xr,e=!0);const i=u.cycleTime;if(i<Ji-gl?u.daylight=1:i<Ji?u.daylight=1-xu((i-(Ji-gl))/gl):i<Xr-Xs?u.daylight=0:u.daylight=xu((i-(Xr-Xs))/Xs),t<Ji&&i>=Ji&&!u.nightActive&&zm(),t<Xr-Xs&&i>=Xr-Xs)for(const r of Yn)r.visible&&!r.userData.fading&&!r.userData.dead&&yh(r,.3);if(e){if(u.nightActive=!1,ch(),AE(),Dt("You survived the night"),u.night>=u.maxNight){u.victory=!0,u.started=!1,u.gameOver=!0,Yw("You Survived","99 nights survived. The camp still burns.","Tap to begin a new run.","Play Again");return}u.night+=1,te()}}const yl=new cp,Pe=new R,Sl=new R,ii=new R,Ef=new R,ha=new R,Tf=new R,gE=new R,qs=new R,ri=[];function _E(n=.016){const t=u.cameraYaw,e=u.cameraPitch,i=Math.cos(e),r=Math.sin(e);Pe.set(Y.position.x,Y.position.y+pS,Y.position.z),Sl.set(Math.sin(t)*i,r,Math.cos(t)*i);const s=u.cameraDistance||Xu;ii.copy(Pe).addScaledVector(Sl,-s),ii.y+=mS,qs.copy(ii).sub(Pe);const o=qs.length();o>1e-4&&qs.normalize(),ri.length=0;const a=s+3.2;for(const f of Je){if(!f.visible)continue;const y=f.position.x-Pe.x,S=f.position.z-Pe.z;y*y+S*S<a*a&&ri.push(f.userData.cameraMeshes[0],f.userData.cameraMeshes[1])}for(const f of vr)f.broken||Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.group);for(const f of nh)Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.mesh);for(const f of co)Math.hypot(f.x-Pe.x,f.z-Pe.z)<a&&ri.push(f.group);Math.hypot(fe.position.x-Pe.x,fe.position.z-Pe.z)<a&&ri.push(fe),Math.hypot(we.position.x-Pe.x,we.position.z-Pe.z)<a&&ri.push(we);let c=o;if(ri.length>0){yl.set(Pe,qs),yl.far=o;const f=yl.intersectObjects(ri,!0);f.length>0&&(c=Math.max(.85,f[0].distance-.24))}ii.copy(Pe).addScaledVector(qs,c);const l=qt(ii.x,ii.z)+.35;ii.y<l&&(ii.y=l),Ef.copy(Pe);const h=u.firstPerson?1:0,d=1-Math.exp(-13*n);u.viewBlend+=(h-u.viewBlend)*d,Math.abs(u.viewBlend-h)<.0015&&(u.viewBlend=h);const p=xu($t(u.viewBlend,0,1));ha.lerpVectors(ii,Ef,p);const g=c<o-.01;if(!u.cameraInitialized)pe.position.copy(ha),u.cameraInitialized=!0;else if(p>.92)pe.position.copy(ha);else{const f=g?Math.min(1,d*3.4):Math.min(1,d*.95);pe.position.lerp(ha,Math.max(.12,f))}const _=qt(pe.position.x,pe.position.z)+.28;if(pe.position.y<_&&(pe.position.y=_),yc(pe.position,.45),Tf.copy(Pe).lerp(gE.copy(Pe).addScaledVector(Sl,10),p),pe.lookAt(Tf),Ss>0){const f=performance.now()*.001,y=Ss*.13;pe.position.x+=Math.sin(f*43.7)*y,pe.position.y+=Math.sin(f*51.3+1.7)*y*.6,pe.position.z+=Math.cos(f*47.1+.4)*y}const x=qd+(gS-qd)*p;Math.abs(pe.fov-x)>.01&&(pe.fov=x,pe.updateProjectionMatrix());const m=p>.5;vn.visible=!m,yo.visible=m,Lw(m),m&&(hn.visible=!1)}const da=new R;function yu(n,t){if(da.copy(t).project(pe),da.z>1)return!1;const e=(da.x*.5+.5)*window.innerWidth,i=(-da.y*.5+.5)*window.innerHeight;return n.style.left=`${e}px`,n.style.top=`${i}px`,!0}const Kr=new R;function xE(){const n=u.started&&!u.gameOver&&!u.portrait,t=n&&!!Ht&&Ht.popping<=0;if(hl.classList.toggle("visible",t),t){const i=Ht.type;Hy.textContent=rh[i]||Rs[i]||"Item";const r=c1[i]||0;if(ra.dataset.count!==String(r)){ra.dataset.count=String(r),ra.replaceChildren();for(let s=0;s<r;s+=1){const o=document.createElement("span");o.className="drag-flame",ra.appendChild(o)}}Kr.copy(Ht.mesh.position),Kr.y+=.62,yu(hl,Kr)||hl.classList.remove("visible")}const e=n&&fc()&&!u.firstPerson;Hn.classList.toggle("visible",e),e&&(Hn.textContent=`${Ha()}/${u.backpackCapacity}`,Kr.copy(Y.position),Kr.y+=2.4,yu(Hn,Kr)||Hn.classList.remove("visible"))}function vE(n){u.startHintTimer>0&&(u.startHintTimer=Math.max(0,u.startHintTimer-n),u.startHintTimer<=0&&hp.classList.remove("visible")),pe.updateMatrixWorld();const t=u.started&&!u.gameOver&&!u.portrait&&!u.craftOpen&&za()<=jp;if(Ma.classList.toggle("hidden",!t),t){const e=new R(fe.position.x,fe.position.y+1.75,fe.position.z);yu(Ma,e)||Ma.classList.add("hidden")}xE()}const nt={ctx:null,master:null,noiseBuffer:null,started:!1,volume:.7,muted:!1,windGain:null,cricketGain:null,fireGain:null,stepTimer:.22,fireCrackleTimer:.2,birdTimer:2.5,growlTimer:1.8,monsterStepTimer:.5,heartbeatTimer:0};function Cc(){return!!nt.ctx&&nt.started}function To(){return nt.ctx?nt.ctx.currentTime:0}function ME(n){const t=Math.floor(n.sampleRate*2),e=n.createBuffer(1,t,n.sampleRate),i=e.getChannelData(0);let r=0;for(let s=0;s<t;s+=1){const o=Math.random()*2-1;r=r*.72+o*.28,i[s]=r*1.15}return e}function wh(){const n=window.AudioContext||window.webkitAudioContext;if(n)try{if(!nt.ctx){const t=new n;nt.ctx=t,nt.master=t.createGain(),nt.master.gain.value=nt.muted?0:nt.volume,nt.master.connect(t.destination),nt.noiseBuffer=ME(t);const e=t.createBufferSource();e.buffer=nt.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=460,i.Q.value=.55,nt.windGain=t.createGain(),nt.windGain.gain.value=.012,e.connect(i).connect(nt.windGain).connect(nt.master),e.start();const r=t.createBufferSource();r.buffer=nt.noiseBuffer,r.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=4300,s.Q.value=7,nt.cricketGain=t.createGain(),nt.cricketGain.gain.value=1e-4;const o=t.createOscillator();o.type="sine",o.frequency.value=5.1;const a=t.createGain();a.gain.value=.006,o.connect(a).connect(nt.cricketGain.gain),r.connect(s).connect(nt.cricketGain).connect(nt.master),r.start(),o.start();const c=t.createBufferSource();c.buffer=nt.noiseBuffer,c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=760,l.Q.value=.6,nt.fireGain=t.createGain(),nt.fireGain.gain.value=1e-4,c.connect(l).connect(nt.fireGain).connect(nt.master),c.start()}nt.started=!0,nt.ctx.state==="suspended"&&nt.ctx.resume()}catch{nt.started=!1}}function Jt(n,t,e,i="sine",r=.04,s=0,o=.008){if(!Cc())return;const a=nt.ctx,c=To()+Math.max(0,s),l=a.createOscillator(),h=a.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(20,n),c),t&&t!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+e),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(r,c+o),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h).connect(nt.master),l.start(c),l.stop(c+e+.04)}function Ue(n,t,e="lowpass",i=900,r=0,s=.8,o=0){if(!Cc())return;const a=nt.ctx,c=To()+Math.max(0,o),l=a.createBufferSource();l.buffer=nt.noiseBuffer;const h=a.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(Math.max(40,i),c),r&&h.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+n),h.Q.value=s;const d=a.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(t,c+.006),d.gain.exponentialRampToValueAtTime(1e-4,c+n),l.connect(h).connect(d).connect(nt.master),l.start(c,Math.random()*1.2,n+.04)}function Rc(){Jt(520,760,.08,"sine",.045),Jt(880,980,.06,"triangle",.024,.055)}function Ls(){Ue(.035,.025,"highpass",1900,0,.8),Jt(300,220,.055,"square",.018)}function yE(){Jt(1046.5,1046.5,.7,"sine",.055),Jt(1568,1568,.55,"sine",.028,.02),Jt(2093,2093,.4,"triangle",.014,.03)}function Vm(){Ue(.34,.065,"lowpass",520,150,.7),Jt(150,82,.32,"sawtooth",.03),Jt(76,52,.28,"square",.022,.03)}function SE(){Jt(240,150,.16,"square",.03)}function wE(){[392,523.25,659.25,783.99,1046.5].forEach((t,e)=>{Jt(t,t,.5,"triangle",.042,e*.09),Jt(t*2,t*2,.3,"sine",.012,e*.09+.01)})}function EE(){Jt(320,180,.5,"sine",.04),Jt(180,90,.7,"triangle",.03,.08),Ue(.5,.03,"lowpass",500,120)}function TE(){Ue(.65,.075,"bandpass",700,220,.9),Jt(160,520,.42,"sawtooth",.032),Jt(392,784,.34,"triangle",.025,.05)}function bE(){Jt(58,29,1.5,"sine",.075,.02,.03),Jt(92,42,1.1,"triangle",.035,.12,.04),Ue(1.35,.085,"lowpass",190,46,.8)}function AE(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{Jt(t,t,.62,"triangle",.045,e*.1),Jt(t*1.5,t*1.5,.34,"sine",.012,e*.1+.01)})}function CE(){Jt(330,120,1.1,"sawtooth",.045,0,.02),Jt(220,82,1.3,"sine",.05,.04,.02),Ue(.9,.025,"lowpass",420,110)}function RE(){Ue(.18,.055,"bandpass",950,260,1.1)}function PE(){Jt(132,52,.18,"sine",.11),Ue(.14,.055,"lowpass",320,130)}function LE(){Ue(.85,.09,"lowpass",950,120,.7),Jt(90,38,.63,"sine",.08,.04),Ue(.35,.04,"bandpass",1800,700,1.4,.08)}function Wm(){Jt(1850,1450,.075,"triangle",.038),Jt(2650,2100,.055,"sine",.02,.012),Ue(.045,.025,"highpass",2400,0,.9)}function IE(){Wm(),Ue(.38,.08,"lowpass",720,140,.8),Jt(190,60,.34,"sine",.06,.02)}function Xm(){Jt(170,70,.14,"sine",.075),Ue(.1,.045,"bandpass",680,250,.9)}function DE(){Jt(220,360,.15,"sine",.03),Ue(.11,.022,"highpass",900,0)}function qm(){Jt(115,52,.17,"sine",.075),Ue(.12,.04,"lowpass",360,130)}function UE(){const n=72+Math.random()*28;Jt(n,n*.7,.075,"sine",.028),Ue(.075,.022,"lowpass",480+Math.random()*180,0,.7)}function NE(n,t=1){const e=(.008+n*.03)*(1+(t-1)*.3);Ue(.025+Math.random()*.045,e,"highpass",900+Math.random()*1400,0,.9)}function FE(){const n=2100+Math.random()*900,t=2+Math.floor(Math.random()*2);for(let e=0;e<t;e+=1)Jt(n+Math.random()*250,n+700+Math.random()*500,.085,"sine",.018,e*.11,.012)}function OE(n){if(!Cc())return;const t=nt.ctx,e=To(),i=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(76,e),i.frequency.exponentialRampToValueAtTime(44,e+.75),r.type="lowpass",r.frequency.value=190,r.Q.value=1.2,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.012+n*.045,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+.78),i.connect(r).connect(s).connect(nt.master),i.start(e),i.stop(e+.82),Ue(.5,.008+n*.018,"lowpass",260,90)}function BE(n){const t=.01+n*.045;Jt(62,34,.12,"sine",t),Ue(.1,t*.55,"lowpass",250,100)}function kE(n){const t=.018+n*.055;Jt(58,44,.1,"sine",t),Jt(52,38,.12,"sine",t*.7,.16)}function Ym(){ya.classList.toggle("muted",nt.muted),ya.setAttribute("aria-pressed",String(nt.muted)),ya.setAttribute("aria-label",nt.muted?"Unmute sound":"Mute sound")}function $m(){if(!nt.master)return;const n=To(),t=nt.muted?0:nt.volume;nt.master.gain.cancelScheduledValues(n),nt.master.gain.setValueAtTime(nt.master.gain.value,n),nt.master.gain.linearRampToValueAtTime(t,n+.06)}function Km(n){nt.volume=$t(n,0,1),$m(),uS.textContent=`${Math.round(nt.volume*100)}%`}function zE(){wh(),nt.muted=!nt.muted,$m(),Ym(),Ls()}function Mr(n){u.settingsOpen=n,cS.classList.toggle("hidden",!n),_p.setAttribute("aria-expanded",String(n)),n&&(Fi(),fi(!1)),Ps()}function HE(n){if(!Cc())return;const t=To(),e=1-u.daylight,i=u.started&&!u.gameOver&&!u.paused,r=!u.started||u.gameOver||u.paused;nt.windGain.gain.setTargetAtTime(r?.007:.007+u.daylight*.03+e*.012,t,.7),nt.cricketGain.gain.setTargetAtTime(r?1e-4:e*.017,t,.85);const s=uc(),o=$t(1-s/18,0,1),a=u.started&&!u.fireOut&&!u.gameOver,c=$t(u.fireProgress/100,0,1),l=1+(u.fireLevel-1)*.32;nt.fireGain.gain.setTargetAtTime(a?(.004+o*.042)*(.45+c*.55)*l:1e-4,t,.35),a&&!u.paused&&o>.04&&(nt.fireCrackleTimer-=n,nt.fireCrackleTimer<=0&&(NE(o,u.fireLevel),nt.fireCrackleTimer=.13+Math.random()*.42+(1-o)*.55-(u.fireLevel-1)*.035)),i&&u.daylight>.55?(nt.birdTimer-=n*(.7+u.daylight*.7),nt.birdTimer<=0&&(FE(),nt.birdTimer=3+Math.random()*6)):nt.birdTimer=Math.max(nt.birdTimer,1.5),i&&u.grounded&&u.moveSpeed>.1&&u.falling<=0?(nt.stepTimer-=n*(.8+u.moveSpeed/Aa*.8),nt.stepTimer<=0&&(UE(),nt.stepTimer=.31)):nt.stepTimer=Math.min(nt.stepTimer,.16);let h=null,d=1/0;if(i)for(const p of Yn){if(!p.visible||p.userData.fading)continue;const g=Math.hypot(Y.position.x-p.position.x,Y.position.z-p.position.z);g<d&&(d=g,h=p)}if(h&&d<21){const p=$t(1-d/21,0,1);nt.growlTimer-=n*(1+p*2.2),nt.growlTimer<=0&&(OE(p),nt.growlTimer=2.8+Math.random()*4.5),nt.monsterStepTimer-=n*(1+p*.8),nt.monsterStepTimer<=0&&(BE(p),nt.monsterStepTimer=.45+Math.random()*.35),d<15?(nt.heartbeatTimer-=n,nt.heartbeatTimer<=0&&(kE(p),nt.heartbeatTimer=1.15-p*.72+Math.random()*.08)):nt.heartbeatTimer=0}else nt.growlTimer=Math.max(nt.growlTimer,1.4),nt.monsterStepTimer=Math.max(nt.monsterStepTimer,.4),nt.heartbeatTimer=0}window.addEventListener("pointerdown",wh,{capture:!0,passive:!0});window.addEventListener("keydown",wh,{capture:!0});ya.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),zE()});Ks.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Sw()});_p.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Mr(!u.settingsOpen)});lS.addEventListener("pointerdown",n=>{n.preventDefault(),Mr(!1)});Xd.addEventListener("input",()=>{Km(Number(Xd.value)/100)});Km(nt.volume);Ym();Im(u.firstPerson,!1);function Zm(){requestAnimationFrame(Zm);const n=hS.getDelta(),t=Math.min(n,.033),e=Fm();if(e!==u.portrait&&(u.portrait=e,document.body.classList.toggle("portrait",e),e&&(Ec(),pr.clear(),u.look.active=!1,u.pinchDistance=0,u.keys.clear(),u.jumpHeld=!1)),u.paused=e,!e){if(u.attackCooldown=Math.max(0,u.attackCooldown-t),u.attackTimer=Math.max(0,u.attackTimer-t),u.chopTimer=Math.max(0,u.chopTimer-t),u.swingCooldown=Math.max(0,u.swingCooldown-t),u.plantCooldown=Math.max(0,u.plantCooldown-t),u.dropCooldown=Math.max(0,u.dropCooldown-t),u.invuln=Math.max(0,u.invuln-t),Pw(t),hn.visible=u.attackTimer>0,u.attackTimer>0){const i=1-u.attackTimer/ac;hn.scale.setScalar(.7+i*.6),hn.material.opacity=.8*(1-i),hn.rotation.z=i*.55}u.hitEffectTimer>0?(u.hitEffectTimer=Math.max(0,u.hitEffectTimer-t),un.visible=!0,un.scale.setScalar(.8+(1-u.hitEffectTimer/.22)*1.5),un.material.opacity=u.hitEffectTimer/.22,un.rotation.y+=t*10):un.visible=!1,ts>0&&(ts=Math.max(0,ts-n),ts<=0&&oo.classList.remove("visible")),Zs>0&&(Zs=Math.max(0,Zs-n),Zs<=0&&ru.classList.remove("visible")),u.started&&!u.gameOver?(mE(t),u.falling>0?(u.falling=Math.max(0,u.falling-t),u.falling<=0&&Kw()):eE(t),iw(t),gw(),yc(Y.position),yf(t),iE(t),rE(t),rf(),lf(t),cf(t),G1(t),sE(t),z1(t),O1(t),T1(t),te()):(u.moveSpeed=0,yf(t),rf(),lf(t),cf(t),te()),nE(t),Iw(t),Hw(),u.damageFlash>0&&(u.damageFlash=Math.max(0,u.damageFlash-t*1.5))}u.victory&&!u.started&&ai.classList.remove("hidden"),Z1(t),HE(t),Gm(),_E(t),Mh.position.copy(pe.position),vE(t),h1(t),Ts.render(ze,pe)}window.addEventListener("resize",()=>{pe.aspect=window.innerWidth/window.innerHeight,pe.updateProjectionMatrix(),Ts.setSize(window.innerWidth,window.innerHeight)});ch();am();vh(1);Oe&&(Oe.visible=!1);gs();te();Gm();Zm();
