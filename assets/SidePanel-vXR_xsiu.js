import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,n}from"./index-BoPxvYu7.js";import{Ht as r,Kr as i,Lt as a,O as o,Vt as s,Wt as c,X as l,Yr as u,c as d,fn as f,gr as p,s as m,sn as h,st as g}from"./generators-k8123LAy.js";import{a as _,c as v,o as y}from"./OrbitControls-C8lopxV5.js";var b={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},x={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},S=e(t()),C=(e,t)=>{e.updateRanges[0]=t};function w(e){return typeof e==`function`}var T=new s,E=new s,D=[],O=new r,k=class extends g{constructor(){super(),this.color=new o(`white`),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){return this.instance.current?.geometry}raycast(e,t){let n=this.instance.current;if(!n||!n.geometry||!n.material)return;O.geometry=n.geometry;let r=n.matrixWorld,i=n.userData.instances.indexOf(this.instanceKey);if(!(i===-1||i>n.count)){n.getMatrixAt(i,T),E.multiplyMatrices(r,T),O.matrixWorld=E,n.material instanceof a?O.material.side=n.material.side:O.material.side=n.material[0].side,O.raycast(e,D);for(let e=0,n=D.length;e<n;e++){let n=D[e];n.instanceId=i,n.object=this,t.push(n)}D.length=0}}},A=S.createContext(null),j=new s,M=new s,N=new s,P=new i,F=new f,I=new i,L=e=>e.isInstancedBufferAttribute,R=S.forwardRef(({context:e,children:t,...n},r)=>{S.useMemo(()=>_({PositionMesh:k}),[]);let i=S.useRef(null);S.useImperativeHandle(r,()=>i.current,[]);let{subscribe:a,getParent:o}=S.useContext(e||A);return S.useLayoutEffect(()=>a(i),[]),S.createElement(`positionMesh`,d({instance:o(),instanceKey:i,ref:i},n),t)}),z=S.forwardRef(({context:e,children:t,range:n,limit:r=1e3,frames:i=1/0,...a},o)=>{let[{localContext:s,instance:c}]=S.useState(()=>{let e=S.createContext(null);return{localContext:e,instance:S.forwardRef((t,n)=>S.createElement(R,d({context:e},t,{ref:n})))}}),u=S.useRef(null);S.useImperativeHandle(o,()=>u.current,[]);let[f,p]=S.useState([]),[[m,h]]=S.useState(()=>{let e=new Float32Array(r*16);for(let t=0;t<r;t++)N.identity().toArray(e,t*16);return[e,new Float32Array([...Array(r*3)].map(()=>1))]});S.useEffect(()=>{u.current.instanceMatrix.needsUpdate=!0});let g=0,_=0,v=S.useRef([]);S.useLayoutEffect(()=>{v.current=Object.entries(u.current.geometry.attributes).filter(([e,t])=>L(t))}),y(()=>{if(i===1/0||g<i){u.current.updateMatrix(),u.current.updateMatrixWorld(),j.copy(u.current.matrixWorld).invert(),_=Math.min(r,n===void 0?r:n,f.length),u.current.count=_,C(u.current.instanceMatrix,{start:0,count:_*16}),C(u.current.instanceColor,{start:0,count:_*3});for(let e=0;e<f.length;e++){let t=f[e].current;t.matrixWorld.decompose(P,F,I),M.compose(P,F,I).premultiply(j),M.toArray(m,e*16),u.current.instanceMatrix.needsUpdate=!0,t.color.toArray(h,e*3),u.current.instanceColor.needsUpdate=!0}g++}});let b=S.useMemo(()=>({getParent:()=>u,subscribe:e=>(p(t=>[...t,e]),()=>p(t=>t.filter(t=>t.current!==e.current)))}),[]);return S.createElement(`instancedMesh`,d({userData:{instances:f,limit:r,frames:i},matrixAutoUpdate:!1,ref:u,args:[null,null,0],raycast:()=>null},a),S.createElement(`instancedBufferAttribute`,{attach:`instanceMatrix`,args:[m,16],usage:l}),S.createElement(`instancedBufferAttribute`,{attach:`instanceColor`,args:[h,3],usage:l}),w(t)?S.createElement(s.Provider,{value:b},t(c)):e?S.createElement(e.Provider,{value:b},t):S.createElement(A.Provider,{value:b},t))}),B=S.forwardRef(({scale:e=10,frames:t=1/0,opacity:n=1,width:i=1,height:a=1,blur:s=1,near:l=0,far:f=10,resolution:m=512,smooth:g=!0,color:_=`#000000`,depthWrite:C=!1,renderOrder:w,...T},E)=>{let D=S.useRef(null),O=v(e=>e.scene),k=v(e=>e.gl),A=S.useRef(null);i*=Array.isArray(e)?e[0]:e||1,a*=Array.isArray(e)?e[1]:e||1;let[j,M,N,P,F,I,L]=S.useMemo(()=>{let e=new u(m,m),t=new u(m,m);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let n=new h(i,a).rotateX(Math.PI/2),s=new r(n),l=new c;l.depthTest=l.depthWrite=!1,l.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new o(_)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let d=new p(b),f=new p(x);return f.depthTest=d.depthTest=!1,[e,n,l,s,d,f,t]},[m,i,a,e,_]),R=e=>{P.visible=!0,P.material=F,F.uniforms.tDiffuse.value=j.texture,F.uniforms.h.value=e*1/256,k.setRenderTarget(L),k.render(P,A.current),P.material=I,I.uniforms.tDiffuse.value=L.texture,I.uniforms.v.value=e*1/256,k.setRenderTarget(j),k.render(P,A.current),P.visible=!1},z=0,B,V;return y(()=>{A.current&&(t===1/0||z<t)&&(z++,B=O.background,V=O.overrideMaterial,D.current.visible=!1,O.background=null,O.overrideMaterial=N,k.setRenderTarget(j),k.render(O,A.current),R(s),g&&R(s*.4),k.setRenderTarget(null),D.current.visible=!0,O.overrideMaterial=V,O.background=B)}),S.useImperativeHandle(E,()=>D.current,[]),S.createElement(`group`,d({"rotation-x":Math.PI/2},T,{ref:D}),S.createElement(`mesh`,{renderOrder:w,geometry:M,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},S.createElement(`meshBasicMaterial`,{transparent:!0,map:j.texture,opacity:n,depthWrite:C})),S.createElement(`orthographicCamera`,{ref:A,args:[-i/2,i/2,a/2,-a/2,l,f]}))}),V=n();function H({row:e,onClose:t,title:n=`Oracle-ish row`}){if(!e)return null;let r=m[e.category];return(0,V.jsxs)(`aside`,{className:`side-panel`,role:`dialog`,"aria-label":n,children:[(0,V.jsxs)(`header`,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h2`,{children:n}),(0,V.jsx)(`div`,{style:{marginTop:6},children:(0,V.jsx)(`span`,{className:`cat-pill`,style:{color:r,borderColor:r},children:e.category})})]}),(0,V.jsx)(`button`,{type:`button`,className:`close-btn`,onClick:t,"aria-label":`Close`,children:`×`})]}),(0,V.jsxs)(`dl`,{className:`kv`,children:[(0,V.jsx)(`dt`,{children:`ID`}),(0,V.jsx)(`dd`,{children:e.id}),(0,V.jsx)(`dt`,{children:`Hospital`}),(0,V.jsx)(`dd`,{children:e.hospital}),(0,V.jsx)(`dt`,{children:`Province`}),(0,V.jsx)(`dd`,{children:e.province}),(0,V.jsx)(`dt`,{children:`Diagnosis`}),(0,V.jsx)(`dd`,{children:e.diagnosis}),(0,V.jsx)(`dt`,{children:`Metric`}),(0,V.jsx)(`dd`,{children:e.metric}),(0,V.jsx)(`dt`,{children:`Beds`}),(0,V.jsx)(`dd`,{children:e.beds}),(0,V.jsx)(`dt`,{children:`Lat / Lng`}),(0,V.jsxs)(`dd`,{children:[e.lat.toFixed(3),`, `,e.lng.toFixed(3)]}),(0,V.jsx)(`dt`,{children:`Timestamp`}),(0,V.jsxs)(`dd`,{style:{fontFamily:`var(--font-mono)`,fontSize:`0.72rem`},children:[e.timestamp.replace(`T`,` `).slice(0,16),` Z`]})]})]})}export{z as i,B as n,R as r,H as t};
//# sourceMappingURL=SidePanel-vXR_xsiu.js.map