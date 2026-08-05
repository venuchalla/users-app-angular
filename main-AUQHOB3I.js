import{a as cn}from"./chunk-GNWDLQQE.js";import{a as dl,b as Tt,c as xe,d as Fr,e as ao,f as ml,g as ul,h as fl,i as hl,j as pl,k as gl,l as Nr,m as so,n as _l,o as Qt,p as bl,q as vl,r as Lr,s as Br,t as yl,u as fe,v as wi}from"./chunk-IRCXEXBW.js";import{a as xl,b as Si,c as Cl,d as El,e as Ti,f as wl,g as Di,h as Sl,l as Oe}from"./chunk-WEWGC5I5.js";import{b as io,c as Js,d as tl,e as no,f as de,g as Ei,h as el,i as il,j as Ae,k as nl,l as ol,m as me,n as oo,o as rl,p as al,q as Or,r as ro,s as sl,t as Ir,u as Pr,v as Re,w as ue,x as ll,y as cl}from"./chunk-7QKWQ6XU.js";import{$ as Z,$a as zs,$b as bt,A as Kt,Aa as Ge,Ab as Us,B as nt,Bc as Ks,C as Cr,Ca as on,Cc as Ys,D as ui,Dc as Qs,E as As,Ea as ve,Ec as sn,F as Gn,Fa as ye,Fb as an,Fc as Xs,G as At,Gb as _t,Gc as to,H as Rs,Ha as H,Hb as rt,I as Os,Ib as at,J as Er,Ja as Kn,Jb as Xn,Jc as ce,K as Is,Kb as Zn,La as _i,Lb as Me,Lc as gt,Ma as qe,Mb as ke,Mc as ln,N as wr,Na as Bs,Nb as J,Nc as Zs,Ob as p,Oc as eo,P as Ps,Pb as h,Q as Sr,Qb as R,Rb as T,S as Fs,Sb as M,T as Ns,Tb as Lt,U as Tr,Ub as kr,V as fi,Vb as Ar,W as be,Wb as $e,X as qn,Xb as Wt,Y as ht,Yb as I,Zb as Ke,_ as nn,_b as lt,a as S,ab as Yn,ac as et,b as It,ba as Dr,bb as js,bc as bi,c as Es,ca as x,cc as St,da as L,db as b,dc as G,e as mi,ec as q,fa as D,fc as Ws,g as ee,ga as B,gc as Gs,h as V,ha as c,hb as Vs,hc as Rr,i as ws,ia as hi,ib as Ut,ic as vi,j as tn,ja as $n,jb as rn,jc as $,k as Ss,ka as Ls,kb as Pt,kc as Ye,l as Un,lb as Mt,lc as f,m as Ts,ma as pi,mb as z,mc as Rt,nc as vt,o as Ct,oa as Ue,ob as Yt,oc as qs,pa as We,pb as Mr,pc as yi,qc as xi,rc as Ci,s as Ds,sa as tt,sb as v,sc as $s,t as Et,ta as it,tb as j,tc as se,u as Ms,ub as F,uc as Qe,v as en,vb as Qn,vc as Xe,wa as wt,wb as Hs,wc as le,x as ks,xa as O,xb as Nt,y as Wn,ya as gi,yb as ft,zc as Jn}from"./chunk-ULUS5VI7.js";var Lu={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},lo="__@ngrx/effects_create__";function Tl(i,n={}){let t=n.functional?i:i(),e=S(S({},Lu),n);return Object.defineProperty(t,lo,{value:e}),t}function Bu(i){return Object.getOwnPropertyNames(i).filter(e=>i[e]&&i[e].hasOwnProperty(lo)?i[e][lo].hasOwnProperty("dispatch"):!1).map(e=>{let o=i[e][lo];return S({propertyName:e},o)})}function zu(i){return Bu(i)}function Dl(i){return Object.getPrototypeOf(i)}function ju(i){return!!i.constructor&&i.constructor.name!=="Object"&&i.constructor.name!=="Function"}function Ml(i){return typeof i=="function"}function Vu(i){return i.filter(Ml)}function Hu(i,n,t){let e=Dl(i),r=!!e&&e.constructor.name!=="Object"?e.constructor.name:null,a=zu(i).map(({propertyName:s,dispatch:l,useEffectsErrorHandler:d})=>{let u=typeof i[s]=="function"?i[s]():i[s],m=d?t(u,n):u;return l===!1?m.pipe(Rs()):m.pipe(Ps()).pipe(Et(E=>({effect:i[s],notification:E,propertyName:s,sourceName:r,sourceInstance:i})))});return Kt(...a)}var Uu=10;function kl(i,n,t=Uu){return i.pipe(ui(e=>(n&&n.handleError(e),t<=1?i:kl(i,n,t-1))))}var Al=(()=>{class i extends ee{constructor(t){super(),t&&(this.source=t)}lift(t){let e=new i;return e.source=this,e.operator=t,e}static{this.\u0275fac=function(e){return new(e||i)(B(so))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Rl(...i){return nt(n=>i.some(t=>typeof t=="string"?t===n.type:t.type===n.type))}var Wu=new D("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>kl}),Gu="@ngrx/effects/init",qu=Tt(Gu);function $u(i,n){if(i.notification.kind==="N"){let t=i.notification.value;!Ku(t)&&n.handleError(new Error(`Effect ${Yu(i)} dispatched an invalid action: ${Qu(t)}`))}}function Ku(i){return typeof i!="function"&&i&&i.type&&typeof i.type=="string"}function Yu({propertyName:i,sourceInstance:n,sourceName:t}){let e=typeof n[i]=="function";return!!t?`"${t}.${String(i)}${e?"()":""}"`:`"${String(i)}()"`}function Qu(i){try{return JSON.stringify(i)}catch(n){return i}}var Xu="ngrxOnIdentifyEffects";function Zu(i){return zr(i,Xu)}var Ju="ngrxOnRunEffects";function tf(i){return zr(i,Ju)}var ef="ngrxOnInitEffects";function nf(i){return zr(i,ef)}function zr(i,n){return i&&n in i&&typeof i[n]=="function"}var Ol=(()=>{class i extends V{constructor(t,e){super(),this.errorHandler=t,this.effectsErrorHandler=e}addEffects(t){this.next(t)}toActions(){return this.pipe(wr(t=>ju(t)?Dl(t):t),en(t=>t.pipe(wr(of))),en(t=>{let e=t.pipe(Is(r=>rf(this.errorHandler,this.effectsErrorHandler)(r)),Et(r=>($u(r,this.errorHandler),r.notification)),nt(r=>r.kind==="N"&&r.value!=null),Os()),o=t.pipe(At(1),nt(nf),Et(r=>r.ngrxOnInitEffects()));return Kt(e,o)}))}static{this.\u0275fac=function(e){return new(e||i)(B(gi),B(Wu))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function of(i){return Zu(i)?i.ngrxOnIdentifyEffects():""}function rf(i,n){return t=>{let e=Hu(t,i,n);return tf(t)?t.ngrxOnRunEffects(e):e}}var af=(()=>{class i{get isStarted(){return!!this.effectsSubscription}constructor(t,e){this.effectSources=t,this.store=e,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(e){return new(e||i)(B(Ol),B(Qt))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function Il(...i){let n=i.flat(),t=Vu(n);return hi([t,$n(()=>{c(fl),c(hl,{optional:!0});let e=c(af),o=c(Ol),r=!e.isStarted;r&&e.start();for(let a of n){let s=Ml(a)?c(a):a;o.addEffects(s)}r&&c(Qt).dispatch(qu())})])}var Ll="@ngrx/router-store/request",L_=Tt(Ll,xe()),jr="@ngrx/router-store/navigation",B_=Tt(jr,xe()),Vr="@ngrx/router-store/cancel",z_=Tt(Vr,xe()),Hr="@ngrx/router-store/error",j_=Tt(Hr,xe()),Bl="@ngrx/router-store/navigated",V_=Tt(Bl,xe());function zl(i,n){let t=n;switch(t.type){case jr:case Hr:case Vr:return{state:t.payload.routerState,navigationId:t.payload.event.id};default:return i}}var co=class{serialize(n){return{root:this.serializeRoute(n.root),url:n.url}}serializeRoute(n){let t=n.children.map(e=>this.serializeRoute(e));return{params:n.params,data:n.data,url:n.url,outlet:n.outlet,title:n.title,routeConfig:n.routeConfig?{path:n.routeConfig.path,pathMatch:n.routeConfig.pathMatch,redirectTo:n.routeConfig.redirectTo,outlet:n.routeConfig.outlet,title:typeof n.routeConfig.title=="string"?n.routeConfig.title:void 0}:null,queryParams:n.queryParams,fragment:n.fragment,firstChild:t[0],children:t}}},Ur=(function(i){return i[i.PreActivation=1]="PreActivation",i[i.PostActivation=2]="PostActivation",i})(Ur||{}),lf="router",Pl=new D("@ngrx/router-store Internal Configuration"),jl=new D("@ngrx/router-store Configuration"),Wr=(function(i){return i[i.Full=0]="Full",i[i.Minimal=1]="Minimal",i})(Wr||{});function cf(i){return S({stateKey:lf,serializer:co,navigationActionTiming:Ur.PreActivation},i)}var mo=class{serialize(n){return{root:this.serializeRoute(n.root),url:n.url}}serializeRoute(n){let t=n.children.map(e=>this.serializeRoute(e));return{params:n.params,paramMap:n.paramMap,data:n.data,url:n.url,outlet:n.outlet,title:n.title,routeConfig:n.routeConfig?{component:n.routeConfig.component,path:n.routeConfig.path,pathMatch:n.routeConfig.pathMatch,redirectTo:n.routeConfig.redirectTo,outlet:n.routeConfig.outlet,title:n.routeConfig.title}:null,queryParams:n.queryParams,queryParamMap:n.queryParamMap,fragment:n.fragment,component:n.routeConfig?n.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:t[0],pathFromRoot:void 0,children:t}}},uo=class{},he=(function(i){return i[i.NONE=1]="NONE",i[i.ROUTER=2]="ROUTER",i[i.STORE=3]="STORE",i})(he||{}),Fl=(()=>{class i{constructor(t,e,o,r,a,s){this.store=t,this.router=e,this.serializer=o,this.errorHandler=r,this.config=a,this.activeRuntimeChecks=s,this.lastEvent=null,this.routerState=null,this.trigger=he.NONE,this.stateKey=this.config.stateKey,!vl()&&to()&&(s?.strictActionSerializability||s?.strictStateSerializability)&&this.serializer instanceof mo&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(bl(this.stateKey),nn(this.store)).subscribe(([t,e])=>{this.navigateIfNeeded(t,e)})}navigateIfNeeded(t,e){if(!t||!t.state||this.trigger===he.ROUTER||this.lastEvent instanceof Or)return;let o=t.state.url;df(this.router.url,o)||(this.storeState=e,this.trigger=he.STORE,this.router.navigateByUrl(o).catch(r=>{this.errorHandler.handleError(r)}))}setUpRouterEventsListener(){let t=this.config.navigationActionTiming===Ur.PostActivation,e;this.router.events.pipe(nn(this.store)).subscribe(([o,r])=>{this.lastEvent=o,o instanceof Or?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==he.STORE&&(this.storeState=r,this.dispatchRouterRequest(o))):o instanceof Pr?(e=o,!t&&this.trigger!==he.STORE&&this.dispatchRouterNavigation(o)):o instanceof sl?(this.dispatchRouterCancel(o),this.reset()):o instanceof Ir?(this.dispatchRouterError(o),this.reset()):o instanceof ro&&(this.trigger!==he.STORE&&(t&&this.dispatchRouterNavigation(e),this.dispatchRouterNavigated(o)),this.reset())})}dispatchRouterRequest(t){this.dispatchRouterAction(Ll,{event:t})}dispatchRouterNavigation(t){let e=this.serializer.serialize(t.state);this.dispatchRouterAction(jr,{routerState:e,event:new Pr(t.id,t.url,t.urlAfterRedirects,e)})}dispatchRouterCancel(t){this.dispatchRouterAction(Vr,{storeState:this.storeState,event:t})}dispatchRouterError(t){this.dispatchRouterAction(Hr,{storeState:this.storeState,event:new Ir(t.id,t.url,`${t}`)})}dispatchRouterNavigated(t){let e=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(Bl,{event:t,routerState:e})}dispatchRouterAction(t,e){this.trigger=he.ROUTER;try{this.store.dispatch({type:t,payload:It(S({routerState:this.routerState},e),{event:this.config.routerState===Wr.Full?e.event:{id:e.event.id,url:e.event.url,urlAfterRedirects:e.event.urlAfterRedirects}})})}finally{this.trigger=he.NONE}}reset(){this.trigger=he.NONE,this.storeState=null,this.routerState=null}static{this.\u0275fac=function(e){return new(e||i)(B(Qt),B(ue),B(uo),B(gi),B(jl),B(ul))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac})}}return i})();function df(i,n){return Nl(i)===Nl(n)}function Nl(i){return i?.length>0&&i[i.length-1]==="/"?i.substring(0,i.length-1):i}function Vl(i={}){return hi([{provide:Pl,useValue:i},{provide:jl,useFactory:cf,deps:[Pl]},{provide:uo,useClass:i.serializer?i.serializer:i.routerState===Wr.Full?mo:co},$n(()=>c(Fl)),Fl])}var mf=new D("cdk-dir-doc",{providedIn:"root",factory:()=>c(it)}),uf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Hl(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?uf.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Ge("ltr");change=new wt;constructor(){let t=c(mf,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Hl(e||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var dt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({})}return i})();var ff=["*"];var hf=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],pf=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],gf=new D("MAT_CARD_CONFIG"),Mi=(()=>{class i{appearance;constructor(){let t=c(gf,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,o){e&2&&$("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ff,decls:1,vars:0,template:function(e,o){e&1&&(bt(),et(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),ki=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var Ai=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),Ri=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return i})(),Ul=(()=>{class i{align="start";static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(e,o){e&2&&$("mat-mdc-card-actions-align-end",o.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),Oi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:pf,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(bt(hf),et(0),T(1,"div",0),et(2,1),M(),et(3,2))},encapsulation:2,changeDetection:0})}return i})();var ho=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return i})();var Wl=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return i})();var po=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[dt]})}return i})();function mn(i){return i.buttons===0||i.detail===0}function un(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Gr;function ql(){if(Gr==null){let i=typeof document<"u"?document.head:null;Gr=!!(i&&(i.createShadowRoot||i.attachShadow))}return Gr}function qr(i){if(ql()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function fn(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function Bt(i){return i.composedPath?i.composedPath()[0]:i.target}var $r;try{$r=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){$r=!1}var K=(()=>{class i{_platformId=c(_i);isBrowser=this._platformId?Ei(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$r)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var hn;function $l(){if(hn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>hn=!0}))}finally{hn=hn||!1}return hn}function Ii(i){return $l()?i:!!i.capture}function Ce(i,n=0){return Kl(i)?Number(i):arguments.length===2?n:0}function Kl(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Gt(i){return i instanceof H?i.nativeElement:i}var Yl=new D("cdk-input-modality-detector-options"),Ql={ignoreKeys:[18,17,224,91,16]},Xl=650,Kr={passive:!0,capture:!0},Zl=(()=>{class i{_platform=c(K);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ws(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Bt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Xl||(this._modality.next(mn(t)?"keyboard":"mouse"),this._mostRecentTarget=Bt(t))};_onTouchstart=t=>{if(un(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Bt(t)};constructor(){let t=c(O),e=c(it),o=c(Yl,{optional:!0});if(this._options=S(S({},Ql),o),this.modalityDetected=this._modality.pipe(fi(1)),this.modalityChanged=this.modalityDetected.pipe(Er()),this._platform.isBrowser){let r=c(Pt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,Kr),r.listen(e,"mousedown",this._onMousedown,Kr),r.listen(e,"touchstart",this._onTouchstart,Kr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),pn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(pn||{}),Jl=new D("cdk-focus-monitor-default-options"),go=Ii({passive:!0,capture:!0}),Ee=(()=>{class i{_ngZone=c(O);_platform=c(K);_inputModalityDetector=c(Zl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(it);_stopInputModalityDetector=new V;constructor(){let t=c(Jl,{optional:!0});this._detectionMode=t?.detectionMode||pn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=Bt(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=Gt(t);if(!this._platform.isBrowser||o.nodeType!==1)return Ct();let r=qr(o)||this._document,a=this._elementInfo.get(o);if(a)return e&&(a.checkChildren=!0),a.subject;let s={checkChildren:e,subject:new V,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let e=Gt(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=Gt(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([s,l])=>this._originChanged(s,e,l)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===pn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===pn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Xl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=Bt(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,go),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,go)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ht(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,go),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,go),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _o=new WeakMap,Ot=(()=>{class i{_appRef;_injector=c(tt);_environmentInjector=c(pi);load(t){let e=this._appRef=this._appRef||this._injector.get(an),o=_o.get(e);o||(o={loaders:new Set,refs:[]},_o.set(e,o),e.onDestroy(()=>{_o.get(e)?.refs.forEach(r=>r.destroy()),_o.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(eo(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();function Pi(i){return Array.isArray(i)?i:[i]}var tc=new Set,Ze,Fi=(()=>{class i{_platform=c(K);_nonce=c(Bs,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):bf}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&_f(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _f(i,n){if(!tc.has(i))try{Ze||(Ze=document.createElement("style"),n&&Ze.setAttribute("nonce",n),Ze.setAttribute("type","text/css"),document.head.appendChild(Ze)),Ze.sheet&&(Ze.sheet.insertRule(`@media ${i} {body{ }}`,0),tc.add(i))}catch(t){console.error(t)}}function bf(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var gn=(()=>{class i{_mediaMatcher=c(Fi);_zone=c(O);_queries=new Map;_destroySubject=new V;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ec(Pi(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=ec(Pi(t)).map(a=>this._registerQuery(a).observable),r=Ms(o);return r=ks(r.pipe(At(1)),r.pipe(fi(1),Gn(0))),r.pipe(Et(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new ee(a=>{let s=l=>this._zone.run(()=>a.next(l));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(be(e),Et(({matches:a})=>({query:t,matches:a})),ht(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ec(i){return i.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var vf=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[vf]})}return i})();var Xr=(()=>{class i{_platform=c(K);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return xf(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=yf(kf(t));if(e&&(ic(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),r=ic(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Df(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Mf(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yf(i){try{return i.frameElement}catch(n){return null}}function xf(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Cf(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Ef(i){return Sf(i)&&i.type=="hidden"}function wf(i){return Tf(i)&&i.hasAttribute("href")}function Sf(i){return i.nodeName.toLowerCase()=="input"}function Tf(i){return i.nodeName.toLowerCase()=="a"}function rc(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function ic(i){if(!rc(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Df(i){let n=i.nodeName.toLowerCase(),t=n==="input"&&i.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function Mf(i){return Ef(i)?!1:Cf(i)||wf(i)||i.hasAttribute("contenteditable")||rc(i)}function kf(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var Qr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,o,r=!1,a){this._element=n,this._checker=t,this._ngZone=e,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ut(n,{injector:this._injector}):setTimeout(n)}},Zr=(()=>{class i{_checker=c(Xr);_ngZone=c(O);_document=c(it);_injector=c(tt);constructor(){c(Ot).load(bo)}create(t,e=!1){return new Qr(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ie=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(Ie||{}),nc="cdk-high-contrast-black-on-white",oc="cdk-high-contrast-white-on-black",Yr="cdk-high-contrast-active",ac=(()=>{class i{_platform=c(K);_hasCheckedHighContrastMode=!1;_document=c(it);_breakpointSubscription;constructor(){this._breakpointSubscription=c(gn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ie.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ie.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ie.BLACK_ON_WHITE}return Ie.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Yr,nc,oc),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===Ie.BLACK_ON_WHITE?t.add(Yr,nc):e===Ie.WHITE_ON_BLACK&&t.add(Yr,oc)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_n=(()=>{class i{constructor(){c(ac)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[vo]})}return i})();function Pe(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Jr={},Dt=class i{_appId=c(Kn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),Jr.hasOwnProperty(n)||(Jr[n]=0),`${n}${t?i._infix+"-":""}${Jr[n]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})};var lc=" ";function Af(i,n,t){let e=xo(i,n);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),i.setAttribute(n,e.join(lc)))}function Rf(i,n,t){let e=xo(i,n);t=t.trim();let o=e.filter(r=>r!==t);o.length?i.setAttribute(n,o.join(lc)):i.removeAttribute(n)}function xo(i,n){return i.getAttribute(n)?.match(/\S+/g)??[]}var cc="cdk-describedby-message",yo="cdk-describedby-host",ea=0,dc=(()=>{class i{_platform=c(K);_document=c(it);_messageRegistry=new Map;_messagesContainer=null;_id=`${ea++}`;constructor(){c(Ot).load(bo),this._id=c(Kn)+"-"+ea++}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let r=ta(e,o);typeof e!="string"?(sc(e,this._id),this._messageRegistry.set(r,{messageElement:e,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let r=ta(e,o);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof e=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${yo}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(yo);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let o=this._document.createElement("div");sc(o,this._id),o.textContent=t,e&&o.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(ta(t,e),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<e.length;r++)e[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(t),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let e=xo(t,"aria-describedby").filter(o=>o.indexOf(cc)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let o=this._messageRegistry.get(e);Af(t,"aria-describedby",o.messageElement.id),t.setAttribute(yo,this._id),o.referenceCount++}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,Rf(t,"aria-describedby",o.messageElement.id),t.removeAttribute(yo)}_isElementDescribedByMessage(t,e){let o=xo(t,"aria-describedby"),r=this._messageRegistry.get(e),a=r&&r.messageElement.id;return!!a&&o.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let o=e==null?"":`${e}`.trim(),r=t.getAttribute("aria-label");return o?!r||r.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ta(i,n){return typeof i=="string"?`${n||""}/${i}`:i}function sc(i,n){i.id||(i.id=`${cc}-${n}-${ea++}`)}var ia=(()=>{class i{_listeners=[];notify(t,e){for(let o of this._listeners)o(t,e)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(e=>t!==e)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Je={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Of=new D("MATERIAL_ANIMATIONS"),mc=null;function If(){return c(Of,{optional:!0})?.animationsDisabled||c(qe,{optional:!0})==="NoopAnimations"?"di-disabled":(mc??=c(Fi).matchMedia("(prefers-reduced-motion)").matches,mc?"reduced-motion":"enabled")}function yt(){return If()!=="enabled"}var Co=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ie=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(ie||{}),Eo,ti;function wo(){if(ti==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ti=!1,ti;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ti=!0;else{let i=Element.prototype.scrollTo;i?ti=!/\{\s*\[native code\]\s*\}/.test(i.toString()):ti=!1}}return ti}function Ni(){if(typeof document!="object"||!document)return ie.NORMAL;if(Eo==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",i.appendChild(t),document.body.appendChild(i),Eo=ie.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Eo=i.scrollLeft===0?ie.NEGATED:ie.INVERTED),i.remove()}return Eo}function na(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Li,uc=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function oa(){if(Li)return Li;if(typeof document!="object"||!document)return Li=new Set(uc),Li;let i=document.createElement("input");return Li=new Set(uc.filter(n=>(i.setAttribute("type",n),i.type===n))),Li}function pt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function we(i){return i!=null&&`${i}`!="false"}var Zt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Zt||{}),ra=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Zt.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},fc=Ii({passive:!0,capture:!0}),aa=class{_events=new Map;addHandler(n,t,e,o){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,fc)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,fc)))}_delegateEventHandler=n=>{let t=Bt(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},bn={enterDuration:225,exitDuration:150},Pf=800,hc=Ii({passive:!0,capture:!0}),pc=["mousedown","touchstart"],gc=["mouseup","mouseleave","touchend","touchcancel"],Ff=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),vn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new aa;constructor(n,t,e,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=Gt(e)),r&&r.get(Ot).load(Ff)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=S(S({},bn),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let a=e.radius||Nf(n,t,o),s=n-o.left,l=t-o.top,d=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let m=window.getComputedStyle(u),y=m.transitionProperty,E=m.transitionDuration,g=y==="none"||E==="0s"||E==="0s, 0s"||o.width===0&&o.height===0,_=new ra(this,u,e,g);u.style.transform="scale3d(1, 1, 1)",_.state=Zt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=_);let P=null;return!g&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let W=()=>{P&&(P.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(_)},Y=()=>this._destroyRipple(_),ot=setTimeout(Y,d+100);u.addEventListener("transitionend",W),u.addEventListener("transitioncancel",Y),P={onTransitionEnd:W,onTransitionCancel:Y,fallbackTimer:ot}}),this._activeRipples.set(_,P),(g||!d)&&this._finishRippleTransition(_),_}fadeOutRipple(n){if(n.state===Zt.FADING_OUT||n.state===Zt.HIDDEN)return;let t=n.element,e=S(S({},bn),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=Zt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=Gt(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,pc.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{gc.forEach(t=>{this._triggerElement.addEventListener(t,this,hc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Zt.FADING_IN?this._startFadeOutTransition(n):n.state===Zt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=Zt.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Zt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=mn(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Pf;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!un(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Zt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Zt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(pc.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(gc.forEach(t=>n.removeEventListener(t,this,hc)),this._pointerUpEventsRegistered=!1))}};function Nf(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var sa=new D("mat-ripple-global-options"),_c=(()=>{class i{_elementRef=c(H);_animationsDisabled=yt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=c(O),e=c(K),o=c(sa,{optional:!0}),r=c(tt);this._globalOptions=o||{},this._rippleRenderer=new vn(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:S(S(S({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,S(S({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,S(S({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&$("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Lf=["mat-internal-form-field",""],Bf=["*"],bc=(()=>{class i{labelPosition="after";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,o){e&2&&$("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Lf,ngContentSelectors:Bf,decls:1,vars:0,template:function(e,o){e&1&&(bt(),et(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var So=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[dt]})}return i})();var zf=["input"],jf=["formField"],Vf=["*"],To=class{source;value;constructor(n,t){this.source=n,this.value=t}},Hf={provide:xl,useExisting:Dr(()=>yn),multi:!0},vc=new D("MatRadioGroup"),Uf=new D("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),yn=(()=>{class i{_changeDetector=c(ce);_value=null;_name=c(Dt).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new wt;_radios;color;get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition=t==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=t,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(t=>t===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){let t=this._selected!==null&&this._selected.value===this._value;this._radios&&!t&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new To(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-radio-group"]],contentQueries:function(e,o,r){if(e&1&&bi(r,Bi,5),e&2){let a;G(a=q())&&(o._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",gt],required:[2,"required","required",gt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",gt]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[se([Hf,{provide:vc,useExisting:i}])]})}return i})(),Bi=(()=>{class i{_elementRef=c(H);_changeDetector=c(ce);_focusMonitor=c(Ee);_radioDispatcher=c(ia);_defaultOptions=c(Uf,{optional:!0});_ngZone=c(O);_renderer=c(Mt);_uniqueId=c(Dt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(t){this._setDisabled(t)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){t!==this._required&&this._changeDetector.markForCheck(),this._required=t}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(t){this._color=t}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new wt;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=yt();_injector=c(tt);constructor(){c(Ot).load(Co);let t=c(vc,{optional:!0}),e=c(new Ks("tabindex"),{optional:!0});this.radioGroup=t,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,e&&(this.tabIndex=ln(e,0))}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new To(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){let e=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),e&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(t){this._onInputInteraction(t),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}_onInputClick=t=>{this.disabled&&this.disabledInteractive&&t.preventDefault()};_updateTabIndex(){let t=this.radioGroup,e;if(!t||!t.selected||this.disabled?e=this.tabIndex:e=t.selected===this?this.tabIndex:-1,e!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",e+""),this._previousTabIndex=e,Ut(()=>{queueMicrotask(()=>{t&&t.selected&&t.selected!==this&&document.activeElement===o&&(t.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-radio-button"]],viewQuery:function(e,o){if(e&1&&St(zf,5)(jf,7,H),e&2){let r;G(r=q())&&(o._inputElement=r.first),G(r=q())&&(o._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(e,o){e&1&&I("focus",function(){return o._inputElement.nativeElement.focus()}),e&2&&(_t("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),$("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",gt],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:ln(t)],checked:[2,"checked","checked",gt],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",gt],required:[2,"required","required",gt],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",gt]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Vf,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(e,o){e&1&&(bt(),p(0,"div",2,0)(2,"div",3)(3,"div",4),I("click",function(a){return o._onTouchTargetClick(a)}),h(),p(4,"input",5,1),I("change",function(a){return o._onInputInteraction(a)}),h(),p(6,"div",6),R(7,"div",7)(8,"div",8),h(),p(9,"div",9),R(10,"div",10),h()(),p(11,"label",11),et(12),h()()),e&2&&(J("labelPosition",o.labelPosition),b(2),$("mdc-radio--disabled",o.disabled),b(2),J("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),_t("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),b(5),J("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),b(2),J("for",o.inputId))},dependencies:[_c,bc],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),yc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[So,Bi,dt]})}return i})();var xn=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},qt=class extends xn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,t,e,o,r){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null}},pe=class extends xn{templateRef;viewContainerRef;context;injector;constructor(n,t,e,o){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Cn=class extends xn{element;constructor(n){super(),this.element=n instanceof H?n.nativeElement:n}},zi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof qt)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof pe)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Cn)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Do=class extends zi{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,o=e.get(Mr,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=n.injector||this._defaultInjector||tt.NULL,r=o.get(pi,e.injector);t=eo(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Ft=(()=>{class i extends zi{_moduleRef=c(Mr,{optional:!0});_document=c(it);_viewContainerRef=c(Yt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new wt;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(e,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Nt]})}return i})(),zt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({})}return i})();var Gf=20,ei=(()=>{class i{_ngZone=c(O);_platform=c(K);_renderer=c(Pt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new V;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Gf){return this._platform.isBrowser?new ee(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Cr(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ct()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(nt(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let o=Gt(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ca=(()=>{class i{elementRef=c(H);scrollDispatcher=c(ei);ngZone=c(O);dir=c(Xt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new V;_renderer=c(Mt);_cleanupScroll;_elementScrolled=new V;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=o?t.end:t.start),t.right==null&&(t.right=o?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),o&&Ni()!=ie.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),Ni()==ie.INVERTED?t.left=t.right:Ni()==ie.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;wo()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",o="right",r=this.elementRef.nativeElement;if(t=="top")return r.scrollTop;if(t=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?o:e:t=="end"&&(t=a?e:o),a&&Ni()==ie.INVERTED?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Ni()==ie.NEGATED?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),qf=20,ji=(()=>{class i{_platform=c(K);_listeners;_viewportSize=null;_change=new V;_document=c(it);constructor(){let t=c(O),e=c(Pt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),a=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,s=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(t=qf){return t>0?this._change.pipe(Cr(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var En=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({})}return i})(),da=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[dt,En,dt,En]})}return i})();var xc=wo();function Fe(i){return new Mo(i.get(ji),i.get(it))}var Mo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=pt(-this._previousScrollPosition.left),n.style.top=pt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,o=t.style,r=e.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),xc&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),xc&&(e.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Mc(i,n){return new ko(i.get(ei),i.get(O),i.get(ji),n)}var ko=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,o){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(nt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var wn=class{enable(){}disable(){}attach(){}};function ma(i,n){return n.some(t=>{let e=i.bottom<t.top,o=i.top>t.bottom,r=i.right<t.left,a=i.left>t.right;return e||o||r||a})}function Cc(i,n){return n.some(t=>{let e=i.top<t.top,o=i.bottom>t.bottom,r=i.left<t.left,a=i.right>t.right;return e||o||r||a})}function Po(i,n){return new Ao(i.get(ei),i.get(ji),i.get(O),n)}var Ao=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,o){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();ma(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},kc=(()=>{class i{_injector=c(tt);constructor(){}noop=()=>new wn;close=t=>Mc(this._injector,t);block=()=>Fe(this._injector);reposition=t=>Po(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Vi=class{positionStrategy;scrollStrategy=new wn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Ro=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var Ac=(()=>{class i{_attachedOverlays=[];_document=c(it);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rc=(()=>{class i extends Ac{_ngZone=c(O);_renderer=c(Pt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Oc=(()=>{class i extends Ac{_platform=c(K);_ngZone=c(O);_renderer=c(Pt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Bt(t)};_clickListener=t=>{let e=Bt(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(Ec(s.overlayElement,e)||Ec(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})();static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ec(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Ic=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Fo=(()=>{class i{_platform=c(K);_containerElement;_document=c(it);_styleLoader=c(Ot);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||na()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),na()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Ic)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ua=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,o){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function fa(i){return i&&i.nodeType===1}var Hi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new V;_attachments=new V;_detachments=new V;_positionStrategy;_scrollStrategy;_locationChanges=mi.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new V;_outsidePointerEvents=new V;_afterNextRenderRef;constructor(n,t,e,o,r,a,s,l,d,u=!1,m,y){this._portalOutlet=n,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=m,this._renderer=y,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ut(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=S(S({},this._config),n),this._updateElementSize()}setDirection(n){this._config=It(S({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=pt(this._config.width),n.height=pt(this._config.height),n.minWidth=pt(this._config.minWidth),n.minHeight=pt(this._config.minHeight),n.maxWidth=pt(this._config.maxWidth),n.maxHeight=pt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;fa(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ua(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let o=Pi(t||[]).filter(r=>!!r);o.length&&(e?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ut(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},wc="cdk-overlay-connected-position-bounding-box",Kf=/([A-Za-z%]+)$/;function No(i,n){return new Oo(n,i.get(ji),i.get(it),i.get(K),i.get(Fo))}var Oo=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new V;_resizeSubscription=mi.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,o,r){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(wc),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,o,s),d=this._getOverlayPoint(l,t,s),u=this._getOverlayFit(d,t,e,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,e)){r.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:t})}if(r.length){let s=null,l=-1;for(let d of r){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ii(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(wc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:fa(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let o;if(e.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;o=e.originX=="start"?a:s}t.left<0&&(o-=t.left);let r;return e.originY=="center"?r=n.top+n.height/2:r=e.originY=="top"?n.top:n.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(n,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,t,e,o){let r=Tc(t),{x:a,y:s}=n,l=this._getOffset(o,"x"),d=this._getOffset(o,"y");l&&(a+=l),d&&(s+=d);let u=0-a,m=a+r.width-e.width,y=0-s,E=s+r.height-e.height,g=this._subtractOverflows(r.width,u,m),_=this._subtractOverflows(r.height,y,E),P=g*_;return{visibleArea:P,isCompletelyWithinViewport:r.width*r.height===P,fitsInViewportVertically:_===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,r=e.right-t.x,a=Sc(this._overlayRef.getConfig().minHeight),s=Sc(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=o,d=n.fitsInViewportHorizontally||s!=null&&s<=r;return l&&d}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Tc(t),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),s=Math.max(n.y+o.height-r.height,0),l=Math.max(r.top-e.top-n.y,0),d=Math.max(r.left-e.left-n.x,0),u=0,m=0;return o.width<=r.width?u=d||-a:u=n.x<this._getViewportMarginStart()?r.left-e.left-n.x:0,o.height<=r.height?m=l||-s:m=n.y<this._getViewportMarginTop()?r.top-e.top-n.y:0,this._previousPushAmount={x:u,y:m},{x:n.x+u,y:n.y+m}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Yf(this._lastScrollVisibility,e)){let o=new Ro(n,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,o=this._isRtl(),r,a,s;if(t.overlayY==="top")a=n.y,r=e.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")s=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-s+this._getViewportMarginTop();else{let E=Math.min(e.bottom-n.y+e.top,n.y),g=this._lastBoundingBoxSize.height;r=E*2,a=n.y-E,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-g/2)}let l=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,d=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,u,m,y;if(d)y=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)m=n.x,u=e.right-n.x-this._getViewportMarginEnd();else{let E=Math.min(e.right-n.x+e.left,n.x),g=this._lastBoundingBoxSize.width;u=E*2,m=n.x-E,u>g&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-g/2)}return{top:a,left:m,bottom:s,right:y,width:u,height:r}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=pt(e.width),o.height=pt(e.height),o.top=pt(e.top)||"auto",o.bottom=pt(e.bottom)||"auto",o.left=pt(e.left)||"auto",o.right=pt(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=pt(r)),a&&(o.maxWidth=pt(a))}this._lastBoundingBoxSize=e,ii(this._boundingBox.style,o)}_resetBoundingBoxStyles(){ii(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ii(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let u=this._viewportRuler.getViewportScrollPosition();ii(e,this._getExactOverlayY(t,n,u)),ii(e,this._getExactOverlayX(t,n,u))}else e.position="static";let s="",l=this._getOffset(t,"x"),d=this._getOffset(t,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),e.transform=s.trim(),a.maxHeight&&(o?e.maxHeight=pt(a.maxHeight):r&&(e.maxHeight="")),a.maxWidth&&(o?e.maxWidth=pt(a.maxWidth):r&&(e.maxWidth="")),ii(this._pane.style,e)}_getExactOverlayY(n,t,e){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=pt(r.y);return o}_getExactOverlayX(n,t,e){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=pt(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Cc(n,e),isOriginOutsideView:ma(n,e),isOverlayClipped:Cc(t,e),isOverlayOutsideView:ma(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,o)=>e-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Pi(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof H)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function ii(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function Sc(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(Kf);return!t||t==="px"?parseFloat(n):null}return i||null}function Tc(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Yf(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Dc="cdk-global-overlay-wrapper";function Ne(i){return new Io}var Io=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Dc),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=e,l=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),u=this._xPosition,m=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",E="",g="",_="";l?_="flex-start":u==="center"?(_="center",y?g=m:E=m):y?u==="left"||u==="end"?(_="flex-end",E=m):(u==="right"||u==="start")&&(_="flex-start",g=m):u==="left"||u==="start"?(_="flex-start",E=m):(u==="right"||u==="end")&&(_="flex-end",g=m),n.position=this._cssPosition,n.marginLeft=l?"0":E,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":g,t.justifyContent=_,t.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Dc),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Pc=(()=>{class i{_injector=c(tt);constructor(){}global(){return Ne()}flexibleConnectedTo(t){return No(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fc=new D("OVERLAY_DEFAULT_CONFIG");function Ui(i,n){i.get(Ot).load(Ic);let t=i.get(Fo),e=i.get(it),o=i.get(Dt),r=i.get(an),a=i.get(Xt),s=i.get(Mt,null,{optional:!0})||i.get(Pt).createRenderer(null,null),l=new Vi(n),d=i.get(Fc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in e.body?l.usePopover=n?.usePopover??d:l.usePopover=!1;let u=e.createElement("div"),m=e.createElement("div");u.id=o.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),m.appendChild(u),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let y=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return fa(y)?y.after(m):y?.type==="parent"?y.element.appendChild(m):t.getContainerElement().appendChild(m),new Hi(new Do(u,r,i),m,u,l,i.get(O),i.get(Rc),e,i.get(io),i.get(Oc),n?.disableAnimations??i.get(qe,null,{optional:!0})==="NoopAnimations",i.get(pi),s)}var Nc=(()=>{class i{scrollStrategies=c(kc);_positionBuilder=c(Pc);_injector=c(tt);constructor(){}create(t){return Ui(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ni=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[Nc],imports:[dt,zt,da,da]})}return i})();function Qf(i,n){}var Le=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Tn=(()=>{class i extends zi{_elementRef=c(H);_focusTrapFactory=c(Zr);_config;_interactivityChecker=c(Xr);_ngZone=c(O);_focusMonitor=c(Ee);_renderer=c(Mt);_changeDetectorRef=c(ce);_injector=c(tt);_platform=c(K);_document=c(it);_portalOutlet;_focusTrapped=new V;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(Le,{optional:!0})||new Le,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",o),a=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||Ut(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=fn(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=fn();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=fn()))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&St(Ft,7),e&2){let r;G(r=q())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&_t("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[Nt],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&ft(0,Qf,0,0,"ng-template",0)},dependencies:[Ft],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Sn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new V;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Pe(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},Xf=new D("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=c(tt);return()=>Fe(i)}}),Zf=new D("DialogData"),Jf=new D("DefaultDialogConfig");function th(i){let n=Ge(i),t=new wt;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Dn=(()=>{class i{_injector=c(tt);_defaultOptions=c(Jf,{optional:!0});_parentDialog=c(i,{optional:!0,skipSelf:!0});_overlayContainer=c(Fo);_idGenerator=c(Dt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new V;_afterOpenedAtThisLevel=new V;_ariaHiddenElements=new Map;_scrollStrategy=c(Xf);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){}open(t,e){let o=this._defaultOptions||new Le;e=S(S({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),a=Ui(this._injector,r),s=new Sn(a,e),l=this._attachContainer(a,s,e);if(s.containerInstance=l,!this.openDialogs.length){let d=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(At(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(d)}):this._hideNonDialogContentFromAssistiveTechnology(d)}return this._attachDialogContent(t,s,l,e),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){ha(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ha(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ha(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Vi({positionStrategy:t.positionStrategy||Ne().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:Le,useValue:o},{provide:Sn,useValue:e},{provide:Hi,useValue:t}],s;o.container?typeof o.container=="function"?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=Tn;let l=new qt(s,o.viewContainerRef,tt.create({parent:r||this._injector,providers:a}));return t.attach(l).instance}_attachDialogContent(t,e,o,r){if(t instanceof rn){let a=this._createInjector(r,e,o,void 0),s={$implicit:r.data,dialogRef:e};r.templateContext&&(s=S(S({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new pe(t,null,s,a))}else{let a=this._createInjector(r,e,o,this._injector),s=o.attachComponentPortal(new qt(t,r.viewContainerRef,a));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,o,r){let a=t.injector||t.viewContainerRef?.injector,s=[{provide:Zf,useValue:t.data},{provide:Sn,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,o)):s.push(...t.providers)),t.direction&&(!a||!a.get(Xt,null,{optional:!0}))&&s.push({provide:Xt,useValue:th(t.direction)}),tt.create({parent:a||r,providers:s})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let r=e[o];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ha(i,n){let t=i.length;for(;t--;)n(i[t])}var pa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[Dn],imports:[ni,zt,_n,zt]})}return i})();function eh(i,n){}var Lc="_mat-bottom-sheet-enter",Bc="_mat-bottom-sheet-exit",ih=(()=>{class i extends Tn{_breakpointSubscription;_animationsDisabled=yt();_animationState="void";_animationStateChanged=new wt;_destroyed=!1;constructor(){super();let t=c(gn);this._breakpointSubscription=t.observe([Je.Medium,Je.Large,Je.XLarge]).subscribe(()=>{let e=this._elementRef.nativeElement.classList;e.toggle("mat-bottom-sheet-container-medium",t.isMatched(Je.Medium)),e.toggle("mat-bottom-sheet-container-large",t.isMatched(Je.Large)),e.toggle("mat-bottom-sheet-container-xlarge",t.isMatched(Je.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(Lc))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(Bc))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t),setTimeout(()=>this._handleAnimationEvent(!1,t))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,e){let o=e===Lc;(o||e===Bc)&&this._animationStateChanged.emit({toState:o?"visible":"hidden",phase:t?"start":"done"})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(e,o){e&1&&I("animationstart",function(a){return o._handleAnimationEvent(!0,a.animationName)})("animationend",function(a){return o._handleAnimationEvent(!1,a.animationName)})("animationcancel",function(a){return o._handleAnimationEvent(!1,a.animationName)}),e&2&&(_t("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-label",o._config.ariaLabel),$("mat-bottom-sheet-container-animations-enabled",!o._animationsDisabled)("mat-bottom-sheet-container-enter",o._animationState==="visible")("mat-bottom-sheet-container-exit",o._animationState==="hidden"))},features:[Nt],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&ft(0,eh,0,0,"ng-template",0)},dependencies:[Ft],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2})}return i})(),nh=new D("MatBottomSheetData"),ga=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight},Gi=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new V;_result;_closeFallbackTimeout;constructor(n,t,e){this._ref=n,this.containerInstance=e,this.disableClose=t.disableClose,e._animationStateChanged.pipe(nt(o=>o.phase==="done"&&o.toState==="visible"),At(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(nt(o=>o.phase==="done"&&o.toState==="hidden"),At(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),n.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),Kt(this.backdropClick(),this.keydownEvents().pipe(nt(o=>o.keyCode===27))).subscribe(o=>{!this.disableClose&&(o.type!=="keydown"||!Pe(o))&&(o.preventDefault(),this.dismiss())})}dismiss(n){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(nt(t=>t.phase==="start"),At(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=n,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},oh=new D("mat-bottom-sheet-default-options"),zc=(()=>{class i{_injector=c(tt);_parentBottomSheet=c(i,{optional:!0,skipSelf:!0});_animationsDisabled=yt();_defaultOptions=c(oh,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=c(Dn);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}constructor(){}open(t,e){let o=S(S({},this._defaultOptions||new ga),e),r;return this._dialog.open(t,It(S({},o),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:ih,scrollStrategy:o.scrollStrategy||Fe(this._injector),positionStrategy:Ne(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:r}),providers:(a,s,l)=>(r=new Gi(a,o,l),[{provide:Gi,useValue:r},{provide:nh,useValue:o.data}])})),r.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===r&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>r.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):r.containerInstance.enter(),this._openedBottomSheetRef=r,r}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Vc=(()=>{class i{constructor(t){this.bottomSheetRef=t}closeSheet(){this.bottomSheetRef.dismiss()}static{this.\u0275fac=function(e){return new(e||i)(z(Gi))}}static{this.\u0275cmp=v({type:i,selectors:[["app-bottomsheet"]],decls:9,vars:0,consts:[[1,"sheet-content"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,o){e&1&&(T(0,"p"),f(1,"bottomsheet works!"),M(),T(2,"div",0)(3,"h3"),f(4,"iPhone Style Bottom Sheet"),M(),T(5,"p"),f(6,"This slides from bottom"),M(),T(7,"button",1),Ke("click",function(){return o.closeSheet()}),f(8,"Confirm"),M()())},encapsulation:2})}}return i})();var Hc=(()=>{class i{transform(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275pipe=Qn({name:"fUpperCase",type:i,pure:!0})}}return i})();var Wc=(()=>{class i{constructor(t){this.httpClient=t}getRadioOptions(){return Ct([{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}])}static{this.\u0275fac=function(e){return new(e||i)(B(Ae))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function ah(i,n){if(i&1){let t=$e();p(0,"mat-radio-button",7),I("click",function(){let o=Ue(t).$implicit,r=lt();return We(r.toggleResidenceType(o.value))}),f(1),Qe(2,"fUpperCase"),h()}if(i&2){let t=n.$implicit;J("value",t.value),b(),vt(" ",Xe(2,2,t.viewValue)," ")}}function sh(i,n){if(i&1&&(p(0,"p",4),f(1),h()),i&2){let t=lt();b(),vt("Your Residence Type is: ",t.residenceType)}}var Gc=(()=>{class i{constructor(t,e){this.radioService=t,this.bottomSheet=e,this.residenceType="",this.radioOptions=[]}ngOnInit(){this.residenceType="rent",this.radioService.getRadioOptions().subscribe(t=>{console.log("Received radio options from API:",t),this.radioOptions=t.map(e=>({value:e.value,viewValue:e.label}))})}toggleResidenceType(t){this.residenceType===t?this.residenceType="":this.residenceType=t}openSheet(){this.bottomSheet.open(Vc)}static{this.\u0275fac=function(e){return new(e||i)(z(Wc),z(zc))}}static{this.\u0275cmp=v({type:i,selectors:[["app-radiobutton"]],decls:21,vars:2,consts:[[1,"card"],["mat-card-avatar","",1,"example-header-image"],[1,"custom-radio-group",3,"value"],["name","ResidencyType",1,"custom-radio",3,"value"],[1,"selectedvalue"],[1,"sheet-content"],["mat-raised-button","","color","accent",3,"click"],["name","ResidencyType",1,"custom-radio",3,"click","value"]],template:function(e,o){e&1&&(p(0,"mat-card",0)(1,"mat-card-header"),R(2,"div",1),p(3,"mat-card-title"),f(4,"Radio Button Demo"),h(),p(5,"mat-card-subtitle"),f(6,"Radio Button component using material ui"),h()(),p(7,"mat-card-content")(8,"label"),f(9,"Residence Type"),h(),p(10,"mat-radio-group",2),Me(11,ah,3,4,"mat-radio-button",3,Xn),h(),rt(13,sh,2,1,"p",4),p(14,"div",5)(15,"h3"),f(16,"iPhone Style Bottom Sheet"),h(),p(17,"p"),f(18,"This slides from bottom"),h(),p(19,"button",6),I("click",function(){return o.openSheet()}),f(20,` Open Bottom Sheet
`),h()()()()),e&2&&(b(10),J("value",o.residenceType),b(),ke(o.radioOptions),b(2),at(o.residenceType?13:-1))},dependencies:[Mi,Oi,ki,Ri,Ai,yn,Bi,Oe,Hc],styles:[".card[_ngcontent-%COMP%]{display:flex}  .custom-radio-group{display:flex;gap:12px}  .custom-radio{border:1px solid #ccc;border-radius:6px;padding:10px 20px;cursor:pointer;transition:all .3s ease}  .custom-radio .mdc-radio{position:absolute;opacity:0;pointer-events:none}  .custom-radio .mdc-form-field{margin:0;width:100%}  .custom-radio.mat-mdc-radio-checked{background-color:#1976d2;color:#fff;border-color:#1976d2}  .custom-radio .mdc-label{color:#1976d2}  .custom-radio.mat-mdc-radio-checked .mdc-label{color:#fff}.selectedvalue[_ngcontent-%COMP%]{margin-top:20px;font-size:16px}"]})}}return i})();function lh(i,n){i&1&&(T(0,"section",0)(1,"div",1)(2,"div",2),f(3,"col 1 of 2"),M(),T(4,"div",2),f(5,"col 1 of 2"),M()(),T(6,"div",1)(7,"div",3),f(8,"col 1 of 3"),M(),T(9,"div",3),f(10,"col 1 of 3"),M(),T(11,"div",3),f(12,"col 1 of 3"),M()(),T(13,"div",1)(14,"div",3),f(15,"col 1 of 3"),M(),T(16,"div",4),f(17,"col 2 of 3"),M()(),T(18,"div",1)(19,"div",5),f(20,"col 1 of 4"),M(),T(21,"div",5),f(22,"col 1 of 4"),M(),T(23,"div",5),f(24,"col 1 of 4"),M(),T(25,"div",5),f(26,"col 1 of 4"),M()(),T(27,"div",1)(28,"div",5),f(29,"col 1 of 4"),M(),T(30,"div",5),f(31,"col 1 of 4"),M(),T(32,"div",6),f(33,"col 2 of 4"),M()(),T(34,"div",1)(35,"div",5),f(36,"col 1 of 4"),M(),T(37,"div",7),f(38,"col 3 of 4"),M()()())}var qc=(()=>{class i{constructor(){this.showGrid=!1,this.showGrid=!1}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-page-not-found"]],decls:3,vars:1,consts:[[1,"grid-test"],[1,"row"],[1,"col-1-of-2"],[1,"col-1-of-3"],[1,"col-2-of-3"],[1,"col-1-of-4"],[1,"col-2-of-4"],[1,"col-3-of-4"]],template:function(e,o){e&1&&(T(0,"p"),f(1,"page-not-found works!"),M(),rt(2,lh,39,0,"section",0)),e&2&&(b(2),at(o.showGrid?2:-1))},styles:['.row[_ngcontent-%COMP%]{max-width:114rem;margin:0 auto}.row[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8rem}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}.row[_ngcontent-%COMP%]   [class^=col-][_ngcontent-%COMP%]{float:left}.row[_ngcontent-%COMP%]   [class^=col-][_ngcontent-%COMP%]:not(:last-child){margin-right:8rem}.row[_ngcontent-%COMP%]   .col-1-of-2[_ngcontent-%COMP%]{width:calc((100% - 8rem)/2)}.row[_ngcontent-%COMP%]   .col-1-of-3[_ngcontent-%COMP%]{width:calc((100% - 2 * 8rem) / 3)}.row[_ngcontent-%COMP%]   .col-2-of-3[_ngcontent-%COMP%]{width:calc(2 * (100% - 2 * 8rem) / 3 + 8rem)}.row[_ngcontent-%COMP%]   .col-1-of-4[_ngcontent-%COMP%]{width:calc((100% - 24rem)/4)}.row[_ngcontent-%COMP%]   .col-2-of-4[_ngcontent-%COMP%]{width:calc(.5*(100% - 24rem) + 8rem)}.row[_ngcontent-%COMP%]   .col-3-of-4[_ngcontent-%COMP%]{width:calc(.75*(100% - 24rem) + 16rem)}']})}}return i})();var Lo=(()=>{class i{constructor(t){this.platformId=t,console.log("AdobeserviceService initialized with platformId:",this.platformId)}push(t){Ei(this.platformId)&&(window.AdobeDC=window.AdobeDC||[],window.AdobeDC.push(t))}trackEvent(t,e){this.push({event:t,data:e})}static{this.\u0275fac=function(e){return new(e||i)(B(_i))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Kc=(()=>{class i{constructor(t,e){this.el=t,this.adobeservice=e,this.fieldName=""}onFocus(){console.log("Input field focused directive",this.el.nativeElement.value);let t={field:this.fieldName||this.el.nativeElement.name,value:this.el.nativeElement.value};this.adobeservice.trackEvent(this.fieldName,t)}static{this.\u0275fac=function(e){return new(e||i)(z(H),z(Lo))}}static{this.\u0275dir=F({type:i,selectors:[["","appAdobeDirective",""]],hostBindings:function(e,o){e&1&&I("focus",function(){return o.onFocus()})},inputs:{fieldName:"fieldName"}})}}return i})();var Qc=(()=>{class i{constructor(){this.name="",this.cdata=Qs(""),this.pout=Ys(),this.pdata=new wt,this.childData=""}onInputChange(t){console.log("input value in child component ===> ",this.childData),this.pdata.emit(this.childData),this.pout.emit(this.childData)}onFocused(t){console.log("input field focused in child component ===> ",this.childData)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-child"]],inputs:{name:"name",cdata:[1,"cdata"]},outputs:{pout:"pout",pdata:"pdata"},decls:14,vars:4,consts:[["type","text","appAdobeDirective","","fieldName","adobeChildInput",3,"ngModelChange","input","ngModel"]],template:function(e,o){e&1&&(p(0,"div")(1,"h2"),f(2,"Child Component"),h(),p(3,"div")(4,"p"),f(5),h(),p(6,"p"),f(7),h()(),p(8,"fieldset"),R(9,"legend"),f(10," child input field : "),p(11,"input",0),Ci("ngModelChange",function(a){return xi(o.childData,a)||(o.childData=a),a}),I("input",function(a){return o.onInputChange(a)}),h(),p(12,"p"),f(13),h()()()),e&2&&(b(5),vt(" data passed from parent: ",o.name),b(2),vt(" data passed from parent: input() ",o.cdata()),b(4),yi("ngModel",o.childData),b(2),vt(" child input value: ",o.childData))},dependencies:[Oe,Si,Ti,Di,Kc],encapsulation:2})}}return i})();var Xc=(()=>{class i{constructor(){this.inputValue="",this.childData="",this.ppData=""}onInputChange(){console.log("input value in parent component ===> ",this.inputValue)}onChildDataReceived(t){console.log("data received from child component ===> ",t),this.childData=t}onChildOutputReceived(t){console.log("output received from child component ===> ",t),this.ppData=t}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-parent"]],decls:18,vars:6,consts:[["type","text",3,"ngModelChange","input","ngModel"],[3,"pdata","pout","name","cdata"]],template:function(e,o){e&1&&(p(0,"div")(1,"h2"),f(2,"Parent Component"),h(),p(3,"section")(4,"div")(5,"p"),f(6),h(),p(7,"fieldset"),R(8,"legend"),f(9," parent input field : "),p(10,"input",0),Ci("ngModelChange",function(a){return xi(o.inputValue,a)||(o.inputValue=a),a}),I("input",function(){return o.onInputChange()}),h()(),p(11,"p"),f(12),h(),p(13,"p"),f(14),h()()(),p(15,"section")(16,"div")(17,"app-child",1),I("pdata",function(a){return o.onChildDataReceived(a)})("pout",function(a){return o.onChildOutputReceived(a)}),h()()()()),e&2&&(b(6),vt("Name: ",o.inputValue),b(4),yi("ngModel",o.inputValue),b(2),vt("data passed to child:",o.childData," "),b(2),vt("data passed to child output():",o.ppData," "),b(3),J("name",o.inputValue)("cdata",o.inputValue))},dependencies:[Qc,Oe,Si,Ti,Di],encapsulation:2})}}return i})();var oi=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-modalpage-child"]],decls:5,vars:0,consts:[[1,"modal-child"]],template:function(e,o){e&1&&(T(0,"div",0)(1,"h3"),f(2,"Modal child content"),M(),T(3,"p"),f(4,"This component is rendered inside the modal page using Angular CDK portals."),M()())},encapsulation:2})}}return i})();var _a=class{_box;_destroyed=new V;_resizeSubject=new V;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ee(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),e.unsubscribe(),this._elementObservables.delete(n)}}).pipe(nt(t=>t.some(e=>e.target===n)),Tr({bufferSize:1,refCount:!0}),ht(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Zc=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=c(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new _a(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ch=["notch"],dh=["matFormFieldNotchedOutline",""],mh=["*"],Jc=["iconPrefixContainer"],td=["textPrefixContainer"],ed=["iconSuffixContainer"],id=["textSuffixContainer"],uh=["textField"],fh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],hh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ph(i,n){i&1&&R(0,"span",21)}function gh(i,n){if(i&1&&(p(0,"label",20),et(1,1),rt(2,ph,1,0,"span",21),h()),i&2){let t=lt(2);J("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),_t("for",t._control.disableAutomaticLabeling?null:t._control.id),b(2),at(!t.hideRequiredMarker&&t._control.required?2:-1)}}function _h(i,n){if(i&1&&rt(0,gh,3,5,"label",20),i&2){let t=lt();at(t._hasFloatingLabel()?0:-1)}}function bh(i,n){i&1&&R(0,"div",7)}function vh(i,n){}function yh(i,n){if(i&1&&ft(0,vh,0,0,"ng-template",13),i&2){lt(2);let t=vi(1);J("ngTemplateOutlet",t)}}function xh(i,n){if(i&1&&(p(0,"div",9),rt(1,yh,1,1,null,13),h()),i&2){let t=lt();J("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),b(),at(t._forceDisplayInfixLabel()?-1:1)}}function Ch(i,n){i&1&&(p(0,"div",10,2),et(2,2),h())}function Eh(i,n){i&1&&(p(0,"div",11,3),et(2,3),h())}function wh(i,n){}function Sh(i,n){if(i&1&&ft(0,wh,0,0,"ng-template",13),i&2){lt();let t=vi(1);J("ngTemplateOutlet",t)}}function Th(i,n){i&1&&(p(0,"div",14,4),et(2,4),h())}function Dh(i,n){i&1&&(p(0,"div",15,5),et(2,5),h())}function Mh(i,n){i&1&&R(0,"div",16)}function kh(i,n){i&1&&(p(0,"div",18),et(1,6),h())}function Ah(i,n){if(i&1&&(p(0,"mat-hint",22),f(1),h()),i&2){let t=lt(2);J("id",t._hintLabelId),b(),Rt(t.hintLabel)}}function Rh(i,n){if(i&1&&(p(0,"div",19),rt(1,Ah,2,2,"mat-hint",22),et(2,7),R(3,"div",23),et(4,8),h()),i&2){let t=lt();b(),at(t.hintLabel?1:-1)}}var Mn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-label"]]})}return i})(),Oh=new D("MatError");var ba=(()=>{class i{align="start";id=c(Dt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(Wt("id",o.id),_t("align",null),$("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Ih=new D("MatPrefix");var Ph=new D("MatSuffix");var cd=new D("FloatingLabelParent"),nd=(()=>{class i{_elementRef=c(H);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(Zc);_ngZone=c(O);_parent=c(cd);_resizeSubscription=new mi;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Fh(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&$("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Fh(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var od="mdc-line-ripple--active",Bo="mdc-line-ripple--deactivating",rd=(()=>{class i{_elementRef=c(H);_cleanupTransitionEnd;constructor(){let t=c(O),e=c(Mt);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Bo),t.add(od)}deactivate(){this._elementRef.nativeElement.classList.add(Bo)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(Bo);t.propertyName==="opacity"&&o&&e.remove(od,Bo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),ad=(()=>{class i{_elementRef=c(H);_ngZone=c(O);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&St(ch,5),e&2){let r;G(r=q())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&$("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:dh,ngContentSelectors:mh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&(bt(),Lt(0,"div",1),T(1,"div",2,0),et(3),M(),Lt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),va=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i})}return i})();var ya=new D("MatFormField"),Nh=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),sd="fill",Lh="auto",ld="fixed",Bh="translateY(-50%)",zo=(()=>{class i{_elementRef=c(H);_changeDetectorRef=c(ce);_platform=c(K);_idGenerator=c(Dt);_ngZone=c(O);_defaults=c(Nh,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=sn("iconPrefixContainer");_textPrefixContainerSignal=sn("textPrefixContainer");_iconSuffixContainerSignal=sn("iconSuffixContainer");_textSuffixContainerSignal=sn("textSuffixContainer");_prefixSuffixContainers=Jn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Xs(Mn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=we(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Lh}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||sd;this._appearanceSignal.set(e)}_appearanceSignal=Ge(sd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ld}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ld}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new V;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=yt();constructor(){let t=this._defaults,e=c(Xt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),on(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Jn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(be([void 0,void 0]),Et(()=>[e.errorState,e.userAriaDescribedBy]),Sr(),nt(([[r,a],[s,l]])=>r!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(ht(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Kt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Zs({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Jn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,o;if(e){let r=this._describedByIds||t;o=t.concat(e.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=e?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,E=`calc(${u} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,g=`var(--mat-mdc-form-field-label-transform, ${Bh} translateX(${E}))`,_=a+s+l+d;return[g,_]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-form-field"]],contentQueries:function(e,o,r){if(e&1&&(Ws(r,o._labelChild,Mn,5),bi(r,va,5)(r,Ih,5)(r,Ph,5)(r,Oh,5)(r,ba,5)),e&2){Rr();let a;G(a=q())&&(o._formFieldControl=a.first),G(a=q())&&(o._prefixChildren=a),G(a=q())&&(o._suffixChildren=a),G(a=q())&&(o._errorChildren=a),G(a=q())&&(o._hintChildren=a)}},viewQuery:function(e,o){if(e&1&&(Gs(o._iconPrefixContainerSignal,Jc,5)(o._textPrefixContainerSignal,td,5)(o._iconSuffixContainerSignal,ed,5)(o._textSuffixContainerSignal,id,5),St(uh,5)(Jc,5)(td,5)(ed,5)(id,5)(nd,5)(ad,5)(rd,5)),e&2){Rr(4);let r;G(r=q())&&(o._textField=r.first),G(r=q())&&(o._iconPrefixContainer=r.first),G(r=q())&&(o._textPrefixContainer=r.first),G(r=q())&&(o._iconSuffixContainer=r.first),G(r=q())&&(o._textSuffixContainer=r.first),G(r=q())&&(o._floatingLabel=r.first),G(r=q())&&(o._notchedOutline=r.first),G(r=q())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&$("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[se([{provide:ya,useExisting:i},{provide:cd,useExisting:i}])],ngContentSelectors:hh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&(bt(fh),ft(0,_h,1,1,"ng-template",null,0,le),p(2,"div",6,1),I("click",function(a){return o._control.onContainerClick(a)}),rt(4,bh,1,0,"div",7),p(5,"div",8),rt(6,xh,2,2,"div",9),rt(7,Ch,3,0,"div",10),rt(8,Eh,3,0,"div",11),p(9,"div",12),rt(10,Sh,1,1,null,13),et(11),h(),rt(12,Th,3,0,"div",14),rt(13,Dh,3,0,"div",15),h(),rt(14,Mh,1,0,"div",16),h(),p(15,"div",17),rt(16,kh,2,0,"div",18)(17,Rh,5,1,"div",19),h()),e&2){let r;b(2),$("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),b(2),at(!o._hasOutline()&&!o._control.disabled?4:-1),b(2),at(o._hasOutline()?6:-1),b(),at(o._hasIconPrefix?7:-1),b(),at(o._hasTextPrefix?8:-1),b(2),at(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),b(2),at(o._hasTextSuffix?12:-1),b(),at(o._hasIconSuffix?13:-1),b(),at(o._hasOutline()?-1:14),b(),$("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();b(),at((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[nd,ad,tl,rd,ba],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var kn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[vo,zo,dt]})}return i})();var jh=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Vh={passive:!0},dd=(()=>{class i{_platform=c(K);_ngZone=c(O);_renderer=c(Pt).createRenderer(null,null);_styleLoader=c(Ot);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Un;this._styleLoader.load(jh);let e=Gt(t),o=this._monitoredElements.get(e);if(o)return o.subject;let r=new V,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(a)?(e.classList.add(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",s,Vh)));return this._monitoredElements.set(e,{subject:r,unlisten:l}),r}stopMonitoring(t){let e=Gt(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var md=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({})}return i})();var ud=new D("MAT_INPUT_VALUE_ACCESSOR");var fd=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var jo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,t,e,o,r){this._defaultMatcher=n,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=e?.isErrorState(o,t)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var Hh=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Uh=new D("MAT_INPUT_CONFIG"),hd=(()=>{class i{_elementRef=c(H);_platform=c(K);ngControl=c(El,{optional:!0,self:!0});_autofillMonitor=c(dd);_ngZone=c(O);_formField=c(ya,{optional:!0});_renderer=c(Mt);_uid=c(Dt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Uh,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new V;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=we(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Cl.required)??!1}set required(t){this._required=we(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&oa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=we(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>oa().has(t));constructor(){let t=c(wl,{optional:!0}),e=c(Sl,{optional:!0}),o=c(fd),r=c(ud,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?Us(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new jo(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&on(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Hh.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&I("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(Wt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),_t("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),$("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",gt]},exportAs:["matInput"],features:[se([{provide:va,useExisting:i}]),ve]})}return i})(),pd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[kn,kn,md,dt]})}return i})();var Gh=["tooltip"],qh=20;var $h=new D("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(tt);return()=>Po(i,{scrollThrottle:qh})}}),Kh=new D("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var gd="tooltip-panel",Yh={passive:!0},Qh=8,Xh=8,Zh=24,Jh=200,xa=(()=>{class i{_elementRef=c(H);_ngZone=c(O);_platform=c(K);_ariaDescriber=c(dc);_focusMonitor=c(Ee);_dir=c(Xt);_injector=c(tt);_viewContainerRef=c(Yt);_mediaMatcher=c(Fi);_document=c(it);_renderer=c(Mt);_animationsDisabled=yt();_defaultOptions=c(Kh,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=_d;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=we(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=we(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Ce(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Ce(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new V;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Qh}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ht(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(e);this._detach(),this._portal=this._portal||new qt(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ht(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof H)return this._overlayRef;this._detach()}let e=this._injector.get(ei).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${gd}`,r=No(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return r.positionChanges.pipe(ht(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ui(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get($h)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ht(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ht(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ht(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ht(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();e.withPositions([this._addOffset(S(S({},o.main),r.main)),this._addOffset(S(S({},o.fallback),r.fallback))])}_addOffset(t){let e=Xh,o=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=o?-e:e:t.originX==="end"&&(t.offsetX=o?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,o;e=="above"||e=="below"?o={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?o={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,o;e=="above"?o={overlayX:"center",overlayY:"bottom"}:e=="below"?o={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?o={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ut(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:o,originY:r}=t,a;if(e==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=e==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${gd}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],o=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;e!==o&&!o.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Yh))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,o=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(t==="on"||!e.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||Ut({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!Pe(t):!0;static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,o){e&2&&$("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),_d=(()=>{class i{_changeDetectorRef=c(ce);_elementRef=c(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=yt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new V;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Zh&&t.width>=Jh}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(e.classList.remove(t?r:o),e.classList.add(t?o:r),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(e);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(e,o){if(e&1&&St(Gh,7),e&2){let r;G(r=q())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,o){e&1&&I("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,o){e&1&&(T(0,"div",1,0),Ke("animationend",function(a){return o._handleAnimationEnd(a)}),T(2,"div",2),f(3),M()()),e&2&&(Ye(o.tooltipClass),$("mdc-tooltip--multiline",o._isMultiline),b(3),Rt(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var Vo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[_n,ni,dt,En]})}return i})();var bd=(()=>{class i{constructor(){this.label="Input",this.placeholder="",this.tooltipText="This is a tooltip",this.tooltipPosition="above"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-input-with-tooltip"]],inputs:{label:"label",placeholder:"placeholder",tooltipText:"tooltipText",tooltipPosition:"tooltipPosition"},decls:4,vars:4,consts:[["matInput","",3,"placeholder","matTooltip","matTooltipPosition"]],template:function(e,o){e&1&&(p(0,"mat-form-field")(1,"mat-label"),f(2),h(),R(3,"input",0),h()),e&2&&(b(2),Rt(o.label),b(),J("placeholder",o.placeholder)("matTooltip",o.tooltipText)("matTooltipPosition",o.tooltipPosition))},dependencies:[kn,zo,Mn,pd,hd,Vo,xa],encapsulation:2})}}return i})();var qi=(()=>{class i{setModal(t){this.modal=t,this.pendingAction&&(this.pendingAction(),this.pendingAction=void 0)}show(t){this.modal?this.modal.show(t):this.pendingAction=()=>this.modal?.show(t)}openComponent(t,e){this.modal?this.modal.openComponent(t,e):this.pendingAction=()=>this.modal?.openComponent(t,e)}close(){this.modal?.close()}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function ep(i,n){}var Uo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ea="mdc-dialog--open",vd="mdc-dialog--opening",yd="mdc-dialog--closing",ip=150,np=75,op=(()=>{class i extends Tn{_animationStateChanged=new wt;_animationsEnabled=!yt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Cd(this._config.enterAnimationDuration)??ip:0;_exitAnimationDuration=this._animationsEnabled?Cd(this._config.exitAnimationDuration)??np:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(xd,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(vd,Ea)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ea),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ea),this._animationsEnabled?(this._hostElement.style.setProperty(xd,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(yd)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(vd,yd)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})();static \u0275cmp=v({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(Wt("id",o._config.id),_t("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),$("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[Nt],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(p(0,"div",0)(1,"div",1),ft(2,ep,0,0,"ng-template",2),h()())},dependencies:[Ft],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),xd="--mat-dialog-transition-duration";function Cd(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?Ce(i.substring(0,i.length-2)):i.endsWith("s")?Ce(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Ho=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Ho||{}),ri=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new tn(1);_beforeClosed=new tn(1);_result;_closeFallbackTimeout;_state=Ho.OPEN;_closeInteractionType;constructor(n,t,e){this._ref=n,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(nt(o=>o.state==="opened"),At(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(nt(o=>o.state==="closed"),At(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Kt(this.backdropClick(),this.keydownEvents().pipe(nt(o=>o.keyCode===27&&!this.disableClose&&!Pe(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),Ed(this,o.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(nt(e=>e.state==="closing"),At(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=Ho.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Ho.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ed(i,n,t){return i._closeInteractionType=n,i.close(t)}var wa=new D("MatMdcDialogData"),rp=new D("mat-mdc-dialog-default-options"),ap=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(tt);return()=>Fe(i)}}),An=(()=>{class i{_defaultOptions=c(rp,{optional:!0});_scrollStrategy=c(ap);_parentDialog=c(i,{optional:!0,skipSelf:!0});_idGenerator=c(Dt);_injector=c(tt);_dialog=c(Dn);_animationsDisabled=yt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new V;_afterOpenedAtThisLevel=new V;dialogConfigClass=Uo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(be(void 0)));constructor(){this._dialogRefConstructor=ri,this._dialogContainerType=op,this._dialogDataToken=wa}open(t,e){let o;e=S(S({},this._defaultOptions||new Uo),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,It(S({},e),{positionStrategy:Ne(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:Le,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(a,s,l)=>(o=new this._dialogRefConstructor(a,e,l),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wd=(()=>{class i{dialogRef=c(ri,{optional:!0});_elementRef=c(H);_dialog=c(An);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=kd(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Ed(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,o){e&1&&I("click",function(a){return o._onButtonClick(a)}),e&2&&_t("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ve]})}return i})(),Sd=(()=>{class i{_dialogRef=c(ri,{optional:!0});_elementRef=c(H);_dialog=c(An);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=kd(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i})}return i})(),Td=(()=>{class i extends Sd{id=c(Dt).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,o){e&2&&Wt("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[Nt]})}return i})(),Dd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Hs([ca])]})}return i})(),Md=(()=>{class i extends Sd{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,o){e&2&&$("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[Nt]})}return i})();function kd(i,n){let t=i.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(e=>e.id===t.id):null}var Ad=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({providers:[An],imports:[pa,ni,zt,dt]})}return i})();var lp={capture:!0},cp=["focus","mousedown","mouseenter","touchstart"],Sa="mat-ripple-loader-uninitialized",Ta="mat-ripple-loader-class-name",Rd="mat-ripple-loader-centered",Wo="mat-ripple-loader-disabled",Od=(()=>{class i{_document=c(it);_animationsDisabled=yt();_globalRippleOptions=c(sa,{optional:!0});_platform=c(K);_ngZone=c(O);_injector=c(tt);_eventCleanups;_hosts=new Map;constructor(){let t=c(Pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>cp.map(e=>t.listen(this._document,e,this._onInteraction,lp)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Sa,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Ta))&&t.setAttribute(Ta,e.className||""),e.centered&&t.setAttribute(Rd,""),e.disabled&&t.setAttribute(Wo,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Wo,""):t.removeAttribute(Wo)}_onInteraction=t=>{let e=Bt(t);if(e instanceof HTMLElement){let o=e.closest(`[${Sa}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Ta)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??bn.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??bn.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Wo),rippleConfig:{centered:t.hasAttribute(Rd),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},l=new vn(s,this._ngZone,e,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:d}),t.removeAttribute(Sa)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var dp=new D("MAT_BUTTON_CONFIG");function Id(i){return i==null?void 0:ln(i)}var Pd=(()=>{class i{_elementRef=c(H);_ngZone=c(O);_animationsDisabled=yt();_config=c(dp,{optional:!0});_focusMonitor=c(Ee);_cleanupClick;_renderer=c(Mt);_rippleLoader=c(Od);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){c(Ot).load(Co);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(_t("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Ye(o.color?"mat-"+o.color:""),$("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",gt],disabled:[2,"disabled","disabled",gt],ariaDisabled:[2,"aria-disabled","ariaDisabled",gt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",gt],tabIndex:[2,"tabIndex","tabIndex",Id],_tabindex:[2,"tabindex","_tabindex",Id]}})}return i})();var mp=["matButton",""],up=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],fp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Fd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Nd=(()=>{class i extends Pd{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=hp(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Fd.get(this._appearance):null,r=Fd.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Nt],attrs:mp,ngContentSelectors:fp,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(bt(up),Lt(0,"span",0),et(1),T(2,"span",1),et(3,1),M(),et(4,2),Lt(5,"span",2)(6,"span",3)),e&2&&$("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function hp(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Go=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[So,dt]})}return i})();var gp=["dynamicContent"];function _p(i,n){}var qo=(()=>{class i{constructor(){this.dialogRef=c(ri),this.data=c(wa)}ngAfterViewInit(){if(this.data.component){this.dynamicContent.clear();let t=this.dynamicContent.createComponent(this.data.component),e=this.data.componentInputs??{},o=t.instance;Object.assign(o,e)}}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-dialogbox"]],viewQuery:function(e,o){if(e&1&&St(gp,7,Yt),e&2){let r;G(r=q())&&(o.dynamicContent=r.first)}},decls:12,vars:7,consts:[["dynamicContent",""],["mat-dialog-title",""],[3,"hidden"],["align","end"],["mat-button","",3,"mat-dialog-close"],["mat-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,o){e&1&&(p(0,"h2",1),f(1),h(),p(2,"mat-dialog-content"),ft(3,_p,0,0,"ng-template",null,0,le),p(5,"div",2),f(6),h()(),p(7,"mat-dialog-actions",3)(8,"button",4),f(9),h(),p(10,"button",5),f(11),h()()),e&2&&(b(),Rt(o.data.title||"Confirm"),b(4),J("hidden",o.data.component),b(),vt(" ",o.data.message||"Are you sure you want to continue?"," "),b(2),J("mat-dialog-close",!1),b(),Rt(o.data.cancelText||"Cancel"),b(),J("mat-dialog-close",!0),b(),vt(" ",o.data.confirmText||"Ok"," "))},dependencies:[Go,Nd,Md,wd,Td,Dd],encapsulation:2,changeDetection:0})}}return i})();var Ld=(()=>{class i{constructor(t){this.dialog=t}showDialog(t){let e=this.dialog.open(qo,{width:t.width||"400px",data:S({title:t.title||"Confirm",message:t.message||"",confirmText:t.confirmText||"Ok",cancelText:t.cancelText||"Cancel",component:t.component,componentInputs:t.componentInputs},t.data),disableClose:t.disableClose??!1,hasBackdrop:t.hasBackdrop??!0});return this.lastDialogRef=e,e}closeDialog(t){this.lastDialogRef&&(this.lastDialogRef.close(t),this.lastDialogRef=void 0)}static{this.\u0275fac=function(e){return new(e||i)(B(An))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Da=(()=>{class i{constructor(t,e,o,r){this.titleService=t,this.modalpageService=e,this.dialogService=o,this.platformId=r,t.setTitle("Home"),Ei(this.platformId)&&(window.modalpageService=e,window.dialogService=o)}openModal(){this.modalpageService.openComponent(oi,"Modal Page Example")}openDialog(){this.dialogService.showDialog({title:"Dynamic Dialog Shell",component:oi,componentInputs:{},width:"500px",hasBackdrop:!1}).afterClosed().subscribe(t=>{console.log("Dialog closed with:",t)})}static{this.\u0275fac=function(e){return new(e||i)(z(me),z(qi),z(Ld),z(_i))}}static{this.\u0275cmp=v({type:i,selectors:[["app-home"]],decls:46,vars:0,consts:[[1,"homeHeader"],[1,"homeBody"],["routerLink","/csscourseapp"],["routerLink","/user"],["routerLink","/counter"],["routerLink","/lifecycleMethods"],["routerLink","/app"],["routerLink","/bookslist"],["routerLink","/radiooptionselector"],["routerLink","/onboarding"],["routerLink","/portalexample"],["routerLink","/modalpage"],["type","button",3,"click"],["name","passing data from home"],["label","Username","placeholder","Enter your username","tooltipText","This is a tooltip for the username field","tooltipPosition","above"]],template:function(e,o){e&1&&(p(0,"div",0)(1,"h1"),f(2,"Welcome to Home"),h()(),p(3,"div",1)(4,"ul")(5,"li")(6,"a",2),f(7,"CSS Course App"),h()(),p(8,"li")(9,"a",3),f(10,"User App"),h()(),p(11,"li")(12,"a",4),f(13,"Counter App"),h()(),p(14,"li")(15,"a",5),f(16," Life Cycle Methods"),h()(),p(17,"li")(18,"a",6),f(19," card application"),h()(),p(20,"li")(21,"a",7),f(22," Books List"),h()(),p(23,"li")(24,"a",8),f(25," Radio Button"),h()(),p(26,"li")(27,"a",9),f(28," On Boarding Application"),h()(),p(29,"li")(30,"a",10),f(31," Portal Example"),h()(),p(32,"li")(33,"a",11),f(34," Modal Page"),h()(),p(35,"li")(36,"button",12),I("click",function(){return o.openModal()}),f(37,"Open modal page with a child component"),h()(),p(38,"li")(39,"button",12),I("click",function(){return o.openDialog()}),f(40,"Open generic dialog"),h()(),R(41,"app-parent",13),h(),p(42,"div")(43,"h2"),f(44," Input field with Tooltip"),h(),R(45,"app-input-with-tooltip",14),h()())},dependencies:[ll,Xc,bd],styles:[".homeHeader[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:20px;text-align:center}.homeBody[_ngcontent-%COMP%]{margin:20px}"]})}}return i})();var Bd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-userlogin"]],decls:6,vars:0,consts:[[1,"Btn"]],template:function(e,o){e&1&&(T(0,"p"),f(1,"userlogin works!"),M(),T(2,"form"),Lt(3,"input"),T(4,"button",0),f(5,"Sign In"),M()())},styles:[".Btn[_ngcontent-%COMP%]{color:red;border-radius:70px}"]})}}return i})();function vp(i,n){if(i&1){let t=$e();p(0,"button",1),I("click",function(){Ue(t);let o=lt(2);return We(o.openIframe())}),f(1,"Sign In"),h()}}function yp(i,n){if(i&1){let t=$e();p(0,"button",1),I("click",function(){Ue(t);let o=lt(2);return We(o.closeIframe())}),f(1,"Close Iframe"),h()}}function xp(i,n){if(i&1&&R(0,"iframe",0),i&2){let t=lt(2);J("src",t.trustedUrl,js)}}function Cp(i,n){if(i&1&&(p(0,"div"),rt(1,vp,2,0,"button"),rt(2,yp,2,0,"button"),rt(3,xp,1,1,"iframe",0),h()),i&2){let t=lt();b(),at(t.showIframe?-1:1),b(),at(t.showIframe?2:-1),b(),at(t.showIframe?3:-1)}}var zd=(()=>{class i{constructor(t,e){this.titleService=t,this.store=e,this.showIframe=!1,this.sanitizer=c(oo),t.setTitle("User App"),this.trustedUrl=this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:3000/auth"),this.user$=this.store.select(o=>o.user),this.user$.subscribe(o=>{console.log("userer subscribe",o.firstName)})}openIframe(){console.log("user clicked on button"),this.showIframe=!0}closeIframe(){this.showIframe=!1}static{this.\u0275fac=function(e){return new(e||i)(z(me),z(Qt))}}static{this.\u0275cmp=v({type:i,selectors:[["app-user"]],decls:4,vars:1,consts:[["WIDTH","90%","HEIGHT","800",3,"src"],[3,"click"]],template:function(e,o){e&1&&(p(0,"p"),f(1,"User Login"),h(),R(2,"app-userlogin"),rt(3,Cp,4,3,"div")),e&2&&(b(3),at(-1))},dependencies:[Bd],encapsulation:2})}}return i})();var Be={increment:Tt("[Counter] Increment"),reset:Tt("[Counter] Reset"),decrement:Tt("[Counter] Decrement")};var jd=(()=>{class i{transform(t){return t.split("").reverse().join("")}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275pipe=Qn({name:"reverse",type:i,pure:!0})}}return i})();function Ep(i,n){if(i&1&&(p(0,"p"),f(1),Qe(2,"reverse"),h()),i&2){let t=lt();b(),vt("your text is : ",Xe(2,1,t.rText))}}var Hd=(()=>{class i{constructor(t,e){this.store=t,this.titleService=e,this.rText="",this.showReverseTxt=!1,e.setTitle("Counter App"),this.count$=this.store.select(o=>o.counter.count)}increment(){this.store.dispatch(Be.increment())}decrement(){this.store.dispatch(Be.decrement())}reset(){this.store.dispatch(Be.reset())}onChangeHandler(t){console.log("event --> :"+t.target.value),this.showReverseTxt=this.rText.length>1,console.log(this.showReverseTxt)}static{this.\u0275fac=function(e){return new(e||i)(z(Qt),z(me))}}static{this.\u0275cmp=v({type:i,selectors:[["app-counter"]],decls:22,vars:5,consts:[[1,"counter"],[3,"click"],["type","text","id","name",3,"ngModelChange","change","ngModel"]],template:function(e,o){e&1&&(p(0,"p"),f(1,"counter works!"),h(),p(2,"div",0)(3,"div"),f(4),Qe(5,"async"),h(),R(6,"br"),p(7,"button",1),I("click",function(){return o.increment()}),f(8,"Increment"),h(),R(9,"br"),p(10,"button",1),I("click",function(){return o.decrement()}),f(11,"Decrement"),h(),R(12,"br"),p(13,"button",1),I("click",function(){return o.reset()}),f(14,"Reset Counter"),h(),p(15,"p"),f(16,"Example for directive usage :"),h(),p(17,"div")(18,"label"),f(19,"Enter your text to show the reverse string :"),h(),p(20,"input",2),Ci("ngModelChange",function(a){return xi(o.rText,a)||(o.rText=a),a}),I("change",function(a){return o.onChangeHandler(a)}),h()(),rt(21,Ep,3,3,"p"),h()),e&2&&(b(4),vt("Current Count: ",Xe(5,3,o.count$)),b(16),yi("ngModel",o.rText),b(),at(o.showReverseTxt?21:-1))},dependencies:[de,Oe,Si,Ti,Di,no,jd],encapsulation:2})}}return i})();var Ud=(()=>{class i{constructor(){this.userName=""}ngOnChanges(t){console.log("ngOnChange life cycle method will excute whenever the input changes : ",t)}ngOnInit(){console.log("ngOnInit life cycle hook will excute after constructor is being excuted")}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-child"]],inputs:{userName:"userName"},features:[ve],decls:4,vars:1,template:function(e,o){e&1&&(T(0,"p"),f(1,"child works!"),M(),T(2,"p"),f(3),M()),e&2&&(b(3),vt("Here is the User Name :",o.userName))},encapsulation:2})}}return i})();var Wd=(()=>{class i{constructor(){this.userName="venu"}updateUser(){this.userName="vardhan"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-parent"]],decls:7,vars:1,consts:[[3,"click"],[3,"userName"]],template:function(e,o){e&1&&(p(0,"p"),f(1,"parent works!"),h(),p(2,"button",0),I("click",function(){return o.updateUser()}),f(3,"UPDATE "),h(),R(4,"br")(5,"br")(6,"app-child",1)),e&2&&(b(6),J("userName",o.userName))},dependencies:[Ud],encapsulation:2})}}return i})();var Gd=(()=>{class i{constructor(t){t.setTitle("life-cycle-example")}static{this.\u0275fac=function(e){return new(e||i)(z(me))}}static{this.\u0275cmp=v({type:i,selectors:[["app-life-cycle-example"]],decls:3,vars:0,template:function(e,o){e&1&&(p(0,"p"),f(1,"life-cycle-example works!"),h(),R(2,"app-parent"))},dependencies:[Wd],encapsulation:2})}}return i})();var qd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[dt]})}return i})();var wp=["*",[["mat-toolbar-row"]]],Sp=["*","mat-toolbar-row"],Tp=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=F({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),$d=(()=>{class i{_elementRef=c(H);_platform=c(K);_document=c(it);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=v({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,o,r){if(e&1&&bi(r,Tp,5),e&2){let a;G(a=q())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(Ye(o.color?"mat-"+o.color:""),$("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Sp,decls:2,vars:0,template:function(e,o){e&1&&(bt(wp),et(0),et(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Kd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=j({type:i});static \u0275inj=L({imports:[dt]})}return i})();var Yd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-radiooptionselector"]],decls:21,vars:0,consts:[["appearance","outlined",1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"item"],[1,"subitem"],["mat-card-image","","src","https://upload.wikimedia.org/wikipedia/commons/d/d2/Circle-icons-creditcard.svg"],["mat-card-image","","src","https://upload.wikimedia.org/wikipedia/commons/4/40/Klarna_Payment_Badge.svg"]],template:function(e,o){e&1&&(p(0,"p"),f(1,"radiooptionselector works!"),h(),p(2,"mat-card",0)(3,"mat-card-header"),R(4,"div",1),p(5,"mat-card-title"),f(6,"Radio Button Demo"),h(),p(7,"mat-card-subtitle"),f(8,"Radio Button component using material ui"),h()(),p(9,"mat-card-content")(10,"mat-radio-group")(11,"mat-radio-button",2)(12,"mat-card",3)(13,"mat-card-title"),f(14,"Credit Cards(Amex, Diners, Visa, Master)"),h(),R(15,"img",4),h()(),p(16,"mat-radio-button",2)(17,"mat-card",3)(18,"mat-card-title"),f(19," Bank Payment "),h(),R(20,"img",5),h()()()()())},dependencies:[yc,yn,Bi,qd,Kd,Vo,po,Mi,Wl,Ai,Oi,ho,Ri,ki,Go],styles:[".example-card[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:2px;background-color:#f0f8ff;display:flex;flex-direction:column;width:100%}.item[_ngcontent-%COMP%]{margin-top:1.5em;display:flex;flex-direction:column}.mat-card-image[_ngcontent-%COMP%]{width:40vw}.mat-card-title[_ngcontent-%COMP%]{font-family:Lato;width:40vw;white-space:normal}@media only screen and (min-width:800px){.mat-card-image[_ngcontent-%COMP%]{width:20vw}.mat-card-title[_ngcontent-%COMP%]{font-family:Lato;width:20vw;white-space:normal}}"]})}}return i})();function Dp(i,n){if(i&1&&(T(0,"div",3),f(1),M()),i&2){let t=n.$implicit;b(),Rt(t)}}var ze=(()=>{class i{constructor(){this.prdocutNames=["Angular","React"],this.logoUrl="assets/icons/v.png"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-header"]],inputs:{prdocutNames:"prdocutNames",logoUrl:"logoUrl"},decls:5,vars:1,consts:[[1,"container","header-container"],["aria-hidden","true","alt","",1,"logo","img-section",3,"src"],[1,"text-section"],[1,"content"]],template:function(e,o){e&1&&(T(0,"div",0),Lt(1,"img",1),T(2,"div",2),Me(3,Dp,2,1,"div",3,Xn),M()()),e&2&&(b(),Wt("src",o.logoUrl,Yn),b(2),ke(o.prdocutNames))},styles:["[_nghost-%COMP%]{background:#0079c1;display:flex;justify-content:center;align-items:center;height:64px;padding:0 32px}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;height:32px}[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   .text-section[_ngcontent-%COMP%]{color:#fff}@media only screen and (min-width:600px){[_nghost-%COMP%]{padding:0}}"]})}}return i})();function Mp(i,n){if(i&1&&(T(0,"span")(1,"a",5),f(2),M()()),i&2){let t=n.$implicit;b(),Wt("href",$s(t.url),Yn),b(),Rt(t.key)}}function kp(i,n){i&1&&Lt(0,"div",4),i&2&&Wt("innerHTML",n,zs)}var $i=(()=>{class i{constructor(t,e){this.domSanitizer=t,this.http=e,this.footerId="terms-section",this.links=[{key:"legal",url:""},{key:"security",url:""},{key:"privacy",url:""}]}ngOnInit(){this.http.get("assets/content/footer/footer.html",{responseType:"text"}).subscribe(t=>{console.log(t),this.DynamicContent$=Ct(t)})}static{this.\u0275fac=function(e){return new(e||i)(z(oo),z(Ae))}}static{this.\u0275cmp=v({type:i,selectors:[["app-footer"]],inputs:{footerId:"footerId"},decls:8,vars:4,consts:[[1,"footer-container"],[1,"footer-section","flex-column"],["id","links-section",1,"links"],[3,"id"],[3,"innerHTML"],["target","_blank","rel","noopener noreferrer",1,"bold",3,"href"]],template:function(e,o){if(e&1&&(T(0,"div",0)(1,"div",1)(2,"div",2),Me(3,Mp,3,3,"span",null,Zn),M(),T(5,"div",3),rt(6,kp,1,1,"div",4),Qe(7,"async"),M()()()),e&2){let r;b(3),ke(o.links),b(2),Wt("id",o.footerId),b(),at((r=Xe(7,2,o.DynamicContent$))?6:-1,r)}},dependencies:[de,no],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;background-color:#fff;border-top:1px solid rgb(231.5230769231,233.4615384615,236.4769230769)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#0079c1;font-size:1.4rem;padding-right:32px;text-decoration:underline}[_nghost-%COMP%]   a.focus[_ngcontent-%COMP%]{outline:2px solid #73C3EB}[_nghost-%COMP%]   .footer-container[_ngcontent-%COMP%]{max-width:502px;margin:0 auto;display:flex;flex-direction:column;align-items:flex-start}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;align-self:flex-start;height:32px;margin:8px 0}[_nghost-%COMP%]   .links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .footer-section[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .footer-section.flex-column[_ngcontent-%COMP%]{flex-direction:column}"]})}}return i})();var Qd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-main-layout"]],decls:10,vars:0,consts:[[1,"page-wrapper"],[1,"main-layout__header"],[1,"container","banner"],[1,"container","main-layout__main"],[1,"main-layout__footer","flex-row","flow-wrap"],["id","footer"]],template:function(e,o){e&1&&(p(0,"div",0)(1,"header",1),R(2,"app-header"),h(),p(3,"div",2)(4,"p"),f(5,"Banner"),h()(),p(6,"main",3),R(7,"router-outlet"),h()(),p(8,"footer",4),R(9,"app-footer",5),h())},dependencies:[Re,ze,$i],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin:0;width:100%;height:100%}[_nghost-%COMP%]   .main-layout_top-container[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .main-layout__header[_ngcontent-%COMP%]{display:block;margin:0 auto}[_nghost-%COMP%]   .main-layout__main[_ngcontent-%COMP%]{display:block;margin:0 auto 48px;max-width:calc(100% - 32px)}[_nghost-%COMP%]   .main-layout__footer[_ngcontent-%COMP%]{display:block;width:100%;position:relative;bottom:0}[_nghost-%COMP%]   .banner[_ngcontent-%COMP%]{display:block;text-align:center}"]})}}return i})();var Xd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-simple-page-layout"]],decls:5,vars:0,consts:[[1,"page-wrapper"],[1,"simple-layout__header"],[1,"simple-layout__main"]],template:function(e,o){e&1&&(p(0,"div",0)(1,"header",1),R(2,"app-header"),h(),p(3,"main",2),R(4,"router-outlet"),h()())},dependencies:[Re,ze],encapsulation:2})}}return i})();var Zd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-full-page-layout"]],decls:7,vars:0,template:function(e,o){e&1&&(p(0,"div")(1,"header"),R(2,"app-header"),h(),p(3,"main"),R(4,"router-outlet"),h()(),p(5,"footer"),R(6,"app-footer"),h())},dependencies:[Re,$i,ze],encapsulation:2})}}return i})();var Jd=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["app-cardapplication"]],decls:23,vars:0,consts:[[1,"layout-container"],[1,"appheader"],["color","primary"],[1,"content"],[1,"card"],["mat-card-image","","src","https://via.placeholder.com/400x200","alt","Card Image"],["mat-button",""],[1,"footer"],["color","accent"]],template:function(e,o){e&1&&(p(0,"div",0)(1,"app-header",1)(2,"mat-toolbar",2),f(3,"Card Application"),h()(),p(4,"div",3)(5,"mat-card",4)(6,"mat-card-header")(7,"mat-card-title"),f(8,"Card Title"),h(),p(9,"mat-card-subtitle"),f(10,"Card Subtitle"),h()(),R(11,"img",5),p(12,"mat-card-content")(13,"p"),f(14,"This is some content inside the card. You can add more details here."),h()(),p(15,"mat-card-actions")(16,"button",6),f(17,"LIKE"),h(),p(18,"button",6),f(19,"SHARE"),h()()()(),p(20,"app-footer",7)(21,"mat-toolbar",8),f(22,"Card Application"),h()()())},dependencies:[po,Mi,Ul,Ai,Oi,ho,Ri,ki,$d,ze,$i],styles:[".layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex:1;background:#f5f7fa;background-color:#fff}.footer[_ngcontent-%COMP%]{text-align:center}"]})}}return i})();var Ap=Br("books"),tm=Lr(Ap,i=>(console.log("selectBooks selector called, current books state:",i.books),i.books));var Rp=Tt("[Books List] Load Books"),Op=Tt("[Books List] Load Books Success",xe()),Ip=Tt("[Books List] Load Books Failure",xe()),ge={loadBooks:Rp,loadBooksSuccess:Op,loadBooksFailure:Ip};function Pp(i,n){i&1&&(T(0,"p"),f(1,"Loading books..."),M())}function Fp(i,n){if(i&1&&(T(0,"li"),f(1),M()),i&2){let t=n.$implicit;b(),qs(" ",t.id," - ",t.author," - ",t.title," - ",t.cover_image," ")}}function Np(i,n){if(i&1&&(T(0,"ul"),Me(1,Fp,2,4,"li",null,Zn),M()),i&2){let t=lt();b(),ke(t.booksList)}}var em=(()=>{class i{constructor(t,e){this.router=t,this.Store=e,this.booksList=[],this.loading=!0,console.log("BookslistComponent constructor called"),this.Store.subscribe(o=>{console.log("BookslistComponent current store state:",o)})}ngOnInit(){console.log("BookslistComponent initialized"),this.Store.dispatch(ge.loadBooks()),this.subscription=this.Store.select(tm).subscribe(t=>{console.log("BookslistComponent received books from store:==",t),this.loading=!1,this.booksList=t})}goToCourseApp(){this.router.navigate(["csscourseapp"])}gotoHome(){this.router.navigate(["home"])}ngOnDestroy(){console.log("BookslistComponent destroyed"),this.subscription.unsubscribe()}static{this.\u0275fac=function(e){return new(e||i)(z(ue),z(Qt))}}static{this.\u0275cmp=v({type:i,selectors:[["app-bookslist"]],features:[se([Ae])],decls:9,vars:1,consts:[[3,"click"]],template:function(e,o){e&1&&(T(0,"p"),f(1,"bookslist works!"),M(),T(2,"div"),rt(3,Pp,2,0,"p")(4,Np,3,0,"ul"),T(5,"button",0),Ke("click",function(){return o.goToCourseApp()}),f(6,"GOTOCOURSEAPP"),M(),T(7,"button",0),Ke("click",function(){return o.gotoHome()}),f(8,"HOME"),M()()),e&2&&(b(3),at(o.loading?3:4))},styles:["li[_ngcontent-%COMP%]{color:red}"]})}}return i})();var im=(()=>{class i{constructor(t){this.router=t}canMatch(){return console.log("CssCourseAppGuard canMatch called"),Ct(!0)}static{this.\u0275fac=function(e){return new(e||i)(B(ue))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Lp=["templatePortalContent"],Bp=["domPortalContent"];function zp(i,n){}function jp(i,n){i&1&&f(0,"Hello, this is a template portal")}var nm=(()=>{class i{constructor(t){this._viewContainerRef=t}ngAfterViewInit(){this.componentPortal=new qt(Vp),this.templatePortal=new pe(this.templatePortalContent,this._viewContainerRef),this.domPortal=new Cn(this.domPortalContent)}static{this.\u0275fac=function(e){return new(e||i)(z(Yt))}}static{this.\u0275cmp=v({type:i,selectors:[["app-portalexample"]],viewQuery:function(e,o){if(e&1&&St(Lp,5)(Bp,5),e&2){let r;G(r=q())&&(o.templatePortalContent=r.first),G(r=q())&&(o.domPortalContent=r.first)}},decls:17,vars:1,consts:[["templatePortalContent",""],["domPortalContent",""],[1,"example-portal-outlet"],[3,"cdkPortalOutlet"],[3,"click"]],template:function(e,o){e&1&&(p(0,"p"),f(1,"portalexample works!"),h(),p(2,"h2"),f(3,"The portal outlet is below:"),h(),p(4,"div",2),ft(5,zp,0,0,"ng-template",3),h(),ft(6,jp,1,0,"ng-template",null,0,le),p(8,"button",4),I("click",function(){return o.selectedPortal=o.componentPortal}),f(9,"Render component portal"),h(),p(10,"button",4),I("click",function(){return o.selectedPortal=o.templatePortal}),f(11,"Render template portal"),h(),p(12,"button",4),I("click",function(){return o.selectedPortal=o.domPortal}),f(13,"Render DOM portal"),h(),p(14,"div",null,1),f(16,"Hello, this is a DOM portal"),h()),e&2&&(b(5),J("cdkPortalOutlet",o.selectedPortal))},dependencies:[zt,Ft,de],styles:[".example-portal-outlet[_ngcontent-%COMP%]{margin-bottom:10px;padding:10px;border:1px dashed black;width:250px;height:250px}"]})}}return i})(),Vp=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=v({type:i,selectors:[["component-portal-example"]],decls:1,vars:0,template:function(e,o){e&1&&f(0,"Hello, this is a component portal")},encapsulation:2})}}return i})();var om=(()=>{class i{constructor(t){this.modalpageService=t}ngOnInit(){this.modalpageService.openComponent(oi,"Modal Page Example")}static{this.\u0275fac=function(e){return new(e||i)(z(qi))}}static{this.\u0275cmp=v({type:i,selectors:[["app-modalpage-route"]],decls:0,vars:0,template:function(e,o){},encapsulation:2})}}return i})();var rm=[{path:"",component:Qd,children:[{path:"",pathMatch:"full",component:Da}]},{path:"app",component:cn,children:[{path:"",pathMatch:"full",component:Jd}]},{path:"csscourseapp",component:cn,loadChildren:()=>import("./chunk-3FR7QQ2G.js").then(i=>i.CssCourseAppRoutingModule),canActivate:[function(i,n){return console.log(i,"can activate guard ActivatedRouteSnapshot"),console.log(n,"can activate guard state"),!0}],canDeactivate:[function(){return console.log("can deactivate guard"),!0}],canActivateChild:[function(i,n){return console.log(i,"can activate child guard ActivatedRouteSnapshot"),console.log(n,"can activate child guard state"),!0}],canMatch:[im],data:{title:"CSS Course App (developer custom data)"},title:"CSS Course App useing title property",providers:[]},{path:"counter",component:Xd,providers:[],children:[{path:"",pathMatch:"full",component:Hd}]},{path:"user",component:Zd,children:[{path:"",pathMatch:"full",component:zd}]},{path:"lifecycleMethods",component:Gd},{path:"radiobuttondemo",component:Yd},{path:"dialogdemo",component:qo},{path:"radiooptionselector",component:Gc},{path:"bookslist",component:em},{path:"home",component:Da},{path:"onboarding",title:"On Boarding Application",component:cn,loadChildren:()=>import("./chunk-7XKJ35II.js").then(i=>i.routes)},{path:"portalexample",component:cn,children:[{path:"",pathMatch:"full",component:nm}]},{path:"modalpage",component:om},{path:"**",component:qc}];var Hp={count:0},am=wi(Hp,fe(Be.increment,i=>({count:i.count+1})),fe(Be.decrement,i=>({count:i.count-1})),fe(Be.reset,i=>({count:0})));var Up={update:Tt("[Update] User")},Wp={firstName:"Venu",lastName:"Challa"},sm=wi(Wp,fe(Up.update,i=>(console.log("user state ===> ",i),i)));var Gp={books:[]},lm=wi(Gp,fe(ge.loadBooks,i=>(console.log("BooksActions.loadBooks action dispatched, current state:",i),S({},i))),fe(ge.loadBooksSuccess,(i,{books:n})=>(console.log("BooksActions.loadBooksSuccess action dispatched, payload:",n),console.log("Current state before update:",i),It(S({},i),{books:n}))),fe(ge.loadBooksFailure,(i,{error:n})=>(console.log("BooksActions.loadBooksFailure action dispatched, payload:",n),S({},i))));var cm={counter:am,user:sm,router:zl,books:lm};var dm=(()=>{class i{constructor(t){this.httpClient=t}getBooks(){return console.log("getBooks service called"),Ct([{id:1,title:"To Kill a Mockingbird",author:"Harper Lee",publication_year:1960,genre:["Fiction","Classic"],description:"A classic novel depicting racial injustice in the American South.",cover_image:"https://fakeimg.pl/667x1000/cc6600"},{id:2,title:"To Kill a Mockingbird",author:"Harper Lee",publication_year:1962,genre:["Fiction","Classic"],description:"A classic novel depicting racial injustice in the American South.",cover_image:"https://fakeimg.pl/667x1000/cc6600"}])}handleError(t="operation",e){return o=>(console.error(o),this.log(`${t} failed: ${o.message}`),Ct(e))}log(t){console.log(t)}static{this.\u0275fac=function(e){return new(e||i)(B(Ae))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var mm=(()=>{class i{constructor(t,e){this.actions$=t,this.BooklistService=e,this.loadBooks$=Tl(()=>this.actions$.pipe(Rl(ge.loadBooks),en(()=>this.BooklistService.getBooks().pipe(Et(o=>(console.log("BooklistService.getBooks() returned:",o),ge.loadBooksSuccess({books:o}))),ui(o=>(console.error("Error in BooklistService.getBooks():",o),Ct(ge.loadBooksFailure({error:o}))))))))}static{this.\u0275fac=function(e){return new(e||i)(B(Al),B(dm))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac})}}return i})();var U=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(U||{}),ne="*";function um(i,n=null){return{type:U.Sequence,steps:i,options:n}}function Ma(i){return{type:U.Style,styles:i,offset:null}}var Se=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,t=0){this.totalTime=n+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let t=n=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},Ki=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let t=0,e=0,o=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++t==r&&this._onFinish()}),a.onDestroy(()=>{++e==r&&this._onDestroy()}),a.onStart(()=>{++o==r&&this._onStart()})}),this.totalTime=this.players.reduce((a,s)=>Math.max(a,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let t=n*this.totalTime;this.players.forEach(e=>{let o=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(o)})}getPosition(){let n=this.players.reduce((t,e)=>t===null||e.totalTime>t.totalTime?e:t,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let t=n=="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},On="!";function fm(i){return new Z(3e3,!1)}function $p(){return new Z(3100,!1)}function Kp(){return new Z(3101,!1)}function Yp(i){return new Z(3001,!1)}function Qp(i){return new Z(3003,!1)}function Xp(i){return new Z(3004,!1)}function pm(i,n){return new Z(3005,!1)}function gm(){return new Z(3006,!1)}function _m(){return new Z(3007,!1)}function bm(i,n){return new Z(3008,!1)}function vm(i){return new Z(3002,!1)}function ym(i,n,t,e,o){return new Z(3010,!1)}function xm(){return new Z(3011,!1)}function Cm(){return new Z(3012,!1)}function Em(){return new Z(3200,!1)}function wm(){return new Z(3202,!1)}function Sm(){return new Z(3013,!1)}function Tm(i){return new Z(3014,!1)}function Dm(i){return new Z(3015,!1)}function Mm(i){return new Z(3016,!1)}function km(i,n){return new Z(3404,!1)}function Zp(i){return new Z(3502,!1)}function Am(i){return new Z(3503,!1)}function Rm(){return new Z(3300,!1)}function Om(i){return new Z(3504,!1)}function Im(i){return new Z(3301,!1)}function Pm(i,n){return new Z(3302,!1)}function Fm(i){return new Z(3303,!1)}function Nm(i,n){return new Z(3400,!1)}function Lm(i){return new Z(3401,!1)}function Bm(i){return new Z(3402,!1)}function zm(i,n){return new Z(3505,!1)}function Te(i){switch(i.length){case 0:return new Se;case 1:return i[0];default:return new Ki(i)}}function Oa(i,n,t=new Map,e=new Map){let o=[],r=[],a=-1,s=null;if(n.forEach(l=>{let d=l.get("offset"),u=d==a,m=u&&s||new Map;l.forEach((y,E)=>{let g=E,_=y;if(E!=="offset")switch(g=i.normalizePropertyName(g,o),_){case On:_=t.get(E);break;case ne:_=e.get(E);break;default:_=i.normalizeStyleValue(E,g,_,o);break}m.set(g,_)}),u||r.push(m),s=m,a=d}),o.length)throw Zp(o);return r}function $o(i,n,t,e){switch(n){case"start":i.onStart(()=>e(t&&ka(t,"start",i)));break;case"done":i.onDone(()=>e(t&&ka(t,"done",i)));break;case"destroy":i.onDestroy(()=>e(t&&ka(t,"destroy",i)));break}}function ka(i,n,t){let e=t.totalTime,o=!!t.disabled,r=Ko(i.element,i.triggerName,i.fromState,i.toState,n||i.phaseName,e??i.totalTime,o),a=i._data;return a!=null&&(r._data=a),r}function Ko(i,n,t,e,o="",r=0,a){return{element:i,triggerName:n,fromState:t,toState:e,phaseName:o,totalTime:r,disabled:!!a}}function jt(i,n,t){let e=i.get(n);return e||i.set(n,e=t),e}function Ia(i){let n=i.indexOf(":"),t=i.substring(1,n),e=i.slice(n+1);return[t,e]}var Jp=typeof document>"u"?null:document.documentElement;function Yo(i){let n=i.parentNode||i.host||null;return n===Jp?null:n}function tg(i){return i.substring(1,6)=="ebkit"}var ai=null,hm=!1;function jm(i){ai||(ai=eg()||{},hm=ai.style?"WebkitAppearance"in ai.style:!1);let n=!0;return ai.style&&!tg(i)&&(n=i in ai.style,!n&&hm&&(n="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in ai.style)),n}function eg(){return typeof document<"u"?document.body:null}function Pa(i,n){for(;n;){if(n===i)return!0;n=Yo(n)}return!1}function Fa(i,n,t){if(t)return Array.from(i.querySelectorAll(n));let e=i.querySelector(n);return e?[e]:[]}var ig=1e3,Na="{{",ng="}}",La="ng-enter",Qo="ng-leave",In="ng-trigger",Pn=".ng-trigger",Ba="ng-animating",Xo=".ng-animating";function _e(i){if(typeof i=="number")return i;let n=i.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Aa(parseFloat(n[1]),n[2])}function Aa(i,n){return n==="s"?i*ig:i}function Fn(i,n,t){return i.hasOwnProperty("duration")?i:rg(i,n,t)}var og=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function rg(i,n,t){let e,o=0,r="";if(typeof i=="string"){let a=i.match(og);if(a===null)return n.push(fm(i)),{duration:0,delay:0,easing:""};e=Aa(parseFloat(a[1]),a[2]);let s=a[3];s!=null&&(o=Aa(parseFloat(s),a[4]));let l=a[5];l&&(r=l)}else e=i;if(!t){let a=!1,s=n.length;e<0&&(n.push($p()),a=!0),o<0&&(n.push(Kp()),a=!0),a&&n.splice(s,0,fm(i))}return{duration:e,delay:o,easing:r}}function Vm(i){return i.length?i[0]instanceof Map?i:i.map(n=>new Map(Object.entries(n))):[]}function oe(i,n,t){n.forEach((e,o)=>{let r=Zo(o);t&&!t.has(o)&&t.set(o,i.style[r]),i.style[r]=e})}function je(i,n){n.forEach((t,e)=>{let o=Zo(e);i.style[o]=""})}function Yi(i){return Array.isArray(i)?i.length==1?i[0]:um(i):i}function Hm(i,n,t){let e=n.params||{},o=za(i);o.length&&o.forEach(r=>{e.hasOwnProperty(r)||t.push(Yp(r))})}var Ra=new RegExp(`${Na}\\s*(.+?)\\s*${ng}`,"g");function za(i){let n=[];if(typeof i=="string"){let t;for(;t=Ra.exec(i);)n.push(t[1]);Ra.lastIndex=0}return n}function Qi(i,n,t){let e=`${i}`,o=e.replace(Ra,(r,a)=>{let s=n[a];return s==null&&(t.push(Qp(a)),s=""),s.toString()});return o==e?i:o}var ag=/-+([a-z0-9])/g;function Zo(i){return i.replace(ag,(...n)=>n[1].toUpperCase())}function Um(i,n){return i===0||n===0}function Wm(i,n,t){if(t.size&&n.length){let e=n[0],o=[];if(t.forEach((r,a)=>{e.has(a)||o.push(a),e.set(a,r)}),o.length)for(let r=1;r<n.length;r++){let a=n[r];o.forEach(s=>a.set(s,Jo(i,s)))}}return n}function Vt(i,n,t){switch(n.type){case U.Trigger:return i.visitTrigger(n,t);case U.State:return i.visitState(n,t);case U.Transition:return i.visitTransition(n,t);case U.Sequence:return i.visitSequence(n,t);case U.Group:return i.visitGroup(n,t);case U.Animate:return i.visitAnimate(n,t);case U.Keyframes:return i.visitKeyframes(n,t);case U.Style:return i.visitStyle(n,t);case U.Reference:return i.visitReference(n,t);case U.AnimateChild:return i.visitAnimateChild(n,t);case U.AnimateRef:return i.visitAnimateRef(n,t);case U.Query:return i.visitQuery(n,t);case U.Stagger:return i.visitStagger(n,t);default:throw Xp(n.type)}}function Jo(i,n){return window.getComputedStyle(i)[n]}var is=(()=>{class i{validateStyleProperty(t){return jm(t)}containsElement(t,e){return Pa(t,e)}getParentElement(t){return Yo(t)}query(t,e,o){return Fa(t,e,o)}computeStyle(t,e,o){return o||""}animate(t,e,o,r,a,s=[],l){return new Se(o,r)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),li=class{static NOOP=new is},ci=class{};var sg=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),or=class extends ci{normalizePropertyName(n,t){return Zo(n)}normalizeStyleValue(n,t,e,o){let r="",a=e.toString().trim();if(sg.has(t)&&e!==0&&e!=="0")if(typeof e=="number")r="px";else{let s=e.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&o.push(pm(n,e))}return a+r}};var rr="*";function lg(i,n){let t=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(e=>cg(e,t,n)):t.push(i),t}function cg(i,n,t){if(i[0]==":"){let l=dg(i,t);if(typeof l=="function"){n.push(l);return}i=l}let e=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(e==null||e.length<4)return t.push(Dm(i)),n;let o=e[1],r=e[2],a=e[3];n.push(Gm(o,a));let s=o==rr&&a==rr;r[0]=="<"&&!s&&n.push(Gm(a,o))}function dg(i,n){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,e)=>parseFloat(e)>parseFloat(t);case":decrement":return(t,e)=>parseFloat(e)<parseFloat(t);default:return n.push(Mm(i)),"* => *"}}var tr=new Set(["true","1"]),er=new Set(["false","0"]);function Gm(i,n){let t=tr.has(i)||er.has(i),e=tr.has(n)||er.has(n);return(o,r)=>{let a=i==rr||i==o,s=n==rr||n==r;return!a&&t&&typeof o=="boolean"&&(a=o?tr.has(i):er.has(i)),!s&&e&&typeof r=="boolean"&&(s=r?tr.has(n):er.has(n)),a&&s}}var eu=":self",mg=new RegExp(`s*${eu}s*,?`,"g");function iu(i,n,t,e){return new Ga(i).build(n,t,e)}var qm="",Ga=class{_driver;constructor(n){this._driver=n}build(n,t,e){let o=new qa(t);return this._resetContextStyleTimingState(o),Vt(this,Yi(n),o)}_resetContextStyleTimingState(n){n.currentQuerySelector=qm,n.collectedStyles=new Map,n.collectedStyles.set(qm,new Map),n.currentTime=0}visitTrigger(n,t){let e=t.queryCount=0,o=t.depCount=0,r=[],a=[];return n.name.charAt(0)=="@"&&t.errors.push(gm()),n.definitions.forEach(s=>{if(this._resetContextStyleTimingState(t),s.type==U.State){let l=s,d=l.name;d.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,r.push(this.visitState(l,t))}),l.name=d}else if(s.type==U.Transition){let l=this.visitTransition(s,t);e+=l.queryCount,o+=l.depCount,a.push(l)}else t.errors.push(_m())}),{type:U.Trigger,name:n.name,states:r,transitions:a,queryCount:e,depCount:o,options:null}}visitState(n,t){let e=this.visitStyle(n.styles,t),o=n.options&&n.options.params||null;if(e.containsDynamicStyles){let r=new Set,a=o||{};e.styles.forEach(s=>{s instanceof Map&&s.forEach(l=>{za(l).forEach(d=>{a.hasOwnProperty(d)||r.add(d)})})}),r.size&&t.errors.push(bm(n.name,[...r.values()]))}return{type:U.State,name:n.name,style:e,options:o?{params:o}:null}}visitTransition(n,t){t.queryCount=0,t.depCount=0;let e=Vt(this,Yi(n.animation),t),o=lg(n.expr,t.errors);return{type:U.Transition,matchers:o,animation:e,queryCount:t.queryCount,depCount:t.depCount,options:si(n.options)}}visitSequence(n,t){return{type:U.Sequence,steps:n.steps.map(e=>Vt(this,e,t)),options:si(n.options)}}visitGroup(n,t){let e=t.currentTime,o=0,r=n.steps.map(a=>{t.currentTime=e;let s=Vt(this,a,t);return o=Math.max(o,t.currentTime),s});return t.currentTime=o,{type:U.Group,steps:r,options:si(n.options)}}visitAnimate(n,t){let e=pg(n.timings,t.errors);t.currentAnimateTimings=e;let o,r=n.styles?n.styles:Ma({});if(r.type==U.Keyframes)o=this.visitKeyframes(r,t);else{let a=n.styles,s=!1;if(!a){s=!0;let d={};e.easing&&(d.easing=e.easing),a=Ma(d)}t.currentTime+=e.duration+e.delay;let l=this.visitStyle(a,t);l.isEmptyStep=s,o=l}return t.currentAnimateTimings=null,{type:U.Animate,timings:e,style:o,options:null}}visitStyle(n,t){let e=this._makeStyleAst(n,t);return this._validateStyleAst(e,t),e}_makeStyleAst(n,t){let e=[],o=Array.isArray(n.styles)?n.styles:[n.styles];for(let s of o)typeof s=="string"?s===ne?e.push(s):t.errors.push(vm(s)):e.push(new Map(Object.entries(s)));let r=!1,a=null;return e.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(a=s.get("easing"),s.delete("easing")),!r)){for(let l of s.values())if(l.toString().indexOf(Na)>=0){r=!0;break}}}),{type:U.Style,styles:e,easing:a,offset:n.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(n,t){let e=t.currentAnimateTimings,o=t.currentTime,r=t.currentTime;e&&r>0&&(r-=e.duration+e.delay),n.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,l)=>{let d=t.collectedStyles.get(t.currentQuerySelector),u=d.get(l),m=!0;u&&(r!=o&&r>=u.startTime&&o<=u.endTime&&(t.errors.push(ym(l,u.startTime,u.endTime,r,o)),m=!1),r=u.startTime),m&&d.set(l,{startTime:r,endTime:o}),t.options&&Hm(s,t.options,t.errors)})})}visitKeyframes(n,t){let e={type:U.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(xm()),e;let o=1,r=0,a=[],s=!1,l=!1,d=0,u=n.steps.map(W=>{let Y=this._makeStyleAst(W,t),ot=Y.offset!=null?Y.offset:hg(Y.styles),N=0;return ot!=null&&(r++,N=Y.offset=ot),l=l||N<0||N>1,s=s||N<d,d=N,a.push(N),Y});l&&t.errors.push(Cm()),s&&t.errors.push(Em());let m=n.steps.length,y=0;r>0&&r<m?t.errors.push(wm()):r==0&&(y=o/(m-1));let E=m-1,g=t.currentTime,_=t.currentAnimateTimings,P=_.duration;return u.forEach((W,Y)=>{let ot=y>0?Y==E?1:y*Y:a[Y],N=ot*P;t.currentTime=g+_.delay+N,_.duration=N,this._validateStyleAst(W,t),W.offset=ot,e.styles.push(W)}),e}visitReference(n,t){return{type:U.Reference,animation:Vt(this,Yi(n.animation),t),options:si(n.options)}}visitAnimateChild(n,t){return t.depCount++,{type:U.AnimateChild,options:si(n.options)}}visitAnimateRef(n,t){return{type:U.AnimateRef,animation:this.visitReference(n.animation,t),options:si(n.options)}}visitQuery(n,t){let e=t.currentQuerySelector,o=n.options||{};t.queryCount++,t.currentQuery=n;let[r,a]=ug(n.selector);t.currentQuerySelector=e.length?e+" "+r:r,jt(t.collectedStyles,t.currentQuerySelector,new Map);let s=Vt(this,Yi(n.animation),t);return t.currentQuery=null,t.currentQuerySelector=e,{type:U.Query,selector:r,limit:o.limit||0,optional:!!o.optional,includeSelf:a,animation:s,originalSelector:n.selector,options:si(n.options)}}visitStagger(n,t){t.currentQuery||t.errors.push(Sm());let e=n.timings==="full"?{duration:0,delay:0,easing:"full"}:Fn(n.timings,t.errors,!0);return{type:U.Stagger,animation:Vt(this,Yi(n.animation),t),timings:e,options:null}}};function ug(i){let n=!!i.split(/\s*,\s*/).find(t=>t==eu);return n&&(i=i.replace(mg,"")),i=i.replace(/@\*/g,Pn).replace(/@\w+/g,t=>Pn+"-"+t.slice(1)).replace(/:animating/g,Xo),[i,n]}function fg(i){return i?S({},i):null}var qa=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function hg(i){if(typeof i=="string")return null;let n=null;if(Array.isArray(i))i.forEach(t=>{if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let t=i;n=parseFloat(t.get("offset")),t.delete("offset")}return n}function pg(i,n){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let r=Fn(i,n).duration;return ja(r,0,"")}let t=i;if(t.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=ja(0,0,"");return r.dynamic=!0,r.strValue=t,r}let o=Fn(t,n);return ja(o.duration,o.delay,o.easing)}function si(i){return i?(i=S({},i),i.params&&(i.params=fg(i.params))):i={},i}function ja(i,n,t){return{duration:i,delay:n,easing:t}}function ns(i,n,t,e,o,r,a=null,s=!1){return{type:1,element:i,keyframes:n,preStyleProps:t,postStyleProps:e,duration:o,delay:r,totalTime:o+r,easing:a,subTimeline:s}}var Ln=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,t){let e=this._map.get(n);e||this._map.set(n,e=[]),e.push(...t)}has(n){return this._map.has(n)}clear(){this._map.clear()}},gg=1,_g=":enter",bg=new RegExp(_g,"g"),vg=":leave",yg=new RegExp(vg,"g");function nu(i,n,t,e,o,r=new Map,a=new Map,s,l,d=[]){return new $a().buildKeyframes(i,n,t,e,o,r,a,s,l,d)}var $a=class{buildKeyframes(n,t,e,o,r,a,s,l,d,u=[]){d=d||new Ln;let m=new Ka(n,t,d,o,r,u,[]);m.options=l;let y=l.delay?_e(l.delay):0;m.currentTimeline.delayNextStep(y),m.currentTimeline.setStyles([a],null,m.errors,l),Vt(this,e,m);let E=m.timelines.filter(g=>g.containsAnimation());if(E.length&&s.size){let g;for(let _=E.length-1;_>=0;_--){let P=E[_];if(P.element===t){g=P;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([s],null,m.errors,l)}return E.length?E.map(g=>g.buildKeyframes()):[ns(t,[],[],[],0,y,"",!1)]}visitTrigger(n,t){}visitState(n,t){}visitTransition(n,t){}visitAnimateChild(n,t){let e=t.subInstructions.get(t.element);if(e){let o=t.createSubContext(n.options),r=t.currentTimeline.currentTime,a=this._visitSubInstructions(e,o,o.options);r!=a&&t.transformIntoNewTimeline(a)}t.previousNode=n}visitAnimateRef(n,t){let e=t.createSubContext(n.options);e.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],t,e),this.visitReference(n.animation,e),t.transformIntoNewTimeline(e.currentTimeline.currentTime),t.previousNode=n}_applyAnimationRefDelays(n,t,e){for(let o of n){let r=o?.delay;if(r){let a=typeof r=="number"?r:_e(Qi(r,o?.params??{},t.errors));e.delayNextStep(a)}}}_visitSubInstructions(n,t,e){let r=t.currentTimeline.currentTime,a=e.duration!=null?_e(e.duration):null,s=e.delay!=null?_e(e.delay):null;return a!==0&&n.forEach(l=>{let d=t.appendInstructionToTimeline(l,a,s);r=Math.max(r,d.duration+d.delay)}),r}visitReference(n,t){t.updateOptions(n.options,!0),Vt(this,n.animation,t),t.previousNode=n}visitSequence(n,t){let e=t.subContextCount,o=t,r=n.options;if(r&&(r.params||r.delay)&&(o=t.createSubContext(r),o.transformIntoNewTimeline(),r.delay!=null)){o.previousNode.type==U.Style&&(o.currentTimeline.snapshotCurrentStyles(),o.previousNode=ar);let a=_e(r.delay);o.delayNextStep(a)}n.steps.length&&(n.steps.forEach(a=>Vt(this,a,o)),o.currentTimeline.applyStylesToKeyframe(),o.subContextCount>e&&o.transformIntoNewTimeline()),t.previousNode=n}visitGroup(n,t){let e=[],o=t.currentTimeline.currentTime,r=n.options&&n.options.delay?_e(n.options.delay):0;n.steps.forEach(a=>{let s=t.createSubContext(n.options);r&&s.delayNextStep(r),Vt(this,a,s),o=Math.max(o,s.currentTimeline.currentTime),e.push(s.currentTimeline)}),e.forEach(a=>t.currentTimeline.mergeTimelineCollectedStyles(a)),t.transformIntoNewTimeline(o),t.previousNode=n}_visitTiming(n,t){if(n.dynamic){let e=n.strValue,o=t.params?Qi(e,t.params,t.errors):e;return Fn(o,t.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,t){let e=t.currentAnimateTimings=this._visitTiming(n.timings,t),o=t.currentTimeline;e.delay&&(t.incrementTime(e.delay),o.snapshotCurrentStyles());let r=n.style;r.type==U.Keyframes?this.visitKeyframes(r,t):(t.incrementTime(e.duration),this.visitStyle(r,t),o.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=n}visitStyle(n,t){let e=t.currentTimeline,o=t.currentAnimateTimings;!o&&e.hasCurrentStyleProperties()&&e.forwardFrame();let r=o&&o.easing||n.easing;n.isEmptyStep?e.applyEmptyStep(r):e.setStyles(n.styles,r,t.errors,t.options),t.previousNode=n}visitKeyframes(n,t){let e=t.currentAnimateTimings,o=t.currentTimeline.duration,r=e.duration,s=t.createSubContext().currentTimeline;s.easing=e.easing,n.styles.forEach(l=>{let d=l.offset||0;s.forwardTime(d*r),s.setStyles(l.styles,l.easing,t.errors,t.options),s.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(s),t.transformIntoNewTimeline(o+r),t.previousNode=n}visitQuery(n,t){let e=t.currentTimeline.currentTime,o=n.options||{},r=o.delay?_e(o.delay):0;r&&(t.previousNode.type===U.Style||e==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=ar);let a=e,s=t.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!o.optional,t.errors);t.currentQueryTotal=s.length;let l=null;s.forEach((d,u)=>{t.currentQueryIndex=u;let m=t.createSubContext(n.options,d);r&&m.delayNextStep(r),d===t.element&&(l=m.currentTimeline),Vt(this,n.animation,m),m.currentTimeline.applyStylesToKeyframe();let y=m.currentTimeline.currentTime;a=Math.max(a,y)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(a),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=n}visitStagger(n,t){let e=t.parentContext,o=t.currentTimeline,r=n.timings,a=Math.abs(r.duration),s=a*(t.currentQueryTotal-1),l=a*t.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":l=s-l;break;case"full":l=e.currentStaggerTime;break}let u=t.currentTimeline;l&&u.delayNextStep(l);let m=u.currentTime;Vt(this,n.animation,t),t.previousNode=n,e.currentStaggerTime=o.currentTime-m+(o.startTime-e.currentTimeline.startTime)}},ar={},Ka=class i{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=ar;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,t,e,o,r,a,s,l){this._driver=n,this.element=t,this.subInstructions=e,this._enterClassName=o,this._leaveClassName=r,this.errors=a,this.timelines=s,this.currentTimeline=l||new sr(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,t){if(!n)return;let e=n,o=this.options;e.duration!=null&&(o.duration=_e(e.duration)),e.delay!=null&&(o.delay=_e(e.delay));let r=e.params;if(r){let a=o.params;a||(a=this.options.params={}),Object.keys(r).forEach(s=>{(!t||!a.hasOwnProperty(s))&&(a[s]=Qi(r[s],a,this.errors))})}}_copyOptions(){let n={};if(this.options){let t=this.options.params;if(t){let e=n.params={};Object.keys(t).forEach(o=>{e[o]=t[o]})}}return n}createSubContext(n=null,t,e){let o=t||this.element,r=new i(this._driver,o,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(o,e||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(n),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(n){return this.previousNode=ar,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,t,e){let o={duration:t??n.duration,delay:this.currentTimeline.currentTime+(e??0)+n.delay,easing:""},r=new Ya(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,o,n.stretchStartingKeyframe);return this.timelines.push(r),o}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,t,e,o,r,a){let s=[];if(o&&s.push(this.element),n.length>0){n=n.replace(bg,"."+this._enterClassName),n=n.replace(yg,"."+this._leaveClassName);let l=e!=1,d=this._driver.query(this.element,n,l);e!==0&&(d=e<0?d.slice(d.length+e,d.length):d.slice(0,e)),s.push(...d)}return!r&&s.length==0&&a.push(Tm(t)),s}},sr=class i{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,t,e,o){this._driver=n,this.element=t,this.startTime=e,this._elementTimelineStylesLookup=o,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+n),t&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,t){return this.applyStylesToKeyframe(),new i(this._driver,n,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=gg,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,t){this._localTimelineStyles.set(n,t),this._globalTimelineStyles.set(n,t),this._styleSummary.set(n,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[t,e]of this._globalTimelineStyles)this._backFill.set(t,e||ne),this._currentKeyframe.set(t,ne);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,t,e,o){t&&this._previousKeyframe.set("easing",t);let r=o&&o.params||{},a=xg(n,this._globalTimelineStyles);for(let[s,l]of a){let d=Qi(l,r,e);this._pendingStyles.set(s,d),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??ne),this._updateStyle(s,d)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,t)=>{this._currentKeyframe.set(t,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,n)}))}snapshotCurrentStyles(){for(let[n,t]of this._localTimelineStyles)this._pendingStyles.set(n,t),this._updateStyle(n,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let t in this._currentKeyframe)n.push(t);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((t,e)=>{let o=this._styleSummary.get(e);(!o||t.time>o.time)&&this._updateStyle(e,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,t=new Set,e=this._keyframes.size===1&&this.duration===0,o=[];this._keyframes.forEach((s,l)=>{let d=new Map([...this._backFill,...s]);d.forEach((u,m)=>{u===On?n.add(m):u===ne&&t.add(m)}),e||d.set("offset",l/this.duration),o.push(d)});let r=[...n.values()],a=[...t.values()];if(e){let s=o[0],l=new Map(s);s.set("offset",0),l.set("offset",1),o=[s,l]}return ns(this.element,o,r,a,this.duration,this.startTime,this.easing,!1)}},Ya=class extends sr{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,t,e,o,r,a,s=!1){super(n,t,a.delay),this.keyframes=e,this.preStyleProps=o,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:t,duration:e,easing:o}=this.timings;if(this._stretchStartingKeyframe&&t){let r=[],a=e+t,s=t/a,l=new Map(n[0]);l.set("offset",0),r.push(l);let d=new Map(n[0]);d.set("offset",$m(s)),r.push(d);let u=n.length-1;for(let m=1;m<=u;m++){let y=new Map(n[m]),E=y.get("offset"),g=t+E*e;y.set("offset",$m(g/a)),r.push(y)}e=a,t=0,o="",n=r}return ns(this.element,n,this.preStyleProps,this.postStyleProps,e,t,o,!0)}};function $m(i,n=3){let t=Math.pow(10,n-1);return Math.round(i*t)/t}function xg(i,n){let t=new Map,e;return i.forEach(o=>{if(o==="*"){e??=n.keys();for(let r of e)t.set(r,ne)}else for(let[r,a]of o)t.set(r,a)}),t}function Km(i,n,t,e,o,r,a,s,l,d,u,m,y){return{type:0,element:i,triggerName:n,isRemovalTransition:o,fromState:t,fromStyles:r,toState:e,toStyles:a,timelines:s,queriedElements:l,preStyleProps:d,postStyleProps:u,totalTime:m,errors:y}}var Va={},lr=class{_triggerName;ast;_stateStyles;constructor(n,t,e){this._triggerName=n,this.ast=t,this._stateStyles=e}match(n,t,e,o){return Cg(this.ast.matchers,n,t,e,o)}buildStyles(n,t,e){let o=this._stateStyles.get("*");return n!==void 0&&(o=this._stateStyles.get(n?.toString())||o),o?o.buildStyles(t,e):new Map}build(n,t,e,o,r,a,s,l,d,u){let m=[],y=this.ast.options&&this.ast.options.params||Va,E=s&&s.params||Va,g=this.buildStyles(e,E,m),_=l&&l.params||Va,P=this.buildStyles(o,_,m),W=new Set,Y=new Map,ot=new Map,N=o==="void",st={params:ou(_,y),delay:this.ast.options?.delay},Q=u?[]:nu(n,t,this.ast.animation,r,a,g,P,st,d,m),mt=0;return Q.forEach(ct=>{mt=Math.max(ct.duration+ct.delay,mt)}),m.length?Km(t,this._triggerName,e,o,N,g,P,[],[],Y,ot,mt,m):(Q.forEach(ct=>{let te=ct.element,di=jt(Y,te,new Set);ct.preStyleProps.forEach(Ve=>di.add(Ve));let vs=jt(ot,te,new Set);ct.postStyleProps.forEach(Ve=>vs.add(Ve)),te!==t&&W.add(te)}),Km(t,this._triggerName,e,o,N,g,P,Q,[...W.values()],Y,ot,mt))}};function Cg(i,n,t,e,o){return i.some(r=>r(n,t,e,o))}function ou(i,n){let t=S({},n);return Object.entries(i).forEach(([e,o])=>{o!=null&&(t[e]=o)}),t}var Qa=class{styles;defaultParams;normalizer;constructor(n,t,e){this.styles=n,this.defaultParams=t,this.normalizer=e}buildStyles(n,t){let e=new Map,o=ou(n,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((a,s)=>{a&&(a=Qi(a,o,t));let l=this.normalizer.normalizePropertyName(s,t);a=this.normalizer.normalizeStyleValue(s,l,a,t),e.set(s,a)})}),e}};function Eg(i,n,t){return new Xa(i,n,t)}var Xa=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,t,e){this.name=n,this.ast=t,this._normalizer=e,t.states.forEach(o=>{let r=o.options&&o.options.params||{};this.states.set(o.name,new Qa(o.style,r,e))}),Ym(this.states,"true","1"),Ym(this.states,"false","0"),t.transitions.forEach(o=>{this.transitionFactories.push(new lr(n,o,this.states))}),this.fallbackTransition=wg(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,t,e,o){return this.transitionFactories.find(a=>a.match(n,t,e,o))||null}matchStyles(n,t,e){return this.fallbackTransition.buildStyles(n,t,e)}};function wg(i,n,t){let e=[(a,s)=>!0],o={type:U.Sequence,steps:[],options:null},r={type:U.Transition,animation:o,matchers:e,options:null,queryCount:0,depCount:0};return new lr(i,r,n)}function Ym(i,n,t){i.has(n)?i.has(t)||i.set(t,i.get(n)):i.has(t)&&i.set(n,i.get(t))}var Sg=new Ln,Za=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,t,e){this.bodyNode=n,this._driver=t,this._normalizer=e}register(n,t){let e=[],o=[],r=iu(this._driver,t,e,o);if(e.length)throw Am(e);this._animations.set(n,r)}_buildPlayer(n,t,e){let o=n.element,r=Oa(this._normalizer,n.keyframes,t,e);return this._driver.animate(o,r,n.duration,n.delay,n.easing,[],!0)}create(n,t,e={}){let o=[],r=this._animations.get(n),a,s=new Map;if(r?(a=nu(this._driver,t,r,La,Qo,new Map,new Map,e,Sg,o),a.forEach(u=>{let m=jt(s,u.element,new Map);u.postStyleProps.forEach(y=>m.set(y,null))})):(o.push(Rm()),a=[]),o.length)throw Om(o);s.forEach((u,m)=>{u.forEach((y,E)=>{u.set(E,this._driver.computeStyle(m,E,ne))})});let l=a.map(u=>{let m=s.get(u.element);return this._buildPlayer(u,new Map,m)}),d=Te(l);return this._playersById.set(n,d),d.onDestroy(()=>this.destroy(n)),this.players.push(d),d}destroy(n){let t=this._getPlayer(n);t.destroy(),this._playersById.delete(n);let e=this.players.indexOf(t);e>=0&&this.players.splice(e,1)}_getPlayer(n){let t=this._playersById.get(n);if(!t)throw Im(n);return t}listen(n,t,e,o){let r=Ko(t,"","","");return $o(this._getPlayer(n),e,r,o),()=>{}}command(n,t,e,o){if(e=="register"){this.register(n,o[0]);return}if(e=="create"){let a=o[0]||{};this.create(n,t,a);return}let r=this._getPlayer(n);switch(e){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(o[0]));break;case"destroy":this.destroy(n);break}}},Qm="ng-animate-queued",Tg=".ng-animate-queued",Ha="ng-animate-disabled",Dg=".ng-animate-disabled",Mg="ng-star-inserted",kg=".ng-star-inserted",Ag=[],ru={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Rg={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},re="__ng_removed",Bn=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,t=""){this.namespaceId=t;let e=n&&n.hasOwnProperty("value"),o=e?n.value:n;if(this.value=Ig(o),e){let r=n,{value:a}=r,s=Es(r,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let t=n.params;if(t){let e=this.options.params;Object.keys(t).forEach(o=>{e[o]==null&&(e[o]=t[o])})}}},Nn="void",Ua=new Bn(Nn),Ja=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,t,e){this.id=n,this.hostElement=t,this._engine=e,this._hostClassName="ng-tns-"+n,Jt(t,this._hostClassName)}listen(n,t,e,o){if(!this._triggers.has(t))throw Pm(e,t);if(e==null||e.length==0)throw Fm(t);if(!Pg(e))throw Nm(e,t);let r=jt(this._elementListeners,n,[]),a={name:t,phase:e,callback:o};r.push(a);let s=jt(this._engine.statesByElement,n,new Map);return s.has(t)||(Jt(n,In),Jt(n,In+"-"+t),s.set(t,Ua)),()=>{this._engine.afterFlush(()=>{let l=r.indexOf(a);l>=0&&r.splice(l,1),this._triggers.has(t)||s.delete(t)})}}register(n,t){return this._triggers.has(n)?!1:(this._triggers.set(n,t),!0)}_getTrigger(n){let t=this._triggers.get(n);if(!t)throw Lm(n);return t}trigger(n,t,e,o=!0){let r=this._getTrigger(t),a=new zn(this.id,t,n),s=this._engine.statesByElement.get(n);s||(Jt(n,In),Jt(n,In+"-"+t),this._engine.statesByElement.set(n,s=new Map));let l=s.get(t),d=new Bn(e,this.id);if(!(e&&e.hasOwnProperty("value"))&&l&&d.absorbOptions(l.options),s.set(t,d),l||(l=Ua),!(d.value===Nn)&&l.value===d.value){if(!Lg(l.params,d.params)){let _=[],P=r.matchStyles(l.value,l.params,_),W=r.matchStyles(d.value,d.params,_);_.length?this._engine.reportError(_):this._engine.afterFlush(()=>{je(n,P),oe(n,W)})}return}let y=jt(this._engine.playersByElement,n,[]);y.forEach(_=>{_.namespaceId==this.id&&_.triggerName==t&&_.queued&&_.destroy()});let E=r.matchTransition(l.value,d.value,n,d.params),g=!1;if(!E){if(!o)return;E=r.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:t,transition:E,fromState:l,toState:d,player:a,isFallbackTransition:g}),g||(Jt(n,Qm),a.onStart(()=>{Xi(n,Qm)})),a.onDone(()=>{let _=this.players.indexOf(a);_>=0&&this.players.splice(_,1);let P=this._engine.playersByElement.get(n);if(P){let W=P.indexOf(a);W>=0&&P.splice(W,1)}}),this.players.push(a),y.push(a),a}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(t=>t.delete(n)),this._elementListeners.forEach((t,e)=>{this._elementListeners.set(e,t.filter(o=>o.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let t=this._engine.playersByElement.get(n);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,t){let e=this._engine.driver.query(n,Pn,!0);e.forEach(o=>{if(o[re])return;let r=this._engine.fetchNamespacesByElement(o);r.size?r.forEach(a=>a.triggerLeaveAnimation(o,t,!1,!0)):this.clearElementCache(o)}),this._engine.afterFlushAnimationsDone(()=>e.forEach(o=>this.clearElementCache(o)))}triggerLeaveAnimation(n,t,e,o){let r=this._engine.statesByElement.get(n),a=new Map;if(r){let s=[];if(r.forEach((l,d)=>{if(a.set(d,l.value),this._triggers.has(d)){let u=this.trigger(n,d,Nn,o);u&&s.push(u)}}),s.length)return this._engine.markElementAsRemoved(this.id,n,!0,t,a),e&&Te(s).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let t=this._elementListeners.get(n),e=this._engine.statesByElement.get(n);if(t&&e){let o=new Set;t.forEach(r=>{let a=r.name;if(o.has(a))return;o.add(a);let l=this._triggers.get(a).fallbackTransition,d=e.get(a)||Ua,u=new Bn(Nn),m=new zn(this.id,a,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:a,transition:l,fromState:d,toState:u,player:m,isFallbackTransition:!0})})}}removeNode(n,t){let e=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,t),this.triggerLeaveAnimation(n,t,!0))return;let o=!1;if(e.totalAnimations){let r=e.players.length?e.playersByQueriedElement.get(n):[];if(r&&r.length)o=!0;else{let a=n;for(;a=a.parentNode;)if(e.statesByElement.get(a)){o=!0;break}}}if(this.prepareLeaveAnimationListeners(n),o)e.markElementAsRemoved(this.id,n,!1,t);else{let r=n[re];(!r||r===ru)&&(e.afterFlush(()=>this.clearElementCache(n)),e.destroyInnerAnimations(n),e._onRemovalComplete(n,t))}}insertNode(n,t){Jt(n,this._hostClassName)}drainQueuedTransitions(n){let t=[];return this._queue.forEach(e=>{let o=e.player;if(o.destroyed)return;let r=e.element,a=this._elementListeners.get(r);a&&a.forEach(s=>{if(s.name==e.triggerName){let l=Ko(r,e.triggerName,e.fromState.value,e.toState.value);l._data=n,$o(e.player,s.phase,l,s.callback)}}),o.markedForDestroy?this._engine.afterFlush(()=>{o.destroy()}):t.push(e)}),this._queue=[],t.sort((e,o)=>{let r=e.transition.ast.depCount,a=o.transition.ast.depCount;return r==0||a==0?r-a:this._engine.driver.containsElement(e.element,o.element)?1:-1})}destroy(n){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},ts=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,t)=>{};_onRemovalComplete(n,t){this.onRemovalComplete(n,t)}constructor(n,t,e){this.bodyNode=n,this.driver=t,this._normalizer=e}get queuedPlayers(){let n=[];return this._namespaceList.forEach(t=>{t.players.forEach(e=>{e.queued&&n.push(e)})}),n}createNamespace(n,t){let e=new Ja(n,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(e,t):(this.newHostElements.set(t,e),this.collectEnterElement(t)),this._namespaceLookup[n]=e}_balanceNamespaceList(n,t){let e=this._namespaceList,o=this.namespacesByHostElement;if(e.length-1>=0){let a=!1,s=this.driver.getParentElement(t);for(;s;){let l=o.get(s);if(l){let d=e.indexOf(l);e.splice(d+1,0,n),a=!0;break}s=this.driver.getParentElement(s)}a||e.unshift(n)}else e.push(n);return o.set(t,n),n}register(n,t){let e=this._namespaceLookup[n];return e||(e=this.createNamespace(n,t)),e}registerTrigger(n,t,e){let o=this._namespaceLookup[n];o&&o.register(t,e)&&this.totalAnimations++}destroy(n,t){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let e=this._fetchNamespace(n);this.namespacesByHostElement.delete(e.hostElement);let o=this._namespaceList.indexOf(e);o>=0&&this._namespaceList.splice(o,1),e.destroy(t),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let t=new Set,e=this.statesByElement.get(n);if(e){for(let o of e.values())if(o.namespaceId){let r=this._fetchNamespace(o.namespaceId);r&&t.add(r)}}return t}trigger(n,t,e,o){if(ir(t)){let r=this._fetchNamespace(n);if(r)return r.trigger(t,e,o),!0}return!1}insertNode(n,t,e,o){if(!ir(t))return;let r=t[re];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let a=this.collectedLeaveElements.indexOf(t);a>=0&&this.collectedLeaveElements.splice(a,1)}if(n){let a=this._fetchNamespace(n);a&&a.insertNode(t,e)}o&&this.collectEnterElement(t)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,t){t?this.disabledNodes.has(n)||(this.disabledNodes.add(n),Jt(n,Ha)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),Xi(n,Ha))}removeNode(n,t,e){if(ir(t)){let o=n?this._fetchNamespace(n):null;o?o.removeNode(t,e):this.markElementAsRemoved(n,t,!1,e);let r=this.namespacesByHostElement.get(t);r&&r.id!==n&&r.removeNode(t,e)}else this._onRemovalComplete(t,e)}markElementAsRemoved(n,t,e,o,r){this.collectedLeaveElements.push(t),t[re]={namespaceId:n,setForRemoval:o,hasAnimation:e,removedBeforeQueried:!1,previousTriggersValues:r}}listen(n,t,e,o,r){return ir(t)?this._fetchNamespace(n).listen(t,e,o,r):()=>{}}_buildInstruction(n,t,e,o,r){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,e,o,n.fromState.options,n.toState.options,t,r)}destroyInnerAnimations(n){let t=this.driver.query(n,Pn,!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(n,Xo,!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(n){let t=this.playersByElement.get(n);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(n){let t=this.playersByQueriedElement.get(n);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return Te(this.players).onDone(()=>n());n()})}processLeaveNode(n){let t=n[re];if(t&&t.setForRemoval){if(n[re]=ru,t.namespaceId){this.destroyInnerAnimations(n);let e=this._fetchNamespace(t.namespaceId);e&&e.clearElementCache(n)}this._onRemovalComplete(n,t.setForRemoval)}n.classList?.contains(Ha)&&this.markElementAsDisabled(n,!1),this.driver.query(n,Dg,!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(n=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,o)=>this._balanceNamespaceList(e,o)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let e=0;e<this.collectedEnterElements.length;e++){let o=this.collectedEnterElements[e];Jt(o,Mg)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let e=[];try{t=this._flushAnimations(e,n)}finally{for(let o=0;o<e.length;o++)e[o]()}}else for(let e=0;e<this.collectedLeaveElements.length;e++){let o=this.collectedLeaveElements[e];this.processLeaveNode(o)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){let e=this._whenQuietFns;this._whenQuietFns=[],t.length?Te(t).onDone(()=>{e.forEach(o=>o())}):e.forEach(o=>o())}}reportError(n){throw Bm(n)}_flushAnimations(n,t){let e=new Ln,o=[],r=new Map,a=[],s=new Map,l=new Map,d=new Map,u=new Set;this.disabledNodes.forEach(w=>{u.add(w);let k=this.driver.query(w,Tg,!0);for(let A=0;A<k.length;A++)u.add(k[A])});let m=this.bodyNode,y=Array.from(this.statesByElement.keys()),E=Jm(y,this.collectedEnterElements),g=new Map,_=0;E.forEach((w,k)=>{let A=La+_++;g.set(k,A),w.forEach(X=>Jt(X,A))});let P=[],W=new Set,Y=new Set;for(let w=0;w<this.collectedLeaveElements.length;w++){let k=this.collectedLeaveElements[w],A=k[re];A&&A.setForRemoval&&(P.push(k),W.add(k),A.hasAnimation?this.driver.query(k,kg,!0).forEach(X=>W.add(X)):Y.add(k))}let ot=new Map,N=Jm(y,Array.from(W));N.forEach((w,k)=>{let A=Qo+_++;ot.set(k,A),w.forEach(X=>Jt(X,A))}),n.push(()=>{E.forEach((w,k)=>{let A=g.get(k);w.forEach(X=>Xi(X,A))}),N.forEach((w,k)=>{let A=ot.get(k);w.forEach(X=>Xi(X,A))}),P.forEach(w=>{this.processLeaveNode(w)})});let st=[],Q=[];for(let w=this._namespaceList.length-1;w>=0;w--)this._namespaceList[w].drainQueuedTransitions(t).forEach(A=>{let X=A.player,xt=A.element;if(st.push(X),this.collectedEnterElements.length){let kt=xt[re];if(kt&&kt.setForMove){if(kt.previousTriggersValues&&kt.previousTriggersValues.has(A.triggerName)){let He=kt.previousTriggersValues.get(A.triggerName),$t=this.statesByElement.get(A.element);if($t&&$t.has(A.triggerName)){let Hn=$t.get(A.triggerName);Hn.value=He,$t.set(A.triggerName,Hn)}}X.destroy();return}}let ae=!m||!this.driver.containsElement(m,xt),Ht=ot.get(xt),De=g.get(xt),ut=this._buildInstruction(A,e,De,Ht,ae);if(ut.errors&&ut.errors.length){Q.push(ut);return}if(ae){X.onStart(()=>je(xt,ut.fromStyles)),X.onDestroy(()=>oe(xt,ut.toStyles)),o.push(X);return}if(A.isFallbackTransition){X.onStart(()=>je(xt,ut.fromStyles)),X.onDestroy(()=>oe(xt,ut.toStyles)),o.push(X);return}let Cs=[];ut.timelines.forEach(kt=>{kt.stretchStartingKeyframe=!0,this.disabledNodes.has(kt.element)||Cs.push(kt)}),ut.timelines=Cs,e.append(xt,ut.timelines);let Nu={instruction:ut,player:X,element:xt};a.push(Nu),ut.queriedElements.forEach(kt=>jt(s,kt,[]).push(X)),ut.preStyleProps.forEach((kt,He)=>{if(kt.size){let $t=l.get(He);$t||l.set(He,$t=new Set),kt.forEach((Hn,xr)=>$t.add(xr))}}),ut.postStyleProps.forEach((kt,He)=>{let $t=d.get(He);$t||d.set(He,$t=new Set),kt.forEach((Hn,xr)=>$t.add(xr))})});if(Q.length){let w=[];Q.forEach(k=>{w.push(zm(k.triggerName,k.errors))}),st.forEach(k=>k.destroy()),this.reportError(w)}let mt=new Map,ct=new Map;a.forEach(w=>{let k=w.element;e.has(k)&&(ct.set(k,k),this._beforeAnimationBuild(w.player.namespaceId,w.instruction,mt))}),o.forEach(w=>{let k=w.element;this._getPreviousPlayers(k,!1,w.namespaceId,w.triggerName,null).forEach(X=>{jt(mt,k,[]).push(X),X.destroy()})});let te=P.filter(w=>tu(w,l,d)),di=new Map;Zm(di,this.driver,Y,d,ne).forEach(w=>{tu(w,l,d)&&te.push(w)});let Ve=new Map;E.forEach((w,k)=>{Zm(Ve,this.driver,new Set(w),l,On)}),te.forEach(w=>{let k=di.get(w),A=Ve.get(w);di.set(w,new Map([...k?.entries()??[],...A?.entries()??[]]))});let yr=[],ys=[],xs={};a.forEach(w=>{let{element:k,player:A,instruction:X}=w;if(e.has(k)){if(u.has(k)){A.onDestroy(()=>oe(k,X.toStyles)),A.disabled=!0,A.overrideTotalTime(X.totalTime),o.push(A);return}let xt=xs;if(ct.size>1){let Ht=k,De=[];for(;Ht=Ht.parentNode;){let ut=ct.get(Ht);if(ut){xt=ut;break}De.push(Ht)}De.forEach(ut=>ct.set(ut,xt))}let ae=this._buildAnimation(A.namespaceId,X,mt,r,Ve,di);if(A.setRealPlayer(ae),xt===xs)yr.push(A);else{let Ht=this.playersByElement.get(xt);Ht&&Ht.length&&(A.parentPlayer=Te(Ht)),o.push(A)}}else je(k,X.fromStyles),A.onDestroy(()=>oe(k,X.toStyles)),ys.push(A),u.has(k)&&o.push(A)}),ys.forEach(w=>{let k=r.get(w.element);if(k&&k.length){let A=Te(k);w.setRealPlayer(A)}}),o.forEach(w=>{w.parentPlayer?w.syncPlayerEvents(w.parentPlayer):w.destroy()});for(let w=0;w<P.length;w++){let k=P[w],A=k[re];if(Xi(k,Qo),A&&A.hasAnimation)continue;let X=[];if(s.size){let ae=s.get(k);ae&&ae.length&&X.push(...ae);let Ht=this.driver.query(k,Xo,!0);for(let De=0;De<Ht.length;De++){let ut=s.get(Ht[De]);ut&&ut.length&&X.push(...ut)}}let xt=X.filter(ae=>!ae.destroyed);xt.length?Fg(this,k,xt):this.processLeaveNode(k)}return P.length=0,yr.forEach(w=>{this.players.push(w),w.onDone(()=>{w.destroy();let k=this.players.indexOf(w);this.players.splice(k,1)}),w.play()}),yr}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,t,e,o,r){let a=[];if(t){let s=this.playersByQueriedElement.get(n);s&&(a=s)}else{let s=this.playersByElement.get(n);if(s){let l=!r||r==Nn;s.forEach(d=>{d.queued||!l&&d.triggerName!=o||a.push(d)})}}return(e||o)&&(a=a.filter(s=>!(e&&e!=s.namespaceId||o&&o!=s.triggerName))),a}_beforeAnimationBuild(n,t,e){let o=t.triggerName,r=t.element,a=t.isRemovalTransition?void 0:n,s=t.isRemovalTransition?void 0:o;for(let l of t.timelines){let d=l.element,u=d!==r,m=jt(e,d,[]);this._getPreviousPlayers(d,u,a,s,t.toState).forEach(E=>{let g=E.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),E.destroy(),m.push(E)})}je(r,t.fromStyles)}_buildAnimation(n,t,e,o,r,a){let s=t.triggerName,l=t.element,d=[],u=new Set,m=new Set,y=t.timelines.map(g=>{let _=g.element;u.add(_);let P=_[re];if(P&&P.removedBeforeQueried)return new Se(g.duration,g.delay);let W=_!==l,Y=Ng((e.get(_)||Ag).map(mt=>mt.getRealPlayer())).filter(mt=>{let ct=mt;return ct.element?ct.element===_:!1}),ot=r.get(_),N=a.get(_),st=Oa(this._normalizer,g.keyframes,ot,N),Q=this._buildPlayer(g,st,Y);if(g.subTimeline&&o&&m.add(_),W){let mt=new zn(n,s,_);mt.setRealPlayer(Q),d.push(mt)}return Q});d.forEach(g=>{jt(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>Og(this.playersByQueriedElement,g.element,g))}),u.forEach(g=>Jt(g,Ba));let E=Te(y);return E.onDestroy(()=>{u.forEach(g=>Xi(g,Ba)),oe(l,t.toStyles)}),m.forEach(g=>{jt(o,g,[]).push(E)}),E}_buildPlayer(n,t,e){return t.length>0?this.driver.animate(n.element,t,n.duration,n.delay,n.easing,e):new Se(n.duration,n.delay)}},zn=class{namespaceId;triggerName;element;_player=new Se;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,t,e){this.namespaceId=n,this.triggerName=t,this.element=e}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((t,e)=>{t.forEach(o=>$o(n,e,void 0,o))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let t=this._player;t.triggerCallback&&n.onStart(()=>t.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,t){jt(this._queuedCallbacks,n,[]).push(t)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let t=this._player;t.triggerCallback&&t.triggerCallback(n)}};function Og(i,n,t){let e=i.get(n);if(e){if(e.length){let o=e.indexOf(t);e.splice(o,1)}e.length==0&&i.delete(n)}return e}function Ig(i){return i??null}function ir(i){return i&&i.nodeType===1}function Pg(i){return i=="start"||i=="done"}function Xm(i,n){let t=i.style.display;return i.style.display=n??"none",t}function Zm(i,n,t,e,o){let r=[];t.forEach(l=>r.push(Xm(l)));let a=[];e.forEach((l,d)=>{let u=new Map;l.forEach(m=>{let y=n.computeStyle(d,m,o);u.set(m,y),(!y||y.length==0)&&(d[re]=Rg,a.push(d))}),i.set(d,u)});let s=0;return t.forEach(l=>Xm(l,r[s++])),a}function Jm(i,n){let t=new Map;if(i.forEach(s=>t.set(s,[])),n.length==0)return t;let e=1,o=new Set(n),r=new Map;function a(s){if(!s)return e;let l=r.get(s);if(l)return l;let d=s.parentNode;return t.has(d)?l=d:o.has(d)?l=e:l=a(d),r.set(s,l),l}return n.forEach(s=>{let l=a(s);l!==e&&t.get(l).push(s)}),t}function Jt(i,n){i.classList?.add(n)}function Xi(i,n){i.classList?.remove(n)}function Fg(i,n,t){Te(t).onDone(()=>i.processLeaveNode(n))}function Ng(i){let n=[];return au(i,n),n}function au(i,n){for(let t=0;t<i.length;t++){let e=i[t];e instanceof Ki?au(e.players,n):n.push(e)}}function Lg(i,n){let t=Object.keys(i),e=Object.keys(n);if(t.length!=e.length)return!1;for(let o=0;o<t.length;o++){let r=t[o];if(!n.hasOwnProperty(r)||i[r]!==n[r])return!1}return!0}function tu(i,n,t){let e=t.get(i);if(!e)return!1;let o=n.get(i);return o?e.forEach(r=>o.add(r)):n.set(i,e),t.delete(i),!0}var Zi=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,t)=>{};constructor(n,t,e){this._driver=t,this._normalizer=e,this._transitionEngine=new ts(n.body,t,e),this._timelineEngine=new Za(n.body,t,e),this._transitionEngine.onRemovalComplete=(o,r)=>this.onRemovalComplete(o,r)}registerTrigger(n,t,e,o,r){let a=n+"-"+o,s=this._triggerCache[a];if(!s){let l=[],d=[],u=iu(this._driver,r,l,d);if(l.length)throw km(o,l);s=Eg(o,u,this._normalizer),this._triggerCache[a]=s}this._transitionEngine.registerTrigger(t,o,s)}register(n,t){this._transitionEngine.register(n,t)}destroy(n,t){this._transitionEngine.destroy(n,t)}onInsert(n,t,e,o){this._transitionEngine.insertNode(n,t,e,o)}onRemove(n,t,e){this._transitionEngine.removeNode(n,t,e)}disableAnimations(n,t){this._transitionEngine.markElementAsDisabled(n,t)}process(n,t,e,o){if(e.charAt(0)=="@"){let[r,a]=Ia(e),s=o;this._timelineEngine.command(r,t,a,s)}else this._transitionEngine.trigger(n,t,e,o)}listen(n,t,e,o,r){if(e.charAt(0)=="@"){let[a,s]=Ia(e);return this._timelineEngine.listen(a,t,s,r)}return this._transitionEngine.listen(n,t,e,o,r)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function Bg(i,n){let t=null,e=null;return Array.isArray(n)&&n.length?(t=Wa(n[0]),n.length>1&&(e=Wa(n[n.length-1]))):n instanceof Map&&(t=Wa(n)),t||e?new zg(i,t,e):null}var zg=(()=>{class i{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,e,o){this._element=t,this._startStyles=e,this._endStyles=o;let r=i.initialStylesByElement.get(t);r||i.initialStylesByElement.set(t,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&oe(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(oe(this._element,this._initialStyles),this._endStyles&&(oe(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(i.initialStylesByElement.delete(this._element),this._startStyles&&(je(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(je(this._element,this._endStyles),this._endStyles=null),oe(this._element,this._initialStyles),this._state=3)}}return i})();function Wa(i){let n=null;return i.forEach((t,e)=>{jg(e)&&(n=n||new Map,n.set(e,t))}),n}function jg(i){return i==="display"||i==="position"}var cr=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,t,e,o){this.element=n,this.keyframes=t,this.options=e,this._specialStyles=o,this._duration=e.duration,this._delay=e.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,t=this._triggerWebAnimation(this.element,n,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=n.length?n[n.length-1]:new Map;let e=()=>this._onFinish();return t.addEventListener("finish",e),this.onDestroy(()=>{t.removeEventListener("finish",e)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let t=[];return n.forEach(e=>{t.push(Object.fromEntries(e))}),t}_triggerWebAnimation(n,t,e){let o=this._convertKeyframesToObject(t);try{return n.animate(o,e)}catch(r){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((e,o)=>{o!=="offset"&&n.set(o,this._finished?e:Jo(this.element,o))}),this.currentSnapshot=n}triggerCallback(n){let t=n==="start"?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}},dr=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,t){return Pa(n,t)}getParentElement(n){return Yo(n)}query(n,t,e){return Fa(n,t,e)}computeStyle(n,t,e){return Jo(n,t)}animate(n,t,e,o,r,a=[]){let s=o==0?"both":"forwards",l={duration:e,delay:o,fill:s};r&&(l.easing=r);let d=new Map,u=a.filter(E=>E instanceof cr);Um(e,o)&&u.forEach(E=>{E.currentSnapshot.forEach((g,_)=>d.set(_,g))});let m=Vm(t).map(E=>new Map(E));m=Wm(n,m,d);let y=Bg(n,m);return new cr(n,m,l,y)}};var nr="@",su="@.disabled",mr=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,t,e,o){this.namespaceId=n,this.delegate=t,this.engine=e,this._onDestroy=o}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,t){return this.delegate.createElement(n,t)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,t){this.delegate.appendChild(n,t),this.engine.onInsert(this.namespaceId,t,n,!1)}insertBefore(n,t,e,o=!0){this.delegate.insertBefore(n,t,e),this.engine.onInsert(this.namespaceId,t,n,o)}removeChild(n,t,e,o){if(o){this.delegate.removeChild(n,t,e,o);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(n,t){return this.delegate.selectRootElement(n,t)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,t,e,o){this.delegate.setAttribute(n,t,e,o)}removeAttribute(n,t,e){this.delegate.removeAttribute(n,t,e)}addClass(n,t){this.delegate.addClass(n,t)}removeClass(n,t){this.delegate.removeClass(n,t)}setStyle(n,t,e,o){this.delegate.setStyle(n,t,e,o)}removeStyle(n,t,e){this.delegate.removeStyle(n,t,e)}setProperty(n,t,e){t.charAt(0)==nr&&t==su?this.disableAnimations(n,!!e):this.delegate.setProperty(n,t,e)}setValue(n,t){this.delegate.setValue(n,t)}listen(n,t,e,o){return this.delegate.listen(n,t,e,o)}disableAnimations(n,t){this.engine.disableAnimations(n,t)}},es=class extends mr{factory;constructor(n,t,e,o,r){super(t,e,o,r),this.factory=n,this.namespaceId=t}setProperty(n,t,e){t.charAt(0)==nr?t.charAt(1)=="."&&t==su?(e=e===void 0?!0:!!e,this.disableAnimations(n,e)):this.engine.process(this.namespaceId,n,t.slice(1),e):this.delegate.setProperty(n,t,e)}listen(n,t,e,o){if(t.charAt(0)==nr){let r=Vg(n),a=t.slice(1),s="";return a.charAt(0)!=nr&&([a,s]=Hg(a)),this.engine.listen(this.namespaceId,r,a,s,l=>{let d=l._data||-1;this.factory.scheduleListenerCallback(d,e,l)})}return this.delegate.listen(n,t,e,o)}};function Vg(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function Hg(i){let n=i.indexOf("."),t=i.substring(0,n),e=i.slice(n+1);return[t,e]}var ur=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,t,e){this.delegate=n,this.engine=t,this._zone=e,t.onRemovalComplete=(o,r)=>{r?.removeChild(null,o)}}createRenderer(n,t){let o=this.delegate.createRenderer(n,t);if(!n||!t?.data?.animation){let d=this._rendererCache,u=d.get(o);if(!u){let m=()=>d.delete(o);u=new mr("",o,this.engine,m),d.set(o,u)}return u}let r=t.id,a=t.id+"-"+this._currentId;this._currentId++,this.engine.register(a,n);let s=d=>{Array.isArray(d)?d.forEach(s):this.engine.registerTrigger(r,a,n,d.name,d)};return t.data.animation.forEach(s),new es(this,a,o,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,t,e){if(n>=0&&n<this._microtaskId){this._zone.run(()=>t(e));return}let o=this._animationCallbacksBuffer;o.length==0&&queueMicrotask(()=>{this._zone.run(()=>{o.forEach(r=>{let[a,s]=r;a(s)}),this._animationCallbacksBuffer=[]})}),o.push([t,e])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var Wg=(()=>{class i extends Zi{constructor(t,e,o){super(t,e,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(e){return new(e||i)(B(it),B(li),B(ci))};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function Gg(){return new or}function qg(){return new ur(c(el),c(Zi),c(O))}var lu=[{provide:ci,useFactory:Gg},{provide:Zi,useClass:Wg},{provide:Pt,useFactory:qg}],cD=[{provide:li,useClass:is},{provide:qe,useValue:"NoopAnimations"},...lu],$g=[{provide:li,useFactory:()=>new dr},{provide:qe,useFactory:()=>"BrowserAnimations"},...lu];function cu(){return Vs("NgEagerAnimations"),[...$g]}var Vn="PERFORM_ACTION",Kg="REFRESH",pu="RESET",gu="ROLLBACK",_u="COMMIT",bu="SWEEP",vu="TOGGLE_ACTION",Yg="SET_ACTIONS_ACTIVE",yu="JUMP_TO_STATE",xu="JUMP_TO_ACTION",gs="IMPORT_STATE",Cu="LOCK_CHANGES",Eu="PAUSE_RECORDING",Ji=class{constructor(n,t){if(this.action=n,this.timestamp=t,this.type=Vn,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},os=class{constructor(){this.type=Kg}},rs=class{constructor(n){this.timestamp=n,this.type=pu}},as=class{constructor(n){this.timestamp=n,this.type=gu}},ss=class{constructor(n){this.timestamp=n,this.type=_u}},ls=class{constructor(){this.type=bu}},cs=class{constructor(n){this.id=n,this.type=vu}};var ds=class{constructor(n){this.index=n,this.type=yu}},ms=class{constructor(n){this.actionId=n,this.type=xu}},us=class{constructor(n){this.nextLiftedState=n,this.type=gs}},fs=class{constructor(n){this.status=n,this.type=Cu}},hs=class{constructor(n){this.status=n,this.type=Eu}};var gr=new D("@ngrx/store-devtools Options"),du=new D("@ngrx/store-devtools Initial Config");function wu(){return null}var Qg="NgRx Store DevTools";function Xg(i){let n={maxAge:!1,monitor:wu,actionSanitizer:void 0,stateSanitizer:void 0,name:Qg,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},t=typeof i=="function"?i():i,e=t.logOnly?{pause:!0,export:!0,test:!0}:!1,o=t.features||e||n.features;o.import===!0&&(o.import="custom");let r=Object.assign({},n,{features:o},t);if(r.maxAge&&r.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${r.maxAge}`);return r}function mu(i,n){return i.filter(t=>n.indexOf(t)<0)}function Su(i){let{computedStates:n,currentStateIndex:t}=i;if(t>=n.length){let{state:o}=n[n.length-1];return o}let{state:e}=n[t];return e}function jn(i){return new Ji(i,+Date.now())}function Zg(i,n){return Object.keys(n).reduce((t,e)=>{let o=Number(e);return t[o]=Tu(i,n[o],o),t},{})}function Tu(i,n,t){return It(S({},n),{action:i(n.action,t)})}function Jg(i,n){return n.map((t,e)=>({state:Du(i,t.state,e),error:t.error}))}function Du(i,n,t){return i(n,t)}function Mu(i){return i.predicate||i.actionsSafelist||i.actionsBlocklist}function t_(i,n,t,e){let o=[],r={},a=[];return i.stagedActionIds.forEach((s,l)=>{let d=i.actionsById[s];d&&(l&&_s(i.computedStates[l],d,n,t,e)||(r[s]=d,o.push(s),a.push(i.computedStates[l])))}),It(S({},i),{stagedActionIds:o,actionsById:r,computedStates:a})}function _s(i,n,t,e,o){let r=t&&!t(i,n.action),a=e&&!n.action.type.match(e.map(l=>uu(l)).join("|")),s=o&&n.action.type.match(o.map(l=>uu(l)).join("|"));return r||a||s}function uu(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ku(i){return{ngZone:i?c(O):null,connectInZone:i}}var _r=(()=>{class i extends ao{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=ye(i)))(o||i)}})()}static{this.\u0275prov=x({token:i,factory:i.\u0275fac})}}return i})(),fr={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},ps=new D("@ngrx/store-devtools Redux Devtools Extension"),Au=(()=>{class i{constructor(t,e,o){this.config=e,this.dispatcher=o,this.zoneConfig=ku(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,e){if(this.devtoolsExtension)if(t.type===Vn){if(e.isLocked||e.isPaused)return;let o=Su(e);if(Mu(this.config)&&_s(o,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let r=this.config.stateSanitizer?Du(this.config.stateSanitizer,o,e.currentStateIndex):o,a=this.config.actionSanitizer?Tu(this.config.actionSanitizer,t,e.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(a,r))}else{let o=It(S({},e),{stagedActionIds:e.stagedActionIds,actionsById:this.config.actionSanitizer?Zg(this.config.actionSanitizer,e.actionsById):e.actionsById,computedStates:this.config.stateSanitizer?Jg(this.config.stateSanitizer,e.computedStates):e.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,o,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new ee(t=>{let e=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=e,e.init(),e.subscribe(o=>t.next(o)),e.unsubscribe}):Un}createActionStreams(){let t=this.createChangesObservable().pipe(Ns()),e=t.pipe(nt(d=>d.type===fr.START)),o=t.pipe(nt(d=>d.type===fr.STOP)),r=t.pipe(nt(d=>d.type===fr.DISPATCH),Et(d=>this.unwrapAction(d.payload)),As(d=>d.type===gs?this.dispatcher.pipe(nt(u=>u.type===Nr),Ds(1e3),Gn(1e3),Et(()=>d),ui(()=>Ct(d)),At(1)):Ct(d))),s=t.pipe(nt(d=>d.type===fr.ACTION),Et(d=>this.unwrapAction(d.payload))).pipe(ht(o)),l=r.pipe(ht(o));this.start$=e.pipe(ht(o)),this.actions$=this.start$.pipe(qn(()=>s)),this.liftedActions$=this.start$.pipe(qn(()=>l))}unwrapAction(t){return typeof t=="string"?(0,eval)(`(${t})`):t}getExtensionConfig(t){let e={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(e.maxAge=t.maxAge),e}sendToReduxDevtools(t){try{t()}catch(e){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",e)}}static{this.\u0275fac=function(e){return new(e||i)(B(ps),B(gr),B(_r))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac})}}return i})(),pr={type:Fr},e_="@ngrx/store-devtools/recompute",i_={type:e_};function Ru(i,n,t,e,o){if(e)return{state:t,error:"Interrupted by an error up the chain"};let r=t,a;try{r=i(t,n)}catch(s){a=s.toString(),o.handleError(s)}return{state:r,error:a}}function hr(i,n,t,e,o,r,a,s,l){if(n>=i.length&&i.length===r.length)return i;let d=i.slice(0,n),u=r.length-(l?1:0);for(let m=n;m<u;m++){let y=r[m],E=o[y].action,g=d[m-1],_=g?g.state:e,P=g?g.error:void 0,Y=a.indexOf(y)>-1?g:Ru(t,E,_,P,s);d.push(Y)}return l&&d.push(i[i.length-1]),d}function n_(i,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:jn(pr)},stagedActionIds:[0],skippedActionIds:[],committedState:i,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function o_(i,n,t,e,o={}){return r=>(a,s)=>{let{monitorState:l,actionsById:d,nextActionId:u,stagedActionIds:m,skippedActionIds:y,committedState:E,currentStateIndex:g,computedStates:_,isLocked:P,isPaused:W}=a||n;a||(d=Object.create(d));function Y(st){let Q=st,mt=m.slice(1,Q+1);for(let ct=0;ct<mt.length;ct++)if(_[ct+1].error){Q=ct,mt=m.slice(1,Q+1);break}else delete d[mt[ct]];y=y.filter(ct=>mt.indexOf(ct)===-1),m=[0,...m.slice(Q+1)],E=_[Q].state,_=_.slice(Q),g=g>Q?g-Q:0}function ot(){d={0:jn(pr)},u=1,m=[0],y=[],E=_[g].state,g=0,_=[]}let N=0;switch(s.type){case Cu:{P=s.status,N=1/0;break}case Eu:{W=s.status,W?(m=[...m,u],d[u]=new Ji({type:"@ngrx/devtools/pause"},+Date.now()),u++,N=m.length-1,_=_.concat(_[_.length-1]),g===m.length-2&&g++,N=1/0):ot();break}case pu:{d={0:jn(pr)},u=1,m=[0],y=[],E=i,g=0,_=[];break}case _u:{ot();break}case gu:{d={0:jn(pr)},u=1,m=[0],y=[],g=0,_=[];break}case vu:{let{id:st}=s;y.indexOf(st)===-1?y=[st,...y]:y=y.filter(mt=>mt!==st),N=m.indexOf(st);break}case Yg:{let{start:st,end:Q,active:mt}=s,ct=[];for(let te=st;te<Q;te++)ct.push(te);mt?y=mu(y,ct):y=[...y,...ct],N=m.indexOf(st);break}case yu:{g=s.index,N=1/0;break}case xu:{let st=m.indexOf(s.actionId);st!==-1&&(g=st),N=1/0;break}case bu:{m=mu(m,y),y=[],g=Math.min(g,m.length-1);break}case Vn:{if(P)return a||n;if(W||a&&_s(a.computedStates[g],s,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let Q=_[_.length-1];_=[..._.slice(0,-1),Ru(r,s.action,Q.state,Q.error,t)],N=1/0;break}o.maxAge&&m.length===o.maxAge&&Y(1),g===m.length-1&&g++;let st=u++;d[st]=s,m=[...m,st],N=m.length-1;break}case gs:{({monitorState:l,actionsById:d,nextActionId:u,stagedActionIds:m,skippedActionIds:y,committedState:E,currentStateIndex:g,computedStates:_,isLocked:P,isPaused:W}=s.nextLiftedState);break}case Fr:{N=0,o.maxAge&&m.length>o.maxAge&&(_=hr(_,N,r,E,d,m,y,t,W),Y(m.length-o.maxAge),N=1/0);break}case Nr:{if(_.filter(Q=>Q.error).length>0)N=0,o.maxAge&&m.length>o.maxAge&&(_=hr(_,N,r,E,d,m,y,t,W),Y(m.length-o.maxAge),N=1/0);else{if(!W&&!P){g===m.length-1&&g++;let Q=u++;d[Q]=new Ji(s,+Date.now()),m=[...m,Q],N=m.length-1,_=hr(_,N,r,E,d,m,y,t,W)}_=_.map(Q=>It(S({},Q),{state:r(Q.state,i_)})),g=m.length-1,o.maxAge&&m.length>o.maxAge&&Y(m.length-o.maxAge),N=1/0}break}default:{N=1/0;break}}return _=hr(_,N,r,E,d,m,y,t,W),l=e(l,s),{monitorState:l,actionsById:d,nextActionId:u,stagedActionIds:m,skippedActionIds:y,committedState:E,currentStateIndex:g,computedStates:_,isLocked:P,isPaused:W}}}var fu=(()=>{class i{constructor(t,e,o,r,a,s,l,d){let u=n_(l,d.monitor),m=o_(l,u,s,d.monitor,d),y=Kt(Kt(e.asObservable().pipe(fi(1)),r.actions$).pipe(Et(jn)),t,r.liftedActions$).pipe(Ts(Ss)),E=o.pipe(Et(m)),g=ku(d.connectInZone),_=new tn(1);this.liftedStateSubscription=y.pipe(nn(E),hu(g),Fs(({state:Y},[ot,N])=>{let st=N(Y,ot);return ot.type!==Vn&&Mu(d)&&(st=t_(st,d.predicate,d.actionsSafelist,d.actionsBlocklist)),r.notify(ot,st),{state:st,action:ot}},{state:u,action:null})).subscribe(({state:Y,action:ot})=>{if(_.next(Y),ot.type===Vn){let N=ot.action;a.next(N)}}),this.extensionStartSubscription=r.start$.pipe(hu(g)).subscribe(()=>{this.refresh()});let P=_.asObservable(),W=P.pipe(Et(Su));Object.defineProperty(W,"state",{value:dl(W,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=t,this.liftedState=P,this.state=W}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(t){this.dispatcher.next(t)}next(t){this.dispatcher.next(t)}error(t){}complete(){}performAction(t){this.dispatch(new Ji(t,+Date.now()))}refresh(){this.dispatch(new os)}reset(){this.dispatch(new rs(+Date.now()))}rollback(){this.dispatch(new as(+Date.now()))}commit(){this.dispatch(new ss(+Date.now()))}sweep(){this.dispatch(new ls)}toggleAction(t){this.dispatch(new cs(t))}jumpToAction(t){this.dispatch(new ms(t))}jumpToState(t){this.dispatch(new ds(t))}importState(t){this.dispatch(new us(t))}lockChanges(t){this.dispatch(new fs(t))}pauseRecording(t){this.dispatch(new hs(t))}static{this.\u0275fac=function(e){return new(e||i)(B(_r),B(ao),B(pl),B(Au),B(so),B(gi),B(ml),B(gr))}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac})}}return i})();function hu({ngZone:i,connectInZone:n}){return t=>n?new ee(e=>t.subscribe({next:o=>i.run(()=>e.next(o)),error:o=>i.run(()=>e.error(o)),complete:()=>i.run(()=>e.complete())})):t}var r_=new D("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function a_(i,n){return!!i||n.monitor!==wu}function s_(){let i="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[i]<"u"?window[i]:null}function l_(i){return i.state}function br(i={}){return hi([Au,_r,fu,{provide:du,useValue:i},{provide:r_,deps:[ps,gr],useFactory:a_},{provide:ps,useFactory:s_},{provide:gr,deps:[du],useFactory:Xg},{provide:_l,deps:[fu],useFactory:l_},{provide:gl,useExisting:_r}])}var Ou={production:!1,providers:[br({maxAge:25,logOnly:!1,autoPause:!0,features:{pause:!1,lock:!0,persist:!0}})]};var Iu={providers:[nl(ol()),cl(rm),yl(cm),br({maxAge:25,logOnly:!to(),autoPause:!0,trace:!1,traceLimit:75}),Il([mm]),Vl(),cu(),Ls(Ad),al(rl()),Ou.providers]};var vr=(()=>{class i{registerOutlet(t){this.outlet=t}attach(t){if(!this.outlet)throw new Error("Portal outlet is not registered.");return this.outlet.hasAttached()&&this.outlet.detach(),this.outlet.attach(t)}detach(){this.outlet?.hasAttached()&&this.outlet.detach()}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var c_=["modalTemplate"],d_=["*"];function m_(i,n){if(i&1&&(p(0,"h2"),f(1),h()),i&2){let t=lt(2);b(),Rt(t.modalTitle)}}function u_(i,n){}function f_(i,n){if(i&1&&(kr(0),ft(1,u_,0,0,"ng-template",10),Ar()),i&2){let t=lt(2);b(),J("cdkPortalOutlet",t.selectedPortal)}}function h_(i,n){if(i&1&&(kr(0),f(1),Ar()),i&2){let t=lt(3);b(),Rt(t.content)}}function p_(i,n){i&1&&et(0)}function g_(i,n){if(i&1&&ft(0,h_,2,1,"ng-container",9)(1,p_,1,0,"ng-template",null,2,le),i&2){let t=vi(2),e=lt(2);J("ngIf",e.content)("ngIfElse",t)}}function __(i,n){if(i&1){let t=$e();p(0,"div",3)(1,"div",4),I("click",function(){Ue(t);let o=lt();return We(o.close())}),h(),p(2,"div",5)(3,"div",6),ft(4,m_,2,1,"h2",7),h(),p(5,"div",8),ft(6,f_,2,1,"ng-container",9)(7,g_,3,2,"ng-template",null,1,le),h()()()}if(i&2){let t=vi(8),e=lt();b(4),J("ngIf",e.modalTitle),b(2),J("ngIf",e.selectedPortal)("ngIfElse",t)}}var bs=(()=>{class i{constructor(t,e,o,r){this._viewContainerRef=t,this._router=e,this._location=o,this._portalOutletService=r,this.isOpen=!1,this.selectedPortal=null,this.modalTitle="",this.content=""}show(t){t?this.selectedPortal=t:this.selectedPortal||(this.selectedPortal=this.getDefaultPortal()),this.modalPortal||(this.modalPortal=new pe(this.modalTemplate,this._viewContainerRef)),this._portalOutletService.attach(this.modalPortal),this.isOpen=!0}openComponent(t,e){e&&(this.modalTitle=e),this.selectedPortal=new qt(t,this._viewContainerRef),this.show()}getDefaultPortal(){return this.defaultPortal||(this.defaultPortal=new qt(oi,this._viewContainerRef)),this.defaultPortal}close(){this.isOpen=!1,this.selectedPortal=null,this._portalOutletService.detach(),this._router.url.startsWith("/modalpage")&&this._location.back()}ngOnDestroy(){this._portalOutletService.detach()}static{this.\u0275fac=function(e){return new(e||i)(z(Yt),z(ue),z(io),z(vr))}}static{this.\u0275cmp=v({type:i,selectors:[["app-modalpage"]],viewQuery:function(e,o){if(e&1&&St(c_,5),e&2){let r;G(r=q())&&(o.modalTemplate=r.first)}},inputs:{modalTitle:"modalTitle",content:"content"},ngContentSelectors:d_,decls:2,vars:0,consts:[["modalTemplate",""],["defaultBody",""],["projectedContent",""],[1,"modal-page"],[1,"modal-page__backdrop",3,"click"],[1,"modal-page__content"],[1,"modal-page__header"],[4,"ngIf"],[1,"modal-page__body"],[4,"ngIf","ngIfElse"],[3,"cdkPortalOutlet"]],template:function(e,o){e&1&&(bt(),ft(0,__,9,3,"ng-template",null,0,le))},dependencies:[de,Js,zt,Ft],styles:[".modal-page[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000}.modal-page__backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:#000000a6}.modal-page__content[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;height:100%;background:#fff;overflow:auto}.modal-page__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.modal-page__close[_ngcontent-%COMP%]{border:none;background:transparent;font-size:28px;line-height:1;cursor:pointer}.modal-page__body[_ngcontent-%COMP%]{color:#1a1a1a;line-height:1.6}"]})}}return i})();function b_(i,n){}var Fu=(()=>{class i{constructor(t,e,o,r,a){this.router=t,this.adobeService=e,this.portalOutletService=o,this.modalpageService=r,this.router.events.pipe(nt(s=>s instanceof ro)).subscribe(s=>{this.adobeService.trackEvent("NavigationEnd",{page:{url:s.url,name:a.getTitle()}})})}ngAfterViewInit(){this.portalOutletService.registerOutlet(this.portalOutlet),this.modalpageService.setModal(this.modalPage)}static{this.\u0275fac=function(e){return new(e||i)(z(ue),z(Lo),z(vr),z(qi),z(me))}}static{this.\u0275cmp=v({type:i,selectors:[["app-root"]],viewQuery:function(e,o){if(e&1&&St(Ft,5)(bs,5),e&2){let r;G(r=q())&&(o.portalOutlet=r.first),G(r=q())&&(o.modalPage=r.first)}},decls:4,vars:0,consts:[["modalPage",""],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(R(0,"app-modalpage",null,0)(2,"router-outlet"),ft(3,b_,0,0,"ng-template",1))},dependencies:[de,Re,zt,Ft,bs],encapsulation:2})}}return i})();il(Fu,Iu).catch(i=>console.error(i));
