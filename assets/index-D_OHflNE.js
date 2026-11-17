(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="167",Ld=0,el=1,Id=2,Tu=1,bu=2,Un=3,ei=0,Ne=1,Nn=2,Qn=0,rr=1,cr=2,nl=3,il=4,Dd=5,xi=100,Ud=101,Nd=102,Fd=103,Od=104,Bd=200,kd=201,zd=202,Gd=203,uo=204,ho=205,Hd=206,Vd=207,Wd=208,Xd=209,qd=210,Yd=211,$d=212,Kd=213,jd=214,Zd=0,Jd=1,Qd=2,js=3,tf=4,ef=5,nf=6,rf=7,Au=0,sf=1,af=2,ti=0,of=1,cf=2,lf=3,uf=4,hf=5,df=6,ff=7,Ru=300,lr=301,ur=302,fo=303,po=304,sa=306,mo=1e3,Ei=1001,go=1002,rn=1003,pf=1004,us=1005,hn=1006,Aa=1007,wi=1008,zn=1009,Cu=1010,Pu=1011,Wr=1012,uc=1013,Pi=1014,On=1015,Kr=1016,hc=1017,dc=1018,hr=1020,Lu=35902,Iu=1021,Du=1022,fn=1023,Uu=1024,Nu=1025,sr=1026,dr=1027,Fu=1028,fc=1029,Ou=1030,pc=1031,mc=1033,zs=33776,Gs=33777,Hs=33778,Vs=33779,_o=35840,vo=35841,xo=35842,Mo=35843,yo=36196,So=37492,Eo=37496,wo=37808,To=37809,bo=37810,Ao=37811,Ro=37812,Co=37813,Po=37814,Lo=37815,Io=37816,Do=37817,Uo=37818,No=37819,Fo=37820,Oo=37821,Ws=36492,Bo=36494,ko=36495,Bu=36283,zo=36284,Go=36285,Ho=36286,mf=3200,gf=3201,ku=0,_f=1,Jn="",yn="srgb",si="srgb-linear",gc="display-p3",aa="display-p3-linear",Zs="linear",ae="srgb",Js="rec709",Qs="p3",Bi=7680,rl=519,vf=512,xf=513,Mf=514,zu=515,yf=516,Sf=517,Ef=518,wf=519,sl=35044,al="300 es",Bn=2e3,ta=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,Vo=180/Math.PI;function jr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Tf(i,t){return(i%t+t)%t}function Ca(i,t,e){return(1-e)*i+e*t}function Ar(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,r,s,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],p=n[2],g=n[5],_=n[8],M=r[0],m=r[3],d=r[6],E=r[1],S=r[4],T=r[7],N=r[2],A=r[5],R=r[8];return s[0]=a*M+o*E+c*N,s[3]=a*m+o*S+c*A,s[6]=a*d+o*T+c*R,s[1]=l*M+u*E+f*N,s[4]=l*m+u*S+f*A,s[7]=l*d+u*T+f*R,s[2]=p*M+g*E+_*N,s[5]=p*m+g*S+_*A,s[8]=p*d+g*T+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,p=o*c-u*s,g=l*s-a*c,_=e*f+n*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(r*l-u*n)*M,t[2]=(o*n-r*a)*M,t[3]=p*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=g*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Ot;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){const i=ea("canvas");return i.style.display="block",i}const ol={};function Hr(i){i in ol||(ol[i]=!0,console.warn(i))}function Af(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const cl=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[si]:{transfer:Zs,primaries:Js,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[yn]:{transfer:ae,primaries:Js,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[aa]:{transfer:Zs,primaries:Qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ll),fromReference:i=>i.applyMatrix3(cl)},[gc]:{transfer:ae,primaries:Qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ll),fromReference:i=>i.applyMatrix3(cl).convertLinearToSRGB()}},Rf=new Set([si,aa]),Jt={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Rr[t].toReference,r=Rr[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rr[i].primaries},getTransfer:function(i){return i===Jn?Zs:Rr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rr[t].luminanceCoefficients)}};function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=ea("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ar(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ar(e[n]/255)*255):e[n]=ar(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class Hu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ia(r[a].image)):s.push(Ia(r[a]))}else s=Ia(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class He extends yr{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ei,r=Ei,s=hn,a=wi,o=fn,c=zn,l=He.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=jr(),this.name="",this.source=new Hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ru;He.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],g=c[5],_=c[9],M=c[2],m=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(g+1)/2,N=(d+1)/2,A=(u+p)/4,R=(f+M)/4,I=(_+m)/4;return S>T&&S>N?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=R/n):T>N?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=A/r,s=I/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=R/s,r=I/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-M)/E,this.z=(p-u)/E,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends yr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new He(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vu extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends He{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=M;return}if(f!==M||c!==p||l!==g||u!==_){let m=1-o;const d=c*p+l*g+u*_+f*M,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const N=Math.sqrt(S),A=Math.atan2(N,d*E);m=Math.sin(m*A)/N,o=Math.sin(o*A)/N}const T=o*E;if(c=c*m+p*T,l=l*m+g*T,u=u*m+_*T,f=f*m+M*T,m===1-o){const N=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=N,l*=N,u*=N,f*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return t[e]=o*_+u*f+c*g-l*p,t[e+1]=c*_+u*p+l*f-o*g,t[e+2]=l*_+u*g+o*p-c*f,t[e+3]=u*_-o*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),p=c(n/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=p*u*f+l*g*_,this._y=l*g*f-p*u*_,this._z=l*u*_+p*g*f,this._w=l*u*f-p*g*_;break;case"YXZ":this._x=p*u*f+l*g*_,this._y=l*g*f-p*u*_,this._z=l*u*_-p*g*f,this._w=l*u*f+p*g*_;break;case"ZXY":this._x=p*u*f-l*g*_,this._y=l*g*f+p*u*_,this._z=l*u*_+p*g*f,this._w=l*u*f-p*g*_;break;case"ZYX":this._x=p*u*f-l*g*_,this._y=l*g*f+p*u*_,this._z=l*u*_-p*g*f,this._w=l*u*f+p*g*_;break;case"YZX":this._x=p*u*f+l*g*_,this._y=l*g*f+p*u*_,this._z=l*u*_-p*g*f,this._w=l*u*f-p*g*_;break;case"XZY":this._x=p*u*f-l*g*_,this._y=l*g*f-p*u*_,this._z=l*u*_+p*g*f,this._w=l*u*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=n+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>f){const g=2*Math.sqrt(1+n-o-f);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>f){const g=2*Math.sqrt(1+o-n-f);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new L,ul=new Zr;class Jr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),ds.subVectors(this.max,Cr),zi.subVectors(t.a,Cr),Gi.subVectors(t.b,Cr),Hi.subVectors(t.c,Cr),Vn.subVectors(Gi,zi),Wn.subVectors(Hi,Gi),ui.subVectors(zi,Hi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ui.z,ui.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ui.z,0,-ui.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ui.y,ui.x,0];return!Ua(e,zi,Gi,Hi,ds)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,zi,Gi,Hi,ds))?!1:(fs.crossVectors(Vn,Wn),e=[fs.x,fs.y,fs.z],Ua(e,zi,Gi,Hi,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new L,new L,new L,new L,new L,new L,new L,new L],on=new L,hs=new Jr,zi=new L,Gi=new L,Hi=new L,Vn=new L,Wn=new L,ui=new L,Cr=new L,ds=new L,fs=new L,hi=new L;function Ua(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hi.fromArray(i,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Uf=new Jr,Pr=new L,Na=new L;class oa{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);const e=Pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Pr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(Na)),this.expandByPoint(Pr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new L,Fa=new L,ps=new L,Xn=new L,Oa=new L,ms=new L,Ba=new L;class _c{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fa.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Fa);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Xn.dot(this.direction),c=-Xn.dot(ps),l=Xn.lengthSq(),u=Math.abs(1-a*a);let f,p,g,_;if(u>0)if(f=a*c-o,p=a*o-c,_=s*u,f>=0)if(p>=-_)if(p<=_){const M=1/u;f*=M,p*=M,g=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*c)+l;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+l):p<=_?(f=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+l);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fa).addScaledVector(ps,p),g}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),u>=0?(s=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,s){Oa.subVectors(e,t),ms.subVectors(n,t),Ba.crossVectors(Oa,ms);let a=this.direction.dot(Ba),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const c=o*this.direction.dot(ms.crossVectors(Xn,ms));if(c<0)return null;const l=o*this.direction.dot(Oa.cross(Xn));if(l<0||c+l>a)return null;const u=-o*Xn.dot(Ba);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,r,s,a,o,c,l,u,f,p,g,_,M,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,p,g,_,M,m)}set(t,e,n,r,s,a,o,c,l,u,f,p,g,_,M,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=p,d[3]=g,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=a*u,g=a*f,_=o*u,M=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=g+_*l,e[5]=p-M*l,e[9]=-o*c,e[2]=M-p*l,e[6]=_+g*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*u,g=c*f,_=l*u,M=l*f;e[0]=p+M*o,e[4]=_*o-g,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=g*o-_,e[6]=M+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*u,g=c*f,_=l*u,M=l*f;e[0]=p-M*o,e[4]=-a*f,e[8]=_+g*o,e[1]=g+_*o,e[5]=a*u,e[9]=M-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*u,g=a*f,_=o*u,M=o*f;e[0]=c*u,e[4]=_*l-g,e[8]=p*l+M,e[1]=c*f,e[5]=M*l+p,e[9]=g*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,g=a*l,_=o*c,M=o*l;e[0]=c*u,e[4]=M-p*f,e[8]=_*f+g,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=g*f+_,e[10]=p-M*f}else if(t.order==="XZY"){const p=a*c,g=a*l,_=o*c,M=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+M,e[5]=a*u,e[9]=g*f-_,e[2]=_*f-g,e[6]=o*u,e[10]=M*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Ff)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),qn.crossVectors(n,Ye),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),qn.crossVectors(n,Ye)),qn.normalize(),gs.crossVectors(Ye,qn),r[0]=qn.x,r[4]=gs.x,r[8]=Ye.x,r[1]=qn.y,r[5]=gs.y,r[9]=Ye.y,r[2]=qn.z,r[6]=gs.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],p=n[9],g=n[13],_=n[2],M=n[6],m=n[10],d=n[14],E=n[3],S=n[7],T=n[11],N=n[15],A=r[0],R=r[4],I=r[8],w=r[12],v=r[1],P=r[5],k=r[9],z=r[13],W=r[2],Y=r[6],V=r[10],j=r[14],H=r[3],ut=r[7],pt=r[11],Mt=r[15];return s[0]=a*A+o*v+c*W+l*H,s[4]=a*R+o*P+c*Y+l*ut,s[8]=a*I+o*k+c*V+l*pt,s[12]=a*w+o*z+c*j+l*Mt,s[1]=u*A+f*v+p*W+g*H,s[5]=u*R+f*P+p*Y+g*ut,s[9]=u*I+f*k+p*V+g*pt,s[13]=u*w+f*z+p*j+g*Mt,s[2]=_*A+M*v+m*W+d*H,s[6]=_*R+M*P+m*Y+d*ut,s[10]=_*I+M*k+m*V+d*pt,s[14]=_*w+M*z+m*j+d*Mt,s[3]=E*A+S*v+T*W+N*H,s[7]=E*R+S*P+T*Y+N*ut,s[11]=E*I+S*k+T*V+N*pt,s[15]=E*w+S*z+T*j+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],g=t[14],_=t[3],M=t[7],m=t[11],d=t[15];return _*(+s*c*f-r*l*f-s*o*p+n*l*p+r*o*g-n*c*g)+M*(+e*c*g-e*l*p+s*a*p-r*a*g+r*l*u-s*c*u)+m*(+e*l*f-e*o*g-s*a*f+n*a*g+s*o*u-n*l*u)+d*(-r*o*u-e*c*f+e*o*p+r*a*f-n*a*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],g=t[11],_=t[12],M=t[13],m=t[14],d=t[15],E=f*m*l-M*p*l+M*c*g-o*m*g-f*c*d+o*p*d,S=_*p*l-u*m*l-_*c*g+a*m*g+u*c*d-a*p*d,T=u*M*l-_*f*l+_*o*g-a*M*g-u*o*d+a*f*d,N=_*f*c-u*M*c-_*o*p+a*M*p+u*o*m-a*f*m,A=e*E+n*S+r*T+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=E*R,t[1]=(M*p*s-f*m*s-M*r*g+n*m*g+f*r*d-n*p*d)*R,t[2]=(o*m*s-M*c*s+M*r*l-n*m*l-o*r*d+n*c*d)*R,t[3]=(f*c*s-o*p*s-f*r*l+n*p*l+o*r*g-n*c*g)*R,t[4]=S*R,t[5]=(u*m*s-_*p*s+_*r*g-e*m*g-u*r*d+e*p*d)*R,t[6]=(_*c*s-a*m*s-_*r*l+e*m*l+a*r*d-e*c*d)*R,t[7]=(a*p*s-u*c*s+u*r*l-e*p*l-a*r*g+e*c*g)*R,t[8]=T*R,t[9]=(_*f*s-u*M*s-_*n*g+e*M*g+u*n*d-e*f*d)*R,t[10]=(a*M*s-_*o*s+_*n*l-e*M*l-a*n*d+e*o*d)*R,t[11]=(u*o*s-a*f*s-u*n*l+e*f*l+a*n*g-e*o*g)*R,t[12]=N*R,t[13]=(u*M*r-_*f*r+_*n*p-e*M*p-u*n*m+e*f*m)*R,t[14]=(_*o*r-a*M*r-_*n*c+e*M*c+a*n*m-e*o*m)*R,t[15]=(a*f*r-u*o*r+u*n*c-e*f*c-a*n*p+e*o*p)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,p=s*l,g=s*u,_=s*f,M=a*u,m=a*f,d=o*f,E=c*l,S=c*u,T=c*f,N=n.x,A=n.y,R=n.z;return r[0]=(1-(M+d))*N,r[1]=(g+T)*N,r[2]=(_-S)*N,r[3]=0,r[4]=(g-T)*A,r[5]=(1-(p+d))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(_+S)*R,r[9]=(m-E)*R,r[10]=(1-(p+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,u=1/a,f=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Bn){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let g,_;if(o===Bn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ta)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Bn){const c=this.elements,l=1/(e-t),u=1/(n-r),f=1/(a-s),p=(e+t)*l,g=(n+r)*u;let _,M;if(o===Bn)_=(a+s)*f,M=-2*f;else if(o===ta)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new L,cn=new ce,Nf=new L(0,0,0),Ff=new L(1,1,1),qn=new L,gs=new L,Ye=new L,hl=new ce,dl=new Zr;class Tn{constructor(t=0,e=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Of=0;const fl=new L,Wi=new Zr,Ln=new ce,_s=new L,Lr=new L,Bf=new L,kf=new Zr,pl=new L(1,0,0),ml=new L(0,1,0),gl=new L(0,0,1),_l={type:"added"},zf={type:"removed"},Xi={type:"childadded",child:null},ka={type:"childremoved",child:null};class Ae extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new Tn,n=new Zr,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ot}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(ml,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(ml,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_s.copy(t):_s.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Lr,_s,this.up):Ln.lookAt(_s,Lr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new L,In=new L,za=new L,Dn=new L,qi=new L,Yi=new L,vl=new L,Ga=new L,Ha=new L,Va=new L;class En{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),In.subVectors(n,e),za.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(In),c=ln.dot(za),l=In.dot(In),u=In.dot(za),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(l*c-o*u)*p,_=(a*u-o*c)*p;return s.set(1-g-_,_,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,n),Yi.subVectors(s,n),Ga.subVectors(t,n);const c=qi.dot(Ga),l=Yi.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Ha.subVectors(t,r);const u=qi.dot(Ha),f=Yi.dot(Ha);if(u>=0&&f<=u)return e.copy(r);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(qi,a);Va.subVectors(t,s);const g=qi.dot(Va),_=Yi.dot(Va);if(_>=0&&g<=_)return e.copy(s);const M=g*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Yi,o);const m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return vl.subVectors(s,r),o=(f-u)/(f-u+(g-_)),e.copy(r).addScaledVector(vl,o);const d=1/(m+M+p);return a=M*d,o=p*d,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Tf(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Wa(a,s,t+1/3),this.g=Wa(a,s,t),this.b=Wa(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const n=Wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return Jt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(ke(Ie.r*255,0,255))*65536+Math.round(ke(Ie.g*255,0,255))*256+Math.round(ke(Ie.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=yn){Jt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(vs);const n=Ca(Yn.h,vs.h,e),r=Ca(Yn.s,vs.s,e),s=Ca(Yn.l,vs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Tt;Tt.NAMES=Wu;let Gf=0;class Sr extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=rr,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=ho,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class vn extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,xs=new Bt;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Hr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ar(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ar(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ar(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ar(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class Xu extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qu extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const tn=new ce,Xa=new Ae,$i=new L,$e=new Jr,Ir=new Jr,Te=new L;class Ze extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?qu:Xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors($e.min,Ir.min),$e.expandByPoint(Te),Te.addVectors($e.max,Ir.max),$e.expandByPoint(Te)):($e.expandByPoint(Ir.min),$e.expandByPoint(Ir.max))}$e.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Te.fromBufferAttribute(o,l),c&&($i.fromBufferAttribute(t,l),Te.add($i)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new L,c[I]=new L;const l=new L,u=new L,f=new L,p=new Bt,g=new Bt,_=new Bt,M=new L,m=new L;function d(I,w,v){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,v),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,v),u.sub(l),f.sub(l),g.sub(p),_.sub(p);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(P),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(P),o[I].add(M),o[w].add(M),o[v].add(M),c[I].add(m),c[w].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,w=E.length;I<w;++I){const v=E[I],P=v.start,k=v.count;for(let z=P,W=P+k;z<W;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new L,T=new L,N=new L,A=new L;function R(I){N.fromBufferAttribute(r,I),A.copy(N);const w=o[I];S.copy(w),S.sub(N.multiplyScalar(N.dot(w))).normalize(),T.crossVectors(A,w);const P=T.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,w=E.length;I<w;++I){const v=E[I],P=v.start,k=v.count;for(let z=P,W=P+k;z<W;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,f=new L;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),M=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,p=new l.constructor(c.length*u);let g=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*u;for(let d=0;d<u;d++)p[_++]=l[g++]}return new pn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const p=l[u],g=t(p,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];u.push(g.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new ce,di=new _c,Ms=new oa,Ml=new L,Ki=new L,ji=new L,Zi=new L,qa=new L,ys=new L,Ss=new Bt,Es=new Bt,ws=new Bt,yl=new L,Sl=new L,El=new L,Ts=new L,bs=new L;class Q extends Ae{constructor(t=new Ze,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(qa.fromBufferAttribute(f,t),a?ys.addScaledVector(qa,u):ys.addScaledVector(qa.sub(e),u))}e.add(ys)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(Ms.containsPoint(di.origin)===!1&&(di.intersectSphere(Ms,Ml)===null||di.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(xl.copy(s).invert(),di.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const m=p[_],d=a[m.materialIndex],E=Math.max(m.start,g.start),S=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,N=S;T<N;T+=3){const A=o.getX(T),R=o.getX(T+1),I=o.getX(T+2);r=As(this,d,t,n,l,u,f,A,R,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let m=_,d=M;m<d;m+=3){const E=o.getX(m),S=o.getX(m+1),T=o.getX(m+2);r=As(this,a,t,n,l,u,f,E,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const m=p[_],d=a[m.materialIndex],E=Math.max(m.start,g.start),S=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let T=E,N=S;T<N;T+=3){const A=T,R=T+1,I=T+2;r=As(this,d,t,n,l,u,f,A,R,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let m=_,d=M;m<d;m+=3){const E=m,S=m+1,T=m+2;r=As(this,a,t,n,l,u,f,E,S,T),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Vf(i,t,e,n,r,s,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===ei,o),c===null)return null;bs.copy(o),bs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(bs);return l<e.near||l>e.far?null:{distance:l,point:bs.clone(),object:i}}function As(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Ki),i.getVertexPosition(c,ji),i.getVertexPosition(l,Zi);const u=Vf(i,t,e,n,Ki,ji,Zi,Ts);if(u){r&&(Ss.fromBufferAttribute(r,o),Es.fromBufferAttribute(r,c),ws.fromBufferAttribute(r,l),u.uv=En.getInterpolation(Ts,Ki,ji,Zi,Ss,Es,ws,new Bt)),s&&(Ss.fromBufferAttribute(s,o),Es.fromBufferAttribute(s,c),ws.fromBufferAttribute(s,l),u.uv1=En.getInterpolation(Ts,Ki,ji,Zi,Ss,Es,ws,new Bt)),a&&(yl.fromBufferAttribute(a,o),Sl.fromBufferAttribute(a,c),El.fromBufferAttribute(a,l),u.normal=En.getInterpolation(Ts,Ki,ji,Zi,yl,Sl,El,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};En.getNormal(Ki,ji,Zi,f.normal),u.face=f}return u}class ie extends Ze{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function _(M,m,d,E,S,T,N,A,R,I,w){const v=T/R,P=N/I,k=T/2,z=N/2,W=A/2,Y=R+1,V=I+1;let j=0,H=0;const ut=new L;for(let pt=0;pt<V;pt++){const Mt=pt*P-z;for(let Vt=0;Vt<Y;Vt++){const ee=Vt*v-k;ut[M]=ee*E,ut[m]=Mt*S,ut[d]=W,l.push(ut.x,ut.y,ut.z),ut[M]=0,ut[m]=0,ut[d]=A>0?1:-1,u.push(ut.x,ut.y,ut.z),f.push(Vt/R),f.push(1-pt/I),j+=1}}for(let pt=0;pt<I;pt++)for(let Mt=0;Mt<R;Mt++){const Vt=p+Mt+Y*pt,ee=p+Mt+Y*(pt+1),X=p+(Mt+1)+Y*(pt+1),nt=p+(Mt+1)+Y*pt;c.push(Vt,ee,nt),c.push(ee,X,nt),H+=6}o.addGroup(g,H,w),g+=H,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=fr(i[e]);for(const r in n)t[r]=n[r]}return t}function Wf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Xf={clone:fr,merge:Ue};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $u extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,wl=new Bt,Tl=new Bt;class Ke extends $u{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,wl,Tl),e.subVectors(Tl,wl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class $f extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const s=new Ke(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const a=new Ke(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const c=new Ke(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,p,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ku extends He{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ku(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ie(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Qn});s.uniforms.tEquirect.value=e;const a=new Q(r,s),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=hn),new $f(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ya=new L,jf=new L,Zf=new Ot;class _i{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ya.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zf.getNormalMatrix(t),r=this.coplanarPoint(Ya).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new oa,Rs=new L;class xc{constructor(t=new _i,e=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],M=r[10],m=r[11],d=r[12],E=r[13],S=r[14],T=r[15];if(n[0].setComponents(c-s,p-l,m-g,T-d).normalize(),n[1].setComponents(c+s,p+l,m+g,T+d).normalize(),n[2].setComponents(c+a,p+u,m+_,T+E).normalize(),n[3].setComponents(c-a,p-u,m-_,T-E).normalize(),n[4].setComponents(c-o,p-f,m-M,T-S).normalize(),e===Bn)n[5].setComponents(c+o,p+f,m+M,T+S).normalize();else if(e===ta)n[5].setComponents(o,f,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Rs.x=r.normal.x>0?t.max.x:t.min.x,Rs.y=r.normal.y>0?t.max.y:t.min.y,Rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ju(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jf(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c._updateRange,p=c.updateRanges;if(i.bindBuffer(l,o),f.count===-1&&p.length===0&&i.bufferSubData(l,0,u),p.length!==0){for(let g=0,_=p.length;g<_;g++){const M=p[g];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Qr extends Ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,p=e/c,g=[],_=[],M=[],m=[];for(let d=0;d<u;d++){const E=d*p-a;for(let S=0;S<l;S++){const T=S*f-s;_.push(T,-E,0),M.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const S=E+l*d,T=E+l*(d+1),N=E+1+l*(d+1),A=E+1+l*d;g.push(S,T,A),g.push(T,N,A)}this.setIndex(g),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
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
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,op=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
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
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,s0=`#if DEPTH_PACKING == 3200
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
}`,a0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,h0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,_0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,M0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,T0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Qf,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:ap,batching_pars_vertex:op,batching_vertex:cp,begin_vertex:lp,beginnormal_vertex:up,bsdfs:hp,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:vp,color_pars_fragment:xp,color_pars_vertex:Mp,color_vertex:yp,common:Sp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:wp,displacementmap_pars_vertex:Tp,displacementmap_vertex:bp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Np,fog_vertex:Fp,fog_pars_vertex:Op,fog_fragment:Bp,fog_pars_fragment:kp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:$p,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:rm,map_fragment:sm,map_pars_fragment:am,map_particle_fragment:om,map_particle_pars_fragment:cm,metalnessmap_fragment:lm,metalnessmap_pars_fragment:um,morphinstance_vertex:hm,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:_m,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:Mm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Tm,opaque_fragment:bm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Bm,skinning_pars_vertex:km,skinning_vertex:zm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Vm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Km,uv_vertex:jm,worldpos_vertex:Zm,background_vert:Jm,background_frag:Qm,backgroundCube_vert:t0,backgroundCube_frag:e0,cube_vert:n0,cube_frag:i0,depth_vert:r0,depth_frag:s0,distanceRGBA_vert:a0,distanceRGBA_frag:o0,equirect_vert:c0,equirect_frag:l0,linedashed_vert:u0,linedashed_frag:h0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:v0,meshnormal_frag:x0,meshphong_vert:M0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:E0,meshtoon_vert:w0,meshtoon_frag:T0,points_vert:b0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},ot={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Sn={basic:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ue([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ue([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ue([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ue([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ue([ot.lights,ot.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Sn.physical={uniforms:Ue([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Cs={r:0,b:0,g:0},pi=new Tn,I0=new ce;function D0(i,t,e,n,r,s,a){const o=new Tt(0);let c=s===!0?0:1,l,u,f=null,p=0,g=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function M(E){let S=!1;const T=_(E);T===null?d(o,c):T&&T.isColor&&(d(T,1),S=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===sa)?(u===void 0&&(u=new Q(new ie(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:fr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(pi)),u.material.toneMapped=Jt.getTransfer(T.colorSpace)!==ae,(f!==T||p!==T.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,p=T.version,g=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Q(new Qr(2,2),new ni({name:"BackgroundMaterial",uniforms:fr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,p=T.version,g=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,S){E.getRGB(Cs,Yu(i)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:M,addToRenderList:m}}function U0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(v,P,k,z,W){let Y=!1;const V=f(z,k,P);s!==V&&(s=V,l(s.object)),Y=g(v,z,k,W),Y&&_(v,z,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(v,P,k,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,P,k){const z=k.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let V=Y[z];return V===void 0&&(V=p(c()),Y[z]=V),V}function p(v){const P=[],k=[],z=[];for(let W=0;W<e;W++)P[W]=0,k[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:z,object:v,attributes:{},index:null}}function g(v,P,k,z){const W=s.attributes,Y=P.attributes;let V=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){const pt=W[H];let Mt=Y[H];if(Mt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),pt===void 0||pt.attribute!==Mt||Mt&&pt.data!==Mt.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(v,P,k,z){const W={},Y=P.attributes;let V=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){let pt=Y[H];pt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Mt={};Mt.attribute=pt,pt&&pt.data&&(Mt.data=pt.data),W[H]=Mt,V++}s.attributes=W,s.attributesNum=V,s.index=z}function M(){const v=s.newAttributes;for(let P=0,k=v.length;P<k;P++)v[P]=0}function m(v){d(v,0)}function d(v,P){const k=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;k[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),W[v]!==P&&(i.vertexAttribDivisor(v,P),W[v]=P)}function E(){const v=s.newAttributes,P=s.enabledAttributes;for(let k=0,z=P.length;k<z;k++)P[k]!==v[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function S(v,P,k,z,W,Y,V){V===!0?i.vertexAttribIPointer(v,P,k,W,Y):i.vertexAttribPointer(v,P,k,z,W,Y)}function T(v,P,k,z){M();const W=z.attributes,Y=k.getAttributes(),V=P.defaultAttributeValues;for(const j in Y){const H=Y[j];if(H.location>=0){let ut=W[j];if(ut===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const pt=ut.normalized,Mt=ut.itemSize,Vt=t.get(ut);if(Vt===void 0)continue;const ee=Vt.buffer,X=Vt.type,nt=Vt.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||ut.gpuType===uc;if(ut.isInterleavedBufferAttribute){const dt=ut.data,Dt=dt.stride,kt=ut.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)d(H.location+Ht,dt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ht=0;Ht<H.locationSize;Ht++)S(H.location+Ht,Mt/H.locationSize,X,pt,Dt*nt,(kt+Mt/H.locationSize*Ht)*nt,gt)}else{if(ut.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)d(H.location+dt,ut.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let dt=0;dt<H.locationSize;dt++)S(H.location+dt,Mt/H.locationSize,X,pt,Mt*nt,Mt/H.locationSize*dt*nt,gt)}}else if(V!==void 0){const pt=V[j];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}E()}function N(){I();for(const v in n){const P=n[v];for(const k in P){const z=P[k];for(const W in z)u(z[W].object),delete z[W];delete P[k]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const k in P){const z=P[k];for(const W in z)u(z[W].object),delete z[W];delete P[k]}delete n[v.id]}function R(v){for(const P in n){const k=n[P];if(k[v.id]===void 0)continue;const z=k[v.id];for(const W in z)u(z[W].object),delete z[W];delete k[v.id]}}function I(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function N0(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,n,1)}function c(l,u,f,p){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)a(l[_],u[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M];for(let M=0;M<p.length;M++)e.update(_,n,p[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function F0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:d,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:T,maxSamples:N}}function O0(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new _i,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||r;return r=p,n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const E=s?0:n,S=E*4;let T=d.clippingState||null;c.value=T,T=u(_,p,S,g);for(let N=0;N!==S;++N)T[N]=e[N];d.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,g,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const d=g+M*4,E=p.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,T=g;S!==M;++S,T+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function B0(i){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=lr:o===po&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zu extends $u{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,bl=[.125,.215,.35,.446,.526,.582],Mi=20,$a=new Zu,Al=new Tt;let Ka=null,ja=0,Za=0,Ja=!1;const vi=(1+Math.sqrt(5))/2,tr=1/vi,Rl=[new L(-vi,tr,0),new L(vi,tr,0),new L(-tr,0,vi),new L(tr,0,vi),new L(0,vi,-tr),new L(0,vi,tr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,ja,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Kr,format:fn,colorSpace:si,depthBuffer:!1},r=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(s)),this._blurMaterial=z0(s,t,e)}return r}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,r){const o=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Al),u.toneMapping=ti,u.autoClear=!1;const g=new vn({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new Q(new ie,g);let M=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,M=!0):(g.color.copy(Al),M=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):E===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const S=this._cubeSize;Ps(r,E*S,d>2?S:0,S,S),u.setRenderTarget(r),M&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===lr||t.mapping===ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Ps(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rl[(r-s-1)%Rl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Q(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Mi-1),M=s/_,m=isFinite(s)?1+Math.floor(u*M):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const d=[];let E=0;for(let R=0;R<Mi;++R){const I=R/M,w=Math.exp(-I*I/2);d.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const T=this._sizeLods[r],N=3*T*(r>S-nr?r-S+nr:0),A=4*(this._cubeSize-T);Ps(e,N,A,3*T,2*T),c.setRenderTarget(e),c.render(f,$a)}}function k0(i){const t=[],e=[],n=[];let r=i;const s=i-nr+1+bl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-nr?c=bl[a-i+nr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,M=3,m=2,d=1,E=new Float32Array(M*_*g),S=new Float32Array(m*_*g),T=new Float32Array(d*_*g);for(let A=0;A<g;A++){const R=A%3*2/3-1,I=A>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(w,M*_*A),S.set(p,m*_*A);const v=[A,A,A,A,A,A];T.set(v,d*_*A)}const N=new Ze;N.setAttribute("position",new pn(E,M)),N.setAttribute("uv",new pn(S,m)),N.setAttribute("faceIndex",new pn(T,d)),t.push(N),r>nr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function z0(i,t,e){const n=new Float32Array(Mi),r=new L(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ll(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Il(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function G0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fo||c===po,u=c===lr||c===ur;if(l||u){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Cl(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return l&&g&&g.height>0||u&&g&&r(g)?(e===null&&(e=new Cl(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function H0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function V0(i,t,e,n){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const M=p.morphAttributes[_];for(let m=0,d=M.length;m<d;m++)t.remove(M[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const M=g[_];for(let m=0,d=M.length;m<d;m++)t.update(M[m],i.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,_=f.attributes.position;let M=0;if(g!==null){const E=g.array;M=g.version;for(let S=0,T=E.length;S<T;S+=3){const N=E[S+0],A=E[S+1],R=E[S+2];p.push(N,A,A,R,R,N)}}else if(_!==void 0){const E=_.array;M=_.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const N=S+0,A=S+1,R=S+2;p.push(N,A,A,R,R,N)}}else return;const m=new(Gu(p)?qu:Xu)(p,1);m.version=M;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function W0(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,g){i.drawElements(n,g,s,p*a),e.update(g,n,1)}function l(p,g,_){_!==0&&(i.drawElementsInstanced(n,g,s,p*a,_),e.update(g,n,_))}function u(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,p,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];e.update(m,n,1)}function f(p,g,_,M){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)l(p[d]/a,g[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,s,p,0,M,0,_);let d=0;for(let E=0;E<_;E++)d+=g[E];for(let E=0;E<M.length;E++)e.update(d,n,M[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function X0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function q0(i,t,e){const n=new WeakMap,r=new oe;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var g=v;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),M===!0&&(T=2),m===!0&&(T=3);let N=o.attributes.position.count*T,A=1;N>t.maxTextureSize&&(A=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const R=new Float32Array(N*A*4*f),I=new Vu(R,N,A,f);I.type=On,I.needsUpdate=!0;const w=T*4;for(let P=0;P<f;P++){const k=d[P],z=E[P],W=S[P],Y=N*A*4*P;for(let V=0;V<k.count;V++){const j=V*w;_===!0&&(r.fromBufferAttribute(k,V),R[Y+j+0]=r.x,R[Y+j+1]=r.y,R[Y+j+2]=r.z,R[Y+j+3]=0),M===!0&&(r.fromBufferAttribute(z,V),R[Y+j+4]=r.x,R[Y+j+5]=r.y,R[Y+j+6]=r.z,R[Y+j+7]=0),m===!0&&(r.fromBufferAttribute(W,V),R[Y+j+8]=r.x,R[Y+j+9]=r.y,R[Y+j+10]=r.z,R[Y+j+11]=W.itemSize===4?r.w:1)}}p={count:f,texture:I,size:new Bt(N,A)},n.set(o,p),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Y0(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Ju extends He{constructor(t,e,n,r,s,a,o,c,l,u=sr){if(u!==sr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===sr&&(n=Pi),n===void 0&&u===dr&&(n=hr),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qu=new He,Dl=new Ju(1,1),th=new Vu,eh=new Df,nh=new Ku,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function Er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ul[r];if(s===void 0&&(s=new Float32Array(r),Ul[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),we(e,n)}}function Q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),we(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),we(e,n)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function lg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dl.compareFunction=zu,s=Dl):s=Qu,e.setTexture2D(t||s,r)}function ug(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||eh,r)}function hg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||nh,r)}function dg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||th,r)}function fg(i){switch(i){case 5126:return $0;case 35664:return K0;case 35665:return j0;case 35666:return Z0;case 35674:return J0;case 35675:return Q0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return ag;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=Er(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){const e=Er(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=Er(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){const e=Er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){const e=Er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){const e=Er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){const n=this.cache,r=t.length,s=ca(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Qu,s[a])}function Pg(i,t,e){const n=this.cache,r=t.length,s=ca(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||eh,s[a])}function Lg(i,t,e){const n=this.cache,r=t.length,s=ca(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||nh,s[a])}function Ig(i,t,e){const n=this.cache,r=t.length,s=ca(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||th,s[a])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return bg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}}class Fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function Og(i,t,e){const n=i.name,r=n.length;for(Qa.lastIndex=0;;){const s=Qa.exec(n),a=Qa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){kl(e,l===void 0?new Ug(o,i,t):new Ng(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Fg(o),kl(e,f)),e=f}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Og(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bg=37297;let kg=0;function zg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Gg(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===Qs&&e===Js?n="LinearDisplayP3ToLinearSRGB":t===Js&&e===Qs&&(n="LinearSRGBToLinearDisplayP3"),i){case si:case aa:return[n,"LinearTransferOETF"];case yn:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+zg(i.getShaderSource(t),a)}else return r}function Hg(i,t){const e=Gg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vg(i,t){let e;switch(t){case of:e="Linear";break;case cf:e="Reinhard";break;case lf:e="OptimizedCineon";break;case uf:e="ACESFilmic";break;case df:e="AgX";break;case ff:e="Neutral";break;case hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new L;function Wg(){Jt.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function qg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Or(i){return i!==""}function Hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace($g,jg)}const Kg=new Map;function jg(i,t){let e=Ft[t];if(e===void 0){const n=Kg.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function t_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case ur:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function n_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Au:t="ENVMAP_BLENDING_MULTIPLY";break;case sf:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function i_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Qg(e),l=t_(e),u=e_(e),f=n_(e),p=i_(e),g=Xg(e),_=qg(s),M=r.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ti?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=Wo(a),a=Hl(a,e),a=Vl(a,e),o=Wo(o),o=Hl(o,e),o=Vl(o,e),a=Wl(a),o=Wl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=E+m+a,T=E+d+o,N=zl(r,r.VERTEX_SHADER,S),A=zl(r,r.FRAGMENT_SHADER,T);r.attachShader(M,N),r.attachShader(M,A),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(P){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(M).trim(),z=r.getShaderInfoLog(N).trim(),W=r.getShaderInfoLog(A).trim();let Y=!0,V=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,N,A);else{const j=Gl(r,N,"vertex"),H=Gl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(N),r.deleteShader(A),I=new Xs(r,M),w=Yg(r,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,Bg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=A,this}let s_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o_(t),e.set(t,n)),n}}class o_{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}}function c_(i,t,e,n,r,s,a){const o=new vc,c=new a_,l=new Set,u=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,v,P,k,z){const W=k.fog,Y=z.geometry,V=w.isMeshStandardMaterial?k.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),H=j&&j.mapping===sa?j.image.height:null,ut=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=pt!==void 0?pt.length:0;let Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let ee,X,nt,gt;if(ut){const $t=Sn[ut];ee=$t.vertexShader,X=$t.fragmentShader}else ee=w.vertexShader,X=w.fragmentShader,c.update(w),nt=c.getVertexShaderID(w),gt=c.getFragmentShaderID(w);const dt=i.getRenderTarget(),Dt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,Ht=!!w.map,he=!!w.matcap,C=!!j,ge=!!w.aoMap,te=!!w.lightMap,ne=!!w.bumpMap,St=!!w.normalMap,_e=!!w.displacementMap,Pt=!!w.emissiveMap,Ut=!!w.metalnessMap,b=!!w.roughnessMap,x=w.anisotropy>0,G=w.clearcoat>0,J=w.dispersion>0,et=w.iridescence>0,Z=w.sheen>0,Et=w.transmission>0,ct=x&&!!w.anisotropyMap,ft=G&&!!w.clearcoatMap,Nt=G&&!!w.clearcoatNormalMap,it=G&&!!w.clearcoatRoughnessMap,ht=et&&!!w.iridescenceMap,Wt=et&&!!w.iridescenceThicknessMap,Ct=Z&&!!w.sheenColorMap,mt=Z&&!!w.sheenRoughnessMap,Lt=!!w.specularMap,zt=!!w.specularColorMap,ue=!!w.specularIntensityMap,D=Et&&!!w.transmissionMap,rt=Et&&!!w.thicknessMap,q=!!w.gradientMap,$=!!w.alphaMap,at=w.alphaTest>0,bt=!!w.alphaHash,Xt=!!w.extensions;let ve=ti;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Ce={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:ee,fragmentShader:X,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:si,alphaToCoverage:!!w.alphaToCoverage,map:Ht,matcap:he,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:H,aoMap:ge,lightMap:te,bumpMap:ne,normalMap:St,displacementMap:p&&_e,emissiveMap:Pt,normalMapObjectSpace:St&&w.normalMapType===_f,normalMapTangentSpace:St&&w.normalMapType===ku,metalnessMap:Ut,roughnessMap:b,anisotropy:x,anisotropyMap:ct,clearcoat:G,clearcoatMap:ft,clearcoatNormalMap:Nt,clearcoatRoughnessMap:it,dispersion:J,iridescence:et,iridescenceMap:ht,iridescenceThicknessMap:Wt,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Lt,specularColorMap:zt,specularIntensityMap:ue,transmission:Et,transmissionMap:D,thicknessMap:rt,gradientMap:q,opaque:w.transparent===!1&&w.blending===rr&&w.alphaToCoverage===!1,alphaMap:$,alphaTest:at,alphaHash:bt,combine:w.combine,mapUv:Ht&&M(w.map.channel),aoMapUv:ge&&M(w.aoMap.channel),lightMapUv:te&&M(w.lightMap.channel),bumpMapUv:ne&&M(w.bumpMap.channel),normalMapUv:St&&M(w.normalMap.channel),displacementMapUv:_e&&M(w.displacementMap.channel),emissiveMapUv:Pt&&M(w.emissiveMap.channel),metalnessMapUv:Ut&&M(w.metalnessMap.channel),roughnessMapUv:b&&M(w.roughnessMap.channel),anisotropyMapUv:ct&&M(w.anisotropyMap.channel),clearcoatMapUv:ft&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&M(w.sheenRoughnessMap.channel),specularMapUv:Lt&&M(w.specularMap.channel),specularColorMapUv:zt&&M(w.specularColorMap.channel),specularIntensityMapUv:ue&&M(w.specularIntensityMap.channel),transmissionMapUv:D&&M(w.transmissionMap.channel),thicknessMapUv:rt&&M(w.thicknessMap.channel),alphaMapUv:$&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Ht||$),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Vt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Ht&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Nn,flipSided:w.side===Ne,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function d(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(E(v,w),S(v,w),v.push(i.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function E(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function S(w,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),w.push(o.mask)}function T(w){const v=_[w.type];let P;if(v){const k=Sn[v];P=Xf.clone(k.uniforms)}else P=w.uniforms;return P}function N(w,v){let P;for(let k=0,z=u.length;k<z;k++){const W=u[k];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new r_(i,v,w,s),u.push(P)),P}function A(w){if(--w.usedTimes===0){const v=u.indexOf(w);u[v]=u[u.length-1],u.pop(),w.destroy()}}function R(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:N,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:I}}function l_(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ql(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,p,g,_,M,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:M,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=M,d.group=m),t++,d}function o(f,p,g,_,M,m){const d=a(f,p,g,_,M,m);g.transmission>0?n.push(d):g.transparent===!0?r.push(d):e.push(d)}function c(f,p,g,_,M,m){const d=a(f,p,g,_,M,m);g.transmission>0?n.unshift(d):g.transparent===!0?r.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||u_),n.length>1&&n.sort(p||ql),r.length>1&&r.sort(p||ql)}function u(){for(let f=t,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function h_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Yl,i.set(n,[a])):r>=s.length?(a=new Yl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Tt};break;case"SpotLight":e={position:new L,direction:new L,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function f_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p_=0;function m_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g_(i){const t=new d_,e=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new ce,a=new ce;function o(l){let u=0,f=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,_=0,M=0,m=0,d=0,E=0,S=0,T=0,N=0,A=0,R=0;l.sort(m_);for(let w=0,v=l.length;w<v;w++){const P=l[w],k=P.color,z=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*z,f+=k.g*z,p+=k.b*z;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],z);R++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=V,g++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(z),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[M]=V;const j=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=j.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=Y,T++}M++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(k).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z),V.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==g||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==N||I.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=g,I.pointLength=_,I.spotLength=M,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=N,I.numLightProbes=R,n.version=p_++)}function c(l,u){let f=0,p=0,g=0,_=0,M=0;const m=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const S=l[d];if(S.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function $l(i){const t=new g_(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function __(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new $l(i),t.set(r,[o])):s>=a.length?(o=new $l(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class v_ extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x_ extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function S_(i,t,e){let n=new xc;const r=new Bt,s=new Bt,a=new oe,o=new v_({depthPacking:gf}),c=new x_,l={},u=e.maxTextureSize,f={[ei]:Ne,[Ne]:ei,[Nn]:Nn},p=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:M_,fragmentShader:y_}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Ze;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Q(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let d=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=d!==Un&&this.type===Un,W=d===Un&&this.type!==Un;for(let Y=0,V=A.length;Y<V;Y++){const j=A[Y],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ut=H.getFrameExtents();if(r.multiply(ut),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ut.x),r.x=s.x*ut.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ut.y),r.y=s.y*ut.y,H.mapSize.y=s.y)),H.map===null||z===!0||W===!0){const Mt=this.type!==Un?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new Li(r.x,r.y,Mt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const pt=H.getViewportCount();for(let Mt=0;Mt<pt;Mt++){const Vt=H.getViewport(Mt);a.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),k.viewport(a),H.updateMatrices(j,Mt),n=H.getFrustum(),T(R,I,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&E(H,I),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,v,P)};function E(A,R){const I=t.update(M);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,p,M,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,g,M,null)}function S(A,R,I,w){let v=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=v.uuid,z=R.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let Y=W[z];Y===void 0&&(Y=v.clone(),W[z]=Y,R.addEventListener("dispose",N)),v=Y}if(v.visible=R.visible,v.wireframe=R.wireframe,w===Un?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:f[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=i.properties.get(v);k.light=I}return v}function T(A,R,I,w,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=t.update(A),W=A.material;if(Array.isArray(W)){const Y=z.groups;for(let V=0,j=Y.length;V<j;V++){const H=Y[V],ut=W[H.materialIndex];if(ut&&ut.visible){const pt=S(A,ut,w,v);A.onBeforeShadow(i,A,R,I,z,pt,H),i.renderBufferDirect(I,null,z,pt,A,H),A.onAfterShadow(i,A,R,I,z,pt,H)}}}else if(W.visible){const Y=S(A,W,w,v);A.onBeforeShadow(i,A,R,I,z,Y,null),i.renderBufferDirect(I,null,z,Y,A,null),A.onAfterShadow(i,A,R,I,z,Y,null)}}const k=A.children;for(let z=0,W=k.length;z<W;z++)T(k[z],R,I,w,v)}function N(A){A.target.removeEventListener("dispose",N);for(const I in l){const w=l[I],v=A.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}function E_(i){function t(){let D=!1;const rt=new oe;let q=null;const $=new oe(0,0,0,0);return{setMask:function(at){q!==at&&!D&&(i.colorMask(at,at,at,at),q=at)},setLocked:function(at){D=at},setClear:function(at,bt,Xt,ve,Ce){Ce===!0&&(at*=ve,bt*=ve,Xt*=ve),rt.set(at,bt,Xt,ve),$.equals(rt)===!1&&(i.clearColor(at,bt,Xt,ve),$.copy(rt))},reset:function(){D=!1,q=null,$.set(-1,0,0,0)}}}function e(){let D=!1,rt=null,q=null,$=null;return{setTest:function(at){at?gt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(at){rt!==at&&!D&&(i.depthMask(at),rt=at)},setFunc:function(at){if(q!==at){switch(at){case Zd:i.depthFunc(i.NEVER);break;case Jd:i.depthFunc(i.ALWAYS);break;case Qd:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case tf:i.depthFunc(i.EQUAL);break;case ef:i.depthFunc(i.GEQUAL);break;case nf:i.depthFunc(i.GREATER);break;case rf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=at}},setLocked:function(at){D=at},setClear:function(at){$!==at&&(i.clearDepth(at),$=at)},reset:function(){D=!1,rt=null,q=null,$=null}}}function n(){let D=!1,rt=null,q=null,$=null,at=null,bt=null,Xt=null,ve=null,Ce=null;return{setTest:function($t){D||($t?gt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function($t){rt!==$t&&!D&&(i.stencilMask($t),rt=$t)},setFunc:function($t,Rn,Mn){(q!==$t||$!==Rn||at!==Mn)&&(i.stencilFunc($t,Rn,Mn),q=$t,$=Rn,at=Mn)},setOp:function($t,Rn,Mn){(bt!==$t||Xt!==Rn||ve!==Mn)&&(i.stencilOp($t,Rn,Mn),bt=$t,Xt=Rn,ve=Mn)},setLocked:function($t){D=$t},setClear:function($t){Ce!==$t&&(i.clearStencil($t),Ce=$t)},reset:function(){D=!1,rt=null,q=null,$=null,at=null,bt=null,Xt=null,ve=null,Ce=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,p=[],g=null,_=!1,M=null,m=null,d=null,E=null,S=null,T=null,N=null,A=new Tt(0,0,0),R=0,I=!1,w=null,v=null,P=null,k=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=V>=2);let H=null,ut={};const pt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Vt=new oe().fromArray(pt),ee=new oe().fromArray(Mt);function X(D,rt,q,$){const at=new Uint8Array(4),bt=i.createTexture();i.bindTexture(D,bt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<q;Xt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(rt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return bt}const nt={};nt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),s.setFunc(js),ne(!1),St(el),gt(i.CULL_FACE),ge(Qn);function gt(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Dt(D,rt){return u[D]!==rt?(i.bindFramebuffer(D,rt),u[D]=rt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function kt(D,rt){let q=p,$=!1;if(D){q=f.get(rt),q===void 0&&(q=[],f.set(rt,q));const at=D.textures;if(q.length!==at.length||q[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=at.length;bt<Xt;bt++)q[bt]=i.COLOR_ATTACHMENT0+bt;q.length=at.length,$=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,$=!0);$&&i.drawBuffers(q)}function Ht(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const he={[xi]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};he[Fd]=i.MIN,he[Od]=i.MAX;const C={[Bd]:i.ZERO,[kd]:i.ONE,[zd]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Vd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(D,rt,q,$,at,bt,Xt,ve,Ce,$t){if(D===Qn){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(gt(i.BLEND),_=!0),D!==Dd){if(D!==M||$t!==I){if((m!==xi||S!==xi)&&(i.blendEquation(i.FUNC_ADD),m=xi,S=xi),$t)switch(D){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cr:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,E=null,T=null,N=null,A.set(0,0,0),R=0,M=D,I=$t}return}at=at||rt,bt=bt||q,Xt=Xt||$,(rt!==m||at!==S)&&(i.blendEquationSeparate(he[rt],he[at]),m=rt,S=at),(q!==d||$!==E||bt!==T||Xt!==N)&&(i.blendFuncSeparate(C[q],C[$],C[bt],C[Xt]),d=q,E=$,T=bt,N=Xt),(ve.equals(A)===!1||Ce!==R)&&(i.blendColor(ve.r,ve.g,ve.b,Ce),A.copy(ve),R=Ce),M=D,I=!1}function te(D,rt){D.side===Nn?dt(i.CULL_FACE):gt(i.CULL_FACE);let q=D.side===Ne;rt&&(q=!q),ne(q),D.blending===rr&&D.transparent===!1?ge(Qn):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){w!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),w=D)}function St(D){D!==Ld?(gt(i.CULL_FACE),D!==v&&(D===el?i.cullFace(i.BACK):D===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),v=D}function _e(D){D!==P&&(Y&&i.lineWidth(D),P=D)}function Pt(D,rt,q){D?(gt(i.POLYGON_OFFSET_FILL),(k!==rt||z!==q)&&(i.polygonOffset(rt,q),k=rt,z=q)):dt(i.POLYGON_OFFSET_FILL)}function Ut(D){D?gt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+W-1),H!==D&&(i.activeTexture(D),H=D)}function x(D,rt,q){q===void 0&&(H===null?q=i.TEXTURE0+W-1:q=H);let $=ut[q];$===void 0&&($={type:void 0,texture:void 0},ut[q]=$),($.type!==D||$.texture!==rt)&&(H!==q&&(i.activeTexture(q),H=q),i.bindTexture(D,rt||nt[D]),$.type=D,$.texture=rt)}function G(){const D=ut[H];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){Vt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Vt.copy(D))}function mt(D){ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Lt(D,rt){let q=c.get(rt);q===void 0&&(q=new WeakMap,c.set(rt,q));let $=q.get(D);$===void 0&&($=i.getUniformBlockIndex(rt,D.name),q.set(D,$))}function zt(D,rt){const $=c.get(rt).get(D);o.get(rt)!==$&&(i.uniformBlockBinding(rt,$,D.__bindingPointIndex),o.set(rt,$))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,ut={},u={},f=new WeakMap,p=[],g=null,_=!1,M=null,m=null,d=null,E=null,S=null,T=null,N=null,A=new Tt(0,0,0),R=0,I=!1,w=null,v=null,P=null,k=null,z=null,Vt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:gt,disable:dt,bindFramebuffer:Dt,drawBuffers:kt,useProgram:Ht,setBlending:ge,setMaterial:te,setFlipSided:ne,setCullFace:St,setLineWidth:_e,setPolygonOffset:Pt,setScissorTest:Ut,activeTexture:b,bindTexture:x,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:ht,texImage3D:Wt,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:Nt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Ct,viewport:mt,reset:ue}}function Kl(i,t,e,n){const r=w_(n);switch(e){case Iu:return i*t;case Uu:return i*t;case Nu:return i*t*2;case Fu:return i*t/r.components*r.byteLength;case fc:return i*t/r.components*r.byteLength;case Ou:return i*t*2/r.components*r.byteLength;case pc:return i*t*2/r.components*r.byteLength;case Du:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case mc:return i*t*4/r.components*r.byteLength;case zs:case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case _o:case xo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Bo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bu:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w_(i){switch(i){case zn:case Cu:return{byteLength:1,components:1};case Wr:case Pu:case Kr:return{byteLength:2,components:1};case hc:case dc:return{byteLength:2,components:4};case Pi:case uc:case On:return{byteLength:4,components:1};case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,u=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return g?new OffscreenCanvas(b,x):ea("canvas")}function M(b,x,G){let J=1;const et=Ut(b);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(J*et.width),Et=Math.floor(J*et.height);f===void 0&&(f=_(Z,Et));const ct=x?_(Z,Et):f;return ct.width=Z,ct.height=Et,ct.getContext("2d").drawImage(b,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Et+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==rn&&b.minFilter!==hn}function d(b){i.generateMipmap(b)}function E(b,x,G,J,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),x===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),x===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),x===i.RGBA){const Et=et?Zs:Jt.getTransfer(J);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=Et===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(b,x){let G;return b?x===null||x===Pi||x===hr?G=i.DEPTH24_STENCIL8:x===On?G=i.DEPTH32F_STENCIL8:x===Wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===hr?G=i.DEPTH_COMPONENT24:x===On?G=i.DEPTH_COMPONENT32F:x===Wr&&(G=i.DEPTH_COMPONENT16),G}function T(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==rn&&b.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function N(b){const x=b.target;x.removeEventListener("dispose",N),R(x),x.isVideoTexture&&u.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),w(x)}function R(b){const x=n.get(b);if(x.__webglInit===void 0)return;const G=b.source,J=p.get(G);if(J){const et=J[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&I(b),Object.keys(J).length===0&&p.delete(G)}n.remove(b)}function I(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const G=b.source,J=p.get(G);delete J[x.__cacheKey],a.memory.textures--}function w(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let et=0;et<x.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[J][et]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=b.textures;for(let J=0,et=G.length;J<et;J++){const Z=n.get(G[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(b)}let v=0;function P(){v=0}function k(){const b=v;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),v+=1,b}function z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function W(b,x){const G=n.get(b);if(b.isVideoTexture&&_e(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,b,x);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function Y(b,x){const G=n.get(b);if(b.version>0&&G.__version!==b.version){ee(G,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function V(b,x){const G=n.get(b);if(b.version>0&&G.__version!==b.version){ee(G,b,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function j(b,x){const G=n.get(b);if(b.version>0&&G.__version!==b.version){X(G,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const H={[mo]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ut={[rn]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},pt={[vf]:i.NEVER,[wf]:i.ALWAYS,[xf]:i.LESS,[zu]:i.LEQUAL,[Mf]:i.EQUAL,[Ef]:i.GEQUAL,[yf]:i.GREATER,[Sf]:i.NOTEQUAL};function Mt(b,x){if(x.type===On&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===Aa||x.magFilter===us||x.magFilter===wi||x.minFilter===hn||x.minFilter===Aa||x.minFilter===us||x.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,H[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,H[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,H[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==us&&x.minFilter!==wi||x.type===On&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(b,x){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",N));const J=x.source;let et=p.get(J);et===void 0&&(et={},p.set(J,et));const Z=z(x);if(Z!==b.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Z].usedTimes++;const Et=et[b.__cacheKey];Et!==void 0&&(et[b.__cacheKey].usedTimes--,Et.usedTimes===0&&I(x)),b.__cacheKey=Z,b.__webglTexture=et[Z].texture}return G}function ee(b,x,G){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const et=Vt(b,x),Z=x.source;e.bindTexture(J,b.__webglTexture,i.TEXTURE0+G);const Et=n.get(Z);if(Z.version!==Et.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const ct=Jt.getPrimaries(Jt.workingColorSpace),ft=x.colorSpace===Jn?null:Jt.getPrimaries(x.colorSpace),Nt=x.colorSpace===Jn||ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let it=M(x.image,!1,r.maxTextureSize);it=Pt(x,it);const ht=s.convert(x.format,x.colorSpace),Wt=s.convert(x.type);let Ct=E(x.internalFormat,ht,Wt,x.colorSpace,x.isVideoTexture);Mt(J,x);let mt;const Lt=x.mipmaps,zt=x.isVideoTexture!==!0,ue=Et.__version===void 0||et===!0,D=Z.dataReady,rt=T(x,it);if(x.isDepthTexture)Ct=S(x.format===dr,x.type),ue&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,ht,Wt,null));else if(x.isDataTexture)if(Lt.length>0){zt&&ue&&e.texStorage2D(i.TEXTURE_2D,rt,Ct,Lt[0].width,Lt[0].height);for(let q=0,$=Lt.length;q<$;q++)mt=Lt[q],zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,Wt,mt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,mt.width,mt.height,0,ht,Wt,mt.data);x.generateMipmaps=!1}else zt?(ue&&e.texStorage2D(i.TEXTURE_2D,rt,Ct,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ht,Wt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,ht,Wt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Ct,Lt[0].width,Lt[0].height,it.depth);for(let q=0,$=Lt.length;q<$;q++)if(mt=Lt[q],x.format!==fn)if(ht!==null)if(zt){if(D)if(x.layerUpdates.size>0){const at=Kl(mt.width,mt.height,x.format,x.type);for(const bt of x.layerUpdates){const Xt=mt.data.subarray(bt*at/mt.data.BYTES_PER_ELEMENT,(bt+1)*at/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,bt,mt.width,mt.height,1,ht,Xt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,ht,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ct,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,ht,Wt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ct,mt.width,mt.height,it.depth,0,ht,Wt,mt.data)}else{zt&&ue&&e.texStorage2D(i.TEXTURE_2D,rt,Ct,Lt[0].width,Lt[0].height);for(let q=0,$=Lt.length;q<$;q++)mt=Lt[q],x.format!==fn?ht!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt.width,mt.height,ht,Wt,mt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,mt.width,mt.height,0,ht,Wt,mt.data)}else if(x.isDataArrayTexture)if(zt){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Ct,it.width,it.height,it.depth),D)if(x.layerUpdates.size>0){const q=Kl(it.width,it.height,x.format,x.type);for(const $ of x.layerUpdates){const at=it.data.subarray($*q/it.data.BYTES_PER_ELEMENT,($+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,ht,Wt,at)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,Wt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,ht,Wt,it.data);else if(x.isData3DTexture)zt?(ue&&e.texStorage3D(i.TEXTURE_3D,rt,Ct,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,Wt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,ht,Wt,it.data);else if(x.isFramebufferTexture){if(ue)if(zt)e.texStorage2D(i.TEXTURE_2D,rt,Ct,it.width,it.height);else{let q=it.width,$=it.height;for(let at=0;at<rt;at++)e.texImage2D(i.TEXTURE_2D,at,Ct,q,$,0,ht,Wt,null),q>>=1,$>>=1}}else if(Lt.length>0){if(zt&&ue){const q=Ut(Lt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Ct,q.width,q.height)}for(let q=0,$=Lt.length;q<$;q++)mt=Lt[q],zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ht,Wt,mt):e.texImage2D(i.TEXTURE_2D,q,Ct,ht,Wt,mt);x.generateMipmaps=!1}else if(zt){if(ue){const q=Ut(it);e.texStorage2D(i.TEXTURE_2D,rt,Ct,q.width,q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Wt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ht,Wt,it);m(x)&&d(J),Et.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function X(b,x,G){if(x.image.length!==6)return;const J=Vt(b,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const Z=n.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const Et=Jt.getPrimaries(Jt.workingColorSpace),ct=x.colorSpace===Jn?null:Jt.getPrimaries(x.colorSpace),ft=x.colorSpace===Jn||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Nt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let $=0;$<6;$++)!Nt&&!it?ht[$]=M(x.image[$],!0,r.maxCubemapSize):ht[$]=it?x.image[$].image:x.image[$],ht[$]=Pt(x,ht[$]);const Wt=ht[0],Ct=s.convert(x.format,x.colorSpace),mt=s.convert(x.type),Lt=E(x.internalFormat,Ct,mt,x.colorSpace),zt=x.isVideoTexture!==!0,ue=Z.__version===void 0||J===!0,D=et.dataReady;let rt=T(x,Wt);Mt(i.TEXTURE_CUBE_MAP,x);let q;if(Nt){zt&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Lt,Wt.width,Wt.height);for(let $=0;$<6;$++){q=ht[$].mipmaps;for(let at=0;at<q.length;at++){const bt=q[at];x.format!==fn?Ct!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at,Lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at,0,0,bt.width,bt.height,Ct,mt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at,Lt,bt.width,bt.height,0,Ct,mt,bt.data)}}}else{if(q=x.mipmaps,zt&&ue){q.length>0&&rt++;const $=Ut(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Lt,$.width,$.height)}for(let $=0;$<6;$++)if(it){zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ht[$].width,ht[$].height,Ct,mt,ht[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Lt,ht[$].width,ht[$].height,0,Ct,mt,ht[$].data);for(let at=0;at<q.length;at++){const Xt=q[at].image[$].image;zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at+1,0,0,Xt.width,Xt.height,Ct,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at+1,Lt,Xt.width,Xt.height,0,Ct,mt,Xt.data)}}else{zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct,mt,ht[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Lt,Ct,mt,ht[$]);for(let at=0;at<q.length;at++){const bt=q[at];zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at+1,0,0,Ct,mt,bt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,at+1,Lt,Ct,mt,bt.image[$])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Z.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function nt(b,x,G,J,et,Z){const Et=s.convert(G.format,G.colorSpace),ct=s.convert(G.type),ft=E(G.internalFormat,Et,ct,G.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>Z),ht=Math.max(1,x.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,ft,it,ht,x.depth,0,Et,ct,null):e.texImage2D(et,Z,ft,it,ht,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,n.get(G).__webglTexture,0,ne(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,n.get(G).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(b,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const J=x.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=S(x.stencilBuffer,et),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ne(x);St(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Z,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,b)}else{const J=x.textures;for(let et=0;et<J.length;et++){const Z=J[et],Et=s.convert(Z.format,Z.colorSpace),ct=s.convert(Z.type),ft=E(Z.internalFormat,Et,ct,Z.colorSpace),Nt=ne(x);G&&St(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,ft,x.width,x.height):St(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,ft,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ft,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,et=ne(x);if(x.depthTexture.format===sr)St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===dr)St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const x=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");dt(x.__webglFramebuffer,b)}else if(G){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=i.createRenderbuffer(),gt(x.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),gt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,x,G){const J=n.get(b);x!==void 0&&nt(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Dt(b)}function Ht(b){const x=b.texture,G=n.get(b),J=n.get(x);b.addEventListener("dispose",A);const et=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let ft=0;ft<x.mipmaps.length;ft++)G.__webglFramebuffer[ct][ft]=i.createFramebuffer()}else G.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)G.__webglFramebuffer[ct]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,ft=et.length;ct<ft;ct++){const Nt=n.get(et[ct]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&St(b)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const ft=et[ct];G.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);const Nt=s.convert(ft.format,ft.colorSpace),it=s.convert(ft.type),ht=E(ft.internalFormat,Nt,it,ft.colorSpace,b.isXRRenderTarget===!0),Wt=ne(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ht,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(G.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)nt(G.__webglFramebuffer[ct][ft],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else nt(G.__webglFramebuffer[ct],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,ft=et.length;ct<ft;ct++){const Nt=et[ct],it=n.get(Nt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Mt(i.TEXTURE_2D,Nt),nt(G.__webglFramebuffer,b,Nt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Nt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),Mt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)nt(G.__webglFramebuffer[ft],b,x,i.COLOR_ATTACHMENT0,ct,ft);else nt(G.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&d(ct),e.unbindTexture()}b.depthBuffer&&Dt(b)}function he(b){const x=b.textures;for(let G=0,J=x.length;G<J;G++){const et=x[G];if(m(et)){const Z=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(et).__webglTexture;e.bindTexture(Z,Et),d(Z),e.unbindTexture()}}}const C=[],ge=[];function te(b){if(b.samples>0){if(St(b)===!1){const x=b.textures,G=b.width,J=b.height;let et=i.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(b),ct=x.length>1;if(ct)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Nt=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,et,i.NEAREST),c===!0&&(C.length=0,ge.length=0,C.push(i.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(C.push(Z),ge.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ft]);const Nt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ne(b){return Math.min(r.maxSamples,b.samples)}function St(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function Pt(b,x){const G=b.colorSpace,J=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==si&&G!==Jn&&(Jt.getTransfer(G)===ae?(J!==fn||et!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Ut(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=St}function b_(i,t){function e(n,r=Jn){let s;const a=Jt.getTransfer(r);if(n===zn)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.BYTE;if(n===Pu)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Kr)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Du)return i.RGB;if(n===fn)return i.RGBA;if(n===Uu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Fu)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===Ou)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===zs||n===Gs||n===Hs||n===Vs)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===xo||n===Mo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===So||n===Eo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yo||n===So)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===To||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Bo||n===ko)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ws)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===zo||n===Go||n===Ho)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ws)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class A_ extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),d=this._getHandJoint(l,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new He,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends yr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,p=null,g=null,_=null;const M=new L_,m=e.getContextAttributes();let d=null,E=null;const S=[],T=[],N=new Bt;let A=null;const R=new Ke;R.layers.enable(1),R.viewport=new oe;const I=new Ke;I.layers.enable(2),I.viewport=new oe;const w=[R,I],v=new A_;v.layers.enable(1),v.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let nt=S[X];return nt===void 0&&(nt=new to,S[X]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(X){let nt=S[X];return nt===void 0&&(nt=new to,S[X]=nt),nt.getGripSpace()},this.getHand=function(X){let nt=S[X];return nt===void 0&&(nt=new to,S[X]=nt),nt.getHandSpace()};function z(X){const nt=T.indexOf(X.inputSource);if(nt===-1)return;const gt=S[nt];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<S.length;X++){const nt=T[X];nt!==null&&(T[X]=null,S[X].disconnect(nt))}P=null,k=null,M.reset(),t.setRenderTarget(d),g=null,p=null,f=null,r=null,E=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Li(g.framebufferWidth,g.framebufferHeight,{format:fn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,gt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?dr:sr,gt=m.stencil?hr:Pi);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(Dt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new Li(p.textureWidth,p.textureHeight,{format:fn,type:zn,depthTexture:new Ju(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(X){for(let nt=0;nt<X.removed.length;nt++){const gt=X.removed[nt],dt=T.indexOf(gt);dt>=0&&(T[dt]=null,S[dt].disconnect(gt))}for(let nt=0;nt<X.added.length;nt++){const gt=X.added[nt];let dt=T.indexOf(gt);if(dt===-1){for(let kt=0;kt<S.length;kt++)if(kt>=T.length){T.push(gt),dt=kt;break}else if(T[kt]===null){T[kt]=gt,dt=kt;break}if(dt===-1)break}const Dt=S[dt];Dt&&Dt.connect(gt)}}const V=new L,j=new L;function H(X,nt,gt){V.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const dt=V.distanceTo(j),Dt=nt.projectionMatrix.elements,kt=gt.projectionMatrix.elements,Ht=Dt[14]/(Dt[10]-1),he=Dt[14]/(Dt[10]+1),C=(Dt[9]+1)/Dt[5],ge=(Dt[9]-1)/Dt[5],te=(Dt[8]-1)/Dt[0],ne=(kt[8]+1)/kt[0],St=Ht*te,_e=Ht*ne,Pt=dt/(-te+ne),Ut=Pt*-te;nt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(Pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=Ht+Pt,x=he+Pt,G=St-Ut,J=_e+(dt-Ut),et=C*he/x*b,Z=ge*he/x*b;X.projectionMatrix.makePerspective(G,J,et,Z,b,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ut(X,nt){nt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(nt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;M.texture!==null&&(X.near=M.depthNear,X.far=M.depthFar),v.near=I.near=R.near=X.near,v.far=I.far=R.far=X.far,(P!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,k=v.far,R.near=P,R.far=k,I.near=P,I.far=k,R.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const nt=X.parent,gt=v.cameras;ut(v,nt);for(let dt=0;dt<gt.length;dt++)ut(gt[dt],nt);gt.length===2?H(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),pt(X,v,nt)};function pt(X,nt,gt){gt===null?X.matrix.copy(nt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(nt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(nt.projectionMatrix),X.projectionMatrixInverse.copy(nt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let Mt=null;function Vt(X,nt){if(u=nt.getViewerPose(l||a),_=nt,u!==null){const gt=u.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let dt=!1;gt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let kt=0;kt<gt.length;kt++){const Ht=gt[kt];let he=null;if(g!==null)he=g.getViewport(Ht);else{const ge=f.getViewSubImage(p,Ht);he=ge.viewport,kt===0&&(t.setRenderTargetTextures(E,ge.colorTexture,p.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(E))}let C=w[kt];C===void 0&&(C=new Ke,C.layers.enable(kt),C.viewport=new oe,w[kt]=C),C.matrix.fromArray(Ht.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ht.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(he.x,he.y,he.width,he.height),kt===0&&(v.matrix.copy(C.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(C)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const kt=f.getDepthInformation(gt[0]);kt&&kt.isValid&&kt.texture&&M.init(t,kt,r.renderState)}}for(let gt=0;gt<S.length;gt++){const dt=T[gt],Dt=S[gt];dt!==null&&Dt!==void 0&&Dt.update(dt,nt,l||a)}Mt&&Mt(X,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const ee=new ju;ee.setAnimationLoop(Vt),this.setAnimationLoop=function(X){Mt=X},this.dispose=function(){}}}const mi=new Tn,D_=new ce;function U_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Yu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,S,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),M(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,E,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),S=E.envMap,T=E.envMapRotation;S&&(m.envMap.value=S,mi.copy(T),mi.x*=-1,mi.y*=-1,mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(mi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const T=S.program;n.uniformBlockBinding(E,T)}function l(E,S){let T=r[E.id];T===void 0&&(_(E),T=u(E),r[E.id]=T,E.addEventListener("dispose",m));const N=S.program;n.updateUBOMapping(E,N);const A=t.render.frame;s[E.id]!==A&&(p(E),s[E.id]=A)}function u(E){const S=f();E.__bindingPointIndex=S;const T=i.createBuffer(),N=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const S=r[E.id],T=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=T.length;A<R;A++){const I=Array.isArray(T[A])?T[A]:[T[A]];for(let w=0,v=I.length;w<v;w++){const P=I[w];if(g(P,A,w,N)===!0){const k=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<z.length;Y++){const V=z[Y],j=M(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,S,T,N){const A=E.value,R=S+"_"+T;if(N[R]===void 0)return typeof A=="number"||typeof A=="boolean"?N[R]=A:N[R]=A.clone(),!0;{const I=N[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return N[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(E){const S=E.uniforms;let T=0;const N=16;for(let R=0,I=S.length;R<I;R++){const w=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,P=w.length;v<P;v++){const k=w[v],z=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=z.length;W<Y;W++){const V=z[W],j=M(V),H=T%N,ut=H%j.boundary,pt=H+ut;T+=ut,pt!==0&&N-pt<j.storage&&(T+=N-pt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=j.storage}}}const A=T%N;return A>0&&(T+=N-A),E.__size=T,E.__cache={},this}function M(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class F_{constructor(t={}){const{canvas:e=bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=ti,this.toneMappingExposure=1;const S=this;let T=!1,N=0,A=0,R=null,I=-1,w=null;const v=new oe,P=new oe;let k=null;const z=new Tt(0);let W=0,Y=e.width,V=e.height,j=1,H=null,ut=null;const pt=new oe(0,0,Y,V),Mt=new oe(0,0,Y,V);let Vt=!1;const ee=new xc;let X=!1,nt=!1;const gt=new ce,dt=new L,Dt=new oe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function he(){return R===null?j:1}let C=n;function ge(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",at,!1),C===null){const U="webgl2";if(C=ge(U,y),C===null)throw ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,ne,St,_e,Pt,Ut,b,x,G,J,et,Z,Et,ct,ft,Nt,it,ht,Wt,Ct,mt,Lt,zt,ue;function D(){te=new H0(C),te.init(),Lt=new b_(C,te),ne=new F0(C,te,t,Lt),St=new E_(C),_e=new X0(C),Pt=new l_,Ut=new T_(C,te,St,Pt,ne,Lt,_e),b=new B0(S),x=new G0(S),G=new Jf(C),zt=new U0(C,G),J=new V0(C,G,_e,zt),et=new Y0(C,J,G,_e),Wt=new q0(C,ne,Ut),Nt=new O0(Pt),Z=new c_(S,b,x,te,ne,zt,Nt),Et=new U_(S,Pt),ct=new h_,ft=new __(te),ht=new D0(S,b,x,St,et,p,c),it=new S_(S,et,ne),ue=new N_(C,_e,ne,St),Ct=new N0(C,te,_e),mt=new W0(C,te,_e),_e.programs=Z.programs,S.capabilities=ne,S.extensions=te,S.properties=Pt,S.renderLists=ct,S.shadowMap=it,S.state=St,S.info=_e}D();const rt=new I_(S,C);this.xr=rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(Y,V,!1))},this.getSize=function(y){return y.set(Y,V)},this.setSize=function(y,U,O=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,V=U,e.width=Math.floor(y*j),e.height=Math.floor(U*j),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*j,V*j).floor()},this.setDrawingBufferSize=function(y,U,O){Y=y,V=U,j=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(pt)},this.setViewport=function(y,U,O,B){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,U,O,B),St.viewport(v.copy(pt).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(Mt)},this.setScissor=function(y,U,O,B){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,U,O,B),St.scissor(P.copy(Mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(y){St.setScissorTest(Vt=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(y=!0,U=!0,O=!0){let B=0;if(y){let F=!1;if(R!==null){const st=R.texture.format;F=st===mc||st===pc||st===fc}if(F){const st=R.texture.type,lt=st===zn||st===Pi||st===Wr||st===hr||st===hc||st===dc,_t=ht.getClearColor(),vt=ht.getClearAlpha(),At=_t.r,Rt=_t.g,wt=_t.b;lt?(g[0]=At,g[1]=Rt,g[2]=wt,g[3]=vt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=At,_[1]=Rt,_[2]=wt,_[3]=vt,C.clearBufferiv(C.COLOR,0,_))}else B|=C.COLOR_BUFFER_BIT}U&&(B|=C.DEPTH_BUFFER_BIT),O&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ct.dispose(),ft.dispose(),Pt.dispose(),b.dispose(),x.dispose(),et.dispose(),zt.dispose(),ue.dispose(),Z.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Mn),rt.removeEventListener("sessionend",$c),li.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=_e.autoReset,U=it.enabled,O=it.autoUpdate,B=it.needsUpdate,F=it.type;D(),_e.autoReset=y,it.enabled=U,it.autoUpdate=O,it.needsUpdate=B,it.type=F}function at(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function bt(y){const U=y.target;U.removeEventListener("dispose",bt),Xt(U)}function Xt(y){ve(y),Pt.remove(y)}function ve(y){const U=Pt.get(y).programs;U!==void 0&&(U.forEach(function(O){Z.releaseProgram(O)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,B,F,st){U===null&&(U=kt);const lt=F.isMesh&&F.matrixWorld.determinant()<0,_t=Ad(y,U,O,B,F);St.setMaterial(B,lt);let vt=O.index,At=1;if(B.wireframe===!0){if(vt=J.getWireframeAttribute(O),vt===void 0)return;At=2}const Rt=O.drawRange,wt=O.attributes.position;let Kt=Rt.start*At,de=(Rt.start+Rt.count)*At;st!==null&&(Kt=Math.max(Kt,st.start*At),de=Math.min(de,(st.start+st.count)*At)),vt!==null?(Kt=Math.max(Kt,0),de=Math.min(de,vt.count)):wt!=null&&(Kt=Math.max(Kt,0),de=Math.min(de,wt.count));const fe=de-Kt;if(fe<0||fe===1/0)return;zt.setup(F,B,_t,O,vt);let Xe,jt=Ct;if(vt!==null&&(Xe=G.get(vt),jt=mt,jt.setIndex(Xe)),F.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*he()),jt.setMode(C.LINES)):jt.setMode(C.TRIANGLES);else if(F.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*he()),F.isLineSegments?jt.setMode(C.LINES):F.isLineLoop?jt.setMode(C.LINE_LOOP):jt.setMode(C.LINE_STRIP)}else F.isPoints?jt.setMode(C.POINTS):F.isSprite&&jt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const yt=F._multiDrawStarts,Pe=F._multiDrawCounts,Zt=F._multiDrawCount,an=vt?G.get(vt).bytesPerElement:1,Oi=Pt.get(B).currentProgram.getUniforms();for(let qe=0;qe<Zt;qe++)Oi.setValue(C,"_gl_DrawID",qe),jt.render(yt[qe]/an,Pe[qe])}else if(F.isInstancedMesh)jt.renderInstances(Kt,fe,F.count);else if(O.isInstancedBufferGeometry){const yt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Pe=Math.min(O.instanceCount,yt);jt.renderInstances(Kt,fe,Pe)}else jt.render(Kt,fe)};function Ce(y,U,O){y.transparent===!0&&y.side===Nn&&y.forceSinglePass===!1?(y.side=Ne,y.needsUpdate=!0,ls(y,U,O),y.side=ei,y.needsUpdate=!0,ls(y,U,O),y.side=Nn):ls(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),m=ft.get(O),m.init(U),E.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),y!==O&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const B=new Set;return y.traverse(function(F){const st=F.material;if(st)if(Array.isArray(st))for(let lt=0;lt<st.length;lt++){const _t=st[lt];Ce(_t,O,F),B.add(_t)}else Ce(st,O,F),B.add(st)}),E.pop(),m=null,B},this.compileAsync=function(y,U,O=null){const B=this.compile(y,U,O);return new Promise(F=>{function st(){if(B.forEach(function(lt){Pt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){F(y);return}setTimeout(st,10)}te.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let $t=null;function Rn(y){$t&&$t(y)}function Mn(){li.stop()}function $c(){li.start()}const li=new ju;li.setAnimationLoop(Rn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){$t=y,rt.setAnimationLoop(y),y===null?li.stop():li.start()},rt.addEventListener("sessionstart",Mn),rt.addEventListener("sessionend",$c),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,R),m=ft.get(y,E.length),m.init(U),E.push(m),gt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(gt),nt=this.localClippingEnabled,X=Nt.init(this.clippingPlanes,nt),M=ct.get(y,d.length),M.init(),d.push(M),rt.enabled===!0&&rt.isPresenting===!0){const st=S.xr.getDepthSensingMesh();st!==null&&Ea(st,U,-1/0,S.sortObjects)}Ea(y,U,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(H,ut),Ht=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ht&&ht.addToRenderList(M,y),this.info.render.frame++,X===!0&&Nt.beginShadows();const O=m.state.shadowsArray;it.render(O,y,U),X===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=M.opaque,F=M.transmissive;if(m.setupLights(),U.isArrayCamera){const st=U.cameras;if(F.length>0)for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];jc(B,F,y,vt)}Ht&&ht.render(y);for(let lt=0,_t=st.length;lt<_t;lt++){const vt=st[lt];Kc(M,y,vt,vt.viewport)}}else F.length>0&&jc(B,F,y,U),Ht&&ht.render(y),Kc(M,y,U);R!==null&&(Ut.updateMultisampleRenderTarget(R),Ut.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,U),zt.resetDefaultState(),I=-1,w=null,E.pop(),E.length>0?(m=E[E.length-1],X===!0&&Nt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function Ea(y,U,O,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){B&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const lt=et.update(y),_t=y.material;_t.visible&&M.push(y,lt,_t,O,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const lt=et.update(y),_t=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Dt.copy(lt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(_t)){const vt=lt.groups;for(let At=0,Rt=vt.length;At<Rt;At++){const wt=vt[At],Kt=_t[wt.materialIndex];Kt&&Kt.visible&&M.push(y,lt,Kt,O,Dt.z,wt)}}else _t.visible&&M.push(y,lt,_t,O,Dt.z,null)}}const st=y.children;for(let lt=0,_t=st.length;lt<_t;lt++)Ea(st[lt],U,O,B)}function Kc(y,U,O,B){const F=y.opaque,st=y.transmissive,lt=y.transparent;m.setupLightsView(O),X===!0&&Nt.setGlobalState(S.clippingPlanes,O),B&&St.viewport(v.copy(B)),F.length>0&&cs(F,U,O),st.length>0&&cs(st,U,O),lt.length>0&&cs(lt,U,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function jc(y,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Li(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Kr:zn,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const st=m.state.transmissionRenderTarget[B.id],lt=B.viewport||v;st.setSize(lt.z,lt.w);const _t=S.getRenderTarget();S.setRenderTarget(st),S.getClearColor(z),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Ht&&ht.render(O);const vt=S.toneMapping;S.toneMapping=ti;const At=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&Nt.setGlobalState(S.clippingPlanes,B),cs(y,O,B),Ut.updateMultisampleRenderTarget(st),Ut.updateRenderTargetMipmap(st),te.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let wt=0,Kt=U.length;wt<Kt;wt++){const de=U[wt],fe=de.object,Xe=de.geometry,jt=de.material,yt=de.group;if(jt.side===Nn&&fe.layers.test(B.layers)){const Pe=jt.side;jt.side=Ne,jt.needsUpdate=!0,Zc(fe,O,B,Xe,jt,yt),jt.side=Pe,jt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ut.updateMultisampleRenderTarget(st),Ut.updateRenderTargetMipmap(st))}S.setRenderTarget(_t),S.setClearColor(z,W),At!==void 0&&(B.viewport=At),S.toneMapping=vt}function cs(y,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,st=y.length;F<st;F++){const lt=y[F],_t=lt.object,vt=lt.geometry,At=B===null?lt.material:B,Rt=lt.group;_t.layers.test(O.layers)&&Zc(_t,U,O,vt,At,Rt)}}function Zc(y,U,O,B,F,st){y.onBeforeRender(S,U,O,B,F,st),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.transparent===!0&&F.side===Nn&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,S.renderBufferDirect(O,U,B,F,y,st),F.side=ei,F.needsUpdate=!0,S.renderBufferDirect(O,U,B,F,y,st),F.side=Nn):S.renderBufferDirect(O,U,B,F,y,st),y.onAfterRender(S,U,O,B,F,st)}function ls(y,U,O){U.isScene!==!0&&(U=kt);const B=Pt.get(y),F=m.state.lights,st=m.state.shadowsArray,lt=F.state.version,_t=Z.getParameters(y,F.state,st,U,O),vt=Z.getProgramCacheKey(_t);let At=B.programs;B.environment=y.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(y.isMeshStandardMaterial?x:b).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,At===void 0&&(y.addEventListener("dispose",bt),At=new Map,B.programs=At);let Rt=At.get(vt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===lt)return Qc(y,_t),Rt}else _t.uniforms=Z.getUniforms(y),y.onBeforeCompile(_t,S),Rt=Z.acquireProgram(_t,vt),At.set(vt,Rt),B.uniforms=_t.uniforms;const wt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=Nt.uniform),Qc(y,_t),B.needsLights=Cd(y),B.lightsStateVersion=lt,B.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function Jc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Xs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Qc(y,U){const O=Pt.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Ad(y,U,O,B,F){U.isScene!==!0&&(U=kt),Ut.resetTextureUnits();const st=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,_t=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:si,vt=(B.isMeshStandardMaterial?x:b).get(B.envMap||lt),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Rt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!O.morphAttributes.position,Kt=!!O.morphAttributes.normal,de=!!O.morphAttributes.color;let fe=ti;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=S.toneMapping);const Xe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,yt=Pt.get(B),Pe=m.state.lights;if(X===!0&&(nt===!0||y!==w)){const Qe=y===w&&B.id===I;Nt.setState(B,y,Qe)}let Zt=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pe.state.version||yt.outputColorSpace!==_t||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==vt||B.fog===!0&&yt.fog!==st||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Nt.numPlanes||yt.numIntersection!==Nt.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==Rt||yt.morphTargets!==wt||yt.morphNormals!==Kt||yt.morphColors!==de||yt.toneMapping!==fe||yt.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,yt.__version=B.version);let an=yt.currentProgram;Zt===!0&&(an=ls(B,U,F));let Oi=!1,qe=!1,wa=!1;const xe=an.getUniforms(),Hn=yt.uniforms;if(St.useProgram(an.program)&&(Oi=!0,qe=!0,wa=!0),B.id!==I&&(I=B.id,qe=!0),Oi||w!==y){xe.setValue(C,"projectionMatrix",y.projectionMatrix),xe.setValue(C,"viewMatrix",y.matrixWorldInverse);const Qe=xe.map.cameraPosition;Qe!==void 0&&Qe.setValue(C,dt.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xe.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),w!==y&&(w=y,qe=!0,wa=!0)}if(F.isSkinnedMesh){xe.setOptional(C,F,"bindMatrix"),xe.setOptional(C,F,"bindMatrixInverse");const Qe=F.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),xe.setValue(C,"boneTexture",Qe.boneTexture,Ut))}F.isBatchedMesh&&(xe.setOptional(C,F,"batchingTexture"),xe.setValue(C,"batchingTexture",F._matricesTexture,Ut),xe.setOptional(C,F,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",F._indirectTexture,Ut),xe.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",F._colorsTexture,Ut));const Ta=O.morphAttributes;if((Ta.position!==void 0||Ta.normal!==void 0||Ta.color!==void 0)&&Wt.update(F,O,an),(qe||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,xe.setValue(C,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hn.envMap.value=vt,Hn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Hn.envMapIntensity.value=U.environmentIntensity),qe&&(xe.setValue(C,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&Rd(Hn,wa),st&&B.fog===!0&&Et.refreshFogUniforms(Hn,st),Et.refreshMaterialUniforms(Hn,B,j,V,m.state.transmissionRenderTarget[y.id]),Xs.upload(C,Jc(yt),Hn,Ut)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xs.upload(C,Jc(yt),Hn,Ut),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xe.setValue(C,"center",F.center),xe.setValue(C,"modelViewMatrix",F.modelViewMatrix),xe.setValue(C,"normalMatrix",F.normalMatrix),xe.setValue(C,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Qe=B.uniformsGroups;for(let ba=0,Pd=Qe.length;ba<Pd;ba++){const tl=Qe[ba];ue.update(tl,an),ue.bind(tl,an)}}return an}function Rd(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Cd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,O){Pt.get(y.texture).__webglTexture=U,Pt.get(y.depthTexture).__webglTexture=O;const B=Pt.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const O=Pt.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,O=0){R=y,N=U,A=O;let B=!0,F=null,st=!1,lt=!1;if(y){const vt=Pt.get(y);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):vt.__webglFramebuffer===void 0?Ut.setupRenderTarget(y):vt.__hasExternalTextures&&Ut.rebindTextures(y,Pt.get(y.texture).__webglTexture,Pt.get(y.depthTexture).__webglTexture);const At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const Rt=Pt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?F=Rt[U][O]:F=Rt[U],st=!0):y.samples>0&&Ut.useMultisampledRTT(y)===!1?F=Pt.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?F=Rt[O]:F=Rt,v.copy(y.viewport),P.copy(y.scissor),k=y.scissorTest}else v.copy(pt).multiplyScalar(j).floor(),P.copy(Mt).multiplyScalar(j).floor(),k=Vt;if(St.bindFramebuffer(C.FRAMEBUFFER,F)&&B&&St.drawBuffers(y,F),St.viewport(v),St.scissor(P),St.setScissorTest(k),st){const vt=Pt.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,O)}else if(lt){const vt=Pt.get(y.texture),At=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,O||0,At)}I=-1},this.readRenderTargetPixels=function(y,U,O,B,F,st,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){St.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=y.texture,At=vt.format,Rt=vt.type;if(!ne.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&O>=0&&O<=y.height-F&&C.readPixels(U,O,B,F,Lt.convert(At),Lt.convert(Rt),st)}finally{const vt=R!==null?Pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,B,F,st,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Pt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(_t=_t[lt]),_t){St.bindFramebuffer(C.FRAMEBUFFER,_t);try{const vt=y.texture,At=vt.format,Rt=vt.type;if(!ne.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-B&&O>=0&&O<=y.height-F){const wt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,O,B,F,Lt.convert(At),Lt.convert(Rt),0),C.flush();const Kt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Af(C,Kt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st)}finally{C.deleteBuffer(wt),C.deleteSync(Kt)}return st}}finally{const vt=R!==null?Pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(y,U=null,O=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const B=Math.pow(2,-O),F=Math.floor(y.image.width*B),st=Math.floor(y.image.height*B),lt=U!==null?U.x:0,_t=U!==null?U.y:0;Ut.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,lt,_t,F,st),St.unbindTexture()},this.copyTextureToTexture=function(y,U,O=null,B=null,F=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let st,lt,_t,vt,At,Rt;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.min.x,vt=O.min.y):(st=y.image.width,lt=y.image.height,_t=0,vt=0),B!==null?(At=B.x,Rt=B.y):(At=0,Rt=0);const wt=Lt.convert(U.format),Kt=Lt.convert(U.type);Ut.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const de=C.getParameter(C.UNPACK_ROW_LENGTH),fe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xe=C.getParameter(C.UNPACK_SKIP_PIXELS),jt=C.getParameter(C.UNPACK_SKIP_ROWS),yt=C.getParameter(C.UNPACK_SKIP_IMAGES),Pe=y.isCompressedTexture?y.mipmaps[F]:y.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,At,Rt,st,lt,wt,Kt,Pe.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,At,Rt,Pe.width,Pe.height,wt,Pe.data):C.texSubImage2D(C.TEXTURE_2D,F,At,Rt,st,lt,wt,Kt,Pe),C.pixelStorei(C.UNPACK_ROW_LENGTH,de),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,yt),F===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(y,U,O=null,B=null,F=0){y.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0);let st,lt,_t,vt,At,Rt,wt,Kt,de;const fe=y.isCompressedTexture?y.mipmaps[F]:y.image;O!==null?(st=O.max.x-O.min.x,lt=O.max.y-O.min.y,_t=O.max.z-O.min.z,vt=O.min.x,At=O.min.y,Rt=O.min.z):(st=fe.width,lt=fe.height,_t=fe.depth,vt=0,At=0,Rt=0),B!==null?(wt=B.x,Kt=B.y,de=B.z):(wt=0,Kt=0,de=0);const Xe=Lt.convert(U.format),jt=Lt.convert(U.type);let yt;if(U.isData3DTexture)Ut.setTexture3D(U,0),yt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ut.setTexture2DArray(U,0),yt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Pe=C.getParameter(C.UNPACK_ROW_LENGTH),Zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),an=C.getParameter(C.UNPACK_SKIP_PIXELS),Oi=C.getParameter(C.UNPACK_SKIP_ROWS),qe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,fe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,fe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,At),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rt),y.isDataTexture||y.isData3DTexture?C.texSubImage3D(yt,F,wt,Kt,de,st,lt,_t,Xe,jt,fe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(yt,F,wt,Kt,de,st,lt,_t,Xe,fe.data):C.texSubImage3D(yt,F,wt,Kt,de,st,lt,_t,Xe,jt,fe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Pe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,an),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe),F===0&&U.generateMipmaps&&C.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(y){Pt.get(y).__webglFramebuffer===void 0&&Ut.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ut.setTextureCube(y,0):y.isData3DTexture?Ut.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ut.setTexture2DArray(y,0):Ut.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){N=0,A=0,R=null,St.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===gc?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===aa?"display-p3":"srgb"}}class yc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new yc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class O_ extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ih extends Sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new ce,Xo=new _c,Is=new oa,Ds=new L;class B_ extends Ae{constructor(t=new Ze,e=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,t.ray.intersectsSphere(Is)===!1)return;jl.copy(r).invert(),Xo.copy(t.ray).applyMatrix4(jl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let _=p,M=g;_<M;_++){const m=l.getX(_);Ds.fromBufferAttribute(f,m),Zl(Ds,m,c,r,t,e,this)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,M=g;_<M;_++)Ds.fromBufferAttribute(f,_),Zl(Ds,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zl(i,t,e,n,r,s,a){const o=Xo.distanceSqToPoint(i);if(o<e){const c=new L;Xo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ye extends Ze{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],p=[],g=[];let _=0;const M=[],m=n/2;let d=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(p,3)),this.setAttribute("uv",new Se(g,2));function E(){const T=new L,N=new L;let A=0;const R=(e-t)/n;for(let I=0;I<=s;I++){const w=[],v=I/s,P=v*(e-t)+t;for(let k=0;k<=r;k++){const z=k/r,W=z*c+o,Y=Math.sin(W),V=Math.cos(W);N.x=P*Y,N.y=-v*n+m,N.z=P*V,f.push(N.x,N.y,N.z),T.set(Y,R,V).normalize(),p.push(T.x,T.y,T.z),g.push(z,1-v),w.push(_++)}M.push(w)}for(let I=0;I<r;I++)for(let w=0;w<s;w++){const v=M[w][I],P=M[w+1][I],k=M[w+1][I+1],z=M[w][I+1];u.push(v,P,z),u.push(P,k,z),A+=6}l.addGroup(d,A,0),d+=A}function S(T){const N=_,A=new Bt,R=new L;let I=0;const w=T===!0?t:e,v=T===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*v,0),p.push(0,v,0),g.push(.5,.5),_++;const P=_;for(let k=0;k<=r;k++){const W=k/r*c+o,Y=Math.cos(W),V=Math.sin(W);R.x=w*V,R.y=m*v,R.z=w*Y,f.push(R.x,R.y,R.z),p.push(0,v,0),A.x=Y*.5+.5,A.y=V*.5*v+.5,g.push(A.x,A.y),_++}for(let k=0;k<r;k++){const z=N+k,W=P+k;T===!0?u.push(W,W+1,z):u.push(W+1,W,z),I+=3}l.addGroup(d,I,T===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ve extends ye{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ve(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends Ze{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new L,T=new L,N=new L;for(let A=0;A<e.length;A+=3)g(e[A+0],S),g(e[A+1],T),g(e[A+2],N),c(S,T,N,E)}function c(E,S,T,N){const A=N+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const w=E.clone().lerp(T,I/A),v=S.clone().lerp(T,I/A),P=A-I;for(let k=0;k<=P;k++)k===0&&I===A?R[I][k]=w:R[I][k]=w.clone().lerp(v,k/P)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const v=Math.floor(w/2);w%2===0?(p(R[I][v+1]),p(R[I+1][v]),p(R[I][v])):(p(R[I][v+1]),p(R[I+1][v+1]),p(R[I+1][v]))}}function l(E){const S=new L;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(E),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function u(){const E=new L;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const T=m(E)/2/Math.PI+.5,N=d(E)/Math.PI+.5;a.push(T,1-N)}_(),f()}function f(){for(let E=0;E<a.length;E+=6){const S=a[E+0],T=a[E+2],N=a[E+4],A=Math.max(S,T,N),R=Math.min(S,T,N);A>.9&&R<.1&&(S<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),N<.2&&(a[E+4]+=1))}}function p(E){s.push(E.x,E.y,E.z)}function g(E,S){const T=E*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const E=new L,S=new L,T=new L,N=new L,A=new Bt,R=new Bt,I=new Bt;for(let w=0,v=0;w<s.length;w+=9,v+=6){E.set(s[w+0],s[w+1],s[w+2]),S.set(s[w+3],s[w+4],s[w+5]),T.set(s[w+6],s[w+7],s[w+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),N.copy(E).add(S).add(T).divideScalar(3);const P=m(N);M(A,v+0,E,P),M(R,v+2,S,P),M(I,v+4,T,P)}}function M(E,S,T,N){N<0&&E.x===1&&(a[S]=E.x-1),T.x===0&&T.z===0&&(a[S]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.vertices,t.indices,t.radius,t.details)}}class kn extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kn(t.radius,t.detail)}}class pr extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pr(t.radius,t.detail)}}class Sc extends ts{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}class xn extends Ze{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new L,p=new L,g=[],_=[],M=[],m=[];for(let d=0;d<=n;d++){const E=[],S=d/n;let T=0;d===0&&a===0?T=.5/e:d===n&&c===Math.PI&&(T=-.5/e);for(let N=0;N<=e;N++){const A=N/e;f.x=-t*Math.cos(r+A*s)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(r+A*s)*Math.sin(a+S*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),m.push(A+T,1-S),E.push(l++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const S=u[d][E+1],T=u[d][E],N=u[d+1][E],A=u[d+1][E+1];(d!==0||a>0)&&g.push(S,T,A),(d!==n-1||c<Math.PI)&&g.push(T,N,A)}this.setIndex(g),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends Ze{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new L,f=new L,p=new L;for(let g=0;g<=n;g++)for(let _=0;_<=r;_++){const M=_/r*s,m=g/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=r;_++){const M=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,d=(r+1)*(g-1)+_,E=(r+1)*g+_;a.push(M,m,E),a.push(m,d,E)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ec extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class k_ extends Ec{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const eo=new ce,Jl=new L,Ql=new L;class rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tu=new ce,Dr=new L,no=new L;class z_ extends rh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),no.copy(n.position),no.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(no),n.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}}class es extends Ec{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new z_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class G_ extends rh{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends Ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class V_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eu(){return(typeof performance>"u"?Date:performance).now()}const nu=new ce;class sh{constructor(t,e,n=0,r=1/0){this.ray=new _c(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(t,e=!0,n=[]){return qo(t,this,n,e),n.sort(iu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)qo(t[r],this,n,e);return n.sort(iu),n}}function iu(i,t){return i.distance-t.distance}function qo(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)qo(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const Ur=new L;function en(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Ur.copy(t),Ur[n]=0,Ur.normalize();const l=.5*a/(a+o),u=1-Ur.angleTo(i)/c;return Math.sign(Ur[e])===1?u*l:o/(a+o)+l+l*(1-u)}class Ti extends ie{constructor(t=1,e=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new L,M=.5/r;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*M,c.y-=Math.sign(c.y)*M,c.z-=Math.sign(c.z)*M,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*s,u[m+1]=l.y*Math.sign(o.y)+c.y*s,u[m+2]=l.z*Math.sign(o.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),p[d+0]=en(_,c,"z","y",s,n),p[d+1]=1-en(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[d+0]=1-en(_,c,"z","y",s,n),p[d+1]=1-en(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[d+0]=1-en(_,c,"x","z",s,t),p[d+1]=en(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),p[d+0]=1-en(_,c,"x","z",s,t),p[d+1]=1-en(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),p[d+0]=1-en(_,c,"x","y",s,t),p[d+1]=1-en(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[d+0]=en(_,c,"x","y",s,t),p[d+1]=1-en(_,c,"y","x",s,e);break}}}const ah=document.getElementById("game"),W_=document.getElementById("nightText"),X_=document.getElementById("phaseIcon"),q_=document.getElementById("healthText"),io=document.getElementById("healthFill"),Kn=document.getElementById("statusText"),mr=document.getElementById("joystickZone");document.getElementById("joystickBase");const Xr=document.getElementById("joystickKnob"),qr=document.getElementById("lookZone"),oh=document.getElementById("attackBtn"),ro=document.getElementById("attackLabel"),Yr=document.getElementById("jumpBtn"),Yo=document.getElementById("interactBtn"),Y_=document.getElementById("interactLabel"),$_=document.getElementById("dropBtn"),K_=document.getElementById("woodText"),j_=document.getElementById("saplingText"),Z_=document.getElementById("berryText"),J_=document.getElementById("ironText"),Q_=document.getElementById("fuelText"),so=document.getElementById("fuelFill"),tv=document.getElementById("hungerText"),ru=document.getElementById("hungerFill"),wc=document.getElementById("fireWarning"),ua=document.getElementById("deathBanner"),gr=document.getElementById("toast"),Tc=document.getElementById("darkness"),Fn=document.getElementById("startOverlay"),ev=document.getElementById("startBtn"),ch=document.getElementById("axeSlot"),Vr=document.getElementById("backpackSlot"),lh=document.getElementById("pickaxeSlot"),uh=document.getElementById("ironAxeSlot"),hh=document.getElementById("ironSwordSlot"),nv=document.getElementById("backpackBadge"),iv=document.getElementById("inventoryPanel"),ao=document.getElementById("inventoryList"),rv=document.getElementById("inventoryCapacity"),sv=document.getElementById("closeInventoryBtn"),av=document.getElementById("unequipBtn"),dh=document.getElementById("upgradePanel"),$o=document.getElementById("upgradeGrid"),ov=document.getElementById("closeUpgradeBtn"),jn=document.getElementById("machineStatus"),cv=document.getElementById("machineFuelText"),lv=document.getElementById("machineFuelFill"),uv=document.getElementById("machineFeedBtn"),su=document.getElementById("machineJob"),hv=document.getElementById("machineJobName"),dv=document.getElementById("machineJobTime"),au=document.getElementById("machineJobFill"),qs=document.getElementById("audioToggle"),fh=document.getElementById("settingsBtn"),fv=document.getElementById("settingsPanel"),pv=document.getElementById("closeSettingsBtn"),ou=document.getElementById("volumeSlider"),mv=document.getElementById("volumeValue"),wr=new F_({canvas:ah,antialias:!0,alpha:!1,powerPreference:"high-performance"});wr.setPixelRatio(Math.min(window.devicePixelRatio,1.5));wr.setSize(window.innerWidth,window.innerHeight);wr.shadowMap.enabled=!0;wr.shadowMap.type=bu;const Fe=new O_;Fe.background=new Tt(133647);Fe.fog=new yc(465186,.045);const un=new Ke(67,window.innerWidth/window.innerHeight,.1,200);un.rotation.order="YXZ";const gv=new V_,Re=new Yt;Fe.add(Re);const be=new L(3.4,0,-1),cu=2,bc=[],na=3;function le(i,t){const e=Math.hypot(i,t),n=Math.min(Math.max((e-8)/10,0),1),r=Math.min(Math.max((62-e)/8,0),1);return(Math.sin(i*.11+.7)*Math.cos(t*.1-.35)*.55+Math.sin((i+t)*.055-.6)*.35)*n*r}const ha=new Qr(130,130,56,56);ha.rotateX(-Math.PI/2);const Us=ha.attributes.position;for(let i=0;i<Us.count;i+=1)Us.setY(i,le(Us.getX(i),Us.getZ(i)));ha.computeVertexNormals();const ph=new Q(ha,new It({color:1058079,roughness:1,metalness:0}));ph.receiveShadow=!0;Re.add(ph);const qt=new Yt;Re.add(qt);const da=new Q(new ye(1.1,1.5,.45,8),new It({color:3548702,roughness:.9}));da.position.y=.2;da.castShadow=!0;da.receiveShadow=!0;qt.add(da);const bi=new Q(new xn(.22,10,10),new It({color:16747050,emissive:16739096,emissiveIntensity:1.8,roughness:.55,metalness:.1}));bi.position.y=.55;bi.castShadow=!1;qt.add(bi);const _r=new es(16748092,2.2,15,2.1);_r.position.set(0,1.3,0);qt.add(_r);const vr=new es(16765597,.85,20,2);vr.position.set(0,1.2,0);Fe.add(vr);const Ko=new k_(9815807,988441,.9);Fe.add(Ko);const gn=new H_(12244991,.9);gn.position.set(-8,12,6);gn.castShadow=!0;gn.shadow.mapSize.width=1024;gn.shadow.mapSize.height=1024;gn.shadow.camera.left=-35;gn.shadow.camera.right=35;gn.shadow.camera.top=35;gn.shadow.camera.bottom=-35;Fe.add(gn);const We=[],_v=new It({color:3876643,roughness:1}),vv=new It({color:1714719,roughness:1});function mh(i,t,e=1){const n=new Yt,r=new Q(new ye(.18*e,.28*e,1.7*e,6),_v);r.position.y=.85*e,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const s=new Q(new Ve(.8*e,2.2*e,6),vv);return s.position.y=2.4*e,s.castShadow=!0,s.receiveShadow=!0,n.add(s),n.position.set(i,le(i,t),t),n.userData.scale=e,n.userData.cameraMeshes=[r,s],n.userData.trunk=r,n.userData.foliage=s,Re.add(n),We.push(n),n}for(let i=0;i<90;i+=1){const t=Math.random()*Math.PI*2,e=12+Math.random()*42,n=Math.cos(t)*e,r=Math.sin(t)*e;Math.abs(n)<6&&Math.abs(r)<6||mh(n,r,.8+Math.random()*1.2)}const gh=new Set([...We].sort((i,t)=>Math.hypot(i.position.x,i.position.z)-Math.hypot(t.position.x,t.position.z)).slice(0,8));for(let i=0;i<We.length;i+=4)gh.add(We[i]);for(const i of gh){const t=i.userData;t.choppable=!0,t.baseChoppable=!0,t.hits=na,t.hitsMax=na,t.shake=0,t.highlight=0,t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}const xv=new It({color:7029796,roughness:.9}),lu=new It({color:3111493,roughness:.92});function _h(i=1){const t=new Yt,e=new Q(new ye(.035,.055,.5,5),xv);e.position.y=.25,e.castShadow=!0,t.add(e);const n=new Q(new Ve(.28,.55,6),lu);n.position.y=.55,n.castShadow=!0,t.add(n);const r=new Q(new Ve(.19,.42,6),lu);return r.position.y=.84,r.castShadow=!0,t.add(r),t.scale.setScalar(i),t}for(let i=0;i<120;i+=1){const t=new Q(new ie(.12,.16,.12),new It({color:1521191,roughness:1})),e=(Math.random()-.5)*90,n=(Math.random()-.5)*90;t.position.set(e,le(e,n)+.08,n),t.castShadow=!0,t.receiveShadow=!0,Re.add(t)}const tt=new Yt;Fe.add(tt);const _n=new Yt;_n.position.y=.01;tt.add(_n);const ns=new It({color:16766527,emissive:3877120,emissiveIntensity:.38,roughness:.38,metalness:.03}),Mv=new It({color:3108818,roughness:.4,metalness:.03}),vh=new It({color:3709259,roughness:.42,metalness:.03}),Ac=new It({color:1185048,roughness:.5,metalness:0});function ai(i,t,e,n,r=.035){const s=new Q(new Ti(i,t,e,2,r),n);return s.castShadow=!0,s.receiveShadow=!0,s}const xh=ai(.84,.86,.44,Mv,.045);xh.position.y=1.27;_n.add(xh);const Tr=new Yt;Tr.position.y=2;_n.add(Tr);const yv=ai(.6,.6,.6,ns,.055);Tr.add(yv);const Mh=new Ti(.075,.105,.025,1,.01),yh=new Q(Mh,Ac);yh.position.set(-.135,.085,.301);Tr.add(yh);const Sh=new Q(Mh,Ac);Sh.position.set(.135,.085,.301);Tr.add(Sh);const Rc=new Q(new la(.115,.021,4,14,Math.PI),Ac);Rc.rotation.z=Math.PI;Rc.position.set(0,-.075,.303);Tr.add(Rc);const wn=new Yt;wn.position.set(-.54,1.64,0);_n.add(wn);const Eh=ai(.22,.78,.3,ns,.06);Eh.position.y=-.39;wn.add(Eh);const wh=ai(.2,.16,.26,ns,.05);wh.position.set(0,-.8,.01);wn.add(wh);const ze=new Yt;ze.position.set(.54,1.64,0);_n.add(ze);const Th=ai(.22,.78,.3,ns,.06);Th.position.y=-.39;ze.add(Th);const bh=ai(.2,.16,.26,ns,.05);bh.position.set(0,-.8,.01);ze.add(bh);const Ii=new Yt;Ii.position.set(-.2,.84,0);_n.add(Ii);const Ah=ai(.3,.82,.36,vh,.045);Ah.position.y=-.41;Ii.add(Ah);const Di=new Yt;Di.position.set(.2,.84,0);_n.add(Di);const Rh=ai(.3,.82,.36,vh,.045);Rh.position.y=-.41;Di.add(Rh);const fa=new Q(new xn(.15,8,8),new It({color:16762478,emissive:16747046,emissiveIntensity:2.1,roughness:.4}));fa.position.set(.02,-.68,.2);fa.castShadow=!0;ze.add(fa);const Je=new Yt;Je.position.set(.12,-.62,.1);Je.rotation.set(.12,.08,-.42);ze.add(Je);const Cc=new Q(new ye(.038,.048,.95,6),new It({color:8079911,roughness:.82,metalness:.02}));Cc.position.y=.06;Cc.castShadow=!0;Je.add(Cc);const Pc=new Q(new ye(.052,.052,.22,6),new It({color:3875859,roughness:.95}));Pc.position.y=-.3;Pc.castShadow=!0;Je.add(Pc);const Lc=new Q(new ie(.34,.2,.1),new It({color:12175054,emissive:2371898,emissiveIntensity:.4,roughness:.3,metalness:.65}));Lc.position.set(.11,.42,0);Lc.castShadow=!0;Je.add(Lc);const Ic=new Q(new ie(.2,.3,.07),new It({color:15266293,emissive:3096393,emissiveIntensity:.45,roughness:.24,metalness:.55}));Ic.position.set(.27,.42,0);Ic.castShadow=!0;Je.add(Ic);Je.visible=!1;const jo=new It({color:11188417,emissive:1778988,emissiveIntensity:.36,roughness:.3,metalness:.68}),ia=new It({color:14477550,emissive:3490893,emissiveIntensity:.4,roughness:.24,metalness:.64}),Sv=new It({color:7422755,roughness:.84,metalness:.02}),Zo=new It({color:14725728,roughness:.42,metalness:.5});function Dc(i,t,e=.042){const n=new Q(new ye(e,e*1.2,t,6),Sv);n.position.y=t*.06,n.castShadow=!0,i.add(n);const r=new Q(new ye(e*1.28,e*1.28,.2,6),new It({color:3547154,roughness:.95}));r.position.y=-t*.37,r.castShadow=!0,i.add(r)}function Ch(){const i=new Yt;Dc(i,.92,.038);const t=new Q(new ie(.72,.13,.13),jo);t.position.set(.02,.42,0),t.castShadow=!0,i.add(t);const e=new Q(new Ve(.105,.31,4),ia);e.position.set(.42,.42,0),e.rotation.z=-Math.PI/2,e.castShadow=!0,i.add(e);const n=new Q(new Ve(.09,.23,4),jo);return n.position.set(-.35,.42,0),n.rotation.z=Math.PI/2,n.castShadow=!0,i.add(n),i}function Ph(){const i=new Yt;Dc(i,.96,.045);const t=new Q(new ie(.36,.22,.11),jo);t.position.set(.11,.42,0),t.castShadow=!0,i.add(t);const e=new Q(new ie(.22,.34,.075),ia);e.position.set(.29,.42,0),e.rotation.z=-.06,e.castShadow=!0,i.add(e);const n=new Q(new ye(.028,.028,.13,6),Zo);return n.rotation.x=Math.PI/2,n.position.set(.11,.42,.04),i.add(n),i}function Lh(){const i=new Yt;Dc(i,.55,.035);const t=new Q(new ie(.44,.08,.11),Zo);t.position.y=.18,t.castShadow=!0,i.add(t);const e=new Q(new ie(.14,.9,.055),ia);e.position.y=.68,e.castShadow=!0,i.add(e);const n=new Q(new Ve(.099,.24,4),ia);n.position.y=1.23,n.castShadow=!0,i.add(n);const r=new Q(new xn(.07,6,5),Zo);return r.position.y=-.12,i.add(r),i}const Uc=Ch(),Nc=Ph(),Fc=Lh();for(const[i,t,e]of[["pickaxe",Uc,.04],["ironAxe",Nc,.02],["ironSword",Fc,.08]])t.position.set(.12,-.62+e,.1),t.rotation.set(.12,.08,i==="ironSword"?-.1:-.38),t.visible=!1,t.userData.baseY=t.position.y,t.userData.tool=i,ze.add(t);const Ev=new It({color:8145450,roughness:.78,metalness:.02}),Ns=new It({color:5123096,roughness:.86}),wv=new It({color:14725728,roughness:.42,metalness:.5});function Tv(i=1){const t=new Yt,e=new Q(new Ti(.38,.44,.24,3,.055),Ev);e.castShadow=!0,e.receiveShadow=!0,t.add(e);const n=new Q(new Ti(.37,.2,.25,2,.04),Ns);n.position.set(0,.16,.004),n.rotation.x=-.06,n.castShadow=!0,t.add(n);const r=new Q(new Ti(.22,.13,.06,2,.025),Ns);r.position.set(0,-.1,.145),r.castShadow=!0,t.add(r);const s=new Q(new ie(.075,.06,.035),wv);s.position.set(0,.09,.135),t.add(s);for(const a of[-1,1]){const o=new Q(new ie(.055,.41,.035),Ns);o.position.set(a*.12,0,-.145),o.castShadow=!0,t.add(o);const c=new Q(new Ti(.055,.16,.15,2,.02),Ns);c.position.set(a*.215,-.08,0),t.add(c)}return t.scale.setScalar(i),t}const An=Tv(1);An.position.set(.09,-.96,.2);An.rotation.set(.08,Math.PI-.25,.05);An.visible=!1;ze.add(An);const bv=Je.position.y,Av=An.position.y;Je.userData.baseY=bv;Je.userData.tool="axe";An.userData.baseY=Av;An.userData.tool="backpack";const pa=new es(16760945,.8,14,2);pa.position.set(0,1.9,0);tt.add(pa);const sn=new Q(new la(1.05,.055,5,24),new vn({color:16769184,transparent:!0,opacity:.8}));sn.rotation.x=Math.PI/2;sn.position.set(0,.9,.85);sn.visible=!1;tt.add(sn);const je=new Q(new pr(.42,1),new vn({color:16765562,transparent:!0,opacity:0,blending:cr,depthWrite:!1,wireframe:!0}));je.visible=!1;Fe.add(je);tt.position.set(0,le(0,4),4);const Ih=[],Rv=new kn(.55,0),Cv=new It({color:4608078,roughness:.95,metalness:.02});for(let i=0;i<8;i+=1){const t=Math.random()*Math.PI*2,e=10+Math.random()*20,n=Math.cos(t)*e,r=Math.sin(t)*e;if(We.some(c=>Math.hypot(c.position.x-n,c.position.z-r)<1.6))continue;const s=.8+Math.random()*.55,a=le(n,r),o=new Q(Rv,Cv);o.position.set(n,a+.3025*s,r),o.scale.set(s,s*.55,s),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,o.receiveShadow=!0,Re.add(o),Ih.push({x:n,z:r,radius:.52*s,top:a+.605*s})}const or=[],Ge=[],me=[],ma=[],Dh=new ye(.15,.17,.72,7),Uh=new It({color:10117944,emissive:2823689,emissiveIntensity:.45,roughness:.85,metalness:.02}),Pv=new It({color:14170699,emissive:3998985,emissiveIntensity:.45,roughness:.62}),Lv=new It({color:4168275,roughness:.88}),Iv=new xn(.09,6,5),Dv=new It({color:2380346,roughness:.98}),Uv=new It({color:1588009,roughness:.98});function uu(i=1){const t=new Yt,e=[[0,.1,0],[.1,.04,.03],[-.09,.03,.05],[.02,.02,-.09]];for(const[r,s,a]of e){const o=new Q(Iv,Pv);o.position.set(r,s,a),o.castShadow=!0,t.add(o)}const n=new Q(new Ve(.1,.16,5),Lv);return n.position.set(.03,.2,-.02),n.rotation.z=.4,n.castShadow=!0,t.add(n),t.scale.setScalar(i),t}function Nv(i,t){const e=new Yt,n=new Q(new pr(.62,0),Dv);n.position.y=.34,n.scale.set(1.1,.7,1.05),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const r=new Q(new pr(.42,0),Uv);r.position.set(.26,.54,-.12),r.scale.set(1,.75,1),r.castShadow=!0,e.add(r),e.position.set(i,le(i,t),t),e.rotation.y=Math.random()*Math.PI*2,Re.add(e),ma.push({x:i,z:t,mesh:e})}for(let i=0;i<15;i+=1){let t=!1;for(let e=0;e<24&&!t;e+=1){const n=Math.random()*Math.PI*2,r=8.5+Math.random()*22,s=Math.cos(n)*r,a=Math.sin(n)*r;Math.hypot(s,a)<8||We.some(o=>Math.hypot(o.position.x-s,o.position.z-a)<2.1)||ma.some(o=>Math.hypot(o.x-s,o.z-a)<3.2)||(Nv(s,a),t=!0)}}const br=[],Jo=new It({color:5858667,roughness:.92,metalness:.08,flatShading:!0}),Nh=new It({color:7635336,roughness:.86,metalness:.12,flatShading:!0}),Fh=new It({color:12875831,emissive:7021576,emissiveIntensity:.65,roughness:.55,metalness:.32}),Oh=new Sc(.095,0);function Fv(i,t,e=1){const n=new Yt,r={group:n,x:i,z:t,scale:e,hits:cu,hitsMax:cu,broken:!1,regrow:0,shake:0,sway:Math.random()*Math.PI*2},s=new Q(new kn(.76,0),Jo);s.position.y=.5,s.scale.set(1.05,.82,.92),s.rotation.y=Math.random()*Math.PI,s.castShadow=!0,s.receiveShadow=!0,n.add(s);const a=new Q(new kn(.42,0),Nh);a.position.set(.48,.26,.2),a.scale.set(1,.75,.9),a.rotation.y=Math.random()*Math.PI,a.castShadow=!0,a.receiveShadow=!0,n.add(a);const o=new Q(new kn(.3,0),Jo);o.position.set(-.46,.2,-.26),o.rotation.y=Math.random()*Math.PI,o.castShadow=!0,n.add(o);const c=[[-.33,.53,.63,1.5,1.1,.62,.2,.25,.45],[.18,.62,.66,1.2,.9,.55,-.15,.4,-.35],[.63,.44,.25,.62,1.15,1.3,.3,-.2,.25],[-.12,.35,.69,1.35,.85,.55,.4,.1,.2],[.38,.5,-.62,1.2,1,.7,-.25,.3,-.3]];for(const[l,u,f,p,g,_,M,m,d]of c){const E=new Q(Oh,Fh);E.position.set(l,u,f),E.scale.set(p,g,_),E.rotation.set(M,m,d),E.castShadow=!0,n.add(E)}return n.position.set(i,le(i,t),t),n.rotation.y=Math.random()*Math.PI*2,n.scale.setScalar(e),n.traverse(l=>{l.userData.rockRef=r}),Re.add(n),br.push(r),bc.push({x:i,z:t,radius:.56*e,rock:r}),r}function Ov(i,t,e){return!(Math.hypot(i,t)<10.5||We.some(n=>Math.hypot(n.position.x-i,n.position.z-t)<1.9*e)||ma.some(n=>Math.hypot(n.x-i,n.z-t)<2*e)||br.some(n=>Math.hypot(n.x-i,n.z-t)<2.2*e))}const Bv=[[17,-8],[-19,12],[10,24],[-25,-16],[26,14],[-13,-24]];for(const[i,t]of Bv){let e=0;for(let n=0;n<18&&e<2;n+=1){const r=Math.random()*Math.PI*2,s=Math.random()*2.7,a=i+Math.cos(r)*s,o=t+Math.sin(r)*s,c=.88+Math.random()*.38;Ov(a,o,c)&&(Fv(a,o,c),e+=1)}}const pe=new Yt,Br={},Ys=[],Qo=[],Fs=new It({color:6714749,emissive:1515814,emissiveIntensity:.32,roughness:.46,metalness:.5}),Os=new It({color:4016721,emissive:1055262,emissiveIntensity:.3,roughness:.5,metalness:.48}),kv=new It({color:8606759,emissive:2363908,emissiveIntensity:.28,roughness:.84,metalness:.03}),zv=new It({color:6109210,emissive:1773060,emissiveIntensity:.25,roughness:.9}),Bh=new It({color:3350547,emissive:16742941,emissiveIntensity:.7,roughness:.4,metalness:.25});{const i=new Q(new Ti(1.5,1.4,1.14,2,.07),Fs);i.position.y=.85,i.castShadow=!0,i.receiveShadow=!0,pe.add(i);const t=new Q(new ie(1.72,.22,1.3),Os);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0,pe.add(t);const e=new Q(new ie(1.56,.1,1.2),Os);e.position.y=1.56,e.castShadow=!0,pe.add(e);const n=new Q(new ye(.64,.34,.68,4),kv);n.position.y=1.88,n.rotation.y=Math.PI/4,n.castShadow=!0,n.receiveShadow=!0,pe.add(n);const r=new Q(new ie(.98,.1,.98),zv);r.position.y=2.22,r.rotation.y=Math.PI/4,r.castShadow=!0,pe.add(r);const s=new Q(new ie(.66,.03,.66),new It({color:1182984,roughness:1}));s.position.y=2.27,s.rotation.y=Math.PI/4,pe.add(s);const a=new Q(new ye(.11,.15,.86,6),Os);a.position.set(.66,2.4,-.4),a.castShadow=!0,pe.add(a);const o=new Q(new ye(.18,.13,.12,6),Fs);o.position.set(.66,2.86,-.4),o.castShadow=!0,pe.add(o);const c=new Q(new ie(.72,.66,.08),Os);c.position.set(0,.9,.59),pe.add(c);const l=new Q(new ie(.58,.5,.045),Bh);l.position.set(0,.9,.64),pe.add(l);for(const f of[-1,1]){const p=new Q(new ye(.035,.035,.075,6),Fs);p.rotation.x=Math.PI/2,p.position.set(f*.28,1.18,.665),pe.add(p);const g=p.clone();g.position.y=.62,pe.add(g)}for(const[f,p]of[[0,-1],[1,1]]){const g=new Q(new ye(.22,.22,.08,8),Fs);g.rotation.z=Math.PI/2,g.position.set(p*.8,.72+f*.32,.12),g.castShadow=!0,pe.add(g),Qo.push(g)}const u=new es(16747310,.95,8.5,2);u.position.set(0,1.2,.95),pe.add(u);for(let f=0;f<6;f+=1){const p=new Q(new xn(.1+f*.012,5,4),new vn({color:12898251,transparent:!0,opacity:0,depthWrite:!1}));p.position.set(.66,2.98+f*.28,-.4),pe.add(p),Ys.push(p)}Br.body=i,Br.panel=l,Br.glow=u,Br.hopper=n}pe.position.set(be.x,le(be.x,be.z),be.z);pe.rotation.y=-1.28;pe.traverse(i=>{i.userData.machineRef=!0});Re.add(pe);bc.push({x:be.x,z:be.z,radius:.96,type:"machine"});const xt={fuel:0,working:null,progress:0,stalled:!1,statusTimer:0,gearAngle:0,clankTimer:0},$r=[],kh=new It({color:6714492,roughness:.42,metalness:.62}),tc=new It({color:10135985,roughness:.34,metalness:.7});function Gv(i){const t=[-1.2,.85,2.65,-2.5,.18,3.6,-.2,1.9],e=t[i%t.length],n=3.15,r=qt.position.x+Math.sin(e)*n,s=qt.position.z+Math.cos(e)*n,a=new Yt;for(let o=0;o<3;o+=1){const c=new Q(new ie(.52,1.02,.16),kh);c.position.set((o-1)*.54,.54,0),c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new Q(new ie(.48,.1,.19),tc);l.position.set((o-1)*.54,.88,0),l.castShadow=!0,a.add(l)}for(const o of[-1,1]){const c=new Q(new ie(.14,1.2,.24),tc);c.position.set(o*.88,.6,0),c.castShadow=!0,a.add(c)}a.position.set(r,le(r,s),s),a.rotation.y=e+Math.PI/2,Re.add(a),$r.push({group:a,x:r,z:s,rotation:a.rotation.y,width:1.95,depth:.3})}function Hv(){for(const i of $r)Re.remove(i.group);$r.length=0}function Vv(){for(const i of br)i.broken=!1,i.hits=i.hitsMax,i.regrow=0,i.shake=0,i.group.visible=!0,i.group.scale.setScalar(i.scale),i.group.rotation.z=0}const Wv=3.8,kr=2.5,Xv=.8,qv=25,zh=.36,Yv=1.15,$v=45,Oc=.34,Kv=6,jv=50,yi=180,Zv=120,er=yi+Zv,oo=16,Nr=14,Gh=30,ec=3.35,Jv=3,nc=20,Qv=.42,hu=18,Bc=.3,ic=2.7,tx=1.45,ex=100,du=25,nx=4,fu=28,ix=44,Ni={wood:"Wood log",sapling:"Sapling",berry:"Berry",iron:"Iron piece",pickaxe:"Pickaxe",ironAxe:"Iron Axe",ironSword:"Iron Sword",ironWall:"Iron Wall",biggerCampfire:"Bigger Campfire"},Hh={wood:qv,sapling:12,berry:5},Vh=new Set(["wood","sapling","berry"]),rx=["ironAxe","pickaxe","ironSword","ironWall","biggerCampfire"],xr={ironAxe:{name:"Iron Axe",cost:{wood:6,iron:3},time:10,desc:"Chops faster and hits harder."},pickaxe:{name:"Pickaxe",cost:{wood:4,iron:1},time:10,desc:"Mine iron rocks at the forest edge."},ironSword:{name:"Iron Sword",cost:{wood:5,iron:5},time:10,desc:"Strong melee blade for monsters."},ironWall:{name:"Iron Wall",cost:{wood:8,iron:6},time:10,desc:"Places a sturdy wall by the campfire."},biggerCampfire:{name:"Bigger Campfire",cost:{wood:10,iron:5},time:10,desc:"Wider light and scare radius."}},is={axe:{cooldown:.58,damage:1,treePower:1,rockPower:0,range:3.3,reach:2.5},pickaxe:{cooldown:.5,damage:1,treePower:0,rockPower:1,range:3,reach:2.5},ironAxe:{cooldown:.4,damage:2,treePower:2,rockPower:0,range:3.5,reach:2.8},ironSword:{cooldown:.42,damage:3,treePower:0,rockPower:0,range:3.6,reach:2.8}};let pu="INTERACT",Ai=0,rc="";function Wh(){return Math.hypot(tt.position.x-qt.position.x,tt.position.z-qt.position.z)}function sc(){return Math.hypot(tt.position.x-be.x,tt.position.z-be.z)}function gi(){return Kv+h.fireLevel*2.4}function sx(){return 7+h.fireLevel*1.5}function Xh(i){return i==="pickaxe"||i==="ironAxe"||i==="ironSword"||i==="ironWall"||i==="biggerCampfire"}function kc(i){return i==="axe"||i==="pickaxe"||i==="ironAxe"||i==="ironSword"}function qh(i){const t=is[i];return!!t&&t.treePower>0}function ga(i){const t=is[i];return!!t&&t.rockPower>0}function mu(){if(h.fireInReach=Wh()<=Wv,h.machineInReach=h.started&&sc()<=ic,h.targetTree=null,h.targetRock=null,!h.started||h.gameOver)return;let i=kr*kr;for(const e of We){if(!e.userData.choppable||e.userData.falling||!e.visible)continue;const n=tt.position.x-e.position.x,r=tt.position.z-e.position.z,s=n*n+r*r;s<i&&(i=s,h.targetTree=e)}let t=kr*kr;for(const e of br){if(e.broken)continue;const n=tt.position.x-e.x,r=tt.position.z-e.z,s=n*n+r*r;s<t&&(t=s,h.targetRock=e)}}function Yh(){if(!h.started||h.gameOver||h.falling||h.paused)return null;const i=ac(ec),t=ac(tx),e=h.fuel<99.5,n=me.some(s=>Vh.has(s.type)),r=s=>({type:"pickup",label:Xh(s.type)?"COLLECT":"PICK UP",item:s});return h.fireInReach&&n&&e&&!h.machineInReach?{type:"fireThrow",label:"THROW IN FIRE"}:t?r(t):h.machineInReach?{type:"machine",label:"USE MACHINE"}:i?r(i):me.some(s=>s.type==="sapling")?{type:"plant",label:"PLANT SAPLING"}:ga(h.equippedTool)&&h.targetRock?{type:"mine",label:"MINE IRON",rock:h.targetRock}:qh(h.equippedTool)&&h.targetTree?{type:"chop",label:"CHOP",tree:h.targetTree}:h.fireInReach&&px()>0?{type:e?"fireFeed":"fireFull",label:e?"FEED FIRE":"FIRE FULL"}:h.fireInReach&&n?{type:"fireFull",label:"FIRE FULL"}:null}function gu(){const i=Yh(),t=i?i.label:"INTERACT";if(t!==pu){pu=t,Y_.textContent=t;const e=!!i&&i.type!=="fireFull"&&i.type!=="machine",n=!!i&&i.type==="machine";Yo.classList.toggle("ready",e),Yo.classList.toggle("machine",n)}}function Gt(i){gr.textContent=i,gr.classList.add("visible"),Ai=1.5}function ax(i=1){const t=new Yt,e=new Q(new kn(.17,0),Nh);e.scale.set(1.15,.8,.9),e.castShadow=!0,t.add(e);const n=new Q(new kn(.11,0),Jo);n.position.set(.12,.02,.09),n.castShadow=!0,t.add(n);const r=new Q(Oh,Fh);return r.scale.set(1.35,.92,.55),r.position.set(-.035,.055,.12),r.rotation.set(.3,.25,.4),t.add(r),t.scale.setScalar(i),t}function ox(){const i=new Yt;for(let t=0;t<3;t+=1){const e=new Q(new ie(.34,.68,.09),kh);e.position.set((t-1)*.35,.35,0),e.castShadow=!0,i.add(e);const n=new Q(new ie(.32,.07,.11),tc);n.position.set((t-1)*.35,.58,0),i.add(n)}return i}function cx(){const i=new Yt;for(let e=0;e<4;e+=1){const n=new Q(Dh,Uh);n.scale.setScalar(.7),n.rotation.z=Math.PI/2,n.rotation.y=e/4*Math.PI,n.position.y=.1,n.castShadow=!0,i.add(n)}const t=new Q(new xn(.13,6,5),new vn({color:16751164}));return t.position.y=.22,i.add(t),i}function lx(i){let t;return i==="wood"?(t=new Q(Dh,Uh),t.rotation.set(0,Math.random()*Math.PI*2,Math.PI/2),t.castShadow=!0,t.receiveShadow=!0):i==="sapling"?(t=_h(.72),t.rotation.y=Math.random()*Math.PI*2):i==="berry"?(t=uu(1),t.rotation.y=Math.random()*Math.PI*2):i==="iron"?(t=ax(1.2),t.rotation.y=Math.random()*Math.PI*2):i==="pickaxe"?(t=Ch(),t.scale.setScalar(.78),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):i==="ironAxe"?(t=Ph(),t.scale.setScalar(.8),t.rotation.set(.08,Math.random()*Math.PI*2,-.06)):i==="ironSword"?(t=Lh(),t.scale.setScalar(.68),t.rotation.set(.05,Math.random()*Math.PI*2,.04)):i==="ironWall"?(t=ox(),t.rotation.y=Math.random()*Math.PI*2):i==="biggerCampfire"?(t=cx(),t.rotation.y=Math.random()*Math.PI*2):t=uu(1),t}function oi(i,t,e,n={}){const r=lx(i),s=le(t,e),o=i==="wood"?.17:i==="berry"?.14:i==="iron"?.13:i==="pickaxe"||i==="ironAxe"||i==="ironSword"?.5:.02,c=i==="sapling"?.72:1,l=n.startY??s+o+.45;r.position.set(t,l,e),Re.add(r);const u={type:i,mesh:r,x:t,z:e,groundY:s,restY:o,baseScale:c,velocityY:n.velocityY??(i==="wood"?2.2:2.6),landed:!1,pickupDelay:n.pickupDelay??.35,carried:!1,popping:0,popDuration:.24};if(r.traverse(f=>{f.userData.itemRef=u}),Ge.push(u),Ge.length>80)for(let f=0;f<Ge.length;f+=1){const p=Ge[f];if(!p.carried&&p.popping<=0){zc(p);break}}return u}function zc(i){const t=Ge.indexOf(i);t>=0&&Ge.splice(t,1);const e=me.indexOf(i);e>=0&&me.splice(e,1),Re.remove(i.mesh)}function Mr(i){if(!i||i.popping>0)return;const t=me.indexOf(i);t>=0&&me.splice(t,1),i.carried=!1,i.popping=i.popDuration}function ux(i,t=0){const e=tt.position.x-i.position.x,n=tt.position.z-i.position.z,s=Math.atan2(e,n)+(t-1)*.62+(Math.random()-.5)*.32,a=i.userData.scale*.35+.7+Math.random()*.45;oi("wood",i.position.x+Math.sin(s)*a,i.position.z+Math.cos(s)*a,{startY:i.position.y+.9,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}function hx(i){const t=Math.atan2(tt.position.x-i.position.x,tt.position.z-i.position.z)+(Math.random()-.5)*1.2,e=i.userData.scale*.3+.95;oi("sapling",i.position.x+Math.sin(t)*e,i.position.z+Math.cos(t)*e,{startY:i.position.y+.8,velocityY:2.6,pickupDelay:.45})}function Gc(){for(const i of ma){const t=Ge.filter(e=>e.type==="berry"&&!e.carried&&e.popping<=0&&Math.hypot(e.x-i.x,e.z-i.z)<2.1).length;for(let e=t;e<3;e+=1){const n=Math.random()*Math.PI*2,r=.35+Math.random()*.45,s=i.x+Math.cos(n)*r,a=i.z+Math.sin(n)*r;oi("berry",s,a,{startY:le(s,a)+.55,velocityY:1.8,pickupDelay:.6})}}}const dx=[{x:be.x-1.55,z:be.z-1.15},{x:be.x-1.25,z:be.z+1.35},{x:be.x+1.75,z:be.z-1.35},{x:be.x+1.95,z:be.z+.9}];function $h(){for(const i of dx){const t=i.x,e=i.z;Ge.some(r=>r.type==="iron"&&!r.carried&&r.popping<=0&&Math.hypot(r.x-t,r.z-e)<.7)||oi("iron",t,e,{startY:le(t,e)+.45,velocityY:1.4,pickupDelay:.25})}}function fx(){for(const i of Ge)Re.remove(i.mesh);Ge.length=0,me.length=0,Gc(),$h()}function ac(i,t=null){let e=i*i,n=null;for(const r of Ge){if(r.carried||r.popping>0||t&&!t(r))continue;const s=tt.position.x-r.x,a=tt.position.z-r.z,o=s*s+a*a;o<e&&(e=o,n=r)}return n}function oc(){return h.backpack.wood+h.backpack.sapling+h.backpack.berry+h.backpack.iron}function px(){return h.backpack.wood+h.backpack.sapling+h.backpack.berry}function zr(i){return h.backpack[i]+me.filter(t=>t.type===i).length}function ra(i){return zr(i)}function mx(){return h.equippedTool==="backpack"}function gx(i){return!i||i.popping>0||!Object.prototype.hasOwnProperty.call(h.backpack,i.type)?!1:oc()>=nc?(Gt("Backpack is full"),!1):(h.backpack[i.type]+=1,Mr(i),re(),Vr.classList.remove("pop"),Vr.offsetWidth,Vr.classList.add("pop"),Sa(),Gt(`+1 ${Ni[i.type]}`),!0)}function _x(){h.fireLevel+=1;const i=1+Math.min(h.fireLevel,5)*.14;qt.scale.setScalar(i),_r.distance=15+h.fireLevel*4.5,vr.distance=20+h.fireLevel*5,Gt("The campfire grows brighter"),Md()}function vx(i){if(!i||i.popping>0)return!1;const t=i.type;if(Mr(i),t==="ironWall")Gv($r.length),Gt("Iron Wall placed by the campfire");else if(t==="biggerCampfire")_x();else if(kc(t))return h.ownedTools[t]=!0,re(),Fi(),Gt(`Collected ${Ni[t]}`),Md(),dn(t),!0;return re(),Sa(),!0}function Kh(i){return!i||i.carried||i.popping>0?!1:Xh(i.type)?vx(i):mx()?gx(i):me.length>=Jv?(Gt("Hands full - 3 items max"),!1):(i.carried=!0,i.landed=!0,i.pickupDelay=0,me.push(i),re(),Sa(),Gt(`Picked up ${Ni[i.type]}`),!0)}function jh(){if(!h.started||h.gameOver||h.falling||h.paused||h.machineOpen||h.settingsOpen||h.dropCooldown>0)return;if(me.length>0){const n=me.splice(0,me.length);for(let r=0;r<n.length;r+=1){const s=n[r];s.carried=!1;const a=tt.rotation.y+(r-(n.length-1)/2)*.5,o=1.15+r*.15,c=tt.position.x+Math.sin(a)*o,l=tt.position.z+Math.cos(a)*o;s.x=c,s.z=l,s.groundY=le(c,l),s.velocityY=1.3,s.landed=!1,s.pickupDelay=.3,s.mesh.position.set(c,tt.position.y+.8,l)}h.dropCooldown=.35,re(),Gt(n.length===1?"Dropped item":`Dropped ${n.length} items`);return}const i=["wood","sapling","berry","iron"].find(n=>h.backpack[n]>0);if(!i){Gt("Nothing to drop");return}h.backpack[i]-=1;const t=tt.position.x+Math.sin(tt.rotation.y)*1.35,e=tt.position.z+Math.cos(tt.rotation.y)*1.35;oi(i,t,e,{velocityY:2.2,pickupDelay:.35}),h.dropCooldown=.35,re(),Gt(`Took out ${Ni[i].toLowerCase()}`)}function xx(){const i=me.filter(e=>Vh.has(e.type));if(i.length===0)return;let t=0;for(const e of i)t+=Hh[e.type]||5,Mr(e);h.fuel=Qt(h.fuel+t,0,100),h.fireOut=!1,h.fireFlare=1,h.interactCooldown=.45,re(),Gt(`Fire +${Math.round(t)}%`)}function Mx(){const i=["wood","sapling","berry"].find(t=>h.backpack[t]>0);i&&(h.backpack[i]-=1,h.fuel=Qt(h.fuel+(Hh[i]||5),0,100),h.fireOut=!1,h.fireFlare=1,h.interactCooldown=.4,re(),Gt(`Fed the fire with ${Ni[i].toLowerCase()}`))}function yx(i){const t=i.userData,e=i.position.x-tt.position.x,n=i.position.z-tt.position.z,r=Math.hypot(e,n)||1,s=e/r,a=n/r;t.choppable=!1,t.falling=!0,t.fallProgress=0,t.lootDropped=!1,t.fallAxis=new L(a,0,-s).normalize(),t.hits=t.hitsMax,t.shake=0}function Zh(i,t=1){const e=i.userData;e.shake=zh,h.chopTimer=.3,h.interactCooldown=.34,tt.rotation.y=Math.atan2(i.position.x-tt.position.x,i.position.z-tt.position.z),e.hits-=t,_M(),e.hits<=0&&yx(i)}function Hc(i,t=1){if(!i||i.broken)return;if(!ga(h.equippedTool)){Gt("Equip the pickaxe to mine iron");return}if(tt.rotation.y=Math.atan2(i.x-tt.position.x,i.z-tt.position.z),h.chopTimer=.3,h.interactCooldown=.34,i.hits-=t,i.shake=.3,i.hits>0){yd(),Gt("The rock cracks");return}i.broken=!0,i.regrow=fu+Math.random()*(ix-fu),i.group.visible=!1,xM();const e=2+Math.floor(Math.random()*2);for(let n=0;n<e;n+=1){const r=Math.random()*Math.PI*2,s=.55+Math.random()*.55,a=i.x+Math.cos(r)*s,o=i.z+Math.sin(r)*s;oi("iron",a,o,{startY:le(a,o)+.5,velocityY:2.2+Math.random()*.5,pickupDelay:.4})}re(),Gt(`Mined ${e} iron`)}function Sx(i){for(const t of br){if(t.broken){t.regrow=Math.max(0,t.regrow-i),t.regrow<=0&&(t.broken=!1,t.hits=t.hitsMax,t.group.visible=!0,t.group.scale.setScalar(t.scale*.6),Gt("An iron rock has regrown"));continue}if(t.shake>0){t.shake=Math.max(0,t.shake-i);const r=t.shake/.3,s=performance.now()*.001;t.group.rotation.z=Math.sin(s*48)*.04*r}else t.group.rotation.z=0;const e=.82+t.hits/t.hitsMax*.18,n=t.scale*e;t.group.scale.x<n?t.group.scale.setScalar(Math.min(n,t.group.scale.x+i*1.6)):t.group.scale.x>n&&t.group.scale.setScalar(Math.max(n,t.group.scale.x-i*1.6))}}function Jh(i){return ra("wood")>=i.cost.wood&&ra("iron")>=i.cost.iron}function Qh(i){const t=[],e=ra("wood"),n=ra("iron");return e<i.cost.wood&&t.push(`${i.cost.wood-e} wood`),n<i.cost.iron&&t.push(`${i.cost.iron-n} iron`),t.join(" + ")}function _u(i,t){let e=t;const n=Math.min(h.backpack[i],e);for(h.backpack[i]-=n,e-=n;e>0;){const r=me.findIndex(s=>s.type===i);if(r<0)break;Mr(me[r]),e-=1}return t-e}function Ex(){if(!($o.childElementCount>0))for(const i of rx){const t=xr[i],e=document.createElement("button");e.type="button",e.className="upgrade-card",e.dataset.upgrade=i;const n=document.createElement("span");n.className="upgrade-name",n.textContent=t.name;const r=document.createElement("span");r.className="upgrade-cost",r.dataset.cost=`${t.cost.wood} wood · ${t.cost.iron} iron`;const s=document.createElement("span");s.className="upgrade-desc",s.textContent=t.desc,e.append(n,r,s),e.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),wx(i)}),$o.appendChild(e)}}function rs(){const i=xt.working?xr[xt.working]:null,t=Math.round(xt.fuel);if(cv.textContent=`${t}%`,lv.style.width=`${t}%`,jn.classList.remove("working","stalled","ready"),i){su.classList.remove("hidden"),hv.textContent=i.name;const e=Math.max(0,i.time-xt.progress);dv.textContent=xt.stalled?"OUT OF FUEL":`${e.toFixed(1)}s`,au.style.width=`${Qt(xt.progress/i.time,0,1)*100}%`,xt.stalled?(jn.textContent="Out of fuel - add wood",jn.classList.add("stalled")):(jn.textContent=`${i.name} working`,jn.classList.add("working"))}else su.classList.add("hidden"),au.style.width="0%",xt.statusTimer>0?(jn.textContent=xt.statusText||"Idle",(xt.statusText||"").includes("ready")&&jn.classList.add("ready")):jn.textContent=xt.fuel>0?"Ready for a new upgrade":"Add wood to start";for(const e of $o.children){const n=e.dataset.upgrade,r=xr[n];if(!r)continue;const s=kc(n)&&h.ownedTools[n],a=Jh(r);e.classList.toggle("owned",s),e.classList.toggle("unaffordable",!s&&!a),e.classList.toggle("working",xt.working===n);const o=e.querySelector(".upgrade-cost");s?(o.textContent="OWNED",o.classList.remove("missing")):(o.textContent=a?o.dataset.cost:`${o.dataset.cost} · need ${Qh(r)}`,o.classList.toggle("missing",!a))}}function td(){!h.started||h.gameOver||h.falling||h.paused||(h.machineOpen=!0,bn(!1),ci(!1),xa(),mn.clear(),h.look.active=!1,h.pinchDistance=0,Ex(),rs(),dh.classList.remove("hidden"),Fi(),as())}function Gn(){h.machineOpen=!1,dh.classList.add("hidden"),Fi()}function wx(i){if(!h.started||h.gameOver||h.falling)return;const t=xr[i];if(t){if(xt.working){Gt("The machine is already working");return}if(kc(i)&&h.ownedTools[i]){Gt(`You already own the ${t.name}`);return}if(!Jh(t)){Gt(`Missing ${Qh(t)}`);return}if(xt.fuel<=0){Gt("Add wood to fuel the machine");return}_u("wood",t.cost.wood),_u("iron",t.cost.iron),xt.working=i,xt.progress=0,xt.stalled=!1,xt.statusTimer=0,xt.clankTimer=.2,re(),rs(),Sd(),as(),Gt(`${t.name} started`)}}function Tx(){if(!h.started||h.gameOver||h.falling)return;let i="";if(h.backpack.wood>0)h.backpack.wood-=1,i="backpack";else{const t=me.findIndex(e=>e.type==="wood");if(t>=0)Mr(me[t]),i="hands";else{const e=ac(4.5,n=>n.type==="wood");e&&(Mr(e),i="ground")}}if(!i){Gt("No wood to feed the machine");return}xt.fuel=Qt(xt.fuel+du,0,ex),xt.working&&xt.stalled&&(xt.stalled=!1,Sd()),re(),rs(),Sa(),Gt(`Machine fuel +${du}%`)}function bx(){const i=xt.working;if(!i)return;const t=xr[i];xt.working=null,xt.progress=0,xt.stalled=!1,xt.statusText=`${t.name} ready!`,xt.statusTimer=6,os(),fM();const e=Math.sin(pe.rotation.y),n=Math.cos(pe.rotation.y),r=be.x+e*1.35,s=be.z+n*1.35;oi(i,r,s,{startY:le(r,s)+1.15,velocityY:2.4,pickupDelay:.65}),Gt(`${t.name} is ready to collect`),re(),rs()}function Ax(i){const t=xt.working?xr[xt.working]:null,e=!!t&&xt.fuel>0&&!xt.stalled;t&&!xt.stalled&&xt.fuel>0&&(xt.fuel=Math.max(0,xt.fuel-i*nx),xt.progress+=i,xt.clankTimer-=i,xt.clankTimer<=0&&(CM(),xt.clankTimer=.42+Math.random()*.38),xt.fuel<=0&&xt.progress<t.time?(xt.stalled=!0,xt.statusText="Out of fuel",xt.statusTimer=3,os(),Gt("Machine is out of fuel - add wood")):xt.progress>=t.time&&bx()),xt.statusTimer>0&&(xt.statusTimer=Math.max(0,xt.statusTimer-i));const n=performance.now()*.001;Bh.emissiveIntensity=e?1.15+Math.sin(n*11)*.25:.62+Math.sin(n*2.2)*.1,Br.glow.intensity=e?1.8+Math.sin(n*13)*.35:.8+Math.sin(n*2.4)*.1,e&&(xt.gearAngle+=i*2.6,Qo[0].rotation.x=xt.gearAngle,Qo[1].rotation.x=-xt.gearAngle*.7);for(let r=0;r<Ys.length;r+=1){const s=Ys[r];if(e){const a=(n*.32+r/Ys.length)%1;s.position.set(.66+Math.sin(n*1.1+r)*.1,2.9+a*1.55,-.4+Math.cos(n*1.3+r)*.1),s.scale.setScalar(.85+a*1.65),s.material.opacity=.24*(1-a)}else s.material.opacity=Math.max(0,s.material.opacity-i*.25)}h.machineOpen&&rs()}function ed(){var t;if(!h.started||h.gameOver||h.falling||h.paused||h.machineOpen||h.settingsOpen||h.interactCooldown>0)return;const i=Yh();if(i)switch(i.type){case"fireThrow":xx();break;case"pickup":Kh(i.item)&&(h.interactCooldown=.32);break;case"machine":td();break;case"plant":id();break;case"mine":Hc(i.rock),h.interactCooldown=.34;break;case"chop":Zh(i.tree,((t=is[h.equippedTool])==null?void 0:t.treePower)??1);break;case"fireFeed":Mx();break;case"fireFull":Gt("The fire is already full");break}}function vu(i){const t=performance.now();for(let e=Ge.length-1;e>=0;e-=1){const n=Ge[e];if(n.popping>0){n.popping=Math.max(0,n.popping-i);const r=1-n.popping/n.popDuration;n.mesh.scale.setScalar(n.baseScale*(1+r*1.1)),n.mesh.position.y+=i*1.35,n.popping<=0&&zc(n);continue}if(n.carried){const r=me.indexOf(n),s=(r-(me.length-1)/2)*.62,a=tt.rotation.y+Math.PI+s+Math.sin(t*.0012)*.05,o=.95,c=tt.position.x+Math.sin(a)*o,l=tt.position.z+Math.cos(a)*o,u=le(c,l)+.52+r*.06+Math.sin(t*.003+r)*.04,f=1-Math.exp(-8*i);n.mesh.position.x+=(c-n.mesh.position.x)*f,n.mesh.position.y+=(u-n.mesh.position.y)*f,n.mesh.position.z+=(l-n.mesh.position.z)*f,n.mesh.rotation.y+=i*1.25;continue}if(n.pickupDelay=Math.max(0,n.pickupDelay-i),n.landed)n.mesh.position.y=n.groundY+n.restY+Math.abs(Math.sin(t*.0028+n.mesh.id))*(n.type==="berry"?.025:.018),n.type==="sapling"&&(n.mesh.rotation.y+=i*.4),n.type==="berry"&&(n.mesh.rotation.y+=i*.35);else{n.velocityY-=13*i,n.mesh.position.y+=n.velocityY*i,n.type==="wood"&&(n.mesh.rotation.y+=i*3.2),n.type==="sapling"&&(n.mesh.rotation.y+=i*2.4);const r=n.groundY+n.restY;n.mesh.position.y<=r&&(n.mesh.position.y=r,n.landed=!0)}}}function nd(i){const t=i.userData;t.choppable=!0,t.baseChoppable=!0,t.falling=!1,t.fallProgress=0,t.lootDropped=!1,t.hits=na,t.hitsMax=na,t.shake=0,t.highlight=0,i.visible=!0,i.quaternion.identity(),t.trunk.material=t.trunk.material.clone(),t.trunk.material.emissive=new Tt(16757082),t.trunk.material.emissiveIntensity=0}function id(){if(!h.started||h.gameOver||h.falling||h.paused||h.machineOpen||h.settingsOpen||h.plantCooldown>0)return;const i=me.findIndex(a=>a.type==="sapling");if(i<0){Gt("Carry a sapling to plant it");return}const t=new L(Math.sin(tt.rotation.y),0,Math.cos(tt.rotation.y)),e=tt.position.x+t.x*1.75,n=tt.position.z+t.z*1.75;if(Math.hypot(e-qt.position.x,n-qt.position.z)<1.6){Gt("Too close to the campfire");return}const r=me[i];zc(r),h.plantCooldown=.45;const s=_h(.35);s.position.set(e,le(e,n),n),s.rotation.y=Math.random()*Math.PI*2,Re.add(s),or.push({mesh:s,x:e,z:n,growth:0,sway:Math.random()*Math.PI*2}),re(),Gt("Planted a sapling")}function Rx(i){for(let t=or.length-1;t>=0;t-=1){const e=or[t];e.growth+=i;const n=Qt(e.growth/$v,0,1),r=.35+n*n*.95;if(e.mesh.scale.setScalar(r),e.mesh.rotation.z=Math.sin(performance.now()*.0016+e.sway)*.035,n>=1){Re.remove(e.mesh),or.splice(t,1);const s=mh(e.x,e.z,.9+Math.random()*.35);s.userData.planted=!0,nd(s)}}}function xu(i){const t=performance.now()*.001,e=1-Math.exp(-10*i);for(const n of We){if(!n.visible)continue;const r=n.userData;if(r.falling){r.fallProgress=Math.min(1,r.fallProgress+i/Yv);const o=r.fallProgress*r.fallProgress*Math.PI*.5;if(n.quaternion.setFromAxisAngle(r.fallAxis,o),r.fallProgress>=1&&!r.lootDropped){r.lootDropped=!0,vM();for(let c=0;c<3;c+=1)ux(n,c);hx(n)}r.fallProgress>=1&&(n.visible=!1);continue}if(!r.choppable)continue;const s=n===h.targetTree?1:0;r.highlight+=(s-r.highlight)*e;const a=r.trunk.material;if(a.emissiveIntensity=r.highlight*(.45+Math.sin(t*7)*.16),r.shake>0){r.shake=Math.max(0,r.shake-i);const o=r.shake/zh;n.rotation.z=Math.sin(t*55)*.055*o,n.rotation.x=Math.cos(t*43)*.03*o}else(n.rotation.z!==0||n.rotation.x!==0)&&(n.rotation.z=0,n.rotation.x=0)}}const ii=[];function Cx(){const i=new Yt,t=new It({color:1053981,roughness:.96,metalness:.04,flatShading:!0}),e=new vn({color:16742963}),n=new Yt;i.add(n);const r=new Q(new pr(.48,0),t);r.position.y=1.12,r.scale.set(1.05,1.2,.72),r.castShadow=!0,n.add(r);const s=new Q(new Ve(.32,.6,5),t);s.position.y=.68,s.rotation.y=Math.PI/5,s.castShadow=!0,n.add(s);const a=new Q(new kn(.3,0),t);a.position.y=1.82,a.scale.set(1,1.12,.9),a.castShadow=!0,n.add(a);const o=new Ve(.055,.28,4),c=new Q(o,t);c.position.set(-.17,2.05,0),c.rotation.z=.32,c.castShadow=!0,n.add(c);const l=new Q(o,t);l.position.set(.17,2.05,0),l.rotation.z=-.32,l.castShadow=!0,n.add(l);const u=new xn(.055,6,5),f=new Q(u,e);f.position.set(-.11,1.86,.255),n.add(f);const p=new Q(u,e);p.position.set(.11,1.86,.255),n.add(p);const g=[];for(const M of[-1,1]){const m=new Yt;m.position.set(M*.5,1.48,0);const d=new Q(new ye(.075,.11,.78,5),t);d.position.y=-.38,d.castShadow=!0,m.add(d);const E=new Q(new Ve(.09,.24,4),t);E.position.y=-.82,E.rotation.x=Math.PI,E.castShadow=!0,m.add(E),n.add(m),g.push(m)}const _=[];for(const M of[-1,1]){const m=new Yt;m.position.set(M*.18,.72,0);const d=new Q(new ye(.09,.12,.7,5),t);d.position.y=-.35,d.castShadow=!0,m.add(d);const E=new Q(new ie(.17,.1,.27),t);E.position.set(0,-.73,.07),E.castShadow=!0,m.add(E),i.add(m),_.push(m)}return i.position.set(0,-40,0),i.visible=!1,i.userData={bodyMat:t,eyeMat:e,bodyGroup:n,arms:g,legs:_,speed:1.2,damage:7,health:2,maxHealth:2,hitTimer:0,attackCooldown:0,phase:Math.random()*Math.PI*2,knockback:new L,fading:!1,fade:1,targetCamp:!1,circleDir:Math.random()<.5?1:-1},Fe.add(i),ii.push(i),i}for(let i=0;i<Gh;i+=1)Cx();function rd(i){const t=i.userData;t.fading=!1,t.fade=1,t.hitTimer=0,t.attackCooldown=.6+Math.random()*.6,t.knockback.set(0,0,0),t.bodyMat.transparent=!1,t.bodyMat.opacity=1,t.bodyMat.emissive.setHex(0),t.bodyMat.emissiveIntensity=1,t.eyeMat.transparent=!1,t.eyeMat.opacity=1,i.scale.setScalar(1),i.visible=!0}const Si=new Q(new Ve(.36,1.5,7),new vn({color:16743202,transparent:!0,opacity:.58,blending:cr,depthWrite:!1}));Si.position.set(0,1.15,0);qt.add(Si);const ir=new Q(new Ve(.2,1.05,6),new vn({color:16769674,transparent:!0,opacity:.8,blending:cr,depthWrite:!1}));ir.position.set(0,.92,0);qt.add(ir);const Ui=30,Ci=new Float32Array(Ui*3),Ri=new Float32Array(Ui*3),cc=new Float32Array(Ui),Mu=new Float32Array(Ui),_a=new Ze,Vc=new pn(Ci,3);_a.setAttribute("position",Vc);const sd=new ih({color:16761707,size:.065,transparent:!0,opacity:.9,depthWrite:!1,blending:cr,sizeAttenuation:!0}),Wc=new B_(_a,sd);Wc.frustumCulled=!1;qt.add(Wc);function ad(i){const t=i*3;Ci[t]=(Math.random()-.5)*.38,Ci[t+1]=.9+Math.random()*.3,Ci[t+2]=(Math.random()-.5)*.38,Ri[t]=(Math.random()-.5)*.45,Ri[t+1]=.75+Math.random()*1.25,Ri[t+2]=(Math.random()-.5)*.45,Mu[i]=.7+Math.random()*.9,cc[i]=Mu[i]}for(let i=0;i<Ui;i+=1)ad(i);Vc.needsUpdate=!0;function Px(i,t){for(let e=0;e<Ui;e+=1){cc[e]-=i,cc[e]<=0&&ad(e);const n=e*3;Ci[n]+=Ri[n]*i,Ci[n+1]+=Ri[n+1]*i,Ci[n+2]+=Ri[n+2]*i,Ri[n+1]-=i*.55}Vc.needsUpdate=!0,_a.setDrawRange(0,Math.max(5,Math.floor(Ui*(.4+t*.6))))}const $s=[],Lx=new vn({color:10267042,transparent:!0,opacity:.08});for(let i=0;i<4;i+=1){const t=new Q(new xn(.11+i*.015,6,6),Lx.clone());t.position.y=1.55+i*.42,qt.add(t),$s.push(t)}const od=new Q(new xn(110,24,24),new vn({color:399393,side:Ne,fog:!1}));Fe.add(od);const nn=new es(16752970,2.2,12,2);nn.position.set(0,1.2,0);nn.visible=!1;Fe.add(nn);const h={started:!1,night:1,maxNight:99,health:100,hunger:100,damageFlash:0,attackCooldown:0,attackTimer:0,nearFire:!0,keys:new Set,joystick:{x:0,y:0,active:!1},look:{active:!1},pinchDistance:0,cameraYaw:0,cameraPitch:0,cameraDistance:5.7,cycleTime:0,daylight:1,nightActive:!1,gameOver:!1,pointerId:null,victory:!1,velocityY:0,grounded:!0,jumpHeld:!1,walkPhase:0,idleTime:0,moveSpeed:0,backpack:{wood:0,sapling:0,berry:0,iron:0},ownedTools:{axe:!0,pickaxe:!1,ironAxe:!1,ironSword:!1},equippedTool:null,equipTimer:0,inventoryOpen:!1,machineOpen:!1,settingsOpen:!1,machineInReach:!1,fireLevel:0,dropCooldown:0,starveTimer:0,portrait:!1,paused:!1,fuel:100,fireOut:!1,fireFlare:0,fireInReach:!1,interactCooldown:0,chopTimer:0,plantCooldown:0,targetTree:null,targetRock:null,falling:0,invuln:0,hitEffectTimer:0};function Qt(i,t,e){return Math.min(Math.max(i,t),e)}function yu(i){const t=Qt(i,0,1);return t*t*(3-2*t)}function re(){W_.textContent=`${h.night} / ${h.maxNight}`,K_.textContent=String(zr("wood")),j_.textContent=String(zr("sapling")),Z_.textContent=String(zr("berry")),J_.textContent=String(zr("iron")),q_.textContent=String(Math.max(0,Math.ceil(h.health))),tv.textContent=String(Math.max(0,Math.ceil(h.hunger)));const i=Qt(h.health,0,100);io.style.width=`${i}%`,io.classList.toggle("low",i<=55&&i>25),io.classList.toggle("critical",i<=25);const t=Qt(h.hunger,0,100);ru.style.width=`${t}%`,ru.classList.toggle("low",t<=30);const e=Qt(h.fuel,0,100),n=Math.round(e);so.style.width=`${e}%`,so.classList.toggle("low",e<=55&&e>25),so.classList.toggle("critical",e<=25),Q_.textContent=`${n}%`,h.fireOut?(Kn.textContent="The fire is out!",Kn.style.color="#ff5d5d"):e<=25?(Kn.textContent="Fire almost out",Kn.style.color="#ff5d5d"):e<=55?(Kn.textContent="Fire is low",Kn.style.color="#ffba58"):(Kn.textContent="Fire is strong",Kn.style.color="#8aec9b");const r=h.started&&h.fireOut;wc.classList.toggle("visible",r),nv.textContent=`${oc()}/${nc}`,rv.textContent=`${oc()} / ${nc}`,Fi(),cd()}function Fi(){const i=[["axe",ch],["backpack",Vr],["pickaxe",lh],["ironAxe",uh],["ironSword",hh]];for(const[n,r]of i){const s=n==="backpack"||!!h.ownedTools[n],a=h.equippedTool===n;r.classList.toggle("hidden",!s),r.classList.toggle("equipped",a),r.setAttribute("aria-pressed",String(a))}const e=!!is[h.equippedTool]&&h.started&&!h.gameOver&&!h.falling&&!h.machineOpen&&!h.settingsOpen&&!h.inventoryOpen;oh.classList.toggle("visible",e),ga(h.equippedTool)&&h.targetRock?ro.textContent="MINE":qh(h.equippedTool)&&h.targetTree?ro.textContent="CHOP":ro.textContent="ATTACK"}function cd(){if(!h.inventoryOpen)return;const i=`${h.backpack.wood}|${h.backpack.sapling}|${h.backpack.berry}|${h.backpack.iron}`;if(i===rc)return;rc=i,ao.innerHTML="";const t=[["wood","Wood log"],["sapling","Sapling"],["berry","Berry"],["iron","Iron piece"]];let e=!1;for(const[n,r]of t){const s=h.backpack[n];if(s<=0)continue;e=!0;const a=document.createElement("div");a.className="inventory-row";const o=document.createElement("span");o.className=`inv-icon ${n}`;const c=document.createElement("span");c.className="inv-name",c.textContent=r;const l=document.createElement("span");l.className="inv-count",l.textContent=`×${s}`;const u=document.createElement("button");if(u.className="inv-btn take",u.textContent="TAKE",u.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),Ix(n)}),a.append(o,c,l,u),n==="berry"){const f=document.createElement("button");f.className="inv-btn eat",f.textContent="EAT",f.addEventListener("pointerdown",p=>{p.preventDefault(),p.stopPropagation(),Dx()}),a.append(f)}ao.appendChild(a)}if(!e){const n=document.createElement("div");n.className="inventory-empty",n.textContent="Your backpack is empty.",ao.appendChild(n)}}function bn(i){h.inventoryOpen=i,iv.classList.toggle("hidden",!i),i&&(Gn(),ci(!1),Ai=0,gr.classList.remove("visible"),rc="",cd()),Fi()}function Ix(i){if(!h.started||h.gameOver||h.falling||h.backpack[i]<=0)return;h.backpack[i]-=1;const t=tt.position.x+Math.sin(tt.rotation.y)*1.35,e=tt.position.z+Math.cos(tt.rotation.y)*1.35;oi(i,t,e,{velocityY:2.2,pickupDelay:.3}),h.dropCooldown=.25,re(),Gt(`Took out ${Ni[i].toLowerCase()}`)}function Dx(){!h.started||h.gameOver||h.falling||h.backpack.berry<=0||(h.backpack.berry-=1,h.hunger=Qt(h.hunger+hu,0,100),re(),Gt(`Ate a berry (+${hu} hunger)`))}function dn(i){if(!(!h.started||h.gameOver||h.falling||h.paused)){if(i!=="backpack"&&!h.ownedTools[i]){Gt(`Craft the ${Ni[i]||"tool"} first`);return}if(i==="backpack"&&h.equippedTool==="backpack"){bn(!h.inventoryOpen),Fi();return}i===h.equippedTool?h.equippedTool=null:h.equippedTool=i,Gn(),ci(!1),h.equippedTool!=="backpack"&&bn(!1),h.equipTimer=h.equippedTool?Bc:0,as(),re(),va()}}function Ux(){h.equippedTool=null,h.equipTimer=0,bn(!1),Gn(),as(),re(),va()}function Nx(){switch(h.equippedTool){case"axe":return Je;case"backpack":return An;case"pickaxe":return Uc;case"ironAxe":return Nc;case"ironSword":return Fc;default:return null}}function va(){Je.visible=h.equippedTool==="axe",An.visible=h.equippedTool==="backpack",Uc.visible=h.equippedTool==="pickaxe",Nc.visible=h.equippedTool==="ironAxe",Fc.visible=h.equippedTool==="ironSword",fa.visible=!h.equippedTool}function Fx(i){h.equipTimer=Math.max(0,h.equipTimer-i);const t=Nx();if(!t)return;const e=t.userData.baseY??t.position.y,n=t===An?.92:1;if(h.equipTimer>0){const r=1-h.equipTimer/Bc,s=1-(1-r)*(1-r);t.scale.setScalar((.55+s*.45)*n),t.position.y=e-(1-s)*.26}else t.scale.setScalar(n),t.position.y=e}function Ox(){Xr.style.transform="translate(-50%, -50%)"}function Bx(i,t){const e=mr.getBoundingClientRect(),n=e.left+e.width/2,r=e.top+e.height/2,s=i-n,a=t-r,o=e.width*.31,c=Math.min(Math.hypot(s,a),o),l=Math.atan2(a,s),u=Math.cos(l)*c,f=Math.sin(l)*c;h.joystick.x=u/o,h.joystick.y=f/o,h.joystick.active=!0,Xr.style.left=`${50+u/o*30}%`,Xr.style.top=`${50+f/o*30}%`}function ld(i){i.preventDefault(),h.joystick.active=!0,Bx(i.clientX,i.clientY)}mr.addEventListener("pointerdown",i=>{h.pointerId=i.pointerId,ld(i),mr.setPointerCapture(i.pointerId)});mr.addEventListener("pointermove",i=>{!h.joystick.active||i.pointerId!==h.pointerId||ld(i)});function xa(){h.pointerId=null,h.joystick.x=0,h.joystick.y=0,h.joystick.active=!1,Xr.style.left="50%",Xr.style.top="50%",Ox()}mr.addEventListener("pointerup",xa);mr.addEventListener("pointercancel",xa);const mn=new Map;function Xc(){const i=[...mn.values()];return i.length<2?0:Math.hypot(i[0].x-i[1].x,i[0].y-i[1].y)}qr.addEventListener("pointerdown",i=>{!h.started||h.inventoryOpen||h.machineOpen||h.settingsOpen||(i.preventDefault(),mn.set(i.pointerId,{x:i.clientX,y:i.clientY}),h.look.active=!0,h.pinchDistance=Xc(),qr.setPointerCapture(i.pointerId))});qr.addEventListener("pointermove",i=>{if(!h.started||h.inventoryOpen||h.machineOpen||h.settingsOpen)return;const t=mn.get(i.pointerId);if(!t)return;if(i.preventDefault(),mn.set(i.pointerId,{x:i.clientX,y:i.clientY}),mn.size===1){const n=i.clientX-t.x,r=i.clientY-t.y;h.cameraYaw-=n*.0037,h.cameraPitch=Qt(h.cameraPitch-r*.0022,-.7,.45);return}const e=Xc();h.pinchDistance>0&&e>0&&(h.cameraDistance=Qt(h.cameraDistance*(h.pinchDistance/e),3,8.5)),h.pinchDistance=e});function ud(i){mn.delete(i.pointerId),h.pinchDistance=mn.size>=2?Xc():0,mn.size===0&&(h.look.active=!1)}qr.addEventListener("pointerup",ud);qr.addEventListener("pointercancel",ud);function hd(){return window.innerHeight>window.innerWidth}async function kx(){if(window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0){try{!document.fullscreenElement&&document.documentElement.requestFullscreen&&await document.documentElement.requestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}}function dd(){if(!hd()){kx(),h.started=!0,h.victory=!1,h.gameOver=!1,h.paused=!1,Fn.classList.add("hidden"),h.health=100,h.hunger=100,h.night=1,h.cycleTime=0,h.daylight=1,h.nightActive=!1,h.attackCooldown=0,h.attackTimer=0,h.damageFlash=0,h.nearFire=!0,h.keys.clear(),h.cameraYaw=0,h.cameraPitch=0,h.cameraDistance=5.7,h.velocityY=0,h.grounded=!0,h.jumpHeld=!1,h.walkPhase=0,h.idleTime=0,h.moveSpeed=0,h.backpack.wood=0,h.backpack.sapling=0,h.backpack.berry=0,h.backpack.iron=0,h.ownedTools.axe=!0,h.ownedTools.pickaxe=!1,h.ownedTools.ironAxe=!1,h.ownedTools.ironSword=!1,h.equippedTool=null,h.equipTimer=0,h.inventoryOpen=!1,h.machineOpen=!1,h.settingsOpen=!1,h.machineInReach=!1,h.fireLevel=0,h.targetRock=null,h.dropCooldown=0,h.starveTimer=0,h.fuel=100,h.fireOut=!1,h.fireFlare=0,h.interactCooldown=0,h.chopTimer=0,h.plantCooldown=0,h.targetTree=null,h.falling=0,h.invuln=0,h.hitEffectTimer=0,Ai=0,gr.classList.remove("visible"),bn(!1),Gn(),ci(!1),qt.scale.setScalar(1),_r.distance=15,vr.distance=20,xt.fuel=0,xt.working=null,xt.progress=0,xt.stalled=!1,xt.statusTimer=0,xt.statusText="",os(),Hv(),Vv(),tt.position.set(0,le(0,-3.5),-3.5),tt.rotation.y=0,wn.rotation.set(0,0,0),ze.rotation.set(0,0,0),Ii.rotation.set(0,0,0),Di.rotation.set(0,0,0),_n.position.y=.01,mn.clear(),h.look.active=!1,h.pinchDistance=0;for(const i of or)Re.remove(i.mesh);or.length=0,fx();for(let i=We.length-1;i>=0;i-=1){const t=We[i];if(t.userData.planted){Re.remove(t),We.splice(i,1);continue}t.visible=!0,t.rotation.set(0,0,0),t.quaternion.identity(),t.userData.baseChoppable&&nd(t)}wc.classList.remove("visible"),ua.classList.remove("visible"),Tc.style.opacity="0";for(const i of ii)i.visible=!1,i.position.set(0,-40,0),rd(i),i.visible=!1;sn.visible=!1,je.visible=!1,va(),re(),Gt("Tap a tool · loose iron by the machine")}}ev.addEventListener("click",dd);const zx=new Set([" ","arrowup","arrowdown","arrowleft","arrowright"]),fd=new Set(["shift","j"]);window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();zx.has(t)&&i.preventDefault(),t===" "&&!i.repeat&&pd(),t==="e"&&!i.repeat&&ed(),t==="q"&&!i.repeat&&id(),t==="f"&&!i.repeat&&jh(),t==="1"&&!i.repeat&&dn("axe"),t==="2"&&!i.repeat&&dn("backpack"),t==="3"&&!i.repeat&&dn("pickaxe"),t==="4"&&!i.repeat&&dn("ironAxe"),t==="5"&&!i.repeat&&dn("ironSword"),t==="escape"&&!i.repeat&&(Gn(),ci(!1),bn(!1)),fd.has(t)&&(h.jumpHeld=!0,i.repeat||ya()),h.keys.add(t)});window.addEventListener("keyup",i=>{const t=i.key.toLowerCase();h.keys.delete(t),fd.has(t)&&(h.jumpHeld=!1)});window.addEventListener("blur",()=>{h.keys.clear(),h.jumpHeld=!1});oh.addEventListener("pointerdown",i=>{i.preventDefault(),pd()});Yo.addEventListener("pointerdown",i=>{i.preventDefault(),ed()});$_.addEventListener("pointerdown",i=>{i.preventDefault(),jh()});ch.addEventListener("pointerdown",i=>{i.preventDefault(),dn("axe")});Vr.addEventListener("pointerdown",i=>{i.preventDefault(),dn("backpack")});lh.addEventListener("pointerdown",i=>{i.preventDefault(),dn("pickaxe")});uh.addEventListener("pointerdown",i=>{i.preventDefault(),dn("ironAxe")});hh.addEventListener("pointerdown",i=>{i.preventDefault(),dn("ironSword")});ov.addEventListener("pointerdown",i=>{i.preventDefault(),Gn()});uv.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),Tx()});sv.addEventListener("pointerdown",i=>{i.preventDefault(),bn(!1)});av.addEventListener("pointerdown",i=>{i.preventDefault(),Ux()});let Gr=null;window.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||i.target.closest("button, #inventoryPanel, #upgradePanel, #settingsPanel, #startOverlay, #rotateOverlay")||i.target.closest("#joystickZone, #hotbar, #actionCluster")||(Gr={id:i.pointerId,x:i.clientX,y:i.clientY,time:performance.now()})});window.addEventListener("pointerup",i=>{if(!Gr||Gr.id!==i.pointerId)return;const t=Gr;Gr=null,!(!h.started||h.gameOver||h.falling||h.inventoryOpen||h.machineOpen||h.settingsOpen||h.portrait||Math.hypot(i.clientX-t.x,i.clientY-t.y)>12||performance.now()-t.time>420)&&Gx(i.clientX,i.clientY)});const Su=new sh,co=new Bt;function Gx(i,t){const e=ah.getBoundingClientRect();co.x=(i-e.left)/e.width*2-1,co.y=-((t-e.top)/e.height)*2+1,Su.setFromCamera(co,un);const n=[];for(const a of Ge){if(a.carried||a.popping>0)continue;const o=tt.position.x-a.x,c=tt.position.z-a.z;o*o+c*c>(ec+.6)*(ec+.6)||n.push(a.mesh)}for(const a of br)a.broken||Math.hypot(tt.position.x-a.x,tt.position.z-a.z)>kr+.8||n.push(a.group);if(sc()<ic+2&&n.push(pe),n.length===0)return;const r=Su.intersectObjects(n,!0);if(r.length===0)return;let s=r[0].object;for(;s;){if(s.userData.itemRef){Kh(s.userData.itemRef);return}if(s.userData.rockRef){const a=s.userData.rockRef;if(!ga(h.equippedTool)){Gt("Equip the pickaxe to mine iron");return}Hc(a);return}if(s.userData.machineRef){sc()<=ic?td():Gt("Move closer to the machine");return}s=s.parent}}function Ma(i){h.jumpHeld=i,i&&ya()}Yr.addEventListener("pointerdown",i=>{i.preventDefault(),Yr.setPointerCapture(i.pointerId),Ma(!0)});Yr.addEventListener("pointerup",()=>Ma(!1));Yr.addEventListener("pointercancel",()=>Ma(!1));Yr.addEventListener("lostpointercapture",()=>Ma(!1));Fn.addEventListener("pointerdown",i=>{!h.started&&i.target===Fn&&dd()});function Hx(i,t,e,n){Fn.classList.remove("hidden"),Fn.querySelector(".title").textContent=i,Fn.querySelector(".subtitle").textContent=t,Fn.querySelector(".hint").textContent=e,Fn.querySelector("button").textContent=n,wc.classList.remove("visible"),ua.classList.remove("visible"),gr.classList.remove("visible"),bn(!1),Gn(),ci(!1),os(),h.equippedTool=null,h.equipTimer=0,va(),re(),Tc.style.opacity="0"}function pd(){if(!h.started||h.gameOver||h.falling||h.paused||h.machineOpen||h.settingsOpen||h.attackCooldown>0)return;const i=is[h.equippedTool];if(!i){Gt(h.equippedTool==="backpack"?"Unequip the backpack to fight":"Equip a tool to attack");return}h.attackCooldown=i.cooldown,h.attackTimer=Oc,sn.visible=!0,sn.scale.setScalar(.7),pa.intensity=1.8,gM(),h.targetRock&&i.rockPower>0?Hc(h.targetRock,i.rockPower):h.targetTree&&i.treePower>0&&Zh(h.targetTree,i.treePower);const t=new L(Math.sin(tt.rotation.y),0,Math.cos(tt.rotation.y));for(const e of ii){if(!e.visible||e.userData.fading)continue;const n=e.position.clone().sub(tt.position);n.y=0;const r=n.length();if(r>i.range||r<.01||(n.normalize(),t.dot(n)<.2))continue;const s=e.userData;s.health-=i.damage,s.hitTimer=.22,s.bodyMat.emissive.setHex(16723738),s.bodyMat.emissiveIntensity=1.1,s.knockback.addScaledVector(t,4.2+i.damage*.6),MM(),je.position.copy(e.position),je.position.y+=1.15,je.scale.setScalar(.8),je.material.opacity=.95,je.visible=!0,h.hitEffectTimer=.22,s.health<=0&&(s.health=0,s.dead=!0,s.attackCooldown=0,md(e,4))}}function md(i,t){const e=i.userData;i.visible&&(e.fading=!0,e.fade=1,e.fadeRate=t,e.bodyMat.transparent=!0,e.eyeMat.transparent=!0)}function Vx(i){!h.started||h.gameOver||h.falling||h.invuln>0||(h.health=Math.max(0,h.health-i),h.damageFlash=1,re(),h.health<=0&&gd())}function gd(){h.falling>0||(h.falling=2.4,h.health=0,h.attackTimer=0,sn.visible=!1,bn(!1),Gn(),ua.classList.add("visible"),mM(),re())}function Wx(){h.falling=0,h.health=100,h.hunger=Math.max(h.hunger,55),h.invuln=2,h.damageFlash=0,h.velocityY=0,h.grounded=!0,h.attackCooldown=0,h.attackTimer=0,tt.position.set(0,le(0,3.6),3.6),tt.rotation.y=0,wn.rotation.set(0,0,0),ze.rotation.set(0,0,0),Ii.rotation.set(0,0,0),Di.rotation.set(0,0,0),ua.classList.remove("visible"),h.cycleTime=yi,h.nightActive=!0,_d(),re()}function _d(){h.nightActive=!0;const i=Math.min(h.night+1,Gh);for(let t=0;t<ii.length;t+=1){const e=ii[t];if(t>=i){e.visible=!1,e.position.set(0,-40,0);continue}const n=t/i*Math.PI*2+(Math.random()-.5)*.5,r=33+Math.random()*6,s=Math.cos(n)*r,a=Math.sin(n)*r;rd(e),e.position.set(s,le(s,a),a),e.rotation.y=Math.atan2(-s,-a);const o=e.userData;o.dead=!1,o.health=Math.min(8,2+Math.floor((h.night-1)/12)),o.maxHealth=o.health,o.speed=Math.min(3.5,1.15+h.night*.045+Math.random()*.22),o.damage=Math.min(22,6+h.night*.3),o.targetCamp=t%4===0,o.circleDir=Math.random()<.5?1:-1,o.phase=Math.random()*Math.PI*2}nn.visible=!0,nn.position.copy(tt.position),nn.position.y=1.4,nn.intensity=2.6}function Xx(){const i=tt.position.x-qt.position.x,t=tt.position.z-qt.position.z,e=sx();return i*i+t*t<e*e?1:0}const Ks=6,qc=.32,qx=7.4,Yx=17.5;function ya(){!h.started||h.gameOver||h.falling||!h.grounded||h.machineOpen||h.settingsOpen||h.inventoryOpen||(h.velocityY=qx,h.grounded=!1,yM())}function Eu(i){const t=le(tt.position.x,tt.position.z);if(!h.started||h.gameOver){h.velocityY=0,h.grounded=!0,tt.position.y=t;return}if(h.grounded){tt.position.y=t,h.jumpHeld&&ya();return}const e=h.velocityY;h.velocityY-=Yx*i,tt.position.y+=h.velocityY*i,tt.position.y<=t&&(tt.position.y=t,h.velocityY=0,h.grounded=!0,e<-2.4&&SM())}function $x(){for(const i of We){if(!i.visible||i.userData.falling)continue;const t=tt.position.x-i.position.x,e=tt.position.z-i.position.z,n=i.userData.scale*.3+qc,r=t*t+e*e;if(r>=n*n||r<1e-4)continue;const s=Math.sqrt(r),a=n-s;tt.position.x+=t/s*a,tt.position.z+=e/s*a}}function vd(i,t=qc){for(const e of bc){if(e.rock&&e.rock.broken)continue;const n=i.position.x-e.x,r=i.position.z-e.z,s=e.radius+t,a=n*n+r*r;if(a>=s*s)continue;if(a<1e-4){i.position.x=e.x+s;continue}const o=Math.sqrt(a),c=s-o;i.position.x+=n/o*c,i.position.z+=r/o*c}for(const e of $r){const n=i.position.x-e.x,r=i.position.z-e.z,s=Math.cos(e.rotation),a=Math.sin(e.rotation);let o=n*s-r*a,c=n*a+r*s;const l=e.width/2+t,u=e.depth/2+t;if(Math.abs(o)>=l||Math.abs(c)>=u)continue;const f=l-Math.abs(o),p=u-Math.abs(c);f<p?o=Math.sign(o||1)*l:c=Math.sign(c||1)*u,i.position.x=e.x+o*s+c*a,i.position.z=e.z-o*a+c*s}}function Kx(i,t,e){if(h.grounded)for(const n of Ih){if(n.rock&&n.rock.broken)continue;const r=i-n.x,s=t-n.z,a=n.radius+qc+.12;if(r*r+s*s>a*a)continue;const o=n.x-i,c=n.z-t;if(!(e.x*o+e.z*c<=0)&&n.top-tt.position.y<=.95){ya();return}}}function jx(i){if(!h.started||h.gameOver||h.falling)return;const t=h.keys,e=(t.has("d")||t.has("arrowright")?1:0)-(t.has("a")||t.has("arrowleft")?1:0),n=(t.has("w")||t.has("arrowup")?1:0)-(t.has("s")||t.has("arrowdown")?1:0),r=Qt(h.joystick.x+e,-1,1),s=Qt(-h.joystick.y+n,-1,1);if(Math.abs(r)+Math.abs(s)<.02){h.moveSpeed=0;return}const a=new L(Math.sin(h.cameraYaw),0,Math.cos(h.cameraYaw)),o=new L(-Math.cos(h.cameraYaw),0,Math.sin(h.cameraYaw)),c=new L;c.addScaledVector(a,s),c.addScaledVector(o,r),c.normalize(),h.moveSpeed=Ks,tt.rotation.y=Math.atan2(c.x,c.z);const l=tt.position.x+c.x*i*Ks,u=tt.position.z+c.z*i*Ks;Kx(l,u,c),tt.position.x=l,tt.position.z=u,$x(),vd(tt),tt.position.x=Qt(tt.position.x,-30,30),tt.position.z=Qt(tt.position.z,-30,30)}function Zx(i){h.idleTime+=i;let t=0,e=0,n=0,r=0,s=0,a=0;if(!h.grounded)h.velocityY>.25?(t=-2.55,e=-2.55,n=-.18,r=.18):(t=-.2,e=-.2,n=-1.35,r=1.35),s=.12,a=-.12;else if(h.attackTimer>0){const l=1-h.attackTimer/Oc,u=Math.sin(Qt(l,0,1)*Math.PI);t=.22*u,e=-.45-2.25*u,r=.34*u,s=.08*u,a=-.08*u}else if(h.chopTimer>0){const l=1-h.chopTimer/.3,u=Math.sin(Qt(l,0,1)*Math.PI);t=-.4*u,e=-2.2*u,r=.12*u}else if(h.equipTimer>0){const l=1-h.equipTimer/Bc,u=Math.sin(Qt(l,0,1)*Math.PI);e=-1.15*u,r=.22*u,t=.18*u}else if(h.moveSpeed>.1){h.walkPhase+=i*(5+h.moveSpeed);const l=Math.sin(h.walkPhase)*.72;t=l,e=-l,s=-l,a=l}else{const l=Math.sin(h.idleTime*1.9)*.05;t=l,e=-l}const o=1-Math.exp(-14*i);wn.rotation.x+=(t-wn.rotation.x)*o,ze.rotation.x+=(e-ze.rotation.x)*o,wn.rotation.z+=(n-wn.rotation.z)*o,ze.rotation.z+=(r-ze.rotation.z)*o,Ii.rotation.x+=(s-Ii.rotation.x)*o,Di.rotation.x+=(a-Di.rotation.x)*o;const c=h.grounded&&h.moveSpeed>.1?Math.abs(Math.sin(h.walkPhase))*.02:0;_n.position.y+=(.01+c-_n.position.y)*o}function Jx(i){if(!h.started||h.gameOver)return;const t=!h.fireOut&&h.fuel>jv;for(const e of ii){const n=e.userData;if(!e.visible)continue;if(n.fading){n.fade=Math.max(0,n.fade-i*(n.fadeRate||1));const T=n.fade;n.bodyMat.opacity=T,n.eyeMat.opacity=T,e.scale.setScalar(.4+T*.6),T<=0&&(e.visible=!1,n.fading=!1,n.dead=!0,e.position.set(0,-40,0));continue}if(h.falling>0)continue;n.hitTimer>0&&(n.hitTimer-=i,n.hitTimer<=0&&(n.bodyMat.emissive.setHex(0),n.bodyMat.emissiveIntensity=1)),n.knockback.lengthSq()>4e-4&&(e.position.addScaledVector(n.knockback,i),n.knockback.multiplyScalar(Math.exp(-9*i)));const r=Math.hypot(tt.position.x-e.position.x,tt.position.z-e.position.z);let s=tt.position.x,a=tt.position.z;n.targetCamp&&r>10&&!h.fireOut&&(s=qt.position.x,a=qt.position.z);let o=s-e.position.x,c=a-e.position.z;const l=Math.hypot(o,c);let u=0,f=0,p=!1;if(l>.35&&(u=o/l*n.speed*i,f=c/l*n.speed*i,p=!0),t){const T=e.position.x-qt.position.x,N=e.position.z-qt.position.z,A=Math.hypot(T,N)||1,R=T/A,I=N/A;A<gi()+1.2&&(u+=-I*n.circleDir*n.speed*i*.5,f+=R*n.circleDir*n.speed*i*.5)}let g=e.position.x+u,_=e.position.z+f;if(t){const T=e.position.x-qt.position.x,N=e.position.z-qt.position.z,A=Math.hypot(T,N)||1;A<gi()-.05&&(g=qt.position.x+T/A*gi(),_=qt.position.z+N/A*gi());const R=g-qt.position.x,I=_-qt.position.z;if((Math.hypot(R,I)||1)<gi()){const v=e.position.x-qt.position.x,P=e.position.z-qt.position.z,k=Math.hypot(v,P)||1;g=qt.position.x+v/k*gi(),_=qt.position.z+P/k*gi()}}e.position.x=Qt(g,-46,46),e.position.z=Qt(_,-46,46),vd(e,.36),e.position.x=Qt(e.position.x,-46,46),e.position.z=Qt(e.position.z,-46,46),e.position.y=le(e.position.x,e.position.z);const M=s-e.position.x,m=a-e.position.z;Math.hypot(M,m)>.01&&(e.rotation.y=Math.atan2(M,m));const d=p?.58:.1;n.phase+=i*(3.4+n.speed*1.5)*(p?1:.3);const E=Math.sin(n.phase);n.legs[0].rotation.x=E*d,n.legs[1].rotation.x=-E*d,n.arms[0].rotation.x=-E*d*.8,n.arms[1].rotation.x=E*d*.8,n.bodyGroup.position.y=Math.abs(E)*.035,n.attackCooldown=Math.max(0,n.attackCooldown-i),Math.hypot(tt.position.x-e.position.x,tt.position.z-e.position.z)<1.45&&Math.abs(tt.position.y-e.position.y)<2.2&&n.attackCooldown<=0&&h.invuln<=0&&(Vx(n.damage),n.attackCooldown=1.05)}}function Qx(i){!h.started||h.gameOver||h.falling||(h.hunger=Math.max(0,h.hunger-i*Qv),h.hunger<=0?(h.starveTimer+=i,h.starveTimer>=1&&(h.starveTimer-=1,h.health=Math.max(0,h.health-2),h.damageFlash=Math.max(h.damageFlash,.45),re(),h.health<=0&&gd())):h.starveTimer=0)}function tM(i){h.started&&!h.gameOver&&(h.fuel=Math.max(0,h.fuel-i*Xv),h.fireFlare=Math.max(0,h.fireFlare-i*1.8),h.fuel<=0&&(h.fireOut=!0));const t=Qt(h.fuel/100,0,1),e=Xx()>0;h.nearFire=e,e&&h.started&&!h.gameOver&&!h.falling&&!h.fireOut&&(h.health=Qt(h.health+i*3,0,100)),nn.visible=nn.visible&&nn.intensity>.1,nn.visible&&(nn.intensity*=.96);const n=performance.now()*.001,r=.85+Math.sin(n*17.3)*.12+Math.sin(n*29.7+.7)*.08,s=!h.fireOut;if(bi.visible=s,Si.visible=s,ir.visible=s,Wc.visible=s,s){const a=.55+t*.45;bi.scale.setScalar((.8+t*.45)*(1+Math.sin(n*12)*.08)),bi.position.y=.55+Math.sin(n*6)*.04,bi.rotation.y+=i*2.4;const o=1.5*a;Si.scale.setScalar(a*(.9+Math.sin(n*9)*.1)),Si.position.y=.4+o*.5+Math.sin(n*8.5)*.04,Si.rotation.y+=i*1.9,Si.rotation.z=Math.sin(n*3.1)*.08;const c=1.05*a;ir.scale.setScalar(a*(.92+Math.sin(n*14)*.1)),ir.position.y=.42+c*.5+Math.sin(n*10+1)*.03,ir.rotation.z=Math.sin(n*4.7+1)*.07,_r.intensity=(2+t*1.8+h.fireLevel*.55)*r+h.fireFlare*3.2,vr.intensity=(.6+t*.8+h.fireLevel*.28)*r+h.fireFlare*1.8,sd.opacity=.55+t*.3+Math.sin(n*13)*.1,Px(i,t)}else _r.intensity=0,vr.intensity=0,_a.setDrawRange(0,0);for(let a=0;a<$s.length;a+=1){const o=$s[a],c=(n*.42+a/$s.length)%1;o.position.set(Math.sin(n*1.4+a)*.14,1.5+c*1.8,Math.cos(n*1.2+a)*.12),o.scale.setScalar(.6+c*1.05),o.material.opacity=s?.09*(1-c):0}if(h.started&&!h.gameOver&&h.health>0){const a=.48+Math.sin(n*14)*.2;pa.intensity=a}}const eM=new Tt(7314084),nM=new Tt(133647),iM=new Tt(8890789),rM=new Tt(465186),sM=new Tt(14676479),aM=new Tt(9417960),oM=new Tt(16773840),cM=new Tt(11060991),lM=new Tt(4851718),Bs=new Tt,wu=new Tt;function xd(){const i=1-h.daylight;Bs.copy(eM).lerp(nM,i),h.damageFlash>0&&Bs.lerp(lM,h.damageFlash*.34),Fe.background.copy(Bs),od.material.color.copy(Bs),wu.copy(iM).lerp(rM,i),Fe.fog.color.copy(wu),Fe.fog.density=.018+i*.04,Ko.color.copy(sM).lerp(aM,i),Ko.intensity=1-i*.45,gn.color.copy(oM).lerp(cM,i),gn.intensity=1.25-i*.55,X_.classList.toggle("night",i>.5);const t=h.started&&h.fireOut?.1:0;Tc.style.opacity=String(Qt(i*.3+t,0,.85))}function uM(i){const t=h.cycleTime;h.cycleTime+=i;let e=!1;h.cycleTime>=er&&(h.cycleTime-=er,e=!0);const n=h.cycleTime;if(n<yi-oo?h.daylight=1:n<yi?h.daylight=1-yu((n-(yi-oo))/oo):n<er-Nr?h.daylight=0:h.daylight=yu((n-(er-Nr))/Nr),t<yi&&n>=yi&&!h.nightActive&&_d(),t<er-Nr&&n>=er-Nr)for(const r of ii)r.visible&&!r.userData.fading&&!r.userData.dead&&md(r,.3);if(e){if(h.nightActive=!1,Gc(),pM(),Gt("You survived the night"),h.night>=h.maxNight){h.victory=!0,h.started=!1,h.gameOver=!0,Hx("You Survived","99 nights survived. The camp still burns.","Tap to begin a new run.","Play Again");return}h.night+=1,re()}}const lo=new sh,Be=new L,Zn=new L,Fr=new L,ks=[];function hM(){const i=h.cameraYaw,t=h.cameraDistance,e=Math.max(.45,1.5+h.cameraPitch*2.1);Be.copy(tt.position),Be.y+=1.35,Zn.set(Be.x-Math.sin(i)*t,Be.y+e,Be.z-Math.cos(i)*t),Fr.copy(Zn).sub(Be);const n=Fr.length();Fr.normalize(),ks.length=0;const r=t+4;for(const l of We){if(!l.visible)continue;const u=l.position.x-Be.x,f=l.position.z-Be.z;u*u+f*f<r*r&&ks.push(l.userData.cameraMeshes[0],l.userData.cameraMeshes[1])}let s=n;if(ks.length>0){lo.set(Be,Fr),lo.far=n;const l=lo.intersectObjects(ks,!1);l.length>0&&(s=Math.max(1.4,l[0].distance-.28))}Zn.copy(Be).addScaledVector(Fr,s);const a=le(Zn.x,Zn.z)+.35;Zn.y<a&&(Zn.y=a);const o=s<n-.01;un.position.lerp(Zn,o?.55:.16);const c=le(un.position.x,un.position.z)+.3;un.position.y<c&&(un.position.y=c),Be.x+=Math.sin(i)*6,Be.y+=h.cameraPitch*6,Be.z+=Math.cos(i)*6,un.lookAt(Be)}const K={ctx:null,master:null,noiseBuffer:null,started:!1,volume:.7,muted:!1,windGain:null,cricketGain:null,fireGain:null,stepTimer:.22,fireCrackleTimer:.2,birdTimer:2.5,growlTimer:1.8,monsterStepTimer:.5,heartbeatTimer:0,machineRunning:!1,machineOsc:null,machineOsc2:null,machineGain:null};function ss(){return!!K.ctx&&K.started}function ri(){return K.ctx?K.ctx.currentTime:0}function dM(i){const t=Math.floor(i.sampleRate*2),e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);let r=0;for(let s=0;s<t;s+=1){const a=Math.random()*2-1;r=r*.72+a*.28,n[s]=r*1.15}return e}function Yc(){const i=window.AudioContext||window.webkitAudioContext;if(i)try{if(!K.ctx){const t=new i;K.ctx=t,K.master=t.createGain(),K.master.gain.value=K.muted?0:K.volume,K.master.connect(t.destination),K.noiseBuffer=dM(t);const e=t.createBufferSource();e.buffer=K.noiseBuffer,e.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=460,n.Q.value=.55,K.windGain=t.createGain(),K.windGain.gain.value=.012,e.connect(n).connect(K.windGain).connect(K.master),e.start();const r=t.createBufferSource();r.buffer=K.noiseBuffer,r.loop=!0;const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=4300,s.Q.value=7,K.cricketGain=t.createGain(),K.cricketGain.gain.value=1e-4;const a=t.createOscillator();a.type="sine",a.frequency.value=5.1;const o=t.createGain();o.gain.value=.006,a.connect(o).connect(K.cricketGain.gain),r.connect(s).connect(K.cricketGain).connect(K.master),r.start(),a.start();const c=t.createBufferSource();c.buffer=K.noiseBuffer,c.loop=!0;const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=760,l.Q.value=.6,K.fireGain=t.createGain(),K.fireGain.gain.value=1e-4,c.connect(l).connect(K.fireGain).connect(K.master),c.start()}K.started=!0,K.ctx.state==="suspended"&&K.ctx.resume()}catch{K.started=!1}}function se(i,t,e,n="sine",r=.04,s=0,a=.008){if(!ss())return;const o=K.ctx,c=ri()+Math.max(0,s),l=o.createOscillator(),u=o.createGain();l.type=n,l.frequency.setValueAtTime(Math.max(20,i),c),t&&t!==i&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+e),u.gain.setValueAtTime(1e-4,c),u.gain.linearRampToValueAtTime(r,c+a),u.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u).connect(K.master),l.start(c),l.stop(c+e+.04)}function De(i,t,e="lowpass",n=900,r=0,s=.8,a=0){if(!ss())return;const o=K.ctx,c=ri()+Math.max(0,a),l=o.createBufferSource();l.buffer=K.noiseBuffer;const u=o.createBiquadFilter();u.type=e,u.frequency.setValueAtTime(Math.max(40,n),c),r&&u.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+i),u.Q.value=s;const f=o.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.linearRampToValueAtTime(t,c+.006),f.gain.exponentialRampToValueAtTime(1e-4,c+i),l.connect(u).connect(f).connect(K.master),l.start(c,Math.random()*1.2,i+.04)}function Sa(){se(520,760,.08,"sine",.045),se(880,980,.06,"triangle",.024,.055)}function as(){De(.035,.025,"highpass",1900,0,.8),se(300,220,.055,"square",.018)}function Md(){[523.25,659.25,783.99,1046.5].forEach((t,e)=>{se(t,t,.52,"triangle",.04,e*.085),se(t*2,t*2,.32,"sine",.014,e*.085+.008)})}function fM(){se(1046.5,1046.5,.7,"sine",.055),se(1568,1568,.55,"sine",.028,.02),se(2093,2093,.4,"triangle",.014,.03)}function pM(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{se(t,t,.62,"triangle",.045,e*.1),se(t*1.5,t*1.5,.34,"sine",.012,e*.1+.01)})}function mM(){se(330,120,1.1,"sawtooth",.045,0,.02),se(220,82,1.3,"sine",.05,.04,.02),De(.9,.025,"lowpass",420,110)}function gM(){De(.18,.055,"bandpass",950,260,1.1)}function _M(){se(132,52,.18,"sine",.11),De(.14,.055,"lowpass",320,130)}function vM(){De(.85,.09,"lowpass",950,120,.7),se(90,38,.63,"sine",.08,.04),De(.35,.04,"bandpass",1800,700,1.4,.08)}function yd(){se(1850,1450,.075,"triangle",.038),se(2650,2100,.055,"sine",.02,.012),De(.045,.025,"highpass",2400,0,.9)}function xM(){yd(),De(.38,.08,"lowpass",720,140,.8),se(190,60,.34,"sine",.06,.02)}function MM(){se(170,70,.14,"sine",.075),De(.1,.045,"bandpass",680,250,.9)}function yM(){se(220,360,.15,"sine",.03),De(.11,.022,"highpass",900,0)}function SM(){se(115,52,.17,"sine",.075),De(.12,.04,"lowpass",360,130)}function EM(){const i=72+Math.random()*28;se(i,i*.7,.075,"sine",.028),De(.075,.022,"lowpass",480+Math.random()*180,0,.7)}function wM(i){const t=.008+i*.03;De(.025+Math.random()*.04,t,"highpass",900+Math.random()*1400,0,.9)}function TM(){const i=2100+Math.random()*900,t=2+Math.floor(Math.random()*2);for(let e=0;e<t;e+=1)se(i+Math.random()*250,i+700+Math.random()*500,.085,"sine",.018,e*.11,.012)}function bM(i){if(!ss())return;const t=K.ctx,e=ri(),n=t.createOscillator(),r=t.createBiquadFilter(),s=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(76,e),n.frequency.exponentialRampToValueAtTime(44,e+.75),r.type="lowpass",r.frequency.value=190,r.Q.value=1.2,s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.012+i*.045,e+.08),s.gain.exponentialRampToValueAtTime(1e-4,e+.78),n.connect(r).connect(s).connect(K.master),n.start(e),n.stop(e+.82),De(.5,.008+i*.018,"lowpass",260,90)}function AM(i){const t=.01+i*.045;se(62,34,.12,"sine",t),De(.1,t*.55,"lowpass",250,100)}function RM(i){const t=.018+i*.055;se(58,44,.1,"sine",t),se(52,38,.12,"sine",t*.7,.16)}function CM(){De(.04,.02,"highpass",1700,0,1.2),se(390,330,.06,"square",.012)}function Sd(){if(!(!ss()||K.machineRunning))try{const i=K.ctx,t=i.createOscillator(),e=i.createOscillator(),n=i.createBiquadFilter(),r=i.createGain();t.type="sawtooth",t.frequency.value=55,e.type="square",e.frequency.value=82.5,n.type="lowpass",n.frequency.value=230,n.Q.value=.7,r.gain.setValueAtTime(1e-4,ri()),r.gain.linearRampToValueAtTime(.018,ri()+.18),t.connect(n),e.connect(n),n.connect(r).connect(K.master),t.start(),e.start(),K.machineOsc=t,K.machineOsc2=e,K.machineGain=r,K.machineRunning=!0}catch{K.machineRunning=!1}}function os(){if(K.machineRunning){K.machineRunning=!1;try{const i=ri();K.machineGain.gain.cancelScheduledValues(i),K.machineGain.gain.setValueAtTime(Math.max(1e-4,K.machineGain.gain.value),i),K.machineGain.gain.exponentialRampToValueAtTime(1e-4,i+.16),K.machineOsc.stop(i+.2),K.machineOsc2.stop(i+.2)}catch{}K.machineOsc=null,K.machineOsc2=null,K.machineGain=null}}function Ed(){qs.classList.toggle("muted",K.muted),qs.setAttribute("aria-pressed",String(K.muted)),qs.setAttribute("aria-label",K.muted?"Unmute sound":"Mute sound")}function wd(){if(!K.master)return;const i=ri(),t=K.muted?0:K.volume;K.master.gain.cancelScheduledValues(i),K.master.gain.setValueAtTime(K.master.gain.value,i),K.master.gain.linearRampToValueAtTime(t,i+.06)}function Td(i){K.volume=Qt(i,0,1),wd(),mv.textContent=`${Math.round(K.volume*100)}%`}function PM(){Yc(),K.muted=!K.muted,wd(),Ed(),as()}function ci(i){h.settingsOpen=i,fv.classList.toggle("hidden",!i),fh.setAttribute("aria-expanded",String(i)),i&&(Gn(),bn(!1)),Fi()}function LM(i){if(!ss())return;const t=ri(),e=1-h.daylight,n=h.started&&!h.gameOver&&!h.paused,r=!h.started||h.gameOver||h.paused;K.windGain.gain.setTargetAtTime(r?.007:.007+h.daylight*.03+e*.012,t,.7),K.cricketGain.gain.setTargetAtTime(r?1e-4:e*.017,t,.85);const s=Wh(),a=Qt(1-s/18,0,1),o=h.started&&!h.fireOut&&!h.gameOver,c=Qt(h.fuel/100,0,1);K.fireGain.gain.setTargetAtTime(o?(.004+a*.042)*(.45+c*.55):1e-4,t,.35),o&&!h.paused&&a>.04&&(K.fireCrackleTimer-=i,K.fireCrackleTimer<=0&&(wM(a),K.fireCrackleTimer=.13+Math.random()*.42+(1-a)*.55)),n&&h.daylight>.55?(K.birdTimer-=i*(.7+h.daylight*.7),K.birdTimer<=0&&(TM(),K.birdTimer=3+Math.random()*6)):K.birdTimer=Math.max(K.birdTimer,1.5),n&&h.grounded&&h.moveSpeed>.1&&h.falling<=0?(K.stepTimer-=i*(.8+h.moveSpeed/Ks*.8),K.stepTimer<=0&&(EM(),K.stepTimer=.31)):K.stepTimer=Math.min(K.stepTimer,.16);let l=null,u=1/0;if(n)for(const f of ii){if(!f.visible||f.userData.fading)continue;const p=Math.hypot(tt.position.x-f.position.x,tt.position.z-f.position.z);p<u&&(u=p,l=f)}if(l&&u<21){const f=Qt(1-u/21,0,1);K.growlTimer-=i*(1+f*2.2),K.growlTimer<=0&&(bM(f),K.growlTimer=2.8+Math.random()*4.5),K.monsterStepTimer-=i*(1+f*.8),K.monsterStepTimer<=0&&(AM(f),K.monsterStepTimer=.45+Math.random()*.35),u<15?(K.heartbeatTimer-=i,K.heartbeatTimer<=0&&(RM(f),K.heartbeatTimer=1.15-f*.72+Math.random()*.08)):K.heartbeatTimer=0}else K.growlTimer=Math.max(K.growlTimer,1.4),K.monsterStepTimer=Math.max(K.monsterStepTimer,.4),K.heartbeatTimer=0;(!n||h.falling>0)&&K.machineRunning&&os()}window.addEventListener("pointerdown",Yc,{capture:!0,passive:!0});window.addEventListener("keydown",Yc,{capture:!0});qs.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),PM()});fh.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),ci(!h.settingsOpen)});pv.addEventListener("pointerdown",i=>{i.preventDefault(),ci(!1)});ou.addEventListener("input",()=>{Td(Number(ou.value)/100)});Td(K.volume);Ed();function bd(){requestAnimationFrame(bd);const i=gv.getDelta(),t=Math.min(i,.033),e=hd();if(e!==h.portrait&&(h.portrait=e,document.body.classList.toggle("portrait",e),e&&(xa(),mn.clear(),h.look.active=!1,h.pinchDistance=0,h.keys.clear(),h.jumpHeld=!1)),h.paused=e,!e){if(h.attackCooldown=Math.max(0,h.attackCooldown-t),h.attackTimer=Math.max(0,h.attackTimer-t),h.interactCooldown=Math.max(0,h.interactCooldown-t),h.chopTimer=Math.max(0,h.chopTimer-t),h.plantCooldown=Math.max(0,h.plantCooldown-t),h.dropCooldown=Math.max(0,h.dropCooldown-t),h.invuln=Math.max(0,h.invuln-t),Fx(t),sn.visible=h.attackTimer>0,h.attackTimer>0){const n=1-h.attackTimer/Oc;sn.scale.setScalar(.7+n*.6),sn.material.opacity=.8*(1-n),sn.rotation.z=n*.55}h.hitEffectTimer>0?(h.hitEffectTimer=Math.max(0,h.hitEffectTimer-t),je.visible=!0,je.scale.setScalar(.8+(1-h.hitEffectTimer/.22)*1.5),je.material.opacity=h.hitEffectTimer/.22,je.rotation.y+=t*10):je.visible=!1,Ai>0&&(Ai=Math.max(0,Ai-i),Ai<=0&&gr.classList.remove("visible")),h.started&&!h.gameOver?(uM(t),h.falling>0?(h.falling=Math.max(0,h.falling-t),h.falling<=0&&Wx()):jx(t),Eu(t),Jx(t),Qx(t),mu(),xu(t),vu(t),Rx(t),tM(t),Ax(t),Sx(t),re(),gu()):(h.moveSpeed=0,Eu(t),mu(),xu(t),vu(t),gu(),re()),Zx(t),h.damageFlash>0&&(h.damageFlash=Math.max(0,h.damageFlash-t*1.5))}h.victory&&!h.started&&Fn.classList.remove("hidden"),LM(t),xd(),hM(),wr.render(Fe,un)}window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),wr.setSize(window.innerWidth,window.innerHeight)});Gc();$h();re();xd();bd();
