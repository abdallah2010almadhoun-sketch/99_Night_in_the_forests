(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="167",_p=0,mu=1,vp=2,td=1,ed=2,Yn=3,_i=0,ze=1,An=2,pi=0,Rr=1,Vi=2,gu=3,_u=4,xp=5,Ni=100,Mp=101,yp=102,Sp=103,wp=104,Ep=200,Tp=201,bp=202,Ap=203,_c=204,vc=205,Rp=206,Cp=207,Pp=208,Lp=209,Ip=210,Dp=211,Up=212,Np=213,Fp=214,Op=0,Bp=1,kp=2,Lo=3,zp=4,Hp=5,Gp=6,Vp=7,nd=0,Wp=1,Xp=2,mi=0,qp=1,Yp=2,$p=3,Kp=4,jp=5,Zp=6,Jp=7,id=300,Ir=301,Dr=302,xc=303,Mc=304,Xo=306,yc=1e3,Bi=1001,Sc=1002,hn=1003,Qp=1004,Bs=1005,xn=1006,Ca=1007,ki=1008,ei=1009,rd=1010,sd=1011,_s=1012,fl=1013,Wi=1014,jn=1015,Ts=1016,pl=1017,ml=1018,Ur=1020,od=35902,ad=1021,cd=1022,Mn=1023,ld=1024,ud=1025,Cr=1026,Nr=1027,hd=1028,gl=1029,dd=1030,_l=1031,vl=1033,Mo=33776,yo=33777,So=33778,wo=33779,wc=35840,Ec=35841,Tc=35842,bc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,Ic=37810,Dc=37811,Uc=37812,Nc=37813,Fc=37814,Oc=37815,Bc=37816,kc=37817,zc=37818,Hc=37819,Gc=37820,Vc=37821,Eo=36492,Wc=36494,Xc=36495,fd=36283,qc=36284,Yc=36285,$c=36286,tm=3200,em=3201,pd=0,nm=1,di="",ln="srgb",xi="srgb-linear",xl="display-p3",qo="display-p3-linear",Io="linear",he="srgb",Do="rec709",Uo="p3",ir=7680,vu=519,im=512,rm=513,sm=514,md=515,om=516,am=517,cm=518,lm=519,xu=35044,Mu="300 es",Zn=2e3,No=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const hs=Math.PI/180,vs=180/Math.PI;function Hr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function Ml(n,t){return(n%t+t)%t}function um(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function hm(n,t,e){return n!==t?(e-n)/(t-n):0}function ds(n,t,e){return(1-e)*n+e*t}function dm(n,t,e,i){return ds(n,t,1-Math.exp(-e*i))}function fm(n,t=1){return t-Math.abs(Ml(n,t*2)-t)}function pm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function mm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function gm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function _m(n,t){return n+Math.random()*(t-n)}function vm(n){return n*(.5-Math.random())}function xm(n){n!==void 0&&(yu=n);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mm(n){return n*hs}function ym(n){return n*vs}function Sm(n){return(n&n-1)===0&&n!==0}function wm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Em(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tm(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),f=s((t-i)/2),p=o((t-i)/2),g=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*f,c*p,a*l);break;case"YZY":n.set(c*p,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*p,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*g,a*l);break;case"YXY":n.set(c*g,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bm={DEG2RAD:hs,RAD2DEG:vs,generateUUID:Hr,clamp:We,euclideanModulo:Ml,mapLinear:um,inverseLerp:hm,lerp:ds,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:_m,randFloatSpread:vm,seededRandom:xm,degToRad:Mm,radToDeg:ym,isPowerOfTwo:Sm,ceilPowerOfTwo:wm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:Tm,normalize:Ge,denormalize:Er};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,r,s,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],p=i[2],g=i[5],_=i[8],v=r[0],m=r[3],d=r[6],w=r[1],S=r[4],T=r[7],N=r[2],R=r[5],A=r[8];return s[0]=o*v+a*w+c*N,s[3]=o*m+a*S+c*R,s[6]=o*d+a*T+c*A,s[1]=l*v+h*w+f*N,s[4]=l*m+h*S+f*R,s[7]=l*d+h*T+f*A,s[2]=p*v+g*w+_*N,s[5]=p*m+g*S+_*R,s[8]=p*d+g*T+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,p=a*c-h*s,g=l*s-o*c,_=e*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(r*l-h*i)*v,t[2]=(a*i-r*o)*v,t[3]=p*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=g*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new kt;function gd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Am(){const n=Fo("canvas");return n.style.display="block",n}const Su={};function fs(n){n in Su||(Su[n]=!0,console.warn(n))}function Rm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const wu=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eu=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[xi]:{transfer:Io,primaries:Do,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ln]:{transfer:he,primaries:Do,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qo]:{transfer:Io,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(wu)},[xl]:{transfer:he,primaries:Uo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Eu),fromReference:n=>n.applyMatrix3(wu).convertLinearToSRGB()}},Cm=new Set([xi,qo]),ee={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=jr[t].toReference,r=jr[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return jr[n].primaries},getTransfer:function(n){return n===di?Io:jr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(jr[t].luminanceCoefficients)}};function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function La(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class Pm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rr===void 0&&(rr=Fo("canvas")),rr.width=t.width,rr.height=t.height;const i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pr(e[i]/255)*255):e[i]=Pr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lm=0;class _d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ia(r[o].image)):s.push(Ia(r[o]))}else s=Ia(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class Xe extends zr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=Bi,r=Bi,s=xn,o=ki,a=Mn,c=ei,l=Xe.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Hr(),this.name="",this.source=new _d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==id)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yc:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yc:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=id;Xe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],g=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(g+1)/2,N=(d+1)/2,R=(h+p)/4,A=(f+v)/4,I=(_+m)/4;return S>T&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):T>N?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=I/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=I/s),this.set(i,r,s,e),this}let w=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-v)/w,this.z=(p-h)/w,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends zr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Dm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vd extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Um extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const p=s[o+0],g=s[o+1],_=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=v;return}if(f!==v||c!==p||l!==g||h!==_){let m=1-a;const d=c*p+l*g+h*_+f*v,w=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const N=Math.sqrt(S),R=Math.atan2(N,d*w);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const T=a*w;if(c=c*m+p*T,l=l*m+g*T,h=h*m+_*T,f=f*m+v*T,m===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],p=s[o+1],g=s[o+2],_=s[o+3];return t[e]=a*_+h*f+c*g-l*p,t[e+1]=c*_+h*p+l*f-a*g,t[e+2]=l*_+h*g+a*p-c*f,t[e+3]=h*_-a*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),p=c(i/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=p*h*f+l*g*_,this._y=l*g*f-p*h*_,this._z=l*h*_+p*g*f,this._w=l*h*f-p*g*_;break;case"YXZ":this._x=p*h*f+l*g*_,this._y=l*g*f-p*h*_,this._z=l*h*_-p*g*f,this._w=l*h*f+p*g*_;break;case"ZXY":this._x=p*h*f-l*g*_,this._y=l*g*f+p*h*_,this._z=l*h*_+p*g*f,this._w=l*h*f-p*g*_;break;case"ZYX":this._x=p*h*f-l*g*_,this._y=l*g*f+p*h*_,this._z=l*h*_-p*g*f,this._w=l*h*f+p*g*_;break;case"YZX":this._x=p*h*f+l*g*_,this._y=l*g*f+p*h*_,this._z=l*h*_-p*g*f,this._w=l*h*f-p*g*_;break;case"XZY":this._x=p*h*f-l*g*_,this._y=l*g*f-p*h*_,this._z=l*h*_+p*g*f,this._w=l*h*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=i+a+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new C,Tu=new bs;class As{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),zs.subVectors(this.max,Zr),sr.subVectors(t.a,Zr),or.subVectors(t.b,Zr),ar.subVectors(t.c,Zr),si.subVectors(or,sr),oi.subVectors(ar,or),wi.subVectors(sr,ar);let e=[0,-si.z,si.y,0,-oi.z,oi.y,0,-wi.z,wi.y,si.z,0,-si.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-si.y,si.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!Ua(e,sr,or,ar,zs)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,sr,or,ar,zs))?!1:(Hs.crossVectors(si,oi),e=[Hs.x,Hs.y,Hs.z],Ua(e,sr,or,ar,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new C,new C,new C,new C,new C,new C,new C,new C],mn=new C,ks=new As,sr=new C,or=new C,ar=new C,si=new C,oi=new C,wi=new C,Zr=new C,zs=new C,Hs=new C,Ei=new C;function Ua(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ei.fromArray(n,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Nm=new As,Jr=new C,Na=new C;class Rs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Nm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(Na)),this.expandByPoint(Jr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new C,Fa=new C,Gs=new C,ai=new C,Oa=new C,Vs=new C,Ba=new C;class Yo{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Fa.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Fa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=ai.dot(this.direction),c=-ai.dot(Gs),l=ai.lengthSq(),h=Math.abs(1-o*o);let f,p,g,_;if(h>0)if(f=o*c-a,p=o*a-c,_=s*h,f>=0)if(p>=-_)if(p<=_){const v=1/h;f*=v,p*=v,g=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+l;else p<=-_?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+l):p<=_?(f=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fa).addScaledVector(Gs,p),g}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,r,s){Oa.subVectors(e,t),Vs.subVectors(i,t),Ba.crossVectors(Oa,Vs);let o=this.direction.dot(Ba),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const c=a*this.direction.dot(Vs.crossVectors(ai,Vs));if(c<0)return null;const l=a*this.direction.dot(Oa.cross(ai));if(l<0||c+l>o)return null;const h=-a*ai.dot(Ba);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,r,s,o,a,c,l,h,f,p,g,_,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,f,p,g,_,v,m)}set(t,e,i,r,s,o,a,c,l,h,f,p,g,_,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*h,g=o*f,_=a*h,v=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+_*l,e[5]=p-v*l,e[9]=-a*c,e[2]=v-p*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*f,_=l*h,v=l*f;e[0]=p+v*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=v+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*f,_=l*h,v=l*f;e[0]=p-v*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=v-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*f,_=a*h,v=a*f;e[0]=c*h,e[4]=_*l-g,e[8]=p*l+v,e[1]=c*f,e[5]=v*l+p,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=v-p*f,e[8]=_*f+g,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*f+_,e[10]=p-v*f}else if(t.order==="XZY"){const p=o*c,g=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+v,e[5]=o*h,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*h,e[10]=v*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fm,t,Om)}lookAt(t,e,i){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ci.crossVectors(i,Qe),ci.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ci.crossVectors(i,Qe)),ci.normalize(),Ws.crossVectors(Qe,ci),r[0]=ci.x,r[4]=Ws.x,r[8]=Qe.x,r[1]=ci.y,r[5]=Ws.y,r[9]=Qe.y,r[2]=ci.z,r[6]=Ws.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],p=i[9],g=i[13],_=i[2],v=i[6],m=i[10],d=i[14],w=i[3],S=i[7],T=i[11],N=i[15],R=r[0],A=r[4],I=r[8],E=r[12],M=r[1],L=r[5],z=r[9],k=r[13],q=r[2],K=r[6],W=r[10],Z=r[14],V=r[3],ut=r[7],pt=r[11],Mt=r[15];return s[0]=o*R+a*M+c*q+l*V,s[4]=o*A+a*L+c*K+l*ut,s[8]=o*I+a*z+c*W+l*pt,s[12]=o*E+a*k+c*Z+l*Mt,s[1]=h*R+f*M+p*q+g*V,s[5]=h*A+f*L+p*K+g*ut,s[9]=h*I+f*z+p*W+g*pt,s[13]=h*E+f*k+p*Z+g*Mt,s[2]=_*R+v*M+m*q+d*V,s[6]=_*A+v*L+m*K+d*ut,s[10]=_*I+v*z+m*W+d*pt,s[14]=_*E+v*k+m*Z+d*Mt,s[3]=w*R+S*M+T*q+N*V,s[7]=w*A+S*L+T*K+N*ut,s[11]=w*I+S*z+T*W+N*pt,s[15]=w*E+S*k+T*Z+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],g=t[14],_=t[3],v=t[7],m=t[11],d=t[15];return _*(+s*c*f-r*l*f-s*a*p+i*l*p+r*a*g-i*c*g)+v*(+e*c*g-e*l*p+s*o*p-r*o*g+r*l*h-s*c*h)+m*(+e*l*f-e*a*g-s*o*f+i*o*g+s*a*h-i*l*h)+d*(-r*a*h-e*c*f+e*a*p+r*o*f-i*o*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],g=t[11],_=t[12],v=t[13],m=t[14],d=t[15],w=f*m*l-v*p*l+v*c*g-a*m*g-f*c*d+a*p*d,S=_*p*l-h*m*l-_*c*g+o*m*g+h*c*d-o*p*d,T=h*v*l-_*f*l+_*a*g-o*v*g-h*a*d+o*f*d,N=_*f*c-h*v*c-_*a*p+o*v*p+h*a*m-o*f*m,R=e*w+i*S+r*T+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=w*A,t[1]=(v*p*s-f*m*s-v*r*g+i*m*g+f*r*d-i*p*d)*A,t[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*d+i*c*d)*A,t[3]=(f*c*s-a*p*s-f*r*l+i*p*l+a*r*g-i*c*g)*A,t[4]=S*A,t[5]=(h*m*s-_*p*s+_*r*g-e*m*g-h*r*d+e*p*d)*A,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*d-e*c*d)*A,t[7]=(o*p*s-h*c*s+h*r*l-e*p*l-o*r*g+e*c*g)*A,t[8]=T*A,t[9]=(_*f*s-h*v*s-_*i*g+e*v*g+h*i*d-e*f*d)*A,t[10]=(o*v*s-_*a*s+_*i*l-e*v*l-o*i*d+e*a*d)*A,t[11]=(h*a*s-o*f*s-h*i*l+e*f*l+o*i*g-e*a*g)*A,t[12]=N*A,t[13]=(h*v*r-_*f*r+_*i*p-e*v*p-h*i*m+e*f*m)*A,t[14]=(_*a*r-o*v*r-_*i*c+e*v*c+o*i*m-e*a*m)*A,t[15]=(o*f*r-h*a*r+h*i*c-e*f*c-o*i*p+e*a*p)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,f=a+a,p=s*l,g=s*h,_=s*f,v=o*h,m=o*f,d=a*f,w=c*l,S=c*h,T=c*f,N=i.x,R=i.y,A=i.z;return r[0]=(1-(v+d))*N,r[1]=(g+T)*N,r[2]=(_-S)*N,r[3]=0,r[4]=(g-T)*R,r[5]=(1-(p+d))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(_+S)*A,r[9]=(m-w)*A,r[10]=(1-(p+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],gn.copy(this);const l=1/s,h=1/o,f=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Zn){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(a===Zn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===No)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Zn){const c=this.elements,l=1/(e-t),h=1/(i-r),f=1/(o-s),p=(e+t)*l,g=(i+r)*h;let _,v;if(a===Zn)_=(o+s)*f,v=-2*f;else if(a===No)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const cr=new C,gn=new fe,Fm=new C(0,0,0),Om=new C(1,1,1),ci=new C,Ws=new C,Qe=new C,bu=new fe,Au=new bs;class Un{constructor(t=0,e=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bm=0;const Ru=new C,lr=new bs,Hn=new fe,Xs=new C,Qr=new C,km=new C,zm=new bs,Cu=new C(1,0,0),Pu=new C(0,1,0),Lu=new C(0,0,1),Iu={type:"added"},Hm={type:"removed"},ur={type:"childadded",child:null},ka={type:"childremoved",child:null};class Re extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new C,e=new Un,i=new bs,r=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Pu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Pu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xs.copy(t):Xs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Qr,Xs,this.up):Hn.lookAt(Xs,Qr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Hn),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hm),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new C,Gn=new C,za=new C,Vn=new C,hr=new C,dr=new C,Du=new C,Ha=new C,Ga=new C,Va=new C;class Rn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),_n.subVectors(t,e),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){_n.subVectors(r,e),Gn.subVectors(i,e),za.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Gn),c=_n.dot(za),l=Gn.dot(Gn),h=Gn.dot(za),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(l*c-a*h)*p,_=(o*h-a*c)*p;return s.set(1-g-_,_,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static isFrontFacing(t,e,i,r){return _n.subVectors(i,e),Gn.subVectors(t,e),_n.cross(Gn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,i),dr.subVectors(s,i),Ha.subVectors(t,i);const c=hr.dot(Ha),l=dr.dot(Ha);if(c<=0&&l<=0)return e.copy(i);Ga.subVectors(t,r);const h=hr.dot(Ga),f=dr.dot(Ga);if(h>=0&&f<=h)return e.copy(r);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(hr,o);Va.subVectors(t,s);const g=hr.dot(Va),_=dr.dot(Va);if(_>=0&&g<=_)return e.copy(s);const v=g*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(dr,a);const m=h*_-g*f;if(m<=0&&f-h>=0&&g-_>=0)return Du.subVectors(s,r),a=(f-h)/(f-h+(g-_)),e.copy(r).addScaledVector(Du,a);const d=1/(m+v+p);return o=v*d,a=p*d,e.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Tt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ee.workingColorSpace){if(t=Ml(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Wa(o,s,t+1/3),this.g=Wa(o,s,t),this.b=Wa(o,s,t-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ee.fromWorkingColorSpace(Oe.copy(this),t),Math.round(We(Oe.r*255,0,255))*65536+Math.round(We(Oe.g*255,0,255))*256+Math.round(We(Oe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,r=Oe.g,s=Oe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ln){ee.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,r=Oe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(qs);const i=ds(li.h,qs.h,e),r=ds(li.s,qs.s,e),s=ds(li.l,qs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Tt;Tt.NAMES=xd;let Gm=0;class Zi extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Rr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class sn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new C,Ys=new Ht;class Sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return fs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Er(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Er(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Er(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xu&&(t.usage=this.usage),t}}class Md extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yd extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vm=0;const an=new fe,Xa=new Re,fr=new C,tn=new As,ts=new As,Le=new C;class Ye extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gd(t)?yd:Md)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(tn.min,ts.min),tn.expandByPoint(Le),Le.addVectors(tn.max,ts.max),tn.expandByPoint(Le)):(tn.expandByPoint(ts.min),tn.expandByPoint(ts.max))}tn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(t,l),Le.add(fr)),r=Math.max(r,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new C,c[I]=new C;const l=new C,h=new C,f=new C,p=new Ht,g=new Ht,_=new Ht,v=new C,m=new C;function d(I,E,M){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),h.sub(l),f.sub(l),g.sub(p),_.sub(p);const L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(L),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(L),a[I].add(v),a[E].add(v),a[M].add(v),c[I].add(m),c[E].add(m),c[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,E=w.length;I<E;++I){const M=w[I],L=M.start,z=M.count;for(let k=L,q=L+z;k<q;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new C,T=new C,N=new C,R=new C;function A(I){N.fromBufferAttribute(r,I),R.copy(N);const E=a[I];S.copy(E),S.sub(N.multiplyScalar(N.dot(E))).normalize(),T.crossVectors(R,E);const L=T.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,E=w.length;I<E;++I){const M=w[I],L=M.start,z=M.count;for(let k=L,q=L+z;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,h=new C,f=new C;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h);let g=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?g=c[v]*a.data.stride+a.offset:g=c[v]*h;for(let d=0;d<h;d++)p[_++]=l[g++]}return new Sn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const p=l[h],g=t(p,i);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uu=new fe,Ti=new Yo,$s=new Rs,Nu=new C,pr=new C,mr=new C,gr=new C,qa=new C,Ks=new C,js=new Ht,Zs=new Ht,Js=new Ht,Fu=new C,Ou=new C,Bu=new C,Qs=new C,to=new C;class G extends Re{constructor(t=new Ye,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(qa.fromBufferAttribute(f,t),o?Ks.addScaledVector(qa,h):Ks.addScaledVector(qa.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),Ti.copy(t.ray).recast(t.near),!($s.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere($s,Nu)===null||Ti.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Uu.copy(s).invert(),Ti.copy(t.ray).applyMatrix4(Uu),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],d=o[m.materialIndex],w=Math.max(m.start,g.start),S=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let T=w,N=S;T<N;T+=3){const R=a.getX(T),A=a.getX(T+1),I=a.getX(T+2);r=eo(this,d,t,i,l,h,f,R,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=_,d=v;m<d;m+=3){const w=a.getX(m),S=a.getX(m+1),T=a.getX(m+2);r=eo(this,o,t,i,l,h,f,w,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],d=o[m.materialIndex],w=Math.max(m.start,g.start),S=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let T=w,N=S;T<N;T+=3){const R=T,A=T+1,I=T+2;r=eo(this,d,t,i,l,h,f,R,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let m=_,d=v;m<d;m+=3){const w=m,S=m+1,T=m+2;r=eo(this,o,t,i,l,h,f,w,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Wm(n,t,e,i,r,s,o,a){let c;if(t.side===ze?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===_i,a),c===null)return null;to.copy(a),to.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:n}}function eo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,pr),n.getVertexPosition(c,mr),n.getVertexPosition(l,gr);const h=Wm(n,t,e,i,pr,mr,gr,Qs);if(h){r&&(js.fromBufferAttribute(r,a),Zs.fromBufferAttribute(r,c),Js.fromBufferAttribute(r,l),h.uv=Rn.getInterpolation(Qs,pr,mr,gr,js,Zs,Js,new Ht)),s&&(js.fromBufferAttribute(s,a),Zs.fromBufferAttribute(s,c),Js.fromBufferAttribute(s,l),h.uv1=Rn.getInterpolation(Qs,pr,mr,gr,js,Zs,Js,new Ht)),o&&(Fu.fromBufferAttribute(o,a),Ou.fromBufferAttribute(o,c),Bu.fromBufferAttribute(o,l),h.normal=Rn.getInterpolation(Qs,pr,mr,gr,Fu,Ou,Bu,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new C,materialIndex:0};Rn.getNormal(pr,mr,gr,f.normal),h.face=f}return h}class Lt extends Ye{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(f,2));function _(v,m,d,w,S,T,N,R,A,I,E){const M=T/A,L=N/I,z=T/2,k=N/2,q=R/2,K=A+1,W=I+1;let Z=0,V=0;const ut=new C;for(let pt=0;pt<W;pt++){const Mt=pt*L-k;for(let Yt=0;Yt<K;Yt++){const se=Yt*M-z;ut[v]=se*w,ut[m]=Mt*S,ut[d]=q,l.push(ut.x,ut.y,ut.z),ut[v]=0,ut[m]=0,ut[d]=R>0?1:-1,h.push(ut.x,ut.y,ut.z),f.push(Yt/A),f.push(1-pt/I),Z+=1}}for(let pt=0;pt<I;pt++)for(let Mt=0;Mt<A;Mt++){const Yt=p+Mt+K*pt,se=p+Mt+K*(pt+1),Y=p+(Mt+1)+K*(pt+1),et=p+(Mt+1)+K*pt;c.push(Yt,se,et),c.push(se,Y,et),V+=6}a.addGroup(g,V,E),g+=V,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const r in i)t[r]=i[r]}return t}function Xm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const qm={clone:Fr,merge:Ve};var Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wd extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new C,ku=new Ht,zu=new Ht;class en extends wd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,ku,zu),e.subVectors(zu,ku)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _r=-90,vr=1;class Km extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(_r,vr,t,e);r.layers=this.layers,this.add(r);const s=new en(_r,vr,t,e);s.layers=this.layers,this.add(s);const o=new en(_r,vr,t,e);o.layers=this.layers,this.add(o);const a=new en(_r,vr,t,e);a.layers=this.layers,this.add(a);const c=new en(_r,vr,t,e);c.layers=this.layers,this.add(c);const l=new en(_r,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(f,p,g),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ed extends Xe{constructor(t,e,i,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ir,super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ed(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lt(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:pi});s.uniforms.tEquirect.value=e;const o=new G(r,s),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=xn),new Km(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ya=new C,Zm=new C,Jm=new kt;class Pi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ya.subVectors(i,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Jm.getNormalMatrix(t),r=this.coplanarPoint(Ya).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Rs,no=new C;class Sl{constructor(t=new Pi,e=new Pi,i=new Pi,r=new Pi,s=new Pi,o=new Pi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],f=r[6],p=r[7],g=r[8],_=r[9],v=r[10],m=r[11],d=r[12],w=r[13],S=r[14],T=r[15];if(i[0].setComponents(c-s,p-l,m-g,T-d).normalize(),i[1].setComponents(c+s,p+l,m+g,T+d).normalize(),i[2].setComponents(c+o,p+h,m+_,T+w).normalize(),i[3].setComponents(c-o,p-h,m-_,T-w).normalize(),i[4].setComponents(c-a,p-f,m-v,T-S).normalize(),e===Zn)i[5].setComponents(c+a,p+f,m+v,T+S).normalize();else if(e===No)i[5].setComponents(a,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(no.x=r.normal.x>0?t.max.x:t.min.x,no.y=r.normal.y>0?t.max.y:t.min.y,no.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Qm(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c._updateRange,p=c.updateRanges;if(n.bindBuffer(l,a),f.count===-1&&p.length===0&&n.bufferSubData(l,0,h),p.length!==0){for(let g=0,_=p.length;g<_;g++){const v=p[g];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(l,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Gr extends Ye{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=t/a,p=e/c,g=[],_=[],v=[],m=[];for(let d=0;d<h;d++){const w=d*p-o;for(let S=0;S<l;S++){const T=S*f-s;_.push(T,-w,0),v.push(0,0,1),m.push(S/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<a;w++){const S=w+l*d,T=w+l*(d+1),N=w+1+l*(d+1),R=w+1+l*d;g.push(S,T,R),g.push(T,N,R)}this.setIndex(g),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`
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
}`,I0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
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
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,S_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,E_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,b_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:t0,alphahash_pars_fragment:e0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:r0,alphatest_pars_fragment:s0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:M0,color_pars_vertex:y0,color_vertex:S0,common:w0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:T0,displacementmap_pars_vertex:b0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:L0,envmap_fragment:I0,envmap_common_pars_fragment:D0,envmap_pars_fragment:U0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:k0,fog_pars_fragment:z0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:G0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:$0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:Q0,lights_fragment_maps:tg,lights_fragment_end:eg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:sg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:cg,map_particle_pars_fragment:lg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:Mg,normal_vertex:yg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:bg,opaque_fragment:Ag,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Lg,dithering_pars_fragment:Ig,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Ng,shadowmap_pars_vertex:Fg,shadowmap_vertex:Og,shadowmask_pars_fragment:Bg,skinbase_vertex:kg,skinning_pars_vertex:zg,skinning_vertex:Hg,skinnormal_vertex:Gg,specularmap_fragment:Vg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:Yg,transmission_pars_fragment:$g,uv_pars_fragment:Kg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:Qg,background_frag:t_,backgroundCube_vert:e_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:r_,depth_vert:s_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:c_,equirect_vert:l_,equirect_frag:u_,linedashed_vert:h_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:v_,meshnormal_vert:x_,meshnormal_frag:M_,meshphong_vert:y_,meshphong_frag:S_,meshphysical_vert:w_,meshphysical_frag:E_,meshtoon_vert:T_,meshtoon_frag:b_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:L_,sprite_frag:I_},at={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},bn={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};bn.physical={uniforms:Ve([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const io={r:0,b:0,g:0},Ai=new Un,D_=new fe;function U_(n,t,e,i,r,s,o){const a=new Tt(0);let c=s===!0?0:1,l,h,f=null,p=0,g=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function v(w){let S=!1;const T=_(w);T===null?d(a,c):T&&T.isColor&&(d(T,1),S=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===Xo)?(h===void 0&&(h=new G(new Lt(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Fr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ai.copy(S.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ai)),h.material.toneMapped=ee.getTransfer(T.colorSpace)!==he,(f!==T||p!==T.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=T,p=T.version,g=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new G(new Gr(2,2),new vi({name:"BackgroundMaterial",uniforms:Fr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(T.colorSpace)!==he,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||g!==n.toneMapping)&&(l.material.needsUpdate=!0,f=T,p=T.version,g=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,S){w.getRGB(io,Sd(n)),i.buffers.color.setClear(io.r,io.g,io.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:v,addToRenderList:m}}function N_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(M,L,z,k,q){let K=!1;const W=f(k,z,L);s!==W&&(s=W,l(s.object)),K=g(M,k,z,q),K&&_(M,k,z,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,T(M,L,z,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,L,z){const k=z.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let K=q[L.id];K===void 0&&(K={},q[L.id]=K);let W=K[k];return W===void 0&&(W=p(c()),K[k]=W),W}function p(M){const L=[],z=[],k=[];for(let q=0;q<e;q++)L[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function g(M,L,z,k){const q=s.attributes,K=L.attributes;let W=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){const pt=q[V];let Mt=K[V];if(Mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function _(M,L,z,k){const q={},K=L.attributes;let W=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){let pt=K[V];pt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));const Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),q[V]=Mt,W++}s.attributes=q,s.attributesNum=W,s.index=k}function v(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const z=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;z[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),q[M]!==L&&(n.vertexAttribDivisor(M,L),q[M]=L)}function w(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,k=L.length;z<k;z++)L[z]!==M[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function S(M,L,z,k,q,K,W){W===!0?n.vertexAttribIPointer(M,L,z,q,K):n.vertexAttribPointer(M,L,z,k,q,K)}function T(M,L,z,k){v();const q=k.attributes,K=z.getAttributes(),W=L.defaultAttributeValues;for(const Z in K){const V=K[Z];if(V.location>=0){let ut=q[Z];if(ut===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const pt=ut.normalized,Mt=ut.itemSize,Yt=t.get(ut);if(Yt===void 0)continue;const se=Yt.buffer,Y=Yt.type,et=Yt.bytesPerElement,gt=Y===n.INT||Y===n.UNSIGNED_INT||ut.gpuType===fl;if(ut.isInterleavedBufferAttribute){const dt=ut.data,Nt=dt.stride,Gt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)d(V.location+Xt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Xt=0;Xt<V.locationSize;Xt++)S(V.location+Xt,Mt/V.locationSize,Y,pt,Nt*et,(Gt+Mt/V.locationSize*Xt)*et,gt)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)d(V.location+dt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<V.locationSize;dt++)m(V.location+dt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let dt=0;dt<V.locationSize;dt++)S(V.location+dt,Mt/V.locationSize,Y,pt,Mt*et,Mt/V.locationSize*dt*et,gt)}}else if(W!==void 0){const pt=W[Z];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(V.location,pt);break;case 3:n.vertexAttrib3fv(V.location,pt);break;case 4:n.vertexAttrib4fv(V.location,pt);break;default:n.vertexAttrib1fv(V.location,pt)}}}}w()}function N(){I();for(const M in i){const L=i[M];for(const z in L){const k=L[z];for(const q in k)h(k[q].object),delete k[q];delete L[z]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const k=L[z];for(const q in k)h(k[q].object),delete k[q];delete L[z]}delete i[M.id]}function A(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const k=z[M.id];for(const q in k)h(k[q].object),delete k[q];delete z[M.id]}}function I(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function F_(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,i,1)}function c(l,h,f,p){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];for(let v=0;v<p.length;v++)e.update(_,i,p[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function O_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==jn&&!A)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:d,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:T,maxSamples:N}}function B_(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Pi,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const w=s?0:i,S=w*4;let T=d.clippingState||null;c.value=T,T=h(_,p,S,g);for(let N=0;N!==S;++N)T[N]=e[N];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,p,g,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=g+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,T=g;S!==v;++S,T+=4)o.copy(f[S]).applyMatrix4(w,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function k_(n){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=Ir:a===Mc&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===Mc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class bd extends wd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Tr=4,Hu=[.125,.215,.35,.446,.526,.582],Fi=20,$a=new bd,Gu=new Tt;let Ka=null,ja=0,Za=0,Ja=!1;const Li=(1+Math.sqrt(5))/2,xr=1/Li,Vu=[new C(-Li,xr,0),new C(Li,xr,0),new C(-xr,0,Li),new C(xr,0,Li),new C(0,Li,-xr),new C(0,Li,xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,ja,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ir||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ts,format:Mn,colorSpace:xi,depthBuffer:!1},r=Xu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(s)),this._blurMaterial=H_(s,t,e)}return r}_compileMaterial(t){const e=new G(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,r){const a=new en(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Gu),h.toneMapping=mi,h.autoClear=!1;const g=new sn({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new G(new Lt,g);let v=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,v=!0):(g.color.copy(Gu),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):w===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const S=this._cubeSize;ro(r,w*S,d>2?S:0,S,S),h.setRenderTarget(r),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ir||t.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ro(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,$a)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vu[(r-s-1)%Vu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new G(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Fi-1),v=s/_,m=isFinite(s)?1+Math.floor(h*v):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const d=[];let w=0;for(let A=0;A<Fi;++A){const I=A/v,E=Math.exp(-I*I/2);d.push(E),A===0?w+=E:A<m&&(w+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-i;const T=this._sizeLods[r],N=3*T*(r>S-Tr?r-S+Tr:0),R=4*(this._cubeSize-T);ro(e,N,R,3*T,2*T),c.setRenderTarget(e),c.render(f,$a)}}function z_(n){const t=[],e=[],i=[];let r=n;const s=n-Tr+1+Hu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Tr?c=Hu[o-n+Tr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,_=6,v=3,m=2,d=1,w=new Float32Array(v*_*g),S=new Float32Array(m*_*g),T=new Float32Array(d*_*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,I=R>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];w.set(E,v*_*R),S.set(p,m*_*R);const M=[R,R,R,R,R,R];T.set(M,d*_*R)}const N=new Ye;N.setAttribute("position",new Sn(w,v)),N.setAttribute("uv",new Sn(S,m)),N.setAttribute("faceIndex",new Sn(T,d)),t.push(N),r>Tr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xu(n,t,e){const i=new Xi(n,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ro(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function H_(n,t,e){const i=new Float32Array(Fi),r=new C(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function qu(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Yu(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function G_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===xc||c===Mc,h=c===Ir||c===Dr;if(l||h){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Wu(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&r(g)?(e===null&&(e=new Wu(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function V_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W_(n,t,e,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const _ in p)t.update(p[_],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const v=g[_];for(let m=0,d=v.length;m<d;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,_=f.attributes.position;let v=0;if(g!==null){const w=g.array;v=g.version;for(let S=0,T=w.length;S<T;S+=3){const N=w[S+0],R=w[S+1],A=w[S+2];p.push(N,R,R,A,A,N)}}else if(_!==void 0){const w=_.array;v=_.version;for(let S=0,T=w.length/3-1;S<T;S+=3){const N=S+0,R=S+1,A=S+2;p.push(N,R,R,A,A,N)}}else return;const m=new(gd(p)?yd:Md)(p,1);m.version=v;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function X_(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,g){n.drawElements(i,g,s,p*o),e.update(g,i,1)}function l(p,g,_){_!==0&&(n.drawElementsInstanced(i,g,s,p*o,_),e.update(g,i,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];e.update(m,i,1)}function f(p,g,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/o,g[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=g[w];for(let w=0;w<v.length;w++)e.update(d,i,v[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function q_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Y_(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var g=M;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let N=a.attributes.position.count*T,R=1;N>t.maxTextureSize&&(R=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*R*4*f),I=new vd(A,N,R,f);I.type=jn,I.needsUpdate=!0;const E=T*4;for(let L=0;L<f;L++){const z=d[L],k=w[L],q=S[L],K=N*R*4*L;for(let W=0;W<z.count;W++){const Z=W*E;_===!0&&(r.fromBufferAttribute(z,W),A[K+Z+0]=r.x,A[K+Z+1]=r.y,A[K+Z+2]=r.z,A[K+Z+3]=0),v===!0&&(r.fromBufferAttribute(k,W),A[K+Z+4]=r.x,A[K+Z+5]=r.y,A[K+Z+6]=r.z,A[K+Z+7]=0),m===!0&&(r.fromBufferAttribute(q,W),A[K+Z+8]=r.x,A[K+Z+9]=r.y,A[K+Z+10]=r.z,A[K+Z+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:I,size:new Ht(N,R)},i.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function $_(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Ad extends Xe{constructor(t,e,i,r,s,o,a,c,l,h=Cr){if(h!==Cr&&h!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cr&&(i=Wi),i===void 0&&h===Nr&&(i=Ur),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rd=new Xe,$u=new Ad(1,1),Cd=new vd,Pd=new Um,Ld=new Ed,Ku=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Qu=new Float32Array(4);function Vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ku[r];if(s===void 0&&(s=new Float32Array(r),Ku[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $o(n,t){let e=ju[t];e===void 0&&(e=new Int32Array(t),ju[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function K_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function Q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Qu.set(i),n.uniformMatrix2fv(this.addr,!1,Qu),Pe(e,i)}}function tv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Pe(e,i)}}function ev(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Pe(e,i)}}function nv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function ov(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function av(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function uv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($u.compareFunction=md,s=$u):s=Rd,e.setTexture2D(t||s,r)}function hv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Pd,r)}function dv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ld,r)}function fv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Cd,r)}function pv(n){switch(n){case 5126:return K_;case 35664:return j_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(n,t){n.uniform1fv(this.addr,t)}function gv(n,t){const e=Vr(t,this.size,2);n.uniform2fv(this.addr,e)}function _v(n,t){const e=Vr(t,this.size,3);n.uniform3fv(this.addr,e)}function vv(n,t){const e=Vr(t,this.size,4);n.uniform4fv(this.addr,e)}function xv(n,t){const e=Vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Mv(n,t){const e=Vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yv(n,t){const e=Vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sv(n,t){n.uniform1iv(this.addr,t)}function wv(n,t){n.uniform2iv(this.addr,t)}function Ev(n,t){n.uniform3iv(this.addr,t)}function Tv(n,t){n.uniform4iv(this.addr,t)}function bv(n,t){n.uniform1uiv(this.addr,t)}function Av(n,t){n.uniform2uiv(this.addr,t)}function Rv(n,t){n.uniform3uiv(this.addr,t)}function Cv(n,t){n.uniform4uiv(this.addr,t)}function Pv(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Pe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Rd,s[o])}function Lv(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Pe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Pd,s[o])}function Iv(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Pe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ld,s[o])}function Dv(n,t,e){const i=this.cache,r=t.length,s=$o(e,r);Ce(i,s)||(n.uniform1iv(this.addr,s),Pe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Cd,s[o])}function Uv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return vv;case 35674:return xv;case 35675:return Mv;case 35676:return yv;case 5124:case 35670:return Sv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return bv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Nv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=pv(e.type)}}class Fv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uv(e.type)}}class Ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function th(n,t){n.seq.push(t),n.map[t.id]=t}function Bv(n,t,e){const i=n.name,r=i.length;for(Qa.lastIndex=0;;){const s=Qa.exec(i),o=Qa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){th(e,l===void 0?new Nv(a,n,t):new Fv(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ov(a),th(e,f)),e=f}}}class To{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Bv(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function eh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const kv=37297;let zv=0;function Hv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Gv(n){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(n);let i;switch(t===e?i="":t===Uo&&e===Do?i="LinearDisplayP3ToLinearSRGB":t===Do&&e===Uo&&(i="LinearSRGBToLinearDisplayP3"),n){case xi:case qo:return[i,"LinearTransferOETF"];case ln:case xl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(t),o)}else return r}function Vv(n,t){const e=Gv(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wv(n,t){let e;switch(t){case qp:e="Linear";break;case Yp:e="Reinhard";break;case $p:e="OptimizedCineon";break;case Kp:e="ACESFilmic";break;case Zp:e="AgX";break;case Jp:e="Neutral";break;case jp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const so=new C;function Xv(){ee.getLuminanceCoefficients(so);const n=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Yv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $v(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function os(n){return n!==""}function ih(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(Kv,Zv)}const jv=new Map;function Zv(n,t){let e=Bt[t];if(e===void 0){const i=jv.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kc(e)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(n){return n.replace(Jv,Qv)}function Qv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function oh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function tx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function ex(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Dr:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function ix(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nd:t="ENVMAP_BLENDING_MULTIPLY";break;case Wp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function rx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sx(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=tx(e),l=ex(e),h=nx(e),f=ix(e),p=rx(e),g=qv(e),_=Yv(s),v=r.createProgram();let m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(os).join(`
`),d.length>0&&(d+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),d=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==mi?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Vv("linearToOutputTexel",e.outputColorSpace),Xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=Kc(o),o=ih(o,e),o=rh(o,e),a=Kc(a),a=ih(a,e),a=rh(a,e),o=sh(o),a=sh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=w+m+o,T=w+d+a,N=eh(r,r.VERTEX_SHADER,S),R=eh(r,r.FRAGMENT_SHADER,T);r.attachShader(v,N),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(N).trim(),q=r.getShaderInfoLog(R).trim();let K=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,N,R);else{const Z=nh(r,N,"vertex"),V=nh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Z+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||q==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(N),r.deleteShader(R),I=new To(r,v),E=$v(r,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,kv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let ox=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new cx(t),e.set(t,i)),i}}class cx{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}}function lx(n,t,e,i,r,s,o){const a=new yl,c=new ax,l=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,z,k){const q=z.fog,K=k.geometry,W=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),V=Z&&Z.mapping===Xo?Z.image.height:null,ut=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mt=pt!==void 0?pt.length:0;let Yt=0;K.morphAttributes.position!==void 0&&(Yt=1),K.morphAttributes.normal!==void 0&&(Yt=2),K.morphAttributes.color!==void 0&&(Yt=3);let se,Y,et,gt;if(ut){const Zt=bn[ut];se=Zt.vertexShader,Y=Zt.fragmentShader}else se=E.vertexShader,Y=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const dt=n.getRenderTarget(),Nt=k.isInstancedMesh===!0,Gt=k.isBatchedMesh===!0,Xt=!!E.map,ge=!!E.matcap,P=!!Z,ye=!!E.aoMap,ie=!!E.lightMap,oe=!!E.bumpMap,St=!!E.normalMap,Se=!!E.displacementMap,It=!!E.emissiveMap,Ft=!!E.metalnessMap,b=!!E.roughnessMap,x=E.anisotropy>0,H=E.clearcoat>0,Q=E.dispersion>0,tt=E.iridescence>0,J=E.sheen>0,wt=E.transmission>0,ct=x&&!!E.anisotropyMap,ft=H&&!!E.clearcoatMap,Ot=H&&!!E.clearcoatNormalMap,it=H&&!!E.clearcoatRoughnessMap,ht=tt&&!!E.iridescenceMap,$t=tt&&!!E.iridescenceThicknessMap,Pt=J&&!!E.sheenColorMap,mt=J&&!!E.sheenRoughnessMap,Dt=!!E.specularMap,Vt=!!E.specularColorMap,pe=!!E.specularIntensityMap,D=wt&&!!E.transmissionMap,rt=wt&&!!E.thicknessMap,$=!!E.gradientMap,j=!!E.alphaMap,ot=E.alphaTest>0,At=!!E.alphaHash,Kt=!!E.extensions;let we=mi;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(we=n.toneMapping);const De={shaderID:ut,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:Y,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:xi,alphaToCoverage:!!E.alphaToCoverage,map:Xt,matcap:ge,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:V,aoMap:ye,lightMap:ie,bumpMap:oe,normalMap:St,displacementMap:p&&Se,emissiveMap:It,normalMapObjectSpace:St&&E.normalMapType===nm,normalMapTangentSpace:St&&E.normalMapType===pd,metalnessMap:Ft,roughnessMap:b,anisotropy:x,anisotropyMap:ct,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:Ot,clearcoatRoughnessMap:it,dispersion:Q,iridescence:tt,iridescenceMap:ht,iridescenceThicknessMap:$t,sheen:J,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Dt,specularColorMap:Vt,specularIntensityMap:pe,transmission:wt,transmissionMap:D,thicknessMap:rt,gradientMap:$,opaque:E.transparent===!1&&E.blending===Rr&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ot,alphaHash:At,combine:E.combine,mapUv:Xt&&v(E.map.channel),aoMapUv:ye&&v(E.aoMap.channel),lightMapUv:ie&&v(E.lightMap.channel),bumpMapUv:oe&&v(E.bumpMap.channel),normalMapUv:St&&v(E.normalMap.channel),displacementMapUv:Se&&v(E.displacementMap.channel),emissiveMapUv:It&&v(E.emissiveMap.channel),metalnessMapUv:Ft&&v(E.metalnessMap.channel),roughnessMapUv:b&&v(E.roughnessMap.channel),anisotropyMapUv:ct&&v(E.anisotropyMap.channel),clearcoatMapUv:ft&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(E.sheenRoughnessMap.channel),specularMapUv:Dt&&v(E.specularMap.channel),specularColorMapUv:Vt&&v(E.specularColorMap.channel),specularIntensityMapUv:pe&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:rt&&v(E.thicknessMap.channel),alphaMapUv:j&&v(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(St||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Xt||j),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:Xt&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Kt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&E.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function T(E){const M=_[E.type];let L;if(M){const z=bn[M];L=qm.clone(z.uniforms)}else L=E.uniforms;return L}function N(E,M){let L;for(let z=0,k=h.length;z<k;z++){const q=h[z];if(q.cacheKey===M){L=q,++L.usedTimes;break}}return L===void 0&&(L=new sx(n,M,E,s),h.push(L)),L}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:N,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:I}}function ux(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function hx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ch(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,p,g,_,v,m){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),t++,d}function a(f,p,g,_,v,m){const d=o(f,p,g,_,v,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):e.push(d)}function c(f,p,g,_,v,m){const d=o(f,p,g,_,v,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||hx),i.length>1&&i.sort(p||ah),r.length>1&&r.sort(p||ah)}function h(){for(let f=t,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function dx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new ch,n.set(i,[o])):r>=s.length?(o=new ch,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _x(n){const t=new fx,e=px(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const r=new C,s=new fe,o=new fe;function a(l){let h=0,f=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,_=0,v=0,m=0,d=0,w=0,S=0,T=0,N=0,R=0,A=0;l.sort(gx);for(let E=0,M=l.length;E<M;E++){const L=l[E],z=L.color,k=L.intensity,q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*k,f+=z.g*k,p+=z.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],k);A++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[g]=V,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=W,g++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const Z=L.shadow;if(L.map&&(i.spotLightMap[N]=L.map,N++,Z.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[v]=Z.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=K,T++}v++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=L.shadow.matrix,S++}i.point[_]=W,_++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const I=i.hash;(I.directionalLength!==g||I.pointLength!==_||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==N||I.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.directionalLength=g,I.pointLength=_,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=N,I.numLightProbes=A,i.version=mx++)}function c(l,h){let f=0,p=0,g=0,_=0,v=0;const m=h.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const S=l[d];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function lh(n){const t=new _x(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function vx(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new lh(n),t.set(r,[a])):s>=o.length?(a=new lh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class xx extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mx extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`;function wx(n,t,e){let i=new Sl;const r=new Ht,s=new Ht,o=new de,a=new xx({depthPacking:em}),c=new Mx,l={},h=e.maxTextureSize,f={[_i]:ze,[ze]:_i,[An]:An},p=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:yx,fragmentShader:Sx}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ye;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new G(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let d=this.type;this.render=function(R,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(pi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==Yn&&this.type===Yn,q=d===Yn&&this.type!==Yn;for(let K=0,W=R.length;K<W;K++){const Z=R[K],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ut=V.getFrameExtents();if(r.multiply(ut),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ut.x),r.x=s.x*ut.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ut.y),r.y=s.y*ut.y,V.mapSize.y=s.y)),V.map===null||k===!0||q===!0){const Mt=this.type!==Yn?{minFilter:hn,magFilter:hn}:{};V.map!==null&&V.map.dispose(),V.map=new Xi(r.x,r.y,Mt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const pt=V.getViewportCount();for(let Mt=0;Mt<pt;Mt++){const Yt=V.getViewport(Mt);o.set(s.x*Yt.x,s.y*Yt.y,s.x*Yt.z,s.y*Yt.w),z.viewport(o),V.updateMatrices(Z,Mt),i=V.getFrustum(),T(A,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&w(V,I),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function w(R,A){const I=t.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,I,p,v,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,I,g,v,null)}function S(R,A,I,E){let M=null;const L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,k=A.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let K=q[k];K===void 0&&(K=M.clone(),q[k]=K,A.addEventListener("dispose",N)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Yn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=I}return M}function T(R,A,I,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Yn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const k=t.update(R),q=R.material;if(Array.isArray(q)){const K=k.groups;for(let W=0,Z=K.length;W<Z;W++){const V=K[W],ut=q[V.materialIndex];if(ut&&ut.visible){const pt=S(R,ut,E,M);R.onBeforeShadow(n,R,A,I,k,pt,V),n.renderBufferDirect(I,null,k,pt,R,V),R.onAfterShadow(n,R,A,I,k,pt,V)}}}else if(q.visible){const K=S(R,q,E,M);R.onBeforeShadow(n,R,A,I,k,K,null),n.renderBufferDirect(I,null,k,K,R,null),R.onAfterShadow(n,R,A,I,k,K,null)}}const z=R.children;for(let k=0,q=z.length;k<q;k++)T(z[k],A,I,E,M)}function N(R){R.target.removeEventListener("dispose",N);for(const I in l){const E=l[I],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Ex(n){function t(){let D=!1;const rt=new de;let $=null;const j=new de(0,0,0,0);return{setMask:function(ot){$!==ot&&!D&&(n.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){D=ot},setClear:function(ot,At,Kt,we,De){De===!0&&(ot*=we,At*=we,Kt*=we),rt.set(ot,At,Kt,we),j.equals(rt)===!1&&(n.clearColor(ot,At,Kt,we),j.copy(rt))},reset:function(){D=!1,$=null,j.set(-1,0,0,0)}}}function e(){let D=!1,rt=null,$=null,j=null;return{setTest:function(ot){ot?gt(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(ot){rt!==ot&&!D&&(n.depthMask(ot),rt=ot)},setFunc:function(ot){if($!==ot){switch(ot){case Op:n.depthFunc(n.NEVER);break;case Bp:n.depthFunc(n.ALWAYS);break;case kp:n.depthFunc(n.LESS);break;case Lo:n.depthFunc(n.LEQUAL);break;case zp:n.depthFunc(n.EQUAL);break;case Hp:n.depthFunc(n.GEQUAL);break;case Gp:n.depthFunc(n.GREATER);break;case Vp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=ot}},setLocked:function(ot){D=ot},setClear:function(ot){j!==ot&&(n.clearDepth(ot),j=ot)},reset:function(){D=!1,rt=null,$=null,j=null}}}function i(){let D=!1,rt=null,$=null,j=null,ot=null,At=null,Kt=null,we=null,De=null;return{setTest:function(Zt){D||(Zt?gt(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(Zt){rt!==Zt&&!D&&(n.stencilMask(Zt),rt=Zt)},setFunc:function(Zt,Bn,En){($!==Zt||j!==Bn||ot!==En)&&(n.stencilFunc(Zt,Bn,En),$=Zt,j=Bn,ot=En)},setOp:function(Zt,Bn,En){(At!==Zt||Kt!==Bn||we!==En)&&(n.stencilOp(Zt,Bn,En),At=Zt,Kt=Bn,we=En)},setLocked:function(Zt){D=Zt},setClear:function(Zt){De!==Zt&&(n.clearStencil(Zt),De=Zt)},reset:function(){D=!1,rt=null,$=null,j=null,ot=null,At=null,Kt=null,we=null,De=null}}}const r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,d=null,w=null,S=null,T=null,N=null,R=new Tt(0,0,0),A=0,I=!1,E=null,M=null,L=null,z=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=W>=2);let V=null,ut={};const pt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Yt=new de().fromArray(pt),se=new de().fromArray(Mt);function Y(D,rt,$,j){const ot=new Uint8Array(4),At=n.createTexture();n.bindTexture(D,At),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<$;Kt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ot):n.texImage2D(rt+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ot);return At}const et={};et[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),gt(n.DEPTH_TEST),s.setFunc(Lo),oe(!1),St(mu),gt(n.CULL_FACE),ye(pi);function gt(D){l[D]!==!0&&(n.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(n.disable(D),l[D]=!1)}function Nt(D,rt){return h[D]!==rt?(n.bindFramebuffer(D,rt),h[D]=rt,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Gt(D,rt){let $=p,j=!1;if(D){$=f.get(rt),$===void 0&&($=[],f.set(rt,$));const ot=D.textures;if($.length!==ot.length||$[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Kt=ot.length;At<Kt;At++)$[At]=n.COLOR_ATTACHMENT0+At;$.length=ot.length,j=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,j=!0);j&&n.drawBuffers($)}function Xt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const ge={[Ni]:n.FUNC_ADD,[Mp]:n.FUNC_SUBTRACT,[yp]:n.FUNC_REVERSE_SUBTRACT};ge[Sp]=n.MIN,ge[wp]=n.MAX;const P={[Ep]:n.ZERO,[Tp]:n.ONE,[bp]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Pp]:n.DST_COLOR,[Rp]:n.DST_ALPHA,[Ap]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Cp]:n.ONE_MINUS_DST_ALPHA,[Dp]:n.CONSTANT_COLOR,[Up]:n.ONE_MINUS_CONSTANT_COLOR,[Np]:n.CONSTANT_ALPHA,[Fp]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(D,rt,$,j,ot,At,Kt,we,De,Zt){if(D===pi){_===!0&&(dt(n.BLEND),_=!1);return}if(_===!1&&(gt(n.BLEND),_=!0),D!==xp){if(D!==v||Zt!==I){if((m!==Ni||S!==Ni)&&(n.blendEquation(n.FUNC_ADD),m=Ni,S=Ni),Zt)switch(D){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,w=null,T=null,N=null,R.set(0,0,0),A=0,v=D,I=Zt}return}ot=ot||rt,At=At||$,Kt=Kt||j,(rt!==m||ot!==S)&&(n.blendEquationSeparate(ge[rt],ge[ot]),m=rt,S=ot),($!==d||j!==w||At!==T||Kt!==N)&&(n.blendFuncSeparate(P[$],P[j],P[At],P[Kt]),d=$,w=j,T=At,N=Kt),(we.equals(R)===!1||De!==A)&&(n.blendColor(we.r,we.g,we.b,De),R.copy(we),A=De),v=D,I=!1}function ie(D,rt){D.side===An?dt(n.CULL_FACE):gt(n.CULL_FACE);let $=D.side===ze;rt&&($=!$),oe($),D.blending===Rr&&D.transparent===!1?ye(pi):ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function St(D){D!==_p?(gt(n.CULL_FACE),D!==M&&(D===mu?n.cullFace(n.BACK):D===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),M=D}function Se(D){D!==L&&(K&&n.lineWidth(D),L=D)}function It(D,rt,$){D?(gt(n.POLYGON_OFFSET_FILL),(z!==rt||k!==$)&&(n.polygonOffset(rt,$),z=rt,k=$)):dt(n.POLYGON_OFFSET_FILL)}function Ft(D){D?gt(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function b(D){D===void 0&&(D=n.TEXTURE0+q-1),V!==D&&(n.activeTexture(D),V=D)}function x(D,rt,$){$===void 0&&(V===null?$=n.TEXTURE0+q-1:$=V);let j=ut[$];j===void 0&&(j={type:void 0,texture:void 0},ut[$]=j),(j.type!==D||j.texture!==rt)&&(V!==$&&(n.activeTexture($),V=$),n.bindTexture(D,rt||et[D]),j.type=D,j.texture=rt)}function H(){const D=ut[V];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Yt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function mt(D){se.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function Dt(D,rt){let $=c.get(rt);$===void 0&&($=new WeakMap,c.set(rt,$));let j=$.get(D);j===void 0&&(j=n.getUniformBlockIndex(rt,D.name),$.set(D,j))}function Vt(D,rt){const j=c.get(rt).get(D);a.get(rt)!==j&&(n.uniformBlockBinding(rt,j,D.__bindingPointIndex),a.set(rt,j))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},V=null,ut={},h={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,d=null,w=null,S=null,T=null,N=null,R=new Tt(0,0,0),A=0,I=!1,E=null,M=null,L=null,z=null,k=null,Yt.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:gt,disable:dt,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:Xt,setBlending:ye,setMaterial:ie,setFlipSided:oe,setCullFace:St,setLineWidth:Se,setPolygonOffset:It,setScissorTest:Ft,activeTexture:b,bindTexture:x,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:ht,texImage3D:$t,updateUBOMapping:Dt,uniformBlockBinding:Vt,texStorage2D:Ot,texStorage3D:it,texSubImage2D:J,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:pe}}function uh(n,t,e,i){const r=Tx(i);switch(e){case ad:return n*t;case ld:return n*t;case ud:return n*t*2;case hd:return n*t/r.components*r.byteLength;case gl:return n*t/r.components*r.byteLength;case dd:return n*t*2/r.components*r.byteLength;case _l:return n*t*2/r.components*r.byteLength;case cd:return n*t*3/r.components*r.byteLength;case Mn:return n*t*4/r.components*r.byteLength;case vl:return n*t*4/r.components*r.byteLength;case Mo:case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case So:case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ec:case bc:return Math.max(n,16)*Math.max(t,8)/4;case wc:case Tc:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Eo:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fd:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tx(n){switch(n){case ei:case rd:return{byteLength:1,components:1};case _s:case sd:case Ts:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Wi:case fl:case jn:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return g?new OffscreenCanvas(b,x):Fo("canvas")}function v(b,x,H){let Q=1;const tt=Ft(b);if((tt.width>H||tt.height>H)&&(Q=H/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(Q*tt.width),wt=Math.floor(Q*tt.height);f===void 0&&(f=_(J,wt));const ct=x?_(J,wt):f;return ct.width=J,ct.height=wt,ct.getContext("2d").drawImage(b,0,0,J,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+wt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==hn&&b.minFilter!==xn}function d(b){n.generateMipmap(b)}function w(b,x,H,Q,tt=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=x;if(x===n.RED&&(H===n.FLOAT&&(J=n.R32F),H===n.HALF_FLOAT&&(J=n.R16F),H===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.R8UI),H===n.UNSIGNED_SHORT&&(J=n.R16UI),H===n.UNSIGNED_INT&&(J=n.R32UI),H===n.BYTE&&(J=n.R8I),H===n.SHORT&&(J=n.R16I),H===n.INT&&(J=n.R32I)),x===n.RG&&(H===n.FLOAT&&(J=n.RG32F),H===n.HALF_FLOAT&&(J=n.RG16F),H===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(J=n.RG8UI),H===n.UNSIGNED_SHORT&&(J=n.RG16UI),H===n.UNSIGNED_INT&&(J=n.RG32UI),H===n.BYTE&&(J=n.RG8I),H===n.SHORT&&(J=n.RG16I),H===n.INT&&(J=n.RG32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),x===n.RGBA){const wt=tt?Io:ee.getTransfer(Q);H===n.FLOAT&&(J=n.RGBA32F),H===n.HALF_FLOAT&&(J=n.RGBA16F),H===n.UNSIGNED_BYTE&&(J=wt===he?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(b,x){let H;return b?x===null||x===Wi||x===Ur?H=n.DEPTH24_STENCIL8:x===jn?H=n.DEPTH32F_STENCIL8:x===_s&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===Ur?H=n.DEPTH_COMPONENT24:x===jn?H=n.DEPTH_COMPONENT32F:x===_s&&(H=n.DEPTH_COMPONENT16),H}function T(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function N(b){const x=b.target;x.removeEventListener("dispose",N),A(x),x.isVideoTexture&&h.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),E(x)}function A(b){const x=i.get(b);if(x.__webglInit===void 0)return;const H=b.source,Q=p.get(H);if(Q){const tt=Q[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&I(b),Object.keys(Q).length===0&&p.delete(H)}i.remove(b)}function I(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const H=b.source,Q=p.get(H);delete Q[x.__cacheKey],o.memory.textures--}function E(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let tt=0;tt<x.__webglFramebuffer[Q].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[Q][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=b.textures;for(let Q=0,tt=H.length;Q<tt;Q++){const J=i.get(H[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(b)}let M=0;function L(){M=0}function z(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function k(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const H=i.get(b);if(b.isVideoTexture&&Se(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,b,x);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function K(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){se(H,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function W(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){se(H,b,x);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function Z(b,x){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Y(H,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const V={[yc]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[Sc]:n.MIRRORED_REPEAT},ut={[hn]:n.NEAREST,[Qp]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},pt={[im]:n.NEVER,[lm]:n.ALWAYS,[rm]:n.LESS,[md]:n.LEQUAL,[sm]:n.EQUAL,[cm]:n.GEQUAL,[om]:n.GREATER,[am]:n.NOTEQUAL};function Mt(b,x){if(x.type===jn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===Ca||x.magFilter===Bs||x.magFilter===ki||x.minFilter===xn||x.minFilter===Ca||x.minFilter===Bs||x.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,V[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,V[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,V[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ut[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==Bs&&x.minFilter!==ki||x.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(b,x){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N));const Q=x.source;let tt=p.get(Q);tt===void 0&&(tt={},p.set(Q,tt));const J=k(x);if(J!==b.__cacheKey){tt[J]===void 0&&(tt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[J].usedTimes++;const wt=tt[b.__cacheKey];wt!==void 0&&(tt[b.__cacheKey].usedTimes--,wt.usedTimes===0&&I(x)),b.__cacheKey=J,b.__webglTexture=tt[J].texture}return H}function se(b,x,H){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const tt=Yt(b,x),J=x.source;e.bindTexture(Q,b.__webglTexture,n.TEXTURE0+H);const wt=i.get(J);if(J.version!==wt.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const ct=ee.getPrimaries(ee.workingColorSpace),ft=x.colorSpace===di?null:ee.getPrimaries(x.colorSpace),Ot=x.colorSpace===di||ct===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let it=v(x.image,!1,r.maxTextureSize);it=It(x,it);const ht=s.convert(x.format,x.colorSpace),$t=s.convert(x.type);let Pt=w(x.internalFormat,ht,$t,x.colorSpace,x.isVideoTexture);Mt(Q,x);let mt;const Dt=x.mipmaps,Vt=x.isVideoTexture!==!0,pe=wt.__version===void 0||tt===!0,D=J.dataReady,rt=T(x,it);if(x.isDepthTexture)Pt=S(x.format===Nr,x.type),pe&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,ht,$t,null));else if(x.isDataTexture)if(Dt.length>0){Vt&&pe&&e.texStorage2D(n.TEXTURE_2D,rt,Pt,Dt[0].width,Dt[0].height);for(let $=0,j=Dt.length;$<j;$++)mt=Dt[$],Vt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ht,$t,mt.data):e.texImage2D(n.TEXTURE_2D,$,Pt,mt.width,mt.height,0,ht,$t,mt.data);x.generateMipmaps=!1}else Vt?(pe&&e.texStorage2D(n.TEXTURE_2D,rt,Pt,it.width,it.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,ht,$t,it.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,it.width,it.height,0,ht,$t,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Pt,Dt[0].width,Dt[0].height,it.depth);for(let $=0,j=Dt.length;$<j;$++)if(mt=Dt[$],x.format!==Mn)if(ht!==null)if(Vt){if(D)if(x.layerUpdates.size>0){const ot=uh(mt.width,mt.height,x.format,x.type);for(const At of x.layerUpdates){const Kt=mt.data.subarray(At*ot/mt.data.BYTES_PER_ELEMENT,(At+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,At,mt.width,mt.height,1,ht,Kt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,it.depth,ht,mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Pt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,it.depth,ht,$t,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Pt,mt.width,mt.height,it.depth,0,ht,$t,mt.data)}else{Vt&&pe&&e.texStorage2D(n.TEXTURE_2D,rt,Pt,Dt[0].width,Dt[0].height);for(let $=0,j=Dt.length;$<j;$++)mt=Dt[$],x.format!==Mn?ht!==null?Vt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ht,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ht,$t,mt.data):e.texImage2D(n.TEXTURE_2D,$,Pt,mt.width,mt.height,0,ht,$t,mt.data)}else if(x.isDataArrayTexture)if(Vt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Pt,it.width,it.height,it.depth),D)if(x.layerUpdates.size>0){const $=uh(it.width,it.height,x.format,x.type);for(const j of x.layerUpdates){const ot=it.data.subarray(j*$/it.data.BYTES_PER_ELEMENT,(j+1)*$/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,ht,$t,ot)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,$t,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,ht,$t,it.data);else if(x.isData3DTexture)Vt?(pe&&e.texStorage3D(n.TEXTURE_3D,rt,Pt,it.width,it.height,it.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,$t,it.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,ht,$t,it.data);else if(x.isFramebufferTexture){if(pe)if(Vt)e.texStorage2D(n.TEXTURE_2D,rt,Pt,it.width,it.height);else{let $=it.width,j=it.height;for(let ot=0;ot<rt;ot++)e.texImage2D(n.TEXTURE_2D,ot,Pt,$,j,0,ht,$t,null),$>>=1,j>>=1}}else if(Dt.length>0){if(Vt&&pe){const $=Ft(Dt[0]);e.texStorage2D(n.TEXTURE_2D,rt,Pt,$.width,$.height)}for(let $=0,j=Dt.length;$<j;$++)mt=Dt[$],Vt?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,ht,$t,mt):e.texImage2D(n.TEXTURE_2D,$,Pt,ht,$t,mt);x.generateMipmaps=!1}else if(Vt){if(pe){const $=Ft(it);e.texStorage2D(n.TEXTURE_2D,rt,Pt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,$t,it)}else e.texImage2D(n.TEXTURE_2D,0,Pt,ht,$t,it);m(x)&&d(Q),wt.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Y(b,x,H){if(x.image.length!==6)return;const Q=Yt(b,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const J=i.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const wt=ee.getPrimaries(ee.workingColorSpace),ct=x.colorSpace===di?null:ee.getPrimaries(x.colorSpace),ft=x.colorSpace===di||wt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ot=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!Ot&&!it?ht[j]=v(x.image[j],!0,r.maxCubemapSize):ht[j]=it?x.image[j].image:x.image[j],ht[j]=It(x,ht[j]);const $t=ht[0],Pt=s.convert(x.format,x.colorSpace),mt=s.convert(x.type),Dt=w(x.internalFormat,Pt,mt,x.colorSpace),Vt=x.isVideoTexture!==!0,pe=J.__version===void 0||Q===!0,D=tt.dataReady;let rt=T(x,$t);Mt(n.TEXTURE_CUBE_MAP,x);let $;if(Ot){Vt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Dt,$t.width,$t.height);for(let j=0;j<6;j++){$=ht[j].mipmaps;for(let ot=0;ot<$.length;ot++){const At=$[ot];x.format!==Mn?Pt!==null?Vt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Dt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,At.width,At.height,Pt,mt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Dt,At.width,At.height,0,Pt,mt,At.data)}}}else{if($=x.mipmaps,Vt&&pe){$.length>0&&rt++;const j=Ft(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,Dt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Vt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,Pt,mt,ht[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,ht[j].width,ht[j].height,0,Pt,mt,ht[j].data);for(let ot=0;ot<$.length;ot++){const Kt=$[ot].image[j].image;Vt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Kt.width,Kt.height,Pt,mt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Dt,Kt.width,Kt.height,0,Pt,mt,Kt.data)}}else{Vt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,mt,ht[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Dt,Pt,mt,ht[j]);for(let ot=0;ot<$.length;ot++){const At=$[ot];Vt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Pt,mt,At.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Dt,Pt,mt,At.image[j])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),J.__version=tt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,H,Q,tt,J){const wt=s.convert(H.format,H.colorSpace),ct=s.convert(H.type),ft=w(H.internalFormat,wt,ct,H.colorSpace);if(!i.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>J),ht=Math.max(1,x.height>>J);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,ft,it,ht,x.depth,0,wt,ct,null):e.texImage2D(tt,J,ft,it,ht,0,wt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),St(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,tt,i.get(H).__webglTexture,0,oe(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,tt,i.get(H).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(b,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const Q=x.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=S(x.stencilBuffer,tt),wt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=oe(x);St(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,J,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,b)}else{const Q=x.textures;for(let tt=0;tt<Q.length;tt++){const J=Q[tt],wt=s.convert(J.format,J.colorSpace),ct=s.convert(J.type),ft=w(J.internalFormat,wt,ct,J.colorSpace),Ot=oe(x);H&&St(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,ft,x.width,x.height):St(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot,ft,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ft,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,tt=oe(x);if(x.depthTexture.format===Cr)St(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Nr)St(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(b){const x=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,b)}else if(H){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),gt(x.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),gt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(b,x,H){const Q=i.get(b);x!==void 0&&et(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Nt(b)}function Xt(b){const x=b.texture,H=i.get(b),Q=i.get(x);b.addEventListener("dispose",R);const tt=b.textures,J=b.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let ft=0;ft<x.mipmaps.length;ft++)H.__webglFramebuffer[ct][ft]=n.createFramebuffer()}else H.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)H.__webglFramebuffer[ct]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ct=0,ft=tt.length;ct<ft;ct++){const Ot=i.get(tt[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&St(b)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const ft=tt[ct];H.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const Ot=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),ht=w(ft.internalFormat,Ot,it,ft.colorSpace,b.isXRRenderTarget===!0),$t=oe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,$t,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)et(H.__webglFramebuffer[ct][ft],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else et(H.__webglFramebuffer[ct],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,ft=tt.length;ct<ft;ct++){const Ot=tt[ct],it=i.get(Ot);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Mt(n.TEXTURE_2D,Ot),et(H.__webglFramebuffer,b,Ot,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Ot)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Mt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)et(H.__webglFramebuffer[ft],b,x,n.COLOR_ATTACHMENT0,ct,ft);else et(H.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ct,0);m(x)&&d(ct),e.unbindTexture()}b.depthBuffer&&Nt(b)}function ge(b){const x=b.textures;for(let H=0,Q=x.length;H<Q;H++){const tt=x[H];if(m(tt)){const J=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,wt=i.get(tt).__webglTexture;e.bindTexture(J,wt),d(J),e.unbindTexture()}}}const P=[],ye=[];function ie(b){if(b.samples>0){if(St(b)===!1){const x=b.textures,H=b.width,Q=b.height;let tt=n.COLOR_BUFFER_BIT;const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(b),ct=x.length>1;if(ct)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);const Ot=i.get(x[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ot,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,tt,n.NEAREST),c===!0&&(P.length=0,ye.length=0,P.push(n.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(P.push(J),ye.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ft]);const Ot=i.get(x[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function oe(b){return Math.min(r.maxSamples,b.samples)}function St(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function It(b,x){const H=b.colorSpace,Q=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==xi&&H!==di&&(ee.getTransfer(H)===he?(Q!==Mn||tt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Ft(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Gt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=St}function Ax(n,t){function e(i,r=di){let s;const o=ee.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.BYTE;if(i===sd)return n.SHORT;if(i===_s)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===cd)return n.RGB;if(i===Mn)return n.RGBA;if(i===ld)return n.LUMINANCE;if(i===ud)return n.LUMINANCE_ALPHA;if(i===Cr)return n.DEPTH_COMPONENT;if(i===Nr)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===gl)return n.RED_INTEGER;if(i===dd)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Mo||i===yo||i===So||i===wo)if(o===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wc||i===Ec||i===Tc||i===bc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Rc||i===Cc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ac||i===Rc)return o===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pc||i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Wc||i===Xc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return o===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fd||i===qc||i===Yc||i===$c)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Rx extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cx={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Xe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new vi({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends zr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,g=null,_=null;const v=new Ix,m=e.getContextAttributes();let d=null,w=null;const S=[],T=[],N=new Ht;let R=null;const A=new en;A.layers.enable(1),A.viewport=new de;const I=new en;I.layers.enable(2),I.viewport=new de;const E=[A,I],M=new Rx;M.layers.enable(1),M.layers.enable(2);let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=S[Y];return et===void 0&&(et=new tc,S[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=S[Y];return et===void 0&&(et=new tc,S[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=S[Y];return et===void 0&&(et=new tc,S[Y]=et),et.getHandSpace()};function k(Y){const et=T.indexOf(Y.inputSource);if(et===-1)return;const gt=S[et];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,l||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const et=T[Y];et!==null&&(T[Y]=null,S[Y].disconnect(et))}L=null,z=null,v.reset(),t.setRenderTarget(d),g=null,p=null,f=null,r=null,w=null,se.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Xi(g.framebufferWidth,g.framebufferHeight,{format:Mn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,gt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Nr:Cr,gt=m.stencil?Ur:Wi);const Nt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(Nt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new Xi(p.textureWidth,p.textureHeight,{format:Mn,type:ei,depthTexture:new Ad(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Y){for(let et=0;et<Y.removed.length;et++){const gt=Y.removed[et],dt=T.indexOf(gt);dt>=0&&(T[dt]=null,S[dt].disconnect(gt))}for(let et=0;et<Y.added.length;et++){const gt=Y.added[et];let dt=T.indexOf(gt);if(dt===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=T.length){T.push(gt),dt=Gt;break}else if(T[Gt]===null){T[Gt]=gt,dt=Gt;break}if(dt===-1)break}const Nt=S[dt];Nt&&Nt.connect(gt)}}const W=new C,Z=new C;function V(Y,et,gt){W.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const dt=W.distanceTo(Z),Nt=et.projectionMatrix.elements,Gt=gt.projectionMatrix.elements,Xt=Nt[14]/(Nt[10]-1),ge=Nt[14]/(Nt[10]+1),P=(Nt[9]+1)/Nt[5],ye=(Nt[9]-1)/Nt[5],ie=(Nt[8]-1)/Nt[0],oe=(Gt[8]+1)/Gt[0],St=Xt*ie,Se=Xt*oe,It=dt/(-ie+oe),Ft=It*-ie;et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ft),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Xt+It,x=ge+It,H=St-Ft,Q=Se+(dt-Ft),tt=P*ge/x*b,J=ye*ge/x*b;Y.projectionMatrix.makePerspective(H,Q,tt,J,b,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ut(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),M.near=I.near=A.near=Y.near,M.far=I.far=A.far=Y.far,(L!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far,A.near=L,A.far=z,I.near=L,I.far=z,A.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());const et=Y.parent,gt=M.cameras;ut(M,et);for(let dt=0;dt<gt.length;dt++)ut(gt[dt],et);gt.length===2?V(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),pt(Y,M,et)};function pt(Y,et,gt){gt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Mt=null;function Yt(Y,et){if(h=et.getViewerPose(l||o),_=et,h!==null){const gt=h.views;g!==null&&(t.setRenderTargetFramebuffer(w,g.framebuffer),t.setRenderTarget(w));let dt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,dt=!0);for(let Gt=0;Gt<gt.length;Gt++){const Xt=gt[Gt];let ge=null;if(g!==null)ge=g.getViewport(Xt);else{const ye=f.getViewSubImage(p,Xt);ge=ye.viewport,Gt===0&&(t.setRenderTargetTextures(w,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(w))}let P=E[Gt];P===void 0&&(P=new en,P.layers.enable(Gt),P.viewport=new de,E[Gt]=P),P.matrix.fromArray(Xt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Xt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ge.x,ge.y,ge.width,ge.height),Gt===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),dt===!0&&M.cameras.push(P)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Gt=f.getDepthInformation(gt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,r.renderState)}}for(let gt=0;gt<S.length;gt++){const dt=T[gt],Nt=S[gt];dt!==null&&Nt!==void 0&&Nt.update(dt,et,l||o)}Mt&&Mt(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const se=new Td;se.setAnimationLoop(Yt),this.setAnimationLoop=function(Y){Mt=Y},this.dispose=function(){}}}const Ri=new Un,Ux=new fe;function Nx(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Sd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,S,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,w,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ze&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ze&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d),S=w.envMap,T=w.envMapRotation;S&&(m.envMap.value=S,Ri.copy(T),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Ri)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const T=S.program;i.uniformBlockBinding(w,T)}function l(w,S){let T=r[w.id];T===void 0&&(_(w),T=h(w),r[w.id]=T,w.addEventListener("dispose",m));const N=S.program;i.updateUBOMapping(w,N);const R=t.render.frame;s[w.id]!==R&&(p(w),s[w.id]=R)}function h(w){const S=f();w.__bindingPointIndex=S;const T=n.createBuffer(),N=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,N,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const S=r[w.id],T=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,A=T.length;R<A;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let E=0,M=I.length;E<M;E++){const L=I[E];if(g(L,R,E,N)===!0){const z=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let K=0;K<k.length;K++){const W=k[K],Z=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+q,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(w,S,T,N){const R=w.value,A=S+"_"+T;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const I=N[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return N[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(w){const S=w.uniforms;let T=0;const N=16;for(let A=0,I=S.length;A<I;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,L=E.length;M<L;M++){const z=E[M],k=Array.isArray(z.value)?z.value:[z.value];for(let q=0,K=k.length;q<K;q++){const W=k[q],Z=v(W),V=T%N,ut=V%Z.boundary,pt=V+ut;T+=ut,pt!==0&&N-pt<Z.storage&&(T+=N-pt),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=Z.storage}}}const R=T%N;return R>0&&(T+=N-R),w.__size=T,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Ox{constructor(t={}){const{canvas:e=Am(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const d=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=mi,this.toneMappingExposure=1;const S=this;let T=!1,N=0,R=0,A=null,I=-1,E=null;const M=new de,L=new de;let z=null;const k=new Tt(0);let q=0,K=e.width,W=e.height,Z=1,V=null,ut=null;const pt=new de(0,0,K,W),Mt=new de(0,0,K,W);let Yt=!1;const se=new Sl;let Y=!1,et=!1;const gt=new fe,dt=new C,Nt=new de,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ge(){return A===null?Z:1}let P=i;function ye(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",ot,!1),P===null){const U="webgl2";if(P=ye(U,y),P===null)throw ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ie,oe,St,Se,It,Ft,b,x,H,Q,tt,J,wt,ct,ft,Ot,it,ht,$t,Pt,mt,Dt,Vt,pe;function D(){ie=new V_(P),ie.init(),Dt=new Ax(P,ie),oe=new O_(P,ie,t,Dt),St=new Ex(P),Se=new q_(P),It=new ux,Ft=new bx(P,ie,St,It,oe,Dt,Se),b=new k_(S),x=new G_(S),H=new Qm(P),Vt=new N_(P,H),Q=new W_(P,H,Se,Vt),tt=new $_(P,Q,H,Se),$t=new Y_(P,oe,Ft),Ot=new B_(It),J=new lx(S,b,x,ie,oe,Vt,Ot),wt=new Nx(S,It),ct=new dx,ft=new vx(ie),ht=new U_(S,b,x,St,tt,p,c),it=new wx(S,tt,oe),pe=new Fx(P,Se,oe,St),Pt=new F_(P,ie,Se),mt=new X_(P,ie,Se),Se.programs=J.programs,S.capabilities=oe,S.extensions=ie,S.properties=It,S.renderLists=ct,S.shadowMap=it,S.state=St,S.info=Se}D();const rt=new Dx(S,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(K,W,!1))},this.getSize=function(y){return y.set(K,W)},this.setSize=function(y,U,O=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,W=U,e.width=Math.floor(y*Z),e.height=Math.floor(U*Z),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(K*Z,W*Z).floor()},this.setDrawingBufferSize=function(y,U,O){K=y,W=U,Z=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(M)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,U,O,B){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,U,O,B),St.viewport(M.copy(pt).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,U,O,B){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,U,O,B),St.scissor(L.copy(Mt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){St.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(y=!0,U=!0,O=!0){let B=0;if(y){let F=!1;if(A!==null){const st=A.texture.format;F=st===vl||st===_l||st===gl}if(F){const st=A.texture.type,lt=st===ei||st===Wi||st===_s||st===Ur||st===pl||st===ml,_t=ht.getClearColor(),vt=ht.getClearAlpha(),Rt=_t.r,Ct=_t.g,Et=_t.b;lt?(g[0]=Rt,g[1]=Ct,g[2]=Et,g[3]=vt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Rt,_[1]=Ct,_[2]=Et,_[3]=vt,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),O&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ct.dispose(),ft.dispose(),It.dispose(),b.dispose(),x.dispose(),tt.dispose(),Vt.dispose(),pe.dispose(),J.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",En),rt.removeEventListener("sessionend",cu),Si.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=Se.autoReset,U=it.enabled,O=it.autoUpdate,B=it.needsUpdate,F=it.type;D(),Se.autoReset=y,it.enabled=U,it.autoUpdate=O,it.needsUpdate=B,it.type=F}function ot(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function At(y){const U=y.target;U.removeEventListener("dispose",At),Kt(U)}function Kt(y){we(y),It.remove(y)}function we(y){const U=It.get(y).programs;U!==void 0&&(U.forEach(function(O){J.releaseProgram(O)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,B,F,st){U===null&&(U=Gt);const lt=F.isMesh&&F.matrixWorld.determinant()<0,_t=fp(y,U,O,B,F);St.setMaterial(B,lt);let vt=O.index,Rt=1;if(B.wireframe===!0){if(vt=Q.getWireframeAttribute(O),vt===void 0)return;Rt=2}const Ct=O.drawRange,Et=O.attributes.position;let Jt=Ct.start*Rt,_e=(Ct.start+Ct.count)*Rt;st!==null&&(Jt=Math.max(Jt,st.start*Rt),_e=Math.min(_e,(st.start+st.count)*Rt)),vt!==null?(Jt=Math.max(Jt,0),_e=Math.min(_e,vt.count)):Et!=null&&(Jt=Math.max(Jt,0),_e=Math.min(_e,Et.count));const ve=_e-Jt;if(ve<0||ve===1/0)return;Vt.setup(F,B,_t,O,vt);let Ze,Qt=Pt;if(vt!==null&&(Ze=H.get(vt),Qt=mt,Qt.setIndex(Ze)),F.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*ge()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(F.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*ge()),F.isLineSegments?Qt.setMode(P.LINES):F.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else F.isPoints?Qt.setMode(P.POINTS):F.isSprite&&Qt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,Ue=F._multiDrawCounts,te=F._multiDrawCount,pn=vt?H.get(vt).bytesPerElement:1,nr=It.get(B).currentProgram.getUniforms();for(let Je=0;Je<te;Je++)nr.setValue(P,"_gl_DrawID",Je),Qt.render(yt[Je]/pn,Ue[Je])}else if(F.isInstancedMesh)Qt.renderInstances(Jt,ve,F.count);else if(O.isInstancedBufferGeometry){const yt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ue=Math.min(O.instanceCount,yt);Qt.renderInstances(Jt,ve,Ue)}else Qt.render(Jt,ve)};function De(y,U,O){y.transparent===!0&&y.side===An&&y.forceSinglePass===!1?(y.side=ze,y.needsUpdate=!0,Os(y,U,O),y.side=_i,y.needsUpdate=!0,Os(y,U,O),y.side=An):Os(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),m=ft.get(O),m.init(U),w.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),y!==O&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const B=new Set;return y.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let lt=0;lt<st.length;lt++){const _t=st[lt];De(_t,O,F),B.add(_t)}else De(st,O,F),B.add(st)}),w.pop(),m=null,B},this.compileAsync=function(y,U,O=null){const B=this.compile(y,U,O);return new Promise(F=>{function st(){if(B.forEach(function(lt){It.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){F(y);return}setTimeout(st,10)}ie.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Zt=null;function Bn(y){Zt&&Zt(y)}function En(){Si.stop()}function cu(){Si.start()}const Si=new Td;Si.setAnimationLoop(Bn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){Zt=y,rt.setAnimationLoop(y),y===null?Si.stop():Si.start()},rt.addEventListener("sessionstart",En),rt.addEventListener("sessionend",cu),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,A),m=ft.get(y,w.length),m.init(U),w.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(gt),et=this.localClippingEnabled,Y=Ot.init(this.clippingPlanes,et),v=ct.get(y,d.length),v.init(),d.push(v),rt.enabled===!0&&rt.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Ta(st,U,-1/0,S.sortObjects)}Ta(y,U,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(V,ut),Xt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Xt&&ht.addToRenderList(v,y),this.info.render.frame++,Y===!0&&Ot.beginShadows();const O=m.state.shadowsArray;it.render(O,y,U),Y===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,F=v.transmissive;if(m.setupLights(),U.isArrayCamera){const st=U.cameras;if(F.length>0)for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];uu(B,F,y,vt)}Xt&&ht.render(y);for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];lu(v,y,vt,vt.viewport)}}else F.length>0&&uu(B,F,y,U),Xt&&ht.render(y),lu(v,y,U);A!==null&&(Ft.updateMultisampleRenderTarget(A),Ft.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(S,y,U),Vt.resetDefaultState(),I=-1,E=null,w.pop(),w.length>0?(m=w[w.length-1],Y===!0&&Ot.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ta(y,U,O,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||se.intersectsSprite(y)){B&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const lt=tt.update(y),_t=y.material;_t.visible&&v.push(y,lt,_t,O,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||se.intersectsObject(y))){const lt=tt.update(y),_t=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Nt.copy(lt.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(_t)){const vt=lt.groups;for(let Rt=0,Ct=vt.length;Rt<Ct;Rt++){const Et=vt[Rt],Jt=_t[Et.materialIndex];Jt&&Jt.visible&&v.push(y,lt,Jt,O,Nt.z,Et)}}else _t.visible&&v.push(y,lt,_t,O,Nt.z,null)}}const st=y.children;for(let lt=0,_t=st.length;lt<_t;lt++)Ta(st[lt],U,O,B)}function lu(y,U,O,B){const F=y.opaque,st=y.transmissive,lt=y.transparent;m.setupLightsView(O),Y===!0&&Ot.setGlobalState(S.clippingPlanes,O),B&&St.viewport(M.copy(B)),F.length>0&&Fs(F,U,O),st.length>0&&Fs(st,U,O),lt.length>0&&Fs(lt,U,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function uu(y,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Xi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Ts:ei,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=m.state.transmissionRenderTarget[B.id],lt=B.viewport||M;st.setSize(lt.z,lt.w);const _t=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(k),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Xt&&ht.render(O);const vt=S.toneMapping;S.toneMapping=mi;const Rt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),Y===!0&&Ot.setGlobalState(S.clippingPlanes,B),Fs(y,O,B),Ft.updateMultisampleRenderTarget(st),Ft.updateRenderTargetMipmap(st),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Et=0,Jt=U.length;Et<Jt;Et++){const _e=U[Et],ve=_e.object,Ze=_e.geometry,Qt=_e.material,yt=_e.group;if(Qt.side===An&&ve.layers.test(B.layers)){const Ue=Qt.side;Qt.side=ze,Qt.needsUpdate=!0,hu(ve,O,B,Ze,Qt,yt),Qt.side=Ue,Qt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Ft.updateMultisampleRenderTarget(st),Ft.updateRenderTargetMipmap(st))}S.setRenderTarget(_t),S.setClearColor(k,q),Rt!==void 0&&(B.viewport=Rt),S.toneMapping=vt}function Fs(y,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,st=y.length;F<st;F++){const lt=y[F],_t=lt.object,vt=lt.geometry,Rt=B===null?lt.material:B,Ct=lt.group;_t.layers.test(O.layers)&&hu(_t,U,O,vt,Rt,Ct)}}function hu(y,U,O,B,F,st){y.onBeforeRender(S,U,O,B,F,st),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.transparent===!0&&F.side===An&&F.forceSinglePass===!1?(F.side=ze,F.needsUpdate=!0,S.renderBufferDirect(O,U,B,F,y,st),F.side=_i,F.needsUpdate=!0,S.renderBufferDirect(O,U,B,F,y,st),F.side=An):S.renderBufferDirect(O,U,B,F,y,st),y.onAfterRender(S,U,O,B,F,st)}function Os(y,U,O){U.isScene!==!0&&(U=Gt);const B=It.get(y),F=m.state.lights,st=m.state.shadowsArray,lt=F.state.version,_t=J.getParameters(y,F.state,st,U,O),vt=J.getProgramCacheKey(_t);let Rt=B.programs;B.environment=y.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(y.isMeshStandardMaterial?x:b).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",At),Rt=new Map,B.programs=Rt);let Ct=Rt.get(vt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===lt)return fu(y,_t),Ct}else _t.uniforms=J.getUniforms(y),y.onBeforeCompile(_t,S),Ct=J.acquireProgram(_t,vt),Rt.set(vt,Ct),B.uniforms=_t.uniforms;const Et=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=Ot.uniform),fu(y,_t),B.needsLights=mp(y),B.lightsStateVersion=lt,B.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function du(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=To.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function fu(y,U){const O=It.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function fp(y,U,O,B,F){U.isScene!==!0&&(U=Gt),Ft.resetTextureUnits();const st=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,_t=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,vt=(B.isMeshStandardMaterial?x:b).get(B.envMap||lt),Rt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!O.morphAttributes.position,Jt=!!O.morphAttributes.normal,_e=!!O.morphAttributes.color;let ve=mi;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=S.toneMapping);const Ze=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qt=Ze!==void 0?Ze.length:0,yt=It.get(B),Ue=m.state.lights;if(Y===!0&&(et===!0||y!==E)){const on=y===E&&B.id===I;Ot.setState(B,y,on)}let te=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ue.state.version||yt.outputColorSpace!==_t||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==vt||B.fog===!0&&yt.fog!==st||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ot.numPlanes||yt.numIntersection!==Ot.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Ct||yt.morphTargets!==Et||yt.morphNormals!==Jt||yt.morphColors!==_e||yt.toneMapping!==ve||yt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,yt.__version=B.version);let pn=yt.currentProgram;te===!0&&(pn=Os(B,U,F));let nr=!1,Je=!1,ba=!1;const Ee=pn.getUniforms(),ri=yt.uniforms;if(St.useProgram(pn.program)&&(nr=!0,Je=!0,ba=!0),B.id!==I&&(I=B.id,Je=!0),nr||E!==y){Ee.setValue(P,"projectionMatrix",y.projectionMatrix),Ee.setValue(P,"viewMatrix",y.matrixWorldInverse);const on=Ee.map.cameraPosition;on!==void 0&&on.setValue(P,dt.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Je=!0,ba=!0)}if(F.isSkinnedMesh){Ee.setOptional(P,F,"bindMatrix"),Ee.setOptional(P,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ee.setValue(P,"boneTexture",on.boneTexture,Ft))}F.isBatchedMesh&&(Ee.setOptional(P,F,"batchingTexture"),Ee.setValue(P,"batchingTexture",F._matricesTexture,Ft),Ee.setOptional(P,F,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",F._indirectTexture,Ft),Ee.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",F._colorsTexture,Ft));const Aa=O.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&$t.update(F,O,pn),(Je||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,Ee.setValue(P,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ri.envMap.value=vt,ri.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(ri.envMapIntensity.value=U.environmentIntensity),Je&&(Ee.setValue(P,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&pp(ri,ba),st&&B.fog===!0&&wt.refreshFogUniforms(ri,st),wt.refreshMaterialUniforms(ri,B,Z,W,m.state.transmissionRenderTarget[y.id]),To.upload(P,du(yt),ri,Ft)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(To.upload(P,du(yt),ri,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ee.setValue(P,"center",F.center),Ee.setValue(P,"modelViewMatrix",F.modelViewMatrix),Ee.setValue(P,"normalMatrix",F.normalMatrix),Ee.setValue(P,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const on=B.uniformsGroups;for(let Ra=0,gp=on.length;Ra<gp;Ra++){const pu=on[Ra];pe.update(pu,pn),pe.bind(pu,pn)}}return pn}function pp(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function mp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,O){It.get(y.texture).__webglTexture=U,It.get(y.depthTexture).__webglTexture=O;const B=It.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const O=It.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,O=0){A=y,N=U,R=O;let B=!0,F=null,st=!1,lt=!1;if(y){const vt=It.get(y);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):vt.__webglFramebuffer===void 0?Ft.setupRenderTarget(y):vt.__hasExternalTextures&&Ft.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Ct=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?F=Ct[U][O]:F=Ct[U],st=!0):y.samples>0&&Ft.useMultisampledRTT(y)===!1?F=It.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?F=Ct[O]:F=Ct,M.copy(y.viewport),L.copy(y.scissor),z=y.scissorTest}else M.copy(pt).multiplyScalar(Z).floor(),L.copy(Mt).multiplyScalar(Z).floor(),z=Yt;if(St.bindFramebuffer(P.FRAMEBUFFER,F)&&B&&St.drawBuffers(y,F),St.viewport(M),St.scissor(L),St.setScissorTest(z),st){const vt=It.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,O)}else if(lt){const vt=It.get(y.texture),Rt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,O||0,Rt)}I=-1},this.readRenderTargetPixels=function(y,U,O,B,F,st,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){St.bindFramebuffer(P.FRAMEBUFFER,_t);try{const vt=y.texture,Rt=vt.format,Ct=vt.type;if(!oe.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&O>=0&&O<=y.height-F&&P.readPixels(U,O,B,F,Dt.convert(Rt),Dt.convert(Ct),st)}finally{const vt=A!==null?It.get(A).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,B,F,st,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){St.bindFramebuffer(P.FRAMEBUFFER,_t);try{const vt=y.texture,Rt=vt.format,Ct=vt.type;if(!oe.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-B&&O>=0&&O<=y.height-F){const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(U,O,B,F,Dt.convert(Rt),Dt.convert(Ct),0),P.flush();const Jt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Rm(P,Jt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st)}finally{P.deleteBuffer(Et),P.deleteSync(Jt)}return st}}finally{const vt=A!==null?It.get(A).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(y,U=null,O=0){y.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),F=Math.floor(y.image.width*B),st=Math.floor(y.image.height*B),lt=U!==null?U.x:0,_t=U!==null?U.y:0;Ft.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,lt,_t,F,st),St.unbindTexture()},this.copyTextureToTexture=function(y,U,O=null,B=null,F=0){y.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let st,lt,_t,vt,Rt,Ct;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.min.x,vt=O.min.y):(st=y.image.width,lt=y.image.height,_t=0,vt=0),B!==null?(Rt=B.x,Ct=B.y):(Rt=0,Ct=0);const Et=Dt.convert(U.format),Jt=Dt.convert(U.type);Ft.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const _e=P.getParameter(P.UNPACK_ROW_LENGTH),ve=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=P.getParameter(P.UNPACK_SKIP_PIXELS),Qt=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ue=y.isCompressedTexture?y.mipmaps[F]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_t),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Rt,Ct,st,lt,Et,Jt,Ue.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Rt,Ct,Ue.width,Ue.height,Et,Ue.data):P.texSubImage2D(P.TEXTURE_2D,F,Rt,Ct,st,lt,Et,Jt,Ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,_e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(y,U,O=null,B=null,F=0){y.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0);let st,lt,_t,vt,Rt,Ct,Et,Jt,_e;const ve=y.isCompressedTexture?y.mipmaps[F]:y.image;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.max.z-O.min.z,vt=O.min.x,Rt=O.min.y,Ct=O.min.z):(st=ve.width,lt=ve.height,_t=ve.depth,vt=0,Rt=0,Ct=0),B!==null?(Et=B.x,Jt=B.y,_e=B.z):(Et=0,Jt=0,_e=0);const Ze=Dt.convert(U.format),Qt=Dt.convert(U.type);let yt;if(U.isData3DTexture)Ft.setTexture3D(U,0),yt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ft.setTexture2DArray(U,0),yt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ue=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),nr=P.getParameter(P.UNPACK_SKIP_ROWS),Je=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(yt,F,Et,Jt,_e,st,lt,_t,Ze,Qt,ve.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,F,Et,Jt,_e,st,lt,_t,Ze,ve.data):P.texSubImage3D(yt,F,Et,Jt,_e,st,lt,_t,Ze,Qt,ve),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,nr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je),F===0&&U.generateMipmaps&&P.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&Ft.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ft.setTextureCube(y,0):y.isData3DTexture?Ft.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ft.setTexture2DArray(y,0):Ft.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){N=0,R=0,A=null,St.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xl?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===qo?"display-p3":"srgb"}}class El{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bx extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Id extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oo=new C,Bo=new C,hh=new fe,es=new Yo,oo=new Rs,ec=new C,dh=new C;class kx extends Re{constructor(t=new Ye,e=new Id){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Oo.fromBufferAttribute(e,r-1),Bo.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Oo.distanceTo(Bo);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,t.ray.intersectsSphere(oo)===!1)return;hh.copy(r).invert(),es.copy(t.ray).applyMatrix4(hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=g,m=_-1;v<m;v+=l){const d=h.getX(v),w=h.getX(v+1),S=ao(this,t,es,c,d,w);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(g),d=ao(this,t,es,c,v,m);d&&e.push(d)}}else{const g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=g,m=_-1;v<m;v+=l){const d=ao(this,t,es,c,v,v+1);d&&e.push(d)}if(this.isLineLoop){const v=ao(this,t,es,c,_-1,g);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ao(n,t,e,i,r,s){const o=n.geometry.attributes.position;if(Oo.fromBufferAttribute(o,r),Bo.fromBufferAttribute(o,s),e.distanceSqToSegment(Oo,Bo,ec,dh)>i)return;ec.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ec);if(!(c<t.near||c>t.far))return{distance:c,point:dh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class zx extends kx{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Dd extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fh=new fe,jc=new Yo,co=new Rs,lo=new C;class Hx extends Re{constructor(t=new Ye,e=new Dd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,t.ray.intersectsSphere(co)===!1)return;fh.copy(r).invert(),jc.copy(t.ray).applyMatrix4(fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const p=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=p,v=g;_<v;_++){const m=l.getX(_);lo.fromBufferAttribute(f,m),ph(lo,m,c,r,t,e,this)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,v=g;_<v;_++)lo.fromBufferAttribute(f,_),ph(lo,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ph(n,t,e,i,r,s,o){const a=jc.distanceSqToPoint(n);if(a<e){const c=new C;jc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Ud extends Xe{constructor(t,e,i,r,s,o,a,c,l){super(t,e,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ae extends Ye{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],g=[];let _=0;const v=[],m=i/2;let d=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(p,3)),this.setAttribute("uv",new Ae(g,2));function w(){const T=new C,N=new C;let R=0;const A=(e-t)/i;for(let I=0;I<=s;I++){const E=[],M=I/s,L=M*(e-t)+t;for(let z=0;z<=r;z++){const k=z/r,q=k*c+a,K=Math.sin(q),W=Math.cos(q);N.x=L*K,N.y=-M*i+m,N.z=L*W,f.push(N.x,N.y,N.z),T.set(K,A,W).normalize(),p.push(T.x,T.y,T.z),g.push(k,1-M),E.push(_++)}v.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const M=v[E][I],L=v[E+1][I],z=v[E+1][I+1],k=v[E][I+1];h.push(M,L,k),h.push(L,z,k),R+=6}l.addGroup(d,R,0),d+=R}function S(T){const N=_,R=new Ht,A=new C;let I=0;const E=T===!0?t:e,M=T===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*M,0),p.push(0,M,0),g.push(.5,.5),_++;const L=_;for(let z=0;z<=r;z++){const q=z/r*c+a,K=Math.cos(q),W=Math.sin(q);A.x=E*W,A.y=m*M,A.z=E*K,f.push(A.x,A.y,A.z),p.push(0,M,0),R.x=K*.5+.5,R.y=W*.5*M+.5,g.push(R.x,R.y),_++}for(let z=0;z<r;z++){const k=N+z,q=L+z;T===!0?h.push(q,q+1,k):h.push(q+1,q,k),I+=3}l.addGroup(d,I,T===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends ae{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cs extends Ye{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],o=[];a(r),l(i),h(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const S=new C,T=new C,N=new C;for(let R=0;R<e.length;R+=3)g(e[R+0],S),g(e[R+1],T),g(e[R+2],N),c(S,T,N,w)}function c(w,S,T,N){const R=N+1,A=[];for(let I=0;I<=R;I++){A[I]=[];const E=w.clone().lerp(T,I/R),M=S.clone().lerp(T,I/R),L=R-I;for(let z=0;z<=L;z++)z===0&&I===R?A[I][z]=E:A[I][z]=E.clone().lerp(M,z/L)}for(let I=0;I<R;I++)for(let E=0;E<2*(R-I)-1;E++){const M=Math.floor(E/2);E%2===0?(p(A[I][M+1]),p(A[I+1][M]),p(A[I][M])):(p(A[I][M+1]),p(A[I+1][M+1]),p(A[I+1][M]))}}function l(w){const S=new C;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(w),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const w=new C;for(let S=0;S<s.length;S+=3){w.x=s[S+0],w.y=s[S+1],w.z=s[S+2];const T=m(w)/2/Math.PI+.5,N=d(w)/Math.PI+.5;o.push(T,1-N)}_(),f()}function f(){for(let w=0;w<o.length;w+=6){const S=o[w+0],T=o[w+2],N=o[w+4],R=Math.max(S,T,N),A=Math.min(S,T,N);R>.9&&A<.1&&(S<.2&&(o[w+0]+=1),T<.2&&(o[w+2]+=1),N<.2&&(o[w+4]+=1))}}function p(w){s.push(w.x,w.y,w.z)}function g(w,S){const T=w*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const w=new C,S=new C,T=new C,N=new C,R=new Ht,A=new Ht,I=new Ht;for(let E=0,M=0;E<s.length;E+=9,M+=6){w.set(s[E+0],s[E+1],s[E+2]),S.set(s[E+3],s[E+4],s[E+5]),T.set(s[E+6],s[E+7],s[E+8]),R.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),N.copy(w).add(S).add(T).divideScalar(3);const L=m(N);v(R,M+0,w,L),v(A,M+2,S,L),v(I,M+4,T,L)}}function v(w,S,T,N){N<0&&w.x===1&&(o[S]=w.x-1),T.x===0&&T.z===0&&(o[S]=N/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function d(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.vertices,t.indices,t.radius,t.details)}}class Qn extends Cs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qn(t.radius,t.detail)}}class qi extends Cs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qi(t.radius,t.detail)}}class Tl extends Cs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tl(t.radius,t.detail)}}class Nn extends Ye{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new C,p=new C,g=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const w=[],S=d/i;let T=0;d===0&&o===0?T=.5/e:d===i&&c===Math.PI&&(T=-.5/e);for(let N=0;N<=e;N++){const R=N/e;f.x=-t*Math.cos(r+R*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(r+R*s)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),m.push(R+T,1-S),w.push(l++)}h.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const S=h[d][w+1],T=h[d][w],N=h[d+1][w],R=h[d+1][w+1];(d!==0||o>0)&&g.push(S,T,R),(d!==i-1||c<Math.PI)&&g.push(T,N,R)}this.setIndex(g),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ji extends Ye{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new C,f=new C,p=new C;for(let g=0;g<=i;g++)for(let _=0;_<=r;_++){const v=_/r*s,m=g/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(g/i)}for(let g=1;g<=i;g++)for(let _=1;_<=r;_++){const v=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,d=(r+1)*(g-1)+_,w=(r+1)*g+_;o.push(v,m,w),o.push(m,d,w)}this.setIndex(o),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xt extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gx extends Id{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class bl extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vx extends bl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const nc=new fe,mh=new C,gh=new C;class Nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _h=new fe,ns=new C,ic=new C;class Wx extends Nd{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ns.setFromMatrixPosition(t.matrixWorld),i.position.copy(ns),ic.copy(i.position),ic.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ic),i.updateMatrixWorld(),r.makeTranslation(-ns.x,-ns.y,-ns.z),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class Ps extends bl{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xx extends Nd{constructor(){super(new bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Xx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vh(){return(typeof performance>"u"?Date:performance).now()}const xh=new fe;class Fd{constructor(t,e,i=0,r=1/0){this.ray=new Yo(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(t,e=!0,i=[]){return Zc(t,this,i,e),i.sort(Mh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Zc(t[r],this,i,e);return i.sort(Mh),i}}function Mh(n,t){return n.distance-t.distance}function Zc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Zc(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const is=new C;function cn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;is.copy(t),is[i]=0,is.normalize();const l=.5*o/(o+a),h=1-is.angleTo(n)/c;return Math.sign(is[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Ko extends Lt{constructor(t=1,e=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new C,c=new C,l=new C(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,_=new C,v=.5/r;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*s,h[m+1]=l.y*Math.sign(a.y)+c.y*s,h[m+2]=l.z*Math.sign(a.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[d+0]=cn(_,c,"z","y",s,i),p[d+1]=1-cn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[d+0]=1-cn(_,c,"z","y",s,i),p[d+1]=1-cn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[d+0]=1-cn(_,c,"x","z",s,t),p[d+1]=cn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[d+0]=1-cn(_,c,"x","z",s,t),p[d+1]=1-cn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[d+0]=1-cn(_,c,"x","y",s,t),p[d+1]=1-cn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[d+0]=cn(_,c,"x","y",s,t),p[d+1]=1-cn(_,c,"y","x",s,e);break}}}const Od=document.getElementById("game"),yh=document.getElementById("hud"),$x=document.getElementById("nightText"),Kx=document.getElementById("phaseIcon"),jx=document.getElementById("healthText"),rc=document.getElementById("healthFill"),Or=document.getElementById("joystickZone");document.getElementById("joystickBase");const xs=document.getElementById("joystickKnob");document.getElementById("lookZone");const Ms=document.getElementById("jumpBtn"),Bd=document.getElementById("undragBtn"),Al=document.getElementById("storeBtn"),ps=document.getElementById("unstoreBtn"),Rl=document.getElementById("eatBtn"),Cl=document.getElementById("grinderBtn"),Pl=document.getElementById("fireBtn"),Ll=document.getElementById("plantBtn"),Zx=document.getElementById("woodText"),Jx=document.getElementById("saplingText"),Qx=document.getElementById("berryText"),tM=document.getElementById("ironText"),sc=document.getElementById("fireCounter"),Sh=document.getElementById("fireCounterText"),oc=document.getElementById("fireCounterFill"),kd=document.getElementById("startHint"),ac=document.getElementById("dragLabel"),eM=document.getElementById("dragName"),uo=document.getElementById("dragFlames"),Ln=document.getElementById("sackCounter"),bo=document.getElementById("fireFlash"),Ao=document.getElementById("benchPrompt"),Il=document.getElementById("placeBtn"),nM=document.getElementById("hungerText"),wh=document.getElementById("hungerFill"),Ls=document.getElementById("fireWarning"),Jc=document.getElementById("touchDebug"),jo=document.getElementById("deathBanner"),ys=document.getElementById("toast"),br=document.getElementById("hitMeter"),iM=document.getElementById("hitMeterText"),rM=document.getElementById("hitMeterFill"),Dl=document.getElementById("darkness"),Kn=document.getElementById("startOverlay"),sM=document.getElementById("startBtn"),zd=document.getElementById("axeSlot"),gi=document.getElementById("backpackSlot"),Hd=document.getElementById("pickaxeSlot"),Gd=document.getElementById("torchSlot"),Vd=document.getElementById("ironSwordSlot"),oM=document.getElementById("axeLabel"),aM=document.getElementById("backpackLabel"),cM=document.getElementById("pickaxeLabel"),lM=document.getElementById("torchLabel"),uM=document.getElementById("ironSwordLabel"),hM=document.getElementById("backpackBadge"),dM=document.getElementById("inventoryPanel"),cc=document.getElementById("inventoryList"),fM=document.getElementById("inventoryCapacity"),pM=document.getElementById("closeInventoryBtn"),mM=document.getElementById("unequipBtn"),Wd=document.getElementById("craftPanel"),lc=document.getElementById("craftGrid"),gM=document.getElementById("closeCraftBtn"),_M=document.getElementById("craftTierLabel"),Eh=document.getElementById("craftWoodStock"),Th=document.getElementById("craftIronStock"),vM=document.getElementById("craftDetailIcon"),xM=document.getElementById("craftDetailName"),MM=document.getElementById("craftDetailDesc"),uc=document.getElementById("craftDetailCost"),yM=document.getElementById("craftDetailBadge"),Qc=document.getElementById("craftButton"),Ro=document.getElementById("audioToggle"),as=document.getElementById("cameraBtn"),Xd=document.getElementById("settingsBtn"),SM=document.getElementById("settingsPanel"),wM=document.getElementById("closeSettingsBtn"),bh=document.getElementById("volumeSlider"),EM=document.getElementById("volumeValue"),Wr=new Ox({canvas:Od,antialias:!0,alpha:!1,powerPreference:"high-performance"});Wr.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Wr.setSize(window.innerWidth,window.innerHeight);Wr.shadowMap.enabled=!0;Wr.shadowMap.type=ed;const He=new Bx;He.background=new Tt(133647);He.fog=new El(465186,.045);const xe=new en(67,window.innerWidth/window.innerHeight,.1,200);xe.rotation.order="YXZ";const TM=new Yx,le=new Ut;He.add(le);const $e=new C(4.2,0,4.2),Ke=new C(6.5,0,2.6),tl=13,Zo=[],Ss=13,qd=.5,bM=5,AM=1.6,Ul=4,RM=.45,Ah=67,CM=75,Rh=bm.degToRad(80),PM=.0037,LM=.0022,cs=4,Yd=15,IM=300,Ii=-1.05,$d=-.34,DM=1.309,Kd=DM-(Ii+$d),jd=-Math.PI/2,UM=.34;function ue(n,t){const e=Math.hypot(n,t),i=Math.min(Math.max((e-8)/10,0),1),r=Math.min(Math.max((62-e)/8,0),1);return(Math.sin(n*.11+.7)*Math.cos(t*.1-.35)*.55+Math.sin((n+t)*.055-.6)*.35)*i*r}const Jo=new Gr(130,130,56,56);Jo.rotateX(-Math.PI/2);const ho=Jo.attributes.position;for(let n=0;n<ho.count;n+=1)ho.setY(n,ue(ho.getX(n),ho.getZ(n)));Jo.computeVertexNormals();const Zd=new G(Jo,new xt({color:1058079,roughness:1,metalness:0}));Zd.receiveShadow=!0;le.add(Zd);const Wt=new Ut;Wt.userData.campfireRef=!0;le.add(Wt);const vn=new Ut;Wt.add(vn);const Qo=new G(new ae(.74,.92,.12,12),new xt({color:2759444,emissive:8006664,emissiveIntensity:.55,roughness:1}));Qo.position.y=.06;Qo.receiveShadow=!0;Wt.add(Qo);const zi=new G(new Nn(.22,10,10),new xt({color:16747050,emissive:16739096,emissiveIntensity:1.8,roughness:.55,metalness:.1}));zi.position.y=.55;zi.castShadow=!1;Wt.add(zi);const ms=new Ps(16748092,2.2,15,2.1);ms.position.set(0,1.3,0);Wt.add(ms);const gs=new Ps(16765597,.85,20,2);gs.position.set(0,1.2,0);He.add(gs);const el=new Vx(9815807,988441,.9);He.add(el);const wn=new qx(12244991,.9);wn.position.set(-8,12,6);wn.castShadow=!0;wn.shadow.mapSize.width=1024;wn.shadow.mapSize.height=1024;wn.shadow.camera.left=-35;wn.shadow.camera.right=35;wn.shadow.camera.top=35;wn.shadow.camera.bottom=-35;He.add(wn);const qe=[],NM=new xt({color:3876643,roughness:1}),FM=new xt({color:1714719,roughness:1});function Jd(n,t,e=1){const i=new Ut,r=new G(new ae(.18*e,.28*e,1.7*e,6),NM);r.position.y=.85*e,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const s=new G(new Ie(.8*e,2.2*e,6),FM);return s.position.y=2.4*e,s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.position.set(n,ue(n,t),t),i.userData.scale=e,i.userData.cameraMeshes=[r,s],i.userData.trunk=r,i.userData.foliage=s,i.userData.treeRef=i,le.add(i),qe.push(i),i}for(let n=0;n<90;n+=1){const t=Math.random()*Math.PI*2,e=12+Math.random()*42,i=Math.cos(t)*e,r=Math.sin(t)*e;Math.abs(i)<6&&Math.abs(r)<6||Jd(i,r,.8+Math.random()*1.2)}const Qd=new Set([...qe].sort((n,t)=>Math.hypot(n.position.x,n.position.z)-Math.hypot(t.position.x,t.position.z)).slice(0,8));for(let n=0;n<qe.length;n+=4)Qd.add(qe[n]);for(const n of Qd){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.hits=Ss,t.hitsMax=Ss,t.shake=0,t.highlight=0,t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}const OM=new xt({color:7029796,roughness:.9}),Ch=new xt({color:3111493,roughness:.92});function tf(n=1){const t=new Ut,e=new G(new ae(.035,.055,.5,5),OM);e.position.y=.25,e.castShadow=!0,t.add(e);const i=new G(new Ie(.28,.55,6),Ch);i.position.y=.55,i.castShadow=!0,t.add(i);const r=new G(new Ie(.19,.42,6),Ch);return r.position.y=.84,r.castShadow=!0,t.add(r),t.scale.setScalar(n),t}for(let n=0;n<120;n+=1){const t=new G(new Lt(.12,.16,.12),new xt({color:1521191,roughness:1})),e=(Math.random()-.5)*90,i=(Math.random()-.5)*90;t.position.set(e,ue(e,i)+.08,i),t.castShadow=!0,t.receiveShadow=!0,le.add(t)}const X=new Ut;He.add(X);const fn=new Ut;fn.position.y=.01;X.add(fn);const Qi=new xt({color:16766527,emissive:3877120,emissiveIntensity:.38,roughness:.38,metalness:.03}),BM=new xt({color:3108818,roughness:.4,metalness:.03}),ef=new xt({color:3709259,roughness:.42,metalness:.03}),Nl=new xt({color:1185048,roughness:.5,metalness:0});function Fn(n,t,e,i,r=.035){const s=new G(new Ko(n,t,e,2,r),i);return s.castShadow=!0,s.receiveShadow=!0,s}const nf=Fn(.84,.86,.44,BM,.045);nf.position.y=1.27;fn.add(nf);const Xr=new Ut;Xr.position.y=2;fn.add(Xr);const kM=Fn(.6,.6,.6,Qi,.055);Xr.add(kM);const rf=new Ko(.075,.105,.025,1,.01),sf=new G(rf,Nl);sf.position.set(-.135,.085,.301);Xr.add(sf);const of=new G(rf,Nl);of.position.set(.135,.085,.301);Xr.add(of);const Fl=new G(new Ji(.115,.021,4,14,Math.PI),Nl);Fl.rotation.z=Math.PI;Fl.position.set(0,-.075,.303);Xr.add(Fl);const In=new Ut;In.position.set(-.54,1.64,0);fn.add(In);const af=Fn(.22,.78,.3,Qi,.06);af.position.y=-.39;In.add(af);const cf=Fn(.2,.16,.26,Qi,.05);cf.position.set(0,-.8,.01);In.add(cf);const yn=new Ut;yn.position.set(.54,1.64,0);fn.add(yn);const Ol=Fn(.22,.78,.3,Qi,.06);Ol.position.y=-.39;yn.add(Ol);const lf=Fn(.2,.16,.26,Qi,.05);lf.position.set(0,0,0);const qr=new Ut;qr.position.set(0,-.41,.01);qr.rotation.set($d,0,0);Ol.add(qr);qr.add(lf);const Yi=new Ut;Yi.position.set(-.2,.84,0);fn.add(Yi);const uf=Fn(.3,.82,.36,ef,.045);uf.position.y=-.41;Yi.add(uf);const $i=new Ut;$i.position.set(.2,.84,0);fn.add($i);const hf=Fn(.3,.82,.36,ef,.045);hf.position.y=-.41;$i.add(hf);const ta=new G(new Nn(.15,8,8),new xt({color:16762478,emissive:16747046,emissiveIntensity:2.1,roughness:.4}));ta.position.set(.02,-.68,.2);ta.castShadow=!0;yn.add(ta);const je=new Ut;je.position.set(0,0,0);je.rotation.set(Kd,jd,0);qr.add(je);const Bl=new G(new ae(.038,.048,.95,6),new xt({color:8079911,roughness:.82,metalness:.02}));Bl.position.y=.475;Bl.castShadow=!0;je.add(Bl);const kl=new G(new ae(.052,.052,.22,6),new xt({color:3875859,roughness:.95}));kl.position.y=0;kl.castShadow=!0;je.add(kl);const zl=new G(new Lt(.34,.2,.1),new xt({color:12175054,emissive:2371898,emissiveIntensity:.4,roughness:.3,metalness:.65}));zl.position.set(.11,.72,0);zl.castShadow=!0;je.add(zl);const Hl=new G(new Lt(.2,.3,.07),new xt({color:15266293,emissive:3096393,emissiveIntensity:.45,roughness:.24,metalness:.55}));Hl.position.set(.27,.72,0);Hl.castShadow=!0;je.add(Hl);je.visible=!1;const nl=new xt({color:11188417,emissive:1778988,emissiveIntensity:.36,roughness:.3,metalness:.68}),ko=new xt({color:14477550,emissive:3490893,emissiveIntensity:.4,roughness:.24,metalness:.64}),zM=new xt({color:7422755,roughness:.84,metalness:.02}),il=new xt({color:14725728,roughness:.42,metalness:.5});function ea(n,t,e=.042){const i=new G(new ae(e,e*1.2,t,6),zM);i.position.y=t*.5,i.castShadow=!0,n.add(i);const r=new G(new ae(e*1.28,e*1.28,.2,6),new xt({color:3547154,roughness:.95}));r.position.y=0,r.castShadow=!0,n.add(r)}function df(){const n=new Ut;ea(n,.92,.038);const t=new G(new Lt(.72,.13,.13),nl);t.position.set(.02,.76,0),t.castShadow=!0,n.add(t);const e=new G(new Ie(.105,.31,4),ko);e.position.set(.42,.76,0),e.rotation.z=-Math.PI/2,e.castShadow=!0,n.add(e);const i=new G(new Ie(.09,.23,4),nl);return i.position.set(-.35,.76,0),i.rotation.z=Math.PI/2,i.castShadow=!0,n.add(i),n}function ff(){const n=new Ut;ea(n,.96,.045);const t=new G(new Lt(.36,.22,.11),nl);t.position.set(.11,.775,0),t.castShadow=!0,n.add(t);const e=new G(new Lt(.22,.34,.075),ko);e.position.set(.29,.775,0),e.rotation.z=-.06,e.castShadow=!0,n.add(e);const i=new G(new ae(.028,.028,.13,6),il);return i.rotation.x=Math.PI/2,i.position.set(.11,.775,.04),n.add(i),n}function pf(){const n=new Ut;ea(n,.55,.035);const t=new G(new Lt(.44,.08,.11),il);t.position.y=.3835,t.castShadow=!0,n.add(t);const e=new G(new Lt(.14,.9,.055),ko);e.position.y=.8835,e.castShadow=!0,n.add(e);const i=new G(new Ie(.099,.24,4),ko);i.position.y=1.4335,i.castShadow=!0,n.add(i);const r=new G(new Nn(.07,6,5),il);return r.position.y=.0835,n.add(r),n}function HM(){const n=new Ut;ea(n,.52,.036);const t=new G(new ae(.075,.06,.18,7),new xt({color:3810324,roughness:.95}));t.position.y=.5,n.add(t);const e=new G(new Ie(.11,.3,6),new sn({color:16753978,transparent:!0,opacity:.9,blending:Vi,depthWrite:!1}));return e.position.y=.72,n.add(e),n}const na=df(),ia=ff(),ra=pf(),sa=HM();for(const[n,t]of[["pickaxe",na],["torch",sa],["ironAxe",ia],["ironSword",ra]])t.position.set(0,0,0),t.rotation.set(Kd,jd,0),t.visible=!1,t.userData.baseY=t.position.y,t.userData.tool=n,qr.add(t);const GM=new xt({color:8145450,roughness:.78,metalness:.02}),Ph=new xt({color:5123096,roughness:.86}),VM=new xt({color:14725728,roughness:.42,metalness:.5});function WM(n=1){const t=new Ut,e=new G(new Nn(.27,10,8),GM);e.scale.set(1,1.12,.8),e.position.y=-.04,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const i=new G(new ae(.1,.17,.2,8),Ph);i.position.y=.27,i.castShadow=!0,t.add(i);const r=new G(new Ji(.11,.025,5,10),VM);r.rotation.x=Math.PI/2,r.position.y=.3,t.add(r);const s=new G(new Ko(.16,.12,.035,2,.02),Ph);return s.position.set(0,-.08,.215),s.castShadow=!0,t.add(s),t.scale.setScalar(n),t}const On=WM(1);On.position.set(.09,-.96,.2);On.rotation.set(.08,Math.PI-.25,.05);On.visible=!1;yn.add(On);const XM=je.position.y,qM=On.position.y;je.userData.baseY=XM;je.userData.tool="axe";On.userData.baseY=qM;On.userData.tool="backpack";He.add(xe);const Is=new Ut;Is.visible=!1;xe.add(Is);const me=new Ut;me.position.set(.47,-.7,-.8);me.rotation.set(-.2,.14,.24);me.scale.setScalar(.78);Is.add(me);const Gl=Fn(.17,.5,.19,Qi,.05);Gl.position.set(0,.22,0);Gl.castShadow=!1;me.add(Gl);const Vl=Fn(.2,.18,.22,Qi,.045);Vl.position.set(0,.49,.01);Vl.castShadow=!1;me.add(Vl);const Wl=new Ut;Wl.position.set(0,.5,.02);me.add(Wl);const mf={axe:je.clone(!0),pickaxe:na.clone(!0),torch:sa.clone(!0),ironAxe:ia.clone(!0),ironSword:ra.clone(!0)},YM={axe:.3,pickaxe:.34,torch:.2,ironAxe:.36,ironSword:.2};for(const[n,t]of Object.entries(mf))t.position.set(0,YM[n],0),t.rotation.set(-.15,.12,.26),t.scale.setScalar(.9),t.visible=!1,t.userData.fpTool=n,t.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),Wl.add(t);const Mr={x:me.position.x,y:me.position.y,z:me.position.z,rx:me.rotation.x,ry:me.rotation.y,rz:me.rotation.z},oa=new Ps(16760945,.8,14,2);oa.position.set(0,1.9,0);X.add(oa);const rn=new G(new Ji(1.05,.055,5,24),new sn({color:16769184,transparent:!0,opacity:.8}));rn.rotation.x=Math.PI/2;rn.position.set(0,.9,.85);rn.visible=!1;X.add(rn);const nn=new G(new qi(.42,1),new sn({color:16765562,transparent:!0,opacity:0,blending:Vi,depthWrite:!1,wireframe:!0}));nn.visible=!1;He.add(nn);X.position.set(0,ue(0,4),4);const Xl=[],$M=new Qn(.55,0),KM=new xt({color:4608078,roughness:.95,metalness:.02});for(let n=0;n<8;n+=1){const t=Math.random()*Math.PI*2,e=10+Math.random()*20,i=Math.cos(t)*e,r=Math.sin(t)*e;if(qe.some(c=>Math.hypot(c.position.x-i,c.position.z-r)<1.6))continue;const s=.8+Math.random()*.55,o=ue(i,r),a=new G($M,KM);a.position.set(i,o+.3025*s,r),a.scale.set(s,s*.55,s),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,le.add(a),Xl.push({x:i,z:r,radius:.52*s,top:o+.605*s,mesh:a})}const Lr=[],dn=[];let zt=null;const aa=[],jM=new ae(.15,.17,.72,7),ZM=new xt({color:10117944,emissive:2823689,emissiveIntensity:.45,roughness:.85,metalness:.02}),JM=new xt({color:14170699,emissive:3998985,emissiveIntensity:.45,roughness:.62}),QM=new xt({color:4168275,roughness:.88}),ty=new Nn(.09,6,5),ey=new xt({color:2380346,roughness:.98}),ny=new xt({color:1588009,roughness:.98});function Lh(n=1){const t=new Ut,e=[[0,.1,0],[.1,.04,.03],[-.09,.03,.05],[.02,.02,-.09]];for(const[r,s,o]of e){const a=new G(ty,JM);a.position.set(r,s,o),a.castShadow=!0,t.add(a)}const i=new G(new Ie(.1,.16,5),QM);return i.position.set(.03,.2,-.02),i.rotation.z=.4,i.castShadow=!0,t.add(i),t.scale.setScalar(n),t}function iy(n,t){const e=new Ut,i=new G(new qi(.62,0),ey);i.position.y=.34,i.scale.set(1.1,.7,1.05),i.castShadow=!0,i.receiveShadow=!0,e.add(i);const r=new G(new qi(.42,0),ny);r.position.set(.26,.54,-.12),r.scale.set(1,.75,1),r.castShadow=!0,e.add(r),e.position.set(n,ue(n,t),t),e.rotation.y=Math.random()*Math.PI*2,le.add(e);const s={x:n,z:t,mesh:e,nextHarvest:0};e.userData.berryBushRef=s,aa.push(s)}for(let n=0;n<15;n+=1){let t=!1;for(let e=0;e<24&&!t;e+=1){const i=Math.random()*Math.PI*2,r=8.5+Math.random()*22,s=Math.cos(i)*r,o=Math.sin(i)*r;Math.hypot(s,o)<8||qe.some(a=>Math.hypot(a.position.x-s,a.position.z-o)<2.1)||aa.some(a=>Math.hypot(a.x-s,a.z-o)<3.2)||(iy(s,o),t=!0)}}const tr=[],rl=new xt({color:5858667,roughness:.92,metalness:.08,flatShading:!0}),gf=new xt({color:7635336,roughness:.86,metalness:.12,flatShading:!0}),_f=new xt({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.32}),vf=new Tl(.095,0);function ry(n,t,e=1){const i=new Ut,r={group:i,x:n,z:t,scale:e,hits:tl,hitsMax:tl,broken:!1,regrow:0,shake:0,sway:Math.random()*Math.PI*2},s=new G(new Qn(.76,0),rl);s.position.y=.5,s.scale.set(1.05,.82,.92),s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,i.add(s);const o=new G(new Qn(.42,0),gf);o.position.set(.48,.26,.2),o.scale.set(1,.75,.9),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new G(new Qn(.3,0),rl);a.position.set(-.46,.2,-.26),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,i.add(a);const c=[[-.33,.53,.63,1.5,1.1,.62,.2,.25,.45],[.18,.62,.66,1.2,.9,.55,-.15,.4,-.35],[.63,.44,.25,.62,1.15,1.3,.3,-.2,.25],[-.12,.35,.69,1.35,.85,.55,.4,.1,.2],[.38,.5,-.62,1.2,1,.7,-.25,.3,-.3]];for(const[l,h,f,p,g,_,v,m,d]of c){const w=new G(vf,_f);w.position.set(l,h,f),w.scale.set(p,g,_),w.rotation.set(v,m,d),w.castShadow=!0,i.add(w)}return i.position.set(n,ue(n,t),t),i.rotation.y=Math.random()*Math.PI*2,i.scale.setScalar(e),i.traverse(l=>{l.userData.rockRef=r}),le.add(i),tr.push(r),Zo.push({x:n,z:t,radius:.56*e,rock:r}),r}function sy(n,t,e){return!(Math.hypot(n,t)<10.5||qe.some(i=>Math.hypot(i.position.x-n,i.position.z-t)<1.9*e)||aa.some(i=>Math.hypot(i.x-n,i.z-t)<2*e)||tr.some(i=>Math.hypot(i.x-n,i.z-t)<2.2*e))}const oy=[[17,-8],[-19,12],[10,24],[-25,-16],[26,14],[-13,-24]];for(const[n,t]of oy){let e=0;for(let i=0;i<18&&e<2;i+=1){const r=Math.random()*Math.PI*2,s=Math.random()*2.7,o=n+Math.cos(r)*s,a=t+Math.sin(r)*s,c=.88+Math.random()*.38;sy(o,a,c)&&(ry(o,a,c),e+=1)}}const ce=new Ut,Dn={},Tn=new Ut,Di=new Ut,Ih=new xt({color:9067054,roughness:.85,metalness:.04}),fo=new xt({color:6044189,roughness:.9}),hi=new xt({color:9280161,roughness:.4,metalness:.68}),$n=new xt({color:5661033,roughness:.46,metalness:.6});function ay(n,t,e){const i=document.createElement("canvas");i.width=192,i.height=112;const r=i.getContext("2d"),s=a=>{r.clearRect(0,0,192,112),r.fillStyle=n==="wood"?"#6b4322":"#545d63",r.fillRect(0,0,192,112),r.strokeStyle="rgba(0, 0, 0, 0.5)",r.lineWidth=8,r.strokeRect(4,4,184,104),r.fillStyle="rgba(255, 255, 255, 0.08)",r.fillRect(6,6,180,18),n==="wood"?(r.fillStyle="#d79a58",r.fillRect(18,44,52,26),r.fillStyle="#b87a3d",r.beginPath(),r.arc(18,57,13,0,Math.PI*2),r.fill(),r.strokeStyle="#8a5526",r.lineWidth=3,r.beginPath(),r.arc(18,57,6,0,Math.PI*2),r.stroke()):(r.fillStyle="#dfe9ee",r.beginPath(),r.moveTo(46,36),r.lineTo(24,60),r.lineTo(40,60),r.lineTo(32,82),r.lineTo(56,54),r.lineTo(40,54),r.closePath(),r.fill()),r.fillStyle="#ffe1a8",r.font="bold 58px system-ui, sans-serif",r.textAlign="right",r.textBaseline="middle",r.fillText(String(a),176,62)};s(t);const o=new Ud(i);return o.colorSpace=ln,{mesh:null,pop:0,setValue(a,c){s(a),o.needsUpdate=!0,this.mesh&&(this.pop=1)},texture:o}}function Dh(n,t,e){const i=ay(n,0),r=new sn({map:i.texture,transparent:!0}),s=new G(new Gr(.72,.42),r);return s.position.set(t,.66,.515),i.mesh=s,i}{const n=new G(new Lt(2.55,.17,1),Ih);n.position.y=.94,n.castShadow=!0,n.receiveShadow=!0,ce.add(n);const t=new G(new Lt(2.45,.16,.16),fo);t.position.set(0,.8,.42),ce.add(t);const e=t.clone();e.position.z=-.42,ce.add(e);for(const[l,h]of[[-1.08,-.36],[1.08,-.36],[-1.08,.36],[1.08,.36]]){const f=new G(new Lt(.2,.92,.2),fo);f.position.set(l,.46,h),f.castShadow=!0,ce.add(f);const p=new G(new Lt(.28,.1,.28),hi);p.position.set(l*.94,.86,h*.94),p.castShadow=!0,ce.add(p);const g=new G(new Lt(.24,.08,.24),$n);g.position.set(l*.94,.14,h*.94),ce.add(g)}const i=new G(new Lt(.14,.1,.78),fo);i.position.set(0,.42,0),ce.add(i);const r=new G(new Lt(.07,.06,.62),Ih);r.position.set(-.72,1.05,.02),r.rotation.y=.36,ce.add(r);const s=new G(new Lt(.3,.13,.14),$n);s.position.set(-.55,1.07,-.16),s.rotation.y=.36,s.castShadow=!0,ce.add(s);const o=new G(new Lt(.9,.035,.2),hi);o.position.set(.62,1.05,-.12),o.rotation.y=-.22,ce.add(o);const a=new G(new Lt(.22,.09,.15),fo);a.position.set(1.14,1.06,-.02),a.rotation.y=-.22,ce.add(a);for(let l=0;l<7;l+=1){const h=new G(new Ie(.03,.07,3),hi);h.position.set(.62+(l-3)*.11,1.02,-.22),h.rotation.x=Math.PI/2,ce.add(h)}Dn.woodSign=Dh("wood",-.62),Dn.ironSign=Dh("iron",.62),ce.add(Dn.woodSign.mesh),ce.add(Dn.ironSign.mesh);{const l=new G(new Lt(.3,.18,.28),$n);l.position.set(-1.06,1.1,.22),Tn.add(l);const h=new G(new Lt(.24,.16,.08),hi);h.position.set(-1.06,1.18,.34),Tn.add(h);const f=new G(new ae(.03,.03,.3,6),hi);f.rotation.z=Math.PI/2,f.position.set(-1.06,1.1,.44),Tn.add(f);const p=new G(new ae(.035,.045,1.55,6),$n);p.position.set(1.2,1.72,-.42),Tn.add(p);const g=new G(new Lt(.5,.06,.06),$n);g.position.set(.98,2.46,-.42),Tn.add(g);const _=new G(new Ie(.18,.22,8),new xt({color:3812122,emissive:16756810,emissiveIntensity:.55,roughness:.6}));_.position.set(.74,2.34,-.42),Tn.add(_);const v=new Ps(16760426,.9,5.5,2);v.position.set(.74,2.2,-.42),Tn.add(v)}{for(const h of[-1,1]){const f=new G(new ae(.045,.05,1.5,6),$n);f.position.set(h*1.05,1.7,-.72),Di.add(f)}const l=new G(new Lt(2.2,.08,.08),hi);l.position.set(0,2.38,-.72),Di.add(l);for(let h=0;h<4;h+=1){const f=new G(new Lt(.04,.2,.04),hi);f.position.set(-.75+h*.5,2.26,-.72),Di.add(f);const p=new G(new Lt(.05,.5,.12),$n);p.position.set(-.75+h*.5,1.98,-.72),Di.add(p)}}Tn.visible=!1,Di.visible=!1,ce.add(Tn,Di);const c=new G(new Lt(2.8,2.2,1.5),new sn({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}));c.position.y=1.1,ce.add(c)}ce.position.set($e.x,ue($e.x,$e.z),$e.z);ce.rotation.y=Math.atan2(-$e.x,-$e.z);ce.userData.benchRef=!0;le.add(ce);Zo.push({x:$e.x,z:$e.z,radius:1.32,type:"bench"});const Me=new Ut,Be={};{const n=new xt({color:10170154,roughness:.62,metalness:.18}),t=new xt({color:7085338,roughness:.7,metalness:.15}),e=new xt({color:8227473,roughness:.4,metalness:.72,side:An}),i=new G(new Ko(1.18,.28,.86,2,.05),n);i.position.y=.3,i.castShadow=!0,i.receiveShadow=!0,Me.add(i);const r=new G(new Lt(1.04,.08,.72),t);r.position.y=.48,Me.add(r),Be.wheels=[];for(const[f,p]of[[-.45,-.33],[.45,-.33],[-.45,.33],[.45,.33]]){const g=new G(new ae(.17,.17,.1,10),$n);g.rotation.z=Math.PI/2,g.position.set(f,.16,p),g.castShadow=!0,Me.add(g),Be.wheels.push(g)}const s=new Ut;Me.add(s),Be.shakeGroup=s;const o=new G(new ae(.66,.34,.88,4,1,!0),e);o.position.y=1.02,o.rotation.y=Math.PI/4,o.castShadow=!0,s.add(o),Be.hopper=o;const a=new G(new Lt(.98,.09,.98),$n);a.position.y=1.46,a.rotation.y=Math.PI/4,a.castShadow=!0,s.add(a);const c=new G(new Lt(.52,.14,.52),new xt({color:1120283,roughness:1}));c.position.y=1.4,c.rotation.y=Math.PI/4,s.add(c);const l=new G(new Lt(.4,.34,.12),e);l.position.set(0,.64,.46),Me.add(l);const h=new G(new ae(.035,.035,.42,6),hi);h.rotation.z=Math.PI/2,h.position.set(-.7,.72,.05),Me.add(h)}Me.position.set(Ke.x,ue(Ke.x,Ke.z),Ke.z);Me.rotation.y=Math.atan2(-Ke.x,-Ke.z);Me.userData.grinderRef=!0;le.add(Me);Zo.push({x:Ke.x,z:Ke.z,radius:.72,type:"grinder"});const re={stock:{wood:0,iron:0},tier:1,crafted:new Set,signPop:{wood:0,iron:0}},Co=[];function xf(n=""){Dn.woodSign&&Dn.woodSign.setValue(re.stock.wood,re.tier>=3),Dn.ironSign&&Dn.ironSign.setValue(re.stock.iron,re.tier>=3),n&&(re.signPop[n]=1)}function Mf(){Tn.visible=re.tier>=2,Di.visible=re.tier>=3,xf()}const ws=[],yf=new xt({color:6714492,roughness:.42,metalness:.62}),sl=new xt({color:10135985,roughness:.34,metalness:.7});function cy(){for(const n of ws)le.remove(n.group);ws.length=0}function ly(){for(const n of tr)n.broken=!1,n.hits=n.hitsMax,n.regrow=0,n.shake=0,n.group.visible=!0,n.group.scale.setScalar(n.scale),n.group.rotation.z=0}const Sf=4,wf=3,uy=6,hy=4,Ef=4,dy=4,po=2.5,zo=5,fy=50,Tf={1:30,2:12,3:5,4:3,5:2},py={1:10,2:4,3:2,4:1.2,5:.8},ql={1:8,2:12,3:16,4:20,5:26},my={1:1,2:1.5,3:2,4:2.5,5:3.5},bf=.36,gy=1.15,_y=120,hc=[.35,.58,.82,1.06],ca=.34,Oi=180,vy=120,yr=Oi+vy,dc=16,rs=14,Af=30,Rf=5,Uh=10,xy=.42,Ho=18,la=.3,Es=8,Nh=28,My=44,Yr={wood:"Wood log",sapling:"Sapling",berry:"Berry",iron:"Iron piece",axe:"Old Axe",pickaxe:"Pickaxe",torch:"Torch",ironAxe:"Good Axe",ironSword:"Iron Sword",ironWall:"Iron Wall",logWall:"Log Wall",bearTrap:"Bear Trap"},Yl={wood:"Log",sapling:"Sapling",berry:"Berries",iron:"Iron"},yy={wood:1},Ds={axe:{cooldown:.58,damage:1,treePower:1,rockPower:0,range:3.3,reach:2.5},pickaxe:{cooldown:.5,damage:1,treePower:0,rockPower:1,range:3,reach:2.5},torch:{cooldown:.6,damage:1,treePower:0,rockPower:0,range:2.4,reach:2.2},ironAxe:{cooldown:.4,damage:2,treePower:2,rockPower:0,range:3.5,reach:2.8},ironSword:{cooldown:.42,damage:3,treePower:0,rockPower:0,range:3.6,reach:2.8}},$l=[{id:"pickaxe",tier:1,name:"Pickaxe",icon:"⛏",cost:{wood:4,iron:1},desc:"Mine iron rocks at the forest edge.",kind:"tool",repeatable:!0},{id:"torch",tier:1,name:"Torch",icon:"🔥",cost:{wood:2,iron:1},desc:"A warm light to carry into the dark.",kind:"tool",repeatable:!0},{id:"bench2",tier:1,name:"Crafting Bench 2",icon:"🛠",cost:{wood:8,iron:6},desc:"Upgrade the bench to unlock tier 2 gear.",kind:"bench",oneTime:!0,benchTier:2},{id:"ironAxe",tier:2,name:"Good Axe",icon:"🪓",cost:{wood:6,iron:3},desc:"Chops faster and hits harder. Replaces the Old Axe.",kind:"tool",oneTime:!0},{id:"goodSack",tier:2,name:"Good Sack",icon:"🎒",cost:{wood:6,iron:5},desc:"Sack capacity grows from 5 to 10.",kind:"sack",oneTime:!0},{id:"logWall",tier:2,name:"Log Wall",icon:"🪵",cost:{wood:12},desc:"A sturdy wooden wall. Craft it, then place it.",kind:"placeable",placeType:"logWall",repeatable:!0},{id:"bearTrap",tier:2,name:"Bear Trap",icon:"⚙",cost:{iron:3},desc:"Damages and stuns a monster that steps on it.",kind:"placeable",placeType:"bearTrap",repeatable:!0,trap:!0},{id:"bench3",tier:2,name:"Crafting Bench 3",icon:"🛠",cost:{wood:15,iron:10},desc:"Upgrade the bench to unlock tier 3 gear.",kind:"bench",oneTime:!0,benchTier:3},{id:"ironSword",tier:3,name:"Iron Sword",icon:"🗡",cost:{wood:5,iron:5},desc:"A strong melee blade for monsters.",kind:"tool",repeatable:!0},{id:"ironWall",tier:3,name:"Iron Wall",icon:"🛡",cost:{wood:8,iron:6},desc:"A sturdy metal wall. Craft it, then place it.",kind:"placeable",placeType:"ironWall",repeatable:!0},{id:"bench4",tier:4,name:"Crafting Bench 4",icon:"?",cost:{},desc:"Coming soon.",kind:"locked"}],ua=new Map($l.map(n=>[n.id,n]));let Ar=0,ls=0,Fh="";function Us(){return Math.hypot(X.position.x-Wt.position.x,X.position.z-Wt.position.z)}function Go(){return Math.hypot(X.position.x-$e.x,X.position.z-$e.z)}function ha(){return Math.hypot(X.position.x-Ke.x,X.position.z-Ke.z)}function Ci(){return u.fireOut?0:ql[u.fireLevel]||8}function Cf(){return ql[u.fireLevel]||8}function Sy(n){return n==="axe"||n==="pickaxe"||n==="torch"||n==="ironAxe"||n==="ironSword"}function Pf(n){const t=Ds[n];return!!t&&t.treePower>0}function Kl(n){const t=Ds[n];return!!t&&t.rockPower>0}function Oh(){if(u.fireInReach=Us()<=Sf,u.grinderInReach=u.started&&ha()<=wf,u.benchInReach=u.started&&Go()<=Ef,u.targetTree=null,u.targetRock=null,!u.started||u.gameOver)return;let n=po*po;for(const e of qe){if(!e.userData.choppable||e.userData.falling||!e.visible)continue;const i=X.position.x-e.position.x,r=X.position.z-e.position.z,s=i*i+r*r;s<n&&(n=s,u.targetTree=e)}let t=po*po;for(const e of tr){if(e.broken)continue;const i=X.position.x-e.x,r=X.position.z-e.z,s=i*i+r*r;s<t&&(t=s,u.targetRock=e)}}function bt(n){ys.textContent=n,ys.classList.add("visible"),Ar=1.5}const ti={kind:null,target:null,timer:0},Sr=new C;function fi(){ti.kind=null,ti.target=null,ti.timer=0,br.classList.remove("visible")}function Lf(n,t){const e=n==="tree"?t.userData:t,i=e.hitsMax||(n==="tree"?Ss:tl),r=qt(i-Math.max(0,e.hits),0,i);ti.kind=n,ti.target=t,ti.timer=bM,iM.textContent=`${r}/${i}`,rM.style.width=`${r/i*100}%`,br.classList.add("visible")}function wy(n){const{kind:t,target:e}=ti;if(!e)return;if(!u.started||u.gameOver||u.falling>0){fi();return}if(t==="tree"){if(!e.visible||e.userData.falling||!e.userData.choppable){fi();return}}else if(e.broken){fi();return}if(ti.timer-=n,ti.timer<=0){fi();return}if(t==="tree"){const s=e.userData.scale||1;Sr.set(e.position.x,e.position.y+2.7*s,e.position.z)}else Sr.set(e.x,ue(e.x,e.z)+1.5*e.scale,e.z);if(Sr.project(xe),Sr.z>1){br.classList.remove("visible");return}const i=qt((Sr.x*.5+.5)*window.innerWidth,54,window.innerWidth-54),r=Math.max(112,(-Sr.y*.5+.5)*window.innerHeight);br.style.left=`${i}px`,br.style.top=`${r}px`,br.classList.add("visible")}function Ey(n){Jc.textContent=n,Jc.classList.add("visible"),ls=2}function Ty(n=1){const t=new Ut,e=new G(new Qn(.17,0),gf);e.scale.set(1.15,.8,.9),e.castShadow=!0,t.add(e);const i=new G(new Qn(.11,0),rl);i.position.set(.12,.02,.09),i.castShadow=!0,t.add(i);const r=new G(vf,_f);return r.scale.set(1.35,.92,.55),r.position.set(-.035,.055,.12),r.rotation.set(.3,.25,.4),t.add(r),t.scale.setScalar(n),t}function by(){const n=new Ut;for(let t=0;t<3;t+=1){const e=new G(new Lt(.34,.68,.09),yf);e.position.set((t-1)*.35,.35,0),e.castShadow=!0,n.add(e);const i=new G(new Lt(.32,.07,.11),sl);i.position.set((t-1)*.35,.58,0),n.add(i)}return n}function If(n){let t;return n==="wood"?(t=new G(jM,ZM),t.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2),t.castShadow=!0,t.receiveShadow=!0):n==="sapling"?(t=tf(.72),t.rotation.y=Math.random()*Math.PI*2):n==="berry"?(t=Lh(1),t.rotation.y=Math.random()*Math.PI*2):n==="iron"?(t=Ty(1.2),t.rotation.y=Math.random()*Math.PI*2):n==="pickaxe"?(t=df(),t.scale.setScalar(.78),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironAxe"?(t=ff(),t.scale.setScalar(.8),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):n==="ironSword"?(t=pf(),t.scale.setScalar(.68),t.rotation.set(.05,Math.random()*Math.PI*2,.04)):n==="ironWall"?(t=by(),t.rotation.y=Math.random()*Math.PI*2):t=Lh(1),t}function Mi(n,t,e,i={}){const r=If(n),s=ue(t,e),a=n==="wood"?.17:n==="berry"?.14:n==="iron"?.13:n==="pickaxe"||n==="ironAxe"||n==="ironSword"?.5:.02,c=n==="sapling"?.72:1,l=i.startY??s+a+.45;r.position.set(t,l,e),le.add(r);const h={type:n,mesh:r,x:t,z:e,groundY:s,restY:a,baseScale:c,velocityY:i.velocityY??(n==="wood"?2.2:2.6),landed:!1,pickupDelay:i.pickupDelay??.35,carried:!1,popping:0,popDuration:.24};if(r.traverse(f=>{f.userData.itemRef=h}),dn.push(h),dn.length>80)for(let f=0;f<dn.length;f+=1){const p=dn[f];if(!p.carried&&p.popping<=0){jl(p);break}}return h}function jl(n){const t=dn.indexOf(n);t>=0&&dn.splice(t,1),zt===n&&(zt=null),le.remove(n.mesh)}function da(n){!n||n.popping>0||(zt===n&&(zt=null),n.carried=!1,n.popping=n.popDuration)}function Ay(n,t=0){const e=X.position.x-n.position.x,i=X.position.z-n.position.z,s=Math.atan2(e,i)+(t-1)*.62+(Math.random()-.5)*.32,o=n.userData.scale*.35+.7+Math.random()*.45;Mi("wood",n.position.x+Math.sin(s)*o,n.position.z+Math.cos(s)*o,{startY:n.position.y+.9,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}function Ry(n){const t=Math.atan2(X.position.x-n.position.x,X.position.z-n.position.z)+(Math.random()-.5)*1.2,e=n.userData.scale*.3+.95;Mi("sapling",n.position.x+Math.sin(t)*e,n.position.z+Math.cos(t)*e,{startY:n.position.y+.8,velocityY:2.6,pickupDelay:.45})}function Zl(){for(const n of aa){const t=dn.filter(e=>e.type==="berry"&&!e.carried&&e.popping<=0&&Math.hypot(e.x-n.x,e.z-n.z)<2.1).length;for(let e=t;e<3;e+=1){const i=Math.random()*Math.PI*2,r=.35+Math.random()*.45,s=n.x+Math.cos(i)*r,o=n.z+Math.sin(i)*r;Mi("berry",s,o,{startY:ue(s,o)+.55,velocityY:1.8,pickupDelay:.6})}}}const Cy=[{x:Ke.x-1.5,z:Ke.z-1.2},{x:Ke.x-1.1,z:Ke.z+1.4},{x:$e.x-2,z:$e.z-.6},{x:$e.x+.4,z:$e.z+1.8}];function Df(){for(const n of Cy){const t=n.x,e=n.z;dn.some(r=>r.type==="iron"&&!r.carried&&r.popping<=0&&Math.hypot(r.x-t,r.z-e)<.7)||Mi("iron",t,e,{startY:ue(t,e)+.45,velocityY:1.4,pickupDelay:.25})}}function Py(){for(const n of dn)n.carried=!1,n.popping=0,le.remove(n.mesh);dn.length=0,zt=null,Zl(),Df(),jt()}function Vo(){return u.backpack.wood+u.backpack.sapling+u.backpack.berry+u.backpack.iron}function mo(n){return u.backpack[n]+((zt==null?void 0:zt.type)===n?1:0)}function fa(){return u.equippedTool==="backpack"}function Jl(n){if(!n||n.carried||n.popping>0)return!1;if(zt)return bt("Hands full"),!1;n.carried=!0,n.landed=!0,n.pickupDelay=0,zt=n;const t=u.cameraYaw;return n.mesh.position.set(X.position.x-Math.cos(t)*.98+Math.sin(t)*.22,X.position.y+1,X.position.z+Math.sin(t)*.98+Math.cos(t)*.22),jt(),Ea(),bt(`Picked up ${Yl[n.type]||Yr[n.type]}`),!0}function Uf(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.dropCooldown>0||!zt)return;const n=zt;zt=null,n.carried=!1;const t=X.position.x,e=X.position.z;n.x=t,n.z=e,n.groundY=ue(t,e),n.velocityY=.9,n.landed=!1,n.pickupDelay=.3,n.mesh.position.set(t,X.position.y+1.05,e),u.dropCooldown=.3,jt(),bt("Released item")}function Ly(){return Math.max(0,u.backpackCapacity-Vo())}function Nf(n){const t=u.sackOrder.lastIndexOf(n);return t<0?!1:(u.sackOrder.splice(t,1),!0)}function fc(){if(!u.sackOrder.length)return null;const n=u.sackOrder.pop();return u.backpack[n]>0&&(u.backpack[n]-=1),Ln.classList.remove("pop"),Ln.offsetWidth,Ln.classList.add("pop"),gi.classList.remove("pop"),gi.offsetWidth,gi.classList.add("pop"),n}function Iy(){if(!u.started||u.gameOver||u.falling||u.paused||!fa()||!zt)return;if(Ly()<=0){bt("Sack full");return}const n=zt;zt=null,u.backpack[n.type]=(u.backpack[n.type]||0)+1,u.sackOrder.push(n.type),da(n),gi.classList.remove("pop"),gi.offsetWidth,gi.classList.add("pop"),Ln.classList.remove("pop"),Ln.offsetWidth,Ln.classList.add("pop"),Ea(),bt(`Stored ${Yl[n.type]||Yr[n.type]}`),jt()}function Dy(){if(!u.started||u.gameOver||u.falling||u.paused||!fa()||!u.sackOrder.length)return;if(zt){bt("Hands full");return}const n=u.sackOrder[u.sackOrder.length-1];if(n==="wood"&&Us()<=uy){fc(),jt(),zh(n,new C(Wt.position.x,Wt.position.y+.8,Wt.position.z),()=>{const i=Tf[u.fireLevel]||2;Of(i),bt(`Log added (+${i})`)});return}if(ha()<=hy&&(n==="wood"||n==="iron")){fc(),jt(),zh(n,new C(Me.position.x,Me.position.y+1.45,Me.position.z),()=>{re.stock[n]+=1,Hf(n),sp(),Be.shake=.5,eu(n),jt(),bt(`+1 ${n} to the bench`)});return}const t=fc(),e=Mi(t,X.position.x,X.position.z,{startY:X.position.y+1.05,velocityY:.35,pickupDelay:0});e.landed=!0,Jl(e),jt()}function Ff(){if(!u.started||u.gameOver||u.falling||u.paused||!zt||zt.type!=="berry")return;const n=zt;zt=null,da(n),u.hunger=qt(u.hunger+Ho,0,100),Ea(),bt(`Ate berries (+${Ho} hunger)`),jt()}function Of(n){if(!(!u.started||u.gameOver)){if(u.fireOut&&(u.fireOut=!1,u.fireDarken=0,u.fireFlare=.8,Ls.classList.remove("visible"),bt("The fire roars back to life")),u.fireLevel>=zo){u.fireProgress=100,jt();return}u.fireFlare=Math.max(u.fireFlare,.55),u.fireProgress=qt(u.fireProgress+n,0,100),u.fireProgress>=100?Uy():jt()}}function Uy(){if(u.fireLevel>=zo){u.fireProgress=100,jt();return}u.fireLevel+=1,u.fireProgress=u.fireLevel>=zo?100:fy,u.fireOut=!1,u.fireDarken=0,u.fireFlare=1,ru(u.fireLevel),uS(),gw(),bt("Campfire level up!"),jt()}function Ny(){if(!zt||zt.type!=="wood"){bt("Only logs burn");return}const n=Tf[u.fireLevel]||2;da(zt),Of(n),bt(`Log added (+${n})`)}function Fy(n){const t=n.userData,e=n.position.x-X.position.x,i=n.position.z-X.position.z,r=Math.hypot(e,i)||1,s=e/r,o=i/r;t.choppable=!1,t.falling=!0,t.fallProgress=0,t.lootDropped=!1,t.fallAxis=new C(o,0,-s).normalize(),t.hits=t.hitsMax,t.shake=0}function Bf(n,t=1){if(!n||u.swingCooldown>0)return;const e=n.userData;u.swingCooldown=qd,e.shake=bf,u.chopTimer=.3,X.rotation.y=Math.atan2(n.position.x-X.position.x,n.position.z-X.position.z),e.hits-=t,yw(),Lf("tree",n),e.hits<=0&&(Fy(n),fi())}function kf(n,t=1){if(!n||n.broken||u.swingCooldown>0)return;if(!Kl(u.equippedTool)){bt("Use the Pickaxe");return}if(u.swingCooldown=qd,X.rotation.y=Math.atan2(n.x-X.position.x,n.z-X.position.z),u.chopTimer=.3,n.hits-=t,n.shake=.3,op(),Lf("rock",n),n.hits>0)return;n.broken=!0,n.regrow=Nh+Math.random()*(My-Nh),n.group.visible=!1,fi(),ww();const e=2+Math.floor(Math.random()*2);for(let i=0;i<e;i+=1){const r=Math.random()*Math.PI*2,s=.55+Math.random()*.55,o=n.x+Math.cos(r)*s,a=n.z+Math.sin(r)*s;Mi("iron",o,a,{startY:ue(o,a)+.5,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}jt(),bt(`Mined ${e} iron`)}function Oy(n){for(const t of tr){if(t.broken){t.regrow=Math.max(0,t.regrow-n),t.regrow<=0&&(t.broken=!1,t.hits=t.hitsMax,t.group.visible=!0,t.group.scale.setScalar(t.scale*.6),bt("An iron rock has regrown"));continue}if(t.shake>0){t.shake=Math.max(0,t.shake-n);const r=t.shake/.3,s=performance.now()*.001;t.group.rotation.z=Math.sin(s*48)*.04*r}else t.group.rotation.z=0;const e=.82+t.hits/t.hitsMax*.18,i=t.scale*e;t.group.scale.x<i?t.group.scale.setScalar(Math.min(i,t.group.scale.x+n*1.6)):t.group.scale.x>i&&t.group.scale.setScalar(Math.max(i,t.group.scale.x-n*1.6))}}let ol=new Map,Bh=!1;function Ql(n){return n.kind==="locked"||n.tier>re.tier}function tu(n){return!!(n.oneTime&&re.crafted.has(n.id)||n.trap&&kr.length>=Es)}function By(n){return re.stock.wood>=(n.cost.wood||0)&&re.stock.iron>=(n.cost.iron||0)}function ky(n){const t=[];return n.cost.wood&&t.push(`${n.cost.wood}W`),n.cost.iron&&t.push(`${n.cost.iron}I`),t.join(" · ")||"FREE"}function zf(n=""){if(Eh.textContent=String(re.stock.wood),Th.textContent=String(re.stock.iron),n){const t=n==="wood"?Eh:Th;t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop")}}function zy(){if(Bh)return;Bh=!0,lc.innerHTML="",ol=new Map;let n=1;for(const t of $l){if(t.tier!==n){n=t.tier;const a=document.createElement("div");a.className="craft-tier-label",a.textContent=`NEEDS CRAFTING BENCH ${t.tier}`,lc.appendChild(a)}const e=document.createElement("button");e.type="button",e.className="craft-card",e.dataset.recipe=t.id;const i=document.createElement("span");i.className="craft-card-icon",i.textContent=t.icon;const r=document.createElement("span");r.className="craft-card-name",r.textContent=t.name;const s=document.createElement("span");s.className="craft-card-cost",s.textContent=ky(t);const o=document.createElement("span");o.className="craft-card-badge",e.append(i,r,s,o),e.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),Hy(t.id)}),lc.appendChild(e),ol.set(t.id,e)}}function pa(){for(const[n,t]of ol){const e=ua.get(n);if(!e)continue;const i=Ql(e),r=tu(e);t.classList.toggle("locked",i),t.classList.toggle("soldout",r),t.classList.toggle("selected",u.craftSelected===n);const s=t.querySelector(".craft-card-badge");let o="";r?o="SOLD OUT":i?o="🔒":e.trap?o=`x${Es}`:e.repeatable&&(o="∞"),s.textContent=o,s.style.display=o?"":"none"}}function Hy(n){ua.get(n)&&(u.craftSelected=n,pa(),ma(),Kr())}function ma(){_M.textContent=`BENCH ${re.tier}`,zf();let n=ua.get(u.craftSelected);n||(n=$l[0],u.craftSelected=n.id);const t=Ql(n),e=tu(n);vM.textContent=n.icon,xM.textContent=n.name,MM.textContent=t?`Requires Crafting Bench ${n.tier}.`:n.desc,uc.innerHTML="";const i=["wood","iron"];let r=!1;for(const o of i){const a=n.cost[o]||0;if(!a)continue;r=!0;const c=document.createElement("span");c.className="cost-chip",c.textContent=`${a} ${o}`,re.stock[o]<a&&c.classList.add("missing"),uc.appendChild(c)}if(!r){const o=document.createElement("span");o.className="cost-chip",o.textContent=t?"NOT AVAILABLE":"NO COST",uc.appendChild(o)}let s="";e?s="SOLD OUT":t?s=n.tier===4?"COMING SOON":`LOCKED · NEEDS BENCH ${n.tier}`:n.trap?s=`MAX ${Es} PLACED`:n.repeatable&&(s="∞ REPEATABLE"),yM.textContent=s,Qc.disabled=t||e,Qc.textContent=e?"SOLD OUT":"CRAFT"}function eu(n=""){xf(n),u.craftOpen&&(zf(n),pa(),ma(),Br())}function Gy(){!u.started||u.gameOver||u.falling||u.paused||(u.craftOpen=!0,ii(!1),er(!1),xa(),ji.clear(),u.look.active=!1,u.pinchDistance=0,zy(),pa(),ma(),Wd.classList.remove("hidden"),$r(),Kr())}function yi(){u.craftOpen=!1,Wd.classList.add("hidden"),$r()}function Br(){oM.textContent=u.ownedTools.ironAxe?"Good Axe":"Old Axe",aM.textContent=u.goodSack?"Good Sack":"Old Sack",cM.textContent="Pickaxe",lM.textContent="Torch",uM.textContent="Iron Sword"}function Vy(n){n.kind==="tool"?(u.ownedTools[n.id]=!0,n.id==="ironAxe"&&(u.goodAxe=!0),Br(),$r(),bt(`${n.name} added to the hotbar`)):n.kind==="sack"?(u.goodSack=!0,u.backpackCapacity=Uh,Br(),jt(),bt(`Good Sack: capacity ${Uh}`)):n.kind==="bench"?(re.tier=n.benchTier,Mf(),bt(`Crafting Bench ${re.tier} unlocked`)):n.kind==="placeable"&&(u.carriedPlaceable=n.placeType,ga(),bt(`${n.name} ready — tap Place`))}function Wy(){if(!u.started||u.gameOver||u.falling)return;const n=ua.get(u.craftSelected);if(n){if(Ql(n)){bt(`Needs Crafting Bench ${n.tier}`);return}if(tu(n)){bt(n.trap?"All bear traps are placed":"Sold out");return}if(!By(n)){const t=[];re.stock.wood<(n.cost.wood||0)&&t.push("wood"),re.stock.iron<(n.cost.iron||0)&&t.push("iron"),bt(`Not enough ${t.join(" or ")} in the bench`),mw();return}re.stock.wood-=n.cost.wood||0,re.stock.iron-=n.cost.iron||0,n.oneTime&&re.crafted.add(n.id),Vy(n),pw(),eu(),pa(),ma(),jt()}}function ga(){Kf()}function Xy(n,t,e,i){const r=new Ut;if(n==="logWall"){const s=new xt({color:8014885,roughness:.9}),o=new xt({color:5189398,roughness:.95});for(let a=0;a<3;a+=1){const c=new G(new ae(.15,.16,1.8,7),s);c.rotation.z=Math.PI/2,c.position.set(0,.3+a*.32,0),c.castShadow=!0,r.add(c)}for(const a of[-1,1]){const c=new G(new ae(.1,.12,1.15,6),o);c.position.set(a*.82,.58,.12),c.castShadow=!0,r.add(c)}}else{for(let s=0;s<3;s+=1){const o=new G(new Lt(.52,1.02,.16),yf);o.position.set((s-1)*.54,.54,0),o.castShadow=!0,o.receiveShadow=!0,r.add(o);const a=new G(new Lt(.48,.1,.19),sl);a.position.set((s-1)*.54,.88,0),a.castShadow=!0,r.add(a)}for(const s of[-1,1]){const o=new G(new Lt(.14,1.2,.24),sl);o.position.set(s*.88,.6,0),o.castShadow=!0,r.add(o)}}r.position.set(t,ue(t,e),e),r.rotation.y=i,le.add(r),ws.push({group:r,x:t,z:e,rotation:i,width:1.9,depth:.34,kind:n})}const kr=[],qy=new xt({color:8161165,roughness:.42,metalness:.7}),kh=new xt({color:4147277,roughness:.5,metalness:.62});function Yy(n,t,e){const i=new Ut,r=new G(new Ji(.42,.045,6,14),kh);r.rotation.x=Math.PI/2,r.position.y=.06,i.add(r);const s=new G(new ae(.3,.34,.07,10),kh);s.position.y=.05,i.add(s);const o=new Ut;o.position.y=.08;for(let a=0;a<6;a+=1){const c=a/6*Math.PI*2,l=new G(new Ie(.045,.2,4),qy);l.position.set(Math.cos(c)*.36,.09,Math.sin(c)*.36),l.rotation.z=Math.cos(c)*.5,l.rotation.x=Math.sin(c)*.5,o.add(l)}i.add(o),i.position.set(n,ue(n,t),t),i.rotation.y=e,le.add(i),kr.push({group:i,jaws:o,x:n,z:t,rotation:e,sprung:!1,anim:0})}function $y(){for(const n of kr)le.remove(n.group);kr.length=0}function Ky(n){for(const t of kr){if(t.sprung){t.anim=Math.min(1,t.anim+n*5);const e=t.anim;t.jaws.scale.y=1+e*.8,t.jaws.position.y=.08+e*.1;continue}for(const e of ni){if(!e.visible||e.userData.fading||e.userData.dead||Math.hypot(e.position.x-t.x,e.position.z-t.z)>.82)continue;t.sprung=!0,t.anim=0;const i=e.userData;i.health-=2,i.hitTimer=.3,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.2,i.stunTimer=1.6,i.health<=0&&(i.health=0,i.dead=!0,su(e,4)),ap(),bt("Bear trap snapped!");break}}}function jy(){if(!u.started||u.gameOver||u.falling||u.paused)return;const n=u.carriedPlaceable;if(!n)return;const t=u.cameraYaw,e=X.position.x+Math.sin(t)*2.1,i=X.position.z+Math.cos(t)*2.1,r=t;if(n==="bearTrap"){if(kr.length>=Es){bt(`Only ${Es} traps can be placed`);return}Yy(e,i,r),bt("Bear trap placed")}else Xy(n,e,i,r),bt(`${Yr[n]||"Wall"} placed`);u.carriedPlaceable=null,ga(),cp(),jt()}function Hf(n){const t=n==="wood"?new xt({color:9132587,roughness:.9}):new xt({color:10135469,roughness:.4,metalness:.6}),e=new G(n==="wood"?new ae(.09,.1,.32,6):new Lt(.2,.2,.2),t);e.position.set(Me.position.x,Me.position.y+2,Me.position.z),le.add(e),Co.push({mesh:e,t:0})}function Zy(){if(!zt)return;const n=zt.type;if(n!=="wood"&&n!=="iron"){bt("Can't grind this");return}da(zt),re.stock[n]+=1,Hf(n),sp(),Be.shake=.5,eu(n),jt(),bt(`+1 ${n} to the bench (${re.stock[n]})`)}function Jy(n){const t=performance.now()*.001;Be.shake=Math.max(0,(Be.shake||0)-n);const e=Be.shake>0?Math.sin(t*58)*.035*(Be.shake/.5):0;if(Be.shakeGroup&&(Be.shakeGroup.rotation.z=e,Be.shakeGroup.position.y=Math.abs(e)*.2),Be.wheels&&Be.shake>0)for(const i of Be.wheels)i.rotation.x+=n*14;for(let i=Co.length-1;i>=0;i-=1){const r=Co[i];r.t+=n;const s=r.t/.4;r.mesh.position.y=Me.position.y+2-s*.65,r.mesh.rotation.x+=n*7,r.mesh.scale.setScalar(Math.max(.05,1-s*.85)),s>=1&&(le.remove(r.mesh),Co.splice(i,1))}for(const i of["wood","iron"]){const r=i==="wood"?Dn.woodSign:Dn.ironSign;!r||!r.mesh||(r.pop=Math.max(0,(r.pop||0)-n*3.2),r.mesh.scale.setScalar(1+r.pop*.35))}}const Qy=[];function zh(n,t,e){const i=If(n),r=new C(X.position.x,X.position.y+1.1,X.position.z);i.position.copy(r),i.scale.setScalar(.9),le.add(i),Qy.push({mesh:i,start:r,target:t.clone(),t:0,duration:.45,onArrive:e}),Ea()}function Hh(n){const t=performance.now();for(let e=dn.length-1;e>=0;e-=1){const i=dn[e];if(i.popping>0){i.popping=Math.max(0,i.popping-n);const r=1-i.popping/i.popDuration;i.mesh.scale.setScalar(i.baseScale*(1+r*1.1)),i.mesh.position.y+=n*1.35,i.popping<=0&&jl(i);continue}if(i.carried){if(zt!==i){i.carried=!1;continue}const r=u.cameraYaw,s=Math.sin(r),o=Math.cos(r),a=-Math.cos(r),c=Math.sin(r),l=Math.sin(t*.003)*.05,h=X.position.x+a*.98+s*.22,f=X.position.z+c*.98+o*.22,p=X.position.y+1+l,g=1-Math.exp(-10*n);i.mesh.position.x+=(h-i.mesh.position.x)*g,i.mesh.position.y+=(p-i.mesh.position.y)*g,i.mesh.position.z+=(f-i.mesh.position.z)*g;const _=i.mesh.position.x-X.position.x,v=i.mesh.position.z-X.position.z,m=Math.hypot(_,v),d=.82;if(m<d){const w=d/Math.max(m,.001);i.mesh.position.x=X.position.x+_*w,i.mesh.position.z=X.position.z+v*w}i.mesh.rotation.y+=n*.8;continue}if(i.pickupDelay=Math.max(0,i.pickupDelay-n),i.landed)i.mesh.position.y=i.groundY+i.restY+Math.abs(Math.sin(t*.0028+i.mesh.id))*(i.type==="berry"?.025:.018),i.type==="sapling"&&(i.mesh.rotation.y+=n*.4),i.type==="berry"&&(i.mesh.rotation.y+=n*.35);else{i.velocityY-=13*n,i.mesh.position.y+=i.velocityY*n,i.type==="wood"&&(i.mesh.rotation.y+=n*3.2),i.type==="sapling"&&(i.mesh.rotation.y+=n*2.4);const r=i.groundY+i.restY;i.mesh.position.y<=r&&(i.mesh.position.y=r,i.landed=!0)}}}function Gf(n){const t=n.userData;t.choppable=!0,t.baseChoppable=!0,t.falling=!1,t.fallProgress=0,t.lootDropped=!1,t.hits=Ss,t.hitsMax=Ss,t.shake=0,t.highlight=0,n.visible=!0,n.quaternion.identity(),t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}function Vf(){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.plantCooldown>0)return;if(!zt||zt.type!=="sapling"){bt("Carry a sapling to plant it");return}const n=new C(Math.sin(X.rotation.y),0,Math.cos(X.rotation.y)),t=X.position.x+n.x*1.75,e=X.position.z+n.z*1.75;if(Math.hypot(t-Wt.position.x,e-Wt.position.z)<1.6){bt("Too close to the campfire");return}jl(zt),u.plantCooldown=.45;const r=tf(.35);r.position.set(t,ue(t,e),e),r.rotation.y=Math.random()*Math.PI*2,le.add(r);const s={mesh:r,x:t,z:e,growth:0,sway:Math.random()*Math.PI*2};r.userData.saplingRef=s,Lr.push(s),jt(),bt("Planted a sapling")}function tS(n){for(let t=Lr.length-1;t>=0;t-=1){const e=Lr[t];e.growth+=n;const i=qt(e.growth/_y,0,1),r=Math.min(hc.length-1,Math.floor(i*hc.length)),s=hc[r],o=1-Math.exp(-6*n),a=e.mesh.scale.x+(s-e.mesh.scale.x)*o;if(e.mesh.scale.setScalar(a),e.mesh.rotation.z=Math.sin(performance.now()*.0016+e.sway)*.035,i>=1){le.remove(e.mesh),Lr.splice(t,1);const c=Jd(e.x,e.z,.9+Math.random()*.35);c.userData.planted=!0,Gf(c)}}}function Gh(n){const t=performance.now()*.001,e=1-Math.exp(-10*n);for(const i of qe){if(!i.visible)continue;const r=i.userData;if(r.falling){r.fallProgress=Math.min(1,r.fallProgress+n/gy);const a=r.fallProgress*r.fallProgress*Math.PI*.5;if(i.quaternion.setFromAxisAngle(r.fallAxis,a),r.fallProgress>=1&&!r.lootDropped){r.lootDropped=!0,Sw();for(let c=0;c<3;c+=1)Ay(i,c);Ry(i)}r.fallProgress>=1&&(i.visible=!1);continue}if(!r.choppable)continue;const s=i===u.targetTree?1:0;r.highlight+=(s-r.highlight)*e;const o=r.trunk.material;if(o.emissiveIntensity=r.highlight*(.45+Math.sin(t*7)*.16),r.shake>0){r.shake=Math.max(0,r.shake-n);const a=r.shake/bf;i.rotation.z=Math.sin(t*55)*.055*a,i.rotation.x=Math.cos(t*43)*.03*a}else(i.rotation.z!==0||i.rotation.x!==0)&&(i.rotation.z=0,i.rotation.x=0)}}const ni=[];function eS(){const n=new Ut,t=new xt({color:1053981,roughness:.96,metalness:.04,flatShading:!0}),e=new sn({color:16742963}),i=new Ut;n.add(i);const r=new G(new qi(.48,0),t);r.position.y=1.12,r.scale.set(1.05,1.2,.72),r.castShadow=!0,i.add(r);const s=new G(new Ie(.32,.6,5),t);s.position.y=.68,s.rotation.y=Math.PI/5,s.castShadow=!0,i.add(s);const o=new G(new Qn(.3,0),t);o.position.y=1.82,o.scale.set(1,1.12,.9),o.castShadow=!0,i.add(o);const a=new Ie(.055,.28,4),c=new G(a,t);c.position.set(-.17,2.05,0),c.rotation.z=.32,c.castShadow=!0,i.add(c);const l=new G(a,t);l.position.set(.17,2.05,0),l.rotation.z=-.32,l.castShadow=!0,i.add(l);const h=new Nn(.055,6,5),f=new G(h,e);f.position.set(-.11,1.86,.255),i.add(f);const p=new G(h,e);p.position.set(.11,1.86,.255),i.add(p);const g=[];for(const v of[-1,1]){const m=new Ut;m.position.set(v*.5,1.48,0);const d=new G(new ae(.075,.11,.78,5),t);d.position.y=-.38,d.castShadow=!0,m.add(d);const w=new G(new Ie(.09,.24,4),t);w.position.y=-.82,w.rotation.x=Math.PI,w.castShadow=!0,m.add(w),i.add(m),g.push(m)}const _=[];for(const v of[-1,1]){const m=new Ut;m.position.set(v*.18,.72,0);const d=new G(new ae(.09,.12,.7,5),t);d.position.y=-.35,d.castShadow=!0,m.add(d);const w=new G(new Lt(.17,.1,.27),t);w.position.set(0,-.73,.07),w.castShadow=!0,m.add(w),n.add(m),_.push(m)}return n.position.set(0,-40,0),n.visible=!1,n.userData={bodyMat:t,eyeMat:e,bodyGroup:i,arms:g,legs:_,speed:1.2,damage:7,health:2,maxHealth:2,hitTimer:0,attackCooldown:0,phase:Math.random()*Math.PI*2,knockback:new C,fading:!1,fade:1,targetCamp:!1,circleDir:Math.random()<.5?1:-1},He.add(n),n.userData.enemyRef=n,ni.push(n),n}for(let n=0;n<Af;n+=1)eS();function Wf(n){const t=n.userData;t.fading=!1,t.fade=1,t.hitTimer=0,t.attackCooldown=.6+Math.random()*.6,t.knockback.set(0,0,0),t.bodyMat.transparent=!1,t.bodyMat.opacity=1,t.bodyMat.emissive.setHex(0),t.bodyMat.emissiveIntensity=1,t.eyeMat.transparent=!1,t.eyeMat.opacity=1,n.scale.setScalar(1),n.visible=!0}const Cn=new G(new Ie(.36,1.5,7),new sn({color:16743202,transparent:!0,opacity:.58,blending:Vi,depthWrite:!1}));Cn.position.set(0,1.15,0);Wt.add(Cn);const Jn=new G(new Ie(.2,1.05,6),new sn({color:16769674,transparent:!0,opacity:.8,blending:Vi,depthWrite:!1}));Jn.position.set(0,.92,0);Wt.add(Jn);const Ki=30,Gi=new Float32Array(Ki*3),Hi=new Float32Array(Ki*3),al=new Float32Array(Ki),Vh=new Float32Array(Ki),_a=new Ye,nu=new Sn(Gi,3);_a.setAttribute("position",nu);function nS(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),i=e.createRadialGradient(32/2,32/2,0,32/2,32/2,32/2);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.35,"rgba(255, 224, 160, 0.95)"),i.addColorStop(.7,"rgba(255, 168, 66, 0.45)"),i.addColorStop(1,"rgba(255, 140, 40, 0)"),e.fillStyle=i,e.fillRect(0,0,32,32);const r=new Ud(t);return r.colorSpace=ln,r}const cl=new Dd({color:16761707,size:.065,map:nS(),transparent:!0,opacity:.9,depthWrite:!1,blending:Vi,sizeAttenuation:!0}),iu=new Hx(_a,cl);iu.frustumCulled=!1;Wt.add(iu);function Xf(n){const t=n*3;Gi[t]=(Math.random()-.5)*.38,Gi[t+1]=.9+Math.random()*.3,Gi[t+2]=(Math.random()-.5)*.38,Hi[t]=(Math.random()-.5)*.45,Hi[t+1]=.75+Math.random()*1.25,Hi[t+2]=(Math.random()-.5)*.45,Vh[n]=.7+Math.random()*.9,al[n]=Vh[n]}for(let n=0;n<Ki;n+=1)Xf(n);nu.needsUpdate=!0;function iS(n,t){for(let e=0;e<Ki;e+=1){al[e]-=n,al[e]<=0&&Xf(e);const i=e*3;Gi[i]+=Hi[i]*n,Gi[i+1]+=Hi[i+1]*n,Gi[i+2]+=Hi[i+2]*n,Hi[i+1]-=n*.55}nu.needsUpdate=!0,_a.setDrawRange(0,Math.max(5,Math.floor(Ki*(.4+t*.6))))}const Ui=[],rS=new sn({color:10267042,transparent:!0,opacity:.08});for(let n=0;n<4;n+=1){const t=new G(new Nn(.11+n*.015,6,6),rS.clone());t.position.y=1.55+n*.42,t.userData.tapIgnore=!0,Wt.add(t),Ui.push(t)}const Wh=new xt({color:6962461,roughness:.92}),sS=new xt({color:4597775,roughness:.95}),oS=new xt({color:7107447,roughness:.95}),Xh=new xt({color:3817797,roughness:.5,metalness:.7}),aS=new xt({color:4266250,emissive:16734738,emissiveIntensity:1.4,roughness:.8});let ke=null;const cS=new C(0,1,0);function lS(n,t,e,i,r){const s=e.clone().sub(t),o=s.length();if(o<.001)return;const a=new G(new ae(i*.85,i,o,6),r);a.position.copy(t).add(e).multiplyScalar(.5),a.quaternion.setFromUnitVectors(cS,s.normalize()),a.castShadow=!0,a.receiveShadow=!0,n.add(a)}function ru(n){for(;vn.children.length>0;){const s=vn.children.pop();s.geometry&&s.geometry.dispose()}const t=n===1?4:6,e=n===1?.5:.68,i=n===1?1:1.35;for(let s=0;s<t;s+=1){const o=s/t*Math.PI*2+.35;lS(vn,new C(Math.cos(o)*e,.08,Math.sin(o)*e),new C(Math.cos(o)*.08,i,Math.sin(o)*.08),.105,s%2===0?Wh:sS)}if(n>=2)for(const s of[-1,1]){const o=new G(new ae(.2,.22,1.5,7),Wh);o.rotation.z=Math.PI/2,o.rotation.y=s*.28,o.position.set(s*1.45,.22,s*.35),o.castShadow=!0,o.receiveShadow=!0,vn.add(o)}if(n>=3){const s=n>=4?1.95:1.45,o=n>=4?12:8;for(let a=0;a<o;a+=1){const c=a/o*Math.PI*2,l=.85+Math.random()*.35,h=new G(new qi(.2*l,0),oS);h.position.set(Math.cos(c)*s,.15*l,Math.sin(c)*s),h.rotation.set(Math.random(),Math.random(),Math.random()),h.castShadow=!0,h.receiveShadow=!0,vn.add(h)}}if(n>=4)for(let s=0;s<9;s+=1){const o=Math.random()*Math.PI*2,a=.5+Math.random()*1.15,c=new G(new Lt(.11,.045,.11),aS);c.position.set(Math.cos(o)*a,.05,Math.sin(o)*a),c.rotation.y=Math.random()*Math.PI,vn.add(c)}if(n>=5){const s=new G(new Ji(1.95,.075,6,20),Xh);s.rotation.x=Math.PI/2,s.position.y=.1,s.castShadow=!0,vn.add(s);for(let o=0;o<4;o+=1){const a=o/4*Math.PI*2+.4,c=new G(new Lt(.12,.5,.12),Xh);c.position.set(Math.cos(a)*1.95,.28,Math.sin(a)*1.95),c.rotation.y=-a,vn.add(c)}}vn.scale.setScalar(.62),u.fireGrow=0,Jn&&Jn.material&&Jn.material.color.setHex(n>=5?14218495:16769674),Cn&&Cn.material&&Cn.material.color.setHex(n>=5?8309759:16743202);const r=ql[n]||8;qf(r)}function qf(n){if(ke&&(le.remove(ke),ke.geometry.dispose(),ke.material.dispose(),ke=null),!n||n<=0)return;const t=[],e=96;for(let s=0;s<e;s+=1){const o=s/e*Math.PI*2;t.push(new C(Math.cos(o)*n,.05,Math.sin(o)*n))}const i=new Ye().setFromPoints(t),r=new Gx({color:16756838,transparent:!0,opacity:.32,dashSize:.42,gapSize:.36,depthWrite:!1});ke=new zx(i,r),ke.computeLineDistances(),ke.position.copy(Wt.position),ke.renderOrder=1,le.add(ke)}function uS(){bo.classList.remove("flash"),bo.offsetWidth,bo.classList.add("flash")}function hS(){u.startHintTimer=8,kd.classList.add("visible")}const Yf=new G(new Nn(110,24,24),new sn({color:399393,side:ze,fog:!1}));He.add(Yf);const un=new Ps(16752970,2.2,12,2);un.position.set(0,1.2,0);un.visible=!1;He.add(un);const u={started:!1,night:1,maxNight:99,health:100,hunger:100,damageFlash:0,attackCooldown:0,attackTimer:0,nearFire:!0,keys:new Set,joystick:{x:0,y:0,active:!1},look:{active:!1},pinchDistance:0,cameraYaw:0,cameraPitch:0,cameraDistance:Ul,firstPerson:!1,viewBlend:0,cameraInitialized:!1,cycleTime:0,daylight:1,nightActive:!1,gameOver:!1,pointerId:null,victory:!1,velocityY:0,grounded:!0,jumpHeld:!1,walkPhase:0,idleTime:0,moveSpeed:0,backpack:{wood:0,sapling:0,berry:0,iron:0},sackOrder:[],backpackCapacity:Rf,goodSack:!1,goodAxe:!1,ownedTools:{axe:!0,pickaxe:!1,torch:!1,ironAxe:!1,ironSword:!1},equippedTool:null,equipTimer:0,inventoryOpen:!1,craftOpen:!1,settingsOpen:!1,grinderInReach:!1,benchInReach:!1,fireLevel:1,fireProgress:50,fireGrow:0,fireDarken:0,startHintTimer:0,craftSelected:"pickaxe",carriedPlaceable:null,dropCooldown:0,starveTimer:0,portrait:!1,paused:!1,fireOut:!1,fireFlare:0,fireInReach:!1,chopTimer:0,plantCooldown:0,swingCooldown:0,targetTree:null,targetRock:null,falling:0,invuln:0,hitEffectTimer:0};try{window.localStorage.removeItem("nights.invertHorizontalLook"),window.localStorage.removeItem("nights.cameraView")}catch{}function dS(){const n=u.cameraYaw,t=u.cameraPitch,e=Math.sin(n),i=Math.cos(n),r=-i,s=e;ul(50,0);const a=(Math.sin(u.cameraYaw)-e)*r+(Math.cos(u.cameraYaw)-i)*s>0;ul(0,-50);const c=u.cameraPitch>t;u.cameraYaw=n,u.cameraPitch=t,a||console.error("[camera self-test] FAILED: +50 px right drag turned the view left"),c||console.error("[camera self-test] FAILED: upward drag did not look up"),a&&c&&console.info("[camera self-test] passed: drag right looks right, drag up looks up")}dS();function $f(n,t=!0){u.firstPerson=!!n,as&&(as.classList.toggle("first-person",u.firstPerson),as.setAttribute("aria-pressed",String(u.firstPerson)),as.setAttribute("aria-label",u.firstPerson?"Switch to third-person view":"Switch to first-person view")),t&&bt(u.firstPerson?"First-person view":"Third-person view")}function fS(){$f(!u.firstPerson),Kr()}function qt(n,t,e){return Math.min(Math.max(n,t),e)}function ll(n){const t=qt(n,0,1);return t*t*(3-2*t)}function pS(n,t,e){let i=t-n;return i=Math.atan2(Math.sin(i),Math.cos(i)),n+i*e}function jt(){$x.textContent=`${u.night} / ${u.maxNight}`,Zx.textContent=String(mo("wood")),Jx.textContent=String(mo("sapling")),Qx.textContent=String(mo("berry")),tM.textContent=String(mo("iron")),jx.textContent=String(Math.max(0,Math.ceil(u.health))),nM.textContent=String(Math.max(0,Math.ceil(u.hunger)));const n=qt(u.health,0,100);rc.style.width=`${n}%`,rc.classList.toggle("low",n<=55&&n>25),rc.classList.toggle("critical",n<=25);const t=qt(u.hunger,0,100);wh.style.width=`${t}%`,wh.classList.toggle("low",t<=30),Kf(),Br(),ga();const e=u.started&&u.fireOut;Ls.classList.toggle("visible",e),gS(),hM.textContent=`${Vo()}/${u.backpackCapacity}`,fM.textContent=`${Vo()} / ${u.backpackCapacity}`,$r(),_S()}const go=["slot-a","slot-b","slot-c","slot-d","slot-e","slot-f"],mS=[Il,Ll,Rl,Al,ps,Cl,Pl];function Kf(){const n=!!zt,t=zt==null?void 0:zt.type,e=fa(),i=e&&u.sackOrder.length>0,r=n&&(t==="wood"||t==="iron")&&ha()<=wf,s=n&&t==="wood"&&Us()<=Sf;Bd.classList.toggle("available",n);const o=[];r&&o.push(Cl),s&&o.push(Pl),n&&e&&o.push(Al),n&&t==="sapling"&&o.push(Ll),n&&t==="berry"&&o.push(Rl),i&&o.push(ps),u.carriedPlaceable&&o.push(Il);for(const l of mS)l.classList.remove("available",...go);o.forEach((l,h)=>{l.classList.add("available",go[h]||go[go.length-1])});const a=n;ps.disabled=a;const c=ps.querySelector("span");c&&(c.textContent=a?"HANDS FULL":"UNSTORE")}function gS(){const n=u.fireLevel,t=qt(u.fireProgress,0,100),e=t>=99.95;n>=zo&&e?Sh.textContent=`level ${n} progress: MAX`:Sh.textContent=`level ${n} progress: ${Math.round(t)}/100`,oc.style.width=`${t}%`;let i="#3fbf73",r="rgba(95, 232, 139, 0.55)";t<20?(i="#e04b3f",r="rgba(240, 90, 72, 0.55)"):t<50&&(i="#f0c144",r="rgba(250, 205, 95, 0.55)"),oc.style.background=`linear-gradient(90deg, ${i}, ${i})`,oc.style.boxShadow=`0 0 10px ${r}`}function $r(){const n=[["axe",zd],["backpack",gi],["pickaxe",Hd],["torch",Gd],["ironSword",Vd]];for(const[t,e]of n){const i=t==="backpack"||!!u.ownedTools[t],r=t==="axe"?u.equippedTool==="axe"||u.equippedTool==="ironAxe":u.equippedTool===t;e.classList.toggle("hidden",!i),e.classList.toggle("equipped",r),e.setAttribute("aria-pressed",String(r))}}function _S(){if(!u.inventoryOpen)return;const n=`${u.backpack.wood}|${u.backpack.sapling}|${u.backpack.berry}|${u.backpack.iron}`;if(n===Fh)return;Fh=n,cc.innerHTML="";const t=[["wood","Wood log"],["sapling","Sapling"],["berry","Berry"],["iron","Iron piece"]];let e=!1;for(const[i,r]of t){const s=u.backpack[i];if(s<=0)continue;e=!0;const o=document.createElement("div");o.className="inventory-row";const a=document.createElement("span");a.className=`inv-icon ${i}`;const c=document.createElement("span");c.className="inv-name",c.textContent=r;const l=document.createElement("span");l.className="inv-count",l.textContent=`×${s}`;const h=document.createElement("button");if(h.className="inv-btn take",h.textContent="TAKE",h.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),vS(i)}),o.append(a,c,l,h),i==="berry"){const f=document.createElement("button");f.className="inv-btn eat",f.textContent="EAT",f.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),xS()}),o.append(f)}cc.appendChild(o)}if(!e){const i=document.createElement("div");i.className="inventory-empty",i.textContent="Your backpack is empty.",cc.appendChild(i)}}function ii(n){u.inventoryOpen=n,dM.classList.toggle("hidden",!n),$r()}function vS(n){if(!u.started||u.gameOver||u.falling||u.backpack[n]<=0)return;Nf(n),u.backpack[n]-=1;const t=X.position.x+Math.sin(X.rotation.y)*1.35,e=X.position.z+Math.cos(X.rotation.y)*1.35;Mi(n,t,e,{velocityY:2.2,pickupDelay:.3}),u.dropCooldown=.25,jt(),bt(`Took out ${Yr[n].toLowerCase()}`)}function xS(){!u.started||u.gameOver||u.falling||u.backpack.berry<=0||(Nf("berry"),u.backpack.berry-=1,u.hunger=qt(u.hunger+Ho,0,100),jt(),bt(`Ate a berry (+${Ho} hunger)`))}function Pn(n){if(!(!u.started||u.gameOver||u.falling||u.paused)){if(n!=="backpack"&&!u.ownedTools[n]){bt(`Craft the ${Yr[n]||"tool"} first`);return}n===u.equippedTool?u.equippedTool=null:u.equippedTool=n,yi(),er(!1),u.equippedTool!=="backpack"&&ii(!1),u.equipTimer=u.equippedTool?la:0,Kr(),jt(),va()}}function MS(){u.equippedTool=null,u.equipTimer=0,ii(!1),yi(),Kr(),jt(),va()}function yS(){switch(u.equippedTool){case"axe":return je;case"backpack":return On;case"pickaxe":return na;case"torch":return sa;case"ironAxe":return ia;case"ironSword":return ra;default:return null}}function va(){je.visible=u.equippedTool==="axe",On.visible=u.equippedTool==="backpack",na.visible=u.equippedTool==="pickaxe",sa.visible=u.equippedTool==="torch",ia.visible=u.equippedTool==="ironAxe",ra.visible=u.equippedTool==="ironSword",ta.visible=!u.equippedTool}function SS(n){u.equipTimer=Math.max(0,u.equipTimer-n);const t=yS();if(!t)return;const e=t.userData.baseY??t.position.y,i=t===On?.92:1;if(u.equipTimer>0){const r=1-u.equipTimer/la,s=1-(1-r)*(1-r);t.scale.setScalar((.55+s*.45)*i),t.position.y=e-(1-s)*.26}else t.scale.setScalar(i),t.position.y=e}function wS(n){for(const[t,e]of Object.entries(mf))e.visible=n&&u.equippedTool===t}function ES(n){if(!Is.visible)return;let t=0;if(u.attackTimer>0){const a=1-u.attackTimer/ca;t=Math.sin(qt(a,0,1)*Math.PI)}else if(u.chopTimer>0){const a=1-u.chopTimer/.3;t=Math.sin(qt(a,0,1)*Math.PI)*.85}else if(u.equipTimer>0){const a=1-u.equipTimer/la;t=-Math.sin(qt(a,0,1)*Math.PI)*.3}const e=u.moveSpeed>.1&&u.grounded,i=u.walkPhase,r=e?Math.sin(i)*.018:Math.sin(u.idleTime*1.7)*.006,s=e?Math.abs(Math.cos(i))*.012:Math.sin(u.idleTime*1.5)*.004,o=1-Math.exp(-18*n);me.position.x+=(Mr.x+r-me.position.x)*o,me.position.y+=(Mr.y+s-me.position.y)*o,me.position.z=Mr.z,me.rotation.x+=(Mr.rx-t*1.35-me.rotation.x)*o,me.rotation.y=Mr.ry,me.rotation.z+=(Mr.rz+t*.55-me.rotation.z)*o}function TS(){xs.style.transform="translate(-50%, -50%)"}function bS(n,t){const e=Or.getBoundingClientRect(),i=e.left+e.width/2,r=e.top+e.height/2,s=n-i,o=t-r,a=e.width*.31,c=Math.min(Math.hypot(s,o),a),l=Math.atan2(o,s),h=Math.cos(l)*c,f=Math.sin(l)*c;u.joystick.x=h/a,u.joystick.y=f/a,u.joystick.active=!0,xs.style.left=`${50+h/a*30}%`,xs.style.top=`${50+f/a*30}%`}function jf(n){n.preventDefault(),u.joystick.active=!0,bS(n.clientX,n.clientY)}Or.addEventListener("pointerdown",n=>{u.pointerId=n.pointerId,jf(n),Or.setPointerCapture(n.pointerId)});Or.addEventListener("pointermove",n=>{!u.joystick.active||n.pointerId!==u.pointerId||jf(n)});function xa(){u.pointerId=null,u.joystick.x=0,u.joystick.y=0,u.joystick.active=!1,xs.style.left="50%",xs.style.top="50%",TS()}Or.addEventListener("pointerup",xa);Or.addEventListener("pointercancel",xa);function ul(n,t){u.cameraYaw-=n*PM,u.cameraPitch=qt(u.cameraPitch-t*LM,-Rh,Rh)}const ji=new Map;function AS(n){return!!(n&&n.closest&&n.closest("button, #inventoryPanel, #craftPanel, #settingsPanel, #startOverlay, #rotateOverlay, #audioControls, #hotbar, #actionCluster, #joystickZone"))}function RS(n,t){if(!yh)return!1;const e=yh.getBoundingClientRect();return n>=e.left&&n<=e.right&&t>=e.top&&t<=e.bottom}function Ma(){return!u.started||u.gameOver||u.falling||u.portrait||u.inventoryOpen||u.craftOpen||u.settingsOpen}window.addEventListener("pointerdown",n=>{n.pointerType==="mouse"&&n.button!==0||AS(n.target)||RS(n.clientX,n.clientY)||!u.started||u.gameOver||u.falling||u.portrait||ji.set(n.pointerId,{startX:n.clientX,startY:n.clientY,lastX:n.clientX,lastY:n.clientY,startTime:performance.now(),moved:0,dragging:!1,canLook:n.clientX>=window.innerWidth*.5})});window.addEventListener("pointermove",n=>{const t=ji.get(n.pointerId);if(!t)return;const e=n.clientX-t.lastX,i=n.clientY-t.lastY;t.lastX=n.clientX,t.lastY=n.clientY,t.moved=Math.max(t.moved,Math.hypot(n.clientX-t.startX,n.clientY-t.startY)),!t.dragging&&t.moved>Yd&&(t.dragging=!0),!(!t.dragging||!t.canLook||Ma())&&ul(e,i)});function Zf(n){const t=ji.get(n.pointerId);if(!t)return;ji.delete(n.pointerId);const e=performance.now()-t.startTime,i=!t.dragging&&t.moved<=Yd&&e<=IM;Ey(i?"TAP":"DRAG"),!(n.type==="pointercancel"||!i)&&(Ma()||NS(t.startX,t.startY))}window.addEventListener("pointerup",Zf);window.addEventListener("pointercancel",Zf);function Jf(){return window.innerHeight>window.innerWidth}async function CS(){if(window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function Qf(){if(!Jf()){CS(),u.started=!0,u.victory=!1,u.gameOver=!1,u.paused=!1,Kn.classList.add("hidden"),u.health=100,u.hunger=100,u.night=1,u.cycleTime=0,u.daylight=1,u.nightActive=!1,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,u.damageFlash=0,u.nearFire=!0,u.keys.clear(),u.cameraYaw=0,u.cameraPitch=0,u.cameraDistance=Ul,u.velocityY=0,u.grounded=!0,u.jumpHeld=!1,u.walkPhase=0,u.idleTime=0,u.moveSpeed=0,u.backpack.wood=0,u.backpack.sapling=0,u.backpack.berry=0,u.backpack.iron=0,u.sackOrder=[],u.ownedTools.axe=!0,u.ownedTools.pickaxe=!1,u.ownedTools.torch=!1,u.ownedTools.ironAxe=!1,u.ownedTools.ironSword=!1,u.goodSack=!1,u.goodAxe=!1,u.backpackCapacity=Rf,u.equippedTool=null,u.equipTimer=0,u.inventoryOpen=!1,u.craftOpen=!1,u.settingsOpen=!1,u.benchInReach=!1,u.fireLevel=1,u.fireProgress=50,u.fireGrow=0,u.fireDarken=0,u.startHintTimer=8,u.carriedPlaceable=null,u.targetRock=null,u.dropCooldown=0,u.starveTimer=0,u.fireOut=!1,u.fireFlare=0,u.chopTimer=0,u.plantCooldown=0,u.targetTree=null,u.falling=0,u.invuln=0,u.hitEffectTimer=0,Ar=0,ys.classList.remove("visible"),fi(),ii(!1),yi(),er(!1),re.stock.wood=0,re.stock.iron=0,re.tier=1,re.crafted.clear(),Mf(),$y(),ga(),ru(1),qf(Cf()),u.craftSelected="pickaxe",cy(),ly(),X.position.set(0,ue(0,-3.5),-3.5),X.rotation.y=0,u.cameraInitialized=!1,In.rotation.set(0,0,0),yn.rotation.set(0,0,0),Yi.rotation.set(0,0,0),$i.rotation.set(0,0,0),fn.position.y=.01,ji.clear(),u.look.active=!1,u.pinchDistance=0;for(const n of Lr)le.remove(n.mesh);Lr.length=0,Py();for(let n=qe.length-1;n>=0;n-=1){const t=qe[n];if(t.userData.planted){le.remove(t),qe.splice(n,1);continue}t.visible=!0,t.rotation.set(0,0,0),t.quaternion.identity(),t.userData.baseChoppable&&Gf(t)}Ls.classList.remove("visible"),jo.classList.remove("visible"),Ao.classList.add("hidden"),bo.classList.remove("flash"),Dl.style.opacity="0";for(const n of ni)n.visible=!1,n.position.set(0,-40,0),Wf(n),n.visible=!1;rn.visible=!1,nn.visible=!1,va(),Br(),jt(),hS(),bt("Tap a tool · loose iron by the bench")}}sM.addEventListener("click",Qf);const PS=new Set([" ","arrowup","arrowdown","arrowleft","arrowright"]),tp=new Set(["shift","j"]);window.addEventListener("keydown",n=>{const t=n.key.toLowerCase();PS.has(t)&&n.preventDefault(),t==="q"&&!n.repeat&&Vf(),t==="f"&&!n.repeat&&Uf(),t==="e"&&!n.repeat&&Ff(),t==="1"&&!n.repeat&&Pn(u.ownedTools.ironAxe?"ironAxe":"axe"),t==="2"&&!n.repeat&&Pn("backpack"),t==="3"&&!n.repeat&&Pn("pickaxe"),t==="4"&&!n.repeat&&Pn("torch"),t==="5"&&!n.repeat&&Pn("ironSword"),t==="escape"&&!n.repeat&&(yi(),er(!1),ii(!1)),tp.has(t)&&(u.jumpHeld=!0,n.repeat||Sa()),u.keys.add(t)});window.addEventListener("keyup",n=>{const t=n.key.toLowerCase();u.keys.delete(t),tp.has(t)&&(u.jumpHeld=!1)});window.addEventListener("blur",()=>{u.keys.clear(),u.jumpHeld=!1});Bd.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Uf()});Al.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Iy()});ps.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Dy()});Rl.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Ff()});Cl.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Zy()});Pl.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Ny()});Ll.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Vf()});zd.addEventListener("pointerdown",n=>{n.preventDefault(),Pn(u.ownedTools.ironAxe?"ironAxe":"axe")});gi.addEventListener("pointerdown",n=>{n.preventDefault(),Pn("backpack")});Hd.addEventListener("pointerdown",n=>{n.preventDefault(),Pn("pickaxe")});Gd.addEventListener("pointerdown",n=>{n.preventDefault(),Pn("torch")});Vd.addEventListener("pointerdown",n=>{n.preventDefault(),Pn("ironSword")});gM.addEventListener("pointerdown",n=>{n.preventDefault(),yi()});Qc.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Wy()});Il.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),jy()});pM.addEventListener("pointerdown",n=>{n.preventDefault(),ii(!1)});mM.addEventListener("pointerdown",n=>{n.preventDefault(),MS()});const qh=new Fd,pc=new Ht,LS=.3,IS=new sn({color:16777215,side:ze,transparent:!0,opacity:.9,depthWrite:!1}),us=[];function Wn(n){if(!n)return;const t=[];if(n.traverse(i=>{!i.isMesh||!i.geometry||i.userData.outlineShell||t.push(i)}),t.length===0)return;const e=[];for(const i of t){const r=new G(i.geometry,IS);r.scale.setScalar(1.05),r.renderOrder=3,r.userData.outlineShell=!0,i.add(r),e.push({node:i,shell:r})}us.push({shells:e,until:performance.now()+LS*1e3})}function DS(){if(us.length===0)return;const n=performance.now();for(let t=us.length-1;t>=0;t-=1){const e=us[t];if(!(n<e.until)){for(const{node:i,shell:r}of e.shells)i.remove(r);us.splice(t,1)}}}function US(n){let t=n;for(;t;){const e=t.userData;if(e.itemRef)return{kind:"item",item:e.itemRef,mesh:t};if(e.rockRef)return{kind:"rock",rock:e.rockRef};if(e.treeRef)return{kind:"tree",tree:e.treeRef};if(e.enemyRef)return{kind:"enemy",enemy:e.enemyRef};if(e.saplingRef)return{kind:"sapling",sapling:e.saplingRef};if(e.berryBushRef)return{kind:"berry",bush:e.berryBushRef};if(e.benchRef)return{kind:"bench"};if(e.grinderRef)return{kind:"grinder"};if(e.campfireRef)return{kind:"campfire"};t=t.parent}return null}function NS(n,t){if(Ma())return;const e=Od.getBoundingClientRect();pc.x=(n-e.left)/e.width*2-1,pc.y=-((t-e.top)/e.height)*2+1,qh.setFromCamera(pc,xe);const i=qh.intersectObjects(le.children,!0);for(const r of i){if(!r.object.isMesh||r.object.userData.tapIgnore)continue;const s=US(r.object);if(!s)break;if(s.kind==="enemy"){Yh(s);return}hl(),Yh(s);return}hl(),OS()}function Yh(n){var s;const t=X.position.x,e=X.position.z,i=(o,a)=>Math.hypot(t-o,e-a)<=cs,r=()=>bt("Too far");switch(n.kind){case"item":{const o=n.item;if(!i(o.x,o.z))return r();Wn(o.mesh),Jl(o);return}case"rock":{const o=n.rock;if(!i(o.x,o.z))return r();if(Wn(o.group),!Kl(u.equippedTool)){bt("Use the Pickaxe");return}kf(o);return}case"tree":{const o=n.tree;if(!i(o.position.x,o.position.z))return r();if(Wn(o),!Pf(u.equippedTool)){bt("Use the Axe");return}Bf(o,((s=Ds[u.equippedTool])==null?void 0:s.treePower)??1);return}case"enemy":{const o=n.enemy;if(!i(o.position.x,o.position.z))return r();Wn(o),hl(o);return}case"sapling":{if(!i(n.sapling.x,n.sapling.z))return r();Wn(n.sapling.mesh),bt("The sapling is still growing");return}case"berry":{const o=n.bush;if(!i(o.x,o.z))return r();Wn(o.mesh),BS(o);return}case"bench":{if(Go()>cs)return r();if(Go()>dy){bt("Move closer to the bench");return}Wn(ce),Gy();return}case"grinder":{if(ha()>cs)return r();Wn(Me),bt("Drag a log or iron and press Put in grinder");return}case"campfire":{if(Us()>cs)return r();Wn(Wt),kS();return}}}const FS=3;function OS(){var o;if(Ma())return;const n=Pf(u.equippedTool),t=Kl(u.equippedTool);if(!n&&!t)return;const e=Math.sin(u.cameraYaw),i=Math.cos(u.cameraYaw);let r=null;const s=(a,c,l,h)=>{const f=c-X.position.x,p=l-X.position.z,g=Math.hypot(f,p);g<.001||g>FS||(f*e+p*i)/g<.2||(!r||g<r.distance)&&(r={kind:a,ref:h,distance:g})};if(n)for(const a of qe)!a.userData.choppable||a.userData.falling||!a.visible||s("tree",a.position.x,a.position.z,a);if(t)for(const a of tr)a.broken||s("rock",a.x,a.z,a);r&&(r.kind==="tree"?Bf(r.ref,((o=Ds[u.equippedTool])==null?void 0:o.treePower)??1):kf(r.ref))}function BS(n){const t=performance.now();if(t<(n.nextHarvest||0)){bt("The bush needs a moment");return}if(n.nextHarvest=t+4500,zt){bt("Hands full");return}const e=Mi("berry",X.position.x,X.position.z,{startY:ue(X.position.x,X.position.z)+.5,velocityY:1.2,pickupDelay:0});Jl(e)}function kS(){if(u.fireOut){bt("The fire is out — drag a log and press Put in fire");return}bt("Drag a log and press Put in fire to feed the fire")}function ya(n){u.jumpHeld=n,n&&Sa()}Ms.addEventListener("pointerdown",n=>{n.preventDefault(),Ms.setPointerCapture(n.pointerId),ya(!0)});Ms.addEventListener("pointerup",()=>ya(!1));Ms.addEventListener("pointercancel",()=>ya(!1));Ms.addEventListener("lostpointercapture",()=>ya(!1));Kn.addEventListener("pointerdown",n=>{!u.started&&n.target===Kn&&Qf()});function zS(n,t,e,i){Kn.classList.remove("hidden"),Kn.querySelector(".title").textContent=n,Kn.querySelector(".subtitle").textContent=t,Kn.querySelector(".hint").textContent=e,Kn.querySelector("button").textContent=i,Ls.classList.remove("visible"),jo.classList.remove("visible"),ys.classList.remove("visible"),ii(!1),yi(),er(!1),u.equippedTool=null,u.equipTimer=0,va(),jt(),Dl.style.opacity="0"}function hl(n=null){if(!u.started||u.gameOver||u.falling||u.paused||u.craftOpen||u.settingsOpen||u.attackCooldown>0)return;const t=Ds[u.equippedTool];if(!["axe","ironAxe","ironSword"].includes(u.equippedTool)||!t)return;n?X.rotation.y=Math.atan2(n.position.x-X.position.x,n.position.z-X.position.z):X.rotation.y=u.cameraYaw,u.attackCooldown=t.cooldown,u.attackTimer=ca,rn.visible=!0,rn.scale.setScalar(.7),oa.intensity=1.8,Mw();const e=new C(Math.sin(X.rotation.y),0,Math.cos(X.rotation.y));if(n){if(n.visible&&!n.userData.fading){const i=n.position.clone().sub(X.position);i.y=0,i.length()<=cs&&$h(n,t,e)}return}for(const i of ni){if(!i.visible||i.userData.fading)continue;const r=i.position.clone().sub(X.position);r.y=0;const s=r.length();s>3||s<.01||(r.normalize(),!(e.dot(r)<.2)&&$h(i,t,e))}}function $h(n,t,e){const i=n.userData;i.health-=t.damage,i.hitTimer=.22,i.bodyMat.emissive.setHex(16723738),i.bodyMat.emissiveIntensity=1.1,i.knockback.addScaledVector(e,4.2+t.damage*.6),ap(),nn.position.copy(n.position),nn.position.y+=1.15,nn.scale.setScalar(.8),nn.material.opacity=.95,nn.visible=!0,u.hitEffectTimer=.22,i.health<=0&&(i.health=0,i.dead=!0,i.attackCooldown=0,su(n,4))}function su(n,t){const e=n.userData;n.visible&&(e.fading=!0,e.fade=1,e.fadeRate=t,e.bodyMat.transparent=!0,e.eyeMat.transparent=!0)}function HS(n){!u.started||u.gameOver||u.falling||u.invuln>0||(u.health=Math.max(0,u.health-n),u.damageFlash=1,jt(),u.health<=0&&ep())}function ep(){u.falling>0||(u.falling=2.4,u.health=0,u.attackTimer=0,rn.visible=!1,ii(!1),yi(),jo.classList.add("visible"),xw(),jt())}function GS(){u.falling=0,u.health=100,u.hunger=Math.max(u.hunger,55),u.invuln=2,u.damageFlash=0,u.velocityY=0,u.grounded=!0,u.attackCooldown=0,u.attackTimer=0,u.swingCooldown=0,X.position.set(0,ue(0,3.6),3.6),X.rotation.y=0,In.rotation.set(0,0,0),yn.rotation.set(0,0,0),Yi.rotation.set(0,0,0),$i.rotation.set(0,0,0),jo.classList.remove("visible"),fi(),u.cycleTime=Oi,u.nightActive=!0,np(),jt()}function np(){u.nightActive=!0;const n=Math.min(u.night+1,Af);for(let t=0;t<ni.length;t+=1){const e=ni[t];if(t>=n){e.visible=!1,e.position.set(0,-40,0);continue}const i=t/n*Math.PI*2+(Math.random()-.5)*.5,r=33+Math.random()*6,s=Math.cos(i)*r,o=Math.sin(i)*r;Wf(e),e.position.set(s,ue(s,o),o),e.rotation.y=Math.atan2(-s,-o);const a=e.userData;a.dead=!1,a.health=Math.min(8,2+Math.floor((u.night-1)/12)),a.maxHealth=a.health,a.speed=Math.min(3.5,1.15+u.night*.045+Math.random()*.22),a.damage=Math.min(22,6+u.night*.3),a.targetCamp=t%4===0,a.circleDir=Math.random()<.5?1:-1,a.phase=Math.random()*Math.PI*2}un.visible=!0,un.position.copy(X.position),un.position.y=1.4,un.intensity=2.6}function VS(){const n=X.position.x-Wt.position.x,t=X.position.z-Wt.position.z,e=Cf();return n*n+t*t<e*e?1:0}const Po=6,ou=.32,WS=7.4,XS=17.5;function Sa(){!u.started||u.gameOver||u.falling||!u.grounded||u.craftOpen||u.settingsOpen||u.inventoryOpen||(u.velocityY=WS,u.grounded=!1,Ew())}function Kh(n){const t=ue(X.position.x,X.position.z);if(!u.started||u.gameOver){u.velocityY=0,u.grounded=!0,X.position.y=t;return}if(u.grounded){X.position.y=t,u.jumpHeld&&Sa();return}const e=u.velocityY;u.velocityY-=XS*n,X.position.y+=u.velocityY*n,X.position.y<=t&&(X.position.y=t,u.velocityY=0,u.grounded=!0,e<-2.4&&cp())}function qS(){for(const n of qe){if(!n.visible||n.userData.falling)continue;const t=X.position.x-n.position.x,e=X.position.z-n.position.z,i=n.userData.scale*.3+ou,r=t*t+e*e;if(r>=i*i||r<1e-4)continue;const s=Math.sqrt(r),o=i-s;X.position.x+=t/s*o,X.position.z+=e/s*o}}function ip(n,t=ou){for(const e of Zo){if(e.rock&&e.rock.broken)continue;const i=n.position.x-e.x,r=n.position.z-e.z,s=e.radius+t,o=i*i+r*r;if(o>=s*s)continue;if(o<1e-4){n.position.x=e.x+s;continue}const a=Math.sqrt(o),c=s-a;n.position.x+=i/a*c,n.position.z+=r/a*c}for(const e of ws){const i=n.position.x-e.x,r=n.position.z-e.z,s=Math.cos(e.rotation),o=Math.sin(e.rotation);let a=i*s-r*o,c=i*o+r*s;const l=e.width/2+t,h=e.depth/2+t;if(Math.abs(a)>=l||Math.abs(c)>=h)continue;const f=l-Math.abs(a),p=h-Math.abs(c);f<p?a=Math.sign(a||1)*l:c=Math.sign(c||1)*h,n.position.x=e.x+a*s+c*o,n.position.z=e.z-a*o+c*s}}function YS(n,t,e){if(u.grounded)for(const i of Xl){if(i.rock&&i.rock.broken)continue;const r=n-i.x,s=t-i.z,o=i.radius+ou+.12;if(r*r+s*s>o*o)continue;const a=i.x-n,c=i.z-t;if(!(e.x*a+e.z*c<=0)&&i.top-X.position.y<=.95){Sa();return}}}function $S(n){if(!u.started||u.gameOver||u.falling)return;const t=u.keys,e=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),i=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),r=qt(u.joystick.x+e,-1,1),s=qt(-u.joystick.y+i,-1,1);if(Math.abs(r)+Math.abs(s)<.02){u.moveSpeed=0;return}const o=new C(Math.sin(u.cameraYaw),0,Math.cos(u.cameraYaw)),a=new C(-Math.cos(u.cameraYaw),0,Math.sin(u.cameraYaw)),c=new C;c.addScaledVector(o,s),c.addScaledVector(a,r),c.normalize(),u.moveSpeed=Po;const l=Math.atan2(c.x,c.z),h=1-Math.exp(-15*n);X.rotation.y=pS(X.rotation.y,l,h);const f=X.position.x+c.x*n*Po,p=X.position.z+c.z*n*Po;YS(f,p,c),X.position.x=f,X.position.z=p,qS(),ip(X),X.position.x=qt(X.position.x,-30,30),X.position.z=qt(X.position.z,-30,30)}function jh(n){const t=qt(n,0,1);if(t<.35){const i=t/.35;return-1.05*(i*i*(3-2*i))}if(t<.72){const i=(t-.35)/.37;return-1.05+1.85*(i*i*(3-2*i))}const e=(t-.72)/.28;return .8-.8*(e*e*(3-2*e))}function KS(n){u.idleTime+=n;const t=Sy(u.equippedTool);let e=0,i=0,r=0,s=0,o=0,a=0;if(!u.grounded)u.velocityY>.25?(e=-2.55,i=-2.55,r=-.18,s=.18):(e=-.2,i=-.2,r=-1.35,s=1.35),t&&(i=Ii+(u.velocityY>.25?-.12:.08),s=0),o=.12,a=-.12;else if(u.attackTimer>0){const h=1-u.attackTimer/ca,f=Math.sin(qt(h,0,1)*Math.PI);e=.22*f,t?i=Ii+jh(h):(i=-.45-2.25*f,s=.34*f),o=.08*f,a=-.08*f}else if(u.chopTimer>0){const h=1-u.chopTimer/.3,f=Math.sin(qt(h,0,1)*Math.PI);e=-.4*f,t?i=Ii+jh(h):(i=-2.2*f,s=.12*f)}else if(u.equipTimer>0){const h=1-u.equipTimer/la,f=Math.sin(qt(h,0,1)*Math.PI);t?i=Ii-.2*f:(i=-1.15*f,s=.22*f),e=.18*f}else if(u.moveSpeed>.1){u.walkPhase+=n*(5+u.moveSpeed);const h=Math.sin(u.walkPhase)*.72;e=h,i=t?Ii-h*UM:-h,o=-h,a=h}else{const h=Math.sin(u.idleTime*1.9)*.05;e=h,t?i=Ii-h*.4:i=-h}const c=1-Math.exp(-14*n);In.rotation.x+=(e-In.rotation.x)*c,yn.rotation.x+=(i-yn.rotation.x)*c,In.rotation.z+=(r-In.rotation.z)*c,yn.rotation.z+=(s-yn.rotation.z)*c,Yi.rotation.x+=(o-Yi.rotation.x)*c,$i.rotation.x+=(a-$i.rotation.x)*c;const l=u.grounded&&u.moveSpeed>.1?Math.abs(Math.sin(u.walkPhase))*.02:0;fn.position.y+=(.01+l-fn.position.y)*c}function jS(n){if(!u.started||u.gameOver)return;const t=!u.fireOut;for(const e of ni){const i=e.userData;if(!e.visible)continue;if(i.fading){i.fade=Math.max(0,i.fade-n*(i.fadeRate||1));const N=i.fade;i.bodyMat.opacity=N,i.eyeMat.opacity=N,e.scale.setScalar(.4+N*.6),N<=0&&(e.visible=!1,i.fading=!1,i.dead=!0,e.position.set(0,-40,0));continue}if(u.falling>0)continue;i.hitTimer>0&&(i.hitTimer-=n,i.hitTimer<=0&&(i.bodyMat.emissive.setHex(0),i.bodyMat.emissiveIntensity=1)),i.knockback.lengthSq()>4e-4&&(e.position.addScaledVector(i.knockback,n),i.knockback.multiplyScalar(Math.exp(-9*n)));let r=!1;i.stunTimer>0&&(i.stunTimer=Math.max(0,i.stunTimer-n),r=!0);const s=Math.hypot(X.position.x-e.position.x,X.position.z-e.position.z);let o=X.position.x,a=X.position.z;i.targetCamp&&s>10&&!u.fireOut&&(o=Wt.position.x,a=Wt.position.z);let c=o-e.position.x,l=a-e.position.z;const h=Math.hypot(c,l);let f=0,p=0,g=!1;if(h>.35&&!r&&(f=c/h*i.speed*n,p=l/h*i.speed*n,g=!0),t){const N=e.position.x-Wt.position.x,R=e.position.z-Wt.position.z,A=Math.hypot(N,R)||1,I=N/A,E=R/A;A<Ci()+1.2&&(f+=-E*i.circleDir*i.speed*n*.5,p+=I*i.circleDir*i.speed*n*.5)}let _=e.position.x+f,v=e.position.z+p;if(t){const N=e.position.x-Wt.position.x,R=e.position.z-Wt.position.z,A=Math.hypot(N,R)||1;A<Ci()-.05&&(_=Wt.position.x+N/A*Ci(),v=Wt.position.z+R/A*Ci());const I=_-Wt.position.x,E=v-Wt.position.z;if((Math.hypot(I,E)||1)<Ci()){const L=e.position.x-Wt.position.x,z=e.position.z-Wt.position.z,k=Math.hypot(L,z)||1;_=Wt.position.x+L/k*Ci(),v=Wt.position.z+z/k*Ci()}}e.position.x=qt(_,-46,46),e.position.z=qt(v,-46,46),ip(e,.36),e.position.x=qt(e.position.x,-46,46),e.position.z=qt(e.position.z,-46,46),e.position.y=ue(e.position.x,e.position.z);const m=o-e.position.x,d=a-e.position.z;Math.hypot(m,d)>.01&&(e.rotation.y=Math.atan2(m,d));const w=g?.58:.1;i.phase+=n*(3.4+i.speed*1.5)*(g?1:.3);const S=Math.sin(i.phase);i.legs[0].rotation.x=S*w,i.legs[1].rotation.x=-S*w,i.arms[0].rotation.x=-S*w*.8,i.arms[1].rotation.x=S*w*.8,i.bodyGroup.position.y=Math.abs(S)*.035,i.attackCooldown=Math.max(0,i.attackCooldown-n);const T=Math.hypot(X.position.x-e.position.x,X.position.z-e.position.z);!r&&T<1.45&&Math.abs(X.position.y-e.position.y)<2.2&&i.attackCooldown<=0&&u.invuln<=0&&(HS(i.damage),i.attackCooldown=1.05)}}function ZS(n){!u.started||u.gameOver||u.falling||(u.hunger=Math.max(0,u.hunger-n*xy),u.hunger<=0?(u.starveTimer+=n,u.starveTimer>=1&&(u.starveTimer-=1,u.health=Math.max(0,u.health-2),u.damageFlash=Math.max(u.damageFlash,.45),jt(),u.health<=0&&ep())):u.starveTimer=0)}function JS(n){if(u.started&&!u.gameOver&&!u.fireOut){const l=(py[u.fireLevel]||1)/60;u.fireProgress=Math.max(0,u.fireProgress-l*n),u.fireProgress<=0&&(u.fireProgress=0,u.fireOut=!0,u.fireFlare=0,Ls.classList.add("visible"),bt("The fire is out!"),_w())}u.fireFlare=Math.max(0,u.fireFlare-n*1.6);const t=!u.fireOut,e=qt(u.fireProgress/100,0,1),i=u.started&&!u.gameOver&&!u.fireOut&&VS()>0;u.nearFire=i,i&&!u.falling&&(u.health=qt(u.health+n*3,0,100));const r=1-u.daylight;u.started&&u.fireOut&&r>.5?u.fireDarken=Math.min(1,u.fireDarken+n*.045):u.fireDarken=Math.max(0,u.fireDarken-n*.6),un.visible=un.visible&&un.intensity>.1,un.visible&&(un.intensity*=.96);const s=performance.now()*.001,o=.85+Math.sin(s*17.3)*.12+Math.sin(s*29.7+.7)*.08,a=1-Math.exp(-7*n);u.fireGrow=Math.min(1,u.fireGrow+a*1.4);const c=.62+u.fireGrow*.38;if(vn.scale.setScalar(c),zi.visible=t,Cn.visible=t,Jn.visible=t,iu.visible=t,Qo.material.emissiveIntensity=t?.25+e*.55:.7+Math.sin(s*3)*.15,ke&&(ke.visible=t&&u.started,ke.material&&(ke.material.opacity=.2+Math.sin(s*1.6)*.06+(t?.08:0))),t){const l=my[u.fireLevel]||1,h=.42+l*.24,f=Math.sin(s*9)*.06,p=u.fireFlare;zi.scale.setScalar((.7+e*.35)*(1+Math.sin(s*12)*.08)+p*.4),zi.position.y=.42+Math.sin(s*6)*.04,zi.rotation.y+=n*2.4;const g=l/1.5*(.95+Math.sin(s*8.5)*.08+p*.35);Cn.scale.set(h*(.92+Math.sin(s*7.7)*.06),g,h*(.92+Math.cos(s*7.1)*.06)),Cn.position.y=.2+l*.5+Math.sin(s*8.5)*.05,Cn.rotation.y+=n*1.9,Cn.rotation.z=f;const _=l/1.5*(.88+Math.sin(s*14)*.09+p*.3);Jn.scale.set(h*.5,_,h*.5),Jn.position.y=.18+l*.44+Math.sin(s*10+1)*.04,Jn.rotation.z=-f*.8,ms.intensity=(1.5+l*.75+e*.7)*o+p*4,ms.distance=9+l*3.6,gs.intensity=(.5+l*.28+e*.45)*o+p*2.2,gs.distance=14+l*3.2,cl.size=.055+(u.fireLevel-1)*.008,cl.opacity=.5+e*.3+Math.sin(s*13)*.1,iS(n,qt(.2+e,0,1)),u.fireLevel>=5&&Ui.forEach((v,m)=>{const d=(s*.3+m/Ui.length)%1;v.position.set(Math.sin(s*.8+m)*.12,1.7+d*4.2,Math.cos(s*.7+m)*.12),v.scale.setScalar(.9+d*2.2),v.material.opacity=.11*(1-d)})}else ms.intensity=0,gs.intensity=0,_a.setDrawRange(0,0),Ui.forEach(l=>{l.material.opacity=0});if(t&&u.fireLevel<5)for(let l=0;l<Ui.length;l+=1){const h=Ui[l],f=(s*.42+l/Ui.length)%1;h.position.set(Math.sin(s*1.4+l)*.14,1.5+f*1.8,Math.cos(s*1.2+l)*.12),h.scale.setScalar(.6+f*1.05),h.material.opacity=.09*(1-f)}if(u.started&&!u.gameOver&&u.health>0){const l=.48+Math.sin(s*14)*.2;oa.intensity=l}}const QS=new Tt(7314084),tw=new Tt(133647),ew=new Tt(8890789),nw=new Tt(465186),iw=new Tt(14676479),rw=new Tt(9417960),sw=new Tt(16773840),ow=new Tt(11060991),aw=new Tt(4851718),_o=new Tt,Zh=new Tt;function rp(){const n=1-u.daylight;_o.copy(QS).lerp(tw,n),u.damageFlash>0&&_o.lerp(aw,u.damageFlash*.34),He.background.copy(_o),Yf.material.color.copy(_o),Zh.copy(ew).lerp(nw,n),He.fog.color.copy(Zh),He.fog.density=.018+n*.04,el.color.copy(iw).lerp(rw,n),el.intensity=1-n*.45,wn.color.copy(sw).lerp(ow,n),wn.intensity=1.25-n*.55,Kx.classList.toggle("night",n>.5);const t=u.started&&u.fireOut?.1+u.fireDarken*.4:0;Dl.style.opacity=String(qt(n*.3+t,0,.9))}function cw(n){const t=u.cycleTime;u.cycleTime+=n;let e=!1;u.cycleTime>=yr&&(u.cycleTime-=yr,e=!0);const i=u.cycleTime;if(i<Oi-dc?u.daylight=1:i<Oi?u.daylight=1-ll((i-(Oi-dc))/dc):i<yr-rs?u.daylight=0:u.daylight=ll((i-(yr-rs))/rs),t<Oi&&i>=Oi&&!u.nightActive&&np(),t<yr-rs&&i>=yr-rs)for(const r of ni)r.visible&&!r.userData.fading&&!r.userData.dead&&su(r,.3);if(e){if(u.nightActive=!1,Zl(),vw(),bt("You survived the night"),u.night>=u.maxNight){u.victory=!0,u.started=!1,u.gameOver=!0,zS("You Survived","99 nights survived. The camp still burns.","Tap to begin a new run.","Play Again");return}u.night+=1,jt()}}const mc=new Fd,be=new C,gc=new C,Xn=new C,Jh=new C,vo=new C,Qh=new C,lw=new C,ss=new C,qn=[];function uw(n=.016){const t=u.cameraYaw,e=u.cameraPitch,i=Math.cos(e),r=Math.sin(e);be.set(X.position.x,X.position.y+AM,X.position.z),gc.set(Math.sin(t)*i,r,Math.cos(t)*i);const s=u.cameraDistance||Ul;Xn.copy(be).addScaledVector(gc,-s),Xn.y+=RM,ss.copy(Xn).sub(be);const o=ss.length();o>1e-4&&ss.normalize(),qn.length=0;const a=s+3.2;for(const d of qe){if(!d.visible)continue;const w=d.position.x-be.x,S=d.position.z-be.z;w*w+S*S<a*a&&qn.push(d.userData.cameraMeshes[0],d.userData.cameraMeshes[1])}for(const d of tr)d.broken||Math.hypot(d.x-be.x,d.z-be.z)<a&&qn.push(d.group);for(const d of Xl)Math.hypot(d.x-be.x,d.z-be.z)<a&&qn.push(d.mesh);for(const d of ws)Math.hypot(d.x-be.x,d.z-be.z)<a&&qn.push(d.group);Math.hypot(ce.position.x-be.x,ce.position.z-be.z)<a&&qn.push(ce),Math.hypot(Me.position.x-be.x,Me.position.z-be.z)<a&&qn.push(Me);let c=o;if(qn.length>0){mc.set(be,ss),mc.far=o;const d=mc.intersectObjects(qn,!0);d.length>0&&(c=Math.max(.85,d[0].distance-.24))}Xn.copy(be).addScaledVector(ss,c);const l=ue(Xn.x,Xn.z)+.35;Xn.y<l&&(Xn.y=l),Jh.copy(be);const h=u.firstPerson?1:0,f=1-Math.exp(-13*n);u.viewBlend+=(h-u.viewBlend)*f,Math.abs(u.viewBlend-h)<.0015&&(u.viewBlend=h);const p=ll(qt(u.viewBlend,0,1));vo.lerpVectors(Xn,Jh,p);const g=c<o-.01;if(!u.cameraInitialized)xe.position.copy(vo),u.cameraInitialized=!0;else if(p>.92)xe.position.copy(vo);else{const d=g?Math.min(1,f*3.4):Math.min(1,f*.95);xe.position.lerp(vo,Math.max(.12,d))}const _=ue(xe.position.x,xe.position.z)+.28;xe.position.y<_&&(xe.position.y=_),Qh.copy(be).lerp(lw.copy(be).addScaledVector(gc,10),p),xe.lookAt(Qh);const v=Ah+(CM-Ah)*p;Math.abs(xe.fov-v)>.01&&(xe.fov=v,xe.updateProjectionMatrix());const m=p>.5;fn.visible=!m,Is.visible=m,wS(m),m&&(rn.visible=!1)}const xo=new C;function Wo(n,t){if(xo.copy(t).project(xe),xo.z>1)return!1;const e=(xo.x*.5+.5)*window.innerWidth,i=(-xo.y*.5+.5)*window.innerHeight;return n.style.left=`${e}px`,n.style.top=`${i}px`,!0}const wr=new C;function hw(){const n=u.started&&!u.gameOver&&!u.portrait,t=n&&!!zt&&zt.popping<=0;if(ac.classList.toggle("visible",t),t){const i=zt.type;eM.textContent=Yl[i]||Yr[i]||"Item";const r=yy[i]||0;if(uo.dataset.count!==String(r)){uo.dataset.count=String(r),uo.replaceChildren();for(let s=0;s<r;s+=1){const o=document.createElement("span");o.className="drag-flame",uo.appendChild(o)}}wr.copy(zt.mesh.position),wr.y+=.62,Wo(ac,wr)||ac.classList.remove("visible")}const e=n&&fa()&&!u.firstPerson;Ln.classList.toggle("visible",e),e&&(Ln.textContent=`${Vo()}/${u.backpackCapacity}`,wr.copy(X.position),wr.y+=2.4,Wo(Ln,wr)||Ln.classList.remove("visible"))}function dw(n){u.startHintTimer>0&&(u.startHintTimer=Math.max(0,u.startHintTimer-n),u.startHintTimer<=0&&kd.classList.remove("visible")),xe.updateMatrixWorld();const t=u.started&&!u.gameOver&&!u.portrait;if(sc.classList.toggle("visible",t),t){const i=new C(Wt.position.x,Wt.position.y+3,Wt.position.z);sc.style.visibility=Wo(sc,i)?"visible":"hidden"}const e=u.started&&!u.gameOver&&!u.portrait&&!u.craftOpen&&Go()<=Ef;if(Ao.classList.toggle("hidden",!e),e){const i=new C(ce.position.x,ce.position.y+1.75,ce.position.z);Wo(Ao,i)||Ao.classList.add("hidden")}hw()}const nt={ctx:null,master:null,noiseBuffer:null,started:!1,volume:.7,muted:!1,windGain:null,cricketGain:null,fireGain:null,stepTimer:.22,fireCrackleTimer:.2,birdTimer:2.5,growlTimer:1.8,monsterStepTimer:.5,heartbeatTimer:0};function wa(){return!!nt.ctx&&nt.started}function Ns(){return nt.ctx?nt.ctx.currentTime:0}function fw(n){const t=Math.floor(n.sampleRate*2),e=n.createBuffer(1,t,n.sampleRate),i=e.getChannelData(0);let r=0;for(let s=0;s<t;s+=1){const o=Math.random()*2-1;r=r*.72+o*.28,i[s]=r*1.15}return e}function au(){const n=window.AudioContext||window.webkitAudioContext;if(n)try{if(!nt.ctx){const t=new n;nt.ctx=t,nt.master=t.createGain(),nt.master.gain.value=nt.muted?0:nt.volume,nt.master.connect(t.destination),nt.noiseBuffer=fw(t);const e=t.createBufferSource();e.buffer=nt.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=460,i.Q.value=.55,nt.windGain=t.createGain(),nt.windGain.gain.value=.012,e.connect(i).connect(nt.windGain).connect(nt.master),e.start();const r=t.createBufferSource();r.buffer=nt.noiseBuffer,r.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=4300,s.Q.value=7,nt.cricketGain=t.createGain(),nt.cricketGain.gain.value=1e-4;const o=t.createOscillator();o.type="sine",o.frequency.value=5.1;const a=t.createGain();a.gain.value=.006,o.connect(a).connect(nt.cricketGain.gain),r.connect(s).connect(nt.cricketGain).connect(nt.master),r.start(),o.start();const c=t.createBufferSource();c.buffer=nt.noiseBuffer,c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=760,l.Q.value=.6,nt.fireGain=t.createGain(),nt.fireGain.gain.value=1e-4,c.connect(l).connect(nt.fireGain).connect(nt.master),c.start()}nt.started=!0,nt.ctx.state==="suspended"&&nt.ctx.resume()}catch{nt.started=!1}}function ne(n,t,e,i="sine",r=.04,s=0,o=.008){if(!wa())return;const a=nt.ctx,c=Ns()+Math.max(0,s),l=a.createOscillator(),h=a.createGain();l.type=i,l.frequency.setValueAtTime(Math.max(20,n),c),t&&t!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+e),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(r,c+o),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h).connect(nt.master),l.start(c),l.stop(c+e+.04)}function Ne(n,t,e="lowpass",i=900,r=0,s=.8,o=0){if(!wa())return;const a=nt.ctx,c=Ns()+Math.max(0,o),l=a.createBufferSource();l.buffer=nt.noiseBuffer;const h=a.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(Math.max(40,i),c),r&&h.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+n),h.Q.value=s;const f=a.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.linearRampToValueAtTime(t,c+.006),f.gain.exponentialRampToValueAtTime(1e-4,c+n),l.connect(h).connect(f).connect(nt.master),l.start(c,Math.random()*1.2,n+.04)}function Ea(){ne(520,760,.08,"sine",.045),ne(880,980,.06,"triangle",.024,.055)}function Kr(){Ne(.035,.025,"highpass",1900,0,.8),ne(300,220,.055,"square",.018)}function pw(){ne(1046.5,1046.5,.7,"sine",.055),ne(1568,1568,.55,"sine",.028,.02),ne(2093,2093,.4,"triangle",.014,.03)}function sp(){Ne(.34,.065,"lowpass",520,150,.7),ne(150,82,.32,"sawtooth",.03),ne(76,52,.28,"square",.022,.03)}function mw(){ne(240,150,.16,"square",.03)}function gw(){[392,523.25,659.25,783.99,1046.5].forEach((t,e)=>{ne(t,t,.5,"triangle",.042,e*.09),ne(t*2,t*2,.3,"sine",.012,e*.09+.01)})}function _w(){ne(320,180,.5,"sine",.04),ne(180,90,.7,"triangle",.03,.08),Ne(.5,.03,"lowpass",500,120)}function vw(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{ne(t,t,.62,"triangle",.045,e*.1),ne(t*1.5,t*1.5,.34,"sine",.012,e*.1+.01)})}function xw(){ne(330,120,1.1,"sawtooth",.045,0,.02),ne(220,82,1.3,"sine",.05,.04,.02),Ne(.9,.025,"lowpass",420,110)}function Mw(){Ne(.18,.055,"bandpass",950,260,1.1)}function yw(){ne(132,52,.18,"sine",.11),Ne(.14,.055,"lowpass",320,130)}function Sw(){Ne(.85,.09,"lowpass",950,120,.7),ne(90,38,.63,"sine",.08,.04),Ne(.35,.04,"bandpass",1800,700,1.4,.08)}function op(){ne(1850,1450,.075,"triangle",.038),ne(2650,2100,.055,"sine",.02,.012),Ne(.045,.025,"highpass",2400,0,.9)}function ww(){op(),Ne(.38,.08,"lowpass",720,140,.8),ne(190,60,.34,"sine",.06,.02)}function ap(){ne(170,70,.14,"sine",.075),Ne(.1,.045,"bandpass",680,250,.9)}function Ew(){ne(220,360,.15,"sine",.03),Ne(.11,.022,"highpass",900,0)}function cp(){ne(115,52,.17,"sine",.075),Ne(.12,.04,"lowpass",360,130)}function Tw(){const n=72+Math.random()*28;ne(n,n*.7,.075,"sine",.028),Ne(.075,.022,"lowpass",480+Math.random()*180,0,.7)}function bw(n){const t=.008+n*.03;Ne(.025+Math.random()*.04,t,"highpass",900+Math.random()*1400,0,.9)}function Aw(){const n=2100+Math.random()*900,t=2+Math.floor(Math.random()*2);for(let e=0;e<t;e+=1)ne(n+Math.random()*250,n+700+Math.random()*500,.085,"sine",.018,e*.11,.012)}function Rw(n){if(!wa())return;const t=nt.ctx,e=Ns(),i=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(76,e),i.frequency.exponentialRampToValueAtTime(44,e+.75),r.type="lowpass",r.frequency.value=190,r.Q.value=1.2,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.012+n*.045,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+.78),i.connect(r).connect(s).connect(nt.master),i.start(e),i.stop(e+.82),Ne(.5,.008+n*.018,"lowpass",260,90)}function Cw(n){const t=.01+n*.045;ne(62,34,.12,"sine",t),Ne(.1,t*.55,"lowpass",250,100)}function Pw(n){const t=.018+n*.055;ne(58,44,.1,"sine",t),ne(52,38,.12,"sine",t*.7,.16)}function lp(){Ro.classList.toggle("muted",nt.muted),Ro.setAttribute("aria-pressed",String(nt.muted)),Ro.setAttribute("aria-label",nt.muted?"Unmute sound":"Mute sound")}function up(){if(!nt.master)return;const n=Ns(),t=nt.muted?0:nt.volume;nt.master.gain.cancelScheduledValues(n),nt.master.gain.setValueAtTime(nt.master.gain.value,n),nt.master.gain.linearRampToValueAtTime(t,n+.06)}function hp(n){nt.volume=qt(n,0,1),up(),EM.textContent=`${Math.round(nt.volume*100)}%`}function Lw(){au(),nt.muted=!nt.muted,up(),lp(),Kr()}function er(n){u.settingsOpen=n,SM.classList.toggle("hidden",!n),Xd.setAttribute("aria-expanded",String(n)),n&&(yi(),ii(!1)),$r()}function Iw(n){if(!wa())return;const t=Ns(),e=1-u.daylight,i=u.started&&!u.gameOver&&!u.paused,r=!u.started||u.gameOver||u.paused;nt.windGain.gain.setTargetAtTime(r?.007:.007+u.daylight*.03+e*.012,t,.7),nt.cricketGain.gain.setTargetAtTime(r?1e-4:e*.017,t,.85);const s=Us(),o=qt(1-s/18,0,1),a=u.started&&!u.fireOut&&!u.gameOver,c=qt(u.fireProgress/100,0,1),l=1+(u.fireLevel-1)*.22;nt.fireGain.gain.setTargetAtTime(a?(.004+o*.042)*(.45+c*.55)*l:1e-4,t,.35),a&&!u.paused&&o>.04&&(nt.fireCrackleTimer-=n,nt.fireCrackleTimer<=0&&(bw(o),nt.fireCrackleTimer=.13+Math.random()*.42+(1-o)*.55)),i&&u.daylight>.55?(nt.birdTimer-=n*(.7+u.daylight*.7),nt.birdTimer<=0&&(Aw(),nt.birdTimer=3+Math.random()*6)):nt.birdTimer=Math.max(nt.birdTimer,1.5),i&&u.grounded&&u.moveSpeed>.1&&u.falling<=0?(nt.stepTimer-=n*(.8+u.moveSpeed/Po*.8),nt.stepTimer<=0&&(Tw(),nt.stepTimer=.31)):nt.stepTimer=Math.min(nt.stepTimer,.16);let h=null,f=1/0;if(i)for(const p of ni){if(!p.visible||p.userData.fading)continue;const g=Math.hypot(X.position.x-p.position.x,X.position.z-p.position.z);g<f&&(f=g,h=p)}if(h&&f<21){const p=qt(1-f/21,0,1);nt.growlTimer-=n*(1+p*2.2),nt.growlTimer<=0&&(Rw(p),nt.growlTimer=2.8+Math.random()*4.5),nt.monsterStepTimer-=n*(1+p*.8),nt.monsterStepTimer<=0&&(Cw(p),nt.monsterStepTimer=.45+Math.random()*.35),f<15?(nt.heartbeatTimer-=n,nt.heartbeatTimer<=0&&(Pw(p),nt.heartbeatTimer=1.15-p*.72+Math.random()*.08)):nt.heartbeatTimer=0}else nt.growlTimer=Math.max(nt.growlTimer,1.4),nt.monsterStepTimer=Math.max(nt.monsterStepTimer,.4),nt.heartbeatTimer=0}window.addEventListener("pointerdown",au,{capture:!0,passive:!0});window.addEventListener("keydown",au,{capture:!0});Ro.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),Lw()});as.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),fS()});Xd.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),er(!u.settingsOpen)});wM.addEventListener("pointerdown",n=>{n.preventDefault(),er(!1)});bh.addEventListener("input",()=>{hp(Number(bh.value)/100)});hp(nt.volume);lp();$f(u.firstPerson,!1);function dp(){requestAnimationFrame(dp);const n=TM.getDelta(),t=Math.min(n,.033),e=Jf();if(e!==u.portrait&&(u.portrait=e,document.body.classList.toggle("portrait",e),e&&(xa(),ji.clear(),u.look.active=!1,u.pinchDistance=0,u.keys.clear(),u.jumpHeld=!1)),u.paused=e,!e){if(u.attackCooldown=Math.max(0,u.attackCooldown-t),u.attackTimer=Math.max(0,u.attackTimer-t),u.chopTimer=Math.max(0,u.chopTimer-t),u.swingCooldown=Math.max(0,u.swingCooldown-t),u.plantCooldown=Math.max(0,u.plantCooldown-t),u.dropCooldown=Math.max(0,u.dropCooldown-t),u.invuln=Math.max(0,u.invuln-t),SS(t),rn.visible=u.attackTimer>0,u.attackTimer>0){const i=1-u.attackTimer/ca;rn.scale.setScalar(.7+i*.6),rn.material.opacity=.8*(1-i),rn.rotation.z=i*.55}u.hitEffectTimer>0?(u.hitEffectTimer=Math.max(0,u.hitEffectTimer-t),nn.visible=!0,nn.scale.setScalar(.8+(1-u.hitEffectTimer/.22)*1.5),nn.material.opacity=u.hitEffectTimer/.22,nn.rotation.y+=t*10):nn.visible=!1,Ar>0&&(Ar=Math.max(0,Ar-n),Ar<=0&&ys.classList.remove("visible")),ls>0&&(ls=Math.max(0,ls-n),ls<=0&&Jc.classList.remove("visible")),u.started&&!u.gameOver?(cw(t),u.falling>0?(u.falling=Math.max(0,u.falling-t),u.falling<=0&&GS()):$S(t),Kh(t),jS(t),ZS(t),Oh(),Gh(t),Hh(t),tS(t),JS(t),Jy(t),Ky(t),Oy(t),jt()):(u.moveSpeed=0,Kh(t),Oh(),Gh(t),Hh(t),jt()),KS(t),ES(t),DS(),u.damageFlash>0&&(u.damageFlash=Math.max(0,u.damageFlash-t*1.5))}u.victory&&!u.started&&Kn.classList.remove("hidden"),Iw(t),rp(),uw(t),dw(t),wy(t),Wr.render(He,xe)}window.addEventListener("resize",()=>{xe.aspect=window.innerWidth/window.innerHeight,xe.updateProjectionMatrix(),Wr.setSize(window.innerWidth,window.innerHeight)});Zl();Df();ru(1);ke&&(ke.visible=!1);Br();jt();rp();dp();
