import{ar as m,j as D,as as I,Q as L,at as p,o as c,h as R,k as O,v as f,w as V,au as H,av as M,M as Y,A as j,aw as k,d as C,y as P,i as w,p as $,T as B,B as Q,a as W}from"./BmosVzqU.js";import{b as q,r as A,h,c as z}from"./vMUy-l4-.js";const F=["touchstart","touchmove"];function G(t){return F.includes(t)}let N=!0;function X(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function J(t,e){return S(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const r=e.target,_=w,l=f;try{for(var a=D(r);a&&(a.nodeType!==8||a.data!==I);)a=L(a);if(!a)throw p;c(!0),R(a),O();const d=S(t,{...e,anchor:a});if(f===null||f.nodeType!==8||f.data!==V)throw H(),p;return c(!1),d}catch(d){if(d===p)return e.recover===!1&&M(),m(),Y(r),c(!1),J(t,e);throw d}finally{c(_),R(l)}}const i=new Map;function S(t,{target:e,anchor:r,props:_={},events:l,context:a,intro:d=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var u=G(n);e.addEventListener(n,h,{passive:u});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:u}),i.set(n,1)):i.set(n,T+1)}}};y(j(q)),A.add(y);var g=void 0,b=k(()=>{var o=r??e.appendChild(C());return P(()=>{if(a){$({});var s=B;s.c=a}l&&(_.$$events=l),w&&z(o,null),N=d,g=t(o,_)||{},N=!0,w&&(Q.nodes_end=f),a&&W()}),()=>{var u;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}A.delete(y),o!==r&&((u=o.parentNode)==null||u.removeChild(o))}});return E.set(g,b),g}let E=new WeakMap;function x(t,e){const r=E.get(t);return r?(E.delete(t),r(e)):Promise.resolve()}export{N as a,Z as h,J as m,X as s,x as u};
