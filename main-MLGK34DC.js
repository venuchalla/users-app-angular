import{a as fi}from"./chunk-D53OSBVP.js";import{$ as qi,A as yo,B as ti,C as Sl,D as Le,E as El,F as Ml,G as ui,H as bo,I as qe,J as Tn,K as ji,L as Co,M as Hi,N as Ur,O as qr,P as ye,Q as jt,R as kl,S as Tl,T as xo,U as Pl,V as Ie,W as we,X as Be,Y as Ae,Z as Ol,_ as Ui,a as nt,aa as Wi,b as ue,ba as Gi,c as xe,ca as Yi,d as Te,da as Qi,e as Pe,f as Oe,fa as Ki,g as Ke,h as De,i as _l,j as _o,k as $e,l as Re,m as vo,n as jr,o as Se,p as Jt,q as kn,r as ei,s as Ot,t as vl,u as Hr,v as yl,w as bl,x as Cl,y as xl,z as wl}from"./chunk-3QI2Z3IA.js";import{a as tl,b as ke,c as Vt,d as Nr,e as uo,f as il,g as nl,h as ol,i as rl,j as al,k as sl,l as Br,m as fo,n as ll,o as pt,p as cl,q as dl,r as zr,s as Vr,t as ml,u as Pt,v as Ni}from"./chunk-NE4ZFHWM.js";import{a as hl,b as Bi,c as pl,d as ul,e as zi,f as fl,g as Vi,h as gl,l as Zt,m as go}from"./chunk-AOZWIP6L.js";import{A as el,b as lo,c as qs,d as co,e as mo,f as Mt,g as ho,h as Ws,i as Gs,j as Ys,k as ht,l as Qs,m as Ks,n as kt,o as $s,p as Xs,q as Zs,r as Ar,s as po,t as Js,u as Fr,v as Lr,w as Xt,x as Li,y as Qe,z as Tt}from"./chunk-PAPP4Y2B.js";import{$ as J,$b as mi,A as je,Aa as Ce,B as ie,Bb as Os,C as Er,Ca as xn,Cc as ao,D as Pi,E as us,Ea as Nt,Ec as Ns,F as fs,Fa as _t,Fc as Bs,G as Ye,Gb as Or,Gc as zs,H as gs,Ha as H,Hb as ne,Hc as Vs,I as _s,Ia as Es,Ib as O,Ic as Mn,Jb as D,Jc as js,K as vs,Kb as Ds,Kc as so,Lb as Rs,Ma as no,Mb as Yt,N as Mr,Na as wn,Nb as Qt,Nc as Ue,Ob as N,P as ys,Pb as l,Pc as ve,Q as kr,Qb as c,Qc as it,Rb as x,Rc as Hs,S as bs,Sb as Q,Sc as Us,T as Cs,Tb as ee,U as Tr,Ub as yt,V as xs,Vb as Dr,W as gt,Wb as Rr,X as Oi,Xb as ro,Y as fe,Yb as dt,Zb as Bt,_ as Cn,_b as E,a as F,ab as Ms,ac as A,b as ze,ba as Jn,bb as ks,bc as He,c as ds,ca as k,cc as ce,d as ki,da as K,db as Sn,dc as zt,e as Ti,eb as f,ec as _e,fa as T,fc as R,g as Lt,ga as z,gc as I,h as j,ha as p,hc as Is,ia as Di,ib as Ts,ic as As,j as yn,ja as eo,jb as lt,jc as Ir,k as ms,ka as ws,kb as En,kc as Kt,l as Xn,lb as vt,lc as $t,m as hs,ma as to,mb as Me,mc as W,nb as L,nc as Et,o as Ge,oa as at,oc as d,pa as st,pb as ct,pc as V,qa as io,qb as Pr,qc as Fe,ra as Ss,rc as Fs,s as ps,sa as de,sc as Ls,t as Ve,ta as ge,tb as y,tc as Ii,ub as $,uc as Ai,v as bn,vb as te,vc as Fi,wa as be,wb as oo,wc as bt,xa as Y,xb as Ps,xc as hi,y as Zn,ya as Ri,yb as tt,yc as pi,zb as me,zc as mt}from"./chunk-STBKEHOI.js";var Ch={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},wo="__@ngrx/effects_create__";function Dl(n,i={}){let e=i.functional?n:n(),t=F(F({},Ch),i);return Object.defineProperty(e,wo,{value:t}),e}function xh(n){return Object.getOwnPropertyNames(n).filter(t=>n[t]&&n[t].hasOwnProperty(wo)?n[t][wo].hasOwnProperty("dispatch"):!1).map(t=>{let o=n[t][wo];return F({propertyName:t},o)})}function wh(n){return xh(n)}function Rl(n){return Object.getPrototypeOf(n)}function Sh(n){return!!n.constructor&&n.constructor.name!=="Object"&&n.constructor.name!=="Function"}function Il(n){return typeof n=="function"}function Eh(n){return n.filter(Il)}function Mh(n,i,e){let t=Rl(n),r=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,a=wh(n).map(({propertyName:s,dispatch:m,useEffectsErrorHandler:h})=>{let g=typeof n[s]=="function"?n[s]():n[s],u=h?e(g,i):g;return m===!1?u.pipe(gs()):u.pipe(ys()).pipe(Ve(C=>({effect:n[s],notification:C,propertyName:s,sourceName:r,sourceInstance:n})))});return je(...a)}var kh=10;function Al(n,i,e=kh){return n.pipe(Pi(t=>(i&&i.handleError(t),e<=1?n:Al(n,i,e-1))))}var Fl=(()=>{class n extends Lt{constructor(e){super(),e&&(this.source=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}static{this.\u0275fac=function(t){return new(t||n)(z(fo))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ll(...n){return ie(i=>n.some(e=>typeof e=="string"?e===i.type:e.type===i.type))}var Th=new T("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Al}),Ph="@ngrx/effects/init",Oh=ke(Ph);function Dh(n,i){if(n.notification.kind==="N"){let e=n.notification.value;!Rh(e)&&i.handleError(new Error(`Effect ${Ih(n)} dispatched an invalid action: ${Ah(e)}`))}}function Rh(n){return typeof n!="function"&&n&&n.type&&typeof n.type=="string"}function Ih({propertyName:n,sourceInstance:i,sourceName:e}){let t=typeof i[n]=="function";return!!e?`"${e}.${String(n)}${t?"()":""}"`:`"${String(n)}()"`}function Ah(n){try{return JSON.stringify(n)}catch(i){return n}}var Fh="ngrxOnIdentifyEffects";function Lh(n){return Wr(n,Fh)}var Nh="ngrxOnRunEffects";function Bh(n){return Wr(n,Nh)}var zh="ngrxOnInitEffects";function Vh(n){return Wr(n,zh)}function Wr(n,i){return n&&i in n&&typeof n[i]=="function"}var Nl=(()=>{class n extends j{constructor(e,t){super(),this.errorHandler=e,this.effectsErrorHandler=t}addEffects(e){this.next(e)}toActions(){return this.pipe(Mr(e=>Sh(e)?Rl(e):e),bn(e=>e.pipe(Mr(jh))),bn(e=>{let t=e.pipe(vs(r=>Hh(this.errorHandler,this.effectsErrorHandler)(r)),Ve(r=>(Dh(r,this.errorHandler),r.notification)),ie(r=>r.kind==="N"&&r.value!=null),_s()),o=e.pipe(Ye(1),ie(Vh),Ve(r=>r.ngrxOnInitEffects()));return je(t,o)}))}static{this.\u0275fac=function(t){return new(t||n)(z(Ri),z(Th))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function jh(n){return Lh(n)?n.ngrxOnIdentifyEffects():""}function Hh(n,i){return e=>{let t=Mh(e,n,i);return Bh(e)?e.ngrxOnRunEffects(t):t}}var Uh=(()=>{class n{get isStarted(){return!!this.effectsSubscription}constructor(e,t){this.effectSources=e,this.store=t,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(t){return new(t||n)(z(Nl),z(pt))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Bl(...n){let i=n.flat(),e=Eh(i);return Di([e,eo(()=>{p(ol),p(rl,{optional:!0});let t=p(Uh),o=p(Nl),r=!t.isStarted;r&&t.start();for(let a of i){let s=Il(a)?p(a):a;o.addEffects(s)}r&&p(pt).dispatch(Oh())})])}var Hl="@ngrx/router-store/request",C_=ke(Hl,Vt()),Gr="@ngrx/router-store/navigation",x_=ke(Gr,Vt()),Yr="@ngrx/router-store/cancel",w_=ke(Yr,Vt()),Qr="@ngrx/router-store/error",S_=ke(Qr,Vt()),Ul="@ngrx/router-store/navigated",E_=ke(Ul,Vt());function ql(n,i){let e=i;switch(e.type){case Gr:case Qr:case Yr:return{state:e.payload.routerState,navigationId:e.payload.event.id};default:return n}}var So=class{serialize(i){return{root:this.serializeRoute(i.root),url:i.url}}serializeRoute(i){let e=i.children.map(t=>this.serializeRoute(t));return{params:i.params,data:i.data,url:i.url,outlet:i.outlet,title:i.title,routeConfig:i.routeConfig?{path:i.routeConfig.path,pathMatch:i.routeConfig.pathMatch,redirectTo:i.routeConfig.redirectTo,outlet:i.routeConfig.outlet,title:typeof i.routeConfig.title=="string"?i.routeConfig.title:void 0}:null,queryParams:i.queryParams,fragment:i.fragment,firstChild:e[0],children:e}}},Kr=(function(n){return n[n.PreActivation=1]="PreActivation",n[n.PostActivation=2]="PostActivation",n})(Kr||{}),Wh="router",zl=new T("@ngrx/router-store Internal Configuration"),Wl=new T("@ngrx/router-store Configuration"),$r=(function(n){return n[n.Full=0]="Full",n[n.Minimal=1]="Minimal",n})($r||{});function Gh(n){return F({stateKey:Wh,serializer:So,navigationActionTiming:Kr.PreActivation},n)}var Eo=class{serialize(i){return{root:this.serializeRoute(i.root),url:i.url}}serializeRoute(i){let e=i.children.map(t=>this.serializeRoute(t));return{params:i.params,paramMap:i.paramMap,data:i.data,url:i.url,outlet:i.outlet,title:i.title,routeConfig:i.routeConfig?{component:i.routeConfig.component,path:i.routeConfig.path,pathMatch:i.routeConfig.pathMatch,redirectTo:i.routeConfig.redirectTo,outlet:i.routeConfig.outlet,title:i.routeConfig.title}:null,queryParams:i.queryParams,queryParamMap:i.queryParamMap,fragment:i.fragment,component:i.routeConfig?i.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:e[0],pathFromRoot:void 0,children:e}}},Mo=class{},Dt=(function(n){return n[n.NONE=1]="NONE",n[n.ROUTER=2]="ROUTER",n[n.STORE=3]="STORE",n})(Dt||{}),Vl=(()=>{class n{constructor(e,t,o,r,a,s){this.store=e,this.router=t,this.serializer=o,this.errorHandler=r,this.config=a,this.activeRuntimeChecks=s,this.lastEvent=null,this.routerState=null,this.trigger=Dt.NONE,this.stateKey=this.config.stateKey,!dl()&&so()&&(s?.strictActionSerializability||s?.strictStateSerializability)&&this.serializer instanceof Eo&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(cl(this.stateKey),Cn(this.store)).subscribe(([e,t])=>{this.navigateIfNeeded(e,t)})}navigateIfNeeded(e,t){if(!e||!e.state||this.trigger===Dt.ROUTER||this.lastEvent instanceof Ar)return;let o=e.state.url;Yh(this.router.url,o)||(this.storeState=t,this.trigger=Dt.STORE,this.router.navigateByUrl(o).catch(r=>{this.errorHandler.handleError(r)}))}setUpRouterEventsListener(){let e=this.config.navigationActionTiming===Kr.PostActivation,t;this.router.events.pipe(Cn(this.store)).subscribe(([o,r])=>{this.lastEvent=o,o instanceof Ar?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==Dt.STORE&&(this.storeState=r,this.dispatchRouterRequest(o))):o instanceof Lr?(t=o,!e&&this.trigger!==Dt.STORE&&this.dispatchRouterNavigation(o)):o instanceof Js?(this.dispatchRouterCancel(o),this.reset()):o instanceof Fr?(this.dispatchRouterError(o),this.reset()):o instanceof po&&(this.trigger!==Dt.STORE&&(e&&this.dispatchRouterNavigation(t),this.dispatchRouterNavigated(o)),this.reset())})}dispatchRouterRequest(e){this.dispatchRouterAction(Hl,{event:e})}dispatchRouterNavigation(e){let t=this.serializer.serialize(e.state);this.dispatchRouterAction(Gr,{routerState:t,event:new Lr(e.id,e.url,e.urlAfterRedirects,t)})}dispatchRouterCancel(e){this.dispatchRouterAction(Yr,{storeState:this.storeState,event:e})}dispatchRouterError(e){this.dispatchRouterAction(Qr,{storeState:this.storeState,event:new Fr(e.id,e.url,`${e}`)})}dispatchRouterNavigated(e){let t=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(Ul,{event:e,routerState:t})}dispatchRouterAction(e,t){this.trigger=Dt.ROUTER;try{this.store.dispatch({type:e,payload:ze(F({routerState:this.routerState},t),{event:this.config.routerState===$r.Full?t.event:{id:t.event.id,url:t.event.url,urlAfterRedirects:t.event.urlAfterRedirects}})})}finally{this.trigger=Dt.NONE}}reset(){this.trigger=Dt.NONE,this.storeState=null,this.routerState=null}static{this.\u0275fac=function(t){return new(t||n)(z(pt),z(Qe),z(Mo),z(Ri),z(Wl),z(nl))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac})}}return n})();function Yh(n,i){return jl(n)===jl(i)}function jl(n){return n?.length>0&&n[n.length-1]==="/"?n.substring(0,n.length-1):n}function Gl(n={}){return Di([{provide:zl,useValue:n},{provide:Wl,useFactory:Gh,deps:[zl]},{provide:Mo,useClass:n.serializer?n.serializer:n.routerState===$r.Full?Eo:So},eo(()=>p(Vl)),Vl])}var Qh=["mat-internal-form-field",""],Kh=["*"],Yl=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&W("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Qh,ngContentSelectors:Kh,decls:1,vars:0,template:function(t,o){t&1&&(He(),ce(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var $h=["input"],Xh=["formField"],Zh=["*"],ko=class{source;value;constructor(i,e){this.source=i,this.value=e}},Jh={provide:hl,useExisting:Jn(()=>Dn),multi:!0},Ql=new T("MatRadioGroup"),ep=new T("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})}),Dn=(()=>{class n{_changeDetector=p(Ue);_value=null;_name=p(Le).getId("mat-radio-group-");_selected=null;_isInitialized=!1;_labelPosition="after";_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new be;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;constructor(){}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new ko(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,o,r){if(t&1&&zt(r,$i,5),t&2){let a;R(a=I())&&(o._radios=a)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",ve],required:[2,"required","required",ve],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[bt([Jh,{provide:Ql,useExisting:n}])]})}return n})(),$i=(()=>{class n{_elementRef=p(H);_changeDetector=p(Ue);_focusMonitor=p(ei);_radioDispatcher=p(Ml);_defaultOptions=p(ep,{optional:!0});_ngZone=p(Y);_renderer=p(Me);_uniqueId=p(Le).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new be;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=qe();_injector=p(de);constructor(){p(Ot).load(Tn);let e=p(Ql,{optional:!0}),t=p(new Ns("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=it(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new ko(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let o=this._inputElement?.nativeElement;o&&(o.setAttribute("tabindex",t+""),this._previousTabIndex=t,lt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===o&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===o&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,o){if(t&1&&_e($h,5)(Xh,7,H),t&2){let r;R(r=I())&&(o._inputElement=r.first),R(r=I())&&(o._rippleTrigger=r.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,o){t&1&&E("focus",function(){return o._inputElement.nativeElement.focus()}),t&2&&(ne("id",o.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),W("mat-primary",o.color==="primary")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("mat-mdc-radio-checked",o.checked)("mat-mdc-radio-disabled",o.disabled)("mat-mdc-radio-disabled-interactive",o.disabledInteractive)("_mat-animation-noopable",o._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:it(e)],checked:[2,"checked","checked",ve],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",ve],required:[2,"required","required",ve],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Zh,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,o){t&1&&(He(),l(0,"div",2,0)(2,"div",3)(3,"div",4),E("click",function(a){return o._onTouchTargetClick(a)}),c(),l(4,"input",5,1),E("change",function(a){return o._onInputInteraction(a)}),c(),l(6,"div",6),x(7,"div",7)(8,"div",8),c(),l(9,"div",9),x(10,"div",10),c()(),l(11,"label",11),ce(12),c()()),t&2&&(N("labelPosition",o.labelPosition),f(2),W("mdc-radio--disabled",o.disabled),f(2),N("id",o.inputId)("checked",o.checked)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),ne("name",o.name)("value",o.value)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-describedby",o.ariaDescribedby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),f(5),N("matRippleTrigger",o._rippleTrigger.nativeElement)("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",!0),f(2),N("for",o.inputId))},dependencies:[Tl,Yl],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2,changeDetection:0})}return n})(),Kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[xo,$i,ue]})}return n})();var Rn=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ot=class extends Rn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,o,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null}},Rt=class extends Rn{templateRef;viewContainerRef;context;injector;constructor(i,e,t,o){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},In=class extends Rn{element;constructor(i){super(),this.element=i instanceof H?i.nativeElement:i}},Xi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ot)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Rt)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof In)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},To=class extends Xi{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,o=t.get(Pr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,o=i.injector||this._defaultInjector||de.NULL,r=o.get(to,t.injector);e=Us(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var We=(()=>{class n extends Xi{_moduleRef=p(Pr,{optional:!0});_document=p(ge);_viewContainerRef=p(ct);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new be;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let o=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(o,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[tt]})}return n})(),Xe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({})}return n})();var ip=20,gi=(()=>{class n{_ngZone=p(Y);_platform=p(Se);_renderer=p(vt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new j;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ip){return this._platform.isBrowser?new Lt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Er(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ge()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ie(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let o=kn(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zr=(()=>{class n{elementRef=p(H);scrollDispatcher=p(gi);ngZone=p(Y);dir=p(nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new j;_renderer=p(Me);_cleanupScroll;_elementScrolled=new j;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=o?e.end:e.start),e.right==null&&(e.right=o?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&Hi()!=ji.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Hi()==ji.INVERTED?e.left=e.right:Hi()==ji.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Co()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",o="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?o:t:e=="end"&&(e=a?t:o),a&&Hi()==ji.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Hi()==ji.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),np=20,Zi=(()=>{class n{_platform=p(Se);_listeners;_viewportSize=null;_change=new j;_document=p(ge);constructor(){let e=p(Y),t=p(vt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=np){return e>0?this._change.pipe(Er(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var An=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({})}return n})(),Jr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[ue,An,ue,An]})}return n})();var $l=Co();function ii(n){return new Po(n.get(Zi),n.get(ge))}var Po=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=ye(-this._previousScrollPosition.left),i.style.top=ye(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),$l&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),$l&&(t.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function nc(n,i){return new Oo(n.get(gi),n.get(Y),n.get(Zi),i)}var Oo=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,o){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Fn=class{enable(){}disable(){}attach(){}};function ea(n,i){return i.some(e=>{let t=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return t||o||r||a})}function Xl(n,i){return i.some(e=>{let t=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return t||o||r||a})}function Fo(n,i){return new Do(n.get(gi),n.get(Zi),n.get(Y),i)}var Do=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,o){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();ea(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},oc=(()=>{class n{_injector=p(de);constructor(){}noop=()=>new Fn;close=e=>nc(this._injector,e);block=()=>ii(this._injector);reposition=e=>Fo(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ji=class{positionStrategy;scrollStrategy=new Fn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Ro=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var rc=(()=>{class n{_attachedOverlays=[];_document=p(ge);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ac=(()=>{class n extends rc{_ngZone=p(Y);_renderer=p(vt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sc=(()=>{class n extends rc{_platform=p(Se);_ngZone=p(Y);_renderer=p(vt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=jr(e)};_clickListener=e=>{let t=jr(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],m=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,m))){if(Zl(s.overlayElement,t)||Zl(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>m.next(e)):m.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zl(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var lc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return n})(),Lo=(()=>{class n{_platform=p(Se);_containerElement;_document=p(ge);_styleLoader=p(Ot);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ur()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Ur()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(lc)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ta=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,o){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ia(n){return n&&n.nodeType===1}var en=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new j;_attachments=new j;_detachments=new j;_positionStrategy;_scrollStrategy;_locationChanges=Ti.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new j;_outsidePointerEvents=new j;_afterNextRenderRef;constructor(i,e,t,o,r,a,s,m,h,g=!1,u,b){this._portalOutlet=i,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=m,this._outsideClickDispatcher=h,this._animationsDisabled=g,this._injector=u,this._renderer=b,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=F(F({},this._config),i),this._updateElementSize()}setDirection(i){this._config=ze(F({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=ye(this._config.width),i.height=ye(this._config.height),i.minWidth=ye(this._config.minWidth),i.minHeight=ye(this._config.minHeight),i.maxWidth=ye(this._config.maxWidth),i.maxHeight=ye(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ia(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ta(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let o=Hr(e||[]).filter(r=>!!r);o.length&&(t?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=lt(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Jl="cdk-overlay-connected-position-bounding-box",rp=/([A-Za-z%]+)$/;function No(n,i){return new Io(i,n.get(Zi),n.get(ge),n.get(Se),n.get(Lo))}var Io=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new j;_resizeSubscription=Ti.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Jl),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let m=this._getOriginPoint(i,o,s),h=this._getOverlayPoint(m,e,s),g=this._getOverlayFit(h,e,t,s);if(g.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,m);return}if(this._canFitWithFlexibleDimensions(g,h,t)){r.push({position:s,origin:m,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(m,s)});continue}(!a||a.overlayFit.visibleArea<g.visibleArea)&&(a={overlayFit:g,overlayPoint:h,originPoint:m,position:s,overlayRect:e})}if(r.length){let s=null,m=-1;for(let h of r){let g=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);g>m&&(m=g,s=h)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_i(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Jl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:ia(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let o;if(t.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;o=t.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(i,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,e,t,o){let r=tc(e),{x:a,y:s}=i,m=this._getOffset(o,"x"),h=this._getOffset(o,"y");m&&(a+=m),h&&(s+=h);let g=0-a,u=a+r.width-t.width,b=0-s,C=s+r.height-t.height,_=this._subtractOverflows(r.width,g,u),v=this._subtractOverflows(r.height,b,C),q=_*v;return{visibleArea:q,isCompletelyWithinViewport:r.width*r.height===q,fitsInViewportVertically:v===r.height,fitsInViewportHorizontally:_==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=ec(this._overlayRef.getConfig().minHeight),s=ec(this._overlayRef.getConfig().minWidth),m=i.fitsInViewportVertically||a!=null&&a<=o,h=i.fitsInViewportHorizontally||s!=null&&s<=r;return m&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=tc(e),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),s=Math.max(i.y+o.height-r.height,0),m=Math.max(r.top-t.top-i.y,0),h=Math.max(r.left-t.left-i.x,0),g=0,u=0;return o.width<=r.width?g=h||-a:g=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,o.height<=r.height?u=m||-s:u=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:g,y:u},{x:i.x+g,y:i.y+u}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!ap(this._lastScrollVisibility,t)){let o=new Ro(i,t);this._positionChanges.next(o)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=i.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-s+this._getViewportMarginTop();else{let C=Math.min(t.bottom-i.y+t.top,i.y),_=this._lastBoundingBoxSize.height;r=C*2,a=i.y-C,r>_&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-_/2)}let m=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,h=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,g,u,b;if(h)b=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),g=i.x-this._getViewportMarginStart();else if(m)u=i.x,g=t.right-i.x-this._getViewportMarginEnd();else{let C=Math.min(t.right-i.x+t.left,i.x),_=this._lastBoundingBoxSize.width;g=C*2,u=i.x-C,g>_&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-_/2)}return{top:a,left:u,bottom:s,right:b,width:g,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=ye(t.width),o.height=ye(t.height),o.top=ye(t.top)||"auto",o.bottom=ye(t.bottom)||"auto",o.left=ye(t.left)||"auto",o.right=ye(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=ye(r)),a&&(o.maxWidth=ye(a))}this._lastBoundingBoxSize=t,_i(this._boundingBox.style,o)}_resetBoundingBoxStyles(){_i(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_i(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let g=this._viewportRuler.getViewportScrollPosition();_i(t,this._getExactOverlayY(e,i,g)),_i(t,this._getExactOverlayX(e,i,g))}else t.position="static";let s="",m=this._getOffset(e,"x"),h=this._getOffset(e,"y");m&&(s+=`translateX(${m}px) `),h&&(s+=`translateY(${h}px)`),t.transform=s.trim(),a.maxHeight&&(o?t.maxHeight=ye(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=ye(a.maxWidth):r&&(t.maxWidth="")),_i(this._pane.style,t)}_getExactOverlayY(i,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=ye(r.y);return o}_getExactOverlayX(i,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=ye(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Xl(i,t),isOriginOutsideView:ea(i,t),isOverlayClipped:Xl(e,t),isOverlayOutsideView:ea(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,o)=>t-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Hr(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof H)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function _i(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function ec(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(rp);return!e||e==="px"?parseFloat(i):null}return n||null}function tc(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ap(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var ic="cdk-global-overlay-wrapper";function ni(n){return new Ao}var Ao=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ic),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=t,m=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),h=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),g=this._xPosition,u=this._xOffset,b=this._overlayRef.getConfig().direction==="rtl",C="",_="",v="";m?v="flex-start":g==="center"?(v="center",b?_=u:C=u):b?g==="left"||g==="end"?(v="flex-end",C=u):(g==="right"||g==="start")&&(v="flex-start",_=u):g==="left"||g==="start"?(v="flex-start",C=u):(g==="right"||g==="end")&&(v="flex-end",_=u),i.position=this._cssPosition,i.marginLeft=m?"0":C,i.marginTop=h?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=m?"0":_,e.justifyContent=v,e.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ic),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},cc=(()=>{class n{_injector=p(de);constructor(){}global(){return ni()}flexibleConnectedTo(e){return No(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),dc=new T("OVERLAY_DEFAULT_CONFIG");function tn(n,i){n.get(Ot).load(lc);let e=n.get(Lo),t=n.get(ge),o=n.get(Le),r=n.get(Or),a=n.get(nt),s=n.get(Me,null,{optional:!0})||n.get(vt).createRenderer(null,null),m=new Ji(i),h=n.get(dc,null,{optional:!0})?.usePopover??!0;m.direction=m.direction||a.value,"showPopover"in t.body?m.usePopover=i?.usePopover??h:m.usePopover=!1;let g=t.createElement("div"),u=t.createElement("div");g.id=o.getId("cdk-overlay-"),g.classList.add("cdk-overlay-pane"),u.appendChild(g),m.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let b=m.usePopover?m.positionStrategy?.getPopoverInsertionPoint?.():null;return ia(b)?b.after(u):b?.type==="parent"?b.element.appendChild(u):e.getContainerElement().appendChild(u),new en(new To(g,r,n),u,g,m,n.get(Y),n.get(ac),t,n.get(lo),n.get(sc),i?.disableAnimations??n.get(wn,null,{optional:!0})==="NoopAnimations",n.get(to),s)}var mc=(()=>{class n{scrollStrategies=p(oc);_positionBuilder=p(cc);_injector=p(de);constructor(){}create(e){return tn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({providers:[mc],imports:[ue,Xe,Jr,Jr]})}return n})();function sp(n,i){}var oi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Nn=(()=>{class n extends Xi{_elementRef=p(H);_focusTrapFactory=p(wl);_config;_interactivityChecker=p(xl);_ngZone=p(Y);_focusMonitor=p(ei);_renderer=p(Me);_changeDetectorRef=p(Ue);_injector=p(de);_platform=p(Se);_document=p(ge);_portalOutlet;_focusTrapped=new j;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=p(oi,{optional:!0})||new oi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(e){this._isDestroyed||lt(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=vo(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=vo();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=vo()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&_e(We,7),t&2){let r;R(r=I())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&ne("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[tt],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&me(0,sp,0,0,"ng-template",0)},dependencies:[We],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Ln=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new j;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ti(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},lp=new T("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=p(de);return()=>ii(n)}}),cp=new T("DialogData"),dp=new T("DefaultDialogConfig");function mp(n){let i=Ce(n),e=new be;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Bn=(()=>{class n{_injector=p(de);_defaultOptions=p(dp,{optional:!0});_parentDialog=p(n,{optional:!0,skipSelf:!0});_overlayContainer=p(Lo);_idGenerator=p(Le);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new j;_afterOpenedAtThisLevel=new j;_ariaHiddenElements=new Map;_scrollStrategy=p(lp);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){}open(e,t){let o=this._defaultOptions||new oi;t=F(F({},o),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=tn(this._injector,r),s=new Ln(a,t),m=this._attachContainer(a,s,t);if(s.containerInstance=m,!this.openDialogs.length){let h=this._overlayContainer.getContainerElement();m._focusTrapped?m._focusTrapped.pipe(Ye(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(h)}):this._hideNonDialogContentFromAssistiveTechnology(h)}return this._attachDialogContent(e,s,m,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){na(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){na(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),na(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ji({positionStrategy:e.positionStrategy||ni().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:oi,useValue:o},{provide:Ln,useValue:t},{provide:en,useValue:e}],s;o.container?typeof o.container=="function"?s=o.container:(s=o.container.type,a.push(...o.container.providers(o))):s=Nn;let m=new ot(s,o.viewContainerRef,de.create({parent:r||this._injector,providers:a}));return e.attach(m).instance}_attachDialogContent(e,t,o,r){if(e instanceof En){let a=this._createInjector(r,t,o,void 0),s={$implicit:r.data,dialogRef:t};r.templateContext&&(s=F(F({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new Rt(e,null,s,a))}else{let a=this._createInjector(r,t,o,this._injector),s=o.attachComponentPortal(new ot(e,r.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,o,r){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:cp,useValue:e.data},{provide:Ln,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,o)):s.push(...e.providers)),e.direction&&(!a||!a.get(nt,null,{optional:!0}))&&s.push({provide:nt,useValue:mp(e.direction)}),de.create({parent:a||r,providers:s})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let r=t[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function na(n,i){let e=n.length;for(;e--;)i(n[e])}var oa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({providers:[Bn],imports:[vi,Xe,yo,Xe]})}return n})();function hp(n,i){}var hc="_mat-bottom-sheet-enter",pc="_mat-bottom-sheet-exit",pp=(()=>{class n extends Nn{_breakpointSubscription;_animationsDisabled=qe();_animationState="void";_animationStateChanged=new be;_destroyed=!1;constructor(){super();let e=p(bl);this._breakpointSubscription=e.observe([ui.Medium,ui.Large,ui.XLarge]).subscribe(()=>{let t=this._elementRef.nativeElement.classList;t.toggle("mat-bottom-sheet-container-medium",e.isMatched(ui.Medium)),t.toggle("mat-bottom-sheet-container-large",e.isMatched(ui.Large)),t.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(ui.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(hc))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(pc))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e),setTimeout(()=>this._handleAnimationEvent(!1,e))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,t){let o=t===hc;(o||t===pc)&&this._animationStateChanged.emit({toState:o?"visible":"hidden",phase:e?"start":"done"})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(t,o){t&1&&E("animationstart",function(a){return o._handleAnimationEvent(!0,a.animationName)})("animationend",function(a){return o._handleAnimationEvent(!1,a.animationName)})("animationcancel",function(a){return o._handleAnimationEvent(!1,a.animationName)}),t&2&&(ne("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-label",o._config.ariaLabel),W("mat-bottom-sheet-container-animations-enabled",!o._animationsDisabled)("mat-bottom-sheet-container-enter",o._animationState==="visible")("mat-bottom-sheet-container-exit",o._animationState==="hidden"))},features:[tt],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&me(0,hp,0,0,"ng-template",0)},dependencies:[We],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2})}return n})(),up=new T("MatBottomSheetData"),ra=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight},on=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new j;_result;_closeFallbackTimeout;constructor(i,e,t){this._ref=i,this.containerInstance=t,this.disableClose=e.disableClose,t._animationStateChanged.pipe(ie(o=>o.phase==="done"&&o.toState==="visible"),Ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ie(o=>o.phase==="done"&&o.toState==="hidden"),Ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),i.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),je(this.backdropClick(),this.keydownEvents().pipe(ie(o=>o.keyCode===27))).subscribe(o=>{!this.disableClose&&(o.type!=="keydown"||!ti(o))&&(o.preventDefault(),this.dismiss())})}dismiss(i){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ie(e=>e.phase==="start"),Ye(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=i,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},fp=new T("mat-bottom-sheet-default-options"),uc=(()=>{class n{_injector=p(de);_parentBottomSheet=p(n,{optional:!0,skipSelf:!0});_animationsDisabled=qe();_defaultOptions=p(fp,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=p(Bn);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(){}open(e,t){let o=F(F({},this._defaultOptions||new ra),t),r;return this._dialog.open(e,ze(F({},o),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:pp,scrollStrategy:o.scrollStrategy||ii(this._injector),positionStrategy:ni(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:r}),providers:(a,s,m)=>(r=new on(a,o,m),[{provide:on,useValue:r},{provide:up,useValue:o.data}])})),r.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===r&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>r.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):r.containerInstance.enter(),this._openedBottomSheetRef=r,r}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gc=(()=>{class n{constructor(e){this.bottomSheetRef=e}closeSheet(){this.bottomSheetRef.dismiss()}static{this.\u0275fac=function(t){return new(t||n)(L(on))}}static{this.\u0275cmp=y({type:n,selectors:[["app-bottomsheet"]],decls:9,vars:0,consts:[[1,"sheet-content"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,o){t&1&&(Q(0,"p"),d(1,"bottomsheet works!"),ee(),Q(2,"div",0)(3,"h3"),d(4,"iPhone Style Bottom Sheet"),ee(),Q(5,"p"),d(6,"This slides from bottom"),ee(),Q(7,"button",1),mi("click",function(){return o.closeSheet()}),d(8,"Confirm"),ee()())},encapsulation:2})}}return n})();var _c=(()=>{class n{transform(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=oo({name:"fUpperCase",type:n,pure:!0})}}return n})();var yc=(()=>{class n{constructor(e){this.httpClient=e}getRadioOptions(){return Ge([{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}])}static{this.\u0275fac=function(t){return new(t||n)(z(ht))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function _p(n,i){if(n&1){let e=dt();l(0,"mat-radio-button",7),E("click",function(){let o=at(e).$implicit,r=A();return st(r.toggleResidenceType(o.value))}),d(1),hi(2,"fUpperCase"),c()}if(n&2){let e=i.$implicit;N("value",e.value),f(),Fe(" ",pi(2,2,e.viewValue)," ")}}function vp(n,i){if(n&1&&(l(0,"p",4),d(1),c()),n&2){let e=A();f(),Fe("Your Residence Type is: ",e.residenceType)}}var bc=(()=>{class n{constructor(e,t){this.radioService=e,this.bottomSheet=t,this.residenceType="",this.radioOptions=[]}ngOnInit(){this.residenceType="rent",this.radioService.getRadioOptions().subscribe(e=>{console.log("Received radio options from API:",e),this.radioOptions=e.map(t=>({value:t.value,viewValue:t.label}))})}toggleResidenceType(e){this.residenceType===e?this.residenceType="":this.residenceType=e}openSheet(){this.bottomSheet.open(gc)}static{this.\u0275fac=function(t){return new(t||n)(L(yc),L(uc))}}static{this.\u0275cmp=y({type:n,selectors:[["app-radiobutton"]],decls:21,vars:2,consts:[[1,"card"],["mat-card-avatar","",1,"example-header-image"],[1,"custom-radio-group",3,"value"],["name","ResidencyType",1,"custom-radio",3,"value"],[1,"selectedvalue"],[1,"sheet-content"],["mat-raised-button","","color","accent",3,"click"],["name","ResidencyType",1,"custom-radio",3,"click","value"]],template:function(t,o){t&1&&(l(0,"mat-card",0)(1,"mat-card-header"),x(2,"div",1),l(3,"mat-card-title"),d(4,"Radio Button Demo"),c(),l(5,"mat-card-subtitle"),d(6,"Radio Button component using material ui"),c()(),l(7,"mat-card-content")(8,"label"),d(9,"Residence Type"),c(),l(10,"mat-radio-group",2),Yt(11,_p,3,4,"mat-radio-button",3,Ds),c(),O(13,vp,2,1,"p",4),l(14,"div",5)(15,"h3"),d(16,"iPhone Style Bottom Sheet"),c(),l(17,"p"),d(18,"This slides from bottom"),c(),l(19,"button",6),E("click",function(){return o.openSheet()}),d(20,` Open Bottom Sheet
`),c()()()()),t&2&&(f(10),N("value",o.residenceType),f(),Qt(o.radioOptions),f(2),D(o.residenceType?13:-1))},dependencies:[xe,De,Te,Oe,Pe,Dn,$i,Zt,_c],styles:[".card[_ngcontent-%COMP%]{display:flex}  .custom-radio-group{display:flex;gap:12px}  .custom-radio{border:1px solid #ccc;border-radius:6px;padding:10px 20px;cursor:pointer;transition:all .3s ease}  .custom-radio .mdc-radio{position:absolute;opacity:0;pointer-events:none}  .custom-radio .mdc-form-field{margin:0;width:100%}  .custom-radio.mat-mdc-radio-checked{background-color:#1976d2;color:#fff;border-color:#1976d2}  .custom-radio .mdc-label{color:#1976d2}  .custom-radio.mat-mdc-radio-checked .mdc-label{color:#fff}.selectedvalue[_ngcontent-%COMP%]{margin-top:20px;font-size:16px}"]})}}return n})();function yp(n,i){n&1&&(l(0,"section",0)(1,"div",7)(2,"div",8),d(3,"col 1 of 2"),c(),l(4,"div",8),d(5,"col 1 of 2"),c()(),l(6,"div",7)(7,"div",9),d(8,"col 1 of 3"),c(),l(9,"div",9),d(10,"col 1 of 3"),c(),l(11,"div",9),d(12,"col 1 of 3"),c()(),l(13,"div",7)(14,"div",9),d(15,"col 1 of 3"),c(),l(16,"div",10),d(17,"col 2 of 3"),c()(),l(18,"div",7)(19,"div",11),d(20,"col 1 of 4"),c(),l(21,"div",11),d(22,"col 1 of 4"),c(),l(23,"div",11),d(24,"col 1 of 4"),c(),l(25,"div",11),d(26,"col 1 of 4"),c()(),l(27,"div",7)(28,"div",11),d(29,"col 1 of 4"),c(),l(30,"div",11),d(31,"col 1 of 4"),c(),l(32,"div",12),d(33,"col 2 of 4"),c()(),l(34,"div",7)(35,"div",11),d(36,"col 1 of 4"),c(),l(37,"div",13),d(38,"col 3 of 4"),c()()())}var Cc=(()=>{class n{constructor(){this.showGrid=!1,this.showGrid=!1}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-page-not-found"]],decls:20,vars:1,consts:[[1,"grid-test"],[1,"not-found-page"],["appearance","outlined",1,"not-found-card"],["mat-card-avatar","","aria-hidden","true"],["align","end"],["mat-flat-button","","color","primary","routerLink","/home"],["aria-hidden","true"],[1,"row"],[1,"col-1-of-2"],[1,"col-1-of-3"],[1,"col-2-of-3"],[1,"col-1-of-4"],[1,"col-2-of-4"],[1,"col-3-of-4"]],template:function(t,o){t&1&&(O(0,yp,39,0,"section",0),l(1,"main",1)(2,"mat-card",2)(3,"mat-card-header")(4,"mat-icon",3),d(5,"search_off"),c(),l(6,"mat-card-title"),d(7,"Page not found"),c(),l(8,"mat-card-subtitle"),d(9,"Error 404"),c()(),l(10,"mat-card-content")(11,"p"),d(12,"The page you\u2019re looking for may have moved, been removed, or the address may be incorrect."),c(),l(13,"p"),d(14,"Check the URL, or return to the home page to explore the available applications."),c()(),l(15,"mat-card-actions",4)(16,"a",5)(17,"mat-icon",6),d(18,"home"),c(),d(19," Go to home "),c()()()()),t&2&&D(o.showGrid?0:-1)},dependencies:[Tt,we,Ie,Re,xe,Ke,$e,Pe,De,Oe,Te,Ae,Be],styles:[".not-found-page[_ngcontent-%COMP%]{display:grid;min-height:60vh;padding:clamp(1.5rem,5vw,4rem) 1rem;place-items:center}.not-found-card[_ngcontent-%COMP%]{width:min(100%,36rem);padding:.5rem}.not-found-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:1.25rem 1.5rem .75rem}.not-found-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{margin-top:.5rem;line-height:1.5}.not-found-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:0 1.5rem 1rem;color:#625d6b;line-height:1.65}.not-found-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.not-found-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{margin-top:.9rem}.not-found-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:0 1.5rem 1.25rem}@media(max-width:480px){.not-found-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:1rem 1rem .5rem}.not-found-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:0 1rem 1rem}.not-found-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:0 1rem 1rem}}"]})}}return n})();var aa=class{_box;_destroyed=new j;_resizeSubject=new j;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Lt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ie(e=>e.some(t=>t.target===i)),Tr({bufferSize:1,refCount:!0}),fe(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},xc=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=p(Y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new aa(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bp=["notch"],Cp=["matFormFieldNotchedOutline",""],xp=["*"],wc=["iconPrefixContainer"],Sc=["textPrefixContainer"],Ec=["iconSuffixContainer"],Mc=["textSuffixContainer"],wp=["textField"],Sp=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ep=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Mp(n,i){n&1&&x(0,"span",21)}function kp(n,i){if(n&1&&(l(0,"label",20),ce(1,1),O(2,Mp,1,0,"span",21),c()),n&2){let e=A(2);N("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ne("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),D(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Tp(n,i){if(n&1&&O(0,kp,3,5,"label",20),n&2){let e=A();D(e._hasFloatingLabel()?0:-1)}}function Pp(n,i){n&1&&x(0,"div",7)}function Op(n,i){}function Dp(n,i){if(n&1&&me(0,Op,0,0,"ng-template",13),n&2){A(2);let e=Kt(1);N("ngTemplateOutlet",e)}}function Rp(n,i){if(n&1&&(l(0,"div",9),O(1,Dp,1,1,null,13),c()),n&2){let e=A();N("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),D(e._forceDisplayInfixLabel()?-1:1)}}function Ip(n,i){n&1&&(l(0,"div",10,2),ce(2,2),c())}function Ap(n,i){n&1&&(l(0,"div",11,3),ce(2,3),c())}function Fp(n,i){}function Lp(n,i){if(n&1&&me(0,Fp,0,0,"ng-template",13),n&2){A();let e=Kt(1);N("ngTemplateOutlet",e)}}function Np(n,i){n&1&&(l(0,"div",14,4),ce(2,4),c())}function Bp(n,i){n&1&&(l(0,"div",15,5),ce(2,5),c())}function zp(n,i){n&1&&x(0,"div",16)}function Vp(n,i){n&1&&(l(0,"div",18),ce(1,6),c())}function jp(n,i){if(n&1&&(l(0,"mat-hint",22),d(1),c()),n&2){let e=A(2);N("id",e._hintLabelId),f(),V(e.hintLabel)}}function Hp(n,i){if(n&1&&(l(0,"div",19),O(1,jp,2,2,"mat-hint",22),ce(2,7),x(3,"div",23),ce(4,8),c()),n&2){let e=A();f(),D(e.hintLabel?1:-1)}}var It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["mat-label"]]})}return n})(),Up=new T("MatError");var zo=(()=>{class n{align="start";id=p(Le).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(Bt("id",o.id),ne("align",null),W("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),qp=new T("MatPrefix");var Wp=new T("MatSuffix");var Ic=new T("FloatingLabelParent"),kc=(()=>{class n{_elementRef=p(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p(xc);_ngZone=p(Y);_parent=p(Ic);_resizeSubscription=new Ti;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Gp(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&W("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Gp(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Tc="mdc-line-ripple--active",Bo="mdc-line-ripple--deactivating",Pc=(()=>{class n{_elementRef=p(H);_cleanupTransitionEnd;constructor(){let e=p(Y),t=p(Me);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Bo),e.add(Tc)}deactivate(){this._elementRef.nativeElement.classList.add(Bo)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(Bo);e.propertyName==="opacity"&&o&&t.remove(Tc,Bo)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Oc=(()=>{class n{_elementRef=p(H);_ngZone=p(Y);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&_e(bp,5),t&2){let r;R(r=I())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&W("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Cp,ngContentSelectors:xp,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(He(),yt(0,"div",1),Q(1,"div",2,0),ce(3),ee(),yt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),sa=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n})}return n})();var la=new T("MatFormField"),Yp=new T("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Dc="fill",Qp="auto",Rc="fixed",Kp="translateY(-50%)",Ht=(()=>{class n{_elementRef=p(H);_changeDetectorRef=p(Ue);_platform=p(Se);_idGenerator=p(Le);_ngZone=p(Y);_defaults=p(Yp,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Mn("iconPrefixContainer");_textPrefixContainerSignal=Mn("textPrefixContainer");_iconSuffixContainerSignal=Mn("iconSuffixContainer");_textSuffixContainerSignal=Mn("textSuffixContainer");_prefixSuffixContainers=ao(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=js(It);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=jt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Qp}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Dc;this._appearanceSignal.set(t)}_appearanceSignal=Ce(Dc);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Rc}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Rc}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new j;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=qe();constructor(){let e=this._defaults,t=p(nt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),xn(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ao(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(gt([void 0,void 0]),Ve(()=>[t.errorState,t.userAriaDescribedBy]),kr(),ie(([[r,a],[s,m]])=>r!==s||a!==m)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(fe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),je(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Hs({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ao(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,m=o?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,g=this._currentDirection==="rtl"?"-1":"1",u=`${a+s}px`,C=`calc(${g} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${Kp} translateX(${C}))`,v=a+s+m+h;return[_,v]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(Is(r,o._labelChild,It,5),zt(r,sa,5)(r,qp,5)(r,Wp,5)(r,Up,5)(r,zo,5)),t&2){Ir();let a;R(a=I())&&(o._formFieldControl=a.first),R(a=I())&&(o._prefixChildren=a),R(a=I())&&(o._suffixChildren=a),R(a=I())&&(o._errorChildren=a),R(a=I())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(As(o._iconPrefixContainerSignal,wc,5)(o._textPrefixContainerSignal,Sc,5)(o._iconSuffixContainerSignal,Ec,5)(o._textSuffixContainerSignal,Mc,5),_e(wp,5)(wc,5)(Sc,5)(Ec,5)(Mc,5)(kc,5)(Oc,5)(Pc,5)),t&2){Ir(4);let r;R(r=I())&&(o._textField=r.first),R(r=I())&&(o._iconPrefixContainer=r.first),R(r=I())&&(o._textPrefixContainer=r.first),R(r=I())&&(o._iconSuffixContainer=r.first),R(r=I())&&(o._textSuffixContainer=r.first),R(r=I())&&(o._floatingLabel=r.first),R(r=I())&&(o._notchedOutline=r.first),R(r=I())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&W("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[bt([{provide:la,useExisting:n},{provide:Ic,useExisting:n}])],ngContentSelectors:Ep,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(He(Sp),me(0,Tp,1,1,"ng-template",null,0,mt),l(2,"div",6,1),E("click",function(a){return o._control.onContainerClick(a)}),O(4,Pp,1,0,"div",7),l(5,"div",8),O(6,Rp,2,2,"div",9),O(7,Ip,3,0,"div",10),O(8,Ap,3,0,"div",11),l(9,"div",12),O(10,Lp,1,1,null,13),ce(11),c(),O(12,Np,3,0,"div",14),O(13,Bp,3,0,"div",15),c(),O(14,zp,1,0,"div",16),c(),l(15,"div",17),O(16,Vp,2,0,"div",18)(17,Hp,5,1,"div",19),c()),t&2){let r;f(2),W("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),f(2),D(!o._hasOutline()&&!o._control.disabled?4:-1),f(2),D(o._hasOutline()?6:-1),f(),D(o._hasIconPrefix?7:-1),f(),D(o._hasTextPrefix?8:-1),f(2),D(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),f(2),D(o._hasTextSuffix?12:-1),f(),D(o._hasIconSuffix?13:-1),f(),D(o._hasOutline()?-1:14),f(),W("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();f(),D((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[kc,Oc,co,Pc,zo],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[Cl,Ht,ue]})}return n})();var Jp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),eu={passive:!0},Ac=(()=>{class n{_platform=p(Se);_ngZone=p(Y);_renderer=p(vt).createRenderer(null,null);_styleLoader=p(Ot);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Xn;this._styleLoader.load(Jp);let t=kn(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new j,a="cdk-text-field-autofilled",s=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},m=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,eu)));return this._monitoredElements.set(t,{subject:r,unlisten:m}),r}stopMonitoring(e){let t=kn(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({})}return n})();var Lc=new T("MAT_INPUT_VALUE_ACCESSOR");var Vo=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var jo=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,o,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var tu=["button","checkbox","file","hidden","image","radio","range","reset","submit"],iu=new T("MAT_INPUT_CONFIG"),rn=(()=>{class n{_elementRef=p(H);_platform=p(Se);ngControl=p(ul,{optional:!0,self:!0});_autofillMonitor=p(Ac);_ngZone=p(Y);_formField=p(la,{optional:!0});_renderer=p(Me);_uid=p(Le).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=p(iu,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new j;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=jt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(pl.required)??!1}set required(e){this._required=jt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&qr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=jt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>qr().has(e));constructor(){let e=p(fl,{optional:!0}),t=p(gl,{optional:!0}),o=p(Vo),r=p(Lc,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();r?Os(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new jo(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&xn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){tu.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&E("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(Bt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),ne("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),W("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},exportAs:["matInput"],features:[bt([{provide:sa,useExisting:n}]),Nt]})}return n})(),an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[Ut,Ut,Fc,ue]})}return n})();var Ho=(()=>{class n{constructor(e){this.platformId=e,console.log("AdobeserviceService initialized with platformId:",this.platformId)}push(e){ho(this.platformId)&&(window.AdobeDC=window.AdobeDC||[],window.AdobeDC.push(e))}trackEvent(e,t){this.push({event:e,data:t})}static{this.\u0275fac=function(t){return new(t||n)(z(no))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Bc=(()=>{class n{constructor(e,t){this.el=e,this.adobeservice=t,this.fieldName=""}onFocus(){console.log("Input field focused directive",this.el.nativeElement.value);let e={field:this.fieldName||this.el.nativeElement.name,value:this.el.nativeElement.value};this.adobeservice.trackEvent(this.fieldName,e)}static{this.\u0275fac=function(t){return new(t||n)(L(H),L(Ho))}}static{this.\u0275dir=te({type:n,selectors:[["","appAdobeDirective",""]],hostBindings:function(t,o){t&1&&E("focus",function(){return o.onFocus()})},inputs:{fieldName:"fieldName"}})}}return n})();var Vc=(()=>{class n{constructor(){this.name="",this.cdata=Vs(""),this.pout=zs(),this.pdata=new be,this.childData=""}onInputChange(e){console.log("input value in child component ===> ",this.childData),this.pdata.emit(this.childData),this.pout.emit(this.childData)}onFocused(e){console.log("input field focused in child component ===> ",this.childData)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-child"]],inputs:{name:"name",cdata:[1,"cdata"]},outputs:{pout:"pout",pdata:"pdata"},decls:22,vars:4,consts:[[1,"component-container"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Enter some information","fieldName","adobeChildInput","appAdobeDirective","",3,"ngModelChange","input","ngModel"],[1,"input-value-summary"],[1,"field-input-value"],[1,"data-passed-container"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"h2"),d(2,"Child Component"),c(),l(3,"fieldset"),x(4,"legend"),l(5,"mat-form-field",1)(6,"mat-label"),d(7,"Enter some information"),c(),l(8,"input",2),Fi("ngModelChange",function(a){return Ai(o.childData,a)||(o.childData=a),a}),E("input",function(a){return o.onInputChange(a)}),c()()(),l(9,"p",3),d(10," Input field value in the child component: "),l(11,"span",4),d(12),c()(),l(13,"div",5)(14,"p"),d(15,"Data passed from parent : "),l(16,"span",4),d(17),c()(),l(18,"p"),d(19,"Data passed from parent using input() : "),l(20,"span",4),d(21),c()()()()),t&2&&(f(8),Ii("ngModel",o.childData),f(4),V(o.childData),f(5),V(o.name),f(4),V(o.cdata()))},dependencies:[Zt,Bi,zi,Vi,Bc,an,rn,Ht,It,Ut,go,Ui],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})}}return n})();var jc=(()=>{class n{constructor(){this.inputValue="",this.childData="",this.ppData=""}onInputChange(){console.log("input value in parent component ===> ",this.inputValue)}onChildDataReceived(e){console.log("data received from child component ===> ",e),this.childData=e}onChildOutputReceived(e){console.log("output received from child component ===> ",e),this.ppData=e}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-parent"]],decls:24,vars:6,consts:[[1,"parent-container"],[1,"component-container"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Enter some information",3,"ngModelChange","input","ngModel"],[1,"input-value-summary"],[1,"field-input-value"],[1,"data-passed-container"],[3,"pdata","pout","name","cdata"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),d(3,"Parent Component"),c(),l(4,"fieldset"),x(5,"legend"),l(6,"mat-form-field",2)(7,"mat-label"),d(8,"Enter some information"),c(),l(9,"input",3),Fi("ngModelChange",function(a){return Ai(o.inputValue,a)||(o.inputValue=a),a}),E("input",function(){return o.onInputChange()}),c()()(),l(10,"p",4),d(11," Input field value in the parent component : "),l(12,"span",5),d(13),c()(),l(14,"div",6)(15,"p"),d(16,"Data passed to parent from child : "),l(17,"span",5),d(18),c()(),l(19,"p"),d(20,"Data passed to parent using child output() : "),l(21,"span",5),d(22),c()()()(),l(23,"app-child",7),E("pdata",function(a){return o.onChildDataReceived(a)})("pout",function(a){return o.onChildOutputReceived(a)}),c()()),t&2&&(f(9),Ii("ngModel",o.inputValue),f(4),V(o.inputValue),f(5),V(o.childData),f(4),V(o.ppData),f(),N("name",o.inputValue)("cdata",o.inputValue))},dependencies:[Vc,Zt,Bi,zi,Vi,an,rn,Ht,It,Ut,go,Ui],styles:[".parent-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1.5rem;gap:1.5rem}.input-value-summary[_ngcontent-%COMP%]{margin-bottom:1.5rem}.item-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1.5rem}"]})}}return n})();var bi=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-modalpage-child"]],decls:5,vars:0,consts:[[1,"modal-child"]],template:function(t,o){t&1&&(Q(0,"div",0)(1,"h3"),d(2,"Modal child content"),ee(),Q(3,"p"),d(4,"This component is rendered inside the modal page using Angular CDK portals."),ee()())},encapsulation:2})}}return n})();var nu=["tooltip"],ou=20;var ru=new T("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=p(de);return()=>Fo(n,{scrollThrottle:ou})}}),au=new T("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Hc="tooltip-panel",su={passive:!0},lu=8,cu=8,du=24,mu=200,da=(()=>{class n{_elementRef=p(H);_ngZone=p(Y);_platform=p(Se);_ariaDescriber=p(El);_focusMonitor=p(ei);_dir=p(nt);_injector=p(de);_viewContainerRef=p(ct);_mediaMatcher=p(yl);_document=p(ge);_renderer=p(Me);_animationsDisabled=qe();_defaultOptions=p(au,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Uc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=jt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=jt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Jt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Jt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new j;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=lu}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(fe(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let o=this._createOverlay(t);this._detach(),this._portal=this._portal||new ot(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=o.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(fe(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof H)return this._overlayRef;this._detach()}let t=this._injector.get(gi).getAncestorScrollContainers(this._elementRef),o=`${this._cssClassPrefix}-${Hc}`,r=No(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(fe(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=tn(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,o]:o,scrollStrategy:this._injector.get(ru)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(fe(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(fe(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(fe(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(fe(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,o=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(F(F({},o.main),r.main)),this._addOffset(F(F({},o.fallback),r.fallback))])}_addOffset(e){let t=cu,o=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=o?-t:t:e.originX==="end"&&(e.offsetX=o?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"||t=="below"?o={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={originX:"end",originY:"center"});let{x:r,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:r,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,o;t=="above"?o={overlayX:"center",overlayY:"bottom"}:t=="below"?o={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?o={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(o={overlayX:"start",overlayY:"center"});let{x:r,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:r,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),lt(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:o,originY:r}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=t==="bottom"&&r==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let m=`${this._cssClassPrefix}-${Hc}-`;s.removePanelClass(m+this._currentPosition),s.addPanelClass(m+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],o=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,o)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),o=this._elementRef.nativeElement;t!==o&&!o.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,su))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,o=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(e==="on"||!t.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||lt({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ti(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,o){t&2&&W("mat-mdc-tooltip-disabled",o.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Uc=(()=>{class n{_changeDetectorRef=p(Ue);_elementRef=p(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=qe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new j;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>du&&e.width>=mu}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,o=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:o),t.classList.add(e?o:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,o){if(t&1&&_e(nu,7),t&2){let r;R(r=I())&&(o._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,o){t&1&&E("mouseleave",function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,o){t&1&&(Q(0,"div",1,0),mi("animationend",function(a){return o._handleAnimationEnd(a)}),Q(2,"div",2),d(3),ee()()),t&2&&(Et(o.tooltipClass),W("mdc-tooltip--multiline",o._isMultiline),f(3),V(o.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return n})();var Uo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[yo,vi,ue,An]})}return n})();var qc=(()=>{class n{constructor(){this.label="Input",this.placeholder="",this.tooltipText="This is a tooltip",this.tooltipPosition="above"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-input-with-tooltip"]],inputs:{label:"label",placeholder:"placeholder",tooltipText:"tooltipText",tooltipPosition:"tooltipPosition"},decls:4,vars:4,consts:[[1,"full-width"],["matInput","",3,"placeholder","matTooltip","matTooltipPosition"]],template:function(t,o){t&1&&(l(0,"mat-form-field",0)(1,"mat-label"),d(2),c(),x(3,"input",1),c()),t&2&&(f(2),V(o.label),f(),N("placeholder",o.placeholder)("matTooltip",o.tooltipText)("matTooltipPosition",o.tooltipPosition))},dependencies:[Ut,Ht,It,an,rn,Uo,da],encapsulation:2})}}return n})();var pu=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],uu=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function fu(n,i){n&1&&(l(0,"span",3),ce(1,1),c())}function gu(n,i){n&1&&(l(0,"span",6),ce(1,2),c())}var _u=["*"];var vu=new T("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Wc=new T("MatChipAvatar"),Gc=new T("MatChipTrailingIcon"),Yc=new T("MatChipEdit"),Qc=new T("MatChipRemove"),$c=new T("MatChip"),Xc=(()=>{class n{_elementRef=p(H);_parentChip=p($c);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){p(Ot).load(Tn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,o){t&2&&(ne("disabled",o._getDisabledAttribute())("aria-disabled",o.disabled),W("mdc-evolution-chip__action--primary",o._isPrimary)("mdc-evolution-chip__action--secondary",!o._isPrimary)("mdc-evolution-chip__action--trailing",!o._isPrimary&&!o._isLeading))},inputs:{disabled:[2,"disabled","disabled",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:it(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),yu=(()=>{class n extends Xc{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275dir=te({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,o){t&1&&E("click",function(a){return o._handleClick(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(ne("tabindex",o._getTabindex()),W("mdc-evolution-chip__action--presentational",!1))},features:[tt]})}return n})();var ma=(()=>{class n{_changeDetectorRef=p(Ue);_elementRef=p(H);_tagName=p(Bs);_ngZone=p(Y);_focusMonitor=p(ei);_globalRippleOptions=p(kl,{optional:!0});_document=p(ge);_onFocus=new j;_onBlur=new j;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qe();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(Le).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new be;destroyed=new be;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(Pl);_injector=p(de);constructor(){let e=p(Ot);e.load(Tn),e.load(vl),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=je(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let o=t._elementRef.nativeElement;return o===e||o.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,o,r){if(t&1&&zt(r,Wc,5)(r,Yc,5)(r,Gc,5)(r,Qc,5)(r,Wc,5)(r,Gc,5)(r,Yc,5)(r,Qc,5),t&2){let a;R(a=I())&&(o.leadingIcon=a.first),R(a=I())&&(o.editIcon=a.first),R(a=I())&&(o.trailingIcon=a.first),R(a=I())&&(o.removeIcon=a.first),R(a=I())&&(o._allLeadingIcons=a),R(a=I())&&(o._allTrailingIcons=a),R(a=I())&&(o._allEditIcons=a),R(a=I())&&(o._allRemoveIcons=a)}},viewQuery:function(t,o){if(t&1&&_e(yu,5),t&2){let r;R(r=I())&&(o.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,o){t&1&&E("keydown",function(a){return o._handleKeydown(a)}),t&2&&(Bt("id",o.id),ne("role",o.role)("aria-label",o.ariaLabel),Et("mat-"+(o.color||"primary")),W("mdc-evolution-chip",!o._isBasicChip)("mdc-evolution-chip--disabled",o.disabled)("mdc-evolution-chip--with-trailing-action",o._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",o.leadingIcon)("mdc-evolution-chip--with-primary-icon",o.leadingIcon)("mdc-evolution-chip--with-avatar",o.leadingIcon)("mat-mdc-chip-with-avatar",o.leadingIcon)("mat-mdc-chip-highlighted",o.highlighted)("mat-mdc-chip-disabled",o.disabled)("mat-mdc-basic-chip",o._isBasicChip)("mat-mdc-standard-chip",!o._isBasicChip)("mat-mdc-chip-with-trailing-icon",o._hasTrailingIcon())("_mat-animation-noopable",o._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",ve],highlighted:[2,"highlighted","highlighted",ve],disableRipple:[2,"disableRipple","disableRipple",ve],disabled:[2,"disabled","disabled",ve]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[bt([{provide:$c,useExisting:n}])],ngContentSelectors:uu,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,o){t&1&&(He(pu),x(0,"span",0),l(1,"span",1)(2,"span",2),O(3,fu,2,0,"span",3),l(4,"span",4),ce(5),x(6,"span",5),c()()(),O(7,gu,2,0,"span",6)),t&2&&(f(3),D(o.leadingIcon?3:-1),f(4),D(o._hasTrailingIcon()?7:-1))},dependencies:[Xc],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Zc=(()=>{class n{_elementRef=p(H);_changeDetectorRef=p(Ue);_dir=p(nt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new j;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Es;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(gt(null),Oi(()=>je(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(gt(this._chips)).subscribe(e=>{let t=[];e.forEach(o=>o._getActions().forEach(r=>t.push(r))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Sl(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(fe(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(fe(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(gt(null),fe(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(fe(this._destroyed)).subscribe(e=>{let o=this._chips.toArray().indexOf(e.chip),r=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=r||a;this._isValidIndex(o)&&s&&(this._lastDestroyedFocusedChipIndex=o)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,o,r){if(t&1&&zt(r,ma,5),t&2){let a;R(a=I())&&(o._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,o){t&1&&E("keydown",function(a){return o._handleKeydown(a)}),t&2&&ne("role",o.role)},inputs:{disabled:[2,"disabled","disabled",ve],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:it(e)]},ngContentSelectors:_u,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,o){t&1&&(He(),Q(0,"div",0),ce(1),ee())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Jc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({providers:[Vo,{provide:vu,useValue:{separatorKeyCodes:[13]}}],imports:[xo,ue]})}return n})();var sn=(()=>{class n{setModal(e){this.modal=e,this.pendingAction&&(this.pendingAction(),this.pendingAction=void 0)}show(e){this.modal?this.modal.show(e):this.pendingAction=()=>this.modal?.show(e)}openComponent(e,t){this.modal?this.modal.openComponent(e,t):this.pendingAction=()=>this.modal?.openComponent(e,t)}close(){this.modal?.close()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Cu(n,i){}var Wo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},pa="mdc-dialog--open",ed="mdc-dialog--opening",td="mdc-dialog--closing",xu=150,wu=75,Su=(()=>{class n extends Nn{_animationStateChanged=new be;_animationsEnabled=!qe();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?nd(this._config.enterAnimationDuration)??xu:0;_exitAnimationDuration=this._animationsEnabled?nd(this._config.exitAnimationDuration)??wu:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(id,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ed,pa)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(pa),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(pa),this._animationsEnabled?(this._hostElement.style.setProperty(id,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(td)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ed,td)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,o){t&2&&(Bt("id",o._config.id),ne("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),W("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[tt],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1),me(2,Cu,0,0,"ng-template",2),c()())},dependencies:[We],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return n})(),id="--mat-dialog-transition-duration";function nd(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Jt(n.substring(0,n.length-2)):n.endsWith("s")?Jt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var qo=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(qo||{}),Ci=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new yn(1);_beforeClosed=new yn(1);_result;_closeFallbackTimeout;_state=qo.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ie(o=>o.state==="opened"),Ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ie(o=>o.state==="closed"),Ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),je(this.backdropClick(),this.keydownEvents().pipe(ie(o=>o.keyCode===27&&!this.disableClose&&!ti(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),od(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(ie(t=>t.state==="closing"),Ye(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=qo.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=qo.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function od(n,i,e){return n._closeInteractionType=i,n.close(e)}var ua=new T("MatMdcDialogData"),Eu=new T("mat-mdc-dialog-default-options"),Mu=new T("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=p(de);return()=>ii(n)}}),zn=(()=>{class n{_defaultOptions=p(Eu,{optional:!0});_scrollStrategy=p(Mu);_parentDialog=p(n,{optional:!0,skipSelf:!0});_idGenerator=p(Le);_injector=p(de);_dialog=p(Bn);_animationsDisabled=qe();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new j;_afterOpenedAtThisLevel=new j;dialogConfigClass=Wo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Zn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(gt(void 0)));constructor(){this._dialogRefConstructor=Ci,this._dialogContainerType=Su,this._dialogDataToken=ua}open(e,t){let o;t=F(F({},this._defaultOptions||new Wo),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,ze(F({},t),{positionStrategy:ni(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:oi,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(a,s,m)=>(o=new this._dialogRefConstructor(a,t,m),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),rd=(()=>{class n{dialogRef=p(Ci,{optional:!0});_elementRef=p(H);_dialog=p(zn);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=dd(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){od(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,o){t&1&&E("click",function(a){return o._onButtonClick(a)}),t&2&&ne("aria-label",o.ariaLabel||null)("type",o.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Nt]})}return n})(),ad=(()=>{class n{_dialogRef=p(Ci,{optional:!0});_elementRef=p(H);_dialog=p(zn);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=dd(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n})}return n})(),sd=(()=>{class n extends ad{id=p(Le).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275dir=te({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,o){t&2&&Bt("id",o.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[tt]})}return n})(),ld=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ps([Zr])]})}return n})(),cd=(()=>{class n extends ad{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})();static \u0275dir=te({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,o){t&2&&W("mat-mdc-dialog-actions-align-start",o.align==="start")("mat-mdc-dialog-actions-align-center",o.align==="center")("mat-mdc-dialog-actions-align-end",o.align==="end")},inputs:{align:"align"},features:[tt]})}return n})();function dd(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var md=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({providers:[zn],imports:[oa,vi,Xe,ue]})}return n})();var Tu=["dynamicContent"];function Pu(n,i){}var Go=(()=>{class n{constructor(){this.dialogRef=p(Ci),this.data=p(ua)}ngAfterViewInit(){if(this.data.component){this.dynamicContent.clear();let e=this.dynamicContent.createComponent(this.data.component),t=this.data.componentInputs??{},o=e.instance;Object.assign(o,t)}}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-dialogbox"]],viewQuery:function(t,o){if(t&1&&_e(Tu,7,ct),t&2){let r;R(r=I())&&(o.dynamicContent=r.first)}},decls:12,vars:7,consts:[["dynamicContent",""],["mat-dialog-title",""],[3,"hidden"],["align","end"],["mat-button","",3,"mat-dialog-close"],["mat-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(t,o){t&1&&(l(0,"h2",1),d(1),c(),l(2,"mat-dialog-content"),me(3,Pu,0,0,"ng-template",null,0,mt),l(5,"div",2),d(6),c()(),l(7,"mat-dialog-actions",3)(8,"button",4),d(9),c(),l(10,"button",5),d(11),c()()),t&2&&(f(),V(o.data.title||"Confirm"),f(4),N("hidden",o.data.component),f(),Fe(" ",o.data.message||"Are you sure you want to continue?"," "),f(2),N("mat-dialog-close",!1),f(),V(o.data.cancelText||"Cancel"),f(),N("mat-dialog-close",!0),f(),Fe(" ",o.data.confirmText||"Ok"," "))},dependencies:[we,Ie,cd,rd,sd,ld],encapsulation:2,changeDetection:0})}}return n})();var hd=(()=>{class n{constructor(e){this.dialog=e}showDialog(e){let t=this.dialog.open(Go,{width:e.width||"400px",data:F({title:e.title||"Confirm",message:e.message||"",confirmText:e.confirmText||"Ok",cancelText:e.cancelText||"Cancel",component:e.component,componentInputs:e.componentInputs},e.data),disableClose:e.disableClose??!1,hasBackdrop:e.hasBackdrop??!0});return this.lastDialogRef=t,t}closeDialog(e){this.lastDialogRef&&(this.lastDialogRef.close(e),this.lastDialogRef=void 0)}static{this.\u0275fac=function(t){return new(t||n)(z(zn))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Du=(n,i)=>i.route;function Ru(n,i){if(n&1&&(l(0,"p",25),d(1),c()),n&2){let e=A();W("logout-notice-warning",e.logoutWarning),f(),V(i)}}function Iu(n,i){if(n&1&&(l(0,"mat-card",13)(1,"mat-card-header")(2,"mat-icon",18),d(3),c(),l(4,"mat-card-title"),d(5),c(),l(6,"mat-card-subtitle"),d(7),c()(),l(8,"mat-card-content")(9,"p"),d(10),c()(),l(11,"mat-card-actions",19)(12,"a",26),d(13," Open "),l(14,"mat-icon",27),d(15,"arrow_forward"),c()()()()),n&2){let e=i.$implicit;f(3),V(e.icon),f(2),V(e.title),f(2),V(e.category),f(3),V(e.description),f(2),N("routerLink",e.route),ne("aria-label","Open "+e.title)}}var pd=(()=>{class n{constructor(e,t,o,r){this.titleService=e,this.modalpageService=t,this.dialogService=o,this.platformId=r,this.logoutStatus=p(Xt).snapshot.queryParamMap.get("logout"),this.logoutNotice=this.logoutStatus==="complete"?"You are signed out of this application.":this.logoutStatus==="unverified"?"You are signed out of this app. Zitadel returned a success response, but it was unsigned, so the remote sign-out could not be verified.":this.logoutStatus==="local"?"Your app session has been cleared. Zitadel did not return a verifiable logout confirmation, so its session may still be active.":null,this.logoutWarning=["local","unverified"].includes(this.logoutStatus??""),this.applications=[{title:"CSS Course App",category:"Learning",description:"Explore CSS lessons and examples.",route:"/csscourseapp",icon:"school"},{title:"User App",category:"Application",description:"Browse and manage user information.",route:"/user",icon:"group"},{title:"Counter App",category:"Demo",description:"A simple app demonstrating interactive state.",route:"/counter",icon:"exposure_plus_1"},{title:"Lifecycle Methods",category:"Angular",description:"Explore component lifecycle behavior.",route:"/lifecycleMethods",icon:"autorenew"},{title:"Card Application",category:"Material",description:"See a card-based Material example.",route:"/app",icon:"credit_card"},{title:"Books List",category:"Data",description:"Browse the books list example.",route:"/bookslist",icon:"menu_book"},{title:"Radio Button",category:"Material",description:"Try a radio-option selection example.",route:"/radiooptionselector",icon:"radio_button_checked"},{title:"Radio Button Demo",category:"Material",description:"Explore the radio button selector demo.",route:"/radiobuttondemo",icon:"radio_button_checked"},{title:"Dialog Demo",category:"Material",description:"Open the generic Material dialog example.",route:"/dialogdemo",icon:"forum"},{title:"Onboarding Application",category:"Application",description:"Walk through the onboarding experience.",route:"/onboarding",icon:"how_to_reg"},{title:"Portal Example",category:"Angular",description:"Explore content rendered through a portal.",route:"/portalexample",icon:"dashboard_customize"},{title:"Modal Page",category:"Components",description:"Open the modal page example.",route:"/modalpage",icon:"open_in_new"},{title:"Oauth Application Example",category:"Oauth",description:"Explore the Oauth application example using zitadel.",route:"/oauth",icon:"lock"},{title:"SAML Sign-in",category:"Authentication",description:"Sign in with Zitadel using SAML and view your verified profile.",route:"/saml",icon:"verified_user"}],e.setTitle("Home"),ho(this.platformId)&&(window.modalpageService=t,window.dialogService=o)}openModal(){this.modalpageService.openComponent(bi,"Modal Page Example")}openDialog(){this.dialogService.showDialog({title:"Dynamic Dialog Shell",component:bi,componentInputs:{},width:"500px",hasBackdrop:!1}).afterClosed().subscribe(e=>{console.log("Dialog closed with:",e)})}static{this.\u0275fac=function(t){return new(t||n)(L(kt),L(sn),L(hd),L(no))}}static{this.\u0275cmp=y({type:n,selectors:[["app-home"]],decls:71,vars:2,consts:[[1,"home-page"],["role","status",1,"logout-notice",3,"logout-notice-warning"],["appearance","outlined","aria-labelledby","home-title",1,"home-hero"],[1,"home-hero-content"],[1,"home-eyebrow"],["id","home-title"],[1,"home-intro"],["aria-hidden","true",1,"hero-icon"],["aria-labelledby","apps-title"],[1,"section-heading"],["id","apps-title"],["aria-label","Application count"],[1,"application-grid"],["appearance","outlined",1,"application-card"],["aria-labelledby","tools-title",1,"tools-section"],["id","tools-title"],[1,"tools-grid"],["appearance","outlined"],["mat-card-avatar","","aria-hidden","true"],["align","end"],["mat-button","","type","button",3,"click"],["mat-flat-button","","color","primary","type","button",3,"click"],["label","Username","placeholder","Enter your username","tooltipText","This is a tooltip for the username field","tooltipPosition","above"],["appearance","outlined",1,"data-demo-card"],["name","passing data from home"],["role","status",1,"logout-notice"],["mat-button","",3,"routerLink"],["aria-hidden","true"]],template:function(t,o){if(t&1&&(l(0,"div",0),O(1,Ru,2,3,"p",1),l(2,"mat-card",2)(3,"mat-card-content",3)(4,"div")(5,"p",4),d(6,"WELCOME TO YOUR WORKSPACE"),c(),l(7,"h1",5),d(8,"Explore the applications"),c(),l(9,"p",6),d(10," A collection of Angular examples and tools. Choose an application to get started. "),c()(),l(11,"mat-icon",7),d(12,"dashboard"),c()()(),l(13,"section",8)(14,"div",9)(15,"div")(16,"h2",10),d(17,"Applications"),c(),l(18,"p"),d(19,"Browse the demos and features available in this workspace."),c()(),l(20,"mat-chip-set",11)(21,"mat-chip"),d(22),c()()(),l(23,"div",12),Yt(24,Iu,16,6,"mat-card",13,Du),c()(),l(26,"section",14)(27,"div",9)(28,"div")(29,"h2",15),d(30,"Component playground"),c(),l(31,"p"),d(32,"Try the interactive components and dialog examples."),c()()(),l(33,"div",16)(34,"mat-card",17)(35,"mat-card-header")(36,"mat-icon",18),d(37,"touch_app"),c(),l(38,"mat-card-title"),d(39,"Modal and dialog"),c(),l(40,"mat-card-subtitle"),d(41,"Open a component in a modal or dialog."),c()(),l(42,"mat-card-content")(43,"p"),d(44,"Click the buttons below to open a modal or dialog."),c()(),l(45,"mat-card-footer")(46,"mat-card-actions",19)(47,"button",20),E("click",function(){return o.openModal()}),d(48,"Open modal"),c(),l(49,"button",21),E("click",function(){return o.openDialog()}),d(50,"Open dialog"),c()()()(),l(51,"mat-card",17)(52,"mat-card-header")(53,"mat-icon",18),d(54,"tune"),c(),l(55,"mat-card-title"),d(56,"Input with tooltip"),c(),l(57,"mat-card-subtitle"),d(58,"Try the Material input and tooltip behavior."),c()(),l(59,"mat-card-content"),x(60,"app-input-with-tooltip",22),c()()()(),l(61,"mat-card",23)(62,"mat-card-header")(63,"mat-icon",18),d(64,"account_tree"),c(),l(65,"mat-card-title"),d(66,"Component data flow"),c(),l(67,"mat-card-subtitle"),d(68,"Parent and child component interaction demo."),c()(),l(69,"mat-card-content"),x(70,"app-parent",24),c()()()),t&2){let r;f(),D((r=o.logoutNotice)?1:-1,r),f(21),Fe("",o.applications.length," apps"),f(2),Qt(o.applications)}},dependencies:[Tt,jc,qc,we,Ie,Re,xe,Ke,$e,Pe,_l,De,Oe,Te,Jc,ma,Zc,Ae,Be],styles:[".home-page[_ngcontent-%COMP%]{display:grid;gap:2.5rem;width:min(100% - 2rem,76rem);margin:0 auto;padding:clamp(1.5rem,4vw,3rem) 0}.logout-notice[_ngcontent-%COMP%]{margin:0;padding:1rem 1.25rem;border:1px solid #b7dfc3;border-radius:.75rem;background:#edf8f0;color:#1d5e32;line-height:1.5}.logout-notice-warning[_ngcontent-%COMP%]{border-color:#f0c36d;background:#fff4e5;color:#8a4b08}.home-hero[_ngcontent-%COMP%]{border-radius:1.5rem;color:#fff;background:linear-gradient(125deg,#302052,#6543b4)}.home-hero-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:clamp(1.5rem,4vw,3rem)}.home-eyebrow[_ngcontent-%COMP%]{margin:0 0 .75rem;color:#e2d8fa;font-size:.75rem;font-weight:700;letter-spacing:.12em}.home-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:clamp(2rem,5vw,3.5rem);line-height:1.1}.home-intro[_ngcontent-%COMP%]{max-width:42rem;margin:1rem 0 0;color:#f0ebfa;font-size:1.05rem;line-height:1.6}.hero-icon[_ngcontent-%COMP%]{width:clamp(3rem,8vw,5rem);height:clamp(3rem,8vw,5rem);color:#e2d8fa;font-size:clamp(3rem,8vw,5rem)}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1rem}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.4rem,3vw,1.8rem)}.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:#625d6b}.application-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.application-card[_ngcontent-%COMP%]{display:flex;min-height:14rem;flex-direction:column}.application-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .data-demo-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:1.25rem 1.25rem 0}.application-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%], .data-demo-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{margin-top:.5rem;line-height:1.5}.application-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1;padding:1rem 1.25rem .75rem;color:#625d6b;line-height:1.6}.application-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:0 1.25rem 1.25rem}.tools-section[_ngcontent-%COMP%]{display:grid;gap:.5rem}.tools-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.tools-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], .data-demo-card[_ngcontent-%COMP%]{min-width:0}.tools-grid[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.25rem}.data-demo-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.25rem;overflow-wrap:anywhere}@media(max-width:900px){.application-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.home-page[_ngcontent-%COMP%]{width:min(100% - 1.5rem,76rem);gap:2rem}.home-hero[_ngcontent-%COMP%]{border-radius:1rem}.home-hero-content[_ngcontent-%COMP%]{align-items:flex-start;padding:1.5rem}.application-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%], .data-demo-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:1rem 1rem 0}.application-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%], .data-demo-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding-inline:1rem}.application-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%], .tools-grid[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:0 1rem 1rem}.hero-icon[_ngcontent-%COMP%]{flex:0 0 2.5rem}.tools-grid[_ngcontent-%COMP%], .application-grid[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr)}.section-heading[_ngcontent-%COMP%]{align-items:flex-start}}@media(max-width:420px){.home-hero[_ngcontent-%COMP%]{border-radius:1rem}.home-hero-content[_ngcontent-%COMP%]{gap:.75rem;padding:1.25rem}.hero-icon[_ngcontent-%COMP%]{width:2rem;height:2rem;font-size:2rem}.home-intro[_ngcontent-%COMP%]{font-size:.95rem}}"]})}}return n})();var ud=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-userlogin"]],decls:6,vars:0,consts:[[1,"Btn"]],template:function(t,o){t&1&&(Q(0,"p"),d(1,"userlogin works!"),ee(),Q(2,"form"),yt(3,"input"),Q(4,"button",0),d(5,"Sign In"),ee()())},styles:[".Btn[_ngcontent-%COMP%]{color:red;border-radius:70px}"]})}}return n})();var ae={production:!0,authWidgetUrl:"",oauth:{clientId:"388061232445373142",redirectPath:"oauth/callback",postLogoutRedirectPath:"home",authorizationEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/authorize",tokenEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/token",userInfoEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oidc/v1/userinfo",revokeEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oauth/v2/revoke",endSessionEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/oidc/v1/end_session"},saml:{endpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SSO",sloEndpoint:"https://my-dev-authentication-server-dsealt.us1.zitadel.cloud/saml/v2/SLO",backendUrl:"https://user-api-766984687989.us-central1.run.app",loginPath:"/saml/login",profilePath:"/saml/profile-data",logoutPath:"/saml/logout"},providers:[]};function Au(n,i){if(n&1){let e=dt();l(0,"button",1),E("click",function(){at(e);let o=A(2);return st(o.openIframe())}),d(1,"Sign In"),c()}}function Fu(n,i){if(n&1){let e=dt();l(0,"button",1),E("click",function(){at(e);let o=A(2);return st(o.closeIframe())}),d(1,"Close Iframe"),c()}}function Lu(n,i){if(n&1&&x(0,"iframe",0),n&2){let e=A(2);N("src",e.trustedUrl,ks)}}function Nu(n,i){if(n&1&&(l(0,"div"),O(1,Au,2,0,"button"),O(2,Fu,2,0,"button"),O(3,Lu,1,1,"iframe",0),c()),n&2){let e=A();f(),D(e.showIframe?-1:1),f(),D(e.showIframe?2:-1),f(),D(e.showIframe&&e.trustedUrl?3:-1)}}var fd=(()=>{class n{constructor(e,t){this.titleService=e,this.store=t,this.showIframe=!1,this.sanitizer=p($s),e.setTitle("User App"),this.trustedUrl=ae.authWidgetUrl?this.sanitizer.bypassSecurityTrustResourceUrl(ae.authWidgetUrl):null,this.user$=this.store.select(o=>o.user),this.user$.subscribe(o=>{console.log("userer subscribe",o.firstName)})}openIframe(){console.log("user clicked on button"),this.showIframe=!0}closeIframe(){this.showIframe=!1}static{this.\u0275fac=function(t){return new(t||n)(L(kt),L(pt))}}static{this.\u0275cmp=y({type:n,selectors:[["app-user"]],decls:4,vars:1,consts:[["WIDTH","90%","HEIGHT","800",3,"src"],[3,"click"]],template:function(t,o){t&1&&(l(0,"p"),d(1,"User Login"),c(),x(2,"app-userlogin"),O(3,Nu,4,3,"div")),t&2&&(f(3),D(-1))},dependencies:[ud],encapsulation:2})}}return n})();var si={increment:ke("[Counter] Increment"),reset:ke("[Counter] Reset"),decrement:ke("[Counter] Decrement")};var gd=(()=>{class n{transform(e){return e.split("").reverse().join("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275pipe=oo({name:"reverse",type:n,pure:!0})}}return n})();function Bu(n,i){if(n&1&&(l(0,"p"),d(1),hi(2,"reverse"),c()),n&2){let e=A();f(),Fe("your text is : ",pi(2,1,e.rText))}}var vd=(()=>{class n{constructor(e,t){this.store=e,this.titleService=t,this.rText="",this.showReverseTxt=!1,t.setTitle("Counter App"),this.count$=this.store.select(o=>o.counter.count)}increment(){this.store.dispatch(si.increment())}decrement(){this.store.dispatch(si.decrement())}reset(){this.store.dispatch(si.reset())}onChangeHandler(e){console.log("event --> :"+e.target.value),this.showReverseTxt=this.rText.length>1,console.log(this.showReverseTxt)}static{this.\u0275fac=function(t){return new(t||n)(L(pt),L(kt))}}static{this.\u0275cmp=y({type:n,selectors:[["app-counter"]],decls:22,vars:5,consts:[[1,"counter"],[3,"click"],["type","text","id","name",3,"ngModelChange","change","ngModel"]],template:function(t,o){t&1&&(l(0,"p"),d(1,"counter works!"),c(),l(2,"div",0)(3,"div"),d(4),hi(5,"async"),c(),x(6,"br"),l(7,"button",1),E("click",function(){return o.increment()}),d(8,"Increment"),c(),x(9,"br"),l(10,"button",1),E("click",function(){return o.decrement()}),d(11,"Decrement"),c(),x(12,"br"),l(13,"button",1),E("click",function(){return o.reset()}),d(14,"Reset Counter"),c(),l(15,"p"),d(16,"Example for directive usage :"),c(),l(17,"div")(18,"label"),d(19,"Enter your text to show the reverse string :"),c(),l(20,"input",2),Fi("ngModelChange",function(a){return Ai(o.rText,a)||(o.rText=a),a}),E("change",function(a){return o.onChangeHandler(a)}),c()(),O(21,Bu,3,3,"p"),c()),t&2&&(f(4),Fe("Current Count: ",pi(5,3,o.count$)),f(16),Ii("ngModel",o.rText),f(),D(o.showReverseTxt?21:-1))},dependencies:[Mt,Zt,Bi,zi,Vi,mo,gd],encapsulation:2})}}return n})();var yd=(()=>{class n{constructor(){this.userName=""}ngOnChanges(e){console.log("ngOnChange life cycle method will excute whenever the input changes : ",e)}ngOnInit(){console.log("ngOnInit life cycle hook will excute after constructor is being excuted")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-child"]],inputs:{userName:"userName"},features:[Nt],decls:4,vars:1,template:function(t,o){t&1&&(Q(0,"p"),d(1,"child works!"),ee(),Q(2,"p"),d(3),ee()),t&2&&(f(3),Fe("Here is the User Name :",o.userName))},encapsulation:2})}}return n})();var bd=(()=>{class n{constructor(){this.userName="venu"}updateUser(){this.userName="vardhan"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-parent"]],decls:7,vars:1,consts:[[3,"click"],[3,"userName"]],template:function(t,o){t&1&&(l(0,"p"),d(1,"parent works!"),c(),l(2,"button",0),E("click",function(){return o.updateUser()}),d(3,"UPDATE "),c(),x(4,"br")(5,"br")(6,"app-child",1)),t&2&&(f(6),N("userName",o.userName))},dependencies:[yd],encapsulation:2})}}return n})();var Cd=(()=>{class n{constructor(e){e.setTitle("life-cycle-example")}static{this.\u0275fac=function(t){return new(t||n)(L(kt))}}static{this.\u0275cmp=y({type:n,selectors:[["app-life-cycle-example"]],decls:3,vars:0,template:function(t,o){t&1&&(l(0,"p"),d(1,"life-cycle-example works!"),c(),x(2,"app-parent"))},dependencies:[bd],encapsulation:2})}}return n})();var zu=["*",[["mat-toolbar-row"]]],Vu=["*","mat-toolbar-row"],ju=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=te({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),ln=(()=>{class n{_elementRef=p(H);_platform=p(Se);_document=p(ge);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,o,r){if(t&1&&zt(r,ju,5),t&2){let a;R(a=I())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,o){t&2&&(Et(o.color?"mat-"+o.color:""),W("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Vu,decls:2,vars:0,template:function(t,o){t&1&&(He(zu),ce(0),ce(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[ue]})}return n})();var wd=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-radiooptionselector"]],decls:21,vars:0,consts:[["appearance","outlined",1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"item"],[1,"subitem"],["mat-card-image","","src","https://upload.wikimedia.org/wikipedia/commons/d/d2/Circle-icons-creditcard.svg"],["mat-card-image","","src","https://upload.wikimedia.org/wikipedia/commons/4/40/Klarna_Payment_Badge.svg"]],template:function(t,o){t&1&&(l(0,"p"),d(1,"radiooptionselector works!"),c(),l(2,"mat-card",0)(3,"mat-card-header"),x(4,"div",1),l(5,"mat-card-title"),d(6,"Radio Button Demo"),c(),l(7,"mat-card-subtitle"),d(8,"Radio Button component using material ui"),c()(),l(9,"mat-card-content")(10,"mat-radio-group")(11,"mat-radio-button",2)(12,"mat-card",3)(13,"mat-card-title"),d(14,"Credit Cards(Amex, Diners, Visa, Master)"),c(),x(15,"img",4),c()(),l(16,"mat-radio-button",2)(17,"mat-card",3)(18,"mat-card-title"),d(19," Bank Payment "),c(),x(20,"img",5),c()()()()())},dependencies:[Kl,Dn,$i,Ae,cn,Uo,Re,xe,$e,Pe,De,_o,Oe,Te,we],styles:[".example-card[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:2px;background-color:#f0f8ff;display:flex;flex-direction:column;width:100%}.item[_ngcontent-%COMP%]{margin-top:1.5em;display:flex;flex-direction:column}.mat-card-image[_ngcontent-%COMP%]{width:40vw}.mat-card-title[_ngcontent-%COMP%]{font-family:Lato;width:40vw;white-space:normal}@media only screen and (min-width:800px){.mat-card-image[_ngcontent-%COMP%]{width:20vw}.mat-card-title[_ngcontent-%COMP%]{font-family:Lato;width:20vw;white-space:normal}}"]})}}return n})();var dn=(()=>{class n{constructor(){this.prdocutNames=["Angular","React"],this.logoUrl="assets/icons/v.png"}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-header"]],inputs:{prdocutNames:"prdocutNames",logoUrl:"logoUrl"},decls:9,vars:0,consts:[["color","primary",1,"app-toolbar"],["mat-button","","routerLink","/","aria-label","Users App home",1,"brand-link"],["aria-hidden","true"],[1,"toolbar-spacer"],[1,"toolbar-caption"]],template:function(t,o){t&1&&(l(0,"mat-toolbar",0)(1,"a",1)(2,"mat-icon",2),d(3,"dashboard"),c(),l(4,"span"),d(5,"Users App"),c()(),x(6,"span",3),l(7,"span",4),d(8,"Angular examples and tools"),c()())},dependencies:[Tt,we,Ie,Ae,Be,cn,ln],styles:["[_nghost-%COMP%]{display:block}.app-toolbar[_ngcontent-%COMP%]{min-height:4rem;padding:0 clamp(1rem,4vw,3rem)}.brand-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font-size:1.1rem;font-weight:700}.toolbar-spacer[_ngcontent-%COMP%]{flex:1}.toolbar-caption[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400}@media(max-width:480px){.app-toolbar[_ngcontent-%COMP%]{padding:0 .5rem}.toolbar-caption[_ngcontent-%COMP%]{font-size:.75rem}}"]})}}return n})();var Sd=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-simple-page-layout"]],decls:5,vars:0,consts:[[1,"page-wrapper"],[1,"simple-layout__header"],[1,"simple-layout__main"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"header",1),x(2,"app-header"),c(),l(3,"main",2),x(4,"router-outlet"),c()())},dependencies:[Li,dn],encapsulation:2})}}return n})();function Hu(n,i){n&1&&x(0,"span",4),n&2&&N("innerHTML",i,Ms)}var Qo=(()=>{class n{constructor(e){this.http=e,this.footerId="terms-section",this.links=[{key:"legal",url:""},{key:"security",url:""},{key:"privacy",url:""}]}ngOnInit(){this.DynamicContent$=this.http.get("assets/content/footer/footer.html",{responseType:"text"})}static{this.\u0275fac=function(t){return new(t||n)(L(ht))}}static{this.\u0275cmp=y({type:n,selectors:[["app-footer"]],inputs:{footerId:"footerId"},decls:10,vars:4,consts:[["role","contentinfo",1,"app-footer"],[1,"footer-content"],[1,"footer-copy"],[3,"id"],[3,"innerHTML"],[1,"footer-spacer"],["mat-button","","routerLink","/"]],template:function(t,o){if(t&1&&(l(0,"mat-toolbar",0)(1,"div",1)(2,"span",2),d(3,"Users App \xB7 Angular Material examples"),c(),l(4,"span",3),O(5,Hu,1,1,"span",4),hi(6,"async"),c(),x(7,"span",5),l(8,"a",6),d(9,"Back to home"),c()()()),t&2){let r;f(4),N("id",o.footerId),f(),D((r=pi(6,2,o.DynamicContent$))?5:-1,r)}},dependencies:[Mt,cn,ln,Tt,mo],styles:["[_nghost-%COMP%]{display:block}.app-footer[_ngcontent-%COMP%]{min-height:4rem;border-top:1px solid #e8e4ef;background:#fff;color:#625d6b;font-size:.875rem}.footer-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:min(100%,76rem);margin:0 auto}.footer-spacer[_ngcontent-%COMP%]{flex:1}@media(max-width:600px){.app-footer[_ngcontent-%COMP%]{min-height:3.5rem;padding:0 .5rem;font-size:.75rem}.footer-content[_ngcontent-%COMP%]{gap:.5rem}}"]})}}return n})();var Ed=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-full-page-layout"]],decls:7,vars:0,template:function(t,o){t&1&&(l(0,"div")(1,"header"),x(2,"app-header"),c(),l(3,"main"),x(4,"router-outlet"),c()(),l(5,"footer"),x(6,"app-footer"),c())},dependencies:[Li,Qo,dn],encapsulation:2})}}return n})();var Md=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-cardapplication"]],decls:23,vars:0,consts:[[1,"layout-container"],[1,"appheader"],["color","primary"],[1,"content"],[1,"card"],["mat-card-image","","src","https://via.placeholder.com/400x200","alt","Card Image"],["mat-button",""],[1,"footer"],["color","accent"]],template:function(t,o){t&1&&(l(0,"div",0)(1,"app-header",1)(2,"mat-toolbar",2),d(3,"Card Application"),c()(),l(4,"div",3)(5,"mat-card",4)(6,"mat-card-header")(7,"mat-card-title"),d(8,"Card Title"),c(),l(9,"mat-card-subtitle"),d(10,"Card Subtitle"),c()(),x(11,"img",5),l(12,"mat-card-content")(13,"p"),d(14,"This is some content inside the card. You can add more details here."),c()(),l(15,"mat-card-actions")(16,"button",6),d(17,"LIKE"),c(),l(18,"button",6),d(19,"SHARE"),c()()()(),l(20,"app-footer",7)(21,"mat-toolbar",8),d(22,"Card Application"),c()()())},dependencies:[Re,xe,Ke,Pe,De,_o,Oe,Te,ln,dn,Qo],styles:[".layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex:1;background:#f5f7fa;background-color:#fff}.footer[_ngcontent-%COMP%]{text-align:center}"]})}}return n})();var Uu=Vr("books"),kd=zr(Uu,n=>(console.log("selectBooks selector called, current books state:",n.books),n.books));var qu=ke("[Books List] Load Books"),Wu=ke("[Books List] Load Books Success",Vt()),Gu=ke("[Books List] Load Books Failure",Vt()),At={loadBooks:qu,loadBooksSuccess:Wu,loadBooksFailure:Gu};function Yu(n,i){n&1&&(Q(0,"p"),d(1,"Loading books..."),ee())}function Qu(n,i){if(n&1&&(Q(0,"li"),d(1),ee()),n&2){let e=i.$implicit;f(),Ls(" ",e.id," - ",e.author," - ",e.title," - ",e.cover_image," ")}}function Ku(n,i){if(n&1&&(Q(0,"ul"),Yt(1,Qu,2,4,"li",null,Rs),ee()),n&2){let e=A();f(),Qt(e.booksList)}}var Td=(()=>{class n{constructor(e,t){this.router=e,this.Store=t,this.booksList=[],this.loading=!0,console.log("BookslistComponent constructor called"),this.Store.subscribe(o=>{console.log("BookslistComponent current store state:",o)})}ngOnInit(){console.log("BookslistComponent initialized"),this.Store.dispatch(At.loadBooks()),this.subscription=this.Store.select(kd).subscribe(e=>{console.log("BookslistComponent received books from store:==",e),this.loading=!1,this.booksList=e})}goToCourseApp(){this.router.navigate(["csscourseapp"])}gotoHome(){this.router.navigate(["home"])}ngOnDestroy(){console.log("BookslistComponent destroyed"),this.subscription.unsubscribe()}static{this.\u0275fac=function(t){return new(t||n)(L(Qe),L(pt))}}static{this.\u0275cmp=y({type:n,selectors:[["app-bookslist"]],features:[bt([ht])],decls:9,vars:1,consts:[[3,"click"]],template:function(t,o){t&1&&(Q(0,"p"),d(1,"bookslist works!"),ee(),Q(2,"div"),O(3,Yu,2,0,"p")(4,Ku,3,0,"ul"),Q(5,"button",0),mi("click",function(){return o.goToCourseApp()}),d(6,"GOTOCOURSEAPP"),ee(),Q(7,"button",0),mi("click",function(){return o.gotoHome()}),d(8,"HOME"),ee()()),t&2&&(f(3),D(o.loading?3:4))},styles:["li[_ngcontent-%COMP%]{color:red}"]})}}return n})();var Pd=(()=>{class n{constructor(e){this.router=e}canMatch(){return console.log("CssCourseAppGuard canMatch called"),Ge(!0)}static{this.\u0275fac=function(t){return new(t||n)(z(Qe))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var $u=["templatePortalContent"],Xu=["domPortalContent"];function Zu(n,i){}function Ju(n,i){n&1&&d(0,"Hello, this is a template portal")}var Od=(()=>{class n{constructor(e){this._viewContainerRef=e}ngAfterViewInit(){this.componentPortal=new ot(ef),this.templatePortal=new Rt(this.templatePortalContent,this._viewContainerRef),this.domPortal=new In(this.domPortalContent)}static{this.\u0275fac=function(t){return new(t||n)(L(ct))}}static{this.\u0275cmp=y({type:n,selectors:[["app-portalexample"]],viewQuery:function(t,o){if(t&1&&_e($u,5)(Xu,5),t&2){let r;R(r=I())&&(o.templatePortalContent=r.first),R(r=I())&&(o.domPortalContent=r.first)}},decls:17,vars:1,consts:[["templatePortalContent",""],["domPortalContent",""],[1,"example-portal-outlet"],[3,"cdkPortalOutlet"],[3,"click"]],template:function(t,o){t&1&&(l(0,"p"),d(1,"portalexample works!"),c(),l(2,"h2"),d(3,"The portal outlet is below:"),c(),l(4,"div",2),me(5,Zu,0,0,"ng-template",3),c(),me(6,Ju,1,0,"ng-template",null,0,mt),l(8,"button",4),E("click",function(){return o.selectedPortal=o.componentPortal}),d(9,"Render component portal"),c(),l(10,"button",4),E("click",function(){return o.selectedPortal=o.templatePortal}),d(11,"Render template portal"),c(),l(12,"button",4),E("click",function(){return o.selectedPortal=o.domPortal}),d(13,"Render DOM portal"),c(),l(14,"div",null,1),d(16,"Hello, this is a DOM portal"),c()),t&2&&(f(5),N("cdkPortalOutlet",o.selectedPortal))},dependencies:[Xe,We,Mt],styles:[".example-portal-outlet[_ngcontent-%COMP%]{margin-bottom:10px;padding:10px;border:1px dashed black;width:250px;height:250px}"]})}}return n})(),ef=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["component-portal-example"]],decls:1,vars:0,template:function(t,o){t&1&&d(0,"Hello, this is a component portal")},encapsulation:2})}}return n})();var Dd=(()=>{class n{constructor(e){this.modalpageService=e}ngOnInit(){this.modalpageService.openComponent(bi,"Modal Page Example")}static{this.\u0275fac=function(t){return new(t||n)(L(sn))}}static{this.\u0275cmp=y({type:n,selectors:[["app-modalpage-route"]],decls:0,vars:0,template:function(t,o){},encapsulation:2})}}return n})();function mn(n){return new URL(n,document.baseURI).toString()}var Id=(()=>{class n{login(){return ki(this,null,function*(){let e=this.generateCodeVerifier(),t=yield this.generateCodeChallenge(e);sessionStorage.setItem("pkce_verifier",e);let o=this.generateRandomString();sessionStorage.setItem("oauth_state",o);let r=new URLSearchParams({client_id:ae.oauth.clientId,response_type:"code",redirect_uri:mn(ae.oauth.redirectPath),scope:"openid profile email",state:o,code_challenge:t,code_challenge_method:"S256"});window.location.href=`${ae.oauth.authorizationEndpoint}?${r.toString()}`})}generateCodeVerifier(){let e=new Uint8Array(32);return crypto.getRandomValues(e),this.base64UrlEncode(e)}generateCodeChallenge(e){return ki(this,null,function*(){let t=new TextEncoder().encode(e),o=yield crypto.subtle.digest("SHA-256",t);return this.base64UrlEncode(new Uint8Array(o))})}base64UrlEncode(e){let t="";return e.forEach(o=>{t+=String.fromCharCode(o)}),btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}generateRandomString(){let e=new Uint8Array(32);return crypto.getRandomValues(e),this.base64UrlEncode(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-oauth"]],decls:54,vars:0,consts:[[1,"oauth-page"],["appearance","outlined",1,"oauth-layout"],[1,"oauth-overview"],["mat-card-avatar","","aria-hidden","true"],["aria-label","What you can access"],["matListItemIcon","","aria-hidden","true"],["matListItemTitle",""],["matListItemLine",""],[1,"oauth-content"],["aria-label","Sign-in status"],["align","end"],["mat-flat-button","","color","primary","type","button",3,"click"],["aria-hidden","true"]],template:function(t,o){t&1&&(l(0,"main",0)(1,"mat-card",1)(2,"section",2)(3,"mat-card-header")(4,"mat-icon",3),d(5,"verified_user"),c(),l(6,"mat-card-title"),d(7,"CUSTOMER PORTAL"),c(),l(8,"mat-card-subtitle"),d(9,"SECURE SIGN-IN"),c()(),l(10,"mat-card-content")(11,"h1"),d(12,"Your customer information, all in one place."),c(),l(13,"p"),d(14,"Sign in to view the profile details connected to your account and continue to protected customer resources."),c(),l(15,"mat-list",4)(16,"mat-list-item")(17,"mat-icon",5),d(18,"person"),c(),l(19,"span",6),d(20,"Your profile"),c(),l(21,"span",7),d(22,"See the customer details shared with this app."),c()(),l(23,"mat-list-item")(24,"mat-icon",5),d(25,"security"),c(),l(26,"span",6),d(27,"A secure sign-in"),c(),l(28,"span",7),d(29,"OAuth 2.0 with PKCE helps protect your sign-in flow."),c()()()()(),l(30,"section",8)(31,"mat-card-header")(32,"mat-icon",3),d(33,"login"),c(),l(34,"mat-card-title"),d(35,"Sign in to continue"),c(),l(36,"mat-card-subtitle"),d(37,"WELCOME"),c()(),l(38,"mat-card-content")(39,"p"),d(40,"Continue to your account. After you approve access, you\u2019ll return here to view your customer information."),c(),l(41,"mat-list",9)(42,"mat-list-item")(43,"mat-icon",5),d(44,"lock"),c(),l(45,"span",6),d(46,"Secure redirect"),c(),l(47,"span",7),d(48,"You\u2019ll be securely redirected to sign in."),c()()()(),l(49,"mat-card-actions",10)(50,"button",11),E("click",function(){return o.login()}),d(51," Continue to sign in "),l(52,"mat-icon",12),d(53,"arrow_forward"),c()()()()()())},dependencies:[Re,xe,Ke,$e,Pe,De,Oe,Te,we,Ie,Ae,Be,Ki,Yi,Qi,Gi,Wi,qi],styles:['[_nghost-%COMP%]{display:block;min-height:100vh;min-height:100svh;width:100%}.oauth-page[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;min-height:100vh;min-height:100svh;padding:clamp(1rem,4vw,3rem);place-items:center;background:radial-gradient(circle at 10% 12%,rgba(119,88,190,.1),transparent 28rem),#f7f5fa}.auth-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(18rem,.92fr);width:min(100%,62rem);overflow:hidden;border:1px solid #e8e4ef;border-radius:1.5rem;background:#fff;box-shadow:0 1.5rem 4rem #2a1e461f}.welcome-panel[_ngcontent-%COMP%]{position:relative;isolation:isolate;overflow:hidden;padding:clamp(2rem,5vw,4rem);color:#fff;background:linear-gradient(145deg,#302052,#493276)}.welcome-panel[_ngcontent-%COMP%]:after{position:absolute;z-index:-1;right:-7rem;bottom:-10rem;width:22rem;height:22rem;border:1px solid rgba(255,255,255,.12);border-radius:50%;box-shadow:0 0 0 2.5rem #ffffff09,0 0 0 5rem #ffffff06;content:""}.eyebrow[_ngcontent-%COMP%], .panel-eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.55rem;margin:0;font-size:.72rem;font-weight:700;letter-spacing:.12em}.eyebrow[_ngcontent-%COMP%]{color:#e2d8fa}.eyebrow-mark[_ngcontent-%COMP%]{display:grid;width:1.35rem;height:1.35rem;place-items:center;border:1px solid rgba(255,255,255,.4);border-radius:50%;font-size:.75rem;letter-spacing:0}.welcome-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:12ch;margin:2rem 0 1rem;font-size:clamp(2rem,4vw,3.1rem);font-weight:650;letter-spacing:-.045em;line-height:1.08}.welcome-copy[_ngcontent-%COMP%]{max-width:36rem;margin:0;color:#e3dcef;font-size:1rem;line-height:1.7}.benefits[_ngcontent-%COMP%]{display:grid;gap:1.2rem;margin:2rem 0 1.8rem;padding:0;list-style:none}.benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.9rem}.benefit-mark[_ngcontent-%COMP%]{display:grid;flex:0 0 2.2rem;width:2.2rem;height:2.2rem;place-items:center;border:1px solid rgba(255,255,255,.24);border-radius:.7rem;color:#eee8ff;font-size:.72rem;font-weight:700}.benefits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block}.benefits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:.05rem 0 .25rem;font-size:.95rem}.benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#d3c9e6;font-size:.84rem;line-height:1.5}.security-note[_ngcontent-%COMP%]{margin:0;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.18);color:#d3c9e6;font-size:.8rem;line-height:1.5}.signin-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:clamp(2rem,5vw,3.5rem)}.signin-icon[_ngcontent-%COMP%]{display:grid;width:3.25rem;height:3.25rem;margin-bottom:2rem;place-items:center;border-radius:1rem;color:#6543aa;background:#f0ebfa}.signin-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.8rem;height:1.8rem}.panel-eyebrow[_ngcontent-%COMP%]{color:#7654b5}.signin-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:.55rem 0 .75rem;color:#211a2d;font-size:clamp(1.55rem,3vw,1.9rem);font-weight:650;letter-spacing:-.035em;line-height:1.2}.signin-copy[_ngcontent-%COMP%]{margin:0;color:#6f687a;font-size:.95rem;line-height:1.7}.sign-in-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:3.5rem;margin-top:1.75rem;padding:.85rem 1.1rem .85rem 1.25rem;border:0;border-radius:.7rem;color:#fff;background:#6543b4;box-shadow:0 .45rem 1rem #6543b433;cursor:pointer;font:inherit;font-size:.95rem;font-weight:650;transition:background-color .16s ease,box-shadow .16s ease,transform .16s ease}.sign-in-button[_ngcontent-%COMP%]:hover{transform:translateY(-1px);background:#55359e;box-shadow:0 .7rem 1.25rem #6543b440}.sign-in-button[_ngcontent-%COMP%]:focus-visible{outline:3px solid #bca9e6;outline-offset:3px}.sign-in-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem}.redirect-note[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.55rem;margin:1rem 0 0;color:#777181;font-size:.78rem;line-height:1.5}.status-dot[_ngcontent-%COMP%]{flex:0 0 .5rem;width:.5rem;height:.5rem;border-radius:50%;background:#48a67a}@media(max-width:700px){.auth-card[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);max-width:34rem}.welcome-panel[_ngcontent-%COMP%]{padding:clamp(1.75rem,7vw,2.5rem)}.welcome-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:16ch;margin-top:1.4rem;font-size:clamp(2rem,8vw,2.65rem)}.benefits[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin:1.5rem 0}.benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{gap:.65rem}.benefit-mark[_ngcontent-%COMP%]{flex-basis:1.9rem;width:1.9rem;height:1.9rem}.signin-panel[_ngcontent-%COMP%]{padding:clamp(1.75rem,7vw,2.5rem)}.signin-icon[_ngcontent-%COMP%]{margin-bottom:1.3rem}}@media(max-width:420px){.oauth-page[_ngcontent-%COMP%]{padding:.75rem}.auth-card[_ngcontent-%COMP%]{border-radius:1.1rem}.benefits[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr)}}@media(prefers-reduced-motion:reduce){.sign-in-button[_ngcontent-%COMP%]{transition:none}.sign-in-button[_ngcontent-%COMP%]:hover{transform:none}}']})}}return n})();function tf(n,i){n&1&&yt(0,"div",2)}var nf=new T("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ko=(()=>{class n{_elementRef=p(H);_ngZone=p(Y);_changeDetectorRef=p(Ue);_renderer=p(Me);_cleanupTransitionEnd;constructor(){let e=bo(),t=p(nf,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ad(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ad(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new be;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,o){t&2&&(ne("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Et("mat-"+o.color),W("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",it],bufferValue:[2,"bufferValue","bufferValue",it],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,o){t&1&&(Q(0,"div",0),yt(1,"div",1),O(2,tf,1,0,"div",2),ee(),Q(3,"div",3),yt(4,"span",4),ee(),Q(5,"div",5),yt(6,"span",4),ee()),t&2&&(f(),$t("flex-basis",o._getBufferBarFlexBasis()),f(),D(o.mode==="buffer"?2:-1),f(),$t("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Ad(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var $o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[ue]})}return n})();function of(n,i){n&1&&x(0,"mat-progress-bar",9)}function rf(n,i){n&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",11),d(3,"info"),c(),l(4,"span",6),d(5,"Please return to the sign-in page and try again."),c()()())}function af(n,i){if(n&1){let e=dt();l(0,"mat-card-actions",10)(1,"button",12),E("click",function(){at(e);let o=A();return st(o.returnToSignIn())}),l(2,"mat-icon",13),d(3,"login"),c(),d(4," Return to sign in "),c()()}}var Ld=(()=>{class n{constructor(e,t){this.route=e,this.router=t,this.isProcessing=Ce(!0),this.errorMessage=Ce(null)}ngOnInit(){return ki(this,null,function*(){let e=this.route.snapshot.queryParamMap.get("code"),t=this.route.snapshot.queryParamMap.get("state"),o=this.route.snapshot.queryParamMap.get("error");if(o){console.error("Login failed:",o),this.showError("Sign-in was declined or could not be completed.");return}if(!e){console.error("Authorization code not found"),this.showError("The authorization response did not include a sign-in code.");return}let r=sessionStorage.getItem("oauth_state");if(!t||t!==r){console.error("Invalid OAuth state"),this.showError("The sign-in response could not be verified. Please try again.");return}let a=sessionStorage.getItem("pkce_verifier");if(!a){console.error("PKCE verifier not found"),this.showError("The secure sign-in session has expired. Please try again.");return}try{let s=yield this.exchangeCodeForToken(e,a);sessionStorage.setItem("access_token",s.access_token),sessionStorage.setItem("id_token",s.id_token),sessionStorage.removeItem("pkce_verifier"),sessionStorage.removeItem("oauth_state"),yield this.router.navigate(["../customer"],{relativeTo:this.route})}catch(s){console.error("OAuth callback processing failed:",s),this.showError("We could not complete sign-in. Please return to the sign-in page and try again.")}})}returnToSignIn(){this.router.navigate(["/oauth"])}showError(e){this.isProcessing.set(!1),this.errorMessage.set(e)}exchangeCodeForToken(e,t){return ki(this,null,function*(){let o=new URLSearchParams;o.set("grant_type","authorization_code"),o.set("client_id",ae.oauth.clientId),o.set("code",e),o.set("redirect_uri",mn(ae.oauth.redirectPath)),o.set("code_verifier",t);let r=yield fetch(ae.oauth.tokenEndpoint,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o.toString()});if(!r.ok)throw new Error("Unable to get access token");return yield r.json()})}static{this.\u0275fac=function(t){return new(t||n)(L(Xt),L(Qe))}}static{this.\u0275cmp=y({type:n,selectors:[["app-callback"]],decls:35,vars:5,consts:[[1,"oauth-page"],["appearance","outlined",1,"oauth-layout"],[1,"oauth-overview"],["mat-card-avatar","","aria-hidden","true"],["aria-label","Security information"],["matListItemIcon","","aria-hidden","true"],["matListItemTitle",""],["matListItemLine",""],[1,"oauth-content"],["mode","indeterminate"],["align","end"],["matListItemIcon","","color","warn","aria-hidden","true"],["mat-flat-button","","color","primary","type","button",3,"click"],["aria-hidden","true"]],template:function(t,o){t&1&&(l(0,"main",0)(1,"mat-card",1)(2,"section",2)(3,"mat-card-header")(4,"mat-icon",3),d(5,"verified_user"),c(),l(6,"mat-card-title"),d(7,"CUSTOMER PORTAL"),c(),l(8,"mat-card-subtitle"),d(9,"SECURE SIGN-IN"),c()(),l(10,"mat-card-content")(11,"h1"),d(12,"Your customer information, all in one place."),c(),l(13,"p"),d(14,"We\u2019re securely verifying your sign-in and preparing your account."),c(),l(15,"mat-list",4)(16,"mat-list-item")(17,"mat-icon",5),d(18,"security"),c(),l(19,"span",6),d(20,"Protected sign-in"),c(),l(21,"span",7),d(22,"Your authentication details are handled securely."),c()()()()(),l(23,"section",8)(24,"mat-card-header")(25,"mat-icon",3),d(26),c(),l(27,"mat-card-title"),d(28),c(),l(29,"mat-card-subtitle"),d(30),c()(),l(31,"mat-card-content"),O(32,of,1,0,"mat-progress-bar",9)(33,rf,6,0,"mat-list"),c(),O(34,af,5,0,"mat-card-actions",10),c()()()),t&2&&(f(26),Fe(" ",o.errorMessage()?"error":"sync"," "),f(2),Fe(" ",o.errorMessage()?"Sign-in could not be completed":"Completing sign-in"," "),f(2),Fe(" ",o.errorMessage()||"Please wait while we securely verify your account."," "),f(2),D(o.isProcessing()?32:o.errorMessage()?33:-1),f(2),D(o.errorMessage()?34:-1))},dependencies:[we,Ie,Re,xe,Ke,$e,Pe,De,Oe,Te,Ae,Be,$o,Ko,Ki,Yi,Qi,Gi,Wi,qi],encapsulation:2})}}return n})();function sf(n,i){n&1&&(x(0,"mat-progress-bar",14),l(1,"p"),d(2,"Loading your customer information..."),c())}function lf(n,i){if(n&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",15),d(3,"error"),c(),l(4,"span",6),d(5,"Unable to load profile"),c(),l(6,"span",7),d(7),c()()()),n&2){let e=A();f(7),V(e.errorMessage())}}function cf(n,i){if(n&1&&(l(0,"mat-list-item")(1,"mat-icon",5),d(2,"phone"),c(),l(3,"span",6),d(4,"Phone number"),c(),l(5,"span",7),d(6),c()()),n&2){let e=A();f(6),V(e.phoneNumber)}}function df(n,i){if(n&1&&(l(0,"mat-list",9)(1,"mat-list-item")(2,"mat-icon",5),d(3,"person"),c(),l(4,"span",6),d(5,"Customer name"),c(),l(6,"span",7),d(7),c()(),l(8,"mat-list-item")(9,"mat-icon",5),d(10,"email"),c(),l(11,"span",6),d(12,"Email address"),c(),l(13,"span",7),d(14),c()(),O(15,cf,7,1,"mat-list-item"),c()),n&2){let e=i;f(7),Fs("",e.firstName," ",e.lastName),f(7),V(e.email),f(),D(e.phoneNumber?15:-1)}}function mf(n,i){n&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",5),d(3,"info"),c(),l(4,"span",6),d(5,"No customer profile is available."),c()()())}var Nd=(()=>{class n{constructor(){this.httpClient=p(ht),this.router=p(Qe),this.userProfile=Ce(null),this.isLoading=Ce(!1),this.errorMessage=Ce(null),this.token=sessionStorage.getItem("access_token"),console.log("CustomerComponent initialized")}ngOnInit(){this.token?this.getFetchInfo(this.token):(console.error("ID token not found in session storage"),this.navigateToOauthPage())}onPageShow(e){e.persisted&&!sessionStorage.getItem("access_token")&&(this.userProfile.set(null),this.navigateToOauthPage())}revokeToken(){this.token?this.callRevokeTokenEndpoint(this.token):(console.error("Access token not found in session storage"),this.navigateToOauthPage())}getFetchInfo(e){this.isLoading.set(!0),console.log("Fetching user info with ID token:",e),this.httpClient.get(ae.oauth.userInfoEndpoint,{headers:{Authorization:`Bearer ${e}`}}).subscribe({next:t=>{console.log("User info fetched successfully:",t),this.isLoading.set(!1),this.errorMessage.set(null);let o={firstName:t.given_name,lastName:t.family_name,email:t.email,phoneNumber:t.phoneNumber};this.userProfile.set(o)},error:t=>{console.error("Failed to fetch user info",t),this.errorMessage.set("Could not load user profile."),this.isLoading.set(!1)}})}callRevokeTokenEndpoint(e){let t=new Ys().set("token",e).set("client_id",ae.oauth.clientId);this.httpClient.post(ae.oauth.revokeEndpoint,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).subscribe({next:()=>{console.log("Access token revoked successfully"),sessionStorage.removeItem("access_token"),sessionStorage.removeItem("id_token"),this.navigateToOauthPage()},error:o=>{console.error("Failed to revoke access token",o)}})}navigateToOauthPage(){this.router.navigate(["/oauth"],{replaceUrl:!0})}endsession(){this.logout()}logout(){let e=sessionStorage.getItem("id_token"),t=ae.oauth.endSessionEndpoint,o=mn(ae.oauth.postLogoutRedirectPath),r=new URLSearchParams({client_id:ae.oauth.clientId,post_logout_redirect_uri:o});e&&r.append("id_token_hint",e),localStorage.clear(),sessionStorage.clear(),window.location.href=`${t}?${r.toString()}`}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-customer"]],hostBindings:function(t,o){t&1&&E("pageshow",function(a){return o.onPageShow(a)},Sn)},decls:46,vars:1,consts:[[1,"oauth-page"],["appearance","outlined",1,"oauth-layout"],[1,"oauth-overview"],["mat-card-avatar","","aria-hidden","true"],["aria-label","Account security"],["matListItemIcon","","aria-hidden","true"],["matListItemTitle",""],["matListItemLine",""],[1,"oauth-content"],["aria-label","Customer profile"],["align","end"],["mat-stroked-button","","type","button",3,"click"],["aria-hidden","true"],["mat-flat-button","","color","primary","type","button",3,"click"],["mode","indeterminate"],["matListItemIcon","","color","warn","aria-hidden","true"]],template:function(t,o){if(t&1&&(l(0,"main",0)(1,"mat-card",1)(2,"section",2)(3,"mat-card-header")(4,"mat-icon",3),d(5,"verified_user"),c(),l(6,"mat-card-title"),d(7,"CUSTOMER PORTAL"),c(),l(8,"mat-card-subtitle"),d(9,"SECURE ACCOUNT"),c()(),l(10,"mat-card-content")(11,"h1"),d(12,"Your customer information, all in one place."),c(),l(13,"p"),d(14,"Your authentication succeeded. Your protected profile is available below."),c(),l(15,"mat-list",4)(16,"mat-list-item")(17,"mat-icon",5),d(18,"security"),c(),l(19,"span",6),d(20,"Protected account"),c(),l(21,"span",7),d(22,"Your profile is available through a secure sign-in."),c()()()()(),l(23,"section",8)(24,"mat-card-header")(25,"mat-icon",3),d(26,"account_circle"),c(),l(27,"mat-card-title"),d(28,"Customer information"),c(),l(29,"mat-card-subtitle"),d(30,"Your profile details"),c()(),l(31,"mat-card-content"),O(32,sf,3,0)(33,lf,8,1,"mat-list")(34,df,16,4,"mat-list",9)(35,mf,6,0,"mat-list"),c(),x(36,"mat-divider"),l(37,"mat-card-actions",10)(38,"button",11),E("click",function(){return o.endsession()}),l(39,"mat-icon",12),d(40,"logout"),c(),d(41," Log out "),c(),l(42,"button",13),E("click",function(){return o.revokeToken()}),l(43,"mat-icon",12),d(44,"block"),c(),d(45," Revoke token "),c()()()()()),t&2){let r;f(32),D(o.isLoading()?32:o.errorMessage()?33:(r=o.userProfile())?34:35,r)}},dependencies:[Re,xe,Ke,$e,Pe,De,Oe,Te,we,Ie,$o,Ko,Ui,Ol,Ae,Be,Ki,Yi,Qi,Gi,Wi,qi],encapsulation:2})}}return n})();function hn(n){let i=ae.saml.backendUrl.trim();return i?new URL(n.replace(/^\/+/,""),`${i.replace(/\/+$/,"")}/`).toString():null}function hf(n,i){n&1&&(l(0,"p",20)(1,"mat-icon",5),d(2,"error_outline"),c(),l(3,"span"),d(4),c()()),n&2&&(f(4),V(i))}function pf(n,i){if(n&1&&(l(0,"p",31)(1,"mat-icon",5),d(2),c(),l(3,"span"),d(4),c()()),n&2){let e=A();W("saml-status-warning",e.statusIsWarning()),f(2),V(e.statusIsWarning()?"info":"check_circle"),f(2),V(i)}}var Bd=(()=>{class n{constructor(){this.errorMessage=Ce(null),this.statusMessage=Ce(null),this.statusIsWarning=Ce(!1),this.route=p(Xt);let e=this.route.snapshot.queryParamMap;e.has("logoutError")?(this.statusIsWarning.set(!0),this.statusMessage.set("Your local app session has been cleared. Zitadel did not confirm single logout, so its session may still be active.")):e.has("loggedout")?this.statusMessage.set("You have been signed out."):e.has("error")&&this.errorMessage.set("We could not verify the SAML sign-in response. Please try again.")}login(){this.errorMessage.set(null);let e=hn(ae.saml.loginPath);if(!e){this.errorMessage.set("SAML sign-in is not configured for this environment.");return}window.location.assign(e)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-saml-home"]],decls:104,vars:2,consts:[[1,"saml-page"],["appearance","outlined",1,"saml-shell"],["aria-labelledby","saml-title",1,"saml-intro"],["routerLink","/home","aria-label","UsersApp home",1,"brand"],[1,"brand-mark"],["aria-hidden","true"],[1,"intro-copy"],[1,"eyebrow"],["id","saml-title"],[1,"intro-description"],["aria-label","Sign-in details",1,"trust-list"],[1,"trust-item"],[1,"trust-icon"],[1,"intro-footer"],["aria-labelledby","signin-title",1,"saml-panel"],[1,"panel-topline"],["aria-hidden","true",1,"connection-indicator"],[1,"panel-heading"],[1,"panel-icon"],["id","signin-title"],["role","alert",1,"saml-message","saml-error"],["role","status",1,"saml-message","saml-status",3,"saml-status-warning"],[1,"sign-in-prompt"],["mat-flat-button","","color","primary","type","button",1,"signin-button",3,"click"],["aria-hidden","true",1,"button-arrow"],[1,"redirect-note"],[1,"divider"],[1,"sign-in-steps"],[1,"step-number"],["routerLink","/home",1,"back-link"],[1,"development-note"],["role","status",1,"saml-message","saml-status"]],template:function(t,o){if(t&1&&(l(0,"main",0)(1,"mat-card",1)(2,"section",2)(3,"a",3)(4,"span",4)(5,"mat-icon",5),d(6,"grid_view"),c()(),l(7,"span"),d(8,"UsersApp"),c()(),l(9,"div",6)(10,"p",7),d(11,"YOUR WORKSPACE, ONE SIGN-IN AWAY"),c(),l(12,"h1",8),d(13,"One trusted sign-in."),x(14,"br"),d(15,"Your work, ready."),c(),l(16,"p",9),d(17," Use your organization account to securely access your profile and continue where you left off. "),c()(),l(18,"div",10)(19,"div",11)(20,"span",12)(21,"mat-icon",5),d(22,"verified_user"),c()(),l(23,"span")(24,"strong"),d(25,"Identity verified by Zitadel"),c(),l(26,"small"),d(27,"Your organization handles authentication"),c()()(),l(28,"div",11)(29,"span",12)(30,"mat-icon",5),d(31,"lock"),c()(),l(32,"span")(33,"strong"),d(34,"Your password stays private"),c(),l(35,"small"),d(36,"Credentials are entered on your identity provider"),c()()()(),l(37,"div",13)(38,"mat-icon",5),d(39,"shield"),c(),l(40,"span"),d(41,"Secure authentication with SAML 2.0"),c()()(),l(42,"section",14)(43,"div",15),x(44,"span",16),l(45,"span"),d(46,"Organization sign-in"),c()(),l(47,"div",17)(48,"div",18)(49,"mat-icon",5),d(50,"account_circle"),c()(),l(51,"h2",19),d(52,"Welcome back"),c(),l(53,"p"),d(54,"Continue with your organization account."),c()(),O(55,hf,5,1,"p",20),O(56,pf,5,4,"p",21),l(57,"p",22),d(58," You\u2019ll be securely redirected to Zitadel to complete sign-in. "),c(),l(59,"button",23),E("click",function(){return o.login()}),l(60,"mat-icon",5),d(61,"login"),c(),d(62," Continue to sign in "),l(63,"mat-icon",24),d(64,"arrow_forward"),c()(),l(65,"div",25)(66,"mat-icon",5),d(67,"open_in_new"),c(),l(68,"span"),d(69,"You\u2019ll return here after authentication."),c()(),l(70,"div",26)(71,"span"),d(72,"HOW IT WORKS"),c()(),l(73,"ol",27)(74,"li")(75,"span",28),d(76,"1"),c(),l(77,"span")(78,"strong"),d(79,"Continue to Zitadel"),c(),l(80,"small"),d(81,"Your organization\u2019s secure identity provider"),c()()(),l(82,"li")(83,"span",28),d(84,"2"),c(),l(85,"span")(86,"strong"),d(87,"Verify your identity"),c(),l(88,"small"),d(89,"Sign in using your organization credentials"),c()()(),l(90,"li")(91,"span",28),d(92,"3"),c(),l(93,"span")(94,"strong"),d(95,"Return to your profile"),c(),l(96,"small"),d(97,"Your verified profile opens in this app"),c()()()(),l(98,"a",29)(99,"mat-icon",5),d(100,"arrow_back"),c(),d(101," Back to applications "),c(),l(102,"p",30),d(103," Development environment \xB7 This SAML integration uses a local backend and is not intended for production. "),c()()()()),t&2){let r,a;f(55),D((r=o.errorMessage())?55:-1,r),f(),D((a=o.statusMessage())?56:-1,a)}},dependencies:[we,Ie,Re,xe,Ae,Be,Tt],styles:['[_nghost-%COMP%]{display:block}.saml-page[_ngcontent-%COMP%]{box-sizing:border-box;display:grid;min-height:calc(100vh - 4rem);padding:clamp(1.25rem,4vw,3.5rem);place-items:center;background:radial-gradient(ellipse at 12% 8%,rgba(101,67,180,.09),transparent 32rem),#f6f7fb}.saml-shell[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(21rem,.88fr);width:min(100%,66rem);overflow:hidden;border:1px solid #e8e7ef;border-radius:1.5rem;background:#fff;box-shadow:0 2rem 5rem #231c3e21}.saml-intro[_ngcontent-%COMP%], .saml-panel[_ngcontent-%COMP%]{box-sizing:border-box;min-width:0;padding:clamp(2rem,5vw,4rem)}.saml-intro[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;color:#fff;background:radial-gradient(circle at 100% 0%,rgba(255,255,255,.13),transparent 19rem),linear-gradient(145deg,#302052,#493276 54%,#5d4193)}.brand[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.7rem;width:fit-content;color:#fff;font-size:1.05rem;font-weight:700;letter-spacing:-.02em;text-decoration:none}.brand-mark[_ngcontent-%COMP%], .panel-icon[_ngcontent-%COMP%], .trust-icon[_ngcontent-%COMP%]{display:grid;flex:0 0 auto;place-items:center}.brand-mark[_ngcontent-%COMP%]{width:2.4rem;height:2.4rem;border:1px solid rgba(255,255,255,.22);border-radius:.75rem;background:#ffffff1f}.brand-mark[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;font-size:1.25rem}.intro-copy[_ngcontent-%COMP%]{margin:auto 0;padding:4.5rem 0 3rem}.eyebrow[_ngcontent-%COMP%]{margin:0 0 1.15rem;color:#d3c4f2;font-size:.72rem;font-weight:700;letter-spacing:.13em}.intro-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:#fff;font-size:clamp(2.2rem,4.5vw,3.35rem);font-weight:650;letter-spacing:-.055em;line-height:1.08}.intro-description[_ngcontent-%COMP%]{max-width:27rem;margin:1.25rem 0 0;color:#e4dcef;font-size:1rem;line-height:1.75}.trust-list[_ngcontent-%COMP%]{display:grid;gap:1.25rem}.trust-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.9rem}.trust-icon[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border:1px solid rgba(255,255,255,.18);border-radius:.8rem;background:#ffffff17;color:#e7dcff}.trust-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem;font-size:1.2rem}.trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .trust-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block}.trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff;font-size:.88rem;font-weight:600}.trust-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:.2rem;color:#d3c9e6;font-size:.78rem;line-height:1.45}.intro-footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.55rem;margin-top:2.5rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.18);color:#d3c9e6;font-size:.76rem}.intro-footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;font-size:1rem}.saml-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.panel-topline[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.55rem;color:#667085;font-size:.75rem;font-weight:600}.connection-indicator[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:50%;background:#35a66f;box-shadow:0 0 0 .22rem #e5f5ec}.panel-heading[_ngcontent-%COMP%]{margin:2rem 0 1.25rem}.panel-icon[_ngcontent-%COMP%]{width:3rem;height:3rem;margin-bottom:1.25rem;border-radius:1rem;background:#f0ebfa;color:#60449a}.panel-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1.7rem;height:1.7rem;font-size:1.7rem}.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#252238;font-size:1.75rem;font-weight:650;letter-spacing:-.04em}.panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sign-in-prompt[_ngcontent-%COMP%]{color:#697083;font-size:.9rem;line-height:1.6}.panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.45rem 0 0}.saml-message[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.65rem;margin:0 0 1rem;padding:.85rem;border-radius:.75rem;font-size:.83rem;line-height:1.5}.saml-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:0 0 auto;width:1.15rem;height:1.15rem;font-size:1.15rem}.saml-error[_ngcontent-%COMP%]{border:1px solid #f5c7c3;background:#fff4f2;color:#a52b23}.saml-status[_ngcontent-%COMP%]{border:1px solid #ccebd7;background:#effaf3;color:#21653d}.saml-status-warning[_ngcontent-%COMP%]{border-color:#f3d9ae;background:#fff8eb;color:#8a4b08}.sign-in-prompt[_ngcontent-%COMP%]{margin:0 0 1rem}.signin-button[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;min-height:3.25rem;border-radius:.8rem;font-weight:600;box-shadow:0 .45rem 1rem #48317930}.signin-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-inline:0}.signin-button[_ngcontent-%COMP%]   .button-arrow[_ngcontent-%COMP%]{margin-left:auto}.redirect-note[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.4rem;margin-top:.75rem;color:#747b8b;font-size:.72rem}.redirect-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:.9rem;height:.9rem;font-size:.9rem}.divider[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.8rem;margin:1.6rem 0 1rem;color:#8a8e9b;font-size:.64rem;font-weight:700;letter-spacing:.12em}.divider[_ngcontent-%COMP%]:before, .divider[_ngcontent-%COMP%]:after{height:1px;flex:1;background:#ececf1;content:""}.sign-in-steps[_ngcontent-%COMP%]{display:grid;gap:.95rem;margin:0;padding:0;list-style:none}.sign-in-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem}.step-number[_ngcontent-%COMP%]{display:grid;flex:0 0 auto;width:1.55rem;height:1.55rem;place-items:center;border-radius:50%;background:#f1eef8;color:#60449a;font-size:.72rem;font-weight:700}.sign-in-steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .sign-in-steps[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block}.sign-in-steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#343247;font-size:.78rem;font-weight:650}.sign-in-steps[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:.15rem;color:#777d8c;font-size:.72rem;line-height:1.45}.back-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;width:fit-content;margin-top:1.6rem;color:#594180;font-size:.8rem;font-weight:600;text-decoration:none}.back-link[_ngcontent-%COMP%]:hover{color:#302052;text-decoration:underline;text-underline-offset:.2rem}.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1rem;height:1rem;font-size:1rem}.development-note[_ngcontent-%COMP%]{margin:1.5rem 0 0;padding-top:1rem;border-top:1px solid #ececf1;color:#888d9a;font-size:.68rem;line-height:1.55}@media(max-width:760px){.saml-page[_ngcontent-%COMP%]{min-height:100vh;padding:1rem}.saml-shell[_ngcontent-%COMP%]{grid-template-columns:minmax(0,1fr);max-width:34rem}.saml-intro[_ngcontent-%COMP%]{min-height:24rem;padding:1.75rem}.intro-copy[_ngcontent-%COMP%]{padding:3rem 0 2rem}.intro-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2rem,8vw,2.7rem)}.saml-panel[_ngcontent-%COMP%]{padding:2rem clamp(1.5rem,7vw,2.5rem)}}@media(max-width:400px){.saml-page[_ngcontent-%COMP%]{padding:.5rem}.saml-shell[_ngcontent-%COMP%]{border-radius:1rem}}@media(prefers-reduced-motion:reduce){*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{scroll-behavior:auto!important}}']})}}return n})();var uf=["determinateSpinner"];function ff(n,i){if(n&1&&(io(),l(0,"svg",11),x(1,"circle",12),c()),n&2){let e=A();ne("viewBox",e._viewBox()),f(),$t("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),ne("r",e._circleRadius())}}var gf=new T("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:zd})}),zd=100,_f=10,Vd=(()=>{class n{_elementRef=p(H);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=p(gf),t=bo(),o=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=zd;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-_f)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,o){if(t&1&&_e(uf,5),t&2){let r;R(r=I())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,o){t&2&&(ne("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Et("mat-"+o.color),$t("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),W("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",it],diameter:[2,"diameter","diameter",it],strokeWidth:[2,"strokeWidth","strokeWidth",it]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,o){if(t&1&&(me(0,ff,2,8,"ng-template",null,0,mt),l(2,"div",2,1),io(),l(4,"svg",3),x(5,"circle",4),c()(),Ss(),l(6,"div",5)(7,"div",6)(8,"div",7),ro(9,8),c(),l(10,"div",9),ro(11,8),c(),l(12,"div",10),ro(13,8),c()()()),t&2){let r=Kt(1);f(4),ne("viewBox",o._viewBox()),f(),$t("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),ne("r",o._circleRadius()),f(4),N("ngTemplateOutlet",r),f(2),N("ngTemplateOutlet",r),f(2),N("ngTemplateOutlet",r)}},dependencies:[co],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var jd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=$({type:n});static \u0275inj=K({imports:[ue]})}return n})();var yf=(n,i)=>i.name;function bf(n,i){n&1&&(l(0,"mat-card-content",2),x(1,"mat-spinner",3),l(2,"p"),d(3,"Verifying your sign-in and loading your profile..."),c()())}function Cf(n,i){if(n&1){let e=dt();l(0,"mat-card-header")(1,"mat-icon",4),d(2,"error"),c(),l(3,"mat-card-title"),d(4,"Profile unavailable"),c()(),l(5,"mat-card-content")(6,"p",5),d(7),c()(),l(8,"mat-card-actions",6)(9,"button",7),E("click",function(){at(e);let o=A();return st(o.signInAgain())}),l(10,"mat-icon",8),d(11,"login"),c(),d(12," Return to sign in "),c()()}n&2&&(f(7),V(i))}function xf(n,i){if(n&1&&(l(0,"dt"),d(1,"Name ID format"),c(),l(2,"dd"),d(3),c()),n&2){let e=A();f(3),V(e.nameIDFormat)}}function wf(n,i){if(n&1&&(l(0,"dt"),d(1,"Session index"),c(),l(2,"dd"),d(3),c()),n&2){let e=A();f(3),V(e.sessionIndex)}}function Sf(n,i){if(n&1&&(l(0,"dt"),d(1),c(),l(2,"dd"),d(3),c()),n&2){let e=i.$implicit;f(),V(e.name),f(2),V(e.value)}}function Ef(n,i){if(n&1){let e=dt();l(0,"mat-card-header")(1,"mat-icon",9),d(2,"account_circle"),c(),l(3,"mat-card-title"),d(4,"Signed in successfully"),c(),l(5,"mat-card-subtitle"),d(6,"Your verified SAML profile"),c()(),l(7,"mat-card-content")(8,"dl",10)(9,"dt"),d(10,"Name ID"),c(),l(11,"dd"),d(12),c(),l(13,"dt"),d(14,"Identity provider"),c(),l(15,"dd"),d(16),c(),O(17,xf,4,1),O(18,wf,4,1),Yt(19,Sf,4,2,null,null,yf),c()(),l(21,"mat-card-actions",6)(22,"button",11),E("click",function(){at(e);let o=A();return st(o.signOut())}),l(23,"mat-icon",8),d(24,"logout"),c(),d(25," Sign out "),c()()}if(n&2){let e=i,t=A();f(12),V(e.nameID),f(4),V(e.issuer),f(),D(e.nameIDFormat?17:-1),f(),D(e.sessionIndex?18:-1),f(),Qt(t.profileAttributes())}}var Hd=(()=>{class n{constructor(){this.profile=Ce(null),this.loading=Ce(!0),this.errorMessage=Ce(null),this.http=p(ht),this.route=p(Xt);let e=this.route.snapshot.queryParamMap.get("ticket");if(window.history.replaceState(window.history.state,"",window.location.pathname),!e){this.loading.set(!1),this.errorMessage.set("The sign-in result is missing or expired. Please sign in again.");return}let t=hn(ae.saml.profilePath);if(!t){this.loading.set(!1),this.errorMessage.set("SAML is not configured for this environment.");return}this.http.get(`${t}?ticket=${encodeURIComponent(e)}`,{withCredentials:!0}).subscribe({next:o=>this.profile.set(o),error:()=>{this.errorMessage.set("The sign-in result expired or could not be loaded. Please sign in again."),this.loading.set(!1)},complete:()=>this.loading.set(!1)})}profileAttributes(){let e=this.profile()?.attributes??{};return Object.entries(e).map(([t,o])=>({name:t,value:Array.isArray(o)?o.join(", "):o}))}signInAgain(){let e=hn(ae.saml.loginPath);e?window.location.assign(e):this.errorMessage.set("SAML sign-in is not configured for this environment.")}signOut(){this.clearProfileFromHistory();let e=hn(ae.saml.logoutPath);if(console.log("logoutUrl",e),e){let t=document.createElement("form");t.method="POST",t.action=e,document.body.appendChild(t),t.submit()}else this.errorMessage.set("SAML sign-out is not configured for this environment.")}onPageHide(){this.clearProfileFromHistory()}onPageShow(e){e.persisted&&this.clearProfileFromHistory()}clearProfileFromHistory(){this.profile.set(null),this.loading.set(!1),this.errorMessage.set("Your profile is no longer available. Please sign in again.")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=y({type:n,selectors:[["app-saml-profile"]],hostBindings:function(t,o){t&1&&E("pagehide",function(){return o.onPageHide()},Sn)("pageshow",function(a){return o.onPageShow(a)},Sn)},decls:5,vars:1,consts:[[1,"saml-page"],[1,"saml-card"],["role","status",1,"saml-loading"],["diameter","48","aria-label","Verifying your sign-in"],["mat-card-avatar","","aria-hidden","true",1,"saml-error-icon"],["role","alert",1,"saml-error"],["align","end"],["mat-flat-button","","color","primary","type","button",3,"click"],["aria-hidden","true"],["mat-card-avatar","","aria-hidden","true"],[1,"profile-details"],["mat-stroked-button","","type","button",3,"click"]],template:function(t,o){if(t&1&&(l(0,"main",0)(1,"mat-card",1),O(2,bf,4,0,"mat-card-content",2)(3,Cf,13,1)(4,Ef,26,4),c()()),t&2){let r;f(2),D(o.loading()?2:(r=o.errorMessage())?3:(r=o.profile())?4:-1,r)}},dependencies:[we,Ie,Re,xe,Ke,$e,Pe,De,Oe,Te,Ae,Be,jd,Vd],styles:[".saml-page[_ngcontent-%COMP%]{display:grid;min-height:70vh;place-items:center;padding:2rem 1rem;background:#f5f7fb}.saml-card[_ngcontent-%COMP%]{width:min(100%,42rem);padding:1.5rem;border-radius:1rem;box-shadow:0 1rem 2.5rem #18274b1a}.saml-card[_ngcontent-%COMP%]   mat-icon[mat-card-avatar][_ngcontent-%COMP%]{display:grid;place-items:center;color:#3559a8}.saml-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding-top:1.25rem}.saml-loading[_ngcontent-%COMP%]{display:grid;justify-items:center;gap:1rem;padding:2rem 0;color:#4b5565}.profile-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(9rem,.35fr) minmax(0,1fr);gap:.75rem 1rem;margin:0;overflow-wrap:anywhere}.profile-details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:#526078;font-weight:600}.profile-details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;color:#17243b}.saml-error[_ngcontent-%COMP%], .saml-error-icon[_ngcontent-%COMP%]{color:#b42318}.saml-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{padding:0}@media(max-width:36rem){.profile-details[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.3rem}.profile-details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin-bottom:.6rem}}"]})}}return n})();var Ud=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"app",component:fi,children:[{path:"",pathMatch:"full",component:Md}]},{path:"csscourseapp",component:fi,loadChildren:()=>import("./chunk-SC344RTB.js").then(n=>n.CssCourseAppRoutingModule),canActivate:[function(n,i){return console.log(n,"can activate guard ActivatedRouteSnapshot"),console.log(i,"can activate guard state"),!0}],canDeactivate:[function(){return console.log("can deactivate guard"),!0}],canActivateChild:[function(n,i){return console.log(n,"can activate child guard ActivatedRouteSnapshot"),console.log(i,"can activate child guard state"),!0}],canMatch:[Pd],data:{title:"CSS Course App (developer custom data)"},title:"CSS Course App useing title property",providers:[]},{path:"counter",component:Sd,providers:[],children:[{path:"",pathMatch:"full",component:vd}]},{path:"user",component:Ed,children:[{path:"",pathMatch:"full",component:fd}]},{path:"lifecycleMethods",component:Cd},{path:"radiobuttondemo",component:wd},{path:"dialogdemo",component:Go},{path:"radiooptionselector",component:bc},{path:"bookslist",component:Td},{path:"home",component:pd},{path:"onboarding",title:"On Boarding Application",component:fi,loadChildren:()=>import("./chunk-KV5J52VZ.js").then(n=>n.routes)},{path:"portalexample",component:fi,children:[{path:"",pathMatch:"full",component:Od}]},{path:"oauth",component:fi,children:[{path:"",component:Id},{path:"callback",component:Ld},{path:"customer",component:Nd}]},{path:"saml",component:fi,children:[{path:"",pathMatch:"full",component:Bd},{path:"profile",component:Hd},{path:"logout-complete",redirectTo:"/home",pathMatch:"full"}]},{path:"modalpage",component:Dd},{path:"**",component:Cc}];var Mf={count:0},qd=Ni(Mf,Pt(si.increment,n=>({count:n.count+1})),Pt(si.decrement,n=>({count:n.count-1})),Pt(si.reset,n=>({count:0})));var kf={update:ke("[Update] User")},Tf={firstName:"Venu",lastName:"Challa"},Wd=Ni(Tf,Pt(kf.update,n=>(console.log("user state ===> ",n),n)));var Pf={books:[]},Gd=Ni(Pf,Pt(At.loadBooks,n=>(console.log("BooksActions.loadBooks action dispatched, current state:",n),F({},n))),Pt(At.loadBooksSuccess,(n,{books:i})=>(console.log("BooksActions.loadBooksSuccess action dispatched, payload:",i),console.log("Current state before update:",n),ze(F({},n),{books:i}))),Pt(At.loadBooksFailure,(n,{error:i})=>(console.log("BooksActions.loadBooksFailure action dispatched, payload:",i),F({},n))));var Yd={counter:qd,user:Wd,router:ql,books:Gd};var Qd=(()=>{class n{constructor(e){this.httpClient=e}getBooks(){return console.log("getBooks service called"),Ge([{id:1,title:"To Kill a Mockingbird",author:"Harper Lee",publication_year:1960,genre:["Fiction","Classic"],description:"A classic novel depicting racial injustice in the American South.",cover_image:"https://fakeimg.pl/667x1000/cc6600"},{id:2,title:"To Kill a Mockingbird",author:"Harper Lee",publication_year:1962,genre:["Fiction","Classic"],description:"A classic novel depicting racial injustice in the American South.",cover_image:"https://fakeimg.pl/667x1000/cc6600"}])}handleError(e="operation",t){return o=>(console.error(o),this.log(`${e} failed: ${o.message}`),Ge(t))}log(e){console.log(e)}static{this.\u0275fac=function(t){return new(t||n)(z(ht))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Kd=(()=>{class n{constructor(e,t){this.actions$=e,this.BooklistService=t,this.loadBooks$=Dl(()=>this.actions$.pipe(Ll(At.loadBooks),bn(()=>this.BooklistService.getBooks().pipe(Ve(o=>(console.log("BooklistService.getBooks() returned:",o),At.loadBooksSuccess({books:o}))),Pi(o=>(console.error("Error in BooklistService.getBooks():",o),Ge(At.loadBooksFailure({error:o}))))))))}static{this.\u0275fac=function(t){return new(t||n)(z(Fl),z(Qd))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac})}}return n})();var U=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(U||{}),Ct="*";function $d(n,i=null){return{type:U.Sequence,steps:n,options:i}}function fa(n){return{type:U.Style,styles:n,offset:null}}var qt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,e=0){this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},pn=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let e=0,t=0,o=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==r&&this._onFinish()}),a.onDestroy(()=>{++t==r&&this._onDestroy()}),a.onStart(()=>{++o==r&&this._onStart()})}),this.totalTime=this.players.reduce((a,s)=>Math.max(a,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let o=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(o)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Vn="!";function Xd(n){return new J(3e3,!1)}function Df(){return new J(3100,!1)}function Rf(){return new J(3101,!1)}function If(n){return new J(3001,!1)}function Af(n){return new J(3003,!1)}function Ff(n){return new J(3004,!1)}function Jd(n,i){return new J(3005,!1)}function em(){return new J(3006,!1)}function tm(){return new J(3007,!1)}function im(n,i){return new J(3008,!1)}function nm(n){return new J(3002,!1)}function om(n,i,e,t,o){return new J(3010,!1)}function rm(){return new J(3011,!1)}function am(){return new J(3012,!1)}function sm(){return new J(3200,!1)}function lm(){return new J(3202,!1)}function cm(){return new J(3013,!1)}function dm(n){return new J(3014,!1)}function mm(n){return new J(3015,!1)}function hm(n){return new J(3016,!1)}function pm(n,i){return new J(3404,!1)}function Lf(n){return new J(3502,!1)}function um(n){return new J(3503,!1)}function fm(){return new J(3300,!1)}function gm(n){return new J(3504,!1)}function _m(n){return new J(3301,!1)}function vm(n,i){return new J(3302,!1)}function ym(n){return new J(3303,!1)}function bm(n,i){return new J(3400,!1)}function Cm(n){return new J(3401,!1)}function xm(n){return new J(3402,!1)}function wm(n,i){return new J(3505,!1)}function Wt(n){switch(n.length){case 0:return new qt;case 1:return n[0];default:return new pn(n)}}function ya(n,i,e=new Map,t=new Map){let o=[],r=[],a=-1,s=null;if(i.forEach(m=>{let h=m.get("offset"),g=h==a,u=g&&s||new Map;m.forEach((b,C)=>{let _=C,v=b;if(C!=="offset")switch(_=n.normalizePropertyName(_,o),v){case Vn:v=e.get(C);break;case Ct:v=t.get(C);break;default:v=n.normalizeStyleValue(C,_,v,o);break}u.set(_,v)}),g||r.push(u),s=u,a=h}),o.length)throw Lf(o);return r}function Xo(n,i,e,t){switch(i){case"start":n.onStart(()=>t(e&&ga(e,"start",n)));break;case"done":n.onDone(()=>t(e&&ga(e,"done",n)));break;case"destroy":n.onDestroy(()=>t(e&&ga(e,"destroy",n)));break}}function ga(n,i,e){let t=e.totalTime,o=!!e.disabled,r=Zo(n.element,n.triggerName,n.fromState,n.toState,i||n.phaseName,t??n.totalTime,o),a=n._data;return a!=null&&(r._data=a),r}function Zo(n,i,e,t,o="",r=0,a){return{element:n,triggerName:i,fromState:e,toState:t,phaseName:o,totalTime:r,disabled:!!a}}function Ze(n,i,e){let t=n.get(i);return t||n.set(i,t=e),t}function ba(n){let i=n.indexOf(":"),e=n.substring(1,i),t=n.slice(i+1);return[e,t]}var Nf=typeof document>"u"?null:document.documentElement;function Jo(n){let i=n.parentNode||n.host||null;return i===Nf?null:i}function Bf(n){return n.substring(1,6)=="ebkit"}var xi=null,Zd=!1;function Sm(n){xi||(xi=zf()||{},Zd=xi.style?"WebkitAppearance"in xi.style:!1);let i=!0;return xi.style&&!Bf(n)&&(i=n in xi.style,!i&&Zd&&(i="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in xi.style)),i}function zf(){return typeof document<"u"?document.body:null}function Ca(n,i){for(;i;){if(i===n)return!0;i=Jo(i)}return!1}function xa(n,i,e){if(e)return Array.from(n.querySelectorAll(i));let t=n.querySelector(i);return t?[t]:[]}var Vf=1e3,wa="{{",jf="}}",Sa="ng-enter",er="ng-leave",jn="ng-trigger",Hn=".ng-trigger",Ea="ng-animating",tr=".ng-animating";function Ft(n){if(typeof n=="number")return n;let i=n.match(/^(-?[\.\d]+)(m?s)/);return!i||i.length<2?0:_a(parseFloat(i[1]),i[2])}function _a(n,i){return i==="s"?n*Vf:n}function Un(n,i,e){return n.hasOwnProperty("duration")?n:Uf(n,i,e)}var Hf=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Uf(n,i,e){let t,o=0,r="";if(typeof n=="string"){let a=n.match(Hf);if(a===null)return i.push(Xd(n)),{duration:0,delay:0,easing:""};t=_a(parseFloat(a[1]),a[2]);let s=a[3];s!=null&&(o=_a(parseFloat(s),a[4]));let m=a[5];m&&(r=m)}else t=n;if(!e){let a=!1,s=i.length;t<0&&(i.push(Df()),a=!0),o<0&&(i.push(Rf()),a=!0),a&&i.splice(s,0,Xd(n))}return{duration:t,delay:o,easing:r}}function Em(n){return n.length?n[0]instanceof Map?n:n.map(i=>new Map(Object.entries(i))):[]}function xt(n,i,e){i.forEach((t,o)=>{let r=ir(o);e&&!e.has(o)&&e.set(o,n.style[r]),n.style[r]=t})}function li(n,i){i.forEach((e,t)=>{let o=ir(t);n.style[o]=""})}function un(n){return Array.isArray(n)?n.length==1?n[0]:$d(n):n}function Mm(n,i,e){let t=i.params||{},o=Ma(n);o.length&&o.forEach(r=>{t.hasOwnProperty(r)||e.push(If(r))})}var va=new RegExp(`${wa}\\s*(.+?)\\s*${jf}`,"g");function Ma(n){let i=[];if(typeof n=="string"){let e;for(;e=va.exec(n);)i.push(e[1]);va.lastIndex=0}return i}function fn(n,i,e){let t=`${n}`,o=t.replace(va,(r,a)=>{let s=i[a];return s==null&&(e.push(Af(a)),s=""),s.toString()});return o==t?n:o}var qf=/-+([a-z0-9])/g;function ir(n){return n.replace(qf,(...i)=>i[1].toUpperCase())}function km(n,i){return n===0||i===0}function Tm(n,i,e){if(e.size&&i.length){let t=i[0],o=[];if(e.forEach((r,a)=>{t.has(a)||o.push(a),t.set(a,r)}),o.length)for(let r=1;r<i.length;r++){let a=i[r];o.forEach(s=>a.set(s,nr(n,s)))}}return i}function Je(n,i,e){switch(i.type){case U.Trigger:return n.visitTrigger(i,e);case U.State:return n.visitState(i,e);case U.Transition:return n.visitTransition(i,e);case U.Sequence:return n.visitSequence(i,e);case U.Group:return n.visitGroup(i,e);case U.Animate:return n.visitAnimate(i,e);case U.Keyframes:return n.visitKeyframes(i,e);case U.Style:return n.visitStyle(i,e);case U.Reference:return n.visitReference(i,e);case U.AnimateChild:return n.visitAnimateChild(i,e);case U.AnimateRef:return n.visitAnimateRef(i,e);case U.Query:return n.visitQuery(i,e);case U.Stagger:return n.visitStagger(i,e);default:throw Ff(i.type)}}function nr(n,i){return window.getComputedStyle(n)[i]}var Ua=(()=>{class n{validateStyleProperty(e){return Sm(e)}containsElement(e,t){return Ca(e,t)}getParentElement(e){return Jo(e)}query(e,t,o){return xa(e,t,o)}computeStyle(e,t,o){return o||""}animate(e,t,o,r,a,s=[],m){return new qt(o,r)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})(),Si=class{static NOOP=new Ua},Ei=class{};var Wf=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),lr=class extends Ei{normalizePropertyName(i,e){return ir(i)}normalizeStyleValue(i,e,t,o){let r="",a=t.toString().trim();if(Wf.has(e)&&t!==0&&t!=="0")if(typeof t=="number")r="px";else{let s=t.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&o.push(Jd(i,t))}return a+r}};var cr="*";function Gf(n,i){let e=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(t=>Yf(t,e,i)):e.push(n),e}function Yf(n,i,e){if(n[0]==":"){let m=Qf(n,e);if(typeof m=="function"){i.push(m);return}n=m}let t=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(t==null||t.length<4)return e.push(mm(n)),i;let o=t[1],r=t[2],a=t[3];i.push(Pm(o,a));let s=o==cr&&a==cr;r[0]=="<"&&!s&&i.push(Pm(a,o))}function Qf(n,i){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return i.push(hm(n)),"* => *"}}var or=new Set(["true","1"]),rr=new Set(["false","0"]);function Pm(n,i){let e=or.has(n)||rr.has(n),t=or.has(i)||rr.has(i);return(o,r)=>{let a=n==cr||n==o,s=i==cr||i==r;return!a&&e&&typeof o=="boolean"&&(a=o?or.has(n):rr.has(n)),!s&&t&&typeof r=="boolean"&&(s=r?or.has(i):rr.has(i)),a&&s}}var zm=":self",Kf=new RegExp(`s*${zm}s*,?`,"g");function Vm(n,i,e,t){return new Ra(n).build(i,e,t)}var Om="",Ra=class{_driver;constructor(i){this._driver=i}build(i,e,t){let o=new Ia(e);return this._resetContextStyleTimingState(o),Je(this,un(i),o)}_resetContextStyleTimingState(i){i.currentQuerySelector=Om,i.collectedStyles=new Map,i.collectedStyles.set(Om,new Map),i.currentTime=0}visitTrigger(i,e){let t=e.queryCount=0,o=e.depCount=0,r=[],a=[];return i.name.charAt(0)=="@"&&e.errors.push(em()),i.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==U.State){let m=s,h=m.name;h.toString().split(/\s*,\s*/).forEach(g=>{m.name=g,r.push(this.visitState(m,e))}),m.name=h}else if(s.type==U.Transition){let m=this.visitTransition(s,e);t+=m.queryCount,o+=m.depCount,a.push(m)}else e.errors.push(tm())}),{type:U.Trigger,name:i.name,states:r,transitions:a,queryCount:t,depCount:o,options:null}}visitState(i,e){let t=this.visitStyle(i.styles,e),o=i.options&&i.options.params||null;if(t.containsDynamicStyles){let r=new Set,a=o||{};t.styles.forEach(s=>{s instanceof Map&&s.forEach(m=>{Ma(m).forEach(h=>{a.hasOwnProperty(h)||r.add(h)})})}),r.size&&e.errors.push(im(i.name,[...r.values()]))}return{type:U.State,name:i.name,style:t,options:o?{params:o}:null}}visitTransition(i,e){e.queryCount=0,e.depCount=0;let t=Je(this,un(i.animation),e),o=Gf(i.expr,e.errors);return{type:U.Transition,matchers:o,animation:t,queryCount:e.queryCount,depCount:e.depCount,options:wi(i.options)}}visitSequence(i,e){return{type:U.Sequence,steps:i.steps.map(t=>Je(this,t,e)),options:wi(i.options)}}visitGroup(i,e){let t=e.currentTime,o=0,r=i.steps.map(a=>{e.currentTime=t;let s=Je(this,a,e);return o=Math.max(o,e.currentTime),s});return e.currentTime=o,{type:U.Group,steps:r,options:wi(i.options)}}visitAnimate(i,e){let t=Jf(i.timings,e.errors);e.currentAnimateTimings=t;let o,r=i.styles?i.styles:fa({});if(r.type==U.Keyframes)o=this.visitKeyframes(r,e);else{let a=i.styles,s=!1;if(!a){s=!0;let h={};t.easing&&(h.easing=t.easing),a=fa(h)}e.currentTime+=t.duration+t.delay;let m=this.visitStyle(a,e);m.isEmptyStep=s,o=m}return e.currentAnimateTimings=null,{type:U.Animate,timings:t,style:o,options:null}}visitStyle(i,e){let t=this._makeStyleAst(i,e);return this._validateStyleAst(t,e),t}_makeStyleAst(i,e){let t=[],o=Array.isArray(i.styles)?i.styles:[i.styles];for(let s of o)typeof s=="string"?s===Ct?t.push(s):e.errors.push(nm(s)):t.push(new Map(Object.entries(s)));let r=!1,a=null;return t.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(a=s.get("easing"),s.delete("easing")),!r)){for(let m of s.values())if(m.toString().indexOf(wa)>=0){r=!0;break}}}),{type:U.Style,styles:t,easing:a,offset:i.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(i,e){let t=e.currentAnimateTimings,o=e.currentTime,r=e.currentTime;t&&r>0&&(r-=t.duration+t.delay),i.styles.forEach(a=>{typeof a!="string"&&a.forEach((s,m)=>{let h=e.collectedStyles.get(e.currentQuerySelector),g=h.get(m),u=!0;g&&(r!=o&&r>=g.startTime&&o<=g.endTime&&(e.errors.push(om(m,g.startTime,g.endTime,r,o)),u=!1),r=g.startTime),u&&h.set(m,{startTime:r,endTime:o}),e.options&&Mm(s,e.options,e.errors)})})}visitKeyframes(i,e){let t={type:U.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(rm()),t;let o=1,r=0,a=[],s=!1,m=!1,h=0,g=i.steps.map(G=>{let oe=this._makeStyleAst(G,e),se=oe.offset!=null?oe.offset:Zf(oe.styles),B=0;return se!=null&&(r++,B=oe.offset=se),m=m||B<0||B>1,s=s||B<h,h=B,a.push(B),oe});m&&e.errors.push(am()),s&&e.errors.push(sm());let u=i.steps.length,b=0;r>0&&r<u?e.errors.push(lm()):r==0&&(b=o/(u-1));let C=u-1,_=e.currentTime,v=e.currentAnimateTimings,q=v.duration;return g.forEach((G,oe)=>{let se=b>0?oe==C?1:b*oe:a[oe],B=se*q;e.currentTime=_+v.delay+B,v.duration=B,this._validateStyleAst(G,e),G.offset=se,t.styles.push(G)}),t}visitReference(i,e){return{type:U.Reference,animation:Je(this,un(i.animation),e),options:wi(i.options)}}visitAnimateChild(i,e){return e.depCount++,{type:U.AnimateChild,options:wi(i.options)}}visitAnimateRef(i,e){return{type:U.AnimateRef,animation:this.visitReference(i.animation,e),options:wi(i.options)}}visitQuery(i,e){let t=e.currentQuerySelector,o=i.options||{};e.queryCount++,e.currentQuery=i;let[r,a]=$f(i.selector);e.currentQuerySelector=t.length?t+" "+r:r,Ze(e.collectedStyles,e.currentQuerySelector,new Map);let s=Je(this,un(i.animation),e);return e.currentQuery=null,e.currentQuerySelector=t,{type:U.Query,selector:r,limit:o.limit||0,optional:!!o.optional,includeSelf:a,animation:s,originalSelector:i.selector,options:wi(i.options)}}visitStagger(i,e){e.currentQuery||e.errors.push(cm());let t=i.timings==="full"?{duration:0,delay:0,easing:"full"}:Un(i.timings,e.errors,!0);return{type:U.Stagger,animation:Je(this,un(i.animation),e),timings:t,options:null}}};function $f(n){let i=!!n.split(/\s*,\s*/).find(e=>e==zm);return i&&(n=n.replace(Kf,"")),n=n.replace(/@\*/g,Hn).replace(/@\w+/g,e=>Hn+"-"+e.slice(1)).replace(/:animating/g,tr),[n,i]}function Xf(n){return n?F({},n):null}var Ia=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(i){this.errors=i}};function Zf(n){if(typeof n=="string")return null;let i=null;if(Array.isArray(n))n.forEach(e=>{if(e instanceof Map&&e.has("offset")){let t=e;i=parseFloat(t.get("offset")),t.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let e=n;i=parseFloat(e.get("offset")),e.delete("offset")}return i}function Jf(n,i){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let r=Un(n,i).duration;return ka(r,0,"")}let e=n;if(e.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=ka(0,0,"");return r.dynamic=!0,r.strValue=e,r}let o=Un(e,i);return ka(o.duration,o.delay,o.easing)}function wi(n){return n?(n=F({},n),n.params&&(n.params=Xf(n.params))):n={},n}function ka(n,i,e){return{duration:n,delay:i,easing:e}}function qa(n,i,e,t,o,r,a=null,s=!1){return{type:1,element:n,keyframes:i,preStyleProps:e,postStyleProps:t,duration:o,delay:r,totalTime:o+r,easing:a,subTimeline:s}}var Wn=class{_map=new Map;get(i){return this._map.get(i)||[]}append(i,e){let t=this._map.get(i);t||this._map.set(i,t=[]),t.push(...e)}has(i){return this._map.has(i)}clear(){this._map.clear()}},eg=1,tg=":enter",ig=new RegExp(tg,"g"),ng=":leave",og=new RegExp(ng,"g");function jm(n,i,e,t,o,r=new Map,a=new Map,s,m,h=[]){return new Aa().buildKeyframes(n,i,e,t,o,r,a,s,m,h)}var Aa=class{buildKeyframes(i,e,t,o,r,a,s,m,h,g=[]){h=h||new Wn;let u=new Fa(i,e,h,o,r,g,[]);u.options=m;let b=m.delay?Ft(m.delay):0;u.currentTimeline.delayNextStep(b),u.currentTimeline.setStyles([a],null,u.errors,m),Je(this,t,u);let C=u.timelines.filter(_=>_.containsAnimation());if(C.length&&s.size){let _;for(let v=C.length-1;v>=0;v--){let q=C[v];if(q.element===e){_=q;break}}_&&!_.allowOnlyTimelineStyles()&&_.setStyles([s],null,u.errors,m)}return C.length?C.map(_=>_.buildKeyframes()):[qa(e,[],[],[],0,b,"",!1)]}visitTrigger(i,e){}visitState(i,e){}visitTransition(i,e){}visitAnimateChild(i,e){let t=e.subInstructions.get(e.element);if(t){let o=e.createSubContext(i.options),r=e.currentTimeline.currentTime,a=this._visitSubInstructions(t,o,o.options);r!=a&&e.transformIntoNewTimeline(a)}e.previousNode=i}visitAnimateRef(i,e){let t=e.createSubContext(i.options);t.transformIntoNewTimeline(),this._applyAnimationRefDelays([i.options,i.animation.options],e,t),this.visitReference(i.animation,t),e.transformIntoNewTimeline(t.currentTimeline.currentTime),e.previousNode=i}_applyAnimationRefDelays(i,e,t){for(let o of i){let r=o?.delay;if(r){let a=typeof r=="number"?r:Ft(fn(r,o?.params??{},e.errors));t.delayNextStep(a)}}}_visitSubInstructions(i,e,t){let r=e.currentTimeline.currentTime,a=t.duration!=null?Ft(t.duration):null,s=t.delay!=null?Ft(t.delay):null;return a!==0&&i.forEach(m=>{let h=e.appendInstructionToTimeline(m,a,s);r=Math.max(r,h.duration+h.delay)}),r}visitReference(i,e){e.updateOptions(i.options,!0),Je(this,i.animation,e),e.previousNode=i}visitSequence(i,e){let t=e.subContextCount,o=e,r=i.options;if(r&&(r.params||r.delay)&&(o=e.createSubContext(r),o.transformIntoNewTimeline(),r.delay!=null)){o.previousNode.type==U.Style&&(o.currentTimeline.snapshotCurrentStyles(),o.previousNode=dr);let a=Ft(r.delay);o.delayNextStep(a)}i.steps.length&&(i.steps.forEach(a=>Je(this,a,o)),o.currentTimeline.applyStylesToKeyframe(),o.subContextCount>t&&o.transformIntoNewTimeline()),e.previousNode=i}visitGroup(i,e){let t=[],o=e.currentTimeline.currentTime,r=i.options&&i.options.delay?Ft(i.options.delay):0;i.steps.forEach(a=>{let s=e.createSubContext(i.options);r&&s.delayNextStep(r),Je(this,a,s),o=Math.max(o,s.currentTimeline.currentTime),t.push(s.currentTimeline)}),t.forEach(a=>e.currentTimeline.mergeTimelineCollectedStyles(a)),e.transformIntoNewTimeline(o),e.previousNode=i}_visitTiming(i,e){if(i.dynamic){let t=i.strValue,o=e.params?fn(t,e.params,e.errors):t;return Un(o,e.errors)}else return{duration:i.duration,delay:i.delay,easing:i.easing}}visitAnimate(i,e){let t=e.currentAnimateTimings=this._visitTiming(i.timings,e),o=e.currentTimeline;t.delay&&(e.incrementTime(t.delay),o.snapshotCurrentStyles());let r=i.style;r.type==U.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(t.duration),this.visitStyle(r,e),o.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=i}visitStyle(i,e){let t=e.currentTimeline,o=e.currentAnimateTimings;!o&&t.hasCurrentStyleProperties()&&t.forwardFrame();let r=o&&o.easing||i.easing;i.isEmptyStep?t.applyEmptyStep(r):t.setStyles(i.styles,r,e.errors,e.options),e.previousNode=i}visitKeyframes(i,e){let t=e.currentAnimateTimings,o=e.currentTimeline.duration,r=t.duration,s=e.createSubContext().currentTimeline;s.easing=t.easing,i.styles.forEach(m=>{let h=m.offset||0;s.forwardTime(h*r),s.setStyles(m.styles,m.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(o+r),e.previousNode=i}visitQuery(i,e){let t=e.currentTimeline.currentTime,o=i.options||{},r=o.delay?Ft(o.delay):0;r&&(e.previousNode.type===U.Style||t==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=dr);let a=t,s=e.invokeQuery(i.selector,i.originalSelector,i.limit,i.includeSelf,!!o.optional,e.errors);e.currentQueryTotal=s.length;let m=null;s.forEach((h,g)=>{e.currentQueryIndex=g;let u=e.createSubContext(i.options,h);r&&u.delayNextStep(r),h===e.element&&(m=u.currentTimeline),Je(this,i.animation,u),u.currentTimeline.applyStylesToKeyframe();let b=u.currentTimeline.currentTime;a=Math.max(a,b)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(a),m&&(e.currentTimeline.mergeTimelineCollectedStyles(m),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=i}visitStagger(i,e){let t=e.parentContext,o=e.currentTimeline,r=i.timings,a=Math.abs(r.duration),s=a*(e.currentQueryTotal-1),m=a*e.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":m=s-m;break;case"full":m=t.currentStaggerTime;break}let g=e.currentTimeline;m&&g.delayNextStep(m);let u=g.currentTime;Je(this,i.animation,e),e.previousNode=i,t.currentStaggerTime=o.currentTime-u+(o.startTime-t.currentTimeline.startTime)}},dr={},Fa=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=dr;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(i,e,t,o,r,a,s,m){this._driver=i,this.element=e,this.subInstructions=t,this._enterClassName=o,this._leaveClassName=r,this.errors=a,this.timelines=s,this.currentTimeline=m||new mr(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(i,e){if(!i)return;let t=i,o=this.options;t.duration!=null&&(o.duration=Ft(t.duration)),t.delay!=null&&(o.delay=Ft(t.delay));let r=t.params;if(r){let a=o.params;a||(a=this.options.params={}),Object.keys(r).forEach(s=>{(!e||!a.hasOwnProperty(s))&&(a[s]=fn(r[s],a,this.errors))})}}_copyOptions(){let i={};if(this.options){let e=this.options.params;if(e){let t=i.params={};Object.keys(e).forEach(o=>{t[o]=e[o]})}}return i}createSubContext(i=null,e,t){let o=e||this.element,r=new n(this._driver,o,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(o,t||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(i),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(i){return this.previousNode=dr,this.currentTimeline=this.currentTimeline.fork(this.element,i),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(i,e,t){let o={duration:e??i.duration,delay:this.currentTimeline.currentTime+(t??0)+i.delay,easing:""},r=new La(this._driver,i.element,i.keyframes,i.preStyleProps,i.postStyleProps,o,i.stretchStartingKeyframe);return this.timelines.push(r),o}incrementTime(i){this.currentTimeline.forwardTime(this.currentTimeline.duration+i)}delayNextStep(i){i>0&&this.currentTimeline.delayNextStep(i)}invokeQuery(i,e,t,o,r,a){let s=[];if(o&&s.push(this.element),i.length>0){i=i.replace(ig,"."+this._enterClassName),i=i.replace(og,"."+this._leaveClassName);let m=t!=1,h=this._driver.query(this.element,i,m);t!==0&&(h=t<0?h.slice(h.length+t,h.length):h.slice(0,t)),s.push(...h)}return!r&&s.length==0&&a.push(dm(e)),s}},mr=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(i,e,t,o){this._driver=i,this.element=e,this.startTime=t,this._elementTimelineStylesLookup=o,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(i){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+i),e&&this.snapshotCurrentStyles()):this.startTime+=i}fork(i,e){return this.applyStylesToKeyframe(),new n(this._driver,i,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=eg,this._loadKeyframe()}forwardTime(i){this.applyStylesToKeyframe(),this.duration=i,this._loadKeyframe()}_updateStyle(i,e){this._localTimelineStyles.set(i,e),this._globalTimelineStyles.set(i,e),this._styleSummary.set(i,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(i){i&&this._previousKeyframe.set("easing",i);for(let[e,t]of this._globalTimelineStyles)this._backFill.set(e,t||Ct),this._currentKeyframe.set(e,Ct);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(i,e,t,o){e&&this._previousKeyframe.set("easing",e);let r=o&&o.params||{},a=rg(i,this._globalTimelineStyles);for(let[s,m]of a){let h=fn(m,r,t);this._pendingStyles.set(s,h),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??Ct),this._updateStyle(s,h)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((i,e)=>{this._currentKeyframe.set(e,i)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((i,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,i)}))}snapshotCurrentStyles(){for(let[i,e]of this._localTimelineStyles)this._pendingStyles.set(i,e),this._updateStyle(i,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let i=[];for(let e in this._currentKeyframe)i.push(e);return i}mergeTimelineCollectedStyles(i){i._styleSummary.forEach((e,t)=>{let o=this._styleSummary.get(t);(!o||e.time>o.time)&&this._updateStyle(t,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let i=new Set,e=new Set,t=this._keyframes.size===1&&this.duration===0,o=[];this._keyframes.forEach((s,m)=>{let h=new Map([...this._backFill,...s]);h.forEach((g,u)=>{g===Vn?i.add(u):g===Ct&&e.add(u)}),t||h.set("offset",m/this.duration),o.push(h)});let r=[...i.values()],a=[...e.values()];if(t){let s=o[0],m=new Map(s);s.set("offset",0),m.set("offset",1),o=[s,m]}return qa(this.element,o,r,a,this.duration,this.startTime,this.easing,!1)}},La=class extends mr{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(i,e,t,o,r,a,s=!1){super(i,e,a.delay),this.keyframes=t,this.preStyleProps=o,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:a.duration,delay:a.delay,easing:a.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let i=this.keyframes,{delay:e,duration:t,easing:o}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],a=t+e,s=e/a,m=new Map(i[0]);m.set("offset",0),r.push(m);let h=new Map(i[0]);h.set("offset",Dm(s)),r.push(h);let g=i.length-1;for(let u=1;u<=g;u++){let b=new Map(i[u]),C=b.get("offset"),_=e+C*t;b.set("offset",Dm(_/a)),r.push(b)}t=a,e=0,o="",i=r}return qa(this.element,i,this.preStyleProps,this.postStyleProps,t,e,o,!0)}};function Dm(n,i=3){let e=Math.pow(10,i-1);return Math.round(n*e)/e}function rg(n,i){let e=new Map,t;return n.forEach(o=>{if(o==="*"){t??=i.keys();for(let r of t)e.set(r,Ct)}else for(let[r,a]of o)e.set(r,a)}),e}function Rm(n,i,e,t,o,r,a,s,m,h,g,u,b){return{type:0,element:n,triggerName:i,isRemovalTransition:o,fromState:e,fromStyles:r,toState:t,toStyles:a,timelines:s,queriedElements:m,preStyleProps:h,postStyleProps:g,totalTime:u,errors:b}}var Ta={},hr=class{_triggerName;ast;_stateStyles;constructor(i,e,t){this._triggerName=i,this.ast=e,this._stateStyles=t}match(i,e,t,o){return ag(this.ast.matchers,i,e,t,o)}buildStyles(i,e,t){let o=this._stateStyles.get("*");return i!==void 0&&(o=this._stateStyles.get(i?.toString())||o),o?o.buildStyles(e,t):new Map}build(i,e,t,o,r,a,s,m,h,g){let u=[],b=this.ast.options&&this.ast.options.params||Ta,C=s&&s.params||Ta,_=this.buildStyles(t,C,u),v=m&&m.params||Ta,q=this.buildStyles(o,v,u),G=new Set,oe=new Map,se=new Map,B=o==="void",re={params:Hm(v,b),delay:this.ast.options?.delay},X=g?[]:jm(i,e,this.ast.animation,r,a,_,q,re,h,u),he=0;return X.forEach(le=>{he=Math.max(le.duration+le.delay,he)}),u.length?Rm(e,this._triggerName,t,o,B,_,q,[],[],oe,se,he,u):(X.forEach(le=>{let ft=le.element,Mi=Ze(oe,ft,new Set);le.preStyleProps.forEach(ci=>Mi.add(ci));let as=Ze(se,ft,new Set);le.postStyleProps.forEach(ci=>as.add(ci)),ft!==e&&G.add(ft)}),Rm(e,this._triggerName,t,o,B,_,q,X,[...G.values()],oe,se,he))}};function ag(n,i,e,t,o){return n.some(r=>r(i,e,t,o))}function Hm(n,i){let e=F({},i);return Object.entries(n).forEach(([t,o])=>{o!=null&&(e[t]=o)}),e}var Na=class{styles;defaultParams;normalizer;constructor(i,e,t){this.styles=i,this.defaultParams=e,this.normalizer=t}buildStyles(i,e){let t=new Map,o=Hm(i,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((a,s)=>{a&&(a=fn(a,o,e));let m=this.normalizer.normalizePropertyName(s,e);a=this.normalizer.normalizeStyleValue(s,m,a,e),t.set(s,a)})}),t}};function sg(n,i,e){return new Ba(n,i,e)}var Ba=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(i,e,t){this.name=i,this.ast=e,this._normalizer=t,e.states.forEach(o=>{let r=o.options&&o.options.params||{};this.states.set(o.name,new Na(o.style,r,t))}),Im(this.states,"true","1"),Im(this.states,"false","0"),e.transitions.forEach(o=>{this.transitionFactories.push(new hr(i,o,this.states))}),this.fallbackTransition=lg(i,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(i,e,t,o){return this.transitionFactories.find(a=>a.match(i,e,t,o))||null}matchStyles(i,e,t){return this.fallbackTransition.buildStyles(i,e,t)}};function lg(n,i,e){let t=[(a,s)=>!0],o={type:U.Sequence,steps:[],options:null},r={type:U.Transition,animation:o,matchers:t,options:null,queryCount:0,depCount:0};return new hr(n,r,i)}function Im(n,i,e){n.has(i)?n.has(e)||n.set(e,n.get(i)):n.has(e)&&n.set(i,n.get(e))}var cg=new Wn,za=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(i,e,t){this.bodyNode=i,this._driver=e,this._normalizer=t}register(i,e){let t=[],o=[],r=Vm(this._driver,e,t,o);if(t.length)throw um(t);this._animations.set(i,r)}_buildPlayer(i,e,t){let o=i.element,r=ya(this._normalizer,i.keyframes,e,t);return this._driver.animate(o,r,i.duration,i.delay,i.easing,[],!0)}create(i,e,t={}){let o=[],r=this._animations.get(i),a,s=new Map;if(r?(a=jm(this._driver,e,r,Sa,er,new Map,new Map,t,cg,o),a.forEach(g=>{let u=Ze(s,g.element,new Map);g.postStyleProps.forEach(b=>u.set(b,null))})):(o.push(fm()),a=[]),o.length)throw gm(o);s.forEach((g,u)=>{g.forEach((b,C)=>{g.set(C,this._driver.computeStyle(u,C,Ct))})});let m=a.map(g=>{let u=s.get(g.element);return this._buildPlayer(g,new Map,u)}),h=Wt(m);return this._playersById.set(i,h),h.onDestroy(()=>this.destroy(i)),this.players.push(h),h}destroy(i){let e=this._getPlayer(i);e.destroy(),this._playersById.delete(i);let t=this.players.indexOf(e);t>=0&&this.players.splice(t,1)}_getPlayer(i){let e=this._playersById.get(i);if(!e)throw _m(i);return e}listen(i,e,t,o){let r=Zo(e,"","","");return Xo(this._getPlayer(i),t,r,o),()=>{}}command(i,e,t,o){if(t=="register"){this.register(i,o[0]);return}if(t=="create"){let a=o[0]||{};this.create(i,e,a);return}let r=this._getPlayer(i);switch(t){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(o[0]));break;case"destroy":this.destroy(i);break}}},Am="ng-animate-queued",dg=".ng-animate-queued",Pa="ng-animate-disabled",mg=".ng-animate-disabled",hg="ng-star-inserted",pg=".ng-star-inserted",ug=[],Um={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},fg={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},wt="__ng_removed",Gn=class{namespaceId;value;options;get params(){return this.options.params}constructor(i,e=""){this.namespaceId=e;let t=i&&i.hasOwnProperty("value"),o=t?i.value:i;if(this.value=_g(o),t){let r=i,{value:a}=r,s=ds(r,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(i){let e=i.params;if(e){let t=this.options.params;Object.keys(e).forEach(o=>{t[o]==null&&(t[o]=e[o])})}}},qn="void",Oa=new Gn(qn),Va=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(i,e,t){this.id=i,this.hostElement=e,this._engine=t,this._hostClassName="ng-tns-"+i,ut(e,this._hostClassName)}listen(i,e,t,o){if(!this._triggers.has(e))throw vm(t,e);if(t==null||t.length==0)throw ym(e);if(!vg(t))throw bm(t,e);let r=Ze(this._elementListeners,i,[]),a={name:e,phase:t,callback:o};r.push(a);let s=Ze(this._engine.statesByElement,i,new Map);return s.has(e)||(ut(i,jn),ut(i,jn+"-"+e),s.set(e,Oa)),()=>{this._engine.afterFlush(()=>{let m=r.indexOf(a);m>=0&&r.splice(m,1),this._triggers.has(e)||s.delete(e)})}}register(i,e){return this._triggers.has(i)?!1:(this._triggers.set(i,e),!0)}_getTrigger(i){let e=this._triggers.get(i);if(!e)throw Cm(i);return e}trigger(i,e,t,o=!0){let r=this._getTrigger(e),a=new Yn(this.id,e,i),s=this._engine.statesByElement.get(i);s||(ut(i,jn),ut(i,jn+"-"+e),this._engine.statesByElement.set(i,s=new Map));let m=s.get(e),h=new Gn(t,this.id);if(!(t&&t.hasOwnProperty("value"))&&m&&h.absorbOptions(m.options),s.set(e,h),m||(m=Oa),!(h.value===qn)&&m.value===h.value){if(!Cg(m.params,h.params)){let v=[],q=r.matchStyles(m.value,m.params,v),G=r.matchStyles(h.value,h.params,v);v.length?this._engine.reportError(v):this._engine.afterFlush(()=>{li(i,q),xt(i,G)})}return}let b=Ze(this._engine.playersByElement,i,[]);b.forEach(v=>{v.namespaceId==this.id&&v.triggerName==e&&v.queued&&v.destroy()});let C=r.matchTransition(m.value,h.value,i,h.params),_=!1;if(!C){if(!o)return;C=r.fallbackTransition,_=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:e,transition:C,fromState:m,toState:h,player:a,isFallbackTransition:_}),_||(ut(i,Am),a.onStart(()=>{gn(i,Am)})),a.onDone(()=>{let v=this.players.indexOf(a);v>=0&&this.players.splice(v,1);let q=this._engine.playersByElement.get(i);if(q){let G=q.indexOf(a);G>=0&&q.splice(G,1)}}),this.players.push(a),b.push(a),a}deregister(i){this._triggers.delete(i),this._engine.statesByElement.forEach(e=>e.delete(i)),this._elementListeners.forEach((e,t)=>{this._elementListeners.set(t,e.filter(o=>o.name!=i))})}clearElementCache(i){this._engine.statesByElement.delete(i),this._elementListeners.delete(i);let e=this._engine.playersByElement.get(i);e&&(e.forEach(t=>t.destroy()),this._engine.playersByElement.delete(i))}_signalRemovalForInnerTriggers(i,e){let t=this._engine.driver.query(i,Hn,!0);t.forEach(o=>{if(o[wt])return;let r=this._engine.fetchNamespacesByElement(o);r.size?r.forEach(a=>a.triggerLeaveAnimation(o,e,!1,!0)):this.clearElementCache(o)}),this._engine.afterFlushAnimationsDone(()=>t.forEach(o=>this.clearElementCache(o)))}triggerLeaveAnimation(i,e,t,o){let r=this._engine.statesByElement.get(i),a=new Map;if(r){let s=[];if(r.forEach((m,h)=>{if(a.set(h,m.value),this._triggers.has(h)){let g=this.trigger(i,h,qn,o);g&&s.push(g)}}),s.length)return this._engine.markElementAsRemoved(this.id,i,!0,e,a),t&&Wt(s).onDone(()=>this._engine.processLeaveNode(i)),!0}return!1}prepareLeaveAnimationListeners(i){let e=this._elementListeners.get(i),t=this._engine.statesByElement.get(i);if(e&&t){let o=new Set;e.forEach(r=>{let a=r.name;if(o.has(a))return;o.add(a);let m=this._triggers.get(a).fallbackTransition,h=t.get(a)||Oa,g=new Gn(qn),u=new Yn(this.id,a,i);this._engine.totalQueuedPlayers++,this._queue.push({element:i,triggerName:a,transition:m,fromState:h,toState:g,player:u,isFallbackTransition:!0})})}}removeNode(i,e){let t=this._engine;if(i.childElementCount&&this._signalRemovalForInnerTriggers(i,e),this.triggerLeaveAnimation(i,e,!0))return;let o=!1;if(t.totalAnimations){let r=t.players.length?t.playersByQueriedElement.get(i):[];if(r&&r.length)o=!0;else{let a=i;for(;a=a.parentNode;)if(t.statesByElement.get(a)){o=!0;break}}}if(this.prepareLeaveAnimationListeners(i),o)t.markElementAsRemoved(this.id,i,!1,e);else{let r=i[wt];(!r||r===Um)&&(t.afterFlush(()=>this.clearElementCache(i)),t.destroyInnerAnimations(i),t._onRemovalComplete(i,e))}}insertNode(i,e){ut(i,this._hostClassName)}drainQueuedTransitions(i){let e=[];return this._queue.forEach(t=>{let o=t.player;if(o.destroyed)return;let r=t.element,a=this._elementListeners.get(r);a&&a.forEach(s=>{if(s.name==t.triggerName){let m=Zo(r,t.triggerName,t.fromState.value,t.toState.value);m._data=i,Xo(t.player,s.phase,m,s.callback)}}),o.markedForDestroy?this._engine.afterFlush(()=>{o.destroy()}):e.push(t)}),this._queue=[],e.sort((t,o)=>{let r=t.transition.ast.depCount,a=o.transition.ast.depCount;return r==0||a==0?r-a:this._engine.driver.containsElement(t.element,o.element)?1:-1})}destroy(i){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,i)}},ja=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(i,e)=>{};_onRemovalComplete(i,e){this.onRemovalComplete(i,e)}constructor(i,e,t){this.bodyNode=i,this.driver=e,this._normalizer=t}get queuedPlayers(){let i=[];return this._namespaceList.forEach(e=>{e.players.forEach(t=>{t.queued&&i.push(t)})}),i}createNamespace(i,e){let t=new Va(i,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(t,e):(this.newHostElements.set(e,t),this.collectEnterElement(e)),this._namespaceLookup[i]=t}_balanceNamespaceList(i,e){let t=this._namespaceList,o=this.namespacesByHostElement;if(t.length-1>=0){let a=!1,s=this.driver.getParentElement(e);for(;s;){let m=o.get(s);if(m){let h=t.indexOf(m);t.splice(h+1,0,i),a=!0;break}s=this.driver.getParentElement(s)}a||t.unshift(i)}else t.push(i);return o.set(e,i),i}register(i,e){let t=this._namespaceLookup[i];return t||(t=this.createNamespace(i,e)),t}registerTrigger(i,e,t){let o=this._namespaceLookup[i];o&&o.register(e,t)&&this.totalAnimations++}destroy(i,e){i&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let t=this._fetchNamespace(i);this.namespacesByHostElement.delete(t.hostElement);let o=this._namespaceList.indexOf(t);o>=0&&this._namespaceList.splice(o,1),t.destroy(e),delete this._namespaceLookup[i]}))}_fetchNamespace(i){return this._namespaceLookup[i]}fetchNamespacesByElement(i){let e=new Set,t=this.statesByElement.get(i);if(t){for(let o of t.values())if(o.namespaceId){let r=this._fetchNamespace(o.namespaceId);r&&e.add(r)}}return e}trigger(i,e,t,o){if(ar(e)){let r=this._fetchNamespace(i);if(r)return r.trigger(e,t,o),!0}return!1}insertNode(i,e,t,o){if(!ar(e))return;let r=e[wt];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let a=this.collectedLeaveElements.indexOf(e);a>=0&&this.collectedLeaveElements.splice(a,1)}if(i){let a=this._fetchNamespace(i);a&&a.insertNode(e,t)}o&&this.collectEnterElement(e)}collectEnterElement(i){this.collectedEnterElements.push(i)}markElementAsDisabled(i,e){e?this.disabledNodes.has(i)||(this.disabledNodes.add(i),ut(i,Pa)):this.disabledNodes.has(i)&&(this.disabledNodes.delete(i),gn(i,Pa))}removeNode(i,e,t){if(ar(e)){let o=i?this._fetchNamespace(i):null;o?o.removeNode(e,t):this.markElementAsRemoved(i,e,!1,t);let r=this.namespacesByHostElement.get(e);r&&r.id!==i&&r.removeNode(e,t)}else this._onRemovalComplete(e,t)}markElementAsRemoved(i,e,t,o,r){this.collectedLeaveElements.push(e),e[wt]={namespaceId:i,setForRemoval:o,hasAnimation:t,removedBeforeQueried:!1,previousTriggersValues:r}}listen(i,e,t,o,r){return ar(e)?this._fetchNamespace(i).listen(e,t,o,r):()=>{}}_buildInstruction(i,e,t,o,r){return i.transition.build(this.driver,i.element,i.fromState.value,i.toState.value,t,o,i.fromState.options,i.toState.options,e,r)}destroyInnerAnimations(i){let e=this.driver.query(i,Hn,!0);e.forEach(t=>this.destroyActiveAnimationsForElement(t)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(i,tr,!0),e.forEach(t=>this.finishActiveQueriedAnimationOnElement(t)))}destroyActiveAnimationsForElement(i){let e=this.playersByElement.get(i);e&&e.forEach(t=>{t.queued?t.markedForDestroy=!0:t.destroy()})}finishActiveQueriedAnimationOnElement(i){let e=this.playersByQueriedElement.get(i);e&&e.forEach(t=>t.finish())}whenRenderingDone(){return new Promise(i=>{if(this.players.length)return Wt(this.players).onDone(()=>i());i()})}processLeaveNode(i){let e=i[wt];if(e&&e.setForRemoval){if(i[wt]=Um,e.namespaceId){this.destroyInnerAnimations(i);let t=this._fetchNamespace(e.namespaceId);t&&t.clearElementCache(i)}this._onRemovalComplete(i,e.setForRemoval)}i.classList?.contains(Pa)&&this.markElementAsDisabled(i,!1),this.driver.query(i,mg,!0).forEach(t=>{this.markElementAsDisabled(t,!1)})}flush(i=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((t,o)=>this._balanceNamespaceList(t,o)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let t=0;t<this.collectedEnterElements.length;t++){let o=this.collectedEnterElements[t];ut(o,hg)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let t=[];try{e=this._flushAnimations(t,i)}finally{for(let o=0;o<t.length;o++)t[o]()}}else for(let t=0;t<this.collectedLeaveElements.length;t++){let o=this.collectedLeaveElements[t];this.processLeaveNode(o)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(t=>t()),this._flushFns=[],this._whenQuietFns.length){let t=this._whenQuietFns;this._whenQuietFns=[],e.length?Wt(e).onDone(()=>{t.forEach(o=>o())}):t.forEach(o=>o())}}reportError(i){throw xm(i)}_flushAnimations(i,e){let t=new Wn,o=[],r=new Map,a=[],s=new Map,m=new Map,h=new Map,g=new Set;this.disabledNodes.forEach(S=>{g.add(S);let M=this.driver.query(S,dg,!0);for(let P=0;P<M.length;P++)g.add(M[P])});let u=this.bodyNode,b=Array.from(this.statesByElement.keys()),C=Nm(b,this.collectedEnterElements),_=new Map,v=0;C.forEach((S,M)=>{let P=Sa+v++;_.set(M,P),S.forEach(Z=>ut(Z,P))});let q=[],G=new Set,oe=new Set;for(let S=0;S<this.collectedLeaveElements.length;S++){let M=this.collectedLeaveElements[S],P=M[wt];P&&P.setForRemoval&&(q.push(M),G.add(M),P.hasAnimation?this.driver.query(M,pg,!0).forEach(Z=>G.add(Z)):oe.add(M))}let se=new Map,B=Nm(b,Array.from(G));B.forEach((S,M)=>{let P=er+v++;se.set(M,P),S.forEach(Z=>ut(Z,P))}),i.push(()=>{C.forEach((S,M)=>{let P=_.get(M);S.forEach(Z=>gn(Z,P))}),B.forEach((S,M)=>{let P=se.get(M);S.forEach(Z=>gn(Z,P))}),q.forEach(S=>{this.processLeaveNode(S)})});let re=[],X=[];for(let S=this._namespaceList.length-1;S>=0;S--)this._namespaceList[S].drainQueuedTransitions(e).forEach(P=>{let Z=P.player,Ee=P.element;if(re.push(Z),this.collectedEnterElements.length){let Ne=Ee[wt];if(Ne&&Ne.setForMove){if(Ne.previousTriggersValues&&Ne.previousTriggersValues.has(P.triggerName)){let di=Ne.previousTriggersValues.get(P.triggerName),rt=this.statesByElement.get(P.element);if(rt&&rt.has(P.triggerName)){let $n=rt.get(P.triggerName);$n.value=di,rt.set(P.triggerName,$n)}}Z.destroy();return}}let St=!u||!this.driver.containsElement(u,Ee),et=se.get(Ee),Gt=_.get(Ee),pe=this._buildInstruction(P,t,Gt,et,St);if(pe.errors&&pe.errors.length){X.push(pe);return}if(St){Z.onStart(()=>li(Ee,pe.fromStyles)),Z.onDestroy(()=>xt(Ee,pe.toStyles)),o.push(Z);return}if(P.isFallbackTransition){Z.onStart(()=>li(Ee,pe.fromStyles)),Z.onDestroy(()=>xt(Ee,pe.toStyles)),o.push(Z);return}let cs=[];pe.timelines.forEach(Ne=>{Ne.stretchStartingKeyframe=!0,this.disabledNodes.has(Ne.element)||cs.push(Ne)}),pe.timelines=cs,t.append(Ee,pe.timelines);let bh={instruction:pe,player:Z,element:Ee};a.push(bh),pe.queriedElements.forEach(Ne=>Ze(s,Ne,[]).push(Z)),pe.preStyleProps.forEach((Ne,di)=>{if(Ne.size){let rt=m.get(di);rt||m.set(di,rt=new Set),Ne.forEach(($n,Sr)=>rt.add(Sr))}}),pe.postStyleProps.forEach((Ne,di)=>{let rt=h.get(di);rt||h.set(di,rt=new Set),Ne.forEach(($n,Sr)=>rt.add(Sr))})});if(X.length){let S=[];X.forEach(M=>{S.push(wm(M.triggerName,M.errors))}),re.forEach(M=>M.destroy()),this.reportError(S)}let he=new Map,le=new Map;a.forEach(S=>{let M=S.element;t.has(M)&&(le.set(M,M),this._beforeAnimationBuild(S.player.namespaceId,S.instruction,he))}),o.forEach(S=>{let M=S.element;this._getPreviousPlayers(M,!1,S.namespaceId,S.triggerName,null).forEach(Z=>{Ze(he,M,[]).push(Z),Z.destroy()})});let ft=q.filter(S=>Bm(S,m,h)),Mi=new Map;Lm(Mi,this.driver,oe,h,Ct).forEach(S=>{Bm(S,m,h)&&ft.push(S)});let ci=new Map;C.forEach((S,M)=>{Lm(ci,this.driver,new Set(S),m,Vn)}),ft.forEach(S=>{let M=Mi.get(S),P=ci.get(S);Mi.set(S,new Map([...M?.entries()??[],...P?.entries()??[]]))});let wr=[],ss=[],ls={};a.forEach(S=>{let{element:M,player:P,instruction:Z}=S;if(t.has(M)){if(g.has(M)){P.onDestroy(()=>xt(M,Z.toStyles)),P.disabled=!0,P.overrideTotalTime(Z.totalTime),o.push(P);return}let Ee=ls;if(le.size>1){let et=M,Gt=[];for(;et=et.parentNode;){let pe=le.get(et);if(pe){Ee=pe;break}Gt.push(et)}Gt.forEach(pe=>le.set(pe,Ee))}let St=this._buildAnimation(P.namespaceId,Z,he,r,ci,Mi);if(P.setRealPlayer(St),Ee===ls)wr.push(P);else{let et=this.playersByElement.get(Ee);et&&et.length&&(P.parentPlayer=Wt(et)),o.push(P)}}else li(M,Z.fromStyles),P.onDestroy(()=>xt(M,Z.toStyles)),ss.push(P),g.has(M)&&o.push(P)}),ss.forEach(S=>{let M=r.get(S.element);if(M&&M.length){let P=Wt(M);S.setRealPlayer(P)}}),o.forEach(S=>{S.parentPlayer?S.syncPlayerEvents(S.parentPlayer):S.destroy()});for(let S=0;S<q.length;S++){let M=q[S],P=M[wt];if(gn(M,er),P&&P.hasAnimation)continue;let Z=[];if(s.size){let St=s.get(M);St&&St.length&&Z.push(...St);let et=this.driver.query(M,tr,!0);for(let Gt=0;Gt<et.length;Gt++){let pe=s.get(et[Gt]);pe&&pe.length&&Z.push(...pe)}}let Ee=Z.filter(St=>!St.destroyed);Ee.length?yg(this,M,Ee):this.processLeaveNode(M)}return q.length=0,wr.forEach(S=>{this.players.push(S),S.onDone(()=>{S.destroy();let M=this.players.indexOf(S);this.players.splice(M,1)}),S.play()}),wr}afterFlush(i){this._flushFns.push(i)}afterFlushAnimationsDone(i){this._whenQuietFns.push(i)}_getPreviousPlayers(i,e,t,o,r){let a=[];if(e){let s=this.playersByQueriedElement.get(i);s&&(a=s)}else{let s=this.playersByElement.get(i);if(s){let m=!r||r==qn;s.forEach(h=>{h.queued||!m&&h.triggerName!=o||a.push(h)})}}return(t||o)&&(a=a.filter(s=>!(t&&t!=s.namespaceId||o&&o!=s.triggerName))),a}_beforeAnimationBuild(i,e,t){let o=e.triggerName,r=e.element,a=e.isRemovalTransition?void 0:i,s=e.isRemovalTransition?void 0:o;for(let m of e.timelines){let h=m.element,g=h!==r,u=Ze(t,h,[]);this._getPreviousPlayers(h,g,a,s,e.toState).forEach(C=>{let _=C.getRealPlayer();_.beforeDestroy&&_.beforeDestroy(),C.destroy(),u.push(C)})}li(r,e.fromStyles)}_buildAnimation(i,e,t,o,r,a){let s=e.triggerName,m=e.element,h=[],g=new Set,u=new Set,b=e.timelines.map(_=>{let v=_.element;g.add(v);let q=v[wt];if(q&&q.removedBeforeQueried)return new qt(_.duration,_.delay);let G=v!==m,oe=bg((t.get(v)||ug).map(he=>he.getRealPlayer())).filter(he=>{let le=he;return le.element?le.element===v:!1}),se=r.get(v),B=a.get(v),re=ya(this._normalizer,_.keyframes,se,B),X=this._buildPlayer(_,re,oe);if(_.subTimeline&&o&&u.add(v),G){let he=new Yn(i,s,v);he.setRealPlayer(X),h.push(he)}return X});h.forEach(_=>{Ze(this.playersByQueriedElement,_.element,[]).push(_),_.onDone(()=>gg(this.playersByQueriedElement,_.element,_))}),g.forEach(_=>ut(_,Ea));let C=Wt(b);return C.onDestroy(()=>{g.forEach(_=>gn(_,Ea)),xt(m,e.toStyles)}),u.forEach(_=>{Ze(o,_,[]).push(C)}),C}_buildPlayer(i,e,t){return e.length>0?this.driver.animate(i.element,e,i.duration,i.delay,i.easing,t):new qt(i.duration,i.delay)}},Yn=class{namespaceId;triggerName;element;_player=new qt;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(i,e,t){this.namespaceId=i,this.triggerName=e,this.element=t}setRealPlayer(i){this._containsRealPlayer||(this._player=i,this._queuedCallbacks.forEach((e,t)=>{e.forEach(o=>Xo(i,t,void 0,o))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(i.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(i){this.totalTime=i}syncPlayerEvents(i){let e=this._player;e.triggerCallback&&i.onStart(()=>e.triggerCallback("start")),i.onDone(()=>this.finish()),i.onDestroy(()=>this.destroy())}_queueEvent(i,e){Ze(this._queuedCallbacks,i,[]).push(e)}onDone(i){this.queued&&this._queueEvent("done",i),this._player.onDone(i)}onStart(i){this.queued&&this._queueEvent("start",i),this._player.onStart(i)}onDestroy(i){this.queued&&this._queueEvent("destroy",i),this._player.onDestroy(i)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(i){this.queued||this._player.setPosition(i)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(i){let e=this._player;e.triggerCallback&&e.triggerCallback(i)}};function gg(n,i,e){let t=n.get(i);if(t){if(t.length){let o=t.indexOf(e);t.splice(o,1)}t.length==0&&n.delete(i)}return t}function _g(n){return n??null}function ar(n){return n&&n.nodeType===1}function vg(n){return n=="start"||n=="done"}function Fm(n,i){let e=n.style.display;return n.style.display=i??"none",e}function Lm(n,i,e,t,o){let r=[];e.forEach(m=>r.push(Fm(m)));let a=[];t.forEach((m,h)=>{let g=new Map;m.forEach(u=>{let b=i.computeStyle(h,u,o);g.set(u,b),(!b||b.length==0)&&(h[wt]=fg,a.push(h))}),n.set(h,g)});let s=0;return e.forEach(m=>Fm(m,r[s++])),a}function Nm(n,i){let e=new Map;if(n.forEach(s=>e.set(s,[])),i.length==0)return e;let t=1,o=new Set(i),r=new Map;function a(s){if(!s)return t;let m=r.get(s);if(m)return m;let h=s.parentNode;return e.has(h)?m=h:o.has(h)?m=t:m=a(h),r.set(s,m),m}return i.forEach(s=>{let m=a(s);m!==t&&e.get(m).push(s)}),e}function ut(n,i){n.classList?.add(i)}function gn(n,i){n.classList?.remove(i)}function yg(n,i,e){Wt(e).onDone(()=>n.processLeaveNode(i))}function bg(n){let i=[];return qm(n,i),i}function qm(n,i){for(let e=0;e<n.length;e++){let t=n[e];t instanceof pn?qm(t.players,i):i.push(t)}}function Cg(n,i){let e=Object.keys(n),t=Object.keys(i);if(e.length!=t.length)return!1;for(let o=0;o<e.length;o++){let r=e[o];if(!i.hasOwnProperty(r)||n[r]!==i[r])return!1}return!0}function Bm(n,i,e){let t=e.get(n);if(!t)return!1;let o=i.get(n);return o?t.forEach(r=>o.add(r)):i.set(n,t),e.delete(n),!0}var _n=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(i,e)=>{};constructor(i,e,t){this._driver=e,this._normalizer=t,this._transitionEngine=new ja(i.body,e,t),this._timelineEngine=new za(i.body,e,t),this._transitionEngine.onRemovalComplete=(o,r)=>this.onRemovalComplete(o,r)}registerTrigger(i,e,t,o,r){let a=i+"-"+o,s=this._triggerCache[a];if(!s){let m=[],h=[],g=Vm(this._driver,r,m,h);if(m.length)throw pm(o,m);s=sg(o,g,this._normalizer),this._triggerCache[a]=s}this._transitionEngine.registerTrigger(e,o,s)}register(i,e){this._transitionEngine.register(i,e)}destroy(i,e){this._transitionEngine.destroy(i,e)}onInsert(i,e,t,o){this._transitionEngine.insertNode(i,e,t,o)}onRemove(i,e,t){this._transitionEngine.removeNode(i,e,t)}disableAnimations(i,e){this._transitionEngine.markElementAsDisabled(i,e)}process(i,e,t,o){if(t.charAt(0)=="@"){let[r,a]=ba(t),s=o;this._timelineEngine.command(r,e,a,s)}else this._transitionEngine.trigger(i,e,t,o)}listen(i,e,t,o,r){if(t.charAt(0)=="@"){let[a,s]=ba(t);return this._timelineEngine.listen(a,e,s,r)}return this._transitionEngine.listen(i,e,t,o,r)}flush(i=-1){this._transitionEngine.flush(i)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(i){this._transitionEngine.afterFlushAnimationsDone(i)}};function xg(n,i){let e=null,t=null;return Array.isArray(i)&&i.length?(e=Da(i[0]),i.length>1&&(t=Da(i[i.length-1]))):i instanceof Map&&(e=Da(i)),e||t?new wg(n,e,t):null}var wg=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,t,o){this._element=e,this._startStyles=t,this._endStyles=o;let r=n.initialStylesByElement.get(e);r||n.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&xt(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(xt(this._element,this._initialStyles),this._endStyles&&(xt(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(li(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(li(this._element,this._endStyles),this._endStyles=null),xt(this._element,this._initialStyles),this._state=3)}}return n})();function Da(n){let i=null;return n.forEach((e,t)=>{Sg(t)&&(i=i||new Map,i.set(t,e))}),i}function Sg(n){return n==="display"||n==="position"}var pr=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(i,e,t,o){this.element=i,this.keyframes=e,this.options=t,this._specialStyles=o,this._duration=t.duration,this._delay=t.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let i=this.keyframes,e=this._triggerWebAnimation(this.element,i,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=i.length?i[i.length-1]:new Map;let t=()=>this._onFinish();return e.addEventListener("finish",t),this.onDestroy(()=>{e.removeEventListener("finish",t)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(i){let e=[];return i.forEach(t=>{e.push(Object.fromEntries(t))}),e}_triggerWebAnimation(i,e,t){let o=this._convertKeyframesToObject(e);try{return i.animate(o,t)}catch(r){return null}}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}play(){let i=this._buildPlayer();i&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),i.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}setPosition(i){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=i*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let i=new Map;this.hasStarted()&&this._finalKeyframe.forEach((t,o)=>{o!=="offset"&&i.set(o,this._finished?t:nr(this.element,o))}),this.currentSnapshot=i}triggerCallback(i){let e=i==="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},ur=class{validateStyleProperty(i){return!0}validateAnimatableStyleProperty(i){return!0}containsElement(i,e){return Ca(i,e)}getParentElement(i){return Jo(i)}query(i,e,t){return xa(i,e,t)}computeStyle(i,e,t){return nr(i,e)}animate(i,e,t,o,r,a=[]){let s=o==0?"both":"forwards",m={duration:t,delay:o,fill:s};r&&(m.easing=r);let h=new Map,g=a.filter(C=>C instanceof pr);km(t,o)&&g.forEach(C=>{C.currentSnapshot.forEach((_,v)=>h.set(v,_))});let u=Em(e).map(C=>new Map(C));u=Tm(i,u,h);let b=xg(i,u);return new pr(i,u,m,b)}};var sr="@",Wm="@.disabled",fr=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(i,e,t,o){this.namespaceId=i,this.delegate=e,this.engine=t,this._onDestroy=o}get data(){return this.delegate.data}destroyNode(i){this.delegate.destroyNode?.(i)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}appendChild(i,e){this.delegate.appendChild(i,e),this.engine.onInsert(this.namespaceId,e,i,!1)}insertBefore(i,e,t,o=!0){this.delegate.insertBefore(i,e,t),this.engine.onInsert(this.namespaceId,e,i,o)}removeChild(i,e,t,o){if(o){this.delegate.removeChild(i,e,t,o);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,o){this.delegate.setAttribute(i,e,t,o)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,o){this.delegate.setStyle(i,e,t,o)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){e.charAt(0)==sr&&e==Wm?this.disableAnimations(i,!!t):this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,o){return this.delegate.listen(i,e,t,o)}disableAnimations(i,e){this.engine.disableAnimations(i,e)}},Ha=class extends fr{factory;constructor(i,e,t,o,r){super(e,t,o,r),this.factory=i,this.namespaceId=e}setProperty(i,e,t){e.charAt(0)==sr?e.charAt(1)=="."&&e==Wm?(t=t===void 0?!0:!!t,this.disableAnimations(i,t)):this.engine.process(this.namespaceId,i,e.slice(1),t):this.delegate.setProperty(i,e,t)}listen(i,e,t,o){if(e.charAt(0)==sr){let r=Eg(i),a=e.slice(1),s="";return a.charAt(0)!=sr&&([a,s]=Mg(a)),this.engine.listen(this.namespaceId,r,a,s,m=>{let h=m._data||-1;this.factory.scheduleListenerCallback(h,t,m)})}return this.delegate.listen(i,e,t,o)}};function Eg(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function Mg(n){let i=n.indexOf("."),e=n.substring(0,i),t=n.slice(i+1);return[e,t]}var gr=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(i,e,t){this.delegate=i,this.engine=e,this._zone=t,e.onRemovalComplete=(o,r)=>{r?.removeChild(null,o)}}createRenderer(i,e){let o=this.delegate.createRenderer(i,e);if(!i||!e?.data?.animation){let h=this._rendererCache,g=h.get(o);if(!g){let u=()=>h.delete(o);g=new fr("",o,this.engine,u),h.set(o,g)}return g}let r=e.id,a=e.id+"-"+this._currentId;this._currentId++,this.engine.register(a,i);let s=h=>{Array.isArray(h)?h.forEach(s):this.engine.registerTrigger(r,a,i,h.name,h)};return e.data.animation.forEach(s),new Ha(this,a,o,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(i,e,t){if(i>=0&&i<this._microtaskId){this._zone.run(()=>e(t));return}let o=this._animationCallbacksBuffer;o.length==0&&queueMicrotask(()=>{this._zone.run(()=>{o.forEach(r=>{let[a,s]=r;a(s)}),this._animationCallbacksBuffer=[]})}),o.push([e,t])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(i){this.engine.flush(),this.delegate.componentReplaced?.(i)}};var Tg=(()=>{class n extends _n{constructor(e,t,o){super(e,t,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||n)(z(ge),z(Si),z(Ei))};static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();function Pg(){return new lr}function Og(){return new gr(p(Ws),p(_n),p(Y))}var Gm=[{provide:Ei,useFactory:Pg},{provide:_n,useClass:Tg},{provide:vt,useFactory:Og}],wE=[{provide:Si,useClass:Ua},{provide:wn,useValue:"NoopAnimations"},...Gm],Dg=[{provide:Si,useFactory:()=>new ur},{provide:wn,useFactory:()=>"BrowserAnimations"},...Gm];function Ym(){return Ts("NgEagerAnimations"),[...Dg]}var Kn="PERFORM_ACTION",Rg="REFRESH",Jm="RESET",eh="ROLLBACK",th="COMMIT",ih="SWEEP",nh="TOGGLE_ACTION",Ig="SET_ACTIONS_ACTIVE",oh="JUMP_TO_STATE",rh="JUMP_TO_ACTION",ns="IMPORT_STATE",ah="LOCK_CHANGES",sh="PAUSE_RECORDING",vn=class{constructor(i,e){if(this.action=i,this.timestamp=e,this.type=Kn,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Wa=class{constructor(){this.type=Rg}},Ga=class{constructor(i){this.timestamp=i,this.type=Jm}},Ya=class{constructor(i){this.timestamp=i,this.type=eh}},Qa=class{constructor(i){this.timestamp=i,this.type=th}},Ka=class{constructor(){this.type=ih}},$a=class{constructor(i){this.id=i,this.type=nh}};var Xa=class{constructor(i){this.index=i,this.type=oh}},Za=class{constructor(i){this.actionId=i,this.type=rh}},Ja=class{constructor(i){this.nextLiftedState=i,this.type=ns}},es=class{constructor(i){this.status=i,this.type=ah}},ts=class{constructor(i){this.status=i,this.type=sh}};var br=new T("@ngrx/store-devtools Options"),Qm=new T("@ngrx/store-devtools Initial Config");function lh(){return null}var Ag="NgRx Store DevTools";function Fg(n){let i={maxAge:!1,monitor:lh,actionSanitizer:void 0,stateSanitizer:void 0,name:Ag,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e=typeof n=="function"?n():n,t=e.logOnly?{pause:!0,export:!0,test:!0}:!1,o=e.features||t||i.features;o.import===!0&&(o.import="custom");let r=Object.assign({},i,{features:o},e);if(r.maxAge&&r.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${r.maxAge}`);return r}function Km(n,i){return n.filter(e=>i.indexOf(e)<0)}function ch(n){let{computedStates:i,currentStateIndex:e}=n;if(e>=i.length){let{state:o}=i[i.length-1];return o}let{state:t}=i[e];return t}function Qn(n){return new vn(n,+Date.now())}function Lg(n,i){return Object.keys(i).reduce((e,t)=>{let o=Number(t);return e[o]=dh(n,i[o],o),e},{})}function dh(n,i,e){return ze(F({},i),{action:n(i.action,e)})}function Ng(n,i){return i.map((e,t)=>({state:mh(n,e.state,t),error:e.error}))}function mh(n,i,e){return n(i,e)}function hh(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function Bg(n,i,e,t){let o=[],r={},a=[];return n.stagedActionIds.forEach((s,m)=>{let h=n.actionsById[s];h&&(m&&os(n.computedStates[m],h,i,e,t)||(r[s]=h,o.push(s),a.push(n.computedStates[m])))}),ze(F({},n),{stagedActionIds:o,actionsById:r,computedStates:a})}function os(n,i,e,t,o){let r=e&&!e(n,i.action),a=t&&!i.action.type.match(t.map(m=>$m(m)).join("|")),s=o&&i.action.type.match(o.map(m=>$m(m)).join("|"));return r||a||s}function $m(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ph(n){return{ngZone:n?p(Y):null,connectInZone:n}}var Cr=(()=>{class n extends uo{static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=_t(n)))(o||n)}})()}static{this.\u0275prov=k({token:n,factory:n.\u0275fac})}}return n})(),_r={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},is=new T("@ngrx/store-devtools Redux Devtools Extension"),uh=(()=>{class n{constructor(e,t,o){this.config=t,this.dispatcher=o,this.zoneConfig=ph(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===Kn){if(t.isLocked||t.isPaused)return;let o=ch(t);if(hh(this.config)&&os(o,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let r=this.config.stateSanitizer?mh(this.config.stateSanitizer,o,t.currentStateIndex):o,a=this.config.actionSanitizer?dh(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(a,r))}else{let o=ze(F({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?Lg(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?Ng(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,o,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new Lt(e=>{let t=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(o=>e.next(o)),t.unsubscribe}):Xn}createActionStreams(){let e=this.createChangesObservable().pipe(Cs()),t=e.pipe(ie(h=>h.type===_r.START)),o=e.pipe(ie(h=>h.type===_r.STOP)),r=e.pipe(ie(h=>h.type===_r.DISPATCH),Ve(h=>this.unwrapAction(h.payload)),us(h=>h.type===ns?this.dispatcher.pipe(ie(g=>g.type===Br),ps(1e3),fs(1e3),Ve(()=>h),Pi(()=>Ge(h)),Ye(1)):Ge(h))),s=e.pipe(ie(h=>h.type===_r.ACTION),Ve(h=>this.unwrapAction(h.payload))).pipe(fe(o)),m=r.pipe(fe(o));this.start$=t.pipe(fe(o)),this.actions$=this.start$.pipe(Oi(()=>s)),this.liftedActions$=this.start$.pipe(Oi(()=>m))}unwrapAction(e){return typeof e=="string"?(0,eval)(`(${e})`):e}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}static{this.\u0275fac=function(t){return new(t||n)(z(is),z(br),z(Cr))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac})}}return n})(),yr={type:Nr},zg="@ngrx/store-devtools/recompute",Vg={type:zg};function fh(n,i,e,t,o){if(t)return{state:e,error:"Interrupted by an error up the chain"};let r=e,a;try{r=n(e,i)}catch(s){a=s.toString(),o.handleError(s)}return{state:r,error:a}}function vr(n,i,e,t,o,r,a,s,m){if(i>=n.length&&n.length===r.length)return n;let h=n.slice(0,i),g=r.length-(m?1:0);for(let u=i;u<g;u++){let b=r[u],C=o[b].action,_=h[u-1],v=_?_.state:t,q=_?_.error:void 0,oe=a.indexOf(b)>-1?_:fh(e,C,v,q,s);h.push(oe)}return m&&h.push(n[n.length-1]),h}function jg(n,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:Qn(yr)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Hg(n,i,e,t,o={}){return r=>(a,s)=>{let{monitorState:m,actionsById:h,nextActionId:g,stagedActionIds:u,skippedActionIds:b,committedState:C,currentStateIndex:_,computedStates:v,isLocked:q,isPaused:G}=a||i;a||(h=Object.create(h));function oe(re){let X=re,he=u.slice(1,X+1);for(let le=0;le<he.length;le++)if(v[le+1].error){X=le,he=u.slice(1,X+1);break}else delete h[he[le]];b=b.filter(le=>he.indexOf(le)===-1),u=[0,...u.slice(X+1)],C=v[X].state,v=v.slice(X),_=_>X?_-X:0}function se(){h={0:Qn(yr)},g=1,u=[0],b=[],C=v[_].state,_=0,v=[]}let B=0;switch(s.type){case ah:{q=s.status,B=1/0;break}case sh:{G=s.status,G?(u=[...u,g],h[g]=new vn({type:"@ngrx/devtools/pause"},+Date.now()),g++,B=u.length-1,v=v.concat(v[v.length-1]),_===u.length-2&&_++,B=1/0):se();break}case Jm:{h={0:Qn(yr)},g=1,u=[0],b=[],C=n,_=0,v=[];break}case th:{se();break}case eh:{h={0:Qn(yr)},g=1,u=[0],b=[],_=0,v=[];break}case nh:{let{id:re}=s;b.indexOf(re)===-1?b=[re,...b]:b=b.filter(he=>he!==re),B=u.indexOf(re);break}case Ig:{let{start:re,end:X,active:he}=s,le=[];for(let ft=re;ft<X;ft++)le.push(ft);he?b=Km(b,le):b=[...b,...le],B=u.indexOf(re);break}case oh:{_=s.index,B=1/0;break}case rh:{let re=u.indexOf(s.actionId);re!==-1&&(_=re),B=1/0;break}case ih:{u=Km(u,b),b=[],_=Math.min(_,u.length-1);break}case Kn:{if(q)return a||i;if(G||a&&os(a.computedStates[_],s,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let X=v[v.length-1];v=[...v.slice(0,-1),fh(r,s.action,X.state,X.error,e)],B=1/0;break}o.maxAge&&u.length===o.maxAge&&oe(1),_===u.length-1&&_++;let re=g++;h[re]=s,u=[...u,re],B=u.length-1;break}case ns:{({monitorState:m,actionsById:h,nextActionId:g,stagedActionIds:u,skippedActionIds:b,committedState:C,currentStateIndex:_,computedStates:v,isLocked:q,isPaused:G}=s.nextLiftedState);break}case Nr:{B=0,o.maxAge&&u.length>o.maxAge&&(v=vr(v,B,r,C,h,u,b,e,G),oe(u.length-o.maxAge),B=1/0);break}case Br:{if(v.filter(X=>X.error).length>0)B=0,o.maxAge&&u.length>o.maxAge&&(v=vr(v,B,r,C,h,u,b,e,G),oe(u.length-o.maxAge),B=1/0);else{if(!G&&!q){_===u.length-1&&_++;let X=g++;h[X]=new vn(s,+Date.now()),u=[...u,X],B=u.length-1,v=vr(v,B,r,C,h,u,b,e,G)}v=v.map(X=>ze(F({},X),{state:r(X.state,Vg)})),_=u.length-1,o.maxAge&&u.length>o.maxAge&&oe(u.length-o.maxAge),B=1/0}break}default:{B=1/0;break}}return v=vr(v,B,r,C,h,u,b,e,G),m=t(m,s),{monitorState:m,actionsById:h,nextActionId:g,stagedActionIds:u,skippedActionIds:b,committedState:C,currentStateIndex:_,computedStates:v,isLocked:q,isPaused:G}}}var Xm=(()=>{class n{constructor(e,t,o,r,a,s,m,h){let g=jg(m,h.monitor),u=Hg(m,g,s,h.monitor,h),b=je(je(t.asObservable().pipe(xs(1)),r.actions$).pipe(Ve(Qn)),e,r.liftedActions$).pipe(hs(ms)),C=o.pipe(Ve(u)),_=ph(h.connectInZone),v=new yn(1);this.liftedStateSubscription=b.pipe(Cn(C),Zm(_),bs(({state:oe},[se,B])=>{let re=B(oe,se);return se.type!==Kn&&hh(h)&&(re=Bg(re,h.predicate,h.actionsSafelist,h.actionsBlocklist)),r.notify(se,re),{state:re,action:se}},{state:g,action:null})).subscribe(({state:oe,action:se})=>{if(v.next(oe),se.type===Kn){let B=se.action;a.next(B)}}),this.extensionStartSubscription=r.start$.pipe(Zm(_)).subscribe(()=>{this.refresh()});let q=v.asObservable(),G=q.pipe(Ve(ch));Object.defineProperty(G,"state",{value:tl(G,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=q,this.state=G}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new vn(e,+Date.now()))}refresh(){this.dispatch(new Wa)}reset(){this.dispatch(new Ga(+Date.now()))}rollback(){this.dispatch(new Ya(+Date.now()))}commit(){this.dispatch(new Qa(+Date.now()))}sweep(){this.dispatch(new Ka)}toggleAction(e){this.dispatch(new $a(e))}jumpToAction(e){this.dispatch(new Za(e))}jumpToState(e){this.dispatch(new Xa(e))}importState(e){this.dispatch(new Ja(e))}lockChanges(e){this.dispatch(new es(e))}pauseRecording(e){this.dispatch(new ts(e))}static{this.\u0275fac=function(t){return new(t||n)(z(Cr),z(uo),z(al),z(uh),z(fo),z(Ri),z(il),z(br))}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac})}}return n})();function Zm({ngZone:n,connectInZone:i}){return e=>i?new Lt(t=>e.subscribe({next:o=>n.run(()=>t.next(o)),error:o=>n.run(()=>t.error(o)),complete:()=>n.run(()=>t.complete())})):e}var Ug=new T("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function qg(n,i){return!!n||i.monitor!==lh}function Wg(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function Gg(n){return n.state}function gh(n={}){return Di([uh,Cr,Xm,{provide:Qm,useValue:n},{provide:Ug,deps:[is,br],useFactory:qg},{provide:is,useFactory:Wg},{provide:br,deps:[Qm],useFactory:Fg},{provide:ll,deps:[Xm],useFactory:Gg},{provide:sl,useExisting:Cr}])}var _h={providers:[Qs(Ks()),el(Ud),ml(Yd),gh({maxAge:25,logOnly:!so(),autoPause:!0,trace:!1,traceLimit:75}),Bl([Kd]),Gl(),Ym(),ws(md),Zs(Xs()),ae.providers]};var xr=(()=>{class n{registerOutlet(e){this.outlet=e}attach(e){if(!this.outlet)throw new Error("Portal outlet is not registered.");return this.outlet.hasAttached()&&this.outlet.detach(),this.outlet.attach(e)}detach(){this.outlet?.hasAttached()&&this.outlet.detach()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Yg=["modalTemplate"],Qg=["*"];function Kg(n,i){if(n&1&&(l(0,"h2"),d(1),c()),n&2){let e=A(2);f(),V(e.modalTitle)}}function $g(n,i){}function Xg(n,i){if(n&1&&(Dr(0),me(1,$g,0,0,"ng-template",10),Rr()),n&2){let e=A(2);f(),N("cdkPortalOutlet",e.selectedPortal)}}function Zg(n,i){if(n&1&&(Dr(0),d(1),Rr()),n&2){let e=A(3);f(),V(e.content)}}function Jg(n,i){n&1&&ce(0)}function e_(n,i){if(n&1&&me(0,Zg,2,1,"ng-container",9)(1,Jg,1,0,"ng-template",null,2,mt),n&2){let e=Kt(2),t=A(2);N("ngIf",t.content)("ngIfElse",e)}}function t_(n,i){if(n&1){let e=dt();l(0,"div",3)(1,"div",4),E("click",function(){at(e);let o=A();return st(o.close())}),c(),l(2,"div",5)(3,"div",6),me(4,Kg,2,1,"h2",7),c(),l(5,"div",8),me(6,Xg,2,1,"ng-container",9)(7,e_,3,2,"ng-template",null,1,mt),c()()()}if(n&2){let e=Kt(8),t=A();f(4),N("ngIf",t.modalTitle),f(2),N("ngIf",t.selectedPortal)("ngIfElse",e)}}var rs=(()=>{class n{constructor(e,t,o,r){this._viewContainerRef=e,this._router=t,this._location=o,this._portalOutletService=r,this.isOpen=!1,this.selectedPortal=null,this.modalTitle="",this.content=""}show(e){e?this.selectedPortal=e:this.selectedPortal||(this.selectedPortal=this.getDefaultPortal()),this.modalPortal||(this.modalPortal=new Rt(this.modalTemplate,this._viewContainerRef)),this._portalOutletService.attach(this.modalPortal),this.isOpen=!0}openComponent(e,t){t&&(this.modalTitle=t),this.selectedPortal=new ot(e,this._viewContainerRef),this.show()}getDefaultPortal(){return this.defaultPortal||(this.defaultPortal=new ot(bi,this._viewContainerRef)),this.defaultPortal}close(){this.isOpen=!1,this.selectedPortal=null,this._portalOutletService.detach(),this._router.url.startsWith("/modalpage")&&this._location.back()}ngOnDestroy(){this._portalOutletService.detach()}static{this.\u0275fac=function(t){return new(t||n)(L(ct),L(Qe),L(lo),L(xr))}}static{this.\u0275cmp=y({type:n,selectors:[["app-modalpage"]],viewQuery:function(t,o){if(t&1&&_e(Yg,5),t&2){let r;R(r=I())&&(o.modalTemplate=r.first)}},inputs:{modalTitle:"modalTitle",content:"content"},ngContentSelectors:Qg,decls:2,vars:0,consts:[["modalTemplate",""],["defaultBody",""],["projectedContent",""],[1,"modal-page"],[1,"modal-page__backdrop",3,"click"],[1,"modal-page__content"],[1,"modal-page__header"],[4,"ngIf"],[1,"modal-page__body"],[4,"ngIf","ngIfElse"],[3,"cdkPortalOutlet"]],template:function(t,o){t&1&&(He(),me(0,t_,9,3,"ng-template",null,0,mt))},dependencies:[Mt,qs,Xe,We],styles:[".modal-page[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000}.modal-page__backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:#000000a6}.modal-page__content[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;height:100%;background:#fff;overflow:auto}.modal-page__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.modal-page__close[_ngcontent-%COMP%]{border:none;background:transparent;font-size:28px;line-height:1;cursor:pointer}.modal-page__body[_ngcontent-%COMP%]{color:#1a1a1a;line-height:1.6}"]})}}return n})();function i_(n,i){}var yh=(()=>{class n{constructor(e,t,o,r,a){this.router=e,this.adobeService=t,this.portalOutletService=o,this.modalpageService=r,this.router.events.pipe(ie(s=>s instanceof po)).subscribe(s=>{this.adobeService.trackEvent("NavigationEnd",{page:{url:s.url,name:a.getTitle()}})})}ngAfterViewInit(){this.portalOutletService.registerOutlet(this.portalOutlet),this.modalpageService.setModal(this.modalPage)}static{this.\u0275fac=function(t){return new(t||n)(L(Qe),L(Ho),L(xr),L(sn),L(kt))}}static{this.\u0275cmp=y({type:n,selectors:[["app-root"]],viewQuery:function(t,o){if(t&1&&_e(We,5)(rs,5),t&2){let r;R(r=I())&&(o.portalOutlet=r.first),R(r=I())&&(o.modalPage=r.first)}},decls:4,vars:0,consts:[["modalPage",""],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(x(0,"app-modalpage",null,0)(2,"router-outlet"),me(3,i_,0,0,"ng-template",1))},dependencies:[Mt,Li,Xe,We,rs],encapsulation:2})}}return n})();Gs(yh,_h).catch(n=>console.error(n));
