import{l as B,t as j,h as g,m as I}from"./@babel-f2e68048.js";import{R as M,c as O,m as q,M as J,P as Q,a as U,b as V,S as X,d as Y,g as Z,u as k,e as _,f as rr,h as tr,w as er}from"./react-router-bff43097.js";import{R as l}from"./react-58c93dee.js";import{d as ar,e as or,b as z,a as ir}from"./history-780127be.js";import"./prop-types-b1007ac4.js";import{i as W}from"./tiny-invariant-57478369.js";import{j as P}from"./@ant-design-3072d4b7.js";var nr=function(r){B(t,r);function t(){for(var a,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return a=r.call.apply(r,[this].concat(n))||this,a.history=ar(a.props),a}var e=t.prototype;return e.render=function(){return P(M,{history:this.history,children:this.props.children})},t}(l.Component),sr=function(r){B(t,r);function t(){for(var a,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return a=r.call.apply(r,[this].concat(n))||this,a.history=or(a.props),a}var e=t.prototype;return e.render=function(){return P(M,{history:this.history,children:this.props.children})},t}(l.Component),H=function(t,e){return typeof t=="function"?t(e):t},b=function(t,e){return typeof t=="string"?ir(t,null,null,e):t},T=function(t){return t},v=l.forwardRef;typeof v>"u"&&(v=T);function cr(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var ur=v(function(r,t){var e=r.innerRef,a=r.navigate,i=r.onClick,n=j(r,["innerRef","navigate","onClick"]),o=n.target,c=g({},n,{onClick:function(s){try{i&&i(s)}catch(f){throw s.preventDefault(),f}!s.defaultPrevented&&s.button===0&&(!o||o==="_self")&&!cr(s)&&(s.preventDefault(),a())}});return T!==v?c.ref=t||e:c.ref=e,P("a",{...c})}),F=v(function(r,t){var e=r.component,a=e===void 0?ur:e,i=r.replace,n=r.to,o=r.innerRef,c=j(r,["component","replace","to","innerRef"]);return l.createElement(O.Consumer,null,function(u){u||W(!1);var s=u.history,f=b(H(n,u.location),u.location),L=f?s.createHref(f):"",p=g({},c,{href:L,navigate:function(){var m=H(n,u.location),d=z(u.location)===z(b(m)),N=i||d?s.replace:s.push;N(m)}});return T!==v?p.ref=t||o:p.innerRef=o,l.createElement(a,p)})}),G=function(t){return t},w=l.forwardRef;typeof w>"u"&&(w=G);function lr(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter(function(a){return a}).join(" ")}var fr=w(function(r,t){var e=r["aria-current"],a=e===void 0?"page":e,i=r.activeClassName,n=i===void 0?"active":i,o=r.activeStyle,c=r.className,u=r.exact,s=r.isActive,f=r.location,L=r.sensitive,p=r.strict,h=r.style,m=r.to,d=r.innerRef,N=j(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return l.createElement(O.Consumer,null,function($){$||W(!1);var y=f||$.location,D=b(H(m,y),y),E=D.pathname,K=E&&E.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=K?q(y.pathname,{path:K,exact:u,sensitive:L,strict:p}):null,R=!!(s?s(x,y):x),C=typeof c=="function"?c(R):c,S=typeof h=="function"?h(R):h;R&&(C=lr(C,n),S=g({},S,o));var A=g({"aria-current":R&&a||null,className:C,style:S,to:D},N);return G!==w?A.ref=t||d:A.innerRef=d,P(F,{...A})})});const vr=Object.freeze(Object.defineProperty({__proto__:null,BrowserRouter:nr,HashRouter:sr,Link:F,NavLink:fr,MemoryRouter:J,Prompt:Q,Redirect:U,Route:V,Router:M,StaticRouter:X,Switch:Y,generatePath:Z,matchPath:q,useHistory:k,useLocation:_,useParams:rr,useRouteMatch:tr,withRouter:er},Symbol.toStringTag,{value:"Module"})),wr=I(vr);export{sr as H,fr as N,wr as r};