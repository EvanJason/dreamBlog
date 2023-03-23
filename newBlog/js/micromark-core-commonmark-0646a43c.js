import{p as F,s as Y}from"./micromark-util-chunked-2473f181.js";import{c as v}from"./micromark-util-classify-character-de725566.js";import{r as rn}from"./micromark-util-resolve-all-5bf62893.js";import{b as P,c as d,d as M,e as hn,m as b,f as C,g as xn,h as gn,i as X,j as O}from"./micromark-util-character-7742fea9.js";import{f as y}from"./micromark-factory-space-b5e3cfb5.js";import{d as kn}from"./decode-named-character-reference-a2bc9cda.js";import{s as Sn}from"./micromark-util-subtokenize-b4846e21.js";import{f as en}from"./micromark-factory-destination-56b2a8e8.js";import{f as un}from"./micromark-factory-label-fb753deb.js";import{f as an}from"./micromark-factory-title-5b2c48a9.js";import{f as G}from"./micromark-factory-whitespace-3c01e457.js";import{n as Z}from"./micromark-util-normalize-identifier-6d6ad9fc.js";import{h as nn,a as bn}from"./micromark-util-html-tag-name-3806e296.js";const Bt={name:"attention",tokenize:zn,resolveAll:cn};function cn(n,u){let r=-1,t,l,s,a,o,m,h,p;for(;++r<n.length;)if(n[r][0]==="enter"&&n[r][1].type==="attentionSequence"&&n[r][1]._close){for(t=r;t--;)if(n[t][0]==="exit"&&n[t][1].type==="attentionSequence"&&n[t][1]._open&&u.sliceSerialize(n[t][1]).charCodeAt(0)===u.sliceSerialize(n[r][1]).charCodeAt(0)){if((n[t][1]._close||n[r][1]._open)&&(n[r][1].end.offset-n[r][1].start.offset)%3&&!((n[t][1].end.offset-n[t][1].start.offset+n[r][1].end.offset-n[r][1].start.offset)%3))continue;m=n[t][1].end.offset-n[t][1].start.offset>1&&n[r][1].end.offset-n[r][1].start.offset>1?2:1;const k=Object.assign({},n[t][1].end),z=Object.assign({},n[r][1].start);tn(k,-m),tn(z,m),a={type:m>1?"strongSequence":"emphasisSequence",start:k,end:Object.assign({},n[t][1].end)},o={type:m>1?"strongSequence":"emphasisSequence",start:Object.assign({},n[r][1].start),end:z},s={type:m>1?"strongText":"emphasisText",start:Object.assign({},n[t][1].end),end:Object.assign({},n[r][1].start)},l={type:m>1?"strong":"emphasis",start:Object.assign({},a.start),end:Object.assign({},o.end)},n[t][1].end=Object.assign({},a.start),n[r][1].start=Object.assign({},o.end),h=[],n[t][1].end.offset-n[t][1].start.offset&&(h=F(h,[["enter",n[t][1],u],["exit",n[t][1],u]])),h=F(h,[["enter",l,u],["enter",a,u],["exit",a,u],["enter",s,u]]),h=F(h,rn(u.parser.constructs.insideSpan.null,n.slice(t+1,r),u)),h=F(h,[["exit",s,u],["enter",o,u],["exit",o,u],["exit",l,u]]),n[r][1].end.offset-n[r][1].start.offset?(p=2,h=F(h,[["enter",n[r][1],u],["exit",n[r][1],u]])):p=0,Y(n,t-1,r-t+3,h),r=t+h.length-p-2;break}}for(r=-1;++r<n.length;)n[r][1].type==="attentionSequence"&&(n[r][1].type="data");return n}function zn(n,u){const r=this.parser.constructs.attentionMarkers.null,t=this.previous,l=v(t);let s;return a;function a(m){return n.enter("attentionSequence"),s=m,o(m)}function o(m){if(m===s)return n.consume(m),o;const h=n.exit("attentionSequence"),p=v(m),k=!p||p===2&&l||r.includes(m),z=!l||l===2&&p||r.includes(t);return h._open=Boolean(s===42?k:k&&(l||!z)),h._close=Boolean(s===42?z:z&&(p||!k)),u(m)}}function tn(n,u){n.column+=u,n.offset+=u,n._bufferIndex+=u}const Dt={name:"autolink",tokenize:yn};function yn(n,u,r){let t=1;return l;function l(x){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(x),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(x){return P(x)?(n.consume(x),a):d(x)?h(x):r(x)}function a(x){return x===43||x===45||x===46||M(x)?o(x):h(x)}function o(x){return x===58?(n.consume(x),m):(x===43||x===45||x===46||M(x))&&t++<32?(n.consume(x),o):h(x)}function m(x){return x===62?(n.exit("autolinkProtocol"),S(x)):x===null||x===32||x===60||hn(x)?r(x):(n.consume(x),m)}function h(x){return x===64?(n.consume(x),t=0,p):d(x)?(n.consume(x),h):r(x)}function p(x){return M(x)?k(x):r(x)}function k(x){return x===46?(n.consume(x),t=0,p):x===62?(n.exit("autolinkProtocol").type="autolinkEmail",S(x)):z(x)}function z(x){return(x===45||M(x))&&t++<63?(n.consume(x),x===45?z:k):r(x)}function S(x){return n.enter("autolinkMarker"),n.consume(x),n.exit("autolinkMarker"),n.exit("autolink"),u}}const $={tokenize:En,partial:!0};function En(n,u,r){return y(n,t,"linePrefix");function t(l){return l===null||b(l)?u(l):r(l)}}const Cn={name:"blockQuote",tokenize:wn,continuation:{tokenize:Ln},exit:Tn};function wn(n,u,r){const t=this;return l;function l(a){if(a===62){const o=t.containerState;return o.open||(n.enter("blockQuote",{_container:!0}),o.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(a),n.exit("blockQuoteMarker"),s}return r(a)}function s(a){return C(a)?(n.enter("blockQuotePrefixWhitespace"),n.consume(a),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),u):(n.exit("blockQuotePrefix"),u(a))}}function Ln(n,u,r){return y(n,n.attempt(Cn,u,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Tn(n){n.exit("blockQuote")}const ft={name:"characterEscape",tokenize:In};function In(n,u,r){return t;function t(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),l}function l(s){return xn(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),u):r(s)}}const Rt={name:"characterReference",tokenize:An};function An(n,u,r){const t=this;let l=0,s,a;return o;function o(k){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(k),n.exit("characterReferenceMarker"),m}function m(k){return k===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(k),n.exit("characterReferenceMarkerNumeric"),h):(n.enter("characterReferenceValue"),s=31,a=M,p(k))}function h(k){return k===88||k===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(k),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,a=gn,p):(n.enter("characterReferenceValue"),s=7,a=X,p(k))}function p(k){let z;return k===59&&l?(z=n.exit("characterReferenceValue"),a===M&&!kn(t.sliceSerialize(z))?r(k):(n.enter("characterReferenceMarker"),n.consume(k),n.exit("characterReferenceMarker"),n.exit("characterReference"),u)):a(k)&&l++<s?(n.consume(k),p):r(k)}}const Ht={name:"codeFenced",tokenize:Fn,concrete:!0};function Fn(n,u,r){const t=this,l={tokenize:f,partial:!0},s={tokenize:D,partial:!0},a=this.events[this.events.length-1],o=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0;let m=0,h;return p;function p(g){return n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),h=g,k(g)}function k(g){return g===h?(n.consume(g),m++,k):(n.exit("codeFencedFenceSequence"),m<3?r(g):y(n,z,"whitespace")(g))}function z(g){return g===null||b(g)?_(g):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),S(g))}function S(g){return g===null||O(g)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),y(n,x,"whitespace")(g)):g===96&&g===h?r(g):(n.consume(g),S)}function x(g){return g===null||b(g)?_(g):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),V(g))}function V(g){return g===null||b(g)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),_(g)):g===96&&g===h?r(g):(n.consume(g),V)}function _(g){return n.exit("codeFencedFence"),t.interrupt?u(g):w(g)}function w(g){return g===null?B(g):b(g)?n.attempt(s,n.attempt(l,B,o?y(n,w,"linePrefix",o+1):w),B)(g):(n.enter("codeFlowValue"),q(g))}function q(g){return g===null||b(g)?(n.exit("codeFlowValue"),w(g)):(n.consume(g),q)}function B(g){return n.exit("codeFenced"),u(g)}function D(g,Q,R){const L=this;return H;function H(I){return g.enter("lineEnding"),g.consume(I),g.exit("lineEnding"),c}function c(I){return L.parser.lazy[L.now().line]?R(I):Q(I)}}function f(g,Q,R){let L=0;return y(g,H,"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function H(E){return g.enter("codeFencedFence"),g.enter("codeFencedFenceSequence"),c(E)}function c(E){return E===h?(g.consume(E),L++,c):L<m?R(E):(g.exit("codeFencedFenceSequence"),y(g,I,"whitespace")(E))}function I(E){return E===null||b(E)?(g.exit("codeFencedFence"),Q(E)):R(E)}}}const jt={name:"codeIndented",tokenize:Pn},Mn={tokenize:On,partial:!0};function Pn(n,u,r){const t=this;return l;function l(h){return n.enter("codeIndented"),y(n,s,"linePrefix",4+1)(h)}function s(h){const p=t.events[t.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?a(h):r(h)}function a(h){return h===null?m(h):b(h)?n.attempt(Mn,a,m)(h):(n.enter("codeFlowValue"),o(h))}function o(h){return h===null||b(h)?(n.exit("codeFlowValue"),a(h)):(n.consume(h),o)}function m(h){return n.exit("codeIndented"),u(h)}}function On(n,u,r){const t=this;return l;function l(a){return t.parser.lazy[t.now().line]?r(a):b(a)?(n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),l):y(n,s,"linePrefix",4+1)(a)}function s(a){const o=t.events[t.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?u(a):b(a)?l(a):r(a)}}const Vt={name:"codeText",tokenize:Dn,resolve:qn,previous:Bn};function qn(n){let u=n.length-4,r=3,t,l;if((n[r][1].type==="lineEnding"||n[r][1].type==="space")&&(n[u][1].type==="lineEnding"||n[u][1].type==="space")){for(t=r;++t<u;)if(n[t][1].type==="codeTextData"){n[r][1].type="codeTextPadding",n[u][1].type="codeTextPadding",r+=2,u-=2;break}}for(t=r-1,u++;++t<=u;)l===void 0?t!==u&&n[t][1].type!=="lineEnding"&&(l=t):(t===u||n[t][1].type==="lineEnding")&&(n[l][1].type="codeTextData",t!==l+2&&(n[l][1].end=n[t-1][1].end,n.splice(l+2,t-l-2),u-=t-l-2,t=l+2),l=void 0);return n}function Bn(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Dn(n,u,r){let t=0,l,s;return a;function a(k){return n.enter("codeText"),n.enter("codeTextSequence"),o(k)}function o(k){return k===96?(n.consume(k),t++,o):(n.exit("codeTextSequence"),m(k))}function m(k){return k===null?r(k):k===96?(s=n.enter("codeTextSequence"),l=0,p(k)):k===32?(n.enter("space"),n.consume(k),n.exit("space"),m):b(k)?(n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),m):(n.enter("codeTextData"),h(k))}function h(k){return k===null||k===32||k===96||b(k)?(n.exit("codeTextData"),m(k)):(n.consume(k),h)}function p(k){return k===96?(n.consume(k),l++,p):l===t?(n.exit("codeTextSequence"),n.exit("codeText"),u(k)):(s.type="codeTextData",h(k))}}const _t={tokenize:Hn,resolve:Rn},fn={tokenize:jn,partial:!0};function Rn(n){return Sn(n),n}function Hn(n,u){let r;return t;function t(o){return n.enter("content"),r=n.enter("chunkContent",{contentType:"content"}),l(o)}function l(o){return o===null?s(o):b(o)?n.check(fn,a,s)(o):(n.consume(o),l)}function s(o){return n.exit("chunkContent"),n.exit("content"),u(o)}function a(o){return n.consume(o),n.exit("chunkContent"),r.next=n.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,l}}function jn(n,u,r){const t=this;return l;function l(a){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(a),n.exit("lineEnding"),y(n,s,"linePrefix")}function s(a){if(a===null||b(a))return r(a);const o=t.events[t.events.length-1];return!t.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?u(a):n.interrupt(t.parser.constructs.flow,r,u)(a)}}const Qt={name:"definition",tokenize:_n},Vn={tokenize:Qn,partial:!0};function _n(n,u,r){const t=this;let l;return s;function s(m){return n.enter("definition"),un.call(t,n,a,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function a(m){return l=Z(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)),m===58?(n.enter("definitionMarker"),n.consume(m),n.exit("definitionMarker"),G(n,en(n,n.attempt(Vn,y(n,o,"whitespace"),y(n,o,"whitespace")),r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString"))):r(m)}function o(m){return m===null||b(m)?(n.exit("definition"),t.parser.defined.includes(l)||t.parser.defined.push(l),u(m)):r(m)}}function Qn(n,u,r){return t;function t(a){return O(a)?G(n,l)(a):r(a)}function l(a){return a===34||a===39||a===40?an(n,y(n,s,"whitespace"),r,"definitionTitle","definitionTitleMarker","definitionTitleString")(a):r(a)}function s(a){return a===null||b(a)?u(a):r(a)}}const Nt={name:"hardBreakEscape",tokenize:Nn};function Nn(n,u,r){return t;function t(s){return n.enter("hardBreakEscape"),n.enter("escapeMarker"),n.consume(s),l}function l(s){return b(s)?(n.exit("escapeMarker"),n.exit("hardBreakEscape"),u(s)):r(s)}}const Wt={name:"headingAtx",tokenize:Un,resolve:Wn};function Wn(n,u){let r=n.length-2,t=3,l,s;return n[t][1].type==="whitespace"&&(t+=2),r-2>t&&n[r][1].type==="whitespace"&&(r-=2),n[r][1].type==="atxHeadingSequence"&&(t===r-1||r-4>t&&n[r-2][1].type==="whitespace")&&(r-=t+1===r?2:4),r>t&&(l={type:"atxHeadingText",start:n[t][1].start,end:n[r][1].end},s={type:"chunkText",start:n[t][1].start,end:n[r][1].end,contentType:"text"},Y(n,t,r-t+1,[["enter",l,u],["enter",s,u],["exit",s,u],["exit",l,u]])),n}function Un(n,u,r){const t=this;let l=0;return s;function s(p){return n.enter("atxHeading"),n.enter("atxHeadingSequence"),a(p)}function a(p){return p===35&&l++<6?(n.consume(p),a):p===null||O(p)?(n.exit("atxHeadingSequence"),t.interrupt?u(p):o(p)):r(p)}function o(p){return p===35?(n.enter("atxHeadingSequence"),m(p)):p===null||b(p)?(n.exit("atxHeading"),u(p)):C(p)?y(n,o,"whitespace")(p):(n.enter("atxHeadingText"),h(p))}function m(p){return p===35?(n.consume(p),m):(n.exit("atxHeadingSequence"),o(p))}function h(p){return p===null||p===35||O(p)?(n.exit("atxHeadingText"),o(p)):(n.consume(p),h)}}const Ut={name:"htmlFlow",tokenize:Kn,resolveTo:Jn,concrete:!0},Gn={tokenize:Xn,partial:!0};function Jn(n){let u=n.length;for(;u--&&!(n[u][0]==="enter"&&n[u][1].type==="htmlFlow"););return u>1&&n[u-2][1].type==="linePrefix"&&(n[u][1].start=n[u-2][1].start,n[u+1][1].start=n[u-2][1].start,n.splice(u-2,2)),n}function Kn(n,u,r){const t=this;let l,s,a,o,m;return h;function h(e){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(e),p}function p(e){return e===33?(n.consume(e),k):e===47?(n.consume(e),x):e===63?(n.consume(e),l=3,t.interrupt?u:j):P(e)?(n.consume(e),a=String.fromCharCode(e),s=!0,V):r(e)}function k(e){return e===45?(n.consume(e),l=2,z):e===91?(n.consume(e),l=5,a="CDATA[",o=0,S):P(e)?(n.consume(e),l=4,t.interrupt?u:j):r(e)}function z(e){return e===45?(n.consume(e),t.interrupt?u:j):r(e)}function S(e){return e===a.charCodeAt(o++)?(n.consume(e),o===a.length?t.interrupt?u:c:S):r(e)}function x(e){return P(e)?(n.consume(e),a=String.fromCharCode(e),V):r(e)}function V(e){return e===null||e===47||e===62||O(e)?e!==47&&s&&nn.includes(a.toLowerCase())?(l=1,t.interrupt?u(e):c(e)):bn.includes(a.toLowerCase())?(l=6,e===47?(n.consume(e),_):t.interrupt?u(e):c(e)):(l=7,t.interrupt&&!t.parser.lazy[t.now().line]?r(e):s?q(e):w(e)):e===45||M(e)?(n.consume(e),a+=String.fromCharCode(e),V):r(e)}function _(e){return e===62?(n.consume(e),t.interrupt?u:c):r(e)}function w(e){return C(e)?(n.consume(e),w):L(e)}function q(e){return e===47?(n.consume(e),L):e===58||e===95||P(e)?(n.consume(e),B):C(e)?(n.consume(e),q):L(e)}function B(e){return e===45||e===46||e===58||e===95||M(e)?(n.consume(e),B):D(e)}function D(e){return e===61?(n.consume(e),f):C(e)?(n.consume(e),D):q(e)}function f(e){return e===null||e===60||e===61||e===62||e===96?r(e):e===34||e===39?(n.consume(e),m=e,g):C(e)?(n.consume(e),f):(m=null,Q(e))}function g(e){return e===null||b(e)?r(e):e===m?(n.consume(e),R):(n.consume(e),g)}function Q(e){return e===null||e===34||e===39||e===60||e===61||e===62||e===96||O(e)?D(e):(n.consume(e),Q)}function R(e){return e===47||e===62||C(e)?q(e):r(e)}function L(e){return e===62?(n.consume(e),H):r(e)}function H(e){return C(e)?(n.consume(e),H):e===null||b(e)?c(e):r(e)}function c(e){return e===45&&l===2?(n.consume(e),W):e===60&&l===1?(n.consume(e),K):e===62&&l===4?(n.consume(e),T):e===63&&l===3?(n.consume(e),j):e===93&&l===5?(n.consume(e),A):b(e)&&(l===6||l===7)?n.check(Gn,T,I)(e):e===null||b(e)?I(e):(n.consume(e),c)}function I(e){return n.exit("htmlFlowData"),E(e)}function E(e){return e===null?i(e):b(e)?n.attempt({tokenize:N,partial:!0},E,i)(e):(n.enter("htmlFlowData"),c(e))}function N(e,on,sn){return mn;function mn(J){return e.enter("lineEnding"),e.consume(J),e.exit("lineEnding"),pn}function pn(J){return t.parser.lazy[t.now().line]?sn(J):on(J)}}function W(e){return e===45?(n.consume(e),j):c(e)}function K(e){return e===47?(n.consume(e),a="",U):c(e)}function U(e){return e===62&&nn.includes(a.toLowerCase())?(n.consume(e),T):P(e)&&a.length<8?(n.consume(e),a+=String.fromCharCode(e),U):c(e)}function A(e){return e===93?(n.consume(e),j):c(e)}function j(e){return e===62?(n.consume(e),T):e===45&&l===2?(n.consume(e),j):c(e)}function T(e){return e===null||b(e)?(n.exit("htmlFlowData"),i(e)):(n.consume(e),T)}function i(e){return n.exit("htmlFlow"),u(e)}}function Xn(n,u,r){return t;function t(l){return n.exit("htmlFlowData"),n.enter("lineEndingBlank"),n.consume(l),n.exit("lineEndingBlank"),n.attempt($,u,r)}}const Gt={name:"htmlText",tokenize:Yn};function Yn(n,u,r){const t=this;let l,s,a,o;return m;function m(i){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(i),h}function h(i){return i===33?(n.consume(i),p):i===47?(n.consume(i),Q):i===63?(n.consume(i),f):P(i)?(n.consume(i),H):r(i)}function p(i){return i===45?(n.consume(i),k):i===91?(n.consume(i),s="CDATA[",a=0,_):P(i)?(n.consume(i),D):r(i)}function k(i){return i===45?(n.consume(i),z):r(i)}function z(i){return i===null||i===62?r(i):i===45?(n.consume(i),S):x(i)}function S(i){return i===null||i===62?r(i):x(i)}function x(i){return i===null?r(i):i===45?(n.consume(i),V):b(i)?(o=x,A(i)):(n.consume(i),x)}function V(i){return i===45?(n.consume(i),T):x(i)}function _(i){return i===s.charCodeAt(a++)?(n.consume(i),a===s.length?w:_):r(i)}function w(i){return i===null?r(i):i===93?(n.consume(i),q):b(i)?(o=w,A(i)):(n.consume(i),w)}function q(i){return i===93?(n.consume(i),B):w(i)}function B(i){return i===62?T(i):i===93?(n.consume(i),B):w(i)}function D(i){return i===null||i===62?T(i):b(i)?(o=D,A(i)):(n.consume(i),D)}function f(i){return i===null?r(i):i===63?(n.consume(i),g):b(i)?(o=f,A(i)):(n.consume(i),f)}function g(i){return i===62?T(i):f(i)}function Q(i){return P(i)?(n.consume(i),R):r(i)}function R(i){return i===45||M(i)?(n.consume(i),R):L(i)}function L(i){return b(i)?(o=L,A(i)):C(i)?(n.consume(i),L):T(i)}function H(i){return i===45||M(i)?(n.consume(i),H):i===47||i===62||O(i)?c(i):r(i)}function c(i){return i===47?(n.consume(i),T):i===58||i===95||P(i)?(n.consume(i),I):b(i)?(o=c,A(i)):C(i)?(n.consume(i),c):T(i)}function I(i){return i===45||i===46||i===58||i===95||M(i)?(n.consume(i),I):E(i)}function E(i){return i===61?(n.consume(i),N):b(i)?(o=E,A(i)):C(i)?(n.consume(i),E):c(i)}function N(i){return i===null||i===60||i===61||i===62||i===96?r(i):i===34||i===39?(n.consume(i),l=i,W):b(i)?(o=N,A(i)):C(i)?(n.consume(i),N):(n.consume(i),l=void 0,U)}function W(i){return i===l?(n.consume(i),K):i===null?r(i):b(i)?(o=W,A(i)):(n.consume(i),W)}function K(i){return i===62||i===47||O(i)?c(i):r(i)}function U(i){return i===null||i===34||i===39||i===60||i===61||i===96?r(i):i===62||O(i)?c(i):(n.consume(i),U)}function A(i){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),y(n,j,"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function j(i){return n.enter("htmlTextData"),o(i)}function T(i){return i===62?(n.consume(i),n.exit("htmlTextData"),n.exit("htmlText"),u):r(i)}}const ln={name:"labelEnd",tokenize:tt,resolveTo:nt,resolveAll:dn},Zn={tokenize:rt},$n={tokenize:et},vn={tokenize:it};function dn(n){let u=-1,r;for(;++u<n.length;)r=n[u][1],(r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd")&&(n.splice(u+1,r.type==="labelImage"?4:2),r.type="data",u++);return n}function nt(n,u){let r=n.length,t=0,l,s,a,o;for(;r--;)if(l=n[r][1],s){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;n[r][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(a){if(n[r][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(s=r,l.type!=="labelLink")){t=2;break}}else l.type==="labelEnd"&&(a=r);const m={type:n[s][1].type==="labelLink"?"link":"image",start:Object.assign({},n[s][1].start),end:Object.assign({},n[n.length-1][1].end)},h={type:"label",start:Object.assign({},n[s][1].start),end:Object.assign({},n[a][1].end)},p={type:"labelText",start:Object.assign({},n[s+t+2][1].end),end:Object.assign({},n[a-2][1].start)};return o=[["enter",m,u],["enter",h,u]],o=F(o,n.slice(s+1,s+t+3)),o=F(o,[["enter",p,u]]),o=F(o,rn(u.parser.constructs.insideSpan.null,n.slice(s+t+4,a-3),u)),o=F(o,[["exit",p,u],n[a-2],n[a-1],["exit",h,u]]),o=F(o,n.slice(a+1)),o=F(o,[["exit",m,u]]),Y(n,s,n.length,o),n}function tt(n,u,r){const t=this;let l=t.events.length,s,a;for(;l--;)if((t.events[l][1].type==="labelImage"||t.events[l][1].type==="labelLink")&&!t.events[l][1]._balanced){s=t.events[l][1];break}return o;function o(p){return s?s._inactive?h(p):(a=t.parser.defined.includes(Z(t.sliceSerialize({start:s.end,end:t.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(p),n.exit("labelMarker"),n.exit("labelEnd"),m):r(p)}function m(p){return p===40?n.attempt(Zn,u,a?u:h)(p):p===91?n.attempt($n,u,a?n.attempt(vn,u,h):h)(p):a?u(p):h(p)}function h(p){return s._balanced=!0,r(p)}}function rt(n,u,r){return t;function t(m){return n.enter("resource"),n.enter("resourceMarker"),n.consume(m),n.exit("resourceMarker"),G(n,l)}function l(m){return m===41?o(m):en(n,s,r,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function s(m){return O(m)?G(n,a)(m):o(m)}function a(m){return m===34||m===39||m===40?an(n,G(n,o),r,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):o(m)}function o(m){return m===41?(n.enter("resourceMarker"),n.consume(m),n.exit("resourceMarker"),n.exit("resource"),u):r(m)}}function et(n,u,r){const t=this;return l;function l(a){return un.call(t,n,s,r,"reference","referenceMarker","referenceString")(a)}function s(a){return t.parser.defined.includes(Z(t.sliceSerialize(t.events[t.events.length-1][1]).slice(1,-1)))?u(a):r(a)}}function it(n,u,r){return t;function t(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),l}function l(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),u):r(s)}}const Jt={name:"labelStartImage",tokenize:ut,resolveAll:ln.resolveAll};function ut(n,u,r){const t=this;return l;function l(o){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(o),n.exit("labelImageMarker"),s}function s(o){return o===91?(n.enter("labelMarker"),n.consume(o),n.exit("labelMarker"),n.exit("labelImage"),a):r(o)}function a(o){return o===94&&"_hiddenFootnoteSupport"in t.parser.constructs?r(o):u(o)}}const Kt={name:"labelStartLink",tokenize:at,resolveAll:ln.resolveAll};function at(n,u,r){const t=this;return l;function l(a){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(a),n.exit("labelMarker"),n.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in t.parser.constructs?r(a):u(a)}}const Xt={name:"lineEnding",tokenize:lt};function lt(n,u){return r;function r(t){return n.enter("lineEnding"),n.consume(t),n.exit("lineEnding"),y(n,u,"linePrefix")}}const ot={name:"thematicBreak",tokenize:st};function st(n,u,r){let t=0,l;return s;function s(m){return n.enter("thematicBreak"),l=m,a(m)}function a(m){return m===l?(n.enter("thematicBreakSequence"),o(m)):C(m)?y(n,a,"whitespace")(m):t<3||m!==null&&!b(m)?r(m):(n.exit("thematicBreak"),u(m))}function o(m){return m===l?(n.consume(m),t++,o):(n.exit("thematicBreakSequence"),a(m))}}const mt={name:"list",tokenize:xt,continuation:{tokenize:gt},exit:St},pt={tokenize:bt,partial:!0},ht={tokenize:kt,partial:!0};function xt(n,u,r){const t=this,l=t.events[t.events.length-1];let s=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,a=0;return o;function o(S){const x=t.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!t.containerState.marker||S===t.containerState.marker:X(S)){if(t.containerState.type||(t.containerState.type=x,n.enter(x,{_container:!0})),x==="listUnordered")return n.enter("listItemPrefix"),S===42||S===45?n.check(ot,r,h)(S):h(S);if(!t.interrupt||S===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),m(S)}return r(S)}function m(S){return X(S)&&++a<10?(n.consume(S),m):(!t.interrupt||a<2)&&(t.containerState.marker?S===t.containerState.marker:S===41||S===46)?(n.exit("listItemValue"),h(S)):r(S)}function h(S){return n.enter("listItemMarker"),n.consume(S),n.exit("listItemMarker"),t.containerState.marker=t.containerState.marker||S,n.check($,t.interrupt?r:p,n.attempt(pt,z,k))}function p(S){return t.containerState.initialBlankLine=!0,s++,z(S)}function k(S){return C(S)?(n.enter("listItemPrefixWhitespace"),n.consume(S),n.exit("listItemPrefixWhitespace"),z):r(S)}function z(S){return t.containerState.size=s+t.sliceSerialize(n.exit("listItemPrefix"),!0).length,u(S)}}function gt(n,u,r){const t=this;return t.containerState._closeFlow=void 0,n.check($,l,s);function l(o){return t.containerState.furtherBlankLines=t.containerState.furtherBlankLines||t.containerState.initialBlankLine,y(n,u,"listItemIndent",t.containerState.size+1)(o)}function s(o){return t.containerState.furtherBlankLines||!C(o)?(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,a(o)):(t.containerState.furtherBlankLines=void 0,t.containerState.initialBlankLine=void 0,n.attempt(ht,u,a)(o))}function a(o){return t.containerState._closeFlow=!0,t.interrupt=void 0,y(n,n.attempt(mt,u,r),"linePrefix",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function kt(n,u,r){const t=this;return y(n,l,"listItemIndent",t.containerState.size+1);function l(s){const a=t.events[t.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===t.containerState.size?u(s):r(s)}}function St(n){n.exit(this.containerState.type)}function bt(n,u,r){const t=this;return y(n,l,"listItemPrefixWhitespace",t.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function l(s){const a=t.events[t.events.length-1];return!C(s)&&a&&a[1].type==="listItemPrefixWhitespace"?u(s):r(s)}}const Yt={name:"setextUnderline",tokenize:zt,resolveTo:ct};function ct(n,u){let r=n.length,t,l,s;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){t=r;break}n[r][1].type==="paragraph"&&(l=r)}else n[r][1].type==="content"&&n.splice(r,1),!s&&n[r][1].type==="definition"&&(s=r);const a={type:"setextHeading",start:Object.assign({},n[l][1].start),end:Object.assign({},n[n.length-1][1].end)};return n[l][1].type="setextHeadingText",s?(n.splice(l,0,["enter",a,u]),n.splice(s+1,0,["exit",n[t][1],u]),n[t][1].end=Object.assign({},n[s][1].end)):n[t][1]=a,n.push(["exit",a,u]),n}function zt(n,u,r){const t=this;let l=t.events.length,s,a;for(;l--;)if(t.events[l][1].type!=="lineEnding"&&t.events[l][1].type!=="linePrefix"&&t.events[l][1].type!=="content"){a=t.events[l][1].type==="paragraph";break}return o;function o(p){return!t.parser.lazy[t.now().line]&&(t.interrupt||a)?(n.enter("setextHeadingLine"),n.enter("setextHeadingLineSequence"),s=p,m(p)):r(p)}function m(p){return p===s?(n.consume(p),m):(n.exit("setextHeadingLineSequence"),y(n,h,"lineSuffix")(p))}function h(p){return p===null||b(p)?(n.exit("setextHeadingLine"),u(p)):r(p)}}export{Cn as a,$ as b,_t as c,Qt as d,jt as e,Ut as f,Ht as g,Wt as h,Rt as i,ft as j,Xt as k,mt as l,Jt as m,Bt as n,Dt as o,Gt as p,Kt as q,Nt as r,Yt as s,ot as t,ln as u,Vt as v};
