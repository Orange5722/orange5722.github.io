(()=>{var Qh=0,_c=1,jh=2;var yh=1,tu=2,Dn=3,oi=0,Ge=1,Ze=2,si=0,hn=1,ea=2,vc=3,Mc=4,Ma=5,wi=100,eu=101,nu=102,iu=103,su=104,ru=200,xr=201,au=202,ba=203,bo=204,is=205,ou=206,lu=207,Nl=208,cu=209,hu=210,uu=211,du=212,fu=213,pu=214,So=0,wo=1,Eo=2,ss=3,Ao=4,To=5,Co=6,Ro=7,_h=0,mu=1,gu=2,ri=0,xu=1,yu=2,_u=3,vu=4,Mu=5,bu=6,Su=7;var vh=300,rs=301,as=302,Io=303,Po=304,Sa=306,Ci=1e3,Nn=1001,fr=1002,Le=1003,wu=1004,Mh=1004,Cr=1005,bh=1005,ze=1006,Xa=1007,Sh=1007,Ti=1008,wh=1008,zn=1009,Eh=1010,Ah=1011,pr=1012,Fl=1013,Ri=1014,Fn=1015,yr=1016,Ol=1017,Bl=1018,os=1020,Th=35902,Ch=1021,Rh=1022,cn=1023,Ih=1024,Ph=1025,ts=1026,ls=1027,Lh=1028,kl=1029,Dh=1030,zl=1031;var Vl=1033,Jr=33776,Kr=33777,Qr=33778,jr=33779,Lo=35840,Do=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,Bo=37496,ko=37808,zo=37809,Vo=37810,Ho=37811,Go=37812,Wo=37813,Xo=37814,Yo=37815,qo=37816,Zo=37817,$o=37818,Jo=37819,Ko=37820,Qo=37821,ta=36492,jo=36494,tl=36495,Uh=36283,el=36284,nl=36285,il=36286;var na=2300,sl=2301,Ya=2302,bc=2400,Sc=2401,wc=2402;var Eu=3200,Au=3201;var Tu=0,Cu=1,ii="",Be="srgb",us="srgb-linear",wa="linear",se="srgb";var Bi=7680;var Ec=519,Ru=512,Iu=513,Pu=514,Nh=515,Lu=516,Du=517,Uu=518,Nu=519,rl=35044;var Ac="300 es",On=2e3,ia=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,al=180/Math.PI;function ai(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[r&255]+Re[r>>8&255]+Re[r>>16&255]+Re[r>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function He(r,t,e){return Math.max(t,Math.min(e,r))}function Fu(r,t){return(r%t+t)%t}function Za(r,t,e){return(1-e)*r+e*t}function xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ee=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,l=this.y-t.y;return this.x=s*n-l*i+t.x,this.y=s*i+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class r{constructor(t,e,n,i,s,l,o,a,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,l,o,a,c)}set(t,e,n,i,s,l,o,a,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=l,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,l=n[0],o=n[3],a=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],y=i[4],_=i[7],S=i[2],M=i[5],E=i[8];return s[0]=l*x+o*v+a*S,s[3]=l*m+o*y+a*M,s[6]=l*g+o*_+a*E,s[1]=c*x+h*v+u*S,s[4]=c*m+h*y+u*M,s[7]=c*g+h*_+u*E,s[2]=d*x+f*v+p*S,s[5]=d*m+f*y+p*M,s[8]=d*g+f*_+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],l=t[4],o=t[5],a=t[6],c=t[7],h=t[8];return e*l*h-e*o*c-n*s*h+n*o*a+i*s*c-i*l*a}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],l=t[4],o=t[5],a=t[6],c=t[7],h=t[8],u=h*l-o*c,d=o*a-h*s,f=c*s-l*a,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*l)*x,t[3]=d*x,t[4]=(h*e-i*a)*x,t[5]=(i*s-o*e)*x,t[6]=f*x,t[7]=(n*a-c*e)*x,t[8]=(l*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,l,o){let a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*l+c*o)+l+t,-i*c,i*a,-i*(-c*l+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$a=new Bt;function Fh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ou(){let r=sa("canvas");return r.style.display="block",r}var Tc={};function hr(r){r in Tc||(Tc[r]=!0,console.warn(r))}function Bu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ku(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zu(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Cc=[.64,.33,.3,.6,.15,.06],Rc=[.2126,.7152,.0722],Ic=[.3127,.329],Pc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[us]:{primaries:Cc,whitePoint:Ic,transfer:wa,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Cc,whitePoint:Ic,transfer:se,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:Rc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var ki,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=sa("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=Bn(s[l]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vu=0,ra=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,o=i.length;l<o;l++)i[l].isDataTexture?s.push(Ja(i[l].image)):s.push(Ja(i[l]))}else s=Ja(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ol.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,Ee=class r extends li{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Nn,i=Nn,s=ze,l=Ti,o=cn,a=zn,c=r.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ai(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ci:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ci:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=vh;Ee.DEFAULT_ANISOTROPY=1;var ge=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*e+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*e+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*e+l[7]*n+l[11]*i+l[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,a=t.elements,c=a[0],h=a[4],u=a[8],d=a[1],f=a[5],p=a[9],x=a[2],m=a[6],g=a[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(f+1)/2,S=(g+1)/2,M=(h+d)/4,E=(u+x)/4,A=(p+m)/4;return y>_&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=E/n):_>S?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=M/i,s=A/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=A/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ll=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let l=n.count;for(let o=0;o<l;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ra(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},aa=class extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,l,o){let a=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[l+0],f=s[l+1],p=s[l+2],x=s[l+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=x;return}if(u!==x||a!==d||c!==f||h!==p){let m=1-o,g=a*d+c*f+h*p+u*x,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let S=Math.sqrt(y),M=Math.atan2(S,g*v);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S}let _=o*v;if(a=a*m+d*_,c=c*m+f*_,h=h*m+p*_,u=u*m+x*_,m===1-o){let S=1/Math.sqrt(a*a+c*c+h*h+u*u);a*=S,c*=S,h*=S,u*=S}}t[e]=a,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,l){let o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],u=s[l],d=s[l+1],f=s[l+2],p=s[l+3];return t[e]=o*p+h*u+a*f-c*d,t[e+1]=a*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-a*u,t[e+3]=h*p-o*u-a*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,l=t._order,o=Math.cos,a=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=a(n/2),f=a(i/2),p=a(s/2);switch(l){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],l=e[1],o=e[5],a=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-a)*f,this._y=(s-c)*f,this._z=(l-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-a)/f,this._x=.25*f,this._y=(i+l)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+l)/f,this._y=.25*f,this._z=(a+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(l-i)/f,this._x=(s+c)/f,this._y=(a+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,l=t._w,o=e._x,a=e._y,c=e._z,h=e._w;return this._x=n*h+l*o+i*c-s*a,this._y=i*h+l*a+s*o-n*c,this._z=s*h+l*c+n*a-i*o,this._w=l*h-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,l=this._w,o=l*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let f=1-e;return this._w=f*l+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(a),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=l*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,l=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,l=t.y,o=t.z,a=t.w,c=2*(l*i-o*n),h=2*(o*e-s*i),u=2*(s*n-l*e);return this.x=e+a*c+l*u-o*h,this.y=n+a*h+o*c-s*u,this.z=i+a*u+s*h-l*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,l=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*l-n*a,this.z=n*o-i*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new q,Dc=new ci,Ii=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let l=0,o=s.count;l<o;l++)t.isMesh===!0?t.getVertexPosition(l,an):an.fromBufferAttribute(s,l),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let i=t.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Ir.subVectors(this.max,ar),zi.subVectors(t.a,ar),Vi.subVectors(t.b,ar),Hi.subVectors(t.c,ar),Kn.subVectors(Vi,zi),Qn.subVectors(Hi,Vi),xi.subVectors(zi,Hi);let e=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-xi.z,xi.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,xi.z,0,-xi.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-xi.y,xi.x,0];return!Qa(e,zi,Vi,Hi,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,zi,Vi,Hi,Ir))?!1:(Pr.crossVectors(Kn,Qn),e=[Pr.x,Pr.y,Pr.z],Qa(e,zi,Vi,Hi,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new q,new q,new q,new q,new q,new q,new q,new q],an=new q,Rr=new Ii,zi=new q,Vi=new q,Hi=new q,Kn=new q,Qn=new q,xi=new q,ar=new q,Ir=new q,Pr=new q,yi=new q;function Qa(r,t,e,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){yi.fromArray(r,s);let o=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),a=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>o)return!1}return!0}var Gu=new Ii,or=new q,ja=new q,mr=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,l=t.length;s<l;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);let e=or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(ja)),this.expandByPoint(or.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new q,to=new q,Lr=new q,jn=new q,eo=new q,Dr=new q,no=new q,hl=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){to.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(to);let s=t.distanceTo(e)*.5,l=-this.direction.dot(Lr),o=jn.dot(this.direction),a=-jn.dot(Lr),c=jn.lengthSq(),h=Math.abs(1-l*l),u,d,f,p;if(h>0)if(u=l*a-o,d=l*o-a,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+l*d+2*o)+d*(l*u+d+2*a)+c}else d=s,u=Math.max(0,-(l*d+o)),f=-u*u+d*(d+2*a)+c;else d=-s,u=Math.max(0,-(l*d+o)),f=-u*u+d*(d+2*a)+c;else d<=-p?(u=Math.max(0,-(-l*s+o)),d=u>0?-s:Math.min(Math.max(-s,-a),s),f=-u*u+d*(d+2*a)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-a),s),f=d*(d+2*a)+c):(u=Math.max(0,-(l*s+o)),d=u>0?s:Math.min(Math.max(-s,-a),s),f=-u*u+d*(d+2*a)+c);else d=l>0?-s:s,u=Math.max(0,-(l*d+o)),f=-u*u+d*(d+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(to).addScaledVector(Lr,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;let l=Math.sqrt(s-i),o=n-l,a=n+l;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,l,o,a,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,l=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,l=(t.min.y-d.y)*h),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),u>=0?(o=(t.min.z-d.z)*u,a=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,a=(t.min.z-d.z)*u),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){eo.subVectors(e,t),Dr.subVectors(n,t),no.crossVectors(eo,Dr);let l=this.direction.dot(no),o;if(l>0){if(i)return null;o=1}else if(l<0)o=-1,l=-l;else return null;jn.subVectors(this.origin,t);let a=o*this.direction.dot(Dr.crossVectors(jn,Dr));if(a<0)return null;let c=o*this.direction.dot(eo.cross(jn));if(c<0||a+c>l)return null;let h=-o*jn.dot(no);return h<0?null:this.at(h/l,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class r{constructor(t,e,n,i,s,l,o,a,c,h,u,d,f,p,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,l,o,a,c,h,u,d,f,p,x,m)}set(t,e,n,i,s,l,o,a,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=l,g[9]=o,g[13]=a,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),l=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,l=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=l*h,f=l*u,p=o*h,x=o*u;e[0]=a*h,e[4]=-a*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*a,e[2]=x-d*c,e[6]=p+f*c,e[10]=l*a}else if(t.order==="YXZ"){let d=a*h,f=a*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=l*c,e[1]=l*u,e[5]=l*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=l*a}else if(t.order==="ZXY"){let d=a*h,f=a*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-l*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=l*h,e[9]=x-d*o,e[2]=-l*c,e[6]=o,e[10]=l*a}else if(t.order==="ZYX"){let d=l*h,f=l*u,p=o*h,x=o*u;e[0]=a*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=a*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*a,e[10]=l*a}else if(t.order==="YZX"){let d=l*a,f=l*c,p=o*a,x=o*c;e[0]=a*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=l*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=l*a,f=l*c,p=o*a,x=o*c;e[0]=a*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=l*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){let i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),ti.crossVectors(n,Ye),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),ti.crossVectors(n,Ye)),ti.normalize(),Ur.crossVectors(Ye,ti),i[0]=ti.x,i[4]=Ur.x,i[8]=Ye.x,i[1]=ti.y,i[5]=Ur.y,i[9]=Ye.y,i[2]=ti.z,i[6]=Ur.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,l=n[0],o=n[4],a=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],y=n[7],_=n[11],S=n[15],M=i[0],E=i[4],A=i[8],w=i[12],b=i[1],C=i[5],U=i[9],L=i[13],I=i[2],D=i[6],N=i[10],H=i[14],V=i[3],Z=i[7],nt=i[11],at=i[15];return s[0]=l*M+o*b+a*I+c*V,s[4]=l*E+o*C+a*D+c*Z,s[8]=l*A+o*U+a*N+c*nt,s[12]=l*w+o*L+a*H+c*at,s[1]=h*M+u*b+d*I+f*V,s[5]=h*E+u*C+d*D+f*Z,s[9]=h*A+u*U+d*N+f*nt,s[13]=h*w+u*L+d*H+f*at,s[2]=p*M+x*b+m*I+g*V,s[6]=p*E+x*C+m*D+g*Z,s[10]=p*A+x*U+m*N+g*nt,s[14]=p*w+x*L+m*H+g*at,s[3]=v*M+y*b+_*I+S*V,s[7]=v*E+y*C+_*D+S*Z,s[11]=v*A+y*U+_*N+S*nt,s[15]=v*w+y*L+_*H+S*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],l=t[1],o=t[5],a=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+s*a*u-i*c*u-s*o*d+n*c*d+i*o*f-n*a*f)+x*(+e*a*f-e*c*d+s*l*d-i*l*f+i*c*h-s*a*h)+m*(+e*c*u-e*o*f-s*l*u+n*l*f+s*o*h-n*c*h)+g*(-i*o*h-e*a*u+e*o*d+i*l*u-n*l*d+n*a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],l=t[4],o=t[5],a=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=u*m*c-x*d*c+x*a*f-o*m*f-u*a*g+o*d*g,y=p*d*c-h*m*c-p*a*f+l*m*f+h*a*g-l*d*g,_=h*x*c-p*u*c+p*o*f-l*x*f-h*o*g+l*u*g,S=p*u*a-h*x*a-p*o*d+l*x*d+h*o*m-l*u*m,M=e*v+n*y+i*_+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return t[0]=v*E,t[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*g-n*d*g)*E,t[2]=(o*m*s-x*a*s+x*i*c-n*m*c-o*i*g+n*a*g)*E,t[3]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*f-n*a*f)*E,t[4]=y*E,t[5]=(h*m*s-p*d*s+p*i*f-e*m*f-h*i*g+e*d*g)*E,t[6]=(p*a*s-l*m*s-p*i*c+e*m*c+l*i*g-e*a*g)*E,t[7]=(l*d*s-h*a*s+h*i*c-e*d*c-l*i*f+e*a*f)*E,t[8]=_*E,t[9]=(p*u*s-h*x*s-p*n*f+e*x*f+h*n*g-e*u*g)*E,t[10]=(l*x*s-p*o*s+p*n*c-e*x*c-l*n*g+e*o*g)*E,t[11]=(h*o*s-l*u*s-h*n*c+e*u*c+l*n*f-e*o*f)*E,t[12]=S*E,t[13]=(h*x*i-p*u*i+p*n*d-e*x*d-h*n*m+e*u*m)*E,t[14]=(p*o*i-l*x*i-p*n*a+e*x*a+l*n*m-e*o*m)*E,t[15]=(l*u*i-h*o*i+h*n*a-e*u*a-l*n*d+e*o*d)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,l=t.x,o=t.y,a=t.z,c=s*l,h=s*o;return this.set(c*l+n,c*o-i*a,c*a+i*o,0,c*o+i*a,h*o+n,h*a-i*l,0,c*a-i*o,h*a+i*l,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,l){return this.set(1,n,s,0,t,1,l,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,l=e._y,o=e._z,a=e._w,c=s+s,h=l+l,u=o+o,d=s*c,f=s*h,p=s*u,x=l*h,m=l*u,g=o*u,v=a*c,y=a*h,_=a*u,S=n.x,M=n.y,E=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+_)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+g))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(p+y)*E,i[9]=(m-v)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),l=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);let c=1/s,h=1/l,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=s,n.y=l,n.z=o,this}makePerspective(t,e,n,i,s,l,o=On){let a=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,p;if(o===On)f=-(l+s)/(l-s),p=-2*l*s/(l-s);else if(o===ia)f=-l/(l-s),p=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=h,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,l,o=On){let a=this.elements,c=1/(e-t),h=1/(n-i),u=1/(l-s),d=(e+t)*c,f=(n+i)*h,p,x;if(o===On)p=(l+s)*u,x=-2*u;else if(o===ia)p=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=x,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new q,on=new _e,Wu=new q(0,0,0),Xu=new q(1,1,1),ti=new q,Ur=new q,Ye=new q,Uc=new _e,Nc=new ci,Hn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],l=i[4],o=i[8],a=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-l,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-l,c));break;case"YZX":this._z=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yu=0,Fc=new q,Wi=new ci,In=new _e,Nr=new q,lr=new q,qu=new q,Zu=new ci,Oc=new q(1,0,0),Bc=new q(0,1,0),kc=new q(0,0,1),zc={type:"added"},$u={type:"removed"},Xi={type:"childadded",child:null},io={type:"childremoved",child:null},Ue=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,e=new Hn,n=new ci,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Bt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(lr,Nr,this.up):In.lookAt(Nr,lr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(In),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){let u=a[c];s(t.shapes,u)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){let o=l(t.geometries),a=l(t.materials),c=l(t.textures),h=l(t.images),u=l(t.shapes),d=l(t.skeletons),f=l(t.animations),p=l(t.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function l(o){let a=[];for(let c in o){let h=o[c];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ue.DEFAULT_UP=new q(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new q,Pn=new q,so=new q,Ln=new q,Yi=new q,qi=new q,Vc=new q,ro=new q,ao=new q,oo=new q,lo=new ge,co=new ge,ho=new ge,Ei=class r{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),Pn.subVectors(n,e),so.subVectors(t,e);let l=ln.dot(ln),o=ln.dot(Pn),a=ln.dot(so),c=Pn.dot(Pn),h=Pn.dot(so),u=l*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*a-o*h)*d,p=(l*h-o*a)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,s,l,o,a){return this.getBarycoord(t,e,n,i,Ln)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Ln.x),a.addScaledVector(l,Ln.y),a.addScaledVector(o,Ln.z),a)}static getInterpolatedAttribute(t,e,n,i,s,l){return lo.setScalar(0),co.setScalar(0),ho.setScalar(0),lo.fromBufferAttribute(t,e),co.fromBufferAttribute(t,n),ho.fromBufferAttribute(t,i),l.setScalar(0),l.addScaledVector(lo,s.x),l.addScaledVector(co,s.y),l.addScaledVector(ho,s.z),l}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Pn.subVectors(t,e),ln.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,l,o;Yi.subVectors(i,n),qi.subVectors(s,n),ro.subVectors(t,n);let a=Yi.dot(ro),c=qi.dot(ro);if(a<=0&&c<=0)return e.copy(n);ao.subVectors(t,i);let h=Yi.dot(ao),u=qi.dot(ao);if(h>=0&&u<=h)return e.copy(i);let d=a*u-h*c;if(d<=0&&a>=0&&h<=0)return l=a/(a-h),e.copy(n).addScaledVector(Yi,l);oo.subVectors(t,s);let f=Yi.dot(oo),p=qi.dot(oo);if(p>=0&&f<=p)return e.copy(s);let x=f*c-a*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(qi,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Vc.subVectors(s,i),o=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Vc,o);let g=1/(m+x+d);return l=x*g,o=d*g,e.copy(n).addScaledVector(Yi,l).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function uo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Fu(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,l=2*n-s;this.r=uo(l,s,t+1/3),this.g=uo(l,s,t),this.b=uo(l,s,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,l=i[1],o=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return $t.fromWorkingColorSpace(Ie.copy(this),t),Math.round(He(Ie.r*255,0,255))*65536+Math.round(He(Ie.g*255,0,255))*256+Math.round(He(Ie.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,s=Ie.b,l=Math.max(n,i,s),o=Math.min(n,i,s),a,c,h=(o+l)/2;if(o===l)a=0,c=0;else{let u=l-o;switch(c=h<=.5?u/(l+o):u/(2-l-o),l){case n:a=(i-s)/u+(i<s?6:0);break;case i:a=(s-n)/u+2;break;case s:a=(n-i)/u+4;break}a/=6}return t.h=a,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Be){$t.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Fr);let n=Za(ei.h,Fr.h,e),i=Za(ei.s,Fr.s,e),s=Za(ei.l,Fr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Jt;Jt.NAMES=Oh;var Ju=0,yn=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=ai(),this.name="",this.blending=hn,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=is,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hn&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==is&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let l=[];for(let o in s){let a=s[o];delete a.metadata,l.push(a)}return l}if(e){let s=i(t.textures),l=i(t.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new q,Or=new ee,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var la=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ca=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kn=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ku=0,je=new _e,fo=new Ue,Zi=new q,qe=new Ii,cr=new Ii,Se=new q,Gn=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?ca:la)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let l=t[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new kn(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let s=0,l=e.length;s<l;s++){let o=e[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(qe.min,cr.min),qe.expandByPoint(Se),Se.addVectors(qe.max,cr.max),qe.expandByPoint(Se)):(qe.expandByPoint(cr.min),qe.expandByPoint(cr.max))}qe.getCenter(n);let i=0;for(let s=0,l=t.count;s<l;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,l=e.length;s<l;s++){let o=e[s],a=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),a&&(Zi.fromBufferAttribute(t,c),Se.add(Zi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let l=this.getAttribute("tangent"),o=[],a=[];for(let A=0;A<n.count;A++)o[A]=new q,a[A]=new q;let c=new q,h=new q,u=new q,d=new ee,f=new ee,p=new ee,x=new q,m=new q;function g(A,w,b){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[A].add(x),o[w].add(x),o[b].add(x),a[A].add(m),a[w].add(m),a[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,w=v.length;A<w;++A){let b=v[A],C=b.start,U=b.count;for(let L=C,I=C+U;L<I;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new q,_=new q,S=new q,M=new q;function E(A){S.fromBufferAttribute(i,A),M.copy(S);let w=o[A];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(M,w);let C=_.dot(a[A])<0?-1:1;l.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,w=v.length;A<w;++A){let b=v[A],C=b.start,U=b.count;for(let L=C,I=C+U;L<I;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new q,s=new q,l=new q,o=new q,a=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),l.fromBufferAttribute(e,m),h.subVectors(l,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),a.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),l.fromBufferAttribute(e,d+2),h.subVectors(l,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,a){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(a.length*h),f=0,p=0;for(let x=0,m=a.length;x<m;x++){o.isInterleavedBufferAttribute?f=a[x]*o.data.stride+o.offset:f=a[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let a=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let o=0,a=l.length;o<a;o++){let c=l[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let c=n[a];t.data.attributes[a]=c.toJSON(t.data)}let i={},s=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[a]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let c=0,h=l.length;c<h;c++){let u=l[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hc=new _e,_i=new hl,Br=new mr,Gc=new q,kr=new q,zr=new q,Vr=new q,po=new q,Hr=new q,Wc=new q,Gr=new q,Pe=class extends Ue{constructor(t=new Gn,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){Hr.set(0,0,0);for(let a=0,c=s.length;a<c;a++){let h=o[a],u=s[a];h!==0&&(po.fromBufferAttribute(u,t),l?Hr.addScaledVector(po,h):Hr.addScaledVector(po.sub(e),h))}e.add(Hr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(Br.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Br,Gc)===null||_i.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Hc.copy(s).invert(),_i.copy(t.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i,s=this.geometry,l=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(l))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=l[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=y;_<S;_+=3){let M=o.getX(_),E=o.getX(_+1),A=o.getX(_+2);i=Wr(this,g,t,n,c,h,u,M,E,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Wr(this,l,t,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(a!==void 0)if(Array.isArray(l))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=l[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=y;_<S;_+=3){let M=_,E=_+1,A=_+2;i=Wr(this,g,t,n,c,h,u,M,E,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,y=m+1,_=m+2;i=Wr(this,l,t,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Qu(r,t,e,n,i,s,l,o){let a;if(t.side===Ge?a=n.intersectTriangle(l,s,i,!0,o):a=n.intersectTriangle(i,s,l,t.side===oi,o),a===null)return null;Gr.copy(o),Gr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:r}}function Wr(r,t,e,n,i,s,l,o,a,c){r.getVertexPosition(o,kr),r.getVertexPosition(a,zr),r.getVertexPosition(c,Vr);let h=Qu(r,t,e,n,kr,zr,Vr,Wc);if(h){let u=new q;Ei.getBarycoord(Wc,kr,zr,Vr,u),i&&(h.uv=Ei.getInterpolatedAttribute(i,o,a,c,u,new ee)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,o,a,c,u,new ee)),l&&(h.normal=Ei.getInterpolatedAttribute(l,o,a,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:a,c,normal:new q,materialIndex:0};Ei.getNormal(kr,zr,Vr,d.normal),h.face=d,h.barycoord=u}return h}var gr=class r extends Gn{constructor(t=1,e=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};let o=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);let a=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,l,s,0),p("z","y","x",1,-1,n,e,-t,l,s,1),p("x","z","y",1,1,t,n,e,i,l,2),p("x","z","y",1,-1,t,n,-e,i,l,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(u,2));function p(x,m,g,v,y,_,S,M,E,A,w){let b=_/E,C=S/A,U=_/2,L=S/2,I=M/2,D=E+1,N=A+1,H=0,V=0,Z=new q;for(let nt=0;nt<N;nt++){let at=nt*C-L;for(let yt=0;yt<D;yt++){let rt=yt*b-U;Z[x]=rt*v,Z[m]=at*y,Z[g]=I,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=M>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(yt/E),u.push(1-nt/A),H+=1}}for(let nt=0;nt<A;nt++)for(let at=0;at<E;at++){let yt=d+at+D*nt,rt=d+at+D*(nt+1),G=d+(at+1)+D*(nt+1),J=d+(at+1)+D*nt;a.push(yt,rt,J),a.push(rt,G,J),V+=6}o.addGroup(f,V,w),f+=V,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(r){let t={};for(let e=0;e<r.length;e++){let n=cs(r[e]);for(let i in n)t[i]=n[i]}return t}function ju(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Bh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var td={clone:cs,merge:Oe},ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let l=this.uniforms[i].value;l&&l.isTexture?e.uniforms[i]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[i]={type:"m4",value:l.toArray()}:e.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ha=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new q,Xc=new ee,Yc=new ee,ke=class extends ha{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,Yc),e.subVectors(Yc,Xc)}setViewOffset(t,e,n,i,s,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,l=this.view;if(this.view!==null&&this.view.enabled){let a=l.fullWidth,c=l.fullHeight;s+=l.offsetX*i/a,e-=l.offsetY*n/c,i*=l.width/a,n*=l.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Ji=1,ul=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke($i,Ji,t,e);i.layers=this.layers,this.add(i);let s=new ke($i,Ji,t,e);s.layers=this.layers,this.add(s);let l=new ke($i,Ji,t,e);l.layers=this.layers,this.add(l);let o=new ke($i,Ji,t,e);o.layers=this.layers,this.add(o);let a=new ke($i,Ji,t,e);a.layers=this.layers,this.add(a);let c=new ke($i,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,l,o,a]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,l,o,a,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,l),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,a),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ua=class extends Ee{constructor(t,e,n,i,s,l,o,a,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rs,super(t,e,n,i,s,l,o,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dl=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ua(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:si});s.uniforms.tEquirect.value=e;let l=new Pe(i,s),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=ze),new ul(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,i);t.setRenderTarget(s)}},mo=new q,id=new q,sd=new Bt,Un=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mo.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sd.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new mr,Xr=new q,da=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,s=new Un,l=new Un){this.planes=[t,e,n,i,s,l]}set(t,e,n,i,s,l){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){let n=this.planes,i=t.elements,s=i[0],l=i[1],o=i[2],a=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],x=i[10],m=i[11],g=i[12],v=i[13],y=i[14],_=i[15];if(n[0].setComponents(a-s,d-c,m-f,_-g).normalize(),n[1].setComponents(a+s,d+c,m+f,_+g).normalize(),n[2].setComponents(a+l,d+h,m+p,_+v).normalize(),n[3].setComponents(a-l,d-h,m-p,_-v).normalize(),n[4].setComponents(a-o,d-u,m-x,_-y).normalize(),e===On)n[5].setComponents(a+o,d+u,m+x,_+y).normalize();else if(e===ia)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Xr.x=i.normal.x>0?t.max.x:t.min.x,Xr.y=i.normal.y>0?t.max.y:t.min.y,Xr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kh(){let r=null,t=!1,e=null,n=null;function i(s,l){e(s,l),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rd(r){let t=new WeakMap;function e(o,a){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(a,d),r.bufferData(a,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,a,c){let h=a.array,u=a.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let a=t.get(o);a&&(r.deleteBuffer(a.buffer),t.delete(o))}function l(o,a){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,a));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,a),c.version=o.version}}return{get:i,remove:s,update:l}}var Pi=class r extends Gn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,l=e/2,o=Math.floor(n),a=Math.floor(i),c=o+1,h=a+1,u=t/o,d=e/a,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-l;for(let y=0;y<c;y++){let _=y*u-s;p.push(_,-v,0),x.push(0,0,1),m.push(y/o),m.push(1-g/a)}}for(let g=0;g<a;g++)for(let v=0;v<o;v++){let y=v+c*g,_=v+c*(g+1),S=v+1+c*(g+1),M=v+1+c*g;f.push(y,_,M),f.push(_,S,M)}this.setIndex(f),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(x,3)),this.setAttribute("uv",new kn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_d=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,af=`
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,If=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,Sp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,Tp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:xd,bsdfs:yd,iridescence_fragment:_d,bumpmap_pars_fragment:vd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:wd,color_fragment:Ed,color_pars_fragment:Ad,color_pars_vertex:Td,color_vertex:Cd,common:Rd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:Bd,envmap_common_pars_fragment:kd,envmap_pars_fragment:zd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:Qd,envmap_vertex:Hd,fog_vertex:Gd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:Yd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Zd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Jd,lights_pars_begin:Kd,lights_toon_fragment:jd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:xf,metalnessmap_pars_fragment:yf,morphinstance_vertex:_f,morphcolor_vertex:vf,morphnormal_vertex:Mf,morphtarget_pars_vertex:bf,morphtarget_vertex:Sf,normal_fragment_begin:wf,normal_fragment_maps:Ef,normal_pars_fragment:Af,normal_pars_vertex:Tf,normal_vertex:Cf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:If,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:Bf,dithering_pars_fragment:kf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:Yf,skinning_pars_vertex:qf,skinning_vertex:Zf,skinnormal_vertex:$f,specularmap_fragment:Jf,specularmap_pars_fragment:Kf,tonemapping_fragment:Qf,tonemapping_pars_fragment:jf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:xp,linedashed_vert:yp,linedashed_frag:_p,meshbasic_vert:vp,meshbasic_frag:Mp,meshlambert_vert:bp,meshlambert_frag:Sp,meshmatcap_vert:wp,meshmatcap_frag:Ep,meshnormal_vert:Ap,meshnormal_frag:Tp,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Ip,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:Bp,sprite_frag:kp},ht={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},gn={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gn.physical={uniforms:Oe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Yr={r:0,b:0,g:0},Mi=new Hn,zp=new _e;function Vp(r,t,e,n,i,s,l){let o=new Jt(0),a=s===!0?0:1,c,h,u=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=p(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,l):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){let _=p(y);_&&(_.isCubeTexture||_.mapping===Sa)?(h===void 0&&(h=new Pe(new gr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:cs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(y.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(Mi)),h.material.toneMapped=$t.getTransfer(_.colorSpace)!==se,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pe(new Pi(2,2),new tn({name:"BackgroundMaterial",uniforms:cs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,y){v.getRGB(Yr,Bh(r)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,y,l)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:x,addToRenderList:m}}function Hp(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,l=!1;function o(b,C,U,L,I){let D=!1,N=u(L,U,C);s!==N&&(s=N,c(s.object)),D=f(b,L,U,I),D&&p(b,L,U,I),I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(D||l)&&(l=!1,_(b,C,U,L),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function a(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,C,U){let L=U.wireframe===!0,I=n[b.id];I===void 0&&(I={},n[b.id]=I);let D=I[C.id];D===void 0&&(D={},I[C.id]=D);let N=D[L];return N===void 0&&(N=d(a()),D[L]=N),N}function d(b){let C=[],U=[],L=[];for(let I=0;I<e;I++)C[I]=0,U[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:L,object:b,attributes:{},index:null}}function f(b,C,U,L){let I=s.attributes,D=C.attributes,N=0,H=U.getAttributes();for(let V in H)if(H[V].location>=0){let nt=I[V],at=D[V];if(at===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),nt===void 0||nt.attribute!==at||at&&nt.data!==at.data)return!0;N++}return s.attributesNum!==N||s.index!==L}function p(b,C,U,L){let I={},D=C.attributes,N=0,H=U.getAttributes();for(let V in H)if(H[V].location>=0){let nt=D[V];nt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor));let at={};at.attribute=nt,nt&&nt.data&&(at.data=nt.data),I[V]=at,N++}s.attributes=I,s.attributesNum=N,s.index=L}function x(){let b=s.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function m(b){g(b,0)}function g(b,C){let U=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;U[b]=1,L[b]===0&&(r.enableVertexAttribArray(b),L[b]=1),I[b]!==C&&(r.vertexAttribDivisor(b,C),I[b]=C)}function v(){let b=s.newAttributes,C=s.enabledAttributes;for(let U=0,L=C.length;U<L;U++)C[U]!==b[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function y(b,C,U,L,I,D,N){N===!0?r.vertexAttribIPointer(b,C,U,I,D):r.vertexAttribPointer(b,C,U,L,I,D)}function _(b,C,U,L){x();let I=L.attributes,D=U.getAttributes(),N=C.defaultAttributeValues;for(let H in D){let V=D[H];if(V.location>=0){let Z=I[H];if(Z===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){let nt=Z.normalized,at=Z.itemSize,yt=t.get(Z);if(yt===void 0)continue;let rt=yt.buffer,G=yt.type,J=yt.bytesPerElement,ft=G===r.INT||G===r.UNSIGNED_INT||Z.gpuType===Fl;if(Z.isInterleavedBufferAttribute){let ot=Z.data,gt=ot.stride,bt=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)g(V.location+Rt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let Rt=0;Rt<V.locationSize;Rt++)y(V.location+Rt,at/V.locationSize,G,nt,gt*J,(bt+at/V.locationSize*Rt)*J,ft)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)g(V.location+ot,Z.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);r.bindBuffer(r.ARRAY_BUFFER,rt);for(let ot=0;ot<V.locationSize;ot++)y(V.location+ot,at/V.locationSize,G,nt,at*J,at/V.locationSize*ot*J,ft)}}else if(N!==void 0){let nt=N[H];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(V.location,nt);break;case 3:r.vertexAttrib3fv(V.location,nt);break;case 4:r.vertexAttrib4fv(V.location,nt);break;default:r.vertexAttrib1fv(V.location,nt)}}}}v()}function S(){A();for(let b in n){let C=n[b];for(let U in C){let L=C[U];for(let I in L)h(L[I].object),delete L[I];delete C[U]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let U in C){let L=C[U];for(let I in L)h(L[I].object),delete L[I];delete C[U]}delete n[b.id]}function E(b){for(let C in n){let U=n[C];if(U[b.id]===void 0)continue;let L=U[b.id];for(let I in L)h(L[I].object),delete L[I];delete U[b.id]}}function A(){w(),l=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Gp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function l(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function a(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)l(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*d[x];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=l,this.renderMultiDraw=o,this.renderMultiDrawInstances=a}function Wp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(E){return!(E!==cn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let A=E===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==zn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fn&&!A)}function a(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:l,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:M}}function Xp(r){let t=this,e=null,n=0,i=!1,s=!1,l=new Un,o=new Bt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,y=v*4,_=g.clippingState||null;a.value=_,_=h(p,d,y,f);for(let S=0;S!==y;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=a.value,p!==!0||m===null){let g=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,_=f;y!==x;++y,_+=4)l.copy(u[y]).applyMatrix4(v,o),l.normal.toArray(m,_),m[_+3]=l.constant}a.value=m,a.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Yp(r){let t=new WeakMap;function e(l,o){return o===Io?l.mapping=rs:o===Po&&(l.mapping=as),l}function n(l){if(l&&l.isTexture){let o=l.mapping;if(o===Io||o===Po)if(t.has(l)){let a=t.get(l).texture;return e(a,l.mapping)}else{let a=l.image;if(a&&a.height>0){let c=new dl(a.height);return c.fromEquirectangularTexture(r,l),t.set(l,c),l.addEventListener("dispose",i),e(c.texture,l.mapping)}else return null}}return l}function i(l){let o=l.target;o.removeEventListener("dispose",i);let a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var fl=class extends ha{constructor(t=-1,e=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,l=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,l=s+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,qc=[.125,.215,.35,.446,.526,.582],Ai=20,go=new fl,Zc=new Jt,xo=null,yo=0,_o=0,vo=!1,Si=(1+Math.sqrt(5))/2,Ki=1/Si,$c=[new q(-Si,Ki,0),new q(Si,Ki,0),new q(-Ki,0,Si),new q(Ki,0,Si),new q(0,Si,-Ki),new q(0,Si,Ki),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,yo,_o),this._renderer.xr.enabled=vo,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:yr,format:cn,colorSpace:us,depthBuffer:!1},i=Jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(s)),this._blurMaterial=Zp(s,t,e)}return i}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,i){let o=new ke(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zc),h.toneMapping=ri,h.autoClear=!1;let f=new _n({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),p=new Pe(new gr,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Zc),x=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(o.up.set(0,a[g],0),o.lookAt(c[g],0,0)):v===1?(o.up.set(0,0,a[g]),o.lookAt(0,c[g],0)):(o.up.set(0,a[g],0),o.lookAt(0,0,c[g]));let y=this._cubeSize;qr(i,v*y,g>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===rs||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let s=i?this._cubemapMaterial:this._equirectMaterial,l=new Pe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let a=this._cubeSize;qr(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(l,go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$c[(i-s-1)%$c.length];this._blur(t,s-1,s,l,o)}e.autoClear=n}_blur(t,e,n,i,s){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,i,"latitudinal",s),this._halfBlur(l,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,l,o){let a=this._renderer,c=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),x=s/p,m=isFinite(s)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let g=[],v=0;for(let E=0;E<Ai;++E){let A=E/x,w=Math.exp(-A*A/2);g.push(w),E===0?v+=w:E<m&&(v+=2*w)}for(let E=0;E<g.length;E++)g[E]=g[E]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=l==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;let _=this._sizeLods[i],S=3*_*(i>y-Qi?i-y+Qi:0),M=4*(this._cubeSize-_);qr(e,S,M,3*_,2*_),a.setRenderTarget(e),a.render(u,go)}};function qp(r){let t=[],e=[],n=[],i=r,s=r-Qi+1+qc.length;for(let l=0;l<s;l++){let o=Math.pow(2,i);e.push(o);let a=1/o;l>r-Qi?a=qc[l-r+Qi-1]:l===0&&(a=0),n.push(a);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,m=2,g=1,v=new Float32Array(x*p*f),y=new Float32Array(m*p*f),_=new Float32Array(g*p*f);for(let M=0;M<f;M++){let E=M%3*2/3-1,A=M>2?0:-1,w=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(w,x*p*M),y.set(d,m*p*M);let b=[M,M,M,M,M,M];_.set(b,g*p*M)}let S=new Gn;S.setAttribute("position",new De(v,x)),S.setAttribute("uv",new De(y,m)),S.setAttribute("faceIndex",new De(_,g)),t.push(S),i>Qi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jc(r,t,e){let n=new Vn(r,t,e);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Zp(r,t,e){let n=new Float32Array(Ai),i=new q(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Kc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function $p(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let a=o.mapping,c=a===Io||a===Po,h=a===rs||a===as;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new fa(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new fa(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let a=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&a++;return a===c}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function Jp(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kp(r,t,e,n){let i={},s=new WeakMap;function l(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}d.removeEventListener("dispose",l),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",l),i[d.id]=!0,e.memory.geometries++),d}function a(u){let d=u.attributes;for(let p in d)t.update(d[p],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let S=v[y+0],M=v[y+1],E=v[y+2];d.push(S,M,M,E,E,S)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let S=y+0,M=y+1,E=y+2;d.push(S,M,M,E,E,S)}}else return;let m=new(Fh(d)?ca:la)(d,1);m.version=x;let g=s.get(u);g&&t.remove(g),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:a,getWireframeAttribute:h}}function Qp(r,t,e){let n;function i(d){n=d}let s,l;function o(d){s=d.type,l=d.bytesPerElement}function a(d,f){r.drawElements(n,f,s,d*l),e.update(f,n,1)}function c(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*l,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function u(d,f,p,x){if(p===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/l,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v]*x[v];e.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jp(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,o){switch(e.calls++,l){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tm(r,t,e){let n=new WeakMap,i=new ge;function s(l,o,a){let c=l.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let M=new Float32Array(_*S*4*u),E=new aa(M,_,S,u);E.type=Fn,E.needsUpdate=!0;let A=y*4;for(let b=0;b<u;b++){let C=m[b],U=g[b],L=v[b],I=_*S*4*b;for(let D=0;D<C.count;D++){let N=D*A;f===!0&&(i.fromBufferAttribute(C,D),M[I+N+0]=i.x,M[I+N+1]=i.y,M[I+N+2]=i.z,M[I+N+3]=0),p===!0&&(i.fromBufferAttribute(U,D),M[I+N+4]=i.x,M[I+N+5]=i.y,M[I+N+6]=i.z,M[I+N+7]=0),x===!0&&(i.fromBufferAttribute(L,D),M[I+N+8]=i.x,M[I+N+9]=i.y,M[I+N+10]=i.z,M[I+N+11]=L.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new ee(_,S)},n.set(o,d),o.addEventListener("dispose",w)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",l.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;a.getUniforms().setValue(r,"morphTargetBaseInfluence",p),a.getUniforms().setValue(r,"morphTargetInfluences",c)}a.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),a.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function em(r,t,e,n){let i=new WeakMap;function s(a){let c=n.render.frame,h=a.geometry,u=t.get(a,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),i.get(a)!==c&&(e.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,c))),a.isSkinnedMesh){let d=a.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function l(){i=new WeakMap}function o(a){let c=a.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:l}}var pa=class extends Ee{constructor(t,e,n,i,s,l,o,a,c,h=ts){if(h!==ts&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Ri),n===void 0&&h===ls&&(n=os),super(null,i,s,l,o,a,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=a!==void 0?a:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zh=new Ee,jc=new pa(1,1),Vh=new aa,Hh=new cl,Gh=new ua,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function ds(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=th[i];if(s===void 0&&(s=new Float32Array(i),th[i]=s),t!==0){n.toArray(s,0);for(let l=1,o=0;l!==t;++l)o+=e,r[l].toArray(s,o)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ea(r,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function im(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function sm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function rm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function am(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;sh.set(n),r.uniformMatrix2fv(this.addr,!1,sh),Me(e,n)}}function om(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;ih.set(n),r.uniformMatrix3fv(this.addr,!1,ih),Me(e,n)}}function lm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;nh.set(n),r.uniformMatrix4fv(this.addr,!1,nh),Me(e,n)}}function cm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function um(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function dm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function fm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function mm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function xm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jc.compareFunction=Nh,s=jc):s=zh,e.setTexture2D(t||s,i)}function ym(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hh,i)}function _m(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gh,i)}function vm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vh,i)}function Mm(r){switch(r){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}function bm(r,t){r.uniform1fv(this.addr,t)}function Sm(r,t){let e=ds(t,this.size,2);r.uniform2fv(this.addr,e)}function wm(r,t){let e=ds(t,this.size,3);r.uniform3fv(this.addr,e)}function Em(r,t){let e=ds(t,this.size,4);r.uniform4fv(this.addr,e)}function Am(r,t){let e=ds(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Tm(r,t){let e=ds(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Cm(r,t){let e=ds(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rm(r,t){r.uniform1iv(this.addr,t)}function Im(r,t){r.uniform2iv(this.addr,t)}function Pm(r,t){r.uniform3iv(this.addr,t)}function Lm(r,t){r.uniform4iv(this.addr,t)}function Dm(r,t){r.uniform1uiv(this.addr,t)}function Um(r,t){r.uniform2uiv(this.addr,t)}function Nm(r,t){r.uniform3uiv(this.addr,t)}function Fm(r,t){r.uniform4uiv(this.addr,t)}function Om(r,t,e){let n=this.cache,i=t.length,s=Ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let l=0;l!==i;++l)e.setTexture2D(t[l]||zh,s[l])}function Bm(r,t,e){let n=this.cache,i=t.length,s=Ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let l=0;l!==i;++l)e.setTexture3D(t[l]||Hh,s[l])}function km(r,t,e){let n=this.cache,i=t.length,s=Ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let l=0;l!==i;++l)e.setTextureCube(t[l]||Gh,s[l])}function zm(r,t,e){let n=this.cache,i=t.length,s=Ea(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let l=0;l!==i;++l)e.setTexture2DArray(t[l]||Vh,s[l])}function Vm(r){switch(r){case 5126:return bm;case 35664:return Sm;case 35665:return wm;case 35666:return Em;case 35674:return Am;case 35675:return Tm;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return zm}}var pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}},ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}},gl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,l=i.length;s!==l;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Mo=/(\w+)(\])?(\[|\.)?/g;function rh(r,t){r.seq.push(t),r.map[t.id]=t}function Hm(r,t,e){let n=r.name,i=n.length;for(Mo.lastIndex=0;;){let s=Mo.exec(n),l=Mo.lastIndex,o=s[1],a=s[2]==="]",c=s[3];if(a&&(o=o|0),c===void 0||c==="["&&l+2===i){rh(e,c===void 0?new pl(o,r,t):new ml(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new gl(o),rh(e,u)),e=u}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),l=t.getUniformLocation(e,s.name);Hm(s,l,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,l=e.length;s!==l;++s){let o=e[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let l=t[i];l.id in e&&n.push(l)}return n}};function ah(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Gm=37297,Wm=0;function Xm(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let l=i;l<s;l++){let o=l+1;n.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return n.join(`
`)}var oh=new Bt;function Ym(r){$t._getMatrix(oh,$t.workingColorSpace,r);let t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(r)){case wa:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function lh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let l=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Xm(r.getShaderSource(t),l)}else return i}function qm(r,t){let e=Ym(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zm(r,t){let e;switch(t){case xu:e="Linear";break;case yu:e="Reinhard";break;case _u:e="Cineon";break;case vu:e="ACESFilmic";break;case bu:e="AgX";break;case Su:e="Neutral";break;case Mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zr=new q;function $m(){$t.getLuminanceCoefficients(Zr);let r=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Km(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qm(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),l=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[l]={type:s.type,location:r.getAttribLocation(t,l),locationSize:o}}return e}function ur(r){return r!==""}function ch(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(r){return r.replace(jm,eg)}var tg=new Map;function eg(r,t){let e=Vt[t];if(e===void 0){let n=tg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(ng,ig)}function ig(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function og(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case mu:t="ENVMAP_BLENDING_MIX";break;case gu:t="ENVMAP_BLENDING_ADD";break}return t}function lg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cg(r,t,e,n){let i=r.getContext(),s=e.defines,l=e.vertexShader,o=e.fragmentShader,a=sg(e),c=rg(e),h=ag(e),u=og(e),d=lg(e),f=Jm(e),p=Km(s),x=i.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),g.length>0&&(g+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),g=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),l=xl(l),l=ch(l,e),l=hh(l,e),o=xl(o),o=ch(o,e),o=hh(o,e),l=uh(l),o=uh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=v+m+l,_=v+g+o,S=ah(i,i.VERTEX_SHADER,y),M=ah(i,i.FRAGMENT_SHADER,_);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(C){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(M).trim(),D=!0,N=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,M);else{let H=lh(i,S,"vertex"),V=lh(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+H+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||I==="")&&(N=!1);N&&(C.diagnostics={runnable:D,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:I,prefix:g}})}i.deleteShader(S),i.deleteShader(M),A=new ns(i,x),w=Qm(i,x)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Gm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var hg=0,yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _l(t),e.set(t,n)),n}},_l=class{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}};function ug(r,t,e,n,i,s,l){let o=new oa,a=new yl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,C,U,L){let I=U.fog,D=L.geometry,N=w.isMeshStandardMaterial?U.environment:null,H=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),V=H&&H.mapping===Sa?H.image.height:null,Z=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let nt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,at=nt!==void 0?nt.length:0,yt=0;D.morphAttributes.position!==void 0&&(yt=1),D.morphAttributes.normal!==void 0&&(yt=2),D.morphAttributes.color!==void 0&&(yt=3);let rt,G,J,ft;if(Z){let ie=gn[Z];rt=ie.vertexShader,G=ie.fragmentShader}else rt=w.vertexShader,G=w.fragmentShader,a.update(w),J=a.getVertexShaderID(w),ft=a.getFragmentShaderID(w);let ot=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),bt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,Kt=!!w.map,Ht=!!w.matcap,de=!!H,B=!!w.aoMap,Te=!!w.lightMap,Gt=!!w.bumpMap,Wt=!!w.normalMap,It=!!w.displacementMap,ne=!!w.emissiveMap,Pt=!!w.metalnessMap,P=!!w.roughnessMap,T=w.anisotropy>0,W=w.clearcoat>0,j=w.dispersion>0,st=w.iridescence>0,Q=w.sheen>0,Tt=w.transmission>0,dt=T&&!!w.anisotropyMap,_t=W&&!!w.clearcoatMap,Zt=W&&!!w.clearcoatNormalMap,lt=W&&!!w.clearcoatRoughnessMap,vt=st&&!!w.iridescenceMap,Lt=st&&!!w.iridescenceThicknessMap,Dt=Q&&!!w.sheenColorMap,Mt=Q&&!!w.sheenRoughnessMap,qt=!!w.specularMap,zt=!!w.specularColorMap,oe=!!w.specularIntensityMap,O=Tt&&!!w.transmissionMap,ut=Tt&&!!w.thicknessMap,$=!!w.gradientMap,tt=!!w.alphaMap,xt=w.alphaTest>0,pt=!!w.alphaHash,Ft=!!w.extensions,pe=ri;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ce={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:G,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:us,alphaToCoverage:!!w.alphaToCoverage,map:Kt,matcap:Ht,envMap:de,envMapMode:de&&H.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Te,bumpMap:Gt,normalMap:Wt,displacementMap:d&&It,emissiveMap:ne,normalMapObjectSpace:Wt&&w.normalMapType===Cu,normalMapTangentSpace:Wt&&w.normalMapType===Tu,metalnessMap:Pt,roughnessMap:P,anisotropy:T,anisotropyMap:dt,clearcoat:W,clearcoatMap:_t,clearcoatNormalMap:Zt,clearcoatRoughnessMap:lt,dispersion:j,iridescence:st,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:qt,specularColorMap:zt,specularIntensityMap:oe,transmission:Tt,transmissionMap:O,thicknessMap:ut,gradientMap:$,opaque:w.transparent===!1&&w.blending===hn&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:xt,alphaHash:pt,combine:w.combine,mapUv:Kt&&x(w.map.channel),aoMapUv:B&&x(w.aoMap.channel),lightMapUv:Te&&x(w.lightMap.channel),bumpMapUv:Gt&&x(w.bumpMap.channel),normalMapUv:Wt&&x(w.normalMap.channel),displacementMapUv:It&&x(w.displacementMap.channel),emissiveMapUv:ne&&x(w.emissiveMap.channel),metalnessMapUv:Pt&&x(w.metalnessMap.channel),roughnessMapUv:P&&x(w.roughnessMap.channel),anisotropyMapUv:dt&&x(w.anisotropyMap.channel),clearcoatMapUv:_t&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(w.sheenRoughnessMap.channel),specularMapUv:qt&&x(w.specularMap.channel),specularColorMapUv:zt&&x(w.specularColorMap.channel),specularIntensityMapUv:oe&&x(w.specularIntensityMap.channel),transmissionMapUv:O&&x(w.transmissionMap.channel),thicknessMapUv:ut&&x(w.thicknessMap.channel),alphaMapUv:tt&&x(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Wt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Kt||tt),fog:!!I,useFog:w.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:Kt&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===se,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===se,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===Ge,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)b.push(C),b.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(v(b,w),y(b,w),b.push(r.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let b=p[w.type],C;if(b){let U=gn[b];C=td.clone(U.uniforms)}else C=w.uniforms;return C}function S(w,b){let C;for(let U=0,L=h.length;U<L;U++){let I=h[U];if(I.cacheKey===b){C=I,++C.usedTimes;break}}return C===void 0&&(C=new cg(r,b,w,s),h.push(C)),C}function M(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function E(w){a.remove(w)}function A(){a.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:h,dispose:A}}function dg(){let r=new WeakMap;function t(l){return r.has(l)}function e(l){let o=r.get(l);return o===void 0&&(o={},r.set(l,o)),o}function n(l){r.delete(l)}function i(l,o,a){r.get(l)[o]=a}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function fg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ph(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function l(u,d,f,p,x,m){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:m},r[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=x,g.group=m),t++,g}function o(u,d,f,p,x,m){let g=l(u,d,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):e.push(g)}function a(u,d,f,p,x,m){let g=l(u,d,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(d||fh),i.length>1&&i.sort(d||fh)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:c}}function pg(){let r=new WeakMap;function t(n,i){let s=r.get(n),l;return s===void 0?(l=new ph,r.set(n,[l])):i>=s.length?(l=new ph,s.push(l)):l=s[i],l}function e(){r=new WeakMap}return{get:t,dispose:e}}function mg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Jt};break;case"SpotLight":e={position:new q,direction:new q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function gg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var xg=0;function yg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _g(r){let t=new mg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,s=new _e,l=new _e;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,y=0,_=0,S=0,M=0,E=0;c.sort(yg);for(let w=0,b=c.length;w<b;w++){let C=c[w],U=C.color,L=C.intensity,I=C.distance,D=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*L,u+=U.g*L,d+=U.b*L;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],L);E++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,V=e.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=N,f++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(U).multiplyScalar(L),N.distance=I,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[x]=N;let H=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,H.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[x]=H.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=D,_++}x++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(U).multiplyScalar(L),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let H=C.shadow,V=e.get(C);V.shadowIntensity=H.intensity,V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=N,p++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(L),N.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==g||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==S||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,A.directionalLength=f,A.pointLength=p,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=g,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=S,A.numLightProbes=E,n.version=xg++)}function a(c,h){let u=0,d=0,f=0,p=0,x=0,m=h.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){let y=c[g];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),l.identity(),s.copy(y.matrixWorld),s.premultiply(m),l.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(l),_.halfHeight.applyMatrix4(l),p++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:a,state:n}}function mh(r){let t=new _g(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function l(h){n.push(h)}function o(){t.setup(e)}function a(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:a,pushLight:s,pushShadow:l}}function vg(r){let t=new WeakMap;function e(i,s=0){let l=t.get(i),o;return l===void 0?(o=new mh(r),t.set(i,[o])):s>=l.length?(o=new mh(r),l.push(o)):o=l[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var vl=class extends yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Sg(r,t,e){let n=new da,i=new ee,s=new ee,l=new ge,o=new vl({depthPacking:Au}),a=new Ml,c={},h=e.maxTextureSize,u={[oi]:Ge,[Ge]:oi,[Ze]:Ze},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Mg,fragmentShader:bg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Gn;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let g=this.type;this.render=function(M,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let w=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let L=g!==Dn&&this.type===Dn,I=g===Dn&&this.type!==Dn;for(let D=0,N=M.length;D<N;D++){let H=M[D],V=H.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||L===!0||I===!0){let at=this.type!==Dn?{minFilter:Le,magFilter:Le}:{};V.map!==null&&V.map.dispose(),V.map=new Vn(i.x,i.y,at),V.map.texture.name=H.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let nt=V.getViewportCount();for(let at=0;at<nt;at++){let yt=V.getViewport(at);l.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),U.viewport(l),V.updateMatrices(H,at),n=V.getFrustum(),_(E,A,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Dn&&v(V,A),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(w,b,C)};function v(M,E){let A=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,A,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,A,f,x,null)}function y(M,E,A,w){let b=null,C=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)b=C;else if(b=A.isPointLight===!0?a:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let U=b.uuid,L=E.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let D=I[L];D===void 0&&(D=b.clone(),I[L]=D,E.addEventListener("dispose",S)),b=D}if(b.visible=E.visible,b.wireframe=E.wireframe,w===Dn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=r.properties.get(b);U.light=A}return b}function _(M,E,A,w,b){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Dn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let L=t.update(M),I=M.material;if(Array.isArray(I)){let D=L.groups;for(let N=0,H=D.length;N<H;N++){let V=D[N],Z=I[V.materialIndex];if(Z&&Z.visible){let nt=y(M,Z,w,b);M.onBeforeShadow(r,M,E,A,L,nt,V),r.renderBufferDirect(A,null,L,nt,M,V),M.onAfterShadow(r,M,E,A,L,nt,V)}}}else if(I.visible){let D=y(M,I,w,b);M.onBeforeShadow(r,M,E,A,L,D,null),r.renderBufferDirect(A,null,L,D,M,null),M.onAfterShadow(r,M,E,A,L,D,null)}}let U=M.children;for(let L=0,I=U.length;L<I;L++)_(U[L],E,A,w,b)}function S(M){M.target.removeEventListener("dispose",S);for(let A in c){let w=c[A],b=M.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var wg={[So]:wo,[Eo]:Co,[Ao]:Ro,[ss]:To,[wo]:So,[Co]:Eo,[Ro]:Ao,[To]:ss};function Eg(r,t){function e(){let O=!1,ut=new ge,$=null,tt=new ge(0,0,0,0);return{setMask:function(xt){$!==xt&&!O&&(r.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){O=xt},setClear:function(xt,pt,Ft,pe,Ce){Ce===!0&&(xt*=pe,pt*=pe,Ft*=pe),ut.set(xt,pt,Ft,pe),tt.equals(ut)===!1&&(r.clearColor(xt,pt,Ft,pe),tt.copy(ut))},reset:function(){O=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,ut=!1,$=null,tt=null,xt=null;return{setReversed:function(pt){if(ut!==pt){let Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let pe=xt;xt=null,this.setClear(pe)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?ot(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(pt){$!==pt&&!O&&(r.depthMask(pt),$=pt)},setFunc:function(pt){if(ut&&(pt=wg[pt]),tt!==pt){switch(pt){case So:r.depthFunc(r.NEVER);break;case wo:r.depthFunc(r.ALWAYS);break;case Eo:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case Ao:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case Co:r.depthFunc(r.GREATER);break;case Ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=pt}},setLocked:function(pt){O=pt},setClear:function(pt){xt!==pt&&(ut&&(pt=1-pt),r.clearDepth(pt),xt=pt)},reset:function(){O=!1,$=null,tt=null,xt=null,ut=!1}}}function i(){let O=!1,ut=null,$=null,tt=null,xt=null,pt=null,Ft=null,pe=null,Ce=null;return{setTest:function(ie){O||(ie?ot(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!O&&(r.stencilMask(ie),ut=ie)},setFunc:function(ie,sn,An){($!==ie||tt!==sn||xt!==An)&&(r.stencilFunc(ie,sn,An),$=ie,tt=sn,xt=An)},setOp:function(ie,sn,An){(pt!==ie||Ft!==sn||pe!==An)&&(r.stencilOp(ie,sn,An),pt=ie,Ft=sn,pe=An)},setLocked:function(ie){O=ie},setClear:function(ie){Ce!==ie&&(r.clearStencil(ie),Ce=ie)},reset:function(){O=!1,ut=null,$=null,tt=null,xt=null,pt=null,Ft=null,pe=null,Ce=null}}}let s=new e,l=new n,o=new i,a=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,v=null,y=null,_=null,S=null,M=null,E=new Jt(0,0,0),A=0,w=!1,b=null,C=null,U=null,L=null,I=null,D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=H>=2);let Z=null,nt={},at=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),rt=new ge().fromArray(at),G=new ge().fromArray(yt);function J(O,ut,$,tt){let xt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(O,pt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<$;Ft++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ut+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return pt}let ft={};ft[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ft[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ft[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),o.setClear(0),ot(r.DEPTH_TEST),l.setFunc(ss),Gt(!1),Wt(_c),ot(r.CULL_FACE),B(si);function ot(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function gt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function bt(O,ut){return u[O]!==ut?(r.bindFramebuffer(O,ut),u[O]=ut,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Rt(O,ut){let $=f,tt=!1;if(O){$=d.get(ut),$===void 0&&($=[],d.set(ut,$));let xt=O.textures;if($.length!==xt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Ft=xt.length;pt<Ft;pt++)$[pt]=r.COLOR_ATTACHMENT0+pt;$.length=xt.length,tt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,tt=!0);tt&&r.drawBuffers($)}function Kt(O){return p!==O?(r.useProgram(O),p=O,!0):!1}let Ht={[wi]:r.FUNC_ADD,[eu]:r.FUNC_SUBTRACT,[nu]:r.FUNC_REVERSE_SUBTRACT};Ht[iu]=r.MIN,Ht[su]=r.MAX;let de={[ru]:r.ZERO,[xr]:r.ONE,[au]:r.SRC_COLOR,[bo]:r.SRC_ALPHA,[hu]:r.SRC_ALPHA_SATURATE,[Nl]:r.DST_COLOR,[ou]:r.DST_ALPHA,[ba]:r.ONE_MINUS_SRC_COLOR,[is]:r.ONE_MINUS_SRC_ALPHA,[cu]:r.ONE_MINUS_DST_COLOR,[lu]:r.ONE_MINUS_DST_ALPHA,[uu]:r.CONSTANT_COLOR,[du]:r.ONE_MINUS_CONSTANT_COLOR,[fu]:r.CONSTANT_ALPHA,[pu]:r.ONE_MINUS_CONSTANT_ALPHA};function B(O,ut,$,tt,xt,pt,Ft,pe,Ce,ie){if(O===si){x===!0&&(gt(r.BLEND),x=!1);return}if(x===!1&&(ot(r.BLEND),x=!0),O!==Ma){if(O!==m||ie!==w){if((g!==wi||_!==wi)&&(r.blendEquation(r.FUNC_ADD),g=wi,_=wi),ie)switch(O){case hn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFunc(r.ONE,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case hn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ea:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,S=null,M=null,E.set(0,0,0),A=0,m=O,w=ie}return}xt=xt||ut,pt=pt||$,Ft=Ft||tt,(ut!==g||xt!==_)&&(r.blendEquationSeparate(Ht[ut],Ht[xt]),g=ut,_=xt),($!==v||tt!==y||pt!==S||Ft!==M)&&(r.blendFuncSeparate(de[$],de[tt],de[pt],de[Ft]),v=$,y=tt,S=pt,M=Ft),(pe.equals(E)===!1||Ce!==A)&&(r.blendColor(pe.r,pe.g,pe.b,Ce),E.copy(pe),A=Ce),m=O,w=!1}function Te(O,ut){O.side===Ze?gt(r.CULL_FACE):ot(r.CULL_FACE);let $=O.side===Ge;ut&&($=!$),Gt($),O.blending===hn&&O.transparent===!1?B(si):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),s.setMask(O.colorWrite);let tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(O){b!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),b=O)}function Wt(O){O!==Qh?(ot(r.CULL_FACE),O!==C&&(O===_c?r.cullFace(r.BACK):O===jh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),C=O}function It(O){O!==U&&(N&&r.lineWidth(O),U=O)}function ne(O,ut,$){O?(ot(r.POLYGON_OFFSET_FILL),(L!==ut||I!==$)&&(r.polygonOffset(ut,$),L=ut,I=$)):gt(r.POLYGON_OFFSET_FILL)}function Pt(O){O?ot(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function P(O){O===void 0&&(O=r.TEXTURE0+D-1),Z!==O&&(r.activeTexture(O),Z=O)}function T(O,ut,$){$===void 0&&(Z===null?$=r.TEXTURE0+D-1:$=Z);let tt=nt[$];tt===void 0&&(tt={type:void 0,texture:void 0},nt[$]=tt),(tt.type!==O||tt.texture!==ut)&&(Z!==$&&(r.activeTexture($),Z=$),r.bindTexture(O,ut||ft[O]),tt.type=O,tt.texture=ut)}function W(){let O=nt[Z];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(O){rt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function Mt(O){G.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function qt(O,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let tt=$.get(O);tt===void 0&&(tt=r.getUniformBlockIndex(ut,O.name),$.set(O,tt))}function zt(O,ut){let tt=c.get(ut).get(O);a.get(ut)!==tt&&(r.uniformBlockBinding(ut,tt,O.__bindingPointIndex),a.set(ut,tt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),l.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,nt={},u={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,v=null,y=null,_=null,S=null,M=null,E=new Jt(0,0,0),A=0,w=!1,b=null,C=null,U=null,L=null,I=null,rt.set(0,0,r.canvas.width,r.canvas.height),G.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),o.reset()}return{buffers:{color:s,depth:l,stencil:o},enable:ot,disable:gt,bindFramebuffer:bt,drawBuffers:Rt,useProgram:Kt,setBlending:B,setMaterial:Te,setFlipSided:Gt,setCullFace:Wt,setLineWidth:It,setPolygonOffset:ne,setScissorTest:Pt,activeTexture:P,bindTexture:T,unbindTexture:W,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:vt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Zt,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Dt,viewport:Mt,reset:oe}}function gh(r,t,e,n){let i=Ag(n);switch(e){case Ch:return r*t;case Ih:return r*t;case Ph:return r*t*2;case Lh:return r*t/i.components*i.byteLength;case kl:return r*t/i.components*i.byteLength;case Dh:return r*t*2/i.components*i.byteLength;case zl:return r*t*2/i.components*i.byteLength;case Rh:return r*t*3/i.components*i.byteLength;case cn:return r*t*4/i.components*i.byteLength;case Vl:return r*t*4/i.components*i.byteLength;case Jr:case Kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(r,16)*Math.max(t,8)/4;case Lo:case Uo:return Math.max(r,8)*Math.max(t,8)/2;case Fo:case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ta:case jo:case tl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Uh:case el:return Math.ceil(r/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(r){switch(r){case zn:case Eh:return{byteLength:1,components:1};case pr:case Ah:case yr:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case Ri:case Fl:case Fn:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Tg(r,t,e,n,i,s,l){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return f?new OffscreenCanvas(P,T):sa("canvas")}function x(P,T,W){let j=1,st=Pt(P);if((st.width>W||st.height>W)&&(j=W/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(j*st.width),Tt=Math.floor(j*st.height);u===void 0&&(u=p(Q,Tt));let dt=T?p(Q,Tt):u;return dt.width=Q,dt.height=Tt,dt.getContext("2d").drawImage(P,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Tt+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,T,W,j,st=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=T;if(T===r.RED&&(W===r.FLOAT&&(Q=r.R32F),W===r.HALF_FLOAT&&(Q=r.R16F),W===r.UNSIGNED_BYTE&&(Q=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(Q=r.R8UI),W===r.UNSIGNED_SHORT&&(Q=r.R16UI),W===r.UNSIGNED_INT&&(Q=r.R32UI),W===r.BYTE&&(Q=r.R8I),W===r.SHORT&&(Q=r.R16I),W===r.INT&&(Q=r.R32I)),T===r.RG&&(W===r.FLOAT&&(Q=r.RG32F),W===r.HALF_FLOAT&&(Q=r.RG16F),W===r.UNSIGNED_BYTE&&(Q=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(Q=r.RG8UI),W===r.UNSIGNED_SHORT&&(Q=r.RG16UI),W===r.UNSIGNED_INT&&(Q=r.RG32UI),W===r.BYTE&&(Q=r.RG8I),W===r.SHORT&&(Q=r.RG16I),W===r.INT&&(Q=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),W===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),W===r.UNSIGNED_INT&&(Q=r.RGB32UI),W===r.BYTE&&(Q=r.RGB8I),W===r.SHORT&&(Q=r.RGB16I),W===r.INT&&(Q=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),W===r.UNSIGNED_INT&&(Q=r.RGBA32UI),W===r.BYTE&&(Q=r.RGBA8I),W===r.SHORT&&(Q=r.RGBA16I),W===r.INT&&(Q=r.RGBA32I)),T===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),T===r.RGBA){let Tt=st?wa:$t.getTransfer(j);W===r.FLOAT&&(Q=r.RGBA32F),W===r.HALF_FLOAT&&(Q=r.RGBA16F),W===r.UNSIGNED_BYTE&&(Q=Tt===se?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(P,T){let W;return P?T===null||T===Ri||T===os?W=r.DEPTH24_STENCIL8:T===Fn?W=r.DEPTH32F_STENCIL8:T===pr&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ri||T===os?W=r.DEPTH_COMPONENT24:T===Fn?W=r.DEPTH_COMPONENT32F:T===pr&&(W=r.DEPTH_COMPONENT16),W}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Le&&P.minFilter!==ze?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function M(P){let T=P.target;T.removeEventListener("dispose",M),A(T),T.isVideoTexture&&h.delete(T)}function E(P){let T=P.target;T.removeEventListener("dispose",E),b(T)}function A(P){let T=n.get(P);if(T.__webglInit===void 0)return;let W=P.source,j=d.get(W);if(j){let st=j[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(P),Object.keys(j).length===0&&d.delete(W)}n.remove(P)}function w(P){let T=n.get(P);r.deleteTexture(T.__webglTexture);let W=P.source,j=d.get(W);delete j[T.__cacheKey],l.memory.textures--}function b(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let st=0;st<T.__webglFramebuffer[j].length;st++)r.deleteFramebuffer(T.__webglFramebuffer[j][st]);else r.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)r.deleteFramebuffer(T.__webglFramebuffer[j]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=P.textures;for(let j=0,st=W.length;j<st;j++){let Q=n.get(W[j]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),l.memory.textures--),n.remove(W[j])}n.remove(P)}let C=0;function U(){C=0}function L(){let P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function I(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function D(P,T){let W=n.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){let j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(W,P,T);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function N(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){G(W,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function H(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){G(W,P,T);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function V(P,T){let W=n.get(P);if(P.version>0&&W.__version!==P.version){J(W,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}let Z={[Ci]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[fr]:r.MIRRORED_REPEAT},nt={[Le]:r.NEAREST,[wu]:r.NEAREST_MIPMAP_NEAREST,[Cr]:r.NEAREST_MIPMAP_LINEAR,[ze]:r.LINEAR,[Xa]:r.LINEAR_MIPMAP_NEAREST,[Ti]:r.LINEAR_MIPMAP_LINEAR},at={[Ru]:r.NEVER,[Nu]:r.ALWAYS,[Iu]:r.LESS,[Nh]:r.LEQUAL,[Pu]:r.EQUAL,[Uu]:r.GEQUAL,[Lu]:r.GREATER,[Du]:r.NOTEQUAL};function yt(P,T){if(T.type===Fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ze||T.magFilter===Xa||T.magFilter===Cr||T.magFilter===Ti||T.minFilter===ze||T.minFilter===Xa||T.minFilter===Cr||T.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Z[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Z[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Z[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,nt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,nt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Le||T.minFilter!==Cr&&T.minFilter!==Ti||T.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function rt(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",M));let j=T.source,st=d.get(j);st===void 0&&(st={},d.set(j,st));let Q=I(T);if(Q!==P.__cacheKey){st[Q]===void 0&&(st[Q]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,W=!0),st[Q].usedTimes++;let Tt=st[P.__cacheKey];Tt!==void 0&&(st[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(T)),P.__cacheKey=Q,P.__webglTexture=st[Q].texture}return W}function G(P,T,W){let j=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=r.TEXTURE_3D);let st=rt(P,T),Q=T.source;e.bindTexture(j,P.__webglTexture,r.TEXTURE0+W);let Tt=n.get(Q);if(Q.version!==Tt.__version||st===!0){e.activeTexture(r.TEXTURE0+W);let dt=$t.getPrimaries($t.workingColorSpace),_t=T.colorSpace===ii?null:$t.getPrimaries(T.colorSpace),Zt=T.colorSpace===ii||dt===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let lt=x(T.image,!1,i.maxTextureSize);lt=ne(T,lt);let vt=s.convert(T.format,T.colorSpace),Lt=s.convert(T.type),Dt=y(T.internalFormat,vt,Lt,T.colorSpace,T.isVideoTexture);yt(j,T);let Mt,qt=T.mipmaps,zt=T.isVideoTexture!==!0,oe=Tt.__version===void 0||st===!0,O=Q.dataReady,ut=S(T,lt);if(T.isDepthTexture)Dt=_(T.format===ls,T.type),oe&&(zt?e.texStorage2D(r.TEXTURE_2D,1,Dt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Dt,lt.width,lt.height,0,vt,Lt,null));else if(T.isDataTexture)if(qt.length>0){zt&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let $=0,tt=qt.length;$<tt;$++)Mt=qt[$],zt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,vt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,Mt.width,Mt.height,0,vt,Lt,Mt.data);T.generateMipmaps=!1}else zt?(oe&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,lt.width,lt.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,vt,Lt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,lt.width,lt.height,0,vt,Lt,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){zt&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Dt,qt[0].width,qt[0].height,lt.depth);for(let $=0,tt=qt.length;$<tt;$++)if(Mt=qt[$],T.format!==cn)if(vt!==null)if(zt){if(O)if(T.layerUpdates.size>0){let xt=gh(Mt.width,Mt.height,T.format,T.type);for(let pt of T.layerUpdates){let Ft=Mt.data.subarray(pt*xt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*xt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,pt,Mt.width,Mt.height,1,vt,Ft)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,lt.depth,vt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Dt,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Mt.width,Mt.height,lt.depth,vt,Lt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Dt,Mt.width,Mt.height,lt.depth,0,vt,Lt,Mt.data)}else{zt&&oe&&e.texStorage2D(r.TEXTURE_2D,ut,Dt,qt[0].width,qt[0].height);for(let $=0,tt=qt.length;$<tt;$++)Mt=qt[$],T.format!==cn?vt!==null?zt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,Mt.width,Mt.height,vt,Lt,Mt.data):e.texImage2D(r.TEXTURE_2D,$,Dt,Mt.width,Mt.height,0,vt,Lt,Mt.data)}else if(T.isDataArrayTexture)if(zt){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,Dt,lt.width,lt.height,lt.depth),O)if(T.layerUpdates.size>0){let $=gh(lt.width,lt.height,T.format,T.type);for(let tt of T.layerUpdates){let xt=lt.data.subarray(tt*$/lt.data.BYTES_PER_ELEMENT,(tt+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,vt,Lt,xt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,vt,Lt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,lt.width,lt.height,lt.depth,0,vt,Lt,lt.data);else if(T.isData3DTexture)zt?(oe&&e.texStorage3D(r.TEXTURE_3D,ut,Dt,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,vt,Lt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,lt.width,lt.height,lt.depth,0,vt,Lt,lt.data);else if(T.isFramebufferTexture){if(oe)if(zt)e.texStorage2D(r.TEXTURE_2D,ut,Dt,lt.width,lt.height);else{let $=lt.width,tt=lt.height;for(let xt=0;xt<ut;xt++)e.texImage2D(r.TEXTURE_2D,xt,Dt,$,tt,0,vt,Lt,null),$>>=1,tt>>=1}}else if(qt.length>0){if(zt&&oe){let $=Pt(qt[0]);e.texStorage2D(r.TEXTURE_2D,ut,Dt,$.width,$.height)}for(let $=0,tt=qt.length;$<tt;$++)Mt=qt[$],zt?O&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,vt,Lt,Mt):e.texImage2D(r.TEXTURE_2D,$,Dt,vt,Lt,Mt);T.generateMipmaps=!1}else if(zt){if(oe){let $=Pt(lt);e.texStorage2D(r.TEXTURE_2D,ut,Dt,$.width,$.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Lt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Dt,vt,Lt,lt);m(T)&&g(j),Tt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function J(P,T,W){if(T.image.length!==6)return;let j=rt(P,T),st=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+W);let Q=n.get(st);if(st.version!==Q.__version||j===!0){e.activeTexture(r.TEXTURE0+W);let Tt=$t.getPrimaries($t.workingColorSpace),dt=T.colorSpace===ii?null:$t.getPrimaries(T.colorSpace),_t=T.colorSpace===ii||Tt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,lt=T.image[0]&&T.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Zt&&!lt?vt[tt]=x(T.image[tt],!0,i.maxCubemapSize):vt[tt]=lt?T.image[tt].image:T.image[tt],vt[tt]=ne(T,vt[tt]);let Lt=vt[0],Dt=s.convert(T.format,T.colorSpace),Mt=s.convert(T.type),qt=y(T.internalFormat,Dt,Mt,T.colorSpace),zt=T.isVideoTexture!==!0,oe=Q.__version===void 0||j===!0,O=st.dataReady,ut=S(T,Lt);yt(r.TEXTURE_CUBE_MAP,T);let $;if(Zt){zt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){$=vt[tt].mipmaps;for(let xt=0;xt<$.length;xt++){let pt=$[xt];T.format!==cn?Dt!==null?zt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,pt.width,pt.height,Dt,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,qt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,pt.width,pt.height,Dt,Mt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,qt,pt.width,pt.height,0,Dt,Mt,pt.data)}}}else{if($=T.mipmaps,zt&&oe){$.length>0&&ut++;let tt=Pt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ut,qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){zt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,Dt,Mt,vt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,vt[tt].width,vt[tt].height,0,Dt,Mt,vt[tt].data);for(let xt=0;xt<$.length;xt++){let Ft=$[xt].image[tt].image;zt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Ft.width,Ft.height,Dt,Mt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,qt,Ft.width,Ft.height,0,Dt,Mt,Ft.data)}}else{zt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,Mt,vt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,qt,Dt,Mt,vt[tt]);for(let xt=0;xt<$.length;xt++){let pt=$[xt];zt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Dt,Mt,pt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,qt,Dt,Mt,pt.image[tt])}}}m(T)&&g(r.TEXTURE_CUBE_MAP),Q.__version=st.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,W,j,st,Q){let Tt=s.convert(W.format,W.colorSpace),dt=s.convert(W.type),_t=y(W.internalFormat,Tt,dt,W.colorSpace),Zt=n.get(T),lt=n.get(W);if(lt.__renderTarget=T,!Zt.__hasExternalTextures){let vt=Math.max(1,T.width>>Q),Lt=Math.max(1,T.height>>Q);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,_t,vt,Lt,T.depth,0,Tt,dt,null):e.texImage2D(st,Q,_t,vt,Lt,0,Tt,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Wt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,st,lt.__webglTexture,0,Gt(T)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,st,lt.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(P,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){let j=T.depthTexture,st=j&&j.isDepthTexture?j.type:null,Q=_(T.stencilBuffer,st),Tt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=Gt(T);Wt(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,Q,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,Q,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,P)}else{let j=T.textures;for(let st=0;st<j.length;st++){let Q=j[st],Tt=s.convert(Q.format,Q.colorSpace),dt=s.convert(Q.type),_t=y(Q.internalFormat,Tt,dt,Q.colorSpace),Zt=Gt(T);W&&Wt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,_t,T.width,T.height):Wt(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt,_t,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,_t,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);let st=j.__webglTexture,Q=Gt(T);if(T.depthTexture.format===ts)Wt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(T.depthTexture.format===ls)Wt(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function bt(P){let T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=j}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");gt(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=r.createRenderbuffer(),ot(T.__webglDepthbuffer[j],P,!1);else{let st=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ot(T.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(P,T,W){let j=n.get(P);T!==void 0&&ft(j.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&bt(P)}function Kt(P){let T=P.texture,W=n.get(P),j=n.get(T);P.addEventListener("dispose",E);let st=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Tt=st.length>1;if(Tt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=T.version,l.memory.textures++),Q){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let _t=0;_t<T.mipmaps.length;_t++)W.__webglFramebuffer[dt][_t]=r.createFramebuffer()}else W.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)W.__webglFramebuffer[dt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let dt=0,_t=st.length;dt<_t;dt++){let Zt=n.get(st[dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=r.createTexture(),l.memory.textures++)}if(P.samples>0&&Wt(P)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<st.length;dt++){let _t=st[dt];W.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);let Zt=s.convert(_t.format,_t.colorSpace),lt=s.convert(_t.type),vt=y(_t.internalFormat,Zt,lt,_t.colorSpace,P.isXRRenderTarget===!0),Lt=Gt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,vt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),yt(r.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)ft(W.__webglFramebuffer[dt][_t],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else ft(W.__webglFramebuffer[dt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(T)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,_t=st.length;dt<_t;dt++){let Zt=st[dt],lt=n.get(Zt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),yt(r.TEXTURE_2D,Zt),ft(W.__webglFramebuffer,P,Zt,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),m(Zt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),yt(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)ft(W.__webglFramebuffer[_t],P,T,r.COLOR_ATTACHMENT0,dt,_t);else ft(W.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,dt,0);m(T)&&g(dt),e.unbindTexture()}P.depthBuffer&&bt(P)}function Ht(P){let T=P.textures;for(let W=0,j=T.length;W<j;W++){let st=T[W];if(m(st)){let Q=v(P),Tt=n.get(st).__webglTexture;e.bindTexture(Q,Tt),g(Q),e.unbindTexture()}}}let de=[],B=[];function Te(P){if(P.samples>0){if(Wt(P)===!1){let T=P.textures,W=P.width,j=P.height,st=r.COLOR_BUFFER_BIT,Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(P),dt=T.length>1;if(dt)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);let Zt=n.get(T[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Zt,0)}r.blitFramebuffer(0,0,W,j,0,0,W,j,st,r.NEAREST),a===!0&&(de.length=0,B.length=0,de.push(r.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(de.push(Q),B.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);let Zt=n.get(T[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&a){let T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Gt(P){return Math.min(i.maxSamples,P.samples)}function Wt(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(P){let T=l.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function ne(P,T){let W=P.colorSpace,j=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==us&&W!==ii&&($t.getTransfer(W)===se?(j!==cn||st!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Wt}function Cg(r,t){function e(n,i=ii){let s,l=$t.getTransfer(i);if(n===zn)return r.UNSIGNED_BYTE;if(n===Ol)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Eh)return r.BYTE;if(n===Ah)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===Fl)return r.INT;if(n===Ri)return r.UNSIGNED_INT;if(n===Fn)return r.FLOAT;if(n===yr)return r.HALF_FLOAT;if(n===Ch)return r.ALPHA;if(n===Rh)return r.RGB;if(n===cn)return r.RGBA;if(n===Ih)return r.LUMINANCE;if(n===Ph)return r.LUMINANCE_ALPHA;if(n===ts)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===Lh)return r.RED;if(n===kl)return r.RED_INTEGER;if(n===Dh)return r.RG;if(n===zl)return r.RG_INTEGER;if(n===Vl)return r.RGBA_INTEGER;if(n===Jr||n===Kr||n===Qr||n===jr)if(l===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Uo||n===No)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===Bo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fo||n===Oo)return l===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===$o||n===Jo||n===Ko||n===Qo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ko)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return l===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===jo||n===tl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ta)return l===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===el||n===nl||n===il)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var bl=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ji=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,l=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){l=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`,Sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ee,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:Ig,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends li{constructor(t,e){super();let n=this,i=null,s=1,l=null,o="local-floor",a=1,c=null,h=null,u=null,d=null,f=null,p=null,x=new Sl,m=e.getContextAttributes(),g=null,v=null,y=[],_=[],S=new ee,M=null,E=new ke;E.viewport=new ge;let A=new ke;A.viewport=new ge;let w=[E,A],b=new bl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=y[G];return J===void 0&&(J=new dr,y[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=y[G];return J===void 0&&(J=new dr,y[G]=J),J.getGripSpace()},this.getHand=function(G){let J=y[G];return J===void 0&&(J=new dr,y[G]=J),J.getHandSpace()};function L(G){let J=_.indexOf(G.inputSource);if(J===-1)return;let ft=y[J];ft!==void 0&&(ft.update(G.inputSource,G.frame,c||l),ft.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",D);for(let G=0;G<y.length;G++){let J=_[G];J!==null&&(_[G]=null,y[G].disconnect(J))}C=null,U=null,x.reset(),t.setRenderTarget(g),f=null,d=null,u=null,i=null,v=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||l},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",I),i.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ft=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?ls:ts,ft=m.stencil?os:Ri);let gt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:cn,type:zn,depthTexture:new pa(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),c=null,l=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(G){for(let J=0;J<G.removed.length;J++){let ft=G.removed[J],ot=_.indexOf(ft);ot>=0&&(_[ot]=null,y[ot].disconnect(ft))}for(let J=0;J<G.added.length;J++){let ft=G.added[J],ot=_.indexOf(ft);if(ot===-1){for(let bt=0;bt<y.length;bt++)if(bt>=_.length){_.push(ft),ot=bt;break}else if(_[bt]===null){_[bt]=ft,ot=bt;break}if(ot===-1)break}let gt=y[ot];gt&&gt.connect(ft)}}let N=new q,H=new q;function V(G,J,ft){N.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(ft.matrixWorld);let ot=N.distanceTo(H),gt=J.projectionMatrix.elements,bt=ft.projectionMatrix.elements,Rt=gt[14]/(gt[10]-1),Kt=gt[14]/(gt[10]+1),Ht=(gt[9]+1)/gt[5],de=(gt[9]-1)/gt[5],B=(gt[8]-1)/gt[0],Te=(bt[8]+1)/bt[0],Gt=Rt*B,Wt=Rt*Te,It=ot/(-B+Te),ne=It*-B;if(J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(It),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),gt[10]===-1)G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Pt=Rt+It,P=Kt+It,T=Gt-ne,W=Wt+(ot-ne),j=Ht*Kt/P*Pt,st=de*Kt/P*Pt;G.projectionMatrix.makePerspective(T,W,j,st,Pt,P),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Z(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let J=G.near,ft=G.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),b.near=A.near=E.near=J,b.far=A.far=E.far=ft,(C!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,U=b.far),E.layers.mask=G.layers.mask|2,A.layers.mask=G.layers.mask|4,b.layers.mask=E.layers.mask|A.layers.mask;let ot=G.parent,gt=b.cameras;Z(b,ot);for(let bt=0;bt<gt.length;bt++)Z(gt[bt],ot);gt.length===2?V(b,E,A):b.projectionMatrix.copy(E.projectionMatrix),nt(G,b,ot)};function nt(G,J,ft){ft===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ft.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=al*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return a},this.setFoveation=function(G){a=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let at=null;function yt(G,J){if(h=J.getViewerPose(c||l),p=J,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;ft.length!==b.cameras.length&&(b.cameras.length=0,ot=!0);for(let bt=0;bt<ft.length;bt++){let Rt=ft[bt],Kt=null;if(f!==null)Kt=f.getViewport(Rt);else{let de=u.getViewSubImage(d,Rt);Kt=de.viewport,bt===0&&(t.setRenderTargetTextures(v,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(v))}let Ht=w[bt];Ht===void 0&&(Ht=new ke,Ht.layers.enable(bt),Ht.viewport=new ge,w[bt]=Ht),Ht.matrix.fromArray(Rt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Rt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),bt===0&&(b.matrix.copy(Ht.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ot===!0&&b.cameras.push(Ht)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let bt=u.getDepthInformation(ft[0]);bt&&bt.isValid&&bt.texture&&x.init(t,bt,i.renderState)}}for(let ft=0;ft<y.length;ft++){let ot=_[ft],gt=y[ft];ot!==null&&gt!==void 0&&gt.update(ot,J,c||l)}at&&at(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let rt=new kh;rt.setAnimationLoop(yt),this.setAnimationLoop=function(G){at=G},this.dispose=function(){}}},bi=new Hn,Lg=new _e;function Dg(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,y,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(l(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?a(m,g,v,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ge&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ge&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,bi.copy(_),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ug(r,t,e,n){let i={},s={},l=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=i[v.id];_===void 0&&(p(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(v,S);let M=t.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function h(v){let y=u();v.__bindingPointIndex=y;let _=r.createBuffer(),S=v.__size,M=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,S,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<o;v++)if(l.indexOf(v)===-1)return l.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=i[v.id],_=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,E=_.length;M<E;M++){let A=Array.isArray(_[M])?_[M]:[_[M]];for(let w=0,b=A.length;w<b;w++){let C=A[w];if(f(C,M,w,S)===!0){let U=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],I=0;for(let D=0;D<L.length;D++){let N=L[D],H=x(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,U+I,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,_,S){let M=v.value,E=y+"_"+_;if(S[E]===void 0)return typeof M=="number"||typeof M=="boolean"?S[E]=M:S[E]=M.clone(),!0;{let A=S[E];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return S[E]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function p(v){let y=v.uniforms,_=0,S=16;for(let E=0,A=y.length;E<A;E++){let w=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,C=w.length;b<C;b++){let U=w[b],L=Array.isArray(U.value)?U.value:[U.value];for(let I=0,D=L.length;I<D;I++){let N=L[I],H=x(N),V=_%S,Z=V%H.boundary,nt=V+Z;_+=Z,nt!==0&&S-nt<H.storage&&(_+=S-nt),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=H.storage}}}let M=_%S;return M>0&&(_+=S-M),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=l.indexOf(y.__bindingPointIndex);l.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);l=[],i={},s={}}return{bind:a,update:c,dispose:g}}var ma=class{constructor(t={}){let{canvas:e=Ou(),context:n=null,depth:i=!0,stencil:s=!1,alpha:l=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=l;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=ri,this.toneMappingExposure=1;let _=this,S=!1,M=0,E=0,A=null,w=-1,b=null,C=new ge,U=new ge,L=null,I=new Jt(0),D=0,N=e.width,H=e.height,V=1,Z=null,nt=null,at=new ge(0,0,N,H),yt=new ge(0,0,N,H),rt=!1,G=new da,J=!1,ft=!1,ot=new _e,gt=new _e,bt=new q,Rt=new ge,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function de(){return A===null?V:1}let B=n;function Te(R,k){return e.getContext(R,k)}try{let R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){let k="webgl2";if(B=Te(k,R),B===null)throw Te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Gt,Wt,It,ne,Pt,P,T,W,j,st,Q,Tt,dt,_t,Zt,lt,vt,Lt,Dt,Mt,qt,zt,oe,O;function ut(){Gt=new Jp(B),Gt.init(),zt=new Cg(B,Gt),Wt=new Wp(B,Gt,t,zt),It=new Eg(B,Gt),Wt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ne=new jp(B),Pt=new dg,P=new Tg(B,Gt,It,Pt,Wt,zt,ne),T=new Yp(_),W=new $p(_),j=new rd(B),oe=new Hp(B,j),st=new Kp(B,j,ne,oe),Q=new em(B,st,j,ne),Dt=new tm(B,Wt,P),lt=new Xp(Pt),Tt=new ug(_,T,W,Gt,Wt,oe,lt),dt=new Dg(_,Pt),_t=new pg,Zt=new vg(Gt),Lt=new Vp(_,T,W,It,Q,f,a),vt=new Sg(_,Q,Wt),O=new Ug(B,ne,Wt,It),Mt=new Gp(B,Gt,ne),qt=new Qp(B,Gt,ne),ne.programs=Tt.programs,_.capabilities=Wt,_.extensions=Gt,_.properties=Pt,_.renderLists=_t,_.shadowMap=vt,_.state=It,_.info=ne}ut();let $=new wl(_,B);this.xr=$,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(N,H,!1))},this.getSize=function(R){return R.set(N,H)},this.setSize=function(R,k,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,H=k,e.width=Math.floor(R*V),e.height=Math.floor(k*V),X===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(N*V,H*V).floor()},this.setDrawingBufferSize=function(R,k,X){N=R,H=k,V=X,e.width=Math.floor(R*X),e.height=Math.floor(k*X),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,k,X,Y){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,k,X,Y),It.viewport(C.copy(at).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,k,X,Y){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,k,X,Y),It.scissor(U.copy(yt).multiplyScalar(V).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){It.setScissorTest(rt=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(R=!0,k=!0,X=!0){let Y=0;if(R){let z=!1;if(A!==null){let ct=A.texture.format;z=ct===Vl||ct===zl||ct===kl}if(z){let ct=A.texture.type,mt=ct===zn||ct===Ri||ct===pr||ct===os||ct===Ol||ct===Bl,wt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Ut=wt.r,Ot=wt.g,At=wt.b;mt?(p[0]=Ut,p[1]=Ot,p[2]=At,p[3]=Et,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=Ut,x[1]=Ot,x[2]=At,x[3]=Et,B.clearBufferiv(B.COLOR,0,x))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT),X&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),Zt.dispose(),Pt.dispose(),T.dispose(),W.dispose(),Q.dispose(),oe.dispose(),O.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",uc),$.removeEventListener("sessionend",dc),gi.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let R=ne.autoReset,k=vt.enabled,X=vt.autoUpdate,Y=vt.needsUpdate,z=vt.type;ut(),ne.autoReset=R,vt.enabled=k,vt.autoUpdate=X,vt.needsUpdate=Y,vt.type=z}function pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){let k=R.target;k.removeEventListener("dispose",Ft),pe(k)}function pe(R){Ce(R),Pt.remove(R)}function Ce(R){let k=Pt.get(R).programs;k!==void 0&&(k.forEach(function(X){Tt.releaseProgram(X)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,X,Y,z,ct){k===null&&(k=Kt);let mt=z.isMesh&&z.matrixWorld.determinant()<0,wt=$h(R,k,X,Y,z);It.setMaterial(Y,mt);let Et=X.index,Ut=1;if(Y.wireframe===!0){if(Et=st.getWireframeAttribute(X),Et===void 0)return;Ut=2}let Ot=X.drawRange,At=X.attributes.position,Qt=Ot.start*Ut,le=(Ot.start+Ot.count)*Ut;ct!==null&&(Qt=Math.max(Qt,ct.start*Ut),le=Math.min(le,(ct.start+ct.count)*Ut)),Et!==null?(Qt=Math.max(Qt,0),le=Math.min(le,Et.count)):At!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,At.count));let he=le-Qt;if(he<0||he===1/0)return;oe.setup(z,Y,wt,X,Et);let Ve,jt=Mt;if(Et!==null&&(Ve=j.get(Et),jt=qt,jt.setIndex(Ve)),z.isMesh)Y.wireframe===!0?(It.setLineWidth(Y.wireframeLinewidth*de()),jt.setMode(B.LINES)):jt.setMode(B.TRIANGLES);else if(z.isLine){let Ct=Y.linewidth;Ct===void 0&&(Ct=1),It.setLineWidth(Ct*de()),z.isLineSegments?jt.setMode(B.LINES):z.isLineLoop?jt.setMode(B.LINE_LOOP):jt.setMode(B.LINE_STRIP)}else z.isPoints?jt.setMode(B.POINTS):z.isSprite&&jt.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ct=z._multiDrawStarts,Tn=z._multiDrawCounts,te=z._multiDrawCount,rn=Et?j.get(Et).bytesPerElement:1,Oi=Pt.get(Y).currentProgram.getUniforms();for(let Xe=0;Xe<te;Xe++)Oi.setValue(B,"_gl_DrawID",Xe),jt.render(Ct[Xe]/rn,Tn[Xe])}else if(z.isInstancedMesh)jt.renderInstances(Qt,he,z.count);else if(X.isInstancedBufferGeometry){let Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tn=Math.min(X.instanceCount,Ct);jt.renderInstances(Qt,he,Tn)}else jt.render(Qt,he)};function ie(R,k,X){R.transparent===!0&&R.side===Ze&&R.forceSinglePass===!1?(R.side=Ge,R.needsUpdate=!0,Tr(R,k,X),R.side=oi,R.needsUpdate=!0,Tr(R,k,X),R.side=Ze):Tr(R,k,X)}this.compile=function(R,k,X=null){X===null&&(X=R),g=Zt.get(X),g.init(k),y.push(g),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),R!==X&&R.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();let Y=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ct=z.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){let wt=ct[mt];ie(wt,X,z),Y.add(wt)}else ie(ct,X,z),Y.add(ct)}),y.pop(),g=null,Y},this.compileAsync=function(R,k,X=null){let Y=this.compile(R,k,X);return new Promise(z=>{function ct(){if(Y.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&Y.delete(mt)}),Y.size===0){z(R);return}setTimeout(ct,10)}Gt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let sn=null;function An(R){sn&&sn(R)}function uc(){gi.stop()}function dc(){gi.start()}let gi=new kh;gi.setAnimationLoop(An),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){sn=R,$.setAnimationLoop(R),R===null?gi.stop():gi.start()},$.addEventListener("sessionstart",uc),$.addEventListener("sessionend",dc),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,k,A),g=Zt.get(R,y.length),g.init(k),y.push(g),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(gt),ft=this.localClippingEnabled,J=lt.init(this.clippingPlanes,ft),m=_t.get(R,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&Wa(ct,k,-1/0,_.sortObjects)}Wa(R,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Z,nt),Ht=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ht&&Lt.addToRenderList(m,R),this.info.render.frame++,J===!0&&lt.beginShadows();let X=g.state.shadowsArray;vt.render(X,R,k),J===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(g.setupLights(),k.isArrayCamera){let ct=k.cameras;if(z.length>0)for(let mt=0,wt=ct.length;mt<wt;mt++){let Et=ct[mt];pc(Y,z,R,Et)}Ht&&Lt.render(R);for(let mt=0,wt=ct.length;mt<wt;mt++){let Et=ct[mt];fc(m,R,Et,Et.viewport)}}else z.length>0&&pc(Y,z,R,k),Ht&&Lt.render(R),fc(m,R,k);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,k),oe.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],J===!0&&lt.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Wa(R,k,X,Y){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){Y&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);let mt=Q.update(R),wt=R.material;wt.visible&&m.push(R,mt,wt,X,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){let mt=Q.update(R),wt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Rt.copy(mt.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(wt)){let Et=mt.groups;for(let Ut=0,Ot=Et.length;Ut<Ot;Ut++){let At=Et[Ut],Qt=wt[At.materialIndex];Qt&&Qt.visible&&m.push(R,mt,Qt,X,Rt.z,At)}}else wt.visible&&m.push(R,mt,wt,X,Rt.z,null)}}let ct=R.children;for(let mt=0,wt=ct.length;mt<wt;mt++)Wa(ct[mt],k,X,Y)}function fc(R,k,X,Y){let z=R.opaque,ct=R.transmissive,mt=R.transparent;g.setupLightsView(X),J===!0&&lt.setGlobalState(_.clippingPlanes,X),Y&&It.viewport(C.copy(Y)),z.length>0&&Ar(z,k,X),ct.length>0&&Ar(ct,k,X),mt.length>0&&Ar(mt,k,X),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function pc(R,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Vn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?yr:zn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let ct=g.state.transmissionRenderTarget[Y.id],mt=Y.viewport||C;ct.setSize(mt.z,mt.w);let wt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(I),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&Lt.render(X);let Et=_.toneMapping;_.toneMapping=ri;let Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),J===!0&&lt.setGlobalState(_.clippingPlanes,Y),Ar(R,X,Y),P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let At=0,Qt=k.length;At<Qt;At++){let le=k[At],he=le.object,Ve=le.geometry,jt=le.material,Ct=le.group;if(jt.side===Ze&&he.layers.test(Y.layers)){let Tn=jt.side;jt.side=Ge,jt.needsUpdate=!0,mc(he,X,Y,Ve,jt,Ct),jt.side=Tn,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct))}_.setRenderTarget(wt),_.setClearColor(I,D),Ut!==void 0&&(Y.viewport=Ut),_.toneMapping=Et}function Ar(R,k,X){let Y=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ct=R.length;z<ct;z++){let mt=R[z],wt=mt.object,Et=mt.geometry,Ut=Y===null?mt.material:Y,Ot=mt.group;wt.layers.test(X.layers)&&mc(wt,k,X,Et,Ut,Ot)}}function mc(R,k,X,Y,z,ct){R.onBeforeRender(_,k,X,Y,z,ct),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(_,k,X,Y,R,ct),z.transparent===!0&&z.side===Ze&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,_.renderBufferDirect(X,k,Y,z,R,ct),z.side=oi,z.needsUpdate=!0,_.renderBufferDirect(X,k,Y,z,R,ct),z.side=Ze):_.renderBufferDirect(X,k,Y,z,R,ct),R.onAfterRender(_,k,X,Y,z,ct)}function Tr(R,k,X){k.isScene!==!0&&(k=Kt);let Y=Pt.get(R),z=g.state.lights,ct=g.state.shadowsArray,mt=z.state.version,wt=Tt.getParameters(R,z.state,ct,k,X),Et=Tt.getProgramCacheKey(wt),Ut=Y.programs;Y.environment=R.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(R.isMeshStandardMaterial?W:T).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",Ft),Ut=new Map,Y.programs=Ut);let Ot=Ut.get(Et);if(Ot!==void 0){if(Y.currentProgram===Ot&&Y.lightsStateVersion===mt)return xc(R,wt),Ot}else wt.uniforms=Tt.getUniforms(R),R.onBeforeCompile(wt,_),Ot=Tt.acquireProgram(wt,Et),Ut.set(Et,Ot),Y.uniforms=wt.uniforms;let At=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=lt.uniform),xc(R,wt),Y.needsLights=Kh(R),Y.lightsStateVersion=mt,Y.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ot,Y.uniformsList=null,Ot}function gc(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=ns.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function xc(R,k){let X=Pt.get(R);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function $h(R,k,X,Y,z){k.isScene!==!0&&(k=Kt),P.resetTextureUnits();let ct=k.fog,mt=Y.isMeshStandardMaterial?k.environment:null,wt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:us,Et=(Y.isMeshStandardMaterial?W:T).get(Y.envMap||mt),Ut=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,le=!!X.morphAttributes.color,he=ri;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(he=_.toneMapping);let Ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,jt=Ve!==void 0?Ve.length:0,Ct=Pt.get(Y),Tn=g.state.lights;if(J===!0&&(ft===!0||R!==b)){let Qe=R===b&&Y.id===w;lt.setState(Y,R,Qe)}let te=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Tn.state.version||Ct.outputColorSpace!==wt||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==Et||Y.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ot||Ct.morphTargets!==At||Ct.morphNormals!==Qt||Ct.morphColors!==le||Ct.toneMapping!==he||Ct.morphTargetsCount!==jt)&&(te=!0):(te=!0,Ct.__version=Y.version);let rn=Ct.currentProgram;te===!0&&(rn=Tr(Y,k,z));let Oi=!1,Xe=!1,sr=!1,ue=rn.getUniforms(),mn=Ct.uniforms;if(It.useProgram(rn.program)&&(Oi=!0,Xe=!0,sr=!0),Y.id!==w&&(w=Y.id,Xe=!0),Oi||b!==R){It.buffers.depth.getReversed()?(ot.copy(R.projectionMatrix),ku(ot),zu(ot),ue.setValue(B,"projectionMatrix",ot)):ue.setValue(B,"projectionMatrix",R.projectionMatrix),ue.setValue(B,"viewMatrix",R.matrixWorldInverse);let $n=ue.map.cameraPosition;$n!==void 0&&$n.setValue(B,bt.setFromMatrixPosition(R.matrixWorld)),Wt.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Xe=!0,sr=!0)}if(z.isSkinnedMesh){ue.setOptional(B,z,"bindMatrix"),ue.setOptional(B,z,"bindMatrixInverse");let Qe=z.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ue.setValue(B,"boneTexture",Qe.boneTexture,P))}z.isBatchedMesh&&(ue.setOptional(B,z,"batchingTexture"),ue.setValue(B,"batchingTexture",z._matricesTexture,P),ue.setOptional(B,z,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",z._indirectTexture,P),ue.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",z._colorsTexture,P));let rr=X.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Dt.update(z,X,rn),(Xe||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,ue.setValue(B,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mn.envMap.value=Et,mn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(mn.envMapIntensity.value=k.environmentIntensity),Xe&&(ue.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&Jh(mn,sr),ct&&Y.fog===!0&&dt.refreshFogUniforms(mn,ct),dt.refreshMaterialUniforms(mn,Y,V,H,g.state.transmissionRenderTarget[R.id]),ns.upload(B,gc(Ct),mn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ns.upload(B,gc(Ct),mn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(B,"center",z.center),ue.setValue(B,"modelViewMatrix",z.modelViewMatrix),ue.setValue(B,"normalMatrix",z.normalMatrix),ue.setValue(B,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Qe=Y.uniformsGroups;for(let $n=0,Jn=Qe.length;$n<Jn;$n++){let yc=Qe[$n];O.update(yc,rn),O.bind(yc,rn)}}return rn}function Jh(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Kh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,k,X){Pt.get(R.texture).__webglTexture=k,Pt.get(R.depthTexture).__webglTexture=X;let Y=Pt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let X=Pt.get(R);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,X=0){A=R,M=k,E=X;let Y=!0,z=null,ct=!1,mt=!1;if(R){let Et=Pt.get(R);if(Et.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1;else if(Et.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Et.__hasExternalTextures)P.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let At=R.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&Pt.has(At)&&(R.width!==At.image.width||R.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);let Ot=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?z=Ot[k][X]:z=Ot[k],ct=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?z=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[X]:z=Ot,C.copy(R.viewport),U.copy(R.scissor),L=R.scissorTest}else C.copy(at).multiplyScalar(V).floor(),U.copy(yt).multiplyScalar(V).floor(),L=rt;if(It.bindFramebuffer(B.FRAMEBUFFER,z)&&Y&&It.drawBuffers(R,z),It.viewport(C),It.scissor(U),It.setScissorTest(L),ct){let Et=Pt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,X)}else if(mt){let Et=Pt.get(R.texture),Ut=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.__webglTexture,X||0,Ut)}w=-1},this.readRenderTargetPixels=function(R,k,X,Y,z,ct,mt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){It.bindFramebuffer(B.FRAMEBUFFER,wt);try{let Et=R.texture,Ut=Et.format,Ot=Et.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Y&&X>=0&&X<=R.height-z&&B.readPixels(k,X,Y,z,zt.convert(Ut),zt.convert(Ot),ct)}finally{let Et=A!==null?Pt.get(A).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(R,k,X,Y,z,ct,mt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){let Et=R.texture,Ut=Et.format,Ot=Et.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-Y&&X>=0&&X<=R.height-z){It.bindFramebuffer(B.FRAMEBUFFER,wt);let At=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(k,X,Y,z,zt.convert(Ut),zt.convert(Ot),0);let Qt=A!==null?Pt.get(A).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,Qt);let le=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Bu(B,le,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,At),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct),B.deleteBuffer(At),B.deleteSync(le),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,X=0){R.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-X),z=Math.floor(R.image.width*Y),ct=Math.floor(R.image.height*Y),mt=k!==null?k.x:0,wt=k!==null?k.y:0;P.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,mt,wt,z,ct),It.unbindTexture()},this.copyTextureToTexture=function(R,k,X=null,Y=null,z=0){R.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],k=arguments[2],z=arguments[3]||0,X=null);let ct,mt,wt,Et,Ut,Ot,At,Qt,le,he=R.isCompressedTexture?R.mipmaps[z]:R.image;X!==null?(ct=X.max.x-X.min.x,mt=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Et=X.min.x,Ut=X.min.y,Ot=X.isBox3?X.min.z:0):(ct=he.width,mt=he.height,wt=he.depth||1,Et=0,Ut=0,Ot=0),Y!==null?(At=Y.x,Qt=Y.y,le=Y.z):(At=0,Qt=0,le=0);let Ve=zt.convert(k.format),jt=zt.convert(k.type),Ct;k.isData3DTexture?(P.setTexture3D(k,0),Ct=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ct=B.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ct=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let Tn=B.getParameter(B.UNPACK_ROW_LENGTH),te=B.getParameter(B.UNPACK_IMAGE_HEIGHT),rn=B.getParameter(B.UNPACK_SKIP_PIXELS),Oi=B.getParameter(B.UNPACK_SKIP_ROWS),Xe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Et),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);let sr=R.isDataArrayTexture||R.isData3DTexture,ue=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let mn=Pt.get(R),rr=Pt.get(k),Qe=Pt.get(mn.__renderTarget),$n=Pt.get(rr.__renderTarget);It.bindFramebuffer(B.READ_FRAMEBUFFER,Qe.__webglFramebuffer),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Jn=0;Jn<wt;Jn++)sr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(R).__webglTexture,z,Ot+Jn),R.isDepthTexture?(ue&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,z,le+Jn),B.blitFramebuffer(Et,Ut,ct,mt,At,Qt,ct,mt,B.DEPTH_BUFFER_BIT,B.NEAREST)):ue?B.copyTexSubImage3D(Ct,z,At,Qt,le+Jn,Et,Ut,ct,mt):B.copyTexSubImage2D(Ct,z,At,Qt,le+Jn,Et,Ut,ct,mt);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ct,z,At,Qt,le,ct,mt,wt,Ve,jt,he.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,z,At,Qt,le,ct,mt,wt,Ve,he.data):B.texSubImage3D(Ct,z,At,Qt,le,ct,mt,wt,Ve,jt,he):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,At,Qt,ct,mt,Ve,jt,he.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,At,Qt,he.width,he.height,Ve,he.data):B.texSubImage2D(B.TEXTURE_2D,z,At,Qt,ct,mt,Ve,jt,he);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,te),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),z===0&&k.generateMipmaps&&B.generateMipmap(Ct),It.unbindTexture()},this.copyTextureToTexture3D=function(R,k,X=null,Y=null,z=0){return R.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],k=arguments[3],z=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,X,Y,z)},this.initRenderTarget=function(R){Pt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),It.unbindTexture()},this.resetState=function(){M=0,E=0,A=null,It.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var ga=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fe=new q,Li=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ya=class extends Ee{constructor(t,e,n,i,s,l,o,a,c){super(t,e,n,i,s,l,o,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function $r(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ng(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var hs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let l;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}l=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=e[--n-1],t>=s)break e}l=n,n=0;break n}break t}for(;n<l;){let o=n+l>>>1;t<e[o]?l=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let l=0;l!==i;++l)e[l]=n[s+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,l=t+1,o=i[s],a=i[l];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:s=t,o=2*e-n;break;case wc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Sc:l=t,a=2*n-e;break;case wc:l=1,a=n+i[1]-i[0];break;default:l=t-1,a=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=s*h,this._offsetNext=l*h}interpolate_(t,e,n,i){let s=this.resultBuffer,l=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let S=0;S!==o;++S)s[S]=g*l[h+S]+v*l[c+S]+y*l[a+S]+_*l[u+S];return s}},Al=class extends hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,l=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=l[c+d]*u+l[a+d]*h;return s}},Tl=class extends hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,l=i-1;for(;s!==i&&n[s]<t;)++s;for(;l!==-1&&n[l]>e;)--l;if(++l,s!==0||l!==i){s>=l&&(l=Math.max(l,1),s=l-1);let o=this.getValueSize();this.times=n.slice(s,l),this.values=this.values.slice(s*o,l*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(l!==null&&l>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,l),t=!1;break}l=a}if(i!==void 0&&Ng(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,s=t.length-1,l=1;for(let o=1;o<s;++o){let a=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)a=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){a=!0;break}}}if(a){if(o!==l){t[l]=t[o];let u=o*n,d=l*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++l}}if(s>0){t[l]=t[s];for(let o=s*n,a=l*n,c=0;c!==n;++c)e[a+c]=e[o+c];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=sl;var Di=class extends un{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=na;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends un{};Cl.prototype.ValueTypeName="color";var Rl=class extends un{};Rl.prototype.ValueTypeName="number";var Il=class extends hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,l=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(s,0,l,c-o,l,c,a);return s}},_a=class extends un{InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends un{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=na;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends un{};Pl.prototype.ValueTypeName="vector";var Ll=class{constructor(t,e,n){let i=this,s=!1,l=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,l,o),s=!0},this.itemEnd=function(h){l++,i.onProgress!==void 0&&i.onProgress(h,l,o),l===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},Fg=new Ll,Dl=class{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var va=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xh(){return performance.now()}var Gl="\\[\\]\\.:\\/",Og=new RegExp("["+Gl+"]","g"),Wl="[^"+Gl+"]",Bg="[^"+Gl.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",Wl),zg=/(WCOD+)?/.source.replace("WCOD",Bg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),Gg=new RegExp("^"+kg+zg+Vg+Hg+"$"),Wg=["material","materials","bones","map"],Ul=class{constructor(t,e,n){let i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Og,"")}static parseTrackName(t){let e=Gg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Wg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let l=0;l<s.length;l++){let o=s[l];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let l=t[i];if(l===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=s}else l.fromArray!==void 0&&l.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(a=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Ul;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");if(typeof window<"u"&&window.THREE){let r=window.require;window.require=t=>{if(r)return r(t);if(t==="three")return window.THREE}}var fs=class{entries={};size=0;add(t){let e=this.entries[t];return this.entries[t]=!0,e?!1:(this.size++,!0)}addAll(t){let e=this.size;for(var n=0,i=t.length;n<i;n++)this.add(t[n]);return e!=this.size}contains(t){return this.entries[t]}clear(){this.entries={},this.size=0}},St=class r{r;g;b;a;static WHITE=new r(1,1,1,1);static RED=new r(1,0,0,1);static GREEN=new r(0,1,0,1);static BLUE=new r(0,0,1,1);static MAGENTA=new r(1,0,1,1);constructor(t=0,e=0,n=0,i=0){this.r=t,this.g=e,this.b=n,this.a=i}set(t,e,n,i){return this.r=t,this.g=e,this.b=n,this.a=i,this.clamp()}setFromColor(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}setFromString(t){return t=t.charAt(0)=="#"?t.substr(1):t,this.r=parseInt(t.substr(0,2),16)/255,this.g=parseInt(t.substr(2,2),16)/255,this.b=parseInt(t.substr(4,2),16)/255,this.a=t.length!=8?1:parseInt(t.substr(6,2),16)/255,this}add(t,e,n,i){return this.r+=t,this.g+=e,this.b+=n,this.a+=i,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(t,e){t.r=((e&4278190080)>>>24)/255,t.g=((e&16711680)>>>16)/255,t.b=((e&65280)>>>8)/255,t.a=(e&255)/255}static rgb888ToColor(t,e){t.r=((e&16711680)>>>16)/255,t.g=((e&65280)>>>8)/255,t.b=(e&255)/255}toRgb888(){let t=e=>("0"+(e*255).toString(16)).slice(-2);return+("0x"+t(this.r)+t(this.g)+t(this.b))}static fromString(t,e=new r){return e.setFromString(t)}},et=class r{static PI=3.1415927;static PI2=r.PI*2;static invPI2=1/r.PI2;static radiansToDegrees=180/r.PI;static radDeg=r.radiansToDegrees;static degreesToRadians=r.PI/180;static degRad=r.degreesToRadians;static clamp(t,e,n){return t<e?e:t>n?n:t}static cosDeg(t){return Math.cos(t*r.degRad)}static sinDeg(t){return Math.sin(t*r.degRad)}static atan2Deg(t,e){return Math.atan2(t,e)*r.degRad}static signum(t){return t>0?1:t<0?-1:0}static toInt(t){return t>0?Math.floor(t):Math.ceil(t)}static cbrt(t){let e=Math.pow(Math.abs(t),.3333333333333333);return t<0?-e:e}static randomTriangular(t,e){return r.randomTriangularWith(t,e,(t+e)*.5)}static randomTriangularWith(t,e,n){let i=Math.random(),s=e-t;return i<=(n-t)/s?t+Math.sqrt(i*s*(n-t)):e-Math.sqrt((1-i)*s*(e-n))}static isPowerOfTwo(t){return t&&(t&t-1)===0}};var it=class r{static SUPPORTS_TYPED_ARRAYS=typeof Float32Array<"u";static arrayCopy(t,e,n,i,s){for(let l=e,o=i;l<e+s;l++,o++)n[o]=t[l]}static arrayFill(t,e,n,i){for(let s=e;s<n;s++)t[s]=i}static setArraySize(t,e,n=0){let i=t.length;if(i==e)return t;if(t.length=e,i<e)for(let s=i;s<e;s++)t[s]=n;return t}static ensureArrayCapacity(t,e,n=0){return t.length>=e?t:r.setArraySize(t,e,n)}static newArray(t,e){let n=new Array(t);for(let i=0;i<t;i++)n[i]=e;return n}static newFloatArray(t){if(r.SUPPORTS_TYPED_ARRAYS)return new Float32Array(t);{let e=new Array(t);for(let n=0;n<e.length;n++)e[n]=0;return e}}static newShortArray(t){if(r.SUPPORTS_TYPED_ARRAYS)return new Int16Array(t);{let e=new Array(t);for(let n=0;n<e.length;n++)e[n]=0;return e}}static toFloatArray(t){return r.SUPPORTS_TYPED_ARRAYS?new Float32Array(t):t}static toSinglePrecision(t){return r.SUPPORTS_TYPED_ARRAYS?Math.fround(t):t}static webkit602BugfixHelper(t,e){}static contains(t,e,n=!0){for(var i=0;i<t.length;i++)if(t[i]==e)return!0;return!1}static enumValue(t,e){return t[e[0].toUpperCase()+e.slice(1)]}};var hi=class{items=new Array;instantiator;constructor(t){this.instantiator=t}obtain(){return this.items.length>0?this.items.pop():this.instantiator()}free(t){t.reset&&t.reset(),this.items.push(t)}freeAll(t){for(let e=0;e<t.length;e++)this.free(t[e])}clear(){this.items.length=0}},$e=class{x;y;constructor(t=0,e=0){this.x=t,this.y=e}set(t,e){return this.x=t,this.y=e,this}length(){let t=this.x,e=this.y;return Math.sqrt(t*t+e*e)}normalize(){let t=this.length();return t!=0&&(this.x/=t,this.y/=t),this}};var _r=class{name;constructor(t){if(!t)throw new Error("name cannot be null.");this.name=t}},we=class r extends _r{static nextID=0;id=r.nextID++;bones=null;vertices=[];worldVerticesLength=0;timelineAttachment=this;constructor(t){super(t)}computeWorldVertices(t,e,n,i,s,l){n=s+(n>>1)*l;let o=t.bone.skeleton,a=t.deform,c=this.vertices,h=this.bones;if(!h){a.length>0&&(c=a);let p=t.bone,x=p.worldX,m=p.worldY,g=p.a,v=p.b,y=p.c,_=p.d;for(let S=e,M=s;M<n;S+=2,M+=l){let E=c[S],A=c[S+1];i[M]=E*g+A*v+x,i[M+1]=E*y+A*_+m}return}let u=0,d=0;for(let p=0;p<e;p+=2){let x=h[u];u+=x+1,d+=x}let f=o.bones;if(a.length==0)for(let p=s,x=d*3;p<n;p+=l){let m=0,g=0,v=h[u++];for(v+=u;u<v;u++,x+=3){let y=f[h[u]],_=c[x],S=c[x+1],M=c[x+2];m+=(_*y.a+S*y.b+y.worldX)*M,g+=(_*y.c+S*y.d+y.worldY)*M}i[p]=m,i[p+1]=g}else{let p=a;for(let x=s,m=d*3,g=d<<1;x<n;x+=l){let v=0,y=0,_=h[u++];for(_+=u;u<_;u++,m+=3,g+=2){let S=f[h[u]],M=c[m]+p[g],E=c[m+1]+p[g+1],A=c[m+2];v+=(M*S.a+E*S.b+S.worldX)*A,y+=(M*S.c+E*S.d+S.worldY)*A}i[x]=v,i[x+1]=y}}}copyTo(t){this.bones?(t.bones=new Array(this.bones.length),it.arrayCopy(this.bones,0,t.bones,0,this.bones.length)):t.bones=null,this.vertices&&(t.vertices=it.newFloatArray(this.vertices.length),it.arrayCopy(this.vertices,0,t.vertices,0,this.vertices.length)),t.worldVerticesLength=this.worldVerticesLength,t.timelineAttachment=this.timelineAttachment}};var ps=class r{static _nextID=0;id=r.nextID();regions;start=0;digits=0;setupIndex=0;constructor(t){this.regions=new Array(t)}copy(){let t=new r(this.regions.length);return it.arrayCopy(this.regions,0,t.regions,0,this.regions.length),t.start=this.start,t.digits=this.digits,t.setupIndex=this.setupIndex,t}apply(t,e){let n=t.sequenceIndex;n==-1&&(n=this.setupIndex),n>=this.regions.length&&(n=this.regions.length-1);let i=this.regions[n];e.region!=i&&(e.region=i,e.updateRegion())}getPath(t,e){let n=t,i=(this.start+e).toString();for(let s=this.digits-i.length;s>0;s--)n+="0";return n+=i,n}static nextID(){return r._nextID++}},be;(function(r){r[r.hold=0]="hold",r[r.once=1]="once",r[r.loop=2]="loop",r[r.pingpong=3]="pingpong",r[r.onceReverse=4]="onceReverse",r[r.loopReverse=5]="loopReverse",r[r.pingpongReverse=6]="pingpongReverse"})(be||(be={}));var Ta=[be.hold,be.once,be.loop,be.pingpong,be.onceReverse,be.loopReverse,be.pingpongReverse];var ui=class{name;timelines=[];timelineIds=new fs;duration;constructor(t,e,n){if(!t)throw new Error("name cannot be null.");this.name=t,this.setTimelines(e),this.duration=n}setTimelines(t){if(!t)throw new Error("timelines cannot be null.");this.timelines=t,this.timelineIds.clear();for(var e=0;e<t.length;e++)this.timelineIds.addAll(t[e].getPropertyIds())}hasTimeline(t){for(let e=0;e<t.length;e++)if(this.timelineIds.contains(t[e]))return!0;return!1}apply(t,e,n,i,s,l,o,a){if(!t)throw new Error("skeleton cannot be null.");i&&this.duration!=0&&(n%=this.duration,e>0&&(e%=this.duration));let c=this.timelines;for(let h=0,u=c.length;h<u;h++)c[h].apply(t,e,n,s,l,o,a)}},K;(function(r){r[r.setup=0]="setup",r[r.first=1]="first",r[r.replace=2]="replace",r[r.add=3]="add"})(K||(K={}));var Ae;(function(r){r[r.mixIn=0]="mixIn",r[r.mixOut=1]="mixOut"})(Ae||(Ae={}));var kt={rotate:0,x:1,y:2,scaleX:3,scaleY:4,shearX:5,shearY:6,inherit:7,rgb:8,alpha:9,rgb2:10,attachment:11,deform:12,event:13,drawOrder:14,ikConstraint:15,transformConstraint:16,pathConstraintPosition:17,pathConstraintSpacing:18,pathConstraintMix:19,physicsConstraintInertia:20,physicsConstraintStrength:21,physicsConstraintDamping:22,physicsConstraintMass:23,physicsConstraintWind:24,physicsConstraintGravity:25,physicsConstraintMix:26,physicsConstraintReset:27,sequence:28},ae=class{propertyIds;frames;constructor(t,e){this.propertyIds=e,this.frames=it.newFloatArray(t*this.getFrameEntries())}getPropertyIds(){return this.propertyIds}getFrameEntries(){return 1}getFrameCount(){return this.frames.length/this.getFrameEntries()}getDuration(){return this.frames[this.frames.length-this.getFrameEntries()]}static search1(t,e){let n=t.length;for(let i=1;i<n;i++)if(t[i]>e)return i-1;return n-1}static search(t,e,n){let i=t.length;for(let s=n;s<i;s+=n)if(t[s]>e)return s-n;return i-n}},en=class extends ae{curves;constructor(t,e,n){super(t,n),this.curves=it.newFloatArray(t+e*18),this.curves[t-1]=1}setLinear(t){this.curves[t]=0}setStepped(t){this.curves[t]=1}shrink(t){let e=this.getFrameCount()+t*18;if(this.curves.length>e){let n=it.newFloatArray(e);it.arrayCopy(this.curves,0,n,0,e),this.curves=n}}setBezier(t,e,n,i,s,l,o,a,c,h,u){let d=this.curves,f=this.getFrameCount()+t*18;n==0&&(d[e]=2+f);let p=(i-l*2+a)*.03,x=(s-o*2+c)*.03,m=((l-a)*3-i+h)*.006,g=((o-c)*3-s+u)*.006,v=p*2+m,y=x*2+g,_=(l-i)*.3+p+m*.16666667,S=(o-s)*.3+x+g*.16666667,M=i+_,E=s+S;for(let A=f+18;f<A;f+=2)d[f]=M,d[f+1]=E,_+=v,S+=y,v+=m,y+=g,M+=_,E+=S}getBezierValue(t,e,n,i){let s=this.curves;if(s[i]>t){let c=this.frames[e],h=this.frames[e+n];return h+(t-c)/(s[i]-c)*(s[i+1]-h)}let l=i+18;for(i+=2;i<l;i+=2)if(s[i]>=t){let c=s[i-2],h=s[i-1];return h+(t-c)/(s[i]-c)*(s[i+1]-h)}e+=this.getFrameEntries();let o=s[l-2],a=s[l-1];return a+(t-o)/(this.frames[e]-o)*(this.frames[e+n]-a)}},Je=class extends en{constructor(t,e,n){super(t,e,[n])}getFrameEntries(){return 2}setFrame(t,e,n){t<<=1,this.frames[t]=e,this.frames[t+1]=n}getCurveValue(t){let e=this.frames,n=e.length-2;for(let s=2;s<=n;s+=2)if(e[s]>t){n=s-2;break}let i=this.curves[n>>1];switch(i){case 0:let s=e[n],l=e[n+1];return l+(t-s)/(e[n+2]-s)*(e[n+2+1]-l);case 1:return e[n+1]}return this.getBezierValue(t,n,1,i-2)}getRelativeValue(t,e,n,i,s){if(t<this.frames[0]){switch(n){case K.setup:return s;case K.first:return i+(s-i)*e}return i}let l=this.getCurveValue(t);switch(n){case K.setup:return s+l*e;case K.first:case K.replace:l+=s-i}return i+l*e}getAbsoluteValue(t,e,n,i,s){if(t<this.frames[0]){switch(n){case K.setup:return s;case K.first:return i+(s-i)*e}return i}let l=this.getCurveValue(t);return n==K.setup?s+(l-s)*e:i+(l-i)*e}getAbsoluteValue2(t,e,n,i,s,l){if(t<this.frames[0]){switch(n){case K.setup:return s;case K.first:return i+(s-i)*e}return i}return n==K.setup?s+(l-s)*e:i+(l-i)*e}getScaleValue(t,e,n,i,s,l){let o=this.frames;if(t<o[0]){switch(n){case K.setup:return l;case K.first:return s+(l-s)*e}return s}let a=this.getCurveValue(t)*l;if(e==1)return n==K.add?s+a-l:a;if(i==Ae.mixOut)switch(n){case K.setup:return l+(Math.abs(a)*et.signum(l)-l)*e;case K.first:case K.replace:return s+(Math.abs(a)*et.signum(s)-s)*e}else{let c=0;switch(n){case K.setup:return c=Math.abs(l)*et.signum(a),c+(a-c)*e;case K.first:case K.replace:return c=Math.abs(s)*et.signum(a),c+(a-c)*e}}return s+(a-l)*e}},vr=class extends en{constructor(t,e,n,i){super(t,e,[n,i])}getFrameEntries(){return 3}setFrame(t,e,n,i){t*=3,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i}},Wn=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.rotate+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.rotation=this.getRelativeValue(n,s,l,a.rotation,a.data.rotation))}},ms=class extends vr{boneIndex=0;constructor(t,e,n){super(t,e,kt.x+"|"+n,kt.y+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){switch(l){case K.setup:a.x=a.data.x,a.y=a.data.y;return;case K.first:a.x+=(a.data.x-a.x)*s,a.y+=(a.data.y-a.y)*s}return}let h=0,u=0,d=ae.search(c,n,3),f=this.curves[d/3];switch(f){case 0:let p=c[d];h=c[d+1],u=c[d+2];let x=(n-p)/(c[d+3]-p);h+=(c[d+3+1]-h)*x,u+=(c[d+3+2]-u)*x;break;case 1:h=c[d+1],u=c[d+2];break;default:h=this.getBezierValue(n,d,1,f-2),u=this.getBezierValue(n,d,2,f+18-2)}switch(l){case K.setup:a.x=a.data.x+h*s,a.y=a.data.y+u*s;break;case K.first:case K.replace:a.x+=(a.data.x+h-a.x)*s,a.y+=(a.data.y+u-a.y)*s;break;case K.add:a.x+=h*s,a.y+=u*s}}},gs=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.x+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.x=this.getRelativeValue(n,s,l,a.x,a.data.x))}},xs=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.y+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.y=this.getRelativeValue(n,s,l,a.y,a.data.y))}},ys=class extends vr{boneIndex=0;constructor(t,e,n){super(t,e,kt.scaleX+"|"+n,kt.scaleY+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){switch(l){case K.setup:a.scaleX=a.data.scaleX,a.scaleY=a.data.scaleY;return;case K.first:a.scaleX+=(a.data.scaleX-a.scaleX)*s,a.scaleY+=(a.data.scaleY-a.scaleY)*s}return}let h,u,d=ae.search(c,n,3),f=this.curves[d/3];switch(f){case 0:let p=c[d];h=c[d+1],u=c[d+2];let x=(n-p)/(c[d+3]-p);h+=(c[d+3+1]-h)*x,u+=(c[d+3+2]-u)*x;break;case 1:h=c[d+1],u=c[d+2];break;default:h=this.getBezierValue(n,d,1,f-2),u=this.getBezierValue(n,d,2,f+18-2)}if(h*=a.data.scaleX,u*=a.data.scaleY,s==1)l==K.add?(a.scaleX+=h-a.data.scaleX,a.scaleY+=u-a.data.scaleY):(a.scaleX=h,a.scaleY=u);else{let p=0,x=0;if(o==Ae.mixOut)switch(l){case K.setup:p=a.data.scaleX,x=a.data.scaleY,a.scaleX=p+(Math.abs(h)*et.signum(p)-p)*s,a.scaleY=x+(Math.abs(u)*et.signum(x)-x)*s;break;case K.first:case K.replace:p=a.scaleX,x=a.scaleY,a.scaleX=p+(Math.abs(h)*et.signum(p)-p)*s,a.scaleY=x+(Math.abs(u)*et.signum(x)-x)*s;break;case K.add:a.scaleX+=(h-a.data.scaleX)*s,a.scaleY+=(u-a.data.scaleY)*s}else switch(l){case K.setup:p=Math.abs(a.data.scaleX)*et.signum(h),x=Math.abs(a.data.scaleY)*et.signum(u),a.scaleX=p+(h-p)*s,a.scaleY=x+(u-x)*s;break;case K.first:case K.replace:p=Math.abs(a.scaleX)*et.signum(h),x=Math.abs(a.scaleY)*et.signum(u),a.scaleX=p+(h-p)*s,a.scaleY=x+(u-x)*s;break;case K.add:a.scaleX+=(h-a.data.scaleX)*s,a.scaleY+=(u-a.data.scaleY)*s}}}},_s=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.scaleX+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.scaleX=this.getScaleValue(n,s,l,o,a.scaleX,a.data.scaleX))}},vs=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.scaleY+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.scaleY=this.getScaleValue(n,s,l,o,a.scaleY,a.data.scaleY))}},Ms=class extends vr{boneIndex=0;constructor(t,e,n){super(t,e,kt.shearX+"|"+n,kt.shearY+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){switch(l){case K.setup:a.shearX=a.data.shearX,a.shearY=a.data.shearY;return;case K.first:a.shearX+=(a.data.shearX-a.shearX)*s,a.shearY+=(a.data.shearY-a.shearY)*s}return}let h=0,u=0,d=ae.search(c,n,3),f=this.curves[d/3];switch(f){case 0:let p=c[d];h=c[d+1],u=c[d+2];let x=(n-p)/(c[d+3]-p);h+=(c[d+3+1]-h)*x,u+=(c[d+3+2]-u)*x;break;case 1:h=c[d+1],u=c[d+2];break;default:h=this.getBezierValue(n,d,1,f-2),u=this.getBezierValue(n,d,2,f+18-2)}switch(l){case K.setup:a.shearX=a.data.shearX+h*s,a.shearY=a.data.shearY+u*s;break;case K.first:case K.replace:a.shearX+=(a.data.shearX+h-a.shearX)*s,a.shearY+=(a.data.shearY+u-a.shearY)*s;break;case K.add:a.shearX+=h*s,a.shearY+=u*s}}},bs=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.shearX+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.shearX=this.getRelativeValue(n,s,l,a.shearX,a.data.shearX))}},Ss=class extends Je{boneIndex=0;constructor(t,e,n){super(t,e,kt.shearY+"|"+n),this.boneIndex=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];a.active&&(a.shearY=this.getRelativeValue(n,s,l,a.shearY,a.data.shearY))}},ws=class extends ae{boneIndex=0;constructor(t,e){super(t,[kt.inherit+"|"+e]),this.boneIndex=e}getFrameEntries(){return 2}setFrame(t,e,n){t*=2,this.frames[t]=e,this.frames[t+1]=n}apply(t,e,n,i,s,l,o){let a=t.bones[this.boneIndex];if(!a.active)return;if(o==Ae.mixOut){l==K.setup&&(a.inherit=a.data.inherit);return}let c=this.frames;if(n<c[0]){(l==K.setup||l==K.first)&&(a.inherit=a.data.inherit);return}a.inherit=this.frames[ae.search(c,n,2)+1]}},Es=class extends en{slotIndex=0;constructor(t,e,n){super(t,e,[kt.rgb+"|"+n,kt.alpha+"|"+n]),this.slotIndex=n}getFrameEntries(){return 5}setFrame(t,e,n,i,s,l){t*=5,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i,this.frames[t+3]=s,this.frames[t+4]=l}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=this.frames,h=a.color;if(n<c[0]){let g=a.data.color;switch(l){case K.setup:h.setFromColor(g);return;case K.first:h.add((g.r-h.r)*s,(g.g-h.g)*s,(g.b-h.b)*s,(g.a-h.a)*s)}return}let u=0,d=0,f=0,p=0,x=ae.search(c,n,5),m=this.curves[x/5];switch(m){case 0:let g=c[x];u=c[x+1],d=c[x+2],f=c[x+3],p=c[x+4];let v=(n-g)/(c[x+5]-g);u+=(c[x+5+1]-u)*v,d+=(c[x+5+2]-d)*v,f+=(c[x+5+3]-f)*v,p+=(c[x+5+4]-p)*v;break;case 1:u=c[x+1],d=c[x+2],f=c[x+3],p=c[x+4];break;default:u=this.getBezierValue(n,x,1,m-2),d=this.getBezierValue(n,x,2,m+18-2),f=this.getBezierValue(n,x,3,m+36-2),p=this.getBezierValue(n,x,4,m+54-2)}s==1?h.set(u,d,f,p):(l==K.setup&&h.setFromColor(a.data.color),h.add((u-h.r)*s,(d-h.g)*s,(f-h.b)*s,(p-h.a)*s))}},As=class extends en{slotIndex=0;constructor(t,e,n){super(t,e,[kt.rgb+"|"+n]),this.slotIndex=n}getFrameEntries(){return 4}setFrame(t,e,n,i,s){t<<=2,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i,this.frames[t+3]=s}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=this.frames,h=a.color;if(n<c[0]){let m=a.data.color;switch(l){case K.setup:h.r=m.r,h.g=m.g,h.b=m.b;return;case K.first:h.r+=(m.r-h.r)*s,h.g+=(m.g-h.g)*s,h.b+=(m.b-h.b)*s}return}let u=0,d=0,f=0,p=ae.search(c,n,4),x=this.curves[p>>2];switch(x){case 0:let m=c[p];u=c[p+1],d=c[p+2],f=c[p+3];let g=(n-m)/(c[p+4]-m);u+=(c[p+4+1]-u)*g,d+=(c[p+4+2]-d)*g,f+=(c[p+4+3]-f)*g;break;case 1:u=c[p+1],d=c[p+2],f=c[p+3];break;default:u=this.getBezierValue(n,p,1,x-2),d=this.getBezierValue(n,p,2,x+18-2),f=this.getBezierValue(n,p,3,x+36-2)}if(s==1)h.r=u,h.g=d,h.b=f;else{if(l==K.setup){let m=a.data.color;h.r=m.r,h.g=m.g,h.b=m.b}h.r+=(u-h.r)*s,h.g+=(d-h.g)*s,h.b+=(f-h.b)*s}}},Ts=class extends Je{slotIndex=0;constructor(t,e,n){super(t,e,kt.alpha+"|"+n),this.slotIndex=n}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=a.color;if(n<this.frames[0]){let u=a.data.color;switch(l){case K.setup:c.a=u.a;return;case K.first:c.a+=(u.a-c.a)*s}return}let h=this.getCurveValue(n);s==1?c.a=h:(l==K.setup&&(c.a=a.data.color.a),c.a+=(h-c.a)*s)}},Cs=class extends en{slotIndex=0;constructor(t,e,n){super(t,e,[kt.rgb+"|"+n,kt.alpha+"|"+n,kt.rgb2+"|"+n]),this.slotIndex=n}getFrameEntries(){return 8}setFrame(t,e,n,i,s,l,o,a,c){t<<=3,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i,this.frames[t+3]=s,this.frames[t+4]=l,this.frames[t+5]=o,this.frames[t+6]=a,this.frames[t+7]=c}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=this.frames,h=a.color,u=a.darkColor;if(n<c[0]){let S=a.data.color,M=a.data.darkColor;switch(l){case K.setup:h.setFromColor(S),u.r=M.r,u.g=M.g,u.b=M.b;return;case K.first:h.add((S.r-h.r)*s,(S.g-h.g)*s,(S.b-h.b)*s,(S.a-h.a)*s),u.r+=(M.r-u.r)*s,u.g+=(M.g-u.g)*s,u.b+=(M.b-u.b)*s}return}let d=0,f=0,p=0,x=0,m=0,g=0,v=0,y=ae.search(c,n,8),_=this.curves[y>>3];switch(_){case 0:let S=c[y];d=c[y+1],f=c[y+2],p=c[y+3],x=c[y+4],m=c[y+5],g=c[y+6],v=c[y+7];let M=(n-S)/(c[y+8]-S);d+=(c[y+8+1]-d)*M,f+=(c[y+8+2]-f)*M,p+=(c[y+8+3]-p)*M,x+=(c[y+8+4]-x)*M,m+=(c[y+8+5]-m)*M,g+=(c[y+8+6]-g)*M,v+=(c[y+8+7]-v)*M;break;case 1:d=c[y+1],f=c[y+2],p=c[y+3],x=c[y+4],m=c[y+5],g=c[y+6],v=c[y+7];break;default:d=this.getBezierValue(n,y,1,_-2),f=this.getBezierValue(n,y,2,_+18-2),p=this.getBezierValue(n,y,3,_+36-2),x=this.getBezierValue(n,y,4,_+54-2),m=this.getBezierValue(n,y,5,_+72-2),g=this.getBezierValue(n,y,6,_+90-2),v=this.getBezierValue(n,y,7,_+108-2)}if(s==1)h.set(d,f,p,x),u.r=m,u.g=g,u.b=v;else{if(l==K.setup){h.setFromColor(a.data.color);let S=a.data.darkColor;u.r=S.r,u.g=S.g,u.b=S.b}h.add((d-h.r)*s,(f-h.g)*s,(p-h.b)*s,(x-h.a)*s),u.r+=(m-u.r)*s,u.g+=(g-u.g)*s,u.b+=(v-u.b)*s}}},Rs=class extends en{slotIndex=0;constructor(t,e,n){super(t,e,[kt.rgb+"|"+n,kt.rgb2+"|"+n]),this.slotIndex=n}getFrameEntries(){return 7}setFrame(t,e,n,i,s,l,o,a){t*=7,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i,this.frames[t+3]=s,this.frames[t+4]=l,this.frames[t+5]=o,this.frames[t+6]=a}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=this.frames,h=a.color,u=a.darkColor;if(n<c[0]){let S=a.data.color,M=a.data.darkColor;switch(l){case K.setup:h.r=S.r,h.g=S.g,h.b=S.b,u.r=M.r,u.g=M.g,u.b=M.b;return;case K.first:h.r+=(S.r-h.r)*s,h.g+=(S.g-h.g)*s,h.b+=(S.b-h.b)*s,u.r+=(M.r-u.r)*s,u.g+=(M.g-u.g)*s,u.b+=(M.b-u.b)*s}return}let d=0,f=0,p=0,x=0,m=0,g=0,v=0,y=ae.search(c,n,7),_=this.curves[y/7];switch(_){case 0:let S=c[y];d=c[y+1],f=c[y+2],p=c[y+3],m=c[y+4],g=c[y+5],v=c[y+6];let M=(n-S)/(c[y+7]-S);d+=(c[y+7+1]-d)*M,f+=(c[y+7+2]-f)*M,p+=(c[y+7+3]-p)*M,m+=(c[y+7+4]-m)*M,g+=(c[y+7+5]-g)*M,v+=(c[y+7+6]-v)*M;break;case 1:d=c[y+1],f=c[y+2],p=c[y+3],m=c[y+4],g=c[y+5],v=c[y+6];break;default:d=this.getBezierValue(n,y,1,_-2),f=this.getBezierValue(n,y,2,_+18-2),p=this.getBezierValue(n,y,3,_+36-2),m=this.getBezierValue(n,y,4,_+54-2),g=this.getBezierValue(n,y,5,_+72-2),v=this.getBezierValue(n,y,6,_+90-2)}if(s==1)h.r=d,h.g=f,h.b=p,u.r=m,u.g=g,u.b=v;else{if(l==K.setup){let S=a.data.color,M=a.data.darkColor;h.r=S.r,h.g=S.g,h.b=S.b,u.r=M.r,u.g=M.g,u.b=M.b}h.r+=(d-h.r)*s,h.g+=(f-h.g)*s,h.b+=(p-h.b)*s,u.r+=(m-u.r)*s,u.g+=(g-u.g)*s,u.b+=(v-u.b)*s}}},dn=class extends ae{slotIndex=0;attachmentNames;constructor(t,e){super(t,[kt.attachment+"|"+e]),this.slotIndex=e,this.attachmentNames=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,e,n){this.frames[t]=e,this.attachmentNames[t]=n}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(a.bone.active){if(o==Ae.mixOut){l==K.setup&&this.setAttachment(t,a,a.data.attachmentName);return}if(n<this.frames[0]){(l==K.setup||l==K.first)&&this.setAttachment(t,a,a.data.attachmentName);return}this.setAttachment(t,a,this.attachmentNames[ae.search1(this.frames,n)])}}setAttachment(t,e,n){e.setAttachment(n?t.getAttachment(this.slotIndex,n):null)}},Is=class extends en{slotIndex=0;attachment;vertices;constructor(t,e,n,i){super(t,e,[kt.deform+"|"+n+"|"+i.id]),this.slotIndex=n,this.attachment=i,this.vertices=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,e,n){this.frames[t]=e,this.vertices[t]=n}setBezier(t,e,n,i,s,l,o,a,c,h,u){let d=this.curves,f=this.getFrameCount()+t*18;n==0&&(d[e]=2+f);let p=(i-l*2+a)*.03,x=c*.03-o*.06,m=((l-a)*3-i+h)*.006,g=(o-c+.33333333)*.018,v=p*2+m,y=x*2+g,_=(l-i)*.3+p+m*.16666667,S=o*.3+x+g*.16666667,M=i+_,E=S;for(let A=f+18;f<A;f+=2)d[f]=M,d[f+1]=E,_+=v,S+=y,v+=m,y+=g,M+=_,E+=S}getCurvePercent(t,e){let n=this.curves,i=n[e];switch(i){case 0:let a=this.frames[e];return(t-a)/(this.frames[e+this.getFrameEntries()]-a);case 1:return 0}if(i-=2,n[i]>t){let a=this.frames[e];return n[i+1]*(t-a)/(n[i]-a)}let s=i+18;for(i+=2;i<s;i+=2)if(n[i]>=t){let a=n[i-2],c=n[i-1];return c+(t-a)/(n[i]-a)*(n[i+1]-c)}let l=n[s-2],o=n[s-1];return o+(1-o)*(t-l)/(this.frames[e+this.getFrameEntries()]-l)}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=a.getAttachment();if(!c||!(c instanceof we)||c.timelineAttachment!=this.attachment)return;let h=a.deform;h.length==0&&(l=K.setup);let u=this.vertices,d=u[0].length,f=this.frames;if(n<f[0]){switch(l){case K.setup:h.length=0;return;case K.first:if(s==1){h.length=0;return}h.length=d;let y=c;if(y.bones){s=1-s;for(var p=0;p<d;p++)h[p]*=s}else{let _=y.vertices;for(var p=0;p<d;p++)h[p]+=(_[p]-h[p])*s}}return}if(h.length=d,n>=f[f.length-1]){let y=u[f.length-1];if(s==1)if(l==K.add){let _=c;if(_.bones)for(let S=0;S<d;S++)h[S]+=y[S];else{let S=_.vertices;for(let M=0;M<d;M++)h[M]+=y[M]-S[M]}}else it.arrayCopy(y,0,h,0,d);else switch(l){case K.setup:{let S=c;if(S.bones)for(let M=0;M<d;M++)h[M]=y[M]*s;else{let M=S.vertices;for(let E=0;E<d;E++){let A=M[E];h[E]=A+(y[E]-A)*s}}break}case K.first:case K.replace:for(let S=0;S<d;S++)h[S]+=(y[S]-h[S])*s;break;case K.add:let _=c;if(_.bones)for(let S=0;S<d;S++)h[S]+=y[S]*s;else{let S=_.vertices;for(let M=0;M<d;M++)h[M]+=(y[M]-S[M])*s}}return}let x=ae.search1(f,n),m=this.getCurvePercent(n,x),g=u[x],v=u[x+1];if(s==1)if(l==K.add){let y=c;if(y.bones)for(let _=0;_<d;_++){let S=g[_];h[_]+=S+(v[_]-S)*m}else{let _=y.vertices;for(let S=0;S<d;S++){let M=g[S];h[S]+=M+(v[S]-M)*m-_[S]}}}else for(let y=0;y<d;y++){let _=g[y];h[y]=_+(v[y]-_)*m}else switch(l){case K.setup:{let _=c;if(_.bones)for(let S=0;S<d;S++){let M=g[S];h[S]=(M+(v[S]-M)*m)*s}else{let S=_.vertices;for(let M=0;M<d;M++){let E=g[M],A=S[M];h[M]=A+(E+(v[M]-E)*m-A)*s}}break}case K.first:case K.replace:for(let _=0;_<d;_++){let S=g[_];h[_]+=(S+(v[_]-S)*m-h[_])*s}break;case K.add:let y=c;if(y.bones)for(let _=0;_<d;_++){let S=g[_];h[_]+=(S+(v[_]-S)*m)*s}else{let _=y.vertices;for(let S=0;S<d;S++){let M=g[S];h[S]+=(M+(v[S]-M)*m-_[S])*s}}}}},di=class r extends ae{static propertyIds=[""+kt.event];events;constructor(t){super(t,r.propertyIds),this.events=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,e){this.frames[t]=e.time,this.events[t]=e}apply(t,e,n,i,s,l,o){if(!i)return;let a=this.frames,c=this.frames.length;if(e>n)this.apply(t,e,Number.MAX_VALUE,i,s,l,o),e=-1;else if(e>=a[c-1])return;if(n<a[0])return;let h=0;if(e<a[0])h=0;else{h=ae.search1(a,e)+1;let u=a[h];for(;h>0&&a[h-1]==u;)h--}for(;h<c&&n>=a[h];h++)i.push(this.events[h])}},vn=class r extends ae{static propertyIds=[""+kt.drawOrder];drawOrders;constructor(t){super(t,r.propertyIds),this.drawOrders=new Array(t)}getFrameCount(){return this.frames.length}setFrame(t,e,n){this.frames[t]=e,this.drawOrders[t]=n}apply(t,e,n,i,s,l,o){if(o==Ae.mixOut){l==K.setup&&it.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}if(n<this.frames[0]){(l==K.setup||l==K.first)&&it.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}let a=ae.search1(this.frames,n),c=this.drawOrders[a];if(!c)it.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);else{let h=t.drawOrder,u=t.slots;for(let d=0,f=c.length;d<f;d++)h[d]=u[c[d]]}}},Ps=class extends en{constraintIndex=0;constructor(t,e,n){super(t,e,[kt.ikConstraint+"|"+n]),this.constraintIndex=n}getFrameEntries(){return 6}setFrame(t,e,n,i,s,l,o){t*=6,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i,this.frames[t+3]=s,this.frames[t+4]=l?1:0,this.frames[t+5]=o?1:0}apply(t,e,n,i,s,l,o){let a=t.ikConstraints[this.constraintIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){switch(l){case K.setup:a.mix=a.data.mix,a.softness=a.data.softness,a.bendDirection=a.data.bendDirection,a.compress=a.data.compress,a.stretch=a.data.stretch;return;case K.first:a.mix+=(a.data.mix-a.mix)*s,a.softness+=(a.data.softness-a.softness)*s,a.bendDirection=a.data.bendDirection,a.compress=a.data.compress,a.stretch=a.data.stretch}return}let h=0,u=0,d=ae.search(c,n,6),f=this.curves[d/6];switch(f){case 0:let p=c[d];h=c[d+1],u=c[d+2];let x=(n-p)/(c[d+6]-p);h+=(c[d+6+1]-h)*x,u+=(c[d+6+2]-u)*x;break;case 1:h=c[d+1],u=c[d+2];break;default:h=this.getBezierValue(n,d,1,f-2),u=this.getBezierValue(n,d,2,f+18-2)}l==K.setup?(a.mix=a.data.mix+(h-a.data.mix)*s,a.softness=a.data.softness+(u-a.data.softness)*s,o==Ae.mixOut?(a.bendDirection=a.data.bendDirection,a.compress=a.data.compress,a.stretch=a.data.stretch):(a.bendDirection=c[d+3],a.compress=c[d+4]!=0,a.stretch=c[d+5]!=0)):(a.mix+=(h-a.mix)*s,a.softness+=(u-a.softness)*s,o==Ae.mixIn&&(a.bendDirection=c[d+3],a.compress=c[d+4]!=0,a.stretch=c[d+5]!=0))}},Ls=class extends en{constraintIndex=0;constructor(t,e,n){super(t,e,[kt.transformConstraint+"|"+n]),this.constraintIndex=n}getFrameEntries(){return 7}setFrame(t,e,n,i,s,l,o,a){let c=this.frames;t*=7,c[t]=e,c[t+1]=n,c[t+2]=i,c[t+3]=s,c[t+4]=l,c[t+5]=o,c[t+6]=a}apply(t,e,n,i,s,l,o){let a=t.transformConstraints[this.constraintIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){let v=a.data;switch(l){case K.setup:a.mixRotate=v.mixRotate,a.mixX=v.mixX,a.mixY=v.mixY,a.mixScaleX=v.mixScaleX,a.mixScaleY=v.mixScaleY,a.mixShearY=v.mixShearY;return;case K.first:a.mixRotate+=(v.mixRotate-a.mixRotate)*s,a.mixX+=(v.mixX-a.mixX)*s,a.mixY+=(v.mixY-a.mixY)*s,a.mixScaleX+=(v.mixScaleX-a.mixScaleX)*s,a.mixScaleY+=(v.mixScaleY-a.mixScaleY)*s,a.mixShearY+=(v.mixShearY-a.mixShearY)*s}return}let h,u,d,f,p,x,m=ae.search(c,n,7),g=this.curves[m/7];switch(g){case 0:let v=c[m];h=c[m+1],u=c[m+2],d=c[m+3],f=c[m+4],p=c[m+5],x=c[m+6];let y=(n-v)/(c[m+7]-v);h+=(c[m+7+1]-h)*y,u+=(c[m+7+2]-u)*y,d+=(c[m+7+3]-d)*y,f+=(c[m+7+4]-f)*y,p+=(c[m+7+5]-p)*y,x+=(c[m+7+6]-x)*y;break;case 1:h=c[m+1],u=c[m+2],d=c[m+3],f=c[m+4],p=c[m+5],x=c[m+6];break;default:h=this.getBezierValue(n,m,1,g-2),u=this.getBezierValue(n,m,2,g+18-2),d=this.getBezierValue(n,m,3,g+36-2),f=this.getBezierValue(n,m,4,g+54-2),p=this.getBezierValue(n,m,5,g+72-2),x=this.getBezierValue(n,m,6,g+90-2)}if(l==K.setup){let v=a.data;a.mixRotate=v.mixRotate+(h-v.mixRotate)*s,a.mixX=v.mixX+(u-v.mixX)*s,a.mixY=v.mixY+(d-v.mixY)*s,a.mixScaleX=v.mixScaleX+(f-v.mixScaleX)*s,a.mixScaleY=v.mixScaleY+(p-v.mixScaleY)*s,a.mixShearY=v.mixShearY+(x-v.mixShearY)*s}else a.mixRotate+=(h-a.mixRotate)*s,a.mixX+=(u-a.mixX)*s,a.mixY+=(d-a.mixY)*s,a.mixScaleX+=(f-a.mixScaleX)*s,a.mixScaleY+=(p-a.mixScaleY)*s,a.mixShearY+=(x-a.mixShearY)*s}},Ds=class extends Je{constraintIndex=0;constructor(t,e,n){super(t,e,kt.pathConstraintPosition+"|"+n),this.constraintIndex=n}apply(t,e,n,i,s,l,o){let a=t.pathConstraints[this.constraintIndex];a.active&&(a.position=this.getAbsoluteValue(n,s,l,a.position,a.data.position))}},Us=class extends Je{constraintIndex=0;constructor(t,e,n){super(t,e,kt.pathConstraintSpacing+"|"+n),this.constraintIndex=n}apply(t,e,n,i,s,l,o){let a=t.pathConstraints[this.constraintIndex];a.active&&(a.spacing=this.getAbsoluteValue(n,s,l,a.spacing,a.data.spacing))}},Ns=class extends en{constraintIndex=0;constructor(t,e,n){super(t,e,[kt.pathConstraintMix+"|"+n]),this.constraintIndex=n}getFrameEntries(){return 4}setFrame(t,e,n,i,s){let l=this.frames;t<<=2,l[t]=e,l[t+1]=n,l[t+2]=i,l[t+3]=s}apply(t,e,n,i,s,l,o){let a=t.pathConstraints[this.constraintIndex];if(!a.active)return;let c=this.frames;if(n<c[0]){switch(l){case K.setup:a.mixRotate=a.data.mixRotate,a.mixX=a.data.mixX,a.mixY=a.data.mixY;return;case K.first:a.mixRotate+=(a.data.mixRotate-a.mixRotate)*s,a.mixX+=(a.data.mixX-a.mixX)*s,a.mixY+=(a.data.mixY-a.mixY)*s}return}let h,u,d,f=ae.search(c,n,4),p=this.curves[f>>2];switch(p){case 0:let x=c[f];h=c[f+1],u=c[f+2],d=c[f+3];let m=(n-x)/(c[f+4]-x);h+=(c[f+4+1]-h)*m,u+=(c[f+4+2]-u)*m,d+=(c[f+4+3]-d)*m;break;case 1:h=c[f+1],u=c[f+2],d=c[f+3];break;default:h=this.getBezierValue(n,f,1,p-2),u=this.getBezierValue(n,f,2,p+18-2),d=this.getBezierValue(n,f,3,p+36-2)}if(l==K.setup){let x=a.data;a.mixRotate=x.mixRotate+(h-x.mixRotate)*s,a.mixX=x.mixX+(u-x.mixX)*s,a.mixY=x.mixY+(d-x.mixY)*s}else a.mixRotate+=(h-a.mixRotate)*s,a.mixX+=(u-a.mixX)*s,a.mixY+=(d-a.mixY)*s}},Xn=class extends Je{constraintIndex=0;constructor(t,e,n,i){super(t,e,i+"|"+n),this.constraintIndex=n}apply(t,e,n,i,s,l,o){let a;if(this.constraintIndex==-1){let c=n>=this.frames[0]?this.getCurveValue(n):0;for(let h of t.physicsConstraints)h.active&&this.global(h.data)&&this.set(h,this.getAbsoluteValue2(n,s,l,this.get(h),this.setup(h),c))}else a=t.physicsConstraints[this.constraintIndex],a.active&&this.set(a,this.getAbsoluteValue(n,s,l,this.get(a),this.setup(a)))}},Fs=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintInertia)}setup(t){return t.data.inertia}get(t){return t.inertia}set(t,e){t.inertia=e}global(t){return t.inertiaGlobal}},Os=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintStrength)}setup(t){return t.data.strength}get(t){return t.strength}set(t,e){t.strength=e}global(t){return t.strengthGlobal}},Bs=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintDamping)}setup(t){return t.data.damping}get(t){return t.damping}set(t,e){t.damping=e}global(t){return t.dampingGlobal}},ks=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintMass)}setup(t){return 1/t.data.massInverse}get(t){return 1/t.massInverse}set(t,e){t.massInverse=1/e}global(t){return t.massGlobal}},zs=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintWind)}setup(t){return t.data.wind}get(t){return t.wind}set(t,e){t.wind=e}global(t){return t.windGlobal}},Vs=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintGravity)}setup(t){return t.data.gravity}get(t){return t.gravity}set(t,e){t.gravity=e}global(t){return t.gravityGlobal}},Hs=class extends Xn{constructor(t,e,n){super(t,e,n,kt.physicsConstraintMix)}setup(t){return t.data.mix}get(t){return t.mix}set(t,e){t.mix=e}global(t){return t.mixGlobal}},Gs=class r extends ae{static propertyIds=[kt.physicsConstraintReset.toString()];constraintIndex;constructor(t,e){super(t,r.propertyIds),this.constraintIndex=e}getFrameCount(){return this.frames.length}setFrame(t,e){this.frames[t]=e}apply(t,e,n,i,s,l,o){let a;if(this.constraintIndex!=-1&&(a=t.physicsConstraints[this.constraintIndex],!a.active))return;let c=this.frames;if(e>n)this.apply(t,e,Number.MAX_VALUE,[],s,l,o),e=-1;else if(e>=c[c.length-1])return;if(!(n<c[0])&&(e<c[0]||n>=c[ae.search1(c,e)+1]))if(a!=null)a.reset();else for(let h of t.physicsConstraints)h.active&&h.reset()}},Ws=class r extends ae{static ENTRIES=3;static MODE=1;static DELAY=2;slotIndex;attachment;constructor(t,e,n){super(t,[kt.sequence+"|"+e+"|"+n.sequence.id]),this.slotIndex=e,this.attachment=n}getFrameEntries(){return r.ENTRIES}getSlotIndex(){return this.slotIndex}getAttachment(){return this.attachment}setFrame(t,e,n,i,s){let l=this.frames;t*=r.ENTRIES,l[t]=e,l[t+r.MODE]=n|i<<4,l[t+r.DELAY]=s}apply(t,e,n,i,s,l,o){let a=t.slots[this.slotIndex];if(!a.bone.active)return;let c=a.attachment,h=this.attachment;if(c!=h&&(!(c instanceof we)||c.timelineAttachment!=h))return;if(o==Ae.mixOut){l==K.setup&&(a.sequenceIndex=-1);return}let u=this.frames;if(n<u[0]){(l==K.setup||l==K.first)&&(a.sequenceIndex=-1);return}let d=ae.search(u,n,r.ENTRIES),f=u[d],p=u[d+r.MODE],x=u[d+r.DELAY];if(!this.attachment.sequence)return;let m=p>>4,g=this.attachment.sequence.regions.length,v=Ta[p&15];if(v!=be.hold)switch(m+=(n-f)/x+1e-5|0,v){case be.once:m=Math.min(g-1,m);break;case be.loop:m%=g;break;case be.pingpong:{let y=(g<<1)-2;m=y==0?0:m%y,m>=g&&(m=y-m);break}case be.onceReverse:m=Math.max(g-1-m,0);break;case be.loopReverse:m=g-1-m%g;break;case be.pingpongReverse:{let y=(g<<1)-2;m=y==0?0:(m+g-1)%y,m>=g&&(m=y-m)}}a.sequenceIndex=m}};var Xs=class r{static _emptyAnimation=new ui("<empty>",[],0);static emptyAnimation(){return r._emptyAnimation}data;tracks=new Array;timeScale=1;unkeyedState=0;events=new Array;listeners=new Array;queue=new Zl(this);propertyIDs=new fs;animationsChanged=!1;trackEntryPool=new hi(()=>new ql);constructor(t){this.data=t}update(t){t*=this.timeScale;let e=this.tracks;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(!s)continue;s.animationLast=s.nextAnimationLast,s.trackLast=s.nextTrackLast;let l=t*s.timeScale;if(s.delay>0){if(s.delay-=l,s.delay>0)continue;l=-s.delay,s.delay=0}let o=s.next;if(o){let a=s.trackLast-o.delay;if(a>=0){for(o.delay=0,o.trackTime+=s.timeScale==0?0:(a/s.timeScale+t)*o.timeScale,s.trackTime+=l,this.setCurrent(n,o,!0);o.mixingFrom;)o.mixTime+=t,o=o.mixingFrom;continue}}else if(s.trackLast>=s.trackEnd&&!s.mixingFrom){e[n]=null,this.queue.end(s),this.clearNext(s);continue}if(s.mixingFrom&&this.updateMixingFrom(s,t)){let a=s.mixingFrom;for(s.mixingFrom=null,a&&(a.mixingTo=null);a;)this.queue.end(a),a=a.mixingFrom}s.trackTime+=l}this.queue.drain()}updateMixingFrom(t,e){let n=t.mixingFrom;if(!n)return!0;let i=this.updateMixingFrom(n,e);return n.animationLast=n.nextAnimationLast,n.trackLast=n.nextTrackLast,t.nextTrackLast!=-1&&t.mixTime>=t.mixDuration?((n.totalAlpha==0||t.mixDuration==0)&&(t.mixingFrom=n.mixingFrom,n.mixingFrom!=null&&(n.mixingFrom.mixingTo=t),t.interruptAlpha=n.interruptAlpha,this.queue.end(n)),i):(n.trackTime+=e*n.timeScale,t.mixTime+=e,!1)}apply(t){if(!t)throw new Error("skeleton cannot be null.");this.animationsChanged&&this._animationsChanged();let e=this.events,n=this.tracks,i=!1;for(let d=0,f=n.length;d<f;d++){let p=n[d];if(!p||p.delay>0)continue;i=!0;let x=d==0?K.first:p.mixBlend,m=p.alpha;p.mixingFrom?m*=this.applyMixingFrom(p,t,x):p.trackTime>=p.trackEnd&&!p.next&&(m=0);let g=m>=p.alphaAttachmentThreshold,v=p.animationLast,y=p.getAnimationTime(),_=y,S=e;p.reverse&&(_=p.animation.duration-_,S=null);let M=p.animation.timelines,E=M.length;if(d==0&&m==1||x==K.add){d==0&&(g=!0);for(let A=0;A<E;A++){it.webkit602BugfixHelper(m,x);var s=M[A];s instanceof dn?this.applyAttachmentTimeline(s,t,_,x,g):s.apply(t,v,_,S,m,x,Ae.mixIn)}}else{let A=p.timelineMode,w=p.shortestRotation,b=!w&&p.timelinesRotation.length!=E<<1;b&&(p.timelinesRotation.length=E<<1);for(let C=0;C<E;C++){let U=M[C],L=A[C]==Xl?x:K.setup;!w&&U instanceof Wn?this.applyRotateTimeline(U,t,_,m,L,p.timelinesRotation,C<<1,b):U instanceof dn?this.applyAttachmentTimeline(U,t,_,x,g):(it.webkit602BugfixHelper(m,x),U.apply(t,v,_,S,m,L,Ae.mixIn))}}this.queueEvents(p,y),e.length=0,p.nextAnimationLast=y,p.nextTrackLast=p.trackTime}for(var l=this.unkeyedState+Yh,o=t.slots,a=0,c=t.slots.length;a<c;a++){var h=o[a];if(h.attachmentState==l){var u=h.data.attachmentName;h.setAttachment(u?t.getAttachment(h.data.index,u):null)}}return this.unkeyedState+=2,this.queue.drain(),i}applyMixingFrom(t,e,n){let i=t.mixingFrom;i.mixingFrom&&this.applyMixingFrom(i,e,n);let s=0;t.mixDuration==0?(s=1,n==K.first&&(n=K.setup)):(s=t.mixTime/t.mixDuration,s>1&&(s=1),n!=K.first&&(n=i.mixBlend));let l=s<i.mixAttachmentThreshold,o=s<i.mixDrawOrderThreshold,a=i.animation.timelines,c=a.length,h=i.alpha*t.interruptAlpha,u=h*(1-s),d=i.animationLast,f=i.getAnimationTime(),p=f,x=null;if(i.reverse?p=i.animation.duration-p:s<i.eventThreshold&&(x=this.events),n==K.add)for(let m=0;m<c;m++)a[m].apply(e,d,p,x,u,n,Ae.mixOut);else{let m=i.timelineMode,g=i.timelineHoldMix,v=i.shortestRotation,y=!v&&i.timelinesRotation.length!=c<<1;y&&(i.timelinesRotation.length=c<<1),i.totalAlpha=0;for(let _=0;_<c;_++){let S=a[_],M=Ae.mixOut,E,A=0;switch(m[_]){case Xl:if(!o&&S instanceof vn)continue;E=n,A=u;break;case Wh:E=K.setup,A=u;break;case Xh:E=n,A=h;break;case Yl:E=K.setup,A=h;break;default:E=K.setup;let w=g[_];A=h*Math.max(0,1-w.mixTime/w.mixDuration);break}i.totalAlpha+=A,!v&&S instanceof Wn?this.applyRotateTimeline(S,e,p,A,E,i.timelinesRotation,_<<1,y):S instanceof dn?this.applyAttachmentTimeline(S,e,p,E,l&&A>=i.alphaAttachmentThreshold):(it.webkit602BugfixHelper(A,n),o&&S instanceof vn&&E==K.setup&&(M=Ae.mixIn),S.apply(e,d,p,x,A,E,M))}}return t.mixDuration>0&&this.queueEvents(i,f),this.events.length=0,i.nextAnimationLast=f,i.nextTrackLast=i.trackTime,s}applyAttachmentTimeline(t,e,n,i,s){var l=e.slots[t.slotIndex];l.bone.active&&(n<t.frames[0]?(i==K.setup||i==K.first)&&this.setAttachment(e,l,l.data.attachmentName,s):this.setAttachment(e,l,t.attachmentNames[ae.search1(t.frames,n)],s),l.attachmentState<=this.unkeyedState&&(l.attachmentState=this.unkeyedState+Yh))}setAttachment(t,e,n,i){e.setAttachment(n?t.getAttachment(e.data.index,n):null),i&&(e.attachmentState=this.unkeyedState+Yg)}applyRotateTimeline(t,e,n,i,s,l,o,a){if(a&&(l[o]=0),i==1){t.apply(e,0,n,null,1,s,Ae.mixIn);return}let c=e.bones[t.boneIndex];if(!c.active)return;let h=t.frames,u=0,d=0;if(n<h[0])switch(s){case K.setup:c.rotation=c.data.rotation;default:return;case K.first:u=c.rotation,d=c.data.rotation}else u=s==K.setup?c.data.rotation:c.rotation,d=c.data.rotation+t.getCurveValue(n);let f=0,p=d-u;if(p-=Math.ceil(p/360-.5)*360,p==0)f=l[o];else{let x=0,m=0;a?(x=0,m=p):(x=l[o],m=l[o+1]);let g=x-x%360;f=p+g;let v=p>=0,y=x>=0;Math.abs(m)<=90&&et.signum(m)!=et.signum(p)&&(Math.abs(x-g)>180?(f+=360*et.signum(x),y=v):g!=0?f-=360*et.signum(x):y=v),y!=v&&(f+=360*et.signum(x)),l[o]=f}l[o+1]=p,c.rotation=u+f*i}queueEvents(t,e){let n=t.animationStart,i=t.animationEnd,s=i-n,l=t.trackLast%s,o=this.events,a=0,c=o.length;for(;a<c;a++){let u=o[a];if(u.time<l)break;u.time>i||this.queue.event(t,u)}let h=!1;if(t.loop)if(s==0)h=!0;else{let u=Math.floor(t.trackTime/s);h=u>0&&u>Math.floor(t.trackLast/s)}else h=e>=i&&t.animationLast<i;for(h&&this.queue.complete(t);a<c;a++){let u=o[a];u.time<n||this.queue.event(t,u)}}clearTracks(){let t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let e=0,n=this.tracks.length;e<n;e++)this.clearTrack(e);this.tracks.length=0,this.queue.drainDisabled=t,this.queue.drain()}clearTrack(t){if(t>=this.tracks.length)return;let e=this.tracks[t];if(!e)return;this.queue.end(e),this.clearNext(e);let n=e;for(;;){let i=n.mixingFrom;if(!i)break;this.queue.end(i),n.mixingFrom=null,n.mixingTo=null,n=i}this.tracks[e.trackIndex]=null,this.queue.drain()}setCurrent(t,e,n){let i=this.expandToIndex(t);this.tracks[t]=e,e.previous=null,i&&(n&&this.queue.interrupt(i),e.mixingFrom=i,i.mixingTo=e,e.mixTime=0,i.mixingFrom&&i.mixDuration>0&&(e.interruptAlpha*=Math.min(1,i.mixTime/i.mixDuration)),i.timelinesRotation.length=0),this.queue.start(e)}setAnimation(t,e,n=!1){let i=this.data.skeletonData.findAnimation(e);if(!i)throw new Error("Animation not found: "+e);return this.setAnimationWith(t,i,n)}setAnimationWith(t,e,n=!1){if(!e)throw new Error("animation cannot be null.");let i=!0,s=this.expandToIndex(t);s&&(s.nextTrackLast==-1?(this.tracks[t]=s.mixingFrom,this.queue.interrupt(s),this.queue.end(s),this.clearNext(s),s=s.mixingFrom,i=!1):this.clearNext(s));let l=this.trackEntry(t,e,n,s);return this.setCurrent(t,l,i),this.queue.drain(),l}addAnimation(t,e,n=!1,i=0){let s=this.data.skeletonData.findAnimation(e);if(!s)throw new Error("Animation not found: "+e);return this.addAnimationWith(t,s,n,i)}addAnimationWith(t,e,n=!1,i=0){if(!e)throw new Error("animation cannot be null.");let s=this.expandToIndex(t);if(s)for(;s.next;)s=s.next;let l=this.trackEntry(t,e,n,s);return s?(s.next=l,l.previous=s,i<=0&&(i=Math.max(i+s.getTrackComplete()-l.mixDuration,0))):(this.setCurrent(t,l,!0),this.queue.drain(),i<0&&(i=0)),l.delay=i,l}setEmptyAnimation(t,e=0){let n=this.setAnimationWith(t,r.emptyAnimation(),!1);return n.mixDuration=e,n.trackEnd=e,n}addEmptyAnimation(t,e=0,n=0){let i=this.addAnimationWith(t,r.emptyAnimation(),!1,n);return n<=0&&(i.delay=Math.max(i.delay+i.mixDuration-e,0)),i.mixDuration=e,i.trackEnd=e,i}setEmptyAnimations(t=0){let e=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let n=0,i=this.tracks.length;n<i;n++){let s=this.tracks[n];s&&this.setEmptyAnimation(s.trackIndex,t)}this.queue.drainDisabled=e,this.queue.drain()}expandToIndex(t){return t<this.tracks.length?this.tracks[t]:(it.ensureArrayCapacity(this.tracks,t+1,null),this.tracks.length=t+1,null)}trackEntry(t,e,n,i){let s=this.trackEntryPool.obtain();return s.reset(),s.trackIndex=t,s.animation=e,s.loop=n,s.holdPrevious=!1,s.reverse=!1,s.shortestRotation=!1,s.eventThreshold=0,s.alphaAttachmentThreshold=0,s.mixAttachmentThreshold=0,s.mixDrawOrderThreshold=0,s.animationStart=0,s.animationEnd=e.duration,s.animationLast=-1,s.nextAnimationLast=-1,s.delay=0,s.trackTime=0,s.trackLast=-1,s.nextTrackLast=-1,s.trackEnd=Number.MAX_VALUE,s.timeScale=1,s.alpha=1,s.mixTime=0,s.mixDuration=i?this.data.getMix(i.animation,e):0,s.interruptAlpha=1,s.totalAlpha=0,s.mixBlend=K.replace,s}clearNext(t){let e=t.next;for(;e;)this.queue.dispose(e),e=e.next;t.next=null}_animationsChanged(){this.animationsChanged=!1,this.propertyIDs.clear();let t=this.tracks;for(let e=0,n=t.length;e<n;e++){let i=t[e];if(i){for(;i.mixingFrom;)i=i.mixingFrom;do(!i.mixingTo||i.mixBlend!=K.add)&&this.computeHold(i),i=i.mixingTo;while(i)}}}computeHold(t){let e=t.mixingTo,n=t.animation.timelines,i=t.animation.timelines.length,s=t.timelineMode;s.length=i;let l=t.timelineHoldMix;l.length=0;let o=this.propertyIDs;if(e&&e.holdPrevious){for(let a=0;a<i;a++)s[a]=o.addAll(n[a].getPropertyIds())?Yl:Xh;return}t:for(let a=0;a<i;a++){let c=n[a],h=c.getPropertyIds();if(!o.addAll(h))s[a]=Xl;else if(!e||c instanceof dn||c instanceof vn||c instanceof di||!e.animation.hasTimeline(h))s[a]=Wh;else{for(let u=e.mixingTo;u;u=u.mixingTo)if(!u.animation.hasTimeline(h)){if(t.mixDuration>0){s[a]=Xg,l[a]=u;continue t}break}s[a]=Yl}}}getCurrent(t){return t>=this.tracks.length?null:this.tracks[t]}addListener(t){if(!t)throw new Error("listener cannot be null.");this.listeners.push(t)}removeListener(t){let e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1)}clearListeners(){this.listeners.length=0}clearListenerNotifications(){this.queue.clear()}},ql=class{animation=null;previous=null;next=null;mixingFrom=null;mixingTo=null;listener=null;trackIndex=0;loop=!1;holdPrevious=!1;reverse=!1;shortestRotation=!1;eventThreshold=0;mixAttachmentThreshold=0;alphaAttachmentThreshold=0;mixDrawOrderThreshold=0;animationStart=0;animationEnd=0;animationLast=0;nextAnimationLast=0;delay=0;trackTime=0;trackLast=0;nextTrackLast=0;trackEnd=0;timeScale=0;alpha=0;mixTime=0;_mixDuration=0;interruptAlpha=0;totalAlpha=0;get mixDuration(){return this._mixDuration}set mixDuration(t){this._mixDuration=t}setMixDurationWithDelay(t,e){this._mixDuration=t,e<=0&&(this.previous!=null?e=Math.max(e+this.previous.getTrackComplete()-t,0):e=0),this.delay=e}mixBlend=K.replace;timelineMode=new Array;timelineHoldMix=new Array;timelinesRotation=new Array;reset(){this.next=null,this.previous=null,this.mixingFrom=null,this.mixingTo=null,this.animation=null,this.listener=null,this.timelineMode.length=0,this.timelineHoldMix.length=0,this.timelinesRotation.length=0}getAnimationTime(){if(this.loop){let t=this.animationEnd-this.animationStart;return t==0?this.animationStart:this.trackTime%t+this.animationStart}return Math.min(this.trackTime+this.animationStart,this.animationEnd)}setAnimationLast(t){this.animationLast=t,this.nextAnimationLast=t}isComplete(){return this.trackTime>=this.animationEnd-this.animationStart}resetRotationDirections(){this.timelinesRotation.length=0}getTrackComplete(){let t=this.animationEnd-this.animationStart;if(t!=0){if(this.loop)return t*(1+(this.trackTime/t|0));if(this.trackTime<t)return t}return this.trackTime}wasApplied(){return this.nextTrackLast!=-1}isNextReady(){return this.next!=null&&this.nextTrackLast-this.next.delay>=0}},Zl=class{objects=[];drainDisabled=!1;animState;constructor(t){this.animState=t}start(t){this.objects.push(We.start),this.objects.push(t),this.animState.animationsChanged=!0}interrupt(t){this.objects.push(We.interrupt),this.objects.push(t)}end(t){this.objects.push(We.end),this.objects.push(t),this.animState.animationsChanged=!0}dispose(t){this.objects.push(We.dispose),this.objects.push(t)}complete(t){this.objects.push(We.complete),this.objects.push(t)}event(t,e){this.objects.push(We.event),this.objects.push(t),this.objects.push(e)}drain(){if(this.drainDisabled)return;this.drainDisabled=!0;let t=this.objects;for(let e=0;e<t.length;e+=2){let n=t[e],i=t[e+1],s=this.animState.listeners.slice();switch(n){case We.start:i.listener&&i.listener.start&&i.listener.start(i);for(let o=0;o<s.length;o++){let a=s[o];a.start&&a.start(i)}break;case We.interrupt:i.listener&&i.listener.interrupt&&i.listener.interrupt(i);for(let o=0;o<s.length;o++){let a=s[o];a.interrupt&&a.interrupt(i)}break;case We.end:i.listener&&i.listener.end&&i.listener.end(i);for(let o=0;o<s.length;o++){let a=s[o];a.end&&a.end(i)}case We.dispose:i.listener&&i.listener.dispose&&i.listener.dispose(i);for(let o=0;o<s.length;o++){let a=s[o];a.dispose&&a.dispose(i)}this.animState.trackEntryPool.free(i);break;case We.complete:i.listener&&i.listener.complete&&i.listener.complete(i);for(let o=0;o<s.length;o++){let a=s[o];a.complete&&a.complete(i)}break;case We.event:let l=t[e+++2];i.listener&&i.listener.event&&i.listener.event(i,l);for(let o=0;o<s.length;o++){let a=s[o];a.event&&a.event(i,l)}break}}this.clear(),this.drainDisabled=!1}clear(){this.objects.length=0}},We;(function(r){r[r.start=0]="start",r[r.interrupt=1]="interrupt",r[r.end=2]="end",r[r.dispose=3]="dispose",r[r.complete=4]="complete",r[r.event=5]="event"})(We||(We={}));var Xl=0,Wh=1,Xh=2,Yl=3,Xg=4,Yh=1,Yg=2;var Ys=class{skeletonData;animationToMixTime={};defaultMix=0;constructor(t){if(!t)throw new Error("skeletonData cannot be null.");this.skeletonData=t}setMix(t,e,n){let i=this.skeletonData.findAnimation(t);if(!i)throw new Error("Animation not found: "+t);let s=this.skeletonData.findAnimation(e);if(!s)throw new Error("Animation not found: "+e);this.setMixWith(i,s,n)}setMixWith(t,e,n){if(!t)throw new Error("from cannot be null.");if(!e)throw new Error("to cannot be null.");let i=t.name+"."+e.name;this.animationToMixTime[i]=n}getMix(t,e){let n=t.name+"."+e.name,i=this.animationToMixTime[n];return i===void 0?this.defaultMix:i}};var Mr=class r extends we{color=new St(1,1,1,1);constructor(t){super(t)}copy(){let t=new r(this.name);return this.copyTo(t),t.color.setFromColor(this.color),t}};var fi=class r extends we{endSlot=null;color=new St(.2275,.2275,.8078,1);constructor(t){super(t)}copy(){let t=new r(this.name);return this.copyTo(t),t.endSlot=this.endSlot,t.color.setFromColor(this.color),t}};var Ca=class{_image;constructor(t){this._image=t}getImage(){return this._image}},ye;(function(r){r[r.Nearest=9728]="Nearest",r[r.Linear=9729]="Linear",r[r.MipMap=9987]="MipMap",r[r.MipMapNearestNearest=9984]="MipMapNearestNearest",r[r.MipMapLinearNearest=9985]="MipMapLinearNearest",r[r.MipMapNearestLinear=9986]="MipMapNearestLinear",r[r.MipMapLinearLinear=9987]="MipMapLinearLinear"})(ye||(ye={}));var fn;(function(r){r[r.MirroredRepeat=33648]="MirroredRepeat",r[r.ClampToEdge=33071]="ClampToEdge",r[r.Repeat=10497]="Repeat"})(fn||(fn={}));var Ra=class{texture;u=0;v=0;u2=0;v2=0;width=0;height=0;degrees=0;offsetX=0;offsetY=0;originalWidth=0;originalHeight=0};var br=class{pages=new Array;regions=new Array;constructor(t){let e=new $l(t),n=new Array(4),i={};i.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},i.format=()=>{},i.filter=h=>{h.minFilter=it.enumValue(ye,n[1]),h.magFilter=it.enumValue(ye,n[2])},i.repeat=h=>{n[1].indexOf("x")!=-1&&(h.uWrap=fn.Repeat),n[1].indexOf("y")!=-1&&(h.vWrap=fn.Repeat)},i.pma=h=>{h.pma=n[1]=="true"};var s={};s.xy=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2])},s.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},s.bounds=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2]),h.width=parseInt(n[3]),h.height=parseInt(n[4])},s.offset=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2])},s.orig=h=>{h.originalWidth=parseInt(n[1]),h.originalHeight=parseInt(n[2])},s.offsets=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2]),h.originalWidth=parseInt(n[3]),h.originalHeight=parseInt(n[4])},s.rotate=h=>{let u=n[1];u=="true"?h.degrees=90:u!="false"&&(h.degrees=parseInt(u))},s.index=h=>{h.index=parseInt(n[1])};let l=e.readLine();for(;l&&l.trim().length==0;)l=e.readLine();for(;!(!l||l.trim().length==0||e.readEntry(n,l)==0);)l=e.readLine();let o=null,a=null,c=null;for(;l!==null;)if(l.trim().length==0)o=null,l=e.readLine();else if(o){let h=new Sr(o,l);for(;;){let u=e.readEntry(n,l=e.readLine());if(u==0)break;let d=s[n[0]];if(d)d(h);else{a||(a=[]),c||(c=[]),a.push(n[0]);let f=[];for(let p=0;p<u;p++)f.push(parseInt(n[p+1]));c.push(f)}}h.originalWidth==0&&h.originalHeight==0&&(h.originalWidth=h.width,h.originalHeight=h.height),a&&a.length>0&&c&&c.length>0&&(h.names=a,h.values=c,a=null,c=null),h.u=h.x/o.width,h.v=h.y/o.height,h.degrees==90?(h.u2=(h.x+h.height)/o.width,h.v2=(h.y+h.width)/o.height):(h.u2=(h.x+h.width)/o.width,h.v2=(h.y+h.height)/o.height),this.regions.push(h)}else{for(o=new Jl(l.trim());e.readEntry(n,l=e.readLine())!=0;){let h=i[n[0]];h&&h(o)}this.pages.push(o)}}findRegion(t){for(let e=0;e<this.regions.length;e++)if(this.regions[e].name==t)return this.regions[e];return null}setTextures(t,e=""){for(let n of this.pages)n.setTexture(t.get(e+n.name))}dispose(){for(let t=0;t<this.pages.length;t++)this.pages[t].texture?.dispose()}},$l=class{lines;index=0;constructor(t){this.lines=t.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?null:this.lines[this.index++]}readEntry(t,e){if(!e||(e=e.trim(),e.length==0))return 0;let n=e.indexOf(":");if(n==-1)return 0;t[0]=e.substr(0,n).trim();for(let i=1,s=n+1;;i++){let l=e.indexOf(",",s);if(l==-1)return t[i]=e.substr(s).trim(),i;if(t[i]=e.substr(s,l-s).trim(),s=l+1,i==4)return 4}}},Jl=class{name;minFilter=ye.Nearest;magFilter=ye.Nearest;uWrap=fn.ClampToEdge;vWrap=fn.ClampToEdge;texture=null;width=0;height=0;pma=!1;regions=new Array;constructor(t){this.name=t}setTexture(t){this.texture=t,t.setFilters(this.minFilter,this.magFilter),t.setWraps(this.uWrap,this.vWrap);for(let e of this.regions)e.texture=t}},Sr=class extends Ra{page;name;x=0;y=0;offsetX=0;offsetY=0;originalWidth=0;originalHeight=0;index=0;degrees=0;names=null;values=null;constructor(t,e){super(),this.page=t,this.name=e,t.regions.push(this)}};var Mn=class r extends we{region=null;path;regionUVs=[];uvs=[];triangles=[];color=new St(1,1,1,1);width=0;height=0;hullLength=0;edges=[];parentMesh=null;sequence=null;tempColor=new St(0,0,0,0);constructor(t,e){super(t),this.path=e}updateRegion(){if(!this.region)throw new Error("Region not set.");let t=this.regionUVs;(!this.uvs||this.uvs.length!=t.length)&&(this.uvs=it.newFloatArray(t.length));let e=this.uvs,n=this.uvs.length,i=this.region.u,s=this.region.v,l=0,o=0;if(this.region instanceof Sr){let a=this.region,c=a.page,h=c.width,u=c.height;switch(a.degrees){case 90:i-=(a.originalHeight-a.offsetY-a.height)/h,s-=(a.originalWidth-a.offsetX-a.width)/u,l=a.originalHeight/h,o=a.originalWidth/u;for(let d=0;d<n;d+=2)e[d]=i+t[d+1]*l,e[d+1]=s+(1-t[d])*o;return;case 180:i-=(a.originalWidth-a.offsetX-a.width)/h,s-=a.offsetY/u,l=a.originalWidth/h,o=a.originalHeight/u;for(let d=0;d<n;d+=2)e[d]=i+(1-t[d])*l,e[d+1]=s+(1-t[d+1])*o;return;case 270:i-=a.offsetY/h,s-=a.offsetX/u,l=a.originalHeight/h,o=a.originalWidth/u;for(let d=0;d<n;d+=2)e[d]=i+(1-t[d+1])*l,e[d+1]=s+t[d]*o;return}i-=a.offsetX/h,s-=(a.originalHeight-a.offsetY-a.height)/u,l=a.originalWidth/h,o=a.originalHeight/u}else this.region?(l=this.region.u2-i,o=this.region.v2-s):(i=s=0,l=o=1);for(let a=0;a<n;a+=2)e[a]=i+t[a]*l,e[a+1]=s+t[a+1]*o}getParentMesh(){return this.parentMesh}setParentMesh(t){this.parentMesh=t,t&&(this.bones=t.bones,this.vertices=t.vertices,this.worldVerticesLength=t.worldVerticesLength,this.regionUVs=t.regionUVs,this.triangles=t.triangles,this.hullLength=t.hullLength,this.worldVerticesLength=t.worldVerticesLength)}copy(){if(this.parentMesh)return this.newLinkedMesh();let t=new r(this.name,this.path);return t.region=this.region,t.color.setFromColor(this.color),this.copyTo(t),t.regionUVs=new Array(this.regionUVs.length),it.arrayCopy(this.regionUVs,0,t.regionUVs,0,this.regionUVs.length),t.uvs=this.uvs instanceof Float32Array?it.newFloatArray(this.uvs.length):new Array(this.uvs.length),it.arrayCopy(this.uvs,0,t.uvs,0,this.uvs.length),t.triangles=new Array(this.triangles.length),it.arrayCopy(this.triangles,0,t.triangles,0,this.triangles.length),t.hullLength=this.hullLength,t.sequence=this.sequence!=null?this.sequence.copy():null,this.edges&&(t.edges=new Array(this.edges.length),it.arrayCopy(this.edges,0,t.edges,0,this.edges.length)),t.width=this.width,t.height=this.height,t}computeWorldVertices(t,e,n,i,s,l){this.sequence!=null&&this.sequence.apply(t,this),super.computeWorldVertices(t,e,n,i,s,l)}newLinkedMesh(){let t=new r(this.name,this.path);return t.region=this.region,t.color.setFromColor(this.color),t.timelineAttachment=this.timelineAttachment,t.setParentMesh(this.parentMesh?this.parentMesh:this),t.region!=null&&t.updateRegion(),t}};var Yn=class r extends we{lengths=[];closed=!1;constantSpeed=!1;color=new St(1,1,1,1);constructor(t){super(t)}copy(){let t=new r(this.name);return this.copyTo(t),t.lengths=new Array(this.lengths.length),it.arrayCopy(this.lengths,0,t.lengths,0,this.lengths.length),t.closed=closed,t.constantSpeed=this.constantSpeed,t.color.setFromColor(this.color),t}};var Ia=class r extends we{x=0;y=0;rotation=0;color=new St(.38,.94,0,1);constructor(t){super(t)}computeWorldPosition(t,e){return e.x=this.x*t.a+this.y*t.b+t.worldX,e.y=this.x*t.c+this.y*t.d+t.worldY,e}computeWorldRotation(t){let e=this.rotation*et.degRad,n=Math.cos(e),i=Math.sin(e),s=n*t.a+i*t.b,l=n*t.c+i*t.d;return et.atan2Deg(l,s)}copy(){let t=new r(this.name);return t.x=this.x,t.y=this.y,t.rotation=this.rotation,t.color.setFromColor(this.color),t}};var pi=class r extends _r{x=0;y=0;scaleX=1;scaleY=1;rotation=0;width=0;height=0;color=new St(1,1,1,1);path;region=null;sequence=null;offset=it.newFloatArray(8);uvs=it.newFloatArray(8);tempColor=new St(1,1,1,1);constructor(t,e){super(t),this.path=e}updateRegion(){if(!this.region)throw new Error("Region not set.");let t=this.region,e=this.uvs;if(t==null){e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=1,e[5]=1,e[6]=1,e[7]=0;return}let n=this.width/this.region.originalWidth*this.scaleX,i=this.height/this.region.originalHeight*this.scaleY,s=-this.width/2*this.scaleX+this.region.offsetX*n,l=-this.height/2*this.scaleY+this.region.offsetY*i,o=s+this.region.width*n,a=l+this.region.height*i,c=this.rotation*et.degRad,h=Math.cos(c),u=Math.sin(c),d=this.x,f=this.y,p=s*h+d,x=s*u,m=l*h+f,g=l*u,v=o*h+d,y=o*u,_=a*h+f,S=a*u,M=this.offset;M[0]=p-g,M[1]=m+x,M[2]=p-S,M[3]=_+x,M[4]=v-S,M[5]=_+y,M[6]=v-g,M[7]=m+y,t.degrees==90?(e[0]=t.u2,e[1]=t.v2,e[2]=t.u,e[3]=t.v2,e[4]=t.u,e[5]=t.v,e[6]=t.u2,e[7]=t.v):(e[0]=t.u,e[1]=t.v2,e[2]=t.u,e[3]=t.v,e[4]=t.u2,e[5]=t.v,e[6]=t.u2,e[7]=t.v2)}computeWorldVertices(t,e,n,i){this.sequence!=null&&this.sequence.apply(t,this);let s=t.bone,l=this.offset,o=s.worldX,a=s.worldY,c=s.a,h=s.b,u=s.c,d=s.d,f=0,p=0;f=l[0],p=l[1],e[n]=f*c+p*h+o,e[n+1]=f*u+p*d+a,n+=i,f=l[2],p=l[3],e[n]=f*c+p*h+o,e[n+1]=f*u+p*d+a,n+=i,f=l[4],p=l[5],e[n]=f*c+p*h+o,e[n+1]=f*u+p*d+a,n+=i,f=l[6],p=l[7],e[n]=f*c+p*h+o,e[n+1]=f*u+p*d+a}copy(){let t=new r(this.name,this.path);return t.region=this.region,t.x=this.x,t.y=this.y,t.scaleX=this.scaleX,t.scaleY=this.scaleY,t.rotation=this.rotation,t.width=this.width,t.height=this.height,it.arrayCopy(this.uvs,0,t.uvs,0,8),it.arrayCopy(this.offset,0,t.offset,0,8),t.color.setFromColor(this.color),t.sequence=this.sequence!=null?this.sequence.copy():null,t}static X1=0;static Y1=1;static C1R=2;static C1G=3;static C1B=4;static C1A=5;static U1=6;static V1=7;static X2=8;static Y2=9;static C2R=10;static C2G=11;static C2B=12;static C2A=13;static U2=14;static V2=15;static X3=16;static Y3=17;static C3R=18;static C3G=19;static C3B=20;static C3A=21;static U3=22;static V3=23;static X4=24;static Y4=25;static C4R=26;static C4G=27;static C4B=28;static C4A=29;static U4=30;static V4=31};var Pa=class{atlas;constructor(t){this.atlas=t}loadSequence(t,e,n){let i=n.regions;for(let s=0,l=i.length;s<l;s++){let o=n.getPath(e,s),a=this.atlas.findRegion(o);if(a==null)throw new Error("Region not found in atlas: "+o+" (sequence: "+t+")");i[s]=a}}newRegionAttachment(t,e,n,i){let s=new pi(e,n);if(i!=null)this.loadSequence(e,n,i);else{let l=this.atlas.findRegion(n);if(!l)throw new Error("Region not found in atlas: "+n+" (region attachment: "+e+")");s.region=l}return s}newMeshAttachment(t,e,n,i){let s=new Mn(e,n);if(i!=null)this.loadSequence(e,n,i);else{let l=this.atlas.findRegion(n);if(!l)throw new Error("Region not found in atlas: "+n+" (mesh attachment: "+e+")");s.region=l}return s}newBoundingBoxAttachment(t,e){return new Mr(e)}newPathAttachment(t,e){return new Yn(e)}newPointAttachment(t,e){return new Ia(e)}newClippingAttachment(t,e){return new fi(e)}};var qs=class{index=0;name;parent=null;length=0;x=0;y=0;rotation=0;scaleX=1;scaleY=1;shearX=0;shearY=0;inherit=ce.Normal;skinRequired=!1;color=new St;icon;visible=!1;constructor(t,e,n){if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");this.index=t,this.name=e,this.parent=n}},ce;(function(r){r[r.Normal=0]="Normal",r[r.OnlyTranslation=1]="OnlyTranslation",r[r.NoRotationOrReflection=2]="NoRotationOrReflection",r[r.NoScale=3]="NoScale",r[r.NoScaleOrReflection=4]="NoScaleOrReflection"})(ce||(ce={}));var wr=class{data;skeleton;parent=null;children=new Array;x=0;y=0;rotation=0;scaleX=0;scaleY=0;shearX=0;shearY=0;ax=0;ay=0;arotation=0;ascaleX=0;ascaleY=0;ashearX=0;ashearY=0;a=0;b=0;c=0;d=0;worldY=0;worldX=0;inherit=ce.Normal;sorted=!1;active=!1;constructor(t,e,n){if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.skeleton=e,this.parent=n,this.setToSetupPose()}isActive(){return this.active}update(t){this.updateWorldTransformWith(this.ax,this.ay,this.arotation,this.ascaleX,this.ascaleY,this.ashearX,this.ashearY)}updateWorldTransform(){this.updateWorldTransformWith(this.x,this.y,this.rotation,this.scaleX,this.scaleY,this.shearX,this.shearY)}updateWorldTransformWith(t,e,n,i,s,l,o){this.ax=t,this.ay=e,this.arotation=n,this.ascaleX=i,this.ascaleY=s,this.ashearX=l,this.ashearY=o;let a=this.parent;if(!a){let f=this.skeleton,p=f.scaleX,x=f.scaleY,m=(n+l)*et.degRad,g=(n+90+o)*et.degRad;this.a=Math.cos(m)*i*p,this.b=Math.cos(g)*s*p,this.c=Math.sin(m)*i*x,this.d=Math.sin(g)*s*x,this.worldX=t*p+f.x,this.worldY=e*x+f.y;return}let c=a.a,h=a.b,u=a.c,d=a.d;switch(this.worldX=c*t+h*e+a.worldX,this.worldY=u*t+d*e+a.worldY,this.inherit){case ce.Normal:{let f=(n+l)*et.degRad,p=(n+90+o)*et.degRad,x=Math.cos(f)*i,m=Math.cos(p)*s,g=Math.sin(f)*i,v=Math.sin(p)*s;this.a=c*x+h*g,this.b=c*m+h*v,this.c=u*x+d*g,this.d=u*m+d*v;return}case ce.OnlyTranslation:{let f=(n+l)*et.degRad,p=(n+90+o)*et.degRad;this.a=Math.cos(f)*i,this.b=Math.cos(p)*s,this.c=Math.sin(f)*i,this.d=Math.sin(p)*s;break}case ce.NoRotationOrReflection:{let f=1/this.skeleton.scaleX,p=1/this.skeleton.scaleY;c*=f,u*=p;let x=c*c+u*u,m=0;x>1e-4?(x=Math.abs(c*d*p-h*f*u)/x,h=u*x,d=c*x,m=Math.atan2(u,c)*et.radDeg):(c=0,u=0,m=90-Math.atan2(d,h)*et.radDeg);let g=(n+l-m)*et.degRad,v=(n+o-m+90)*et.degRad,y=Math.cos(g)*i,_=Math.cos(v)*s,S=Math.sin(g)*i,M=Math.sin(v)*s;this.a=c*y-h*S,this.b=c*_-h*M,this.c=u*y+d*S,this.d=u*_+d*M;break}case ce.NoScale:case ce.NoScaleOrReflection:{n*=et.degRad;let f=Math.cos(n),p=Math.sin(n),x=(c*f+h*p)/this.skeleton.scaleX,m=(u*f+d*p)/this.skeleton.scaleY,g=Math.sqrt(x*x+m*m);g>1e-5&&(g=1/g),x*=g,m*=g,g=Math.sqrt(x*x+m*m),this.inherit==ce.NoScale&&c*d-h*u<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(g=-g),n=Math.PI/2+Math.atan2(m,x);let v=Math.cos(n)*g,y=Math.sin(n)*g;l*=et.degRad,o=(90+o)*et.degRad;let _=Math.cos(l)*i,S=Math.cos(o)*s,M=Math.sin(l)*i,E=Math.sin(o)*s;this.a=x*_+v*M,this.b=x*S+v*E,this.c=m*_+y*M,this.d=m*S+y*E;break}}this.a*=this.skeleton.scaleX,this.b*=this.skeleton.scaleX,this.c*=this.skeleton.scaleY,this.d*=this.skeleton.scaleY}setToSetupPose(){let t=this.data;this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.scaleX=t.scaleX,this.scaleY=t.scaleY,this.shearX=t.shearX,this.shearY=t.shearY,this.inherit=t.inherit}updateAppliedTransform(){let t=this.parent;if(!t){this.ax=this.worldX-this.skeleton.x,this.ay=this.worldY-this.skeleton.y,this.arotation=Math.atan2(this.c,this.a)*et.radDeg,this.ascaleX=Math.sqrt(this.a*this.a+this.c*this.c),this.ascaleY=Math.sqrt(this.b*this.b+this.d*this.d),this.ashearX=0,this.ashearY=Math.atan2(this.a*this.b+this.c*this.d,this.a*this.d-this.b*this.c)*et.radDeg;return}let e=t.a,n=t.b,i=t.c,s=t.d,l=1/(e*s-n*i),o=s*l,a=n*l,c=i*l,h=e*l,u=this.worldX-t.worldX,d=this.worldY-t.worldY;this.ax=u*o-d*a,this.ay=d*h-u*c;let f,p,x,m;if(this.inherit==ce.OnlyTranslation)f=this.a,p=this.b,x=this.c,m=this.d;else{switch(this.inherit){case ce.NoRotationOrReflection:{let S=Math.abs(e*s-n*i)/(e*e+i*i);n=-i*this.skeleton.scaleX*S/this.skeleton.scaleY,s=e*this.skeleton.scaleY*S/this.skeleton.scaleX,l=1/(e*s-n*i),o=s*l,a=n*l;break}case ce.NoScale:case ce.NoScaleOrReflection:let g=et.cosDeg(this.rotation),v=et.sinDeg(this.rotation);e=(e*g+n*v)/this.skeleton.scaleX,i=(i*g+s*v)/this.skeleton.scaleY;let y=Math.sqrt(e*e+i*i);y>1e-5&&(y=1/y),e*=y,i*=y,y=Math.sqrt(e*e+i*i),this.inherit==ce.NoScale&&l<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(y=-y);let _=et.PI/2+Math.atan2(i,e);n=Math.cos(_)*y,s=Math.sin(_)*y,l=1/(e*s-n*i),o=s*l,a=n*l,c=i*l,h=e*l}f=o*this.a-a*this.c,p=o*this.b-a*this.d,x=h*this.c-c*this.a,m=h*this.d-c*this.b}if(this.ashearX=0,this.ascaleX=Math.sqrt(f*f+x*x),this.ascaleX>1e-4){let g=f*m-p*x;this.ascaleY=g/this.ascaleX,this.ashearY=-Math.atan2(f*p+x*m,g)*et.radDeg,this.arotation=Math.atan2(x,f)*et.radDeg}else this.ascaleX=0,this.ascaleY=Math.sqrt(p*p+m*m),this.ashearY=0,this.arotation=90-Math.atan2(m,p)*et.radDeg}getWorldRotationX(){return Math.atan2(this.c,this.a)*et.radDeg}getWorldRotationY(){return Math.atan2(this.d,this.b)*et.radDeg}getWorldScaleX(){return Math.sqrt(this.a*this.a+this.c*this.c)}getWorldScaleY(){return Math.sqrt(this.b*this.b+this.d*this.d)}worldToLocal(t){let e=1/(this.a*this.d-this.b*this.c),n=t.x-this.worldX,i=t.y-this.worldY;return t.x=n*this.d*e-i*this.b*e,t.y=i*this.a*e-n*this.c*e,t}localToWorld(t){let e=t.x,n=t.y;return t.x=e*this.a+n*this.b+this.worldX,t.y=e*this.c+n*this.d+this.worldY,t}worldToParent(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.worldToLocal(t)}parentToWorld(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.localToWorld(t)}worldToLocalRotation(t){let e=et.sinDeg(t),n=et.cosDeg(t);return Math.atan2(this.a*e-this.c*n,this.d*n-this.b*e)*et.radDeg+this.rotation-this.shearX}localToWorldRotation(t){t-=this.rotation-this.shearX;let e=et.sinDeg(t),n=et.cosDeg(t);return Math.atan2(n*this.c+e*this.d,n*this.a+e*this.b)*et.radDeg}rotateWorld(t){t*=et.degRad;let e=Math.sin(t),n=Math.cos(t),i=this.a,s=this.b;this.a=n*i-e*this.c,this.b=n*s-e*this.d,this.c=e*i+n*this.c,this.d=e*s+n*this.d}};var bn=class{name;order;skinRequired;constructor(t,e,n){this.name=t,this.order=e,this.skinRequired=n}};var La=class{pathPrefix="";textureLoader;downloader;cache;errors={};toLoad=0;loaded=0;constructor(t,e="",n=new Er,i=new Kl){this.textureLoader=t,this.pathPrefix=e,this.downloader=n,this.cache=i}start(t){return this.toLoad++,this.pathPrefix+t}success(t,e,n){this.toLoad--,this.loaded++,this.cache.assets[e]=n,this.cache.assetsRefCount[e]=(this.cache.assetsRefCount[e]||0)+1,t&&t(e,n)}error(t,e,n){this.toLoad--,this.loaded++,this.errors[e]=n,t&&t(e,n)}loadAll(){return new Promise((e,n)=>{let i=()=>{if(this.isLoadingComplete()){this.hasErrors()?n(this.errors):e(this);return}requestAnimationFrame(i)};requestAnimationFrame(i)})}setRawDataURI(t,e){this.downloader.rawDataUris[this.pathPrefix+t]=e}loadBinary(t,e=()=>{},n=()=>{}){t=this.start(t),!this.reuseAssets(t,e,n)&&(this.cache.assetsLoaded[t]=new Promise((i,s)=>{this.downloader.downloadBinary(t,l=>{this.success(e,t,l),i(l)},(l,o)=>{let a=`Couldn't load binary ${t}: status ${l}, ${o}`;this.error(n,t,a),s(a)})}))}loadText(t,e=()=>{},n=()=>{}){t=this.start(t),this.downloader.downloadText(t,i=>{this.success(e,t,i)},(i,s)=>{this.error(n,t,`Couldn't load text ${t}: status ${i}, ${s}`)})}loadJson(t,e=()=>{},n=()=>{}){t=this.start(t),!this.reuseAssets(t,e,n)&&(this.cache.assetsLoaded[t]=new Promise((i,s)=>{this.downloader.downloadJson(t,l=>{this.success(e,t,l),i(l)},(l,o)=>{let a=`Couldn't load JSON ${t}: status ${l}, ${o}`;this.error(n,t,a),s(a)})}))}reuseAssets(t,e=()=>{},n=()=>{}){let i=this.cache.assetsLoaded[t],s=i!==void 0;return s&&(this.cache.assetsLoaded[t]=i.then(l=>(l=l instanceof Image||l instanceof ImageBitmap?this.textureLoader(l):l,this.success(e,t,l),l)).catch(l=>this.error(n,t,l))),s}loadTexture(t,e=()=>{},n=()=>{}){t=this.start(t),!this.reuseAssets(t,e,n)&&(this.cache.assetsLoaded[t]=new Promise((i,s)=>{if(!!!(typeof window<"u"&&typeof navigator<"u"&&window.document))fetch(t,{mode:"cors"}).then(a=>{if(a.ok)return a.blob();let c=`Couldn't load image: ${t}`;this.error(n,t,`Couldn't load image: ${t}`),s(c)}).then(a=>a?createImageBitmap(a,{premultiplyAlpha:"none",colorSpaceConversion:"none"}):null).then(a=>{if(a){let c=this.createTexture(t,a);this.success(e,t,c),i(c)}});else{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>{let c=this.createTexture(t,a);this.success(e,t,c),i(c)},a.onerror=()=>{let c=`Couldn't load image: ${t}`;this.error(n,t,c),s(c)},this.downloader.rawDataUris[t]&&(t=this.downloader.rawDataUris[t]),a.src=t}}))}loadTextureAtlas(t,e=()=>{},n=()=>{},i){let s=t.lastIndexOf("/"),l=s>=0?t.substring(0,s+1):"";t=this.start(t),!this.reuseAssets(t,e,n)&&(this.cache.assetsLoaded[t]=new Promise((o,a)=>{this.downloader.downloadText(t,c=>{try{let h=this.createTextureAtlas(t,c),u=h.pages.length,d=!1;if(u===0){this.success(e,t,h),o(h);return}for(let f of h.pages)this.loadTexture(i?i[f.name]:l+f.name,(p,x)=>{d||(f.setTexture(x),--u==0&&(this.success(e,t,h),o(h)))},(p,x)=>{if(!d){let m=`Couldn't load texture ${t} page image: ${p}`;this.error(n,t,m),a(m)}d=!0})}catch(h){let u=`Couldn't parse texture atlas ${t}: ${h.message}`;this.error(n,t,u),a(u)}},(c,h)=>{let u=`Couldn't load texture atlas ${t}: status ${c}, ${h}`;this.error(n,t,u),a(u)})}))}loadTextureAtlasButNoTextures(t,e=()=>{},n=()=>{},i){t=this.start(t),!this.reuseAssets(t,e,n)&&(this.cache.assetsLoaded[t]=new Promise((s,l)=>{this.downloader.downloadText(t,o=>{try{let a=this.createTextureAtlas(t,o);this.success(e,t,a),s(a)}catch(a){let c=`Couldn't parse texture atlas ${t}: ${a.message}`;this.error(n,t,c),l(c)}},(o,a)=>{let c=`Couldn't load texture atlas ${t}: status ${o}, ${a}`;this.error(n,t,c),l(c)})}))}async loadBinaryAsync(t){return new Promise((e,n)=>{this.loadBinary(t,(i,s)=>e(s),(i,s)=>n(s))})}async loadJsonAsync(t){return new Promise((e,n)=>{this.loadJson(t,(i,s)=>e(s),(i,s)=>n(s))})}async loadTextureAsync(t){return new Promise((e,n)=>{this.loadTexture(t,(i,s)=>e(s),(i,s)=>n(s))})}async loadTextureAtlasAsync(t){return new Promise((e,n)=>{this.loadTextureAtlas(t,(i,s)=>e(s),(i,s)=>n(s))})}async loadTextureAtlasButNoTexturesAsync(t){return new Promise((e,n)=>{this.loadTextureAtlasButNoTextures(t,(i,s)=>e(s),(i,s)=>n(s))})}setCache(t){this.cache=t}get(t){return this.cache.assets[this.pathPrefix+t]}require(t){t=this.pathPrefix+t;let e=this.cache.assets[t];if(e)return e;let n=this.errors[t];throw Error("Asset not found: "+t+(n?`
`+n:""))}remove(t){t=this.pathPrefix+t;let e=this.cache.assets[t];return e.dispose&&e.dispose(),delete this.cache.assets[t],delete this.cache.assetsRefCount[t],delete this.cache.assetsLoaded[t],e}removeAll(){for(let t in this.cache.assets){let e=this.cache.assets[t];e.dispose&&e.dispose()}this.cache.assets={},this.cache.assetsLoaded={},this.cache.assetsRefCount={}}isLoadingComplete(){return this.toLoad==0}getToLoad(){return this.toLoad}getLoaded(){return this.loaded}dispose(){this.removeAll()}disposeAsset(t){let e=this.cache.assets[t];if(e instanceof br){e.dispose();return}this.disposeAssetInternal(t)}hasErrors(){return Object.keys(this.errors).length>0}getErrors(){return this.errors}disposeAssetInternal(t){if(this.cache.assetsRefCount[t]>0&&--this.cache.assetsRefCount[t]===0)return this.remove(t)}createTextureAtlas(t,e){let n=new br(e);return n.dispose=()=>{if(!(this.cache.assetsRefCount[t]<=0)){this.disposeAssetInternal(t);for(let i of n.pages)i.texture?.dispose()}},n}createTexture(t,e){let n=this.textureLoader(e),i=n.dispose.bind(n);return n.dispose=()=>{this.disposeAssetInternal(t)&&i()},n}},Kl=class r{assets={};assetsRefCount={};assetsLoaded={};static AVAILABLE_CACHES=new Map;static getCache(t){let e=r.AVAILABLE_CACHES.get(t);if(e)return e;let n=new r;return r.AVAILABLE_CACHES.set(t,n),n}async addAsset(t,e){this.assetsLoaded[t]=Promise.resolve(e),this.assets[t]=await e}},Er=class{callbacks={};rawDataUris={};dataUriToString(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");return e!=-1?(e+=7,atob(t.substr(e))):t.substr(t.indexOf(",")+1)}base64ToUint8Array(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),s=0;s<n;s++)i[s]=e.charCodeAt(s);return i}dataUriToUint8Array(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");if(e==-1)throw new Error("Not a binary data URI.");return e+=7,this.base64ToUint8Array(t.substr(e))}downloadText(t,e,n){if(this.start(t,e,n))return;let i=this.rawDataUris[t];if(i&&!i.includes(".")){try{this.finish(t,200,this.dataUriToString(i))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let s=new XMLHttpRequest;s.overrideMimeType("text/html"),s.open("GET",i||t,!0);let l=()=>{this.finish(t,s.status,s.responseText)};s.onload=l,s.onerror=l,s.send()}downloadJson(t,e,n){this.downloadText(t,i=>{e(JSON.parse(i))},n)}downloadBinary(t,e,n){if(this.start(t,e,n))return;let i=this.rawDataUris[t];if(i&&!i.includes(".")){try{this.finish(t,200,this.dataUriToUint8Array(i))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let s=new XMLHttpRequest;s.open("GET",i||t,!0),s.responseType="arraybuffer";let l=()=>{this.finish(t,s.status,s.response)};s.onload=()=>{s.status==200||s.status==0?this.finish(t,200,new Uint8Array(s.response)):l()},s.onerror=l,s.send()}start(t,e,n){let i=this.callbacks[t];try{if(i)return!0;this.callbacks[t]=i=[]}finally{i.push(e,n)}}finish(t,e,n){let i=this.callbacks[t];delete this.callbacks[t];let s=e==200||e==0?[n]:[e,n];for(let l=s.length-1,o=i.length;l<o;l+=2)i[l].apply(null,s)}};var Zs=class{data;intValue=0;floatValue=0;stringValue=null;time=0;volume=0;balance=0;constructor(t,e){if(!e)throw new Error("data cannot be null.");this.time=t,this.data=e}};var $s=class{name;intValue=0;floatValue=0;stringValue=null;audioPath=null;volume=0;balance=0;constructor(t){this.name=t}};var Da=class{data;bones;target;bendDirection=0;compress=!1;stretch=!1;mix=1;softness=0;active=!1;constructor(t,e){if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0;i<t.bones.length;i++){let s=e.findBone(t.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${t.bones[i].name}`);this.bones.push(s)}let n=e.findBone(t.target.name);if(!n)throw new Error(`Couldn't find bone ${t.target.name}`);this.target=n,this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}isActive(){return this.active}setToSetupPose(){let t=this.data;this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}update(t){if(this.mix==0)return;let e=this.target,n=this.bones;switch(n.length){case 1:this.apply1(n[0],e.worldX,e.worldY,this.compress,this.stretch,this.data.uniform,this.mix);break;case 2:this.apply2(n[0],n[1],e.worldX,e.worldY,this.bendDirection,this.stretch,this.data.uniform,this.softness,this.mix);break}}apply1(t,e,n,i,s,l,o){let a=t.parent;if(!a)throw new Error("IK bone must have parent.");let c=a.a,h=a.b,u=a.c,d=a.d,f=-t.ashearX-t.arotation,p=0,x=0;switch(t.inherit){case ce.OnlyTranslation:p=(e-t.worldX)*et.signum(t.skeleton.scaleX),x=(n-t.worldY)*et.signum(t.skeleton.scaleY);break;case ce.NoRotationOrReflection:let v=Math.abs(c*d-h*u)/Math.max(1e-4,c*c+u*u),y=c/t.skeleton.scaleX,_=u/t.skeleton.scaleY;h=-_*v*t.skeleton.scaleX,d=y*v*t.skeleton.scaleY,f+=Math.atan2(_,y)*et.radDeg;default:let S=e-a.worldX,M=n-a.worldY,E=c*d-h*u;Math.abs(E)<=1e-4?(p=0,x=0):(p=(S*d-M*h)/E-t.ax,x=(M*c-S*u)/E-t.ay)}f+=Math.atan2(x,p)*et.radDeg,t.ascaleX<0&&(f+=180),f>180?f-=360:f<-180&&(f+=360);let m=t.ascaleX,g=t.ascaleY;if(i||s){switch(t.inherit){case ce.NoScale:case ce.NoScaleOrReflection:p=e-t.worldX,x=n-t.worldY}let v=t.data.length*m;if(v>1e-4){let y=p*p+x*x;if(i&&y<v*v||s&&y>v*v){let _=(Math.sqrt(y)/v-1)*o+1;m*=_,l&&(g*=_)}}}t.updateWorldTransformWith(t.ax,t.ay,t.arotation+f*o,m,g,t.ashearX,t.ashearY)}apply2(t,e,n,i,s,l,o,a,c){if(t.inherit!=ce.Normal||e.inherit!=ce.Normal)return;let h=t.ax,u=t.ay,d=t.ascaleX,f=t.ascaleY,p=d,x=f,m=e.ascaleX,g=0,v=0,y=0;d<0?(d=-d,g=180,y=-1):(g=0,y=1),f<0&&(f=-f,y=-y),m<0?(m=-m,v=180):v=0;let _=e.ax,S=0,M=0,E=0,A=t.a,w=t.b,b=t.c,C=t.d,U=Math.abs(d-f)<=1e-4;!U||l?(S=0,M=A*_+t.worldX,E=b*_+t.worldY):(S=e.ay,M=A*_+w*S+t.worldX,E=b*_+C*S+t.worldY);let L=t.parent;if(!L)throw new Error("IK parent must itself have a parent.");A=L.a,w=L.b,b=L.c,C=L.d;let I=A*C-w*b,D=M-L.worldX,N=E-L.worldY;I=Math.abs(I)<=1e-4?0:1/I;let H=(D*C-N*w)*I-h,V=(N*A-D*b)*I-u,Z=Math.sqrt(H*H+V*V),nt=e.data.length*m,at,yt;if(Z<1e-4){this.apply1(t,n,i,!1,l,!1,c),e.updateWorldTransformWith(_,S,0,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY);return}D=n-L.worldX,N=i-L.worldY;let rt=(D*C-N*w)*I-h,G=(N*A-D*b)*I-u,J=rt*rt+G*G;if(a!=0){a*=d*(m+1)*.5;let gt=Math.sqrt(J),bt=gt-Z-nt*d+a;if(bt>0){let Rt=Math.min(1,bt/(a*2))-1;Rt=(bt-a*(1-Rt*Rt))/gt,rt-=Rt*rt,G-=Rt*G,J=rt*rt+G*G}}t:if(U){nt*=d;let gt=(J-Z*Z-nt*nt)/(2*Z*nt);gt<-1?(gt=-1,yt=Math.PI*s):gt>1?(gt=1,yt=0,l&&(A=(Math.sqrt(J)/(Z+nt)-1)*c+1,p*=A,o&&(x*=A))):yt=Math.acos(gt)*s,A=Z+nt*gt,w=nt*Math.sin(yt),at=Math.atan2(G*A-rt*w,rt*A+G*w)}else{A=d*nt,w=f*nt;let gt=A*A,bt=w*w,Rt=Math.atan2(G,rt);b=bt*Z*Z+gt*J-gt*bt;let Kt=-2*bt*Z,Ht=bt-gt;if(C=Kt*Kt-4*Ht*b,C>=0){let P=Math.sqrt(C);Kt<0&&(P=-P),P=-(Kt+P)*.5;let T=P/Ht,W=b/P,j=Math.abs(T)<Math.abs(W)?T:W;if(T=J-j*j,T>=0){N=Math.sqrt(T)*s,at=Rt-Math.atan2(N,j),yt=Math.atan2(N/f,(j-Z)/d);break t}}let de=et.PI,B=Z-A,Te=B*B,Gt=0,Wt=0,It=Z+A,ne=It*It,Pt=0;b=-A*Z/(gt-bt),b>=-1&&b<=1&&(b=Math.acos(b),D=A*Math.cos(b)+Z,N=w*Math.sin(b),C=D*D+N*N,C<Te&&(de=b,Te=C,B=D,Gt=N),C>ne&&(Wt=b,ne=C,It=D,Pt=N)),J<=(Te+ne)*.5?(at=Rt-Math.atan2(Gt*s,B),yt=de*s):(at=Rt-Math.atan2(Pt*s,It),yt=Wt*s)}let ft=Math.atan2(S,_)*y,ot=t.arotation;at=(at-ft)*et.radDeg+g-ot,at>180?at-=360:at<-180&&(at+=360),t.updateWorldTransformWith(h,u,ot+at*c,p,x,0,0),ot=e.arotation,yt=((yt+ft)*et.radDeg-e.ashearX)*y+v-ot,yt>180?yt-=360:yt<-180&&(yt+=360),e.updateWorldTransformWith(_,S,ot+yt*c,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY)}};var Js=class extends bn{bones=new Array;_target=null;set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}bendDirection=0;compress=!1;stretch=!1;uniform=!1;mix=0;softness=0;constructor(t){super(t,0,!1)}};var Ks=class extends bn{bones=new Array;_target=null;set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("SlotData not set.")}positionMode=Ke.Fixed;spacingMode=me.Fixed;rotateMode=qn.Chain;offsetRotation=0;position=0;spacing=0;mixRotate=0;mixX=0;mixY=0;constructor(t){super(t,0,!1)}},Ke;(function(r){r[r.Fixed=0]="Fixed",r[r.Percent=1]="Percent"})(Ke||(Ke={}));var me;(function(r){r[r.Length=0]="Length",r[r.Fixed=1]="Fixed",r[r.Percent=2]="Percent",r[r.Proportional=3]="Proportional"})(me||(me={}));var qn;(function(r){r[r.Tangent=0]="Tangent",r[r.Chain=1]="Chain",r[r.ChainScale=2]="ChainScale"})(qn||(qn={}));var Ua=class r{static NONE=-1;static BEFORE=-2;static AFTER=-3;static epsilon=1e-5;data;bones;target;position=0;spacing=0;mixRotate=0;mixX=0;mixY=0;spaces=new Array;positions=new Array;world=new Array;curves=new Array;lengths=new Array;segments=new Array;active=!1;constructor(t,e){if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0,s=t.bones.length;i<s;i++){let l=e.findBone(t.bones[i].name);if(!l)throw new Error(`Couldn't find bone ${t.bones[i].name}.`);this.bones.push(l)}let n=e.findSlot(t.target.name);if(!n)throw new Error(`Couldn't find target bone ${t.target.name}`);this.target=n,this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}isActive(){return this.active}setToSetupPose(){let t=this.data;this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}update(t){let e=this.target.getAttachment();if(!(e instanceof Yn))return;let n=this.mixRotate,i=this.mixX,s=this.mixY;if(n==0&&i==0&&s==0)return;let l=this.data,o=l.rotateMode==qn.Tangent,a=l.rotateMode==qn.ChainScale,c=this.bones,h=c.length,u=o?h:h+1,d=it.setArraySize(this.spaces,u),f=a?this.lengths=it.setArraySize(this.lengths,h):[],p=this.spacing;switch(l.spacingMode){case me.Percent:if(a)for(let M=0,E=u-1;M<E;M++){let A=c[M],w=A.data.length,b=w*A.a,C=w*A.c;f[M]=Math.sqrt(b*b+C*C)}it.arrayFill(d,1,u,p);break;case me.Proportional:let _=0;for(let M=0,E=u-1;M<E;){let A=c[M],w=A.data.length;if(w<r.epsilon)a&&(f[M]=0),d[++M]=p;else{let b=w*A.a,C=w*A.c,U=Math.sqrt(b*b+C*C);a&&(f[M]=U),d[++M]=U,_+=U}}if(_>0){_=u/_*p;for(let M=1;M<u;M++)d[M]*=_}break;default:let S=l.spacingMode==me.Length;for(let M=0,E=u-1;M<E;){let A=c[M],w=A.data.length;if(w<r.epsilon)a&&(f[M]=0),d[++M]=p;else{let b=w*A.a,C=w*A.c,U=Math.sqrt(b*b+C*C);a&&(f[M]=U),d[++M]=(S?w+p:p)*U/w}}}let x=this.computeWorldPositions(e,u,o),m=x[0],g=x[1],v=l.offsetRotation,y=!1;if(v==0)y=l.rotateMode==qn.Chain;else{y=!1;let _=this.target.bone;v*=_.a*_.d-_.b*_.c>0?et.degRad:-et.degRad}for(let _=0,S=3;_<h;_++,S+=3){let M=c[_];M.worldX+=(m-M.worldX)*i,M.worldY+=(g-M.worldY)*s;let E=x[S],A=x[S+1],w=E-m,b=A-g;if(a){let C=f[_];if(C!=0){let U=(Math.sqrt(w*w+b*b)/C-1)*n+1;M.a*=U,M.c*=U}}if(m=E,g=A,n>0){let C=M.a,U=M.b,L=M.c,I=M.d,D=0,N=0,H=0;if(o?D=x[S-1]:d[_+1]==0?D=x[S+2]:D=Math.atan2(b,w),D-=Math.atan2(L,C),y){N=Math.cos(D),H=Math.sin(D);let V=M.data.length;m+=(V*(N*C-H*L)-w)*n,g+=(V*(H*C+N*L)-b)*n}else D+=v;D>et.PI?D-=et.PI2:D<-et.PI&&(D+=et.PI2),D*=n,N=Math.cos(D),H=Math.sin(D),M.a=N*C-H*L,M.b=N*U-H*I,M.c=H*C+N*L,M.d=H*U+N*I}M.updateAppliedTransform()}}computeWorldPositions(t,e,n){let i=this.target,s=this.position,l=this.spaces,o=it.setArraySize(this.positions,e*3+2),a=this.world,c=t.closed,h=t.worldVerticesLength,u=h/6,d=r.NONE;if(!t.constantSpeed){let V=t.lengths;u-=c?1:2;let Z=V[u];this.data.positionMode==Ke.Percent&&(s*=Z);let nt;switch(this.data.spacingMode){case me.Percent:nt=Z;break;case me.Proportional:nt=Z/e;break;default:nt=1}a=it.setArraySize(this.world,8);for(let at=0,yt=0,rt=0;at<e;at++,yt+=3){let G=l[at]*nt;s+=G;let J=s;if(c)J%=Z,J<0&&(J+=Z),rt=0;else if(J<0){d!=r.BEFORE&&(d=r.BEFORE,t.computeWorldVertices(i,2,4,a,0,2)),this.addBeforePosition(J,a,0,o,yt);continue}else if(J>Z){d!=r.AFTER&&(d=r.AFTER,t.computeWorldVertices(i,h-6,4,a,0,2)),this.addAfterPosition(J-Z,a,0,o,yt);continue}for(;;rt++){let ft=V[rt];if(!(J>ft)){if(rt==0)J/=ft;else{let ot=V[rt-1];J=(J-ot)/(ft-ot)}break}}rt!=d&&(d=rt,c&&rt==u?(t.computeWorldVertices(i,h-4,4,a,0,2),t.computeWorldVertices(i,0,4,a,4,2)):t.computeWorldVertices(i,rt*6+2,8,a,0,2)),this.addCurvePosition(J,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],o,yt,n||at>0&&G==0)}return o}c?(h+=2,a=it.setArraySize(this.world,h),t.computeWorldVertices(i,2,h-4,a,0,2),t.computeWorldVertices(i,0,2,a,h-4,2),a[h-2]=a[0],a[h-1]=a[1]):(u--,h-=4,a=it.setArraySize(this.world,h),t.computeWorldVertices(i,2,h,a,0,2));let f=it.setArraySize(this.curves,u),p=0,x=a[0],m=a[1],g=0,v=0,y=0,_=0,S=0,M=0,E=0,A=0,w=0,b=0,C=0,U=0,L=0,I=0;for(let V=0,Z=2;V<u;V++,Z+=6)g=a[Z],v=a[Z+1],y=a[Z+2],_=a[Z+3],S=a[Z+4],M=a[Z+5],E=(x-g*2+y)*.1875,A=(m-v*2+_)*.1875,w=((g-y)*3-x+S)*.09375,b=((v-_)*3-m+M)*.09375,C=E*2+w,U=A*2+b,L=(g-x)*.75+E+w*.16666667,I=(v-m)*.75+A+b*.16666667,p+=Math.sqrt(L*L+I*I),L+=C,I+=U,C+=w,U+=b,p+=Math.sqrt(L*L+I*I),L+=C,I+=U,p+=Math.sqrt(L*L+I*I),L+=C+w,I+=U+b,p+=Math.sqrt(L*L+I*I),f[V]=p,x=S,m=M;this.data.positionMode==Ke.Percent&&(s*=p);let D;switch(this.data.spacingMode){case me.Percent:D=p;break;case me.Proportional:D=p/e;break;default:D=1}let N=this.segments,H=0;for(let V=0,Z=0,nt=0,at=0;V<e;V++,Z+=3){let yt=l[V]*D;s+=yt;let rt=s;if(c)rt%=p,rt<0&&(rt+=p),nt=0;else if(rt<0){this.addBeforePosition(rt,a,0,o,Z);continue}else if(rt>p){this.addAfterPosition(rt-p,a,h-4,o,Z);continue}for(;;nt++){let G=f[nt];if(!(rt>G)){if(nt==0)rt/=G;else{let J=f[nt-1];rt=(rt-J)/(G-J)}break}}if(nt!=d){d=nt;let G=nt*6;for(x=a[G],m=a[G+1],g=a[G+2],v=a[G+3],y=a[G+4],_=a[G+5],S=a[G+6],M=a[G+7],E=(x-g*2+y)*.03,A=(m-v*2+_)*.03,w=((g-y)*3-x+S)*.006,b=((v-_)*3-m+M)*.006,C=E*2+w,U=A*2+b,L=(g-x)*.3+E+w*.16666667,I=(v-m)*.3+A+b*.16666667,H=Math.sqrt(L*L+I*I),N[0]=H,G=1;G<8;G++)L+=C,I+=U,C+=w,U+=b,H+=Math.sqrt(L*L+I*I),N[G]=H;L+=C,I+=U,H+=Math.sqrt(L*L+I*I),N[8]=H,L+=C+w,I+=U+b,H+=Math.sqrt(L*L+I*I),N[9]=H,at=0}for(rt*=H;;at++){let G=N[at];if(!(rt>G)){if(at==0)rt/=G;else{let J=N[at-1];rt=at+(rt-J)/(G-J)}break}}this.addCurvePosition(rt*.1,x,m,g,v,y,_,S,M,o,Z,n||V>0&&yt==0)}return o}addBeforePosition(t,e,n,i,s){let l=e[n],o=e[n+1],a=e[n+2]-l,c=e[n+3]-o,h=Math.atan2(c,a);i[s]=l+t*Math.cos(h),i[s+1]=o+t*Math.sin(h),i[s+2]=h}addAfterPosition(t,e,n,i,s){let l=e[n+2],o=e[n+3],a=l-e[n],c=o-e[n+1],h=Math.atan2(c,a);i[s]=l+t*Math.cos(h),i[s+1]=o+t*Math.sin(h),i[s+2]=h}addCurvePosition(t,e,n,i,s,l,o,a,c,h,u,d){if(t==0||isNaN(t)){h[u]=e,h[u+1]=n,h[u+2]=Math.atan2(s-n,i-e);return}let f=t*t,p=f*t,x=1-t,m=x*x,g=m*x,v=x*t,y=v*3,_=x*y,S=y*t,M=e*g+i*_+l*S+a*p,E=n*g+s*_+o*S+c*p;h[u]=M,h[u+1]=E,d&&(t<.001?h[u+2]=Math.atan2(s-n,i-e):h[u+2]=Math.atan2(E-(n*m+s*v*2+o*f),M-(e*m+i*v*2+l*f)))}};var Na=class{data;_bone=null;set bone(t){this._bone=t}get bone(){if(this._bone)return this._bone;throw new Error("Bone not set.")}inertia=0;strength=0;damping=0;massInverse=0;wind=0;gravity=0;mix=0;_reset=!0;ux=0;uy=0;cx=0;cy=0;tx=0;ty=0;xOffset=0;xVelocity=0;yOffset=0;yVelocity=0;rotateOffset=0;rotateVelocity=0;scaleOffset=0;scaleVelocity=0;active=!1;skeleton;remaining=0;lastTime=0;constructor(t,e){this.data=t,this.skeleton=e,this.bone=e.bones[t.bone.index],this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}reset(){this.remaining=0,this.lastTime=this.skeleton.time,this._reset=!0,this.xOffset=0,this.xVelocity=0,this.yOffset=0,this.yVelocity=0,this.rotateOffset=0,this.rotateVelocity=0,this.scaleOffset=0,this.scaleVelocity=0}setToSetupPose(){let t=this.data;this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}isActive(){return this.active}update(t){let e=this.mix;if(e==0)return;let n=this.data.x>0,i=this.data.y>0,s=this.data.rotate>0||this.data.shearX>0,l=this.data.scaleX>0,o=this.bone,a=o.data.length;switch(t){case nn.none:return;case nn.reset:this.reset();case nn.update:let c=this.skeleton,h=Math.max(this.skeleton.time-this.lastTime,0);this.remaining+=h,this.lastTime=c.time;let u=o.worldX,d=o.worldY;if(this._reset)this._reset=!1,this.ux=u,this.uy=d;else{let f=this.remaining,p=this.inertia,x=this.data.step,m=this.skeleton.data.referenceScale,g=-1,v=this.data.limit*h,y=v*Math.abs(c.scaleY);if(v*=Math.abs(c.scaleX),n||i){if(n){let _=(this.ux-u)*p;this.xOffset+=_>v?v:_<-v?-v:_,this.ux=u}if(i){let _=(this.uy-d)*p;this.yOffset+=_>y?y:_<-y?-y:_,this.uy=d}if(f>=x){g=Math.pow(this.damping,60*x);let _=this.massInverse*x,S=this.strength,M=this.wind*m*c.scaleX,E=this.gravity*m*c.scaleY;do n&&(this.xVelocity+=(M-this.xOffset*S)*_,this.xOffset+=this.xVelocity*x,this.xVelocity*=g),i&&(this.yVelocity-=(E+this.yOffset*S)*_,this.yOffset+=this.yVelocity*x,this.yVelocity*=g),f-=x;while(f>=x)}n&&(o.worldX+=this.xOffset*e*this.data.x),i&&(o.worldY+=this.yOffset*e*this.data.y)}if(s||l){let _=Math.atan2(o.c,o.a),S=0,M=0,E=0,A=this.cx-o.worldX,w=this.cy-o.worldY;if(A>v?A=v:A<-v&&(A=-v),w>y?w=y:w<-y&&(w=-y),s){E=(this.data.rotate+this.data.shearX)*e;let b=Math.atan2(w+this.ty,A+this.tx)-_-this.rotateOffset*E;this.rotateOffset+=(b-Math.ceil(b*et.invPI2-.5)*et.PI2)*p,b=this.rotateOffset*E+_,S=Math.cos(b),M=Math.sin(b),l&&(b=a*o.getWorldScaleX(),b>0&&(this.scaleOffset+=(A*S+w*M)*p/b))}else{S=Math.cos(_),M=Math.sin(_);let b=a*o.getWorldScaleX();b>0&&(this.scaleOffset+=(A*S+w*M)*p/b)}if(f=this.remaining,f>=x){g==-1&&(g=Math.pow(this.damping,60*x));let b=this.massInverse*x,C=this.strength,U=this.wind,L=mi.yDown?-this.gravity:this.gravity,I=a/m;for(;;)if(f-=x,l&&(this.scaleVelocity+=(U*S-L*M-this.scaleOffset*C)*b,this.scaleOffset+=this.scaleVelocity*x,this.scaleVelocity*=g),s){if(this.rotateVelocity-=((U*M+L*S)*I+this.rotateOffset*C)*b,this.rotateOffset+=this.rotateVelocity*x,this.rotateVelocity*=g,f<x)break;let D=this.rotateOffset*E+_;S=Math.cos(D),M=Math.sin(D)}else if(f<x)break}}this.remaining=f}this.cx=o.worldX,this.cy=o.worldY;break;case nn.pose:n&&(o.worldX+=this.xOffset*e*this.data.x),i&&(o.worldY+=this.yOffset*e*this.data.y)}if(s){let c=this.rotateOffset*e,h=0,u=0,d=0;if(this.data.shearX>0){let f=0;this.data.rotate>0&&(f=c*this.data.rotate,h=Math.sin(f),u=Math.cos(f),d=o.b,o.b=u*d-h*o.d,o.d=h*d+u*o.d),f+=c*this.data.shearX,h=Math.sin(f),u=Math.cos(f),d=o.a,o.a=u*d-h*o.c,o.c=h*d+u*o.c}else c*=this.data.rotate,h=Math.sin(c),u=Math.cos(c),d=o.a,o.a=u*d-h*o.c,o.c=h*d+u*o.c,d=o.b,o.b=u*d-h*o.d,o.d=h*d+u*o.d}if(l){let c=1+this.scaleOffset*e*this.data.scaleX;o.a*=c,o.c*=c}t!=nn.pose&&(this.tx=a*o.a,this.ty=a*o.c),o.updateAppliedTransform()}translate(t,e){this.ux-=t,this.uy-=e,this.cx-=t,this.cy-=e}rotate(t,e,n){let i=n*et.degRad,s=Math.cos(i),l=Math.sin(i),o=this.cx-t,a=this.cy-e;this.translate(o*s-a*l-o,o*l+a*s-a)}};var Fa=class{data;bone;color;darkColor=null;attachment=null;attachmentState=0;sequenceIndex=-1;deform=new Array;constructor(t,e){if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("bone cannot be null.");this.data=t,this.bone=e,this.color=new St,this.darkColor=t.darkColor?new St:null,this.setToSetupPose()}getSkeleton(){return this.bone.skeleton}getAttachment(){return this.attachment}setAttachment(t){this.attachment!=t&&((!(t instanceof we)||!(this.attachment instanceof we)||t.timelineAttachment!=this.attachment.timelineAttachment)&&(this.deform.length=0),this.attachment=t,this.sequenceIndex=-1)}setToSetupPose(){this.color.setFromColor(this.data.color),this.darkColor&&this.darkColor.setFromColor(this.data.darkColor),this.data.attachmentName?(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.attachmentName))):this.attachment=null}};var Oa=class{data;bones;target;mixRotate=0;mixX=0;mixY=0;mixScaleX=0;mixScaleY=0;mixShearY=0;temp=new $e;active=!1;constructor(t,e){if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0;i<t.bones.length;i++){let s=e.findBone(t.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${t.bones[i].name}.`);this.bones.push(s)}let n=e.findBone(t.target.name);if(!n)throw new Error(`Couldn't find target bone ${t.target.name}.`);this.target=n,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}isActive(){return this.active}setToSetupPose(){let t=this.data;this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}update(t){this.mixRotate==0&&this.mixX==0&&this.mixY==0&&this.mixScaleX==0&&this.mixScaleY==0&&this.mixShearY==0||(this.data.local?this.data.relative?this.applyRelativeLocal():this.applyAbsoluteLocal():this.data.relative?this.applyRelativeWorld():this.applyAbsoluteWorld())}applyAbsoluteWorld(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,l=this.mixShearY,o=e!=0||n!=0,a=this.target,c=a.a,h=a.b,u=a.c,d=a.d,f=c*d-h*u>0?et.degRad:-et.degRad,p=this.data.offsetRotation*f,x=this.data.offsetShearY*f,m=this.bones;for(let g=0,v=m.length;g<v;g++){let y=m[g];if(t!=0){let _=y.a,S=y.b,M=y.c,E=y.d,A=Math.atan2(u,c)-Math.atan2(M,_)+p;A>et.PI?A-=et.PI2:A<-et.PI&&(A+=et.PI2),A*=t;let w=Math.cos(A),b=Math.sin(A);y.a=w*_-b*M,y.b=w*S-b*E,y.c=b*_+w*M,y.d=b*S+w*E}if(o){let _=this.temp;a.localToWorld(_.set(this.data.offsetX,this.data.offsetY)),y.worldX+=(_.x-y.worldX)*e,y.worldY+=(_.y-y.worldY)*n}if(i!=0){let _=Math.sqrt(y.a*y.a+y.c*y.c);_!=0&&(_=(_+(Math.sqrt(c*c+u*u)-_+this.data.offsetScaleX)*i)/_),y.a*=_,y.c*=_}if(s!=0){let _=Math.sqrt(y.b*y.b+y.d*y.d);_!=0&&(_=(_+(Math.sqrt(h*h+d*d)-_+this.data.offsetScaleY)*s)/_),y.b*=_,y.d*=_}if(l>0){let _=y.b,S=y.d,M=Math.atan2(S,_),E=Math.atan2(d,h)-Math.atan2(u,c)-(M-Math.atan2(y.c,y.a));E>et.PI?E-=et.PI2:E<-et.PI&&(E+=et.PI2),E=M+(E+x)*l;let A=Math.sqrt(_*_+S*S);y.b=Math.cos(E)*A,y.d=Math.sin(E)*A}y.updateAppliedTransform()}}applyRelativeWorld(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,l=this.mixShearY,o=e!=0||n!=0,a=this.target,c=a.a,h=a.b,u=a.c,d=a.d,f=c*d-h*u>0?et.degRad:-et.degRad,p=this.data.offsetRotation*f,x=this.data.offsetShearY*f,m=this.bones;for(let g=0,v=m.length;g<v;g++){let y=m[g];if(t!=0){let _=y.a,S=y.b,M=y.c,E=y.d,A=Math.atan2(u,c)+p;A>et.PI?A-=et.PI2:A<-et.PI&&(A+=et.PI2),A*=t;let w=Math.cos(A),b=Math.sin(A);y.a=w*_-b*M,y.b=w*S-b*E,y.c=b*_+w*M,y.d=b*S+w*E}if(o){let _=this.temp;a.localToWorld(_.set(this.data.offsetX,this.data.offsetY)),y.worldX+=_.x*e,y.worldY+=_.y*n}if(i!=0){let _=(Math.sqrt(c*c+u*u)-1+this.data.offsetScaleX)*i+1;y.a*=_,y.c*=_}if(s!=0){let _=(Math.sqrt(h*h+d*d)-1+this.data.offsetScaleY)*s+1;y.b*=_,y.d*=_}if(l>0){let _=Math.atan2(d,h)-Math.atan2(u,c);_>et.PI?_-=et.PI2:_<-et.PI&&(_+=et.PI2);let S=y.b,M=y.d;_=Math.atan2(M,S)+(_-et.PI/2+x)*l;let E=Math.sqrt(S*S+M*M);y.b=Math.cos(_)*E,y.d=Math.sin(_)*E}y.updateAppliedTransform()}}applyAbsoluteLocal(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,l=this.mixShearY,o=this.target,a=this.bones;for(let c=0,h=a.length;c<h;c++){let u=a[c],d=u.arotation;t!=0&&(d+=(o.arotation-d+this.data.offsetRotation)*t);let f=u.ax,p=u.ay;f+=(o.ax-f+this.data.offsetX)*e,p+=(o.ay-p+this.data.offsetY)*n;let x=u.ascaleX,m=u.ascaleY;i!=0&&x!=0&&(x=(x+(o.ascaleX-x+this.data.offsetScaleX)*i)/x),s!=0&&m!=0&&(m=(m+(o.ascaleY-m+this.data.offsetScaleY)*s)/m);let g=u.ashearY;l!=0&&(g+=(o.ashearY-g+this.data.offsetShearY)*l),u.updateWorldTransformWith(f,p,d,x,m,u.ashearX,g)}}applyRelativeLocal(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,l=this.mixShearY,o=this.target,a=this.bones;for(let c=0,h=a.length;c<h;c++){let u=a[c],d=u.arotation+(o.arotation+this.data.offsetRotation)*t,f=u.ax+(o.ax+this.data.offsetX)*e,p=u.ay+(o.ay+this.data.offsetY)*n,x=u.ascaleX*((o.ascaleX-1+this.data.offsetScaleX)*i+1),m=u.ascaleY*((o.ascaleY-1+this.data.offsetScaleY)*s+1),g=u.ashearY+(o.ashearY+this.data.offsetShearY)*l;u.updateWorldTransformWith(f,p,d,x,m,u.ashearX,g)}}};var mi=class r{static quadTriangles=[0,1,2,2,3,0];static yDown=!1;data;bones;slots;drawOrder;ikConstraints;transformConstraints;pathConstraints;physicsConstraints;_updateCache=new Array;skin=null;color;scaleX=1;_scaleY=1;get scaleY(){return r.yDown?-this._scaleY:this._scaleY}set scaleY(t){this._scaleY=t}x=0;y=0;time=0;constructor(t){if(!t)throw new Error("data cannot be null.");this.data=t,this.bones=new Array;for(let e=0;e<t.bones.length;e++){let n=t.bones[e],i;if(!n.parent)i=new wr(n,this,null);else{let s=this.bones[n.parent.index];i=new wr(n,this,s),s.children.push(i)}this.bones.push(i)}this.slots=new Array,this.drawOrder=new Array;for(let e=0;e<t.slots.length;e++){let n=t.slots[e],i=this.bones[n.boneData.index],s=new Fa(n,i);this.slots.push(s),this.drawOrder.push(s)}this.ikConstraints=new Array;for(let e=0;e<t.ikConstraints.length;e++){let n=t.ikConstraints[e];this.ikConstraints.push(new Da(n,this))}this.transformConstraints=new Array;for(let e=0;e<t.transformConstraints.length;e++){let n=t.transformConstraints[e];this.transformConstraints.push(new Oa(n,this))}this.pathConstraints=new Array;for(let e=0;e<t.pathConstraints.length;e++){let n=t.pathConstraints[e];this.pathConstraints.push(new Ua(n,this))}this.physicsConstraints=new Array;for(let e=0;e<t.physicsConstraints.length;e++){let n=t.physicsConstraints[e];this.physicsConstraints.push(new Na(n,this))}this.color=new St(1,1,1,1),this.updateCache()}updateCache(){let t=this._updateCache;t.length=0;let e=this.bones;for(let d=0,f=e.length;d<f;d++){let p=e[d];p.sorted=p.data.skinRequired,p.active=!p.sorted}if(this.skin){let d=this.skin.bones;for(let f=0,p=this.skin.bones.length;f<p;f++){let x=this.bones[d[f].index];do x.sorted=!1,x.active=!0,x=x.parent;while(x)}}let n=this.ikConstraints,i=this.transformConstraints,s=this.pathConstraints,l=this.physicsConstraints,o=n.length,a=i.length,c=s.length,h=this.physicsConstraints.length,u=o+a+c+h;t:for(let d=0;d<u;d++){for(let f=0;f<o;f++){let p=n[f];if(p.data.order==d){this.sortIkConstraint(p);continue t}}for(let f=0;f<a;f++){let p=i[f];if(p.data.order==d){this.sortTransformConstraint(p);continue t}}for(let f=0;f<c;f++){let p=s[f];if(p.data.order==d){this.sortPathConstraint(p);continue t}}for(let f=0;f<h;f++){let p=l[f];if(p.data.order==d){this.sortPhysicsConstraint(p);continue t}}}for(let d=0,f=e.length;d<f;d++)this.sortBone(e[d])}sortIkConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&it.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target;this.sortBone(e);let n=t.bones,i=n[0];if(this.sortBone(i),n.length==1)this._updateCache.push(t),this.sortReset(i.children);else{let s=n[n.length-1];this.sortBone(s),this._updateCache.push(t),this.sortReset(i.children),s.sorted=!0}}sortPathConstraint(t){if(t.active=t.target.bone.isActive()&&(!t.data.skinRequired||this.skin&&it.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target,n=e.data.index,i=e.bone;this.skin&&this.sortPathConstraintAttachment(this.skin,n,i),this.data.defaultSkin&&this.data.defaultSkin!=this.skin&&this.sortPathConstraintAttachment(this.data.defaultSkin,n,i);for(let a=0,c=this.data.skins.length;a<c;a++)this.sortPathConstraintAttachment(this.data.skins[a],n,i);let s=e.getAttachment();s instanceof Yn&&this.sortPathConstraintAttachmentWith(s,i);let l=t.bones,o=l.length;for(let a=0;a<o;a++)this.sortBone(l[a]);this._updateCache.push(t);for(let a=0;a<o;a++)this.sortReset(l[a].children);for(let a=0;a<o;a++)l[a].sorted=!0}sortTransformConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&it.contains(this.skin.constraints,t.data,!0)),!t.active)return;this.sortBone(t.target);let e=t.bones,n=e.length;if(t.data.local)for(let i=0;i<n;i++){let s=e[i];this.sortBone(s.parent),this.sortBone(s)}else for(let i=0;i<n;i++)this.sortBone(e[i]);this._updateCache.push(t);for(let i=0;i<n;i++)this.sortReset(e[i].children);for(let i=0;i<n;i++)e[i].sorted=!0}sortPathConstraintAttachment(t,e,n){let i=t.attachments[e];if(i)for(let s in i)this.sortPathConstraintAttachmentWith(i[s],n)}sortPathConstraintAttachmentWith(t,e){if(!(t instanceof Yn))return;let n=t.bones;if(!n)this.sortBone(e);else{let i=this.bones;for(let s=0,l=n.length;s<l;){let o=n[s++];for(o+=s;s<o;)this.sortBone(i[n[s++]])}}}sortPhysicsConstraint(t){let e=t.bone;t.active=e.active&&(!t.data.skinRequired||this.skin!=null&&it.contains(this.skin.constraints,t.data,!0)),t.active&&(this.sortBone(e),this._updateCache.push(t),this.sortReset(e.children),e.sorted=!0)}sortBone(t){if(!t||t.sorted)return;let e=t.parent;e&&this.sortBone(e),t.sorted=!0,this._updateCache.push(t)}sortReset(t){for(let e=0,n=t.length;e<n;e++){let i=t[e];i.active&&(i.sorted&&this.sortReset(i.children),i.sorted=!1)}}updateWorldTransform(t){if(t==null)throw new Error("physics is undefined");let e=this.bones;for(let i=0,s=e.length;i<s;i++){let l=e[i];l.ax=l.x,l.ay=l.y,l.arotation=l.rotation,l.ascaleX=l.scaleX,l.ascaleY=l.scaleY,l.ashearX=l.shearX,l.ashearY=l.shearY}let n=this._updateCache;for(let i=0,s=n.length;i<s;i++)n[i].update(t)}updateWorldTransformWith(t,e){if(!e)throw new Error("parent cannot be null.");let n=this.bones;for(let m=1,g=n.length;m<g;m++){let v=n[m];v.ax=v.x,v.ay=v.y,v.arotation=v.rotation,v.ascaleX=v.scaleX,v.ascaleY=v.scaleY,v.ashearX=v.shearX,v.ashearY=v.shearY}let i=this.getRootBone();if(!i)throw new Error("Root bone must not be null.");let s=e.a,l=e.b,o=e.c,a=e.d;i.worldX=s*this.x+l*this.y+e.worldX,i.worldY=o*this.x+a*this.y+e.worldY;let c=(i.rotation+i.shearX)*et.degRad,h=(i.rotation+90+i.shearY)*et.degRad,u=Math.cos(c)*i.scaleX,d=Math.cos(h)*i.scaleY,f=Math.sin(c)*i.scaleX,p=Math.sin(h)*i.scaleY;i.a=(s*u+l*f)*this.scaleX,i.b=(s*d+l*p)*this.scaleX,i.c=(o*u+a*f)*this.scaleY,i.d=(o*d+a*p)*this.scaleY;let x=this._updateCache;for(let m=0,g=x.length;m<g;m++){let v=x[m];v!=i&&v.update(t)}}setToSetupPose(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()}setBonesToSetupPose(){for(let t of this.bones)t.setToSetupPose();for(let t of this.ikConstraints)t.setToSetupPose();for(let t of this.transformConstraints)t.setToSetupPose();for(let t of this.pathConstraints)t.setToSetupPose();for(let t of this.physicsConstraints)t.setToSetupPose()}setSlotsToSetupPose(){let t=this.slots;it.arrayCopy(t,0,this.drawOrder,0,t.length);for(let e=0,n=t.length;e<n;e++)t[e].setToSetupPose()}getRootBone(){return this.bones.length==0?null:this.bones[0]}findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.data.name==t)return s}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.data.name==t)return s}return null}setSkinByName(t){let e=this.data.findSkin(t);if(!e)throw new Error("Skin not found: "+t);this.setSkin(e)}setSkin(t){if(t!=this.skin){if(t)if(this.skin)t.attachAll(this,this.skin);else{let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n],l=s.data.attachmentName;if(l){let o=t.getAttachment(n,l);o&&s.setAttachment(o)}}}this.skin=t,this.updateCache()}}getAttachmentByName(t,e){let n=this.data.findSlot(t);if(!n)throw new Error(`Can't find slot with name ${t}`);return this.getAttachment(n.index,e)}getAttachment(t,e){if(!e)throw new Error("attachmentName cannot be null.");if(this.skin){let n=this.skin.getAttachment(t,e);if(n)return n}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(t,e):null}setAttachment(t,e){if(!t)throw new Error("slotName cannot be null.");let n=this.slots;for(let i=0,s=n.length;i<s;i++){let l=n[i];if(l.data.name==t){let o=null;if(e&&(o=this.getAttachment(i,e),!o))throw new Error("Attachment not found: "+e+", for slot: "+t);l.setAttachment(o);return}}throw new Error("Slot not found: "+t)}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.ikConstraints.find(e=>e.data.name==t)??null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.transformConstraints.find(e=>e.data.name==t)??null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.pathConstraints.find(e=>e.data.name==t)??null}findPhysicsConstraint(t){if(t==null)throw new Error("constraintName cannot be null.");return this.physicsConstraints.find(e=>e.data.name==t)??null}getBoundsRect(t){let e=new $e,n=new $e;return this.getBounds(e,n,void 0,t),{x:e.x,y:e.y,width:n.x,height:n.y}}getBounds(t,e,n=new Array(2),i=null){if(!t)throw new Error("offset cannot be null.");if(!e)throw new Error("size cannot be null.");let s=this.drawOrder,l=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;for(let h=0,u=s.length;h<u;h++){let d=s[h];if(!d.bone.active)continue;let f=0,p=null,x=null,m=d.getAttachment();if(m instanceof pi)f=8,p=it.setArraySize(n,f,0),m.computeWorldVertices(d,p,0,2),x=r.quadTriangles;else if(m instanceof Mn){let g=m;f=g.worldVerticesLength,p=it.setArraySize(n,f,0),g.computeWorldVertices(d,0,f,p,0,2),x=g.triangles}else if(m instanceof fi&&i!=null){i.clipStart(d,m);continue}if(p&&x){i!=null&&i.isClipping()&&(i.clipTriangles(p,x,x.length),p=i.clippedVertices,f=i.clippedVertices.length);for(let g=0,v=p.length;g<v;g+=2){let y=p[g],_=p[g+1];l=Math.min(l,y),o=Math.min(o,_),a=Math.max(a,y),c=Math.max(c,_)}}i?.clipEndWithSlot(d)}i?.clipEnd(),t.set(l,o),e.set(a-l,c-o)}update(t){this.time+=t}physicsTranslate(t,e){let n=this.physicsConstraints;for(let i=0,s=n.length;i<s;i++)n[i].translate(t,e)}physicsRotate(t,e,n){let i=this.physicsConstraints;for(let s=0,l=i.length;s<l;s++)i[s].rotate(t,e,n)}},nn;(function(r){r[r.none=0]="none",r[r.reset=1]="reset",r[r.update=2]="update",r[r.pose=3]="pose"})(nn||(nn={}));var Qs=class extends bn{_bone=null;set bone(t){this._bone=t}get bone(){if(this._bone)return this._bone;throw new Error("BoneData not set.")}x=0;y=0;rotate=0;scaleX=0;shearX=0;limit=0;step=0;inertia=0;strength=0;damping=0;massInverse=0;wind=0;gravity=0;mix=0;inertiaGlobal=!1;strengthGlobal=!1;dampingGlobal=!1;massGlobal=!1;windGlobal=!1;gravityGlobal=!1;mixGlobal=!1;constructor(t){super(t,0,!1)}};var js=class{name=null;bones=new Array;slots=new Array;skins=new Array;defaultSkin=null;events=new Array;animations=new Array;ikConstraints=new Array;transformConstraints=new Array;pathConstraints=new Array;physicsConstraints=new Array;x=0;y=0;width=0;height=0;referenceScale=100;version=null;hash=null;fps=0;imagesPath=null;audioPath=null;findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findSkin(t){if(!t)throw new Error("skinName cannot be null.");let e=this.skins;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findEvent(t){if(!t)throw new Error("eventDataName cannot be null.");let e=this.events;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findAnimation(t){if(!t)throw new Error("animationName cannot be null.");let e=this.animations;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");let e=this.ikConstraints;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");let e=this.transformConstraints;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");let e=this.pathConstraints;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findPhysicsConstraint(t){if(!t)throw new Error("constraintName cannot be null.");let e=this.physicsConstraints;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}};var Ba=class{slotIndex;name;attachment;constructor(t=0,e,n){this.slotIndex=t,this.name=e,this.attachment=n}},Ni=class{name;attachments=new Array;bones=Array();constraints=new Array;color=new St(.99607843,.61960787,.30980393,1);constructor(t){if(!t)throw new Error("name cannot be null.");this.name=t}setAttachment(t,e,n){if(!n)throw new Error("attachment cannot be null.");let i=this.attachments;t>=i.length&&(i.length=t+1),i[t]||(i[t]={}),i[t][e]=n}addSkin(t){for(let i=0;i<t.bones.length;i++){let s=t.bones[i],l=!1;for(let o=0;o<this.bones.length;o++)if(this.bones[o]==s){l=!0;break}l||this.bones.push(s)}for(let i=0;i<t.constraints.length;i++){let s=t.constraints[i],l=!1;for(let o=0;o<this.constraints.length;o++)if(this.constraints[o]==s){l=!0;break}l||this.constraints.push(s)}let e=t.getAttachments();for(let i=0;i<e.length;i++){var n=e[i];this.setAttachment(n.slotIndex,n.name,n.attachment)}}copySkin(t){for(let i=0;i<t.bones.length;i++){let s=t.bones[i],l=!1;for(let o=0;o<this.bones.length;o++)if(this.bones[o]==s){l=!0;break}l||this.bones.push(s)}for(let i=0;i<t.constraints.length;i++){let s=t.constraints[i],l=!1;for(let o=0;o<this.constraints.length;o++)if(this.constraints[o]==s){l=!0;break}l||this.constraints.push(s)}let e=t.getAttachments();for(let i=0;i<e.length;i++){var n=e[i];n.attachment&&(n.attachment instanceof Mn?(n.attachment=n.attachment.newLinkedMesh(),this.setAttachment(n.slotIndex,n.name,n.attachment)):(n.attachment=n.attachment.copy(),this.setAttachment(n.slotIndex,n.name,n.attachment)))}}getAttachment(t,e){let n=this.attachments[t];return n?n[e]:null}removeAttachment(t,e){let n=this.attachments[t];n&&delete n[e]}getAttachments(){let t=new Array;for(var e=0;e<this.attachments.length;e++){let n=this.attachments[e];if(n)for(let i in n){let s=n[i];s&&t.push(new Ba(e,i,s))}}return t}getAttachmentsForSlot(t,e){let n=this.attachments[t];if(n)for(let i in n){let s=n[i];s&&e.push(new Ba(t,i,s))}}clear(){this.attachments.length=0,this.bones.length=0,this.constraints.length=0}attachAll(t,e){let n=0;for(let i=0;i<t.slots.length;i++){let s=t.slots[i],l=s.getAttachment();if(l&&n<e.attachments.length){let o=e.attachments[n];for(let a in o){let c=o[a];if(l==c){let h=this.getAttachment(n,a);h&&s.setAttachment(h);break}}}n++}}};var tr=class{index=0;name;boneData;color=new St(1,1,1,1);darkColor=null;attachmentName=null;blendMode=Sn.Normal;visible=!0;constructor(t,e,n){if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");if(!n)throw new Error("boneData cannot be null.");this.index=t,this.name=e,this.boneData=n}},Sn;(function(r){r[r.Normal=0]="Normal",r[r.Additive=1]="Additive",r[r.Multiply=2]="Multiply",r[r.Screen=3]="Screen"})(Sn||(Sn={}));var er=class extends bn{bones=new Array;_target=null;set target(t){this._target=t}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}mixRotate=0;mixX=0;mixY=0;mixScaleX=0;mixScaleY=0;mixShearY=0;offsetRotation=0;offsetX=0;offsetY=0;offsetScaleX=0;offsetScaleY=0;offsetShearY=0;relative=!1;local=!1;constructor(t){super(t,0,!1)}};var ka=class{scale=1;attachmentLoader;linkedMeshes=new Array;constructor(t){this.attachmentLoader=t}readSkeletonData(t){let e=this.scale,n=new js;n.name="";let i=new jl(t),s=i.readInt32(),l=i.readInt32();n.hash=l==0&&s==0?null:l.toString(16)+s.toString(16),n.version=i.readString(),n.x=i.readFloat(),n.y=i.readFloat(),n.width=i.readFloat(),n.height=i.readFloat(),n.referenceScale=i.readFloat()*e;let o=i.readBoolean();o&&(n.fps=i.readFloat(),n.imagesPath=i.readString(),n.audioPath=i.readString());let a=0;a=i.readInt(!0);for(let h=0;h<a;h++){let u=i.readString();if(!u)throw new Error("String in string table must not be null.");i.strings.push(u)}a=i.readInt(!0);for(let h=0;h<a;h++){let u=i.readString();if(!u)throw new Error("Bone name must not be null.");let d=h==0?null:n.bones[i.readInt(!0)],f=new qs(h,u,d);f.rotation=i.readFloat(),f.x=i.readFloat()*e,f.y=i.readFloat()*e,f.scaleX=i.readFloat(),f.scaleY=i.readFloat(),f.shearX=i.readFloat(),f.shearY=i.readFloat(),f.length=i.readFloat()*e,f.inherit=i.readByte(),f.skinRequired=i.readBoolean(),o&&(St.rgba8888ToColor(f.color,i.readInt32()),f.icon=i.readString()??void 0,f.visible=i.readBoolean()),n.bones.push(f)}a=i.readInt(!0);for(let h=0;h<a;h++){let u=i.readString();if(!u)throw new Error("Slot name must not be null.");let d=n.bones[i.readInt(!0)],f=new tr(h,u,d);St.rgba8888ToColor(f.color,i.readInt32());let p=i.readInt32();p!=-1&&St.rgb888ToColor(f.darkColor=new St,p),f.attachmentName=i.readStringRef(),f.blendMode=i.readInt(!0),o&&(f.visible=i.readBoolean()),n.slots.push(f)}a=i.readInt(!0);for(let h=0,u;h<a;h++){let d=i.readString();if(!d)throw new Error("IK constraint data name must not be null.");let f=new Js(d);f.order=i.readInt(!0),u=i.readInt(!0);for(let x=0;x<u;x++)f.bones.push(n.bones[i.readInt(!0)]);f.target=n.bones[i.readInt(!0)];let p=i.readByte();f.skinRequired=(p&1)!=0,f.bendDirection=(p&2)!=0?1:-1,f.compress=(p&4)!=0,f.stretch=(p&8)!=0,f.uniform=(p&16)!=0,(p&32)!=0&&(f.mix=(p&64)!=0?i.readFloat():1),(p&128)!=0&&(f.softness=i.readFloat()*e),n.ikConstraints.push(f)}a=i.readInt(!0);for(let h=0,u;h<a;h++){let d=i.readString();if(!d)throw new Error("Transform constraint data name must not be null.");let f=new er(d);f.order=i.readInt(!0),u=i.readInt(!0);for(let x=0;x<u;x++)f.bones.push(n.bones[i.readInt(!0)]);f.target=n.bones[i.readInt(!0)];let p=i.readByte();f.skinRequired=(p&1)!=0,f.local=(p&2)!=0,f.relative=(p&4)!=0,(p&8)!=0&&(f.offsetRotation=i.readFloat()),(p&16)!=0&&(f.offsetX=i.readFloat()*e),(p&32)!=0&&(f.offsetY=i.readFloat()*e),(p&64)!=0&&(f.offsetScaleX=i.readFloat()),(p&128)!=0&&(f.offsetScaleY=i.readFloat()),p=i.readByte(),(p&1)!=0&&(f.offsetShearY=i.readFloat()),(p&2)!=0&&(f.mixRotate=i.readFloat()),(p&4)!=0&&(f.mixX=i.readFloat()),(p&8)!=0&&(f.mixY=i.readFloat()),(p&16)!=0&&(f.mixScaleX=i.readFloat()),(p&32)!=0&&(f.mixScaleY=i.readFloat()),(p&64)!=0&&(f.mixShearY=i.readFloat()),n.transformConstraints.push(f)}a=i.readInt(!0);for(let h=0,u;h<a;h++){let d=i.readString();if(!d)throw new Error("Path constraint data name must not be null.");let f=new Ks(d);f.order=i.readInt(!0),f.skinRequired=i.readBoolean(),u=i.readInt(!0);for(let x=0;x<u;x++)f.bones.push(n.bones[i.readInt(!0)]);f.target=n.slots[i.readInt(!0)];let p=i.readByte();f.positionMode=p&1,f.spacingMode=p>>1&3,f.rotateMode=p>>3&3,(p&128)!=0&&(f.offsetRotation=i.readFloat()),f.position=i.readFloat(),f.positionMode==Ke.Fixed&&(f.position*=e),f.spacing=i.readFloat(),(f.spacingMode==me.Length||f.spacingMode==me.Fixed)&&(f.spacing*=e),f.mixRotate=i.readFloat(),f.mixX=i.readFloat(),f.mixY=i.readFloat(),n.pathConstraints.push(f)}a=i.readInt(!0);for(let h=0,u;h<a;h++){let d=i.readString();if(!d)throw new Error("Physics constraint data name must not be null.");let f=new Qs(d);f.order=i.readInt(!0),f.bone=n.bones[i.readInt(!0)];let p=i.readByte();f.skinRequired=(p&1)!=0,(p&2)!=0&&(f.x=i.readFloat()),(p&4)!=0&&(f.y=i.readFloat()),(p&8)!=0&&(f.rotate=i.readFloat()),(p&16)!=0&&(f.scaleX=i.readFloat()),(p&32)!=0&&(f.shearX=i.readFloat()),f.limit=((p&64)!=0?i.readFloat():5e3)*e,f.step=1/i.readUnsignedByte(),f.inertia=i.readFloat(),f.strength=i.readFloat(),f.damping=i.readFloat(),f.massInverse=(p&128)!=0?i.readFloat():1,f.wind=i.readFloat(),f.gravity=i.readFloat(),p=i.readByte(),(p&1)!=0&&(f.inertiaGlobal=!0),(p&2)!=0&&(f.strengthGlobal=!0),(p&4)!=0&&(f.dampingGlobal=!0),(p&8)!=0&&(f.massGlobal=!0),(p&16)!=0&&(f.windGlobal=!0),(p&32)!=0&&(f.gravityGlobal=!0),(p&64)!=0&&(f.mixGlobal=!0),f.mix=(p&128)!=0?i.readFloat():1,n.physicsConstraints.push(f)}let c=this.readSkin(i,n,!0,o);c&&(n.defaultSkin=c,n.skins.push(c));{let h=n.skins.length;for(it.setArraySize(n.skins,a=h+i.readInt(!0));h<a;h++){let u=this.readSkin(i,n,!1,o);if(!u)throw new Error("readSkin() should not have returned null.");n.skins[h]=u}}a=this.linkedMeshes.length;for(let h=0;h<a;h++){let u=this.linkedMeshes[h],d=n.skins[u.skinIndex];if(!u.parent)throw new Error("Linked mesh parent must not be null");let f=d.getAttachment(u.slotIndex,u.parent);if(!f)throw new Error(`Parent mesh not found: ${u.parent}`);u.mesh.timelineAttachment=u.inheritTimeline?f:u.mesh,u.mesh.setParentMesh(f),u.mesh.region!=null&&u.mesh.updateRegion()}this.linkedMeshes.length=0,a=i.readInt(!0);for(let h=0;h<a;h++){let u=i.readString();if(!u)throw new Error("Event data name must not be null");let d=new $s(u);d.intValue=i.readInt(!1),d.floatValue=i.readFloat(),d.stringValue=i.readString(),d.audioPath=i.readString(),d.audioPath&&(d.volume=i.readFloat(),d.balance=i.readFloat()),n.events.push(d)}a=i.readInt(!0);for(let h=0;h<a;h++){let u=i.readString();if(!u)throw new Error("Animatio name must not be null.");n.animations.push(this.readAnimation(i,u,n))}return n}readSkin(t,e,n,i){let s=null,l=0;if(n){if(l=t.readInt(!0),l==0)return null;s=new Ni("default")}else{let o=t.readString();if(!o)throw new Error("Skin name must not be null.");s=new Ni(o),i&&St.rgba8888ToColor(s.color,t.readInt32()),s.bones.length=t.readInt(!0);for(let a=0,c=s.bones.length;a<c;a++)s.bones[a]=e.bones[t.readInt(!0)];for(let a=0,c=t.readInt(!0);a<c;a++)s.constraints.push(e.ikConstraints[t.readInt(!0)]);for(let a=0,c=t.readInt(!0);a<c;a++)s.constraints.push(e.transformConstraints[t.readInt(!0)]);for(let a=0,c=t.readInt(!0);a<c;a++)s.constraints.push(e.pathConstraints[t.readInt(!0)]);for(let a=0,c=t.readInt(!0);a<c;a++)s.constraints.push(e.physicsConstraints[t.readInt(!0)]);l=t.readInt(!0)}for(let o=0;o<l;o++){let a=t.readInt(!0);for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readStringRef();if(!u)throw new Error("Attachment name must not be null");let d=this.readAttachment(t,e,s,a,u,i);d&&s.setAttachment(a,u,d)}}return s}readAttachment(t,e,n,i,s,l){let o=this.scale,a=t.readByte(),c=(a&8)!=0?t.readStringRef():s;if(!c)throw new Error("Attachment name must not be null");switch(a&7){case Zn.Region:{let h=(a&16)!=0?t.readStringRef():null,u=(a&32)!=0?t.readInt32():4294967295,d=(a&64)!=0?this.readSequence(t):null,f=(a&128)!=0?t.readFloat():0,p=t.readFloat(),x=t.readFloat(),m=t.readFloat(),g=t.readFloat(),v=t.readFloat(),y=t.readFloat();h||(h=c);let _=this.attachmentLoader.newRegionAttachment(n,c,h,d);return _?(_.path=h,_.x=p*o,_.y=x*o,_.scaleX=m,_.scaleY=g,_.rotation=f,_.width=v*o,_.height=y*o,St.rgba8888ToColor(_.color,u),_.sequence=d,d==null&&_.updateRegion(),_):null}case Zn.BoundingBox:{let h=this.readVertices(t,(a&16)!=0),u=l?t.readInt32():0,d=this.attachmentLoader.newBoundingBoxAttachment(n,c);return d?(d.worldVerticesLength=h.length,d.vertices=h.vertices,d.bones=h.bones,l&&St.rgba8888ToColor(d.color,u),d):null}case Zn.Mesh:{let h=(a&16)!=0?t.readStringRef():c,u=(a&32)!=0?t.readInt32():4294967295,d=(a&64)!=0?this.readSequence(t):null,f=t.readInt(!0),p=this.readVertices(t,(a&128)!=0),x=this.readFloatArray(t,p.length,1),m=this.readShortArray(t,(p.length-f-2)*3),g=[],v=0,y=0;l&&(g=this.readShortArray(t,t.readInt(!0)),v=t.readFloat(),y=t.readFloat()),h||(h=c);let _=this.attachmentLoader.newMeshAttachment(n,c,h,d);return _?(_.path=h,St.rgba8888ToColor(_.color,u),_.bones=p.bones,_.vertices=p.vertices,_.worldVerticesLength=p.length,_.triangles=m,_.regionUVs=x,d==null&&_.updateRegion(),_.hullLength=f<<1,_.sequence=d,l&&(_.edges=g,_.width=v*o,_.height=y*o),_):null}case Zn.LinkedMesh:{let h=(a&16)!=0?t.readStringRef():c;if(h==null)throw new Error("Path of linked mesh must not be null");let u=(a&32)!=0?t.readInt32():4294967295,d=(a&64)!=0?this.readSequence(t):null,f=(a&128)!=0,p=t.readInt(!0),x=t.readStringRef(),m=0,g=0;l&&(m=t.readFloat(),g=t.readFloat());let v=this.attachmentLoader.newMeshAttachment(n,c,h,d);return v?(v.path=h,St.rgba8888ToColor(v.color,u),v.sequence=d,l&&(v.width=m*o,v.height=g*o),this.linkedMeshes.push(new tc(v,p,i,x,f)),v):null}case Zn.Path:{let h=(a&16)!=0,u=(a&32)!=0,d=this.readVertices(t,(a&64)!=0),f=it.newArray(d.length/6,0);for(let m=0,g=f.length;m<g;m++)f[m]=t.readFloat()*o;let p=l?t.readInt32():0,x=this.attachmentLoader.newPathAttachment(n,c);return x?(x.closed=h,x.constantSpeed=u,x.worldVerticesLength=d.length,x.vertices=d.vertices,x.bones=d.bones,x.lengths=f,l&&St.rgba8888ToColor(x.color,p),x):null}case Zn.Point:{let h=t.readFloat(),u=t.readFloat(),d=t.readFloat(),f=l?t.readInt32():0,p=this.attachmentLoader.newPointAttachment(n,c);return p?(p.x=u*o,p.y=d*o,p.rotation=h,l&&St.rgba8888ToColor(p.color,f),p):null}case Zn.Clipping:{let h=t.readInt(!0),u=this.readVertices(t,(a&16)!=0),d=l?t.readInt32():0,f=this.attachmentLoader.newClippingAttachment(n,c);return f?(f.endSlot=e.slots[h],f.worldVerticesLength=u.length,f.vertices=u.vertices,f.bones=u.bones,l&&St.rgba8888ToColor(f.color,d),f):null}}return null}readSequence(t){let e=new ps(t.readInt(!0));return e.start=t.readInt(!0),e.digits=t.readInt(!0),e.setupIndex=t.readInt(!0),e}readVertices(t,e){let n=this.scale,i=t.readInt(!0),s=new ec;if(s.length=i<<1,!e)return s.vertices=this.readFloatArray(t,s.length,n),s;let l=new Array,o=new Array;for(let a=0;a<i;a++){let c=t.readInt(!0);o.push(c);for(let h=0;h<c;h++)o.push(t.readInt(!0)),l.push(t.readFloat()*n),l.push(t.readFloat()*n),l.push(t.readFloat())}return s.vertices=it.toFloatArray(l),s.bones=o,s}readFloatArray(t,e,n){let i=new Array(e);if(n==1)for(let s=0;s<e;s++)i[s]=t.readFloat();else for(let s=0;s<e;s++)i[s]=t.readFloat()*n;return i}readShortArray(t,e){let n=new Array(e);for(let i=0;i<e;i++)n[i]=t.readInt(!0);return n}readAnimation(t,e,n){t.readInt(!0);let i=new Array,s=this.scale;for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0);for(let d=0,f=t.readInt(!0);d<f;d++){let p=t.readByte(),x=t.readInt(!0),m=x-1;switch(p){case s0:{let g=new dn(x,u);for(let v=0;v<x;v++)g.setFrame(v,t.readFloat(),t.readStringRef());i.push(g);break}case r0:{let g=t.readInt(!0),v=new Es(x,g,u),y=t.readFloat(),_=t.readUnsignedByte()/255,S=t.readUnsignedByte()/255,M=t.readUnsignedByte()/255,E=t.readUnsignedByte()/255;for(let A=0,w=0;v.setFrame(A,y,_,S,M,E),A!=m;A++){let b=t.readFloat(),C=t.readUnsignedByte()/255,U=t.readUnsignedByte()/255,L=t.readUnsignedByte()/255,I=t.readUnsignedByte()/255;switch(t.readByte()){case wn:v.setStepped(A);break;case En:Xt(t,v,w++,A,0,y,b,_,C,1),Xt(t,v,w++,A,1,y,b,S,U,1),Xt(t,v,w++,A,2,y,b,M,L,1),Xt(t,v,w++,A,3,y,b,E,I,1)}y=b,_=C,S=U,M=L,E=I}i.push(v);break}case a0:{let g=t.readInt(!0),v=new As(x,g,u),y=t.readFloat(),_=t.readUnsignedByte()/255,S=t.readUnsignedByte()/255,M=t.readUnsignedByte()/255;for(let E=0,A=0;v.setFrame(E,y,_,S,M),E!=m;E++){let w=t.readFloat(),b=t.readUnsignedByte()/255,C=t.readUnsignedByte()/255,U=t.readUnsignedByte()/255;switch(t.readByte()){case wn:v.setStepped(E);break;case En:Xt(t,v,A++,E,0,y,w,_,b,1),Xt(t,v,A++,E,1,y,w,S,C,1),Xt(t,v,A++,E,2,y,w,M,U,1)}y=w,_=b,S=C,M=U}i.push(v);break}case o0:{let g=t.readInt(!0),v=new Cs(x,g,u),y=t.readFloat(),_=t.readUnsignedByte()/255,S=t.readUnsignedByte()/255,M=t.readUnsignedByte()/255,E=t.readUnsignedByte()/255,A=t.readUnsignedByte()/255,w=t.readUnsignedByte()/255,b=t.readUnsignedByte()/255;for(let C=0,U=0;v.setFrame(C,y,_,S,M,E,A,w,b),C!=m;C++){let L=t.readFloat(),I=t.readUnsignedByte()/255,D=t.readUnsignedByte()/255,N=t.readUnsignedByte()/255,H=t.readUnsignedByte()/255,V=t.readUnsignedByte()/255,Z=t.readUnsignedByte()/255,nt=t.readUnsignedByte()/255;switch(t.readByte()){case wn:v.setStepped(C);break;case En:Xt(t,v,U++,C,0,y,L,_,I,1),Xt(t,v,U++,C,1,y,L,S,D,1),Xt(t,v,U++,C,2,y,L,M,N,1),Xt(t,v,U++,C,3,y,L,E,H,1),Xt(t,v,U++,C,4,y,L,A,V,1),Xt(t,v,U++,C,5,y,L,w,Z,1),Xt(t,v,U++,C,6,y,L,b,nt,1)}y=L,_=I,S=D,M=N,E=H,A=V,w=Z,b=nt}i.push(v);break}case l0:{let g=t.readInt(!0),v=new Rs(x,g,u),y=t.readFloat(),_=t.readUnsignedByte()/255,S=t.readUnsignedByte()/255,M=t.readUnsignedByte()/255,E=t.readUnsignedByte()/255,A=t.readUnsignedByte()/255,w=t.readUnsignedByte()/255;for(let b=0,C=0;v.setFrame(b,y,_,S,M,E,A,w),b!=m;b++){let U=t.readFloat(),L=t.readUnsignedByte()/255,I=t.readUnsignedByte()/255,D=t.readUnsignedByte()/255,N=t.readUnsignedByte()/255,H=t.readUnsignedByte()/255,V=t.readUnsignedByte()/255;switch(t.readByte()){case wn:v.setStepped(b);break;case En:Xt(t,v,C++,b,0,y,U,_,L,1),Xt(t,v,C++,b,1,y,U,S,I,1),Xt(t,v,C++,b,2,y,U,M,D,1),Xt(t,v,C++,b,3,y,U,E,N,1),Xt(t,v,C++,b,4,y,U,A,H,1),Xt(t,v,C++,b,5,y,U,w,V,1)}y=U,_=L,S=I,M=D,E=N,A=H,w=V}i.push(v);break}case c0:{let g=new Ts(x,t.readInt(!0),u),v=t.readFloat(),y=t.readUnsignedByte()/255;for(let _=0,S=0;g.setFrame(_,v,y),_!=m;_++){let M=t.readFloat(),E=t.readUnsignedByte()/255;switch(t.readByte()){case wn:g.setStepped(_);break;case En:Xt(t,g,S++,_,0,v,M,y,E,1)}v=M,y=E}i.push(g)}}}}for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0);for(let d=0,f=t.readInt(!0);d<f;d++){let p=t.readByte(),x=t.readInt(!0);if(p==i0){let g=new ws(x,u);for(let v=0;v<x;v++)g.setFrame(v,t.readFloat(),t.readByte());i.push(g);continue}let m=t.readInt(!0);switch(p){case qg:i.push(Ne(t,new Wn(x,m,u),1));break;case Zg:i.push(Ql(t,new ms(x,m,u),s));break;case $g:i.push(Ne(t,new gs(x,m,u),s));break;case Jg:i.push(Ne(t,new xs(x,m,u),s));break;case Kg:i.push(Ql(t,new ys(x,m,u),1));break;case Qg:i.push(Ne(t,new _s(x,m,u),1));break;case jg:i.push(Ne(t,new vs(x,m,u),1));break;case t0:i.push(Ql(t,new Ms(x,m,u),1));break;case e0:i.push(Ne(t,new bs(x,m,u),1));break;case n0:i.push(Ne(t,new Ss(x,m,u),1))}}}for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0),d=t.readInt(!0),f=d-1,p=new Ps(d,t.readInt(!0),u),x=t.readByte(),m=t.readFloat(),g=(x&1)!=0?(x&2)!=0?t.readFloat():1:0,v=(x&4)!=0?t.readFloat()*s:0;for(let y=0,_=0;p.setFrame(y,m,g,v,(x&8)!=0?1:-1,(x&16)!=0,(x&32)!=0),y!=f;y++){x=t.readByte();let S=t.readFloat(),M=(x&1)!=0?(x&2)!=0?t.readFloat():1:0,E=(x&4)!=0?t.readFloat()*s:0;(x&64)!=0?p.setStepped(y):(x&128)!=0&&(Xt(t,p,_++,y,0,m,S,g,M,1),Xt(t,p,_++,y,1,m,S,v,E,s)),m=S,g=M,v=E}i.push(p)}for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0),d=t.readInt(!0),f=d-1,p=new Ls(d,t.readInt(!0),u),x=t.readFloat(),m=t.readFloat(),g=t.readFloat(),v=t.readFloat(),y=t.readFloat(),_=t.readFloat(),S=t.readFloat();for(let M=0,E=0;p.setFrame(M,x,m,g,v,y,_,S),M!=f;M++){let A=t.readFloat(),w=t.readFloat(),b=t.readFloat(),C=t.readFloat(),U=t.readFloat(),L=t.readFloat(),I=t.readFloat();switch(t.readByte()){case wn:p.setStepped(M);break;case En:Xt(t,p,E++,M,0,x,A,m,w,1),Xt(t,p,E++,M,1,x,A,g,b,1),Xt(t,p,E++,M,2,x,A,v,C,1),Xt(t,p,E++,M,3,x,A,y,U,1),Xt(t,p,E++,M,4,x,A,_,L,1),Xt(t,p,E++,M,5,x,A,S,I,1)}x=A,m=w,g=b,v=C,y=U,_=L,S=I}i.push(p)}for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0),d=n.pathConstraints[u];for(let f=0,p=t.readInt(!0);f<p;f++){let x=t.readByte(),m=t.readInt(!0),g=t.readInt(!0);switch(x){case d0:i.push(Ne(t,new Ds(m,g,u),d.positionMode==Ke.Fixed?s:1));break;case f0:i.push(Ne(t,new Us(m,g,u),d.spacingMode==me.Length||d.spacingMode==me.Fixed?s:1));break;case p0:let v=new Ns(m,g,u),y=t.readFloat(),_=t.readFloat(),S=t.readFloat(),M=t.readFloat();for(let E=0,A=0,w=v.getFrameCount()-1;v.setFrame(E,y,_,S,M),E!=w;E++){let b=t.readFloat(),C=t.readFloat(),U=t.readFloat(),L=t.readFloat();switch(t.readByte()){case wn:v.setStepped(E);break;case En:Xt(t,v,A++,E,0,y,b,_,C,1),Xt(t,v,A++,E,1,y,b,S,U,1),Xt(t,v,A++,E,2,y,b,M,L,1)}y=b,_=C,S=U,M=L}i.push(v)}}}for(let c=0,h=t.readInt(!0);c<h;c++){let u=t.readInt(!0)-1;for(let d=0,f=t.readInt(!0);d<f;d++){let p=t.readByte(),x=t.readInt(!0);if(p==b0){let g=new Gs(x,u);for(let v=0;v<x;v++)g.setFrame(v,t.readFloat());i.push(g);continue}let m=t.readInt(!0);switch(p){case m0:i.push(Ne(t,new Fs(x,m,u),1));break;case g0:i.push(Ne(t,new Os(x,m,u),1));break;case x0:i.push(Ne(t,new Bs(x,m,u),1));break;case y0:i.push(Ne(t,new ks(x,m,u),1));break;case _0:i.push(Ne(t,new zs(x,m,u),1));break;case v0:i.push(Ne(t,new Vs(x,m,u),1));break;case M0:i.push(Ne(t,new Hs(x,m,u),1))}}}for(let c=0,h=t.readInt(!0);c<h;c++){let u=n.skins[t.readInt(!0)];for(let d=0,f=t.readInt(!0);d<f;d++){let p=t.readInt(!0);for(let x=0,m=t.readInt(!0);x<m;x++){let g=t.readStringRef();if(!g)throw new Error("attachmentName must not be null.");let v=u.getAttachment(p,g),y=t.readByte(),_=t.readInt(!0),S=_-1;switch(y){case h0:{let M=v,E=M.bones,A=M.vertices,w=E?A.length/3*2:A.length,b=t.readInt(!0),C=new Is(_,b,p,M),U=t.readFloat();for(let L=0,I=0;;L++){let D,N=t.readInt(!0);if(N==0)D=E?it.newFloatArray(w):A;else{D=it.newFloatArray(w);let V=t.readInt(!0);if(N+=V,s==1)for(let Z=V;Z<N;Z++)D[Z]=t.readFloat();else for(let Z=V;Z<N;Z++)D[Z]=t.readFloat()*s;if(!E)for(let Z=0,nt=D.length;Z<nt;Z++)D[Z]+=A[Z]}if(C.setFrame(L,U,D),L==S)break;let H=t.readFloat();switch(t.readByte()){case wn:C.setStepped(L);break;case En:Xt(t,C,I++,L,0,U,H,0,1,1)}U=H}i.push(C);break}case u0:{let M=new Ws(_,p,v);for(let E=0;E<_;E++){let A=t.readFloat(),w=t.readInt32();M.setFrame(E,A,Ta[w&15],w>>4,t.readFloat())}i.push(M);break}}}}}let l=t.readInt(!0);if(l>0){let c=new vn(l),h=n.slots.length;for(let u=0;u<l;u++){let d=t.readFloat(),f=t.readInt(!0),p=it.newArray(h,0);for(let v=h-1;v>=0;v--)p[v]=-1;let x=it.newArray(h-f,0),m=0,g=0;for(let v=0;v<f;v++){let y=t.readInt(!0);for(;m!=y;)x[g++]=m++;p[m+t.readInt(!0)]=m++}for(;m<h;)x[g++]=m++;for(let v=h-1;v>=0;v--)p[v]==-1&&(p[v]=x[--g]);c.setFrame(u,d,p)}i.push(c)}let o=t.readInt(!0);if(o>0){let c=new di(o);for(let h=0;h<o;h++){let u=t.readFloat(),d=n.events[t.readInt(!0)],f=new Zs(u,d);f.intValue=t.readInt(!1),f.floatValue=t.readFloat(),f.stringValue=t.readString(),f.stringValue==null&&(f.stringValue=d.stringValue),f.data.audioPath&&(f.volume=t.readFloat(),f.balance=t.readFloat()),c.setFrame(h,f)}i.push(c)}let a=0;for(let c=0,h=i.length;c<h;c++)a=Math.max(a,i[c].getDuration());return new ui(e,i,a)}},jl=class{strings;index;buffer;constructor(t,e=new Array,n=0,i=new DataView(t instanceof ArrayBuffer?t:t.buffer)){this.strings=e,this.index=n,this.buffer=i}readByte(){return this.buffer.getInt8(this.index++)}readUnsignedByte(){return this.buffer.getUint8(this.index++)}readShort(){let t=this.buffer.getInt16(this.index);return this.index+=2,t}readInt32(){let t=this.buffer.getInt32(this.index);return this.index+=4,t}readInt(t){let e=this.readByte(),n=e&127;return(e&128)!=0&&(e=this.readByte(),n|=(e&127)<<7,(e&128)!=0&&(e=this.readByte(),n|=(e&127)<<14,(e&128)!=0&&(e=this.readByte(),n|=(e&127)<<21,(e&128)!=0&&(e=this.readByte(),n|=(e&127)<<28)))),t?n:n>>>1^-(n&1)}readStringRef(){let t=this.readInt(!0);return t==0?null:this.strings[t-1]}readString(){let t=this.readInt(!0);switch(t){case 0:return null;case 1:return""}t--;let e="",n=0;for(let i=0;i<t;){let s=this.readUnsignedByte();switch(s>>4){case 12:case 13:e+=String.fromCharCode((s&31)<<6|this.readByte()&63),i+=2;break;case 14:e+=String.fromCharCode((s&15)<<12|(this.readByte()&63)<<6|this.readByte()&63),i+=3;break;default:e+=String.fromCharCode(s),i++}}return e}readFloat(){let t=this.buffer.getFloat32(this.index);return this.index+=4,t}readBoolean(){return this.readByte()!=0}},tc=class{parent;skinIndex;slotIndex;mesh;inheritTimeline;constructor(t,e,n,i,s){this.mesh=t,this.skinIndex=e,this.slotIndex=n,this.parent=i,this.inheritTimeline=s}},ec=class{bones;vertices;length;constructor(t=null,e=null,n=0){this.bones=t,this.vertices=e,this.length=n}},Zn;(function(r){r[r.Region=0]="Region",r[r.BoundingBox=1]="BoundingBox",r[r.Mesh=2]="Mesh",r[r.LinkedMesh=3]="LinkedMesh",r[r.Path=4]="Path",r[r.Point=5]="Point",r[r.Clipping=6]="Clipping"})(Zn||(Zn={}));function Ne(r,t,e){let n=r.readFloat(),i=r.readFloat()*e;for(let s=0,l=0,o=t.getFrameCount()-1;t.setFrame(s,n,i),s!=o;s++){let a=r.readFloat(),c=r.readFloat()*e;switch(r.readByte()){case wn:t.setStepped(s);break;case En:Xt(r,t,l++,s,0,n,a,i,c,e)}n=a,i=c}return t}function Ql(r,t,e){let n=r.readFloat(),i=r.readFloat()*e,s=r.readFloat()*e;for(let l=0,o=0,a=t.getFrameCount()-1;t.setFrame(l,n,i,s),l!=a;l++){let c=r.readFloat(),h=r.readFloat()*e,u=r.readFloat()*e;switch(r.readByte()){case wn:t.setStepped(l);break;case En:Xt(r,t,o++,l,0,n,c,i,h,e),Xt(r,t,o++,l,1,n,c,s,u,e)}n=c,i=h,s=u}return t}function Xt(r,t,e,n,i,s,l,o,a,c){t.setBezier(e,n,i,s,o,r.readFloat(),r.readFloat()*c,r.readFloat(),r.readFloat()*c,l,a)}var qg=0,Zg=1,$g=2,Jg=3,Kg=4,Qg=5,jg=6,t0=7,e0=8,n0=9,i0=10,s0=0,r0=1,a0=2,o0=3,l0=4,c0=5,h0=0,u0=1,d0=0,f0=1,p0=2,m0=0,g0=1,x0=2,y0=4,_0=5,v0=6,M0=7,b0=8;var wn=1,En=2;var za=class r{convexPolygons=new Array;convexPolygonsIndices=new Array;indicesArray=new Array;isConcaveArray=new Array;triangles=new Array;polygonPool=new hi(()=>new Array);polygonIndicesPool=new hi(()=>new Array);triangulate(t){let e=t,n=t.length>>1,i=this.indicesArray;i.length=0;for(let o=0;o<n;o++)i[o]=o;let s=this.isConcaveArray;s.length=0;for(let o=0,a=n;o<a;++o)s[o]=r.isConcave(o,n,e,i);let l=this.triangles;for(l.length=0;n>3;){let o=n-1,a=0,c=1;for(;;){t:if(!s[a]){let d=i[o]<<1,f=i[a]<<1,p=i[c]<<1,x=e[d],m=e[d+1],g=e[f],v=e[f+1],y=e[p],_=e[p+1];for(let S=(c+1)%n;S!=o;S=(S+1)%n){if(!s[S])continue;let M=i[S]<<1,E=e[M],A=e[M+1];if(r.positiveArea(y,_,x,m,E,A)&&r.positiveArea(x,m,g,v,E,A)&&r.positiveArea(g,v,y,_,E,A))break t}break}if(c==0){do{if(!s[a])break;a--}while(a>0);break}o=a,a=c,c=(c+1)%n}l.push(i[(n+a-1)%n]),l.push(i[a]),l.push(i[(a+1)%n]),i.splice(a,1),s.splice(a,1),n--;let h=(n+a-1)%n,u=a==n?0:a;s[h]=r.isConcave(h,n,e,i),s[u]=r.isConcave(u,n,e,i)}return n==3&&(l.push(i[2]),l.push(i[0]),l.push(i[1])),l}decompose(t,e){let n=t,i=this.convexPolygons;this.polygonPool.freeAll(i),i.length=0;let s=this.convexPolygonsIndices;this.polygonIndicesPool.freeAll(s),s.length=0;let l=this.polygonIndicesPool.obtain();l.length=0;let o=this.polygonPool.obtain();o.length=0;let a=-1,c=0;for(let h=0,u=e.length;h<u;h+=3){let d=e[h]<<1,f=e[h+1]<<1,p=e[h+2]<<1,x=n[d],m=n[d+1],g=n[f],v=n[f+1],y=n[p],_=n[p+1],S=!1;if(a==d){let M=o.length-4,E=r.winding(o[M],o[M+1],o[M+2],o[M+3],y,_),A=r.winding(y,_,o[0],o[1],o[2],o[3]);E==c&&A==c&&(o.push(y),o.push(_),l.push(p),S=!0)}S||(o.length>0?(i.push(o),s.push(l)):(this.polygonPool.free(o),this.polygonIndicesPool.free(l)),o=this.polygonPool.obtain(),o.length=0,o.push(x),o.push(m),o.push(g),o.push(v),o.push(y),o.push(_),l=this.polygonIndicesPool.obtain(),l.length=0,l.push(d),l.push(f),l.push(p),c=r.winding(x,m,g,v,y,_),a=d)}o.length>0&&(i.push(o),s.push(l));for(let h=0,u=i.length;h<u;h++){if(l=s[h],l.length==0)continue;let d=l[0],f=l[l.length-1];o=i[h];let p=o.length-4,x=o[p],m=o[p+1],g=o[p+2],v=o[p+3],y=o[0],_=o[1],S=o[2],M=o[3],E=r.winding(x,m,g,v,y,_);for(let A=0;A<u;A++){if(A==h)continue;let w=s[A];if(w.length!=3)continue;let b=w[0],C=w[1],U=w[2],L=i[A],I=L[L.length-2],D=L[L.length-1];if(b!=d||C!=f)continue;let N=r.winding(x,m,g,v,I,D),H=r.winding(I,D,y,_,S,M);N==E&&H==E&&(L.length=0,w.length=0,o.push(I),o.push(D),l.push(U),x=g,m=v,g=I,v=D,A=0)}}for(let h=i.length-1;h>=0;h--)o=i[h],o.length==0&&(i.splice(h,1),this.polygonPool.free(o),l=s[h],s.splice(h,1),this.polygonIndicesPool.free(l));return i}static isConcave(t,e,n,i){let s=i[(e+t-1)%e]<<1,l=i[t]<<1,o=i[(t+1)%e]<<1;return!this.positiveArea(n[s],n[s+1],n[l],n[l+1],n[o],n[o+1])}static positiveArea(t,e,n,i,s,l){return t*(l-i)+n*(e-l)+s*(i-e)>=0}static winding(t,e,n,i,s,l){let o=n-t,a=i-e;return s*a-l*o+o*e-t*a>=0?1:-1}};var Va=class r{triangulator=new za;clippingPolygon=new Array;clipOutput=new Array;clippedVertices=new Array;clippedUVs=new Array;clippedTriangles=new Array;scratch=new Array;clipAttachment=null;clippingPolygons=null;clipStart(t,e){if(this.clipAttachment)return 0;this.clipAttachment=e;let n=e.worldVerticesLength,i=it.setArraySize(this.clippingPolygon,n);e.computeWorldVertices(t,0,n,i,0,2);let s=this.clippingPolygon;r.makeClockwise(s);let l=this.clippingPolygons=this.triangulator.decompose(s,this.triangulator.triangulate(s));for(let o=0,a=l.length;o<a;o++){let c=l[o];r.makeClockwise(c),c.push(c[0]),c.push(c[1])}return l.length}clipEndWithSlot(t){this.clipAttachment&&this.clipAttachment.endSlot==t.data&&this.clipEnd()}clipEnd(){this.clipAttachment&&(this.clipAttachment=null,this.clippingPolygons=null,this.clippedVertices.length=0,this.clippedTriangles.length=0,this.clippingPolygon.length=0)}isClipping(){return this.clipAttachment!=null}clipTriangles(t,e,n,i,s,l,o,a){let c,h,u,d,f,p;typeof e=="number"?(c=n,h=i,u=s,d=l,f=o,p=a):(c=e,h=n,u=i,d=s,f=l,p=o),u&&d&&f&&typeof p=="boolean"?this.clipTrianglesRender(t,c,h,u,d,f,p):this.clipTrianglesNoRender(t,c,h)}clipTrianglesNoRender(t,e,n){let i=this.clipOutput,s=this.clippedVertices,l=this.clippedTriangles,o=this.clippingPolygons,a=o.length,c=0;s.length=0,l.length=0;for(let h=0;h<n;h+=3){let u=e[h]<<1,d=t[u],f=t[u+1];u=e[h+1]<<1;let p=t[u],x=t[u+1];u=e[h+2]<<1;let m=t[u],g=t[u+1];for(let v=0;v<a;v++){let y=s.length;if(this.clip(d,f,p,x,m,g,o[v],i)){let _=i.length;if(_==0)continue;let S=_>>1,M=this.clipOutput,E=it.setArraySize(s,y+S*2);for(let w=0;w<_;w+=2,y+=2){let b=M[w],C=M[w+1];E[y]=b,E[y+1]=C}y=l.length;let A=it.setArraySize(l,y+3*(S-2));S--;for(let w=1;w<S;w++,y+=3)A[y]=c,A[y+1]=c+w,A[y+2]=c+w+1;c+=S+1}else{let _=it.setArraySize(s,y+6);_[y]=d,_[y+1]=f,_[y+2]=p,_[y+3]=x,_[y+4]=m,_[y+5]=g,y=l.length;let S=it.setArraySize(l,y+3);S[y]=c,S[y+1]=c+1,S[y+2]=c+2,c+=3;break}}}}clipTrianglesRender(t,e,n,i,s,l,o){let a=this.clipOutput,c=this.clippedVertices,h=this.clippedTriangles,u=this.clippingPolygons,d=u.length,f=o?12:8,p=0;c.length=0,h.length=0;for(let x=0;x<n;x+=3){let m=e[x]<<1,g=t[m],v=t[m+1],y=i[m],_=i[m+1];m=e[x+1]<<1;let S=t[m],M=t[m+1],E=i[m],A=i[m+1];m=e[x+2]<<1;let w=t[m],b=t[m+1],C=i[m],U=i[m+1];for(let L=0;L<d;L++){let I=c.length;if(this.clip(g,v,S,M,w,b,u[L],a)){let D=a.length;if(D==0)continue;let N=M-b,H=w-S,V=g-w,Z=b-v,nt=1/(N*V+H*(v-b)),at=D>>1,yt=this.clipOutput,rt=it.setArraySize(c,I+at*f);for(let J=0;J<D;J+=2,I+=f){let ft=yt[J],ot=yt[J+1];rt[I]=ft,rt[I+1]=ot,rt[I+2]=s.r,rt[I+3]=s.g,rt[I+4]=s.b,rt[I+5]=s.a;let gt=ft-w,bt=ot-b,Rt=(N*gt+H*bt)*nt,Kt=(Z*gt+V*bt)*nt,Ht=1-Rt-Kt;rt[I+6]=y*Rt+E*Kt+C*Ht,rt[I+7]=_*Rt+A*Kt+U*Ht,o&&(rt[I+8]=l.r,rt[I+9]=l.g,rt[I+10]=l.b,rt[I+11]=l.a)}I=h.length;let G=it.setArraySize(h,I+3*(at-2));at--;for(let J=1;J<at;J++,I+=3)G[I]=p,G[I+1]=p+J,G[I+2]=p+J+1;p+=at+1}else{let D=it.setArraySize(c,I+3*f);D[I]=g,D[I+1]=v,D[I+2]=s.r,D[I+3]=s.g,D[I+4]=s.b,D[I+5]=s.a,o?(D[I+6]=y,D[I+7]=_,D[I+8]=l.r,D[I+9]=l.g,D[I+10]=l.b,D[I+11]=l.a,D[I+12]=S,D[I+13]=M,D[I+14]=s.r,D[I+15]=s.g,D[I+16]=s.b,D[I+17]=s.a,D[I+18]=E,D[I+19]=A,D[I+20]=l.r,D[I+21]=l.g,D[I+22]=l.b,D[I+23]=l.a,D[I+24]=w,D[I+25]=b,D[I+26]=s.r,D[I+27]=s.g,D[I+28]=s.b,D[I+29]=s.a,D[I+30]=C,D[I+31]=U,D[I+32]=l.r,D[I+33]=l.g,D[I+34]=l.b,D[I+35]=l.a):(D[I+6]=y,D[I+7]=_,D[I+8]=S,D[I+9]=M,D[I+10]=s.r,D[I+11]=s.g,D[I+12]=s.b,D[I+13]=s.a,D[I+14]=E,D[I+15]=A,D[I+16]=w,D[I+17]=b,D[I+18]=s.r,D[I+19]=s.g,D[I+20]=s.b,D[I+21]=s.a,D[I+22]=C,D[I+23]=U),I=h.length;let N=it.setArraySize(h,I+3);N[I]=p,N[I+1]=p+1,N[I+2]=p+2,p+=3;break}}}}clipTrianglesUnpacked(t,e,n,i){let s=this.clipOutput,l=this.clippedVertices,o=this.clippedUVs,a=this.clippedTriangles,c=this.clippingPolygons,h=c.length,u=0;l.length=0,o.length=0,a.length=0;for(let d=0;d<n;d+=3){let f=e[d]<<1,p=t[f],x=t[f+1],m=i[f],g=i[f+1];f=e[d+1]<<1;let v=t[f],y=t[f+1],_=i[f],S=i[f+1];f=e[d+2]<<1;let M=t[f],E=t[f+1],A=i[f],w=i[f+1];for(let b=0;b<h;b++){let C=l.length;if(this.clip(p,x,v,y,M,E,c[b],s)){let U=s.length;if(U==0)continue;let L=y-E,I=M-v,D=p-M,N=E-x,H=1/(L*D+I*(x-E)),V=U>>1,Z=this.clipOutput,nt=it.setArraySize(l,C+V*2),at=it.setArraySize(o,C+V*2);for(let rt=0;rt<U;rt+=2,C+=2){let G=Z[rt],J=Z[rt+1];nt[C]=G,nt[C+1]=J;let ft=G-M,ot=J-E,gt=(L*ft+I*ot)*H,bt=(N*ft+D*ot)*H,Rt=1-gt-bt;at[C]=m*gt+_*bt+A*Rt,at[C+1]=g*gt+S*bt+w*Rt}C=a.length;let yt=it.setArraySize(a,C+3*(V-2));V--;for(let rt=1;rt<V;rt++,C+=3)yt[C]=u,yt[C+1]=u+rt,yt[C+2]=u+rt+1;u+=V+1}else{let U=it.setArraySize(l,C+6);U[C]=p,U[C+1]=x,U[C+2]=v,U[C+3]=y,U[C+4]=M,U[C+5]=E;let L=it.setArraySize(o,C+6);L[C]=m,L[C+1]=g,L[C+2]=_,L[C+3]=S,L[C+4]=A,L[C+5]=w,C=a.length;let I=it.setArraySize(a,C+3);I[C]=u,I[C+1]=u+1,I[C+2]=u+2,u+=3;break}}}}clip(t,e,n,i,s,l,o,a){let c=a,h=!1,u;o.length%4>=2?(u=a,a=this.scratch):u=this.scratch,u.length=0,u.push(t),u.push(e),u.push(n),u.push(i),u.push(s),u.push(l),u.push(t),u.push(e),a.length=0;let d=o.length-4,f=o;for(let p=0;;p+=2){let x=f[p],m=f[p+1],g=x-f[p+2],v=m-f[p+3],y=a.length,_=u;for(let M=0,E=u.length-2;M<E;){let A=_[M],w=_[M+1];M+=2;let b=_[M],C=_[M+1],U=v*(x-b)>g*(m-C),L=v*(x-A)-g*(m-w);if(L>0){if(U){a.push(b),a.push(C);continue}let I=b-A,D=C-w,N=L/(I*v-D*g);if(N>=0&&N<=1)a.push(A+I*N),a.push(w+D*N);else{a.push(b),a.push(C);continue}}else if(U){let I=b-A,D=C-w,N=L/(I*v-D*g);if(N>=0&&N<=1)a.push(A+I*N),a.push(w+D*N),a.push(b),a.push(C);else{a.push(b),a.push(C);continue}}h=!0}if(y==a.length)return c.length=0,!0;if(a.push(a[0]),a.push(a[1]),p==d)break;let S=a;a=u,a.length=0,u=S}if(c!=a){c.length=0;for(let p=0,x=a.length-2;p<x;p++)c[p]=a[p]}else c.length=c.length-2;return h}static makeClockwise(t){let e=t,n=t.length,i=e[n-2]*e[1]-e[0]*e[n-1],s=0,l=0,o=0,a=0;for(let c=0,h=n-3;c<h;c+=2)s=e[c],l=e[c+1],o=e[c+2],a=e[c+3],i+=s*a-o*l;if(!(i<0))for(let c=0,h=n-2,u=n>>1;c<u;c+=2){let d=e[c],f=e[c+1],p=h-c;e[c]=e[p],e[c+1]=e[p+1],e[p]=d,e[p+1]=f}}};var Ha=class{attachmentLoader;scale=1;linkedMeshes=new Array;constructor(t){this.attachmentLoader=t}readSkeletonData(t){let e=this.scale,n=new js,i=typeof t=="string"?JSON.parse(t):t,s=i.skeleton;if(s&&(n.hash=s.hash,n.version=s.spine,n.x=s.x,n.y=s.y,n.width=s.width,n.height=s.height,n.referenceScale=F(s,"referenceScale",100)*e,n.fps=s.fps,n.imagesPath=s.images??null,n.audioPath=s.audio??null),i.bones)for(let l=0;l<i.bones.length;l++){let o=i.bones[l],a=null,c=F(o,"parent",null);c&&(a=n.findBone(c));let h=new qs(n.bones.length,o.name,a);h.length=F(o,"length",0)*e,h.x=F(o,"x",0)*e,h.y=F(o,"y",0)*e,h.rotation=F(o,"rotation",0),h.scaleX=F(o,"scaleX",1),h.scaleY=F(o,"scaleY",1),h.shearX=F(o,"shearX",0),h.shearY=F(o,"shearY",0),h.inherit=it.enumValue(ce,F(o,"inherit","Normal")),h.skinRequired=F(o,"skin",!1);let u=F(o,"color",null);u&&h.color.setFromString(u),n.bones.push(h)}if(i.slots)for(let l=0;l<i.slots.length;l++){let o=i.slots[l],a=o.name,c=n.findBone(o.bone);if(!c)throw new Error(`Couldn't find bone ${o.bone} for slot ${a}`);let h=new tr(n.slots.length,a,c),u=F(o,"color",null);u&&h.color.setFromString(u);let d=F(o,"dark",null);d&&(h.darkColor=St.fromString(d)),h.attachmentName=F(o,"attachment",null),h.blendMode=it.enumValue(Sn,F(o,"blend","normal")),h.visible=F(o,"visible",!0),n.slots.push(h)}if(i.ik)for(let l=0;l<i.ik.length;l++){let o=i.ik[l],a=new Js(o.name);a.order=F(o,"order",0),a.skinRequired=F(o,"skin",!1);for(let h=0;h<o.bones.length;h++){let u=n.findBone(o.bones[h]);if(!u)throw new Error(`Couldn't find bone ${o.bones[h]} for IK constraint ${o.name}.`);a.bones.push(u)}let c=n.findBone(o.target);if(!c)throw new Error(`Couldn't find target bone ${o.target} for IK constraint ${o.name}.`);a.target=c,a.mix=F(o,"mix",1),a.softness=F(o,"softness",0)*e,a.bendDirection=F(o,"bendPositive",!0)?1:-1,a.compress=F(o,"compress",!1),a.stretch=F(o,"stretch",!1),a.uniform=F(o,"uniform",!1),n.ikConstraints.push(a)}if(i.transform)for(let l=0;l<i.transform.length;l++){let o=i.transform[l],a=new er(o.name);a.order=F(o,"order",0),a.skinRequired=F(o,"skin",!1);for(let u=0;u<o.bones.length;u++){let d=o.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for transform constraint ${o.name}.`);a.bones.push(f)}let c=o.target,h=n.findBone(c);if(!h)throw new Error(`Couldn't find target bone ${c} for transform constraint ${o.name}.`);a.target=h,a.local=F(o,"local",!1),a.relative=F(o,"relative",!1),a.offsetRotation=F(o,"rotation",0),a.offsetX=F(o,"x",0)*e,a.offsetY=F(o,"y",0)*e,a.offsetScaleX=F(o,"scaleX",0),a.offsetScaleY=F(o,"scaleY",0),a.offsetShearY=F(o,"shearY",0),a.mixRotate=F(o,"mixRotate",1),a.mixX=F(o,"mixX",1),a.mixY=F(o,"mixY",a.mixX),a.mixScaleX=F(o,"mixScaleX",1),a.mixScaleY=F(o,"mixScaleY",a.mixScaleX),a.mixShearY=F(o,"mixShearY",1),n.transformConstraints.push(a)}if(i.path)for(let l=0;l<i.path.length;l++){let o=i.path[l],a=new Ks(o.name);a.order=F(o,"order",0),a.skinRequired=F(o,"skin",!1);for(let u=0;u<o.bones.length;u++){let d=o.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for path constraint ${o.name}.`);a.bones.push(f)}let c=o.target,h=n.findSlot(c);if(!h)throw new Error(`Couldn't find target slot ${c} for path constraint ${o.name}.`);a.target=h,a.positionMode=it.enumValue(Ke,F(o,"positionMode","Percent")),a.spacingMode=it.enumValue(me,F(o,"spacingMode","Length")),a.rotateMode=it.enumValue(qn,F(o,"rotateMode","Tangent")),a.offsetRotation=F(o,"rotation",0),a.position=F(o,"position",0),a.positionMode==Ke.Fixed&&(a.position*=e),a.spacing=F(o,"spacing",0),(a.spacingMode==me.Length||a.spacingMode==me.Fixed)&&(a.spacing*=e),a.mixRotate=F(o,"mixRotate",1),a.mixX=F(o,"mixX",1),a.mixY=F(o,"mixY",a.mixX),n.pathConstraints.push(a)}if(i.physics)for(let l=0;l<i.physics.length;l++){let o=i.physics[l],a=new Qs(o.name);a.order=F(o,"order",0),a.skinRequired=F(o,"skin",!1);let c=o.bone,h=n.findBone(c);if(h==null)throw new Error("Physics bone not found: "+c);a.bone=h,a.x=F(o,"x",0),a.y=F(o,"y",0),a.rotate=F(o,"rotate",0),a.scaleX=F(o,"scaleX",0),a.shearX=F(o,"shearX",0),a.limit=F(o,"limit",5e3)*e,a.step=1/F(o,"fps",60),a.inertia=F(o,"inertia",1),a.strength=F(o,"strength",100),a.damping=F(o,"damping",1),a.massInverse=1/F(o,"mass",1),a.wind=F(o,"wind",0),a.gravity=F(o,"gravity",0),a.mix=F(o,"mix",1),a.inertiaGlobal=F(o,"inertiaGlobal",!1),a.strengthGlobal=F(o,"strengthGlobal",!1),a.dampingGlobal=F(o,"dampingGlobal",!1),a.massGlobal=F(o,"massGlobal",!1),a.windGlobal=F(o,"windGlobal",!1),a.gravityGlobal=F(o,"gravityGlobal",!1),a.mixGlobal=F(o,"mixGlobal",!1),n.physicsConstraints.push(a)}if(i.skins)for(let l=0;l<i.skins.length;l++){let o=i.skins[l],a=new Ni(o.name);if(o.bones)for(let c=0;c<o.bones.length;c++){let h=o.bones[c],u=n.findBone(h);if(!u)throw new Error(`Couldn't find bone ${h} for skin ${o.name}.`);a.bones.push(u)}if(o.ik)for(let c=0;c<o.ik.length;c++){let h=o.ik[c],u=n.findIkConstraint(h);if(!u)throw new Error(`Couldn't find IK constraint ${h} for skin ${o.name}.`);a.constraints.push(u)}if(o.transform)for(let c=0;c<o.transform.length;c++){let h=o.transform[c],u=n.findTransformConstraint(h);if(!u)throw new Error(`Couldn't find transform constraint ${h} for skin ${o.name}.`);a.constraints.push(u)}if(o.path)for(let c=0;c<o.path.length;c++){let h=o.path[c],u=n.findPathConstraint(h);if(!u)throw new Error(`Couldn't find path constraint ${h} for skin ${o.name}.`);a.constraints.push(u)}if(o.physics)for(let c=0;c<o.physics.length;c++){let h=o.physics[c],u=n.findPhysicsConstraint(h);if(!u)throw new Error(`Couldn't find physics constraint ${h} for skin ${o.name}.`);a.constraints.push(u)}for(let c in o.attachments){let h=n.findSlot(c);if(!h)throw new Error(`Couldn't find slot ${c} for skin ${o.name}.`);let u=o.attachments[c];for(let d in u){let f=this.readAttachment(u[d],a,h.index,d,n);f&&a.setAttachment(h.index,d,f)}}n.skins.push(a),a.name=="default"&&(n.defaultSkin=a)}for(let l=0,o=this.linkedMeshes.length;l<o;l++){let a=this.linkedMeshes[l],c=a.skin?n.findSkin(a.skin):n.defaultSkin;if(!c)throw new Error(`Skin not found: ${a.skin}`);let h=c.getAttachment(a.slotIndex,a.parent);if(!h)throw new Error(`Parent mesh not found: ${a.parent}`);a.mesh.timelineAttachment=a.inheritTimeline?h:a.mesh,a.mesh.setParentMesh(h),a.mesh.region!=null&&a.mesh.updateRegion()}if(this.linkedMeshes.length=0,i.events)for(let l in i.events){let o=i.events[l],a=new $s(l);a.intValue=F(o,"int",0),a.floatValue=F(o,"float",0),a.stringValue=F(o,"string",""),a.audioPath=F(o,"audio",null),a.audioPath&&(a.volume=F(o,"volume",1),a.balance=F(o,"balance",0)),n.events.push(a)}if(i.animations)for(let l in i.animations){let o=i.animations[l];this.readAnimation(o,l,n)}return n}readAttachment(t,e,n,i,s){let l=this.scale;switch(i=F(t,"name",i),F(t,"type","region")){case"region":{let o=F(t,"path",i),a=this.readSequence(F(t,"sequence",null)),c=this.attachmentLoader.newRegionAttachment(e,i,o,a);if(!c)return null;c.path=o,c.x=F(t,"x",0)*l,c.y=F(t,"y",0)*l,c.scaleX=F(t,"scaleX",1),c.scaleY=F(t,"scaleY",1),c.rotation=F(t,"rotation",0),c.width=t.width*l,c.height=t.height*l,c.sequence=a;let h=F(t,"color",null);return h&&c.color.setFromString(h),c.region!=null&&c.updateRegion(),c}case"boundingbox":{let o=this.attachmentLoader.newBoundingBoxAttachment(e,i);if(!o)return null;this.readVertices(t,o,t.vertexCount<<1);let a=F(t,"color",null);return a&&o.color.setFromString(a),o}case"mesh":case"linkedmesh":{let o=F(t,"path",i),a=this.readSequence(F(t,"sequence",null)),c=this.attachmentLoader.newMeshAttachment(e,i,o,a);if(!c)return null;c.path=o;let h=F(t,"color",null);h&&c.color.setFromString(h),c.width=F(t,"width",0)*l,c.height=F(t,"height",0)*l,c.sequence=a;let u=F(t,"parent",null);if(u)return this.linkedMeshes.push(new ic(c,F(t,"skin",null),n,u,F(t,"timelines",!0))),c;let d=t.uvs;return this.readVertices(t,c,d.length),c.triangles=t.triangles,c.regionUVs=d,c.region!=null&&c.updateRegion(),c.edges=F(t,"edges",null),c.hullLength=F(t,"hull",0)*2,c}case"path":{let o=this.attachmentLoader.newPathAttachment(e,i);if(!o)return null;o.closed=F(t,"closed",!1),o.constantSpeed=F(t,"constantSpeed",!0);let a=t.vertexCount;this.readVertices(t,o,a<<1);let c=it.newArray(a/3,0);for(let u=0;u<t.lengths.length;u++)c[u]=t.lengths[u]*l;o.lengths=c;let h=F(t,"color",null);return h&&o.color.setFromString(h),o}case"point":{let o=this.attachmentLoader.newPointAttachment(e,i);if(!o)return null;o.x=F(t,"x",0)*l,o.y=F(t,"y",0)*l,o.rotation=F(t,"rotation",0);let a=F(t,"color",null);return a&&o.color.setFromString(a),o}case"clipping":{let o=this.attachmentLoader.newClippingAttachment(e,i);if(!o)return null;let a=F(t,"end",null);a&&(o.endSlot=s.findSlot(a));let c=t.vertexCount;this.readVertices(t,o,c<<1);let h=F(t,"color",null);return h&&o.color.setFromString(h),o}}return null}readSequence(t){if(t==null)return null;let e=new ps(F(t,"count",0));return e.start=F(t,"start",1),e.digits=F(t,"digits",0),e.setupIndex=F(t,"setup",0),e}readVertices(t,e,n){let i=this.scale;e.worldVerticesLength=n;let s=t.vertices;if(n==s.length){let a=it.toFloatArray(s);if(i!=1)for(let c=0,h=s.length;c<h;c++)a[c]*=i;e.vertices=a;return}let l=new Array,o=new Array;for(let a=0,c=s.length;a<c;){let h=s[a++];o.push(h);for(let u=a+h*4;a<u;a+=4)o.push(s[a]),l.push(s[a+1]*i),l.push(s[a+2]*i),l.push(s[a+3])}e.bones=o,e.vertices=it.toFloatArray(l)}readAnimation(t,e,n){let i=this.scale,s=new Array;if(t.slots)for(let o in t.slots){let a=t.slots[o],c=n.findSlot(o);if(!c)throw new Error("Slot not found: "+o);let h=c.index;for(let u in a){let d=a[u];if(!d)continue;let f=d.length;if(u=="attachment"){let p=new dn(f,h);for(let x=0;x<f;x++){let m=d[x];p.setFrame(x,F(m,"time",0),F(m,"name",null))}s.push(p)}else if(u=="rgba"){let p=new Es(f,f<<2,h),x=d[0],m=F(x,"time",0),g=St.fromString(x.color);for(let v=0,y=0;;v++){p.setFrame(v,m,g.r,g.g,g.b,g.a);let _=d[v+1];if(!_){p.shrink(y);break}let S=F(_,"time",0),M=St.fromString(_.color),E=x.curve;E&&(y=Yt(E,p,y,v,0,m,S,g.r,M.r,1),y=Yt(E,p,y,v,1,m,S,g.g,M.g,1),y=Yt(E,p,y,v,2,m,S,g.b,M.b,1),y=Yt(E,p,y,v,3,m,S,g.a,M.a,1)),m=S,g=M,x=_}s.push(p)}else if(u=="rgb"){let p=new As(f,f*3,h),x=d[0],m=F(x,"time",0),g=St.fromString(x.color);for(let v=0,y=0;;v++){p.setFrame(v,m,g.r,g.g,g.b);let _=d[v+1];if(!_){p.shrink(y);break}let S=F(_,"time",0),M=St.fromString(_.color),E=x.curve;E&&(y=Yt(E,p,y,v,0,m,S,g.r,M.r,1),y=Yt(E,p,y,v,1,m,S,g.g,M.g,1),y=Yt(E,p,y,v,2,m,S,g.b,M.b,1)),m=S,g=M,x=_}s.push(p)}else if(u=="alpha")s.push(pn(d,new Ts(f,f,h),0,1));else if(u=="rgba2"){let p=new Cs(f,f*7,h),x=d[0],m=F(x,"time",0),g=St.fromString(x.light),v=St.fromString(x.dark);for(let y=0,_=0;;y++){p.setFrame(y,m,g.r,g.g,g.b,g.a,v.r,v.g,v.b);let S=d[y+1];if(!S){p.shrink(_);break}let M=F(S,"time",0),E=St.fromString(S.light),A=St.fromString(S.dark),w=x.curve;w&&(_=Yt(w,p,_,y,0,m,M,g.r,E.r,1),_=Yt(w,p,_,y,1,m,M,g.g,E.g,1),_=Yt(w,p,_,y,2,m,M,g.b,E.b,1),_=Yt(w,p,_,y,3,m,M,g.a,E.a,1),_=Yt(w,p,_,y,4,m,M,v.r,A.r,1),_=Yt(w,p,_,y,5,m,M,v.g,A.g,1),_=Yt(w,p,_,y,6,m,M,v.b,A.b,1)),m=M,g=E,v=A,x=S}s.push(p)}else if(u=="rgb2"){let p=new Rs(f,f*6,h),x=d[0],m=F(x,"time",0),g=St.fromString(x.light),v=St.fromString(x.dark);for(let y=0,_=0;;y++){p.setFrame(y,m,g.r,g.g,g.b,v.r,v.g,v.b);let S=d[y+1];if(!S){p.shrink(_);break}let M=F(S,"time",0),E=St.fromString(S.light),A=St.fromString(S.dark),w=x.curve;w&&(_=Yt(w,p,_,y,0,m,M,g.r,E.r,1),_=Yt(w,p,_,y,1,m,M,g.g,E.g,1),_=Yt(w,p,_,y,2,m,M,g.b,E.b,1),_=Yt(w,p,_,y,3,m,M,v.r,A.r,1),_=Yt(w,p,_,y,4,m,M,v.g,A.g,1),_=Yt(w,p,_,y,5,m,M,v.b,A.b,1)),m=M,g=E,v=A,x=S}s.push(p)}}}if(t.bones)for(let o in t.bones){let a=t.bones[o],c=n.findBone(o);if(!c)throw new Error("Bone not found: "+o);let h=c.index;for(let u in a){let d=a[u],f=d.length;if(f!=0){if(u==="rotate")s.push(pn(d,new Wn(f,f,h),0,1));else if(u==="translate"){let p=new ms(f,f<<1,h);s.push(nc(d,p,"x","y",0,i))}else if(u==="translatex"){let p=new gs(f,f,h);s.push(pn(d,p,0,i))}else if(u==="translatey"){let p=new xs(f,f,h);s.push(pn(d,p,0,i))}else if(u==="scale"){let p=new ys(f,f<<1,h);s.push(nc(d,p,"x","y",1,1))}else if(u==="scalex"){let p=new _s(f,f,h);s.push(pn(d,p,1,1))}else if(u==="scaley"){let p=new vs(f,f,h);s.push(pn(d,p,1,1))}else if(u==="shear"){let p=new Ms(f,f<<1,h);s.push(nc(d,p,"x","y",0,1))}else if(u==="shearx"){let p=new bs(f,f,h);s.push(pn(d,p,0,1))}else if(u==="sheary"){let p=new Ss(f,f,h);s.push(pn(d,p,0,1))}else if(u==="inherit"){let p=new ws(f,c.index);for(let x=0;x<d.length;x++){let m=d[x];p.setFrame(x,F(m,"time",0),it.enumValue(ce,F(m,"inherit","Normal")))}s.push(p)}}}}if(t.ik)for(let o in t.ik){let a=t.ik[o],c=a[0];if(!c)continue;let h=n.findIkConstraint(o);if(!h)throw new Error("IK Constraint not found: "+o);let u=n.ikConstraints.indexOf(h),d=new Ps(a.length,a.length<<1,u),f=F(c,"time",0),p=F(c,"mix",1),x=F(c,"softness",0)*i;for(let m=0,g=0;;m++){d.setFrame(m,f,p,x,F(c,"bendPositive",!0)?1:-1,F(c,"compress",!1),F(c,"stretch",!1));let v=a[m+1];if(!v){d.shrink(g);break}let y=F(v,"time",0),_=F(v,"mix",1),S=F(v,"softness",0)*i,M=c.curve;M&&(g=Yt(M,d,g,m,0,f,y,p,_,1),g=Yt(M,d,g,m,1,f,y,x,S,i)),f=y,p=_,x=S,c=v}s.push(d)}if(t.transform)for(let o in t.transform){let a=t.transform[o],c=a[0];if(!c)continue;let h=n.findTransformConstraint(o);if(!h)throw new Error("Transform constraint not found: "+o);let u=n.transformConstraints.indexOf(h),d=new Ls(a.length,a.length*6,u),f=F(c,"time",0),p=F(c,"mixRotate",1),x=F(c,"mixX",1),m=F(c,"mixY",x),g=F(c,"mixScaleX",1),v=F(c,"mixScaleY",g),y=F(c,"mixShearY",1);for(let _=0,S=0;;_++){d.setFrame(_,f,p,x,m,g,v,y);let M=a[_+1];if(!M){d.shrink(S);break}let E=F(M,"time",0),A=F(M,"mixRotate",1),w=F(M,"mixX",1),b=F(M,"mixY",w),C=F(M,"mixScaleX",1),U=F(M,"mixScaleY",C),L=F(M,"mixShearY",1),I=c.curve;I&&(S=Yt(I,d,S,_,0,f,E,p,A,1),S=Yt(I,d,S,_,1,f,E,x,w,1),S=Yt(I,d,S,_,2,f,E,m,b,1),S=Yt(I,d,S,_,3,f,E,g,C,1),S=Yt(I,d,S,_,4,f,E,v,U,1),S=Yt(I,d,S,_,5,f,E,y,L,1)),f=E,p=A,x=w,m=b,g=C,v=U,y=L,c=M}s.push(d)}if(t.path)for(let o in t.path){let a=t.path[o],c=n.findPathConstraint(o);if(!c)throw new Error("Path constraint not found: "+o);let h=n.pathConstraints.indexOf(c);for(let u in a){let d=a[u],f=d[0];if(!f)continue;let p=d.length;if(u==="position"){let x=new Ds(p,p,h);s.push(pn(d,x,0,c.positionMode==Ke.Fixed?i:1))}else if(u==="spacing"){let x=new Us(p,p,h);s.push(pn(d,x,0,c.spacingMode==me.Length||c.spacingMode==me.Fixed?i:1))}else if(u==="mix"){let x=new Ns(p,p*3,h),m=F(f,"time",0),g=F(f,"mixRotate",1),v=F(f,"mixX",1),y=F(f,"mixY",v);for(let _=0,S=0;;_++){x.setFrame(_,m,g,v,y);let M=d[_+1];if(!M){x.shrink(S);break}let E=F(M,"time",0),A=F(M,"mixRotate",1),w=F(M,"mixX",1),b=F(M,"mixY",w),C=f.curve;C&&(S=Yt(C,x,S,_,0,m,E,g,A,1),S=Yt(C,x,S,_,1,m,E,v,w,1),S=Yt(C,x,S,_,2,m,E,y,b,1)),m=E,g=A,v=w,y=b,f=M}s.push(x)}}}if(t.physics)for(let o in t.physics){let a=t.physics[o],c=-1;if(o.length>0){let h=n.findPhysicsConstraint(o);if(!h)throw new Error("Physics constraint not found: "+o);c=n.physicsConstraints.indexOf(h)}for(let h in a){let u=a[h],d=u[0];if(!d)continue;let f=u.length;if(h=="reset"){let x=new Gs(f,c);for(let m=0;d!=null;d=u[m+1],m++)x.setFrame(m,F(d,"time",0));s.push(x);continue}let p;if(h=="inertia")p=new Fs(f,f,c);else if(h=="strength")p=new Os(f,f,c);else if(h=="damping")p=new Bs(f,f,c);else if(h=="mass")p=new ks(f,f,c);else if(h=="wind")p=new zs(f,f,c);else if(h=="gravity")p=new Vs(f,f,c);else if(h=="mix")p=new Hs(f,f,c);else continue;s.push(pn(u,p,0,1))}}if(t.attachments)for(let o in t.attachments){let a=t.attachments[o],c=n.findSkin(o);if(!c)throw new Error("Skin not found: "+o);for(let h in a){let u=a[h],d=n.findSlot(h);if(!d)throw new Error("Slot not found: "+h);let f=d.index;for(let p in u){let x=u[p],m=c.getAttachment(f,p);for(let g in x){let v=x[g],y=v[0];if(y){if(g=="deform"){let _=m.bones,S=m.vertices,M=_?S.length/3*2:S.length,E=new Is(v.length,v.length,f,m),A=F(y,"time",0);for(let w=0,b=0;;w++){let C,U=F(y,"vertices",null);if(!U)C=_?it.newFloatArray(M):S;else{C=it.newFloatArray(M);let N=F(y,"offset",0);if(it.arrayCopy(U,0,C,N,U.length),i!=1)for(let H=N,V=H+U.length;H<V;H++)C[H]*=i;if(!_)for(let H=0;H<M;H++)C[H]+=S[H]}E.setFrame(w,A,C);let L=v[w+1];if(!L){E.shrink(b);break}let I=F(L,"time",0),D=y.curve;D&&(b=Yt(D,E,b,w,0,A,I,0,1,1)),A=I,y=L}s.push(E)}else if(g=="sequence"){let _=new Ws(v.length,f,m),S=0;for(let M=0;M<v.length;M++){let E=F(y,"delay",S),A=F(y,"time",0),w=be[F(y,"mode","hold")],b=F(y,"index",0);_.setFrame(M,A,w,b,E),S=E,y=v[M+1]}s.push(_)}}}}}}if(t.drawOrder){let o=new vn(t.drawOrder.length),a=n.slots.length,c=0;for(let h=0;h<t.drawOrder.length;h++,c++){let u=t.drawOrder[h],d=null,f=F(u,"offsets",null);if(f){d=it.newArray(a,-1);let p=it.newArray(a-f.length,0),x=0,m=0;for(let g=0;g<f.length;g++){let v=f[g],y=n.findSlot(v.slot);if(!y)throw new Error("Slot not found: "+y);let _=y.index;for(;x!=_;)p[m++]=x++;d[x+v.offset]=x++}for(;x<a;)p[m++]=x++;for(let g=a-1;g>=0;g--)d[g]==-1&&(d[g]=p[--m])}o.setFrame(c,F(u,"time",0),d)}s.push(o)}if(t.events){let o=new di(t.events.length),a=0;for(let c=0;c<t.events.length;c++,a++){let h=t.events[c],u=n.findEvent(h.name);if(!u)throw new Error("Event not found: "+h.name);let d=new Zs(it.toSinglePrecision(F(h,"time",0)),u);d.intValue=F(h,"int",u.intValue),d.floatValue=F(h,"float",u.floatValue),d.stringValue=F(h,"string",u.stringValue),d.data.audioPath&&(d.volume=F(h,"volume",1),d.balance=F(h,"balance",0)),o.setFrame(a,d)}s.push(o)}let l=0;for(let o=0,a=s.length;o<a;o++)l=Math.max(l,s[o].getDuration());n.animations.push(new ui(e,s,l))}},ic=class{parent;skin;slotIndex;mesh;inheritTimeline;constructor(t,e,n,i,s){this.mesh=t,this.skin=e,this.slotIndex=n,this.parent=i,this.inheritTimeline=s}};function pn(r,t,e,n){let i=r[0],s=F(i,"time",0),l=F(i,"value",e)*n,o=0;for(let a=0;;a++){t.setFrame(a,s,l);let c=r[a+1];if(!c)return t.shrink(o),t;let h=F(c,"time",0),u=F(c,"value",e)*n;i.curve&&(o=Yt(i.curve,t,o,a,0,s,h,l,u,n)),s=h,l=u,i=c}}function nc(r,t,e,n,i,s){let l=r[0],o=F(l,"time",0),a=F(l,e,i)*s,c=F(l,n,i)*s,h=0;for(let u=0;;u++){t.setFrame(u,o,a,c);let d=r[u+1];if(!d)return t.shrink(h),t;let f=F(d,"time",0),p=F(d,e,i)*s,x=F(d,n,i)*s,m=l.curve;m&&(h=Yt(m,t,h,u,0,o,f,a,p,s),h=Yt(m,t,h,u,1,o,f,c,x,s)),o=f,a=p,c=x,l=d}}function Yt(r,t,e,n,i,s,l,o,a,c){if(r=="stepped")return t.setStepped(n),e;let h=i<<2,u=r[h],d=r[h+1]*c,f=r[h+2],p=r[h+3]*c;return t.setBezier(e,n,i,s,o,u,d,f,p,l,a),e+1}function F(r,t,e){return r[t]!==void 0?r[t]:e}typeof Math.fround>"u"&&(Math.fround=(function(r){return function(t){return r[0]=t,r[0]}})(new Float32Array(1)));var nr=class r extends Ca{texture;constructor(t,e=!1){super(t),t instanceof ImageBitmap?this.texture=new ya(t):this.texture=new Ee(t),this.texture.premultiplyAlpha=!e,this.texture.flipY=!1,this.texture.needsUpdate=!0}setFilters(t,e){this.texture.minFilter=r.toThreeJsMinificationTextureFilter(t),this.texture.magFilter=r.toThreeJsMagnificationTextureFilter(e)}setWraps(t,e){this.texture.wrapS=r.toThreeJsTextureWrap(t),this.texture.wrapT=r.toThreeJsTextureWrap(e)}dispose(){this.texture.dispose()}static toThreeJsMinificationTextureFilter(t){if(t===ye.Linear)return ze;if(t===ye.MipMap)return wh;if(t===ye.MipMapLinearNearest)return Sh;if(t===ye.MipMapNearestLinear)return bh;if(t===ye.MipMapNearestNearest)return Mh;if(t===ye.Nearest)return Le;throw new Error("Unknown texture filter: "+t)}static toThreeJsMagnificationTextureFilter(t){if(t===ye.Linear)return ze;if(t===ye.MipMap)return ze;if(t===ye.MipMapLinearNearest)return Le;if(t===ye.MipMapNearestLinear)return ze;if(t===ye.MipMapNearestNearest)return Le;if(t===ye.Nearest)return Le;throw new Error("Unknown texture filter: "+t)}static toThreeJsTextureWrap(t){if(t===fn.ClampToEdge)return Nn;if(t===fn.MirroredRepeat)return fr;if(t===fn.Repeat)return Ci;throw new Error("Unknown texture wrap: "+t)}static fist=!0;static toThreeJsBlending(t){if(t===Sn.Normal)return{blending:hn};if(t===Sn.Additive)return{blending:ea};if(t===Sn.Multiply)return{blending:Ma,blendSrc:Nl,blendDst:is,blendSrcAlpha:xr,blendDstAlpha:is};if(t===Sn.Screen)return{blending:Ma,blendSrc:xr,blendDst:ba,blendSrcAlpha:xr,blendDstAlpha:ba};throw new Error("Unknown blendMode: "+t)}};var Ga=class extends La{constructor(t="",e=new Er,n=!1){super(i=>new nr(i,n),t,e)}};var ir=class r extends Ue{static DEFAULT_MATERIAL_PARAMETERS={side:Ze,depthWrite:!0,depthTest:!0,transparent:!0,alphaTest:.001,vertexColors:!0,premultipliedAlpha:!0};tempPos=new $e;tempUv=new $e;tempLight=new St;tempDark=new St;skeleton;state;zOffset=.1;batches=new Array;materialFactory;nextBatchIndex=0;clipper=new Va;static QUAD_TRIANGLES=[0,1,2,2,3,0];static VERTEX_SIZE=8;vertexSize=8;twoColorTint;vertices=it.newFloatArray(1024);tempColor=new St;tempDarkColor=new St;_castShadow=!1;_receiveShadow=!1;constructor(t,e=()=>{}){super(),"skeletonData"in t||(t={skeletonData:t,materialFactory:()=>{let s={...r.DEFAULT_MATERIAL_PARAMETERS};return e(s),new _n(s)}}),this.twoColorTint=t.twoColorTint??!0,this.twoColorTint&&(this.vertexSize+=4),this.materialFactory=t.materialFactory??(()=>new _n(r.DEFAULT_MATERIAL_PARAMETERS)),this.skeleton=new mi(t.skeletonData);let n=new Ys(t.skeletonData);this.state=new Xs(n),Object.defineProperty(this,"castShadow",{get:()=>this._castShadow,set:i=>{this._castShadow=i,this.traverse(s=>{s instanceof Fi&&(s.castShadow=i)})}}),Object.defineProperty(this,"receiveShadow",{get:()=>this._receiveShadow,set:i=>{this._receiveShadow=i,this.traverse(s=>{s instanceof Fi&&(s.receiveShadow=i)})}})}update(t){let e=this.state,n=this.skeleton;e.update(t),e.apply(n),n.update(t),n.updateWorldTransform(nn.update),this.updateGeometry()}dispose(){for(var t=0;t<this.batches.length;t++)this.batches[t].dispose()}clearBatches(){for(var t=0;t<this.batches.length;t++)this.batches[t].clear(),this.batches[t].visible=!1;this.nextBatchIndex=0}nextBatch(){if(this.batches.length==this.nextBatchIndex){let e=new Fi(Fi.MAX_VERTICES,this.materialFactory,this.twoColorTint);e.castShadow=this._castShadow,e.receiveShadow=this._receiveShadow,this.add(e),this.batches.push(e)}let t=this.batches[this.nextBatchIndex++];return t.visible=!0,t}updateGeometry(){this.clearBatches();let t=this.tempLight,e=this.tempDark,n=this.clipper,i=this.vertices,s=null,l=null,o=this.skeleton.drawOrder,a=this.nextBatch();a.begin();let c=0,h=this.zOffset;for(let u=0,d=o.length;u<d;u++){let f=n.isClipping()?2:this.vertexSize,p=o[u];if(!p.bone.active){n.clipEndWithSlot(p);continue}let x=p.getAttachment(),m,g,v=0;if(x instanceof pi){let y=x;m=y.color,i=this.vertices,v=f*4,y.computeWorldVertices(p,i,0,f),s=r.QUAD_TRIANGLES,l=y.uvs,g=y.region.texture}else if(x instanceof Mn){let y=x;m=y.color,i=this.vertices,v=(y.worldVerticesLength>>1)*f,v>i.length&&(i=this.vertices=it.newFloatArray(v)),y.computeWorldVertices(p,0,y.worldVerticesLength,i,0,f),s=y.triangles,l=y.uvs,g=y.region.texture}else if(x instanceof fi){let y=x;n.clipStart(p,y);continue}else{n.clipEndWithSlot(p);continue}if(g!=null){let _=p.bone.skeleton.color,S=p.color,M=_.a*S.a*m.a,E=this.tempColor;E.set(_.r*S.r*m.r*M,_.g*S.g*m.g*M,_.b*S.b*m.b*M,M);let A=this.tempDarkColor;p.darkColor?(A.r=p.darkColor.r*M,A.g=p.darkColor.g*M,A.b=p.darkColor.b*M,A.a=1):A.set(0,0,0,1);let w,b,C,U;if(n.isClipping()){n.clipTriangles(i,s,s.length,l,E,t,this.twoColorTint);let N=n.clippedVertices,H=n.clippedTriangles;w=N,b=N.length,C=H,U=H.length}else{let N=i;if(this.twoColorTint)for(let H=2,V=0,Z=v;H<Z;H+=f,V+=2)N[H]=E.r,N[H+1]=E.g,N[H+2]=E.b,N[H+3]=E.a,N[H+4]=l[V],N[H+5]=l[V+1],N[H+6]=A.r,N[H+7]=A.g,N[H+8]=A.b,N[H+9]=A.a;else for(let H=2,V=0,Z=v;H<Z;H+=f,V+=2)N[H]=E.r,N[H+1]=E.g,N[H+2]=E.b,N[H+3]=E.a,N[H+4]=l[V],N[H+5]=l[V+1];w=i,b=v,C=s,U=s.length}if(b==0||U==0){n.clipEndWithSlot(p);continue}a.canBatch(b/this.vertexSize,U)||(a.end(),a=this.nextBatch(),a.begin());let L=p.data.blendMode,I=g.texture,D=a.findMaterialGroup(I,L);a.addMaterialGroup(U,D),a.batch(w,b,C,U,c),c+=h}n.clipEndWithSlot(p)}n.clipEnd(),a.end()}};var Fi=class r extends Pe{materialFactory;twoColorTint;static MAX_VERTICES=10920;vertexSize=9;vertexBuffer;vertices;verticesLength=0;indices;indicesLength=0;materialGroups=[];constructor(t=r.MAX_VERTICES,e,n=!0){if(super(),this.materialFactory=e,this.twoColorTint=n,t>r.MAX_VERTICES)throw new Error("Can't have more than 10920 triangles per batch: "+t);n&&(this.vertexSize+=3),this.vertices=new Float32Array(t*this.vertexSize),this.indices=new Uint16Array(t*3);let i=new Float32Array(t*3);for(let c=0;c<t*3;c+=3)i[c]=0,i[c+1]=0,i[c+2]=-1;let s=new xa(this.vertices,this.vertexSize);this.vertexBuffer=s,this.vertexBuffer.usage=WebGLRenderingContext.DYNAMIC_DRAW;let l=new Gn;l.setAttribute("position",new Li(s,3,0,!1)),l.setAttribute("color",new Li(s,4,3,!1)),l.setAttribute("uv",new Li(s,2,7,!1)),n&&l.setAttribute("darkcolor",new Li(s,3,9,!1));let o=new De(i,3);o.usage=WebGLRenderingContext.STATIC_DRAW,l.setAttribute("normal",o);let a=new De(this.indices,1);a.usage=WebGLRenderingContext.DYNAMIC_DRAW,l.setIndex(a),l.drawRange.start=0,l.drawRange.count=0,this.geometry=l,this.material=[]}dispose(){if(this.geometry.dispose(),this.material instanceof yn)this.material.dispose();else if(this.material)for(let t=0;t<this.material.length;t++){let e=this.material[t];e instanceof yn&&e.dispose()}}clear(){let t=this.geometry;if(t.drawRange.start=0,t.drawRange.count=0,t.clearGroups(),this.materialGroups=[],this.material instanceof yn){let e=this.material;e.map=null,e.blending=hn}else if(Array.isArray(this.material))for(let e=0;e<this.material.length;e++){let n=this.material[e];n.map=null,n.blending=hn}return this}begin(){this.verticesLength=0,this.indicesLength=0}canBatch(t,e){return!(this.indicesLength+e>=this.indices.byteLength/2||this.verticesLength/this.vertexSize+t>=this.vertices.byteLength/4/this.vertexSize)}batch(t,e,n,i,s=0){let l=this.verticesLength/this.vertexSize,o=this.vertices,a=this.verticesLength,c=0;if(this.twoColorTint)for(;c<e;)o[a++]=t[c++],o[a++]=t[c++],o[a++]=s,o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],c++;else for(;c<e;)o[a++]=t[c++],o[a++]=t[c++],o[a++]=s,o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++],o[a++]=t[c++];this.verticesLength=a;let h=this.indices;for(a=this.indicesLength,c=0;c<i;a++,c++)h[a]=n[c]+l;this.indicesLength+=i}end(){this.vertexBuffer.needsUpdate=this.verticesLength>0,this.vertexBuffer.addUpdateRange(0,this.verticesLength);let t=this.geometry;this.closeMaterialGroups();let e=t.getIndex();if(!e)throw new Error("BufferAttribute must not be null.");e.needsUpdate=this.indicesLength>0,e.addUpdateRange(0,this.indicesLength),t.drawRange.start=0,t.drawRange.count=this.indicesLength}addMaterialGroup(t,e){let n=this.materialGroups[this.materialGroups.length-1];n===void 0||n[2]!==e?this.materialGroups.push([this.indicesLength,t,e]):n[1]+=t}closeMaterialGroups(){let t=this.geometry;for(let e=0;e<this.materialGroups.length;e++){let[n,i,s]=this.materialGroups[e];t.addGroup(n,i,s)}}findMaterialGroup(t,e){let n=nr.toThreeJsBlending(e),i=-1;if(Array.isArray(this.material)){for(let l=0;l<this.material.length;l++){let o=this.material[l];if(!o.map)return qh(o,t,n),l;if(o.map===t&&n.blending===o.blending&&(n.blendSrc===void 0||n.blendSrc===o.blendSrc)&&(n.blendDst===void 0||n.blendDst===o.blendDst)&&(n.blendSrcAlpha===void 0||n.blendSrcAlpha===o.blendSrcAlpha)&&(n.blendDstAlpha===void 0||n.blendDstAlpha===o.blendDstAlpha))return l}let s=this.newMaterial();qh(s,t,n),this.material.push(s),i=this.material.length-1}else throw new Error("MeshBatcher.material needs to be an array for geometry groups to work");return i}newMaterial(){let t=this.materialFactory(ir.DEFAULT_MATERIAL_PARAMETERS);if(!("map"in t))throw new Error("The material factory must return a material having the map property for the texture.");return t instanceof rc||(this.twoColorTint&&(t.defines={...t.defines,USE_SPINE_DARK_TINT:1}),t.onBeforeCompile=S0),t}},S0=r=>{let t;r.vertexShader=`
		#if defined( USE_SPINE_DARK_TINT )
			attribute vec3 darkcolor;
		#endif
	`+r.vertexShader,t=`
		#if defined( USE_SPINE_DARK_TINT )
			varying vec3 v_dark;
		#endif
	`,r.vertexShader=sc(r.vertexShader,"#include <color_pars_vertex>",t),t=`
		#if defined( USE_SPINE_DARK_TINT )
			v_dark = vec3( 1.0 );
			v_dark *= darkcolor;
		#endif
	`,r.vertexShader=sc(r.vertexShader,"#include <color_vertex>",t),t=`
		#ifdef USE_SPINE_DARK_TINT
			varying vec3 v_dark;
		#endif
	`,r.fragmentShader=sc(r.fragmentShader,"#include <color_pars_fragment>",t),r.fragmentShader=r.fragmentShader.replace("#include <color_fragment>",`
			#ifdef USE_SPINE_DARK_TINT
				#ifdef USE_COLOR_ALPHA
						diffuseColor.a *= vColor.a;
						diffuseColor.rgb = (diffuseColor.a - diffuseColor.rgb) * v_dark.rgb + diffuseColor.rgb * vColor.rgb;
				#endif
			#else
				#ifdef USE_COLOR_ALPHA
						diffuseColor *= vColor;
				#endif
			#endif
		`),r.fragmentShader=r.fragmentShader.replace("#include <premultiplied_alpha_fragment>",""),r.fragmentShader=r.fragmentShader.replace("#include <colorspace_fragment>","")};function sc(r,t,e){let n=r.indexOf(t),i=r.slice(0,n+t.length),s=r.slice(n+t.length);return i+e+s}function qh(r,t,e){r.map=t,Object.assign(r,e),r.needsUpdate=!0}var rc=class extends tn{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}constructor(t){let e=`
			varying vec2 vUv;
			varying vec4 vColor;
			void main() {
				vUv = uv;
				vColor = color;
				gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
			}
		`,n=`
			uniform sampler2D map;
			#ifdef USE_SPINE_ALPHATEST
			uniform float alphaTest;
			#endif
			varying vec2 vUv;
			varying vec4 vColor;
			void main(void) {
				gl_FragColor = texture2D(map, vUv)*vColor;
				#ifdef USE_SPINE_ALPHATEST
					if (gl_FragColor.a < alphaTest) discard;
				#endif
			}
		`,i={map:{value:null}};t.uniforms&&(i={...t.uniforms,...i}),t.alphaTest&&t.alphaTest>0&&(t.defines={USE_SPINE_ALPHATEST:1}),super({vertexShader:e,fragmentShader:n,...t,uniforms:i})}};var hc="./assets/",oc=class{constructor(){this.rawDataUris={}}downloadText(t,e,n){let i=new XMLHttpRequest;i.open("GET",t,!0),i.overrideMimeType("text/plain"),i.onload=()=>i.status>=200&&i.status<300||i.status===0?e(i.responseText):n(i.status,i.responseText),i.onerror=()=>n(i.status,"network error"),i.send()}downloadJson(t,e,n){this.downloadText(t,i=>{try{e(JSON.parse(i))}catch(s){n(0,"invalid json: "+s.message)}},n)}downloadBinary(t,e,n){let i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer",i.onload=()=>i.status>=200&&i.status<300||i.status===0?e(new Uint8Array(i.response)):n(i.status,"failed"),i.onerror=()=>n(i.status,"network error"),i.send()}},Nt={scene:null,camera:null,renderer:null,pointerX:0,pointerY:0,updaters:[],fitted:[],canvas:null,premultipliedAlpha:!1};function lc(r){console.error(r);let t=document.createElement("pre");t.textContent=`Spine player error:

`+r,t.style.cssText="position:fixed;left:0;top:0;margin:0;padding:16px;color:#ff8080;font:14px/1.5 monospace;white-space:pre-wrap;z-index:9999;",document.body.appendChild(t)}function Zh(r){console.warn(r);let t=document.createElement("div");t.textContent="提示："+r,t.style.cssText="position:fixed;left:12px;bottom:12px;padding:8px 12px;color:#ffd479;background:rgba(0,0,0,.55);border:1px solid #665522;border-radius:4px;font:13px/1.4 monospace;z-index:9999;max-width:70vw;",document.body.appendChild(t)}function w0(r,t=100){let e=r/Math.min(window.innerWidth,window.innerHeight);return e/(1+Math.abs(e))*t}function ac(r,t,e){let n=t?.boneName?r.skeleton.findBone(t.boneName):null;if(!t?.animationName||!n)return;r.state.setAnimation(1,t.animationName,!0);let i=e.bones.find(o=>o.name===t.boneName),s=i?.x??0,l=i?.y??0;return o=>{let a=r.parent;if(!a||!n)return;let c=new q(Nt.pointerX,Nt.pointerY,0).unproject(Nt.camera);c.sub(Nt.camera.position).normalize(),c.multiplyScalar((a.position.z-Nt.camera.position.z)/c.z);let h=c.sub(new q(a.position.x,a.position.y,a.position.z)),u=n.parent.worldToLocal(new ee(h.x,h.y));if(isNaN(u.x)||isNaN(u.y))return;let d=new ee(u.x-s,u.y-l),f=d.clone().normalize(),p=d.clone().length(),x=t.maxFollowDistance??100,m=w0(p,x);o?(n.x=s,n.y=l):(n.x=s+m*f.x,n.y=l+m*f.y)}}async function E0(r,t){let e=await t.loadTextureAtlasAsync(r.atlasFileName),n=new Pa(e),i=r.fit,s;if(r.skeletonFileName){let u=await t.loadBinaryAsync(r.skeletonFileName),d=new ka(n);d.scale=i?1:r.scale??1,s=d.readSkeletonData(u)}else if(r.jsonFileName){let u=await t.loadJsonAsync(r.jsonFileName),d=new Ha(n);d.scale=i?1:r.scale??1,s=d.readSkeletonData(u)}else throw new Error("please provide a skeleton file");let l=new ir({skeletonData:s,materialFactory:u=>new _n({...u,transparent:!0,premultipliedAlpha:!0,depthTest:!0,depthWrite:!1})});l.state.setAnimation(0,r.animationName,!0);let o=r.position?.z??-1e3;o>-1&&(Zh("position.z 必须小于 -1（相机在 0,0,0，近裁剪面 1），已自动改为 -1000。"),o=-1e3);let a=new Ue;r.fit?Nt.fitted.push({holder:a,bounds:R0(s,r.animationName),fit:r.fit,offset:{x:r.position?.x??0,y:r.position?.y??0},z:o}):a.position.set(r.position?.x??0,r.position?.y??0,o),a.add(l),Nt.scene.add(a);let c=ac(l,r.cursorFollow,s),h=ac(l,r.cursorPress,s);document.addEventListener("mousedown",u=>{u.preventDefault(),c&&c(!0),c=h}),document.addEventListener("mouseup",u=>{u.preventDefault(),h&&h(!0),c=ac(l,r.cursorFollow,s)}),Nt.updaters.push(u=>{c&&c(!1),l.update(u)})}function A0(r){return!r||r.enabled===!1?null:r.textureFileName?{type:"texture",textureFileName:r.textureFileName,fit:{mode:r.mode??"cover",zoom:r.zoom??1,margin:r.margin??0},opacity:r.opacity??1,position:{x:r.x??0,y:r.y??0,z:r.z??-1500}}:(r.color&&(Nt.pendingBackgroundColor=r.color),null)}function T0(r){let t=hc+r;return new Promise((e,n)=>{let i=new Image;i.onload=()=>{let s=new Ee(i);s.colorSpace=Be,s.needsUpdate=!0,e(s)},i.onerror=()=>n(new Error("无法加载图片 "+t)),i.src=t})}async function C0(r){let t=await T0(r.textureFileName),e=new _n({map:t,side:Ze,alphaTest:.001,transparent:!0,premultipliedAlpha:!1,opacity:r.opacity??1,depthTest:!0,depthWrite:!1}),n=r.position?.z??-1e3;n>-1&&(Zh("position.z 必须小于 -1（相机在 0,0,0，近裁剪面 1），已自动改为 -1000。"),n=-1e3);let i=t.image??{},s=i.width||r.width||1,l=i.height||r.height||1,o;if(r.fit){o=new Pe(new Pi(1,1),e),o.scale.set(s,l,1);let p=new Ue;p.add(o),Nt.scene.add(p),Nt.fitted.push({holder:p,bounds:{w:s,h:l,cx:0,cy:0},fit:r.fit,offset:{x:r.position?.x??0,y:r.position?.y??0},z:n})}else{let p=new Pi(r.width??s,r.height??l,1,1),x=r.scale??1;p.scale(x,x,x),o=new Pe(p,e),o.position.set(r.position?.x??0,r.position?.y??0,n),Nt.scene.add(o)}let a=r.tilesHorizontal??1,c=r.tilesVertical??1,h=r.numTiles??1,u=r.tileDisplayDuration??0;t.wrapS=t.wrapT=Ci,t.repeat.set(1/a,1/c);let d=0,f=0;Nt.updaters.push(p=>{if(u!==0)for(f+=p*1e3;f>u;)f-=u,d=(d+1)%h,t.offset.x=d%a/a,t.offset.y=Math.floor(d/a)/c})}function R0(r,t,e=24){let n=new mi(r),i=new Xs(new Ys(r)),s=r.animations.find(x=>x.name===t),l=s?.duration??0;s&&i.setAnimation(0,t,!0);let o=new $e,a=new $e,c=[],h=1/0,u=1/0,d=-1/0,f=-1/0,p=Math.max(1,e);for(let x=0;x<=p;x++)x>0&&i.update(l/p),i.apply(n),n.updateWorldTransform(nn.update),n.getBounds(o,a,c),h=Math.min(h,o.x),u=Math.min(u,o.y),d=Math.max(d,o.x+a.x),f=Math.max(f,o.y+a.y);if(!isFinite(h)||d<=h||f<=u){let x=r.width||1e3,m=r.height||1e3;return{w:x,h:m,cx:0,cy:0}}return{w:d-h,h:f-u,cx:(h+d)/2,cy:(u+f)/2}}function I0(r){let t=r.canvas??{},e=r.autoResize===!1;return{mode:(t.mode??(e?"fixed":"adaptive"))==="fixed"?"fixed":"adaptive",width:Number(t.width??r.width??0)||0,height:Number(t.height??r.height??0)||0,renderScale:Number(t.renderScale??r.renderScale??1)||1}}function P0(){let r=window.innerWidth||1920,t=window.innerHeight||1080,e=Math.min(window.devicePixelRatio||1,2),n=Nt.canvas,i=n.renderScale>0?n.renderScale:1;if(n.mode==="fixed"&&n.width&&n.height){let s=Math.min(r/n.width,t/n.height);return{pixelRatio:i,renderWidth:n.width,renderHeight:n.height,cssWidth:Math.round(n.width*s),cssHeight:Math.round(n.height*s),aspect:n.width/n.height}}if(n.width&&n.height){let s=Math.min(r/n.width,t/n.height),l=n.width*s,o=n.height*s;return{pixelRatio:e*i,renderWidth:l,renderHeight:o,cssWidth:l,cssHeight:o,aspect:n.width/n.height}}return{pixelRatio:e*i,renderWidth:r,renderHeight:t,cssWidth:r,cssHeight:t,aspect:r/t}}function cc(){if(!Nt.renderer||!Nt.camera)return;let r=P0();Nt.renderer.setPixelRatio(r.pixelRatio),Nt.renderer.setSize(r.renderWidth,r.renderHeight);let t=Nt.renderer.domElement;t.style.width=Math.round(r.cssWidth)+"px",t.style.height=Math.round(r.cssHeight)+"px",Nt.camera.aspect=r.aspect,Nt.camera.updateProjectionMatrix();for(let e of Nt.fitted){let{holder:n,bounds:i,fit:s,z:l}=e,o=2*Math.tan(Nt.camera.fov*Math.PI/360)*Math.abs(l),a=Nt.canvas.height||r.renderHeight,c=o/a,h;if(s.pixelHeight>0)h=s.pixelHeight*c/i.h;else{let f=o*Nt.camera.aspect,p=s.margin??.04,x=f*(1-p*2),m=o*(1-p*2);switch(s.mode){case"height":h=m/i.h;break;case"width":h=x/i.w;break;case"cover":h=Math.max(x/i.w,m/i.h);break;default:h=Math.min(x/i.w,m/i.h);break}h*=s.zoom??1}let u=(e.offset?.x??0)*c,d=(e.offset?.y??0)*c;n.scale.setScalar(h),n.position.set(-i.cx*h+u,-i.cy*h+d,l),e.lastScale=h,e.designHeight=a,e.heightAtZ=o}}function L0(r){Nt.canvas=I0(r),Nt.premultipliedAlpha=r.premultipliedAlpha===!0,Nt.scene=new ga,Nt.scene.background=new Jt(r.backgroundColor??0),Nt.camera=new ke(r.fov??75,16/9,1,5e3),Nt.camera.position.set(0,0,0),Nt.renderer=new ma({antialias:!0}),Nt.renderer.outputColorSpace=Be,document.body.appendChild(Nt.renderer.domElement),window.addEventListener("resize",cc),window.addEventListener("orientationchange",cc),document.addEventListener("mousemove",e=>{e.preventDefault(),Nt.pointerX=e.clientX/window.innerWidth*2-1,Nt.pointerY=-(e.clientY/window.innerHeight)*2+1}),Nt.renderer.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),setTimeout(()=>window.location.reload(),2e3)})}function D0(){return new Promise((r,t)=>{let e=new XMLHttpRequest;e.open("GET",hc+"config.json",!0),e.overrideMimeType("application/json"),e.onload=()=>{if(!(e.status>=200&&e.status<300||e.status===0)){t(new Error("HTTP "+e.status));return}try{r(JSON.parse(e.responseText.replace(/^\uFEFF/,"")))}catch(i){t(new Error("assets/config.json 不是合法的 JSON："+i.message))}},e.onerror=()=>t(new Error("request failed")),e.send()})}function U0(r){return["无法读取 assets/config.json（"+(r?.message??r)+"）","","如果你是在普通浏览器里直接双击 index.html 打开的：","  浏览器禁止本地网页读取本地文件（安全限制），所以这里会失败。","  这不是壁纸本身的问题，在 Wallpaper Engine 中运行是正常的。"].join(`
`)}async function N0(){let r;try{r=await D0()}catch(l){lc(U0(l));return}L0(r);let t=new Ga(hc,new oc,r.premultipliedAlpha===!0),e=[],n=A0(r.background);n&&e.push(n),Nt.pendingBackgroundColor&&(Nt.scene.background=new Jt(Nt.pendingBackgroundColor)),e.push(...r.meshes??[]);for(let l of e)try{if(l.type==="spine")await E0(l,t);else if(l.type==="texture")try{await C0(l)}catch(o){console.warn("[background] "+(o?.message??o))}else console.warn("unknown mesh type:",l.type)}catch(o){lc('mesh "'+(l.animationName??l.type)+'": '+(o?.message??o))}cc();let i=new va,s=()=>{requestAnimationFrame(s);let l=i.getDelta();for(let o of Nt.updaters)o(l);Nt.renderer.render(Nt.scene,Nt.camera)};s()}N0().catch(r=>lc(r?.message??String(r)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
