import{r as e,t}from"./rolldown-runtime-hePW80VL.js";import{i as n,n as r,t as i}from"./index-BoPxvYu7.js";import{Ct as a,Er as o,Gr as s,Ht as c,It as l,Kr as u,Kt as d,L as f,M as p,Nr as m,O as h,Or as g,Sr as _,Tr as v,Tt as y,Vt as b,Y as x,b as S,dn as C,er as w,g as T,i as E,j as D,on as O,pr as k,st as A,v as j,w as M,x as N,z as ee}from"./generators-k8123LAy.js";import{c as te,d as ne,f as P,l as re,m as ie,p as ae,t as oe,u as se}from"./three-render-objects-K2h2fMmX.js";var ce=e(n(),1),F=new O,I=new s,le=new u,ue=new s,de=new s,fe=new u,pe=new u,me=new b,he=new u,ge=new u,L=null,R=null,z=[],B={NONE:-1,PAN:0,ROTATE:1},_e=class extends p{constructor(e,t,n=null){super(t,n),this.objects=e,this.recursive=!0,this.transformGroup=!1,this.rotateSpeed=1,this.raycaster=new w,this.mouseButtons={LEFT:l.PAN,MIDDLE:l.PAN,RIGHT:l.ROTATE},this.touches={ONE:g.PAN},this._onPointerMove=ve.bind(this),this._onPointerDown=ye.bind(this),this._onPointerCancel=be.bind(this),this._onContextMenu=xe.bind(this),n!==null&&this.connect(n)}connect(e){super.connect(e),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointerup`,this._onPointerCancel),this.domElement.addEventListener(`pointerleave`,this._onPointerCancel),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointerup`,this._onPointerCancel),this.domElement.removeEventListener(`pointerleave`,this._onPointerCancel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.domElement.style.touchAction=``,this.domElement.style.cursor=``}dispose(){this.disconnect()}_updatePointer(e){let t=this.domElement.getBoundingClientRect();I.x=(e.clientX-t.left)/t.width*2-1,I.y=-(e.clientY-t.top)/t.height*2+1}_updateState(e){let t;if(e.pointerType===`touch`)t=this.touches.ONE;else switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=null}switch(t){case l.PAN:case g.PAN:this.state=B.PAN;break;case l.ROTATE:case g.ROTATE:this.state=B.ROTATE;break;default:this.state=B.NONE}}};function ve(e){let t=this.object,n=this.domElement,r=this.raycaster;if(this.enabled!==!1){if(this._updatePointer(e),r.setFromCamera(I,t),L)this.state===B.PAN?r.ray.intersectPlane(F,fe)&&(L.position.copy(fe.sub(le).applyMatrix4(me)),this.dispatchEvent({type:`drag`,object:L})):this.state===B.ROTATE&&(ue.subVectors(I,de).multiplyScalar(this.rotateSpeed),L.rotateOnWorldAxis(he,ue.x),L.rotateOnWorldAxis(ge.normalize(),-ue.y),this.dispatchEvent({type:`drag`,object:L})),de.copy(I);else if(e.pointerType===`mouse`||e.pointerType===`pen`){if(z.length=0,r.setFromCamera(I,t),r.intersectObjects(this.objects,this.recursive,z),z.length>0){let e=z[0].object;F.setFromNormalAndCoplanarPoint(t.getWorldDirection(F.normal),pe.setFromMatrixPosition(e.matrixWorld)),R!==e&&R!==null&&(this.dispatchEvent({type:`hoveroff`,object:R}),n.style.cursor=`auto`,R=null),R!==e&&(this.dispatchEvent({type:`hoveron`,object:e}),n.style.cursor=`pointer`,R=e)}else R!==null&&(this.dispatchEvent({type:`hoveroff`,object:R}),n.style.cursor=`auto`,R=null)}de.copy(I)}}function ye(e){let t=this.object,n=this.domElement,r=this.raycaster;this.enabled!==!1&&(this._updatePointer(e),this._updateState(e),z.length=0,r.setFromCamera(I,t),r.intersectObjects(this.objects,this.recursive,z),z.length>0&&(L=this.transformGroup===!0?Se(z[0].object):z[0].object,F.setFromNormalAndCoplanarPoint(t.getWorldDirection(F.normal),pe.setFromMatrixPosition(L.matrixWorld)),r.ray.intersectPlane(F,fe)&&(this.state===B.PAN?(me.copy(L.parent.matrixWorld).invert(),le.copy(fe).sub(pe.setFromMatrixPosition(L.matrixWorld)),n.style.cursor=`move`,this.dispatchEvent({type:`dragstart`,object:L})):this.state===B.ROTATE&&(he.set(0,1,0).applyQuaternion(t.quaternion).normalize(),ge.set(1,0,0).applyQuaternion(t.quaternion).normalize(),n.style.cursor=`move`,this.dispatchEvent({type:`dragstart`,object:L})))),de.copy(I))}function be(){this.enabled!==!1&&(L&&=(this.dispatchEvent({type:`dragend`,object:L}),null),this.domElement.style.cursor=R?`pointer`:`auto`,this.state=B.NONE)}function xe(e){this.enabled!==!1&&e.preventDefault()}function Se(e,t=null){return e.isGroup&&(t=e),e.parent===null?t:Se(e.parent,t)}function Ce(e,t,n){var r,i=1;e??=0,t??=0,n??=0;function a(){var a,o=r.length,s,c=0,l=0,u=0;for(a=0;a<o;++a)s=r[a],c+=s.x||0,l+=s.y||0,u+=s.z||0;for(c=(c/o-e)*i,l=(l/o-t)*i,u=(u/o-n)*i,a=0;a<o;++a)s=r[a],c&&(s.x-=c),l&&(s.y-=l),u&&(s.z-=u)}return a.initialize=function(e){r=e},a.x=function(t){return arguments.length?(e=+t,a):e},a.y=function(e){return arguments.length?(t=+e,a):t},a.z=function(e){return arguments.length?(n=+e,a):n},a.strength=function(e){return arguments.length?(i=+e,a):i},a}function we(e){let t=+this._x.call(null,e);return Te(this.cover(t),t,e)}function Te(e,t,n){if(isNaN(t))return e;var r,i=e._root,a={data:n},o=e._x0,s=e._x1,c,l,u,d,f;if(!i)return e._root=a,e;for(;i.length;)if((u=t>=(c=(o+s)/2))?o=c:s=c,r=i,!(i=i[d=+u]))return r[d]=a,e;if(l=+e._x.call(null,i.data),t===l)return a.next=i,r?r[d]=a:e._root=a,e;do r=r?r[d]=[,,]:e._root=[,,],(u=t>=(c=(o+s)/2))?o=c:s=c;while((d=+u)==(f=+(l>=c)));return r[f]=i,r[d]=a,e}function Ee(e){Array.isArray(e)||(e=Array.from(e));let t=e.length,n=new Float64Array(t),r=1/0,i=-1/0;for(let a=0,o;a<t;++a)isNaN(o=+this._x.call(null,e[a]))||(n[a]=o,o<r&&(r=o),o>i&&(i=o));if(r>i)return this;this.cover(r).cover(i);for(let r=0;r<t;++r)Te(this,n[r],e[r]);return this}function De(e){if(isNaN(e=+e))return this;var t=this._x0,n=this._x1;if(isNaN(t))n=(t=Math.floor(e))+1;else{for(var r=n-t||1,i=this._root,a,o;t>e||e>=n;)switch(o=+(e<t),a=[,,],a[o]=i,i=a,r*=2,o){case 0:n=t+r;break;case 1:t=n-r}this._root&&this._root.length&&(this._root=i)}return this._x0=t,this._x1=n,this}function Oe(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function ke(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function V(e,t,n){this.node=e,this.x0=t,this.x1=n}function Ae(e,t){var n,r=this._x0,i,a,o=this._x1,s=[],c=this._root,l,u;for(c&&s.push(new V(c,r,o)),t==null?t=1/0:(r=e-t,o=e+t);l=s.pop();)if(!(!(c=l.node)||(i=l.x0)>o||(a=l.x1)<r)){if(c.length){var d=(i+a)/2;s.push(new V(c[1],d,a),new V(c[0],i,d)),(u=+(e>=d))&&(l=s[s.length-1],s[s.length-1]=s[s.length-1-u],s[s.length-1-u]=l)}else{var f=Math.abs(e-+this._x.call(null,c.data));f<t&&(t=f,r=e-f,o=e+f,n=c.data)}}return n}function je(e){if(isNaN(c=+this._x.call(null,e)))return this;var t,n=this._root,r,i,a,o=this._x0,s=this._x1,c,l,u,d,f;if(!n)return this;if(n.length)for(;;){if((u=c>=(l=(o+s)/2))?o=l:s=l,t=n,!(n=n[d=+u]))return this;if(!n.length)break;t[d+1&1]&&(r=t,f=d)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):t?(a?t[d]=a:delete t[d],(n=t[0]||t[1])&&n===(t[1]||t[0])&&!n.length&&(r?r[f]=n:this._root=n),this):(this._root=a,this)}function Me(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function Ne(){return this._root}function Pe(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function Fe(e){var t=[],n,r=this._root,i,a,o;for(r&&t.push(new V(r,this._x0,this._x1));n=t.pop();)if(!e(r=n.node,a=n.x0,o=n.x1)&&r.length){var s=(a+o)/2;(i=r[1])&&t.push(new V(i,s,o)),(i=r[0])&&t.push(new V(i,a,s))}return this}function Ie(e){var t=[],n=[],r;for(this._root&&t.push(new V(this._root,this._x0,this._x1));r=t.pop();){var i=r.node;if(i.length){var a,o=r.x0,s=r.x1,c=(o+s)/2;(a=i[0])&&t.push(new V(a,o,c)),(a=i[1])&&t.push(new V(a,c,s))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.x1);return this}function Le(e){return e[0]}function Re(e){return arguments.length?(this._x=e,this):this._x}function ze(e,t){var n=new Be(t??Le,NaN,NaN);return e==null?n:n.addAll(e)}function Be(e,t,n){this._x=e,this._x0=t,this._x1=n,this._root=void 0}function Ve(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var H=ze.prototype=Be.prototype;H.copy=function(){var e=new Be(this._x,this._x0,this._x1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Ve(t),e;for(n=[{source:t,target:e._root=[,,]}];t=n.pop();)for(var i=0;i<2;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=[,,]}):t.target[i]=Ve(r));return e},H.add=we,H.addAll=Ee,H.cover=De,H.data=Oe,H.extent=ke,H.find=Ae,H.remove=je,H.removeAll=Me,H.root=Ne,H.size=Pe,H.visit=Fe,H.visitAfter=Ie,H.x=Re;function He(e){let t=+this._x.call(null,e),n=+this._y.call(null,e);return Ue(this.cover(t,n),t,n,e)}function Ue(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,a=e._root,o={data:r},s=e._x0,c=e._y0,l=e._x1,u=e._y1,d,f,p,m,h,g,_,v;if(!a)return e._root=o,e;for(;a.length;)if((h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f,i=a,!(a=a[_=g<<1|h]))return i[_]=o,e;if(p=+e._x.call(null,a.data),m=+e._y.call(null,a.data),t===p&&n===m)return o.next=a,i?i[_]=o:e._root=o,e;do i=i?i[_]=[,,,,]:e._root=[,,,,],(h=t>=(d=(s+l)/2))?s=d:l=d,(g=n>=(f=(c+u)/2))?c=f:u=f;while((_=g<<1|h)==(v=(m>=f)<<1|p>=d));return i[v]=a,i[_]=o,e}function We(e){var t,n,r=e.length,i,a,o=Array(r),s=Array(r),c=1/0,l=1/0,u=-1/0,d=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(a=+this._y.call(null,t))||(o[n]=i,s[n]=a,i<c&&(c=i),i>u&&(u=i),a<l&&(l=a),a>d&&(d=a));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),n=0;n<r;++n)Ue(this,o[n],s[n],e[n]);return this}function Ge(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,a=(r=Math.floor(t))+1;else{for(var o=i-n||1,s=this._root,c,l;n>e||e>=i||r>t||t>=a;)switch(l=(t<r)<<1|e<n,c=[,,,,],c[l]=s,s=c,o*=2,l){case 0:i=n+o,a=r+o;break;case 1:n=i-o,a=r+o;break;case 2:i=n+o,r=a-o;break;case 3:n=i-o,r=a-o}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this}function Ke(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function qe(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function U(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function Je(e,t,n){var r,i=this._x0,a=this._y0,o,s,c,l,u=this._x1,d=this._y1,f=[],p=this._root,m,h;for(p&&f.push(new U(p,i,a,u,d)),n==null?n=1/0:(i=e-n,a=t-n,u=e+n,d=t+n,n*=n);m=f.pop();)if(!(!(p=m.node)||(o=m.x0)>u||(s=m.y0)>d||(c=m.x1)<i||(l=m.y1)<a)){if(p.length){var g=(o+c)/2,_=(s+l)/2;f.push(new U(p[3],g,_,c,l),new U(p[2],o,_,g,l),new U(p[1],g,s,c,_),new U(p[0],o,s,g,_)),(h=(t>=_)<<1|e>=g)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-h],f[f.length-1-h]=m)}else{var v=e-+this._x.call(null,p.data),y=t-+this._y.call(null,p.data),b=v*v+y*y;if(b<n){var x=Math.sqrt(n=b);i=e-x,a=t-x,u=e+x,d=t+x,r=p.data}}}return r}function Ye(e){if(isNaN(u=+this._x.call(null,e))||isNaN(d=+this._y.call(null,e)))return this;var t,n=this._root,r,i,a,o=this._x0,s=this._y0,c=this._x1,l=this._y1,u,d,f,p,m,h,g,_;if(!n)return this;if(n.length)for(;;){if((m=u>=(f=(o+c)/2))?o=f:c=f,(h=d>=(p=(s+l)/2))?s=p:l=p,t=n,!(n=n[g=h<<1|m]))return this;if(!n.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(r=t,_=g)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(a=n.next)&&delete n.next,i?(a?i.next=a:delete i.next,this):t?(a?t[g]=a:delete t[g],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[_]=n:this._root=n),this):(this._root=a,this)}function Xe(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function Ze(){return this._root}function Qe(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function $e(e){var t=[],n,r=this._root,i,a,o,s,c;for(r&&t.push(new U(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,a=n.x0,o=n.y0,s=n.x1,c=n.y1)&&r.length){var l=(a+s)/2,u=(o+c)/2;(i=r[3])&&t.push(new U(i,l,u,s,c)),(i=r[2])&&t.push(new U(i,a,u,l,c)),(i=r[1])&&t.push(new U(i,l,o,s,u)),(i=r[0])&&t.push(new U(i,a,o,l,u))}return this}function et(e){var t=[],n=[],r;for(this._root&&t.push(new U(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var a,o=r.x0,s=r.y0,c=r.x1,l=r.y1,u=(o+c)/2,d=(s+l)/2;(a=i[0])&&t.push(new U(a,o,s,u,d)),(a=i[1])&&t.push(new U(a,u,s,c,d)),(a=i[2])&&t.push(new U(a,o,d,u,l)),(a=i[3])&&t.push(new U(a,u,d,c,l))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function tt(e){return e[0]}function nt(e){return arguments.length?(this._x=e,this):this._x}function rt(e){return e[1]}function it(e){return arguments.length?(this._y=e,this):this._y}function at(e,t,n){var r=new ot(t??tt,n??rt,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function ot(e,t,n,r,i,a){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function st(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var W=at.prototype=ot.prototype;W.copy=function(){var e=new ot(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=st(t),e;for(n=[{source:t,target:e._root=[,,,,]}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=[,,,,]}):t.target[i]=st(r));return e},W.add=He,W.addAll=We,W.cover=Ge,W.data=Ke,W.extent=qe,W.find=Je,W.remove=Ye,W.removeAll=Xe,W.root=Ze,W.size=Qe,W.visit=$e,W.visitAfter=et,W.x=nt,W.y=it;function G(e){return function(){return e}}function K(e){return(e()-.5)*1e-6}function ct(e){return e.index}function lt(e,t){var n=e.get(t);if(!n)throw Error(`node not found: `+t);return n}function ut(e){var t=ct,n=f,r,i=G(30),a,o,s,c,l,u,d=1;e??=[];function f(e){return 1/Math.min(c[e.source.index],c[e.target.index])}function p(t){for(var n=0,i=e.length;n<d;++n)for(var o=0,c,f,p,m=0,h=0,g=0,_,v;o<i;++o)c=e[o],f=c.source,p=c.target,m=p.x+p.vx-f.x-f.vx||K(u),s>1&&(h=p.y+p.vy-f.y-f.vy||K(u)),s>2&&(g=p.z+p.vz-f.z-f.vz||K(u)),_=Math.sqrt(m*m+h*h+g*g),_=(_-a[o])/_*t*r[o],m*=_,h*=_,g*=_,p.vx-=m*(v=l[o]),s>1&&(p.vy-=h*v),s>2&&(p.vz-=g*v),f.vx+=m*(v=1-v),s>1&&(f.vy+=h*v),s>2&&(f.vz+=g*v)}function m(){if(o){var n,i=o.length,s=e.length,u=new Map(o.map((e,n)=>[t(e,n,o),e])),d;for(n=0,c=Array(i);n<s;++n)d=e[n],d.index=n,typeof d.source!=`object`&&(d.source=lt(u,d.source)),typeof d.target!=`object`&&(d.target=lt(u,d.target)),c[d.source.index]=(c[d.source.index]||0)+1,c[d.target.index]=(c[d.target.index]||0)+1;for(n=0,l=Array(s);n<s;++n)d=e[n],l[n]=c[d.source.index]/(c[d.source.index]+c[d.target.index]);r=Array(s),h(),a=Array(s),g()}}function h(){if(o)for(var t=0,i=e.length;t<i;++t)r[t]=+n(e[t],t,e)}function g(){if(o)for(var t=0,n=e.length;t<n;++t)a[t]=+i(e[t],t,e)}return p.initialize=function(e,...t){o=e,u=t.find(e=>typeof e==`function`)||Math.random,s=t.find(e=>[1,2,3].includes(e))||2,m()},p.links=function(t){return arguments.length?(e=t,m(),p):e},p.id=function(e){return arguments.length?(t=e,p):t},p.iterations=function(e){return arguments.length?(d=+e,p):d},p.strength=function(e){return arguments.length?(n=typeof e==`function`?e:G(+e),h(),p):n},p.distance=function(e){return arguments.length?(i=typeof e==`function`?e:G(+e),g(),p):i},p}var dt={value:()=>{}};function ft(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new pt(n)}function pt(e){this._=e}function mt(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}pt.prototype=ft.prototype={constructor:pt,on:function(e,t){var n=this._,r=mt(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=ht(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=gt(n[i],e.name,t);else if(t==null)for(i in n)n[i]=gt(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new pt(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function ht(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function gt(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=dt,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var q=0,_t=0,vt=0,yt=1e3,bt,xt,St=0,J=0,Ct=0,wt=typeof performance==`object`&&performance.now?performance:Date,Tt=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Et(){return J||=(Tt(Dt),wt.now()+Ct)}function Dt(){J=0}function Ot(){this._call=this._time=this._next=null}Ot.prototype=kt.prototype={constructor:Ot,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?Et():+n)+(t==null?0:+t),!this._next&&xt!==this&&(xt?xt._next=this:bt=this,xt=this),this._call=e,this._time=n,Pt()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pt())}};function kt(e,t,n){var r=new Ot;return r.restart(e,t,n),r}function At(){Et(),++q;for(var e=bt,t;e;)(t=J-e._time)>=0&&e._call.call(void 0,t),e=e._next;--q}function jt(){J=(St=wt.now())+Ct,q=_t=0;try{At()}finally{q=0,Nt(),J=0}}function Mt(){var e=wt.now(),t=e-St;t>yt&&(Ct-=t,St=e)}function Nt(){for(var e,t=bt,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:bt=n);xt=e,Pt(r)}function Pt(e){q||(_t&&=clearTimeout(_t),e-J>24?(e<1/0&&(_t=setTimeout(jt,e-wt.now()-Ct)),vt&&=clearInterval(vt)):(vt||=(St=wt.now(),setInterval(Mt,yt)),q=1,Tt(jt)))}var Ft=1664525,It=1013904223,Lt=4294967296;function Rt(){let e=1;return()=>(e=(Ft*e+It)%Lt)/Lt}var zt=3;function Bt(e){return e.x}function Vt(e){return e.y}function Ht(e){return e.z}var Ut=10,Wt=Math.PI*(3-Math.sqrt(5)),Gt=Math.PI*20/(9+Math.sqrt(221));function Kt(e,t){t||=2;var n=Math.min(zt,Math.max(1,Math.round(t))),r,i=1,a=.001,o=1-a**(1/300),s=0,c=.6,l=new Map,u=kt(p),d=ft(`tick`,`end`),f=Rt();e??=[];function p(){m(),d.call(`tick`,r),i<a&&(u.stop(),d.call(`end`,r))}function m(t){var a,u=e.length,d;t===void 0&&(t=1);for(var f=0;f<t;++f)for(i+=(s-i)*o,l.forEach(function(e){e(i)}),a=0;a<u;++a)d=e[a],d.fx==null?d.x+=d.vx*=c:(d.x=d.fx,d.vx=0),n>1&&(d.fy==null?d.y+=d.vy*=c:(d.y=d.fy,d.vy=0)),n>2&&(d.fz==null?d.z+=d.vz*=c:(d.z=d.fz,d.vz=0));return r}function h(){for(var t=0,r=e.length,i;t<r;++t){if(i=e[t],i.index=t,i.fx!=null&&(i.x=i.fx),i.fy!=null&&(i.y=i.fy),i.fz!=null&&(i.z=i.fz),isNaN(i.x)||n>1&&isNaN(i.y)||n>2&&isNaN(i.z)){var a=Ut*(n>2?Math.cbrt(.5+t):n>1?Math.sqrt(.5+t):t),o=t*Wt,s=t*Gt;n===1?i.x=a:n===2?(i.x=a*Math.cos(o),i.y=a*Math.sin(o)):(i.x=a*Math.sin(o)*Math.cos(s),i.y=a*Math.cos(o),i.z=a*Math.sin(o)*Math.sin(s))}(isNaN(i.vx)||n>1&&isNaN(i.vy)||n>2&&isNaN(i.vz))&&(i.vx=0,n>1&&(i.vy=0),n>2&&(i.vz=0))}}function g(t){return t.initialize&&t.initialize(e,f,n),t}return h(),r={tick:m,restart:function(){return u.restart(p),r},stop:function(){return u.stop(),r},numDimensions:function(e){return arguments.length?(n=Math.min(zt,Math.max(1,Math.round(e))),l.forEach(g),r):n},nodes:function(t){return arguments.length?(e=t,h(),l.forEach(g),r):e},alpha:function(e){return arguments.length?(i=+e,r):i},alphaMin:function(e){return arguments.length?(a=+e,r):a},alphaDecay:function(e){return arguments.length?(o=+e,r):+o},alphaTarget:function(e){return arguments.length?(s=+e,r):s},velocityDecay:function(e){return arguments.length?(c=1-e,r):1-c},randomSource:function(e){return arguments.length?(f=e,l.forEach(g),r):f},force:function(e,t){return arguments.length>1?(t==null?l.delete(e):l.set(e,g(t)),r):l.get(e)},find:function(){var t=Array.prototype.slice.call(arguments),r=t.shift()||0,i=(n>1?t.shift():null)||0,a=(n>2?t.shift():null)||0,o=t.shift()||1/0,s=0,c=e.length,l,u,d,f,p,m;for(o*=o,s=0;s<c;++s)p=e[s],l=r-p.x,u=i-(p.y||0),d=a-(p.z||0),f=l*l+u*u+d*d,f<o&&(m=p,o=f);return m},on:function(e,t){return arguments.length>1?(d.on(e,t),r):d.on(e)}}}function qt(){var e,t,n,r,i,a=G(-30),o,s=1,c=1/0,l=.81;function u(r){var a,o=e.length,s=(t===1?ze(e,Bt):t===2?at(e,Bt,Vt):t===3?ie(e,Bt,Vt,Ht):null).visitAfter(f);for(i=r,a=0;a<o;++a)n=e[a],s.visit(p)}function d(){if(e){var t,n=e.length,r;for(o=Array(n),t=0;t<n;++t)r=e[t],o[r.index]=+a(r,t,e)}}function f(e){var n=0,r,i,a=0,s,c,l,u,d=e.length;if(d){for(s=c=l=u=0;u<d;++u)(r=e[u])&&(i=Math.abs(r.value))&&(n+=r.value,a+=i,s+=i*(r.x||0),c+=i*(r.y||0),l+=i*(r.z||0));n*=Math.sqrt(4/d),e.x=s/a,t>1&&(e.y=c/a),t>2&&(e.z=l/a)}else{r=e,r.x=r.data.x,t>1&&(r.y=r.data.y),t>2&&(r.z=r.data.z);do n+=o[r.data.index];while(r=r.next)}e.value=n}function p(e,a,u,d,f){if(!e.value)return!0;var p=[u,d,f][t-1],m=e.x-n.x,h=t>1?e.y-n.y:0,g=t>2?e.z-n.z:0,_=p-a,v=m*m+h*h+g*g;if(_*_/l<v)return v<c&&(m===0&&(m=K(r),v+=m*m),t>1&&h===0&&(h=K(r),v+=h*h),t>2&&g===0&&(g=K(r),v+=g*g),v<s&&(v=Math.sqrt(s*v)),n.vx+=m*e.value*i/v,t>1&&(n.vy+=h*e.value*i/v),t>2&&(n.vz+=g*e.value*i/v)),!0;if(!(e.length||v>=c)){(e.data!==n||e.next)&&(m===0&&(m=K(r),v+=m*m),t>1&&h===0&&(h=K(r),v+=h*h),t>2&&g===0&&(g=K(r),v+=g*g),v<s&&(v=Math.sqrt(s*v)));do e.data!==n&&(_=o[e.data.index]*i/v,n.vx+=m*_,t>1&&(n.vy+=h*_),t>2&&(n.vz+=g*_));while(e=e.next)}}return u.initialize=function(n,...i){e=n,r=i.find(e=>typeof e==`function`)||Math.random,t=i.find(e=>[1,2,3].includes(e))||2,d()},u.strength=function(e){return arguments.length?(a=typeof e==`function`?e:G(+e),d(),u):a},u.distanceMin=function(e){return arguments.length?(s=e*e,u):Math.sqrt(s)},u.distanceMax=function(e){return arguments.length?(c=e*e,u):Math.sqrt(c)},u.theta=function(e){return arguments.length?(l=e*e,u):Math.sqrt(l)},u}function Jt(e,t,n,r){var i,a,o=G(.1),s,c;typeof e!=`function`&&(e=G(+e)),t??=0,n??=0,r??=0;function l(e){for(var o=0,l=i.length;o<l;++o){var u=i[o],d=u.x-t||1e-6,f=(u.y||0)-n||1e-6,p=(u.z||0)-r||1e-6,m=Math.sqrt(d*d+f*f+p*p),h=(c[o]-m)*s[o]*e/m;u.vx+=d*h,a>1&&(u.vy+=f*h),a>2&&(u.vz+=p*h)}}function u(){if(i){var t,n=i.length;for(s=Array(n),c=Array(n),t=0;t<n;++t)c[t]=+e(i[t],t,i),s[t]=isNaN(c[t])?0:+o(i[t],t,i)}}return l.initialize=function(e,...t){i=e,a=t.find(e=>[1,2,3].includes(e))||2,u()},l.strength=function(e){return arguments.length?(o=typeof e==`function`?e:G(+e),u(),l):o},l.radius=function(t){return arguments.length?(e=typeof t==`function`?t:G(+t),u(),l):e},l.x=function(e){return arguments.length?(t=+e,l):t},l.y=function(e){return arguments.length?(n=+e,l):n},l.z=function(e){return arguments.length?(r=+e,l):r},l}function Yt(e){Zt(e);let t=Xt(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e}function Xt(e){let t=Object.create(null);return{on:function(n,r,i){if(typeof r!=`function`)throw Error(`callback is expected to be a function`);let a=t[n];return a||=t[n]=[],a.push({callback:r,ctx:i}),e},off:function(n,r){if(n===void 0)return t=Object.create(null),e;if(t[n]){if(typeof r!=`function`)delete t[n];else{let e=t[n];for(let t=0;t<e.length;++t)e[t].callback===r&&e.splice(t,1)}}return e},fire:function(n){let r=t[n];if(!r)return e;let i;arguments.length>1&&(i=Array.prototype.slice.call(arguments,1));for(let e=0;e<r.length;++e){let t=r[e];t.callback.apply(t.ctx,i)}return e}}}function Zt(e){if(!e)throw Error(`Eventify cannot use falsy object as events subject`);let t=[`on`,`fire`,`off`];for(let n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw Error(`Subject cannot be eventified, since it already has property '`+t[n]+`'`)}var Qt=$t;function $t(e){if(e||={},`uniqueLinkId`in e&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),e.multigraph=e.uniqueLinkId),e.multigraph===void 0&&(e.multigraph=!1),typeof Map!=`function`)throw Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var t=new Map,n=new Map,r={},i=0,a=e.multigraph?b:y,o=[],s=N,c=N,l=N,u=N,d={version:20,addNode:h,addLink:v,removeLink:w,removeNode:_,getNode:g,getNodeCount:x,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:x,getLinks:C,forEachNode:ne,forEachLinkedNode:A,forEachLink:k,beginUpdate:l,endUpdate:u,clear:O,hasLink:E,hasNode:g,getLink:E,getLinkById:D};return Yt(d),f(),d;function f(){var e=d.on;d.on=t;function t(){return d.beginUpdate=l=ee,d.endUpdate=u=te,s=p,c=m,d.on=e,e.apply(d,arguments)}}function p(e,t){o.push({link:e,changeType:t})}function m(e,t){o.push({node:e,changeType:t})}function h(e,n){if(e===void 0)throw Error(`Invalid node identifier`);l();var r=g(e);return r?(r.data=n,c(r,`update`)):(r=new en(e,n),c(r,`add`)),t.set(e,r),u(),r}function g(e){return t.get(e)}function _(e){var n=g(e);if(!n)return!1;l();var r=n.links;return r&&(r.forEach(T),n.links=null),t.delete(e),c(n,`remove`),u(),!0}function v(e,t,r){l();var i=g(e)||h(e),o=g(t)||h(t),c=a(e,t,r),d=n.has(c.id);return n.set(c.id,c),tn(i,c),e!==t&&tn(o,c),s(c,d?`update`:`add`),u(),c}function y(e,t,r){var i=rn(e,t),a=n.get(i);return a?(a.data=r,a):new nn(e,t,r,i)}function b(e,t,n){var i=rn(e,t),a=r.hasOwnProperty(i);if(a||E(e,t)){a||(r[i]=0);var o=`@`+ ++r[i];i=rn(e+o,t+o)}return new nn(e,t,n,i)}function x(){return t.size}function S(){return n.size}function C(e){var t=g(e);return t?t.links:null}function w(e,t){return t!==void 0&&(e=E(e,t)),T(e)}function T(e){if(!e||!n.get(e.id))return!1;l(),n.delete(e.id);var t=g(e.fromId),r=g(e.toId);return t&&t.links.delete(e),r&&r.links.delete(e),s(e,`remove`),u(),!0}function E(e,t){if(e!==void 0&&t!==void 0)return n.get(rn(e,t))}function D(e){if(e!==void 0)return n.get(e)}function O(){l(),ne(function(e){_(e.id)}),u()}function k(e){if(typeof e==`function`)for(var t=n.values(),r=t.next();!r.done;){if(e(r.value))return!0;r=t.next()}}function A(e,t,n){var r=g(e);if(r&&r.links&&typeof t==`function`)return n?M(r.links,e,t):j(r.links,e,t)}function j(e,n,r){for(var i,a=e.values(),o=a.next();!o.done;){var s=o.value,c=s.fromId===n?s.toId:s.fromId;if(i=r(t.get(c),s),i)return!0;o=a.next()}}function M(e,n,r){for(var i,a=e.values(),o=a.next();!o.done;){var s=o.value;if(s.fromId===n&&(i=r(t.get(s.toId),s),i))return!0;o=a.next()}}function N(){}function ee(){i+=1}function te(){--i,i===0&&o.length>0&&(d.fire(`changed`,o),o.length=0)}function ne(e){if(typeof e!=`function`)throw Error(`Function is expected to iterate over graph nodes. You passed `+e);for(var n=t.values(),r=n.next();!r.done;){if(e(r.value))return!0;r=n.next()}}}function en(e,t){this.id=e,this.links=null,this.data=t}function tn(e,t){e.links?e.links.add(t):e.links=new Set([t])}function nn(e,t,n,r){this.fromId=e,this.toId=t,this.data=n,this.id=r}function rn(e,t){return e.toString()+`👉 `+t.toString()}var an=t(((e,t)=>{t.exports=function(e){return e===0?`x`:e===1?`y`:e===2?`z`:`c`+(e+1)}})),Y=t(((e,t)=>{var n=an();t.exports=function(e){return t;function t(t,r){let i=r&&r.indent||0,a=r&&r.join!==void 0?r.join:`
`,o=Array(i+1).join(` `),s=[];for(let r=0;r<e;++r){let e=n(r),i=r===0?``:o;s.push(i+t.replace(/{var}/g,e))}return s.join(a)}}})),on=t(((e,t)=>{var n=Y();t.exports=r,t.exports.generateCreateBodyFunctionBody=i,t.exports.getVectorCode=o,t.exports.getBodyCode=a;function r(e,t){let n=i(e,t),{Body:r}=Function(n)();return r}function i(e,t){return`
${o(e,t)}
${a(e,t)}
return {Body: Body, Vector: Vector};
`}function a(e){let t=n(e),r=t(`{var}`,{join:`, `});return`
function Body(${r}) {
  this.isPinned = false;
  this.pos = new Vector(${r});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${r}) {
  ${t(`this.pos.{var} = {var} || 0;`,{indent:2})}
};`}function o(e,t){let r=n(e),i=``;return t&&(i=`${r(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${r(`{var}`,{join:`, `})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${r(`if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");`,{indent:4})}
      ${r(`this.{var} = v.{var};`,{indent:4})}
    } else {
      ${r(`this.{var} = typeof {var} === "number" ? {var} : 0;`,{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${r(`this.{var} = `,{join:``})}0;
  };`}})),sn=t(((e,t)=>{var n=Y(),r=an();t.exports=i,t.exports.generateQuadTreeFunctionBody=a,t.exports.getInsertStackCode=u,t.exports.getQuadNodeCode=l,t.exports.isSamePosition=o,t.exports.getChildBodyCode=c,t.exports.setChildBodyCode=s;function i(e){let t=a(e);return Function(t)()}function a(e){let t=n(e),i=2**e;return`
${u()}
${l(e)}
${o(e)}
${c(e)}
${s(e)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${f(`      node.`)}
      node.body = null;
      node.mass = ${t(`node.mass_{var} = `,{join:``})}0;
      ${t(`node.min_{var} = node.max_{var} = `,{join:``})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${t(`var d{var};`,{indent:4})}
    var r; 
    ${t(`var f{var} = 0;`,{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${t(`d{var} = body.pos.{var} - sourceBody.pos.{var};`,{indent:8})}
        r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${t(`d{var} = (random.nextDouble() - 0.5) / 50;`,{indent:10})}
          r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${t(`f{var} += v * d{var};`,{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${t(`d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};`,{indent:8})}
        r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${t(`d{var} = (random.nextDouble() - 0.5) / 50;`,{indent:10})}
          r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${r(0)} - node.min_${r(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${t(`f{var} += v * d{var};`,{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${d()}
        }
      }
    }

    ${t(`sourceBody.force.{var} += f{var};`,{indent:4})}
  }

  function insertBodies(bodies) {
    ${t(`var {var}min = Number.MAX_VALUE;`,{indent:4})}
    ${t(`var {var}max = Number.MIN_VALUE;`,{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${t(`if (pos.{var} < {var}min) {var}min = pos.{var};`,{indent:6})}
      ${t(`if (pos.{var} > {var}max) {var}max = pos.{var};`,{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${t(`if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;`,{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${t(`root.min_{var} = {var}min;`,{indent:4})}
    ${t(`root.max_{var} = {var}min + maxSideLength;`,{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${t(`var {var} = body.pos.{var};`,{indent:8})}
        node.mass += body.mass;
        ${t(`node.mass_{var} += body.mass * {var};`,{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${t(`var min_{var} = node.min_{var};`,{indent:8})}
        ${t(`var max_{var} = (min_{var} + node.max_{var}) / 2;`,{indent:8})}

${a(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${t(`child.min_{var} = min_{var};`,{indent:10})}
          ${t(`child.max_{var} = max_{var};`,{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${t(`var d{var} = (node.max_{var} - node.min_{var}) * offset;`,{indent:12})}

            ${t(`oldBody.pos.{var} = node.min_{var} + d{var};`,{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function a(t){let n=[],i=Array(t+1).join(` `);for(let t=0;t<e;++t)n.push(i+`if (${r(t)} > max_${r(t)}) {`),n.push(i+`  quadIdx = quadIdx + ${2**t};`),n.push(i+`  min_${r(t)} = max_${r(t)};`),n.push(i+`  max_${r(t)} = node.max_${r(t)};`),n.push(i+`}`);return n.join(`
`)}function d(){let e=Array(11).join(` `),t=[];for(let n=0;n<i;++n)t.push(e+`if (node.quad${n}) {`),t.push(e+`  queue[pushIdx] = node.quad${n};`),t.push(e+`  queueLength += 1;`),t.push(e+`  pushIdx += 1;`),t.push(e+`}`);return t.join(`
`)}function f(e){let t=[];for(let n=0;n<i;++n)t.push(`${e}quad${n} = null;`);return t.join(`
`)}}function o(e){let t=n(e);return`
  function isSamePosition(point1, point2) {
    ${t(`var d{var} = Math.abs(point1.{var} - point2.{var});`,{indent:2})}
  
    return ${t(`d{var} < 1e-8`,{join:` && `})};
  }  
`}function s(e){var t=2**e;return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let e=[];for(let n=0;n<t;++n){let t=n===0?`  `:`  else `;e.push(`${t}if (idx === ${n}) node.quad${n} = child;`)}return e.join(`
`)}}function c(e){return`function getChild(node, idx) {
${t()}
  return null;
}`;function t(){let t=[],n=2**e;for(let e=0;e<n;++e)t.push(`  if (idx === ${e}) return node.quad${e};`);return t.join(`
`)}}function l(e){let t=n(e),r=2**e;return`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${i(`  this.`)}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${t(`this.mass_{var} = 0;`,{indent:2})}

  // bounding box coordinates
  ${t(`this.min_{var} = 0;`,{indent:2})}
  ${t(`this.max_{var} = 0;`,{indent:2})}
}
`;function i(e){let t=[];for(let n=0;n<r;++n)t.push(`${e}quad${n} = null;`);return t.join(`
`)}}function u(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}})),cn=t(((e,t)=>{t.exports=r,t.exports.generateFunctionBody=i;var n=Y();function r(e){let t=i(e);return Function(`bodies`,`settings`,`random`,t)}function i(e){let t=n(e);return`
  var boundingBox = {
    ${t(`min_{var}: 0, max_{var}: 0,`,{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${t(`base_{var} = 0`,{join:`, `})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${t(`base_{var} += neighborPos.{var};`,{indent:10})}
        }

        ${t(`base_{var} /= neighbors.length;`,{indent:8})}
      } else {
        ${t(`base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;`,{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${t(`{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,`,{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${t(`var max_{var} = -Infinity;`,{indent:4})}
    ${t(`var min_{var} = Infinity;`,{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${t(`if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};`,{indent:6})}
      ${t(`if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};`,{indent:6})}
    }

    ${t(`boundingBox.min_{var} = min_{var};`,{indent:4})}
    ${t(`boundingBox.max_{var} = max_{var};`,{indent:4})}
  }

  function resetBoundingBox() {
    ${t(`boundingBox.min_{var} = boundingBox.max_{var} = 0;`,{indent:4})}
  }
`}})),ln=t(((e,t)=>{var n=Y();t.exports=r,t.exports.generateCreateDragForceFunctionBody=i;function r(e){let t=i(e);return Function(`options`,t)}function i(e){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${n(e)(`body.force.{var} -= options.dragCoefficient * body.velocity.{var};`,{indent:6})}
    }
  };
`}})),un=t(((e,t)=>{var n=Y();t.exports=r,t.exports.generateCreateSpringForceFunctionBody=i;function r(e){let t=i(e);return Function(`options`,`random`,t)}function i(e){let t=n(e);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${t(`var d{var} = body2.pos.{var} - body1.pos.{var};`,{indent:6})}
      var r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});

      if (r === 0) {
        ${t(`d{var} = (random.nextDouble() - 0.5) / 50;`,{indent:8})}
        r = Math.sqrt(${t(`d{var} * d{var}`,{join:` + `})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${t(`body1.force.{var} += coefficient * d{var}`,{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${t(`body2.force.{var} -= coefficient * d{var}`,{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}})),dn=t(((e,t)=>{var n=Y();t.exports=r,t.exports.generateIntegratorFunctionBody=i;function r(e){let t=i(e);return Function(`bodies`,`timeStep`,`adaptiveTimeStepWeight`,t)}function i(e){let t=n(e);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${t(`var d{var} = 0, t{var} = 0;`,{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${t(`body.velocity.{var} += coeff * body.force.{var};`,{indent:4})}
    ${t(`var v{var} = body.velocity.{var};`,{indent:4})}
    var v = Math.sqrt(${t(`v{var} * v{var}`,{join:` + `})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${t(`body.velocity.{var} = v{var} / v;`,{indent:6})}
    }

    ${t(`d{var} = timeStep * body.velocity.{var};`,{indent:4})}

    ${t(`body.pos.{var} += d{var};`,{indent:4})}

    ${t(`t{var} += Math.abs(d{var});`,{indent:4})}
  }

  return (${t(`t{var} * t{var}`,{join:` + `})})/length;
`}})),fn=t(((e,t)=>{t.exports=n;function n(e,t,n,r){this.from=e,this.to=t,this.length=n,this.coefficient=r}})),pn=t(((e,t)=>{t.exports=n;function n(e,t){var r;if(e||={},t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r];!i||typeof e[r]!==a?e[r]=t[r]:a===`object`&&(e[r]=n(e[r],t[r]))}}return e}})),mn=t(((e,t)=>{function n(e){i(e);let t=r(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e}function r(e){let t=Object.create(null);return{on:function(n,r,i){if(typeof r!=`function`)throw Error(`callback is expected to be a function`);let a=t[n];return a||=t[n]=[],a.push({callback:r,ctx:i}),e},off:function(n,r){if(typeof n>`u`)return t=Object.create(null),e;if(t[n]){if(typeof r!=`function`)delete t[n];else{let e=t[n];for(let t=0;t<e.length;++t)e[t].callback===r&&e.splice(t,1)}}return e},fire:function(n){let r=t[n];if(!r)return e;let i;arguments.length>1&&(i=Array.prototype.slice.call(arguments,1));for(let e=0;e<r.length;++e){let t=r[e];t.callback.apply(t.ctx,i)}return e}}}function i(e){if(!e)throw Error(`Eventify cannot use falsy object as events subject`);let t=[`on`,`fire`,`off`];for(let n=0;n<t.length;++n)if(e.hasOwnProperty(t[n]))throw Error(`Subject cannot be eventified, since it already has property '`+t[n]+`'`)}t.exports=n})),hn=t(((e,t)=>{t.exports=n,t.exports.random=n,t.exports.randomIterator=l;function n(e){return new r(typeof e==`number`?e:+new Date)}function r(e){this.seed=e}r.prototype.next=c,r.prototype.nextDouble=s,r.prototype.uniform=s,r.prototype.gaussian=i,r.prototype.random=s;function i(){var e,t,n;do t=this.nextDouble()*2-1,n=this.nextDouble()*2-1,e=t*t+n*n;while(e>=1||e===0);return t*Math.sqrt(-2*Math.log(e)/e)}r.prototype.levy=a;function a(){var e=3/2,t=(o(1+e)*Math.sin(Math.PI*e/2)/(o((1+e)/2)*e*2**((e-1)/2)))**(1/e);return this.gaussian()*t/Math.abs(this.gaussian())**(1/e)}function o(e){return Math.sqrt(2*Math.PI/e)*(1/Math.E*(e+1/(12*e-1/(10*e))))**e}function s(){var e=this.seed;return e=e+2127912214+(e<<12)&4294967295,e=(e^3345072700^e>>>19)&4294967295,e=e+374761393+(e<<5)&4294967295,e=(e+3550635116^e<<9)&4294967295,e=e+4251993797+(e<<3)&4294967295,e=(e^3042594569^e>>>16)&4294967295,this.seed=e,(e&268435455)/268435456}function c(e){return Math.floor(this.nextDouble()*e)}function l(e,t){var r=t||n();if(typeof r.next!=`function`)throw Error(`customRandom does not match expected API: next() function is missing`);return{forEach:a,shuffle:i};function i(){for(var t=e.length-1,n,i;t>0;--t)n=r.next(t+1),i=e[n],e[n]=e[t],e[t]=i;return e}function a(t){for(var n=e.length-1,i,a;n>0;--n)i=r.next(n+1),a=e[i],e[i]=e[n],e[n]=a,t(a);e.length&&t(e[0])}}})),gn=t(((e,t)=>{t.exports=l;var n=on(),r=sn(),i=cn(),a=ln(),o=un(),s=dn(),c={};function l(e){var t=fn(),l=pn(),d=mn();if(e){if(e.springCoeff!==void 0)throw Error(`springCoeff was renamed to springCoefficient`);if(e.dragCoeff!==void 0)throw Error(`dragCoeff was renamed to dragCoefficient`)}e=l(e,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var f=c[e.dimensions];if(!f){var p=e.dimensions;f={Body:n(p,e.debug),createQuadTree:r(p),createBounds:i(p),createDragForce:a(p),createSpringForce:o(p),integrate:s(p)},c[p]=f}var m=f.Body,h=f.createQuadTree,g=f.createBounds,_=f.createDragForce,v=f.createSpringForce,y=f.integrate,b=e=>new m(e),x=hn().random(42),S=[],C=[],w=h(e,x),T=g(S,e,x),E=v(e,x),D=_(e),O=0,k=[],A=new Map,j=0;ee(`nbody`,P),ee(`spring`,re);var M={bodies:S,quadTree:w,springs:C,settings:e,addForce:ee,removeForce:te,getForces:ne,step:function(){for(var t=0;t<k.length;++t)k[t](j);var n=y(S,e.timeStep,e.adaptiveTimeStepWeight);return j+=1,n},addBody:function(e){if(!e)throw Error(`Body is required`);return S.push(e),e},addBodyAt:function(e){if(!e)throw Error(`Body position is required`);var t=b(e);return S.push(t),t},removeBody:function(e){if(e){var t=S.indexOf(e);if(!(t<0))return S.splice(t,1),S.length===0&&T.reset(),!0}},addSpring:function(e,n,r,i){if(!e||!n)throw Error(`Cannot add null spring to force simulator`);typeof r!=`number`&&(r=-1);var a=new t(e,n,r,i>=0?i:-1);return C.push(a),a},getTotalMovement:function(){return O},removeSpring:function(e){if(e){var t=C.indexOf(e);if(t>-1)return C.splice(t,1),!0}},getBestNewBodyPosition:function(e){return T.getBestNewPosition(e)},getBBox:N,getBoundingBox:N,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(t){return t===void 0?e.gravity:(e.gravity=t,w.options({gravity:t}),this)},theta:function(t){return t===void 0?e.theta:(e.theta=t,w.options({theta:t}),this)},random:x};return u(e,M),d(M),M;function N(){return T.update(),T.box}function ee(e,t){if(A.has(e))throw Error(`Force `+e+` is already added`);A.set(e,t),k.push(t)}function te(e){var t=k.indexOf(A.get(e));t<0||(k.splice(t,1),A.delete(e))}function ne(){return A}function P(){if(S.length!==0){w.insertBodies(S);for(var e=S.length;e--;){var t=S[e];t.isPinned||(t.reset(),w.updateBodyForce(t),D.update(t))}}}function re(){for(var e=C.length;e--;)E.update(C[e])}}function u(e,t){for(var n in e)d(e,t,n)}function d(e,t,n){e.hasOwnProperty(n)&&typeof t[n]!=`function`&&(t[n]=Number.isFinite(e[n])?function(r){if(r!==void 0){if(!Number.isFinite(r))throw Error(`Value of `+n+` should be a valid number.`);return e[n]=r,t}return e[n]}:function(r){return r===void 0?e[n]:(e[n]=r,t)})}})),_n=t(((e,t)=>{t.exports=r,t.exports.simulator=gn();var n=mn();function r(e,t){if(!e)throw Error(`Graph structure cannot be undefined`);var r=(t&&t.createSimulator||gn())(t);if(Array.isArray(t))throw Error(`Physics settings is expected to be an object`);var a=e.version>19?A:k;t&&typeof t.nodeMass==`function`&&(a=t.nodeMass);var o=new Map,s={},c=0,l=r.settings.springTransform||i;b(),_();var u=!1,d={step:function(){if(c===0)return f(!0),!0;var e=r.step();d.lastMove=e,d.fire(`step`);var t=e/c<=.01;return f(t),t},getNodePosition:function(e){return O(e).pos},setNodePosition:function(e){var t=O(e);t.setPosition.apply(t,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(e){var t=s[e];if(t)return{from:t.from.pos,to:t.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:p,pinNode:function(e,t){var n=O(e.id);n.isPinned=!!t},isNodePinned:function(e){return O(e.id).isPinned},dispose:function(){e.off(`changed`,y),d.fire(`disposed`)},getBody:g,getSpring:h,getForceVectorLength:m,simulator:r,graph:e,lastMove:0};return n(d),d;function f(e){u!==e&&(u=e,v(e))}function p(e){o.forEach(e)}function m(){var e=0,t=0;return p(function(n){e+=Math.abs(n.force.x),t+=Math.abs(n.force.y)}),Math.sqrt(e*e+t*t)}function h(t,n){var r;if(n===void 0)r=typeof t==`object`?t.id:t;else{var i=e.hasLink(t,n);if(!i)return;r=i.id}return s[r]}function g(e){return o.get(e)}function _(){e.on(`changed`,y)}function v(e){d.fire(`stable`,e)}function y(t){for(var n=0;n<t.length;++n){var r=t[n];r.changeType===`add`?(r.node&&x(r.node.id),r.link&&C(r.link)):r.changeType===`remove`&&(r.node&&S(r.node),r.link&&w(r.link))}c=e.getNodesCount()}function b(){c=0,e.forEachNode(function(e){x(e.id),c+=1}),e.forEachLink(C)}function x(t){var n=o.get(t);if(!n){var i=e.getNode(t);if(!i)throw Error(`initBody() was called with unknown node id`);var a=i.position;if(!a){var s=T(i);a=r.getBestNewBodyPosition(s)}n=r.addBodyAt(a),n.id=t,o.set(t,n),E(t),D(i)&&(n.isPinned=!0)}}function S(e){var t=e.id,n=o.get(t);n&&(o.delete(t),r.removeBody(n))}function C(e){E(e.fromId),E(e.toId);var t=o.get(e.fromId),n=o.get(e.toId),i=r.addSpring(t,n,e.length);l(e,i),s[e.id]=i}function w(t){var n=s[t.id];if(n){var i=e.getNode(t.fromId),a=e.getNode(t.toId);i&&E(i.id),a&&E(a.id),delete s[t.id],r.removeSpring(n)}}function T(e){var t=[];if(!e.links)return t;for(var n=Math.min(e.links.length,2),r=0;r<n;++r){var i=e.links[r],a=i.fromId===e.id?o.get(i.toId):o.get(i.fromId);a&&a.pos&&t.push(a)}return t}function E(e){var t=o.get(e);if(t.mass=a(e),Number.isNaN(t.mass))throw Error(`Node mass should be a number`)}function D(e){return e&&(e.isPinned||e.data&&e.data.isPinned)}function O(e){var t=o.get(e);return t||=(x(e),o.get(e)),t}function k(t){var n=e.getLinks(t);return n?1+n.length/3:1}function A(t){var n=e.getLinks(t);return n?1+n.size/3:1}}function i(){}})),vn=class extends Map{constructor(e,t=Sn){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(yn(this,e))}has(e){return super.has(yn(this,e))}set(e,t){return super.set(bn(this,e),t)}delete(e){return super.delete(xn(this,e))}};function yn({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function bn({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function xn({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function Sn(e){return typeof e==`object`&&e?e.valueOf():e}function Cn(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n>t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}var wn=Symbol(`implicit`);function Tn(){var e=new vn,t=[],n=[],r=wn;function i(i){let a=e.get(i);if(a===void 0){if(r!==wn)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new vn;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return Tn(t,n).unknown(r)},re.apply(i,arguments),i}function En(e){for(var t=e.length/6|0,n=Array(t),r=0;r<t;)n[r]=`#`+e.slice(r*6,++r*6);return n}var Dn=En(`a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928`),On=e(_n(),1);function kn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function An(e){if(Array.isArray(e))return e}function jn(e){if(Array.isArray(e))return kn(e)}function Mn(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function Nn(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Pn(e,t,n){return t=Gn(t),er(e,qn()?Reflect.construct(t,n||[],Gn(e).constructor):t.apply(e,n))}function Fn(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function In(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ln(e,t){return e.get(Mn(e,t))}function Rn(e,t,n){Fn(e,t),t.set(e,n)}function zn(e,t,n){return e.set(Mn(e,t),n),n}function Bn(e,t,n){if(qn())return Reflect.construct.apply(null,arguments);var r=[null];return r.push.apply(r,t),new(e.bind.apply(e,r))}function Vn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,or(r.key),r)}}function Hn(e,t,n){return t&&Vn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Un(e,t,n){return(t=or(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wn(){return Wn=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=rr(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},Wn.apply(null,arguments)}function Gn(e){return Gn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Gn(e)}function Kn(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&tr(e,t)}function qn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(qn=function(){return!!e})()}function Jn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Yn(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Xn(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Qn(Object(n),!0).forEach(function(t){Un(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function er(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return Nn(e)}function tr(e,t){return tr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},tr(e,t)}function nr(e,t){return An(e)||Yn(e,t)||cr(e,t)||Xn()}function rr(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=Gn(e))!==null;);return e}function ir(e,t,n,r){var i=Wn(Gn(e.prototype),t,n);return typeof i==`function`?function(e){return i.apply(n,e)}:i}function X(e){return jn(e)||Jn(e)||cr(e)||Zn()}function ar(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function or(e){var t=ar(e,`string`);return typeof t==`symbol`?t:t+``}function sr(e){"@babel/helpers - typeof";return sr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},sr(e)}function cr(e,t){if(e){if(typeof e==`string`)return kn(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kn(e,t):void 0}}var lr=function(e){e instanceof Array?e.forEach(lr):(e.map&&e.map.dispose(),e.dispose())},ur=function(e){e.geometry&&e.geometry.dispose(),e.material&&lr(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(ur)},dr=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),ur(t)}},fr=new WeakMap,pr=new WeakMap,mr=function(e){function t(e){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.dataBindAttr,a=i===void 0?`__data`:i,o=r.objBindAttr,s=o===void 0?`__threeObj`:o;return In(this,t),n=Pn(this,t),Un(n,`scene`,void 0),Rn(n,fr,void 0),Rn(n,pr,void 0),n.scene=e,zn(fr,n,a),zn(pr,n,s),n.onRemoveObj(function(){}),n}return Kn(t,e),Hn(t,[{key:`onCreateObj`,value:function(e){var n=this;return ir(t,`onCreateObj`,this)([function(t){var r=e(t);return t[Ln(pr,n)]=r,r[Ln(fr,n)]=t,n.scene.add(r),r}]),this}},{key:`onRemoveObj`,value:function(e){var n=this;return ir(t,`onRemoveObj`,this)([function(r,i){var a=ir(t,`getData`,n)([r]);e(r,i),n.scene.remove(r),ur(r),delete a[Ln(pr,n)]}]),this}}])}(se),hr=function(e){return isNaN(e)?parseInt(te(e).toHex(),16):e},gr=function(e){return isNaN(e)?te(e).getAlpha():1},_r=Tn(Dn);function vr(e,t,n){t&&typeof n==`string`&&e.filter(function(e){return!e[n]}).forEach(function(e){e[n]=_r(t(e))})}function yr(e,t){var n=e.nodes,r=e.links,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.nodeFilter,o=a===void 0?function(){return!0}:a,s=i.onLoopError,c=s===void 0?function(e){throw`Invalid DAG structure! Found cycle in node path: ${e.join(` -> `)}.`}:s,l={};n.forEach(function(e){return l[t(e)]={data:e,out:[],depth:-1,skip:!o(e)}}),r.forEach(function(e){var n=e.source,r=e.target,i=c(n),a=c(r);if(!l.hasOwnProperty(i))throw`Missing source node with id: ${i}`;if(!l.hasOwnProperty(a))throw`Missing target node with id: ${a}`;var o=l[i],s=l[a];o.out.push(s);function c(e){return sr(e)===`object`?t(e):e}});var u=[];return d(Object.values(l)),Object.assign.apply(Object,[{}].concat(X(Object.entries(l).filter(function(e){return!nr(e,2)[1].skip}).map(function(e){var t=nr(e,2),n=t[0],r=t[1];return Un({},n,r.depth)}))));function d(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=function(){var i=e[a];if(n.indexOf(i)!==-1){var o=[].concat(X(n.slice(n.indexOf(i))),[i]).map(function(e){return t(e.data)});return u.some(function(e){return e.length===o.length&&e.every(function(e,t){return e===o[t]})})||(u.push(o),c(o)),1}r>i.depth&&(i.depth=r,d(i.out,[].concat(X(n),[i]),r+ +!i.skip))},a=0,o=e.length;a<o;a++)if(i())continue}}var Z=window.THREE?window.THREE:{Group:A,Mesh:c,MeshLambertMaterial:d,Color:h,BufferGeometry:N,BufferAttribute:S,Matrix4:b,Vector3:u,SphereGeometry:_,CylinderGeometry:ee,TubeGeometry:m,ConeGeometry:D,Line:a,LineBasicMaterial:y,QuadraticBezierCurve3:C,CubicBezierCurve3:f,Box3:j},br={graph:Qt,forcelayout:On.default},xr=2,Sr=new Z.BufferGeometry().setAttribute?`setAttribute`:`addAttribute`,Cr=new Z.BufferGeometry().applyMatrix4?`applyMatrix4`:`applyMatrix`,wr=ae({props:{jsonUrl:{onChange:function(e,t){var n=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(e){return e.json()}).then(function(e){t.fetchingJson=!1,t.onFinishLoading(e),n.graphData(e)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var n=t.d3ForceLayout.force(`charge`);n&&n.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,`z`),e<2&&r(t.graphData.nodes,`y`);function r(e,t){e.forEach(function(e){delete e[t],delete e[`v${t}`]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine===`d3`&&(t.graphData.nodes||[]).forEach(function(e){e.fx=e.fy=e.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:`id`},nodeVal:{default:`val`},nodeResolution:{default:8},nodeColor:{default:`color`},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:`source`},linkTarget:{default:`target`},linkVisibility:{default:!0},linkColor:{default:`color`},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleOffset:{default:0,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},linkDirectionalParticleThreeObject:{},forceEngine:{default:`d3`},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,n){return n===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,n),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!==`ngraph`;return e.engineRunning&&n(),r(),i(),this;function n(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?`tick`:`step`](),e.onEngineTick());var n=P(e.nodeThreeObjectExtend);e.nodeDataMapper.entries().forEach(function(r){var i=nr(r,2),a=i[0],o=i[1];if(o){var s=t?a:e.layout.getNodePosition(a[e.nodeId]),c=n(a);(!e.nodePositionUpdate||!e.nodePositionUpdate(c?o.children[0]:o,{x:s.x,y:s.y,z:s.z},a)||c)&&(o.position.x=s.x,o.position.y=s.y||0,o.position.z=s.z||0)}});var r=P(e.linkWidth),i=P(e.linkCurvature),a=P(e.linkCurveRotation),o=P(e.linkThreeObjectExtend);e.linkDataMapper.entries().forEach(function(n){var i=nr(n,2),a=i[0],c=i[1];if(c){var l=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),u=l[t?`source`:`from`],d=l[t?`target`:`to`];if(u&&d&&u.hasOwnProperty(`x`)&&d.hasOwnProperty(`x`)){s(a);var f=o(a);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(f?c.children[1]:c,{start:{x:u.x,y:u.y,z:u.z},end:{x:d.x,y:d.y,z:d.z}},a)&&!f)){var p=30,m=a.__curve,h=c.children.length?c.children[0]:c;if(h.type===`Line`){if(m){var g=m.getPoints(p);h.geometry.getAttribute(`position`).array.length!==g.length*3&&h.geometry[Sr](`position`,new Z.BufferAttribute(new Float32Array(g.length*3),3)),h.geometry.setFromPoints(g)}else{var _=h.geometry.getAttribute(`position`);(!_||!_.array||_.array.length!==6)&&h.geometry[Sr](`position`,_=new Z.BufferAttribute(new Float32Array(6),3)),_.array[0]=u.x,_.array[1]=u.y||0,_.array[2]=u.z||0,_.array[3]=d.x,_.array[4]=d.y||0,_.array[5]=d.z||0,_.needsUpdate=!0}h.geometry.computeBoundingSphere()}else if(h.type===`Mesh`){if(m){h.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1));var v=Math.ceil(r(a)*10)/10/2,y=new Z.TubeGeometry(m,p,v,e.linkResolution,!1);h.geometry.dispose(),h.geometry=y}else{if(!h.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var b=Math.ceil(r(a)*10)/10/2,x=new Z.CylinderGeometry(b,b,1,e.linkResolution,1,!1);x[Cr](new Z.Matrix4().makeTranslation(0,1/2,0)),x[Cr](new Z.Matrix4().makeRotationX(Math.PI/2)),h.geometry.dispose(),h.geometry=x}var S=new Z.Vector3(u.x,u.y||0,u.z||0),C=new Z.Vector3(d.x,d.y||0,d.z||0),w=S.distanceTo(C);h.position.x=S.x,h.position.y=S.y,h.position.z=S.z,h.scale.z=w,h.parent.localToWorld(C),h.lookAt(C)}}}}}});function s(n){var r=t?n:e.layout.getLinkPosition(e.layout.graph.getLink(n.source,n.target).id),o=r[t?`source`:`from`],s=r[t?`target`:`to`];if(o&&s&&o.hasOwnProperty(`x`)&&s.hasOwnProperty(`x`)){var c=i(n);if(!c)n.__curve=null;else{var l=new Z.Vector3(o.x,o.y||0,o.z||0),u=new Z.Vector3(s.x,s.y||0,s.z||0),d=l.distanceTo(u),f,p=a(n);if(d>0){var m=s.x-o.x,h=s.y-o.y||0,g=new Z.Vector3().subVectors(u,l),_=g.clone().multiplyScalar(c).cross(m!==0||h!==0?new Z.Vector3(0,0,1):new Z.Vector3(0,1,0)).applyAxisAngle(g.normalize(),p).add(new Z.Vector3().addVectors(l,u).divideScalar(2));f=new Z.QuadraticBezierCurve3(l,_,u)}else{var v=c*70,y=-p,b=y+Math.PI/2;f=new Z.CubicBezierCurve3(l,new Z.Vector3(v*Math.cos(b),v*Math.sin(b),0).add(l),new Z.Vector3(v*Math.cos(y),v*Math.sin(y),0).add(l),u)}n.__curve=f}}}}function r(){var n=P(e.linkDirectionalArrowRelPos),r=P(e.linkDirectionalArrowLength),i=P(e.nodeVal);e.arrowDataMapper.entries().forEach(function(a){var o=nr(a,2),s=o[0],c=o[1];if(c){var l=t?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),u=l[t?`source`:`from`],d=l[t?`target`:`to`];if(u&&d&&u.hasOwnProperty(`x`)&&d.hasOwnProperty(`x`)){var f=Math.cbrt(Math.max(0,i(u)||1))*e.nodeRelSize,p=Math.cbrt(Math.max(0,i(d)||1))*e.nodeRelSize,m=r(s),h=n(s),g=s.__curve?function(e){return s.__curve.getPoint(e)}:function(e){var t=function(e,t,n,r){return t[e]+(n[e]-t[e])*r||0};return{x:t(`x`,u,d,e),y:t(`y`,u,d,e),z:t(`z`,u,d,e)}},_=s.__curve?s.__curve.getLength():Math.sqrt([`x`,`y`,`z`].map(function(e){return((d[e]||0)-(u[e]||0))**2}).reduce(function(e,t){return e+t},0)),v=f+m+(_-f-p-m)*h,y=g(v/_),b=g((v-m)/_);[`x`,`y`,`z`].forEach(function(e){return c.position[e]=b[e]});var x=Bn(Z.Vector3,X([`x`,`y`,`z`].map(function(e){return y[e]})));c.parent.localToWorld(x),c.lookAt(x)}}})}function i(){var n=P(e.linkDirectionalParticleSpeed),r=P(e.linkDirectionalParticleOffset);e.graphData.links.forEach(function(i){var a=e.particlesDataMapper.getObj(i),o=a&&a.children,s=i.__singleHopPhotonsObj&&i.__singleHopPhotonsObj.children;if(s&&s.length||o&&o.length){var c=t?i:e.layout.getLinkPosition(e.layout.graph.getLink(i.source,i.target).id),l=c[t?`source`:`from`],u=c[t?`target`:`to`];if(l&&u&&l.hasOwnProperty(`x`)&&u.hasOwnProperty(`x`)){var d=n(i),f=Math.abs(r(i)),p=i.__curve?function(e){return i.__curve.getPoint(e)}:function(e){var t=function(e,t,n,r){return t[e]+(n[e]-t[e])*r||0};return{x:t(`x`,l,u,e),y:t(`y`,l,u,e),z:t(`z`,l,u,e)}};[].concat(X(o||[]),X(s||[])).forEach(function(e,t){var n=e.parent.__linkThreeObjType===`singleHopPhotons`;if(e.hasOwnProperty(`__progressRatio`)||(e.__progressRatio=n?+(d<0):(t+f)/o.length),e.__progressRatio+=d,e.__progressRatio>=1||e.__progressRatio<0){if(!n)e.__progressRatio%=1,e.__progressRatio<0&&e.__progressRatio++;else{e.parent.remove(e),dr(e);return}}var r=e.__progressRatio,i=p(r);e.geometry.type!==`SphereGeometry`&&e.lookAt(i.x,i.y,i.z),[`x`,`y`,`z`].forEach(function(t){return e.position[t]=i[t]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var n=new Z.Group;n.__linkThreeObjType=`singleHopPhotons`,t.__singleHopPhotonsObj=n,e.graphScene.add(n)}var r=P(e.linkDirectionalParticleThreeObject)(t);if(r&&e.linkDirectionalParticleThreeObject===r&&(r=r.clone()),!r){var i=P(e.linkDirectionalParticleWidth),a=Math.ceil(i(t)*10)/10/2,o=e.linkDirectionalParticleResolution,s=new Z.SphereGeometry(a,o,o),c=P(e.linkColor),l=P(e.linkDirectionalParticleColor)(t)||c(t)||`#f0f0f0`,u=new Z.Color(hr(l)),d=e.linkOpacity*3,f=new Z.MeshLambertMaterial({color:u,transparent:!0,opacity:d});r=new Z.Mesh(s,f)}t.__singleHopPhotonsObj.add(r)}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var n=function e(n){var r=[];if(n.geometry){n.geometry.computeBoundingBox();var i=new Z.Box3;i.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld),r.push(i)}return r.concat.apply(r,X((n.children||[]).filter(function(e){return!e.hasOwnProperty(`__graphObjType`)||e.__graphObjType===`node`&&t(e.__data)}).map(e)))}(e.graphScene);return n.length?Object.assign.apply(Object,X([`x`,`y`,`z`].map(function(e){return Un({},e,[Cn(n,function(t){return t.min[e]}),ne(n,function(t){return t.max[e]})])}))):null}},stateInit:function(){return{d3ForceLayout:Kt().force(`link`,ut()).force(`charge`,qt()).force(`center`,Ce()).force(`dagRadial`,null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e,t.nodeDataMapper=new mr(e,{objBindAttr:`__threeObj`}),t.linkDataMapper=new mr(e,{objBindAttr:`__lineObj`}),t.arrowDataMapper=new mr(e,{objBindAttr:`__arrowObj`}),t.particlesDataMapper=new mr(e,{objBindAttr:`__photonsObj`})},update:function(e,t){var n=function(e){return e.some(function(e){return t.hasOwnProperty(e)})};if(e.engineRunning=!1,typeof e.onUpdate==`function`&&e.onUpdate(),e.nodeAutoColorBy!==null&&n([`nodeAutoColorBy`,`graphData`,`nodeColor`])&&vr(e.graphData.nodes,P(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&n([`linkAutoColorBy`,`graphData`,`linkColor`])&&vr(e.graphData.links,P(e.linkAutoColorBy),e.linkColor),e._flushObjects||n([`graphData`,`nodeThreeObject`,`nodeThreeObjectExtend`,`nodeVal`,`nodeColor`,`nodeVisibility`,`nodeRelSize`,`nodeResolution`,`nodeOpacity`])){var r=P(e.nodeThreeObject),i=P(e.nodeThreeObjectExtend),a=P(e.nodeVal),o=P(e.nodeColor),s=P(e.nodeVisibility),c={},l={};(e._flushObjects||n([`nodeThreeObject`,`nodeThreeObjectExtend`]))&&e.nodeDataMapper.clear(),e.nodeDataMapper.onCreateObj(function(t){var n=r(t),a=i(t);n&&e.nodeThreeObject===n&&(n=n.clone());var o;return n&&!a?o=n:(o=new Z.Mesh,o.__graphDefaultObj=!0,n&&a&&o.add(n)),o.__graphObjType=`node`,o}).onUpdateObj(function(t,n){if(t.__graphDefaultObj){var r=a(n)||1,i=Math.cbrt(r)*e.nodeRelSize,s=e.nodeResolution;(!t.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||t.geometry.parameters.radius!==i||t.geometry.parameters.widthSegments!==s)&&(c.hasOwnProperty(r)||(c[r]=new Z.SphereGeometry(i,s,s)),t.geometry.dispose(),t.geometry=c[r]);var u=o(n),d=new Z.Color(hr(u||`#ffffaa`)),f=e.nodeOpacity*gr(u);(t.material.type!==`MeshLambertMaterial`||!t.material.color.equals(d)||t.material.opacity!==f)&&(l.hasOwnProperty(u)||(l[u]=new Z.MeshLambertMaterial({color:d,transparent:!0,opacity:f})),t.material.dispose(),t.material=l[u])}}).digest(e.graphData.nodes.filter(s))}if(e._flushObjects||n([`graphData`,`linkThreeObject`,`linkThreeObjectExtend`,`linkMaterial`,`linkColor`,`linkWidth`,`linkVisibility`,`linkResolution`,`linkOpacity`,`linkDirectionalArrowLength`,`linkDirectionalArrowColor`,`linkDirectionalArrowResolution`,`linkDirectionalParticles`,`linkDirectionalParticleWidth`,`linkDirectionalParticleColor`,`linkDirectionalParticleResolution`,`linkDirectionalParticleThreeObject`])){var u=P(e.linkThreeObject),d=P(e.linkThreeObjectExtend),f=P(e.linkMaterial),p=P(e.linkVisibility),m=P(e.linkColor),h=P(e.linkWidth),g={},_={},v={},y=e.graphData.links.filter(p);if((e._flushObjects||n([`linkThreeObject`,`linkThreeObjectExtend`,`linkWidth`]))&&e.linkDataMapper.clear(),e.linkDataMapper.onRemoveObj(function(e){var t=e.__data&&e.__data.__singleHopPhotonsObj;t&&(t.parent.remove(t),dr(t),delete e.__data.__singleHopPhotonsObj)}).onCreateObj(function(t){var n=u(t),r=d(t);n&&e.linkThreeObject===n&&(n=n.clone());var i;if(!n||r){if(h(t))i=new Z.Mesh;else{var a=new Z.BufferGeometry;a[Sr](`position`,new Z.BufferAttribute(new Float32Array(6),3)),i=new Z.Line(a)}}var o;return n?r?(o=new Z.Group,o.__graphDefaultObj=!0,o.add(i),o.add(n)):o=n:(o=i,o.__graphDefaultObj=!0),o.renderOrder=10,o.__graphObjType=`link`,o}).onUpdateObj(function(t,n){if(t.__graphDefaultObj){var r=t.children.length?t.children[0]:t,i=Math.ceil(h(n)*10)/10,a=!!i;if(a){var o=i/2,s=e.linkResolution;if(!r.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||r.geometry.parameters.radiusTop!==o||r.geometry.parameters.radialSegments!==s){if(!g.hasOwnProperty(i)){var c=new Z.CylinderGeometry(o,o,1,s,1,!1);c[Cr](new Z.Matrix4().makeTranslation(0,1/2,0)),c[Cr](new Z.Matrix4().makeRotationX(Math.PI/2)),g[i]=c}r.geometry.dispose(),r.geometry=g[i]}}var l=f(n);if(l)r.material=l;else{var u=m(n),d=new Z.Color(hr(u||`#f0f0f0`)),p=e.linkOpacity*gr(u),y=a?`MeshLambertMaterial`:`LineBasicMaterial`;if(r.material.type!==y||!r.material.color.equals(d)||r.material.opacity!==p){var b=a?_:v;b.hasOwnProperty(u)||(b[u]=new Z[y]({color:d,transparent:p<1,opacity:p,depthWrite:p>=1})),r.material.dispose(),r.material=b[u]}}}}).digest(y),e.linkDirectionalArrowLength||t.hasOwnProperty(`linkDirectionalArrowLength`)){var b=P(e.linkDirectionalArrowLength),x=P(e.linkDirectionalArrowColor);e.arrowDataMapper.onCreateObj(function(){var e=new Z.Mesh(void 0,new Z.MeshLambertMaterial({transparent:!0}));return e.__linkThreeObjType=`arrow`,e}).onUpdateObj(function(t,n){var r=b(n),i=e.linkDirectionalArrowResolution;if(!t.geometry.type.match(/^Cone(Buffer)?Geometry$/)||t.geometry.parameters.height!==r||t.geometry.parameters.radialSegments!==i){var a=new Z.ConeGeometry(r*.25,r,i);a.translate(0,r/2,0),a.rotateX(Math.PI/2),t.geometry.dispose(),t.geometry=a}var o=x(n)||m(n)||`#f0f0f0`;t.material.color=new Z.Color(hr(o)),t.material.opacity=e.linkOpacity*3*gr(o)}).digest(y.filter(b))}if(e.linkDirectionalParticles||t.hasOwnProperty(`linkDirectionalParticles`)){var S=P(e.linkDirectionalParticles),C=P(e.linkDirectionalParticleWidth),w=P(e.linkDirectionalParticleColor),T=P(e.linkDirectionalParticleThreeObject),E={},D={};e.particlesDataMapper.onCreateObj(function(){var e=new Z.Group;return e.__linkThreeObjType=`photons`,e.__photonDataMapper=new mr(e),e}).onUpdateObj(function(t,n){var r=!!t.children.length&&t.children[0],i=T(n),a,o;if(i)a=i.geometry,o=i.material;else{var s=Math.ceil(C(n)*10)/10/2,c=e.linkDirectionalParticleResolution;r&&r.geometry.parameters.radius===s&&r.geometry.parameters.widthSegments===c?a=r.geometry:(D.hasOwnProperty(s)||(D[s]=new Z.SphereGeometry(s,c,c)),a=D[s]);var l=w(n)||m(n)||`#f0f0f0`,u=new Z.Color(hr(l)),d=e.linkOpacity*3;r&&r.material.color.equals(u)&&r.material.opacity===d?o=r.material:(E.hasOwnProperty(l)||(E[l]=new Z.MeshLambertMaterial({color:u,transparent:!0,opacity:d})),o=E[l])}r&&(r.geometry!==a&&r.geometry.dispose(),r.material!==o&&r.material.dispose());var f=Math.round(Math.abs(S(n)));t.__photonDataMapper.id(function(e){return e.idx}).onCreateObj(function(){return new Z.Mesh(a,o)}).onUpdateObj(function(e){e.geometry=a,e.material=o}).digest(X(Array(f)).map(function(e,t){return{idx:t}}))}).digest(y.filter(S))}}if(e._flushObjects=!1,n([`graphData`,`nodeId`,`linkSource`,`linkTarget`,`numDimensions`,`forceEngine`,`dagMode`,`dagNodeFilter`,`dagLevelDistance`])){e.engineRunning=!1,e.graphData.links.forEach(function(t){t.source=t[e.linkSource],t.target=t[e.linkTarget]});var O=e.forceEngine!==`ngraph`,k;if(O){(k=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var A=e.d3ForceLayout.force(`link`);A&&A.id(function(t){return t[e.nodeId]}).links(e.graphData.links);var j=e.dagMode&&yr(e.graphData,function(t){return t[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),M=Math.max.apply(Math,X(Object.values(j||[]))),N=e.dagLevelDistance||e.graphData.nodes.length/(M||1)*xr*([`radialin`,`radialout`].indexOf(e.dagMode)===-1?1:.7);if([`lr`,`rl`,`td`,`bu`,`zin`,`zout`].includes(t.dagMode)){var ee=[`lr`,`rl`].includes(t.dagMode)?`fx`:[`td`,`bu`].includes(t.dagMode)?`fy`:`fz`;e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(e){return delete e[ee]})}if([`lr`,`rl`,`td`,`bu`,`zin`,`zout`].includes(e.dagMode)){var te=[`rl`,`td`,`zout`].includes(e.dagMode),ne=function(t){return(j[t[e.nodeId]]-M/2)*N*(te?-1:1)},re=[`lr`,`rl`].includes(e.dagMode)?`fx`:[`td`,`bu`].includes(e.dagMode)?`fy`:`fz`;e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(e){return e[re]=ne(e)})}e.d3ForceLayout.force(`dagRadial`,[`radialin`,`radialout`].indexOf(e.dagMode)===-1?null:Jt(function(t){var n=j[t[e.nodeId]]||-1;return(e.dagMode===`radialin`?M-n:n)*N}).strength(function(t){return+!!e.dagNodeFilter(t)}))}else{var ie=br.graph();e.graphData.nodes.forEach(function(t){ie.addNode(t[e.nodeId])}),e.graphData.links.forEach(function(e){ie.addLink(e.source,e.target)}),k=br.forcelayout(ie,$n({dimensions:e.numDimensions},e.ngraphPhysics)),k.graph=ie}for(var ae=0;ae<e.warmupTicks&&!(O&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);ae++)k[O?`tick`:`step`]();e.layout=k,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=function(t){function r(){var t;In(this,r);var i=[...arguments];return t=Pn(this,r,[].concat(i)),t.__kapsuleInstance=Bn(e,[].concat(X(n?[t]:[]),i)),t}return Kn(r,t),Hn(r)}(t);return Object.keys(e()).forEach(function(e){return r.prototype[e]=function(){var t,n=(t=this.__kapsuleInstance)[e].apply(t,arguments);return n===this.__kapsuleInstance?this:n}}),r}var Er=Tr(wr,(window.THREE?window.THREE:{Group:A}).Group,!0);function Dr(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Dr(`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`);function Or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function kr(e){if(Array.isArray(e))return Or(e)}function Ar(e,t,n){return(t=Lr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jr(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Mr(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Nr(Object(n),!0).forEach(function(t){Ar(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Fr(e){return kr(e)||jr(e)||Rr(e)||Mr()}function Ir(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Lr(e){var t=Ir(e,`string`);return typeof t==`symbol`?t:t+``}function Rr(e,t){if(e){if(typeof e==`string`)return Or(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Or(e,t):void 0}}function zr(e,t){var n=new t;return n._destructor&&n._destructor(),{linkProp:function(t){return{default:n[t](),onChange:function(n,r){r[e][t](n)},triggerUpdate:!1}},linkMethod:function(t){return function(n){var r=n[e],i=[...arguments].slice(1),a=r[t].apply(r,i);return a===r?this:a}}}}var Br=window.THREE?window.THREE:{AmbientLight:T,DirectionalLight:x,REVISION:`186`},Vr=170,Hr=zr(`forceGraph`,Er),Ur=Object.assign.apply(Object,Fr(`jsonUrl.graphData.numDimensions.dagMode.dagLevelDistance.dagNodeFilter.onDagError.nodeRelSize.nodeId.nodeVal.nodeResolution.nodeColor.nodeAutoColorBy.nodeOpacity.nodeVisibility.nodeThreeObject.nodeThreeObjectExtend.nodePositionUpdate.linkSource.linkTarget.linkVisibility.linkColor.linkAutoColorBy.linkOpacity.linkWidth.linkResolution.linkCurvature.linkCurveRotation.linkMaterial.linkThreeObject.linkThreeObjectExtend.linkPositionUpdate.linkDirectionalArrowLength.linkDirectionalArrowColor.linkDirectionalArrowRelPos.linkDirectionalArrowResolution.linkDirectionalParticles.linkDirectionalParticleSpeed.linkDirectionalParticleOffset.linkDirectionalParticleWidth.linkDirectionalParticleColor.linkDirectionalParticleResolution.linkDirectionalParticleThreeObject.forceEngine.d3AlphaDecay.d3VelocityDecay.d3AlphaMin.ngraphPhysics.warmupTicks.cooldownTicks.cooldownTime.onEngineTick.onEngineStop`.split(`.`).map(function(e){return Ar({},e,Hr.linkProp(e))}))),Wr=Object.assign.apply(Object,Fr([`refresh`,`getGraphBbox`,`d3Force`,`d3ReheatSimulation`,`emitParticle`].map(function(e){return Ar({},e,Hr.linkMethod(e))}))),Gr=zr(`renderObjs`,oe),Kr=Object.assign.apply(Object,Fr([`width`,`height`,`backgroundColor`,`showNavInfo`,`enablePointerInteraction`].map(function(e){return Ar({},e,Gr.linkProp(e))}))),qr=Object.assign.apply(Object,Fr([`lights`,`cameraPosition`,`postProcessingComposer`].map(function(e){return Ar({},e,Gr.linkMethod(e))})).concat([{graph2ScreenCoords:Gr.linkMethod(`getScreenCoords`),screen2GraphCoords:Gr.linkMethod(`getSceneCoords`)}])),Jr=ae({props:Pr(Pr({nodeLabel:{default:`name`,triggerUpdate:!1},linkLabel:{default:`name`,triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var n=t.renderObjs.controls();n&&(n.enabled=e,e&&n.domElement&&n.domElement.dispatchEvent(new PointerEvent(`pointerup`)))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1},showPointerCursor:{default:!0,triggerUpdate:!1}},Ur),Kr),methods:Pr(Pr({zoomToFit:function(e,t,n){var r,i=[...arguments].slice(3);return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,i),t,n),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},_destructor:function(e){var t,n;this.pauseAnimation(),this.graphData({nodes:[],links:[]}),(t=(n=e.forceGraph)._destructor)==null||t.call(n),e.renderObjs._destructor()}},Wr),qr),stateInit:function(e){var t=e.controlType,n=e.rendererConfig,r=e.extraRenderers,i=new Er;return{forceGraph:i,renderObjs:oe({controlType:t,rendererConfig:n,extraRenderers:r}).objects([i]).lights([new Br.AmbientLight(13421772,Math.PI),new Br.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML=``,e.appendChild(t.container=document.createElement(`div`)),t.container.style.position=`relative`;var n=document.createElement(`div`);t.container.appendChild(n),t.renderObjs(n);var r=t.renderObjs.camera(),i=t.renderObjs.renderer(),a=t.renderObjs.controls();a.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var o;t.container.appendChild(o=document.createElement(`div`)),o.className=`graph-info-msg`,o.textContent=``,t.forceGraph.onLoading(function(){o.textContent=`Loading...`}).onFinishLoading(function(){o.textContent=``}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*Vr)}).onFinishUpdate(function(){if(t._dragControls){var e=t.graphData.nodes.find(function(e){return e.__initialFixedPos&&!e.__disposeControlsAfterDrag});e?e.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine===`d3`){var n=t._dragControls=new _e(t.graphData.nodes.map(function(e){return e.__threeObj}).filter(function(e){return e}),r,i.domElement);n.addEventListener(`dragstart`,function(e){var t=Q(e.object);if(t){a.enabled=!1,e.object.__initialPos=e.object.position.clone(),e.object.__prevPos=e.object.position.clone();var n=t.__data;!n.__initialFixedPos&&(n.__initialFixedPos={fx:n.fx,fy:n.fy,fz:n.fz}),!n.__initialPos&&(n.__initialPos={x:n.x,y:n.y,z:n.z}),[`x`,`y`,`z`].forEach(function(e){return n[`f${e}`]=n[e]}),i.domElement.classList.add(`grabbable`)}}),n.addEventListener(`drag`,function(e){var n=Q(e.object);if(n){if(!e.object.hasOwnProperty(`__graphObjType`)){var r=e.object.__initialPos,i=e.object.__prevPos,a=e.object.position;n.position.add(a.clone().sub(i)),i.copy(a),a.copy(r)}var o=n.__data,s=n.position,c={x:s.x-o.x,y:s.y-o.y,z:s.z-o.z};[`x`,`y`,`z`].forEach(function(e){return o[`f${e}`]=o[e]=s[e]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),o.__dragged=!0,t.onNodeDrag(o,c)}}),n.addEventListener(`dragend`,function(e){var r=Q(e.object);if(r){delete e.object.__initialPos,delete e.object.__prevPos;var o=r.__data;o.__disposeControlsAfterDrag&&(n.dispose(),delete o.__disposeControlsAfterDrag);var s=o.__initialFixedPos,c=o.__initialPos,l={x:c.x-o.x,y:c.y-o.y,z:c.z-o.z};if(s&&([`x`,`y`,`z`].forEach(function(e){var t=`f${e}`;s[t]===void 0&&delete o[t]}),delete o.__initialFixedPos,delete o.__initialPos,o.__dragged&&(delete o.__dragged,t.onNodeDragEnd(o,l))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls){var u;a.enabled=!0,a._status&&((u=a._onPointerCancel)==null||u.call(a)),a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent(`pointerup`,{pointerType:`touch`}))}i.domElement.classList.remove(`grabbable`)}})}}),Br.REVISION<155&&(t.renderObjs.renderer().useLegacyLights=!1),t.renderObjs.hoverOrderComparator(function(e,t){var n=Q(e);if(!n)return 1;var r=Q(t);if(!r)return-1;var i=function(e){return e.__graphObjType===`node`};return i(r)-i(n)}).tooltipContent(function(e){var n=Q(e);return n&&P(t[`${n.__graphObjType}Label`])(n.__data)||``}).hoverDuringDrag(!1).onHover(function(e){var n=Q(e);if(n!==t.hoverObj){var r=t.hoverObj?t.hoverObj.__graphObjType:null,a=t.hoverObj?t.hoverObj.__data:null,o=n?n.__graphObjType:null,s=n?n.__data:null;if(r&&r!==o){var c=t[`on${r===`node`?`Node`:`Link`}Hover`];c&&c(null,a)}if(o){var l=t[`on${o===`node`?`Node`:`Link`}Hover`];l&&l(s,r===o?a:null)}i.domElement.classList[(n&&t[`on${o===`node`?`Node`:`Link`}Click`]||!n&&t.onBackgroundClick)&&P(t.showPointerCursor)(s)?`add`:`remove`](`clickable`),t.hoverObj=n}}).clickAfterDrag(!1).onClick(function(e,n){var r=Q(e);if(r){var i=t[`on${r.__graphObjType===`node`?`Node`:`Link`}Click`];i&&i(r.__data,n)}else t.onBackgroundClick&&t.onBackgroundClick(n)}).onRightClick(function(e,n){var r=Q(e);if(r){var i=t[`on${r.__graphObjType===`node`?`Node`:`Link`}RightClick`];i&&i(r.__data,n)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(n)}),this._animationCycle()}});function Q(e){for(var t=e;t&&!t.hasOwnProperty(`__graphObjType`);)t=t.parent;return t}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Xr(e){if(Array.isArray(e))return e}function Zr(e){if(Array.isArray(e))return Yr(e)}function Qr(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function $r(e,t,n){return t=ri(t),ui(e,ai()?Reflect.construct(t,n||[],ri(e).constructor):t.apply(e,n))}function ei(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ti(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,hi(r.key),r)}}function ni(e,t,n){return t&&ti(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ri(e){return ri=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ri(e)}function ii(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&di(e,t)}function ai(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ai=function(){return!!e})()}function oi(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function si(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ci(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function li(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ui(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return Qr(e)}function di(e,t){return di=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},di(e,t)}function fi(e,t){return Xr(e)||si(e,t)||gi(e,t)||ci()}function pi(e){return Zr(e)||oi(e)||gi(e)||li()}function mi(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}function hi(e){var t=mi(e,`string`);return typeof t==`symbol`?t:t+``}function gi(e,t){if(e){if(typeof e==`string`)return Yr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yr(e,t):void 0}}var _i=typeof window<`u`&&window.THREE?window.THREE:{CanvasTexture:M,Sprite:v,SpriteMaterial:o,SRGBColorSpace:k},vi=function(e){function t(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:``,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`rgba(255, 255, 255, 1)`;return ei(this,t),e=$r(this,t,[new _i.SpriteMaterial]),e._text=`${n}`,e._textHeight=r,e._color=i,e._backgroundColor=!1,e._padding=0,e._borderWidth=0,e._borderRadius=0,e._borderColor=`white`,e._offsetX=0,e._offsetY=0,e._strokeWidth=0,e._strokeColor=`white`,e._fontFace=`system-ui`,e._fontSize=90,e._fontWeight=`normal`,e._canvas=document.createElement(`canvas`),e._genCanvas(),e}return ii(t,e),ni(t,[{key:`text`,get:function(){return this._text},set:function(e){this._text=e,this._genCanvas()}},{key:`textHeight`,get:function(){return this._textHeight},set:function(e){this._textHeight=e,this._genCanvas()}},{key:`color`,get:function(){return this._color},set:function(e){this._color=e,this._genCanvas()}},{key:`backgroundColor`,get:function(){return this._backgroundColor},set:function(e){this._backgroundColor=e,this._genCanvas()}},{key:`padding`,get:function(){return this._padding},set:function(e){this._padding=e,this._genCanvas()}},{key:`borderWidth`,get:function(){return this._borderWidth},set:function(e){this._borderWidth=e,this._genCanvas()}},{key:`borderRadius`,get:function(){return this._borderRadius},set:function(e){this._borderRadius=e,this._genCanvas()}},{key:`borderColor`,get:function(){return this._borderColor},set:function(e){this._borderColor=e,this._genCanvas()}},{key:`offsetX`,get:function(){return this._offsetX},set:function(e){this._offsetX=e,this._genCanvas()}},{key:`offsetY`,get:function(){return this._offsetY},set:function(e){this._offsetY=e,this._genCanvas()}},{key:`fontFace`,get:function(){return this._fontFace},set:function(e){this._fontFace=e,this._genCanvas()}},{key:`fontSize`,get:function(){return this._fontSize},set:function(e){this._fontSize=e,this._genCanvas()}},{key:`fontWeight`,get:function(){return this._fontWeight},set:function(e){this._fontWeight=e,this._genCanvas()}},{key:`strokeWidth`,get:function(){return this._strokeWidth},set:function(e){this._strokeWidth=e,this._genCanvas()}},{key:`strokeColor`,get:function(){return this._strokeColor},set:function(e){this._strokeColor=e,this._genCanvas()}},{key:`_genCanvas`,value:function(){var e=this,t=this._canvas,n=t.getContext(`2d`),r=1/this.textHeight,i=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],a=i.map(function(t){return t*e.fontSize*r}),o=(Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius]).map(function(t){return t*e.fontSize*r}),s=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],c=s.map(function(t){return t*e.fontSize*r}),l=[this.offsetX,this.offsetY].map(function(t){return t*e.fontSize*r}),u=this.text.split(`
`),d=`${this.fontWeight} ${this.fontSize}px ${this.fontFace}`;n.font=d;var f=Math.max.apply(Math,pi(u.map(function(e){return n.measureText(e).width}))),p=this.fontSize*u.length,m=f+a[0]*2+c[0]*2,h=p+a[1]*2+c[1]*2;if(t.width=m+Math.abs(l[0]),t.height=h+Math.abs(l[1]),n.translate.apply(n,pi(l.map(function(e){return Math.max(0,e)}))),this.borderWidth){if(n.strokeStyle=this.borderColor,a[0]){var g=a[0]/2;n.lineWidth=a[0],n.beginPath(),n.moveTo(g,o[0]),n.lineTo(g,h-o[3]),n.moveTo(m-g,o[1]),n.lineTo(m-g,h-o[2]),n.stroke()}if(a[1]){var _=a[1]/2;n.lineWidth=a[1],n.beginPath(),n.moveTo(Math.max(a[0],o[0]),_),n.lineTo(m-Math.max(a[0],o[1]),_),n.moveTo(Math.max(a[0],o[3]),h-_),n.lineTo(m-Math.max(a[0],o[2]),h-_),n.stroke()}if(this.borderRadius){var v=Math.max.apply(Math,pi(a)),y=v/2;n.lineWidth=v,n.beginPath(),[!!o[0]&&[o[0],y,y,o[0]],!!o[1]&&[m-o[1],m-y,y,o[1]],!!o[2]&&[m-o[2],m-y,h-y,h-o[2]],!!o[3]&&[o[3],y,h-y,h-o[3]]].filter(function(e){return e}).forEach(function(e){var t=fi(e,4),r=t[0],i=t[1],a=t[2],o=t[3];n.moveTo(r,a),n.quadraticCurveTo(i,a,i,o)}),n.stroke()}}this.backgroundColor&&(n.fillStyle=this.backgroundColor,this.borderRadius?(n.beginPath(),n.moveTo(a[0],o[0]),[[a[0],o[0],m-o[1],a[1],a[1],a[1]],[m-a[0],m-a[0],m-a[0],a[1],o[1],h-o[2]],[m-a[0],m-o[2],o[3],h-a[1],h-a[1],h-a[1]],[a[0],a[0],a[0],h-a[1],h-o[3],o[0]]].forEach(function(e){var t=fi(e,6),r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5];n.quadraticCurveTo(r,o,i,s),n.lineTo(a,c)}),n.closePath(),n.fill()):n.fillRect(a[0],a[1],m-a[0]*2,h-a[1]*2)),n.translate.apply(n,pi(a)),n.translate.apply(n,pi(c)),n.font=d,n.fillStyle=this.color,n.textBaseline=`bottom`;var b=this.strokeWidth>0;b&&(n.lineWidth=this.strokeWidth*this.fontSize/10,n.strokeStyle=this.strokeColor),u.forEach(function(t,r){var i=(f-n.measureText(t).width)/2,a=(r+1)*e.fontSize;b&&n.strokeText(t,i,a),n.fillText(t,i,a)}),this.material.map&&this.material.map.dispose();var x=this.material.map=new _i.CanvasTexture(t);x.colorSpace=_i.SRGBColorSpace;var S=this.textHeight*u.length+i[1]*2+s[1]*2+Math.abs(this.offsetY);this.scale.set(S*t.width/t.height,S,0)}},{key:`clone`,value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:`copy`,value:function(e){return _i.Sprite.prototype.copy.call(this,e),this.color=e.color,this.backgroundColor=e.backgroundColor,this.padding=e.padding,this.borderWidth=e.borderWidth,this.borderColor=e.borderColor,this.offsetX=e.offsetX,this.offsetY=e.offsetY,this.fontFace=e.fontFace,this.fontSize=e.fontSize,this.fontWeight=e.fontWeight,this.strokeWidth=e.strokeWidth,this.strokeColor=e.strokeColor,this}}])}(_i.Sprite),$=r(),yi={hospital:`#00f0ff`,diagnosis:`#ff2d95`,category:`#a855f7`};function bi(){let e=(0,ce.useRef)(null),t=(0,ce.useRef)(null),[n,r]=(0,ce.useState)(!1),[a,o]=(0,ce.useState)(null),s=(0,ce.useRef)(E()).current;return(0,ce.useEffect)(()=>{let n=e.current;if(!n)return;let i=new Jr(n,{controlType:`orbit`}).graphData(s).backgroundColor(`#070a12`).showNavInfo(!1).nodeId(`id`).nodeLabel(e=>`${e.name} · ${e.group}`).nodeVal(e=>e.val).nodeColor(e=>yi[e.group]).nodeOpacity(.92).linkWidth(e=>Math.max(.4,(e.weight??1)*.35)).linkColor(()=>`rgba(0,240,255,0.28)`).linkOpacity(.55).linkDirectionalParticles(2).linkDirectionalParticleWidth(1.2).linkDirectionalParticleSpeed(.006).onNodeClick(e=>o(e)).nodeThreeObject(e=>{let t=e,n=new vi(t.name);return n.color=yi[t.group],n.textHeight=t.group===`hospital`?3.2:2.4,n.backgroundColor=`rgba(7,10,18,0.55)`,n.padding=2,n.borderRadius=3,n}).nodeThreeObjectExtend(!0);i.d3Force(`charge`)?.strength(-180),i.d3Force(`link`)?.distance(48),t.current=i,r(!0);let a=()=>{e.current&&(i.width(e.current.clientWidth),i.height(e.current.clientHeight))};a();let c=new ResizeObserver(a);return c.observe(n),()=>{c.disconnect(),i._destructor?.(),t.current=null}},[s]),(0,$.jsxs)(`div`,{className:`viewport-canvas`,children:[!n&&(0,$.jsx)(i,{label:`Laying out hospital ↔ diagnosis graph…`}),(0,$.jsx)(`div`,{ref:e,style:{width:`100%`,height:`100%`}}),(0,$.jsx)(`div`,{className:`hud-hint`,children:`hospitals · diagnoses · categories — drag nodes`}),(0,$.jsx)(`div`,{className:`legend`,children:[[`hospital`,`Hospital`],[`diagnosis`,`Diagnosis`],[`category`,`Category`]].map(([e,t])=>(0,$.jsxs)(`span`,{className:`legend-item`,children:[(0,$.jsx)(`span`,{className:`legend-swatch`,style:{background:yi[e]}}),t]},e))}),a&&(0,$.jsxs)(`aside`,{className:`side-panel`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`h2`,{children:a.name}),(0,$.jsx)(`button`,{type:`button`,className:`close-btn`,onClick:()=>o(null),children:`×`})]}),(0,$.jsxs)(`dl`,{className:`kv`,children:[(0,$.jsx)(`dt`,{children:`Group`}),(0,$.jsx)(`dd`,{style:{color:yi[a.group]},children:a.group}),(0,$.jsx)(`dt`,{children:`Weight`}),(0,$.jsx)(`dd`,{children:a.val}),(0,$.jsx)(`dt`,{children:`ID`}),(0,$.jsx)(`dd`,{children:a.id})]})]})]})}export{bi as ForceGraphDemo};
//# sourceMappingURL=ForceGraphDemo-CjJ5VbW5.js.map