import{V as ae,F as se,W as F,X as oe,s as re,f as y,a as S,g as w,h as B,c as E,d as f,j,i as A,w as b,J as le,l as v,m as C,n as I,Y as $,L as h}from"../chunks/scheduler.764f6154.js";import{g as ce,t as V,c as de,a as J,S as ie,i as ue,b as x,d as D,m as T,e as q}from"../chunks/index.97486945.js";import{p as _e,S as K,b as P,a as me,M as X,c as N,d as Y,n as z,V as G,t as R,h as M,u as pe,i as fe,j as H,k as be}from"../chunks/SendTransactionButton.5e36d6db.js";import{j as Q}from"../chunks/radixDappToolkit.10c92b31.js";function ge(o,e){const _=e.token={};function c(t,n,m,u){if(e.token!==_)return;e.resolved=u;let p=e.ctx;m!==void 0&&(p=p.slice(),p[m]=u);const r=t&&(e.current=t)(p);let i=!1;e.block&&(e.blocks?e.blocks.forEach((a,l)=>{l!==n&&a&&(ce(),V(a,1,1,()=>{e.blocks[l]===a&&(e.blocks[l]=null)}),de())}):e.block.d(1),r.c(),J(r,1),r.m(e.mount(),e.anchor),i=!0),e.block=r,e.blocks&&(e.blocks[n]=r),i&&oe()}if(ae(o)){const t=se();if(o.then(n=>{F(t),c(e.then,1,e.value,n),F(null)},n=>{if(F(t),c(e.catch,2,e.error,n),F(null),!e.hasCatch)throw n}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,o),!0;e.resolved=o}}function U(o){let e,_,c=o[0].componentAddress+"",t,n,m,u=JSON.stringify(o[0].addresses,null,2)+"",p,r,i,a=JSON.stringify(o[0].config,null,2)+"",l;return{c(){e=y("pre"),_=v("Component address: "),t=v(c),n=S(),m=y("pre"),p=v(u),r=S(),i=y("pre"),l=v(a)},l(s){e=w(s,"PRE",{});var d=B(e);_=C(d,"Component address: "),t=C(d,c),d.forEach(f),n=E(s),m=w(s,"PRE",{});var g=B(m);p=C(g,u),g.forEach(f),r=E(s),i=w(s,"PRE",{});var k=B(i);l=C(k,a),k.forEach(f)},m(s,d){A(s,e,d),b(e,_),b(e,t),A(s,n,d),A(s,m,d),b(m,p),A(s,r,d),A(s,i,d),b(i,l)},p(s,d){d&1&&c!==(c=s[0].componentAddress+"")&&I(t,c),d&1&&u!==(u=JSON.stringify(s[0].addresses,null,2)+"")&&I(p,u),d&1&&a!==(a=JSON.stringify(s[0].config,null,2)+"")&&I(l,a)},d(s){s&&(f(e),f(n),f(m),f(r),f(i))}}}function he(o){return{c:h,l:h,m:h,d:h}}function ke(o){let e,_,c;return{c(){e=y("pre"),_=v("VirtualAccountAddress: "),c=v(o[8])},l(t){e=w(t,"PRE",{});var n=B(e);_=C(n,"VirtualAccountAddress: "),c=C(n,o[8]),n.forEach(f)},m(t,n){A(t,e,n),b(e,_),b(e,c)},d(t){t&&f(e)}}}function Ae(o){return{c:h,l:h,m:h,d:h}}function $e(o){let e,_,c,t,n,m,u,p,r=o[0]&&U(o),i={ctx:o,current:null,token:null,hasCatch:!1,pending:Ae,then:ke,catch:he,value:8};return ge(_e.getVirtualAccountAddress(),i),n=new K({props:{text:"Buy All Blocks",buildManifestFn:o[4]}}),n.$on("transactionSucceeded",o[5]),n.$on("transactionFailed",ve),u=new K({props:{text:"Claim Block Payments",buildManifestFn:o[6]}}),u.$on("transactionSucceeded",o[7]),u.$on("transactionFailed",Ce),{c(){e=y("div"),r&&r.c(),_=S(),i.block.c(),c=S(),t=y("div"),x(n.$$.fragment),m=S(),x(u.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var l=B(e);r&&r.l(l),_=E(l),i.block.l(l),c=E(l),t=w(l,"DIV",{class:!0});var s=B(t);D(n.$$.fragment,s),m=E(s),D(u.$$.fragment,s),s.forEach(f),l.forEach(f),this.h()},h(){j(t,"class","flex gap-4"),j(e,"class","flex flex-col gap-4 w-2/3 m-auto p-8")},m(a,l){A(a,e,l),r&&r.m(e,null),b(e,_),i.block.m(e,i.anchor=null),i.mount=()=>e,i.anchor=c,b(e,c),b(e,t),T(n,t,null),b(t,m),T(u,t,null),p=!0},p(a,[l]){o=a,o[0]?r?r.p(o,l):(r=U(o),r.c(),r.m(e,_)):r&&(r.d(1),r=null)},i(a){p||(J(n.$$.fragment,a),J(u.$$.fragment,a),p=!0)},o(a){V(n.$$.fragment,a),V(u.$$.fragment,a),p=!1},d(a){a&&f(e),r&&r.d(),i.block.d(),i.token=null,i=null,q(n),q(u)}}}const ve=()=>"Buying blocks failed",Ce=()=>"Claiming payments failed";function ye(o,e,_){let c;const{currentBillboardComponent:t}=P;le(o,t,a=>_(0,c=a));function n(a,l){var O;const s=(O=$(Q))==null?void 0:O.address,d=$(t),g=d.config,k=be(a,l),W=me(g.block_image_config),L=$(t).addresses.owner_badge_global_id.split(":"),Z=L[0],ee=L[1];return new X().callMethod(s,"create_proof_of_non_fungibles",[N(Z),Y(G.NonFungibleLocalId,z(ee))]).callMethod(d.componentAddress,"update_config",[R(M(0),M(g.block_data_security_deposit_amount),W)]).callMethod(s,"withdraw",[N(d.xrdResourceAddress),M(0)]).takeAllFromWorktop(d.xrdResourceAddress,(te,ne)=>te.callMethod(d.componentAddress,"buy_block",[R(pe(k)),fe(ne)])).callMethod(d.componentAddress,"update_config",[R(M(g.block_price_xrd),M(g.block_data_security_deposit_amount),W)]).callMethod(s,"deposit_batch",[H("EntireWorktop")]).build()}function m(){var k;const a=(k=$(Q))==null?void 0:k.address,l=$(t),s=$(t).addresses.owner_badge_global_id.split(":"),d=s[0],g=s[1];return new X().callMethod(a,"create_proof_of_non_fungibles",[N(d),Y(G.NonFungibleLocalId,z(g))]).callMethod(l.componentAddress,"claim_block_payments",[]).callMethod(a,"deposit_batch",[H("EntireWorktop")]).build()}return[c,t,n,m,()=>({manifest:n(0,9999),message:"Buy blocks"}),async()=>P.refreshComponent(),()=>({manifest:m(),message:"Claim payments"}),async()=>P.refreshComponent()]}class Ee extends ie{constructor(e){super(),ue(this,e,ye,$e,re,{})}}export{Ee as component};
