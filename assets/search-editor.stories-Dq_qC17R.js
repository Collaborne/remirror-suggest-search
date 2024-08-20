import{g as Q,a as Y,s as q,B as _r,r as qr,c as k,_ as f,b as L,d as Dr,u as J,e as X,j as p,f as U,h as Z,i as Vr,k as Ur,l as H,m as rr,n as Hr,o as Sr,p as K,q as Kr,t as Er,v as Qr,P as Yr,w as Jr,M as Xr,E as Rr,x as or,y as Zr,z as Ir,A as re,R as ee,C as oe,D as te,S as ne,F as ae,U as ie,T as se,G as le,H as ce,I as tr}from"./useEditorMention-RYrYouM0.js";import{v as de}from"./v4-CQkTLCs1.js";import{a as g,R as me}from"./index-CraVRqi7.js";function ue(r){return g.Children.toArray(r).filter(e=>g.isValidElement(e))}function pe(r){return Y("MuiButton",r)}const V=Q("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Br=g.createContext({}),jr=g.createContext(void 0),ge=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],he=r=>{const{color:e,disableElevation:o,fullWidth:t,size:n,variant:a,classes:s}=r,d={root:["root",a,`${a}${k(e)}`,`size${k(n)}`,`${a}Size${k(n)}`,`color${k(e)}`,o&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${k(n)}`],endIcon:["icon","endIcon",`iconSize${k(n)}`]},l=Z(d,pe,s);return f({},s,l)},$r=r=>f({},r.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},r.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},r.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),be=q(_r,{shouldForwardProp:r=>qr(r)||r==="classes",name:"MuiButton",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.root,e[o.variant],e[`${o.variant}${k(o.color)}`],e[`size${k(o.size)}`],e[`${o.variant}Size${k(o.size)}`],o.color==="inherit"&&e.colorInherit,o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth]}})(({theme:r,ownerState:e})=>{var o,t;const n=r.palette.mode==="light"?r.palette.grey[300]:r.palette.grey[800],a=r.palette.mode==="light"?r.palette.grey.A100:r.palette.grey[700];return f({},r.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":f({textDecoration:"none",backgroundColor:r.vars?`rgba(${r.vars.palette.text.primaryChannel} / ${r.vars.palette.action.hoverOpacity})`:L(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:r.vars?`rgba(${r.vars.palette[e.color].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:L(r.palette[e.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(r.vars||r).palette[e.color].main}`,backgroundColor:r.vars?`rgba(${r.vars.palette[e.color].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:L(r.palette[e.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(r.vars||r).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[e.color].main}}),"&:active":f({},e.variant==="contained"&&{boxShadow:(r.vars||r).shadows[8]}),[`&.${V.focusVisible}`]:f({},e.variant==="contained"&&{boxShadow:(r.vars||r).shadows[6]}),[`&.${V.disabled}`]:f({color:(r.vars||r).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(r.vars||r).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main,border:r.vars?`1px solid rgba(${r.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${L(r.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:r.vars?r.vars.palette.text.primary:(o=(t=r.palette).getContrastText)==null?void 0:o.call(t,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:n,boxShadow:(r.vars||r).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].contrastText,backgroundColor:(r.vars||r).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:r})=>r.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${V.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${V.disabled}`]:{boxShadow:"none"}}),fe=q("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.startIcon,e[`iconSize${k(o.size)}`]]}})(({ownerState:r})=>f({display:"inherit",marginRight:8,marginLeft:-4},r.size==="small"&&{marginLeft:-2},$r(r))),ke=q("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.endIcon,e[`iconSize${k(o.size)}`]]}})(({ownerState:r})=>f({display:"inherit",marginRight:-4,marginLeft:8},r.size==="small"&&{marginRight:-2},$r(r))),xe=g.forwardRef(function(e,o){const t=g.useContext(Br),n=g.useContext(jr),a=Dr(t,e),s=J({props:a,name:"MuiButton"}),{children:d,color:l="primary",component:c="button",className:i,disabled:m=!1,disableElevation:u=!1,disableFocusRipple:b=!1,endIcon:h,focusVisibleClassName:w,fullWidth:A=!1,size:M="medium",startIcon:v,type:E,variant:R="text"}=s,I=X(s,ge),C=f({},s,{color:l,component:c,disabled:m,disableElevation:u,disableFocusRipple:b,fullWidth:A,size:M,type:E,variant:R}),y=he(C),S=v&&p.jsx(fe,{className:y.startIcon,ownerState:C,children:v}),B=h&&p.jsx(ke,{className:y.endIcon,ownerState:C,children:h}),j=n||"";return p.jsxs(be,f({ownerState:C,className:U(t.className,y.root,i,j),component:c,disabled:m,focusRipple:!b,focusVisibleClassName:U(y.focusVisible,w),ref:o,type:E},I,{classes:y,children:[S,d,B]}))});function ve(r){return Y("MuiButtonGroup",r)}const z=Q("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),ye=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],we=(r,e)=>{const{ownerState:o}=r;return[{[`& .${z.grouped}`]:e.grouped},{[`& .${z.grouped}`]:e[`grouped${k(o.orientation)}`]},{[`& .${z.grouped}`]:e[`grouped${k(o.variant)}`]},{[`& .${z.grouped}`]:e[`grouped${k(o.variant)}${k(o.orientation)}`]},{[`& .${z.grouped}`]:e[`grouped${k(o.variant)}${k(o.color)}`]},{[`& .${z.firstButton}`]:e.firstButton},{[`& .${z.lastButton}`]:e.lastButton},{[`& .${z.middleButton}`]:e.middleButton},e.root,e[o.variant],o.disableElevation===!0&&e.disableElevation,o.fullWidth&&e.fullWidth,o.orientation==="vertical"&&e.vertical]},ze=r=>{const{classes:e,color:o,disabled:t,disableElevation:n,fullWidth:a,orientation:s,variant:d}=r,l={root:["root",d,s==="vertical"&&"vertical",a&&"fullWidth",n&&"disableElevation"],grouped:["grouped",`grouped${k(s)}`,`grouped${k(d)}`,`grouped${k(d)}${k(s)}`,`grouped${k(d)}${k(o)}`,t&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return Z(l,ve,e)},Ce=q("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:we})(({theme:r,ownerState:e})=>f({display:"inline-flex",borderRadius:(r.vars||r).shape.borderRadius},e.variant==="contained"&&{boxShadow:(r.vars||r).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},e.orientation==="vertical"&&{flexDirection:"column"},{[`& .${z.grouped}`]:f({minWidth:40,"&:hover":f({},e.variant==="contained"&&{boxShadow:"none"})},e.variant==="contained"&&{boxShadow:"none"}),[`& .${z.firstButton},& .${z.middleButton}`]:f({},e.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},e.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},e.variant==="text"&&e.orientation==="horizontal"&&{borderRight:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${z.disabled}`]:{borderRight:`1px solid ${(r.vars||r).palette.action.disabled}`}},e.variant==="text"&&e.orientation==="vertical"&&{borderBottom:r.vars?`1px solid rgba(${r.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${r.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${z.disabled}`]:{borderBottom:`1px solid ${(r.vars||r).palette.action.disabled}`}},e.variant==="text"&&e.color!=="inherit"&&{borderColor:r.vars?`rgba(${r.vars.palette[e.color].mainChannel} / 0.5)`:L(r.palette[e.color].main,.5)},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"transparent"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"transparent"},e.variant==="contained"&&e.orientation==="horizontal"&&{borderRight:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${z.disabled}`]:{borderRight:`1px solid ${(r.vars||r).palette.action.disabled}`}},e.variant==="contained"&&e.orientation==="vertical"&&{borderBottom:`1px solid ${(r.vars||r).palette.grey[400]}`,[`&.${z.disabled}`]:{borderBottom:`1px solid ${(r.vars||r).palette.action.disabled}`}},e.variant==="contained"&&e.color!=="inherit"&&{borderColor:(r.vars||r).palette[e.color].dark},{"&:hover":f({},e.variant==="outlined"&&e.orientation==="horizontal"&&{borderRightColor:"currentColor"},e.variant==="outlined"&&e.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${z.lastButton},& .${z.middleButton}`]:f({},e.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},e.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},e.variant==="outlined"&&e.orientation==="horizontal"&&{marginLeft:-1},e.variant==="outlined"&&e.orientation==="vertical"&&{marginTop:-1})})),Ae=g.forwardRef(function(e,o){const t=J({props:e,name:"MuiButtonGroup"}),{children:n,className:a,color:s="primary",component:d="div",disabled:l=!1,disableElevation:c=!1,disableFocusRipple:i=!1,disableRipple:m=!1,fullWidth:u=!1,orientation:b="horizontal",size:h="medium",variant:w="outlined"}=t,A=X(t,ye),M=f({},t,{color:s,component:d,disabled:l,disableElevation:c,disableFocusRipple:i,disableRipple:m,fullWidth:u,orientation:b,size:h,variant:w}),v=ze(M),E=g.useMemo(()=>({className:v.grouped,color:s,disabled:l,disableElevation:c,disableFocusRipple:i,disableRipple:m,fullWidth:u,size:h,variant:w}),[s,l,c,i,m,u,h,w,v.grouped]),R=ue(n),I=R.length,C=y=>{const S=y===0,B=y===I-1;return S&&B?"":S?v.firstButton:B?v.lastButton:v.middleButton};return p.jsx(Ce,f({as:d,role:"group",className:U(v.root,a),ref:o,ownerState:M},A,{children:p.jsx(Br.Provider,{value:E,children:R.map((y,S)=>p.jsx(jr.Provider,{value:C(S),children:y},S))})}))}),nr=g.createContext();function Me(r){return Y("MuiGrid",r)}const Se=[0,1,2,3,4,5,6,7,8,9,10],Ee=["column-reverse","column","row-reverse","row"],Re=["nowrap","wrap-reverse","wrap"],P=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],_=Q("MuiGrid",["root","container","item","zeroMinWidth",...Se.map(r=>`spacing-xs-${r}`),...Ee.map(r=>`direction-xs-${r}`),...Re.map(r=>`wrap-xs-${r}`),...P.map(r=>`grid-xs-${r}`),...P.map(r=>`grid-sm-${r}`),...P.map(r=>`grid-md-${r}`),...P.map(r=>`grid-lg-${r}`),...P.map(r=>`grid-xl-${r}`)]),Ie=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function $(r){const e=parseFloat(r);return`${e}${String(r).replace(String(e),"")||"px"}`}function Be({theme:r,ownerState:e}){let o;return r.breakpoints.keys.reduce((t,n)=>{let a={};if(e[n]&&(o=e[n]),!o)return t;if(o===!0)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(o==="auto")a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=H({values:e.columns,breakpoints:r.breakpoints.values}),d=typeof s=="object"?s[n]:s;if(d==null)return t;const l=`${Math.round(o/d*1e8)/1e6}%`;let c={};if(e.container&&e.item&&e.columnSpacing!==0){const i=r.spacing(e.columnSpacing);if(i!=="0px"){const m=`calc(${l} + ${$(i)})`;c={flexBasis:m,maxWidth:m}}}a=f({flexBasis:l,flexGrow:0,maxWidth:l},c)}return r.breakpoints.values[n]===0?Object.assign(t,a):t[r.breakpoints.up(n)]=a,t},{})}function je({theme:r,ownerState:e}){const o=H({values:e.direction,breakpoints:r.breakpoints.values});return rr({theme:r},o,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${_.item}`]={maxWidth:"none"}),n})}function Pr({breakpoints:r,values:e}){let o="";Object.keys(e).forEach(n=>{o===""&&e[n]!==0&&(o=n)});const t=Object.keys(r).sort((n,a)=>r[n]-r[a]);return t.slice(0,t.indexOf(o))}function $e({theme:r,ownerState:e}){const{container:o,rowSpacing:t}=e;let n={};if(o&&t!==0){const a=H({values:t,breakpoints:r.breakpoints.values});let s;typeof a=="object"&&(s=Pr({breakpoints:r.breakpoints.values,values:a})),n=rr({theme:r},a,(d,l)=>{var c;const i=r.spacing(d);return i!=="0px"?{marginTop:`-${$(i)}`,[`& > .${_.item}`]:{paddingTop:$(i)}}:(c=s)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${_.item}`]:{paddingTop:0}}})}return n}function Pe({theme:r,ownerState:e}){const{container:o,columnSpacing:t}=e;let n={};if(o&&t!==0){const a=H({values:t,breakpoints:r.breakpoints.values});let s;typeof a=="object"&&(s=Pr({breakpoints:r.breakpoints.values,values:a})),n=rr({theme:r},a,(d,l)=>{var c;const i=r.spacing(d);return i!=="0px"?{width:`calc(100% + ${$(i)})`,marginLeft:`-${$(i)}`,[`& > .${_.item}`]:{paddingLeft:$(i)}}:(c=s)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${_.item}`]:{paddingLeft:0}}})}return n}function Le(r,e,o={}){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[o[`spacing-xs-${String(r)}`]];const t=[];return e.forEach(n=>{const a=r[n];Number(a)>0&&t.push(o[`spacing-${n}-${String(a)}`])}),t}const Oe=q("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:o}=r,{container:t,direction:n,item:a,spacing:s,wrap:d,zeroMinWidth:l,breakpoints:c}=o;let i=[];t&&(i=Le(s,c,e));const m=[];return c.forEach(u=>{const b=o[u];b&&m.push(e[`grid-${u}-${String(b)}`])}),[e.root,t&&e.container,a&&e.item,l&&e.zeroMinWidth,...i,n!=="row"&&e[`direction-xs-${String(n)}`],d!=="wrap"&&e[`wrap-xs-${String(d)}`],...m]}})(({ownerState:r})=>f({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},r.wrap!=="wrap"&&{flexWrap:r.wrap}),je,$e,Pe,Be);function Ne(r,e){if(!r||r<=0)return[];if(typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number")return[`spacing-xs-${String(r)}`];const o=[];return e.forEach(t=>{const n=r[t];if(Number(n)>0){const a=`spacing-${t}-${String(n)}`;o.push(a)}}),o}const Te=r=>{const{classes:e,container:o,direction:t,item:n,spacing:a,wrap:s,zeroMinWidth:d,breakpoints:l}=r;let c=[];o&&(c=Ne(a,l));const i=[];l.forEach(u=>{const b=r[u];b&&i.push(`grid-${u}-${String(b)}`)});const m={root:["root",o&&"container",n&&"item",d&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,s!=="wrap"&&`wrap-xs-${String(s)}`,...i]};return Z(m,Me,e)},Ge=g.forwardRef(function(e,o){const t=J({props:e,name:"MuiGrid"}),{breakpoints:n}=Vr(),a=Ur(t),{className:s,columns:d,columnSpacing:l,component:c="div",container:i=!1,direction:m="row",item:u=!1,rowSpacing:b,spacing:h=0,wrap:w="wrap",zeroMinWidth:A=!1}=a,M=X(a,Ie),v=b||h,E=l||h,R=g.useContext(nr),I=i?d||12:R,C={},y=f({},M);n.keys.forEach(j=>{M[j]!=null&&(C[j]=M[j],delete y[j])});const S=f({},a,{columns:I,container:i,direction:m,item:u,rowSpacing:v,columnSpacing:E,wrap:w,zeroMinWidth:A,spacing:h},C,{breakpoints:n.keys}),B=Te(S);return p.jsx(nr.Provider,{value:I,children:p.jsx(Oe,f({ownerState:S,className:U(B.root,s),as:c,ref:o},y))})}),{addons:Fe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:ar}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:We}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var _e="storybook/actions",qe=`${_e}/action-event`,De={depth:10,clearOnStoryChange:!0,limit:50},Lr=(r,e)=>{let o=Object.getPrototypeOf(r);return!o||e(o)?o:Lr(o,e)},Ve=r=>!!(typeof r=="object"&&r&&Lr(r,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof r.persist=="function"),Ue=r=>{if(Ve(r)){let e=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),t=o==null?void 0:o.value;return typeof t=="object"&&(t==null?void 0:t.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(t.constructor.prototype)}),e}return r},He=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?de():Date.now().toString(36)+Math.random().toString(36).substring(2);function ir(r,e={}){let o={...De,...e},t=function(...n){var m,u;if(e.implicit){let b=(m="__STORYBOOK_PREVIEW__"in ar?ar.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(h=>h.phase==="playing"||h.phase==="rendering");if(b){let h=!((u=window==null?void 0:window.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),w=new We({phase:b.phase,name:r,deprecated:h});if(h)console.warn(w);else throw w}}let a=Fe.getChannel(),s=He(),d=5,l=n.map(Ue),c=n.length>1?l:l[0],i={id:s,count:0,data:{name:r,args:c},options:{...o,maxDepth:d+(o.depth||3),allowFunction:o.allowFunction||!1}};a.emit(qe,i)};return t.isAction=!0,t.implicit=e.implicit,t}function Ke({disabledSearch:r,onClose:e}){const[o,t]=g.useState(!1),n=g.useCallback(()=>{t(!r)},[r]),a=g.useCallback((s,d)=>{!d&&s&&(e==null||e(s)),t(!1)},[e]);return{isActive:o,showMenu:n,closeMenu:a}}function sr(r,e){if(r.inserted[e.name]===void 0)return r.insert("",e,r.sheet,!0)}function lr(r,e,o){var t=[],n=Sr(r,t,o);return t.length<2?o:n+e(t)}var Qe=function(e){var o=Hr(e);o.sheet.speedy=function(d){this.isSpeedy=d},o.compat=!0;var t=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var m=K(c,o.registered,void 0);return Kr(o,m,!1),o.key+"-"+m.name},n=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var m=K(c,o.registered),u="animation-"+m.name;return sr(o,{name:m.name,styles:"@keyframes "+u+"{"+m.styles+"}"}),u},a=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];var m=K(c,o.registered);sr(o,m)},s=function(){for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return lr(o.registered,t,Ye(c))};return{css:t,cx:s,injectGlobal:a,keyframes:n,hydrate:function(l){l.forEach(function(c){o.inserted[c]=!0})},flush:function(){o.registered={},o.inserted={},o.sheet.flush()},sheet:o.sheet,cache:o,getRegisteredStyles:Sr.bind(null,o.registered),merge:lr.bind(null,o.registered,t)}},Ye=function r(e){for(var o="",t=0;t<e.length;t++){var n=e[t];if(n!=null){var a=void 0;switch(typeof n){case"boolean":break;case"object":{if(Array.isArray(n))a=r(n);else{a="";for(var s in n)n[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=n}a&&(o&&(o+=" "),o+=a)}}return o},Je=Qe({key:"css"}),x=Je.css;function Xe(r,e){r.classList.add(e)}var Or=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/components-theme.ts
 */
  .remirror-editor-wrapper {
    padding-top: var(--rmr-space-3);
  }

  .remirror-button-active {
    color: var(--rmr-color-primary-text) !important;
    background-color: var(--rmr-color-primary) !important;
  }

  .remirror-button {
    display: inline-flex;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375em 0.75em;
    line-height: 1.5;
    border-radius: var(--rmr-radius-border);
    text-decoration: none;
    border: 1px solid var(--rmr-color-border);
    cursor: pointer;
    white-space: nowrap;
    color: var(--rmr-color-text);
    background-color: var(--rmr-color-background);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 100%;
  }

  .remirror-button[aria-disabled='true'] {
    cursor: auto;
  }

  .remirror-button:not([aria-disabled='true']):hover {
    color: var(--rmr-color-hover-primary-text);
    border-color: var(--rmr-color-hover-border);
    background-color: var(--rmr-color-hover-primary);
  }

  .remirror-button:not([aria-disabled='true']):active,
  .remirror-button:not([aria-disabled='true'])[data-active],
  .remirror-button:not([aria-disabled='true'])[aria-expanded='true'] {
    color: var(--rmr-color-active-primary-text);
    border-color: var(--rmr-color-active-border);
    background-color: var(--rmr-color-active-primary);
  }

  /* Ensure a perceivable button border for users with Windows High Contrast
  mode enabled https://moderncss.dev/css-button-styling-guide/ */

  @media screen and (-ms-high-contrast: active) {
    .remirror-button {
      border: 2px solid currentcolor;
    }
  }

  .remirror-composite {
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.75em;
    font-size: 100%;
    border: 0;
    color: inherit;
    background-color: inherit;
  }

  .remirror-composite:not([aria-selected='true']) {
    color: inherit;
    background-color: inherit;
  }

  [aria-activedescendant='*']:focus .remirror-composite[aria-selected='true'],
  [aria-activedescendant='*']:focus ~ * .remirror-composite[aria-selected='true'] {
    color: var(--rmr-color-text);
    background-color: var(--rmr-color-background);
  }

  .remirror-dialog {
    position: fixed;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--rmr-radius-border);
    padding: 1em;
    max-height: calc(100vh - 56px);
    outline: 0;
    border: 1px solid var(--rmr-color-border);
    color: var(--rmr-color-text);
    z-index: 999;
  }

  .remirror-dialog:focus {
    box-shadow: 0 0 0 0.2em var(--rmr-color-shadow-1);
  }

  .remirror-dialog-backdrop {
    background-color: var(--rmr-color-backdrop);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  .remirror-form > *:not(:first-child) {
    margin-top: 1rem;
  }

  .remirror-form-message {
    font-size: 0.8em;
    margin-top: 0.5rem !important;
  }

  .remirror-form-label {
    display: block;
    margin: 0 0 0.5rem 0 !important;
  }

  input[type='checkbox'] + .remirror-form-label,
  input[type='radio'] + .remirror-form-label {
    display: inline-block;
    margin: 0 0 0 0.5rem !important;
  }

  .remirror-form-group {
    display: block;
    color: var(--rmr-color-text);
    border: 1px solid var(--rmr-color-border);
    border-radius: var(--rmr-radius-border);
    padding: 0.5rem 1rem 1rem;
  }

  .remirror-form-group > * {
    display: block;
  }

  .remirror-group {
    display: flex;
  }

  .remirror-group > :not(:first-child) {
    margin-left: -1px;
  }

  .remirror-group > :not(:first-child):not(:last-child):not(.first-child):not(.last-child) {
    border-radius: 0;
  }

  .remirror-group > :first-child:not(:last-child),
  .remirror-group > .first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .remirror-group > :last-child:not(:first-child),
  .remirror-group > .last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .remirror-input {
    display: block;
    width: 100%;
    border-radius: var(--rmr-radius-border);
    padding: 0.5em 0.75em;
    font-size: 100%;
    border: 1px solid var(--rmr-hue-gray-2);
    color: var(--rmr-hue-gray-5);
    margin: 0 !important;
  }

  .remirror-input:focus {
    border-color: var(--rmr-hue-gray-3);
  }

  .remirror-menu {
    display: flex;
    border-radius: 0;
  }

  .remirror-menu-pane {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: var(--rmr-space-1);
    padding-bottom: var(--rmr-space-1);
    padding-right: var(--rmr-space-2);
  }

  .remirror-menu-pane-active {
    color: var(--rmr-color-primary-text);
    background-color: var(--rmr-color-primary);
  }

  .remirror-menu-dropdown-label {
    padding: 0 var(--rmr-space-2);
  }

  .remirror-menu-pane-icon {
    position: absolute;
    left: 8px;
    width: 20px;
    color: var(--rmr-hue-gray-7);
  }

  button:hover .remirror-menu-pane-icon,
  button:active .remirror-menu-pane-icon,
  [aria-checked='true'] .remirror-menu-pane-icon {
    color: var(--rmr-hue-gray-1);
  }

  .remirror-menu-pane-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: var(--rmr-space-3);
  }

  .remirror-menu-pane-shortcut {
    align-self: flex-end;
    color: var(--rmr-hue-gray-6);
  }

  button:hover .remirror-menu-pane-shortcut,
  button:active .remirror-menu-pane-shortcut,
  [aria-checked='true'] .remirror-menu-pane-shortcut {
    color: var(--rmr-hue-gray-1);
  }

  [role='menu'] > .remirror-menu-button-left {
    left: var(--rmr-space-2);
  }

  [role='menu'] > .remirror-menu-button-right {
    right: var(--rmr-space-2);
  }

  .remirror-menu-button-nested-left svg {
    margin-right: var(--rmr-space-2);
  }

  [role='menu'] > .remirror-menu-button-nested-right {
    padding-right: 2em !important;
  }

  .remirror-menu-button-nested-right svg {
    margin-left: var(--rmr-space-2);
  }

  .remirror-menu-button {
    position: relative;
  }

  .remirror-menu-button svg {
    fill: currentColor;
    width: 0.65em;
    height: 0.65em;
  }

  [role='menu'] > .remirror-menu-button svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  [role='menubar'] > .remirror-menu-button svg {
    display: none;
  }

  .remirror-menu-bar {
    position: relative;
    display: flex;
    white-space: nowrap;
    box-shadow: none !important;
  }

  .remirror-menu-bar[aria-orientation='vertical'] {
    padding: 0.25em 0;
  }

  .remirror-menu-bar[aria-orientation='horizontal'] {
    padding: 0;
  }

  .remirror-flex-column {
    flex-direction: column;
  }

  .remirror-flex-row {
    flex-direction: row;
  }

  .remirror-menu-item {
    line-height: 1.5;
    text-align: left;
    justify-content: flex-start;
    border: 0;
    border-radius: 0;
    font-size: 100%;
    background: transparent;
    color: var(--rmr-color-foreground);
    margin: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    text-decoration: none;
  }

  .remirror-menu-item:focus,
  .remirror-menu-item[aria-expanded='true'] {
    background-color: var(--rmr-color-primary);
    color: var(--rmr-color-primary-text);
    box-shadow: none !important;
  }

  .remirror-menu-item:active,
  .remirror-menu-item[data-active] {
    background-color: var(--rmr-color-active-primary) !important;
    color: var(--rmr-color-active-primary-text) !important;
  }

  .remirror-menu-item:disabled {
    opacity: 0.5;
  }

  .remirror-menu-item-row {
    padding: 0 var(--rmr-space-2);
  }

  .remirror-menu-item-column {
    padding: 0 var(--rmr-space-4);
  }

  .remirror-menu-item-checkbox {
    position: relative;
    outline: 0;
  }

  .remirror-menu-item-checkbox[aria-checked='true']:before {
    content: '✓';
    position: absolute;
    top: 0;
    left: 0.4em;
    width: 1em;
    height: 1em;
  }

  .remirror-menu-item-radio {
    position: relative;
    outline: 0;
  }

  .remirror-menu-item-radio[aria-checked='true']:before {
    content: '•';
    position: absolute;
    font-size: 1.4em;
    top: -0.25em;
    left: 0.35em;
    width: 0.7142857143em;
    height: 0.7142857143em;
  }

  .remirror-menu-group {
    display: inherit;
    flex-direction: inherit;
  }

  .remirror-floating-popover {
    /* padding: var(--rmr-space-2); */
    padding: 0;
    border: none;
    max-height: calc(100vh - 56px);
  }

  .remirror-popover [data-arrow] {
    background-color: transparent;
  }

  .remirror-popover [data-arrow] .stroke {
    fill: var(--rmr-color-border);
  }

  .remirror-popover [data-arrow] .fill {
    fill: var(--rmr-color-background);
  }

  .remirror-animated-popover {
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    opacity: 0;
    transform-origin: top center;
    transform: translate3d(0, -20px, 0);
  }

  [data-enter] .remirror-animated-popover {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .remirror-role {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: var(--rmr-font-family-default);
    color: var(--rmr-color-text);
    background-color: var(--rmr-color-background);
    /* border: 1px solid var(--rmr-color-border); */
  }

  .remirror-separator {
    border: 1px solid var(--rmr-color-border);
    border-width: 0 1px 0 0;
    margin: 0 0.5em;
    padding: 0;
    width: 0;
    height: auto;
  }

  .remirror-separator[aria-orientation='horizontal'] {
    border-width: 0 0 1px 0;
    margin: 0.5em 0;
    width: auto;
    height: 0;
  }

  .remirror-tab {
    background-color: transparent;
    border: 1px solid transparent;
    border-width: 1px 1px 0 1px;
    border-radius: var(--rmr-radius-border) var(--rmr-radius-border) 0 0;
    font-size: 100%;
    padding: 0.5em 1em;
    margin: 0 0 -1px 0;
  }

  .remirror-tab[aria-selected='true'] {
    background-color: var(--rmr-color-background);
    border-color: var(--rmr-color-border);
  }

  [aria-orientation='vertical'] .remirror-tab {
    border-width: 1px 0 1px 1px;
    border-radius: 0.2em 0 0 0.2em;
    margin: 0 -1px 0 0;
  }

  .remirror-tab-list {
    display: flex;
    flex-direction: row;
    border: 1px solid var(--rmr-color-border);
    border-width: 0 0 1px 0;
    margin: 0 0 1em 0;
  }

  .remirror-tab-list[aria-orientation='vertical'] {
    flex-direction: column;
    border-width: 0 1px 0 0;
    margin: 0 1em 0 0;
  }

  .remirror-tabbable:not([type='checkbox']):not([type='radio']) {
    /* transition: box-shadow 0.15s ease-in-out; */
    outline: 0;
  }

  .remirror-tabbable:not([type='checkbox']):not([type='radio']):focus {
    box-shadow: var(--rmr-color-outline) 0px 0px 0px 0.2em;
    position: relative;
    z-index: 2;
  }

  .remirror-tabbable:not([type='checkbox']):not([type='radio']):hover {
    z-index: 2;
  }

  .remirror-tabbable[aria-disabled='true'] {
    opacity: 0.5;
  }

  .remirror-toolbar {
    display: flex;
    flex-direction: row;

    overflow-y: auto;
  }

  .remirror-toolbar > *:not(:first-child) {
    margin: 0 0 0 0.5em;
  }

  .remirror-toolbar[aria-orientation='vertical'] {
    display: inline-flex;
    flex-direction: column;
  }

  .remirror-toolbar[aria-orientation='vertical'] > *:not(:first-child) {
    margin: 0.5em 0 0;
  }

  .remirror-tooltip {
    background-color: var(--rmr-color-faded);
    color: white;
    font-size: 0.8em;
    padding: 0.5rem;
    border-radius: var(--rmr-radius-border);
    z-index: 999;
  }

  .remirror-tooltip [data-arrow] {
    background-color: transparent;
  }

  .remirror-tooltip [data-arrow] .stroke {
    fill: transparent;
  }

  .remirror-tooltip [data-arrow] .fill {
    fill: var(--rmr-hue-gray-8);
  }

  .remirror-table-size-editor {
    background: var(--rmr-color-background);
    box-shadow: var(--rmr-color-shadow-1);
    font-family: var(--rmr-font-family-default);
    font-size: var(--rmr-font-size-1);
  }

  .remirror-table-size-editor-body {
    position: relative;
  }

  .remirror-table-size-editor-body::after {
    background: rgba(0, 0, 0, 0);
    bottom: -50px;
    content: '';
    left: 0;
    position: absolute;
    right: -50px;
    top: -50px;
  }

  .remirror-table-size-editor-cell {
    border: var(--rmr-color-border);
    position: absolute;
    z-index: 2;
  }

  .remirror-table-size-editor-cell-selected {
    background: var(--rmr-color-table-selected-border);
    border-color: var(--rmr-color-border);
  }

  .remirror-table-size-editor-footer {
    padding-bottom: var(--rmr-space-1);
    text-align: center;
  }

  .remirror-color-picker {
    background: var(--rmr-color-background);
    box-shadow: var(--rmr-box-shadow-1);
    font-family: var(--rmr-font-family-default);
    font-size: var(--rmr-font-size-1);
    padding: var(--rmr-space-2) var(--rmr-space-3);
  }

  .remirror-color-picker-cell {
  }

  .remirror-color-picker-cell-selected {
  }
`,Nr=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/core-theme.ts
 */
  .remirror-editor.ProseMirror {
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    position: relative;
    font-variant-ligatures: none;
    font-feature-settings: 'liga' 0;
    overflow-y: scroll;
  }

  .remirror-editor.ProseMirror pre {
    white-space: pre-wrap;
  }

  .remirror-editor.ProseMirror li {
    position: relative;
  }

  .remirror-editor.ProseMirror hr {
    border-color: #2e2e2e;
  }

  /* Protect against generic img rules. See also https://github.com/ProseMirror/prosemirror-view/commit/aaa50d592074c8063fc2ef77907ab6d0373822fb */

  .remirror-editor.ProseMirror img.ProseMirror-separator {
    display: inline !important;
    border: none !important;
    margin: 0 !important;
  }
  .remirror-editor.ProseMirror-hideselection *::-moz-selection {
    background: transparent;
    color: inherit;
  }
  .remirror-editor.ProseMirror-hideselection *::selection {
    background: transparent;
    color: inherit;
  }
  .remirror-editor.ProseMirror-hideselection *::-moz-selection {
    background: transparent;
    color: inherit;
  }
  .remirror-editor.ProseMirror-hideselection {
    caret-color: transparent;
  }
  .remirror-editor .ProseMirror-selectednode {
    outline: 2px solid #8cf;
  }
  /* Make sure li selections wrap around markers */
  .remirror-editor li.ProseMirror-selectednode {
    outline: none;
  }
  .remirror-editor li.ProseMirror-selectednode:after {
    content: '';
    position: absolute;
    left: -32px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    border: 2px solid #8cf;
    pointer-events: none;
  }
`,Ze=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-blockquote-theme.ts
 */
  .remirror-editor.ProseMirror blockquote {
    border-left: 3px solid var(--rmr-hue-gray-3);
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    font-style: italic;
  }
  .remirror-editor.ProseMirror blockquote p {
    color: #888;
  }
`,ro=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-callout-theme.ts
 */
  .remirror-editor div[data-callout-type] {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    padding: 10px;
    border-left: 2px solid transparent;
  }

  .remirror-editor div[data-callout-type] > :not(.remirror-callout-emoji-wrapper) {
    margin-left: 8px;
    flex-grow: 1;
  }
  .remirror-editor div[data-callout-type='info'] {
    background: #eef6fc;
    border-left-color: #3298dc;
  }
  .remirror-editor div[data-callout-type='warning'] {
    background: #fffbeb;
    border-left-color: #ffdd57;
  }
  .remirror-editor div[data-callout-type='error'] {
    background: #feecf0;
    border-left-color: #f14668;
  }
  .remirror-editor div[data-callout-type='success'] {
    background: #effaf3;
    border-left-color: #48c774;
  }
  .remirror-editor div[data-callout-type='blank'] {
    background: #f8f8f8;
  }
`,eo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-code-block-theme.ts
 */
  .remirror-wrap {
    white-space: pre-wrap !important;
  }

  .remirror-language-select-positioner {
    position: absolute;
    top: var(--y);
    left: var(--x);
  }

  .remirror-language-select-width {
    width: var(--w);
  }

  .remirror-a11y-dark code[class*='language-'],
  .remirror-a11y-dark pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */

  .remirror-a11y-dark pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  .remirror-a11y-dark :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-a11y-dark :not(pre) > code[class*='language-'],
  .remirror-a11y-dark pre[class*='language-'] {
    background: #2b2b2b;
  }

  /* Inline code */

  .remirror-a11y-dark :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .remirror-a11y-dark .token.comment,
  .remirror-a11y-dark .token.prolog,
  .remirror-a11y-dark .token.doctype,
  .remirror-a11y-dark .token.cdata {
    color: #d4d0ab;
  }

  .remirror-a11y-dark .token.punctuation,
  .remirror-a11y-dark .token.punctuation.important {
    color: #fefefe;
  }

  .remirror-a11y-dark .token.property,
  .remirror-a11y-dark .token.tag,
  .remirror-a11y-dark .token.constant,
  .remirror-a11y-dark .token.symbol,
  .remirror-a11y-dark .token.deleted {
    color: #ffa07a;
  }

  .remirror-a11y-dark .token.boolean,
  .remirror-a11y-dark .token.number {
    color: #00e0e0;
  }

  .remirror-a11y-dark .token.selector,
  .remirror-a11y-dark .token.attr-name,
  .remirror-a11y-dark .token.string,
  .remirror-a11y-dark .token.char,
  .remirror-a11y-dark .token.builtin,
  .remirror-a11y-dark .token.inserted {
    color: #abe338;
  }

  .remirror-a11y-dark .token.operator,
  .remirror-a11y-dark .token.entity,
  .remirror-a11y-dark .token.url,
  .remirror-a11y-dark .language-css .token.string,
  .remirror-a11y-dark .style .token.string,
  .remirror-a11y-dark .token.variable {
    color: #00e0e0;
  }

  .remirror-a11y-dark .token.atrule,
  .remirror-a11y-dark .token.attr-value,
  .remirror-a11y-dark .token.function {
    color: #ffd700;
  }

  .remirror-a11y-dark .token.keyword {
    color: #00e0e0;
  }

  .remirror-a11y-dark .token.regex,
  .remirror-a11y-dark .token.important {
    color: #ffd700;
  }

  .remirror-a11y-dark .token.important,
  .remirror-a11y-dark .token.bold {
    font-weight: bold;
  }

  .remirror-a11y-dark .token.italic {
    font-style: italic;
  }

  .remirror-a11y-dark .token.entity {
    cursor: help;
  }

  @media screen and (-ms-high-contrast: active) {
    .remirror-a11y-dark code[class*='language-'],
    .remirror-a11y-dark pre[class*='language-'] {
      color: windowText;
      background: window;
    }
    .remirror-a11y-dark :not(pre) > code[class*='language-'],
    .remirror-a11y-dark pre[class*='language-'] {
      background: window;
    }
    .remirror-a11y-dark .token.important {
      background: highlight;
      color: window;
      font-weight: normal;
    }
    .remirror-a11y-dark .token.atrule,
    .remirror-a11y-dark .token.attr-value,
    .remirror-a11y-dark .token.function,
    .remirror-a11y-dark .token.keyword,
    .remirror-a11y-dark .token.operator,
    .remirror-a11y-dark .token.selector {
      font-weight: bold;
    }
    .remirror-a11y-dark .token.attr-value,
    .remirror-a11y-dark .token.comment,
    .remirror-a11y-dark .token.doctype,
    .remirror-a11y-dark .token.function,
    .remirror-a11y-dark .token.keyword,
    .remirror-a11y-dark .token.operator,
    .remirror-a11y-dark .token.property,
    .remirror-a11y-dark .token.string {
      color: highlight;
    }
    .remirror-a11y-dark .token.attr-value,
    .remirror-a11y-dark .token.url {
      font-weight: normal;
    }
  }

  .remirror-atom-dark code[class*='language-'],
  .remirror-atom-dark pre[class*='language-'] {
    color: #c5c8c6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */

  .remirror-atom-dark pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  .remirror-atom-dark :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-atom-dark :not(pre) > code[class*='language-'],
  .remirror-atom-dark pre[class*='language-'] {
    background: #1d1f21;
  }

  /* Inline code */

  .remirror-atom-dark :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-atom-dark .token.comment,
  .remirror-atom-dark .token.prolog,
  .remirror-atom-dark .token.doctype,
  .remirror-atom-dark .token.cdata {
    color: #7c7c7c;
  }

  .remirror-atom-dark .token.punctuation,
  .remirror-atom-dark .token.punctuation.important {
    color: #c5c8c6;
  }

  .remirror-atom-dark .namespace {
    opacity: 0.7;
  }

  .remirror-atom-dark .token.property,
  .remirror-atom-dark .token.keyword,
  .remirror-atom-dark .token.tag {
    color: #96cbfe;
  }

  .remirror-atom-dark .token.class-name {
    color: #ffffb6;
    text-decoration: underline;
  }

  .remirror-atom-dark .token.boolean,
  .remirror-atom-dark .token.constant {
    color: #99cc99;
  }

  .remirror-atom-dark .token.symbol,
  .remirror-atom-dark .token.deleted {
    color: #f92672;
  }

  .remirror-atom-dark .token.number {
    color: #ff73fd;
  }

  .remirror-atom-dark .token.selector,
  .remirror-atom-dark .token.attr-name,
  .remirror-atom-dark .token.string,
  .remirror-atom-dark .token.char,
  .remirror-atom-dark .token.builtin,
  .remirror-atom-dark .token.inserted {
    color: #a8ff60;
  }

  .remirror-atom-dark .token.variable {
    color: #c6c5fe;
  }

  .remirror-atom-dark .token.operator {
    color: #ededed;
  }

  .remirror-atom-dark .token.entity {
    color: #ffffb6;
    /* text-decoration: underline; */
  }

  .remirror-atom-dark .token.url {
    color: #96cbfe;
  }

  .remirror-atom-dark .language-css .token.string,
  .remirror-atom-dark .style .token.string {
    color: #87c38a;
  }

  .remirror-atom-dark .token.atrule,
  .remirror-atom-dark .token.attr-value {
    color: #f9ee98;
  }

  .remirror-atom-dark .token.function {
    color: #dad085;
  }

  .remirror-atom-dark .token.regex {
    color: #e9c062;
  }

  .remirror-atom-dark .token.important {
    color: #fd971f;
  }

  .remirror-atom-dark .token.important,
  .remirror-atom-dark .token.bold {
    font-weight: bold;
  }

  .remirror-atom-dark .token.italic {
    font-style: italic;
  }

  .remirror-atom-dark .token.entity {
    cursor: help;
  }

  .remirror-base16-ateliersulphurpool-light code[class*='language-'],
  .remirror-base16-ateliersulphurpool-light pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #f5f7ff;
    color: #5e6687;
  }

  .remirror-base16-ateliersulphurpool-light pre[class*='language-']::-moz-selection,
  .remirror-base16-ateliersulphurpool-light pre[class*='language-'] ::-moz-selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-']::-moz-selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #dfe2f1;
  }

  .remirror-base16-ateliersulphurpool-light pre[class*='language-']::-moz-selection,
  .remirror-base16-ateliersulphurpool-light pre[class*='language-'] ::-moz-selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-']::-moz-selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #dfe2f1;
  }

  .remirror-base16-ateliersulphurpool-light pre[class*='language-']::selection,
  .remirror-base16-ateliersulphurpool-light pre[class*='language-'] ::selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-']::selection,
  .remirror-base16-ateliersulphurpool-light code[class*='language-'] ::selection {
    text-shadow: none;
    background: #dfe2f1;
  }

  /* Code blocks */

  .remirror-base16-ateliersulphurpool-light pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-base16-ateliersulphurpool-light
    :has(.remirror-language-select-positioner)
    ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-base16-ateliersulphurpool-light :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-base16-ateliersulphurpool-light .token.comment,
  .remirror-base16-ateliersulphurpool-light .token.prolog,
  .remirror-base16-ateliersulphurpool-light .token.doctype,
  .remirror-base16-ateliersulphurpool-light .token.cdata {
    color: #898ea4;
  }

  .remirror-base16-ateliersulphurpool-light .token.punctuation,
  .remirror-base16-ateliersulphurpool-light .token.punctuation.important {
    color: #5e6687;
  }

  .remirror-base16-ateliersulphurpool-light .token.namespace {
    opacity: 0.7;
  }

  .remirror-base16-ateliersulphurpool-light .token.operator,
  .remirror-base16-ateliersulphurpool-light .token.boolean,
  .remirror-base16-ateliersulphurpool-light .token.number {
    color: #c76b29;
  }

  .remirror-base16-ateliersulphurpool-light .token.property {
    color: #c08b30;
  }

  .remirror-base16-ateliersulphurpool-light .token.tag {
    color: #3d8fd1;
  }

  .remirror-base16-ateliersulphurpool-light .token.string {
    color: #22a2c9;
  }

  .remirror-base16-ateliersulphurpool-light .token.selector {
    color: #6679cc;
  }

  .remirror-base16-ateliersulphurpool-light .token.attr-name {
    color: #c76b29;
  }

  .remirror-base16-ateliersulphurpool-light .token.entity,
  .remirror-base16-ateliersulphurpool-light .token.url,
  .remirror-base16-ateliersulphurpool-light .language-css .token.string,
  .remirror-base16-ateliersulphurpool-light .style .token.string {
    color: #22a2c9;
  }

  .remirror-base16-ateliersulphurpool-light .token.attr-value,
  .remirror-base16-ateliersulphurpool-light .token.keyword,
  .remirror-base16-ateliersulphurpool-light .token.control,
  .remirror-base16-ateliersulphurpool-light .token.directive,
  .remirror-base16-ateliersulphurpool-light .token.unit {
    color: #ac9739;
  }

  .remirror-base16-ateliersulphurpool-light .token.statement,
  .remirror-base16-ateliersulphurpool-light .token.regex,
  .remirror-base16-ateliersulphurpool-light .token.atrule {
    color: #22a2c9;
  }

  .remirror-base16-ateliersulphurpool-light .token.placeholder,
  .remirror-base16-ateliersulphurpool-light .token.variable {
    color: #3d8fd1;
  }

  .remirror-base16-ateliersulphurpool-light .token.deleted {
    text-decoration: line-through;
  }

  .remirror-base16-ateliersulphurpool-light .token.inserted {
    border-bottom: 1px dotted #202746;
    text-decoration: none;
  }

  .remirror-base16-ateliersulphurpool-light .token.italic {
    font-style: italic;
  }

  .remirror-base16-ateliersulphurpool-light .token.important,
  .remirror-base16-ateliersulphurpool-light .token.bold {
    font-weight: bold;
  }

  .remirror-base16-ateliersulphurpool-light .token.important {
    color: #c94922;
  }

  .remirror-base16-ateliersulphurpool-light .token.entity {
    cursor: help;
  }

  .remirror-base16-ateliersulphurpool-light pre > code.highlight {
    outline: 0.4em solid #c94922;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-base16-ateliersulphurpool-light .line-numbers .line-numbers-rows {
    border-right-color: #dfe2f1;
  }

  .remirror-base16-ateliersulphurpool-light .line-numbers-rows > span:before {
    color: #979db4;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */

  .remirror-base16-ateliersulphurpool-light .line-highlight {
    background: rgba(107, 115, 148, 0.2);
    background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
  }

  .remirror-cb code[class*='language-'],
  .remirror-cb pre[class*='language-'] {
    color: #fff;
    text-shadow: 0 1px 1px #000;
    font-family: Menlo, Monaco, 'Courier New', monospace;
    direction: ltr;
    text-align: left;
    word-spacing: normal;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.4;
    background: none;
    border: 0;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .remirror-cb pre[class*='language-'] code {
    float: left;
    padding: 0 15px 0 0;
  }

  .remirror-cb pre[class*='language-'],
  .remirror-cb :not(pre) > code[class*='language-'] {
    background: #222;
  }

  /* Code blocks */

  .remirror-cb pre[class*='language-'] {
    padding: 15px;
    margin: 1em 0;
    overflow: auto;
    border-radius: 8px;
  }

  .remirror-cb :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-cb :not(pre) > code[class*='language-'] {
    padding: 5px 10px;
    line-height: 1;
    border-radius: 3px;
  }

  .remirror-cb .token.comment,
  .remirror-cb .token.prolog,
  .remirror-cb .token.doctype,
  .remirror-cb .token.cdata {
    color: #797979;
  }

  .remirror-cb .token.selector,
  .remirror-cb .token.operator,
  .remirror-cb .token.punctuation,
  .remirror-cb .token.punctuation.important {
    color: #fff;
  }

  .remirror-cb .token.namespace {
    opacity: 0.7;
  }

  .remirror-cb .token.tag,
  .remirror-cb .token.boolean {
    color: #ffd893;
  }

  .remirror-cb .token.atrule,
  .remirror-cb .token.attr-value,
  .remirror-cb .token.hex,
  .remirror-cb .token.string {
    color: #b0c975;
  }

  .remirror-cb .token.property,
  .remirror-cb .token.entity,
  .remirror-cb .token.url,
  .remirror-cb .token.attr-name,
  .remirror-cb .token.keyword {
    color: #c27628;
  }

  .remirror-cb .token.regex {
    color: #9b71c6;
  }

  .remirror-cb .token.entity {
    cursor: help;
  }

  .remirror-cb .token.function,
  .remirror-cb .token.constant {
    color: #e5a638;
  }

  .remirror-cb .token.variable {
    color: #fdfba8;
  }

  .remirror-cb .token.number {
    color: #8799b0;
  }

  .remirror-cb .token.important,
  .remirror-cb .token.deliminator {
    color: #e45734;
  }

  /* Line highlight plugin */

  .remirror-cb pre[data-line] {
    position: relative;
    padding: 1em 0 1em 3em;
  }

  .remirror-cb .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 1em; /* Same as .prism's padding-top */
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }

  .remirror-cb .line-highlight:before,
  .remirror-cb .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: 0.3em;
    left: 0.6em;
    min-width: 1em;
    padding: 0 0.5em;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    font: bold 65%/1.5 sans-serif;
    text-align: center;
    border-radius: 8px;
    text-shadow: none;
  }

  .remirror-cb .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: 0.4em;
  }

  /* for line numbers */

  .remirror-cb .line-numbers-rows {
    margin: 0;
  }

  .remirror-cb .line-numbers-rows span {
    padding-right: 10px;
    border-right: 3px #d9d336 solid;
  }

  .remirror-darcula code[class*='language-'],
  .remirror-darcula pre[class*='language-'] {
    color: #a9b7c6;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .remirror-darcula pre[class*='language-']::-moz-selection,
  .remirror-darcula pre[class*='language-'] ::-moz-selection,
  .remirror-darcula code[class*='language-']::-moz-selection,
  .remirror-darcula code[class*='language-'] ::-moz-selection {
    color: inherit;
    background: rgba(33, 66, 131, 0.85);
  }

  .remirror-darcula pre[class*='language-']::-moz-selection,
  .remirror-darcula pre[class*='language-'] ::-moz-selection,
  .remirror-darcula code[class*='language-']::-moz-selection,
  .remirror-darcula code[class*='language-'] ::-moz-selection {
    color: inherit;
    background: rgba(33, 66, 131, 0.85);
  }

  .remirror-darcula pre[class*='language-']::selection,
  .remirror-darcula pre[class*='language-'] ::selection,
  .remirror-darcula code[class*='language-']::selection,
  .remirror-darcula code[class*='language-'] ::selection {
    color: inherit;
    background: rgba(33, 66, 131, 0.85);
  }

  /* Code blocks */

  .remirror-darcula pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-darcula :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-darcula :not(pre) > code[class*='language-'],
  .remirror-darcula pre[class*='language-'] {
    background: #2b2b2b;
  }

  /* Inline code */

  .remirror-darcula :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-darcula .token.comment,
  .remirror-darcula .token.prolog,
  .remirror-darcula .token.cdata {
    color: #808080;
  }

  .remirror-darcula .token.delimiter,
  .remirror-darcula .token.boolean,
  .remirror-darcula .token.keyword,
  .remirror-darcula .token.selector,
  .remirror-darcula .token.important,
  .remirror-darcula .token.atrule {
    color: #cc7832;
  }

  .remirror-darcula .token.operator,
  .remirror-darcula .token.punctuation,
  .remirror-darcula .token.attr-name {
    color: #a9b7c6;
  }

  .remirror-darcula .token.tag,
  .remirror-darcula .token.tag .punctuation,
  .remirror-darcula .token.doctype,
  .remirror-darcula .token.builtin {
    color: #e8bf6a;
  }

  .remirror-darcula .token.entity,
  .remirror-darcula .token.number,
  .remirror-darcula .token.symbol {
    color: #6897bb;
  }

  .remirror-darcula .token.property,
  .remirror-darcula .token.constant,
  .remirror-darcula .token.variable {
    color: #9876aa;
  }

  .remirror-darcula .token.string,
  .remirror-darcula .token.char {
    color: #6a8759;
  }

  .remirror-darcula .token.attr-value,
  .remirror-darcula .token.attr-value .punctuation {
    color: #a5c261;
  }

  .remirror-darcula .token.attr-value .punctuation:first-of-type {
    color: #a9b7c6;
  }

  .remirror-darcula .token.url {
    color: #287bde;
    text-decoration: underline;
  }

  .remirror-darcula .token.function {
    color: #ffc66d;
  }

  .remirror-darcula .token.regex {
    background: #364135;
  }

  .remirror-darcula .token.bold {
    font-weight: bold;
  }

  .remirror-darcula .token.italic {
    font-style: italic;
  }

  .remirror-darcula .token.inserted {
    background: #294436;
  }

  .remirror-darcula .token.deleted {
    background: #484a4a;
  }

  /*code.language-css .token.punctuation, .token.punctuation.important {color:
  #cc7832;
}*/

  .remirror-darcula code.language-css .token.property,
  .remirror-darcula code.language-css .token.property + .token.punctuation,
  .remirror-darcula .token.punctuation.important {
    color: #a9b7c6;
  }

  .remirror-darcula code.language-css .token.id {
    color: #ffc66d;
  }

  .remirror-darcula code.language-css .token.selector > .token.class,
  .remirror-darcula code.language-css .token.selector > .token.attribute,
  .remirror-darcula code.language-css .token.selector > .token.pseudo-class,
  .remirror-darcula code.language-css .token.selector > .token.pseudo-element {
    color: #ffc66d;
  }

  .remirror-dracula code[class*='language-'],
  .remirror-dracula pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */

  .remirror-dracula pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  .remirror-dracula :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-dracula :not(pre) > code[class*='language-'],
  .remirror-dracula pre[class*='language-'] {
    background: #282a36;
  }

  /* Inline code */

  .remirror-dracula :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .remirror-dracula .token.comment,
  .remirror-dracula .token.prolog,
  .remirror-dracula .token.doctype,
  .remirror-dracula .token.cdata {
    color: #6272a4;
  }

  .remirror-dracula .token.punctuation,
  .remirror-dracula .token.punctuation.important {
    color: #f8f8f2;
  }

  .remirror-dracula .namespace {
    opacity: 0.7;
  }

  .remirror-dracula .token.property,
  .remirror-dracula .token.tag,
  .remirror-dracula .token.constant,
  .remirror-dracula .token.symbol,
  .remirror-dracula .token.deleted {
    color: #ff79c6;
  }

  .remirror-dracula .token.boolean,
  .remirror-dracula .token.number {
    color: #bd93f9;
  }

  .remirror-dracula .token.selector,
  .remirror-dracula .token.attr-name,
  .remirror-dracula .token.string,
  .remirror-dracula .token.char,
  .remirror-dracula .token.builtin,
  .remirror-dracula .token.inserted {
    color: #50fa7b;
  }

  .remirror-dracula .token.operator,
  .remirror-dracula .token.entity,
  .remirror-dracula .token.url,
  .remirror-dracula .language-css .token.string,
  .remirror-dracula .style .token.string,
  .remirror-dracula .token.variable {
    color: #f8f8f2;
  }

  .remirror-dracula .token.atrule,
  .remirror-dracula .token.attr-value,
  .remirror-dracula .token.function,
  .remirror-dracula .token.class-name {
    color: #f1fa8c;
  }

  .remirror-dracula .token.keyword {
    color: #8be9fd;
  }

  .remirror-dracula .token.regex,
  .remirror-dracula .token.important {
    color: #ffb86c;
  }

  .remirror-dracula .token.important,
  .remirror-dracula .token.bold {
    font-weight: bold;
  }

  .remirror-dracula .token.italic {
    font-style: italic;
  }

  .remirror-dracula .token.entity {
    cursor: help;
  }

  .remirror-duotone-dark code[class*='language-'],
  .remirror-duotone-dark pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #2a2734;
    color: #9a86fd;
  }

  .remirror-duotone-dark pre[class*='language-']::-moz-selection,
  .remirror-duotone-dark pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-dark code[class*='language-']::-moz-selection,
  .remirror-duotone-dark code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6a51e6;
  }

  .remirror-duotone-dark pre[class*='language-']::-moz-selection,
  .remirror-duotone-dark pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-dark code[class*='language-']::-moz-selection,
  .remirror-duotone-dark code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6a51e6;
  }

  .remirror-duotone-dark pre[class*='language-']::selection,
  .remirror-duotone-dark pre[class*='language-'] ::selection,
  .remirror-duotone-dark code[class*='language-']::selection,
  .remirror-duotone-dark code[class*='language-'] ::selection {
    text-shadow: none;
    background: #6a51e6;
  }

  /* Code blocks */

  .remirror-duotone-dark pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-dark :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-dark :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-dark .token.comment,
  .remirror-duotone-dark .token.prolog,
  .remirror-duotone-dark .token.doctype,
  .remirror-duotone-dark .token.cdata {
    color: #6c6783;
  }

  .remirror-duotone-dark .token.punctuation,
  .remirror-duotone-dark .token.punctuation.important {
    color: #6c6783;
  }

  .remirror-duotone-dark .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-dark .token.tag,
  .remirror-duotone-dark .token.operator,
  .remirror-duotone-dark .token.number {
    color: #e09142;
  }

  .remirror-duotone-dark .token.property,
  .remirror-duotone-dark .token.function {
    color: #9a86fd;
  }

  .remirror-duotone-dark .token.tag-id,
  .remirror-duotone-dark .token.selector,
  .remirror-duotone-dark .token.atrule-id {
    color: #eeebff;
  }

  .remirror-duotone-dark code.language-javascript,
  .remirror-duotone-dark .token.attr-name {
    color: #c4b9fe;
  }

  .remirror-duotone-dark code.language-css,
  .remirror-duotone-dark code.language-scss,
  .remirror-duotone-dark .token.boolean,
  .remirror-duotone-dark .token.string,
  .remirror-duotone-dark .token.entity,
  .remirror-duotone-dark .token.url,
  .remirror-duotone-dark .language-css .token.string,
  .remirror-duotone-dark .language-scss .token.string,
  .remirror-duotone-dark .style .token.string,
  .remirror-duotone-dark .token.attr-value,
  .remirror-duotone-dark .token.keyword,
  .remirror-duotone-dark .token.control,
  .remirror-duotone-dark .token.directive,
  .remirror-duotone-dark .token.unit,
  .remirror-duotone-dark .token.statement,
  .remirror-duotone-dark .token.regex,
  .remirror-duotone-dark .token.atrule {
    color: #ffcc99;
  }

  .remirror-duotone-dark .token.placeholder,
  .remirror-duotone-dark .token.variable {
    color: #ffcc99;
  }

  .remirror-duotone-dark .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-dark .token.inserted {
    border-bottom: 1px dotted #eeebff;
    text-decoration: none;
  }

  .remirror-duotone-dark .token.italic {
    font-style: italic;
  }

  .remirror-duotone-dark .token.important,
  .remirror-duotone-dark .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-dark .token.important {
    color: #c4b9fe;
  }

  .remirror-duotone-dark .token.entity {
    cursor: help;
  }

  .remirror-duotone-dark pre > code.highlight {
    outline: 0.4em solid #8a75f5;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-dark .line-numbers .line-numbers-rows {
    border-right-color: #2c2937;
  }

  .remirror-duotone-dark .line-numbers-rows > span:before {
    color: #3c3949;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-duotone-dark .line-highlight {
    background: rgba(224, 145, 66, 0.2);
    background: linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0));
  }

  .remirror-duotone-earth code[class*='language-'],
  .remirror-duotone-earth pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #322d29;
    color: #88786d;
  }

  .remirror-duotone-earth pre[class*='language-']::-moz-selection,
  .remirror-duotone-earth pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-earth code[class*='language-']::-moz-selection,
  .remirror-duotone-earth code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6f5849;
  }

  .remirror-duotone-earth pre[class*='language-']::-moz-selection,
  .remirror-duotone-earth pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-earth code[class*='language-']::-moz-selection,
  .remirror-duotone-earth code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6f5849;
  }

  .remirror-duotone-earth pre[class*='language-']::selection,
  .remirror-duotone-earth pre[class*='language-'] ::selection,
  .remirror-duotone-earth code[class*='language-']::selection,
  .remirror-duotone-earth code[class*='language-'] ::selection {
    text-shadow: none;
    background: #6f5849;
  }

  /* Code blocks */

  .remirror-duotone-earth pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-earth :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-earth :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-earth .token.comment,
  .remirror-duotone-earth .token.prolog,
  .remirror-duotone-earth .token.doctype,
  .remirror-duotone-earth .token.cdata {
    color: #6a5f58;
  }

  .remirror-duotone-earth .token.punctuation,
  .remirror-duotone-earth .token.punctuation.important {
    color: #6a5f58;
  }

  .remirror-duotone-earth .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-earth .token.tag,
  .remirror-duotone-earth .token.operator,
  .remirror-duotone-earth .token.number {
    color: #bfa05a;
  }

  .remirror-duotone-earth .token.property,
  .remirror-duotone-earth .token.function {
    color: #88786d;
  }

  .remirror-duotone-earth .token.tag-id,
  .remirror-duotone-earth .token.selector,
  .remirror-duotone-earth .token.atrule-id {
    color: #fff3eb;
  }

  .remirror-duotone-earth code.language-javascript,
  .remirror-duotone-earth .token.attr-name {
    color: #a48774;
  }

  .remirror-duotone-earth code.language-css,
  .remirror-duotone-earth code.language-scss,
  .remirror-duotone-earth .token.boolean,
  .remirror-duotone-earth .token.string,
  .remirror-duotone-earth .token.entity,
  .remirror-duotone-earth .token.url,
  .remirror-duotone-earth .language-css .token.string,
  .remirror-duotone-earth .language-scss .token.string,
  .remirror-duotone-earth .style .token.string,
  .remirror-duotone-earth .token.attr-value,
  .remirror-duotone-earth .token.keyword,
  .remirror-duotone-earth .token.control,
  .remirror-duotone-earth .token.directive,
  .remirror-duotone-earth .token.unit,
  .remirror-duotone-earth .token.statement,
  .remirror-duotone-earth .token.regex,
  .remirror-duotone-earth .token.atrule {
    color: #fcc440;
  }

  .remirror-duotone-earth .token.placeholder,
  .remirror-duotone-earth .token.variable {
    color: #fcc440;
  }

  .remirror-duotone-earth .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-earth .token.inserted {
    border-bottom: 1px dotted #fff3eb;
    text-decoration: none;
  }

  .remirror-duotone-earth .token.italic {
    font-style: italic;
  }

  .remirror-duotone-earth .token.important,
  .remirror-duotone-earth .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-earth .token.important {
    color: #a48774;
  }

  .remirror-duotone-earth .token.entity {
    cursor: help;
  }

  .remirror-duotone-earth pre > code.highlight {
    outline: 0.4em solid #816d5f;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-earth .line-numbers .line-numbers-rows {
    border-right-color: #35302b;
  }

  .remirror-duotone-earth .line-numbers-rows > span:before {
    color: #46403d;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-duotone-earth .line-highlight {
    background: rgba(191, 160, 90, 0.2);
    background: linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0));
  }

  .remirror-duotone-forest code[class*='language-'],
  .remirror-duotone-forest pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #2a2d2a;
    color: #687d68;
  }

  .remirror-duotone-forest pre[class*='language-']::-moz-selection,
  .remirror-duotone-forest pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-forest code[class*='language-']::-moz-selection,
  .remirror-duotone-forest code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #435643;
  }

  .remirror-duotone-forest pre[class*='language-']::-moz-selection,
  .remirror-duotone-forest pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-forest code[class*='language-']::-moz-selection,
  .remirror-duotone-forest code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #435643;
  }

  .remirror-duotone-forest pre[class*='language-']::selection,
  .remirror-duotone-forest pre[class*='language-'] ::selection,
  .remirror-duotone-forest code[class*='language-']::selection,
  .remirror-duotone-forest code[class*='language-'] ::selection {
    text-shadow: none;
    background: #435643;
  }

  /* Code blocks */

  .remirror-duotone-forest pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-forest :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-forest :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-forest .token.comment,
  .remirror-duotone-forest .token.prolog,
  .remirror-duotone-forest .token.doctype,
  .remirror-duotone-forest .token.cdata {
    color: #535f53;
  }

  .remirror-duotone-forest .token.punctuation,
  .remirror-duotone-forest .token.punctuation.important {
    color: #535f53;
  }

  .remirror-duotone-forest .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-forest .token.tag,
  .remirror-duotone-forest .token.operator,
  .remirror-duotone-forest .token.number {
    color: #a2b34d;
  }

  .remirror-duotone-forest .token.property,
  .remirror-duotone-forest .token.function {
    color: #687d68;
  }

  .remirror-duotone-forest .token.tag-id,
  .remirror-duotone-forest .token.selector,
  .remirror-duotone-forest .token.atrule-id {
    color: #f0fff0;
  }

  .remirror-duotone-forest code.language-javascript,
  .remirror-duotone-forest .token.attr-name {
    color: #b3d6b3;
  }

  .remirror-duotone-forest code.language-css,
  .remirror-duotone-forest code.language-scss,
  .remirror-duotone-forest .token.boolean,
  .remirror-duotone-forest .token.string,
  .remirror-duotone-forest .token.entity,
  .remirror-duotone-forest .token.url,
  .remirror-duotone-forest .language-css .token.string,
  .remirror-duotone-forest .language-scss .token.string,
  .remirror-duotone-forest .style .token.string,
  .remirror-duotone-forest .token.attr-value,
  .remirror-duotone-forest .token.keyword,
  .remirror-duotone-forest .token.control,
  .remirror-duotone-forest .token.directive,
  .remirror-duotone-forest .token.unit,
  .remirror-duotone-forest .token.statement,
  .remirror-duotone-forest .token.regex,
  .remirror-duotone-forest .token.atrule {
    color: #e5fb79;
  }

  .remirror-duotone-forest .token.placeholder,
  .remirror-duotone-forest .token.variable {
    color: #e5fb79;
  }

  .remirror-duotone-forest .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-forest .token.inserted {
    border-bottom: 1px dotted #f0fff0;
    text-decoration: none;
  }

  .remirror-duotone-forest .token.italic {
    font-style: italic;
  }

  .remirror-duotone-forest .token.important,
  .remirror-duotone-forest .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-forest .token.important {
    color: #b3d6b3;
  }

  .remirror-duotone-forest .token.entity {
    cursor: help;
  }

  .remirror-duotone-forest pre > code.highlight {
    outline: 0.4em solid #5c705c;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-forest .line-numbers .line-numbers-rows {
    border-right-color: #2c302c;
  }

  .remirror-duotone-forest .line-numbers-rows > span:before {
    color: #3b423b;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-duotone-forest .line-highlight {
    background: rgba(162, 179, 77, 0.2);
    background: linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0));
  }

  .remirror-duotone-light code[class*='language-'],
  .remirror-duotone-light pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #faf8f5;
    color: #728fcb;
  }

  .remirror-duotone-light pre[class*='language-']::-moz-selection,
  .remirror-duotone-light pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-light code[class*='language-']::-moz-selection,
  .remirror-duotone-light code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #faf8f5;
  }

  .remirror-duotone-light pre[class*='language-']::-moz-selection,
  .remirror-duotone-light pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-light code[class*='language-']::-moz-selection,
  .remirror-duotone-light code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #faf8f5;
  }

  .remirror-duotone-light pre[class*='language-']::selection,
  .remirror-duotone-light pre[class*='language-'] ::selection,
  .remirror-duotone-light code[class*='language-']::selection,
  .remirror-duotone-light code[class*='language-'] ::selection {
    text-shadow: none;
    background: #faf8f5;
  }

  /* Code blocks */

  .remirror-duotone-light pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-light :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-light :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-light .token.comment,
  .remirror-duotone-light .token.prolog,
  .remirror-duotone-light .token.doctype,
  .remirror-duotone-light .token.cdata {
    color: #b6ad9a;
  }

  .remirror-duotone-light .token.punctuation,
  .remirror-duotone-light .token.punctuation.important {
    color: #b6ad9a;
  }

  .remirror-duotone-light .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-light .token.tag,
  .remirror-duotone-light .token.operator,
  .remirror-duotone-light .token.number {
    color: #063289;
  }

  .remirror-duotone-light .token.property,
  .remirror-duotone-light .token.function {
    color: #b29762;
  }

  .remirror-duotone-light .token.tag-id,
  .remirror-duotone-light .token.selector,
  .remirror-duotone-light .token.atrule-id {
    color: #2d2006;
  }

  .remirror-duotone-light code.language-javascript,
  .remirror-duotone-light .token.attr-name {
    color: #896724;
  }

  .remirror-duotone-light code.language-css,
  .remirror-duotone-light code.language-scss,
  .remirror-duotone-light .token.boolean,
  .remirror-duotone-light .token.string,
  .remirror-duotone-light .token.entity,
  .remirror-duotone-light .token.url,
  .remirror-duotone-light .language-css .token.string,
  .remirror-duotone-light .language-scss .token.string,
  .remirror-duotone-light .style .token.string,
  .remirror-duotone-light .token.attr-value,
  .remirror-duotone-light .token.keyword,
  .remirror-duotone-light .token.control,
  .remirror-duotone-light .token.directive,
  .remirror-duotone-light .token.unit,
  .remirror-duotone-light .token.statement,
  .remirror-duotone-light .token.regex,
  .remirror-duotone-light .token.atrule {
    color: #728fcb;
  }

  .remirror-duotone-light .token.placeholder,
  .remirror-duotone-light .token.variable {
    color: #93abdc;
  }

  .remirror-duotone-light .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-light .token.inserted {
    border-bottom: 1px dotted #2d2006;
    text-decoration: none;
  }

  .remirror-duotone-light .token.italic {
    font-style: italic;
  }

  .remirror-duotone-light .token.important,
  .remirror-duotone-light .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-light .token.important {
    color: #896724;
  }

  .remirror-duotone-light .token.entity {
    cursor: help;
  }

  .remirror-duotone-light pre > code.highlight {
    outline: 0.4em solid #896724;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-light .line-numbers .line-numbers-rows {
    border-right-color: #ece8de;
  }

  .remirror-duotone-light .line-numbers-rows > span:before {
    color: #cdc4b1;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */

  .remirror-duotone-light .line-highlight {
    background: rgba(45, 32, 6, 0.2);
    background: linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0));
  }

  .remirror-duotone-sea code[class*='language-'],
  .remirror-duotone-sea pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #1d262f;
    color: #57718e;
  }

  .remirror-duotone-sea pre[class*='language-']::-moz-selection,
  .remirror-duotone-sea pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-sea code[class*='language-']::-moz-selection,
  .remirror-duotone-sea code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #004a9e;
  }

  .remirror-duotone-sea pre[class*='language-']::-moz-selection,
  .remirror-duotone-sea pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-sea code[class*='language-']::-moz-selection,
  .remirror-duotone-sea code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #004a9e;
  }

  .remirror-duotone-sea pre[class*='language-']::selection,
  .remirror-duotone-sea pre[class*='language-'] ::selection,
  .remirror-duotone-sea code[class*='language-']::selection,
  .remirror-duotone-sea code[class*='language-'] ::selection {
    text-shadow: none;
    background: #004a9e;
  }

  /* Code blocks */

  .remirror-duotone-sea pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-sea :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-sea :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-sea .token.comment,
  .remirror-duotone-sea .token.prolog,
  .remirror-duotone-sea .token.doctype,
  .remirror-duotone-sea .token.cdata {
    color: #4a5f78;
  }

  .remirror-duotone-sea .token.punctuation,
  .remirror-duotone-sea .token.punctuation.important {
    color: #4a5f78;
  }

  .remirror-duotone-sea .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-sea .token.tag,
  .remirror-duotone-sea .token.operator,
  .remirror-duotone-sea .token.number {
    color: #0aa370;
  }

  .remirror-duotone-sea .token.property,
  .remirror-duotone-sea .token.function {
    color: #57718e;
  }

  .remirror-duotone-sea .token.tag-id,
  .remirror-duotone-sea .token.selector,
  .remirror-duotone-sea .token.atrule-id {
    color: #ebf4ff;
  }

  .remirror-duotone-sea code.language-javascript,
  .remirror-duotone-sea .token.attr-name {
    color: #7eb6f6;
  }

  .remirror-duotone-sea code.language-css,
  .remirror-duotone-sea code.language-scss,
  .remirror-duotone-sea .token.boolean,
  .remirror-duotone-sea .token.string,
  .remirror-duotone-sea .token.entity,
  .remirror-duotone-sea .token.url,
  .remirror-duotone-sea .language-css .token.string,
  .remirror-duotone-sea .language-scss .token.string,
  .remirror-duotone-sea .style .token.string,
  .remirror-duotone-sea .token.attr-value,
  .remirror-duotone-sea .token.keyword,
  .remirror-duotone-sea .token.control,
  .remirror-duotone-sea .token.directive,
  .remirror-duotone-sea .token.unit,
  .remirror-duotone-sea .token.statement,
  .remirror-duotone-sea .token.regex,
  .remirror-duotone-sea .token.atrule {
    color: #47ebb4;
  }

  .remirror-duotone-sea .token.placeholder,
  .remirror-duotone-sea .token.variable {
    color: #47ebb4;
  }

  .remirror-duotone-sea .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-sea .token.inserted {
    border-bottom: 1px dotted #ebf4ff;
    text-decoration: none;
  }

  .remirror-duotone-sea .token.italic {
    font-style: italic;
  }

  .remirror-duotone-sea .token.important,
  .remirror-duotone-sea .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-sea .token.important {
    color: #7eb6f6;
  }

  .remirror-duotone-sea .token.entity {
    cursor: help;
  }

  .remirror-duotone-sea pre > code.highlight {
    outline: 0.4em solid #34659d;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-sea .line-numbers .line-numbers-rows {
    border-right-color: #1f2932;
  }

  .remirror-duotone-sea .line-numbers-rows > span:before {
    color: #2c3847;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-duotone-sea .line-highlight {
    background: rgba(10, 163, 112, 0.2);
    background: linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));
  }

  .remirror-duotone-space code[class*='language-'],
  .remirror-duotone-space pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #24242e;
    color: #767693;
  }

  .remirror-duotone-space pre[class*='language-']::-moz-selection,
  .remirror-duotone-space pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-space code[class*='language-']::-moz-selection,
  .remirror-duotone-space code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #5151e6;
  }

  .remirror-duotone-space pre[class*='language-']::-moz-selection,
  .remirror-duotone-space pre[class*='language-'] ::-moz-selection,
  .remirror-duotone-space code[class*='language-']::-moz-selection,
  .remirror-duotone-space code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #5151e6;
  }

  .remirror-duotone-space pre[class*='language-']::selection,
  .remirror-duotone-space pre[class*='language-'] ::selection,
  .remirror-duotone-space code[class*='language-']::selection,
  .remirror-duotone-space code[class*='language-'] ::selection {
    text-shadow: none;
    background: #5151e6;
  }

  /* Code blocks */

  .remirror-duotone-space pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-duotone-space :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-duotone-space :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-duotone-space .token.comment,
  .remirror-duotone-space .token.prolog,
  .remirror-duotone-space .token.doctype,
  .remirror-duotone-space .token.cdata {
    color: #5b5b76;
  }

  .remirror-duotone-space .token.punctuation,
  .remirror-duotone-space .token.punctuation.important {
    color: #5b5b76;
  }

  .remirror-duotone-space .token.namespace {
    opacity: 0.7;
  }

  .remirror-duotone-space .token.tag,
  .remirror-duotone-space .token.operator,
  .remirror-duotone-space .token.number {
    color: #dd672c;
  }

  .remirror-duotone-space .token.property,
  .remirror-duotone-space .token.function {
    color: #767693;
  }

  .remirror-duotone-space .token.tag-id,
  .remirror-duotone-space .token.selector,
  .remirror-duotone-space .token.atrule-id {
    color: #ebebff;
  }

  .remirror-duotone-space code.language-javascript,
  .remirror-duotone-space .token.attr-name {
    color: #aaaaca;
  }

  .remirror-duotone-space code.language-css,
  .remirror-duotone-space code.language-scss,
  .remirror-duotone-space .token.boolean,
  .remirror-duotone-space .token.string,
  .remirror-duotone-space .token.entity,
  .remirror-duotone-space .token.url,
  .remirror-duotone-space .language-css .token.string,
  .remirror-duotone-space .language-scss .token.string,
  .remirror-duotone-space .style .token.string,
  .remirror-duotone-space .token.attr-value,
  .remirror-duotone-space .token.keyword,
  .remirror-duotone-space .token.control,
  .remirror-duotone-space .token.directive,
  .remirror-duotone-space .token.unit,
  .remirror-duotone-space .token.statement,
  .remirror-duotone-space .token.regex,
  .remirror-duotone-space .token.atrule {
    color: #fe8c52;
  }

  .remirror-duotone-space .token.placeholder,
  .remirror-duotone-space .token.variable {
    color: #fe8c52;
  }

  .remirror-duotone-space .token.deleted {
    text-decoration: line-through;
  }

  .remirror-duotone-space .token.inserted {
    border-bottom: 1px dotted #ebebff;
    text-decoration: none;
  }

  .remirror-duotone-space .token.italic {
    font-style: italic;
  }

  .remirror-duotone-space .token.important,
  .remirror-duotone-space .token.bold {
    font-weight: bold;
  }

  .remirror-duotone-space .token.important {
    color: #aaaaca;
  }

  .remirror-duotone-space .token.entity {
    cursor: help;
  }

  .remirror-duotone-space pre > code.highlight {
    outline: 0.4em solid #7676f4;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-duotone-space .line-numbers .line-numbers-rows {
    border-right-color: #262631;
  }

  .remirror-duotone-space .line-numbers-rows > span:before {
    color: #393949;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-duotone-space .line-highlight {
    background: rgba(221, 103, 44, 0.2);
    background: linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0));
  }

  .remirror-gh-colors code[class*='language-'],
  .remirror-gh-colors pre[class*='language-'] {
    color: #393a34;
    font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.95em;
    line-height: 1.2em;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .remirror-gh-colors pre[class*='language-']::-moz-selection,
  .remirror-gh-colors pre[class*='language-'] ::-moz-selection,
  .remirror-gh-colors code[class*='language-']::-moz-selection,
  .remirror-gh-colors code[class*='language-'] ::-moz-selection {
    background: #b3d4fc;
  }

  .remirror-gh-colors pre[class*='language-']::-moz-selection,
  .remirror-gh-colors pre[class*='language-'] ::-moz-selection,
  .remirror-gh-colors code[class*='language-']::-moz-selection,
  .remirror-gh-colors code[class*='language-'] ::-moz-selection {
    background: #b3d4fc;
  }

  .remirror-gh-colors pre[class*='language-']::selection,
  .remirror-gh-colors pre[class*='language-'] ::selection,
  .remirror-gh-colors code[class*='language-']::selection,
  .remirror-gh-colors code[class*='language-'] ::selection {
    background: #b3d4fc;
  }

  /* Code blocks */

  .remirror-gh-colors pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 1px solid #dddddd;
    background-color: white;
  }

  .remirror-gh-colors :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-gh-colors :not(pre) > code[class*='language-'],
  .remirror-gh-colors pre[class*='language-'] {
  }

  /* Inline code */

  .remirror-gh-colors :not(pre) > code[class*='language-'] {
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
    background: #f8f8f8;
    border: 1px solid #dddddd;
  }

  .remirror-gh-colors .token.comment,
  .remirror-gh-colors .token.prolog,
  .remirror-gh-colors .token.doctype,
  .remirror-gh-colors .token.cdata {
    color: #999988;
    font-style: italic;
  }

  .remirror-gh-colors .token.namespace {
    opacity: 0.7;
  }

  .remirror-gh-colors .token.string,
  .remirror-gh-colors .token.attr-value {
    color: #e3116c;
  }

  .remirror-gh-colors .token.punctuation,
  .remirror-gh-colors .token.operator {
    color: #393a34; /* no highlight */
  }

  .remirror-gh-colors .token.entity,
  .remirror-gh-colors .token.url,
  .remirror-gh-colors .token.symbol,
  .remirror-gh-colors .token.number,
  .remirror-gh-colors .token.boolean,
  .remirror-gh-colors .token.variable,
  .remirror-gh-colors .token.constant,
  .remirror-gh-colors .token.property,
  .remirror-gh-colors .token.regex,
  .remirror-gh-colors .token.inserted {
    color: #36acaa;
  }

  .remirror-gh-colors .token.atrule,
  .remirror-gh-colors .token.keyword,
  .remirror-gh-colors .token.attr-name,
  .remirror-gh-colors .language-autohotkey .token.selector {
    color: #00a4db;
  }

  .remirror-gh-colors .token.function,
  .remirror-gh-colors .token.deleted,
  .remirror-gh-colors .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .remirror-gh-colors .token.tag,
  .remirror-gh-colors .token.selector,
  .remirror-gh-colors .language-autohotkey .token.keyword {
    color: #00009f;
  }

  .remirror-gh-colors .token.important,
  .remirror-gh-colors .token.function,
  .remirror-gh-colors .token.bold {
    font-weight: bold;
  }

  .remirror-gh-colors .token.italic {
    font-style: italic;
  }

  .remirror-hopscotch code[class*='language-'],
  .remirror-hopscotch pre[class*='language-'] {
    color: #ffffff;
    font-family: 'Fira Mono', Menlo, Monaco, 'Lucida Console', 'Courier New', Courier, monospace;
    font-size: 16px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    word-spacing: normal;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    background: #322931;
    color: #b9b5b8;
  }

  /* Code blocks */

  .remirror-hopscotch pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .remirror-hopscotch :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-hopscotch :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .remirror-hopscotch .token.comment,
  .remirror-hopscotch .token.prolog,
  .remirror-hopscotch .token.doctype,
  .remirror-hopscotch .token.cdata {
    color: #797379;
  }

  .remirror-hopscotch .token.punctuation,
  .remirror-hopscotch .token.punctuation.important {
    color: #b9b5b8;
  }

  .remirror-hopscotch .namespace {
    opacity: 0.7;
  }

  .remirror-hopscotch .token.null,
  .remirror-hopscotch .token.operator,
  .remirror-hopscotch .token.boolean,
  .remirror-hopscotch .token.number {
    color: #fd8b19;
  }

  .remirror-hopscotch .token.property {
    color: #fdcc59;
  }

  .remirror-hopscotch .token.tag {
    color: #1290bf;
  }

  .remirror-hopscotch .token.string {
    color: #149b93;
  }

  .remirror-hopscotch .token.selector {
    color: #c85e7c;
  }

  .remirror-hopscotch .token.attr-name {
    color: #fd8b19;
  }

  .remirror-hopscotch .token.entity,
  .remirror-hopscotch .token.url,
  .remirror-hopscotch .language-css .token.string,
  .remirror-hopscotch .style .token.string {
    color: #149b93;
  }

  .remirror-hopscotch .token.attr-value,
  .remirror-hopscotch .token.keyword,
  .remirror-hopscotch .token.control,
  .remirror-hopscotch .token.directive,
  .remirror-hopscotch .token.unit {
    color: #8fc13e;
  }

  .remirror-hopscotch .token.statement,
  .remirror-hopscotch .token.regex,
  .remirror-hopscotch .token.atrule {
    color: #149b93;
  }

  .remirror-hopscotch .token.placeholder,
  .remirror-hopscotch .token.variable {
    color: #1290bf;
  }

  .remirror-hopscotch .token.important {
    color: #dd464c;
    font-weight: bold;
  }

  .remirror-hopscotch .token.entity {
    cursor: help;
  }

  .remirror-hopscotch pre > code.highlight {
    outline: 0.4em solid red;
    outline-offset: 0.4em;
  }

  .remirror-pojoaque code[class*='language-'],
  .remirror-pojoaque pre[class*='language-'] {
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    font-family: Menlo, Monaco, 'Courier New', monospace;
    font-size: 15px;
    line-height: 1.5;
    color: #dccf8f;
    text-shadow: 0;
  }

  .remirror-pojoaque pre[class*='language-'],
  .remirror-pojoaque :not(pre) > code[class*='language-'] {
    border-radius: 5px;
    border: 1px solid #000;
    color: #dccf8f;
    background: #181914
      url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==')
      repeat left top;
  }

  .remirror-pojoaque pre[class*='language-'] {
    padding: 12px;
    overflow: auto;
  }

  .remirror-pojoaque :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-pojoaque :not(pre) > code[class*='language-'] {
    padding: 2px 6px;
  }

  .remirror-pojoaque .token.namespace {
    opacity: 0.7;
  }

  .remirror-pojoaque .token.comment,
  .remirror-pojoaque .token.prolog,
  .remirror-pojoaque .token.doctype,
  .remirror-pojoaque .token.cdata {
    color: #586e75;
    font-style: italic;
  }

  .remirror-pojoaque .token.number,
  .remirror-pojoaque .token.string,
  .remirror-pojoaque .token.char,
  .remirror-pojoaque .token.builtin,
  .remirror-pojoaque .token.inserted {
    color: #468966;
  }

  .remirror-pojoaque .token.attr-name {
    color: #b89859;
  }

  .remirror-pojoaque .token.operator,
  .remirror-pojoaque .token.entity,
  .remirror-pojoaque .token.url,
  .remirror-pojoaque .language-css .token.string,
  .remirror-pojoaque .style .token.string {
    color: #dccf8f;
  }

  .remirror-pojoaque .token.selector,
  .remirror-pojoaque .token.regex {
    color: #859900;
  }

  .remirror-pojoaque .token.atrule,
  .remirror-pojoaque .token.keyword {
    color: #cb4b16;
  }

  .remirror-pojoaque .token.attr-value {
    color: #468966;
  }

  .remirror-pojoaque .token.function,
  .remirror-pojoaque .token.variable,
  .remirror-pojoaque .token.placeholder {
    color: #b58900;
  }

  .remirror-pojoaque .token.property,
  .remirror-pojoaque .token.tag,
  .remirror-pojoaque .token.boolean,
  .remirror-pojoaque .token.number,
  .remirror-pojoaque .token.constant,
  .remirror-pojoaque .token.symbol {
    color: #b89859;
  }

  .remirror-pojoaque .token.tag {
    color: #ffb03b;
  }

  .remirror-pojoaque .token.important,
  .remirror-pojoaque .token.statement,
  .remirror-pojoaque .token.deleted {
    color: #dc322f;
  }

  .remirror-pojoaque .token.punctuation,
  .remirror-pojoaque .token.punctuation.important {
    color: #dccf8f;
  }

  .remirror-pojoaque .token.entity {
    cursor: help;
  }

  .remirror-pojoaque .token.bold {
    font-weight: bold;
  }

  .remirror-pojoaque .token.italic {
    font-style: italic;
  }

  .remirror-vs code[class*='language-'],
  .remirror-vs pre[class*='language-'] {
    color: #393a34;
    font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.95em;
    line-height: 1.2em;

    -moz-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .remirror-vs pre[class*='language-']::-moz-selection,
  .remirror-vs pre[class*='language-'] ::-moz-selection,
  .remirror-vs code[class*='language-']::-moz-selection,
  .remirror-vs code[class*='language-'] ::-moz-selection {
    background: #c1def1;
  }

  .remirror-vs pre[class*='language-']::-moz-selection,
  .remirror-vs pre[class*='language-'] ::-moz-selection,
  .remirror-vs code[class*='language-']::-moz-selection,
  .remirror-vs code[class*='language-'] ::-moz-selection {
    background: #c1def1;
  }

  .remirror-vs pre[class*='language-']::selection,
  .remirror-vs pre[class*='language-'] ::selection,
  .remirror-vs code[class*='language-']::selection,
  .remirror-vs code[class*='language-'] ::selection {
    background: #c1def1;
  }

  /* Code blocks */

  .remirror-vs pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 1px solid #dddddd;
    background-color: white;
  }

  .remirror-vs :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  /* Inline code */

  .remirror-vs :not(pre) > code[class*='language-'] {
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
    background: #f8f8f8;
    border: 1px solid #dddddd;
  }

  .remirror-vs .token.comment,
  .remirror-vs .token.prolog,
  .remirror-vs .token.doctype,
  .remirror-vs .token.cdata {
    color: #008000;
    font-style: italic;
  }

  .remirror-vs .token.namespace {
    opacity: 0.7;
  }

  .remirror-vs .token.string {
    color: #a31515;
  }

  .remirror-vs .token.punctuation,
  .remirror-vs .token.operator {
    color: #393a34; /* no highlight */
  }

  .remirror-vs .token.url,
  .remirror-vs .token.symbol,
  .remirror-vs .token.number,
  .remirror-vs .token.boolean,
  .remirror-vs .token.variable,
  .remirror-vs .token.constant,
  .remirror-vs .token.inserted {
    color: #36acaa;
  }

  .remirror-vs .token.atrule,
  .remirror-vs .token.keyword,
  .remirror-vs .token.attr-value,
  .remirror-vs .language-autohotkey .token.selector,
  .remirror-vs .language-json .token.boolean,
  .remirror-vs .language-json .token.number,
  .remirror-vs code[class*='language-css'] {
    color: #0000ff;
  }

  .remirror-vs .token.function {
    color: #393a34;
  }

  .remirror-vs .token.deleted,
  .remirror-vs .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .remirror-vs .token.selector,
  .remirror-vs .language-autohotkey .token.keyword {
    color: #00009f;
  }

  .remirror-vs .token.important,
  .remirror-vs .token.bold {
    font-weight: bold;
  }

  .remirror-vs .token.italic {
    font-style: italic;
  }

  .remirror-vs .token.class-name,
  .remirror-vs .language-json .token.property {
    color: #2b91af;
  }

  .remirror-vs .token.tag,
  .remirror-vs .token.selector {
    color: #800000;
  }

  .remirror-vs .token.attr-name,
  .remirror-vs .token.property,
  .remirror-vs .token.regex,
  .remirror-vs .token.entity {
    color: #ff0000;
  }

  .remirror-vs .token.directive.tag .tag {
    background: #ffff00;
    color: #393a34;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */

  .remirror-vs .line-numbers .line-numbers-rows {
    border-right-color: #a5a5a5;
  }

  .remirror-vs .line-numbers-rows > span:before {
    color: #2b91af;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/

  .remirror-vs .line-highlight {
    background: rgba(193, 222, 241, 0.2);
    background: linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));
  }

  .remirror-xonokai code[class*='language-'],
  .remirror-xonokai pre[class*='language-'] {
    -moz-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: normal;
    font-family: Menlo, Monaco, 'Courier New', monospace;
    font-size: 14px;
    color: #76d9e6;
    text-shadow: none;
  }

  .remirror-xonokai pre[class*='language-'],
  .remirror-xonokai :not(pre) > code[class*='language-'] {
    background: #2a2a2a;
  }

  .remirror-xonokai pre[class*='language-'] {
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #e1e1e8;
    overflow: auto;
  }

  .remirror-xonokai :has(.remirror-language-select-positioner) ~ pre[class*='language-'] {
    padding: 2em 1em;
  }

  .remirror-xonokai pre[class*='language-'] {
    position: relative;
  }

  .remirror-xonokai pre[class*='language-'] code {
    white-space: pre;
    display: block;
  }

  .remirror-xonokai :not(pre) > code[class*='language-'] {
    padding: 0.15em 0.2em 0.05em;
    border-radius: 0.3em;
    border: 0.13em solid #7a6652;
    box-shadow: 1px 1px 0.3em -0.1em #000 inset;
  }

  .remirror-xonokai .token.namespace {
    opacity: 0.7;
  }

  .remirror-xonokai .token.comment,
  .remirror-xonokai .token.prolog,
  .remirror-xonokai .token.doctype,
  .remirror-xonokai .token.cdata {
    color: #6f705e;
  }

  .remirror-xonokai .token.operator,
  .remirror-xonokai .token.boolean,
  .remirror-xonokai .token.number {
    color: #a77afe;
  }

  .remirror-xonokai .token.attr-name,
  .remirror-xonokai .token.string {
    color: #e6d06c;
  }

  .remirror-xonokai .token.entity,
  .remirror-xonokai .token.url,
  .remirror-xonokai .language-css .token.string,
  .remirror-xonokai .style .token.string {
    color: #e6d06c;
  }

  .remirror-xonokai .token.selector,
  .remirror-xonokai .token.inserted {
    color: #a6e22d;
  }

  .remirror-xonokai .token.atrule,
  .remirror-xonokai .token.attr-value,
  .remirror-xonokai .token.keyword,
  .remirror-xonokai .token.important,
  .remirror-xonokai .token.deleted {
    color: #ef3b7d;
  }

  .remirror-xonokai .token.regex,
  .remirror-xonokai .token.statement {
    color: #76d9e6;
  }

  .remirror-xonokai .token.placeholder,
  .remirror-xonokai .token.variable {
    color: #fff;
  }

  .remirror-xonokai .token.important,
  .remirror-xonokai .token.statement,
  .remirror-xonokai .token.bold {
    font-weight: bold;
  }

  .remirror-xonokai .token.punctuation,
  .remirror-xonokai .token.punctuation.important {
    color: #bebec5;
  }

  .remirror-xonokai .token.entity {
    cursor: help;
  }

  .remirror-xonokai .token.italic {
    font-style: italic;
  }

  .remirror-xonokai code.language-markup {
    color: #f9f9f9;
  }

  .remirror-xonokai code.language-markup .token.tag {
    color: #ef3b7d;
  }

  .remirror-xonokai code.language-markup .token.attr-name {
    color: #a6e22d;
  }

  .remirror-xonokai code.language-markup .token.attr-value {
    color: #e6d06c;
  }

  .remirror-xonokai code.language-markup .token.style,
  .remirror-xonokai code.language-markup .token.script {
    color: #76d9e6;
  }

  .remirror-xonokai code.language-markup .token.script .token.keyword {
    color: #76d9e6;
  }

  /* Line highlight plugin */

  .remirror-xonokai pre[class*='language-'][data-line] {
    position: relative;
    padding: 1em 0 1em 3em;
  }

  .remirror-xonokai pre[data-line] .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    margin-top: 1em;
    background: rgba(255, 255, 255, 0.08);
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }

  .remirror-xonokai pre[data-line] .line-highlight:before,
  .remirror-xonokai pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: 0.4em;
    left: 0.6em;
    min-width: 1em;
    padding: 0.2em 0.5em;
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    font: bold 65%/1 sans-serif;
    height: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: 999px;
    text-shadow: none;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
  }

  .remirror-xonokai pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: 0.4em;
  }
`,oo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-count-theme.ts
 */
  .remirror-editor span.remirror-max-count-exceeded {
    background-color: var(--rmr-hue-red-4);
  }
`,to=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-emoji-theme.ts
 */
  .remirror-emoji-image {
    object-fit: contain;
    width: 1.375em;
    height: 1.375em;
    vertical-align: bottom;
  }

  .remirror-emoji-wrapper {
    text-indent: -99999px;
  }

  .remirror-emoji-popup-item {
    padding: 8px;
    text-overflow: ellipsis;
    max-width: 250px;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    color: white;
  }

  .remirror-emoji-popup-hovered {
    background-color: var(--rmr-hue-gray-2);
  }

  .remirror-emoji-popup-highlight {
    background-color: var(--rmr-hue-gray-3);
  }

  .remirror-emoji-popup-wrapper {
    position: absolute;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: hsla(205, 70%, 15%, 0.25) 0 4px 8px, hsla(205, 70%, 15%, 0.31) 0px 0px 1px;
    background-color: white;
    z-index: 10;
    max-height: 250px;
    overflow-y: scroll;
  }

  .remirror-emoji-popup-name {
    color: rgb(121, 129, 134);
  }

  .remirror-emoji-popup-char {
    font-size: 1.25em;
    padding-right: 5px;
  }
`,no=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-file-theme.ts
 */
  .remirror-file-root {
    border-radius: 4px;
    padding: 8px 12px;
    background-color: #e8ecf1;
    color: #000;
    margin: 8px auto;
    min-height: 32px;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
  }

  .remirror-file-name {
    font-size: 1rem;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .remirror-file-size {
    font-size: 0.8rem;
    margin-left: 8px;
    color: gray;
    white-space: nowrap;
  }

  .remirror-file-upload-progress {
    font-size: 0.8rem;
    margin-left: 8px;
    margin-right: 8px;
    color: gray;
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  .remirror-file-error {
    font-size: 0.8rem;
    color: red;
  }

  .remirror-file-icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }
`,ao=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-gap-cursor-theme.ts
 */
  .remirror-editor.ProseMirror .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }
  .remirror-editor.ProseMirror .ProseMirror-gapcursor:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid black;
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }
  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }
  .remirror-editor.ProseMirror .ProseMirror-focused .ProseMirror-gapcursor,
  .remirror-editor.ProseMirror.ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }
`,io=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-image-theme.ts
 */
  .remirror-image-loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,so=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-list-theme.ts
 */
  /* don't show the custom markers in a ordered list */
  .remirror-editor ol > li > .remirror-list-item-marker-container {
    display: none;
  }
  /* don't show the origin markers when using custom markers (checkbox / collapsible) */
  .remirror-editor ul > li.remirror-list-item-with-custom-mark {
    list-style: none;
  }
  .remirror-editor .remirror-ul-list-content > li.remirror-list-item-with-custom-mark {
    list-style: none;
  }
  /* override the browser's default styles */
  .remirror-editor ul ul + ul {
    -webkit-margin-before: 1em;
    margin-block-start: 1em;
  }

  .remirror-list-item-marker-container {
    position: absolute;
    left: -32px;
    width: 24px;
    display: inline-block;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .remirror-list-item-checkbox {
    /* change the checkbox color from blue (default on Chrome) to purple. */
    -webkit-filter: hue-rotate(60deg);
    filter: hue-rotate(60deg);
  }

  .remirror-collapsible-list-item-closed li {
    display: none;
  }

  .remirror-collapsible-list-item-closed .remirror-collapsible-list-item-button {
    background-color: var(--rmr-hue-gray-6);
  }

  .remirror-collapsible-list-item-button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition: background-color 0.25s ease;
    background-color: var(--rmr-color-border);
  }

  .remirror-collapsible-list-item-button:hover {
    background-color: var(--rmr-color-primary);
  }

  .remirror-collapsible-list-item-button.disabled,
  .remirror-collapsible-list-item-button.disabled:hover {
    background-color: var(--rmr-color-border);
    cursor: default;
  }

  .remirror-list-spine {
    position: absolute;
    top: 4px;
    bottom: 0px;
    left: -20px;
    width: 16px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition: border-left-color 0.25s ease;
    border-left-color: var(--rmr-color-border);
    border-left-style: solid;
    border-left-width: 1px;
  }

  .remirror-list-spine:hover {
    border-left-color: var(--rmr-color-primary);
  }
`,lo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-mention-atom-theme.ts
 */
  .remirror-mention-atom {
    background: var(--rmr-hue-gray-2);
    font-weight: bold;
    font-size: 0.9em;
    font-style: normal;
    border-radius: var(--rmr-radius-border);
    padding: 0.2rem 0.5rem;
    white-space: nowrap;
    color: var(--rmr-color-primary);
  }

  .remirror-suggest-atom {
    color: rgba(0, 0, 0, 0.6);
  }

  .remirror-mention-atom-popup-item {
    padding: 8px;
    text-overflow: ellipsis;
    max-width: 250px;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    color: white;
  }

  .remirror-mention-atom-popup-hovered {
    background-color: var(--rmr-hue-gray-2);
  }

  .remirror-mention-atom-popup-highlight {
    background-color: var(--rmr-hue-gray-3);
  }

  .remirror-mention-atom-popup-wrapper {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: hsla(205, 70%, 15%, 0.25) 0 4px 8px, hsla(205, 70%, 15%, 0.31) 0px 0px 1px;
    background-color: white;
    z-index: 10;
    max-height: 250px;
    overflow-y: scroll;
  }

  .remirror-mention-atom-popup-name {
    color: rgb(121, 129, 134);
  }

  .remirror-mention-atom-zero-items {
    color: rgb(121, 129, 134);
  }

  .remirror-mention-atom-popup-char {
    font-size: 1.25em;
    padding-right: 5px;
  }
`,co=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-node-formatting-theme.ts
 */
  .remirror-editor.ProseMirror {
  }
`,mo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-placeholder-theme.ts
 */
  .remirror-is-empty:first-of-type::before {
    position: absolute;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
    content: attr(data-placeholder);
  }
`,uo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-positioner-theme.ts
 */
  .remirror-editor.ProseMirror {
    position: relative;
  }

  .remirror-positioner {
    position: absolute;
    min-width: 1px;
    min-height: 1px;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: none;
    z-index: -1;
  }

  .remirror-positioner-widget {
    width: 0;
    height: 0;
    position: absolute;
  }
`,po=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-tables-theme.ts
 */
  .remirror-editor.ProseMirror {
    /* Give selected cells a blue overlay */
    /* We don't need this anymore -- 2021-04-03 ocavue */
  }
  .remirror-editor.ProseMirror .tableWrapper {
    overflow-x: auto;
  }
  .remirror-editor.ProseMirror table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    overflow: hidden;
  }
  .remirror-editor.ProseMirror td,
  .remirror-editor.ProseMirror th {
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: var(--rmr-color-table-default-border);
  }
  .remirror-editor.ProseMirror .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    z-index: 40;
    background-color: var(--rmr-hue-blue-7);
    pointer-events: none;
  }
  .remirror-editor.ProseMirror.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }
  /*
    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }
    */
  .remirror-editor.ProseMirror th.selectedCell,
  .remirror-editor.ProseMirror td.selectedCell {
    border-style: double;
    border-color: var(--rmr-color-table-selected-border);
    background-color: var(--rmr-color-table-selected-cell);
  }

  .remirror-table-colgroup > col:first-of-type {
    width: 13px;
    overflow: visible;
  }

  .remirror-controllers-toggle {
    visibility: hidden;
  }

  .remirror-table-show-controllers .remirror-controllers-toggle {
    visibility: visible;
  }

  .remirror-table-insert-button {
    position: absolute;
    width: 18px;
    height: 18px;
    z-index: 25;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 150ms ease;

    background-color: #dcdcdc;
  }

  .remirror-table-insert-button svg {
    fill: #ffffff;
  }

  .remirror-table-insert-button:hover {
    background-color: #136bda;
  }

  .remirror-table-insert-button:hover svg {
    fill: #ffffff;
  }

  .remirror-table-delete-inner-button {
    border: none;
    padding: 0;
    width: 18px;
    height: 18px;

    position: absolute;
    z-index: 30;
    cursor: pointer;
    border-radius: 4px;
    background-color: #cecece;
    transition: background-color 150ms ease;
  }

  .remirror-table-delete-inner-button:hover {
    background-color: #ff7884;
  }

  .remirror-table-delete-table-inner-button {
    top: calc(var(--remirror-table-delete-button-y) - 9px);
    left: calc(var(--remirror-table-delete-button-x) - 9px);
  }

  .remirror-table-delete-row-column-inner-button {
    top: calc(var(--remirror-table-delete-row-column-button-y) - 9px);
    left: calc(var(--remirror-table-delete-row-column-button-x) - 9px);
  }

  .remirror-table-with-controllers {
    /* Space for marks */
    margin-top: 40px;
    margin-bottom: 40px;

    /* To make controller's 'height: 100%' works, table must set its own height. */
    height: 1px;
  }

  /* To show marks */

  .ProseMirror table.remirror-table-with-controllers {
    overflow: visible;
  }

  .remirror-table-waitting-controllers {
    /* Hide the table before controllers injected */
    display: none;
  }

  /* First row contains one corner controller and multiple column controllers */

  .remirror-table-tbody-with-controllers > tr:nth-of-type(1) {
    height: 12px;
    overflow: visible;
  }

  /* First controller cell is the corner controller */

  .remirror-table-tbody-with-controllers > tr:nth-of-type(1) th:nth-of-type(1) {
    overflow: visible;
    padding: 0;
    cursor: pointer;
    z-index: 15;
    position: relative;
    height: 12px;
    width: 12px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(1)
    div.remirror-table-controller-wrapper {
    overflow: visible;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 12px;
    height: 12px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(1)
    div.remirror-table-controller-trigger-area {
    flex: 1;
    position: relative;
    z-index: 10; /* Style for debug. Use linear-gradient as background so that we can differentiate two neighbor areas. */ /* background: linear-gradient(to left top, rgba(0, 255, 100, 0.2), rgba(200, 100, 255, 0.2)); */
    display: none;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(1)
    div.remirror-table-controller-mark-row-corner {
    bottom: -2px;
    left: -12px;
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--rmr-color-table-mark);
    border-width: 2px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(1)
    div.remirror-table-controller-mark-column-corner {
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--rmr-color-table-mark);
    border-width: 2px;
    right: -2px;
    top: -12px;
  }

  /* Second and more cells are column controllers */

  .remirror-table-tbody-with-controllers > tr:nth-of-type(1) th:nth-of-type(n + 2) {
    overflow: visible;
    padding: 0;
    cursor: pointer;
    z-index: 15;
    position: relative;
    height: 12px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(n + 2)
    div.remirror-table-controller-wrapper {
    overflow: visible;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 12px;
    flex-direction: row;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(n + 2)
    div.remirror-table-controller-trigger-area {
    flex: 1;
    position: relative;
    z-index: 10; /* Style for debug. Use linear-gradient as background so that we can differentiate two neighbor areas. */ /* background: linear-gradient(to left top, rgba(0, 255, 100, 0.2), rgba(200, 100, 255, 0.2)); */
    height: 36px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(n + 2)
    div.remirror-table-controller-mark-row-corner {
    display: none;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(1)
    th:nth-of-type(n + 2)
    div.remirror-table-controller-mark-column-corner {
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--rmr-color-table-mark);
    border-width: 2px;
    right: -2px;
    top: -12px;
  }

  /* Second and more rows containes row controllers */

  /* First controller cell in each row is a row controller */

  .remirror-table-tbody-with-controllers > tr:nth-of-type(n + 2) th {
    overflow: visible;
    padding: 0;
    cursor: pointer;
    z-index: 15;
    position: relative;
    width: 12px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(n + 2)
    th
    div.remirror-table-controller-wrapper {
    overflow: visible;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    width: 12px;
    flex-direction: column;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(n + 2)
    th
    div.remirror-table-controller-trigger-area {
    flex: 1;
    position: relative;
    z-index: 10; /* Style for debug. Use linear-gradient as background so that we can differentiate two neighbor areas. */ /* background: linear-gradient(to left top, rgba(0, 255, 100, 0.2), rgba(200, 100, 255, 0.2)); */
    width: 36px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(n + 2)
    th
    div.remirror-table-controller-mark-row-corner {
    bottom: -2px;
    left: -12px;
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--rmr-color-table-mark);
    border-width: 2px;
  }

  .remirror-table-tbody-with-controllers
    > tr:nth-of-type(n + 2)
    th
    div.remirror-table-controller-mark-column-corner {
    display: none;
  }

  /* Styles for default */

  .remirror-table-tbody-with-controllers th.remirror-table-controller {
    background-color: var(--rmr-color-table-default-controller);
  }

  /* Styles for selected */

  .remirror-table-tbody-with-controllers th.selectedCell.remirror-table-controller {
    background-color: var(--rmr-color-table-selected-controller);
  }

  .remirror-table-preselect-all {
  }

  /* Styles for predelete */

  .remirror-table-show-predelete th.selectedCell.remirror-table-controller,
  .remirror-table-show-predelete td.selectedCell {
    border-color: var(--rmr-color-table-predelete-border) !important;
    background-color: var(--rmr-color-table-predelete-cell) !important;
  }

  .remirror-table-show-predelete th.selectedCell.remirror-table-controller {
    background-color: var(--rmr-color-table-predelete-controller) !important;
  }

  .remirror-table-show-predelete.remirror-table-preselect-all th.remirror-table-controller,
  .remirror-table-show-predelete.remirror-table-preselect-all td {
    border-color: var(--rmr-color-table-predelete-border) !important;
    background-color: var(--rmr-color-table-predelete-cell) !important;
  }

  .remirror-table-show-predelete.remirror-table-preselect-all th.remirror-table-controller {
    background-color: var(--rmr-color-table-predelete-controller) !important;
  }
`,go=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-whitespace-theme.ts
 */
  .remirror-editor.ProseMirror .whitespace {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .remirror-editor.ProseMirror .whitespace:before {
    caret-color: inherit;
    color: gray;
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    line-height: 1em;
    width: 0;
  }
  .remirror-editor.ProseMirror .whitespace--s:before {
    content: '·';
  }
  .remirror-editor.ProseMirror .whitespace--br:before {
    content: '¬';
  }
  .remirror-editor.ProseMirror .whitespace--p:before {
    content: '¶';
  }
`,ho=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/extension-yjs-theme.ts
 */
  .remirror-editor.ProseMirror .ProseMirror-yjs-cursor {
    position: absolute;
    border-left: black;
    border-left-style: solid;
    border-left-width: 2px;
    border-color: orange;
    height: 1em;
    word-break: normal;
    pointer-events: none;
  }

  .remirror-editor.ProseMirror .ProseMirror-yjs-cursor > div {
    position: relative;
    top: -1.05em;
    font-size: 13px;
    background-color: rgb(250, 129, 0);
    font-family: serif;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
    padding-left: 2px;
    padding-right: 2px;
  }
  .remirror-editor.ProseMirror > .ProseMirror-yjs-cursor:first-child {
    margin-top: 16px;
  }
  .remirror-editor #y-functions {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .remirror-editor #y-functions > * {
    display: inline-block;
  }
`,bo=x`
  /**
 * Styles extracted from: packages/remirror__theme/src/theme.ts
 */
  .remirror-theme {
    /* The following makes it easier to measure components within the editor. */
    box-sizing: border-box;
  }

  .remirror-theme *,
  .remirror-theme *:before,
  .remirror-theme *:after {
    /** Preserve box-sizing when override exists:
   * https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
   * */
    box-sizing: inherit;
  }

  .remirror-theme {
    --rmr-color-background: #ffffff;
    --rmr-color-border: rgba(0, 0, 0, 0.25);
    --rmr-color-foreground: #000000;
    --rmr-color-muted: #f1f3f5;
    --rmr-color-primary: #7963d2;
    --rmr-color-secondary: #bcd263;
    --rmr-color-primary-text: #fff;
    --rmr-color-secondary-text: #fff;
    --rmr-color-text: #252103;
    --rmr-color-faded: hsla(0, 0%, 13%, 0.9);
    --rmr-color-active-background: hsla(0, 0%, 85%, 1);
    --rmr-color-active-border: hsla(0, 0%, 0%, 0.25);
    --rmr-color-active-foreground: hsla(0, 0%, 0%, 1);
    --rmr-color-active-muted: hsla(210, 17%, 80%, 1);
    --rmr-color-active-primary: hsla(252, 55%, 46%, 1);
    --rmr-color-active-secondary: hsla(72, 55%, 46%, 1);
    --rmr-color-active-primary-text: #fff;
    --rmr-color-active-secondary-text: #000;
    --rmr-color-active-text: #000;
    --rmr-color-active-faded: hsla(0, 0%, 13%, 0.9);
    --rmr-color-hover-background: hsla(0, 0%, 93%, 1);
    --rmr-color-hover-border: hsla(0, 0%, 0%, 0.25);
    --rmr-color-hover-foreground: hsla(0, 0%, 0%, 1);
    --rmr-color-hover-muted: hsla(210, 17%, 88%, 1);
    --rmr-color-hover-primary: hsla(252, 55%, 53%, 1);
    --rmr-color-hover-secondary: hsla(72, 55%, 53%, 1);
    --rmr-color-hover-primary-text: #fff;
    --rmr-color-hover-secondary-text: #000;
    --rmr-color-hover-text: #000;
    --rmr-color-hover-faded: hsla(0, 0%, 13%, 0.9);
    --rmr-color-shadow-1: rgba(10, 31, 68, 0.08);
    --rmr-color-shadow-2: rgba(10, 31, 68, 0.1);
    --rmr-color-shadow-3: rgba(10, 31, 68, 0.12);
    --rmr-color-backdrop: rgba(0, 0, 0, 0.9);
    --rmr-color-outline: rgba(121, 99, 210, 0.4);
    --rmr-color-table-default-border: hsla(0, 0%, 80%, 1);
    --rmr-color-table-default-cell: hsla(0, 0%, 40%, 1);
    --rmr-color-table-default-controller: #dee2e6;
    --rmr-color-table-selected-border: #1c7ed6;
    --rmr-color-table-selected-cell: #d0ebff;
    --rmr-color-table-selected-controller: #339af0;
    --rmr-color-table-preselect-border: #1c7ed6;
    --rmr-color-table-preselect-cell: hsla(0, 0%, 40%, 1);
    --rmr-color-table-preselect-controller: #339af0;
    --rmr-color-table-predelete-border: #f03e3e;
    --rmr-color-table-predelete-cell: #ffe3e3;
    --rmr-color-table-predelete-controller: #ff6b6b;
    --rmr-color-table-mark: #91919196;
    --rmr-hue-gray-0: #f8f9fa;
    --rmr-hue-gray-1: #f1f3f5;
    --rmr-hue-gray-2: #e9ecef;
    --rmr-hue-gray-3: #dee2e6;
    --rmr-hue-gray-4: #ced4da;
    --rmr-hue-gray-5: #adb5bd;
    --rmr-hue-gray-6: #868e96;
    --rmr-hue-gray-7: #495057;
    --rmr-hue-gray-8: #343a40;
    --rmr-hue-gray-9: #212529;
    --rmr-hue-red-0: #fff5f5;
    --rmr-hue-red-1: #ffe3e3;
    --rmr-hue-red-2: #ffc9c9;
    --rmr-hue-red-3: #ffa8a8;
    --rmr-hue-red-4: #ff8787;
    --rmr-hue-red-5: #ff6b6b;
    --rmr-hue-red-6: #fa5252;
    --rmr-hue-red-7: #f03e3e;
    --rmr-hue-red-8: #e03131;
    --rmr-hue-red-9: #c92a2a;
    --rmr-hue-pink-0: #fff0f6;
    --rmr-hue-pink-1: #ffdeeb;
    --rmr-hue-pink-2: #fcc2d7;
    --rmr-hue-pink-3: #faa2c1;
    --rmr-hue-pink-4: #f783ac;
    --rmr-hue-pink-5: #f06595;
    --rmr-hue-pink-6: #e64980;
    --rmr-hue-pink-7: #d6336c;
    --rmr-hue-pink-8: #c2255c;
    --rmr-hue-pink-9: #a61e4d;
    --rmr-hue-grape-0: #f8f0fc;
    --rmr-hue-grape-1: #f3d9fa;
    --rmr-hue-grape-2: #eebefa;
    --rmr-hue-grape-3: #e599f7;
    --rmr-hue-grape-4: #da77f2;
    --rmr-hue-grape-5: #cc5de8;
    --rmr-hue-grape-6: #be4bdb;
    --rmr-hue-grape-7: #ae3ec9;
    --rmr-hue-grape-8: #9c36b5;
    --rmr-hue-grape-9: #862e9c;
    --rmr-hue-violet-0: #f3f0ff;
    --rmr-hue-violet-1: #e5dbff;
    --rmr-hue-violet-2: #d0bfff;
    --rmr-hue-violet-3: #b197fc;
    --rmr-hue-violet-4: #9775fa;
    --rmr-hue-violet-5: #845ef7;
    --rmr-hue-violet-6: #7950f2;
    --rmr-hue-violet-7: #7048e8;
    --rmr-hue-violet-8: #6741d9;
    --rmr-hue-violet-9: #5f3dc4;
    --rmr-hue-indigo-0: #edf2ff;
    --rmr-hue-indigo-1: #dbe4ff;
    --rmr-hue-indigo-2: #bac8ff;
    --rmr-hue-indigo-3: #91a7ff;
    --rmr-hue-indigo-4: #748ffc;
    --rmr-hue-indigo-5: #5c7cfa;
    --rmr-hue-indigo-6: #4c6ef5;
    --rmr-hue-indigo-7: #4263eb;
    --rmr-hue-indigo-8: #3b5bdb;
    --rmr-hue-indigo-9: #364fc7;
    --rmr-hue-blue-0: #e7f5ff;
    --rmr-hue-blue-1: #d0ebff;
    --rmr-hue-blue-2: #a5d8ff;
    --rmr-hue-blue-3: #74c0fc;
    --rmr-hue-blue-4: #4dabf7;
    --rmr-hue-blue-5: #339af0;
    --rmr-hue-blue-6: #228be6;
    --rmr-hue-blue-7: #1c7ed6;
    --rmr-hue-blue-8: #1971c2;
    --rmr-hue-blue-9: #1864ab;
    --rmr-hue-cyan-0: #e3fafc;
    --rmr-hue-cyan-1: #c5f6fa;
    --rmr-hue-cyan-2: #99e9f2;
    --rmr-hue-cyan-3: #66d9e8;
    --rmr-hue-cyan-4: #3bc9db;
    --rmr-hue-cyan-5: #22b8cf;
    --rmr-hue-cyan-6: #15aabf;
    --rmr-hue-cyan-7: #1098ad;
    --rmr-hue-cyan-8: #0c8599;
    --rmr-hue-cyan-9: #0b7285;
    --rmr-hue-teal-0: #e6fcf5;
    --rmr-hue-teal-1: #c3fae8;
    --rmr-hue-teal-2: #96f2d7;
    --rmr-hue-teal-3: #63e6be;
    --rmr-hue-teal-4: #38d9a9;
    --rmr-hue-teal-5: #20c997;
    --rmr-hue-teal-6: #12b886;
    --rmr-hue-teal-7: #0ca678;
    --rmr-hue-teal-8: #099268;
    --rmr-hue-teal-9: #087f5b;
    --rmr-hue-green-0: #ebfbee;
    --rmr-hue-green-1: #d3f9d8;
    --rmr-hue-green-2: #b2f2bb;
    --rmr-hue-green-3: #8ce99a;
    --rmr-hue-green-4: #69db7c;
    --rmr-hue-green-5: #51cf66;
    --rmr-hue-green-6: #40c057;
    --rmr-hue-green-7: #37b24d;
    --rmr-hue-green-8: #2f9e44;
    --rmr-hue-green-9: #2b8a3e;
    --rmr-hue-lime-0: #f4fce3;
    --rmr-hue-lime-1: #e9fac8;
    --rmr-hue-lime-2: #d8f5a2;
    --rmr-hue-lime-3: #c0eb75;
    --rmr-hue-lime-4: #a9e34b;
    --rmr-hue-lime-5: #94d82d;
    --rmr-hue-lime-6: #82c91e;
    --rmr-hue-lime-7: #74b816;
    --rmr-hue-lime-8: #66a80f;
    --rmr-hue-lime-9: #5c940d;
    --rmr-hue-yellow-0: #fff9db;
    --rmr-hue-yellow-1: #fff3bf;
    --rmr-hue-yellow-2: #ffec99;
    --rmr-hue-yellow-3: #ffe066;
    --rmr-hue-yellow-4: #ffd43b;
    --rmr-hue-yellow-5: #fcc419;
    --rmr-hue-yellow-6: #fab005;
    --rmr-hue-yellow-7: #f59f00;
    --rmr-hue-yellow-8: #f08c00;
    --rmr-hue-yellow-9: #e67700;
    --rmr-hue-orange-0: #fff4e6;
    --rmr-hue-orange-1: #ffe8cc;
    --rmr-hue-orange-2: #ffd8a8;
    --rmr-hue-orange-3: #ffc078;
    --rmr-hue-orange-4: #ffa94d;
    --rmr-hue-orange-5: #ff922b;
    --rmr-hue-orange-6: #fd7e14;
    --rmr-hue-orange-7: #f76707;
    --rmr-hue-orange-8: #e8590c;
    --rmr-hue-orange-9: #d9480f;
    --rmr-radius-border: 0.25rem;
    --rmr-radius-extra: 0.5rem;
    --rmr-radius-circle: 50%;
    --rmr-font-family-default: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', sans-serif;
    --rmr-font-family-heading: inherit;
    --rmr-font-family-mono: Menlo, monospace;
    --rmr-font-size-0: 12px;
    --rmr-font-size-1: 14px;
    --rmr-font-size-2: 16px;
    --rmr-font-size-3: 20px;
    --rmr-font-size-4: 24px;
    --rmr-font-size-5: 32px;
    --rmr-font-size-6: 48px;
    --rmr-font-size-7: 64px;
    --rmr-font-size-8: 96px;
    --rmr-font-size-default: 16px;
    --rmr-space-1: 4px;
    --rmr-space-2: 8px;
    --rmr-space-3: 16px;
    --rmr-space-4: 32px;
    --rmr-space-5: 64px;
    --rmr-space-6: 128px;
    --rmr-space-7: 256px;
    --rmr-space-8: 512px;
    --rmr-font-weight-bold: 700;
    --rmr-font-weight-default: 400;
    --rmr-font-weight-heading: 700;
    --rmr-letter-spacing-tight: -1px;
    --rmr-letter-spacing-default: normal;
    --rmr-letter-spacing-loose: 1px;
    --rmr-letter-spacing-wide: 3px;
    --rmr-line-height-heading: 1.25em;
    --rmr-line-height-default: 1.5em;
    --rmr-box-shadow-1: 0 1px 1px rgba(10, 31, 68, 0.08);
    --rmr-box-shadow-2: 0 1px 1px rgba(10, 31, 68, 0.1);
    --rmr-box-shadow-3: 0 1px 1px rgba(10, 31, 68, 0.12);

    font-family: var(--rmr-font-family-default);
    line-height: var(--rmr-line-height-default);
    font-weight: var(--rmr-font-weight-default);
  }

  .remirror-theme h1,
  .remirror-theme h2,
  .remirror-theme h3,
  .remirror-theme h4,
  .remirror-theme h5,
  .remirror-theme h6 {
    color: var(--rmr-color-text);
    font-family: var(--rmr-font-family-heading);
    line-height: var(--rmr-line-height-heading);
    font-weight: var(--rmr-font-weight-heading);
  }

  .remirror-theme h1 {
    font-size: var(--rmr-font-size-5);
  }

  .remirror-theme h2 {
    font-size: var(--rmr-font-size-4);
  }

  .remirror-theme h3 {
    font-size: var(--rmr-font-size-3);
  }

  .remirror-theme h4 {
    font-size: var(--rmr-font-size-2);
  }

  .remirror-theme h5 {
    font-size: var(--rmr-font-size-1);
  }

  .remirror-theme h6 {
    font-size: var(--rmr-font-size-0);
  }

  .remirror-theme .ProseMirror {
    min-height: var(--rmr-space-6);
    box-shadow: var(--rmr-color-border) 0px 0px 0px 0.1em;
    padding: var(--rmr-space-3);
    border-radius: var(--rmr-radius-border);
    outline: none;
  }

  .remirror-theme .ProseMirror:active,
  .remirror-theme .ProseMirror:focus {
    box-shadow: var(--rmr-color-outline) 0px 0px 0px 0.2em;
  }

  .remirror-theme .ProseMirror p,
  .remirror-theme .ProseMirror h1,
  .remirror-theme .ProseMirror h2,
  .remirror-theme .ProseMirror h3,
  .remirror-theme .ProseMirror h4,
  .remirror-theme .ProseMirror h4,
  .remirror-theme .ProseMirror h5,
  .remirror-theme .ProseMirror h6,
  .remirror-theme .ProseMirror span {
    margin: 0;
    /* margin-bottom: var(--rmr-space-2); */
  }
`;x`
  ${Or}
  ${Nr}
  ${Ze}
  ${ro}
  ${eo}
  ${oo}
  ${to}
  ${no}
  ${ao}
  ${io}
  ${so}
  ${lo}
  ${co}
  ${mo}
  ${uo}
  ${po}
  ${go}
  ${ho}
  ${bo}
`;const fo=x`
	${Or}
	${Nr}
`;function Tr({className:r}){const e=g.useRef(null),{getRootProps:o}=Er();return g.useEffect(()=>{e.current&&Xe(e.current,fo)},[]),p.jsx("div",{...o({ref:e}),className:r})}Tr.__docgenInfo={description:`A custom version of the EditorComponent exposed by Remirror
but uses a ref so to style the element without CSS file imports
Fix for carrot-vscode-extension - CSS file imports don't work`,methods:[],displayName:"SearchEditorComponent",props:{className:{required:!1,tsType:{name:"string"},description:""}}};function ko(r){const e=g.useRef(),o=g.useRef(0);return Qr(r,e.current)||(e.current=r,o.current+=1),[o.current]}function xo(r){return Object.values(r).reduce((e,o)=>({...e,...o.extraAttributes}),{})}function vo(r){const e=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(?!${e})[\\w\\d_]+`)}function yo(r,e){return Object.values(r).map(t=>{const{name:n}=t;return{name:n,char:`${n}:`,matchOffset:0,unicode:!0,mentionClassName:e,supportedCharacters:vo(`${n}:`)}})}function wo(r){const e=xo(r.fields);return[new Yr,new Jr({emptyNodeClass:r.emptyNodeClass,placeholder:r.placeholder}),new Xr({extraAttributes:e,matchers:[...yo(r.fields,r.mentionClass)],invalidMarks:["mention"],isValidPosition:(t,n)=>{const{to:a}=n.range;return a===t.$cursor.doc.content.size-1}})]}function zo(r){return g.useMemo(()=>()=>wo(r),ko([r]))}function Co(r){const{getContext:e,initialContent:o}=r;g.useEffect(()=>{const t=e();if(!t)return;const n=o||Rr;t.setContent(n,{triggerChange:!0})},[o,e])}function Ao({onSubmit:r},e){const{view:o,clearContent:t,commands:n}=Er({autoUpdate:!0});return g.useImperativeHandle(e,()=>({clearContent:()=>{t({triggerChange:!0}),r==null||r(o.state.doc)},createMention:a=>{const s=o.state.doc,d=s.content.size-1,l=s.content.size,c={cursor:d,from:d,to:l};n.createMention({...a,range:c,prefix:" "}),r==null||r(o.state.doc)},removeMention:a=>{var d,l;const s=or({type:o.state.schema.marks.mention,node:o.state.doc});if(!(!s||s.length===0)){for(const c of s){if(((d=c.node.marks[0].attrs)==null?void 0:d.id)!==a.id)continue;const i={from:c.pos,to:c.pos+c.node.textContent.length};if(!((l=a==null?void 0:a.name)!=null&&l.length)||a.name.length===0)continue;const m=`${a.name}:`.length,u=o.state.tr.replaceRangeWith(i.from-m,i.to,o.state.schema.nodeFromJSON(Zr));if(u.doc.textContent.trim().length<=1){t({triggerChange:!0});return}else o.dispatch(u)}r==null||r(o.state.doc)}},hasMention:a=>!!or({node:o.state.doc,type:o.state.schema.marks.mention,descend:!0}).find(({node:d})=>{var l;return((l=d.marks[0].attrs)==null?void 0:l.id)===a})})),p.jsx(p.Fragment,{})}const Gr=me.forwardRef(Ao);Gr.__docgenInfo={description:"Expose a handle to call some editor methods imperatively",methods:[{name:"clearContent",docblock:null,modifiers:[],params:[],returns:null},{name:"createMention",docblock:null,modifiers:[],params:[{name:"attrs",optional:!1,type:{name:"NamedMentionExtensionAttributes",alias:"NamedMentionExtensionAttributes"}}],returns:null},{name:"removeMention",docblock:null,modifiers:[],params:[{name:"attrs",optional:!1,type:{name:"NamedMentionExtensionAttributes",alias:"NamedMentionExtensionAttributes"}}],returns:null},{name:"hasMention",docblock:null,modifiers:[],params:[{name:"id",optional:!1,type:{name:"string"}}],returns:null}],displayName:"SearchImperativeHandle",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(doc: ProsemirrorNode) => void",signature:{arguments:[{type:{name:"ProsemirrorNode"},name:"doc"}],return:{name:"void"}}},description:""}}};const Mo=Ir()(r=>({emptyNode:{"&:first-of-type::before":{position:"absolute",color:r.palette.text.secondary,pointerEvents:"none",height:0,content:"attr(data-placeholder)"}},mentionClass:{color:r.palette.action.active},editor:{maxHeight:r.spacing(3),color:r.palette.text.primary,outline:"none",cursor:"text",width:"100%",overflow:"hidden !important","& p":{lineHeight:r.spacing(3),margin:0,caretColor:r.palette.primary.main,cursor:"pointer"}}}));function Fr({innerRef:r,initialSearchQuery:e,fields:o,onBlur:t,onFocus:n,onSubmit:a,placeholder:s,children:d,disabledSearch:l}){const{classes:c}=Mo(),[i,m]=g.useState(Rr),u=zo({fields:o,placeholder:s,emptyNodeClass:c.emptyNode,mentionClass:c.mentionClass});g.useEffect(()=>{(async()=>{const v=await oe({searchQuery:e,fields:o});m(v)})()},[o,e]);const{manager:b,state:h,onChange:w,getContext:A}=re({extensions:u,content:i});return Co({initialContent:i,getContext:A}),p.jsxs(ee,{manager:b,initialContent:h,classNames:[c.editor],onFocus:n,onBlur:t,onChange:w,editable:!l,children:[p.jsx(Gr,{ref:r,onSubmit:a}),d]})}Fr.__docgenInfo={description:"",methods:[],displayName:"SearchEditorProvider",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},initialSearchQuery:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabledSearch:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},fields:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Field"}],raw:"Record<string, Field>"},description:""},innerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<SearchImperativeRef>",elements:[{name:"SearchImperativeRef"}]},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(doc: ProsemirrorNode) => void",signature:{arguments:[{type:{name:"ProsemirrorNode"},name:"doc"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: RemirrorEventListenerProps<AnyExtension>) => boolean",signature:{arguments:[{type:{name:"RemirrorEventListenerProps",elements:[{name:"AnyExtension"}],raw:"RemirrorEventListenerProps<AnyExtension>"},name:"params"}],return:{name:"boolean"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
	params: RemirrorEventListenerProps<AnyExtension>,
	event: Event,
) => boolean`,signature:{arguments:[{type:{name:"RemirrorEventListenerProps",elements:[{name:"AnyExtension"}],raw:"RemirrorEventListenerProps<AnyExtension>"},name:"params"},{type:{name:"Event"},name:"event"}],return:{name:"boolean"}}},description:""},children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HTMLElement"}],raw:"ReactElement<HTMLElement>"},description:""}}};const So=Ir()(r=>({root:{position:"relative",minHeight:r.spacing(5),width:"100%",zIndex:5},container:{position:"absolute",top:0,width:"100%",borderRadius:r.shape.borderRadius,border:`${r.spacing(.125)} solid ${r.palette.divider}`,background:r.palette.background.default},activeContainer:{boxShadow:r.palette.background.default},editorInputRoot:{display:"flex",flexDirection:"row",alignItems:"center",gap:r.spacing(.5),alignSelf:"stretch",paddingRight:r.spacing(.625),maxHeight:r.spacing(3)},editorWrapper:{display:"flex",alignItems:"flex-start",alignContent:"center",gap:r.spacing(.75),flex:"1 0 0",flexWrap:"wrap",width:"100%",overflow:"hidden"},searchBox:{padding:r.spacing(1)},footer:{padding:r.spacing(2),width:"100%",borderTop:`${r.spacing(.125)} solid ${r.palette.divider}`}}));function er({disabledSearch:r,onSubmit:e,fields:o,classes:t,innerRef:n,initialSearchQuery:a,placeholder:s,menuFooter:d,fixedFooter:l,preventOnBlurSearch:c,getSuggestions:i}){const{classes:m,cx:u}=So(),b=g.useCallback(C=>{const y=te({doc:C,fields:o});e==null||e(y)},[o,e]),{isActive:h,closeMenu:w,showMenu:A}=Ke({onClose:b,disabledSearch:r}),M=g.useCallback(()=>(A(),!0),[A]),v=g.useRef(null),E=g.useCallback((C,y)=>{const{doc:S}=C.view.state,B=y.relatedTarget;return!S||v.current===null||v.current.contains(B)?(y.preventDefault(),!1):(w(C.view.state.doc,c),!0)},[w,c,v]),R=g.useMemo(()=>u(m.container,t==null?void 0:t.container,{[u(m.activeContainer,t==null?void 0:t.activeContainer)]:h}),[m.activeContainer,m.container,t==null?void 0:t.activeContainer,t==null?void 0:t.container,u,h]),I=h&&d;return p.jsx(Fr,{onFocus:M,onBlur:E,onSubmit:b,fields:o,innerRef:n,disabledSearch:r,initialSearchQuery:a,placeholder:s,isActive:h,children:p.jsx("div",{ref:v,className:u(m.root,t==null?void 0:t.root),children:p.jsxs("div",{className:R,children:[p.jsx("div",{className:u(m.searchBox,t==null?void 0:t.searchBox),children:p.jsx("div",{className:m.editorInputRoot,children:p.jsx(Tr,{className:m.editorWrapper})})}),p.jsx(ne,{fields:o,isActive:h,closeMenu:w,getSuggestions:i,optionLabel:"search",selectLabel:"select"}),I&&p.jsx("div",{className:m.footer,children:d}),l&&p.jsx("div",{className:m.footer,children:l})]})})})}er.__docgenInfo={description:"",methods:[],displayName:"SearchEditor",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchQuery: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchQuery"}],return:{name:"void"}}},description:""},classes:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	root?: string;
	container?: string;
	activeContainer?: string;
	searchBox?: string;
}`,signature:{properties:[{key:"root",value:{name:"string",required:!1}},{key:"container",value:{name:"string",required:!1}},{key:"activeContainer",value:{name:"string",required:!1}},{key:"searchBox",value:{name:"string",required:!1}}]}},description:""},preventOnBlurSearch:{required:!1,tsType:{name:"boolean"},description:""},menuFooter:{required:!1,tsType:{name:"JSX.Element"},description:""},fixedFooter:{required:!1,tsType:{name:"JSX.Element"},description:""},getSuggestions:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
	searchedTerm?: string;
	input?: string;
}) => Promise<NamedMentionExtensionAttributes[]>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
	searchedTerm?: string;
	input?: string;
}`,signature:{properties:[{key:"searchedTerm",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}}]}},name:"props"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"NamedMentionExtensionAttributes"}],raw:"NamedMentionExtensionAttributes[]"}],raw:"Promise<NamedMentionExtensionAttributes[]>"}}},description:""}},composes:["Omit"]};const Bo={title:"Editors / Search Editor",component:er},Wr=`list:item1,item2,item3 creator:${ie[0].id} tag:${se[0].id}`,D=r=>{const{renderUser:e,renderTag:o,renderDate:t,dateOptions:n,tagOptions:a,userOptions:s}=le(),d=async m=>{ir("getSuggestions")(m);const{input:u}=m,b=[...n,...a,...s];if(!u)return[];const h=u.toLowerCase();return b.filter(A=>A.label.toLowerCase().includes(h))},l=g.useRef(null),c=m=>async u=>m.find(b=>b.id===u),i={tag:{getExtraAttrs:c(a),type:"keyword",name:"tag",render:o,fieldIcon:p.jsx(ce,{})},date:{getExtraAttrs:c(n),type:"range",name:"date",render:t,fieldIcon:p.jsx(tr,{})},creator:{getExtraAttrs:c(s),type:"keyword",name:"creator",render:e,fieldIcon:p.jsx(tr,{})}};return p.jsxs(Ge,{direction:"row",container:!0,gap:1,alignContent:"center",alignItems:"center",children:[p.jsx(er,{placeholder:"Search by tags or users",fields:i,innerRef:l,onSubmit:ir("onSubmit"),getSuggestions:d,...r}),p.jsx(Ae,{children:p.jsx(xe,{variant:"contained",onClick:()=>{var m;return(m=l.current)==null?void 0:m.clearContent()},children:"Clear content"})})]})},O=D.bind({});O.args={};const N=D.bind({});N.args={initialSearchQuery:Wr};const T=D.bind({});T.args={initialSearchQuery:Wr,disabledSearch:!0};const G=D.bind({});G.args={fixedFooter:p.jsx("div",{style:{textAlign:"center"},children:"Fixed Footer"})};const F=D.bind({});F.args={menuFooter:p.jsx("div",{style:{textAlign:"center"},children:"Menu Footer"})};const W=()=>p.jsx(ae,{isLoadingSuggestions:!0,options:[],renderOption:()=>null,renderSelectOption:()=>null,getItemProps:()=>({}),indexIsHovered:()=>!1,indexIsSelected:()=>!1,getMenuProps:()=>({}),optionLabel:"",selectLabel:""});W.__docgenInfo={description:"",methods:[],displayName:"Loading"};var cr,dr,mr;O.parameters={...O.parameters,docs:{...(cr=O.parameters)==null?void 0:cr.docs,source:{originalSource:`(props: SearchEditorStoryArgs) => {
  const {
    renderUser,
    renderTag,
    renderDate,
    dateOptions,
    tagOptions,
    userOptions
  } = useEditorMention();
  const getSuggestions: GetSuggestions = async props => {
    action('getSuggestions')(props);
    const {
      input
    } = props;
    const suggestedItems = [...dateOptions, ...tagOptions, ...userOptions];
    if (!input) {
      return [];
    }
    const lowerCaseInput = input.toLowerCase();
    const filteredSuggestedItem = suggestedItems.filter(item => {
      const lowerCaseItem = item.label.toLowerCase();
      return lowerCaseItem.includes(lowerCaseInput);
    });
    return filteredSuggestedItem;
  };
  const editorRef = useRef<SearchImperativeRef>(null);
  const defaultGetExtraAttrs = (options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
    return options.find(option => option.id === id);
  };
  const fields: Fields = {
    tag: {
      getExtraAttrs: defaultGetExtraAttrs(tagOptions),
      type: 'keyword',
      name: 'tag',
      render: renderTag,
      fieldIcon: <PiTag />
    },
    date: {
      getExtraAttrs: defaultGetExtraAttrs(dateOptions),
      type: 'range',
      name: 'date',
      render: renderDate,
      fieldIcon: <PiCalendarBlank />
    },
    creator: {
      getExtraAttrs: defaultGetExtraAttrs(userOptions),
      type: 'keyword',
      name: 'creator',
      render: renderUser,
      fieldIcon: <PiCalendarBlank />
    }
  };
  return <Grid direction={'row'} container gap={1} alignContent={'center'} alignItems={'center'}>
            <SearchEditor placeholder="Search by tags or users" fields={fields} innerRef={editorRef} onSubmit={action('onSubmit')} getSuggestions={getSuggestions} {...props} />

            <ButtonGroup>
                <Button variant="contained" onClick={() => editorRef.current?.clearContent()}>
                    Clear content
                </Button>
            </ButtonGroup>
        </Grid>;
}`,...(mr=(dr=O.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var ur,pr,gr;N.parameters={...N.parameters,docs:{...(ur=N.parameters)==null?void 0:ur.docs,source:{originalSource:`(props: SearchEditorStoryArgs) => {
  const {
    renderUser,
    renderTag,
    renderDate,
    dateOptions,
    tagOptions,
    userOptions
  } = useEditorMention();
  const getSuggestions: GetSuggestions = async props => {
    action('getSuggestions')(props);
    const {
      input
    } = props;
    const suggestedItems = [...dateOptions, ...tagOptions, ...userOptions];
    if (!input) {
      return [];
    }
    const lowerCaseInput = input.toLowerCase();
    const filteredSuggestedItem = suggestedItems.filter(item => {
      const lowerCaseItem = item.label.toLowerCase();
      return lowerCaseItem.includes(lowerCaseInput);
    });
    return filteredSuggestedItem;
  };
  const editorRef = useRef<SearchImperativeRef>(null);
  const defaultGetExtraAttrs = (options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
    return options.find(option => option.id === id);
  };
  const fields: Fields = {
    tag: {
      getExtraAttrs: defaultGetExtraAttrs(tagOptions),
      type: 'keyword',
      name: 'tag',
      render: renderTag,
      fieldIcon: <PiTag />
    },
    date: {
      getExtraAttrs: defaultGetExtraAttrs(dateOptions),
      type: 'range',
      name: 'date',
      render: renderDate,
      fieldIcon: <PiCalendarBlank />
    },
    creator: {
      getExtraAttrs: defaultGetExtraAttrs(userOptions),
      type: 'keyword',
      name: 'creator',
      render: renderUser,
      fieldIcon: <PiCalendarBlank />
    }
  };
  return <Grid direction={'row'} container gap={1} alignContent={'center'} alignItems={'center'}>
            <SearchEditor placeholder="Search by tags or users" fields={fields} innerRef={editorRef} onSubmit={action('onSubmit')} getSuggestions={getSuggestions} {...props} />

            <ButtonGroup>
                <Button variant="contained" onClick={() => editorRef.current?.clearContent()}>
                    Clear content
                </Button>
            </ButtonGroup>
        </Grid>;
}`,...(gr=(pr=N.parameters)==null?void 0:pr.docs)==null?void 0:gr.source}}};var hr,br,fr;T.parameters={...T.parameters,docs:{...(hr=T.parameters)==null?void 0:hr.docs,source:{originalSource:`(props: SearchEditorStoryArgs) => {
  const {
    renderUser,
    renderTag,
    renderDate,
    dateOptions,
    tagOptions,
    userOptions
  } = useEditorMention();
  const getSuggestions: GetSuggestions = async props => {
    action('getSuggestions')(props);
    const {
      input
    } = props;
    const suggestedItems = [...dateOptions, ...tagOptions, ...userOptions];
    if (!input) {
      return [];
    }
    const lowerCaseInput = input.toLowerCase();
    const filteredSuggestedItem = suggestedItems.filter(item => {
      const lowerCaseItem = item.label.toLowerCase();
      return lowerCaseItem.includes(lowerCaseInput);
    });
    return filteredSuggestedItem;
  };
  const editorRef = useRef<SearchImperativeRef>(null);
  const defaultGetExtraAttrs = (options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
    return options.find(option => option.id === id);
  };
  const fields: Fields = {
    tag: {
      getExtraAttrs: defaultGetExtraAttrs(tagOptions),
      type: 'keyword',
      name: 'tag',
      render: renderTag,
      fieldIcon: <PiTag />
    },
    date: {
      getExtraAttrs: defaultGetExtraAttrs(dateOptions),
      type: 'range',
      name: 'date',
      render: renderDate,
      fieldIcon: <PiCalendarBlank />
    },
    creator: {
      getExtraAttrs: defaultGetExtraAttrs(userOptions),
      type: 'keyword',
      name: 'creator',
      render: renderUser,
      fieldIcon: <PiCalendarBlank />
    }
  };
  return <Grid direction={'row'} container gap={1} alignContent={'center'} alignItems={'center'}>
            <SearchEditor placeholder="Search by tags or users" fields={fields} innerRef={editorRef} onSubmit={action('onSubmit')} getSuggestions={getSuggestions} {...props} />

            <ButtonGroup>
                <Button variant="contained" onClick={() => editorRef.current?.clearContent()}>
                    Clear content
                </Button>
            </ButtonGroup>
        </Grid>;
}`,...(fr=(br=T.parameters)==null?void 0:br.docs)==null?void 0:fr.source}}};var kr,xr,vr;G.parameters={...G.parameters,docs:{...(kr=G.parameters)==null?void 0:kr.docs,source:{originalSource:`(props: SearchEditorStoryArgs) => {
  const {
    renderUser,
    renderTag,
    renderDate,
    dateOptions,
    tagOptions,
    userOptions
  } = useEditorMention();
  const getSuggestions: GetSuggestions = async props => {
    action('getSuggestions')(props);
    const {
      input
    } = props;
    const suggestedItems = [...dateOptions, ...tagOptions, ...userOptions];
    if (!input) {
      return [];
    }
    const lowerCaseInput = input.toLowerCase();
    const filteredSuggestedItem = suggestedItems.filter(item => {
      const lowerCaseItem = item.label.toLowerCase();
      return lowerCaseItem.includes(lowerCaseInput);
    });
    return filteredSuggestedItem;
  };
  const editorRef = useRef<SearchImperativeRef>(null);
  const defaultGetExtraAttrs = (options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
    return options.find(option => option.id === id);
  };
  const fields: Fields = {
    tag: {
      getExtraAttrs: defaultGetExtraAttrs(tagOptions),
      type: 'keyword',
      name: 'tag',
      render: renderTag,
      fieldIcon: <PiTag />
    },
    date: {
      getExtraAttrs: defaultGetExtraAttrs(dateOptions),
      type: 'range',
      name: 'date',
      render: renderDate,
      fieldIcon: <PiCalendarBlank />
    },
    creator: {
      getExtraAttrs: defaultGetExtraAttrs(userOptions),
      type: 'keyword',
      name: 'creator',
      render: renderUser,
      fieldIcon: <PiCalendarBlank />
    }
  };
  return <Grid direction={'row'} container gap={1} alignContent={'center'} alignItems={'center'}>
            <SearchEditor placeholder="Search by tags or users" fields={fields} innerRef={editorRef} onSubmit={action('onSubmit')} getSuggestions={getSuggestions} {...props} />

            <ButtonGroup>
                <Button variant="contained" onClick={() => editorRef.current?.clearContent()}>
                    Clear content
                </Button>
            </ButtonGroup>
        </Grid>;
}`,...(vr=(xr=G.parameters)==null?void 0:xr.docs)==null?void 0:vr.source}}};var yr,wr,zr;F.parameters={...F.parameters,docs:{...(yr=F.parameters)==null?void 0:yr.docs,source:{originalSource:`(props: SearchEditorStoryArgs) => {
  const {
    renderUser,
    renderTag,
    renderDate,
    dateOptions,
    tagOptions,
    userOptions
  } = useEditorMention();
  const getSuggestions: GetSuggestions = async props => {
    action('getSuggestions')(props);
    const {
      input
    } = props;
    const suggestedItems = [...dateOptions, ...tagOptions, ...userOptions];
    if (!input) {
      return [];
    }
    const lowerCaseInput = input.toLowerCase();
    const filteredSuggestedItem = suggestedItems.filter(item => {
      const lowerCaseItem = item.label.toLowerCase();
      return lowerCaseItem.includes(lowerCaseInput);
    });
    return filteredSuggestedItem;
  };
  const editorRef = useRef<SearchImperativeRef>(null);
  const defaultGetExtraAttrs = (options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
    return options.find(option => option.id === id);
  };
  const fields: Fields = {
    tag: {
      getExtraAttrs: defaultGetExtraAttrs(tagOptions),
      type: 'keyword',
      name: 'tag',
      render: renderTag,
      fieldIcon: <PiTag />
    },
    date: {
      getExtraAttrs: defaultGetExtraAttrs(dateOptions),
      type: 'range',
      name: 'date',
      render: renderDate,
      fieldIcon: <PiCalendarBlank />
    },
    creator: {
      getExtraAttrs: defaultGetExtraAttrs(userOptions),
      type: 'keyword',
      name: 'creator',
      render: renderUser,
      fieldIcon: <PiCalendarBlank />
    }
  };
  return <Grid direction={'row'} container gap={1} alignContent={'center'} alignItems={'center'}>
            <SearchEditor placeholder="Search by tags or users" fields={fields} innerRef={editorRef} onSubmit={action('onSubmit')} getSuggestions={getSuggestions} {...props} />

            <ButtonGroup>
                <Button variant="contained" onClick={() => editorRef.current?.clearContent()}>
                    Clear content
                </Button>
            </ButtonGroup>
        </Grid>;
}`,...(zr=(wr=F.parameters)==null?void 0:wr.docs)==null?void 0:zr.source}}};var Cr,Ar,Mr;W.parameters={...W.parameters,docs:{...(Cr=W.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <MentionSuggester isLoadingSuggestions options={[]} renderOption={() => null} renderSelectOption={() => null} getItemProps={() => ({} as any)} indexIsHovered={() => false} indexIsSelected={() => false} getMenuProps={() => ({} as any)} optionLabel='' selectLabel='' />;
}`,...(Mr=(Ar=W.parameters)==null?void 0:Ar.docs)==null?void 0:Mr.source}}};const jo=["Basic","Filled","Disabled","FixedFooter","MenuFooter","Loading"];export{O as Basic,T as Disabled,N as Filled,G as FixedFooter,W as Loading,F as MenuFooter,jo as __namedExportsOrder,Bo as default};
