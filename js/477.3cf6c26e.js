"use strict";(self["webpackChunkdropbox_front"]=self["webpackChunkdropbox_front"]||[]).push([[477],{9477:(t,o,e)=>{e.r(o),e.d(o,{default:()=>k});var a=e(3673);const l=(0,a.Uk)(" Dropbox ");function n(t,o,e,n,u,r){const p=(0,a.up)("q-toolbar-title"),s=(0,a.up)("q-btn"),c=(0,a.up)("q-toolbar"),i=(0,a.up)("q-header"),d=(0,a.up)("router-view"),f=(0,a.up)("q-page-container"),w=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(w,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{elevated:"",class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"text-center"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(s,{flat:"",icon:"logout",onClick:t.logout},null,8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1})])),_:1})}var u=e(3617),r=e(9582),p=e(9307);const s=(0,a.aZ)({name:"MainLayout",setup(){const t=(0,u.oR)(),o=(0,r.tv)(),e=async()=>(await p.api.post("auth/logout"),t.commit("generals/logout"),o.push("/login"));return{logout:e}}});var c=e(4260),i=e(3066),d=e(3812),f=e(9570),w=e(3747),b=e(2452),g=e(2652),m=e(7518),h=e.n(m);const Z=(0,c.Z)(s,[["render",n]]),k=Z;h()(s,"components",{QLayout:i.Z,QHeader:d.Z,QToolbar:f.Z,QToolbarTitle:w.Z,QBtn:b.Z,QPageContainer:g.Z})}}]);