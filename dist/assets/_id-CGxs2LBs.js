import{m as ye,V as q,u as _e,a as we,J as xe,_ as Ve}from"./JobCard-DGObO-LF.js";import{_ as Z,C as Ce,l as Se,V as j,D as Te,E as ke,F as Ie,A as Be,B as Pe,u as $e}from"./VBtn-Cw25gdns.js";import{a as Ee,V as F,f as We,d as Re,s as He,M as Xe}from"./index-BgGB88gO.js";import{q as B,v as L,k as l,x as w,y as C,a6 as z,p as E,a2 as ee,g as W,r as H,f as g,j as R,F as O,M as $,as as te,m as oe,b as ne,c as Ye,d as Me,W as je,ai as Le,s as D,B as Oe,R as ze,_ as ae,a0 as Ae,K as se,V as le,at as pe,$ as De,l as G,E as Ge,t as I,au as Fe,av as Je,aw as Ue,P as qe,z as A,a7 as N,a5 as p,a4 as Ne}from"./index-Bc3HnhzX.js";import{V as Ke,a as Qe}from"./JobSearch.vue_vue_type_style_index_0_scoped_7d12f499_lang-qgMQ2pdI.js";import{u as Ze}from"./useCompanys-DfjbrU4w.js";import{m as et,u as tt}from"./lazy-CvStTrZG.js";import{a as ot}from"./VNavigationDrawer-BLaNluUT.js";const nt={class:"profile-overview"},at={class:"profile-content d-flex"},st={class:"profile-img"},lt={class:"pt-10 ml-5 w-100 p-adjust m-adjust"},it={class:"text-h5 font-weight-bold mt-5"},ut={class:"text-subtitle-1 text-color font-weight-medium mt-1"},ct={class:"text-color mt-2",style:{"font-size":"14px","line-height":"20px"}},rt={__name:"ProfileOverview",props:{companyItem:{type:Object,default:{}}},setup(e){return(n,o)=>(B(),L("div",nt,[l(F,{"max-width":"1100"},{default:w(()=>{var t,s,u,a;return[C("div",at,[C("div",st,[l(Ee,{src:"data:image/png;base64,"+((t=e.companyItem)==null?void 0:t.logo),height:"150",width:"150",rounded:"lg"},null,8,["src"])]),C("div",lt,[C("div",it,z((s=e.companyItem)==null?void 0:s.name),1),C("div",ut,z((u=e.companyItem)==null?void 0:u.tagline),1),C("p",ct,z((a=e.companyItem)==null?void 0:a.description),1)])])]}),_:1})]))}},dt=Z(rt,[["__scopeId","data-v-d5e55bd1"]]),vt={class:"page-top"},mt={__name:"CommonHeroTop",setup(e){return(n,o)=>(B(),L("div",vt,[l(F)]))}},ft=Z(mt,[["__scopeId","data-v-12913a80"]]),J=Symbol.for("vuetify:v-tabs"),ht=E({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ee(Ce({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Y=W()({name:"VTab",props:ht(),setup(e,n){let{slots:o,attrs:t}=n;const{textColorClasses:s,textColorStyles:u}=Se(e,"sliderColor"),a=H(),v=H(),m=g(()=>e.direction==="horizontal"),i=g(()=>{var b,r;return((r=(b=a.value)==null?void 0:b.group)==null?void 0:r.isSelected.value)??!1});function x(b){var d,c;let{value:r}=b;if(r){const y=(c=(d=a.value)==null?void 0:d.$el.parentElement)==null?void 0:c.querySelector(".v-tab--selected .v-tab__slider"),k=v.value;if(!y||!k)return;const X=getComputedStyle(y).color,S=y.getBoundingClientRect(),T=k.getBoundingClientRect(),f=m.value?"x":"y",h=m.value?"X":"Y",_=m.value?"right":"bottom",V=m.value?"width":"height",me=S[f],fe=T[f],P=me>fe?S[_]-T[_]:S[f]-T[f],he=Math.sign(P)>0?m.value?"right":"bottom":Math.sign(P)<0?m.value?"left":"top":"center",ge=(Math.abs(P)+(Math.sign(P)<0?S[V]:T[V]))/Math.max(S[V],T[V])||0,be=S[V]/T[V]||0,U=1.5;Re(k,{backgroundColor:[X,"currentcolor"],transform:[`translate${h}(${P}px) scale${h}(${be})`,`translate${h}(${P/U}px) scale${h}(${(ge-1)/U+1})`,"none"],transformOrigin:Array(3).fill(he)},{duration:225,easing:He})}}return R(()=>{const b=j.filterProps(e);return l(j,$({symbol:J,ref:a,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},b,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...o,default:()=>{var r;return l(O,null,[((r=o.default)==null?void 0:r.call(o))??e.text,!e.hideSlider&&l("div",{ref:v,class:["v-tab__slider",s.value],style:u.value},null)])}})}),We({},a)}}),gt=e=>{const{touchstartX:n,touchendX:o,touchstartY:t,touchendY:s}=e,u=.5,a=16;e.offsetX=o-n,e.offsetY=s-t,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&o<n-a&&e.left(e),e.right&&o>n+a&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&s<t-a&&e.up(e),e.down&&s>t+a&&e.down(e))};function bt(e,n){var t;const o=e.changedTouches[0];n.touchstartX=o.clientX,n.touchstartY=o.clientY,(t=n.start)==null||t.call(n,{originalEvent:e,...n})}function yt(e,n){var t;const o=e.changedTouches[0];n.touchendX=o.clientX,n.touchendY=o.clientY,(t=n.end)==null||t.call(n,{originalEvent:e,...n}),gt(n)}function _t(e,n){var t;const o=e.changedTouches[0];n.touchmoveX=o.clientX,n.touchmoveY=o.clientY,(t=n.move)==null||t.call(n,{originalEvent:e,...n})}function wt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>bt(o,n),touchend:o=>yt(o,n),touchmove:o=>_t(o,n)}}function xt(e,n){var v;const o=n.value,t=o!=null&&o.parent?e.parentElement:e,s=(o==null?void 0:o.options)??{passive:!0},u=(v=n.instance)==null?void 0:v.$.uid;if(!t||!u)return;const a=wt(n.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[u]=a,te(a).forEach(m=>{t.addEventListener(m,a[m],s)})}function Vt(e,n){var u,a;const o=(u=n.value)!=null&&u.parent?e.parentElement:e,t=(a=n.instance)==null?void 0:a.$.uid;if(!(o!=null&&o._touchHandlers)||!t)return;const s=o._touchHandlers[t];te(s).forEach(v=>{o.removeEventListener(v,s[v])}),delete o._touchHandlers[t]}const ie={mounted:xt,unmounted:Vt},ue=Symbol.for("vuetify:v-window"),ce=Symbol.for("vuetify:v-window-group"),re=E({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...oe(),...ne(),...Ye()},"VWindow"),K=W()({name:"VWindow",directives:{Touch:ie},props:re(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{themeClasses:t}=Me(e),{isRtl:s}=je(),{t:u}=Le(),a=Te(e,ce),v=H(),m=g(()=>s.value?!e.reverse:e.reverse),i=D(!1),x=g(()=>{const f=e.direction==="vertical"?"y":"x",_=(m.value?!i.value:i.value)?"-reverse":"";return`v-window-${f}${_}-transition`}),b=D(0),r=H(void 0),d=g(()=>a.items.value.findIndex(f=>a.selected.value.includes(f.id)));Oe(d,(f,h)=>{const _=a.items.value.length,V=_-1;_<=2?i.value=f<h:f===V&&h===0?i.value=!0:f===0&&h===V?i.value=!1:i.value=f<h}),ze(ue,{transition:x,isReversed:i,transitionCount:b,transitionHeight:r,rootRef:v});const c=g(()=>e.continuous||d.value!==0),y=g(()=>e.continuous||d.value!==a.items.value.length-1);function k(){c.value&&a.prev()}function X(){y.value&&a.next()}const S=g(()=>{const f=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${m.value?"right":"left"}`,onClick:a.prev,"aria-label":u("$vuetify.carousel.prev")};f.push(c.value?o.prev?o.prev({props:h}):l(j,h,null):l("div",null,null));const _={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${m.value?"left":"right"}`,onClick:a.next,"aria-label":u("$vuetify.carousel.next")};return f.push(y.value?o.next?o.next({props:_}):l(j,_,null):l("div",null,null)),f}),T=g(()=>e.touch===!1?e.touch:{...{left:()=>{m.value?k():X()},right:()=>{m.value?X():k()},start:h=>{let{originalEvent:_}=h;_.stopPropagation()}},...e.touch===!0?{}:e.touch});return R(()=>ae(l(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var f,h;return[l("div",{class:"v-window__container",style:{height:r.value}},[(f=o.default)==null?void 0:f.call(o,{group:a}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[S.value])]),(h=o.additional)==null?void 0:h.call(o,{group:a})]}}),[[Ae("touch"),T.value]])),{group:a}}}),Ct=E({...ee(re(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),de=W()({name:"VTabsWindow",props:Ct(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const t=se(J,null),s=le(e,"modelValue"),u=g({get(){var a;return s.value!=null||!t?s.value:(a=t.items.value.find(v=>t.selected.value.includes(v.id)))==null?void 0:a.value},set(a){s.value=a}});return R(()=>{const a=K.filterProps(e);return l(K,$({_as:"VTabsWindow"},a,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),o)}),{}}}),ve=E({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...oe(),...ke(),...et()},"VWindowItem"),Q=W()({name:"VWindowItem",directives:{Touch:ie},props:ve(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:o}=n;const t=se(ue),s=Ie(e,ce),{isBooted:u}=pe();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=D(!1),v=g(()=>u.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function m(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function i(){var c;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=G((c=t.rootRef.value)==null?void 0:c.clientHeight)),t.transitionCount.value+=1)}function x(){m()}function b(c){a.value&&Ge(()=>{!v.value||!a.value||!t||(t.transitionHeight.value=G(c.clientHeight))})}const r=g(()=>{const c=t.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?t.transition.value:c,onBeforeEnter:i,onAfterEnter:m,onEnterCancelled:x,onBeforeLeave:i,onAfterLeave:m,onLeaveCancelled:x,onEnter:b}:!1}),{hasContent:d}=tt(e,s.isSelected);return R(()=>l(Xe,{transition:r.value,disabled:!u.value},{default:()=>{var c;return[ae(l("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[d.value&&((c=o.default)==null?void 0:c.call(o))]),[[De,s.isSelected.value]])]}})),{groupItem:s}}}),St=E({...ve()},"VTabsWindowItem"),M=W()({name:"VTabsWindowItem",props:St(),setup(e,n){let{slots:o}=n;return R(()=>{const t=Q.filterProps(e);return l(Q,$({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),o)}),{}}});function Tt(e){return e?e.map(n=>Je(n)?n:{text:n,value:n}):[]}const kt=E({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ye({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Be(),...ne()},"VTabs"),It=W()({name:"VTabs",props:kt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:o,slots:t}=n;const s=le(e,"modelValue"),u=g(()=>Tt(e.items)),{densityClasses:a}=Pe(e),{backgroundColorClasses:v,backgroundColorStyles:m}=$e(I(e,"bgColor")),{scopeId:i}=ot();return Fe({VTab:{color:I(e,"color"),direction:I(e,"direction"),stacked:I(e,"stacked"),fixed:I(e,"fixedTabs"),sliderColor:I(e,"sliderColor"),hideSlider:I(e,"hideSlider")}}),R(()=>{const x=q.filterProps(e),b=!!(t.window||e.items.length>0);return l(O,null,[l(q,$(x,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,v.value,e.class],style:[{"--v-tabs-height":G(e.height)},m.value,e.style],role:"tablist",symbol:J},i,o),{default:()=>{var r;return[((r=t.default)==null?void 0:r.call(t))??u.value.map(d=>{var c;return((c=t.tab)==null?void 0:c.call(t,{item:d}))??l(Y,$(d,{key:d.text,value:d.value}),{default:t[`tab.${d.value}`]?()=>{var y;return(y=t[`tab.${d.value}`])==null?void 0:y.call(t,{item:d})}:void 0})})]}}),b&&l(de,$({modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,key:"tabs-window"},i),{default:()=>{var r;return[u.value.map(d=>{var c;return((c=t.item)==null?void 0:c.call(t,{item:d}))??l(M,{value:d.value},{default:()=>{var y;return(y=t[`item.${d.value}`])==null?void 0:y.call(t,{item:d})}})}),(r=t.window)==null?void 0:r.call(t)]}})])}),{}}}),Bt={class:"product-overview"},jt={__name:":id",setup(e){const n=H(null),t=Ue().params.id,s=Ze(),u=_e(),a=g(()=>u.posts),v=g(()=>s.company);return qe(()=>{u.fetchCompanyPosts(t),s.fetchCompany(t)}),(m,i)=>{const x=ft,b=dt,r=we,d=Ve;return B(),L(O,null,[l(x),l(b,{"company-item":v.value},null,8,["company-item"]),l(r),l(F,null,{default:w(()=>[C("div",Bt,[l(It,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c)},{default:w(()=>[l(Y,{value:"description"},{default:w(()=>i[2]||(i[2]=[A("Jobs")])),_:1}),l(Y,{value:"overview"},{default:w(()=>i[3]||(i[3]=[A("Overview")])),_:1}),l(Y,{value:"review"},{default:w(()=>i[4]||(i[4]=[A("Reviews")])),_:1})]),_:1},8,["modelValue"]),l(de,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=c=>n.value=c),class:"pa-0"},{default:w(()=>[l(M,{value:"description"},{default:w(()=>[N(u).loadingPosts?(B(),p(xe,{key:0})):(B(),p(Ke,{key:1,class:"mt-5"},{default:w(()=>[(B(!0),L(O,null,Ne(a.value,(c,y)=>(B(),p(Qe,{lg:"4",md:"6",sm:"6",cols:"12",key:y},{default:w(()=>[l(d,{"job-item":c,onClick:k=>N(u).drawerHandeler(c.id)},null,8,["job-item","onClick"])]),_:2},1024))),128))]),_:1}))]),_:1}),l(M,{value:"overview"},{default:w(()=>i[5]||(i[5]=[C("div",{class:"text-h4 mt-10 font-weight-bold"},"Comming Sooon .",-1)])),_:1}),l(M,{value:"review"},{default:w(()=>i[6]||(i[6]=[C("div",{class:"text-h4 mt-10 font-weight-bold"},"Comming Sooon .",-1)])),_:1})]),_:1},8,["modelValue"])])]),_:1})],64)}}};export{jt as default};
