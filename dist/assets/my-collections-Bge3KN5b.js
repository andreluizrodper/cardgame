import{a as x,L as v}from"./loading-CUEBrxO7.js";import{E as m,_ as l,o,c,a as e,r as n,t as d,b as r,h as g,w as y,F as b,m as $}from"./index-zeHrmG7h.js";import{u as w}from"./deck-CUCn8pJl.js";import{H as D,E as M,G as L,S as E,M as j}from"./mana-BkQ1J12w.js";/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=m("SquarePenIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-vue-next v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=m("TrashIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),S={},V={class:"bg-stone-200 flex items-center h-36"},C=e("img",{src:x,class:"h-36 w-full object-cover object-center"},null,-1),z=[C];function B(_,a){return o(),c("div",V,z)}const oe=l(S,[["render",B]]),I={props:{deck:{type:Object}},components:{Layers3:v,Trash:T,Edit:H},emits:["updateDecks"],methods:{archiveDeck(){this.$store.commit("setDialog",{title:"Do you want to archive this deck?",action:()=>this.doArchiveDeck()})},async doArchiveDeck(){await w({id:this.deck.id,data:{archived:!0}}),this.$emit("updateDecks")}}},N={class:"border rounded bg-white text-gray-900"},q={class:"flex flex-col gap-2 p-4 h-44 bg-stone-400 justify-end"},A={class:"flex gap-2 w-full justify-between border-t p-4"},F={class:"flex gap-2 items-center"},G={class:"flex gap-2"};function P(_,a,t,u,h,p){const s=n("Layers3"),i=n("Edit"),f=n("router-link"),k=n("Trash");return o(),c("div",N,[e("div",q,d(t.deck.data().name),1),e("div",A,[e("div",F,[r(s,{size:"16"}),g(" "+d(t.deck.data().cards.length),1)]),e("div",G,[r(f,{to:{name:"deck-editor",params:{id:t.deck.id}},class:"border rounded px-2 py-1"},{default:y(()=>[r(i,{size:"16"})]),_:1},8,["to"]),e("button",{onClick:a[0]||(a[0]=X=>p.archiveDeck(t.deck)),class:"border rounded px-2 py-1"},[r(k,{size:"16"})])])])])}const ce=l(I,[["render",P]]),O={data(){return{collections:[D,M,L,E,j]}}},Z={class:"flex bg-stone-600 text-white flex-col gap-4 pt-6"},J=e("p",{class:"text-sm px-4"},"My collections",-1),K={class:"flex overflow-auto gap-2 px-4 pb-6"},Q=["src"],R={class:"px-2 py-2 bg-stone-50 text-gray-800 flex flex-col gap-1"},U={class:"text-xs"};function W(_,a,t,u,h,p){return o(),c("div",Z,[J,e("div",K,[(o(!0),c(b,null,$(h.collections,(s,i)=>(o(),c("div",{key:i,class:"border rounded overflow-hidden min-w-32"},[e("img",{src:s.artwork},null,8,Q),e("div",R,[e("span",null,d(s.name),1),e("span",U,d(s.cards.length)+" cards",1)])]))),128))])])}const ae=l(O,[["render",W]]);export{oe as H,ce as L,ae as M,T};
