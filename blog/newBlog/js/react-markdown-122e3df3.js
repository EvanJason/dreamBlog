import{R as x}from"./react-58c93dee.js";import{r as z}from"./remark-parse-e01527c6.js";import{p as n}from"./prop-types-b1007ac4.js";import{f as V,a as D,s as B,h as W}from"./property-information-8a8c9296.js";import{v as q}from"./unist-util-visit-88daab1a.js";import{s as G}from"./@babel-f2e68048.js";import{w as J}from"./hast-util-whitespace-af858fa2.js";import{s as K}from"./space-separated-tokens-184e418d.js";import{s as Q}from"./comma-separated-tokens-ac5eb161.js";import{s as X}from"./style-to-object-80f79700.js";import{j as L,F as Y}from"./@ant-design-3072d4b7.js";import{u as Z}from"./unified-ea6cf7eb.js";import{r as ee}from"./remark-rehype-d0600d11.js";import{V as te}from"./vfile-2625c707.js";const M=["http","https","mailto","tel"];function re(e){const t=(e||"").trim(),s=t.charAt(0);if(s==="#"||s==="/")return t;const l=t.indexOf(":");if(l===-1)return t;let r=-1;for(;++r<M.length;){const i=M[r];if(l===i.length&&t.slice(0,i.length).toLowerCase()===i)return t}return r=t.indexOf("?"),r!==-1&&l>r||(r=t.indexOf("#"),r!==-1&&l>r)?t:"javascript:void(0)"}function ne(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{q(t,"element",(s,l,r)=>{const i=r;let f;if(e.allowedElements?f=!e.allowedElements.includes(s.tagName):e.disallowedElements&&(f=e.disallowedElements.includes(s.tagName)),!f&&e.allowElement&&typeof l=="number"&&(f=!e.allowElement(s,l,i)),f&&typeof l=="number")return e.unwrapDisallowed&&s.children?i.children.splice(l,1,...s.children):i.children.splice(l,1),l})}}var U={exports:{}},c={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=Symbol.for("react.element"),C=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),E=Symbol.for("react.context"),le=Symbol.for("react.server_context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),_;_=Symbol.for("react.module.reference");function u(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case I:switch(e=e.type,e){case h:case w:case g:case k:case $:return e;default:switch(e=e&&e.$$typeof,e){case le:case E:case S:case T:case v:case b:return e;default:return t}}case C:return t}}}c.ContextConsumer=E;c.ContextProvider=b;c.Element=I;c.ForwardRef=S;c.Fragment=h;c.Lazy=T;c.Memo=v;c.Portal=C;c.Profiler=w;c.StrictMode=g;c.Suspense=k;c.SuspenseList=$;c.isAsyncMode=function(){return!1};c.isConcurrentMode=function(){return!1};c.isContextConsumer=function(e){return u(e)===E};c.isContextProvider=function(e){return u(e)===b};c.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===I};c.isForwardRef=function(e){return u(e)===S};c.isFragment=function(e){return u(e)===h};c.isLazy=function(e){return u(e)===T};c.isMemo=function(e){return u(e)===v};c.isPortal=function(e){return u(e)===C};c.isProfiler=function(e){return u(e)===w};c.isStrictMode=function(e){return u(e)===g};c.isSuspense=function(e){return u(e)===k};c.isSuspenseList=function(e){return u(e)===$};c.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===h||e===w||e===g||e===k||e===$||e===oe||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===v||e.$$typeof===b||e.$$typeof===E||e.$$typeof===S||e.$$typeof===_||e.getModuleId!==void 0)};c.typeOf=u;(function(e){e.exports=c})(U);const ie=G(U.exports),j={}.hasOwnProperty,se=new Set(["table","thead","tbody","tfoot","tr"]);function A(e,t){const s=[];let l=-1,r;for(;++l<t.children.length;)r=t.children[l],r.type==="element"?s.push(ae(e,r,l,t)):r.type==="text"?(t.type!=="element"||!se.has(t.tagName)||!J(r))&&s.push(r.value):r.type==="raw"&&!e.options.skipHtml&&s.push(r.value);return s}function ae(e,t,s,l){const r=e.options,i=r.transformLinkUri===void 0?re:r.transformLinkUri,f=e.schema,a=t.tagName,o={};let R=f,p;if(f.space==="html"&&a==="svg"&&(R=B,e.schema=R),t.properties)for(p in t.properties)j.call(t.properties,p)&&fe(o,p,t.properties[p],e);(a==="ol"||a==="ul")&&e.listDepth++;const F=A(e,t);(a==="ol"||a==="ul")&&e.listDepth--,e.schema=f;const O=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},d=r.components&&j.call(r.components,a)?r.components[a]:a,m=typeof d=="string"||d===x.Fragment;if(!ie.isValidElementType(d))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(o.key=[a,O.start.line,O.start.column,s].join("-"),a==="a"&&r.linkTarget&&(o.target=typeof r.linkTarget=="function"?r.linkTarget(String(o.href||""),t.children,typeof o.title=="string"?o.title:null):r.linkTarget),a==="a"&&i&&(o.href=i(String(o.href||""),t.children,typeof o.title=="string"?o.title:null)),!m&&a==="code"&&l.type==="element"&&l.tagName!=="pre"&&(o.inline=!0),!m&&(a==="h1"||a==="h2"||a==="h3"||a==="h4"||a==="h5"||a==="h6")&&(o.level=Number.parseInt(a.charAt(1),10)),a==="img"&&r.transformImageUri&&(o.src=r.transformImageUri(String(o.src||""),String(o.alt||""),typeof o.title=="string"?o.title:null)),!m&&a==="li"&&l.type==="element"){const P=ce(t);o.checked=P&&P.properties?Boolean(P.properties.checked):null,o.index=N(l,t),o.ordered=l.tagName==="ol"}return!m&&(a==="ol"||a==="ul")&&(o.ordered=a==="ol",o.depth=e.listDepth),(a==="td"||a==="th")&&(o.align&&(o.style||(o.style={}),o.style.textAlign=o.align,delete o.align),m||(o.isHeader=a==="th")),!m&&a==="tr"&&l.type==="element"&&(o.isHeader=Boolean(l.tagName==="thead")),r.sourcePos&&(o["data-sourcepos"]=de(O)),!m&&r.rawSourcePos&&(o.sourcePosition=t.position),!m&&r.includeElementIndex&&(o.index=N(l,t),o.siblingCount=N(l)),m||(o.node=t),F.length>0?x.createElement(d,o,F):x.createElement(d,o)}function ce(e){let t=-1;for(;++t<e.children.length;){const s=e.children[t];if(s.type==="element"&&s.tagName==="input")return s}return null}function N(e,t){let s=-1,l=0;for(;++s<e.children.length&&e.children[s]!==t;)e.children[s].type==="element"&&l++;return l}function fe(e,t,s,l){const r=V(l.schema,t);let i=s;i==null||i!==i||(Array.isArray(i)&&(i=r.commaSeparated?Q(i):K(i)),r.property==="style"&&typeof i=="string"&&(i=ue(i)),r.space&&r.property?e[j.call(D,r.property)?D[r.property]:r.property]=i:r.attribute&&(e[r.attribute]=i))}function ue(e){const t={};try{X(e,s)}catch{}return t;function s(l,r){const i=l.slice(0,4)==="-ms-"?`ms-${l.slice(4)}`:l;t[i.replace(/-([a-z])/g,me)]=r}}function me(e,t){return t.toUpperCase()}function de(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}const H={}.hasOwnProperty,pe="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",y={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function ye(e){for(const i in y)if(H.call(y,i)&&H.call(e,i)){const f=y[i];console.warn(`[react-markdown] Warning: please ${f.to?`use \`${f.to}\` instead of`:"remove"} \`${i}\` (see <${pe}#${f.id}> for more info)`),delete y[i]}const t=Z().use(z).use(e.remarkPlugins||[]).use(ee,{...e.remarkRehypeOptions,allowDangerousHtml:!0}).use(e.rehypePlugins||[]).use(ne,e),s=new te;typeof e.children=="string"?s.value=e.children:e.children!==void 0&&e.children!==null&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);const l=t.runSync(t.parse(s),s);if(l.type!=="root")throw new TypeError("Expected a `root` node");let r=L(Y,{children:A({options:e,schema:W,listDepth:0},l)});return e.className&&(r=L("div",{className:e.className,children:r})),r}ye.propTypes={children:n.string,className:n.string,allowElement:n.func,allowedElements:n.arrayOf(n.string),disallowedElements:n.arrayOf(n.string),unwrapDisallowed:n.bool,remarkPlugins:n.arrayOf(n.oneOfType([n.object,n.func,n.arrayOf(n.oneOfType([n.bool,n.string,n.object,n.func,n.arrayOf(n.any)]))])),rehypePlugins:n.arrayOf(n.oneOfType([n.object,n.func,n.arrayOf(n.oneOfType([n.bool,n.string,n.object,n.func,n.arrayOf(n.any)]))])),sourcePos:n.bool,rawSourcePos:n.bool,skipHtml:n.bool,includeElementIndex:n.bool,transformLinkUri:n.oneOfType([n.func,n.bool]),linkTarget:n.oneOfType([n.func,n.string]),transformImageUri:n.func,components:n.object};export{ye as R};