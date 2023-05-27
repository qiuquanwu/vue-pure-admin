/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function _(t){return Object.prototype.toString.call(t)==="[object Object]"}function E(t){var r,n;return _(t)===!1?!1:(r=t.constructor,r===void 0?!0:(n=r.prototype,!(_(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)))}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},O.apply(this,arguments)}function P(t,r){if(t==null)return{};var n,e,i={},o=Object.keys(t);for(e=0;e<o.length;e++)r.indexOf(n=o[e])>=0||(i[n]=t[n]);return i}const k={silent:!1,logLevel:"warn"},B=["validator"],S=Object.prototype,A=S.toString,D=S.hasOwnProperty,N=/^\s*function (\w+)/;function $(t){var r;const n=(r=t==null?void 0:t.type)!==null&&r!==void 0?r:t;if(n){const e=n.toString().match(N);return e?e[1]:""}return""}const y=E,F=t=>t;let c=F;const h=(t,r)=>D.call(t,r),L=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},b=Array.isArray||function(t){return A.call(t)==="[object Array]"},g=t=>A.call(t)==="[object Function]",m=(t,r)=>y(t)&&h(t,"_vueTypes_name")&&(!r||t._vueTypes_name===r),V=t=>y(t)&&(h(t,"type")||["_vueTypes_name","validator","default","required"].some(r=>h(t,r)));function T(t,r){return Object.defineProperty(t.bind(r),"__original",{value:t})}function v(t,r,n=!1){let e,i=!0,o="";e=y(t)?t:{type:t};const a=m(e)?e._vueTypes_name+" - ":"";if(V(e)&&e.type!==null){if(e.type===void 0||e.type===!0||!e.required&&r==null)return i;b(e.type)?(i=e.type.some(s=>v(s,r,!0)===!0),o=e.type.map(s=>$(s)).join(" or ")):(o=$(e),i=o==="Array"?b(r):o==="Object"?y(r):o==="String"||o==="Number"||o==="Boolean"||o==="Function"?function(s){if(s==null)return"";const u=s.constructor.toString().match(N);return u?u[1]:""}(r)===o:r instanceof e.type)}if(!i){const s=`${a}value "${r}" should be of type "${o}"`;return n===!1?(c(s),!1):s}if(h(e,"validator")&&g(e.validator)){const s=c,u=[];if(c=l=>{u.push(l)},i=e.validator(r),c=s,!i){const l=(u.length>1?"* ":"")+u.join(`
* `);return u.length=0,n===!1?(c(l),i):l}}return i}function d(t,r){const n=Object.defineProperties(r,{_vueTypes_name:{value:t,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(i){return i===void 0?this.type===Boolean||Array.isArray(this.type)&&this.type.includes(Boolean)?void(this.default=void 0):(h(this,"default")&&delete this.default,this):g(i)||v(this,i,!0)===!0?(this.default=b(i)?()=>[...i]:y(i)?()=>Object.assign({},i):i,this):(c(`${this._vueTypes_name} - invalid default value: "${i}"`),this)}}}),{validator:e}=n;return g(e)&&(n.validator=T(e,n)),n}function f(t,r){const n=d(t,r);return Object.defineProperty(n,"validate",{value(e){return g(this.validator)&&c(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=T(e,this),this}})}function w(t,r,n){const e=function(u){const l={};return Object.getOwnPropertyNames(u).forEach(p=>{l[p]=Object.getOwnPropertyDescriptor(u,p)}),Object.defineProperties({},l)}(r);if(e._vueTypes_name=t,!y(n))return e;const{validator:i}=n,o=P(n,B);if(g(i)){let{validator:u}=e;u&&(u=(s=(a=u).__original)!==null&&s!==void 0?s:a),e.validator=T(u?function(l){return u.call(this,l)&&i.call(this,l)}:i,e)}var a,s;return Object.assign(e,o)}function j(t){return t.replace(/^(?!\s*$)/gm,"  ")}const Y=()=>f("any",{}),C=()=>f("function",{type:Function}),x=()=>f("boolean",{type:Boolean}),I=()=>f("string",{type:String}),J=()=>f("number",{type:Number}),M=()=>f("array",{type:Array}),R=()=>f("object",{type:Object}),U=()=>d("integer",{type:Number,validator(t){const r=L(t);return r===!1&&c(`integer - "${t}" is not an integer`),r}}),z=()=>d("symbol",{validator(t){const r=typeof t=="symbol";return r===!1&&c(`symbol - invalid value "${t}"`),r}}),G=()=>Object.defineProperty({type:null,validator(t){const r=t===null;return r===!1&&c("nullable - value should be null"),r}},"_vueTypes_name",{value:"nullable"});function H(t,r="custom validation failed"){if(typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return d(t.name||"<<anonymous function>>",{type:null,validator(n){const e=t(n);return e||c(`${this._vueTypes_name} - ${r}`),e}})}function K(t){if(!b(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const r=`oneOf - value should be one of "${t.map(e=>typeof e=="symbol"?e.toString():e).join('", "')}".`,n={validator(e){const i=t.indexOf(e)!==-1;return i||c(r),i}};if(t.indexOf(null)===-1){const e=t.reduce((i,o)=>{if(o!=null){const a=o.constructor;i.indexOf(a)===-1&&i.push(a)}return i},[]);e.length>0&&(n.type=e)}return d("oneOf",n)}function Q(t){if(!b(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");let r=!1,n=!1,e=[];for(let o=0;o<t.length;o+=1){const a=t[o];if(V(a)){if(g(a.validator)&&(r=!0),m(a,"oneOf")&&a.type){e=e.concat(a.type);continue}if(m(a,"nullable")){n=!0;continue}if(a.type===!0||!a.type){c('oneOfType - invalid usage of "true" and "null" as types.');continue}e=e.concat(a.type)}else e.push(a)}e=e.filter((o,a)=>e.indexOf(o)===a);const i=n===!1&&e.length>0?e:null;return d("oneOfType",r?{type:i,validator(o){const a=[],s=t.some(u=>{const l=v(u,o,!0);return typeof l=="string"&&a.push(l),l===!0});return s||c(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${j(a.join(`
`))}`),s}}:{type:i})}function W(t){return d("arrayOf",{type:Array,validator(r){let n="";const e=r.every(i=>(n=v(t,i,!0),n===!0));return e||c(`arrayOf - value validation error:
${j(n)}`),e}})}function X(t){return d("instanceOf",{type:t})}function Z(t){return d("objectOf",{type:Object,validator(r){let n="";const e=Object.keys(r).every(i=>(n=v(t,r[i],!0),n===!0));return e||c(`objectOf - value validation error:
${j(n)}`),e}})}function tt(t){const r=Object.keys(t),n=r.filter(i=>{var o;return!((o=t[i])===null||o===void 0||!o.required)}),e=d("shape",{type:Object,validator(i){if(!y(i))return!1;const o=Object.keys(i);if(n.length>0&&n.some(a=>o.indexOf(a)===-1)){const a=n.filter(s=>o.indexOf(s)===-1);return c(a.length===1?`shape - required property "${a[0]}" is not defined.`:`shape - required properties "${a.join('", "')}" are not defined.`),!1}return o.every(a=>{if(r.indexOf(a)===-1)return this._vueTypes_isLoose===!0||(c(`shape - shape definition does not include a "${a}" property. Allowed keys: "${r.join('", "')}".`),!1);const s=v(t[a],i[a],!0);return typeof s=="string"&&c(`shape - "${a}" property validation error:
 ${j(s)}`),s===!0})}});return Object.defineProperty(e,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(e,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),e}const et=["name","validate","getter"],rt=(()=>{var t;return(t=class{static get any(){return Y()}static get func(){return C().def(this.defaults.func)}static get bool(){return this.defaults.bool===void 0?x():x().def(this.defaults.bool)}static get string(){return I().def(this.defaults.string)}static get number(){return J().def(this.defaults.number)}static get array(){return M().def(this.defaults.array)}static get object(){return R().def(this.defaults.object)}static get integer(){return U().def(this.defaults.integer)}static get symbol(){return z()}static get nullable(){return G()}static extend(r){if(c("VueTypes.extend is deprecated. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details."),b(r))return r.forEach(u=>this.extend(u)),this;const{name:n,validate:e=!1,getter:i=!1}=r,o=P(r,et);if(h(this,n))throw new TypeError(`[VueTypes error]: Type "${n}" already defined`);const{type:a}=o;if(m(a))return delete o.type,Object.defineProperty(this,n,i?{get:()=>w(n,a,o)}:{value(...u){const l=w(n,a,o);return l.validator&&(l.validator=l.validator.bind(l,...u)),l}});let s;return s=i?{get(){const u=Object.assign({},o);return e?f(n,u):d(n,u)},enumerable:!0}:{value(...u){const l=Object.assign({},o);let p;return p=e?f(n,l):d(n,l),l.validator&&(p.validator=l.validator.bind(p,...u)),p},enumerable:!0},Object.defineProperty(this,n,s)}}).defaults={},t.sensibleDefaults=void 0,t.config=k,t.custom=H,t.oneOf=K,t.instanceOf=X,t.oneOfType=Q,t.arrayOf=W,t.objectOf=Z,t.shape=tt,t.utils={validate:(r,n)=>v(n,r,!0)===!0,toType:(r,n,e=!1)=>e?f(r,n):d(r,n)},t})();function q(t={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r;return(r=class extends rt{static get sensibleDefaults(){return O({},this.defaults)}static set sensibleDefaults(n){this.defaults=n!==!1?O({},n!==!0?n:t):{}}}).defaults=O({},t),r}class it extends q(){}const nt=q({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});class ot extends nt{static get style(){return f("style",{type:[String,Object]})}static get VNodeChild(){return f("VNodeChild",{type:void 0})}}export{ot as p};